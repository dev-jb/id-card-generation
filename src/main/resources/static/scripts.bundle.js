/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});

;/*! DataTables 1.10.16
 * ©2008-2017 SpryMedia Ltd - datatables.net/license
 */

/**
 * @summary     DataTables
 * @description Paginate, search and order HTML tables
 * @version     1.10.16
 * @file        jquery.dataTables.js
 * @author      SpryMedia Ltd
 * @contact     www.datatables.net
 * @copyright   Copyright 2008-2017 SpryMedia Ltd.
 *
 * This source file is free software, available under the following license:
 *   MIT license - http://datatables.net/license
 *
 * This source file is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.
 *
 * For details please refer to: http://www.datatables.net
 */

/*jslint evil: true, undef: true, browser: true */
/*globals $,require,jQuery,define,_selector_run,_selector_opts,_selector_first,_selector_row_indexes,_ext,_Api,_api_register,_api_registerPlural,_re_new_lines,_re_html,_re_formatted_numeric,_re_escape_regex,_empty,_intVal,_numToDecimal,_isNumber,_isHtml,_htmlNumeric,_pluck,_pluck_order,_range,_stripHtml,_unique,_fnBuildAjax,_fnAjaxUpdate,_fnAjaxParameters,_fnAjaxUpdateDraw,_fnAjaxDataSrc,_fnAddColumn,_fnColumnOptions,_fnAdjustColumnSizing,_fnVisibleToColumnIndex,_fnColumnIndexToVisible,_fnVisbleColumns,_fnGetColumns,_fnColumnTypes,_fnApplyColumnDefs,_fnHungarianMap,_fnCamelToHungarian,_fnLanguageCompat,_fnBrowserDetect,_fnAddData,_fnAddTr,_fnNodeToDataIndex,_fnNodeToColumnIndex,_fnGetCellData,_fnSetCellData,_fnSplitObjNotation,_fnGetObjectDataFn,_fnSetObjectDataFn,_fnGetDataMaster,_fnClearTable,_fnDeleteIndex,_fnInvalidate,_fnGetRowElements,_fnCreateTr,_fnBuildHead,_fnDrawHead,_fnDraw,_fnReDraw,_fnAddOptionsHtml,_fnDetectHeader,_fnGetUniqueThs,_fnFeatureHtmlFilter,_fnFilterComplete,_fnFilterCustom,_fnFilterColumn,_fnFilter,_fnFilterCreateSearch,_fnEscapeRegex,_fnFilterData,_fnFeatureHtmlInfo,_fnUpdateInfo,_fnInfoMacros,_fnInitialise,_fnInitComplete,_fnLengthChange,_fnFeatureHtmlLength,_fnFeatureHtmlPaginate,_fnPageChange,_fnFeatureHtmlProcessing,_fnProcessingDisplay,_fnFeatureHtmlTable,_fnScrollDraw,_fnApplyToChildren,_fnCalculateColumnWidths,_fnThrottle,_fnConvertToWidth,_fnGetWidestNode,_fnGetMaxLenString,_fnStringToCss,_fnSortFlatten,_fnSort,_fnSortAria,_fnSortListener,_fnSortAttachListener,_fnSortingClasses,_fnSortData,_fnSaveState,_fnLoadState,_fnSettingsFromNode,_fnLog,_fnMap,_fnBindAction,_fnCallbackReg,_fnCallbackFire,_fnLengthOverflow,_fnRenderer,_fnDataSource,_fnRowAttributes*/

(function( factory ) {
	"use strict";

	if ( typeof define === 'function' && define.amd ) {
		// AMD
		define( ['jquery'], function ( $ ) {
			return factory( $, window, document );
		} );
	}
	else if ( typeof exports === 'object' ) {
		// CommonJS
		module.exports = function (root, $) {
			if ( ! root ) {
				// CommonJS environments without a window global must pass a
				// root. This will give an error otherwise
				root = window;
			}

			if ( ! $ ) {
				$ = typeof window !== 'undefined' ? // jQuery's factory checks for a global window
					require('jquery') :
					require('jquery')( root );
			}

			return factory( $, root, root.document );
		};
	}
	else {
		// Browser
		factory( jQuery, window, document );
	}
}
(function( $, window, document, undefined ) {
	"use strict";

	/**
	 * DataTables is a plug-in for the jQuery Javascript library. It is a highly
	 * flexible tool, based upon the foundations of progressive enhancement,
	 * which will add advanced interaction controls to any HTML table. For a
	 * full list of features please refer to
	 * [DataTables.net](href="http://datatables.net).
	 *
	 * Note that the `DataTable` object is not a global variable but is aliased
	 * to `jQuery.fn.DataTable` and `jQuery.fn.dataTable` through which it may
	 * be  accessed.
	 *
	 *  @class
	 *  @param {object} [init={}] Configuration object for DataTables. Options
	 *    are defined by {@link DataTable.defaults}
	 *  @requires jQuery 1.7+
	 *
	 *  @example
	 *    // Basic initialisation
	 *    $(document).ready( function {
	 *      $('#example').dataTable();
	 *    } );
	 *
	 *  @example
	 *    // Initialisation with configuration options - in this case, disable
	 *    // pagination and sorting.
	 *    $(document).ready( function {
	 *      $('#example').dataTable( {
	 *        "paginate": false,
	 *        "sort": false
	 *      } );
	 *    } );
	 */
	var DataTable = function ( options )
	{
		/**
		 * Perform a jQuery selector action on the table's TR elements (from the tbody) and
		 * return the resulting jQuery object.
		 *  @param {string|node|jQuery} sSelector jQuery selector or node collection to act on
		 *  @param {object} [oOpts] Optional parameters for modifying the rows to be included
		 *  @param {string} [oOpts.filter=none] Select TR elements that meet the current filter
		 *    criterion ("applied") or all TR elements (i.e. no filter).
		 *  @param {string} [oOpts.order=current] Order of the TR elements in the processed array.
		 *    Can be either 'current', whereby the current sorting of the table is used, or
		 *    'original' whereby the original order the data was read into the table is used.
		 *  @param {string} [oOpts.page=all] Limit the selection to the currently displayed page
		 *    ("current") or not ("all"). If 'current' is given, then order is assumed to be
		 *    'current' and filter is 'applied', regardless of what they might be given as.
		 *  @returns {object} jQuery object, filtered by the given selector.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Highlight every second row
		 *      oTable.$('tr:odd').css('backgroundColor', 'blue');
		 *    } );
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Filter to rows with 'Webkit' in them, add a background colour and then
		 *      // remove the filter, thus highlighting the 'Webkit' rows only.
		 *      oTable.fnFilter('Webkit');
		 *      oTable.$('tr', {"search": "applied"}).css('backgroundColor', 'blue');
		 *      oTable.fnFilter('');
		 *    } );
		 */
		this.$ = function ( sSelector, oOpts )
		{
			return this.api(true).$( sSelector, oOpts );
		};
		
		
		/**
		 * Almost identical to $ in operation, but in this case returns the data for the matched
		 * rows - as such, the jQuery selector used should match TR row nodes or TD/TH cell nodes
		 * rather than any descendants, so the data can be obtained for the row/cell. If matching
		 * rows are found, the data returned is the original data array/object that was used to
		 * create the row (or a generated array if from a DOM source).
		 *
		 * This method is often useful in-combination with $ where both functions are given the
		 * same parameters and the array indexes will match identically.
		 *  @param {string|node|jQuery} sSelector jQuery selector or node collection to act on
		 *  @param {object} [oOpts] Optional parameters for modifying the rows to be included
		 *  @param {string} [oOpts.filter=none] Select elements that meet the current filter
		 *    criterion ("applied") or all elements (i.e. no filter).
		 *  @param {string} [oOpts.order=current] Order of the data in the processed array.
		 *    Can be either 'current', whereby the current sorting of the table is used, or
		 *    'original' whereby the original order the data was read into the table is used.
		 *  @param {string} [oOpts.page=all] Limit the selection to the currently displayed page
		 *    ("current") or not ("all"). If 'current' is given, then order is assumed to be
		 *    'current' and filter is 'applied', regardless of what they might be given as.
		 *  @returns {array} Data for the matched elements. If any elements, as a result of the
		 *    selector, were not TR, TD or TH elements in the DataTable, they will have a null
		 *    entry in the array.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Get the data from the first row in the table
		 *      var data = oTable._('tr:first');
		 *
		 *      // Do something useful with the data
		 *      alert( "First cell is: "+data[0] );
		 *    } );
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Filter to 'Webkit' and get all data for
		 *      oTable.fnFilter('Webkit');
		 *      var data = oTable._('tr', {"search": "applied"});
		 *
		 *      // Do something with the data
		 *      alert( data.length+" rows matched the search" );
		 *    } );
		 */
		this._ = function ( sSelector, oOpts )
		{
			return this.api(true).rows( sSelector, oOpts ).data();
		};
		
		
		/**
		 * Create a DataTables Api instance, with the currently selected tables for
		 * the Api's context.
		 * @param {boolean} [traditional=false] Set the API instance's context to be
		 *   only the table referred to by the `DataTable.ext.iApiIndex` option, as was
		 *   used in the API presented by DataTables 1.9- (i.e. the traditional mode),
		 *   or if all tables captured in the jQuery object should be used.
		 * @return {DataTables.Api}
		 */
		this.api = function ( traditional )
		{
			return traditional ?
				new _Api(
					_fnSettingsFromNode( this[ _ext.iApiIndex ] )
				) :
				new _Api( this );
		};
		
		
		/**
		 * Add a single new row or multiple rows of data to the table. Please note
		 * that this is suitable for client-side processing only - if you are using
		 * server-side processing (i.e. "bServerSide": true), then to add data, you
		 * must add it to the data source, i.e. the server-side, through an Ajax call.
		 *  @param {array|object} data The data to be added to the table. This can be:
		 *    <ul>
		 *      <li>1D array of data - add a single row with the data provided</li>
		 *      <li>2D array of arrays - add multiple rows in a single call</li>
		 *      <li>object - data object when using <i>mData</i></li>
		 *      <li>array of objects - multiple data objects when using <i>mData</i></li>
		 *    </ul>
		 *  @param {bool} [redraw=true] redraw the table or not
		 *  @returns {array} An array of integers, representing the list of indexes in
		 *    <i>aoData</i> ({@link DataTable.models.oSettings}) that have been added to
		 *    the table.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    // Global var for counter
		 *    var giCount = 2;
		 *
		 *    $(document).ready(function() {
		 *      $('#example').dataTable();
		 *    } );
		 *
		 *    function fnClickAddRow() {
		 *      $('#example').dataTable().fnAddData( [
		 *        giCount+".1",
		 *        giCount+".2",
		 *        giCount+".3",
		 *        giCount+".4" ]
		 *      );
		 *
		 *      giCount++;
		 *    }
		 */
		this.fnAddData = function( data, redraw )
		{
			var api = this.api( true );
		
			/* Check if we want to add multiple rows or not */
			var rows = $.isArray(data) && ( $.isArray(data[0]) || $.isPlainObject(data[0]) ) ?
				api.rows.add( data ) :
				api.row.add( data );
		
			if ( redraw === undefined || redraw ) {
				api.draw();
			}
		
			return rows.flatten().toArray();
		};
		
		
		/**
		 * This function will make DataTables recalculate the column sizes, based on the data
		 * contained in the table and the sizes applied to the columns (in the DOM, CSS or
		 * through the sWidth parameter). This can be useful when the width of the table's
		 * parent element changes (for example a window resize).
		 *  @param {boolean} [bRedraw=true] Redraw the table or not, you will typically want to
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable( {
		 *        "sScrollY": "200px",
		 *        "bPaginate": false
		 *      } );
		 *
		 *      $(window).on('resize', function () {
		 *        oTable.fnAdjustColumnSizing();
		 *      } );
		 *    } );
		 */
		this.fnAdjustColumnSizing = function ( bRedraw )
		{
			var api = this.api( true ).columns.adjust();
			var settings = api.settings()[0];
			var scroll = settings.oScroll;
		
			if ( bRedraw === undefined || bRedraw ) {
				api.draw( false );
			}
			else if ( scroll.sX !== "" || scroll.sY !== "" ) {
				/* If not redrawing, but scrolling, we want to apply the new column sizes anyway */
				_fnScrollDraw( settings );
			}
		};
		
		
		/**
		 * Quickly and simply clear a table
		 *  @param {bool} [bRedraw=true] redraw the table or not
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Immediately 'nuke' the current rows (perhaps waiting for an Ajax callback...)
		 *      oTable.fnClearTable();
		 *    } );
		 */
		this.fnClearTable = function( bRedraw )
		{
			var api = this.api( true ).clear();
		
			if ( bRedraw === undefined || bRedraw ) {
				api.draw();
			}
		};
		
		
		/**
		 * The exact opposite of 'opening' a row, this function will close any rows which
		 * are currently 'open'.
		 *  @param {node} nTr the table row to 'close'
		 *  @returns {int} 0 on success, or 1 if failed (can't find the row)
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable;
		 *
		 *      // 'open' an information row when a row is clicked on
		 *      $('#example tbody tr').click( function () {
		 *        if ( oTable.fnIsOpen(this) ) {
		 *          oTable.fnClose( this );
		 *        } else {
		 *          oTable.fnOpen( this, "Temporary row opened", "info_row" );
		 *        }
		 *      } );
		 *
		 *      oTable = $('#example').dataTable();
		 *    } );
		 */
		this.fnClose = function( nTr )
		{
			this.api( true ).row( nTr ).child.hide();
		};
		
		
		/**
		 * Remove a row for the table
		 *  @param {mixed} target The index of the row from aoData to be deleted, or
		 *    the TR element you want to delete
		 *  @param {function|null} [callBack] Callback function
		 *  @param {bool} [redraw=true] Redraw the table or not
		 *  @returns {array} The row that was deleted
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Immediately remove the first row
		 *      oTable.fnDeleteRow( 0 );
		 *    } );
		 */
		this.fnDeleteRow = function( target, callback, redraw )
		{
			var api = this.api( true );
			var rows = api.rows( target );
			var settings = rows.settings()[0];
			var data = settings.aoData[ rows[0][0] ];
		
			rows.remove();
		
			if ( callback ) {
				callback.call( this, settings, data );
			}
		
			if ( redraw === undefined || redraw ) {
				api.draw();
			}
		
			return data;
		};
		
		
		/**
		 * Restore the table to it's original state in the DOM by removing all of DataTables
		 * enhancements, alterations to the DOM structure of the table and event listeners.
		 *  @param {boolean} [remove=false] Completely remove the table from the DOM
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      // This example is fairly pointless in reality, but shows how fnDestroy can be used
		 *      var oTable = $('#example').dataTable();
		 *      oTable.fnDestroy();
		 *    } );
		 */
		this.fnDestroy = function ( remove )
		{
			this.api( true ).destroy( remove );
		};
		
		
		/**
		 * Redraw the table
		 *  @param {bool} [complete=true] Re-filter and resort (if enabled) the table before the draw.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Re-draw the table - you wouldn't want to do it here, but it's an example :-)
		 *      oTable.fnDraw();
		 *    } );
		 */
		this.fnDraw = function( complete )
		{
			// Note that this isn't an exact match to the old call to _fnDraw - it takes
			// into account the new data, but can hold position.
			this.api( true ).draw( complete );
		};
		
		
		/**
		 * Filter the input based on data
		 *  @param {string} sInput String to filter the table on
		 *  @param {int|null} [iColumn] Column to limit filtering to
		 *  @param {bool} [bRegex=false] Treat as regular expression or not
		 *  @param {bool} [bSmart=true] Perform smart filtering or not
		 *  @param {bool} [bShowGlobal=true] Show the input global filter in it's input box(es)
		 *  @param {bool} [bCaseInsensitive=true] Do case-insensitive matching (true) or not (false)
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Sometime later - filter...
		 *      oTable.fnFilter( 'test string' );
		 *    } );
		 */
		this.fnFilter = function( sInput, iColumn, bRegex, bSmart, bShowGlobal, bCaseInsensitive )
		{
			var api = this.api( true );
		
			if ( iColumn === null || iColumn === undefined ) {
				api.search( sInput, bRegex, bSmart, bCaseInsensitive );
			}
			else {
				api.column( iColumn ).search( sInput, bRegex, bSmart, bCaseInsensitive );
			}
		
			api.draw();
		};
		
		
		/**
		 * Get the data for the whole table, an individual row or an individual cell based on the
		 * provided parameters.
		 *  @param {int|node} [src] A TR row node, TD/TH cell node or an integer. If given as
		 *    a TR node then the data source for the whole row will be returned. If given as a
		 *    TD/TH cell node then iCol will be automatically calculated and the data for the
		 *    cell returned. If given as an integer, then this is treated as the aoData internal
		 *    data index for the row (see fnGetPosition) and the data for that row used.
		 *  @param {int} [col] Optional column index that you want the data of.
		 *  @returns {array|object|string} If mRow is undefined, then the data for all rows is
		 *    returned. If mRow is defined, just data for that row, and is iCol is
		 *    defined, only data for the designated cell is returned.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    // Row data
		 *    $(document).ready(function() {
		 *      oTable = $('#example').dataTable();
		 *
		 *      oTable.$('tr').click( function () {
		 *        var data = oTable.fnGetData( this );
		 *        // ... do something with the array / object of data for the row
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Individual cell data
		 *    $(document).ready(function() {
		 *      oTable = $('#example').dataTable();
		 *
		 *      oTable.$('td').click( function () {
		 *        var sData = oTable.fnGetData( this );
		 *        alert( 'The cell clicked on had the value of '+sData );
		 *      } );
		 *    } );
		 */
		this.fnGetData = function( src, col )
		{
			var api = this.api( true );
		
			if ( src !== undefined ) {
				var type = src.nodeName ? src.nodeName.toLowerCase() : '';
		
				return col !== undefined || type == 'td' || type == 'th' ?
					api.cell( src, col ).data() :
					api.row( src ).data() || null;
			}
		
			return api.data().toArray();
		};
		
		
		/**
		 * Get an array of the TR nodes that are used in the table's body. Note that you will
		 * typically want to use the '$' API method in preference to this as it is more
		 * flexible.
		 *  @param {int} [iRow] Optional row index for the TR element you want
		 *  @returns {array|node} If iRow is undefined, returns an array of all TR elements
		 *    in the table's body, or iRow is defined, just the TR element requested.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Get the nodes from the table
		 *      var nNodes = oTable.fnGetNodes( );
		 *    } );
		 */
		this.fnGetNodes = function( iRow )
		{
			var api = this.api( true );
		
			return iRow !== undefined ?
				api.row( iRow ).node() :
				api.rows().nodes().flatten().toArray();
		};
		
		
		/**
		 * Get the array indexes of a particular cell from it's DOM element
		 * and column index including hidden columns
		 *  @param {node} node this can either be a TR, TD or TH in the table's body
		 *  @returns {int} If nNode is given as a TR, then a single index is returned, or
		 *    if given as a cell, an array of [row index, column index (visible),
		 *    column index (all)] is given.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      $('#example tbody td').click( function () {
		 *        // Get the position of the current data from the node
		 *        var aPos = oTable.fnGetPosition( this );
		 *
		 *        // Get the data array for this row
		 *        var aData = oTable.fnGetData( aPos[0] );
		 *
		 *        // Update the data array and return the value
		 *        aData[ aPos[1] ] = 'clicked';
		 *        this.innerHTML = 'clicked';
		 *      } );
		 *
		 *      // Init DataTables
		 *      oTable = $('#example').dataTable();
		 *    } );
		 */
		this.fnGetPosition = function( node )
		{
			var api = this.api( true );
			var nodeName = node.nodeName.toUpperCase();
		
			if ( nodeName == 'TR' ) {
				return api.row( node ).index();
			}
			else if ( nodeName == 'TD' || nodeName == 'TH' ) {
				var cell = api.cell( node ).index();
		
				return [
					cell.row,
					cell.columnVisible,
					cell.column
				];
			}
			return null;
		};
		
		
		/**
		 * Check to see if a row is 'open' or not.
		 *  @param {node} nTr the table row to check
		 *  @returns {boolean} true if the row is currently open, false otherwise
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable;
		 *
		 *      // 'open' an information row when a row is clicked on
		 *      $('#example tbody tr').click( function () {
		 *        if ( oTable.fnIsOpen(this) ) {
		 *          oTable.fnClose( this );
		 *        } else {
		 *          oTable.fnOpen( this, "Temporary row opened", "info_row" );
		 *        }
		 *      } );
		 *
		 *      oTable = $('#example').dataTable();
		 *    } );
		 */
		this.fnIsOpen = function( nTr )
		{
			return this.api( true ).row( nTr ).child.isShown();
		};
		
		
		/**
		 * This function will place a new row directly after a row which is currently
		 * on display on the page, with the HTML contents that is passed into the
		 * function. This can be used, for example, to ask for confirmation that a
		 * particular record should be deleted.
		 *  @param {node} nTr The table row to 'open'
		 *  @param {string|node|jQuery} mHtml The HTML to put into the row
		 *  @param {string} sClass Class to give the new TD cell
		 *  @returns {node} The row opened. Note that if the table row passed in as the
		 *    first parameter, is not found in the table, this method will silently
		 *    return.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable;
		 *
		 *      // 'open' an information row when a row is clicked on
		 *      $('#example tbody tr').click( function () {
		 *        if ( oTable.fnIsOpen(this) ) {
		 *          oTable.fnClose( this );
		 *        } else {
		 *          oTable.fnOpen( this, "Temporary row opened", "info_row" );
		 *        }
		 *      } );
		 *
		 *      oTable = $('#example').dataTable();
		 *    } );
		 */
		this.fnOpen = function( nTr, mHtml, sClass )
		{
			return this.api( true )
				.row( nTr )
				.child( mHtml, sClass )
				.show()
				.child()[0];
		};
		
		
		/**
		 * Change the pagination - provides the internal logic for pagination in a simple API
		 * function. With this function you can have a DataTables table go to the next,
		 * previous, first or last pages.
		 *  @param {string|int} mAction Paging action to take: "first", "previous", "next" or "last"
		 *    or page number to jump to (integer), note that page 0 is the first page.
		 *  @param {bool} [bRedraw=true] Redraw the table or not
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *      oTable.fnPageChange( 'next' );
		 *    } );
		 */
		this.fnPageChange = function ( mAction, bRedraw )
		{
			var api = this.api( true ).page( mAction );
		
			if ( bRedraw === undefined || bRedraw ) {
				api.draw(false);
			}
		};
		
		
		/**
		 * Show a particular column
		 *  @param {int} iCol The column whose display should be changed
		 *  @param {bool} bShow Show (true) or hide (false) the column
		 *  @param {bool} [bRedraw=true] Redraw the table or not
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Hide the second column after initialisation
		 *      oTable.fnSetColumnVis( 1, false );
		 *    } );
		 */
		this.fnSetColumnVis = function ( iCol, bShow, bRedraw )
		{
			var api = this.api( true ).column( iCol ).visible( bShow );
		
			if ( bRedraw === undefined || bRedraw ) {
				api.columns.adjust().draw();
			}
		};
		
		
		/**
		 * Get the settings for a particular table for external manipulation
		 *  @returns {object} DataTables settings object. See
		 *    {@link DataTable.models.oSettings}
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *      var oSettings = oTable.fnSettings();
		 *
		 *      // Show an example parameter from the settings
		 *      alert( oSettings._iDisplayStart );
		 *    } );
		 */
		this.fnSettings = function()
		{
			return _fnSettingsFromNode( this[_ext.iApiIndex] );
		};
		
		
		/**
		 * Sort the table by a particular column
		 *  @param {int} iCol the data index to sort on. Note that this will not match the
		 *    'display index' if you have hidden data entries
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Sort immediately with columns 0 and 1
		 *      oTable.fnSort( [ [0,'asc'], [1,'asc'] ] );
		 *    } );
		 */
		this.fnSort = function( aaSort )
		{
			this.api( true ).order( aaSort ).draw();
		};
		
		
		/**
		 * Attach a sort listener to an element for a given column
		 *  @param {node} nNode the element to attach the sort listener to
		 *  @param {int} iColumn the column that a click on this node will sort on
		 *  @param {function} [fnCallback] callback function when sort is run
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Sort on column 1, when 'sorter' is clicked on
		 *      oTable.fnSortListener( document.getElementById('sorter'), 1 );
		 *    } );
		 */
		this.fnSortListener = function( nNode, iColumn, fnCallback )
		{
			this.api( true ).order.listener( nNode, iColumn, fnCallback );
		};
		
		
		/**
		 * Update a table cell or row - this method will accept either a single value to
		 * update the cell with, an array of values with one element for each column or
		 * an object in the same format as the original data source. The function is
		 * self-referencing in order to make the multi column updates easier.
		 *  @param {object|array|string} mData Data to update the cell/row with
		 *  @param {node|int} mRow TR element you want to update or the aoData index
		 *  @param {int} [iColumn] The column to update, give as null or undefined to
		 *    update a whole row.
		 *  @param {bool} [bRedraw=true] Redraw the table or not
		 *  @param {bool} [bAction=true] Perform pre-draw actions or not
		 *  @returns {int} 0 on success, 1 on error
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *      oTable.fnUpdate( 'Example update', 0, 0 ); // Single cell
		 *      oTable.fnUpdate( ['a', 'b', 'c', 'd', 'e'], $('tbody tr')[0] ); // Row
		 *    } );
		 */
		this.fnUpdate = function( mData, mRow, iColumn, bRedraw, bAction )
		{
			var api = this.api( true );
		
			if ( iColumn === undefined || iColumn === null ) {
				api.row( mRow ).data( mData );
			}
			else {
				api.cell( mRow, iColumn ).data( mData );
			}
		
			if ( bAction === undefined || bAction ) {
				api.columns.adjust();
			}
		
			if ( bRedraw === undefined || bRedraw ) {
				api.draw();
			}
			return 0;
		};
		
		
		/**
		 * Provide a common method for plug-ins to check the version of DataTables being used, in order
		 * to ensure compatibility.
		 *  @param {string} sVersion Version string to check for, in the format "X.Y.Z". Note that the
		 *    formats "X" and "X.Y" are also acceptable.
		 *  @returns {boolean} true if this version of DataTables is greater or equal to the required
		 *    version, or false if this version of DataTales is not suitable
		 *  @method
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *      alert( oTable.fnVersionCheck( '1.9.0' ) );
		 *    } );
		 */
		this.fnVersionCheck = _ext.fnVersionCheck;
		

		var _that = this;
		var emptyInit = options === undefined;
		var len = this.length;

		if ( emptyInit ) {
			options = {};
		}

		this.oApi = this.internal = _ext.internal;

		// Extend with old style plug-in API methods
		for ( var fn in DataTable.ext.internal ) {
			if ( fn ) {
				this[fn] = _fnExternApiFunc(fn);
			}
		}

		this.each(function() {
			// For each initialisation we want to give it a clean initialisation
			// object that can be bashed around
			var o = {};
			var oInit = len > 1 ? // optimisation for single table case
				_fnExtend( o, options, true ) :
				options;

			/*global oInit,_that,emptyInit*/
			var i=0, iLen, j, jLen, k, kLen;
			var sId = this.getAttribute( 'id' );
			var bInitHandedOff = false;
			var defaults = DataTable.defaults;
			var $this = $(this);
			
			
			/* Sanity check */
			if ( this.nodeName.toLowerCase() != 'table' )
			{
				_fnLog( null, 0, 'Non-table node initialisation ('+this.nodeName+')', 2 );
				return;
			}
			
			/* Backwards compatibility for the defaults */
			_fnCompatOpts( defaults );
			_fnCompatCols( defaults.column );
			
			/* Convert the camel-case defaults to Hungarian */
			_fnCamelToHungarian( defaults, defaults, true );
			_fnCamelToHungarian( defaults.column, defaults.column, true );
			
			/* Setting up the initialisation object */
			_fnCamelToHungarian( defaults, $.extend( oInit, $this.data() ) );
			
			
			
			/* Check to see if we are re-initialising a table */
			var allSettings = DataTable.settings;
			for ( i=0, iLen=allSettings.length ; i<iLen ; i++ )
			{
				var s = allSettings[i];
			
				/* Base check on table node */
				if ( s.nTable == this || s.nTHead.parentNode == this || (s.nTFoot && s.nTFoot.parentNode == this) )
				{
					var bRetrieve = oInit.bRetrieve !== undefined ? oInit.bRetrieve : defaults.bRetrieve;
					var bDestroy = oInit.bDestroy !== undefined ? oInit.bDestroy : defaults.bDestroy;
			
					if ( emptyInit || bRetrieve )
					{
						return s.oInstance;
					}
					else if ( bDestroy )
					{
						s.oInstance.fnDestroy();
						break;
					}
					else
					{
						_fnLog( s, 0, 'Cannot reinitialise DataTable', 3 );
						return;
					}
				}
			
				/* If the element we are initialising has the same ID as a table which was previously
				 * initialised, but the table nodes don't match (from before) then we destroy the old
				 * instance by simply deleting it. This is under the assumption that the table has been
				 * destroyed by other methods. Anyone using non-id selectors will need to do this manually
				 */
				if ( s.sTableId == this.id )
				{
					allSettings.splice( i, 1 );
					break;
				}
			}
			
			/* Ensure the table has an ID - required for accessibility */
			if ( sId === null || sId === "" )
			{
				sId = "DataTables_Table_"+(DataTable.ext._unique++);
				this.id = sId;
			}
			
			/* Create the settings object for this table and set some of the default parameters */
			var oSettings = $.extend( true, {}, DataTable.models.oSettings, {
				"sDestroyWidth": $this[0].style.width,
				"sInstance":     sId,
				"sTableId":      sId
			} );
			oSettings.nTable = this;
			oSettings.oApi   = _that.internal;
			oSettings.oInit  = oInit;
			
			allSettings.push( oSettings );
			
			// Need to add the instance after the instance after the settings object has been added
			// to the settings array, so we can self reference the table instance if more than one
			oSettings.oInstance = (_that.length===1) ? _that : $this.dataTable();
			
			// Backwards compatibility, before we apply all the defaults
			_fnCompatOpts( oInit );
			
			if ( oInit.oLanguage )
			{
				_fnLanguageCompat( oInit.oLanguage );
			}
			
			// If the length menu is given, but the init display length is not, use the length menu
			if ( oInit.aLengthMenu && ! oInit.iDisplayLength )
			{
				oInit.iDisplayLength = $.isArray( oInit.aLengthMenu[0] ) ?
					oInit.aLengthMenu[0][0] : oInit.aLengthMenu[0];
			}
			
			// Apply the defaults and init options to make a single init object will all
			// options defined from defaults and instance options.
			oInit = _fnExtend( $.extend( true, {}, defaults ), oInit );
			
			
			// Map the initialisation options onto the settings object
			_fnMap( oSettings.oFeatures, oInit, [
				"bPaginate",
				"bLengthChange",
				"bFilter",
				"bSort",
				"bSortMulti",
				"bInfo",
				"bProcessing",
				"bAutoWidth",
				"bSortClasses",
				"bServerSide",
				"bDeferRender"
			] );
			_fnMap( oSettings, oInit, [
				"asStripeClasses",
				"ajax",
				"fnServerData",
				"fnFormatNumber",
				"sServerMethod",
				"aaSorting",
				"aaSortingFixed",
				"aLengthMenu",
				"sPaginationType",
				"sAjaxSource",
				"sAjaxDataProp",
				"iStateDuration",
				"sDom",
				"bSortCellsTop",
				"iTabIndex",
				"fnStateLoadCallback",
				"fnStateSaveCallback",
				"renderer",
				"searchDelay",
				"rowId",
				[ "iCookieDuration", "iStateDuration" ], // backwards compat
				[ "oSearch", "oPreviousSearch" ],
				[ "aoSearchCols", "aoPreSearchCols" ],
				[ "iDisplayLength", "_iDisplayLength" ]
			] );
			_fnMap( oSettings.oScroll, oInit, [
				[ "sScrollX", "sX" ],
				[ "sScrollXInner", "sXInner" ],
				[ "sScrollY", "sY" ],
				[ "bScrollCollapse", "bCollapse" ]
			] );
			_fnMap( oSettings.oLanguage, oInit, "fnInfoCallback" );
			
			/* Callback functions which are array driven */
			_fnCallbackReg( oSettings, 'aoDrawCallback',       oInit.fnDrawCallback,      'user' );
			_fnCallbackReg( oSettings, 'aoServerParams',       oInit.fnServerParams,      'user' );
			_fnCallbackReg( oSettings, 'aoStateSaveParams',    oInit.fnStateSaveParams,   'user' );
			_fnCallbackReg( oSettings, 'aoStateLoadParams',    oInit.fnStateLoadParams,   'user' );
			_fnCallbackReg( oSettings, 'aoStateLoaded',        oInit.fnStateLoaded,       'user' );
			_fnCallbackReg( oSettings, 'aoRowCallback',        oInit.fnRowCallback,       'user' );
			_fnCallbackReg( oSettings, 'aoRowCreatedCallback', oInit.fnCreatedRow,        'user' );
			_fnCallbackReg( oSettings, 'aoHeaderCallback',     oInit.fnHeaderCallback,    'user' );
			_fnCallbackReg( oSettings, 'aoFooterCallback',     oInit.fnFooterCallback,    'user' );
			_fnCallbackReg( oSettings, 'aoInitComplete',       oInit.fnInitComplete,      'user' );
			_fnCallbackReg( oSettings, 'aoPreDrawCallback',    oInit.fnPreDrawCallback,   'user' );
			
			oSettings.rowIdFn = _fnGetObjectDataFn( oInit.rowId );
			
			/* Browser support detection */
			_fnBrowserDetect( oSettings );
			
			var oClasses = oSettings.oClasses;
			
			$.extend( oClasses, DataTable.ext.classes, oInit.oClasses );
			$this.addClass( oClasses.sTable );
			
			
			if ( oSettings.iInitDisplayStart === undefined )
			{
				/* Display start point, taking into account the save saving */
				oSettings.iInitDisplayStart = oInit.iDisplayStart;
				oSettings._iDisplayStart = oInit.iDisplayStart;
			}
			
			if ( oInit.iDeferLoading !== null )
			{
				oSettings.bDeferLoading = true;
				var tmp = $.isArray( oInit.iDeferLoading );
				oSettings._iRecordsDisplay = tmp ? oInit.iDeferLoading[0] : oInit.iDeferLoading;
				oSettings._iRecordsTotal = tmp ? oInit.iDeferLoading[1] : oInit.iDeferLoading;
			}
			
			/* Language definitions */
			var oLanguage = oSettings.oLanguage;
			$.extend( true, oLanguage, oInit.oLanguage );
			
			if ( oLanguage.sUrl )
			{
				/* Get the language definitions from a file - because this Ajax call makes the language
				 * get async to the remainder of this function we use bInitHandedOff to indicate that
				 * _fnInitialise will be fired by the returned Ajax handler, rather than the constructor
				 */
				$.ajax( {
					dataType: 'json',
					url: oLanguage.sUrl,
					success: function ( json ) {
						_fnLanguageCompat( json );
						_fnCamelToHungarian( defaults.oLanguage, json );
						$.extend( true, oLanguage, json );
						_fnInitialise( oSettings );
					},
					error: function () {
						// Error occurred loading language file, continue on as best we can
						_fnInitialise( oSettings );
					}
				} );
				bInitHandedOff = true;
			}
			
			/*
			 * Stripes
			 */
			if ( oInit.asStripeClasses === null )
			{
				oSettings.asStripeClasses =[
					oClasses.sStripeOdd,
					oClasses.sStripeEven
				];
			}
			
			/* Remove row stripe classes if they are already on the table row */
			var stripeClasses = oSettings.asStripeClasses;
			var rowOne = $this.children('tbody').find('tr').eq(0);
			if ( $.inArray( true, $.map( stripeClasses, function(el, i) {
				return rowOne.hasClass(el);
			} ) ) !== -1 ) {
				$('tbody tr', this).removeClass( stripeClasses.join(' ') );
				oSettings.asDestroyStripes = stripeClasses.slice();
			}
			
			/*
			 * Columns
			 * See if we should load columns automatically or use defined ones
			 */
			var anThs = [];
			var aoColumnsInit;
			var nThead = this.getElementsByTagName('thead');
			if ( nThead.length !== 0 )
			{
				_fnDetectHeader( oSettings.aoHeader, nThead[0] );
				anThs = _fnGetUniqueThs( oSettings );
			}
			
			/* If not given a column array, generate one with nulls */
			if ( oInit.aoColumns === null )
			{
				aoColumnsInit = [];
				for ( i=0, iLen=anThs.length ; i<iLen ; i++ )
				{
					aoColumnsInit.push( null );
				}
			}
			else
			{
				aoColumnsInit = oInit.aoColumns;
			}
			
			/* Add the columns */
			for ( i=0, iLen=aoColumnsInit.length ; i<iLen ; i++ )
			{
				_fnAddColumn( oSettings, anThs ? anThs[i] : null );
			}
			
			/* Apply the column definitions */
			_fnApplyColumnDefs( oSettings, oInit.aoColumnDefs, aoColumnsInit, function (iCol, oDef) {
				_fnColumnOptions( oSettings, iCol, oDef );
			} );
			
			/* HTML5 attribute detection - build an mData object automatically if the
			 * attributes are found
			 */
			if ( rowOne.length ) {
				var a = function ( cell, name ) {
					return cell.getAttribute( 'data-'+name ) !== null ? name : null;
				};
			
				$( rowOne[0] ).children('th, td').each( function (i, cell) {
					var col = oSettings.aoColumns[i];
			
					if ( col.mData === i ) {
						var sort = a( cell, 'sort' ) || a( cell, 'order' );
						var filter = a( cell, 'filter' ) || a( cell, 'search' );
			
						if ( sort !== null || filter !== null ) {
							col.mData = {
								_:      i+'.display',
								sort:   sort !== null   ? i+'.@data-'+sort   : undefined,
								type:   sort !== null   ? i+'.@data-'+sort   : undefined,
								filter: filter !== null ? i+'.@data-'+filter : undefined
							};
			
							_fnColumnOptions( oSettings, i );
						}
					}
				} );
			}
			
			var features = oSettings.oFeatures;
			var loadedInit = function () {
				/*
				 * Sorting
				 * @todo For modularisation (1.11) this needs to do into a sort start up handler
				 */
			
				// If aaSorting is not defined, then we use the first indicator in asSorting
				// in case that has been altered, so the default sort reflects that option
				if ( oInit.aaSorting === undefined ) {
					var sorting = oSettings.aaSorting;
					for ( i=0, iLen=sorting.length ; i<iLen ; i++ ) {
						sorting[i][1] = oSettings.aoColumns[ i ].asSorting[0];
					}
				}
			
				/* Do a first pass on the sorting classes (allows any size changes to be taken into
				 * account, and also will apply sorting disabled classes if disabled
				 */
				_fnSortingClasses( oSettings );
			
				if ( features.bSort ) {
					_fnCallbackReg( oSettings, 'aoDrawCallback', function () {
						if ( oSettings.bSorted ) {
							var aSort = _fnSortFlatten( oSettings );
							var sortedColumns = {};
			
							$.each( aSort, function (i, val) {
								sortedColumns[ val.src ] = val.dir;
							} );
			
							_fnCallbackFire( oSettings, null, 'order', [oSettings, aSort, sortedColumns] );
							_fnSortAria( oSettings );
						}
					} );
				}
			
				_fnCallbackReg( oSettings, 'aoDrawCallback', function () {
					if ( oSettings.bSorted || _fnDataSource( oSettings ) === 'ssp' || features.bDeferRender ) {
						_fnSortingClasses( oSettings );
					}
				}, 'sc' );
			
			
				/*
				 * Final init
				 * Cache the header, body and footer as required, creating them if needed
				 */
			
				// Work around for Webkit bug 83867 - store the caption-side before removing from doc
				var captions = $this.children('caption').each( function () {
					this._captionSide = $(this).css('caption-side');
				} );
			
				var thead = $this.children('thead');
				if ( thead.length === 0 ) {
					thead = $('<thead/>').appendTo($this);
				}
				oSettings.nTHead = thead[0];
			
				var tbody = $this.children('tbody');
				if ( tbody.length === 0 ) {
					tbody = $('<tbody/>').appendTo($this);
				}
				oSettings.nTBody = tbody[0];
			
				var tfoot = $this.children('tfoot');
				if ( tfoot.length === 0 && captions.length > 0 && (oSettings.oScroll.sX !== "" || oSettings.oScroll.sY !== "") ) {
					// If we are a scrolling table, and no footer has been given, then we need to create
					// a tfoot element for the caption element to be appended to
					tfoot = $('<tfoot/>').appendTo($this);
				}
			
				if ( tfoot.length === 0 || tfoot.children().length === 0 ) {
					$this.addClass( oClasses.sNoFooter );
				}
				else if ( tfoot.length > 0 ) {
					oSettings.nTFoot = tfoot[0];
					_fnDetectHeader( oSettings.aoFooter, oSettings.nTFoot );
				}
			
				/* Check if there is data passing into the constructor */
				if ( oInit.aaData ) {
					for ( i=0 ; i<oInit.aaData.length ; i++ ) {
						_fnAddData( oSettings, oInit.aaData[ i ] );
					}
				}
				else if ( oSettings.bDeferLoading || _fnDataSource( oSettings ) == 'dom' ) {
					/* Grab the data from the page - only do this when deferred loading or no Ajax
					 * source since there is no point in reading the DOM data if we are then going
					 * to replace it with Ajax data
					 */
					_fnAddTr( oSettings, $(oSettings.nTBody).children('tr') );
				}
			
				/* Copy the data index array */
				oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
			
				/* Initialisation complete - table can be drawn */
				oSettings.bInitialised = true;
			
				/* Check if we need to initialise the table (it might not have been handed off to the
				 * language processor)
				 */
				if ( bInitHandedOff === false ) {
					_fnInitialise( oSettings );
				}
			};
			
			/* Must be done after everything which can be overridden by the state saving! */
			if ( oInit.bStateSave )
			{
				features.bStateSave = true;
				_fnCallbackReg( oSettings, 'aoDrawCallback', _fnSaveState, 'state_save' );
				_fnLoadState( oSettings, oInit, loadedInit );
			}
			else {
				loadedInit();
			}
			
		} );
		_that = null;
		return this;
	};

	
	/*
	 * It is useful to have variables which are scoped locally so only the
	 * DataTables functions can access them and they don't leak into global space.
	 * At the same time these functions are often useful over multiple files in the
	 * core and API, so we list, or at least document, all variables which are used
	 * by DataTables as private variables here. This also ensures that there is no
	 * clashing of variable names and that they can easily referenced for reuse.
	 */
	
	
	// Defined else where
	//  _selector_run
	//  _selector_opts
	//  _selector_first
	//  _selector_row_indexes
	
	var _ext; // DataTable.ext
	var _Api; // DataTable.Api
	var _api_register; // DataTable.Api.register
	var _api_registerPlural; // DataTable.Api.registerPlural
	
	var _re_dic = {};
	var _re_new_lines = /[\r\n]/g;
	var _re_html = /<.*?>/g;
	
	// This is not strict ISO8601 - Date.parse() is quite lax, although
	// implementations differ between browsers.
	var _re_date = /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/;
	
	// Escape regular expression special characters
	var _re_escape_regex = new RegExp( '(\\' + [ '/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\', '$', '^', '-' ].join('|\\') + ')', 'g' );
	
	// http://en.wikipedia.org/wiki/Foreign_exchange_market
	// - \u20BD - Russian ruble.
	// - \u20a9 - South Korean Won
	// - \u20BA - Turkish Lira
	// - \u20B9 - Indian Rupee
	// - R - Brazil (R$) and South Africa
	// - fr - Swiss Franc
	// - kr - Swedish krona, Norwegian krone and Danish krone
	// - \u2009 is thin space and \u202F is narrow no-break space, both used in many
	//   standards as thousands separators.
	var _re_formatted_numeric = /[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi;
	
	
	var _empty = function ( d ) {
		return !d || d === true || d === '-' ? true : false;
	};
	
	
	var _intVal = function ( s ) {
		var integer = parseInt( s, 10 );
		return !isNaN(integer) && isFinite(s) ? integer : null;
	};
	
	// Convert from a formatted number with characters other than `.` as the
	// decimal place, to a Javascript number
	var _numToDecimal = function ( num, decimalPoint ) {
		// Cache created regular expressions for speed as this function is called often
		if ( ! _re_dic[ decimalPoint ] ) {
			_re_dic[ decimalPoint ] = new RegExp( _fnEscapeRegex( decimalPoint ), 'g' );
		}
		return typeof num === 'string' && decimalPoint !== '.' ?
			num.replace( /\./g, '' ).replace( _re_dic[ decimalPoint ], '.' ) :
			num;
	};
	
	
	var _isNumber = function ( d, decimalPoint, formatted ) {
		var strType = typeof d === 'string';
	
		// If empty return immediately so there must be a number if it is a
		// formatted string (this stops the string "k", or "kr", etc being detected
		// as a formatted number for currency
		if ( _empty( d ) ) {
			return true;
		}
	
		if ( decimalPoint && strType ) {
			d = _numToDecimal( d, decimalPoint );
		}
	
		if ( formatted && strType ) {
			d = d.replace( _re_formatted_numeric, '' );
		}
	
		return !isNaN( parseFloat(d) ) && isFinite( d );
	};
	
	
	// A string without HTML in it can be considered to be HTML still
	var _isHtml = function ( d ) {
		return _empty( d ) || typeof d === 'string';
	};
	
	
	var _htmlNumeric = function ( d, decimalPoint, formatted ) {
		if ( _empty( d ) ) {
			return true;
		}
	
		var html = _isHtml( d );
		return ! html ?
			null :
			_isNumber( _stripHtml( d ), decimalPoint, formatted ) ?
				true :
				null;
	};
	
	
	var _pluck = function ( a, prop, prop2 ) {
		var out = [];
		var i=0, ien=a.length;
	
		// Could have the test in the loop for slightly smaller code, but speed
		// is essential here
		if ( prop2 !== undefined ) {
			for ( ; i<ien ; i++ ) {
				if ( a[i] && a[i][ prop ] ) {
					out.push( a[i][ prop ][ prop2 ] );
				}
			}
		}
		else {
			for ( ; i<ien ; i++ ) {
				if ( a[i] ) {
					out.push( a[i][ prop ] );
				}
			}
		}
	
		return out;
	};
	
	
	// Basically the same as _pluck, but rather than looping over `a` we use `order`
	// as the indexes to pick from `a`
	var _pluck_order = function ( a, order, prop, prop2 )
	{
		var out = [];
		var i=0, ien=order.length;
	
		// Could have the test in the loop for slightly smaller code, but speed
		// is essential here
		if ( prop2 !== undefined ) {
			for ( ; i<ien ; i++ ) {
				if ( a[ order[i] ][ prop ] ) {
					out.push( a[ order[i] ][ prop ][ prop2 ] );
				}
			}
		}
		else {
			for ( ; i<ien ; i++ ) {
				out.push( a[ order[i] ][ prop ] );
			}
		}
	
		return out;
	};
	
	
	var _range = function ( len, start )
	{
		var out = [];
		var end;
	
		if ( start === undefined ) {
			start = 0;
			end = len;
		}
		else {
			end = start;
			start = len;
		}
	
		for ( var i=start ; i<end ; i++ ) {
			out.push( i );
		}
	
		return out;
	};
	
	
	var _removeEmpty = function ( a )
	{
		var out = [];
	
		for ( var i=0, ien=a.length ; i<ien ; i++ ) {
			if ( a[i] ) { // careful - will remove all falsy values!
				out.push( a[i] );
			}
		}
	
		return out;
	};
	
	
	var _stripHtml = function ( d ) {
		return d.replace( _re_html, '' );
	};
	
	
	/**
	 * Determine if all values in the array are unique. This means we can short
	 * cut the _unique method at the cost of a single loop. A sorted array is used
	 * to easily check the values.
	 *
	 * @param  {array} src Source array
	 * @return {boolean} true if all unique, false otherwise
	 * @ignore
	 */
	var _areAllUnique = function ( src ) {
		if ( src.length < 2 ) {
			return true;
		}
	
		var sorted = src.slice().sort();
		var last = sorted[0];
	
		for ( var i=1, ien=sorted.length ; i<ien ; i++ ) {
			if ( sorted[i] === last ) {
				return false;
			}
	
			last = sorted[i];
		}
	
		return true;
	};
	
	
	/**
	 * Find the unique elements in a source array.
	 *
	 * @param  {array} src Source array
	 * @return {array} Array of unique items
	 * @ignore
	 */
	var _unique = function ( src )
	{
		if ( _areAllUnique( src ) ) {
			return src.slice();
		}
	
		// A faster unique method is to use object keys to identify used values,
		// but this doesn't work with arrays or objects, which we must also
		// consider. See jsperf.com/compare-array-unique-versions/4 for more
		// information.
		var
			out = [],
			val,
			i, ien=src.length,
			j, k=0;
	
		again: for ( i=0 ; i<ien ; i++ ) {
			val = src[i];
	
			for ( j=0 ; j<k ; j++ ) {
				if ( out[j] === val ) {
					continue again;
				}
			}
	
			out.push( val );
			k++;
		}
	
		return out;
	};
	
	
	/**
	 * DataTables utility methods
	 * 
	 * This namespace provides helper methods that DataTables uses internally to
	 * create a DataTable, but which are not exclusively used only for DataTables.
	 * These methods can be used by extension authors to save the duplication of
	 * code.
	 *
	 *  @namespace
	 */
	DataTable.util = {
		/**
		 * Throttle the calls to a function. Arguments and context are maintained
		 * for the throttled function.
		 *
		 * @param {function} fn Function to be called
		 * @param {integer} freq Call frequency in mS
		 * @return {function} Wrapped function
		 */
		throttle: function ( fn, freq ) {
			var
				frequency = freq !== undefined ? freq : 200,
				last,
				timer;
	
			return function () {
				var
					that = this,
					now  = +new Date(),
					args = arguments;
	
				if ( last && now < last + frequency ) {
					clearTimeout( timer );
	
					timer = setTimeout( function () {
						last = undefined;
						fn.apply( that, args );
					}, frequency );
				}
				else {
					last = now;
					fn.apply( that, args );
				}
			};
		},
	
	
		/**
		 * Escape a string such that it can be used in a regular expression
		 *
		 *  @param {string} val string to escape
		 *  @returns {string} escaped string
		 */
		escapeRegex: function ( val ) {
			return val.replace( _re_escape_regex, '\\$1' );
		}
	};
	
	
	
	/**
	 * Create a mapping object that allows camel case parameters to be looked up
	 * for their Hungarian counterparts. The mapping is stored in a private
	 * parameter called `_hungarianMap` which can be accessed on the source object.
	 *  @param {object} o
	 *  @memberof DataTable#oApi
	 */
	function _fnHungarianMap ( o )
	{
		var
			hungarian = 'a aa ai ao as b fn i m o s ',
			match,
			newKey,
			map = {};
	
		$.each( o, function (key, val) {
			match = key.match(/^([^A-Z]+?)([A-Z])/);
	
			if ( match && hungarian.indexOf(match[1]+' ') !== -1 )
			{
				newKey = key.replace( match[0], match[2].toLowerCase() );
				map[ newKey ] = key;
	
				if ( match[1] === 'o' )
				{
					_fnHungarianMap( o[key] );
				}
			}
		} );
	
		o._hungarianMap = map;
	}
	
	
	/**
	 * Convert from camel case parameters to Hungarian, based on a Hungarian map
	 * created by _fnHungarianMap.
	 *  @param {object} src The model object which holds all parameters that can be
	 *    mapped.
	 *  @param {object} user The object to convert from camel case to Hungarian.
	 *  @param {boolean} force When set to `true`, properties which already have a
	 *    Hungarian value in the `user` object will be overwritten. Otherwise they
	 *    won't be.
	 *  @memberof DataTable#oApi
	 */
	function _fnCamelToHungarian ( src, user, force )
	{
		if ( ! src._hungarianMap ) {
			_fnHungarianMap( src );
		}
	
		var hungarianKey;
	
		$.each( user, function (key, val) {
			hungarianKey = src._hungarianMap[ key ];
	
			if ( hungarianKey !== undefined && (force || user[hungarianKey] === undefined) )
			{
				// For objects, we need to buzz down into the object to copy parameters
				if ( hungarianKey.charAt(0) === 'o' )
				{
					// Copy the camelCase options over to the hungarian
					if ( ! user[ hungarianKey ] ) {
						user[ hungarianKey ] = {};
					}
					$.extend( true, user[hungarianKey], user[key] );
	
					_fnCamelToHungarian( src[hungarianKey], user[hungarianKey], force );
				}
				else {
					user[hungarianKey] = user[ key ];
				}
			}
		} );
	}
	
	
	/**
	 * Language compatibility - when certain options are given, and others aren't, we
	 * need to duplicate the values over, in order to provide backwards compatibility
	 * with older language files.
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnLanguageCompat( lang )
	{
		var defaults = DataTable.defaults.oLanguage;
		var zeroRecords = lang.sZeroRecords;
	
		/* Backwards compatibility - if there is no sEmptyTable given, then use the same as
		 * sZeroRecords - assuming that is given.
		 */
		if ( ! lang.sEmptyTable && zeroRecords &&
			defaults.sEmptyTable === "No data available in table" )
		{
			_fnMap( lang, lang, 'sZeroRecords', 'sEmptyTable' );
		}
	
		/* Likewise with loading records */
		if ( ! lang.sLoadingRecords && zeroRecords &&
			defaults.sLoadingRecords === "Loading..." )
		{
			_fnMap( lang, lang, 'sZeroRecords', 'sLoadingRecords' );
		}
	
		// Old parameter name of the thousands separator mapped onto the new
		if ( lang.sInfoThousands ) {
			lang.sThousands = lang.sInfoThousands;
		}
	
		var decimal = lang.sDecimal;
		if ( decimal ) {
			_addNumericSort( decimal );
		}
	}
	
	
	/**
	 * Map one parameter onto another
	 *  @param {object} o Object to map
	 *  @param {*} knew The new parameter name
	 *  @param {*} old The old parameter name
	 */
	var _fnCompatMap = function ( o, knew, old ) {
		if ( o[ knew ] !== undefined ) {
			o[ old ] = o[ knew ];
		}
	};
	
	
	/**
	 * Provide backwards compatibility for the main DT options. Note that the new
	 * options are mapped onto the old parameters, so this is an external interface
	 * change only.
	 *  @param {object} init Object to map
	 */
	function _fnCompatOpts ( init )
	{
		_fnCompatMap( init, 'ordering',      'bSort' );
		_fnCompatMap( init, 'orderMulti',    'bSortMulti' );
		_fnCompatMap( init, 'orderClasses',  'bSortClasses' );
		_fnCompatMap( init, 'orderCellsTop', 'bSortCellsTop' );
		_fnCompatMap( init, 'order',         'aaSorting' );
		_fnCompatMap( init, 'orderFixed',    'aaSortingFixed' );
		_fnCompatMap( init, 'paging',        'bPaginate' );
		_fnCompatMap( init, 'pagingType',    'sPaginationType' );
		_fnCompatMap( init, 'pageLength',    'iDisplayLength' );
		_fnCompatMap( init, 'searching',     'bFilter' );
	
		// Boolean initialisation of x-scrolling
		if ( typeof init.sScrollX === 'boolean' ) {
			init.sScrollX = init.sScrollX ? '100%' : '';
		}
		if ( typeof init.scrollX === 'boolean' ) {
			init.scrollX = init.scrollX ? '100%' : '';
		}
	
		// Column search objects are in an array, so it needs to be converted
		// element by element
		var searchCols = init.aoSearchCols;
	
		if ( searchCols ) {
			for ( var i=0, ien=searchCols.length ; i<ien ; i++ ) {
				if ( searchCols[i] ) {
					_fnCamelToHungarian( DataTable.models.oSearch, searchCols[i] );
				}
			}
		}
	}
	
	
	/**
	 * Provide backwards compatibility for column options. Note that the new options
	 * are mapped onto the old parameters, so this is an external interface change
	 * only.
	 *  @param {object} init Object to map
	 */
	function _fnCompatCols ( init )
	{
		_fnCompatMap( init, 'orderable',     'bSortable' );
		_fnCompatMap( init, 'orderData',     'aDataSort' );
		_fnCompatMap( init, 'orderSequence', 'asSorting' );
		_fnCompatMap( init, 'orderDataType', 'sortDataType' );
	
		// orderData can be given as an integer
		var dataSort = init.aDataSort;
		if ( typeof dataSort === 'number' && ! $.isArray( dataSort ) ) {
			init.aDataSort = [ dataSort ];
		}
	}
	
	
	/**
	 * Browser feature detection for capabilities, quirks
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnBrowserDetect( settings )
	{
		// We don't need to do this every time DataTables is constructed, the values
		// calculated are specific to the browser and OS configuration which we
		// don't expect to change between initialisations
		if ( ! DataTable.__browser ) {
			var browser = {};
			DataTable.__browser = browser;
	
			// Scrolling feature / quirks detection
			var n = $('<div/>')
				.css( {
					position: 'fixed',
					top: 0,
					left: $(window).scrollLeft()*-1, // allow for scrolling
					height: 1,
					width: 1,
					overflow: 'hidden'
				} )
				.append(
					$('<div/>')
						.css( {
							position: 'absolute',
							top: 1,
							left: 1,
							width: 100,
							overflow: 'scroll'
						} )
						.append(
							$('<div/>')
								.css( {
									width: '100%',
									height: 10
								} )
						)
				)
				.appendTo( 'body' );
	
			var outer = n.children();
			var inner = outer.children();
	
			// Numbers below, in order, are:
			// inner.offsetWidth, inner.clientWidth, outer.offsetWidth, outer.clientWidth
			//
			// IE6 XP:                           100 100 100  83
			// IE7 Vista:                        100 100 100  83
			// IE 8+ Windows:                     83  83 100  83
			// Evergreen Windows:                 83  83 100  83
			// Evergreen Mac with scrollbars:     85  85 100  85
			// Evergreen Mac without scrollbars: 100 100 100 100
	
			// Get scrollbar width
			browser.barWidth = outer[0].offsetWidth - outer[0].clientWidth;
	
			// IE6/7 will oversize a width 100% element inside a scrolling element, to
			// include the width of the scrollbar, while other browsers ensure the inner
			// element is contained without forcing scrolling
			browser.bScrollOversize = inner[0].offsetWidth === 100 && outer[0].clientWidth !== 100;
	
			// In rtl text layout, some browsers (most, but not all) will place the
			// scrollbar on the left, rather than the right.
			browser.bScrollbarLeft = Math.round( inner.offset().left ) !== 1;
	
			// IE8- don't provide height and width for getBoundingClientRect
			browser.bBounding = n[0].getBoundingClientRect().width ? true : false;
	
			n.remove();
		}
	
		$.extend( settings.oBrowser, DataTable.__browser );
		settings.oScroll.iBarWidth = DataTable.__browser.barWidth;
	}
	
	
	/**
	 * Array.prototype reduce[Right] method, used for browsers which don't support
	 * JS 1.6. Done this way to reduce code size, since we iterate either way
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnReduce ( that, fn, init, start, end, inc )
	{
		var
			i = start,
			value,
			isSet = false;
	
		if ( init !== undefined ) {
			value = init;
			isSet = true;
		}
	
		while ( i !== end ) {
			if ( ! that.hasOwnProperty(i) ) {
				continue;
			}
	
			value = isSet ?
				fn( value, that[i], i, that ) :
				that[i];
	
			isSet = true;
			i += inc;
		}
	
		return value;
	}
	
	/**
	 * Add a column to the list used for the table with default values
	 *  @param {object} oSettings dataTables settings object
	 *  @param {node} nTh The th element for this column
	 *  @memberof DataTable#oApi
	 */
	function _fnAddColumn( oSettings, nTh )
	{
		// Add column to aoColumns array
		var oDefaults = DataTable.defaults.column;
		var iCol = oSettings.aoColumns.length;
		var oCol = $.extend( {}, DataTable.models.oColumn, oDefaults, {
			"nTh": nTh ? nTh : document.createElement('th'),
			"sTitle":    oDefaults.sTitle    ? oDefaults.sTitle    : nTh ? nTh.innerHTML : '',
			"aDataSort": oDefaults.aDataSort ? oDefaults.aDataSort : [iCol],
			"mData": oDefaults.mData ? oDefaults.mData : iCol,
			idx: iCol
		} );
		oSettings.aoColumns.push( oCol );
	
		// Add search object for column specific search. Note that the `searchCols[ iCol ]`
		// passed into extend can be undefined. This allows the user to give a default
		// with only some of the parameters defined, and also not give a default
		var searchCols = oSettings.aoPreSearchCols;
		searchCols[ iCol ] = $.extend( {}, DataTable.models.oSearch, searchCols[ iCol ] );
	
		// Use the default column options function to initialise classes etc
		_fnColumnOptions( oSettings, iCol, $(nTh).data() );
	}
	
	
	/**
	 * Apply options for a column
	 *  @param {object} oSettings dataTables settings object
	 *  @param {int} iCol column index to consider
	 *  @param {object} oOptions object with sType, bVisible and bSearchable etc
	 *  @memberof DataTable#oApi
	 */
	function _fnColumnOptions( oSettings, iCol, oOptions )
	{
		var oCol = oSettings.aoColumns[ iCol ];
		var oClasses = oSettings.oClasses;
		var th = $(oCol.nTh);
	
		// Try to get width information from the DOM. We can't get it from CSS
		// as we'd need to parse the CSS stylesheet. `width` option can override
		if ( ! oCol.sWidthOrig ) {
			// Width attribute
			oCol.sWidthOrig = th.attr('width') || null;
	
			// Style attribute
			var t = (th.attr('style') || '').match(/width:\s*(\d+[pxem%]+)/);
			if ( t ) {
				oCol.sWidthOrig = t[1];
			}
		}
	
		/* User specified column options */
		if ( oOptions !== undefined && oOptions !== null )
		{
			// Backwards compatibility
			_fnCompatCols( oOptions );
	
			// Map camel case parameters to their Hungarian counterparts
			_fnCamelToHungarian( DataTable.defaults.column, oOptions );
	
			/* Backwards compatibility for mDataProp */
			if ( oOptions.mDataProp !== undefined && !oOptions.mData )
			{
				oOptions.mData = oOptions.mDataProp;
			}
	
			if ( oOptions.sType )
			{
				oCol._sManualType = oOptions.sType;
			}
	
			// `class` is a reserved word in Javascript, so we need to provide
			// the ability to use a valid name for the camel case input
			if ( oOptions.className && ! oOptions.sClass )
			{
				oOptions.sClass = oOptions.className;
			}
			if ( oOptions.sClass ) {
				th.addClass( oOptions.sClass );
			}
	
			$.extend( oCol, oOptions );
			_fnMap( oCol, oOptions, "sWidth", "sWidthOrig" );
	
			/* iDataSort to be applied (backwards compatibility), but aDataSort will take
			 * priority if defined
			 */
			if ( oOptions.iDataSort !== undefined )
			{
				oCol.aDataSort = [ oOptions.iDataSort ];
			}
			_fnMap( oCol, oOptions, "aDataSort" );
		}
	
		/* Cache the data get and set functions for speed */
		var mDataSrc = oCol.mData;
		var mData = _fnGetObjectDataFn( mDataSrc );
		var mRender = oCol.mRender ? _fnGetObjectDataFn( oCol.mRender ) : null;
	
		var attrTest = function( src ) {
			return typeof src === 'string' && src.indexOf('@') !== -1;
		};
		oCol._bAttrSrc = $.isPlainObject( mDataSrc ) && (
			attrTest(mDataSrc.sort) || attrTest(mDataSrc.type) || attrTest(mDataSrc.filter)
		);
		oCol._setter = null;
	
		oCol.fnGetData = function (rowData, type, meta) {
			var innerData = mData( rowData, type, undefined, meta );
	
			return mRender && type ?
				mRender( innerData, type, rowData, meta ) :
				innerData;
		};
		oCol.fnSetData = function ( rowData, val, meta ) {
			return _fnSetObjectDataFn( mDataSrc )( rowData, val, meta );
		};
	
		// Indicate if DataTables should read DOM data as an object or array
		// Used in _fnGetRowElements
		if ( typeof mDataSrc !== 'number' ) {
			oSettings._rowReadObject = true;
		}
	
		/* Feature sorting overrides column specific when off */
		if ( !oSettings.oFeatures.bSort )
		{
			oCol.bSortable = false;
			th.addClass( oClasses.sSortableNone ); // Have to add class here as order event isn't called
		}
	
		/* Check that the class assignment is correct for sorting */
		var bAsc = $.inArray('asc', oCol.asSorting) !== -1;
		var bDesc = $.inArray('desc', oCol.asSorting) !== -1;
		if ( !oCol.bSortable || (!bAsc && !bDesc) )
		{
			oCol.sSortingClass = oClasses.sSortableNone;
			oCol.sSortingClassJUI = "";
		}
		else if ( bAsc && !bDesc )
		{
			oCol.sSortingClass = oClasses.sSortableAsc;
			oCol.sSortingClassJUI = oClasses.sSortJUIAscAllowed;
		}
		else if ( !bAsc && bDesc )
		{
			oCol.sSortingClass = oClasses.sSortableDesc;
			oCol.sSortingClassJUI = oClasses.sSortJUIDescAllowed;
		}
		else
		{
			oCol.sSortingClass = oClasses.sSortable;
			oCol.sSortingClassJUI = oClasses.sSortJUI;
		}
	}
	
	
	/**
	 * Adjust the table column widths for new data. Note: you would probably want to
	 * do a redraw after calling this function!
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnAdjustColumnSizing ( settings )
	{
		/* Not interested in doing column width calculation if auto-width is disabled */
		if ( settings.oFeatures.bAutoWidth !== false )
		{
			var columns = settings.aoColumns;
	
			_fnCalculateColumnWidths( settings );
			for ( var i=0 , iLen=columns.length ; i<iLen ; i++ )
			{
				columns[i].nTh.style.width = columns[i].sWidth;
			}
		}
	
		var scroll = settings.oScroll;
		if ( scroll.sY !== '' || scroll.sX !== '')
		{
			_fnScrollDraw( settings );
		}
	
		_fnCallbackFire( settings, null, 'column-sizing', [settings] );
	}
	
	
	/**
	 * Covert the index of a visible column to the index in the data array (take account
	 * of hidden columns)
	 *  @param {object} oSettings dataTables settings object
	 *  @param {int} iMatch Visible column index to lookup
	 *  @returns {int} i the data index
	 *  @memberof DataTable#oApi
	 */
	function _fnVisibleToColumnIndex( oSettings, iMatch )
	{
		var aiVis = _fnGetColumns( oSettings, 'bVisible' );
	
		return typeof aiVis[iMatch] === 'number' ?
			aiVis[iMatch] :
			null;
	}
	
	
	/**
	 * Covert the index of an index in the data array and convert it to the visible
	 *   column index (take account of hidden columns)
	 *  @param {int} iMatch Column index to lookup
	 *  @param {object} oSettings dataTables settings object
	 *  @returns {int} i the data index
	 *  @memberof DataTable#oApi
	 */
	function _fnColumnIndexToVisible( oSettings, iMatch )
	{
		var aiVis = _fnGetColumns( oSettings, 'bVisible' );
		var iPos = $.inArray( iMatch, aiVis );
	
		return iPos !== -1 ? iPos : null;
	}
	
	
	/**
	 * Get the number of visible columns
	 *  @param {object} oSettings dataTables settings object
	 *  @returns {int} i the number of visible columns
	 *  @memberof DataTable#oApi
	 */
	function _fnVisbleColumns( oSettings )
	{
		var vis = 0;
	
		// No reduce in IE8, use a loop for now
		$.each( oSettings.aoColumns, function ( i, col ) {
			if ( col.bVisible && $(col.nTh).css('display') !== 'none' ) {
				vis++;
			}
		} );
	
		return vis;
	}
	
	
	/**
	 * Get an array of column indexes that match a given property
	 *  @param {object} oSettings dataTables settings object
	 *  @param {string} sParam Parameter in aoColumns to look for - typically
	 *    bVisible or bSearchable
	 *  @returns {array} Array of indexes with matched properties
	 *  @memberof DataTable#oApi
	 */
	function _fnGetColumns( oSettings, sParam )
	{
		var a = [];
	
		$.map( oSettings.aoColumns, function(val, i) {
			if ( val[sParam] ) {
				a.push( i );
			}
		} );
	
		return a;
	}
	
	
	/**
	 * Calculate the 'type' of a column
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnColumnTypes ( settings )
	{
		var columns = settings.aoColumns;
		var data = settings.aoData;
		var types = DataTable.ext.type.detect;
		var i, ien, j, jen, k, ken;
		var col, cell, detectedType, cache;
	
		// For each column, spin over the 
		for ( i=0, ien=columns.length ; i<ien ; i++ ) {
			col = columns[i];
			cache = [];
	
			if ( ! col.sType && col._sManualType ) {
				col.sType = col._sManualType;
			}
			else if ( ! col.sType ) {
				for ( j=0, jen=types.length ; j<jen ; j++ ) {
					for ( k=0, ken=data.length ; k<ken ; k++ ) {
						// Use a cache array so we only need to get the type data
						// from the formatter once (when using multiple detectors)
						if ( cache[k] === undefined ) {
							cache[k] = _fnGetCellData( settings, k, i, 'type' );
						}
	
						detectedType = types[j]( cache[k], settings );
	
						// If null, then this type can't apply to this column, so
						// rather than testing all cells, break out. There is an
						// exception for the last type which is `html`. We need to
						// scan all rows since it is possible to mix string and HTML
						// types
						if ( ! detectedType && j !== types.length-1 ) {
							break;
						}
	
						// Only a single match is needed for html type since it is
						// bottom of the pile and very similar to string
						if ( detectedType === 'html' ) {
							break;
						}
					}
	
					// Type is valid for all data points in the column - use this
					// type
					if ( detectedType ) {
						col.sType = detectedType;
						break;
					}
				}
	
				// Fall back - if no type was detected, always use string
				if ( ! col.sType ) {
					col.sType = 'string';
				}
			}
		}
	}
	
	
	/**
	 * Take the column definitions and static columns arrays and calculate how
	 * they relate to column indexes. The callback function will then apply the
	 * definition found for a column to a suitable configuration object.
	 *  @param {object} oSettings dataTables settings object
	 *  @param {array} aoColDefs The aoColumnDefs array that is to be applied
	 *  @param {array} aoCols The aoColumns array that defines columns individually
	 *  @param {function} fn Callback function - takes two parameters, the calculated
	 *    column index and the definition for that column.
	 *  @memberof DataTable#oApi
	 */
	function _fnApplyColumnDefs( oSettings, aoColDefs, aoCols, fn )
	{
		var i, iLen, j, jLen, k, kLen, def;
		var columns = oSettings.aoColumns;
	
		// Column definitions with aTargets
		if ( aoColDefs )
		{
			/* Loop over the definitions array - loop in reverse so first instance has priority */
			for ( i=aoColDefs.length-1 ; i>=0 ; i-- )
			{
				def = aoColDefs[i];
	
				/* Each definition can target multiple columns, as it is an array */
				var aTargets = def.targets !== undefined ?
					def.targets :
					def.aTargets;
	
				if ( ! $.isArray( aTargets ) )
				{
					aTargets = [ aTargets ];
				}
	
				for ( j=0, jLen=aTargets.length ; j<jLen ; j++ )
				{
					if ( typeof aTargets[j] === 'number' && aTargets[j] >= 0 )
					{
						/* Add columns that we don't yet know about */
						while( columns.length <= aTargets[j] )
						{
							_fnAddColumn( oSettings );
						}
	
						/* Integer, basic index */
						fn( aTargets[j], def );
					}
					else if ( typeof aTargets[j] === 'number' && aTargets[j] < 0 )
					{
						/* Negative integer, right to left column counting */
						fn( columns.length+aTargets[j], def );
					}
					else if ( typeof aTargets[j] === 'string' )
					{
						/* Class name matching on TH element */
						for ( k=0, kLen=columns.length ; k<kLen ; k++ )
						{
							if ( aTargets[j] == "_all" ||
							     $(columns[k].nTh).hasClass( aTargets[j] ) )
							{
								fn( k, def );
							}
						}
					}
				}
			}
		}
	
		// Statically defined columns array
		if ( aoCols )
		{
			for ( i=0, iLen=aoCols.length ; i<iLen ; i++ )
			{
				fn( i, aoCols[i] );
			}
		}
	}
	
	/**
	 * Add a data array to the table, creating DOM node etc. This is the parallel to
	 * _fnGatherData, but for adding rows from a Javascript source, rather than a
	 * DOM source.
	 *  @param {object} oSettings dataTables settings object
	 *  @param {array} aData data array to be added
	 *  @param {node} [nTr] TR element to add to the table - optional. If not given,
	 *    DataTables will create a row automatically
	 *  @param {array} [anTds] Array of TD|TH elements for the row - must be given
	 *    if nTr is.
	 *  @returns {int} >=0 if successful (index of new aoData entry), -1 if failed
	 *  @memberof DataTable#oApi
	 */
	function _fnAddData ( oSettings, aDataIn, nTr, anTds )
	{
		/* Create the object for storing information about this new row */
		var iRow = oSettings.aoData.length;
		var oData = $.extend( true, {}, DataTable.models.oRow, {
			src: nTr ? 'dom' : 'data',
			idx: iRow
		} );
	
		oData._aData = aDataIn;
		oSettings.aoData.push( oData );
	
		/* Create the cells */
		var nTd, sThisType;
		var columns = oSettings.aoColumns;
	
		// Invalidate the column types as the new data needs to be revalidated
		for ( var i=0, iLen=columns.length ; i<iLen ; i++ )
		{
			columns[i].sType = null;
		}
	
		/* Add to the display array */
		oSettings.aiDisplayMaster.push( iRow );
	
		var id = oSettings.rowIdFn( aDataIn );
		if ( id !== undefined ) {
			oSettings.aIds[ id ] = oData;
		}
	
		/* Create the DOM information, or register it if already present */
		if ( nTr || ! oSettings.oFeatures.bDeferRender )
		{
			_fnCreateTr( oSettings, iRow, nTr, anTds );
		}
	
		return iRow;
	}
	
	
	/**
	 * Add one or more TR elements to the table. Generally we'd expect to
	 * use this for reading data from a DOM sourced table, but it could be
	 * used for an TR element. Note that if a TR is given, it is used (i.e.
	 * it is not cloned).
	 *  @param {object} settings dataTables settings object
	 *  @param {array|node|jQuery} trs The TR element(s) to add to the table
	 *  @returns {array} Array of indexes for the added rows
	 *  @memberof DataTable#oApi
	 */
	function _fnAddTr( settings, trs )
	{
		var row;
	
		// Allow an individual node to be passed in
		if ( ! (trs instanceof $) ) {
			trs = $(trs);
		}
	
		return trs.map( function (i, el) {
			row = _fnGetRowElements( settings, el );
			return _fnAddData( settings, row.data, el, row.cells );
		} );
	}
	
	
	/**
	 * Take a TR element and convert it to an index in aoData
	 *  @param {object} oSettings dataTables settings object
	 *  @param {node} n the TR element to find
	 *  @returns {int} index if the node is found, null if not
	 *  @memberof DataTable#oApi
	 */
	function _fnNodeToDataIndex( oSettings, n )
	{
		return (n._DT_RowIndex!==undefined) ? n._DT_RowIndex : null;
	}
	
	
	/**
	 * Take a TD element and convert it into a column data index (not the visible index)
	 *  @param {object} oSettings dataTables settings object
	 *  @param {int} iRow The row number the TD/TH can be found in
	 *  @param {node} n The TD/TH element to find
	 *  @returns {int} index if the node is found, -1 if not
	 *  @memberof DataTable#oApi
	 */
	function _fnNodeToColumnIndex( oSettings, iRow, n )
	{
		return $.inArray( n, oSettings.aoData[ iRow ].anCells );
	}
	
	
	/**
	 * Get the data for a given cell from the internal cache, taking into account data mapping
	 *  @param {object} settings dataTables settings object
	 *  @param {int} rowIdx aoData row id
	 *  @param {int} colIdx Column index
	 *  @param {string} type data get type ('display', 'type' 'filter' 'sort')
	 *  @returns {*} Cell data
	 *  @memberof DataTable#oApi
	 */
	function _fnGetCellData( settings, rowIdx, colIdx, type )
	{
		var draw           = settings.iDraw;
		var col            = settings.aoColumns[colIdx];
		var rowData        = settings.aoData[rowIdx]._aData;
		var defaultContent = col.sDefaultContent;
		var cellData       = col.fnGetData( rowData, type, {
			settings: settings,
			row:      rowIdx,
			col:      colIdx
		} );
	
		if ( cellData === undefined ) {
			if ( settings.iDrawError != draw && defaultContent === null ) {
				_fnLog( settings, 0, "Requested unknown parameter "+
					(typeof col.mData=='function' ? '{function}' : "'"+col.mData+"'")+
					" for row "+rowIdx+", column "+colIdx, 4 );
				settings.iDrawError = draw;
			}
			return defaultContent;
		}
	
		// When the data source is null and a specific data type is requested (i.e.
		// not the original data), we can use default column data
		if ( (cellData === rowData || cellData === null) && defaultContent !== null && type !== undefined ) {
			cellData = defaultContent;
		}
		else if ( typeof cellData === 'function' ) {
			// If the data source is a function, then we run it and use the return,
			// executing in the scope of the data object (for instances)
			return cellData.call( rowData );
		}
	
		if ( cellData === null && type == 'display' ) {
			return '';
		}
		return cellData;
	}
	
	
	/**
	 * Set the value for a specific cell, into the internal data cache
	 *  @param {object} settings dataTables settings object
	 *  @param {int} rowIdx aoData row id
	 *  @param {int} colIdx Column index
	 *  @param {*} val Value to set
	 *  @memberof DataTable#oApi
	 */
	function _fnSetCellData( settings, rowIdx, colIdx, val )
	{
		var col     = settings.aoColumns[colIdx];
		var rowData = settings.aoData[rowIdx]._aData;
	
		col.fnSetData( rowData, val, {
			settings: settings,
			row:      rowIdx,
			col:      colIdx
		}  );
	}
	
	
	// Private variable that is used to match action syntax in the data property object
	var __reArray = /\[.*?\]$/;
	var __reFn = /\(\)$/;
	
	/**
	 * Split string on periods, taking into account escaped periods
	 * @param  {string} str String to split
	 * @return {array} Split string
	 */
	function _fnSplitObjNotation( str )
	{
		return $.map( str.match(/(\\.|[^\.])+/g) || [''], function ( s ) {
			return s.replace(/\\\./g, '.');
		} );
	}
	
	
	/**
	 * Return a function that can be used to get data from a source object, taking
	 * into account the ability to use nested objects as a source
	 *  @param {string|int|function} mSource The data source for the object
	 *  @returns {function} Data get function
	 *  @memberof DataTable#oApi
	 */
	function _fnGetObjectDataFn( mSource )
	{
		if ( $.isPlainObject( mSource ) )
		{
			/* Build an object of get functions, and wrap them in a single call */
			var o = {};
			$.each( mSource, function (key, val) {
				if ( val ) {
					o[key] = _fnGetObjectDataFn( val );
				}
			} );
	
			return function (data, type, row, meta) {
				var t = o[type] || o._;
				return t !== undefined ?
					t(data, type, row, meta) :
					data;
			};
		}
		else if ( mSource === null )
		{
			/* Give an empty string for rendering / sorting etc */
			return function (data) { // type, row and meta also passed, but not used
				return data;
			};
		}
		else if ( typeof mSource === 'function' )
		{
			return function (data, type, row, meta) {
				return mSource( data, type, row, meta );
			};
		}
		else if ( typeof mSource === 'string' && (mSource.indexOf('.') !== -1 ||
			      mSource.indexOf('[') !== -1 || mSource.indexOf('(') !== -1) )
		{
			/* If there is a . in the source string then the data source is in a
			 * nested object so we loop over the data for each level to get the next
			 * level down. On each loop we test for undefined, and if found immediately
			 * return. This allows entire objects to be missing and sDefaultContent to
			 * be used if defined, rather than throwing an error
			 */
			var fetchData = function (data, type, src) {
				var arrayNotation, funcNotation, out, innerSrc;
	
				if ( src !== "" )
				{
					var a = _fnSplitObjNotation( src );
	
					for ( var i=0, iLen=a.length ; i<iLen ; i++ )
					{
						// Check if we are dealing with special notation
						arrayNotation = a[i].match(__reArray);
						funcNotation = a[i].match(__reFn);
	
						if ( arrayNotation )
						{
							// Array notation
							a[i] = a[i].replace(__reArray, '');
	
							// Condition allows simply [] to be passed in
							if ( a[i] !== "" ) {
								data = data[ a[i] ];
							}
							out = [];
	
							// Get the remainder of the nested object to get
							a.splice( 0, i+1 );
							innerSrc = a.join('.');
	
							// Traverse each entry in the array getting the properties requested
							if ( $.isArray( data ) ) {
								for ( var j=0, jLen=data.length ; j<jLen ; j++ ) {
									out.push( fetchData( data[j], type, innerSrc ) );
								}
							}
	
							// If a string is given in between the array notation indicators, that
							// is used to join the strings together, otherwise an array is returned
							var join = arrayNotation[0].substring(1, arrayNotation[0].length-1);
							data = (join==="") ? out : out.join(join);
	
							// The inner call to fetchData has already traversed through the remainder
							// of the source requested, so we exit from the loop
							break;
						}
						else if ( funcNotation )
						{
							// Function call
							a[i] = a[i].replace(__reFn, '');
							data = data[ a[i] ]();
							continue;
						}
	
						if ( data === null || data[ a[i] ] === undefined )
						{
							return undefined;
						}
						data = data[ a[i] ];
					}
				}
	
				return data;
			};
	
			return function (data, type) { // row and meta also passed, but not used
				return fetchData( data, type, mSource );
			};
		}
		else
		{
			/* Array or flat object mapping */
			return function (data, type) { // row and meta also passed, but not used
				return data[mSource];
			};
		}
	}
	
	
	/**
	 * Return a function that can be used to set data from a source object, taking
	 * into account the ability to use nested objects as a source
	 *  @param {string|int|function} mSource The data source for the object
	 *  @returns {function} Data set function
	 *  @memberof DataTable#oApi
	 */
	function _fnSetObjectDataFn( mSource )
	{
		if ( $.isPlainObject( mSource ) )
		{
			/* Unlike get, only the underscore (global) option is used for for
			 * setting data since we don't know the type here. This is why an object
			 * option is not documented for `mData` (which is read/write), but it is
			 * for `mRender` which is read only.
			 */
			return _fnSetObjectDataFn( mSource._ );
		}
		else if ( mSource === null )
		{
			/* Nothing to do when the data source is null */
			return function () {};
		}
		else if ( typeof mSource === 'function' )
		{
			return function (data, val, meta) {
				mSource( data, 'set', val, meta );
			};
		}
		else if ( typeof mSource === 'string' && (mSource.indexOf('.') !== -1 ||
			      mSource.indexOf('[') !== -1 || mSource.indexOf('(') !== -1) )
		{
			/* Like the get, we need to get data from a nested object */
			var setData = function (data, val, src) {
				var a = _fnSplitObjNotation( src ), b;
				var aLast = a[a.length-1];
				var arrayNotation, funcNotation, o, innerSrc;
	
				for ( var i=0, iLen=a.length-1 ; i<iLen ; i++ )
				{
					// Check if we are dealing with an array notation request
					arrayNotation = a[i].match(__reArray);
					funcNotation = a[i].match(__reFn);
	
					if ( arrayNotation )
					{
						a[i] = a[i].replace(__reArray, '');
						data[ a[i] ] = [];
	
						// Get the remainder of the nested object to set so we can recurse
						b = a.slice();
						b.splice( 0, i+1 );
						innerSrc = b.join('.');
	
						// Traverse each entry in the array setting the properties requested
						if ( $.isArray( val ) )
						{
							for ( var j=0, jLen=val.length ; j<jLen ; j++ )
							{
								o = {};
								setData( o, val[j], innerSrc );
								data[ a[i] ].push( o );
							}
						}
						else
						{
							// We've been asked to save data to an array, but it
							// isn't array data to be saved. Best that can be done
							// is to just save the value.
							data[ a[i] ] = val;
						}
	
						// The inner call to setData has already traversed through the remainder
						// of the source and has set the data, thus we can exit here
						return;
					}
					else if ( funcNotation )
					{
						// Function call
						a[i] = a[i].replace(__reFn, '');
						data = data[ a[i] ]( val );
					}
	
					// If the nested object doesn't currently exist - since we are
					// trying to set the value - create it
					if ( data[ a[i] ] === null || data[ a[i] ] === undefined )
					{
						data[ a[i] ] = {};
					}
					data = data[ a[i] ];
				}
	
				// Last item in the input - i.e, the actual set
				if ( aLast.match(__reFn ) )
				{
					// Function call
					data = data[ aLast.replace(__reFn, '') ]( val );
				}
				else
				{
					// If array notation is used, we just want to strip it and use the property name
					// and assign the value. If it isn't used, then we get the result we want anyway
					data[ aLast.replace(__reArray, '') ] = val;
				}
			};
	
			return function (data, val) { // meta is also passed in, but not used
				return setData( data, val, mSource );
			};
		}
		else
		{
			/* Array or flat object mapping */
			return function (data, val) { // meta is also passed in, but not used
				data[mSource] = val;
			};
		}
	}
	
	
	/**
	 * Return an array with the full table data
	 *  @param {object} oSettings dataTables settings object
	 *  @returns array {array} aData Master data array
	 *  @memberof DataTable#oApi
	 */
	function _fnGetDataMaster ( settings )
	{
		return _pluck( settings.aoData, '_aData' );
	}
	
	
	/**
	 * Nuke the table
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnClearTable( settings )
	{
		settings.aoData.length = 0;
		settings.aiDisplayMaster.length = 0;
		settings.aiDisplay.length = 0;
		settings.aIds = {};
	}
	
	
	 /**
	 * Take an array of integers (index array) and remove a target integer (value - not
	 * the key!)
	 *  @param {array} a Index array to target
	 *  @param {int} iTarget value to find
	 *  @memberof DataTable#oApi
	 */
	function _fnDeleteIndex( a, iTarget, splice )
	{
		var iTargetIndex = -1;
	
		for ( var i=0, iLen=a.length ; i<iLen ; i++ )
		{
			if ( a[i] == iTarget )
			{
				iTargetIndex = i;
			}
			else if ( a[i] > iTarget )
			{
				a[i]--;
			}
		}
	
		if ( iTargetIndex != -1 && splice === undefined )
		{
			a.splice( iTargetIndex, 1 );
		}
	}
	
	
	/**
	 * Mark cached data as invalid such that a re-read of the data will occur when
	 * the cached data is next requested. Also update from the data source object.
	 *
	 * @param {object} settings DataTables settings object
	 * @param {int}    rowIdx   Row index to invalidate
	 * @param {string} [src]    Source to invalidate from: undefined, 'auto', 'dom'
	 *     or 'data'
	 * @param {int}    [colIdx] Column index to invalidate. If undefined the whole
	 *     row will be invalidated
	 * @memberof DataTable#oApi
	 *
	 * @todo For the modularisation of v1.11 this will need to become a callback, so
	 *   the sort and filter methods can subscribe to it. That will required
	 *   initialisation options for sorting, which is why it is not already baked in
	 */
	function _fnInvalidate( settings, rowIdx, src, colIdx )
	{
		var row = settings.aoData[ rowIdx ];
		var i, ien;
		var cellWrite = function ( cell, col ) {
			// This is very frustrating, but in IE if you just write directly
			// to innerHTML, and elements that are overwritten are GC'ed,
			// even if there is a reference to them elsewhere
			while ( cell.childNodes.length ) {
				cell.removeChild( cell.firstChild );
			}
	
			cell.innerHTML = _fnGetCellData( settings, rowIdx, col, 'display' );
		};
	
		// Are we reading last data from DOM or the data object?
		if ( src === 'dom' || ((! src || src === 'auto') && row.src === 'dom') ) {
			// Read the data from the DOM
			row._aData = _fnGetRowElements(
					settings, row, colIdx, colIdx === undefined ? undefined : row._aData
				)
				.data;
		}
		else {
			// Reading from data object, update the DOM
			var cells = row.anCells;
	
			if ( cells ) {
				if ( colIdx !== undefined ) {
					cellWrite( cells[colIdx], colIdx );
				}
				else {
					for ( i=0, ien=cells.length ; i<ien ; i++ ) {
						cellWrite( cells[i], i );
					}
				}
			}
		}
	
		// For both row and cell invalidation, the cached data for sorting and
		// filtering is nulled out
		row._aSortData = null;
		row._aFilterData = null;
	
		// Invalidate the type for a specific column (if given) or all columns since
		// the data might have changed
		var cols = settings.aoColumns;
		if ( colIdx !== undefined ) {
			cols[ colIdx ].sType = null;
		}
		else {
			for ( i=0, ien=cols.length ; i<ien ; i++ ) {
				cols[i].sType = null;
			}
	
			// Update DataTables special `DT_*` attributes for the row
			_fnRowAttributes( settings, row );
		}
	}
	
	
	/**
	 * Build a data source object from an HTML row, reading the contents of the
	 * cells that are in the row.
	 *
	 * @param {object} settings DataTables settings object
	 * @param {node|object} TR element from which to read data or existing row
	 *   object from which to re-read the data from the cells
	 * @param {int} [colIdx] Optional column index
	 * @param {array|object} [d] Data source object. If `colIdx` is given then this
	 *   parameter should also be given and will be used to write the data into.
	 *   Only the column in question will be written
	 * @returns {object} Object with two parameters: `data` the data read, in
	 *   document order, and `cells` and array of nodes (they can be useful to the
	 *   caller, so rather than needing a second traversal to get them, just return
	 *   them from here).
	 * @memberof DataTable#oApi
	 */
	function _fnGetRowElements( settings, row, colIdx, d )
	{
		var
			tds = [],
			td = row.firstChild,
			name, col, o, i=0, contents,
			columns = settings.aoColumns,
			objectRead = settings._rowReadObject;
	
		// Allow the data object to be passed in, or construct
		d = d !== undefined ?
			d :
			objectRead ?
				{} :
				[];
	
		var attr = function ( str, td  ) {
			if ( typeof str === 'string' ) {
				var idx = str.indexOf('@');
	
				if ( idx !== -1 ) {
					var attr = str.substring( idx+1 );
					var setter = _fnSetObjectDataFn( str );
					setter( d, td.getAttribute( attr ) );
				}
			}
		};
	
		// Read data from a cell and store into the data object
		var cellProcess = function ( cell ) {
			if ( colIdx === undefined || colIdx === i ) {
				col = columns[i];
				contents = $.trim(cell.innerHTML);
	
				if ( col && col._bAttrSrc ) {
					var setter = _fnSetObjectDataFn( col.mData._ );
					setter( d, contents );
	
					attr( col.mData.sort, cell );
					attr( col.mData.type, cell );
					attr( col.mData.filter, cell );
				}
				else {
					// Depending on the `data` option for the columns the data can
					// be read to either an object or an array.
					if ( objectRead ) {
						if ( ! col._setter ) {
							// Cache the setter function
							col._setter = _fnSetObjectDataFn( col.mData );
						}
						col._setter( d, contents );
					}
					else {
						d[i] = contents;
					}
				}
			}
	
			i++;
		};
	
		if ( td ) {
			// `tr` element was passed in
			while ( td ) {
				name = td.nodeName.toUpperCase();
	
				if ( name == "TD" || name == "TH" ) {
					cellProcess( td );
					tds.push( td );
				}
	
				td = td.nextSibling;
			}
		}
		else {
			// Existing row object passed in
			tds = row.anCells;
	
			for ( var j=0, jen=tds.length ; j<jen ; j++ ) {
				cellProcess( tds[j] );
			}
		}
	
		// Read the ID from the DOM if present
		var rowNode = row.firstChild ? row : row.nTr;
	
		if ( rowNode ) {
			var id = rowNode.getAttribute( 'id' );
	
			if ( id ) {
				_fnSetObjectDataFn( settings.rowId )( d, id );
			}
		}
	
		return {
			data: d,
			cells: tds
		};
	}
	/**
	 * Create a new TR element (and it's TD children) for a row
	 *  @param {object} oSettings dataTables settings object
	 *  @param {int} iRow Row to consider
	 *  @param {node} [nTrIn] TR element to add to the table - optional. If not given,
	 *    DataTables will create a row automatically
	 *  @param {array} [anTds] Array of TD|TH elements for the row - must be given
	 *    if nTr is.
	 *  @memberof DataTable#oApi
	 */
	function _fnCreateTr ( oSettings, iRow, nTrIn, anTds )
	{
		var
			row = oSettings.aoData[iRow],
			rowData = row._aData,
			cells = [],
			nTr, nTd, oCol,
			i, iLen;
	
		if ( row.nTr === null )
		{
			nTr = nTrIn || document.createElement('tr');
	
			row.nTr = nTr;
			row.anCells = cells;
	
			/* Use a private property on the node to allow reserve mapping from the node
			 * to the aoData array for fast look up
			 */
			nTr._DT_RowIndex = iRow;
	
			/* Special parameters can be given by the data source to be used on the row */
			_fnRowAttributes( oSettings, row );
	
			/* Process each column */
			for ( i=0, iLen=oSettings.aoColumns.length ; i<iLen ; i++ )
			{
				oCol = oSettings.aoColumns[i];
	
				nTd = nTrIn ? anTds[i] : document.createElement( oCol.sCellType );
				nTd._DT_CellIndex = {
					row: iRow,
					column: i
				};
				
				cells.push( nTd );
	
				// Need to create the HTML if new, or if a rendering function is defined
				if ( (!nTrIn || oCol.mRender || oCol.mData !== i) &&
					 (!$.isPlainObject(oCol.mData) || oCol.mData._ !== i+'.display')
				) {
					nTd.innerHTML = _fnGetCellData( oSettings, iRow, i, 'display' );
				}
	
				/* Add user defined class */
				if ( oCol.sClass )
				{
					nTd.className += ' '+oCol.sClass;
				}
	
				// Visibility - add or remove as required
				if ( oCol.bVisible && ! nTrIn )
				{
					nTr.appendChild( nTd );
				}
				else if ( ! oCol.bVisible && nTrIn )
				{
					nTd.parentNode.removeChild( nTd );
				}
	
				if ( oCol.fnCreatedCell )
				{
					oCol.fnCreatedCell.call( oSettings.oInstance,
						nTd, _fnGetCellData( oSettings, iRow, i ), rowData, iRow, i
					);
				}
			}
	
			_fnCallbackFire( oSettings, 'aoRowCreatedCallback', null, [nTr, rowData, iRow] );
		}
	
		// Remove once webkit bug 131819 and Chromium bug 365619 have been resolved
		// and deployed
		row.nTr.setAttribute( 'role', 'row' );
	}
	
	
	/**
	 * Add attributes to a row based on the special `DT_*` parameters in a data
	 * source object.
	 *  @param {object} settings DataTables settings object
	 *  @param {object} DataTables row object for the row to be modified
	 *  @memberof DataTable#oApi
	 */
	function _fnRowAttributes( settings, row )
	{
		var tr = row.nTr;
		var data = row._aData;
	
		if ( tr ) {
			var id = settings.rowIdFn( data );
	
			if ( id ) {
				tr.id = id;
			}
	
			if ( data.DT_RowClass ) {
				// Remove any classes added by DT_RowClass before
				var a = data.DT_RowClass.split(' ');
				row.__rowc = row.__rowc ?
					_unique( row.__rowc.concat( a ) ) :
					a;
	
				$(tr)
					.removeClass( row.__rowc.join(' ') )
					.addClass( data.DT_RowClass );
			}
	
			if ( data.DT_RowAttr ) {
				$(tr).attr( data.DT_RowAttr );
			}
	
			if ( data.DT_RowData ) {
				$(tr).data( data.DT_RowData );
			}
		}
	}
	
	
	/**
	 * Create the HTML header for the table
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnBuildHead( oSettings )
	{
		var i, ien, cell, row, column;
		var thead = oSettings.nTHead;
		var tfoot = oSettings.nTFoot;
		var createHeader = $('th, td', thead).length === 0;
		var classes = oSettings.oClasses;
		var columns = oSettings.aoColumns;
	
		if ( createHeader ) {
			row = $('<tr/>').appendTo( thead );
		}
	
		for ( i=0, ien=columns.length ; i<ien ; i++ ) {
			column = columns[i];
			cell = $( column.nTh ).addClass( column.sClass );
	
			if ( createHeader ) {
				cell.appendTo( row );
			}
	
			// 1.11 move into sorting
			if ( oSettings.oFeatures.bSort ) {
				cell.addClass( column.sSortingClass );
	
				if ( column.bSortable !== false ) {
					cell
						.attr( 'tabindex', oSettings.iTabIndex )
						.attr( 'aria-controls', oSettings.sTableId );
	
					_fnSortAttachListener( oSettings, column.nTh, i );
				}
			}
	
			if ( column.sTitle != cell[0].innerHTML ) {
				cell.html( column.sTitle );
			}
	
			_fnRenderer( oSettings, 'header' )(
				oSettings, cell, column, classes
			);
		}
	
		if ( createHeader ) {
			_fnDetectHeader( oSettings.aoHeader, thead );
		}
		
		/* ARIA role for the rows */
	 	$(thead).find('>tr').attr('role', 'row');
	
		/* Deal with the footer - add classes if required */
		$(thead).find('>tr>th, >tr>td').addClass( classes.sHeaderTH );
		$(tfoot).find('>tr>th, >tr>td').addClass( classes.sFooterTH );
	
		// Cache the footer cells. Note that we only take the cells from the first
		// row in the footer. If there is more than one row the user wants to
		// interact with, they need to use the table().foot() method. Note also this
		// allows cells to be used for multiple columns using colspan
		if ( tfoot !== null ) {
			var cells = oSettings.aoFooter[0];
	
			for ( i=0, ien=cells.length ; i<ien ; i++ ) {
				column = columns[i];
				column.nTf = cells[i].cell;
	
				if ( column.sClass ) {
					$(column.nTf).addClass( column.sClass );
				}
			}
		}
	}
	
	
	/**
	 * Draw the header (or footer) element based on the column visibility states. The
	 * methodology here is to use the layout array from _fnDetectHeader, modified for
	 * the instantaneous column visibility, to construct the new layout. The grid is
	 * traversed over cell at a time in a rows x columns grid fashion, although each
	 * cell insert can cover multiple elements in the grid - which is tracks using the
	 * aApplied array. Cell inserts in the grid will only occur where there isn't
	 * already a cell in that position.
	 *  @param {object} oSettings dataTables settings object
	 *  @param array {objects} aoSource Layout array from _fnDetectHeader
	 *  @param {boolean} [bIncludeHidden=false] If true then include the hidden columns in the calc,
	 *  @memberof DataTable#oApi
	 */
	function _fnDrawHead( oSettings, aoSource, bIncludeHidden )
	{
		var i, iLen, j, jLen, k, kLen, n, nLocalTr;
		var aoLocal = [];
		var aApplied = [];
		var iColumns = oSettings.aoColumns.length;
		var iRowspan, iColspan;
	
		if ( ! aoSource )
		{
			return;
		}
	
		if (  bIncludeHidden === undefined )
		{
			bIncludeHidden = false;
		}
	
		/* Make a copy of the master layout array, but without the visible columns in it */
		for ( i=0, iLen=aoSource.length ; i<iLen ; i++ )
		{
			aoLocal[i] = aoSource[i].slice();
			aoLocal[i].nTr = aoSource[i].nTr;
	
			/* Remove any columns which are currently hidden */
			for ( j=iColumns-1 ; j>=0 ; j-- )
			{
				if ( !oSettings.aoColumns[j].bVisible && !bIncludeHidden )
				{
					aoLocal[i].splice( j, 1 );
				}
			}
	
			/* Prep the applied array - it needs an element for each row */
			aApplied.push( [] );
		}
	
		for ( i=0, iLen=aoLocal.length ; i<iLen ; i++ )
		{
			nLocalTr = aoLocal[i].nTr;
	
			/* All cells are going to be replaced, so empty out the row */
			if ( nLocalTr )
			{
				while( (n = nLocalTr.firstChild) )
				{
					nLocalTr.removeChild( n );
				}
			}
	
			for ( j=0, jLen=aoLocal[i].length ; j<jLen ; j++ )
			{
				iRowspan = 1;
				iColspan = 1;
	
				/* Check to see if there is already a cell (row/colspan) covering our target
				 * insert point. If there is, then there is nothing to do.
				 */
				if ( aApplied[i][j] === undefined )
				{
					nLocalTr.appendChild( aoLocal[i][j].cell );
					aApplied[i][j] = 1;
	
					/* Expand the cell to cover as many rows as needed */
					while ( aoLocal[i+iRowspan] !== undefined &&
					        aoLocal[i][j].cell == aoLocal[i+iRowspan][j].cell )
					{
						aApplied[i+iRowspan][j] = 1;
						iRowspan++;
					}
	
					/* Expand the cell to cover as many columns as needed */
					while ( aoLocal[i][j+iColspan] !== undefined &&
					        aoLocal[i][j].cell == aoLocal[i][j+iColspan].cell )
					{
						/* Must update the applied array over the rows for the columns */
						for ( k=0 ; k<iRowspan ; k++ )
						{
							aApplied[i+k][j+iColspan] = 1;
						}
						iColspan++;
					}
	
					/* Do the actual expansion in the DOM */
					$(aoLocal[i][j].cell)
						.attr('rowspan', iRowspan)
						.attr('colspan', iColspan);
				}
			}
		}
	}
	
	
	/**
	 * Insert the required TR nodes into the table for display
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnDraw( oSettings )
	{
		/* Provide a pre-callback function which can be used to cancel the draw is false is returned */
		var aPreDraw = _fnCallbackFire( oSettings, 'aoPreDrawCallback', 'preDraw', [oSettings] );
		if ( $.inArray( false, aPreDraw ) !== -1 )
		{
			_fnProcessingDisplay( oSettings, false );
			return;
		}
	
		var i, iLen, n;
		var anRows = [];
		var iRowCount = 0;
		var asStripeClasses = oSettings.asStripeClasses;
		var iStripes = asStripeClasses.length;
		var iOpenRows = oSettings.aoOpenRows.length;
		var oLang = oSettings.oLanguage;
		var iInitDisplayStart = oSettings.iInitDisplayStart;
		var bServerSide = _fnDataSource( oSettings ) == 'ssp';
		var aiDisplay = oSettings.aiDisplay;
	
		oSettings.bDrawing = true;
	
		/* Check and see if we have an initial draw position from state saving */
		if ( iInitDisplayStart !== undefined && iInitDisplayStart !== -1 )
		{
			oSettings._iDisplayStart = bServerSide ?
				iInitDisplayStart :
				iInitDisplayStart >= oSettings.fnRecordsDisplay() ?
					0 :
					iInitDisplayStart;
	
			oSettings.iInitDisplayStart = -1;
		}
	
		var iDisplayStart = oSettings._iDisplayStart;
		var iDisplayEnd = oSettings.fnDisplayEnd();
	
		/* Server-side processing draw intercept */
		if ( oSettings.bDeferLoading )
		{
			oSettings.bDeferLoading = false;
			oSettings.iDraw++;
			_fnProcessingDisplay( oSettings, false );
		}
		else if ( !bServerSide )
		{
			oSettings.iDraw++;
		}
		else if ( !oSettings.bDestroying && !_fnAjaxUpdate( oSettings ) )
		{
			return;
		}
	
		if ( aiDisplay.length !== 0 )
		{
			var iStart = bServerSide ? 0 : iDisplayStart;
			var iEnd = bServerSide ? oSettings.aoData.length : iDisplayEnd;
	
			for ( var j=iStart ; j<iEnd ; j++ )
			{
				var iDataIndex = aiDisplay[j];
				var aoData = oSettings.aoData[ iDataIndex ];
				if ( aoData.nTr === null )
				{
					_fnCreateTr( oSettings, iDataIndex );
				}
	
				var nRow = aoData.nTr;
	
				/* Remove the old striping classes and then add the new one */
				if ( iStripes !== 0 )
				{
					var sStripe = asStripeClasses[ iRowCount % iStripes ];
					if ( aoData._sRowStripe != sStripe )
					{
						$(nRow).removeClass( aoData._sRowStripe ).addClass( sStripe );
						aoData._sRowStripe = sStripe;
					}
				}
	
				// Row callback functions - might want to manipulate the row
				// iRowCount and j are not currently documented. Are they at all
				// useful?
				_fnCallbackFire( oSettings, 'aoRowCallback', null,
					[nRow, aoData._aData, iRowCount, j] );
	
				anRows.push( nRow );
				iRowCount++;
			}
		}
		else
		{
			/* Table is empty - create a row with an empty message in it */
			var sZero = oLang.sZeroRecords;
			if ( oSettings.iDraw == 1 &&  _fnDataSource( oSettings ) == 'ajax' )
			{
				sZero = oLang.sLoadingRecords;
			}
			else if ( oLang.sEmptyTable && oSettings.fnRecordsTotal() === 0 )
			{
				sZero = oLang.sEmptyTable;
			}
	
			anRows[ 0 ] = $( '<tr/>', { 'class': iStripes ? asStripeClasses[0] : '' } )
				.append( $('<td />', {
					'valign':  'top',
					'colSpan': _fnVisbleColumns( oSettings ),
					'class':   oSettings.oClasses.sRowEmpty
				} ).html( sZero ) )[0];
		}
	
		/* Header and footer callbacks */
		_fnCallbackFire( oSettings, 'aoHeaderCallback', 'header', [ $(oSettings.nTHead).children('tr')[0],
			_fnGetDataMaster( oSettings ), iDisplayStart, iDisplayEnd, aiDisplay ] );
	
		_fnCallbackFire( oSettings, 'aoFooterCallback', 'footer', [ $(oSettings.nTFoot).children('tr')[0],
			_fnGetDataMaster( oSettings ), iDisplayStart, iDisplayEnd, aiDisplay ] );
	
		var body = $(oSettings.nTBody);
	
		body.children().detach();
		body.append( $(anRows) );
	
		/* Call all required callback functions for the end of a draw */
		_fnCallbackFire( oSettings, 'aoDrawCallback', 'draw', [oSettings] );
	
		/* Draw is complete, sorting and filtering must be as well */
		oSettings.bSorted = false;
		oSettings.bFiltered = false;
		oSettings.bDrawing = false;
	}
	
	
	/**
	 * Redraw the table - taking account of the various features which are enabled
	 *  @param {object} oSettings dataTables settings object
	 *  @param {boolean} [holdPosition] Keep the current paging position. By default
	 *    the paging is reset to the first page
	 *  @memberof DataTable#oApi
	 */
	function _fnReDraw( settings, holdPosition )
	{
		var
			features = settings.oFeatures,
			sort     = features.bSort,
			filter   = features.bFilter;
	
		if ( sort ) {
			_fnSort( settings );
		}
	
		if ( filter ) {
			_fnFilterComplete( settings, settings.oPreviousSearch );
		}
		else {
			// No filtering, so we want to just use the display master
			settings.aiDisplay = settings.aiDisplayMaster.slice();
		}
	
		if ( holdPosition !== true ) {
			settings._iDisplayStart = 0;
		}
	
		// Let any modules know about the draw hold position state (used by
		// scrolling internally)
		settings._drawHold = holdPosition;
	
		_fnDraw( settings );
	
		settings._drawHold = false;
	}
	
	
	/**
	 * Add the options to the page HTML for the table
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnAddOptionsHtml ( oSettings )
	{
		var classes = oSettings.oClasses;
		var table = $(oSettings.nTable);
		var holding = $('<div/>').insertBefore( table ); // Holding element for speed
		var features = oSettings.oFeatures;
	
		// All DataTables are wrapped in a div
		var insert = $('<div/>', {
			id:      oSettings.sTableId+'_wrapper',
			'class': classes.sWrapper + (oSettings.nTFoot ? '' : ' '+classes.sNoFooter)
		} );
	
		oSettings.nHolding = holding[0];
		oSettings.nTableWrapper = insert[0];
		oSettings.nTableReinsertBefore = oSettings.nTable.nextSibling;
	
		/* Loop over the user set positioning and place the elements as needed */
		var aDom = oSettings.sDom.split('');
		var featureNode, cOption, nNewNode, cNext, sAttr, j;
		for ( var i=0 ; i<aDom.length ; i++ )
		{
			featureNode = null;
			cOption = aDom[i];
	
			if ( cOption == '<' )
			{
				/* New container div */
				nNewNode = $('<div/>')[0];
	
				/* Check to see if we should append an id and/or a class name to the container */
				cNext = aDom[i+1];
				if ( cNext == "'" || cNext == '"' )
				{
					sAttr = "";
					j = 2;
					while ( aDom[i+j] != cNext )
					{
						sAttr += aDom[i+j];
						j++;
					}
	
					/* Replace jQuery UI constants @todo depreciated */
					if ( sAttr == "H" )
					{
						sAttr = classes.sJUIHeader;
					}
					else if ( sAttr == "F" )
					{
						sAttr = classes.sJUIFooter;
					}
	
					/* The attribute can be in the format of "#id.class", "#id" or "class" This logic
					 * breaks the string into parts and applies them as needed
					 */
					if ( sAttr.indexOf('.') != -1 )
					{
						var aSplit = sAttr.split('.');
						nNewNode.id = aSplit[0].substr(1, aSplit[0].length-1);
						nNewNode.className = aSplit[1];
					}
					else if ( sAttr.charAt(0) == "#" )
					{
						nNewNode.id = sAttr.substr(1, sAttr.length-1);
					}
					else
					{
						nNewNode.className = sAttr;
					}
	
					i += j; /* Move along the position array */
				}
	
				insert.append( nNewNode );
				insert = $(nNewNode);
			}
			else if ( cOption == '>' )
			{
				/* End container div */
				insert = insert.parent();
			}
			// @todo Move options into their own plugins?
			else if ( cOption == 'l' && features.bPaginate && features.bLengthChange )
			{
				/* Length */
				featureNode = _fnFeatureHtmlLength( oSettings );
			}
			else if ( cOption == 'f' && features.bFilter )
			{
				/* Filter */
				featureNode = _fnFeatureHtmlFilter( oSettings );
			}
			else if ( cOption == 'r' && features.bProcessing )
			{
				/* pRocessing */
				featureNode = _fnFeatureHtmlProcessing( oSettings );
			}
			else if ( cOption == 't' )
			{
				/* Table */
				featureNode = _fnFeatureHtmlTable( oSettings );
			}
			else if ( cOption ==  'i' && features.bInfo )
			{
				/* Info */
				featureNode = _fnFeatureHtmlInfo( oSettings );
			}
			else if ( cOption == 'p' && features.bPaginate )
			{
				/* Pagination */
				featureNode = _fnFeatureHtmlPaginate( oSettings );
			}
			else if ( DataTable.ext.feature.length !== 0 )
			{
				/* Plug-in features */
				var aoFeatures = DataTable.ext.feature;
				for ( var k=0, kLen=aoFeatures.length ; k<kLen ; k++ )
				{
					if ( cOption == aoFeatures[k].cFeature )
					{
						featureNode = aoFeatures[k].fnInit( oSettings );
						break;
					}
				}
			}
	
			/* Add to the 2D features array */
			if ( featureNode )
			{
				var aanFeatures = oSettings.aanFeatures;
	
				if ( ! aanFeatures[cOption] )
				{
					aanFeatures[cOption] = [];
				}
	
				aanFeatures[cOption].push( featureNode );
				insert.append( featureNode );
			}
		}
	
		/* Built our DOM structure - replace the holding div with what we want */
		holding.replaceWith( insert );
		oSettings.nHolding = null;
	}
	
	
	/**
	 * Use the DOM source to create up an array of header cells. The idea here is to
	 * create a layout grid (array) of rows x columns, which contains a reference
	 * to the cell that that point in the grid (regardless of col/rowspan), such that
	 * any column / row could be removed and the new grid constructed
	 *  @param array {object} aLayout Array to store the calculated layout in
	 *  @param {node} nThead The header/footer element for the table
	 *  @memberof DataTable#oApi
	 */
	function _fnDetectHeader ( aLayout, nThead )
	{
		var nTrs = $(nThead).children('tr');
		var nTr, nCell;
		var i, k, l, iLen, jLen, iColShifted, iColumn, iColspan, iRowspan;
		var bUnique;
		var fnShiftCol = function ( a, i, j ) {
			var k = a[i];
	                while ( k[j] ) {
				j++;
			}
			return j;
		};
	
		aLayout.splice( 0, aLayout.length );
	
		/* We know how many rows there are in the layout - so prep it */
		for ( i=0, iLen=nTrs.length ; i<iLen ; i++ )
		{
			aLayout.push( [] );
		}
	
		/* Calculate a layout array */
		for ( i=0, iLen=nTrs.length ; i<iLen ; i++ )
		{
			nTr = nTrs[i];
			iColumn = 0;
	
			/* For every cell in the row... */
			nCell = nTr.firstChild;
			while ( nCell ) {
				if ( nCell.nodeName.toUpperCase() == "TD" ||
				     nCell.nodeName.toUpperCase() == "TH" )
				{
					/* Get the col and rowspan attributes from the DOM and sanitise them */
					iColspan = nCell.getAttribute('colspan') * 1;
					iRowspan = nCell.getAttribute('rowspan') * 1;
					iColspan = (!iColspan || iColspan===0 || iColspan===1) ? 1 : iColspan;
					iRowspan = (!iRowspan || iRowspan===0 || iRowspan===1) ? 1 : iRowspan;
	
					/* There might be colspan cells already in this row, so shift our target
					 * accordingly
					 */
					iColShifted = fnShiftCol( aLayout, i, iColumn );
	
					/* Cache calculation for unique columns */
					bUnique = iColspan === 1 ? true : false;
	
					/* If there is col / rowspan, copy the information into the layout grid */
					for ( l=0 ; l<iColspan ; l++ )
					{
						for ( k=0 ; k<iRowspan ; k++ )
						{
							aLayout[i+k][iColShifted+l] = {
								"cell": nCell,
								"unique": bUnique
							};
							aLayout[i+k].nTr = nTr;
						}
					}
				}
				nCell = nCell.nextSibling;
			}
		}
	}
	
	
	/**
	 * Get an array of unique th elements, one for each column
	 *  @param {object} oSettings dataTables settings object
	 *  @param {node} nHeader automatically detect the layout from this node - optional
	 *  @param {array} aLayout thead/tfoot layout from _fnDetectHeader - optional
	 *  @returns array {node} aReturn list of unique th's
	 *  @memberof DataTable#oApi
	 */
	function _fnGetUniqueThs ( oSettings, nHeader, aLayout )
	{
		var aReturn = [];
		if ( !aLayout )
		{
			aLayout = oSettings.aoHeader;
			if ( nHeader )
			{
				aLayout = [];
				_fnDetectHeader( aLayout, nHeader );
			}
		}
	
		for ( var i=0, iLen=aLayout.length ; i<iLen ; i++ )
		{
			for ( var j=0, jLen=aLayout[i].length ; j<jLen ; j++ )
			{
				if ( aLayout[i][j].unique &&
					 (!aReturn[j] || !oSettings.bSortCellsTop) )
				{
					aReturn[j] = aLayout[i][j].cell;
				}
			}
		}
	
		return aReturn;
	}
	
	/**
	 * Create an Ajax call based on the table's settings, taking into account that
	 * parameters can have multiple forms, and backwards compatibility.
	 *
	 * @param {object} oSettings dataTables settings object
	 * @param {array} data Data to send to the server, required by
	 *     DataTables - may be augmented by developer callbacks
	 * @param {function} fn Callback function to run when data is obtained
	 */
	function _fnBuildAjax( oSettings, data, fn )
	{
		// Compatibility with 1.9-, allow fnServerData and event to manipulate
		_fnCallbackFire( oSettings, 'aoServerParams', 'serverParams', [data] );
	
		// Convert to object based for 1.10+ if using the old array scheme which can
		// come from server-side processing or serverParams
		if ( data && $.isArray(data) ) {
			var tmp = {};
			var rbracket = /(.*?)\[\]$/;
	
			$.each( data, function (key, val) {
				var match = val.name.match(rbracket);
	
				if ( match ) {
					// Support for arrays
					var name = match[0];
	
					if ( ! tmp[ name ] ) {
						tmp[ name ] = [];
					}
					tmp[ name ].push( val.value );
				}
				else {
					tmp[val.name] = val.value;
				}
			} );
			data = tmp;
		}
	
		var ajaxData;
		var ajax = oSettings.ajax;
		var instance = oSettings.oInstance;
		var callback = function ( json ) {
			_fnCallbackFire( oSettings, null, 'xhr', [oSettings, json, oSettings.jqXHR] );
			fn( json );
		};
	
		if ( $.isPlainObject( ajax ) && ajax.data )
		{
			ajaxData = ajax.data;
	
			var newData = $.isFunction( ajaxData ) ?
				ajaxData( data, oSettings ) :  // fn can manipulate data or return
				ajaxData;                      // an object object or array to merge
	
			// If the function returned something, use that alone
			data = $.isFunction( ajaxData ) && newData ?
				newData :
				$.extend( true, data, newData );
	
			// Remove the data property as we've resolved it already and don't want
			// jQuery to do it again (it is restored at the end of the function)
			delete ajax.data;
		}
	
		var baseAjax = {
			"data": data,
			"success": function (json) {
				var error = json.error || json.sError;
				if ( error ) {
					_fnLog( oSettings, 0, error );
				}
	
				oSettings.json = json;
				callback( json );
			},
			"dataType": "json",
			"cache": false,
			"type": oSettings.sServerMethod,
			"error": function (xhr, error, thrown) {
				var ret = _fnCallbackFire( oSettings, null, 'xhr', [oSettings, null, oSettings.jqXHR] );
	
				if ( $.inArray( true, ret ) === -1 ) {
					if ( error == "parsererror" ) {
						_fnLog( oSettings, 0, 'Invalid JSON response', 1 );
					}
					else if ( xhr.readyState === 4 ) {
						_fnLog( oSettings, 0, 'Ajax error', 7 );
					}
				}
	
				_fnProcessingDisplay( oSettings, false );
			}
		};
	
		// Store the data submitted for the API
		oSettings.oAjaxData = data;
	
		// Allow plug-ins and external processes to modify the data
		_fnCallbackFire( oSettings, null, 'preXhr', [oSettings, data] );
	
		if ( oSettings.fnServerData )
		{
			// DataTables 1.9- compatibility
			oSettings.fnServerData.call( instance,
				oSettings.sAjaxSource,
				$.map( data, function (val, key) { // Need to convert back to 1.9 trad format
					return { name: key, value: val };
				} ),
				callback,
				oSettings
			);
		}
		else if ( oSettings.sAjaxSource || typeof ajax === 'string' )
		{
			// DataTables 1.9- compatibility
			oSettings.jqXHR = $.ajax( $.extend( baseAjax, {
				url: ajax || oSettings.sAjaxSource
			} ) );
		}
		else if ( $.isFunction( ajax ) )
		{
			// Is a function - let the caller define what needs to be done
			oSettings.jqXHR = ajax.call( instance, data, callback, oSettings );
		}
		else
		{
			// Object to extend the base settings
			oSettings.jqXHR = $.ajax( $.extend( baseAjax, ajax ) );
	
			// Restore for next time around
			ajax.data = ajaxData;
		}
	}
	
	
	/**
	 * Update the table using an Ajax call
	 *  @param {object} settings dataTables settings object
	 *  @returns {boolean} Block the table drawing or not
	 *  @memberof DataTable#oApi
	 */
	function _fnAjaxUpdate( settings )
	{
		if ( settings.bAjaxDataGet ) {
			settings.iDraw++;
			_fnProcessingDisplay( settings, true );
	
			_fnBuildAjax(
				settings,
				_fnAjaxParameters( settings ),
				function(json) {
					_fnAjaxUpdateDraw( settings, json );
				}
			);
	
			return false;
		}
		return true;
	}
	
	
	/**
	 * Build up the parameters in an object needed for a server-side processing
	 * request. Note that this is basically done twice, is different ways - a modern
	 * method which is used by default in DataTables 1.10 which uses objects and
	 * arrays, or the 1.9- method with is name / value pairs. 1.9 method is used if
	 * the sAjaxSource option is used in the initialisation, or the legacyAjax
	 * option is set.
	 *  @param {object} oSettings dataTables settings object
	 *  @returns {bool} block the table drawing or not
	 *  @memberof DataTable#oApi
	 */
	function _fnAjaxParameters( settings )
	{
		var
			columns = settings.aoColumns,
			columnCount = columns.length,
			features = settings.oFeatures,
			preSearch = settings.oPreviousSearch,
			preColSearch = settings.aoPreSearchCols,
			i, data = [], dataProp, column, columnSearch,
			sort = _fnSortFlatten( settings ),
			displayStart = settings._iDisplayStart,
			displayLength = features.bPaginate !== false ?
				settings._iDisplayLength :
				-1;
	
		var param = function ( name, value ) {
			data.push( { 'name': name, 'value': value } );
		};
	
		// DataTables 1.9- compatible method
		param( 'sEcho',          settings.iDraw );
		param( 'iColumns',       columnCount );
		param( 'sColumns',       _pluck( columns, 'sName' ).join(',') );
		param( 'iDisplayStart',  displayStart );
		param( 'iDisplayLength', displayLength );
	
		// DataTables 1.10+ method
		var d = {
			draw:    settings.iDraw,
			columns: [],
			order:   [],
			start:   displayStart,
			length:  displayLength,
			search:  {
				value: preSearch.sSearch,
				regex: preSearch.bRegex
			}
		};
	
		for ( i=0 ; i<columnCount ; i++ ) {
			column = columns[i];
			columnSearch = preColSearch[i];
			dataProp = typeof column.mData=="function" ? 'function' : column.mData ;
	
			d.columns.push( {
				data:       dataProp,
				name:       column.sName,
				searchable: column.bSearchable,
				orderable:  column.bSortable,
				search:     {
					value: columnSearch.sSearch,
					regex: columnSearch.bRegex
				}
			} );
	
			param( "mDataProp_"+i, dataProp );
	
			if ( features.bFilter ) {
				param( 'sSearch_'+i,     columnSearch.sSearch );
				param( 'bRegex_'+i,      columnSearch.bRegex );
				param( 'bSearchable_'+i, column.bSearchable );
			}
	
			if ( features.bSort ) {
				param( 'bSortable_'+i, column.bSortable );
			}
		}
	
		if ( features.bFilter ) {
			param( 'sSearch', preSearch.sSearch );
			param( 'bRegex', preSearch.bRegex );
		}
	
		if ( features.bSort ) {
			$.each( sort, function ( i, val ) {
				d.order.push( { column: val.col, dir: val.dir } );
	
				param( 'iSortCol_'+i, val.col );
				param( 'sSortDir_'+i, val.dir );
			} );
	
			param( 'iSortingCols', sort.length );
		}
	
		// If the legacy.ajax parameter is null, then we automatically decide which
		// form to use, based on sAjaxSource
		var legacy = DataTable.ext.legacy.ajax;
		if ( legacy === null ) {
			return settings.sAjaxSource ? data : d;
		}
	
		// Otherwise, if legacy has been specified then we use that to decide on the
		// form
		return legacy ? data : d;
	}
	
	
	/**
	 * Data the data from the server (nuking the old) and redraw the table
	 *  @param {object} oSettings dataTables settings object
	 *  @param {object} json json data return from the server.
	 *  @param {string} json.sEcho Tracking flag for DataTables to match requests
	 *  @param {int} json.iTotalRecords Number of records in the data set, not accounting for filtering
	 *  @param {int} json.iTotalDisplayRecords Number of records in the data set, accounting for filtering
	 *  @param {array} json.aaData The data to display on this page
	 *  @param {string} [json.sColumns] Column ordering (sName, comma separated)
	 *  @memberof DataTable#oApi
	 */
	function _fnAjaxUpdateDraw ( settings, json )
	{
		// v1.10 uses camelCase variables, while 1.9 uses Hungarian notation.
		// Support both
		var compat = function ( old, modern ) {
			return json[old] !== undefined ? json[old] : json[modern];
		};
	
		var data = _fnAjaxDataSrc( settings, json );
		var draw            = compat( 'sEcho',                'draw' );
		var recordsTotal    = compat( 'iTotalRecords',        'recordsTotal' );
		var recordsFiltered = compat( 'iTotalDisplayRecords', 'recordsFiltered' );
	
		if ( draw ) {
			// Protect against out of sequence returns
			if ( draw*1 < settings.iDraw ) {
				return;
			}
			settings.iDraw = draw * 1;
		}
	
		_fnClearTable( settings );
		settings._iRecordsTotal   = parseInt(recordsTotal, 10);
		settings._iRecordsDisplay = parseInt(recordsFiltered, 10);
	
		for ( var i=0, ien=data.length ; i<ien ; i++ ) {
			_fnAddData( settings, data[i] );
		}
		settings.aiDisplay = settings.aiDisplayMaster.slice();
	
		settings.bAjaxDataGet = false;
		_fnDraw( settings );
	
		if ( ! settings._bInitComplete ) {
			_fnInitComplete( settings, json );
		}
	
		settings.bAjaxDataGet = true;
		_fnProcessingDisplay( settings, false );
	}
	
	
	/**
	 * Get the data from the JSON data source to use for drawing a table. Using
	 * `_fnGetObjectDataFn` allows the data to be sourced from a property of the
	 * source object, or from a processing function.
	 *  @param {object} oSettings dataTables settings object
	 *  @param  {object} json Data source object / array from the server
	 *  @return {array} Array of data to use
	 */
	function _fnAjaxDataSrc ( oSettings, json )
	{
		var dataSrc = $.isPlainObject( oSettings.ajax ) && oSettings.ajax.dataSrc !== undefined ?
			oSettings.ajax.dataSrc :
			oSettings.sAjaxDataProp; // Compatibility with 1.9-.
	
		// Compatibility with 1.9-. In order to read from aaData, check if the
		// default has been changed, if not, check for aaData
		if ( dataSrc === 'data' ) {
			return json.aaData || json[dataSrc];
		}
	
		return dataSrc !== "" ?
			_fnGetObjectDataFn( dataSrc )( json ) :
			json;
	}
	
	/**
	 * Generate the node required for filtering text
	 *  @returns {node} Filter control element
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnFeatureHtmlFilter ( settings )
	{
		var classes = settings.oClasses;
		var tableId = settings.sTableId;
		var language = settings.oLanguage;
		var previousSearch = settings.oPreviousSearch;
		var features = settings.aanFeatures;
		var input = '<input type="search" class="'+classes.sFilterInput+'"/>';
	
		var str = language.sSearch;
		str = str.match(/_INPUT_/) ?
			str.replace('_INPUT_', input) :
			str+input;
	
		var filter = $('<div/>', {
				'id': ! features.f ? tableId+'_filter' : null,
				'class': classes.sFilter
			} )
			.append( $('<label/>' ).append( str ) );
	
		var searchFn = function() {
			/* Update all other filter input elements for the new display */
			var n = features.f;
			var val = !this.value ? "" : this.value; // mental IE8 fix :-(
	
			/* Now do the filter */
			if ( val != previousSearch.sSearch ) {
				_fnFilterComplete( settings, {
					"sSearch": val,
					"bRegex": previousSearch.bRegex,
					"bSmart": previousSearch.bSmart ,
					"bCaseInsensitive": previousSearch.bCaseInsensitive
				} );
	
				// Need to redraw, without resorting
				settings._iDisplayStart = 0;
				_fnDraw( settings );
			}
		};
	
		var searchDelay = settings.searchDelay !== null ?
			settings.searchDelay :
			_fnDataSource( settings ) === 'ssp' ?
				400 :
				0;
	
		var jqFilter = $('input', filter)
			.val( previousSearch.sSearch )
			.attr( 'placeholder', language.sSearchPlaceholder )
			.on(
				'keyup.DT search.DT input.DT paste.DT cut.DT',
				searchDelay ?
					_fnThrottle( searchFn, searchDelay ) :
					searchFn
			)
			.on( 'keypress.DT', function(e) {
				/* Prevent form submission */
				if ( e.keyCode == 13 ) {
					return false;
				}
			} )
			.attr('aria-controls', tableId);
	
		// Update the input elements whenever the table is filtered
		$(settings.nTable).on( 'search.dt.DT', function ( ev, s ) {
			if ( settings === s ) {
				// IE9 throws an 'unknown error' if document.activeElement is used
				// inside an iframe or frame...
				try {
					if ( jqFilter[0] !== document.activeElement ) {
						jqFilter.val( previousSearch.sSearch );
					}
				}
				catch ( e ) {}
			}
		} );
	
		return filter[0];
	}
	
	
	/**
	 * Filter the table using both the global filter and column based filtering
	 *  @param {object} oSettings dataTables settings object
	 *  @param {object} oSearch search information
	 *  @param {int} [iForce] force a research of the master array (1) or not (undefined or 0)
	 *  @memberof DataTable#oApi
	 */
	function _fnFilterComplete ( oSettings, oInput, iForce )
	{
		var oPrevSearch = oSettings.oPreviousSearch;
		var aoPrevSearch = oSettings.aoPreSearchCols;
		var fnSaveFilter = function ( oFilter ) {
			/* Save the filtering values */
			oPrevSearch.sSearch = oFilter.sSearch;
			oPrevSearch.bRegex = oFilter.bRegex;
			oPrevSearch.bSmart = oFilter.bSmart;
			oPrevSearch.bCaseInsensitive = oFilter.bCaseInsensitive;
		};
		var fnRegex = function ( o ) {
			// Backwards compatibility with the bEscapeRegex option
			return o.bEscapeRegex !== undefined ? !o.bEscapeRegex : o.bRegex;
		};
	
		// Resolve any column types that are unknown due to addition or invalidation
		// @todo As per sort - can this be moved into an event handler?
		_fnColumnTypes( oSettings );
	
		/* In server-side processing all filtering is done by the server, so no point hanging around here */
		if ( _fnDataSource( oSettings ) != 'ssp' )
		{
			/* Global filter */
			_fnFilter( oSettings, oInput.sSearch, iForce, fnRegex(oInput), oInput.bSmart, oInput.bCaseInsensitive );
			fnSaveFilter( oInput );
	
			/* Now do the individual column filter */
			for ( var i=0 ; i<aoPrevSearch.length ; i++ )
			{
				_fnFilterColumn( oSettings, aoPrevSearch[i].sSearch, i, fnRegex(aoPrevSearch[i]),
					aoPrevSearch[i].bSmart, aoPrevSearch[i].bCaseInsensitive );
			}
	
			/* Custom filtering */
			_fnFilterCustom( oSettings );
		}
		else
		{
			fnSaveFilter( oInput );
		}
	
		/* Tell the draw function we have been filtering */
		oSettings.bFiltered = true;
		_fnCallbackFire( oSettings, null, 'search', [oSettings] );
	}
	
	
	/**
	 * Apply custom filtering functions
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnFilterCustom( settings )
	{
		var filters = DataTable.ext.search;
		var displayRows = settings.aiDisplay;
		var row, rowIdx;
	
		for ( var i=0, ien=filters.length ; i<ien ; i++ ) {
			var rows = [];
	
			// Loop over each row and see if it should be included
			for ( var j=0, jen=displayRows.length ; j<jen ; j++ ) {
				rowIdx = displayRows[ j ];
				row = settings.aoData[ rowIdx ];
	
				if ( filters[i]( settings, row._aFilterData, rowIdx, row._aData, j ) ) {
					rows.push( rowIdx );
				}
			}
	
			// So the array reference doesn't break set the results into the
			// existing array
			displayRows.length = 0;
			$.merge( displayRows, rows );
		}
	}
	
	
	/**
	 * Filter the table on a per-column basis
	 *  @param {object} oSettings dataTables settings object
	 *  @param {string} sInput string to filter on
	 *  @param {int} iColumn column to filter
	 *  @param {bool} bRegex treat search string as a regular expression or not
	 *  @param {bool} bSmart use smart filtering or not
	 *  @param {bool} bCaseInsensitive Do case insenstive matching or not
	 *  @memberof DataTable#oApi
	 */
	function _fnFilterColumn ( settings, searchStr, colIdx, regex, smart, caseInsensitive )
	{
		if ( searchStr === '' ) {
			return;
		}
	
		var data;
		var out = [];
		var display = settings.aiDisplay;
		var rpSearch = _fnFilterCreateSearch( searchStr, regex, smart, caseInsensitive );
	
		for ( var i=0 ; i<display.length ; i++ ) {
			data = settings.aoData[ display[i] ]._aFilterData[ colIdx ];
	
			if ( rpSearch.test( data ) ) {
				out.push( display[i] );
			}
		}
	
		settings.aiDisplay = out;
	}
	
	
	/**
	 * Filter the data table based on user input and draw the table
	 *  @param {object} settings dataTables settings object
	 *  @param {string} input string to filter on
	 *  @param {int} force optional - force a research of the master array (1) or not (undefined or 0)
	 *  @param {bool} regex treat as a regular expression or not
	 *  @param {bool} smart perform smart filtering or not
	 *  @param {bool} caseInsensitive Do case insenstive matching or not
	 *  @memberof DataTable#oApi
	 */
	function _fnFilter( settings, input, force, regex, smart, caseInsensitive )
	{
		var rpSearch = _fnFilterCreateSearch( input, regex, smart, caseInsensitive );
		var prevSearch = settings.oPreviousSearch.sSearch;
		var displayMaster = settings.aiDisplayMaster;
		var display, invalidated, i;
		var filtered = [];
	
		// Need to take account of custom filtering functions - always filter
		if ( DataTable.ext.search.length !== 0 ) {
			force = true;
		}
	
		// Check if any of the rows were invalidated
		invalidated = _fnFilterData( settings );
	
		// If the input is blank - we just want the full data set
		if ( input.length <= 0 ) {
			settings.aiDisplay = displayMaster.slice();
		}
		else {
			// New search - start from the master array
			if ( invalidated ||
				 force ||
				 prevSearch.length > input.length ||
				 input.indexOf(prevSearch) !== 0 ||
				 settings.bSorted // On resort, the display master needs to be
				                  // re-filtered since indexes will have changed
			) {
				settings.aiDisplay = displayMaster.slice();
			}
	
			// Search the display array
			display = settings.aiDisplay;
	
			for ( i=0 ; i<display.length ; i++ ) {
				if ( rpSearch.test( settings.aoData[ display[i] ]._sFilterRow ) ) {
					filtered.push( display[i] );
				}
			}
	
			settings.aiDisplay = filtered;
		}
	}
	
	
	/**
	 * Build a regular expression object suitable for searching a table
	 *  @param {string} sSearch string to search for
	 *  @param {bool} bRegex treat as a regular expression or not
	 *  @param {bool} bSmart perform smart filtering or not
	 *  @param {bool} bCaseInsensitive Do case insensitive matching or not
	 *  @returns {RegExp} constructed object
	 *  @memberof DataTable#oApi
	 */
	function _fnFilterCreateSearch( search, regex, smart, caseInsensitive )
	{
		search = regex ?
			search :
			_fnEscapeRegex( search );
		
		if ( smart ) {
			/* For smart filtering we want to allow the search to work regardless of
			 * word order. We also want double quoted text to be preserved, so word
			 * order is important - a la google. So this is what we want to
			 * generate:
			 * 
			 * ^(?=.*?\bone\b)(?=.*?\btwo three\b)(?=.*?\bfour\b).*$
			 */
			var a = $.map( search.match( /"[^"]+"|[^ ]+/g ) || [''], function ( word ) {
				if ( word.charAt(0) === '"' ) {
					var m = word.match( /^"(.*)"$/ );
					word = m ? m[1] : word;
				}
	
				return word.replace('"', '');
			} );
	
			search = '^(?=.*?'+a.join( ')(?=.*?' )+').*$';
		}
	
		return new RegExp( search, caseInsensitive ? 'i' : '' );
	}
	
	
	/**
	 * Escape a string such that it can be used in a regular expression
	 *  @param {string} sVal string to escape
	 *  @returns {string} escaped string
	 *  @memberof DataTable#oApi
	 */
	var _fnEscapeRegex = DataTable.util.escapeRegex;
	
	var __filter_div = $('<div>')[0];
	var __filter_div_textContent = __filter_div.textContent !== undefined;
	
	// Update the filtering data for each row if needed (by invalidation or first run)
	function _fnFilterData ( settings )
	{
		var columns = settings.aoColumns;
		var column;
		var i, j, ien, jen, filterData, cellData, row;
		var fomatters = DataTable.ext.type.search;
		var wasInvalidated = false;
	
		for ( i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
			row = settings.aoData[i];
	
			if ( ! row._aFilterData ) {
				filterData = [];
	
				for ( j=0, jen=columns.length ; j<jen ; j++ ) {
					column = columns[j];
	
					if ( column.bSearchable ) {
						cellData = _fnGetCellData( settings, i, j, 'filter' );
	
						if ( fomatters[ column.sType ] ) {
							cellData = fomatters[ column.sType ]( cellData );
						}
	
						// Search in DataTables 1.10 is string based. In 1.11 this
						// should be altered to also allow strict type checking.
						if ( cellData === null ) {
							cellData = '';
						}
	
						if ( typeof cellData !== 'string' && cellData.toString ) {
							cellData = cellData.toString();
						}
					}
					else {
						cellData = '';
					}
	
					// If it looks like there is an HTML entity in the string,
					// attempt to decode it so sorting works as expected. Note that
					// we could use a single line of jQuery to do this, but the DOM
					// method used here is much faster http://jsperf.com/html-decode
					if ( cellData.indexOf && cellData.indexOf('&') !== -1 ) {
						__filter_div.innerHTML = cellData;
						cellData = __filter_div_textContent ?
							__filter_div.textContent :
							__filter_div.innerText;
					}
	
					if ( cellData.replace ) {
						cellData = cellData.replace(/[\r\n]/g, '');
					}
	
					filterData.push( cellData );
				}
	
				row._aFilterData = filterData;
				row._sFilterRow = filterData.join('  ');
				wasInvalidated = true;
			}
		}
	
		return wasInvalidated;
	}
	
	
	/**
	 * Convert from the internal Hungarian notation to camelCase for external
	 * interaction
	 *  @param {object} obj Object to convert
	 *  @returns {object} Inverted object
	 *  @memberof DataTable#oApi
	 */
	function _fnSearchToCamel ( obj )
	{
		return {
			search:          obj.sSearch,
			smart:           obj.bSmart,
			regex:           obj.bRegex,
			caseInsensitive: obj.bCaseInsensitive
		};
	}
	
	
	
	/**
	 * Convert from camelCase notation to the internal Hungarian. We could use the
	 * Hungarian convert function here, but this is cleaner
	 *  @param {object} obj Object to convert
	 *  @returns {object} Inverted object
	 *  @memberof DataTable#oApi
	 */
	function _fnSearchToHung ( obj )
	{
		return {
			sSearch:          obj.search,
			bSmart:           obj.smart,
			bRegex:           obj.regex,
			bCaseInsensitive: obj.caseInsensitive
		};
	}
	
	/**
	 * Generate the node required for the info display
	 *  @param {object} oSettings dataTables settings object
	 *  @returns {node} Information element
	 *  @memberof DataTable#oApi
	 */
	function _fnFeatureHtmlInfo ( settings )
	{
		var
			tid = settings.sTableId,
			nodes = settings.aanFeatures.i,
			n = $('<div/>', {
				'class': settings.oClasses.sInfo,
				'id': ! nodes ? tid+'_info' : null
			} );
	
		if ( ! nodes ) {
			// Update display on each draw
			settings.aoDrawCallback.push( {
				"fn": _fnUpdateInfo,
				"sName": "information"
			} );
	
			n
				.attr( 'role', 'status' )
				.attr( 'aria-live', 'polite' );
	
			// Table is described by our info div
			$(settings.nTable).attr( 'aria-describedby', tid+'_info' );
		}
	
		return n[0];
	}
	
	
	/**
	 * Update the information elements in the display
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnUpdateInfo ( settings )
	{
		/* Show information about the table */
		var nodes = settings.aanFeatures.i;
		if ( nodes.length === 0 ) {
			return;
		}
	
		var
			lang  = settings.oLanguage,
			start = settings._iDisplayStart+1,
			end   = settings.fnDisplayEnd(),
			max   = settings.fnRecordsTotal(),
			total = settings.fnRecordsDisplay(),
			out   = total ?
				lang.sInfo :
				lang.sInfoEmpty;
	
		if ( total !== max ) {
			/* Record set after filtering */
			out += ' ' + lang.sInfoFiltered;
		}
	
		// Convert the macros
		out += lang.sInfoPostFix;
		out = _fnInfoMacros( settings, out );
	
		var callback = lang.fnInfoCallback;
		if ( callback !== null ) {
			out = callback.call( settings.oInstance,
				settings, start, end, max, total, out
			);
		}
	
		$(nodes).html( out );
	}
	
	
	function _fnInfoMacros ( settings, str )
	{
		// When infinite scrolling, we are always starting at 1. _iDisplayStart is used only
		// internally
		var
			formatter  = settings.fnFormatNumber,
			start      = settings._iDisplayStart+1,
			len        = settings._iDisplayLength,
			vis        = settings.fnRecordsDisplay(),
			all        = len === -1;
	
		return str.
			replace(/_START_/g, formatter.call( settings, start ) ).
			replace(/_END_/g,   formatter.call( settings, settings.fnDisplayEnd() ) ).
			replace(/_MAX_/g,   formatter.call( settings, settings.fnRecordsTotal() ) ).
			replace(/_TOTAL_/g, formatter.call( settings, vis ) ).
			replace(/_PAGE_/g,  formatter.call( settings, all ? 1 : Math.ceil( start / len ) ) ).
			replace(/_PAGES_/g, formatter.call( settings, all ? 1 : Math.ceil( vis / len ) ) );
	}
	
	
	
	/**
	 * Draw the table for the first time, adding all required features
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnInitialise ( settings )
	{
		var i, iLen, iAjaxStart=settings.iInitDisplayStart;
		var columns = settings.aoColumns, column;
		var features = settings.oFeatures;
		var deferLoading = settings.bDeferLoading; // value modified by the draw
	
		/* Ensure that the table data is fully initialised */
		if ( ! settings.bInitialised ) {
			setTimeout( function(){ _fnInitialise( settings ); }, 200 );
			return;
		}
	
		/* Show the display HTML options */
		_fnAddOptionsHtml( settings );
	
		/* Build and draw the header / footer for the table */
		_fnBuildHead( settings );
		_fnDrawHead( settings, settings.aoHeader );
		_fnDrawHead( settings, settings.aoFooter );
	
		/* Okay to show that something is going on now */
		_fnProcessingDisplay( settings, true );
	
		/* Calculate sizes for columns */
		if ( features.bAutoWidth ) {
			_fnCalculateColumnWidths( settings );
		}
	
		for ( i=0, iLen=columns.length ; i<iLen ; i++ ) {
			column = columns[i];
	
			if ( column.sWidth ) {
				column.nTh.style.width = _fnStringToCss( column.sWidth );
			}
		}
	
		_fnCallbackFire( settings, null, 'preInit', [settings] );
	
		// If there is default sorting required - let's do it. The sort function
		// will do the drawing for us. Otherwise we draw the table regardless of the
		// Ajax source - this allows the table to look initialised for Ajax sourcing
		// data (show 'loading' message possibly)
		_fnReDraw( settings );
	
		// Server-side processing init complete is done by _fnAjaxUpdateDraw
		var dataSrc = _fnDataSource( settings );
		if ( dataSrc != 'ssp' || deferLoading ) {
			// if there is an ajax source load the data
			if ( dataSrc == 'ajax' ) {
				_fnBuildAjax( settings, [], function(json) {
					var aData = _fnAjaxDataSrc( settings, json );
	
					// Got the data - add it to the table
					for ( i=0 ; i<aData.length ; i++ ) {
						_fnAddData( settings, aData[i] );
					}
	
					// Reset the init display for cookie saving. We've already done
					// a filter, and therefore cleared it before. So we need to make
					// it appear 'fresh'
					settings.iInitDisplayStart = iAjaxStart;
	
					_fnReDraw( settings );
	
					_fnProcessingDisplay( settings, false );
					_fnInitComplete( settings, json );
				}, settings );
			}
			else {
				_fnProcessingDisplay( settings, false );
				_fnInitComplete( settings );
			}
		}
	}
	
	
	/**
	 * Draw the table for the first time, adding all required features
	 *  @param {object} oSettings dataTables settings object
	 *  @param {object} [json] JSON from the server that completed the table, if using Ajax source
	 *    with client-side processing (optional)
	 *  @memberof DataTable#oApi
	 */
	function _fnInitComplete ( settings, json )
	{
		settings._bInitComplete = true;
	
		// When data was added after the initialisation (data or Ajax) we need to
		// calculate the column sizing
		if ( json || settings.oInit.aaData ) {
			_fnAdjustColumnSizing( settings );
		}
	
		_fnCallbackFire( settings, null, 'plugin-init', [settings, json] );
		_fnCallbackFire( settings, 'aoInitComplete', 'init', [settings, json] );
	}
	
	
	function _fnLengthChange ( settings, val )
	{
		var len = parseInt( val, 10 );
		settings._iDisplayLength = len;
	
		_fnLengthOverflow( settings );
	
		// Fire length change event
		_fnCallbackFire( settings, null, 'length', [settings, len] );
	}
	
	
	/**
	 * Generate the node required for user display length changing
	 *  @param {object} settings dataTables settings object
	 *  @returns {node} Display length feature node
	 *  @memberof DataTable#oApi
	 */
	function _fnFeatureHtmlLength ( settings )
	{
		var
			classes  = settings.oClasses,
			tableId  = settings.sTableId,
			menu     = settings.aLengthMenu,
			d2       = $.isArray( menu[0] ),
			lengths  = d2 ? menu[0] : menu,
			language = d2 ? menu[1] : menu;
	
		var select = $('<select/>', {
			'name':          tableId+'_length',
			'aria-controls': tableId,
			'class':         classes.sLengthSelect
		} );
	
		for ( var i=0, ien=lengths.length ; i<ien ; i++ ) {
			select[0][ i ] = new Option(
				typeof language[i] === 'number' ?
					settings.fnFormatNumber( language[i] ) :
					language[i],
				lengths[i]
			);
		}
	
		var div = $('<div><label/></div>').addClass( classes.sLength );
		if ( ! settings.aanFeatures.l ) {
			div[0].id = tableId+'_length';
		}
	
		div.children().append(
			settings.oLanguage.sLengthMenu.replace( '_MENU_', select[0].outerHTML )
		);
	
		// Can't use `select` variable as user might provide their own and the
		// reference is broken by the use of outerHTML
		$('select', div)
			.val( settings._iDisplayLength )
			.on( 'change.DT', function(e) {
				_fnLengthChange( settings, $(this).val() );
				_fnDraw( settings );
			} );
	
		// Update node value whenever anything changes the table's length
		$(settings.nTable).on( 'length.dt.DT', function (e, s, len) {
			if ( settings === s ) {
				$('select', div).val( len );
			}
		} );
	
		return div[0];
	}
	
	
	
	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Note that most of the paging logic is done in
	 * DataTable.ext.pager
	 */
	
	/**
	 * Generate the node required for default pagination
	 *  @param {object} oSettings dataTables settings object
	 *  @returns {node} Pagination feature node
	 *  @memberof DataTable#oApi
	 */
	function _fnFeatureHtmlPaginate ( settings )
	{
		var
			type   = settings.sPaginationType,
			plugin = DataTable.ext.pager[ type ],
			modern = typeof plugin === 'function',
			redraw = function( settings ) {
				_fnDraw( settings );
			},
			node = $('<div/>').addClass( settings.oClasses.sPaging + type )[0],
			features = settings.aanFeatures;
	
		if ( ! modern ) {
			plugin.fnInit( settings, node, redraw );
		}
	
		/* Add a draw callback for the pagination on first instance, to update the paging display */
		if ( ! features.p )
		{
			node.id = settings.sTableId+'_paginate';
	
			settings.aoDrawCallback.push( {
				"fn": function( settings ) {
					if ( modern ) {
						var
							start      = settings._iDisplayStart,
							len        = settings._iDisplayLength,
							visRecords = settings.fnRecordsDisplay(),
							all        = len === -1,
							page = all ? 0 : Math.ceil( start / len ),
							pages = all ? 1 : Math.ceil( visRecords / len ),
							buttons = plugin(page, pages),
							i, ien;
	
						for ( i=0, ien=features.p.length ; i<ien ; i++ ) {
							_fnRenderer( settings, 'pageButton' )(
								settings, features.p[i], i, buttons, page, pages
							);
						}
					}
					else {
						plugin.fnUpdate( settings, redraw );
					}
				},
				"sName": "pagination"
			} );
		}
	
		return node;
	}
	
	
	/**
	 * Alter the display settings to change the page
	 *  @param {object} settings DataTables settings object
	 *  @param {string|int} action Paging action to take: "first", "previous",
	 *    "next" or "last" or page number to jump to (integer)
	 *  @param [bool] redraw Automatically draw the update or not
	 *  @returns {bool} true page has changed, false - no change
	 *  @memberof DataTable#oApi
	 */
	function _fnPageChange ( settings, action, redraw )
	{
		var
			start     = settings._iDisplayStart,
			len       = settings._iDisplayLength,
			records   = settings.fnRecordsDisplay();
	
		if ( records === 0 || len === -1 )
		{
			start = 0;
		}
		else if ( typeof action === "number" )
		{
			start = action * len;
	
			if ( start > records )
			{
				start = 0;
			}
		}
		else if ( action == "first" )
		{
			start = 0;
		}
		else if ( action == "previous" )
		{
			start = len >= 0 ?
				start - len :
				0;
	
			if ( start < 0 )
			{
			  start = 0;
			}
		}
		else if ( action == "next" )
		{
			if ( start + len < records )
			{
				start += len;
			}
		}
		else if ( action == "last" )
		{
			start = Math.floor( (records-1) / len) * len;
		}
		else
		{
			_fnLog( settings, 0, "Unknown paging action: "+action, 5 );
		}
	
		var changed = settings._iDisplayStart !== start;
		settings._iDisplayStart = start;
	
		if ( changed ) {
			_fnCallbackFire( settings, null, 'page', [settings] );
	
			if ( redraw ) {
				_fnDraw( settings );
			}
		}
	
		return changed;
	}
	
	
	
	/**
	 * Generate the node required for the processing node
	 *  @param {object} settings dataTables settings object
	 *  @returns {node} Processing element
	 *  @memberof DataTable#oApi
	 */
	function _fnFeatureHtmlProcessing ( settings )
	{
		return $('<div/>', {
				'id': ! settings.aanFeatures.r ? settings.sTableId+'_processing' : null,
				'class': settings.oClasses.sProcessing
			} )
			.html( settings.oLanguage.sProcessing )
			.insertBefore( settings.nTable )[0];
	}
	
	
	/**
	 * Display or hide the processing indicator
	 *  @param {object} settings dataTables settings object
	 *  @param {bool} show Show the processing indicator (true) or not (false)
	 *  @memberof DataTable#oApi
	 */
	function _fnProcessingDisplay ( settings, show )
	{
		if ( settings.oFeatures.bProcessing ) {
			$(settings.aanFeatures.r).css( 'display', show ? 'block' : 'none' );
		}
	
		_fnCallbackFire( settings, null, 'processing', [settings, show] );
	}
	
	/**
	 * Add any control elements for the table - specifically scrolling
	 *  @param {object} settings dataTables settings object
	 *  @returns {node} Node to add to the DOM
	 *  @memberof DataTable#oApi
	 */
	function _fnFeatureHtmlTable ( settings )
	{
		var table = $(settings.nTable);
	
		// Add the ARIA grid role to the table
		table.attr( 'role', 'grid' );
	
		// Scrolling from here on in
		var scroll = settings.oScroll;
	
		if ( scroll.sX === '' && scroll.sY === '' ) {
			return settings.nTable;
		}
	
		var scrollX = scroll.sX;
		var scrollY = scroll.sY;
		var classes = settings.oClasses;
		var caption = table.children('caption');
		var captionSide = caption.length ? caption[0]._captionSide : null;
		var headerClone = $( table[0].cloneNode(false) );
		var footerClone = $( table[0].cloneNode(false) );
		var footer = table.children('tfoot');
		var _div = '<div/>';
		var size = function ( s ) {
			return !s ? null : _fnStringToCss( s );
		};
	
		if ( ! footer.length ) {
			footer = null;
		}
	
		/*
		 * The HTML structure that we want to generate in this function is:
		 *  div - scroller
		 *    div - scroll head
		 *      div - scroll head inner
		 *        table - scroll head table
		 *          thead - thead
		 *    div - scroll body
		 *      table - table (master table)
		 *        thead - thead clone for sizing
		 *        tbody - tbody
		 *    div - scroll foot
		 *      div - scroll foot inner
		 *        table - scroll foot table
		 *          tfoot - tfoot
		 */
		var scroller = $( _div, { 'class': classes.sScrollWrapper } )
			.append(
				$(_div, { 'class': classes.sScrollHead } )
					.css( {
						overflow: 'hidden',
						position: 'relative',
						border: 0,
						width: scrollX ? size(scrollX) : '100%'
					} )
					.append(
						$(_div, { 'class': classes.sScrollHeadInner } )
							.css( {
								'box-sizing': 'content-box',
								width: scroll.sXInner || '100%'
							} )
							.append(
								headerClone
									.removeAttr('id')
									.css( 'margin-left', 0 )
									.append( captionSide === 'top' ? caption : null )
									.append(
										table.children('thead')
									)
							)
					)
			)
			.append(
				$(_div, { 'class': classes.sScrollBody } )
					.css( {
						position: 'relative',
						overflow: 'auto',
						width: size( scrollX )
					} )
					.append( table )
			);
	
		if ( footer ) {
			scroller.append(
				$(_div, { 'class': classes.sScrollFoot } )
					.css( {
						overflow: 'hidden',
						border: 0,
						width: scrollX ? size(scrollX) : '100%'
					} )
					.append(
						$(_div, { 'class': classes.sScrollFootInner } )
							.append(
								footerClone
									.removeAttr('id')
									.css( 'margin-left', 0 )
									.append( captionSide === 'bottom' ? caption : null )
									.append(
										table.children('tfoot')
									)
							)
					)
			);
		}
	
		var children = scroller.children();
		var scrollHead = children[0];
		var scrollBody = children[1];
		var scrollFoot = footer ? children[2] : null;
	
		// When the body is scrolled, then we also want to scroll the headers
		if ( scrollX ) {
			$(scrollBody).on( 'scroll.DT', function (e) {
				var scrollLeft = this.scrollLeft;
	
				scrollHead.scrollLeft = scrollLeft;
	
				if ( footer ) {
					scrollFoot.scrollLeft = scrollLeft;
				}
			} );
		}
	
		$(scrollBody).css(
			scrollY && scroll.bCollapse ? 'max-height' : 'height', 
			scrollY
		);
	
		settings.nScrollHead = scrollHead;
		settings.nScrollBody = scrollBody;
		settings.nScrollFoot = scrollFoot;
	
		// On redraw - align columns
		settings.aoDrawCallback.push( {
			"fn": _fnScrollDraw,
			"sName": "scrolling"
		} );
	
		return scroller[0];
	}
	
	
	
	/**
	 * Update the header, footer and body tables for resizing - i.e. column
	 * alignment.
	 *
	 * Welcome to the most horrible function DataTables. The process that this
	 * function follows is basically:
	 *   1. Re-create the table inside the scrolling div
	 *   2. Take live measurements from the DOM
	 *   3. Apply the measurements to align the columns
	 *   4. Clean up
	 *
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnScrollDraw ( settings )
	{
		// Given that this is such a monster function, a lot of variables are use
		// to try and keep the minimised size as small as possible
		var
			scroll         = settings.oScroll,
			scrollX        = scroll.sX,
			scrollXInner   = scroll.sXInner,
			scrollY        = scroll.sY,
			barWidth       = scroll.iBarWidth,
			divHeader      = $(settings.nScrollHead),
			divHeaderStyle = divHeader[0].style,
			divHeaderInner = divHeader.children('div'),
			divHeaderInnerStyle = divHeaderInner[0].style,
			divHeaderTable = divHeaderInner.children('table'),
			divBodyEl      = settings.nScrollBody,
			divBody        = $(divBodyEl),
			divBodyStyle   = divBodyEl.style,
			divFooter      = $(settings.nScrollFoot),
			divFooterInner = divFooter.children('div'),
			divFooterTable = divFooterInner.children('table'),
			header         = $(settings.nTHead),
			table          = $(settings.nTable),
			tableEl        = table[0],
			tableStyle     = tableEl.style,
			footer         = settings.nTFoot ? $(settings.nTFoot) : null,
			browser        = settings.oBrowser,
			ie67           = browser.bScrollOversize,
			dtHeaderCells  = _pluck( settings.aoColumns, 'nTh' ),
			headerTrgEls, footerTrgEls,
			headerSrcEls, footerSrcEls,
			headerCopy, footerCopy,
			headerWidths=[], footerWidths=[],
			headerContent=[], footerContent=[],
			idx, correction, sanityWidth,
			zeroOut = function(nSizer) {
				var style = nSizer.style;
				style.paddingTop = "0";
				style.paddingBottom = "0";
				style.borderTopWidth = "0";
				style.borderBottomWidth = "0";
				style.height = 0;
			};
	
		// If the scrollbar visibility has changed from the last draw, we need to
		// adjust the column sizes as the table width will have changed to account
		// for the scrollbar
		var scrollBarVis = divBodyEl.scrollHeight > divBodyEl.clientHeight;
		
		if ( settings.scrollBarVis !== scrollBarVis && settings.scrollBarVis !== undefined ) {
			settings.scrollBarVis = scrollBarVis;
			_fnAdjustColumnSizing( settings );
			return; // adjust column sizing will call this function again
		}
		else {
			settings.scrollBarVis = scrollBarVis;
		}
	
		/*
		 * 1. Re-create the table inside the scrolling div
		 */
	
		// Remove the old minimised thead and tfoot elements in the inner table
		table.children('thead, tfoot').remove();
	
		if ( footer ) {
			footerCopy = footer.clone().prependTo( table );
			footerTrgEls = footer.find('tr'); // the original tfoot is in its own table and must be sized
			footerSrcEls = footerCopy.find('tr');
		}
	
		// Clone the current header and footer elements and then place it into the inner table
		headerCopy = header.clone().prependTo( table );
		headerTrgEls = header.find('tr'); // original header is in its own table
		headerSrcEls = headerCopy.find('tr');
		headerCopy.find('th, td').removeAttr('tabindex');
	
	
		/*
		 * 2. Take live measurements from the DOM - do not alter the DOM itself!
		 */
	
		// Remove old sizing and apply the calculated column widths
		// Get the unique column headers in the newly created (cloned) header. We want to apply the
		// calculated sizes to this header
		if ( ! scrollX )
		{
			divBodyStyle.width = '100%';
			divHeader[0].style.width = '100%';
		}
	
		$.each( _fnGetUniqueThs( settings, headerCopy ), function ( i, el ) {
			idx = _fnVisibleToColumnIndex( settings, i );
			el.style.width = settings.aoColumns[idx].sWidth;
		} );
	
		if ( footer ) {
			_fnApplyToChildren( function(n) {
				n.style.width = "";
			}, footerSrcEls );
		}
	
		// Size the table as a whole
		sanityWidth = table.outerWidth();
		if ( scrollX === "" ) {
			// No x scrolling
			tableStyle.width = "100%";
	
			// IE7 will make the width of the table when 100% include the scrollbar
			// - which is shouldn't. When there is a scrollbar we need to take this
			// into account.
			if ( ie67 && (table.find('tbody').height() > divBodyEl.offsetHeight ||
				divBody.css('overflow-y') == "scroll")
			) {
				tableStyle.width = _fnStringToCss( table.outerWidth() - barWidth);
			}
	
			// Recalculate the sanity width
			sanityWidth = table.outerWidth();
		}
		else if ( scrollXInner !== "" ) {
			// legacy x scroll inner has been given - use it
			tableStyle.width = _fnStringToCss(scrollXInner);
	
			// Recalculate the sanity width
			sanityWidth = table.outerWidth();
		}
	
		// Hidden header should have zero height, so remove padding and borders. Then
		// set the width based on the real headers
	
		// Apply all styles in one pass
		_fnApplyToChildren( zeroOut, headerSrcEls );
	
		// Read all widths in next pass
		_fnApplyToChildren( function(nSizer) {
			headerContent.push( nSizer.innerHTML );
			headerWidths.push( _fnStringToCss( $(nSizer).css('width') ) );
		}, headerSrcEls );
	
		// Apply all widths in final pass
		_fnApplyToChildren( function(nToSize, i) {
			// Only apply widths to the DataTables detected header cells - this
			// prevents complex headers from having contradictory sizes applied
			if ( $.inArray( nToSize, dtHeaderCells ) !== -1 ) {
				nToSize.style.width = headerWidths[i];
			}
		}, headerTrgEls );
	
		$(headerSrcEls).height(0);
	
		/* Same again with the footer if we have one */
		if ( footer )
		{
			_fnApplyToChildren( zeroOut, footerSrcEls );
	
			_fnApplyToChildren( function(nSizer) {
				footerContent.push( nSizer.innerHTML );
				footerWidths.push( _fnStringToCss( $(nSizer).css('width') ) );
			}, footerSrcEls );
	
			_fnApplyToChildren( function(nToSize, i) {
				nToSize.style.width = footerWidths[i];
			}, footerTrgEls );
	
			$(footerSrcEls).height(0);
		}
	
	
		/*
		 * 3. Apply the measurements
		 */
	
		// "Hide" the header and footer that we used for the sizing. We need to keep
		// the content of the cell so that the width applied to the header and body
		// both match, but we want to hide it completely. We want to also fix their
		// width to what they currently are
		_fnApplyToChildren( function(nSizer, i) {
			nSizer.innerHTML = '<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+headerContent[i]+'</div>';
			nSizer.style.width = headerWidths[i];
		}, headerSrcEls );
	
		if ( footer )
		{
			_fnApplyToChildren( function(nSizer, i) {
				nSizer.innerHTML = '<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+footerContent[i]+'</div>';
				nSizer.style.width = footerWidths[i];
			}, footerSrcEls );
		}
	
		// Sanity check that the table is of a sensible width. If not then we are going to get
		// misalignment - try to prevent this by not allowing the table to shrink below its min width
		if ( table.outerWidth() < sanityWidth )
		{
			// The min width depends upon if we have a vertical scrollbar visible or not */
			correction = ((divBodyEl.scrollHeight > divBodyEl.offsetHeight ||
				divBody.css('overflow-y') == "scroll")) ?
					sanityWidth+barWidth :
					sanityWidth;
	
			// IE6/7 are a law unto themselves...
			if ( ie67 && (divBodyEl.scrollHeight >
				divBodyEl.offsetHeight || divBody.css('overflow-y') == "scroll")
			) {
				tableStyle.width = _fnStringToCss( correction-barWidth );
			}
	
			// And give the user a warning that we've stopped the table getting too small
			if ( scrollX === "" || scrollXInner !== "" ) {
				_fnLog( settings, 1, 'Possible column misalignment', 6 );
			}
		}
		else
		{
			correction = '100%';
		}
	
		// Apply to the container elements
		divBodyStyle.width = _fnStringToCss( correction );
		divHeaderStyle.width = _fnStringToCss( correction );
	
		if ( footer ) {
			settings.nScrollFoot.style.width = _fnStringToCss( correction );
		}
	
	
		/*
		 * 4. Clean up
		 */
		if ( ! scrollY ) {
			/* IE7< puts a vertical scrollbar in place (when it shouldn't be) due to subtracting
			 * the scrollbar height from the visible display, rather than adding it on. We need to
			 * set the height in order to sort this. Don't want to do it in any other browsers.
			 */
			if ( ie67 ) {
				divBodyStyle.height = _fnStringToCss( tableEl.offsetHeight+barWidth );
			}
		}
	
		/* Finally set the width's of the header and footer tables */
		var iOuterWidth = table.outerWidth();
		divHeaderTable[0].style.width = _fnStringToCss( iOuterWidth );
		divHeaderInnerStyle.width = _fnStringToCss( iOuterWidth );
	
		// Figure out if there are scrollbar present - if so then we need a the header and footer to
		// provide a bit more space to allow "overflow" scrolling (i.e. past the scrollbar)
		var bScrolling = table.height() > divBodyEl.clientHeight || divBody.css('overflow-y') == "scroll";
		var padding = 'padding' + (browser.bScrollbarLeft ? 'Left' : 'Right' );
		divHeaderInnerStyle[ padding ] = bScrolling ? barWidth+"px" : "0px";
	
		if ( footer ) {
			divFooterTable[0].style.width = _fnStringToCss( iOuterWidth );
			divFooterInner[0].style.width = _fnStringToCss( iOuterWidth );
			divFooterInner[0].style[padding] = bScrolling ? barWidth+"px" : "0px";
		}
	
		// Correct DOM ordering for colgroup - comes before the thead
		table.children('colgroup').insertBefore( table.children('thead') );
	
		/* Adjust the position of the header in case we loose the y-scrollbar */
		divBody.scroll();
	
		// If sorting or filtering has occurred, jump the scrolling back to the top
		// only if we aren't holding the position
		if ( (settings.bSorted || settings.bFiltered) && ! settings._drawHold ) {
			divBodyEl.scrollTop = 0;
		}
	}
	
	
	
	/**
	 * Apply a given function to the display child nodes of an element array (typically
	 * TD children of TR rows
	 *  @param {function} fn Method to apply to the objects
	 *  @param array {nodes} an1 List of elements to look through for display children
	 *  @param array {nodes} an2 Another list (identical structure to the first) - optional
	 *  @memberof DataTable#oApi
	 */
	function _fnApplyToChildren( fn, an1, an2 )
	{
		var index=0, i=0, iLen=an1.length;
		var nNode1, nNode2;
	
		while ( i < iLen ) {
			nNode1 = an1[i].firstChild;
			nNode2 = an2 ? an2[i].firstChild : null;
	
			while ( nNode1 ) {
				if ( nNode1.nodeType === 1 ) {
					if ( an2 ) {
						fn( nNode1, nNode2, index );
					}
					else {
						fn( nNode1, index );
					}
	
					index++;
				}
	
				nNode1 = nNode1.nextSibling;
				nNode2 = an2 ? nNode2.nextSibling : null;
			}
	
			i++;
		}
	}
	
	
	
	var __re_html_remove = /<.*?>/g;
	
	
	/**
	 * Calculate the width of columns for the table
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnCalculateColumnWidths ( oSettings )
	{
		var
			table = oSettings.nTable,
			columns = oSettings.aoColumns,
			scroll = oSettings.oScroll,
			scrollY = scroll.sY,
			scrollX = scroll.sX,
			scrollXInner = scroll.sXInner,
			columnCount = columns.length,
			visibleColumns = _fnGetColumns( oSettings, 'bVisible' ),
			headerCells = $('th', oSettings.nTHead),
			tableWidthAttr = table.getAttribute('width'), // from DOM element
			tableContainer = table.parentNode,
			userInputs = false,
			i, column, columnIdx, width, outerWidth,
			browser = oSettings.oBrowser,
			ie67 = browser.bScrollOversize;
	
		var styleWidth = table.style.width;
		if ( styleWidth && styleWidth.indexOf('%') !== -1 ) {
			tableWidthAttr = styleWidth;
		}
	
		/* Convert any user input sizes into pixel sizes */
		for ( i=0 ; i<visibleColumns.length ; i++ ) {
			column = columns[ visibleColumns[i] ];
	
			if ( column.sWidth !== null ) {
				column.sWidth = _fnConvertToWidth( column.sWidthOrig, tableContainer );
	
				userInputs = true;
			}
		}
	
		/* If the number of columns in the DOM equals the number that we have to
		 * process in DataTables, then we can use the offsets that are created by
		 * the web- browser. No custom sizes can be set in order for this to happen,
		 * nor scrolling used
		 */
		if ( ie67 || ! userInputs && ! scrollX && ! scrollY &&
		     columnCount == _fnVisbleColumns( oSettings ) &&
		     columnCount == headerCells.length
		) {
			for ( i=0 ; i<columnCount ; i++ ) {
				var colIdx = _fnVisibleToColumnIndex( oSettings, i );
	
				if ( colIdx !== null ) {
					columns[ colIdx ].sWidth = _fnStringToCss( headerCells.eq(i).width() );
				}
			}
		}
		else
		{
			// Otherwise construct a single row, worst case, table with the widest
			// node in the data, assign any user defined widths, then insert it into
			// the DOM and allow the browser to do all the hard work of calculating
			// table widths
			var tmpTable = $(table).clone() // don't use cloneNode - IE8 will remove events on the main table
				.css( 'visibility', 'hidden' )
				.removeAttr( 'id' );
	
			// Clean up the table body
			tmpTable.find('tbody tr').remove();
			var tr = $('<tr/>').appendTo( tmpTable.find('tbody') );
	
			// Clone the table header and footer - we can't use the header / footer
			// from the cloned table, since if scrolling is active, the table's
			// real header and footer are contained in different table tags
			tmpTable.find('thead, tfoot').remove();
			tmpTable
				.append( $(oSettings.nTHead).clone() )
				.append( $(oSettings.nTFoot).clone() );
	
			// Remove any assigned widths from the footer (from scrolling)
			tmpTable.find('tfoot th, tfoot td').css('width', '');
	
			// Apply custom sizing to the cloned header
			headerCells = _fnGetUniqueThs( oSettings, tmpTable.find('thead')[0] );
	
			for ( i=0 ; i<visibleColumns.length ; i++ ) {
				column = columns[ visibleColumns[i] ];
	
				headerCells[i].style.width = column.sWidthOrig !== null && column.sWidthOrig !== '' ?
					_fnStringToCss( column.sWidthOrig ) :
					'';
	
				// For scrollX we need to force the column width otherwise the
				// browser will collapse it. If this width is smaller than the
				// width the column requires, then it will have no effect
				if ( column.sWidthOrig && scrollX ) {
					$( headerCells[i] ).append( $('<div/>').css( {
						width: column.sWidthOrig,
						margin: 0,
						padding: 0,
						border: 0,
						height: 1
					} ) );
				}
			}
	
			// Find the widest cell for each column and put it into the table
			if ( oSettings.aoData.length ) {
				for ( i=0 ; i<visibleColumns.length ; i++ ) {
					columnIdx = visibleColumns[i];
					column = columns[ columnIdx ];
	
					$( _fnGetWidestNode( oSettings, columnIdx ) )
						.clone( false )
						.append( column.sContentPadding )
						.appendTo( tr );
				}
			}
	
			// Tidy the temporary table - remove name attributes so there aren't
			// duplicated in the dom (radio elements for example)
			$('[name]', tmpTable).removeAttr('name');
	
			// Table has been built, attach to the document so we can work with it.
			// A holding element is used, positioned at the top of the container
			// with minimal height, so it has no effect on if the container scrolls
			// or not. Otherwise it might trigger scrolling when it actually isn't
			// needed
			var holder = $('<div/>').css( scrollX || scrollY ?
					{
						position: 'absolute',
						top: 0,
						left: 0,
						height: 1,
						right: 0,
						overflow: 'hidden'
					} :
					{}
				)
				.append( tmpTable )
				.appendTo( tableContainer );
	
			// When scrolling (X or Y) we want to set the width of the table as 
			// appropriate. However, when not scrolling leave the table width as it
			// is. This results in slightly different, but I think correct behaviour
			if ( scrollX && scrollXInner ) {
				tmpTable.width( scrollXInner );
			}
			else if ( scrollX ) {
				tmpTable.css( 'width', 'auto' );
				tmpTable.removeAttr('width');
	
				// If there is no width attribute or style, then allow the table to
				// collapse
				if ( tmpTable.width() < tableContainer.clientWidth && tableWidthAttr ) {
					tmpTable.width( tableContainer.clientWidth );
				}
			}
			else if ( scrollY ) {
				tmpTable.width( tableContainer.clientWidth );
			}
			else if ( tableWidthAttr ) {
				tmpTable.width( tableWidthAttr );
			}
	
			// Get the width of each column in the constructed table - we need to
			// know the inner width (so it can be assigned to the other table's
			// cells) and the outer width so we can calculate the full width of the
			// table. This is safe since DataTables requires a unique cell for each
			// column, but if ever a header can span multiple columns, this will
			// need to be modified.
			var total = 0;
			for ( i=0 ; i<visibleColumns.length ; i++ ) {
				var cell = $(headerCells[i]);
				var border = cell.outerWidth() - cell.width();
	
				// Use getBounding... where possible (not IE8-) because it can give
				// sub-pixel accuracy, which we then want to round up!
				var bounding = browser.bBounding ?
					Math.ceil( headerCells[i].getBoundingClientRect().width ) :
					cell.outerWidth();
	
				// Total is tracked to remove any sub-pixel errors as the outerWidth
				// of the table might not equal the total given here (IE!).
				total += bounding;
	
				// Width for each column to use
				columns[ visibleColumns[i] ].sWidth = _fnStringToCss( bounding - border );
			}
	
			table.style.width = _fnStringToCss( total );
	
			// Finished with the table - ditch it
			holder.remove();
		}
	
		// If there is a width attr, we want to attach an event listener which
		// allows the table sizing to automatically adjust when the window is
		// resized. Use the width attr rather than CSS, since we can't know if the
		// CSS is a relative value or absolute - DOM read is always px.
		if ( tableWidthAttr ) {
			table.style.width = _fnStringToCss( tableWidthAttr );
		}
	
		if ( (tableWidthAttr || scrollX) && ! oSettings._reszEvt ) {
			var bindResize = function () {
				$(window).on('resize.DT-'+oSettings.sInstance, _fnThrottle( function () {
					_fnAdjustColumnSizing( oSettings );
				} ) );
			};
	
			// IE6/7 will crash if we bind a resize event handler on page load.
			// To be removed in 1.11 which drops IE6/7 support
			if ( ie67 ) {
				setTimeout( bindResize, 1000 );
			}
			else {
				bindResize();
			}
	
			oSettings._reszEvt = true;
		}
	}
	
	
	/**
	 * Throttle the calls to a function. Arguments and context are maintained for
	 * the throttled function
	 *  @param {function} fn Function to be called
	 *  @param {int} [freq=200] call frequency in mS
	 *  @returns {function} wrapped function
	 *  @memberof DataTable#oApi
	 */
	var _fnThrottle = DataTable.util.throttle;
	
	
	/**
	 * Convert a CSS unit width to pixels (e.g. 2em)
	 *  @param {string} width width to be converted
	 *  @param {node} parent parent to get the with for (required for relative widths) - optional
	 *  @returns {int} width in pixels
	 *  @memberof DataTable#oApi
	 */
	function _fnConvertToWidth ( width, parent )
	{
		if ( ! width ) {
			return 0;
		}
	
		var n = $('<div/>')
			.css( 'width', _fnStringToCss( width ) )
			.appendTo( parent || document.body );
	
		var val = n[0].offsetWidth;
		n.remove();
	
		return val;
	}
	
	
	/**
	 * Get the widest node
	 *  @param {object} settings dataTables settings object
	 *  @param {int} colIdx column of interest
	 *  @returns {node} widest table node
	 *  @memberof DataTable#oApi
	 */
	function _fnGetWidestNode( settings, colIdx )
	{
		var idx = _fnGetMaxLenString( settings, colIdx );
		if ( idx < 0 ) {
			return null;
		}
	
		var data = settings.aoData[ idx ];
		return ! data.nTr ? // Might not have been created when deferred rendering
			$('<td/>').html( _fnGetCellData( settings, idx, colIdx, 'display' ) )[0] :
			data.anCells[ colIdx ];
	}
	
	
	/**
	 * Get the maximum strlen for each data column
	 *  @param {object} settings dataTables settings object
	 *  @param {int} colIdx column of interest
	 *  @returns {string} max string length for each column
	 *  @memberof DataTable#oApi
	 */
	function _fnGetMaxLenString( settings, colIdx )
	{
		var s, max=-1, maxIdx = -1;
	
		for ( var i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
			s = _fnGetCellData( settings, i, colIdx, 'display' )+'';
			s = s.replace( __re_html_remove, '' );
			s = s.replace( /&nbsp;/g, ' ' );
	
			if ( s.length > max ) {
				max = s.length;
				maxIdx = i;
			}
		}
	
		return maxIdx;
	}
	
	
	/**
	 * Append a CSS unit (only if required) to a string
	 *  @param {string} value to css-ify
	 *  @returns {string} value with css unit
	 *  @memberof DataTable#oApi
	 */
	function _fnStringToCss( s )
	{
		if ( s === null ) {
			return '0px';
		}
	
		if ( typeof s == 'number' ) {
			return s < 0 ?
				'0px' :
				s+'px';
		}
	
		// Check it has a unit character already
		return s.match(/\d$/) ?
			s+'px' :
			s;
	}
	
	
	
	function _fnSortFlatten ( settings )
	{
		var
			i, iLen, k, kLen,
			aSort = [],
			aiOrig = [],
			aoColumns = settings.aoColumns,
			aDataSort, iCol, sType, srcCol,
			fixed = settings.aaSortingFixed,
			fixedObj = $.isPlainObject( fixed ),
			nestedSort = [],
			add = function ( a ) {
				if ( a.length && ! $.isArray( a[0] ) ) {
					// 1D array
					nestedSort.push( a );
				}
				else {
					// 2D array
					$.merge( nestedSort, a );
				}
			};
	
		// Build the sort array, with pre-fix and post-fix options if they have been
		// specified
		if ( $.isArray( fixed ) ) {
			add( fixed );
		}
	
		if ( fixedObj && fixed.pre ) {
			add( fixed.pre );
		}
	
		add( settings.aaSorting );
	
		if (fixedObj && fixed.post ) {
			add( fixed.post );
		}
	
		for ( i=0 ; i<nestedSort.length ; i++ )
		{
			srcCol = nestedSort[i][0];
			aDataSort = aoColumns[ srcCol ].aDataSort;
	
			for ( k=0, kLen=aDataSort.length ; k<kLen ; k++ )
			{
				iCol = aDataSort[k];
				sType = aoColumns[ iCol ].sType || 'string';
	
				if ( nestedSort[i]._idx === undefined ) {
					nestedSort[i]._idx = $.inArray( nestedSort[i][1], aoColumns[iCol].asSorting );
				}
	
				aSort.push( {
					src:       srcCol,
					col:       iCol,
					dir:       nestedSort[i][1],
					index:     nestedSort[i]._idx,
					type:      sType,
					formatter: DataTable.ext.type.order[ sType+"-pre" ]
				} );
			}
		}
	
		return aSort;
	}
	
	/**
	 * Change the order of the table
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 *  @todo This really needs split up!
	 */
	function _fnSort ( oSettings )
	{
		var
			i, ien, iLen, j, jLen, k, kLen,
			sDataType, nTh,
			aiOrig = [],
			oExtSort = DataTable.ext.type.order,
			aoData = oSettings.aoData,
			aoColumns = oSettings.aoColumns,
			aDataSort, data, iCol, sType, oSort,
			formatters = 0,
			sortCol,
			displayMaster = oSettings.aiDisplayMaster,
			aSort;
	
		// Resolve any column types that are unknown due to addition or invalidation
		// @todo Can this be moved into a 'data-ready' handler which is called when
		//   data is going to be used in the table?
		_fnColumnTypes( oSettings );
	
		aSort = _fnSortFlatten( oSettings );
	
		for ( i=0, ien=aSort.length ; i<ien ; i++ ) {
			sortCol = aSort[i];
	
			// Track if we can use the fast sort algorithm
			if ( sortCol.formatter ) {
				formatters++;
			}
	
			// Load the data needed for the sort, for each cell
			_fnSortData( oSettings, sortCol.col );
		}
	
		/* No sorting required if server-side or no sorting array */
		if ( _fnDataSource( oSettings ) != 'ssp' && aSort.length !== 0 )
		{
			// Create a value - key array of the current row positions such that we can use their
			// current position during the sort, if values match, in order to perform stable sorting
			for ( i=0, iLen=displayMaster.length ; i<iLen ; i++ ) {
				aiOrig[ displayMaster[i] ] = i;
			}
	
			/* Do the sort - here we want multi-column sorting based on a given data source (column)
			 * and sorting function (from oSort) in a certain direction. It's reasonably complex to
			 * follow on it's own, but this is what we want (example two column sorting):
			 *  fnLocalSorting = function(a,b){
			 *    var iTest;
			 *    iTest = oSort['string-asc']('data11', 'data12');
			 *      if (iTest !== 0)
			 *        return iTest;
			 *    iTest = oSort['numeric-desc']('data21', 'data22');
			 *    if (iTest !== 0)
			 *      return iTest;
			 *    return oSort['numeric-asc']( aiOrig[a], aiOrig[b] );
			 *  }
			 * Basically we have a test for each sorting column, if the data in that column is equal,
			 * test the next column. If all columns match, then we use a numeric sort on the row
			 * positions in the original data array to provide a stable sort.
			 *
			 * Note - I know it seems excessive to have two sorting methods, but the first is around
			 * 15% faster, so the second is only maintained for backwards compatibility with sorting
			 * methods which do not have a pre-sort formatting function.
			 */
			if ( formatters === aSort.length ) {
				// All sort types have formatting functions
				displayMaster.sort( function ( a, b ) {
					var
						x, y, k, test, sort,
						len=aSort.length,
						dataA = aoData[a]._aSortData,
						dataB = aoData[b]._aSortData;
	
					for ( k=0 ; k<len ; k++ ) {
						sort = aSort[k];
	
						x = dataA[ sort.col ];
						y = dataB[ sort.col ];
	
						test = x<y ? -1 : x>y ? 1 : 0;
						if ( test !== 0 ) {
							return sort.dir === 'asc' ? test : -test;
						}
					}
	
					x = aiOrig[a];
					y = aiOrig[b];
					return x<y ? -1 : x>y ? 1 : 0;
				} );
			}
			else {
				// Depreciated - remove in 1.11 (providing a plug-in option)
				// Not all sort types have formatting methods, so we have to call their sorting
				// methods.
				displayMaster.sort( function ( a, b ) {
					var
						x, y, k, l, test, sort, fn,
						len=aSort.length,
						dataA = aoData[a]._aSortData,
						dataB = aoData[b]._aSortData;
	
					for ( k=0 ; k<len ; k++ ) {
						sort = aSort[k];
	
						x = dataA[ sort.col ];
						y = dataB[ sort.col ];
	
						fn = oExtSort[ sort.type+"-"+sort.dir ] || oExtSort[ "string-"+sort.dir ];
						test = fn( x, y );
						if ( test !== 0 ) {
							return test;
						}
					}
	
					x = aiOrig[a];
					y = aiOrig[b];
					return x<y ? -1 : x>y ? 1 : 0;
				} );
			}
		}
	
		/* Tell the draw function that we have sorted the data */
		oSettings.bSorted = true;
	}
	
	
	function _fnSortAria ( settings )
	{
		var label;
		var nextSort;
		var columns = settings.aoColumns;
		var aSort = _fnSortFlatten( settings );
		var oAria = settings.oLanguage.oAria;
	
		// ARIA attributes - need to loop all columns, to update all (removing old
		// attributes as needed)
		for ( var i=0, iLen=columns.length ; i<iLen ; i++ )
		{
			var col = columns[i];
			var asSorting = col.asSorting;
			var sTitle = col.sTitle.replace( /<.*?>/g, "" );
			var th = col.nTh;
	
			// IE7 is throwing an error when setting these properties with jQuery's
			// attr() and removeAttr() methods...
			th.removeAttribute('aria-sort');
	
			/* In ARIA only the first sorting column can be marked as sorting - no multi-sort option */
			if ( col.bSortable ) {
				if ( aSort.length > 0 && aSort[0].col == i ) {
					th.setAttribute('aria-sort', aSort[0].dir=="asc" ? "ascending" : "descending" );
					nextSort = asSorting[ aSort[0].index+1 ] || asSorting[0];
				}
				else {
					nextSort = asSorting[0];
				}
	
				label = sTitle + ( nextSort === "asc" ?
					oAria.sSortAscending :
					oAria.sSortDescending
				);
			}
			else {
				label = sTitle;
			}
	
			th.setAttribute('aria-label', label);
		}
	}
	
	
	/**
	 * Function to run on user sort request
	 *  @param {object} settings dataTables settings object
	 *  @param {node} attachTo node to attach the handler to
	 *  @param {int} colIdx column sorting index
	 *  @param {boolean} [append=false] Append the requested sort to the existing
	 *    sort if true (i.e. multi-column sort)
	 *  @param {function} [callback] callback function
	 *  @memberof DataTable#oApi
	 */
	function _fnSortListener ( settings, colIdx, append, callback )
	{
		var col = settings.aoColumns[ colIdx ];
		var sorting = settings.aaSorting;
		var asSorting = col.asSorting;
		var nextSortIdx;
		var next = function ( a, overflow ) {
			var idx = a._idx;
			if ( idx === undefined ) {
				idx = $.inArray( a[1], asSorting );
			}
	
			return idx+1 < asSorting.length ?
				idx+1 :
				overflow ?
					null :
					0;
		};
	
		// Convert to 2D array if needed
		if ( typeof sorting[0] === 'number' ) {
			sorting = settings.aaSorting = [ sorting ];
		}
	
		// If appending the sort then we are multi-column sorting
		if ( append && settings.oFeatures.bSortMulti ) {
			// Are we already doing some kind of sort on this column?
			var sortIdx = $.inArray( colIdx, _pluck(sorting, '0') );
	
			if ( sortIdx !== -1 ) {
				// Yes, modify the sort
				nextSortIdx = next( sorting[sortIdx], true );
	
				if ( nextSortIdx === null && sorting.length === 1 ) {
					nextSortIdx = 0; // can't remove sorting completely
				}
	
				if ( nextSortIdx === null ) {
					sorting.splice( sortIdx, 1 );
				}
				else {
					sorting[sortIdx][1] = asSorting[ nextSortIdx ];
					sorting[sortIdx]._idx = nextSortIdx;
				}
			}
			else {
				// No sort on this column yet
				sorting.push( [ colIdx, asSorting[0], 0 ] );
				sorting[sorting.length-1]._idx = 0;
			}
		}
		else if ( sorting.length && sorting[0][0] == colIdx ) {
			// Single column - already sorting on this column, modify the sort
			nextSortIdx = next( sorting[0] );
	
			sorting.length = 1;
			sorting[0][1] = asSorting[ nextSortIdx ];
			sorting[0]._idx = nextSortIdx;
		}
		else {
			// Single column - sort only on this column
			sorting.length = 0;
			sorting.push( [ colIdx, asSorting[0] ] );
			sorting[0]._idx = 0;
		}
	
		// Run the sort by calling a full redraw
		_fnReDraw( settings );
	
		// callback used for async user interaction
		if ( typeof callback == 'function' ) {
			callback( settings );
		}
	}
	
	
	/**
	 * Attach a sort handler (click) to a node
	 *  @param {object} settings dataTables settings object
	 *  @param {node} attachTo node to attach the handler to
	 *  @param {int} colIdx column sorting index
	 *  @param {function} [callback] callback function
	 *  @memberof DataTable#oApi
	 */
	function _fnSortAttachListener ( settings, attachTo, colIdx, callback )
	{
		var col = settings.aoColumns[ colIdx ];
	
		_fnBindAction( attachTo, {}, function (e) {
			/* If the column is not sortable - don't to anything */
			if ( col.bSortable === false ) {
				return;
			}
	
			// If processing is enabled use a timeout to allow the processing
			// display to be shown - otherwise to it synchronously
			if ( settings.oFeatures.bProcessing ) {
				_fnProcessingDisplay( settings, true );
	
				setTimeout( function() {
					_fnSortListener( settings, colIdx, e.shiftKey, callback );
	
					// In server-side processing, the draw callback will remove the
					// processing display
					if ( _fnDataSource( settings ) !== 'ssp' ) {
						_fnProcessingDisplay( settings, false );
					}
				}, 0 );
			}
			else {
				_fnSortListener( settings, colIdx, e.shiftKey, callback );
			}
		} );
	}
	
	
	/**
	 * Set the sorting classes on table's body, Note: it is safe to call this function
	 * when bSort and bSortClasses are false
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnSortingClasses( settings )
	{
		var oldSort = settings.aLastSort;
		var sortClass = settings.oClasses.sSortColumn;
		var sort = _fnSortFlatten( settings );
		var features = settings.oFeatures;
		var i, ien, colIdx;
	
		if ( features.bSort && features.bSortClasses ) {
			// Remove old sorting classes
			for ( i=0, ien=oldSort.length ; i<ien ; i++ ) {
				colIdx = oldSort[i].src;
	
				// Remove column sorting
				$( _pluck( settings.aoData, 'anCells', colIdx ) )
					.removeClass( sortClass + (i<2 ? i+1 : 3) );
			}
	
			// Add new column sorting
			for ( i=0, ien=sort.length ; i<ien ; i++ ) {
				colIdx = sort[i].src;
	
				$( _pluck( settings.aoData, 'anCells', colIdx ) )
					.addClass( sortClass + (i<2 ? i+1 : 3) );
			}
		}
	
		settings.aLastSort = sort;
	}
	
	
	// Get the data to sort a column, be it from cache, fresh (populating the
	// cache), or from a sort formatter
	function _fnSortData( settings, idx )
	{
		// Custom sorting function - provided by the sort data type
		var column = settings.aoColumns[ idx ];
		var customSort = DataTable.ext.order[ column.sSortDataType ];
		var customData;
	
		if ( customSort ) {
			customData = customSort.call( settings.oInstance, settings, idx,
				_fnColumnIndexToVisible( settings, idx )
			);
		}
	
		// Use / populate cache
		var row, cellData;
		var formatter = DataTable.ext.type.order[ column.sType+"-pre" ];
	
		for ( var i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
			row = settings.aoData[i];
	
			if ( ! row._aSortData ) {
				row._aSortData = [];
			}
	
			if ( ! row._aSortData[idx] || customSort ) {
				cellData = customSort ?
					customData[i] : // If there was a custom sort function, use data from there
					_fnGetCellData( settings, i, idx, 'sort' );
	
				row._aSortData[ idx ] = formatter ?
					formatter( cellData ) :
					cellData;
			}
		}
	}
	
	
	
	/**
	 * Save the state of a table
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnSaveState ( settings )
	{
		if ( !settings.oFeatures.bStateSave || settings.bDestroying )
		{
			return;
		}
	
		/* Store the interesting variables */
		var state = {
			time:    +new Date(),
			start:   settings._iDisplayStart,
			length:  settings._iDisplayLength,
			order:   $.extend( true, [], settings.aaSorting ),
			search:  _fnSearchToCamel( settings.oPreviousSearch ),
			columns: $.map( settings.aoColumns, function ( col, i ) {
				return {
					visible: col.bVisible,
					search: _fnSearchToCamel( settings.aoPreSearchCols[i] )
				};
			} )
		};
	
		_fnCallbackFire( settings, "aoStateSaveParams", 'stateSaveParams', [settings, state] );
	
		settings.oSavedState = state;
		settings.fnStateSaveCallback.call( settings.oInstance, settings, state );
	}
	
	
	/**
	 * Attempt to load a saved table state
	 *  @param {object} oSettings dataTables settings object
	 *  @param {object} oInit DataTables init object so we can override settings
	 *  @param {function} callback Callback to execute when the state has been loaded
	 *  @memberof DataTable#oApi
	 */
	function _fnLoadState ( settings, oInit, callback )
	{
		var i, ien;
		var columns = settings.aoColumns;
		var loaded = function ( s ) {
			if ( ! s || ! s.time ) {
				callback();
				return;
			}
	
			// Allow custom and plug-in manipulation functions to alter the saved data set and
			// cancelling of loading by returning false
			var abStateLoad = _fnCallbackFire( settings, 'aoStateLoadParams', 'stateLoadParams', [settings, s] );
			if ( $.inArray( false, abStateLoad ) !== -1 ) {
				callback();
				return;
			}
	
			// Reject old data
			var duration = settings.iStateDuration;
			if ( duration > 0 && s.time < +new Date() - (duration*1000) ) {
				callback();
				return;
			}
	
			// Number of columns have changed - all bets are off, no restore of settings
			if ( s.columns && columns.length !== s.columns.length ) {
				callback();
				return;
			}
	
			// Store the saved state so it might be accessed at any time
			settings.oLoadedState = $.extend( true, {}, s );
	
			// Restore key features - todo - for 1.11 this needs to be done by
			// subscribed events
			if ( s.start !== undefined ) {
				settings._iDisplayStart    = s.start;
				settings.iInitDisplayStart = s.start;
			}
			if ( s.length !== undefined ) {
				settings._iDisplayLength   = s.length;
			}
	
			// Order
			if ( s.order !== undefined ) {
				settings.aaSorting = [];
				$.each( s.order, function ( i, col ) {
					settings.aaSorting.push( col[0] >= columns.length ?
						[ 0, col[1] ] :
						col
					);
				} );
			}
	
			// Search
			if ( s.search !== undefined ) {
				$.extend( settings.oPreviousSearch, _fnSearchToHung( s.search ) );
			}
	
			// Columns
			//
			if ( s.columns ) {
				for ( i=0, ien=s.columns.length ; i<ien ; i++ ) {
					var col = s.columns[i];
	
					// Visibility
					if ( col.visible !== undefined ) {
						columns[i].bVisible = col.visible;
					}
	
					// Search
					if ( col.search !== undefined ) {
						$.extend( settings.aoPreSearchCols[i], _fnSearchToHung( col.search ) );
					}
				}
			}
	
			_fnCallbackFire( settings, 'aoStateLoaded', 'stateLoaded', [settings, s] );
			callback();
		}
	
		if ( ! settings.oFeatures.bStateSave ) {
			callback();
			return;
		}
	
		var state = settings.fnStateLoadCallback.call( settings.oInstance, settings, loaded );
	
		if ( state !== undefined ) {
			loaded( state );
		}
		// otherwise, wait for the loaded callback to be executed
	}
	
	
	/**
	 * Return the settings object for a particular table
	 *  @param {node} table table we are using as a dataTable
	 *  @returns {object} Settings object - or null if not found
	 *  @memberof DataTable#oApi
	 */
	function _fnSettingsFromNode ( table )
	{
		var settings = DataTable.settings;
		var idx = $.inArray( table, _pluck( settings, 'nTable' ) );
	
		return idx !== -1 ?
			settings[ idx ] :
			null;
	}
	
	
	/**
	 * Log an error message
	 *  @param {object} settings dataTables settings object
	 *  @param {int} level log error messages, or display them to the user
	 *  @param {string} msg error message
	 *  @param {int} tn Technical note id to get more information about the error.
	 *  @memberof DataTable#oApi
	 */
	function _fnLog( settings, level, msg, tn )
	{
		msg = 'DataTables warning: '+
			(settings ? 'table id='+settings.sTableId+' - ' : '')+msg;
	
		if ( tn ) {
			msg += '. For more information about this error, please see '+
			'http://datatables.net/tn/'+tn;
		}
	
		if ( ! level  ) {
			// Backwards compatibility pre 1.10
			var ext = DataTable.ext;
			var type = ext.sErrMode || ext.errMode;
	
			if ( settings ) {
				_fnCallbackFire( settings, null, 'error', [ settings, tn, msg ] );
			}
	
			if ( type == 'alert' ) {
				alert( msg );
			}
			else if ( type == 'throw' ) {
				throw new Error(msg);
			}
			else if ( typeof type == 'function' ) {
				type( settings, tn, msg );
			}
		}
		else if ( window.console && console.log ) {
			console.log( msg );
		}
	}
	
	
	/**
	 * See if a property is defined on one object, if so assign it to the other object
	 *  @param {object} ret target object
	 *  @param {object} src source object
	 *  @param {string} name property
	 *  @param {string} [mappedName] name to map too - optional, name used if not given
	 *  @memberof DataTable#oApi
	 */
	function _fnMap( ret, src, name, mappedName )
	{
		if ( $.isArray( name ) ) {
			$.each( name, function (i, val) {
				if ( $.isArray( val ) ) {
					_fnMap( ret, src, val[0], val[1] );
				}
				else {
					_fnMap( ret, src, val );
				}
			} );
	
			return;
		}
	
		if ( mappedName === undefined ) {
			mappedName = name;
		}
	
		if ( src[name] !== undefined ) {
			ret[mappedName] = src[name];
		}
	}
	
	
	/**
	 * Extend objects - very similar to jQuery.extend, but deep copy objects, and
	 * shallow copy arrays. The reason we need to do this, is that we don't want to
	 * deep copy array init values (such as aaSorting) since the dev wouldn't be
	 * able to override them, but we do want to deep copy arrays.
	 *  @param {object} out Object to extend
	 *  @param {object} extender Object from which the properties will be applied to
	 *      out
	 *  @param {boolean} breakRefs If true, then arrays will be sliced to take an
	 *      independent copy with the exception of the `data` or `aaData` parameters
	 *      if they are present. This is so you can pass in a collection to
	 *      DataTables and have that used as your data source without breaking the
	 *      references
	 *  @returns {object} out Reference, just for convenience - out === the return.
	 *  @memberof DataTable#oApi
	 *  @todo This doesn't take account of arrays inside the deep copied objects.
	 */
	function _fnExtend( out, extender, breakRefs )
	{
		var val;
	
		for ( var prop in extender ) {
			if ( extender.hasOwnProperty(prop) ) {
				val = extender[prop];
	
				if ( $.isPlainObject( val ) ) {
					if ( ! $.isPlainObject( out[prop] ) ) {
						out[prop] = {};
					}
					$.extend( true, out[prop], val );
				}
				else if ( breakRefs && prop !== 'data' && prop !== 'aaData' && $.isArray(val) ) {
					out[prop] = val.slice();
				}
				else {
					out[prop] = val;
				}
			}
		}
	
		return out;
	}
	
	
	/**
	 * Bind an event handers to allow a click or return key to activate the callback.
	 * This is good for accessibility since a return on the keyboard will have the
	 * same effect as a click, if the element has focus.
	 *  @param {element} n Element to bind the action to
	 *  @param {object} oData Data object to pass to the triggered function
	 *  @param {function} fn Callback function for when the event is triggered
	 *  @memberof DataTable#oApi
	 */
	function _fnBindAction( n, oData, fn )
	{
		$(n)
			.on( 'click.DT', oData, function (e) {
					n.blur(); // Remove focus outline for mouse users
					fn(e);
				} )
			.on( 'keypress.DT', oData, function (e){
					if ( e.which === 13 ) {
						e.preventDefault();
						fn(e);
					}
				} )
			.on( 'selectstart.DT', function () {
					/* Take the brutal approach to cancelling text selection */
					return false;
				} );
	}
	
	
	/**
	 * Register a callback function. Easily allows a callback function to be added to
	 * an array store of callback functions that can then all be called together.
	 *  @param {object} oSettings dataTables settings object
	 *  @param {string} sStore Name of the array storage for the callbacks in oSettings
	 *  @param {function} fn Function to be called back
	 *  @param {string} sName Identifying name for the callback (i.e. a label)
	 *  @memberof DataTable#oApi
	 */
	function _fnCallbackReg( oSettings, sStore, fn, sName )
	{
		if ( fn )
		{
			oSettings[sStore].push( {
				"fn": fn,
				"sName": sName
			} );
		}
	}
	
	
	/**
	 * Fire callback functions and trigger events. Note that the loop over the
	 * callback array store is done backwards! Further note that you do not want to
	 * fire off triggers in time sensitive applications (for example cell creation)
	 * as its slow.
	 *  @param {object} settings dataTables settings object
	 *  @param {string} callbackArr Name of the array storage for the callbacks in
	 *      oSettings
	 *  @param {string} eventName Name of the jQuery custom event to trigger. If
	 *      null no trigger is fired
	 *  @param {array} args Array of arguments to pass to the callback function /
	 *      trigger
	 *  @memberof DataTable#oApi
	 */
	function _fnCallbackFire( settings, callbackArr, eventName, args )
	{
		var ret = [];
	
		if ( callbackArr ) {
			ret = $.map( settings[callbackArr].slice().reverse(), function (val, i) {
				return val.fn.apply( settings.oInstance, args );
			} );
		}
	
		if ( eventName !== null ) {
			var e = $.Event( eventName+'.dt' );
	
			$(settings.nTable).trigger( e, args );
	
			ret.push( e.result );
		}
	
		return ret;
	}
	
	
	function _fnLengthOverflow ( settings )
	{
		var
			start = settings._iDisplayStart,
			end = settings.fnDisplayEnd(),
			len = settings._iDisplayLength;
	
		/* If we have space to show extra rows (backing up from the end point - then do so */
		if ( start >= end )
		{
			start = end - len;
		}
	
		// Keep the start record on the current page
		start -= (start % len);
	
		if ( len === -1 || start < 0 )
		{
			start = 0;
		}
	
		settings._iDisplayStart = start;
	}
	
	
	function _fnRenderer( settings, type )
	{
		var renderer = settings.renderer;
		var host = DataTable.ext.renderer[type];
	
		if ( $.isPlainObject( renderer ) && renderer[type] ) {
			// Specific renderer for this type. If available use it, otherwise use
			// the default.
			return host[renderer[type]] || host._;
		}
		else if ( typeof renderer === 'string' ) {
			// Common renderer - if there is one available for this type use it,
			// otherwise use the default
			return host[renderer] || host._;
		}
	
		// Use the default
		return host._;
	}
	
	
	/**
	 * Detect the data source being used for the table. Used to simplify the code
	 * a little (ajax) and to make it compress a little smaller.
	 *
	 *  @param {object} settings dataTables settings object
	 *  @returns {string} Data source
	 *  @memberof DataTable#oApi
	 */
	function _fnDataSource ( settings )
	{
		if ( settings.oFeatures.bServerSide ) {
			return 'ssp';
		}
		else if ( settings.ajax || settings.sAjaxSource ) {
			return 'ajax';
		}
		return 'dom';
	}
	

	
	
	/**
	 * Computed structure of the DataTables API, defined by the options passed to
	 * `DataTable.Api.register()` when building the API.
	 *
	 * The structure is built in order to speed creation and extension of the Api
	 * objects since the extensions are effectively pre-parsed.
	 *
	 * The array is an array of objects with the following structure, where this
	 * base array represents the Api prototype base:
	 *
	 *     [
	 *       {
	 *         name:      'data'                -- string   - Property name
	 *         val:       function () {},       -- function - Api method (or undefined if just an object
	 *         methodExt: [ ... ],              -- array    - Array of Api object definitions to extend the method result
	 *         propExt:   [ ... ]               -- array    - Array of Api object definitions to extend the property
	 *       },
	 *       {
	 *         name:     'row'
	 *         val:       {},
	 *         methodExt: [ ... ],
	 *         propExt:   [
	 *           {
	 *             name:      'data'
	 *             val:       function () {},
	 *             methodExt: [ ... ],
	 *             propExt:   [ ... ]
	 *           },
	 *           ...
	 *         ]
	 *       }
	 *     ]
	 *
	 * @type {Array}
	 * @ignore
	 */
	var __apiStruct = [];
	
	
	/**
	 * `Array.prototype` reference.
	 *
	 * @type object
	 * @ignore
	 */
	var __arrayProto = Array.prototype;
	
	
	/**
	 * Abstraction for `context` parameter of the `Api` constructor to allow it to
	 * take several different forms for ease of use.
	 *
	 * Each of the input parameter types will be converted to a DataTables settings
	 * object where possible.
	 *
	 * @param  {string|node|jQuery|object} mixed DataTable identifier. Can be one
	 *   of:
	 *
	 *   * `string` - jQuery selector. Any DataTables' matching the given selector
	 *     with be found and used.
	 *   * `node` - `TABLE` node which has already been formed into a DataTable.
	 *   * `jQuery` - A jQuery object of `TABLE` nodes.
	 *   * `object` - DataTables settings object
	 *   * `DataTables.Api` - API instance
	 * @return {array|null} Matching DataTables settings objects. `null` or
	 *   `undefined` is returned if no matching DataTable is found.
	 * @ignore
	 */
	var _toSettings = function ( mixed )
	{
		var idx, jq;
		var settings = DataTable.settings;
		var tables = $.map( settings, function (el, i) {
			return el.nTable;
		} );
	
		if ( ! mixed ) {
			return [];
		}
		else if ( mixed.nTable && mixed.oApi ) {
			// DataTables settings object
			return [ mixed ];
		}
		else if ( mixed.nodeName && mixed.nodeName.toLowerCase() === 'table' ) {
			// Table node
			idx = $.inArray( mixed, tables );
			return idx !== -1 ? [ settings[idx] ] : null;
		}
		else if ( mixed && typeof mixed.settings === 'function' ) {
			return mixed.settings().toArray();
		}
		else if ( typeof mixed === 'string' ) {
			// jQuery selector
			jq = $(mixed);
		}
		else if ( mixed instanceof $ ) {
			// jQuery object (also DataTables instance)
			jq = mixed;
		}
	
		if ( jq ) {
			return jq.map( function(i) {
				idx = $.inArray( this, tables );
				return idx !== -1 ? settings[idx] : null;
			} ).toArray();
		}
	};
	
	
	/**
	 * DataTables API class - used to control and interface with  one or more
	 * DataTables enhanced tables.
	 *
	 * The API class is heavily based on jQuery, presenting a chainable interface
	 * that you can use to interact with tables. Each instance of the API class has
	 * a "context" - i.e. the tables that it will operate on. This could be a single
	 * table, all tables on a page or a sub-set thereof.
	 *
	 * Additionally the API is designed to allow you to easily work with the data in
	 * the tables, retrieving and manipulating it as required. This is done by
	 * presenting the API class as an array like interface. The contents of the
	 * array depend upon the actions requested by each method (for example
	 * `rows().nodes()` will return an array of nodes, while `rows().data()` will
	 * return an array of objects or arrays depending upon your table's
	 * configuration). The API object has a number of array like methods (`push`,
	 * `pop`, `reverse` etc) as well as additional helper methods (`each`, `pluck`,
	 * `unique` etc) to assist your working with the data held in a table.
	 *
	 * Most methods (those which return an Api instance) are chainable, which means
	 * the return from a method call also has all of the methods available that the
	 * top level object had. For example, these two calls are equivalent:
	 *
	 *     // Not chained
	 *     api.row.add( {...} );
	 *     api.draw();
	 *
	 *     // Chained
	 *     api.row.add( {...} ).draw();
	 *
	 * @class DataTable.Api
	 * @param {array|object|string|jQuery} context DataTable identifier. This is
	 *   used to define which DataTables enhanced tables this API will operate on.
	 *   Can be one of:
	 *
	 *   * `string` - jQuery selector. Any DataTables' matching the given selector
	 *     with be found and used.
	 *   * `node` - `TABLE` node which has already been formed into a DataTable.
	 *   * `jQuery` - A jQuery object of `TABLE` nodes.
	 *   * `object` - DataTables settings object
	 * @param {array} [data] Data to initialise the Api instance with.
	 *
	 * @example
	 *   // Direct initialisation during DataTables construction
	 *   var api = $('#example').DataTable();
	 *
	 * @example
	 *   // Initialisation using a DataTables jQuery object
	 *   var api = $('#example').dataTable().api();
	 *
	 * @example
	 *   // Initialisation as a constructor
	 *   var api = new $.fn.DataTable.Api( 'table.dataTable' );
	 */
	_Api = function ( context, data )
	{
		if ( ! (this instanceof _Api) ) {
			return new _Api( context, data );
		}
	
		var settings = [];
		var ctxSettings = function ( o ) {
			var a = _toSettings( o );
			if ( a ) {
				settings = settings.concat( a );
			}
		};
	
		if ( $.isArray( context ) ) {
			for ( var i=0, ien=context.length ; i<ien ; i++ ) {
				ctxSettings( context[i] );
			}
		}
		else {
			ctxSettings( context );
		}
	
		// Remove duplicates
		this.context = _unique( settings );
	
		// Initial data
		if ( data ) {
			$.merge( this, data );
		}
	
		// selector
		this.selector = {
			rows: null,
			cols: null,
			opts: null
		};
	
		_Api.extend( this, this, __apiStruct );
	};
	
	DataTable.Api = _Api;
	
	// Don't destroy the existing prototype, just extend it. Required for jQuery 2's
	// isPlainObject.
	$.extend( _Api.prototype, {
		any: function ()
		{
			return this.count() !== 0;
		},
	
	
		concat:  __arrayProto.concat,
	
	
		context: [], // array of table settings objects
	
	
		count: function ()
		{
			return this.flatten().length;
		},
	
	
		each: function ( fn )
		{
			for ( var i=0, ien=this.length ; i<ien; i++ ) {
				fn.call( this, this[i], i, this );
			}
	
			return this;
		},
	
	
		eq: function ( idx )
		{
			var ctx = this.context;
	
			return ctx.length > idx ?
				new _Api( ctx[idx], this[idx] ) :
				null;
		},
	
	
		filter: function ( fn )
		{
			var a = [];
	
			if ( __arrayProto.filter ) {
				a = __arrayProto.filter.call( this, fn, this );
			}
			else {
				// Compatibility for browsers without EMCA-252-5 (JS 1.6)
				for ( var i=0, ien=this.length ; i<ien ; i++ ) {
					if ( fn.call( this, this[i], i, this ) ) {
						a.push( this[i] );
					}
				}
			}
	
			return new _Api( this.context, a );
		},
	
	
		flatten: function ()
		{
			var a = [];
			return new _Api( this.context, a.concat.apply( a, this.toArray() ) );
		},
	
	
		join:    __arrayProto.join,
	
	
		indexOf: __arrayProto.indexOf || function (obj, start)
		{
			for ( var i=(start || 0), ien=this.length ; i<ien ; i++ ) {
				if ( this[i] === obj ) {
					return i;
				}
			}
			return -1;
		},
	
		iterator: function ( flatten, type, fn, alwaysNew ) {
			var
				a = [], ret,
				i, ien, j, jen,
				context = this.context,
				rows, items, item,
				selector = this.selector;
	
			// Argument shifting
			if ( typeof flatten === 'string' ) {
				alwaysNew = fn;
				fn = type;
				type = flatten;
				flatten = false;
			}
	
			for ( i=0, ien=context.length ; i<ien ; i++ ) {
				var apiInst = new _Api( context[i] );
	
				if ( type === 'table' ) {
					ret = fn.call( apiInst, context[i], i );
	
					if ( ret !== undefined ) {
						a.push( ret );
					}
				}
				else if ( type === 'columns' || type === 'rows' ) {
					// this has same length as context - one entry for each table
					ret = fn.call( apiInst, context[i], this[i], i );
	
					if ( ret !== undefined ) {
						a.push( ret );
					}
				}
				else if ( type === 'column' || type === 'column-rows' || type === 'row' || type === 'cell' ) {
					// columns and rows share the same structure.
					// 'this' is an array of column indexes for each context
					items = this[i];
	
					if ( type === 'column-rows' ) {
						rows = _selector_row_indexes( context[i], selector.opts );
					}
	
					for ( j=0, jen=items.length ; j<jen ; j++ ) {
						item = items[j];
	
						if ( type === 'cell' ) {
							ret = fn.call( apiInst, context[i], item.row, item.column, i, j );
						}
						else {
							ret = fn.call( apiInst, context[i], item, i, j, rows );
						}
	
						if ( ret !== undefined ) {
							a.push( ret );
						}
					}
				}
			}
	
			if ( a.length || alwaysNew ) {
				var api = new _Api( context, flatten ? a.concat.apply( [], a ) : a );
				var apiSelector = api.selector;
				apiSelector.rows = selector.rows;
				apiSelector.cols = selector.cols;
				apiSelector.opts = selector.opts;
				return api;
			}
			return this;
		},
	
	
		lastIndexOf: __arrayProto.lastIndexOf || function (obj, start)
		{
			// Bit cheeky...
			return this.indexOf.apply( this.toArray.reverse(), arguments );
		},
	
	
		length:  0,
	
	
		map: function ( fn )
		{
			var a = [];
	
			if ( __arrayProto.map ) {
				a = __arrayProto.map.call( this, fn, this );
			}
			else {
				// Compatibility for browsers without EMCA-252-5 (JS 1.6)
				for ( var i=0, ien=this.length ; i<ien ; i++ ) {
					a.push( fn.call( this, this[i], i ) );
				}
			}
	
			return new _Api( this.context, a );
		},
	
	
		pluck: function ( prop )
		{
			return this.map( function ( el ) {
				return el[ prop ];
			} );
		},
	
		pop:     __arrayProto.pop,
	
	
		push:    __arrayProto.push,
	
	
		// Does not return an API instance
		reduce: __arrayProto.reduce || function ( fn, init )
		{
			return _fnReduce( this, fn, init, 0, this.length, 1 );
		},
	
	
		reduceRight: __arrayProto.reduceRight || function ( fn, init )
		{
			return _fnReduce( this, fn, init, this.length-1, -1, -1 );
		},
	
	
		reverse: __arrayProto.reverse,
	
	
		// Object with rows, columns and opts
		selector: null,
	
	
		shift:   __arrayProto.shift,
	
	
		slice: function () {
			return new _Api( this.context, this );
		},
	
	
		sort:    __arrayProto.sort, // ? name - order?
	
	
		splice:  __arrayProto.splice,
	
	
		toArray: function ()
		{
			return __arrayProto.slice.call( this );
		},
	
	
		to$: function ()
		{
			return $( this );
		},
	
	
		toJQuery: function ()
		{
			return $( this );
		},
	
	
		unique: function ()
		{
			return new _Api( this.context, _unique(this) );
		},
	
	
		unshift: __arrayProto.unshift
	} );
	
	
	_Api.extend = function ( scope, obj, ext )
	{
		// Only extend API instances and static properties of the API
		if ( ! ext.length || ! obj || ( ! (obj instanceof _Api) && ! obj.__dt_wrapper ) ) {
			return;
		}
	
		var
			i, ien,
			j, jen,
			struct, inner,
			methodScoping = function ( scope, fn, struc ) {
				return function () {
					var ret = fn.apply( scope, arguments );
	
					// Method extension
					_Api.extend( ret, ret, struc.methodExt );
					return ret;
				};
			};
	
		for ( i=0, ien=ext.length ; i<ien ; i++ ) {
			struct = ext[i];
	
			// Value
			obj[ struct.name ] = typeof struct.val === 'function' ?
				methodScoping( scope, struct.val, struct ) :
				$.isPlainObject( struct.val ) ?
					{} :
					struct.val;
	
			obj[ struct.name ].__dt_wrapper = true;
	
			// Property extension
			_Api.extend( scope, obj[ struct.name ], struct.propExt );
		}
	};
	
	
	// @todo - Is there need for an augment function?
	// _Api.augment = function ( inst, name )
	// {
	// 	// Find src object in the structure from the name
	// 	var parts = name.split('.');
	
	// 	_Api.extend( inst, obj );
	// };
	
	
	//     [
	//       {
	//         name:      'data'                -- string   - Property name
	//         val:       function () {},       -- function - Api method (or undefined if just an object
	//         methodExt: [ ... ],              -- array    - Array of Api object definitions to extend the method result
	//         propExt:   [ ... ]               -- array    - Array of Api object definitions to extend the property
	//       },
	//       {
	//         name:     'row'
	//         val:       {},
	//         methodExt: [ ... ],
	//         propExt:   [
	//           {
	//             name:      'data'
	//             val:       function () {},
	//             methodExt: [ ... ],
	//             propExt:   [ ... ]
	//           },
	//           ...
	//         ]
	//       }
	//     ]
	
	_Api.register = _api_register = function ( name, val )
	{
		if ( $.isArray( name ) ) {
			for ( var j=0, jen=name.length ; j<jen ; j++ ) {
				_Api.register( name[j], val );
			}
			return;
		}
	
		var
			i, ien,
			heir = name.split('.'),
			struct = __apiStruct,
			key, method;
	
		var find = function ( src, name ) {
			for ( var i=0, ien=src.length ; i<ien ; i++ ) {
				if ( src[i].name === name ) {
					return src[i];
				}
			}
			return null;
		};
	
		for ( i=0, ien=heir.length ; i<ien ; i++ ) {
			method = heir[i].indexOf('()') !== -1;
			key = method ?
				heir[i].replace('()', '') :
				heir[i];
	
			var src = find( struct, key );
			if ( ! src ) {
				src = {
					name:      key,
					val:       {},
					methodExt: [],
					propExt:   []
				};
				struct.push( src );
			}
	
			if ( i === ien-1 ) {
				src.val = val;
			}
			else {
				struct = method ?
					src.methodExt :
					src.propExt;
			}
		}
	};
	
	
	_Api.registerPlural = _api_registerPlural = function ( pluralName, singularName, val ) {
		_Api.register( pluralName, val );
	
		_Api.register( singularName, function () {
			var ret = val.apply( this, arguments );
	
			if ( ret === this ) {
				// Returned item is the API instance that was passed in, return it
				return this;
			}
			else if ( ret instanceof _Api ) {
				// New API instance returned, want the value from the first item
				// in the returned array for the singular result.
				return ret.length ?
					$.isArray( ret[0] ) ?
						new _Api( ret.context, ret[0] ) : // Array results are 'enhanced'
						ret[0] :
					undefined;
			}
	
			// Non-API return - just fire it back
			return ret;
		} );
	};
	
	
	/**
	 * Selector for HTML tables. Apply the given selector to the give array of
	 * DataTables settings objects.
	 *
	 * @param {string|integer} [selector] jQuery selector string or integer
	 * @param  {array} Array of DataTables settings objects to be filtered
	 * @return {array}
	 * @ignore
	 */
	var __table_selector = function ( selector, a )
	{
		// Integer is used to pick out a table by index
		if ( typeof selector === 'number' ) {
			return [ a[ selector ] ];
		}
	
		// Perform a jQuery selector on the table nodes
		var nodes = $.map( a, function (el, i) {
			return el.nTable;
		} );
	
		return $(nodes)
			.filter( selector )
			.map( function (i) {
				// Need to translate back from the table node to the settings
				var idx = $.inArray( this, nodes );
				return a[ idx ];
			} )
			.toArray();
	};
	
	
	
	/**
	 * Context selector for the API's context (i.e. the tables the API instance
	 * refers to.
	 *
	 * @name    DataTable.Api#tables
	 * @param {string|integer} [selector] Selector to pick which tables the iterator
	 *   should operate on. If not given, all tables in the current context are
	 *   used. This can be given as a jQuery selector (for example `':gt(0)'`) to
	 *   select multiple tables or as an integer to select a single table.
	 * @returns {DataTable.Api} Returns a new API instance if a selector is given.
	 */
	_api_register( 'tables()', function ( selector ) {
		// A new instance is created if there was a selector specified
		return selector ?
			new _Api( __table_selector( selector, this.context ) ) :
			this;
	} );
	
	
	_api_register( 'table()', function ( selector ) {
		var tables = this.tables( selector );
		var ctx = tables.context;
	
		// Truncate to the first matched table
		return ctx.length ?
			new _Api( ctx[0] ) :
			tables;
	} );
	
	
	_api_registerPlural( 'tables().nodes()', 'table().node()' , function () {
		return this.iterator( 'table', function ( ctx ) {
			return ctx.nTable;
		}, 1 );
	} );
	
	
	_api_registerPlural( 'tables().body()', 'table().body()' , function () {
		return this.iterator( 'table', function ( ctx ) {
			return ctx.nTBody;
		}, 1 );
	} );
	
	
	_api_registerPlural( 'tables().header()', 'table().header()' , function () {
		return this.iterator( 'table', function ( ctx ) {
			return ctx.nTHead;
		}, 1 );
	} );
	
	
	_api_registerPlural( 'tables().footer()', 'table().footer()' , function () {
		return this.iterator( 'table', function ( ctx ) {
			return ctx.nTFoot;
		}, 1 );
	} );
	
	
	_api_registerPlural( 'tables().containers()', 'table().container()' , function () {
		return this.iterator( 'table', function ( ctx ) {
			return ctx.nTableWrapper;
		}, 1 );
	} );
	
	
	
	/**
	 * Redraw the tables in the current context.
	 */
	_api_register( 'draw()', function ( paging ) {
		return this.iterator( 'table', function ( settings ) {
			if ( paging === 'page' ) {
				_fnDraw( settings );
			}
			else {
				if ( typeof paging === 'string' ) {
					paging = paging === 'full-hold' ?
						false :
						true;
				}
	
				_fnReDraw( settings, paging===false );
			}
		} );
	} );
	
	
	
	/**
	 * Get the current page index.
	 *
	 * @return {integer} Current page index (zero based)
	 *//**
	 * Set the current page.
	 *
	 * Note that if you attempt to show a page which does not exist, DataTables will
	 * not throw an error, but rather reset the paging.
	 *
	 * @param {integer|string} action The paging action to take. This can be one of:
	 *  * `integer` - The page index to jump to
	 *  * `string` - An action to take:
	 *    * `first` - Jump to first page.
	 *    * `next` - Jump to the next page
	 *    * `previous` - Jump to previous page
	 *    * `last` - Jump to the last page.
	 * @returns {DataTables.Api} this
	 */
	_api_register( 'page()', function ( action ) {
		if ( action === undefined ) {
			return this.page.info().page; // not an expensive call
		}
	
		// else, have an action to take on all tables
		return this.iterator( 'table', function ( settings ) {
			_fnPageChange( settings, action );
		} );
	} );
	
	
	/**
	 * Paging information for the first table in the current context.
	 *
	 * If you require paging information for another table, use the `table()` method
	 * with a suitable selector.
	 *
	 * @return {object} Object with the following properties set:
	 *  * `page` - Current page index (zero based - i.e. the first page is `0`)
	 *  * `pages` - Total number of pages
	 *  * `start` - Display index for the first record shown on the current page
	 *  * `end` - Display index for the last record shown on the current page
	 *  * `length` - Display length (number of records). Note that generally `start
	 *    + length = end`, but this is not always true, for example if there are
	 *    only 2 records to show on the final page, with a length of 10.
	 *  * `recordsTotal` - Full data set length
	 *  * `recordsDisplay` - Data set length once the current filtering criterion
	 *    are applied.
	 */
	_api_register( 'page.info()', function ( action ) {
		if ( this.context.length === 0 ) {
			return undefined;
		}
	
		var
			settings   = this.context[0],
			start      = settings._iDisplayStart,
			len        = settings.oFeatures.bPaginate ? settings._iDisplayLength : -1,
			visRecords = settings.fnRecordsDisplay(),
			all        = len === -1;
	
		return {
			"page":           all ? 0 : Math.floor( start / len ),
			"pages":          all ? 1 : Math.ceil( visRecords / len ),
			"start":          start,
			"end":            settings.fnDisplayEnd(),
			"length":         len,
			"recordsTotal":   settings.fnRecordsTotal(),
			"recordsDisplay": visRecords,
			"serverSide":     _fnDataSource( settings ) === 'ssp'
		};
	} );
	
	
	/**
	 * Get the current page length.
	 *
	 * @return {integer} Current page length. Note `-1` indicates that all records
	 *   are to be shown.
	 *//**
	 * Set the current page length.
	 *
	 * @param {integer} Page length to set. Use `-1` to show all records.
	 * @returns {DataTables.Api} this
	 */
	_api_register( 'page.len()', function ( len ) {
		// Note that we can't call this function 'length()' because `length`
		// is a Javascript property of functions which defines how many arguments
		// the function expects.
		if ( len === undefined ) {
			return this.context.length !== 0 ?
				this.context[0]._iDisplayLength :
				undefined;
		}
	
		// else, set the page length
		return this.iterator( 'table', function ( settings ) {
			_fnLengthChange( settings, len );
		} );
	} );
	
	
	
	var __reload = function ( settings, holdPosition, callback ) {
		// Use the draw event to trigger a callback
		if ( callback ) {
			var api = new _Api( settings );
	
			api.one( 'draw', function () {
				callback( api.ajax.json() );
			} );
		}
	
		if ( _fnDataSource( settings ) == 'ssp' ) {
			_fnReDraw( settings, holdPosition );
		}
		else {
			_fnProcessingDisplay( settings, true );
	
			// Cancel an existing request
			var xhr = settings.jqXHR;
			if ( xhr && xhr.readyState !== 4 ) {
				xhr.abort();
			}
	
			// Trigger xhr
			_fnBuildAjax( settings, [], function( json ) {
				_fnClearTable( settings );
	
				var data = _fnAjaxDataSrc( settings, json );
				for ( var i=0, ien=data.length ; i<ien ; i++ ) {
					_fnAddData( settings, data[i] );
				}
	
				_fnReDraw( settings, holdPosition );
				_fnProcessingDisplay( settings, false );
			} );
		}
	};
	
	
	/**
	 * Get the JSON response from the last Ajax request that DataTables made to the
	 * server. Note that this returns the JSON from the first table in the current
	 * context.
	 *
	 * @return {object} JSON received from the server.
	 */
	_api_register( 'ajax.json()', function () {
		var ctx = this.context;
	
		if ( ctx.length > 0 ) {
			return ctx[0].json;
		}
	
		// else return undefined;
	} );
	
	
	/**
	 * Get the data submitted in the last Ajax request
	 */
	_api_register( 'ajax.params()', function () {
		var ctx = this.context;
	
		if ( ctx.length > 0 ) {
			return ctx[0].oAjaxData;
		}
	
		// else return undefined;
	} );
	
	
	/**
	 * Reload tables from the Ajax data source. Note that this function will
	 * automatically re-draw the table when the remote data has been loaded.
	 *
	 * @param {boolean} [reset=true] Reset (default) or hold the current paging
	 *   position. A full re-sort and re-filter is performed when this method is
	 *   called, which is why the pagination reset is the default action.
	 * @returns {DataTables.Api} this
	 */
	_api_register( 'ajax.reload()', function ( callback, resetPaging ) {
		return this.iterator( 'table', function (settings) {
			__reload( settings, resetPaging===false, callback );
		} );
	} );
	
	
	/**
	 * Get the current Ajax URL. Note that this returns the URL from the first
	 * table in the current context.
	 *
	 * @return {string} Current Ajax source URL
	 *//**
	 * Set the Ajax URL. Note that this will set the URL for all tables in the
	 * current context.
	 *
	 * @param {string} url URL to set.
	 * @returns {DataTables.Api} this
	 */
	_api_register( 'ajax.url()', function ( url ) {
		var ctx = this.context;
	
		if ( url === undefined ) {
			// get
			if ( ctx.length === 0 ) {
				return undefined;
			}
			ctx = ctx[0];
	
			return ctx.ajax ?
				$.isPlainObject( ctx.ajax ) ?
					ctx.ajax.url :
					ctx.ajax :
				ctx.sAjaxSource;
		}
	
		// set
		return this.iterator( 'table', function ( settings ) {
			if ( $.isPlainObject( settings.ajax ) ) {
				settings.ajax.url = url;
			}
			else {
				settings.ajax = url;
			}
			// No need to consider sAjaxSource here since DataTables gives priority
			// to `ajax` over `sAjaxSource`. So setting `ajax` here, renders any
			// value of `sAjaxSource` redundant.
		} );
	} );
	
	
	/**
	 * Load data from the newly set Ajax URL. Note that this method is only
	 * available when `ajax.url()` is used to set a URL. Additionally, this method
	 * has the same effect as calling `ajax.reload()` but is provided for
	 * convenience when setting a new URL. Like `ajax.reload()` it will
	 * automatically redraw the table once the remote data has been loaded.
	 *
	 * @returns {DataTables.Api} this
	 */
	_api_register( 'ajax.url().load()', function ( callback, resetPaging ) {
		// Same as a reload, but makes sense to present it for easy access after a
		// url change
		return this.iterator( 'table', function ( ctx ) {
			__reload( ctx, resetPaging===false, callback );
		} );
	} );
	
	
	
	
	var _selector_run = function ( type, selector, selectFn, settings, opts )
	{
		var
			out = [], res,
			a, i, ien, j, jen,
			selectorType = typeof selector;
	
		// Can't just check for isArray here, as an API or jQuery instance might be
		// given with their array like look
		if ( ! selector || selectorType === 'string' || selectorType === 'function' || selector.length === undefined ) {
			selector = [ selector ];
		}
	
		for ( i=0, ien=selector.length ; i<ien ; i++ ) {
			// Only split on simple strings - complex expressions will be jQuery selectors
			a = selector[i] && selector[i].split && ! selector[i].match(/[\[\(:]/) ?
				selector[i].split(',') :
				[ selector[i] ];
	
			for ( j=0, jen=a.length ; j<jen ; j++ ) {
				res = selectFn( typeof a[j] === 'string' ? $.trim(a[j]) : a[j] );
	
				if ( res && res.length ) {
					out = out.concat( res );
				}
			}
		}
	
		// selector extensions
		var ext = _ext.selector[ type ];
		if ( ext.length ) {
			for ( i=0, ien=ext.length ; i<ien ; i++ ) {
				out = ext[i]( settings, opts, out );
			}
		}
	
		return _unique( out );
	};
	
	
	var _selector_opts = function ( opts )
	{
		if ( ! opts ) {
			opts = {};
		}
	
		// Backwards compatibility for 1.9- which used the terminology filter rather
		// than search
		if ( opts.filter && opts.search === undefined ) {
			opts.search = opts.filter;
		}
	
		return $.extend( {
			search: 'none',
			order: 'current',
			page: 'all'
		}, opts );
	};
	
	
	var _selector_first = function ( inst )
	{
		// Reduce the API instance to the first item found
		for ( var i=0, ien=inst.length ; i<ien ; i++ ) {
			if ( inst[i].length > 0 ) {
				// Assign the first element to the first item in the instance
				// and truncate the instance and context
				inst[0] = inst[i];
				inst[0].length = 1;
				inst.length = 1;
				inst.context = [ inst.context[i] ];
	
				return inst;
			}
		}
	
		// Not found - return an empty instance
		inst.length = 0;
		return inst;
	};
	
	
	var _selector_row_indexes = function ( settings, opts )
	{
		var
			i, ien, tmp, a=[],
			displayFiltered = settings.aiDisplay,
			displayMaster = settings.aiDisplayMaster;
	
		var
			search = opts.search,  // none, applied, removed
			order  = opts.order,   // applied, current, index (original - compatibility with 1.9)
			page   = opts.page;    // all, current
	
		if ( _fnDataSource( settings ) == 'ssp' ) {
			// In server-side processing mode, most options are irrelevant since
			// rows not shown don't exist and the index order is the applied order
			// Removed is a special case - for consistency just return an empty
			// array
			return search === 'removed' ?
				[] :
				_range( 0, displayMaster.length );
		}
		else if ( page == 'current' ) {
			// Current page implies that order=current and fitler=applied, since it is
			// fairly senseless otherwise, regardless of what order and search actually
			// are
			for ( i=settings._iDisplayStart, ien=settings.fnDisplayEnd() ; i<ien ; i++ ) {
				a.push( displayFiltered[i] );
			}
		}
		else if ( order == 'current' || order == 'applied' ) {
			a = search == 'none' ?
				displayMaster.slice() :                      // no search
				search == 'applied' ?
					displayFiltered.slice() :                // applied search
					$.map( displayMaster, function (el, i) { // removed search
						return $.inArray( el, displayFiltered ) === -1 ? el : null;
					} );
		}
		else if ( order == 'index' || order == 'original' ) {
			for ( i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
				if ( search == 'none' ) {
					a.push( i );
				}
				else { // applied | removed
					tmp = $.inArray( i, displayFiltered );
	
					if ((tmp === -1 && search == 'removed') ||
						(tmp >= 0   && search == 'applied') )
					{
						a.push( i );
					}
				}
			}
		}
	
		return a;
	};
	
	
	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Rows
	 *
	 * {}          - no selector - use all available rows
	 * {integer}   - row aoData index
	 * {node}      - TR node
	 * {string}    - jQuery selector to apply to the TR elements
	 * {array}     - jQuery array of nodes, or simply an array of TR nodes
	 *
	 */
	
	
	var __row_selector = function ( settings, selector, opts )
	{
		var rows;
		var run = function ( sel ) {
			var selInt = _intVal( sel );
			var i, ien;
	
			// Short cut - selector is a number and no options provided (default is
			// all records, so no need to check if the index is in there, since it
			// must be - dev error if the index doesn't exist).
			if ( selInt !== null && ! opts ) {
				return [ selInt ];
			}
	
			if ( ! rows ) {
				rows = _selector_row_indexes( settings, opts );
			}
	
			if ( selInt !== null && $.inArray( selInt, rows ) !== -1 ) {
				// Selector - integer
				return [ selInt ];
			}
			else if ( sel === null || sel === undefined || sel === '' ) {
				// Selector - none
				return rows;
			}
	
			// Selector - function
			if ( typeof sel === 'function' ) {
				return $.map( rows, function (idx) {
					var row = settings.aoData[ idx ];
					return sel( idx, row._aData, row.nTr ) ? idx : null;
				} );
			}
	
			// Get nodes in the order from the `rows` array with null values removed
			var nodes = _removeEmpty(
				_pluck_order( settings.aoData, rows, 'nTr' )
			);
	
			// Selector - node
			if ( sel.nodeName ) {
				if ( sel._DT_RowIndex !== undefined ) {
					return [ sel._DT_RowIndex ]; // Property added by DT for fast lookup
				}
				else if ( sel._DT_CellIndex ) {
					return [ sel._DT_CellIndex.row ];
				}
				else {
					var host = $(sel).closest('*[data-dt-row]');
					return host.length ?
						[ host.data('dt-row') ] :
						[];
				}
			}
	
			// ID selector. Want to always be able to select rows by id, regardless
			// of if the tr element has been created or not, so can't rely upon
			// jQuery here - hence a custom implementation. This does not match
			// Sizzle's fast selector or HTML4 - in HTML5 the ID can be anything,
			// but to select it using a CSS selector engine (like Sizzle or
			// querySelect) it would need to need to be escaped for some characters.
			// DataTables simplifies this for row selectors since you can select
			// only a row. A # indicates an id any anything that follows is the id -
			// unescaped.
			if ( typeof sel === 'string' && sel.charAt(0) === '#' ) {
				// get row index from id
				var rowObj = settings.aIds[ sel.replace( /^#/, '' ) ];
				if ( rowObj !== undefined ) {
					return [ rowObj.idx ];
				}
	
				// need to fall through to jQuery in case there is DOM id that
				// matches
			}
	
			// Selector - jQuery selector string, array of nodes or jQuery object/
			// As jQuery's .filter() allows jQuery objects to be passed in filter,
			// it also allows arrays, so this will cope with all three options
			return $(nodes)
				.filter( sel )
				.map( function () {
					return this._DT_RowIndex;
				} )
				.toArray();
		};
	
		return _selector_run( 'row', selector, run, settings, opts );
	};
	
	
	_api_register( 'rows()', function ( selector, opts ) {
		// argument shifting
		if ( selector === undefined ) {
			selector = '';
		}
		else if ( $.isPlainObject( selector ) ) {
			opts = selector;
			selector = '';
		}
	
		opts = _selector_opts( opts );
	
		var inst = this.iterator( 'table', function ( settings ) {
			return __row_selector( settings, selector, opts );
		}, 1 );
	
		// Want argument shifting here and in __row_selector?
		inst.selector.rows = selector;
		inst.selector.opts = opts;
	
		return inst;
	} );
	
	_api_register( 'rows().nodes()', function () {
		return this.iterator( 'row', function ( settings, row ) {
			return settings.aoData[ row ].nTr || undefined;
		}, 1 );
	} );
	
	_api_register( 'rows().data()', function () {
		return this.iterator( true, 'rows', function ( settings, rows ) {
			return _pluck_order( settings.aoData, rows, '_aData' );
		}, 1 );
	} );
	
	_api_registerPlural( 'rows().cache()', 'row().cache()', function ( type ) {
		return this.iterator( 'row', function ( settings, row ) {
			var r = settings.aoData[ row ];
			return type === 'search' ? r._aFilterData : r._aSortData;
		}, 1 );
	} );
	
	_api_registerPlural( 'rows().invalidate()', 'row().invalidate()', function ( src ) {
		return this.iterator( 'row', function ( settings, row ) {
			_fnInvalidate( settings, row, src );
		} );
	} );
	
	_api_registerPlural( 'rows().indexes()', 'row().index()', function () {
		return this.iterator( 'row', function ( settings, row ) {
			return row;
		}, 1 );
	} );
	
	_api_registerPlural( 'rows().ids()', 'row().id()', function ( hash ) {
		var a = [];
		var context = this.context;
	
		// `iterator` will drop undefined values, but in this case we want them
		for ( var i=0, ien=context.length ; i<ien ; i++ ) {
			for ( var j=0, jen=this[i].length ; j<jen ; j++ ) {
				var id = context[i].rowIdFn( context[i].aoData[ this[i][j] ]._aData );
				a.push( (hash === true ? '#' : '' )+ id );
			}
		}
	
		return new _Api( context, a );
	} );
	
	_api_registerPlural( 'rows().remove()', 'row().remove()', function () {
		var that = this;
	
		this.iterator( 'row', function ( settings, row, thatIdx ) {
			var data = settings.aoData;
			var rowData = data[ row ];
			var i, ien, j, jen;
			var loopRow, loopCells;
	
			data.splice( row, 1 );
	
			// Update the cached indexes
			for ( i=0, ien=data.length ; i<ien ; i++ ) {
				loopRow = data[i];
				loopCells = loopRow.anCells;
	
				// Rows
				if ( loopRow.nTr !== null ) {
					loopRow.nTr._DT_RowIndex = i;
				}
	
				// Cells
				if ( loopCells !== null ) {
					for ( j=0, jen=loopCells.length ; j<jen ; j++ ) {
						loopCells[j]._DT_CellIndex.row = i;
					}
				}
			}
	
			// Delete from the display arrays
			_fnDeleteIndex( settings.aiDisplayMaster, row );
			_fnDeleteIndex( settings.aiDisplay, row );
			_fnDeleteIndex( that[ thatIdx ], row, false ); // maintain local indexes
	
			// For server-side processing tables - subtract the deleted row from the count
			if ( settings._iRecordsDisplay > 0 ) {
				settings._iRecordsDisplay--;
			}
	
			// Check for an 'overflow' they case for displaying the table
			_fnLengthOverflow( settings );
	
			// Remove the row's ID reference if there is one
			var id = settings.rowIdFn( rowData._aData );
			if ( id !== undefined ) {
				delete settings.aIds[ id ];
			}
		} );
	
		this.iterator( 'table', function ( settings ) {
			for ( var i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
				settings.aoData[i].idx = i;
			}
		} );
	
		return this;
	} );
	
	
	_api_register( 'rows.add()', function ( rows ) {
		var newRows = this.iterator( 'table', function ( settings ) {
				var row, i, ien;
				var out = [];
	
				for ( i=0, ien=rows.length ; i<ien ; i++ ) {
					row = rows[i];
	
					if ( row.nodeName && row.nodeName.toUpperCase() === 'TR' ) {
						out.push( _fnAddTr( settings, row )[0] );
					}
					else {
						out.push( _fnAddData( settings, row ) );
					}
				}
	
				return out;
			}, 1 );
	
		// Return an Api.rows() extended instance, so rows().nodes() etc can be used
		var modRows = this.rows( -1 );
		modRows.pop();
		$.merge( modRows, newRows );
	
		return modRows;
	} );
	
	
	
	
	
	/**
	 *
	 */
	_api_register( 'row()', function ( selector, opts ) {
		return _selector_first( this.rows( selector, opts ) );
	} );
	
	
	_api_register( 'row().data()', function ( data ) {
		var ctx = this.context;
	
		if ( data === undefined ) {
			// Get
			return ctx.length && this.length ?
				ctx[0].aoData[ this[0] ]._aData :
				undefined;
		}
	
		// Set
		ctx[0].aoData[ this[0] ]._aData = data;
	
		// Automatically invalidate
		_fnInvalidate( ctx[0], this[0], 'data' );
	
		return this;
	} );
	
	
	_api_register( 'row().node()', function () {
		var ctx = this.context;
	
		return ctx.length && this.length ?
			ctx[0].aoData[ this[0] ].nTr || null :
			null;
	} );
	
	
	_api_register( 'row.add()', function ( row ) {
		// Allow a jQuery object to be passed in - only a single row is added from
		// it though - the first element in the set
		if ( row instanceof $ && row.length ) {
			row = row[0];
		}
	
		var rows = this.iterator( 'table', function ( settings ) {
			if ( row.nodeName && row.nodeName.toUpperCase() === 'TR' ) {
				return _fnAddTr( settings, row )[0];
			}
			return _fnAddData( settings, row );
		} );
	
		// Return an Api.rows() extended instance, with the newly added row selected
		return this.row( rows[0] );
	} );
	
	
	
	var __details_add = function ( ctx, row, data, klass )
	{
		// Convert to array of TR elements
		var rows = [];
		var addRow = function ( r, k ) {
			// Recursion to allow for arrays of jQuery objects
			if ( $.isArray( r ) || r instanceof $ ) {
				for ( var i=0, ien=r.length ; i<ien ; i++ ) {
					addRow( r[i], k );
				}
				return;
			}
	
			// If we get a TR element, then just add it directly - up to the dev
			// to add the correct number of columns etc
			if ( r.nodeName && r.nodeName.toLowerCase() === 'tr' ) {
				rows.push( r );
			}
			else {
				// Otherwise create a row with a wrapper
				var created = $('<tr><td/></tr>').addClass( k );
				$('td', created)
					.addClass( k )
					.html( r )
					[0].colSpan = _fnVisbleColumns( ctx );
	
				rows.push( created[0] );
			}
		};
	
		addRow( data, klass );
	
		if ( row._details ) {
			row._details.detach();
		}
	
		row._details = $(rows);
	
		// If the children were already shown, that state should be retained
		if ( row._detailsShow ) {
			row._details.insertAfter( row.nTr );
		}
	};
	
	
	var __details_remove = function ( api, idx )
	{
		var ctx = api.context;
	
		if ( ctx.length ) {
			var row = ctx[0].aoData[ idx !== undefined ? idx : api[0] ];
	
			if ( row && row._details ) {
				row._details.remove();
	
				row._detailsShow = undefined;
				row._details = undefined;
			}
		}
	};
	
	
	var __details_display = function ( api, show ) {
		var ctx = api.context;
	
		if ( ctx.length && api.length ) {
			var row = ctx[0].aoData[ api[0] ];
	
			if ( row._details ) {
				row._detailsShow = show;
	
				if ( show ) {
					row._details.insertAfter( row.nTr );
				}
				else {
					row._details.detach();
				}
	
				__details_events( ctx[0] );
			}
		}
	};
	
	
	var __details_events = function ( settings )
	{
		var api = new _Api( settings );
		var namespace = '.dt.DT_details';
		var drawEvent = 'draw'+namespace;
		var colvisEvent = 'column-visibility'+namespace;
		var destroyEvent = 'destroy'+namespace;
		var data = settings.aoData;
	
		api.off( drawEvent +' '+ colvisEvent +' '+ destroyEvent );
	
		if ( _pluck( data, '_details' ).length > 0 ) {
			// On each draw, insert the required elements into the document
			api.on( drawEvent, function ( e, ctx ) {
				if ( settings !== ctx ) {
					return;
				}
	
				api.rows( {page:'current'} ).eq(0).each( function (idx) {
					// Internal data grab
					var row = data[ idx ];
	
					if ( row._detailsShow ) {
						row._details.insertAfter( row.nTr );
					}
				} );
			} );
	
			// Column visibility change - update the colspan
			api.on( colvisEvent, function ( e, ctx, idx, vis ) {
				if ( settings !== ctx ) {
					return;
				}
	
				// Update the colspan for the details rows (note, only if it already has
				// a colspan)
				var row, visible = _fnVisbleColumns( ctx );
	
				for ( var i=0, ien=data.length ; i<ien ; i++ ) {
					row = data[i];
	
					if ( row._details ) {
						row._details.children('td[colspan]').attr('colspan', visible );
					}
				}
			} );
	
			// Table destroyed - nuke any child rows
			api.on( destroyEvent, function ( e, ctx ) {
				if ( settings !== ctx ) {
					return;
				}
	
				for ( var i=0, ien=data.length ; i<ien ; i++ ) {
					if ( data[i]._details ) {
						__details_remove( api, i );
					}
				}
			} );
		}
	};
	
	// Strings for the method names to help minification
	var _emp = '';
	var _child_obj = _emp+'row().child';
	var _child_mth = _child_obj+'()';
	
	// data can be:
	//  tr
	//  string
	//  jQuery or array of any of the above
	_api_register( _child_mth, function ( data, klass ) {
		var ctx = this.context;
	
		if ( data === undefined ) {
			// get
			return ctx.length && this.length ?
				ctx[0].aoData[ this[0] ]._details :
				undefined;
		}
		else if ( data === true ) {
			// show
			this.child.show();
		}
		else if ( data === false ) {
			// remove
			__details_remove( this );
		}
		else if ( ctx.length && this.length ) {
			// set
			__details_add( ctx[0], ctx[0].aoData[ this[0] ], data, klass );
		}
	
		return this;
	} );
	
	
	_api_register( [
		_child_obj+'.show()',
		_child_mth+'.show()' // only when `child()` was called with parameters (without
	], function ( show ) {   // it returns an object and this method is not executed)
		__details_display( this, true );
		return this;
	} );
	
	
	_api_register( [
		_child_obj+'.hide()',
		_child_mth+'.hide()' // only when `child()` was called with parameters (without
	], function () {         // it returns an object and this method is not executed)
		__details_display( this, false );
		return this;
	} );
	
	
	_api_register( [
		_child_obj+'.remove()',
		_child_mth+'.remove()' // only when `child()` was called with parameters (without
	], function () {           // it returns an object and this method is not executed)
		__details_remove( this );
		return this;
	} );
	
	
	_api_register( _child_obj+'.isShown()', function () {
		var ctx = this.context;
	
		if ( ctx.length && this.length ) {
			// _detailsShown as false or undefined will fall through to return false
			return ctx[0].aoData[ this[0] ]._detailsShow || false;
		}
		return false;
	} );
	
	
	
	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Columns
	 *
	 * {integer}           - column index (>=0 count from left, <0 count from right)
	 * "{integer}:visIdx"  - visible column index (i.e. translate to column index)  (>=0 count from left, <0 count from right)
	 * "{integer}:visible" - alias for {integer}:visIdx  (>=0 count from left, <0 count from right)
	 * "{string}:name"     - column name
	 * "{string}"          - jQuery selector on column header nodes
	 *
	 */
	
	// can be an array of these items, comma separated list, or an array of comma
	// separated lists
	
	var __re_column_selector = /^([^:]+):(name|visIdx|visible)$/;
	
	
	// r1 and r2 are redundant - but it means that the parameters match for the
	// iterator callback in columns().data()
	var __columnData = function ( settings, column, r1, r2, rows ) {
		var a = [];
		for ( var row=0, ien=rows.length ; row<ien ; row++ ) {
			a.push( _fnGetCellData( settings, rows[row], column ) );
		}
		return a;
	};
	
	
	var __column_selector = function ( settings, selector, opts )
	{
		var
			columns = settings.aoColumns,
			names = _pluck( columns, 'sName' ),
			nodes = _pluck( columns, 'nTh' );
	
		var run = function ( s ) {
			var selInt = _intVal( s );
	
			// Selector - all
			if ( s === '' ) {
				return _range( columns.length );
			}
	
			// Selector - index
			if ( selInt !== null ) {
				return [ selInt >= 0 ?
					selInt : // Count from left
					columns.length + selInt // Count from right (+ because its a negative value)
				];
			}
	
			// Selector = function
			if ( typeof s === 'function' ) {
				var rows = _selector_row_indexes( settings, opts );
	
				return $.map( columns, function (col, idx) {
					return s(
							idx,
							__columnData( settings, idx, 0, 0, rows ),
							nodes[ idx ]
						) ? idx : null;
				} );
			}
	
			// jQuery or string selector
			var match = typeof s === 'string' ?
				s.match( __re_column_selector ) :
				'';
	
			if ( match ) {
				switch( match[2] ) {
					case 'visIdx':
					case 'visible':
						var idx = parseInt( match[1], 10 );
						// Visible index given, convert to column index
						if ( idx < 0 ) {
							// Counting from the right
							var visColumns = $.map( columns, function (col,i) {
								return col.bVisible ? i : null;
							} );
							return [ visColumns[ visColumns.length + idx ] ];
						}
						// Counting from the left
						return [ _fnVisibleToColumnIndex( settings, idx ) ];
	
					case 'name':
						// match by name. `names` is column index complete and in order
						return $.map( names, function (name, i) {
							return name === match[1] ? i : null;
						} );
	
					default:
						return [];
				}
			}
	
			// Cell in the table body
			if ( s.nodeName && s._DT_CellIndex ) {
				return [ s._DT_CellIndex.column ];
			}
	
			// jQuery selector on the TH elements for the columns
			var jqResult = $( nodes )
				.filter( s )
				.map( function () {
					return $.inArray( this, nodes ); // `nodes` is column index complete and in order
				} )
				.toArray();
	
			if ( jqResult.length || ! s.nodeName ) {
				return jqResult;
			}
	
			// Otherwise a node which might have a `dt-column` data attribute, or be
			// a child or such an element
			var host = $(s).closest('*[data-dt-column]');
			return host.length ?
				[ host.data('dt-column') ] :
				[];
		};
	
		return _selector_run( 'column', selector, run, settings, opts );
	};
	
	
	var __setColumnVis = function ( settings, column, vis ) {
		var
			cols = settings.aoColumns,
			col  = cols[ column ],
			data = settings.aoData,
			row, cells, i, ien, tr;
	
		// Get
		if ( vis === undefined ) {
			return col.bVisible;
		}
	
		// Set
		// No change
		if ( col.bVisible === vis ) {
			return;
		}
	
		if ( vis ) {
			// Insert column
			// Need to decide if we should use appendChild or insertBefore
			var insertBefore = $.inArray( true, _pluck(cols, 'bVisible'), column+1 );
	
			for ( i=0, ien=data.length ; i<ien ; i++ ) {
				tr = data[i].nTr;
				cells = data[i].anCells;
	
				if ( tr ) {
					// insertBefore can act like appendChild if 2nd arg is null
					tr.insertBefore( cells[ column ], cells[ insertBefore ] || null );
				}
			}
		}
		else {
			// Remove column
			$( _pluck( settings.aoData, 'anCells', column ) ).detach();
		}
	
		// Common actions
		col.bVisible = vis;
		_fnDrawHead( settings, settings.aoHeader );
		_fnDrawHead( settings, settings.aoFooter );
	
		_fnSaveState( settings );
	};
	
	
	_api_register( 'columns()', function ( selector, opts ) {
		// argument shifting
		if ( selector === undefined ) {
			selector = '';
		}
		else if ( $.isPlainObject( selector ) ) {
			opts = selector;
			selector = '';
		}
	
		opts = _selector_opts( opts );
	
		var inst = this.iterator( 'table', function ( settings ) {
			return __column_selector( settings, selector, opts );
		}, 1 );
	
		// Want argument shifting here and in _row_selector?
		inst.selector.cols = selector;
		inst.selector.opts = opts;
	
		return inst;
	} );
	
	_api_registerPlural( 'columns().header()', 'column().header()', function ( selector, opts ) {
		return this.iterator( 'column', function ( settings, column ) {
			return settings.aoColumns[column].nTh;
		}, 1 );
	} );
	
	_api_registerPlural( 'columns().footer()', 'column().footer()', function ( selector, opts ) {
		return this.iterator( 'column', function ( settings, column ) {
			return settings.aoColumns[column].nTf;
		}, 1 );
	} );
	
	_api_registerPlural( 'columns().data()', 'column().data()', function () {
		return this.iterator( 'column-rows', __columnData, 1 );
	} );
	
	_api_registerPlural( 'columns().dataSrc()', 'column().dataSrc()', function () {
		return this.iterator( 'column', function ( settings, column ) {
			return settings.aoColumns[column].mData;
		}, 1 );
	} );
	
	_api_registerPlural( 'columns().cache()', 'column().cache()', function ( type ) {
		return this.iterator( 'column-rows', function ( settings, column, i, j, rows ) {
			return _pluck_order( settings.aoData, rows,
				type === 'search' ? '_aFilterData' : '_aSortData', column
			);
		}, 1 );
	} );
	
	_api_registerPlural( 'columns().nodes()', 'column().nodes()', function () {
		return this.iterator( 'column-rows', function ( settings, column, i, j, rows ) {
			return _pluck_order( settings.aoData, rows, 'anCells', column ) ;
		}, 1 );
	} );
	
	_api_registerPlural( 'columns().visible()', 'column().visible()', function ( vis, calc ) {
		var ret = this.iterator( 'column', function ( settings, column ) {
			if ( vis === undefined ) {
				return settings.aoColumns[ column ].bVisible;
			} // else
			__setColumnVis( settings, column, vis );
		} );
	
		// Group the column visibility changes
		if ( vis !== undefined ) {
			// Second loop once the first is done for events
			this.iterator( 'column', function ( settings, column ) {
				_fnCallbackFire( settings, null, 'column-visibility', [settings, column, vis, calc] );
			} );
	
			if ( calc === undefined || calc ) {
				this.columns.adjust();
			}
		}
	
		return ret;
	} );
	
	_api_registerPlural( 'columns().indexes()', 'column().index()', function ( type ) {
		return this.iterator( 'column', function ( settings, column ) {
			return type === 'visible' ?
				_fnColumnIndexToVisible( settings, column ) :
				column;
		}, 1 );
	} );
	
	_api_register( 'columns.adjust()', function () {
		return this.iterator( 'table', function ( settings ) {
			_fnAdjustColumnSizing( settings );
		}, 1 );
	} );
	
	_api_register( 'column.index()', function ( type, idx ) {
		if ( this.context.length !== 0 ) {
			var ctx = this.context[0];
	
			if ( type === 'fromVisible' || type === 'toData' ) {
				return _fnVisibleToColumnIndex( ctx, idx );
			}
			else if ( type === 'fromData' || type === 'toVisible' ) {
				return _fnColumnIndexToVisible( ctx, idx );
			}
		}
	} );
	
	_api_register( 'column()', function ( selector, opts ) {
		return _selector_first( this.columns( selector, opts ) );
	} );
	
	
	
	var __cell_selector = function ( settings, selector, opts )
	{
		var data = settings.aoData;
		var rows = _selector_row_indexes( settings, opts );
		var cells = _removeEmpty( _pluck_order( data, rows, 'anCells' ) );
		var allCells = $( [].concat.apply([], cells) );
		var row;
		var columns = settings.aoColumns.length;
		var a, i, ien, j, o, host;
	
		var run = function ( s ) {
			var fnSelector = typeof s === 'function';
	
			if ( s === null || s === undefined || fnSelector ) {
				// All cells and function selectors
				a = [];
	
				for ( i=0, ien=rows.length ; i<ien ; i++ ) {
					row = rows[i];
	
					for ( j=0 ; j<columns ; j++ ) {
						o = {
							row: row,
							column: j
						};
	
						if ( fnSelector ) {
							// Selector - function
							host = data[ row ];
	
							if ( s( o, _fnGetCellData(settings, row, j), host.anCells ? host.anCells[j] : null ) ) {
								a.push( o );
							}
						}
						else {
							// Selector - all
							a.push( o );
						}
					}
				}
	
				return a;
			}
			
			// Selector - index
			if ( $.isPlainObject( s ) ) {
				return [s];
			}
	
			// Selector - jQuery filtered cells
			var jqResult = allCells
				.filter( s )
				.map( function (i, el) {
					return { // use a new object, in case someone changes the values
						row:    el._DT_CellIndex.row,
						column: el._DT_CellIndex.column
	 				};
				} )
				.toArray();
	
			if ( jqResult.length || ! s.nodeName ) {
				return jqResult;
			}
	
			// Otherwise the selector is a node, and there is one last option - the
			// element might be a child of an element which has dt-row and dt-column
			// data attributes
			host = $(s).closest('*[data-dt-row]');
			return host.length ?
				[ {
					row: host.data('dt-row'),
					column: host.data('dt-column')
				} ] :
				[];
		};
	
		return _selector_run( 'cell', selector, run, settings, opts );
	};
	
	
	
	
	_api_register( 'cells()', function ( rowSelector, columnSelector, opts ) {
		// Argument shifting
		if ( $.isPlainObject( rowSelector ) ) {
			// Indexes
			if ( rowSelector.row === undefined ) {
				// Selector options in first parameter
				opts = rowSelector;
				rowSelector = null;
			}
			else {
				// Cell index objects in first parameter
				opts = columnSelector;
				columnSelector = null;
			}
		}
		if ( $.isPlainObject( columnSelector ) ) {
			opts = columnSelector;
			columnSelector = null;
		}
	
		// Cell selector
		if ( columnSelector === null || columnSelector === undefined ) {
			return this.iterator( 'table', function ( settings ) {
				return __cell_selector( settings, rowSelector, _selector_opts( opts ) );
			} );
		}
	
		// Row + column selector
		var columns = this.columns( columnSelector, opts );
		var rows = this.rows( rowSelector, opts );
		var a, i, ien, j, jen;
	
		var cells = this.iterator( 'table', function ( settings, idx ) {
			a = [];
	
			for ( i=0, ien=rows[idx].length ; i<ien ; i++ ) {
				for ( j=0, jen=columns[idx].length ; j<jen ; j++ ) {
					a.push( {
						row:    rows[idx][i],
						column: columns[idx][j]
					} );
				}
			}
	
			return a;
		}, 1 );
	
		$.extend( cells.selector, {
			cols: columnSelector,
			rows: rowSelector,
			opts: opts
		} );
	
		return cells;
	} );
	
	
	_api_registerPlural( 'cells().nodes()', 'cell().node()', function () {
		return this.iterator( 'cell', function ( settings, row, column ) {
			var data = settings.aoData[ row ];
	
			return data && data.anCells ?
				data.anCells[ column ] :
				undefined;
		}, 1 );
	} );
	
	
	_api_register( 'cells().data()', function () {
		return this.iterator( 'cell', function ( settings, row, column ) {
			return _fnGetCellData( settings, row, column );
		}, 1 );
	} );
	
	
	_api_registerPlural( 'cells().cache()', 'cell().cache()', function ( type ) {
		type = type === 'search' ? '_aFilterData' : '_aSortData';
	
		return this.iterator( 'cell', function ( settings, row, column ) {
			return settings.aoData[ row ][ type ][ column ];
		}, 1 );
	} );
	
	
	_api_registerPlural( 'cells().render()', 'cell().render()', function ( type ) {
		return this.iterator( 'cell', function ( settings, row, column ) {
			return _fnGetCellData( settings, row, column, type );
		}, 1 );
	} );
	
	
	_api_registerPlural( 'cells().indexes()', 'cell().index()', function () {
		return this.iterator( 'cell', function ( settings, row, column ) {
			return {
				row: row,
				column: column,
				columnVisible: _fnColumnIndexToVisible( settings, column )
			};
		}, 1 );
	} );
	
	
	_api_registerPlural( 'cells().invalidate()', 'cell().invalidate()', function ( src ) {
		return this.iterator( 'cell', function ( settings, row, column ) {
			_fnInvalidate( settings, row, src, column );
		} );
	} );
	
	
	
	_api_register( 'cell()', function ( rowSelector, columnSelector, opts ) {
		return _selector_first( this.cells( rowSelector, columnSelector, opts ) );
	} );
	
	
	_api_register( 'cell().data()', function ( data ) {
		var ctx = this.context;
		var cell = this[0];
	
		if ( data === undefined ) {
			// Get
			return ctx.length && cell.length ?
				_fnGetCellData( ctx[0], cell[0].row, cell[0].column ) :
				undefined;
		}
	
		// Set
		_fnSetCellData( ctx[0], cell[0].row, cell[0].column, data );
		_fnInvalidate( ctx[0], cell[0].row, 'data', cell[0].column );
	
		return this;
	} );
	
	
	
	/**
	 * Get current ordering (sorting) that has been applied to the table.
	 *
	 * @returns {array} 2D array containing the sorting information for the first
	 *   table in the current context. Each element in the parent array represents
	 *   a column being sorted upon (i.e. multi-sorting with two columns would have
	 *   2 inner arrays). The inner arrays may have 2 or 3 elements. The first is
	 *   the column index that the sorting condition applies to, the second is the
	 *   direction of the sort (`desc` or `asc`) and, optionally, the third is the
	 *   index of the sorting order from the `column.sorting` initialisation array.
	 *//**
	 * Set the ordering for the table.
	 *
	 * @param {integer} order Column index to sort upon.
	 * @param {string} direction Direction of the sort to be applied (`asc` or `desc`)
	 * @returns {DataTables.Api} this
	 *//**
	 * Set the ordering for the table.
	 *
	 * @param {array} order 1D array of sorting information to be applied.
	 * @param {array} [...] Optional additional sorting conditions
	 * @returns {DataTables.Api} this
	 *//**
	 * Set the ordering for the table.
	 *
	 * @param {array} order 2D array of sorting information to be applied.
	 * @returns {DataTables.Api} this
	 */
	_api_register( 'order()', function ( order, dir ) {
		var ctx = this.context;
	
		if ( order === undefined ) {
			// get
			return ctx.length !== 0 ?
				ctx[0].aaSorting :
				undefined;
		}
	
		// set
		if ( typeof order === 'number' ) {
			// Simple column / direction passed in
			order = [ [ order, dir ] ];
		}
		else if ( order.length && ! $.isArray( order[0] ) ) {
			// Arguments passed in (list of 1D arrays)
			order = Array.prototype.slice.call( arguments );
		}
		// otherwise a 2D array was passed in
	
		return this.iterator( 'table', function ( settings ) {
			settings.aaSorting = order.slice();
		} );
	} );
	
	
	/**
	 * Attach a sort listener to an element for a given column
	 *
	 * @param {node|jQuery|string} node Identifier for the element(s) to attach the
	 *   listener to. This can take the form of a single DOM node, a jQuery
	 *   collection of nodes or a jQuery selector which will identify the node(s).
	 * @param {integer} column the column that a click on this node will sort on
	 * @param {function} [callback] callback function when sort is run
	 * @returns {DataTables.Api} this
	 */
	_api_register( 'order.listener()', function ( node, column, callback ) {
		return this.iterator( 'table', function ( settings ) {
			_fnSortAttachListener( settings, node, column, callback );
		} );
	} );
	
	
	_api_register( 'order.fixed()', function ( set ) {
		if ( ! set ) {
			var ctx = this.context;
			var fixed = ctx.length ?
				ctx[0].aaSortingFixed :
				undefined;
	
			return $.isArray( fixed ) ?
				{ pre: fixed } :
				fixed;
		}
	
		return this.iterator( 'table', function ( settings ) {
			settings.aaSortingFixed = $.extend( true, {}, set );
		} );
	} );
	
	
	// Order by the selected column(s)
	_api_register( [
		'columns().order()',
		'column().order()'
	], function ( dir ) {
		var that = this;
	
		return this.iterator( 'table', function ( settings, i ) {
			var sort = [];
	
			$.each( that[i], function (j, col) {
				sort.push( [ col, dir ] );
			} );
	
			settings.aaSorting = sort;
		} );
	} );
	
	
	
	_api_register( 'search()', function ( input, regex, smart, caseInsen ) {
		var ctx = this.context;
	
		if ( input === undefined ) {
			// get
			return ctx.length !== 0 ?
				ctx[0].oPreviousSearch.sSearch :
				undefined;
		}
	
		// set
		return this.iterator( 'table', function ( settings ) {
			if ( ! settings.oFeatures.bFilter ) {
				return;
			}
	
			_fnFilterComplete( settings, $.extend( {}, settings.oPreviousSearch, {
				"sSearch": input+"",
				"bRegex":  regex === null ? false : regex,
				"bSmart":  smart === null ? true  : smart,
				"bCaseInsensitive": caseInsen === null ? true : caseInsen
			} ), 1 );
		} );
	} );
	
	
	_api_registerPlural(
		'columns().search()',
		'column().search()',
		function ( input, regex, smart, caseInsen ) {
			return this.iterator( 'column', function ( settings, column ) {
				var preSearch = settings.aoPreSearchCols;
	
				if ( input === undefined ) {
					// get
					return preSearch[ column ].sSearch;
				}
	
				// set
				if ( ! settings.oFeatures.bFilter ) {
					return;
				}
	
				$.extend( preSearch[ column ], {
					"sSearch": input+"",
					"bRegex":  regex === null ? false : regex,
					"bSmart":  smart === null ? true  : smart,
					"bCaseInsensitive": caseInsen === null ? true : caseInsen
				} );
	
				_fnFilterComplete( settings, settings.oPreviousSearch, 1 );
			} );
		}
	);
	
	/*
	 * State API methods
	 */
	
	_api_register( 'state()', function () {
		return this.context.length ?
			this.context[0].oSavedState :
			null;
	} );
	
	
	_api_register( 'state.clear()', function () {
		return this.iterator( 'table', function ( settings ) {
			// Save an empty object
			settings.fnStateSaveCallback.call( settings.oInstance, settings, {} );
		} );
	} );
	
	
	_api_register( 'state.loaded()', function () {
		return this.context.length ?
			this.context[0].oLoadedState :
			null;
	} );
	
	
	_api_register( 'state.save()', function () {
		return this.iterator( 'table', function ( settings ) {
			_fnSaveState( settings );
		} );
	} );
	
	
	
	/**
	 * Provide a common method for plug-ins to check the version of DataTables being
	 * used, in order to ensure compatibility.
	 *
	 *  @param {string} version Version string to check for, in the format "X.Y.Z".
	 *    Note that the formats "X" and "X.Y" are also acceptable.
	 *  @returns {boolean} true if this version of DataTables is greater or equal to
	 *    the required version, or false if this version of DataTales is not
	 *    suitable
	 *  @static
	 *  @dtopt API-Static
	 *
	 *  @example
	 *    alert( $.fn.dataTable.versionCheck( '1.9.0' ) );
	 */
	DataTable.versionCheck = DataTable.fnVersionCheck = function( version )
	{
		var aThis = DataTable.version.split('.');
		var aThat = version.split('.');
		var iThis, iThat;
	
		for ( var i=0, iLen=aThat.length ; i<iLen ; i++ ) {
			iThis = parseInt( aThis[i], 10 ) || 0;
			iThat = parseInt( aThat[i], 10 ) || 0;
	
			// Parts are the same, keep comparing
			if (iThis === iThat) {
				continue;
			}
	
			// Parts are different, return immediately
			return iThis > iThat;
		}
	
		return true;
	};
	
	
	/**
	 * Check if a `<table>` node is a DataTable table already or not.
	 *
	 *  @param {node|jquery|string} table Table node, jQuery object or jQuery
	 *      selector for the table to test. Note that if more than more than one
	 *      table is passed on, only the first will be checked
	 *  @returns {boolean} true the table given is a DataTable, or false otherwise
	 *  @static
	 *  @dtopt API-Static
	 *
	 *  @example
	 *    if ( ! $.fn.DataTable.isDataTable( '#example' ) ) {
	 *      $('#example').dataTable();
	 *    }
	 */
	DataTable.isDataTable = DataTable.fnIsDataTable = function ( table )
	{
		var t = $(table).get(0);
		var is = false;
	
		if ( table instanceof DataTable.Api ) {
			return true;
		}
	
		$.each( DataTable.settings, function (i, o) {
			var head = o.nScrollHead ? $('table', o.nScrollHead)[0] : null;
			var foot = o.nScrollFoot ? $('table', o.nScrollFoot)[0] : null;
	
			if ( o.nTable === t || head === t || foot === t ) {
				is = true;
			}
		} );
	
		return is;
	};
	
	
	/**
	 * Get all DataTable tables that have been initialised - optionally you can
	 * select to get only currently visible tables.
	 *
	 *  @param {boolean} [visible=false] Flag to indicate if you want all (default)
	 *    or visible tables only.
	 *  @returns {array} Array of `table` nodes (not DataTable instances) which are
	 *    DataTables
	 *  @static
	 *  @dtopt API-Static
	 *
	 *  @example
	 *    $.each( $.fn.dataTable.tables(true), function () {
	 *      $(table).DataTable().columns.adjust();
	 *    } );
	 */
	DataTable.tables = DataTable.fnTables = function ( visible )
	{
		var api = false;
	
		if ( $.isPlainObject( visible ) ) {
			api = visible.api;
			visible = visible.visible;
		}
	
		var a = $.map( DataTable.settings, function (o) {
			if ( !visible || (visible && $(o.nTable).is(':visible')) ) {
				return o.nTable;
			}
		} );
	
		return api ?
			new _Api( a ) :
			a;
	};
	
	
	/**
	 * Convert from camel case parameters to Hungarian notation. This is made public
	 * for the extensions to provide the same ability as DataTables core to accept
	 * either the 1.9 style Hungarian notation, or the 1.10+ style camelCase
	 * parameters.
	 *
	 *  @param {object} src The model object which holds all parameters that can be
	 *    mapped.
	 *  @param {object} user The object to convert from camel case to Hungarian.
	 *  @param {boolean} force When set to `true`, properties which already have a
	 *    Hungarian value in the `user` object will be overwritten. Otherwise they
	 *    won't be.
	 */
	DataTable.camelToHungarian = _fnCamelToHungarian;
	
	
	
	/**
	 *
	 */
	_api_register( '$()', function ( selector, opts ) {
		var
			rows   = this.rows( opts ).nodes(), // Get all rows
			jqRows = $(rows);
	
		return $( [].concat(
			jqRows.filter( selector ).toArray(),
			jqRows.find( selector ).toArray()
		) );
	} );
	
	
	// jQuery functions to operate on the tables
	$.each( [ 'on', 'one', 'off' ], function (i, key) {
		_api_register( key+'()', function ( /* event, handler */ ) {
			var args = Array.prototype.slice.call(arguments);
	
			// Add the `dt` namespace automatically if it isn't already present
			args[0] = $.map( args[0].split( /\s/ ), function ( e ) {
				return ! e.match(/\.dt\b/) ?
					e+'.dt' :
					e;
				} ).join( ' ' );
	
			var inst = $( this.tables().nodes() );
			inst[key].apply( inst, args );
			return this;
		} );
	} );
	
	
	_api_register( 'clear()', function () {
		return this.iterator( 'table', function ( settings ) {
			_fnClearTable( settings );
		} );
	} );
	
	
	_api_register( 'settings()', function () {
		return new _Api( this.context, this.context );
	} );
	
	
	_api_register( 'init()', function () {
		var ctx = this.context;
		return ctx.length ? ctx[0].oInit : null;
	} );
	
	
	_api_register( 'data()', function () {
		return this.iterator( 'table', function ( settings ) {
			return _pluck( settings.aoData, '_aData' );
		} ).flatten();
	} );
	
	
	_api_register( 'destroy()', function ( remove ) {
		remove = remove || false;
	
		return this.iterator( 'table', function ( settings ) {
			var orig      = settings.nTableWrapper.parentNode;
			var classes   = settings.oClasses;
			var table     = settings.nTable;
			var tbody     = settings.nTBody;
			var thead     = settings.nTHead;
			var tfoot     = settings.nTFoot;
			var jqTable   = $(table);
			var jqTbody   = $(tbody);
			var jqWrapper = $(settings.nTableWrapper);
			var rows      = $.map( settings.aoData, function (r) { return r.nTr; } );
			var i, ien;
	
			// Flag to note that the table is currently being destroyed - no action
			// should be taken
			settings.bDestroying = true;
	
			// Fire off the destroy callbacks for plug-ins etc
			_fnCallbackFire( settings, "aoDestroyCallback", "destroy", [settings] );
	
			// If not being removed from the document, make all columns visible
			if ( ! remove ) {
				new _Api( settings ).columns().visible( true );
			}
	
			// Blitz all `DT` namespaced events (these are internal events, the
			// lowercase, `dt` events are user subscribed and they are responsible
			// for removing them
			jqWrapper.off('.DT').find(':not(tbody *)').off('.DT');
			$(window).off('.DT-'+settings.sInstance);
	
			// When scrolling we had to break the table up - restore it
			if ( table != thead.parentNode ) {
				jqTable.children('thead').detach();
				jqTable.append( thead );
			}
	
			if ( tfoot && table != tfoot.parentNode ) {
				jqTable.children('tfoot').detach();
				jqTable.append( tfoot );
			}
	
			settings.aaSorting = [];
			settings.aaSortingFixed = [];
			_fnSortingClasses( settings );
	
			$( rows ).removeClass( settings.asStripeClasses.join(' ') );
	
			$('th, td', thead).removeClass( classes.sSortable+' '+
				classes.sSortableAsc+' '+classes.sSortableDesc+' '+classes.sSortableNone
			);
	
			// Add the TR elements back into the table in their original order
			jqTbody.children().detach();
			jqTbody.append( rows );
	
			// Remove the DataTables generated nodes, events and classes
			var removedMethod = remove ? 'remove' : 'detach';
			jqTable[ removedMethod ]();
			jqWrapper[ removedMethod ]();
	
			// If we need to reattach the table to the document
			if ( ! remove && orig ) {
				// insertBefore acts like appendChild if !arg[1]
				orig.insertBefore( table, settings.nTableReinsertBefore );
	
				// Restore the width of the original table - was read from the style property,
				// so we can restore directly to that
				jqTable
					.css( 'width', settings.sDestroyWidth )
					.removeClass( classes.sTable );
	
				// If the were originally stripe classes - then we add them back here.
				// Note this is not fool proof (for example if not all rows had stripe
				// classes - but it's a good effort without getting carried away
				ien = settings.asDestroyStripes.length;
	
				if ( ien ) {
					jqTbody.children().each( function (i) {
						$(this).addClass( settings.asDestroyStripes[i % ien] );
					} );
				}
			}
	
			/* Remove the settings object from the settings array */
			var idx = $.inArray( settings, DataTable.settings );
			if ( idx !== -1 ) {
				DataTable.settings.splice( idx, 1 );
			}
		} );
	} );
	
	
	// Add the `every()` method for rows, columns and cells in a compact form
	$.each( [ 'column', 'row', 'cell' ], function ( i, type ) {
		_api_register( type+'s().every()', function ( fn ) {
			var opts = this.selector.opts;
			var api = this;
	
			return this.iterator( type, function ( settings, arg1, arg2, arg3, arg4 ) {
				// Rows and columns:
				//  arg1 - index
				//  arg2 - table counter
				//  arg3 - loop counter
				//  arg4 - undefined
				// Cells:
				//  arg1 - row index
				//  arg2 - column index
				//  arg3 - table counter
				//  arg4 - loop counter
				fn.call(
					api[ type ](
						arg1,
						type==='cell' ? arg2 : opts,
						type==='cell' ? opts : undefined
					),
					arg1, arg2, arg3, arg4
				);
			} );
		} );
	} );
	
	
	// i18n method for extensions to be able to use the language object from the
	// DataTable
	_api_register( 'i18n()', function ( token, def, plural ) {
		var ctx = this.context[0];
		var resolved = _fnGetObjectDataFn( token )( ctx.oLanguage );
	
		if ( resolved === undefined ) {
			resolved = def;
		}
	
		if ( plural !== undefined && $.isPlainObject( resolved ) ) {
			resolved = resolved[ plural ] !== undefined ?
				resolved[ plural ] :
				resolved._;
		}
	
		return resolved.replace( '%d', plural ); // nb: plural might be undefined,
	} );
	/**
	 * Version string for plug-ins to check compatibility. Allowed format is
	 * `a.b.c-d` where: a:int, b:int, c:int, d:string(dev|beta|alpha). `d` is used
	 * only for non-release builds. See http://semver.org/ for more information.
	 *  @member
	 *  @type string
	 *  @default Version number
	 */
	DataTable.version = "1.10.16";

	/**
	 * Private data store, containing all of the settings objects that are
	 * created for the tables on a given page.
	 *
	 * Note that the `DataTable.settings` object is aliased to
	 * `jQuery.fn.dataTableExt` through which it may be accessed and
	 * manipulated, or `jQuery.fn.dataTable.settings`.
	 *  @member
	 *  @type array
	 *  @default []
	 *  @private
	 */
	DataTable.settings = [];

	/**
	 * Object models container, for the various models that DataTables has
	 * available to it. These models define the objects that are used to hold
	 * the active state and configuration of the table.
	 *  @namespace
	 */
	DataTable.models = {};
	
	
	
	/**
	 * Template object for the way in which DataTables holds information about
	 * search information for the global filter and individual column filters.
	 *  @namespace
	 */
	DataTable.models.oSearch = {
		/**
		 * Flag to indicate if the filtering should be case insensitive or not
		 *  @type boolean
		 *  @default true
		 */
		"bCaseInsensitive": true,
	
		/**
		 * Applied search term
		 *  @type string
		 *  @default <i>Empty string</i>
		 */
		"sSearch": "",
	
		/**
		 * Flag to indicate if the search term should be interpreted as a
		 * regular expression (true) or not (false) and therefore and special
		 * regex characters escaped.
		 *  @type boolean
		 *  @default false
		 */
		"bRegex": false,
	
		/**
		 * Flag to indicate if DataTables is to use its smart filtering or not.
		 *  @type boolean
		 *  @default true
		 */
		"bSmart": true
	};
	
	
	
	
	/**
	 * Template object for the way in which DataTables holds information about
	 * each individual row. This is the object format used for the settings
	 * aoData array.
	 *  @namespace
	 */
	DataTable.models.oRow = {
		/**
		 * TR element for the row
		 *  @type node
		 *  @default null
		 */
		"nTr": null,
	
		/**
		 * Array of TD elements for each row. This is null until the row has been
		 * created.
		 *  @type array nodes
		 *  @default []
		 */
		"anCells": null,
	
		/**
		 * Data object from the original data source for the row. This is either
		 * an array if using the traditional form of DataTables, or an object if
		 * using mData options. The exact type will depend on the passed in
		 * data from the data source, or will be an array if using DOM a data
		 * source.
		 *  @type array|object
		 *  @default []
		 */
		"_aData": [],
	
		/**
		 * Sorting data cache - this array is ostensibly the same length as the
		 * number of columns (although each index is generated only as it is
		 * needed), and holds the data that is used for sorting each column in the
		 * row. We do this cache generation at the start of the sort in order that
		 * the formatting of the sort data need be done only once for each cell
		 * per sort. This array should not be read from or written to by anything
		 * other than the master sorting methods.
		 *  @type array
		 *  @default null
		 *  @private
		 */
		"_aSortData": null,
	
		/**
		 * Per cell filtering data cache. As per the sort data cache, used to
		 * increase the performance of the filtering in DataTables
		 *  @type array
		 *  @default null
		 *  @private
		 */
		"_aFilterData": null,
	
		/**
		 * Filtering data cache. This is the same as the cell filtering cache, but
		 * in this case a string rather than an array. This is easily computed with
		 * a join on `_aFilterData`, but is provided as a cache so the join isn't
		 * needed on every search (memory traded for performance)
		 *  @type array
		 *  @default null
		 *  @private
		 */
		"_sFilterRow": null,
	
		/**
		 * Cache of the class name that DataTables has applied to the row, so we
		 * can quickly look at this variable rather than needing to do a DOM check
		 * on className for the nTr property.
		 *  @type string
		 *  @default <i>Empty string</i>
		 *  @private
		 */
		"_sRowStripe": "",
	
		/**
		 * Denote if the original data source was from the DOM, or the data source
		 * object. This is used for invalidating data, so DataTables can
		 * automatically read data from the original source, unless uninstructed
		 * otherwise.
		 *  @type string
		 *  @default null
		 *  @private
		 */
		"src": null,
	
		/**
		 * Index in the aoData array. This saves an indexOf lookup when we have the
		 * object, but want to know the index
		 *  @type integer
		 *  @default -1
		 *  @private
		 */
		"idx": -1
	};
	
	
	/**
	 * Template object for the column information object in DataTables. This object
	 * is held in the settings aoColumns array and contains all the information that
	 * DataTables needs about each individual column.
	 *
	 * Note that this object is related to {@link DataTable.defaults.column}
	 * but this one is the internal data store for DataTables's cache of columns.
	 * It should NOT be manipulated outside of DataTables. Any configuration should
	 * be done through the initialisation options.
	 *  @namespace
	 */
	DataTable.models.oColumn = {
		/**
		 * Column index. This could be worked out on-the-fly with $.inArray, but it
		 * is faster to just hold it as a variable
		 *  @type integer
		 *  @default null
		 */
		"idx": null,
	
		/**
		 * A list of the columns that sorting should occur on when this column
		 * is sorted. That this property is an array allows multi-column sorting
		 * to be defined for a column (for example first name / last name columns
		 * would benefit from this). The values are integers pointing to the
		 * columns to be sorted on (typically it will be a single integer pointing
		 * at itself, but that doesn't need to be the case).
		 *  @type array
		 */
		"aDataSort": null,
	
		/**
		 * Define the sorting directions that are applied to the column, in sequence
		 * as the column is repeatedly sorted upon - i.e. the first value is used
		 * as the sorting direction when the column if first sorted (clicked on).
		 * Sort it again (click again) and it will move on to the next index.
		 * Repeat until loop.
		 *  @type array
		 */
		"asSorting": null,
	
		/**
		 * Flag to indicate if the column is searchable, and thus should be included
		 * in the filtering or not.
		 *  @type boolean
		 */
		"bSearchable": null,
	
		/**
		 * Flag to indicate if the column is sortable or not.
		 *  @type boolean
		 */
		"bSortable": null,
	
		/**
		 * Flag to indicate if the column is currently visible in the table or not
		 *  @type boolean
		 */
		"bVisible": null,
	
		/**
		 * Store for manual type assignment using the `column.type` option. This
		 * is held in store so we can manipulate the column's `sType` property.
		 *  @type string
		 *  @default null
		 *  @private
		 */
		"_sManualType": null,
	
		/**
		 * Flag to indicate if HTML5 data attributes should be used as the data
		 * source for filtering or sorting. True is either are.
		 *  @type boolean
		 *  @default false
		 *  @private
		 */
		"_bAttrSrc": false,
	
		/**
		 * Developer definable function that is called whenever a cell is created (Ajax source,
		 * etc) or processed for input (DOM source). This can be used as a compliment to mRender
		 * allowing you to modify the DOM element (add background colour for example) when the
		 * element is available.
		 *  @type function
		 *  @param {element} nTd The TD node that has been created
		 *  @param {*} sData The Data for the cell
		 *  @param {array|object} oData The data for the whole row
		 *  @param {int} iRow The row index for the aoData data store
		 *  @default null
		 */
		"fnCreatedCell": null,
	
		/**
		 * Function to get data from a cell in a column. You should <b>never</b>
		 * access data directly through _aData internally in DataTables - always use
		 * the method attached to this property. It allows mData to function as
		 * required. This function is automatically assigned by the column
		 * initialisation method
		 *  @type function
		 *  @param {array|object} oData The data array/object for the array
		 *    (i.e. aoData[]._aData)
		 *  @param {string} sSpecific The specific data type you want to get -
		 *    'display', 'type' 'filter' 'sort'
		 *  @returns {*} The data for the cell from the given row's data
		 *  @default null
		 */
		"fnGetData": null,
	
		/**
		 * Function to set data for a cell in the column. You should <b>never</b>
		 * set the data directly to _aData internally in DataTables - always use
		 * this method. It allows mData to function as required. This function
		 * is automatically assigned by the column initialisation method
		 *  @type function
		 *  @param {array|object} oData The data array/object for the array
		 *    (i.e. aoData[]._aData)
		 *  @param {*} sValue Value to set
		 *  @default null
		 */
		"fnSetData": null,
	
		/**
		 * Property to read the value for the cells in the column from the data
		 * source array / object. If null, then the default content is used, if a
		 * function is given then the return from the function is used.
		 *  @type function|int|string|null
		 *  @default null
		 */
		"mData": null,
	
		/**
		 * Partner property to mData which is used (only when defined) to get
		 * the data - i.e. it is basically the same as mData, but without the
		 * 'set' option, and also the data fed to it is the result from mData.
		 * This is the rendering method to match the data method of mData.
		 *  @type function|int|string|null
		 *  @default null
		 */
		"mRender": null,
	
		/**
		 * Unique header TH/TD element for this column - this is what the sorting
		 * listener is attached to (if sorting is enabled.)
		 *  @type node
		 *  @default null
		 */
		"nTh": null,
	
		/**
		 * Unique footer TH/TD element for this column (if there is one). Not used
		 * in DataTables as such, but can be used for plug-ins to reference the
		 * footer for each column.
		 *  @type node
		 *  @default null
		 */
		"nTf": null,
	
		/**
		 * The class to apply to all TD elements in the table's TBODY for the column
		 *  @type string
		 *  @default null
		 */
		"sClass": null,
	
		/**
		 * When DataTables calculates the column widths to assign to each column,
		 * it finds the longest string in each column and then constructs a
		 * temporary table and reads the widths from that. The problem with this
		 * is that "mmm" is much wider then "iiii", but the latter is a longer
		 * string - thus the calculation can go wrong (doing it properly and putting
		 * it into an DOM object and measuring that is horribly(!) slow). Thus as
		 * a "work around" we provide this option. It will append its value to the
		 * text that is found to be the longest string for the column - i.e. padding.
		 *  @type string
		 */
		"sContentPadding": null,
	
		/**
		 * Allows a default value to be given for a column's data, and will be used
		 * whenever a null data source is encountered (this can be because mData
		 * is set to null, or because the data source itself is null).
		 *  @type string
		 *  @default null
		 */
		"sDefaultContent": null,
	
		/**
		 * Name for the column, allowing reference to the column by name as well as
		 * by index (needs a lookup to work by name).
		 *  @type string
		 */
		"sName": null,
	
		/**
		 * Custom sorting data type - defines which of the available plug-ins in
		 * afnSortData the custom sorting will use - if any is defined.
		 *  @type string
		 *  @default std
		 */
		"sSortDataType": 'std',
	
		/**
		 * Class to be applied to the header element when sorting on this column
		 *  @type string
		 *  @default null
		 */
		"sSortingClass": null,
	
		/**
		 * Class to be applied to the header element when sorting on this column -
		 * when jQuery UI theming is used.
		 *  @type string
		 *  @default null
		 */
		"sSortingClassJUI": null,
	
		/**
		 * Title of the column - what is seen in the TH element (nTh).
		 *  @type string
		 */
		"sTitle": null,
	
		/**
		 * Column sorting and filtering type
		 *  @type string
		 *  @default null
		 */
		"sType": null,
	
		/**
		 * Width of the column
		 *  @type string
		 *  @default null
		 */
		"sWidth": null,
	
		/**
		 * Width of the column when it was first "encountered"
		 *  @type string
		 *  @default null
		 */
		"sWidthOrig": null
	};
	
	
	/*
	 * Developer note: The properties of the object below are given in Hungarian
	 * notation, that was used as the interface for DataTables prior to v1.10, however
	 * from v1.10 onwards the primary interface is camel case. In order to avoid
	 * breaking backwards compatibility utterly with this change, the Hungarian
	 * version is still, internally the primary interface, but is is not documented
	 * - hence the @name tags in each doc comment. This allows a Javascript function
	 * to create a map from Hungarian notation to camel case (going the other direction
	 * would require each property to be listed, which would at around 3K to the size
	 * of DataTables, while this method is about a 0.5K hit.
	 *
	 * Ultimately this does pave the way for Hungarian notation to be dropped
	 * completely, but that is a massive amount of work and will break current
	 * installs (therefore is on-hold until v2).
	 */
	
	/**
	 * Initialisation options that can be given to DataTables at initialisation
	 * time.
	 *  @namespace
	 */
	DataTable.defaults = {
		/**
		 * An array of data to use for the table, passed in at initialisation which
		 * will be used in preference to any data which is already in the DOM. This is
		 * particularly useful for constructing tables purely in Javascript, for
		 * example with a custom Ajax call.
		 *  @type array
		 *  @default null
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.data
		 *
		 *  @example
		 *    // Using a 2D array data source
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "data": [
		 *          ['Trident', 'Internet Explorer 4.0', 'Win 95+', 4, 'X'],
		 *          ['Trident', 'Internet Explorer 5.0', 'Win 95+', 5, 'C'],
		 *        ],
		 *        "columns": [
		 *          { "title": "Engine" },
		 *          { "title": "Browser" },
		 *          { "title": "Platform" },
		 *          { "title": "Version" },
		 *          { "title": "Grade" }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using an array of objects as a data source (`data`)
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "data": [
		 *          {
		 *            "engine":   "Trident",
		 *            "browser":  "Internet Explorer 4.0",
		 *            "platform": "Win 95+",
		 *            "version":  4,
		 *            "grade":    "X"
		 *          },
		 *          {
		 *            "engine":   "Trident",
		 *            "browser":  "Internet Explorer 5.0",
		 *            "platform": "Win 95+",
		 *            "version":  5,
		 *            "grade":    "C"
		 *          }
		 *        ],
		 *        "columns": [
		 *          { "title": "Engine",   "data": "engine" },
		 *          { "title": "Browser",  "data": "browser" },
		 *          { "title": "Platform", "data": "platform" },
		 *          { "title": "Version",  "data": "version" },
		 *          { "title": "Grade",    "data": "grade" }
		 *        ]
		 *      } );
		 *    } );
		 */
		"aaData": null,
	
	
		/**
		 * If ordering is enabled, then DataTables will perform a first pass sort on
		 * initialisation. You can define which column(s) the sort is performed
		 * upon, and the sorting direction, with this variable. The `sorting` array
		 * should contain an array for each column to be sorted initially containing
		 * the column's index and a direction string ('asc' or 'desc').
		 *  @type array
		 *  @default [[0,'asc']]
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.order
		 *
		 *  @example
		 *    // Sort by 3rd column first, and then 4th column
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "order": [[2,'asc'], [3,'desc']]
		 *      } );
		 *    } );
		 *
		 *    // No initial sorting
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "order": []
		 *      } );
		 *    } );
		 */
		"aaSorting": [[0,'asc']],
	
	
		/**
		 * This parameter is basically identical to the `sorting` parameter, but
		 * cannot be overridden by user interaction with the table. What this means
		 * is that you could have a column (visible or hidden) which the sorting
		 * will always be forced on first - any sorting after that (from the user)
		 * will then be performed as required. This can be useful for grouping rows
		 * together.
		 *  @type array
		 *  @default null
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.orderFixed
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "orderFixed": [[0,'asc']]
		 *      } );
		 *    } )
		 */
		"aaSortingFixed": [],
	
	
		/**
		 * DataTables can be instructed to load data to display in the table from a
		 * Ajax source. This option defines how that Ajax call is made and where to.
		 *
		 * The `ajax` property has three different modes of operation, depending on
		 * how it is defined. These are:
		 *
		 * * `string` - Set the URL from where the data should be loaded from.
		 * * `object` - Define properties for `jQuery.ajax`.
		 * * `function` - Custom data get function
		 *
		 * `string`
		 * --------
		 *
		 * As a string, the `ajax` property simply defines the URL from which
		 * DataTables will load data.
		 *
		 * `object`
		 * --------
		 *
		 * As an object, the parameters in the object are passed to
		 * [jQuery.ajax](http://api.jquery.com/jQuery.ajax/) allowing fine control
		 * of the Ajax request. DataTables has a number of default parameters which
		 * you can override using this option. Please refer to the jQuery
		 * documentation for a full description of the options available, although
		 * the following parameters provide additional options in DataTables or
		 * require special consideration:
		 *
		 * * `data` - As with jQuery, `data` can be provided as an object, but it
		 *   can also be used as a function to manipulate the data DataTables sends
		 *   to the server. The function takes a single parameter, an object of
		 *   parameters with the values that DataTables has readied for sending. An
		 *   object may be returned which will be merged into the DataTables
		 *   defaults, or you can add the items to the object that was passed in and
		 *   not return anything from the function. This supersedes `fnServerParams`
		 *   from DataTables 1.9-.
		 *
		 * * `dataSrc` - By default DataTables will look for the property `data` (or
		 *   `aaData` for compatibility with DataTables 1.9-) when obtaining data
		 *   from an Ajax source or for server-side processing - this parameter
		 *   allows that property to be changed. You can use Javascript dotted
		 *   object notation to get a data source for multiple levels of nesting, or
		 *   it my be used as a function. As a function it takes a single parameter,
		 *   the JSON returned from the server, which can be manipulated as
		 *   required, with the returned value being that used by DataTables as the
		 *   data source for the table. This supersedes `sAjaxDataProp` from
		 *   DataTables 1.9-.
		 *
		 * * `success` - Should not be overridden it is used internally in
		 *   DataTables. To manipulate / transform the data returned by the server
		 *   use `ajax.dataSrc`, or use `ajax` as a function (see below).
		 *
		 * `function`
		 * ----------
		 *
		 * As a function, making the Ajax call is left up to yourself allowing
		 * complete control of the Ajax request. Indeed, if desired, a method other
		 * than Ajax could be used to obtain the required data, such as Web storage
		 * or an AIR database.
		 *
		 * The function is given four parameters and no return is required. The
		 * parameters are:
		 *
		 * 1. _object_ - Data to send to the server
		 * 2. _function_ - Callback function that must be executed when the required
		 *    data has been obtained. That data should be passed into the callback
		 *    as the only parameter
		 * 3. _object_ - DataTables settings object for the table
		 *
		 * Note that this supersedes `fnServerData` from DataTables 1.9-.
		 *
		 *  @type string|object|function
		 *  @default null
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.ajax
		 *  @since 1.10.0
		 *
		 * @example
		 *   // Get JSON data from a file via Ajax.
		 *   // Note DataTables expects data in the form `{ data: [ ...data... ] }` by default).
		 *   $('#example').dataTable( {
		 *     "ajax": "data.json"
		 *   } );
		 *
		 * @example
		 *   // Get JSON data from a file via Ajax, using `dataSrc` to change
		 *   // `data` to `tableData` (i.e. `{ tableData: [ ...data... ] }`)
		 *   $('#example').dataTable( {
		 *     "ajax": {
		 *       "url": "data.json",
		 *       "dataSrc": "tableData"
		 *     }
		 *   } );
		 *
		 * @example
		 *   // Get JSON data from a file via Ajax, using `dataSrc` to read data
		 *   // from a plain array rather than an array in an object
		 *   $('#example').dataTable( {
		 *     "ajax": {
		 *       "url": "data.json",
		 *       "dataSrc": ""
		 *     }
		 *   } );
		 *
		 * @example
		 *   // Manipulate the data returned from the server - add a link to data
		 *   // (note this can, should, be done using `render` for the column - this
		 *   // is just a simple example of how the data can be manipulated).
		 *   $('#example').dataTable( {
		 *     "ajax": {
		 *       "url": "data.json",
		 *       "dataSrc": function ( json ) {
		 *         for ( var i=0, ien=json.length ; i<ien ; i++ ) {
		 *           json[i][0] = '<a href="/message/'+json[i][0]+'>View message</a>';
		 *         }
		 *         return json;
		 *       }
		 *     }
		 *   } );
		 *
		 * @example
		 *   // Add data to the request
		 *   $('#example').dataTable( {
		 *     "ajax": {
		 *       "url": "data.json",
		 *       "data": function ( d ) {
		 *         return {
		 *           "extra_search": $('#extra').val()
		 *         };
		 *       }
		 *     }
		 *   } );
		 *
		 * @example
		 *   // Send request as POST
		 *   $('#example').dataTable( {
		 *     "ajax": {
		 *       "url": "data.json",
		 *       "type": "POST"
		 *     }
		 *   } );
		 *
		 * @example
		 *   // Get the data from localStorage (could interface with a form for
		 *   // adding, editing and removing rows).
		 *   $('#example').dataTable( {
		 *     "ajax": function (data, callback, settings) {
		 *       callback(
		 *         JSON.parse( localStorage.getItem('dataTablesData') )
		 *       );
		 *     }
		 *   } );
		 */
		"ajax": null,
	
	
		/**
		 * This parameter allows you to readily specify the entries in the length drop
		 * down menu that DataTables shows when pagination is enabled. It can be
		 * either a 1D array of options which will be used for both the displayed
		 * option and the value, or a 2D array which will use the array in the first
		 * position as the value, and the array in the second position as the
		 * displayed options (useful for language strings such as 'All').
		 *
		 * Note that the `pageLength` property will be automatically set to the
		 * first value given in this array, unless `pageLength` is also provided.
		 *  @type array
		 *  @default [ 10, 25, 50, 100 ]
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.lengthMenu
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]]
		 *      } );
		 *    } );
		 */
		"aLengthMenu": [ 10, 25, 50, 100 ],
	
	
		/**
		 * The `columns` option in the initialisation parameter allows you to define
		 * details about the way individual columns behave. For a full list of
		 * column options that can be set, please see
		 * {@link DataTable.defaults.column}. Note that if you use `columns` to
		 * define your columns, you must have an entry in the array for every single
		 * column that you have in your table (these can be null if you don't which
		 * to specify any options).
		 *  @member
		 *
		 *  @name DataTable.defaults.column
		 */
		"aoColumns": null,
	
		/**
		 * Very similar to `columns`, `columnDefs` allows you to target a specific
		 * column, multiple columns, or all columns, using the `targets` property of
		 * each object in the array. This allows great flexibility when creating
		 * tables, as the `columnDefs` arrays can be of any length, targeting the
		 * columns you specifically want. `columnDefs` may use any of the column
		 * options available: {@link DataTable.defaults.column}, but it _must_
		 * have `targets` defined in each object in the array. Values in the `targets`
		 * array may be:
		 *   <ul>
		 *     <li>a string - class name will be matched on the TH for the column</li>
		 *     <li>0 or a positive integer - column index counting from the left</li>
		 *     <li>a negative integer - column index counting from the right</li>
		 *     <li>the string "_all" - all columns (i.e. assign a default)</li>
		 *   </ul>
		 *  @member
		 *
		 *  @name DataTable.defaults.columnDefs
		 */
		"aoColumnDefs": null,
	
	
		/**
		 * Basically the same as `search`, this parameter defines the individual column
		 * filtering state at initialisation time. The array must be of the same size
		 * as the number of columns, and each element be an object with the parameters
		 * `search` and `escapeRegex` (the latter is optional). 'null' is also
		 * accepted and the default will be used.
		 *  @type array
		 *  @default []
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.searchCols
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "searchCols": [
		 *          null,
		 *          { "search": "My filter" },
		 *          null,
		 *          { "search": "^[0-9]", "escapeRegex": false }
		 *        ]
		 *      } );
		 *    } )
		 */
		"aoSearchCols": [],
	
	
		/**
		 * An array of CSS classes that should be applied to displayed rows. This
		 * array may be of any length, and DataTables will apply each class
		 * sequentially, looping when required.
		 *  @type array
		 *  @default null <i>Will take the values determined by the `oClasses.stripe*`
		 *    options</i>
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.stripeClasses
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stripeClasses": [ 'strip1', 'strip2', 'strip3' ]
		 *      } );
		 *    } )
		 */
		"asStripeClasses": null,
	
	
		/**
		 * Enable or disable automatic column width calculation. This can be disabled
		 * as an optimisation (it takes some time to calculate the widths) if the
		 * tables widths are passed in using `columns`.
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.autoWidth
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "autoWidth": false
		 *      } );
		 *    } );
		 */
		"bAutoWidth": true,
	
	
		/**
		 * Deferred rendering can provide DataTables with a huge speed boost when you
		 * are using an Ajax or JS data source for the table. This option, when set to
		 * true, will cause DataTables to defer the creation of the table elements for
		 * each row until they are needed for a draw - saving a significant amount of
		 * time.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.deferRender
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "ajax": "sources/arrays.txt",
		 *        "deferRender": true
		 *      } );
		 *    } );
		 */
		"bDeferRender": false,
	
	
		/**
		 * Replace a DataTable which matches the given selector and replace it with
		 * one which has the properties of the new initialisation object passed. If no
		 * table matches the selector, then the new DataTable will be constructed as
		 * per normal.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.destroy
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "srollY": "200px",
		 *        "paginate": false
		 *      } );
		 *
		 *      // Some time later....
		 *      $('#example').dataTable( {
		 *        "filter": false,
		 *        "destroy": true
		 *      } );
		 *    } );
		 */
		"bDestroy": false,
	
	
		/**
		 * Enable or disable filtering of data. Filtering in DataTables is "smart" in
		 * that it allows the end user to input multiple words (space separated) and
		 * will match a row containing those words, even if not in the order that was
		 * specified (this allow matching across multiple columns). Note that if you
		 * wish to use filtering in DataTables this must remain 'true' - to remove the
		 * default filtering input box and retain filtering abilities, please use
		 * {@link DataTable.defaults.dom}.
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.searching
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "searching": false
		 *      } );
		 *    } );
		 */
		"bFilter": true,
	
	
		/**
		 * Enable or disable the table information display. This shows information
		 * about the data that is currently visible on the page, including information
		 * about filtered data if that action is being performed.
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.info
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "info": false
		 *      } );
		 *    } );
		 */
		"bInfo": true,
	
	
		/**
		 * Allows the end user to select the size of a formatted page from a select
		 * menu (sizes are 10, 25, 50 and 100). Requires pagination (`paginate`).
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.lengthChange
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "lengthChange": false
		 *      } );
		 *    } );
		 */
		"bLengthChange": true,
	
	
		/**
		 * Enable or disable pagination.
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.paging
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "paging": false
		 *      } );
		 *    } );
		 */
		"bPaginate": true,
	
	
		/**
		 * Enable or disable the display of a 'processing' indicator when the table is
		 * being processed (e.g. a sort). This is particularly useful for tables with
		 * large amounts of data where it can take a noticeable amount of time to sort
		 * the entries.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.processing
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "processing": true
		 *      } );
		 *    } );
		 */
		"bProcessing": false,
	
	
		/**
		 * Retrieve the DataTables object for the given selector. Note that if the
		 * table has already been initialised, this parameter will cause DataTables
		 * to simply return the object that has already been set up - it will not take
		 * account of any changes you might have made to the initialisation object
		 * passed to DataTables (setting this parameter to true is an acknowledgement
		 * that you understand this). `destroy` can be used to reinitialise a table if
		 * you need.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.retrieve
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      initTable();
		 *      tableActions();
		 *    } );
		 *
		 *    function initTable ()
		 *    {
		 *      return $('#example').dataTable( {
		 *        "scrollY": "200px",
		 *        "paginate": false,
		 *        "retrieve": true
		 *      } );
		 *    }
		 *
		 *    function tableActions ()
		 *    {
		 *      var table = initTable();
		 *      // perform API operations with oTable
		 *    }
		 */
		"bRetrieve": false,
	
	
		/**
		 * When vertical (y) scrolling is enabled, DataTables will force the height of
		 * the table's viewport to the given height at all times (useful for layout).
		 * However, this can look odd when filtering data down to a small data set,
		 * and the footer is left "floating" further down. This parameter (when
		 * enabled) will cause DataTables to collapse the table's viewport down when
		 * the result set will fit within the given Y height.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.scrollCollapse
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "scrollY": "200",
		 *        "scrollCollapse": true
		 *      } );
		 *    } );
		 */
		"bScrollCollapse": false,
	
	
		/**
		 * Configure DataTables to use server-side processing. Note that the
		 * `ajax` parameter must also be given in order to give DataTables a
		 * source to obtain the required data for each draw.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Features
		 *  @dtopt Server-side
		 *  @name DataTable.defaults.serverSide
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "serverSide": true,
		 *        "ajax": "xhr.php"
		 *      } );
		 *    } );
		 */
		"bServerSide": false,
	
	
		/**
		 * Enable or disable sorting of columns. Sorting of individual columns can be
		 * disabled by the `sortable` option for each column.
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.ordering
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "ordering": false
		 *      } );
		 *    } );
		 */
		"bSort": true,
	
	
		/**
		 * Enable or display DataTables' ability to sort multiple columns at the
		 * same time (activated by shift-click by the user).
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.orderMulti
		 *
		 *  @example
		 *    // Disable multiple column sorting ability
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "orderMulti": false
		 *      } );
		 *    } );
		 */
		"bSortMulti": true,
	
	
		/**
		 * Allows control over whether DataTables should use the top (true) unique
		 * cell that is found for a single column, or the bottom (false - default).
		 * This is useful when using complex headers.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.orderCellsTop
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "orderCellsTop": true
		 *      } );
		 *    } );
		 */
		"bSortCellsTop": false,
	
	
		/**
		 * Enable or disable the addition of the classes `sorting\_1`, `sorting\_2` and
		 * `sorting\_3` to the columns which are currently being sorted on. This is
		 * presented as a feature switch as it can increase processing time (while
		 * classes are removed and added) so for large data sets you might want to
		 * turn this off.
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.orderClasses
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "orderClasses": false
		 *      } );
		 *    } );
		 */
		"bSortClasses": true,
	
	
		/**
		 * Enable or disable state saving. When enabled HTML5 `localStorage` will be
		 * used to save table display information such as pagination information,
		 * display length, filtering and sorting. As such when the end user reloads
		 * the page the display display will match what thy had previously set up.
		 *
		 * Due to the use of `localStorage` the default state saving is not supported
		 * in IE6 or 7. If state saving is required in those browsers, use
		 * `stateSaveCallback` to provide a storage solution such as cookies.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.stateSave
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "stateSave": true
		 *      } );
		 *    } );
		 */
		"bStateSave": false,
	
	
		/**
		 * This function is called when a TR element is created (and all TD child
		 * elements have been inserted), or registered if using a DOM source, allowing
		 * manipulation of the TR element (adding classes etc).
		 *  @type function
		 *  @param {node} row "TR" element for the current row
		 *  @param {array} data Raw data array for this row
		 *  @param {int} dataIndex The index of this row in the internal aoData array
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.createdRow
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "createdRow": function( row, data, dataIndex ) {
		 *          // Bold the grade for all 'A' grade browsers
		 *          if ( data[4] == "A" )
		 *          {
		 *            $('td:eq(4)', row).html( '<b>A</b>' );
		 *          }
		 *        }
		 *      } );
		 *    } );
		 */
		"fnCreatedRow": null,
	
	
		/**
		 * This function is called on every 'draw' event, and allows you to
		 * dynamically modify any aspect you want about the created DOM.
		 *  @type function
		 *  @param {object} settings DataTables settings object
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.drawCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "drawCallback": function( settings ) {
		 *          alert( 'DataTables has redrawn the table' );
		 *        }
		 *      } );
		 *    } );
		 */
		"fnDrawCallback": null,
	
	
		/**
		 * Identical to fnHeaderCallback() but for the table footer this function
		 * allows you to modify the table footer on every 'draw' event.
		 *  @type function
		 *  @param {node} foot "TR" element for the footer
		 *  @param {array} data Full table data (as derived from the original HTML)
		 *  @param {int} start Index for the current display starting point in the
		 *    display array
		 *  @param {int} end Index for the current display ending point in the
		 *    display array
		 *  @param {array int} display Index array to translate the visual position
		 *    to the full data array
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.footerCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "footerCallback": function( tfoot, data, start, end, display ) {
		 *          tfoot.getElementsByTagName('th')[0].innerHTML = "Starting index is "+start;
		 *        }
		 *      } );
		 *    } )
		 */
		"fnFooterCallback": null,
	
	
		/**
		 * When rendering large numbers in the information element for the table
		 * (i.e. "Showing 1 to 10 of 57 entries") DataTables will render large numbers
		 * to have a comma separator for the 'thousands' units (e.g. 1 million is
		 * rendered as "1,000,000") to help readability for the end user. This
		 * function will override the default method DataTables uses.
		 *  @type function
		 *  @member
		 *  @param {int} toFormat number to be formatted
		 *  @returns {string} formatted string for DataTables to show the number
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.formatNumber
		 *
		 *  @example
		 *    // Format a number using a single quote for the separator (note that
		 *    // this can also be done with the language.thousands option)
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "formatNumber": function ( toFormat ) {
		 *          return toFormat.toString().replace(
		 *            /\B(?=(\d{3})+(?!\d))/g, "'"
		 *          );
		 *        };
		 *      } );
		 *    } );
		 */
		"fnFormatNumber": function ( toFormat ) {
			return toFormat.toString().replace(
				/\B(?=(\d{3})+(?!\d))/g,
				this.oLanguage.sThousands
			);
		},
	
	
		/**
		 * This function is called on every 'draw' event, and allows you to
		 * dynamically modify the header row. This can be used to calculate and
		 * display useful information about the table.
		 *  @type function
		 *  @param {node} head "TR" element for the header
		 *  @param {array} data Full table data (as derived from the original HTML)
		 *  @param {int} start Index for the current display starting point in the
		 *    display array
		 *  @param {int} end Index for the current display ending point in the
		 *    display array
		 *  @param {array int} display Index array to translate the visual position
		 *    to the full data array
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.headerCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "fheaderCallback": function( head, data, start, end, display ) {
		 *          head.getElementsByTagName('th')[0].innerHTML = "Displaying "+(end-start)+" records";
		 *        }
		 *      } );
		 *    } )
		 */
		"fnHeaderCallback": null,
	
	
		/**
		 * The information element can be used to convey information about the current
		 * state of the table. Although the internationalisation options presented by
		 * DataTables are quite capable of dealing with most customisations, there may
		 * be times where you wish to customise the string further. This callback
		 * allows you to do exactly that.
		 *  @type function
		 *  @param {object} oSettings DataTables settings object
		 *  @param {int} start Starting position in data for the draw
		 *  @param {int} end End position in data for the draw
		 *  @param {int} max Total number of rows in the table (regardless of
		 *    filtering)
		 *  @param {int} total Total number of rows in the data set, after filtering
		 *  @param {string} pre The string that DataTables has formatted using it's
		 *    own rules
		 *  @returns {string} The string to be displayed in the information element.
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.infoCallback
		 *
		 *  @example
		 *    $('#example').dataTable( {
		 *      "infoCallback": function( settings, start, end, max, total, pre ) {
		 *        return start +" to "+ end;
		 *      }
		 *    } );
		 */
		"fnInfoCallback": null,
	
	
		/**
		 * Called when the table has been initialised. Normally DataTables will
		 * initialise sequentially and there will be no need for this function,
		 * however, this does not hold true when using external language information
		 * since that is obtained using an async XHR call.
		 *  @type function
		 *  @param {object} settings DataTables settings object
		 *  @param {object} json The JSON object request from the server - only
		 *    present if client-side Ajax sourced data is used
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.initComplete
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "initComplete": function(settings, json) {
		 *          alert( 'DataTables has finished its initialisation.' );
		 *        }
		 *      } );
		 *    } )
		 */
		"fnInitComplete": null,
	
	
		/**
		 * Called at the very start of each table draw and can be used to cancel the
		 * draw by returning false, any other return (including undefined) results in
		 * the full draw occurring).
		 *  @type function
		 *  @param {object} settings DataTables settings object
		 *  @returns {boolean} False will cancel the draw, anything else (including no
		 *    return) will allow it to complete.
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.preDrawCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "preDrawCallback": function( settings ) {
		 *          if ( $('#test').val() == 1 ) {
		 *            return false;
		 *          }
		 *        }
		 *      } );
		 *    } );
		 */
		"fnPreDrawCallback": null,
	
	
		/**
		 * This function allows you to 'post process' each row after it have been
		 * generated for each table draw, but before it is rendered on screen. This
		 * function might be used for setting the row class name etc.
		 *  @type function
		 *  @param {node} row "TR" element for the current row
		 *  @param {array} data Raw data array for this row
		 *  @param {int} displayIndex The display index for the current table draw
		 *  @param {int} displayIndexFull The index of the data in the full list of
		 *    rows (after filtering)
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.rowCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "rowCallback": function( row, data, displayIndex, displayIndexFull ) {
		 *          // Bold the grade for all 'A' grade browsers
		 *          if ( data[4] == "A" ) {
		 *            $('td:eq(4)', row).html( '<b>A</b>' );
		 *          }
		 *        }
		 *      } );
		 *    } );
		 */
		"fnRowCallback": null,
	
	
		/**
		 * __Deprecated__ The functionality provided by this parameter has now been
		 * superseded by that provided through `ajax`, which should be used instead.
		 *
		 * This parameter allows you to override the default function which obtains
		 * the data from the server so something more suitable for your application.
		 * For example you could use POST data, or pull information from a Gears or
		 * AIR database.
		 *  @type function
		 *  @member
		 *  @param {string} source HTTP source to obtain the data from (`ajax`)
		 *  @param {array} data A key/value pair object containing the data to send
		 *    to the server
		 *  @param {function} callback to be called on completion of the data get
		 *    process that will draw the data on the page.
		 *  @param {object} settings DataTables settings object
		 *
		 *  @dtopt Callbacks
		 *  @dtopt Server-side
		 *  @name DataTable.defaults.serverData
		 *
		 *  @deprecated 1.10. Please use `ajax` for this functionality now.
		 */
		"fnServerData": null,
	
	
		/**
		 * __Deprecated__ The functionality provided by this parameter has now been
		 * superseded by that provided through `ajax`, which should be used instead.
		 *
		 *  It is often useful to send extra data to the server when making an Ajax
		 * request - for example custom filtering information, and this callback
		 * function makes it trivial to send extra information to the server. The
		 * passed in parameter is the data set that has been constructed by
		 * DataTables, and you can add to this or modify it as you require.
		 *  @type function
		 *  @param {array} data Data array (array of objects which are name/value
		 *    pairs) that has been constructed by DataTables and will be sent to the
		 *    server. In the case of Ajax sourced data with server-side processing
		 *    this will be an empty array, for server-side processing there will be a
		 *    significant number of parameters!
		 *  @returns {undefined} Ensure that you modify the data array passed in,
		 *    as this is passed by reference.
		 *
		 *  @dtopt Callbacks
		 *  @dtopt Server-side
		 *  @name DataTable.defaults.serverParams
		 *
		 *  @deprecated 1.10. Please use `ajax` for this functionality now.
		 */
		"fnServerParams": null,
	
	
		/**
		 * Load the table state. With this function you can define from where, and how, the
		 * state of a table is loaded. By default DataTables will load from `localStorage`
		 * but you might wish to use a server-side database or cookies.
		 *  @type function
		 *  @member
		 *  @param {object} settings DataTables settings object
		 *  @param {object} callback Callback that can be executed when done. It
		 *    should be passed the loaded state object.
		 *  @return {object} The DataTables state object to be loaded
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.stateLoadCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateLoadCallback": function (settings, callback) {
		 *          $.ajax( {
		 *            "url": "/state_load",
		 *            "dataType": "json",
		 *            "success": function (json) {
		 *              callback( json );
		 *            }
		 *          } );
		 *        }
		 *      } );
		 *    } );
		 */
		"fnStateLoadCallback": function ( settings ) {
			try {
				return JSON.parse(
					(settings.iStateDuration === -1 ? sessionStorage : localStorage).getItem(
						'DataTables_'+settings.sInstance+'_'+location.pathname
					)
				);
			} catch (e) {}
		},
	
	
		/**
		 * Callback which allows modification of the saved state prior to loading that state.
		 * This callback is called when the table is loading state from the stored data, but
		 * prior to the settings object being modified by the saved state. Note that for
		 * plug-in authors, you should use the `stateLoadParams` event to load parameters for
		 * a plug-in.
		 *  @type function
		 *  @param {object} settings DataTables settings object
		 *  @param {object} data The state object that is to be loaded
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.stateLoadParams
		 *
		 *  @example
		 *    // Remove a saved filter, so filtering is never loaded
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateLoadParams": function (settings, data) {
		 *          data.oSearch.sSearch = "";
		 *        }
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Disallow state loading by returning false
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateLoadParams": function (settings, data) {
		 *          return false;
		 *        }
		 *      } );
		 *    } );
		 */
		"fnStateLoadParams": null,
	
	
		/**
		 * Callback that is called when the state has been loaded from the state saving method
		 * and the DataTables settings object has been modified as a result of the loaded state.
		 *  @type function
		 *  @param {object} settings DataTables settings object
		 *  @param {object} data The state object that was loaded
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.stateLoaded
		 *
		 *  @example
		 *    // Show an alert with the filtering value that was saved
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateLoaded": function (settings, data) {
		 *          alert( 'Saved filter was: '+data.oSearch.sSearch );
		 *        }
		 *      } );
		 *    } );
		 */
		"fnStateLoaded": null,
	
	
		/**
		 * Save the table state. This function allows you to define where and how the state
		 * information for the table is stored By default DataTables will use `localStorage`
		 * but you might wish to use a server-side database or cookies.
		 *  @type function
		 *  @member
		 *  @param {object} settings DataTables settings object
		 *  @param {object} data The state object to be saved
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.stateSaveCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateSaveCallback": function (settings, data) {
		 *          // Send an Ajax request to the server with the state object
		 *          $.ajax( {
		 *            "url": "/state_save",
		 *            "data": data,
		 *            "dataType": "json",
		 *            "method": "POST"
		 *            "success": function () {}
		 *          } );
		 *        }
		 *      } );
		 *    } );
		 */
		"fnStateSaveCallback": function ( settings, data ) {
			try {
				(settings.iStateDuration === -1 ? sessionStorage : localStorage).setItem(
					'DataTables_'+settings.sInstance+'_'+location.pathname,
					JSON.stringify( data )
				);
			} catch (e) {}
		},
	
	
		/**
		 * Callback which allows modification of the state to be saved. Called when the table
		 * has changed state a new state save is required. This method allows modification of
		 * the state saving object prior to actually doing the save, including addition or
		 * other state properties or modification. Note that for plug-in authors, you should
		 * use the `stateSaveParams` event to save parameters for a plug-in.
		 *  @type function
		 *  @param {object} settings DataTables settings object
		 *  @param {object} data The state object to be saved
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.stateSaveParams
		 *
		 *  @example
		 *    // Remove a saved filter, so filtering is never saved
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateSaveParams": function (settings, data) {
		 *          data.oSearch.sSearch = "";
		 *        }
		 *      } );
		 *    } );
		 */
		"fnStateSaveParams": null,
	
	
		/**
		 * Duration for which the saved state information is considered valid. After this period
		 * has elapsed the state will be returned to the default.
		 * Value is given in seconds.
		 *  @type int
		 *  @default 7200 <i>(2 hours)</i>
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.stateDuration
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateDuration": 60*60*24; // 1 day
		 *      } );
		 *    } )
		 */
		"iStateDuration": 7200,
	
	
		/**
		 * When enabled DataTables will not make a request to the server for the first
		 * page draw - rather it will use the data already on the page (no sorting etc
		 * will be applied to it), thus saving on an XHR at load time. `deferLoading`
		 * is used to indicate that deferred loading is required, but it is also used
		 * to tell DataTables how many records there are in the full table (allowing
		 * the information element and pagination to be displayed correctly). In the case
		 * where a filtering is applied to the table on initial load, this can be
		 * indicated by giving the parameter as an array, where the first element is
		 * the number of records available after filtering and the second element is the
		 * number of records without filtering (allowing the table information element
		 * to be shown correctly).
		 *  @type int | array
		 *  @default null
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.deferLoading
		 *
		 *  @example
		 *    // 57 records available in the table, no filtering applied
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "serverSide": true,
		 *        "ajax": "scripts/server_processing.php",
		 *        "deferLoading": 57
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // 57 records after filtering, 100 without filtering (an initial filter applied)
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "serverSide": true,
		 *        "ajax": "scripts/server_processing.php",
		 *        "deferLoading": [ 57, 100 ],
		 *        "search": {
		 *          "search": "my_filter"
		 *        }
		 *      } );
		 *    } );
		 */
		"iDeferLoading": null,
	
	
		/**
		 * Number of rows to display on a single page when using pagination. If
		 * feature enabled (`lengthChange`) then the end user will be able to override
		 * this to a custom setting using a pop-up menu.
		 *  @type int
		 *  @default 10
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.pageLength
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "pageLength": 50
		 *      } );
		 *    } )
		 */
		"iDisplayLength": 10,
	
	
		/**
		 * Define the starting point for data display when using DataTables with
		 * pagination. Note that this parameter is the number of records, rather than
		 * the page number, so if you have 10 records per page and want to start on
		 * the third page, it should be "20".
		 *  @type int
		 *  @default 0
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.displayStart
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "displayStart": 20
		 *      } );
		 *    } )
		 */
		"iDisplayStart": 0,
	
	
		/**
		 * By default DataTables allows keyboard navigation of the table (sorting, paging,
		 * and filtering) by adding a `tabindex` attribute to the required elements. This
		 * allows you to tab through the controls and press the enter key to activate them.
		 * The tabindex is default 0, meaning that the tab follows the flow of the document.
		 * You can overrule this using this parameter if you wish. Use a value of -1 to
		 * disable built-in keyboard navigation.
		 *  @type int
		 *  @default 0
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.tabIndex
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "tabIndex": 1
		 *      } );
		 *    } );
		 */
		"iTabIndex": 0,
	
	
		/**
		 * Classes that DataTables assigns to the various components and features
		 * that it adds to the HTML table. This allows classes to be configured
		 * during initialisation in addition to through the static
		 * {@link DataTable.ext.oStdClasses} object).
		 *  @namespace
		 *  @name DataTable.defaults.classes
		 */
		"oClasses": {},
	
	
		/**
		 * All strings that DataTables uses in the user interface that it creates
		 * are defined in this object, allowing you to modified them individually or
		 * completely replace them all as required.
		 *  @namespace
		 *  @name DataTable.defaults.language
		 */
		"oLanguage": {
			/**
			 * Strings that are used for WAI-ARIA labels and controls only (these are not
			 * actually visible on the page, but will be read by screenreaders, and thus
			 * must be internationalised as well).
			 *  @namespace
			 *  @name DataTable.defaults.language.aria
			 */
			"oAria": {
				/**
				 * ARIA label that is added to the table headers when the column may be
				 * sorted ascending by activing the column (click or return when focused).
				 * Note that the column header is prefixed to this string.
				 *  @type string
				 *  @default : activate to sort column ascending
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.aria.sortAscending
				 *
				 *  @example
				 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "aria": {
				 *            "sortAscending": " - click/return to sort ascending"
				 *          }
				 *        }
				 *      } );
				 *    } );
				 */
				"sSortAscending": ": activate to sort column ascending",
	
				/**
				 * ARIA label that is added to the table headers when the column may be
				 * sorted descending by activing the column (click or return when focused).
				 * Note that the column header is prefixed to this string.
				 *  @type string
				 *  @default : activate to sort column ascending
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.aria.sortDescending
				 *
				 *  @example
				 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "aria": {
				 *            "sortDescending": " - click/return to sort descending"
				 *          }
				 *        }
				 *      } );
				 *    } );
				 */
				"sSortDescending": ": activate to sort column descending"
			},
	
			/**
			 * Pagination string used by DataTables for the built-in pagination
			 * control types.
			 *  @namespace
			 *  @name DataTable.defaults.language.paginate
			 */
			"oPaginate": {
				/**
				 * Text to use when using the 'full_numbers' type of pagination for the
				 * button to take the user to the first page.
				 *  @type string
				 *  @default First
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.paginate.first
				 *
				 *  @example
				 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "paginate": {
				 *            "first": "First page"
				 *          }
				 *        }
				 *      } );
				 *    } );
				 */
				"sFirst": "First",
	
	
				/**
				 * Text to use when using the 'full_numbers' type of pagination for the
				 * button to take the user to the last page.
				 *  @type string
				 *  @default Last
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.paginate.last
				 *
				 *  @example
				 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "paginate": {
				 *            "last": "Last page"
				 *          }
				 *        }
				 *      } );
				 *    } );
				 */
				"sLast": "Last",
	
	
				/**
				 * Text to use for the 'next' pagination button (to take the user to the
				 * next page).
				 *  @type string
				 *  @default Next
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.paginate.next
				 *
				 *  @example
				 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "paginate": {
				 *            "next": "Next page"
				 *          }
				 *        }
				 *      } );
				 *    } );
				 */
				"sNext": "Next",
	
	
				/**
				 * Text to use for the 'previous' pagination button (to take the user to
				 * the previous page).
				 *  @type string
				 *  @default Previous
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.paginate.previous
				 *
				 *  @example
				 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "paginate": {
				 *            "previous": "Previous page"
				 *          }
				 *        }
				 *      } );
				 *    } );
				 */
				"sPrevious": "Previous"
			},
	
			/**
			 * This string is shown in preference to `zeroRecords` when the table is
			 * empty of data (regardless of filtering). Note that this is an optional
			 * parameter - if it is not given, the value of `zeroRecords` will be used
			 * instead (either the default or given value).
			 *  @type string
			 *  @default No data available in table
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.emptyTable
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "emptyTable": "No data available in table"
			 *        }
			 *      } );
			 *    } );
			 */
			"sEmptyTable": "No data available in table",
	
	
			/**
			 * This string gives information to the end user about the information
			 * that is current on display on the page. The following tokens can be
			 * used in the string and will be dynamically replaced as the table
			 * display updates. This tokens can be placed anywhere in the string, or
			 * removed as needed by the language requires:
			 *
			 * * `\_START\_` - Display index of the first record on the current page
			 * * `\_END\_` - Display index of the last record on the current page
			 * * `\_TOTAL\_` - Number of records in the table after filtering
			 * * `\_MAX\_` - Number of records in the table without filtering
			 * * `\_PAGE\_` - Current page number
			 * * `\_PAGES\_` - Total number of pages of data in the table
			 *
			 *  @type string
			 *  @default Showing _START_ to _END_ of _TOTAL_ entries
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.info
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "info": "Showing page _PAGE_ of _PAGES_"
			 *        }
			 *      } );
			 *    } );
			 */
			"sInfo": "Showing _START_ to _END_ of _TOTAL_ entries",
	
	
			/**
			 * Display information string for when the table is empty. Typically the
			 * format of this string should match `info`.
			 *  @type string
			 *  @default Showing 0 to 0 of 0 entries
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.infoEmpty
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "infoEmpty": "No entries to show"
			 *        }
			 *      } );
			 *    } );
			 */
			"sInfoEmpty": "Showing 0 to 0 of 0 entries",
	
	
			/**
			 * When a user filters the information in a table, this string is appended
			 * to the information (`info`) to give an idea of how strong the filtering
			 * is. The variable _MAX_ is dynamically updated.
			 *  @type string
			 *  @default (filtered from _MAX_ total entries)
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.infoFiltered
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "infoFiltered": " - filtering from _MAX_ records"
			 *        }
			 *      } );
			 *    } );
			 */
			"sInfoFiltered": "(filtered from _MAX_ total entries)",
	
	
			/**
			 * If can be useful to append extra information to the info string at times,
			 * and this variable does exactly that. This information will be appended to
			 * the `info` (`infoEmpty` and `infoFiltered` in whatever combination they are
			 * being used) at all times.
			 *  @type string
			 *  @default <i>Empty string</i>
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.infoPostFix
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "infoPostFix": "All records shown are derived from real information."
			 *        }
			 *      } );
			 *    } );
			 */
			"sInfoPostFix": "",
	
	
			/**
			 * This decimal place operator is a little different from the other
			 * language options since DataTables doesn't output floating point
			 * numbers, so it won't ever use this for display of a number. Rather,
			 * what this parameter does is modify the sort methods of the table so
			 * that numbers which are in a format which has a character other than
			 * a period (`.`) as a decimal place will be sorted numerically.
			 *
			 * Note that numbers with different decimal places cannot be shown in
			 * the same table and still be sortable, the table must be consistent.
			 * However, multiple different tables on the page can use different
			 * decimal place characters.
			 *  @type string
			 *  @default 
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.decimal
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "decimal": ","
			 *          "thousands": "."
			 *        }
			 *      } );
			 *    } );
			 */
			"sDecimal": "",
	
	
			/**
			 * DataTables has a build in number formatter (`formatNumber`) which is
			 * used to format large numbers that are used in the table information.
			 * By default a comma is used, but this can be trivially changed to any
			 * character you wish with this parameter.
			 *  @type string
			 *  @default ,
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.thousands
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "thousands": "'"
			 *        }
			 *      } );
			 *    } );
			 */
			"sThousands": ",",
	
	
			/**
			 * Detail the action that will be taken when the drop down menu for the
			 * pagination length option is changed. The '_MENU_' variable is replaced
			 * with a default select list of 10, 25, 50 and 100, and can be replaced
			 * with a custom select box if required.
			 *  @type string
			 *  @default Show _MENU_ entries
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.lengthMenu
			 *
			 *  @example
			 *    // Language change only
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "lengthMenu": "Display _MENU_ records"
			 *        }
			 *      } );
			 *    } );
			 *
			 *  @example
			 *    // Language and options change
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "lengthMenu": 'Display <select>'+
			 *            '<option value="10">10</option>'+
			 *            '<option value="20">20</option>'+
			 *            '<option value="30">30</option>'+
			 *            '<option value="40">40</option>'+
			 *            '<option value="50">50</option>'+
			 *            '<option value="-1">All</option>'+
			 *            '</select> records'
			 *        }
			 *      } );
			 *    } );
			 */
			"sLengthMenu": "Show _MENU_ entries",
	
	
			/**
			 * When using Ajax sourced data and during the first draw when DataTables is
			 * gathering the data, this message is shown in an empty row in the table to
			 * indicate to the end user the the data is being loaded. Note that this
			 * parameter is not used when loading data by server-side processing, just
			 * Ajax sourced data with client-side processing.
			 *  @type string
			 *  @default Loading...
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.loadingRecords
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "loadingRecords": "Please wait - loading..."
			 *        }
			 *      } );
			 *    } );
			 */
			"sLoadingRecords": "Loading...",
	
	
			/**
			 * Text which is displayed when the table is processing a user action
			 * (usually a sort command or similar).
			 *  @type string
			 *  @default Processing...
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.processing
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "processing": "DataTables is currently busy"
			 *        }
			 *      } );
			 *    } );
			 */
			"sProcessing": "Processing...",
	
	
			/**
			 * Details the actions that will be taken when the user types into the
			 * filtering input text box. The variable "_INPUT_", if used in the string,
			 * is replaced with the HTML text box for the filtering input allowing
			 * control over where it appears in the string. If "_INPUT_" is not given
			 * then the input box is appended to the string automatically.
			 *  @type string
			 *  @default Search:
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.search
			 *
			 *  @example
			 *    // Input text box will be appended at the end automatically
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "search": "Filter records:"
			 *        }
			 *      } );
			 *    } );
			 *
			 *  @example
			 *    // Specify where the filter should appear
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "search": "Apply filter _INPUT_ to table"
			 *        }
			 *      } );
			 *    } );
			 */
			"sSearch": "Search:",
	
	
			/**
			 * Assign a `placeholder` attribute to the search `input` element
			 *  @type string
			 *  @default 
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.searchPlaceholder
			 */
			"sSearchPlaceholder": "",
	
	
			/**
			 * All of the language information can be stored in a file on the
			 * server-side, which DataTables will look up if this parameter is passed.
			 * It must store the URL of the language file, which is in a JSON format,
			 * and the object has the same properties as the oLanguage object in the
			 * initialiser object (i.e. the above parameters). Please refer to one of
			 * the example language files to see how this works in action.
			 *  @type string
			 *  @default <i>Empty string - i.e. disabled</i>
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.url
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "url": "http://www.sprymedia.co.uk/dataTables/lang.txt"
			 *        }
			 *      } );
			 *    } );
			 */
			"sUrl": "",
	
	
			/**
			 * Text shown inside the table records when the is no information to be
			 * displayed after filtering. `emptyTable` is shown when there is simply no
			 * information in the table at all (regardless of filtering).
			 *  @type string
			 *  @default No matching records found
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.zeroRecords
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "zeroRecords": "No records to display"
			 *        }
			 *      } );
			 *    } );
			 */
			"sZeroRecords": "No matching records found"
		},
	
	
		/**
		 * This parameter allows you to have define the global filtering state at
		 * initialisation time. As an object the `search` parameter must be
		 * defined, but all other parameters are optional. When `regex` is true,
		 * the search string will be treated as a regular expression, when false
		 * (default) it will be treated as a straight string. When `smart`
		 * DataTables will use it's smart filtering methods (to word match at
		 * any point in the data), when false this will not be done.
		 *  @namespace
		 *  @extends DataTable.models.oSearch
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.search
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "search": {"search": "Initial search"}
		 *      } );
		 *    } )
		 */
		"oSearch": $.extend( {}, DataTable.models.oSearch ),
	
	
		/**
		 * __Deprecated__ The functionality provided by this parameter has now been
		 * superseded by that provided through `ajax`, which should be used instead.
		 *
		 * By default DataTables will look for the property `data` (or `aaData` for
		 * compatibility with DataTables 1.9-) when obtaining data from an Ajax
		 * source or for server-side processing - this parameter allows that
		 * property to be changed. You can use Javascript dotted object notation to
		 * get a data source for multiple levels of nesting.
		 *  @type string
		 *  @default data
		 *
		 *  @dtopt Options
		 *  @dtopt Server-side
		 *  @name DataTable.defaults.ajaxDataProp
		 *
		 *  @deprecated 1.10. Please use `ajax` for this functionality now.
		 */
		"sAjaxDataProp": "data",
	
	
		/**
		 * __Deprecated__ The functionality provided by this parameter has now been
		 * superseded by that provided through `ajax`, which should be used instead.
		 *
		 * You can instruct DataTables to load data from an external
		 * source using this parameter (use aData if you want to pass data in you
		 * already have). Simply provide a url a JSON object can be obtained from.
		 *  @type string
		 *  @default null
		 *
		 *  @dtopt Options
		 *  @dtopt Server-side
		 *  @name DataTable.defaults.ajaxSource
		 *
		 *  @deprecated 1.10. Please use `ajax` for this functionality now.
		 */
		"sAjaxSource": null,
	
	
		/**
		 * This initialisation variable allows you to specify exactly where in the
		 * DOM you want DataTables to inject the various controls it adds to the page
		 * (for example you might want the pagination controls at the top of the
		 * table). DIV elements (with or without a custom class) can also be added to
		 * aid styling. The follow syntax is used:
		 *   <ul>
		 *     <li>The following options are allowed:
		 *       <ul>
		 *         <li>'l' - Length changing</li>
		 *         <li>'f' - Filtering input</li>
		 *         <li>'t' - The table!</li>
		 *         <li>'i' - Information</li>
		 *         <li>'p' - Pagination</li>
		 *         <li>'r' - pRocessing</li>
		 *       </ul>
		 *     </li>
		 *     <li>The following constants are allowed:
		 *       <ul>
		 *         <li>'H' - jQueryUI theme "header" classes ('fg-toolbar ui-widget-header ui-corner-tl ui-corner-tr ui-helper-clearfix')</li>
		 *         <li>'F' - jQueryUI theme "footer" classes ('fg-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix')</li>
		 *       </ul>
		 *     </li>
		 *     <li>The following syntax is expected:
		 *       <ul>
		 *         <li>'&lt;' and '&gt;' - div elements</li>
		 *         <li>'&lt;"class" and '&gt;' - div with a class</li>
		 *         <li>'&lt;"#id" and '&gt;' - div with an ID</li>
		 *       </ul>
		 *     </li>
		 *     <li>Examples:
		 *       <ul>
		 *         <li>'&lt;"wrapper"flipt&gt;'</li>
		 *         <li>'&lt;lf&lt;t&gt;ip&gt;'</li>
		 *       </ul>
		 *     </li>
		 *   </ul>
		 *  @type string
		 *  @default lfrtip <i>(when `jQueryUI` is false)</i> <b>or</b>
		 *    <"H"lfr>t<"F"ip> <i>(when `jQueryUI` is true)</i>
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.dom
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "dom": '&lt;"top"i&gt;rt&lt;"bottom"flp&gt;&lt;"clear"&gt;'
		 *      } );
		 *    } );
		 */
		"sDom": "lfrtip",
	
	
		/**
		 * Search delay option. This will throttle full table searches that use the
		 * DataTables provided search input element (it does not effect calls to
		 * `dt-api search()`, providing a delay before the search is made.
		 *  @type integer
		 *  @default 0
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.searchDelay
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "searchDelay": 200
		 *      } );
		 *    } )
		 */
		"searchDelay": null,
	
	
		/**
		 * DataTables features six different built-in options for the buttons to
		 * display for pagination control:
		 *
		 * * `numbers` - Page number buttons only
		 * * `simple` - 'Previous' and 'Next' buttons only
		 * * 'simple_numbers` - 'Previous' and 'Next' buttons, plus page numbers
		 * * `full` - 'First', 'Previous', 'Next' and 'Last' buttons
		 * * `full_numbers` - 'First', 'Previous', 'Next' and 'Last' buttons, plus page numbers
		 * * `first_last_numbers` - 'First' and 'Last' buttons, plus page numbers
		 *  
		 * Further methods can be added using {@link DataTable.ext.oPagination}.
		 *  @type string
		 *  @default simple_numbers
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.pagingType
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "pagingType": "full_numbers"
		 *      } );
		 *    } )
		 */
		"sPaginationType": "simple_numbers",
	
	
		/**
		 * Enable horizontal scrolling. When a table is too wide to fit into a
		 * certain layout, or you have a large number of columns in the table, you
		 * can enable x-scrolling to show the table in a viewport, which can be
		 * scrolled. This property can be `true` which will allow the table to
		 * scroll horizontally when needed, or any CSS unit, or a number (in which
		 * case it will be treated as a pixel measurement). Setting as simply `true`
		 * is recommended.
		 *  @type boolean|string
		 *  @default <i>blank string - i.e. disabled</i>
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.scrollX
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "scrollX": true,
		 *        "scrollCollapse": true
		 *      } );
		 *    } );
		 */
		"sScrollX": "",
	
	
		/**
		 * This property can be used to force a DataTable to use more width than it
		 * might otherwise do when x-scrolling is enabled. For example if you have a
		 * table which requires to be well spaced, this parameter is useful for
		 * "over-sizing" the table, and thus forcing scrolling. This property can by
		 * any CSS unit, or a number (in which case it will be treated as a pixel
		 * measurement).
		 *  @type string
		 *  @default <i>blank string - i.e. disabled</i>
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.scrollXInner
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "scrollX": "100%",
		 *        "scrollXInner": "110%"
		 *      } );
		 *    } );
		 */
		"sScrollXInner": "",
	
	
		/**
		 * Enable vertical scrolling. Vertical scrolling will constrain the DataTable
		 * to the given height, and enable scrolling for any data which overflows the
		 * current viewport. This can be used as an alternative to paging to display
		 * a lot of data in a small area (although paging and scrolling can both be
		 * enabled at the same time). This property can be any CSS unit, or a number
		 * (in which case it will be treated as a pixel measurement).
		 *  @type string
		 *  @default <i>blank string - i.e. disabled</i>
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.scrollY
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "scrollY": "200px",
		 *        "paginate": false
		 *      } );
		 *    } );
		 */
		"sScrollY": "",
	
	
		/**
		 * __Deprecated__ The functionality provided by this parameter has now been
		 * superseded by that provided through `ajax`, which should be used instead.
		 *
		 * Set the HTTP method that is used to make the Ajax call for server-side
		 * processing or Ajax sourced data.
		 *  @type string
		 *  @default GET
		 *
		 *  @dtopt Options
		 *  @dtopt Server-side
		 *  @name DataTable.defaults.serverMethod
		 *
		 *  @deprecated 1.10. Please use `ajax` for this functionality now.
		 */
		"sServerMethod": "GET",
	
	
		/**
		 * DataTables makes use of renderers when displaying HTML elements for
		 * a table. These renderers can be added or modified by plug-ins to
		 * generate suitable mark-up for a site. For example the Bootstrap
		 * integration plug-in for DataTables uses a paging button renderer to
		 * display pagination buttons in the mark-up required by Bootstrap.
		 *
		 * For further information about the renderers available see
		 * DataTable.ext.renderer
		 *  @type string|object
		 *  @default null
		 *
		 *  @name DataTable.defaults.renderer
		 *
		 */
		"renderer": null,
	
	
		/**
		 * Set the data property name that DataTables should use to get a row's id
		 * to set as the `id` property in the node.
		 *  @type string
		 *  @default DT_RowId
		 *
		 *  @name DataTable.defaults.rowId
		 */
		"rowId": "DT_RowId"
	};
	
	_fnHungarianMap( DataTable.defaults );
	
	
	
	/*
	 * Developer note - See note in model.defaults.js about the use of Hungarian
	 * notation and camel case.
	 */
	
	/**
	 * Column options that can be given to DataTables at initialisation time.
	 *  @namespace
	 */
	DataTable.defaults.column = {
		/**
		 * Define which column(s) an order will occur on for this column. This
		 * allows a column's ordering to take multiple columns into account when
		 * doing a sort or use the data from a different column. For example first
		 * name / last name columns make sense to do a multi-column sort over the
		 * two columns.
		 *  @type array|int
		 *  @default null <i>Takes the value of the column index automatically</i>
		 *
		 *  @name DataTable.defaults.column.orderData
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "orderData": [ 0, 1 ], "targets": [ 0 ] },
		 *          { "orderData": [ 1, 0 ], "targets": [ 1 ] },
		 *          { "orderData": 2, "targets": [ 2 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "orderData": [ 0, 1 ] },
		 *          { "orderData": [ 1, 0 ] },
		 *          { "orderData": 2 },
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
		 */
		"aDataSort": null,
		"iDataSort": -1,
	
	
		/**
		 * You can control the default ordering direction, and even alter the
		 * behaviour of the sort handler (i.e. only allow ascending ordering etc)
		 * using this parameter.
		 *  @type array
		 *  @default [ 'asc', 'desc' ]
		 *
		 *  @name DataTable.defaults.column.orderSequence
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "orderSequence": [ "asc" ], "targets": [ 1 ] },
		 *          { "orderSequence": [ "desc", "asc", "asc" ], "targets": [ 2 ] },
		 *          { "orderSequence": [ "desc" ], "targets": [ 3 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          null,
		 *          { "orderSequence": [ "asc" ] },
		 *          { "orderSequence": [ "desc", "asc", "asc" ] },
		 *          { "orderSequence": [ "desc" ] },
		 *          null
		 *        ]
		 *      } );
		 *    } );
		 */
		"asSorting": [ 'asc', 'desc' ],
	
	
		/**
		 * Enable or disable filtering on the data in this column.
		 *  @type boolean
		 *  @default true
		 *
		 *  @name DataTable.defaults.column.searchable
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "searchable": false, "targets": [ 0 ] }
		 *        ] } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "searchable": false },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ] } );
		 *    } );
		 */
		"bSearchable": true,
	
	
		/**
		 * Enable or disable ordering on this column.
		 *  @type boolean
		 *  @default true
		 *
		 *  @name DataTable.defaults.column.orderable
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "orderable": false, "targets": [ 0 ] }
		 *        ] } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "orderable": false },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ] } );
		 *    } );
		 */
		"bSortable": true,
	
	
		/**
		 * Enable or disable the display of this column.
		 *  @type boolean
		 *  @default true
		 *
		 *  @name DataTable.defaults.column.visible
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "visible": false, "targets": [ 0 ] }
		 *        ] } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "visible": false },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ] } );
		 *    } );
		 */
		"bVisible": true,
	
	
		/**
		 * Developer definable function that is called whenever a cell is created (Ajax source,
		 * etc) or processed for input (DOM source). This can be used as a compliment to mRender
		 * allowing you to modify the DOM element (add background colour for example) when the
		 * element is available.
		 *  @type function
		 *  @param {element} td The TD node that has been created
		 *  @param {*} cellData The Data for the cell
		 *  @param {array|object} rowData The data for the whole row
		 *  @param {int} row The row index for the aoData data store
		 *  @param {int} col The column index for aoColumns
		 *
		 *  @name DataTable.defaults.column.createdCell
		 *  @dtopt Columns
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [3],
		 *          "createdCell": function (td, cellData, rowData, row, col) {
		 *            if ( cellData == "1.7" ) {
		 *              $(td).css('color', 'blue')
		 *            }
		 *          }
		 *        } ]
		 *      });
		 *    } );
		 */
		"fnCreatedCell": null,
	
	
		/**
		 * This parameter has been replaced by `data` in DataTables to ensure naming
		 * consistency. `dataProp` can still be used, as there is backwards
		 * compatibility in DataTables for this option, but it is strongly
		 * recommended that you use `data` in preference to `dataProp`.
		 *  @name DataTable.defaults.column.dataProp
		 */
	
	
		/**
		 * This property can be used to read data from any data source property,
		 * including deeply nested objects / properties. `data` can be given in a
		 * number of different ways which effect its behaviour:
		 *
		 * * `integer` - treated as an array index for the data source. This is the
		 *   default that DataTables uses (incrementally increased for each column).
		 * * `string` - read an object property from the data source. There are
		 *   three 'special' options that can be used in the string to alter how
		 *   DataTables reads the data from the source object:
		 *    * `.` - Dotted Javascript notation. Just as you use a `.` in
		 *      Javascript to read from nested objects, so to can the options
		 *      specified in `data`. For example: `browser.version` or
		 *      `browser.name`. If your object parameter name contains a period, use
		 *      `\\` to escape it - i.e. `first\\.name`.
		 *    * `[]` - Array notation. DataTables can automatically combine data
		 *      from and array source, joining the data with the characters provided
		 *      between the two brackets. For example: `name[, ]` would provide a
		 *      comma-space separated list from the source array. If no characters
		 *      are provided between the brackets, the original array source is
		 *      returned.
		 *    * `()` - Function notation. Adding `()` to the end of a parameter will
		 *      execute a function of the name given. For example: `browser()` for a
		 *      simple function on the data source, `browser.version()` for a
		 *      function in a nested property or even `browser().version` to get an
		 *      object property if the function called returns an object. Note that
		 *      function notation is recommended for use in `render` rather than
		 *      `data` as it is much simpler to use as a renderer.
		 * * `null` - use the original data source for the row rather than plucking
		 *   data directly from it. This action has effects on two other
		 *   initialisation options:
		 *    * `defaultContent` - When null is given as the `data` option and
		 *      `defaultContent` is specified for the column, the value defined by
		 *      `defaultContent` will be used for the cell.
		 *    * `render` - When null is used for the `data` option and the `render`
		 *      option is specified for the column, the whole data source for the
		 *      row is used for the renderer.
		 * * `function` - the function given will be executed whenever DataTables
		 *   needs to set or get the data for a cell in the column. The function
		 *   takes three parameters:
		 *    * Parameters:
		 *      * `{array|object}` The data source for the row
		 *      * `{string}` The type call data requested - this will be 'set' when
		 *        setting data or 'filter', 'display', 'type', 'sort' or undefined
		 *        when gathering data. Note that when `undefined` is given for the
		 *        type DataTables expects to get the raw data for the object back<
		 *      * `{*}` Data to set when the second parameter is 'set'.
		 *    * Return:
		 *      * The return value from the function is not required when 'set' is
		 *        the type of call, but otherwise the return is what will be used
		 *        for the data requested.
		 *
		 * Note that `data` is a getter and setter option. If you just require
		 * formatting of data for output, you will likely want to use `render` which
		 * is simply a getter and thus simpler to use.
		 *
		 * Note that prior to DataTables 1.9.2 `data` was called `mDataProp`. The
		 * name change reflects the flexibility of this property and is consistent
		 * with the naming of mRender. If 'mDataProp' is given, then it will still
		 * be used by DataTables, as it automatically maps the old name to the new
		 * if required.
		 *
		 *  @type string|int|function|null
		 *  @default null <i>Use automatically calculated column index</i>
		 *
		 *  @name DataTable.defaults.column.data
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Read table data from objects
		 *    // JSON structure for each row:
		 *    //   {
		 *    //      "engine": {value},
		 *    //      "browser": {value},
		 *    //      "platform": {value},
		 *    //      "version": {value},
		 *    //      "grade": {value}
		 *    //   }
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "ajaxSource": "sources/objects.txt",
		 *        "columns": [
		 *          { "data": "engine" },
		 *          { "data": "browser" },
		 *          { "data": "platform" },
		 *          { "data": "version" },
		 *          { "data": "grade" }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Read information from deeply nested objects
		 *    // JSON structure for each row:
		 *    //   {
		 *    //      "engine": {value},
		 *    //      "browser": {value},
		 *    //      "platform": {
		 *    //         "inner": {value}
		 *    //      },
		 *    //      "details": [
		 *    //         {value}, {value}
		 *    //      ]
		 *    //   }
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "ajaxSource": "sources/deep.txt",
		 *        "columns": [
		 *          { "data": "engine" },
		 *          { "data": "browser" },
		 *          { "data": "platform.inner" },
		 *          { "data": "platform.details.0" },
		 *          { "data": "platform.details.1" }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `data` as a function to provide different information for
		 *    // sorting, filtering and display. In this case, currency (price)
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": function ( source, type, val ) {
		 *            if (type === 'set') {
		 *              source.price = val;
		 *              // Store the computed dislay and filter values for efficiency
		 *              source.price_display = val=="" ? "" : "$"+numberFormat(val);
		 *              source.price_filter  = val=="" ? "" : "$"+numberFormat(val)+" "+val;
		 *              return;
		 *            }
		 *            else if (type === 'display') {
		 *              return source.price_display;
		 *            }
		 *            else if (type === 'filter') {
		 *              return source.price_filter;
		 *            }
		 *            // 'sort', 'type' and undefined all just use the integer
		 *            return source.price;
		 *          }
		 *        } ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using default content
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": null,
		 *          "defaultContent": "Click to edit"
		 *        } ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using array notation - outputting a list from an array
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": "name[, ]"
		 *        } ]
		 *      } );
		 *    } );
		 *
		 */
		"mData": null,
	
	
		/**
		 * This property is the rendering partner to `data` and it is suggested that
		 * when you want to manipulate data for display (including filtering,
		 * sorting etc) without altering the underlying data for the table, use this
		 * property. `render` can be considered to be the the read only companion to
		 * `data` which is read / write (then as such more complex). Like `data`
		 * this option can be given in a number of different ways to effect its
		 * behaviour:
		 *
		 * * `integer` - treated as an array index for the data source. This is the
		 *   default that DataTables uses (incrementally increased for each column).
		 * * `string` - read an object property from the data source. There are
		 *   three 'special' options that can be used in the string to alter how
		 *   DataTables reads the data from the source object:
		 *    * `.` - Dotted Javascript notation. Just as you use a `.` in
		 *      Javascript to read from nested objects, so to can the options
		 *      specified in `data`. For example: `browser.version` or
		 *      `browser.name`. If your object parameter name contains a period, use
		 *      `\\` to escape it - i.e. `first\\.name`.
		 *    * `[]` - Array notation. DataTables can automatically combine data
		 *      from and array source, joining the data with the characters provided
		 *      between the two brackets. For example: `name[, ]` would provide a
		 *      comma-space separated list from the source array. If no characters
		 *      are provided between the brackets, the original array source is
		 *      returned.
		 *    * `()` - Function notation. Adding `()` to the end of a parameter will
		 *      execute a function of the name given. For example: `browser()` for a
		 *      simple function on the data source, `browser.version()` for a
		 *      function in a nested property or even `browser().version` to get an
		 *      object property if the function called returns an object.
		 * * `object` - use different data for the different data types requested by
		 *   DataTables ('filter', 'display', 'type' or 'sort'). The property names
		 *   of the object is the data type the property refers to and the value can
		 *   defined using an integer, string or function using the same rules as
		 *   `render` normally does. Note that an `_` option _must_ be specified.
		 *   This is the default value to use if you haven't specified a value for
		 *   the data type requested by DataTables.
		 * * `function` - the function given will be executed whenever DataTables
		 *   needs to set or get the data for a cell in the column. The function
		 *   takes three parameters:
		 *    * Parameters:
		 *      * {array|object} The data source for the row (based on `data`)
		 *      * {string} The type call data requested - this will be 'filter',
		 *        'display', 'type' or 'sort'.
		 *      * {array|object} The full data source for the row (not based on
		 *        `data`)
		 *    * Return:
		 *      * The return value from the function is what will be used for the
		 *        data requested.
		 *
		 *  @type string|int|function|object|null
		 *  @default null Use the data source value.
		 *
		 *  @name DataTable.defaults.column.render
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Create a comma separated list from an array of objects
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "ajaxSource": "sources/deep.txt",
		 *        "columns": [
		 *          { "data": "engine" },
		 *          { "data": "browser" },
		 *          {
		 *            "data": "platform",
		 *            "render": "[, ].name"
		 *          }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Execute a function to obtain data
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": null, // Use the full data source object for the renderer's source
		 *          "render": "browserName()"
		 *        } ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // As an object, extracting different data for the different types
		 *    // This would be used with a data source such as:
		 *    //   { "phone": 5552368, "phone_filter": "5552368 555-2368", "phone_display": "555-2368" }
		 *    // Here the `phone` integer is used for sorting and type detection, while `phone_filter`
		 *    // (which has both forms) is used for filtering for if a user inputs either format, while
		 *    // the formatted phone number is the one that is shown in the table.
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": null, // Use the full data source object for the renderer's source
		 *          "render": {
		 *            "_": "phone",
		 *            "filter": "phone_filter",
		 *            "display": "phone_display"
		 *          }
		 *        } ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Use as a function to create a link from the data source
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": "download_link",
		 *          "render": function ( data, type, full ) {
		 *            return '<a href="'+data+'">Download</a>';
		 *          }
		 *        } ]
		 *      } );
		 *    } );
		 */
		"mRender": null,
	
	
		/**
		 * Change the cell type created for the column - either TD cells or TH cells. This
		 * can be useful as TH cells have semantic meaning in the table body, allowing them
		 * to act as a header for a row (you may wish to add scope='row' to the TH elements).
		 *  @type string
		 *  @default td
		 *
		 *  @name DataTable.defaults.column.cellType
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Make the first column use TH cells
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "cellType": "th"
		 *        } ]
		 *      } );
		 *    } );
		 */
		"sCellType": "td",
	
	
		/**
		 * Class to give to each cell in this column.
		 *  @type string
		 *  @default <i>Empty string</i>
		 *
		 *  @name DataTable.defaults.column.class
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "class": "my_class", "targets": [ 0 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "class": "my_class" },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
		 */
		"sClass": "",
	
		/**
		 * When DataTables calculates the column widths to assign to each column,
		 * it finds the longest string in each column and then constructs a
		 * temporary table and reads the widths from that. The problem with this
		 * is that "mmm" is much wider then "iiii", but the latter is a longer
		 * string - thus the calculation can go wrong (doing it properly and putting
		 * it into an DOM object and measuring that is horribly(!) slow). Thus as
		 * a "work around" we provide this option. It will append its value to the
		 * text that is found to be the longest string for the column - i.e. padding.
		 * Generally you shouldn't need this!
		 *  @type string
		 *  @default <i>Empty string<i>
		 *
		 *  @name DataTable.defaults.column.contentPadding
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          null,
		 *          null,
		 *          null,
		 *          {
		 *            "contentPadding": "mmm"
		 *          }
		 *        ]
		 *      } );
		 *    } );
		 */
		"sContentPadding": "",
	
	
		/**
		 * Allows a default value to be given for a column's data, and will be used
		 * whenever a null data source is encountered (this can be because `data`
		 * is set to null, or because the data source itself is null).
		 *  @type string
		 *  @default null
		 *
		 *  @name DataTable.defaults.column.defaultContent
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          {
		 *            "data": null,
		 *            "defaultContent": "Edit",
		 *            "targets": [ -1 ]
		 *          }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          null,
		 *          null,
		 *          null,
		 *          {
		 *            "data": null,
		 *            "defaultContent": "Edit"
		 *          }
		 *        ]
		 *      } );
		 *    } );
		 */
		"sDefaultContent": null,
	
	
		/**
		 * This parameter is only used in DataTables' server-side processing. It can
		 * be exceptionally useful to know what columns are being displayed on the
		 * client side, and to map these to database fields. When defined, the names
		 * also allow DataTables to reorder information from the server if it comes
		 * back in an unexpected order (i.e. if you switch your columns around on the
		 * client-side, your server-side code does not also need updating).
		 *  @type string
		 *  @default <i>Empty string</i>
		 *
		 *  @name DataTable.defaults.column.name
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "name": "engine", "targets": [ 0 ] },
		 *          { "name": "browser", "targets": [ 1 ] },
		 *          { "name": "platform", "targets": [ 2 ] },
		 *          { "name": "version", "targets": [ 3 ] },
		 *          { "name": "grade", "targets": [ 4 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "name": "engine" },
		 *          { "name": "browser" },
		 *          { "name": "platform" },
		 *          { "name": "version" },
		 *          { "name": "grade" }
		 *        ]
		 *      } );
		 *    } );
		 */
		"sName": "",
	
	
		/**
		 * Defines a data source type for the ordering which can be used to read
		 * real-time information from the table (updating the internally cached
		 * version) prior to ordering. This allows ordering to occur on user
		 * editable elements such as form inputs.
		 *  @type string
		 *  @default std
		 *
		 *  @name DataTable.defaults.column.orderDataType
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "orderDataType": "dom-text", "targets": [ 2, 3 ] },
		 *          { "type": "numeric", "targets": [ 3 ] },
		 *          { "orderDataType": "dom-select", "targets": [ 4 ] },
		 *          { "orderDataType": "dom-checkbox", "targets": [ 5 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          null,
		 *          null,
		 *          { "orderDataType": "dom-text" },
		 *          { "orderDataType": "dom-text", "type": "numeric" },
		 *          { "orderDataType": "dom-select" },
		 *          { "orderDataType": "dom-checkbox" }
		 *        ]
		 *      } );
		 *    } );
		 */
		"sSortDataType": "std",
	
	
		/**
		 * The title of this column.
		 *  @type string
		 *  @default null <i>Derived from the 'TH' value for this column in the
		 *    original HTML table.</i>
		 *
		 *  @name DataTable.defaults.column.title
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "title": "My column title", "targets": [ 0 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "title": "My column title" },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
		 */
		"sTitle": null,
	
	
		/**
		 * The type allows you to specify how the data for this column will be
		 * ordered. Four types (string, numeric, date and html (which will strip
		 * HTML tags before ordering)) are currently available. Note that only date
		 * formats understood by Javascript's Date() object will be accepted as type
		 * date. For example: "Mar 26, 2008 5:03 PM". May take the values: 'string',
		 * 'numeric', 'date' or 'html' (by default). Further types can be adding
		 * through plug-ins.
		 *  @type string
		 *  @default null <i>Auto-detected from raw data</i>
		 *
		 *  @name DataTable.defaults.column.type
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "type": "html", "targets": [ 0 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "type": "html" },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
		 */
		"sType": null,
	
	
		/**
		 * Defining the width of the column, this parameter may take any CSS value
		 * (3em, 20px etc). DataTables applies 'smart' widths to columns which have not
		 * been given a specific width through this interface ensuring that the table
		 * remains readable.
		 *  @type string
		 *  @default null <i>Automatic</i>
		 *
		 *  @name DataTable.defaults.column.width
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "width": "20%", "targets": [ 0 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "width": "20%" },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
		 */
		"sWidth": null
	};
	
	_fnHungarianMap( DataTable.defaults.column );
	
	
	
	/**
	 * DataTables settings object - this holds all the information needed for a
	 * given table, including configuration, data and current application of the
	 * table options. DataTables does not have a single instance for each DataTable
	 * with the settings attached to that instance, but rather instances of the
	 * DataTable "class" are created on-the-fly as needed (typically by a
	 * $().dataTable() call) and the settings object is then applied to that
	 * instance.
	 *
	 * Note that this object is related to {@link DataTable.defaults} but this
	 * one is the internal data store for DataTables's cache of columns. It should
	 * NOT be manipulated outside of DataTables. Any configuration should be done
	 * through the initialisation options.
	 *  @namespace
	 *  @todo Really should attach the settings object to individual instances so we
	 *    don't need to create new instances on each $().dataTable() call (if the
	 *    table already exists). It would also save passing oSettings around and
	 *    into every single function. However, this is a very significant
	 *    architecture change for DataTables and will almost certainly break
	 *    backwards compatibility with older installations. This is something that
	 *    will be done in 2.0.
	 */
	DataTable.models.oSettings = {
		/**
		 * Primary features of DataTables and their enablement state.
		 *  @namespace
		 */
		"oFeatures": {
	
			/**
			 * Flag to say if DataTables should automatically try to calculate the
			 * optimum table and columns widths (true) or not (false).
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bAutoWidth": null,
	
			/**
			 * Delay the creation of TR and TD elements until they are actually
			 * needed by a driven page draw. This can give a significant speed
			 * increase for Ajax source and Javascript source data, but makes no
			 * difference at all fro DOM and server-side processing tables.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bDeferRender": null,
	
			/**
			 * Enable filtering on the table or not. Note that if this is disabled
			 * then there is no filtering at all on the table, including fnFilter.
			 * To just remove the filtering input use sDom and remove the 'f' option.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bFilter": null,
	
			/**
			 * Table information element (the 'Showing x of y records' div) enable
			 * flag.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bInfo": null,
	
			/**
			 * Present a user control allowing the end user to change the page size
			 * when pagination is enabled.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bLengthChange": null,
	
			/**
			 * Pagination enabled or not. Note that if this is disabled then length
			 * changing must also be disabled.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bPaginate": null,
	
			/**
			 * Processing indicator enable flag whenever DataTables is enacting a
			 * user request - typically an Ajax request for server-side processing.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bProcessing": null,
	
			/**
			 * Server-side processing enabled flag - when enabled DataTables will
			 * get all data from the server for every draw - there is no filtering,
			 * sorting or paging done on the client-side.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bServerSide": null,
	
			/**
			 * Sorting enablement flag.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bSort": null,
	
			/**
			 * Multi-column sorting
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bSortMulti": null,
	
			/**
			 * Apply a class to the columns which are being sorted to provide a
			 * visual highlight or not. This can slow things down when enabled since
			 * there is a lot of DOM interaction.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bSortClasses": null,
	
			/**
			 * State saving enablement flag.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bStateSave": null
		},
	
	
		/**
		 * Scrolling settings for a table.
		 *  @namespace
		 */
		"oScroll": {
			/**
			 * When the table is shorter in height than sScrollY, collapse the
			 * table container down to the height of the table (when true).
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bCollapse": null,
	
			/**
			 * Width of the scrollbar for the web-browser's platform. Calculated
			 * during table initialisation.
			 *  @type int
			 *  @default 0
			 */
			"iBarWidth": 0,
	
			/**
			 * Viewport width for horizontal scrolling. Horizontal scrolling is
			 * disabled if an empty string.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type string
			 */
			"sX": null,
	
			/**
			 * Width to expand the table to when using x-scrolling. Typically you
			 * should not need to use this.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type string
			 *  @deprecated
			 */
			"sXInner": null,
	
			/**
			 * Viewport height for vertical scrolling. Vertical scrolling is disabled
			 * if an empty string.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type string
			 */
			"sY": null
		},
	
		/**
		 * Language information for the table.
		 *  @namespace
		 *  @extends DataTable.defaults.oLanguage
		 */
		"oLanguage": {
			/**
			 * Information callback function. See
			 * {@link DataTable.defaults.fnInfoCallback}
			 *  @type function
			 *  @default null
			 */
			"fnInfoCallback": null
		},
	
		/**
		 * Browser support parameters
		 *  @namespace
		 */
		"oBrowser": {
			/**
			 * Indicate if the browser incorrectly calculates width:100% inside a
			 * scrolling element (IE6/7)
			 *  @type boolean
			 *  @default false
			 */
			"bScrollOversize": false,
	
			/**
			 * Determine if the vertical scrollbar is on the right or left of the
			 * scrolling container - needed for rtl language layout, although not
			 * all browsers move the scrollbar (Safari).
			 *  @type boolean
			 *  @default false
			 */
			"bScrollbarLeft": false,
	
			/**
			 * Flag for if `getBoundingClientRect` is fully supported or not
			 *  @type boolean
			 *  @default false
			 */
			"bBounding": false,
	
			/**
			 * Browser scrollbar width
			 *  @type integer
			 *  @default 0
			 */
			"barWidth": 0
		},
	
	
		"ajax": null,
	
	
		/**
		 * Array referencing the nodes which are used for the features. The
		 * parameters of this object match what is allowed by sDom - i.e.
		 *   <ul>
		 *     <li>'l' - Length changing</li>
		 *     <li>'f' - Filtering input</li>
		 *     <li>'t' - The table!</li>
		 *     <li>'i' - Information</li>
		 *     <li>'p' - Pagination</li>
		 *     <li>'r' - pRocessing</li>
		 *   </ul>
		 *  @type array
		 *  @default []
		 */
		"aanFeatures": [],
	
		/**
		 * Store data information - see {@link DataTable.models.oRow} for detailed
		 * information.
		 *  @type array
		 *  @default []
		 */
		"aoData": [],
	
		/**
		 * Array of indexes which are in the current display (after filtering etc)
		 *  @type array
		 *  @default []
		 */
		"aiDisplay": [],
	
		/**
		 * Array of indexes for display - no filtering
		 *  @type array
		 *  @default []
		 */
		"aiDisplayMaster": [],
	
		/**
		 * Map of row ids to data indexes
		 *  @type object
		 *  @default {}
		 */
		"aIds": {},
	
		/**
		 * Store information about each column that is in use
		 *  @type array
		 *  @default []
		 */
		"aoColumns": [],
	
		/**
		 * Store information about the table's header
		 *  @type array
		 *  @default []
		 */
		"aoHeader": [],
	
		/**
		 * Store information about the table's footer
		 *  @type array
		 *  @default []
		 */
		"aoFooter": [],
	
		/**
		 * Store the applied global search information in case we want to force a
		 * research or compare the old search to a new one.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @namespace
		 *  @extends DataTable.models.oSearch
		 */
		"oPreviousSearch": {},
	
		/**
		 * Store the applied search for each column - see
		 * {@link DataTable.models.oSearch} for the format that is used for the
		 * filtering information for each column.
		 *  @type array
		 *  @default []
		 */
		"aoPreSearchCols": [],
	
		/**
		 * Sorting that is applied to the table. Note that the inner arrays are
		 * used in the following manner:
		 * <ul>
		 *   <li>Index 0 - column number</li>
		 *   <li>Index 1 - current sorting direction</li>
		 * </ul>
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type array
		 *  @todo These inner arrays should really be objects
		 */
		"aaSorting": null,
	
		/**
		 * Sorting that is always applied to the table (i.e. prefixed in front of
		 * aaSorting).
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type array
		 *  @default []
		 */
		"aaSortingFixed": [],
	
		/**
		 * Classes to use for the striping of a table.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type array
		 *  @default []
		 */
		"asStripeClasses": null,
	
		/**
		 * If restoring a table - we should restore its striping classes as well
		 *  @type array
		 *  @default []
		 */
		"asDestroyStripes": [],
	
		/**
		 * If restoring a table - we should restore its width
		 *  @type int
		 *  @default 0
		 */
		"sDestroyWidth": 0,
	
		/**
		 * Callback functions array for every time a row is inserted (i.e. on a draw).
		 *  @type array
		 *  @default []
		 */
		"aoRowCallback": [],
	
		/**
		 * Callback functions for the header on each draw.
		 *  @type array
		 *  @default []
		 */
		"aoHeaderCallback": [],
	
		/**
		 * Callback function for the footer on each draw.
		 *  @type array
		 *  @default []
		 */
		"aoFooterCallback": [],
	
		/**
		 * Array of callback functions for draw callback functions
		 *  @type array
		 *  @default []
		 */
		"aoDrawCallback": [],
	
		/**
		 * Array of callback functions for row created function
		 *  @type array
		 *  @default []
		 */
		"aoRowCreatedCallback": [],
	
		/**
		 * Callback functions for just before the table is redrawn. A return of
		 * false will be used to cancel the draw.
		 *  @type array
		 *  @default []
		 */
		"aoPreDrawCallback": [],
	
		/**
		 * Callback functions for when the table has been initialised.
		 *  @type array
		 *  @default []
		 */
		"aoInitComplete": [],
	
	
		/**
		 * Callbacks for modifying the settings to be stored for state saving, prior to
		 * saving state.
		 *  @type array
		 *  @default []
		 */
		"aoStateSaveParams": [],
	
		/**
		 * Callbacks for modifying the settings that have been stored for state saving
		 * prior to using the stored values to restore the state.
		 *  @type array
		 *  @default []
		 */
		"aoStateLoadParams": [],
	
		/**
		 * Callbacks for operating on the settings object once the saved state has been
		 * loaded
		 *  @type array
		 *  @default []
		 */
		"aoStateLoaded": [],
	
		/**
		 * Cache the table ID for quick access
		 *  @type string
		 *  @default <i>Empty string</i>
		 */
		"sTableId": "",
	
		/**
		 * The TABLE node for the main table
		 *  @type node
		 *  @default null
		 */
		"nTable": null,
	
		/**
		 * Permanent ref to the thead element
		 *  @type node
		 *  @default null
		 */
		"nTHead": null,
	
		/**
		 * Permanent ref to the tfoot element - if it exists
		 *  @type node
		 *  @default null
		 */
		"nTFoot": null,
	
		/**
		 * Permanent ref to the tbody element
		 *  @type node
		 *  @default null
		 */
		"nTBody": null,
	
		/**
		 * Cache the wrapper node (contains all DataTables controlled elements)
		 *  @type node
		 *  @default null
		 */
		"nTableWrapper": null,
	
		/**
		 * Indicate if when using server-side processing the loading of data
		 * should be deferred until the second draw.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type boolean
		 *  @default false
		 */
		"bDeferLoading": false,
	
		/**
		 * Indicate if all required information has been read in
		 *  @type boolean
		 *  @default false
		 */
		"bInitialised": false,
	
		/**
		 * Information about open rows. Each object in the array has the parameters
		 * 'nTr' and 'nParent'
		 *  @type array
		 *  @default []
		 */
		"aoOpenRows": [],
	
		/**
		 * Dictate the positioning of DataTables' control elements - see
		 * {@link DataTable.model.oInit.sDom}.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type string
		 *  @default null
		 */
		"sDom": null,
	
		/**
		 * Search delay (in mS)
		 *  @type integer
		 *  @default null
		 */
		"searchDelay": null,
	
		/**
		 * Which type of pagination should be used.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type string
		 *  @default two_button
		 */
		"sPaginationType": "two_button",
	
		/**
		 * The state duration (for `stateSave`) in seconds.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type int
		 *  @default 0
		 */
		"iStateDuration": 0,
	
		/**
		 * Array of callback functions for state saving. Each array element is an
		 * object with the following parameters:
		 *   <ul>
		 *     <li>function:fn - function to call. Takes two parameters, oSettings
		 *       and the JSON string to save that has been thus far created. Returns
		 *       a JSON string to be inserted into a json object
		 *       (i.e. '"param": [ 0, 1, 2]')</li>
		 *     <li>string:sName - name of callback</li>
		 *   </ul>
		 *  @type array
		 *  @default []
		 */
		"aoStateSave": [],
	
		/**
		 * Array of callback functions for state loading. Each array element is an
		 * object with the following parameters:
		 *   <ul>
		 *     <li>function:fn - function to call. Takes two parameters, oSettings
		 *       and the object stored. May return false to cancel state loading</li>
		 *     <li>string:sName - name of callback</li>
		 *   </ul>
		 *  @type array
		 *  @default []
		 */
		"aoStateLoad": [],
	
		/**
		 * State that was saved. Useful for back reference
		 *  @type object
		 *  @default null
		 */
		"oSavedState": null,
	
		/**
		 * State that was loaded. Useful for back reference
		 *  @type object
		 *  @default null
		 */
		"oLoadedState": null,
	
		/**
		 * Source url for AJAX data for the table.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type string
		 *  @default null
		 */
		"sAjaxSource": null,
	
		/**
		 * Property from a given object from which to read the table data from. This
		 * can be an empty string (when not server-side processing), in which case
		 * it is  assumed an an array is given directly.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type string
		 */
		"sAjaxDataProp": null,
	
		/**
		 * Note if draw should be blocked while getting data
		 *  @type boolean
		 *  @default true
		 */
		"bAjaxDataGet": true,
	
		/**
		 * The last jQuery XHR object that was used for server-side data gathering.
		 * This can be used for working with the XHR information in one of the
		 * callbacks
		 *  @type object
		 *  @default null
		 */
		"jqXHR": null,
	
		/**
		 * JSON returned from the server in the last Ajax request
		 *  @type object
		 *  @default undefined
		 */
		"json": undefined,
	
		/**
		 * Data submitted as part of the last Ajax request
		 *  @type object
		 *  @default undefined
		 */
		"oAjaxData": undefined,
	
		/**
		 * Function to get the server-side data.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type function
		 */
		"fnServerData": null,
	
		/**
		 * Functions which are called prior to sending an Ajax request so extra
		 * parameters can easily be sent to the server
		 *  @type array
		 *  @default []
		 */
		"aoServerParams": [],
	
		/**
		 * Send the XHR HTTP method - GET or POST (could be PUT or DELETE if
		 * required).
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type string
		 */
		"sServerMethod": null,
	
		/**
		 * Format numbers for display.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type function
		 */
		"fnFormatNumber": null,
	
		/**
		 * List of options that can be used for the user selectable length menu.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type array
		 *  @default []
		 */
		"aLengthMenu": null,
	
		/**
		 * Counter for the draws that the table does. Also used as a tracker for
		 * server-side processing
		 *  @type int
		 *  @default 0
		 */
		"iDraw": 0,
	
		/**
		 * Indicate if a redraw is being done - useful for Ajax
		 *  @type boolean
		 *  @default false
		 */
		"bDrawing": false,
	
		/**
		 * Draw index (iDraw) of the last error when parsing the returned data
		 *  @type int
		 *  @default -1
		 */
		"iDrawError": -1,
	
		/**
		 * Paging display length
		 *  @type int
		 *  @default 10
		 */
		"_iDisplayLength": 10,
	
		/**
		 * Paging start point - aiDisplay index
		 *  @type int
		 *  @default 0
		 */
		"_iDisplayStart": 0,
	
		/**
		 * Server-side processing - number of records in the result set
		 * (i.e. before filtering), Use fnRecordsTotal rather than
		 * this property to get the value of the number of records, regardless of
		 * the server-side processing setting.
		 *  @type int
		 *  @default 0
		 *  @private
		 */
		"_iRecordsTotal": 0,
	
		/**
		 * Server-side processing - number of records in the current display set
		 * (i.e. after filtering). Use fnRecordsDisplay rather than
		 * this property to get the value of the number of records, regardless of
		 * the server-side processing setting.
		 *  @type boolean
		 *  @default 0
		 *  @private
		 */
		"_iRecordsDisplay": 0,
	
		/**
		 * The classes to use for the table
		 *  @type object
		 *  @default {}
		 */
		"oClasses": {},
	
		/**
		 * Flag attached to the settings object so you can check in the draw
		 * callback if filtering has been done in the draw. Deprecated in favour of
		 * events.
		 *  @type boolean
		 *  @default false
		 *  @deprecated
		 */
		"bFiltered": false,
	
		/**
		 * Flag attached to the settings object so you can check in the draw
		 * callback if sorting has been done in the draw. Deprecated in favour of
		 * events.
		 *  @type boolean
		 *  @default false
		 *  @deprecated
		 */
		"bSorted": false,
	
		/**
		 * Indicate that if multiple rows are in the header and there is more than
		 * one unique cell per column, if the top one (true) or bottom one (false)
		 * should be used for sorting / title by DataTables.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type boolean
		 */
		"bSortCellsTop": null,
	
		/**
		 * Initialisation object that is used for the table
		 *  @type object
		 *  @default null
		 */
		"oInit": null,
	
		/**
		 * Destroy callback functions - for plug-ins to attach themselves to the
		 * destroy so they can clean up markup and events.
		 *  @type array
		 *  @default []
		 */
		"aoDestroyCallback": [],
	
	
		/**
		 * Get the number of records in the current record set, before filtering
		 *  @type function
		 */
		"fnRecordsTotal": function ()
		{
			return _fnDataSource( this ) == 'ssp' ?
				this._iRecordsTotal * 1 :
				this.aiDisplayMaster.length;
		},
	
		/**
		 * Get the number of records in the current record set, after filtering
		 *  @type function
		 */
		"fnRecordsDisplay": function ()
		{
			return _fnDataSource( this ) == 'ssp' ?
				this._iRecordsDisplay * 1 :
				this.aiDisplay.length;
		},
	
		/**
		 * Get the display end point - aiDisplay index
		 *  @type function
		 */
		"fnDisplayEnd": function ()
		{
			var
				len      = this._iDisplayLength,
				start    = this._iDisplayStart,
				calc     = start + len,
				records  = this.aiDisplay.length,
				features = this.oFeatures,
				paginate = features.bPaginate;
	
			if ( features.bServerSide ) {
				return paginate === false || len === -1 ?
					start + records :
					Math.min( start+len, this._iRecordsDisplay );
			}
			else {
				return ! paginate || calc>records || len===-1 ?
					records :
					calc;
			}
		},
	
		/**
		 * The DataTables object for this table
		 *  @type object
		 *  @default null
		 */
		"oInstance": null,
	
		/**
		 * Unique identifier for each instance of the DataTables object. If there
		 * is an ID on the table node, then it takes that value, otherwise an
		 * incrementing internal counter is used.
		 *  @type string
		 *  @default null
		 */
		"sInstance": null,
	
		/**
		 * tabindex attribute value that is added to DataTables control elements, allowing
		 * keyboard navigation of the table and its controls.
		 */
		"iTabIndex": 0,
	
		/**
		 * DIV container for the footer scrolling table if scrolling
		 */
		"nScrollHead": null,
	
		/**
		 * DIV container for the footer scrolling table if scrolling
		 */
		"nScrollFoot": null,
	
		/**
		 * Last applied sort
		 *  @type array
		 *  @default []
		 */
		"aLastSort": [],
	
		/**
		 * Stored plug-in instances
		 *  @type object
		 *  @default {}
		 */
		"oPlugins": {},
	
		/**
		 * Function used to get a row's id from the row's data
		 *  @type function
		 *  @default null
		 */
		"rowIdFn": null,
	
		/**
		 * Data location where to store a row's id
		 *  @type string
		 *  @default null
		 */
		"rowId": null
	};

	/**
	 * Extension object for DataTables that is used to provide all extension
	 * options.
	 *
	 * Note that the `DataTable.ext` object is available through
	 * `jQuery.fn.dataTable.ext` where it may be accessed and manipulated. It is
	 * also aliased to `jQuery.fn.dataTableExt` for historic reasons.
	 *  @namespace
	 *  @extends DataTable.models.ext
	 */
	
	
	/**
	 * DataTables extensions
	 * 
	 * This namespace acts as a collection area for plug-ins that can be used to
	 * extend DataTables capabilities. Indeed many of the build in methods
	 * use this method to provide their own capabilities (sorting methods for
	 * example).
	 *
	 * Note that this namespace is aliased to `jQuery.fn.dataTableExt` for legacy
	 * reasons
	 *
	 *  @namespace
	 */
	DataTable.ext = _ext = {
		/**
		 * Buttons. For use with the Buttons extension for DataTables. This is
		 * defined here so other extensions can define buttons regardless of load
		 * order. It is _not_ used by DataTables core.
		 *
		 *  @type object
		 *  @default {}
		 */
		buttons: {},
	
	
		/**
		 * Element class names
		 *
		 *  @type object
		 *  @default {}
		 */
		classes: {},
	
	
		/**
		 * DataTables build type (expanded by the download builder)
		 *
		 *  @type string
		 */
		builder: "-source-",
	
	
		/**
		 * Error reporting.
		 * 
		 * How should DataTables report an error. Can take the value 'alert',
		 * 'throw', 'none' or a function.
		 *
		 *  @type string|function
		 *  @default alert
		 */
		errMode: "alert",
	
	
		/**
		 * Feature plug-ins.
		 * 
		 * This is an array of objects which describe the feature plug-ins that are
		 * available to DataTables. These feature plug-ins are then available for
		 * use through the `dom` initialisation option.
		 * 
		 * Each feature plug-in is described by an object which must have the
		 * following properties:
		 * 
		 * * `fnInit` - function that is used to initialise the plug-in,
		 * * `cFeature` - a character so the feature can be enabled by the `dom`
		 *   instillation option. This is case sensitive.
		 *
		 * The `fnInit` function has the following input parameters:
		 *
		 * 1. `{object}` DataTables settings object: see
		 *    {@link DataTable.models.oSettings}
		 *
		 * And the following return is expected:
		 * 
		 * * {node|null} The element which contains your feature. Note that the
		 *   return may also be void if your plug-in does not require to inject any
		 *   DOM elements into DataTables control (`dom`) - for example this might
		 *   be useful when developing a plug-in which allows table control via
		 *   keyboard entry
		 *
		 *  @type array
		 *
		 *  @example
		 *    $.fn.dataTable.ext.features.push( {
		 *      "fnInit": function( oSettings ) {
		 *        return new TableTools( { "oDTSettings": oSettings } );
		 *      },
		 *      "cFeature": "T"
		 *    } );
		 */
		feature: [],
	
	
		/**
		 * Row searching.
		 * 
		 * This method of searching is complimentary to the default type based
		 * searching, and a lot more comprehensive as it allows you complete control
		 * over the searching logic. Each element in this array is a function
		 * (parameters described below) that is called for every row in the table,
		 * and your logic decides if it should be included in the searching data set
		 * or not.
		 *
		 * Searching functions have the following input parameters:
		 *
		 * 1. `{object}` DataTables settings object: see
		 *    {@link DataTable.models.oSettings}
		 * 2. `{array|object}` Data for the row to be processed (same as the
		 *    original format that was passed in as the data source, or an array
		 *    from a DOM data source
		 * 3. `{int}` Row index ({@link DataTable.models.oSettings.aoData}), which
		 *    can be useful to retrieve the `TR` element if you need DOM interaction.
		 *
		 * And the following return is expected:
		 *
		 * * {boolean} Include the row in the searched result set (true) or not
		 *   (false)
		 *
		 * Note that as with the main search ability in DataTables, technically this
		 * is "filtering", since it is subtractive. However, for consistency in
		 * naming we call it searching here.
		 *
		 *  @type array
		 *  @default []
		 *
		 *  @example
		 *    // The following example shows custom search being applied to the
		 *    // fourth column (i.e. the data[3] index) based on two input values
		 *    // from the end-user, matching the data in a certain range.
		 *    $.fn.dataTable.ext.search.push(
		 *      function( settings, data, dataIndex ) {
		 *        var min = document.getElementById('min').value * 1;
		 *        var max = document.getElementById('max').value * 1;
		 *        var version = data[3] == "-" ? 0 : data[3]*1;
		 *
		 *        if ( min == "" && max == "" ) {
		 *          return true;
		 *        }
		 *        else if ( min == "" && version < max ) {
		 *          return true;
		 *        }
		 *        else if ( min < version && "" == max ) {
		 *          return true;
		 *        }
		 *        else if ( min < version && version < max ) {
		 *          return true;
		 *        }
		 *        return false;
		 *      }
		 *    );
		 */
		search: [],
	
	
		/**
		 * Selector extensions
		 *
		 * The `selector` option can be used to extend the options available for the
		 * selector modifier options (`selector-modifier` object data type) that
		 * each of the three built in selector types offer (row, column and cell +
		 * their plural counterparts). For example the Select extension uses this
		 * mechanism to provide an option to select only rows, columns and cells
		 * that have been marked as selected by the end user (`{selected: true}`),
		 * which can be used in conjunction with the existing built in selector
		 * options.
		 *
		 * Each property is an array to which functions can be pushed. The functions
		 * take three attributes:
		 *
		 * * Settings object for the host table
		 * * Options object (`selector-modifier` object type)
		 * * Array of selected item indexes
		 *
		 * The return is an array of the resulting item indexes after the custom
		 * selector has been applied.
		 *
		 *  @type object
		 */
		selector: {
			cell: [],
			column: [],
			row: []
		},
	
	
		/**
		 * Internal functions, exposed for used in plug-ins.
		 * 
		 * Please note that you should not need to use the internal methods for
		 * anything other than a plug-in (and even then, try to avoid if possible).
		 * The internal function may change between releases.
		 *
		 *  @type object
		 *  @default {}
		 */
		internal: {},
	
	
		/**
		 * Legacy configuration options. Enable and disable legacy options that
		 * are available in DataTables.
		 *
		 *  @type object
		 */
		legacy: {
			/**
			 * Enable / disable DataTables 1.9 compatible server-side processing
			 * requests
			 *
			 *  @type boolean
			 *  @default null
			 */
			ajax: null
		},
	
	
		/**
		 * Pagination plug-in methods.
		 * 
		 * Each entry in this object is a function and defines which buttons should
		 * be shown by the pagination rendering method that is used for the table:
		 * {@link DataTable.ext.renderer.pageButton}. The renderer addresses how the
		 * buttons are displayed in the document, while the functions here tell it
		 * what buttons to display. This is done by returning an array of button
		 * descriptions (what each button will do).
		 *
		 * Pagination types (the four built in options and any additional plug-in
		 * options defined here) can be used through the `paginationType`
		 * initialisation parameter.
		 *
		 * The functions defined take two parameters:
		 *
		 * 1. `{int} page` The current page index
		 * 2. `{int} pages` The number of pages in the table
		 *
		 * Each function is expected to return an array where each element of the
		 * array can be one of:
		 *
		 * * `first` - Jump to first page when activated
		 * * `last` - Jump to last page when activated
		 * * `previous` - Show previous page when activated
		 * * `next` - Show next page when activated
		 * * `{int}` - Show page of the index given
		 * * `{array}` - A nested array containing the above elements to add a
		 *   containing 'DIV' element (might be useful for styling).
		 *
		 * Note that DataTables v1.9- used this object slightly differently whereby
		 * an object with two functions would be defined for each plug-in. That
		 * ability is still supported by DataTables 1.10+ to provide backwards
		 * compatibility, but this option of use is now decremented and no longer
		 * documented in DataTables 1.10+.
		 *
		 *  @type object
		 *  @default {}
		 *
		 *  @example
		 *    // Show previous, next and current page buttons only
		 *    $.fn.dataTableExt.oPagination.current = function ( page, pages ) {
		 *      return [ 'previous', page, 'next' ];
		 *    };
		 */
		pager: {},
	
	
		renderer: {
			pageButton: {},
			header: {}
		},
	
	
		/**
		 * Ordering plug-ins - custom data source
		 * 
		 * The extension options for ordering of data available here is complimentary
		 * to the default type based ordering that DataTables typically uses. It
		 * allows much greater control over the the data that is being used to
		 * order a column, but is necessarily therefore more complex.
		 * 
		 * This type of ordering is useful if you want to do ordering based on data
		 * live from the DOM (for example the contents of an 'input' element) rather
		 * than just the static string that DataTables knows of.
		 * 
		 * The way these plug-ins work is that you create an array of the values you
		 * wish to be ordering for the column in question and then return that
		 * array. The data in the array much be in the index order of the rows in
		 * the table (not the currently ordering order!). Which order data gathering
		 * function is run here depends on the `dt-init columns.orderDataType`
		 * parameter that is used for the column (if any).
		 *
		 * The functions defined take two parameters:
		 *
		 * 1. `{object}` DataTables settings object: see
		 *    {@link DataTable.models.oSettings}
		 * 2. `{int}` Target column index
		 *
		 * Each function is expected to return an array:
		 *
		 * * `{array}` Data for the column to be ordering upon
		 *
		 *  @type array
		 *
		 *  @example
		 *    // Ordering using `input` node values
		 *    $.fn.dataTable.ext.order['dom-text'] = function  ( settings, col )
		 *    {
		 *      return this.api().column( col, {order:'index'} ).nodes().map( function ( td, i ) {
		 *        return $('input', td).val();
		 *      } );
		 *    }
		 */
		order: {},
	
	
		/**
		 * Type based plug-ins.
		 *
		 * Each column in DataTables has a type assigned to it, either by automatic
		 * detection or by direct assignment using the `type` option for the column.
		 * The type of a column will effect how it is ordering and search (plug-ins
		 * can also make use of the column type if required).
		 *
		 * @namespace
		 */
		type: {
			/**
			 * Type detection functions.
			 *
			 * The functions defined in this object are used to automatically detect
			 * a column's type, making initialisation of DataTables super easy, even
			 * when complex data is in the table.
			 *
			 * The functions defined take two parameters:
			 *
		     *  1. `{*}` Data from the column cell to be analysed
		     *  2. `{settings}` DataTables settings object. This can be used to
		     *     perform context specific type detection - for example detection
		     *     based on language settings such as using a comma for a decimal
		     *     place. Generally speaking the options from the settings will not
		     *     be required
			 *
			 * Each function is expected to return:
			 *
			 * * `{string|null}` Data type detected, or null if unknown (and thus
			 *   pass it on to the other type detection functions.
			 *
			 *  @type array
			 *
			 *  @example
			 *    // Currency type detection plug-in:
			 *    $.fn.dataTable.ext.type.detect.push(
			 *      function ( data, settings ) {
			 *        // Check the numeric part
			 *        if ( ! $.isNumeric( data.substring(1) ) ) {
			 *          return null;
			 *        }
			 *
			 *        // Check prefixed by currency
			 *        if ( data.charAt(0) == '$' || data.charAt(0) == '&pound;' ) {
			 *          return 'currency';
			 *        }
			 *        return null;
			 *      }
			 *    );
			 */
			detect: [],
	
	
			/**
			 * Type based search formatting.
			 *
			 * The type based searching functions can be used to pre-format the
			 * data to be search on. For example, it can be used to strip HTML
			 * tags or to de-format telephone numbers for numeric only searching.
			 *
			 * Note that is a search is not defined for a column of a given type,
			 * no search formatting will be performed.
			 * 
			 * Pre-processing of searching data plug-ins - When you assign the sType
			 * for a column (or have it automatically detected for you by DataTables
			 * or a type detection plug-in), you will typically be using this for
			 * custom sorting, but it can also be used to provide custom searching
			 * by allowing you to pre-processing the data and returning the data in
			 * the format that should be searched upon. This is done by adding
			 * functions this object with a parameter name which matches the sType
			 * for that target column. This is the corollary of <i>afnSortData</i>
			 * for searching data.
			 *
			 * The functions defined take a single parameter:
			 *
		     *  1. `{*}` Data from the column cell to be prepared for searching
			 *
			 * Each function is expected to return:
			 *
			 * * `{string|null}` Formatted string that will be used for the searching.
			 *
			 *  @type object
			 *  @default {}
			 *
			 *  @example
			 *    $.fn.dataTable.ext.type.search['title-numeric'] = function ( d ) {
			 *      return d.replace(/\n/g," ").replace( /<.*?>/g, "" );
			 *    }
			 */
			search: {},
	
	
			/**
			 * Type based ordering.
			 *
			 * The column type tells DataTables what ordering to apply to the table
			 * when a column is sorted upon. The order for each type that is defined,
			 * is defined by the functions available in this object.
			 *
			 * Each ordering option can be described by three properties added to
			 * this object:
			 *
			 * * `{type}-pre` - Pre-formatting function
			 * * `{type}-asc` - Ascending order function
			 * * `{type}-desc` - Descending order function
			 *
			 * All three can be used together, only `{type}-pre` or only
			 * `{type}-asc` and `{type}-desc` together. It is generally recommended
			 * that only `{type}-pre` is used, as this provides the optimal
			 * implementation in terms of speed, although the others are provided
			 * for compatibility with existing Javascript sort functions.
			 *
			 * `{type}-pre`: Functions defined take a single parameter:
			 *
		     *  1. `{*}` Data from the column cell to be prepared for ordering
			 *
			 * And return:
			 *
			 * * `{*}` Data to be sorted upon
			 *
			 * `{type}-asc` and `{type}-desc`: Functions are typical Javascript sort
			 * functions, taking two parameters:
			 *
		     *  1. `{*}` Data to compare to the second parameter
		     *  2. `{*}` Data to compare to the first parameter
			 *
			 * And returning:
			 *
			 * * `{*}` Ordering match: <0 if first parameter should be sorted lower
			 *   than the second parameter, ===0 if the two parameters are equal and
			 *   >0 if the first parameter should be sorted height than the second
			 *   parameter.
			 * 
			 *  @type object
			 *  @default {}
			 *
			 *  @example
			 *    // Numeric ordering of formatted numbers with a pre-formatter
			 *    $.extend( $.fn.dataTable.ext.type.order, {
			 *      "string-pre": function(x) {
			 *        a = (a === "-" || a === "") ? 0 : a.replace( /[^\d\-\.]/g, "" );
			 *        return parseFloat( a );
			 *      }
			 *    } );
			 *
			 *  @example
			 *    // Case-sensitive string ordering, with no pre-formatting method
			 *    $.extend( $.fn.dataTable.ext.order, {
			 *      "string-case-asc": function(x,y) {
			 *        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
			 *      },
			 *      "string-case-desc": function(x,y) {
			 *        return ((x < y) ? 1 : ((x > y) ? -1 : 0));
			 *      }
			 *    } );
			 */
			order: {}
		},
	
		/**
		 * Unique DataTables instance counter
		 *
		 * @type int
		 * @private
		 */
		_unique: 0,
	
	
		//
		// Depreciated
		// The following properties are retained for backwards compatiblity only.
		// The should not be used in new projects and will be removed in a future
		// version
		//
	
		/**
		 * Version check function.
		 *  @type function
		 *  @depreciated Since 1.10
		 */
		fnVersionCheck: DataTable.fnVersionCheck,
	
	
		/**
		 * Index for what 'this' index API functions should use
		 *  @type int
		 *  @deprecated Since v1.10
		 */
		iApiIndex: 0,
	
	
		/**
		 * jQuery UI class container
		 *  @type object
		 *  @deprecated Since v1.10
		 */
		oJUIClasses: {},
	
	
		/**
		 * Software version
		 *  @type string
		 *  @deprecated Since v1.10
		 */
		sVersion: DataTable.version
	};
	
	
	//
	// Backwards compatibility. Alias to pre 1.10 Hungarian notation counter parts
	//
	$.extend( _ext, {
		afnFiltering: _ext.search,
		aTypes:       _ext.type.detect,
		ofnSearch:    _ext.type.search,
		oSort:        _ext.type.order,
		afnSortData:  _ext.order,
		aoFeatures:   _ext.feature,
		oApi:         _ext.internal,
		oStdClasses:  _ext.classes,
		oPagination:  _ext.pager
	} );
	
	
	$.extend( DataTable.ext.classes, {
		"sTable": "dataTable",
		"sNoFooter": "no-footer",
	
		/* Paging buttons */
		"sPageButton": "paginate_button",
		"sPageButtonActive": "current",
		"sPageButtonDisabled": "disabled",
	
		/* Striping classes */
		"sStripeOdd": "odd",
		"sStripeEven": "even",
	
		/* Empty row */
		"sRowEmpty": "dataTables_empty",
	
		/* Features */
		"sWrapper": "dataTables_wrapper",
		"sFilter": "dataTables_filter",
		"sInfo": "dataTables_info",
		"sPaging": "dataTables_paginate paging_", /* Note that the type is postfixed */
		"sLength": "dataTables_length",
		"sProcessing": "dataTables_processing",
	
		/* Sorting */
		"sSortAsc": "sorting_asc",
		"sSortDesc": "sorting_desc",
		"sSortable": "sorting", /* Sortable in both directions */
		"sSortableAsc": "sorting_asc_disabled",
		"sSortableDesc": "sorting_desc_disabled",
		"sSortableNone": "sorting_disabled",
		"sSortColumn": "sorting_", /* Note that an int is postfixed for the sorting order */
	
		/* Filtering */
		"sFilterInput": "",
	
		/* Page length */
		"sLengthSelect": "",
	
		/* Scrolling */
		"sScrollWrapper": "dataTables_scroll",
		"sScrollHead": "dataTables_scrollHead",
		"sScrollHeadInner": "dataTables_scrollHeadInner",
		"sScrollBody": "dataTables_scrollBody",
		"sScrollFoot": "dataTables_scrollFoot",
		"sScrollFootInner": "dataTables_scrollFootInner",
	
		/* Misc */
		"sHeaderTH": "",
		"sFooterTH": "",
	
		// Deprecated
		"sSortJUIAsc": "",
		"sSortJUIDesc": "",
		"sSortJUI": "",
		"sSortJUIAscAllowed": "",
		"sSortJUIDescAllowed": "",
		"sSortJUIWrapper": "",
		"sSortIcon": "",
		"sJUIHeader": "",
		"sJUIFooter": ""
	} );
	
	
	var extPagination = DataTable.ext.pager;
	
	function _numbers ( page, pages ) {
		var
			numbers = [],
			buttons = extPagination.numbers_length,
			half = Math.floor( buttons / 2 ),
			i = 1;
	
		if ( pages <= buttons ) {
			numbers = _range( 0, pages );
		}
		else if ( page <= half ) {
			numbers = _range( 0, buttons-2 );
			numbers.push( 'ellipsis' );
			numbers.push( pages-1 );
		}
		else if ( page >= pages - 1 - half ) {
			numbers = _range( pages-(buttons-2), pages );
			numbers.splice( 0, 0, 'ellipsis' ); // no unshift in ie6
			numbers.splice( 0, 0, 0 );
		}
		else {
			numbers = _range( page-half+2, page+half-1 );
			numbers.push( 'ellipsis' );
			numbers.push( pages-1 );
			numbers.splice( 0, 0, 'ellipsis' );
			numbers.splice( 0, 0, 0 );
		}
	
		numbers.DT_el = 'span';
		return numbers;
	}
	
	
	$.extend( extPagination, {
		simple: function ( page, pages ) {
			return [ 'previous', 'next' ];
		},
	
		full: function ( page, pages ) {
			return [  'first', 'previous', 'next', 'last' ];
		},
	
		numbers: function ( page, pages ) {
			return [ _numbers(page, pages) ];
		},
	
		simple_numbers: function ( page, pages ) {
			return [ 'previous', _numbers(page, pages), 'next' ];
		},
	
		full_numbers: function ( page, pages ) {
			return [ 'first', 'previous', _numbers(page, pages), 'next', 'last' ];
		},
		
		first_last_numbers: function (page, pages) {
	 		return ['first', _numbers(page, pages), 'last'];
	 	},
	
		// For testing and plug-ins to use
		_numbers: _numbers,
	
		// Number of number buttons (including ellipsis) to show. _Must be odd!_
		numbers_length: 7
	} );
	
	
	$.extend( true, DataTable.ext.renderer, {
		pageButton: {
			_: function ( settings, host, idx, buttons, page, pages ) {
				var classes = settings.oClasses;
				var lang = settings.oLanguage.oPaginate;
				var aria = settings.oLanguage.oAria.paginate || {};
				var btnDisplay, btnClass, counter=0;
	
				var attach = function( container, buttons ) {
					var i, ien, node, button;
					var clickHandler = function ( e ) {
						_fnPageChange( settings, e.data.action, true );
					};
	
					for ( i=0, ien=buttons.length ; i<ien ; i++ ) {
						button = buttons[i];
	
						if ( $.isArray( button ) ) {
							var inner = $( '<'+(button.DT_el || 'div')+'/>' )
								.appendTo( container );
							attach( inner, button );
						}
						else {
							btnDisplay = null;
							btnClass = '';
	
							switch ( button ) {
								case 'ellipsis':
									container.append('<span class="ellipsis">&#x2026;</span>');
									break;
	
								case 'first':
									btnDisplay = lang.sFirst;
									btnClass = button + (page > 0 ?
										'' : ' '+classes.sPageButtonDisabled);
									break;
	
								case 'previous':
									btnDisplay = lang.sPrevious;
									btnClass = button + (page > 0 ?
										'' : ' '+classes.sPageButtonDisabled);
									break;
	
								case 'next':
									btnDisplay = lang.sNext;
									btnClass = button + (page < pages-1 ?
										'' : ' '+classes.sPageButtonDisabled);
									break;
	
								case 'last':
									btnDisplay = lang.sLast;
									btnClass = button + (page < pages-1 ?
										'' : ' '+classes.sPageButtonDisabled);
									break;
	
								default:
									btnDisplay = button + 1;
									btnClass = page === button ?
										classes.sPageButtonActive : '';
									break;
							}
	
							if ( btnDisplay !== null ) {
								node = $('<a>', {
										'class': classes.sPageButton+' '+btnClass,
										'aria-controls': settings.sTableId,
										'aria-label': aria[ button ],
										'data-dt-idx': counter,
										'tabindex': settings.iTabIndex,
										'id': idx === 0 && typeof button === 'string' ?
											settings.sTableId +'_'+ button :
											null
									} )
									.html( btnDisplay )
									.appendTo( container );
	
								_fnBindAction(
									node, {action: button}, clickHandler
								);
	
								counter++;
							}
						}
					}
				};
	
				// IE9 throws an 'unknown error' if document.activeElement is used
				// inside an iframe or frame. Try / catch the error. Not good for
				// accessibility, but neither are frames.
				var activeEl;
	
				try {
					// Because this approach is destroying and recreating the paging
					// elements, focus is lost on the select button which is bad for
					// accessibility. So we want to restore focus once the draw has
					// completed
					activeEl = $(host).find(document.activeElement).data('dt-idx');
				}
				catch (e) {}
	
				attach( $(host).empty(), buttons );
	
				if ( activeEl !== undefined ) {
					$(host).find( '[data-dt-idx='+activeEl+']' ).focus();
				}
			}
		}
	} );
	
	
	
	// Built in type detection. See model.ext.aTypes for information about
	// what is required from this methods.
	$.extend( DataTable.ext.type.detect, [
		// Plain numbers - first since V8 detects some plain numbers as dates
		// e.g. Date.parse('55') (but not all, e.g. Date.parse('22')...).
		function ( d, settings )
		{
			var decimal = settings.oLanguage.sDecimal;
			return _isNumber( d, decimal ) ? 'num'+decimal : null;
		},
	
		// Dates (only those recognised by the browser's Date.parse)
		function ( d, settings )
		{
			// V8 tries _very_ hard to make a string passed into `Date.parse()`
			// valid, so we need to use a regex to restrict date formats. Use a
			// plug-in for anything other than ISO8601 style strings
			if ( d && !(d instanceof Date) && ! _re_date.test(d) ) {
				return null;
			}
			var parsed = Date.parse(d);
			return (parsed !== null && !isNaN(parsed)) || _empty(d) ? 'date' : null;
		},
	
		// Formatted numbers
		function ( d, settings )
		{
			var decimal = settings.oLanguage.sDecimal;
			return _isNumber( d, decimal, true ) ? 'num-fmt'+decimal : null;
		},
	
		// HTML numeric
		function ( d, settings )
		{
			var decimal = settings.oLanguage.sDecimal;
			return _htmlNumeric( d, decimal ) ? 'html-num'+decimal : null;
		},
	
		// HTML numeric, formatted
		function ( d, settings )
		{
			var decimal = settings.oLanguage.sDecimal;
			return _htmlNumeric( d, decimal, true ) ? 'html-num-fmt'+decimal : null;
		},
	
		// HTML (this is strict checking - there must be html)
		function ( d, settings )
		{
			return _empty( d ) || (typeof d === 'string' && d.indexOf('<') !== -1) ?
				'html' : null;
		}
	] );
	
	
	
	// Filter formatting functions. See model.ext.ofnSearch for information about
	// what is required from these methods.
	// 
	// Note that additional search methods are added for the html numbers and
	// html formatted numbers by `_addNumericSort()` when we know what the decimal
	// place is
	
	
	$.extend( DataTable.ext.type.search, {
		html: function ( data ) {
			return _empty(data) ?
				data :
				typeof data === 'string' ?
					data
						.replace( _re_new_lines, " " )
						.replace( _re_html, "" ) :
					'';
		},
	
		string: function ( data ) {
			return _empty(data) ?
				data :
				typeof data === 'string' ?
					data.replace( _re_new_lines, " " ) :
					data;
		}
	} );
	
	
	
	var __numericReplace = function ( d, decimalPlace, re1, re2 ) {
		if ( d !== 0 && (!d || d === '-') ) {
			return -Infinity;
		}
	
		// If a decimal place other than `.` is used, it needs to be given to the
		// function so we can detect it and replace with a `.` which is the only
		// decimal place Javascript recognises - it is not locale aware.
		if ( decimalPlace ) {
			d = _numToDecimal( d, decimalPlace );
		}
	
		if ( d.replace ) {
			if ( re1 ) {
				d = d.replace( re1, '' );
			}
	
			if ( re2 ) {
				d = d.replace( re2, '' );
			}
		}
	
		return d * 1;
	};
	
	
	// Add the numeric 'deformatting' functions for sorting and search. This is done
	// in a function to provide an easy ability for the language options to add
	// additional methods if a non-period decimal place is used.
	function _addNumericSort ( decimalPlace ) {
		$.each(
			{
				// Plain numbers
				"num": function ( d ) {
					return __numericReplace( d, decimalPlace );
				},
	
				// Formatted numbers
				"num-fmt": function ( d ) {
					return __numericReplace( d, decimalPlace, _re_formatted_numeric );
				},
	
				// HTML numeric
				"html-num": function ( d ) {
					return __numericReplace( d, decimalPlace, _re_html );
				},
	
				// HTML numeric, formatted
				"html-num-fmt": function ( d ) {
					return __numericReplace( d, decimalPlace, _re_html, _re_formatted_numeric );
				}
			},
			function ( key, fn ) {
				// Add the ordering method
				_ext.type.order[ key+decimalPlace+'-pre' ] = fn;
	
				// For HTML types add a search formatter that will strip the HTML
				if ( key.match(/^html\-/) ) {
					_ext.type.search[ key+decimalPlace ] = _ext.type.search.html;
				}
			}
		);
	}
	
	
	// Default sort methods
	$.extend( _ext.type.order, {
		// Dates
		"date-pre": function ( d ) {
			return Date.parse( d ) || -Infinity;
		},
	
		// html
		"html-pre": function ( a ) {
			return _empty(a) ?
				'' :
				a.replace ?
					a.replace( /<.*?>/g, "" ).toLowerCase() :
					a+'';
		},
	
		// string
		"string-pre": function ( a ) {
			// This is a little complex, but faster than always calling toString,
			// http://jsperf.com/tostring-v-check
			return _empty(a) ?
				'' :
				typeof a === 'string' ?
					a.toLowerCase() :
					! a.toString ?
						'' :
						a.toString();
		},
	
		// string-asc and -desc are retained only for compatibility with the old
		// sort methods
		"string-asc": function ( x, y ) {
			return ((x < y) ? -1 : ((x > y) ? 1 : 0));
		},
	
		"string-desc": function ( x, y ) {
			return ((x < y) ? 1 : ((x > y) ? -1 : 0));
		}
	} );
	
	
	// Numeric sorting types - order doesn't matter here
	_addNumericSort( '' );
	
	
	$.extend( true, DataTable.ext.renderer, {
		header: {
			_: function ( settings, cell, column, classes ) {
				// No additional mark-up required
				// Attach a sort listener to update on sort - note that using the
				// `DT` namespace will allow the event to be removed automatically
				// on destroy, while the `dt` namespaced event is the one we are
				// listening for
				$(settings.nTable).on( 'order.dt.DT', function ( e, ctx, sorting, columns ) {
					if ( settings !== ctx ) { // need to check this this is the host
						return;               // table, not a nested one
					}
	
					var colIdx = column.idx;
	
					cell
						.removeClass(
							column.sSortingClass +' '+
							classes.sSortAsc +' '+
							classes.sSortDesc
						)
						.addClass( columns[ colIdx ] == 'asc' ?
							classes.sSortAsc : columns[ colIdx ] == 'desc' ?
								classes.sSortDesc :
								column.sSortingClass
						);
				} );
			},
	
			jqueryui: function ( settings, cell, column, classes ) {
				$('<div/>')
					.addClass( classes.sSortJUIWrapper )
					.append( cell.contents() )
					.append( $('<span/>')
						.addClass( classes.sSortIcon+' '+column.sSortingClassJUI )
					)
					.appendTo( cell );
	
				// Attach a sort listener to update on sort
				$(settings.nTable).on( 'order.dt.DT', function ( e, ctx, sorting, columns ) {
					if ( settings !== ctx ) {
						return;
					}
	
					var colIdx = column.idx;
	
					cell
						.removeClass( classes.sSortAsc +" "+classes.sSortDesc )
						.addClass( columns[ colIdx ] == 'asc' ?
							classes.sSortAsc : columns[ colIdx ] == 'desc' ?
								classes.sSortDesc :
								column.sSortingClass
						);
	
					cell
						.find( 'span.'+classes.sSortIcon )
						.removeClass(
							classes.sSortJUIAsc +" "+
							classes.sSortJUIDesc +" "+
							classes.sSortJUI +" "+
							classes.sSortJUIAscAllowed +" "+
							classes.sSortJUIDescAllowed
						)
						.addClass( columns[ colIdx ] == 'asc' ?
							classes.sSortJUIAsc : columns[ colIdx ] == 'desc' ?
								classes.sSortJUIDesc :
								column.sSortingClassJUI
						);
				} );
			}
		}
	} );
	
	/*
	 * Public helper functions. These aren't used internally by DataTables, or
	 * called by any of the options passed into DataTables, but they can be used
	 * externally by developers working with DataTables. They are helper functions
	 * to make working with DataTables a little bit easier.
	 */
	
	var __htmlEscapeEntities = function ( d ) {
		return typeof d === 'string' ?
			d.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;') :
			d;
	};
	
	/**
	 * Helpers for `columns.render`.
	 *
	 * The options defined here can be used with the `columns.render` initialisation
	 * option to provide a display renderer. The following functions are defined:
	 *
	 * * `number` - Will format numeric data (defined by `columns.data`) for
	 *   display, retaining the original unformatted data for sorting and filtering.
	 *   It takes 5 parameters:
	 *   * `string` - Thousands grouping separator
	 *   * `string` - Decimal point indicator
	 *   * `integer` - Number of decimal points to show
	 *   * `string` (optional) - Prefix.
	 *   * `string` (optional) - Postfix (/suffix).
	 * * `text` - Escape HTML to help prevent XSS attacks. It has no optional
	 *   parameters.
	 *
	 * @example
	 *   // Column definition using the number renderer
	 *   {
	 *     data: "salary",
	 *     render: $.fn.dataTable.render.number( '\'', '.', 0, '$' )
	 *   }
	 *
	 * @namespace
	 */
	DataTable.render = {
		number: function ( thousands, decimal, precision, prefix, postfix ) {
			return {
				display: function ( d ) {
					if ( typeof d !== 'number' && typeof d !== 'string' ) {
						return d;
					}
	
					var negative = d < 0 ? '-' : '';
					var flo = parseFloat( d );
	
					// If NaN then there isn't much formatting that we can do - just
					// return immediately, escaping any HTML (this was supposed to
					// be a number after all)
					if ( isNaN( flo ) ) {
						return __htmlEscapeEntities( d );
					}
	
					flo = flo.toFixed( precision );
					d = Math.abs( flo );
	
					var intPart = parseInt( d, 10 );
					var floatPart = precision ?
						decimal+(d - intPart).toFixed( precision ).substring( 2 ):
						'';
	
					return negative + (prefix||'') +
						intPart.toString().replace(
							/\B(?=(\d{3})+(?!\d))/g, thousands
						) +
						floatPart +
						(postfix||'');
				}
			};
		},
	
		text: function () {
			return {
				display: __htmlEscapeEntities
			};
		}
	};
	
	
	/*
	 * This is really a good bit rubbish this method of exposing the internal methods
	 * publicly... - To be fixed in 2.0 using methods on the prototype
	 */
	
	
	/**
	 * Create a wrapper function for exporting an internal functions to an external API.
	 *  @param {string} fn API function name
	 *  @returns {function} wrapped function
	 *  @memberof DataTable#internal
	 */
	function _fnExternApiFunc (fn)
	{
		return function() {
			var args = [_fnSettingsFromNode( this[DataTable.ext.iApiIndex] )].concat(
				Array.prototype.slice.call(arguments)
			);
			return DataTable.ext.internal[fn].apply( this, args );
		};
	}
	
	
	/**
	 * Reference to internal functions for use by plug-in developers. Note that
	 * these methods are references to internal functions and are considered to be
	 * private. If you use these methods, be aware that they are liable to change
	 * between versions.
	 *  @namespace
	 */
	$.extend( DataTable.ext.internal, {
		_fnExternApiFunc: _fnExternApiFunc,
		_fnBuildAjax: _fnBuildAjax,
		_fnAjaxUpdate: _fnAjaxUpdate,
		_fnAjaxParameters: _fnAjaxParameters,
		_fnAjaxUpdateDraw: _fnAjaxUpdateDraw,
		_fnAjaxDataSrc: _fnAjaxDataSrc,
		_fnAddColumn: _fnAddColumn,
		_fnColumnOptions: _fnColumnOptions,
		_fnAdjustColumnSizing: _fnAdjustColumnSizing,
		_fnVisibleToColumnIndex: _fnVisibleToColumnIndex,
		_fnColumnIndexToVisible: _fnColumnIndexToVisible,
		_fnVisbleColumns: _fnVisbleColumns,
		_fnGetColumns: _fnGetColumns,
		_fnColumnTypes: _fnColumnTypes,
		_fnApplyColumnDefs: _fnApplyColumnDefs,
		_fnHungarianMap: _fnHungarianMap,
		_fnCamelToHungarian: _fnCamelToHungarian,
		_fnLanguageCompat: _fnLanguageCompat,
		_fnBrowserDetect: _fnBrowserDetect,
		_fnAddData: _fnAddData,
		_fnAddTr: _fnAddTr,
		_fnNodeToDataIndex: _fnNodeToDataIndex,
		_fnNodeToColumnIndex: _fnNodeToColumnIndex,
		_fnGetCellData: _fnGetCellData,
		_fnSetCellData: _fnSetCellData,
		_fnSplitObjNotation: _fnSplitObjNotation,
		_fnGetObjectDataFn: _fnGetObjectDataFn,
		_fnSetObjectDataFn: _fnSetObjectDataFn,
		_fnGetDataMaster: _fnGetDataMaster,
		_fnClearTable: _fnClearTable,
		_fnDeleteIndex: _fnDeleteIndex,
		_fnInvalidate: _fnInvalidate,
		_fnGetRowElements: _fnGetRowElements,
		_fnCreateTr: _fnCreateTr,
		_fnBuildHead: _fnBuildHead,
		_fnDrawHead: _fnDrawHead,
		_fnDraw: _fnDraw,
		_fnReDraw: _fnReDraw,
		_fnAddOptionsHtml: _fnAddOptionsHtml,
		_fnDetectHeader: _fnDetectHeader,
		_fnGetUniqueThs: _fnGetUniqueThs,
		_fnFeatureHtmlFilter: _fnFeatureHtmlFilter,
		_fnFilterComplete: _fnFilterComplete,
		_fnFilterCustom: _fnFilterCustom,
		_fnFilterColumn: _fnFilterColumn,
		_fnFilter: _fnFilter,
		_fnFilterCreateSearch: _fnFilterCreateSearch,
		_fnEscapeRegex: _fnEscapeRegex,
		_fnFilterData: _fnFilterData,
		_fnFeatureHtmlInfo: _fnFeatureHtmlInfo,
		_fnUpdateInfo: _fnUpdateInfo,
		_fnInfoMacros: _fnInfoMacros,
		_fnInitialise: _fnInitialise,
		_fnInitComplete: _fnInitComplete,
		_fnLengthChange: _fnLengthChange,
		_fnFeatureHtmlLength: _fnFeatureHtmlLength,
		_fnFeatureHtmlPaginate: _fnFeatureHtmlPaginate,
		_fnPageChange: _fnPageChange,
		_fnFeatureHtmlProcessing: _fnFeatureHtmlProcessing,
		_fnProcessingDisplay: _fnProcessingDisplay,
		_fnFeatureHtmlTable: _fnFeatureHtmlTable,
		_fnScrollDraw: _fnScrollDraw,
		_fnApplyToChildren: _fnApplyToChildren,
		_fnCalculateColumnWidths: _fnCalculateColumnWidths,
		_fnThrottle: _fnThrottle,
		_fnConvertToWidth: _fnConvertToWidth,
		_fnGetWidestNode: _fnGetWidestNode,
		_fnGetMaxLenString: _fnGetMaxLenString,
		_fnStringToCss: _fnStringToCss,
		_fnSortFlatten: _fnSortFlatten,
		_fnSort: _fnSort,
		_fnSortAria: _fnSortAria,
		_fnSortListener: _fnSortListener,
		_fnSortAttachListener: _fnSortAttachListener,
		_fnSortingClasses: _fnSortingClasses,
		_fnSortData: _fnSortData,
		_fnSaveState: _fnSaveState,
		_fnLoadState: _fnLoadState,
		_fnSettingsFromNode: _fnSettingsFromNode,
		_fnLog: _fnLog,
		_fnMap: _fnMap,
		_fnBindAction: _fnBindAction,
		_fnCallbackReg: _fnCallbackReg,
		_fnCallbackFire: _fnCallbackFire,
		_fnLengthOverflow: _fnLengthOverflow,
		_fnRenderer: _fnRenderer,
		_fnDataSource: _fnDataSource,
		_fnRowAttributes: _fnRowAttributes,
		_fnCalculateEnd: function () {} // Used by a lot of plug-ins, but redundant
		                                // in 1.10, so this dead-end function is
		                                // added to prevent errors
	} );
	

	// jQuery access
	$.fn.dataTable = DataTable;

	// Provide access to the host jQuery object (circular reference)
	DataTable.$ = $;

	// Legacy aliases
	$.fn.dataTableSettings = DataTable.settings;
	$.fn.dataTableExt = DataTable.ext;

	// With a capital `D` we return a DataTables API instance rather than a
	// jQuery object
	$.fn.DataTable = function ( opts ) {
		return $(this).dataTable( opts ).api();
	};

	// All properties that are available to $.fn.dataTable should also be
	// available on $.fn.DataTable
	$.each( DataTable, function ( prop, val ) {
		$.fn.DataTable[ prop ] = val;
	} );


	// Information about events fired by DataTables - for documentation.
	/**
	 * Draw event, fired whenever the table is redrawn on the page, at the same
	 * point as fnDrawCallback. This may be useful for binding events or
	 * performing calculations when the table is altered at all.
	 *  @name DataTable#draw.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 */

	/**
	 * Search event, fired when the searching applied to the table (using the
	 * built-in global search, or column filters) is altered.
	 *  @name DataTable#search.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 */

	/**
	 * Page change event, fired when the paging of the table is altered.
	 *  @name DataTable#page.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 */

	/**
	 * Order event, fired when the ordering applied to the table is altered.
	 *  @name DataTable#order.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 */

	/**
	 * DataTables initialisation complete event, fired when the table is fully
	 * drawn, including Ajax data loaded, if Ajax data is required.
	 *  @name DataTable#init.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} oSettings DataTables settings object
	 *  @param {object} json The JSON object request from the server - only
	 *    present if client-side Ajax sourced data is used</li></ol>
	 */

	/**
	 * State save event, fired when the table has changed state a new state save
	 * is required. This event allows modification of the state saving object
	 * prior to actually doing the save, including addition or other state
	 * properties (for plug-ins) or modification of a DataTables core property.
	 *  @name DataTable#stateSaveParams.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} oSettings DataTables settings object
	 *  @param {object} json The state information to be saved
	 */

	/**
	 * State load event, fired when the table is loading state from the stored
	 * data, but prior to the settings object being modified by the saved state
	 * - allowing modification of the saved state is required or loading of
	 * state for a plug-in.
	 *  @name DataTable#stateLoadParams.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} oSettings DataTables settings object
	 *  @param {object} json The saved state information
	 */

	/**
	 * State loaded event, fired when state has been loaded from stored data and
	 * the settings object has been modified by the loaded data.
	 *  @name DataTable#stateLoaded.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} oSettings DataTables settings object
	 *  @param {object} json The saved state information
	 */

	/**
	 * Processing event, fired when DataTables is doing some kind of processing
	 * (be it, order, searcg or anything else). It can be used to indicate to
	 * the end user that there is something happening, or that something has
	 * finished.
	 *  @name DataTable#processing.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} oSettings DataTables settings object
	 *  @param {boolean} bShow Flag for if DataTables is doing processing or not
	 */

	/**
	 * Ajax (XHR) event, fired whenever an Ajax request is completed from a
	 * request to made to the server for new data. This event is called before
	 * DataTables processed the returned data, so it can also be used to pre-
	 * process the data returned from the server, if needed.
	 *
	 * Note that this trigger is called in `fnServerData`, if you override
	 * `fnServerData` and which to use this event, you need to trigger it in you
	 * success function.
	 *  @name DataTable#xhr.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 *  @param {object} json JSON returned from the server
	 *
	 *  @example
	 *     // Use a custom property returned from the server in another DOM element
	 *     $('#table').dataTable().on('xhr.dt', function (e, settings, json) {
	 *       $('#status').html( json.status );
	 *     } );
	 *
	 *  @example
	 *     // Pre-process the data returned from the server
	 *     $('#table').dataTable().on('xhr.dt', function (e, settings, json) {
	 *       for ( var i=0, ien=json.aaData.length ; i<ien ; i++ ) {
	 *         json.aaData[i].sum = json.aaData[i].one + json.aaData[i].two;
	 *       }
	 *       // Note no return - manipulate the data directly in the JSON object.
	 *     } );
	 */

	/**
	 * Destroy event, fired when the DataTable is destroyed by calling fnDestroy
	 * or passing the bDestroy:true parameter in the initialisation object. This
	 * can be used to remove bound events, added DOM nodes, etc.
	 *  @name DataTable#destroy.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 */

	/**
	 * Page length change event, fired when number of records to show on each
	 * page (the length) is changed.
	 *  @name DataTable#length.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 *  @param {integer} len New length
	 */

	/**
	 * Column sizing has changed.
	 *  @name DataTable#column-sizing.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 */

	/**
	 * Column visibility has changed.
	 *  @name DataTable#column-visibility.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 *  @param {int} column Column index
	 *  @param {bool} vis `false` if column now hidden, or `true` if visible
	 */

	return $.fn.dataTable;
}));

;/*!
 Buttons for DataTables 1.5.1
 ©2016-2017 SpryMedia Ltd - datatables.net/license
*/
(function(d){"function"===typeof define&&define.amd?define(["jquery","datatables.net"],function(o){return d(o,window,document)}):"object"===typeof exports?module.exports=function(o,n){o||(o=window);if(!n||!n.fn.dataTable)n=require("datatables.net")(o,n).$;return d(n,o,o.document)}:d(jQuery,window,document)})(function(d,o,n,l){var i=d.fn.dataTable,x=0,y=0,j=i.ext.buttons,m=function(a,b){"undefined"===typeof b&&(b={});!0===b&&(b={});d.isArray(b)&&(b={buttons:b});this.c=d.extend(!0,{},m.defaults,b);
b.buttons&&(this.c.buttons=b.buttons);this.s={dt:new i.Api(a),buttons:[],listenKeys:"",namespace:"dtb"+x++};this.dom={container:d("<"+this.c.dom.container.tag+"/>").addClass(this.c.dom.container.className)};this._constructor()};d.extend(m.prototype,{action:function(a,b){var c=this._nodeToButton(a);if(b===l)return c.conf.action;c.conf.action=b;return this},active:function(a,b){var c=this._nodeToButton(a),e=this.c.dom.button.active,c=d(c.node);if(b===l)return c.hasClass(e);c.toggleClass(e,b===l?!0:
b);return this},add:function(a,b){var c=this.s.buttons;if("string"===typeof b){for(var e=b.split("-"),c=this.s,d=0,g=e.length-1;d<g;d++)c=c.buttons[1*e[d]];c=c.buttons;b=1*e[e.length-1]}this._expandButton(c,a,!1,b);this._draw();return this},container:function(){return this.dom.container},disable:function(a){a=this._nodeToButton(a);d(a.node).addClass(this.c.dom.button.disabled);return this},destroy:function(){d("body").off("keyup."+this.s.namespace);var a=this.s.buttons.slice(),b,c;b=0;for(c=a.length;b<
c;b++)this.remove(a[b].node);this.dom.container.remove();a=this.s.dt.settings()[0];b=0;for(c=a.length;b<c;b++)if(a.inst===this){a.splice(b,1);break}return this},enable:function(a,b){if(!1===b)return this.disable(a);var c=this._nodeToButton(a);d(c.node).removeClass(this.c.dom.button.disabled);return this},name:function(){return this.c.name},node:function(a){a=this._nodeToButton(a);return d(a.node)},processing:function(a,b){var c=this._nodeToButton(a);if(b===l)return d(c.node).hasClass("processing");
d(c.node).toggleClass("processing",b);return this},remove:function(a){var b=this._nodeToButton(a),c=this._nodeToHost(a),e=this.s.dt;if(b.buttons.length)for(var h=b.buttons.length-1;0<=h;h--)this.remove(b.buttons[h].node);b.conf.destroy&&b.conf.destroy.call(e.button(a),e,d(a),b.conf);this._removeKey(b.conf);d(b.node).remove();a=d.inArray(b,c);c.splice(a,1);return this},text:function(a,b){var c=this._nodeToButton(a),e=this.c.dom.collection.buttonLiner,e=c.inCollection&&e&&e.tag?e.tag:this.c.dom.buttonLiner.tag,
h=this.s.dt,g=d(c.node),f=function(a){return"function"===typeof a?a(h,g,c.conf):a};if(b===l)return f(c.conf.text);c.conf.text=b;e?g.children(e).html(f(b)):g.html(f(b));return this},_constructor:function(){var a=this,b=this.s.dt,c=b.settings()[0],e=this.c.buttons;c._buttons||(c._buttons=[]);c._buttons.push({inst:this,name:this.c.name});for(var c=0,h=e.length;c<h;c++)this.add(e[c]);b.on("destroy",function(){a.destroy()});d("body").on("keyup."+this.s.namespace,function(b){if(!n.activeElement||n.activeElement===
n.body){var c=String.fromCharCode(b.keyCode).toLowerCase();a.s.listenKeys.toLowerCase().indexOf(c)!==-1&&a._keypress(c,b)}})},_addKey:function(a){a.key&&(this.s.listenKeys+=d.isPlainObject(a.key)?a.key.key:a.key)},_draw:function(a,b){a||(a=this.dom.container,b=this.s.buttons);a.children().detach();for(var c=0,e=b.length;c<e;c++)a.append(b[c].inserter),a.append(" "),b[c].buttons&&b[c].buttons.length&&this._draw(b[c].collection,b[c].buttons)},_expandButton:function(a,b,c,e){for(var h=this.s.dt,g=0,
b=!d.isArray(b)?[b]:b,f=0,q=b.length;f<q;f++){var k=this._resolveExtends(b[f]);if(k)if(d.isArray(k))this._expandButton(a,k,c,e);else{var p=this._buildButton(k,c);if(p){e!==l?(a.splice(e,0,p),e++):a.push(p);if(p.conf.buttons){var u=this.c.dom.collection;p.collection=d("<"+u.tag+"/>").addClass(u.className).attr("role","menu");p.conf._collection=p.collection;this._expandButton(p.buttons,p.conf.buttons,!0,e)}k.init&&k.init.call(h.button(p.node),h,d(p.node),k);g++}}}},_buildButton:function(a,b){var c=
this.c.dom.button,e=this.c.dom.buttonLiner,h=this.c.dom.collection,g=this.s.dt,f=function(b){return"function"===typeof b?b(g,k,a):b};b&&h.button&&(c=h.button);b&&h.buttonLiner&&(e=h.buttonLiner);if(a.available&&!a.available(g,a))return!1;var q=function(a,b,c,e){e.action.call(b.button(c),a,b,c,e);d(b.table().node()).triggerHandler("buttons-action.dt",[b.button(c),b,c,e])},k=d("<"+c.tag+"/>").addClass(c.className).attr("tabindex",this.s.dt.settings()[0].iTabIndex).attr("aria-controls",this.s.dt.table().node().id).on("click.dtb",
function(b){b.preventDefault();!k.hasClass(c.disabled)&&a.action&&q(b,g,k,a);k.blur()}).on("keyup.dtb",function(b){b.keyCode===13&&!k.hasClass(c.disabled)&&a.action&&q(b,g,k,a)});"a"===c.tag.toLowerCase()&&k.attr("href","#");e.tag?(h=d("<"+e.tag+"/>").html(f(a.text)).addClass(e.className),"a"===e.tag.toLowerCase()&&h.attr("href","#"),k.append(h)):k.html(f(a.text));!1===a.enabled&&k.addClass(c.disabled);a.className&&k.addClass(a.className);a.titleAttr&&k.attr("title",f(a.titleAttr));a.attr&&k.attr(a.attr);
a.namespace||(a.namespace=".dt-button-"+y++);e=(e=this.c.dom.buttonContainer)&&e.tag?d("<"+e.tag+"/>").addClass(e.className).append(k):k;this._addKey(a);return{conf:a,node:k.get(0),inserter:e,buttons:[],inCollection:b,collection:null}},_nodeToButton:function(a,b){b||(b=this.s.buttons);for(var c=0,e=b.length;c<e;c++){if(b[c].node===a)return b[c];if(b[c].buttons.length){var d=this._nodeToButton(a,b[c].buttons);if(d)return d}}},_nodeToHost:function(a,b){b||(b=this.s.buttons);for(var c=0,e=b.length;c<
e;c++){if(b[c].node===a)return b;if(b[c].buttons.length){var d=this._nodeToHost(a,b[c].buttons);if(d)return d}}},_keypress:function(a,b){if(!b._buttonsHandled){var c=function(e){for(var h=0,g=e.length;h<g;h++){var f=e[h].conf,q=e[h].node;if(f.key)if(f.key===a)b._buttonsHandled=!0,d(q).click();else if(d.isPlainObject(f.key)&&f.key.key===a&&(!f.key.shiftKey||b.shiftKey))if(!f.key.altKey||b.altKey)if(!f.key.ctrlKey||b.ctrlKey)if(!f.key.metaKey||b.metaKey)b._buttonsHandled=!0,d(q).click();e[h].buttons.length&&
c(e[h].buttons)}};c(this.s.buttons)}},_removeKey:function(a){if(a.key){var b=d.isPlainObject(a.key)?a.key.key:a.key,a=this.s.listenKeys.split(""),b=d.inArray(b,a);a.splice(b,1);this.s.listenKeys=a.join("")}},_resolveExtends:function(a){for(var b=this.s.dt,c,e,h=function(c){for(var e=0;!d.isPlainObject(c)&&!d.isArray(c);){if(c===l)return;if("function"===typeof c){if(c=c(b,a),!c)return!1}else if("string"===typeof c){if(!j[c])throw"Unknown button type: "+c;c=j[c]}e++;if(30<e)throw"Buttons: Too many iterations";
}return d.isArray(c)?c:d.extend({},c)},a=h(a);a&&a.extend;){if(!j[a.extend])throw"Cannot extend unknown button type: "+a.extend;var g=h(j[a.extend]);if(d.isArray(g))return g;if(!g)return!1;c=g.className;a=d.extend({},g,a);c&&a.className!==c&&(a.className=c+" "+a.className);var f=a.postfixButtons;if(f){a.buttons||(a.buttons=[]);c=0;for(e=f.length;c<e;c++)a.buttons.push(f[c]);a.postfixButtons=null}if(f=a.prefixButtons){a.buttons||(a.buttons=[]);c=0;for(e=f.length;c<e;c++)a.buttons.splice(c,0,f[c]);
a.prefixButtons=null}a.extend=g.extend}return a}});m.background=function(a,b,c){c===l&&(c=400);a?d("<div/>").addClass(b).css("display","none").appendTo("body").fadeIn(c):d("body > div."+b).fadeOut(c,function(){d(this).removeClass(b).remove()})};m.instanceSelector=function(a,b){if(!a)return d.map(b,function(a){return a.inst});var c=[],e=d.map(b,function(a){return a.name}),h=function(a){if(d.isArray(a))for(var f=0,q=a.length;f<q;f++)h(a[f]);else"string"===typeof a?-1!==a.indexOf(",")?h(a.split(",")):
(a=d.inArray(d.trim(a),e),-1!==a&&c.push(b[a].inst)):"number"===typeof a&&c.push(b[a].inst)};h(a);return c};m.buttonSelector=function(a,b){for(var c=[],e=function(a,b,c){for(var d,f,h=0,g=b.length;h<g;h++)if(d=b[h])f=c!==l?c+h:h+"",a.push({node:d.node,name:d.conf.name,idx:f}),d.buttons&&e(a,d.buttons,f+"-")},h=function(a,b){var f,g,i=[];e(i,b.s.buttons);f=d.map(i,function(a){return a.node});if(d.isArray(a)||a instanceof d){f=0;for(g=a.length;f<g;f++)h(a[f],b)}else if(null===a||a===l||"*"===a){f=0;
for(g=i.length;f<g;f++)c.push({inst:b,node:i[f].node})}else if("number"===typeof a)c.push({inst:b,node:b.s.buttons[a].node});else if("string"===typeof a)if(-1!==a.indexOf(",")){i=a.split(",");f=0;for(g=i.length;f<g;f++)h(d.trim(i[f]),b)}else if(a.match(/^\d+(\-\d+)*$/))f=d.map(i,function(a){return a.idx}),c.push({inst:b,node:i[d.inArray(a,f)].node});else if(-1!==a.indexOf(":name")){var j=a.replace(":name","");f=0;for(g=i.length;f<g;f++)i[f].name===j&&c.push({inst:b,node:i[f].node})}else d(f).filter(a).each(function(){c.push({inst:b,
node:this})});else"object"===typeof a&&a.nodeName&&(i=d.inArray(a,f),-1!==i&&c.push({inst:b,node:f[i]}))},g=0,f=a.length;g<f;g++)h(b,a[g]);return c};m.defaults={buttons:["copy","excel","csv","pdf","print"],name:"main",tabIndex:0,dom:{container:{tag:"div",className:"dt-buttons"},collection:{tag:"div",className:"dt-button-collection"},button:{tag:"button",className:"dt-button",active:"active",disabled:"disabled"},buttonLiner:{tag:"span",className:""}}};m.version="1.5.1";d.extend(j,{collection:{text:function(a){return a.i18n("buttons.collection",
"Collection")},className:"buttons-collection",action:function(a,b,c,e){var h=d(c).parents("div.dt-button-collection"),a=c.position(),g=d(b.table().container()),f=!1,i=c;h.length&&(f=d(".dt-button-collection").position(),i=h,d("body").trigger("click.dtb-collection"));e._collection.addClass(e.collectionLayout).css("display","none").insertAfter(i).fadeIn(e.fade);h=e._collection.css("position");f&&"absolute"===h?e._collection.css({top:f.top,left:f.left}):"absolute"===h?(e._collection.css({top:a.top+c.outerHeight(),
left:a.left}),f=g.offset().top+g.height(),c=a.top+c.outerHeight()+e._collection.outerHeight()-f,f=a.top-e._collection.outerHeight(),f=g.offset().top-f,c>f&&e._collection.css("top",a.top-e._collection.outerHeight()-5),c=a.left+e._collection.outerWidth(),g=g.offset().left+g.width(),c>g&&e._collection.css("left",a.left-(c-g))):(a=e._collection.height()/2,a>d(o).height()/2&&(a=d(o).height()/2),e._collection.css("marginTop",-1*a));e.background&&m.background(!0,e.backgroundClassName,e.fade);setTimeout(function(){d("div.dt-button-background").on("click.dtb-collection",
function(){});d("body").on("click.dtb-collection",function(a){var c=d.fn.addBack?"addBack":"andSelf";if(!d(a.target).parents()[c]().filter(e._collection).length){e._collection.fadeOut(e.fade,function(){e._collection.detach()});d("div.dt-button-background").off("click.dtb-collection");m.background(false,e.backgroundClassName,e.fade);d("body").off("click.dtb-collection");b.off("buttons-action.b-internal")}})},10);if(e.autoClose)b.on("buttons-action.b-internal",function(){d("div.dt-button-background").click()})},
background:!0,collectionLayout:"",backgroundClassName:"dt-button-background",autoClose:!1,fade:400,attr:{"aria-haspopup":!0}},copy:function(a,b){if(j.copyHtml5)return"copyHtml5";if(j.copyFlash&&j.copyFlash.available(a,b))return"copyFlash"},csv:function(a,b){if(j.csvHtml5&&j.csvHtml5.available(a,b))return"csvHtml5";if(j.csvFlash&&j.csvFlash.available(a,b))return"csvFlash"},excel:function(a,b){if(j.excelHtml5&&j.excelHtml5.available(a,b))return"excelHtml5";if(j.excelFlash&&j.excelFlash.available(a,
b))return"excelFlash"},pdf:function(a,b){if(j.pdfHtml5&&j.pdfHtml5.available(a,b))return"pdfHtml5";if(j.pdfFlash&&j.pdfFlash.available(a,b))return"pdfFlash"},pageLength:function(a){var a=a.settings()[0].aLengthMenu,b=d.isArray(a[0])?a[0]:a,c=d.isArray(a[0])?a[1]:a,e=function(a){return a.i18n("buttons.pageLength",{"-1":"Show all rows",_:"Show %d rows"},a.page.len())};return{extend:"collection",text:e,className:"buttons-page-length",autoClose:!0,buttons:d.map(b,function(a,b){return{text:c[b],className:"button-page-length",
action:function(b,c){c.page.len(a).draw()},init:function(b,c,d){var e=this,c=function(){e.active(b.page.len()===a)};b.on("length.dt"+d.namespace,c);c()},destroy:function(a,b,c){a.off("length.dt"+c.namespace)}}}),init:function(a,b,c){var d=this;a.on("length.dt"+c.namespace,function(){d.text(e(a))})},destroy:function(a,b,c){a.off("length.dt"+c.namespace)}}}});i.Api.register("buttons()",function(a,b){b===l&&(b=a,a=l);this.selector.buttonGroup=a;var c=this.iterator(!0,"table",function(c){if(c._buttons)return m.buttonSelector(m.instanceSelector(a,
c._buttons),b)},!0);c._groupSelector=a;return c});i.Api.register("button()",function(a,b){var c=this.buttons(a,b);1<c.length&&c.splice(1,c.length);return c});i.Api.registerPlural("buttons().active()","button().active()",function(a){return a===l?this.map(function(a){return a.inst.active(a.node)}):this.each(function(b){b.inst.active(b.node,a)})});i.Api.registerPlural("buttons().action()","button().action()",function(a){return a===l?this.map(function(a){return a.inst.action(a.node)}):this.each(function(b){b.inst.action(b.node,
a)})});i.Api.register(["buttons().enable()","button().enable()"],function(a){return this.each(function(b){b.inst.enable(b.node,a)})});i.Api.register(["buttons().disable()","button().disable()"],function(){return this.each(function(a){a.inst.disable(a.node)})});i.Api.registerPlural("buttons().nodes()","button().node()",function(){var a=d();d(this.each(function(b){a=a.add(b.inst.node(b.node))}));return a});i.Api.registerPlural("buttons().processing()","button().processing()",function(a){return a===
l?this.map(function(a){return a.inst.processing(a.node)}):this.each(function(b){b.inst.processing(b.node,a)})});i.Api.registerPlural("buttons().text()","button().text()",function(a){return a===l?this.map(function(a){return a.inst.text(a.node)}):this.each(function(b){b.inst.text(b.node,a)})});i.Api.registerPlural("buttons().trigger()","button().trigger()",function(){return this.each(function(a){a.inst.node(a.node).trigger("click")})});i.Api.registerPlural("buttons().containers()","buttons().container()",
function(){var a=d(),b=this._groupSelector;this.iterator(!0,"table",function(c){if(c._buttons)for(var c=m.instanceSelector(b,c._buttons),d=0,h=c.length;d<h;d++)a=a.add(c[d].container())});return a});i.Api.register("button().add()",function(a,b){var c=this.context;c.length&&(c=m.instanceSelector(this._groupSelector,c[0]._buttons),c.length&&c[0].add(b,a));return this.button(this._groupSelector,a)});i.Api.register("buttons().destroy()",function(){this.pluck("inst").unique().each(function(a){a.destroy()});
return this});i.Api.registerPlural("buttons().remove()","buttons().remove()",function(){this.each(function(a){a.inst.remove(a.node)});return this});var r;i.Api.register("buttons.info()",function(a,b,c){var e=this;if(!1===a)return d("#datatables_buttons_info").fadeOut(function(){d(this).remove()}),clearTimeout(r),r=null,this;r&&clearTimeout(r);d("#datatables_buttons_info").length&&d("#datatables_buttons_info").remove();d('<div id="datatables_buttons_info" class="dt-button-info"/>').html(a?"<h2>"+a+
"</h2>":"").append(d("<div/>")["string"===typeof b?"html":"append"](b)).css("display","none").appendTo("body").fadeIn();c!==l&&0!==c&&(r=setTimeout(function(){e.buttons.info(!1)},c));return this});i.Api.register("buttons.exportData()",function(a){if(this.context.length){var b=new i.Api(this.context[0]),c=d.extend(!0,{},{rows:null,columns:"",modifier:{search:"applied",order:"applied"},orthogonal:"display",stripHtml:!0,stripNewlines:!0,decodeEntities:!0,trim:!0,format:{header:function(a){return e(a)},
footer:function(a){return e(a)},body:function(a){return e(a)}}},a),e=function(a){if("string"!==typeof a)return a;a=a.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,"");c.stripHtml&&(a=a.replace(/<[^>]*>/g,""));c.trim&&(a=a.replace(/^\s+|\s+$/g,""));c.stripNewlines&&(a=a.replace(/\n/g," "));c.decodeEntities&&(v.innerHTML=a,a=v.value);return a},a=b.columns(c.columns).indexes().map(function(a){var d=b.column(a).header();return c.format.header(d.innerHTML,a,d)}).toArray(),h=b.table().footer()?
b.columns(c.columns).indexes().map(function(a){var d=b.column(a).footer();return c.format.footer(d?d.innerHTML:"",a,d)}).toArray():null,g=d.extend({},c.modifier);b.select&&"function"===typeof b.select.info&&g.selected===l&&b.rows(c.rows,d.extend({selected:!0},g)).any()&&d.extend(g,{selected:!0});for(var g=b.rows(c.rows,g).indexes().toArray(),f=b.cells(g,c.columns),g=f.render(c.orthogonal).toArray(),f=f.nodes().toArray(),j=a.length,k=0<j?g.length/j:0,m=[k],o=0,n=0;n<k;n++){for(var r=[j],s=0;s<j;s++)r[s]=
c.format.body(g[o],n,s,f[o]),o++;m[n]=r}return{header:a,footer:h,body:m}}});i.Api.register("buttons.exportInfo()",function(a){a||(a={});var b;var c=a;b="*"===c.filename&&"*"!==c.title&&c.title!==l&&null!==c.title&&""!==c.title?c.title:c.filename;"function"===typeof b&&(b=b());b===l||null===b?b=null:(-1!==b.indexOf("*")&&(b=d.trim(b.replace("*",d("head > title").text()))),b=b.replace(/[^a-zA-Z0-9_\u00A1-\uFFFF\.,\-_ !\(\)]/g,""),(c=t(c.extension))||(c=""),b+=c);c=t(a.title);c=null===c?null:-1!==c.indexOf("*")?
c.replace("*",d("head > title").text()||"Exported data"):c;return{filename:b,title:c,messageTop:w(this,a.message||a.messageTop,"top"),messageBottom:w(this,a.messageBottom,"bottom")}});var t=function(a){return null===a||a===l?null:"function"===typeof a?a():a},w=function(a,b,c){b=t(b);if(null===b)return null;a=d("caption",a.table().container()).eq(0);return"*"===b?a.css("caption-side")!==c?null:a.length?a.text():"":b},v=d("<textarea/>")[0];d.fn.dataTable.Buttons=m;d.fn.DataTable.Buttons=m;d(n).on("init.dt plugin-init.dt",
function(a,b){if("dt"===a.namespace){var c=b.oInit.buttons||i.defaults.buttons;c&&!b._buttons&&(new m(b,c)).container()}});i.ext.feature.push({fnInit:function(a){var a=new i.Api(a),b=a.init().buttons||i.defaults.buttons;return(new m(a,b)).container()},cFeature:"B"});return m});

;(function(g){"function"===typeof define&&define.amd?define(["jquery","datatables.net","datatables.net-buttons"],function(k){return g(k,window,document)}):"object"===typeof exports?module.exports=function(k,l){k||(k=window);if(!l||!l.fn.dataTable)l=require("datatables.net")(k,l).$;l.fn.dataTable.Buttons||require("datatables.net-buttons")(k,l);return g(l,k,k.document)}:g(jQuery,window,document)})(function(g,k,l,q){function v(a){for(var b="";0<=a;)b=String.fromCharCode(a%26+65)+b,a=Math.floor(a/26)-
1;return b}function n(a,b,d){var c=a.createElement(b);d&&(d.attr&&g(c).attr(d.attr),d.children&&g.each(d.children,function(a,b){c.appendChild(b)}),null!==d.text&&d.text!==q&&c.appendChild(a.createTextNode(d.text)));return c}function B(a,b){var d=a.header[b].length,c;a.footer&&a.footer[b].length>d&&(d=a.footer[b].length);for(var e=0,f=a.body.length;e<f;e++)if(c=a.body[e][b],c=null!==c&&c!==q?c.toString():"",-1!==c.indexOf("\n")?(c=c.split("\n"),c.sort(function(a,b){return b.length-a.length}),c=c[0].length):
c=c.length,c>d&&(d=c),40<d)return 52;d*=1.3;return 6<d?d:6}function w(a){o===q&&(o=-1===u.serializeToString(g.parseXML(p["xl/worksheets/sheet1.xml"])).indexOf("xmlns:r"));g.each(a,function(b,d){if(g.isPlainObject(d))w(d);else{if(o){var c=d.childNodes[0],e,f,i=[];for(e=c.attributes.length-1;0<=e;e--){f=c.attributes[e].nodeName;var j=c.attributes[e].nodeValue;-1!==f.indexOf(":")&&(i.push({name:f,value:j}),c.removeAttribute(f))}e=0;for(f=i.length;e<f;e++)j=d.createAttribute(i[e].name.replace(":","_dt_b_namespace_token_")),
j.value=i[e].value,c.setAttributeNode(j)}c=u.serializeToString(d);o&&(-1===c.indexOf("<?xml")&&(c='<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'+c),c=c.replace(/_dt_b_namespace_token_/g,":"));c=c.replace(/<([^<>]*?) xmlns=""([^<>]*?)>/g,"<$1 $2>");a[b]=c}})}var h=g.fn.dataTable,i={version:"1.0.4-TableTools2",clients:{},moviePath:"",nextId:1,$:function(a){"string"==typeof a&&(a=l.getElementById(a));a.addClass||(a.hide=function(){this.style.display="none"},a.show=function(){this.style.display=
""},a.addClass=function(a){this.removeClass(a);this.className+=" "+a},a.removeClass=function(a){this.className=this.className.replace(RegExp("\\s*"+a+"\\s*")," ").replace(/^\s+/,"").replace(/\s+$/,"")},a.hasClass=function(a){return!!this.className.match(RegExp("\\s*"+a+"\\s*"))});return a},setMoviePath:function(a){this.moviePath=a},dispatch:function(a,b,d){(a=this.clients[a])&&a.receiveEvent(b,d)},log:function(a){console.log("Flash: "+a)},register:function(a,b){this.clients[a]=b},getDOMObjectPosition:function(a){var b=
{left:0,top:0,width:a.width?a.width:a.offsetWidth,height:a.height?a.height:a.offsetHeight};""!==a.style.width&&(b.width=a.style.width.replace("px",""));""!==a.style.height&&(b.height=a.style.height.replace("px",""));for(;a;)b.left+=a.offsetLeft,b.top+=a.offsetTop,a=a.offsetParent;return b},Client:function(a){this.handlers={};this.id=i.nextId++;this.movieId="ZeroClipboard_TableToolsMovie_"+this.id;i.register(this.id,this);a&&this.glue(a)}};i.Client.prototype={id:0,ready:!1,movie:null,clipText:"",fileName:"",
action:"copy",handCursorEnabled:!0,cssEffects:!0,handlers:null,sized:!1,sheetName:"",glue:function(a,b){this.domElement=i.$(a);var d=99;this.domElement.style.zIndex&&(d=parseInt(this.domElement.style.zIndex,10)+1);var c=i.getDOMObjectPosition(this.domElement);this.div=l.createElement("div");var e=this.div.style;e.position="absolute";e.left="0px";e.top="0px";e.width=c.width+"px";e.height=c.height+"px";e.zIndex=d;"undefined"!=typeof b&&""!==b&&(this.div.title=b);0!==c.width&&0!==c.height&&(this.sized=
!0);this.domElement&&(this.domElement.appendChild(this.div),this.div.innerHTML=this.getHTML(c.width,c.height).replace(/&/g,"&amp;"))},positionElement:function(){var a=i.getDOMObjectPosition(this.domElement),b=this.div.style;b.position="absolute";b.width=a.width+"px";b.height=a.height+"px";0!==a.width&&0!==a.height&&(this.sized=!0,b=this.div.childNodes[0],b.width=a.width,b.height=a.height)},getHTML:function(a,b){var d="",c="id="+this.id+"&width="+a+"&height="+b;if(navigator.userAgent.match(/MSIE/))var e=
location.href.match(/^https/i)?"https://":"http://",d=d+('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="'+e+'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0" width="'+a+'" height="'+b+'" id="'+this.movieId+'" align="middle"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="'+i.moviePath+'" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashvars" value="'+
c+'"/><param name="wmode" value="transparent"/></object>');else d+='<embed id="'+this.movieId+'" src="'+i.moviePath+'" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="'+a+'" height="'+b+'" name="'+this.movieId+'" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="'+c+'" wmode="transparent" />';return d},hide:function(){this.div&&(this.div.style.left="-2000px")},
show:function(){this.reposition()},destroy:function(){var a=this;this.domElement&&this.div&&(g(this.div).remove(),this.div=this.domElement=null,g.each(i.clients,function(b,d){d===a&&delete i.clients[b]}))},reposition:function(a){a&&((this.domElement=i.$(a))||this.hide());if(this.domElement&&this.div){var a=i.getDOMObjectPosition(this.domElement),b=this.div.style;b.left=""+a.left+"px";b.top=""+a.top+"px"}},clearText:function(){this.clipText="";this.ready&&this.movie.clearText()},appendText:function(a){this.clipText+=
a;this.ready&&this.movie.appendText(a)},setText:function(a){this.clipText=a;this.ready&&this.movie.setText(a)},setFileName:function(a){this.fileName=a;this.ready&&this.movie.setFileName(a)},setSheetData:function(a){this.ready&&this.movie.setSheetData(JSON.stringify(a))},setAction:function(a){this.action=a;this.ready&&this.movie.setAction(a)},addEventListener:function(a,b){a=a.toString().toLowerCase().replace(/^on/,"");this.handlers[a]||(this.handlers[a]=[]);this.handlers[a].push(b)},setHandCursor:function(a){this.handCursorEnabled=
a;this.ready&&this.movie.setHandCursor(a)},setCSSEffects:function(a){this.cssEffects=!!a},receiveEvent:function(a,b){var d,a=a.toString().toLowerCase().replace(/^on/,"");switch(a){case "load":this.movie=l.getElementById(this.movieId);if(!this.movie){d=this;setTimeout(function(){d.receiveEvent("load",null)},1);return}if(!this.ready&&navigator.userAgent.match(/Firefox/)&&navigator.userAgent.match(/Windows/)){d=this;setTimeout(function(){d.receiveEvent("load",null)},100);this.ready=!0;return}this.ready=
!0;this.movie.clearText();this.movie.appendText(this.clipText);this.movie.setFileName(this.fileName);this.movie.setAction(this.action);this.movie.setHandCursor(this.handCursorEnabled);break;case "mouseover":this.domElement&&this.cssEffects&&this.recoverActive&&this.domElement.addClass("active");break;case "mouseout":this.domElement&&this.cssEffects&&(this.recoverActive=!1,this.domElement.hasClass("active")&&(this.domElement.removeClass("active"),this.recoverActive=!0));break;case "mousedown":this.domElement&&
this.cssEffects&&this.domElement.addClass("active");break;case "mouseup":this.domElement&&this.cssEffects&&(this.domElement.removeClass("active"),this.recoverActive=!1)}if(this.handlers[a])for(var c=0,e=this.handlers[a].length;c<e;c++){var f=this.handlers[a][c];if("function"==typeof f)f(this,b);else if("object"==typeof f&&2==f.length)f[0][f[1]](this,b);else if("string"==typeof f)k[f](this,b)}}};i.hasFlash=function(){try{if(new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))return!0}catch(a){if(navigator.mimeTypes&&
navigator.mimeTypes["application/x-shockwave-flash"]!==q&&navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin)return!0}return!1};k.ZeroClipboard_TableTools=i;var x=function(a,b){b.attr("id");b.parents("html").length?a.glue(b[0],""):setTimeout(function(){x(a,b)},500)},C=function(a){var b="Sheet1";a.sheetName&&(b=a.sheetName.replace(/[\[\]\*\/\\\?\:]/g,""));return b},s=function(a,b){var d=b.match(/[\s\S]{1,8192}/g)||[];a.clearText();for(var c=0,e=d.length;c<e;c++)a.appendText(d[c])},
y=function(a){return a.newline?a.newline:navigator.userAgent.match(/Windows/)?"\r\n":"\n"},z=function(a,b){for(var d=y(b),c=a.buttons.exportData(b.exportOptions),e=b.fieldBoundary,f=b.fieldSeparator,g=RegExp(e,"g"),i=b.escapeChar!==q?b.escapeChar:"\\",k=function(a){for(var b="",c=0,d=a.length;c<d;c++)0<c&&(b+=f),b+=e?e+(""+a[c]).replace(g,i+e)+e:a[c];return b},l=b.header?k(c.header)+d:"",n=b.footer&&c.footer?d+k(c.footer):"",m=[],h=0,p=c.body.length;h<p;h++)m.push(k(c.body[h]));return{str:l+m.join(d)+
n,rows:m.length}},t={available:function(){return i.hasFlash()},init:function(a,b,d){i.moviePath=h.Buttons.swfPath;var c=new i.Client;c.setHandCursor(!0);c.addEventListener("mouseDown",function(){d._fromFlash=!0;a.button(b[0]).trigger();d._fromFlash=!1});x(c,b);d._flash=c},destroy:function(a,b,d){d._flash.destroy()},fieldSeparator:",",fieldBoundary:'"',exportOptions:{},title:"*",messageTop:"*",messageBottom:"*",filename:"*",extension:".csv",header:!0,footer:!1},u="",u="undefined"===typeof k.XMLSerializer?
new function(){this.serializeToString=function(a){return a.xml}}:new XMLSerializer,o,p={"_rels/.rels":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>',"xl/_rels/workbook.xml.rels":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>',
"[Content_Types].xml":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="xml" ContentType="application/xml" /><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml" /><Default Extension="jpeg" ContentType="image/jpeg" /><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" /><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" /><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml" /></Types>',
"xl/workbook.xml":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><fileVersion appName="xl" lastEdited="5" lowestEdited="5" rupBuild="24816"/><workbookPr showInkAnnotation="0" autoCompressPictures="0"/><bookViews><workbookView xWindow="0" yWindow="0" windowWidth="25600" windowHeight="19020" tabRatio="500"/></bookViews><sheets><sheet name="" sheetId="1" r:id="rId1"/></sheets></workbook>',
"xl/worksheets/sheet1.xml":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><sheetData/><mergeCells count="0"/></worksheet>',"xl/styles.xml":'<?xml version="1.0" encoding="UTF-8"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><numFmts count="6"><numFmt numFmtId="164" formatCode="#,##0.00_- [$$-45C]"/><numFmt numFmtId="165" formatCode="&quot;£&quot;#,##0.00"/><numFmt numFmtId="166" formatCode="[$€-2] #,##0.00"/><numFmt numFmtId="167" formatCode="0.0%"/><numFmt numFmtId="168" formatCode="#,##0;(#,##0)"/><numFmt numFmtId="169" formatCode="#,##0.00;(#,##0.00)"/></numFmts><fonts count="5" x14ac:knownFonts="1"><font><sz val="11" /><name val="Calibri" /></font><font><sz val="11" /><name val="Calibri" /><color rgb="FFFFFFFF" /></font><font><sz val="11" /><name val="Calibri" /><b /></font><font><sz val="11" /><name val="Calibri" /><i /></font><font><sz val="11" /><name val="Calibri" /><u /></font></fonts><fills count="6"><fill><patternFill patternType="none" /></fill><fill><patternFill patternType="none" /></fill><fill><patternFill patternType="solid"><fgColor rgb="FFD9D9D9" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFD99795" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6efce" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6cfef" /><bgColor indexed="64" /></patternFill></fill></fills><borders count="2"><border><left /><right /><top /><bottom /><diagonal /></border><border diagonalUp="false" diagonalDown="false"><left style="thin"><color auto="1" /></left><right style="thin"><color auto="1" /></right><top style="thin"><color auto="1" /></top><bottom style="thin"><color auto="1" /></bottom><diagonal /></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" /></cellStyleXfs><cellXfs count="61"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="left"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="center"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="right"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="fill"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment textRotation="90"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment wrapText="1"/></xf><xf numFmtId="9"   fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="164" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="165" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="166" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="167" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="168" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="169" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="3" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="4" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0" /></cellStyles><dxfs count="0" /><tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4" /></styleSheet>'},
A=[{match:/^\-?\d+\.\d%$/,style:60,fmt:function(a){return a/100}},{match:/^\-?\d+\.?\d*%$/,style:56,fmt:function(a){return a/100}},{match:/^\-?\$[\d,]+.?\d*$/,style:57},{match:/^\-?£[\d,]+.?\d*$/,style:58},{match:/^\-?€[\d,]+.?\d*$/,style:59},{match:/^\([\d,]+\)$/,style:61,fmt:function(a){return-1*a.replace(/[\(\)]/g,"")}},{match:/^\([\d,]+\.\d{2}\)$/,style:62,fmt:function(a){return-1*a.replace(/[\(\)]/g,"")}},{match:/^[\d,]+$/,style:63},{match:/^[\d,]+\.\d{2}$/,style:64}];h.Buttons.swfPath="//cdn.datatables.net/buttons/"+
h.Buttons.version+"/swf/flashExport.swf";h.Api.register("buttons.resize()",function(){g.each(i.clients,function(a,b){b.domElement!==q&&b.domElement.parentNode&&b.positionElement()})});h.ext.buttons.copyFlash=g.extend({},t,{className:"buttons-copy buttons-flash",text:function(a){return a.i18n("buttons.copy","Copy")},action:function(a,b,d,c){if(c._fromFlash){this.processing(!0);var a=c._flash,e=z(b,c),d=b.buttons.exportInfo(c),f=y(c),e=e.str;d.title&&(e=d.title+f+f+e);d.messageTop&&(e=d.messageTop+
f+f+e);d.messageBottom&&(e=e+f+f+d.messageBottom);c.customize&&(e=c.customize(e,c));a.setAction("copy");s(a,e);this.processing(!1);b.buttons.info(b.i18n("buttons.copyTitle","Copy to clipboard"),b.i18n("buttons.copySuccess",{_:"Copied %d rows to clipboard",1:"Copied 1 row to clipboard"},data.rows),3E3)}},fieldSeparator:"\t",fieldBoundary:""});h.ext.buttons.csvFlash=g.extend({},t,{className:"buttons-csv buttons-flash",text:function(a){return a.i18n("buttons.csv","CSV")},action:function(a,b,d,c){a=c._flash;
b=z(b,c);b=c.customize?c.customize(b.str,c):b.str;a.setAction("csv");a.setFileName(_filename(c));s(a,b)},escapeChar:'"'});h.ext.buttons.excelFlash=g.extend({},t,{className:"buttons-excel buttons-flash",text:function(a){return a.i18n("buttons.excel","Excel")},action:function(a,b,d,c){this.processing(!0);var a=c._flash,e=0,f=g.parseXML(p["xl/worksheets/sheet1.xml"]),i=f.getElementsByTagName("sheetData")[0],d={_rels:{".rels":g.parseXML(p["_rels/.rels"])},xl:{_rels:{"workbook.xml.rels":g.parseXML(p["xl/_rels/workbook.xml.rels"])},
"workbook.xml":g.parseXML(p["xl/workbook.xml"]),"styles.xml":g.parseXML(p["xl/styles.xml"]),worksheets:{"sheet1.xml":f}},"[Content_Types].xml":g.parseXML(p["[Content_Types].xml"])},j=b.buttons.exportData(c.exportOptions),k,l,h=function(a){k=e+1;l=n(f,"row",{attr:{r:k}});for(var b=0,d=a.length;b<d;b++){var h=v(b)+""+k,j=null;if(null===a[b]||a[b]===q||""===a[b])if(!0===c.createEmptyCells)a[b]="";else continue;a[b]=g.trim(a[b]);for(var m=0,p=A.length;m<p;m++){var o=A[m];if(a[b].match&&!a[b].match(/^0\d+/)&&
a[b].match(o.match)){j=a[b].replace(/[^\d\.\-]/g,"");o.fmt&&(j=o.fmt(j));j=n(f,"c",{attr:{r:h,s:o.style},children:[n(f,"v",{text:j})]});break}}j||("number"===typeof a[b]||a[b].match&&a[b].match(/^-?\d+(\.\d+)?$/)&&!a[b].match(/^0\d+/)?j=n(f,"c",{attr:{t:"n",r:h},children:[n(f,"v",{text:a[b]})]}):(o=!a[b].replace?a[b]:a[b].replace(/[\x00-\x09\x0B\x0C\x0E-\x1F\x7F-\x9F]/g,""),j=n(f,"c",{attr:{t:"inlineStr",r:h},children:{row:n(f,"is",{children:{row:n(f,"t",{text:o})}})}})));l.appendChild(j)}i.appendChild(l);
e++};g("sheets sheet",d.xl["workbook.xml"]).attr("name",C(c));c.customizeData&&c.customizeData(j);var m=function(a,b){var c=g("mergeCells",f);c[0].appendChild(n(f,"mergeCell",{attr:{ref:"A"+a+":"+v(b)+a}}));c.attr("count",c.attr("count")+1);g("row:eq("+(a-1)+") c",f).attr("s","51")},b=b.buttons.exportInfo(c);b.title&&(h([b.title],e),m(e,j.header.length-1));b.messageTop&&(h([b.messageTop],e),m(e,j.header.length-1));c.header&&(h(j.header,e),g("row:last c",f).attr("s","2"));for(var r=0,o=j.body.length;r<
o;r++)h(j.body[r],e);c.footer&&j.footer&&(h(j.footer,e),g("row:last c",f).attr("s","2"));b.messageBottom&&(h([b.messageBottom],e),m(e,j.header.length-1));h=n(f,"cols");g("worksheet",f).prepend(h);m=0;for(r=j.header.length;m<r;m++)h.appendChild(n(f,"col",{attr:{min:m+1,max:m+1,width:B(j,m),customWidth:1}}));c.customize&&c.customize(d);w(d);a.setAction("excel");a.setFileName(b.filename);a.setSheetData(d);s(a,"");this.processing(!1)},extension:".xlsx",createEmptyCells:!1});h.ext.buttons.pdfFlash=g.extend({},
t,{className:"buttons-pdf buttons-flash",text:function(a){return a.i18n("buttons.pdf","PDF")},action:function(a,b,d,c){this.processing(!0);var a=c._flash,d=b.buttons.exportData(c.exportOptions),e=b.buttons.exportInfo(c),f=b.table().node().offsetWidth,g=b.columns(c.columns).indexes().map(function(a){return b.column(a).header().offsetWidth/f});a.setAction("pdf");a.setFileName(e.filename);s(a,JSON.stringify({title:e.title||"",messageTop:e.messageTop||"",messageBottom:e.messageBottom||"",colWidth:g.toArray(),
orientation:c.orientation,size:c.pageSize,header:c.header?d.header:null,footer:c.footer?d.footer:null,body:d.body}));this.processing(!1)},extension:".pdf",orientation:"portrait",pageSize:"A4",newline:"\n"});return h.Buttons});

;/*!

JSZip v3.1.5 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/master/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/master/LICENSE
*/
!function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;b="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,b.JSZip=a()}}(function(){return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){"use strict";var d=a("./utils"),e=a("./support"),f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";c.encode=function(a){for(var b,c,e,g,h,i,j,k=[],l=0,m=a.length,n=m,o="string"!==d.getTypeOf(a);l<a.length;)n=m-l,o?(b=a[l++],c=l<m?a[l++]:0,e=l<m?a[l++]:0):(b=a.charCodeAt(l++),c=l<m?a.charCodeAt(l++):0,e=l<m?a.charCodeAt(l++):0),g=b>>2,h=(3&b)<<4|c>>4,i=n>1?(15&c)<<2|e>>6:64,j=n>2?63&e:64,k.push(f.charAt(g)+f.charAt(h)+f.charAt(i)+f.charAt(j));return k.join("")},c.decode=function(a){var b,c,d,g,h,i,j,k=0,l=0,m="data:";if(a.substr(0,m.length)===m)throw new Error("Invalid base64 input, it looks like a data url.");a=a.replace(/[^A-Za-z0-9\+\/\=]/g,"");var n=3*a.length/4;if(a.charAt(a.length-1)===f.charAt(64)&&n--,a.charAt(a.length-2)===f.charAt(64)&&n--,n%1!==0)throw new Error("Invalid base64 input, bad content length.");var o;for(o=e.uint8array?new Uint8Array(0|n):new Array(0|n);k<a.length;)g=f.indexOf(a.charAt(k++)),h=f.indexOf(a.charAt(k++)),i=f.indexOf(a.charAt(k++)),j=f.indexOf(a.charAt(k++)),b=g<<2|h>>4,c=(15&h)<<4|i>>2,d=(3&i)<<6|j,o[l++]=b,64!==i&&(o[l++]=c),64!==j&&(o[l++]=d);return o}},{"./support":30,"./utils":32}],2:[function(a,b,c){"use strict";function d(a,b,c,d,e){this.compressedSize=a,this.uncompressedSize=b,this.crc32=c,this.compression=d,this.compressedContent=e}var e=a("./external"),f=a("./stream/DataWorker"),g=a("./stream/DataLengthProbe"),h=a("./stream/Crc32Probe"),g=a("./stream/DataLengthProbe");d.prototype={getContentWorker:function(){var a=new f(e.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new g("data_length")),b=this;return a.on("end",function(){if(this.streamInfo.data_length!==b.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),a},getCompressedWorker:function(){return new f(e.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},d.createWorkerFrom=function(a,b,c){return a.pipe(new h).pipe(new g("uncompressedSize")).pipe(b.compressWorker(c)).pipe(new g("compressedSize")).withStreamInfo("compression",b)},b.exports=d},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(a,b,c){"use strict";var d=a("./stream/GenericWorker");c.STORE={magic:"\0\0",compressWorker:function(a){return new d("STORE compression")},uncompressWorker:function(){return new d("STORE decompression")}},c.DEFLATE=a("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(a,b,c){"use strict";function d(){for(var a,b=[],c=0;c<256;c++){a=c;for(var d=0;d<8;d++)a=1&a?3988292384^a>>>1:a>>>1;b[c]=a}return b}function e(a,b,c,d){var e=h,f=d+c;a^=-1;for(var g=d;g<f;g++)a=a>>>8^e[255&(a^b[g])];return a^-1}function f(a,b,c,d){var e=h,f=d+c;a^=-1;for(var g=d;g<f;g++)a=a>>>8^e[255&(a^b.charCodeAt(g))];return a^-1}var g=a("./utils"),h=d();b.exports=function(a,b){if("undefined"==typeof a||!a.length)return 0;var c="string"!==g.getTypeOf(a);return c?e(0|b,a,a.length,0):f(0|b,a,a.length,0)}},{"./utils":32}],5:[function(a,b,c){"use strict";c.base64=!1,c.binary=!1,c.dir=!1,c.createFolders=!0,c.date=null,c.compression=null,c.compressionOptions=null,c.comment=null,c.unixPermissions=null,c.dosPermissions=null},{}],6:[function(a,b,c){"use strict";var d=null;d="undefined"!=typeof Promise?Promise:a("lie"),b.exports={Promise:d}},{lie:58}],7:[function(a,b,c){"use strict";function d(a,b){h.call(this,"FlateWorker/"+a),this._pako=null,this._pakoAction=a,this._pakoOptions=b,this.meta={}}var e="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Uint32Array,f=a("pako"),g=a("./utils"),h=a("./stream/GenericWorker"),i=e?"uint8array":"array";c.magic="\b\0",g.inherits(d,h),d.prototype.processChunk=function(a){this.meta=a.meta,null===this._pako&&this._createPako(),this._pako.push(g.transformTo(i,a.data),!1)},d.prototype.flush=function(){h.prototype.flush.call(this),null===this._pako&&this._createPako(),this._pako.push([],!0)},d.prototype.cleanUp=function(){h.prototype.cleanUp.call(this),this._pako=null},d.prototype._createPako=function(){this._pako=new f[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var a=this;this._pako.onData=function(b){a.push({data:b,meta:a.meta})}},c.compressWorker=function(a){return new d("Deflate",a)},c.uncompressWorker=function(){return new d("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:59}],8:[function(a,b,c){"use strict";function d(a,b,c,d){f.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=b,this.zipPlatform=c,this.encodeFileName=d,this.streamFiles=a,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}var e=a("../utils"),f=a("../stream/GenericWorker"),g=a("../utf8"),h=a("../crc32"),i=a("../signature"),j=function(a,b){var c,d="";for(c=0;c<b;c++)d+=String.fromCharCode(255&a),a>>>=8;return d},k=function(a,b){var c=a;return a||(c=b?16893:33204),(65535&c)<<16},l=function(a,b){return 63&(a||0)},m=function(a,b,c,d,f,m){var n,o,p=a.file,q=a.compression,r=m!==g.utf8encode,s=e.transformTo("string",m(p.name)),t=e.transformTo("string",g.utf8encode(p.name)),u=p.comment,v=e.transformTo("string",m(u)),w=e.transformTo("string",g.utf8encode(u)),x=t.length!==p.name.length,y=w.length!==u.length,z="",A="",B="",C=p.dir,D=p.date,E={crc32:0,compressedSize:0,uncompressedSize:0};b&&!c||(E.crc32=a.crc32,E.compressedSize=a.compressedSize,E.uncompressedSize=a.uncompressedSize);var F=0;b&&(F|=8),r||!x&&!y||(F|=2048);var G=0,H=0;C&&(G|=16),"UNIX"===f?(H=798,G|=k(p.unixPermissions,C)):(H=20,G|=l(p.dosPermissions,C)),n=D.getUTCHours(),n<<=6,n|=D.getUTCMinutes(),n<<=5,n|=D.getUTCSeconds()/2,o=D.getUTCFullYear()-1980,o<<=4,o|=D.getUTCMonth()+1,o<<=5,o|=D.getUTCDate(),x&&(A=j(1,1)+j(h(s),4)+t,z+="up"+j(A.length,2)+A),y&&(B=j(1,1)+j(h(v),4)+w,z+="uc"+j(B.length,2)+B);var I="";I+="\n\0",I+=j(F,2),I+=q.magic,I+=j(n,2),I+=j(o,2),I+=j(E.crc32,4),I+=j(E.compressedSize,4),I+=j(E.uncompressedSize,4),I+=j(s.length,2),I+=j(z.length,2);var J=i.LOCAL_FILE_HEADER+I+s+z,K=i.CENTRAL_FILE_HEADER+j(H,2)+I+j(v.length,2)+"\0\0\0\0"+j(G,4)+j(d,4)+s+z+v;return{fileRecord:J,dirRecord:K}},n=function(a,b,c,d,f){var g="",h=e.transformTo("string",f(d));return g=i.CENTRAL_DIRECTORY_END+"\0\0\0\0"+j(a,2)+j(a,2)+j(b,4)+j(c,4)+j(h.length,2)+h},o=function(a){var b="";return b=i.DATA_DESCRIPTOR+j(a.crc32,4)+j(a.compressedSize,4)+j(a.uncompressedSize,4)};e.inherits(d,f),d.prototype.push=function(a){var b=a.meta.percent||0,c=this.entriesCount,d=this._sources.length;this.accumulate?this.contentBuffer.push(a):(this.bytesWritten+=a.data.length,f.prototype.push.call(this,{data:a.data,meta:{currentFile:this.currentFile,percent:c?(b+100*(c-d-1))/c:100}}))},d.prototype.openedSource=function(a){this.currentSourceOffset=this.bytesWritten,this.currentFile=a.file.name;var b=this.streamFiles&&!a.file.dir;if(b){var c=m(a,b,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:c.fileRecord,meta:{percent:0}})}else this.accumulate=!0},d.prototype.closedSource=function(a){this.accumulate=!1;var b=this.streamFiles&&!a.file.dir,c=m(a,b,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(c.dirRecord),b)this.push({data:o(a),meta:{percent:100}});else for(this.push({data:c.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},d.prototype.flush=function(){for(var a=this.bytesWritten,b=0;b<this.dirRecords.length;b++)this.push({data:this.dirRecords[b],meta:{percent:100}});var c=this.bytesWritten-a,d=n(this.dirRecords.length,c,a,this.zipComment,this.encodeFileName);this.push({data:d,meta:{percent:100}})},d.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},d.prototype.registerPrevious=function(a){this._sources.push(a);var b=this;return a.on("data",function(a){b.processChunk(a)}),a.on("end",function(){b.closedSource(b.previous.streamInfo),b._sources.length?b.prepareNextSource():b.end()}),a.on("error",function(a){b.error(a)}),this},d.prototype.resume=function(){return!!f.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},d.prototype.error=function(a){var b=this._sources;if(!f.prototype.error.call(this,a))return!1;for(var c=0;c<b.length;c++)try{b[c].error(a)}catch(a){}return!0},d.prototype.lock=function(){f.prototype.lock.call(this);for(var a=this._sources,b=0;b<a.length;b++)a[b].lock()},b.exports=d},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(a,b,c){"use strict";var d=a("../compressions"),e=a("./ZipFileWorker"),f=function(a,b){var c=a||b,e=d[c];if(!e)throw new Error(c+" is not a valid compression method !");return e};c.generateWorker=function(a,b,c){var d=new e(b.streamFiles,c,b.platform,b.encodeFileName),g=0;try{a.forEach(function(a,c){g++;var e=f(c.options.compression,b.compression),h=c.options.compressionOptions||b.compressionOptions||{},i=c.dir,j=c.date;c._compressWorker(e,h).withStreamInfo("file",{name:a,dir:i,date:j,comment:c.comment||"",unixPermissions:c.unixPermissions,dosPermissions:c.dosPermissions}).pipe(d)}),d.entriesCount=g}catch(h){d.error(h)}return d}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(a,b,c){"use strict";function d(){if(!(this instanceof d))return new d;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files={},this.comment=null,this.root="",this.clone=function(){var a=new d;for(var b in this)"function"!=typeof this[b]&&(a[b]=this[b]);return a}}d.prototype=a("./object"),d.prototype.loadAsync=a("./load"),d.support=a("./support"),d.defaults=a("./defaults"),d.version="3.1.5",d.loadAsync=function(a,b){return(new d).loadAsync(a,b)},d.external=a("./external"),b.exports=d},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(a,b,c){"use strict";function d(a){return new f.Promise(function(b,c){var d=a.decompressed.getContentWorker().pipe(new i);d.on("error",function(a){c(a)}).on("end",function(){d.streamInfo.crc32!==a.decompressed.crc32?c(new Error("Corrupted zip : CRC32 mismatch")):b()}).resume()})}var e=a("./utils"),f=a("./external"),g=a("./utf8"),e=a("./utils"),h=a("./zipEntries"),i=a("./stream/Crc32Probe"),j=a("./nodejsUtils");b.exports=function(a,b){var c=this;return b=e.extend(b||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:g.utf8decode}),j.isNode&&j.isStream(a)?f.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):e.prepareContent("the loaded zip file",a,!0,b.optimizedBinaryString,b.base64).then(function(a){var c=new h(b);return c.load(a),c}).then(function(a){var c=[f.Promise.resolve(a)],e=a.files;if(b.checkCRC32)for(var g=0;g<e.length;g++)c.push(d(e[g]));return f.Promise.all(c)}).then(function(a){for(var d=a.shift(),e=d.files,f=0;f<e.length;f++){var g=e[f];c.file(g.fileNameStr,g.decompressed,{binary:!0,optimizedBinaryString:!0,date:g.date,dir:g.dir,comment:g.fileCommentStr.length?g.fileCommentStr:null,unixPermissions:g.unixPermissions,dosPermissions:g.dosPermissions,createFolders:b.createFolders})}return d.zipComment.length&&(c.comment=d.zipComment),c})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(a,b,c){"use strict";function d(a,b){f.call(this,"Nodejs stream input adapter for "+a),this._upstreamEnded=!1,this._bindStream(b)}var e=a("../utils"),f=a("../stream/GenericWorker");e.inherits(d,f),d.prototype._bindStream=function(a){var b=this;this._stream=a,a.pause(),a.on("data",function(a){b.push({data:a,meta:{percent:0}})}).on("error",function(a){b.isPaused?this.generatedError=a:b.error(a)}).on("end",function(){b.isPaused?b._upstreamEnded=!0:b.end()})},d.prototype.pause=function(){return!!f.prototype.pause.call(this)&&(this._stream.pause(),!0)},d.prototype.resume=function(){return!!f.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},b.exports=d},{"../stream/GenericWorker":28,"../utils":32}],13:[function(a,b,c){"use strict";function d(a,b,c){e.call(this,b),this._helper=a;var d=this;a.on("data",function(a,b){d.push(a)||d._helper.pause(),c&&c(b)}).on("error",function(a){d.emit("error",a)}).on("end",function(){d.push(null)})}var e=a("readable-stream").Readable,f=a("../utils");f.inherits(d,e),d.prototype._read=function(){this._helper.resume()},b.exports=d},{"../utils":32,"readable-stream":16}],14:[function(a,b,c){"use strict";b.exports={isNode:"undefined"!=typeof Buffer,newBufferFrom:function(a,b){return new Buffer(a,b)},allocBuffer:function(a){return Buffer.alloc?Buffer.alloc(a):new Buffer(a)},isBuffer:function(a){return Buffer.isBuffer(a)},isStream:function(a){return a&&"function"==typeof a.on&&"function"==typeof a.pause&&"function"==typeof a.resume}}},{}],15:[function(a,b,c){"use strict";function d(a){return"[object RegExp]"===Object.prototype.toString.call(a)}var e=a("./utf8"),f=a("./utils"),g=a("./stream/GenericWorker"),h=a("./stream/StreamHelper"),i=a("./defaults"),j=a("./compressedObject"),k=a("./zipObject"),l=a("./generate"),m=a("./nodejsUtils"),n=a("./nodejs/NodejsStreamInputAdapter"),o=function(a,b,c){var d,e=f.getTypeOf(b),h=f.extend(c||{},i);h.date=h.date||new Date,null!==h.compression&&(h.compression=h.compression.toUpperCase()),"string"==typeof h.unixPermissions&&(h.unixPermissions=parseInt(h.unixPermissions,8)),h.unixPermissions&&16384&h.unixPermissions&&(h.dir=!0),h.dosPermissions&&16&h.dosPermissions&&(h.dir=!0),h.dir&&(a=q(a)),h.createFolders&&(d=p(a))&&r.call(this,d,!0);var l="string"===e&&h.binary===!1&&h.base64===!1;c&&"undefined"!=typeof c.binary||(h.binary=!l);var o=b instanceof j&&0===b.uncompressedSize;(o||h.dir||!b||0===b.length)&&(h.base64=!1,h.binary=!0,b="",h.compression="STORE",e="string");var s=null;s=b instanceof j||b instanceof g?b:m.isNode&&m.isStream(b)?new n(a,b):f.prepareContent(a,b,h.binary,h.optimizedBinaryString,h.base64);var t=new k(a,s,h);this.files[a]=t},p=function(a){"/"===a.slice(-1)&&(a=a.substring(0,a.length-1));var b=a.lastIndexOf("/");return b>0?a.substring(0,b):""},q=function(a){return"/"!==a.slice(-1)&&(a+="/"),a},r=function(a,b){return b="undefined"!=typeof b?b:i.createFolders,a=q(a),this.files[a]||o.call(this,a,null,{dir:!0,createFolders:b}),this.files[a]},s={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(a){var b,c,d;for(b in this.files)this.files.hasOwnProperty(b)&&(d=this.files[b],c=b.slice(this.root.length,b.length),c&&b.slice(0,this.root.length)===this.root&&a(c,d))},filter:function(a){var b=[];return this.forEach(function(c,d){a(c,d)&&b.push(d)}),b},file:function(a,b,c){if(1===arguments.length){if(d(a)){var e=a;return this.filter(function(a,b){return!b.dir&&e.test(a)})}var f=this.files[this.root+a];return f&&!f.dir?f:null}return a=this.root+a,o.call(this,a,b,c),this},folder:function(a){if(!a)return this;if(d(a))return this.filter(function(b,c){return c.dir&&a.test(b)});var b=this.root+a,c=r.call(this,b),e=this.clone();return e.root=c.name,e},remove:function(a){a=this.root+a;var b=this.files[a];if(b||("/"!==a.slice(-1)&&(a+="/"),b=this.files[a]),b&&!b.dir)delete this.files[a];else for(var c=this.filter(function(b,c){return c.name.slice(0,a.length)===a}),d=0;d<c.length;d++)delete this.files[c[d].name];return this},generate:function(a){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(a){var b,c={};try{if(c=f.extend(a||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:e.utf8encode}),c.type=c.type.toLowerCase(),c.compression=c.compression.toUpperCase(),"binarystring"===c.type&&(c.type="string"),!c.type)throw new Error("No output type specified.");f.checkSupport(c.type),"darwin"!==c.platform&&"freebsd"!==c.platform&&"linux"!==c.platform&&"sunos"!==c.platform||(c.platform="UNIX"),"win32"===c.platform&&(c.platform="DOS");var d=c.comment||this.comment||"";b=l.generateWorker(this,c,d)}catch(i){b=new g("error"),b.error(i)}return new h(b,c.type||"string",c.mimeType)},generateAsync:function(a,b){return this.generateInternalStream(a).accumulate(b)},generateNodeStream:function(a,b){return a=a||{},a.type||(a.type="nodebuffer"),this.generateInternalStream(a).toNodejsStream(b)}};b.exports=s},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(a,b,c){b.exports=a("stream")},{stream:void 0}],17:[function(a,b,c){"use strict";function d(a){e.call(this,a);for(var b=0;b<this.data.length;b++)a[b]=255&a[b]}var e=a("./DataReader"),f=a("../utils");f.inherits(d,e),d.prototype.byteAt=function(a){return this.data[this.zero+a]},d.prototype.lastIndexOfSignature=function(a){for(var b=a.charCodeAt(0),c=a.charCodeAt(1),d=a.charCodeAt(2),e=a.charCodeAt(3),f=this.length-4;f>=0;--f)if(this.data[f]===b&&this.data[f+1]===c&&this.data[f+2]===d&&this.data[f+3]===e)return f-this.zero;return-1},d.prototype.readAndCheckSignature=function(a){var b=a.charCodeAt(0),c=a.charCodeAt(1),d=a.charCodeAt(2),e=a.charCodeAt(3),f=this.readData(4);return b===f[0]&&c===f[1]&&d===f[2]&&e===f[3]},d.prototype.readData=function(a){if(this.checkOffset(a),0===a)return[];var b=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,b},b.exports=d},{"../utils":32,"./DataReader":18}],18:[function(a,b,c){"use strict";function d(a){this.data=a,this.length=a.length,this.index=0,this.zero=0}var e=a("../utils");d.prototype={checkOffset:function(a){this.checkIndex(this.index+a)},checkIndex:function(a){if(this.length<this.zero+a||a<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+a+"). Corrupted zip ?")},setIndex:function(a){this.checkIndex(a),this.index=a},skip:function(a){this.setIndex(this.index+a)},byteAt:function(a){},readInt:function(a){var b,c=0;for(this.checkOffset(a),b=this.index+a-1;b>=this.index;b--)c=(c<<8)+this.byteAt(b);return this.index+=a,c},readString:function(a){return e.transformTo("string",this.readData(a))},readData:function(a){},lastIndexOfSignature:function(a){},readAndCheckSignature:function(a){},readDate:function(){var a=this.readInt(4);return new Date(Date.UTC((a>>25&127)+1980,(a>>21&15)-1,a>>16&31,a>>11&31,a>>5&63,(31&a)<<1))}},b.exports=d},{"../utils":32}],19:[function(a,b,c){"use strict";function d(a){e.call(this,a)}var e=a("./Uint8ArrayReader"),f=a("../utils");f.inherits(d,e),d.prototype.readData=function(a){this.checkOffset(a);var b=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,b},b.exports=d},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(a,b,c){"use strict";function d(a){e.call(this,a)}var e=a("./DataReader"),f=a("../utils");f.inherits(d,e),d.prototype.byteAt=function(a){return this.data.charCodeAt(this.zero+a)},d.prototype.lastIndexOfSignature=function(a){return this.data.lastIndexOf(a)-this.zero},d.prototype.readAndCheckSignature=function(a){var b=this.readData(4);return a===b},d.prototype.readData=function(a){this.checkOffset(a);var b=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,b},b.exports=d},{"../utils":32,"./DataReader":18}],21:[function(a,b,c){"use strict";function d(a){e.call(this,a)}var e=a("./ArrayReader"),f=a("../utils");f.inherits(d,e),d.prototype.readData=function(a){if(this.checkOffset(a),0===a)return new Uint8Array(0);var b=this.data.subarray(this.zero+this.index,this.zero+this.index+a);return this.index+=a,b},b.exports=d},{"../utils":32,"./ArrayReader":17}],22:[function(a,b,c){"use strict";var d=a("../utils"),e=a("../support"),f=a("./ArrayReader"),g=a("./StringReader"),h=a("./NodeBufferReader"),i=a("./Uint8ArrayReader");b.exports=function(a){var b=d.getTypeOf(a);return d.checkSupport(b),"string"!==b||e.uint8array?"nodebuffer"===b?new h(a):e.uint8array?new i(d.transformTo("uint8array",a)):new f(d.transformTo("array",a)):new g(a)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(a,b,c){"use strict";c.LOCAL_FILE_HEADER="PK",c.CENTRAL_FILE_HEADER="PK",c.CENTRAL_DIRECTORY_END="PK",c.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK",c.ZIP64_CENTRAL_DIRECTORY_END="PK",c.DATA_DESCRIPTOR="PK\b"},{}],24:[function(a,b,c){"use strict";function d(a){e.call(this,"ConvertWorker to "+a),this.destType=a}var e=a("./GenericWorker"),f=a("../utils");f.inherits(d,e),d.prototype.processChunk=function(a){this.push({data:f.transformTo(this.destType,a.data),meta:a.meta})},b.exports=d},{"../utils":32,"./GenericWorker":28}],25:[function(a,b,c){"use strict";function d(){e.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}var e=a("./GenericWorker"),f=a("../crc32"),g=a("../utils");g.inherits(d,e),d.prototype.processChunk=function(a){this.streamInfo.crc32=f(a.data,this.streamInfo.crc32||0),this.push(a)},b.exports=d},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(a,b,c){"use strict";function d(a){f.call(this,"DataLengthProbe for "+a),this.propName=a,this.withStreamInfo(a,0)}var e=a("../utils"),f=a("./GenericWorker");e.inherits(d,f),d.prototype.processChunk=function(a){if(a){var b=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=b+a.data.length}f.prototype.processChunk.call(this,a)},b.exports=d},{"../utils":32,"./GenericWorker":28}],27:[function(a,b,c){"use strict";function d(a){f.call(this,"DataWorker");var b=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,a.then(function(a){b.dataIsReady=!0,b.data=a,b.max=a&&a.length||0,b.type=e.getTypeOf(a),b.isPaused||b._tickAndRepeat()},function(a){b.error(a)})}var e=a("../utils"),f=a("./GenericWorker"),g=16384;e.inherits(d,f),d.prototype.cleanUp=function(){f.prototype.cleanUp.call(this),this.data=null},d.prototype.resume=function(){return!!f.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,e.delay(this._tickAndRepeat,[],this)),!0)},d.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(e.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},d.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var a=g,b=null,c=Math.min(this.max,this.index+a);if(this.index>=this.max)return this.end();switch(this.type){case"string":b=this.data.substring(this.index,c);break;case"uint8array":b=this.data.subarray(this.index,c);break;case"array":case"nodebuffer":b=this.data.slice(this.index,c)}return this.index=c,this.push({data:b,meta:{percent:this.max?this.index/this.max*100:0}})},b.exports=d},{"../utils":32,"./GenericWorker":28}],28:[function(a,b,c){"use strict";function d(a){this.name=a||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}d.prototype={push:function(a){this.emit("data",a)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(a){this.emit("error",a)}return!0},error:function(a){return!this.isFinished&&(this.isPaused?this.generatedError=a:(this.isFinished=!0,this.emit("error",a),this.previous&&this.previous.error(a),this.cleanUp()),!0)},on:function(a,b){return this._listeners[a].push(b),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(a,b){if(this._listeners[a])for(var c=0;c<this._listeners[a].length;c++)this._listeners[a][c].call(this,b)},pipe:function(a){return a.registerPrevious(this)},registerPrevious:function(a){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=a.streamInfo,this.mergeStreamInfo(),this.previous=a;var b=this;return a.on("data",function(a){b.processChunk(a)}),a.on("end",function(){b.end()}),a.on("error",function(a){b.error(a)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;this.isPaused=!1;var a=!1;return this.generatedError&&(this.error(this.generatedError),a=!0),this.previous&&this.previous.resume(),!a},flush:function(){},processChunk:function(a){this.push(a)},withStreamInfo:function(a,b){return this.extraStreamInfo[a]=b,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var a in this.extraStreamInfo)this.extraStreamInfo.hasOwnProperty(a)&&(this.streamInfo[a]=this.extraStreamInfo[a])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var a="Worker "+this.name;return this.previous?this.previous+" -> "+a:a}},b.exports=d},{}],29:[function(a,b,c){"use strict";function d(a,b,c){switch(a){case"blob":return h.newBlob(h.transformTo("arraybuffer",b),c);case"base64":return k.encode(b);default:return h.transformTo(a,b)}}function e(a,b){var c,d=0,e=null,f=0;for(c=0;c<b.length;c++)f+=b[c].length;switch(a){case"string":return b.join("");case"array":return Array.prototype.concat.apply([],b);case"uint8array":for(e=new Uint8Array(f),c=0;c<b.length;c++)e.set(b[c],d),d+=b[c].length;return e;case"nodebuffer":return Buffer.concat(b);default:throw new Error("concat : unsupported type '"+a+"'")}}function f(a,b){return new m.Promise(function(c,f){var g=[],h=a._internalType,i=a._outputType,j=a._mimeType;a.on("data",function(a,c){g.push(a),b&&b(c)}).on("error",function(a){g=[],f(a)}).on("end",function(){try{var a=d(i,e(h,g),j);c(a)}catch(b){f(b)}g=[]}).resume()})}function g(a,b,c){var d=b;switch(b){case"blob":case"arraybuffer":d="uint8array";break;case"base64":d="string"}try{this._internalType=d,this._outputType=b,this._mimeType=c,h.checkSupport(d),this._worker=a.pipe(new i(d)),a.lock()}catch(e){this._worker=new j("error"),this._worker.error(e)}}var h=a("../utils"),i=a("./ConvertWorker"),j=a("./GenericWorker"),k=a("../base64"),l=a("../support"),m=a("../external"),n=null;if(l.nodestream)try{n=a("../nodejs/NodejsStreamOutputAdapter")}catch(o){}g.prototype={accumulate:function(a){return f(this,a)},on:function(a,b){var c=this;return"data"===a?this._worker.on(a,function(a){b.call(c,a.data,a.meta)}):this._worker.on(a,function(){h.delay(b,arguments,c)}),this},resume:function(){return h.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(a){if(h.checkSupport("nodestream"),"nodebuffer"!==this._outputType)throw new Error(this._outputType+" is not supported by this method");return new n(this,{objectMode:"nodebuffer"!==this._outputType},a)}},b.exports=g},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(a,b,c){"use strict";if(c.base64=!0,c.array=!0,c.string=!0,c.arraybuffer="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array,c.nodebuffer="undefined"!=typeof Buffer,c.uint8array="undefined"!=typeof Uint8Array,"undefined"==typeof ArrayBuffer)c.blob=!1;else{var d=new ArrayBuffer(0);try{c.blob=0===new Blob([d],{type:"application/zip"}).size}catch(e){try{var f=self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder,g=new f;g.append(d),c.blob=0===g.getBlob("application/zip").size}catch(e){c.blob=!1}}}try{c.nodestream=!!a("readable-stream").Readable}catch(e){c.nodestream=!1}},{"readable-stream":16}],31:[function(a,b,c){"use strict";function d(){i.call(this,"utf-8 decode"),this.leftOver=null}function e(){i.call(this,"utf-8 encode")}for(var f=a("./utils"),g=a("./support"),h=a("./nodejsUtils"),i=a("./stream/GenericWorker"),j=new Array(256),k=0;k<256;k++)j[k]=k>=252?6:k>=248?5:k>=240?4:k>=224?3:k>=192?2:1;j[254]=j[254]=1;var l=function(a){var b,c,d,e,f,h=a.length,i=0;for(e=0;e<h;e++)c=a.charCodeAt(e),55296===(64512&c)&&e+1<h&&(d=a.charCodeAt(e+1),56320===(64512&d)&&(c=65536+(c-55296<<10)+(d-56320),e++)),i+=c<128?1:c<2048?2:c<65536?3:4;for(b=g.uint8array?new Uint8Array(i):new Array(i),f=0,e=0;f<i;e++)c=a.charCodeAt(e),55296===(64512&c)&&e+1<h&&(d=a.charCodeAt(e+1),56320===(64512&d)&&(c=65536+(c-55296<<10)+(d-56320),e++)),c<128?b[f++]=c:c<2048?(b[f++]=192|c>>>6,b[f++]=128|63&c):c<65536?(b[f++]=224|c>>>12,b[f++]=128|c>>>6&63,b[f++]=128|63&c):(b[f++]=240|c>>>18,b[f++]=128|c>>>12&63,b[f++]=128|c>>>6&63,b[f++]=128|63&c);return b},m=function(a,b){var c;for(b=b||a.length,b>a.length&&(b=a.length),c=b-1;c>=0&&128===(192&a[c]);)c--;return c<0?b:0===c?b:c+j[a[c]]>b?c:b},n=function(a){var b,c,d,e,g=a.length,h=new Array(2*g);for(c=0,b=0;b<g;)if(d=a[b++],d<128)h[c++]=d;else if(e=j[d],e>4)h[c++]=65533,b+=e-1;else{for(d&=2===e?31:3===e?15:7;e>1&&b<g;)d=d<<6|63&a[b++],e--;e>1?h[c++]=65533:d<65536?h[c++]=d:(d-=65536,h[c++]=55296|d>>10&1023,h[c++]=56320|1023&d)}return h.length!==c&&(h.subarray?h=h.subarray(0,c):h.length=c),f.applyFromCharCode(h)};c.utf8encode=function(a){return g.nodebuffer?h.newBufferFrom(a,"utf-8"):l(a)},c.utf8decode=function(a){return g.nodebuffer?f.transformTo("nodebuffer",a).toString("utf-8"):(a=f.transformTo(g.uint8array?"uint8array":"array",a),n(a))},f.inherits(d,i),d.prototype.processChunk=function(a){var b=f.transformTo(g.uint8array?"uint8array":"array",a.data);if(this.leftOver&&this.leftOver.length){if(g.uint8array){var d=b;b=new Uint8Array(d.length+this.leftOver.length),b.set(this.leftOver,0),b.set(d,this.leftOver.length)}else b=this.leftOver.concat(b);this.leftOver=null}var e=m(b),h=b;e!==b.length&&(g.uint8array?(h=b.subarray(0,e),this.leftOver=b.subarray(e,b.length)):(h=b.slice(0,e),this.leftOver=b.slice(e,b.length))),this.push({data:c.utf8decode(h),meta:a.meta})},d.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:c.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},c.Utf8DecodeWorker=d,f.inherits(e,i),e.prototype.processChunk=function(a){this.push({data:c.utf8encode(a.data),meta:a.meta})},c.Utf8EncodeWorker=e},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(a,b,c){"use strict";function d(a){var b=null;return b=i.uint8array?new Uint8Array(a.length):new Array(a.length),f(a,b)}function e(a){return a}function f(a,b){for(var c=0;c<a.length;++c)b[c]=255&a.charCodeAt(c);return b}function g(a){var b=65536,d=c.getTypeOf(a),e=!0;if("uint8array"===d?e=n.applyCanBeUsed.uint8array:"nodebuffer"===d&&(e=n.applyCanBeUsed.nodebuffer),e)for(;b>1;)try{return n.stringifyByChunk(a,d,b)}catch(f){b=Math.floor(b/2)}return n.stringifyByChar(a)}function h(a,b){for(var c=0;c<a.length;c++)b[c]=a[c];
return b}var i=a("./support"),j=a("./base64"),k=a("./nodejsUtils"),l=a("core-js/library/fn/set-immediate"),m=a("./external");c.newBlob=function(a,b){c.checkSupport("blob");try{return new Blob([a],{type:b})}catch(d){try{var e=self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder,f=new e;return f.append(a),f.getBlob(b)}catch(d){throw new Error("Bug : can't construct the Blob.")}}};var n={stringifyByChunk:function(a,b,c){var d=[],e=0,f=a.length;if(f<=c)return String.fromCharCode.apply(null,a);for(;e<f;)"array"===b||"nodebuffer"===b?d.push(String.fromCharCode.apply(null,a.slice(e,Math.min(e+c,f)))):d.push(String.fromCharCode.apply(null,a.subarray(e,Math.min(e+c,f)))),e+=c;return d.join("")},stringifyByChar:function(a){for(var b="",c=0;c<a.length;c++)b+=String.fromCharCode(a[c]);return b},applyCanBeUsed:{uint8array:function(){try{return i.uint8array&&1===String.fromCharCode.apply(null,new Uint8Array(1)).length}catch(a){return!1}}(),nodebuffer:function(){try{return i.nodebuffer&&1===String.fromCharCode.apply(null,k.allocBuffer(1)).length}catch(a){return!1}}()}};c.applyFromCharCode=g;var o={};o.string={string:e,array:function(a){return f(a,new Array(a.length))},arraybuffer:function(a){return o.string.uint8array(a).buffer},uint8array:function(a){return f(a,new Uint8Array(a.length))},nodebuffer:function(a){return f(a,k.allocBuffer(a.length))}},o.array={string:g,array:e,arraybuffer:function(a){return new Uint8Array(a).buffer},uint8array:function(a){return new Uint8Array(a)},nodebuffer:function(a){return k.newBufferFrom(a)}},o.arraybuffer={string:function(a){return g(new Uint8Array(a))},array:function(a){return h(new Uint8Array(a),new Array(a.byteLength))},arraybuffer:e,uint8array:function(a){return new Uint8Array(a)},nodebuffer:function(a){return k.newBufferFrom(new Uint8Array(a))}},o.uint8array={string:g,array:function(a){return h(a,new Array(a.length))},arraybuffer:function(a){return a.buffer},uint8array:e,nodebuffer:function(a){return k.newBufferFrom(a)}},o.nodebuffer={string:g,array:function(a){return h(a,new Array(a.length))},arraybuffer:function(a){return o.nodebuffer.uint8array(a).buffer},uint8array:function(a){return h(a,new Uint8Array(a.length))},nodebuffer:e},c.transformTo=function(a,b){if(b||(b=""),!a)return b;c.checkSupport(a);var d=c.getTypeOf(b),e=o[d][a](b);return e},c.getTypeOf=function(a){return"string"==typeof a?"string":"[object Array]"===Object.prototype.toString.call(a)?"array":i.nodebuffer&&k.isBuffer(a)?"nodebuffer":i.uint8array&&a instanceof Uint8Array?"uint8array":i.arraybuffer&&a instanceof ArrayBuffer?"arraybuffer":void 0},c.checkSupport=function(a){var b=i[a.toLowerCase()];if(!b)throw new Error(a+" is not supported by this platform")},c.MAX_VALUE_16BITS=65535,c.MAX_VALUE_32BITS=-1,c.pretty=function(a){var b,c,d="";for(c=0;c<(a||"").length;c++)b=a.charCodeAt(c),d+="\\x"+(b<16?"0":"")+b.toString(16).toUpperCase();return d},c.delay=function(a,b,c){l(function(){a.apply(c||null,b||[])})},c.inherits=function(a,b){var c=function(){};c.prototype=b.prototype,a.prototype=new c},c.extend=function(){var a,b,c={};for(a=0;a<arguments.length;a++)for(b in arguments[a])arguments[a].hasOwnProperty(b)&&"undefined"==typeof c[b]&&(c[b]=arguments[a][b]);return c},c.prepareContent=function(a,b,e,f,g){var h=m.Promise.resolve(b).then(function(a){var b=i.blob&&(a instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(a))!==-1);return b&&"undefined"!=typeof FileReader?new m.Promise(function(b,c){var d=new FileReader;d.onload=function(a){b(a.target.result)},d.onerror=function(a){c(a.target.error)},d.readAsArrayBuffer(a)}):a});return h.then(function(b){var h=c.getTypeOf(b);return h?("arraybuffer"===h?b=c.transformTo("uint8array",b):"string"===h&&(g?b=j.decode(b):e&&f!==!0&&(b=d(b))),b):m.Promise.reject(new Error("Can't read the data of '"+a+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,"core-js/library/fn/set-immediate":36}],33:[function(a,b,c){"use strict";function d(a){this.files=[],this.loadOptions=a}var e=a("./reader/readerFor"),f=a("./utils"),g=a("./signature"),h=a("./zipEntry"),i=(a("./utf8"),a("./support"));d.prototype={checkSignature:function(a){if(!this.reader.readAndCheckSignature(a)){this.reader.index-=4;var b=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+f.pretty(b)+", expected "+f.pretty(a)+")")}},isSignature:function(a,b){var c=this.reader.index;this.reader.setIndex(a);var d=this.reader.readString(4),e=d===b;return this.reader.setIndex(c),e},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var a=this.reader.readData(this.zipCommentLength),b=i.uint8array?"uint8array":"array",c=f.transformTo(b,a);this.zipComment=this.loadOptions.decodeFileName(c)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var a,b,c,d=this.zip64EndOfCentralSize-44,e=0;e<d;)a=this.reader.readInt(2),b=this.reader.readInt(4),c=this.reader.readData(b),this.zip64ExtensibleData[a]={id:a,length:b,value:c}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),this.disksCount>1)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var a,b;for(a=0;a<this.files.length;a++)b=this.files[a],this.reader.setIndex(b.localHeaderOffset),this.checkSignature(g.LOCAL_FILE_HEADER),b.readLocalPart(this.reader),b.handleUTF8(),b.processAttributes()},readCentralDir:function(){var a;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(g.CENTRAL_FILE_HEADER);)a=new h({zip64:this.zip64},this.loadOptions),a.readCentralPart(this.reader),this.files.push(a);if(this.centralDirRecords!==this.files.length&&0!==this.centralDirRecords&&0===this.files.length)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var a=this.reader.lastIndexOfSignature(g.CENTRAL_DIRECTORY_END);if(a<0){var b=!this.isSignature(0,g.LOCAL_FILE_HEADER);throw b?new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html"):new Error("Corrupted zip: can't find end of central directory")}this.reader.setIndex(a);var c=a;if(this.checkSignature(g.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===f.MAX_VALUE_16BITS||this.diskWithCentralDirStart===f.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===f.MAX_VALUE_16BITS||this.centralDirRecords===f.MAX_VALUE_16BITS||this.centralDirSize===f.MAX_VALUE_32BITS||this.centralDirOffset===f.MAX_VALUE_32BITS){if(this.zip64=!0,a=this.reader.lastIndexOfSignature(g.ZIP64_CENTRAL_DIRECTORY_LOCATOR),a<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(a),this.checkSignature(g.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,g.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(g.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(g.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var d=this.centralDirOffset+this.centralDirSize;this.zip64&&(d+=20,d+=12+this.zip64EndOfCentralSize);var e=c-d;if(e>0)this.isSignature(c,g.CENTRAL_FILE_HEADER)||(this.reader.zero=e);else if(e<0)throw new Error("Corrupted zip: missing "+Math.abs(e)+" bytes.")},prepareReader:function(a){this.reader=e(a)},load:function(a){this.prepareReader(a),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},b.exports=d},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utf8":31,"./utils":32,"./zipEntry":34}],34:[function(a,b,c){"use strict";function d(a,b){this.options=a,this.loadOptions=b}var e=a("./reader/readerFor"),f=a("./utils"),g=a("./compressedObject"),h=a("./crc32"),i=a("./utf8"),j=a("./compressions"),k=a("./support"),l=0,m=3,n=function(a){for(var b in j)if(j.hasOwnProperty(b)&&j[b].magic===a)return j[b];return null};d.prototype={isEncrypted:function(){return 1===(1&this.bitFlag)},useUTF8:function(){return 2048===(2048&this.bitFlag)},readLocalPart:function(a){var b,c;if(a.skip(22),this.fileNameLength=a.readInt(2),c=a.readInt(2),this.fileName=a.readData(this.fileNameLength),a.skip(c),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough informations from the central directory (compressedSize === -1 || uncompressedSize === -1)");if(b=n(this.compressionMethod),null===b)throw new Error("Corrupted zip : compression "+f.pretty(this.compressionMethod)+" unknown (inner file : "+f.transformTo("string",this.fileName)+")");this.decompressed=new g(this.compressedSize,this.uncompressedSize,this.crc32,b,a.readData(this.compressedSize))},readCentralPart:function(a){this.versionMadeBy=a.readInt(2),a.skip(2),this.bitFlag=a.readInt(2),this.compressionMethod=a.readString(2),this.date=a.readDate(),this.crc32=a.readInt(4),this.compressedSize=a.readInt(4),this.uncompressedSize=a.readInt(4);var b=a.readInt(2);if(this.extraFieldsLength=a.readInt(2),this.fileCommentLength=a.readInt(2),this.diskNumberStart=a.readInt(2),this.internalFileAttributes=a.readInt(2),this.externalFileAttributes=a.readInt(4),this.localHeaderOffset=a.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");a.skip(b),this.readExtraFields(a),this.parseZIP64ExtraField(a),this.fileComment=a.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var a=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),a===l&&(this.dosPermissions=63&this.externalFileAttributes),a===m&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||"/"!==this.fileNameStr.slice(-1)||(this.dir=!0)},parseZIP64ExtraField:function(a){if(this.extraFields[1]){var b=e(this.extraFields[1].value);this.uncompressedSize===f.MAX_VALUE_32BITS&&(this.uncompressedSize=b.readInt(8)),this.compressedSize===f.MAX_VALUE_32BITS&&(this.compressedSize=b.readInt(8)),this.localHeaderOffset===f.MAX_VALUE_32BITS&&(this.localHeaderOffset=b.readInt(8)),this.diskNumberStart===f.MAX_VALUE_32BITS&&(this.diskNumberStart=b.readInt(4))}},readExtraFields:function(a){var b,c,d,e=a.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});a.index<e;)b=a.readInt(2),c=a.readInt(2),d=a.readData(c),this.extraFields[b]={id:b,length:c,value:d}},handleUTF8:function(){var a=k.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=i.utf8decode(this.fileName),this.fileCommentStr=i.utf8decode(this.fileComment);else{var b=this.findExtraFieldUnicodePath();if(null!==b)this.fileNameStr=b;else{var c=f.transformTo(a,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(c)}var d=this.findExtraFieldUnicodeComment();if(null!==d)this.fileCommentStr=d;else{var e=f.transformTo(a,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(e)}}},findExtraFieldUnicodePath:function(){var a=this.extraFields[28789];if(a){var b=e(a.value);return 1!==b.readInt(1)?null:h(this.fileName)!==b.readInt(4)?null:i.utf8decode(b.readData(a.length-5))}return null},findExtraFieldUnicodeComment:function(){var a=this.extraFields[25461];if(a){var b=e(a.value);return 1!==b.readInt(1)?null:h(this.fileComment)!==b.readInt(4)?null:i.utf8decode(b.readData(a.length-5))}return null}},b.exports=d},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(a,b,c){"use strict";var d=a("./stream/StreamHelper"),e=a("./stream/DataWorker"),f=a("./utf8"),g=a("./compressedObject"),h=a("./stream/GenericWorker"),i=function(a,b,c){this.name=a,this.dir=c.dir,this.date=c.date,this.comment=c.comment,this.unixPermissions=c.unixPermissions,this.dosPermissions=c.dosPermissions,this._data=b,this._dataBinary=c.binary,this.options={compression:c.compression,compressionOptions:c.compressionOptions}};i.prototype={internalStream:function(a){var b=null,c="string";try{if(!a)throw new Error("No output type specified.");c=a.toLowerCase();var e="string"===c||"text"===c;"binarystring"!==c&&"text"!==c||(c="string"),b=this._decompressWorker();var g=!this._dataBinary;g&&!e&&(b=b.pipe(new f.Utf8EncodeWorker)),!g&&e&&(b=b.pipe(new f.Utf8DecodeWorker))}catch(i){b=new h("error"),b.error(i)}return new d(b,c,"")},async:function(a,b){return this.internalStream(a).accumulate(b)},nodeStream:function(a,b){return this.internalStream(a||"nodebuffer").toNodejsStream(b)},_compressWorker:function(a,b){if(this._data instanceof g&&this._data.compression.magic===a.magic)return this._data.getCompressedWorker();var c=this._decompressWorker();return this._dataBinary||(c=c.pipe(new f.Utf8EncodeWorker)),g.createWorkerFrom(c,a,b)},_decompressWorker:function(){return this._data instanceof g?this._data.getContentWorker():this._data instanceof h?this._data:new e(this._data)}};for(var j=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],k=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},l=0;l<j.length;l++)i.prototype[j[l]]=k;b.exports=i},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(a,b,c){a("../modules/web.immediate"),b.exports=a("../modules/_core").setImmediate},{"../modules/_core":40,"../modules/web.immediate":56}],37:[function(a,b,c){b.exports=function(a){if("function"!=typeof a)throw TypeError(a+" is not a function!");return a}},{}],38:[function(a,b,c){var d=a("./_is-object");b.exports=function(a){if(!d(a))throw TypeError(a+" is not an object!");return a}},{"./_is-object":51}],39:[function(a,b,c){var d={}.toString;b.exports=function(a){return d.call(a).slice(8,-1)}},{}],40:[function(a,b,c){var d=b.exports={version:"2.3.0"};"number"==typeof __e&&(__e=d)},{}],41:[function(a,b,c){var d=a("./_a-function");b.exports=function(a,b,c){if(d(a),void 0===b)return a;switch(c){case 1:return function(c){return a.call(b,c)};case 2:return function(c,d){return a.call(b,c,d)};case 3:return function(c,d,e){return a.call(b,c,d,e)}}return function(){return a.apply(b,arguments)}}},{"./_a-function":37}],42:[function(a,b,c){b.exports=!a("./_fails")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},{"./_fails":45}],43:[function(a,b,c){var d=a("./_is-object"),e=a("./_global").document,f=d(e)&&d(e.createElement);b.exports=function(a){return f?e.createElement(a):{}}},{"./_global":46,"./_is-object":51}],44:[function(a,b,c){var d=a("./_global"),e=a("./_core"),f=a("./_ctx"),g=a("./_hide"),h="prototype",i=function(a,b,c){var j,k,l,m=a&i.F,n=a&i.G,o=a&i.S,p=a&i.P,q=a&i.B,r=a&i.W,s=n?e:e[b]||(e[b]={}),t=s[h],u=n?d:o?d[b]:(d[b]||{})[h];n&&(c=b);for(j in c)k=!m&&u&&void 0!==u[j],k&&j in s||(l=k?u[j]:c[j],s[j]=n&&"function"!=typeof u[j]?c[j]:q&&k?f(l,d):r&&u[j]==l?function(a){var b=function(b,c,d){if(this instanceof a){switch(arguments.length){case 0:return new a;case 1:return new a(b);case 2:return new a(b,c)}return new a(b,c,d)}return a.apply(this,arguments)};return b[h]=a[h],b}(l):p&&"function"==typeof l?f(Function.call,l):l,p&&((s.virtual||(s.virtual={}))[j]=l,a&i.R&&t&&!t[j]&&g(t,j,l)))};i.F=1,i.G=2,i.S=4,i.P=8,i.B=16,i.W=32,i.U=64,i.R=128,b.exports=i},{"./_core":40,"./_ctx":41,"./_global":46,"./_hide":47}],45:[function(a,b,c){b.exports=function(a){try{return!!a()}catch(b){return!0}}},{}],46:[function(a,b,c){var d=b.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=d)},{}],47:[function(a,b,c){var d=a("./_object-dp"),e=a("./_property-desc");b.exports=a("./_descriptors")?function(a,b,c){return d.f(a,b,e(1,c))}:function(a,b,c){return a[b]=c,a}},{"./_descriptors":42,"./_object-dp":52,"./_property-desc":53}],48:[function(a,b,c){b.exports=a("./_global").document&&document.documentElement},{"./_global":46}],49:[function(a,b,c){b.exports=!a("./_descriptors")&&!a("./_fails")(function(){return 7!=Object.defineProperty(a("./_dom-create")("div"),"a",{get:function(){return 7}}).a})},{"./_descriptors":42,"./_dom-create":43,"./_fails":45}],50:[function(a,b,c){b.exports=function(a,b,c){var d=void 0===c;switch(b.length){case 0:return d?a():a.call(c);case 1:return d?a(b[0]):a.call(c,b[0]);case 2:return d?a(b[0],b[1]):a.call(c,b[0],b[1]);case 3:return d?a(b[0],b[1],b[2]):a.call(c,b[0],b[1],b[2]);case 4:return d?a(b[0],b[1],b[2],b[3]):a.call(c,b[0],b[1],b[2],b[3])}return a.apply(c,b)}},{}],51:[function(a,b,c){b.exports=function(a){return"object"==typeof a?null!==a:"function"==typeof a}},{}],52:[function(a,b,c){var d=a("./_an-object"),e=a("./_ie8-dom-define"),f=a("./_to-primitive"),g=Object.defineProperty;c.f=a("./_descriptors")?Object.defineProperty:function(a,b,c){if(d(a),b=f(b,!0),d(c),e)try{return g(a,b,c)}catch(h){}if("get"in c||"set"in c)throw TypeError("Accessors not supported!");return"value"in c&&(a[b]=c.value),a}},{"./_an-object":38,"./_descriptors":42,"./_ie8-dom-define":49,"./_to-primitive":55}],53:[function(a,b,c){b.exports=function(a,b){return{enumerable:!(1&a),configurable:!(2&a),writable:!(4&a),value:b}}},{}],54:[function(a,b,c){var d,e,f,g=a("./_ctx"),h=a("./_invoke"),i=a("./_html"),j=a("./_dom-create"),k=a("./_global"),l=k.process,m=k.setImmediate,n=k.clearImmediate,o=k.MessageChannel,p=0,q={},r="onreadystatechange",s=function(){var a=+this;if(q.hasOwnProperty(a)){var b=q[a];delete q[a],b()}},t=function(a){s.call(a.data)};m&&n||(m=function(a){for(var b=[],c=1;arguments.length>c;)b.push(arguments[c++]);return q[++p]=function(){h("function"==typeof a?a:Function(a),b)},d(p),p},n=function(a){delete q[a]},"process"==a("./_cof")(l)?d=function(a){l.nextTick(g(s,a,1))}:o?(e=new o,f=e.port2,e.port1.onmessage=t,d=g(f.postMessage,f,1)):k.addEventListener&&"function"==typeof postMessage&&!k.importScripts?(d=function(a){k.postMessage(a+"","*")},k.addEventListener("message",t,!1)):d=r in j("script")?function(a){i.appendChild(j("script"))[r]=function(){i.removeChild(this),s.call(a)}}:function(a){setTimeout(g(s,a,1),0)}),b.exports={set:m,clear:n}},{"./_cof":39,"./_ctx":41,"./_dom-create":43,"./_global":46,"./_html":48,"./_invoke":50}],55:[function(a,b,c){var d=a("./_is-object");b.exports=function(a,b){if(!d(a))return a;var c,e;if(b&&"function"==typeof(c=a.toString)&&!d(e=c.call(a)))return e;if("function"==typeof(c=a.valueOf)&&!d(e=c.call(a)))return e;if(!b&&"function"==typeof(c=a.toString)&&!d(e=c.call(a)))return e;throw TypeError("Can't convert object to primitive value")}},{"./_is-object":51}],56:[function(a,b,c){var d=a("./_export"),e=a("./_task");d(d.G+d.B,{setImmediate:e.set,clearImmediate:e.clear})},{"./_export":44,"./_task":54}],57:[function(a,b,c){(function(a){"use strict";function c(){k=!0;for(var a,b,c=l.length;c;){for(b=l,l=[],a=-1;++a<c;)b[a]();c=l.length}k=!1}function d(a){1!==l.push(a)||k||e()}var e,f=a.MutationObserver||a.WebKitMutationObserver;if(f){var g=0,h=new f(c),i=a.document.createTextNode("");h.observe(i,{characterData:!0}),e=function(){i.data=g=++g%2}}else if(a.setImmediate||"undefined"==typeof a.MessageChannel)e="document"in a&&"onreadystatechange"in a.document.createElement("script")?function(){var b=a.document.createElement("script");b.onreadystatechange=function(){c(),b.onreadystatechange=null,b.parentNode.removeChild(b),b=null},a.document.documentElement.appendChild(b)}:function(){setTimeout(c,0)};else{var j=new a.MessageChannel;j.port1.onmessage=c,e=function(){j.port2.postMessage(0)}}var k,l=[];b.exports=d}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],58:[function(a,b,c){"use strict";function d(){}function e(a){if("function"!=typeof a)throw new TypeError("resolver must be a function");this.state=s,this.queue=[],this.outcome=void 0,a!==d&&i(this,a)}function f(a,b,c){this.promise=a,"function"==typeof b&&(this.onFulfilled=b,this.callFulfilled=this.otherCallFulfilled),"function"==typeof c&&(this.onRejected=c,this.callRejected=this.otherCallRejected)}function g(a,b,c){o(function(){var d;try{d=b(c)}catch(e){return p.reject(a,e)}d===a?p.reject(a,new TypeError("Cannot resolve promise with itself")):p.resolve(a,d)})}function h(a){var b=a&&a.then;if(a&&("object"==typeof a||"function"==typeof a)&&"function"==typeof b)return function(){b.apply(a,arguments)}}function i(a,b){function c(b){f||(f=!0,p.reject(a,b))}function d(b){f||(f=!0,p.resolve(a,b))}function e(){b(d,c)}var f=!1,g=j(e);"error"===g.status&&c(g.value)}function j(a,b){var c={};try{c.value=a(b),c.status="success"}catch(d){c.status="error",c.value=d}return c}function k(a){return a instanceof this?a:p.resolve(new this(d),a)}function l(a){var b=new this(d);return p.reject(b,a)}function m(a){function b(a,b){function d(a){g[b]=a,++h!==e||f||(f=!0,p.resolve(j,g))}c.resolve(a).then(d,function(a){f||(f=!0,p.reject(j,a))})}var c=this;if("[object Array]"!==Object.prototype.toString.call(a))return this.reject(new TypeError("must be an array"));var e=a.length,f=!1;if(!e)return this.resolve([]);for(var g=new Array(e),h=0,i=-1,j=new this(d);++i<e;)b(a[i],i);return j}function n(a){function b(a){c.resolve(a).then(function(a){f||(f=!0,p.resolve(h,a))},function(a){f||(f=!0,p.reject(h,a))})}var c=this;if("[object Array]"!==Object.prototype.toString.call(a))return this.reject(new TypeError("must be an array"));var e=a.length,f=!1;if(!e)return this.resolve([]);for(var g=-1,h=new this(d);++g<e;)b(a[g]);return h}var o=a("immediate"),p={},q=["REJECTED"],r=["FULFILLED"],s=["PENDING"];b.exports=e,e.prototype["catch"]=function(a){return this.then(null,a)},e.prototype.then=function(a,b){if("function"!=typeof a&&this.state===r||"function"!=typeof b&&this.state===q)return this;var c=new this.constructor(d);if(this.state!==s){var e=this.state===r?a:b;g(c,e,this.outcome)}else this.queue.push(new f(c,a,b));return c},f.prototype.callFulfilled=function(a){p.resolve(this.promise,a)},f.prototype.otherCallFulfilled=function(a){g(this.promise,this.onFulfilled,a)},f.prototype.callRejected=function(a){p.reject(this.promise,a)},f.prototype.otherCallRejected=function(a){g(this.promise,this.onRejected,a)},p.resolve=function(a,b){var c=j(h,b);if("error"===c.status)return p.reject(a,c.value);var d=c.value;if(d)i(a,d);else{a.state=r,a.outcome=b;for(var e=-1,f=a.queue.length;++e<f;)a.queue[e].callFulfilled(b)}return a},p.reject=function(a,b){a.state=q,a.outcome=b;for(var c=-1,d=a.queue.length;++c<d;)a.queue[c].callRejected(b);return a},e.resolve=k,e.reject=l,e.all=m,e.race=n},{immediate:57}],59:[function(a,b,c){"use strict";var d=a("./lib/utils/common").assign,e=a("./lib/deflate"),f=a("./lib/inflate"),g=a("./lib/zlib/constants"),h={};d(h,e,f,g),b.exports=h},{"./lib/deflate":60,"./lib/inflate":61,"./lib/utils/common":62,"./lib/zlib/constants":65}],60:[function(a,b,c){"use strict";function d(a){if(!(this instanceof d))return new d(a);this.options=i.assign({level:s,method:u,chunkSize:16384,windowBits:15,memLevel:8,strategy:t,to:""},a||{});var b=this.options;b.raw&&b.windowBits>0?b.windowBits=-b.windowBits:b.gzip&&b.windowBits>0&&b.windowBits<16&&(b.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new l,this.strm.avail_out=0;var c=h.deflateInit2(this.strm,b.level,b.method,b.windowBits,b.memLevel,b.strategy);if(c!==p)throw new Error(k[c]);if(b.header&&h.deflateSetHeader(this.strm,b.header),b.dictionary){var e;if(e="string"==typeof b.dictionary?j.string2buf(b.dictionary):"[object ArrayBuffer]"===m.call(b.dictionary)?new Uint8Array(b.dictionary):b.dictionary,c=h.deflateSetDictionary(this.strm,e),c!==p)throw new Error(k[c]);this._dict_set=!0}}function e(a,b){var c=new d(b);if(c.push(a,!0),c.err)throw c.msg||k[c.err];return c.result}function f(a,b){return b=b||{},b.raw=!0,e(a,b)}function g(a,b){return b=b||{},b.gzip=!0,e(a,b)}var h=a("./zlib/deflate"),i=a("./utils/common"),j=a("./utils/strings"),k=a("./zlib/messages"),l=a("./zlib/zstream"),m=Object.prototype.toString,n=0,o=4,p=0,q=1,r=2,s=-1,t=0,u=8;d.prototype.push=function(a,b){var c,d,e=this.strm,f=this.options.chunkSize;if(this.ended)return!1;d=b===~~b?b:b===!0?o:n,"string"==typeof a?e.input=j.string2buf(a):"[object ArrayBuffer]"===m.call(a)?e.input=new Uint8Array(a):e.input=a,e.next_in=0,e.avail_in=e.input.length;do{if(0===e.avail_out&&(e.output=new i.Buf8(f),e.next_out=0,e.avail_out=f),c=h.deflate(e,d),c!==q&&c!==p)return this.onEnd(c),this.ended=!0,!1;0!==e.avail_out&&(0!==e.avail_in||d!==o&&d!==r)||("string"===this.options.to?this.onData(j.buf2binstring(i.shrinkBuf(e.output,e.next_out))):this.onData(i.shrinkBuf(e.output,e.next_out)))}while((e.avail_in>0||0===e.avail_out)&&c!==q);return d===o?(c=h.deflateEnd(this.strm),this.onEnd(c),this.ended=!0,c===p):d!==r||(this.onEnd(p),e.avail_out=0,!0)},d.prototype.onData=function(a){this.chunks.push(a)},d.prototype.onEnd=function(a){a===p&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=i.flattenChunks(this.chunks)),this.chunks=[],this.err=a,this.msg=this.strm.msg},c.Deflate=d,c.deflate=e,c.deflateRaw=f,c.gzip=g},{"./utils/common":62,"./utils/strings":63,"./zlib/deflate":67,"./zlib/messages":72,"./zlib/zstream":74}],61:[function(a,b,c){"use strict";function d(a){if(!(this instanceof d))return new d(a);this.options=h.assign({chunkSize:16384,windowBits:0,to:""},a||{});var b=this.options;b.raw&&b.windowBits>=0&&b.windowBits<16&&(b.windowBits=-b.windowBits,0===b.windowBits&&(b.windowBits=-15)),!(b.windowBits>=0&&b.windowBits<16)||a&&a.windowBits||(b.windowBits+=32),b.windowBits>15&&b.windowBits<48&&0===(15&b.windowBits)&&(b.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new l,this.strm.avail_out=0;var c=g.inflateInit2(this.strm,b.windowBits);if(c!==j.Z_OK)throw new Error(k[c]);this.header=new m,g.inflateGetHeader(this.strm,this.header)}function e(a,b){var c=new d(b);if(c.push(a,!0),c.err)throw c.msg||k[c.err];return c.result}function f(a,b){return b=b||{},b.raw=!0,e(a,b)}var g=a("./zlib/inflate"),h=a("./utils/common"),i=a("./utils/strings"),j=a("./zlib/constants"),k=a("./zlib/messages"),l=a("./zlib/zstream"),m=a("./zlib/gzheader"),n=Object.prototype.toString;d.prototype.push=function(a,b){var c,d,e,f,k,l,m=this.strm,o=this.options.chunkSize,p=this.options.dictionary,q=!1;if(this.ended)return!1;d=b===~~b?b:b===!0?j.Z_FINISH:j.Z_NO_FLUSH,"string"==typeof a?m.input=i.binstring2buf(a):"[object ArrayBuffer]"===n.call(a)?m.input=new Uint8Array(a):m.input=a,m.next_in=0,m.avail_in=m.input.length;do{if(0===m.avail_out&&(m.output=new h.Buf8(o),m.next_out=0,m.avail_out=o),c=g.inflate(m,j.Z_NO_FLUSH),c===j.Z_NEED_DICT&&p&&(l="string"==typeof p?i.string2buf(p):"[object ArrayBuffer]"===n.call(p)?new Uint8Array(p):p,c=g.inflateSetDictionary(this.strm,l)),c===j.Z_BUF_ERROR&&q===!0&&(c=j.Z_OK,q=!1),c!==j.Z_STREAM_END&&c!==j.Z_OK)return this.onEnd(c),this.ended=!0,!1;m.next_out&&(0!==m.avail_out&&c!==j.Z_STREAM_END&&(0!==m.avail_in||d!==j.Z_FINISH&&d!==j.Z_SYNC_FLUSH)||("string"===this.options.to?(e=i.utf8border(m.output,m.next_out),f=m.next_out-e,k=i.buf2string(m.output,e),m.next_out=f,m.avail_out=o-f,f&&h.arraySet(m.output,m.output,e,f,0),this.onData(k)):this.onData(h.shrinkBuf(m.output,m.next_out)))),0===m.avail_in&&0===m.avail_out&&(q=!0)}while((m.avail_in>0||0===m.avail_out)&&c!==j.Z_STREAM_END);return c===j.Z_STREAM_END&&(d=j.Z_FINISH),d===j.Z_FINISH?(c=g.inflateEnd(this.strm),this.onEnd(c),this.ended=!0,c===j.Z_OK):d!==j.Z_SYNC_FLUSH||(this.onEnd(j.Z_OK),m.avail_out=0,!0)},d.prototype.onData=function(a){this.chunks.push(a)},d.prototype.onEnd=function(a){a===j.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=h.flattenChunks(this.chunks)),this.chunks=[],this.err=a,this.msg=this.strm.msg},c.Inflate=d,c.inflate=e,c.inflateRaw=f,c.ungzip=e},{"./utils/common":62,"./utils/strings":63,"./zlib/constants":65,"./zlib/gzheader":68,"./zlib/inflate":70,"./zlib/messages":72,"./zlib/zstream":74}],62:[function(a,b,c){"use strict";var d="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;c.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!=typeof c)throw new TypeError(c+"must be non-object");for(var d in c)c.hasOwnProperty(d)&&(a[d]=c[d])}}return a},c.shrinkBuf=function(a,b){return a.length===b?a:a.subarray?a.subarray(0,b):(a.length=b,a)};var e={arraySet:function(a,b,c,d,e){if(b.subarray&&a.subarray)return void a.set(b.subarray(c,c+d),e);for(var f=0;f<d;f++)a[e+f]=b[c+f]},flattenChunks:function(a){var b,c,d,e,f,g;for(d=0,b=0,c=a.length;b<c;b++)d+=a[b].length;for(g=new Uint8Array(d),e=0,b=0,c=a.length;b<c;b++)f=a[b],g.set(f,e),e+=f.length;return g}},f={arraySet:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},flattenChunks:function(a){return[].concat.apply([],a)}};c.setTyped=function(a){a?(c.Buf8=Uint8Array,c.Buf16=Uint16Array,c.Buf32=Int32Array,c.assign(c,e)):(c.Buf8=Array,c.Buf16=Array,c.Buf32=Array,c.assign(c,f))},c.setTyped(d)},{}],63:[function(a,b,c){"use strict";function d(a,b){if(b<65537&&(a.subarray&&g||!a.subarray&&f))return String.fromCharCode.apply(null,e.shrinkBuf(a,b));for(var c="",d=0;d<b;d++)c+=String.fromCharCode(a[d]);return c}var e=a("./common"),f=!0,g=!0;try{String.fromCharCode.apply(null,[0])}catch(h){f=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(h){g=!1}for(var i=new e.Buf8(256),j=0;j<256;j++)i[j]=j>=252?6:j>=248?5:j>=240?4:j>=224?3:j>=192?2:1;i[254]=i[254]=1,c.string2buf=function(a){var b,c,d,f,g,h=a.length,i=0;for(f=0;f<h;f++)c=a.charCodeAt(f),55296===(64512&c)&&f+1<h&&(d=a.charCodeAt(f+1),56320===(64512&d)&&(c=65536+(c-55296<<10)+(d-56320),f++)),i+=c<128?1:c<2048?2:c<65536?3:4;for(b=new e.Buf8(i),g=0,f=0;g<i;f++)c=a.charCodeAt(f),55296===(64512&c)&&f+1<h&&(d=a.charCodeAt(f+1),56320===(64512&d)&&(c=65536+(c-55296<<10)+(d-56320),f++)),c<128?b[g++]=c:c<2048?(b[g++]=192|c>>>6,b[g++]=128|63&c):c<65536?(b[g++]=224|c>>>12,b[g++]=128|c>>>6&63,b[g++]=128|63&c):(b[g++]=240|c>>>18,b[g++]=128|c>>>12&63,b[g++]=128|c>>>6&63,b[g++]=128|63&c);return b},c.buf2binstring=function(a){return d(a,a.length)},c.binstring2buf=function(a){for(var b=new e.Buf8(a.length),c=0,d=b.length;c<d;c++)b[c]=a.charCodeAt(c);return b},c.buf2string=function(a,b){var c,e,f,g,h=b||a.length,j=new Array(2*h);for(e=0,c=0;c<h;)if(f=a[c++],f<128)j[e++]=f;else if(g=i[f],g>4)j[e++]=65533,c+=g-1;else{for(f&=2===g?31:3===g?15:7;g>1&&c<h;)f=f<<6|63&a[c++],g--;g>1?j[e++]=65533:f<65536?j[e++]=f:(f-=65536,j[e++]=55296|f>>10&1023,j[e++]=56320|1023&f)}return d(j,e)},c.utf8border=function(a,b){var c;for(b=b||a.length,b>a.length&&(b=a.length),c=b-1;c>=0&&128===(192&a[c]);)c--;return c<0?b:0===c?b:c+i[a[c]]>b?c:b}},{"./common":62}],64:[function(a,b,c){"use strict";function d(a,b,c,d){for(var e=65535&a|0,f=a>>>16&65535|0,g=0;0!==c;){g=c>2e3?2e3:c,c-=g;do e=e+b[d++]|0,f=f+e|0;while(--g);e%=65521,f%=65521}return e|f<<16|0;
}b.exports=d},{}],65:[function(a,b,c){"use strict";b.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],66:[function(a,b,c){"use strict";function d(){for(var a,b=[],c=0;c<256;c++){a=c;for(var d=0;d<8;d++)a=1&a?3988292384^a>>>1:a>>>1;b[c]=a}return b}function e(a,b,c,d){var e=f,g=d+c;a^=-1;for(var h=d;h<g;h++)a=a>>>8^e[255&(a^b[h])];return a^-1}var f=d();b.exports=e},{}],67:[function(a,b,c){"use strict";function d(a,b){return a.msg=I[b],b}function e(a){return(a<<1)-(a>4?9:0)}function f(a){for(var b=a.length;--b>=0;)a[b]=0}function g(a){var b=a.state,c=b.pending;c>a.avail_out&&(c=a.avail_out),0!==c&&(E.arraySet(a.output,b.pending_buf,b.pending_out,c,a.next_out),a.next_out+=c,b.pending_out+=c,a.total_out+=c,a.avail_out-=c,b.pending-=c,0===b.pending&&(b.pending_out=0))}function h(a,b){F._tr_flush_block(a,a.block_start>=0?a.block_start:-1,a.strstart-a.block_start,b),a.block_start=a.strstart,g(a.strm)}function i(a,b){a.pending_buf[a.pending++]=b}function j(a,b){a.pending_buf[a.pending++]=b>>>8&255,a.pending_buf[a.pending++]=255&b}function k(a,b,c,d){var e=a.avail_in;return e>d&&(e=d),0===e?0:(a.avail_in-=e,E.arraySet(b,a.input,a.next_in,e,c),1===a.state.wrap?a.adler=G(a.adler,b,e,c):2===a.state.wrap&&(a.adler=H(a.adler,b,e,c)),a.next_in+=e,a.total_in+=e,e)}function l(a,b){var c,d,e=a.max_chain_length,f=a.strstart,g=a.prev_length,h=a.nice_match,i=a.strstart>a.w_size-la?a.strstart-(a.w_size-la):0,j=a.window,k=a.w_mask,l=a.prev,m=a.strstart+ka,n=j[f+g-1],o=j[f+g];a.prev_length>=a.good_match&&(e>>=2),h>a.lookahead&&(h=a.lookahead);do if(c=b,j[c+g]===o&&j[c+g-1]===n&&j[c]===j[f]&&j[++c]===j[f+1]){f+=2,c++;do;while(j[++f]===j[++c]&&j[++f]===j[++c]&&j[++f]===j[++c]&&j[++f]===j[++c]&&j[++f]===j[++c]&&j[++f]===j[++c]&&j[++f]===j[++c]&&j[++f]===j[++c]&&f<m);if(d=ka-(m-f),f=m-ka,d>g){if(a.match_start=b,g=d,d>=h)break;n=j[f+g-1],o=j[f+g]}}while((b=l[b&k])>i&&0!==--e);return g<=a.lookahead?g:a.lookahead}function m(a){var b,c,d,e,f,g=a.w_size;do{if(e=a.window_size-a.lookahead-a.strstart,a.strstart>=g+(g-la)){E.arraySet(a.window,a.window,g,g,0),a.match_start-=g,a.strstart-=g,a.block_start-=g,c=a.hash_size,b=c;do d=a.head[--b],a.head[b]=d>=g?d-g:0;while(--c);c=g,b=c;do d=a.prev[--b],a.prev[b]=d>=g?d-g:0;while(--c);e+=g}if(0===a.strm.avail_in)break;if(c=k(a.strm,a.window,a.strstart+a.lookahead,e),a.lookahead+=c,a.lookahead+a.insert>=ja)for(f=a.strstart-a.insert,a.ins_h=a.window[f],a.ins_h=(a.ins_h<<a.hash_shift^a.window[f+1])&a.hash_mask;a.insert&&(a.ins_h=(a.ins_h<<a.hash_shift^a.window[f+ja-1])&a.hash_mask,a.prev[f&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=f,f++,a.insert--,!(a.lookahead+a.insert<ja)););}while(a.lookahead<la&&0!==a.strm.avail_in)}function n(a,b){var c=65535;for(c>a.pending_buf_size-5&&(c=a.pending_buf_size-5);;){if(a.lookahead<=1){if(m(a),0===a.lookahead&&b===J)return ua;if(0===a.lookahead)break}a.strstart+=a.lookahead,a.lookahead=0;var d=a.block_start+c;if((0===a.strstart||a.strstart>=d)&&(a.lookahead=a.strstart-d,a.strstart=d,h(a,!1),0===a.strm.avail_out))return ua;if(a.strstart-a.block_start>=a.w_size-la&&(h(a,!1),0===a.strm.avail_out))return ua}return a.insert=0,b===M?(h(a,!0),0===a.strm.avail_out?wa:xa):a.strstart>a.block_start&&(h(a,!1),0===a.strm.avail_out)?ua:ua}function o(a,b){for(var c,d;;){if(a.lookahead<la){if(m(a),a.lookahead<la&&b===J)return ua;if(0===a.lookahead)break}if(c=0,a.lookahead>=ja&&(a.ins_h=(a.ins_h<<a.hash_shift^a.window[a.strstart+ja-1])&a.hash_mask,c=a.prev[a.strstart&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=a.strstart),0!==c&&a.strstart-c<=a.w_size-la&&(a.match_length=l(a,c)),a.match_length>=ja)if(d=F._tr_tally(a,a.strstart-a.match_start,a.match_length-ja),a.lookahead-=a.match_length,a.match_length<=a.max_lazy_match&&a.lookahead>=ja){a.match_length--;do a.strstart++,a.ins_h=(a.ins_h<<a.hash_shift^a.window[a.strstart+ja-1])&a.hash_mask,c=a.prev[a.strstart&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=a.strstart;while(0!==--a.match_length);a.strstart++}else a.strstart+=a.match_length,a.match_length=0,a.ins_h=a.window[a.strstart],a.ins_h=(a.ins_h<<a.hash_shift^a.window[a.strstart+1])&a.hash_mask;else d=F._tr_tally(a,0,a.window[a.strstart]),a.lookahead--,a.strstart++;if(d&&(h(a,!1),0===a.strm.avail_out))return ua}return a.insert=a.strstart<ja-1?a.strstart:ja-1,b===M?(h(a,!0),0===a.strm.avail_out?wa:xa):a.last_lit&&(h(a,!1),0===a.strm.avail_out)?ua:va}function p(a,b){for(var c,d,e;;){if(a.lookahead<la){if(m(a),a.lookahead<la&&b===J)return ua;if(0===a.lookahead)break}if(c=0,a.lookahead>=ja&&(a.ins_h=(a.ins_h<<a.hash_shift^a.window[a.strstart+ja-1])&a.hash_mask,c=a.prev[a.strstart&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=a.strstart),a.prev_length=a.match_length,a.prev_match=a.match_start,a.match_length=ja-1,0!==c&&a.prev_length<a.max_lazy_match&&a.strstart-c<=a.w_size-la&&(a.match_length=l(a,c),a.match_length<=5&&(a.strategy===U||a.match_length===ja&&a.strstart-a.match_start>4096)&&(a.match_length=ja-1)),a.prev_length>=ja&&a.match_length<=a.prev_length){e=a.strstart+a.lookahead-ja,d=F._tr_tally(a,a.strstart-1-a.prev_match,a.prev_length-ja),a.lookahead-=a.prev_length-1,a.prev_length-=2;do++a.strstart<=e&&(a.ins_h=(a.ins_h<<a.hash_shift^a.window[a.strstart+ja-1])&a.hash_mask,c=a.prev[a.strstart&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=a.strstart);while(0!==--a.prev_length);if(a.match_available=0,a.match_length=ja-1,a.strstart++,d&&(h(a,!1),0===a.strm.avail_out))return ua}else if(a.match_available){if(d=F._tr_tally(a,0,a.window[a.strstart-1]),d&&h(a,!1),a.strstart++,a.lookahead--,0===a.strm.avail_out)return ua}else a.match_available=1,a.strstart++,a.lookahead--}return a.match_available&&(d=F._tr_tally(a,0,a.window[a.strstart-1]),a.match_available=0),a.insert=a.strstart<ja-1?a.strstart:ja-1,b===M?(h(a,!0),0===a.strm.avail_out?wa:xa):a.last_lit&&(h(a,!1),0===a.strm.avail_out)?ua:va}function q(a,b){for(var c,d,e,f,g=a.window;;){if(a.lookahead<=ka){if(m(a),a.lookahead<=ka&&b===J)return ua;if(0===a.lookahead)break}if(a.match_length=0,a.lookahead>=ja&&a.strstart>0&&(e=a.strstart-1,d=g[e],d===g[++e]&&d===g[++e]&&d===g[++e])){f=a.strstart+ka;do;while(d===g[++e]&&d===g[++e]&&d===g[++e]&&d===g[++e]&&d===g[++e]&&d===g[++e]&&d===g[++e]&&d===g[++e]&&e<f);a.match_length=ka-(f-e),a.match_length>a.lookahead&&(a.match_length=a.lookahead)}if(a.match_length>=ja?(c=F._tr_tally(a,1,a.match_length-ja),a.lookahead-=a.match_length,a.strstart+=a.match_length,a.match_length=0):(c=F._tr_tally(a,0,a.window[a.strstart]),a.lookahead--,a.strstart++),c&&(h(a,!1),0===a.strm.avail_out))return ua}return a.insert=0,b===M?(h(a,!0),0===a.strm.avail_out?wa:xa):a.last_lit&&(h(a,!1),0===a.strm.avail_out)?ua:va}function r(a,b){for(var c;;){if(0===a.lookahead&&(m(a),0===a.lookahead)){if(b===J)return ua;break}if(a.match_length=0,c=F._tr_tally(a,0,a.window[a.strstart]),a.lookahead--,a.strstart++,c&&(h(a,!1),0===a.strm.avail_out))return ua}return a.insert=0,b===M?(h(a,!0),0===a.strm.avail_out?wa:xa):a.last_lit&&(h(a,!1),0===a.strm.avail_out)?ua:va}function s(a,b,c,d,e){this.good_length=a,this.max_lazy=b,this.nice_length=c,this.max_chain=d,this.func=e}function t(a){a.window_size=2*a.w_size,f(a.head),a.max_lazy_match=D[a.level].max_lazy,a.good_match=D[a.level].good_length,a.nice_match=D[a.level].nice_length,a.max_chain_length=D[a.level].max_chain,a.strstart=0,a.block_start=0,a.lookahead=0,a.insert=0,a.match_length=a.prev_length=ja-1,a.match_available=0,a.ins_h=0}function u(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=$,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new E.Buf16(2*ha),this.dyn_dtree=new E.Buf16(2*(2*fa+1)),this.bl_tree=new E.Buf16(2*(2*ga+1)),f(this.dyn_ltree),f(this.dyn_dtree),f(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new E.Buf16(ia+1),this.heap=new E.Buf16(2*ea+1),f(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new E.Buf16(2*ea+1),f(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function v(a){var b;return a&&a.state?(a.total_in=a.total_out=0,a.data_type=Z,b=a.state,b.pending=0,b.pending_out=0,b.wrap<0&&(b.wrap=-b.wrap),b.status=b.wrap?na:sa,a.adler=2===b.wrap?0:1,b.last_flush=J,F._tr_init(b),O):d(a,Q)}function w(a){var b=v(a);return b===O&&t(a.state),b}function x(a,b){return a&&a.state?2!==a.state.wrap?Q:(a.state.gzhead=b,O):Q}function y(a,b,c,e,f,g){if(!a)return Q;var h=1;if(b===T&&(b=6),e<0?(h=0,e=-e):e>15&&(h=2,e-=16),f<1||f>_||c!==$||e<8||e>15||b<0||b>9||g<0||g>X)return d(a,Q);8===e&&(e=9);var i=new u;return a.state=i,i.strm=a,i.wrap=h,i.gzhead=null,i.w_bits=e,i.w_size=1<<i.w_bits,i.w_mask=i.w_size-1,i.hash_bits=f+7,i.hash_size=1<<i.hash_bits,i.hash_mask=i.hash_size-1,i.hash_shift=~~((i.hash_bits+ja-1)/ja),i.window=new E.Buf8(2*i.w_size),i.head=new E.Buf16(i.hash_size),i.prev=new E.Buf16(i.w_size),i.lit_bufsize=1<<f+6,i.pending_buf_size=4*i.lit_bufsize,i.pending_buf=new E.Buf8(i.pending_buf_size),i.d_buf=1*i.lit_bufsize,i.l_buf=3*i.lit_bufsize,i.level=b,i.strategy=g,i.method=c,w(a)}function z(a,b){return y(a,b,$,aa,ba,Y)}function A(a,b){var c,h,k,l;if(!a||!a.state||b>N||b<0)return a?d(a,Q):Q;if(h=a.state,!a.output||!a.input&&0!==a.avail_in||h.status===ta&&b!==M)return d(a,0===a.avail_out?S:Q);if(h.strm=a,c=h.last_flush,h.last_flush=b,h.status===na)if(2===h.wrap)a.adler=0,i(h,31),i(h,139),i(h,8),h.gzhead?(i(h,(h.gzhead.text?1:0)+(h.gzhead.hcrc?2:0)+(h.gzhead.extra?4:0)+(h.gzhead.name?8:0)+(h.gzhead.comment?16:0)),i(h,255&h.gzhead.time),i(h,h.gzhead.time>>8&255),i(h,h.gzhead.time>>16&255),i(h,h.gzhead.time>>24&255),i(h,9===h.level?2:h.strategy>=V||h.level<2?4:0),i(h,255&h.gzhead.os),h.gzhead.extra&&h.gzhead.extra.length&&(i(h,255&h.gzhead.extra.length),i(h,h.gzhead.extra.length>>8&255)),h.gzhead.hcrc&&(a.adler=H(a.adler,h.pending_buf,h.pending,0)),h.gzindex=0,h.status=oa):(i(h,0),i(h,0),i(h,0),i(h,0),i(h,0),i(h,9===h.level?2:h.strategy>=V||h.level<2?4:0),i(h,ya),h.status=sa);else{var m=$+(h.w_bits-8<<4)<<8,n=-1;n=h.strategy>=V||h.level<2?0:h.level<6?1:6===h.level?2:3,m|=n<<6,0!==h.strstart&&(m|=ma),m+=31-m%31,h.status=sa,j(h,m),0!==h.strstart&&(j(h,a.adler>>>16),j(h,65535&a.adler)),a.adler=1}if(h.status===oa)if(h.gzhead.extra){for(k=h.pending;h.gzindex<(65535&h.gzhead.extra.length)&&(h.pending!==h.pending_buf_size||(h.gzhead.hcrc&&h.pending>k&&(a.adler=H(a.adler,h.pending_buf,h.pending-k,k)),g(a),k=h.pending,h.pending!==h.pending_buf_size));)i(h,255&h.gzhead.extra[h.gzindex]),h.gzindex++;h.gzhead.hcrc&&h.pending>k&&(a.adler=H(a.adler,h.pending_buf,h.pending-k,k)),h.gzindex===h.gzhead.extra.length&&(h.gzindex=0,h.status=pa)}else h.status=pa;if(h.status===pa)if(h.gzhead.name){k=h.pending;do{if(h.pending===h.pending_buf_size&&(h.gzhead.hcrc&&h.pending>k&&(a.adler=H(a.adler,h.pending_buf,h.pending-k,k)),g(a),k=h.pending,h.pending===h.pending_buf_size)){l=1;break}l=h.gzindex<h.gzhead.name.length?255&h.gzhead.name.charCodeAt(h.gzindex++):0,i(h,l)}while(0!==l);h.gzhead.hcrc&&h.pending>k&&(a.adler=H(a.adler,h.pending_buf,h.pending-k,k)),0===l&&(h.gzindex=0,h.status=qa)}else h.status=qa;if(h.status===qa)if(h.gzhead.comment){k=h.pending;do{if(h.pending===h.pending_buf_size&&(h.gzhead.hcrc&&h.pending>k&&(a.adler=H(a.adler,h.pending_buf,h.pending-k,k)),g(a),k=h.pending,h.pending===h.pending_buf_size)){l=1;break}l=h.gzindex<h.gzhead.comment.length?255&h.gzhead.comment.charCodeAt(h.gzindex++):0,i(h,l)}while(0!==l);h.gzhead.hcrc&&h.pending>k&&(a.adler=H(a.adler,h.pending_buf,h.pending-k,k)),0===l&&(h.status=ra)}else h.status=ra;if(h.status===ra&&(h.gzhead.hcrc?(h.pending+2>h.pending_buf_size&&g(a),h.pending+2<=h.pending_buf_size&&(i(h,255&a.adler),i(h,a.adler>>8&255),a.adler=0,h.status=sa)):h.status=sa),0!==h.pending){if(g(a),0===a.avail_out)return h.last_flush=-1,O}else if(0===a.avail_in&&e(b)<=e(c)&&b!==M)return d(a,S);if(h.status===ta&&0!==a.avail_in)return d(a,S);if(0!==a.avail_in||0!==h.lookahead||b!==J&&h.status!==ta){var o=h.strategy===V?r(h,b):h.strategy===W?q(h,b):D[h.level].func(h,b);if(o!==wa&&o!==xa||(h.status=ta),o===ua||o===wa)return 0===a.avail_out&&(h.last_flush=-1),O;if(o===va&&(b===K?F._tr_align(h):b!==N&&(F._tr_stored_block(h,0,0,!1),b===L&&(f(h.head),0===h.lookahead&&(h.strstart=0,h.block_start=0,h.insert=0))),g(a),0===a.avail_out))return h.last_flush=-1,O}return b!==M?O:h.wrap<=0?P:(2===h.wrap?(i(h,255&a.adler),i(h,a.adler>>8&255),i(h,a.adler>>16&255),i(h,a.adler>>24&255),i(h,255&a.total_in),i(h,a.total_in>>8&255),i(h,a.total_in>>16&255),i(h,a.total_in>>24&255)):(j(h,a.adler>>>16),j(h,65535&a.adler)),g(a),h.wrap>0&&(h.wrap=-h.wrap),0!==h.pending?O:P)}function B(a){var b;return a&&a.state?(b=a.state.status,b!==na&&b!==oa&&b!==pa&&b!==qa&&b!==ra&&b!==sa&&b!==ta?d(a,Q):(a.state=null,b===sa?d(a,R):O)):Q}function C(a,b){var c,d,e,g,h,i,j,k,l=b.length;if(!a||!a.state)return Q;if(c=a.state,g=c.wrap,2===g||1===g&&c.status!==na||c.lookahead)return Q;for(1===g&&(a.adler=G(a.adler,b,l,0)),c.wrap=0,l>=c.w_size&&(0===g&&(f(c.head),c.strstart=0,c.block_start=0,c.insert=0),k=new E.Buf8(c.w_size),E.arraySet(k,b,l-c.w_size,c.w_size,0),b=k,l=c.w_size),h=a.avail_in,i=a.next_in,j=a.input,a.avail_in=l,a.next_in=0,a.input=b,m(c);c.lookahead>=ja;){d=c.strstart,e=c.lookahead-(ja-1);do c.ins_h=(c.ins_h<<c.hash_shift^c.window[d+ja-1])&c.hash_mask,c.prev[d&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=d,d++;while(--e);c.strstart=d,c.lookahead=ja-1,m(c)}return c.strstart+=c.lookahead,c.block_start=c.strstart,c.insert=c.lookahead,c.lookahead=0,c.match_length=c.prev_length=ja-1,c.match_available=0,a.next_in=i,a.input=j,a.avail_in=h,c.wrap=g,O}var D,E=a("../utils/common"),F=a("./trees"),G=a("./adler32"),H=a("./crc32"),I=a("./messages"),J=0,K=1,L=3,M=4,N=5,O=0,P=1,Q=-2,R=-3,S=-5,T=-1,U=1,V=2,W=3,X=4,Y=0,Z=2,$=8,_=9,aa=15,ba=8,ca=29,da=256,ea=da+1+ca,fa=30,ga=19,ha=2*ea+1,ia=15,ja=3,ka=258,la=ka+ja+1,ma=32,na=42,oa=69,pa=73,qa=91,ra=103,sa=113,ta=666,ua=1,va=2,wa=3,xa=4,ya=3;D=[new s(0,0,0,0,n),new s(4,4,8,4,o),new s(4,5,16,8,o),new s(4,6,32,32,o),new s(4,4,16,16,p),new s(8,16,32,32,p),new s(8,16,128,128,p),new s(8,32,128,256,p),new s(32,128,258,1024,p),new s(32,258,258,4096,p)],c.deflateInit=z,c.deflateInit2=y,c.deflateReset=w,c.deflateResetKeep=v,c.deflateSetHeader=x,c.deflate=A,c.deflateEnd=B,c.deflateSetDictionary=C,c.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":62,"./adler32":64,"./crc32":66,"./messages":72,"./trees":73}],68:[function(a,b,c){"use strict";function d(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}b.exports=d},{}],69:[function(a,b,c){"use strict";var d=30,e=12;b.exports=function(a,b){var c,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C;c=a.state,f=a.next_in,B=a.input,g=f+(a.avail_in-5),h=a.next_out,C=a.output,i=h-(b-a.avail_out),j=h+(a.avail_out-257),k=c.dmax,l=c.wsize,m=c.whave,n=c.wnext,o=c.window,p=c.hold,q=c.bits,r=c.lencode,s=c.distcode,t=(1<<c.lenbits)-1,u=(1<<c.distbits)-1;a:do{q<15&&(p+=B[f++]<<q,q+=8,p+=B[f++]<<q,q+=8),v=r[p&t];b:for(;;){if(w=v>>>24,p>>>=w,q-=w,w=v>>>16&255,0===w)C[h++]=65535&v;else{if(!(16&w)){if(0===(64&w)){v=r[(65535&v)+(p&(1<<w)-1)];continue b}if(32&w){c.mode=e;break a}a.msg="invalid literal/length code",c.mode=d;break a}x=65535&v,w&=15,w&&(q<w&&(p+=B[f++]<<q,q+=8),x+=p&(1<<w)-1,p>>>=w,q-=w),q<15&&(p+=B[f++]<<q,q+=8,p+=B[f++]<<q,q+=8),v=s[p&u];c:for(;;){if(w=v>>>24,p>>>=w,q-=w,w=v>>>16&255,!(16&w)){if(0===(64&w)){v=s[(65535&v)+(p&(1<<w)-1)];continue c}a.msg="invalid distance code",c.mode=d;break a}if(y=65535&v,w&=15,q<w&&(p+=B[f++]<<q,q+=8,q<w&&(p+=B[f++]<<q,q+=8)),y+=p&(1<<w)-1,y>k){a.msg="invalid distance too far back",c.mode=d;break a}if(p>>>=w,q-=w,w=h-i,y>w){if(w=y-w,w>m&&c.sane){a.msg="invalid distance too far back",c.mode=d;break a}if(z=0,A=o,0===n){if(z+=l-w,w<x){x-=w;do C[h++]=o[z++];while(--w);z=h-y,A=C}}else if(n<w){if(z+=l+n-w,w-=n,w<x){x-=w;do C[h++]=o[z++];while(--w);if(z=0,n<x){w=n,x-=w;do C[h++]=o[z++];while(--w);z=h-y,A=C}}}else if(z+=n-w,w<x){x-=w;do C[h++]=o[z++];while(--w);z=h-y,A=C}for(;x>2;)C[h++]=A[z++],C[h++]=A[z++],C[h++]=A[z++],x-=3;x&&(C[h++]=A[z++],x>1&&(C[h++]=A[z++]))}else{z=h-y;do C[h++]=C[z++],C[h++]=C[z++],C[h++]=C[z++],x-=3;while(x>2);x&&(C[h++]=C[z++],x>1&&(C[h++]=C[z++]))}break}}break}}while(f<g&&h<j);x=q>>3,f-=x,q-=x<<3,p&=(1<<q)-1,a.next_in=f,a.next_out=h,a.avail_in=f<g?5+(g-f):5-(f-g),a.avail_out=h<j?257+(j-h):257-(h-j),c.hold=p,c.bits=q}},{}],70:[function(a,b,c){"use strict";function d(a){return(a>>>24&255)+(a>>>8&65280)+((65280&a)<<8)+((255&a)<<24)}function e(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function f(a){var b;return a&&a.state?(b=a.state,a.total_in=a.total_out=b.total=0,a.msg="",b.wrap&&(a.adler=1&b.wrap),b.mode=L,b.last=0,b.havedict=0,b.dmax=32768,b.head=null,b.hold=0,b.bits=0,b.lencode=b.lendyn=new s.Buf32(pa),b.distcode=b.distdyn=new s.Buf32(qa),b.sane=1,b.back=-1,D):G}function g(a){var b;return a&&a.state?(b=a.state,b.wsize=0,b.whave=0,b.wnext=0,f(a)):G}function h(a,b){var c,d;return a&&a.state?(d=a.state,b<0?(c=0,b=-b):(c=(b>>4)+1,b<48&&(b&=15)),b&&(b<8||b>15)?G:(null!==d.window&&d.wbits!==b&&(d.window=null),d.wrap=c,d.wbits=b,g(a))):G}function i(a,b){var c,d;return a?(d=new e,a.state=d,d.window=null,c=h(a,b),c!==D&&(a.state=null),c):G}function j(a){return i(a,sa)}function k(a){if(ta){var b;for(q=new s.Buf32(512),r=new s.Buf32(32),b=0;b<144;)a.lens[b++]=8;for(;b<256;)a.lens[b++]=9;for(;b<280;)a.lens[b++]=7;for(;b<288;)a.lens[b++]=8;for(w(y,a.lens,0,288,q,0,a.work,{bits:9}),b=0;b<32;)a.lens[b++]=5;w(z,a.lens,0,32,r,0,a.work,{bits:5}),ta=!1}a.lencode=q,a.lenbits=9,a.distcode=r,a.distbits=5}function l(a,b,c,d){var e,f=a.state;return null===f.window&&(f.wsize=1<<f.wbits,f.wnext=0,f.whave=0,f.window=new s.Buf8(f.wsize)),d>=f.wsize?(s.arraySet(f.window,b,c-f.wsize,f.wsize,0),f.wnext=0,f.whave=f.wsize):(e=f.wsize-f.wnext,e>d&&(e=d),s.arraySet(f.window,b,c-d,e,f.wnext),d-=e,d?(s.arraySet(f.window,b,c-d,d,0),f.wnext=d,f.whave=f.wsize):(f.wnext+=e,f.wnext===f.wsize&&(f.wnext=0),f.whave<f.wsize&&(f.whave+=e))),0}function m(a,b){var c,e,f,g,h,i,j,m,n,o,p,q,r,pa,qa,ra,sa,ta,ua,va,wa,xa,ya,za,Aa=0,Ba=new s.Buf8(4),Ca=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!a||!a.state||!a.output||!a.input&&0!==a.avail_in)return G;c=a.state,c.mode===W&&(c.mode=X),h=a.next_out,f=a.output,j=a.avail_out,g=a.next_in,e=a.input,i=a.avail_in,m=c.hold,n=c.bits,o=i,p=j,xa=D;a:for(;;)switch(c.mode){case L:if(0===c.wrap){c.mode=X;break}for(;n<16;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(2&c.wrap&&35615===m){c.check=0,Ba[0]=255&m,Ba[1]=m>>>8&255,c.check=u(c.check,Ba,2,0),m=0,n=0,c.mode=M;break}if(c.flags=0,c.head&&(c.head.done=!1),!(1&c.wrap)||(((255&m)<<8)+(m>>8))%31){a.msg="incorrect header check",c.mode=ma;break}if((15&m)!==K){a.msg="unknown compression method",c.mode=ma;break}if(m>>>=4,n-=4,wa=(15&m)+8,0===c.wbits)c.wbits=wa;else if(wa>c.wbits){a.msg="invalid window size",c.mode=ma;break}c.dmax=1<<wa,a.adler=c.check=1,c.mode=512&m?U:W,m=0,n=0;break;case M:for(;n<16;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(c.flags=m,(255&c.flags)!==K){a.msg="unknown compression method",c.mode=ma;break}if(57344&c.flags){a.msg="unknown header flags set",c.mode=ma;break}c.head&&(c.head.text=m>>8&1),512&c.flags&&(Ba[0]=255&m,Ba[1]=m>>>8&255,c.check=u(c.check,Ba,2,0)),m=0,n=0,c.mode=N;case N:for(;n<32;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}c.head&&(c.head.time=m),512&c.flags&&(Ba[0]=255&m,Ba[1]=m>>>8&255,Ba[2]=m>>>16&255,Ba[3]=m>>>24&255,c.check=u(c.check,Ba,4,0)),m=0,n=0,c.mode=O;case O:for(;n<16;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}c.head&&(c.head.xflags=255&m,c.head.os=m>>8),512&c.flags&&(Ba[0]=255&m,Ba[1]=m>>>8&255,c.check=u(c.check,Ba,2,0)),m=0,n=0,c.mode=P;case P:if(1024&c.flags){for(;n<16;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}c.length=m,c.head&&(c.head.extra_len=m),512&c.flags&&(Ba[0]=255&m,Ba[1]=m>>>8&255,c.check=u(c.check,Ba,2,0)),m=0,n=0}else c.head&&(c.head.extra=null);c.mode=Q;case Q:if(1024&c.flags&&(q=c.length,q>i&&(q=i),q&&(c.head&&(wa=c.head.extra_len-c.length,c.head.extra||(c.head.extra=new Array(c.head.extra_len)),s.arraySet(c.head.extra,e,g,q,wa)),512&c.flags&&(c.check=u(c.check,e,q,g)),i-=q,g+=q,c.length-=q),c.length))break a;c.length=0,c.mode=R;case R:if(2048&c.flags){if(0===i)break a;q=0;do wa=e[g+q++],c.head&&wa&&c.length<65536&&(c.head.name+=String.fromCharCode(wa));while(wa&&q<i);if(512&c.flags&&(c.check=u(c.check,e,q,g)),i-=q,g+=q,wa)break a}else c.head&&(c.head.name=null);c.length=0,c.mode=S;case S:if(4096&c.flags){if(0===i)break a;q=0;do wa=e[g+q++],c.head&&wa&&c.length<65536&&(c.head.comment+=String.fromCharCode(wa));while(wa&&q<i);if(512&c.flags&&(c.check=u(c.check,e,q,g)),i-=q,g+=q,wa)break a}else c.head&&(c.head.comment=null);c.mode=T;case T:if(512&c.flags){for(;n<16;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(m!==(65535&c.check)){a.msg="header crc mismatch",c.mode=ma;break}m=0,n=0}c.head&&(c.head.hcrc=c.flags>>9&1,c.head.done=!0),a.adler=c.check=0,c.mode=W;break;case U:for(;n<32;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}a.adler=c.check=d(m),m=0,n=0,c.mode=V;case V:if(0===c.havedict)return a.next_out=h,a.avail_out=j,a.next_in=g,a.avail_in=i,c.hold=m,c.bits=n,F;a.adler=c.check=1,c.mode=W;case W:if(b===B||b===C)break a;case X:if(c.last){m>>>=7&n,n-=7&n,c.mode=ja;break}for(;n<3;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}switch(c.last=1&m,m>>>=1,n-=1,3&m){case 0:c.mode=Y;break;case 1:if(k(c),c.mode=ca,b===C){m>>>=2,n-=2;break a}break;case 2:c.mode=_;break;case 3:a.msg="invalid block type",c.mode=ma}m>>>=2,n-=2;break;case Y:for(m>>>=7&n,n-=7&n;n<32;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if((65535&m)!==(m>>>16^65535)){a.msg="invalid stored block lengths",c.mode=ma;break}if(c.length=65535&m,m=0,n=0,c.mode=Z,b===C)break a;case Z:c.mode=$;case $:if(q=c.length){if(q>i&&(q=i),q>j&&(q=j),0===q)break a;s.arraySet(f,e,g,q,h),i-=q,g+=q,j-=q,h+=q,c.length-=q;break}c.mode=W;break;case _:for(;n<14;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(c.nlen=(31&m)+257,m>>>=5,n-=5,c.ndist=(31&m)+1,m>>>=5,n-=5,c.ncode=(15&m)+4,m>>>=4,n-=4,c.nlen>286||c.ndist>30){a.msg="too many length or distance symbols",c.mode=ma;break}c.have=0,c.mode=aa;case aa:for(;c.have<c.ncode;){for(;n<3;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}c.lens[Ca[c.have++]]=7&m,m>>>=3,n-=3}for(;c.have<19;)c.lens[Ca[c.have++]]=0;if(c.lencode=c.lendyn,c.lenbits=7,ya={bits:c.lenbits},xa=w(x,c.lens,0,19,c.lencode,0,c.work,ya),c.lenbits=ya.bits,xa){a.msg="invalid code lengths set",c.mode=ma;break}c.have=0,c.mode=ba;case ba:for(;c.have<c.nlen+c.ndist;){for(;Aa=c.lencode[m&(1<<c.lenbits)-1],qa=Aa>>>24,ra=Aa>>>16&255,sa=65535&Aa,!(qa<=n);){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(sa<16)m>>>=qa,n-=qa,c.lens[c.have++]=sa;else{if(16===sa){for(za=qa+2;n<za;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(m>>>=qa,n-=qa,0===c.have){a.msg="invalid bit length repeat",c.mode=ma;break}wa=c.lens[c.have-1],q=3+(3&m),m>>>=2,n-=2}else if(17===sa){for(za=qa+3;n<za;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}m>>>=qa,n-=qa,wa=0,q=3+(7&m),m>>>=3,n-=3}else{for(za=qa+7;n<za;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}m>>>=qa,n-=qa,wa=0,q=11+(127&m),m>>>=7,n-=7}if(c.have+q>c.nlen+c.ndist){a.msg="invalid bit length repeat",c.mode=ma;break}for(;q--;)c.lens[c.have++]=wa}}if(c.mode===ma)break;if(0===c.lens[256]){a.msg="invalid code -- missing end-of-block",c.mode=ma;break}if(c.lenbits=9,ya={bits:c.lenbits},xa=w(y,c.lens,0,c.nlen,c.lencode,0,c.work,ya),c.lenbits=ya.bits,xa){a.msg="invalid literal/lengths set",c.mode=ma;break}if(c.distbits=6,c.distcode=c.distdyn,ya={bits:c.distbits},xa=w(z,c.lens,c.nlen,c.ndist,c.distcode,0,c.work,ya),c.distbits=ya.bits,xa){a.msg="invalid distances set",c.mode=ma;break}if(c.mode=ca,b===C)break a;case ca:c.mode=da;case da:if(i>=6&&j>=258){a.next_out=h,a.avail_out=j,a.next_in=g,a.avail_in=i,c.hold=m,c.bits=n,v(a,p),h=a.next_out,f=a.output,j=a.avail_out,g=a.next_in,e=a.input,i=a.avail_in,m=c.hold,n=c.bits,c.mode===W&&(c.back=-1);break}for(c.back=0;Aa=c.lencode[m&(1<<c.lenbits)-1],qa=Aa>>>24,ra=Aa>>>16&255,sa=65535&Aa,!(qa<=n);){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(ra&&0===(240&ra)){for(ta=qa,ua=ra,va=sa;Aa=c.lencode[va+((m&(1<<ta+ua)-1)>>ta)],qa=Aa>>>24,ra=Aa>>>16&255,sa=65535&Aa,!(ta+qa<=n);){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}m>>>=ta,n-=ta,c.back+=ta}if(m>>>=qa,n-=qa,c.back+=qa,c.length=sa,0===ra){c.mode=ia;break}if(32&ra){c.back=-1,c.mode=W;break}if(64&ra){a.msg="invalid literal/length code",c.mode=ma;break}c.extra=15&ra,c.mode=ea;case ea:if(c.extra){for(za=c.extra;n<za;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}c.length+=m&(1<<c.extra)-1,m>>>=c.extra,n-=c.extra,c.back+=c.extra}c.was=c.length,c.mode=fa;case fa:for(;Aa=c.distcode[m&(1<<c.distbits)-1],qa=Aa>>>24,ra=Aa>>>16&255,sa=65535&Aa,!(qa<=n);){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(0===(240&ra)){for(ta=qa,ua=ra,va=sa;Aa=c.distcode[va+((m&(1<<ta+ua)-1)>>ta)],qa=Aa>>>24,ra=Aa>>>16&255,sa=65535&Aa,!(ta+qa<=n);){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}m>>>=ta,n-=ta,c.back+=ta}if(m>>>=qa,n-=qa,c.back+=qa,64&ra){a.msg="invalid distance code",c.mode=ma;break}c.offset=sa,c.extra=15&ra,c.mode=ga;case ga:if(c.extra){for(za=c.extra;n<za;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}c.offset+=m&(1<<c.extra)-1,m>>>=c.extra,n-=c.extra,c.back+=c.extra}if(c.offset>c.dmax){a.msg="invalid distance too far back",c.mode=ma;break}c.mode=ha;case ha:if(0===j)break a;if(q=p-j,c.offset>q){if(q=c.offset-q,q>c.whave&&c.sane){a.msg="invalid distance too far back",c.mode=ma;break}q>c.wnext?(q-=c.wnext,r=c.wsize-q):r=c.wnext-q,q>c.length&&(q=c.length),pa=c.window}else pa=f,r=h-c.offset,q=c.length;q>j&&(q=j),j-=q,c.length-=q;do f[h++]=pa[r++];while(--q);0===c.length&&(c.mode=da);break;case ia:if(0===j)break a;f[h++]=c.length,j--,c.mode=da;break;case ja:if(c.wrap){for(;n<32;){if(0===i)break a;i--,m|=e[g++]<<n,n+=8}if(p-=j,a.total_out+=p,c.total+=p,p&&(a.adler=c.check=c.flags?u(c.check,f,p,h-p):t(c.check,f,p,h-p)),p=j,(c.flags?m:d(m))!==c.check){a.msg="incorrect data check",c.mode=ma;break}m=0,n=0}c.mode=ka;case ka:if(c.wrap&&c.flags){for(;n<32;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(m!==(4294967295&c.total)){a.msg="incorrect length check",c.mode=ma;break}m=0,n=0}c.mode=la;case la:xa=E;break a;case ma:xa=H;break a;case na:return I;case oa:default:return G}return a.next_out=h,a.avail_out=j,a.next_in=g,a.avail_in=i,c.hold=m,c.bits=n,(c.wsize||p!==a.avail_out&&c.mode<ma&&(c.mode<ja||b!==A))&&l(a,a.output,a.next_out,p-a.avail_out)?(c.mode=na,I):(o-=a.avail_in,p-=a.avail_out,a.total_in+=o,a.total_out+=p,c.total+=p,c.wrap&&p&&(a.adler=c.check=c.flags?u(c.check,f,p,a.next_out-p):t(c.check,f,p,a.next_out-p)),a.data_type=c.bits+(c.last?64:0)+(c.mode===W?128:0)+(c.mode===ca||c.mode===Z?256:0),(0===o&&0===p||b===A)&&xa===D&&(xa=J),xa)}function n(a){if(!a||!a.state)return G;var b=a.state;return b.window&&(b.window=null),a.state=null,D}function o(a,b){var c;return a&&a.state?(c=a.state,0===(2&c.wrap)?G:(c.head=b,b.done=!1,D)):G}function p(a,b){var c,d,e,f=b.length;return a&&a.state?(c=a.state,0!==c.wrap&&c.mode!==V?G:c.mode===V&&(d=1,d=t(d,b,f,0),d!==c.check)?H:(e=l(a,b,f,f))?(c.mode=na,I):(c.havedict=1,D)):G}var q,r,s=a("../utils/common"),t=a("./adler32"),u=a("./crc32"),v=a("./inffast"),w=a("./inftrees"),x=0,y=1,z=2,A=4,B=5,C=6,D=0,E=1,F=2,G=-2,H=-3,I=-4,J=-5,K=8,L=1,M=2,N=3,O=4,P=5,Q=6,R=7,S=8,T=9,U=10,V=11,W=12,X=13,Y=14,Z=15,$=16,_=17,aa=18,ba=19,ca=20,da=21,ea=22,fa=23,ga=24,ha=25,ia=26,ja=27,ka=28,la=29,ma=30,na=31,oa=32,pa=852,qa=592,ra=15,sa=ra,ta=!0;c.inflateReset=g,c.inflateReset2=h,c.inflateResetKeep=f,c.inflateInit=j,c.inflateInit2=i,c.inflate=m,c.inflateEnd=n,c.inflateGetHeader=o,c.inflateSetDictionary=p,c.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":62,"./adler32":64,"./crc32":66,"./inffast":69,"./inftrees":71}],71:[function(a,b,c){"use strict";var d=a("../utils/common"),e=15,f=852,g=592,h=0,i=1,j=2,k=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],l=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],m=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],n=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];b.exports=function(a,b,c,o,p,q,r,s){var t,u,v,w,x,y,z,A,B,C=s.bits,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=null,O=0,P=new d.Buf16(e+1),Q=new d.Buf16(e+1),R=null,S=0;for(D=0;D<=e;D++)P[D]=0;for(E=0;E<o;E++)P[b[c+E]]++;for(H=C,G=e;G>=1&&0===P[G];G--);if(H>G&&(H=G),0===G)return p[q++]=20971520,p[q++]=20971520,s.bits=1,0;for(F=1;F<G&&0===P[F];F++);for(H<F&&(H=F),K=1,D=1;D<=e;D++)if(K<<=1,K-=P[D],K<0)return-1;if(K>0&&(a===h||1!==G))return-1;for(Q[1]=0,D=1;D<e;D++)Q[D+1]=Q[D]+P[D];for(E=0;E<o;E++)0!==b[c+E]&&(r[Q[b[c+E]]++]=E);if(a===h?(N=R=r,y=19):a===i?(N=k,O-=257,R=l,S-=257,y=256):(N=m,R=n,y=-1),M=0,E=0,D=F,x=q,I=H,J=0,v=-1,L=1<<H,w=L-1,a===i&&L>f||a===j&&L>g)return 1;for(;;){z=D-J,r[E]<y?(A=0,B=r[E]):r[E]>y?(A=R[S+r[E]],B=N[O+r[E]]):(A=96,B=0),t=1<<D-J,u=1<<I,F=u;do u-=t,p[x+(M>>J)+u]=z<<24|A<<16|B|0;while(0!==u);for(t=1<<D-1;M&t;)t>>=1;if(0!==t?(M&=t-1,M+=t):M=0,E++,0===--P[D]){if(D===G)break;D=b[c+r[E]]}if(D>H&&(M&w)!==v){for(0===J&&(J=H),x+=F,I=D-J,K=1<<I;I+J<G&&(K-=P[I+J],!(K<=0));)I++,K<<=1;if(L+=1<<I,a===i&&L>f||a===j&&L>g)return 1;v=M&w,p[v]=H<<24|I<<16|x-q|0}}return 0!==M&&(p[x+M]=D-J<<24|64<<16|0),s.bits=H,0}},{"../utils/common":62}],72:[function(a,b,c){"use strict";b.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],73:[function(a,b,c){"use strict";function d(a){for(var b=a.length;--b>=0;)a[b]=0}function e(a,b,c,d,e){this.static_tree=a,this.extra_bits=b,this.extra_base=c,this.elems=d,this.max_length=e,this.has_stree=a&&a.length}function f(a,b){this.dyn_tree=a,this.max_code=0,this.stat_desc=b}function g(a){return a<256?ia[a]:ia[256+(a>>>7)]}function h(a,b){a.pending_buf[a.pending++]=255&b,a.pending_buf[a.pending++]=b>>>8&255}function i(a,b,c){a.bi_valid>X-c?(a.bi_buf|=b<<a.bi_valid&65535,h(a,a.bi_buf),a.bi_buf=b>>X-a.bi_valid,a.bi_valid+=c-X):(a.bi_buf|=b<<a.bi_valid&65535,a.bi_valid+=c)}function j(a,b,c){i(a,c[2*b],c[2*b+1])}function k(a,b){var c=0;do c|=1&a,a>>>=1,c<<=1;while(--b>0);return c>>>1}function l(a){16===a.bi_valid?(h(a,a.bi_buf),a.bi_buf=0,a.bi_valid=0):a.bi_valid>=8&&(a.pending_buf[a.pending++]=255&a.bi_buf,a.bi_buf>>=8,a.bi_valid-=8)}function m(a,b){var c,d,e,f,g,h,i=b.dyn_tree,j=b.max_code,k=b.stat_desc.static_tree,l=b.stat_desc.has_stree,m=b.stat_desc.extra_bits,n=b.stat_desc.extra_base,o=b.stat_desc.max_length,p=0;for(f=0;f<=W;f++)a.bl_count[f]=0;for(i[2*a.heap[a.heap_max]+1]=0,
c=a.heap_max+1;c<V;c++)d=a.heap[c],f=i[2*i[2*d+1]+1]+1,f>o&&(f=o,p++),i[2*d+1]=f,d>j||(a.bl_count[f]++,g=0,d>=n&&(g=m[d-n]),h=i[2*d],a.opt_len+=h*(f+g),l&&(a.static_len+=h*(k[2*d+1]+g)));if(0!==p){do{for(f=o-1;0===a.bl_count[f];)f--;a.bl_count[f]--,a.bl_count[f+1]+=2,a.bl_count[o]--,p-=2}while(p>0);for(f=o;0!==f;f--)for(d=a.bl_count[f];0!==d;)e=a.heap[--c],e>j||(i[2*e+1]!==f&&(a.opt_len+=(f-i[2*e+1])*i[2*e],i[2*e+1]=f),d--)}}function n(a,b,c){var d,e,f=new Array(W+1),g=0;for(d=1;d<=W;d++)f[d]=g=g+c[d-1]<<1;for(e=0;e<=b;e++){var h=a[2*e+1];0!==h&&(a[2*e]=k(f[h]++,h))}}function o(){var a,b,c,d,f,g=new Array(W+1);for(c=0,d=0;d<Q-1;d++)for(ka[d]=c,a=0;a<1<<ba[d];a++)ja[c++]=d;for(ja[c-1]=d,f=0,d=0;d<16;d++)for(la[d]=f,a=0;a<1<<ca[d];a++)ia[f++]=d;for(f>>=7;d<T;d++)for(la[d]=f<<7,a=0;a<1<<ca[d]-7;a++)ia[256+f++]=d;for(b=0;b<=W;b++)g[b]=0;for(a=0;a<=143;)ga[2*a+1]=8,a++,g[8]++;for(;a<=255;)ga[2*a+1]=9,a++,g[9]++;for(;a<=279;)ga[2*a+1]=7,a++,g[7]++;for(;a<=287;)ga[2*a+1]=8,a++,g[8]++;for(n(ga,S+1,g),a=0;a<T;a++)ha[2*a+1]=5,ha[2*a]=k(a,5);ma=new e(ga,ba,R+1,S,W),na=new e(ha,ca,0,T,W),oa=new e(new Array(0),da,0,U,Y)}function p(a){var b;for(b=0;b<S;b++)a.dyn_ltree[2*b]=0;for(b=0;b<T;b++)a.dyn_dtree[2*b]=0;for(b=0;b<U;b++)a.bl_tree[2*b]=0;a.dyn_ltree[2*Z]=1,a.opt_len=a.static_len=0,a.last_lit=a.matches=0}function q(a){a.bi_valid>8?h(a,a.bi_buf):a.bi_valid>0&&(a.pending_buf[a.pending++]=a.bi_buf),a.bi_buf=0,a.bi_valid=0}function r(a,b,c,d){q(a),d&&(h(a,c),h(a,~c)),G.arraySet(a.pending_buf,a.window,b,c,a.pending),a.pending+=c}function s(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}function t(a,b,c){for(var d=a.heap[c],e=c<<1;e<=a.heap_len&&(e<a.heap_len&&s(b,a.heap[e+1],a.heap[e],a.depth)&&e++,!s(b,d,a.heap[e],a.depth));)a.heap[c]=a.heap[e],c=e,e<<=1;a.heap[c]=d}function u(a,b,c){var d,e,f,h,k=0;if(0!==a.last_lit)do d=a.pending_buf[a.d_buf+2*k]<<8|a.pending_buf[a.d_buf+2*k+1],e=a.pending_buf[a.l_buf+k],k++,0===d?j(a,e,b):(f=ja[e],j(a,f+R+1,b),h=ba[f],0!==h&&(e-=ka[f],i(a,e,h)),d--,f=g(d),j(a,f,c),h=ca[f],0!==h&&(d-=la[f],i(a,d,h)));while(k<a.last_lit);j(a,Z,b)}function v(a,b){var c,d,e,f=b.dyn_tree,g=b.stat_desc.static_tree,h=b.stat_desc.has_stree,i=b.stat_desc.elems,j=-1;for(a.heap_len=0,a.heap_max=V,c=0;c<i;c++)0!==f[2*c]?(a.heap[++a.heap_len]=j=c,a.depth[c]=0):f[2*c+1]=0;for(;a.heap_len<2;)e=a.heap[++a.heap_len]=j<2?++j:0,f[2*e]=1,a.depth[e]=0,a.opt_len--,h&&(a.static_len-=g[2*e+1]);for(b.max_code=j,c=a.heap_len>>1;c>=1;c--)t(a,f,c);e=i;do c=a.heap[1],a.heap[1]=a.heap[a.heap_len--],t(a,f,1),d=a.heap[1],a.heap[--a.heap_max]=c,a.heap[--a.heap_max]=d,f[2*e]=f[2*c]+f[2*d],a.depth[e]=(a.depth[c]>=a.depth[d]?a.depth[c]:a.depth[d])+1,f[2*c+1]=f[2*d+1]=e,a.heap[1]=e++,t(a,f,1);while(a.heap_len>=2);a.heap[--a.heap_max]=a.heap[1],m(a,b),n(f,j,a.bl_count)}function w(a,b,c){var d,e,f=-1,g=b[1],h=0,i=7,j=4;for(0===g&&(i=138,j=3),b[2*(c+1)+1]=65535,d=0;d<=c;d++)e=g,g=b[2*(d+1)+1],++h<i&&e===g||(h<j?a.bl_tree[2*e]+=h:0!==e?(e!==f&&a.bl_tree[2*e]++,a.bl_tree[2*$]++):h<=10?a.bl_tree[2*_]++:a.bl_tree[2*aa]++,h=0,f=e,0===g?(i=138,j=3):e===g?(i=6,j=3):(i=7,j=4))}function x(a,b,c){var d,e,f=-1,g=b[1],h=0,k=7,l=4;for(0===g&&(k=138,l=3),d=0;d<=c;d++)if(e=g,g=b[2*(d+1)+1],!(++h<k&&e===g)){if(h<l){do j(a,e,a.bl_tree);while(0!==--h)}else 0!==e?(e!==f&&(j(a,e,a.bl_tree),h--),j(a,$,a.bl_tree),i(a,h-3,2)):h<=10?(j(a,_,a.bl_tree),i(a,h-3,3)):(j(a,aa,a.bl_tree),i(a,h-11,7));h=0,f=e,0===g?(k=138,l=3):e===g?(k=6,l=3):(k=7,l=4)}}function y(a){var b;for(w(a,a.dyn_ltree,a.l_desc.max_code),w(a,a.dyn_dtree,a.d_desc.max_code),v(a,a.bl_desc),b=U-1;b>=3&&0===a.bl_tree[2*ea[b]+1];b--);return a.opt_len+=3*(b+1)+5+5+4,b}function z(a,b,c,d){var e;for(i(a,b-257,5),i(a,c-1,5),i(a,d-4,4),e=0;e<d;e++)i(a,a.bl_tree[2*ea[e]+1],3);x(a,a.dyn_ltree,b-1),x(a,a.dyn_dtree,c-1)}function A(a){var b,c=4093624447;for(b=0;b<=31;b++,c>>>=1)if(1&c&&0!==a.dyn_ltree[2*b])return I;if(0!==a.dyn_ltree[18]||0!==a.dyn_ltree[20]||0!==a.dyn_ltree[26])return J;for(b=32;b<R;b++)if(0!==a.dyn_ltree[2*b])return J;return I}function B(a){pa||(o(),pa=!0),a.l_desc=new f(a.dyn_ltree,ma),a.d_desc=new f(a.dyn_dtree,na),a.bl_desc=new f(a.bl_tree,oa),a.bi_buf=0,a.bi_valid=0,p(a)}function C(a,b,c,d){i(a,(L<<1)+(d?1:0),3),r(a,b,c,!0)}function D(a){i(a,M<<1,3),j(a,Z,ga),l(a)}function E(a,b,c,d){var e,f,g=0;a.level>0?(a.strm.data_type===K&&(a.strm.data_type=A(a)),v(a,a.l_desc),v(a,a.d_desc),g=y(a),e=a.opt_len+3+7>>>3,f=a.static_len+3+7>>>3,f<=e&&(e=f)):e=f=c+5,c+4<=e&&b!==-1?C(a,b,c,d):a.strategy===H||f===e?(i(a,(M<<1)+(d?1:0),3),u(a,ga,ha)):(i(a,(N<<1)+(d?1:0),3),z(a,a.l_desc.max_code+1,a.d_desc.max_code+1,g+1),u(a,a.dyn_ltree,a.dyn_dtree)),p(a),d&&q(a)}function F(a,b,c){return a.pending_buf[a.d_buf+2*a.last_lit]=b>>>8&255,a.pending_buf[a.d_buf+2*a.last_lit+1]=255&b,a.pending_buf[a.l_buf+a.last_lit]=255&c,a.last_lit++,0===b?a.dyn_ltree[2*c]++:(a.matches++,b--,a.dyn_ltree[2*(ja[c]+R+1)]++,a.dyn_dtree[2*g(b)]++),a.last_lit===a.lit_bufsize-1}var G=a("../utils/common"),H=4,I=0,J=1,K=2,L=0,M=1,N=2,O=3,P=258,Q=29,R=256,S=R+1+Q,T=30,U=19,V=2*S+1,W=15,X=16,Y=7,Z=256,$=16,_=17,aa=18,ba=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],ca=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],da=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],ea=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],fa=512,ga=new Array(2*(S+2));d(ga);var ha=new Array(2*T);d(ha);var ia=new Array(fa);d(ia);var ja=new Array(P-O+1);d(ja);var ka=new Array(Q);d(ka);var la=new Array(T);d(la);var ma,na,oa,pa=!1;c._tr_init=B,c._tr_stored_block=C,c._tr_flush_block=E,c._tr_tally=F,c._tr_align=D},{"../utils/common":62}],74:[function(a,b,c){"use strict";function d(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}b.exports=d},{}]},{},[10])(10)});
;/*! pdfmake v0.1.36, @license MIT, @link http://pdfmake.org */
//# sourceMappingURL=pdfmake.min.js.map

;this.pdfMake = this.pdfMake || {}; this.pdfMake.vfs = {
  "Roboto-Italic.ttf": "AAEAAAASAQAABAAgR0RFRtRX1FkAAgp8AAACREdQT1NKcuCzAAIMwAAAUiRHU1VCw4aZEQACXuQAABfoT1MvMqCnsO0AAAGoAAAAYGNtYXBAbb9DAAAafAAABoBjdnQgJEEG5QAAI5QAAABMZnBnbWf0XKsAACD8AAABvGdhc3AACAATAAIKcAAAAAxnbHlmoLsktAAALagAAdn2aGRteCEe/AUAABWQAAAE7GhlYWT4gasAAAABLAAAADZoaGVhDKYSegAAAWQAAAAkaG10eHJO1ygAAAIIAAATiGxvY2EXM5zBAAAj4AAACcZtYXhwBxICWwAAAYgAAAAgbmFtZTlLZFAAAgegAAACrnBvc3T/YQBkAAIKUAAAACBwcmVwdKCP7AAAIrgAAADbAAEAAAACAAAcadIiXw889QAbCAAAAAAAxPARLgAAAADQ206M+jj91QlMCHMAAgAJAAIAAAAAAAAAAQAAB2z+DAAACRb6OP52CUwIAAGzAAAAAAAAAAAAAAAABOIAAQAABOIAkAAWAFYABQABAAAAAAAOAAACAAFzAAYAAQADBAsBkAAFAAAFmgUzAAABHwWaBTMAAAPRAGYCAAAAAgAAAAAAAAAAAOAACv9QACF/AAAAIQAAAABHT09HAAEAAP/9BgD+AABmB5oCACAAAZ8AAAAABDoFsAAgACAAAgOWAGQACgAAAAoAAAH2AAAB9gAAAgkAQwKFAMgE0QBSBGYASgW5ALsE3QA6AWQAqgKxAG0Cvf+PA2IAawRwAEwBkP+PAi4AGQIVADUDPf+PBGYAaARmAPkEZgAXBGYANARmAAUEZgByBGYAcARmAJ0EZgBBBGYAlAHrACsBrv+bA/wAQQRMAHAEGAA6A7QApQcCAEQFGv+vBN8AOwUXAHQFIQA7BHMAOwRUADsFUwB5BZIAOwImAEkEUgAKBOcAOwQ3ADsG0AA7BZIAOwVgAHcE7wA7BWAAbwTRADoEpQAnBKsAqAUSAGcE+gCkBuwAwwTn/9QEswCoBK//6wIZ//8DOQC/Ahn/egNIAE8Div+BAnAAzwRDADMEZQAfBBoARgRqAEsEJgBFArwAdARlAAQEUAAfAewALwHk/xQD+QAgAewALwbXAB4EUgAfBHcARQRl/9cEcwBJAqoAHwQKAC4CkwBDBFEAWwPMAG4F3wCAA+P/xAO2/6UD4//tAqoAOAHuACECqv+MBVEAaQHu//EESABSBIz/8wWSABIEvQBTAeb/9wTM/90DSADbBiMAYgOCAMMDrgBZBFYAgQYkAGEDmADjAvAA6AQvACUC4gBcAuIAbgJ5ANUEb//lA9UAewIQAKUB9v/IAuIA3wORAMADrQAPBbkAuQYPALQGEwCeA7b/0wdL/4QELQAoBWAAIASgADgEpwAeBpcAEwSWAFwEeABEBG8AOQSD/+AFeQA1AfUALgRbAC0EOAAiAiIAIwVqADUEbwAkB3AAVAcWAEcB9wAzBWcAUQKu/0kFXgBnBHkAQgVvAGcE1wBaAf7/CQQhAD4DsQEXA3wBJgOZAOMDWgEHAewBDgKiAQECI/+vA7MA3QLvAMICUv/pAAr9agAK/esACv0LAAr99QAK/NsB6vy7AgcBIQP2APMCEQClBFsAQwWD/7EFUQBpBSD/xAR4AAwFkwBEBHj/2gWZAFQFaACGBTMACgRsAEgEo//wA+0AhARvAEMEOQApBA8AggRvACQEdQBzAo0AhQRW/7cD2AA/BKkAYARv/9wENgBOBG8ASgQWAIcERQBnBYIAQQV5AE8GbgBmBIcAUQQrAGcGIgBmBdsAoQVFAHgIWf/MCGwAQwZaALQFkgBCBO4ANAXg/4sHFf+sBKUAJQWSAEMFiP/KBOoAkwYHAFsFtgBBBVoAzgdXAEIHjgBCBe0AiQbAAEUE6AA2BUUAdAb6AEkE+//oBFQARgR5ADADSwAtBLn/jQX7/6UD+wAhBIUALwQ7AC8Ehv/IBcsAMASEAC8EhQAvA8QAYAWqAEwEowAvBEIAewZQAC8GdQAkBNsAVgYQADAEQQAwBDYANAZfADAETP+/BFAAHwQ2AE4Gn//DBrkALwRwAB8EhQAvBtwAbwYGAE8EPwAuBv4ASQXUACwEt/+6BC//ogbfAFoF5wBOBqcAJgW+ACkIyQBIB58ALgQN/84Dx//KBVEAaQRyAEIE7QCtA+4AhAVRAGoEbwBEBtUAdAX/AFIG3ABvBgYATwUUAGYEMABNBOEAQAAK/OgACv0LAAr+FwAK/jsACvo4AAr6TwQ/AC4E/gA6BHD/1wRLADUDfwAkBMAAQwPwACQE7AA2BGYALQZkALsFYwB0B50AOgWSACQH/ABCBskAJAXKAHEEuABfBv8ArAU9AFcFTwDEBFIAmAVQAOwGCgCKBKMABwTsADUEQwAtBZAAQwRvACQFZwBRBI4APASO//wEnf/4Azr/6QTaADEGawAyBrkATAYvAK0FDQBoBDIArwPyAKAHj//fBk3/2gfIADsGeAAjBNoAagQHAEwFiwCaBQMAfQVFAGoDEgDyA/8AAAf0AAAD/wAAB/QAAAKuAAACBAAAAVwAAARmAAACKQAAAZ8AAADVAAAACgAAAi0AGQItABkFIgCnBhkAmQOU/18BlwCuAZcAiQGV/5gBlwDUAsgAtgLPAJUCtv+UBFEAdwR2//YCpwCgA7EAOQU7ADkA+QAaB3kAlwJeAF8CXgACA5H/7wLiAGEDUAB+BIz/8wYuAAoGaAA5CD8AOgc0ACIGBgAfBGYAUQW3AEMEDABJBFwACgUp//IFMP/lBcQAzAO7AEsIBQA1BOUA6gT6AIIGAQC1BqwAkgalAI8GQwC+BHYATQVtACQElf+sBHkAqwSqAEEIBQBNAgb/GgRpADEETABwA/z/1AQZABkD8wBBAkQAeAKFAHAB/v/jBNcAdARWAFgEcgB0BqoAdAaqAHQE0gB0BnIAKQAKAAAH/v+rCDUAXAQKAGIEhQBBAff/DwGP/70DkgETA4wBEgONARED4ADNA/kAzgPfACID2wDSA5IBEQH4APwEbP+lBDkAHQRkAEcEZwAdA9IAHQO4AB0EkgBMBMcAHQHjACoDvP/2BD0AHQOiAB0F3gAdBMcAHQShAEoERQAdBKEARQQzAB0ECgARBBAAbQRkAEUETwB6BfAAlQQ9/7YEFQB0BA3/3ALiAB0C4gBrAuL/6QLi//sC4v/wAuIAFgLiAB4C4gAvAuIACwLiADYDhACTAqoBCwQk/5oEqABLBS0AQwUHAEQD/gAlBR8ARAP6ACUECgASBB0ABgQlADQDnQAdBE//sAShAEoET/+wA3j/0wSzAB0D2//VBUgAUQT6AH4E1gAMBVIAbARkAEcHE//EByEAHQVUAG0EsgAdBEIAHwUH/4kF5/+vBCgAEQTQAB8ENwAeBKb/xAQJAFgFCgAdBFIAWgYqAB0GgwAdBQAAUAXNAB8ENwAfBGMAIAZOAB0Ebv/fA/z/+gYh/68EYQAeBOwAHgUZAGkFoABQBEcAdASO/7YGOgBsBFIAWgRSAB0FoQAvBK8AQQQoABEEoQBKBB3//wPPAB4H7gAdBJH/3QRlAB8EHABDBHoARwRzACQDaACpBHT/1wSDAEYEJgBFBGUANQVhAIEFjACEBXIARAW9AIUFwACFA8IAuwRpADkDnQAdBEH/gQS0/9MC4gCQAuIAYQLiAIkC4gCRAuIAogLiAH4C4gCpBFP/1QQYACsGewBJBJ8APwTkAGQCAP8JAf//CQH2AC4B9v96AfYALgH2//EEOQAdAfYAAAIuABkFPwAvBT8ALwRuAD0EqwCoApP/9AUa/68FGv+vBRr/rwUa/68FGv+vBRr/rwUa/68FFwB0BHMAOwRzADsEcwA7BHMAOwImAEkCJgBJAiYASQImAEkFkgA7BWAAdwVgAHcFYAB3BWAAdwVgAHcFEgBnBRIAZwUSAGcFEgBnBLMAqARDADMEQwAzBEMAMwRDADMEQwAzBEMAMwRDADMEGgBGBCYARQQmAEUEJgBFBCYARQH1AC4B9QAuAfUALgH1AC4EUgAfBHcARQR3AEUEdwBFBHcARQR3AEUEUQBbBFEAWwRRAFsEUQBbA7b/pQO2/6UFGv+vBEMAMwUa/68EQwAzBRr/rwRDADMFFwB0BBoARgUXAHQEGgBGBRcAdAQaAEYFFwB0BBoARgUhADsFAABLBHMAOwQmAEUEcwA7BCYARQRzADsEJgBFBHMAOwQmAEUEcwA7BCYARQVTAHkEZQAEBVMAeQRlAAQFUwB5BGUABAVTAHkEZQAEBZIAOwRQAB8CJgBJAfUAEQImAEkB9QAaAiYASQH1AC4CJv+OAez/cAImAEkGeABJA9AALwRSAAoB/v8JBOcAOwP5ACAENwA7AewALwQ3ADsB7P+jBDcAOwKCAC8ENwA7AsgALwWSADsEUgAfBZIAOwRSAB8FkgA7BFIAHwRSAB8FYAB3BHcARQVgAHcEdwBFBWAAdwR3AEUE0QA6AqoAHwTRADoCqv+fBNEAOgKqAB8EpQAnBAoALgSlACcECgAuBKUAJwQKAC4EpQAnBAoALgSlACcECgAuBKsAqAKTAEMEqwCoApMAQwSrAKgCuwBDBRIAZwRRAFsFEgBnBFEAWwUSAGcEUQBbBRIAZwRRAFsFEgBnBFEAWwUSAGcEUQBbBuwAwwXfAIAEswCoA7b/pQSzAKgEr//rA+P/7QSv/+sD4//tBK//6wPj/+0HS/+EBpcAEwVgACAEbwA5BGf/sARn/7AEEABtBGz/pQRs/6UEbP+lBGz/pQRs/6UEbP+lBGz/pQRkAEcD0gAdA9IAHQPSAB0D0gAdAeMAKgHjACoB4wAqAeMAKgTHAB0EoQBKBKEASgShAEoEoQBKBKEASgRkAEUEZABFBGQARQRkAEUEFQB0BGz/pQRs/6UEbP+lBGQARwRkAEcEZABHBGQARwRnAB0D0gAdA9IAHQPSAB0D0gAdA9IAHQSSAEwEkgBMBJIATASSAEwExwAdAeMADwHjABgB4wAqAeP/egHjACoDvP/2BD0AHQOiAB0DogAdA6IAHQOiAB0ExwAdBMcAHQTHAB0EoQBKBKEASgShAEoEMwAdBDMAHQQzAB0ECgARBAoAEQQKABEECgARBBAAbQQQAG0EEABtBGQARQRkAEUEZABFBGQARQRkAEUEZABFBfAAlQQVAHQEFQB0BA3/3AQN/9wEDf/cBRr/rwTXAGMF9gBxAooAdwV0AGoFF//uBUcAHgKNACAFGv+vBN8AOwRzADsEr//rBZIAOwImAEkE5wA7BtAAOwWSADsFYAB3BO8AOwSrAKgEswCoBOf/1AImAEkEswCoBGwASAQ5ACkEbwAkAo0AhQRFAGcEWwAtBHcARQRv/+UDzABuA+P/xAKNAGcERQBnBHcARQRFAGcGbgBmBHMAOwRbAEMEpQAnAiYASQImAEkEUgAKBQcARATnADsE6gCTBRr/rwTfADsEWwBDBHMAOwWSAEMG0AA7BZIAOwVgAHcFkwBEBO8AOwUXAHQEqwCoBOf/1ARDADMEJgBFBIUALwR3AEUEZf/XBBoARgO2/6UD4//EBCYARQNLAC0ECgAuAewALwH1AC4B5P8UBDsALwO2/6UG7ADDBd8AgAbsAMMF3wCABuwAwwXfAIAEswCoA7b/pQFkAKoChQDIBBIAQwH+/wkBlwCJBtAAOwbXAB4FGv+vBEMAMwRzADsFkgBDBCYARQSFAC8FaACGBXkATwTtAK0D7gCECC0ARQkWAHcEpQAlA/sAIQUXAHQEGgBGBLMAqAPtAIQCJgBJBxX/rAX7/6UCJgBJBRr/rwRDADMFGv+vBEMAMwdL/4QGlwATBHMAOwQmAEUFZwBRBCEAPgQhAD4HFf+sBfv/pQSlACUD+wAhBZIAQwSFAC8FkgBDBIUALwVgAHcEdwBFBVEAaQRyAEIFUQBpBHIAQgVFAHQENgA0BOoAkwO2/6UE6gCTA7b/pQTqAJMDtv+lBVoAzgRCAHsGwABFBhAAMATn/9QD4//EBGoASwWI/8oEhv/IBRr/rwRDADMFGv+vBEMAMwUa/68EQwAzBRr/rwRDADMFGv+vBEMAMwUa/68EQwAzBRr/rwRDADMFGv+vBEMAMwUa/68EQwAzBRr/rwRDADMFGv+vBEMAMwUa/68EQwAzBHMAOwQmAEUEcwA7BCYARQRzADsEJgBFBHMAOwQmAEUEcwA7BCYARQRzADsEJgBFBHMAOwQmAEUEcwA7BCYARQImAEkB9QAuAiYADgHs//EFYAB3BHcARQVgAHcEdwBFBWAAdwR3AEUFYAB3BHcARQVgAHcEdwBFBWAAdwR3AEUFYAB3BHcARQVeAGcEeQBCBV4AZwR5AEIFXgBnBHkAQgVeAGcEeQBCBV4AZwR5AEIFEgBnBFEAWwUSAGcEUQBbBW8AZwTXAFoFbwBnBNcAWgVvAGcE1wBaBW8AZwTXAFoFbwBnBNcAWgSzAKgDtv+lBLMAqAO2/6UEswCoA7b/pQSIAEsEiAAABQcARAQ7AC8FkgA7BIQALwSrAKgDxABgBOf/1APj/8QFWgDOBEIAewVaAM4EQgB7BFsAQwNLAC0HFf+sBfv/pQYKAIoEowAHBFAAHwToACsE6AArBFsAEANL/+YFGwBYBBIAOQWSAEMEhQAvBZIAOwSEAC8G0AA7BcsAMAWI/8oEhv/IBLMAqAPtAF0E5//UA+P/xAQ5ACkEVP/XBhkAmQRmABcEZgA0BGYABQRmAHIEegCUBI4AfAVTAHkEZQAEBZIAOwRSAB8FGv+vBEMAMwRzADsEJgBFAib/3wH1/40FYAB3BHcARQTRADoCqgAfBRIAZwRRAFsEj/+yBN8AOwRlAB8FIQA7BGoASwUhADsEagBLBZIAOwRQAB8E5wA7A/kAIATnADsD+QAgBDcAOwHs//IG0AA7BtcAHgWSADsEUgAfBO8AOwRl/9cE0QA6Aqr/7gSlACcECgAuBKsAqAKTAEME+gCkA8wAbgT6AKQDzABuBuwAwwXfAIAEr//rA+P/7QWm/wwEbP+lBA7/4QUD//0CHwABBKsAHQRR/5sE4AAWBGz/pQQ5AB0D0gAdBA3/3ATHAB0B4wAqBD0AHQXeAB0EoQBKBEUAHQQQAG0EFQB0BD3/tgHjACoEFQB0A9IAHQOdAB0ECgARAeMAKgHjACoDvP/2BD0AHQQJAFgEbP+lBDkAHQOdAB0D0gAdBNAAHwXeAB0ExwAdBKEASgSzAB0ERQAdBGQARwQQAG0EPf+2BCgAEQTHAB0EZABIBBUAdAWhAC8E0AAfBAkAWAVIAFEFGv+vBEMAMwRzADsEJgBFAAAAAQAABOQJCgQAAAICAgMFBQYFAgMDBAUCAgIEBQUFBQUFBQUFBQICBAUFBAgGBQYGBQUGBgIFBgUIBgYGBgUFBQYGCAYFBQIEAgQEAwUFBQUFAwUFAgIEAggFBQUFAwUDBQQHBAQEAwIDBgIFBQYFAgUEBwQEBQcEAwUDAwMFBAICAwQEBgcHBAgFBgUFBwUFBQUGAgUFAgYFCAgCBgMGBQYFAgUEBAQEAgMCBAMDAAAAAAACAgQCBQYGBgUGBQYGBgUFBAUFBQUFAwUEBQUFBQUFBgYHBQUHBwYJCQcGBgcIBQYGBgcGBggJBwgGBggGBQUEBQcEBQUFBwUFBAYFBQcHBQcFBQcFBQUHCAUFCAcFCAcFBQgHBwYKCQUEBgUGBAYFCAcIBwYFBQAAAAAAAAUGBQUEBQQGBQcGCQYJCAcFCAYGBQYHBQYFBgUGBQUFBAUHCAcGBQQJBwkHBQUGBgYDBQkFCQMCAgUCAgEAAgIGBwQCAgICAwMDBQUDBAYBCAMDBAMEBQcHCQgHBQYFBQYGBgQJBgYHCAcHBQYFBQUJAgUFBAUEAwMCBQUFCAgFBwAJCQUFAgIEBAQEBAQEBAIFBQUFBAQFBQIEBQQHBQUFBQUFBQUFBwUFBQMDAwMDAwMDAwMEAwUFBgYEBgQFBQUEBQUFBAUEBgYFBgUICAYFBQYHBQUFBQUGBQcHBgcFBQcFBAcFBgYGBQUHBQUGBQUFBQQJBQUFBQUEBQUFBQYGBgYGBAUEBQUDAwMDAwMDBQUHBQYCAgICAgIFAgIGBgUFAwYGBgYGBgYGBQUFBQICAgIGBgYGBgYGBgYGBQUFBQUFBQUFBQUFBQICAgIFBQUFBQUFBQUFBAQGBQYFBgUGBQYFBgUGBQYGBQUFBQUFBQUFBQYFBgUGBQYFBgUCAgICAgICAgIHBAUCBgQFAgUCBQMFAwYFBgUGBQUGBQYFBgUFAwUDBQMFBQUFBQUFBQUFBQMFAwUDBgUGBQYFBgUGBQYFCAcFBAUFBAUEBQQIBwYFBQUFBQUF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c3dzd3N/c4dzkXObc7Jz0XPvdA50LnQ6dEZ0d3S4dR11QnVOdV51cnZGdmJ2f3aSdqZ273d6eBx4qXi1eXh503pZewR7ZnvpfEd8uH1dfcl+W368fyR/Pn9Yf3J/jH//gCeAYYB9gLKBO4GBgfiCOYJHglWCjoKbgsKC24Lng0qDo4Q3hMKFQ4YXhheHlIfxiCKIgIiviMWJKIl6ibqKLIqFisWLCItIi2KLqIwejHqMx40TjU+Nto4EjiKOWI6cjsSPFo9Uj7OQA5BhkLWRI5FPkYuRvpISkleSi5LIkxuTRpOVlAaUSJSolQiVNZW+liCWN5aBlz6XuZgtmHyYwpkEmUyZzJo4mq+a2psQm4ibuZwHnDqcepzunVCdu54enoyfA597n9KgDaBpoMGhN6G8ofqiS6KUotijE6Nbo5uj5aRApEyknaURpZyl+aZIptCnM6eYp/iooqiuqQGpTamiqeuqZarSqzerq6xHrM6tb63irk+uqK8Tr5yvpLAQsH6w6bFysdWyQLKSsvSzWrOFs9q0BLRdtKG0tbTJtNu077UBtRi1LLWOtba2RLa0tw23FbcdtyW3MLc4t0S3sLewt7i4KLiYuPq5QLmoub+51rntugS6HLovuju6R7peunC6h7qaurG6w7rauu27BLsbuy27RLtbu267hbuXu667wbvTu+q7/LwSvCO8NrxJvFW8Ybx4vIq8oLyzvMm82rzxvQm9Gr0xvUO9Wb1qvX29lL2mvby9z73hvfO+Cr4gvje+Sb62v2S/dr+Iv5q/q7+9v8+/4b/ywATAEMAiwDPARcBXwGnAe8DvwX3Bj8GgwbLBw8HVwefB+cILwhfCKcI7wk/CYcJzwoXCl8KpwrvCxsLRwuPC78L7ww3DH8MrwzfDScNbw2fDc8OIw5TDoMOsw77D0MPcw+jD+sQLxBfEKcQ6xEzEXsRxxITElsSoxLTEwMTSxOPE9cUHxRnFKsU2xULFTsVaxWzFfcWJxZXFocWtxb/Fy8Xdxe7GAMYRxiPGNcZIxlvGbsaBxuLHUcdjx3XHh8eYx6vHvcfPx+HH88gFyBbILchEyFvIcsiVyLjIyMjfyPHJB8kYySvJPslKyVbJbcl/yZDJosm4ycnJ28nuygDKF8opyjvKTcpgynfKicqayq3Kv8rQyuLLSctby2zLfsuQy6HLssvDy9XMT8xg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AdMAAAEHAKEBFwAeAAkAsAcvsBPcMDEA////3AAABA4GIAImAdMAAAEGAJ5VHwAJALAHL7AO3DAxAP///68AAASLBj8CJgAlAAAABgCtBAD//wBjAAAFFQY/ACYAKWQAAAcArf9CAAD//wBxAAAF2wZBACYALGQAAAcArf9QAAL//wB3AAACZQZAACYALWQAAAcArf9WAAH//wBq/+cFIQY/ACYAMxQAAAcArf9JAAD////uAAAFlgY/ACYAPWQAAAcArf7NAAD//wAeAAAE7gY/ACYAuRQAAAcArf9MAAD//wAg//QDGwZ0AiYAwgAAAQcArv8t/+wAHACwAEVYsA4vG7EOGD5ZsBvcsBHQsBsQsCTQMDH///+vAAAEiwWwAgYAJQAA//8AOwAABKAFsAIGACYAAP//ADsAAASxBbACBgApAAD////rAAAEzgWwAgYAPgAA//8AOwAABXcFsAIGACwAAP//AEkAAAIBBbACBgAtAAD//wA7AAAFUAWwAgYALwAA//8AOwAABrcFsAIGADEAAP//ADsAAAV3BbACBgAyAAD//wB3/+cFDQXIAgYAMwAA//8AOwAABPMFsAIGADQAAP//AKgAAAUJBbACBgA4AAD//wCoAAAFMgWwAgYAPQAA////1AAABSsFsAIGADwAAP//AEkAAAMKBwkCJgAtAAABBwBq/7gBQgAMALACL7AZ3LAE0DAx//8AqAAABTIG/QImAD0AAAEHAGoA/QE2AAwAsAEvsB7csAnQMDH//wBI/+cEMgY6AiYAugAAAQcArQFo//sACQCwFS+wKNwwMQD//wAp/+cD5QY5AiYAvgAAAQcArQEh//oACQCwGi+wK9wwMQD//wAk/mED8wY6AiYAwAAAAQcArQE7//sACQCwAy+wFdwwMQD//wCF//QCZQYlAiYAwgAAAQYArSTmAAkAsAAvsBHcMDEA//8AZ//lBAoGdAImAMoAAAEGAK4c7AASALALL7Ar3LAW0LArELAa0DAx//8ALQAABFcEOgIGAI0AAP//AEX/6AQfBFICBgBTAAD////l/mAEJQQ6AgYAdgAA//8AbgAAA+0EOgIGAFoAAP///8QAAAP0BDoCBgBcAAD//wBn//QC3gWzAiYAwgAAAQYAaozsAAwAsAAvsCTcsA/QMDH//wBn/+UD+gWzAiYAygAAAQYAanvs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3LAi0DAx//8Ak//mBUAG+gImAN0AAAEHAHAA7AFKAAkAsAEvsBHcMDEA////pf5FA+wFuAImAF0AAAEGAHAvCAAJALABL7AQ3DAxAP//AJP/5gVABwkCJgDdAAABBwBqARsBQgAMALABL7Am3LAR0DAx////pf5FA+wFxwImAF0AAAEGAGpeAAAMALABL7Al3LAQ0DAx//8Ak//mBUAHQQImAN0AAAEHAKUBXQFCABYAsABFWLABLxuxARw+WbAT3LAX0DAx////pf5FBF4F/wImAF0AAAEHAKUAoAAAABYAsABFWLABLxuxARg+WbAS3LAW0DAx//8AzgAABUQHCQImAOAAAAEHAGoBRAFCABYAsABFWLASLxuxEhw+WbAo3LAc0DAx//8AewAABAAFswImAPgAAAEGAGpp7AAMALAIL7Ao3LAT0DAx//8ARQAABpYHCQAmAOUPAAAnAC0ElQAAAQcAagIIAUIAFgCwAEVYsAovG7EKHD5ZsCHcsC3QMDH//wAwAAAFqQWzACYA/QAAACcAjAQKAAABBwBqAWr/7AAWALAARViwCi8bsQoYPlmwIdywLdAwMf///9T+RQUrBbACJgA8AAAABwGvA5UAAP///8T+RQP0BDoCJgBcAAAABwGvAqoAAP//AEv/6AR1BgACBgBIAAD////K/kUFZQWwAiYA3AAAAAcBrwQkAAD////I/kUESgQ6AiYA8QAAAAcBrwM7AAD///+v/p8EiwWwAiYAJQAAAAcArATcAAD//wAz/p8DzwRRAiYARQAAAAcArAQpAAD///+vAAAEiwe5AiYAJQAAAQcAqgUBAUYACQCwBC+wGNwwMQD//wAz/+gDzwaDAiYARQAAAQcAqgRzABAACQCwGC+wOdwwMQD///+vAAAF7QfDAiYAJQAAAQcBtwDyAS4AFgCwAEVYsAUvG7EFHD5ZsA7csBTQMDH//wAz/+gFXwaOAiYARQAAAQYBt2T5ABYAsABFWLAYLxuxGBg+WbAv3LA10DAx////rwAABIsHvwImACUAAAEHAbYA+AE9ABYAsABFWLAFLxuxBRw+WbAM3LAT0DAx//8AM//oA/0GiQImAEUAAAEGAbZqBwAWALAARViwGC8bsRgYPlmwL9ywNNAwMf///68AAAVsB+oCJgAlAAABBwG1APMBGwAWALAARViwBS8bsQUc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ALAARViwBC8bsQQcPlmwDNywENAwMf//ADP/6APPBesCJgBFAAABBwCrA/L//QAWALAARViwGC8bsRgYPlmwLdywMdAwMf//ADsAAASxBywCJgApAAABBwCrBE4BPgAWALAARViwBi8bsQYcPlmwDdywEdAwMf//AEX/6gPgBesCJgBJAAABBwCrA9f//QAWALAARViwCC8bsQgYPlmwIdywJdAwMf///98AAAKKBywCJgAtAAABBwCrAwQBPgAWALAARViwAi8bsQIcPlmwBdywCdAwMf///40AAAI4BekCJgCMAAABBwCrArL/+wAWALAARViwAi8bsQIYPlmwBdywCdAwMf//AHf/5wUNByICJgAzAAABBwCrBKEBNAAWALAARViwCi8bsQocPlmwJNywKNAwMf//AEX/6AQfBesCJgBTAAABBwCrA+D//QAWALAARViwAC8bsQAYPlmwJNywKNAwMf//ADoAAATCByACJgA2AAABBwCrBEMBMgAWALAARViwBC8bsQQcPlmwGdywHdAwMf//AB8AAALUBesCJgBWAAABBwCrA0n//QAWALAARViwCi8bsQoYPlmwEtywDdAwMf//AGf/5wUgByACJgA5AAABBwCrBHsBMgAWALAARViwCi8bsQocPlmwFNywGNAwMf//AFv/6AQeBesCJgBZAAABBwCrA+T//QAWALAARViwBy8bsQcYPlmwFdywGdAwMf///7IAAAU8Bj8AJgDPZAAABwCt/pEAAP//ADv+qQSgBbACJgAmAAAABwCsBJgACv//AB/+lgP+BgACJgBGAAAABwCsBIb/9///ADv+qQTVBbACJgAoAAAABwCsBJcACv//AEv+nwR1BgACJgBIAAAABwCsBJkAAP//ADv+CQTVBbACJgAoAAAABwGiAR/+qv//AEv9/wR1BgACJgBIAAAABwGiASH+oP//ADv+qQV3BbACJgAsAAAABwCsBPoACv//AB/+qQPjBgACJgBMAAAABwCsBH8ACv//ADsAAAVQBy4CJgAvAAABBwB1AbABMAATALAARViwBS8bsQUcPlmwDtwwMQD//wAgAAAEIgc/AiYATwAAAQcAdQF9AUEACQCwBS+wD9wwMQD//wA7/vgFUAWwAiYALwAAAAcArATSAFn//wAg/uUEGgYAAiYATwAAAAcArARQAEb//wA7/qkDsQWwAiYAMAAAAAcArASdAAr////y/qkB7gYAAiYAUAAAAAcArAM3AAr//wA7/qkGtwWwAiYAMQAAAAcArAWnAAr//wAe/qkGagRSAiYAUQAAAAcArAWrAAr//wA7/qkFdwWwAiYAMgAAAAcArAT+AAr//wAf/qkD4wRSAiYAUgAAAAcArARmAAr//wA7AAAE8wdAAiYANAAAAQcAdQG0AUIAEwCwAEVYsAMvG7EDHD5ZsBbcMDEA////1/5gBDYF9QImAFQAAAEHAHUBkf/3ABMAsABFWLANLxuxDRg+WbAh3DAxAP//ADr+qQTCBbACJgA2AAAABwCsBJUACv///+7+qQLUBFQCJgBWAAAABwCsAzMACv//ACf+nwSjBccCJgA3AAAABwCsBKQAAP//AC7+lwO2BFACJgBXAAAABwCsBG3/+P//AKj+nwUJBbACJgA4AAAABwCsBJYAAP//AEP+nwKUBUACJgBYAAAABwCsA/oAAP//AKQAAAVhBy0CJgA6AAABBwCkAOEBRgATALAARViwAS8bsQEcPlmwCtwwMQD//wBuAAAD7QXiAiYAWgAAAQYApBv7ABMAsABFWLABLxuxARg+WbAK3DAxAP//AKT+qQVhBbACJgA6AAAABwCsBMoACv//AG7+qQPtBDoCJgBaAAAABwCsBDgACv//AMP+qQdBBbACJgA7AAAABwCsBc0ACv//AID+qQX+BDoCJgBbAAAABwCsBSwACv///+v+qQTOBbACJgA+AAAABwCsBJgACv///+3+qQPOBDoCJgBeAAAABwCsBEIACv///wz/5wVTBdYAJgAzRgAABwFa/hoAAP///6UAAAPjBRwCJgG6AAAABwCt/6v+3f///+EAAAQrBR8AJgG+PAAABwCt/sD+4P////0AAATWBRwAJgHBPAAABwCt/tz+3f//AAEAAAHmBR4AJgHCPAAABwCt/uD+3///AB3/6gRYBRwAJgHICgAABwCt/vz+3f///5sAAAShBRwAJgHSPAAABwCt/nr+3f//ABYAAAR0BRsAJgHzCgAABwCt/xT+3P///6UAAAPjBI0CBgG6AAD//wAdAAAD5wSNAgYBuwAA//8AHQAAA+8EjQIGAb4AAP///9wAAAQOBI0CBgHTAAD//wAdAAAEmgSNAgYBwQAA//8AKgAAAaoEjQIGAcIAAP//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DAAGiA7uDu4MRg6gCiIO7g7uD5oKigaSDGYMRgrYCqwNUg8QCl4L4gsQDBYGmA22DbYNtgwgCxAKUAxMDbAMTAsQBqYN5gtwD5oLcAasBrIGvAbCBsgMTAbOBtgNtgb+BxQHKgcwB0YHTAdSB4QHigeQDcANwAe+Du4H4AgCDVIIMA7uDu4LJg7uDu4IRg3ADcAIeAiCCIwIpg1ICLgNsAjSCOgLEAkyCUwJaAloCxAJYgloCWgJaAtwDCAK2AxMCxAN5g1IDqAOoA1ICtIK0grSCtIK0gmKCbAJugnECeIJ9AoGChgK/g+aD5oPmg+aDGYLcAtwC3ALcAtwC3ALcAr+DAAMAAwADAAO7g7uDu4O7g7uD5oPmg+aD5oPmgxGDEYMRgxGDxAL4gviC+IL4gviC+IL4gwWDBYMFgwWDbYMIAwgDCAMIAwgDEwMTAtwC+ILcAviC3AL4gr+Cv4K/gr+D5oMAAwWDAAMFgwADBYMAAwWDAAMFg7uDbYO7g7uDu4O7g7uDEYOoAoiCiIKIgoiDu4Ntg7uDbYO7g22DbYPmgwgD5oMIA+aDCAKUApQClAMZgxmDGYMRgxGDEYMRgxGDEYKrA8QDEwPEApeCl4KXgtwDAAO7g7uD5oPEAtwCoAMAApeDu4O7g6gDu4O7g+aCooMZg8QDVIO7g8QDbYMIAxMDCAMAA3mDu4O7gxGDqAOoAsmC3AKgA3mDAAO7g7uD5oKigr+DGYNUgviDBYMIAsQDEwNsAwWDUgMTAqsCqwKrA8QDEwK0grSCtIO7g22C3AL4gwADBYK2AxMCv4PEAxMDu4NUg2wDu4LcAviC3AL4gwADBYMFgwWDVINsA+aDCAMIAsQCyYMTAsmDEwLJgxMDVINsAtwC+ILcAviC3AL4gtwC+ILcAviC3AL4gtwC+ILcAviC3AL4gtwC+ILcAviC3AL4gwADBYMAAwWDAAMFgwADBYMAAwWDAAMFgwADBYMAAwWDu4O7g+aDCAPmgwgD5oMIA+aDCAPmgwgD5oMIA+aDCAMIAxGDEYPEAxMDxAMTA8QDEwOoA7uDGYNUg2wDeYNSA1SDbANtg3ADeYOoA7uDu4PEA+aAAIAhwAGAAYAAAALAAsAAQATABMAAgAlACoAAwAsADUACQA4AD4AEwBFAEYAGgBJAEoAHABMAEwAHgBRAFQAHwBWAFYAIwBaAFoAJABcAF0AJQCKAIoAJwCcAJwAKACwALQAKQC2ALgALgC6ALoAMQC8AL0AMgC/AMAANADCAMQANgDGAMsAOQDRANEAPwDTAN0AQADfAN8ASwDhAOMATADlAOcATwDpAO0AUgDwAPAAVwD1APcAWAD6APsAWwD9AP8AXQEDAQQAYAEJAQkAYgEMAQwAYwEXARkAZAErAS0AZwEwATAAagEyATIAawFJAUkAbAFsAW0AbQFvAXEAbwG6AboAcgG9Ab0AcwHEAcUAdAHIAcgAdgHKAcsAdwHNAc0AeQIoAigAegIqAisAewJHAkgAfQJKAkoAfwJMAm0AgAJvAnIAogJ3AnwApgKBAokArAKLAosAtQKNAo0AtgKPAo8AtwKRApEAuAKTApwAuQKlAqcAwwKpAqkAxgKrAqsAxwKtAq0AyAKvAq8AyQKyArIAygK0ArQAywK2ArYAzAK4ArgAzQK6AroAzgK8ArwAzwK+AsoA0ALMAswA3QLOAs4A3gLQAtAA3wLbAtsA4ALdAt0A4QLfAt8A4gLhAuEA4wLjAuMA5ALlAuUA5QLnAucA5gLpAukA5wLrAusA6ALtAu0A6QLvAvIA6gL0AvQA7gL2AvYA7wNTA1gA8ANbA2oA9gNtA20BBgNxA3EBBwNzA3MBCAN3A3cBCQN6A3sBCgN9A4YBDAOIA4oBFgOMA5EBGQOTA5QBHwOWA5kBIQOfA6ABJQOiA6IBJwOkA6QBKAOmA6kBKQOsA7EBLQOzA7MBMwO3A7gBNAO9A70BNgO/A8gBNwPLA8wBQQPOA9EBQwPYA9kBRwPdA90BSQPfA+UBSgPqA+sBUQPvBBcBUwQZBBkBfAQbBCgBfQQwBDABiwQzBDMBjAQ1BDUBjQRBBEYBjgRJBEkBlARLBEsBlQRNBE0BlgRPBFABlwRVBFgBmQRbBFsBnQRdBF4BngRgBGABoARkBGQBoQRmBGYBogRqBGoBowSqBKoBpAABABP/IAACAFb/5gG6/8AAAQG6AA4AAwANABQAQQASAGEAEwABAPX/9QABAMMADQACALf/wgDDABAAAQDD/+IAAQDG//IAAQDDAA4AAgDJ/+0A9f/AAAkAvv/mAMH/6wDC/+kAxP/wAMX/5wDJ/+MAy//OAMz/1ADN/9sABQDB/+wAwwAPAMX/6gDJ/8QAy//nAAUASv/pAMH/7gDD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Aor/6wKM/+sCjv/rApD/6wKS/+sClP/rApb/6wKY/+sCmv/rApz/6wKe/+sCoP/rAqL/6wKk/+sCsv74Asb/6wLI/+sCyv/rAtsAFALdABQC3wAUAuL/6gLk/+oC5v/qAuj/6gLq/+oC7P/qAvD/6ANT/1YDW/9WA2v/6wNv/+oDcf/rA3P/6AN2/+oDd//rA3j/6gN//vgDg/9WA44AFAOQ/94Dkf/rA5P/6wOV/+sDlv/oA5j/6wOf/+gDp//oA6//VgOw/94Ds//rA7j/6AO5/+sDvv/rA8D/6APF/1YDxv/eA8f/VgPI/94DzP/rA87/6wPP/+sD2f/rA9v/6wPd/+sD4f/oA+P/6APl/+gD7P/rA+//VgPw/94D8f9WA/L/3gPz/1YD9P/eA/X/VgP2/94D9/9WA/j/3gP5/1YD+v/eA/v/VgP8/94D/f9WA/7/3gP//1YEAP/eBAH/VgQC/94EA/9WBAT/3gQF/1YEBv/eBAj/6wQK/+sEDP/rBA7/6wQQ/+sEEv/rBBT/6wQW/+sEHP/rBB7/6wQg/+sEIv/rBCT/6wQm/+sEKP/rBCr/6wQs/+sELv/rBDD/6wQy/+sENP/qBDb/6gQ4/+oEOv/qBDz/6gQ+/+oEQP/qBEL/6ARE/+gERv/oBE0AFAAfADj/1QA6/+QAO//sAD3/3QDR/9UA1f/VARj/5AEy/9UBOv/VAmb/3QLb/9UC3f/VAt//1QLt/+wC7//dAvH/3QNY/90DZ//dA2r/3QOO/9UDoP/sA6L/7AOk/+wDpv/dA7f/5AO//90EQf/dBEP/3QRF/90ETf/VBGr/3QAaADj/sAA6/+0APf/QANH/sADV/7ABGP/tATL/sAE6/7ACZv/QAtv/sALd/7AC3/+wAu//0ALx/9ADWP/QA2f/0ANq/9ADjv+wA6b/0AO3/+0Dv//QBEH/0ARD/9AERf/QBE3/sARq/9AAEAAu/+4AOf/uAmL/7gJj/+4CZP/uAmX/7gKy/+4C4f/uAuP/7gLl/+4C5//uAun/7gLr/+4Df//uBDP/7gQ1/+4ARwAGABAACwAQAEf/6ABI/+gASf/oAEv/6ABV/+gAk//oAJj/6AC6/+gAx//oAMj/6AD2/+gBAv/oAR3/6AEh/+gBOf/oAUv/6AFM/+gBVv/oAWwAEAFtABABbwAQAXAAEAFxABACbv/o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/90AWv/hAF3/4QCT/9wAmP/cAJr/3QC6/9wAvP/hAMD/8wDH/9wAyP/cAMr/3QDr//MA7//zAPD/8wDy//MA8//zAPT/8wD2/9wA9//zAPn/8wD6//MA/f/zAP//8wEC/9wBBP/zARf/1gEZ/+EBHf/cASH/3AE1//MBOf/cAUT/8wFJ//MBS//cAUz/3AFW/9wCbv/cAm//3AJw/9wCcf/cAnL/3AJ3//MCeP/WAnn/1gJ6/9YCe//WAnz/1gJ9/90Cfv/dAn//3QKA/90Cgf/hAoL/4QKK/9wCjP/cAo7/3AKQ/9wCkv/cApT/3AKW/9wCmP/cApr/3AKc/9wCnv/cAqD/3AKi/9wCpP/cAr//8wLB//MCw//zAsT/8wLG/9YCyP/WAsr/1gLi/90C5P/dAub/3QLo/90C6v/dAuz/3QLw/+EDa//cA23/8wNv/90Dcf/WA3P/4QN2/90Dd//WA3j/3QOR/9wDkv/zA5P/1gOU//MDlf/cA5b/4QOY/9wDmf/zA57/8wOf/+EDp//hA67/8wOz/9wDtP/zA7j/4QO5/9wDvv/cA8D/4QPM/9wDzv/cA8//3APV//MD1//zA9n/1gPb/9wD3f/WA+H/4QPj/+ED5f/hA+n/8wPs/9wECP/cBAr/3AQM/9wEDv/cBBD/3AQS/9wEFP/cBBb/3AQc/9YEHv/WBCD/1gQi/9YEJP/WBCb/1gQo/9YEKv/cBCz/3AQu/9wEMP/WBDL/3AQ0/90ENv/dBDj/3QQ6/90EPP/dBD7/3QRA/90EQv/hBET/4QRG/+EESv/zBEz/8wRW//MEY//zBGX/8wRn//MAcQAG/9oAC//aAEf/8ABI//AASf/wAEv/8ABV//AAWf/vAFr/3ABd/9wAk//wAJj/8ACa/+8Auv/wALz/3ADH//AAyP/wAMr/7wD2//ABAv/wARn/3AEd//ABIf/wATn/8AFL//ABTP/wAVb/8AFs/9oBbf/aAW//2gFw/9oBcf/aAm7/8AJv//ACcP/wAnH/8AJy//ACff/vAn7/7wJ//+8CgP/vAoH/3AKC/9wCiv/wAoz/8AKO//ACkP/wApL/8AKU//AClv/wApj/8AKa//ACnP/wAp7/8AKg//ACov/wAqT/8ALi/+8C5P/vAub/7wLo/+8C6v/vAuz/7wLw/9wDa//wA2//7wNz/9wDdv/v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//UA1f/xANn/9ADc//UA3f/zARj/9AEy//EBOv/xAVH/9QJm//AC2//xAt3/8QLf//EC7//wAvH/8ANY//ADZ//wA2j/9ANq//ADgv/zA47/8QOP//QDpv/wA7f/9AO///ADwv/0A9D/9APg//MD4v/zA+T/8wPq//QD7f/1BEH/8ARD//AERf/wBE3/8QRP//QEV//0BGj/9QRq//AAWQAlAA8AOP/mADr/5gA8AA4APf/mALEADwCzAA8A0f/mANMADgDV/+YA2QAOANwADgDdAAsA4P/lAPEADwD4/+gBAwAPAQwADwEY/+YBMv/mATr/5gFRAA4CTAAPAk0ADwJOAA8CTwAPAlAADwJRAA8CUgAPAmb/5gKDAA8ChQAPAocADwLb/+YC3f/mAt//5gLv/+YC8f/mA1MADwNY/+YDWwAPA2f/5gNoAA4Dav/mA4IACwODAA8Djv/mA48ADgOm/+YDrwAPA7f/5gO//+YDwgAOA8UADwPHAA8D0AAOA+AACwPiAAsD5AALA+b/5QPn/+gD6gAOA+0ADgPuAA8D7wAPA/EADwPzAA8D9QAPA/cADwP5AA8D+wAPA/0ADwP/AA8EAQAPBAMADwQFAA8EQf/mBEP/5gRF/+YETf/mBE8ADgRR/+UEUv/oBFP/5QRU/+gEVwAOBGgADgRpAA8Eav/mAC4AOP/jADz/5QA9/+QA0f/jANP/5QDV/+MA2f/lANz/5QDd/+kA8f/qAQP/6gEy/+MBOv/jAVH/5QJm/+QC2//jAt3/4wLf/+MC7//kAvH/5ANY/+QDZ//kA2j/5QNq/+QDgv/pA47/4wOP/+UDpv/kA7//5APC/+UD0P/lA+D/6QPi/+kD5P/pA+r/5QPt/+UD7v/qBEH/5ARD/+QERf/kBE3/4wRP/+UEV//lBGj/5QRp/+oEav/kACEAOP/iADz/5ADR/+IA0//kANX/4gDZ/+QA3P/kAN3/6QDx/+sBA//rATL/4gE6/+IBUf/kAtv/4gLd/+IC3//iA2j/5AOC/+kDjv/iA4//5APC/+QD0P/kA+D/6QPi/+kD5P/pA+r/5APt/+QD7v/rBE3/4gRP/+QEV//kBGj/5ARp/+sAFwA4/+sAPf/zANH/6wDV/+sBMv/rATr/6wJm//MC2//rAt3/6wLf/+sC7//zAvH/8wNY//MDZ//zA2r/8wOO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ABgEJwQnAAMEKAQoABgEMAQwABgEMwQzAAwENQQ1AAwEQQRBAA8EQgRCABkEQwRDAA8ERAREABkERQRFAA8ERgRGABkESQRJAAkESwRLAAIETQRNAAYETwRPAA4EUARQABsEVQRVAAcEVgRWAAgEVwRXAA4EWARYABsEWwRbABcEXQRdAB8EXgReAAcEYARgAAkEZARkAAIEZgRmAAIEagRqAA8EqgSqAAMAAgFtAAYABgAHAAsACwAHABAAEAATABEAEQAXABIAEgATACUAJQARACcAJwAFACsAKwAFAC4ALgAcADMAMwAFADUANQAFADcANwAZADgAOAAKADkAOQAGADoAOgANADsAOwAJADwAPAASAD0APQAOAD4APgAUAEUARQAaAEcASQAVAEsASwAVAFEAUgAYAFMAUwAIAFQAVAAYAFUAVQAVAFcAVwAbAFkAWQALAFoAWgACAFwAXAAWAF0AXQACAF4AXgAMAIMAgwAFAJIAkgAFAJMAkwAVAJcAlwAFAJgAmAAVAJoAmgALALEAsQARALIAsgAFALMAswARALoAugAVALwAvAACAMAAwAAYAMcAyAAVAMoAygALANEA0QAKANIA0gAFANMA0wABANUA1QAKANkA2QASANwA3AABAN0A3QAQAOAA4AAPAOsA6wAYAO0A7QAWAO8A8AAYAPEA8QAEAPIA9AAYAPYA9gAVAPcA9wAYAPgA+AADAPkA+gAYAP0A/QAYAP8A/wAYAQIBAgAVAQMBAwAEAQQBBAAYAQcBBwAFAQwBDAARARYBFgAFARcBFwAIARgBGAANARkBGQACARoBGgAFARwBHAAFAR0BHQAVAR4BHgAFASABIAAFASEBIQAVATIBMgAKATUBNQAYATgBOAAFATkBOQAVAToBOgAKAUQBRAAYAUkBSQAYAUsBTAAVAVEBUQABAVUBVQAFAVYBVgAVAWkBagAXAWwBbQAHAW4BbgATAW8BcQAHAXIBcgATAXYBdwATAigCKQAFAisCLAAFAkYCRgAXAkwCUgARAlMCUwAFAl0CYQAFAmICZQAGAmYCZgAOAmcCbQAaAm4CcgAVAncCdwAYAngCfAAIAn0CgAALAoECggACAoMCgwARAoQChAAaAoUChQARAoYChgAaAocChwARAogCiAAaAokCiQAFAooCigAVAosCiwAFAowCjAAVAo0CjQAFAo4CjgAVAo8CjwAFApACkAAVApICkgAVApQClAAVApYClgAVApgCmAAVApoCmgAVApwCnAAVAp0CnQAFAp4CngAVAp8CnwAFAqACoAAVAqECoQAFAqICogAVAqMCowAFAqQCpAAVArICsgAcAr8CvwAYAsECwQAYAsMCxAAYAsUCxQAFAsYCxgAIAscCxwAFAsgCyAAIAskCyQAFAsoCygAIAtEC0QAZAtIC0gAbAtMC0wAZAtQC1AAbAtUC1QAZAtYC1gAbAtcC1wAZAtgC2AAbAtkC2QAZAtoC2gAbAtsC2wAKAt0C3QAKAt8C3wAKAuEC4QAGAuIC4gALAuMC4wAGAuQC5AALAuUC5QAGAuYC5gALAucC5wAGAugC6AALAukC6QAGAuoC6gALAusC6wAGAuwC7AALAu0C7QAJAu8C7wAOAvAC8AACAvEC8QAOAvIC8gAUAvMC8wAMAvQC9AAUAvUC9QAMAvYC9gAUAvcC9wAMAvoC+gAFA1MDUwARA1cDVwAFA1gDWAAOA1sDWwARA14DXgAUA2QDZAAFA2cDZwAOA2gDaAASA2oDagAOA2sDawAVA20DbQAYA28DbwALA3EDcQAIA3MDcwACA3YDdgALA3cDdwAIA3gDeAALA38DfwAcA4IDggAQA4MDgwARA4oDigAFA40DjQAFA44DjgAKA48DjwASA5ADkAAaA5EDkQAVA5IDkgAYA5MDkwAIA5QDlAAYA5UDlQAVA5YDlgACA5cDlwAWA5gDmAAVA5kDmQAYA5oDmgAbA54DngAYA58DnwACA6ADoAAJA6IDogAJA6QDpAAJA6YDpgAOA6cDpwACA6gDqQAHA6wDrAAHA64DrgAYA68DrwARA7ADsAAaA7MDswAVA7QDtAAYA7cDtwANA7gDuAACA7kDuQAVA7oDugAFA70DvQAFA74DvgAVA78DvwAOA8ADwAACA8IDwgASA8MDwwAWA8UDxQARA8YDxgAaA8cDxwARA8gDyAAaA8wDzAAVA84DzwAVA9AD0AASA9ED0QAWA9UD1QAYA9cD1wAYA9gD2AAFA9kD2QAIA9oD2gAFA9sD2wAVA9wD3AAFA90D3QAIA+AD4AAQA+ED4QACA+ID4gAQA+MD4wACA+QD5AAQA+UD5QACA+YD5gAPA+cD5wADA+kD6QAYA+oD6gASA+sD6wAWA+wD7AAVA+0D7QABA+4D7gAEA+8D7wARA/AD8AAaA/ED8QARA/ID8gAaA/MD8wARA/QD9AAaA/UD9QARA/YD9gAaA/cD9wARA/gD+AAaA/kD+QARA/oD+gAaA/sD+wARA/wD/AAaA/0D/QARA/4D/gAaA/8D/wARBAAEAAAaBAEEAQARBAIEAgAaBAMEAwARBAQEBAAaBAUEBQARBAYEBgAaBAgECAAVBAoECgAVBAwEDAAVBA4EDgAVBBAEEAAVBBIEEgAVBBQEFAAVBBYEFgAVBBsEGwAFBBwEHAAIBB0EHQAFBB4EHgAIBB8EHwAFBCAEIAAIBCEEIQAFBCIEIgAIBCMEIwAFBCQEJAAIBCUEJQAFBCYEJgAIBCcEJwAFBCgEKAAIBCkEKQAFBCoEKgAVBCsEKwAFBCwELAAVBC0ELQAFBC4ELgAVBC8ELwAFBDAEMAAIBDEEMQAFBDIEMgAVBDMEMwAGBDQENAALBDUENQAGBDYENgALBDgEOAALBDoEOgALBDwEPAALBD4EPgALBEAEQAALBEEEQQAOBEIEQgACBEMEQwAOBEQERAACBEUERQAOBEYERgACBEoESgAYBEwETAAYBE0ETQAKBE8ETwASBFAEUAAWBFEEUQAPBFIEUgADBFMEUwAPBFQEVAADBFYEVgAYBFcEVwASBFgEWAAWBGMEYwAYBGUEZQAYBGcEZwAYBGgEaAABBGkEaQAEBGoEagAOBHAEcAAXBKoEqgAFAAEAAAAKAgYG8AAEREZMVAAaY3lybABIZ3JlawB2bGF0bgCkAAQAAAAA//8AEgAAAAoAFAAeACgANABBAEsAVQBfAGkAcwB9AIcAkQCbAKUArwAEAAAAAP//ABIAAQALABUAHwApADUAQgBMAFYAYABqAHQAfgCIAJIAnACmALAABAAAAAD//wASAAIADAAWACAAKgA2AEMATQBXAGEAawB1AH8AiQCTAJ0ApwCxACgABkFaRSAAVENSVCAAfk1PTCAAqE5BViAA1FJPTSABAFRVUiABLAAA//8AEwADAA0AFwAhACsAMgA3AEQATgBYAGIAbAB2AIAAigCUAJ4AqACyAAD//wASAAQADgAYACIALAA4AEUATwBZAGMAbQB3AIEAiwCVAJ8AqQCzAAD//wASAAUADwAZACMALQA5AEYAUABaAGQAbgB4AIIAjACWAKAAqgC0AAD//wATAAYAEAAaACQALgA6AD4ARwBRAFsAZQBvAHkAgwCNAJcAoQCrALUAAP//ABMABwARABsAJQAvADsAPwBIAFIAXABmAHAAegCEAI4AmACiAKwAtgAA//8AEwAIABIAHAAmADAAPABAAEkAUwBdAGcAcQB7AIUAjwCZAKMArQC3AAD//wATAAkAEwAdACcAMQAzAD0ASgBUAF4AaAByAHwAhgCQAJoApACuALgAuWMyc2MEWGMyc2MEWGMyc2MEWGMyc2MEWGMyc2MEWGMyc2MEWGMyc2MEWGMyc2MEWGMyc2MEWGMyc2MEWGNjbXAEXmNjbXAEXmNjbXAEXmNjbXAEXmNjbXAEXmNjbXAEXmNjbXAEXmNjbXAEXmNjbXAEXmNjbXAEXmRsaWcEZmRsaWcEZmRsaWcEZmRsaWcEZmRsaWcEZmRsaWcEZmRsaWcEZmRsaWcEZmRsaWcEZmRsaWcEZmRub20EbGRub20EbGRub20EbGRub20EbGRub20EbGRub20EbGRub20EbGRub20EbGRub20EbGRub20EbGZyYWMEcmZyYWMEcmZyYWMEcmZyYWMEcmZyYWMEcmZyYWMEcmZyYWMEcmZyYWMEcmZyYWMEcmZyYWMEcmxpZ2EEfGxpZ2EEhGxudW0EimxudW0EimxudW0EimxudW0EimxudW0EimxudW0EimxudW0EimxudW0EimxudW0EimxudW0EimxvY2wEkGxvY2wElmxvY2wEnG51bXIEom51bXIEom51bXIEom51bXIEom51bXIEom51bXIEom51bXIEom51bXIEom51bXIEom51bXIEom9udW0EqG9udW0EqG9udW0EqG9udW0EqG9udW0EqG9udW0EqG9udW0EqG9udW0EqG9udW0EqG9udW0EqHBudW0ErnBudW0ErnBudW0ErnBudW0ErnBudW0ErnBudW0ErnBudW0ErnBudW0ErnBudW0ErnBudW0ErnNtY3AEtHNtY3AEtHNtY3AEtHNtY3AEtHNtY3AEtHNtY3AEtHNtY3AEtHNtY3AEtHNtY3AEtHNtY3AEtHNzMDEEunNzMDEEunNzMDEEunNzMDEEunNzMDEEunNzMDEEunNzMDEEunNzMDEEunNzMDEEunNzMDEEunNzMDIEwHNzMDIEwHNzMDIEwHNzMDIEwHNzMDIEwHNzMDIEwHNzMDIEwHNzMDIEwHNzMDIEwHNzMDIEwHNzMDMExnNzMDMExnNzMDMExnNzMDMExnNzMDMExnNzMDMExnNzMDMExnNzMDMExnNzMDMExnNzMDMExnNzMDQEzHNzMDQEzHNzMDQEzHNzMDQEzHNzMDQEzHNzMDQEzHNzMDQEzHNzMDQEzHNzMDQEzHNzMDQEzHNzMDUE0nNzMDUE0nNzMDUE0nNzMDUE0nNzMDUE0nNzMDUE0nNzMDUE0nNzMDUE0nNzMDUE0nNzMDUE0nNzMDYE2HNzMDYE2HNzMDYE2HNzMDYE2HNzMDYE2HNzMDYE2HNzMDYE2HNzMDYE2HNzMDYE2HNzMDYE2HNzMDcE3nNzMDcE3nNzMDcE3nNzMDcE3nNzMDcE3nNzMDcE3nNzMDcE3nNzMDcE3nNzMDcE3nNzMDcE3nRudW0E5HRudW0E5HRudW0E5HRudW0E5HRudW0E5HRudW0E5HRudW0E5HRudW0E5HRudW0E5HRudW0E5AAAAAEAAAAAAAIAAgADAAAAAQAHAAAAAQAYAAAAAwAVABYAFwAAAAIACAAJAAAAAQAJAAAAAQAUAAAAAQAEAAAAAQAGAAAAAQAFAAAAAQAZAAAAAQARAAAAAQATAAAAAQABAAAAAQAKAAAAAQALAAAAAQAMAAAAAQANAAAAAQAOAAAAAQAPAAAAAQAQAAAAAQASABsAOAPGBrQHYA3wDfAOBg4oDl4OhA6yDsYO2g7uDwAPGg9cD3oPmA/KD/wQLhBCEHoQbBB6EKYAAQAAAAEACAACAcQA3wHnAboBuwG8Ab0BvgG/AcABwQHCAcMBxAHFAcYBxwHIAckBygHLAcwBzQHOAc8B0AHRAdIB0wHoAekCRAI7AeoB6wHsAe0B7gHvAfAB8QHyAfMB9AH1AfYB9wH4AfkB+gH7AfwB/QH+AgACAQTdAgICAwIEAgUCBgIHAggCCQIKAgsCLwIPAhACEQIUAhUCFgIXAhgCGQIbAhwCHgIdAvwC/QL+Av8DAAMBAwIDAwMEAwUDBgMHAwgDCQMKAwsDDAMNAw4DDwMQAxEDEgMTAxQDFQMWAxcDGAMZAxoDGwMcAx0DHgMfAyADIQMiAyMDJAMlAyYDJwMoAykDKgMrAywDLQMuAy8DMAMxAzIDMwM0AzUDNgM3AzgDOQM6AzsDPAM9Az4DPwNAA0EDQgNDA0QDRgNFA0cDSANJA0oDSwNMA00DTgNPA1ADUQNSBKsErAStBK4ErwSwBLEEsgSzBLQEtQS2BLcEuAS5BLoEuwS8BL0EvgS/BMAEwQTCBMMExATFBMYB/wTHBMgEyQTKBMsEzATNBM4EzwTQBNEE0gTTBNQE1QTWBNgE2QTbAhoE3AIOBNcCEwINBNoCDAISAAEA3wAIACUAJgAnACgAKQAqACsALAAtAC4ALwAwADEAMgAzADQANQA2ADcAOAA5ADoAOwA8AD0APgBlAGcAhQCSALAAsQCyALMAtAC1ALYAtwC4ALkA0QDSANMA1ADVANYA1wDYANkA2gDbANwA3QDeAN8A4ADhAOIA4wDkAOUA5gDnAOgBLAEwATIBOAE6ATwBPgE/AUUBRgF/AYUBigGNAkcCSAJKAkwCTQJOAk8CUAJRAlICUwJUAlUCVgJXAlgCWQJaAlsCXAJdAl4CXwJgAmECYgJjAmQCZQJmAoMChQKHAokCiwKNAo8CkQKTApUClwKZApsCnQKfAqECowKlAqcCqQKrAq0CrwKyArQCtgK4AroCvAK+AsACwgLFAscCyQLLAs0CzwLRAtMC1QLZAtsC3QLfAuEC4wLlAucC6QLrAu0C7wLxAvIC9AL2A1MDVANVA1YDVwNYA1kDWwNcA10DXgNfA2ADYQNiA2QDZQNmA2cDaANpA2oDegN7A3wDfQN+A38DgAOBA4IDgwOEA4UDhgOHA4gDiQOKA4sDjAONA44DjwO7A70DvwPUA9oD4ARJBEsETwRXBFkEXgRqAAEAAAABAAgAAgF0ALcBugG7AbwBvQG+Ab8BwAHBAcIBwwHEAcUBxgHHAcgByQHKAcsBzAHNAc4BzwHQAdEB0gHTAv0DMAI7AfoEygTLAfsB/AH9Af4B/wIABM4EzwTRBNQE3QICAgMCBAIFAgYCBwIIAgkCCgILAfQB9QH2AfcB+AH5Ai8CDwIQAhECFAIVAhcCGQL+Av8DAAMBAwIDAwMEAwUDBgMHAwgDCQMKAwsDDAMNAw4DDwMQAxEDEgMTAxQDFQMWAxcDGAMZA08DGgMbAxwDHQMeAx8DIAMhAyIDIwMkAyUDJgMnAygDKQMqAysDLAMtAy4DLwMxAzIDMwM0AzUDNgM3AzgDOQM6AzsDPAM9Az4DPwNAA0EDQgNDA0QDRgNFA0cDSANJA0oDSwNMA00DTgNQA1EDUgTJBMwEzQTQBNIE0wIBBNUEwQTCBMMExATFBMYExwTIBNYE2ATZAhgE2wIaBNwC/AIOBNcCEwINBNoCFgIMAhIAAQC3AEUARgBHAEgASQBKAEsATABNAE4ATwBQAFEAUgBTAFQAVQBWAFcAWABZAFoAWwBcAF0AXgCHAIwAkwDpAOoA6wDsAO0A7gDvAPAA8QDyAPMA9AD1APYA9wD4APkA+gD7APwA/QD+AP8BAAEBAQIBAwEEAQUBBgEtATEBMwE5ATsBPQFAAUcCSwJnAmgCaQJqAmsCbAJtAm4CbwJwAnECcgJzAnQCdQJ2AncCeAJ5AnoCewJ8An0CfgJ/AoACgQKCAoQChgKIAooCjAKOApACkgKUApYCmAKaApwCngKgAqICpAKmAqgCqgKsAq4CswK1ArcCuQK7Ar0CvwLBAsMCxgLIAsoCzALOAtAC0gLUAtYC2gLcAt4C4ALiAuQC5gLoAuoC7ALuAvAC8wL1AvcDkAORA5IDkwOUA5UDlgOXA5gDmQOaA5sDnAOdA54DnwO8A74DwAPOA9UD2wPhBEcESgRMBFAEWARaBFsEXwRrAAYAAAAGABIAKgBCAFoAcgCKAAMAAAABABIAAQCQAAEAAAAaAAEAAQBNAAMAAAABABIAAQB4AAEAAAAaAAEAAQBOAAMAAAABABIAAQBgAAEAAAAaAAEAAQKuAAMAAAABABIAAQBIAAEAAAAaAAEAAQObAAMAAAABABIAAQAwAAEAAAAaAAEAAQOdAAMAAAABABIAAQAYAAEAAAAaAAEAAQQaAAIAAQCnAKsAAAAEAAAAAQAIAAEGHgA2AHIApACuALgAygD8AQ4BGAFKAWQBfgGQAboB7AH2AhgCMgJEAnYCiAKiAswC3gMQAxoDJAM2A2gDcgN8A4YDoAO6A8wD9gQoBDIEVARuBIAEsgTEBN4FCAUaBSQFLgU4BUIFbAWWBcAF6gYUAAYADgAUABoAIAAmACwCTAACAKcCTQACAKgCTwACAKkD8QACAKoEewACAKsD7wACAKwAAQAEBIgAAgCsAAEABAKJAAIAqAACAAYADASKAAIArASMAAIBogAGAA4AFAAaACAAJgAsAlQAAgCnAlUAAgCoBAsAAgCpBAkAAgCqBH0AAgCrBAcAAgCsAAIABgAMBHcAAgCoAqMAAgGiAAEABASOAAIArAAGAA4AFAAaACAAJgAsAlgAAgCnAlkAAgCoAqcAAgCpBBcAAgCqBH8AAgCrBBkAAgCsAAMACAAOABQEkAACAKgEkgACAKwCtAACAaIAAwAIAA4AFAK2AAIAqASUAAIArAK4AAIBogACAAYADAOtAAIAqASWAAIArAAFAAwAEgAYAB4AJAR5AAIApwK+AAIAqAJcAAIAqQSYAAIArALAAAIBogAGAA4AFAAaACAAJgAsAl0AAgCnAl4AAgCoAmAAAgCpBB0AAgCqBIEAAgCrBBsAAgCsAAEABASaAAIAqAAEAAoAEAAWABwCywACAKgEgwACAKsEnAACAKwCzQACAaIAAwAIAA4AFALRAAIAqASeAAIArALXAAIBogACAAYADASgAAIArALbAAIBogAGAA4AFAAaACAAJgAsAmIAAgCnAmMAAgCoAuEAAgCpBDUAAgCqBIUAAgCrBDMAAgCsAAIABgAMBKIAAgCpBKQAAgCsAAMACAAOABQDoAACAKcDogACAKgEpgACAKwABQAMABIAGAAeACQDpgACAKcCZgACAKgERQACAKkEQwACAKoEQQACAKwAAgAGAAwC8gACAKgEqAACAKwABgAOABQAGgAgACYALAJnAAIApwJoAAIAqAJqAAIAqQPyAAIAqgR8AAIAqwPwAAIArAABAAQEiQACAKwAAQAEAooAAgCoAAIABgAMBIsAAgCsBI0AAgGiAAYADgAUABoAIAAmACwCbwACAKcCcAACAKgEDAACAKkECgACAKoEfgACAKsECAACAKwAAQAEBHgAAgCoAAEABASPAAIArAABAAQEGgACAKwAAwAIAA4AFASRAAIAqASTAAIArAK1AAIBogADAAgADgAUArcAAgCoBJUAAgCsArkAAgGiAAIABgAMA64AAgCoBJcAAgCsAAUADAASABgAHgAkBHoAAgCnAr8AAgCoAncAAgCpBJkAAgCsAsEAAgGiAAYADgAUABoAIAAmACwCeAACAKcCeQACAKgCewACAKkEHgACAKoEggACAKsEHAACAKwAAQAEBJsAAgCoAAQACgAQABYAHALMAAIAqASEAAIAqwSdAAIArALOAAIBogADAAgADgAUAtIAAgCoBJ8AAgCsAtgAAgGiAAIABgAMBKEAAgCsAtwAAgGiAAYADgAUABoAIAAmACwCfQACAKcCfgACAKgC4gACAKkENgACAKoEhgACAKsENAACAKwAAgAGAAwEowACAKkEpQACAKwAAwAIAA4AFAOhAAIApwOjAAIAqASnAAIArAAFAAwAEgAYAB4AJAOnAAIApwKBAAIAqARGAAIAqQREAAIAqgRCAAIArAACAAYADALzAAIAqASpAAIArAABAAQC+AACAKgAAQAEAvoAAgCoAAEABAL5AAIAqAABAAQC+wACAKgABQAMABIAGAAeACQCcwACAKcCdAACAKgCqAACAKkEGAACAKoEgAACAKsABQAMABIAGAAeACQEKwACAKcEKQACAKgELwACAKkELQACAKoEMQACAKwABQAMABIAGAAeACQELAACAKcEKgACAKgEMAACAKkELgACAKoEMgACAKwABQAMABIAGAAeACQEOQACAKcENwACAKgEPQACAKkEOwACAKoEPwACAKwABQAMABIAGAAeACQEOgACAKcEOAACAKgEPgACAKkEPAACAKoEQAACAKwAAQAEBIcAAgCoAAIAEQAlACkAAAArAC0ABQAvADQACAA2ADsADgA9AD4AFABFAEkAFgBLAE0AGwBPAFQAHgBWAFsAJABdAF4AKgCBAIEALACDAIMALQCGAIYALgCJAIkALwCMAIwAMACXAJoAMQDPAM8ANQABAAAAAQAIAAEABgACAAEAAgLVAtYAAQAAAAEACAACAA4ABATeBN8E4AThAAEABAKHAogCmQKaAAQAAAABAAgAAQAmAAIACgAcAAIABgAMAaMAAgBKAagAAgBYAAEABAGpAAIAWAABAAIASgBXAAQAAAABAAgAAQBEAAIACgAUAAEABAGkAAIATQABAAQBpgACAE0ABAAAAAEACAABAB4AAgAKABQAAQAEAaUAAgBQAAEABAGnAAIAUAABAAIASgGjAAEAAAABAAgAAQAGAZUAAQABAEsAAQAAAAEACAABAAYBJwABAAEAugABAAAAAQAIAAEABgGsAAEAAQA2AAEAAAABAAgAAgAcAAIB4wHkAAEAAAABAAgAAgAKAAIB5QHmAAEAAgAvAE8AAQAAAAEACAACAB4ADAIoAioCKQIrAiwCHwIgAiECIgGuAiQCJQABAAwAJwAoACsAMwA1AEYARwBIAEsAUwBUAFUAAQAAAAEACAACAAwAAwImAicCJwABAAMASQBLAiIAAQAAAAEACAACAGYACAI9Ai0CLgIwAjECOQI6AjwAAQAAAAEACAACABYACAAbABUAFgAXABgAGQAdABQAAQAIAa0CIwRxBHIEcwR0BHUEdgABAAAAAQAIAAIAFgAIBHYCIwRxBHIEcwR0Aa0EdQABAAgAFAAVABYAFwAYABkAGwAdAAEAAAABAAgAAgAWAAgAFQAWABcAGAAZABsAHQAUAAEACAItAi4CMAIxAjkCOgI8Aj0AAQAAAAEACAABAAYBaQABAAEAEwAGAAAAAQAIAAMAAQASAAEAUgAAAAEAAAAaAAIAAgF8AXwAAAHUAd0AAQABAAAAAQAIAAEAKAHAAAEAAAABAAgAAgAaAAoCMgB6AHMAdAIzAjQCNQI2AjcCOAACAAEAFAAdAAAAAQAAAAEACAACACYAEAHUAdUB1gHXAdgB2QHaAdsB3AHdAkACPgJBAkICPwJDAAEAEAAUABUAFgAXABgAGQAaABsAHAAdAE0ATgKuA5sDnQQa",
};
;(function(e){"function"===typeof define&&define.amd?define(["jquery","datatables.net","datatables.net-buttons"],function(i){return e(i,window,document)}):"object"===typeof exports?module.exports=function(i,l,t,s){i||(i=window);if(!l||!l.fn.dataTable)l=require("datatables.net")(i,l).$;l.fn.dataTable.Buttons||require("datatables.net-buttons")(i,l);return e(l,i,i.document,t,s)}:e(jQuery,window,document)})(function(e,i,l,t,s,q){function y(a){for(var b="";0<=a;)b=String.fromCharCode(a%26+65)+b,a=Math.floor(a/
26)-1;return b}function z(a,b){u===q&&(u=-1===x.serializeToString(e.parseXML(A["xl/worksheets/sheet1.xml"])).indexOf("xmlns:r"));e.each(b,function(d,c){if(e.isPlainObject(c)){var b=a.folder(d);z(b,c)}else{if(u){var b=c.childNodes[0],h,g,v=[];for(h=b.attributes.length-1;0<=h;h--){g=b.attributes[h].nodeName;var f=b.attributes[h].nodeValue;-1!==g.indexOf(":")&&(v.push({name:g,value:f}),b.removeAttribute(g))}h=0;for(g=v.length;h<g;h++)f=c.createAttribute(v[h].name.replace(":","_dt_b_namespace_token_")),
f.value=v[h].value,b.setAttributeNode(f)}b=x.serializeToString(c);u&&(-1===b.indexOf("<?xml")&&(b='<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'+b),b=b.replace(/_dt_b_namespace_token_/g,":"));b=b.replace(/<([^<>]*?) xmlns=""([^<>]*?)>/g,"<$1 $2>");a.file(d,b)}})}function o(a,b,d){var c=a.createElement(b);d&&(d.attr&&e(c).attr(d.attr),d.children&&e.each(d.children,function(a,b){c.appendChild(b)}),null!==d.text&&d.text!==q&&c.appendChild(a.createTextNode(d.text)));return c}function J(a,b){var d=
a.header[b].length,c;a.footer&&a.footer[b].length>d&&(d=a.footer[b].length);for(var e=0,h=a.body.length;e<h;e++)if(c=a.body[e][b],c=null!==c&&c!==q?c.toString():"",-1!==c.indexOf("\n")?(c=c.split("\n"),c.sort(function(a,b){return b.length-a.length}),c=c[0].length):c=c.length,c>d&&(d=c),40<d)return 52;d*=1.3;return 6<d?d:6}var p=e.fn.dataTable,r;var f="undefined"!==typeof self&&self||"undefined"!==typeof i&&i||this.content;if("undefined"===typeof f||"undefined"!==typeof navigator&&/MSIE [1-9]\./.test(navigator.userAgent))r=
void 0;else{var w=f.document.createElementNS("http://www.w3.org/1999/xhtml","a"),K="download"in w,L=/constructor/i.test(f.HTMLElement)||f.safari,B=/CriOS\/[\d]+/.test(navigator.userAgent),M=function(a){(f.setImmediate||f.setTimeout)(function(){throw a;},0)},C=function(a){setTimeout(function(){"string"===typeof a?(f.URL||f.webkitURL||f).revokeObjectURL(a):a.remove()},4E4)},D=function(a){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob([String.fromCharCode(65279),
a],{type:a.type}):a},E=function(a,b,d){d||(a=D(a));var c=this,d="application/octet-stream"===a.type,e,h=function(){for(var a=["writestart","progress","write","writeend"],a=[].concat(a),b=a.length;b--;){var d=c["on"+a[b]];if("function"===typeof d)try{d.call(c,c)}catch(g){M(g)}}};c.readyState=c.INIT;if(K)e=(f.URL||f.webkitURL||f).createObjectURL(a),setTimeout(function(){w.href=e;w.download=b;var a=new MouseEvent("click");w.dispatchEvent(a);h();C(e);c.readyState=c.DONE});else if((B||d&&L)&&f.FileReader){var g=
new FileReader;g.onloadend=function(){var a=B?g.result:g.result.replace(/^data:[^;]*;/,"data:attachment/file;");f.open(a,"_blank")||(f.location.href=a);c.readyState=c.DONE;h()};g.readAsDataURL(a);c.readyState=c.INIT}else e||(e=(f.URL||f.webkitURL||f).createObjectURL(a)),d?f.location.href=e:f.open(e,"_blank")||(f.location.href=e),c.readyState=c.DONE,h(),C(e)},k=E.prototype;"undefined"!==typeof navigator&&navigator.msSaveOrOpenBlob?r=function(a,b,d){b=b||a.name||"download";d||(a=D(a));return navigator.msSaveOrOpenBlob(a,
b)}:(k.abort=function(){},k.readyState=k.INIT=0,k.WRITING=1,k.DONE=2,k.error=k.onwritestart=k.onprogress=k.onwrite=k.onabort=k.onerror=k.onwriteend=null,r=function(a,b,d){return new E(a,b||a.name||"download",d)})}p.fileSave=r;var N=function(a){var b="Sheet1";a.sheetName&&(b=a.sheetName.replace(/[\[\]\*\/\\\?\:]/g,""));return b},F=function(a){return a.newline?a.newline:navigator.userAgent.match(/Windows/)?"\r\n":"\n"},G=function(a,b){for(var d=F(b),c=a.buttons.exportData(b.exportOptions),e=b.fieldBoundary,
h=b.fieldSeparator,g=RegExp(e,"g"),f=b.escapeChar!==q?b.escapeChar:"\\",i=function(a){for(var b="",c=0,d=a.length;c<d;c++)0<c&&(b+=h),b+=e?e+(""+a[c]).replace(g,f+e)+e:a[c];return b},l=b.header?i(c.header)+d:"",j=b.footer&&c.footer?d+i(c.footer):"",n=[],m=0,k=c.body.length;m<k;m++)n.push(i(c.body[m]));return{str:l+n.join(d)+j,rows:n.length}},H=function(){if(!(-1!==navigator.userAgent.indexOf("Safari")&&-1===navigator.userAgent.indexOf("Chrome")&&-1===navigator.userAgent.indexOf("Opera")))return!1;
var a=navigator.userAgent.match(/AppleWebKit\/(\d+\.\d+)/);return a&&1<a.length&&603.1>1*a[1]?!0:!1};try{var x=new XMLSerializer,u}catch(O){}var A={"_rels/.rels":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>',"xl/_rels/workbook.xml.rels":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>',
"[Content_Types].xml":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="xml" ContentType="application/xml" /><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml" /><Default Extension="jpeg" ContentType="image/jpeg" /><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" /><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" /><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml" /></Types>',
"xl/workbook.xml":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><fileVersion appName="xl" lastEdited="5" lowestEdited="5" rupBuild="24816"/><workbookPr showInkAnnotation="0" autoCompressPictures="0"/><bookViews><workbookView xWindow="0" yWindow="0" windowWidth="25600" windowHeight="19020" tabRatio="500"/></bookViews><sheets><sheet name="" sheetId="1" r:id="rId1"/></sheets></workbook>',
"xl/worksheets/sheet1.xml":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><sheetData/><mergeCells count="0"/></worksheet>',"xl/styles.xml":'<?xml version="1.0" encoding="UTF-8"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><numFmts count="6"><numFmt numFmtId="164" formatCode="#,##0.00_- [$$-45C]"/><numFmt numFmtId="165" formatCode="&quot;£&quot;#,##0.00"/><numFmt numFmtId="166" formatCode="[$€-2] #,##0.00"/><numFmt numFmtId="167" formatCode="0.0%"/><numFmt numFmtId="168" formatCode="#,##0;(#,##0)"/><numFmt numFmtId="169" formatCode="#,##0.00;(#,##0.00)"/></numFmts><fonts count="5" x14ac:knownFonts="1"><font><sz val="11" /><name val="Calibri" /></font><font><sz val="11" /><name val="Calibri" /><color rgb="FFFFFFFF" /></font><font><sz val="11" /><name val="Calibri" /><b /></font><font><sz val="11" /><name val="Calibri" /><i /></font><font><sz val="11" /><name val="Calibri" /><u /></font></fonts><fills count="6"><fill><patternFill patternType="none" /></fill><fill><patternFill patternType="none" /></fill><fill><patternFill patternType="solid"><fgColor rgb="FFD9D9D9" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFD99795" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6efce" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6cfef" /><bgColor indexed="64" /></patternFill></fill></fills><borders count="2"><border><left /><right /><top /><bottom /><diagonal /></border><border diagonalUp="false" diagonalDown="false"><left style="thin"><color auto="1" /></left><right style="thin"><color auto="1" /></right><top style="thin"><color auto="1" /></top><bottom style="thin"><color auto="1" /></bottom><diagonal /></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" /></cellStyleXfs><cellXfs count="67"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="left"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="center"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="right"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="fill"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment textRotation="90"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment wrapText="1"/></xf><xf numFmtId="9"   fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="164" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="165" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="166" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="167" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="168" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="169" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="3" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="4" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="1" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="2" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0" /></cellStyles><dxfs count="0" /><tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4" /></styleSheet>'},
I=[{match:/^\-?\d+\.\d%$/,style:60,fmt:function(a){return a/100}},{match:/^\-?\d+\.?\d*%$/,style:56,fmt:function(a){return a/100}},{match:/^\-?\$[\d,]+.?\d*$/,style:57},{match:/^\-?£[\d,]+.?\d*$/,style:58},{match:/^\-?€[\d,]+.?\d*$/,style:59},{match:/^\-?\d+$/,style:65},{match:/^\-?\d+\.\d{2}$/,style:66},{match:/^\([\d,]+\)$/,style:61,fmt:function(a){return-1*a.replace(/[\(\)]/g,"")}},{match:/^\([\d,]+\.\d{2}\)$/,style:62,fmt:function(a){return-1*a.replace(/[\(\)]/g,"")}},{match:/^\-?[\d,]+$/,style:63},
{match:/^\-?[\d,]+\.\d{2}$/,style:64}];p.ext.buttons.copyHtml5={className:"buttons-copy buttons-html5",text:function(a){return a.i18n("buttons.copy","Copy")},action:function(a,b,d,c){this.processing(!0);var f=this,a=G(b,c),h=b.buttons.exportInfo(c),g=F(c),i=a.str,d=e("<div/>").css({height:1,width:1,overflow:"hidden",position:"fixed",top:0,left:0});h.title&&(i=h.title+g+g+i);h.messageTop&&(i=h.messageTop+g+g+i);h.messageBottom&&(i=i+g+g+h.messageBottom);c.customize&&(i=c.customize(i,c));c=e("<textarea readonly/>").val(i).appendTo(d);
if(l.queryCommandSupported("copy")){d.appendTo(b.table().container());c[0].focus();c[0].select();try{var k=l.execCommand("copy");d.remove();if(k){b.buttons.info(b.i18n("buttons.copyTitle","Copy to clipboard"),b.i18n("buttons.copySuccess",{1:"Copied one row to clipboard",_:"Copied %d rows to clipboard"},a.rows),2E3);this.processing(!1);return}}catch(o){}}k=e("<span>"+b.i18n("buttons.copyKeys","Press <i>ctrl</i> or <i>⌘</i> + <i>C</i> to copy the table data<br>to your system clipboard.<br><br>To cancel, click this message or press escape.")+
"</span>").append(d);b.buttons.info(b.i18n("buttons.copyTitle","Copy to clipboard"),k,0);c[0].focus();c[0].select();var j=e(k).closest(".dt-button-info"),n=function(){j.off("click.buttons-copy");e(l).off(".buttons-copy");b.buttons.info(!1)};j.on("click.buttons-copy",n);e(l).on("keydown.buttons-copy",function(a){27===a.keyCode&&(n(),f.processing(!1))}).on("copy.buttons-copy cut.buttons-copy",function(){n();f.processing(!1)})},exportOptions:{},fieldSeparator:"\t",fieldBoundary:"",header:!0,footer:!1,
title:"*",messageTop:"*",messageBottom:"*"};p.ext.buttons.csvHtml5={bom:!1,className:"buttons-csv buttons-html5",available:function(){return i.FileReader!==q&&i.Blob},text:function(a){return a.i18n("buttons.csv","CSV")},action:function(a,b,d,c){this.processing(!0);a=G(b,c).str;b=b.buttons.exportInfo(c);d=c.charset;c.customize&&(a=c.customize(a,c));!1!==d?(d||(d=l.characterSet||l.charset),d&&(d=";charset="+d)):d="";c.bom&&(a="﻿"+a);r(new Blob([a],{type:"text/csv"+d}),b.filename,!0);this.processing(!1)},
filename:"*",extension:".csv",exportOptions:{},fieldSeparator:",",fieldBoundary:'"',escapeChar:'"',charset:null,header:!0,footer:!1};p.ext.buttons.excelHtml5={className:"buttons-excel buttons-html5",available:function(){return i.FileReader!==q&&(t||i.JSZip)!==q&&!H()&&x},text:function(a){return a.i18n("buttons.excel","Excel")},action:function(a,b,d,c){this.processing(!0);var f=this,h=0,a=function(a){return e.parseXML(A[a])},g=a("xl/worksheets/sheet1.xml"),k=g.getElementsByTagName("sheetData")[0],
a={_rels:{".rels":a("_rels/.rels")},xl:{_rels:{"workbook.xml.rels":a("xl/_rels/workbook.xml.rels")},"workbook.xml":a("xl/workbook.xml"),"styles.xml":a("xl/styles.xml"),worksheets:{"sheet1.xml":g}},"[Content_Types].xml":a("[Content_Types].xml")},d=b.buttons.exportData(c.exportOptions),l,p,j=function(a){l=h+1;p=o(g,"row",{attr:{r:l}});for(var b=0,d=a.length;b<d;b++){var i=y(b)+""+l,f=null;if(null===a[b]||a[b]===q||""===a[b])if(!0===c.createEmptyCells)a[b]="";else continue;a[b]=e.trim(a[b]);for(var j=
0,n=I.length;j<n;j++){var m=I[j];if(a[b].match&&!a[b].match(/^0\d+/)&&a[b].match(m.match)){f=a[b].replace(/[^\d\.\-]/g,"");m.fmt&&(f=m.fmt(f));f=o(g,"c",{attr:{r:i,s:m.style},children:[o(g,"v",{text:f})]});break}}f||("number"===typeof a[b]||a[b].match&&a[b].match(/^-?\d+(\.\d+)?$/)&&!a[b].match(/^0\d+/)?f=o(g,"c",{attr:{t:"n",r:i},children:[o(g,"v",{text:a[b]})]}):(m=!a[b].replace?a[b]:a[b].replace(/[\x00-\x09\x0B\x0C\x0E-\x1F\x7F-\x9F]/g,""),f=o(g,"c",{attr:{t:"inlineStr",r:i},children:{row:o(g,
"is",{children:{row:o(g,"t",{text:m})}})}})));p.appendChild(f)}k.appendChild(p);h++};e("sheets sheet",a.xl["workbook.xml"]).attr("name",N(c));c.customizeData&&c.customizeData(d);var n=function(a,b){var c=e("mergeCells",g);c[0].appendChild(o(g,"mergeCell",{attr:{ref:"A"+a+":"+y(b)+a}}));c.attr("count",parseFloat(c.attr("count"))+1);e("row:eq("+(a-1)+") c",g).attr("s","51")},m=b.buttons.exportInfo(c);m.title&&(j([m.title],h),n(h,d.header.length-1));m.messageTop&&(j([m.messageTop],h),n(h,d.header.length-
1));c.header&&(j(d.header,h),e("row:last c",g).attr("s","2"));for(var b=0,s=d.body.length;b<s;b++)j(d.body[b],h);c.footer&&d.footer&&(j(d.footer,h),e("row:last c",g).attr("s","2"));m.messageBottom&&(j([m.messageBottom],h),n(h,d.header.length-1));b=o(g,"cols");e("worksheet",g).prepend(b);j=0;for(n=d.header.length;j<n;j++)b.appendChild(o(g,"col",{attr:{min:j+1,max:j+1,width:J(d,j),customWidth:1}}));c.customize&&c.customize(a);0===e("mergeCells",g).children().length&&e("mergeCells",g).remove();d=new (t||
i.JSZip);b={type:"blob",mimeType:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"};z(d,a);d.generateAsync?d.generateAsync(b).then(function(a){r(a,m.filename);f.processing(false)}):(r(d.generate(b),m.filename),this.processing(!1))},filename:"*",extension:".xlsx",exportOptions:{},header:!0,footer:!1,title:"*",messageTop:"*",messageBottom:"*",createEmptyCells:!1};p.ext.buttons.pdfHtml5={className:"buttons-pdf buttons-html5",available:function(){return i.FileReader!==q&&(s||i.pdfMake)},
text:function(a){return a.i18n("buttons.pdf","PDF")},action:function(a,b,d,c){this.processing(!0);a=b.buttons.exportData(c.exportOptions);b=b.buttons.exportInfo(c);d=[];c.header&&d.push(e.map(a.header,function(a){return{text:"string"===typeof a?a:a+"",style:"tableHeader"}}));for(var f=0,h=a.body.length;f<h;f++)d.push(e.map(a.body[f],function(a){return{text:"string"===typeof a?a:a+"",style:f%2?"tableBodyEven":"tableBodyOdd"}}));c.footer&&a.footer&&d.push(e.map(a.footer,function(a){return{text:"string"===
typeof a?a:a+"",style:"tableFooter"}}));a={pageSize:c.pageSize,pageOrientation:c.orientation,content:[{table:{headerRows:1,body:d},layout:"noBorders"}],styles:{tableHeader:{bold:!0,fontSize:11,color:"white",fillColor:"#2d4154",alignment:"center"},tableBodyEven:{},tableBodyOdd:{fillColor:"#f3f3f3"},tableFooter:{bold:!0,fontSize:11,color:"white",fillColor:"#2d4154"},title:{alignment:"center",fontSize:15},message:{}},defaultStyle:{fontSize:10}};b.messageTop&&a.content.unshift({text:b.messageTop,style:"message",
margin:[0,0,0,12]});b.messageBottom&&a.content.push({text:b.messageBottom,style:"message",margin:[0,0,0,12]});b.title&&a.content.unshift({text:b.title,style:"title",margin:[0,0,0,12]});c.customize&&c.customize(a,c);a=(s||i.pdfMake).createPdf(a);"open"===c.download&&!H()?a.open():a.download(b.filename);this.processing(!1)},title:"*",filename:"*",extension:".pdf",exportOptions:{},orientation:"portrait",pageSize:"A4",header:!0,footer:!1,messageTop:"*",messageBottom:"*",customize:null,download:"download"};
return p.Buttons});

;(function(d){"function"===typeof define&&define.amd?define(["jquery","datatables.net","datatables.net-buttons"],function(e){return d(e,window,document)}):"object"===typeof exports?module.exports=function(e,c){e||(e=window);if(!c||!c.fn.dataTable)c=require("datatables.net")(e,c).$;c.fn.dataTable.Buttons||require("datatables.net-buttons")(e,c);return d(c,e,e.document)}:d(jQuery,window,document)})(function(d,e,c){var i=d.fn.dataTable,f=c.createElement("a"),l=function(a){f.href=a;a=f.host;-1===a.indexOf("/")&&
0!==f.pathname.indexOf("/")&&(a+="/");return f.protocol+"//"+a+f.pathname+f.search};i.ext.buttons.print={className:"buttons-print",text:function(a){return a.i18n("buttons.print","Print")},action:function(a,b,c,h){var a=b.buttons.exportData(d.extend({decodeEntities:!1},h.exportOptions)),c=b.buttons.exportInfo(h),f=function(b,c){for(var a="<tr>",d=0,e=b.length;d<e;d++)a+="<"+c+">"+b[d]+"</"+c+">";return a+"</tr>"},b='<table class="'+b.table().node().className+'">';h.header&&(b+="<thead>"+f(a.header,
"th")+"</thead>");for(var b=b+"<tbody>",k=0,i=a.body.length;k<i;k++)b+=f(a.body[k],"td");b+="</tbody>";h.footer&&a.footer&&(b+="<tfoot>"+f(a.footer,"th")+"</tfoot>");var b=b+"</table>",g=e.open("","");g.document.close();var j="<title>"+c.title+"</title>";d("style, link").each(function(){var b=j,a=d(this).clone()[0];"link"===a.nodeName.toLowerCase()&&(a.href=l(a.href));j=b+a.outerHTML});try{g.document.head.innerHTML=j}catch(m){d(g.document.head).html(j)}g.document.body.innerHTML="<h1>"+c.title+"</h1><div>"+
(c.messageTop||"")+"</div>"+b+"<div>"+(c.messageBottom||"")+"</div>";d(g.document.body).addClass("dt-print-view");d("img",g.document.body).each(function(a,b){b.setAttribute("src",l(b.getAttribute("src")))});h.customize&&h.customize(g);setTimeout(function(){h.autoPrint&&(g.print(),g.close())},1E3)},title:"*",messageTop:"*",messageBottom:"*",exportOptions:{},header:!0,footer:!1,autoPrint:!0,customize:null};return i.Buttons});

;/*!
  * Bootstrap v4.0.0-beta.3 (https://getbootstrap.com)
  * Copyright 2011-2017 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e(t.bootstrap={},t.jQuery,t.Popper)}(this,function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}e=e&&e.hasOwnProperty("default")?e.default:e,n=n&&n.hasOwnProperty("default")?n.default:n;var o=function(t){function e(t){return{}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function n(e){var n=this,i=!1;return t(this).one(s.TRANSITION_END,function(){i=!0}),setTimeout(function(){i||s.triggerTransitionEnd(n)},e),this}var i=!1,s={TRANSITION_END:"bsTransitionEnd",getUID:function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},getSelectorFromElement:function(e){var n=e.getAttribute("data-target");n&&"#"!==n||(n=e.getAttribute("href")||""),"#"===n.charAt(0)&&(n=function(e){return e="function"==typeof t.escapeSelector?t.escapeSelector(e).substr(1):e.replace(/(:|\.|\[|\]|,|=|@)/g,"\\$1")}(n));try{return t(document).find(n).length>0?n:null}catch(t){return null}},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(e){t(e).trigger(i.end)},supportsTransitionEnd:function(){return Boolean(i)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,n,i){for(var r in i)if(Object.prototype.hasOwnProperty.call(i,r)){var o=i[r],a=n[r],l=a&&s.isElement(a)?"element":e(a);if(!new RegExp(o).test(l))throw new Error(t.toUpperCase()+': Option "'+r+'" provided type "'+l+'" but expected type "'+o+'".')}}};return i=!window.QUnit&&{end:"transitionend"},t.fn.emulateTransitionEnd=n,s.supportsTransitionEnd()&&(t.event.special[s.TRANSITION_END]={bindType:i.end,delegateType:i.end,handle:function(e){if(t(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}}),s}(e),a=function(t){var e="alert",n="bs.alert",i="."+n,r=t.fn[e],a={CLOSE:"close"+i,CLOSED:"closed"+i,CLICK_DATA_API:"click"+i+".data-api"},l="alert",h="fade",c="show",u=function(){function e(t){this._element=t}var i=e.prototype;return i.close=function(t){t=t||this._element;var e=this._getRootElement(t);this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},i.dispose=function(){t.removeData(this._element,n),this._element=null},i._getRootElement=function(e){var n=o.getSelectorFromElement(e),i=!1;return n&&(i=t(n)[0]),i||(i=t(e).closest("."+l)[0]),i},i._triggerCloseEvent=function(e){var n=t.Event(a.CLOSE);return t(e).trigger(n),n},i._removeElement=function(e){var n=this;t(e).removeClass(c),o.supportsTransitionEnd()&&t(e).hasClass(h)?t(e).one(o.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(150):this._destroyElement(e)},i._destroyElement=function(e){t(e).detach().trigger(a.CLOSED).remove()},e._jQueryInterface=function(i){return this.each(function(){var s=t(this),r=s.data(n);r||(r=new e(this),s.data(n,r)),"close"===i&&r[i](this)})},e._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},s(e,null,[{key:"VERSION",get:function(){return"4.0.0-beta.3"}}]),e}();return t(document).on(a.CLICK_DATA_API,'[data-dismiss="alert"]',u._handleDismiss(new u)),t.fn[e]=u._jQueryInterface,t.fn[e].Constructor=u,t.fn[e].noConflict=function(){return t.fn[e]=r,u._jQueryInterface},u}(e),l=function(t){var e="button",n="bs.button",i="."+n,r=".data-api",o=t.fn[e],a="active",l="btn",h="focus",c='[data-toggle^="button"]',u='[data-toggle="buttons"]',f="input",d=".active",_=".btn",g={CLICK_DATA_API:"click"+i+r,FOCUS_BLUR_DATA_API:"focus"+i+r+" blur"+i+r},m=function(){function e(t){this._element=t}var i=e.prototype;return i.toggle=function(){var e=!0,n=!0,i=t(this._element).closest(u)[0];if(i){var s=t(this._element).find(f)[0];if(s){if("radio"===s.type)if(s.checked&&t(this._element).hasClass(a))e=!1;else{var r=t(i).find(d)[0];r&&t(r).removeClass(a)}if(e){if(s.hasAttribute("disabled")||i.hasAttribute("disabled")||s.classList.contains("disabled")||i.classList.contains("disabled"))return;s.checked=!t(this._element).hasClass(a),t(s).trigger("change")}s.focus(),n=!1}}n&&this._element.setAttribute("aria-pressed",!t(this._element).hasClass(a)),e&&t(this._element).toggleClass(a)},i.dispose=function(){t.removeData(this._element,n),this._element=null},e._jQueryInterface=function(i){return this.each(function(){var s=t(this).data(n);s||(s=new e(this),t(this).data(n,s)),"toggle"===i&&s[i]()})},s(e,null,[{key:"VERSION",get:function(){return"4.0.0-beta.3"}}]),e}();return t(document).on(g.CLICK_DATA_API,c,function(e){e.preventDefault();var n=e.target;t(n).hasClass(l)||(n=t(n).closest(_)),m._jQueryInterface.call(t(n),"toggle")}).on(g.FOCUS_BLUR_DATA_API,c,function(e){var n=t(e.target).closest(_)[0];t(n).toggleClass(h,/^focus(in)?$/.test(e.type))}),t.fn[e]=m._jQueryInterface,t.fn[e].Constructor=m,t.fn[e].noConflict=function(){return t.fn[e]=o,m._jQueryInterface},m}(e),h=function(t){var e="carousel",n="bs.carousel",i="."+n,a=t.fn[e],l={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},h={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},c="next",u="prev",f="left",d="right",_={SLIDE:"slide"+i,SLID:"slid"+i,KEYDOWN:"keydown"+i,MOUSEENTER:"mouseenter"+i,MOUSELEAVE:"mouseleave"+i,TOUCHEND:"touchend"+i,LOAD_DATA_API:"load"+i+".data-api",CLICK_DATA_API:"click"+i+".data-api"},g="carousel",m="active",p="slide",v="carousel-item-right",E="carousel-item-left",T="carousel-item-next",y="carousel-item-prev",C={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".carousel-item-next, .carousel-item-prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},I=function(){function a(e,n){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(n),this._element=t(e)[0],this._indicatorsElement=t(this._element).find(C.INDICATORS)[0],this._addEventListeners()}var I=a.prototype;return I.next=function(){this._isSliding||this._slide(c)},I.nextWhenVisible=function(){!document.hidden&&t(this._element).is(":visible")&&"hidden"!==t(this._element).css("visibility")&&this.next()},I.prev=function(){this._isSliding||this._slide(u)},I.pause=function(e){e||(this._isPaused=!0),t(this._element).find(C.NEXT_PREV)[0]&&o.supportsTransitionEnd()&&(o.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},I.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},I.to=function(e){var n=this;this._activeElement=t(this._element).find(C.ACTIVE_ITEM)[0];var i=this._getItemIndex(this._activeElement);if(!(e>this._items.length-1||e<0))if(this._isSliding)t(this._element).one(_.SLID,function(){return n.to(e)});else{if(i===e)return this.pause(),void this.cycle();var s=e>i?c:u;this._slide(s,this._items[e])}},I.dispose=function(){t(this._element).off(i),t.removeData(this._element,n),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},I._getConfig=function(t){return t=r({},l,t),o.typeCheckConfig(e,t,h),t},I._addEventListeners=function(){var e=this;this._config.keyboard&&t(this._element).on(_.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&(t(this._element).on(_.MOUSEENTER,function(t){return e.pause(t)}).on(_.MOUSELEAVE,function(t){return e.cycle(t)}),"ontouchstart"in document.documentElement&&t(this._element).on(_.TOUCHEND,function(){e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout(function(t){return e.cycle(t)},500+e._config.interval)}))},I._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next();break;default:return}},I._getItemIndex=function(e){return this._items=t.makeArray(t(e).parent().find(C.ITEM)),this._items.indexOf(e)},I._getItemByDirection=function(t,e){var n=t===c,i=t===u,s=this._getItemIndex(e),r=this._items.length-1;if((i&&0===s||n&&s===r)&&!this._config.wrap)return e;var o=(s+(t===u?-1:1))%this._items.length;return-1===o?this._items[this._items.length-1]:this._items[o]},I._triggerSlideEvent=function(e,n){var i=this._getItemIndex(e),s=this._getItemIndex(t(this._element).find(C.ACTIVE_ITEM)[0]),r=t.Event(_.SLIDE,{relatedTarget:e,direction:n,from:s,to:i});return t(this._element).trigger(r),r},I._setActiveIndicatorElement=function(e){if(this._indicatorsElement){t(this._indicatorsElement).find(C.ACTIVE).removeClass(m);var n=this._indicatorsElement.children[this._getItemIndex(e)];n&&t(n).addClass(m)}},I._slide=function(e,n){var i,s,r,a=this,l=t(this._element).find(C.ACTIVE_ITEM)[0],h=this._getItemIndex(l),u=n||l&&this._getItemByDirection(e,l),g=this._getItemIndex(u),I=Boolean(this._interval);if(e===c?(i=E,s=T,r=f):(i=v,s=y,r=d),u&&t(u).hasClass(m))this._isSliding=!1;else{if(!this._triggerSlideEvent(u,r).isDefaultPrevented()&&l&&u){this._isSliding=!0,I&&this.pause(),this._setActiveIndicatorElement(u);var A=t.Event(_.SLID,{relatedTarget:u,direction:r,from:h,to:g});o.supportsTransitionEnd()&&t(this._element).hasClass(p)?(t(u).addClass(s),o.reflow(u),t(l).addClass(i),t(u).addClass(i),t(l).one(o.TRANSITION_END,function(){t(u).removeClass(i+" "+s).addClass(m),t(l).removeClass(m+" "+s+" "+i),a._isSliding=!1,setTimeout(function(){return t(a._element).trigger(A)},0)}).emulateTransitionEnd(600)):(t(l).removeClass(m),t(u).addClass(m),this._isSliding=!1,t(this._element).trigger(A)),I&&this.cycle()}}},a._jQueryInterface=function(e){return this.each(function(){var i=t(this).data(n),s=r({},l,t(this).data());"object"==typeof e&&(s=r({},s,e));var o="string"==typeof e?e:s.slide;if(i||(i=new a(this,s),t(this).data(n,i)),"number"==typeof e)i.to(e);else if("string"==typeof o){if("undefined"==typeof i[o])throw new Error('No method named "'+o+'"');i[o]()}else s.interval&&(i.pause(),i.cycle())})},a._dataApiClickHandler=function(e){var i=o.getSelectorFromElement(this);if(i){var s=t(i)[0];if(s&&t(s).hasClass(g)){var l=r({},t(s).data(),t(this).data()),h=this.getAttribute("data-slide-to");h&&(l.interval=!1),a._jQueryInterface.call(t(s),l),h&&t(s).data(n).to(h),e.preventDefault()}}},s(a,null,[{key:"VERSION",get:function(){return"4.0.0-beta.3"}},{key:"Default",get:function(){return l}}]),a}();return t(document).on(_.CLICK_DATA_API,C.DATA_SLIDE,I._dataApiClickHandler),t(window).on(_.LOAD_DATA_API,function(){t(C.DATA_RIDE).each(function(){var e=t(this);I._jQueryInterface.call(e,e.data())})}),t.fn[e]=I._jQueryInterface,t.fn[e].Constructor=I,t.fn[e].noConflict=function(){return t.fn[e]=a,I._jQueryInterface},I}(e),c=function(t){var e="collapse",n="bs.collapse",i="."+n,a=t.fn[e],l={toggle:!0,parent:""},h={toggle:"boolean",parent:"(string|element)"},c={SHOW:"show"+i,SHOWN:"shown"+i,HIDE:"hide"+i,HIDDEN:"hidden"+i,CLICK_DATA_API:"click"+i+".data-api"},u="show",f="collapse",d="collapsing",_="collapsed",g="width",m="height",p={ACTIVES:".show, .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},v=function(){function i(e,n){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(n),this._triggerArray=t.makeArray(t('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var i=t(p.DATA_TOGGLE),s=0;s<i.length;s++){var r=i[s],a=o.getSelectorFromElement(r);null!==a&&t(a).filter(e).length>0&&this._triggerArray.push(r)}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var a=i.prototype;return a.toggle=function(){t(this._element).hasClass(u)?this.hide():this.show()},a.show=function(){var e=this;if(!this._isTransitioning&&!t(this._element).hasClass(u)){var s,r;if(this._parent&&((s=t.makeArray(t(this._parent).children().children(p.ACTIVES))).length||(s=null)),!(s&&(r=t(s).data(n))&&r._isTransitioning)){var a=t.Event(c.SHOW);if(t(this._element).trigger(a),!a.isDefaultPrevented()){s&&(i._jQueryInterface.call(t(s),"hide"),r||t(s).data(n,null));var l=this._getDimension();t(this._element).removeClass(f).addClass(d),this._element.style[l]=0,this._triggerArray.length&&t(this._triggerArray).removeClass(_).attr("aria-expanded",!0),this.setTransitioning(!0);var h=function(){t(e._element).removeClass(d).addClass(f).addClass(u),e._element.style[l]="",e.setTransitioning(!1),t(e._element).trigger(c.SHOWN)};if(o.supportsTransitionEnd()){var g="scroll"+(l[0].toUpperCase()+l.slice(1));t(this._element).one(o.TRANSITION_END,h).emulateTransitionEnd(600),this._element.style[l]=this._element[g]+"px"}else h()}}}},a.hide=function(){var e=this;if(!this._isTransitioning&&t(this._element).hasClass(u)){var n=t.Event(c.HIDE);if(t(this._element).trigger(n),!n.isDefaultPrevented()){var i=this._getDimension();if(this._element.style[i]=this._element.getBoundingClientRect()[i]+"px",o.reflow(this._element),t(this._element).addClass(d).removeClass(f).removeClass(u),this._triggerArray.length)for(var s=0;s<this._triggerArray.length;s++){var r=this._triggerArray[s],a=o.getSelectorFromElement(r);if(null!==a){t(a).hasClass(u)||t(r).addClass(_).attr("aria-expanded",!1)}}this.setTransitioning(!0);var l=function(){e.setTransitioning(!1),t(e._element).removeClass(d).addClass(f).trigger(c.HIDDEN)};this._element.style[i]="",o.supportsTransitionEnd()?t(this._element).one(o.TRANSITION_END,l).emulateTransitionEnd(600):l()}}},a.setTransitioning=function(t){this._isTransitioning=t},a.dispose=function(){t.removeData(this._element,n),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},a._getConfig=function(t){return t=r({},l,t),t.toggle=Boolean(t.toggle),o.typeCheckConfig(e,t,h),t},a._getDimension=function(){return t(this._element).hasClass(g)?g:m},a._getParent=function(){var e=this,n=null;o.isElement(this._config.parent)?(n=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(n=this._config.parent[0])):n=t(this._config.parent)[0];var s='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';return t(n).find(s).each(function(t,n){e._addAriaAndCollapsedClass(i._getTargetFromElement(n),[n])}),n},a._addAriaAndCollapsedClass=function(e,n){if(e){var i=t(e).hasClass(u);n.length&&t(n).toggleClass(_,!i).attr("aria-expanded",i)}},i._getTargetFromElement=function(e){var n=o.getSelectorFromElement(e);return n?t(n)[0]:null},i._jQueryInterface=function(e){return this.each(function(){var s=t(this),o=s.data(n),a=r({},l,s.data(),"object"==typeof e&&e);if(!o&&a.toggle&&/show|hide/.test(e)&&(a.toggle=!1),o||(o=new i(this,a),s.data(n,o)),"string"==typeof e){if("undefined"==typeof o[e])throw new Error('No method named "'+e+'"');o[e]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.0.0-beta.3"}},{key:"Default",get:function(){return l}}]),i}();return t(document).on(c.CLICK_DATA_API,p.DATA_TOGGLE,function(e){"A"===e.currentTarget.tagName&&e.preventDefault();var i=t(this),s=o.getSelectorFromElement(this);t(s).each(function(){var e=t(this),s=e.data(n)?"toggle":i.data();v._jQueryInterface.call(e,s)})}),t.fn[e]=v._jQueryInterface,t.fn[e].Constructor=v,t.fn[e].noConflict=function(){return t.fn[e]=a,v._jQueryInterface},v}(e),u=function(t){var e="dropdown",i="bs.dropdown",a="."+i,l=".data-api",h=t.fn[e],c=new RegExp("38|40|27"),u={HIDE:"hide"+a,HIDDEN:"hidden"+a,SHOW:"show"+a,SHOWN:"shown"+a,CLICK:"click"+a,CLICK_DATA_API:"click"+a+l,KEYDOWN_DATA_API:"keydown"+a+l,KEYUP_DATA_API:"keyup"+a+l},f="disabled",d="show",_="dropup",g="dropright",m="dropleft",p="dropdown-menu-right",v="dropdown-menu-left",E="position-static",T='[data-toggle="dropdown"]',y=".dropdown form",C=".dropdown-menu",I=".navbar-nav",A=".dropdown-menu .dropdown-item:not(.disabled)",b="top-start",D="top-end",S="bottom-start",w="bottom-end",N="right-start",O="left-start",k={offset:0,flip:!0,boundary:"scrollParent"},P={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)"},L=function(){function l(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var h=l.prototype;return h.toggle=function(){if(!this._element.disabled&&!t(this._element).hasClass(f)){var e=l._getParentFromElement(this._element),i=t(this._menu).hasClass(d);if(l._clearMenus(),!i){var s={relatedTarget:this._element},r=t.Event(u.SHOW,s);if(t(e).trigger(r),!r.isDefaultPrevented()){if(!this._inNavbar){if("undefined"==typeof n)throw new Error("Bootstrap dropdown require Popper.js (https://popper.js.org)");var o=this._element;t(e).hasClass(_)&&(t(this._menu).hasClass(v)||t(this._menu).hasClass(p))&&(o=e),"scrollParent"!==this._config.boundary&&t(e).addClass(E),this._popper=new n(o,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&!t(e).closest(I).length&&t("body").children().on("mouseover",null,t.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),t(this._menu).toggleClass(d),t(e).toggleClass(d).trigger(t.Event(u.SHOWN,s))}}}},h.dispose=function(){t.removeData(this._element,i),t(this._element).off(a),this._element=null,this._menu=null,null!==this._popper&&(this._popper.destroy(),this._popper=null)},h.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},h._addEventListeners=function(){var e=this;t(this._element).on(u.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},h._getConfig=function(n){return n=r({},this.constructor.Default,t(this._element).data(),n),o.typeCheckConfig(e,n,this.constructor.DefaultType),n},h._getMenuElement=function(){if(!this._menu){var e=l._getParentFromElement(this._element);this._menu=t(e).find(C)[0]}return this._menu},h._getPlacement=function(){var e=t(this._element).parent(),n=S;return e.hasClass(_)?(n=b,t(this._menu).hasClass(p)&&(n=D)):e.hasClass(g)?n=N:e.hasClass(m)?n=O:t(this._menu).hasClass(p)&&(n=w),n},h._detectNavbar=function(){return t(this._element).closest(".navbar").length>0},h._getPopperConfig=function(){var t=this,e={};"function"==typeof this._config.offset?e.fn=function(e){return e.offsets=r({},e.offsets,t._config.offset(e.offsets)||{}),e}:e.offset=this._config.offset;return{placement:this._getPlacement(),modifiers:{offset:e,flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}}},l._jQueryInterface=function(e){return this.each(function(){var n=t(this).data(i);if(n||(n=new l(this,"object"==typeof e?e:null),t(this).data(i,n)),"string"==typeof e){if("undefined"==typeof n[e])throw new Error('No method named "'+e+'"');n[e]()}})},l._clearMenus=function(e){if(!e||3!==e.which&&("keyup"!==e.type||9===e.which))for(var n=t.makeArray(t(T)),s=0;s<n.length;s++){var r=l._getParentFromElement(n[s]),o=t(n[s]).data(i),a={relatedTarget:n[s]};if(o){var h=o._menu;if(t(r).hasClass(d)&&!(e&&("click"===e.type&&/input|textarea/i.test(e.target.tagName)||"keyup"===e.type&&9===e.which)&&t.contains(r,e.target))){var c=t.Event(u.HIDE,a);t(r).trigger(c),c.isDefaultPrevented()||("ontouchstart"in document.documentElement&&t("body").children().off("mouseover",null,t.noop),n[s].setAttribute("aria-expanded","false"),t(h).removeClass(d),t(r).removeClass(d).trigger(t.Event(u.HIDDEN,a)))}}}},l._getParentFromElement=function(e){var n,i=o.getSelectorFromElement(e);return i&&(n=t(i)[0]),n||e.parentNode},l._dataApiKeydownHandler=function(e){if((/input|textarea/i.test(e.target.tagName)?!(32===e.which||27!==e.which&&(40!==e.which&&38!==e.which||t(e.target).closest(C).length)):c.test(e.which))&&(e.preventDefault(),e.stopPropagation(),!this.disabled&&!t(this).hasClass(f))){var n=l._getParentFromElement(this),i=t(n).hasClass(d);if((i||27===e.which&&32===e.which)&&(!i||27!==e.which&&32!==e.which)){var s=t(n).find(A).get();if(s.length){var r=s.indexOf(e.target);38===e.which&&r>0&&r--,40===e.which&&r<s.length-1&&r++,r<0&&(r=0),s[r].focus()}}else{if(27===e.which){var o=t(n).find(T)[0];t(o).trigger("focus")}t(this).trigger("click")}}},s(l,null,[{key:"VERSION",get:function(){return"4.0.0-beta.3"}},{key:"Default",get:function(){return k}},{key:"DefaultType",get:function(){return P}}]),l}();return t(document).on(u.KEYDOWN_DATA_API,T,L._dataApiKeydownHandler).on(u.KEYDOWN_DATA_API,C,L._dataApiKeydownHandler).on(u.CLICK_DATA_API+" "+u.KEYUP_DATA_API,L._clearMenus).on(u.CLICK_DATA_API,T,function(e){e.preventDefault(),e.stopPropagation(),L._jQueryInterface.call(t(this),"toggle")}).on(u.CLICK_DATA_API,y,function(t){t.stopPropagation()}),t.fn[e]=L._jQueryInterface,t.fn[e].Constructor=L,t.fn[e].noConflict=function(){return t.fn[e]=h,L._jQueryInterface},L}(e),f=function(t){var e="modal",n="bs.modal",i="."+n,a=t.fn.modal,l={backdrop:!0,keyboard:!0,focus:!0,show:!0},h={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},c={HIDE:"hide"+i,HIDDEN:"hidden"+i,SHOW:"show"+i,SHOWN:"shown"+i,FOCUSIN:"focusin"+i,RESIZE:"resize"+i,CLICK_DISMISS:"click.dismiss"+i,KEYDOWN_DISMISS:"keydown.dismiss"+i,MOUSEUP_DISMISS:"mouseup.dismiss"+i,MOUSEDOWN_DISMISS:"mousedown.dismiss"+i,CLICK_DATA_API:"click"+i+".data-api"},u="modal-scrollbar-measure",f="modal-backdrop",d="modal-open",_="fade",g="show",m={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"},p=function(){function a(e,n){this._config=this._getConfig(n),this._element=e,this._dialog=t(e).find(m.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._originalBodyPadding=0,this._scrollbarWidth=0}var p=a.prototype;return p.toggle=function(t){return this._isShown?this.hide():this.show(t)},p.show=function(e){var n=this;if(!this._isTransitioning&&!this._isShown){o.supportsTransitionEnd()&&t(this._element).hasClass(_)&&(this._isTransitioning=!0);var i=t.Event(c.SHOW,{relatedTarget:e});t(this._element).trigger(i),this._isShown||i.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),t(document.body).addClass(d),this._setEscapeEvent(),this._setResizeEvent(),t(this._element).on(c.CLICK_DISMISS,m.DATA_DISMISS,function(t){return n.hide(t)}),t(this._dialog).on(c.MOUSEDOWN_DISMISS,function(){t(n._element).one(c.MOUSEUP_DISMISS,function(e){t(e.target).is(n._element)&&(n._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return n._showElement(e)}))}},p.hide=function(e){var n=this;if(e&&e.preventDefault(),!this._isTransitioning&&this._isShown){var i=t.Event(c.HIDE);if(t(this._element).trigger(i),this._isShown&&!i.isDefaultPrevented()){this._isShown=!1;var s=o.supportsTransitionEnd()&&t(this._element).hasClass(_);s&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),t(document).off(c.FOCUSIN),t(this._element).removeClass(g),t(this._element).off(c.CLICK_DISMISS),t(this._dialog).off(c.MOUSEDOWN_DISMISS),s?t(this._element).one(o.TRANSITION_END,function(t){return n._hideModal(t)}).emulateTransitionEnd(300):this._hideModal()}}},p.dispose=function(){t.removeData(this._element,n),t(window,document,this._element,this._backdrop).off(i),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},p.handleUpdate=function(){this._adjustDialog()},p._getConfig=function(t){return t=r({},l,t),o.typeCheckConfig(e,t,h),t},p._showElement=function(e){var n=this,i=o.supportsTransitionEnd()&&t(this._element).hasClass(_);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,i&&o.reflow(this._element),t(this._element).addClass(g),this._config.focus&&this._enforceFocus();var s=t.Event(c.SHOWN,{relatedTarget:e}),r=function(){n._config.focus&&n._element.focus(),n._isTransitioning=!1,t(n._element).trigger(s)};i?t(this._dialog).one(o.TRANSITION_END,r).emulateTransitionEnd(300):r()},p._enforceFocus=function(){var e=this;t(document).off(c.FOCUSIN).on(c.FOCUSIN,function(n){document===n.target||e._element===n.target||t(e._element).has(n.target).length||e._element.focus()})},p._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?t(this._element).on(c.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||t(this._element).off(c.KEYDOWN_DISMISS)},p._setResizeEvent=function(){var e=this;this._isShown?t(window).on(c.RESIZE,function(t){return e.handleUpdate(t)}):t(window).off(c.RESIZE)},p._hideModal=function(){var e=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){t(document.body).removeClass(d),e._resetAdjustments(),e._resetScrollbar(),t(e._element).trigger(c.HIDDEN)})},p._removeBackdrop=function(){this._backdrop&&(t(this._backdrop).remove(),this._backdrop=null)},p._showBackdrop=function(e){var n=this,i=t(this._element).hasClass(_)?_:"";if(this._isShown&&this._config.backdrop){var s=o.supportsTransitionEnd()&&i;if(this._backdrop=document.createElement("div"),this._backdrop.className=f,i&&t(this._backdrop).addClass(i),t(this._backdrop).appendTo(document.body),t(this._element).on(c.CLICK_DISMISS,function(t){n._ignoreBackdropClick?n._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===n._config.backdrop?n._element.focus():n.hide())}),s&&o.reflow(this._backdrop),t(this._backdrop).addClass(g),!e)return;if(!s)return void e();t(this._backdrop).one(o.TRANSITION_END,e).emulateTransitionEnd(150)}else if(!this._isShown&&this._backdrop){t(this._backdrop).removeClass(g);var r=function(){n._removeBackdrop(),e&&e()};o.supportsTransitionEnd()&&t(this._element).hasClass(_)?t(this._backdrop).one(o.TRANSITION_END,r).emulateTransitionEnd(150):r()}else e&&e()},p._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},p._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},p._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},p._setScrollbar=function(){var e=this;if(this._isBodyOverflowing){t(m.FIXED_CONTENT).each(function(n,i){var s=t(i)[0].style.paddingRight,r=t(i).css("padding-right");t(i).data("padding-right",s).css("padding-right",parseFloat(r)+e._scrollbarWidth+"px")}),t(m.STICKY_CONTENT).each(function(n,i){var s=t(i)[0].style.marginRight,r=t(i).css("margin-right");t(i).data("margin-right",s).css("margin-right",parseFloat(r)-e._scrollbarWidth+"px")}),t(m.NAVBAR_TOGGLER).each(function(n,i){var s=t(i)[0].style.marginRight,r=t(i).css("margin-right");t(i).data("margin-right",s).css("margin-right",parseFloat(r)+e._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=t("body").css("padding-right");t("body").data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}},p._resetScrollbar=function(){t(m.FIXED_CONTENT).each(function(e,n){var i=t(n).data("padding-right");"undefined"!=typeof i&&t(n).css("padding-right",i).removeData("padding-right")}),t(m.STICKY_CONTENT+", "+m.NAVBAR_TOGGLER).each(function(e,n){var i=t(n).data("margin-right");"undefined"!=typeof i&&t(n).css("margin-right",i).removeData("margin-right")});var e=t("body").data("padding-right");"undefined"!=typeof e&&t("body").css("padding-right",e).removeData("padding-right")},p._getScrollbarWidth=function(){var t=document.createElement("div");t.className=u,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},a._jQueryInterface=function(e,i){return this.each(function(){var s=t(this).data(n),o=r({},a.Default,t(this).data(),"object"==typeof e&&e);if(s||(s=new a(this,o),t(this).data(n,s)),"string"==typeof e){if("undefined"==typeof s[e])throw new Error('No method named "'+e+'"');s[e](i)}else o.show&&s.show(i)})},s(a,null,[{key:"VERSION",get:function(){return"4.0.0-beta.3"}},{key:"Default",get:function(){return l}}]),a}();return t(document).on(c.CLICK_DATA_API,m.DATA_TOGGLE,function(e){var i,s=this,a=o.getSelectorFromElement(this);a&&(i=t(a)[0]);var l=t(i).data(n)?"toggle":r({},t(i).data(),t(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||e.preventDefault();var h=t(i).one(c.SHOW,function(e){e.isDefaultPrevented()||h.one(c.HIDDEN,function(){t(s).is(":visible")&&s.focus()})});p._jQueryInterface.call(t(i),l,this)}),t.fn.modal=p._jQueryInterface,t.fn.modal.Constructor=p,t.fn.modal.noConflict=function(){return t.fn.modal=a,p._jQueryInterface},p}(e),d=function(t){var e="tooltip",i="bs.tooltip",a="."+i,l=t.fn[e],h=new RegExp("(^|\\s)bs-tooltip\\S+","g"),c={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)"},u={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},f={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent"},d="show",_="out",g={HIDE:"hide"+a,HIDDEN:"hidden"+a,SHOW:"show"+a,SHOWN:"shown"+a,INSERTED:"inserted"+a,CLICK:"click"+a,FOCUSIN:"focusin"+a,FOCUSOUT:"focusout"+a,MOUSEENTER:"mouseenter"+a,MOUSELEAVE:"mouseleave"+a},m="fade",p="show",v=".tooltip-inner",E=".arrow",T="hover",y="focus",C="click",I="manual",A=function(){function l(t,e){if("undefined"==typeof n)throw new Error("Bootstrap tooltips require Popper.js (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var A=l.prototype;return A.enable=function(){this._isEnabled=!0},A.disable=function(){this._isEnabled=!1},A.toggleEnabled=function(){this._isEnabled=!this._isEnabled},A.toggle=function(e){if(this._isEnabled)if(e){var n=this.constructor.DATA_KEY,i=t(e.currentTarget).data(n);i||(i=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(n,i)),i._activeTrigger.click=!i._activeTrigger.click,i._isWithActiveTrigger()?i._enter(null,i):i._leave(null,i)}else{if(t(this.getTipElement()).hasClass(p))return void this._leave(null,this);this._enter(null,this)}},A.dispose=function(){clearTimeout(this._timeout),t.removeData(this.element,this.constructor.DATA_KEY),t(this.element).off(this.constructor.EVENT_KEY),t(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&t(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,null!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},A.show=function(){var e=this;if("none"===t(this.element).css("display"))throw new Error("Please use show on visible elements");var i=t.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){t(this.element).trigger(i);var s=t.contains(this.element.ownerDocument.documentElement,this.element);if(i.isDefaultPrevented()||!s)return;var r=this.getTipElement(),a=o.getUID(this.constructor.NAME);r.setAttribute("id",a),this.element.setAttribute("aria-describedby",a),this.setContent(),this.config.animation&&t(r).addClass(m);var h="function"==typeof this.config.placement?this.config.placement.call(this,r,this.element):this.config.placement,c=this._getAttachment(h);this.addAttachmentClass(c);var u=!1===this.config.container?document.body:t(this.config.container);t(r).data(this.constructor.DATA_KEY,this),t.contains(this.element.ownerDocument.documentElement,this.tip)||t(r).appendTo(u),t(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new n(this.element,r,{placement:c,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:E},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){e._handlePopperPlacementChange(t)}}),t(r).addClass(p),"ontouchstart"in document.documentElement&&t("body").children().on("mouseover",null,t.noop);var f=function(){e.config.animation&&e._fixTransition();var n=e._hoverState;e._hoverState=null,t(e.element).trigger(e.constructor.Event.SHOWN),n===_&&e._leave(null,e)};o.supportsTransitionEnd()&&t(this.tip).hasClass(m)?t(this.tip).one(o.TRANSITION_END,f).emulateTransitionEnd(l._TRANSITION_DURATION):f()}},A.hide=function(e){var n=this,i=this.getTipElement(),s=t.Event(this.constructor.Event.HIDE),r=function(){n._hoverState!==d&&i.parentNode&&i.parentNode.removeChild(i),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),t(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),e&&e()};t(this.element).trigger(s),s.isDefaultPrevented()||(t(i).removeClass(p),"ontouchstart"in document.documentElement&&t("body").children().off("mouseover",null,t.noop),this._activeTrigger[C]=!1,this._activeTrigger[y]=!1,this._activeTrigger[T]=!1,o.supportsTransitionEnd()&&t(this.tip).hasClass(m)?t(i).one(o.TRANSITION_END,r).emulateTransitionEnd(150):r(),this._hoverState="")},A.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},A.isWithContent=function(){return Boolean(this.getTitle())},A.addAttachmentClass=function(e){t(this.getTipElement()).addClass("bs-tooltip-"+e)},A.getTipElement=function(){return this.tip=this.tip||t(this.config.template)[0],this.tip},A.setContent=function(){var e=t(this.getTipElement());this.setElementContent(e.find(v),this.getTitle()),e.removeClass(m+" "+p)},A.setElementContent=function(e,n){var i=this.config.html;"object"==typeof n&&(n.nodeType||n.jquery)?i?t(n).parent().is(e)||e.empty().append(n):e.text(t(n).text()):e[i?"html":"text"](n)},A.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},A._getAttachment=function(t){return u[t.toUpperCase()]},A._setListeners=function(){var e=this;this.config.trigger.split(" ").forEach(function(n){if("click"===n)t(e.element).on(e.constructor.Event.CLICK,e.config.selector,function(t){return e.toggle(t)});else if(n!==I){var i=n===T?e.constructor.Event.MOUSEENTER:e.constructor.Event.FOCUSIN,s=n===T?e.constructor.Event.MOUSELEAVE:e.constructor.Event.FOCUSOUT;t(e.element).on(i,e.config.selector,function(t){return e._enter(t)}).on(s,e.config.selector,function(t){return e._leave(t)})}t(e.element).closest(".modal").on("hide.bs.modal",function(){return e.hide()})}),this.config.selector?this.config=r({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},A._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},A._enter=function(e,n){var i=this.constructor.DATA_KEY;(n=n||t(e.currentTarget).data(i))||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(i,n)),e&&(n._activeTrigger["focusin"===e.type?y:T]=!0),t(n.getTipElement()).hasClass(p)||n._hoverState===d?n._hoverState=d:(clearTimeout(n._timeout),n._hoverState=d,n.config.delay&&n.config.delay.show?n._timeout=setTimeout(function(){n._hoverState===d&&n.show()},n.config.delay.show):n.show())},A._leave=function(e,n){var i=this.constructor.DATA_KEY;(n=n||t(e.currentTarget).data(i))||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(i,n)),e&&(n._activeTrigger["focusout"===e.type?y:T]=!1),n._isWithActiveTrigger()||(clearTimeout(n._timeout),n._hoverState=_,n.config.delay&&n.config.delay.hide?n._timeout=setTimeout(function(){n._hoverState===_&&n.hide()},n.config.delay.hide):n.hide())},A._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},A._getConfig=function(n){return"number"==typeof(n=r({},this.constructor.Default,t(this.element).data(),n)).delay&&(n.delay={show:n.delay,hide:n.delay}),"number"==typeof n.title&&(n.title=n.title.toString()),"number"==typeof n.content&&(n.content=n.content.toString()),o.typeCheckConfig(e,n,this.constructor.DefaultType),n},A._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},A._cleanTipClass=function(){var e=t(this.getTipElement()),n=e.attr("class").match(h);null!==n&&n.length>0&&e.removeClass(n.join(""))},A._handlePopperPlacementChange=function(t){this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},A._fixTransition=function(){var e=this.getTipElement(),n=this.config.animation;null===e.getAttribute("x-placement")&&(t(e).removeClass(m),this.config.animation=!1,this.hide(),this.show(),this.config.animation=n)},l._jQueryInterface=function(e){return this.each(function(){var n=t(this).data(i),s="object"==typeof e&&e;if((n||!/dispose|hide/.test(e))&&(n||(n=new l(this,s),t(this).data(i,n)),"string"==typeof e)){if("undefined"==typeof n[e])throw new Error('No method named "'+e+'"');n[e]()}})},s(l,null,[{key:"VERSION",get:function(){return"4.0.0-beta.3"}},{key:"Default",get:function(){return f}},{key:"NAME",get:function(){return e}},{key:"DATA_KEY",get:function(){return i}},{key:"Event",get:function(){return g}},{key:"EVENT_KEY",get:function(){return a}},{key:"DefaultType",get:function(){return c}}]),l}();return t.fn[e]=A._jQueryInterface,t.fn[e].Constructor=A,t.fn[e].noConflict=function(){return t.fn[e]=l,A._jQueryInterface},A}(e),_=function(t){var e="popover",n="bs.popover",i="."+n,o=t.fn[e],a=new RegExp("(^|\\s)bs-popover\\S+","g"),l=r({},d.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),h=r({},d.DefaultType,{content:"(string|element|function)"}),c="fade",u="show",f=".popover-header",_=".popover-body",g={HIDE:"hide"+i,HIDDEN:"hidden"+i,SHOW:"show"+i,SHOWN:"shown"+i,INSERTED:"inserted"+i,CLICK:"click"+i,FOCUSIN:"focusin"+i,FOCUSOUT:"focusout"+i,MOUSEENTER:"mouseenter"+i,MOUSELEAVE:"mouseleave"+i},m=function(r){function o(){return r.apply(this,arguments)||this}!function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}(o,r);var d=o.prototype;return d.isWithContent=function(){return this.getTitle()||this._getContent()},d.addAttachmentClass=function(e){t(this.getTipElement()).addClass("bs-popover-"+e)},d.getTipElement=function(){return this.tip=this.tip||t(this.config.template)[0],this.tip},d.setContent=function(){var e=t(this.getTipElement());this.setElementContent(e.find(f),this.getTitle());var n=this._getContent();"function"==typeof n&&(n=n.call(this.element)),this.setElementContent(e.find(_),n),e.removeClass(c+" "+u)},d._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},d._cleanTipClass=function(){var e=t(this.getTipElement()),n=e.attr("class").match(a);null!==n&&n.length>0&&e.removeClass(n.join(""))},o._jQueryInterface=function(e){return this.each(function(){var i=t(this).data(n),s="object"==typeof e?e:null;if((i||!/destroy|hide/.test(e))&&(i||(i=new o(this,s),t(this).data(n,i)),"string"==typeof e)){if("undefined"==typeof i[e])throw new Error('No method named "'+e+'"');i[e]()}})},s(o,null,[{key:"VERSION",get:function(){return"4.0.0-beta.3"}},{key:"Default",get:function(){return l}},{key:"NAME",get:function(){return e}},{key:"DATA_KEY",get:function(){return n}},{key:"Event",get:function(){return g}},{key:"EVENT_KEY",get:function(){return i}},{key:"DefaultType",get:function(){return h}}]),o}(d);return t.fn[e]=m._jQueryInterface,t.fn[e].Constructor=m,t.fn[e].noConflict=function(){return t.fn[e]=o,m._jQueryInterface},m}(e),g=function(t){var e="scrollspy",n="bs.scrollspy",i="."+n,a=t.fn[e],l={offset:10,method:"auto",target:""},h={offset:"number",method:"string",target:"(string|element)"},c={ACTIVATE:"activate"+i,SCROLL:"scroll"+i,LOAD_DATA_API:"load"+i+".data-api"},u="dropdown-item",f="active",d={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",NAV_LIST_GROUP:".nav, .list-group",NAV_LINKS:".nav-link",NAV_ITEMS:".nav-item",LIST_ITEMS:".list-group-item",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},_="offset",g="position",m=function(){function a(e,n){var i=this;this._element=e,this._scrollElement="BODY"===e.tagName?window:e,this._config=this._getConfig(n),this._selector=this._config.target+" "+d.NAV_LINKS+","+this._config.target+" "+d.LIST_ITEMS+","+this._config.target+" "+d.DROPDOWN_ITEMS,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,t(this._scrollElement).on(c.SCROLL,function(t){return i._process(t)}),this.refresh(),this._process()}var m=a.prototype;return m.refresh=function(){var e=this,n=this._scrollElement!==this._scrollElement.window?g:_,i="auto"===this._config.method?n:this._config.method,s=i===g?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight();t.makeArray(t(this._selector)).map(function(e){var n,r=o.getSelectorFromElement(e);if(r&&(n=t(r)[0]),n){var a=n.getBoundingClientRect();if(a.width||a.height)return[t(n)[i]().top+s,r]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},m.dispose=function(){t.removeData(this._element,n),t(this._scrollElement).off(i),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},m._getConfig=function(n){if("string"!=typeof(n=r({},l,n)).target){var i=t(n.target).attr("id");i||(i=o.getUID(e),t(n.target).attr("id",i)),n.target="#"+i}return o.typeCheckConfig(e,n,h),n},m._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},m._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},m._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},m._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=n){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var s=this._offsets.length;s--;){this._activeTarget!==this._targets[s]&&t>=this._offsets[s]&&("undefined"==typeof this._offsets[s+1]||t<this._offsets[s+1])&&this._activate(this._targets[s])}}},m._activate=function(e){this._activeTarget=e,this._clear();var n=this._selector.split(",");n=n.map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'});var i=t(n.join(","));i.hasClass(u)?(i.closest(d.DROPDOWN).find(d.DROPDOWN_TOGGLE).addClass(f),i.addClass(f)):(i.addClass(f),i.parents(d.NAV_LIST_GROUP).prev(d.NAV_LINKS+", "+d.LIST_ITEMS).addClass(f),i.parents(d.NAV_LIST_GROUP).prev(d.NAV_ITEMS).children(d.NAV_LINKS).addClass(f)),t(this._scrollElement).trigger(c.ACTIVATE,{relatedTarget:e})},m._clear=function(){t(this._selector).filter(d.ACTIVE).removeClass(f)},a._jQueryInterface=function(e){return this.each(function(){var i=t(this).data(n);if(i||(i=new a(this,"object"==typeof e&&e),t(this).data(n,i)),"string"==typeof e){if("undefined"==typeof i[e])throw new Error('No method named "'+e+'"');i[e]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.0.0-beta.3"}},{key:"Default",get:function(){return l}}]),a}();return t(window).on(c.LOAD_DATA_API,function(){for(var e=t.makeArray(t(d.DATA_SPY)),n=e.length;n--;){var i=t(e[n]);m._jQueryInterface.call(i,i.data())}}),t.fn[e]=m._jQueryInterface,t.fn[e].Constructor=m,t.fn[e].noConflict=function(){return t.fn[e]=a,m._jQueryInterface},m}(e),m=function(t){var e="bs.tab",n="."+e,i=t.fn.tab,r={HIDE:"hide"+n,HIDDEN:"hidden"+n,SHOW:"show"+n,SHOWN:"shown"+n,CLICK_DATA_API:"click.bs.tab.data-api"},a="dropdown-menu",l="active",h="disabled",c="fade",u="show",f=".dropdown",d=".nav, .list-group",_=".active",g="> li > .active",m='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',p=".dropdown-toggle",v="> .dropdown-menu .active",E=function(){function n(t){this._element=t}var i=n.prototype;return i.show=function(){var e=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&t(this._element).hasClass(l)||t(this._element).hasClass(h))){var n,i,s=t(this._element).closest(d)[0],a=o.getSelectorFromElement(this._element);if(s){var c="UL"===s.nodeName?g:_;i=(i=t.makeArray(t(s).find(c)))[i.length-1]}var u=t.Event(r.HIDE,{relatedTarget:this._element}),f=t.Event(r.SHOW,{relatedTarget:i});if(i&&t(i).trigger(u),t(this._element).trigger(f),!f.isDefaultPrevented()&&!u.isDefaultPrevented()){a&&(n=t(a)[0]),this._activate(this._element,s);var m=function(){var n=t.Event(r.HIDDEN,{relatedTarget:e._element}),s=t.Event(r.SHOWN,{relatedTarget:i});t(i).trigger(n),t(e._element).trigger(s)};n?this._activate(n,n.parentNode,m):m()}}},i.dispose=function(){t.removeData(this._element,e),this._element=null},i._activate=function(e,n,i){var s=this,r=("UL"===n.nodeName?t(n).find(g):t(n).children(_))[0],a=i&&o.supportsTransitionEnd()&&r&&t(r).hasClass(c),l=function(){return s._transitionComplete(e,r,i)};r&&a?t(r).one(o.TRANSITION_END,l).emulateTransitionEnd(150):l()},i._transitionComplete=function(e,n,i){if(n){t(n).removeClass(u+" "+l);var s=t(n.parentNode).find(v)[0];s&&t(s).removeClass(l),"tab"===n.getAttribute("role")&&n.setAttribute("aria-selected",!1)}if(t(e).addClass(l),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),o.reflow(e),t(e).addClass(u),e.parentNode&&t(e.parentNode).hasClass(a)){var r=t(e).closest(f)[0];r&&t(r).find(p).addClass(l),e.setAttribute("aria-expanded",!0)}i&&i()},n._jQueryInterface=function(i){return this.each(function(){var s=t(this),r=s.data(e);if(r||(r=new n(this),s.data(e,r)),"string"==typeof i){if("undefined"==typeof r[i])throw new Error('No method named "'+i+'"');r[i]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.0.0-beta.3"}}]),n}();return t(document).on(r.CLICK_DATA_API,m,function(e){e.preventDefault(),E._jQueryInterface.call(t(this),"show")}),t.fn.tab=E._jQueryInterface,t.fn.tab.Constructor=E,t.fn.tab.noConflict=function(){return t.fn.tab=i,E._jQueryInterface},E}(e);!function(t){if("undefined"==typeof t)throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1===e[0]&&9===e[1]&&e[2]<1||e[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(e),t.Util=o,t.Alert=a,t.Button=l,t.Carousel=h,t.Collapse=c,t.Dropdown=u,t.Modal=f,t.Popover=_,t.Scrollspy=g,t.Tab=m,t.Tooltip=d,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=bootstrap.min.js.map
;/*! AdminLTE app.js
* ================
* Main JS application file for AdminLTE v2. This file
* should be included in all pages. It controls some layout
* options and implements exclusive AdminLTE plugins.
*
* @Author  Almsaeed Studio
* @Support <https://www.almsaeedstudio.com>
* @Email   <abdullah@almsaeedstudio.com>
* @version 2.4.0
* @repository git://github.com/almasaeed2010/AdminLTE.git
* @license MIT <http://opensource.org/licenses/MIT>
*/
if("undefined"==typeof jQuery)throw new Error("AdminLTE requires jQuery");+function(a){"use strict";function b(b){return this.each(function(){var e=a(this),g=e.data(c);if(!g){var h=a.extend({},d,e.data(),"object"==typeof b&&b);e.data(c,g=new f(e,h))}if("string"==typeof g){if(void 0===g[b])throw new Error("No method named "+b);g[b]()}})}var c="lte.boxrefresh",d={source:"",params:{},trigger:".refresh-btn",content:".box-body",loadInContent:!0,responseType:"",overlayTemplate:'<div class="overlay"><div class="fa fa-refresh fa-spin"></div></div>',onLoadStart:function(){},onLoadDone:function(a){return a}},e={data:'[data-widget="box-refresh"]'},f=function(b,c){if(this.element=b,this.options=c,this.$overlay=a(c.overlay),""===c.source)throw new Error("Source url was not defined. Please specify a url in your BoxRefresh source option.");this._setUpListeners(),this.load()};f.prototype.load=function(){this._addOverlay(),this.options.onLoadStart.call(a(this)),a.get(this.options.source,this.options.params,function(b){this.options.loadInContent&&a(this.options.content).html(b),this.options.onLoadDone.call(a(this),b),this._removeOverlay()}.bind(this),""!==this.options.responseType&&this.options.responseType)},f.prototype._setUpListeners=function(){a(this.element).on("click",e.trigger,function(a){a&&a.preventDefault(),this.load()}.bind(this))},f.prototype._addOverlay=function(){a(this.element).append(this.$overlay)},f.prototype._removeOverlay=function(){a(this.element).remove(this.$overlay)};var g=a.fn.boxRefresh;a.fn.boxRefresh=b,a.fn.boxRefresh.Constructor=f,a.fn.boxRefresh.noConflict=function(){return a.fn.boxRefresh=g,this},a(window).on("load",function(){a(e.data).each(function(){b.call(a(this))})})}(jQuery),function(a){"use strict";function b(b){return this.each(function(){var e=a(this),f=e.data(c);if(!f){var g=a.extend({},d,e.data(),"object"==typeof b&&b);e.data(c,f=new h(e,g))}if("string"==typeof b){if(void 0===f[b])throw new Error("No method named "+b);f[b]()}})}var c="lte.boxwidget",d={animationSpeed:500,collapseTrigger:'[data-widget="collapse"]',removeTrigger:'[data-widget="remove"]',collapseIcon:"fa-minus",expandIcon:"fa-plus",removeIcon:"fa-times"},e={data:".box",collapsed:".collapsed-box",body:".box-body",footer:".box-footer",tools:".box-tools"},f={collapsed:"collapsed-box"},g={collapsed:"collapsed.boxwidget",expanded:"expanded.boxwidget",removed:"removed.boxwidget"},h=function(a,b){this.element=a,this.options=b,this._setUpListeners()};h.prototype.toggle=function(){a(this.element).is(e.collapsed)?this.expand():this.collapse()},h.prototype.expand=function(){var b=a.Event(g.expanded),c=this.options.collapseIcon,d=this.options.expandIcon;a(this.element).removeClass(f.collapsed),a(this.element).find(e.tools).find("."+d).removeClass(d).addClass(c),a(this.element).find(e.body+", "+e.footer).slideDown(this.options.animationSpeed,function(){a(this.element).trigger(b)}.bind(this))},h.prototype.collapse=function(){var b=a.Event(g.collapsed),c=this.options.collapseIcon,d=this.options.expandIcon;a(this.element).find(e.tools).find("."+c).removeClass(c).addClass(d),a(this.element).find(e.body+", "+e.footer).slideUp(this.options.animationSpeed,function(){a(this.element).addClass(f.collapsed),a(this.element).trigger(b)}.bind(this))},h.prototype.remove=function(){var b=a.Event(g.removed);a(this.element).slideUp(this.options.animationSpeed,function(){a(this.element).trigger(b),a(this.element).remove()}.bind(this))},h.prototype._setUpListeners=function(){var b=this;a(this.element).on("click",this.options.collapseTrigger,function(a){a&&a.preventDefault(),b.toggle()}),a(this.element).on("click",this.options.removeTrigger,function(a){a&&a.preventDefault(),b.remove()})};var i=a.fn.boxWidget;a.fn.boxWidget=b,a.fn.boxWidget.Constructor=h,a.fn.boxWidget.noConflict=function(){return a.fn.boxWidget=i,this},a(window).on("load",function(){a(e.data).each(function(){b.call(a(this))})})}(jQuery),function(a){"use strict";function b(b){return this.each(function(){var e=a(this),f=e.data(c);if(!f){var g=a.extend({},d,e.data(),"object"==typeof b&&b);e.data(c,f=new h(e,g))}"string"==typeof b&&f.toggle()})}var c="lte.controlsidebar",d={slide:!0},e={sidebar:".control-sidebar",data:'[data-toggle="control-sidebar"]',open:".control-sidebar-open",bg:".control-sidebar-bg",wrapper:".wrapper",content:".content-wrapper",boxed:".layout-boxed"},f={open:"control-sidebar-open",fixed:"fixed"},g={collapsed:"collapsed.controlsidebar",expanded:"expanded.controlsidebar"},h=function(a,b){this.element=a,this.options=b,this.hasBindedResize=!1,this.init()};h.prototype.init=function(){a(this.element).is(e.data)||a(this).on("click",this.toggle),this.fix(),a(window).resize(function(){this.fix()}.bind(this))},h.prototype.toggle=function(b){b&&b.preventDefault(),this.fix(),a(e.sidebar).is(e.open)||a("body").is(e.open)?this.collapse():this.expand()},h.prototype.expand=function(){this.options.slide?a(e.sidebar).addClass(f.open):a("body").addClass(f.open),a(this.element).trigger(a.Event(g.expanded))},h.prototype.collapse=function(){a("body, "+e.sidebar).removeClass(f.open),a(this.element).trigger(a.Event(g.collapsed))},h.prototype.fix=function(){a("body").is(e.boxed)&&this._fixForBoxed(a(e.bg))},h.prototype._fixForBoxed=function(b){b.css({position:"absolute",height:a(e.wrapper).height()})};var i=a.fn.controlSidebar;a.fn.controlSidebar=b,a.fn.controlSidebar.Constructor=h,a.fn.controlSidebar.noConflict=function(){return a.fn.controlSidebar=i,this},a(document).on("click",e.data,function(c){c&&c.preventDefault(),b.call(a(this),"toggle")})}(jQuery),function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data(c);e||d.data(c,e=new f(d)),"string"==typeof b&&e.toggle(d)})}var c="lte.directchat",d={data:'[data-widget="chat-pane-toggle"]',box:".direct-chat"},e={open:"direct-chat-contacts-open"},f=function(a){this.element=a};f.prototype.toggle=function(a){a.parents(d.box).first().toggleClass(e.open)};var g=a.fn.directChat;a.fn.directChat=b,a.fn.directChat.Constructor=f,a.fn.directChat.noConflict=function(){return a.fn.directChat=g,this},a(document).on("click",d.data,function(c){c&&c.preventDefault(),b.call(a(this),"toggle")})}(jQuery),function(a){"use strict";function b(b){return this.each(function(){var e=a(this),f=e.data(c);if(!f){var h=a.extend({},d,e.data(),"object"==typeof b&&b);e.data(c,f=new g(h))}if("string"==typeof b){if(void 0===f[b])throw new Error("No method named "+b);f[b]()}})}var c="lte.layout",d={slimscroll:!0,resetHeight:!0},e={wrapper:".wrapper",contentWrapper:".content-wrapper",layoutBoxed:".layout-boxed",mainFooter:".main-footer",mainHeader:".main-header",sidebar:".sidebar",controlSidebar:".control-sidebar",fixed:".fixed",sidebarMenu:".sidebar-menu",logo:".main-header .logo"},f={fixed:"fixed",holdTransition:"hold-transition"},g=function(a){this.options=a,this.bindedResize=!1,this.activate()};g.prototype.activate=function(){this.fix(),this.fixSidebar(),a("body").removeClass(f.holdTransition),this.options.resetHeight&&a("body, html, "+e.wrapper).css({height:"auto","min-height":"100%"}),this.bindedResize||(a(window).resize(function(){this.fix(),this.fixSidebar(),a(e.logo+", "+e.sidebar).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){this.fix(),this.fixSidebar()}.bind(this))}.bind(this)),this.bindedResize=!0),a(e.sidebarMenu).on("expanded.tree",function(){this.fix(),this.fixSidebar()}.bind(this)),a(e.sidebarMenu).on("collapsed.tree",function(){this.fix(),this.fixSidebar()}.bind(this))},g.prototype.fix=function(){a(e.layoutBoxed+" > "+e.wrapper).css("overflow","hidden");var b=a(e.mainFooter).outerHeight()||0,c=a(e.mainHeader).outerHeight()+b,d=a(window).height(),g=a(e.sidebar).height()||0;if(a("body").hasClass(f.fixed))a(e.contentWrapper).css("min-height",d-b);else{var h;d>=g?(a(e.contentWrapper).css("min-height",d-c),h=d-c):(a(e.contentWrapper).css("min-height",g),h=g);var i=a(e.controlSidebar);void 0!==i&&i.height()>h&&a(e.contentWrapper).css("min-height",i.height())}},g.prototype.fixSidebar=function(){if(!a("body").hasClass(f.fixed))return void(void 0!==a.fn.slimScroll&&a(e.sidebar).slimScroll({destroy:!0}).height("auto"));this.options.slimscroll&&void 0!==a.fn.slimScroll&&a(e.sidebar).slimScroll({height:a(window).height()-a(e.mainHeader).height()+"px",color:"rgba(0,0,0,0.2)",size:"3px"})};var h=a.fn.layout;a.fn.layout=b,a.fn.layout.Constuctor=g,a.fn.layout.noConflict=function(){return a.fn.layout=h,this},a(window).on("load",function(){b.call(a("body"))})}(jQuery),function(a){"use strict";function b(b){return this.each(function(){var e=a(this),f=e.data(c);if(!f){var g=a.extend({},d,e.data(),"object"==typeof b&&b);e.data(c,f=new h(g))}"toggle"===b&&f.toggle()})}var c="lte.pushmenu",d={collapseScreenSize:767,expandOnHover:!1,expandTransitionDelay:200},e={collapsed:".sidebar-collapse",open:".sidebar-open",mainSidebar:".main-sidebar",contentWrapper:".content-wrapper",searchInput:".sidebar-form .form-control",button:'[data-toggle="push-menu"]',mini:".sidebar-mini",expanded:".sidebar-expanded-on-hover",layoutFixed:".fixed"},f={collapsed:"sidebar-collapse",open:"sidebar-open",mini:"sidebar-mini",expanded:"sidebar-expanded-on-hover",expandFeature:"sidebar-mini-expand-feature",layoutFixed:"fixed"},g={expanded:"expanded.pushMenu",collapsed:"collapsed.pushMenu"},h=function(a){this.options=a,this.init()};h.prototype.init=function(){(this.options.expandOnHover||a("body").is(e.mini+e.layoutFixed))&&(this.expandOnHover(),a("body").addClass(f.expandFeature)),a(e.contentWrapper).click(function(){a(window).width()<=this.options.collapseScreenSize&&a("body").hasClass(f.open)&&this.close()}.bind(this)),a(e.searchInput).click(function(a){a.stopPropagation()})},h.prototype.toggle=function(){var b=a(window).width(),c=!a("body").hasClass(f.collapsed);b<=this.options.collapseScreenSize&&(c=a("body").hasClass(f.open)),c?this.close():this.open()},h.prototype.open=function(){a(window).width()>this.options.collapseScreenSize?a("body").removeClass(f.collapsed).trigger(a.Event(g.expanded)):a("body").addClass(f.open).trigger(a.Event(g.expanded))},h.prototype.close=function(){a(window).width()>this.options.collapseScreenSize?a("body").addClass(f.collapsed).trigger(a.Event(g.collapsed)):a("body").removeClass(f.open+" "+f.collapsed).trigger(a.Event(g.collapsed))},h.prototype.expandOnHover=function(){a(e.mainSidebar).hover(function(){a("body").is(e.mini+e.collapsed)&&a(window).width()>this.options.collapseScreenSize&&this.expand()}.bind(this),function(){a("body").is(e.expanded)&&this.collapse()}.bind(this))},h.prototype.expand=function(){setTimeout(function(){a("body").removeClass(f.collapsed).addClass(f.expanded)},this.options.expandTransitionDelay)},h.prototype.collapse=function(){setTimeout(function(){a("body").removeClass(f.expanded).addClass(f.collapsed)},this.options.expandTransitionDelay)};var i=a.fn.pushMenu;a.fn.pushMenu=b,a.fn.pushMenu.Constructor=h,a.fn.pushMenu.noConflict=function(){return a.fn.pushMenu=i,this},a(document).on("click",e.button,function(c){c.preventDefault(),b.call(a(this),"toggle")}),a(window).on("load",function(){b.call(a(e.button))})}(jQuery),function(a){"use strict";function b(b){return this.each(function(){var e=a(this),f=e.data(c);if(!f){var h=a.extend({},d,e.data(),"object"==typeof b&&b);e.data(c,f=new g(e,h))}if("string"==typeof f){if(void 0===f[b])throw new Error("No method named "+b);f[b]()}})}var c="lte.todolist",d={onCheck:function(a){return a},onUnCheck:function(a){return a}},e={data:'[data-widget="todo-list"]'},f={done:"done"},g=function(a,b){this.element=a,this.options=b,this._setUpListeners()};g.prototype.toggle=function(a){if(a.parents(e.li).first().toggleClass(f.done),!a.prop("checked"))return void this.unCheck(a);this.check(a)},g.prototype.check=function(a){this.options.onCheck.call(a)},g.prototype.unCheck=function(a){this.options.onUnCheck.call(a)},g.prototype._setUpListeners=function(){var b=this;a(this.element).on("change ifChanged","input:checkbox",function(){b.toggle(a(this))})};var h=a.fn.todoList;a.fn.todoList=b,a.fn.todoList.Constructor=g,a.fn.todoList.noConflict=function(){return a.fn.todoList=h,this},a(window).on("load",function(){a(e.data).each(function(){b.call(a(this))})})}(jQuery),function(a){"use strict";function b(b){return this.each(function(){var e=a(this);if(!e.data(c)){var f=a.extend({},d,e.data(),"object"==typeof b&&b);e.data(c,new h(e,f))}})}var c="lte.tree",d={animationSpeed:500,accordion:!0,followLink:!1,trigger:".treeview a"},e={tree:".tree",treeview:".treeview",treeviewMenu:".treeview-menu",open:".menu-open, .active",li:"li",data:'[data-widget="tree"]',active:".active"},f={open:"menu-open",tree:"tree"},g={collapsed:"collapsed.tree",expanded:"expanded.tree"},h=function(b,c){this.element=b,this.options=c,a(this.element).addClass(f.tree),a(e.treeview+e.active,this.element).addClass(f.open),this._setUpListeners()};h.prototype.toggle=function(a,b){var c=a.next(e.treeviewMenu),d=a.parent(),g=d.hasClass(f.open);d.is(e.treeview)&&(this.options.followLink&&"#"!==a.attr("href")||b.preventDefault(),g?this.collapse(c,d):this.expand(c,d))},h.prototype.expand=function(b,c){var d=a.Event(g.expanded);if(this.options.accordion){var h=c.siblings(e.open),i=h.children(e.treeviewMenu);this.collapse(i,h)}c.addClass(f.open),b.slideDown(this.options.animationSpeed,function(){a(this.element).trigger(d)}.bind(this))},h.prototype.collapse=function(b,c){var d=a.Event(g.collapsed);b.find(e.open).removeClass(f.open),c.removeClass(f.open),b.slideUp(this.options.animationSpeed,function(){b.find(e.open+" > "+e.treeview).slideUp(),a(this.element).trigger(d)}.bind(this))},h.prototype._setUpListeners=function(){var b=this;a(this.element).on("click",this.options.trigger,function(c){b.toggle(a(this),c)})};var i=a.fn.tree;a.fn.tree=b,a.fn.tree.Constructor=h,a.fn.tree.noConflict=function(){return a.fn.tree=i,this},a(window).on("load",function(){a(e.data).each(function(){b.call(a(this))})})}(jQuery);
;
//# sourceMappingURL=scripts.bundle.js.map