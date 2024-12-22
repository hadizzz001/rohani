

/*===============================
/media/system/js/polyfill.event.js
================================================================================*/;
(function(e){"Window"in this||!function(e){e.constructor?e.Window=e.constructor:(e.Window=e.constructor=new Function("return function Window() {}")()).prototype=this}(this),"Document"in this||(this.HTMLDocument?this.Document=this.HTMLDocument:(this.Document=this.HTMLDocument=document.constructor=new Function("return function Document() {}")(),this.Document.prototype=document)),"Element"in this&&"HTMLElement"in this||!function(){function e(){return s--||clearTimeout(t),document.body&&!document.body.prototype&&/(complete|interactive)/.test(document.readyState)?(a(document,!0),t&&document.body.prototype&&clearTimeout(t),!!document.body.prototype):!1}if(window.Element&&!window.HTMLElement)return void(window.HTMLElement=window.Element);window.Element=window.HTMLElement=new Function("return function Element() {}")();var t,n=document.appendChild(document.createElement("body")),o=n.appendChild(document.createElement("iframe")),r=o.contentWindow.document,i=Element.prototype=r.appendChild(r.createElement("*")),c={},a=function(e,t){var n,o,r,i=e.childNodes||[],u=-1;if(1===e.nodeType&&e.constructor!==Element){e.constructor=Element;for(n in c)o=c[n],e[n]=o}for(;r=t&&i[++u];)a(r,t);return e},u=document.getElementsByTagName("*"),l=document.createElement,s=100;i.attachEvent("onpropertychange",function(e){for(var t,n=e.propertyName,o=!c.hasOwnProperty(n),r=i[n],a=c[n],l=-1;t=u[++l];)1===t.nodeType&&(o||t[n]===a)&&(t[n]=r);c[n]=r}),i.constructor=Element,i.hasAttribute||(i.hasAttribute=function(e){return null!==this.getAttribute(e)}),e(!0)||(document.onreadystatechange=e,t=setInterval(e,25)),document.createElement=function(e){var t=l(String(e).toLowerCase());return a(t)},document.removeChild(n)}(),"defineProperty"in Object&&function(){try{var e={};return Object.defineProperty(e,"test",{value:42}),!0}catch(t){return!1}}()||!function(e){var t=Object.prototype.hasOwnProperty("__defineGetter__"),n="Getters & setters cannot be defined on this javascript engine",o="A property cannot both have accessors and be writable or have a value";Object.defineProperty=function(r,i,c){if(e&&(r===window||r===document||r===Element.prototype||r instanceof Element))return e(r,i,c);if(null===r||!(r instanceof Object||"object"==typeof r))throw new TypeError("Object must be an object (Object.defineProperty polyfill)");if(!(c instanceof Object))throw new TypeError("Descriptor must be an object (Object.defineProperty polyfill)");var a=String(i),u="value"in c||"writable"in c,l="get"in c&&typeof c.get,s="set"in c&&typeof c.set;if(l){if("function"!==l)throw new TypeError("Getter expected a function (Object.defineProperty polyfill)");if(!t)throw new TypeError(n);if(u)throw new TypeError(o);r.__defineGetter__(a,c.get)}else r[a]=c.value;if(s){if("function"!==s)throw new TypeError("Setter expected a function (Object.defineProperty polyfill)");if(!t)throw new TypeError(n);if(u)throw new TypeError(o);r.__defineSetter__(a,c.set)}return"value"in c&&(r[a]=c.value),r}}(Object.defineProperty),function(e){if(!("Event"in e))return!1;if("function"==typeof e.Event)return!0;try{return new Event("click"),!0}catch(t){return!1}}(this)||!function(){function t(e,t){for(var n=-1,o=e.length;++n<o;)if(n in e&&e[n]===t)return n;return-1}var n={click:1,dblclick:1,keyup:1,keypress:1,keydown:1,mousedown:1,mouseup:1,mousemove:1,mouseover:1,mouseenter:1,mouseleave:1,mouseout:1,storage:1,storagecommit:1,textinput:1},o=window.Event&&window.Event.prototype||null;window.Event=Window.prototype.Event=function(t,n){if(!t)throw new Error("Not enough arguments");if("createEvent"in document){var o=document.createEvent("Event"),r=n&&n.bubbles!==e?n.bubbles:!1,i=n&&n.cancelable!==e?n.cancelable:!1;return o.initEvent(t,r,i),o}var o=document.createEventObject();return o.type=t,o.bubbles=n&&n.bubbles!==e?n.bubbles:!1,o.cancelable=n&&n.cancelable!==e?n.cancelable:!1,o},o&&Object.defineProperty(window.Event,"prototype",{configurable:!1,enumerable:!1,writable:!0,value:o}),"createEvent"in document||(window.addEventListener=Window.prototype.addEventListener=Document.prototype.addEventListener=Element.prototype.addEventListener=function(){var e=this,o=arguments[0],r=arguments[1];if(e===window&&o in n)throw new Error("In IE8 the event: "+o+" is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.");e._events||(e._events={}),e._events[o]||(e._events[o]=function(n){var o,r=e._events[n.type].list,i=r.slice(),c=-1,a=i.length;for(n.preventDefault=function(){n.cancelable!==!1&&(n.returnValue=!1)},n.stopPropagation=function(){n.cancelBubble=!0},n.stopImmediatePropagation=function(){n.cancelBubble=!0,n.cancelImmediate=!0},n.currentTarget=e,n.relatedTarget=n.fromElement||null,n.target=n.target||n.srcElement||e,n.timeStamp=(new Date).getTime(),n.clientX&&(n.pageX=n.clientX+document.documentElement.scrollLeft,n.pageY=n.clientY+document.documentElement.scrollTop);++c<a&&!n.cancelImmediate;)c in i&&(o=i[c],-1!==t(r,o)&&"function"==typeof o&&o.call(e,n))},e._events[o].list=[],e.attachEvent&&e.attachEvent("on"+o,e._events[o])),e._events[o].list.push(r)},window.removeEventListener=Window.prototype.removeEventListener=Document.prototype.removeEventListener=Element.prototype.removeEventListener=function(){var e,n=this,o=arguments[0],r=arguments[1];n._events&&n._events[o]&&n._events[o].list&&(e=t(n._events[o].list,r),-1!==e&&(n._events[o].list.splice(e,1),n._events[o].list.length||(n.detachEvent&&n.detachEvent("on"+o,n._events[o]),delete n._events[o])))},window.dispatchEvent=Window.prototype.dispatchEvent=Document.prototype.dispatchEvent=Element.prototype.dispatchEvent=function(e){if(!arguments.length)throw new Error("Not enough arguments");if(!e||"string"!=typeof e.type)throw new Error("DOM Events Exception 0");var t=this,n=e.type;try{if(!e.bubbles){e.cancelBubble=!0;var o=function(e){e.cancelBubble=!0,(t||window).detachEvent("on"+n,o)};this.attachEvent("on"+n,o)}this.fireEvent("on"+n,e)}catch(r){e.target=t;do e.currentTarget=t,"_events"in t&&"function"==typeof t._events[n]&&t._events[n].call(t,e),"function"==typeof t["on"+n]&&t["on"+n].call(t,e),t=9===t.nodeType?t.parentWindow:t.parentNode;while(t&&!e.cancelBubble)}return!0},document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&document.dispatchEvent(new Event("DOMContentLoaded",{bubbles:!0}))}))}()}).call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{});



/*===============================
/media/system/js/keepalive.js
================================================================================*/;
!function(){"use strict";document.addEventListener("DOMContentLoaded",function(){var o=Joomla.getOptions("system.keepalive"),n=o&&o.uri?o.uri.replace(/&amp;/g,"&"):"",t=o&&o.interval?o.interval:45e3;if(""===n){var e=Joomla.getOptions("system.paths");n=(e?e.root+"/index.php":window.location.pathname)+"?option=com_ajax&format=json"}window.setInterval(function(){Joomla.request({url:n,onSuccess:function(){},onError:function(){}})},t)})}(window,document,Joomla);



/*===============================
/media/system/js/punycode.js
================================================================================*/;
/*! https://mths.be/punycode v1.4.1 by @mathias - do not update to v2 */
!function(a){function b(a){throw new RangeError(E[a])}function c(a,b){for(var c=a.length,d=[];c--;)d[c]=b(a[c]);return d}function d(a,b){var d=a.split("@"),e="";d.length>1&&(e=d[0]+"@",a=d[1]),a=a.replace(D,".");var f=a.split("."),g=c(f,b).join(".");return e+g}function e(a){for(var b,c,d=[],e=0,f=a.length;f>e;)b=a.charCodeAt(e++),b>=55296&&56319>=b&&f>e?(c=a.charCodeAt(e++),56320==(64512&c)?d.push(((1023&b)<<10)+(1023&c)+65536):(d.push(b),e--)):d.push(b);return d}function f(a){return c(a,function(a){var b="";return a>65535&&(a-=65536,b+=H(a>>>10&1023|55296),a=56320|1023&a),b+=H(a)}).join("")}function g(a){return 10>a-48?a-22:26>a-65?a-65:26>a-97?a-97:t}function h(a,b){return a+22+75*(26>a)-((0!=b)<<5)}function i(a,b,c){var d=0;for(a=c?G(a/x):a>>1,a+=G(a/b);a>F*v>>1;d+=t)a=G(a/F);return G(d+(F+1)*a/(a+w))}function j(a){var c,d,e,h,j,k,l,m,n,o,p=[],q=a.length,r=0,w=z,x=y;for(d=a.lastIndexOf(A),0>d&&(d=0),e=0;d>e;++e)a.charCodeAt(e)>=128&&b("not-basic"),p.push(a.charCodeAt(e));for(h=d>0?d+1:0;q>h;){for(j=r,k=1,l=t;h>=q&&b("invalid-input"),m=g(a.charCodeAt(h++)),(m>=t||m>G((s-r)/k))&&b("overflow"),r+=m*k,n=x>=l?u:l>=x+v?v:l-x,!(n>m);l+=t)o=t-n,k>G(s/o)&&b("overflow"),k*=o;c=p.length+1,x=i(r-j,c,0==j),G(r/c)>s-w&&b("overflow"),w+=G(r/c),r%=c,p.splice(r++,0,w)}return f(p)}function k(a){var c,d,f,g,j,k,l,m,n,o,p,q,r,w,x,B=[];for(a=e(a),q=a.length,c=z,d=0,j=y,k=0;q>k;++k)p=a[k],128>p&&B.push(H(p));for(f=g=B.length,g&&B.push(A);q>f;){for(l=s,k=0;q>k;++k)p=a[k],p>=c&&l>p&&(l=p);for(r=f+1,l-c>G((s-d)/r)&&b("overflow"),d+=(l-c)*r,c=l,k=0;q>k;++k)if(p=a[k],c>p&&++d>s&&b("overflow"),p==c){for(m=d,n=t;o=j>=n?u:n>=j+v?v:n-j,!(o>m);n+=t)x=m-o,w=t-o,B.push(H(h(o+x%w,0))),m=G(x/w);B.push(H(h(m,0))),j=i(d,r,f==g),d=0,++f}++d,++c}return B.join("")}function l(a){return d(a,function(a){return B.test(a)?j(a.slice(4).toLowerCase()):a})}function m(a){return d(a,function(a){return C.test(a)?"xn--"+k(a):a})}var n="object"==typeof exports&&exports&&!exports.nodeType&&exports,o="object"==typeof module&&module&&!module.nodeType&&module,p="object"==typeof global&&global;(p.global===p||p.window===p||p.self===p)&&(a=p);var q,r,s=2147483647,t=36,u=1,v=26,w=38,x=700,y=72,z=128,A="-",B=/^xn--/,C=/[^\x20-\x7E]/,D=/[\x2E\u3002\uFF0E\uFF61]/g,E={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},F=t-u,G=Math.floor,H=String.fromCharCode;if(q={version:"1.4.1",ucs2:{decode:e,encode:f},decode:j,encode:k,toASCII:m,toUnicode:l},"function"==typeof define&&"object"==typeof define.amd&&define.amd)define("punycode",function(){return q});else if(n&&o)if(module.exports==n)o.exports=q;else for(r in q)q.hasOwnProperty(r)&&(n[r]=q[r]);else a.punycode=q}(this);


/*===============================
/media/system/js/validate.js
================================================================================*/;
var JFormValidator=function(){"use strict";function n(t,e,a){a=""===a||a,s[t]={enabled:a,exec:e}}function i(t,e){var a,r,n,i,l=e.data("label");void 0===l&&(a=e.attr("id"),r=e.get(0).form,i=jQuery(r),l=!!a&&((n=i.find("#"+a+"-lbl")).length?n:!!(n=i.find('label[for="'+a+'"]')).length&&n),e.data("label",l)),!1===t?(e.addClass("invalid").attr("aria-invalid","true"),l&&l.addClass("invalid")):(e.removeClass("invalid").attr("aria-invalid","false"),l&&l.removeClass("invalid"))}function o(t){var e,a=jQuery(t);if(a.attr("disabled"))return i(!0,a),!0;if(a.attr("required")||a.hasClass("required"))if("fieldset"===a.prop("tagName").toLowerCase()&&(a.hasClass("radio")||a.hasClass("checkboxes"))){if(!a.find("input:checked").length)return i(!1,a),!1}else if(!a.val()||a.hasClass("placeholder")||"checkbox"===a.attr("type")&&!a.is(":checked"))return i(!1,a),!1;if(e=a.attr("class")&&a.attr("class").match(/validate-([a-zA-Z0-9\_\-]+)/)?a.attr("class").match(/validate-([a-zA-Z0-9\_\-]+)/)[1]:"",a.attr("pattern")&&""!=a.attr("pattern")){if(a.val().length){var r=new RegExp("^"+a.attr("pattern")+"$").test(a.val());return i(r,a),r}return a.attr("required")||a.hasClass("required")?(i(!1,a),!1):(i(!0,a),!0)}return""===e?(i(!0,a),!0):e&&"none"!==e&&s[e]&&a.val()&&!0!==s[e].exec(a.val(),a)?(i(!1,a),!1):(i(!0,a),!0)}function u(t){var e,a,r,n,i,l,s=!0,u=[];for(i=0,l=(e=jQuery(t).find("input, textarea, select, fieldset")).length;i<l;i++)jQuery(e[i]).hasClass("novalidate")||!1===o(e[i])&&(s=!1,u.push(e[i]));if(jQuery.each(c,function(t,e){!0!==e.exec()&&(s=!1)}),!s&&0<u.length){for(a=Joomla.JText._("JLIB_FORM_FIELD_INVALID"),r={error:[]},i=u.length-1;0<=i;i--)(n=jQuery(u[i]).data("label"))&&r.error.push(a+n.text().replace("*",""));Joomla.renderMessages(r)}return s}function l(t){for(var e,a=[],r=jQuery(t),n=0,i=(e=r.find("input, textarea, select, fieldset, button")).length;n<i;n++){var l=jQuery(e[n]),s=l.prop("tagName").toLowerCase();"input"!==s&&"button"!==s||"submit"!==l.attr("type")&&"image"!==l.attr("type")?"button"===s||"input"===s&&"button"===l.attr("type")||(l.hasClass("required")&&l.attr("aria-required","true").attr("required","required"),"fieldset"!==s&&(l.on("blur",function(){return o(this)}),l.hasClass("validate-email")&&d&&e[n].setAttribute("type","email")),a.push(l)):l.hasClass("validate")&&l.on("click",function(){return u(t)})}r.data("inputfields",a)}var s,d,c;return function(){var t;s={},c=c||{},(t=document.createElement("input")).setAttribute("type","email"),d="text"!==t.type,n("username",function(t,e){return!new RegExp("[<|>|\"|'|%|;|(|)|&]","i").test(t)}),n("password",function(t,e){return/^\S[\S ]{2,98}\S$/.test(t)}),n("numeric",function(t,e){return/^(\d|-)?(\d|,)*\.?\d*$/.test(t)}),n("email",function(t,e){t=punycode.toASCII(t);return/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t)});for(var e=jQuery("form.form-validate"),a=0,r=e.length;a<r;a++)l(e[a])}(),{isValid:u,validate:o,setHandler:n,attachToForm:l,custom:c}};document.formvalidator=null,jQuery(function(){document.formvalidator=new JFormValidator});



/*===============================
/media/jui/js/jquery.ui.core.min.js
================================================================================*/;
/*! jQuery UI - v1.9.2 - 2013-07-14
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js
* Copyright 2013 jQuery Foundation and other contributors Licensed MIT
*
* Modified by Joomla: Mitigate possible XSS vulnerability, CVE-2021-41184, https://github.com/jquery/jquery-ui/commit/effa323f1505f2ce7a324e4f429fa9032c72f280
*/
!function(a,u){var e,t,i=0,o=/^ui-id-\d+$/;function n(t,e){var i,o,n=t.nodeName.toLowerCase();return"area"===n?(o=(i=t.parentNode).name,!(!t.href||!o||"map"!==i.nodeName.toLowerCase())&&(!!(o=a("img[usemap=#"+o+"]")[0])&&s(o))):(/input|select|textarea|button|object/.test(n)?!t.disabled:"a"===n&&t.href||e)&&s(t)}function s(t){return a.expr.filters.visible(t)&&!a(t).parents().andSelf().filter(function(){return"hidden"===a.css(this,"visibility")}).length}a.ui=a.ui||{},a.ui.version||(a.extend(a.ui,{version:"1.9.2",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),a.fn.extend({_focus:a.fn.focus,focus:function(e,i){return"number"==typeof e?this.each(function(){var t=this;setTimeout(function(){a(t).focus(),i&&i.call(t)},e)}):this._focus.apply(this,arguments)},scrollParent:function(){var t=(a.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(a.css(this,"position"))&&/(auto|scroll)/.test(a.css(this,"overflow")+a.css(this,"overflow-y")+a.css(this,"overflow-x"))}):this.parents().filter(function(){return/(auto|scroll)/.test(a.css(this,"overflow")+a.css(this,"overflow-y")+a.css(this,"overflow-x"))})).eq(0);return/fixed/.test(this.css("position"))||!t.length?a(document):t},zIndex:function(t){if(t!==u)return this.css("zIndex",t);if(this.length)for(var e,i,o=a(this[0]);o.length&&o[0]!==document;){if(e=o.css("position"),("absolute"===e||"relative"===e||"fixed"===e)&&(i=parseInt(o.css("zIndex"),10),!isNaN(i)&&0!==i))return i;o=o.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++i)})},removeUniqueId:function(){return this.each(function(){o.test(this.id)&&a(this).removeAttr("id")})}}),a.extend(a.expr[":"],{data:a.expr.createPseudo?a.expr.createPseudo(function(e){return function(t){return!!a.data(t,e)}}):function(t,e,i){return!!a.data(t,i[3])},focusable:function(t){return n(t,!isNaN(a.attr(t,"tabindex")))},tabbable:function(t){var e=a.attr(t,"tabindex"),i=isNaN(e);return(i||0<=e)&&n(t,!i)}}),a(function(){var t=document.body,e=t.appendChild(document.createElement("div"));e.offsetHeight,a.extend(e.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0}),a.support.minHeight=100===e.offsetHeight,a.support.selectstart="onselectstart"in e,t.removeChild(e).style.display="none"}),a("<a>").outerWidth(1).jquery||a.each(["Width","Height"],function(t,i){var n="Width"===i?["Left","Right"]:["Top","Bottom"],o=i.toLowerCase(),s={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};function r(t,e,i,o){return a.each(n,function(){e-=parseFloat(a.css(t,"padding"+this))||0,i&&(e-=parseFloat(a.css(t,"border"+this+"Width"))||0),o&&(e-=parseFloat(a.css(t,"margin"+this))||0)}),e}a.fn["inner"+i]=function(t){return t===u?s["inner"+i].call(this):this.each(function(){a(this).css(o,r(this,t)+"px")})},a.fn["outer"+i]=function(t,e){return"number"!=typeof t?s["outer"+i].call(this,t):this.each(function(){a(this).css(o,r(this,t,!0,e)+"px")})}}),a("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(a.fn.removeData=(e=a.fn.removeData,function(t){return arguments.length?e.call(this,a.camelCase(t)):e.call(this)})),t=/msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase())||[],a.ui.ie=!!t.length,a.ui.ie6=6===parseFloat(t[1],10),a.fn.extend({disableSelection:function(){return this.bind((a.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(t){t.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),a.extend(a.ui,{plugin:{add:function(t,e,i){var o,n=a.ui[t].prototype;for(o in i)n.plugins[o]=n.plugins[o]||[],n.plugins[o].push([e,i[o]])},call:function(t,e,i){var o,n=t.plugins[e];if(n&&t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType)for(o=0;o<n.length;o++)t.options[n[o][0]]&&n[o][1].apply(t.element,i)}},contains:a.contains,hasScroll:function(t,e){if("hidden"===a(t).css("overflow"))return!1;var i=e&&"left"===e?"scrollLeft":"scrollTop",e=!1;return 0<t[i]||(t[i]=1,e=0<t[i],t[i]=0,e)},isOverAxis:function(t,e,i){return e<t&&t<e+i},isOver:function(t,e,i,o,n,s){return a.ui.isOverAxis(t,i,n)&&a.ui.isOverAxis(e,o,s)}}))}(jQuery),function(u,a){var i=0,l=Array.prototype.slice,o=u.cleanData;u.cleanData=function(t){for(var e,i=0;null!=(e=t[i]);i++)try{u(e).triggerHandler("remove")}catch(t){}o(t)},u.widget=function(t,i,r){var e,o,n,s,a=t.split(".")[0];t=t.split(".")[1],e=a+"-"+t,r||(r=i,i=u.Widget),u.expr[":"][e.toLowerCase()]=function(t){return!!u.data(t,e)},u[a]=u[a]||{},o=u[a][t],n=u[a][t]=function(t,e){if(!this._createWidget)return new n(t,e);arguments.length&&this._createWidget(t,e)},u.extend(n,o,{version:r.version,_proto:u.extend({},r),_childConstructors:[]}),(s=new i).options=u.widget.extend({},s.options),u.each(r,function(e,o){function n(){return i.prototype[e].apply(this,arguments)}function s(t){return i.prototype[e].apply(this,t)}u.isFunction(o)&&(r[e]=function(){var t,e=this._super,i=this._superApply;return this._super=n,this._superApply=s,t=o.apply(this,arguments),this._super=e,this._superApply=i,t})}),n.prototype=u.widget.extend(s,{widgetEventPrefix:o?s.widgetEventPrefix:t},r,{constructor:n,namespace:a,widgetName:t,widgetBaseClass:e,widgetFullName:e}),o?(u.each(o._childConstructors,function(t,e){var i=e.prototype;u.widget(i.namespace+"."+i.widgetName,n,e._proto)}),delete o._childConstructors):i._childConstructors.push(n),u.widget.bridge(t,n)},u.widget.extend=function(t){for(var e,i,o=l.call(arguments,1),n=0,s=o.length;n<s;n++)for(e in o[n])i=o[n][e],o[n].hasOwnProperty(e)&&i!==a&&(u.isPlainObject(i)?t[e]=u.isPlainObject(t[e])?u.widget.extend({},t[e],i):u.widget.extend({},i):t[e]=i);return t},u.widget.bridge=function(s,e){var r=e.prototype.widgetFullName||s;u.fn[s]=function(i){var t="string"==typeof i,o=l.call(arguments,1),n=this;return i=!t&&o.length?u.widget.extend.apply(null,[i].concat(o)):i,t?this.each(function(){var t,e=u.data(this,r);return e?u.isFunction(e[i])&&"_"!==i.charAt(0)?(t=e[i].apply(e,o))!==e&&t!==a?(n=t&&t.jquery?n.pushStack(t.get()):t,!1):void 0:u.error("no such method '"+i+"' for "+s+" widget instance"):u.error("cannot call methods on "+s+" prior to initialization; attempted to call method '"+i+"'")}):this.each(function(){var t=u.data(this,r);t?t.option(i||{})._init():u.data(this,r,new e(i,this))}),n}},u.Widget=function(){},u.Widget._childConstructors=[],u.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,e){e=u(e||this.defaultElement||this)[0],this.element=u(e),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=u.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=u(),this.hoverable=u(),this.focusable=u(),e!==this&&(u.data(e,this.widgetName,this),u.data(e,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===e&&this.destroy()}}),this.document=u(e.style?e.ownerDocument:e.document||e),this.window=u(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:u.noop,_getCreateEventData:u.noop,_create:u.noop,_init:u.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(u.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:u.noop,widget:function(){return this.element},option:function(t,e){var i,o,n,s=t;if(0===arguments.length)return u.widget.extend({},this.options);if("string"==typeof t)if(s={},t=(i=t.split(".")).shift(),i.length){for(o=s[t]=u.widget.extend({},this.options[t]),n=0;n<i.length-1;n++)o[i[n]]=o[i[n]]||{},o=o[i[n]];if(t=i.pop(),e===a)return o[t]===a?null:o[t];o[t]=e}else{if(e===a)return this.options[t]===a?null:this.options[t];s[t]=e}return this._setOptions(s),this},_setOptions:function(t){for(var e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!e).attr("aria-disabled",e),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(n,s,t){var r,a=this;"boolean"!=typeof n&&(t=s,s=n,n=!1),t?(s=r=u(s),this.bindings=this.bindings.add(s)):(t=s,s=this.element,r=this.widget()),u.each(t,function(t,e){function i(){if(n||!0!==a.options.disabled&&!u(this).hasClass("ui-state-disabled"))return("string"==typeof e?a[e]:e).apply(a,arguments)}"string"!=typeof e&&(i.guid=e.guid=e.guid||i.guid||u.guid++);var o=t.match(/^(\w+)\s*(.*)$/),t=o[1]+a.eventNamespace,o=o[2];o?r.delegate(o,t,i):s.bind(t,i)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(e).undelegate(e)},_delay:function(t,e){var i=this;return setTimeout(function(){return("string"==typeof t?i[t]:t).apply(i,arguments)},e||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){u(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){u(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){u(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){u(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,e,i){var o,n,s=this.options[t];if(i=i||{},(e=u.Event(e)).type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),e.target=this.element[0],n=e.originalEvent)for(o in n)o in e||(e[o]=n[o]);return this.element.trigger(e,i),!(u.isFunction(s)&&!1===s.apply(this.element[0],[e].concat(i))||e.isDefaultPrevented())}},u.each({show:"fadeIn",hide:"fadeOut"},function(s,r){u.Widget.prototype["_"+s]=function(e,t,i){"string"==typeof t&&(t={effect:t});var o,n=t?!0!==t&&"number"!=typeof t&&t.effect||r:s;"number"==typeof(t=t||{})&&(t={duration:t}),o=!u.isEmptyObject(t),t.complete=i,t.delay&&e.delay(t.delay),o&&u.effects&&(u.effects.effect[n]||!1!==u.uiBackCompat&&u.effects[n])?e[s](t):n!==s&&e[n]?e[n](t.duration,t.easing,i):e.queue(function(t){u(this)[s](),i&&i.call(e[0]),t()})}}),!1!==u.uiBackCompat&&(u.Widget.prototype._getCreateOptions=function(){return u.metadata&&u.metadata.get(this.element[0])[this.widgetName]})}(jQuery),function(n){var s=!1;n(document).mouseup(function(t){s=!1}),n.widget("ui.mouse",{version:"1.9.2",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.bind("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).bind("click."+this.widgetName,function(t){if(!0===n.data(t.target,e.widgetName+".preventClickEvent"))return n.removeData(t.target,e.widgetName+".preventClickEvent"),t.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&n(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(t){if(!s){this._mouseStarted&&this._mouseUp(t),this._mouseDownEvent=t;var e=this,i=1===t.which,o=!("string"!=typeof this.options.cancel||!t.target.nodeName)&&n(t.target).closest(this.options.cancel).length;return i&&!o&&this._mouseCapture(t)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){e.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=!1!==this._mouseStart(t),!this._mouseStarted)?(t.preventDefault(),!0):(!0===n.data(t.target,this.widgetName+".preventClickEvent")&&n.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return e._mouseMove(t)},this._mouseUpDelegate=function(t){return e._mouseUp(t)},n(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),s=!0)):!0}},_mouseMove:function(t){return!n.ui.ie||9<=document.documentMode||t.button?this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=!1!==this._mouseStart(this._mouseDownEvent,t),this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted):this._mouseUp(t)},_mouseUp:function(t){return n(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&n.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),!1},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(t){return this.mouseDelayMet},_mouseStart:function(t){},_mouseDrag:function(t){},_mouseStop:function(t){},_mouseCapture:function(t){return!0}})}(jQuery),function(x){x.ui=x.ui||{};var o,n,s,D=Math.max,N=Math.abs,W=Math.round,r=/left|center|right/,a=/top|center|bottom/,u=/[\+\-]\d+%?/,l=/^\w+/,h=/%$/,e=x.fn.position;function C(t,e,i){return[parseInt(t[0],10)*(h.test(t[0])?e/100:1),parseInt(t[1],10)*(h.test(t[1])?i/100:1)]}function E(t,e){return parseInt(x.css(t,e),10)||0}x.position={scrollbarWidth:function(){if(void 0!==o)return o;var t,e=x("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),i=e.children()[0];return x("body").append(e),t=i.offsetWidth,e.css("overflow","scroll"),t===(i=i.offsetWidth)&&(i=e[0].clientWidth),e.remove(),o=t-i},getScrollInfo:function(t){var e=t.isWindow?"":t.element.css("overflow-x"),i=t.isWindow?"":t.element.css("overflow-y"),e="scroll"===e||"auto"===e&&t.width<t.element[0].scrollWidth,t="scroll"===i||"auto"===i&&t.height<t.element[0].scrollHeight;return{width:e?x.position.scrollbarWidth():0,height:t?x.position.scrollbarWidth():0}},getWithinInfo:function(t){var e=x(t||window),t=x.isWindow(e[0]);return{element:e,isWindow:t,offset:e.offset()||{left:0,top:0},scrollLeft:e.scrollLeft(),scrollTop:e.scrollTop(),width:t?e.width():e.outerWidth(),height:t?e.height():e.outerHeight()}}},x.fn.position=function(c){if(!c||!c.of)return e.apply(this,arguments);var d,f,p,m="string"==typeof(c=x.extend({},c)).of?x(document).find(c.of):x(c.of),g=x.position.getWithinInfo(c.within),v=x.position.getScrollInfo(g),t=m[0],w=(c.collision||"flip").split(" "),y={},_=9===t.nodeType?(f=m.width(),p=m.height(),{top:0,left:0}):x.isWindow(t)?(f=m.width(),p=m.height(),{top:m.scrollTop(),left:m.scrollLeft()}):t.preventDefault?(c.at="left top",f=p=0,{top:t.pageY,left:t.pageX}):(f=m.outerWidth(),p=m.outerHeight(),m.offset()),b=x.extend({},_);return x.each(["my","at"],function(){var t,e,i=(c[this]||"").split(" ");1===i.length&&(i=r.test(i[0])?i.concat(["center"]):a.test(i[0])?["center"].concat(i):["center","center"]),i[0]=r.test(i[0])?i[0]:"center",i[1]=a.test(i[1])?i[1]:"center",t=u.exec(i[0]),e=u.exec(i[1]),y[this]=[t?t[0]:0,e?e[0]:0],c[this]=[l.exec(i[0])[0],l.exec(i[1])[0]]}),1===w.length&&(w[1]=w[0]),"right"===c.at[0]?b.left+=f:"center"===c.at[0]&&(b.left+=f/2),"bottom"===c.at[1]?b.top+=p:"center"===c.at[1]&&(b.top+=p/2),d=C(y.at,f,p),b.left+=d[0],b.top+=d[1],this.each(function(){var i,t,r=x(this),a=r.outerWidth(),u=r.outerHeight(),e=E(this,"marginLeft"),o=E(this,"marginTop"),n=a+e+E(this,"marginRight")+v.width,s=u+o+E(this,"marginBottom")+v.height,l=x.extend({},b),h=C(y.my,r.outerWidth(),r.outerHeight());"right"===c.my[0]?l.left-=a:"center"===c.my[0]&&(l.left-=a/2),"bottom"===c.my[1]?l.top-=u:"center"===c.my[1]&&(l.top-=u/2),l.left+=h[0],l.top+=h[1],x.support.offsetFractions||(l.left=W(l.left),l.top=W(l.top)),i={marginLeft:e,marginTop:o},x.each(["left","top"],function(t,e){x.ui.position[w[t]]&&x.ui.position[w[t]][e](l,{targetWidth:f,targetHeight:p,elemWidth:a,elemHeight:u,collisionPosition:i,collisionWidth:n,collisionHeight:s,offset:[d[0]+h[0],d[1]+h[1]],my:c.my,at:c.at,within:g,elem:r})}),x.fn.bgiframe&&r.bgiframe(),c.using&&(t=function(t){var e=_.left-l.left,i=e+f-a,o=_.top-l.top,n=o+p-u,s={target:{element:m,left:_.left,top:_.top,width:f,height:p},element:{element:r,left:l.left,top:l.top,width:a,height:u},horizontal:i<0?"left":0<e?"right":"center",vertical:n<0?"top":0<o?"bottom":"middle"};f<a&&N(e+i)<f&&(s.horizontal="center"),p<u&&N(o+n)<p&&(s.vertical="middle"),D(N(e),N(i))>D(N(o),N(n))?s.important="horizontal":s.important="vertical",c.using.call(this,t,s)}),r.offset(x.extend(l,{using:t}))})},x.ui.position={fit:{left:function(t,e){var i=e.within,o=i.isWindow?i.scrollLeft:i.offset.left,n=i.width,s=t.left-e.collisionPosition.marginLeft,r=o-s,a=s+e.collisionWidth-n-o;e.collisionWidth>n?0<r&&a<=0?(i=t.left+r+e.collisionWidth-n-o,t.left+=r-i):t.left=!(0<a&&r<=0)&&a<r?o+n-e.collisionWidth:o:0<r?t.left+=r:0<a?t.left-=a:t.left=D(t.left-s,t.left)},top:function(t,e){var i=e.within,o=i.isWindow?i.scrollTop:i.offset.top,n=e.within.height,s=t.top-e.collisionPosition.marginTop,r=o-s,a=s+e.collisionHeight-n-o;e.collisionHeight>n?0<r&&a<=0?(i=t.top+r+e.collisionHeight-n-o,t.top+=r-i):t.top=!(0<a&&r<=0)&&a<r?o+n-e.collisionHeight:o:0<r?t.top+=r:0<a?t.top-=a:t.top=D(t.top-s,t.top)}},flip:{left:function(t,e){var i=e.within,o=i.offset.left+i.scrollLeft,n=i.width,s=i.isWindow?i.scrollLeft:i.offset.left,r=t.left-e.collisionPosition.marginLeft,a=r-s,u=r+e.collisionWidth-n-s,l="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,i="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,r=-2*e.offset[0];a<0?((o=t.left+l+i+r+e.collisionWidth-n-o)<0||o<N(a))&&(t.left+=l+i+r):0<u&&(0<(s=t.left-e.collisionPosition.marginLeft+l+i+r-s)||N(s)<u)&&(t.left+=l+i+r)},top:function(t,e){var i=e.within,o=i.offset.top+i.scrollTop,n=i.height,s=i.isWindow?i.scrollTop:i.offset.top,r=t.top-e.collisionPosition.marginTop,a=r-s,u=r+e.collisionHeight-n-s,l="top"===e.my[1]?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,i="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,r=-2*e.offset[1];a<0?(o=t.top+l+i+r+e.collisionHeight-n-o,t.top+l+i+r>a&&(o<0||o<N(a))&&(t.top+=l+i+r)):0<u&&(s=t.top-e.collisionPosition.marginTop+l+i+r-s,t.top+l+i+r>u&&(0<s||N(s)<u)&&(t.top+=l+i+r))}},flipfit:{left:function(){x.ui.position.flip.left.apply(this,arguments),x.ui.position.fit.left.apply(this,arguments)},top:function(){x.ui.position.flip.top.apply(this,arguments),x.ui.position.fit.top.apply(this,arguments)}}},function(){var t,e=document.getElementsByTagName("body")[0],i=document.createElement("div"),o=document.createElement(e?"div":"body"),n={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"};for(t in e&&x.extend(n,{position:"absolute",left:"-1000px",top:"-1000px"}),n)o.style[t]=n[t];o.appendChild(i),(e=e||document.documentElement).insertBefore(o,e.firstChild),i.style.cssText="position: absolute; left: 10.7432222px;",i=x(i).offset().left,x.support.offsetFractions=10<i&&i<11,o.innerHTML="",e.removeChild(o)}(),!1!==x.uiBackCompat&&(n=jQuery,s=n.fn.position,n.fn.position=function(t){if(!t||!t.offset)return s.call(this,t);var e=t.offset.split(" "),i=t.at.split(" ");return 1===e.length&&(e[1]=e[0]),/^\d/.test(e[0])&&(e[0]="+"+e[0]),/^\d/.test(e[1])&&(e[1]="+"+e[1]),1===i.length&&(/left|center|right/.test(i[0])?i[1]="center":(i[1]=i[0],i[0]="center")),s.call(this,n.extend(t,{at:i[0]+e[0]+" "+i[1]+e[1],offset:void 0}))})}(jQuery);



/*===============================
/plugins/system/t3/base-bs3/js/jquery.tap.min.js
================================================================================*/;
!function(a,b){"use strict";var c,d,e,f="._tap",g="._tapActive",h="tap",i="clientX clientY screenX screenY pageX pageY".split(" "),j={count:0,event:0},k=function(a,c){var d=c.originalEvent,e=b.Event(d);e.type=a;for(var f=0,g=i.length;g>f;f++)e[i[f]]=c[i[f]];return e},l=function(a){if(a.isTrigger)return!1;var c=j.event,d=Math.abs(a.pageX-c.pageX),e=Math.abs(a.pageY-c.pageY),f=Math.max(d,e);return a.timeStamp-c.timeStamp<b.tap.TIME_DELTA&&f<b.tap.POSITION_DELTA&&(!c.touches||1===j.count)&&o.isTracking},m=function(a){if(!e)return!1;var c=Math.abs(a.pageX-e.pageX),d=Math.abs(a.pageY-e.pageY),f=Math.max(c,d);return Math.abs(a.timeStamp-e.timeStamp)<750&&f<b.tap.POSITION_DELTA},n=function(a){if(0===a.type.indexOf("touch")){a.touches=a.originalEvent.changedTouches;for(var b=a.touches[0],c=0,d=i.length;d>c;c++)a[i[c]]=b[i[c]]}a.timeStamp=Date.now?Date.now():+new Date},o={isEnabled:!1,isTracking:!1,enable:function(){o.isEnabled||(o.isEnabled=!0,c=b(a.body).on("touchstart"+f,o.onStart).on("mousedown"+f,o.onStart).on("click"+f,o.onClick))},disable:function(){o.isEnabled&&(o.isEnabled=!1,c.off(f))},onStart:function(a){a.isTrigger||(n(a),(!b.tap.LEFT_BUTTON_ONLY||a.touches||1===a.which)&&(a.touches&&(j.count=a.touches.length),o.isTracking||(a.touches||!m(a))&&(o.isTracking=!0,j.event=a,a.touches?(e=a,c.on("touchend"+f+g,o.onEnd).on("touchcancel"+f+g,o.onCancel)):c.on("mouseup"+f+g,o.onEnd))))},onEnd:function(a){var c;a.isTrigger||(n(a),l(a)&&(c=k(h,a),d=c,b(j.event.target).trigger(c)),o.onCancel(a))},onCancel:function(a){a&&"touchcancel"===a.type&&a.preventDefault(),o.isTracking=!1,c.off(g)},onClick:function(a){return!a.isTrigger&&d&&d.isDefaultPrevented()&&d.target===a.target&&d.pageX===a.pageX&&d.pageY===a.pageY&&a.timeStamp-d.timeStamp<750?(d=null,!1):void 0}};b(a).ready(o.enable),b.tap={POSITION_DELTA:10,TIME_DELTA:400,LEFT_BUTTON_ONLY:!0}}(document,jQuery);


/*===============================
/plugins/system/t3/base-bs3/js/script.js
================================================================================*/;
/** 
 *------------------------------------------------------------------------------
 * @package       T3 Framework for Joomla!
 *------------------------------------------------------------------------------
 * @copyright     Copyright (C) 2004-2013 JoomlArt.com. All Rights Reserved.
 * @license       GNU General Public License version 2 or later; see LICENSE.txt
 * @authors       JoomlArt, JoomlaBamboo, (contribute to this project at github 
 *                & Google group to become co-author)
 * @Google group: https://groups.google.com/forum/#!forum/t3fw
 * @Link:         http://t3-framework.org 
 *------------------------------------------------------------------------------
 */

!function($){

  // legacy for $.browser to detect IE
  if ($.browser == undefined || $.browser.msie == undefined) {
    $.browser={msie:false,version:0};
    if (match = navigator.userAgent.match (/MSIE ([0-9]{1,}[\.0-9]{0,})/) || navigator.userAgent.match (/Trident.*rv:([0-9]{1,}[\.0-9]{0,})/)) {
      $.browser.msie=true;
      $.browser.version=match[1];
    }
  }
	// add ie version to html tag
  if ($.browser.msie) {
    $('html').addClass('ie'+ Math.floor($.browser.version));
  }

	// Detect grid-float-breakpoint value and put to $(body) data
	$(document).ready(function(){
			if (!window.getComputedStyle) {
					window.getComputedStyle = function(el, pseudo) {
							this.el = el;
							this.getPropertyValue = function(prop) {
									var re = /(\-([a-z]){1})/g;
									if (prop == 'float') prop = 'styleFloat';
									if (re.test(prop)) {
											prop = prop.replace(re, function () {
													return arguments[2].toUpperCase();
											});
									}
									return el.currentStyle[prop] ? el.currentStyle[prop] : null;
							}
							return this;
					}
			}
			var fromClass = 'body-data-holder',
					prop = 'content',
					$inspector = $('<div>').css('display', 'none').addClass(fromClass).appendTo($('body'));

			try {
				
				var computedStyle = window.getComputedStyle(
							$inspector[0], ':before'
					);
				if (computedStyle) {
					var attrs = computedStyle.getPropertyValue(prop);
					if(attrs){
							var matches = attrs.match(/([\da-z\-]+)/gi),
									data = {};
							if (matches && matches.length) {
									for (var i=0; i<matches.length; i++) {
											data[matches[i++]] = i<matches.length ? matches[i] : null;
									}
							}
							$('body').data (data);
					}
				}
			} finally {
					$inspector.remove(); // and remove from DOM
			}
	});
	
	
	//detect transform (https://github.com/cubiq/)
	(function(){
		$.support.t3transform = (function () {
			var style = document.createElement('div').style,
			vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
			transform, i = 0, l = vendors.length;

			for ( ; i < l; i++ ) {
				transform = vendors[i] + 'ransform';
				if ( transform in style ) {
					return transform;
				}
			}

			return false;
		})();

	})();
	
	//basic detect touch
	(function(){
		$('html').addClass('ontouchstart' in window ? 'touch' : 'no-touch');
	})();
	
	//document ready
	$(document).ready(function(){

		//remove conflict of mootools more show/hide function of element
		(function(){
			if(window.MooTools && window.MooTools.More && Element && Element.implement){

				var mthide = Element.prototype.hide,
					mtshow = Element.prototype.show,
					mtslide = Element.prototype.slide;

				Element.implement({
					show: function(args){
						if(arguments.callee &&
							arguments.callee.caller &&
							arguments.callee.caller.toString().indexOf('isPropagationStopped') !== -1){	//jquery mark
							return this;
						}

						return $.isFunction(mtshow) && mtshow.apply(this, args);
					},

					hide: function(){
						if(arguments.callee &&
							arguments.callee.caller &&
							arguments.callee.caller.toString().indexOf('isPropagationStopped') !== -1){	//jquery mark
							return this;
						}

						return $.isFunction(mthide) && mthide.apply(this, arguments);
					},

					slide: function(args){
						if(arguments.callee &&
							arguments.callee.caller &&
							arguments.callee.caller.toString().indexOf('isPropagationStopped') !== -1){	//jquery mark
							return this;
						}

						return $.isFunction(mtslide) && mtslide.apply(this, args);
					}
				})
			}
		})();

		// overwrite default tooltip/popover behavior (same as Joomla 3.1.5)
		$.fn.tooltip.Constructor && $.fn.tooltip.Constructor.DEFAULTS && ($.fn.tooltip.Constructor.DEFAULTS.html = true);
		$.fn.popover.Constructor && $.fn.popover.Constructor.DEFAULTS && ($.fn.popover.Constructor.DEFAULTS.html = true);
		$.fn.tooltip.defaults && ($.fn.tooltip.defaults.html = true);
		$.fn.popover.defaults && ($.fn.popover.defaults.html = true);

		//fix JomSocial navbar-collapse toggle
		(function(){
			if(window.jomsQuery && jomsQuery.fn.collapse){
			
				$('[data-toggle="collapse"]').on('click', function(e){
					
					//toggle manual
					$($(this).attr('data-target')).eq(0).collapse('toggle');
					
					//stop
					e.stopPropagation();

					return false;
				});

				//remove conflict on touch screen
				jomsQuery('html, body').off('touchstart.dropdown.data-api');
			}	
		})();


		//fix chosen select
		(function(){
			if($.fn.chosen && $(document.documentElement).attr('dir') == 'rtl'){
				$('select').addClass('chzn-rtl');
			}	
		})();

	});

	$(window).on('load',function(){

		//fix animation for navbar-collapse-fixed-top||bottom
		if(!$(document.documentElement).hasClass('off-canvas-ready') &&
			($('.navbar-collapse-fixed-top').length ||
			$('.navbar-collapse-fixed-bottom').length)){

			var btn = $('.btn-navbar[data-toggle="collapse"]');
			if (!btn.length){
				return;
			}

			if(btn.data('target')){
				var nav = $(btn.data('target'));
				if(!nav.length){
					return;
				}

				var fixedtop = nav.closest('.navbar-collapse-fixed-top').length;

				btn.on('click', function(){

					var wheight = (window.innerHeight || $(window).height());

					if(!$.support.transition){
						nav.parent().css('height', !btn.hasClass('collapsed') && btn.data('t3-clicked') ? '' : wheight);
						btn.data('t3-clicked', 1);
					}

					nav
						.addClass('animate')
						.css('max-height', wheight -
							(fixedtop ? (parseFloat(nav.css('top')) || 0) : (parseFloat(nav.css('bottom')) || 0)));
				});
				nav.on('shown hidden', function(){
					nav.removeClass('animate');
				});
			}
		}

	});

}(jQuery);


/*===============================
/plugins/system/t3/base-bs3/js/menu.js
================================================================================*/;
/**
 * ------------------------------------------------------------------------------
 * 
 * @package T3 Framework for Joomla!
 *          ------------------------------------------------------------------------------
 * @copyright Copyright (C) 2004-2013 JoomlArt.com. All Rights Reserved.
 * @license GNU General Public License version 2 or later; see LICENSE.txt
 * @authors JoomlArt, JoomlaBamboo, (contribute to this project at github &
 *          Google group to become co-author)
 * @Google group: https://groups.google.com/forum/#!forum/t3fw
 * @Link: http://t3-framework.org
 *        ------------------------------------------------------------------------------
 */

;
(function($) {

	var T3Menu = function(elm, options) {
		this.$menu = $(elm);
		if (!this.$menu.length) {
			return;
		}

		this.options = $.extend({}, $.fn.t3menu.defaults, options);
		this.child_open = [];
		this.loaded = false;

		this.start();
	};

	T3Menu.prototype = {
		constructor : T3Menu,

		start : function() {
			// init once
			if (this.loaded) {
				return;
			}
			this.loaded = true;

			// start
			var self = this, options = this.options, $menu = this.$menu;

			this.$items = $menu.find('li');
			this.$items
					.each(function(idx, li) {

						var $item = $(this), $child = $item
								.children('.dropdown-menu'), $link = $item
								.children('a'), item = {
							$item : $item,
							child : $child.length,
							link : $link.length,
							clickable : !($link.length && $child.length),
							mega : $item.hasClass('mega'),
							status : 'close',
							timer : null,
							atimer : null
						};

						// store
						$item.data('t3menu.item', item);

						// click action
						if ($child.length && !options.hover) {
							$item.on('click', function(e) {
								e.stopPropagation();

								if ($item.hasClass('group')) {
									return;
								}

								if (item.status == 'close') {
									e.preventDefault();
									self.show(item);
								}
							});
						} else {

							// stop if click on menu item - prevent bubble event
							$item.on('click', function(e) {
								// ignore if this is toggle button
								if ($(e.target).data('toggle')) return;
								e.stopPropagation()
							});
						}

						// click on caret, no action on link
						$item.find('a > .caret').on('click tap', function(e) {
							item.clickable = false;
						});

						if (options.hover) {
							$item.on('mouseover', function(e) {
								if ($item.hasClass('group'))
									return;

								// check and handle only once - replace for
								// stopPropagation
								var $target = $(e.target);
								if ($target.data('show-processed'))
									return;
								$target.data('show-processed', true);
								setTimeout(function() {
									$target.data('show-processed', false);
								}, 10);

								self.show(item);

							}).on('mouseleave', function(e) {
								if ($item.hasClass('group'))
									return;

								// check and handle only once - replace for
								// stopPropagation
								var $target = $(e.target);
								if ($target.data('hide-processed'))
									return;
								$target.data('hide-processed', true);
								setTimeout(function() {
									$target.data('hide-processed', false);
								}, 10);

								self.hide(item, $target);
							});

							// if has child, don't goto link before open child -
							// fix for touch screen
							if ($link.length && $child.length) {
								$link.on('click', function(e) {
									if (item.clickable) {
										e.stopPropagation();
									}
									return item.clickable;
								});
							}
						}

					});

			$(document.body)
					.on(
							'tap hideall.t3menu',
							function(e) {
								clearTimeout(self.timer);
								self.timer = setTimeout($.proxy(self.hide_alls,
										self), e.type == 'tap' ? 500
										: self.options.hidedelay);
							});

			// ignore click on direct child
			$menu.find('.mega-dropdown-menu').on('hideall.t3menu', function(e) {
				e.stopPropagation();
				e.preventDefault();
				return false;
			});

			// prevent close menu if click on form element
			$menu.find('input, select, textarea, label').on('click tap',
					function(e) {
						e.stopPropagation();
					});

			// update mega-tab height
			var $megatab = $menu.find('.mega-tab');
			if ($megatab.length) {
				$megatab.each(function() {
					var $tabul = $(this).find('>div>ul'), 
						$tabItems = $tabul.children('.dropdown-submenu'),
						$tabs = $tabul.find('>li>.dropdown-menu'), 
						tabheight = 0,
						$parentItem = $(this).closest('li');
					// mark item as tab-item
					$tabItems.data('mega-tab-item', 1);
					// add this tabs to parent item
					var megatabs = $parentItem.data('mega-tabs') ? $parentItem.data('mega-tabs') : [];
					megatabs.push($tabul);
					$parentItem.data('mega-tabs', megatabs);

					// default active the first
					// $tabul.data('mega-tab', 0);
					$tabItems.first().data('mega-tab-active', true).addClass('open');
					// make all parent visible to get height
					var $p = $tabul.parents('.dropdown-menu');
					$p.each(function() {
						var $this = $(this);
						$this.data('prev-style', $this.attr('style')).css({
							visibility : "visible",
							display : "block"
						});
					})
					$tabs.each(function() {
						var $this = $(this), thisstyle = $this.attr('style');
						$this.css({
							visibility : "hidden",
							display : "block"
						});
						tabheight = Math.max(tabheight, $this.children()
								.innerHeight());
						// restore style
						if (thisstyle) {
							$this.attr('style', thisstyle);
						} else {
							$this.removeAttr('style');
						}
					});
					$tabul.css('min-height', tabheight);
					// restore
					$p.each(function() {
						var $this = $(this);
						if ($this.data('prev-style'))
							$this.attr('style', $this.data('prev-style'));
						else
							$this.removeAttr('style');
						$this.removeData('prev-style');
					})
				})
			}
			// fix for modal in menu
			$menu.find('.modal').appendTo('body');
		},

		show : function(item) {
			// check if current item is mega-tab
			if (item.$item.data('mega-tab-item')) {
				item.$item.parent().children().removeClass('open').data('mega-tab-active', false);
				item.$item.addClass('open').data('mega-tab-active', true);
			}			
			// hide all others menu of this instance
			if ($.inArray(item, this.child_open) < this.child_open.length - 1) {
				this.hide_others(item);
			}

			// hide all for other instances as well
			$(document.body).trigger('hideall.t3menu', [ this ]);

			clearTimeout(this.timer); // hide alls
			clearTimeout(item.timer); // hide this item
			clearTimeout(item.ftimer); // on hidden
			clearTimeout(item.ctimer); // on hidden

			if (item.status != 'open' || !item.$item.hasClass('open')
					|| !this.child_open.length) {
				if (item.mega) {
					// remove timer
					clearTimeout(item.astimer); // animate
					clearTimeout(item.atimer); // animate

					// place menu
					this.position(item.$item);

					// add class animate
					item.astimer = setTimeout(function() {
						item.$item.addClass('animating')
					}, 10);
					item.atimer = setTimeout(function() {
						item.$item.removeClass('animating')
					}, this.options.duration + 50);
					item.timer = setTimeout(function() {
						item.$item.addClass('open');
					}, 100);
				} else {
					item.$item.addClass('open');
				}

				item.status = 'open';
				if (item.child && $.inArray(item, this.child_open) == -1) {
					this.child_open.push(item);
				}
			}

			item.ctimer = setTimeout($.proxy(this.clickable, this, item), 300);

		},

		hide : function(item, $target) {
			clearTimeout(this.timer); // hide alls
			clearTimeout(item.timer); // hide this item
			clearTimeout(item.astimer); // animate timer
			clearTimeout(item.atimer); // animate timer
			clearTimeout(item.ftimer); // on hidden

			// cancel hide if still in menu
			if ($target && $target.is('input', item.$item)) {
				return;
			}

			if (item.mega) {
				// animate out
				item.$item.addClass('animating');
				item.atimer = setTimeout(function() {
					item.$item.removeClass('animating')
				}, this.options.duration);
				item.timer = setTimeout(function() {
					if (!item.$item.data('mega-tab-active'))
						item.$item.removeClass('open')
				}, 100);
			} else {
				item.timer = setTimeout(function() {
					if (!item.$item.data('mega-tab-active'))
						item.$item.removeClass('open');
				}, 100);
			}

			item.status = 'close';
			for (var i = this.child_open.length; i--;) {
				if (this.child_open[i] === item) {
					this.child_open.splice(i, 1);
				}
			}

			item.ftimer = setTimeout($.proxy(this.hidden, this, item),
					this.options.duration);
			this.timer = setTimeout($.proxy(this.hide_alls, this),
					this.options.hidedelay);
		},

		hidden : function(item) {
			// hide done
			if (item.status == 'close') {
				item.clickable = false;
			}
		},

		hide_others : function(item) {
			var self = this;
			$
					.each(this.child_open.slice(),
							function(idx, open) {
								if (!item
										|| (open != item && !open.$item
												.has(item.$item).length)) {
									self.hide(open);
								}
							});
		},

		hide_alls : function(e, inst) {
			if (!e || e.type == 'tap' || (e.type == 'hideall' && this != inst)) {
				var self = this;
				$.each(this.child_open.slice(), function(idx, item) {
					item && self.hide(item);
				});
			}
		},

		clickable : function(item) {
			item.clickable = true;
		},

		position : function($item) {
			var sub = $item.children('.mega-dropdown-menu'), is_show = sub
					.is(':visible');

			if (!is_show) {
				sub.show();
			}

			var offset = $item.offset(), width = $item.outerWidth(), screen_width = $(
					window).width()
					- this.options.sb_width, sub_width = sub.outerWidth(), level = $item
					.data('level');

			if (!is_show) {
				sub.css('display', '');
			}

			// reset custom align
			sub.css({
				left : '',
				right : ''
			});

			if (level == 1) {

				var align = $item.data('alignsub'), align_offset = 0, align_delta = 0, align_trans = 0;

				if (align == 'justify') {
					return; // do nothing
				}

				if (!align) {
					align = 'left';
				}

				if (align == 'center') {
					align_offset = offset.left + (width / 2);

					if (!$.support.t3transform) {
						align_trans = -sub_width / 2;
						sub.css(this.options.rtl ? 'right' : 'left',
								align_trans + width / 2);
					}

				} else {
					align_offset = offset.left
							+ ((align == 'left' && this.options.rtl || align == 'right'
									&& !this.options.rtl) ? width : 0);
				}

				if (this.options.rtl) {

					if (align == 'right') {
						if (align_offset + sub_width > screen_width) {
							align_delta = screen_width - align_offset
									- sub_width;
							sub.css('left', align_delta);

							if (screen_width < sub_width) {
								sub.css('left', align_delta + sub_width
										- screen_width);
							}
						}
					} else {
						if (align_offset < (align == 'center' ? sub_width / 2
								: sub_width)) {
							align_delta = align_offset
									- (align == 'center' ? sub_width / 2
											: sub_width);
							sub.css('right', align_delta + align_trans);
						}

						if (align_offset
								+ (align == 'center' ? sub_width / 2 : 0)
								- align_delta > screen_width) {
							sub
									.css(
											'right',
											align_offset
													+ (align == 'center' ? (sub_width + width) / 2
															: 0) + align_trans
													- screen_width);
						}
					}

				} else {

					if (align == 'right') {
						if (align_offset < sub_width) {
							align_delta = align_offset - sub_width;
							sub.css('right', align_delta);

							if (sub_width > screen_width) {
								sub.css('right', sub_width - screen_width
										+ align_delta);
							}
						}
					} else {

						if (align_offset
								+ (align == 'center' ? sub_width / 2
										: sub_width) > screen_width) {
							align_delta = screen_width
									- align_offset
									- (align == 'center' ? sub_width / 2
											: sub_width);
							sub.css('left', align_delta + align_trans);
						}

						if (align_offset
								- (align == 'center' ? sub_width / 2 : 0)
								+ align_delta < 0) {
							sub
									.css(
											'left',
											(align == 'center' ? (sub_width + width) / 2
													: 0)
													+ align_trans
													- align_offset);
						}
					}
				}
			} else {

				if (this.options.rtl) {
					if ($item.closest('.mega-dropdown-menu').parent().hasClass(
							'mega-align-right')) {

						// should be align to the right as parent
						// $item.removeClass('mega-align-left').addClass('mega-align-right');

						// check if not able => revert the direction
						if (offset.left + width + sub_width > screen_width) {
							$item.removeClass('mega-align-right'); // should we
							// add align
							// left ? it
							// is th
							// default
							// now

							if (offset.left - sub_width < 0) {
								sub.css('right', offset.left + width
										- sub_width);
							}
						}
					} else {
						if (offset.left - sub_width < 0) {
							$item.removeClass('mega-align-left').addClass(
									'mega-align-right');

							if (offset.left + width + sub_width > screen_width) {
								sub.css('left', screen_width - offset.left
										- sub_width);
							}
						}
					}
				} else {

					if ($item.closest('.mega-dropdown-menu').parent().hasClass(
							'mega-align-right')) {
						// should be align to the right as parent
						// $item.removeClass('mega-align-left').addClass('mega-align-right');

						// check if not able => revert the direction
						if (offset.left - sub_width < 0) {
							$item.removeClass('mega-align-right'); // should we
							// add align
							// left ? it
							// is th
							// default
							// now

							if (offset.left + width + sub_width > screen_width) {
								sub.css('left', screen_width - offset.left
										- sub_width);
							}
						}
					} else {

						if (offset.left + width + sub_width > screen_width) {
							$item.removeClass('mega-align-left').addClass(
									'mega-align-right');

							if (offset.left - sub_width < 0) {
								sub.css('right', offset.left + width
										- sub_width);
							}
						}
					}
				}
			}
		}
	};

	$.fn.t3menu = function(option) {
		return this
				.each(function() {
					var $this = $(this), data = $this.data('megamenu'), options = typeof option == 'object'
							&& option;

					// Ignore off-canvas navigation
					if ($this.parents('#off-canvas-nav').length)
						return;
					if ($this.parents('#t3-off-canvas').length)
						return;

					if (!data) {
						$this.data('megamenu',
								(data = new T3Menu(this, options)));

					} else {
						if (typeof option == 'string' && data[option]) {
							data[option]()
						}
					}
				})
	};

	$.fn.t3menu.defaults = {
		duration : 400,
		timeout : 100,
		hidedelay : 200,
		hover : true,
		sb_width : 20
	};

	// apply script
	$(document)
			.ready(
					function() {

						// detect settings
						var mm_duration = $('.t3-megamenu').data('duration') || 0;
						if (mm_duration) {

							$(
									'<style type="text/css">'
											+ '.t3-megamenu.animate .animating > .mega-dropdown-menu,'
											+ '.t3-megamenu.animate.slide .animating > .mega-dropdown-menu > div {'
											+ 'transition-duration: '
											+ mm_duration + 'ms !important;'
											+ '-webkit-transition-duration: '
											+ mm_duration + 'ms !important;'
											+ '}' + '</style>')
									.appendTo('head');
						}

						var mm_timeout = mm_duration ? 100 + mm_duration : 500, mm_rtl = $(
								document.documentElement).attr('dir') == 'rtl', mm_trigger = $(
								document.documentElement).hasClass('mm-hover'), sb_width = (function() {
							var parent = $(
									'<div style="width:50px;height:50px;overflow:auto"><div/></div>')
									.appendTo('body'), child = parent
									.children(), width = child.innerWidth()
									- child.height(100).innerWidth();

							parent.remove();

							return width;
						})();

						// lt IE 10
						if (!$.support.transition) {
							// it is not support animate
							$('.t3-megamenu').removeClass('animate');

							mm_timeout = 100;
						}

						// get ready
						$('ul.nav').has('.dropdown-menu').t3menu({
							duration : mm_duration,
							timeout : mm_timeout,
							rtl : mm_rtl,
							sb_width : sb_width,
							hover : mm_trigger
						});

						$(window).on('load',function() {

							// check we miss any nav
							$('ul.nav').has('.dropdown-menu').t3menu({
								duration : mm_duration,
								timeout : mm_timeout,
								rtl : mm_rtl,
								sb_width : sb_width,
								hover : mm_trigger
							});

						});
					});

})(jQuery);



/*===============================
/templates/t3_bs3_blank/local/js/jquery.ui.widget.js
================================================================================*/;
/*!
 * jQuery UI Widget 1.9.2
 * http://jqueryui.com
 *
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */
(function( $, undefined ) {

var uuid = 0,
	slice = Array.prototype.slice,
	_cleanData = $.cleanData;
$.cleanData = function( elems ) {
	for ( var i = 0, elem; (elem = elems[i]) != null; i++ ) {
		try {
			$( elem ).triggerHandler( "remove" );
		// http://bugs.jquery.com/ticket/8235
		} catch( e ) {}
	}
	_cleanData( elems );
};

$.widget = function( name, base, prototype ) {
	var fullName, existingConstructor, constructor, basePrototype,
		namespace = name.split( "." )[ 0 ];

	name = name.split( "." )[ 1 ];
	fullName = namespace + "-" + name;

	if ( !prototype ) {
		prototype = base;
		base = $.Widget;
	}

	// create selector for plugin
	$.expr[ ":" ][ fullName.toLowerCase() ] = function( elem ) {
		return !!$.data( elem, fullName );
	};

	$[ namespace ] = $[ namespace ] || {};
	existingConstructor = $[ namespace ][ name ];
	constructor = $[ namespace ][ name ] = function( options, element ) {
		// allow instantiation without "new" keyword
		if ( !this._createWidget ) {
			return new constructor( options, element );
		}

		// allow instantiation without initializing for simple inheritance
		// must use "new" keyword (the code above always passes args)
		if ( arguments.length ) {
			this._createWidget( options, element );
		}
	};
	// extend with the existing constructor to carry over any static properties
	$.extend( constructor, existingConstructor, {
		version: prototype.version,
		// copy the object used to create the prototype in case we need to
		// redefine the widget later
		_proto: $.extend( {}, prototype ),
		// track widgets that inherit from this widget in case this widget is
		// redefined after a widget inherits from it
		_childConstructors: []
	});

	basePrototype = new base();
	// we need to make the options hash a property directly on the new instance
	// otherwise we'll modify the options hash on the prototype that we're
	// inheriting from
	basePrototype.options = $.widget.extend( {}, basePrototype.options );
	$.each( prototype, function( prop, value ) {
		if ( $.isFunction( value ) ) {
			prototype[ prop ] = (function() {
				var _super = function() {
						return base.prototype[ prop ].apply( this, arguments );
					},
					_superApply = function( args ) {
						return base.prototype[ prop ].apply( this, args );
					};
				return function() {
					var __super = this._super,
						__superApply = this._superApply,
						returnValue;

					this._super = _super;
					this._superApply = _superApply;

					returnValue = value.apply( this, arguments );

					this._super = __super;
					this._superApply = __superApply;

					return returnValue;
				};
			})();
		}
	});
	constructor.prototype = $.widget.extend( basePrototype, {
		// TODO: remove support for widgetEventPrefix
		// always use the name + a colon as the prefix, e.g., draggable:start
		// don't prefix for widgets that aren't DOM-based
		widgetEventPrefix: existingConstructor ? basePrototype.widgetEventPrefix : name
	}, prototype, {
		constructor: constructor,
		namespace: namespace,
		widgetName: name,
		// TODO remove widgetBaseClass, see #8155
		widgetBaseClass: fullName,
		widgetFullName: fullName
	});

	// If this widget is being redefined then we need to find all widgets that
	// are inheriting from it and redefine all of them so that they inherit from
	// the new version of this widget. We're essentially trying to replace one
	// level in the prototype chain.
	if ( existingConstructor ) {
		$.each( existingConstructor._childConstructors, function( i, child ) {
			var childPrototype = child.prototype;

			// redefine the child widget using the same prototype that was
			// originally used, but inherit from the new version of the base
			$.widget( childPrototype.namespace + "." + childPrototype.widgetName, constructor, child._proto );
		});
		// remove the list of existing child constructors from the old constructor
		// so the old child constructors can be garbage collected
		delete existingConstructor._childConstructors;
	} else {
		base._childConstructors.push( constructor );
	}

	$.widget.bridge( name, constructor );
};

$.widget.extend = function( target ) {
	var input = slice.call( arguments, 1 ),
		inputIndex = 0,
		inputLength = input.length,
		key,
		value;
	for ( ; inputIndex < inputLength; inputIndex++ ) {
		for ( key in input[ inputIndex ] ) {
			value = input[ inputIndex ][ key ];
			if ( input[ inputIndex ].hasOwnProperty( key ) && value !== undefined ) {
				// Clone objects
				if ( $.isPlainObject( value ) ) {
					target[ key ] = $.isPlainObject( target[ key ] ) ?
						$.widget.extend( {}, target[ key ], value ) :
						// Don't extend strings, arrays, etc. with objects
						$.widget.extend( {}, value );
				// Copy everything else by reference
				} else {
					target[ key ] = value;
				}
			}
		}
	}
	return target;
};

$.widget.bridge = function( name, object ) {
	var fullName = object.prototype.widgetFullName || name;
	$.fn[ name ] = function( options ) {
		var isMethodCall = typeof options === "string",
			args = slice.call( arguments, 1 ),
			returnValue = this;

		// allow multiple hashes to be passed on init
		options = !isMethodCall && args.length ?
			$.widget.extend.apply( null, [ options ].concat(args) ) :
			options;

		if ( isMethodCall ) {
			this.each(function() {
				var methodValue,
					instance = $.data( this, fullName );
				if ( !instance ) {
					return $.error( "cannot call methods on " + name + " prior to initialization; " +
						"attempted to call method '" + options + "'" );
				}
				if ( !$.isFunction( instance[options] ) || options.charAt( 0 ) === "_" ) {
					return $.error( "no such method '" + options + "' for " + name + " widget instance" );
				}
				methodValue = instance[ options ].apply( instance, args );
				if ( methodValue !== instance && methodValue !== undefined ) {
					returnValue = methodValue && methodValue.jquery ?
						returnValue.pushStack( methodValue.get() ) :
						methodValue;
					return false;
				}
			});
		} else {
			this.each(function() {
				var instance = $.data( this, fullName );
				if ( instance ) {
					instance.option( options || {} )._init();
				} else {
					$.data( this, fullName, new object( options, this ) );
				}
			});
		}

		return returnValue;
	};
};

$.Widget = function( /* options, element */ ) {};
$.Widget._childConstructors = [];

$.Widget.prototype = {
	widgetName: "widget",
	widgetEventPrefix: "",
	defaultElement: "<div>",
	options: {
		disabled: false,

		// callbacks
		create: null
	},
	_createWidget: function( options, element ) {
		element = $( element || this.defaultElement || this )[ 0 ];
		this.element = $( element );
		this.uuid = uuid++;
		this.eventNamespace = "." + this.widgetName + this.uuid;
		this.options = $.widget.extend( {},
			this.options,
			this._getCreateOptions(),
			options );

		this.bindings = $();
		this.hoverable = $();
		this.focusable = $();

		if ( element !== this ) {
			// 1.9 BC for #7810
			// TODO remove dual storage
			$.data( element, this.widgetName, this );
			$.data( element, this.widgetFullName, this );
			this._on( true, this.element, {
				remove: function( event ) {
					if ( event.target === element ) {
						this.destroy();
					}
				}
			});
			this.document = $( element.style ?
				// element within the document
				element.ownerDocument :
				// element is window or document
				element.document || element );
			this.window = $( this.document[0].defaultView || this.document[0].parentWindow );
		}

		this._create();
		this._trigger( "create", null, this._getCreateEventData() );
		this._init();
	},
	_getCreateOptions: $.noop,
	_getCreateEventData: $.noop,
	_create: $.noop,
	_init: $.noop,

	destroy: function() {
		this._destroy();
		// we can probably remove the unbind calls in 2.0
		// all event bindings should go through this._on()
		this.element
			.unbind( this.eventNamespace )
			// 1.9 BC for #7810
			// TODO remove dual storage
			.removeData( this.widgetName )
			.removeData( this.widgetFullName )
			// support: jquery <1.6.3
			// http://bugs.jquery.com/ticket/9413
			.removeData( $.camelCase( this.widgetFullName ) );
		this.widget()
			.unbind( this.eventNamespace )
			.removeAttr( "aria-disabled" )
			.removeClass(
				this.widgetFullName + "-disabled " +
				"ui-state-disabled" );

		// clean up events and states
		this.bindings.unbind( this.eventNamespace );
		this.hoverable.removeClass( "ui-state-hover" );
		this.focusable.removeClass( "ui-state-focus" );
	},
	_destroy: $.noop,

	widget: function() {
		return this.element;
	},

	option: function( key, value ) {
		var options = key,
			parts,
			curOption,
			i;

		if ( arguments.length === 0 ) {
			// don't return a reference to the internal hash
			return $.widget.extend( {}, this.options );
		}

		if ( typeof key === "string" ) {
			// handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
			options = {};
			parts = key.split( "." );
			key = parts.shift();
			if ( parts.length ) {
				curOption = options[ key ] = $.widget.extend( {}, this.options[ key ] );
				for ( i = 0; i < parts.length - 1; i++ ) {
					curOption[ parts[ i ] ] = curOption[ parts[ i ] ] || {};
					curOption = curOption[ parts[ i ] ];
				}
				key = parts.pop();
				if ( value === undefined ) {
					return curOption[ key ] === undefined ? null : curOption[ key ];
				}
				curOption[ key ] = value;
			} else {
				if ( value === undefined ) {
					return this.options[ key ] === undefined ? null : this.options[ key ];
				}
				options[ key ] = value;
			}
		}

		this._setOptions( options );

		return this;
	},
	_setOptions: function( options ) {
		var key;

		for ( key in options ) {
			this._setOption( key, options[ key ] );
		}

		return this;
	},
	_setOption: function( key, value ) {
		this.options[ key ] = value;

		if ( key === "disabled" ) {
			this.widget()
				.toggleClass( this.widgetFullName + "-disabled ui-state-disabled", !!value )
				.attr( "aria-disabled", value );
			this.hoverable.removeClass( "ui-state-hover" );
			this.focusable.removeClass( "ui-state-focus" );
		}

		return this;
	},

	enable: function() {
		return this._setOption( "disabled", false );
	},
	disable: function() {
		return this._setOption( "disabled", true );
	},

	_on: function( suppressDisabledCheck, element, handlers ) {
		var delegateElement,
			instance = this;

		// no suppressDisabledCheck flag, shuffle arguments
		if ( typeof suppressDisabledCheck !== "boolean" ) {
			handlers = element;
			element = suppressDisabledCheck;
			suppressDisabledCheck = false;
		}

		// no element argument, shuffle and use this.element
		if ( !handlers ) {
			handlers = element;
			element = this.element;
			delegateElement = this.widget();
		} else {
			// accept selectors, DOM elements
			element = delegateElement = $( element );
			this.bindings = this.bindings.add( element );
		}

		$.each( handlers, function( event, handler ) {
			function handlerProxy() {
				// allow widgets to customize the disabled handling
				// - disabled as an array instead of boolean
				// - disabled class as method for disabling individual parts
				if ( !suppressDisabledCheck &&
						( instance.options.disabled === true ||
							$( this ).hasClass( "ui-state-disabled" ) ) ) {
					return;
				}
				return ( typeof handler === "string" ? instance[ handler ] : handler )
					.apply( instance, arguments );
			}

			// copy the guid so direct unbinding works
			if ( typeof handler !== "string" ) {
				handlerProxy.guid = handler.guid =
					handler.guid || handlerProxy.guid || $.guid++;
			}

			var match = event.match( /^(\w+)\s*(.*)$/ ),
				eventName = match[1] + instance.eventNamespace,
				selector = match[2];
			if ( selector ) {
				delegateElement.delegate( selector, eventName, handlerProxy );
			} else {
				element.bind( eventName, handlerProxy );
			}
		});
	},

	_off: function( element, eventName ) {
		eventName = (eventName || "").split( " " ).join( this.eventNamespace + " " ) + this.eventNamespace;
		element.unbind( eventName ).undelegate( eventName );
	},

	_delay: function( handler, delay ) {
		function handlerProxy() {
			return ( typeof handler === "string" ? instance[ handler ] : handler )
				.apply( instance, arguments );
		}
		var instance = this;
		return setTimeout( handlerProxy, delay || 0 );
	},

	_hoverable: function( element ) {
		this.hoverable = this.hoverable.add( element );
		this._on( element, {
			mouseenter: function( event ) {
				$( event.currentTarget ).addClass( "ui-state-hover" );
			},
			mouseleave: function( event ) {
				$( event.currentTarget ).removeClass( "ui-state-hover" );
			}
		});
	},

	_focusable: function( element ) {
		this.focusable = this.focusable.add( element );
		this._on( element, {
			focusin: function( event ) {
				$( event.currentTarget ).addClass( "ui-state-focus" );
			},
			focusout: function( event ) {
				$( event.currentTarget ).removeClass( "ui-state-focus" );
			}
		});
	},

	_trigger: function( type, event, data ) {
		var prop, orig,
			callback = this.options[ type ];

		data = data || {};
		event = $.Event( event );
		event.type = ( type === this.widgetEventPrefix ?
			type :
			this.widgetEventPrefix + type ).toLowerCase();
		// the original event may come from any element
		// so we need to reset the target on the new event
		event.target = this.element[ 0 ];

		// copy original event properties over to the new event
		orig = event.originalEvent;
		if ( orig ) {
			for ( prop in orig ) {
				if ( !( prop in event ) ) {
					event[ prop ] = orig[ prop ];
				}
			}
		}

		this.element.trigger( event, data );
		return !( $.isFunction( callback ) &&
			callback.apply( this.element[0], [ event ].concat( data ) ) === false ||
			event.isDefaultPrevented() );
	}
};

$.each( { show: "fadeIn", hide: "fadeOut" }, function( method, defaultEffect ) {
	$.Widget.prototype[ "_" + method ] = function( element, options, callback ) {
		if ( typeof options === "string" ) {
			options = { effect: options };
		}
		var hasOptions,
			effectName = !options ?
				method :
				options === true || typeof options === "number" ?
					defaultEffect :
					options.effect || defaultEffect;
		options = options || {};
		if ( typeof options === "number" ) {
			options = { duration: options };
		}
		hasOptions = !$.isEmptyObject( options );
		options.complete = callback;
		if ( options.delay ) {
			element.delay( options.delay );
		}
		if ( hasOptions && $.effects && ( $.effects.effect[ effectName ] || $.uiBackCompat !== false && $.effects[ effectName ] ) ) {
			element[ method ]( options );
		} else if ( effectName !== method && element[ effectName ] ) {
			element[ effectName ]( options.duration, options.easing, callback );
		} else {
			element.queue(function( next ) {
				$( this )[ method ]();
				if ( callback ) {
					callback.call( element[ 0 ] );
				}
				next();
			});
		}
	};
});

// DEPRECATED
if ( $.uiBackCompat !== false ) {
	$.Widget.prototype._getCreateOptions = function() {
		return $.metadata && $.metadata.get( this.element[0] )[ this.widgetName ];
	};
}

})( jQuery );



/*===============================
/templates/t3_bs3_blank/local/js/jquery.ui.accordion.js
================================================================================*/;
/*!
 * jQuery UI Accordion 1.9.2
 * http://jqueryui.com
 *
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/accordion/
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function( $, undefined ) {

var uid = 0,
	hideProps = {},
	showProps = {};

hideProps.height = hideProps.paddingTop = hideProps.paddingBottom =
	hideProps.borderTopWidth = hideProps.borderBottomWidth = "hide";
showProps.height = showProps.paddingTop = showProps.paddingBottom =
	showProps.borderTopWidth = showProps.borderBottomWidth = "show";

$.widget( "ui.accordion", {
	version: "1.9.2",
	options: {
		active: 0,
		animate: {},
		collapsible: false,
		event: "click",
		header: "> li > :first-child,> :not(li):even",
		heightStyle: "auto",
		icons: {
			activeHeader: "ui-icon-triangle-1-s",
			header: "ui-icon-triangle-1-e"
		},

		// callbacks
		activate: null,
		beforeActivate: null
	},

	_create: function() {
		var accordionId = this.accordionId = "ui-accordion-" +
				(this.element.attr( "id" ) || ++uid),
			options = this.options;

		this.prevShow = this.prevHide = $();
		this.element.addClass( "ui-accordion ui-widget ui-helper-reset" );

		this.headers = this.element.find( options.header )
			.addClass( "ui-accordion-header ui-helper-reset ui-state-default ui-corner-all" );
		this._hoverable( this.headers );
		this._focusable( this.headers );

		this.headers.next()
			.addClass( "ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" )
			.hide();

		// don't allow collapsible: false and active: false / null
		if ( !options.collapsible && (options.active === false || options.active == null) ) {
			options.active = 0;
		}
		// handle negative values
		if ( options.active < 0 ) {
			options.active += this.headers.length;
		}
		this.active = this._findActive( options.active )
			.addClass( "ui-accordion-header-active ui-state-active" )
			.toggleClass( "ui-corner-all ui-corner-top" );
		this.active.next()
			.addClass( "ui-accordion-content-active" )
			.show();

		this._createIcons();
		this.refresh();

		// ARIA
		this.element.attr( "role", "tablist" );

		this.headers
			.attr( "role", "tab" )
			.each(function( i ) {
				var header = $( this ),
					headerId = header.attr( "id" ),
					panel = header.next(),
					panelId = panel.attr( "id" );
				if ( !headerId ) {
					headerId = accordionId + "-header-" + i;
					header.attr( "id", headerId );
				}
				if ( !panelId ) {
					panelId = accordionId + "-panel-" + i;
					panel.attr( "id", panelId );
				}
				header.attr( "aria-controls", panelId );
				panel.attr( "aria-labelledby", headerId );
			})
			.next()
				.attr( "role", "tabpanel" );

		this.headers
			.not( this.active )
			.attr({
				"aria-selected": "false",
				tabIndex: -1
			})
			.next()
				.attr({
					"aria-expanded": "false",
					"aria-hidden": "true"
				})
				.hide();

		// make sure at least one header is in the tab order
		if ( !this.active.length ) {
			this.headers.eq( 0 ).attr( "tabIndex", 0 );
		} else {
			this.active.attr({
				"aria-selected": "true",
				tabIndex: 0
			})
			.next()
				.attr({
					"aria-expanded": "true",
					"aria-hidden": "false"
				});
		}

		this._on( this.headers, { keydown: "_keydown" });
		this._on( this.headers.next(), { keydown: "_panelKeyDown" });
		this._setupEvents( options.event );
	},

	_getCreateEventData: function() {
		return {
			header: this.active,
			content: !this.active.length ? $() : this.active.next()
		};
	},

	_createIcons: function() {
		var icons = this.options.icons;
		if ( icons ) {
			$( "<span>" )
				.addClass( "ui-accordion-header-icon ui-icon " + icons.header )
				.prependTo( this.headers );
			this.active.children( ".ui-accordion-header-icon" )
				.removeClass( icons.header )
				.addClass( icons.activeHeader );
			this.headers.addClass( "ui-accordion-icons" );
		}
	},

	_destroyIcons: function() {
		this.headers
			.removeClass( "ui-accordion-icons" )
			.children( ".ui-accordion-header-icon" )
				.remove();
	},

	_destroy: function() {
		var contents;

		// clean up main element
		this.element
			.removeClass( "ui-accordion ui-widget ui-helper-reset" )
			.removeAttr( "role" );

		// clean up headers
		this.headers
			.removeClass( "ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top" )
			.removeAttr( "role" )
			.removeAttr( "aria-selected" )
			.removeAttr( "aria-controls" )
			.removeAttr( "tabIndex" )
			.each(function() {
				if ( /^ui-accordion/.test( this.id ) ) {
					this.removeAttribute( "id" );
				}
			});
		this._destroyIcons();

		// clean up content panels
		contents = this.headers.next()
			.css( "display", "" )
			.removeAttr( "role" )
			.removeAttr( "aria-expanded" )
			.removeAttr( "aria-hidden" )
			.removeAttr( "aria-labelledby" )
			.removeClass( "ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled" )
			.each(function() {
				if ( /^ui-accordion/.test( this.id ) ) {
					this.removeAttribute( "id" );
				}
			});
		if ( this.options.heightStyle !== "content" ) {
			contents.css( "height", "" );
		}
	},

	_setOption: function( key, value ) {
		if ( key === "active" ) {
			// _activate() will handle invalid values and update this.options
			this._activate( value );
			return;
		}

		if ( key === "event" ) {
			if ( this.options.event ) {
				this._off( this.headers, this.options.event );
			}
			this._setupEvents( value );
		}

		this._super( key, value );

		// setting collapsible: false while collapsed; open first panel
		if ( key === "collapsible" && !value && this.options.active === false ) {
			this._activate( 0 );
		}

		if ( key === "icons" ) {
			this._destroyIcons();
			if ( value ) {
				this._createIcons();
			}
		}

		// #5332 - opacity doesn't cascade to positioned elements in IE
		// so we need to add the disabled class to the headers and panels
		if ( key === "disabled" ) {
			this.headers.add( this.headers.next() )
				.toggleClass( "ui-state-disabled", !!value );
		}
	},

	_keydown: function( event ) {
		if ( event.altKey || event.ctrlKey ) {
			return;
		}

		var keyCode = $.ui.keyCode,
			length = this.headers.length,
			currentIndex = this.headers.index( event.target ),
			toFocus = false;

		switch ( event.keyCode ) {
			case keyCode.RIGHT:
			case keyCode.DOWN:
				toFocus = this.headers[ ( currentIndex + 1 ) % length ];
				break;
			case keyCode.LEFT:
			case keyCode.UP:
				toFocus = this.headers[ ( currentIndex - 1 + length ) % length ];
				break;
			case keyCode.SPACE:
			case keyCode.ENTER:
				this._eventHandler( event );
				break;
			case keyCode.HOME:
				toFocus = this.headers[ 0 ];
				break;
			case keyCode.END:
				toFocus = this.headers[ length - 1 ];
				break;
		}

		if ( toFocus ) {
			$( event.target ).attr( "tabIndex", -1 );
			$( toFocus ).attr( "tabIndex", 0 );
			toFocus.focus();
			event.preventDefault();
		}
	},

	_panelKeyDown : function( event ) {
		if ( event.keyCode === $.ui.keyCode.UP && event.ctrlKey ) {
			$( event.currentTarget ).prev().focus();
		}
	},

	refresh: function() {
		var maxHeight, overflow,
			heightStyle = this.options.heightStyle,
			parent = this.element.parent();


		if ( heightStyle === "fill" ) {
			// IE 6 treats height like minHeight, so we need to turn off overflow
			// in order to get a reliable height
			// we use the minHeight support test because we assume that only
			// browsers that don't support minHeight will treat height as minHeight
			if ( !$.support.minHeight ) {
				overflow = parent.css( "overflow" );
				parent.css( "overflow", "hidden");
			}
			maxHeight = parent.height();
			this.element.siblings( ":visible" ).each(function() {
				var elem = $( this ),
					position = elem.css( "position" );

				if ( position === "absolute" || position === "fixed" ) {
					return;
				}
				maxHeight -= elem.outerHeight( true );
			});
			if ( overflow ) {
				parent.css( "overflow", overflow );
			}

			this.headers.each(function() {
				maxHeight -= $( this ).outerHeight( true );
			});

			this.headers.next()
				.each(function() {
					$( this ).height( Math.max( 0, maxHeight -
						$( this ).innerHeight() + $( this ).height() ) );
				})
				.css( "overflow", "auto" );
		} else if ( heightStyle === "auto" ) {
			maxHeight = 0;
			this.headers.next()
				.each(function() {
					maxHeight = Math.max( maxHeight, $( this ).css( "height", "" ).height() );
				})
				.height( maxHeight );
		}
	},

	_activate: function( index ) {
		var active = this._findActive( index )[ 0 ];

		// trying to activate the already active panel
		if ( active === this.active[ 0 ] ) {
			return;
		}

		// trying to collapse, simulate a click on the currently active header
		active = active || this.active[ 0 ];

		this._eventHandler({
			target: active,
			currentTarget: active,
			preventDefault: $.noop
		});
	},

	_findActive: function( selector ) {
		return typeof selector === "number" ? this.headers.eq( selector ) : $();
	},

	_setupEvents: function( event ) {
		var events = {};
		if ( !event ) {
			return;
		}
		$.each( event.split(" "), function( index, eventName ) {
			events[ eventName ] = "_eventHandler";
		});
		this._on( this.headers, events );
	},

	_eventHandler: function( event ) {
		var options = this.options,
			active = this.active,
			clicked = $( event.currentTarget ),
			clickedIsActive = clicked[ 0 ] === active[ 0 ],
			collapsing = clickedIsActive && options.collapsible,
			toShow = collapsing ? $() : clicked.next(),
			toHide = active.next(),
			eventData = {
				oldHeader: active,
				oldPanel: toHide,
				newHeader: collapsing ? $() : clicked,
				newPanel: toShow
			};

		event.preventDefault();

		if (
				// click on active header, but not collapsible
				( clickedIsActive && !options.collapsible ) ||
				// allow canceling activation
				( this._trigger( "beforeActivate", event, eventData ) === false ) ) {
			return;
		}

		options.active = collapsing ? false : this.headers.index( clicked );

		// when the call to ._toggle() comes after the class changes
		// it causes a very odd bug in IE 8 (see #6720)
		this.active = clickedIsActive ? $() : clicked;
		this._toggle( eventData );

		// switch classes
		// corner classes on the previously active header stay after the animation
		active.removeClass( "ui-accordion-header-active ui-state-active" );
		if ( options.icons ) {
			active.children( ".ui-accordion-header-icon" )
				.removeClass( options.icons.activeHeader )
				.addClass( options.icons.header );
		}

		if ( !clickedIsActive ) {
			clicked
				.removeClass( "ui-corner-all" )
				.addClass( "ui-accordion-header-active ui-state-active ui-corner-top" );
			if ( options.icons ) {
				clicked.children( ".ui-accordion-header-icon" )
					.removeClass( options.icons.header )
					.addClass( options.icons.activeHeader );
			}

			clicked
				.next()
				.addClass( "ui-accordion-content-active" );
		}
	},

	_toggle: function( data ) {
		var toShow = data.newPanel,
			toHide = this.prevShow.length ? this.prevShow : data.oldPanel;

		// handle activating a panel during the animation for another activation
		this.prevShow.add( this.prevHide ).stop( true, true );
		this.prevShow = toShow;
		this.prevHide = toHide;

		if ( this.options.animate ) {
			this._animate( toShow, toHide, data );
		} else {
			toHide.hide();
			toShow.show();
			this._toggleComplete( data );
		}

		toHide.attr({
			"aria-expanded": "false",
			"aria-hidden": "true"
		});
		toHide.prev().attr( "aria-selected", "false" );
		// if we're switching panels, remove the old header from the tab order
		// if we're opening from collapsed state, remove the previous header from the tab order
		// if we're collapsing, then keep the collapsing header in the tab order
		if ( toShow.length && toHide.length ) {
			toHide.prev().attr( "tabIndex", -1 );
		} else if ( toShow.length ) {
			this.headers.filter(function() {
				return $( this ).attr( "tabIndex" ) === 0;
			})
			.attr( "tabIndex", -1 );
		}

		toShow
			.attr({
				"aria-expanded": "true",
				"aria-hidden": "false"
			})
			.prev()
				.attr({
					"aria-selected": "true",
					tabIndex: 0
				});
	},

	_animate: function( toShow, toHide, data ) {
		var total, easing, duration,
			that = this,
			adjust = 0,
			down = toShow.length &&
				( !toHide.length || ( toShow.index() < toHide.index() ) ),
			animate = this.options.animate || {},
			options = down && animate.down || animate,
			complete = function() {
				that._toggleComplete( data );
			};

		if ( typeof options === "number" ) {
			duration = options;
		}
		if ( typeof options === "string" ) {
			easing = options;
		}
		// fall back from options to animation in case of partial down settings
		easing = easing || options.easing || animate.easing;
		duration = duration || options.duration || animate.duration;

		if ( !toHide.length ) {
			return toShow.animate( showProps, duration, easing, complete );
		}
		if ( !toShow.length ) {
			return toHide.animate( hideProps, duration, easing, complete );
		}

		total = toShow.show().outerHeight();
		toHide.animate( hideProps, {
			duration: duration,
			easing: easing,
			step: function( now, fx ) {
				fx.now = Math.round( now );
			}
		});
		toShow
			.hide()
			.animate( showProps, {
				duration: duration,
				easing: easing,
				complete: complete,
				step: function( now, fx ) {
					fx.now = Math.round( now );
					if ( fx.prop !== "height" ) {
						adjust += fx.now;
					} else if ( that.options.heightStyle !== "content" ) {
						fx.now = Math.round( total - toHide.outerHeight() - adjust );
						adjust = 0;
					}
				}
			});
	},

	_toggleComplete: function( data ) {
		var toHide = data.oldPanel;

		toHide
			.removeClass( "ui-accordion-content-active" )
			.prev()
				.removeClass( "ui-corner-top" )
				.addClass( "ui-corner-all" );

		// Work around for rendering bug in IE (#5421)
		if ( toHide.length ) {
			toHide.parent()[0].className = toHide.parent()[0].className;
		}

		this._trigger( "activate", null, data );
	}
});



// DEPRECATED
if ( $.uiBackCompat !== false ) {
	// navigation options
	(function( $, prototype ) {
		$.extend( prototype.options, {
			navigation: false,
			navigationFilter: function() {
				return this.href.toLowerCase() === location.href.toLowerCase();
			}
		});

		var _create = prototype._create;
		prototype._create = function() {
			if ( this.options.navigation ) {
				var that = this,
					headers = this.element.find( this.options.header ),
					content = headers.next(),
					current = headers.add( content )
						.find( "a" )
						.filter( this.options.navigationFilter )
						[ 0 ];
				if ( current ) {
					headers.add( content ).each( function( index ) {
						if ( $.contains( this, current ) ) {
							that.options.active = Math.floor( index / 2 );
							return false;
						}
					});
				}
			}
			_create.call( this );
		};
	}( jQuery, jQuery.ui.accordion.prototype ) );

	// height options
	(function( $, prototype ) {
		$.extend( prototype.options, {
			heightStyle: null, // remove default so we fall back to old values
			autoHeight: true, // use heightStyle: "auto"
			clearStyle: false, // use heightStyle: "content"
			fillSpace: false // use heightStyle: "fill"
		});

		var _create = prototype._create,
			_setOption = prototype._setOption;

		$.extend( prototype, {
			_create: function() {
				this.options.heightStyle = this.options.heightStyle ||
					this._mergeHeightStyle();

				_create.call( this );
			},

			_setOption: function( key ) {
				if ( key === "autoHeight" || key === "clearStyle" || key === "fillSpace" ) {
					this.options.heightStyle = this._mergeHeightStyle();
				}
				_setOption.apply( this, arguments );
			},

			_mergeHeightStyle: function() {
				var options = this.options;

				if ( options.fillSpace ) {
					return "fill";
				}

				if ( options.clearStyle ) {
					return "content";
				}

				if ( options.autoHeight ) {
					return "auto";
				}
			}
		});
	}( jQuery, jQuery.ui.accordion.prototype ) );

	// icon options
	(function( $, prototype ) {
		$.extend( prototype.options.icons, {
			activeHeader: null, // remove default so we fall back to old values
			headerSelected: "ui-icon-triangle-1-s"
		});

		var _createIcons = prototype._createIcons;
		prototype._createIcons = function() {
			if ( this.options.icons ) {
				this.options.icons.activeHeader = this.options.icons.activeHeader ||
					this.options.icons.headerSelected;
			}
			_createIcons.call( this );
		};
	}( jQuery, jQuery.ui.accordion.prototype ) );

	// expanded active option, activate method
	(function( $, prototype ) {
		prototype.activate = prototype._activate;

		var _findActive = prototype._findActive;
		prototype._findActive = function( index ) {
			if ( index === -1 ) {
				index = false;
			}
			if ( index && typeof index !== "number" ) {
				index = this.headers.index( this.headers.filter( index ) );
				if ( index === -1 ) {
					index = false;
				}
			}
			return _findActive.call( this, index );
		};
	}( jQuery, jQuery.ui.accordion.prototype ) );

	// resize method
	jQuery.ui.accordion.prototype.resize = jQuery.ui.accordion.prototype.refresh;

	// change events
	(function( $, prototype ) {
		$.extend( prototype.options, {
			change: null,
			changestart: null
		});

		var _trigger = prototype._trigger;
		prototype._trigger = function( type, event, data ) {
			var ret = _trigger.apply( this, arguments );
			if ( !ret ) {
				return false;
			}

			if ( type === "beforeActivate" ) {
				ret = _trigger.call( this, "changestart", event, {
					oldHeader: data.oldHeader,
					oldContent: data.oldPanel,
					newHeader: data.newHeader,
					newContent: data.newPanel
				});
			} else if ( type === "activate" ) {
				ret = _trigger.call( this, "change", event, {
					oldHeader: data.oldHeader,
					oldContent: data.oldPanel,
					newHeader: data.newHeader,
					newContent: data.newPanel
				});
			}
			return ret;
		};
	}( jQuery, jQuery.ui.accordion.prototype ) );

	// animated option
	// NOTE: this only provides support for "slide", "bounceslide", and easings
	// not the full $.ui.accordion.animations API
	(function( $, prototype ) {
		$.extend( prototype.options, {
			animate: null,
			animated: "slide"
		});

		var _create = prototype._create;
		prototype._create = function() {
			var options = this.options;
			if ( options.animate === null ) {
				if ( !options.animated ) {
					options.animate = false;
				} else if ( options.animated === "slide" ) {
					options.animate = 300;
				} else if ( options.animated === "bounceslide" ) {
					options.animate = {
						duration: 200,
						down: {
							easing: "easeOutBounce",
							duration: 1000
						}
					};
				} else {
					options.animate = options.animated;
				}
			}

			_create.call( this );
		};
	}( jQuery, jQuery.ui.accordion.prototype ) );
}

})( jQuery );



/*===============================
/templates/t3_bs3_blank/local/js/script.js
================================================================================*/;
/** 
 *------------------------------------------------------------------------------
 * @package       T3 Framework for Joomla!
 *------------------------------------------------------------------------------
 * @copyright     Copyright (C) 2004-2013 JoomlArt.com. All Rights Reserved.
 * @license       GNU General Public License version 2 or later; see LICENSE.txt
 * @authors       JoomlArt, JoomlaBamboo, (contribute to this project at github 
 *                & Google group to become co-author)
 * @Google group: https://groups.google.com/forum/#!forum/t3fw
 * @Link:         http://t3-framework.org 
 *------------------------------------------------------------------------------
 */
 
 
jQuery( window ).load(function() {
  jQuery('body').addClass('loaded');
});
	
    
jQuery(document).ready(function(){

	width = jQuery( window ).width();
    
    if(!jQuery('body').hasClass('loaded')) {
    	jQuery('body').addClass('loaded');
    }
    
    

    jQuery(".navbar-collapse").css({ maxHeight: jQuery(window).height() - jQuery(".navbar-header").height() + "px" });
	//home page Dadi's blog
    //jQuery("#bottom-spotlight .articles").prepend('<div class="container"> <div class="row"> <div class="col-md-12">');
    //jQuery("#bottom-spotlight .articles").append('</div> </div> </div>');
    jQuery("#bottom-spotlight .articles").wrap('<div class="dadi-blog-wrapper"><div class="container dadi-blog-bg"><div class="row"><div class="col-md-12"></div></div></div></div>');
    jQuery("#bottom-spotlight #ultimate_map").wrap('<div class="home-map-wrapper"><div class="container"><div class="row"><div class="col-md-12"></div></div></div></div>');
    
    
    //Questionnaire
    jQuery(".questionnaire.body-care h1").prepend('<div class="body-icon"><img src="/images/content-images/healthy-living/body2.png" alt="How healthy body icon" class="img-border"></div>');
    jQuery(".itemid-564 h1").prepend('<div class="body-icon"><img src="/images/content-images/healthy-living/body2.png" alt="How healthy body icon" class="img-border"></div>');
    jQuery(".questionnaire.mind-care h1").prepend('<div class="mind-icon"><img src="/images/content-images/healthy-living/mind2.png" alt="How healthy mind icon" class="img-border"></div>');
    jQuery(".itemid-604 h1").prepend('<div class="mind-icon"><img src="/images/content-images/healthy-living/mind2.png" alt="How healthy mind icon" class="img-border"></div>');
    var Progressbar = jQuery(".questionnaire.body-care .progress");
    //jQuery(".questionnaire.body-care .form-actions").append(Progressbar).fadeIn();
    jQuery(".questionnaire .form-actions .btn-primary").removeClass("btn-primary").addClass("btn-default");
    jQuery(".questionnaire .bfPage").addClass("animated fadeIn  animation-active");    

	//Video description height
    var videoInfoHeight = jQuery('#hero-video-container').height();
    var videoTitle = '<div class="videoInfo panel panel-default play-title"><h2></h2></div>';
    var videoIntoTitle = jQuery('.video-info h2').text();
    //alert(videoInfoHeight);
    //jQuery('.videoInfo').prepend(videoTitle);
    jQuery(videoTitle).insertBefore( jQuery( ".videoInfo" ) ).hide();
    //alert('play');
    jQuery('#hero-video-container').load(function() {
    	jQuery(this).addClass(' notplaying'); 
    });
    
    //Video description switch positions
     if( width > 991){
     
     
     
//         jQuery('.jw-controls').click(function (e){
//             console.log('Click event fired');
//         });
     	
        
        //jQuery('div#hero-video-wrapper .col-md-10, #hero-video-container .jw-display-icon-container').on("click", function(){
        jQuery('div#hero-video-wrapper .col-md-10').click(function(){
        	
        
        
                  jQuery("video").on("play", function(){
                  		jQuery('.video-info').hide();
                  		jQuery('.play-title h2').text(videoIntoTitle);
                  		jQuery('.play-title').show();
                        jQuery('#hero-video-container').removeClass('notplaying'); 
                  });
                  jQuery("video").on("pause", function (){
                  		jQuery('.video-info').show();
                  		jQuery('.play-title h2').text(videoIntoTitle);
                  		jQuery('.play-title').hide();
                        jQuery('#hero-video-container').addClass('notplaying'); 
                  });
        });
     }
    
    

	//Thought for today
    
    var thoughtHeight =jQuery('#Mod88 p').height();
    if(thoughtHeight > 75){
    	jQuery('#Mod88 p').height(75).css({"overflow":"hidden"});
        jQuery('#Mod88 .module-ct').append('<a href="#" id="revealThought">more</a>');
        
        jQuery('#revealThought').toggle(function(e){
        	 e.preventDefault();
             jQuery('#Mod88 p').css({"height":"auto", "overflow":"show"}, 500);
             jQuery(this).text('');
        }, function(){
        	jQuery('#Mod88 p').height(75).css({"overflow":"hidden"});
            jQuery(this).text('more');
        });
    } 

	jQuery('.tab-article .t3-spotlight-1 .col-lg-12').removeClass("col-lg-12 col-md-12 col-sm-12 col-xs-12");
    //jQuery('.event-list-page .col-md-4').removeClass("col-md-4").addClass("col-md-6");
    //jQuery('.event-list-page .container-fluid').removeClass("container-fluid");
    
    var articleBodyHeight = jQuery('.call-of-time .item-page div[itemprop="articleBody"]').height();
    //var articleBodyHeight = jQuery('.call-of-time #jc').position().top;
    //jQuery('.call-of-time .item-page .imageFrame').height(articleBodyHeight);
    //jQuery('.call-of-time .item-page p:contains("With love,")').css({"background":"red"});
    
	jQuery('.head-search').append('<a href="/search"><i class=\"fa fa-search pull-right\"></i></a>');
    //jQuery('.head-search .form-control').val('');
    //jQuery('.head-search  input').wrap('<div class="container"><div class="row"><div class="col-md-12"></div></div></div>');
    jQuery('.videolist-page .input-group .btn.btn-default').removeClass("btn-default").addClass("btn-primary"); //.html("<i class=\"glyphicon glyphicon-search\"></i>");
    jQuery('.view-articlelist .t3-content .input-group .btn.btn-default').removeClass("btn-default").addClass("btn-primary"); //.html("<i class=\"glyphicon glyphicon-search\"></i>");
     
    
	//jQuery('.lang-block li').hide().prepend('<i class=\"fa fa-language\"></i>');
    jQuery('.lang-block li.lang-active a').append('<i class=\"fa fa-caret-down\"></i>');
    jQuery('.lang-block li').hide();
    jQuery('.lang-block li.lang-active').show();
    
    var activeLanguage =jQuery('.lang-block li.lang-active');
    jQuery('.lang-block').prepend(activeLanguage);
	    jQuery(activeLanguage).on('click',function(e) {
                e.preventDefault();
    	 jQuery('.lang-block li').toggle();
         jQuery('.head-search form').hide();
         //jQuery("#t3-mainnav").hide();
        
    });

    //jQuery('.head-search form').append("<i class=\"fa fa-times\" id=\"hide-head-search\"></i>");
    //jQuery('.head-search .fa').on('click',function(e) {
    //            e.preventDefault();
    //	 jQuery('.head-search form').addClass('top-sticky-search').fadeToggle();
         //jQuery('.head-search form').reset();
    //     jQuery('.head-search form input').val('').focus();
         //jQuery("#t3-mainnav").hide();
    //});
    
    //jQuery('#hide-head-search').on('click',function(e) {
    //     jQuery('.head-search form').hide();
    //});
    
    jQuery('.button-play').toggle(
        function () {
            //document.getElementById('playTune').play();
            //jQuery(this).children("audio").play();
            //jQuery('.playTune').trigger( "play" );
            //jQuery('.playTune').pause();
            jQuery(this).find('.playTune').trigger( "play" );
            jQuery(".button-play").find('.glyphicon').removeClass('glyphicon-pause').addClass('glyphicon-volume-up');
            jQuery(this).find('.glyphicon').removeClass('glyphicon-volume-up').addClass('glyphicon-pause');
        },
        function () {
            //document.getElementById('playTune').pause();
            //jQuery('.button-play audio').pause();
            //jQuery('.playTune').trigger( "pause" );
            jQuery(this).find('.playTune').trigger( "pause" );
            
            jQuery(this).find('.glyphicon').removeClass('glyphicon-pause').addClass('glyphicon-volume-up');
        }
    );
    

    // Play one audio at a time
    jQuery("audio").on("play", function() {
      jQuery("audio").not(this).each(function(index, audio) {
      	audio.pause();
      });
    });
        
	//jQuery( "<H1>Search results</H1>" ).insertBefore(".com_itpgooglesearch #system-message-container");
	
    
    var navicon = '<span id="nav-scroll" class="nav-scroll pull-right" class="navbar-toggle" data-toggle="collapse" data-target=".t3-navbar-collapse"><i class="fa fa-bars"></i></span>';
     var navicondesktop = '<span id="nav-scroll" class="nav-scroll pull-right">Menu <i class="fa fa-caret-down"></i></span>';
    var isVisible = jQuery('#t3-mainnav').is(':visible');
    
                
    		/**if ((!jQuery(".t3-header").find('#t3-mainnav .navbar-header').length) && (width >= 768)){
        		var navbar1 = jQuery("#t3-mainnav .navbar-header").html();
    			//alert(navbar1);
    			jQuery('#t3-header').append(navbar1);
        	}
            
            if( width < 767){
       		
                  if ((!jQuery(".t3-header").find('#nav-scroll').length)){
                      jQuery(".head-search").append(navicon);
                  } 
             }
            **/
    

    
     if( width < 769){
    	
        //Responsive Tabs 
        jQuery('.tab-article .nav-tabs li.active a').append('<i class=\"fa fa-caret-down pull-right\"></i>');
        jQuery('.tab-article .nav-tabs li').hide();
        jQuery('.tab-article .nav-tabs li.active').show();

        var activeTab =jQuery('.tab-article .nav-tabs li.active');
        jQuery('.tab-article .nav-tabs').prepend(activeTab);
            jQuery(activeTab).on('click',function(e) {
                    e.preventDefault();
             jQuery('.tab-article .nav-tabs li').toggle();
             jQuery(activeTab).show();

        });
        
        if ((!jQuery(".t3-header").find('#nav-scroll').length)){
                      //jQuery(".head-search").append(navicon);
                  } 
    }


    jQuery(window).scroll(function(){
        if( width >= 767){
                  jQuery("#t3-mainnav").removeClass("animated fadeInUp  animation-active").hide().fadeOut();
           }
        if(jQuery(window).scrollTop() > 2) {
        	jQuery(".t3-header").addClass("lightHeader");
            jQuery("#t3-header").removeClass("animated fadeInUp  animation-active");
        	jQuery(".logo-img").attr("src","/images/bk-logo.png");
            jQuery(".mod-languages .inputbox").css({"right":"70px"});
    		jQuery(".itp-gs.input-group").css({"right":"187px"});
            
            //jQuery(".head-search .form-control").css({"width":"38px", "paddingLeft":"23px"});
            jQuery('.lang-block li.lang-active a').css({"color":"#555"});
            jQuery('.lang-block li.lang-active .fa').css({"color":"#555"});
            jQuery('div.mod-languages ul').css({"right":"115px", "top":"13px"});
            
            
             if( width >= 767){
                  jQuery("#t3-mainnav").removeClass("animated fadeInUp  animation-active").hide().fadeOut();
                  if ((!jQuery(".t3-header").find('#nav-scroll').length)){
                      jQuery(".head-search").append(navicondesktop);
                  } else{jQuery(".nav-scroll").css("display", "block");}
                  
                    
                   jQuery('#nav-scroll').toggle(function(e){
                         jQuery("#t3-mainnav").fadeIn().addClass("darkHeader"); 
                       	return;
                    }, function(){
                         jQuery('#t3-mainnav').fadeOut().removeClass("darkHeader"); 
                           return;
                    });  
             }
            
            
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       jQuery(".t3-header").removeClass("lightHeader");
       jQuery("#t3-header").addClass("animated fadeIn animation-active");
       jQuery(".logo-img").attr("src","/images/bk-logo-white.png");
       jQuery(".nav-scroll").css("display", "none");
       //jQuery(".head-search .form-control").css("width", "130px");
       jQuery(".mod-languages .inputbox").css({"right":"15px"});
       jQuery(".itp-gs.input-group").css({"right":"135px"});
       jQuery("#t3-mainnav").removeClass("darkHeader")
       jQuery('.lang-block li.lang-active a').css({"color":"#fff"});
       jQuery('.lang-block li.lang-active .fa').css({"color":"#fff"});
       jQuery('div.mod-languages ul').css({"right":"55px", "top":"15px"});
              
       if( width >= 767){
       		jQuery("#t3-mainnav").addClass("animated fadeIn  animation-active");
       		jQuery("#t3-mainnav").show().fadeIn();
       }else{
       		if ((!jQuery(".t3-header").find('#nav-scroll').length)){
        		//jQuery(".head-search").append(navicon);
        	} else{jQuery(".nav-scroll").css("display", "block");}
       }
    }
    });
    
    
    jQuery("#sendy-subscribe-115 button").addClass(" btn-primary ");
    //jQuery(".article-intro").addClass(" animatedParent");
    //jQuery(".item-page").addClass(" animatedParent");
    jQuery(".article-content").addClass(" cus-animated fadeIn");
    jQuery(".side_video").addClass(" cus-animated fadeIn");
    jQuery(".home-parallax .btn.btn-primary").addClass("btn-lg");
    
    jQuery(".videos .video.thumbnail").addClass(" cus-animated fadeIn");
    jQuery(".call-of-time .item").addClass(" cus-animated fadeIn");
    jQuery(".blog-articles .item").addClass(" cus-animated fadeIn");

    
    jQuery(".video.thumbnail").click(function() {
      	var link = jQuery(this).find('a').attr('href');
        jQuery(window).attr('location',link)
    });
    
    jQuery(".blog-articles .item").click(function() {
      	var link = jQuery(this).find('a').attr('href');
        jQuery(window).attr('location',link)
    });
    
    jQuery(".call-of-time .item").click(function() {
      	var link = jQuery(this).find('a').attr('href');
        jQuery(window).attr('location',link)
    });
    
    
    jQuery("#comments-form-send a").addClass(" btn btn-primary btn-lg ");
    jQuery("input.gsc-search-button").addClass(" btn btn-primary btn-lg ");
    //jQuery(".itp-gs .btn").replaceWith("<span class=\"input-group-btn\"><button type=\"submit\" class=\"btn btn-primary\"><span class=\"glyphicon glyphicon-search\"></span></button></span>");
    //jQuery(".itp-gs").addClass("input-group");
    jQuery(".inputbox").addClass("form-control");
    jQuery(".nav.navbar-nav.nav-tabs.nav-justified").removeClass("navbar-nav nav-justified"); 
    jQuery("#comments .comments-buttons a").addClass(" btn btn-default btn-xs "); 
    jQuery("#comments .comments-buttons a").html("<i class=\"fa fa-comments\"></i> Reply");
    
    jQuery("#comments-form-send").removeClass("btn");
    jQuery("#views .label.label-info").text("Views:").removeClass("label label-info");
    
    jQuery('.video-wrapper .video .video-title').each(function() {
    	var trimtext = jQuery(this).text();
        var textlength = jQuery(this).text().length;
        //alert(textlength);
        if (textlength > 30){
    	    var shortText = jQuery.trim(trimtext).substring(0, 30).split(" ").slice(0, -1).join(" ") + "...";
            //alert(trimtext);
    	    jQuery(this).text(shortText);
        }
    });
    
    jQuery('.mmRelatedItemsList a').each(function() {
    	var trimtext = jQuery(this).text();
        var textlength = jQuery(this).text().length;
        //alert(textlength);
        if (textlength > 30){
    	var shortText = jQuery.trim(trimtext).substring(0, 30)
    	.split(" ").slice(0, -1).join(" ") + "...";
        //alert(trimtext);
    	jQuery(this).text(shortText);
        }
    });
    
    //jQuery(".home-icon-box").removeClass("fadeInUp");
    //animationHover(".home-icon-box", "pulse");
    //animationHover(".btn", "flipInY");
    
    //element hover animation
    function animationHover(element, animation){
        element=jQuery(element);
        element.hover(
            function() {
                jQuery(this).addClass("animation " + animation);
            },
            function() {
                //wait for animation to finish before removing classes
                jQuery(this).removeClass("animation " + animation);
            }, 2000);
        }
    
    
    
    //parallax scrolling 
    (function(){

      var parallax = document.querySelectorAll(".dadi-blog-wrapper"),
          speed = 0.5;

      window.onscroll = function(){
      if(jQuery(window).scrollTop() > 470){
        [].slice.call(parallax).forEach(function(el,i){

          var windowYOffset = window.pageYOffset,
              elBackgrounPos = "0 " + (windowYOffset * speed - 660) + "px";

          el.style.backgroundPosition = elBackgrounPos;

        });
      }
    
  	};

	})();
    
    //Share link icons
     jQuery("#addthis_facebook_share").html("<div class=\"fa fa-facebook hasTooltip  custom_hover\" href=\"#\" data-original-title=\"Facebook\"><span><span></span><strong></strong></span></div>");
     jQuery("#addthis_twitter_share").html("<div class=\"fa fa-twitter hasTooltip  custom_hover\" href=\"#\" data-original-title=\"Twitter\"><span><span></span><strong></strong></span></div>");
     jQuery("#addthis_email_share").html("<div class=\"fa fa-envelope hasTooltip  custom_hover\" href=\"#\" data-original-title=\"Email\"><span><span></span><strong></strong></span></div>");
     
     jQuery("#atstbx .at-svc-facebook").html("<div class=\"fa fa-facebook hasTooltip  custom_hover\" href=\"#\" data-original-title=\"Facebook\"><span><span></span><strong></strong></span></div>");
     jQuery("#atstbx .at-svc-twitter").html("<div class=\"fa fa-twitter hasTooltip  custom_hover\" href=\"#\" data-original-title=\"Twitter\"><span><span></span><strong></strong></span></div>");
     jQuery("#atstbx .at-svc-google_plusone_share").html("<div class=\"fa fa-google-plus hasTooltip  custom_hover\" href=\"#\" data-original-title=\"Google+\"><span><span></span><strong></strong></span></div>");
     
     
});


/*===============================
/templates/t3_bs3_blank/local/js/css3-animated.js
================================================================================*/;
/*
 * CSS3 Animate it
 * Copyright (c) 2014 Jack McCourt
 * https://github.com/kriegar/css3-animate-it
 * Version: 0.1.0
 * 
 * I utilise the jQuery.appear plugin within this javascript file so here is a link to that too
 * https://github.com/morr/jquery.appear
 *
 * I also utilise the jQuery.doTimeout plugin for the data-sequence functionality so here is a link back to them.
 * http://benalman.com/projects/jquery-dotimeout-plugin/
 */
(function(jQuery) {
  var selectors = [];

  var check_binded = false;
  var check_lock = false;
  var defaults = {
    interval: 250,
    force_process: false
  }
  var $window = jQuery(window);

  var $prior_appeared;

  function process() {
    check_lock = false;
    for (var index = 0; index < selectors.length; index++) {
      var $appeared = jQuery(selectors[index]).filter(function() {
        return jQuery(this).is(':appeared');
      });

      $appeared.trigger('appear', [$appeared]);

      if ($prior_appeared) {
        
        var $disappeared = $prior_appeared.not($appeared);
        $disappeared.trigger('disappear', [$disappeared]);
      }
      $prior_appeared = $appeared;
    }
  }

  // "appeared" custom filter
  jQuery.expr[':']['appeared'] = function(element) {
    var $element = jQuery(element);
    if (!$element.is(':visible')) {
      return false;
    }

    var window_left = $window.scrollLeft();
    var window_top = $window.scrollTop();
    var offset = $element.offset();
    var left = offset.left;
    var top = offset.top;

    if (top + $element.height() >= window_top &&
        top - ($element.data('appear-top-offset') || 0) <= window_top + $window.height() &&
        left + $element.width() >= window_left &&
        left - ($element.data('appear-left-offset') || 0) <= window_left + $window.width()) {
      return true;
    } else {
      return false;
    }
  }

  jQuery.fn.extend({
    // watching for element's appearance in browser viewport
    appear: function(options) {
      var opts = jQuery.extend({}, defaults, options || {});
      var selector = this.selector || this;
      if (!check_binded) {
        var on_check = function() {
          if (check_lock) {
            return;
          }
          check_lock = true;

          setTimeout(process, opts.interval);
        };

        jQuery(window).scroll(on_check).resize(on_check);
        check_binded = true;
      }

      if (opts.force_process) {
        setTimeout(process, opts.interval);
      }
      selectors.push(selector);
      return jQuery(selector);
    }
  });

  jQuery.extend({
    // force elements's appearance check
    force_appear: function() {
      if (check_binded) {
        process();
        return true;
      };
      return false;
    }
  });
})(jQuery);



/*!
 * jQuery doTimeout: Like setTimeout, but better! - v1.0 - 3/3/2010
 * http://benalman.com/projects/jquery-dotimeout-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */

// Script: jQuery doTimeout: Like setTimeout, but better!
//
// *Version: 1.0, Last updated: 3/3/2010*
// 
// Project Home - http://benalman.com/projects/jquery-dotimeout-plugin/
// GitHub       - http://github.com/cowboy/jquery-dotimeout/
// Source       - http://github.com/cowboy/jquery-dotimeout/raw/master/jquery.ba-dotimeout.js
// (Minified)   - http://github.com/cowboy/jquery-dotimeout/raw/master/jquery.ba-dotimeout.min.js (1.0kb)
// 
// About: License
// 
// Copyright (c) 2010 "Cowboy" Ben Alman,
// Dual licensed under the MIT and GPL licenses.
// http://benalman.com/about/license/
// 
// About: Examples
// 
// These working examples, complete with fully commented code, illustrate a few
// ways in which this plugin can be used.
// 
// Debouncing      - http://benalman.com/code/projects/jquery-dotimeout/examples/debouncing/
// Delays, Polling - http://benalman.com/code/projects/jquery-dotimeout/examples/delay-poll/
// Hover Intent    - http://benalman.com/code/projects/jquery-dotimeout/examples/hoverintent/
// 
// About: Support and Testing
// 
// Information about what version or versions of jQuery this plugin has been
// tested with, what browsers it has been tested in, and where the unit tests
// reside (so you can test it yourself).
// 
// jQuery Versions - 1.3.2, 1.4.2
// Browsers Tested - Internet Explorer 6-8, Firefox 2-3.6, Safari 3-4, Chrome 4-5, Opera 9.6-10.1.
// Unit Tests      - http://benalman.com/code/projects/jquery-dotimeout/unit/
// 
// About: Release History
// 
// 1.0 - (3/3/2010) Callback can now be a string, in which case it will call
//       the appropriate $.method or $.fn.method, depending on where .doTimeout
//       was called. Callback must now return `true` (not just a truthy value)
//       to poll.
// 0.4 - (7/15/2009) Made the "id" argument optional, some other minor tweaks
// 0.3 - (6/25/2009) Initial release

(function(jQuery){
  '$:nomunge'; // Used by YUI compressor.
  
  var cache = {},
    
    // Reused internal string.
    doTimeout = 'doTimeout',
    
    // A convenient shortcut.
    aps = Array.prototype.slice;
  
  // Method: jQuery.doTimeout
  // 
  // Initialize, cancel, or force execution of a callback after a delay.
  // 
  // If delay and callback are specified, a doTimeout is initialized. The
  // callback will execute, asynchronously, after the delay. If an id is
  // specified, this doTimeout will override and cancel any existing doTimeout
  // with the same id. Any additional arguments will be passed into callback
  // when it is executed.
  // 
  // If the callback returns true, the doTimeout loop will execute again, after
  // the delay, creating a polling loop until the callback returns a non-true
  // value.
  // 
  // Note that if an id is not passed as the first argument, this doTimeout will
  // NOT be able to be manually canceled or forced. (for debouncing, be sure to
  // specify an id).
  // 
  // If id is specified, but delay and callback are not, the doTimeout will be
  // canceled without executing the callback. If force_mode is specified, the
  // callback will be executed, synchronously, but will only be allowed to
  // continue a polling loop if force_mode is true (provided the callback
  // returns true, of course). If force_mode is false, no polling loop will
  // continue, even if the callback returns true.
  // 
  // Usage:
  // 
  // > jQuery.doTimeout( [ id, ] delay, callback [, arg ... ] );
  // > jQuery.doTimeout( id [, force_mode ] );
  // 
  // Arguments:
  // 
  //  id - (String) An optional unique identifier for this doTimeout. If id is
  //    not specified, the doTimeout will NOT be able to be manually canceled or
  //    forced.
  //  delay - (Number) A zero-or-greater delay in milliseconds after which
  //    callback will be executed. 
  //  callback - (Function) A function to be executed after delay milliseconds.
  //  callback - (String) A jQuery method to be executed after delay
  //    milliseconds. This method will only poll if it explicitly returns
  //    true.
  //  force_mode - (Boolean) If true, execute that id's doTimeout callback
  //    immediately and synchronously, continuing any callback return-true
  //    polling loop. If false, execute the callback immediately and
  //    synchronously but do NOT continue a callback return-true polling loop.
  //    If omitted, cancel that id's doTimeout.
  // 
  // Returns:
  // 
  //  If force_mode is true, false or undefined and there is a
  //  yet-to-be-executed callback to cancel, true is returned, but if no
  //  callback remains to be executed, undefined is returned.
  
  jQuery[doTimeout] = function() {
    return p_doTimeout.apply( window, [ 0 ].concat( aps.call( arguments ) ) );
  };
  
  // Method: jQuery.fn.doTimeout
  // 
  // Initialize, cancel, or force execution of a callback after a delay.
  // Operates like <jQuery.doTimeout>, but the passed callback executes in the
  // context of the jQuery collection of elements, and the id is stored as data
  // on the first element in that collection.
  // 
  // If delay and callback are specified, a doTimeout is initialized. The
  // callback will execute, asynchronously, after the delay. If an id is
  // specified, this doTimeout will override and cancel any existing doTimeout
  // with the same id. Any additional arguments will be passed into callback
  // when it is executed.
  // 
  // If the callback returns true, the doTimeout loop will execute again, after
  // the delay, creating a polling loop until the callback returns a non-true
  // value.
  // 
  // Note that if an id is not passed as the first argument, this doTimeout will
  // NOT be able to be manually canceled or forced (for debouncing, be sure to
  // specify an id).
  // 
  // If id is specified, but delay and callback are not, the doTimeout will be
  // canceled without executing the callback. If force_mode is specified, the
  // callback will be executed, synchronously, but will only be allowed to
  // continue a polling loop if force_mode is true (provided the callback
  // returns true, of course). If force_mode is false, no polling loop will
  // continue, even if the callback returns true.
  // 
  // Usage:
  // 
  // > jQuery('selector').doTimeout( [ id, ] delay, callback [, arg ... ] );
  // > jQuery('selector').doTimeout( id [, force_mode ] );
  // 
  // Arguments:
  // 
  //  id - (String) An optional unique identifier for this doTimeout, stored as
  //    jQuery data on the element. If id is not specified, the doTimeout will
  //    NOT be able to be manually canceled or forced.
  //  delay - (Number) A zero-or-greater delay in milliseconds after which
  //    callback will be executed. 
  //  callback - (Function) A function to be executed after delay milliseconds.
  //  callback - (String) A jQuery.fn method to be executed after delay
  //    milliseconds. This method will only poll if it explicitly returns
  //    true (most jQuery.fn methods return a jQuery object, and not `true`,
  //    which allows them to be chained and prevents polling).
  //  force_mode - (Boolean) If true, execute that id's doTimeout callback
  //    immediately and synchronously, continuing any callback return-true
  //    polling loop. If false, execute the callback immediately and
  //    synchronously but do NOT continue a callback return-true polling loop.
  //    If omitted, cancel that id's doTimeout.
  // 
  // Returns:
  // 
  //  When creating a <jQuery.fn.doTimeout>, the initial jQuery collection of
  //  elements is returned. Otherwise, if force_mode is true, false or undefined
  //  and there is a yet-to-be-executed callback to cancel, true is returned,
  //  but if no callback remains to be executed, undefined is returned.
  
  jQuery.fn[doTimeout] = function() {
    var args = aps.call( arguments ),
      result = p_doTimeout.apply( this, [ doTimeout + args[0] ].concat( args ) );
    
    return typeof args[0] === 'number' || typeof args[1] === 'number'
      ? this
      : result;
  };
  
  function p_doTimeout( jquery_data_key ) {
    var that = this,
      elem,
      data = {},
      
      // Allows the plugin to call a string callback method.
      method_base = jquery_data_key ? $.fn : $,
      
      // Any additional arguments will be passed to the callback.
      args = arguments,
      slice_args = 4,
      
      id        = args[1],
      delay     = args[2],
      callback  = args[3];
    
    if ( typeof id !== 'string' ) {
      slice_args--;
      
      id        = jquery_data_key = 0;
      delay     = args[1];
      callback  = args[2];
    }
    
    // If id is passed, store a data reference either as .data on the first
    // element in a jQuery collection, or in the internal cache.
    if ( jquery_data_key ) { // Note: key is 'doTimeout' + id
      
      // Get id-object from the first element's data, otherwise initialize it to {}.
      elem = that.eq(0);
      elem.data( jquery_data_key, data = elem.data( jquery_data_key ) || {} );
      
    } else if ( id ) {
      // Get id-object from the cache, otherwise initialize it to {}.
      data = cache[ id ] || ( cache[ id ] = {} );
    }
    
    // Clear any existing timeout for this id.
    data.id && clearTimeout( data.id );
    delete data.id;
    
    // Clean up when necessary.
    function cleanup() {
      if ( jquery_data_key ) {
        elem.removeData( jquery_data_key );
      } else if ( id ) {
        delete cache[ id ];
      }
    };
    
    // Yes, there actually is a setTimeout call in here!
    function actually_setTimeout() {
      data.id = setTimeout( function(){ data.fn(); }, delay );
    };
    
    if ( callback ) {
      // A callback (and delay) were specified. Store the callback reference for
      // possible later use, and then setTimeout.
      data.fn = function( no_polling_loop ) {
        
        // If the callback value is a string, it is assumed to be the name of a
        // method on $ or $.fn depending on where doTimeout was executed.
        if ( typeof callback === 'string' ) {
          callback = method_base[ callback ];
        }
        
        callback.apply( that, aps.call( args, slice_args ) ) === true && !no_polling_loop
          
          // Since the callback returned true, and we're not specifically
          // canceling a polling loop, do it again!
          ? actually_setTimeout()
          
          // Otherwise, clean up and quit.
          : cleanup();
      };
      
      // Set that timeout!
      actually_setTimeout();
      
    } else if ( data.fn ) {
      // No callback passed. If force_mode (delay) is true, execute the data.fn
      // callback immediately, continuing any callback return-true polling loop.
      // If force_mode is false, execute the data.fn callback immediately but do
      // NOT continue a callback return-true polling loop. If force_mode is
      // undefined, simply clean up. Since data.fn was still defined, whatever
      // was supposed to happen hadn't yet, so return true.
      delay === undefined ? cleanup() : data.fn( delay === false );
      return true;
      
    } else {
      // Since no callback was passed, and data.fn isn't defined, it looks like
      // whatever was supposed to happen already did. Clean up and quit!
      cleanup();
    }
    
  };
  
})(jQuery);




//CSS3 Animate-it
jQuery('.animatedParent').appear();
jQuery('.animatedClick').click(function(){
  var target = $(this).attr('data-target');

  
  if(jQuery(this).attr('data-sequence') != undefined){
    var firstId = jQuery("."+target+":first").attr('data-id');
    var lastId = jQuery("."+target+":last").attr('data-id');
    var number = firstId;

    //Add or remove the class
    if(jQuery("."+target+"[data-id="+ number +"]").hasClass('go')){
      jQuery("."+target+"[data-id="+ number +"]").addClass('goAway');
      jQuery("."+target+"[data-id="+ number +"]").removeClass('go');
    }else{
      jQuery("."+target+"[data-id="+ number +"]").addClass('go');
      jQuery("."+target+"[data-id="+ number +"]").removeClass('goAway');
    }
    number ++;
    delay = Number($(this).attr('data-sequence'));
    jQuery.doTimeout(delay, function(){
      console.log(lastId);
      
      //Add or remove the class
      if(jQuery("."+target+"[data-id="+ number +"]").hasClass('go')){
        jQuery("."+target+"[data-id="+ number +"]").addClass('goAway');
        jQuery("."+target+"[data-id="+ number +"]").removeClass('go');
      }else{
        jQuery("."+target+"[data-id="+ number +"]").addClass('go');
        jQuery("."+target+"[data-id="+ number +"]").removeClass('goAway');
      }

      //increment
      ++number;

      //continute looping till reached last ID
      if(number <= lastId){return true;}
    });
  }else{
    if(jQuery('.'+target).hasClass('go')){
      jQuery('.'+target).addClass('goAway');
      jQuery('.'+target).removeClass('go');
    }else{
      jQuery('.'+target).addClass('go');
      jQuery('.'+target).removeClass('goAway');
    }
  } 
});

jQuery(document.body).on('appear', '.animatedParent', function(e, $affected){
  var ele = jQuery(this).find('.animated');
  var parent = $(this);
  

  if(parent.attr('data-sequence') != undefined){
    
    var firstId = jQuery(this).find('.animated:first').attr('data-id');
    var number = firstId;
    var lastId = jQuery(this).find('.animated:last').attr('data-id');

    $(parent).find(".animated[data-id="+ number +"]").addClass('go');
    number ++;
    delay = Number(parent.attr('data-sequence'));

    jQuery.doTimeout(delay, function(){
      jQuery(parent).find(".animated[data-id="+ number +"]").addClass('go');
      ++number;
      if(number <= lastId){return true;}
    });
  }else{
    ele.addClass('go');
  }
  
});

 jQuery(document.body).on('disappear', '.animatedParent', function(e, $affected) {
  if(!jQuery(this).hasClass('animateOnce')){
    jQuery(this).find('.animated').removeClass('go');
   }
 });

 jQuery(window).load(function(){
  jQuery.force_appear();
 });



/*===============================
/templates/t3_bs3_blank/local/js/stellar.js
================================================================================*/;
/*!
 * Stellar.js v0.6.2
 * http://markdalgleish.com/projects/stellar.js
 * 
 * Copyright 2013, Mark Dalgleish
 * This content is released under the MIT license
 * http://markdalgleish.mit-license.org
 */

;(function($, window, document, undefined) {

	var pluginName = 'stellar',
		defaults = {
			scrollProperty: 'scroll',
			positionProperty: 'position',
			horizontalScrolling: true,
			verticalScrolling: true,
			horizontalOffset: 0,
			verticalOffset: 0,
			responsive: false,
			parallaxBackgrounds: true,
			parallaxElements: true,
			hideDistantElements: true,
			hideElement: function($elem) { $elem.hide(); },
			showElement: function($elem) { $elem.show(); }
		},

		scrollProperty = {
			scroll: {
				getLeft: function($elem) { return $elem.scrollLeft(); },
				setLeft: function($elem, val) { $elem.scrollLeft(val); },

				getTop: function($elem) { return $elem.scrollTop();	},
				setTop: function($elem, val) { $elem.scrollTop(val); }
			},
			position: {
				getLeft: function($elem) { return parseInt($elem.css('left'), 10) * -1; },
				getTop: function($elem) { return parseInt($elem.css('top'), 10) * -1; }
			},
			margin: {
				getLeft: function($elem) { return parseInt($elem.css('margin-left'), 10) * -1; },
				getTop: function($elem) { return parseInt($elem.css('margin-top'), 10) * -1; }
			},
			transform: {
				getLeft: function($elem) {
					var computedTransform = getComputedStyle($elem[0])[prefixedTransform];
					return (computedTransform !== 'none' ? parseInt(computedTransform.match(/(-?[0-9]+)/g)[4], 10) * -1 : 0);
				},
				getTop: function($elem) {
					var computedTransform = getComputedStyle($elem[0])[prefixedTransform];
					return (computedTransform !== 'none' ? parseInt(computedTransform.match(/(-?[0-9]+)/g)[5], 10) * -1 : 0);
				}
			}
		},

		positionProperty = {
			position: {
				setLeft: function($elem, left) { $elem.css('left', left); },
				setTop: function($elem, top) { $elem.css('top', top); }
			},
			transform: {
				setPosition: function($elem, left, startingLeft, top, startingTop) {
					$elem[0].style[prefixedTransform] = 'translate3d(' + (left - startingLeft) + 'px, ' + (top - startingTop) + 'px, 0)';
				}
			}
		},

		// Returns a function which adds a vendor prefix to any CSS property name
		vendorPrefix = (function() {
			var prefixes = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
				style = $('script')[0].style,
				prefix = '',
				prop;

			for (prop in style) {
				if (prefixes.test(prop)) {
					prefix = prop.match(prefixes)[0];
					break;
				}
			}

			if ('WebkitOpacity' in style) { prefix = 'Webkit'; }
			if ('KhtmlOpacity' in style) { prefix = 'Khtml'; }

			return function(property) {
				return prefix + (prefix.length > 0 ? property.charAt(0).toUpperCase() + property.slice(1) : property);
			};
		}()),

		prefixedTransform = vendorPrefix('transform'),

		supportsBackgroundPositionXY = $('<div />', { style: 'background:#fff' }).css('background-position-x') !== undefined,

		setBackgroundPosition = (supportsBackgroundPositionXY ?
			function($elem, x, y) {
				$elem.css({
					'background-position-x': x,
					'background-position-y': y
				});
			} :
			function($elem, x, y) {
				$elem.css('background-position', x + ' ' + y);
			}
		),

		getBackgroundPosition = (supportsBackgroundPositionXY ?
			function($elem) {
				return [
					$elem.css('background-position-x'),
					$elem.css('background-position-y')
				];
			} :
			function($elem) {
				return $elem.css('background-position').split(' ');
			}
		),

		requestAnimFrame = (
			window.requestAnimationFrame       ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame    ||
			window.oRequestAnimationFrame      ||
			window.msRequestAnimationFrame     ||
			function(callback) {
				setTimeout(callback, 1000 / 60);
			}
		);

	function Plugin(element, options) {
		this.element = element;
		this.options = $.extend({}, defaults, options);

		this._defaults = defaults;
		this._name = pluginName;

		this.init();
	}

	Plugin.prototype = {
		init: function() {
			this.options.name = pluginName + '_' + Math.floor(Math.random() * 1e9);

			this._defineElements();
			this._defineGetters();
			this._defineSetters();
			this._handleWindowLoadAndResize();
			this._detectViewport();

			this.refresh({ firstLoad: true });

			if (this.options.scrollProperty === 'scroll') {
				this._handleScrollEvent();
			} else {
				this._startAnimationLoop();
			}
		},
		_defineElements: function() {
			if (this.element === document.body) this.element = window;
			this.$scrollElement = $(this.element);
			this.$element = (this.element === window ? $('body') : this.$scrollElement);
			this.$viewportElement = (this.options.viewportElement !== undefined ? $(this.options.viewportElement) : (this.$scrollElement[0] === window || this.options.scrollProperty === 'scroll' ? this.$scrollElement : this.$scrollElement.parent()) );
		},
		_defineGetters: function() {
			var self = this,
				scrollPropertyAdapter = scrollProperty[self.options.scrollProperty];

			this._getScrollLeft = function() {
				return scrollPropertyAdapter.getLeft(self.$scrollElement);
			};

			this._getScrollTop = function() {
				return scrollPropertyAdapter.getTop(self.$scrollElement);
			};
		},
		_defineSetters: function() {
			var self = this,
				scrollPropertyAdapter = scrollProperty[self.options.scrollProperty],
				positionPropertyAdapter = positionProperty[self.options.positionProperty],
				setScrollLeft = scrollPropertyAdapter.setLeft,
				setScrollTop = scrollPropertyAdapter.setTop;

			this._setScrollLeft = (typeof setScrollLeft === 'function' ? function(val) {
				setScrollLeft(self.$scrollElement, val);
			} : $.noop);

			this._setScrollTop = (typeof setScrollTop === 'function' ? function(val) {
				setScrollTop(self.$scrollElement, val);
			} : $.noop);

			this._setPosition = positionPropertyAdapter.setPosition ||
				function($elem, left, startingLeft, top, startingTop) {
					if (self.options.horizontalScrolling) {
						positionPropertyAdapter.setLeft($elem, left, startingLeft);
					}

					if (self.options.verticalScrolling) {
						positionPropertyAdapter.setTop($elem, top, startingTop);
					}
				};
		},
		_handleWindowLoadAndResize: function() {
			var self = this,
				$window = $(window);

			if (self.options.responsive) {
				$window.bind('load.' + this.name, function() {
					self.refresh();
				});
			}

			$window.bind('resize.' + this.name, function() {
				self._detectViewport();

				if (self.options.responsive) {
					self.refresh();
				}
			});
		},
		refresh: function(options) {
			var self = this,
				oldLeft = self._getScrollLeft(),
				oldTop = self._getScrollTop();

			if (!options || !options.firstLoad) {
				this._reset();
			}

			this._setScrollLeft(0);
			this._setScrollTop(0);

			this._setOffsets();
			this._findParticles();
			this._findBackgrounds();

			// Fix for WebKit background rendering bug
			if (options && options.firstLoad && /WebKit/.test(navigator.userAgent)) {
				$(window).load(function() {
					var oldLeft = self._getScrollLeft(),
						oldTop = self._getScrollTop();

					self._setScrollLeft(oldLeft + 1);
					self._setScrollTop(oldTop + 1);

					self._setScrollLeft(oldLeft);
					self._setScrollTop(oldTop);
				});
			}

			this._setScrollLeft(oldLeft);
			this._setScrollTop(oldTop);
		},
		_detectViewport: function() {
			var viewportOffsets = this.$viewportElement.offset(),
				hasOffsets = viewportOffsets !== null && viewportOffsets !== undefined;

			this.viewportWidth = this.$viewportElement.width();
			this.viewportHeight = this.$viewportElement.height();

			this.viewportOffsetTop = (hasOffsets ? viewportOffsets.top : 0);
			this.viewportOffsetLeft = (hasOffsets ? viewportOffsets.left : 0);
		},
		_findParticles: function() {
			var self = this,
				scrollLeft = this._getScrollLeft(),
				scrollTop = this._getScrollTop();

			if (this.particles !== undefined) {
				for (var i = this.particles.length - 1; i >= 0; i--) {
					this.particles[i].$element.data('stellar-elementIsActive', undefined);
				}
			}

			this.particles = [];

			if (!this.options.parallaxElements) return;

			this.$element.find('[data-stellar-ratio]').each(function(i) {
				var $this = $(this),
					horizontalOffset,
					verticalOffset,
					positionLeft,
					positionTop,
					marginLeft,
					marginTop,
					$offsetParent,
					offsetLeft,
					offsetTop,
					parentOffsetLeft = 0,
					parentOffsetTop = 0,
					tempParentOffsetLeft = 0,
					tempParentOffsetTop = 0;

				// Ensure this element isn't already part of another scrolling element
				if (!$this.data('stellar-elementIsActive')) {
					$this.data('stellar-elementIsActive', this);
				} else if ($this.data('stellar-elementIsActive') !== this) {
					return;
				}

				self.options.showElement($this);

				// Save/restore the original top and left CSS values in case we refresh the particles or destroy the instance
				if (!$this.data('stellar-startingLeft')) {
					$this.data('stellar-startingLeft', $this.css('left'));
					$this.data('stellar-startingTop', $this.css('top'));
				} else {
					$this.css('left', $this.data('stellar-startingLeft'));
					$this.css('top', $this.data('stellar-startingTop'));
				}

				positionLeft = $this.position().left;
				positionTop = $this.position().top;

				// Catch-all for margin top/left properties (these evaluate to 'auto' in IE7 and IE8)
				marginLeft = ($this.css('margin-left') === 'auto') ? 0 : parseInt($this.css('margin-left'), 10);
				marginTop = ($this.css('margin-top') === 'auto') ? 0 : parseInt($this.css('margin-top'), 10);

				offsetLeft = $this.offset().left - marginLeft;
				offsetTop = $this.offset().top - marginTop;

				// Calculate the offset parent
				$this.parents().each(function() {
					var $this = $(this);

					if ($this.data('stellar-offset-parent') === true) {
						parentOffsetLeft = tempParentOffsetLeft;
						parentOffsetTop = tempParentOffsetTop;
						$offsetParent = $this;

						return false;
					} else {
						tempParentOffsetLeft += $this.position().left;
						tempParentOffsetTop += $this.position().top;
					}
				});

				// Detect the offsets
				horizontalOffset = ($this.data('stellar-horizontal-offset') !== undefined ? $this.data('stellar-horizontal-offset') : ($offsetParent !== undefined && $offsetParent.data('stellar-horizontal-offset') !== undefined ? $offsetParent.data('stellar-horizontal-offset') : self.horizontalOffset));
				verticalOffset = ($this.data('stellar-vertical-offset') !== undefined ? $this.data('stellar-vertical-offset') : ($offsetParent !== undefined && $offsetParent.data('stellar-vertical-offset') !== undefined ? $offsetParent.data('stellar-vertical-offset') : self.verticalOffset));

				// Add our object to the particles collection
				self.particles.push({
					$element: $this,
					$offsetParent: $offsetParent,
					isFixed: $this.css('position') === 'fixed',
					horizontalOffset: horizontalOffset,
					verticalOffset: verticalOffset,
					startingPositionLeft: positionLeft,
					startingPositionTop: positionTop,
					startingOffsetLeft: offsetLeft,
					startingOffsetTop: offsetTop,
					parentOffsetLeft: parentOffsetLeft,
					parentOffsetTop: parentOffsetTop,
					stellarRatio: ($this.data('stellar-ratio') !== undefined ? $this.data('stellar-ratio') : 1),
					width: $this.outerWidth(true),
					height: $this.outerHeight(true),
					isHidden: false
				});
			});
		},
		_findBackgrounds: function() {
			var self = this,
				scrollLeft = this._getScrollLeft(),
				scrollTop = this._getScrollTop(),
				$backgroundElements;

			this.backgrounds = [];

			if (!this.options.parallaxBackgrounds) return;

			$backgroundElements = this.$element.find('[data-stellar-background-ratio]');

			if (this.$element.data('stellar-background-ratio')) {
                $backgroundElements = $backgroundElements.add(this.$element);
			}

			$backgroundElements.each(function() {
				var $this = $(this),
					backgroundPosition = getBackgroundPosition($this),
					horizontalOffset,
					verticalOffset,
					positionLeft,
					positionTop,
					marginLeft,
					marginTop,
					offsetLeft,
					offsetTop,
					$offsetParent,
					parentOffsetLeft = 0,
					parentOffsetTop = 0,
					tempParentOffsetLeft = 0,
					tempParentOffsetTop = 0;

				// Ensure this element isn't already part of another scrolling element
				if (!$this.data('stellar-backgroundIsActive')) {
					$this.data('stellar-backgroundIsActive', this);
				} else if ($this.data('stellar-backgroundIsActive') !== this) {
					return;
				}

				// Save/restore the original top and left CSS values in case we destroy the instance
				if (!$this.data('stellar-backgroundStartingLeft')) {
					$this.data('stellar-backgroundStartingLeft', backgroundPosition[0]);
					$this.data('stellar-backgroundStartingTop', backgroundPosition[1]);
				} else {
					setBackgroundPosition($this, $this.data('stellar-backgroundStartingLeft'), $this.data('stellar-backgroundStartingTop'));
				}

				// Catch-all for margin top/left properties (these evaluate to 'auto' in IE7 and IE8)
				marginLeft = ($this.css('margin-left') === 'auto') ? 0 : parseInt($this.css('margin-left'), 10);
				marginTop = ($this.css('margin-top') === 'auto') ? 0 : parseInt($this.css('margin-top'), 10);

				offsetLeft = $this.offset().left - marginLeft - scrollLeft;
				offsetTop = $this.offset().top - marginTop - scrollTop;
				
				// Calculate the offset parent
				$this.parents().each(function() {
					var $this = $(this);

					if ($this.data('stellar-offset-parent') === true) {
						parentOffsetLeft = tempParentOffsetLeft;
						parentOffsetTop = tempParentOffsetTop;
						$offsetParent = $this;

						return false;
					} else {
						tempParentOffsetLeft += $this.position().left;
						tempParentOffsetTop += $this.position().top;
					}
				});

				// Detect the offsets
				horizontalOffset = ($this.data('stellar-horizontal-offset') !== undefined ? $this.data('stellar-horizontal-offset') : ($offsetParent !== undefined && $offsetParent.data('stellar-horizontal-offset') !== undefined ? $offsetParent.data('stellar-horizontal-offset') : self.horizontalOffset));
				verticalOffset = ($this.data('stellar-vertical-offset') !== undefined ? $this.data('stellar-vertical-offset') : ($offsetParent !== undefined && $offsetParent.data('stellar-vertical-offset') !== undefined ? $offsetParent.data('stellar-vertical-offset') : self.verticalOffset));

				self.backgrounds.push({
					$element: $this,
					$offsetParent: $offsetParent,
					isFixed: $this.css('background-attachment') === 'fixed',
					horizontalOffset: horizontalOffset,
					verticalOffset: verticalOffset,
					startingValueLeft: backgroundPosition[0],
					startingValueTop: backgroundPosition[1],
					startingBackgroundPositionLeft: (isNaN(parseInt(backgroundPosition[0], 10)) ? 0 : parseInt(backgroundPosition[0], 10)),
					startingBackgroundPositionTop: (isNaN(parseInt(backgroundPosition[1], 10)) ? 0 : parseInt(backgroundPosition[1], 10)),
					startingPositionLeft: $this.position().left,
					startingPositionTop: $this.position().top,
					startingOffsetLeft: offsetLeft,
					startingOffsetTop: offsetTop,
					parentOffsetLeft: parentOffsetLeft,
					parentOffsetTop: parentOffsetTop,
					stellarRatio: ($this.data('stellar-background-ratio') === undefined ? 1 : $this.data('stellar-background-ratio'))
				});
			});
		},
		_reset: function() {
			var particle,
				startingPositionLeft,
				startingPositionTop,
				background,
				i;

			for (i = this.particles.length - 1; i >= 0; i--) {
				particle = this.particles[i];
				startingPositionLeft = particle.$element.data('stellar-startingLeft');
				startingPositionTop = particle.$element.data('stellar-startingTop');

				this._setPosition(particle.$element, startingPositionLeft, startingPositionLeft, startingPositionTop, startingPositionTop);

				this.options.showElement(particle.$element);

				particle.$element.data('stellar-startingLeft', null).data('stellar-elementIsActive', null).data('stellar-backgroundIsActive', null);
			}

			for (i = this.backgrounds.length - 1; i >= 0; i--) {
				background = this.backgrounds[i];

				background.$element.data('stellar-backgroundStartingLeft', null).data('stellar-backgroundStartingTop', null);

				setBackgroundPosition(background.$element, background.startingValueLeft, background.startingValueTop);
			}
		},
		destroy: function() {
			this._reset();

			this.$scrollElement.unbind('resize.' + this.name).unbind('scroll.' + this.name);
			this._animationLoop = $.noop;

			$(window).unbind('load.' + this.name).unbind('resize.' + this.name);
		},
		_setOffsets: function() {
			var self = this,
				$window = $(window);

			$window.unbind('resize.horizontal-' + this.name).unbind('resize.vertical-' + this.name);

			if (typeof this.options.horizontalOffset === 'function') {
				this.horizontalOffset = this.options.horizontalOffset();
				$window.bind('resize.horizontal-' + this.name, function() {
					self.horizontalOffset = self.options.horizontalOffset();
				});
			} else {
				this.horizontalOffset = this.options.horizontalOffset;
			}

			if (typeof this.options.verticalOffset === 'function') {
				this.verticalOffset = this.options.verticalOffset();
				$window.bind('resize.vertical-' + this.name, function() {
					self.verticalOffset = self.options.verticalOffset();
				});
			} else {
				this.verticalOffset = this.options.verticalOffset;
			}
		},
		_repositionElements: function() {
			var scrollLeft = this._getScrollLeft(),
				scrollTop = this._getScrollTop(),
				horizontalOffset,
				verticalOffset,
				particle,
				fixedRatioOffset,
				background,
				bgLeft,
				bgTop,
				isVisibleVertical = true,
				isVisibleHorizontal = true,
				newPositionLeft,
				newPositionTop,
				newOffsetLeft,
				newOffsetTop,
				i;

			// First check that the scroll position or container size has changed
			if (this.currentScrollLeft === scrollLeft && this.currentScrollTop === scrollTop && this.currentWidth === this.viewportWidth && this.currentHeight === this.viewportHeight) {
				return;
			} else {
				this.currentScrollLeft = scrollLeft;
				this.currentScrollTop = scrollTop;
				this.currentWidth = this.viewportWidth;
				this.currentHeight = this.viewportHeight;
			}

			// Reposition elements
			for (i = this.particles.length - 1; i >= 0; i--) {
				particle = this.particles[i];

				fixedRatioOffset = (particle.isFixed ? 1 : 0);

				// Calculate position, then calculate what the particle's new offset will be (for visibility check)
				if (this.options.horizontalScrolling) {
					newPositionLeft = (scrollLeft + particle.horizontalOffset + this.viewportOffsetLeft + particle.startingPositionLeft - particle.startingOffsetLeft + particle.parentOffsetLeft) * -(particle.stellarRatio + fixedRatioOffset - 1) + particle.startingPositionLeft;
					newOffsetLeft = newPositionLeft - particle.startingPositionLeft + particle.startingOffsetLeft;
				} else {
					newPositionLeft = particle.startingPositionLeft;
					newOffsetLeft = particle.startingOffsetLeft;
				}

				if (this.options.verticalScrolling) {
					newPositionTop = (scrollTop + particle.verticalOffset + this.viewportOffsetTop + particle.startingPositionTop - particle.startingOffsetTop + particle.parentOffsetTop) * -(particle.stellarRatio + fixedRatioOffset - 1) + particle.startingPositionTop;
					newOffsetTop = newPositionTop - particle.startingPositionTop + particle.startingOffsetTop;
				} else {
					newPositionTop = particle.startingPositionTop;
					newOffsetTop = particle.startingOffsetTop;
				}

				// Check visibility
				if (this.options.hideDistantElements) {
					isVisibleHorizontal = !this.options.horizontalScrolling || newOffsetLeft + particle.width > (particle.isFixed ? 0 : scrollLeft) && newOffsetLeft < (particle.isFixed ? 0 : scrollLeft) + this.viewportWidth + this.viewportOffsetLeft;
					isVisibleVertical = !this.options.verticalScrolling || newOffsetTop + particle.height > (particle.isFixed ? 0 : scrollTop) && newOffsetTop < (particle.isFixed ? 0 : scrollTop) + this.viewportHeight + this.viewportOffsetTop;
				}

				if (isVisibleHorizontal && isVisibleVertical) {
					if (particle.isHidden) {
						this.options.showElement(particle.$element);
						particle.isHidden = false;
					}

					this._setPosition(particle.$element, newPositionLeft, particle.startingPositionLeft, newPositionTop, particle.startingPositionTop);
				} else {
					if (!particle.isHidden) {
						this.options.hideElement(particle.$element);
						particle.isHidden = true;
					}
				}
			}

			// Reposition backgrounds
			for (i = this.backgrounds.length - 1; i >= 0; i--) {
				background = this.backgrounds[i];

				fixedRatioOffset = (background.isFixed ? 0 : 1);
				bgLeft = (this.options.horizontalScrolling ? (scrollLeft + background.horizontalOffset - this.viewportOffsetLeft - background.startingOffsetLeft + background.parentOffsetLeft - background.startingBackgroundPositionLeft) * (fixedRatioOffset - background.stellarRatio) + 'px' : background.startingValueLeft);
				bgTop = (this.options.verticalScrolling ? (scrollTop + background.verticalOffset - this.viewportOffsetTop - background.startingOffsetTop + background.parentOffsetTop - background.startingBackgroundPositionTop) * (fixedRatioOffset - background.stellarRatio) + 'px' : background.startingValueTop);

				setBackgroundPosition(background.$element, bgLeft, bgTop);
			}
		},
		_handleScrollEvent: function() {
			var self = this,
				ticking = false;

			var update = function() {
				self._repositionElements();
				ticking = false;
			};

			var requestTick = function() {
				if (!ticking) {
					requestAnimFrame(update);
					ticking = true;
				}
			};
			
			this.$scrollElement.bind('scroll.' + this.name, requestTick);
			requestTick();
		},
		_startAnimationLoop: function() {
			var self = this;

			this._animationLoop = function() {
				requestAnimFrame(self._animationLoop);
				self._repositionElements();
			};
			this._animationLoop();
		}
	};

	$.fn[pluginName] = function (options) {
		var args = arguments;
		if (options === undefined || typeof options === 'object') {
			return this.each(function () {
				if (!$.data(this, 'plugin_' + pluginName)) {
					$.data(this, 'plugin_' + pluginName, new Plugin(this, options));
				}
			});
		} else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {
			return this.each(function () {
				var instance = $.data(this, 'plugin_' + pluginName);
				if (instance instanceof Plugin && typeof instance[options] === 'function') {
					instance[options].apply(instance, Array.prototype.slice.call(args, 1));
				}
				if (options === 'destroy') {
					$.data(this, 'plugin_' + pluginName, null);
				}
			});
		}
	};

	$[pluginName] = function(options) {
		var $window = $(window);
		return $window.stellar.apply($window, Array.prototype.slice.call(arguments, 0));
	};

	// Expose the scroll and position property function hashes so they can be extended
	$[pluginName].scrollProperty = scrollProperty;
	$[pluginName].positionProperty = positionProperty;

	// Expose the plugin class so it can be modified
	window.Stellar = Plugin;
}(jQuery, this, document));


/*===============================
/templates/t3_bs3_blank/local/js/wow.js
================================================================================*/;
/*! WOW - v1.0.2 - 2014-10-28
* Copyright (c) 2014 Matthieu Aussaguel; Licensed MIT */(function(){var a,b,c,d,e,f=function(a,b){return function(){return a.apply(b,arguments)}},g=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in b)d=b[c],null==a[c]&&(a[c]=d);return a},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a.prototype.addEvent=function(a,b,c){return null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c},a.prototype.removeEvent=function(a,b,c){return null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]},a.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},a}(),c=this.WeakMap||this.MozWeakMap||(c=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),a=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a=function(){function a(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return a.notSupported=!0,a.prototype.observe=function(){},a}()),d=this.getComputedStyle||function(a){return this.getPropertyValue=function(b){var c;return"float"===b&&(b="styleFloat"),e.test(b)&&b.replace(e,function(a,b){return b.toUpperCase()}),(null!=(c=a.currentStyle)?c[b]:void 0)||null},this},e=/(\-([a-z]){1})/g,this.WOW=function(){function e(a){null==a&&(a={}),this.scrollCallback=f(this.scrollCallback,this),this.scrollHandler=f(this.scrollHandler,this),this.start=f(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),this.animationNameCache=new c}return e.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0},e.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},e.prototype.start=function(){var b,c,d,e;if(this.stopped=!1,this.boxes=function(){var a,c,d,e;for(d=this.element.querySelectorAll("."+this.config.boxClass),e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.all=function(){var a,c,d,e;for(d=this.boxes,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(e=this.boxes,c=0,d=e.length;d>c;c++)b=e[c],this.applyStyle(b,!0);return this.disabled()||(this.util().addEvent(window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new a(function(a){return function(b){var c,d,e,f,g;for(g=[],e=0,f=b.length;f>e;e++)d=b[e],g.push(function(){var a,b,e,f;for(e=d.addedNodes||[],f=[],a=0,b=e.length;b>a;a++)c=e[a],f.push(this.doSync(c));return f}.call(a));return g}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},e.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},e.prototype.sync=function(){return a.notSupported?this.doSync(this.element):void 0},e.prototype.doSync=function(a){var b,c,d,e,f;if(null==a&&(a=this.element),1===a.nodeType){for(a=a.parentNode||a,e=a.querySelectorAll("."+this.config.boxClass),f=[],c=0,d=e.length;d>c;c++)b=e[c],g.call(this.all,b)<0?(this.boxes.push(b),this.all.push(b),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(b,!0),f.push(this.scrolled=!0)):f.push(void 0);return f}},e.prototype.show=function(a){return this.applyStyle(a),a.className=""+a.className+" "+this.config.animateClass},e.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},e.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),e.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.style.visibility="visible");return e},e.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},e.prototype.vendors=["moz","webkit"],e.prototype.vendorSet=function(a,b){var c,d,e,f;f=[];for(c in b)d=b[c],a[""+c]=d,f.push(function(){var b,f,g,h;for(g=this.vendors,h=[],b=0,f=g.length;f>b;b++)e=g[b],h.push(a[""+e+c.charAt(0).toUpperCase()+c.substr(1)]=d);return h}.call(this));return f},e.prototype.vendorCSS=function(a,b){var c,e,f,g,h,i;for(e=d(a),c=e.getPropertyCSSValue(b),i=this.vendors,g=0,h=i.length;h>g;g++)f=i[g],c=c||e.getPropertyCSSValue("-"+f+"-"+b);return c},e.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=d(a).getPropertyValue("animation-name")}return"none"===b?"":b},e.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},e.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},e.prototype.scrollHandler=function(){return this.scrolled=!0},e.prototype.scrollCallback=function(){var a;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},e.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},e.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=window.pageYOffset,e=f+Math.min(this.element.clientHeight,this.util().innerHeight())-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},e.prototype.util=function(){return null!=this._util?this._util:this._util=new b},e.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},e}()}).call(this);


/*===============================
/plugins/system/t3/base-bs3/js/nav-collapse.js
================================================================================*/;
/**
 *------------------------------------------------------------------------------
 * @package       T3 Framework for Joomla!
 *------------------------------------------------------------------------------
 * @copyright     Copyright (C) 2004-2013 JoomlArt.com. All Rights Reserved.
 * @license       GNU General Public License version 2 or later; see LICENSE.txt
 * @authors       JoomlArt, JoomlaBamboo, (contribute to this project at github
 *                & Google group to become co-author)
 * @Google group: https://groups.google.com/forum/#!forum/t3fw
 * @Link:         http://t3-framework.org
 *------------------------------------------------------------------------------
 */

jQuery(document).ready(function ($) {

    // clone the collapse menu from mainnav (.t3-navbar)
    $('.t3-navbar').each(function(){
        var $navwrapper  = $(this),
            $menu        = null,
            $placeholder = null;

        if ($navwrapper.find('.t3-megamenu').length) {
            
            // clone for megamenu
            $menu        = $navwrapper.find('ul.level0').clone(),
            $placeholder = $navwrapper.prev('.navbar-collapse');

            if(!$placeholder.length){
                //get the empty one
                $placeholder = $navwrapper.closest('.container, .t3-mainnav').find('.navbar-collapse:empty');
            }
            
            var lis = $menu.find('li[data-id]'),
                liactive = lis.filter('.current');
            
            // clean class
            lis.removeClass('mega dropdown mega-align-left mega-align-right mega-align-center mega-align-adjust');
            // rebuild
            lis.each(function () {

                // get firstchild - a or span
                var $li = $(this),
                    $child = $li.find('>:first-child');

                if ($child[0].nodeName == 'DIV') {
                    $child.find('>:first-child').prependTo($li);
                    $child.remove();
                }

                // remove caret
                if($li.data('hidewcol')){
                    $child.find('.caret').remove();
                    $child.nextAll().remove();

                    return; //that is all for this item
                }

                // find subnav and inject into one ul
                var subul = $li.find('ul.level' + $li.data('level'));
                if (subul.length) {
                    // create subnav
                    $ul = $('<ul class="level' + $li.data('level') + ' dropdown-menu">');
                    subul.each(function () {
                        // check if the ul not in a hide when collapsed column
                        if ($(this).parents('.mega-col-nav').data('hidewcol')) return ;
                        $(this).find('>li').appendTo($ul);
                    });
                    if ($ul.children().length) {
                        $ul.appendTo($li);
                    }
                }

                // remove all child div
                $li.find('>div').remove();

                // clean caret if there was no real submenu
                if(!$li.children('ul').length){
                    $child.find('.caret').remove();
                }

                var divider = $li.hasClass('divider');

                // clear all attributes
                // $li.removeAttr('class');
                for (var x in $li.data()) {
                    $li.removeAttr('data-' + x)
                }
                $child.removeAttr('class');
                for (var x in $child.data()) {
                    $child.removeAttr('data-' + x)
                }

                if(divider){
                    $li.addClass('divider');
                }
            });

            // update class current
            liactive.addClass('current active');
            
        } else {
            // clone for bootstrap menu
            $menu = $navwrapper.find ('ul.nav').clone();
            $placeholder = $('.t3-navbar-collapse:empty, .navbar-collapse:empty').eq(0);
        }
        
        //so we have all structure, add standard bootstrap class
        $menu.find ('a[data-toggle="dropdown"]').removeAttr('data-toggle').removeAttr('data-target');
        $menu
            .find('> li > ul.dropdown-menu')
            .prev().attr('data-toggle', 'dropdown').attr('data-target', '#')
            .parent('li')
            .addClass(function(){
                return 'dropdown' + ($(this).data('level') > 1 ? ' dropdown-submenu' : '');
            });

        // inject into .t3-navbar-collapse
        $menu.appendTo ($placeholder);

    });
});



/*===============================
/plugins/system/gdpr/assets/js/jquery.noconflict.js
================================================================================*/;
/**
 * No conflict mode
 */
jQuery.noConflict();


/*===============================
https://www.brahmakumaris.org/media/plg_system_youtuber/assets/js/frontend.js
================================================================================*/;
(function($){
    "use strict";
	
	var dummyTip = null;
    
	function reBindScripts(){
		var lightBoxParams = {
			iframe: {'allowfullscreen':true},
		};
		if(window.mxYouTubeR_lightboxParams !== undefined){
			lightBoxParams = $.extend(lightBoxParams,mxYouTubeR_lightboxParams);
		}
		$('a.mxyt-lightbox').lightcase(lightBoxParams);
		
		$('.mxyt-tip').each(function(index, element) {
            var $this = $(this);
			var mainContainer = $this.closest('.mxYouTubeR');
			var _class = '';
			if(mainContainer.attr('class')){
				var matches = mainContainer.attr('class').match(/(mxYouTubeR_theme_[a-z0-9\-_]+)/);
				if(matches && matches.length>0){
					_class = matches[0];
				}
			}
			$this.off('mouseenter');
			$this.on('mouseenter',function(){
				if(!dummyTip.hasClass(_class)){
					dummyTip.addClass(_class);
				}
				dummyTip.children('span').html($this.attr('title'));
				var pos = $this.offset();
				dummyTip.css('left',pos.left+$this.innerWidth()/2-dummyTip.width()/2);
				dummyTip.css('top',pos.top);
				
				dummyTip.addClass('active');
				dummyTip.stop().css('opacity',0).animate({
					'opacity': 0.9,
					'margin-top': -25
				},200,'swing',function(){
					//console.info(tip,this);
				});
			});
			$this.off('mouseleave');
			$this.on('mouseleave',function(){
				dummyTip.removeClass(_class);
				dummyTip.removeClass('active');
				dummyTip.css('margin-top',-15);
			});
        });
		
		
		$('.mxyt-text-description.mxyt-less').each(function(index, element){
			var $this = $(this);
			if($this.next().is('.mxyt-text-description-btn')){
				return;
			}
			var moreBtn = $('<div class="mxyt-text-description-btn">'+window.mxYouTubeR.lang.more+'</div>');
			var fullHeight = $this.children().height();
			if($this.height()<fullHeight){
				$this.addClass('hasMore');
				moreBtn.insertAfter($this);
				moreBtn.off('click');
				moreBtn.on('click',function(){
					var btn = $(this);
					if($this.hasClass('mxyt-less')){
						$this.removeClass('mxyt-less');
						btn.html(window.mxYouTubeR.lang.less);
					}
					else{
						$this.addClass('mxyt-less');
						btn.html(window.mxYouTubeR.lang.more);
					}
				});
			}
			else{
				$this.removeClass('hasMore');
				$this.addClass('noMore');
			}
		});
		
		
		$('.mxyt-playlist-select span').off('click');
		$('.mxyt-playlist-select span').on('click',function(){
			var $this = $(this);
			playlistLoader.loadPlaylist($this.closest('.mxyt-channel-videos'),$this.attr('data-mxyt-cfg'),'');
			return false;
		});
		
		$('.mxyt-load-more').each(function(index, element) {
            var $this = $(this);
			if($this.attr('data-checked')){
				return;
			}
			$this.attr('data-checked','true');
			if($this.hasClass('mxyt-infinite-scroll')){
				$(window).on('scroll',function(){
					var top = $(window).scrollTop() + $(window).height();
					if(top>$this.offset().top){
						playlistLoader.loadMore($this);
					}
				});
			}
			else{
				$this.off('click');
				$this.on('click',function(){
					playlistLoader.loadMore($(this));
					return false;
				});
			}
        });
	}
	
	var playlistLoader = {
		loading: false,
		pageToken: '',
		button: null,
		loadingBar: null,
		params: {},
		target: null,
		
		bind: function(jqBtn){
			this.button = jqBtn;
			this.pageToken = jqBtn.attr('data-mxyt-pagetoken');
			this.params = jqBtn.attr('data-mxyt-cfg');
			this.target = jqBtn.closest('.mxYouTubeR').find('.mxyt-playlist');
		},
		loadMore: function(jqBtn){
			if(this.loading){
				return false;
			}
			this.bind(jqBtn);
			if(this.pageToken==''){
				return false;
			}
			this.loading = true;
			this.loadingBar = $('<i class="mxyt-icon mxyt-icon-spinner"></i>');
			this.button.hide();
			this.button.parent().append(this.loadingBar);
			
			var loader = this;
			$.ajax({
				url: window.mxYouTubeR.ajax_url,
				type: 'post',
				dataType: "json",
				data:{ 
					action: 'mxyoutuber',
					pageToken: loader.pageToken,
					params: loader.params,
				},
				success: function( result ){
					if(result.success){
						loader.loaded(result);
					}
					else{
						alert('mxYouTubeR ajax error.');
					}
				},
				error: function(){
					alert('mxYouTubeR ajax error.');
				}
			});
		},
		loadPlaylist: function(_container,_params,_pageToken){
			if(this.loading){
				return false;
			}
			this.loading = true;
			var loadingBar = $('<p align="center"><i class="mxyt-icon mxyt-icon-spinner"></i></p>');
			_container.html(loadingBar);
			
			var loader = this;
			$.ajax({
				url: window.mxYouTubeR.ajax_url,
				type: 'post',
				dataType: "json",
				data:{ 
					action: 'mxyoutuber',
					pageToken: _pageToken,
					params: _params,
				},
				success: function( result ){
					if(result.success){
						loader.loading = false;
						loadingBar.remove();
						var items = $($(result.html).find('.mxyt-channel-videos').html());
						_container.append(items);
						reBindScripts();
						items.css('opacity',0);
						items.stop().animate({
							'opacity': 1
						},300);
					}
					else{
						alert('mxYouTubeR ajax error.');
					}
				},
				error: function(){
					alert('mxYouTubeR ajax error.');
				}
			});
		},
		loaded: function(result){
			this.pageToken = result.pageToken;
			this.loading = false;
			this.loadingBar.remove();
			this.button.attr('data-mxyt-pagetoken',this.pageToken);
			if(this.pageToken){
				this.button.show();
			}
			var items = $(result.html).find('.mxyt-row, .mxyt-brow');
			this.target.append(items);
			reBindScripts();
			items.css('opacity',0);
			items.stop().animate({
				'opacity': 1
			},300);
		}
	};
	
	window.mxYouTuberInit = function(){
		if(!dummyTip){
			dummyTip = $('<div id="mxyt-tooltip" class="mxyt-tooltip"><span></span><div></div></div>');
			$('body').append(dummyTip);
		}
		reBindScripts();	
	}
		
    $(document).ready(function(e) {
        window.mxYouTuberInit();
    });
	
})(jQuery);










/*===============================
https://www.brahmakumaris.org/media/plg_system_youtuber/assets/lightcase/lightcase.js
================================================================================*/;
/*
 * Lightcase - jQuery Plugin
 * The smart and flexible Lightbox Plugin.
 *
 * @author		Cornel Boppart <cornel@bopp-art.com>
 * @copyright	Author
 *
 * @version		2.1.1 (12/07/2015)
 */

;(function ($) {
	window.lightcase = {
		cache : {},

		support : {},

		labels : {
			'errorMessage' : 'Source could not be found...',
			'sequenceInfo.of' : ' of ',
			'close' : 'Close',
			'navigator.prev' : 'Prev',
			'navigator.next' : 'Next',
			'navigator.play' : 'Play',
			'navigator.pause' : 'Pause'
		},

		/**
		 * Initializes the plugin
		 *
		 * @param	{object}	options
		 * @return	{object}
		 */
		init : function (options) {
			return this.each(function () {
				$(this).unbind('click').click(function (event) {
					event.preventDefault();
					$(this).lightcase('start', options);
				});
			});
		},

		/**
		 * Starts the plugin
		 *
		 * @param	{object}	options
		 * @return	{void}
		 */
		start : function (options) {
			lightcase.settings = $.extend(true, {
				idPrefix : 'lightcase-',
				classPrefix : 'lightcase-',
				transition : 'elastic',
				transitionIn : null,
				transitionOut : null,
				cssTransitions : true,
				speedIn : 250,
				speedOut : 250,
				maxWidth : 800,
				maxHeight : 500,
				forceWidth : false,
				forceHeight : false,
				liveResize : true,
				fullScreenModeForMobile : true,
				mobileMatchExpression : /(iphone|ipod|ipad|android|blackberry|symbian)/,
				disableShrink : false,
				shrinkFactor : .75,
				overlayOpacity : .9,
				slideshow : false,
				timeout : 5000,
				swipe : true,
				useKeys : true,
				navigateEndless : true,
				closeOnOverlayClick : true,
				title : null,
				caption : null,
				showTitle : true,
				showCaption : true,
				showSequenceInfo : true,
				inline : {
					width : 'auto',
					height : 'auto'
				},
				ajax : {
					width : 'auto',
					height : 'auto',
					type : 'get',
					dataType : 'html',
					data : {}
				},
				iframe : {
					width : 800,
					height : 385,
					frameborder : 0
				},
				flash : {
					width : 400,
					height : 205,
					wmode : 'transparent'
				},
				video : {
					width : 400,
					height : 225,
					poster : '',
					preload : 'auto',
					controls : true,
					autobuffer : true,
					autoplay : true,
					loop : false
				},
				attr: 'data-rel',
				href : null,
				type : null,
				typeMapping : {
					'image' : 'jpg,jpeg,gif,png,bmp',
					'flash' : 'swf',
					'video' : 'mp4,mov,ogv,ogg,webm',
					'iframe' : 'html,php',
					'ajax' : 'json,txt',
					'inline' : '#'
				},
				errorMessage : function () {
					return '<p class="' + lightcase.settings.classPrefix + 'error">' + lightcase.labels['errorMessage'] + '</p>';
				},
				markup : function () {
					$('body').append(
						$overlay = $('<div id="' + lightcase.settings.idPrefix + 'overlay"></div>'),
						$loading = $('<div id="' + lightcase.settings.idPrefix + 'loading" class="' + lightcase.settings.classPrefix + 'icon-spin"></div>'),
						$case = $('<div id="' + lightcase.settings.idPrefix + 'case" aria-hidden="true" role="dialog"></div>')
					);
					$case.after(
						$nav = $('<div id="' + lightcase.settings.idPrefix + 'nav"></div>')
					);
					$nav.append(
						$close = $('<a href="#" class="' + lightcase.settings.classPrefix + 'icon-close"><span>' + lightcase.labels['close'] + '</span></a>'),
						$prev = $('<a href="#" class="' + lightcase.settings.classPrefix + 'icon-prev"><span>' + lightcase.labels['navigator.prev'] + '</span></a>').hide(),
						$next = $('<a href="#" class="' + lightcase.settings.classPrefix + 'icon-next"><span>' + lightcase.labels['navigator.next'] + '</span></a>').hide(),
						$play = $('<a href="#" class="' + lightcase.settings.classPrefix + 'icon-play"><span>' + lightcase.labels['navigator.play'] + '</span></a>').hide(),
						$pause = $('<a href="#" class="' + lightcase.settings.classPrefix + 'icon-pause"><span>' + lightcase.labels['navigator.pause'] + '</span></a>').hide()
					);
					$case.append(
						$content = $('<div class="' + lightcase.settings.classPrefix + 'content"></div>'),
						$info = $('<div class="' + lightcase.settings.classPrefix + 'info"></div>')
					);
					$content.append(
						$contentInner = $('<div class="' + lightcase.settings.classPrefix + 'contentInner"></div>')
					);
					$info.append(
						$sequenceInfo = $('<div class="' + lightcase.settings.classPrefix + 'sequenceInfo"></div>'),
						$title = $('<h4 class="' + lightcase.settings.classPrefix + 'title"></h4>'),
						$caption = $('<p class="' + lightcase.settings.classPrefix + 'caption"></p>')
					);
				},
				onInit : {},
				onStart : {},
				onFinish : {},
				onClose : {},
				onCleanup : {}
			}, options);

			// Call onInit hook functions
			lightcase.callHooks(lightcase.settings.onInit);

			lightcase.objectData = lightcase.getObjectData(this);

			lightcase.cacheScrollPosition();
			lightcase.watchScrollInteraction();

			lightcase.addElements();
			lightcase.lightcaseOpen();

			lightcase.dimensions = lightcase.getDimensions();
		},

		/**
		 * Gets the object data
		 *
		 * @param	{object}	$object
		 * @return	{object}	objectData
		 */
		getObjectData : function ($object) {
		 	var objectData = {
				$link : $object,
				title : lightcase.settings.title || $object.attr('title'),
				caption : lightcase.settings.caption || $object.children('img').attr('alt'),
				url : lightcase.verifyDataUrl(lightcase.settings.href || $object.attr('data-href') || $object.attr('href')),
				requestType : lightcase.settings.ajax.type,
				requestData : lightcase.settings.ajax.data,
				requestDataType : lightcase.settings.ajax.dataType,
				rel : $object.attr(lightcase.settings.attr),
				type : lightcase.settings.type || lightcase.verifyDataType($object.attr('data-href') || $object.attr('href')),
				isPartOfSequence : lightcase.isPartOfSequence($object.attr(lightcase.settings.attr), ':'),
				isPartOfSequenceWithSlideshow : lightcase.isPartOfSequence($object.attr(lightcase.settings.attr), ':slideshow'),
				currentIndex : $('[' + lightcase.settings.attr + '="' + $object.attr(lightcase.settings.attr) + '"]').index($object),
				sequenceLength : $('[' + lightcase.settings.attr + '="' + $object.attr(lightcase.settings.attr) + '"]').length
			};

			// Add sequence info to objectData
			objectData.sequenceInfo = (objectData.currentIndex + 1) + lightcase.labels['sequenceInfo.of'] + objectData.sequenceLength;

			return objectData;
		},

		/**
		 * Verifies if the link is part of a sequence
		 *
		 * @param	{string}	rel
		 * @param	{string}	expression
		 * @return	{boolean}
		 */
		isPartOfSequence : function (rel, expression) {
			var getSimilarLinks = $('[' + lightcase.settings.attr + '="' + rel + '"]'),
				regexp = new RegExp(expression);

			if (regexp.test(rel) && getSimilarLinks.length > 1) {
				return true;
			} else {
				return false;
			}
		},

		/**
		 * Verifies if the slideshow should be enabled
		 *
		 * @return	{boolean}
		 */
		isSlideshowEnabled : function () {
			if (lightcase.objectData.isPartOfSequence && (lightcase.settings.slideshow === true || lightcase.objectData.isPartOfSequenceWithSlideshow === true)) {
				return true;
			} else {
				return false;
			}
		},

		/**
		 * Loads the new content to show
		 *
		 * @return	{void}
		 */
		loadContent : function () {
			if (lightcase.cache.originalObject) {
				lightcase.restoreObject();
			}
			
			lightcase.createObject();
		},

		/**
		 * Creates a new object
		 *
		 * @return	{void}
		 */
		createObject : function () {
			var $object;

			// Create object
			switch (lightcase.objectData.type) {
				case 'image' :
					$object = $(new Image());
					$object.attr({
						// The time expression is required to prevent the binding of an image load
						'src' : lightcase.objectData.url,
						'alt' : lightcase.objectData.title
					});
					break;
				case 'inline' :
					$object = $('<div class="' + lightcase.settings.classPrefix + 'inlineWrap"></div>');
					$object.html(lightcase.cloneObject($(lightcase.objectData.url)));

					// Add custom attributes from lightcase.settings
					$.each(lightcase.settings.inline, function (name, value) {
						$object.attr('data-' + name, value);
					});
					break;
				case 'ajax' :
					$object = $('<div class="' + lightcase.settings.classPrefix + 'inlineWrap"></div>');

					// Add custom attributes from lightcase.settings
					$.each(lightcase.settings.ajax, function (name, value) {
						if (name !== 'data') {
							$object.attr('data-' + name, value);
						}
					});
					break;
				case 'flash' :
					$object = $('<embed src="' + lightcase.objectData.url + '" type="application/x-shockwave-flash"></embed>');

					// Add custom attributes from lightcase.settings
					$.each(lightcase.settings.flash, function (name, value) {
						$object.attr(name, value);
					});
					break;
				case 'video' :
					$object = $('<video></video>');
					$object.attr('src', lightcase.objectData.url);

					// Add custom attributes from lightcase.settings
					$.each(lightcase.settings.video, function (name, value) {
						$object.attr(name, value);
					});
					break;
				default :
					$object = $('<iframe></iframe>');
					$object.attr({
						'src' : lightcase.objectData.url
					});

					// Add custom attributes from lightcase.settings
					$.each(lightcase.settings.iframe, function (name, value) {
						$object.attr(name, value);
					});
			}

			lightcase.addObject($object);
			lightcase.loadObject($object);
		},

		/**
		 * Adds the new object to the markup
		 *
		 * @param	{object}	$object
		 * @return	{void}
		 */
		addObject : function ($object) {
			// Add object to content holder
			$contentInner.html($object);

			// Start loading
			lightcase.loading('start');

			// Call onStart hook functions
			lightcase.callHooks(lightcase.settings.onStart);
			
			// Call hook function on initialization

			// Add sequenceInfo to the content holder or hide if its empty
			if (lightcase.settings.showSequenceInfo === true && lightcase.objectData.isPartOfSequence) {
				$sequenceInfo.html(lightcase.objectData.sequenceInfo);
				$sequenceInfo.show();
			} else {
				$sequenceInfo.empty();
				$sequenceInfo.hide();
			}
			// Add title to the content holder or hide if its empty
			if (lightcase.settings.showTitle === true && lightcase.objectData.title !== undefined && lightcase.objectData.title !== '') {
				$title.html(lightcase.objectData.title);
				$title.show();
			} else {
				$title.empty();
				$title.hide();
			}
			// Add caption to the content holder or hide if its empty
			if (lightcase.settings.showCaption === true && lightcase.objectData.caption !== undefined && lightcase.objectData.caption !== '') {
				$caption.html(lightcase.objectData.caption);
				$caption.show();
			} else {
				$caption.empty();
				$caption.hide();
			}
		},

		/**
		 * Loads the new object
		 *
		 * @param	{object}	$object
		 * @return	{void}
		 */
		loadObject : function ($object) {
			// Load the object
			switch (lightcase.objectData.type) {
				case 'inline' :
					if ($(lightcase.objectData.url)) {
						lightcase.showContent($object);
					} else {
						lightcase.error();
					}
					break;
				case 'ajax' :
					$.ajax(
						$.extend({}, lightcase.settings.ajax, {
							url : lightcase.objectData.url,
							type : lightcase.objectData.requestType,
							dataType : lightcase.objectData.requestDataType,
							data : lightcase.objectData.requestData,
							success : function (data, textStatus, jqXHR) {
								// Unserialize if data is transferred as json
								if (lightcase.objectData.requestDataType === 'json') {
									lightcase.objectData.data = data;
								} else {
									$object.html(data);
								}
								lightcase.showContent($object);
							},
							error : function (jqXHR, textStatus, errorThrown) {
								lightcase.error();
							}
						})
					);
					break;
				case 'flash' :
					lightcase.showContent($object);
					break;
				case 'video' :
					if (typeof($object.get(0).canPlayType) === 'function' || $case.find('video').length === 0) {
						lightcase.showContent($object);
					} else {
						lightcase.error();
					}
					break;
				default :
					if (lightcase.objectData.url) {
						$object.load(function () {
							lightcase.showContent($object);
						});
						$object.error(function () {
							lightcase.error();
						});
					} else {
						lightcase.error();
					}
			}
		},

		/**
		 * Throws an error message if something went wrong
		 *
		 * @return	{void}
		 */
		error : function () {
			lightcase.objectData.type = 'error';
			var $object = $('<div class="' + lightcase.settings.classPrefix + 'inlineWrap"></div>');

			$object.html(lightcase.settings.errorMessage);
			$contentInner.html($object);

			lightcase.showContent($contentInner);
		},

		/**
		 * Calculates the dimensions to fit content
		 *
		 * @param	{object}	$object
		 * @return	{void}
		 */
		calculateDimensions : function ($object) {
			lightcase.cleanupDimensions();

			// Set default dimensions
			var dimensions = {
				objectWidth : $object.attr('width') ? $object.attr('width') : $object.attr('data-width'), 
				objectHeight : $object.attr('height') ? $object.attr('height') : $object.attr('data-height')
			};

			if (!lightcase.settings.disableShrink) {
				// Add calculated maximum width/height to dimensions
				dimensions.maxWidth = parseInt(lightcase.dimensions.windowWidth * lightcase.settings.shrinkFactor);
				dimensions.maxHeight = parseInt(lightcase.dimensions.windowHeight * lightcase.settings.shrinkFactor);

				// If the auto calculated maxWidth/maxHeight greather than the userdefined one, use that.
				if (dimensions.maxWidth > lightcase.settings.maxWidth) {
					dimensions.maxWidth = lightcase.settings.maxWidth;
				}
				if (dimensions.maxHeight > lightcase.settings.maxHeight) {
					dimensions.maxHeight = lightcase.settings.maxHeight;
				}

				// Calculate the difference between screen width/height and image width/height
				dimensions.differenceWidthAsPercent = parseInt(100 / dimensions.maxWidth * dimensions.objectWidth);
				dimensions.differenceHeightAsPercent = parseInt(100 / dimensions.maxHeight * dimensions.objectHeight);
				
				switch (lightcase.objectData.type) {
					case 'image' :
					case 'flash' :
					case 'video' :
						if (dimensions.differenceWidthAsPercent > 100 && dimensions.differenceWidthAsPercent > dimensions.differenceHeightAsPercent) {
							dimensions.objectWidth = dimensions.maxWidth;
							dimensions.objectHeight = parseInt(dimensions.objectHeight / dimensions.differenceWidthAsPercent * 100);
						}
						if (dimensions.differenceHeightAsPercent > 100 && dimensions.differenceHeightAsPercent > dimensions.differenceWidthAsPercent) {
							dimensions.objectWidth = parseInt(dimensions.objectWidth / dimensions.differenceHeightAsPercent * 100);
							dimensions.objectHeight = dimensions.maxHeight;
						}
						if (dimensions.differenceHeightAsPercent > 100 && dimensions.differenceWidthAsPercent < dimensions.differenceHeightAsPercent) {
							dimensions.objectWidth = parseInt(dimensions.maxWidth / dimensions.differenceHeightAsPercent * dimensions.differenceWidthAsPercent);
							dimensions.objectHeight = dimensions.maxHeight;
						}

						break;
					case 'error' :
						if (!isNaN(dimensions.objectWidth) && dimensions.objectWidth > dimensions.maxWidth) {
							dimensions.objectWidth = dimensions.maxWidth;
						}

						break;
					default :
						if ((isNaN(dimensions.objectWidth) || dimensions.objectWidth > dimensions.maxWidth) && !lightcase.settings.forceWidth) {
							dimensions.objectWidth = dimensions.maxWidth;
						}
						if (((isNaN(dimensions.objectHeight) && dimensions.objectHeight !== 'auto') || dimensions.objectHeight > dimensions.maxHeight) && !lightcase.settings.forceHeight) {
							dimensions.objectHeight = dimensions.maxHeight;
						}
				}
			}

			lightcase.adjustDimensions($object, dimensions);
		},

		/**
		 * Adjusts the dimensions
		 *
		 * @param	{object}	$object
		 * @param	{object}	dimensions
		 * @return	{void}
		 */
		adjustDimensions : function ($object, dimensions) {
			// Adjust width and height
			$object.css({
				'width' : dimensions.objectWidth,
				'height' : dimensions.objectHeight,
				'max-width' : $object.attr('data-max-width') ? $object.attr('data-max-width') : dimensions.maxWidth,
				'max-height' : $object.attr('data-max-height') ? $object.attr('data-max-height') : dimensions.maxHeight
			});
			
			$contentInner.css({
				'width' : $object.outerWidth(),
				'height' : $object.outerHeight(),
				'max-width' : '100%'
			});

			$case.css({
				'width' : $contentInner.outerWidth()
			});

			// Adjust margin
			$case.css({
				'margin-top' : parseInt(-($case.outerHeight() / 2)),
				'margin-left' : parseInt(-($case.outerWidth() / 2))
			});
		},

		/**
		 * Handles the loading
		 *
		 * @param	{string}	process
		 * @return	{void}
		 */
		loading : function (process) {
			if (process === 'start') {
				$case.addClass(lightcase.settings.classPrefix + 'loading');
				$loading.show();
			} else if (process === 'end') {
				$case.removeClass(lightcase.settings.classPrefix + 'loading');
				$loading.hide();
			}
		},

		/**
		 * Gets the client screen dimensions
		 *
		 * @return	{object}	dimensions
		 */
		getDimensions : function () {
			return {
				windowWidth : $(window).innerWidth(),
				windowHeight : $(window).innerHeight()
			};
		},

		/**
		 * Verifies the url
		 *
		 * @param	{string}	dataUrl
		 * @return	{string}	dataUrl	Clean url for processing content
		 */
		verifyDataUrl : function (dataUrl) {
			if (!dataUrl || dataUrl === undefined || dataUrl === '') {
				return false;
			}

			if (dataUrl.indexOf('#') > -1) {
				dataUrl = dataUrl.split('#');
				dataUrl = '#' + dataUrl[dataUrl.length - 1];
			}

			return dataUrl.toString();
		},

		/**
		 * Verifies the data type of the content to load
		 *
		 * @param	{string}			url
		 * @return	{string|boolean}	Array key if expression matched, else false
		 */
		verifyDataType : function (url) {
			var url = lightcase.verifyDataUrl(url),
				typeMapping = lightcase.settings.typeMapping;

			if (url) {
				for (var key in typeMapping) {
					var suffixArr = typeMapping[key].split(',');

					for (var i = 0; i < suffixArr.length; i++) {
						var suffix = suffixArr[i].toLowerCase()
							,regexp = new RegExp('\.(' + suffix + ')$', 'i')
							// Verify only the last 5 characters of the string
							,str = url.toLowerCase().split('?')[0].substr(-5);

						if (regexp.test(str) === true) {
							return key;
						} else if (key === 'inline' && (url.indexOf(suffix) > -1 || !url)) {
							return key;
						}
					}
				}
			}

			// If no expression matched, return 'iframe'.
			return 'iframe';
		},

		/**
		 * Extends html markup with the essential tags
		 *
		 * @return	{void}
		 */
		addElements : function () {
			if (typeof($case) !== 'undefined' && $('#' + $case.attr('id')).length) {
				return;
			}

			lightcase.settings.markup();
		},

		/**
		 * Shows the loaded content
		 *
		 * @param	{object}	$object
		 * @return	{void}
		 */
		showContent : function ($object) {
			// Add data attribute with the object type
			$case.attr('data-type', lightcase.objectData.type);

			lightcase.cache.object = $object;
			lightcase.calculateDimensions($object);

			// Call onFinish hook functions
			lightcase.callHooks(lightcase.settings.onFinish);

			switch (lightcase.settings.transitionIn) {
				case 'scrollTop' :
				case 'scrollRight' :
				case 'scrollBottom' :
				case 'scrollLeft' :
				case 'scrollHorizontal' :
				case 'scrollVertical' :
					lightcase.transition.scroll($case, 'in', lightcase.settings.speedIn);
					lightcase.transition.fade($contentInner, 'in', lightcase.settings.speedIn);
					break;
				case 'elastic' :
					if ($case.css('opacity') < 1) {
						lightcase.transition.zoom($case, 'in', lightcase.settings.speedIn);
						lightcase.transition.fade($contentInner, 'in', lightcase.settings.speedIn);
					}
				case 'fade' :
				case 'fadeInline' :
					lightcase.transition.fade($case, 'in', lightcase.settings.speedIn);
					lightcase.transition.fade($contentInner, 'in', lightcase.settings.speedIn);
					break;
				default :
					lightcase.transition.fade($case, 'in', 0);
			}

			// End loading
			lightcase.loading('end');
			lightcase.busy = false;
		},

		/**
		 * Processes the content to show
		 *
		 * @return	{void}
		 */
		processContent : function () {
			lightcase.busy = true;
			
			switch (lightcase.settings.transitionOut) {
				case 'scrollTop' :
				case 'scrollRight' :
				case 'scrollBottom' :
				case 'scrollLeft' :
				case 'scrollVertical' :
				case 'scrollHorizontal' :
					if ($case.is(':hidden')) {
						lightcase.transition.fade($case, 'out', 0, 0, function () {
							lightcase.loadContent();
						});
						lightcase.transition.fade($contentInner, 'out', 0);
					} else {
						lightcase.transition.scroll($case, 'out', lightcase.settings.speedOut, function () {
							lightcase.loadContent();
						});
					}
					break;
				case 'fade' :
					if ($case.is(':hidden')) {
						lightcase.transition.fade($case, 'out', 0, 0, function () {
							lightcase.loadContent();
						});
					} else {
						lightcase.transition.fade($case, 'out', lightcase.settings.speedOut, 0, function () {
							lightcase.loadContent();
						});
					}
					break;
				case 'fadeInline' :
				case 'elastic' :
					if ($case.is(':hidden')) {
						lightcase.transition.fade($case, 'out', 0, 0, function () {
							lightcase.loadContent();
						});
					} else {
						lightcase.transition.fade($contentInner, 'out', lightcase.settings.speedOut, 0, function () {
							lightcase.loadContent();
						});
					}
					break;
				default :
					lightcase.transition.fade($case, 'out', 0, 0, function () {
						lightcase.loadContent();
					});
			}
		},

		/**
		 * Handles events for gallery buttons
		 *
		 * @return	{void}
		 */
		handleEvents : function () {
			lightcase.unbindEvents();

			$nav.children().not($close).hide();

			// If slideshow is enabled, show play/pause and start timeout.
			if (lightcase.isSlideshowEnabled()) {
				// Only start the timeout if slideshow is not pausing
				if (!$nav.hasClass(lightcase.settings.classPrefix + 'paused')) {
					lightcase.startTimeout();
				} else {
					lightcase.stopTimeout();
				}
			}

			if (lightcase.settings.liveResize) {
				lightcase.watchResizeInteraction();
			}

			$close.click(function (event) {
				event.preventDefault();
				lightcase.lightcaseClose();
			});

			if (lightcase.settings.closeOnOverlayClick === true) {
				$overlay.css('cursor', 'pointer').click(function (event) {
					event.preventDefault();
					
					lightcase.lightcaseClose();
				});
			}

			if (lightcase.settings.useKeys === true) {
				lightcase.addKeyEvents();
			}

			if (lightcase.objectData.isPartOfSequence) {
				$nav.attr('data-ispartofsequence', true);
				lightcase.nav = lightcase.setNavigation();

				$prev.click(function (event) {
					event.preventDefault();

					$prev.unbind('click');
					lightcase.cache.action = 'prev';
					lightcase.nav.$prevItem.click();
					
					if (lightcase.isSlideshowEnabled()) {
						lightcase.stopTimeout();
					}
				});

				$next.click(function (event) {
					event.preventDefault();
					
					$next.unbind('click');
					lightcase.cache.action = 'next';
					lightcase.nav.$nextItem.click();
					
					if (lightcase.isSlideshowEnabled()) {
						lightcase.stopTimeout();
					}
				});

				if (lightcase.isSlideshowEnabled()) {
					$play.click(function (event) {
						event.preventDefault();
						lightcase.startTimeout();
					});
					$pause.click(function (event) {
						event.preventDefault();
						lightcase.stopTimeout();
					});
				}
				
				// Enable swiping if activated
				if (lightcase.settings.swipe === true) {
					if ($.isPlainObject($.event.special.swipeleft)) {
						$case.on('swipeleft', function (event) {
							event.preventDefault();
							$next.click();
							if (lightcase.isSlideshowEnabled()) {
								lightcase.stopTimeout();
							}
						});
					}
					if ($.isPlainObject($.event.special.swiperight)) {
						$case.on('swiperight', function (event) {
							event.preventDefault();
							$prev.click();
							if (lightcase.isSlideshowEnabled()) {
								lightcase.stopTimeout();
							}
						});
					}
				}
			}
		},

		/**
		 * Adds the key events
		 *
		 * @return	{void}
		 */
		addKeyEvents : function () {
			$(document).bind('keyup.lightcase', function (event) {
				// Do nothing if lightcase is in process
				if (lightcase.busy) {
					return;
				}

				switch (event.keyCode) {
					// Escape key
					case 27 :
						$close.click();
						break;
					// Backward key
					case 37 :
						if (lightcase.objectData.isPartOfSequence) {
							$prev.click();
						}
						break;
					// Forward key
					case 39 :
						if (lightcase.objectData.isPartOfSequence) {
							$next.click();
						}
						break;
				}
			});
		},

		/**
		 * Starts the slideshow timeout
		 *
		 * @return	{void}
		 */
		startTimeout : function () {
			$play.hide();
			$pause.show();
			
			lightcase.cache.action = 'next';
			$nav.removeClass(lightcase.settings.classPrefix + 'paused');

			lightcase.timeout = setTimeout(function () {
				lightcase.nav.$nextItem.click();
			}, lightcase.settings.timeout);
		},

		/**
		 * Stops the slideshow timeout
		 *
		 * @return	{void}
		 */
		stopTimeout : function () {
			$play.show();
			$pause.hide();

			$nav.addClass(lightcase.settings.classPrefix + 'paused');

			clearTimeout(lightcase.timeout);
		},

		/**
		 * Sets the navigator buttons (prev/next)
		 *
		 * @return	{object}	items
		 */
		setNavigation : function () {
			var $links = $('[' + lightcase.settings.attr + '="' + lightcase.objectData.rel + '"]'),
				currentIndex = lightcase.objectData.currentIndex,
				prevIndex = currentIndex - 1,
				nextIndex = currentIndex + 1,
				sequenceLength = lightcase.objectData.sequenceLength - 1,
				items = {
					$prevItem : $links.eq(prevIndex),
					$nextItem : $links.eq(nextIndex)
				};

			if (currentIndex > 0) {
				$prev.show();
			} else {
				items.$prevItem = $links.eq(sequenceLength);
			}
			if (nextIndex <= sequenceLength) {
				$next.show();
			} else {
				items.$nextItem = $links.eq(0);
			}

			if (lightcase.settings.navigateEndless === true) {
				$prev.show();
				$next.show();
			}

			return items;
		},

		/**
		 * Clones the object for inline elements
		 *
		 * @param	{object}	$object
		 * @return	{object}	$clone
		 */
		cloneObject : function ($object) {
			var $clone = $object.clone(),
				objectId = $object.attr('id');

			// If element is hidden, cache the object and remove
			if ($object.is(':hidden')) {
				lightcase.cacheObjectData($object);
				$object.attr('id', lightcase.settings.idPrefix + 'temp-' + objectId).empty();
			} else {
				// Prevent duplicated id's
				$clone.removeAttr('id');
			}

			return $clone.show();
		},

		/**
		 * Verifies if it is a mobile device
		 *
		 * @return	{boolean}
		 */
		isMobileDevice : function () {
			var deviceAgent = navigator.userAgent.toLowerCase(),
				agentId = deviceAgent.match(lightcase.settings.mobileMatchExpression);

			return agentId ? true : false;
		},

		/**
		 * Verifies if css transitions are supported
		 *
		 * @return	{string|boolean}	The transition prefix if supported, else false.
		 */
		isTransitionSupported : function () {
			var body = $('body').get(0),
				isTransitionSupported = false,
				transitionMapping = {
					'transition' : '',
					'WebkitTransition' : '-webkit-',
					'MozTransition' : '-moz-',
					'OTransition' : '-o-',
					'MsTransition' : '-ms-'
				};

			for (var key in transitionMapping) {
				if (transitionMapping.hasOwnProperty(key) && key in body.style) {
					lightcase.support.transition = transitionMapping[key];
					isTransitionSupported = true;
				}
			}

			return isTransitionSupported;
		},

		/**
		 * Transition types
		 *
		 */
		transition : {
			/**
			 * Fades in/out the object
			 *
			 * @param	{object}	$object
			 * @param	{string}	type
			 * @param	{number}	speed
			 * @param	{number}	opacity
			 * @param	{function}	callback
			 * @return	{void}		Animates an object
			 */
			fade : function ($object, type, speed, opacity, callback) {
				var isInTransition = type === 'in',
					startTransition = {},
					startOpacity = $object.css('opacity'),
					endTransition = {},
					endOpacity = opacity ? opacity : isInTransition ? 1 : 0;
				
				if (!lightcase.open && isInTransition) return;
					
				startTransition['opacity'] = startOpacity;
				endTransition['opacity'] = endOpacity;

				$object.css(startTransition).show();

				// Css transition
				if (lightcase.support.transitions) {
					endTransition[lightcase.support.transition + 'transition'] = speed + 'ms ease';

					setTimeout(function () {
						$object.css(endTransition);

						setTimeout(function () {
							$object.css(lightcase.support.transition + 'transition', '');

							if (callback && (lightcase.open || !isInTransition)) {
								callback();
							}
						}, speed);
					}, 15);
				} else {
					// Fallback to js transition
					$object.stop();
					$object.animate(endTransition, speed, callback);
				}
			},

			/**
			 * Scrolls in/out the object
			 *
			 * @param	{object}	$object
			 * @param	{string}	type
			 * @param	{number}	speed
			 * @param	{function}	callback
			 * @return	{void}		Animates an object
			 */
			scroll : function ($object, type, speed, callback) {
				var isInTransition = type === 'in',
					transition = isInTransition ? lightcase.settings.transitionIn : lightcase.settings.transitionOut,
					direction = 'left',
					startTransition = {},
					startOpacity = isInTransition ? 0 : 1,
					startOffset = isInTransition ? '-50%' : '50%',
					endTransition = {},
					endOpacity = isInTransition ? 1 : 0,
					endOffset = isInTransition ? '50%' : '-50%';
				
				if (!lightcase.open && isInTransition) return;

				switch (transition) {
					case 'scrollTop' :
						direction = 'top';
						break;
					case 'scrollRight' :
						startOffset = isInTransition ? '150%' : '50%';
						endOffset = isInTransition ? '50%' : '150%';
						break;
					case 'scrollBottom' :
						direction = 'top';
						startOffset = isInTransition ? '150%' : '50%';
						endOffset = isInTransition ? '50%' : '150%';
						break;
					case 'scrollHorizontal' : 
						startOffset = isInTransition ? '150%' : '50%';
						endOffset = isInTransition ? '50%' : '-50%';
						break;
					case 'scrollVertical' :
						direction = 'top';
						startOffset = isInTransition ? '-50%' : '50%';
						endOffset = isInTransition ? '50%' : '150%';
						break;
				}

				if (lightcase.cache.action === 'prev') {
					switch (transition) {
						case 'scrollHorizontal' : 
							startOffset = isInTransition ? '-50%' : '50%';
							endOffset = isInTransition ? '50%' : '150%';
							break;
						case 'scrollVertical' : 
							startOffset = isInTransition ? '150%' : '50%';
							endOffset = isInTransition ? '50%' : '-50%';
							break;
					}
				}

				startTransition['opacity'] = startOpacity;
				startTransition[direction] = startOffset;

				endTransition['opacity'] = endOpacity;
				endTransition[direction] = endOffset;

				$object.css(startTransition).show();

				// Css transition
				if (lightcase.support.transitions) {
					endTransition[lightcase.support.transition + 'transition'] = speed + 'ms ease';

					setTimeout(function () {
						$object.css(endTransition);

						setTimeout(function () {
							$object.css(lightcase.support.transition + 'transition', '');

							if (callback && (lightcase.open || !isInTransition)) {
								callback();
							}
						}, speed);
					}, 15);
				} else {
					// Fallback to js transition
					$object.stop();
					$object.animate(endTransition, speed, callback);
				}
			},

			/**
			 * Zooms in/out the object
			 *
			 * @param	{object}	$object
			 * @param	{string}	type
			 * @param	{number}	speed
			 * @param	{function}	callback
			 * @return	{void}		Animates an object
			 */
			zoom : function ($object, type, speed, callback) {
				var isInTransition = type === 'in',
					startTransition = {},
					startOpacity = $object.css('opacity'),
					startScale = isInTransition ? 'scale(0.75)' : 'scale(1)',
					endTransition = {},
					endOpacity = isInTransition ? 1 : 0,
					endScale = isInTransition ? 'scale(1)' : 'scale(0.75)';

				if (!lightcase.open && isInTransition) return;

				startTransition['opacity'] = startOpacity;
				startTransition[lightcase.support.transition + 'transform'] = startScale;

				endTransition['opacity'] = endOpacity;
					
				$object.css(startTransition).show();

				// Css transition
				if (lightcase.support.transitions) {
					endTransition[lightcase.support.transition + 'transform'] = endScale;
					endTransition[lightcase.support.transition + 'transition'] = speed + 'ms ease';
					
					setTimeout(function () {
						$object.css(endTransition);
					
						setTimeout(function () {
							$object.css(lightcase.support.transition + 'transform', '');
							$object.css(lightcase.support.transition + 'transition', '');
							
							if (callback && (lightcase.open || !isInTransition)) {
								callback();
							}
						}, speed);
					}, 15);
				} else {
					// Fallback to js transition
					$object.stop();
					$object.animate(endTransition, speed, callback);
				}
			}
		},

		/**
		 * Calls all the registered functions of a specific hook
		 *
		 * @param	{object}	hooks
		 * @return	{void}
		 */
		callHooks : function (hooks) {
			if (typeof(hooks) === 'object') {
				$.each(hooks, function(index, hook) {
					if (typeof(hook) === 'function') {
						hook();
					}
				});
			}
		},

		/**
		 * Caches the object data
		 *
		 * @param	{object}	$object
		 * @return	{void}
		 */
		cacheObjectData : function ($object) {
			$.data($object, 'cache', {
				id : $object.attr('id'),
				content : $object.html()
			});

			lightcase.cache.originalObject = $object;
		},

		/**
		 * Restores the object from cache
		 *
		 * @return	void
		 */
		restoreObject : function () {
			var $object = $('[id^="' + lightcase.settings.idPrefix + 'temp-"]');
		
			$object.attr('id', $.data(lightcase.cache.originalObject, 'cache').id);
			$object.html($.data(lightcase.cache.originalObject, 'cache').content);
		},

		/**
		 * Executes functions for a window resize.
		 * It stops an eventual timeout and recalculates dimenstions.
		 *
		 * @return	{void}
		 */
		resize : function () {
			if (!lightcase.open) return;

			if (lightcase.isSlideshowEnabled()) {
				lightcase.stopTimeout();
			}

			lightcase.dimensions = lightcase.getDimensions();
			lightcase.calculateDimensions(lightcase.cache.object);
		},

		/**
		 * Caches the actual scroll coordinates.
		 *
		 * @return	{void}
		 */
		cacheScrollPosition : function () {
			var	$window = $(window),
				$document = $(document),
				offset = {
					'top' : $window.scrollTop(),
					'left' :  $window.scrollLeft()
				};

			lightcase.cache.scrollPosition = lightcase.cache.scrollPosition || {};

			if ($document.width() > $window.width()) {
				lightcase.cache.scrollPosition.left = offset.left;
			}
			if ($document.height() > $window.height()) {
				lightcase.cache.scrollPosition.top = offset.top;
			}
		},

		/**
		 * Watches for any resize interaction and caches the new sizes.
		 *
		 * @return	{void}
		 */
		watchResizeInteraction : function () {
			$(window).resize(lightcase.resize);
		},
		
		/**
		 * Stop watching any resize interaction related to lightcase.
		 *
		 * @return	{void}
		 */
		unwatchResizeInteraction : function () {
			$(window).off('resize', lightcase.resize);
		},

		/**
		 * Watches for any scroll interaction and caches the new position.
		 *
		 * @return	{void}
		 */
		watchScrollInteraction : function () {
			$(window).scroll(lightcase.cacheScrollPosition);
		},

		/**
		 * Stop watching any scroll interaction related to lightcase.
		 *
		 * @return	{void}
		 */
		unwatchScrollInteraction : function () {
			$(window).off('scroll', lightcase.cacheScrollPosition);
		},
		
		/**
		 * Restores to the original scoll position before
		 * lightcase got initialized.
		 *
		 * @return	{void}
		 */
		restoreScrollPosition : function () {
			$(window)
				.scrollTop(parseInt(lightcase.cache.scrollPosition.top))
				.scrollLeft(parseInt(lightcase.cache.scrollPosition.left))
				.resize();
		},

		/**
		 * Switches to the fullscreen mode
		 *
		 * @return	{void}
		 */
		switchToFullScreenMode : function () {
			lightcase.settings.shrinkFactor = 1;
			lightcase.settings.overlayOpacity = 1;

			$('html').addClass(lightcase.settings.classPrefix + 'fullScreenMode');
		},

		/**
		 * Enters into the lightcase view
		 *
		 * @return	{void}
		 */
		lightcaseOpen : function () {
			lightcase.open = true;

			lightcase.support.transitions = lightcase.settings.cssTransitions ? lightcase.isTransitionSupported() : false;
			lightcase.support.mobileDevice = lightcase.isMobileDevice();

			if (lightcase.support.mobileDevice) {
				$('html').addClass(lightcase.settings.classPrefix + 'isMobileDevice');

				if (lightcase.settings.fullScreenModeForMobile) {
					lightcase.switchToFullScreenMode();
				}
			}
			if (!lightcase.settings.transitionIn) {
				lightcase.settings.transitionIn = lightcase.settings.transition;
			}
			if (!lightcase.settings.transitionOut) {
				lightcase.settings.transitionOut = lightcase.settings.transition;
			}

			switch (lightcase.settings.transitionIn) {
				case 'fade' :
				case 'fadeInline' :
				case 'elastic' :
				case 'scrollTop' :
				case 'scrollRight' :
				case 'scrollBottom' :
				case 'scrollLeft' :
				case 'scrollVertical' :
				case 'scrollHorizontal' :
					if ($case.is(':hidden')) {
						$close.css('opacity', 0);
						$overlay.css('opacity', 0);
						$case.css('opacity', 0);
						$contentInner.css('opacity', 0);
					}
					lightcase.transition.fade($overlay, 'in', lightcase.settings.speedIn, lightcase.settings.overlayOpacity, function () {
						lightcase.transition.fade($close, 'in', lightcase.settings.speedIn);
						lightcase.handleEvents();
						lightcase.processContent();
					});
					break;
				default :
					lightcase.transition.fade($overlay, 'in', 0, lightcase.settings.overlayOpacity, function () {
						lightcase.transition.fade($close, 'in', 0);
						lightcase.handleEvents();
						lightcase.processContent();
					});
			}

			$('html').addClass(lightcase.settings.classPrefix + 'open');
			$case.attr('aria-hidden', 'false');
		},

		/**
		 * Escapes from the lightcase view
		 *
		 * @return	{void}
		 */
		lightcaseClose : function () {
			lightcase.open = false;

			if (lightcase.isSlideshowEnabled()) {
				lightcase.stopTimeout();
				$nav.removeClass(lightcase.settings.classPrefix + 'paused');
			}

			$loading.hide();

			lightcase.unbindEvents();

			lightcase.unwatchResizeInteraction();
			lightcase.unwatchScrollInteraction();

			$('html').removeClass(lightcase.settings.classPrefix + 'open');
			$case.attr('aria-hidden', 'true');

			$nav.children().hide();

			lightcase.restoreScrollPosition();
			
			// Call onClose hook functions
			lightcase.callHooks(lightcase.settings.onClose);

			switch (lightcase.settings.transitionOut) {
				case 'fade' :
				case 'fadeInline' :
				case 'scrollTop' :
				case 'scrollRight' :
				case 'scrollBottom' :
				case 'scrollLeft' :
				case 'scrollHorizontal' :
				case 'scrollVertical' :
					lightcase.transition.fade($case, 'out', lightcase.settings.speedOut, 0, function () {
						lightcase.transition.fade($overlay, 'out', lightcase.settings.speedOut, 0, function () {
							lightcase.cleanup();
						});
					});
					break;
				case 'elastic' :
					lightcase.transition.zoom($case, 'out', lightcase.settings.speedOut, function () {
						lightcase.transition.fade($overlay, 'out', lightcase.settings.speedOut, 0, function () {
							lightcase.cleanup();
						});
					});
					break;
				default :
					lightcase.cleanup();
			}
		},

		/**
		 * Unbinds all given events
		 *
		 * @return	{void}
		 */
		unbindEvents : function () {
			// Unbind overlay event
			$overlay.unbind('click');

			// Unbind key events
			$(document).unbind('keyup.lightcase');

			// Unbind swipe events
			$case.unbind('swipeleft').unbind('swiperight');

			// Unbind navigator events
			$nav.children('a').unbind('click');

			// Unbind close event
			$close.unbind('click');
		},

		/**
		 * Cleans up the dimensions
		 *
		 * @return	{void}
		 */
		cleanupDimensions : function () {
			var opacity = $contentInner.css('opacity');

			$case.css({
				'width' : '',
				'height' : '',
				'top' : '',
				'left' : '',
				'margin-top' : '',
				'margin-left' : ''
			});

			$contentInner.removeAttr('style').css('opacity', opacity);
			$contentInner.children().removeAttr('style');
		},

		/**
		 * Cleanup after aborting lightcase
		 *
		 * @return	{void}
		 */
		cleanup : function () {
			lightcase.cleanupDimensions();

			$loading.hide();
			$overlay.hide();
			$case.hide();
			$nav.children().hide();

			$case.removeAttr('data-type');
			$nav.removeAttr('data-ispartofsequence');

			$contentInner.empty().hide();
			$info.children().empty();

			if (lightcase.cache.originalObject) {
				lightcase.restoreObject();
			}

			// Call onCleanup hook functions
			lightcase.callHooks(lightcase.settings.onCleanup);
			
			// Restore cache
			lightcase.cache = {};
		}
	};

	$.fn.lightcase = function (method) {
		// Method calling logic
		if (lightcase[method]) {
			return lightcase[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return lightcase.init.apply(this, arguments);
		} else {
			$.error('Method ' + method + ' does not exist on jQuery.lightcase');
		}
	};
})(jQuery);