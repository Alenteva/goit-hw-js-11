import{S as n}from"./vendor-d5aa4654.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const i=document.querySelector("form");document.querySelector("input");document.querySelector("button");const l=document.querySelector(".gallery");document.querySelector(".loader");new n(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});i.addEventListener("submit",s=>{s.preventDefault(),s.target.elements.search.value!==""&&(m().then(o=>{f(o.hits)}),s.target.reset())});const u=new URLSearchParams({key:"42245077-d2f8998b656235f8798291f32",q:"cat",image_type:"photo",orientation:"horizontal",safesearch:"true"});function m(){const s="https://pixabay.com",r="/api/",o=`?${u}`,c=s+r+o;return fetch(c).then(e=>e.json())}function d(s){return`<li class="gallery-item">
      <a class="gallery-link" href="${largeImageURL}">
        <img
          class="gallery-image"
          src="${webformatURL}"
          alt="${tags}"
          width="360"
        />
      </a>
      <div class="thumb-block">
        <div class="block">
          <h2 class="title">Likes</h2>
          <p class="amount">${likes}</p>
        </div>
        <div class="block">
          <h2 class="title">Views</h2>
          <p class="amount">${views}</p>
        </div>
        <div class="block">
          <h2 class="title">Comments</h2>
          <p class="amount">${comments}</p>
        </div>
        <div class="block">
          <h2 class="title">Downloads</h2>
          <p class="amount">${downloads}</p>
        </div>
      </div>
    </li>`}function f(s){const r=d();l.insertAdjacentHTML("beforeend",r)}
//# sourceMappingURL=main-91c8d648.js.map
