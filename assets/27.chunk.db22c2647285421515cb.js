(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{83:function(e,t,i){"use strict";i.r(t);var n=i(13),s=i.n(n),l=i(14),r=i.n(l),o=i(9),a=i(199),c=i(200),d=i.n(c),u=i(201),h=i.n(u),p=i(18),v=(i(171),i(174)),E=function(){function e(t){s()(this,e),this._init(t),this.bindEvents()}return r()(e,[{key:"_init",value:function(e){this.el=e,this.defaults={autoPlay:!1,contain:!0,customUI:!1,draggable:!0,cellSelector:".Slider__item",cellAlign:"center",prevNextButtons:!0,pageDots:!0,groupCells:!1,wrapAround:!0,wheelControl:!1,adaptiveHeight:!0,arrowShape:{x0:10,x1:60,y1:50,x2:60,y2:45,x3:15}},this.options=Object(a.merge)(this.defaults,Object(p.d)(e.dataset.options)),this.parentControllerEl=Object(p.a)(this.el,".js-sliderController"),e.classList.remove("is-hidden"),e.offsetHeight,this.sliderEl=new v(e,this.options),this.navContainerEl=document.querySelector(".Section--behind-the-brand .SliderNav"),this.caption=this.navContainerEl.querySelector(".caption"),this.slidesCaptions=this.el.querySelectorAll(".Slider__item figcaption"),this.caption.innerHTML=this.slidesCaptions[0].innerHTML,this.initCustomUI(this.sliderEl)}},{key:"initCustomUI",value:function(e){var t=this,i=this.navContainerEl.querySelector(".button--previous");i&&i.addEventListener("click",(function(){t.sliderEl.previous()}));var n=this.navContainerEl.querySelector(".button--next");n&&n.addEventListener("click",(function(){t.sliderEl.next()}))}},{key:"bindEvents",value:function(){var e=this;window.addEventListener("load",(function(){e.sliderEl.resize()})),this.parentControllerEl&&jQuery(this.parentControllerEl).on("isActive",(function(t){e.sliderEl.resize()})),this.options.wheelControl&&d.a.addWheelListener(this.sliderEl.element,(function(t){t.preventDefault();var i=h()(t);e.sliderEl.applyForce(-i.pixelY/4),e.sliderEl.startAnimation(),e.sliderEl.dragEnd()})),this.sliderEl.on("staticClick",(function(e,t,i,n){i&&e.target.click()})),this.sliderEl.on("change",(function(t){e.caption.innerHTML=e.slidesCaptions[t].innerHTML}))}}]),e}();t.default=Object(o.a)((function(e,t){new E(e,t)}))}}]);
//# sourceMappingURL=27.chunk.db22c2647285421515cb.js.map