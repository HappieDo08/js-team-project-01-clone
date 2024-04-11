function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},l={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in a)return a[e].exports;if(e in l){var t=l[e];delete l[e];var i={id:e,exports:{}};return a[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){l[e]=t},t.parcelRequired7c6=i);var o=i.register;o("kyEFX",function(e,t){Object.defineProperty(e.exports,"register",{get:function(){return a},set:function(e){return a=e},enumerable:!0,configurable:!0});var a,l=new Map;a=function(e,t){for(var a=0;a<t.length-1;a+=2)l.set(t[a],{baseUrl:e,path:t[a+1]})}}),o("2PEVg",function(e,t){e.exports=new URL("foto.88e9f0bc.jpg",import.meta.url).toString()}),o("kc5yK",function(e,t){e.exports=new URL("symbol-defs.ee796a2b.svg",import.meta.url).toString()}),i("kyEFX").register(new URL("",import.meta.url).toString(),JSON.parse('["6EVkV","mylibrary.93464a6f.js","fynZF","foto.88e9f0bc.jpg","f0tFQ","symbol-defs.ee796a2b.svg","kQyUl","mylibrary.57784a2a.js","1C83d","mylibrary.runtime.bf0a8d07.js"]')),i("d2y5i");var n=i("fSK0k"),s=i("2PEVg"),c=i("kc5yK"),d=i("ixU3C");i("dSs1Y");var u=i("rLtvl");const r={galleryQueueBox:document.querySelector(".gallery_queue-box"),filmModal:document.querySelector("[data-modal]"),body:document.querySelector("body")};let m={};const f=[];async function y(t){let a;if(t.target.classList.contains("gallery_queue-box"))return;let l=Number(t.target.closest(".card").id),i=f.find(e=>e.id===l);if(i)m=i;else{try{m=await (0,n.fetchFilmDetailsById)(l)}catch(e){console.log(e.message),console.log(e.code)}f.push(m)}r.filmModal.innerHTML="",function(t){let a=function(t){let{poster_path:a,title:l,vote_average:i,vote_count:o,popularity:n,original_title:s,genres:d,overview:u}=t,r=`https://image.tmdb.org/t/p/w500${a}`;return`
  <div class="film-modal">
    <button class="button-close" type="button" button-modal-close>
      <svg class="icon-close">
        <use href="${e(c)}#icon-close"></use>
      </svg>
    </button>
    <img
      class="film_image"
      src="${r}"
      alt="Film Image"
      onerror="loadNoPoster(this)"
    />
    <article>
      <div class="film_content">
        <h2 class="film_title">${l}</h2>

        <ul class="film-info">
          <li class="film-info_item">
            <p class="film-info_lable">Vote / Votes</p>

            <div class="film-vote">
              <span class="film-vote_lable film-vote_lable--orange"
                >${i}</span
              >
              <span>/</span>
              <span class="film-vote_lable">${o}</span>
            </div>
          </li>

          <li class="film-info_item">
            <p class="film-info_lable">Popularity</p>
            <span class="film-info_text">${n}</span>
          </li>

          <li class="film-info_item">
            <p class="film-info_lable">Original Title</p>
            <span class="film-info_text film-info_text--uppercase">
              ${s}
            </span>
          </li>

          <li class="film-info_item">
            <p class="film-info_lable">Genre</p>
            <span class="film-info_text"
              >${d.map(e=>e.name).join(", ")}</span
            >
          </li>
        </ul>

        <div class="film-description">
          <h3 class="film-description_title">About</h3>
          <p class="film-description_text">${u}</p>
        </div>
      </div>

      <ul class="film-button">
        <li class="film-button_item" id="button-add-watch">
          <button
            class="film-button_primary"
            type="button"
            button-add-watch
          >
            Add to Watched
          </button>
        </li>

        <li class="film-button_item">
          <button class="film-button_primary" type="button" button-add-queue>
            Add to Queue
          </button>
        </li>
        <li class="film-button_item">
          <button class="film-button_primary" type="button" button-unselect>
            Unselect
          </button>
        </li>
      </ul>
    </article>
  </div>
`}(t);r.filmModal.insertAdjacentHTML("beforeend",a)}(m);let o={closeBtn:document.querySelector("[button-modal-close]"),addQueueBtn:document.querySelector("[button-add-queue]"),addWatchBtn:document.querySelector("[button-add-watch]"),unselectBtn:document.querySelector("[button-unselect]")};w(o.unselectBtn),o.closeBtn.addEventListener("click",b),o.addQueueBtn.addEventListener("click",g),o.addWatchBtn.addEventListener("click",h),o.unselectBtn.addEventListener("click",v);let s=_("watched")||[],d=_("queue")||[],u=s.some(e=>e.id===m.id);d.some(e=>e.id===m.id)&&S(o.addQueueBtn),u&&S(o.addWatchBtn),r.filmModal.classList.remove("is-hidden"),a=window.innerWidth-r.body.offsetWidth+"px",r.body.classList.add("disable-scroll"),r.body.style.paddingRight=a,window.addEventListener("keydown",p)}function b(){r.filmModal.classList.add("is-hidden"),window.removeEventListener("keydown",p),r.body.classList.remove("disable-scroll"),r.body.style.paddingRight=0,(0,u.updateMoviesGalleryByStatus)("queue",globalCurrentPage)}function p(e){"Escape"===e.code&&b()}function v(){let e=_("watched")||[],t=_("queue")||[],a=e.some(e=>e.id===m.id);t.some(e=>e.id===m.id)&&(0,d.removeSaveQueue)(m),a&&(0,d.removeSaveWatch)(m),w(document.querySelector("[button-add-watch]")),w(document.querySelector("[button-add-queue]"))}function g({target:e}){(0,d.dataSaveQueue)(m),window.location.pathname.includes("my-library")&&(document.querySelector(".watched-btn").classList.contains("active")?(0,u.updateMoviesGalleryByStatus)("watched",globalCurrentPage):(0,u.updateMoviesGalleryByStatus)("queue",globalCurrentPage)),(0,u.updateMoviesGalleryByStatus)("queue"),S(e),w(document.querySelector("[button-add-watch]")),w(document.querySelector("[button-unselect]"))}function h({target:e}){(0,d.dataSaveWatch)(m),window.location.pathname.includes("my-library")&&(document.querySelector(".watched-btn").classList.contains("active")?(0,u.updateMoviesGalleryByStatus)("watched",globalCurrentPage):(0,u.updateMoviesGalleryByStatus)("queue",globalCurrentPage)),(0,u.updateMoviesGalleryByStatus)("watch"),S(e),w(document.querySelector("[button-add-queue]")),w(document.querySelector("[button-unselect]"))}function _(e){return function(e){let t;try{t=JSON.parse(e)}catch(e){console.log("ERROR: ",e.message),console.log("ERROR CODE: ",e.code)}return t}(localStorage.getItem(e))}function S(e){e.disabled=!0,e.classList.add("is-disabled")}function w(e){e.disabled=!1,e.classList.remove("is-disabled")}r.galleryQueueBox.addEventListener("click",y),r.filmModal.addEventListener("click",function(e){e.currentTarget===e.target&&b()}),window.loadNoPoster=function(t){t.src=e(s)};var n=i("fSK0k"),s=i("2PEVg"),c=i("kc5yK"),d=i("ixU3C");i("dSs1Y");var u=i("rLtvl");const L={galleryWatchBox:document.querySelector(".gallery_watch-box"),filmModal:document.querySelector("[data-modal]"),body:document.querySelector("body")};let q={};const B=[];async function M(t){let a;if(t.target.classList.contains("gallery_fetch-box"))return;let l=Number(t.target.closest(".card").id),i=B.find(e=>e.id===l);if(i)q=i;else{try{q=await (0,n.fetchFilmDetailsById)(l)}catch(e){console.log(e.message),console.log(e.code)}B.push(q)}L.filmModal.innerHTML="",function(t){let a=function(t){let{poster_path:a,title:l,vote_average:i,vote_count:o,popularity:n,original_title:s,genres:d,overview:u}=t,r=`https://image.tmdb.org/t/p/w500${a}`;return`
  <div class="film-modal">
    <button class="button-close" type="button" button-modal-close>
      <svg class="icon-close">
        <use href="${e(c)}#icon-close"></use>
      </svg>
    </button>
    <img
      class="film_image"
      src="${r}"
      alt="Film Image"
      onerror="loadNoPoster(this)"
    />
    <article>
      <div class="film_content">
        <h2 class="film_title">${l}</h2>

        <ul class="film-info">
          <li class="film-info_item">
            <p class="film-info_lable">Vote / Votes</p>

            <div class="film-vote">
              <span class="film-vote_lable film-vote_lable--orange"
                >${i}</span
              >
              <span>/</span>
              <span class="film-vote_lable">${o}</span>
            </div>
          </li>

          <li class="film-info_item">
            <p class="film-info_lable">Popularity</p>
            <span class="film-info_text">${n}</span>
          </li>

          <li class="film-info_item">
            <p class="film-info_lable">Original Title</p>
            <span class="film-info_text film-info_text--uppercase">
              ${s}
            </span>
          </li>

          <li class="film-info_item">
            <p class="film-info_lable">Genre</p>
            <span class="film-info_text"
              >${d.map(e=>e.name).join(", ")}</span
            >
          </li>
        </ul>

        <div class="film-description">
          <h3 class="film-description_title">About</h3>
          <p class="film-description_text">${u}</p>
        </div>
      </div>

      <ul class="film-button">
        <li class="film-button_item" id="button-add-watch">
          <button
            class="film-button_primary"
            type="button"
            button-add-watch
          >
            Add to Watched
          </button>
        </li>

        <li class="film-button_item">
          <button class="film-button_primary" type="button" button-add-queue>
            Add to Queue
          </button>
        </li>
        <li class="film-button_item">
          <button class="film-button_primary" type="button" button-unselect>
            Unselect
          </button>
        </li>
      </ul>
    </article>
  </div>
`}(t);L.filmModal.insertAdjacentHTML("beforeend",a)}(q);let o={closeBtn:document.querySelector("[button-modal-close]"),addQueueBtn:document.querySelector("[button-add-queue]"),addWatchBtn:document.querySelector("[button-add-watch]"),unselectBtn:document.querySelector("[button-unselect]")};$(o.unselectBtn),o.closeBtn.addEventListener("click",E),o.addQueueBtn.addEventListener("click",R),o.addWatchBtn.addEventListener("click",W),o.unselectBtn.addEventListener("click",k);let s=P("watched")||[],d=P("queue")||[],u=s.some(e=>e.id===q.id);d.some(e=>e.id===q.id)&&Q(o.addQueueBtn),u&&Q(o.addWatchBtn),L.filmModal.classList.remove("is-hidden"),a=window.innerWidth-L.body.offsetWidth+"px",L.body.classList.add("disable-scroll"),L.body.style.paddingRight=a,window.addEventListener("keydown",x)}function E(){L.filmModal.classList.add("is-hidden"),window.removeEventListener("keydown",x),L.body.classList.remove("disable-scroll"),L.body.style.paddingRight=0,(0,u.updateMoviesGalleryByStatus)("watched",globalCurrentPage)}function x(e){"Escape"===e.code&&E()}function k(){let e=P("watched")||[],t=P("queue")||[],a=e.some(e=>e.id===q.id);t.some(e=>e.id===q.id)&&(0,d.removeSaveQueue)(q),a&&(0,d.removeSaveWatch)(q),$(document.querySelector("[button-add-watch]")),$(document.querySelector("[button-add-queue]"))}function R({target:e}){(0,d.dataSaveQueue)(q),window.location.pathname.includes("my-library")&&(document.querySelector(".watched-btn").classList.contains("active")?(0,u.updateMoviesGalleryByStatus)("watched",globalCurrentPage):(0,u.updateMoviesGalleryByStatus)("queue",globalCurrentPage)),(0,u.updateMoviesGalleryByStatus)("watch"),Q(e),$(document.querySelector("[button-add-watch]")),$(document.querySelector("[button-unselect]"))}function W({target:e}){(0,d.dataSaveWatch)(q),window.location.pathname.includes("my-library")&&(document.querySelector(".watched-btn").classList.contains("active")?(0,u.updateMoviesGalleryByStatus)("watched",globalCurrentPage):(0,u.updateMoviesGalleryByStatus)("queue",globalCurrentPage)),(0,u.updateMoviesGalleryByStatus)("watch"),Q(e),$(document.querySelector("[button-add-queue]")),$(document.querySelector("[button-unselect]"))}function P(e){return function(e){let t;try{t=JSON.parse(e)}catch(e){console.log("ERROR: ",e.message),console.log("ERROR CODE: ",e.code)}return t}(localStorage.getItem(e))}function Q(e){e.disabled=!0,e.classList.add("is-disabled")}function $(e){e.disabled=!1,e.classList.remove("is-disabled")}L.galleryWatchBox.addEventListener("click",M),L.filmModal.addEventListener("click",function(e){e.currentTarget===e.target&&E()}),window.loadNoPoster=function(t){t.src=e(s)};var u=i("rLtvl");const G={galleryMyLibraryWatch:document.querySelector(".gallery_watch-block"),galleryMyLibraryQueue:document.querySelector(".gallery_queue-block"),watchedBtn:document.querySelector(".watched-btn"),queueBtn:document.querySelector(".queue-btn"),unselectBtn:document.querySelector(".unselect-btn"),paginationMyLibraryContainer:document.querySelector(".pagination-mylibrary_container"),filmModal:document.querySelector("[data-modal]")};G.galleryMyLibraryWatch.classList.remove("is-hidden"),G.galleryMyLibraryQueue.classList.add("is-hidden"),G.watchedBtn.classList.add("active"),G.queueBtn.classList.remove("active"),(0,u.updateMoviesGalleryByStatus)("watched"),G.watchedBtn.addEventListener("click",function({target:e}){G.galleryMyLibraryWatch.classList.remove("is-hidden"),G.galleryMyLibraryQueue.classList.add("is-hidden"),e.classList.contains("active")||(G.watchedBtn.classList.add("active"),G.queueBtn.classList.remove("active"),(0,u.updateMoviesGalleryByStatus)(e.dataset.status))}),G.queueBtn.addEventListener("click",function({target:e}){G.galleryMyLibraryWatch.classList.add("is-hidden"),G.galleryMyLibraryQueue.classList.remove("is-hidden"),e.classList.contains("active")||(G.watchedBtn.classList.remove("active"),G.queueBtn.classList.add("active"),(0,u.updateMoviesGalleryByStatus)(e.dataset.status))});
//# sourceMappingURL=mylibrary.93464a6f.js.map
