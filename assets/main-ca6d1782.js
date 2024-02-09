import{S as i}from"./vendor-d5aa4654.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const l=document.querySelector("form");document.querySelector("input");document.querySelector("button");const u=document.querySelector(".gallery");document.querySelector(".loader");new i(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});l.addEventListener("submit",r=>{r.preventDefault(),r.target.elements.search.value!==""&&(m().then(o=>{p(o.hits)}),r.target.reset())});const d=new URLSearchParams({key:"42245077-d2f8998b656235f8798291f32",q:"cat",image_type:"photo",orientation:"horizontal",safesearch:"true"});function m(){const r="https://pixabay.com",s="/api/",o=`?${d}`,c=r+s+o;return fetch(c).then(e=>e.json())}function f(r){return r.map(({webformatURL:s,largeImageURL:o,tags:c,likes:e,views:t,comments:n,downloads:a})=>`<li class="gallery-item">
      <a class="gallery-link" href="${o}">
        <img
          class="gallery-image"
          src="${s}"
          alt="${c}"
          width="360"
        />
      </a>
      <div class="thumb-block">
        <div class="block">
          <h2 class="title">Likes</h2>
          <p class="amount">${e}</p>
        </div>
        <div class="block">
          <h2 class="title">Views</h2>
          <p class="amount">${t}</p>
        </div>
        <div class="block">
          <h2 class="title">Comments</h2>
          <p class="amount">${n}</p>
        </div>
        <div class="block">
          <h2 class="title">Downloads</h2>
          <p class="amount">${a}</p>
        </div>
      </div>
    </li>`).join("")}function p(){const r=f(images);u.insertAdjacentHTML("beforeend",r)}
//# sourceMappingURL=main-ca6d1782.js.map
