(()=>{"use strict";class t{constructor(){this.resetBtn=document.querySelector(".forgot-btn")}getInput(){return{email:document.getElementById("email").value}}updateUI(){const t=document.querySelector(".forgot-btn"),e=document.querySelector(".loader");t.classList.add("hidden"),e.classList.remove("hidden")}defaultUI(){const t=document.querySelector(".forgot-btn"),e=document.querySelector(".loader");t.classList.remove("hidden"),e.classList.add("hidden")}resetPassword(t){this.resetBtn.addEventListener("click",(async()=>{this.updateUI();const e=this.getInput();await t(e),this.defaultUI()}))}}const e="https://naturist.herokuapp.com";let n={};const o=async(t,n,o)=>{const s={method:n,credentials:"include",headers:{"Content-Type":"application/json"}};o&&(s.body=JSON.stringify(o));try{const n=await fetch(`${e}${t}`,s);return await n.json()}catch(t){throw t}};class s{constructor(){}showPopup(t){const e=document.querySelector(".popup");e.textContent=t,e.style.display="block",e.style.opacity="1"}hidePopup(){setTimeout((()=>{const t=document.querySelector(".popup");t.style.display="none",t.style.opacity="0"}),3e3)}}class a{constructor(){this.bg=document.querySelector(".bg")}showSpinner(){this.bg.classList.remove("hidden")}hideSpinner(){this.bg.classList.add("hidden")}}const i=new s,r=async t=>{try{const e=await o("/api/user/forgot-password","POST",t);i.showPopup(e.message),i.hidePopup()}catch(t){}};class c{constructor(){this.resetBtn=document.querySelector(".reset-btn")}getInput(){const t=document.querySelector("[name='new-password']").value,e=document.querySelector("[name='confirm-new-password']").value;return{password:t.toString(),confirmPassword:e.toString()}}updateUI(){const t=document.querySelector(".reset-btn"),e=document.querySelector(".loader");t.classList.add("hidden"),e.classList.remove("hidden")}defaultUI(){const t=document.querySelector(".reset-btn"),e=document.querySelector(".loader");t.classList.remove("hidden"),e.classList.add("hidden")}resetPassword(t){const e=window.location.search.split("=")[1];if(!e)return window.location.href="/";this.resetBtn.addEventListener("click",(async()=>{try{this.updateUI();const n=this.getInput();if(n.password!==n.confirmPassword)return popup.showPopup("Passwords do not match"),popup.hidePopup(),void this.defaultUI();await t(n,e),this.defaultUI()}catch(t){}}))}}const d=new a,u=new s,l=async t=>{try{await o("/api/user/logout","GET"),t.defaultUI(),window.location.href="/",d.hideSpinner()}catch(t){}},p=async t=>{try{t.updateUI();const e=t.getInputs(),n=await o("/api/user/signup","POST",e);n.data?u.showPopup(n.data.message):u.showPopup(n.message),t.resetInput(),u.hidePopup(),t.defaultUI()}catch(t){}},m=new a;class h{constructor(){this.navBarList=document.querySelector(".list")}updateUI(t){const e=document.querySelector(".user-not-loggedin"),n=document.querySelector(".user-loggedin");document.querySelector(".user-name").innerText=`Welcome, ${t.data.user.name.split(" ")[0]}`,e.classList.add("hidden"),n.classList.remove("hidden"),m.hideSpinner()}defaultUI(){const t=document.querySelector(".user-not-loggedin"),e=document.querySelector(".user-loggedin");t.classList.remove("hidden"),e.classList.add("hidden")}}const w=new s,g=async(t,e)=>{try{const n=await o(`/api/user/reset-password?token=${e}`,"POST",t);if("Fail"===n.status)w.showPopup(n.message),w.hidePopup();else{w.showPopup(n.message),w.hidePopup();const t=new h;setTimeout((()=>{l(t)}),1700)}}catch(t){}};class v{constructor(){this.passwordUpdateBtn=document.querySelector(".password-save-btn"),this.logoutBtn=document.querySelector(".log-out-btn"),this.nameUpdateBtn=document.querySelector(".name-save-btn"),this.emailUpdateBtn=document.querySelector(".email-save-btn")}setInput(t){document.getElementById("account-name").value=t.data.user.name,document.getElementById("account-email").value=t.data.user.email}getPasswordInput(){return{currentPassword:document.getElementById("current-password").value,newPassword:document.getElementById("new-password").value,confirmNewPassword:document.getElementById("confirm-new-password").value}}getNameInput(){return{name:document.getElementById("account-name").value}}getEmailInput(){return{email:document.getElementById("account-email").value}}resetInput(){document.getElementById("current-password").value="",document.getElementById("new-password").value="",document.getElementById("confirm-new-password").value=""}updatePasswordBtnUI(){this.passwordUpdateBtn.textContent="Updating..."}resetPasswordBtnUI(){this.passwordUpdateBtn.textContent="Update Password"}updateNameBtnUI(){this.nameUpdateBtn.textContent="Updating..."}resetNameBtnUI(){this.nameUpdateBtn.textContent="Update Name"}updateEmailBtnUI(){this.emailUpdateBtn.textContent="Updating..."}resetEmailBtnUI(){this.emailUpdateBtn.textContent="Update Email"}updateData(t,e,n,o,s){this.passwordUpdateBtn.addEventListener("click",(e=>{e.preventDefault(),t(s)})),this.nameUpdateBtn.addEventListener("click",(t=>{t.preventDefault(),e(s)})),this.emailUpdateBtn.addEventListener("click",(t=>{t.preventDefault(),n(s)})),this.logoutBtn.addEventListener("click",(async()=>{const t=new h;await o(t)}))}}const y=new a;let f=!1;const I=async t=>{t.updatePasswordBtnUI();const e=t.getPasswordInput();await(async t=>{try{const e=await o("/api/user/update-me/password","POST",t);u.showPopup(e.message),u.hidePopup()}catch(t){}})(e),t.resetPasswordBtnUI()},k=async t=>{t.updateNameBtnUI();const e=t.getNameInput();await(async t=>{try{const e=await o("/api/user/update-me/info","POST",t);u.showPopup(e.message),u.hidePopup()}catch(t){}})(e),t.resetNameBtnUI()},S=async t=>{t.updateEmailBtnUI();const e=t.getEmailInput();await(async t=>{try{const e=await o("/api/user/update-me/email","POST",t);u.showPopup(e.message),u.hidePopup()}catch(t){}})(e),t.resetEmailBtnUI()};class b{constructor(){this.loginBtn=document.querySelector(".login-btn")}getLoginInputs(){return{email:document.getElementById("email").value,password:document.getElementById("password").value}}updateUI(){const t=document.querySelector(".login-btn-text"),e=document.querySelector(".loader");t.classList.add("hidden"),e.classList.remove("hidden")}defaultUI(){const t=document.querySelector(".login-btn-text"),e=document.querySelector(".loader");t.classList.remove("hidden"),e.classList.add("hidden")}resetInput(){document.getElementById("password").value=""}login(){this.loginBtn.addEventListener("click",(()=>{(async t=>{try{t.updateUI();const e=t.getLoginInputs(),n=await o("/api/user/login","POST",e);if(n.data&&(u.showPopup(n.message),setTimeout((()=>{window.location.href=`/2fa.html?token=${n.data}`}),2e3)),"Fail"===n.status)t.defaultUI(),t.resetInput(),u.showPopup(n.message),u.hidePopup();else{const e=await o("/api/user/about-me","GET");window.sessionStorage.setItem("user",JSON.stringify(e)),window.sessionStorage.setItem("isUserLoggedIn",!0),t.defaultUI(),window.location.href="/"}}catch(t){}})(this)}))}}const B=new s,U=new a,L=()=>window.location.search.split("&").map((t=>t.replace("?",""))).filter((t=>t.includes("page="))).join("").split("=")[1];class P{constructor(){this.tourContainer=document.querySelector(".tour-container"),this.loadMoreBtn=document.querySelector(".load-more")}generateMarkup(t){const n=` <div class="tour">\n    <div class="tour-header">\n      <span class="image-overlay"></span>\n      <img src="${e}/${t.headImg}" alt="" class="tour-img">\n    </div>\n    <div class="tour-content">\n      <p class="tour-title">${t.name}</p>\n      <p class="tour-content-fact">${t.difficulty.toUpperCase()} ${t.tourLength} Days </p>\n      <p class="tour-content-info">${t.info}\n      </p>\n      <div class="tour-icons">\n        <div class="tour-content-icon">\n          <i class="far fa-map"></i>\n          <p>${t.location}</p>\n        </div>\n        <div class="tour-content-icon">\n          <i class="far fa-calendar"></i>\n          <p>June 2022</p>\n        </div>\n        <div class="tour-content-icon">\n          <i class="far fa-user"></i>\n          <p>${t.groupSize}</p>\n        </div>\n        <div class="tour-content-icon">\n          <i class="far fa-hourglass"></i>\n          <p>${t.tourLength}</p>\n        </div>\n      </div>\n    </div>\n    <div class="tour-footer">\n      <div class="tour-ratings">\n        <p class="tour-price">$${t.price} <span>per person</span></p>\n        <div class="tour-rating">${t.averageRatings} <span>rating (${t.totalRatings})</span></div>\n      </div>\n      <div class="tour-btn">\n        <a href="/tour-detail.html?id=${t._id}" class="tour-link">Details</a>\n      </div>\n    </div>\n  </div>`;this.tourContainer.insertAdjacentHTML("beforeend",n)}updateUIForLoadBtn(){const t=document.querySelector(".load-more-text"),e=document.querySelector(".loader");t.classList.add("hidden"),e.classList.remove("hidden")}resetUIForLoadBtn(){const t=document.querySelector(".load-more-text"),e=document.querySelector(".loader");t.classList.remove("hidden"),e.classList.add("hidden")}showMarkup(t){t.data.tours.forEach((t=>{this.generateMarkup(t)}))}loadMoreItems(t,e){L(),this.loadMoreBtn.addEventListener("click",(async()=>{try{this.updateUIForLoadBtn(),e.loadMoreBtn.dataset.page++;const n=e.loadMoreBtn.dataset.page,o=await t(`/api/tour?page=${n||1}&limit=3`,"GET");this.showMarkup(o),this.resetUIForLoadBtn()}catch(t){}}))}}class q{constructor(){this.otpBtn=document.querySelector(".send-otp-btn")}getInput(){return{OTP:document.querySelector("[name='update-email']").value}}updateUI(){const t=document.querySelector(".send-otp-text"),e=document.querySelector(".loader");t.classList.add("hidden"),e.classList.remove("hidden")}resetUI(){const t=document.querySelector(".send-otp-text"),e=document.querySelector(".loader");t.classList.remove("hidden"),e.classList.add("hidden")}updateEmail(t){const e=window.location.search.split("=")[1];if(!e)return window.location.href="/";this.otpBtn.addEventListener("click",(async()=>{try{this.updateUI();const n=this.getInput();await t(n,e),this.resetUI()}catch(t){}}))}}const E=async(t,e)=>{try{const n=await o(`/api/user/update-email?token=${e}`,"POST",t),a=new s;a.showPopup(n.message),a.hidePopup(),"success"===n.status&&setTimeout((()=>{window.location.href="/login.html"}),2e3)}catch(t){}};class ${constructor(){this.signupbtn=document.querySelector(".signup-btn")}getInputs(){return{email:document.getElementById("email").value,password:document.getElementById("password").value,confirmPassword:document.getElementById("confirm-password").value,name:document.getElementById("name").value}}resetInput(){document.getElementById("password").value="",document.getElementById("confirm-password").value=""}updateUI(){const t=document.querySelector(".signup-btn-text"),e=document.querySelector(".loader");t.classList.add("hidden"),e.classList.remove("hidden")}defaultUI(){const t=document.querySelector(".signup-btn-text"),e=document.querySelector(".loader");t.classList.remove("hidden"),e.classList.add("hidden")}signUpEvent(t){this.signupbtn.addEventListener("click",(()=>{t(this)}))}}const T=async t=>{try{const e=await o(`/api/checkout/checkout-session/${t}`,"GET"),n={order_id:e.order.id,key:"rzp_test_iQXxC9LBZRPfH9",prefill:{name:e.order.notes.name,email:e.order.notes.email},handler(){window.location.href="/my-bookings.html?success=true"}};document.querySelector(".book-tour-btn").textContent="Book Tour Now",new Razorpay(n).open()}catch(t){}},x=new s,C=new class{constructor(){this.tourContainer=document.querySelector(".tour-container")}addOrRemove(){return document.querySelector(".bookmark-icon").classList.contains("added")}generateMarkup(t,n){const o=t.reviews.length,s=`<div class="tour">\n        <i class="${n?"fas added":"far"} fa-bookmark bookmark-icon"></i>\n        <div class="tour-info">\n        <div class="tour-detail-title">\n        <span>${t.name.toUpperCase()}</span>\n\n        </div>\n            <div class="tour-info-details">\n                <div class="tour-info-detail">\n                    <i class="far fa-clock"></i>\n                    <p>${t.tourLength} Days</p>\n                </div>\n                <div class="tour-info-detail">\n                    <i class="far fa-map"></i>\n                    <p>${t.location}</p>\n                </div>\n            </div>\n        </div>\n      </div>\n      <div class="tour-facts">\n        <div class="tour-facts-left">\n          <p class="tour-quick-facts">Quick Facts</p>\n          <div class="tour-facts-items">\n            <div class="tour-facts-item">\n              <i class="far fa-calendar-minus"></i>\n              <span>Next Date</span>\n              <p>June 2021</p>\n            </div>\n            <div class="tour-facts-item">\n              <i class="far fa-chart-bar"></i>\n              <span>Difficulty</span>\n              <p>${t.difficulty.toUpperCase()}</p>\n            </div>\n            <div class="tour-facts-item">\n              <i class="far fa-user"></i>\n              <span>Group Size</span>\n              <p>6</p>\n            </div>\n            <div class="tour-facts-item">\n              <i class="far fa-star"></i>\n              <span>Ratings</span>\n              <p>${t.averageRatings} / ${t.totalRatings}</p>\n            </div>\n          </div>\n        </div>\n        <div class="tour-facts-right">\n          <p class="tour-quick-facts">About the Mountain Biking</p>\n          <p class="tour-description">\n          ${t.info}\n          </p>\n          <p class="tour-description">\n                ${t.description}\n          </p>\n        </div>\n    </div>\n    <div class="slider ">\n          <i class="fas fa-arrow-left arrow left-arrow"></i>\n          <i class="fas fa-arrow-right arrow right-arrow"></i>\n          <img class="slider-img" src="./src/img/1.jpg" data-img-number="1" alt="">\n          <img class="slider-img" src="./src/img/2.jpg" data-img-number="2" alt="">\n          <img class="slider-img" src="./src/img/3.jpg" data-img-number="3" alt="">\n          \n        </div>\n    <div class="tour-images">\n      <img src="./src/img/1.jpg" alt="">\n      <img src="./src/img/2.jpg" alt="">\n      <img src="./src/img/3.jpg" alt="">\n    </div>\n    \n    <div class="tour-review">\n      \n    </div>\n    <div class="booking-section">\n    <div class="booking-container">\n    <img src="./src/img/1.jpg" alt="">\n  <div class="booking">\n    <h1 class="booking-text">WHAT ARE YOU WAITING FOR?</h1>\n    <p>7 days. 1 adventure. Infinite memories. Make it yours today!</p>\n  </div>\n  <button class="book-tour-btn" data-tour-id="${t._id}"> Book Tour Now </button>\n  </div>\n</div>\n    `;if(this.tourContainer.innerHTML="",this.tourContainer.insertAdjacentHTML("afterbegin",s),0==o){const t=document.querySelector(".tour-review");t.style.padding="0rem",t.style.marginTop="0"}if(document.querySelector(".tour").style.backgroundImage=`linear-gradient(\n      rgba(22, 160, 132, 0.8),\n      rgba(46, 204, 112, 0.8)\n    ), url("${e}/${t.headImg}")`,0!=o){const n=document.querySelector(".tour-review"),o=t.reviews.map((t=>{const n=[];for(let e=0;e<t.rating;e++)n.push('<i class="material-icons">star</i>');return`<div class="review">\n        <div class="review-info">\n          <img src="${e}/${t.user.profilePhoto}" alt="reviewer-img">\n          <p class="reviewer-name">${t.user.name}</p>\n        </div>\n        <p class="review-text">${t.review}</p>\n        <div class="review-ratings">\n          ${n.join("")}\n        </div>\n      </div>`}));n.innerHTML=o.join("")}}addToBookmark(t,e){document.querySelector(".fa-bookmark").addEventListener("click",(function(){t(e)}))}updateBookmarkUI(t){"spinner"===t?document.querySelector(".bookmark-icon").className="fas fa-spinner fa-spin bookmark-icon":"added"===t?document.querySelector(".bookmark-icon").className="fas added fa-bookmark bookmark-icon":"removed"===t&&(document.querySelector(".bookmark-icon").className="far fa-bookmark bookmark-icon")}getBookBtn(){return document.querySelector(".book-tour-btn")}bookingHandler(t){const e=document.querySelector(".book-tour-btn");e.addEventListener("click",(async()=>{e.textContent="Processing...","Fail"==(await t("/api/user/about-me","GET")).status&&(window.location.href="/login.html");const n=window.location.search.split("=")[1];await T(n)}))}},M=new a,O=async t=>{try{const e=C.addOrRemove();C.updateBookmarkUI("spinner");const n=await o("/api/bookmark",e?"DELETE":"POST",{tourId:t});"success"===n.status?(x.showPopup("Tour added to your bookmarks"),C.updateBookmarkUI("added")):n.status||(x.showPopup("Tour has been removed from your bookmarks"),C.updateBookmarkUI("removed")),x.hidePopup()}catch(t){}},N=new class{constructor(){this.otpBtn=document.querySelector(".login-btn")}getInput(){return{OTP:document.getElementById("email").value}}getToken(){return window.location.search.split("=")[1]}twoFA(t){const e=this.getToken();if(!e)return window.location.href="/login.html";this.otpBtn.addEventListener("click",(async()=>{await t(e)}))}updateUI(){const t=document.querySelector(".login-btn-text"),e=document.querySelector(".loader");t.classList.add("hidden"),e.classList.remove("hidden")}defaultUI(){const t=document.querySelector(".login-btn-text"),e=document.querySelector(".loader");t.classList.remove("hidden"),e.classList.add("hidden")}},j=new s,D=async t=>{N.updateUI();const e=N.getInput(),n=await o(`/api/user/2fa?token=${t}`,"POST",e);"success"===n.status?(j.showPopup("Logged in successfully!"),j.hidePopup(),window.sessionStorage.setItem("isUserLoggedIn",!0),setTimeout((()=>{window.location.href="/index.html"}),1700)):(j.showPopup(n.message),j.hidePopup()),N.defaultUI()};class F{constructor(){this.container=document.querySelector(".tour-container")}showBookings(t){const n=` <div class="tour">\n    <div class="tour-header">\n      <span class="image-overlay"></span>\n      <img src="${e}/${t.headImg}" alt="" class="tour-img">\n    </div>\n    <div class="tour-content">\n      <p class="tour-title">${t.name}</p>\n      <p class="tour-content-fact">${t.difficulty.toUpperCase()} ${t.tourLength} Days </p>\n      <p class="tour-content-info">${t.info}\n      </p>\n      <div class="tour-icons">\n        <div class="tour-content-icon">\n          <i class="far fa-map"></i>\n          <p>${t.location}</p>\n        </div>\n        <div class="tour-content-icon">\n          <i class="far fa-calendar"></i>\n          <p>June 2022</p>\n        </div>\n        <div class="tour-content-icon">\n          <i class="far fa-user"></i>\n          <p>${t.groupSize}</p>\n        </div>\n        <div class="tour-content-icon">\n          <i class="far fa-hourglass"></i>\n          <p>${t.tourLength}</p>\n        </div>\n      </div>\n    </div>\n    <div class="tour-footer">\n      <div class="tour-ratings">\n        <p class="tour-price">$${t.price} <span>per person</span></p>\n        <div class="tour-rating">${t.averageRatings} <span>rating (${t.totalRatings})</span></div>\n      </div>\n      <div class="tour-btn">\n        <a href="/tour-detail.html?id=${t._id}" class="tour-link">Details</a>\n      </div>\n    </div>\n  </div>`;this.container.insertAdjacentHTML("beforeend",n)}}const G=new a;(async()=>{try{G.showSpinner(),await(async()=>{try{const t=await o("/api/user/about-me","GET");"success"===t.status?((new h).updateUI(t),f=!0,n=t):y.hideSpinner()}catch(t){}})(),(async()=>{try{if("/activate-account.html"===window.location.pathname){const t=window.location.search.split("=")[1];if(!t)return window.location.href="/";const e=await o(`/api/user/activate-account?verify=${t}`,"GET");"success"===e.status?window.location.href="/login.html?activated=true":document.write(e.message)}}catch(t){}})(),(async()=>{try{if("/tours.html"==window.location.pathname){const t=new a,e=L(),n=3;t.showSpinner();const s=new P;s.loadMoreItems(o,s);const i=await o(`/api/tour?page=${e||1}&limit=${n}`,"GET");s.showMarkup(i),t.hideSpinner()}}catch(t){}})(),(async()=>{try{if("/my-bookings.html"===window.location.pathname){if("?success=true"==window.location.search){const t=new s;t.showPopup("Tour has been added to your bookings"),t.hidePopup(),window.history.replaceState("","","/my-bookings.html")}const t=new a;t.showSpinner();const e=await o("/api/booking","GET");if("Fail"==e.status)return popup.showPopup("Something went wrong!");const n=new F;e.data.bookings.forEach((t=>{n.showBookings(t.tour)})),t.hideSpinner()}}catch(t){}})(),(async()=>{try{if("/tour-detail.html"==window.location.pathname){const t=window.location.search.split("=")[1];if(!t)return window.location.href="/tours.html";M.showSpinner(),await(async(t,e)=>{try{const n=await o(`/api/tour/${t}`,"GET"),s=await o("/api/bookmark","GET");let a=!1;"Fail"!==s.status&&(a=s.bookmarks.some((t=>t._id==n.data.tour._id))),e.generateMarkup(n.data.tour,a),M.hideSpinner()}catch(t){M.hideSpinner()}})(t,C),await C.addToBookmark(O,t),C.bookingHandler(o)}}catch(t){}})(),(()=>{if("/forgot-password.html"==window.location.pathname){const e=new a;e.showSpinner(),(new t).resetPassword(r),e.hideSpinner()}})(),(()=>{if("/reset-password.html"===window.location.pathname){const t=new a;(new c).resetPassword(g),t.hideSpinner()}})(),(()=>{if("/dashboard.html"==window.location.pathname){if(!f)return window.location.href="/login.html?notLoggedIn=true";const t=new a,e=new v;e.setInput(n),e.updateData(I,k,S,l,view),t.hideSpinner()}})(),"/login.html"===window.location.pathname&&"?activated=true"===window.location.search&&setTimeout((()=>{B.showPopup("Account verified"),B.hidePopup()}),500),"/login.html"==window.location.pathname&&(U.showSpinner(),(new b).login(),U.hideSpinner()),"/login.html"==window.location.pathname&&"?notLoggedIn=true"===window.location.search&&setTimeout((()=>{B.showPopup("You are not logged in! Please log in."),B.hidePopup()}),500),"/signup.html"==window.location.pathname&&(new $).signUpEvent(p),"/update-email.html"===window.location.pathname&&(new q).updateEmail(E),"/2fa.html"==window.location.pathname&&N.twoFA(D),G.hideSpinner()}catch(t){console.log(t)}})()})();