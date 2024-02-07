import{S as a}from"./vendor-d5aa4654.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const u=document.querySelector(".form"),d=document.querySelector("input");document.querySelector("button");const f=document.querySelector(".gallery");document.querySelector(".loader");new a(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});const m="https://pixabay.com/api/?key=42245077d2f8998b656235f8798291f32&q=yellow+flowers&image_type=photo&orientation=horizontal&safesearch=true";u.addEventListener("sabmit",r=>{r.preventDefault(),d.value.trim()!==""&&p().then(o=>h(o)).catch(o=>console.log(o)).finally(()=>{hideLoader()})});function p(){return fetch(m).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function h(r){const o=r.map(({webformatURL:l,largeImageURL:s,tags:e,likes:t,views:i,comments:c,downloads:n})=>` <li class="gallery-item">
        <a class="gallery-link" href="${s}">
          <img
            class="gallery-image"
            src="${l}"
            data-source="${s}"
            width="360px"
            height="200px"
            alt="${e}"  
          />
        </a>
         <div class="thumb-block">
        <div class="block">
          <h2 class="title">Likes</h2>
          <p class="amount">${t}</p>
        </div>
        <div class="block">
          <h2 class="title">Views</h2>
          <p class="amount">${i}</p>
        </div>
        <div class="block">
          <h2 class="title">Comments</h2>
          <p class="amount">${c}</p>
        </div>
        <div class="block">
          <h2 class="title">Downloads</h2>
          <p class="amount">${n}</p>
        </div>
      </div>
      </li>`).join("");f.insertAdjacentHTML("beforeend",o)}
//# sourceMappingURL=main-e9b1c5e6.js.map
