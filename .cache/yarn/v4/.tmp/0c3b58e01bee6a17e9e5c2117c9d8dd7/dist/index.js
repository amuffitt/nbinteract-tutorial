define(["@jupyter-widgets/base"],(function(t){return function(t){var e={};function i(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="https://unpkg.com/jupyter-matplotlib@0.7.2/dist/",i(i.s=8)}([function(t){t.exports=JSON.parse('{"name":"jupyter-matplotlib","version":"0.7.2","description":"Matplotlib Jupyter Interactive Widget","author":"Matplotlib Development team","license":"BSD-3-Clause","main":"src/index.js","repository":{"type":"git","url":"https://github.com/matplotlib/jupyter-matplotlib.git"},"scripts":{"build":"webpack","clean":"rimraf dist/","postinstall":"npm run build","prepack":"npm run postinstall","test":"echo \\"Error: no test specified\\" && exit 1","watch":"webpack --watch"},"jupyterlab":{"extension":"src/lab_extension"},"devDependencies":{"css-loader":"^3.4.2","fs-extra":"^4.0.2","json-loader":"^0.5.4","rimraf":"^2.6.1","style-loader":"^0.23.1","webpack":"^4.41.6","webpack-cli":"^3.3.11"},"dependencies":{"@jupyter-widgets/base":"^2 || ^3"}}')},function(e,i){e.exports=t},function(t,e,i){"use strict";function s(t,e){var i=e.getBoundingClientRect();return{x:t.clientX-i.left,y:t.clientY-i.top}}function n(t){return Object.keys(t).reduce((function(e,i){return"object"!=typeof t[i]&&(e[i]=t[i]),e}),{})}i.r(e),i.d(e,"get_mouse_position",(function(){return s})),i.d(e,"get_simple_keys",(function(){return n}))},function(t,e,i){var s=i(4);"string"==typeof s&&(s=[[t.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};i(6)(s,n);s.locals&&(t.exports=s.locals)},function(t,e,i){(e=i(5)(!1)).push([t.i,".jupyter-matplotlib {\n  width: auto;\n  height: auto;\n  flex: 1 1 auto;\n}\n\n/* Toolbar */\n\n.jupyter-matplotlib-toolbar {\n  overflow: visible;\n}\n\n.jupyter-matplotlib-button {\n  width: calc(var(--jp-widgets-inline-width-tiny) / 2 - 2px);\n  overflow: hidden;\n  padding: 0;\n}\n\n/* Figure */\n\n.jupyter-matplotlib-figure {\n  width: auto;\n  height: auto;\n  overflow: hidden;\n}\n\n.jupyter-matplotlib-canvas-container {\n  overflow: auto;\n}\n\n.jupyter-matplotlib-canvas-div {\n  margin: 2px;\n  flex: 1 1 auto;\n}\n\n.jupyter-matplotlib-canvas-div:focus {\n  outline: 1px solid var(--jp-widgets-input-focus-border-color);\n}\n",""]),t.exports=e},function(t,e,i){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i=function(t,e){var i=t[1]||"",s=t[3];if(!s)return i;if(e&&"function"==typeof btoa){var n=(r=s,a=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(l," */")),o=s.sources.map((function(t){return"/*# sourceURL=".concat(s.sourceRoot||"").concat(t," */")}));return[i].concat(o).concat([n]).join("\n")}var r,a,l;return[i].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(i,"}"):i})).join("")},e.i=function(t,i,s){"string"==typeof t&&(t=[[null,t,""]]);var n={};if(s)for(var o=0;o<this.length;o++){var r=this[o][0];null!=r&&(n[r]=!0)}for(var a=0;a<t.length;a++){var l=[].concat(t[a]);s&&n[l[0]]||(i&&(l[2]?l[2]="".concat(i," and ").concat(l[2]):l[2]=i),e.push(l))}},e}},function(t,e,i){var s,n,o={},r=(s=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===n&&(n=s.apply(this,arguments)),n}),a=function(t,e){return e?e.querySelector(t):document.querySelector(t)},l=function(t){var e={};return function(t,i){if("function"==typeof t)return t();if(void 0===e[t]){var s=a.call(this,t,i);if(window.HTMLIFrameElement&&s instanceof window.HTMLIFrameElement)try{s=s.contentDocument.head}catch(t){s=null}e[t]=s}return e[t]}}(),h=null,d=0,c=[],u=i(7);function _(t,e){for(var i=0;i<t.length;i++){var s=t[i],n=o[s.id];if(n){n.refs++;for(var r=0;r<n.parts.length;r++)n.parts[r](s.parts[r]);for(;r<s.parts.length;r++)n.parts.push(g(s.parts[r],e))}else{var a=[];for(r=0;r<s.parts.length;r++)a.push(g(s.parts[r],e));o[s.id]={id:s.id,refs:1,parts:a}}}}function p(t,e){for(var i=[],s={},n=0;n<t.length;n++){var o=t[n],r=e.base?o[0]+e.base:o[0],a={css:o[1],media:o[2],sourceMap:o[3]};s[r]?s[r].parts.push(a):i.push(s[r]={id:r,parts:[a]})}return i}function f(t,e){var i=l(t.insertInto);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var s=c[c.length-1];if("top"===t.insertAt)s?s.nextSibling?i.insertBefore(e,s.nextSibling):i.appendChild(e):i.insertBefore(e,i.firstChild),c.push(e);else if("bottom"===t.insertAt)i.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var n=l(t.insertAt.before,i);i.insertBefore(e,n)}}function b(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=c.indexOf(t);e>=0&&c.splice(e,1)}function v(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var s=function(){0;return i.nc}();s&&(t.attrs.nonce=s)}return m(e,t.attrs),f(t,e),e}function m(t,e){Object.keys(e).forEach((function(i){t.setAttribute(i,e[i])}))}function g(t,e){var i,s,n,o;if(e.transform&&t.css){if(!(o="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=o}if(e.singleton){var r=d++;i=h||(h=v(e)),s=x.bind(null,i,r,!1),n=x.bind(null,i,r,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(i=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",m(e,t.attrs),f(t,e),e}(e),s=j.bind(null,i,e),n=function(){b(i),i.href&&URL.revokeObjectURL(i.href)}):(i=v(e),s=z.bind(null,i),n=function(){b(i)});return s(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;s(t=e)}else n()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=r()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var i=p(t,e);return _(i,e),function(t){for(var s=[],n=0;n<i.length;n++){var r=i[n];(a=o[r.id]).refs--,s.push(a)}t&&_(p(t,e),e);for(n=0;n<s.length;n++){var a;if(0===(a=s[n]).refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete o[a.id]}}}};var y,w=(y=[],function(t,e){return y[t]=e,y.filter(Boolean).join("\n")});function x(t,e,i,s){var n=i?"":s.css;if(t.styleSheet)t.styleSheet.cssText=w(e,n);else{var o=document.createTextNode(n),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(o,r[e]):t.appendChild(o)}}function z(t,e){var i=e.css,s=e.media;if(s&&t.setAttribute("media",s),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}function j(t,e,i){var s=i.css,n=i.sourceMap,o=void 0===e.convertToAbsoluteUrls&&n;(e.convertToAbsoluteUrls||o)&&(s=u(s)),n&&(s+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var r=new Blob([s],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(r),a&&URL.revokeObjectURL(a)}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var i=e.protocol+"//"+e.host,s=i+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,e){var n,o=e.trim().replace(/^"(.*)"$/,(function(t,e){return e})).replace(/^'(.*)'$/,(function(t,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?t:(n=0===o.indexOf("//")?o:0===o.indexOf("/")?i+o:s+o.replace(/^\.\//,""),"url("+JSON.stringify(n)+")")}))}},function(t,e,i){"use strict";i.r(e);const s=i(1),n=i(0).version;class o extends s.DOMWidgetModel{defaults(){return{...super.defaults(),_model_name:"ToolbarModel",_view_name:"ToolbarView",_model_module:"jupyter-matplotlib",_view_module:"jupyter-matplotlib",_model_module_version:"^"+n,_view_module_version:"^"+n,toolitems:[],orientation:"vertical",button_style:"",collapsed:!0,_current_action:""}}}class r extends s.DOMWidgetView{render(){this.el.classList="jupyter-widgets jupyter-matplotlib-toolbar",this.el.classList.add("widget-container","widget-box"),this.create_toolbar(),this.model_events()}create_toolbar(){const t=this.model.get("toolitems");this.toggle_button=document.createElement("button"),this.toggle_button.classList="jupyter-matplotlib-button jupyter-widgets jupyter-button",this.toggle_button.setAttribute("href","#"),this.toggle_button.setAttribute("title","Toggle Interaction"),this.toggle_button.style.outline="none",this.toggle_button.addEventListener("click",()=>{this.model.set("collapsed",!this.model.get("collapsed")),this.model.save_changes()});const e=document.createElement("i");e.classList="center fa fa-bars",this.toggle_button.appendChild(e),this.el.appendChild(this.toggle_button),this.toolbar=document.createElement("div"),this.toolbar.classList="widget-container widget-box",this.el.appendChild(this.toolbar),this.buttons={toggle_button:this.toggle_button};for(let e in t){const i=t[e][0],s=t[e][1],n=t[e][2],o=t[e][3];if(!i)continue;const r=document.createElement("button");r.classList="jupyter-matplotlib-button jupyter-widgets jupyter-button",r.setAttribute("href","#"),r.setAttribute("title",s),r.style.outline="none",r.addEventListener("click",this.toolbar_button_onclick(o));const a=document.createElement("i");a.classList="center fa fa-"+n,r.appendChild(a),this.buttons[o]=r,this.toolbar.appendChild(r)}this.set_orientation(this.el),this.set_orientation(this.toolbar),this.set_buttons_style()}set_orientation(t){"vertical"==this.model.get("orientation")?(t.classList.remove("widget-hbox"),t.classList.add("widget-vbox")):(t.classList.add("widget-hbox"),t.classList.remove("widget-vbox"))}toolbar_button_onclick(t){return e=>{"pan"!=t&&"zoom"!=t||(this.model.get("_current_action")==t?this.model.set("_current_action",""):this.model.set("_current_action",t),this.model.save_changes()),this.send({type:"toolbar_button",name:t})}}set_buttons_style(){const t={primary:["mod-primary"],success:["mod-success"],info:["mod-info"],warning:["mod-warning"],danger:["mod-danger"]};for(let e in this.buttons){const i=this.buttons[e];for(let e in t)i.classList.remove(t[e]);i.classList.remove("mod-active");const s=this.model.get("button_style");""!=s&&i.classList.add(t[s]),e==this.model.get("_current_action")&&i.classList.add("mod-active")}}update_collapsed(){this.toolbar.style.display=this.model.get("collapsed")?"":"none"}model_events(){this.model.on("change:orientation",this.update_orientation.bind(this)),this.model.on_some_change(["button_style","_current_action"],this.set_buttons_style.bind(this)),this.model.on("change:collapsed",this.update_collapsed.bind(this))}update_orientation(){this.set_orientation(this.el),this.set_orientation(this.toolbar)}}const a=i(1),l=i(2);i(3);const h=i(0).version;class d extends a.DOMWidgetModel{defaults(){return{...super.defaults(),_model_name:"MPLCanvasModel",_view_name:"MPLCanvasView",_model_module:"jupyter-matplotlib",_view_module:"jupyter-matplotlib",_model_module_version:"^"+h,_view_module_version:"^"+h,header_visible:!0,footer_visible:!0,toolbar:null,toolbar_visible:!0,toolbar_position:"horizontal",resizable:!0,_width:0,_height:0,_figure_label:"Figure",_message:"",_cursor:"pointer",_image_mode:"full",_rubberband_x:0,_rubberband_y:0,_rubberband_width:0,_rubberband_height:0}}initialize(t,e){super.initialize(t,e),this.offscreen_canvas=document.createElement("canvas"),this.offscreen_context=this.offscreen_canvas.getContext("2d");const i=this.offscreen_context.backingStorePixelRatio||this.offscreen_context.webkitBackingStorePixelRatio||this.offscreen_context.mozBackingStorePixelRatio||this.offscreen_context.msBackingStorePixelRatio||this.offscreen_context.oBackingStorePixelRatio||1;this.requested_size=null,this.resize_requested=!1,this.ratio=(window.devicePixelRatio||1)/i,this._init_image(),this.on("msg:custom",this.on_comm_message.bind(this)),this.on("change:resizable",()=>{this._for_each_view((function(t){t.update_canvas()}))}),this.send_initialization_message()}send_message(t,e={}){e.type=t,this.send(e)}send_initialization_message(){1!=this.ratio&&this.send_message("set_dpi_ratio",{dpi_ratio:this.ratio}),this.send_message("send_image_mode"),this.send_message("refresh"),this.send_message("initialized")}send_draw_message(){this.waiting||(this.waiting=!0,this.send_message("draw"))}handle_save(){const t=document.createElement("a");t.href=this.offscreen_canvas.toDataURL(),t.download=this.get("_figure_label")+".png",document.body.appendChild(t),t.click(),document.body.removeChild(t)}handle_resize(t){const e=t.size;this.resize_canvas(e[0],e[1]),this.offscreen_context.drawImage(this.image,0,0),this.resize_requested||this._for_each_view((function(t){t.resize_canvas(e[0],e[1])})),this.send_message("refresh"),this.resize_requested=!1,null!==this.requested_size&&(this.resize(this.requested_size[0],this.requested_size[1]),this.requested_size=null)}resize(t,e){t<=5||e<=5||(this._for_each_view((function(i){i.resize_canvas(t,e)})),this.resize_requested?this.requested_size=[t,e]:(this.resize_requested=!0,this.send_message("resize",{width:t,height:e})))}resize_canvas(t,e){this.offscreen_canvas.setAttribute("width",t*this.ratio),this.offscreen_canvas.setAttribute("height",e*this.ratio)}handle_rubberband(t){let e=t.x0/this.ratio,i=(this.offscreen_canvas.height-t.y0)/this.ratio,s=t.x1/this.ratio,n=(this.offscreen_canvas.height-t.y1)/this.ratio;e=Math.floor(e)+.5,i=Math.floor(i)+.5,s=Math.floor(s)+.5,n=Math.floor(n)+.5,this.set("_rubberband_x",Math.min(e,s)),this.set("_rubberband_y",Math.min(i,n)),this.set("_rubberband_width",Math.abs(s-e)),this.set("_rubberband_height",Math.abs(n-i)),this.save_changes(),this._for_each_view((function(t){t.update_canvas()}))}handle_draw(t){this.send_draw_message()}handle_binary(t,e){const i=window.URL||window.webkitURL,s=new Uint8Array(e[0].buffer),n=new Blob([s],{type:"image/png"}),o=i.createObjectURL(n);this.image.src&&i.revokeObjectURL(this.image.src),this.image.src=o,this.send_message("ack"),this.waiting=!1}on_comm_message(t,e){const i=JSON.parse(t.data),s=i.type;let n;try{n=this["handle_"+s].bind(this)}catch(t){return void console.log("No handler for the '"+s+"' message type: ",i)}n&&n(i,e)}_init_image(){this.image=document.createElement("img"),this.image.onload=()=>{"full"==this.get("_image_mode")&&this.offscreen_context.clearRect(0,0,this.offscreen_canvas.width,this.offscreen_canvas.height),this.offscreen_context.drawImage(this.image,0,0),this._for_each_view((function(t){t.update_canvas()}))}}_for_each_view(t){for(const e in this.views)this.views[e].then(e=>{t(e)})}remove(){this.send_message("closing")}}d.serializers={...a.DOMWidgetModel.serializers,toolbar:{deserialize:a.unpack_models}};class c extends a.DOMWidgetView{render(){return this.canvas=void 0,this.context=void 0,this.top_canvas=void 0,this.top_context=void 0,this.resizing=!1,this.resize_handle_size=20,this.figure=document.createElement("div"),this.figure.classList="jupyter-matplotlib-figure jupyter-widgets widget-container widget-box widget-vbox",this._init_header(),this._init_canvas(),this._init_footer(),this._resize_event=this.resize_event.bind(this),this._stop_resize_event=this.stop_resize_event.bind(this),window.addEventListener("mousemove",this._resize_event),window.addEventListener("mouseup",this._stop_resize_event),this.waiting=!1,this.create_child_view(this.model.get("toolbar")).then(t=>{this.toolbar_view=t,this._update_toolbar_position(),this._update_header_visible(),this._update_footer_visible(),this._update_toolbar_visible(),this.model_events()})}model_events(){this.model.on("change:header_visible",this._update_header_visible.bind(this)),this.model.on("change:footer_visible",this._update_footer_visible.bind(this)),this.model.on("change:toolbar_visible",this._update_toolbar_visible.bind(this)),this.model.on("change:toolbar_position",this._update_toolbar_position.bind(this)),this.model.on("change:_figure_label",this._update_figure_label.bind(this)),this.model.on("change:_message",this._update_message.bind(this)),this.model.on("change:_cursor",this._update_cursor.bind(this))}_update_header_visible(){this.header.style.display=this.model.get("header_visible")?"":"none"}_update_footer_visible(){this.footer.style.display=this.model.get("footer_visible")?"":"none"}_update_toolbar_visible(){this.toolbar_view.el.style.display=this.model.get("toolbar_visible")?"":"none"}_update_toolbar_position(){const t=this.model.get("toolbar_position");"top"==t||"bottom"==t?(this.el.classList="jupyter-widgets widget-container widget-box widget-vbox jupyter-matplotlib",this.model.get("toolbar").set("orientation","horizontal"),this.clear(),"top"==t?(this.el.appendChild(this.toolbar_view.el),this.el.appendChild(this.figure)):(this.el.appendChild(this.figure),this.el.appendChild(this.toolbar_view.el))):(this.el.classList="jupyter-widgets widget-container widget-box widget-hbox jupyter-matplotlib",this.model.get("toolbar").set("orientation","vertical"),this.clear(),"left"==t?(this.el.appendChild(this.toolbar_view.el),this.el.appendChild(this.figure)):(this.el.appendChild(this.figure),this.el.appendChild(this.toolbar_view.el)))}clear(){for(;this.el.firstChild;)this.el.removeChild(this.el.firstChild)}_init_header(){this.header=document.createElement("div"),this.header.style.textAlign="center",this.header.classList="jupyter-widgets widget-label",this._update_figure_label(),this.figure.appendChild(this.header)}_update_figure_label(t){this.header.textContent=this.model.get("_figure_label")}_init_canvas(){const t=document.createElement("div");t.classList="jupyter-widgets jupyter-matplotlib-canvas-container",this.figure.appendChild(t);const e=this.canvas_div=document.createElement("div");e.style.position="relative",e.style.clear="both",e.classList="jupyter-widgets jupyter-matplotlib-canvas-div",e.addEventListener("keydown",this.key_event("key_press")),e.addEventListener("keyup",this.key_event("key_release")),e.setAttribute("tabindex",0),t.appendChild(e);const i=this.canvas=document.createElement("canvas");i.style.display="block",i.style.position="absolute",i.style.left=0,i.style.top=0,i.style.zIndex=0,this.context=i.getContext("2d");const s=this.top_canvas=document.createElement("canvas");s.style.display="block",s.style.position="absolute",s.style.left=0,s.style.top=0,s.style.zIndex=1,s.addEventListener("mousedown",this.mouse_event("button_press")),s.addEventListener("mouseup",this.mouse_event("button_release")),s.addEventListener("mousemove",this.mouse_event("motion_notify")),s.addEventListener("mouseenter",this.mouse_event("figure_enter")),s.addEventListener("mouseleave",this.mouse_event("figure_leave")),s.addEventListener("wheel",this.mouse_event("scroll")),e.appendChild(i),e.appendChild(s),this.top_context=s.getContext("2d"),this.top_context.strokeStyle="rgba(0, 0, 0, 255)",this.top_canvas.addEventListener("contextmenu",(function(t){return event.preventDefault(),event.stopPropagation(),!1})),this.resize_canvas(this.model.get("_width"),this.model.get("_height")),this.update_canvas()}update_canvas(){if(0!=this.canvas.width&&0!=this.canvas.height&&(this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.drawImage(this.model.offscreen_canvas,0,0),this.top_context.clearRect(0,0,this.top_canvas.width,this.top_canvas.height),0!=this.model.get("_rubberband_width")&&0!=this.model.get("_rubberband_height")&&this.top_context.strokeRect(this.model.get("_rubberband_x"),this.model.get("_rubberband_y"),this.model.get("_rubberband_width"),this.model.get("_rubberband_height")),this.model.get("resizable"))){this.top_context.save();var t=this.top_context.createLinearGradient(this.top_canvas.width-this.resize_handle_size/3,this.top_canvas.height-this.resize_handle_size/3,this.top_canvas.width-this.resize_handle_size/4,this.top_canvas.height-this.resize_handle_size/4);t.addColorStop(0,"rgba(0, 0, 0, 0)"),t.addColorStop(1,"rgba(0, 0, 0, 255)"),this.top_context.fillStyle=t,this.top_context.globalAlpha=.3,this.top_context.beginPath(),this.top_context.moveTo(this.top_canvas.width,this.top_canvas.height),this.top_context.lineTo(this.top_canvas.width,this.top_canvas.height-this.resize_handle_size),this.top_context.lineTo(this.top_canvas.width-this.resize_handle_size,this.top_canvas.height),this.top_context.closePath(),this.top_context.fill(),this.top_context.restore()}}_update_cursor(){this.top_canvas.style.cursor=this.model.get("_cursor")}_init_footer(){this.footer=document.createElement("div"),this.footer.style.textAlign="center",this.footer.classList="jupyter-widgets widget-label",this._update_message(),this.figure.appendChild(this.footer)}_update_message(){this.footer.textContent=this.model.get("_message")}resize_canvas(t,e){this.canvas.setAttribute("width",t*this.model.ratio),this.canvas.setAttribute("height",e*this.model.ratio),this.canvas.style.width=t+"px",this.canvas.style.height=e+"px",this.top_canvas.setAttribute("width",t),this.top_canvas.setAttribute("height",e),this.canvas_div.style.width=t+"px",this.canvas_div.style.height=e+"px",this.update_canvas()}mouse_event(t){let e=0;return i=>{const s=l.get_mouse_position(i,this.top_canvas);if("scroll"===t&&(i.data="scroll",i.deltaY<0?i.step=1:i.step=-1),"button_press"===t){if(s.x>=this.top_canvas.width-this.resize_handle_size&&s.y>=this.top_canvas.height-this.resize_handle_size&&this.model.get("resizable"))return void(this.resizing=!0);this.canvas.focus(),this.canvas_div.focus()}if(!this.resizing&&("motion_notify"===t&&(s.x>=this.top_canvas.width-this.resize_handle_size&&s.y>=this.top_canvas.height-this.resize_handle_size?this.top_canvas.style.cursor="nw-resize":this.top_canvas.style.cursor=this.model.get("_cursor")),Date.now()>e+16)){e=Date.now();var n=s.x*this.model.ratio,o=s.y*this.model.ratio;this.model.send_message(t,{x:n,y:o,button:i.button,step:i.step,guiEvent:l.get_simple_keys(i)})}}}resize_event(t){if(this.resizing){const e=l.get_mouse_position(t,this.top_canvas);this.model.resize(e.x,e.y)}}stop_resize_event(){this.resizing=!1}key_event(t){return e=>{if(e.stopPropagation(),e.preventDefault(),"key_press"==t){if(e.which===this._key)return;this._key=e.which}"key_release"==t&&(this._key=null);var i="";return e.ctrlKey&&17!=e.which&&(i+="ctrl+"),e.altKey&&18!=e.which&&(i+="alt+"),e.shiftKey&&16!=e.which&&(i+="shift+"),i+="k",i+=e.which.toString(),this.model.send_message(t,{key:i,guiEvent:l.get_simple_keys(e)}),!1}}remove(){window.removeEventListener("mousemove",this._resize_event),window.removeEventListener("mouseup",this._stop_resize_event)}}var u=i(0);i.d(e,"ToolbarModel",(function(){return o})),i.d(e,"ToolbarView",(function(){return r})),i.d(e,"MPLCanvasModel",(function(){return d})),i.d(e,"MPLCanvasView",(function(){return c})),i.d(e,"version",(function(){return u.version}))}])}));
//# sourceMappingURL=index.js.map