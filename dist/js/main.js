(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),r=document.getElementById("timer-seconds"),c=e=>1===String(e).length?"0"+e:e,a=()=>{let{timeRemaining:e,hours:a,minutes:l,seconds:s}=(()=>{let e=(new Date("3 january 2022").getTime()-Date.now())/1e3,t=Math.floor(e/60/60%60),o=Math.floor(e/60%60),r=Math.floor(e%60);return t=c(t),o=c(o),r=c(r),{timeRemaining:e,hours:t,minutes:o,seconds:r}})();e<1?clearInterval(n):(t.textContent=a,o.textContent=l,r.textContent=s)};a();const n=setInterval(a,1e3)})(),(()=>{const e=document.querySelector("menu"),t=()=>e.classList.toggle("active-menu"),o=(e,t)=>{t.preventDefault();const o=e.getAttribute("href").substring(1),r=document.getElementById(o).getBoundingClientRect().top;window.scrollBy({top:r,behavior:"smooth"})};document.addEventListener("click",(r=>{if(r.target.closest(".menu"))t();else if(r.target.classList.contains("close-btn"))r.preventDefault(),t();else if(r.target.matches("menu.active-menu a"))t(),o(r.target,r);else if(e.classList.contains("active-menu")&&!r.target.closest(".active-menu"))t();else if(r.target.closest('a[href="#service-block"]')){const e=r.target.closest('a[href="#service-block"]');o(e,r)}}))})(),(()=>{const e=document.querySelectorAll(".popup-btn"),t=document.querySelector(".popup"),o=t.querySelector(".popup-content");let r=0;const c=()=>{if(screen.width<768)return;let e;r>1?(cancelAnimationFrame(e),o.style.transform="scale(1)",t.style.opacity="1",r=0):(e=requestAnimationFrame(c),t.style.opacity=r,o.style.transform=`scale(${r})`,r+=.08)},a=()=>{t.style.display="block",c()};e.forEach((e=>e.addEventListener("click",a))),t.addEventListener("click",(e=>{e.target.closest(".popup-content")&&!e.target.classList.contains("popup-close")||(t.style.display="none")}))})(),(()=>{const e=document.querySelectorAll("input"),t=document.querySelectorAll(".calc-block input[type=text]"),o=document.querySelectorAll("input[type=tel]"),r=document.querySelectorAll("input[type=email]"),c=document.querySelectorAll("input[type=text]"),a=(e,t)=>{e.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(t,"")}))}))};a(t,/[^\d]/gi),a(o,/[^\d\(\)\-]/gi),a(c,/[^а-я\-\s]/gi),a(r,/[^\w\@\-\.\!\~\*\']/gi),e.forEach((e=>{e.addEventListener("blur",(e=>{e.target.value=e.target.value.replace(/^[\s\-]+/gi,"").replace(/[\s\-]+$/gi,"").replace(/\s{2,}/gi," ").replace(/\-{2,}/gi,"-")}))})),c.forEach((e=>{e.addEventListener("blur",(e=>{e.target.value=e.target.value.replace(/\S+/gi,(e=>e[0].toUpperCase()+e.substr(1).toLowerCase()))}))}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{const r=e.target.closest(".service-header-tab");r&&t.forEach(((e,t)=>{e===r?(e.classList.add("active"),o[t].classList.remove("d-none")):(e.classList.remove("active"),o[t].classList.add("d-none"))}))}))})(),(()=>{const e=document.getElementById("all-progects"),t=document.querySelectorAll(".portfolio-item"),o=document.querySelector(".portfolio-dots");let r,c,a=0;const n=(e,t,o)=>{e[t].classList.remove(o)},l=(e,t,o)=>{e[t].classList.add(o)},s=()=>{n(t,a,"portfolio-item-active"),n(r,a,"dot-active"),a++,a>=t.length&&(a=0),l(t,a,"portfolio-item-active"),l(r,a,"dot-active")},i=(e=1500)=>{c=setInterval(s,e)};e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(n(t,a,"portfolio-item-active"),n(r,a,"dot-active"),e.target.matches("#arrow-right")?a++:"arrow-left"===e.target.id?a--:e.target.classList.contains("dot")&&r.forEach(((t,o)=>{t===e.target&&(a=o)})),a>=t.length&&(a=0),a<0&&(a=t.length-1),l(t,a,"portfolio-item-active"),l(r,a,"dot-active"))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(c)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&i(2e3)}),!0),t.forEach((()=>{o.insertAdjacentHTML("beforeend",'<div class="dot"></div>')})),o.firstChild.classList.add("dot-active"),r=document.querySelectorAll(".dot"),i(2e3)})()})();