(self.webpackChunkdimetrio_dev=self.webpackChunkdimetrio_dev||[]).push([[235],{3399:function(e,t,r){"use strict";r.r(t);var o=r(7294),n=r(8851),u=r(6725),s=r(3350);t.default=e=>{let{data:{mdx:{frontmatter:{embeddedImagesRemote:t,embeddedImagesLocal:r,title:l},body:p}}}=e;return o.createElement(n.Z,null,o.createElement(s.Z,{title:l}),o.createElement("article",null,o.createElement(u.MDXRenderer,{localImages:r,remoteImages:t},p)))}},6725:function(e,t,r){const o=r(3395);e.exports={MDXRenderer:o}},3395:function(e,t,r){var o=r(9213),n=r(3515),u=r(8416),s=r(215);const l=["scope","children"];function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const i=r(7294),{mdx:a}=r(4983),{useMDXScope:f}=r(9480);e.exports=function(e){let{scope:t,children:r}=e,u=s(e,l);const p=f(t),d=i.useMemo((()=>{if(!r)return null;const e=c({React:i,mdx:a},p),t=Object.keys(e),u=t.map((t=>e[t]));return n(Function,["_fn"].concat(t,[`${r}`])).apply(void 0,[{}].concat(o(u)))}),[r,t]);return i.createElement(d,c({},u))}},3897:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o},e.exports.__esModule=!0,e.exports.default=e.exports},3405:function(e,t,r){var o=r(3897);e.exports=function(e){if(Array.isArray(e))return o(e)},e.exports.__esModule=!0,e.exports.default=e.exports},3515:function(e,t,r){var o=r(6015),n=r(9617);function u(t,r,s){return n()?(e.exports=u=Reflect.construct.bind(),e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=u=function(e,t,r){var n=[null];n.push.apply(n,t);var u=new(Function.bind.apply(e,n));return r&&o(u,r.prototype),u},e.exports.__esModule=!0,e.exports.default=e.exports),u.apply(null,arguments)}e.exports=u,e.exports.__esModule=!0,e.exports.default=e.exports},8416:function(e,t,r){var o=r(4062);e.exports=function(e,t,r){return(t=o(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},9617:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},9498:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},2281:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},215:function(e,t,r){var o=r(7071);e.exports=function(e,t){if(null==e)return{};var r,n,u=o(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(u[r]=e[r])}return u},e.exports.__esModule=!0,e.exports.default=e.exports},9213:function(e,t,r){var o=r(3405),n=r(9498),u=r(6116),s=r(2281);e.exports=function(e){return o(e)||n(e)||u(e)||s()},e.exports.__esModule=!0,e.exports.default=e.exports},5036:function(e,t,r){var o=r(8698).default;e.exports=function(e,t){if("object"!==o(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},4062:function(e,t,r){var o=r(8698).default,n=r(5036);e.exports=function(e){var t=n(e,"string");return"symbol"===o(t)?t:String(t)},e.exports.__esModule=!0,e.exports.default=e.exports},8698:function(e){function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},6116:function(e,t,r){var o=r(3897);e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-templates-article-tsx-78c06980dcd84d0a236d.js.map