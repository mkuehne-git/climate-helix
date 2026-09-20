const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/imprint-gen-Bh4e5WUh.js","assets/rolldown-runtime-W7wSyTde.js","assets/extras-CJXHZSK0.js"])))=>i.map(i=>d[i]);
import{r as e}from"./rolldown-runtime-W7wSyTde.js";/* empty css              */import{_ as t,a as n,b as r,c as i,d as a,f as o,g as s,h as c,i as l,l as u,m as d,n as f,o as p,p as m,r as h,s as g,t as _,u as v,v as ee,y}from"./three-BRqpR9Bn.js";import{n as te}from"./extras-CJXHZSK0.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var b=class e{constructor(t,n,r,i,a=`div`){this.parent=t,this.object=n,this.property=r,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(a),this.domElement.classList.add(`lil-controller`),this.domElement.classList.add(i),this.$name=document.createElement(`div`),this.$name.classList.add(`lil-name`),e.nextNameID=e.nextNameID||0,this.$name.id=`lil-gui-name-${++e.nextNameID}`,this.$widget=document.createElement(`div`),this.$widget.classList.add(`lil-widget`),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener(`keydown`,e=>e.stopPropagation()),this.domElement.addEventListener(`keyup`,e=>e.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(r)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle(`lil-disabled`,e),this.$disable.toggleAttribute(`disabled`,e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?`none`:``,this}hide(){return this.show(!1)}options(e){let t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);let e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}},ne=class extends b{constructor(e,t,n){super(e,t,n,`lil-boolean`,`label`),this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`checkbox`),this.$input.setAttribute(`aria-labelledby`,this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener(`change`,()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}};function x(e){let t,n;return(t=e.match(/(#|0x)?([a-f0-9]{6})/i))?n=t[2]:(t=e.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?n=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=e.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(n=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),n?`#`+n:!1}var re={isPrimitive:!0,match:e=>typeof e==`string`,fromHexString:x,toHexString:x},S={isPrimitive:!0,match:e=>typeof e==`number`,fromHexString:e=>parseInt(e.substring(1),16),toHexString:e=>`#`+e.toString(16).padStart(6,0)},ie=[re,S,{isPrimitive:!1,match:e=>Array.isArray(e)||ArrayBuffer.isView(e),fromHexString(e,t,n=1){let r=S.fromHexString(e);t[0]=(r>>16&255)/255*n,t[1]=(r>>8&255)/255*n,t[2]=(r&255)/255*n},toHexString([e,t,n],r=1){r=255/r;let i=e*r<<16^t*r<<8^n*r<<0;return S.toHexString(i)}},{isPrimitive:!1,match:e=>Object(e)===e,fromHexString(e,t,n=1){let r=S.fromHexString(e);t.r=(r>>16&255)/255*n,t.g=(r>>8&255)/255*n,t.b=(r&255)/255*n},toHexString({r:e,g:t,b:n},r=1){r=255/r;let i=e*r<<16^t*r<<8^n*r<<0;return S.toHexString(i)}}];function ae(e){return ie.find(t=>t.match(e))}var oe=class extends b{constructor(e,t,n,r){super(e,t,n,`lil-color`),this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`color`),this.$input.setAttribute(`tabindex`,-1),this.$input.setAttribute(`aria-labelledby`,this.$name.id),this.$text=document.createElement(`input`),this.$text.setAttribute(`type`,`text`),this.$text.setAttribute(`spellcheck`,`false`),this.$text.setAttribute(`aria-labelledby`,this.$name.id),this.$display=document.createElement(`div`),this.$display.classList.add(`lil-display`),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=ae(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener(`input`,()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener(`blur`,()=>{this._callOnFinishChange()}),this.$text.addEventListener(`input`,()=>{let e=x(this.$text.value);e&&this._setValueFromHexString(e)}),this.$text.addEventListener(`focus`,()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener(`blur`,()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){let t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}},C=class extends b{constructor(e,t,n){super(e,t,n,`lil-function`),this.$button=document.createElement(`button`),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener(`click`,e=>{e.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener(`touchstart`,()=>{},{passive:!0}),this.$disable=this.$button}},se=class extends b{constructor(e,t,n,r,i,a){super(e,t,n,`lil-number`),this._initInput(),this.min(r),this.max(i);let o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){let e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+`%`}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`text`),this.$input.setAttribute(`aria-labelledby`,this.$name.id),window.matchMedia(`(pointer: coarse)`).matches&&(this.$input.setAttribute(`type`,`number`),this.$input.setAttribute(`step`,`any`)),this.$widget.appendChild(this.$input),this.$disable=this.$input;let e=()=>{let e=parseFloat(this.$input.value);isNaN(e)||(this._stepExplicit&&(e=this._snap(e)),this.setValue(this._clamp(e)))},t=e=>{let t=parseFloat(this.$input.value);isNaN(t)||(this._snapClampSetValue(t+e),this.$input.value=this.getValue())},n=e=>{e.key===`Enter`&&this.$input.blur(),e.code===`ArrowUp`&&(e.preventDefault(),t(this._step*this._arrowKeyMultiplier(e))),e.code===`ArrowDown`&&(e.preventDefault(),t(this._step*this._arrowKeyMultiplier(e)*-1))},r=e=>{this._inputFocused&&(e.preventDefault(),t(this._step*this._normalizeMouseWheel(e)))},i=!1,a,o,s,c,l,u=e=>{a=e.clientX,o=s=e.clientY,i=!0,c=this.getValue(),l=0,window.addEventListener(`mousemove`,d),window.addEventListener(`mouseup`,f)},d=e=>{if(i){let t=e.clientX-a,n=e.clientY-o;Math.abs(n)>5?(e.preventDefault(),this.$input.blur(),i=!1,this._setDraggingStyle(!0,`vertical`)):Math.abs(t)>5&&f()}if(!i){let t=e.clientY-s;l-=t*this._step*this._arrowKeyMultiplier(e),c+l>this._max?l=this._max-c:c+l<this._min&&(l=this._min-c),this._snapClampSetValue(c+l)}s=e.clientY},f=()=>{this._setDraggingStyle(!1,`vertical`),this._callOnFinishChange(),window.removeEventListener(`mousemove`,d),window.removeEventListener(`mouseup`,f)};this.$input.addEventListener(`input`,e),this.$input.addEventListener(`keydown`,n),this.$input.addEventListener(`wheel`,r,{passive:!1}),this.$input.addEventListener(`mousedown`,u),this.$input.addEventListener(`focus`,()=>{this._inputFocused=!0}),this.$input.addEventListener(`blur`,()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement(`div`),this.$slider.classList.add(`lil-slider`),this.$fill=document.createElement(`div`),this.$fill.classList.add(`lil-fill`),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add(`lil-has-slider`);let e=(e,t,n,r,i)=>(e-t)/(n-t)*(i-r)+r,t=t=>{let n=this.$slider.getBoundingClientRect(),r=e(t,n.left,n.right,this._min,this._max);this._snapClampSetValue(r)},n=e=>{this._setDraggingStyle(!0),t(e.clientX),window.addEventListener(`mousemove`,r),window.addEventListener(`mouseup`,i)},r=e=>{t(e.clientX)},i=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener(`mousemove`,r),window.removeEventListener(`mouseup`,i)},a=!1,o,s,c=e=>{e.preventDefault(),this._setDraggingStyle(!0),t(e.touches[0].clientX),a=!1},l=e=>{e.touches.length>1||(this._hasScrollBar?(o=e.touches[0].clientX,s=e.touches[0].clientY,a=!0):c(e),window.addEventListener(`touchmove`,u,{passive:!1}),window.addEventListener(`touchend`,d))},u=e=>{if(a){let t=e.touches[0].clientX-o,n=e.touches[0].clientY-s;Math.abs(t)>Math.abs(n)?c(e):(window.removeEventListener(`touchmove`,u),window.removeEventListener(`touchend`,d))}else e.preventDefault(),t(e.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener(`touchmove`,u),window.removeEventListener(`touchend`,d)},f=this._callOnFinishChange.bind(this),p;this.$slider.addEventListener(`mousedown`,n),this.$slider.addEventListener(`touchstart`,l,{passive:!1}),this.$slider.addEventListener(`wheel`,e=>{if(Math.abs(e.deltaX)<Math.abs(e.deltaY)&&this._hasScrollBar)return;e.preventDefault();let t=this._normalizeMouseWheel(e)*this._step;this._snapClampSetValue(this.getValue()+t),this.$input.value=this.getValue(),clearTimeout(p),p=setTimeout(f,400)},{passive:!1})}_setDraggingStyle(e,t=`horizontal`){this.$slider&&this.$slider.classList.toggle(`lil-active`,e),document.body.classList.toggle(`lil-dragging`,e),document.body.classList.toggle(`lil-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){let e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}},ce=class extends b{constructor(e,t,n,r){super(e,t,n,`lil-option`),this.$select=document.createElement(`select`),this.$select.setAttribute(`aria-labelledby`,this.$name.id),this.$display=document.createElement(`div`),this.$display.classList.add(`lil-display`),this.$select.addEventListener(`change`,()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener(`focus`,()=>{this.$display.classList.add(`lil-focus`)}),this.$select.addEventListener(`blur`,()=>{this.$display.classList.remove(`lil-focus`)}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(r)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(e=>{let t=document.createElement(`option`);t.textContent=e,this.$select.appendChild(t)}),this.updateDisplay(),this}updateDisplay(){let e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}},le=class extends b{constructor(e,t,n){super(e,t,n,`lil-string`),this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`text`),this.$input.setAttribute(`spellcheck`,`false`),this.$input.setAttribute(`aria-labelledby`,this.$name.id),this.$input.addEventListener(`input`,()=>{this.setValue(this.$input.value)}),this.$input.addEventListener(`keydown`,e=>{e.code===`Enter`&&this.$input.blur()}),this.$input.addEventListener(`blur`,()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}},ue=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.lil-root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.lil-root > .lil-children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.lil-allow-touch-styles, .lil-gui.lil-allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.lil-force-touch-styles, .lil-gui.lil-force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.lil-auto-place, .lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-controller.lil-disabled {
  opacity: 0.5;
}
.lil-controller.lil-disabled, .lil-controller.lil-disabled * {
  pointer-events: none !important;
}
.lil-controller > .lil-name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-controller .lil-widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-controller.lil-string input {
  color: var(--string-color);
}
.lil-controller.lil-boolean {
  cursor: pointer;
}
.lil-controller.lil-color .lil-display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-controller.lil-color .lil-display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-controller.lil-color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-controller.lil-color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-controller.lil-option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-controller.lil-option .lil-display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-display.lil-focus {
    background: var(--focus-color);
  }
}
.lil-controller.lil-option .lil-display.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-option .lil-display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-controller.lil-option .lil-widget,
.lil-controller.lil-option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-widget:hover .lil-display {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number input {
  color: var(--number-color);
}
.lil-controller.lil-number.lil-has-slider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-controller.lil-number .lil-slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-controller.lil-number .lil-slider:hover {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number .lil-slider.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-number .lil-slider.lil-active .lil-fill {
  opacity: 0.95;
}
.lil-controller.lil-number .lil-fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-dragging * {
  cursor: ew-resize !important;
}
.lil-dragging.lil-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .lil-title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .lil-title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .lil-title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-dragging) .lil-gui .lil-title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .lil-title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.lil-root > .lil-title:focus {
  text-decoration: none !important;
}
.lil-gui.lil-closed > .lil-title:before {
  content: "▸";
}
.lil-gui.lil-closed > .lil-children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.lil-closed:not(.lil-transition) > .lil-children {
  display: none;
}
.lil-gui.lil-transition > .lil-children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .lil-children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.lil-root > .lil-children > .lil-gui > .lil-title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.lil-root > .lil-children > .lil-gui.lil-closed > .lil-title {
  border-bottom-color: transparent;
}
.lil-gui + .lil-controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .lil-title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .lil-children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .lil-controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .lil-controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .lil-controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .lil-controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .lil-controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff2;charset=utf-8;base64,d09GMgABAAAAAALkAAsAAAAABtQAAAKVAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACDMgqBBIEbATYCJAMUCwwABCAFhAoHgQQbHAbIDiUFEYVARAAAYQTVWNmz9MxhEgodq49wYRUFKE8GWNiUBxI2LBRaVnc51U83Gmhs0Q7JXWMiz5eteLwrKwuxHO8VFxUX9UpZBs6pa5ABRwHA+t3UxUnH20EvVknRerzQgX6xC/GH6ZUvTcAjAv122dF28OTqCXrPuyaDER30YBA1xnkVutDDo4oCi71Ca7rrV9xS8dZHbPHefsuwIyCpmT7j+MnjAH5X3984UZoFFuJ0yiZ4XEJFxjagEBeqs+e1iyK8Xf/nOuwF+vVK0ur765+vf7txotUi0m3N0m/84RGSrBCNrh8Ee5GjODjF4gnWP+dJrH/Lk9k4oT6d+gr6g/wssA2j64JJGP6cmx554vUZnpZfn6ZfX2bMwPPrlANsB86/DiHjhl0OP+c87+gaJo/gY084s3HoYL/ZkWHTRfBXvvoHnnkHvngKun4KBE/ede7tvq3/vQOxDXB1/fdNz6XbPdcr0Vhpojj9dG+owuSKFsslCi1tgEjirjXdwMiov2EioadxmqTHUCIwo8NgQaeIasAi0fTYSPTbSmwbMOFduyh9wvBrESGY0MtgRjtgQR8Q1bRPohn2UoCRZf9wyYANMXFeJTysqAe0I4mrherOekFdKMrYvJjLvOIUM9SuwYB5DVZUwwVjJJOaUnZCmcEkIZZrKqNvRGRMvmFZsmhP4VMKCSXBhSqUBxgMS7h0cZvEd71AWkEhGWaeMFcNnpqyJkyXgYL7PQ1MoSq0wDAkRtJIijkZSmqYTiSImfLiSWXIZwhRh3Rug2X0kk1Dgj+Iu43u5p98ghopcpSo0Uyc8SnjlYX59WUeaMoDqmVD2TOWD9a4pCRAzf2ECgwGcrHjPOWY9bNxq/OL3I/QjwEAAAA=") format("woff2");
}`;function de(e){let t=document.createElement(`style`);t.innerHTML=e;let n=document.querySelector(`head link[rel=stylesheet], head style`);n?document.head.insertBefore(t,n):document.head.appendChild(t)}var fe=!1,pe=class e{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:r,title:i=`Controls`,closeFolders:a=!1,injectStyles:o=!0,touchStyles:s=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement(`div`),this.domElement.classList.add(`lil-gui`),this.$title=document.createElement(`button`),this.$title.classList.add(`lil-title`),this.$title.setAttribute(`aria-expanded`,!0),this.$title.addEventListener(`click`,()=>this.openAnimated(this._closed)),this.$title.addEventListener(`touchstart`,()=>{},{passive:!0}),this.$children=document.createElement(`div`),this.$children.classList.add(`lil-children`),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(i),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add(`lil-root`),s&&this.domElement.classList.add(`lil-allow-touch-styles`),!fe&&o&&(de(ue),fe=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add(`lil-auto-place`,`autoPlace`),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty(`--width`,r+`px`),this._closeFolders=a}add(e,t,n,r,i){if(Object(n)===n)return new ce(this,e,t,n);let a=e[t];switch(typeof a){case`number`:return new se(this,e,t,n,r,i);case`boolean`:return new ne(this,e,t);case`string`:return new le(this,e,t);case`function`:return new C(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,a)}addColor(e,t,n=1){return new oe(this,e,t,n)}addFolder(t){let n=new e({parent:this,title:t});return this.root._closeFolders&&n.close(),n}load(e,t=!0){return e.controllers&&this.controllers.forEach(t=>{t instanceof C||t._name in e.controllers&&t.load(e.controllers[t._name])}),t&&e.folders&&this.folders.forEach(t=>{t._title in e.folders&&t.load(e.folders[t._title])}),this}save(e=!0){let t={controllers:{},folders:{}};return this.controllers.forEach(e=>{if(!(e instanceof C)){if(e._name in t.controllers)throw Error(`Cannot save GUI with duplicate property "${e._name}"`);t.controllers[e._name]=e.save()}}),e&&this.folders.forEach(e=>{if(e._title in t.folders)throw Error(`Cannot save GUI with duplicate folder "${e._title}"`);t.folders[e._title]=e.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute(`aria-expanded`,!this._closed),this.domElement.classList.toggle(`lil-closed`,this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?`none`:``,this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute(`aria-expanded`,!this._closed),requestAnimationFrame(()=>{let t=this.$children.clientHeight;this.$children.style.height=t+`px`,this.domElement.classList.add(`lil-transition`);let n=e=>{e.target===this.$children&&(this.$children.style.height=``,this.domElement.classList.remove(`lil-transition`),this.$children.removeEventListener(`transitionend`,n))};this.$children.addEventListener(`transitionend`,n);let r=e?this.$children.scrollHeight:0;this.domElement.classList.toggle(`lil-closed`,!e),requestAnimationFrame(()=>{this.$children.style.height=r+`px`})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(e=>e.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}},w=e(te()),T=function(e){return e.GLOBAL=`Global`,e.NORTHERN_HEMISPHERE=`Northern HS`,e.SOUTHERN_HEMISPHERE=`Southern HS`,e}({}),E=function(e){return e.SETTINGS_CHANGED=`settings-changed`,e.CHANGE_THEME=`change-theme`,e.THEME_CHANGED=`theme-changed`,e.SHOW_IMPRINT=`show-imprint`,e.HIDE_IMPRINT=`hide-imprint`,e.CREATE_HELIX=`create-helix`,e}({});(function(e){function t(e){let t=new Event(e.toString(),{bubbles:!0});document.body.dispatchEvent(t)}e.dispatchEvent=t})(E||={});var me=class{constructor(e,t){let n=!1;new MutationObserver(e=>{n&&e.forEach((e,n)=>t(e,n))}).observe(e,{attributes:!0,attributeFilter:[`class`]}),n=!0}},he=`modulepreload`,ge=function(e){return`/climate-helix/`+e},_e={},ve=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=ge(t,n),t=s(t),t in _e)return;_e[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:he,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},ye=async()=>await ve(()=>import(`./imprint-gen-Bh4e5WUh.js`),__vite__mapDeps([0,1,2])),be=`<hr><p style="opacity: 1.0;">Dieses Impressum wurde erstellt durch <a href="https://www.impressum-generator.de" rel="nofollow">impressum-generator.de</a>.</p>`,xe=`<hr><div class="center" width=100%>
<button id="hide-imprint" onclick="document.body.dispatchEvent(new Event('${E.HIDE_IMPRINT.toString()}', { bubbles: true }))">Close</button></div>`,Se=class{decryptedAES;div;loading;constructor(){window.addEventListener(`resize`,()=>this.redraw()),new me(document.body,()=>this.redraw()),document.body.addEventListener(E.SHOW_IMPRINT.toString(),e=>this.show()),document.body.addEventListener(E.HIDE_IMPRINT.toString(),e=>this.hide()),document.body.addEventListener(`keydown`,e=>{(e.key===`Esc`||e.key===`Escape`)&&this.hide()})}redraw(){this.div!==void 0&&(this.hide(),this.show())}async isAvailable(){return this.decryptedAES!==void 0||(this.loading===void 0&&(this.loading=ye().then(e=>(this.decryptedAES=e.decryptedAES,this.decryptedAES()!==void 0))),this.loading)}show(){if(this.decryptedAES===void 0){this.isAvailable().then(e=>{e&&this.show()});return}if(this.div===void 0){this.div=document.createElement(`div`);let e=this.div;e.classList.add(`imprint`);let t=this.decryptedAES();e.innerHTML=t,document.body.appendChild(e);let n=window.getComputedStyle(document.body),r=e.scrollWidth,i=e.scrollHeight,a=n.getPropertyValue(`background-color`);(0,w.default)(e,{backgroundColor:a,windowWidth:r,windowHeight:i}).then(t=>{t.classList.add(`padding`),e.innerHTML=``,e.appendChild(t);let n=document.createElement(`p`);n.classList.add(`padding`),n.innerHTML=be+xe,e.appendChild(n)}).catch(()=>{e.innerHTML=t;let n=document.createElement(`p`);n.classList.add(`padding`),n.innerHTML=be+xe,e.appendChild(n)})}}hide(){this.div!==void 0&&(document.body.removeChild(this.div),this.div=void 0)}},Ce=`toggle`,we=`div`,D=`clicked`,Te=`-div`,O=`-icon`,Ee=`show`,k=class{#e;#t=[];#n;constructor(e){this.#n=e.event,this.#t=e.icons;let t=document.createElement(we);t.classList.add(`${Ce}${Te}`,e.classToken);for(let n of e.icons){let r=this.createSVGElement(n,e.classToken);t.innerHTML+=r}(e.container||document.body).appendChild(t),t.addEventListener(`click`,()=>t.classList.add(D)),t.addEventListener(`animationend`,()=>{if(t.classList.contains(D)){t.classList.remove(D);let n=new Event(e.event,{bubbles:!0});t.dispatchEvent(n)}}),this.#e=t}show(e){this.icon(e)?.classList.add(Ee)}toggle(){for(let e=0;e<this.#t.length;e++)this.icon(e)?.classList.toggle(Ee)}icon(e){return this.#e.querySelector(`#${this.#t[e].id}${O}`)}createSVGElement(e,t){let n=document.createElement(`template`);n.innerHTML=e.svg;let r=n.content.firstElementChild;return r.id=`${e.id}${O}`,r.classList.add(`${Ce}${O}`,t),r.outerHTML}addOnClickListener(e){this.#e.addEventListener(this.#n,e)}},De={id:`open`,svg:`<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512">
    <path d="M12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z"/>
    <path d="M21.294,13.9l-.444-.256a9.1,9.1,0,0,0,0-3.29l.444-.256a3,3,0,1,0-3-5.2l-.445.257A8.977,8.977,0,0,0,15,3.513V3A3,3,0,0,0,9,3v.513A8.977,8.977,0,0,0,6.152,5.159L5.705,4.9a3,3,0,0,0-3,5.2l.444.256a9.1,9.1,0,0,0,0,3.29l-.444.256a3,3,0,1,0,3,5.2l.445-.257A8.977,8.977,0,0,0,9,20.487V21a3,3,0,0,0,6,0v-.513a8.977,8.977,0,0,0,2.848-1.646l.447.258a3,3,0,0,0,3-5.2Zm-2.548-3.776a7.048,7.048,0,0,1,0,3.75,1,1,0,0,0,.464,1.133l1.084.626a1,1,0,0,1-1,1.733l-1.086-.628a1,1,0,0,0-1.215.165,6.984,6.984,0,0,1-3.243,1.875,1,1,0,0,0-.751.969V21a1,1,0,0,1-2,0V19.748a1,1,0,0,0-.751-.969A6.984,6.984,0,0,1,7.006,16.9a1,1,0,0,0-1.215-.165l-1.084.627a1,1,0,1,1-1-1.732l1.084-.626a1,1,0,0,0,.464-1.133,7.048,7.048,0,0,1,0-3.75A1,1,0,0,0,4.79,8.992L3.706,8.366a1,1,0,0,1,1-1.733l1.086.628A1,1,0,0,0,7.006,7.1a6.984,6.984,0,0,1,3.243-1.875A1,1,0,0,0,11,4.252V3a1,1,0,0,1,2,0V4.252a1,1,0,0,0,.751.969A6.984,6.984,0,0,1,16.994,7.1a1,1,0,0,0,1.215.165l1.084-.627a1,1,0,1,1,1,1.732l-1.084.626A1,1,0,0,0,18.746,10.125Z"/>
</svg>
`},Oe={id:`close`,svg:`<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512">
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
</svg>`},ke=class{#e;#t;#n;constructor(e){this.#e=!0,this.#t=new k({container:document.querySelector(`.container-div`),icons:[De,Oe],classToken:`settings`,event:E.SETTINGS_CHANGED}),this.#n=e,this.#n.hide(),this.#t.show(+!this.#e),this.#t.addOnClickListener(()=>this.guiShowHide())}guiShowHide(){this.#e?(this.toggle(),this.#n.show(),this.#n.open()):(this.#n.hide(),this.#n.close(),this.toggle())}toggle(){this.#e=!this.#e,this.#t.toggle()}},Ae=`false`,je=`false`,Me=Ae===`true`,Ne=je===`true`;function Pe(e={}){let{immediate:t=!1,onNeedReload:n,onNeedRefresh:r,onOfflineReady:i,onRegistered:a,onRegisteredSW:o,onRegisterError:s}=e,c,l,u,d=async(e=!0)=>{await l,Me||u?.()};async function f(){if(`serviceWorker`in navigator){if(c=await ve(async()=>{let{Workbox:e}=await import(`./workbox-window.prod.es5-Bd17z0YL.js`);return{Workbox:e}},[]).then(({Workbox:e})=>new e(`/climate-helix/sw.js`,{scope:`/climate-helix/`,type:`classic`})).catch(e=>{s?.(e)}),!c)return;if(u=()=>{c?.messageSkipWaiting()},!Ne){if(Me)c.addEventListener(`activated`,e=>{(e.isUpdate||e.isExternal)&&(n?n():window.location.reload())}),c.addEventListener(`installed`,e=>{e.isUpdate||i?.()});else{let e=!1,t=()=>{e=!0,c?.addEventListener(`controlling`,e=>{e.isUpdate&&(n?n():window.location.reload())}),r?.()};c.addEventListener(`installed`,n=>{n.isUpdate===void 0?n.isExternal===void 0?!e&&i?.():n.isExternal?t():!e&&i?.():n.isUpdate||i?.()}),c.addEventListener(`waiting`,t)}}c.register({immediate:t}).then(e=>{o?o(`/climate-helix/sw.js`,e):a?.(e)}).catch(e=>{s?.(e)})}}return l=f(),d}var A;function j(e,t=`info`){document.getElementById(`pwa-status`)?.remove();let n=document.createElement(`div`);n.id=`pwa-status`,n.className=`pwa-status ${t}`,n.textContent=e,document.body.appendChild(n),window.clearTimeout(n._dismissTimer),n._dismissTimer=window.setTimeout(()=>{n.remove()},3500)}function M(){if(document.getElementById(`pwa-update-dialog`))return;let e=document.createElement(`div`);e.id=`pwa-update-dialog`,e.className=`pwa-update-dialog hidden`;let t=document.createElement(`div`);t.className=`pwa-update-content`;let n=document.createElement(`h2`);n.textContent=`Update available`;let r=document.createElement(`p`);r.textContent=`A new version of Climate Helix is ready. Reload to apply the update?`;let i=document.createElement(`div`);i.className=`pwa-update-actions`;let a=document.createElement(`button`);a.type=`button`,a.textContent=`Reload`,a.className=`pwa-update-button primary`,a.addEventListener(`click`,async()=>{A&&await A()});let o=document.createElement(`button`);o.type=`button`,o.textContent=`Later`,o.className=`pwa-update-button secondary`,o.addEventListener(`click`,()=>{e.classList.add(`hidden`)}),i.append(a,o),t.append(n,r,i),e.appendChild(t),document.body.appendChild(e)}function N(){M(),document.querySelector(`#pwa-update-dialog`)?.classList.remove(`hidden`)}function Fe(){M(),A=Pe({immediate:!0,onNeedRefresh(){N()},onOfflineReady(){console.info(`Climate Helix is ready for offline use.`)}})}async function Ie(){if(!(`serviceWorker`in navigator))return j(`Service workers are not supported in this browser.`,`warning`),console.info(`Service workers are not supported in this browser.`),!1;let e=await navigator.serviceWorker.getRegistrations();if(e.length===0)return j(`No service worker is registered yet.`,`warning`),console.info(`No service worker is currently registered.`),!1;let t=!1;return await Promise.all(e.map(async e=>{await e.update(),e.waiting&&(t=!0)})),t?(j(`Update ready. Reload to apply it.`,`success`),N(),!0):(j(`No update available.`,`info`),!1)}var Le={"2026-09-16":{endDate:`August 2026`,files:{[T.GLOBAL]:`GLB.Ts+dSST.csv`,[T.NORTHERN_HEMISPHERE]:`NH.Ts+dSST.csv`,[T.SOUTHERN_HEMISPHERE]:`SH.Ts+dSST.csv`}},"2024-10-22":{endDate:`October 2024`,files:{[T.GLOBAL]:`GLB.Ts+dSST.csv`,[T.NORTHERN_HEMISPHERE]:`NH.Ts+dSST.csv`,[T.SOUTHERN_HEMISPHERE]:`SH.Ts+dSST.csv`}},"2023-09-03":{endDate:`March 2023`,files:{[T.GLOBAL]:`GLB.Ts+dSST.csv`,[T.NORTHERN_HEMISPHERE]:`NH.Ts+dSST.csv`,[T.SOUTHERN_HEMISPHERE]:`SH.Ts+dSST.csv`}}};async function Re(){let e=await Promise.all(Object.entries(Le).map(async([e,t])=>{let n=await Promise.all(Object.entries(t.files).map(async([t,n])=>{let r=`/climate-helix/assets/csv/${e}/${n}`,i=await fetch(r);if(!i.ok)throw Error(`Unable to load dataset: ${r}`);return[t,await i.text()]})),r=Object.fromEntries(n),i=Object.values(r).flatMap(e=>e.split(/\r?\n/).slice(2).map(e=>e.split(`,`)[0].trim()).filter(e=>/^\d{4}$/.test(e)).map(Number));return[e,{endDate:t.endDate,csv:r,firstYear:Math.min(...i),lastYear:Math.max(...i)}]}));return Object.fromEntries(e)}var P={showcaseCSV:void 0,radio:T.GLOBAL,date:`2026-09-16`,view:{axes:{yearVisible:!1,temperatureVisible:!1,monthVisible:!1,yearTickCount:5,temperatureRingCount:5},yearRangeVisible:!0,geometry:{meshVisible:!1,facesVisible:!0,radialSegments:8,radius:1,radiusFactor:.9,tubularSegments:30},colors:{cold:F(`cold`),zero:F(`zero`),warm:F(`warm`)}},capture:{},imprint:()=>E.dispatchEvent(E.SHOW_IMPRINT)};function F(e){return{color:I(e),modified:!1}}function I(e){return ze(`--${e}-color`)}function ze(e){let t=window.getComputedStyle(document.body).getPropertyValue(e);return new n(t)}var L=class e{#e;#t={};#n;#r;#i;#a;#o;#s;#c;#l;#u;static async create(){return new e(await Re())}static styledColor(e){return ze(e)}static addRadioButtonsFolder(t,n,r,i,a=(e,t,n)=>{}){let o=t.addFolder(n);return e.addRadioButtons(o,r,i,a),o}static addRadioButtons(e,t,n,r=(e,t,n)=>{}){let i={};Object.entries(n).forEach(e=>{let[n,r]=e,a=`option_${n}`;i[a]=t===n}),Object.keys(n).forEach(t=>{let n=`option_${t}`;e.add(i,n).name(t).listen().onChange(()=>{for(let e in i)i[e]=n===e;r(i,n,t)})})}constructor(e){this.#e=e,this.#l=e[P.date].firstYear,this.#u=e[P.date].lastYear,this.#s=this.#l,this.#c=this.#u,this.#o=new pe({container:document.querySelector(`.container-div`),autoPlace:!1}),this.#o.domElement.id=`gui`,this.createDateFolder(),this.createShowcaseFolder(),this.createViewFolder(),this.createCaptureFolder(),this.createImprint(),this.createShowHideListener(),this.createSettingsIcon()}createSettingsIcon(){new ke(this.#o)}createShowHideListener(){window.addEventListener(`keydown`,e=>{(e.key===`h`||e.key===`H`)&&(this.#a?this.#o.show():this.#o.hide(),this.#a=!this.#a)})}createShowcaseFolder(){this.selectDate(P.date),this.#i=e.addRadioButtonsFolder(this.#o,`Region: ${P.radio}`,P.radio,this.#t,(e,t,n)=>{P.radio=n,P.showcaseCSV=this.#t[n],this.resetYearRange(),E.dispatchEvent(E.CREATE_HELIX),this.#i.title(`Region: ${n}`),this.#i.close()}),P.showcaseCSV=this.#t[P.radio],this.#i.close()}createDateFolder(){this.#r=e.addRadioButtonsFolder(this.#o,`Date: ${P.date}`,P.date,this.#e,(e,t,n)=>{this.setDate(n)}),this.#r.close()}setDate(e){P.date=e,this.selectDate(e),this.#r.title(`Date: ${e}`),this.#r.close(),E.dispatchEvent(E.CREATE_HELIX)}selectDate(e){Object.assign(this.#t,this.#e[e].csv),P.showcaseCSV=this.#t[P.radio],this.resetYearRange()}resetYearRange(){let e=this.#e[P.date],t=this.#s,n=this.#c;this.#l=e.firstYear,this.#u=e.lastYear,this.#s=Math.max(this.#l,Math.min(t,this.#u)),this.#c=Math.max(this.#s,Math.min(n,this.#u))}get dateOptions(){return Object.keys(this.#e).sort((e,t)=>new Date(e).getTime()-new Date(t).getTime())}get date(){return P.date}get showYearAxis(){return P.view.axes.yearVisible}get showTemperatureAxis(){return P.view.axes.temperatureVisible}get showMonthAxis(){return P.view.axes.monthVisible}get yearTickCount(){return Math.max(2,Math.min(10,Math.floor(P.view.axes.yearTickCount)))}get temperatureRingCount(){return Math.max(2,Math.min(10,Math.floor(P.view.axes.temperatureRingCount)))}get firstYear(){return this.#s}get lastYear(){return this.#c}get datasetFirstYear(){return this.#l}get datasetLastYear(){return this.#u}get yearRangeVisible(){return P.view.yearRangeVisible}setStartYear(e){this.#s=Math.max(this.#l,Math.min(e,this.#c))}setEndYear(e){this.#c=Math.min(this.#u,Math.max(e,this.#s))}get dataEndDate(){return this.#e[P.date].endDate}createViewFolder(){let e=this.#o.addFolder(`View`);e.add(P.view,`yearRangeVisible`).name(`Year range`).onChange(()=>E.dispatchEvent(E.CREATE_HELIX)),this.createViewLegendFolder(e),this.createViewGeometryFolder(e),this.createViewColorsFolder(e),e.close()}createViewLegendFolder(e){let t=e.addFolder(`Legend`);t.add(P.view.axes,`yearVisible`).name(`Year axis`).onChange(()=>E.dispatchEvent(E.CREATE_HELIX)),t.add(P.view.axes,`temperatureVisible`).name(`Temperature axis`).onChange(()=>E.dispatchEvent(E.CREATE_HELIX)),t.add(P.view.axes,`monthVisible`).name(`Month axis`).onChange(()=>E.dispatchEvent(E.CREATE_HELIX)),t.add(P.view.axes,`yearTickCount`).min(2).max(10).step(1).name(`Year ticks`).onChange(()=>E.dispatchEvent(E.CREATE_HELIX)),t.add(P.view.axes,`temperatureRingCount`).min(2).max(10).step(1).name(`Temperature rings`).onChange(()=>E.dispatchEvent(E.CREATE_HELIX)),t.close()}createViewGeometryFolder(e){let t=e.addFolder(`Geometry`),n=P.view.geometry;t.add(n,`meshVisible`).name(`Wireframe`).onChange(()=>E.dispatchEvent(E.CREATE_HELIX)),t.add(n,`facesVisible`).name(`Faces`).onChange(()=>E.dispatchEvent(E.CREATE_HELIX)),t.add(n,`tubularSegments`).min(1).max(31).step(1).name(`Monthly Segments`).onChange(()=>E.dispatchEvent(E.CREATE_HELIX)),t.add(n,`radialSegments`).min(3).max(32).step(1).name(`Radius Segments`).onChange(()=>E.dispatchEvent(E.CREATE_HELIX)),t.add(n,`radiusFactor`).min(.1).max(2).name(`Radius Factor`).onChange(()=>E.dispatchEvent(E.CREATE_HELIX)),t.close()}createViewColorsFolder(e){let t=e.addFolder(`Colors`),n=P.view.colors;t.addColor(n.cold,`color`).name(`-1.0°C`).listen().onChange(()=>this.dispatchColorEvent(`cold`)),t.addColor(n.zero,`color`).name(`0°C`).listen().onChange(()=>this.dispatchColorEvent(`zero`)),t.addColor(n.warm,`color`).name(`+1.5°C`).listen().onChange(()=>this.dispatchColorEvent(`warm`)),t.close()}initializeColors(){P.view.colors.cold.modified||(P.view.colors.cold.color=I(`cold`)),P.view.colors.zero.modified||(P.view.colors.zero.color=I(`zero`)),P.view.colors.warm.modified||(P.view.colors.warm.color=I(`warm`))}dispatchColorEvent(e){P.view.colors[e].modified=!P.view.colors[e].color.equals(I(e)),E.dispatchEvent(E.CREATE_HELIX)}createCaptureFolder(){let e=this.#o.addFolder(`Screen capture`);e.close(),this.#n=e}createImprint(){new Se,this.#o.add(P,`imprint`).name(`Imprint`),this.#o.add({checkForUpdates:async()=>{j(`Checking for updates...`,`info`),await Ie()||console.info(`No app update check was possible right now.`)}},`checkForUpdates`).name(`Check for updates`)}get showcaseCSV(){return P.showcaseCSV}get radialSegments(){return Math.floor(P.view.geometry.radialSegments)}get radiusFactor(){return P.view.geometry.radiusFactor}get tubularSegments(){return Math.floor(P.view.geometry.tubularSegments)}get showFaces(){return P.view.geometry.facesVisible}get showWireframe(){return P.view.geometry.meshVisible}get cold(){return P.view.colors.cold.color}get zero(){return P.view.colors.zero.color}get warm(){return P.view.colors.warm.color}captureSettings(){return{folder:this.#n,property:P.capture}}},Be={id:`light`,svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512">
    <path d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5 S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1 s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0 c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95 c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41 L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41 s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06 c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"/>
</svg>`},Ve={id:`dark`,svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512">
    <path d="M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"/>
</svg>`},R=`dark`,z=`light`,He=class{#e;#t;constructor(e){this.#t=new k({container:e?.container||document.body,icons:[Be,Ve],classToken:`themes`,event:E.CHANGE_THEME.toString()}),this.initTheme(),this.registerOnThemeChange(document.body)}initTheme(){this.#e=this.preferredTheme(),document.body.classList.add(this.#e?R:z),this.#t.show(+!this.#e),E.dispatchEvent(E.THEME_CHANGED)}preferredTheme(){return window.matchMedia(`(prefers-color-scheme: dark)`).matches}registerOnThemeChange(e){e.addEventListener(E.CHANGE_THEME.toString(),()=>{this.onThemeChange(e)})}onThemeChange(e){let t=this.#e?R:z,n=this.#e?z:R;e.classList.replace(t,n)||e.classList.add(n),this.#e=!this.#e,this.#t.toggle(),E.dispatchEvent(E.THEME_CHANGED)}},Ue={id:`info`,svg:`<?xml version="1.0" ?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="512" height="512">
    <path d="M22 34h4v-12h-4v12zm2-30c-11.05 0-20 8.95-20 20s8.95 20 20 20 20-8.95 20-20-8.95-20-20-20zm0 36c-8.82 0-16-7.18-16-16s7.18-16 16-16 16 7.18 16 16-7.18 16-16 16zm-2-22h4v-4h-4v4z"/>
</svg>`},We={id:`close`,svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512">
    <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"/>
</svg>`},Ge=class{#e;constructor(e){this.#e=new k({container:e,icons:[Ue,We],classToken:`info-button`,event:`info-clicked`}),this.#e.show(0),this.#e.addOnClickListener(()=>this.infoDivShowHide())}infoDivShowHide(){let e=document.querySelector(`#info-div`),t=document.querySelector(`#dataset-controls`),n=e?.classList.toggle(`show`);return document.querySelector(`canvas`)?.classList.toggle(`transparent`),t&&t.classList.toggle(`hidden`,e?.classList.contains(`show`)??!1),this.#e.toggle(),n}},Ke=class{_title;_header;_rows;constructor(e,t=0,n=!0){if(e){let{title:t,header:n,rows:r}=this.extract(e);this._title=t,this._header=n,this._rows=r}}extract(e){let t=e.toString().split(/\r?\n/),n=t[0],r=t[1].split(`,`),i=t[t.length-1]===``?t.length-1:t.length;return{title:n,header:r,rows:t.slice(1,i)}}get columnCount(){return this.header?this.header.length:this.rows[0].length}get rowCount(){return this.rows.length}getNumber(e,t){let n=this.rows[e];return parseFloat(n.split(`,`)[t])}get title(){return this._title||``}get header(){return this._header||[]}get rows(){return this._rows||[]}},qe=class e extends h{constructor(e,t=30,n=1,r=8,i=!1){super(),this.type=`HelixGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:i};let a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new y,s=new y,c=new ee,l=new y,u=[],d=[],f=[],p=[],m=[];h(),this.setIndex(p),this.setAttribute(`position`,new g(u,3)),this.setAttribute(`normal`,new g(d,3)),this.setAttribute(`uv`,new g(f,2)),this.setAttribute(`vColors`,new g(m,3));function h(){for(let e=0;e<t;e++)_(e);_(i===!1?t:0),te(),v()}function _(i){let c=e.getUtoTmapping(i/t);l=e.getPoint(c,l);let f=e.getColor(c),p=a.normals[i],h=a.binormals[i];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,i=Math.sin(t),a=-Math.cos(t);s.x=a*p.x+i*h.x,s.y=a*p.y+i*h.y,s.z=a*p.z+i*h.z,s.normalize(),d.push(s.x,s.y,s.z),o.x=l.x+n*s.x,o.y=l.y+n*s.y,o.z=l.z+n*s.z,u.push(o.x,o.y,o.z),m.push(f.r,f.g,f.b)}}function v(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,o=(r+1)*(e-1)+t;p.push(n,i,o),p.push(i,a,o)}}function te(){for(let e=0;e<=t;e++)for(let n=0;n<=r;n++)c.x=e/t,c.y=n/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(t){return new e(new Curves[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},B=12,V=[],Je=[],Ye=class{settings;csv;curve;#e;years;helixConfiguration;#t;#n;#r;#i;#a;constructor(e,t=-1,n=1.5,r=.4,i=1,a=2.5){this.settings=e,this.csv=new Ke(e.showcaseCSV),this.helixConfiguration={minT:t,maxT:n,minR:r,maxR:i,height:a},this.#n=e.cold,this.#r=e.zero,this.#i=e.warm,this.curve=[]}createMesh(e={wireframe:!1,vertexColors:!0}){this.createCurve();let t=this.createGeometry();e.wireframe&&(e.color=L.styledColor(`--wireframe-color`));let[n,r,i]=this.#e.toArray();t.translate(-n,-r,-i);let a=new m(e);return this.#t=new o(t,a),this.#t}createCurve(){if(this.curve.length===0){this.years=this.settings.lastYear-this.settings.firstYear+1;for(let e=this.settings.firstYear;e<=this.settings.lastYear;e++)for(let t=0;t<12;t++){let n=e-this.settings.datasetFirstYear+1,r=this.helixPoint(n,t);r&&this.curve.push(r)}this.#e=this.centerOfGravity()}}centerOfGravity(){if(!this.curve||this.curve.length===0)return new y(0,0,0);let e=0,t=0,n=0,r=this.curve.length;return this.curve.forEach((i,a)=>{e+=i.radius*i.cosX,t+=i.radius*i.sinX,n+=a/r*this.height}),new y(e/r,t/r,n/r)}createGeometry(){let e=this.settings.datasetLastYear-this.settings.datasetFirstYear+1,t=this.settings.radiusFactor*this.helixConfiguration.height/e,n=new qe(new Xe(this),this.settings.tubularSegments*(this.curve.length-1),t,this.settings.radialSegments,!1),r=n.getAttribute(`vColors`),i=new f(new Float32Array(r.array),3);return n.setAttribute(`color`,i),n}helixPoint(e,t){let r=this.csv.getNumber(e,t+1);if(r){let e=Ze(this.helixConfiguration.minT,this.helixConfiguration.maxT,this.helixConfiguration.minR,this.helixConfiguration.maxR,r),i=new n;return r<0?i.lerpColors(this.#r,this.#n,Math.abs(r)):i.lerpColors(this.#r,this.#i,r),{sinX:V[t],cosX:Je[t],radius:e,temperature:r,color:i}}}get height(){return this.helixConfiguration.height}get length(){return this.curve.length/B}curveIndex(e){return Math.floor((this.curve.length-1)*e)}info(e){return this.curve[this.curveIndex(e)]}createTitleDiv(e){let t=`heading-div`,n=e.querySelector(`.${t}`);return n&&e.removeChild(n),this.#a||(this.#a=document.createElement(`DIV`),this.#a.setAttribute(`class`,t),e.appendChild(this.#a)),this.#a.innerText=`${this.csv.title} (${this.settings.dataEndDate})`,this.#a}},Xe=class extends p{helix;constructor(e){super(),this.helix=e}getPoint(e,t=new y){let n=2*Math.PI*this.helix.length*e,r=this.helix.curveIndex(e),i=this.helix.curve[r],a=this.helix.curve[r+1]||i,o=Ze(r/(this.helix.curve.length-1),(r+1)/(this.helix.curve.length-1),i.radius,a.radius,e),s=o*Math.cos(n),c=o*Math.sin(n),l=this.helix.height*e;return t.set(s,c,l)}getColor(e){let t=this.helix.curveIndex(e),r=this.helix.curve[t],i=this.helix.curve[t+1]||r,a=t/(this.helix.curve.length-1),o=(t+1)/(this.helix.curve.length-1);return new n().lerpColors(r.color,i.color,(e-a)/(o-a))}};for(let e=0;e<B;e++){let t=2*Math.PI*e/B;V.push(Math.sin(t)),Je.push(Math.cos(t))}function Ze(e,t,n,r,i){return t-e===0?(n+r)/2:(i-e)*(r-n)/(t-e)+n}var H=[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`],Qe=new Set([0,3,6,9]),$e=class extends i{lineMaterial;labelMaterial=[];constructor(e,t,n){super();let r=L.styledColor(`--text-color`),i=new v({color:r});this.lineMaterial=i,e.showYearAxis&&this.addYearAxis(e,t,r,i);let a=-t/2-.28;e.showTemperatureAxis&&this.addTemperatureLegend(e,t,n,r,a),e.showMonthAxis&&this.addMonthAxis(n,r,a)}dispose(){this.traverse(e=>{if(e instanceof u||e instanceof a){e.geometry.dispose();let t=e.material;Array.isArray(t)?t.forEach(e=>e.dispose()):t.dispose()}e instanceof s&&(e.material.map?.dispose(),e.material.dispose())}),this.lineMaterial.dispose(),this.labelMaterial.forEach(e=>e.dispose())}addYearAxis(e,t,n,r){let i=et(e)+.3,a=-t/2,o=t/2;this.addLine([[i,0,a],[i,0,o]],r);let s=e.firstYear,c=e.lastYear,l=e.yearTickCount,u=c-s;for(let e=0;e<l;e++){let o=e/(l-1),c=Math.round(s+o*u),d=a+o*t;this.addLine([[i-.08,0,d],[i+.08,0,d]],r),this.addLabel(String(c),new y(i+.15,0,d),n,.5,.14)}}addTemperatureLegend(e,t,n,r,i){let o=e.temperatureRingCount,s=Array.from({length:o},(e,t)=>t*Math.PI*2/o);for(let e=0;e<o;e++){let t=e/(o-1),c=-1+t*2.5,l=.4+t*(n-.4),u=[];for(let e=0;e<48;e++){let t=e/48*Math.PI*2;u.push(new y(Math.cos(t)*l,Math.sin(t)*l,i))}let d=new a(new h().setFromPoints(u),new v({color:r}));this.add(d);let f=s[e];this.addLabel(`${c>=0?`+`:``}${c.toFixed(2)}°C`,new y(Math.cos(f)*(l+.08),Math.sin(f)*(l+.08),i),r,.5,.14)}}addMonthAxis(e,t,n){let r=e+.08;for(let i=0;i<H.length;i++){let a=i/H.length*Math.PI*2,o=e;this.addLine([[Math.cos(a)*o,Math.sin(a)*o,n],[Math.cos(a)*r,Math.sin(a)*r,n]],new v({color:t})),Qe.has(i)&&this.addLabel(H[i],new y(Math.cos(a)*(r+.14),Math.sin(a)*(r+.14),n),t,.4,.12)}}addLine(e,t){this.add(new u(new h().setFromPoints(e.map(e=>new y(...e))),t))}addLabel(e,n,r,i,a){let o=document.createElement(`canvas`);o.width=256,o.height=64;let c=o.getContext(`2d`);if(!c)return;c.font=`32px DejaVu Sans`,c.fillStyle=`#${r.getHexString()}`,c.textAlign=`center`,c.textBaseline=`middle`,c.fillText(e,o.width/2,o.height/2);let u=new t({map:new l(o),transparent:!0,depthTest:!1});this.labelMaterial.push(u);let d=new s(u);d.position.copy(n),d.scale.set(i,a,1),this.add(d)}};function et(e){return Math.max(1,e.radiusFactor)}HTMLCanvasElement.prototype.getContext=(function(e){return function(t,n){return n||={},n.preserveDrawingBuffer=!0,e.call(this,t,n)}})(HTMLCanvasElement.prototype.getContext);var tt=class{#e;#t;#n;constructor(e,t={All:void 0,Helix:void 0}){this.#e=()=>document.body,this.#r(e,t),document.addEventListener(`keydown`,e=>{e.altKey&&e.key===`s`&&(e.stopPropagation(),e.preventDefault(),this.capture())})}#r(e,t){let n={};this.#t=t;for(let[e,r]of Object.entries(t))n[e]=void 0;let r=e.folder,i=e.property;i.selection=`All`,this.#n=`All`,this.#e=()=>(console.log(this.#n),console.log(this.#t),this.#t[this.#n]),i.on_capture_clicked=()=>this.capture(),L.addRadioButtons(r,i.selection,n,(e,t,n)=>{console.log(`${e}, ${t}, ${n}`),this.#n=n}),r.add(i,`on_capture_clicked`).name(`Click or press 'alt s'`)}capture(e=this.#e){console.log(`screenCapture ${e}`);let t=e();if(!t)throw Error(`No element to capture`);setTimeout(()=>{let e=window.getComputedStyle(document.body).getPropertyValue(`background-color`);(0,w.default)(t,{backgroundColor:e}).then(e=>{let t=document.createElement(`a`);t.href=e.toDataURL(),t.download=`climate-helix.png`,t.click()})},100)}},nt=class{settings;element;startInput;endInput;startLabel;endLabel;constructor(e,t){this.settings=t,e.querySelector(`#year-slider`)?.remove(),this.element=document.createElement(`div`),this.element.id=`year-slider`,this.element.className=`year-slider`;let n=document.createElement(`div`);n.className=`year-slider-track`,this.element.appendChild(n),this.startInput=this.createInput(`start`),this.endInput=this.createInput(`end`),this.element.append(this.startInput,this.endInput);let r=document.createElement(`div`);r.className=`year-slider-labels`,this.startLabel=document.createElement(`span`),this.startLabel.className=`year-slider-label start`,this.endLabel=document.createElement(`span`),this.endLabel.className=`year-slider-label end`,r.append(this.startLabel,this.endLabel),this.element.appendChild(r),e.insertBefore(this.element,e.firstChild),this.refresh()}createInput(e){let t=document.createElement(`input`);return t.type=`range`,t.className=`year-slider-input ${e}`,t.step=`1`,t.setAttribute(`aria-label`,e===`start`?`Start year`:`End year`),t.addEventListener(`input`,()=>{let n=Number(t.value);e===`start`?this.settings.setStartYear(n):this.settings.setEndYear(n),this.refresh(),E.dispatchEvent(E.CREATE_HELIX)}),t}refresh(){let e=this.settings.datasetFirstYear,t=this.settings.datasetLastYear;this.startInput.min=String(e),this.startInput.max=String(t),this.endInput.min=String(e),this.endInput.max=String(t),this.startInput.value=String(this.settings.firstYear),this.endInput.value=String(this.settings.lastYear),this.startLabel.textContent=String(this.settings.firstYear),this.endLabel.textContent=String(this.settings.lastYear);let n=Math.max(t-e,1);this.startLabel.style.left=`${(this.settings.firstYear-e)/n*100}%`,this.endLabel.style.left=`${(this.settings.lastYear-e)/n*100}%`}dispose(){this.element.remove()}},rt=await fetch(`/climate-helix/assets/info.html`);if(!rt.ok)throw Error(`Unable to load info.html`);var it=await rt.text(),U=document.createElement(`DIV`),W=`.container-div`;U.setAttribute(`class`,`container-div`),document.body.appendChild(U);var G,at=new He({container:U}),K,q,J,Y,X,Z,Q,$;function ot(){let e=document.querySelector(W),t=document.querySelector(`#dataset-controls`)||document.createElement(`DIV`);t.id=`dataset-controls`,t.parentElement||e?.appendChild(t),document.querySelector(`#dataset-buttons`)?.remove();let n=document.createElement(`DIV`);n.id=`dataset-buttons`,G.dateOptions.forEach(e=>{let t=document.createElement(`BUTTON`),r=new Date(e).getFullYear();t.type=`button`,t.textContent=String(r),t.className=`dataset-button`,e===G.date&&t.classList.add(`active`),t.addEventListener(`click`,()=>{G.setDate(e),st()}),n.appendChild(t)}),t.appendChild(n)}function st(){document.querySelectorAll(`#dataset-buttons .dataset-button`).forEach(e=>{let t=e.textContent===String(new Date(G.date).getFullYear());e.classList.toggle(`active`,t)})}function ct(){J=new c,Y=new r({antialias:!0}),Y.setPixelRatio(window.devicePixelRatio);let e=window.innerWidth,t=window.innerHeight;Y.setSize(e,t),U.appendChild(Y.domElement),lt();let n=e/t;q=new d(50,n),q.position.set(4.5,4.5,4.5),q.lookAt(0,0,0),J.add(q),K=new i,J.add(K),new _(q,Y.domElement).update(),window.addEventListener(`resize`,gt),window.addEventListener(E.CREATE_HELIX,ut),document.body.addEventListener(E.THEME_CHANGED.toString(),ht);let a={All:document.body,Helix:Y.domElement};new tt(G.captureSettings(),a),dt(),ft(),E.dispatchEvent(E.THEME_CHANGED),mt()}function lt(){return new me(document.body,e=>{let t=window.getComputedStyle(document.body).getPropertyValue(`background-color`);J.background=new n(t)})}function ut(){X&&K.remove(X),Z&&K.remove(Z),Q&&(K.remove(Q),Q.dispose());let e=new Ye(G);G.showFaces&&(X=e.createMesh(),K.add(X)),G.showWireframe&&(Z=e.createMesh({wireframe:!0,vertexColors:!1}),K.add(Z)),(G.showYearAxis||G.showTemperatureAxis||G.showMonthAxis)&&(Q=new $e(G,e.height,1),K.add(Q));let t=document.querySelector(W);e.createTitleDiv(t),ot();let n=document.querySelector(`#dataset-controls`);n?.classList.toggle(`hidden`,!G.yearRangeVisible),G.yearRangeVisible&&n&&($?$.refresh():$=new nt(n,G)),pt()}function dt(){new Ge(document.querySelector(W)||document.body)}function ft(){let e=document.createElement(`DIV`);e.setAttribute(`id`,`info-div`),e.innerHTML=it;let t=document.querySelector(`.info-button`);t?.insertAdjacentElement(`beforebegin`,e),pt();let n=document.createElement(`SPAN`);n.setAttribute(`id`,`version-info`),n.innerHTML=`v0.5.9`,t?.insertAdjacentElement(`beforebegin`,n)}function pt(){let e=document.querySelector(`#data-end-date`);e&&(e.textContent=G.dataEndDate)}function mt(){requestAnimationFrame(mt),Y.render(J,q)}function ht(){G.initializeColors(),ut()}function gt(){q.aspect=window.innerWidth/window.innerHeight,q.updateProjectionMatrix(),Y.setSize(window.innerWidth,window.innerHeight)}async function _t(){G=await L.create(),Fe(),ct(),at.initTheme()}_t();