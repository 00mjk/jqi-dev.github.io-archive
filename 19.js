(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{379:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=l(n(2)),o=n(388),a=l(n(387)),c=l(n(580));function l(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,o=Array(i),a=0;a<i;a++)o[a]=arguments[a];return n=r=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),r.pause=function(){r.tl.paused(!r.tl.paused())},u(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),r(t,[{key:"componentDidMount",value:function(){this.tl=new o.TimelineMax({repeat:-1}),this.tl.to("."+c.default.testSquare,2,{scale:2})}},{key:"render",value:function(){return i.default.createElement(a.default,null,i.default.createElement("div",{className:c.default.SimpleGSAP},i.default.createElement("div",{className:c.default.testSquare,style:this.props.style}),i.default.createElement("button",{className:c.default.pause,onClick:this.pause},"Pause")))}}]),t}();t.default=p},383:function(e,t,n){(t=e.exports=n(361)(!1)).push([e.i,".🛫🤵🏻🇰🇼🔭client-components-Graphic-Graphic-module__Graphic--Ftx69 {\n  margin: 0 auto;\n  text-align: center; }\n\n.👨🏿‍⚖️💽🙎🏾‍♂️🕵🏻client-components-Graphic-Graphic-module__GraphicCell--Bqwb2 {\n  margin: 1rem;\n  padding: 5px; }\n\n.👨🏿‍⚖️💽🙎🏾‍♂️🕵🏻client-components-Graphic-Graphic-module__GraphicCell--Bqwb2 img, p {\n  width: 100%; }\n",""]),t.locals={Graphic:"🛫🤵🏻🇰🇼🔭client-components-Graphic-Graphic-module__Graphic--Ftx69",GraphicCell:"👨🏿‍⚖️💽🙎🏾‍♂️🕵🏻client-components-Graphic-Graphic-module__GraphicCell--Bqwb2"}},384:function(e,t,n){var r=n(383);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(362)(r,i);r.locals&&(e.exports=r.locals)},385:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=a(n(2)),o=a(n(384));function a(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),r(t,[{key:"render",value:function(){return i.default.createElement("div",{className:o.default.Graphic},i.default.createElement("div",{className:o.default.GraphicCell},this.props.children))}}]),t}();t.default=c},387:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=c(n(2)),o=c(n(385)),a=c(n(399));function c(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),r(t,[{key:"render",value:function(){return i.default.createElement(o.default,null,i.default.createElement("div",{className:a.default.InteractiveGraphic},i.default.createElement("h3",null,"I'm interactive!"),this.props.children))}}]),t}();t.default=l},398:function(e,t,n){(t=e.exports=n(361)(!1)).push([e.i,".🕉🤦‍♀️🤽🏿👩🏽‍🔬client-components-InteractiveGraphic-InteractiveGraphic-module__InteractiveGraphic--1mHd1 {\n  max-width: 100%; }\n",""]),t.locals={InteractiveGraphic:"🕉🤦‍♀️🤽🏿👩🏽‍🔬client-components-InteractiveGraphic-InteractiveGraphic-module__InteractiveGraphic--1mHd1"}},399:function(e,t,n){var r=n(398);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(362)(r,i);r.locals&&(e.exports=r.locals)},579:function(e,t,n){(t=e.exports=n(361)(!1)).push([e.i,".🚔🏌🏾‍♀️🏑🅿client-graphics-InteractiveGraphics-SimpleGSAP-SimpleGSAP__SimpleGSAP--1plaS .👋🇦🇫🤵🙄client-graphics-InteractiveGraphics-SimpleGSAP-SimpleGSAP__testSquare--1Vz1Z {\n  background-color: blue;\n  width: 50px;\n  height: 50px;\n  margin: 40px auto; }\n\n.🚔🏌🏾‍♀️🏑🅿client-graphics-InteractiveGraphics-SimpleGSAP-SimpleGSAP__SimpleGSAP--1plaS .🎅🏾🇹🇼🚵🏼🏄client-graphics-InteractiveGraphics-SimpleGSAP-SimpleGSAP__pause--2bm1F {\n  display: block;\n  margin: 0 auto;\n  background-color: #eaeaea; }\n",""]),t.locals={SimpleGSAP:"🚔🏌🏾‍♀️🏑🅿client-graphics-InteractiveGraphics-SimpleGSAP-SimpleGSAP__SimpleGSAP--1plaS",testSquare:"👋🇦🇫🤵🙄client-graphics-InteractiveGraphics-SimpleGSAP-SimpleGSAP__testSquare--1Vz1Z",pause:"🎅🏾🇹🇼🚵🏼🏄client-graphics-InteractiveGraphics-SimpleGSAP-SimpleGSAP__pause--2bm1F"}},580:function(e,t,n){var r=n(579);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(362)(r,i);r.locals&&(e.exports=r.locals)}}]);