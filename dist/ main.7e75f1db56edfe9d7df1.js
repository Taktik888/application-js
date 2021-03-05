(()=>{"use strict";function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var e=function(){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.$el=document.getElementById(t),this.init()}var n,r;return n=e,(r=[{key:"init",value:function(){}},{key:"onShow",value:function(){}},{key:"onHide",value:function(){}},{key:"hide",value:function(){this.$el.classList.add("hide"),this.onHide()}},{key:"show",value:function(){this.$el.classList.remove("hide"),this.onShow()}}])&&t(n.prototype,r),e}();function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var u=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}(s,t);var e,n,u,f,l=(u=s,f=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=c(u);if(f){var n=c(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return i(this,t)});function s(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),l.call(this,t)}return e=s,(n=[{key:"init",value:function(){localStorage.getItem("visited")&&this.hide(),this.$el.querySelector(".js-header-start").addEventListener("click",a.bind(this))}}])&&r(e.prototype,n),s}(e);function a(){localStorage.setItem("visited",JSON.stringify(!0)),this.hide()}function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t,e){return!e||"object"!==f(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(c,t);var e,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=y(r);if(o){var n=y(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return p(this,t)});function c(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),(e=i.call(this,t)).tabs=[],e}return e=c,(n=[{key:"init",value:function(){this.$el.addEventListener("click",b.bind(this))}},{key:"registerTabs",value:function(t){this.tabs=t}}])&&l(e.prototype,n),c}(e);function b(t){t.preventDefault(),t.target.classList.contains("tab")&&(Array.from(this.$el.querySelectorAll(".tab")).forEach((function(t){t.classList.remove("active")})),t.target.classList.add("active"));var e=this.tabs.find((function(e){return e.name===t.target.dataset.name}));this.tabs.forEach((function(t){return t.component.hide()})),e.component.show()}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var d=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.form=e,this.controls=n}var e,n;return e=t,(n=[{key:"value",value:function(){var t=this,e={};return Object.keys(this.controls).forEach((function(n){e[n]=t.form[n].value})),e}},{key:"clear",value:function(){var t=this;Object.keys(this.controls).forEach((function(e){t.form[e].value=""}))}},{key:"isValid",value:function(){var t=this,e=!0;return Object.keys(this.controls).forEach((function(n){var r=t.controls[n],o=!0;r.forEach((function(e){o=e(t.form[n].value)&&o})),o?m(t.form[n]):function(t){m(t);t.classList.add("invalid"),t.insertAdjacentHTML("afterend",'<p class="validation-error">Введите корректное значение</p>')}(t.form[n]),e=e&&o})),e}}])&&v(e.prototype,n),t}();function m(t){t.classList.remove("invalid"),t.nextSibling&&t.closest(".form-control").removeChild(t.nextSibling)}function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var O=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n;return e=t,n=[{key:"required",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.trim()}},{key:"minLength",value:function(t){return function(e){return e.length>=t}}}],null&&w(e.prototype,null),n&&w(e,n),t}();function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function j(t){return new Promise((function(e,n){var r;return Promise.resolve(fetch(t)).then((function(t){try{return r=t,Promise.resolve(r.json()).then(e,n)}catch(t){return n(t)}}),n)}))}var P=new(function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.url=e}var e,n;return e=t,(n=[{key:"createPost",value:function(t){return new Promise(function(e,n){var r,o,i=function(t){try{return console.error(t),function(){try{return e()}catch(t){return n(t)}}()}catch(t){return n(t)}};try{return r=new Request(this.url+"posts.json",{method:"post",body:JSON.stringify(t)}),Promise.resolve(fetch(r)).then((function(t){try{return o=t,Promise.resolve(o.json()).then(e,i)}catch(t){return i(t)}}),i)}catch(t){i(t)}}.bind(this))}},{key:"fetchPosts",value:function(){return new Promise(function(t,e){try{return t(j(new Request("".concat(this.url,"/posts.json"),{method:"get"})))}catch(t){console.error(t)}return t()}.bind(this))}},{key:"fetchPostById",value:function(t){return new Promise(function(e,n){try{return e(j(new Request("".concat(this.url,"/posts/").concat(t,".json"),{method:"get"})))}catch(t){console.error(t)}return e()}.bind(this))}}])&&g(e.prototype,n),t}())("https://application-js-default-rtdb.europe-west1.firebasedatabase.app/");function S(t){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function k(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function R(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function E(t,e){return(E=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function T(t,e){return!e||"object"!==S(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function L(t){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var x=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&E(t,e)}(c,t);var e,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=L(r);if(o){var n=L(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return T(this,t)});function c(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),i.call(this,t)}return e=c,(n=[{key:"init",value:function(){this.$el.addEventListener("submit",B.bind(this)),this.form=new d(this.$el,{title:[O.required],fulltext:[O.required,O.minLength(10)]})}}])&&R(e.prototype,n),c}(e);function B(t){return new Promise(function(e,n){var r;if(t.preventDefault(),this.form.isValid())return r=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?_(Object(n),!0).forEach((function(e){k(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({type:this.$el.type.value,date:(new Date).toLocaleDateString()},this.form.value()),Promise.resolve(P.createPost(r)).then(function(t){try{return this.form.clear(),alert("Запись создана в базе данных"),o.call(this)}catch(t){return n(t)}}.bind(this),n);function o(){return e()}return o.call(this)}.bind(this))}function $(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n="news"===t.type?'<li class="tag tag-blue tag-rounded">Новость</li>':'<li class="tag tag-rounded">Заметка</li>',r=JSON.parse(localStorage.getItem("favorites"))||[],o=r.find((function(e){return e.id===t.id})),i=o?'<button class="button-round button-small button-danger" data-id="'.concat(t.id,'" data-title="').concat(t.title,'">Удалить</button>'):'<button class="button-round button-small button-primary" data-id="'.concat(t.id,'" data-title="').concat(t.title,'">Сохранить</button>');return'\n    <div class="panel">\n      <div class="panel-head">\n        <p class="panel-title">'.concat(t.title,'</p>\n        <ul class="tags">\n          ').concat(n,'\n        </ul>\n      </div>\n      <div class="panel-body">\n        <p class="multi-line">').concat(t.fulltext,'</p>\n      </div>\n      <div class="panel-footer w-panel-footer">\n        <small>').concat(t.date,"</small>\n        ").concat(e.withButton?i:"","\n      </div>\n    </div>\n  ")}function C(t){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function H(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function D(t,e){return(D=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function I(t,e){return!e||"object"!==C(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function q(t){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var A=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&D(t,e)}(c,t);var e,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=q(r);if(o){var n=q(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return I(this,t)});function c(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),(n=i.call(this,t)).loader=e.loader,n}return e=c,(n=[{key:"init",value:function(){this.$el.addEventListener("click",M.bind(this))}},{key:"onShow",value:function(){var t=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t&&t.length?"\n      <ul>\n        ".concat(t.map((function(t){return'<li><a href="#" class="js-link" data-id="'.concat(t.id,'">').concat(t.title,"</a></li>")})).join(" "),"\n      </ul>\n    "):'<p class="center">Вы пока ничего не добавили</p>'}(JSON.parse(localStorage.getItem("favorites")));this.$el.insertAdjacentHTML("afterbegin",t)}},{key:"onHide",value:function(){this.$el.innerHTML=""}}])&&H(e.prototype,n),c}(e);function M(t){return new Promise(function(e,n){var r,o;if(t.preventDefault(),t.target.classList.contains("js-link"))return r=t.target.dataset.id,this.$el.innerHTML="",this.loader.show(),Promise.resolve(P.fetchPostById(r)).then(function(t){try{return o=t,this.loader.hide(),this.$el.insertAdjacentHTML("afterbegin",$(o,{withButton:!1})),i.call(this)}catch(t){return n(t)}}.bind(this),n);function i(){return e()}return i.call(this)}.bind(this))}function J(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var N=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n;return e=t,n=[{key:"fbObjectToArray",value:function(t){return Object.keys(t).map((function(e){var n=t[e];return n.id=e,n}))}}],null&&J(e.prototype,null),n&&J(e,n),t}();function V(t){return(V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function z(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function F(t,e){return(F=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function G(t,e){return!e||"object"!==V(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function K(t){return(K=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var Q=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&F(t,e)}(c,t);var e,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=K(r);if(o){var n=K(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return G(this,t)});function c(t,e){var n,r=e.loader;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),(n=i.call(this,t)).loader=r,n}return e=c,(n=[{key:"init",value:function(){this.$el.addEventListener("click",U.bind(this))}},{key:"onShow",value:function(){return new Promise(function(t,e){var n,r,o;return this.loader.show(),Promise.resolve(P.fetchPosts()).then(function(i){try{return n=i,r=N.fbObjectToArray(n),o=r.map((function(t){return $(t,{withButton:!0})})),this.loader.hide(),this.$el.insertAdjacentHTML("afterbegin",o.join(" ")),t()}catch(t){return e(t)}}.bind(this),e)}.bind(this))}},{key:"onHide",value:function(){this.$el.innerHTML=""}}])&&z(e.prototype,n),c}(e);function U(t){var e=t.target,n=e.dataset.id,r=e.dataset.title;if(n){var o=JSON.parse(localStorage.getItem("favorites"))||[];o.find((function(t){return t.id===n}))?(e.textContent="Сохранить",e.classList.add("button-primary"),e.classList.remove("button-danger"),o=o.filter((function(t){return t.id!==n}))):(e.classList.remove("button-primary"),e.classList.add("button-danger"),e.textContent="Удалить",o.push({id:n,title:r})),localStorage.setItem("favorites",JSON.stringify(o))}}function W(t){return(W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function X(t,e){return(X=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Y(t,e){return!e||"object"!==W(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function Z(t){return(Z=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var tt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&X(t,e)}(o,t);var e,n,r=(e=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=Z(e);if(n){var o=Z(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return Y(this,t)});function o(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),r.call(this,t)}return o}(e);new u("header");var et=new h("navigation"),nt=new tt("loader"),rt=new Q("posts",{loader:nt}),ot=new x("create"),it=new A("favorite",{loader:nt});et.registerTabs([{name:"create",component:ot},{name:"posts",component:rt},{name:"favorite",component:it}])})();