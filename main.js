(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,o=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,"string");if("object"!==e(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===e(o)?o:String(o)),i)}var o}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}var r=n((function e(t){var n=this,r=t.btn,i=t.box;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.btn=r,this.box=i,this.info=document.querySelector(".header__info"),this.link=document.querySelector(".header__link"),this.action=!1,this.btn.addEventListener("click",(function(){n.action?(n.info.style.display="flex",n.link.style.display="none",document.querySelector("header").style.cssText="  background-color: #fff;\n        box-shadow: 0px 8px 26px 19px rgba(255, 255, 255, 1);"):(n.info.style.display="none",n.link.style.display="flex",document.querySelector("header").style.cssText="  background: none;\n          box-shadow: none;"),window.innerWidth>=1024&&(document.querySelector("header").style.cssText="  background-color: #fff;\n        box-shadow: 0px 8px 26px 19px rgba(255, 255, 255, 1);"),n.btn.classList.toggle("btn-circle"),n.action=!n.action}))}));function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==i(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===i(o)?o:String(o)),r)}var o}function a(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var l=a((function e(t){var n=this,r=t.btn,i=t.modal;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.btn=r,this.modal=i,this.btn.addEventListener("click",(function(){n.modal.remove()}))}));function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==u(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===u(i)?i:String(i)),r)}var i}function s(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var m=s((function e(t){var n=this,r=t.body,i=t.openPopapBtn,o=t.popap;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.body=r,this.openPopapBtn=i,this.popap=o,this.openPopapBtn.addEventListener("click",(function(){n.popap.popapOrderContainerInfo.innerHTML="",n.body.append(n.popap.render())})),this.popap.close.addEventListener("click",(function(){n.popap.render().remove()}))}));function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==p(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===p(i)?i:String(i)),r)}var i}var f=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.popapOrder=document.createElement("div"),this.popapOrderContainer=document.createElement("div"),this.popapOrderContainerInfo=document.createElement("div"),this.form=document.createElement("form"),this.name=document.createElement("input"),this.phone=document.createElement("input"),this.sendOrder=document.createElement("button"),this.close=document.createElement("button")}var t,n;return t=e,(n=[{key:"closeDOM",value:function(){var e=document.createElement("div");e.classList.add("popap-order-container-close"),this.close.classList.add("popap-order-container-close-btn");var t=document.createElement("span");return this.close.append(t),e.append(this.close),e}},{key:"regNunber",value:function(e){var t=new RegExp(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/);console.log("12312342".includes(t))}},{key:"formRender",value:function(){return this.name.setAttribute("type","text"),this.name.setAttribute("placeholder","Введите ваше имя"),this.phone.setAttribute("type","number"),this.phone.setAttribute("placeholder","(___) ___-___-__"),this.sendOrder.innerText="Отправить заявку",this.form.append(this.name,this.phone,this.sendOrder),this.form}},{key:"infoRender",value:function(){var e=document.createElement("h3"),t=document.createElement("p");return e.innerText="Обратный звонок",t.innerText="Оставьте ваши контактные данные и наш менеджер с вами свяжется",this.popapOrderContainerInfo.append(e,t,this.formRender()),this.popapOrderContainerInfo}},{key:"render",value:function(){return this.popapOrder.classList.add("popap-order"),this.popapOrderContainer.classList.add("popap-order-container"),this.popapOrderContainerInfo.classList.add("popap-order-container-info"),this.popapOrderContainer.append(this.infoRender(),this.closeDOM()),this.popapOrder.append(this.popapOrderContainer),this.popapOrder}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==v(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===v(i)?i:String(i)),r)}var i}function h(e,t,n){return t&&y(e.prototype,t),n&&y(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var b=h((function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t&&(this.element=document.createElement(t)),n&&this.element.classList.add(n)}));function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==g(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===g(i)?i:String(i)),r)}var i}var _=function(){function e(t){var n=this,r=t.btnNext,i=t.btnPrev,o=t.questionsBD,a=t.questionsBDImages;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.btnNext=r,this.btnPrev=i,this.questionsBD=o,this.questionsBDImages=a,this.checked=!1,this.$surveyElement=new b("div","questions").element,this.$surveyContainer=new b("div","survey__container").element,this.toGetConsultationBtn=new b("button","get__consultation").element,this.page=0,this.btnNext.addEventListener("click",(function(){n.page>=n.questionsBD.at(-1)?n.page=n.questionsBD.at(-1):n.page++,n.renderNewQuestions()})),this.btnPrev.addEventListener("click",(function(){n.page<=0?n.page=0:n.page--,n.renderNewQuestions()})),this.toGetConsultationBtn.textContent="получить консультацию",this.toGetConsultationBtn.addEventListener("click",(function(){n.$surveyContainer.innerHTML="the end!"}))}var t,n;return t=e,(n=[{key:"getImageName",value:function(e){if(!e)return null;var t=this.questionsBDImages.find((function(t){return t.id===e}));return t?"".concat(t.name,".").concat(t.format):null}},{key:"getBtnNav",value:function(){var e=new b("div","btn__nav-container").element;e.innerHTML="",this.btnNext.innerHTML="",this.btnPrev.innerHTML="";var t=new b("div","arrow__left").element,n=new b("div","arrow__right").element,r=new b("span").element;return r.textContent="следующий вопрос",this.btnNext.append(r,n),this.btnPrev.append(t),e.append(this.page<=0?"":this.btnPrev,this.page>=this.questionsBD.length-1?this.toGetConsultationBtn:this.btnNext),e}},{key:"renderNewQuestions",value:function(){var e=this;this.$surveyContainer.innerHTML="";var t=this.questionsBD[this.page],n=new b("form","form-survey").element,r=new b("h3").element;r.textContent=t.question,n.append(r),t.answers.forEach((function(r,i){var o=new b("div","label__container").element,a=new b("label").element,l=new b("input").element,u=new b("span").element;l.value=r.id,l.checked=r.checked,l.type=t.multiple?"checkbox":"radio",l.name=r.name;var c=e.getImageName(r.imgID),s=new Image;r.imgID?(s.src="./public/img/survey/img/".concat(c),a.append(s)):(o.style.cssText="width: 45%;margin: 20px;",u.style.cssText="padding: 26px"),3===t.answers.length&&(o.style.cssText="width: 45%;margin: 20px; ",n.style.justifyContent="",n.style.cssText="align-content: flex-start; justify-content: flex-start;"),u.textContent=r.a,u.append(l),a.append(u),o.append(a),n.append(o)})),this.$surveyContainer.append(r,n,this.takeSurveyFooter()),this.$surveyElement.append(this.$surveyContainer)}},{key:"getCountPage",value:function(){var e=new b("div","take__survey-count").element,t=new b("div","number__page-container").element,n=new b("span","number__page").element,r=new b("span","all__number__page").element;n.textContent="0".concat(this.page+1),r.textContent="0".concat(this.questionsBD.length);var i=new b("div","lienter__contaienr").element,o=new b("div","count__liener").element;return o.style.width="".concat(100/this.questionsBD.length*(this.page+1),"%"),i.append(o),t.append(n,"/",r),e.append(t,i),e}},{key:"takeSurveyFooter",value:function(){var e=new b("div","take__survey-footer").element;return e.append(this.getCountPage(),this.getBtnNav()),e}},{key:"render",value:function(){return this.renderNewQuestions(),this.$surveyElement}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),S=[{id:1,question:"С какой целью вы планируете приобрести недвижимость?",multiple:!1,answers:[{id:1,a:"Для комфортной и безопасной жизни",imgID:2,name:"target",checked:!0},{id:2,a:"Для инвестиций с доходностью до 10%",imgID:4,name:"target",checked:!1}]},{id:2,question:"Какой тип жилья вы рассматриваете для покупки?",multiple:!0,answers:[{id:1,a:"Квартира",imgID:1,name:"type",checked:!1},{id:2,a:"Дом",imgID:3,name:"type",checked:!1},{id:3,a:"Пентхаус",imgID:5,name:"type",checked:!0},{id:4,a:"Вилла",imgID:6,name:"type",checked:!0}]},{id:3,question:"Какой у вас бюджет на покупку?",multiple:!1,answers:[{id:1,a:"Любые варианты",imgID:null,name:"finace",checked:!1},{id:2,a:"Менее 10 000 000 рублей",imgID:null,name:"finace",checked:!1},{id:3,a:"10 000 000 - 20 000 000 рублей",imgID:null,name:"finace",checked:!0},{id:4,a:"20 000 000 - 50 000 000 рублей",imgID:null,name:"finance",checked:!1},{id:5,a:"10 000 000 - 70 000 000 рублей",imgID:null,name:"finance",checked:!1},{id:6,a:"Более 70 000 000 рублей",imgID:null,name:"finance",checked:!1}]},{id:4,question:"Сколько комнат должно быть в апартаментах?",multiple:!0,answers:[{id:1,a:"Апартаменты-студия",imgID:null,name:"numberOfRooms",checked:!1},{id:2,a:"Апартаменты с 1 комнатой",imgID:null,name:"numberOfRooms",checked:!0},{id:3,a:"Апартаменты с 2 комнатами",imgID:null,name:"numberOfRooms",checked:!1},{id:4,a:"Апартаменты с 3 комнатами",imgID:null,name:"numberOfRooms",checked:!1},{id:5,a:"Апартаменты с 4 комнатами",imgID:null,name:"numberOfRooms",checked:!0},{id:6,a:"Апартаменты с 4+ комнатами",imgID:null,name:"numberOfRooms",checked:!1}]},{id:5,question:"Какова цель приобретения недвижимости?",multiple:!1,answers:[{id:1,a:"Для личного проживания в Дубае",imgID:null,name:"target",checked:!1},{id:2,a:"Для личного отдыха и получения пассивного дохода",imgID:null,name:"target",checked:!1},{id:3,a:"Только для инвестиций и получения дохода",imgID:null,name:"target",checked:!0}]},{id:6,question:"Когда Вы планируете приобрести недвижимость в Дубае?",multiple:!1,answers:[{id:1,a:"В течении этого месяца",imgID:null,name:"when",checked:!1},{id:2,a:"В течении 2023 года",imgID:null,name:"when",checked:!1},{id:3,a:"Пока определяюсь, планирую покупку в ближайшие годы",imgID:null,name:"when",checked:!0},{id:1,a:"Просто интересуюсь, еще не планирую покупку",imgID:null,name:"when",checked:!1}]},{id:7,question:"Вариант готовности",multiple:!1,answers:[{id:1,a:"Любые варианты",imgID:null,name:"readinessOption",checked:!1},{id:2,a:"Не знаю застройщика",imgID:null,name:"readinessOption",checked:!0},{id:3,a:"Готовый вариант",imgID:null,name:"readinessOption",checked:!1}]}],k=[{id:1,name:"apartment",format:"png"},{id:2,name:"apartment2",format:"png"},{id:3,name:"house",format:"png"},{id:4,name:"money",format:"png"},{id:5,name:"penthouse",format:"png"},{id:6,name:"villa",format:"png"}];function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==C(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==C(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===C(i)?i:String(i)),r)}var i}var D=function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$surveyWindow=new b("div","survey__window").element,this.$closeSurveyWindowBtn=new b("button","close-survey__window-btn").element,this.$nextAnswer=new b("button","next__answer").element,this.$prevAnswer=new b("button","prev__answer").element,this.$takeSurveyBtn=new b("button","survey__content-block__take-survey-btn").element,this.survey_db=S,this.survey_db_img=k,this.$closeSurveyWindowBtn.addEventListener("click",(function(){document.body.style.overflow="auto",t.$surveyWindow.remove()})),this.$takeSurveyBtn.addEventListener("click",(function(){t.$surveyWindow.innerHTML="",t.$surveyWindow.append(new _({btnNext:t.$nextAnswer,btnPrev:t.$prevAnswer,questionsBD:t.survey_db,questionsBDImages:t.survey_db_img}).render())}))}var t,n;return t=e,(n=[{key:"bg",value:function(){var e=new b("div","survey__window-bg").element,t=new b("div","survey__window-bg__blur").element,n=new b("div","survey__window-bg__blur-image").element;return t.appendChild(n),e.appendChild(t),e}},{key:"getImageBigTitle",value:function(){var e=new Image;return e.src="./public/img/big_logo_white.png",e.alt="big_logo_white",e.classList.add("big__title-img_white"),e}},{key:"getImagePresentIcon",value:function(){var e=new Image;return e.src="./public/img/survey/present.svg",e.alt="present",e}},{key:"surveyContent",value:function(){var e=new b("div","survey").element,t=new b("div","survey__content").element,n=new b("div","survey__content-block").element,r=new b("div","survey__content-block__card").element,i=new b("div","survey__content-block__card-icon").element;this.$closeSurveyWindowBtn.textContent="x";var o=document.createElement("h3"),a=document.createElement("p");o.textContent="Подберите вариант недвижимости в ОАЭ за 1 минуту",a.innerHTML="Ответьте на несколько вопросов и <b>получите подборку с лучшими предложениями</b> на рынке\n    недвижимости Дубая по вашим параметрам";var l=document.createElement("p");l.innerHTML="<b>А также вы получите скидку 5% на покупку недвижимости</b>";var u=new b("div","arrow__right").element,c=new b("span").element;c.textContent="пройти опрос",this.$takeSurveyBtn.append(c,u),i.append(this.getImagePresentIcon()),r.append(i,l);var s=document.createElement("div");return s.append(this.$takeSurveyBtn),n.append(o,a,r,s),t.append(n),e.append(t),e}},{key:"close",value:function(){}},{key:"renderBlock",value:function(){return this.$surveyWindow.append(this.bg(),this.surveyContent()),this.$closeSurveyWindowBtn.remove(),this.$surveyWindow}},{key:"render",value:function(){return this.$surveyWindow.append(this.bg(),this.getImageBigTitle(),this.surveyContent()),this.$surveyWindow}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),x=[{id:1,imgID:1,info:{company:"Дубай-Мидоус",title:"Прекрасная и роскшная вилла на берегу моря",rooms:2,sizeAport:120,price:250.672}},{id:2,imgID:2,info:{company:"Дубай-Мидоус",title:"Прекрасная и роскшная вилла на берегу моря",rooms:1,sizeAport:120,price:270.672}},{id:3,imgID:3,info:{company:"Дубай-Мидоус",title:"Прекрасная и роскшная вилла на берегу моря",rooms:2,sizeAport:120,price:290.672}},{id:4,imgID:4,info:{company:"Дубай-Мидоус",title:"Прекрасная и роскшная вилла на берегу моря",rooms:3,sizeAport:120,price:300.672}},{id:5,imgID:5,info:{company:"Дубай-Мидоус",title:"Прекрасная и роскшная вилла на берегу моря",rooms:3,sizeAport:120,price:350.672}},{id:6,imgID:6,info:{company:"Дубай-Мидоус",title:"Прекрасная и роскшная вилла на берегу моря",rooms:5,sizeAport:120,price:500.672}},{id:7,imgID:7,info:{company:"Дубай-Мидоус",title:"Прекрасная и роскшная вилла на берегу моря",rooms:6,sizeAport:120,price:700.672}},{id:8,imgID:8,info:{company:"Дубай-Мидоус",title:"Прекрасная и роскшная вилла на берегу моря",rooms:6,sizeAport:120,price:750.672}},{id:9,imgID:9,info:{company:"Дубай-Мидоус",title:"Прекрасная и роскшная вилла на берегу моря",rooms:8,sizeAport:120,price:900.672}}],O=[{id:1,name:"florian-schmidinger-b_79nOqf95I-unsplash1",format:"png"},{id:2,name:"florian-schmidinger-b_79nOqf95I-unsplash1-1",format:"png"},{id:3,name:"florian-schmidinger-b_79nOqf95I-unsplash1-2",format:"png"},{id:4,name:"florian-schmidinger-b_79nOqf95I-unsplash1-3",format:"png"},{id:5,name:"florian-schmidinger-b_79nOqf95I-unsplash1-4",format:"png"},{id:6,name:"florian-schmidinger-b_79nOqf95I-unsplash1-5",format:"png"},{id:7,name:"florian-schmidinger-b_79nOqf95I-unsplash1-6",format:"png"},{id:8,name:"florian-schmidinger-b_79nOqf95I-unsplash1-7",format:"png"},{id:9,name:"florian-schmidinger-b_79nOqf95I-unsplash1-8",format:"png"}];function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==E(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===E(i)?i:String(i)),r)}var i}var q=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.color=t}var t,n;return t=e,(n=[{key:"renderSVGroom",value:function(){var e=document.createElementNS("http://www.w3.org/2000/svg","svg");return e.innerHTML='\n    <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">\n     <path fill-rule="evenodd" clip-rule="evenodd" d="M0 6.29734V10.25C0 10.4929 0.232224 10.7189 0.602615 10.7189C0.811758 10.7189 1.07139 10.4592 1.07139 10.25V9.64705H13.9286V10.25C13.9286 10.4929 14.1608 10.7189 14.5313 10.7189C14.7404 10.7189 15 10.4592 15 10.25V6.29734C15 5.57988 14.244 4.82349 13.5268 4.82349H1.47322C0.755987 4.82349 0 5.57988 0 6.29734Z" fill="'.concat(this.color,'"/>\n     <path fill-rule="evenodd" clip-rule="evenodd" d="M1.60742 0.468982V3.7517H3.21455V3.3497C3.21455 1.89681 4.58434 2.14379 5.75924 2.14379C6.51688 2.14379 6.96455 2.59166 6.96455 3.3497V3.7517H8.03603V3.3497C8.03603 1.89681 9.40574 2.14379 10.5806 2.14379C11.3384 2.14379 11.786 2.59166 11.786 3.3497V3.7517H13.3932V0.468982C13.3932 0.259828 13.1335 0 12.9245 0H2.07612C1.86706 0 1.60742 0.259828 1.60742 0.468982Z" fill="').concat(this.color,'"/>\n    </svg>\n    \n    '),e.lastElementChild}},{key:"renderSVGsize",value:function(){var e=document.createElementNS("http://www.w3.org/2000/svg","svg");return e.innerHTML='\n    <svg  width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path fill-rule="evenodd" clip-rule="evenodd" d="M8.31641 10.0195V13.3008C8.31641 14.2275 9.07157 15 9.89776 15H13.4119C14.2206 15 14.9932 14.227 14.9932 13.418V9.90235C14.9932 9.07408 14.2196 8.32031 13.2947 8.32031H10.0149C9.07667 8.32031 8.31641 9.0809 8.31641 10.0195Z" fill="'.concat(this.color,'"/>\n      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 9.90235V13.418C0 14.227 0.772661 15 1.58135 15H5.09549C5.92003 15 6.67677 14.2286 6.67677 13.3008V10.0195C6.67677 9.0809 5.91658 8.32031 4.9783 8.32031H1.69847C0.772248 8.32031 0 9.0758 0 9.90235Z" fill="').concat(this.color,'"/>\n      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.58203V5.09769C0 5.92424 0.772248 6.67965 1.69847 6.67965H4.9783C5.91568 6.67965 6.67677 5.91824 6.67677 4.98045V1.69921C6.67677 0.77389 5.9234 0 5.09549 0H1.58135C0.772661 0 0 0.772994 0 1.58203Z" fill="').concat(this.color,'"/>\n      <path fill-rule="evenodd" clip-rule="evenodd" d="M8.31641 1.69921V4.98045C8.31641 5.919 9.07873 6.67965 10.0149 6.67965H13.2947C13.7891 6.67965 14.2169 6.46585 14.4741 6.21889C14.7175 5.9851 14.9932 5.55976 14.9932 5.09769V1.58203C14.9932 0.772994 14.2206 0 13.4119 0H9.89776C9.07157 0 8.31641 0.77258 8.31641 1.69921Z" fill="').concat(this.color,'"/>\n\n      </svg>\n    \n    '),e.lastElementChild}}])&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==j(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==j(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===j(i)?i:String(i)),r)}var i}function B(e,t,n){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,n)}function M(e,t){var n=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}(e,t);return function(e,t){return t.get?t.get.call(e):t.value}(e,n)}var $=new WeakMap,A=new WeakMap,L=new WeakMap,H=new WeakMap,V=new WeakMap,W=new WeakMap,N=new WeakMap,z=function(){function e(t){var n=t.container;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),B(this,$,{writable:!0,value:150}),B(this,A,{writable:!0,value:300}),B(this,L,{writable:!0,value:700}),B(this,H,{writable:!0,value:999.999999}),B(this,V,{writable:!0,value:"#D9B474"}),B(this,W,{writable:!0,value:"#D97A74"}),B(this,N,{writable:!0,value:"#B874D9"}),this.$apartments=n,this.apartments_db=x,this.apartments_img_db=O}var t,n;return t=e,(n=[{key:"toggleImageButtons",value:function(){return{prevBtn:new b("button","prev-btn").element,nextBtn:new b("button","next-btn").element}}},{key:"lowDOM",value:function(){var e=new b("div","apartments__low").element,t=new b("div","apartments__low-active").element,n=new b("h3").element;n.textContent="Недвижимость от $150,000";var r=this.searchApartments(M(this,$),M(this,A),M(this,V));return t.append(r),e.append(n,t),e}},{key:"mediumDOM",value:function(){var e=new b("div","apartments__medium").element,t=new b("div","apartments__medium-active").element,n=new b("h3").element;n.textContent="Недвижимость от $300,000";var r=this.searchApartments(M(this,A),M(this,L),M(this,W));return t.append(r),e.append(n,t),e}},{key:"highDOM",value:function(){var e=new b("div","apartments__high").element,t=new b("div","apartments__high-active").element,n=new b("h3").element;n.textContent="Недвижимость от $700,000";var r=this.searchApartments(M(this,L),M(this,H),M(this,N));return t.append(r),e.append(n,t),e}},{key:"searchApartments",value:function(e,t,n){var r=this,i=new b("div","apartment__card").element,o=new q(n);return this.apartments_db.forEach((function(n){var a=new b("div","apartment__card-content").element;if(n.info.price>=e&&n.info.price<=t){var l=new Image,u=r.searchImg(n.imgID),c=u.name,s=u.format;l.src="./public/img/apartments/".concat(c,".").concat(s);var m=new b("ul").element,p=n.info,d=p.company,f=p.title,v=p.rooms,y=p.sizeAport,h=p.price,g=new b("li","apartment__card-company").element;g.textContent=d;var w=new b("li","apartment__card-title").element;w.textContent=f;var _=new b("li","apartment__card-info").element,S=o.renderSVGroom(),k=o.renderSVGsize(),C=r.pluralizeWord(v,"комнат"),I=new b("span").element,D=new b("span").element,x=C,O="".concat(y," кв.м.");D.append(k,O),I.append(S,x),_.append(I,D);var E=new b("li","apartment__card-price").element;E.textContent=" ".concat(h),m.append(g,w,_,E),a.append(l,m),i.append(a)}})),i}},{key:"searchImg",value:function(e){return this.apartments_img_db.filter((function(t){return t.id===e?{name:t.name,format:t.format}:""}))[0]}},{key:"pluralizeWord",value:function(e,t){var n=e%10,r=e%100;return 1===n&&11!==r?"".concat(e," ").concat(t,"a"):[2,3,4].includes(n)&&![12,13,14].includes(r)?"".concat(e," ").concat(t,"ы"):"".concat(e," ").concat(t)}},{key:"render",value:function(){return this.$apartments.append(this.lowDOM(),this.mediumDOM(),this.highDOM()),this.$apartments}}])&&T(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),R=[{id:1,name:"sobha",logoID:1},{id:2,name:"damac",logoID:2},{id:3,name:"nakheel",logoID:3},{id:4,name:"emaar",logoID:4},{id:5,name:"mniyat",logoID:5},{id:6,name:"meraas",logoID:6}],G=[{id:1,name:"damac",format:"svg"},{id:2,name:"emaar",format:"svg"},{id:3,name:"meraas",format:"svg"},{id:4,name:"mniyat",format:"svg"},{id:5,name:"nakheel",format:"svg"},{id:6,name:"sobha",format:"svg"}];function Z(e){return Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Z(e)}function Q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==Z(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==Z(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===Z(i)?i:String(i)),r)}var i}var U=function(){function e(t){var n,r=t.container;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.partners=r,this.layout=new b("div","l-partners").element,this.db=[].concat(function(e){if(Array.isArray(e))return Q(e)}(n=R)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(n)||function(e,t){if(e){if("string"==typeof e)return Q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Q(e,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[{name:"sobha"}]),this.imgDB=G}var t,n;return t=e,(n=[{key:"titleDOM",value:function(){var e=new b("h3").element,t=new b("p").element;return e.textContent="Мы являемся партнерами ведущих застройщиков",t.textContent="Но и ваш уютный дом, который часто при получении ключей наши клиенты не хотят перепродавать. Квартиры и проекты идеальны",{title:e,suptitle:t}}},{key:"getPartnersDOM",value:function(){var e=new b("div","partners__container").element,t=new b("div","partners__logo").element;return this.db.forEach((function(n){n.id;var r=n.name,i=(n.logoID,new b("div","logo").element),o=new Image;o.src="./public/img/partners/".concat(r,".svg"),o.alt=r,i.append(o),t.append(i),e.append(t)})),e}},{key:"render",value:function(){return document.querySelector(".partners").append(this.titleDOM().title,this.titleDOM().suptitle),this.layout.append(this.getPartnersDOM()),this.partners.append(this.layout),this.partners}}])&&F(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();new r({btn:document.querySelector(".header__menu-btn"),box:document.querySelector(".menu__box")}),new m({body:document.body,openPopapBtn:document.querySelector(".order__btn"),popap:new f}),new l({btn:document.querySelector(".main__modal-close"),modal:document.querySelector(".main__modal")}),document.querySelector(".main__selection__project-btn").addEventListener("click",(function(){document.body.append((new D).render()),document.body.style.overflow="hidden"})),document.querySelector(".apartments").append(new z({container:document.querySelector(".l-apartments")}).render()),document.querySelector(".partners").append(new U({container:document.querySelector(".partners__content")}).render()),document.querySelector(".survey__block").append((new D).renderBlock())})();