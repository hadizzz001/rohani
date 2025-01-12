

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
        	jQuery(".logo-img").attr("src","/pics/logo.webp");
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
       jQuery(".logo-img").attr("src","/pics/logo.webp");
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
https://www.brahmakumaris.org/jwplayer.js
================================================================================*/;
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.jwplayer=t():e.jwplayer=t()}(this,function(){return function(e){function t(n){if(i[n])return i[n].exports;var r=i[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n=window.webpackJsonpjwplayer;window.webpackJsonpjwplayer=function(i,o){for(var a,s,l=0,u=[];l<i.length;l++)s=i[l],r[s]&&u.push.apply(u,r[s]),r[s]=0;for(a in o)e[a]=o[a];for(n&&n(i,o);u.length;)u.shift().call(null,t)};var i={},r={0:0};return t.e=function(e,n){if(0===r[e])return n.call(null,t);if(void 0!==r[e])r[e].push(n);else{r[e]=[n];var i=document.getElementsByTagName("head")[0],o=document.createElement("script");o.type="text/javascript",o.charset="utf-8",o.async=!0,o.src=t.p+""+({1:"jwplayer.controls",2:"provider.html5",3:"provider.flash",4:"polyfills.intersection-observer",5:"provider.youtube",6:"polyfills.vttrenderer",7:"polyfills.promise",8:"polyfills.base64",9:"vttparser"}[e]||e)+".js",i.appendChild(o)}},t.m=e,t.c=i,t.p="",t(0)}([function(e,t,n){e.exports=n(76)},function(e,t,n){var i,r;i=[],r=function(){var e={},t=Array.prototype,n=Object.prototype,i=Function.prototype,r=t.slice,o=t.concat,a=n.toString,s=n.hasOwnProperty,l=t.map,u=t.reduce,c=t.forEach,d=t.filter,f=t.every,p=t.some,h=t.indexOf,g=Array.isArray,v=Object.keys,m=i.bind,y=function k(e){return e instanceof k?e:this instanceof k?void 0:new k(e)},w=y.each=y.forEach=function(t,n,i){var r,o;if(null==t)return t;if(c&&t.forEach===c)t.forEach(n,i);else if(t.length===+t.length){for(r=0,o=t.length;r<o;r++)if(n.call(i,t[r],r,t)===e)return}else{var a=y.keys(t);for(r=0,o=a.length;r<o;r++)if(n.call(i,t[a[r]],a[r],t)===e)return}return t};y.map=y.collect=function(e,t,n){var i=[];return null==e?i:l&&e.map===l?e.map(t,n):(w(e,function(e,r,o){i.push(t.call(n,e,r,o))}),i)};var E="Reduce of empty array with no initial value";y.reduce=y.foldl=y.inject=function(e,t,n,i){var r=arguments.length>2;if(null==e&&(e=[]),u&&e.reduce===u)return i&&(t=y.bind(t,i)),r?e.reduce(t,n):e.reduce(t);if(w(e,function(e,o,a){r?n=t.call(i,n,e,o,a):(n=e,r=!0)}),!r)throw new TypeError(E);return n},y.find=y.detect=function(e,t,n){var i;return b(e,function(e,r,o){if(t.call(n,e,r,o))return i=e,!0}),i},y.filter=y.select=function(e,t,n){var i=[];return null==e?i:d&&e.filter===d?e.filter(t,n):(w(e,function(e,r,o){t.call(n,e,r,o)&&i.push(e)}),i)},y.reject=function(e,t,n){return y.filter(e,function(e,i,r){return!t.call(n,e,i,r)},n)},y.compact=function(e){return y.filter(e,y.identity)},y.every=y.all=function(t,n,i){n||(n=y.identity);var r=!0;return null==t?r:f&&t.every===f?t.every(n,i):(w(t,function(t,o,a){if(!(r=r&&n.call(i,t,o,a)))return e}),!!r)};var b=y.some=y.any=function(t,n,i){n||(n=y.identity);var r=!1;return null==t?r:p&&t.some===p?t.some(n,i):(w(t,function(t,o,a){if(r||(r=n.call(i,t,o,a)))return e}),!!r)};y.size=function(e){return null==e?0:e.length===+e.length?e.length:y.keys(e).length},y.last=function(e,t,n){if(null!=e)return null==t||n?e[e.length-1]:r.call(e,Math.max(e.length-t,0))},y.after=function(e,t){return function(){if(--e<1)return t.apply(this,arguments)}},y.before=function(e,t){var n;return function(){return--e>0&&(n=t.apply(this,arguments)),e<=1&&(t=null),n}};var A=function(e){return null==e?y.identity:y.isFunction(e)?e:y.property(e)},L=function(e){return function(t,n,i){var r={};return n=A(n),w(t,function(o,a){var s=n.call(i,o,a,t);e(r,s,o)}),r}};y.groupBy=L(function(e,t,n){y.has(e,t)?e[t].push(n):e[t]=[n]}),y.indexBy=L(function(e,t,n){e[t]=n}),y.sortedIndex=function(e,t,n,i){n=A(n);for(var r=n.call(i,t),o=0,a=e.length;o<a;){var s=o+a>>>1;n.call(i,e[s])<r?o=s+1:a=s}return o},y.contains=y.include=function(e,t){return null!=e&&(e.length!==+e.length&&(e=y.values(e)),y.indexOf(e,t)>=0)},y.pluck=function(e,t){return y.map(e,y.property(t))},y.where=function(e,t){return y.filter(e,y.matches(t))},y.findWhere=function(e,t){return y.find(e,y.matches(t))},y.max=function(e,t,n){if(!t&&y.isArray(e)&&e[0]===+e[0]&&e.length<65535)return Math.max.apply(Math,e);var i=-(1/0),r=-(1/0);return w(e,function(e,o,a){var s=t?t.call(n,e,o,a):e;s>r&&(i=e,r=s)}),i},y.difference=function(e){var n=o.apply(t,r.call(arguments,1));return y.filter(e,function(e){return!y.contains(n,e)})},y.without=function(e){return y.difference(e,r.call(arguments,1))},y.indexOf=function(e,t,n){if(null==e)return-1;var i=0,r=e.length;if(n){if("number"!=typeof n)return i=y.sortedIndex(e,t),e[i]===t?i:-1;i=n<0?Math.max(0,r+n):n}if(h&&e.indexOf===h)return e.indexOf(t,n);for(;i<r;i++)if(e[i]===t)return i;return-1};var C=function(){};y.bind=function(e,t){var n,i;if(m&&e.bind===m)return m.apply(e,r.call(arguments,1));if(!y.isFunction(e))throw new TypeError;return n=r.call(arguments,2),i=function(){if(!(this instanceof i))return e.apply(t,n.concat(r.call(arguments)));C.prototype=e.prototype;var o=new C;C.prototype=null;var a=e.apply(o,n.concat(r.call(arguments)));return Object(a)===a?a:o}},y.partial=function(e){var t=r.call(arguments,1);return function(){for(var n=0,i=t.slice(),r=0,o=i.length;r<o;r++)i[r]===y&&(i[r]=arguments[n++]);for(;n<arguments.length;)i.push(arguments[n++]);return e.apply(this,i)}},y.once=y.partial(y.before,2),y.memoize=function(e,t){var n={};return t||(t=y.identity),function(){var i=t.apply(this,arguments);return y.has(n,i)?n[i]:n[i]=e.apply(this,arguments)}},y.delay=function(e,t){var n=r.call(arguments,2);return setTimeout(function(){return e.apply(null,n)},t)},y.defer=function(e){return y.delay.apply(y,[e,1].concat(r.call(arguments,1)))},y.throttle=function(e,t,n){var i,r,o,a=null,s=0;n||(n={});var l=function(){s=n.leading===!1?0:y.now(),a=null,o=e.apply(i,r),i=r=null};return function(){var u=y.now();s||n.leading!==!1||(s=u);var c=t-(u-s);return i=this,r=arguments,c<=0?(clearTimeout(a),a=null,s=u,o=e.apply(i,r),i=r=null):a||n.trailing===!1||(a=setTimeout(l,c)),o}},y.keys=function(e){if(!y.isObject(e))return[];if(v)return v(e);var t=[];for(var n in e)y.has(e,n)&&t.push(n);return t},y.invert=function(e){for(var t={},n=y.keys(e),i=0,r=n.length;i<r;i++)t[e[n[i]]]=n[i];return t},y.defaults=function(e){return w(r.call(arguments,1),function(t){if(t)for(var n in t)void 0===e[n]&&(e[n]=t[n])}),e},y.extend=function(e){return w(r.call(arguments,1),function(t){if(t)for(var n in t)e[n]=t[n]}),e},y.pick=function(e){var n={},i=o.apply(t,r.call(arguments,1));return w(i,function(t){t in e&&(n[t]=e[t])}),n},y.omit=function(e){var n={},i=o.apply(t,r.call(arguments,1));for(var a in e)y.contains(i,a)||(n[a]=e[a]);return n},y.clone=function(e){return y.isObject(e)?y.isArray(e)?e.slice():y.extend({},e):e},y.isArray=g||function(e){return"[object Array]"==a.call(e)},y.isObject=function(e){return e===Object(e)},w(["Arguments","Function","String","Number","Date","RegExp"],function(e){y["is"+e]=function(t){return a.call(t)=="[object "+e+"]"}}),y.isArguments(arguments)||(y.isArguments=function(e){return!(!e||!y.has(e,"callee"))}),y.isFunction=function(e){return"function"==typeof e},y.isFinite=function(e){return isFinite(e)&&!isNaN(parseFloat(e))},y.isNaN=function(e){return y.isNumber(e)&&e!=+e},y.isBoolean=function(e){return e===!0||e===!1||"[object Boolean]"==a.call(e)},y.isNull=function(e){return null===e},y.isUndefined=function(e){return void 0===e},y.has=function(e,t){return s.call(e,t)},y.identity=function(e){return e},y.constant=function(e){return function(){return e}},y.property=function(e){return function(t){return t[e]}},y.propertyOf=function(e){return null==e?function(){}:function(t){return e[t]}},y.matches=function(e){return function(t){if(t===e)return!0;for(var n in e)if(e[n]!==t[n])return!1;return!0}},y.now=Date.now||function(){return(new Date).getTime()},y.result=function(e,t){if(null!=e){var n=e[t];return y.isFunction(n)?n.call(e):n}};var P=0;return y.uniqueId=function(e){var t=++P+"";return e?e+t:t},y}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};i=[n(7),n(1),n(50),n(8),n(13),n(25),n(24),n(86),n(27),n(90),n(26),n(95),n(93),n(91)],r=function(e,t,n,i,r,a,s,l,u,c,d,f,p,h){var g={};return g.log=function(){window.console&&("object"===o(console.log)?console.log(Array.prototype.slice.call(arguments,0)):console.log.apply(console,arguments))},g.between=function(e,t,n){return Math.max(Math.min(e,n),t)},g.foreach=function(e,t){var n,i;for(n in e)"function"===g.typeOf(e.hasOwnProperty)?e.hasOwnProperty(n)&&(i=e[n],t(n,i)):(i=e[n],t(n,i))},g.indexOf=t.indexOf,g.noop=function(){},g.seconds=e.seconds,g.prefix=e.prefix,g.suffix=e.suffix,g.Timer=d,t.extend(g,a,s,u,n,l,i,r,c,f,p,h),g}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};i=[n(1)],r=function(e){var t=[],n=t.slice,i={on:function(e,t,n){if(!a(this,"on",e,[t,n])||!t)return this;this._events||(this._events={});var i=this._events[e]||(this._events[e]=[]);return i.push({callback:t,context:n}),this},once:function u(t,n,i){if(!a(this,"once",t,[n,i])||!n)return this;var r=this,u=e.once(function(){r.off(t,u),n.apply(this,arguments)});return u._callback=n,this.on(t,u,i)},off:function(t,n,i){var r,o,s,l,u,c,d,f;if(!this._events||!a(this,"off",t,[n,i]))return this;if(!t&&!n&&!i)return this._events=void 0,this;for(l=t?[t]:e.keys(this._events),u=0,c=l.length;u<c;u++)if(t=l[u],s=this._events[t]){if(this._events[t]=r=[],n||i)for(d=0,f=s.length;d<f;d++)o=s[d],(n&&n!==o.callback&&n!==o.callback._callback||i&&i!==o.context)&&r.push(o);r.length||delete this._events[t]}return this},trigger:function(e){if(!this._events)return this;var t=n.call(arguments,1);if(!a(this,"trigger",e,t))return this;var i=this._events[e],r=this._events.all;return i&&s(i,t,this),r&&s(r,arguments,this),this},triggerSafe:function(e){if(!this._events)return this;var t=n.call(arguments,1);if(!a(this,"trigger",e,t))return this;var i=this._events[e],r=this._events.all;return i&&l(i,t,this,e),r&&l(r,arguments,this,e),this}},r=/\s+/,a=function(e,t,n,i){if(!n)return!0;if("object"===("undefined"==typeof n?"undefined":o(n))){for(var a in n)e[t].apply(e,[a,n[a]].concat(i));return!1}if(r.test(n)){for(var s=n.split(r),l=0,u=s.length;l<u;l++)e[t].apply(e,[s[l]].concat(i));return!1}return!0},s=function(e,t,n){var i,r=-1,o=e.length,a=t[0],s=t[1],l=t[2];switch(t.length){case 0:for(;++r<o;)(i=e[r]).callback.call(i.context||n);return;case 1:for(;++r<o;)(i=e[r]).callback.call(i.context||n,a);return;case 2:for(;++r<o;)(i=e[r]).callback.call(i.context||n,a,s);return;case 3:for(;++r<o;)(i=e[r]).callback.call(i.context||n,a,s,l);return;default:for(;++r<o;)(i=e[r]).callback.apply(i.context||n,t);return}},l=function(e,t,n,i){for(var r,o=-1,a=e.length;++o<a;)try{r=e[o],r.callback.apply(r.context||n,t)}catch(s){console.log('Error in "'+i+'" event handler:',s)}};return i}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[],r=function(){var e={DRAG:"drag",DRAG_START:"dragStart",DRAG_END:"dragEnd",CLICK:"click",DOUBLE_CLICK:"doubleClick",TAP:"tap",DOUBLE_TAP:"doubleTap",OVER:"over",MOVE:"move",OUT:"out"},t={COMPLETE:"complete",ERROR:"error",JWPLAYER_AD_CLICK:"adClick",JWPLAYER_AD_COMPANIONS:"adCompanions",JWPLAYER_AD_COMPLETE:"adComplete",JWPLAYER_AD_ERROR:"adError",JWPLAYER_AD_IMPRESSION:"adImpression",JWPLAYER_AD_META:"adMeta",JWPLAYER_AD_PAUSE:"adPause",JWPLAYER_AD_PLAY:"adPlay",JWPLAYER_AD_SKIPPED:"adSkipped",JWPLAYER_AD_TIME:"adTime",JWPLAYER_CAST_AD_CHANGED:"castAdChanged",JWPLAYER_MEDIA_COMPLETE:"complete",JWPLAYER_READY:"ready",JWPLAYER_MEDIA_SEEK:"seek",JWPLAYER_MEDIA_BEFOREPLAY:"beforePlay",JWPLAYER_MEDIA_BEFORECOMPLETE:"beforeComplete",JWPLAYER_MEDIA_BUFFER_FULL:"bufferFull",JWPLAYER_DISPLAY_CLICK:"displayClick",JWPLAYER_PLAYLIST_COMPLETE:"playlistComplete",JWPLAYER_CAST_SESSION:"cast",JWPLAYER_MEDIA_ERROR:"mediaError",JWPLAYER_MEDIA_FIRST_FRAME:"firstFrame",JWPLAYER_MEDIA_PLAY_ATTEMPT:"playAttempt",JWPLAYER_MEDIA_LOADED:"loaded",JWPLAYER_MEDIA_SEEKED:"seeked",JWPLAYER_SETUP_ERROR:"setupError",JWPLAYER_ERROR:"error",JWPLAYER_PLAYER_STATE:"state",JWPLAYER_CAST_AVAILABLE:"castAvailable",JWPLAYER_MEDIA_BUFFER:"bufferChange",JWPLAYER_MEDIA_TIME:"time",JWPLAYER_MEDIA_TYPE:"mediaType",JWPLAYER_MEDIA_VOLUME:"volume",JWPLAYER_MEDIA_MUTE:"mute",JWPLAYER_MEDIA_META:"meta",JWPLAYER_MEDIA_LEVELS:"levels",JWPLAYER_MEDIA_LEVEL_CHANGED:"levelsChanged",JWPLAYER_CONTROLS:"controls",JWPLAYER_FULLSCREEN:"fullscreen",JWPLAYER_RESIZE:"resize",JWPLAYER_PLAYLIST_ITEM:"playlistItem",JWPLAYER_PLAYLIST_LOADED:"playlist",JWPLAYER_AUDIO_TRACKS:"audioTracks",JWPLAYER_AUDIO_TRACK_CHANGED:"audioTrackChanged",JWPLAYER_PLAYBACK_RATE_CHANGED:"playbackRateChanged",JWPLAYER_LOGO_CLICK:"logoClick",JWPLAYER_CAPTIONS_LIST:"captionsList",JWPLAYER_CAPTIONS_CHANGED:"captionsChanged",JWPLAYER_PROVIDER_CHANGED:"providerChanged",JWPLAYER_PROVIDER_FIRST_FRAME:"providerFirstFrame",JWPLAYER_USER_ACTION:"userAction",JWPLAYER_PROVIDER_CLICK:"providerClick",JWPLAYER_VIEW_TAB_FOCUS:"tabFocus",JWPLAYER_CONTROLBAR_DRAGGING:"scrubbing",JWPLAYER_INSTREAM_CLICK:"instreamClick",JWPLAYER_BREAKPOINT:"breakpoint"};return t.touchEvents=e,t}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[],r=function(){return{BUFFERING:"buffering",IDLE:"idle",COMPLETE:"complete",PAUSED:"paused",PLAYING:"playing",ERROR:"error",LOADING:"loading",STALLED:"stalled"}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(3),n(4),n(1),n(2)],r=function(e,t,n,i){function r(e,t){return/touch/.test(e.type)?(e.originalEvent||e).changedTouches[0]["page"+t]:e["page"+t]}function o(e){var t=e||window.event;return e instanceof MouseEvent&&("which"in t?3===t.which:"button"in t&&2===t.button)}function a(e,t,n){var i;return i=t instanceof MouseEvent||!t.touches&&!t.changedTouches?t:t.touches&&t.touches.length?t.touches[0]:t.changedTouches[0],{type:e,sourceEvent:t,target:t.target,currentTarget:n,pageX:i.pageX,pageY:i.pageY}}function s(e){(e instanceof MouseEvent||e instanceof window.TouchEvent)&&(e.preventManipulation&&e.preventManipulation(),e.preventDefault&&e.preventDefault())}var l=t.touchEvents,u="PointerEvent"in window,c="ontouchstart"in window,d=!(u||c&&i.isMobile()),f=i.isFF()&&i.isOSX(),p=function(e,t){function i(e){"touch"!==e.pointerType&&y(l.OVER,e)}function c(e){"touch"!==e.pointerType&&y(l.MOVE,e)}function p(t){(d||u&&"touch"!==t.pointerType&&!e.contains(document.elementFromPoint(t.x,t.y)))&&y(l.OUT,t)}function h(e,t,n){e.removeEventListener(t,n),e.addEventListener(t,n)}function g(n){w=n.target,L=r(n,"X"),C=r(n,"Y"),o(n)||("pointerdown"===n.type&&n.isPrimary?(t.preventScrolling&&(E=n.pointerId,e.setPointerCapture(E)),h(e,"pointermove",v),h(e,"pointercancel",m),"mouse"===n.pointerType&&"OBJECT"===w.nodeName?h(document,"mouseup",m):h(e,"pointerup",m)):"mousedown"===n.type?(h(document,"mousemove",v),f&&"object"===n.target.nodeName.toLowerCase()?h(e,"click",m):h(document,"mouseup",m)):"touchstart"===n.type&&(h(w,"touchmove",v),h(w,"touchcancel",m),h(w,"touchend",m)),t.preventScrolling&&s(n))}function v(e){var n=6;if(A)y(l.DRAG,e);else{var i=r(e,"X"),o=r(e,"Y"),a=i-L,u=o-C;a*a+u*u>n*n&&(y(l.DRAG_START,e),A=!0,y(l.DRAG,e))}t.preventScrolling&&s(e)}function m(n){var i="pointerup"===n.type||"pointercancel"===n.type;i&&t.preventScrolling&&e.releasePointerCapture(E),e.removeEventListener("pointermove",v),e.removeEventListener("pointercancel",m),e.removeEventListener("pointerup",m),document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",m),w&&(w.removeEventListener("touchmove",v),w.removeEventListener("touchcancel",m),w.removeEventListener("touchend",m)),A?y(l.DRAG_END,n):t.directSelect&&n.target!==e||n.type.indexOf("cancel")!==-1||("mouseup"===n.type||"click"===n.type||i&&"mouse"===n.pointerType?y(l.CLICK,n):(y(l.TAP,n),"touchend"===n.type&&s(n))),w=null,A=!1}function y(e,i){var r;if(t.enableDoubleTap&&(e===l.CLICK||e===l.TAP))if(n.now()-P<k){var o=e===l.CLICK?l.DOUBLE_CLICK:l.DOUBLE_TAP;r=a(o,i,b),R.trigger(o,r),P=0}else P=n.now();r=a(e,i,b),R.trigger(e,r)}var w,E,b=e,A=!1,L=0,C=0,P=0,k=300;t=t||{},u?(e.addEventListener("pointerdown",g),t.useHover&&(e.addEventListener("pointerover",i),e.addEventListener("pointerout",p)),t.useMove&&e.addEventListener("pointermove",c)):(d&&(e.addEventListener("mousedown",g),t.useHover&&(e.addEventListener("mouseover",i),e.addEventListener("mouseout",p)),t.useMove&&e.addEventListener("mousemove",c)),e.addEventListener("touchstart",g));var R=this;return this.triggerEvent=y,this.destroy=function(){this.off(),e.removeEventListener("touchstart",g),e.removeEventListener("mousedown",g),w&&(w.removeEventListener("touchmove",v),w.removeEventListener("touchcancel",m),w.removeEventListener("touchend",m),w=null),u&&(t.preventScrolling&&e.releasePointerCapture(E),e.removeEventListener("pointerover",i),e.removeEventListener("pointerdown",g),e.removeEventListener("pointermove",v),e.removeEventListener("pointermove",c),e.removeEventListener("pointercancel",m),e.removeEventListener("pointerout",p),e.removeEventListener("pointerup",m)),e.removeEventListener("click",m),e.removeEventListener("mouseover",i),e.removeEventListener("mousemove",c),e.removeEventListener("mouseout",p),document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",m)},this};return p.getPointerType=function(e){return u&&e instanceof window.PointerEvent?"touch"===e.pointerType?"touch":"mouse":c&&e instanceof window.TouchEvent?"touch":"mouse"},n.extend(p.prototype,e),p}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1)],r=function(e){function t(e){return/[\(,]format=m3u8-/i.test(e)?"m3u8":!!/[\(,]format=mpd-/i.test(e)&&"mpd"}var n=function(e){return e.replace(/^\s+|\s+$/g,"")},i=function(e,t,n){for(e=""+e,n=n||"0";e.length<t;)e=n+e;return e},r=function(e,t){for(var n=0;n<e.attributes.length;n++)if(e.attributes[n].name&&e.attributes[n].name.toLowerCase()===t.toLowerCase())return e.attributes[n].value.toString();return""},o=function(e){if(!e||"rtmp"===e.substr(0,4))return"";var n=t(e);return n?n:(e=e.split("?")[0].split("#")[0],e.lastIndexOf(".")>-1?e.substr(e.lastIndexOf(".")+1,e.length).toLowerCase():void 0)},a=function(e){var t=parseInt(e/3600),n=parseInt(e/60)%60,r=e%60;return i(t,2)+":"+i(n,2)+":"+i(r.toFixed(3),6)},s=function(t,n){if(e.isNumber(t))return t;t=t.replace(",",".");var i=t.split(":"),r=i.length,o=0;if("s"===t.slice(-1))o=parseFloat(t);else if("m"===t.slice(-1))o=60*parseFloat(t);else if("h"===t.slice(-1))o=3600*parseFloat(t);else if(r>1){var a=r-1;4===r&&(n&&(o=parseFloat(i[a])/n),a-=1),o+=parseFloat(i[a]),o+=60*parseFloat(i[a-1]),r>=3&&(o+=3600*parseFloat(i[a-2]))}else o=parseFloat(t);return o},l=function(t,n){return e.map(t,function(e){return n+e})},u=function(t,n){return e.map(t,function(e){return e+n})};return{trim:n,pad:i,xmlAttribute:r,extension:o,hms:a,seconds:s,suffix:u,prefix:l}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(7),n(1),n(89)],r=function(e,t,n){var i={};i.createElement=function(e){var t=document.createElement("div");return t.innerHTML=e,t.firstChild},i.styleDimension=function(e){return e+(e.toString().indexOf("%")>0?"":"px")};var r=function(e){return t.isString(e.className)?e.className.split(" "):[]},o=function(t,n){n=e.trim(n),t.className!==n&&(t.className=n)};return i.classList=function(e){return e.classList?e.classList:r(e)},i.hasClass=n.hasClass,i.addClass=function(e,n){var i=r(e),a=t.isArray(n)?n:n.split(" ");t.each(a,function(e){t.contains(i,e)||i.push(e)}),o(e,i.join(" "))},i.removeClass=function(e,n){var i=r(e),a=t.isArray(n)?n:n.split(" ");o(e,t.difference(i,a).join(" "))},i.replaceClass=function(e,t,n){var i=e.className||"";t.test(i)?i=i.replace(t,n):n&&(i+=" "+n),o(e,i)},i.toggleClass=function(e,n,r){var o=i.hasClass(e,n);r=t.isBoolean(r)?r:!o,r!==o&&(r?i.addClass(e,n):i.removeClass(e,n))},i.emptyElement=function(e){for(;e.firstChild;)e.removeChild(e.firstChild)},i.addStyleSheet=function(e){var t=document.createElement("link");t.rel="stylesheet",t.href=e,document.getElementsByTagName("head")[0].appendChild(t)},i.empty=function(e){if(e)for(;e.childElementCount>0;)e.removeChild(e.children[0])},i.bounds=function(e){var t={left:0,right:0,width:0,height:0,top:0,bottom:0};if(!e||!document.body.contains(e))return t;var n=e.getBoundingClientRect(),i=window.pageYOffset,r=window.pageXOffset;return n.width||n.height||n.left||n.top?(t.left=n.left+r,t.right=n.right+r,t.top=n.top+i,t.bottom=n.bottom+i,t.width=n.right-n.left,t.height=n.bottom-n.top,t):t},i}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(7)],r=function(e){return{localName:function t(e){var t="";return e&&(e.localName?t=e.localName:e.baseName&&(t=e.baseName)),t},textContent:function n(t){var n="";return t&&(t.textContent?n=e.trim(t.textContent):t.text&&(n=e.trim(t.text))),n},getChildNode:function(e,t){return e.childNodes[t]},numChildren:function(e){return e.childNodes?e.childNodes.length:0}}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[],r=function(){return{repo:"",SkinsIncluded:["seven"],SkinsLoadable:["beelden","bekle","five","glow","roundster","six","stormtrooper","vapor"],dvrSeekLimit:-25}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(7)],r=function(e){var t={},n=t.pluginPathType={ABSOLUTE:0,RELATIVE:1,CDN:2};return t.getPluginPathType=function(t){if("string"==typeof t){t=t.split("?")[0];var i=t.indexOf("://");if(i>0)return n.ABSOLUTE;var r=t.indexOf("/"),o=e.extension(t);return!(i<0&&r<0)||o&&isNaN(o)?n.RELATIVE:n.CDN}},t.getPluginName=function(e){return e.replace(/^(.*\/)?([^-]*)-?.*\.(swf|js)$/,"$2")},t.getPluginVersion=function(e){return e.replace(/[^-]*-?([^\.]*).*$/,"$1")},t}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(2),n(4),n(5),n(1)],r=function(e,t,n,i){var r=e.noop,o=i.constant(!1),a={supports:o,play:r,load:r,stop:r,volume:r,mute:r,seek:r,resize:r,remove:r,destroy:r,setVisibility:r,setFullscreen:o,getFullscreen:r,getContainer:r,setContainer:o,getName:r,getQualityLevels:r,getCurrentQuality:r,setCurrentQuality:r,getAudioTracks:r,getCurrentAudioTrack:r,setCurrentAudioTrack:r,setPlaybackRate:r,getPlaybackRate:function(){return 1},checkComplete:r,setControls:r,attachMedia:r,detachMedia:r,setState:function(e){var i=this.state||n.IDLE;this.state=e,e!==i&&this.trigger(t.JWPLAYER_PLAYER_STATE,{newstate:e})},sendMediaType:function(e){var n=e[0].type,i="oga"===n||"aac"===n||"mp3"===n||"mpeg"===n||"vorbis"===n;this.trigger(t.JWPLAYER_MEDIA_TYPE,{mediaType:i?"audio":"video"})}};return a}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};i=[n(7),n(32)],r=function(e,t){function n(e){e=e.split("-");for(var t=1;t<e.length;t++)e[t]=e[t].charAt(0).toUpperCase()+e[t].slice(1);return e.join("")}function i(t,n){return""===n||void 0===n||null===n?"":"string"==typeof n&&isNaN(n)?/png|gif|jpe?g/i.test(n)&&n.indexOf("url")<0?"url("+n+")":n:0===n||"z-index"===t||"opacity"===t?""+n:/color/i.test(t)?"#"+e.pad(n.toString(16).replace(/^0x/i,""),6):Math.ceil(n)+"px"}var r,a=function(e,n,i,r){i=i||"all-players";var a="";if("object"===("undefined"==typeof n?"undefined":o(n))){var l=document.createElement("div");s(l,n);var u=l.style.cssText;r&&u&&(u=u.replace(/;/g," !important;")),a="{"+u+"}"}else"string"==typeof n&&(a=n);return""===a||"{}"===a?void t.clear(i,e):void t.style([[e,e+a]],i)},s=function(e,t){if(void 0!==e&&null!==e){void 0===e.length&&(e=[e]);var r,o={};for(r in t)Object.prototype.hasOwnProperty.call(t,r)&&(o[r]=i(r,t[r]));for(var a=0;a<e.length;a++){var s,l=e[a];if(void 0!==l&&null!==l)for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(s=n(r),l.style[s]!==o[r]&&(l.style[s]=o[r]))}}},l=function(e,t){s(e,{transform:t,webkitTransform:t,msTransform:t,mozTransform:t,oTransform:t})},u=function(e,t){var n="rgb",i=void 0!==t&&100!==t;if(i&&(n+="a"),!r){var o=document.createElement("canvas");o.height=1,o.width=1,r=o.getContext("2d")}e?isNaN(parseInt(e,16))||(e="#"+e):e="#000000",r.clearRect(0,0,1,1),r.fillStyle=e,r.fillRect(0,0,1,1);var a=r.getImageData(0,0,1,1).data;return n+="("+a[0]+", "+a[1]+", "+a[2],i&&(n+=", "+t/100),n+")"};return{css:a,style:s,clearCss:t.clear,transform:l,hexToRgba:u,getRgba:u}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(4),n(3),n(1)],r=function(e,t,n){var i={},r={NEW:0,LOADING:1,ERROR:2,COMPLETE:3},o=function(o,a){function s(t){c=r.ERROR,u.trigger(e.ERROR,t)}function l(t){c=r.COMPLETE,u.trigger(e.COMPLETE,t)}var u=n.extend(this,t),c=r.NEW;this.addEventListener=this.on,this.removeEventListener=this.off,this.makeStyleLink=function(e){var t=document.createElement("link");return t.type="text/css",t.rel="stylesheet",t.href=e,t},this.makeScriptTag=function(e){var t=document.createElement("script");return t.src=e,t},this.makeTag=a?this.makeStyleLink:this.makeScriptTag,this.load=function(){if(c===r.NEW){var t=i[o];if(t&&(c=t.getStatus(),c<2))return t.on(e.ERROR,s),void t.on(e.COMPLETE,l);var n=document.getElementsByTagName("head")[0]||document.documentElement,u=this.makeTag(o),d=!1;u.onload=u.onreadystatechange=function(e){d||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(d=!0,l(e),u.onload=u.onreadystatechange=null,n&&u.parentNode&&!a&&n.removeChild(u))},u.onerror=s,n.insertBefore(u,n.firstChild),c=r.LOADING,i[o]=this}},this.getStatus=function(){return c}};return o.loaderstatus=r,o}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(2),n(22),n(73),n(1),n(3),n(92),n(4),n(5)],r=function(e,t,n,i,r,o,a,s){var l=function(){function o(e,t){var n=i.extend({},t,{type:e}),r=this.mediaModel;switch(e){case"flashThrottle":var o="resume"!==t.state;this.set("flashThrottle",o),this.set("flashBlocked",o);break;case"flashBlocked":return void this.set("flashBlocked",!0);case"flashUnblocked":return void this.set("flashBlocked",!1);case"volume":return void this.set(e,t[e]);case"mute":return void(this.get("autostartMuted")||this.set(e,t[e]));case"ratechange":var l=t.playbackRate;return void(l>0&&this.set("playbackRate",l));case a.JWPLAYER_MEDIA_TYPE:return void(r.get("mediaType")!==t.mediaType&&(r.set("mediaType",t.mediaType),this.mediaController.trigger(e,n)));case a.JWPLAYER_PLAYER_STATE:return void r.set("state",t.newstate);case a.JWPLAYER_MEDIA_BUFFER:this.set("buffer",t.bufferPercent);case a.JWPLAYER_MEDIA_META:var u=t.duration;i.isNumber(u)&&!i.isNaN(u)&&(r.set("duration",u),this.set("duration",u));break;case a.JWPLAYER_MEDIA_BUFFER_FULL:r.get("playAttempt")?this.playVideo():r.on("change:playAttempt",function(){this.playVideo()},this),this.setPlaybackRate(this.get("defaultPlaybackRate"));break;case a.JWPLAYER_MEDIA_TIME:r.set("position",t.position),this.set("position",t.position),i.isNumber(t.duration)&&(r.set("duration",t.duration),this.set("duration",t.duration));break;case a.JWPLAYER_PROVIDER_CHANGED:this.set("provider",f.getName());break;case a.JWPLAYER_MEDIA_LEVELS:this.setQualityLevel(t.currentQuality,t.levels),r.set("levels",t.levels);break;case a.JWPLAYER_MEDIA_LEVEL_CHANGED:this.setQualityLevel(t.currentQuality,t.levels),this.persistQualityLevel(t.currentQuality,t.levels);break;case a.JWPLAYER_MEDIA_COMPLETE:return h=!0,this.mediaController.trigger(a.JWPLAYER_MEDIA_BEFORECOMPLETE,n),void(g&&this.playbackComplete());case a.JWPLAYER_AUDIO_TRACKS:this.setCurrentAudioTrack(t.currentTrack,t.tracks),r.set("audioTracks",t.tracks);break;case a.JWPLAYER_AUDIO_TRACK_CHANGED:this.setCurrentAudioTrack(t.currentTrack,t.tracks);break;case"subtitlesTrackChanged":this.persistVideoSubtitleTrack(t.currentTrack,t.tracks);break;case"visualQuality":var c=i.extend({},t);r.set("visualQuality",c);break;case"autoplayFailed":this.set("autostartFailed",!0),r.get("state")===s.PLAYING&&r.set("state",s.PAUSED)}this.mediaController.trigger(e,n)}function l(){return!!e.isIOS()&&!(e.isIOS(6)||e.isIOS(7)||e.isIOS(8)||e.isIOS(9))}function c(){var t=!p.get("advertising")||p.get("advertising").autoplayadsmuted,n=l()&&(e.isSafari()||e.isChrome()||e.isFacebook()),i=e.isAndroid()&&e.isChrome(),r=n||i,o=1===p.get("sdkplatform");return!p.get("sdkplatform")&&t&&r||o}var d,f,p=this,h=!1,g=!0;this.mediaController=i.extend({},r),this.mediaModel=new u,n.model(this),this.set("mediaModel",this.mediaModel),this.setup=function(e){return i.extend(this.attributes,e,{item:0,itemMeta:{},playlistItem:void 0,state:s.IDLE,flashBlocked:!1,provider:void 0,duration:0,position:0,buffer:0}),this.updateProviders(),this},this.getConfiguration=function(){return i.omit(this.clone(),["mediaModel"])},this.updateProviders=function(){d=new t(this.getConfiguration())},this.setQualityLevel=function(e,t){e>-1&&t.length>1&&"youtube"!==f.getName().name&&this.mediaModel.set("currentLevel",parseInt(e))},this.persistQualityLevel=function(e,t){var n=t[e]||{},i=n.label;this.set("qualityLabel",i)},this.setCurrentAudioTrack=function(e,t){e>-1&&t.length>0&&e<t.length&&this.mediaModel.set("currentAudioTrack",parseInt(e))},this.onMediaContainer=function(){var e=this.get("mediaContainer");f.setContainer(e)},this.changeVideoProvider=function(e){if(this.off("change:mediaContainer",this.onMediaContainer),f&&(f.off(null,null,this),f.getContainer()&&f.remove(),delete f.instreamMode),!e)return this.resetProvider(),void this.set("provider",void 0);f=new e(p.get("id"),p.getConfiguration());var t=this.get("mediaContainer");t?f.setContainer(t):this.once("change:mediaContainer",this.onMediaContainer),f.getName().name.indexOf("flash")===-1&&(this.set("flashThrottle",void 0),this.set("flashBlocked",!1)),f.volume(p.get("volume")),f.mute(this.autoStartOnMobile()||p.get("mute")),f.on("all",o,this),this.setPlaybackRate(this.get("defaultPlaybackRate")),this.set("playbackRate",f.getPlaybackRate()),this.get("instreamMode")===!0&&(f.instreamMode=!0),this.set("renderCaptionsNatively",f.renderNatively)},this.checkComplete=function(){return h},this.detachMedia=function(){return g=!1,f.off("all",o,this),f.detachMedia()},this.attachMedia=function(){g=!0,f.off("all",o,this),f.on("all",o,this),h&&this.playbackComplete(),f.attachMedia(),this.setPlaybackRate(this.get("defaultPlaybackRate"))},this.playbackComplete=function(){h=!1,f.setState(s.COMPLETE),this.mediaController.trigger(a.JWPLAYER_MEDIA_COMPLETE,{})},this.destroy=function(){this.off(),f&&(f.off(null,null,this),f.destroy())},this.getVideo=function(){return f},this.setFullscreen=function(e){e=!!e,e!==p.get("fullscreen")&&p.set("fullscreen",e)},this.chooseProvider=function(e){return d.choose(e).provider},this.setItemIndex=function(e){var t=this.get("playlist");e=parseInt(e,10)||0,e=(e+t.length)%t.length,this.set("item",e),this.set("playlistItem",t[e]),this.setActiveItem(t[e])},this.setActiveItem=function(t){this.mediaModel.off(),this.mediaModel=new u,this.set("itemMeta",{}),this.set("mediaModel",this.mediaModel),this.set("position",t.starttime||0),this.set("minDvrWindow",t.minDvrWindow),this.set("duration",t.duration&&e.seconds(t.duration)||0),this.setProvider(t)},this.setProvider=function(e){var t=e&&e.sources&&e.sources[0];if(void 0!==t){var n=this.chooseProvider(t);n&&f instanceof n||p.changeVideoProvider(n),f&&(f.init&&f.init(e),this.set("provider",f.getName()),this.trigger("itemReady",e))}},this.getProviders=function(){return d},this.resetProvider=function(){f=null},this.setVolume=function(e){e=Math.round(e),this.set("volume",e),f&&f.volume(e);var t=0===e;t!==this.getMute()&&this.setMute(t)},this.getMute=function(){return this.get("autostartMuted")||this.get("mute")},this.setMute=function(t){if(e.exists(t)||(t=!this.getMute()),this.set("mute",t),
f&&f.mute(t),!t){var n=Math.max(10,this.get("volume"));this.set("autostartMuted",!1),this.setVolume(n)}},this.setStreamType=function(e){this.set("streamType",e),"LIVE"===e&&this.setPlaybackRate(1)},this.setPlaybackRate=function(t){g&&i.isNumber(t)&&(t=e.between(t,.25,4),"LIVE"===this.get("streamType")&&(t=1),this.set("defaultPlaybackRate",t),f&&f.setPlaybackRate&&f.setPlaybackRate(t))},this.loadVideo=function(t){t||(t=this.get("playlist")[this.get("item")]),this.set("position",t.starttime||0),this.set("duration",t.duration&&e.seconds(t.duration)||0),this.mediaModel.set("playAttempt",!0),this.mediaController.trigger(a.JWPLAYER_MEDIA_PLAY_ATTEMPT,{playReason:this.get("playReason")}),f.load(t)},this.stopVideo=function(){f&&f.stop()},this.playVideo=function(){f.play()},this.persistCaptionsTrack=function(){var e=this.get("captionsTrack");e?this.set("captionLabel",e.name):this.set("captionLabel","Off")},this.setVideoSubtitleTrack=function(e,t){this.set("captionsIndex",e),e&&t&&e<=t.length&&t[e-1].data&&this.set("captionsTrack",t[e-1]),f&&f.setSubtitlesTrack&&f.setSubtitlesTrack(e)},this.persistVideoSubtitleTrack=function(e,t){this.setVideoSubtitleTrack(e,t),this.persistCaptionsTrack()},this.autoStartOnMobile=function(){return this.get("autostart")&&c()},this.setAutoStart=function(e){i.isUndefined(e)||this.set("autostart",e);var t=this.autoStartOnMobile();t&&this.set("autostartMuted",!0),this.set("playOnViewable",t||"viewable"===this.get("autostart"))}},u=l.MediaModel=function(){this.set("state",s.IDLE)};return i.extend(l.prototype,o),i.extend(u.prototype,o),l}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[],r=function(){return{createId:function(e,t){var n,i=e.kind||"cc";return n=e["default"]||e.defaulttrack?"default":e._id||e.file||i+t},createLabel:function(e,t){var n=e.label||e.name||e.language;return n||(n="Unknown CC",t+=1,t>1&&(n+=" ["+t+"]")),{label:n,unknownCount:t}}}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1),n(2),n(9),n(19),n(77),n(34)],r=function(e,t,i,r,o,a){function s(e,t,n,a){var s,u,c=e.responseXML?e.responseXML.firstChild:null;if(c)for("xml"===i.localName(c)&&(c=c.nextSibling);c.nodeType===c.COMMENT_NODE;)c=c.nextSibling;try{if(c&&"tt"===i.localName(c))s=o(e.responseXML),u=this.convertToVTTCues(s),delete t.xhr,n(u);else{var d=e.responseText;d.indexOf("WEBVTT")>=0?l(d,t,n,a):(s=r(d),u=this.convertToVTTCues(s),delete t.xhr,n(u))}}catch(f){delete t.xhr,a(f)}}function l(e,t,i,r){n.e(9,function(require){var o=n(35),a=new o(window),s=[];a.oncue=function(e){s.push(e)},a.onflush=function(){delete t.xhr,i(s)};try{a.parse(e)}catch(l){delete t.xhr,r(l)}})}var u={};return u.loadFile=function(e,n,i){e.xhr=t.ajax(e.file,function(t){s.call(u,t,e,n,i)},i)},u.cancelXhr=function(t){e.each(t,function(e){var t=e.xhr;t&&(t.onload=null,t.onreadystatechange=null,t.onerror=null,"abort"in t&&t.abort()),delete e.xhr})},u.convertToVTTCues=function(t){var n=e.map(t,function(e){return new a(e.begin,e.end,e.text)});return n},u}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(5)],r=function(e){function t(t){return t===e.COMPLETE||t===e.ERROR?e.IDLE:t}return function(e,n,i){if(n=t(n),i=t(i),n!==i){var r=n.replace(/(?:ing|d)$/,""),o={type:r,newstate:n,oldstate:i,reason:e.mediaModel.get("state")};"play"===r?o.playReason=e.get("playReason"):"pause"===r&&(o.pauseReason=e.get("pauseReason")),this.trigger(r,o)}}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(2),n(7)],r=function(e,t){function n(e){var t={},n=e.split("\r\n");1===n.length&&(n=e.split("\n"));var r=1;if(n[0].indexOf(" --> ")>0&&(r=0),n.length>r+1&&n[r+1]){var o=n[r],a=o.indexOf(" --> ");a>0&&(t.begin=i(o.substr(0,a)),t.end=i(o.substr(a+5)),t.text=n.slice(r+1).join("\r\n"))}return t}var i=e.seconds;return function(e){var i=[];e=t.trim(e);var r=e.split("\r\n\r\n");1===r.length&&(r=e.split("\n\n"));for(var o=0;o<r.length;o++)if("WEBVTT"!==r[o]){var a=n(r[o]);a.text&&i.push(a)}return i}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(83),n(84),n(39),n(11)],r=function(e,t,n,i){var r={},o={},a=function(n,i){return o[n]=new e(new t(r),i),o[n]},s=function(e,t,o,a){var s=i.getPluginName(e);r[s]||(r[s]=new n(e)),r[s].registerPlugin(e,t,o,a)};return{loadPlugins:a,registerPlugin:s}}.apply(t,i),!(void 0!==r&&(e.exports=r))},,function(e,t,n){var i,r;i=[n(12),n(46),n(85),n(1),n(88)],r=function(e,t,i,r,o){function a(e){this.config=e||{},this.providers=this.reorderProviders(this.config.primary)}a.loaders={html5:function(e){n.e(2,function(require){var t=n(45);s(t),e(t)})},flash:function(e){n.e(3,function(require){var t=n(43);s(t),e(t)})},youtube:function(e){n.e(5,function(require){var t=n(47);s(t),e(t)})}};var s=a.registerProvider=function(n){var a=n.getName().name;if(!i[a]){if(!r.find(t,r.matches({name:a}))){if(!r.isFunction(n.supports))throw new Error("Tried to register a provider with an invalid object");t.unshift({name:a,supports:n.supports})}o(n.prototype,e),i[a]=n}};return r.extend(a.prototype,{load:function(e){return Promise.all(r.map(e,function(e){return new Promise(function(t){var n=a.loaders[e.name];n?n(t):t()})}))},reorderProviders:function(e){var n=r.clone(t);if("flash"===e){var i=r.indexOf(n,r.findWhere(n,{name:"flash"})),o=n.splice(i,1)[0],a=r.indexOf(n,r.findWhere(n,{name:"html5"}));n.splice(a,0,o)}return n},providerSupports:function(e,t){return e.supports(t)},required:function(e,t){var n=this,i=this.reorderProviders(t);return e=e.slice(),r.compact(r.map(i,function(t){for(var i=!1,r=e.length;r--;){var o=e[r],a=n.providerSupports(t,o.sources[0]);a&&e.splice(r,1),i=i||a}if(i)return t}))},choose:function(e){e=r.isObject(e)?e:{};for(var t=this.providers.length,n=0;n<t;n++){var o=this.providers[n];if(this.providerSupports(o,e)){var a=t-n-1;return{priority:a,name:o.name,type:e.type,providerToCheck:o,provider:i[o.name]}}}return null}}),a}.apply(t,i),!(void 0!==r&&(e.exports=r))},,function(e,t,n){var i,r;i=[n(1)],r=function(e){var t={},n={TIT2:"title",TT2:"title",WXXX:"url",TPE1:"artist",TP1:"artist",TALB:"album",TAL:"album"};return t.utf8ArrayToStr=function(e,t){var n,i,r,o,a,s;for(n="",r=e.length,i=t||0;i<r;)if(o=e[i++],0!==o&&3!==o)switch(o>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:n+=String.fromCharCode(o);break;case 12:case 13:a=e[i++],n+=String.fromCharCode((31&o)<<6|63&a);break;case 14:a=e[i++],s=e[i++],n+=String.fromCharCode((15&o)<<12|(63&a)<<6|(63&s)<<0)}return n},t.utf16BigEndianArrayToStr=function(e,t){var n,i,r;for(n="",r=e.length-1,i=t||0;i<r;)254===e[i]&&255===e[i+1]||(n+=String.fromCharCode((e[i]<<8)+e[i+1])),i+=2;return n},t.syncSafeInt=function(e){var n=t.arrayToInt(e);return 127&n|(32512&n)>>1|(8323072&n)>>2|(2130706432&n)>>3},t.arrayToInt=function(e){for(var t="0x",n=0;n<e.length;n++)e[n]<16&&(t+="0"),t+=e[n].toString(16);return parseInt(t)},t.parseID3=function(i){return e.reduce(i,function(i,r){if(!("value"in r)&&"data"in r&&r.data instanceof ArrayBuffer){var o=r,a=new Uint8Array(o.data),s=a.length;r={value:{key:"",data:""}};for(var l=10;l<14&&l<a.length&&0!==a[l];)r.value.key+=String.fromCharCode(a[l]),l++;var u=19,c=a[u];3!==c&&0!==c||(c=a[++u],s--);var d=0;if(1!==c&&2!==c)for(var f=u+1;f<s;f++)if(0===a[f]){d=f-u;break}if(d>0){var p=t.utf8ArrayToStr(a.subarray(u,u+=d),0);if("PRIV"===r.value.key){if("com.apple.streaming.transportStreamTimestamp"===p){var h=1&t.syncSafeInt(a.subarray(u,u+=4)),g=t.syncSafeInt(a.subarray(u,u+=4));h&&(g+=4294967296),r.value.data=g}else r.value.data=t.utf8ArrayToStr(a,u+1);r.value.info=p}else r.value.info=p,r.value.data=t.utf8ArrayToStr(a,u+1)}else{var v=a[u];1===v||2===v?r.value.data=t.utf16BigEndianArrayToStr(a,u+1):r.value.data=t.utf8ArrayToStr(a,u+1)}}if(n.hasOwnProperty(r.value.key)&&(i[n[r.value.key]]=r.value.data),r.value.info){var m=i[r.value.key];e.isObject(m)||(m={},i[r.value.key]=m),m[r.value.info]=r.value.data}else i[r.value.key]=r.value.data;return i},{})},t}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1),n(27)],r=function(e,t){function n(e){return/^(?:(?:https?|file)\:)?\/\//.test(e)}function i(t){return e.some(t,function(e){return"parsererror"===e.nodeName})}var r={};return r.getAbsolutePath=function(e,i){if(t.exists(i)||(i=document.location.href),t.exists(e)){if(n(e))return e;var r,o=i.substring(0,i.indexOf("://")+3),a=i.substring(o.length,i.indexOf("/",o.length+1));if(0===e.indexOf("/"))r=e.split("/");else{var s=i.split("?")[0];s=s.substring(o.length+a.length+1,s.lastIndexOf("/")),r=s.split("/").concat(e.split("/"))}for(var l=[],u=0;u<r.length;u++)r[u]&&t.exists(r[u])&&"."!==r[u]&&(".."===r[u]?l.pop():l.push(r[u]));return o+a+"/"+l.join("/")}},r.getScriptPath=e.memoize(function(e){for(var t=document.getElementsByTagName("script"),n=0;n<t.length;n++){var i=t[n].src;if(i){var r=i.indexOf("/"+e);if(r>=0)return i.substr(0,r+1)}}return""}),r.parseXML=function(e){var t=null;try{"DOMParser"in window?(t=(new window.DOMParser).parseFromString(e,"text/xml"),(i(t.childNodes)||t.childNodes&&i(t.childNodes[0].childNodes))&&(t=null)):(t=new window.ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(e))}catch(n){}return t},r.serialize=function(e){if(void 0===e)return null;if("string"==typeof e&&e.length<6){var t=e.toLowerCase();if("true"===t)return!0;if("false"===t)return!1;if(!isNaN(Number(e))&&!isNaN(parseFloat(e)))return Number(e)}return e},r.parseDimension=function(e){return"string"==typeof e?""===e?0:e.lastIndexOf("%")>-1?e:parseInt(e.replace("px",""),10):e},r.timeFormat=function(t,n){if(t<=0&&!n||e.isNaN(parseInt(t)))return"00:00";var i=t<0?"-":"";t=Math.abs(t);var r=Math.floor(t/3600),o=Math.floor((t-3600*r)/60),a=Math.floor(t%60);return i+(r?r+":":"")+(o<10?"0":"")+o+":"+(a<10?"0":"")+a},r}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r,o=n(87);i=[n(1)],r=function(e){var t=function(){var t={},n={},i={},r={};return{start:function(e){t[e]=(0,o.dateTime)(),i[e]=i[e]+1||1},end:function(e){if(t[e]){var i=(0,o.dateTime)(),r=i-t[e];delete t[e],n[e]=n[e]+r||r}},dump:function(){var a=e.extend({},n);for(var s in t)if(Object.prototype.hasOwnProperty.call(t,s)){var l=(0,o.dateTime)(),u=l-t[s];a[s]=a[s]+u||u}return{counts:e.extend({},i),sums:a,events:e.extend({},r)}},tick:function(e){r[e]=(0,o.dateTime)()},clear:function(e){delete r[e]},between:function(e,t){return r[t]&&r[e]?r[t]-r[e]:null}}};return t}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};i=[n(1)],r=function(e){var t={};return t.exists=function(e){switch("undefined"==typeof e?"undefined":o(e)){case"string":return e.length>0;case"object":return null!==e;case"undefined":return!1;default:return!0}},t.isHTTPS=function(){return 0===window.location.href.indexOf("https")},t.isRtmp=function(e,t){return 0===e.indexOf("rtmp")||"rtmp"===t},t.isYouTube=function(e,t){return"youtube"===t||/^(http|\/\/).*(youtube\.com|youtu\.be)\/.+/.test(e)},t.youTubeID=function(e){var t=/v[=\/]([^?&]*)|youtu\.be\/([^?]*)|^([\w-]*)$/i.exec(e);return t?t.slice(1).join("").replace("?",""):""},t.typeOf=function(t){if(null===t)return"null";var n="undefined"==typeof t?"undefined":o(t);return"object"===n&&e.isArray(t)?"array":n},t}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[],r=function(){return"7.12.11+local.2024-11-13-19-33-59-635"}.apply(t,i),!(void 0!==r&&(e.exports=r))},,,,function(e,t,n){var i;i=function(require,e,t){function n(e,t){r(t,o(e))}function i(e,t){var n=c[e];if(n)if(t){var i=n[t];if(i)for(var r=0;r<i.parts.length;r+=1)i.parts[r]()}else{for(var o=Object.keys(n),a=0;a<o.length;a+=1)for(var s=n[o[a]],l=0;l<s.parts.length;l+=1)s.parts[l]();delete c[e]}}function r(e,t){for(var n=0;n<t.length;n++){var i=t[n],r=(c[e]||{})[i.id];if(r){for(var o=0;o<r.parts.length;o++)r.parts[o](i.parts[o]);for(;o<i.parts.length;o++)r.parts.push(l(e,i.parts[o]))}else{for(var a=[],o=0;o<i.parts.length;o++)a.push(l(e,i.parts[o]));c[e]=c[e]||{},c[e][i.id]={id:i.id,parts:a}}}}function o(e){for(var t=[],n={},i=0;i<e.length;i++){var r=e[i],o=r[0],a=r[1],s=r[2],l={css:a,media:s};n[o]?n[o].parts.push(l):t.push(n[o]={id:o,parts:[l]})}return t}function a(e){p().appendChild(e)}function s(e){var t=document.createElement("style");return t.type="text/css",t.setAttribute("data-jwplayer-id",e),a(t),t}function l(e,t){var n,i,r,o=d[e];o||(o=d[e]={element:s(e),counter:0});var a=o.counter++;return n=o.element,i=u.bind(null,n,a,!1),r=u.bind(null,n,a,!0),i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media)return;i(t=e)}else r()}}function u(e,t,n,i){var r=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=h(t,r);else{var o=document.createTextNode(r),a=e.childNodes,s=a[t];s?e.replaceChild(o,s):e.appendChild(o)}}var c={},d={},f=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},p=f(function(){return document.head||document.getElementsByTagName("head")[0]});t.exports={style:n,clear:i};var h=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()}.call(t,n,t,e),!(void 0!==i&&(e.exports=i))},function(e,t,n){var i,r;i=[],r=function(){function e(){return t||(t=new Promise(function(e){n.e(1,function(require){var t=n(55);e(t)})})),t}var t=null;return{load:e}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i;i=function(){function e(e){if("string"!=typeof e)return!1;var t=r[e.toLowerCase()];return!!t&&e.toLowerCase()}function t(e){if("string"!=typeof e)return!1;var t=o[e.toLowerCase()];return!!t&&e.toLowerCase()}function n(n,r,o){var a=this;a.hasBeenReset=!1;var s="",l=!1,u=n,c=r,d=o,f=null,p="",h=!0,g="auto",v="start",m=50,y="middle",w=50,E="middle";Object.defineProperty(a,"id",{enumerable:!0,get:function(){return s},set:function(e){s=""+e}}),Object.defineProperty(a,"pauseOnExit",{enumerable:!0,get:function(){return l},set:function(e){l=!!e}}),Object.defineProperty(a,"startTime",{enumerable:!0,get:function(){return u},set:function(e){if("number"!=typeof e)throw new TypeError("Start time must be set to a number.");u=e,this.hasBeenReset=!0}}),Object.defineProperty(a,"endTime",{enumerable:!0,get:function(){return c},set:function(e){if("number"!=typeof e)throw new TypeError("End time must be set to a number.");c=e,this.hasBeenReset=!0}}),Object.defineProperty(a,"text",{enumerable:!0,get:function(){return d},set:function(e){d=""+e,this.hasBeenReset=!0}}),Object.defineProperty(a,"region",{enumerable:!0,get:function(){return f},set:function(e){f=e,this.hasBeenReset=!0}}),Object.defineProperty(a,"vertical",{enumerable:!0,get:function(){return p},set:function(t){var n=e(t);if(n===!1)throw new SyntaxError("An invalid or illegal string was specified.");p=n,this.hasBeenReset=!0}}),Object.defineProperty(a,"snapToLines",{enumerable:!0,get:function(){return h},set:function(e){h=!!e,this.hasBeenReset=!0}}),Object.defineProperty(a,"line",{enumerable:!0,get:function(){return g},set:function(e){if("number"!=typeof e&&e!==i)throw new SyntaxError("An invalid number or illegal string was specified.");g=e,this.hasBeenReset=!0}}),Object.defineProperty(a,"lineAlign",{enumerable:!0,get:function(){return v},set:function(e){var n=t(e);if(!n)throw new SyntaxError("An invalid or illegal string was specified.");v=n,this.hasBeenReset=!0}}),Object.defineProperty(a,"position",{enumerable:!0,get:function(){return m},set:function(e){if(e<0||e>100)throw new Error("Position must be between 0 and 100.");m=e,this.hasBeenReset=!0}}),Object.defineProperty(a,"positionAlign",{enumerable:!0,get:function(){return y},set:function(e){var n=t(e);if(!n)throw new SyntaxError("An invalid or illegal string was specified.");y=n,this.hasBeenReset=!0}}),Object.defineProperty(a,"size",{enumerable:!0,get:function(){return w},set:function(e){if(e<0||e>100)throw new Error("Size must be between 0 and 100.");w=e,this.hasBeenReset=!0}}),Object.defineProperty(a,"align",{enumerable:!0,get:function(){return E},set:function(e){var n=t(e);if(!n)throw new SyntaxError("An invalid or illegal string was specified.");E=n,this.hasBeenReset=!0}}),a.displayState=void 0}if(window.VTTCue)return window.VTTCue;var i="auto",r={"":!0,lr:!0,rl:!0},o={start:!0,middle:!0,end:!0,left:!0,right:!0};return n.prototype.getCueAsHTML=function(){var e=window.WebVTT;return e.convertCueToDOMTree(window,this.text)},n}.call(t,n,t,e),!(void 0!==i&&(e.exports=i))},,function(e,t,n){var i,r;i=[n(1),n(38),n(82)],r=function(e,t,n){var i={sources:[],tracks:[],minDvrWindow:120};return function(r){r=r||{},e.isArray(r.tracks)||delete r.tracks;var o=e.extend({},i,r);e.isObject(o.sources)&&!e.isArray(o.sources)&&(o.sources=[t(o.sources)]),e.isArray(o.sources)&&0!==o.sources.length||(r.levels?o.sources=r.levels:o.sources=[t(r)]);for(var a=0;a<o.sources.length;a++){var s=o.sources[a];if(s){var l=s["default"];l?s["default"]="true"===l.toString():s["default"]=!1,o.sources[a].label||(o.sources[a].label=a.toString()),o.sources[a]=t(o.sources[a])}}return o.sources=e.compact(o.sources),e.isArray(o.tracks)||(o.tracks=[]),e.isArray(o.captions)&&(o.tracks=o.tracks.concat(o.captions),delete o.captions),o.tracks=e.compact(e.map(o.tracks,n)),o}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(9),n(80),n(2),n(4),n(3),n(1)],r=function(e,t,n,i,r,o){var a=function(){function a(r){var a=n.tryCatch(function(){var n,a=r.responseXML?r.responseXML.childNodes:null,s="";if(a){for(var c=0;c<a.length&&(s=a[c],8===s.nodeType);c++);if("xml"===e.localName(s)&&(s=s.nextSibling),"rss"===e.localName(s)){var d=t.parse(s);n=o.extend({playlist:d},d.feedData)}}if(!n)try{var f=JSON.parse(r.responseText);if(o.isArray(f))n={playlist:f};else{if(!o.isArray(f.playlist))throw Error;n=f}}catch(p){return void l("Not a valid RSS/JSON feed")}u.trigger(i.JWPLAYER_PLAYLIST_LOADED,n)});a instanceof n.Error&&l()}function s(e){l("Playlist load error: "+e)}function l(e){u.trigger(i.JWPLAYER_ERROR,{message:e?e:"Error loading file"})}var u=o.extend(this,r);this.load=function(e){n.ajax(e,a,s)},this.destroy=function(){this.off()}};return a}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(2),n(7),n(1)],r=function(e,t,n){var i={"default":!1};return function(r){if(r&&r.file){var o=n.extend({},i,r);o.file=t.trim(""+o.file);var a=/^[^\/]+\/(?:x-)?([^\/]+)$/;if(a.test(o.type)&&(o.mimeType=o.type,o.type=o.type.replace(a,"$1")),e.isYouTube(o.file)?o.type="youtube":e.isRtmp(o.file)?o.type="rtmp":o.type||(o.type=t.extension(o.file)),o.type){switch(o.type){case"m3u8":case"vnd.apple.mpegurl":o.type="hls";break;case"dash+xml":o.type="dash";break;case"smil":o.type="rtmp";break;case"m4a":o.type="aac"}return n.each(o,function(e,t){""===e&&delete o[t]}),o}}}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};i=[n(2),n(11),n(4),n(3),n(14),n(1)],r=function(e,t,n,i,r,a){var s={FLASH:0,JAVASCRIPT:1,HYBRID:2},l=function(l){function u(){switch(t.getPluginPathType(l)){case t.pluginPathType.ABSOLUTE:return l;case t.pluginPathType.RELATIVE:return e.getAbsolutePath(l,window.location.href)}}function c(){a.defer(function(){m=r.loaderstatus.COMPLETE,v.trigger(n.COMPLETE)})}function d(){m=r.loaderstatus.ERROR,v.trigger(n.ERROR,{url:l})}var f,p,h,g,v=a.extend(this,i),m=r.loaderstatus.NEW;this.load=function(){if(m===r.loaderstatus.NEW){if(l.lastIndexOf(".swf")>0)return f=l,m=r.loaderstatus.COMPLETE,void v.trigger(n.COMPLETE);if(t.getPluginPathType(l)===t.pluginPathType.CDN)return m=r.loaderstatus.COMPLETE,void v.trigger(n.COMPLETE);m=r.loaderstatus.LOADING;var e=new r(u());e.on(n.COMPLETE,c),e.on(n.ERROR,d),e.load()}},this.registerPlugin=function(e,t,i,o){g&&(clearTimeout(g),g=void 0),h=t,i&&o?(f=o,p=i):"string"==typeof i?f=i:"function"==typeof i?p=i:i||o||(f=e),m=r.loaderstatus.COMPLETE,v.trigger(n.COMPLETE)},this.getStatus=function(){return m},this.getPluginName=function(){return t.getPluginName(l)},this.getFlashPath=function(){if(f)switch(t.getPluginPathType(f)){case t.pluginPathType.ABSOLUTE:return f;case t.pluginPathType.RELATIVE:return l.lastIndexOf(".swf")>0?e.getAbsolutePath(f,window.location.href):e.getAbsolutePath(f,u())}return null},this.getJS=function(){return p},this.getTarget=function(){return h},this.getPluginmode=function(){return void 0!==("undefined"==typeof f?"undefined":o(f))&&void 0!==("undefined"==typeof p?"undefined":o(p))?s.HYBRID:void 0!==("undefined"==typeof f?"undefined":o(f))?s.FLASH:void 0!==("undefined"==typeof p?"undefined":o(p))?s.JAVASCRIPT:void 0},this.getNewInstance=function(e,t,n){return new p(e,t,n)},this.getURL=function(){return l}};return l}.apply(t,i),!(void 0!==r&&(e.exports=r))},,,,,function(e,t,n){var i,r;i=[n(50)],r=function(e){return function(t){if("hls"===t.type){if(t.androidhls===!1&&e.isAndroid())return!1;var n=e.isAndroidNative;if(n(2)||n(3)||n("4.0"))return!1;if(e.isAndroid()&&!e.isFF())return!0}return null}}.apply(t,i),!(void 0!==r&&(e.exports=r))},,function(e,t,n){var i,r;i=[n(44),n(2),n(1),n(96)],r=function(e,t,n,i){var r=[{name:"youtube",supports:function(e){return t.isYouTube(e.file,e.type)}},{name:"html5",supports:function(n){var r={aac:"audio/mp4",mp4:"video/mp4",f4v:"video/mp4",m4v:"video/mp4",mov:"video/mp4",mp3:"audio/mpeg",mpeg:"audio/mpeg",ogv:"video/ogg",ogg:"video/ogg",oga:"video/ogg",vorbis:"video/ogg",webm:"video/webm",f4a:"video/aac",m3u8:"application/vnd.apple.mpegurl",m3u:"application/vnd.apple.mpegurl",hls:"application/vnd.apple.mpegurl"},o=n.file,a=n.type,s=e(n);if(null!==s)return s;if(t.isRtmp(o,a))return!1;if(!r[a])return!1;if(i.canPlayType){var l=i.canPlayType(r[a]);return!!l}return!1}},{name:"flash",supports:function(e){var i={flv:"video",f4v:"video",mov:"video",m4a:"video",m4v:"video",mp4:"video",aac:"video",f4a:"video",mp3:"sound",mpeg:"sound",smil:"rtmp"},r=n.keys(i);if(!t.isFlashSupported())return!1;var o=e.file,a=e.type;return!!t.isRtmp(o,a)||n.contains(r,a)}}];return r}.apply(t,i),!(void 0!==r&&(e.exports=r))},,function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(){return"hidden"in document?function(){return!document.hidden}:"webkitHidden"in document?function(){return!document.webkitHidden}:function(){return!0}}()},,function(e,t,n){var i,r;i=[n(1)],r=function(e){function t(e){return function(){return i(e)}}var n={},i=e.memoize(function(e){var t=navigator.userAgent.toLowerCase();return null!==t.match(e)}),r=n.isInt=function(e){return parseFloat(e)%1===0};n.isFlashSupported=function(){var e=n.flashVersion();return e&&e>=18},n.isFF=t(/gecko\//i),n.isIPod=t(/iP(hone|od)/i),n.isIPad=t(/iPad/i),n.isSafari602=t(/Macintosh.*Mac OS X 10_8.*6\.0\.\d* Safari/i),n.isOSX=t(/Mac OS X/i),n.isFacebook=t(/FBAV/i);var o=n.isEdge=function(e){return i(e?new RegExp("\\sedge\\/"+e,"i"):/\sEdge\/\d+/i)},a=n.isIETrident=t(/trident\/.+rv:\s*11/i),s=n.isMSIE=function(e){return e?(e=parseFloat(e).toFixed(1),i(new RegExp("msie\\s*"+e,"i"))):i(/msie/i)};n.isChrome=function(){return i(/\s(?:Chrome|CriOS)\//i)&&!n.isEdge()},n.isIE=function(e){return e?(e=parseFloat(e).toFixed(1),e>=12?o(e):e>=11?a():s(e)):o()||a()||s()},n.isSafari=function(){return i(/safari/i)&&!i(/chrome/i)&&!i(/crios/i)&&!i(/chromium/i)&&!i(/android/i)};var l=n.isIOS=function(e){return i(e?new RegExp("iP(hone|ad|od).+\\s(OS\\s"+e+"|.*\\sVersion/"+e+")","i"):/iP(hone|ad|od)/i)};n.isAndroidNative=function(e){return u(e,!0)};var u=n.isAndroid=function(e,t){return!(t&&i(/chrome\/[123456789]/i)&&!i(/chrome\/18/))&&(e?(r(e)&&!/\./.test(e)&&(e=""+e+"."),i(new RegExp("Android\\s*"+e,"i"))):i(/Android/i))};return n.isMobile=function(){return l()||u()},n.isIframe=function(){try{return window.self!==window.top}catch(e){return!0}},n.flashVersion=function(){if(n.isAndroid())return 0;var e,t=navigator.plugins;if(t&&(e=t["Shockwave Flash"],e&&e.description))return parseFloat(e.description.replace(/\D+(\d+\.?\d*).*/,"$1"));if("undefined"!=typeof window.ActiveXObject){try{if(e=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash"))return parseFloat(e.GetVariable("$version").split(" ")[1].replace(/\s*,\s*/,"."))}catch(i){return 0}return e}return 0},n}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};i=[n(2),n(3),n(1)],r=function(e,t,n){function i(e,t,n){var i=document.createElement("param");i.setAttribute("name",t),i.setAttribute("value",n),e.appendChild(i)}function r(e,t,n){Object.defineProperty(e,t,{get:function(){return n}})}function a(a,s,c,d){var f,p=!0;if(d=d||"opaque",e.isMSIE()){var h=document.createElement("div");s.appendChild(h),h.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%" id="'+c+'" name="'+c+'" tabindex="0"><param name="movie" value="'+a+'"><param name="allowfullscreen" value="true"><param name="allowscriptaccess" value="always"><param name="wmode" value="'+d+'"><param name="bgcolor" value="'+u+'"><param name="menu" value="false"></object>';for(var g=s.getElementsByTagName("object"),v=g.length;v--;)g[v].id===c&&(f=g[v])}else f=document.createElement("object"),f.setAttribute("type","application/x-shockwave-flash"),f.setAttribute("data",a),f.setAttribute("width","100%"),f.setAttribute("height","100%"),f.setAttribute("bgcolor",u),f.setAttribute("id",c),f.setAttribute("name",c),i(f,"allowfullscreen","true"),i(f,"allowscriptaccess","always"),i(f,"wmode",d),i(f,"menu","false"),s.appendChild(f,s);f.className="jw-swf jw-reset",f.style.display="block",f.style.position="absolute",f.style.left=0,f.style.right=0,f.style.top=0,f.style.bottom=0,e.isIE()&&"PointerEvent"in window&&(f.style.pointerEvents="none");var m=-1;return r(f,"on",t.on),r(f,"once",t.once),r(f,"_eventQueue",[]),r(f,"off",function(){var e=Array.prototype.slice.call(arguments);return e.length||(f._eventQueue.length=0,clearTimeout(m)),t.off.apply(f,e)}),r(f,"trigger",function(e,n){var i=f._eventQueue;i.push({type:e,json:n}),m>-1||(m=setTimeout(function(){var e=i.length;for(m=-1;e--;){var n=i.shift();if(n.json){var r=JSON.parse(decodeURIComponent(n.json));t.trigger.call(f,n.type,r)}else t.trigger.call(f,n.type)}}))}),r(f,"_events",{}),r(f,"triggerFlash",function(t){if("setupCommandQueue"===t&&(p=!1),"setup"!==t&&p||!f.__externalCall){for(var i=f.__commandQueue,r=i.length;r--;)i[r][0]===t&&i.splice(r,1);return i.push(Array.prototype.slice.call(arguments)),f}var a=Array.prototype.slice.call(arguments,1),s=e.tryCatch(function(){if(a.length){for(var e=a.length;e--;)"object"===o(a[e])&&n.each(a[e],l);var i=JSON.stringify(a);f.__externalCall(t,i)}else f.__externalCall(t)});return s instanceof e.Error&&(console.error(t,s),"setup"===t)?(s.name="Failed to setup flash",s):f}),r(f,"__commandQueue",[]),f}function s(e){e&&e.parentNode&&(e.style.display="none",e.parentNode.removeChild(e),e=null)}function l(e,t,n){e instanceof window.HTMLElement&&delete n[t]}var u="#000000";return{embed:a,remove:s}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.requestAnimationFrame=window.requestAnimationFrame||function(e){return setTimeout(e,17)},t.cancelAnimationFrame=window.cancelAnimationFrame||clearTimeout},,,,function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(i[o]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},,,function(e,t,n){var i,r;i=[n(20),n(1)],r=function(e,t){return function(n,i){var r=["skipAd","stop","resize","addButton","removeButton","registerPlugin","attachMedia","next"];t.each(r,function(e){n[e]=function(){return i[e].apply(i,arguments),n}}),n.registerPlugin=e.registerPlugin}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1)],r=function(e){return function(t,n){var i=["buffer","controls","position","duration","fullscreen","volume","item","stretching","playbackRate","playlist","captions","viewable"];e.each(i,function(e){var i=e.slice(0,1).toUpperCase()+e.slice(1);t["get"+i]=function(){return n._model.get(e)}});var r=["getAudioTracks","getCaptionsList","getWidth","getHeight","getCurrentAudioTrack","setCurrentAudioTrack","getCurrentCaptions","setCurrentCaptions","getCurrentQuality","setCurrentQuality","getQualityLevels","getVisualQuality","getConfig","getState","getSafeRegion","isBeforeComplete","isBeforePlay","getProvider","detachMedia"],o=["setConfig","setControls","setFullscreen","setVolume","setMute","setPlaybackRate","setCues","setCaptions"];e.each(r,function(e){t[e]=function(){return n[e]?n[e].apply(n,arguments):null}}),e.each(o,function(e){t[e]=function(){return n[e].apply(n,arguments),t}}),t.getPlaylistIndex=t.getItem}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(4),n(5),n(3),n(2),n(26),n(1),n(68),n(59),n(60),n(62),n(28)],r=function(e,t,n,i,r,o,a,s,l,u,c){var d=function(d,f){var p,h=this;o.extend(this,n),this.utils=i,this._=o,this.Events=n,this.version=c,this.trigger=function(e,t){t=o.isObject(t)?o.extend({},t):{},t.type=e;var i=window.jwplayer;return i&&i.debug?n.trigger.call(h,e,t):n.triggerSafe.call(h,e,t)},this.dispatchEvent=this.trigger,this.removeEventListener=this.off.bind(this);var g=function(){p=new a(d),s(h,p),l(h,p),p.on(e.JWPLAYER_MEDIA_META,function(e){var t=p._model.get("itemMeta");o.extend(t,e.metadata)}),p.on(e.JWPLAYER_READY,function(e){v.tick("ready"),e.setupTime=v.between("setup","ready")}),p.on("all",h.trigger)};g(),u(this),this.id=d.id;var v=this._qoe=new r;v.tick("init");var m=function(){h.off(),p&&p.off(),p&&p.playerDestroy&&p.playerDestroy()};return this.getPlugin=function(e){return h.plugins&&h.plugins[e]},this.addPlugin=function(e,t){this.plugins=this.plugins||{},this.plugins[e]=t,this.onReady(t.addToPlayer),t.resize&&this.onResize(t.resizeHandler)},this.setup=function(e){return v.tick("setup"),m(),g(),i.foreach(e.events,function(e,t){var n=h[e];"function"==typeof n&&n.call(h,t)}),e.id=h.id,p.setup(e,this),h},this.qoe=function(){var e=p.getItemQoe(),t=v.between("setup","ready"),n=e.getFirstFrame();return{setupTime:t,firstFrame:n,player:v.dump(),item:e.dump()}},this.getContainer=function(){return p.getContainer?p.getContainer():d},this.getMeta=this.getItemMeta=function(){return p._model.get("itemMeta")||{}},this.getPlaylistItem=function(e){if(!i.exists(e))return p._model.get("playlistItem");var t=h.getPlaylist();return t?t[e]:null},this.getRenderingMode=function(){return"html5"},this.getMute=function(){return p._model.getMute()},this.load=function(e,t){return p.load(e,t),h},this.play=function(e,n){if(o.isObject(e)&&e.reason&&(n=e),n||(n={reason:"external"}),e===!0)return p.play(n),h;if(e===!1)return p.pause(n),h;switch(e=h.getState()){case t.PLAYING:case t.BUFFERING:p.pause(n);break;default:p.play(n)}return h},this.pause=function(e,t){return o.isBoolean(e)?this.play(!e,t):this.play(t)},this.seek=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{reason:"external"};return p.seek(e,t),h},this.playlistNext=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{reason:"external"};return p.playlistNext(e),h},this.playlistPrev=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{reason:"external"};return p.playlistPrev(e),h},this.playlistItem=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{reason:"external"};return p.playlistItem(e,t),h},this.createInstream=function(){return p.createInstream();
},this.castToggle=function(){p&&p.castToggle&&p.castToggle()},this.playAd=this.pauseAd=i.noop,this.remove=function(){return f(h),h.trigger("remove"),m(),h},this};return d}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1),n(4)],r=function(e,t){return function(n){var i={onBufferChange:t.JWPLAYER_MEDIA_BUFFER,onBufferFull:t.JWPLAYER_MEDIA_BUFFER_FULL,onError:t.JWPLAYER_ERROR,onSetupError:t.JWPLAYER_SETUP_ERROR,onFullscreen:t.JWPLAYER_FULLSCREEN,onMeta:t.JWPLAYER_MEDIA_META,onMute:t.JWPLAYER_MEDIA_MUTE,onPlaylist:t.JWPLAYER_PLAYLIST_LOADED,onPlaylistItem:t.JWPLAYER_PLAYLIST_ITEM,onPlaylistComplete:t.JWPLAYER_PLAYLIST_COMPLETE,onReady:t.JWPLAYER_READY,onResize:t.JWPLAYER_RESIZE,onComplete:t.JWPLAYER_MEDIA_COMPLETE,onSeek:t.JWPLAYER_MEDIA_SEEK,onTime:t.JWPLAYER_MEDIA_TIME,onVolume:t.JWPLAYER_MEDIA_VOLUME,onBeforePlay:t.JWPLAYER_MEDIA_BEFOREPLAY,onBeforeComplete:t.JWPLAYER_MEDIA_BEFORECOMPLETE,onDisplayClick:t.JWPLAYER_DISPLAY_CLICK,onControls:t.JWPLAYER_CONTROLS,onQualityLevels:t.JWPLAYER_MEDIA_LEVELS,onQualityChange:t.JWPLAYER_MEDIA_LEVEL_CHANGED,onCaptionsList:t.JWPLAYER_CAPTIONS_LIST,onCaptionsChange:t.JWPLAYER_CAPTIONS_CHANGED,onAdError:t.JWPLAYER_AD_ERROR,onAdClick:t.JWPLAYER_AD_CLICK,onAdImpression:t.JWPLAYER_AD_IMPRESSION,onAdTime:t.JWPLAYER_AD_TIME,onAdComplete:t.JWPLAYER_AD_COMPLETE,onAdCompanions:t.JWPLAYER_AD_COMPANIONS,onAdSkipped:t.JWPLAYER_AD_SKIPPED,onAdPlay:t.JWPLAYER_AD_PLAY,onAdPause:t.JWPLAYER_AD_PAUSE,onAdMeta:t.JWPLAYER_AD_META,onCast:t.JWPLAYER_CAST_SESSION,onAudioTrackChange:t.JWPLAYER_AUDIO_TRACK_CHANGED,onAudioTracks:t.JWPLAYER_AUDIO_TRACKS},r={onBuffer:"buffer",onPause:"pause",onPlay:"play",onIdle:"idle"};e.each(r,function(t,i){n[i]=e.partial(n.on,t,e)}),e.each(i,function(t,i){n[i]=e.partial(n.on,t,e)})}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(2),n(1)],r=function(e,t){function i(n){t.each(n,function(t,i){n[i]=e.serialize(t)})}function r(e){return e.slice&&"px"===e.slice(-2)&&(e=e.slice(0,-2)),e}function o(t,n){if(n.toString().indexOf("%")===-1)return 0;if("string"!=typeof t||!e.exists(t))return 0;if(/^\d*\.?\d+%$/.test(t))return t;var i=t.indexOf(":");if(i===-1)return 0;var r=parseFloat(t.substr(0,i)),o=parseFloat(t.substr(i+1));return r<=0||o<=0?0:o/r*100+"%"}var a={autostart:!1,controls:!0,displaytitle:!0,displaydescription:!0,mobilecontrols:!1,defaultPlaybackRate:1,playbackRateControls:!1,repeat:!1,castAvailable:!1,skin:"seven",stretching:"uniform",mute:!1,volume:90,width:480,height:270,audioMode:!1,localization:{player:"Video Player",play:"Play",playback:"Start playback",pause:"Pause",volume:"Volume",prev:"Previous",next:"Next",cast:"Chromecast",airplay:"Airplay",fullscreen:"Fullscreen",playlist:"Playlist",hd:"Quality",cc:"Closed captions",audioTracks:"Audio tracks",playbackRates:"Playback rates",replay:"Replay",buffer:"Loading",more:"More",liveBroadcast:"Live broadcast",loadingAd:"Loading ad",rewind:"Rewind 10s",nextUp:"Next Up",nextUpClose:"Next Up Close",related:"Discover",close:"Close"},renderCaptionsNatively:!0,nextUpDisplay:!0},s=function(s,l){var u=l&&l.getAllItems(),c=t.extend({},(window.jwplayer||{}).defaults,u,s);i(c),c.localization=t.extend({},a.localization,c.localization);var d=t.extend({},a,c);"."===d.base&&(d.base=e.getScriptPath("jwplayer.js")),d.base=(d.base||e.loadFrom()).replace(/\/?$/,"/"),n.p=d.base,d.width=r(d.width),d.height=r(d.height);var f=e.getScriptPath("jwplayer.js")||d.base;d.flashplayer=d.flashplayer||f+"jwplayer.flash.swf",d.flashloader=d.flashloader||f+"jwplayer.loader.swf","http:"===window.location.protocol&&(d.flashplayer=d.flashplayer.replace("https","http"),d.flashloader=d.flashloader.replace("https","http")),d.aspectratio=o(d.aspectratio,d.width),t.isObject(d.skin)&&(d.skinUrl=d.skin.url,d.skinColorInactive=d.skin.inactive,d.skinColorActive=d.skin.active,d.skinColorBackground=d.skin.background,d.skin=t.isString(d.skin.name)?d.skin.name:a.skin),t.isString(d.skin)&&d.skin.indexOf(".xml")>0&&(console.warn("JW Player does not support XML skins, please update your config"),d.skin=d.skin.replace(".xml",""));var p=d.playbackRateControls;if(p){var h=[.5,1,1.25,1.5,2];t.isArray(p)&&(h=p.filter(function(e){return t.isNumber(e)&&e>=.25&&e<=4}).map(function(e){return Math.round(4*e)/4}),h.indexOf(1)<0&&h.push(1),h.sort()),d.playbackRateControls=h}(!d.playbackRateControls||d.playbackRateControls.indexOf(d.defaultPlaybackRate)<0)&&(d.defaultPlaybackRate=1),d.playbackRate=d.defaultPlaybackRate,d.aspectratio||delete d.aspectratio;var g=d.playlist;if(g)t.isArray(g.playlist)&&(d.feedData=g,d.playlist=g.playlist);else{var v=t.pick(d,["title","description","type","mediaid","image","file","sources","tracks","preload"]);d.playlist=[v]}return d.qualityLabels=d.qualityLabels||d.hlslabels,d};return s}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(61),n(1),n(22),n(46),n(20)],r=function(e,t,n,i,r){var o=[],a=0,s=function(t){var n,i;return t?"string"==typeof t?(n=l(t),n||(i=document.getElementById(t))):"number"==typeof t?n=o[t]:t.nodeType&&(i=t,n=l(i.id)):n=o[0],n?n:i?u(new e(i,c)):{registerPlugin:r.registerPlugin}},l=function(e){for(var t=0;t<o.length;t++)if(o[t].id===e)return o[t];return null},u=function(e){return a++,e.uniqueId=a,o.push(e),e},c=function(e){for(var t=o.length;t--;)if(o[t].uniqueId===e.uniqueId){o.splice(t,1);break}},d={selectPlayer:s,registerProvider:n.registerProvider,availableProviders:i,registerPlugin:r.registerPlugin};return s.api=d,d}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){"use strict";function i(e,t,n){e.setAutoStart(n),"idle"===e.get("state")&&n===!0&&t.play({reason:"autostart"})}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=["repeat","volume","mute","autostart"];t["default"]=function(e,t){var n=e._model;r.size(t)&&o.forEach(function(o){var a=t[o];if(!r.isUndefined(a))switch(o){case"mute":e.setMute(a);break;case"volume":e.setVolume(a);break;case"autostart":i(n,e,a);break;default:n.set(o,a)}})}},function(e,t,n){var i,r;i=[n(74),n(3),n(1),n(4)],r=function(e,t,n,i){var r=function(t,r,o,a){function s(){f("Setup Timeout Error","Setup took longer than "+v+" seconds to complete.")}function l(){for(var e in g)if(Object.prototype.hasOwnProperty.call(g,e)){var n=g[e];!n.complete&&!n.running&&t&&c(n.depends)&&(n.running=!0,u(n))}}function u(e){var n=function(t){t=t||{},d(e,t)};e.method(n,r,t,o,a)}function c(e){return n.all(e,function(e){return g[e].complete})}function d(e,t){"error"===t.type?f(t.msg,t.reason):"complete"===t.type?(clearTimeout(p),h.trigger(i.JWPLAYER_READY)):(e.complete=!0,l())}function f(e,t){clearTimeout(p),h.trigger(i.JWPLAYER_SETUP_ERROR,{message:e+": "+t}),h.destroy()}var p,h=this,g=e.getQueue(),v=30;this.start=function(){p=setTimeout(s,1e3*v),l()},this.destroy=function(){clearTimeout(p),this.off(),g.length=0,t=null,r=null,o=null}};return r.prototype=t,r}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(2),n(17),n(16)],r=function(e,t,n){var i=function(i){function r(e){if(e.tracks.length){for(var t=e.tracks||[],n=0;n<t.length;n++)d(t[n]);g=Object.keys(v).map(function(e){return v[e]});var i=f();p(),this.setCaptionsList(i)}}function o(){g=[],v={},m=0}function a(e){o(i,e);var n=e.tracks,r=n&&n.length;if(!i.get("renderCaptionsNatively")&&r){var a,c;for(a=0;a<r;a++)c=n[a],s(c.kind)&&!v[c._id]&&(d(c),t.loadFile(c,l.bind(null,c),u))}var h=f();p(),this.setCaptionsList(h)}function s(e){return"subtitles"===e||"captions"===e}function l(e,t){e.data=t}function u(t){e.log("CAPTIONS("+t+")")}function c(e,t){var n=null;0!==t&&(n=g[t-1]),e.set("captionsTrack",n)}function d(e){if(e.data=e.data||[],e.name=e.label||e.name||e.language,e._id=n.createId(e,g.length),!e.name){var t=n.createLabel(e,m);e.name=t.label,m=t.unknownCount}v[e._id]=e,g.push(e)}function f(){for(var e=[{id:"off",label:"Off"}],t=0;t<g.length;t++)e.push({id:g[t]._id,label:g[t].name||"Unknown CC"});return e}function p(){var e=0,t=i.get("captionLabel");if("Off"===t)return void i.set("captionsIndex",0);for(var n=0;n<g.length;n++){var r=g[n];if(t&&t===r.name){e=n+1;break}r["default"]||r.defaulttrack||"default"===r._id?e=n+1:r.autoselect}h(e)}function h(e){g.length?i.setVideoSubtitleTrack(e,g):i.set("captionsIndex",e)}i.on("change:playlistItem",o,this),i.on("change:captionsIndex",c,this),i.on("itemReady",a,this),i.mediaController.on("subtitlesTracks",r,this);var g=[],v={},m=0;this.getCurrentIndex=function(){return i.get("captionsIndex")},this.getCaptionsList=function(){return i.get("captionsList")},this.setCaptionsList=function(e){i.set("captionsList",e)}};return i}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){function i(e){return e&&e.__esModule?e:{"default":e}}var r,o,a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=n(65),l=i(s);r=[n(63),n(70),n(1),n(66),n(67),n(15),n(75),n(81),n(37),n(2),n(129),n(3),n(18),n(5),n(4),n(118),n(69)],o=function(e,t,n,i,r,o,s,u,c,d,f,p,h,g,v,m,y){function w(e){return function(){var t=Array.prototype.slice.call(arguments,0);this._model.getVideo()?this["_"+e].apply(this,t):this.eventsQueue.push([e,t])}}function E(e){return e===g.LOADING||e===g.STALLED?g.BUFFERING:e}var b=function(e){this.originalContainer=this.currentContainer=e,this.eventsQueue=[],n.extend(this,p),this._model=new o};return b.prototype={play:w("play"),pause:w("pause"),seek:w("seek"),stop:w("stop"),load:w("load"),playlistNext:w("next"),playlistPrev:w("prev"),playlistItem:w("item"),setCurrentCaptions:w("setCurrentCaptions"),setCurrentQuality:w("setCurrentQuality"),setFullscreen:w("setFullscreen"),setup:function(o,m){function w(e,t){Ee.triggerAfterReady(e,t)}function b(e,t){Ee.trigger(v.JWPLAYER_CONTROLS,{controls:t})}function A(){he=null,fe.on("all",w,Ee);var e=m.getPlugin("related");e&&e.on("nextUp",function(e){me.set("nextUp",e)}),fe.once(v.JWPLAYER_RESIZE,L),fe.init()}function L(){me.change("visibility",C),me.on("change:controls",b),Ee.trigger(v.JWPLAYER_READY,{setupTime:0}),Ee.triggerAfterReady=Ee.trigger;for(var e=0;e<Pe.length;e++){var t=Pe[e];ye=t.type===v.JWPLAYER_MEDIA_BEFOREPLAY,Ee.trigger(t.type,t.args),ye=!1}P(),me.change("viewable",j),me.change("viewable",x),me.once("change:autostartFailed change:autostartMuted change:mute",function(e){e.off("change:viewable",x)})}function C(e,t){n.isUndefined(t)||me.set("viewable",Math.round(t))}function P(){d.isMobile()||me.get("autostart")!==!0||W()}function k(){R(),be={bail:!1},me.once("itemReady",_,be)}function R(){be.bail=!0,me.off("itemReady",_)}function _(){var e=this;Promise.resolve().then(function(){var t=e;t.bail||P()})}function j(e,t){Ee.trigger("viewable",{viewable:t})}function x(e,t){me.get("playOnViewable")&&(t?W():d.isMobile()&&Ee.pause({reason:"autostart"}))}function T(e){var t=me.getProviders(),n=t.required(e,me.get("primary"));return t.load(n).then(function(){Ee.getProvider()||(me.setProvider(me.get("playlistItem")),I())})}function I(){for(;Ee.eventsQueue.length>0;){var e=Ee.eventsQueue.shift(),t=e[0],n=e[1]||[];Ee["_"+t].apply(Ee,n)}}function S(e,t){switch(me.get("state")===g.ERROR&&me.set("state",g.IDLE),me.set("preInstreamState","instream-idle"),Ee.trigger("destroyPlugin",{}),J(!0),k(),F(),"undefined"==typeof e?"undefined":a(e)){case"string":M(e);break;case"object":var n=z(e,t);n&&G(0);break;case"number":G(e)}}function M(e){var t=new c;t.on(v.JWPLAYER_PLAYLIST_LOADED,function(e){S(e.playlist,e)}),t.on(v.JWPLAYER_ERROR,function(e){e.message="Error loading playlist: "+e.message,Ee.triggerError(e)},Ee),t.load(e)}function O(){return Ee._instreamAdapter&&Ee._instreamAdapter.getState()}function D(){var e=O();return n.isString(e)?e:me.get("state")}function N(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(R(),me.set("playReason",e.reason),me.get("state")!==g.ERROR){var t=O();if(n.isString(t))return void m.pauseAd(!1);if(me.get("state")===g.COMPLETE&&(J(!0),G(0)),!ye&&(ye=!0,Ee.triggerAfterReady(v.JWPLAYER_MEDIA_BEFOREPLAY,{playReason:me.get("playReason")}),ye=!1,ve))return ve=!1,void(ge=null);var i;if(V()){if(0===me.get("playlist").length)return;i=d.tryCatch(function(){me.loadVideo()})}else me.get("state")===g.PAUSED&&(i=d.tryCatch(function(){me.playVideo()}));i instanceof d.Error&&(Ee.triggerError(i),ge=null)}}function Y(e){return e&&/^(?:mouse|pointer|touch|gesture|click|key)/.test(e.type)}function F(){if(Y(window.event)){var e=Ee.currentContainer.querySelector("video, audio");e&&V()&&e.load()}}function W(){var e=me.get("state");e!==g.IDLE&&e!==g.PAUSED||N({reason:"autostart"})}function J(e){R();var t=!e;ge=null;var n=d.tryCatch(function(){me.stopVideo()},Ee);return n instanceof d.Error?(Ee.triggerError(n),!1):(t&&(we=!0),ye&&(ve=!0),!0)}function B(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};ge=null,me.set("pauseReason",e.reason),"interaction"!==e.reason&&"external"!==e.reason||me.set("playOnViewable",!1);var t=O();if(n.isString(t))return void m.pauseAd(!0);switch(me.get("state")){case g.ERROR:return;case g.PLAYING:case g.BUFFERING:var i=d.tryCatch(function(){Ae().pause()},this);if(i instanceof d.Error)return void Ee.triggerError(i);break;default:ye&&(ve=!0)}}function V(){var e=me.get("state");return e===g.IDLE||e===g.COMPLETE||e===g.ERROR}function U(e,t){me.get("state")!==g.ERROR&&(me.get("scrubbing")||me.get("state")===g.PLAYING||N(t),Ae().seek(e))}function H(e,t){J(!0),me.get("state")===g.ERROR&&me.set("state",g.IDLE),G(e),N(t)}function z(e,t){me.set("feedData",t);var i=u(e);return i=u.filterPlaylist(i,me,t),me.set("playlist",i),n.isArray(i)&&0!==i.length?(T(i),!0):(Ee.triggerError({message:"Error loading playlist: No playable sources found"}),!1)}function G(e){me.setItemIndex(e)}function q(e){H(me.get("item")-1,e)}function Q(e){H(me.get("item")+1,e)}function X(){if(V()){if(we)return void(we=!1);ge=X;var e=me.get("item");return e===me.get("playlist").length-1?void(me.get("repeat")?Q({reason:"repeat"}):(d.isIOS()&&ce(!1),me.set("playOnViewable",!1),me.set("state",g.COMPLETE),Ee.trigger(v.JWPLAYER_PLAYLIST_COMPLETE,{}))):void Q({reason:"playlist"})}}function K(e){Ae()&&(e=parseInt(e,10)||0,Ae().setCurrentQuality(e))}function $(){return Ae()?Ae().getCurrentQuality():-1}function Z(){return this._model?this._model.getConfiguration():void 0}function ee(){if(this._model.mediaModel)return this._model.mediaModel.get("visualQuality");var e=te();if(e){var t=$(),i=e[t];if(i)return{level:n.extend({index:t},i),mode:"",reason:""}}return null}function te(){return Ae()?Ae().getQualityLevels():null}function ne(e){Ae()&&(e=parseInt(e,10)||0,Ae().setCurrentAudioTrack(e))}function ie(){return Ae()?Ae().getCurrentAudioTrack():-1}function re(){return Ae()?Ae().getAudioTracks():null}function oe(e){e=parseInt(e,10)||0,me.persistVideoSubtitleTrack(e),Ee.trigger(v.JWPLAYER_CAPTIONS_CHANGED,{tracks:se(),track:e})}function ae(){return pe.getCurrentIndex()}function se(){return pe.getCaptionsList()}function le(){return me.detachMedia()}function ue(){var e=d.tryCatch(function(){me.attachMedia()});return e instanceof d.Error?void d.log("Error calling _attachMedia",e):void("function"==typeof ge&&ge())}function ce(e){n.isBoolean(e)||(e=!me.get("fullscreen")),me.set("fullscreen",e),this._instreamAdapter&&this._instreamAdapter._adModel&&this._instreamAdapter._adModel.set("fullscreen",e)}function de(){var e=m.getPlugin("related");if(e){var t=me.get("nextUp");t&&Ee.trigger("nextClick",{mode:t.mode,ui:"nextup",target:t,itemsShown:[t],feedData:t.feedData}),e.next()}}var fe,pe,he,ge,ve,me=this._model,ye=!1,we=!1,Ee=this,be={},Ae=function(){return me.getVideo()},Le=new s;Le.track(me);var Ce=new e(o,Le),Pe=[];me.setup(Ce,Le),fe=this._view=new f(m,me),he=new i(m,me,fe,z),he.on(v.JWPLAYER_READY,A,this),he.on(v.JWPLAYER_SETUP_ERROR,this.setupError,this),me.mediaController.on("all",w,this),me.mediaController.on(v.JWPLAYER_MEDIA_COMPLETE,function(){n.defer(X)}),me.mediaController.on(v.JWPLAYER_MEDIA_ERROR,this.triggerError,this),me.on("change:flashBlocked",function(e,t){if(!t)return void this._model.set("errorEvent",void 0);var n=!!e.get("flashThrottle"),i={message:n?"Click to run Flash":"Flash plugin failed to load"};n||this.trigger(v.JWPLAYER_ERROR,i),this._model.set("errorEvent",i)},this),me.on("change:state",h,this),me.on("change:duration",function(e,t){var n=e.get("minDvrWindow"),i=d.streamType(t,n);e.setStreamType(i)}),me.on("change:castState",function(e,t){Ee.trigger(v.JWPLAYER_CAST_SESSION,t)}),me.on("change:fullscreen",function(e,t){Ee.trigger(v.JWPLAYER_FULLSCREEN,{fullscreen:t}),t&&e.set("playOnViewable",!1)}),me.on("itemReady",function(){Ee.triggerAfterReady(v.JWPLAYER_PLAYLIST_ITEM,{index:me.get("item"),item:me.get("playlistItem")})}),me.on("change:playlist",function(e,t){if(t.length){var i={playlist:t},r=me.get("feedData");if(r){var o=n.extend({},r);delete o.playlist,i.feedData=o}Ee.triggerAfterReady(v.JWPLAYER_PLAYLIST_LOADED,i)}}),me.on("change:volume",function(e,t){Ee.trigger(v.JWPLAYER_MEDIA_VOLUME,{volume:t})}),me.on("change:mute",function(e,t){Ee.trigger(v.JWPLAYER_MEDIA_MUTE,{mute:t})}),me.on("change:playbackRate",function(e,t){Ee.trigger(v.JWPLAYER_PLAYBACK_RATE_CHANGED,{playbackRate:t,position:e.get("position")})}),me.on("change:scrubbing",function(e,t){t?B():N({reason:"interaction"})}),me.on("change:captionsList",function(e,t){Ee.triggerAfterReady(v.JWPLAYER_CAPTIONS_LIST,{tracks:t,track:me.get("captionsIndex")||0})}),me.on("change:mediaModel",function(e){e.mediaModel.on("change:state",function(t,n){e.set("state",E(n))})}),pe=new r(me),me.on("change:viewSetup",function(e,t){if(t){var n=this.currentContainer.querySelector("video, audio");if(Ee.showView(fe.element()),n){var i=me.get("mediaContainer");i.appendChild(n)}}},this),this.triggerAfterReady=function(e,t){Pe.push({type:e,args:t})},this._play=N,this._pause=B,this._seek=U,this._stop=J,this._load=S,this._next=Q,this._prev=q,this._item=H,this._setCurrentCaptions=oe,this._setCurrentQuality=K,this._setFullscreen=ce,this.detachMedia=le,this.attachMedia=ue,this.getCurrentQuality=$,this.getQualityLevels=te,this.setCurrentAudioTrack=ne,this.getCurrentAudioTrack=ie,this.getAudioTracks=re,this.getCurrentCaptions=ae,this.getCaptionsList=se,this.getVisualQuality=ee,this.getConfig=Z,this.getState=D,this.setVolume=me.setVolume.bind(me),this.setMute=me.setMute.bind(me),this.setPlaybackRate=me.setPlaybackRate.bind(me),this.getProvider=function(){return me.get("provider")},this.getWidth=function(){return me.get("containerWidth")},this.getHeight=function(){return me.get("containerHeight")},this.getContainer=function(){return this.currentContainer},this.resize=fe.resize,this.getSafeRegion=fe.getSafeRegion,this.setCues=fe.addCues,this.setCaptions=fe.setCaptions,this.next=de,this.setConfig=function(e){return(0,l["default"])(Ee,e)},this.addButton=function(e,t,i,r,o){var a={img:e,tooltip:t,callback:i,id:r,btnClass:o},s=!1,l=n.map(me.get("dock"),function(e){var t=e!==a&&e.id===a.id;return t?(s=!0,a):e});s||l.push(a),me.set("dock",l)},this.removeButton=function(e){var t=me.get("dock")||[];t=n.reject(t,n.matches({id:e})),me.set("dock",t)},this.checkBeforePlay=function(){return ye},this.getItemQoe=function(){return me._qoeItem},this.setControls=function(e){n.isBoolean(e)||(e=!me.get("controls")),me.set("controls",e);var t=me.getVideo();t&&t.setControls(e)},this.playerDestroy=function(){this.stop(),this.showView(this.originalContainer),fe&&fe.destroy(),me&&me.destroy(),he&&(he.destroy(),he=null)},this.isBeforePlay=this.checkBeforePlay,this.isBeforeComplete=function(){return me.checkComplete()},this.createInstream=function(){return this.instreamDestroy(),F(),this._instreamAdapter=new t(this,me,fe),this._instreamAdapter},this.skipAd=function(){this._instreamAdapter&&this._instreamAdapter.skipAd()},this.instreamDestroy=function(){Ee._instreamAdapter&&Ee._instreamAdapter.destroy()},this.trigger=function(e,t){var n=y(me,e,t);return p.trigger.call(this,e,n)},he.start()},showView:function(e){if(!document.body.contains(this.currentContainer)){var t=document.getElementById(this._model.get("id"));t&&(this.currentContainer=t)}this.currentContainer.parentElement&&this.currentContainer.parentElement.replaceChild(e,this.currentContainer),this.currentContainer=e},triggerError:function(e){this._model.set("errorEvent",e),this._model.set("state",g.ERROR),this._model.once("change:state",function(){this._model.set("errorEvent",void 0)},this),this.trigger(v.JWPLAYER_ERROR,e)},setupError:function(e){var t=e.message,i=d.createElement(m(this._model.get("id"),this._model.get("skin"),t)),r=this._model.get("width"),o=this._model.get("height");d.style(i,{width:r.toString().indexOf("%")>0?r:r+"px",height:o.toString().indexOf("%")>0?o:o+"px"}),this.showView(i);var a=this;n.defer(function(){a.trigger(v.JWPLAYER_SETUP_ERROR,{message:t})})}},b}.apply(t,r),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,r;i=[n(1),n(4)],r=function(e,t){return function(n,i,r){var o=r;switch(i){case t.JWPLAYER_MEDIA_TIME:case"beforePlay":case"pause":case"play":case"ready":var a=n.get("viewable");e.isUndefined(a)||(o=e.extend({},r,{viewable:a}))}return o}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(72),n(71),n(4),n(5),n(2),n(3),n(1)],r=function(e,t,n,i,r,o,a){function s(n){var i="",r=n.get("provider");return r&&(i=r.name),i.indexOf("flash")>=0?t:e}var l={skipoffset:null,tag:null},u=function(e,o,u){function c(){E._adModel.set("state","buffering"),o.set("skipButton",!1),b++;var e,t=h[b];g&&(e=g[b]),L.loadItem(t,e)}function d(e,t){"complete"!==e&&(t=t||{},A.tag&&!t.tag&&(t.tag=A.tag),this.trigger(e,t),"mediaError"!==e&&"error"!==e||h&&b+1<h.length&&c())}function f(e){E._adModel.set("duration",e.duration),E._adModel.set("position",e.position)}function p(e){var t={};A.tag&&(t.tag=A.tag),this.trigger(n.JWPLAYER_MEDIA_COMPLETE,t),k.call(this,e)}var h,g,v,m,y,w=s(o),E=new w(e,o),b=0,A={},L=this,C=a.bind(function(e){e=e||{},e.hasControls=!!o.get("controls"),this.trigger(n.JWPLAYER_INSTREAM_CLICK,e),E&&E._adModel&&(E._adModel.get("state")===i.PAUSED?e.hasControls&&E.instreamPlay():E.instreamPause())},this),P=a.bind(function(){E&&E._adModel&&E._adModel.get("state")===i.PAUSED&&o.get("controls")&&(e.setFullscreen(),e.play())},this);this.type="instream",this.init=function(t){v=o.getVideo(),m=o.get("position"),y=o.get("playlist")[o.get("item")],v.setPlaybackRate(1),E.on("all",d,this),E.on(n.JWPLAYER_MEDIA_TIME,f,this),E.on(n.JWPLAYER_MEDIA_COMPLETE,p,this),E.init(),e.detachMedia(),o.mediaModel.set("state",i.BUFFERING),e.checkBeforePlay()||0===m&&!o.checkComplete()?(m=0,o.set("preInstreamState","instream-preroll")):v&&o.checkComplete()||o.get("state")===i.COMPLETE?o.set("preInstreamState","instream-postroll"):o.set("preInstreamState","instream-midroll");var a=o.get("state");return t||a!==i.PLAYING&&a!==i.BUFFERING||v.pause(),u.setupInstream(E._adModel),E._adModel.set("state",i.BUFFERING),u.clickHandler()&&u.clickHandler().setAlternateClickHandlers(r.noop,null),this.setText(o.get("localization").loadingAd),this};var k=function(e){h&&b+1<h.length?c():(this.trigger("adBreakEnd",{}),e.type===n.JWPLAYER_MEDIA_COMPLETE&&this.trigger(n.JWPLAYER_PLAYLIST_COMPLETE,{}),this.destroy())};this.loadItem=function(e,s){if(r.isAndroid(2.3))return void this.trigger({type:n.JWPLAYER_ERROR,message:"Error loading instream: Cannot play instream on Android 2.3"});var u=e;a.isArray(e)?(h=e,g=s,e=h[b],g&&(s=g[b])):u=[e];var c=o.getProviders(),d=w===t?"flash":void 0,f=c.required(u,d);o.set("hideAdsControls",!1),E._adModel.set("state",i.BUFFERING),c.load(f).then(function(){if(null!==E){L.trigger(n.JWPLAYER_PLAYLIST_ITEM,{index:b,item:e}),A=a.extend({},l,s),E.load(e),L.addClickHandler();var t=e.skipoffset||A.skipoffset;t&&L.setupSkipButton(t,A)}})},this.setupSkipButton=function(e,t,n){o.set("skipButton",!1),n&&(k=n),E._adModel.set("skipMessage",t.skipMessage),E._adModel.set("skipText",t.skipText),E._adModel.set("skipOffset",e),o.set("skipButton",!0)},this.applyProviderListeners=function(e){E.applyProviderListeners(e),this.addClickHandler()},this.play=function(){E.instreamPlay()},this.pause=function(){E.instreamPause()},this.addClickHandler=function(){u.clickHandler()&&u.clickHandler().setAlternateClickHandlers(C,P),E.on(n.JWPLAYER_MEDIA_META,this.metaHandler,this)},this.skipAd=function(e){var t=n.JWPLAYER_AD_SKIPPED;this.trigger(t,e),k.call(this,{type:t})},this.metaHandler=function(e){e.width&&e.height&&u.resizeMedia()},this.destroy=function(){if(this.off(),o.set("skipButton",!1),E){u.clickHandler()&&u.clickHandler().revertAlternateClickHandlers(),o.off(null,null,E),E.off(null,null,L),E.instreamDestroy(),u.destroyInstream(),E=null,e.attachMedia();var t=o.get("preInstreamState");switch(t){case"instream-preroll":case"instream-midroll":r.isMobile()&&o.mediaModel.get("state")===i.BUFFERING&&v.setState(i.BUFFERING);var n=a.extend({},y);n.starttime=m,o.loadVideo(n);break;case"instream-postroll":case"instream-idle":v.stop()}}},this.getState=function(){return!(!E||!E._adModel)&&E._adModel.get("state")},this.setText=function(e){u.setAltText(e?e:"")},this.hide=function(){o.set("hideAdsControls",!0)}};return a.extend(u.prototype,o),u}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(3),n(15),n(18),n(4),n(5),n(2),n(1)],r=function(e,t,n,i,r,o,a){var s=function(e,i){this.model=i,this._adModel=(new t).setup({id:i.get("id"),volume:i.get("volume"),fullscreen:i.get("fullscreen"),mute:i.get("mute")}),this._adModel.on("change:state",n,this);var r=e.getContainer();this.swf=r.querySelector("object")};return s.prototype=a.extend({init:function(){if(o.isChrome()){var e=-1,t=!1;this.swf.on("throttle",function(n){if(clearTimeout(e),"resume"===n.state)t&&(t=!1,this.instreamPlay());else{var i=this;e=setTimeout(function(){i._adModel.get("state")===r.PLAYING&&(t=!0,i.instreamPause())},250)}},this)}this.swf.on("instream:state",this.stateHandler,this).on("instream:time",function(e){this._adModel.set("position",e.position),this._adModel.set("duration",e.duration),this.trigger(i.JWPLAYER_MEDIA_TIME,e)},this).on("instream:complete",function(e){this.trigger(i.JWPLAYER_MEDIA_COMPLETE,e)},this).on("instream:error",function(e){this.trigger(i.JWPLAYER_MEDIA_ERROR,e)},this),this.swf.triggerFlash("instream:init"),this.applyProviderListeners=function(e){e&&(this.model.on("change:volume",function(t,n){e.volume(n)},this),this.model.on("change:mute",function(t,n){e.mute(n)},this),e.volume(this.model.get("volume")),e.mute(this.model.get("mute")),e.off(),e.on(i.JWPLAYER_PLAYER_STATE,this.stateHandler,this),e.on(i.JWPLAYER_MEDIA_TIME,function(e){this.trigger(i.JWPLAYER_MEDIA_TIME,e)},this))}},stateHandler:function(e){switch(e.newstate){case r.PLAYING:case r.PAUSED:this._adModel.set("state",e.newstate)}},instreamDestroy:function(){this._adModel&&(this.off(),this.swf.off(null,null,this),this.swf.triggerFlash("instream:destroy"),this.swf=null,this._adModel.off(),this._adModel=null,this.model=null)},load:function(e){this.swf.triggerFlash("instream:load",e)},instreamPlay:function(){this.swf.triggerFlash("instream:play")},instreamPause:function(){this.swf.triggerFlash("instream:pause")}},e),s}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1),n(3),n(18),n(4),n(5),n(15)],r=function(e,t,n,i,r,o){var a=function(a,s){function l(t){var r=t||f.getVideo();if(p!==r){if(p=r,!r)return;var o="vpaid"===r.type;r.off(),r.on("all",function(t,n){o&&t===i.JWPLAYER_MEDIA_COMPLETE||this.trigger(t,e.extend({},n,{type:t}))},h),r.on(i.JWPLAYER_MEDIA_BUFFER_FULL,d),r.on(i.JWPLAYER_PLAYER_STATE,u),r.attachMedia(),r.volume(s.get("volume")),r.mute(s.get("mute")||s.get("autostartMuted")),f.on("change:state",n,h)}}function u(e){switch(e.newstate){case r.PLAYING:case r.PAUSED:f.set("state",e.newstate)}}function c(e){s.trigger(e.type,e),h.trigger(i.JWPLAYER_FULLSCREEN,{fullscreen:e.jwstate})}function d(){f.getVideo().play()}var f,p,h=e.extend(this,t);return a.on(i.JWPLAYER_FULLSCREEN,function(e){this.trigger(i.JWPLAYER_FULLSCREEN,e)},h),this.init=function(){f=(new o).setup({id:s.get("id"),volume:s.get("volume"),fullscreen:s.get("fullscreen"),mute:s.get("mute")||s.get("autostartMuted"),instreamMode:!0}),f.on("fullscreenchange",c),this._adModel=f},h.load=function(e){f.set("item",0),f.set("playlistItem",e),f.setActiveItem(e),l(),f.off(i.JWPLAYER_ERROR),f.on(i.JWPLAYER_ERROR,function(e){this.trigger(i.JWPLAYER_ERROR,e)},h),f.loadVideo(e)},h.applyProviderListeners=function(e){l(e),e&&(e.off(i.JWPLAYER_ERROR),e.on(i.JWPLAYER_ERROR,function(e){this.trigger(i.JWPLAYER_ERROR,e)},h),s.on("change:volume",function(e,t){p.volume(t)},h),s.on("change:mute",function(e,t){p.mute(t)},h),s.on("change:autostartMuted",function(e,t){t||p.mute(s.get("mute"))},h))},this.instreamDestroy=function(){f&&(f.off(),this.off(),p&&(p.detachMedia(),p.off(),f.getVideo()&&p.destroy()),f=null,a.off(null,null,this),a=null)},h.instreamPlay=function(){f.getVideo()&&f.getVideo().play(!0)},h.instreamPause=function(){f.getVideo()&&f.getVideo().pause(!0)},h};return a}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(26),n(1)],r=function(e,t){function n(e){e.mediaController.off(a,e._onPlayAttempt),e.mediaController.off(s,e._triggerFirstFrame),e.mediaController.off(u,e._onTime),e.off("change:activeTab",e._onTabVisible)}function i(e){e._onTabVisible&&n(e),e._triggerFirstFrame=t.once(function(){var t=e._qoeItem;t.tick(l);var i=t.getFirstFrame();e.mediaController.trigger(l,{loadTime:i}),n(e)}),e._onTime=f(e._triggerFirstFrame),e._onPlayAttempt=function(){e._qoeItem.tick(a)},e._onTabVisible=function(t,n){n?e._qoeItem.tick(d):e._qoeItem.tick(c)},e.on("change:activeTab",e._onTabVisible),e.mediaController.on(a,e._onPlayAttempt),e.mediaController.once(s,e._triggerFirstFrame),e.mediaController.on(u,e._onTime)}function r(t){function n(t,n,r){t._qoeItem&&r&&t._qoeItem.end(r.get("state")),t._qoeItem=new e,t._qoeItem.getFirstFrame=function(){var e=this.between(a,l),t=this.between(d,l);return t>0&&t<e?t:e},t._qoeItem.tick(o),t._qoeItem.start(n.get("state")),i(t),n.on("change:state",function(e,n,i){t._qoeItem.end(i),t._qoeItem.start(n)})}t.on("change:mediaModel",n)}var o="playlistItem",a="playAttempt",s="providerFirstFrame",l="firstFrame",u="time",c="tabHidden",d="tabVisible",f=function(e){var t=0;return function(n){var i=n.position;i>t&&e(),t=i}};return{model:r}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(20),n(37),n(14),n(51),n(10),n(1),n(2),n(4),n(33)],r=function(e,t,i,r,o,a,s,l,u){function c(){var e={LOAD_PROMISE_POLYFILL:{method:f,depends:[]},LOAD_BASE64_POLYFILL:{method:p,depends:[]},LOAD_PLUGINS:{method:g,depends:["LOAD_PROMISE_POLYFILL"]},LOAD_XO_POLYFILL:{method:h,depends:[]},LOAD_SKIN:{method:C,depends:[]},LOAD_PLAYLIST:{method:y,depends:[]},LOAD_CONTROLS:{method:_,depends:["LOAD_PROMISE_POLYFILL"]},SETUP_VIEW:{method:P,depends:["LOAD_SKIN","LOAD_XO_POLYFILL","LOAD_PROMISE_POLYFILL"]},INIT_PLUGINS:{method:v,depends:["LOAD_PLUGINS","SETUP_VIEW"]},CHECK_FLASH:{method:w,depends:["SETUP_VIEW"]},FILTER_PLAYLIST:{method:E,depends:["LOAD_PLAYLIST","CHECK_FLASH"]},SET_ITEM:{method:k,depends:["INIT_PLUGINS","FILTER_PLAYLIST"]},DEFERRED:{method:d,depends:[]},SEND_READY:{method:R,depends:["LOAD_CONTROLS","SET_ITEM","DEFERRED"]}};return e}function d(e){setTimeout(e,0)}function f(e){window.Promise?e():n.e(7,function(require){n(41),e()})}function p(e){window.btoa&&window.atob?e():n.e(8,function(require){n(40),e()})}function h(e){"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype?e():n.e(4,function(require){n(57),e()})}function g(t,n){window.jwplayerPluginJsonp=e.registerPlugin,x=e.loadPlugins(n.get("id"),n.get("plugins")),x.on(l.COMPLETE,t),x.on(l.ERROR,a.partial(m,t)),x.load()}function v(e,t,n){delete window.jwplayerPluginJsonp,x.setupPlugins(n,t),e()}function m(e,t){j(e,"Could not load plugin",t.message)}function y(e,n){var i=n.get("playlist");a.isString(i)?(T=new t,T.on(l.JWPLAYER_PLAYLIST_LOADED,function(t){
n.attributes.feedData=t,n.attributes.playlist=t.playlist,e()}),T.on(l.JWPLAYER_ERROR,a.partial(b,e)),T.load(i)):e()}function w(e,t,n,i){var o="flash"===t.get("primary"),a=s.flashVersion();if(o&&a){var l,u=function(){l!==-1&&(clearTimeout(l),l=-1,setTimeout(function(){r.remove(f.querySelector("#"+p)),e()},0))},c=function(){t.set("primary",void 0),t.updateProviders(),u()},d=i.element(),f=d.querySelector(".jw-media");d.parentElement||c();var p=""+t.get("id")+"-"+Math.random().toString(16).substr(2),h=t.get("flashloader");Object.defineProperty(r.embed(h,f,p,null),"embedCallback",{get:function(){return u}}),l=setTimeout(c,3e3)}else e()}function E(e,t,n,i,r){var o=r(t.get("playlist"),t.get("feedData"));o?e():b(e)}function b(e,t){t&&t.message?j(e,"Error loading playlist",t.message):j(e,"Error loading player","No playable sources found")}function A(e,t){var n;return a.contains(o.SkinsLoadable,e)&&(n=t+"skins/"+e+".css"),n}function L(e){for(var t=document.styleSheets,n=0,i=t.length;n<i;n++)if(t[n].href===e)return!0;return!1}function C(e,t){var n=t.get("skin"),r=t.get("skinUrl");if(a.contains(o.SkinsIncluded,n))return void e();if(r||(r=A(n,t.get("base"))),a.isString(r)&&!L(r)){t.set("skin-loading",!0);var s=!0,u=new i(r,s);u.addEventListener(l.COMPLETE,function(){t.set("skin-loading",!1)}),u.addEventListener(l.ERROR,function(){t.set("skin","seven"),t.set("skin-loading",!1)}),u.load()}e()}function P(e,t,n,i){t.setAutoStart(),i.setup(),e()}function k(e,t){t.once("itemReady",e),t.setItemIndex(t.get("item"))}function R(e){e({type:"complete"})}function _(e,t,n,i){return t.get("controls")?void u.load().then(function(t){i.setControlsModule(t),e()})["catch"](function(t){j(e,"Failed to load controls",t)}):void e()}function j(e,t,n){e({type:"error",msg:t,reason:n})}var x,T;return{getQueue:c,error:j}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1),n(2)],r=function(e,t){function n(e){return"jwplayer."+e}function i(){return e.reduce(this.persistItems,function(e,i){var r=l[n(i)];return r&&(e[i]=t.serialize(r)),e},{})}function r(e,t){try{l[n(e)]=t}catch(i){var r=window.jwplayer;r&&r.debug&&console.error(i)}}function o(){e.each(this.persistItems,function(e){l.removeItem(n(e))})}function a(){this.persistItems=["volume","mute","captionLabel","qualityLabel"]}function s(t){e.each(this.persistItems,function(e){t.on("change:"+e,function(t,n){r(e,n)})})}var l={removeItem:t.noop};try{l=window.localStorage}catch(u){}return e.extend(a.prototype,{getAllItems:i,track:s,clear:o}),a}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(64),n(2)],r=function(e,t){return n.p=t.loadFrom(),e.selectPlayer}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(7)],r=function(e){function t(e){e||n()}function n(){throw new Error("Invalid DFXP file")}var i=e.seconds;return function(r){t(r);var o=[],a=r.getElementsByTagName("p"),s=30,l=r.getElementsByTagName("tt");if(l&&l[0]){var u=parseFloat(l[0].getAttribute("ttp:frameRate"));isNaN(u)||(s=u)}t(a),a.length||(a=r.getElementsByTagName("tt:p"),a.length||(a=r.getElementsByTagName("tts:p")));for(var c=0;c<a.length;c++){for(var d=a[c],f=d.getElementsByTagName("br"),p=0;p<f.length;p++){var h=f[p];h.parentNode.replaceChild(r.createTextNode("\r\n"),h)}var g=d.innerHTML||d.textContent||d.text||"",v=e.trim(g).replace(/>\s+</g,"><").replace(/(<\/?)tts?:/g,"$1").replace(/<br.*?\/>/g,"\r\n");if(v){var m=d.getAttribute("begin"),y=d.getAttribute("dur"),w=d.getAttribute("end"),E={begin:i(m,s),text:v};w?E.end=i(w,s):y&&(E.end=E.begin+i(y,s)),o.push(E)}}return o.length||n(),o}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(9),n(7),n(2)],r=function(e,t,n){var i="jwplayer",r=function(r,o){for(var a=[],s=[],l=t.xmlAttribute,u="default",c="label",d="file",f="type",p=0;p<r.childNodes.length;p++){var h=r.childNodes[p];if(h.prefix===i){var g=e.localName(h);"source"===g?(delete o.sources,a.push({file:l(h,d),"default":l(h,u),label:l(h,c),type:l(h,f)})):"track"===g?(delete o.tracks,s.push({file:l(h,d),"default":l(h,u),kind:l(h,"kind"),label:l(h,c)})):(o[g]=n.serialize(e.textContent(h)),"file"===g&&o.sources&&delete o.sources)}o[d]||(o[d]=o.link)}if(a.length)for(o.sources=[],p=0;p<a.length;p++)a[p].file.length>0&&(a[p][u]="true"===a[p][u],a[p].label.length||delete a[p].label,o.sources.push(a[p]));if(s.length)for(o.tracks=[],p=0;p<s.length;p++)s[p].file.length>0&&(s[p][u]="true"===s[p][u],s[p].kind=s[p].kind.length?s[p].kind:"captions",s[p].label.length||delete s[p].label,o.tracks.push(s[p]));return o};return r}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(9),n(7),n(2)],r=function(e,t,n){function i(e){for(var t=[],n=0;n<s(e);n++){var i=e.childNodes[n];"jwplayer"===i.prefix&&"mediatypes"===o(i).toLowerCase()&&t.push(a(i))}return t}var r=t.xmlAttribute,o=e.localName,a=e.textContent,s=e.numChildren,l="media",u=function c(e,t){function u(e){var t={zh:"Chinese",nl:"Dutch",en:"English",fr:"French",de:"German",it:"Italian",ja:"Japanese",pt:"Portuguese",ru:"Russian",es:"Spanish"};return t[e]?t[e]:e}var d,f,p="tracks",h=[];for(f=0;f<s(e);f++)if(d=e.childNodes[f],d.prefix===l){if(!o(d))continue;switch(o(d).toLowerCase()){case"content":if(r(d,"duration")&&(t.duration=n.seconds(r(d,"duration"))),r(d,"url")){t.sources||(t.sources=[]);var g={file:r(d,"url"),type:r(d,"type"),width:r(d,"width"),label:r(d,"label")},v=i(d);v.length&&(g.mediaTypes=v),t.sources.push(g)}s(d)>0&&(t=c(d,t));break;case"title":t.title=a(d);break;case"description":t.description=a(d);break;case"guid":t.mediaid=a(d);break;case"thumbnail":t.image||(t.image=r(d,"url"));break;case"group":c(d,t);break;case"subtitle":var m={};m.file=r(d,"url"),m.kind="captions",r(d,"lang").length>0&&(m.label=u(r(d,"lang"))),h.push(m)}}for(t.hasOwnProperty(p)||(t[p]=[]),f=0;f<h.length;f++)t[p].push(h[f]);return t};return u}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(7),n(9),n(78),n(79),n(36)],r=function(e,t,n,i,r){function o(t){for(var o={},s=0;s<t.childNodes.length;s++){var l=t.childNodes[s],c=u(l);if(c)switch(c.toLowerCase()){case"enclosure":o.file=e.xmlAttribute(l,"url");break;case"title":o.title=a(l);break;case"guid":o.mediaid=a(l);break;case"pubdate":o.date=a(l);break;case"description":o.description=a(l);break;case"link":o.link=a(l);break;case"category":o.tags?o.tags+=a(l):o.tags=a(l)}}return o=i(t,o),o=n(t,o),new r(o)}var a=t.textContent,s=t.getChildNode,l=t.numChildren,u=t.localName,c={};return c.parse=function(e){var t=[];t.feedData={};for(var n=0;n<l(e);n++){var i=s(e,n),r=u(i).toLowerCase();if("channel"===r)for(var c=0;c<l(i);c++){var d=s(i,c),f=u(d).toLowerCase();"item"===f?t.push(o(d)):f&&(t.feedData[f]=a(d))}}return t},c}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(36),n(38),n(1),n(22)],r=function(e,t,n,i){function r(e,t){for(var n=0;n<e.length;n++){var i=e[n],r=t.choose(i);if(r)return{type:i.type,provider:r.providerToCheck}}return null}function o(e,t){return n.isUndefined(e)?t:e}var a=function(t){return t=n.isArray(t)?t:[t],n.compact(n.map(t,e))};a.filterPlaylist=function(e,t,i){var r=[],o=t.getProviders(),a=t.get("preload"),u=n.extend({},i);return delete u.playlist,n.each(e,function(e){e=n.extend({},e),e.allSources=s(e,t),e.sources=l(e.allSources,o),e.sources.length&&(e.file=e.sources[0].file,a&&(e.preload=e.preload||a),i&&(e.feedData=u),r.push(e))}),r};var s=function(e,i){var r=e.sources,a=i.get("androidhls"),s=e.drm||i.get("drm"),l=e.preload||i.get("preload"),u=o(e.withCredentials,i.get("withCredentials")),c=i.get("hlsjsdefault");return n.compact(n.map(r,function(e){if(!n.isObject(e))return null;void 0!==a&&null!==a&&(e.androidhls=a),(e.drm||s)&&(e.drm=e.drm||s),(e.preload||l)&&(e.preload=e.preload||l);var i=o(e.withCredentials,u);return n.isUndefined(i)||(e.withCredentials=i),c&&(e.hlsjsdefault=c),t(e)}))},l=function(e,t){t&&t.choose||(t=new i({primary:t?"flash":null}));var o=r(e,t);if(!o)return[];var a=o.provider,s=o.type;return n.filter(e,function(e){return e.type===s&&t.providerSupports(a,e)})};return a}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1)],r=function(e){var t={kind:"captions","default":!1};return function(n){if(n&&n.file)return e.extend({},t,n)}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(11),n(2),n(4),n(3),n(1),n(14)],r=function(e,t,n,i,r,o){function a(e,t,n){return function(){var i=e.getContainer().getElementsByClassName("jw-overlays")[0];i&&(n.left=i.style.left,n.top=i.style.top,i.appendChild(n),t.displayArea=i)}}function s(e){function t(){var t=e.displayArea;t&&e.resize(t.clientWidth,t.clientHeight)}return function(){t(),setTimeout(t,400)}}var l=function(l,u){function c(){v||(v=!0,g=o.loaderstatus.COMPLETE,h.trigger(n.COMPLETE))}function d(){if(!y&&(u&&0!==r.keys(u).length||c(),!v)){var i=l.getPlugins();p=r.after(m,c),r.each(u,function(r,a){var s=e.getPluginName(a),l=i[s],u=l.getJS(),c=l.getTarget(),d=l.getStatus();d!==o.loaderstatus.LOADING&&d!==o.loaderstatus.NEW&&(u&&!t.versionCheck(c)&&h.trigger(n.ERROR,{message:"Incompatible player version"}),p())})}}function f(e){if(!y){var i="File not found";e.url&&t.log(i,e.url),this.off(),this.trigger(n.ERROR,{message:i}),d()}}var p,h=r.extend(this,i),g=o.loaderstatus.NEW,v=!1,m=r.size(u),y=!1;this.setupPlugins=function(n,i){var o=[],u=l.getPlugins(),c=i.get("plugins");r.each(c,function(i,l){var d=e.getPluginName(l),f=u[d],p=f.getFlashPath(),h=f.getJS(),g=f.getURL();if(p){var v=r.extend({name:d,swf:p,pluginmode:f.getPluginmode()},i);o.push(v)}var m=t.tryCatch(function(){if(h){var e=c[g];if(!e)return void t.log("JW Plugin already loaded",d,g);var i=document.createElement("div");i.id=n.id+"_"+d,i.className="jw-plugin jw-reset";var o=r.extend({},e),l=f.getNewInstance(n,o,i);l.addToPlayer=a(n,l,i),l.resizeHandler=s(l),n.addPlugin(d,l,i)}});m instanceof t.Error&&t.log("ERROR: Failed to load "+d+".")}),i.set("flashPlugins",o)},this.load=function(){if(t.exists(u)&&"object"!==t.typeOf(u))return void d();g=o.loaderstatus.LOADING,r.each(u,function(e,i){if(t.exists(i)){var r=l.addPlugin(i);r.on(n.COMPLETE,d),r.on(n.ERROR,f)}});var e=l.getPlugins();r.each(e,function(e){e.load()}),d()},this.destroy=function(){y=!0,this.off()},this.getStatus=function(){return g}};return l}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(11),n(39)],r=function(e,t){var n=function(n){this.addPlugin=function(i){var r=e.getPluginName(i);return n[r]||(n[r]=new t(i)),n[r]},this.getPlugins=function(){return n}};return n}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[],r=function(){return{}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1),n(25)],r=function(e,t){function n(e){e.onload=null,e.onprogress=null,e.onreadystatechange=null,e.onerror=null,"abort"in e&&e.abort()}function i(t,i){return function(r){var o=r.currentTarget||i.xhr;if(clearTimeout(i.timeoutId),i.retryWithoutCredentials&&i.xhr.withCredentials){n(o);var a=e.extend({},i,{xhr:null,withCredentials:!1,retryWithoutCredentials:!1});return void d(a)}i.onerror(t,i.url,o)}}function r(e){return function(t){var n=t.currentTarget||e.xhr;if(4===n.readyState){if(clearTimeout(e.timeoutId),n.status>=400){var i;return i=404===n.status?"File not found":""+n.status+"("+n.statusText+")",e.onerror(i,e.url,n)}if(200===n.status)return o(e)(t)}}}function o(e){return function(n){var i=n.currentTarget||e.xhr;if(clearTimeout(e.timeoutId),e.responseType){if("json"===e.responseType)return a(i,e)}else{var r,o=i.responseXML;if(o)try{r=o.firstChild}catch(l){}if(o&&r)return s(i,o,e);if(u&&i.responseText&&!o&&(o=t.parseXML(i.responseText),o&&o.firstChild))return s(i,o,e);if(e.requireValidXML)return void e.onerror("Invalid XML",e.url,i)}e.oncomplete(i)}}function a(t,n){if(!t.response||e.isString(t.response)&&'"'!==t.responseText.substr(1))try{t=e.extend({},t,{response:JSON.parse(t.responseText)})}catch(i){return void n.onerror("Invalid JSON",n.url,t)}return n.oncomplete(t)}function s(t,n,i){var r=n.documentElement;return i.requireValidXML&&("parsererror"===r.nodeName||r.getElementsByTagName("parsererror").length)?void i.onerror("Invalid XML",i.url,t):(t.responseXML||(t=e.extend({},t,{responseXML:n})),i.oncomplete(t))}var l=function(){},u=!1,c=function(e){var t=document.createElement("a"),n=document.createElement("a");t.href=location.href;try{return n.href=e,n.href=n.href,t.protocol+"//"+t.host!=n.protocol+"//"+n.host}catch(i){}return!0},d=function(t,a,s,d){e.isObject(t)&&(d=t,t=d.url);var f,p=e.extend({xhr:null,url:t,withCredentials:!1,retryWithoutCredentials:!1,timeout:6e4,timeoutId:-1,oncomplete:a||l,onerror:s||l,mimeType:d&&!d.responseType?"text/xml":"",requireValidXML:!1,responseType:d&&d.plainText?"text":""},d);if("XDomainRequest"in window&&c(t))f=p.xhr=new window.XDomainRequest,f.onload=o(p),f.ontimeout=f.onprogress=l,u=!0;else{if(!("XMLHttpRequest"in window))return void p.onerror("",t);f=p.xhr=new window.XMLHttpRequest,f.onreadystatechange=r(p)}var h=i("Error loading file",p);f.onerror=h,"overrideMimeType"in f?p.mimeType&&f.overrideMimeType(p.mimeType):u=!0;try{t=t.replace(/#.*$/,""),f.open("GET",t,!0)}catch(g){return h(g),f}if(p.responseType)try{f.responseType=p.responseType}catch(g){}p.timeout&&(p.timeoutId=setTimeout(function(){n(f),p.onerror("Timeout",t,f)},p.timeout),f.onabort=function(){clearTimeout(p.timeoutId)});try{p.withCredentials&&"withCredentials"in f&&(f.withCredentials=!0),f.send()}catch(g){h(g)}return f};return{ajax:d,crossdomain:c}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t){"use strict";function n(){return o.now()}function i(){return a+o.now()}Object.defineProperty(t,"__esModule",{value:!0}),t.now=n,t.dateTime=i;var r=window.Date,o=window.performance||{timing:{}},a=o.timing.navigationStart||(new r).getTime();"now"in o||(o.now=function(){return(new r).getTime()-a})},function(e,t,n){var i,r;i=[n(1)],r=function(e){return function(t){return e.each(Array.prototype.slice.call(arguments,1),function(e){if(e)for(var n in e)n in t||(t[n]=e[n])}),t}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[],r=function(){return{hasClass:function(e,t){var n=" "+t+" ";return 1===e.nodeType&&(" "+e.className+" ").replace(/[\t\r\n\f]/g," ").indexOf(n)>=0}}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(10),n(1),n(27),n(25),n(28)],r=function(e,t,n,i,r){var o={};return o.repo=t.memoize(function(){return i.getScriptPath("jwplayer.js")}),o.versionCheck=function(e){var t=("0"+e).split(/\W/),n=r.split(/\W/),i=parseFloat(t[0]),o=parseFloat(n[0]);return!(i>o)&&!(i===o&&parseFloat("0"+t[1])>parseFloat(n[1]))},o.loadFrom=function(){return i.getScriptPath("jwplayer.js")},o}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){"use strict";function i(e,t,n){if(!e)return"";var i=e.bitrate||e.bandwidth;return o(t,i)||e.label||r(e.height,i,n)}function r(e,t,n){if(!e&&!t)return"";var i=s(t)+" kbps",r=i;return e&&(r=e+"p",t&&n&&(r+=" ("+i+")")),r}function o(e,t){var n=null,i=u.keys(e);if(t&&e&&i.length){var r=parseFloat(t);isNaN(r)||(n=e[a(i,s(r))])}return n}function a(e,t){var n=null,i=1/0,r=void 0;return u.isArray(e)&&u.forEach(e,function(e){r=Math.abs(e-t),r<i&&(n=e,i=r)}),n}function s(e){return Math.floor(e/1e3)}function l(e){return!!u.isArray(e)&&u.some(e,function(e){var t=e.height||e.bitrate||e.bandwidth,n=this[t];return this[t]=1,n},{})}Object.defineProperty(t,"__esModule",{value:!0});var u=n(1);t.generateLabel=i,t.createLabel=r,t.getCustomLabel=o,t.findClosestBandwidth=a,t.toKbps=s,t.hasRedundantLevels=l},function(e,t,n){var i,r;i=[n(1),n(3)],r=function(e,t){return e.extend({get:function(e){return this.attributes=this.attributes||{},this.attributes[e]},set:function(e,t){if(this.attributes=this.attributes||{},this.attributes[e]!==t){var n=this.attributes[e];this.attributes[e]=t,this.trigger("change:"+e,this,t,n)}},clone:function(){return e.clone(this.attributes)},change:function(e,t,n){var i=this;return e.split(" ").forEach(function(e){var r="change:"+e,o=i.get(e);i.on(r,t,n),t.call(n,i,o,o)}),this}},t)}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1)],r=function(e){var t={};return t.isDvr=function(e,t){return Math.abs(e)>=Math.max(t,0)},t.streamType=function(n,i){var r=e.isUndefined(i)?120:i,o="VOD";return n===1/0?o="LIVE":n<0&&(o=t.isDvr(n,r)?"DVR":"LIVE"),o},t}.apply(t,i),!(void 0!==r&&(e.exports=r))},,function(e,t,n){var i,r;i=[],r=function(){var e=function(e,n,i){n=n||this,i=i||[];var r=window.jwplayer;if(r&&r.debug)return e.apply(n,i);try{return e.apply(n,i)}catch(o){return new t(e.name,o)}},t=function(e,t){this.name=e,this.message=t.message||t.toString(),this.error=t};return{tryCatch:e,Error:t}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[],r=function(){return document.createElement("video")}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(2),n(13),n(8),n(5),n(1)],r=function(e,t,i,r,o){var a,s=t.style,l={back:!0,backgroundOpacity:50,edgeStyle:null,fontSize:14,fontOpacity:100,fontScale:.05,preprocessor:o.identity,windowOpacity:0};return a=function(r){function a(){if(o.isFinite(R.fontSize)){var e=r.get("containerHeight");return e?void(P=l.fontScale*R.fontSize/l.fontSize):void r.once("change:containerHeight",a)}}function u(){var e=r.get("containerHeight");if(e){var t=Math.round(e*P);r.get("renderCaptionsNatively")?p(r.get("id"),t):s(b,{fontSize:t+"px"})}}function c(e,t){u(),f(e,t),d(e,t)}function d(e,n){t.css("#"+e+" .jw-text-track-display",k,e),t.css("#"+e+" .jw-text-track-cue",n,e)}function f(n,i){e.isSafari()&&t.css("#"+n+" .jw-video::-webkit-media-text-track-display-backdrop",{backgroundColor:i.backgroundColor},n,!0),t.css("#"+n+" .jw-video::-webkit-media-text-track-display",k,n,!0),t.css("#"+n+" .jw-video::cue",i,n,!0)}function p(e,n){k.fontSize=n+"px",t.css("#"+e+" .jw-video::-webkit-media-text-track-display",k,e,!0)}function h(e,n){var i=n.color,r=n.fontOpacity;if((i||r!==l.fontOpacity)&&(e.color=t.hexToRgba(i||"#ffffff",r)),n.back){var o=n.backgroundColor,a=n.backgroundOpacity;o===l.backgroundColor&&a===l.backgroundOpacity||(e.backgroundColor=t.hexToRgba(o,a))}else e.background="transparent";n.fontFamily&&(e.fontFamily=n.fontFamily),n.fontStyle&&(e.fontStyle=n.fontStyle),n.fontWeight&&(e.fontWeight=n.fontWeight),n.textDecoration&&(e.textDecoration=n.textDecoration)}function g(e,n,i){var r=t.hexToRgba("#000000",i);"dropshadow"===e?n.textShadow="0 2px 1px "+r:"raised"===e?n.textShadow="0 0 5px "+r+", 0 1px 5px "+r+", 0 2px 5px "+r:"depressed"===e?n.textShadow="0 -2px 1px "+r:"uniform"===e&&(n.textShadow="-2px 0 1px "+r+",2px 0 1px "+r+",0 -2px 1px "+r+",0 2px 1px "+r+",-1px 1px 1px "+r+",1px 1px 1px "+r+",1px -1px 1px "+r+",1px 1px 1px "+r)}function v(e){r.get("renderCaptionsNatively")||(E=e,this.selectCues(y,E))}function m(){r.get("renderCaptionsNatively")||n.e(6,function(require){n(42),C=window.WebVTT})}var y,w,E,b,A,L,C,P,k,R={};b=document.createElement("div"),b.className="jw-captions jw-reset",this.show=function(){i.addClass(b,"jw-captions-enabled")},this.hide=function(){i.removeClass(b,"jw-captions-enabled")},this.populate=function(e){if(!r.get("renderCaptionsNatively"))return w=[],y=e,e?void this.selectCues(e,E):(w=[],void this.renderCues())},this.resize=function(){u(),this.renderCues(!0)},this.renderCues=function(e){e=!!e,C&&C.processCues(window,w,b,e)},this.selectCues=function(e,t){var n,i;e&&e.data&&t&&(i=this.getAlignmentPosition(e,t),i!==!1&&(n=this.getCurrentCues(e.data,i),this.updateCurrentCues(n),this.renderCues(!0)))},this.getCurrentCues=function(e,t){return o.filter(e,function(e){return t>=e.startTime&&(!e.endTime||t<=e.endTime)})},this.updateCurrentCues=function(e){return e.length?o.difference(e,w).length&&(i.addClass(A,"jw-captions-window-active"),w=e):w=[],w},this.getAlignmentPosition=function(e,t){var n=e.source,i=t.metadata;return n?i&&o.isNumber(i[n])?i[n]:void 0:t.duration<0?t.position-t.duration:t.position},this.clear=function(){e.empty(b)},this.setup=function(e,n){A=document.createElement("div"),L=document.createElement("span"),A.className="jw-captions-window jw-reset",L.className="jw-captions-text jw-reset",R=o.extend({},l,n),P=l.fontScale,a(R.fontSize);var i=R.windowColor,u=R.windowOpacity,d=R.edgeStyle;k={};var f={};h(f,R),(i||u!==l.windowOpacity)&&(k.backgroundColor=t.hexToRgba(i||"#000000",u)),g(d,f,R.fontOpacity),R.back||null!==d||g("uniform",f),s(A,k),s(L,f),c(e,f),A.appendChild(L),b.appendChild(A),this.populate(r.get("captionsTrack")),r.set("captions",R)},this.element=function(){return b},r.on("change:playlistItem",function(){E=null,w=[]},this),r.on("change:captionsTrack",function(e,t){this.populate(t)},this),r.mediaController.on("seek",function(){w=[]},this),r.mediaController.on("time seek",v,this),r.mediaController.on("subtitlesTrackData",function(){this.selectCues(y,E)},this),r.on("itemReady",m,this)}}.apply(t,i),!(void 0!==r&&(e.exports=r))},,,,,,,,,,,,,,,,,,,,,function(e,t,n){function i(e){return e&&e.__esModule?e:{"default":e}}var r,o,a=n(130),s=i(a);r=[],o=function(){function e(e,t,n,i){return(0,s["default"])(e,t,n,i)}return e}.apply(t,r),!(void 0!==o&&(e.exports=o))},function(e,t,n){function i(e){return e&&e.__esModule?e:{"default":e}}var r,o,a=n(131),s=i(a);r=[n(6),n(2),n(4),n(1),n(3)],o=function(e,t,n,i,r){var o=t.style,a={linktarget:"_blank",margin:8,hide:!1,position:"top-right"};return function(l){function u(){var e=l.get("dock"),n=!!(e&&e.length&&"top-right"===d.position&&l.get("controls"));t.toggleClass(c,"jw-below",n)}i.extend(this,r);var c,d,f=new Image;return this.setup=function(){if(d=i.extend({},a,l.get("logo")),d.file){d.position=d.position||a.position,d.hide="true"===d.hide.toString(),c||(c=t.createElement((0,s["default"])(d.position,d.hide))),l.set("logo",d),l.change("dock",u),l.on("change:controls",u),f.onload=function(){var e={backgroundImage:'url("'+this.src+'")',width:this.width,height:this.height};if(d.margin!==a.margin){var t=/(\w+)-(\w+)/.exec(d.position);3===t.length&&(e["margin-"+t[1]]=d.margin,e["margin-"+t[2]]=d.margin)}o(c,e),l.set("logoWidth",e.width)},f.src=d.file;var r=new e(c);r.on("click tap",function(e){t.exists(e)&&e.stopPropagation&&e.stopPropagation(),this.trigger(n.JWPLAYER_LOGO_CLICK,{link:d.link,linktarget:d.linktarget})},this)}},this.setContainer=function(e){if(c){var t=e.querySelector(".jw-dock");t&&t.parentNode===e?e.insertBefore(c,t):e.appendChild(c)}},this.element=function(){return c},this.position=function(){return d.position},this.destroy=function(){l.off("change:dock",u),l.off("change:controls",u),f.onload=null},this}}.apply(t,r),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,r;i=[n(1),n(2)],r=function(e,t){function n(e,t){t.off("change:mediaType",null,this),t.on("change:mediaType",function(t,n){"audio"===n&&this.setImage(e.get("playlistItem").image)},this)}function i(e,n){var i=e.get("autostart")&&!t.isMobile()||e.get("item")>0;return i?(this.setImage(null),e.off("change:state",null,this),void e.on("change:state",function(e,t){"complete"!==t&&"idle"!==t&&"error"!==t||(this.setImage(n.image),this.resize(null,null,e.get("stretching")))},this)):void this.setImage(n.image)}var r=function(e){this.model=e,e.on("change:playlistItem",i,this),e.on("change:mediaModel",n,this)};return e.extend(r.prototype,{setup:function(e){this.el=e;var t=this.model.get("playlistItem");t&&this.setImage(t.image)},setImage:function(n){var i=this.image;i&&(i.onload=null,this.image=null),this.model.off("change:state",null,this);var r="";e.isString(n)&&(r='url("'+n+'")',i=this.image=new Image,i.src=n),t.style(this.el,{backgroundImage:r})},resize:function(e,n,i){if("uniform"===i){if(e&&(this.playerAspectRatio=e/n),!this.playerAspectRatio)return;var r=this.image,o=null;if(r){if(0===r.width){var a=this;return void(r.onload=function(){a.resize(e,n,i)})}var s=r.width/r.height;Math.abs(this.playerAspectRatio-s)<.09&&(o="cover")}t.style(this.el,{backgroundSize:o})}},element:function(){return this.el}}),r}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1),n(2)],r=function(e,t){var n=function(e){this.model=e,this.model.on("change:playlistItem",this.playlistItem,this)};return e.extend(n.prototype,{hide:function(){this.el.style.display="none"},show:function(){this.el.style.display=""},setup:function(e){this.el=e;var t=this.el.getElementsByTagName("div");this.title=t[0],this.description=t[1],this.model.get("playlistItem")&&this.playlistItem(this.model,this.model.get("playlistItem")),this.model.on("change:logoWidth",this.update,this),this.model.on("change:dock",this.update,this)},update:function(e){var n={paddingLeft:0,paddingRight:0},i=e.get("controls"),r=e.get("dock"),o=e.get("logo");if(o){var a=1*(""+o.margin).replace("px",""),s=e.get("logoWidth")+(isNaN(a)?0:a);"top-left"===o.position?n.paddingLeft=s:"top-right"===o.position&&(n.paddingRight=s)}if(i&&r&&r.length){var l=56*r.length;n.paddingRight=Math.max(n.paddingRight,l)}t.style(this.el,n)},playlistItem:function(e,t){if(e.get("displaytitle")||e.get("displaydescription")){var n="",i="";t.title&&e.get("displaytitle")&&(n=t.title),t.description&&e.get("displaydescription")&&(i=t.description),this.updateText(n,i)}else this.hide()},updateText:function(e,t){this.title.innerHTML=e,this.description.innerHTML=t,this.title.firstChild||this.description.firstChild?this.show():this.hide()},element:function(){return this.el}}),n}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=t.CONTROLBAR_ONLY_HEIGHT=44;t.isAudioMode=function(e){var t=e.get("height");if(e.get("aspectratio"))return!1;if("string"==typeof t&&t.indexOf("%")>-1)return!1;var i=1*t||NaN;return i=isNaN(i)?e.get("containerHeight"):i,!!i&&(i&&i<=n)}},function(e,t,n){"use strict";function i(e){var t=0;return e>=1280?t=7:e>=960?t=6:e>=800?t=5:e>=640?t=4:e>=540?t=3:e>=420?t=2:e>=320&&(t=1),t}function r(e,t){var n="jw-breakpoint-"+t;o.replaceClass(e,/jw-breakpoint-\d+/,n)}Object.defineProperty(t,"__esModule",{value:!0}),t.getBreakpoint=i,t.setBreakpoint=r;var o=n(8)},function(e,t,n){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r,o,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();r=[n(6),n(4),n(3),n(1)],o=function(e,t,n,r){return function(){function o(t,a,s){i(this,o),r.extend(this,n),this.revertAlternateClickHandlers(),this.domElement=a,this.model=t;var l={enableDoubleTap:!0,useMove:!0};this.ui=new e(a,r.extend(l,s)).on({"click tap":this.clickHandler,"doubleClick doubleTap":function(){return this.alternateDoubleClickHandler?void this.alternateDoubleClickHandler():void this.trigger("doubleClick")},move:function(){this.trigger("move")},over:function(){this.trigger("over")},out:function(){this.trigger("out")}},this)}return a(o,[{key:"destroy",value:function(){this.ui&&(this.ui.destroy(),this.ui=this.domElement=this.model=null,this.revertAlternateClickHandlers())}},{key:"clickHandler",value:function(e){if(!this.model.get("flashBlocked"))return this.alternateClickHandler?void this.alternateClickHandler(e):void this.trigger(e.type===t.touchEvents.CLICK?"click":"tap")}},{key:"element",value:function(){return this.domElement}},{key:"setAlternateClickHandlers",value:function(e,t){this.alternateClickHandler=e,this.alternateDoubleClickHandler=t||null}},{key:"revertAlternateClickHandlers",value:function(){this.alternateClickHandler=null,this.alternateDoubleClickHandler=null}}]),o}()}.apply(t,r),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,r;i=[n(8)],r=function(e){return function(t){var n=!1,i=function(){n=!1,e.removeClass(t,"jw-no-focus")},r=function(){n=!0,e.addClass(t,"jw-no-focus")},o=function(){n||i()};return t.addEventListener("focus",o),t.addEventListener("blur",i),t.addEventListener("mousedown",r),{destroy:function(){t.removeEventListener("focus",o),t.removeEventListener("blur",i),t.removeEventListener("mousedown",r)}}}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[],r=function(){var e=["fullscreenchange","webkitfullscreenchange","mozfullscreenchange","MSFullscreenChange"];return function(t,n,i){for(var r=t.requestFullscreen||t.webkitRequestFullscreen||t.webkitRequestFullScreen||t.mozRequestFullScreen||t.msRequestFullscreen,o=n.exitFullscreen||n.webkitExitFullscreen||n.webkitCancelFullScreen||n.mozCancelFullScreen||n.msExitFullscreen,a=!(!r||!o),s=e.length;s--;)n.addEventListener(e[s],i);return{events:e,supportsDomFullscreen:function(){return a},requestFullscreen:function(){r.apply(t)},exitFullscreen:function(){o.apply(n)},fullscreenElement:function(){return n.fullscreenElement||n.webkitCurrentFullScreenElement||n.mozFullScreenElement||n.msFullscreenElement},destroy:function(){for(s=e.length;s--;)n.removeEventListener(e[s],i)}}}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function r(){var e=window.IntersectionObserver;window.IntersectionObserver&&!d&&(d=new e(function(e){if(e&&e.length)for(var t=e.length;t--;)for(var n=e[t],i=c.length;i--;){var r=c[i];if(n.target===r.getContainer()){r.model.set("intersectionRatio",n.intersectionRatio);break}}},{threshold:[0,.25,.5,.75,1]}))}function o(){(0,u.cancelAnimationFrame)(f),f=(0,u.requestAnimationFrame)(function(){c.forEach(function(e){e.updateBounds()}),c.forEach(function(e){e.model.get("visibility")&&e.updateStyles()}),c.forEach(function(e){e.checkResized()})})}function a(){c.forEach(function(e){e.model.set("activeTab",(0,l["default"])())})}Object.defineProperty(t,"__esModule",{value:!0});var s=n(48),l=i(s),u=n(52),c=[],d=void 0,f=-1;document.addEventListener("visibilitychange",a),document.addEventListener("webkitvisibilitychange",a),window.addEventListener("resize",o),window.addEventListener("orientationchange",o),window.addEventListener("beforeunload",function(){document.removeEventListener("visibilitychange",a),document.removeEventListener("webkitvisibilitychange",a),window.removeEventListener("resize",o),window.removeEventListener("orientationchange",o)}),t["default"]={add:function(e){c.push(e)},remove:function(e){var t=c.indexOf(e);t!==-1&&c.splice(t,1)},size:function(){return c.length},observe:function(e){r();try{d.unobserve(e)}catch(t){}d.observe(e)},unobserve:function(e){d&&d.unobserve(e)}}},function(e,t){"use strict";function n(e,t,n){if(e.get("fullscreen"))return 1;if(!e.get("activeTab"))return 0;var r=e.get("intersectionRatio");return void 0===r&&(r=i(t,n)),r}function i(e,t){var n=document.documentElement,i=document.body,o={top:0,left:0,right:n.clientWidth||i.clientWidth,width:n.clientWidth||i.clientWidth,bottom:n.clientHeight||i.clientHeight,height:n.clientHeight||i.clientHeight};if(!i.contains(e))return 0;for(var a=e.getBoundingClientRect(),s=a,l=e.parentNode,u=!1;!u;){var c=null;if(l&&1===l.nodeType?"visible"!==window.getComputedStyle(l).overflow&&(c=t(l)):(u=!0,c=o),c&&(s=r(c,s),!s))return 0;l=l.parentNode}var d=a.width*a.height,f=s.width*s.height;return d?f/d:0}function r(e,t){var n=Math.max(e.top,t.top),i=Math.min(e.bottom,t.bottom),r=Math.max(e.left,t.left),o=Math.min(e.right,t.right),a=o-r,s=i-n;return a>=0&&s>=0&&{top:n,bottom:i,left:r,right:o,width:a,height:s}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n},function(e,t,n){function i(e){return e&&e.__esModule?e:{"default":e}}var r,o,a=n(132),s=i(a),l=n(122),u=n(127),c=i(u),d=n(128),f=i(d),p=n(48),h=i(p),g=n(52),v=n(123),m=void 0;r=[n(4),n(5),n(3),n(2),n(1),n(126),n(125),n(124),n(97),n(119),n(120),n(121),n(33)],o=function(e,t,i,r,o,a,u,d,p,y,w,E,b){function A(A,_){function j(){return{reason:"interaction"}}function x(){(0,g.cancelAnimationFrame)(ge),ge=(0,g.requestAnimationFrame)(T)}function T(){ie.isSetup&&(ie.updateBounds(),ie.updateStyles(),ie.checkResized())}function I(e,t){var n=(0,l.isAudioMode)(_);if(o.isNumber(e)&&o.isNumber(t)){var i=(0,v.getBreakpoint)(e);(0,v.setBreakpoint)(re,i);
var a=i<2,s=_.get("timeSliderAbove"),u=!n&&s!==!1&&(s||a);r.toggleClass(re,"jw-flag-small-player",a),r.toggleClass(re,"jw-flag-time-slider-above",u),r.toggleClass(re,"jw-orientation-portrait",t>e)}r.toggleClass(re,"jw-flag-audio-player",n),_.set("audioMode",n)}function S(e,t,n){if(e){var i={color:e,borderColor:e,stroke:e};r.css("#"+n+" .jw-color-active",i,n),r.css("#"+n+" .jw-color-active-hover:hover",i,n)}if(t){var o={color:t,borderColor:t,stroke:t};r.css("#"+n+" .jw-color-inactive",o,n),r.css("#"+n+" .jw-color-inactive-hover:hover",o,n)}}function M(){_.set("visibility",(0,f["default"])(_,re,C))}function O(e,t){t?m?D():b.load().then(function(e){m=e,D()})["catch"](function(e){ie.trigger("error",{message:"Controls failed to load",reason:e})}):ie.removeControls()}function D(){var e=new m(document,ie.element());ie.addControls(e)}function N(e){var t=oe.querySelector("video, audio");if(t){var n=document.createElement("div");n.innerHTML=e.title||"",t.setAttribute("title",n.textContent)}}function Y(e,t,n){t&&!n&&(ee(pe||e),ie.updateStyles())}function F(n,i,o){var a=new d(i,o,{useHover:!0});return a.on({click:function(){ie.trigger(e.JWPLAYER_DISPLAY_CLICK),_.get("controls")&&n.play(j())},tap:function(){ie.trigger(e.JWPLAYER_DISPLAY_CLICK);var o=i.get("state"),a=_.get("controls");if(a&&(o===t.IDLE||o===t.COMPLETE||pe&&pe.get("state")===t.PAUSED)&&n.play(j()),a&&o===t.PAUSED){if(pe||i.get("castActive")||i.mediaModel&&"audio"===i.mediaModel.get("mediaType"))return;r.toggleClass(re,"jw-flag-controls-hidden"),le.renderCues(!0)}else Ee&&(Ee.showing?Ee.userInactive():Ee.userActive())},doubleClick:function(){return Ee&&n.setFullscreen()},move:function(){return Ee&&Ee.userActive()},over:function(){return Ee&&Ee.userActive()}}),a}function W(e,t){r.replaceClass(re,/jw-skin-\S+/,t?"jw-skin-"+t:"")}function J(e,t){r.replaceClass(re,/jw-stretch-\S+/,"jw-stretch-"+t)}function B(e,t){r.toggleClass(re,"jw-flag-aspect-mode",!!t);var n=re.querySelector(".jw-aspect");L(n,{paddingTop:t||null})}function V(e,t){r.toggleClass(re,"jw-flag-flash-blocked",t)}function U(e){e.link?(A.pause(!0,j()),A.setFullscreen(!1),window.open(e.link,e.linktarget)):_.get("controls")&&A.play(j())}function H(e,t,n){var i=r.exists(e),o=r.exists(t),a={width:e};o&&n&&_.set("aspectratio",null),_.get("aspectratio")||(a.height=t),i&&o&&(_.set("width",e),_.set("height",t)),L(re,a)}function z(e,t){if((e&&!isNaN(1*e)||(e=_.get("containerWidth")))&&(t&&!isNaN(1*t)||(t=_.get("containerHeight")))){ae&&ae.resize(e,t,_.get("stretching"));var n=_.getVideo();if(n){var i=n.resize(e,t,_.get("stretching"));i&&(clearTimeout(he),he=setTimeout(z,250))}}}function G(){if(me.supportsDomFullscreen()){var e=me.fullscreenElement();return!(!e||e.id!==_.get("id"))}return pe?pe.getVideo().getFullScreen():_.getVideo().getFullScreen()}function q(e){var t=_.get("fullscreen"),n=void 0!==e.jwstate?e.jwstate:G();t!==n&&_.set("fullscreen",n),x(),clearTimeout(he),he=setTimeout(z,200)}function Q(e,t){r.toggleClass(e,"jw-flag-fullscreen",t),L(document.body,{overflowY:t?"hidden":""}),t&&Ee&&Ee.userActive(),z(),x()}function X(){Ee.userActive()}function K(e,t){var n="audio"===t,i=_.getVideo(),o=i&&0===i.getName().name.indexOf("flash");r.toggleClass(re,"jw-flag-media-audio",n),n&&!o?re.insertBefore(ae.el,oe):re.insertBefore(ae.el,le.element())}function $(e,t){if(!pe){var n="LIVE"===t;r.toggleClass(re,"jw-flag-live",n),ie.setAltText(n?e.get("localization").liveBroadcast:"")}}function Z(e,t){return t?void(t.name?se.updateText(t.name,t.message):se.updateText(t.message,"")):void se.playlistItem(e,e.get("playlistItem"))}function ee(e){if(_.get("viewSetup")){ce=e.get("state");var t=null;pe&&(t=ce),Ee&&(Ee.instreamState=t),te(ce)}}function te(e){switch(_.get("controls")&&e!==t.PAUSED&&r.hasClass(re,"jw-flag-controls-hidden")&&r.removeClass(re,"jw-flag-controls-hidden"),r.replaceClass(re,/jw-state-\S+/,"jw-state-"+e),e){case t.IDLE:case t.ERROR:case t.COMPLETE:le.hide();break;default:le.show(),e===t.PAUSED&&Ee&&!Ee.showing&&le.renderCues(!0)}}function ne(){!Ee||pe||P||Ee.userActive()}var ie=o.extend(this,i,{isSetup:!1,api:A,model:_});o.extend(_.attributes,{containerWidth:void 0,containerHeight:void 0,mediaContainer:void 0,fullscreen:!1,inDom:void 0,iFrame:void 0,activeTab:void 0,intersectionRatio:void 0,visibility:void 0,viewable:void 0,viewSetup:!1,audioMode:void 0,touchMode:void 0,altText:"",cues:void 0,castClicked:!1,scrubbing:!1,logoWidth:0});var re=r.createElement((0,s["default"])(_.get("id"),_.get("localization").player)),oe=re.querySelector(".jw-media"),ae=new w(_),se=new E(_),le=new p(_),ue=void 0,ce=void 0,de=void 0,fe=void 0,pe=void 0,he=-1,ge=-1,ve=void 0,me=void 0,ye=void 0,we=null,Ee=void 0;this.updateBounds=function(){(0,g.cancelAnimationFrame)(ge);var e=document.body.contains(re),t=C(re),n=Math.round(t.width),i=Math.round(t.height);return n===de&&i===fe?(de&&fe||x(),void _.set("inDom",e)):(n&&i||de&&fe||x(),(n||i||e)&&(_.set("containerWidth",n),_.set("containerHeight",i)),_.set("inDom",e),void(e&&c["default"].observe(re)))},this.updateStyles=function(){var e=_.get("containerWidth"),t=_.get("containerHeight");_.get("controls")&&I(e,t),Ee&&Ee.resize(e,t),z(e,t),le.resize()},this.checkResized=function(){var t=_.get("containerWidth"),n=_.get("containerHeight");if(t!==de||n!==fe){de=t,fe=n,ie.trigger(e.JWPLAYER_RESIZE,{width:t,height:n});var i=(0,v.getBreakpoint)(t);we!==i&&(we=i,ie.trigger(e.JWPLAYER_BREAKPOINT,{breakpoint:we}))}},this.handleColorOverrides=function(){function e(e,n,i,o){e=r.prefix(e,"#"+t+(o?"":" "));var a={};a[n]=i,r.css(e.join(", "),a,t)}var t=_.get("id"),n=_.get("skinColorActive"),i=_.get("skinColorInactive"),o=_.get("skinColorBackground");if(n&&(e([".jw-button-color.jw-toggle",".jw-button-color:hover",".jw-button-color.jw-toggle.jw-off:hover",".jw-option:not(.jw-active-option):hover",".jw-nextup-header"],"color",n),e([".jw-option.jw-active-option",".jw-progress"],"background","none "+n)),i&&(e([".jw-text",".jw-option",".jw-button-color",".jw-toggle.jw-off",".jw-skip .jw-skip-icon",".jw-nextup-body"],"color",i),e([".jw-cue",".jw-knob",".jw-active-option",".jw-nextup-header"],"background","none "+i)),o){if(e([".jw-background-color"],"background","none "+o),_.get("timeSliderAbove")!==!1){var a="transparent linear-gradient(180deg, "+r.getRgba(o,0)+" 0%, "+r.getRgba(o,.25)+" 30%, "+r.getRgba(o,.4)+" 70%, "+r.getRgba(o,.5)+") 100%";e([".jw-flag-time-slider-above .jw-background-color.jw-controlbar"],"background",a,!0)}e([".jw-flag-time-slider-above .jw-background-color.jw-slider-time"],"background","transparent",!0)}S(n,i,t)},this.setup=function(){var t=this;ae.setup(re.querySelector(".jw-preview")),se.setup(re.querySelector(".jw-title")),ue=new y(_),ue.setup(),ue.setContainer(re),ue.on(e.JWPLAYER_LOGO_CLICK,U),le.setup(re.id,_.get("captions")),re.insertBefore(le.element(),se.element()),ve=F(A,_,oe),ye=u(re),me=a(re,document,q),re.addEventListener("focus",ne),_.on("change:errorEvent",Z),_.on("change:hideAdsControls",function(e,t){r.toggleClass(re,"jw-flag-ads-hide-controls",t)}),_.on("change:scrubbing",function(e,t){r.toggleClass(re,"jw-flag-dragging",t)}),_.mediaController.on("fullscreenchange",q),_.change("mediaModel",function(e,n){n.change("mediaType",K,t),n.on("change:visualQuality",function(){z()},t)}),_.change("skin",W,this),_.change("stretching",J),_.change("flashBlocked",V);var i=_.get("width"),o=_.get("height");H(i,o),_.change("aspectratio",B),_.get("controls")?I(i,o):r.addClass(re,"jw-flag-controls-hidden"),R||(R=!0,n(138)),k&&r.addClass(re,"jw-ie"),_.get("skin-loading")===!0&&(r.addClass(re,"jw-flag-skin-loading"),_.once("change:skin-loading",function(){r.removeClass(re,"jw-flag-skin-loading")})),this.handleColorOverrides(),_.set("mediaContainer",oe),_.set("iFrame",r.isIframe()),_.set("activeTab",(0,h["default"])()),_.set("touchMode",P&&("string"==typeof o||o>=l.CONTROLBAR_ONLY_HEIGHT)),c["default"].add(this),this.isSetup=!0,_.set("viewSetup",!0),_.set("inDom",document.body.contains(re))},this.init=function(){this.updateBounds(),_.on("change:fullscreen",Ae),_.on("change:activeTab",M),_.on("change:fullscreen",M),_.on("change:intersectionRatio",M),_.on("change:visibility",Y),M(),1!==c["default"].size()||_.get("visibility")||Y(_,1,0),_.change("state",ee),_.change("controls",O),P&&(N(_.get("playlistItem")),_.on("itemReady",N)),de=fe=null,this.checkResized()};var be=function(e,t){t&&ee(pe||_)};this.addControls=function(e){Ee=e,r.removeClass(re,"jw-flag-controls-hidden"),_.change("streamType",$,this),e.enable(A,_),e.addActiveListeners(ue.element());var n=e.logoContainer();n&&ue.setContainer(n),fe&&(I(de,fe),e.resize(de,fe),le.renderCues(!0)),e.on("userActive userInactive",function(){ce!==t.PLAYING&&ce!==t.BUFFERING||le.renderCues(!0)}),e.on("all",ie.trigger,ie);var i=re.querySelector(".jw-overlays");i.addEventListener("mousemove",X)},this.removeControls=function(){ue.setContainer(re),Ee&&(Ee.removeActiveListeners(ue.element()),Ee.disable(),Ee=null);var e=document.querySelector(".jw-overlays");e&&e.removeEventListener("mousemove",X),r.addClass(re,"jw-flag-controls-hidden")};var Ae=function(e,t){var n=_.getVideo();t&&Ee&&_.get("autostartMuted")&&Ee.unmuteAutoplay(A,_),me.supportsDomFullscreen()?(t?me.requestFullscreen():me.exitFullscreen(),Q(re,t)):k?Q(re,t):(pe&&pe.getVideo()&&pe.getVideo().setFullscreen(t),n.setFullscreen(t)),n&&0===n.getName().name.indexOf("flash")&&n.setFullscreen(t)};this.resize=function(e,t){var n=!0;H(e,t,n),T()},this.resizeMedia=z,this.setupInstream=function(e){this.instreamModel=pe=e,pe.on("change:controls",be,this),pe.on("change:state",ee,this),r.addClass(re,"jw-flag-ads"),Ee&&Ee.userActive()},this.setAltText=function(e){_.set("altText",e)},this.destroyInstream=function(){if(pe&&(pe.off(null,null,this),pe=null),this.setAltText(""),r.removeClass(re,["jw-flag-ads","jw-flag-ads-hide-controls"]),_.set("hideAdsControls",!1),_.getVideo){var e=_.getVideo();e.setContainer(oe)}$(_,_.get("streamType")),ve.revertAlternateClickHandlers()},this.addCues=function(e){_.set("cues",e)},this.clickHandler=function(){return ve},this.getContainer=this.element=function(){return re},this.controlsContainer=function(){return Ee?Ee.element():null},this.getSafeRegion=function(e){var t={x:0,y:0,width:de||0,height:fe||0};return Ee&&(e=e||!r.exists(e),e&&(t.height-=Ee.controlbarHeight())),t},this.setCaptions=function(e){le.clear(),le.setup(_.get("id"),e),le.resize()},this.destroy=function(){c["default"].unobserve(re),c["default"].remove(this),this.isSetup=!1,this.off(),(0,g.cancelAnimationFrame)(ge),clearTimeout(he),re.removeEventListener("focus",ne),ye&&(ye.destroy(),ye=null),me&&(me.destroy(),me=null),_.mediaController&&_.mediaController.off("fullscreenchange",q),Ee&&Ee.disable(),pe&&this.destroyInstream(),ve&&(ve.destroy(),ve=null),ue&&(ue.destroy(),ue=null),r.clearCss(_.get("id"))}}var L=r.style,C=r.bounds,P=r.isMobile(),k=r.isIE(),R=!1;return A.prototype.setControlsModule=function(e){m=e},A}.apply(t,r),!(void 0!==o&&(e.exports=o))},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return'<div id="'+e+'" class="jw-skin-'+t+' jw-error jw-reset"><div class="jw-title jw-reset">'+('<div class="jw-title-primary jw-reset">'+n+"</div>")+('<div class="jw-title-secondary jw-reset">'+i+"</div>")+'</div><div class="jw-display-container jw-reset"><div class="jw-display-icon-container jw-background-color jw-reset"><div class="jw-icon jw-icon-display jw-reset" aria-hidden="true"></div></div></div></div>'}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e,t){var n=t?" jw-hide":"";return'<div class="jw-logo jw-logo-'+e+n+' jw-reset"></div>'}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return'<div id="'+e+'" class="jwplayer jw-reset jw-state-setup" tabindex="0" aria-label="'+t+'"><div class="jw-aspect jw-reset"></div><div class="jw-media jw-reset"></div><div class="jw-preview jw-reset"></div><div class="jw-title jw-reset"><div class="jw-title-primary jw-reset"></div><div class="jw-title-secondary jw-reset"></div></div><div class="jw-overlays jw-reset"></div></div>'}},,function(e,t,n){t=e.exports=n(56)(),t.push([e.id,".jw-reset{color:inherit;background-color:transparent;padding:0;margin:0;float:none;font-family:Arial,Helvetica,sans-serif;font-size:1em;line-height:1em;list-style:none;text-align:left;text-transform:none;vertical-align:baseline;border:0;direction:ltr;font-variant:inherit;font-stretch:inherit;-webkit-tap-highlight-color:rgba(255,255,255,0)}.jw-background-color{background:rgba(33,33,33,.8)}.jw-knob,.jw-text{color:#cecece}.jw-knob{background-color:#fff}.jw-button-color{color:#cecece;fill:#cecece}.jw-button-color:focus,:not(.jw-flag-touch) .jw-button-color:hover{outline:none;color:#fff;fill:#fff}.jw-toggle{color:#fff}.jw-toggle.jw-off{color:#cecece}.jw-toggle.jw-off:focus{color:#fff}.jw-toggle:focus{outline:none}:not(.jw-flag-touch) .jw-toggle.jw-off:hover{color:#fff}.jw-display-icon-container{margin:0 .25em}.jw-display-icon-container .jw-icon{color:#cecece}.jw-rail{background:hsla(0,0%,100%,.2)}.jw-buffer{background:hsla(0,0%,100%,.3)}.jw-progress{background:#fff}.jw-slider-horizontal,.jw-slider-horizontal .jw-buffer,.jw-slider-horizontal .jw-progress,.jw-slider-horizontal .jw-rail{height:.3em}.jw-slider-horizontal .jw-knob{margin-left:-.3em}.jw-slider-vertical .jw-knob{margin-bottom:-.3em}.jw-slider-vertical .jw-progress,.jw-slider-vertical .jw-rail,.jw-slider-vertical .jw-slider-container{width:.3em}.jw-menu,.jw-time-tip,.jw-volume-tip{border:0}.jw-menu,.jw-time-tip{padding:.5em}.jw-volume-tip{padding:1em}.jw-skip{padding:.5em}.jw-skip .jw-skip-icon,.jw-skip .jw-skiptext{color:#cecece}.jw-skip.jw-skippable:hover .jw-skip-icon,.jw-skip.jw-skippable:hover .jw-text{color:#fff}.jw-dock-button .jw-text,.jw-time-tip .jw-text{color:#cecece}.jw-dock-button{background:rgba(33,33,33,.8)}:not(.jw-flag-touch) .jw-dock-button:hover{background:#212121}.jw-icon-cast button{--connected-color:#fff;--disconnected-color:#cecece}.jw-icon-cast button:focus{--connected-color:#fff;--disconnected-color:#fff}.jw-icon-cast button.jw-off{--connected-color:#cecece}.jw-icon-cast:hover button{--connected-color:#fff;--disconnected-color:#fff}.jw-nextup-container{bottom:2.5em;padding:5px .5em}.jw-nextup{border-radius:0}.jw-nextup-header{background:rgba(33,33,33,.8);color:#fff}.jw-nextup-body{background:rgba(0,0,0,.8);color:#fff}.jw-nextup-thumbnail-visible+.jw-nextup-title:after{background:-webkit-linear-gradient(top,transparent,#000);background:linear-gradient(-180deg,transparent,#000)}.jw-nextup-close{color:#cecece}.jw-nextup-close:active,.jw-nextup-close:hover{color:#fff}.jwplayer:not(.jw-flag-touch):not(.jw-error):not(.jw-state-error):not(.jw-state-buffering) .jw-display-icon-container:hover,.jwplayer:not(.jw-flag-touch):not(.jw-error):not(.jw-state-error):not(.jw-state-buffering) .jw-media:hover~.jw-controls .jw-display-icon-display{background-color:#212121}.jwplayer:not(.jw-flag-touch):not(.jw-error):not(.jw-state-error):not(.jw-state-buffering) .jw-display-icon-container:hover .jw-icon{color:#fff}.jw-color-active,:not(.jw-flag-touch) .jw-color-active-hover:hover{color:#fff;stroke:#fff;border-color:#fff}.jw-color-inactive,:not(.jw-flag-touch) .jw-color-inactive-hover:hover{color:#cecece;stroke:#cecece;border-color:#cecece}.jw-option{color:#cecece}.jw-option.jw-active-option{color:#fff;background-color:hsla(0,0%,100%,.1)}:not(.jw-flag-touch) .jw-option:hover{color:#fff}.jwplayer{width:100%;font-size:16px;position:relative;display:block;min-height:0;overflow:hidden;box-sizing:border-box;font-family:Arial,Helvetica,sans-serif;background-color:#000;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.jwplayer *{box-sizing:inherit}.jwplayer.jw-flag-aspect-mode{height:auto!important}.jwplayer.jw-flag-aspect-mode .jw-aspect{display:block}.jwplayer .jw-aspect{display:none}.jwplayer.jw-no-focus:focus,.jwplayer .jw-swf{outline:none}.jwplayer.jw-ie:focus{outline:1px dotted #585858}.jw-media,.jw-preview{position:absolute;width:100%;height:100%;top:0;left:0;bottom:0;right:0}.jw-media{overflow:hidden;cursor:pointer}.jw-plugin{position:absolute;bottom:2.5em}.jw-plugin .jw-banner{max-width:100%;opacity:0;cursor:pointer;position:absolute;margin:auto auto 0;left:0;right:0;bottom:0;display:block}.jw-captions,.jw-preview,.jw-title{pointer-events:none}.jw-logo,.jw-media{pointer-events:all}.jwplayer video{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;margin:auto;background:transparent}.jwplayer video::-webkit-media-controls-start-playback-button{display:none}.jwplayer.jw-stretch-uniform video{object-fit:contain}.jwplayer.jw-stretch-none video{object-fit:none}.jwplayer.jw-stretch-fill video{object-fit:cover}.jwplayer.jw-stretch-exactfit video{object-fit:fill}.jw-preview{position:absolute;display:none;opacity:1;visibility:visible;width:100%;height:100%;background:#000 no-repeat 50% 50%}.jw-error .jw-preview,.jwplayer .jw-preview{background-size:contain}.jw-stretch-none .jw-preview{background-size:auto auto}.jw-stretch-fill .jw-preview{background-size:cover}.jw-stretch-exactfit .jw-preview{background-size:100% 100%}.jw-title{display:none;position:absolute;top:0;width:100%;font-size:.875em;height:8em;background:-webkit-linear-gradient(top,#000,#000 18%,transparent);background:linear-gradient(180deg,#000 0,#000 18%,transparent)}.jw-title-primary,.jw-title-secondary{padding:.75em 1.5em;min-height:2.5em;width:100%;color:#fff;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.jw-title-primary{font-weight:700}.jw-title-secondary{margin-top:-.5em}.jw-flag-small-player .jw-title{background:-webkit-linear-gradient(top,rgba(51,51,51,.75),rgba(51,51,51,0));background:linear-gradient(180deg,rgba(51,51,51,.75),rgba(51,51,51,0));height:auto;padding:16px 0}.jw-flag-small-player .jw-title-primary,.jw-flag-small-player .jw-title-secondary{min-height:inherit;padding:0 16px}.jw-flag-small-player .jw-title-secondary{display:none;margin-top:5px}.jw-captions{position:absolute;width:100%;height:100%;text-align:center;display:none;max-height:calc(100% - 40px);letter-spacing:normal;word-spacing:normal;text-transform:none;text-indent:0;text-decoration:none;pointer-events:none;overflow:hidden;top:0}.jw-captions.jw-captions-enabled{display:block}.jw-captions-window{display:none;padding:.25em;border-radius:.25em}.jw-captions-text,.jw-captions-window.jw-captions-window-active{display:inline-block}.jw-captions-text{color:#fff;background-color:#000;word-wrap:normal;word-break:normal;white-space:pre-line;font-style:normal;font-weight:400;text-align:center;text-decoration:none}.jw-text-track-display{font-size:inherit;line-height:1.5}.jw-text-track-cue{background-color:rgba(0,0,0,.5);color:#fff;padding:.1em .3em}.jwplayer video::-webkit-media-controls{-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.jwplayer video::-webkit-media-text-track-container{max-height:calc(100% - 40px);line-height:normal}.jwplayer video::-webkit-media-text-track-display{min-width:-webkit-min-content}.jwplayer video::cue{background-color:rgba(0,0,0,.5)}.jwplayer video::-webkit-media-controls-panel-container{display:none}.jw-logo{position:absolute;margin:.75em;cursor:pointer;pointer-events:all;background-repeat:no-repeat;background-size:contain;top:auto;right:auto;left:auto;bottom:auto}.jw-flag-audio-player .jw-logo{display:none}.jw-logo-top-right{top:0;right:0}.jw-logo-top-right.jw-below{top:3.5em}.jw-logo-top-left{top:0;left:0}.jw-logo-bottom-left{bottom:0;left:0}.jw-logo-bottom-right{bottom:0;right:0}.jw-state-setup{background-color:transparent}.jw-state-setup .jw-logo{visibility:hidden}body .jw-error .jw-title,body .jwplayer.jw-state-error .jw-title{display:block}body .jw-error .jw-title .jw-title-primary,body .jwplayer.jw-state-error .jw-title .jw-title-primary{white-space:normal}body .jw-error .jw-title .jw-title-secondary,body .jwplayer.jw-state-error .jw-title .jw-title-secondary{display:block}body .jw-error{font-size:16px;background-color:#000;color:#fff;width:100%;height:100%;display:table;opacity:1;position:relative}.jw-state-idle .jw-preview,.jw-state-idle .jw-title,.jwplayer.jw-state-complete:not(.jw-flag-casting):not(.jw-flag-audio-player) .jw-preview,.jwplayer.jw-state-complete:not(.jw-flag-casting):not(.jw-flag-audio-player) .jw-title,body .jw-error .jw-preview,body .jw-error .jw-title,body .jwplayer.jw-state-error .jw-preview,body .jwplayer.jw-state-error .jw-title{display:block}.jw-state-idle .jw-captions,.jwplayer.jw-state-complete .jw-captions,body .jwplayer.jw-state-error .jw-captions{display:none}.jw-state-idle video::-webkit-media-text-track-container,.jwplayer.jw-state-complete video::-webkit-media-text-track-container,body .jwplayer.jw-state-error video::-webkit-media-text-track-container{display:none}.jwplayer.jw-flag-skin-loading .jw-captions,.jwplayer.jw-flag-skin-loading .jw-controls,.jwplayer.jw-flag-skin-loading .jw-media,.jwplayer.jw-flag-skin-loading .jw-preview,.jwplayer.jw-flag-skin-loading .jw-rightclick,.jwplayer.jw-flag-skin-loading .jw-title{display:none}.jwplayer.jw-flag-fullscreen{width:100%!important;height:100%!important;top:0;right:0;bottom:0;left:0;z-index:1000;margin:0;position:fixed}body .jwplayer.jw-flag-flash-blocked .jw-title{display:block}.jwplayer.jw-flag-controls-hidden .jw-captions{max-height:none}.jwplayer.jw-flag-controls-hidden video::-webkit-media-text-track-container{max-height:none}.jwplayer.jw-flag-controls-hidden .jw-media{cursor:default}.jw-flag-audio-player:not(.jw-flag-flash-blocked) .jw-media{visibility:hidden}.jw-flag-audio-player .jw-title{background:none}.jw-flag-audio-player object{min-height:45px}",""])},,,,function(e,t,n){var i=n(134);"string"==typeof i&&(i=[["all-players",i,""]]),n(32).style(i,"all-players"),i.locals&&(e.exports=i.locals)}])});
//# sourceMappingURL=jwplayer.4c4f6f6264c63ee9cf20.map


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