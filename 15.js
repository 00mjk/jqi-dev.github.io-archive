(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{358:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=function(t){return t&&t.__esModule?t:{default:t}}(n(2)),a=n(362);var i=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,o.default.Component),r(e,[{key:"render",value:function(){var t=this;return o.default.createElement(a.AtlasContext.Consumer,null,function(e){return"entry"==e?o.default.createElement("div",{className:"w-40-l w-100 fr-l pl3-l pr0-l"},o.default.createElement("div",{className:"w-90-l w-100 mw7 center f7 fr-l sans-serif gray lh-copy pa3 ba b--moon-gray bg-light-gray mb3"},t.props.text)):o.default.createElement("div",{className:"w-100 mw7 center f6 fr-l sans-serif gray lh-copy br bl bb bt b--moon-gray bg-light-gray pa3"},t.props.text)})}}]),e}();e.default=i},359:function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(r),a=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(a).concat([o]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},360:function(t,e,n){var r={},o=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),a=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),i=null,s=0,l=[],c=n(368);function u(t,e){for(var n=0;n<t.length;n++){var o=t[n],a=r[o.id];if(a){a.refs++;for(var i=0;i<a.parts.length;i++)a.parts[i](o.parts[i]);for(;i<o.parts.length;i++)a.parts.push(v(o.parts[i],e))}else{var s=[];for(i=0;i<o.parts.length;i++)s.push(v(o.parts[i],e));r[o.id]={id:o.id,refs:1,parts:s}}}}function f(t,e){for(var n=[],r={},o=0;o<t.length;o++){var a=t[o],i=e.base?a[0]+e.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(s):n.push(r[i]={id:i,parts:[s]})}return n}function p(t,e){var n=a(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),l.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=a(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,o)}}function d(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=l.indexOf(t);e>=0&&l.splice(e,1)}function h(t){var e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),m(e,t.attrs),p(t,e),e}function m(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function v(t,e){var n,r,o,a;if(e.transform&&t.css){if(!(a=e.transform(t.css)))return function(){};t.css=a}if(e.singleton){var l=s++;n=i||(i=h(e)),r=y.bind(null,n,l,!1),o=y.bind(null,n,l,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",m(e,t.attrs),p(t,e),e}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,a=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||a)&&(r=c(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(i),s&&URL.revokeObjectURL(s)}.bind(null,n,e),o=function(){d(n),n.href&&URL.revokeObjectURL(n.href)}):(n=h(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){d(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=f(t,e);return u(n,e),function(t){for(var o=[],a=0;a<n.length;a++){var i=n[a];(s=r[i.id]).refs--,o.push(s)}t&&u(f(t,e),e);for(a=0;a<o.length;a++){var s;if(0===(s=o[a]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete r[s.id]}}}};var b=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function y(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=b(e,o);else{var a=document.createTextNode(o),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(a,i[e]):t.appendChild(a)}}},362:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.AtlasContext=void 0;var r=function(t){return t&&t.__esModule?t:{default:t}}(n(2));e.AtlasContext=r.default.createContext("standalone")},368:function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,a=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?t:(o=0===a.indexOf("//")?a:0===a.indexOf("/")?n+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},378:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=s(n(2)),a=s(n(502)),i=(n(362),s(n(358)));function s(t){return t&&t.__esModule?t:{default:t}}var l=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.initialColors=function(t){for(var e=[],n=0;n<t;n++){var r=64+Math.floor(192*Math.random()),o=64+Math.floor(192*Math.random()),a=64+Math.floor(192*Math.random());e.push("rgb("+r+","+o+","+a+")")}return e},n.fillRow=function(t,e,r,o,a,i,s,l,c,u,f,p,d,h){for(var m,v,b,y=0,g=.5;y<e-1;)m=r+y*o,Math.random()<g?((b=Math.random()<a)&&-1!=i[y]||!b&&1==i[y]?(n.drawCrossing(m,t,s[y],s[y+1],!0,c,o,f,u,p,d,h),i[y]=1,i[y+1]=0):(n.drawCrossing(m,t,s[y],s[y+1],!1,c,o,f,u,p,d,h),i[y]=-1,i[y+1]=0),v=s[y],s[y]=s[y+1],s[y+1]=v,y+=2):(n.drawString(m,t,s[y],c,u,f),y+=1);y==e-1&&n.drawString(r+y*o,t,s[y],c,u,f),g=l},n.drawString=function(t,e,n,r,o,a){r.strokeStyle=n,r.lineWidth=o,r.lineCap="butt",r.beginPath(),r.moveTo(t,e),r.lineTo(t,e+a),r.stroke()},n.drawCrossing=function(t,e,n,r,o,a,i,s,l,c,u,f){function p(){a.strokeStyle=n,a.lineWidth=l,a.beginPath(),a.moveTo(t+i,e),a.bezierCurveTo(t+i,e+s*c,t,e+s*(1-c),t,e+s),a.stroke()}function d(){a.strokeStyle=r,a.lineWidth=l,a.beginPath(),a.moveTo(t,e),a.bezierCurveTo(t,e+s*c,t+i,e+s*(1-c),t+i,e+s),a.stroke()}a.lineCap="butt",o?(p(),a.strokeStyle=f,a.lineWidth=l+2*u,a.beginPath(),a.moveTo(t,e),a.bezierCurveTo(t,e+s*c,t+i,e+s*(1-c),t+i,e+s),a.stroke(),d()):(d(),a.strokeStyle=f,a.lineWidth=l+2*u,a.beginPath(),a.moveTo(t+i,e),a.bezierCurveTo(t+i,e+s*c,t,e+s*(1-c),t,e+s),a.stroke(),p())},n.motion=!0,n.oldtimer=null,n.caption="Entanglement twists together two or more quantum particles, replacing their individual identities with an entwined whole.",n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,o.default.Component),r(e,[{key:"componentDidMount",value:function(){var t=this.refs.canvas,e=t.getContext("2d"),n=t.width,r=t.height,o=33,a=20,i=5,s="#000000",l=1+Math.floor((n-i)/a),c=(n-(l-1)*a)/2,u=.67,f=.5,p=2.5,d=42*Math.PI/180,h=1-a/o*Math.tan(d),m=this.initialColors(l);e.fillStyle=s,e.fillRect(0,0,n,r);for(var v=[],b=0;b<l-1;b++)v.push(0);for(var y=Math.floor(r/o);--y>-1;)this.fillRow(y*o,l,c,a,f,v,m,u,e,i,o,h,p,s);this.timer=setInterval(function(){e.drawImage(t,0,0,n,r-o,0,o,n,r-o),e.fillStyle=s,e.fillRect(0,0,n,o),g(0,l,c,a,f,v,m,u,e,i,o,h,p,s)},500);var g=this.fillRow}},{key:"render",value:function(){return o.default.createElement("div",{className:"entanglement-banner"},o.default.createElement("div",{className:"mt0 tc"},o.default.createElement("div",{className:"relative w-100-l mt0-l"},o.default.createElement("div",{className:"w-100 tc",name:"canvas_container"},o.default.createElement("div",{className:"bn b--moon-gray center relative tc"},o.default.createElement("canvas",{height:"400",width:"800",name:"canvas",ref:"canvas",className:"w-100 "+a.default.EntanglementKnots}))))),o.default.createElement(i.default,{text:this.caption}))}}]),e}();e.default=l},501:function(t,e,n){(e=t.exports=n(359)(!1)).push([t.i,".🇾🇪💊🤦🏻👩🏾‍🌾client-graphics-AnimatedGraphics-EntanglementKnots-EntanglementKnots__EntanglementKnots--2g3i5 {\n  stroke-dasharray: 1000;\n  stroke-dashoffset: 1000;\n  animation: 🤜🏾🤛🏿👱🏿🤦🏾‍♂️client-graphics-AnimatedGraphics-EntanglementKnots-EntanglementKnots__dash--3BGRC 5s linear forwards; }\n\n@keyframes 🤜🏾🤛🏿👱🏿🤦🏾‍♂️client-graphics-AnimatedGraphics-EntanglementKnots-EntanglementKnots__dash--3BGRC {\n  to {\n    stroke-dashoffset: 0; } }\n",""]),e.locals={EntanglementKnots:"🇾🇪💊🤦🏻👩🏾‍🌾client-graphics-AnimatedGraphics-EntanglementKnots-EntanglementKnots__EntanglementKnots--2g3i5",dash:"🤜🏾🤛🏿👱🏿🤦🏾‍♂️client-graphics-AnimatedGraphics-EntanglementKnots-EntanglementKnots__dash--3BGRC"}},502:function(t,e,n){var r=n(501);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(360)(r,o);r.locals&&(t.exports=r.locals)}}]);