!function(){function e(){T.keyboardSupport&&f("keydown",a)}function t(){if(!z&&document.body){z=!0;var t=document.body,o=document.documentElement,n=window.innerHeight,a=t.scrollHeight;if(X=document.compatMode.indexOf("CSS")>=0?o:t,S=t,e(),top!=self)C=!0;else if(a>n&&(t.offsetHeight<=n||o.offsetHeight<=n)){var r=document.createElement("div");r.style.cssText="position:absolute; z-index:-10000; top:0; left:0; right:0; height:"+X.scrollHeight+"px",document.body.appendChild(r);var l,i=function(){l||(l=setTimeout(function(){H||(r.style.height="0",r.style.height=X.scrollHeight+"px",l=null)},500))};setTimeout(i,10);var c={attributes:!0,childList:!0,characterData:!1};if((x=new j(i)).observe(t,c),X.offsetHeight<=n){var u=document.createElement("div");u.style.clear="both",t.appendChild(u)}}T.fixedBackground||H||(t.style.backgroundAttachment="scroll",o.style.backgroundAttachment="scroll")}}function o(e,t,o){if(h(t,o),1!=T.accelerationMax){var n=Date.now()-N;if(n<T.accelerationDelta){var a=(1+50/n)/2;a>1&&(a=Math.min(a,T.accelerationMax),t*=a,o*=a)}N=Date.now()}if(A.push({x:t,y:o,lastX:t<0?.99:-.99,lastY:o<0?.99:-.99,start:Date.now()}),!K){var r=e===document.body,l=function(n){for(var a=Date.now(),i=0,c=0,u=0;u<A.length;u++){var d=A[u],s=a-d.start,f=s>=T.animationTime,m=f?1:s/T.animationTime;T.pulseAlgorithm&&(m=y(m));var h=d.x*m-d.lastX>>0,p=d.y*m-d.lastY>>0;i+=h,c+=p,d.lastX+=h,d.lastY+=p,f&&(A.splice(u,1),u--)}r?window.scrollBy(i,c):(i&&(e.scrollLeft+=i),c&&(e.scrollTop+=c)),t||o||(A=[]),A.length?P(l,e,1e3/T.frameRate+1):K=!1};P(l,e,0),K=!0}}function n(e){z||t();var n=e.target,a=c(n);if(!a||e.defaultPrevented||e.ctrlKey)return!0;if(m(S,"embed")||m(n,"embed")&&/\.pdf/i.test(n.src)||m(S,"object"))return!0;var r=-e.wheelDeltaX||e.deltaX||0,i=-e.wheelDeltaY||e.deltaY||0;if(B&&(e.wheelDeltaX&&w(e.wheelDeltaX,120)&&(r=e.wheelDeltaX/Math.abs(e.wheelDeltaX)*-120),e.wheelDeltaY&&w(e.wheelDeltaY,120)&&(i=e.wheelDeltaY/Math.abs(e.wheelDeltaY)*-120)),r||i||(i=-e.wheelDelta||0),1===e.deltaMode&&(r*=40,i*=40),!T.touchpadSupport&&p(i))return!0;Math.abs(r)>1.2&&(r*=T.stepSize/120),Math.abs(i)>1.2&&(i*=T.stepSize/120),o(a,r,i),e.preventDefault(),l()}function a(e){var t=e.target,n=e.ctrlKey||e.altKey||e.metaKey||e.shiftKey&&e.keyCode!==L.spacebar;document.contains(S)||(S=document.activeElement);var a=/^(button|submit|radio|checkbox|file|color|image)$/i;if(/^(textarea|select|embed|object)$/i.test(t.nodeName)||m(t,"input")&&!a.test(t.type)||m(S,"video")||v(e)||t.isContentEditable||e.defaultPrevented||n)return!0;if((m(t,"button")||m(t,"input")&&a.test(t.type))&&e.keyCode===L.spacebar)return!0;var r=0,i=0,u=c(S),d=u.clientHeight;switch(u==document.body&&(d=window.innerHeight),e.keyCode){case L.up:i=-T.arrowScroll;break;case L.down:i=T.arrowScroll;break;case L.spacebar:i=-(e.shiftKey?1:-1)*d*.9;break;case L.pageup:i=.9*-d;break;case L.pagedown:i=.9*d;break;case L.home:i=-u.scrollTop;break;case L.end:var s=u.scrollHeight-u.scrollTop-d;i=s>0?s+10:0;break;case L.left:r=-T.arrowScroll;break;case L.right:r=T.arrowScroll;break;default:return!0}o(u,r,i),e.preventDefault(),l()}function r(e){S=e.target}function l(){clearTimeout(D),D=setInterval(function(){O={}},1e3)}function i(e,t){for(var o=e.length;o--;)O[q(e[o])]=t;return t}function c(e){var t=[],o=document.body,n=X.scrollHeight;do{var a=O[q(e)];if(a)return i(t,a);if(t.push(e),n===e.scrollHeight){var r=d(X)&&d(o)||s(X);if(C&&u(X)||!C&&r)return i(t,F())}else if(u(e)&&s(e))return i(t,e)}while(e=e.parentElement)}function u(e){return e.clientHeight+10<e.scrollHeight}function d(e){return"hidden"!==getComputedStyle(e,"").getPropertyValue("overflow-y")}function s(e){var t=getComputedStyle(e,"").getPropertyValue("overflow-y");return"scroll"===t||"auto"===t}function f(e,t){window.addEventListener(e,t,!1)}function m(e,t){return(e.nodeName||"").toLowerCase()===t.toLowerCase()}function h(e,t){e=e>0?1:-1,t=t>0?1:-1,E.x===e&&E.y===t||(E.x=e,E.y=t,A=[],N=0)}function p(e){if(e)return Y.length||(Y=[e,e,e]),e=Math.abs(e),Y.push(e),Y.shift(),clearTimeout(k),k=setTimeout(function(){window.localStorage&&(localStorage.SS_deltaBuffer=Y.join(","))},1e3),!b(120)&&!b(100)}function w(e,t){return Math.floor(e/t)==e/t}function b(e){return w(Y[0],e)&&w(Y[1],e)&&w(Y[2],e)}function v(e){var t=e.target,o=!1;if(-1!=document.URL.indexOf("www.youtube.com/watch"))do{if(o=t.classList&&t.classList.contains("html5-video-controls"))break}while(t=t.parentNode);return o}function g(e){var t,o;return(e*=T.pulseScale)<1?t=e-(1-Math.exp(-e)):(e-=1,t=(o=Math.exp(-1))+(1-Math.exp(-e))*(1-o)),t*T.pulseNormalize}function y(e){return e>=1?1:e<=0?0:(1==T.pulseNormalize&&(T.pulseNormalize/=g(1)),g(e))}var S,x,D,k,M={frameRate:150,animationTime:400,stepSize:120,pulseAlgorithm:!0,pulseScale:4,pulseNormalize:1,accelerationDelta:20,accelerationMax:1,keyboardSupport:!0,arrowScroll:50,touchpadSupport:!0,fixedBackground:!0,excluded:""},T=M,H=!1,C=!1,E={x:0,y:0},z=!1,X=document.documentElement,Y=[],B=/^Mac/.test(navigator.platform),L={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},T=M,A=[],K=!1,N=Date.now(),q=function(){var e=0;return function(t){return t.uniqueID||(t.uniqueID=e++)}}(),O={};window.localStorage&&localStorage.SS_deltaBuffer&&(Y=localStorage.SS_deltaBuffer.split(","));var R,P=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e,t,o){window.setTimeout(e,o||1e3/60)},j=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,F=function(){var e;return function(){if(!e){var t=document.createElement("div");t.style.cssText="height:10000px;width:1px;",document.body.appendChild(t);var o=document.body.scrollTop;document.documentElement.scrollTop;window.scrollBy(0,1),e=document.body.scrollTop!=o?document.body:document.documentElement,window.scrollBy(0,-1),document.body.removeChild(t)}return e}}();"onwheel"in document.createElement("div")?R="wheel":"onmousewheel"in document.createElement("div")&&(R="mousewheel"),R&&(f(R,n),f("mousedown",r),f("load",t))}();