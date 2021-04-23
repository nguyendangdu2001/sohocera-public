import{F as e}from"./vendor.6b0643d3.js";import{T as t}from"./timeago-react.22ce8e42.js";import{j as n,A as i,P as r,h as o,U as a,V as s,W as c,X as l,Y as u,Z as d,$ as f,a0 as m,a1 as h,a2 as p,a3 as g,a4 as y,a5 as v,a6 as b,a7 as w,a8 as E,a9 as x,aa as _}from"./index.b319bc6c.js";import{u as N}from"./useBlogs.78455e0b.js";import{R as k}from"./index.78ec7960.js";import{u as j,S as T,i as O}from"./SharedLayoutContext.97bd556c.js";var A=0;function P(){var e=A;return A++,e}var R=function(t){var n=t.children,o=t.initial,a=t.isPresent,s=t.onExitComplete,c=t.custom,l=t.presenceAffectsLayout,u=i(M),d=i(P),f=e.useMemo((function(){return{id:d,initial:o,isPresent:a,custom:c,onExitComplete:function(e){u.set(e,!0);var t=!0;u.forEach((function(e){e||(t=!1)})),t&&(null==s||s())},register:function(e){return u.set(e,!1),function(){return u.delete(e)}}}}),l?void 0:[a]);return e.useMemo((function(){u.forEach((function(e,t){return u.set(t,!1)}))}),[a]),e.useEffect((function(){!a&&!u.size&&(null==s||s())}),[a]),e.createElement(r.Provider,{value:f},n)};function M(){return new Map}function z(e){return e.key||""}var L,S=function(t){var i=t.children,r=t.custom,a=t.initial,s=void 0===a||a,c=t.onExitComplete,l=t.exitBeforeEnter,u=t.presenceAffectsLayout,d=void 0===u||u,f=function(){var t=e.useRef(!1),i=n(e.useState(0),2),r=i[0],o=i[1];return j((function(){return t.current=!0})),e.useCallback((function(){!t.current&&o(r+1)}),[r])}(),m=e.useContext(T);O(m)&&(f=m.forceUpdate);var h=e.useRef(!0),p=function(t){var n=[];return e.Children.forEach(t,(function(t){e.isValidElement(t)&&n.push(t)})),n}(i),g=e.useRef(p),y=e.useRef(new Map).current,v=e.useRef(new Set).current;if(function(e,t){e.forEach((function(e){var n=z(e);t.set(n,e)}))}(p,y),h.current)return h.current=!1,e.createElement(e.Fragment,null,p.map((function(t){return e.createElement(R,{key:z(t),isPresent:!0,initial:!!s&&void 0,presenceAffectsLayout:d},t)})));for(var b=o([],n(p)),w=g.current.map(z),E=p.map(z),x=w.length,_=0;_<x;_++){var N=w[_];-1===E.indexOf(N)?v.add(N):v.delete(N)}return l&&v.size&&(b=[]),v.forEach((function(t){if(-1===E.indexOf(t)){var n=y.get(t);if(n){var i=w.indexOf(t);b.splice(i,0,e.createElement(R,{key:z(n),isPresent:!1,onExitComplete:function(){y.delete(t),v.delete(t);var e=g.current.findIndex((function(e){return e.key===t}));g.current.splice(e,1),v.size||(g.current=p,f(),c&&c())},custom:r,presenceAffectsLayout:d},n))}}})),b=b.map((function(t){var n=t.key;return v.has(n)?t:e.createElement(R,{key:z(t),isPresent:!0,presenceAffectsLayout:d},t)})),g.current=b,e.createElement(e.Fragment,null,v.size?b:b.map((function(t){return e.cloneElement(t)})))};function q(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];e.apply(this,i),t.apply(this,i)}}),null)}var F={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function I(e,t){var n=t["offset"+e[0].toUpperCase()+e.slice(1)],i=F[e];return n+parseInt(p(t,i[0]),10)+parseInt(p(t,i[1]),10)}var C=((L={})[a]="collapse",L[s]="collapsing",L[c]="collapsing",L[l]="collapse show",L),V={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:I},$=e.forwardRef((function(t,n){var i=t.onEnter,r=t.onEntering,o=t.onEntered,a=t.onExit,s=t.onExiting,c=t.className,l=t.children,p=t.dimension,y=void 0===p?"height":p,v=t.getDimensionValue,b=void 0===v?I:v,w=u(t,["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"]),E="function"==typeof y?y():y,x=e.useMemo((function(){return q((function(e){e.style[E]="0"}),i)}),[E,i]),_=e.useMemo((function(){return q((function(e){var t="scroll"+E[0].toUpperCase()+E.slice(1);e.style[E]=e[t]+"px"}),r)}),[E,r]),N=e.useMemo((function(){return q((function(e){e.style[E]=null}),o)}),[E,o]),k=e.useMemo((function(){return q((function(e){e.style[E]=b(E,e)+"px",g(e)}),a)}),[a,b,E]),j=e.useMemo((function(){return q((function(e){e.style[E]=null}),s)}),[E,s]);return e.createElement(d,f({ref:n,addEndListener:m},w,{"aria-expanded":w.role?w.in:null,onEnter:x,onEntering:_,onEntered:N,onExit:k,onExiting:j}),(function(t,n){return e.cloneElement(l,f({},n,{className:h(c,l.props.className,C[t],"width"===E&&"width")}))}))}));$.defaultProps=V;var D=y(e.forwardRef((({className:n,name:i,thumbnail:r,created_at:o,slug:a},s)=>e.createElement("div",{className:`${n} col-12 col-lg-3`,ref:s},e.createElement("div",{className:"home__posts__card"},e.createElement(v,{to:`/blog/${a}`},e.createElement("div",{className:"home__posts__img"},e.createElement("img",{src:r,alt:"Tin tức Era"})),e.createElement("div",{className:"py-1"},e.createElement("p",{className:"fs__text fw-bold text-center"},i),e.createElement("p",{className:"fs__details text-end"},e.createElement(t,{datetime:o,locale:"vi"})))))))))`
  flex: 1;
  .card-container {
    background-color: #383838;
    border-radius: 16px;
  }
  .home__posts {
    &__card {
      height: 100%;
      padding: 8px;
      border-radius: 16px;
      /* box-shadow: 2px 4px rgba(0, 0, 0, 14%); */
      position: relative;
      &:hover {
        /* &::before {
          clip-path: inset(0 0 0 0 round 16px);
        } */
        .home__posts__img img {
          box-shadow: 1px 2px 4px 4px rgba(0, 0, 0, 20%);
        }
      }
      /* &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: -0.4rem;
        background-color: #d4d4d4;
        border-radius: 16px;
        z-index: -1;
        transform-origin: 100% 50%;
        transition: clip-path 0.3s ease 0.1s;
        clip-path: inset(2rem 0 2rem 2rem round 16px);
      } */
      a {
        color: black;
        &:hover {
          color: ${e=>e.theme.colorTextTitle};
        }
      }
    }
    &__img {
      > img {
        border-radius: 16px;
        height: 200px;
        width: 100%;
        /* height: auto; */
        object-fit: cover;
        transition: box-shadow 0.3s ease;
        box-shadow: 2px 4px 8px 8px rgba(0, 0, 0, 14%);
      }
    }
  }
`
/*! @license is-dom-node v1.0.4

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/;function X(e){return"object"==typeof window.Node?e instanceof window.Node:null!==e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName}
/*! @license is-dom-node-list v1.2.1

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/
/*! @license Tealight v0.3.6

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/
function B(e,t){if(void 0===t&&(t=document),e instanceof Array)return e.filter(X);if(X(e))return[e];if(n=e,i=Object.prototype.toString.call(n),"object"==typeof window.NodeList?n instanceof window.NodeList:null!==n&&"object"==typeof n&&"number"==typeof n.length&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(i)&&(0===n.length||X(n[0])))return Array.prototype.slice.call(e);var n,i;if("string"==typeof e)try{var r=t.querySelectorAll(e);return Array.prototype.slice.call(r)}catch(o){return[]}return[]}
/*! @license Rematrix v0.3.0

	Copyright 2018 Julian Lloyd.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
*/function W(e){if(e.constructor!==Array)throw new TypeError("Expected array.");if(16===e.length)return e;if(6===e.length){var t=U();return t[0]=e[0],t[1]=e[1],t[4]=e[2],t[5]=e[3],t[12]=e[4],t[13]=e[5],t}throw new RangeError("Expected array with either 6 or 16 values.")}function U(){for(var e=[],t=0;t<16;t++)t%5==0?e.push(1):e.push(0);return e}function Y(e,t){for(var n=W(e),i=W(t),r=[],o=0;o<4;o++)for(var a=[n[o],n[o+4],n[o+8],n[o+12]],s=0;s<4;s++){var c=4*s,l=[i[c],i[c+1],i[c+2],i[c+3]],u=a[0]*l[0]+a[1]*l[1]+a[2]*l[2]+a[3]*l[3];r[o+c]=u}return r}function H(e){if("string"==typeof e){var t=e.match(/matrix(3d)?\(([^)]+)\)/);if(t)return W(t[2].split(", ").map(parseFloat))}return U()}function G(e,t){var n=U();return n[0]=e,n[5]="number"==typeof t?t:e,n}
/*! @license miniraf v1.0.0

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/
var Z,J=(Z=Date.now(),function(e){var t=Date.now();t-Z>16?(Z=t,e(t)):setTimeout((function(){return J(e)}),0)}),K=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||J,Q={delay:0,distance:"0",duration:600,easing:"cubic-bezier(0.5, 0, 0, 1)",interval:0,opacity:0,origin:"bottom",rotate:{x:0,y:0,z:0},scale:1,cleanup:!1,container:document.documentElement,desktop:!0,mobile:!0,reset:!1,useDelay:"always",viewFactor:0,viewOffset:{top:0,right:0,bottom:0,left:0},afterReset:function(){},afterReveal:function(){},beforeReset:function(){},beforeReveal:function(){}};var ee={success:function(){document.documentElement.classList.add("sr"),document.body?document.body.style.height="100%":document.addEventListener("DOMContentLoaded",(function(){document.body.style.height="100%"}))},failure:function(){return document.documentElement.classList.remove("sr"),{clean:function(){},destroy:function(){},reveal:function(){},sync:function(){},get noop(){return!0}}}};function te(e){return null!==e&&e instanceof Object&&(e.constructor===Object||"[object Object]"===Object.prototype.toString.call(e))}function ne(e,t){if(te(e))return Object.keys(e).forEach((function(n){return t(e[n],n,e)}));if(e instanceof Array)return e.forEach((function(n,i){return t(n,i,e)}));throw new TypeError("Expected either an array or object literal.")}function ie(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];if(this.constructor.debug&&console){var i="%cScrollReveal: "+e;t.forEach((function(e){return i+="\n — "+e})),console.log(i,"color: #ea654b;")}}function re(){var e=this,t={active:[],stale:[]},n={active:[],stale:[]},i={active:[],stale:[]};try{ne(B("[data-sr-id]"),(function(e){var n=parseInt(e.getAttribute("data-sr-id"));t.active.push(n)}))}catch(r){throw r}ne(this.store.elements,(function(e){-1===t.active.indexOf(e.id)&&t.stale.push(e.id)})),ne(t.stale,(function(t){return delete e.store.elements[t]})),ne(this.store.elements,(function(e){-1===i.active.indexOf(e.containerId)&&i.active.push(e.containerId),e.hasOwnProperty("sequence")&&-1===n.active.indexOf(e.sequence.id)&&n.active.push(e.sequence.id)})),ne(this.store.containers,(function(e){-1===i.active.indexOf(e.id)&&i.stale.push(e.id)})),ne(i.stale,(function(t){var n=e.store.containers[t].node;n.removeEventListener("scroll",e.delegate),n.removeEventListener("resize",e.delegate),delete e.store.containers[t]})),ne(this.store.sequences,(function(e){-1===n.active.indexOf(e.id)&&n.stale.push(e.id)})),ne(n.stale,(function(t){return delete e.store.sequences[t]}))}var oe=function(){var e={},t=document.documentElement.style;function n(n,i){if(void 0===i&&(i=t),n&&"string"==typeof n){if(e[n])return e[n];if("string"==typeof i[n])return e[n]=n;if("string"==typeof i["-webkit-"+n])return e[n]="-webkit-"+n;throw new RangeError('Unable to find "'+n+'" style property.')}throw new TypeError("Expected a string.")}return n.clearCache=function(){return e={}},n}();function ae(e){var t=window.getComputedStyle(e.node),n=t.position,i=e.config,r={},o=(e.node.getAttribute("style")||"").match(/[\w-]+\s*:\s*[^;]+\s*/gi)||[];r.computed=o?o.map((function(e){return e.trim()})).join("; ")+";":"",r.generated=o.some((function(e){return e.match(/visibility\s?:\s?visible/i)}))?r.computed:o.concat(["visibility: visible"]).map((function(e){return e.trim()})).join("; ")+";";var a,s,c,l=parseFloat(t.opacity),u=isNaN(parseFloat(i.opacity))?parseFloat(t.opacity):parseFloat(i.opacity),d={computed:l!==u?"opacity: "+l+";":"",generated:l!==u?"opacity: "+u+";":""},f=[];if(parseFloat(i.distance)){var m="top"===i.origin||"bottom"===i.origin?"Y":"X",h=i.distance;"top"!==i.origin&&"left"!==i.origin||(h=/^-/.test(h)?h.substr(1):"-"+h);var p=h.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),g=p[0];switch(p[1]){case"em":h=parseInt(t.fontSize)*g;break;case"px":h=g;break;case"%":h="Y"===m?e.node.getBoundingClientRect().height*g/100:e.node.getBoundingClientRect().width*g/100;break;default:throw new RangeError("Unrecognized or missing distance unit.")}"Y"===m?f.push(function(e){var t=U();return t[13]=e,t}(h)):f.push(function(e){var t=U();return t[12]=e,t}(h))}i.rotate.x&&f.push((a=i.rotate.x,s=Math.PI/180*a,(c=U())[5]=c[10]=Math.cos(s),c[6]=c[9]=Math.sin(s),c[9]*=-1,c)),i.rotate.y&&f.push(function(e){var t=Math.PI/180*e,n=U();return n[0]=n[10]=Math.cos(t),n[2]=n[8]=Math.sin(t),n[2]*=-1,n}(i.rotate.y)),i.rotate.z&&f.push(function(e){var t=Math.PI/180*e,n=U();return n[0]=n[5]=Math.cos(t),n[1]=n[4]=Math.sin(t),n[4]*=-1,n}(i.rotate.z)),1!==i.scale&&(0===i.scale?f.push(G(2e-4)):f.push(G(i.scale)));var y={};if(f.length){y.property=oe("transform"),y.computed={raw:t[y.property],matrix:H(t[y.property])},f.unshift(y.computed.matrix);var v=f.reduce(Y);y.generated={initial:y.property+": matrix3d("+v.join(", ")+");",final:y.property+": matrix3d("+y.computed.matrix.join(", ")+");"}}else y.generated={initial:"",final:""};var b={};if(d.generated||y.generated.initial){b.property=oe("transition"),b.computed=t[b.property],b.fragments=[];var w=i.delay,E=i.duration,x=i.easing;d.generated&&b.fragments.push({delayed:"opacity "+E/1e3+"s "+x+" "+w/1e3+"s",instant:"opacity "+E/1e3+"s "+x+" 0s"}),y.generated.initial&&b.fragments.push({delayed:y.property+" "+E/1e3+"s "+x+" "+w/1e3+"s",instant:y.property+" "+E/1e3+"s "+x+" 0s"}),b.computed&&!b.computed.match(/all 0s|none 0s/)&&b.fragments.unshift({delayed:b.computed,instant:b.computed});var _=b.fragments.reduce((function(e,t,n){return e.delayed+=0===n?t.delayed:", "+t.delayed,e.instant+=0===n?t.instant:", "+t.instant,e}),{delayed:"",instant:""});b.generated={delayed:b.property+": "+_.delayed+";",instant:b.property+": "+_.instant+";"}}else b.generated={delayed:"",instant:""};return{inline:r,opacity:d,position:n,transform:y,transition:b}}function se(e,t){t.split(";").forEach((function(t){var n=t.split(":"),i=n[0],r=n.slice(1);i&&r&&(e.style[i.trim()]=r.join(":"))}))}function ce(e){var t,n=this;try{ne(B(e),(function(e){var i=e.getAttribute("data-sr-id");if(null!==i){t=!0;var r=n.store.elements[i];r.callbackTimer&&window.clearTimeout(r.callbackTimer.clock),se(r.node,r.styles.inline.generated),e.removeAttribute("data-sr-id"),delete n.store.elements[i]}}))}catch(i){return ie.call(this,"Clean failed.",i.message)}if(t)try{re.call(this)}catch(i){return ie.call(this,"Clean failed.",i.message)}}function le(){var e=this;ne(this.store.elements,(function(e){se(e.node,e.styles.inline.generated),e.node.removeAttribute("data-sr-id")})),ne(this.store.containers,(function(t){var n=t.node===document.documentElement?window:t.node;n.removeEventListener("scroll",e.delegate),n.removeEventListener("resize",e.delegate)})),this.store={containers:{},elements:{},history:[],sequences:{}}}function ue(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];if(te(e))return ne(t,(function(t){ne(t,(function(t,n){te(t)?(e[n]&&te(e[n])||(e[n]={}),ue(e[n],t)):e[n]=t}))})),e;throw new TypeError("Target must be an object literal.")}function de(e){return void 0===e&&(e=navigator.userAgent),/Android|iPhone|iPad|iPod/i.test(e)}var fe,me=(fe=0,function(){return fe++});function he(){var e=this;re.call(this),ne(this.store.elements,(function(e){var t=[e.styles.inline.generated];e.visible?(t.push(e.styles.opacity.computed),t.push(e.styles.transform.generated.final),e.revealed=!0):(t.push(e.styles.opacity.generated),t.push(e.styles.transform.generated.initial),e.revealed=!1),se(e.node,t.filter((function(e){return""!==e})).join(" "))})),ne(this.store.containers,(function(t){var n=t.node===document.documentElement?window:t.node;n.addEventListener("scroll",e.delegate),n.addEventListener("resize",e.delegate)})),this.delegate(),this.initTimeout=null}function pe(e,t){void 0===t&&(t={});var n=t.pristine||this.pristine,i="always"===e.config.useDelay||"onload"===e.config.useDelay&&n||"once"===e.config.useDelay&&!e.seen,r=e.visible&&!e.revealed,o=!e.visible&&e.revealed&&e.config.reset;return t.reveal||r?ge.call(this,e,i):t.reset||o?ye.call(this,e):void 0}function ge(e,t){var n=[e.styles.inline.generated,e.styles.opacity.computed,e.styles.transform.generated.final];t?n.push(e.styles.transition.generated.delayed):n.push(e.styles.transition.generated.instant),e.revealed=e.seen=!0,se(e.node,n.filter((function(e){return""!==e})).join(" ")),ve.call(this,e,t)}function ye(e){var t=[e.styles.inline.generated,e.styles.opacity.generated,e.styles.transform.generated.initial,e.styles.transition.generated.instant];e.revealed=!1,se(e.node,t.filter((function(e){return""!==e})).join(" ")),ve.call(this,e)}function ve(e,t){var n=this,i=t?e.config.duration+e.config.delay:e.config.duration,r=e.revealed?e.config.beforeReveal:e.config.beforeReset,o=e.revealed?e.config.afterReveal:e.config.afterReset,a=0;e.callbackTimer&&(a=Date.now()-e.callbackTimer.start,window.clearTimeout(e.callbackTimer.clock)),r(e.node),e.callbackTimer={start:Date.now(),clock:window.setTimeout((function(){o(e.node),e.callbackTimer=null,e.revealed&&!e.config.reset&&e.config.cleanup&&ce.call(n,e.node)}),i-a)}}function be(e,t){if(void 0===t&&(t=this.pristine),!e.visible&&e.revealed&&e.config.reset)return pe.call(this,e,{reset:!0});var n=this.store.sequences[e.sequence.id],i=e.sequence.index;if(n){var r=new Ee(n,"visible",this.store),o=new Ee(n,"revealed",this.store);if(n.models={visible:r,revealed:o},!o.body.length){var a=n.members[r.body[0]],s=this.store.elements[a];if(s)return xe.call(this,n,r.body[0],-1,t),xe.call(this,n,r.body[0],1,t),pe.call(this,s,{reveal:!0,pristine:t})}if(!n.blocked.head&&i===[].concat(o.head).pop()&&i>=[].concat(r.body).shift())return xe.call(this,n,i,-1,t),pe.call(this,e,{reveal:!0,pristine:t});if(!n.blocked.foot&&i===[].concat(o.foot).shift()&&i<=[].concat(r.body).pop())return xe.call(this,n,i,1,t),pe.call(this,e,{reveal:!0,pristine:t})}}function we(e){var t=Math.abs(e);if(isNaN(t))throw new RangeError("Invalid sequence interval.");this.id=me(),this.interval=Math.max(t,16),this.members=[],this.models={},this.blocked={head:!1,foot:!1}}function Ee(e,t,n){var i=this;this.head=[],this.body=[],this.foot=[],ne(e.members,(function(e,r){var o=n.elements[e];o&&o[t]&&i.body.push(r)})),this.body.length&&ne(e.members,(function(e,r){var o=n.elements[e];o&&!o[t]&&(r<i.body[0]?i.head.push(r):i.foot.push(r))}))}function xe(e,t,n,i){var r=this,o=["head",null,"foot"][1+n],a=e.members[t+n],s=this.store.elements[a];e.blocked[o]=!0,setTimeout((function(){e.blocked[o]=!1,s&&be.call(r,s,i)}),e.interval)}function _e(e,t,n){var i=this;void 0===t&&(t={}),void 0===n&&(n=!1);var r,o=[],a=t.interval||Q.interval;try{a&&(r=new we(a));var s=B(e);if(!s.length)throw new Error("Invalid reveal target.");var c=s.reduce((function(e,n){var a={},s=n.getAttribute("data-sr-id");s?(ue(a,i.store.elements[s]),se(a.node,a.styles.inline.computed)):(a.id=me(),a.node=n,a.seen=!1,a.revealed=!1,a.visible=!1);var c=ue({},a.config||i.defaults,t);if(!c.mobile&&de()||!c.desktop&&!de())return s&&ce.call(i,a),e;var l,u=B(c.container)[0];if(!u)throw new Error("Invalid container.");return u.contains(n)?(null===(l=function(e){var t=[],n=arguments.length-1;for(;n-- >0;)t[n]=arguments[n+1];var i=null;return ne(t,(function(t){ne(t,(function(t){null===i&&t.node===e&&(i=t.id)}))})),i}(u,o,i.store.containers))&&(l=me(),o.push({id:l,node:u})),a.config=c,a.containerId=l,a.styles=ae(a),r&&(a.sequence={id:r.id,index:r.members.length},r.members.push(a.id)),e.push(a),e):e}),[]);ne(c,(function(e){i.store.elements[e.id]=e,e.node.setAttribute("data-sr-id",e.id)}))}catch(l){return ie.call(this,"Reveal failed.",l.message)}ne(o,(function(e){i.store.containers[e.id]={id:e.id,node:e.node}})),r&&(this.store.sequences[r.id]=r),!0!==n&&(this.store.history.push({target:e,options:t}),this.initTimeout&&window.clearTimeout(this.initTimeout),this.initTimeout=window.setTimeout(he.bind(this),0))}function Ne(){var e=this;ne(this.store.history,(function(t){_e.call(e,t.target,t.options,!0)})),he.call(this)}var ke=Math.sign||function(e){return(e>0)-(e<0)||+e};function je(e,t){var n=t?e.node.clientHeight:e.node.offsetHeight,i=t?e.node.clientWidth:e.node.offsetWidth,r=0,o=0,a=e.node;do{isNaN(a.offsetTop)||(r+=a.offsetTop),isNaN(a.offsetLeft)||(o+=a.offsetLeft),a=a.offsetParent}while(a);return{bounds:{top:r,right:o+i,bottom:r+n,left:o},height:n,width:i}}function Te(e){var t,n;return e.node===document.documentElement?(t=window.pageYOffset,n=window.pageXOffset):(t=e.node.scrollTop,n=e.node.scrollLeft),{top:t,left:n}}function Oe(e){void 0===e&&(e={});var t=this.store.containers[e.containerId];if(t){var n=Math.max(0,Math.min(1,e.config.viewFactor)),i=e.config.viewOffset,r=e.geometry.bounds.top+e.geometry.height*n,o=e.geometry.bounds.right-e.geometry.width*n,a=e.geometry.bounds.bottom-e.geometry.height*n,s=e.geometry.bounds.left+e.geometry.width*n,c=t.geometry.bounds.top+t.scroll.top+i.top,l=t.geometry.bounds.right+t.scroll.left-i.right,u=t.geometry.bounds.bottom+t.scroll.top-i.bottom,d=t.geometry.bounds.left+t.scroll.left+i.left;return r<u&&o>d&&a>c&&s<l||"fixed"===e.styles.position}}function Ae(e,t){var n=this;void 0===e&&(e={type:"init"}),void 0===t&&(t=this.store.elements),K((function(){var i="init"===e.type||"resize"===e.type;ne(n.store.containers,(function(e){i&&(e.geometry=je.call(n,e,!0));var t=Te.call(n,e);e.scroll&&(e.direction={x:ke(t.left-e.scroll.left),y:ke(t.top-e.scroll.top)}),e.scroll=t})),ne(t,(function(e){(i||void 0===e.geometry)&&(e.geometry=je.call(n,e)),e.visible=Oe.call(n,e)})),ne(t,(function(e){e.sequence?be.call(n,e):pe.call(n,e)})),n.pristine=!1}))}var Pe,Re,Me,ze,Le,Se,qe,Fe;function Ie(e){var t;if(void 0===e&&(e={}),void 0===this||Object.getPrototypeOf(this)!==Ie.prototype)return new Ie(e);if(!Ie.isSupported())return ie.call(this,"Instantiation failed.","This browser is not supported."),ee.failure();try{t=ue({},Se||Q,e)}catch(n){return ie.call(this,"Invalid configuration.",n.message),ee.failure()}try{if(!B(t.container)[0])throw new Error("Invalid container.")}catch(n){return ie.call(this,n.message),ee.failure()}return!(Se=t).mobile&&de()||!Se.desktop&&!de()?(ie.call(this,"This device is disabled.","desktop: "+Se.desktop,"mobile: "+Se.mobile),ee.failure()):(ee.success(),this.store={containers:{},elements:{},history:[],sequences:{}},this.pristine=!0,Pe=Pe||Ae.bind(this),Re=Re||le.bind(this),Me=Me||_e.bind(this),ze=ze||ce.bind(this),Le=Le||Ne.bind(this),Object.defineProperty(this,"delegate",{get:function(){return Pe}}),Object.defineProperty(this,"destroy",{get:function(){return Re}}),Object.defineProperty(this,"reveal",{get:function(){return Me}}),Object.defineProperty(this,"clean",{get:function(){return ze}}),Object.defineProperty(this,"sync",{get:function(){return Le}}),Object.defineProperty(this,"defaults",{get:function(){return Se}}),Object.defineProperty(this,"version",{get:function(){return"4.0.9"}}),Object.defineProperty(this,"noop",{get:function(){return!1}}),Fe||(Fe=this))}Ie.isSupported=function(){return("transform"in(e=document.documentElement.style)||"WebkitTransform"in e)&&function(){var e=document.documentElement.style;return"transition"in e||"WebkitTransition"in e}();var e},Object.defineProperty(Ie,"debug",{get:function(){return qe||!1},set:function(e){return qe="boolean"==typeof e?e:qe}}),Ie();var Ce=y((({className:t})=>{const n=e.useRef([]),{data:i}=N();return e.useEffect((()=>(Ie().reveal(n.current,{delay:300,duration:1e3,reset:!1,opacity:0}),()=>{})),[]),e.createElement("section",{className:`${t} home__posts container mt-5`},e.createElement("p",{className:"text-center fs__title fw-bold"},"Bài viết mới nhất"),e.createElement("div",{className:"row mt-5 flex-column flex-lg-row"},null==i?void 0:i.blogs.map(((t,i)=>e.createElement(D,{key:t.id_blog,ref:e=>n.current[i]=e,name:t.name_b,thumbnail:t.thumbnail,created_at:t.created_at,slug:t.slug})))))}))``;var Ve=y((({className:t})=>{const n=e.useRef([]);return e.useEffect((()=>(Ie().reveal(n.current,{duration:700,reset:!0,interval:500}),()=>{})),[]),e.createElement("div",{className:`${t} py-0 py-lg-5 bg__custom--1`},e.createElement("section",{className:"container p-3"},e.createElement("div",{className:"row align-items-center"},e.createElement("div",{className:"home__video col-12 col-lg-12 p-0"},e.createElement("img",{src:"/assets/dangkytrainghiem.be957a32.jpg",alt:"",style:{width:"100%",height:"auto",objectFit:"cover"}})))))}))`
  background-color: ${e=>e.theme.colorSecondary};
  .home {
    &__content {
      color: #fafafa;
      &__header {
        color: #fafafa;
        font-size: 3em;
        line-height: 60px;
        font-weight: bold;
      }
      &__sub {
        font-size: 1em;
      }
    }
    &__video {
      /* background-color: gray; */
      /* max-height: 400px; */
    }
  }
`,$e=new Map,De=new Map,Xe=0;function Be(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return t+"_"+("root"===t?(n=e.root)?(De.has(n)||(Xe+=1,De.set(n,Xe.toString())),De.get(n)):"0":e[t]);var n})).toString()}function We(e,t,n){if(void 0===n&&(n={}),!e)return function(){};var i=function(e){var t=Be(e),n=$e.get(t);if(!n){var i,r=new Map,o=new IntersectionObserver((function(t){t.forEach((function(t){var n,o=t.isIntersecting&&i.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=o),null==(n=r.get(t.target))||n.forEach((function(e){e(o,t)}))}))}),e);i=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:r},$e.set(t,n)}return n}(n),r=i.id,o=i.observer,a=i.elements,s=a.get(e)||[];return a.has(e)||a.set(e,s),s.push(t),o.observe(e),function(){s.splice(s.indexOf(t),1),0===s.length&&(a.delete(e),o.unobserve(e)),0===a.size&&(o.disconnect(),$e.delete(r))}}var Ue=y((({className:t})=>{const{ref:n,inView:i}=function(t){var n=void 0===t?{}:t,i=n.threshold,r=n.delay,o=n.trackVisibility,a=n.rootMargin,s=n.root,c=n.triggerOnce,l=n.skip,u=n.initialInView,d=e.useRef(),f=e.useState({inView:!!u}),m=f[0],h=f[1],p=e.useCallback((function(e){void 0!==d.current&&(d.current(),d.current=void 0),l||e&&(d.current=We(e,(function(e,t){h({inView:e,entry:t}),t.isIntersecting&&c&&d.current&&(d.current(),d.current=void 0)}),{root:s,rootMargin:a,threshold:i,trackVisibility:o,delay:r}))}),[Array.isArray(i)?i.toString():i,s,a,c,l,o,r]);e.useEffect((function(){d.current||!m.entry||c||l||h({inView:!!u})}));var g=[p,m.inView,m.entry];return g.ref=g[0],g.inView=g[1],g.entry=g[2],g}({threshold:1,triggerOnce:!0});console.log(i);const r=e.useRef([]);return e.useEffect((()=>(Ie().reveal(r.current,{duration:700,reset:!0,interval:500}),()=>{})),[]),e.createElement("section",{className:`${t} container`},e.createElement("div",{className:"home__pros row justify-content-around align-items-center mt-5",ref:n},e.createElement("div",{className:"home__pros__img col-12 col-lg-7 p-lg-1 p-0"},e.createElement(k,{width:"100%",height:"auto",url:"/assets/Era-Introduction-1.e35beec3.mp4",controls:!0,playing:i,style:{width:"100%",height:"100%"}})),e.createElement("div",{className:"col-12 col-lg-4 offset-lg-1"},e.createElement("p",{className:"fs__title fw-bold",style:{fontSize:42}},"Số học là gì ?"),e.createElement("p",{style:{fontSize:20}},'“Era Vietnam được dựa trên những nghiên cứu khoa học ra đời từ thời kì Hy Lạp cổ đại có bề dày lịch sử hơn 2500 năm. Bộ môn được khai sinh từ nghiên cứu của nhà triết học, toán học Pythagoras- ông tổ của rất nhiều công trình toán học nổi tiếng. Ông được cho là người đã khai sinh ra môn Số học, chính là môn học căn bản để chúng ta thực hiện các phép toán cộng, trừ, nhân, chia hiện nay."'," ",e.createElement("a",{href:"#"},"Xem thêm")))))}))`
  .home {
    &__pros {
      &__img {
        max-height: 400px;
        > img {
          height: inherit;
          width: 100%;
          object-fit: cover;
        }
      }
    }
  }
`;var Ye=y((({className:t,question:n,answer:i})=>{const[r,o]=e.useState(!1);return e.createElement("div",{className:`${t} fag-item mb-2`},e.createElement("h4",{onClick:()=>o((e=>!e))},n),e.createElement($,{in:r,appear:!1},e.createElement("div",null,e.createElement("div",{className:"content"},e.createElement("p",null,i)))))}))`
  &.fag-item {
    border-radius: 4px;
    background-color: #d4d4d4;
    h4 {
      padding: 20px;
      margin-bottom: 0;
      font-size: 1rem;
      font-weight: 700;
      position: relative;
      cursor: pointer;
      &::after {
        position: absolute;
        -webkit-font-smoothing: antialiased;
        display: inline-block;
        font-style: normal;
        font-variant: normal;
        text-rendering: auto;
        line-height: 1;
        font-weight: 900;
        font-family: "Font Awesome 5 Free";
        content: "\f107";
        right: 20px;
        transform: rotate(0);
        transform-origin: center;
        transition: all 0.2s ease-in-out;
      }
    }
    .content {
      padding: 0 20px 20px;
    }
  }
`;var He=y((({className:t})=>{const{data:n}=b(["faqs"],(async()=>{const{data:e}=await w.get(`${E.apiGateWay}/faq`);return e.faqs}),{refetchOnWindowFocus:!1});return e.createElement("section",{className:`${t} home__questions mt-5 container mb-2`,id:"faq"},e.createElement("p",{className:"fs__title text-center fw-bold"},"Câu hỏi thường gặp"),e.createElement(x.div,{className:"mt-5",layout:!0},null==n?void 0:n.map((t=>e.createElement(Ye,{key:t.id,question:t.name,answer:t.desc})))))}))`
  h5 {
    color: #ccc;
    font-size: 1rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }
`;var Ge=y((({className:t,trail:n=0})=>e.createElement("div",{className:`${t} d-flex flex-column p-3 p-sm-3 p-lg-4 mx-0 mx-lg-2 my-2`},e.createElement(x.div,{className:"testimonial__header",animate:{clipPath:"inset(0% 0 0 0)",y:0,opacity:1},initial:{clipPath:"inset(100% 0 0 0)",y:10,opacity:0},transition:{delay:n/1e3+.2,type:"spring",stiffness:130}},"Trải nghiệm của Nguyễn Ngọc Nhẫn"),e.createElement(x.div,{className:"testimonial__main",initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:n/1e3+1,type:"spring",stiffness:130}},e.createElement("p",{className:"testimonial__content"},'"Tôi rất hài lòng về sản phẩm của Era Vietnam,nó giúp tôi thấu hiểu về bản thân mình."')),e.createElement("div",{className:"d-flex align-content-center testimonial__user"},e.createElement(x.img,{src:"https://www.sohoceravietnam.com/public/img/meow.jpg",alt:"",className:"testimonial__user__img",animate:{scale:1,opacity:1},transition:{delay:n/1e3+1,type:"spring",stiffness:130},initial:{scale:0,opacity:0}}),e.createElement("div",{className:"testimonial__user_info"},e.createElement(x.div,{className:"testimonial__user__name fw-bolder",animate:{clipPath:"inset(0% 0 0 0)",y:0,opacity:1},initial:{clipPath:"inset(100% 0 0 0)",y:10,opacity:0},transition:{delay:n/1e3+1.3,type:"spring",stiffness:130}},"Tên"),e.createElement(x.div,{className:"testimonial__user__desc",animate:{clipPath:"inset(0% 0 0 0)",y:0,opacity:1},initial:{clipPath:"inset(100% 0 0 0)",y:10,opacity:0},transition:{delay:n/1e3+1.6,type:"spring",stiffness:130}},"Senior designer at design studio"))))))`
  padding: 32px;
  margin: 16px;
  row-gap: 32px;
  background-color: #fafafa;
  box-shadow: 8px 8px 12px 4px rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  position: relative;
  &::before {
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    -webkit-font-smoothing: antialiased;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    line-height: 1;
    content: "\f10e";
    position: absolute;
    right: 0;
    top: 0;
    width: 64px;
    height: 64px;
    color: white;
    border-radius: 50%;
    background-color: ${e=>e.theme.colorSecondary};
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate(50%, -50%);
    @media ${e=>e.theme.breakPoints.md} {
      display: none;
    }
  }
  .testimonial {
    &__header {
      font-weight: 900;
      font-size: 32px;
      color: #ccc06b;
    }
    &__content {
      font-weight: 600;
      opacity: 0.6;
    }
    &__user {
      column-gap: 16px;
      &__img {
        border-radius: 50%;
        height: 50px;
        width: 50px;
        object-fit: cover;
      }
      &__desc {
        opacity: 0.4;
      }
    }
  }
`;const Ze=_({initial:{y:-40,opacity:0},enter:{opacity:1,y:0},exit:e=>({opacity:0,y:40,transition:{type:"tween",duration:.3,delay:.1*e}})});var Je=y((({className:t})=>{const[n,i]=e.useState(0);return e.createElement("section",{className:`${t} testimonial container mt-5`},e.createElement("div",{className:"header d-flex justify-content-between align-items-center mb-3"},e.createElement("div",{className:"my-4 fs__title fw-bold"},"Người dùng nói gì về EraVietnam"),e.createElement("div",{className:"arrows d-flex"},e.createElement("div",{className:"arrows__btn left",onClick:()=>{i((e=>Math.abs(e-1)%2))}},e.createElement("i",{className:"fas fa-arrow-left"})),e.createElement("div",{className:"arrows__btn right",onClick:()=>{i((e=>(e+1)%2))}},e.createElement("i",{className:"fas fa-arrow-right"})))),e.createElement("div",{className:"row flex-column flex-lg-row"},e.createElement(S,{exitBeforeEnter:!0,initial:!1},[{id:1},{id:2},{id:3},{id:4}].slice(2*n,2*n+2).map(((t,n)=>e.createElement(x.div,{className:"col-12 col-lg-6",variants:Ze,initial:"initial",animate:"enter",exit:"exit",key:t.id,custom:n,transition:{delay:.2*n,type:"spring",stiffness:150,damping:10}},t.id,e.createElement(Ge,{trail:200*n})))))))}))`
  .arrows {
    column-gap: 8px;
    &__btn {
      padding: 16px 20px;
      transition: all 0.6s cubic-bezier(0.61, 0.22, 0.23, 1);
      border-width: 1px;
      border: 1px solid ${e=>e.theme.colorSecondary};
      position: relative;
      /* overflow: hidden; */
      i {
        transition: all 0.6s cubic-bezier(0.61, 0.22, 0.23, 1);
      }
      &.left {
        &::before {
          transition: all 0.6s cubic-bezier(0.61, 0.22, 0.23, 1);
          font-family: "Font Awesome 5 Free";
          font-weight: 900;
          -webkit-font-smoothing: antialiased;
          font-style: normal;
          font-variant: normal;
          text-rendering: auto;
          line-height: 1;
          content: "\f060";
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          left: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          transform: translateX(50%) scale(0);
          opacity: 0;
        }
        &:hover {
          i {
            transform: translateX(-50%) scale(0);
          }
        }
      }
      &.right {
        &::before {
          transition: all 0.6s cubic-bezier(0.61, 0.22, 0.23, 1);
          font-family: "Font Awesome 5 Free";
          font-weight: 900;
          -webkit-font-smoothing: antialiased;
          font-style: normal;
          font-variant: normal;
          text-rendering: auto;
          line-height: 1;
          content: "\f061";
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          left: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          transform: translateX(-50%) scale(0);
          opacity: 0;
        }
        &:hover {
          i {
            transform: translateX(50%) scale(0);
          }
        }
      }
      &:hover {
        &::before {
          opacity: 1;
          transform: translateX(0) scale(1);
        }
      }
      i {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  .slick-track {
    display: flex;
  }
  .testimonial {
  }
`;const Ke=t=>e.createElement("div",null,e.createElement(Ve,null),e.createElement(Ue,null),e.createElement(Je,null),e.createElement(Ce,null),e.createElement(He,null));export default Ke;export{Ke as Home};
