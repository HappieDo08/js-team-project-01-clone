!function(){function e(e,t,a,l){Object.defineProperty(e,t,{get:a,set:l,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},l={},i={},n=a.parcelRequired7c6;null==n&&((n=function(e){if(e in l)return l[e].exports;if(e in i){var t=i[e];delete i[e];var a={id:e,exports:{}};return l[e]=a,t.call(a.exports,a,a.exports),a.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){i[e]=t},a.parcelRequired7c6=n);var o=n.register;o("iE7OH",function(t,a){e(t.exports,"register",function(){return l},function(e){return l=e});var l,i=new Map;l=function(e,t){for(var a=0;a<t.length-1;a+=2)i.set(t[a],{baseUrl:e,path:t[a+1]})}}),o("aNJCr",function(t,a){e(t.exports,"getBundleURL",function(){return l},function(e){return l=e});var l,i={};l=function(e){var t=i[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),i[e]=t),t}}),n("iE7OH").register(n("aNJCr").getBundleURL("2bI8P"),JSON.parse('["2bI8P","mylibrary.b569ed2d.js","l8b3G","symbol-defs.ee796a2b.svg","jXq3O","foto.88e9f0bc.jpg","2U1o0","mylibrary.6fde7e66.js","ivehd","mylibrary.runtime.d34eaeb6.js"]')),n("8IRs8");var s=n("8sEG4"),c={};c=n("aNJCr").getBundleURL("2bI8P")+"foto.88e9f0bc.jpg";var d={};d=n("aNJCr").getBundleURL("2bI8P")+"symbol-defs.ee796a2b.svg";var u=n("iCDYa");n("7rQOT");var r=n("lubd3");let m={galleryQueueBox:document.querySelector(".gallery_queue-box"),filmModal:document.querySelector("[data-modal]"),body:document.querySelector("body")},f={},b=[];async function y(e){let a;if(e.target.classList.contains("gallery_queue-box"))return;let l=Number(e.target.closest(".card").id),i=b.find(e=>e.id===l);if(i)f=i;else{try{f=await (0,s.fetchFilmDetailsById)(l)}catch(e){console.log(e.message),console.log(e.code)}b.push(f)}m.filmModal.innerHTML="",function(e){let a=function(e){let{poster_path:a,title:l,vote_average:i,vote_count:n,popularity:o,original_title:s,genres:c,overview:u}=e,r=`https://image.tmdb.org/t/p/w500${a}`;return`
  <div class="film-modal">
    <button class="button-close" type="button" button-modal-close>
      <svg class="icon-close">
        <use href="${t(d)}#icon-close"></use>
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
              <span class="film-vote_lable">${n}</span>
            </div>
          </li>

          <li class="film-info_item">
            <p class="film-info_lable">Popularity</p>
            <span class="film-info_text">${o}</span>
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
              >${c.map(e=>e.name).join(", ")}</span
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
`}(e);m.filmModal.insertAdjacentHTML("beforeend",a)}(f);let n={closeBtn:document.querySelector("[button-modal-close]"),addQueueBtn:document.querySelector("[button-add-queue]"),addWatchBtn:document.querySelector("[button-add-watch]"),unselectBtn:document.querySelector("[button-unselect]")};L(n.unselectBtn),n.closeBtn.addEventListener("click",p),n.addQueueBtn.addEventListener("click",h),n.addWatchBtn.addEventListener("click",_),n.unselectBtn.addEventListener("click",g);let o=w("watched")||[],c=w("queue")||[],u=o.some(e=>e.id===f.id);c.some(e=>e.id===f.id)&&S(n.addQueueBtn),u&&S(n.addWatchBtn),m.filmModal.classList.remove("is-hidden"),a=window.innerWidth-m.body.offsetWidth+"px",m.body.classList.add("disable-scroll"),m.body.style.paddingRight=a,window.addEventListener("keydown",v)}function p(){m.filmModal.classList.add("is-hidden"),window.removeEventListener("keydown",v),m.body.classList.remove("disable-scroll"),m.body.style.paddingRight=0,(0,r.updateMoviesGalleryByStatus)("queue",globalCurrentPage)}function v(e){"Escape"===e.code&&p()}function g(){let e=w("watched")||[],t=w("queue")||[],a=e.some(e=>e.id===f.id);t.some(e=>e.id===f.id)&&(0,u.removeSaveQueue)(f),a&&(0,u.removeSaveWatch)(f),L(document.querySelector("[button-add-watch]")),L(document.querySelector("[button-add-queue]"))}function h({target:e}){(0,u.dataSaveQueue)(f),window.location.pathname.includes("my-library")&&(document.querySelector(".watched-btn").classList.contains("active")?(0,r.updateMoviesGalleryByStatus)("watched",globalCurrentPage):(0,r.updateMoviesGalleryByStatus)("queue",globalCurrentPage)),(0,r.updateMoviesGalleryByStatus)("queue"),S(e),L(document.querySelector("[button-add-watch]")),L(document.querySelector("[button-unselect]"))}function _({target:e}){(0,u.dataSaveWatch)(f),window.location.pathname.includes("my-library")&&(document.querySelector(".watched-btn").classList.contains("active")?(0,r.updateMoviesGalleryByStatus)("watched",globalCurrentPage):(0,r.updateMoviesGalleryByStatus)("queue",globalCurrentPage)),(0,r.updateMoviesGalleryByStatus)("watch"),S(e),L(document.querySelector("[button-add-queue]")),L(document.querySelector("[button-unselect]"))}function w(e){return function(e){let t;try{t=JSON.parse(e)}catch(e){console.log("ERROR: ",e.message),console.log("ERROR CODE: ",e.code)}return t}(localStorage.getItem(e))}function S(e){e.disabled=!0,e.classList.add("is-disabled")}function L(e){e.disabled=!1,e.classList.remove("is-disabled")}m.galleryQueueBox.addEventListener("click",y),m.filmModal.addEventListener("click",function(e){e.currentTarget===e.target&&p()}),window.loadNoPoster=function(e){e.src=t(c)};var s=n("8sEG4"),u=n("iCDYa");n("7rQOT");var r=n("lubd3");let q={galleryWatchBox:document.querySelector(".gallery_watch-box"),filmModal:document.querySelector("[data-modal]"),body:document.querySelector("body")},B={},M=[];async function E(e){let a;if(e.target.classList.contains("gallery_fetch-box"))return;let l=Number(e.target.closest(".card").id),i=M.find(e=>e.id===l);if(i)B=i;else{try{B=await (0,s.fetchFilmDetailsById)(l)}catch(e){console.log(e.message),console.log(e.code)}M.push(B)}q.filmModal.innerHTML="",function(e){let a=function(e){let{poster_path:a,title:l,vote_average:i,vote_count:n,popularity:o,original_title:s,genres:c,overview:u}=e,r=`https://image.tmdb.org/t/p/w500${a}`;return`
  <div class="film-modal">
    <button class="button-close" type="button" button-modal-close>
      <svg class="icon-close">
        <use href="${t(d)}#icon-close"></use>
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
              <span class="film-vote_lable">${n}</span>
            </div>
          </li>

          <li class="film-info_item">
            <p class="film-info_lable">Popularity</p>
            <span class="film-info_text">${o}</span>
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
              >${c.map(e=>e.name).join(", ")}</span
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
`}(e);q.filmModal.insertAdjacentHTML("beforeend",a)}(B);let n={closeBtn:document.querySelector("[button-modal-close]"),addQueueBtn:document.querySelector("[button-add-queue]"),addWatchBtn:document.querySelector("[button-add-watch]"),unselectBtn:document.querySelector("[button-unselect]")};C(n.unselectBtn),n.closeBtn.addEventListener("click",R),n.addQueueBtn.addEventListener("click",W),n.addWatchBtn.addEventListener("click",$),n.unselectBtn.addEventListener("click",G);let o=k("watched")||[],c=k("queue")||[],u=o.some(e=>e.id===B.id);c.some(e=>e.id===B.id)&&P(n.addQueueBtn),u&&P(n.addWatchBtn),q.filmModal.classList.remove("is-hidden"),a=window.innerWidth-q.body.offsetWidth+"px",q.body.classList.add("disable-scroll"),q.body.style.paddingRight=a,window.addEventListener("keydown",x)}function R(){q.filmModal.classList.add("is-hidden"),window.removeEventListener("keydown",x),q.body.classList.remove("disable-scroll"),q.body.style.paddingRight=0,(0,r.updateMoviesGalleryByStatus)("watched",globalCurrentPage)}function x(e){"Escape"===e.code&&R()}function G(){let e=k("watched")||[],t=k("queue")||[],a=e.some(e=>e.id===B.id);t.some(e=>e.id===B.id)&&(0,u.removeSaveQueue)(B),a&&(0,u.removeSaveWatch)(B),C(document.querySelector("[button-add-watch]")),C(document.querySelector("[button-add-queue]"))}function W({target:e}){(0,u.dataSaveQueue)(B),window.location.pathname.includes("my-library")&&(document.querySelector(".watched-btn").classList.contains("active")?(0,r.updateMoviesGalleryByStatus)("watched",globalCurrentPage):(0,r.updateMoviesGalleryByStatus)("queue",globalCurrentPage)),(0,r.updateMoviesGalleryByStatus)("watch"),P(e),C(document.querySelector("[button-add-watch]")),C(document.querySelector("[button-unselect]"))}function $({target:e}){(0,u.dataSaveWatch)(B),window.location.pathname.includes("my-library")&&(document.querySelector(".watched-btn").classList.contains("active")?(0,r.updateMoviesGalleryByStatus)("watched",globalCurrentPage):(0,r.updateMoviesGalleryByStatus)("queue",globalCurrentPage)),(0,r.updateMoviesGalleryByStatus)("watch"),P(e),C(document.querySelector("[button-add-queue]")),C(document.querySelector("[button-unselect]"))}function k(e){return function(e){let t;try{t=JSON.parse(e)}catch(e){console.log("ERROR: ",e.message),console.log("ERROR CODE: ",e.code)}return t}(localStorage.getItem(e))}function P(e){e.disabled=!0,e.classList.add("is-disabled")}function C(e){e.disabled=!1,e.classList.remove("is-disabled")}q.galleryWatchBox.addEventListener("click",E),q.filmModal.addEventListener("click",function(e){e.currentTarget===e.target&&R()}),window.loadNoPoster=function(e){e.src=t(c)};var r=n("lubd3");let H={galleryMyLibraryWatch:document.querySelector(".gallery_watch-block"),galleryMyLibraryQueue:document.querySelector(".gallery_queue-block"),watchedBtn:document.querySelector(".watched-btn"),queueBtn:document.querySelector(".queue-btn"),unselectBtn:document.querySelector(".unselect-btn"),paginationMyLibraryContainer:document.querySelector(".pagination-mylibrary_container"),filmModal:document.querySelector("[data-modal]")};H.galleryMyLibraryWatch.classList.remove("is-hidden"),H.galleryMyLibraryQueue.classList.add("is-hidden"),H.watchedBtn.classList.add("active"),H.queueBtn.classList.remove("active"),(0,r.updateMoviesGalleryByStatus)("watched"),H.watchedBtn.addEventListener("click",function({target:e}){H.galleryMyLibraryWatch.classList.remove("is-hidden"),H.galleryMyLibraryQueue.classList.add("is-hidden"),e.classList.contains("active")||(H.watchedBtn.classList.add("active"),H.queueBtn.classList.remove("active"),(0,r.updateMoviesGalleryByStatus)(e.dataset.status))}),H.queueBtn.addEventListener("click",function({target:e}){H.galleryMyLibraryWatch.classList.add("is-hidden"),H.galleryMyLibraryQueue.classList.remove("is-hidden"),e.classList.contains("active")||(H.watchedBtn.classList.remove("active"),H.queueBtn.classList.add("active"),(0,r.updateMoviesGalleryByStatus)(e.dataset.status))})}();
//# sourceMappingURL=mylibrary.b569ed2d.js.map
