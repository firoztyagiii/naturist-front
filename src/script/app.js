(()=>{"use strict";class t{constructor(){this.resetBtn=document.querySelector(".forgot-btn")}getInput(){return{email:document.getElementById("email").value}}updateUI(){const t=document.querySelector(".forgot-btn"),e=document.querySelector(".loader");t.classList.add("hidden"),e.classList.remove("hidden")}defaultUI(){const t=document.querySelector(".forgot-btn"),e=document.querySelector(".loader");t.classList.remove("hidden"),e.classList.add("hidden")}resetPassword(t){this.resetBtn.addEventListener("click",(async()=>{this.updateUI();const e=this.getInput();await t(e),this.defaultUI()}))}}const e="https://naturist.herokuapp.com",n="https://naturist.sgp1.digitaloceanspaces.com/";let o={};const a=async(t,n,o)=>{const a={method:n,credentials:"include",headers:{"Content-Type":"application/json"}};o&&(a.body=JSON.stringify(o));try{const n=await fetch(`${e}${t}`,a);return await n.json()}catch(t){throw t}};class s{constructor(){}showPopup(t){const e=document.querySelector(".popup");e.textContent=t,e.style.opacity="1",e.style.zIndex="100"}hidePopup(){setTimeout((()=>{const t=document.querySelector(".popup");t.style.opacity="0",setTimeout((()=>{t.style.zIndex="-10"}),500)}),3e3)}}class i{constructor(){this.bg=document.querySelector(".bg"),this.container=document.querySelector(".container")}showSpinner(){this.bg.classList.remove("hidden"),this.container.style.filter="blur(2px)"}hideSpinner(){this.bg.classList.add("hidden"),this.container.style.filter="blur(0px)"}}const r=new s,c=async t=>{try{const e=await a("/api/user/forgot-password","POST",t);r.showPopup(e.message),r.hidePopup()}catch(t){}};class d{constructor(){this.resetBtn=document.querySelector(".reset-btn")}getInput(){const t=document.querySelector("[name='new-password']").value,e=document.querySelector("[name='confirm-new-password']").value;return{password:t.toString(),confirmPassword:e.toString()}}updateUI(){const t=document.querySelector(".reset-btn"),e=document.querySelector(".loader");t.classList.add("hidden"),e.classList.remove("hidden")}defaultUI(){const t=document.querySelector(".reset-btn"),e=document.querySelector(".loader");t.classList.remove("hidden"),e.classList.add("hidden")}resetPassword(t){const e=window.location.search.split("=")[1];if(!e)return window.location.href="/";this.resetBtn.addEventListener("click",(async()=>{try{this.updateUI();const n=this.getInput();if(n.password!==n.confirmPassword)return popup.showPopup("Passwords do not match"),popup.hidePopup(),void this.defaultUI();await t(n,e),this.defaultUI()}catch(t){}}))}}const u=new i,l=new s,p=async t=>{try{await a("/api/user/logout","GET"),t.defaultUI(),window.location.href="/",u.hideSpinner()}catch(t){}},m=async t=>{try{t.updateUI();const e=t.getInputs(),n=await a("/api/user/signup","POST",e);n.data?l.showPopup(n.data.message):l.showPopup(n.message),t.resetInput(),l.hidePopup(),t.defaultUI()}catch(t){}},h=new i;class w{constructor(){this.navBarList=document.querySelector(".list")}updateUI(t){const e=document.querySelector(".user-not-loggedin"),o=document.querySelector(".user-loggedin"),a=document.querySelector(".user-name");e.classList.add("hidden"),o.classList.remove("hidden");const s=document.querySelector(".user-image");a.innerText=`Welcome, ${t.data.user.name.split(" ")[0]}`,s.src=`${n}${t.data.user.photo}`,h.hideSpinner()}defaultUI(){const t=document.querySelector(".user-not-loggedin"),e=document.querySelector(".user-loggedin");t.classList.remove("hidden"),e.classList.add("hidden")}}const g=new s,v=async(t,e)=>{try{const n=await a(`/api/user/reset-password?token=${e}`,"POST",t);if("Fail"===n.status)g.showPopup(n.message),g.hidePopup();else{g.showPopup(n.message),g.hidePopup();const t=new w;setTimeout((()=>{p(t)}),1e3)}}catch(t){}};class y{constructor(){this.passwordUpdateBtn=document.querySelector(".password-save-btn"),this.logoutBtn=document.querySelector(".log-out-btn"),this.nameUpdateBtn=document.querySelector(".name-save-btn"),this.emailUpdateBtn=document.querySelector(".email-save-btn"),this.bookmarkBtn=document.querySelector(".bookmark-btn"),this.photoUpdateBtn=document.querySelector(".photo-save-btn")}setInput(t){document.getElementById("account-name").value=t.data.user.name,document.getElementById("account-email").value=t.data.user.email,document.querySelector(".account-photo img").src=`${n}${t.data.user.photo}`}getPasswordInput(){return{currentPassword:document.getElementById("current-password").value,newPassword:document.getElementById("new-password").value,confirmNewPassword:document.getElementById("confirm-new-password").value}}getNameInput(){return{name:document.getElementById("account-name").value}}getEmailInput(){return{email:document.getElementById("account-email").value}}resetInput(){document.getElementById("current-password").value="",document.getElementById("new-password").value="",document.getElementById("confirm-new-password").value=""}updatePasswordBtnUI(){this.passwordUpdateBtn.textContent="Updating..."}resetPasswordBtnUI(){this.passwordUpdateBtn.textContent="Update Password"}updateNameBtnUI(){this.nameUpdateBtn.textContent="Updating..."}resetNameBtnUI(){this.nameUpdateBtn.textContent="Update Name"}updateEmailBtnUI(){this.emailUpdateBtn.textContent="Updating..."}resetEmailBtnUI(){this.emailUpdateBtn.textContent="Update Email"}updatePhotoBtnUI(){this.photoUpdateBtn.textContent="Updating..."}resetPhotoBtnUI(){this.photoUpdateBtn.textContent="Update Photo"}getImageFile(){const t=document.getElementById("photo"),[e]=t.files;return e}imagePreview(){document.getElementById("photo").addEventListener("change",(()=>{const t=this.getImageFile();document.querySelector(".account-photo img").src=URL.createObjectURL(t)}))}updateData(t,e,n,o,a,s){this.passwordUpdateBtn.addEventListener("click",(e=>{e.preventDefault(),t(s)})),this.nameUpdateBtn.addEventListener("click",(t=>{t.preventDefault(),e(s)})),this.emailUpdateBtn.addEventListener("click",(t=>{t.preventDefault(),n(s)})),this.logoutBtn.addEventListener("click",(async()=>{const t=new w;await a(t)})),this.bookmarkBtn.addEventListener("click",(()=>{window.location.href="/my-bookings.html"})),this.photoUpdateBtn.addEventListener("click",(t=>{t.preventDefault(),o(s)}))}}const f=new i;let I=!1;const S=async t=>{t.updatePasswordBtnUI();const e=t.getPasswordInput();await(async t=>{try{const e=await a("/api/user/update-me/password","POST",t);l.showPopup(e.message),l.hidePopup()}catch(t){}})(e),t.resetPasswordBtnUI()},k=async t=>{t.updateNameBtnUI();const e=t.getNameInput();await(async t=>{try{const e=await a("/api/user/update-me/info","POST",t);l.showPopup(e.message),l.hidePopup()}catch(t){}})(e),t.resetNameBtnUI()},b=async t=>{t.updateEmailBtnUI();const e=t.getEmailInput();await(async t=>{try{const e=await a("/api/user/update-me/email","POST",t);l.showPopup(e.message),l.hidePopup()}catch(t){}})(e),t.resetEmailBtnUI()},B=async t=>{t.updatePhotoBtnUI();const n=t.getImageFile(),o=new FormData;o.append("photo",n),await(async t=>{try{const n=await fetch(`${e}/api/user/update-me/photo`,{method:"POST",body:t}),o=await n.json();l.showPopup(o.message),l.hidePopup()}catch(t){}})(o),t.resetPhotoBtnUI()};class U{constructor(){this.loginBtn=document.querySelector(".login-btn")}getLoginInputs(){return{email:document.getElementById("email").value,password:document.getElementById("password").value}}updateUI(){const t=document.querySelector(".login-btn-text"),e=document.querySelector(".loader");t.classList.add("hidden"),e.classList.remove("hidden")}defaultUI(){const t=document.querySelector(".login-btn-text"),e=document.querySelector(".loader");t.classList.remove("hidden"),e.classList.add("hidden")}resetInput(){document.getElementById("password").value=""}login(){this.loginBtn.addEventListener("click",(()=>{(async t=>{try{t.updateUI();const e=t.getLoginInputs(),n=await a("/api/user/login","POST",e);if(n.data&&(l.showPopup(n.message),setTimeout((()=>{window.location.href=`/2fa.html?token=${n.data}`}),2e3)),"Fail"===n.status)t.defaultUI(),t.resetInput(),l.showPopup(n.message),l.hidePopup();else{const e=await a("/api/user/about-me","GET");window.sessionStorage.setItem("user",JSON.stringify(e)),window.sessionStorage.setItem("isUserLoggedIn",!0),t.defaultUI(),window.location.href="/"}}catch(t){}})(this)}))}}const L=new s,P=new i,q=()=>window.location.search.split("&").map((t=>t.replace("?",""))).filter((t=>t.includes("page="))).join("").split("=")[1];class ${constructor(){this.tourContainer=document.querySelector(".tour-container"),this.loadMoreBtn=document.querySelector(".load-more")}generateMarkup(t){const e=` <div class="tour">\n    <div class="tour-header">\n      <span class="image-overlay"></span>\n      <img src="${n}${t.headImg}" alt="" class="tour-img">\n    </div>\n    <div class="tour-content">\n      <p class="tour-title">${t.name}</p>\n      <p class="tour-content-fact">${t.difficulty.toUpperCase()} ${t.tourLength} Days </p>\n      <p class="tour-content-info">${t.info}\n      </p>\n      <div class="tour-icons">\n        <div class="tour-content-icon">\n          <i class="far fa-map"></i>\n          <p>${t.location}</p>\n        </div>\n        <div class="tour-content-icon">\n          <i class="far fa-calendar"></i>\n          <p>June 2022</p>\n        </div>\n        <div class="tour-content-icon">\n          <i class="far fa-user"></i>\n          <p>${t.groupSize}</p>\n        </div>\n        <div class="tour-content-icon">\n          <i class="far fa-hourglass"></i>\n          <p>${t.tourLength}</p>\n        </div>\n      </div>\n    </div>\n    <div class="tour-footer">\n      <div class="tour-ratings">\n        <p class="tour-price">$${t.price} <span>per person</span></p>\n        <div class="tour-rating">${t.averageRatings} <span>rating (${t.totalRatings})</span></div>\n      </div>\n      <div class="tour-btn">\n        <a href="/tour-detail.html?id=${t._id}" class="tour-link">Details</a>\n      </div>\n    </div>\n  </div>`;this.tourContainer.insertAdjacentHTML("beforeend",e)}resetContainer(){this.tourContainer.innerHTML=""}updateUIForLoadBtn(){const t=document.querySelector(".load-more-text"),e=document.querySelector(".loader");t.classList.add("hidden"),e.classList.remove("hidden")}resetUIForLoadBtn(){const t=document.querySelector(".load-more-text"),e=document.querySelector(".loader");t.classList.remove("hidden"),e.classList.add("hidden")}showMarkup(t){t.data.tours.forEach((t=>{this.generateMarkup(t)}))}loadMoreItems(t,e){q(),this.loadMoreBtn.addEventListener("click",(async()=>{try{this.updateUIForLoadBtn(),e.loadMoreBtn.dataset.page++;const n=e.loadMoreBtn.dataset.page,o=await t(`/api/tour?page=${n||1}&limit=3`,"GET");this.showMarkup(o),this.resetUIForLoadBtn()}catch(t){}}))}getSearchInput(){return document.querySelector(".search-input").value}addSearchListener(t){document.querySelector(".search-input").addEventListener("keyup",(async e=>{if(13==e.keyCode){const e=this.getSearchInput();await t(e)}})),document.querySelector(".search-label").addEventListener("click",(async()=>{const e=this.getSearchInput();await t(e)}))}}const E=new s,T=async t=>{const e=await a(`/api/tour?search=${t}`);if(0==e.result)return E.showPopup("No tour found"),void E.hidePopup();const n=new $;n.resetContainer(),n.showMarkup(e)};class x{constructor(){this.signupbtn=document.querySelector(".signup-btn")}getInputs(){return{email:document.getElementById("email").value,password:document.getElementById("password").value,confirmPassword:document.getElementById("confirm-password").value,name:document.getElementById("name").value}}resetInput(){document.getElementById("password").value="",document.getElementById("confirm-password").value=""}updateUI(){const t=document.querySelector(".signup-btn-text"),e=document.querySelector(".loader");t.classList.add("hidden"),e.classList.remove("hidden")}defaultUI(){const t=document.querySelector(".signup-btn-text"),e=document.querySelector(".loader");t.classList.remove("hidden"),e.classList.add("hidden")}signUpEvent(t){this.signupbtn.addEventListener("click",(()=>{t(this)}))}}const C=async t=>{try{const e=await a(`/api/checkout/checkout-session/${t}`,"GET"),n={order_id:e.order.id,key:"rzp_test_iQXxC9LBZRPfH9",prefill:{name:e.order.notes.name,email:e.order.notes.email},handler(){window.location.href="/my-bookings.html?success=true"}};document.querySelector(".book-tour-btn").textContent="Book Tour Now",new Razorpay(n).open()}catch(t){}},M=new s,F=new class{constructor(){this.tourContainer=document.querySelector(".tour-container")}addOrRemove(){return document.querySelector(".bookmark-icon").classList.contains("added")}generateMarkup(t,e){const o=t.reviews.length,a=`<div class="tour">\n        <i class="${e?"fas added":"far"} fa-bookmark bookmark-icon"></i>\n        <div class="tour-info">\n        <div class="tour-detail-title">\n        <span>${t.name.toUpperCase()}</span>\n\n        </div>\n            <div class="tour-info-details">\n                <div class="tour-info-detail">\n                    <i class="far fa-clock"></i>\n                    <p>${t.tourLength} Days</p>\n                </div>\n                <div class="tour-info-detail">\n                    <i class="far fa-map"></i>\n                    <p>${t.location}</p>\n                </div>\n            </div>\n        </div>\n      </div>\n      <div class="tour-facts">\n        <div class="tour-facts-left">\n          <p class="tour-quick-facts">Quick Facts</p>\n          <div class="tour-facts-items">\n            <div class="tour-facts-item">\n              <i class="far fa-calendar-minus"></i>\n              <span>Next Date</span>\n              <p>June 2021</p>\n            </div>\n            <div class="tour-facts-item">\n              <i class="far fa-chart-bar"></i>\n              <span>Difficulty</span>\n              <p>${t.difficulty.toUpperCase()}</p>\n            </div>\n            <div class="tour-facts-item">\n              <i class="far fa-user"></i>\n              <span>Group Size</span>\n              <p>6</p>\n            </div>\n            <div class="tour-facts-item">\n              <i class="far fa-star"></i>\n              <span>Ratings</span>\n              <p>${t.averageRatings} / ${t.totalRatings}</p>\n            </div>\n          </div>\n        </div>\n        <div class="tour-facts-right">\n          <p class="tour-quick-facts">About ${t.name.split(" ").map((t=>`${t[0].toUpperCase()}${t.slice(1)}`)).join(" ")}</p>\n          <p class="tour-description">\n          ${t.info}\n          </p>\n          <p class="tour-description">\n                ${t.description}\n          </p>\n        </div>\n    </div>\n   \n    <div class="tour-images">\n      <img src="${t.images[0]}" alt="">\n      <img src="${t.images[1]}" alt="">\n      <img src="${t.images[2]}" alt="">\n    </div>\n    \n    <div class="tour-review">\n      \n    </div>\n    <div class="booking-section">\n    <div class="booking-container">\n    <img src="${n}${t.headImg}" alt="">\n  <div class="booking">\n    <h1 class="booking-text">WHAT ARE YOU WAITING FOR?</h1>\n    <p>7 days. 1 adventure. Infinite memories. Make it yours today!</p>\n  </div>\n  <button class="book-tour-btn" data-tour-id="${t._id}"> Book Tour Now </button>\n  </div>\n</div>\n    `;if(this.tourContainer.innerHTML="",this.tourContainer.insertAdjacentHTML("afterbegin",a),0==o){const t=document.querySelector(".tour-review");t.style.padding="0rem",t.style.marginTop="0"}if(document.querySelector(".tour").style.backgroundImage=`linear-gradient(\n      rgba(22, 160, 132, 0.8),\n      rgba(46, 204, 112, 0.8)\n    ), url("${n}${t.headImg}")`,0!=o){const e=document.querySelector(".tour-review"),o=t.reviews.map((t=>{const e=[];for(let n=0;n<t.rating;n++)e.push('<i class="material-icons">star</i>');return`<div class="review">\n        <div class="review-info">\n          <img src="${n}${t.user.profilePhoto}" alt="reviewer-img">\n          <p class="reviewer-name">${t.user.name}</p>\n        </div>\n        <p class="review-text">${t.review}</p>\n        <div class="review-ratings">\n          ${e.join("")}\n        </div>\n      </div>`}));e.innerHTML=o.join("")}}addToBookmark(t,e){document.querySelector(".fa-bookmark").addEventListener("click",(function(){t(e)}))}updateBookmarkUI(t){"spinner"===t?document.querySelector(".bookmark-icon").className="fas fa-spinner fa-spin bookmark-icon":"added"===t?document.querySelector(".bookmark-icon").className="fas added fa-bookmark bookmark-icon":"removed"===t&&(document.querySelector(".bookmark-icon").className="far fa-bookmark bookmark-icon")}getBookBtn(){return document.querySelector(".book-tour-btn")}bookingHandler(t){const e=document.querySelector(".book-tour-btn");e.addEventListener("click",(async()=>{e.textContent="Processing...","Fail"==(await t("/api/user/about-me","GET")).status&&(window.location.href="/login.html");const n=window.location.search.split("=")[1];await C(n)}))}addImagePopup(){const t=document.querySelector(".tour-images"),e=document.querySelector(".image-popup"),n=document.querySelector(".image-popup-container img");t.addEventListener("click",(t=>{if(!t.target.src)return;const o=t.target.src;n.src=o,e.classList.remove("hidden")})),e.addEventListener("click",(function(){this.classList.add("hidden")}))}},N=new i,O=async t=>{try{const e=F.addOrRemove();F.updateBookmarkUI("spinner");const n=await a("/api/bookmark",e?"DELETE":"POST",{tourId:t});"Fail"===n.status&&(M.showPopup(n.message),F.updateBookmarkUI("removed")),"success"===n.status?F.updateBookmarkUI("added"):n.status||F.updateBookmarkUI("removed"),M.hidePopup()}catch(t){}},D=new class{constructor(){this.otpBtn=document.querySelector(".login-btn")}getInput(){return{OTP:document.getElementById("email").value}}getToken(){return window.location.search.split("=")[1]}twoFA(t){const e=this.getToken();if(!e)return window.location.href="/login.html";this.otpBtn.addEventListener("click",(async()=>{await t(e)}))}updateUI(){const t=document.querySelector(".login-btn-text"),e=document.querySelector(".loader");t.classList.add("hidden"),e.classList.remove("hidden")}defaultUI(){const t=document.querySelector(".login-btn-text"),e=document.querySelector(".loader");t.classList.remove("hidden"),e.classList.add("hidden")}},R=new s,G=async t=>{D.updateUI();const e=D.getInput(),n=await a(`/api/user/2fa?token=${t}`,"POST",e);"success"===n.status?(R.showPopup("Logged in successfully!"),R.hidePopup(),window.sessionStorage.setItem("isUserLoggedIn",!0),setTimeout((()=>{window.location.href="/index.html"}),1700)):(R.showPopup(n.message),R.hidePopup()),D.defaultUI()};class A{constructor(){this.container=document.querySelector(".tour-container")}showBookings(t){const e=` <div class="tour">\n    <div class="tour-header">\n      <span class="image-overlay"></span>\n      <img src="${n}${t.headImg}" alt="" class="tour-img">\n    </div>\n    <div class="tour-content">\n      <p class="tour-title">${t.name}</p>\n      <p class="tour-content-fact">${t.difficulty.toUpperCase()} ${t.tourLength} Days </p>\n      <p class="tour-content-info">${t.info}\n      </p>\n      <div class="tour-icons">\n        <div class="tour-content-icon">\n          <i class="far fa-map"></i>\n          <p>${t.location}</p>\n        </div>\n        <div class="tour-content-icon">\n          <i class="far fa-calendar"></i>\n          <p>June 2022</p>\n        </div>\n        <div class="tour-content-icon">\n          <i class="far fa-user"></i>\n          <p>${t.groupSize}</p>\n        </div>\n        <div class="tour-content-icon">\n          <i class="far fa-hourglass"></i>\n          <p>${t.tourLength}</p>\n        </div>\n      </div>\n    </div>\n    <div class="tour-footer">\n      <div class="tour-ratings">\n        <p class="tour-price">$${t.price} <span>per person</span></p>\n        <div class="tour-rating">${t.averageRatings} <span>rating (${t.totalRatings})</span></div>\n      </div>\n      <div class="tour-btn">\n        <a href="/tour-detail.html?id=${t._id}" class="tour-link">Details</a>\n      </div>\n    </div>\n  </div>`;this.container.insertAdjacentHTML("beforeend",e)}}const j=document.querySelector(".bars"),H=document.querySelectorAll(".list"),_=new i;(async()=>{try{_.showSpinner(),await(async()=>{try{const t=await a("/api/user/about-me","GET");"success"===t.status?((new w).updateUI(t),I=!0,o=t):(I=!1,f.hideSpinner())}catch(t){I=!1}})(),j.addEventListener("click",(function(){H.forEach((t=>{t.classList.toggle("slide")}))})),(async()=>{try{if("/activate-account.html"===window.location.pathname){const t=window.location.search.split("=")[1];if(!t)return window.location.href="/";const e=await a(`/api/user/activate-account?verify=${t}`,"GET");"success"===e.status?window.location.href="/login.html?activated=true":document.write(e.message)}}catch(t){}})(),(async()=>{try{if("/tours.html"==window.location.pathname){const t=new i,e=q(),n=3;t.showSpinner();const o=new $;o.loadMoreItems(a,o);const s=await a(`/api/tour?page=${e||1}&limit=${n}`,"GET");o.showMarkup(s),o.addSearchListener(T),t.hideSpinner()}}catch(t){}})(),(async()=>{try{if("/my-bookings.html"===window.location.pathname){if("?success=true"==window.location.search){const t=new s;t.showPopup("Tour has been added to your bookings"),t.hidePopup(),setTimeout((()=>{window.history.replaceState("","","/my-bookings.html")}),2e3)}const t=new i;t.showSpinner();const e=await a("/api/booking","GET");if("Fail"==e.status)return popup.showPopup("Something went wrong!");const n=new A;e.data.bookings.forEach((t=>{n.showBookings(t.tour)})),t.hideSpinner()}}catch(t){}})(),(async()=>{try{if("/tour-detail.html"==window.location.pathname){const t=window.location.search.split("=")[1];if(!t)return window.location.href="/tours.html";N.showSpinner(),await(async(t,e)=>{try{const n=await a(`/api/tour/${t}`,"GET"),o=await a("/api/bookmark","GET");let s=!1;"Fail"!==o.status&&(s=o.bookmarks.some((t=>t._id==n.data.tour._id))),e.generateMarkup(n.data.tour,s),N.hideSpinner()}catch(t){N.hideSpinner()}})(t,F),await F.addToBookmark(O,t),F.bookingHandler(a),F.addImagePopup()}}catch(t){}})(),(()=>{if("/forgot-password.html"==window.location.pathname){const e=new i;e.showSpinner(),(new t).resetPassword(c),e.hideSpinner()}})(),(()=>{if("/reset-password.html"===window.location.pathname){const t=new i;(new d).resetPassword(v),t.hideSpinner()}})(),(()=>{if("/dashboard.html"==window.location.pathname){const t=new i;if(t.showSpinner(),!I)return window.location.href="/login.html?notLoggedIn=true";const e=new y;e.setInput(o),e.imagePreview(),e.updateData(S,k,b,B,p,e),t.hideSpinner()}})(),"/login.html"===window.location.pathname&&"?activated=true"===window.location.search&&setTimeout((()=>{L.showPopup("Account verified"),L.hidePopup(),window.history.pushState("","","/login.html")}),500),"/login.html"==window.location.pathname&&(P.showSpinner(),(new U).login(),P.hideSpinner()),"/login.html"==window.location.pathname&&"?notLoggedIn=true"===window.location.search&&setTimeout((()=>{L.showPopup("You are not logged in! Please log in."),L.hidePopup()}),500),"/signup.html"==window.location.pathname&&(new x).signUpEvent(m),(()=>{if("/update-email.html"===window.location.pathname){(new i).hideSpinner();const t=window.location.search.split("=")[1];if(!t)return window.location.href="/";(async t=>{try{const e=await a(`/api/user/update-email?token=${t}`,"GET");"success"==e.status?window.location.href="/":"Fail"===e.status&&document.write("Invalid token or expired!")}catch(t){}})(t)}})(),"/2fa.html"==window.location.pathname&&D.twoFA(G),(()=>{if("/error.html"==window.location.pathname){const t=window.location.search.split("=")[1].replaceAll("%20"," "),e=new i;e.showSpinner(),document.querySelector(".error-message").innerText=t,e.hideSpinner()}})()}catch(t){console.log(t)}})()})();