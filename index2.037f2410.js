var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},a=e.parcelRequirec771;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in t){var a=t[e];delete t[e];var n={id:e,exports:{}};return r[e]=n,a.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,r){t[e]=r},e.parcelRequirec771=a),a.register("hHQUz",(function(e,r){function t(e,r){for(var t=0;t<r.length;t++){var a=r[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var a=function(){function e(r){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e),this.palabra=r}var r,a,n;return r=e,(a=[{key:"adivinar",value:function(e){return this.palabra==e?"¡ ¡ ¡ G  A  N  A  S  T  E ! ! ! ":"PERDISTE LA PALABRA ERA: "+this.getPalabra()}},{key:"letrasCorectas",value:function(e){for(var r="",t=0;t<this.palabra.length;t++)this.palabra[t]==e[t]&&(r+=e[t]);return r}},{key:"lestrasPosIncorrecta",value:function(e){for(var r="",t=0;t<this.palabra.length;t++)this.palabra.includes(e[t])&&this.palabra[t]!=e[t]&&(r+=e[t]);return r}},{key:"lestrasIncorrecta",value:function(e){for(var r="",t=0;t<e.length;t++)this.palabra.includes(e[t])||(r+=e[t]);return r}},{key:"getPalabra",value:function(){return this.palabra}}])&&t(r.prototype,a),n&&t(r,n),Object.defineProperty(r,"prototype",{writable:!1}),e}();e.exports.default=a}));var n,o=(n=a("hHQUz"))&&n.__esModule?n:{default:n};var l=document.querySelector("#intento-form"),i=document.querySelector("#intento"),u=(document.querySelector("#boton-adivinar"),document.querySelector("#resultado-div"));new o.default("HOJAS");l.addEventListener("submit",(function(e){e.preventDefault();var r=i.value.toUpperCase();u.innerHTML=r}));
//# sourceMappingURL=index2.037f2410.js.map