import{i as u,S as f}from"./vendor-7659544d.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function l(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=l(t);fetch(t.href,r)}})();const h=document.querySelector("form"),c=document.querySelector(".gallery"),n=document.querySelector(".loader");let i;h.addEventListener("submit",o=>{o.preventDefault(),i=o.target.elements.search.value,i!==""&&(c.innerHTML="",g(),m(i).then(e=>{p(e.hits)}).catch(e=>{console.error(e)}).finally(()=>{y()}),o.target.reset())});function m(o){const e=new URLSearchParams({key:"42245077-d2f8998b656235f8798291f32",q:`${o}`,image_type:"photo",orientation:"horizontal",safesearch:"true"}),l="https://pixabay.com",a="/api/",t=`?${e}`,r=l+a+t;return fetch(r).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}function d(o){return o.map(e=>`<li class="gallery-item">
      <a class="gallery-link" href="${e.largeImageURL}">
        <img
          class="gallery-image"
          src="${e.webformatURL}"
          alt="${e.tags}"
          width="360"
        />
      </a>
      <ul class="thumb-block">
        <li class="block">
          <h2 class="title">Likes</h2>
          <p class="amount">${e.likes}</p>
        </li>
        <li class="block">
          <h2 class="title">Views</h2>
          <p class="amount">${e.views}</p>
        </li>
        <li class="block">
          <h2 class="title">Comments</h2>
          <p class="amount">${e.comments}</p>
        </li>
        <li class="block">
          <h2 class="title">Downloads</h2>
          <p class="amount">${e.downloads}</p>
        </li>
      </ul>
    </li>`).join("")}function p(o){if(o.length===0){u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again.",position:"topCenter"});return}const e=d(o);c.insertAdjacentHTML("beforeend",e),new f(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()}function g(){n&&(n.style.display="block")}function y(){n&&(n.style.display="none")}
//# sourceMappingURL=main-4e263e36.js.map
