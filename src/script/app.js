(()=>{"use strict";class e{constructor(){this.resetBtn=document.querySelector(".forgot-btn")}getInput(){return{email:document.getElementById("email").value}}updateUI(){const e=document.querySelector(".forgot-btn"),t=document.querySelector(".loader");e.classList.add("hidden"),t.classList.remove("hidden")}defaultUI(){const e=document.querySelector(".forgot-btn"),t=document.querySelector(".loader");e.classList.remove("hidden"),t.classList.add("hidden")}}let t={};const n=async(e,t,n)=>{const a={method:t,credentials:"include",headers:{"Content-Type":"application/json"}};n&&(a.body=JSON.stringify(n));try{const t=await fetch(`http://localhost:9090${e}`,a);return await t.json()}catch(e){console.log(e)}};class a{constructor(){}showPopup(e){const t=document.querySelector(".popup");t.textContent=e,t.style.display="block",t.style.opacity="1"}hidePopup(){setTimeout((()=>{const e=document.querySelector(".popup");e.style.display="none",e.style.opacity="0"}),3e3)}}class s{constructor(){this.bg=document.querySelector(".bg")}showSpinner(){this.bg.classList.remove("hidden")}hideSpinner(){this.bg.classList.add("hidden")}}const o=new a;class i{constructor(){this.resetBtn=document.querySelector(".reset-btn")}getInput(){const e=document.querySelector("[name='new-password']").value,t=document.querySelector("[name='confirm-new-password']").value;return{password:e.toString(),confirmPassword:t.toString()}}updateUI(){const e=document.querySelector(".reset-btn-text"),t=document.querySelector(".loader");e.classList.add("hidden"),t.classList.remove("hidden")}defaultUI(){const e=document.querySelector(".reset-btn-text"),t=document.querySelector(".loader");e.classList.remove("hidden"),t.classList.add("hidden")}}const r=new s,c=new a,d=async e=>{try{await n("/api/user/logout","GET"),e.defaultUI(),window.location.href="/",r.hideSpinner()}catch(e){console.log(e)}},u=new s;class l{constructor(){this.navBarList=document.querySelector(".list")}updateUI(e){const t=document.querySelector(".user-not-loggedin"),n=document.querySelector(".user-loggedin");document.querySelector(".user-name").innerText=`Welcome, ${e.data.user.name.split(" ")[0]}`,t.classList.add("hidden"),n.classList.remove("hidden"),u.hideSpinner()}defaultUI(){const e=document.querySelector(".user-not-loggedin"),t=document.querySelector(".user-loggedin");e.classList.remove("hidden"),t.classList.add("hidden")}getlogoutBtn(){const e=document.querySelector(".logout-btn");if(e)return e}}const p=new a,m=async(e,t)=>{const a=await n(`/api/user/reset-password?token=${t}`,"POST",e);if("Fail"===a.status)p.showPopup(a.message),p.hidePopup(),resetPasswordView.defaultUI();else{p.showPopup(a.message),p.hidePopup();const e=new l;setTimeout((async()=>{await d(e)}),2e3),resetPasswordView.defaultUI()}};class w{constructor(){this.passwordUpdateBtn=document.querySelector(".password-save-btn"),this.logoutBtn=document.querySelector(".log-out-btn"),this.nameUpdateBtn=document.querySelector(".name-save-btn"),this.emailUpdateBtn=document.querySelector(".email-save-btn")}setInput(e){document.getElementById("account-name").value=e.data.user.name,document.getElementById("account-email").value=e.data.user.email}getPasswordInput(){return{currentPassword:document.getElementById("current-password").value,newPassword:document.getElementById("new-password").value,confirmNewPassword:document.getElementById("confirm-new-password").value}}getNameInput(){return{name:document.getElementById("account-name").value}}getEmailInput(){return{email:document.getElementById("account-email").value}}resetInput(){document.getElementById("current-password").value="",document.getElementById("new-password").value="",document.getElementById("confirm-new-password").value=""}updatePasswordBtnUI(){this.passwordUpdateBtn.textContent="Updating..."}resetPasswordBtnUI(){this.passwordUpdateBtn.textContent="Update Password"}updateNameBtnUI(){this.nameUpdateBtn.textContent="Updating..."}resetNameBtnUI(){this.nameUpdateBtn.textContent="Update Name"}updateEmailBtnUI(){this.emailUpdateBtn.textContent="Updating..."}resetEmailBtnUI(){this.emailUpdateBtn.textContent="Update Email"}}const g=new l,h=new s;let v=!1;class f{constructor(){this.loginBtn=document.querySelector(".login-btn")}getLoginInputs(){return{email:document.getElementById("email").value,password:document.getElementById("password").value}}updateUI(){const e=document.querySelector(".login-btn-text"),t=document.querySelector(".loader");e.classList.add("hidden"),t.classList.remove("hidden")}defaultUI(){const e=document.querySelector(".login-btn-text"),t=document.querySelector(".loader");e.classList.remove("hidden"),t.classList.add("hidden")}resetInput(){document.getElementById("password").value=""}disableLoginBtn(){this.loginBtn.disabled=!0}}const y=new a,I=new s;class S{constructor(){this.tourContainer=document.querySelector(".tour-container"),this.nextPageBtn=document.querySelector(".next-page"),this.prevPageBtn=document.querySelector(".prev-page"),this.currentPage=document.querySelector(".current-page"),this.loadMoreBtn=document.querySelector(".load-more")}getQuery(){return window.location.search}increasePageNumber(){this.nextPageBtn.dataset.currentpage++}generateMarkup(e){const t=` <div class="tour">\n    <div class="tour-header">\n      <span class="image-overlay"></span>\n      <img src="http://localhost:9090/${e.headImg}" alt="" class="tour-img">\n    </div>\n    <div class="tour-content">\n      <p class="tour-title">${e.name}</p>\n      <p class="tour-content-fact">${e.difficulty.toUpperCase()} ${e.tourLength} Days </p>\n      <p class="tour-content-info">${e.info}\n      </p>\n      <div class="tour-icons">\n        <div class="tour-content-icon">\n          <i class="far fa-map"></i>\n          <p>${e.location}</p>\n        </div>\n        <div class="tour-content-icon">\n          <i class="far fa-calendar"></i>\n          <p>June 2022</p>\n        </div>\n        <div class="tour-content-icon">\n          <i class="far fa-user"></i>\n          <p>${e.groupSize}</p>\n        </div>\n        <div class="tour-content-icon">\n          <i class="far fa-hourglass"></i>\n          <p>${e.tourLength}</p>\n        </div>\n      </div>\n    </div>\n    <div class="tour-footer">\n      <div class="tour-ratings">\n        <p class="tour-price">$${e.price} <span>per person</span></p>\n        <div class="tour-rating">${e.averageRatings} <span>rating (${e.totalRatings})</span></div>\n      </div>\n      <div class="tour-btn">\n        <a href="/tour-detail.html?id=${e._id}" class="tour-link">Details</a>\n      </div>\n    </div>\n  </div>`;this.tourContainer.insertAdjacentHTML("beforeend",t)}updateUIForLoadBtn(){const e=document.querySelector(".load-more-text"),t=document.querySelector(".loader");e.classList.add("hidden"),t.classList.remove("hidden")}resetUIForLoadBtn(){const e=document.querySelector(".load-more-text"),t=document.querySelector(".loader");e.classList.remove("hidden"),t.classList.add("hidden")}}new s;const B=new s;class U{constructor(){this.otpBtn=document.querySelector(".send-otp-btn")}getInput(){return{OTP:document.querySelector("[name='update-email']").value}}updateUI(){const e=document.querySelector(".send-otp-text"),t=document.querySelector(".loader");e.classList.add("hidden"),t.classList.remove("hidden")}resetUI(){const e=document.querySelector(".send-otp-text"),t=document.querySelector(".loader");e.classList.remove("hidden"),t.classList.add("hidden")}}const P=new a;class q{constructor(){this.signupbtn=document.querySelector(".signup-btn")}getInputs(){return{email:document.getElementById("email").value,password:document.getElementById("password").value,confirmPassword:document.getElementById("confirm-password").value,name:document.getElementById("name").value}}resetInput(){document.getElementById("password").value="",document.getElementById("confirm-password").value=""}updateUI(){const e=document.querySelector(".signup-btn-text"),t=document.querySelector(".loader");e.classList.add("hidden"),t.classList.remove("hidden")}defaultUI(){const e=document.querySelector(".signup-btn-text"),t=document.querySelector(".loader");e.classList.remove("hidden"),t.classList.add("hidden")}}class L{constructor(){this.tourContainer=document.querySelector(".tour-container")}generateMarkup(e){const t=e.reviews,n=`<div class="tour">\n        <i class="far fa-bookmark"></i>\n        <div class="tour-info">\n        <div class="tour-title">\n        <span>${e.name.toUpperCase()}</span>\n\n        </div>\n            <div class="tour-info-details">\n                <div class="tour-info-detail">\n                    <i class="far fa-clock"></i>\n                    <p>${e.tourLength} Days</p>\n                </div>\n                <div class="tour-info-detail">\n                    <i class="far fa-map"></i>\n                    <p>${e.location}</p>\n                </div>\n            </div>\n        </div>\n      </div>\n      <div class="tour-facts">\n        <div class="tour-facts-left">\n          <p class="tour-quick-facts">Quick Facts</p>\n          <div class="tour-facts-items">\n            <div class="tour-facts-item">\n              <i class="far fa-calendar-minus"></i>\n              <span>Next Date</span>\n              <p>June 2021</p>\n            </div>\n            <div class="tour-facts-item">\n              <i class="far fa-chart-bar"></i>\n              <span>Difficulty</span>\n              <p>${e.difficulty.toUpperCase()}</p>\n            </div>\n            <div class="tour-facts-item">\n              <i class="far fa-user"></i>\n              <span>Group Size</span>\n              <p>6</p>\n            </div>\n            <div class="tour-facts-item">\n              <i class="far fa-star"></i>\n              <span>Ratings</span>\n              <p>${e.averageRatings} / ${e.totalRatings}</p>\n            </div>\n          </div>\n        </div>\n        <div class="tour-facts-right">\n          <p class="tour-quick-facts">About the Mountain Biking</p>\n          <p class="tour-description">\n          ${e.info}\n          </p>\n          <p class="tour-description">\n                ${e.description}\n          </p>\n        </div>\n    </div>\n    <div class="tour-images">\n      <img src="./src/img/1.jpg" alt="">\n      <img src="./src/img/2.jpg" alt="">\n      <img src="./src/img/3.jpg" alt="">\n    </div>\n    <div class="tour-review">\n      \n    </div>`;if(this.tourContainer.innerHTML="",this.tourContainer.insertAdjacentHTML("afterbegin",n),0==t){const e=document.querySelector(".tour-review");e.style.padding="0rem",e.style.marginTop="0"}if(document.querySelector(".tour").style.backgroundImage=`linear-gradient(\n      rgba(22, 160, 132, 0.8),\n      rgba(46, 204, 112, 0.8)\n    ), url("http://localhost:9090/${e.headImg}")`,0!=t){const t=document.querySelector(".tour-review"),n=e.reviews.map((e=>{const t=[];for(let n=0;n<e.rating;n++)t.push('<i class="fas fa-star">');return`<div class="review">\n        <div class="review-info">\n          <img src="./src/img/test.jpg" alt="reviewer-img">\n          <p class="reviewer-name">${e.user.name}</p>\n        </div>\n        <p class="review-text">${e.review}</p>\n        <div class="review-ratings">\n           ${t.join("\n")}\n        </div>\n      </div>`}));t.insertAdjacentHTML("afterbegin",n.join("\n")),document.querySelector(".review-ratings").nextElementSibling.remove()}}}const E=new s;(async()=>{try{E.showSpinner(),await(async()=>{try{const e=await n("/api/user/about-me","GET");"success"===e.status&&(g.updateUI(e),v=!0,t=e),h.hideSpinner()}catch(e){console.log(e)}})(),await(async()=>{if("/activate-account.html"===window.location.pathname){const e=window.location.search.split("=")[1];if(!e)return window.location.href="/";const t=await n(`/api/user/activate-account?verify=${e}`,"GET");"success"===t.status?window.location.href="/login.html?activated=true":document.write(t.message)}})(),(async()=>{if("/tours.html"==window.location.pathname){B.showSpinner();const e=3,t=window.location.search.split("&").map((e=>e.replace("?",""))).filter((e=>e.includes("page="))).join("").split("=")[1],a=new S;t&&((e,t)=>{e&&(t.nextPageBtn.dataset.nextpage=e,t.currentPage.textContent=`${e}`,t.prevPageBtn.dataset.prevpage=e)})(t,a),a.loadMoreBtn.addEventListener("click",(async function(){a.updateUIForLoadBtn(),a.loadMoreBtn.dataset.page++;const t=a.loadMoreBtn.dataset.page;(await n(`/api/tour?page=${t||1}&limit=${e}`,"GET")).data.tours.forEach((e=>{a.generateMarkup(e)})),a.resetUIForLoadBtn()})),(await n(`/api/tour?page=${t||1}&limit=${e}`,"GET")).data.tours.forEach((e=>{a.generateMarkup(e)})),B.hideSpinner()}})(),(async()=>{if("/tour-detail.html"==window.location.pathname){const e=window.location.search.split("=")[1];if(!e)return window.location.href="/tours.html";await(async e=>{const t=await n(`/api/tour/${e}`,"GET");(new L).generateMarkup(t.data.tour)})(e)}})(),(async()=>{if("/forgot-password.html"==window.location.pathname){const t=new s,a=new e;a.resetBtn.addEventListener("click",(async function(){a.updateUI();const e=a.getInput();await(async e=>{const t=await n("/api/user/forgot-password","POST",e);t.status,o.showPopup(t.message),o.hidePopup()})(e),a.defaultUI()})),t.hideSpinner()}})(),(()=>{if("/reset-password.html"===window.location.pathname){const e=new s,t=window.location.search.split("=")[1];if(!t)return window.location.href="/";const n=new i;n.resetBtn.addEventListener("click",(async function(){n.updateUI();const e=n.getInput();if(e.password!==e.confirmPassword)return p.showPopup("Passwords do not match"),p.hidePopup(),void n.defaultUI();await m(e,t)})),e.hideSpinner()}})(),(()=>{if("/dashboard.html"==window.location.pathname){if(!v)return window.location.href="/login.html?notLoggedIn=true";const e=new s,a=new w;a.setInput(t),a.passwordUpdateBtn.addEventListener("click",(async function(e){(async(e,t)=>{e.preventDefault(),t.updatePasswordBtnUI();const a=t.getPasswordInput();await(async e=>{const t=await n("/api/user/update-me/password","POST",e);c.showPopup(t.message),c.hidePopup()})(a),t.resetPasswordBtnUI()})(e,a)})),a.logoutBtn.addEventListener("click",(async function(){const e=new l;await d(e)})),a.nameUpdateBtn.addEventListener("click",(async function(e){(async(e,t)=>{e.preventDefault(),t.updateNameBtnUI();const a=t.getNameInput();await(async e=>{const t=await n("/api/user/update-me/info","POST",e);c.showPopup(t.message),c.hidePopup()})(a),t.resetNameBtnUI()})(e,a)})),a.emailUpdateBtn.addEventListener("click",(async function(e){(async(e,t)=>{e.preventDefault(),t.updateEmailBtnUI();const a=t.getEmailInput();await(async e=>{const t=await n("/api/user/update-me/email","POST",e);c.showPopup(t.message),c.hidePopup()})(a),t.resetEmailBtnUI()})(e,a)})),e.hideSpinner()}})(),(()=>{if("/login.html"===window.location.pathname&&"?activated=true"===window.location.search&&setTimeout((()=>{y.showPopup("Account verified"),y.hidePopup()}),500),"/login.html"==window.location.pathname){I.showSpinner();const e=new f;e.loginBtn.addEventListener("click",(function(){(async e=>{try{e.updateUI();const t=e.getLoginInputs(),a=await n("/api/user/login","POST",t);if("Fail"===a.status)e.defaultUI(),e.resetInput(),c.showPopup(a.message),c.hidePopup();else{const t=await n("/api/user/about-me","GET");window.sessionStorage.setItem("user",JSON.stringify(t)),window.sessionStorage.setItem("isUserLoggedIn",!0),e.defaultUI(),window.location.href="/"}}catch(e){console.log(e)}})(e)})),I.hideSpinner()}"/login.html"==window.location.pathname&&"?notLoggedIn=true"===window.location.search&&setTimeout((()=>{y.showPopup("You are not logged in! Please log in."),y.hidePopup()}),500)})(),(()=>{if("/signup.html"==window.location.pathname){const e=new q;e.signupbtn.addEventListener("click",(function(){(async e=>{e.updateUI();const t=e.getInputs(),a=await n("/api/user/signup","POST",t);a.data?c.showPopup(a.data.message):c.showPopup(a.message),e.resetInput(),c.hidePopup(),e.defaultUI()})(e)}))}})(),(()=>{if("/update-email.html"===window.location.pathname){const e=new U,t=window.location.search.split("=")[1];if(!t)return window.location.href="/";e.otpBtn.addEventListener("click",(async function(){e.updateUI();const a=e.getInput();await(async(e,t)=>{const a=await n(`/api/user/update-email?token=${t}`,"POST",e);P.showPopup(a.message),P.hidePopup(),"success"===a.status&&setTimeout((()=>{window.location.href="/login.html"}),2e3)})(a,t),e.resetUI()}))}})(),E.hideSpinner()}catch(e){console.log(e)}})()})();