(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{360:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),r=i(t(2)),a=t(362);i(t(359));function i(e){return e&&e.__esModule?e:{default:e}}var l=t(365)(),s=function(e){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.standalone=function(){return r.default.createElement("div",{className:"w-100 mw7 center f6 fr-l sans-serif gray lh-copy br bl bb bt b--moon-gray bg-light-gray pa3",dangerouslySetInnerHTML:{__html:t.caption}})},t.banner=function(){return r.default.createElement("div",{className:"w-40-l w-100 fr-l pl3-l pr0-l"},r.default.createElement("div",{className:"w-90-l w-100 mw7 center f7 fr-l sans-serif gray lh-copy pa3 ba b--moon-gray bg-light-gray mb3",dangerouslySetInnerHTML:{__html:t.caption}}))},t.inline=function(){return r.default.createElement("div",{className:"f6 tc sans-serif lh-copy",dangerouslySetInnerHTML:{__html:t.caption}})},t.rightCaption=function(){return r.default.createElement("div",{className:"w-40-l w-100"},r.default.createElement("div",{className:"w-90 pl4-l f7 fr-l center sans-serif gray lh-copy mw5 mw9-l",dangerouslySetInnerHTML:{__html:t.caption}}))},t.rightColumnUnder=function(){return r.default.createElement("div",{className:"center pl2 pr2 w-100 mw5 mw9-l"},r.default.createElement("div",{className:"f7 sans-serif lh-copy gray w-100",dangerouslySetInnerHTML:{__html:t.caption}}))},t.entry=function(){return t.props.captionRight?t.rightCaption():t.props.inline?t.inline():t.props.rightColumn?t.rightColumnUnder():t.banner()},t.caption=l.renderInline(t.props.text),t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,r.default.Component),o(n,[{key:"render",value:function(){var e=this;return r.default.createElement(a.AtlasContext.Consumer,null,function(n){return"entry"==n?e.entry():e.standalone()})}}]),n}();n.default=s},362:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.AtlasContext=void 0;var o=function(e){return e&&e.__esModule?e:{default:e}}(t(2));n.AtlasContext=o.default.createContext("standalone")},405:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),r=m(['\n  font-family: -apple-system, BlinkMacSystemFont, "avenir next", avenir, "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial, sans-serif;\n  background-color: rgba(250, 250, 250, 0.75);\n  margin: 0 0rem;\n\n  // canvas {\n    // outline: 1px solid #cccccc;\n  // }\n'],['\n  font-family: -apple-system, BlinkMacSystemFont, "avenir next", avenir, "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial, sans-serif;\n  background-color: rgba(250, 250, 250, 0.75);\n  margin: 0 0rem;\n\n  // canvas {\n    // outline: 1px solid #cccccc;\n  // }\n']),a=m(["\n  max-width: 1200px;\n  width: 100%;\n  margin: 0px auto;\n  position: relative;\n"],["\n  max-width: 1200px;\n  width: 100%;\n  margin: 0px auto;\n  position: relative;\n"]),i=m(["\n  max-width: 1200px;\n  width: 100%;\n  margin: 0px auto;\n  position: relative;\n  border-top: 2px solid #ffffff;\n  top: -4px;\n"],["\n  max-width: 1200px;\n  width: 100%;\n  margin: 0px auto;\n  position: relative;\n  border-top: 2px solid #ffffff;\n  top: -4px;\n"]),l=m(["\n  color: #eaeaea;\n  font-size: 2vw;\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-right: -50%;\n  transform: translate(-50%, -50%);\n  transition: opacity 1s;\n  pointer-events: none;\n"],["\n  color: #eaeaea;\n  font-size: 2vw;\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-right: -50%;\n  transform: translate(-50%, -50%);\n  transition: opacity 1s;\n  pointer-events: none;\n"]),s=m(["\n  width: 100%;\n  opacity: 0;\n  transition: opacity 1s;\n  position: absolute;\n  pointer-events: none;\n"],["\n  width: 100%;\n  opacity: 0;\n  transition: opacity 1s;\n  position: absolute;\n  pointer-events: none;\n"]),c=v(t(2)),u=v(t(359)),f=v(t(502)),p=t(501),d=v(t(360));function v(e){return e&&e.__esModule?e:{default:e}}function m(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var y=u.default.div(r),h=u.default.div(a),w=u.default.div(i),g=u.default.div(l),b=u.default.img(s),_=function(e){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.caption="When you click or tap to create a wave, it travels outward from a central point. When two waves overlap, they interfere and yield brighter or darker spots than any single wave.",t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,c.default.Component),o(n,[{key:"componentDidMount",value:function(){(0,p.init)()}},{key:"componentWillUnmount",value:function(){(0,p.unmount)()}},{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){return c.default.createElement(y,null,c.default.createElement(h,{id:"WavesCrossSectioncontainer"},c.default.createElement(b,{src:f.default,id:"overlay"}),c.default.createElement(g,{id:"message"},"Tap to make ripples!")),c.default.createElement(w,{id:"cross-section"}),c.default.createElement(d.default,{text:this.caption}))}}]),n}();n.default=_},501:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.unmount=n.init=void 0;var o,r,a,i,l,s,c,u,f,p=function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n}(t(500));var d=[],v=0,m=300,y=null,h=["uniform float amplitude;","varying vec2 vUv;","uniform int activeWaves;","uniform vec4 waves [ 16 ];","attribute float displacement;","varying float distance;","varying vec3 vNormal;","void main() {","vUv = uv;","vNormal = normal;","distance = displacement * 0.5 + 0.5;","for (int i=0; i < 16; i++) {","float vx = pow((waves[i][0]-position[0]), 2.0);","float vy = pow((waves[i][1]-position[1]), 2.0);","float hyp = sqrt(vx + vy);","float amp = waves[i][3] * 0.5;","float edge = 300.0 - waves[i][2];","float width = 64.0;","if ((hyp < edge) && ((edge - hyp) < width)) {","float disp = (1.0 - (edge - hyp)/width) * amp * sin(hyp - edge);","distance = distance + disp;","}","else { distance = distance + 0.0; }","}","vec3 newPosition = position + amplitude * normal * vec3( 1.0 );","gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );","}"].join("\n"),w=["varying vec3 vNormal;","varying float distance;","varying vec2 vUv;","uniform vec3 color;","void main() {","gl_FragColor = vec4(vec3(color) + vec3(distance * 0.5, distance * 0.25, distance), distance * 0.5 + 0.25);","}"].join("\n"),g=["uniform sampler2D bufferTexture;","varying vec2 vUv;","uniform vec2 size;","void main() {","float lineWidth = 3.0;","float position_x = gl_FragCoord.x / size[0];","vec2 position = vec2(position_x, 0.5);","vec4 color = texture2D(bufferTexture, position);","float color_value = color.w * size[1];","float min = color_value + 0.25;","float max = color_value + 0.75 + lineWidth;","if(gl_FragCoord.y > min && gl_FragCoord.y < max) {","gl_FragColor = vec4(1.0,1.0,1.0,1.0); // white","}","else{","gl_FragColor = vec4(0.07, 0.51, 0.85, 1.0); // blue","}","}"].join("\n");function b(e){d[e-2]=0,d[e-1]=0,d[e+1]=0,v-=1}function _(){a.render(u,r,f),a.render(o,r),i.render(u,r,f),i.render(c,r),function(){for(var e=0;e<v;e+=1){var n=4*e+2;0!=d[n]?d[n]-=.4:b(n)}}(),y=requestAnimationFrame(_)}function x(){return $("#WavesCrossSectioncontainer").outerWidth()}function C(){return x()/3+x()/8+$("canvas ").top+5}function M(){r.updateProjectionMatrix(),s.material.uniforms.size.value=new p.Vector2(x(),x()/8),a.setSize(x(),x()/3),i.setSize(x(),x()/8),document.body.style.height=C()}n.init=function(){var e=x(),n=e/3,t=e/8;d=new Float32Array(64),v=0,(a=new p.WebGLRenderer({antialias:!0})).setSize(e,n),$("#WavesCrossSectioncontainer").append(a.domElement),(i=new p.WebGLRenderer({antialias:!0})).setSize(e,t),$("#cross-section").append(i.domElement),(o=new p.Scene).background=new p.Color(888006),c=new p.Scene,u=new p.Scene,(r=new p.OrthographicCamera(e/-2,e/2,e/6,e/-6,-1e4,1e4)).zoom=e/m,r.updateProjectionMatrix();var y={minFilter:p.LinearFilter,stencilBuffer:!1,depthBuffer:!1};f=new p.WebGLRenderTarget(e,n,y);var b=p.UniformsUtils.merge([{activeWaves:{type:"i",value:1}},{waves:{type:"fv",value:d}},{color:{value:new p.Color(44284)}}]),C=new p.ShaderMaterial({uniforms:b,vertexShader:h,fragmentShader:w});C.transparent=!0;var j=new p.PlaneBufferGeometry(m,m/3,m,m/3),O=new p.Mesh(j,C);u.add(O);var S=new p.MeshPhongMaterial({map:f}),E=new p.PlaneGeometry(m,m/3,4),P=new p.Mesh(E,S);o.add(P);var k={bufferTexture:{type:"t",value:f},size:{type:"v2",value:new p.Vector2(x(),x()/8)}};l=new p.ShaderMaterial({uniforms:k,vertexShader:h,fragmentShader:g}),s=new p.Mesh(E,l),c.add(s);var W=new p.AmbientLight(4629721,2);o.add(W);var z=new p.DirectionalLight(16777215,5);o.add(z),$(window).on("resize",M),$(a.domElement).click(function(e){var n=$(this).offset().left+$(this).width()/2,t=$(this).offset().top+$(this).height()/2;!function(e,n){$("#message").css("opacity","0.0"),$("#overlay").css("opacity","1.0");var t=$("#WavesCrossSectioncontainer").outerWidth()/m;!function(e){d.set(e,v%16*4),v+=1}([e/t,-n/t,m,1])}(e.pageX-n,e.pageY-t)}),_()},n.unmount=function(){cancelAnimationFrame(y),a.dispose(),i.dispose()}},502:function(e,n,t){e.exports=t.p+"f86ef32e19545e2e248ec2552cb7363a.svg"}}]);