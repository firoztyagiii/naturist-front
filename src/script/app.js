(()=>{"use strict";const t="https://naturist.herokuapp.com",e=new class{constructor(){this.loginBtn=document.querySelector(".login-btn")}getLoginInputs(){return{email:document.getElementById("email").value,password:document.getElementById("password").value}}updateUI(){const t=document.querySelector(".login-btn-text"),e=document.querySelector(".loader");t.classList.add("hidden"),e.classList.remove("hidden")}defaultUI(){const t=document.querySelector(".login-btn-text"),e=document.querySelector(".loader");t.classList.remove("hidden"),e.classList.add("hidden")}},n=async()=>{const n=e.getLoginInputs();e.updateUI();const o=await(async e=>{const n=await fetch(`${t}/api/user/login`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(e)});return await n.json()})(n);if("Fail"===o.status)return e.defaultUI(),console.log(o.message);e.defaultUI()};(async()=>{e.loginBtn&&e.loginBtn.addEventListener("click",n);const o=await(async()=>{const e=await fetch(`${t}/api/user/about-me`);return await e.json()})();console.log(o)})()})();