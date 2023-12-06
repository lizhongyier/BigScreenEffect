/*!
 * @maptalks/gl v0.91.1
 * LICENSE : UNLICENSED
 * (c) 2016-2023 maptalks.com
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('maptalks')) :
	typeof define === 'function' && define.amd ? define(['exports', 'maptalks'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.maptalksgl = {}, global.maptalks));
})(this, (function (exports, t) { 'use strict';

	function _interopNamespace(e) {
		if (e && e.__esModule) return e;
		var n = Object.create(null);
		if (e) {
			Object.keys(e).forEach(function (k) {
				if (k !== 'default') {
					var d = Object.getOwnPropertyDescriptor(e, k);
					Object.defineProperty(n, k, d.get ? d : {
						enumerable: true,
						get: function () { return e[k]; }
					});
				}
			});
		}
		n["default"] = e;
		return Object.freeze(n);
	}

	var t__namespace = /*#__PURE__*/_interopNamespace(t);

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	var regl_min = {exports: {}};

	(function (module, exports) {
	(function(U,W){module.exports=W();})(commonjsGlobal,function(){function U(a,b){this.id=Cb++;this.type=a;this.data=b;}function W(a){if(0===a.length)return [];var b=a.charAt(0),c=a.charAt(a.length-1);if(1<a.length&&b===c&&('"'===b||"'"===b))return ['"'+a.substr(1,a.length-2).replace(/\\/g,"\\\\").replace(/"/g,'\\"')+'"'];if(b=/\[(false|true|null|\d+|'[^']*'|"[^"]*")\]/.exec(a))return W(a.substr(0,
	b.index)).concat(W(b[1])).concat(W(a.substr(b.index+b[0].length)));b=a.split(".");if(1===b.length)return ['"'+a.replace(/\\/g,"\\\\").replace(/"/g,'\\"')+'"'];a=[];for(c=0;c<b.length;++c)a=a.concat(W(b[c]));return a}function ab(a){return "["+W(a).join("][")+"]"}function bb(a,b){if("function"===typeof a)return new U(0,a);if("number"===typeof a||"boolean"===typeof a)return new U(5,a);if(Array.isArray(a))return new U(6,a.map(function(a,e){return bb(a)}));if(a instanceof U)return a}function Db(){var a=
	{"":0},b=[""];return {id:function(c){var e=a[c];if(e)return e;e=a[c]=b.length;b.push(c);return e},str:function(a){return b[a]}}}function Eb(a,b,c){function e(){var b=window.innerWidth,e=window.innerHeight;a!==document.body&&(e=a.getBoundingClientRect(),b=e.right-e.left,e=e.bottom-e.top);f.width=c*b;f.height=c*e;F(f.style,{width:b+"px",height:e+"px"});}var f=document.createElement("canvas");F(f.style,{border:0,margin:0,padding:0,top:0,left:0});a.appendChild(f);a===document.body&&(f.style.position="absolute",
	F(a.style,{margin:0,padding:0}));var d;a!==document.body&&"function"===typeof ResizeObserver?(d=new ResizeObserver(function(){setTimeout(e);}),d.observe(a)):window.addEventListener("resize",e,!1);e();return {canvas:f,onDestroy:function(){d?d.disconnect():window.removeEventListener("resize",e);a.removeChild(f);}}}function Fb(a,b){function c(c){try{return a.getContext(c,b)}catch(f){return null}}return c("webgl")||c("experimental-webgl")||c("webgl-experimental")}function cb(a){return "string"===typeof a?
	a.split():a}function db(a){return "string"===typeof a?document.querySelector(a):a}function Gb(a){var b=a||{},c,e,f,d;a={};var p=[],r=[],v="undefined"===typeof window?1:window.devicePixelRatio,m=!1,u=function(a){},n=function(){};"string"===typeof b?c=document.querySelector(b):"object"===typeof b&&("string"===typeof b.nodeName&&"function"===typeof b.appendChild&&"function"===typeof b.getBoundingClientRect?c=b:"function"===typeof b.drawArrays||"function"===typeof b.drawElements?(d=b,f=d.canvas):("gl"in
	b?d=b.gl:"canvas"in b?f=db(b.canvas):"container"in b&&(e=db(b.container)),"attributes"in b&&(a=b.attributes),"extensions"in b&&(p=cb(b.extensions)),"optionalExtensions"in b&&(r=cb(b.optionalExtensions)),"onDone"in b&&(u=b.onDone),"profile"in b&&(m=!!b.profile),"pixelRatio"in b&&(v=+b.pixelRatio)));c&&("canvas"===c.nodeName.toLowerCase()?f=c:e=c);if(!d){if(!f){c=Eb(e||document.body,u,v);if(!c)return null;f=c.canvas;n=c.onDestroy;}void 0===a.premultipliedAlpha&&(a.premultipliedAlpha=!0);d=Fb(f,a);}return d?
	{gl:d,canvas:f,container:e,extensions:p,optionalExtensions:r,pixelRatio:v,profile:m,onDone:u,onDestroy:n}:(n(),u("webgl not supported, try upgrading your browser or graphics drivers http://get.webgl.org"),null)}function Hb(a,b){function c(b){b=b.toLowerCase();var c;try{c=e[b]=a.getExtension(b);}catch(f){}return !!c}for(var e={},f=0;f<b.extensions.length;++f){var d=b.extensions[f];if(!c(d))return b.onDestroy(),b.onDone('"'+d+'" extension is not supported by the current WebGL context, try upgrading your system or a different browser'),
	null}b.optionalExtensions.forEach(c);return {extensions:e,restore:function(){Object.keys(e).forEach(function(a){if(e[a]&&!c(a))throw Error("(regl): error restoring extension "+a);});}}}function J(a,b){for(var c=Array(a),e=0;e<a;++e)c[e]=b(e);return c}function eb(a){var b,c;b=(65535<a)<<4;a>>>=b;c=(255<a)<<3;a>>>=c;b|=c;c=(15<a)<<2;a>>>=c;b|=c;c=(3<a)<<1;return b|c|a>>>c>>1}function fb(){function a(a){a:{for(var b=16;268435456>=b;b*=16)if(a<=b){a=b;break a}a=0;}b=c[eb(a)>>2];return 0<b.length?b.pop():
	new ArrayBuffer(a)}function b(a){c[eb(a.byteLength)>>2].push(a);}var c=J(8,function(){return []});return {alloc:a,free:b,allocType:function(b,c){var d=null;switch(b){case 5120:d=new Int8Array(a(c),0,c);break;case 5121:d=new Uint8Array(a(c),0,c);break;case 5122:d=new Int16Array(a(2*c),0,c);break;case 5123:d=new Uint16Array(a(2*c),0,c);break;case 5124:d=new Int32Array(a(4*c),0,c);break;case 5125:d=new Uint32Array(a(4*c),0,c);break;case 5126:d=new Float32Array(a(4*c),0,c);break;default:return null}return d.length!==
	c?d.subarray(0,c):d},freeType:function(a){b(a.buffer);}}}function Z(a){return !!a&&"object"===typeof a&&Array.isArray(a.shape)&&Array.isArray(a.stride)&&"number"===typeof a.offset&&a.shape.length===a.stride.length&&(Array.isArray(a.data)||K(a.data))}function gb(a,b,c,e,f,d){for(var p=0;p<b;++p)for(var r=a[p],v=0;v<c;++v)for(var m=r[v],u=0;u<e;++u)f[d++]=m[u];}function hb(a,b,c,e,f){for(var d=1,p=c+1;p<b.length;++p)d*=b[p];var r=b[c];if(4===b.length-c){var v=b[c+1],m=b[c+2];b=b[c+3];for(p=0;p<r;++p)gb(a[p],
	v,m,b,e,f),f+=d;}else for(p=0;p<r;++p)hb(a[p],b,c+1,e,f),f+=d;}function Fa(a){return Ga[Object.prototype.toString.call(a)]|0}function ib(a,b){for(var c=0;c<b.length;++c)a[c]=b[c];}function jb(a,b,c,e,f,d,p){for(var r=0,v=0;v<c;++v)for(var m=0;m<e;++m)a[r++]=b[f*v+d*m+p];}function Ib(a,b,c,e){function f(b){this.id=v++;this.buffer=a.createBuffer();this.type=b;this.usage=35044;this.byteLength=0;this.dimension=1;this.dtype=5121;this.persistentData=null;c.profile&&(this.stats={size:0});}function d(b,c,q){b.byteLength=
	c.byteLength;a.bufferData(b.type,c,q);}function p(a,b,c,h,g,k){a.usage=c;if(Array.isArray(b)){if(a.dtype=h||5126,0<b.length)if(Array.isArray(b[0])){g=kb(b);for(var l=h=1;l<g.length;++l)h*=g[l];a.dimension=h;b=Sa(b,g,a.dtype);d(a,b,c);k?a.persistentData=b:D.freeType(b);}else "number"===typeof b[0]?(a.dimension=g,g=D.allocType(a.dtype,b.length),ib(g,b),d(a,g,c),k?a.persistentData=g:D.freeType(g)):K(b[0])&&(a.dimension=b[0].length,a.dtype=h||Fa(b[0])||5126,b=Sa(b,[b.length,b[0].length],a.dtype),d(a,b,c),
	k?a.persistentData=b:D.freeType(b));}else if(K(b))a.dtype=h||Fa(b),a.dimension=g,d(a,b,c),k&&(a.persistentData=new Uint8Array(new Uint8Array(b.buffer)));else if(Z(b)){g=b.shape;var e=b.stride,l=b.offset,t=0,ka=0,f=0,m=0;1===g.length?(t=g[0],ka=1,f=e[0],m=0):2===g.length&&(t=g[0],ka=g[1],f=e[0],m=e[1]);a.dtype=h||Fa(b.data)||5126;a.dimension=ka;g=D.allocType(a.dtype,t*ka);jb(g,b.data,t,ka,f,m,l);d(a,g,c);k?a.persistentData=g:D.freeType(g);}else b instanceof ArrayBuffer&&(a.dtype=5121,a.dimension=g,d(a,
	b,c),k&&(a.persistentData=new Uint8Array(new Uint8Array(b))));}function r(c){b.bufferCount--;e(c);a.deleteBuffer(c.buffer);c.buffer=null;delete m[c.id];}var v=0,m={};f.prototype.bind=function(){a.bindBuffer(this.type,this.buffer);};f.prototype.destroy=function(){r(this);};var u=[];c.profile&&(b.getTotalBufferSize=function(){var a=0;Object.keys(m).forEach(function(b){a+=m[b].stats.size;});return a});return {create:function(n,e,d,h){function g(b){var n=35044,t=null,e=0,d=0,f=k&&k.dimension||1;Array.isArray(b)||
	K(b)||Z(b)||b instanceof ArrayBuffer?t=b:"number"===typeof b?e=b|0:b&&("data"in b&&(t=b.data),"usage"in b&&(n=lb[b.usage]),"type"in b&&(d=Ha[b.type]),"dimension"in b&&(f=b.dimension|0),"length"in b&&(e=b.length|0));k.bind();t?p(k,t,n,d,f,h):(e&&a.bufferData(k.type,e,n),k.dtype=d||5121,k.usage=n,k.dimension=f,k.byteLength=e);c.profile&&(k.stats.size=k.byteLength*ia[k.dtype]);return g}b.bufferCount++;var k=new f(e);m[k.id]=k;d||g(n);g._reglType="buffer";g._buffer=k;g.subdata=function(b,c){var t=(c||
	0)|0,n;k.bind();if(K(b)||b instanceof ArrayBuffer)a.bufferSubData(k.type,t,b);else if(Array.isArray(b)){if(0<b.length)if("number"===typeof b[0]){var e=D.allocType(k.dtype,b.length);ib(e,b);a.bufferSubData(k.type,t,e);D.freeType(e);}else if(Array.isArray(b[0])||K(b[0]))n=kb(b),e=Sa(b,n,k.dtype),a.bufferSubData(k.type,t,e),D.freeType(e);}else if(Z(b)){n=b.shape;var d=b.stride,h=e=0,f=0,E=0;1===n.length?(e=n[0],h=1,f=d[0],E=0):2===n.length&&(e=n[0],h=n[1],f=d[0],E=d[1]);n=Array.isArray(b.data)?k.dtype:
	Fa(b.data);n=D.allocType(n,e*h);jb(n,b.data,e,h,f,E,b.offset);a.bufferSubData(k.type,t,n);D.freeType(n);}return g};c.profile&&(g.stats=k.stats);g.destroy=function(){r(k);};return g},createStream:function(a,b){var c=u.pop();c||(c=new f(a));c.bind();p(c,b,35040,0,1,!1);return c},destroyStream:function(a){u.push(a);},clear:function(){S(m).forEach(r);u.forEach(r);},getBuffer:function(a){return a&&a._buffer instanceof f?a._buffer:null},restore:function(){S(m).forEach(function(b){b.buffer=a.createBuffer();
	a.bindBuffer(b.type,b.buffer);a.bufferData(b.type,b.persistentData||b.byteLength,b.usage);});},_initBuffer:p}}function Jb(a,b,c,e){function f(a){this.id=v++;r[this.id]=this;this.buffer=a;this.primType=4;this.type=this.vertCount=0;}function d(e,d,f,h,g,k,l){e.buffer.bind();var m;d?((m=l)||K(d)&&(!Z(d)||K(d.data))||(m=b.oes_element_index_uint?5125:5123),c._initBuffer(e.buffer,d,f,m,3)):(a.bufferData(34963,k,f),e.buffer.dtype=m||5121,e.buffer.usage=f,e.buffer.dimension=3,e.buffer.byteLength=k);m=l;if(!l){switch(e.buffer.dtype){case 5121:case 5120:m=
	5121;break;case 5123:case 5122:m=5123;break;case 5125:case 5124:m=5125;}e.buffer.dtype=m;}e.type=m;d=g;0>d&&(d=e.buffer.byteLength,5123===m?d>>=1:5125===m&&(d>>=2));e.vertCount=d;d=h;0>h&&(d=4,h=e.buffer.dimension,1===h&&(d=0),2===h&&(d=1),3===h&&(d=4));e.primType=d;}function p(a){e.elementsCount--;delete r[a.id];a.buffer.destroy();a.buffer=null;}var r={},v=0,m={uint8:5121,uint16:5123};b.oes_element_index_uint&&(m.uint32=5125);f.prototype.bind=function(){this.buffer.bind();};var u=[];return {create:function(a,
	b){function q(a){if(a)if("number"===typeof a)h(a),g.primType=4,g.vertCount=a|0,g.type=5121;else {var b=null,c=35044,e=-1,f=-1,n=0,r=0;if(Array.isArray(a)||K(a)||Z(a))b=a;else if("data"in a&&(b=a.data),"usage"in a&&(c=lb[a.usage]),"primitive"in a&&(e=Ia[a.primitive]),"count"in a&&(f=a.count|0),"type"in a&&(r=m[a.type]),"length"in a)n=a.length|0;else if(n=f,5123===r||5122===r)n*=2;else if(5125===r||5124===r)n*=4;d(g,b,c,e,f,n,r);}else h(),g.primType=4,g.vertCount=0,g.type=5121;return q}var h=c.create(null,
	34963,!0),g=new f(h._buffer);e.elementsCount++;q(a);q._reglType="elements";q._elements=g;q.subdata=function(a,b){h.subdata(a,b);return q};q.destroy=function(){p(g);};return q},createStream:function(a){var b=u.pop();b||(b=new f(c.create(null,34963,!0,!1)._buffer));d(b,a,35040,-1,-1,0,0);return b},destroyStream:function(a){u.push(a);},getElements:function(a){return "function"===typeof a&&a._elements instanceof f?a._elements:null},clear:function(){S(r).forEach(p);}}}function mb(a){for(var b=D.allocType(5123,
	a.length),c=0;c<a.length;++c)if(isNaN(a[c]))b[c]=65535;else if(Infinity===a[c])b[c]=31744;else if(-Infinity===a[c])b[c]=64512;else {nb[0]=a[c];var e=Kb[0],f=e>>>31<<15,d=(e<<1>>>24)-127,e=e>>13&1023;b[c]=-24>d?f:-14>d?f+(e+1024>>-14-d):15<d?f+31744:f+(d+15<<10)+e;}return b}function na(a){return Array.isArray(a)||K(a)}function oa(a){return "[object "+a+"]"}function ob(a){return Array.isArray(a)&&(0===a.length||"number"===typeof a[0])}function pb(a){return Array.isArray(a)&&0!==a.length&&na(a[0])?!0:!1}
	function ja(a){return Object.prototype.toString.call(a)}function Ta(a){if(!a)return !1;var b=ja(a);return 0<=Lb.indexOf(b)?!0:ob(a)||pb(a)||Z(a)}function qb(a,b){36193===a.type?(a.data=mb(b),D.freeType(b)):a.data=b;}function Ja(a,b,c,e,f,d){a="undefined"!==typeof H[a]?H[a]:R[a]*pa[b];d&&(a*=6);if(f){for(e=0;1<=c;)e+=a*c*c,c/=2;return e}return a*c*e}function Mb(a,b,c,e,f,d,p){function r(){this.format=this.internalformat=6408;this.type=5121;this.flipY=this.premultiplyAlpha=this.compressed=!1;this.unpackAlignment=
	1;this.colorSpace=37444;this.channels=this.height=this.width=0;}function v(a,b){a.internalformat=b.internalformat;a.format=b.format;a.type=b.type;a.compressed=b.compressed;a.premultiplyAlpha=b.premultiplyAlpha;a.flipY=b.flipY;a.unpackAlignment=b.unpackAlignment;a.colorSpace=b.colorSpace;a.width=b.width;a.height=b.height;a.channels=b.channels;}function m(a,b){if("object"===typeof b&&b){"premultiplyAlpha"in b&&(a.premultiplyAlpha=b.premultiplyAlpha);"flipY"in b&&(a.flipY=b.flipY);"alignment"in b&&(a.unpackAlignment=
	b.alignment);"colorSpace"in b&&(a.colorSpace=Nb[b.colorSpace]);"type"in b&&(a.type=N[b.type]);var c=a.width,e=a.height,d=a.channels,g=!1;"shape"in b?(c=b.shape[0],e=b.shape[1],3===b.shape.length&&(d=b.shape[2],g=!0)):("radius"in b&&(c=e=b.radius),"width"in b&&(c=b.width),"height"in b&&(e=b.height),"channels"in b&&(d=b.channels,g=!0));a.width=c|0;a.height=e|0;a.channels=d|0;c=!1;"format"in b&&(c=b.format,e=a.internalformat=G[c],a.format=x[e],c in N&&!("type"in b)&&(a.type=N[c]),c in ga&&(a.compressed=
	!0),c=!0);!g&&c?a.channels=R[a.format]:g&&!c&&a.channels!==Ma[a.format]&&(a.format=a.internalformat=Ma[a.channels]);}}function u(b){a.pixelStorei(37440,b.flipY);a.pixelStorei(37441,b.premultiplyAlpha);a.pixelStorei(37443,b.colorSpace);a.pixelStorei(3317,b.unpackAlignment);}function n(){r.call(this);this.yOffset=this.xOffset=0;this.data=null;this.needsFree=!1;this.element=null;this.needsCopy=!1;}function z(a,b){var c=null;Ta(b)?c=b:b&&(m(a,b),"x"in b&&(a.xOffset=b.x|0),"y"in b&&(a.yOffset=b.y|0),Ta(b.data)&&
	(c=b.data));if(b.copy){var e=f.viewportWidth,d=f.viewportHeight;a.width=a.width||e-a.xOffset;a.height=a.height||d-a.yOffset;a.needsCopy=!0;}else if(!c)a.width=a.width||1,a.height=a.height||1,a.channels=a.channels||4;else if(K(c))a.channels=a.channels||4,a.data=c,"type"in b||5121!==a.type||(a.type=Ga[Object.prototype.toString.call(c)]|0);else if(ob(c)){a.channels=a.channels||4;e=c;d=e.length;switch(a.type){case 5121:case 5123:case 5125:case 5126:d=D.allocType(a.type,d);d.set(e);a.data=d;break;case 36193:a.data=
	mb(e);}a.alignment=1;a.needsFree=!0;}else if(Z(c)){e=c.data;Array.isArray(e)||5121!==a.type||(a.type=Ga[Object.prototype.toString.call(e)]|0);var d=c.shape,g=c.stride,t,E,h,l;3===d.length?(h=d[2],l=g[2]):l=h=1;t=d[0];E=d[1];d=g[0];g=g[1];a.alignment=1;a.width=t;a.height=E;a.channels=h;a.format=a.internalformat=Ma[h];a.needsFree=!0;t=l;c=c.offset;h=a.width;l=a.height;E=a.channels;for(var w=D.allocType(36193===a.type?5126:a.type,h*l*E),O=0,da=0;da<l;++da)for(var xa=0;xa<h;++xa)for(var Ua=0;Ua<E;++Ua)w[O++]=
	e[d*xa+g*da+t*Ua+c];qb(a,w);}else if(ja(c)===Va||ja(c)===Wa||ja(c)===sb)ja(c)===Va||ja(c)===Wa?a.element=c:a.element=c.canvas,a.width=a.element.width,a.height=a.element.height,a.channels=4;else if(ja(c)===tb)a.element=c,a.width=c.width,a.height=c.height,a.channels=4;else if(ja(c)===ub)a.element=c,a.width=c.naturalWidth,a.height=c.naturalHeight,a.channels=4;else if(ja(c)===vb)a.element=c,a.width=c.videoWidth,a.height=c.videoHeight,a.channels=4;else if(pb(c)){e=a.width||c[0].length;d=a.height||c.length;
	g=a.channels;g=na(c[0][0])?g||c[0][0].length:g||1;t=Oa.shape(c);h=1;for(l=0;l<t.length;++l)h*=t[l];h=D.allocType(36193===a.type?5126:a.type,h);Oa.flatten(c,t,"",h);qb(a,h);a.alignment=1;a.width=e;a.height=d;a.channels=g;a.format=a.internalformat=Ma[g];a.needsFree=!0;}}function q(b,c,d,g,h){var t=b.element,l=b.data,E=b.internalformat,f=b.format,m=b.type,w=b.width,O=b.height;u(b);t?a.texSubImage2D(c,h,d,g,f,m,t):b.compressed?a.compressedTexSubImage2D(c,h,d,g,E,w,O,l):b.needsCopy?(e(),a.copyTexSubImage2D(c,
	h,d,g,b.xOffset,b.yOffset,w,O)):a.texSubImage2D(c,h,d,g,w,O,f,m,l);}function h(){return wb.pop()||new n}function g(a){a.needsFree&&D.freeType(a.data);n.call(a);wb.push(a);}function k(){r.call(this);this.genMipmaps=!1;this.mipmapHint=4352;this.mipmask=0;this.images=Array(16);}function l(a,b,c){var e=a.images[0]=h();a.mipmask=1;e.width=a.width=b;e.height=a.height=c;e.channels=a.channels=4;}function A(a,b){var c=null;if(Ta(b))c=a.images[0]=h(),v(c,a),z(c,b),a.mipmask=1;else if(m(a,b),Array.isArray(b.mipmap))for(var e=
	b.mipmap,d=0;d<e.length;++d)c=a.images[d]=h(),v(c,a),c.width>>=d,c.height>>=d,z(c,e[d]),a.mipmask|=1<<d;else c=a.images[0]=h(),v(c,a),z(c,b),a.mipmask=1;v(a,a.images[0]);}function t(b,c){for(var d=b.images,g=0;g<d.length&&d[g];++g){var h=d[g],t=c,l=g,E=h.element,f=h.data,m=h.internalformat,w=h.format,O=h.type,da=h.width,xa=h.height;u(h);E?a.texImage2D(t,l,w,w,O,E):h.compressed?a.compressedTexImage2D(t,l,m,da,xa,0,f):h.needsCopy?(e(),a.copyTexImage2D(t,l,w,h.xOffset,h.yOffset,da,xa,0)):a.texImage2D(t,
	l,w,da,xa,0,w,O,f||null);}}function ka(){var a=J.pop()||new k;r.call(a);for(var b=a.mipmask=0;16>b;++b)a.images[b]=null;return a}function wa(a){for(var b=a.images,c=0;c<b.length;++c)b[c]&&g(b[c]),b[c]=null;J.push(a);}function B(){this.magFilter=this.minFilter=9728;this.wrapT=this.wrapS=33071;this.anisotropic=1;this.genMipmaps=!1;this.mipmapHint=4352;}function C(a,b){"min"in b&&(a.minFilter=ya[b.min],0<=Ob.indexOf(a.minFilter)&&!("faces"in b)&&(a.genMipmaps=!0));"mag"in b&&(a.magFilter=Q[b.mag]);var c=
	a.wrapS,d=a.wrapT;if("wrap"in b){var e=b.wrap;"string"===typeof e?c=d=ha[e]:Array.isArray(e)&&(c=ha[e[0]],d=ha[e[1]]);}else "wrapS"in b&&(c=ha[b.wrapS]),"wrapT"in b&&(d=ha[b.wrapT]);a.wrapS=c;a.wrapT=d;"anisotropic"in b&&(a.anisotropic=b.anisotropic);if("mipmap"in b){c=!1;switch(typeof b.mipmap){case "string":a.mipmapHint=Pb[b.mipmap];c=a.genMipmaps=!0;break;case "boolean":c=a.genMipmaps=b.mipmap;break;case "object":a.genMipmaps=!1,c=!0;}!c||"min"in b||(a.minFilter=9984);}}function M(c,d){a.texParameteri(d,
	10241,c.minFilter);a.texParameteri(d,10240,c.magFilter);a.texParameteri(d,10242,c.wrapS);a.texParameteri(d,10243,c.wrapT);b.ext_texture_filter_anisotropic&&a.texParameteri(d,34046,c.anisotropic);c.genMipmaps&&(a.hint(33170,c.mipmapHint),a.generateMipmap(d));}function E(b){r.call(this);this.mipmask=0;this.internalformat=6408;this.id=Y++;this.refCount=1;this.target=b;this.texture=a.createTexture();this.unit=-1;this.bindCount=0;this.texInfo=new B;p.profile&&(this.stats={size:0});}function aa(b){a.activeTexture(33984);
	a.bindTexture(b.target,b.texture);}function ta(){var b=T[0];b?a.bindTexture(b.target,b.texture):a.bindTexture(3553,null);}function y(b){var c=b.texture,e=b.unit,g=b.target;0<=e&&(a.activeTexture(33984+e),a.bindTexture(g,null),T[e]=null);a.deleteTexture(c);b.texture=null;b.params=null;b.pixels=null;b.refCount=0;delete ea[b.id];d.textureCount--;}var Pb={"don't care":4352,"dont care":4352,nice:4354,fast:4353},ha={repeat:10497,clamp:33071,mirror:33648},Q={nearest:9728,linear:9729},ya=F({mipmap:9987,"nearest mipmap nearest":9984,
	"linear mipmap nearest":9985,"nearest mipmap linear":9986,"linear mipmap linear":9987},Q),Nb={none:0,browser:37444},N={uint8:5121,rgba4:32819,rgb565:33635,"rgb5 a1":32820},G={alpha:6406,luminance:6409,"luminance alpha":6410,rgb:6407,rgba:6408,rgba4:32854,"rgb5 a1":32855,rgb565:36194},ga={};b.ext_srgb&&(G.srgb=35904,G.srgba=35906);b.oes_texture_float&&(N.float32=N["float"]=5126);b.oes_texture_half_float&&(N.float16=N["half float"]=36193);b.webgl_depth_texture&&(F(G,{depth:6402,"depth stencil":34041}),
	F(N,{uint16:5123,uint32:5125,"depth stencil":34042}));b.webgl_compressed_texture_s3tc&&F(ga,{"rgb s3tc dxt1":33776,"rgba s3tc dxt1":33777,"rgba s3tc dxt3":33778,"rgba s3tc dxt5":33779});b.webgl_compressed_texture_atc&&F(ga,{"rgb atc":35986,"rgba atc explicit alpha":35987,"rgba atc interpolated alpha":34798});b.webgl_compressed_texture_pvrtc&&F(ga,{"rgb pvrtc 4bppv1":35840,"rgb pvrtc 2bppv1":35841,"rgba pvrtc 4bppv1":35842,"rgba pvrtc 2bppv1":35843});b.webgl_compressed_texture_etc1&&(ga["rgb etc1"]=
	36196);var I=Array.prototype.slice.call(a.getParameter(34467));Object.keys(ga).forEach(function(a){var b=ga[a];0<=I.indexOf(b)&&(G[a]=b);});var H=Object.keys(G);c.textureFormats=H;var ba=[];Object.keys(G).forEach(function(a){ba[G[a]]=a;});var L=[];Object.keys(N).forEach(function(a){L[N[a]]=a;});var Da=[];Object.keys(Q).forEach(function(a){Da[Q[a]]=a;});var la=[];Object.keys(ya).forEach(function(a){la[ya[a]]=a;});var ma=[];Object.keys(ha).forEach(function(a){ma[ha[a]]=a;});var x=H.reduce(function(a,c){var d=
	G[c];6409===d||6406===d||6409===d||6410===d||6402===d||34041===d||b.ext_srgb&&(35904===d||35906===d)?a[d]=d:32855===d||0<=c.indexOf("rgba")?a[d]=6408:a[d]=6407;return a},{}),wb=[],J=[],Y=0,ea={},fa=c.maxTextureUnits,T=Array(fa).map(function(){return null});F(E.prototype,{bind:function(){this.bindCount+=1;var b=this.unit;if(0>b){for(var c=0;c<fa;++c){var e=T[c];if(e){if(0<e.bindCount)continue;e.unit=-1;}T[c]=this;b=c;break}p.profile&&d.maxTextureUnits<b+1&&(d.maxTextureUnits=b+1);this.unit=b;a.activeTexture(33984+
	b);a.bindTexture(this.target,this.texture);}return b},unbind:function(){--this.bindCount;},decRef:function(){0>=--this.refCount&&y(this);}});p.profile&&(d.getTotalTextureSize=function(){var a=0;Object.keys(ea).forEach(function(b){a+=ea[b].stats.size;});return a});return {create2D:function(b,c){function e(a,b){var c=f.texInfo;B.call(c);var d=ka();"number"===typeof a?"number"===typeof b?l(d,a|0,b|0):l(d,a|0,a|0):a?(C(c,a),A(d,a)):l(d,1,1);c.genMipmaps&&(d.mipmask=(d.width<<1)-1);f.mipmask=d.mipmask;v(f,
	d);f.internalformat=d.internalformat;e.width=d.width;e.height=d.height;aa(f);t(d,3553);M(c,3553);ta();wa(d);p.profile&&(f.stats.size=Ja(f.internalformat,f.type,d.width,d.height,c.genMipmaps,!1));e.format=ba[f.internalformat];e.type=L[f.type];e.mag=Da[c.magFilter];e.min=la[c.minFilter];e.wrapS=ma[c.wrapS];e.wrapT=ma[c.wrapT];return e}var f=new E(3553);ea[f.id]=f;d.textureCount++;e(b,c);e.subimage=function(a,b,c,d){b|=0;c|=0;d|=0;var t=h();v(t,f);t.width=0;t.height=0;z(t,a);t.width=t.width||(f.width>>
	d)-b;t.height=t.height||(f.height>>d)-c;aa(f);q(t,3553,b,c,d);ta();g(t);return e};e.resize=function(b,c){var d=b|0,g=c|0||d;if(d===f.width&&g===f.height)return e;e.width=f.width=d;e.height=f.height=g;aa(f);for(var h=0;f.mipmask>>h;++h){var t=d>>h,w=g>>h;if(!t||!w)break;a.texImage2D(3553,h,f.format,t,w,0,f.format,f.type,null);}ta();p.profile&&(f.stats.size=Ja(f.internalformat,f.type,d,g,!1,!1));return e};e._reglType="texture2d";e._texture=f;p.profile&&(e.stats=f.stats);e.destroy=function(){f.decRef();};
	return e},createCube:function(b,c,e,f,n,r){function k(a,b,c,d,e,f){var g,ca=y.texInfo;B.call(ca);for(g=0;6>g;++g)u[g]=ka();if("number"===typeof a||!a)for(a=a|0||1,g=0;6>g;++g)l(u[g],a,a);else if("object"===typeof a)if(b)A(u[0],a),A(u[1],b),A(u[2],c),A(u[3],d),A(u[4],e),A(u[5],f);else if(C(ca,a),m(y,a),"faces"in a)for(a=a.faces,g=0;6>g;++g)v(u[g],y),A(u[g],a[g]);else for(g=0;6>g;++g)A(u[g],a);v(y,u[0]);y.mipmask=ca.genMipmaps?(u[0].width<<1)-1:u[0].mipmask;y.internalformat=u[0].internalformat;k.width=
	u[0].width;k.height=u[0].height;aa(y);for(g=0;6>g;++g)t(u[g],34069+g);M(ca,34067);ta();p.profile&&(y.stats.size=Ja(y.internalformat,y.type,k.width,k.height,ca.genMipmaps,!0));k.format=ba[y.internalformat];k.type=L[y.type];k.mag=Da[ca.magFilter];k.min=la[ca.minFilter];k.wrapS=ma[ca.wrapS];k.wrapT=ma[ca.wrapT];for(g=0;6>g;++g)wa(u[g]);return k}var y=new E(34067);ea[y.id]=y;d.cubeCount++;var u=Array(6);k(b,c,e,f,n,r);k.subimage=function(a,b,c,d,e){c|=0;d|=0;e|=0;var f=h();v(f,y);f.width=0;f.height=0;
	z(f,b);f.width=f.width||(y.width>>e)-c;f.height=f.height||(y.height>>e)-d;aa(y);q(f,34069+a,c,d,e);ta();g(f);return k};k.resize=function(b){b|=0;if(b!==y.width){k.width=y.width=b;k.height=y.height=b;aa(y);for(var c=0;6>c;++c)for(var d=0;y.mipmask>>d;++d)a.texImage2D(34069+c,d,y.format,b>>d,b>>d,0,y.format,y.type,null);ta();p.profile&&(y.stats.size=Ja(y.internalformat,y.type,k.width,k.height,!1,!0));return k}};k._reglType="textureCube";k._texture=y;p.profile&&(k.stats=y.stats);k.destroy=function(){y.decRef();};
	return k},clear:function(){for(var b=0;b<fa;++b)a.activeTexture(33984+b),a.bindTexture(3553,null),T[b]=null;S(ea).forEach(y);d.cubeCount=0;d.textureCount=0;},getTexture:function(a){return null},restore:function(){for(var b=0;b<fa;++b){var c=T[b];c&&(c.bindCount=0,c.unit=-1,T[b]=null);}S(ea).forEach(function(b){b.texture=a.createTexture();a.bindTexture(b.target,b.texture);for(var c=0;32>c;++c)if(0!==(b.mipmask&1<<c))if(3553===b.target)a.texImage2D(3553,c,b.internalformat,b.width>>c,b.height>>c,0,b.internalformat,
	b.type,null);else for(var d=0;6>d;++d)a.texImage2D(34069+d,c,b.internalformat,b.width>>c,b.height>>c,0,b.internalformat,b.type,null);M(b.texInfo,b.target);});},refresh:function(){for(var b=0;b<fa;++b){var c=T[b];c&&(c.bindCount=0,c.unit=-1,T[b]=null);a.activeTexture(33984+b);a.bindTexture(3553,null);a.bindTexture(34067,null);}}}}function Qb(a,b,c,e,f,d){function p(a,b,c){this.target=a;this.texture=b;this.renderbuffer=c;var d=a=0;b?(a=b.width,d=b.height):c&&(a=c.width,d=c.height);this.width=a;this.height=
	d;}function r(a){a&&(a.texture&&a.texture._texture.decRef(),a.renderbuffer&&a.renderbuffer._renderbuffer.decRef());}function v(a,b,c){a&&(a.texture?a.texture._texture.refCount+=1:a.renderbuffer._renderbuffer.refCount+=1);}function m(b,c){c&&(c.texture?a.framebufferTexture2D(36160,b,c.target,c.texture._texture.texture,0):a.framebufferRenderbuffer(36160,b,36161,c.renderbuffer._renderbuffer.renderbuffer));}function u(a){var b=3553,c=null,d=null,e=a;"object"===typeof a&&(e=a.data,"target"in a&&(b=a.target|
	0));a=e._reglType;"texture2d"===a?c=e:"textureCube"===a?c=e:"renderbuffer"===a&&(d=e,b=36161);return new p(b,c,d)}function n(a,b,c,d,g){if(c)return a=e.create2D({width:a,height:b,format:d,type:g}),a._texture.refCount=0,new p(3553,a,null);a=f.create({width:a,height:b,format:d});a._renderbuffer.refCount=0;return new p(36161,null,a)}function z(a){return a&&(a.texture||a.renderbuffer)}function q(a,b,c){a&&(a.texture?a.texture.resize(b,c):a.renderbuffer&&a.renderbuffer.resize(b,c),a.width=b,a.height=c);}
	function h(){this.id=C++;M[this.id]=this;this.framebuffer=a.createFramebuffer();this.height=this.width=0;this.colorAttachments=[];this.depthStencilAttachment=this.stencilAttachment=this.depthAttachment=null;}function g(a){a.colorAttachments.forEach(r);r(a.depthAttachment);r(a.stencilAttachment);r(a.depthStencilAttachment);}function k(b){a.deleteFramebuffer(b.framebuffer);b.framebuffer=null;d.framebufferCount--;delete M[b.id];}function l(b,d){var e;a.bindFramebuffer(36160,b.framebuffer);var g=b.colorAttachments;
	for(e=0;e<g.length;++e)m(36064+e,g[e]);for(e=g.length;e<c.maxColorAttachments;++e)a.framebufferTexture2D(36160,36064+e,3553,null,0);a.framebufferTexture2D(36160,33306,3553,null,0);a.framebufferTexture2D(36160,36096,3553,null,0);a.framebufferTexture2D(36160,36128,3553,null,0);m(36096,b.depthAttachment);m(36128,b.stencilAttachment);m(33306,b.depthStencilAttachment);d||(a.checkFramebufferStatus(36160),a.isContextLost());a.bindFramebuffer(36160,t.next?t.next.framebuffer:null);t.cur=t.next;d||a.getError();}
	function A(b,c){function e(a,b){var c,d=0,h=0,t=!0,k=!0;c=null;var m=!0,q="rgba",r="uint8",p=1,A=null,E=null,la=null,M=!1;if("number"===typeof a)d=a|0,h=b|0||d;else if(a){var x=a;"shape"in x?(h=x.shape,d=h[0],h=h[1]):("radius"in x&&(d=h=x.radius),"width"in x&&(d=x.width),"height"in x&&(h=x.height));if("color"in x||"colors"in x)c=x.color||x.colors;if(!c){"colorCount"in x&&(p=x.colorCount|0);"colorTexture"in x&&(m=!!x.colorTexture,q="rgba4");if("colorType"in x&&(r=x.colorType,!m))if("half float"===
	r||"float16"===r)q="rgba16f";else if("float"===r||"float32"===r)q="rgba32f";"colorFormat"in x&&(q=x.colorFormat,0<=ka.indexOf(q)?m=!0:0<=wa.indexOf(q)&&(m=!1));}if("depthTexture"in x||"depthStencilTexture"in x)M=!(!x.depthTexture&&!x.depthStencilTexture);"depth"in x&&("boolean"===typeof x.depth?t=x.depth:(A=x.depth,k=!1));"stencil"in x&&("boolean"===typeof x.stencil?k=x.stencil:(E=x.stencil,t=!1));"depthStencil"in x&&("boolean"===typeof x.depthStencil?t=k=x.depthStencil:(la=x.depthStencil,k=t=!1));}else d=
	h=1;var C=null,aa=null,B=null,F=null;if(Array.isArray(c))C=c.map(u);else if(c)C=[u(c)];else for(C=Array(p),c=0;c<p;++c)C[c]=n(d,h,m,q,r);d=d||C[0].width;h=h||C[0].height;A?aa=u(A):t&&!k&&(aa=n(d,h,M,"depth","uint32"));E?B=u(E):k&&!t&&(B=n(d,h,!1,"stencil","uint8"));la?F=u(la):!A&&!E&&k&&t&&(F=n(d,h,M,"depth stencil","depth stencil"));t=null;for(c=0;c<C.length;++c)v(C[c]),C[c]&&C[c].texture&&(k=Xa[C[c].texture._texture.format]*Pa[C[c].texture._texture.type],null===t&&(t=k));v(aa);v(B);
	v(F);g(f);f.width=d;f.height=h;f.colorAttachments=C;f.depthAttachment=aa;f.stencilAttachment=B;f.depthStencilAttachment=F;e.color=C.map(z);e.depth=z(aa);e.stencil=z(B);e.depthStencil=z(F);e.width=f.width;e.height=f.height;l(f,x&&x.ignoreStatusCheck);return e}var f=new h;d.framebufferCount++;e(b,c);return F(e,{resize:function(a,b){var c=Math.max(a|0,1),d=Math.max(b|0||c,1);if(c===f.width&&d===f.height)return e;for(var g=f.colorAttachments,h=0;h<g.length;++h)q(g[h],c,d);q(f.depthAttachment,c,d);
	q(f.stencilAttachment,c,d);q(f.depthStencilAttachment,c,d);f.width=e.width=c;f.height=e.height=d;l(f);return e},blit:function(b,c,d){a.bindFramebuffer(36008,b._framebuffer.framebuffer);a.bindFramebuffer(36009,f.framebuffer);c||(c=16384);a.blitFramebuffer(0,0,b.width,b.height,0,0,f.width,f.height,c,"linear"===d?9729:9728);a.bindFramebuffer(36008,null);a.bindFramebuffer(36009,null);},_reglType:"framebuffer",_framebuffer:f,destroy:function(){k(f);g(f);},use:function(a){t.setFBO({framebuffer:e},a);}})}var t=
	{cur:null,next:null,dirty:!1,setFBO:null},ka=["rgba"],wa=["rgba4","rgb565","rgb5 a1"];b.ext_srgb&&wa.push("srgba");b.ext_color_buffer_half_float&&wa.push("rgba16f","rgb16f");b.webgl_color_buffer_float&&wa.push("rgba32f");var B=["uint8"];b.oes_texture_half_float&&B.push("half float","float16");b.oes_texture_float&&B.push("float","float32");var C=0,M={};return F(t,{getFramebuffer:function(a){return "function"===typeof a&&"framebuffer"===a._reglType&&(a=a._framebuffer,a instanceof h)?a:null},create:A,
	createCube:function(a){function b(a){var d,f={color:null},g=0,h=null;d="rgba";var t="uint8",l=1;if("number"===typeof a)g=a|0;else if(a){"shape"in a?g=a.shape[0]:("radius"in a&&(g=a.radius|0),"width"in a?g=a.width|0:"height"in a&&(g=a.height|0));if("color"in a||"colors"in a)h=a.color||a.colors;h||("colorCount"in a&&(l=a.colorCount|0),"colorType"in a&&(t=a.colorType),"colorFormat"in a&&(d=a.colorFormat));"depth"in a&&(f.depth=a.depth);"stencil"in a&&(f.stencil=a.stencil);"depthStencil"in
	a&&(f.depthStencil=a.depthStencil);}else g=1;if(h)if(Array.isArray(h))for(a=[],d=0;d<h.length;++d)a[d]=h[d];else a=[h];else for(a=Array(l),h={radius:g,format:d,type:t},d=0;d<l;++d)a[d]=e.createCube(h);f.color=Array(a.length);for(d=0;d<a.length;++d)l=a[d],g=g||l.width,f.color[d]={target:34069,data:a[d]};for(d=0;6>d;++d){for(l=0;l<a.length;++l)f.color[l].target=34069+d;0<d&&(f.depth=c[0].depth,f.stencil=c[0].stencil,f.depthStencil=c[0].depthStencil);if(c[d])c[d](f);else c[d]=A(f);}return F(b,{width:g,
	height:g,color:a})}var c=Array(6);b(a);return F(b,{faces:c,resize:function(a){var d=a|0;if(d===b.width)return b;var e=b.color;for(a=0;a<e.length;++a)e[a].resize(d);for(a=0;6>a;++a)c[a].resize(d);b.width=b.height=d;return b},_reglType:"framebufferCube",destroy:function(){c.forEach(function(a){a.destroy();});}})},clear:function(){S(M).forEach(k);},restore:function(){t.cur=null;t.next=null;t.dirty=!0;S(M).forEach(function(b){b.framebuffer=a.createFramebuffer();l(b);});}})}function Ya(){this.w=this.z=this.y=
	this.x=this.state=0;this.buffer=null;this.size=0;this.normalized=!1;this.type=5126;this.divisor=this.stride=this.offset=0;}function Rb(a,b,c,e,f,d,p){function r(a){if(a!==k.currentVAO){var c=b.oes_vertex_array_object;a?c.bindVertexArrayOES(a.vao):c.bindVertexArrayOES(null);k.currentVAO=a;}}function v(c){if(c!==k.currentVAO){if(c)c.bindAttrs();else {for(var d=b.angle_instanced_arrays,e=0;e<q.length;++e){var f=q[e];f.buffer?(a.enableVertexAttribArray(e),f.buffer.bind(),a.vertexAttribPointer(e,f.size,f.type,
	f.normalized,f.stride,f.offfset),d&&f.divisor&&d.vertexAttribDivisorANGLE(e,f.divisor)):(a.disableVertexAttribArray(e),a.vertexAttrib4f(e,f.x,f.y,f.z,f.w));}p.elements?a.bindBuffer(34963,p.elements.buffer.buffer):a.bindBuffer(34963,null);}k.currentVAO=c;}}function m(){S(g).forEach(function(a){a.destroy();});}function u(){this.id=++h;this.attributes=[];this.elements=null;this.ownsElements=!1;this.offset=this.count=0;this.instances=-1;this.primitive=4;var a=b.oes_vertex_array_object;this.vao=a?a.createVertexArrayOES():
	null;g[this.id]=this;this.buffers=[];}function n(){b.oes_vertex_array_object&&S(g).forEach(function(a){a.refresh();});}var z=c.maxAttributes,q=Array(z);for(c=0;c<z;++c)q[c]=new Ya;var h=0,g={},k={Record:Ya,scope:{},state:q,currentVAO:null,targetVAO:null,restore:b.oes_vertex_array_object?n:function(){},createVAO:function(a){function b(a){var e;Array.isArray(a)?(e=a,c.elements&&c.ownsElements&&c.elements.destroy(),c.elements=null,c.ownsElements=!1,c.offset=0,c.count=0,c.instances=-1,c.primitive=4):(a.elements?
	(e=a.elements,c.ownsElements?("function"===typeof e&&"elements"===e._reglType?c.elements.destroy():c.elements(e),c.ownsElements=!1):d.getElements(a.elements)?(c.elements=a.elements,c.ownsElements=!1):(c.elements=d.create(a.elements),c.ownsElements=!0)):(c.elements=null,c.ownsElements=!1),e=a.attributes,c.offset=0,c.count=-1,c.instances=-1,c.primitive=4,c.elements&&(c.count=c.elements._elements.vertCount,c.primitive=c.elements._elements.primType),"offset"in a&&(c.offset=a.offset|0),"count"in a&&(c.count=
	a.count|0),"instances"in a&&(c.instances=a.instances|0),"primitive"in a&&(c.primitive=Ia[a.primitive]));a={};var g=c.attributes;g.length=e.length;for(var h=0;h<e.length;++h){var l=e[h],k=g[h]=new Ya,m=l.data||l;if(Array.isArray(m)||K(m)||Z(m)){var n;c.buffers[h]&&(n=c.buffers[h],K(m)&&n._buffer.byteLength>=m.byteLength?n.subdata(m):(n.destroy(),c.buffers[h]=null));c.buffers[h]||(n=c.buffers[h]=f.create(l,34962,!1,!0));k.buffer=f.getBuffer(n);k.size=k.buffer.dimension|0;k.normalized=!1;k.type=k.buffer.dtype;
	k.offset=0;k.stride=0;k.divisor=0;k.state=1;a[h]=1;}else f.getBuffer(l)?(k.buffer=f.getBuffer(l),k.size=k.buffer.dimension|0,k.normalized=!1,k.type=k.buffer.dtype,k.offset=0,k.stride=0,k.divisor=0,k.state=1):f.getBuffer(l.buffer)?(k.buffer=f.getBuffer(l.buffer),k.size=(+l.size||k.buffer.dimension)|0,k.normalized=!!l.normalized||!1,k.type="type"in l?Ha[l.type]:k.buffer.dtype,k.offset=(l.offset||0)|0,k.stride=(l.stride||0)|0,k.divisor=(l.divisor||0)|0,k.state=1):"x"in l&&(k.x=+l.x||0,k.y=+l.y||0,k.z=
	+l.z||0,k.w=+l.w||0,k.state=2);}for(n=0;n<c.buffers.length;++n)!a[n]&&c.buffers[n]&&(c.buffers[n].destroy(),c.buffers[n]=null);c.refresh();return b}var c=new u;e.vaoCount+=1;b.destroy=function(){for(var a=0;a<c.buffers.length;++a)c.buffers[a]&&c.buffers[a].destroy();c.buffers.length=0;c.ownsElements&&(c.elements.destroy(),c.elements=null,c.ownsElements=!1);c.destroy();};b._vao=c;b._reglType="vao";return b(a)},getVAO:function(a){return "function"===typeof a&&a._vao?a._vao:null},destroyBuffer:function(b){for(var c=
	0;c<q.length;++c){var d=q[c];d.buffer===b&&(a.disableVertexAttribArray(c),d.buffer=null);}},setVAO:b.oes_vertex_array_object?r:v,clear:b.oes_vertex_array_object?m:function(){}};u.prototype.bindAttrs=function(){for(var c=b.angle_instanced_arrays,e=this.attributes,f=0;f<e.length;++f){var g=e[f];g.buffer?(a.enableVertexAttribArray(f),a.bindBuffer(34962,g.buffer.buffer),a.vertexAttribPointer(f,g.size,g.type,g.normalized,g.stride,g.offset),c&&g.divisor&&c.vertexAttribDivisorANGLE(f,g.divisor)):(a.disableVertexAttribArray(f),
	a.vertexAttrib4f(f,g.x,g.y,g.z,g.w));}for(c=e.length;c<z;++c)a.disableVertexAttribArray(c);(c=d.getElements(this.elements))?a.bindBuffer(34963,c.buffer.buffer):a.bindBuffer(34963,null);};u.prototype.refresh=function(){var a=b.oes_vertex_array_object;a&&(a.bindVertexArrayOES(this.vao),this.bindAttrs(),k.currentVAO=null,a.bindVertexArrayOES(null));};u.prototype.destroy=function(){if(this.vao){var a=b.oes_vertex_array_object;this===k.currentVAO&&(k.currentVAO=null,a.bindVertexArrayOES(null));a.deleteVertexArrayOES(this.vao);
	this.vao=null;}this.ownsElements&&(this.elements.destroy(),this.elements=null,this.ownsElements=!1);g[this.id]&&(delete g[this.id],--e.vaoCount);};return k}function Sb(a,b,c,e){function f(a,b,c,d){this.name=a;this.id=b;this.location=c;this.info=d;}function d(a,b){for(var c=0;c<a.length;++c)if(a[c].id===b.id){a[c].location=b.location;return}a.push(b);}function p(c,d,e){e=35632===c?m:u;var f=e[d];if(!f){var n=b.str(d),f=a.createShader(c);a.shaderSource(f,n);a.compileShader(f);e[d]=f;}return f}function r(a,
	b){this.id=q++;this.fragId=a;this.vertId=b;this.program=null;this.uniforms=[];this.attributes=[];this.refCount=1;e.profile&&(this.stats={uniformsCount:0,attributesCount:0});}function v(c,g,k){var m;m=p(35632,c.fragId);var n=p(35633,c.vertId);g=c.program=a.createProgram();a.attachShader(g,m);a.attachShader(g,n);if(k)for(m=0;m<k.length;++m)n=k[m],a.bindAttribLocation(g,n[0],n[1]);a.linkProgram(g);n=a.getProgramParameter(g,35718);e.profile&&(c.stats.uniformsCount=n);var q=c.uniforms;for(m=0;m<n;++m)if(k=
	a.getActiveUniform(g,m)){if(1<k.size)for(var r=0;r<k.size;++r){var u=k.name.replace("[0]","["+r+"]");d(q,new f(u,b.id(u),a.getUniformLocation(g,u),k));}r=k.name;1<k.size&&(r=r.replace("[0]",""));d(q,new f(r,b.id(r),a.getUniformLocation(g,r),k));}n=a.getProgramParameter(g,35721);e.profile&&(c.stats.attributesCount=n);c=c.attributes;for(m=0;m<n;++m)(k=a.getActiveAttrib(g,m))&&d(c,new f(k.name,b.id(k.name),a.getAttribLocation(g,k.name),k));}var m={},u={},n={},z=[],q=0;e.profile&&(c.getMaxUniformsCount=
	function(){var a=0;z.forEach(function(b){b.stats.uniformsCount>a&&(a=b.stats.uniformsCount);});return a},c.getMaxAttributesCount=function(){var a=0;z.forEach(function(b){b.stats.attributesCount>a&&(a=b.stats.attributesCount);});return a});return {clear:function(){var b=a.deleteShader.bind(a);S(m).forEach(b);m={};S(u).forEach(b);u={};z.forEach(function(b){a.deleteProgram(b.program);});z.length=0;n={};c.shaderCount=0;},program:function(b,d,e,f){var q=n[d];q||(q=n[d]={});var t=q[b];if(t&&(t.refCount++,!f))return t;
	var p=new r(d,b);c.shaderCount++;v(p,e,f);t||(q[b]=p);z.push(p);return F(p,{destroy:function(){p.refCount--;if(0>=p.refCount){a.deleteProgram(p.program);var b=z.indexOf(p);z.splice(b,1);c.shaderCount--;}0>=q[p.vertId].refCount&&(a.deleteShader(u[p.vertId]),delete u[p.vertId],delete n[p.fragId][p.vertId]);Object.keys(n[p.fragId]).length||(a.deleteShader(m[p.fragId]),delete m[p.fragId],delete n[p.fragId]);}})},restore:function(){m={};u={};for(var a=0;a<z.length;++a)v(z[a],null,z[a].attributes.map(function(a){return [a.location,
	a.name]}));},shader:p,frag:-1,vert:-1}}function Tb(a,b,c,e,f,d,p){function r(d){var f;f=null===b.next?5121:b.next.colorAttachments[0].texture._texture.type;var n=0,r=0,q=e.framebufferWidth,h=e.framebufferHeight,g=null;K(d)?g=d:d&&(n=d.x|0,r=d.y|0,q=(d.width||e.framebufferWidth-n)|0,h=(d.height||e.framebufferHeight-r)|0,g=d.data||null);c();d=q*h*4;g||(5121===f?g=new Uint8Array(d):5126===f&&(g=g||new Float32Array(d)));a.pixelStorei(3333,4);a.readPixels(n,r,q,h,6408,f,g);return g}function v(a){var c;
	b.setFBO({framebuffer:a.framebuffer},function(){c=r(a);});return c}return function(a){return a&&"framebuffer"in a?v(a):r(a)}}function za(a){return Array.prototype.slice.call(a)}function Aa(a){return za(a).join("")}function Ub(){function a(){var a=[],b=[];return F(function(){a.push.apply(a,za(arguments));},{def:function(){var d="v"+c++;b.push(d);0<arguments.length&&(a.push(d,"="),a.push.apply(a,za(arguments)),a.push(";"));return d},toString:function(){return Aa([0<b.length?"var "+b.join(",")+";":"",
	Aa(a)])}})}function b(){function b(a,e){d(a,e,"=",c.def(a,e),";");}var c=a(),d=a(),e=c.toString,f=d.toString;return F(function(){c.apply(c,za(arguments));},{def:c.def,entry:c,exit:d,save:b,set:function(a,d,e){b(a,d);c(a,d,"=",e,";");},toString:function(){return e()+f()}})}var c=0,e=[],f=[],d=a(),p={};return {global:d,link:function(a){for(var b=0;b<f.length;++b)if(f[b]===a)return e[b];b="g"+c++;e.push(b);f.push(a);return b},block:a,proc:function(a,c){function d(){var a="a"+e.length;e.push(a);return a}
	var e=[];c=c||0;for(var f=0;f<c;++f)d();var f=b(),z=f.toString;return p[a]=F(f,{arg:d,toString:function(){return Aa(["function(",e.join(),"){",z(),"}"])}})},scope:b,cond:function(){var a=Aa(arguments),c=b(),d=b(),e=c.toString,f=d.toString;return F(c,{then:function(){c.apply(c,za(arguments));return this},"else":function(){d.apply(d,za(arguments));return this},toString:function(){var b=f();b&&(b="else{"+b+"}");return Aa(["if(",a,"){",e(),"}",b])}})},compile:function(){var a=['"use strict";',d,"return {"];
	Object.keys(p).forEach(function(b){a.push('"',b,'":',p[b].toString(),",");});a.push("}");var b=Aa(a).replace(/;/g,";\n").replace(/}/g,"}\n").replace(/{/g,"{\n");return Function.apply(null,e.concat(b)).apply(null,f)}}}function Qa(a){return Array.isArray(a)||K(a)||Z(a)}function xb(a){return a.sort(function(a,c){return "viewport"===a?-1:"viewport"===c?1:a<c?-1:1})}function I(a,b,c,e){this.thisDep=a;this.contextDep=b;this.propDep=c;this.append=e;}function ua(a){return a&&!(a.thisDep||a.contextDep||a.propDep)}
	function B(a){return new I(!1,!1,!1,a)}function L(a,b){var c=a.type;if(0===c)return c=a.data.length,new I(!0,1<=c,2<=c,b);if(4===c)return c=a.data,new I(c.thisDep,c.contextDep,c.propDep,b);if(5===c)return new I(!1,!1,!1,b);if(6===c){for(var e=c=!1,f=!1,d=0;d<a.data.length;++d){var p=a.data[d];1===p.type?f=!0:2===p.type?e=!0:3===p.type?c=!0:0===p.type?(c=!0,p=p.data,1<=p&&(e=!0),2<=p&&(f=!0)):4===p.type&&(c=c||p.data.thisDep,e=e||p.data.contextDep,f=f||p.data.propDep);}return new I(c,e,f,b)}return new I(3===
	c,2===c,1===c,b)}function Vb(a,b,c,e,f,d,p,r,v,m,u,n,z,q,h){function g(a){return a.replace(".","_")}function k(a,b,c){var d=g(a);La.push(a);Ca[d]=qa[d]=!!c;ra[d]=b;}function l(a,b,c){var d=g(a);La.push(a);Array.isArray(c)?(qa[d]=c.slice(),Ca[d]=c.slice()):qa[d]=Ca[d]=c;sa[d]=b;}function A(){var a=Ub(),c=a.link,d=a.global;a.id=pa++;a.batchId="0";var e=c(rb),f=a.shared={props:"a0"};Object.keys(rb).forEach(function(a){f[a]=d.def(e,".",a);});var g=a.next={},ca=a.current={};Object.keys(sa).forEach(function(a){Array.isArray(qa[a])&&
	(g[a]=d.def(f.next,".",a),ca[a]=d.def(f.current,".",a));});var Wb=a.constants={};Object.keys(Na).forEach(function(a){Wb[a]=d.def(JSON.stringify(Na[a]));});a.invoke=function(b,d){switch(d.type){case 0:var e=["this",f.context,f.props,a.batchId];return b.def(c(d.data),".call(",e.slice(0,Math.max(d.data.length+1,4)),")");case 1:return b.def(f.props,d.data);case 2:return b.def(f.context,d.data);case 3:return b.def("this",d.data);case 4:return d.data.append(a,b),d.data.ref;case 5:return d.data.toString();
	case 6:return d.data.map(function(c){return a.invoke(b,c)})}};a.attribCache={};var X={};a.scopeAttrib=function(a){a=b.id(a);if(a in X)return X[a];var d=m.scope[a];d||(d=m.scope[a]=new ea);return X[a]=c(d)};return a}function t(a){var b=a["static"];a=a.dynamic;var c;if("profile"in b){var d=!!b.profile;c=B(function(a,b){return d});c.enable=d;}else if("profile"in a){var e=a.profile;c=L(e,function(a,b){return a.invoke(b,e)});}return c}function D(a,b){var c=a["static"],d=a.dynamic;if("framebuffer"in c){var e=
	c.framebuffer;return e?(e=r.getFramebuffer(e),B(function(a,b){var c=a.link(e),d=a.shared;b.set(d.framebuffer,".next",c);d=d.context;b.set(d,".framebufferWidth",c+".width");b.set(d,".framebufferHeight",c+".height");return c})):B(function(a,b){var c=a.shared;b.set(c.framebuffer,".next","null");c=c.context;b.set(c,".framebufferWidth",c+".drawingBufferWidth");b.set(c,".framebufferHeight",c+".drawingBufferHeight");return "null"})}if("framebuffer"in d){var f=d.framebuffer;return L(f,function(a,b){var c=
	a.invoke(b,f),d=a.shared,e=d.framebuffer,c=b.def(e,".getFramebuffer(",c,")");b.set(e,".next",c);d=d.context;b.set(d,".framebufferWidth",c+"?"+c+".width:"+d+".drawingBufferWidth");b.set(d,".framebufferHeight",c+"?"+c+".height:"+d+".drawingBufferHeight");return c})}return null}function H(a,b,c){function d(a){if(a in e){var c=e[a];a=!0;var w=c.x|0,g=c.y|0,h,ca;"width"in c?h=c.width|0:a=!1;"height"in c?ca=c.height|0:a=!1;return new I(!a&&b&&b.thisDep,!a&&b&&b.contextDep,!a&&b&&b.propDep,function(a,b){var d=
	a.shared.context,e=h;"width"in c||(e=b.def(d,".","framebufferWidth","-",w));var f=ca;"height"in c||(f=b.def(d,".","framebufferHeight","-",g));return [w,g,e,f]})}if(a in f){var k=f[a];a=L(k,function(a,b){var c=a.invoke(b,k),d=a.shared.context,e=b.def(c,".x|0"),f=b.def(c,".y|0"),w=b.def('"width" in ',c,"?",c,".width|0:","(",d,".","framebufferWidth","-",e,")"),c=b.def('"height" in ',c,"?",c,".height|0:","(",d,".","framebufferHeight","-",f,")");return [e,f,w,c]});b&&(a.thisDep=a.thisDep||b.thisDep,a.contextDep=
	a.contextDep||b.contextDep,a.propDep=a.propDep||b.propDep);return a}return b?new I(b.thisDep,b.contextDep,b.propDep,function(a,b){var c=a.shared.context;return [0,0,b.def(c,".","framebufferWidth"),b.def(c,".","framebufferHeight")]}):null}var e=a["static"],f=a.dynamic;if(a=d("viewport")){var g=a;a=new I(a.thisDep,a.contextDep,a.propDep,function(a,b){var c=g.append(a,b),d=a.shared.context;b.set(d,".viewportWidth",c[2]);b.set(d,".viewportHeight",c[3]);return c});}return {viewport:a,scissor_box:d("scissor.box")}}
	function K(a,b){var c=a["static"];if("string"===typeof c.frag&&"string"===typeof c.vert){if(0<Object.keys(b.dynamic).length)return null;var c=b["static"],d=Object.keys(c);if(0<d.length&&"number"===typeof c[d[0]]){for(var e=[],f=0;f<d.length;++f)e.push([c[d[f]]|0,d[f]]);return e}}return null}function C(a,c,d){function e(a){if(a in f){var c=b.id(f[a]);a=B(function(){return c});a.id=c;return a}if(a in g){var d=g[a];return L(d,function(a,b){var c=a.invoke(b,d);return b.def(a.shared.strings,".id(",c,")")})}return null}
	var f=a["static"],g=a.dynamic,h=e("frag"),k=e("vert"),X=null;ua(h)&&ua(k)?(X=u.program(k.id,h.id,null,d),a=B(function(a,b){return a.link(X)})):a=new I(h&&h.thisDep||k&&k.thisDep,h&&h.contextDep||k&&k.contextDep,h&&h.propDep||k&&k.propDep,function(a,b){var c=a.shared.shader,d;d=h?h.append(a,b):b.def(c,".","frag");var e;e=k?k.append(a,b):b.def(c,".","vert");return b.def(c+".program("+e+","+d+")")});return {frag:h,vert:k,progVar:a,program:X}}function M(a,b){function c(a,b){if(a in e){var d=e[a]|0;b?g.offset=
	d:g.instances=d;return B(function(a,c){b&&(a.OFFSET=d);return d})}if(a in f){var w=f[a];return L(w,function(a,c){var d=a.invoke(c,w);b&&(a.OFFSET=d);return d})}if(b){if(X)return B(function(a,b){return a.OFFSET=0});if(h)return new I(k.thisDep,k.contextDep,k.propDep,function(a,b){return b.def(a.shared.vao+".currentVAO?"+a.shared.vao+".currentVAO.offset:0")})}else if(h)return new I(k.thisDep,k.contextDep,k.propDep,function(a,b){return b.def(a.shared.vao+".currentVAO?"+a.shared.vao+".currentVAO.instances:-1")});
	return null}var e=a["static"],f=a.dynamic,g={},h=!1,k=function(){if("vao"in e){var a=e.vao;null!==a&&null===m.getVAO(a)&&(a=m.createVAO(a));h=!0;g.vao=a;return B(function(b){var c=m.getVAO(a);return c?b.link(c):"null"})}if("vao"in f){h=!0;var b=f.vao;return L(b,function(a,c){var d=a.invoke(c,b);return c.def(a.shared.vao+".getVAO("+d+")")})}return null}(),X=!1,V=function(){if("elements"in e){var a=e.elements;g.elements=a;if(Qa(a)){var b=g.elements=d.create(a,!0),a=d.getElements(b);X=!0;}else a&&(a=
	d.getElements(a),X=!0);b=B(function(b,c){if(a){var d=b.link(a);return b.ELEMENTS=d}return b.ELEMENTS=null});b.value=a;return b}if("elements"in f){X=!0;var c=f.elements;return L(c,function(a,b){var d=a.shared,e=d.isBufferArgs,d=d.elements,f=a.invoke(b,c),w=b.def("null"),e=b.def(e,"(",f,")"),f=a.cond(e).then(w,"=",d,".createStream(",f,");")["else"](w,"=",d,".getElements(",f,");");b.entry(f);b.exit(a.cond(e).then(d,".destroyStream(",w,");"));return a.ELEMENTS=w})}return h?new I(k.thisDep,k.contextDep,
	k.propDep,function(a,b){return b.def(a.shared.vao+".currentVAO?"+a.shared.elements+".getElements("+a.shared.vao+".currentVAO.elements):null")}):null}(),va=c("offset",!0),n=function(){if("primitive"in e){var a=e.primitive;g.primitive=a;return B(function(b,c){return Ia[a]})}if("primitive"in f){var b=f.primitive;return L(b,function(a,c){var d=a.constants.primTypes,e=a.invoke(c,b);return c.def(d,"[",e,"]")})}return X?ua(V)?V.value?B(function(a,b){return b.def(a.ELEMENTS,".primType")}):B(function(){return 4}):
	new I(V.thisDep,V.contextDep,V.propDep,function(a,b){var c=a.ELEMENTS;return b.def(c,"?",c,".primType:",4)}):h?new I(k.thisDep,k.contextDep,k.propDep,function(a,b){return b.def(a.shared.vao+".currentVAO?"+a.shared.vao+".currentVAO.primitive:4")}):null}(),q=function(){if("count"in e){var a=e.count|0;g.count=a;return B(function(){return a})}if("count"in f){var b=f.count;return L(b,function(a,c){return a.invoke(c,b)})}return X?ua(V)?V?va?new I(va.thisDep,va.contextDep,va.propDep,function(a,b){return b.def(a.ELEMENTS,
	".vertCount-",a.OFFSET)}):B(function(a,b){return b.def(a.ELEMENTS,".vertCount")}):B(function(){return -1}):new I(V.thisDep||va.thisDep,V.contextDep||va.contextDep,V.propDep||va.propDep,function(a,b){var c=a.ELEMENTS;return a.OFFSET?b.def(c,"?",c,".vertCount-",a.OFFSET,":-1"):b.def(c,"?",c,".vertCount:-1")}):h?new I(k.thisDep,k.contextDep,k.propDep,function(a,b){return b.def(a.shared.vao,".currentVAO?",a.shared.vao,".currentVAO.count:-1")}):null}(),l=c("instances",!1);return {elements:V,primitive:n,
	count:q,instances:l,offset:va,vao:k,vaoActive:h,elementsActive:X,"static":g}}function E(a,b){var c=a["static"],d=a.dynamic,e={};La.forEach(function(a){function b(w,g){if(a in c){var O=w(c[a]);e[f]=B(function(){return O});}else if(a in d){var h=d[a];e[f]=L(h,function(a,b){return g(a,b,a.invoke(b,h))});}}var f=g(a);switch(a){case "cull.enable":case "blend.enable":case "dither":case "stencil.enable":case "depth.enable":case "scissor.enable":case "polygonOffset.enable":case "sample.alpha":case "sample.enable":case "depth.mask":return b(function(a){return a},
	function(a,b,c){return c});case "depth.func":return b(function(a){return Za[a]},function(a,b,c){return b.def(a.constants.compareFuncs,"[",c,"]")});case "depth.range":return b(function(a){return a},function(a,b,c){a=b.def("+",c,"[0]");b=b.def("+",c,"[1]");return [a,b]});case "blend.func":return b(function(a){return [Ea["srcRGB"in a?a.srcRGB:a.src],Ea["dstRGB"in a?a.dstRGB:a.dst],Ea["srcAlpha"in a?a.srcAlpha:a.src],Ea["dstAlpha"in a?a.dstAlpha:a.dst]]},function(a,b,c){function d(a,e){return b.def('"',
	a,e,'" in ',c,"?",c,".",a,e,":",c,".",a)}a=a.constants.blendFuncs;var e=d("src","RGB"),f=d("dst","RGB"),e=b.def(a,"[",e,"]"),w=b.def(a,"[",d("src","Alpha"),"]"),f=b.def(a,"[",f,"]");a=b.def(a,"[",d("dst","Alpha"),"]");return [e,f,w,a]});case "blend.equation":return b(function(a){if("string"===typeof a)return [fa[a],fa[a]];if("object"===typeof a)return [fa[a.rgb],fa[a.alpha]]},function(a,b,c){var d=a.constants.blendEquations,e=b.def(),f=b.def();a=a.cond("typeof ",c,'==="string"');a.then(e,"=",f,"=",d,
	"[",c,"];");a["else"](e,"=",d,"[",c,".rgb];",f,"=",d,"[",c,".alpha];");b(a);return [e,f]});case "blend.color":return b(function(a){return J(4,function(b){return +a[b]})},function(a,b,c){return J(4,function(a){return b.def("+",c,"[",a,"]")})});case "stencil.mask":return b(function(a){return a|0},function(a,b,c){return b.def(c,"|0")});case "stencil.func":return b(function(a){return [Za[a.cmp||"keep"],a.ref||0,"mask"in a?a.mask:-1]},function(a,b,c){a=b.def('"cmp" in ',c,"?",a.constants.compareFuncs,"[",
	c,".cmp]",":",7680);var d=b.def(c,".ref|0");b=b.def('"mask" in ',c,"?",c,".mask|0:-1");return [a,d,b]});case "stencil.opFront":case "stencil.opBack":return b(function(b){return ["stencil.opBack"===a?1029:1028,Ra[b.fail||"keep"],Ra[b.zfail||"keep"],Ra[b.zpass||"keep"]]},function(b,c,d){function e(a){return c.def('"',a,'" in ',d,"?",f,"[",d,".",a,"]:",7680)}var f=b.constants.stencilOps;return ["stencil.opBack"===a?1029:1028,e("fail"),e("zfail"),e("zpass")]});case "polygonOffset.offset":return b(function(a){return [a.factor|
	0,a.units|0]},function(a,b,c){a=b.def(c,".factor|0");b=b.def(c,".units|0");return [a,b]});case "cull.face":return b(function(a){var b=0;"front"===a?b=1028:"back"===a&&(b=1029);return b},function(a,b,c){return b.def(c,'==="front"?',1028,":",1029)});case "lineWidth":return b(function(a){return a},function(a,b,c){return c});case "frontFace":return b(function(a){return yb[a]},function(a,b,c){return b.def(c+'==="cw"?2304:2305')});case "colorMask":return b(function(a){return a.map(function(a){return !!a})},
	function(a,b,c){return J(4,function(a){return "!!"+c+"["+a+"]"})});case "sample.coverage":return b(function(a){return ["value"in a?a.value:1,!!a.invert]},function(a,b,c){a=b.def('"value" in ',c,"?+",c,".value:1");b=b.def("!!",c,".invert");return [a,b]})}});return e}function aa(a,b){var c=a["static"],d=a.dynamic,e={};Object.keys(c).forEach(function(a){var b=c[a],d;if("number"===typeof b||"boolean"===typeof b)d=B(function(){return b});else if("function"===typeof b){var f=b._reglType;if("texture2d"===f||
	"textureCube"===f)d=B(function(a){return a.link(b)});else if("framebuffer"===f||"framebufferCube"===f)d=B(function(a){return a.link(b.color[0])});}else na(b)&&(d=B(function(a){return a.global.def("[",J(b.length,function(a){return b[a]}),"]")}));d.value=b;e[a]=d;});Object.keys(d).forEach(function(a){var b=d[a];e[a]=L(b,function(a,c){return a.invoke(c,b)});});return e}function ta(a,c){var d=a["static"],e=a.dynamic,g={};Object.keys(d).forEach(function(a){var c=d[a],e=b.id(a),w=new ea;if(Qa(c))w.state=1,
	w.buffer=f.getBuffer(f.create(c,34962,!1,!0)),w.type=0;else {var h=f.getBuffer(c);if(h)w.state=1,w.buffer=h,w.type=0;else if("constant"in c){var O=c.constant;w.buffer="null";w.state=2;"number"===typeof O?w.x=O:Ba.forEach(function(a,b){b<O.length&&(w[a]=O[b]);});}else {var h=Qa(c.buffer)?f.getBuffer(f.create(c.buffer,34962,!1,!0)):f.getBuffer(c.buffer),k=c.offset|0,n=c.stride|0,q=c.size|0,l=!!c.normalized,m=0;"type"in c&&(m=Ha[c.type]);c=c.divisor|0;w.buffer=h;w.state=1;w.size=q;w.normalized=l;w.type=
	m||h.dtype;w.offset=k;w.stride=n;w.divisor=c;}}g[a]=B(function(a,b){var c=a.attribCache;if(e in c)return c[e];var d={isStream:!1};Object.keys(w).forEach(function(a){d[a]=w[a];});w.buffer&&(d.buffer=a.link(w.buffer),d.type=d.type||d.buffer+".dtype");return c[e]=d});});Object.keys(e).forEach(function(a){var b=e[a];g[a]=L(b,function(a,c){function d(a){c(h[a],"=",e,".",a,"|0;");}var e=a.invoke(c,b),f=a.shared,w=a.constants,g=f.isBufferArgs,f=f.buffer,h={isStream:c.def(!1)},O=new ea;O.state=1;Object.keys(O).forEach(function(a){h[a]=
	c.def(""+O[a]);});var k=h.buffer,da=h.type;c("if(",g,"(",e,")){",h.isStream,"=true;",k,"=",f,".createStream(",34962,",",e,");",da,"=",k,".dtype;","}else{",k,"=",f,".getBuffer(",e,");","if(",k,"){",da,"=",k,".dtype;",'}else if("constant" in ',e,"){",h.state,"=",2,";","if(typeof "+e+'.constant === "number"){',h[Ba[0]],"=",e,".constant;",Ba.slice(1).map(function(a){return h[a]}).join("="),"=0;","}else{",Ba.map(function(a,b){return h[a]+"="+e+".constant.length>"+b+"?"+e+".constant["+b+"]:0;"}).join(""),
	"}}else{","if(",g,"(",e,".buffer)){",k,"=",f,".createStream(",34962,",",e,".buffer);","}else{",k,"=",f,".getBuffer(",e,".buffer);","}",da,'="type" in ',e,"?",w.glTypes,"[",e,".type]:",k,".dtype;",h.normalized,"=!!",e,".normalized;");d("size");d("offset");d("stride");d("divisor");c("}}");c.exit("if(",h.isStream,"){",f,".destroyStream(",k,");","}");return h});});return g}function y(a){var b=a["static"],c=a.dynamic,d={};Object.keys(b).forEach(function(a){var c=b[a];d[a]=B(function(a,b){return "number"===
	typeof c||"boolean"===typeof c?""+c:a.link(c)});});Object.keys(c).forEach(function(a){var b=c[a];d[a]=L(b,function(a,c){return a.invoke(c,b)});});return d}function S(a,b,d,e,f){function h(a){var b=q[a];b&&(l[a]=b);}var k=K(a,b),n=D(a),q=H(a,n),V=M(a),l=E(a),p=C(a,f,k);h("viewport");h(g("scissor.box"));var r=0<Object.keys(l).length,n={framebuffer:n,draw:V,shader:p,state:l,dirty:r,scopeVAO:null,drawVAO:null,useVAO:!1,attributes:{}};n.profile=t(a);n.uniforms=aa(d);n.drawVAO=n.scopeVAO=V.vao;
	if(!n.drawVAO&&p.program&&!k&&c.angle_instanced_arrays&&V["static"].elements){var u=!0;a=p.program.attributes.map(function(a){a=b["static"][a];u=u&&!!a;return a});if(u&&0<a.length){var x=m.getVAO(m.createVAO({attributes:a,elements:V["static"].elements}));n.drawVAO=new I(null,null,null,function(a,b){return a.link(x)});n.useVAO=!0;}}k?n.useVAO=!0:n.attributes=ta(b);n.context=y(e);return n}function ha(a,b,c){var d=a.shared.context,e=a.scope();Object.keys(c).forEach(function(f){b.save(d,"."+f);var g=
	c[f].append(a,b);Array.isArray(g)?e(d,".",f,"=[",g.join(),"];"):e(d,".",f,"=",g,";");});b(e);}function Q(a,b,c,d){var e=a.shared,f=e.gl,g=e.framebuffer,h;Ka&&(h=b.def(e.extensions,".webgl_draw_buffers"));var k=a.constants,e=k.drawBuffer,k=k.backBuffer;a=c?c.append(a,b):b.def(g,".next");d||b("if(",a,"!==",g,".cur){");b("if(",a,"){",f,".bindFramebuffer(",36160,",",a,".framebuffer);");Ka&&b(h,".drawBuffersWEBGL(",e,"[",a,".colorAttachments.length]);");b("}else{",f,".bindFramebuffer(",36160,",null);");
	Ka&&b(h,".drawBuffersWEBGL(",k,");");b("}",g,".cur=",a,";");d||b("}");}function ya(a,b,c){var d=a.shared,e=d.gl,f=a.current,h=a.next,k=d.current,n=d.next,q=a.cond(k,".dirty");La.forEach(function(b){b=g(b);if(!(b in c.state)){var d,O;if(b in h){d=h[b];O=f[b];var l=J(qa[b].length,function(a){return q.def(d,"[",a,"]")});q(a.cond(l.map(function(a,b){return a+"!=="+O+"["+b+"]"}).join("||")).then(e,".",sa[b],"(",l,");",l.map(function(a,b){return O+"["+b+"]="+a}).join(";"),";"));}else d=q.def(n,".",b),l=a.cond(d,
	"!==",k,".",b),q(l),b in ra?l(a.cond(d).then(e,".enable(",ra[b],");")["else"](e,".disable(",ra[b],");"),k,".",b,"=",d,";"):l(e,".",sa[b],"(",d,");",k,".",b,"=",d,";");}});0===Object.keys(c.state).length&&q(k,".dirty=false;");b(q);}function P(a,b,c,d){var e=a.shared,f=a.current,g=e.current,h=e.gl;xb(Object.keys(c)).forEach(function(e){var k=c[e];if(!d||d(k)){var n=k.append(a,b);if(ra[e]){var l=ra[e];ua(k)?n?b(h,".enable(",l,");"):b(h,".disable(",l,");"):b(a.cond(n).then(h,".enable(",l,");")["else"](h,
	".disable(",l,");"));b(g,".",e,"=",n,";");}else if(na(n)){var q=f[e];b(h,".",sa[e],"(",n,");",n.map(function(a,b){return q+"["+b+"]="+a}).join(";"),";");}else b(h,".",sa[e],"(",n,");",g,".",e,"=",n,";");}});}function N(a,b){T&&(a.instancing=b.def(a.shared.extensions,".angle_instanced_arrays"));}function G(a,b,c,d,e){function f(){return "undefined"===typeof performance?"Date.now()":"performance.now()"}function g(a){r=b.def();a(r,"=",f(),";");"string"===typeof e?a(l,".count+=",e,";"):a(l,".count++;");q&&
	(d?(t=b.def(),a(t,"=",p,".getNumPendingQueries();")):a(p,".beginQuery(",l,");"));}function h(a){a(l,".cpuTime+=",f(),"-",r,";");q&&(d?a(p,".pushScopeStats(",t,",",p,".getNumPendingQueries(),",l,");"):a(p,".endQuery();"));}function k(a){var c=b.def(m,".profile");b(m,".profile=",a,";");b.exit(m,".profile=",c,";");}var n=a.shared,l=a.stats,m=n.current,p=n.timer;c=c.profile;var r,t;if(c){if(ua(c)){c.enable?(g(b),h(b.exit),k("true")):k("false");return}c=c.append(a,b);k(c);}else c=b.def(m,".profile");n=a.block();
	g(n);b("if(",c,"){",n,"}");a=a.block();h(a);b.exit("if(",c,"){",a,"}");}function ga(a,b,c,d,e){function f(a){switch(a){case 35664:case 35667:case 35671:return 2;case 35665:case 35668:case 35672:return 3;case 35666:case 35669:case 35673:return 4;default:return 1}}function g(c,d,e){function f(){b(n,".enableVertexAttribArray(",l,");");var c=e.type,g;g=e.size?b.def(e.size,"||",d):d;b(n,".bindBuffer(",34962,",",m,".buffer);",n,".vertexAttribPointer(",[l,g,c,e.normalized,e.stride,e.offset],");",q,".type=",
	c,";",q,".size=",g,";",da.map(function(a){return q+"."+a+"="+e[a]+";"}).join(""));T&&(c=e.divisor,b("if(",q,".divisor!==",c,"){",a.instancing,".vertexAttribDivisorANGLE(",[l,c],");",q,".divisor=",c,";}"));}function k(){b("if(",q,".buffer){",n,".disableVertexAttribArray(",l,");",q,".buffer=null;","}if(",Ba.map(function(a,b){return q+"."+a+"!=="+p[b]}).join("||"),"){",n,".vertexAttrib4f(",l,",",p,");",Ba.map(function(a,b){return q+"."+a+"="+p[b]+";"}).join(""),"}");}var n=h.gl,l=b.def(c,".location"),
	q=b.def(h.attributes,"[",l,"]");c=e.state;var m=e.buffer,p=[e.x,e.y,e.z,e.w],da=["buffer","normalized","offset","stride"];1===c?f():2===c?k():(b("if(",c,"===",1,"){"),f(),b("}else{"),k(),b("}"));}var h=a.shared;d.forEach(function(d){var h=d.name,k=c.attributes[h],n;if(k){if(!e(k))return;n=k.append(a,b);}else {if(!e(zb))return;var l=a.scopeAttrib(h);n={};Object.keys(new ea).forEach(function(a){n[a]=b.def(l,".",a);});}g(a.link(d),f(d.info.type),n);});}function R(a,c,d,e,f,g){for(var h=a.shared,k=h.gl,n={},
	l,q=0;q<e.length;++q){var p=e[q],m=p.name,r=p.info.type,t=p.info.size,u=d.uniforms[m];if(1<t){if(!u)continue;var x=m.replace("[0]","");if(n[x])continue;n[x]=1;}var p=a.link(p)+".location",v;if(u){if(!f(u))continue;if(ua(u)){m=u.value;if(35678===r||35680===r)r=a.link(m._texture||m.color[0]._texture),c(k,".uniform1i(",p,",",r+".bind());"),c.exit(r,".unbind();");else if(35674===r||35675===r||35676===r)t=a.global.def("new Float32Array(["+Array.prototype.slice.call(m)+"])"),m=2,35675===r?m=3:35676===r&&
	(m=4),c(k,".uniformMatrix",m,"fv(",p,",false,",t,");");else {switch(r){case 5126:l="1f";break;case 35664:l="2f";break;case 35665:l="3f";break;case 35666:l="4f";break;case 35670:l="1i";break;case 5124:l="1i";break;case 35671:l="2i";break;case 35667:l="2i";break;case 35672:l="3i";break;case 35668:l="3i";break;case 35673:l="4i";break;case 35669:l="4i";}1<t?(l+="v",m=a.global.def("["+Array.prototype.slice.call(m)+"]")):m=na(m)?Array.prototype.slice.call(m):m;c(k,".uniform",l,"(",p,",",m,");");}continue}else v=
	u.append(a,c);}else {if(!f(zb))continue;v=c.def(h.uniforms,"[",b.id(m),"]");}35678===r?c("if(",v,"&&",v,'._reglType==="framebuffer"){',v,"=",v,".color[0];","}"):35680===r&&c("if(",v,"&&",v,'._reglType==="framebufferCube"){',v,"=",v,".color[0];","}");m=1;switch(r){case 35678:case 35680:r=c.def(v,"._texture");c(k,".uniform1i(",p,",",r,".bind());");c.exit(r,".unbind();");continue;case 5124:case 35670:l="1i";break;case 35667:case 35671:l="2i";m=2;break;case 35668:case 35672:l="3i";m=3;break;case 35669:case 35673:l=
	"4i";m=4;break;case 5126:l="1f";break;case 35664:l="2f";m=2;break;case 35665:l="3f";m=3;break;case 35666:l="4f";m=4;break;case 35674:l="Matrix2fv";break;case 35675:l="Matrix3fv";break;case 35676:l="Matrix4fv";}-1===l.indexOf("Matrix")&&1<t&&(l+="v",m=1);if("M"===l.charAt(0)){c(k,".uniform",l,"(",p,",");var p=Math.pow(r-35674+2,2),z=a.global.def("new Float32Array(",p,")");Array.isArray(v)?c("false,(",J(p,function(a){return z+"["+a+"]="+v[a]}),",",z,")"):c("false,(Array.isArray(",v,")||",v," instanceof Float32Array)?",
	v,":(",J(p,function(a){return z+"["+a+"]="+v+"["+a+"]"}),",",z,")");c(");");}else {if(1<m){for(var r=[],A=[],t=0;t<m;++t)Array.isArray(v)?A.push(v[t]):A.push(c.def(v+"["+t+"]")),g&&r.push(c.def());g&&c("if(!",a.batchId,"||",r.map(function(a,b){return a+"!=="+A[b]}).join("||"),"){",r.map(function(a,b){return a+"="+A[b]+";"}).join(""));c(k,".uniform",l,"(",p,",",A.join(","),");");}else g&&(r=c.def(),c("if(!",a.batchId,"||",r,"!==",v,"){",r,"=",v,";")),c(k,".uniform",l,"(",p,",",v,");");g&&c("}");}}}function U(a,
	b,c,d){function e(f){var g=n[f];return g?g.contextDep&&d.contextDynamic||g.propDep?g.append(a,c):g.append(a,b):b.def(l,".",f)}function f(){function a(){c(u,".drawElementsInstancedANGLE(",[q,r,v,p+"<<(("+v+"-5121)>>1)",t],");");}function b(){c(u,".drawArraysInstancedANGLE(",[q,p,r,t],");");}m&&"null"!==m?x?a():(c("if(",m,"){"),a(),c("}else{"),b(),c("}")):b();}function g(){function a(){c(k+".drawElements("+[q,r,v,p+"<<(("+v+"-5121)>>1)"]+");");}function b(){c(k+".drawArrays("+[q,p,r]+");");}m&&"null"!==
	m?x?a():(c("if(",m,"){"),a(),c("}else{"),b(),c("}")):b();}var h=a.shared,k=h.gl,l=h.draw,n=d.draw,m=function(){var e=n.elements,f=b;if(e){if(e.contextDep&&d.contextDynamic||e.propDep)f=c;e=e.append(a,f);n.elementsActive&&f("if("+e+")"+k+".bindBuffer(34963,"+e+".buffer.buffer);");}else e=f.def(),f(e,"=",l,".","elements",";","if(",e,"){",k,".bindBuffer(",34963,",",e,".buffer.buffer);}","else if(",h.vao,".currentVAO){",e,"=",a.shared.elements+".getElements("+h.vao,".currentVAO.elements);",oa?"":"if("+
	e+")"+k+".bindBuffer(34963,"+e+".buffer.buffer);","}");return e}(),q=e("primitive"),p=e("offset"),r=function(){var e=n.count,f=b;if(e){if(e.contextDep&&d.contextDynamic||e.propDep)f=c;e=e.append(a,f);}else e=f.def(l,".","count");return e}();if("number"===typeof r){if(0===r)return}else c("if(",r,"){"),c.exit("}");var t,u;T&&(t=e("instances"),u=a.instancing);var v=m+".type",x=n.elements&&ua(n.elements)&&!n.vaoActive;T&&("number"!==typeof t||0<=t)?"string"===typeof t?(c("if(",t,">0){"),f(),c("}else if(",
	t,"<0){"),g(),c("}")):f():g();}function ba(a,b,c,d,e){b=A();e=b.proc("body",e);T&&(b.instancing=e.def(b.shared.extensions,".angle_instanced_arrays"));a(b,e,c,d);return b.compile().body}function W(a,b,c,d){N(a,b);c.useVAO?c.drawVAO?b(a.shared.vao,".setVAO(",c.drawVAO.append(a,b),");"):b(a.shared.vao,".setVAO(",a.shared.vao,".targetVAO);"):(b(a.shared.vao,".setVAO(null);"),ga(a,b,c,d.attributes,function(){return !0}));R(a,b,c,d.uniforms,function(){return !0},!1);U(a,b,b,c);}function Da(a,b){var c=a.proc("draw",
	1);N(a,c);ha(a,c,b.context);Q(a,c,b.framebuffer);ya(a,c,b);P(a,c,b.state);G(a,c,b,!1,!0);var d=b.shader.progVar.append(a,c);c(a.shared.gl,".useProgram(",d,".program);");if(b.shader.program)W(a,c,b,b.shader.program);else {c(a.shared.vao,".setVAO(null);");var e=a.global.def("{}"),f=c.def(d,".id"),g=c.def(e,"[",f,"]");c(a.cond(g).then(g,".call(this,a0);")["else"](g,"=",e,"[",f,"]=",a.link(function(c){return ba(W,a,b,c,1)}),"(",d,");",g,".call(this,a0);"));}0<Object.keys(b.state).length&&c(a.shared.current,
	".dirty=true;");a.shared.vao&&c(a.shared.vao,".setVAO(null);");}function la(a,b,c,d){function e(){return !0}a.batchId="a1";N(a,b);ga(a,b,c,d.attributes,e);R(a,b,c,d.uniforms,e,!1);U(a,b,b,c);}function ma(a,b,c,d){function e(a){return a.contextDep&&g||a.propDep}function f(a){return !e(a)}N(a,b);var g=c.contextDep,h=b.def(),k=b.def();a.shared.props=k;a.batchId=h;var n=a.scope(),l=a.scope();b(n.entry,"for(",h,"=0;",h,"<","a1",";++",h,"){",k,"=","a0","[",h,"];",l,"}",n.exit);c.needsContext&&ha(a,l,c.context);
	c.needsFramebuffer&&Q(a,l,c.framebuffer);P(a,l,c.state,e);c.profile&&e(c.profile)&&G(a,l,c,!1,!0);d?(c.useVAO?c.drawVAO?e(c.drawVAO)?l(a.shared.vao,".setVAO(",c.drawVAO.append(a,l),");"):n(a.shared.vao,".setVAO(",c.drawVAO.append(a,n),");"):n(a.shared.vao,".setVAO(",a.shared.vao,".targetVAO);"):(n(a.shared.vao,".setVAO(null);"),ga(a,n,c,d.attributes,f),ga(a,l,c,d.attributes,e)),R(a,n,c,d.uniforms,f,!1),R(a,l,c,d.uniforms,e,!0),U(a,n,l,c)):(b=a.global.def("{}"),d=c.shader.progVar.append(a,l),k=l.def(d,
	".id"),n=l.def(b,"[",k,"]"),l(a.shared.gl,".useProgram(",d,".program);","if(!",n,"){",n,"=",b,"[",k,"]=",a.link(function(b){return ba(la,a,c,b,2)}),"(",d,");}",n,".call(this,a0[",h,"],",h,");"));}function x(a,b){function c(a){return a.contextDep&&e||a.propDep}var d=a.proc("batch",2);a.batchId="0";N(a,d);var e=!1,f=!0;Object.keys(b.context).forEach(function(a){e=e||b.context[a].propDep;});e||(ha(a,d,b.context),f=!1);var g=b.framebuffer,h=!1;g?(g.propDep?e=h=!0:g.contextDep&&e&&(h=!0),h||Q(a,d,g)):Q(a,
	d,null);b.state.viewport&&b.state.viewport.propDep&&(e=!0);ya(a,d,b);P(a,d,b.state,function(a){return !c(a)});b.profile&&c(b.profile)||G(a,d,b,!1,"a1");b.contextDep=e;b.needsContext=f;b.needsFramebuffer=h;f=b.shader.progVar;if(f.contextDep&&e||f.propDep)ma(a,d,b,null);else if(f=f.append(a,d),d(a.shared.gl,".useProgram(",f,".program);"),b.shader.program)ma(a,d,b,b.shader.program);else {d(a.shared.vao,".setVAO(null);");var g=a.global.def("{}"),h=d.def(f,".id"),k=d.def(g,"[",h,"]");d(a.cond(k).then(k,
	".call(this,a0,a1);")["else"](k,"=",g,"[",h,"]=",a.link(function(c){return ba(ma,a,b,c,2)}),"(",f,");",k,".call(this,a0,a1);"));}0<Object.keys(b.state).length&&d(a.shared.current,".dirty=true;");a.shared.vao&&d(a.shared.vao,".setVAO(null);");}function Z(a,c){function d(b){var g=c.shader[b];g&&e.set(f.shader,"."+b,g.append(a,e));}var e=a.proc("scope",3);a.batchId="a2";var f=a.shared,g=f.current;ha(a,e,c.context);c.framebuffer&&c.framebuffer.append(a,e);xb(Object.keys(c.state)).forEach(function(b){var d=
	c.state[b].append(a,e);na(d)?d.forEach(function(c,d){e.set(a.next[b],"["+d+"]",c);}):e.set(f.next,"."+b,d);});G(a,e,c,!0,!0);["elements","offset","count","instances","primitive"].forEach(function(b){var d=c.draw[b];d&&e.set(f.draw,"."+b,""+d.append(a,e));});Object.keys(c.uniforms).forEach(function(d){var g=c.uniforms[d].append(a,e);Array.isArray(g)&&(g="["+g.join()+"]");e.set(f.uniforms,"["+b.id(d)+"]",g);});Object.keys(c.attributes).forEach(function(b){var d=c.attributes[b].append(a,e),f=a.scopeAttrib(b);
	Object.keys(new ea).forEach(function(a){e.set(f,"."+a,d[a]);});});c.scopeVAO&&e.set(f.vao,".targetVAO",c.scopeVAO.append(a,e));d("vert");d("frag");0<Object.keys(c.state).length&&(e(g,".dirty=true;"),e.exit(g,".dirty=true;"));e("a1(",a.shared.context,",a0,",a.batchId,");");}function ja(a){if("object"===typeof a&&!na(a)){for(var b=Object.keys(a),c=0;c<b.length;++c)if(Y.isDynamic(a[b[c]]))return !0;return !1}}function ia(a,b,c){function d(a,b){g.forEach(function(c){var d=e[c];Y.isDynamic(d)&&(d=a.invoke(b,
	d),b(l,".",c,"=",d,";"));});}var e=b["static"][c];if(e&&ja(e)){var f=a.global,g=Object.keys(e),h=!1,k=!1,n=!1,l=a.global.def("{}");g.forEach(function(b){var c=e[b];if(Y.isDynamic(c))"function"===typeof c&&(c=e[b]=Y.unbox(c)),b=L(c,null),h=h||b.thisDep,n=n||b.propDep,k=k||b.contextDep;else {f(l,".",b,"=");switch(typeof c){case "number":f(c);break;case "string":f('"',c,'"');break;case "object":Array.isArray(c)&&f("[",c.join(),"]");break;default:f(a.link(c));}f(";");}});b.dynamic[c]=new Y.DynamicVariable(4,
	{thisDep:h,contextDep:k,propDep:n,ref:l,append:d});delete b["static"][c];}}var ea=m.Record,fa={add:32774,subtract:32778,"reverse subtract":32779};c.ext_blend_minmax&&(fa.min=32775,fa.max=32776);var T=c.angle_instanced_arrays,Ka=c.webgl_draw_buffers,oa=c.oes_vertex_array_object,qa={dirty:!0,profile:h.profile},Ca={},La=[],ra={},sa={};k("dither",3024);k("blend.enable",3042);l("blend.color","blendColor",[0,0,0,0]);l("blend.equation","blendEquationSeparate",[32774,32774]);l("blend.func","blendFuncSeparate",
	[1,0,1,0]);k("depth.enable",2929,!0);l("depth.func","depthFunc",513);l("depth.range","depthRange",[0,1]);l("depth.mask","depthMask",!0);l("colorMask","colorMask",[!0,!0,!0,!0]);k("cull.enable",2884);l("cull.face","cullFace",1029);l("frontFace","frontFace",2305);l("lineWidth","lineWidth",1);k("polygonOffset.enable",32823);l("polygonOffset.offset","polygonOffset",[0,0]);k("sample.alpha",32926);k("sample.enable",32928);l("sample.coverage","sampleCoverage",[1,!1]);k("stencil.enable",2960);l("stencil.mask",
	"stencilMask",-1);l("stencil.func","stencilFunc",[519,0,-1]);l("stencil.opFront","stencilOpSeparate",[1028,7680,7680,7680]);l("stencil.opBack","stencilOpSeparate",[1029,7680,7680,7680]);k("scissor.enable",3089);l("scissor.box","scissor",[0,0,a.drawingBufferWidth,a.drawingBufferHeight]);l("viewport","viewport",[0,0,a.drawingBufferWidth,a.drawingBufferHeight]);var rb={gl:a,context:z,strings:b,next:Ca,current:qa,draw:n,elements:d,buffer:f,shader:u,attributes:m.state,vao:m,uniforms:v,framebuffer:r,extensions:c,
	timer:q,isBufferArgs:Qa},Na={primTypes:Ia,compareFuncs:Za,blendFuncs:Ea,blendEquations:fa,stencilOps:Ra,glTypes:Ha,orientationType:yb};Ka&&(Na.backBuffer=[1029],Na.drawBuffer=J(e.maxDrawbuffers,function(a){return 0===a?[0]:J(a,function(a){return 36064+a})}));var pa=0;return {next:Ca,current:qa,procs:function(){var a=A(),b=a.proc("poll"),d=a.proc("refresh"),f=a.block();b(f);d(f);var g=a.shared,h=g.gl,k=g.next,n=g.current;f(n,".dirty=false;");Q(a,b);Q(a,d,null,!0);var l;T&&(l=a.link(T));c.oes_vertex_array_object&&
	d(a.link(c.oes_vertex_array_object),".bindVertexArrayOES(null);");for(var m=0;m<e.maxAttributes;++m){var q=d.def(g.attributes,"[",m,"]"),p=a.cond(q,".buffer");p.then(h,".enableVertexAttribArray(",m,");",h,".bindBuffer(",34962,",",q,".buffer.buffer);",h,".vertexAttribPointer(",m,",",q,".size,",q,".type,",q,".normalized,",q,".stride,",q,".offset);")["else"](h,".disableVertexAttribArray(",m,");",h,".vertexAttrib4f(",m,",",q,".x,",q,".y,",q,".z,",q,".w);",q,".buffer=null;");d(p);T&&d(l,".vertexAttribDivisorANGLE(",
	m,",",q,".divisor);");}d(a.shared.vao,".currentVAO=null;",a.shared.vao,".setVAO(",a.shared.vao,".targetVAO);");Object.keys(ra).forEach(function(c){var e=ra[c],g=f.def(k,".",c),l=a.block();l("if(",g,"){",h,".enable(",e,")}else{",h,".disable(",e,")}",n,".",c,"=",g,";");d(l);b("if(",g,"!==",n,".",c,"){",l,"}");});Object.keys(sa).forEach(function(c){var e=sa[c],g=qa[c],l,m,q=a.block();q(h,".",e,"(");na(g)?(e=g.length,l=a.global.def(k,".",c),m=a.global.def(n,".",c),q(J(e,function(a){return l+"["+a+"]"}),
	");",J(e,function(a){return m+"["+a+"]="+l+"["+a+"];"}).join("")),b("if(",J(e,function(a){return l+"["+a+"]!=="+m+"["+a+"]"}).join("||"),"){",q,"}")):(l=f.def(k,".",c),m=f.def(n,".",c),q(l,");",n,".",c,"=",l,";"),b("if(",l,"!==",m,"){",q,"}"));d(q);});return a.compile()}(),compile:function(a,b,c,d,e){var f=A();f.stats=f.link(e);Object.keys(b["static"]).forEach(function(a){ia(f,b,a);});Xb.forEach(function(b){ia(f,a,b);});var g=S(a,b,c,d,f);Da(f,g);Z(f,g);x(f,g);return F(f.compile(),{destroy:function(){g.shader.program.destroy();}})}}}
	function Ab(a,b){for(var c=0;c<a.length;++c)if(a[c]===b)return c;return -1}var F=function(a,b){for(var c=Object.keys(b),e=0;e<c.length;++e)a[c[e]]=b[c[e]];return a},Cb=0,Y={DynamicVariable:U,define:function(a,b){return new U(a,ab(b+""))},isDynamic:function(a){return "function"===typeof a&&!a._reglType||a instanceof U},unbox:bb,accessor:ab},$a={next:"function"===typeof requestAnimationFrame?function(a){return requestAnimationFrame(a)}:function(a){return setTimeout(a,16)},cancel:"function"===typeof cancelAnimationFrame?
	function(a){return cancelAnimationFrame(a)}:clearTimeout},Bb="undefined"!==typeof performance&&performance.now?function(){return performance.now()}:function(){return +new Date},D=fb();D.zero=fb();var Yb=function(a,b){var c=1;b.ext_texture_filter_anisotropic&&(c=a.getParameter(34047));var e=1,f=1;b.webgl_draw_buffers&&(e=a.getParameter(34852),f=a.getParameter(36063));var d=!!b.oes_texture_float;if(d){d=a.createTexture();a.bindTexture(3553,d);a.texImage2D(3553,0,6408,1,1,0,6408,5126,null);var p=a.createFramebuffer();
	a.bindFramebuffer(36160,p);a.framebufferTexture2D(36160,36064,3553,d,0);a.bindTexture(3553,null);if(36053!==a.checkFramebufferStatus(36160))d=!1;else {a.viewport(0,0,1,1);a.clearColor(1,0,0,1);a.clear(16384);var r=D.allocType(5126,4);a.readPixels(0,0,1,1,6408,5126,r);a.getError()?d=!1:(a.deleteFramebuffer(p),a.deleteTexture(d),d=1===r[0]);D.freeType(r);}}r=!0;"undefined"!==typeof navigator&&(/MSIE/.test(navigator.userAgent)||/Trident\//.test(navigator.appVersion)||/Edge/.test(navigator.userAgent))||
	(r=a.createTexture(),p=D.allocType(5121,36),a.activeTexture(33984),a.bindTexture(34067,r),a.texImage2D(34069,0,6408,3,3,0,6408,5121,p),D.freeType(p),a.bindTexture(34067,null),a.deleteTexture(r),r=!a.getError());return {colorBits:[a.getParameter(3410),a.getParameter(3411),a.getParameter(3412),a.getParameter(3413)],depthBits:a.getParameter(3414),stencilBits:a.getParameter(3415),subpixelBits:a.getParameter(3408),extensions:Object.keys(b).filter(function(a){return !!b[a]}),maxAnisotropic:c,maxDrawbuffers:e,
	maxColorAttachments:f,pointSizeDims:a.getParameter(33901),lineWidthDims:a.getParameter(33902),maxViewportDims:a.getParameter(3386),maxCombinedTextureUnits:a.getParameter(35661),maxCubeMapSize:a.getParameter(34076),maxRenderbufferSize:a.getParameter(34024),maxTextureUnits:a.getParameter(34930),maxTextureSize:a.getParameter(3379),maxAttributes:a.getParameter(34921),maxVertexUniforms:a.getParameter(36347),maxVertexTextureUnits:a.getParameter(35660),maxVaryingVectors:a.getParameter(36348),maxFragmentUniforms:a.getParameter(36349),
	glsl:a.getParameter(35724),renderer:a.getParameter(7937),vendor:a.getParameter(7936),version:a.getParameter(7938),readFloat:d,npotTextureCube:r}},K=function(a){return a instanceof Uint8Array||a instanceof Uint16Array||a instanceof Uint32Array||a instanceof Int8Array||a instanceof Int16Array||a instanceof Int32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof Uint8ClampedArray},S=function(a){return Object.keys(a).map(function(b){return a[b]})},Oa={shape:function(a){for(var b=
	[];a.length;a=a[0])b.push(a.length);return b},flatten:function(a,b,c,e){var f=1;if(b.length)for(var d=0;d<b.length;++d)f*=b[d];else f=0;c=e||D.allocType(c,f);switch(b.length){case 0:break;case 1:e=b[0];for(b=0;b<e;++b)c[b]=a[b];break;case 2:e=b[0];b=b[1];for(d=f=0;d<e;++d)for(var p=a[d],r=0;r<b;++r)c[f++]=p[r];break;case 3:gb(a,b[0],b[1],b[2],c,0);break;default:hb(a,b,0,c,0);}return c}},Ga={"[object Int8Array]":5120,"[object Int16Array]":5122,"[object Int32Array]":5124,"[object Uint8Array]":5121,"[object Uint8ClampedArray]":5121,
	"[object Uint16Array]":5123,"[object Uint32Array]":5125,"[object Float32Array]":5126,"[object Float64Array]":5121,"[object ArrayBuffer]":5121},Ha={int8:5120,int16:5122,int32:5124,uint8:5121,uint16:5123,uint32:5125,"float":5126,float32:5126},lb={dynamic:35048,stream:35040,"static":35044},Sa=Oa.flatten,kb=Oa.shape,ia=[];ia[5120]=1;ia[5122]=2;ia[5124]=4;ia[5121]=1;ia[5123]=2;ia[5125]=4;ia[5126]=4;var Ia={points:0,point:0,lines:1,line:1,triangles:4,triangle:4,"line loop":2,"line strip":3,"triangle strip":5,
	"triangle fan":6},nb=new Float32Array(1),Kb=new Uint32Array(nb.buffer),Ob=[9984,9986,9985,9987],Ma=[0,6409,6410,6407,6408],R={};R[6409]=R[6406]=R[6402]=1;R[34041]=R[6410]=2;R[6407]=R[35904]=3;R[6408]=R[35906]=4;var Va=oa("HTMLCanvasElement"),Wa=oa("OffscreenCanvas"),sb=oa("CanvasRenderingContext2D"),tb=oa("ImageBitmap"),ub=oa("HTMLImageElement"),vb=oa("HTMLVideoElement"),Lb=Object.keys(Ga).concat([Va,Wa,sb,tb,ub,vb]),pa=[];pa[5121]=1;pa[5126]=4;pa[36193]=2;pa[5123]=2;pa[5125]=4;var H=[];H[32854]=
	2;H[32855]=2;H[36194]=2;H[34041]=4;H[33776]=.5;H[33777]=.5;H[33778]=1;H[33779]=1;H[35986]=.5;H[35987]=1;H[34798]=1;H[35840]=.5;H[35841]=.25;H[35842]=.5;H[35843]=.25;H[36196]=.5;var P=[];P[32854]=2;P[32855]=2;P[36194]=2;P[33189]=2;P[36168]=1;P[34041]=4;P[35056]=4;P[35907]=4;P[34836]=16;P[34842]=8;P[34843]=6;var Zb=function(a,b,c,e,f){function d(a){this.id=m++;this.refCount=1;this.renderbuffer=a;this.format=32854;this.height=this.width=0;f.profile&&(this.stats={size:0});}function p(b){var c=b.renderbuffer;
	a.bindRenderbuffer(36161,null);a.deleteRenderbuffer(c);b.renderbuffer=null;b.refCount=0;delete u[b.id];e.renderbufferCount--;}var r={rgba4:32854,rgba8:32856,rgb565:36194,"rgb5 a1":32855,depth:33189,stencil:36168,"depth stencil":34041,"depth24 stencil8":35056};b.ext_srgb&&(r.srgba=35907);b.ext_color_buffer_half_float&&(r.rgba16f=34842,r.rgb16f=34843);b.webgl_color_buffer_float&&(r.rgba32f=34836);var v=[];Object.keys(r).forEach(function(a){v[r[a]]=a;});var m=0,u={};d.prototype.decRef=function(){0>=--this.refCount&&
	p(this);};f.profile&&(e.getTotalRenderbufferSize=function(){var a=0;Object.keys(u).forEach(function(b){a+=u[b].stats.size;});return a});return {create:function(b,c){function m(b,c){var d=0,e=0,n=32854,p=0;"object"===typeof b&&b?("shape"in b?(e=b.shape,d=e[0]|0,e=e[1]|0):("radius"in b&&(d=e=b.radius|0),"width"in b&&(d=b.width|0),"height"in b&&(e=b.height|0)),"format"in b&&(n=r[b.format]),"samples"in b&&(p=b.samples)):"number"===typeof b?(d=b|0,e="number"===typeof c?c|0:d):b||(d=e=1);if(d!==h.width||e!==
	h.height||n!==h.format)return m.width=h.width=d,m.height=h.height=e,m.samples=p,h.format=n,h.samples=p,a.bindRenderbuffer(36161,h.renderbuffer),p&&a.renderbufferStorageMultisample?a.renderbufferStorageMultisample(36161,p,n,d,e):a.renderbufferStorage(36161,n,d,e),f.profile&&(h.stats.size=P[h.format]*h.width*h.height),m.format=v[h.format],m}var h=new d(a.createRenderbuffer());u[h.id]=h;e.renderbufferCount++;m(b,c);m.resize=function(b,c){var d=b|0,e=c|0||d;if(d===h.width&&e===h.height)return m;m.width=
	h.width=d;m.height=h.height=e;var n=m.samples;a.bindRenderbuffer(36161,h.renderbuffer);n&&a.renderbufferStorageMultisample?a.renderbufferStorageMultisample(36161,n,h.format,d,e):a.renderbufferStorage(36161,h.format,d,e);f.profile&&(h.stats.size=P[h.format]*h.width*h.height);return m};m._reglType="renderbuffer";m._renderbuffer=h;f.profile&&(m.stats=h.stats);m.destroy=function(){h.decRef();};return m},clear:function(){S(u).forEach(p);},restore:function(){S(u).forEach(function(b){b.renderbuffer=a.createRenderbuffer();
	a.bindRenderbuffer(36161,b.renderbuffer);b.samples&&a.renderbufferStorageMultisample?a.renderbufferStorageMultisample(36161,b.samples,b.format,b.width,b.height):a.renderbufferStorage(36161,b.format,b.width,b.height);});a.bindRenderbuffer(36161,null);}}},Xa=[];Xa[6408]=4;Xa[6407]=3;var Pa=[];Pa[5121]=1;Pa[5126]=4;Pa[36193]=2;var Ba=["x","y","z","w"],Xb="blend.func blend.equation stencil.func stencil.opFront stencil.opBack sample.coverage viewport scissor.box polygonOffset.offset".split(" "),Ea={0:0,
	1:1,zero:0,one:1,"src color":768,"one minus src color":769,"src alpha":770,"one minus src alpha":771,"dst color":774,"one minus dst color":775,"dst alpha":772,"one minus dst alpha":773,"constant color":32769,"one minus constant color":32770,"constant alpha":32771,"one minus constant alpha":32772,"src alpha saturate":776},Za={never:512,less:513,"<":513,equal:514,"=":514,"==":514,"===":514,lequal:515,"<=":515,greater:516,">":516,notequal:517,"!=":517,"!==":517,gequal:518,">=":518,always:519},Ra={0:0,
	zero:0,keep:7680,replace:7681,increment:7682,decrement:7683,"increment wrap":34055,"decrement wrap":34056,invert:5386},yb={cw:2304,ccw:2305},zb=new I(!1,!1,!1,function(){}),$b=function(a,b){function c(){this.endQueryIndex=this.startQueryIndex=-1;this.sum=0;this.stats=null;}function e(a,b,d){var e=p.pop()||new c;e.startQueryIndex=a;e.endQueryIndex=b;e.sum=0;e.stats=d;r.push(e);}if(!b.ext_disjoint_timer_query)return null;var f=[],d=[],p=[],r=[],v=[],m=[];return {beginQuery:function(a){var c=f.pop()||b.ext_disjoint_timer_query.createQueryEXT();
	b.ext_disjoint_timer_query.beginQueryEXT(35007,c);d.push(c);e(d.length-1,d.length,a);},endQuery:function(){b.ext_disjoint_timer_query.endQueryEXT(35007);},pushScopeStats:e,update:function(){var a,c;a=d.length;if(0!==a){m.length=Math.max(m.length,a+1);v.length=Math.max(v.length,a+1);v[0]=0;var e=m[0]=0;for(c=a=0;c<d.length;++c){var q=d[c];b.ext_disjoint_timer_query.getQueryObjectEXT(q,34919)?(e+=b.ext_disjoint_timer_query.getQueryObjectEXT(q,34918),f.push(q)):d[a++]=q;v[c+1]=e;m[c+1]=a;}d.length=a;for(c=
	a=0;c<r.length;++c){var e=r[c],h=e.startQueryIndex,q=e.endQueryIndex;e.sum+=v[q]-v[h];h=m[h];q=m[q];q===h?(e.stats.gpuTime+=e.sum/1E6,p.push(e)):(e.startQueryIndex=h,e.endQueryIndex=q,r[a++]=e);}r.length=a;}},getNumPendingQueries:function(){return d.length},clear:function(){f.push.apply(f,d);for(var a=0;a<f.length;a++)b.ext_disjoint_timer_query.deleteQueryEXT(f[a]);d.length=0;f.length=0;},restore:function(){d.length=0;f.length=0;}}};return function(a){function b(){if(0===G.length)t&&t.update(),ba=null;
	else {ba=$a.next(b);u();for(var a=G.length-1;0<=a;--a){var c=G[a];c&&c(C,null,0);}q.flush();t&&t.update();}}function c(){!ba&&0<G.length&&(ba=$a.next(b));}function e(){ba&&($a.cancel(b),ba=null);}function f(a){a.preventDefault();e();S.forEach(function(a){a();});}function d(a){q.getError();g.restore();y.restore();E.restore();K.restore();P.restore();Q.restore();L.restore();t&&t.restore();J.procs.refresh();c();U.forEach(function(a){a();});}function p(a){function b(a,c){var d={},e={};Object.keys(a).forEach(function(b){var f=
	a[b];if(Y.isDynamic(f))e[b]=Y.unbox(f,b);else {if(c&&Array.isArray(f))for(var g=0;g<f.length;++g)if(Y.isDynamic(f[g])){e[b]=Y.unbox(f,b);return}d[b]=f;}});return {dynamic:e,"static":d}}function c(a){for(;n.length<a;)n.push(null);return n}var d=b(a.context||{},!0),e=b(a.uniforms||{},!0),f=b(a.attributes||{},!1);a=b(function(a){function b(a){if(a in c){var d=c[a];delete c[a];Object.keys(d).forEach(function(b){c[a+"."+b]=d[b];});}}var c=F({},a);delete c.uniforms;delete c.attributes;delete c.context;delete c.vao;
	"stencil"in c&&c.stencil.op&&(c.stencil.opBack=c.stencil.opFront=c.stencil.op,delete c.stencil.op);b("blend");b("depth");b("cull");b("stencil");b("polygonOffset");b("scissor");b("sample");"vao"in a&&(c.vao=a.vao);return c}(a),!1);var g={gpuTime:0,cpuTime:0,count:0},h=J.compile(a,f,e,d,g),k=h.draw,l=h.batch,m=h.scope,n=[];return F(function(a,b){var d;if("function"===typeof a)return m.call(this,null,a,0);if("function"===typeof b)if("number"===typeof a)for(d=0;d<a;++d)m.call(this,null,b,d);else if(Array.isArray(a))for(d=
	0;d<a.length;++d)m.call(this,a[d],b,d);else return m.call(this,a,b,0);else if("number"===typeof a){if(0<a)return l.call(this,c(a|0),a|0)}else if(Array.isArray(a)){if(a.length)return l.call(this,a,a.length)}else return k.call(this,a)},{stats:g,destroy:function(){h.destroy();}})}function r(a,b){var c=0;J.procs.poll();var d=b.color;d&&(q.clearColor(+d[0]||0,+d[1]||0,+d[2]||0,+d[3]||0),c|=16384);"depth"in b&&(q.clearDepth(+b.depth),c|=256);"stencil"in b&&(q.clearStencil(b.stencil|0),c|=1024);q.clear(c);}
	function v(a){G.push(a);c();return {cancel:function(){function b(){var a=Ab(G,b);G[a]=G[G.length-1];--G.length;0>=G.length&&e();}var c=Ab(G,a);G[c]=b;}}}function m(){var a=R.viewport,b=R.scissor_box;a[0]=a[1]=b[0]=b[1]=0;C.viewportWidth=C.framebufferWidth=C.drawingBufferWidth=a[2]=b[2]=q.drawingBufferWidth;C.viewportHeight=C.framebufferHeight=C.drawingBufferHeight=a[3]=b[3]=q.drawingBufferHeight;}function u(){C.tick+=1;C.time=z();m();J.procs.poll();}function n(){K.refresh();m();J.procs.refresh();t&&t.update();}
	function z(){return (Bb()-B)/1E3}a=Gb(a);if(!a)return null;var q=a.gl,h=q.getContextAttributes();q.isContextLost();var g=Hb(q,a);if(!g)return null;var k=Db(),l={vaoCount:0,bufferCount:0,elementsCount:0,framebufferCount:0,shaderCount:0,textureCount:0,cubeCount:0,renderbufferCount:0,maxTextureUnits:0},A=g.extensions,t=$b(q,A),B=Bb(),D=q.drawingBufferWidth,H=q.drawingBufferHeight,C={tick:0,time:0,viewportWidth:D,viewportHeight:H,framebufferWidth:D,framebufferHeight:H,drawingBufferWidth:D,drawingBufferHeight:H,
	pixelRatio:a.pixelRatio},D={elements:null,primitive:4,count:-1,offset:0,instances:-1},M=Yb(q,A),E=Ib(q,l,a,function(a){return L.destroyBuffer(a)}),I=Jb(q,A,E,l),L=Rb(q,A,M,l,E,I,D),y=Sb(q,k,l,a),K=Mb(q,A,M,function(){J.procs.poll();},C,l,a),P=Zb(q,A,M,l,a),Q=Qb(q,A,M,K,P,l),J=Vb(q,k,A,M,E,I,K,Q,{},L,y,D,C,t,a),k=Tb(q,Q,J.procs.poll,C),R=J.next,N=q.canvas,G=[],S=[],U=[],W=[a.onDestroy],ba=null;N&&(N.addEventListener("webglcontextlost",f,!1),N.addEventListener("webglcontextrestored",d,!1));var Z=
	Q.setFBO=p({framebuffer:Y.define.call(null,1,"framebuffer")});n();h=F(p,{clear:function(a){if("framebuffer"in a)if(a.framebuffer&&"framebufferCube"===a.framebuffer_reglType)for(var b=0;6>b;++b)Z(F({framebuffer:a.framebuffer.faces[b]},a),r);else Z(a,r);else r(null,a);},prop:Y.define.bind(null,1),context:Y.define.bind(null,2),"this":Y.define.bind(null,3),draw:p({}),buffer:function(a){return E.create(a,34962,!1,!1)},elements:function(a){return I.create(a,!1)},texture:K.create2D,cube:K.createCube,renderbuffer:P.create,
	framebuffer:Q.create,framebufferCube:Q.createCube,vao:L.createVAO,attributes:h,frame:v,on:function(a,b){var c;switch(a){case "frame":return v(b);case "lost":c=S;break;case "restore":c=U;break;case "destroy":c=W;}c.push(b);return {cancel:function(){for(var a=0;a<c.length;++a)if(c[a]===b){c[a]=c[c.length-1];c.pop();break}}}},limits:M,hasExtension:function(a){return 0<=M.extensions.indexOf(a.toLowerCase())},read:k,destroy:function(){G.length=0;e();N&&(N.removeEventListener("webglcontextlost",f),N.removeEventListener("webglcontextrestored",
	d));y.clear();Q.clear();P.clear();L.clear();K.clear();I.clear();E.clear();t&&t.clear();W.forEach(function(a){a();});},_gl:q,_refresh:n,poll:function(){u();t&&t.update();},now:z,stats:l,blit:Q.blit});a.onDone(null,h);return h}});
	}(regl_min));

	var m$2 = regl_min.exports;

	/**
	 * Common utilities
	 * @module glMatrix
	 */

	// Configuration Constants
	var EPSILON = 0.000001;
	var ARRAY_TYPE = typeof Float32Array !== 'undefined' ? Float32Array : Array;
	var RANDOM = Math.random;

	/**
	 * Sets the type of array used when creating new vectors and matrices
	 *
	 * @param {Type} type Array type, such as Float32Array or Array
	 */
	function setMatrixArrayType(type) {
	  ARRAY_TYPE = type;
	}

	var degree = Math.PI / 180;

	/**
	 * Convert Degree To Radian
	 *
	 * @param {Number} a Angle in Degrees
	 */
	function toRadian(a) {
	  return a * degree;
	}

	/**
	 * Tests whether or not the arguments have approximately the same value, within an absolute
	 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
	 * than or equal to 1.0, and a relative tolerance is used for larger values)
	 *
	 * @param {Number} a The first number to test.
	 * @param {Number} b The second number to test.
	 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
	 */
	function equals$9(a, b) {
	  return Math.abs(a - b) <= EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
	}

	var common = /*#__PURE__*/Object.freeze({
		__proto__: null,
		EPSILON: EPSILON,
		get ARRAY_TYPE () { return ARRAY_TYPE; },
		RANDOM: RANDOM,
		setMatrixArrayType: setMatrixArrayType,
		toRadian: toRadian,
		equals: equals$9
	});

	/**
	 * 2x2 Matrix
	 * @module mat2
	 */

	/**
	 * Creates a new identity mat2
	 *
	 * @returns {mat2} a new 2x2 matrix
	 */
	function create$8() {
	  var out = new ARRAY_TYPE(4);
	  if (ARRAY_TYPE != Float32Array) {
	    out[1] = 0;
	    out[2] = 0;
	  }
	  out[0] = 1;
	  out[3] = 1;
	  return out;
	}

	/**
	 * Creates a new mat2 initialized with values from an existing matrix
	 *
	 * @param {mat2} a matrix to clone
	 * @returns {mat2} a new 2x2 matrix
	 */
	function clone$8(a) {
	  var out = new ARRAY_TYPE(4);
	  out[0] = a[0];
	  out[1] = a[1];
	  out[2] = a[2];
	  out[3] = a[3];
	  return out;
	}

	/**
	 * Copy the values from one mat2 to another
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the source matrix
	 * @returns {mat2} out
	 */
	function copy$8(out, a) {
	  out[0] = a[0];
	  out[1] = a[1];
	  out[2] = a[2];
	  out[3] = a[3];
	  return out;
	}

	/**
	 * Set a mat2 to the identity matrix
	 *
	 * @param {mat2} out the receiving matrix
	 * @returns {mat2} out
	 */
	function identity$5(out) {
	  out[0] = 1;
	  out[1] = 0;
	  out[2] = 0;
	  out[3] = 1;
	  return out;
	}

	/**
	 * Create a new mat2 with the given values
	 *
	 * @param {Number} m00 Component in column 0, row 0 position (index 0)
	 * @param {Number} m01 Component in column 0, row 1 position (index 1)
	 * @param {Number} m10 Component in column 1, row 0 position (index 2)
	 * @param {Number} m11 Component in column 1, row 1 position (index 3)
	 * @returns {mat2} out A new 2x2 matrix
	 */
	function fromValues$8(m00, m01, m10, m11) {
	  var out = new ARRAY_TYPE(4);
	  out[0] = m00;
	  out[1] = m01;
	  out[2] = m10;
	  out[3] = m11;
	  return out;
	}

	/**
	 * Set the components of a mat2 to the given values
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {Number} m00 Component in column 0, row 0 position (index 0)
	 * @param {Number} m01 Component in column 0, row 1 position (index 1)
	 * @param {Number} m10 Component in column 1, row 0 position (index 2)
	 * @param {Number} m11 Component in column 1, row 1 position (index 3)
	 * @returns {mat2} out
	 */
	function set$8(out, m00, m01, m10, m11) {
	  out[0] = m00;
	  out[1] = m01;
	  out[2] = m10;
	  out[3] = m11;
	  return out;
	}

	/**
	 * Transpose the values of a mat2
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the source matrix
	 * @returns {mat2} out
	 */
	function transpose$2(out, a) {
	  // If we are transposing ourselves we can skip a few steps but have to cache
	  // some values
	  if (out === a) {
	    var a1 = a[1];
	    out[1] = a[2];
	    out[2] = a1;
	  } else {
	    out[0] = a[0];
	    out[1] = a[2];
	    out[2] = a[1];
	    out[3] = a[3];
	  }

	  return out;
	}

	/**
	 * Inverts a mat2
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the source matrix
	 * @returns {mat2} out
	 */
	function invert$5(out, a) {
	  var a0 = a[0],
	      a1 = a[1],
	      a2 = a[2],
	      a3 = a[3];

	  // Calculate the determinant
	  var det = a0 * a3 - a2 * a1;

	  if (!det) {
	    return null;
	  }
	  det = 1.0 / det;

	  out[0] = a3 * det;
	  out[1] = -a1 * det;
	  out[2] = -a2 * det;
	  out[3] = a0 * det;

	  return out;
	}

	/**
	 * Calculates the adjugate of a mat2
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the source matrix
	 * @returns {mat2} out
	 */
	function adjoint$2(out, a) {
	  // Caching this value is nessecary if out == a
	  var a0 = a[0];
	  out[0] = a[3];
	  out[1] = -a[1];
	  out[2] = -a[2];
	  out[3] = a0;

	  return out;
	}

	/**
	 * Calculates the determinant of a mat2
	 *
	 * @param {mat2} a the source matrix
	 * @returns {Number} determinant of a
	 */
	function determinant$3(a) {
	  return a[0] * a[3] - a[2] * a[1];
	}

	/**
	 * Multiplies two mat2's
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the first operand
	 * @param {mat2} b the second operand
	 * @returns {mat2} out
	 */
	function multiply$8(out, a, b) {
	  var a0 = a[0],
	      a1 = a[1],
	      a2 = a[2],
	      a3 = a[3];
	  var b0 = b[0],
	      b1 = b[1],
	      b2 = b[2],
	      b3 = b[3];
	  out[0] = a0 * b0 + a2 * b1;
	  out[1] = a1 * b0 + a3 * b1;
	  out[2] = a0 * b2 + a2 * b3;
	  out[3] = a1 * b2 + a3 * b3;
	  return out;
	}

	/**
	 * Rotates a mat2 by the given angle
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat2} out
	 */
	function rotate$4(out, a, rad) {
	  var a0 = a[0],
	      a1 = a[1],
	      a2 = a[2],
	      a3 = a[3];
	  var s = Math.sin(rad);
	  var c = Math.cos(rad);
	  out[0] = a0 * c + a2 * s;
	  out[1] = a1 * c + a3 * s;
	  out[2] = a0 * -s + a2 * c;
	  out[3] = a1 * -s + a3 * c;
	  return out;
	}

	/**
	 * Scales the mat2 by the dimensions in the given vec2
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the matrix to rotate
	 * @param {vec2} v the vec2 to scale the matrix by
	 * @returns {mat2} out
	 **/
	function scale$8(out, a, v) {
	  var a0 = a[0],
	      a1 = a[1],
	      a2 = a[2],
	      a3 = a[3];
	  var v0 = v[0],
	      v1 = v[1];
	  out[0] = a0 * v0;
	  out[1] = a1 * v0;
	  out[2] = a2 * v1;
	  out[3] = a3 * v1;
	  return out;
	}

	/**
	 * Creates a matrix from a given angle
	 * This is equivalent to (but much faster than):
	 *
	 *     mat2.identity(dest);
	 *     mat2.rotate(dest, dest, rad);
	 *
	 * @param {mat2} out mat2 receiving operation result
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat2} out
	 */
	function fromRotation$4(out, rad) {
	  var s = Math.sin(rad);
	  var c = Math.cos(rad);
	  out[0] = c;
	  out[1] = s;
	  out[2] = -s;
	  out[3] = c;
	  return out;
	}

	/**
	 * Creates a matrix from a vector scaling
	 * This is equivalent to (but much faster than):
	 *
	 *     mat2.identity(dest);
	 *     mat2.scale(dest, dest, vec);
	 *
	 * @param {mat2} out mat2 receiving operation result
	 * @param {vec2} v Scaling vector
	 * @returns {mat2} out
	 */
	function fromScaling$3(out, v) {
	  out[0] = v[0];
	  out[1] = 0;
	  out[2] = 0;
	  out[3] = v[1];
	  return out;
	}

	/**
	 * Returns a string representation of a mat2
	 *
	 * @param {mat2} a matrix to represent as a string
	 * @returns {String} string representation of the matrix
	 */
	function str$8(a) {
	  return 'mat2(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
	}

	/**
	 * Returns Frobenius norm of a mat2
	 *
	 * @param {mat2} a the matrix to calculate Frobenius norm of
	 * @returns {Number} Frobenius norm
	 */
	function frob$3(a) {
	  return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2));
	}

	/**
	 * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
	 * @param {mat2} L the lower triangular matrix
	 * @param {mat2} D the diagonal matrix
	 * @param {mat2} U the upper triangular matrix
	 * @param {mat2} a the input matrix to factorize
	 */

	function LDU(L, D, U, a) {
	  L[2] = a[2] / a[0];
	  U[0] = a[0];
	  U[1] = a[1];
	  U[3] = a[3] - L[2] * U[1];
	  return [L, D, U];
	}

	/**
	 * Adds two mat2's
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the first operand
	 * @param {mat2} b the second operand
	 * @returns {mat2} out
	 */
	function add$8(out, a, b) {
	  out[0] = a[0] + b[0];
	  out[1] = a[1] + b[1];
	  out[2] = a[2] + b[2];
	  out[3] = a[3] + b[3];
	  return out;
	}

	/**
	 * Subtracts matrix b from matrix a
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the first operand
	 * @param {mat2} b the second operand
	 * @returns {mat2} out
	 */
	function subtract$6(out, a, b) {
	  out[0] = a[0] - b[0];
	  out[1] = a[1] - b[1];
	  out[2] = a[2] - b[2];
	  out[3] = a[3] - b[3];
	  return out;
	}

	/**
	 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
	 *
	 * @param {mat2} a The first matrix.
	 * @param {mat2} b The second matrix.
	 * @returns {Boolean} True if the matrices are equal, false otherwise.
	 */
	function exactEquals$8(a, b) {
	  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
	}

	/**
	 * Returns whether or not the matrices have approximately the same elements in the same position.
	 *
	 * @param {mat2} a The first matrix.
	 * @param {mat2} b The second matrix.
	 * @returns {Boolean} True if the matrices are equal, false otherwise.
	 */
	function equals$8(a, b) {
	  var a0 = a[0],
	      a1 = a[1],
	      a2 = a[2],
	      a3 = a[3];
	  var b0 = b[0],
	      b1 = b[1],
	      b2 = b[2],
	      b3 = b[3];
	  return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3));
	}

	/**
	 * Multiply each element of the matrix by a scalar.
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the matrix to scale
	 * @param {Number} b amount to scale the matrix's elements by
	 * @returns {mat2} out
	 */
	function multiplyScalar$3(out, a, b) {
	  out[0] = a[0] * b;
	  out[1] = a[1] * b;
	  out[2] = a[2] * b;
	  out[3] = a[3] * b;
	  return out;
	}

	/**
	 * Adds two mat2's after multiplying each element of the second operand by a scalar value.
	 *
	 * @param {mat2} out the receiving vector
	 * @param {mat2} a the first operand
	 * @param {mat2} b the second operand
	 * @param {Number} scale the amount to scale b's elements by before adding
	 * @returns {mat2} out
	 */
	function multiplyScalarAndAdd$3(out, a, b, scale) {
	  out[0] = a[0] + b[0] * scale;
	  out[1] = a[1] + b[1] * scale;
	  out[2] = a[2] + b[2] * scale;
	  out[3] = a[3] + b[3] * scale;
	  return out;
	}

	/**
	 * Alias for {@link mat2.multiply}
	 * @function
	 */
	var mul$8 = multiply$8;

	/**
	 * Alias for {@link mat2.subtract}
	 * @function
	 */
	var sub$6 = subtract$6;

	var mat2 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		create: create$8,
		clone: clone$8,
		copy: copy$8,
		identity: identity$5,
		fromValues: fromValues$8,
		set: set$8,
		transpose: transpose$2,
		invert: invert$5,
		adjoint: adjoint$2,
		determinant: determinant$3,
		multiply: multiply$8,
		rotate: rotate$4,
		scale: scale$8,
		fromRotation: fromRotation$4,
		fromScaling: fromScaling$3,
		str: str$8,
		frob: frob$3,
		LDU: LDU,
		add: add$8,
		subtract: subtract$6,
		exactEquals: exactEquals$8,
		equals: equals$8,
		multiplyScalar: multiplyScalar$3,
		multiplyScalarAndAdd: multiplyScalarAndAdd$3,
		mul: mul$8,
		sub: sub$6
	});

	/**
	 * 2x3 Matrix
	 * @module mat2d
	 *
	 * @description
	 * A mat2d contains six elements defined as:
	 * <pre>
	 * [a, c, tx,
	 *  b, d, ty]
	 * </pre>
	 * This is a short form for the 3x3 matrix:
	 * <pre>
	 * [a, c, tx,
	 *  b, d, ty,
	 *  0, 0, 1]
	 * </pre>
	 * The last row is ignored so the array is shorter and operations are faster.
	 */

	/**
	 * Creates a new identity mat2d
	 *
	 * @returns {mat2d} a new 2x3 matrix
	 */
	function create$7() {
	  var out = new ARRAY_TYPE(6);
	  if (ARRAY_TYPE != Float32Array) {
	    out[1] = 0;
	    out[2] = 0;
	    out[4] = 0;
	    out[5] = 0;
	  }
	  out[0] = 1;
	  out[3] = 1;
	  return out;
	}

	/**
	 * Creates a new mat2d initialized with values from an existing matrix
	 *
	 * @param {mat2d} a matrix to clone
	 * @returns {mat2d} a new 2x3 matrix
	 */
	function clone$7(a) {
	  var out = new ARRAY_TYPE(6);
	  out[0] = a[0];
	  out[1] = a[1];
	  out[2] = a[2];
	  out[3] = a[3];
	  out[4] = a[4];
	  out[5] = a[5];
	  return out;
	}

	/**
	 * Copy the values from one mat2d to another
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {mat2d} a the source matrix
	 * @returns {mat2d} out
	 */
	function copy$7(out, a) {
	  out[0] = a[0];
	  out[1] = a[1];
	  out[2] = a[2];
	  out[3] = a[3];
	  out[4] = a[4];
	  out[5] = a[5];
	  return out;
	}

	/**
	 * Set a mat2d to the identity matrix
	 *
	 * @param {mat2d} out the receiving matrix
	 * @returns {mat2d} out
	 */
	function identity$4(out) {
	  out[0] = 1;
	  out[1] = 0;
	  out[2] = 0;
	  out[3] = 1;
	  out[4] = 0;
	  out[5] = 0;
	  return out;
	}

	/**
	 * Create a new mat2d with the given values
	 *
	 * @param {Number} a Component A (index 0)
	 * @param {Number} b Component B (index 1)
	 * @param {Number} c Component C (index 2)
	 * @param {Number} d Component D (index 3)
	 * @param {Number} tx Component TX (index 4)
	 * @param {Number} ty Component TY (index 5)
	 * @returns {mat2d} A new mat2d
	 */
	function fromValues$7(a, b, c, d, tx, ty) {
	  var out = new ARRAY_TYPE(6);
	  out[0] = a;
	  out[1] = b;
	  out[2] = c;
	  out[3] = d;
	  out[4] = tx;
	  out[5] = ty;
	  return out;
	}

	/**
	 * Set the components of a mat2d to the given values
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {Number} a Component A (index 0)
	 * @param {Number} b Component B (index 1)
	 * @param {Number} c Component C (index 2)
	 * @param {Number} d Component D (index 3)
	 * @param {Number} tx Component TX (index 4)
	 * @param {Number} ty Component TY (index 5)
	 * @returns {mat2d} out
	 */
	function set$7(out, a, b, c, d, tx, ty) {
	  out[0] = a;
	  out[1] = b;
	  out[2] = c;
	  out[3] = d;
	  out[4] = tx;
	  out[5] = ty;
	  return out;
	}

	/**
	 * Inverts a mat2d
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {mat2d} a the source matrix
	 * @returns {mat2d} out
	 */
	function invert$4(out, a) {
	  var aa = a[0],
	      ab = a[1],
	      ac = a[2],
	      ad = a[3];
	  var atx = a[4],
	      aty = a[5];

	  var det = aa * ad - ab * ac;
	  if (!det) {
	    return null;
	  }
	  det = 1.0 / det;

	  out[0] = ad * det;
	  out[1] = -ab * det;
	  out[2] = -ac * det;
	  out[3] = aa * det;
	  out[4] = (ac * aty - ad * atx) * det;
	  out[5] = (ab * atx - aa * aty) * det;
	  return out;
	}

	/**
	 * Calculates the determinant of a mat2d
	 *
	 * @param {mat2d} a the source matrix
	 * @returns {Number} determinant of a
	 */
	function determinant$2(a) {
	  return a[0] * a[3] - a[1] * a[2];
	}

	/**
	 * Multiplies two mat2d's
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {mat2d} a the first operand
	 * @param {mat2d} b the second operand
	 * @returns {mat2d} out
	 */
	function multiply$7(out, a, b) {
	  var a0 = a[0],
	      a1 = a[1],
	      a2 = a[2],
	      a3 = a[3],
	      a4 = a[4],
	      a5 = a[5];
	  var b0 = b[0],
	      b1 = b[1],
	      b2 = b[2],
	      b3 = b[3],
	      b4 = b[4],
	      b5 = b[5];
	  out[0] = a0 * b0 + a2 * b1;
	  out[1] = a1 * b0 + a3 * b1;
	  out[2] = a0 * b2 + a2 * b3;
	  out[3] = a1 * b2 + a3 * b3;
	  out[4] = a0 * b4 + a2 * b5 + a4;
	  out[5] = a1 * b4 + a3 * b5 + a5;
	  return out;
	}

	/**
	 * Rotates a mat2d by the given angle
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {mat2d} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat2d} out
	 */
	function rotate$3(out, a, rad) {
	  var a0 = a[0],
	      a1 = a[1],
	      a2 = a[2],
	      a3 = a[3],
	      a4 = a[4],
	      a5 = a[5];
	  var s = Math.sin(rad);
	  var c = Math.cos(rad);
	  out[0] = a0 * c + a2 * s;
	  out[1] = a1 * c + a3 * s;
	  out[2] = a0 * -s + a2 * c;
	  out[3] = a1 * -s + a3 * c;
	  out[4] = a4;
	  out[5] = a5;
	  return out;
	}

	/**
	 * Scales the mat2d by the dimensions in the given vec2
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {mat2d} a the matrix to translate
	 * @param {vec2} v the vec2 to scale the matrix by
	 * @returns {mat2d} out
	 **/
	function scale$7(out, a, v) {
	  var a0 = a[0],
	      a1 = a[1],
	      a2 = a[2],
	      a3 = a[3],
	      a4 = a[4],
	      a5 = a[5];
	  var v0 = v[0],
	      v1 = v[1];
	  out[0] = a0 * v0;
	  out[1] = a1 * v0;
	  out[2] = a2 * v1;
	  out[3] = a3 * v1;
	  out[4] = a4;
	  out[5] = a5;
	  return out;
	}

	/**
	 * Translates the mat2d by the dimensions in the given vec2
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {mat2d} a the matrix to translate
	 * @param {vec2} v the vec2 to translate the matrix by
	 * @returns {mat2d} out
	 **/
	function translate$3(out, a, v) {
	  var a0 = a[0],
	      a1 = a[1],
	      a2 = a[2],
	      a3 = a[3],
	      a4 = a[4],
	      a5 = a[5];
	  var v0 = v[0],
	      v1 = v[1];
	  out[0] = a0;
	  out[1] = a1;
	  out[2] = a2;
	  out[3] = a3;
	  out[4] = a0 * v0 + a2 * v1 + a4;
	  out[5] = a1 * v0 + a3 * v1 + a5;
	  return out;
	}

	/**
	 * Creates a matrix from a given angle
	 * This is equivalent to (but much faster than):
	 *
	 *     mat2d.identity(dest);
	 *     mat2d.rotate(dest, dest, rad);
	 *
	 * @param {mat2d} out mat2d receiving operation result
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat2d} out
	 */
	function fromRotation$3(out, rad) {
	  var s = Math.sin(rad),
	      c = Math.cos(rad);
	  out[0] = c;
	  out[1] = s;
	  out[2] = -s;
	  out[3] = c;
	  out[4] = 0;
	  out[5] = 0;
	  return out;
	}

	/**
	 * Creates a matrix from a vector scaling
	 * This is equivalent to (but much faster than):
	 *
	 *     mat2d.identity(dest);
	 *     mat2d.scale(dest, dest, vec);
	 *
	 * @param {mat2d} out mat2d receiving operation result
	 * @param {vec2} v Scaling vector
	 * @returns {mat2d} out
	 */
	function fromScaling$2(out, v) {
	  out[0] = v[0];
	  out[1] = 0;
	  out[2] = 0;
	  out[3] = v[1];
	  out[4] = 0;
	  out[5] = 0;
	  return out;
	}

	/**
	 * Creates a matrix from a vector translation
	 * This is equivalent to (but much faster than):
	 *
	 *     mat2d.identity(dest);
	 *     mat2d.translate(dest, dest, vec);
	 *
	 * @param {mat2d} out mat2d receiving operation result
	 * @param {vec2} v Translation vector
	 * @returns {mat2d} out
	 */
	function fromTranslation$3(out, v) {
	  out[0] = 1;
	  out[1] = 0;
	  out[2] = 0;
	  out[3] = 1;
	  out[4] = v[0];
	  out[5] = v[1];
	  return out;
	}

	/**
	 * Returns a string representation of a mat2d
	 *
	 * @param {mat2d} a matrix to represent as a string
	 * @returns {String} string representation of the matrix
	 */
	function str$7(a) {
	  return 'mat2d(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ')';
	}

	/**
	 * Returns Frobenius norm of a mat2d
	 *
	 * @param {mat2d} a the matrix to calculate Frobenius norm of
	 * @returns {Number} Frobenius norm
	 */
	function frob$2(a) {
	  return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + 1);
	}

	/**
	 * Adds two mat2d's
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {mat2d} a the first operand
	 * @param {mat2d} b the second operand
	 * @returns {mat2d} out
	 */
	function add$7(out, a, b) {
	  out[0] = a[0] + b[0];
	  out[1] = a[1] + b[1];
	  out[2] = a[2] + b[2];
	  out[3] = a[3] + b[3];
	  out[4] = a[4] + b[4];
	  out[5] = a[5] + b[5];
	  return out;
	}

	/**
	 * Subtracts matrix b from matrix a
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {mat2d} a the first operand
	 * @param {mat2d} b the second operand
	 * @returns {mat2d} out
	 */
	function subtract$5(out, a, b) {
	  out[0] = a[0] - b[0];
	  out[1] = a[1] - b[1];
	  out[2] = a[2] - b[2];
	  out[3] = a[3] - b[3];
	  out[4] = a[4] - b[4];
	  out[5] = a[5] - b[5];
	  return out;
	}

	/**
	 * Multiply each element of the matrix by a scalar.
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {mat2d} a the matrix to scale
	 * @param {Number} b amount to scale the matrix's elements by
	 * @returns {mat2d} out
	 */
	function multiplyScalar$2(out, a, b) {
	  out[0] = a[0] * b;
	  out[1] = a[1] * b;
	  out[2] = a[2] * b;
	  out[3] = a[3] * b;
	  out[4] = a[4] * b;
	  out[5] = a[5] * b;
	  return out;
	}

	/**
	 * Adds two mat2d's after multiplying each element of the second operand by a scalar value.
	 *
	 * @param {mat2d} out the receiving vector
	 * @param {mat2d} a the first operand
	 * @param {mat2d} b the second operand
	 * @param {Number} scale the amount to scale b's elements by before adding
	 * @returns {mat2d} out
	 */
	function multiplyScalarAndAdd$2(out, a, b, scale) {
	  out[0] = a[0] + b[0] * scale;
	  out[1] = a[1] + b[1] * scale;
	  out[2] = a[2] + b[2] * scale;
	  out[3] = a[3] + b[3] * scale;
	  out[4] = a[4] + b[4] * scale;
	  out[5] = a[5] + b[5] * scale;
	  return out;
	}

	/**
	 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
	 *
	 * @param {mat2d} a The first matrix.
	 * @param {mat2d} b The second matrix.
	 * @returns {Boolean} True if the matrices are equal, false otherwise.
	 */
	function exactEquals$7(a, b) {
	  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5];
	}

	/**
	 * Returns whether or not the matrices have approximately the same elements in the same position.
	 *
	 * @param {mat2d} a The first matrix.
	 * @param {mat2d} b The second matrix.
	 * @returns {Boolean} True if the matrices are equal, false otherwise.
	 */
	function equals$7(a, b) {
	  var a0 = a[0],
	      a1 = a[1],
	      a2 = a[2],
	      a3 = a[3],
	      a4 = a[4],
	      a5 = a[5];
	  var b0 = b[0],
	      b1 = b[1],
	      b2 = b[2],
	      b3 = b[3],
	      b4 = b[4],
	      b5 = b[5];
	  return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5));
	}

	/**
	 * Alias for {@link mat2d.multiply}
	 * @function
	 */
	var mul$7 = multiply$7;

	/**
	 * Alias for {@link mat2d.subtract}
	 * @function
	 */
	var sub$5 = subtract$5;

	var mat2d = /*#__PURE__*/Object.freeze({
		__proto__: null,
		create: create$7,
		clone: clone$7,
		copy: copy$7,
		identity: identity$4,
		fromValues: fromValues$7,
		set: set$7,
		invert: invert$4,
		determinant: determinant$2,
		multiply: multiply$7,
		rotate: rotate$3,
		scale: scale$7,
		translate: translate$3,
		fromRotation: fromRotation$3,
		fromScaling: fromScaling$2,
		fromTranslation: fromTranslation$3,
		str: str$7,
		frob: frob$2,
		add: add$7,
		subtract: subtract$5,
		multiplyScalar: multiplyScalar$2,
		multiplyScalarAndAdd: multiplyScalarAndAdd$2,
		exactEquals: exactEquals$7,
		equals: equals$7,
		mul: mul$7,
		sub: sub$5
	});

	/**
	 * 3x3 Matrix
	 * @module mat3
	 */

	/**
	 * Creates a new identity mat3
	 *
	 * @returns {mat3} a new 3x3 matrix
	 */
	function create$6() {
	  var out = new ARRAY_TYPE(9);
	  if (ARRAY_TYPE != Float32Array) {
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[5] = 0;
	    out[6] = 0;
	    out[7] = 0;
	  }
	  out[0] = 1;
	  out[4] = 1;
	  out[8] = 1;
	  return out;
	}

	/**
	 * Copies the upper-left 3x3 values into the given mat3.
	 *
	 * @param {mat3} out the receiving 3x3 matrix
	 * @param {mat4} a   the source 4x4 matrix
	 * @returns {mat3} out
	 */
	function fromMat4$1(out, a) {
	  out[0] = a[0];
	  out[1] = a[1];
	  out[2] = a[2];
	  out[3] = a[4];
	  out[4] = a[5];
	  out[5] = a[6];
	  out[6] = a[8];
	  out[7] = a[9];
	  out[8] = a[10];
	  return out;
	}

	/**
	 * Creates a new mat3 initialized with values from an existing matrix
	 *
	 * @param {mat3} a matrix to clone
	 * @returns {mat3} a new 3x3 matrix
	 */
	function clone$6(a) {
	  var out = new ARRAY_TYPE(9);
	  out[0] = a[0];
	  out[1] = a[1];
	  out[2] = a[2];
	  out[3] = a[3];
	  out[4] = a[4];
	  out[5] = a[5];
	  out[6] = a[6];
	  out[7] = a[7];
	  out[8] = a[8];
	  return out;
	}

	/**
	 * Copy the values from one mat3 to another
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the source matrix
	 * @returns {mat3} out
	 */
	function copy$6(out, a) {
	  out[0] = a[0];
	  out[1] = a[1];
	  out[2] = a[2];
	  out[3] = a[3];
	  out[4] = a[4];
	  out[5] = a[5];
	  out[6] = a[6];
	  out[7] = a[7];
	  out[8] = a[8];
	  return out;
	}

	/**
	 * Create a new mat3 with the given values
	 *
	 * @param {Number} m00 Component in column 0, row 0 position (index 0)
	 * @param {Number} m01 Component in column 0, row 1 position (index 1)
	 * @param {Number} m02 Component in column 0, row 2 position (index 2)
	 * @param {Number} m10 Component in column 1, row 0 position (index 3)
	 * @param {Number} m11 Component in column 1, row 1 position (index 4)
	 * @param {Number} m12 Component in column 1, row 2 position (index 5)
	 * @param {Number} m20 Component in column 2, row 0 position (index 6)
	 * @param {Number} m21 Component in column 2, row 1 position (index 7)
	 * @param {Number} m22 Component in column 2, row 2 position (index 8)
	 * @returns {mat3} A new mat3
	 */
	function fromValues$6(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
	  var out = new ARRAY_TYPE(9);
	  out[0] = m00;
	  out[1] = m01;
	  out[2] = m02;
	  out[3] = m10;
	  out[4] = m11;
	  out[5] = m12;
	  out[6] = m20;
	  out[7] = m21;
	  out[8] = m22;
	  return out;
	}

	/**
	 * Set the components of a mat3 to the given values
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {Number} m00 Component in column 0, row 0 position (index 0)
	 * @param {Number} m01 Component in column 0, row 1 position (index 1)
	 * @param {Number} m02 Component in column 0, row 2 position (index 2)
	 * @param {Number} m10 Component in column 1, row 0 position (index 3)
	 * @param {Number} m11 Component in column 1, row 1 position (index 4)
	 * @param {Number} m12 Component in column 1, row 2 position (index 5)
	 * @param {Number} m20 Component in column 2, row 0 position (index 6)
	 * @param {Number} m21 Component in column 2, row 1 position (index 7)
	 * @param {Number} m22 Component in column 2, row 2 position (index 8)
	 * @returns {mat3} out
	 */
	function set$6(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
	  out[0] = m00;
	  out[1] = m01;
	  out[2] = m02;
	  out[3] = m10;
	  out[4] = m11;
	  out[5] = m12;
	  out[6] = m20;
	  out[7] = m21;
	  out[8] = m22;
	  return out;
	}

	/**
	 * Set a mat3 to the identity matrix
	 *
	 * @param {mat3} out the receiving matrix
	 * @returns {mat3} out
	 */
	function identity$3(out) {
	  out[0] = 1;
	  out[1] = 0;
	  out[2] = 0;
	  out[3] = 0;
	  out[4] = 1;
	  out[5] = 0;
	  out[6] = 0;
	  out[7] = 0;
	  out[8] = 1;
	  return out;
	}

	/**
	 * Transpose the values of a mat3
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the source matrix
	 * @returns {mat3} out
	 */
	function transpose$1(out, a) {
	  // If we are transposing ourselves we can skip a few steps but have to cache some values
	  if (out === a) {
	    var a01 = a[1],
	        a02 = a[2],
	        a12 = a[5];
	    out[1] = a[3];
	    out[2] = a[6];
	    out[3] = a01;
	    out[5] = a[7];
	    out[6] = a02;
	    out[7] = a12;
	  } else {
	    out[0] = a[0];
	    out[1] = a[3];
	    out[2] = a[6];
	    out[3] = a[1];
	    out[4] = a[4];
	    out[5] = a[7];
	    out[6] = a[2];
	    out[7] = a[5];
	    out[8] = a[8];
	  }

	  return out;
	}

	/**
	 * Inverts a mat3
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the source matrix
	 * @returns {mat3} out
	 */
	function invert$3(out, a) {
	  var a00 = a[0],
	      a01 = a[1],
	      a02 = a[2];
	  var a10 = a[3],
	      a11 = a[4],
	      a12 = a[5];
	  var a20 = a[6],
	      a21 = a[7],
	      a22 = a[8];

	  var b01 = a22 * a11 - a12 * a21;
	  var b11 = -a22 * a10 + a12 * a20;
	  var b21 = a21 * a10 - a11 * a20;

	  // Calculate the determinant
	  var det = a00 * b01 + a01 * b11 + a02 * b21;

	  if (!det) {
	    return null;
	  }
	  det = 1.0 / det;

	  out[0] = b01 * det;
	  out[1] = (-a22 * a01 + a02 * a21) * det;
	  out[2] = (a12 * a01 - a02 * a11) * det;
	  out[3] = b11 * det;
	  out[4] = (a22 * a00 - a02 * a20) * det;
	  out[5] = (-a12 * a00 + a02 * a10) * det;
	  out[6] = b21 * det;
	  out[7] = (-a21 * a00 + a01 * a20) * det;
	  out[8] = (a11 * a00 - a01 * a10) * det;
	  return out;
	}

	/**
	 * Calculates the adjugate of a mat3
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the source matrix
	 * @returns {mat3} out
	 */
	function adjoint$1(out, a) {
	  var a00 = a[0],
	      a01 = a[1],
	      a02 = a[2];
	  var a10 = a[3],
	      a11 = a[4],
	      a12 = a[5];
	  var a20 = a[6],
	      a21 = a[7],
	      a22 = a[8];

	  out[0] = a11 * a22 - a12 * a21;
	  out[1] = a02 * a21 - a01 * a22;
	  out[2] = a01 * a12 - a02 * a11;
	  out[3] = a12 * a20 - a10 * a22;
	  out[4] = a00 * a22 - a02 * a20;
	  out[5] = a02 * a10 - a00 * a12;
	  out[6] = a10 * a21 - a11 * a20;
	  out[7] = a01 * a20 - a00 * a21;
	  out[8] = a00 * a11 - a01 * a10;
	  return out;
	}

	/**
	 * Calculates the determinant of a mat3
	 *
	 * @param {mat3} a the source matrix
	 * @returns {Number} determinant of a
	 */
	function determinant$1(a) {
	  var a00 = a[0],
	      a01 = a[1],
	      a02 = a[2];
	  var a10 = a[3],
	      a11 = a[4],
	      a12 = a[5];
	  var a20 = a[6],
	      a21 = a[7],
	      a22 = a[8];

	  return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
	}

	/**
	 * Multiplies two mat3's
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the first operand
	 * @param {mat3} b the second operand
	 * @returns {mat3} out
	 */
	function multiply$6(out, a, b) {
	  var a00 = a[0],
	      a01 = a[1],
	      a02 = a[2];
	  var a10 = a[3],
	      a11 = a[4],
	      a12 = a[5];
	  var a20 = a[6],
	      a21 = a[7],
	      a22 = a[8];

	  var b00 = b[0],
	      b01 = b[1],
	      b02 = b[2];
	  var b10 = b[3],
	      b11 = b[4],
	      b12 = b[5];
	  var b20 = b[6],
	      b21 = b[7],
	      b22 = b[8];

	  out[0] = b00 * a00 + b01 * a10 + b02 * a20;
	  out[1] = b00 * a01 + b01 * a11 + b02 * a21;
	  out[2] = b00 * a02 + b01 * a12 + b02 * a22;

	  out[3] = b10 * a00 + b11 * a10 + b12 * a20;
	  out[4] = b10 * a01 + b11 * a11 + b12 * a21;
	  out[5] = b10 * a02 + b11 * a12 + b12 * a22;

	  out[6] = b20 * a00 + b21 * a10 + b22 * a20;
	  out[7] = b20 * a01 + b21 * a11 + b22 * a21;
	  out[8] = b20 * a02 + b21 * a12 + b22 * a22;
	  return out;
	}

	/**
	 * Translate a mat3 by the given vector
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the matrix to translate
	 * @param {vec2} v vector to translate by
	 * @returns {mat3} out
	 */
	function translate$2(out, a, v) {
	  var a00 = a[0],
	      a01 = a[1],
	      a02 = a[2],
	      a10 = a[3],
	      a11 = a[4],
	      a12 = a[5],
	      a20 = a[6],
	      a21 = a[7],
	      a22 = a[8],
	      x = v[0],
	      y = v[1];

	  out[0] = a00;
	  out[1] = a01;
	  out[2] = a02;

	  out[3] = a10;
	  out[4] = a11;
	  out[5] = a12;

	  out[6] = x * a00 + y * a10 + a20;
	  out[7] = x * a01 + y * a11 + a21;
	  out[8] = x * a02 + y * a12 + a22;
	  return out;
	}

	/**
	 * Rotates a mat3 by the given angle
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat3} out
	 */
	function rotate$2(out, a, rad) {
	  var a00 = a[0],
	      a01 = a[1],
	      a02 = a[2],
	      a10 = a[3],
	      a11 = a[4],
	      a12 = a[5],
	      a20 = a[6],
	      a21 = a[7],
	      a22 = a[8],
	      s = Math.sin(rad),
	      c = Math.cos(rad);

	  out[0] = c * a00 + s * a10;
	  out[1] = c * a01 + s * a11;
	  out[2] = c * a02 + s * a12;

	  out[3] = c * a10 - s * a00;
	  out[4] = c * a11 - s * a01;
	  out[5] = c * a12 - s * a02;

	  out[6] = a20;
	  out[7] = a21;
	  out[8] = a22;
	  return out;
	}
	/**
	 * Scales the mat3 by the dimensions in the given vec2
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the matrix to rotate
	 * @param {vec2} v the vec2 to scale the matrix by
	 * @returns {mat3} out
	 **/
	function scale$6(out, a, v) {
	  var x = v[0],
	      y = v[1];

	  out[0] = x * a[0];
	  out[1] = x * a[1];
	  out[2] = x * a[2];

	  out[3] = y * a[3];
	  out[4] = y * a[4];
	  out[5] = y * a[5];

	  out[6] = a[6];
	  out[7] = a[7];
	  out[8] = a[8];
	  return out;
	}

	/**
	 * Creates a matrix from a vector translation
	 * This is equivalent to (but much faster than):
	 *
	 *     mat3.identity(dest);
	 *     mat3.translate(dest, dest, vec);
	 *
	 * @param {mat3} out mat3 receiving operation result
	 * @param {vec2} v Translation vector
	 * @returns {mat3} out
	 */
	function fromTranslation$2(out, v) {
	  out[0] = 1;
	  out[1] = 0;
	  out[2] = 0;
	  out[3] = 0;
	  out[4] = 1;
	  out[5] = 0;
	  out[6] = v[0];
	  out[7] = v[1];
	  out[8] = 1;
	  return out;
	}

	/**
	 * Creates a matrix from a given angle
	 * This is equivalent to (but much faster than):
	 *
	 *     mat3.identity(dest);
	 *     mat3.rotate(dest, dest, rad);
	 *
	 * @param {mat3} out mat3 receiving operation result
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat3} out
	 */
	function fromRotation$2(out, rad) {
	  var s = Math.sin(rad),
	      c = Math.cos(rad);

	  out[0] = c;
	  out[1] = s;
	  out[2] = 0;

	  out[3] = -s;
	  out[4] = c;
	  out[5] = 0;

	  out[6] = 0;
	  out[7] = 0;
	  out[8] = 1;
	  return out;
	}

	/**
	 * Creates a matrix from a vector scaling
	 * This is equivalent to (but much faster than):
	 *
	 *     mat3.identity(dest);
	 *     mat3.scale(dest, dest, vec);
	 *
	 * @param {mat3} out mat3 receiving operation result
	 * @param {vec2} v Scaling vector
	 * @returns {mat3} out
	 */
	function fromScaling$1(out, v) {
	  out[0] = v[0];
	  out[1] = 0;
	  out[2] = 0;

	  out[3] = 0;
	  out[4] = v[1];
	  out[5] = 0;

	  out[6] = 0;
	  out[7] = 0;
	  out[8] = 1;
	  return out;
	}

	/**
	 * Copies the values from a mat2d into a mat3
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat2d} a the matrix to copy
	 * @returns {mat3} out
	 **/
	function fromMat2d(out, a) {
	  out[0] = a[0];
	  out[1] = a[1];
	  out[2] = 0;

	  out[3] = a[2];
	  out[4] = a[3];
	  out[5] = 0;

	  out[6] = a[4];
	  out[7] = a[5];
	  out[8] = 1;
	  return out;
	}

	/**
	* Calculates a 3x3 matrix from the given quaternion
	*
	* @param {mat3} out mat3 receiving operation result
	* @param {quat} q Quaternion to create matrix from
	*
	* @returns {mat3} out
	*/
	function fromQuat$1(out, q) {
	  var x = q[0],
	      y = q[1],
	      z = q[2],
	      w = q[3];
	  var x2 = x + x;
	  var y2 = y + y;
	  var z2 = z + z;

	  var xx = x * x2;
	  var yx = y * x2;
	  var yy = y * y2;
	  var zx = z * x2;
	  var zy = z * y2;
	  var zz = z * z2;
	  var wx = w * x2;
	  var wy = w * y2;
	  var wz = w * z2;

	  out[0] = 1 - yy - zz;
	  out[3] = yx - wz;
	  out[6] = zx + wy;

	  out[1] = yx + wz;
	  out[4] = 1 - xx - zz;
	  out[7] = zy - wx;

	  out[2] = zx - wy;
	  out[5] = zy + wx;
	  out[8] = 1 - xx - yy;

	  return out;
	}

	/**
	* Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
	*
	* @param {mat3} out mat3 receiving operation result
	* @param {mat4} a Mat4 to derive the normal matrix from
	*
	* @returns {mat3} out
	*/
	function normalFromMat4(out, a) {
	  var a00 = a[0],
	      a01 = a[1],
	      a02 = a[2],
	      a03 = a[3];
	  var a10 = a[4],
	      a11 = a[5],
	      a12 = a[6],
	      a13 = a[7];
	  var a20 = a[8],
	      a21 = a[9],
	      a22 = a[10],
	      a23 = a[11];
	  var a30 = a[12],
	      a31 = a[13],
	      a32 = a[14],
	      a33 = a[15];

	  var b00 = a00 * a11 - a01 * a10;
	  var b01 = a00 * a12 - a02 * a10;
	  var b02 = a00 * a13 - a03 * a10;
	  var b03 = a01 * a12 - a02 * a11;
	  var b04 = a01 * a13 - a03 * a11;
	  var b05 = a02 * a13 - a03 * a12;
	  var b06 = a20 * a31 - a21 * a30;
	  var b07 = a20 * a32 - a22 * a30;
	  var b08 = a20 * a33 - a23 * a30;
	  var b09 = a21 * a32 - a22 * a31;
	  var b10 = a21 * a33 - a23 * a31;
	  var b11 = a22 * a33 - a23 * a32;

	  // Calculate the determinant
	  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

	  if (!det) {
	    return null;
	  }
	  det = 1.0 / det;

	  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
	  out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
	  out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;

	  out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
	  out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
	  out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;

	  out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
	  out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
	  out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;

	  return out;
	}

	/**
	 * Generates a 2D projection matrix with the given bounds
	 *
	 * @param {mat3} out mat3 frustum matrix will be written into
	 * @param {number} width Width of your gl context
	 * @param {number} height Height of gl context
	 * @returns {mat3} out
	 */
	function projection(out, width, height) {
	  out[0] = 2 / width;
	  out[1] = 0;
	  out[2] = 0;
	  out[3] = 0;
	  out[4] = -2 / height;
	  out[5] = 0;
	  out[6] = -1;
	  out[7] = 1;
	  out[8] = 1;
	  return out;
	}

	/**
	 * Returns a string representation of a mat3
	 *
	 * @param {mat3} a matrix to represent as a string
	 * @returns {String} string representation of the matrix
	 */
	function str$6(a) {
	  return 'mat3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' + a[8] + ')';
	}

	/**
	 * Returns Frobenius norm of a mat3
	 *
	 * @param {mat3} a the matrix to calculate Frobenius norm of
	 * @returns {Number} Frobenius norm
	 */
	function frob$1(a) {
	  return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2));
	}

	/**
	 * Adds two mat3's
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the first operand
	 * @param {mat3} b the second operand
	 * @returns {mat3} out
	 */
	function add$6(out, a, b) {
	  out[0] = a[0] + b[0];
	  out[1] = a[1] + b[1];
	  out[2] = a[2] + b[2];
	  out[3] = a[3] + b[3];
	  out[4] = a[4] + b[4];
	  out[5] = a[5] + b[5];
	  out[6] = a[6] + b[6];
	  out[7] = a[7] + b[7];
	  out[8] = a[8] + b[8];
	  return out;
	}

	/**
	 * Subtracts matrix b from matrix a
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the first operand
	 * @param {mat3} b the second operand
	 * @returns {mat3} out
	 */
	function subtract$4(out, a, b) {
	  out[0] = a[0] - b[0];
	  out[1] = a[1] - b[1];
	  out[2] = a[2] - b[2];
	  out[3] = a[3] - b[3];
	  out[4] = a[4] - b[4];
	  out[5] = a[5] - b[5];
	  out[6] = a[6] - b[6];
	  out[7] = a[7] - b[7];
	  out[8] = a[8] - b[8];
	  return out;
	}

	/**
	 * Multiply each element of the matrix by a scalar.
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the matrix to scale
	 * @param {Number} b amount to scale the matrix's elements by
	 * @returns {mat3} out
	 */
	function multiplyScalar$1(out, a, b) {
	  out[0] = a[0] * b;
	  out[1] = a[1] * b;
	  out[2] = a[2] * b;
	  out[3] = a[3] * b;
	  out[4] = a[4] * b;
	  out[5] = a[5] * b;
	  out[6] = a[6] * b;
	  out[7] = a[7] * b;
	  out[8] = a[8] * b;
	  return out;
	}

	/**
	 * Adds two mat3's after multiplying each element of the second operand by a scalar value.
	 *
	 * @param {mat3} out the receiving vector
	 * @param {mat3} a the first operand
	 * @param {mat3} b the second operand
	 * @param {Number} scale the amount to scale b's elements by before adding
	 * @returns {mat3} out
	 */
	function multiplyScalarAndAdd$1(out, a, b, scale) {
	  out[0] = a[0] + b[0] * scale;
	  out[1] = a[1] + b[1] * scale;
	  out[2] = a[2] + b[2] * scale;
	  out[3] = a[3] + b[3] * scale;
	  out[4] = a[4] + b[4] * scale;
	  out[5] = a[5] + b[5] * scale;
	  out[6] = a[6] + b[6] * scale;
	  out[7] = a[7] + b[7] * scale;
	  out[8] = a[8] + b[8] * scale;
	  return out;
	}

	/**
	 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
	 *
	 * @param {mat3} a The first matrix.
	 * @param {mat3} b The second matrix.
	 * @returns {Boolean} True if the matrices are equal, false otherwise.
	 */
	function exactEquals$6(a, b) {
	  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
	}

	/**
	 * Returns whether or not the matrices have approximately the same elements in the same position.
	 *
	 * @param {mat3} a The first matrix.
	 * @param {mat3} b The second matrix.
	 * @returns {Boolean} True if the matrices are equal, false otherwise.
	 */
	function equals$6(a, b) {
	  var a0 = a[0],
	      a1 = a[1],
	      a2 = a[2],
	      a3 = a[3],
	      a4 = a[4],
	      a5 = a[5],
	      a6 = a[6],
	      a7 = a[7],
	      a8 = a[8];
	  var b0 = b[0],
	      b1 = b[1],
	      b2 = b[2],
	      b3 = b[3],
	      b4 = b[4],
	      b5 = b[5],
	      b6 = b[6],
	      b7 = b[7],
	      b8 = b[8];
	  return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8));
	}

	/**
	 * Alias for {@link mat3.multiply}
	 * @function
	 */
	var mul$6 = multiply$6;

	/**
	 * Alias for {@link mat3.subtract}
	 * @function
	 */
	var sub$4 = subtract$4;

	var mat3 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		create: create$6,
		fromMat4: fromMat4$1,
		clone: clone$6,
		copy: copy$6,
		fromValues: fromValues$6,
		set: set$6,
		identity: identity$3,
		transpose: transpose$1,
		invert: invert$3,
		adjoint: adjoint$1,
		determinant: determinant$1,
		multiply: multiply$6,
		translate: translate$2,
		rotate: rotate$2,
		scale: scale$6,
		fromTranslation: fromTranslation$2,
		fromRotation: fromRotation$2,
		fromScaling: fromScaling$1,
		fromMat2d: fromMat2d,
		fromQuat: fromQuat$1,
		normalFromMat4: normalFromMat4,
		projection: projection,
		str: str$6,
		frob: frob$1,
		add: add$6,
		subtract: subtract$4,
		multiplyScalar: multiplyScalar$1,
		multiplyScalarAndAdd: multiplyScalarAndAdd$1,
		exactEquals: exactEquals$6,
		equals: equals$6,
		mul: mul$6,
		sub: sub$4
	});

	/**
	 * 4x4 Matrix<br>Format: column-major, when typed out it looks like row-major<br>The matrices are being post multiplied.
	 * @module mat4
	 */

	/**
	 * Creates a new identity mat4
	 *
	 * @returns {mat4} a new 4x4 matrix
	 */
	function create$5() {
	  var out = new ARRAY_TYPE(16);
	  if (ARRAY_TYPE != Float32Array) {
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 0;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 0;
	    out[9] = 0;
	    out[11] = 0;
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = 0;
	  }
	  out[0] = 1;
	  out[5] = 1;
	  out[10] = 1;
	  out[15] = 1;
	  return out;
	}

	/**
	 * Creates a new mat4 initialized with values from an existing matrix
	 *
	 * @param {mat4} a matrix to clone
	 * @returns {mat4} a new 4x4 matrix
	 */
	function clone$5(a) {
	  var out = new ARRAY_TYPE(16);
	  out[0] = a[0];
	  out[1] = a[1];
	  out[2] = a[2];
	  out[3] = a[3];
	  out[4] = a[4];
	  out[5] = a[5];
	  out[6] = a[6];
	  out[7] = a[7];
	  out[8] = a[8];
	  out[9] = a[9];
	  out[10] = a[10];
	  out[11] = a[11];
	  out[12] = a[12];
	  out[13] = a[13];
	  out[14] = a[14];
	  out[15] = a[15];
	  return out;
	}

	/**
	 * Copy the values from one mat4 to another
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the source matrix
	 * @returns {mat4} out
	 */
	function copy$5(out, a) {
	  out[0] = a[0];
	  out[1] = a[1];
	  out[2] = a[2];
	  out[3] = a[3];
	  out[4] = a[4];
	  out[5] = a[5];
	  out[6] = a[6];
	  out[7] = a[7];
	  out[8] = a[8];
	  out[9] = a[9];
	  out[10] = a[10];
	  out[11] = a[11];
	  out[12] = a[12];
	  out[13] = a[13];
	  out[14] = a[14];
	  out[15] = a[15];
	  return out;
	}

	/**
	 * Create a new mat4 with the given values
	 *
	 * @param {Number} m00 Component in column 0, row 0 position (index 0)
	 * @param {Number} m01 Component in column 0, row 1 position (index 1)
	 * @param {Number} m02 Component in column 0, row 2 position (index 2)
	 * @param {Number} m03 Component in column 0, row 3 position (index 3)
	 * @param {Number} m10 Component in column 1, row 0 position (index 4)
	 * @param {Number} m11 Component in column 1, row 1 position (index 5)
	 * @param {Number} m12 Component in column 1, row 2 position (index 6)
	 * @param {Number} m13 Component in column 1, row 3 position (index 7)
	 * @param {Number} m20 Component in column 2, row 0 position (index 8)
	 * @param {Number} m21 Component in column 2, row 1 position (index 9)
	 * @param {Number} m22 Component in column 2, row 2 position (index 10)
	 * @param {Number} m23 Component in column 2, row 3 position (index 11)
	 * @param {Number} m30 Component in column 3, row 0 position (index 12)
	 * @param {Number} m31 Component in column 3, row 1 position (index 13)
	 * @param {Number} m32 Component in column 3, row 2 position (index 14)
	 * @param {Number} m33 Component in column 3, row 3 position (index 15)
	 * @returns {mat4} A new mat4
	 */
	function fromValues$5(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
	  var out = new ARRAY_TYPE(16);
	  out[0] = m00;
	  out[1] = m01;
	  out[2] = m02;
	  out[3] = m03;
	  out[4] = m10;
	  out[5] = m11;
	  out[6] = m12;
	  out[7] = m13;
	  out[8] = m20;
	  out[9] = m21;
	  out[10] = m22;
	  out[11] = m23;
	  out[12] = m30;
	  out[13] = m31;
	  out[14] = m32;
	  out[15] = m33;
	  return out;
	}

	/**
	 * Set the components of a mat4 to the given values
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {Number} m00 Component in column 0, row 0 position (index 0)
	 * @param {Number} m01 Component in column 0, row 1 position (index 1)
	 * @param {Number} m02 Component in column 0, row 2 position (index 2)
	 * @param {Number} m03 Component in column 0, row 3 position (index 3)
	 * @param {Number} m10 Component in column 1, row 0 position (index 4)
	 * @param {Number} m11 Component in column 1, row 1 position (index 5)
	 * @param {Number} m12 Component in column 1, row 2 position (index 6)
	 * @param {Number} m13 Component in column 1, row 3 position (index 7)
	 * @param {Number} m20 Component in column 2, row 0 position (index 8)
	 * @param {Number} m21 Component in column 2, row 1 position (index 9)
	 * @param {Number} m22 Component in column 2, row 2 position (index 10)
	 * @param {Number} m23 Component in column 2, row 3 position (index 11)
	 * @param {Number} m30 Component in column 3, row 0 position (index 12)
	 * @param {Number} m31 Component in column 3, row 1 position (index 13)
	 * @param {Number} m32 Component in column 3, row 2 position (index 14)
	 * @param {Number} m33 Component in column 3, row 3 position (index 15)
	 * @returns {mat4} out
	 */
	function set$5(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
	  out[0] = m00;
	  out[1] = m01;
	  out[2] = m02;
	  out[3] = m03;
	  out[4] = m10;
	  out[5] = m11;
	  out[6] = m12;
	  out[7] = m13;
	  out[8] = m20;
	  out[9] = m21;
	  out[10] = m22;
	  out[11] = m23;
	  out[12] = m30;
	  out[13] = m31;
	  out[14] = m32;
	  out[15] = m33;
	  return out;
	}

	/**
	 * Set a mat4 to the identity matrix
	 *
	 * @param {mat4} out the receiving matrix
	 * @returns {mat4} out
	 */
	function identity$2(out) {
	  out[0] = 1;
	  out[1] = 0;
	  out[2] = 0;
	  out[3] = 0;
	  out[4] = 0;
	  out[5] = 1;
	  out[6] = 0;
	  out[7] = 0;
	  out[8] = 0;
	  out[9] = 0;
	  out[10] = 1;
	  out[11] = 0;
	  out[12] = 0;
	  out[13] = 0;
	  out[14] = 0;
	  out[15] = 1;
	  return out;
	}

	/**
	 * Transpose the values of a mat4
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the source matrix
	 * @returns {mat4} out
	 */
	function transpose(out, a) {
	  // If we are transposing ourselves we can skip a few steps but have to cache some values
	  if (out === a) {
	    var a01 = a[1],
	        a02 = a[2],
	        a03 = a[3];
	    var a12 = a[6],
	        a13 = a[7];
	    var a23 = a[11];

	    out[1] = a[4];
	    out[2] = a[8];
	    out[3] = a[12];
	    out[4] = a01;
	    out[6] = a[9];
	    out[7] = a[13];
	    out[8] = a02;
	    out[9] = a12;
	    out[11] = a[14];
	    out[12] = a03;
	    out[13] = a13;
	    out[14] = a23;
	  } else {
	    out[0] = a[0];
	    out[1] = a[4];
	    out[2] = a[8];
	    out[3] = a[12];
	    out[4] = a[1];
	    out[5] = a[5];
	    out[6] = a[9];
	    out[7] = a[13];
	    out[8] = a[2];
	    out[9] = a[6];
	    out[10] = a[10];
	    out[11] = a[14];
	    out[12] = a[3];
	    out[13] = a[7];
	    out[14] = a[11];
	    out[15] = a[15];
	  }

	  return out;
	}

	/**
	 * Inverts a mat4
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the source matrix
	 * @returns {mat4} out
	 */
	function invert$2(out, a) {
	  var a00 = a[0],
	      a01 = a[1],
	      a02 = a[2],
	      a03 = a[3];
	  var a10 = a[4],
	      a11 = a[5],
	      a12 = a[6],
	      a13 = a[7];
	  var a20 = a[8],
	      a21 = a[9],
	      a22 = a[10],
	      a23 = a[11];
	  var a30 = a[12],
	      a31 = a[13],
	      a32 = a[14],
	      a33 = a[15];

	  var b00 = a00 * a11 - a01 * a10;
	  var b01 = a00 * a12 - a02 * a10;
	  var b02 = a00 * a13 - a03 * a10;
	  var b03 = a01 * a12 - a02 * a11;
	  var b04 = a01 * a13 - a03 * a11;
	  var b05 = a02 * a13 - a03 * a12;
	  var b06 = a20 * a31 - a21 * a30;
	  var b07 = a20 * a32 - a22 * a30;
	  var b08 = a20 * a33 - a23 * a30;
	  var b09 = a21 * a32 - a22 * a31;
	  var b10 = a21 * a33 - a23 * a31;
	  var b11 = a22 * a33 - a23 * a32;

	  // Calculate the determinant
	  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

	  if (!det) {
	    return null;
	  }
	  det = 1.0 / det;

	  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
	  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
	  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
	  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
	  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
	  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
	  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
	  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
	  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
	  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
	  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
	  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
	  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
	  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
	  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
	  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;

	  return out;
	}

	/**
	 * Calculates the adjugate of a mat4
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the source matrix
	 * @returns {mat4} out
	 */
	function adjoint(out, a) {
	  var a00 = a[0],
	      a01 = a[1],
	      a02 = a[2],
	      a03 = a[3];
	  var a10 = a[4],
	      a11 = a[5],
	      a12 = a[6],
	      a13 = a[7];
	  var a20 = a[8],
	      a21 = a[9],
	      a22 = a[10],
	      a23 = a[11];
	  var a30 = a[12],
	      a31 = a[13],
	      a32 = a[14],
	      a33 = a[15];

	  out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
	  out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
	  out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
	  out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
	  out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
	  out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
	  out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
	  out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
	  out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
	  out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
	  out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
	  out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
	  out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
	  out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
	  out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
	  out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
	  return out;
	}

	/**
	 * Calculates the determinant of a mat4
	 *
	 * @param {mat4} a the source matrix
	 * @returns {Number} determinant of a
	 */
	function determinant(a) {
	  var a00 = a[0],
	      a01 = a[1],
	      a02 = a[2],
	      a03 = a[3];
	  var a10 = a[4],
	      a11 = a[5],
	      a12 = a[6],
	      a13 = a[7];
	  var a20 = a[8],
	      a21 = a[9],
	      a22 = a[10],
	      a23 = a[11];
	  var a30 = a[12],
	      a31 = a[13],
	      a32 = a[14],
	      a33 = a[15];

	  var b00 = a00 * a11 - a01 * a10;
	  var b01 = a00 * a12 - a02 * a10;
	  var b02 = a00 * a13 - a03 * a10;
	  var b03 = a01 * a12 - a02 * a11;
	  var b04 = a01 * a13 - a03 * a11;
	  var b05 = a02 * a13 - a03 * a12;
	  var b06 = a20 * a31 - a21 * a30;
	  var b07 = a20 * a32 - a22 * a30;
	  var b08 = a20 * a33 - a23 * a30;
	  var b09 = a21 * a32 - a22 * a31;
	  var b10 = a21 * a33 - a23 * a31;
	  var b11 = a22 * a33 - a23 * a32;

	  // Calculate the determinant
	  return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
	}

	/**
	 * Multiplies two mat4s
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the first operand
	 * @param {mat4} b the second operand
	 * @returns {mat4} out
	 */
	function multiply$5(out, a, b) {
	  var a00 = a[0],
	      a01 = a[1],
	      a02 = a[2],
	      a03 = a[3];
	  var a10 = a[4],
	      a11 = a[5],
	      a12 = a[6],
	      a13 = a[7];
	  var a20 = a[8],
	      a21 = a[9],
	      a22 = a[10],
	      a23 = a[11];
	  var a30 = a[12],
	      a31 = a[13],
	      a32 = a[14],
	      a33 = a[15];

	  // Cache only the current line of the second matrix
	  var b0 = b[0],
	      b1 = b[1],
	      b2 = b[2],
	      b3 = b[3];
	  out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
	  out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
	  out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
	  out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

	  b0 = b[4];b1 = b[5];b2 = b[6];b3 = b[7];
	  out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
	  out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
	  out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
	  out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

	  b0 = b[8];b1 = b[9];b2 = b[10];b3 = b[11];
	  out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
	  out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
	  out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
	  out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

	  b0 = b[12];b1 = b[13];b2 = b[14];b3 = b[15];
	  out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
	  out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
	  out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
	  out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
	  return out;
	}

	/**
	 * Translate a mat4 by the given vector
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to translate
	 * @param {vec3} v vector to translate by
	 * @returns {mat4} out
	 */
	function translate$1(out, a, v) {
	  var x = v[0],
	      y = v[1],
	      z = v[2];
	  var a00 = void 0,
	      a01 = void 0,
	      a02 = void 0,
	      a03 = void 0;
	  var a10 = void 0,
	      a11 = void 0,
	      a12 = void 0,
	      a13 = void 0;
	  var a20 = void 0,
	      a21 = void 0,
	      a22 = void 0,
	      a23 = void 0;

	  if (a === out) {
	    out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
	    out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
	    out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
	    out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
	  } else {
	    a00 = a[0];a01 = a[1];a02 = a[2];a03 = a[3];
	    a10 = a[4];a11 = a[5];a12 = a[6];a13 = a[7];
	    a20 = a[8];a21 = a[9];a22 = a[10];a23 = a[11];

	    out[0] = a00;out[1] = a01;out[2] = a02;out[3] = a03;
	    out[4] = a10;out[5] = a11;out[6] = a12;out[7] = a13;
	    out[8] = a20;out[9] = a21;out[10] = a22;out[11] = a23;

	    out[12] = a00 * x + a10 * y + a20 * z + a[12];
	    out[13] = a01 * x + a11 * y + a21 * z + a[13];
	    out[14] = a02 * x + a12 * y + a22 * z + a[14];
	    out[15] = a03 * x + a13 * y + a23 * z + a[15];
	  }

	  return out;
	}

	/**
	 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to scale
	 * @param {vec3} v the vec3 to scale the matrix by
	 * @returns {mat4} out
	 **/
	function scale$5(out, a, v) {
	  var x = v[0],
	      y = v[1],
	      z = v[2];

	  out[0] = a[0] * x;
	  out[1] = a[1] * x;
	  out[2] = a[2] * x;
	  out[3] = a[3] * x;
	  out[4] = a[4] * y;
	  out[5] = a[5] * y;
	  out[6] = a[6] * y;
	  out[7] = a[7] * y;
	  out[8] = a[8] * z;
	  out[9] = a[9] * z;
	  out[10] = a[10] * z;
	  out[11] = a[11] * z;
	  out[12] = a[12];
	  out[13] = a[13];
	  out[14] = a[14];
	  out[15] = a[15];
	  return out;
	}

	/**
	 * Rotates a mat4 by the given angle around the given axis
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @param {vec3} axis the axis to rotate around
	 * @returns {mat4} out
	 */
	function rotate$1(out, a, rad, axis) {
	  var x = axis[0],
	      y = axis[1],
	      z = axis[2];
	  var len = Math.sqrt(x * x + y * y + z * z);
	  var s = void 0,
	      c = void 0,
	      t = void 0;
	  var a00 = void 0,
	      a01 = void 0,
	      a02 = void 0,
	      a03 = void 0;
	  var a10 = void 0,
	      a11 = void 0,
	      a12 = void 0,
	      a13 = void 0;
	  var a20 = void 0,
	      a21 = void 0,
	      a22 = void 0,
	      a23 = void 0;
	  var b00 = void 0,
	      b01 = void 0,
	      b02 = void 0;
	  var b10 = void 0,
	      b11 = void 0,
	      b12 = void 0;
	  var b20 = void 0,
	      b21 = void 0,
	      b22 = void 0;

	  if (len < EPSILON) {
	    return null;
	  }

	  len = 1 / len;
	  x *= len;
	  y *= len;
	  z *= len;

	  s = Math.sin(rad);
	  c = Math.cos(rad);
	  t = 1 - c;

	  a00 = a[0];a01 = a[1];a02 = a[2];a03 = a[3];
	  a10 = a[4];a11 = a[5];a12 = a[6];a13 = a[7];
	  a20 = a[8];a21 = a[9];a22 = a[10];a23 = a[11];

	  // Construct the elements of the rotation matrix
	  b00 = x * x * t + c;b01 = y * x * t + z * s;b02 = z * x * t - y * s;
	  b10 = x * y * t - z * s;b11 = y * y * t + c;b12 = z * y * t + x * s;
	  b20 = x * z * t + y * s;b21 = y * z * t - x * s;b22 = z * z * t + c;

	  // Perform rotation-specific matrix multiplication
	  out[0] = a00 * b00 + a10 * b01 + a20 * b02;
	  out[1] = a01 * b00 + a11 * b01 + a21 * b02;
	  out[2] = a02 * b00 + a12 * b01 + a22 * b02;
	  out[3] = a03 * b00 + a13 * b01 + a23 * b02;
	  out[4] = a00 * b10 + a10 * b11 + a20 * b12;
	  out[5] = a01 * b10 + a11 * b11 + a21 * b12;
	  out[6] = a02 * b10 + a12 * b11 + a22 * b12;
	  out[7] = a03 * b10 + a13 * b11 + a23 * b12;
	  out[8] = a00 * b20 + a10 * b21 + a20 * b22;
	  out[9] = a01 * b20 + a11 * b21 + a21 * b22;
	  out[10] = a02 * b20 + a12 * b21 + a22 * b22;
	  out[11] = a03 * b20 + a13 * b21 + a23 * b22;

	  if (a !== out) {
	    // If the source and destination differ, copy the unchanged last row
	    out[12] = a[12];
	    out[13] = a[13];
	    out[14] = a[14];
	    out[15] = a[15];
	  }
	  return out;
	}

	/**
	 * Rotates a matrix by the given angle around the X axis
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	function rotateX$3(out, a, rad) {
	  var s = Math.sin(rad);
	  var c = Math.cos(rad);
	  var a10 = a[4];
	  var a11 = a[5];
	  var a12 = a[6];
	  var a13 = a[7];
	  var a20 = a[8];
	  var a21 = a[9];
	  var a22 = a[10];
	  var a23 = a[11];

	  if (a !== out) {
	    // If the source and destination differ, copy the unchanged rows
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[3];
	    out[12] = a[12];
	    out[13] = a[13];
	    out[14] = a[14];
	    out[15] = a[15];
	  }

	  // Perform axis-specific matrix multiplication
	  out[4] = a10 * c + a20 * s;
	  out[5] = a11 * c + a21 * s;
	  out[6] = a12 * c + a22 * s;
	  out[7] = a13 * c + a23 * s;
	  out[8] = a20 * c - a10 * s;
	  out[9] = a21 * c - a11 * s;
	  out[10] = a22 * c - a12 * s;
	  out[11] = a23 * c - a13 * s;
	  return out;
	}

	/**
	 * Rotates a matrix by the given angle around the Y axis
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	function rotateY$3(out, a, rad) {
	  var s = Math.sin(rad);
	  var c = Math.cos(rad);
	  var a00 = a[0];
	  var a01 = a[1];
	  var a02 = a[2];
	  var a03 = a[3];
	  var a20 = a[8];
	  var a21 = a[9];
	  var a22 = a[10];
	  var a23 = a[11];

	  if (a !== out) {
	    // If the source and destination differ, copy the unchanged rows
	    out[4] = a[4];
	    out[5] = a[5];
	    out[6] = a[6];
	    out[7] = a[7];
	    out[12] = a[12];
	    out[13] = a[13];
	    out[14] = a[14];
	    out[15] = a[15];
	  }

	  // Perform axis-specific matrix multiplication
	  out[0] = a00 * c - a20 * s;
	  out[1] = a01 * c - a21 * s;
	  out[2] = a02 * c - a22 * s;
	  out[3] = a03 * c - a23 * s;
	  out[8] = a00 * s + a20 * c;
	  out[9] = a01 * s + a21 * c;
	  out[10] = a02 * s + a22 * c;
	  out[11] = a03 * s + a23 * c;
	  return out;
	}

	/**
	 * Rotates a matrix by the given angle around the Z axis
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	function rotateZ$3(out, a, rad) {
	  var s = Math.sin(rad);
	  var c = Math.cos(rad);
	  var a00 = a[0];
	  var a01 = a[1];
	  var a02 = a[2];
	  var a03 = a[3];
	  var a10 = a[4];
	  var a11 = a[5];
	  var a12 = a[6];
	  var a13 = a[7];

	  if (a !== out) {
	    // If the source and destination differ, copy the unchanged last row
	    out[8] = a[8];
	    out[9] = a[9];
	    out[10] = a[10];
	    out[11] = a[11];
	    out[12] = a[12];
	    out[13] = a[13];
	    out[14] = a[14];
	    out[15] = a[15];
	  }

	  // Perform axis-specific matrix multiplication
	  out[0] = a00 * c + a10 * s;
	  out[1] = a01 * c + a11 * s;
	  out[2] = a02 * c + a12 * s;
	  out[3] = a03 * c + a13 * s;
	  out[4] = a10 * c - a00 * s;
	  out[5] = a11 * c - a01 * s;
	  out[6] = a12 * c - a02 * s;
	  out[7] = a13 * c - a03 * s;
	  return out;
	}

	/**
	 * Creates a matrix from a vector translation
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.translate(dest, dest, vec);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {vec3} v Translation vector
	 * @returns {mat4} out
	 */
	function fromTranslation$1(out, v) {
	  out[0] = 1;
	  out[1] = 0;
	  out[2] = 0;
	  out[3] = 0;
	  out[4] = 0;
	  out[5] = 1;
	  out[6] = 0;
	  out[7] = 0;
	  out[8] = 0;
	  out[9] = 0;
	  out[10] = 1;
	  out[11] = 0;
	  out[12] = v[0];
	  out[13] = v[1];
	  out[14] = v[2];
	  out[15] = 1;
	  return out;
	}

	/**
	 * Creates a matrix from a vector scaling
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.scale(dest, dest, vec);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {vec3} v Scaling vector
	 * @returns {mat4} out
	 */
	function fromScaling(out, v) {
	  out[0] = v[0];
	  out[1] = 0;
	  out[2] = 0;
	  out[3] = 0;
	  out[4] = 0;
	  out[5] = v[1];
	  out[6] = 0;
	  out[7] = 0;
	  out[8] = 0;
	  out[9] = 0;
	  out[10] = v[2];
	  out[11] = 0;
	  out[12] = 0;
	  out[13] = 0;
	  out[14] = 0;
	  out[15] = 1;
	  return out;
	}

	/**
	 * Creates a matrix from a given angle around a given axis
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.rotate(dest, dest, rad, axis);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {Number} rad the angle to rotate the matrix by
	 * @param {vec3} axis the axis to rotate around
	 * @returns {mat4} out
	 */
	function fromRotation$1(out, rad, axis) {
	  var x = axis[0],
	      y = axis[1],
	      z = axis[2];
	  var len = Math.sqrt(x * x + y * y + z * z);
	  var s = void 0,
	      c = void 0,
	      t = void 0;

	  if (len < EPSILON) {
	    return null;
	  }

	  len = 1 / len;
	  x *= len;
	  y *= len;
	  z *= len;

	  s = Math.sin(rad);
	  c = Math.cos(rad);
	  t = 1 - c;

	  // Perform rotation-specific matrix multiplication
	  out[0] = x * x * t + c;
	  out[1] = y * x * t + z * s;
	  out[2] = z * x * t - y * s;
	  out[3] = 0;
	  out[4] = x * y * t - z * s;
	  out[5] = y * y * t + c;
	  out[6] = z * y * t + x * s;
	  out[7] = 0;
	  out[8] = x * z * t + y * s;
	  out[9] = y * z * t - x * s;
	  out[10] = z * z * t + c;
	  out[11] = 0;
	  out[12] = 0;
	  out[13] = 0;
	  out[14] = 0;
	  out[15] = 1;
	  return out;
	}

	/**
	 * Creates a matrix from the given angle around the X axis
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.rotateX(dest, dest, rad);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	function fromXRotation(out, rad) {
	  var s = Math.sin(rad);
	  var c = Math.cos(rad);

	  // Perform axis-specific matrix multiplication
	  out[0] = 1;
	  out[1] = 0;
	  out[2] = 0;
	  out[3] = 0;
	  out[4] = 0;
	  out[5] = c;
	  out[6] = s;
	  out[7] = 0;
	  out[8] = 0;
	  out[9] = -s;
	  out[10] = c;
	  out[11] = 0;
	  out[12] = 0;
	  out[13] = 0;
	  out[14] = 0;
	  out[15] = 1;
	  return out;
	}

	/**
	 * Creates a matrix from the given angle around the Y axis
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.rotateY(dest, dest, rad);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	function fromYRotation(out, rad) {
	  var s = Math.sin(rad);
	  var c = Math.cos(rad);

	  // Perform axis-specific matrix multiplication
	  out[0] = c;
	  out[1] = 0;
	  out[2] = -s;
	  out[3] = 0;
	  out[4] = 0;
	  out[5] = 1;
	  out[6] = 0;
	  out[7] = 0;
	  out[8] = s;
	  out[9] = 0;
	  out[10] = c;
	  out[11] = 0;
	  out[12] = 0;
	  out[13] = 0;
	  out[14] = 0;
	  out[15] = 1;
	  return out;
	}

	/**
	 * Creates a matrix from the given angle around the Z axis
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.rotateZ(dest, dest, rad);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	function fromZRotation(out, rad) {
	  var s = Math.sin(rad);
	  var c = Math.cos(rad);

	  // Perform axis-specific matrix multiplication
	  out[0] = c;
	  out[1] = s;
	  out[2] = 0;
	  out[3] = 0;
	  out[4] = -s;
	  out[5] = c;
	  out[6] = 0;
	  out[7] = 0;
	  out[8] = 0;
	  out[9] = 0;
	  out[10] = 1;
	  out[11] = 0;
	  out[12] = 0;
	  out[13] = 0;
	  out[14] = 0;
	  out[15] = 1;
	  return out;
	}

	/**
	 * Creates a matrix from a quaternion rotation and vector translation
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.translate(dest, vec);
	 *     let quatMat = mat4.create();
	 *     quat4.toMat4(quat, quatMat);
	 *     mat4.multiply(dest, quatMat);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {quat4} q Rotation quaternion
	 * @param {vec3} v Translation vector
	 * @returns {mat4} out
	 */
	function fromRotationTranslation$1(out, q, v) {
	  // Quaternion math
	  var x = q[0],
	      y = q[1],
	      z = q[2],
	      w = q[3];
	  var x2 = x + x;
	  var y2 = y + y;
	  var z2 = z + z;

	  var xx = x * x2;
	  var xy = x * y2;
	  var xz = x * z2;
	  var yy = y * y2;
	  var yz = y * z2;
	  var zz = z * z2;
	  var wx = w * x2;
	  var wy = w * y2;
	  var wz = w * z2;

	  out[0] = 1 - (yy + zz);
	  out[1] = xy + wz;
	  out[2] = xz - wy;
	  out[3] = 0;
	  out[4] = xy - wz;
	  out[5] = 1 - (xx + zz);
	  out[6] = yz + wx;
	  out[7] = 0;
	  out[8] = xz + wy;
	  out[9] = yz - wx;
	  out[10] = 1 - (xx + yy);
	  out[11] = 0;
	  out[12] = v[0];
	  out[13] = v[1];
	  out[14] = v[2];
	  out[15] = 1;

	  return out;
	}

	/**
	 * Creates a new mat4 from a dual quat.
	 *
	 * @param {mat4} out Matrix
	 * @param {quat2} a Dual Quaternion
	 * @returns {mat4} mat4 receiving operation result
	 */
	function fromQuat2(out, a) {
	  var translation = new ARRAY_TYPE(3);
	  var bx = -a[0],
	      by = -a[1],
	      bz = -a[2],
	      bw = a[3],
	      ax = a[4],
	      ay = a[5],
	      az = a[6],
	      aw = a[7];

	  var magnitude = bx * bx + by * by + bz * bz + bw * bw;
	  //Only scale if it makes sense
	  if (magnitude > 0) {
	    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2 / magnitude;
	    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2 / magnitude;
	    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2 / magnitude;
	  } else {
	    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
	    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
	    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
	  }
	  fromRotationTranslation$1(out, a, translation);
	  return out;
	}

	/**
	 * Returns the translation vector component of a transformation
	 *  matrix. If a matrix is built with fromRotationTranslation,
	 *  the returned vector will be the same as the translation vector
	 *  originally supplied.
	 * @param  {vec3} out Vector to receive translation component
	 * @param  {mat4} mat Matrix to be decomposed (input)
	 * @return {vec3} out
	 */
	function getTranslation$1(out, mat) {
	  out[0] = mat[12];
	  out[1] = mat[13];
	  out[2] = mat[14];

	  return out;
	}

	/**
	 * Returns the scaling factor component of a transformation
	 *  matrix. If a matrix is built with fromRotationTranslationScale
	 *  with a normalized Quaternion paramter, the returned vector will be
	 *  the same as the scaling vector
	 *  originally supplied.
	 * @param  {vec3} out Vector to receive scaling factor component
	 * @param  {mat4} mat Matrix to be decomposed (input)
	 * @return {vec3} out
	 */
	function getScaling(out, mat) {
	  var m11 = mat[0];
	  var m12 = mat[1];
	  var m13 = mat[2];
	  var m21 = mat[4];
	  var m22 = mat[5];
	  var m23 = mat[6];
	  var m31 = mat[8];
	  var m32 = mat[9];
	  var m33 = mat[10];

	  out[0] = Math.sqrt(m11 * m11 + m12 * m12 + m13 * m13);
	  out[1] = Math.sqrt(m21 * m21 + m22 * m22 + m23 * m23);
	  out[2] = Math.sqrt(m31 * m31 + m32 * m32 + m33 * m33);

	  return out;
	}

	/**
	 * Returns a quaternion representing the rotational component
	 *  of a transformation matrix. If a matrix is built with
	 *  fromRotationTranslation, the returned quaternion will be the
	 *  same as the quaternion originally supplied.
	 * @param {quat} out Quaternion to receive the rotation component
	 * @param {mat4} mat Matrix to be decomposed (input)
	 * @return {quat} out
	 */
	function getRotation(out, mat) {
	  // Algorithm taken from http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm
	  var trace = mat[0] + mat[5] + mat[10];
	  var S = 0;

	  if (trace > 0) {
	    S = Math.sqrt(trace + 1.0) * 2;
	    out[3] = 0.25 * S;
	    out[0] = (mat[6] - mat[9]) / S;
	    out[1] = (mat[8] - mat[2]) / S;
	    out[2] = (mat[1] - mat[4]) / S;
	  } else if (mat[0] > mat[5] && mat[0] > mat[10]) {
	    S = Math.sqrt(1.0 + mat[0] - mat[5] - mat[10]) * 2;
	    out[3] = (mat[6] - mat[9]) / S;
	    out[0] = 0.25 * S;
	    out[1] = (mat[1] + mat[4]) / S;
	    out[2] = (mat[8] + mat[2]) / S;
	  } else if (mat[5] > mat[10]) {
	    S = Math.sqrt(1.0 + mat[5] - mat[0] - mat[10]) * 2;
	    out[3] = (mat[8] - mat[2]) / S;
	    out[0] = (mat[1] + mat[4]) / S;
	    out[1] = 0.25 * S;
	    out[2] = (mat[6] + mat[9]) / S;
	  } else {
	    S = Math.sqrt(1.0 + mat[10] - mat[0] - mat[5]) * 2;
	    out[3] = (mat[1] - mat[4]) / S;
	    out[0] = (mat[8] + mat[2]) / S;
	    out[1] = (mat[6] + mat[9]) / S;
	    out[2] = 0.25 * S;
	  }

	  return out;
	}

	/**
	 * Creates a matrix from a quaternion rotation, vector translation and vector scale
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.translate(dest, vec);
	 *     let quatMat = mat4.create();
	 *     quat4.toMat4(quat, quatMat);
	 *     mat4.multiply(dest, quatMat);
	 *     mat4.scale(dest, scale)
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {quat4} q Rotation quaternion
	 * @param {vec3} v Translation vector
	 * @param {vec3} s Scaling vector
	 * @returns {mat4} out
	 */
	function fromRotationTranslationScale(out, q, v, s) {
	  // Quaternion math
	  var x = q[0],
	      y = q[1],
	      z = q[2],
	      w = q[3];
	  var x2 = x + x;
	  var y2 = y + y;
	  var z2 = z + z;

	  var xx = x * x2;
	  var xy = x * y2;
	  var xz = x * z2;
	  var yy = y * y2;
	  var yz = y * z2;
	  var zz = z * z2;
	  var wx = w * x2;
	  var wy = w * y2;
	  var wz = w * z2;
	  var sx = s[0];
	  var sy = s[1];
	  var sz = s[2];

	  out[0] = (1 - (yy + zz)) * sx;
	  out[1] = (xy + wz) * sx;
	  out[2] = (xz - wy) * sx;
	  out[3] = 0;
	  out[4] = (xy - wz) * sy;
	  out[5] = (1 - (xx + zz)) * sy;
	  out[6] = (yz + wx) * sy;
	  out[7] = 0;
	  out[8] = (xz + wy) * sz;
	  out[9] = (yz - wx) * sz;
	  out[10] = (1 - (xx + yy)) * sz;
	  out[11] = 0;
	  out[12] = v[0];
	  out[13] = v[1];
	  out[14] = v[2];
	  out[15] = 1;

	  return out;
	}

	/**
	 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.translate(dest, vec);
	 *     mat4.translate(dest, origin);
	 *     let quatMat = mat4.create();
	 *     quat4.toMat4(quat, quatMat);
	 *     mat4.multiply(dest, quatMat);
	 *     mat4.scale(dest, scale)
	 *     mat4.translate(dest, negativeOrigin);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {quat4} q Rotation quaternion
	 * @param {vec3} v Translation vector
	 * @param {vec3} s Scaling vector
	 * @param {vec3} o The origin vector around which to scale and rotate
	 * @returns {mat4} out
	 */
	function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
	  // Quaternion math
	  var x = q[0],
	      y = q[1],
	      z = q[2],
	      w = q[3];
	  var x2 = x + x;
	  var y2 = y + y;
	  var z2 = z + z;

	  var xx = x * x2;
	  var xy = x * y2;
	  var xz = x * z2;
	  var yy = y * y2;
	  var yz = y * z2;
	  var zz = z * z2;
	  var wx = w * x2;
	  var wy = w * y2;
	  var wz = w * z2;

	  var sx = s[0];
	  var sy = s[1];
	  var sz = s[2];

	  var ox = o[0];
	  var oy = o[1];
	  var oz = o[2];

	  var out0 = (1 - (yy + zz)) * sx;
	  var out1 = (xy + wz) * sx;
	  var out2 = (xz - wy) * sx;
	  var out4 = (xy - wz) * sy;
	  var out5 = (1 - (xx + zz)) * sy;
	  var out6 = (yz + wx) * sy;
	  var out8 = (xz + wy) * sz;
	  var out9 = (yz - wx) * sz;
	  var out10 = (1 - (xx + yy)) * sz;

	  out[0] = out0;
	  out[1] = out1;
	  out[2] = out2;
	  out[3] = 0;
	  out[4] = out4;
	  out[5] = out5;
	  out[6] = out6;
	  out[7] = 0;
	  out[8] = out8;
	  out[9] = out9;
	  out[10] = out10;
	  out[11] = 0;
	  out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
	  out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
	  out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
	  out[15] = 1;

	  return out;
	}

	/**
	 * Calculates a 4x4 matrix from the given quaternion
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {quat} q Quaternion to create matrix from
	 *
	 * @returns {mat4} out
	 */
	function fromQuat(out, q) {
	  var x = q[0],
	      y = q[1],
	      z = q[2],
	      w = q[3];
	  var x2 = x + x;
	  var y2 = y + y;
	  var z2 = z + z;

	  var xx = x * x2;
	  var yx = y * x2;
	  var yy = y * y2;
	  var zx = z * x2;
	  var zy = z * y2;
	  var zz = z * z2;
	  var wx = w * x2;
	  var wy = w * y2;
	  var wz = w * z2;

	  out[0] = 1 - yy - zz;
	  out[1] = yx + wz;
	  out[2] = zx - wy;
	  out[3] = 0;

	  out[4] = yx - wz;
	  out[5] = 1 - xx - zz;
	  out[6] = zy + wx;
	  out[7] = 0;

	  out[8] = zx + wy;
	  out[9] = zy - wx;
	  out[10] = 1 - xx - yy;
	  out[11] = 0;

	  out[12] = 0;
	  out[13] = 0;
	  out[14] = 0;
	  out[15] = 1;

	  return out;
	}

	/**
	 * Generates a frustum matrix with the given bounds
	 *
	 * @param {mat4} out mat4 frustum matrix will be written into
	 * @param {Number} left Left bound of the frustum
	 * @param {Number} right Right bound of the frustum
	 * @param {Number} bottom Bottom bound of the frustum
	 * @param {Number} top Top bound of the frustum
	 * @param {Number} near Near bound of the frustum
	 * @param {Number} far Far bound of the frustum
	 * @returns {mat4} out
	 */
	function frustum(out, left, right, bottom, top, near, far) {
	  var rl = 1 / (right - left);
	  var tb = 1 / (top - bottom);
	  var nf = 1 / (near - far);
	  out[0] = near * 2 * rl;
	  out[1] = 0;
	  out[2] = 0;
	  out[3] = 0;
	  out[4] = 0;
	  out[5] = near * 2 * tb;
	  out[6] = 0;
	  out[7] = 0;
	  out[8] = (right + left) * rl;
	  out[9] = (top + bottom) * tb;
	  out[10] = (far + near) * nf;
	  out[11] = -1;
	  out[12] = 0;
	  out[13] = 0;
	  out[14] = far * near * 2 * nf;
	  out[15] = 0;
	  return out;
	}

	/**
	 * Generates a perspective projection matrix with the given bounds.
	 * Passing null/undefined/no value for far will generate infinite projection matrix.
	 *
	 * @param {mat4} out mat4 frustum matrix will be written into
	 * @param {number} fovy Vertical field of view in radians
	 * @param {number} aspect Aspect ratio. typically viewport width/height
	 * @param {number} near Near bound of the frustum
	 * @param {number} far Far bound of the frustum, can be null or Infinity
	 * @returns {mat4} out
	 */
	function perspective(out, fovy, aspect, near, far) {
	  var f = 1.0 / Math.tan(fovy / 2),
	      nf = void 0;
	  out[0] = f / aspect;
	  out[1] = 0;
	  out[2] = 0;
	  out[3] = 0;
	  out[4] = 0;
	  out[5] = f;
	  out[6] = 0;
	  out[7] = 0;
	  out[8] = 0;
	  out[9] = 0;
	  out[11] = -1;
	  out[12] = 0;
	  out[13] = 0;
	  out[15] = 0;
	  if (far != null && far !== Infinity) {
	    nf = 1 / (near - far);
	    out[10] = (far + near) * nf;
	    out[14] = 2 * far * near * nf;
	  } else {
	    out[10] = -1;
	    out[14] = -2 * near;
	  }
	  return out;
	}

	/**
	 * Generates a perspective projection matrix with the given field of view.
	 * This is primarily useful for generating projection matrices to be used
	 * with the still experiemental WebVR API.
	 *
	 * @param {mat4} out mat4 frustum matrix will be written into
	 * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
	 * @param {number} near Near bound of the frustum
	 * @param {number} far Far bound of the frustum
	 * @returns {mat4} out
	 */
	function perspectiveFromFieldOfView(out, fov, near, far) {
	  var upTan = Math.tan(fov.upDegrees * Math.PI / 180.0);
	  var downTan = Math.tan(fov.downDegrees * Math.PI / 180.0);
	  var leftTan = Math.tan(fov.leftDegrees * Math.PI / 180.0);
	  var rightTan = Math.tan(fov.rightDegrees * Math.PI / 180.0);
	  var xScale = 2.0 / (leftTan + rightTan);
	  var yScale = 2.0 / (upTan + downTan);

	  out[0] = xScale;
	  out[1] = 0.0;
	  out[2] = 0.0;
	  out[3] = 0.0;
	  out[4] = 0.0;
	  out[5] = yScale;
	  out[6] = 0.0;
	  out[7] = 0.0;
	  out[8] = -((leftTan - rightTan) * xScale * 0.5);
	  out[9] = (upTan - downTan) * yScale * 0.5;
	  out[10] = far / (near - far);
	  out[11] = -1.0;
	  out[12] = 0.0;
	  out[13] = 0.0;
	  out[14] = far * near / (near - far);
	  out[15] = 0.0;
	  return out;
	}

	/**
	 * Generates a orthogonal projection matrix with the given bounds
	 *
	 * @param {mat4} out mat4 frustum matrix will be written into
	 * @param {number} left Left bound of the frustum
	 * @param {number} right Right bound of the frustum
	 * @param {number} bottom Bottom bound of the frustum
	 * @param {number} top Top bound of the frustum
	 * @param {number} near Near bound of the frustum
	 * @param {number} far Far bound of the frustum
	 * @returns {mat4} out
	 */
	function ortho(out, left, right, bottom, top, near, far) {
	  var lr = 1 / (left - right);
	  var bt = 1 / (bottom - top);
	  var nf = 1 / (near - far);
	  out[0] = -2 * lr;
	  out[1] = 0;
	  out[2] = 0;
	  out[3] = 0;
	  out[4] = 0;
	  out[5] = -2 * bt;
	  out[6] = 0;
	  out[7] = 0;
	  out[8] = 0;
	  out[9] = 0;
	  out[10] = 2 * nf;
	  out[11] = 0;
	  out[12] = (left + right) * lr;
	  out[13] = (top + bottom) * bt;
	  out[14] = (far + near) * nf;
	  out[15] = 1;
	  return out;
	}

	/**
	 * Generates a look-at matrix with the given eye position, focal point, and up axis.
	 * If you want a matrix that actually makes an object look at another object, you should use targetTo instead.
	 *
	 * @param {mat4} out mat4 frustum matrix will be written into
	 * @param {vec3} eye Position of the viewer
	 * @param {vec3} center Point the viewer is looking at
	 * @param {vec3} up vec3 pointing up
	 * @returns {mat4} out
	 */
	function lookAt(out, eye, center, up) {
	  var x0 = void 0,
	      x1 = void 0,
	      x2 = void 0,
	      y0 = void 0,
	      y1 = void 0,
	      y2 = void 0,
	      z0 = void 0,
	      z1 = void 0,
	      z2 = void 0,
	      len = void 0;
	  var eyex = eye[0];
	  var eyey = eye[1];
	  var eyez = eye[2];
	  var upx = up[0];
	  var upy = up[1];
	  var upz = up[2];
	  var centerx = center[0];
	  var centery = center[1];
	  var centerz = center[2];

	  if (Math.abs(eyex - centerx) < EPSILON && Math.abs(eyey - centery) < EPSILON && Math.abs(eyez - centerz) < EPSILON) {
	    return identity$2(out);
	  }

	  z0 = eyex - centerx;
	  z1 = eyey - centery;
	  z2 = eyez - centerz;

	  len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
	  z0 *= len;
	  z1 *= len;
	  z2 *= len;

	  x0 = upy * z2 - upz * z1;
	  x1 = upz * z0 - upx * z2;
	  x2 = upx * z1 - upy * z0;
	  len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
	  if (!len) {
	    x0 = 0;
	    x1 = 0;
	    x2 = 0;
	  } else {
	    len = 1 / len;
	    x0 *= len;
	    x1 *= len;
	    x2 *= len;
	  }

	  y0 = z1 * x2 - z2 * x1;
	  y1 = z2 * x0 - z0 * x2;
	  y2 = z0 * x1 - z1 * x0;

	  len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
	  if (!len) {
	    y0 = 0;
	    y1 = 0;
	    y2 = 0;
	  } else {
	    len = 1 / len;
	    y0 *= len;
	    y1 *= len;
	    y2 *= len;
	  }

	  out[0] = x0;
	  out[1] = y0;
	  out[2] = z0;
	  out[3] = 0;
	  out[4] = x1;
	  out[5] = y1;
	  out[6] = z1;
	  out[7] = 0;
	  out[8] = x2;
	  out[9] = y2;
	  out[10] = z2;
	  out[11] = 0;
	  out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
	  out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
	  out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
	  out[15] = 1;

	  return out;
	}

	/**
	 * Generates a matrix that makes something look at something else.
	 *
	 * @param {mat4} out mat4 frustum matrix will be written into
	 * @param {vec3} eye Position of the viewer
	 * @param {vec3} center Point the viewer is looking at
	 * @param {vec3} up vec3 pointing up
	 * @returns {mat4} out
	 */
	function targetTo(out, eye, target, up) {
	  var eyex = eye[0],
	      eyey = eye[1],
	      eyez = eye[2],
	      upx = up[0],
	      upy = up[1],
	      upz = up[2];

	  var z0 = eyex - target[0],
	      z1 = eyey - target[1],
	      z2 = eyez - target[2];

	  var len = z0 * z0 + z1 * z1 + z2 * z2;
	  if (len > 0) {
	    len = 1 / Math.sqrt(len);
	    z0 *= len;
	    z1 *= len;
	    z2 *= len;
	  }

	  var x0 = upy * z2 - upz * z1,
	      x1 = upz * z0 - upx * z2,
	      x2 = upx * z1 - upy * z0;

	  len = x0 * x0 + x1 * x1 + x2 * x2;
	  if (len > 0) {
	    len = 1 / Math.sqrt(len);
	    x0 *= len;
	    x1 *= len;
	    x2 *= len;
	  }

	  out[0] = x0;
	  out[1] = x1;
	  out[2] = x2;
	  out[3] = 0;
	  out[4] = z1 * x2 - z2 * x1;
	  out[5] = z2 * x0 - z0 * x2;
	  out[6] = z0 * x1 - z1 * x0;
	  out[7] = 0;
	  out[8] = z0;
	  out[9] = z1;
	  out[10] = z2;
	  out[11] = 0;
	  out[12] = eyex;
	  out[13] = eyey;
	  out[14] = eyez;
	  out[15] = 1;
	  return out;
	}
	/**
	 * Returns a string representation of a mat4
	 *
	 * @param {mat4} a matrix to represent as a string
	 * @returns {String} string representation of the matrix
	 */
	function str$5(a) {
	  return 'mat4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' + a[8] + ', ' + a[9] + ', ' + a[10] + ', ' + a[11] + ', ' + a[12] + ', ' + a[13] + ', ' + a[14] + ', ' + a[15] + ')';
	}

	/**
	 * Returns Frobenius norm of a mat4
	 *
	 * @param {mat4} a the matrix to calculate Frobenius norm of
	 * @returns {Number} Frobenius norm
	 */
	function frob(a) {
	  return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2) + Math.pow(a[9], 2) + Math.pow(a[10], 2) + Math.pow(a[11], 2) + Math.pow(a[12], 2) + Math.pow(a[13], 2) + Math.pow(a[14], 2) + Math.pow(a[15], 2));
	}

	/**
	 * Adds two mat4's
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the first operand
	 * @param {mat4} b the second operand
	 * @returns {mat4} out
	 */
	function add$5(out, a, b) {
	  out[0] = a[0] + b[0];
	  out[1] = a[1] + b[1];
	  out[2] = a[2] + b[2];
	  out[3] = a[3] + b[3];
	  out[4] = a[4] + b[4];
	  out[5] = a[5] + b[5];
	  out[6] = a[6] + b[6];
	  out[7] = a[7] + b[7];
	  out[8] = a[8] + b[8];
	  out[9] = a[9] + b[9];
	  out[10] = a[10] + b[10];
	  out[11] = a[11] + b[11];
	  out[12] = a[12] + b[12];
	  out[13] = a[13] + b[13];
	  out[14] = a[14] + b[14];
	  out[15] = a[15] + b[15];
	  return out;
	}

	/**
	 * Subtracts matrix b from matrix a
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the first operand
	 * @param {mat4} b the second operand
	 * @returns {mat4} out
	 */
	function subtract$3(out, a, b) {
	  out[0] = a[0] - b[0];
	  out[1] = a[1] - b[1];
	  out[2] = a[2] - b[2];
	  out[3] = a[3] - b[3];
	  out[4] = a[4] - b[4];
	  out[5] = a[5] - b[5];
	  out[6] = a[6] - b[6];
	  out[7] = a[7] - b[7];
	  out[8] = a[8] - b[8];
	  out[9] = a[9] - b[9];
	  out[10] = a[10] - b[10];
	  out[11] = a[11] - b[11];
	  out[12] = a[12] - b[12];
	  out[13] = a[13] - b[13];
	  out[14] = a[14] - b[14];
	  out[15] = a[15] - b[15];
	  return out;
	}

	/**
	 * Multiply each element of the matrix by a scalar.
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to scale
	 * @param {Number} b amount to scale the matrix's elements by
	 * @returns {mat4} out
	 */
	function multiplyScalar(out, a, b) {
	  out[0] = a[0] * b;
	  out[1] = a[1] * b;
	  out[2] = a[2] * b;
	  out[3] = a[3] * b;
	  out[4] = a[4] * b;
	  out[5] = a[5] * b;
	  out[6] = a[6] * b;
	  out[7] = a[7] * b;
	  out[8] = a[8] * b;
	  out[9] = a[9] * b;
	  out[10] = a[10] * b;
	  out[11] = a[11] * b;
	  out[12] = a[12] * b;
	  out[13] = a[13] * b;
	  out[14] = a[14] * b;
	  out[15] = a[15] * b;
	  return out;
	}

	/**
	 * Adds two mat4's after multiplying each element of the second operand by a scalar value.
	 *
	 * @param {mat4} out the receiving vector
	 * @param {mat4} a the first operand
	 * @param {mat4} b the second operand
	 * @param {Number} scale the amount to scale b's elements by before adding
	 * @returns {mat4} out
	 */
	function multiplyScalarAndAdd(out, a, b, scale) {
	  out[0] = a[0] + b[0] * scale;
	  out[1] = a[1] + b[1] * scale;
	  out[2] = a[2] + b[2] * scale;
	  out[3] = a[3] + b[3] * scale;
	  out[4] = a[4] + b[4] * scale;
	  out[5] = a[5] + b[5] * scale;
	  out[6] = a[6] + b[6] * scale;
	  out[7] = a[7] + b[7] * scale;
	  out[8] = a[8] + b[8] * scale;
	  out[9] = a[9] + b[9] * scale;
	  out[10] = a[10] + b[10] * scale;
	  out[11] = a[11] + b[11] * scale;
	  out[12] = a[12] + b[12] * scale;
	  out[13] = a[13] + b[13] * scale;
	  out[14] = a[14] + b[14] * scale;
	  out[15] = a[15] + b[15] * scale;
	  return out;
	}

	/**
	 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
	 *
	 * @param {mat4} a The first matrix.
	 * @param {mat4} b The second matrix.
	 * @returns {Boolean} True if the matrices are equal, false otherwise.
	 */
	function exactEquals$5(a, b) {
	  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
	}

	/**
	 * Returns whether or not the matrices have approximately the same elements in the same position.
	 *
	 * @param {mat4} a The first matrix.
	 * @param {mat4} b The second matrix.
	 * @returns {Boolean} True if the matrices are equal, false otherwise.
	 */
	function equals$5(a, b) {
	  var a0 = a[0],
	      a1 = a[1],
	      a2 = a[2],
	      a3 = a[3];
	  var a4 = a[4],
	      a5 = a[5],
	      a6 = a[6],
	      a7 = a[7];
	  var a8 = a[8],
	      a9 = a[9],
	      a10 = a[10],
	      a11 = a[11];
	  var a12 = a[12],
	      a13 = a[13],
	      a14 = a[14],
	      a15 = a[15];

	  var b0 = b[0],
	      b1 = b[1],
	      b2 = b[2],
	      b3 = b[3];
	  var b4 = b[4],
	      b5 = b[5],
	      b6 = b[6],
	      b7 = b[7];
	  var b8 = b[8],
	      b9 = b[9],
	      b10 = b[10],
	      b11 = b[11];
	  var b12 = b[12],
	      b13 = b[13],
	      b14 = b[14],
	      b15 = b[15];

	  return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= EPSILON * Math.max(1.0, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= EPSILON * Math.max(1.0, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= EPSILON * Math.max(1.0, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= EPSILON * Math.max(1.0, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= EPSILON * Math.max(1.0, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= EPSILON * Math.max(1.0, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= EPSILON * Math.max(1.0, Math.abs(a15), Math.abs(b15));
	}

	/**
	 * Alias for {@link mat4.multiply}
	 * @function
	 */
	var mul$5 = multiply$5;

	/**
	 * Alias for {@link mat4.subtract}
	 * @function
	 */
	var sub$3 = subtract$3;

	var mat4 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		create: create$5,
		clone: clone$5,
		copy: copy$5,
		fromValues: fromValues$5,
		set: set$5,
		identity: identity$2,
		transpose: transpose,
		invert: invert$2,
		adjoint: adjoint,
		determinant: determinant,
		multiply: multiply$5,
		translate: translate$1,
		scale: scale$5,
		rotate: rotate$1,
		rotateX: rotateX$3,
		rotateY: rotateY$3,
		rotateZ: rotateZ$3,
		fromTranslation: fromTranslation$1,
		fromScaling: fromScaling,
		fromRotation: fromRotation$1,
		fromXRotation: fromXRotation,
		fromYRotation: fromYRotation,
		fromZRotation: fromZRotation,
		fromRotationTranslation: fromRotationTranslation$1,
		fromQuat2: fromQuat2,
		getTranslation: getTranslation$1,
		getScaling: getScaling,
		getRotation: getRotation,
		fromRotationTranslationScale: fromRotationTranslationScale,
		fromRotationTranslationScaleOrigin: fromRotationTranslationScaleOrigin,
		fromQuat: fromQuat,
		frustum: frustum,
		perspective: perspective,
		perspectiveFromFieldOfView: perspectiveFromFieldOfView,
		ortho: ortho,
		lookAt: lookAt,
		targetTo: targetTo,
		str: str$5,
		frob: frob,
		add: add$5,
		subtract: subtract$3,
		multiplyScalar: multiplyScalar,
		multiplyScalarAndAdd: multiplyScalarAndAdd,
		exactEquals: exactEquals$5,
		equals: equals$5,
		mul: mul$5,
		sub: sub$3
	});

	/**
	 * 3 Dimensional Vector
	 * @module vec3
	 */

	/**
	 * Creates a new, empty vec3
	 *
	 * @returns {vec3} a new 3D vector
	 */
	function create$4() {
	  var out = new ARRAY_TYPE(3);
	  if (ARRAY_TYPE != Float32Array) {
	    out[0] = 0;
	    out[1] = 0;
	    out[2] = 0;
	  }
	  return out;
	}

	/**
	 * Creates a new vec3 initialized with values from an existing vector
	 *
	 * @param {vec3} a vector to clone
	 * @returns {vec3} a new 3D vector
	 */
	function clone$4(a) {
	  var out = new ARRAY_TYPE(3);
	  out[0] = a[0];
	  out[1] = a[1];
	  out[2] = a[2];
	  return out;
	}

	/**
	 * Calculates the length of a vec3
	 *
	 * @param {vec3} a vector to calculate length of
	 * @returns {Number} length of a
	 */
	function length$4(a) {
	  var x = a[0];
	  var y = a[1];
	  var z = a[2];
	  return Math.sqrt(x * x + y * y + z * z);
	}

	/**
	 * Creates a new vec3 initialized with the given values
	 *
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @param {Number} z Z component
	 * @returns {vec3} a new 3D vector
	 */
	function fromValues$4(x, y, z) {
	  var out = new ARRAY_TYPE(3);
	  out[0] = x;
	  out[1] = y;
	  out[2] = z;
	  return out;
	}

	/**
	 * Copy the values from one vec3 to another
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the source vector
	 * @returns {vec3} out
	 */
	function copy$4(out, a) {
	  out[0] = a[0];
	  out[1] = a[1];
	  out[2] = a[2];
	  return out;
	}

	/**
	 * Set the components of a vec3 to the given values
	 *
	 * @param {vec3} out the receiving vector
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @param {Number} z Z component
	 * @returns {vec3} out
	 */
	function set$4(out, x, y, z) {
	  out[0] = x;
	  out[1] = y;
	  out[2] = z;
	  return out;
	}

	/**
	 * Adds two vec3's
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {vec3} out
	 */
	function add$4(out, a, b) {
	  out[0] = a[0] + b[0];
	  out[1] = a[1] + b[1];
	  out[2] = a[2] + b[2];
	  return out;
	}

	/**
	 * Subtracts vector b from vector a
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {vec3} out
	 */
	function subtract$2(out, a, b) {
	  out[0] = a[0] - b[0];
	  out[1] = a[1] - b[1];
	  out[2] = a[2] - b[2];
	  return out;
	}

	/**
	 * Multiplies two vec3's
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {vec3} out
	 */
	function multiply$4(out, a, b) {
	  out[0] = a[0] * b[0];
	  out[1] = a[1] * b[1];
	  out[2] = a[2] * b[2];
	  return out;
	}

	/**
	 * Divides two vec3's
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {vec3} out
	 */
	function divide$2(out, a, b) {
	  out[0] = a[0] / b[0];
	  out[1] = a[1] / b[1];
	  out[2] = a[2] / b[2];
	  return out;
	}

	/**
	 * Math.ceil the components of a vec3
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a vector to ceil
	 * @returns {vec3} out
	 */
	function ceil$2(out, a) {
	  out[0] = Math.ceil(a[0]);
	  out[1] = Math.ceil(a[1]);
	  out[2] = Math.ceil(a[2]);
	  return out;
	}

	/**
	 * Math.floor the components of a vec3
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a vector to floor
	 * @returns {vec3} out
	 */
	function floor$2(out, a) {
	  out[0] = Math.floor(a[0]);
	  out[1] = Math.floor(a[1]);
	  out[2] = Math.floor(a[2]);
	  return out;
	}

	/**
	 * Returns the minimum of two vec3's
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {vec3} out
	 */
	function min$2(out, a, b) {
	  out[0] = Math.min(a[0], b[0]);
	  out[1] = Math.min(a[1], b[1]);
	  out[2] = Math.min(a[2], b[2]);
	  return out;
	}

	/**
	 * Returns the maximum of two vec3's
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {vec3} out
	 */
	function max$2(out, a, b) {
	  out[0] = Math.max(a[0], b[0]);
	  out[1] = Math.max(a[1], b[1]);
	  out[2] = Math.max(a[2], b[2]);
	  return out;
	}

	/**
	 * Math.round the components of a vec3
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a vector to round
	 * @returns {vec3} out
	 */
	function round$2(out, a) {
	  out[0] = Math.round(a[0]);
	  out[1] = Math.round(a[1]);
	  out[2] = Math.round(a[2]);
	  return out;
	}

	/**
	 * Scales a vec3 by a scalar number
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the vector to scale
	 * @param {Number} b amount to scale the vector by
	 * @returns {vec3} out
	 */
	function scale$4(out, a, b) {
	  out[0] = a[0] * b;
	  out[1] = a[1] * b;
	  out[2] = a[2] * b;
	  return out;
	}

	/**
	 * Adds two vec3's after scaling the second operand by a scalar value
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @param {Number} scale the amount to scale b by before adding
	 * @returns {vec3} out
	 */
	function scaleAndAdd$2(out, a, b, scale) {
	  out[0] = a[0] + b[0] * scale;
	  out[1] = a[1] + b[1] * scale;
	  out[2] = a[2] + b[2] * scale;
	  return out;
	}

	/**
	 * Calculates the euclidian distance between two vec3's
	 *
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {Number} distance between a and b
	 */
	function distance$2(a, b) {
	  var x = b[0] - a[0];
	  var y = b[1] - a[1];
	  var z = b[2] - a[2];
	  return Math.sqrt(x * x + y * y + z * z);
	}

	/**
	 * Calculates the squared euclidian distance between two vec3's
	 *
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {Number} squared distance between a and b
	 */
	function squaredDistance$2(a, b) {
	  var x = b[0] - a[0];
	  var y = b[1] - a[1];
	  var z = b[2] - a[2];
	  return x * x + y * y + z * z;
	}

	/**
	 * Calculates the squared length of a vec3
	 *
	 * @param {vec3} a vector to calculate squared length of
	 * @returns {Number} squared length of a
	 */
	function squaredLength$4(a) {
	  var x = a[0];
	  var y = a[1];
	  var z = a[2];
	  return x * x + y * y + z * z;
	}

	/**
	 * Negates the components of a vec3
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a vector to negate
	 * @returns {vec3} out
	 */
	function negate$2(out, a) {
	  out[0] = -a[0];
	  out[1] = -a[1];
	  out[2] = -a[2];
	  return out;
	}

	/**
	 * Returns the inverse of the components of a vec3
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a vector to invert
	 * @returns {vec3} out
	 */
	function inverse$2(out, a) {
	  out[0] = 1.0 / a[0];
	  out[1] = 1.0 / a[1];
	  out[2] = 1.0 / a[2];
	  return out;
	}

	/**
	 * Normalize a vec3
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a vector to normalize
	 * @returns {vec3} out
	 */
	function normalize$4(out, a) {
	  var x = a[0];
	  var y = a[1];
	  var z = a[2];
	  var len = x * x + y * y + z * z;
	  if (len > 0) {
	    //TODO: evaluate use of glm_invsqrt here?
	    len = 1 / Math.sqrt(len);
	    out[0] = a[0] * len;
	    out[1] = a[1] * len;
	    out[2] = a[2] * len;
	  }
	  return out;
	}

	/**
	 * Calculates the dot product of two vec3's
	 *
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {Number} dot product of a and b
	 */
	function dot$4(a, b) {
	  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
	}

	/**
	 * Computes the cross product of two vec3's
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {vec3} out
	 */
	function cross$1(out, a, b) {
	  var ax = a[0],
	      ay = a[1],
	      az = a[2];
	  var bx = b[0],
	      by = b[1],
	      bz = b[2];

	  out[0] = ay * bz - az * by;
	  out[1] = az * bx - ax * bz;
	  out[2] = ax * by - ay * bx;
	  return out;
	}

	/**
	 * Performs a linear interpolation between two vec3's
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
	 * @returns {vec3} out
	 */
	function lerp$4(out, a, b, t) {
	  var ax = a[0];
	  var ay = a[1];
	  var az = a[2];
	  out[0] = ax + t * (b[0] - ax);
	  out[1] = ay + t * (b[1] - ay);
	  out[2] = az + t * (b[2] - az);
	  return out;
	}

	/**
	 * Performs a hermite interpolation with two control points
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @param {vec3} c the third operand
	 * @param {vec3} d the fourth operand
	 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
	 * @returns {vec3} out
	 */
	function hermite(out, a, b, c, d, t) {
	  var factorTimes2 = t * t;
	  var factor1 = factorTimes2 * (2 * t - 3) + 1;
	  var factor2 = factorTimes2 * (t - 2) + t;
	  var factor3 = factorTimes2 * (t - 1);
	  var factor4 = factorTimes2 * (3 - 2 * t);

	  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
	  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
	  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;

	  return out;
	}

	/**
	 * Performs a bezier interpolation with two control points
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @param {vec3} c the third operand
	 * @param {vec3} d the fourth operand
	 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
	 * @returns {vec3} out
	 */
	function bezier(out, a, b, c, d, t) {
	  var inverseFactor = 1 - t;
	  var inverseFactorTimesTwo = inverseFactor * inverseFactor;
	  var factorTimes2 = t * t;
	  var factor1 = inverseFactorTimesTwo * inverseFactor;
	  var factor2 = 3 * t * inverseFactorTimesTwo;
	  var factor3 = 3 * factorTimes2 * inverseFactor;
	  var factor4 = factorTimes2 * t;

	  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
	  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
	  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;

	  return out;
	}

	/**
	 * Generates a random vector with the given scale
	 *
	 * @param {vec3} out the receiving vector
	 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
	 * @returns {vec3} out
	 */
	function random$3(out, scale) {
	  scale = scale || 1.0;

	  var r = RANDOM() * 2.0 * Math.PI;
	  var z = RANDOM() * 2.0 - 1.0;
	  var zScale = Math.sqrt(1.0 - z * z) * scale;

	  out[0] = Math.cos(r) * zScale;
	  out[1] = Math.sin(r) * zScale;
	  out[2] = z * scale;
	  return out;
	}

	/**
	 * Transforms the vec3 with a mat4.
	 * 4th vector component is implicitly '1'
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the vector to transform
	 * @param {mat4} m matrix to transform with
	 * @returns {vec3} out
	 */
	function transformMat4$2(out, a, m) {
	  var x = a[0],
	      y = a[1],
	      z = a[2];
	  var w = m[3] * x + m[7] * y + m[11] * z + m[15];
	  w = w || 1.0;
	  out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
	  out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
	  out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
	  return out;
	}

	/**
	 * Transforms the vec3 with a mat3.
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the vector to transform
	 * @param {mat3} m the 3x3 matrix to transform with
	 * @returns {vec3} out
	 */
	function transformMat3$1(out, a, m) {
	  var x = a[0],
	      y = a[1],
	      z = a[2];
	  out[0] = x * m[0] + y * m[3] + z * m[6];
	  out[1] = x * m[1] + y * m[4] + z * m[7];
	  out[2] = x * m[2] + y * m[5] + z * m[8];
	  return out;
	}

	/**
	 * Transforms the vec3 with a quat
	 * Can also be used for dual quaternions. (Multiply it with the real part)
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the vector to transform
	 * @param {quat} q quaternion to transform with
	 * @returns {vec3} out
	 */
	function transformQuat$1(out, a, q) {
	  // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed
	  var qx = q[0],
	      qy = q[1],
	      qz = q[2],
	      qw = q[3];
	  var x = a[0],
	      y = a[1],
	      z = a[2];
	  // var qvec = [qx, qy, qz];
	  // var uv = vec3.cross([], qvec, a);
	  var uvx = qy * z - qz * y,
	      uvy = qz * x - qx * z,
	      uvz = qx * y - qy * x;
	  // var uuv = vec3.cross([], qvec, uv);
	  var uuvx = qy * uvz - qz * uvy,
	      uuvy = qz * uvx - qx * uvz,
	      uuvz = qx * uvy - qy * uvx;
	  // vec3.scale(uv, uv, 2 * w);
	  var w2 = qw * 2;
	  uvx *= w2;
	  uvy *= w2;
	  uvz *= w2;
	  // vec3.scale(uuv, uuv, 2);
	  uuvx *= 2;
	  uuvy *= 2;
	  uuvz *= 2;
	  // return vec3.add(out, a, vec3.add(out, uv, uuv));
	  out[0] = x + uvx + uuvx;
	  out[1] = y + uvy + uuvy;
	  out[2] = z + uvz + uuvz;
	  return out;
	}

	/**
	 * Rotate a 3D vector around the x-axis
	 * @param {vec3} out The receiving vec3
	 * @param {vec3} a The vec3 point to rotate
	 * @param {vec3} b The origin of the rotation
	 * @param {Number} c The angle of rotation
	 * @returns {vec3} out
	 */
	function rotateX$2(out, a, b, c) {
	  var p = [],
	      r = [];
	  //Translate point to the origin
	  p[0] = a[0] - b[0];
	  p[1] = a[1] - b[1];
	  p[2] = a[2] - b[2];

	  //perform rotation
	  r[0] = p[0];
	  r[1] = p[1] * Math.cos(c) - p[2] * Math.sin(c);
	  r[2] = p[1] * Math.sin(c) + p[2] * Math.cos(c);

	  //translate to correct position
	  out[0] = r[0] + b[0];
	  out[1] = r[1] + b[1];
	  out[2] = r[2] + b[2];

	  return out;
	}

	/**
	 * Rotate a 3D vector around the y-axis
	 * @param {vec3} out The receiving vec3
	 * @param {vec3} a The vec3 point to rotate
	 * @param {vec3} b The origin of the rotation
	 * @param {Number} c The angle of rotation
	 * @returns {vec3} out
	 */
	function rotateY$2(out, a, b, c) {
	  var p = [],
	      r = [];
	  //Translate point to the origin
	  p[0] = a[0] - b[0];
	  p[1] = a[1] - b[1];
	  p[2] = a[2] - b[2];

	  //perform rotation
	  r[0] = p[2] * Math.sin(c) + p[0] * Math.cos(c);
	  r[1] = p[1];
	  r[2] = p[2] * Math.cos(c) - p[0] * Math.sin(c);

	  //translate to correct position
	  out[0] = r[0] + b[0];
	  out[1] = r[1] + b[1];
	  out[2] = r[2] + b[2];

	  return out;
	}

	/**
	 * Rotate a 3D vector around the z-axis
	 * @param {vec3} out The receiving vec3
	 * @param {vec3} a The vec3 point to rotate
	 * @param {vec3} b The origin of the rotation
	 * @param {Number} c The angle of rotation
	 * @returns {vec3} out
	 */
	function rotateZ$2(out, a, b, c) {
	  var p = [],
	      r = [];
	  //Translate point to the origin
	  p[0] = a[0] - b[0];
	  p[1] = a[1] - b[1];
	  p[2] = a[2] - b[2];

	  //perform rotation
	  r[0] = p[0] * Math.cos(c) - p[1] * Math.sin(c);
	  r[1] = p[0] * Math.sin(c) + p[1] * Math.cos(c);
	  r[2] = p[2];

	  //translate to correct position
	  out[0] = r[0] + b[0];
	  out[1] = r[1] + b[1];
	  out[2] = r[2] + b[2];

	  return out;
	}

	/**
	 * Get the angle between two 3D vectors
	 * @param {vec3} a The first operand
	 * @param {vec3} b The second operand
	 * @returns {Number} The angle in radians
	 */
	function angle$1(a, b) {
	  var tempA = fromValues$4(a[0], a[1], a[2]);
	  var tempB = fromValues$4(b[0], b[1], b[2]);

	  normalize$4(tempA, tempA);
	  normalize$4(tempB, tempB);

	  var cosine = dot$4(tempA, tempB);

	  if (cosine > 1.0) {
	    return 0;
	  } else if (cosine < -1.0) {
	    return Math.PI;
	  } else {
	    return Math.acos(cosine);
	  }
	}

	/**
	 * Returns a string representation of a vector
	 *
	 * @param {vec3} a vector to represent as a string
	 * @returns {String} string representation of the vector
	 */
	function str$4(a) {
	  return 'vec3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ')';
	}

	/**
	 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
	 *
	 * @param {vec3} a The first vector.
	 * @param {vec3} b The second vector.
	 * @returns {Boolean} True if the vectors are equal, false otherwise.
	 */
	function exactEquals$4(a, b) {
	  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
	}

	/**
	 * Returns whether or not the vectors have approximately the same elements in the same position.
	 *
	 * @param {vec3} a The first vector.
	 * @param {vec3} b The second vector.
	 * @returns {Boolean} True if the vectors are equal, false otherwise.
	 */
	function equals$4(a, b) {
	  var a0 = a[0],
	      a1 = a[1],
	      a2 = a[2];
	  var b0 = b[0],
	      b1 = b[1],
	      b2 = b[2];
	  return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2));
	}

	/**
	 * Alias for {@link vec3.subtract}
	 * @function
	 */
	var sub$2 = subtract$2;

	/**
	 * Alias for {@link vec3.multiply}
	 * @function
	 */
	var mul$4 = multiply$4;

	/**
	 * Alias for {@link vec3.divide}
	 * @function
	 */
	var div$2 = divide$2;

	/**
	 * Alias for {@link vec3.distance}
	 * @function
	 */
	var dist$2 = distance$2;

	/**
	 * Alias for {@link vec3.squaredDistance}
	 * @function
	 */
	var sqrDist$2 = squaredDistance$2;

	/**
	 * Alias for {@link vec3.length}
	 * @function
	 */
	var len$4 = length$4;

	/**
	 * Alias for {@link vec3.squaredLength}
	 * @function
	 */
	var sqrLen$4 = squaredLength$4;

	/**
	 * Perform some operation over an array of vec3s.
	 *
	 * @param {Array} a the array of vectors to iterate over
	 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
	 * @param {Number} offset Number of elements to skip at the beginning of the array
	 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
	 * @param {Function} fn Function to call for each vector in the array
	 * @param {Object} [arg] additional argument to pass to fn
	 * @returns {Array} a
	 * @function
	 */
	var forEach$2 = function () {
	  var vec = create$4();

	  return function (a, stride, offset, count, fn, arg) {
	    var i = void 0,
	        l = void 0;
	    if (!stride) {
	      stride = 3;
	    }

	    if (!offset) {
	      offset = 0;
	    }

	    if (count) {
	      l = Math.min(count * stride + offset, a.length);
	    } else {
	      l = a.length;
	    }

	    for (i = offset; i < l; i += stride) {
	      vec[0] = a[i];vec[1] = a[i + 1];vec[2] = a[i + 2];
	      fn(vec, vec, arg);
	      a[i] = vec[0];a[i + 1] = vec[1];a[i + 2] = vec[2];
	    }

	    return a;
	  };
	}();

	var vec3 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		create: create$4,
		clone: clone$4,
		length: length$4,
		fromValues: fromValues$4,
		copy: copy$4,
		set: set$4,
		add: add$4,
		subtract: subtract$2,
		multiply: multiply$4,
		divide: divide$2,
		ceil: ceil$2,
		floor: floor$2,
		min: min$2,
		max: max$2,
		round: round$2,
		scale: scale$4,
		scaleAndAdd: scaleAndAdd$2,
		distance: distance$2,
		squaredDistance: squaredDistance$2,
		squaredLength: squaredLength$4,
		negate: negate$2,
		inverse: inverse$2,
		normalize: normalize$4,
		dot: dot$4,
		cross: cross$1,
		lerp: lerp$4,
		hermite: hermite,
		bezier: bezier,
		random: random$3,
		transformMat4: transformMat4$2,
		transformMat3: transformMat3$1,
		transformQuat: transformQuat$1,
		rotateX: rotateX$2,
		rotateY: rotateY$2,
		rotateZ: rotateZ$2,
		angle: angle$1,
		str: str$4,
		exactEquals: exactEquals$4,
		equals: equals$4,
		sub: sub$2,
		mul: mul$4,
		div: div$2,
		dist: dist$2,
		sqrDist: sqrDist$2,
		len: len$4,
		sqrLen: sqrLen$4,
		forEach: forEach$2
	});

	/**
	 * 4 Dimensional Vector
	 * @module vec4
	 */

	/**
	 * Creates a new, empty vec4
	 *
	 * @returns {vec4} a new 4D vector
	 */
	function create$3() {
	  var out = new ARRAY_TYPE(4);
	  if (ARRAY_TYPE != Float32Array) {
	    out[0] = 0;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	  }
	  return out;
	}

	/**
	 * Creates a new vec4 initialized with values from an existing vector
	 *
	 * @param {vec4} a vector to clone
	 * @returns {vec4} a new 4D vector
	 */
	function clone$3(a) {
	  var out = new ARRAY_TYPE(4);
	  out[0] = a[0];
	  out[1] = a[1];
	  out[2] = a[2];
	  out[3] = a[3];
	  return out;
	}

	/**
	 * Creates a new vec4 initialized with the given values
	 *
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @param {Number} z Z component
	 * @param {Number} w W component
	 * @returns {vec4} a new 4D vector
	 */
	function fromValues$3(x, y, z, w) {
	  var out = new ARRAY_TYPE(4);
	  out[0] = x;
	  out[1] = y;
	  out[2] = z;
	  out[3] = w;
	  return out;
	}

	/**
	 * Copy the values from one vec4 to another
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the source vector
	 * @returns {vec4} out
	 */
	function copy$3(out, a) {
	  out[0] = a[0];
	  out[1] = a[1];
	  out[2] = a[2];
	  out[3] = a[3];
	  return out;
	}

	/**
	 * Set the components of a vec4 to the given values
	 *
	 * @param {vec4} out the receiving vector
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @param {Number} z Z component
	 * @param {Number} w W component
	 * @returns {vec4} out
	 */
	function set$3(out, x, y, z, w) {
	  out[0] = x;
	  out[1] = y;
	  out[2] = z;
	  out[3] = w;
	  return out;
	}

	/**
	 * Adds two vec4's
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {vec4} out
	 */
	function add$3(out, a, b) {
	  out[0] = a[0] + b[0];
	  out[1] = a[1] + b[1];
	  out[2] = a[2] + b[2];
	  out[3] = a[3] + b[3];
	  return out;
	}

	/**
	 * Subtracts vector b from vector a
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {vec4} out
	 */
	function subtract$1(out, a, b) {
	  out[0] = a[0] - b[0];
	  out[1] = a[1] - b[1];
	  out[2] = a[2] - b[2];
	  out[3] = a[3] - b[3];
	  return out;
	}

	/**
	 * Multiplies two vec4's
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {vec4} out
	 */
	function multiply$3(out, a, b) {
	  out[0] = a[0] * b[0];
	  out[1] = a[1] * b[1];
	  out[2] = a[2] * b[2];
	  out[3] = a[3] * b[3];
	  return out;
	}

	/**
	 * Divides two vec4's
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {vec4} out
	 */
	function divide$1(out, a, b) {
	  out[0] = a[0] / b[0];
	  out[1] = a[1] / b[1];
	  out[2] = a[2] / b[2];
	  out[3] = a[3] / b[3];
	  return out;
	}

	/**
	 * Math.ceil the components of a vec4
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a vector to ceil
	 * @returns {vec4} out
	 */
	function ceil$1(out, a) {
	  out[0] = Math.ceil(a[0]);
	  out[1] = Math.ceil(a[1]);
	  out[2] = Math.ceil(a[2]);
	  out[3] = Math.ceil(a[3]);
	  return out;
	}

	/**
	 * Math.floor the components of a vec4
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a vector to floor
	 * @returns {vec4} out
	 */
	function floor$1(out, a) {
	  out[0] = Math.floor(a[0]);
	  out[1] = Math.floor(a[1]);
	  out[2] = Math.floor(a[2]);
	  out[3] = Math.floor(a[3]);
	  return out;
	}

	/**
	 * Returns the minimum of two vec4's
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {vec4} out
	 */
	function min$1(out, a, b) {
	  out[0] = Math.min(a[0], b[0]);
	  out[1] = Math.min(a[1], b[1]);
	  out[2] = Math.min(a[2], b[2]);
	  out[3] = Math.min(a[3], b[3]);
	  return out;
	}

	/**
	 * Returns the maximum of two vec4's
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {vec4} out
	 */
	function max$1(out, a, b) {
	  out[0] = Math.max(a[0], b[0]);
	  out[1] = Math.max(a[1], b[1]);
	  out[2] = Math.max(a[2], b[2]);
	  out[3] = Math.max(a[3], b[3]);
	  return out;
	}

	/**
	 * Math.round the components of a vec4
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a vector to round
	 * @returns {vec4} out
	 */
	function round$1(out, a) {
	  out[0] = Math.round(a[0]);
	  out[1] = Math.round(a[1]);
	  out[2] = Math.round(a[2]);
	  out[3] = Math.round(a[3]);
	  return out;
	}

	/**
	 * Scales a vec4 by a scalar number
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the vector to scale
	 * @param {Number} b amount to scale the vector by
	 * @returns {vec4} out
	 */
	function scale$3(out, a, b) {
	  out[0] = a[0] * b;
	  out[1] = a[1] * b;
	  out[2] = a[2] * b;
	  out[3] = a[3] * b;
	  return out;
	}

	/**
	 * Adds two vec4's after scaling the second operand by a scalar value
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @param {Number} scale the amount to scale b by before adding
	 * @returns {vec4} out
	 */
	function scaleAndAdd$1(out, a, b, scale) {
	  out[0] = a[0] + b[0] * scale;
	  out[1] = a[1] + b[1] * scale;
	  out[2] = a[2] + b[2] * scale;
	  out[3] = a[3] + b[3] * scale;
	  return out;
	}

	/**
	 * Calculates the euclidian distance between two vec4's
	 *
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {Number} distance between a and b
	 */
	function distance$1(a, b) {
	  var x = b[0] - a[0];
	  var y = b[1] - a[1];
	  var z = b[2] - a[2];
	  var w = b[3] - a[3];
	  return Math.sqrt(x * x + y * y + z * z + w * w);
	}

	/**
	 * Calculates the squared euclidian distance between two vec4's
	 *
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {Number} squared distance between a and b
	 */
	function squaredDistance$1(a, b) {
	  var x = b[0] - a[0];
	  var y = b[1] - a[1];
	  var z = b[2] - a[2];
	  var w = b[3] - a[3];
	  return x * x + y * y + z * z + w * w;
	}

	/**
	 * Calculates the length of a vec4
	 *
	 * @param {vec4} a vector to calculate length of
	 * @returns {Number} length of a
	 */
	function length$3(a) {
	  var x = a[0];
	  var y = a[1];
	  var z = a[2];
	  var w = a[3];
	  return Math.sqrt(x * x + y * y + z * z + w * w);
	}

	/**
	 * Calculates the squared length of a vec4
	 *
	 * @param {vec4} a vector to calculate squared length of
	 * @returns {Number} squared length of a
	 */
	function squaredLength$3(a) {
	  var x = a[0];
	  var y = a[1];
	  var z = a[2];
	  var w = a[3];
	  return x * x + y * y + z * z + w * w;
	}

	/**
	 * Negates the components of a vec4
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a vector to negate
	 * @returns {vec4} out
	 */
	function negate$1(out, a) {
	  out[0] = -a[0];
	  out[1] = -a[1];
	  out[2] = -a[2];
	  out[3] = -a[3];
	  return out;
	}

	/**
	 * Returns the inverse of the components of a vec4
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a vector to invert
	 * @returns {vec4} out
	 */
	function inverse$1(out, a) {
	  out[0] = 1.0 / a[0];
	  out[1] = 1.0 / a[1];
	  out[2] = 1.0 / a[2];
	  out[3] = 1.0 / a[3];
	  return out;
	}

	/**
	 * Normalize a vec4
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a vector to normalize
	 * @returns {vec4} out
	 */
	function normalize$3(out, a) {
	  var x = a[0];
	  var y = a[1];
	  var z = a[2];
	  var w = a[3];
	  var len = x * x + y * y + z * z + w * w;
	  if (len > 0) {
	    len = 1 / Math.sqrt(len);
	    out[0] = x * len;
	    out[1] = y * len;
	    out[2] = z * len;
	    out[3] = w * len;
	  }
	  return out;
	}

	/**
	 * Calculates the dot product of two vec4's
	 *
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {Number} dot product of a and b
	 */
	function dot$3(a, b) {
	  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
	}

	/**
	 * Performs a linear interpolation between two vec4's
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
	 * @returns {vec4} out
	 */
	function lerp$3(out, a, b, t) {
	  var ax = a[0];
	  var ay = a[1];
	  var az = a[2];
	  var aw = a[3];
	  out[0] = ax + t * (b[0] - ax);
	  out[1] = ay + t * (b[1] - ay);
	  out[2] = az + t * (b[2] - az);
	  out[3] = aw + t * (b[3] - aw);
	  return out;
	}

	/**
	 * Generates a random vector with the given scale
	 *
	 * @param {vec4} out the receiving vector
	 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
	 * @returns {vec4} out
	 */
	function random$2(out, scale) {
	  scale = scale || 1.0;

	  // Marsaglia, George. Choosing a Point from the Surface of a
	  // Sphere. Ann. Math. Statist. 43 (1972), no. 2, 645--646.
	  // http://projecteuclid.org/euclid.aoms/1177692644;
	  var v1, v2, v3, v4;
	  var s1, s2;
	  do {
	    v1 = RANDOM() * 2 - 1;
	    v2 = RANDOM() * 2 - 1;
	    s1 = v1 * v1 + v2 * v2;
	  } while (s1 >= 1);
	  do {
	    v3 = RANDOM() * 2 - 1;
	    v4 = RANDOM() * 2 - 1;
	    s2 = v3 * v3 + v4 * v4;
	  } while (s2 >= 1);

	  var d = Math.sqrt((1 - s1) / s2);
	  out[0] = scale * v1;
	  out[1] = scale * v2;
	  out[2] = scale * v3 * d;
	  out[3] = scale * v4 * d;
	  return out;
	}

	/**
	 * Transforms the vec4 with a mat4.
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the vector to transform
	 * @param {mat4} m matrix to transform with
	 * @returns {vec4} out
	 */
	function transformMat4$1(out, a, m) {
	  var x = a[0],
	      y = a[1],
	      z = a[2],
	      w = a[3];
	  out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
	  out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
	  out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
	  out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
	  return out;
	}

	/**
	 * Transforms the vec4 with a quat
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the vector to transform
	 * @param {quat} q quaternion to transform with
	 * @returns {vec4} out
	 */
	function transformQuat(out, a, q) {
	  var x = a[0],
	      y = a[1],
	      z = a[2];
	  var qx = q[0],
	      qy = q[1],
	      qz = q[2],
	      qw = q[3];

	  // calculate quat * vec
	  var ix = qw * x + qy * z - qz * y;
	  var iy = qw * y + qz * x - qx * z;
	  var iz = qw * z + qx * y - qy * x;
	  var iw = -qx * x - qy * y - qz * z;

	  // calculate result * inverse quat
	  out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
	  out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
	  out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
	  out[3] = a[3];
	  return out;
	}

	/**
	 * Returns a string representation of a vector
	 *
	 * @param {vec4} a vector to represent as a string
	 * @returns {String} string representation of the vector
	 */
	function str$3(a) {
	  return 'vec4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
	}

	/**
	 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
	 *
	 * @param {vec4} a The first vector.
	 * @param {vec4} b The second vector.
	 * @returns {Boolean} True if the vectors are equal, false otherwise.
	 */
	function exactEquals$3(a, b) {
	  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
	}

	/**
	 * Returns whether or not the vectors have approximately the same elements in the same position.
	 *
	 * @param {vec4} a The first vector.
	 * @param {vec4} b The second vector.
	 * @returns {Boolean} True if the vectors are equal, false otherwise.
	 */
	function equals$3(a, b) {
	  var a0 = a[0],
	      a1 = a[1],
	      a2 = a[2],
	      a3 = a[3];
	  var b0 = b[0],
	      b1 = b[1],
	      b2 = b[2],
	      b3 = b[3];
	  return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3));
	}

	/**
	 * Alias for {@link vec4.subtract}
	 * @function
	 */
	var sub$1 = subtract$1;

	/**
	 * Alias for {@link vec4.multiply}
	 * @function
	 */
	var mul$3 = multiply$3;

	/**
	 * Alias for {@link vec4.divide}
	 * @function
	 */
	var div$1 = divide$1;

	/**
	 * Alias for {@link vec4.distance}
	 * @function
	 */
	var dist$1 = distance$1;

	/**
	 * Alias for {@link vec4.squaredDistance}
	 * @function
	 */
	var sqrDist$1 = squaredDistance$1;

	/**
	 * Alias for {@link vec4.length}
	 * @function
	 */
	var len$3 = length$3;

	/**
	 * Alias for {@link vec4.squaredLength}
	 * @function
	 */
	var sqrLen$3 = squaredLength$3;

	/**
	 * Perform some operation over an array of vec4s.
	 *
	 * @param {Array} a the array of vectors to iterate over
	 * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
	 * @param {Number} offset Number of elements to skip at the beginning of the array
	 * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
	 * @param {Function} fn Function to call for each vector in the array
	 * @param {Object} [arg] additional argument to pass to fn
	 * @returns {Array} a
	 * @function
	 */
	var forEach$1 = function () {
	  var vec = create$3();

	  return function (a, stride, offset, count, fn, arg) {
	    var i = void 0,
	        l = void 0;
	    if (!stride) {
	      stride = 4;
	    }

	    if (!offset) {
	      offset = 0;
	    }

	    if (count) {
	      l = Math.min(count * stride + offset, a.length);
	    } else {
	      l = a.length;
	    }

	    for (i = offset; i < l; i += stride) {
	      vec[0] = a[i];vec[1] = a[i + 1];vec[2] = a[i + 2];vec[3] = a[i + 3];
	      fn(vec, vec, arg);
	      a[i] = vec[0];a[i + 1] = vec[1];a[i + 2] = vec[2];a[i + 3] = vec[3];
	    }

	    return a;
	  };
	}();

	var vec4 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		create: create$3,
		clone: clone$3,
		fromValues: fromValues$3,
		copy: copy$3,
		set: set$3,
		add: add$3,
		subtract: subtract$1,
		multiply: multiply$3,
		divide: divide$1,
		ceil: ceil$1,
		floor: floor$1,
		min: min$1,
		max: max$1,
		round: round$1,
		scale: scale$3,
		scaleAndAdd: scaleAndAdd$1,
		distance: distance$1,
		squaredDistance: squaredDistance$1,
		length: length$3,
		squaredLength: squaredLength$3,
		negate: negate$1,
		inverse: inverse$1,
		normalize: normalize$3,
		dot: dot$3,
		lerp: lerp$3,
		random: random$2,
		transformMat4: transformMat4$1,
		transformQuat: transformQuat,
		str: str$3,
		exactEquals: exactEquals$3,
		equals: equals$3,
		sub: sub$1,
		mul: mul$3,
		div: div$1,
		dist: dist$1,
		sqrDist: sqrDist$1,
		len: len$3,
		sqrLen: sqrLen$3,
		forEach: forEach$1
	});

	/**
	 * Quaternion
	 * @module quat
	 */

	/**
	 * Creates a new identity quat
	 *
	 * @returns {quat} a new quaternion
	 */
	function create$2() {
	  var out = new ARRAY_TYPE(4);
	  if (ARRAY_TYPE != Float32Array) {
	    out[0] = 0;
	    out[1] = 0;
	    out[2] = 0;
	  }
	  out[3] = 1;
	  return out;
	}

	/**
	 * Set a quat to the identity quaternion
	 *
	 * @param {quat} out the receiving quaternion
	 * @returns {quat} out
	 */
	function identity$1(out) {
	  out[0] = 0;
	  out[1] = 0;
	  out[2] = 0;
	  out[3] = 1;
	  return out;
	}

	/**
	 * Sets a quat from the given angle and rotation axis,
	 * then returns it.
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {vec3} axis the axis around which to rotate
	 * @param {Number} rad the angle in radians
	 * @returns {quat} out
	 **/
	function setAxisAngle(out, axis, rad) {
	  rad = rad * 0.5;
	  var s = Math.sin(rad);
	  out[0] = s * axis[0];
	  out[1] = s * axis[1];
	  out[2] = s * axis[2];
	  out[3] = Math.cos(rad);
	  return out;
	}

	/**
	 * Gets the rotation axis and angle for a given
	 *  quaternion. If a quaternion is created with
	 *  setAxisAngle, this method will return the same
	 *  values as providied in the original parameter list
	 *  OR functionally equivalent values.
	 * Example: The quaternion formed by axis [0, 0, 1] and
	 *  angle -90 is the same as the quaternion formed by
	 *  [0, 0, 1] and 270. This method favors the latter.
	 * @param  {vec3} out_axis  Vector receiving the axis of rotation
	 * @param  {quat} q     Quaternion to be decomposed
	 * @return {Number}     Angle, in radians, of the rotation
	 */
	function getAxisAngle(out_axis, q) {
	  var rad = Math.acos(q[3]) * 2.0;
	  var s = Math.sin(rad / 2.0);
	  if (s > EPSILON) {
	    out_axis[0] = q[0] / s;
	    out_axis[1] = q[1] / s;
	    out_axis[2] = q[2] / s;
	  } else {
	    // If s is zero, return any axis (no rotation - axis does not matter)
	    out_axis[0] = 1;
	    out_axis[1] = 0;
	    out_axis[2] = 0;
	  }
	  return rad;
	}

	/**
	 * Multiplies two quat's
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a the first operand
	 * @param {quat} b the second operand
	 * @returns {quat} out
	 */
	function multiply$2(out, a, b) {
	  var ax = a[0],
	      ay = a[1],
	      az = a[2],
	      aw = a[3];
	  var bx = b[0],
	      by = b[1],
	      bz = b[2],
	      bw = b[3];

	  out[0] = ax * bw + aw * bx + ay * bz - az * by;
	  out[1] = ay * bw + aw * by + az * bx - ax * bz;
	  out[2] = az * bw + aw * bz + ax * by - ay * bx;
	  out[3] = aw * bw - ax * bx - ay * by - az * bz;
	  return out;
	}

	/**
	 * Rotates a quaternion by the given angle about the X axis
	 *
	 * @param {quat} out quat receiving operation result
	 * @param {quat} a quat to rotate
	 * @param {number} rad angle (in radians) to rotate
	 * @returns {quat} out
	 */
	function rotateX$1(out, a, rad) {
	  rad *= 0.5;

	  var ax = a[0],
	      ay = a[1],
	      az = a[2],
	      aw = a[3];
	  var bx = Math.sin(rad),
	      bw = Math.cos(rad);

	  out[0] = ax * bw + aw * bx;
	  out[1] = ay * bw + az * bx;
	  out[2] = az * bw - ay * bx;
	  out[3] = aw * bw - ax * bx;
	  return out;
	}

	/**
	 * Rotates a quaternion by the given angle about the Y axis
	 *
	 * @param {quat} out quat receiving operation result
	 * @param {quat} a quat to rotate
	 * @param {number} rad angle (in radians) to rotate
	 * @returns {quat} out
	 */
	function rotateY$1(out, a, rad) {
	  rad *= 0.5;

	  var ax = a[0],
	      ay = a[1],
	      az = a[2],
	      aw = a[3];
	  var by = Math.sin(rad),
	      bw = Math.cos(rad);

	  out[0] = ax * bw - az * by;
	  out[1] = ay * bw + aw * by;
	  out[2] = az * bw + ax * by;
	  out[3] = aw * bw - ay * by;
	  return out;
	}

	/**
	 * Rotates a quaternion by the given angle about the Z axis
	 *
	 * @param {quat} out quat receiving operation result
	 * @param {quat} a quat to rotate
	 * @param {number} rad angle (in radians) to rotate
	 * @returns {quat} out
	 */
	function rotateZ$1(out, a, rad) {
	  rad *= 0.5;

	  var ax = a[0],
	      ay = a[1],
	      az = a[2],
	      aw = a[3];
	  var bz = Math.sin(rad),
	      bw = Math.cos(rad);

	  out[0] = ax * bw + ay * bz;
	  out[1] = ay * bw - ax * bz;
	  out[2] = az * bw + aw * bz;
	  out[3] = aw * bw - az * bz;
	  return out;
	}

	/**
	 * Calculates the W component of a quat from the X, Y, and Z components.
	 * Assumes that quaternion is 1 unit in length.
	 * Any existing W component will be ignored.
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a quat to calculate W component of
	 * @returns {quat} out
	 */
	function calculateW(out, a) {
	  var x = a[0],
	      y = a[1],
	      z = a[2];

	  out[0] = x;
	  out[1] = y;
	  out[2] = z;
	  out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
	  return out;
	}

	/**
	 * Performs a spherical linear interpolation between two quat
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a the first operand
	 * @param {quat} b the second operand
	 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
	 * @returns {quat} out
	 */
	function slerp(out, a, b, t) {
	  // benchmarks:
	  //    http://jsperf.com/quaternion-slerp-implementations
	  var ax = a[0],
	      ay = a[1],
	      az = a[2],
	      aw = a[3];
	  var bx = b[0],
	      by = b[1],
	      bz = b[2],
	      bw = b[3];

	  var omega = void 0,
	      cosom = void 0,
	      sinom = void 0,
	      scale0 = void 0,
	      scale1 = void 0;

	  // calc cosine
	  cosom = ax * bx + ay * by + az * bz + aw * bw;
	  // adjust signs (if necessary)
	  if (cosom < 0.0) {
	    cosom = -cosom;
	    bx = -bx;
	    by = -by;
	    bz = -bz;
	    bw = -bw;
	  }
	  // calculate coefficients
	  if (1.0 - cosom > EPSILON) {
	    // standard case (slerp)
	    omega = Math.acos(cosom);
	    sinom = Math.sin(omega);
	    scale0 = Math.sin((1.0 - t) * omega) / sinom;
	    scale1 = Math.sin(t * omega) / sinom;
	  } else {
	    // "from" and "to" quaternions are very close
	    //  ... so we can do a linear interpolation
	    scale0 = 1.0 - t;
	    scale1 = t;
	  }
	  // calculate final values
	  out[0] = scale0 * ax + scale1 * bx;
	  out[1] = scale0 * ay + scale1 * by;
	  out[2] = scale0 * az + scale1 * bz;
	  out[3] = scale0 * aw + scale1 * bw;

	  return out;
	}

	/**
	 * Generates a random quaternion
	 *
	 * @param {quat} out the receiving quaternion
	 * @returns {quat} out
	 */
	function random$1(out) {
	  // Implementation of http://planning.cs.uiuc.edu/node198.html
	  // TODO: Calling random 3 times is probably not the fastest solution
	  var u1 = RANDOM();
	  var u2 = RANDOM();
	  var u3 = RANDOM();

	  var sqrt1MinusU1 = Math.sqrt(1 - u1);
	  var sqrtU1 = Math.sqrt(u1);

	  out[0] = sqrt1MinusU1 * Math.sin(2.0 * Math.PI * u2);
	  out[1] = sqrt1MinusU1 * Math.cos(2.0 * Math.PI * u2);
	  out[2] = sqrtU1 * Math.sin(2.0 * Math.PI * u3);
	  out[3] = sqrtU1 * Math.cos(2.0 * Math.PI * u3);
	  return out;
	}

	/**
	 * Calculates the inverse of a quat
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a quat to calculate inverse of
	 * @returns {quat} out
	 */
	function invert$1(out, a) {
	  var a0 = a[0],
	      a1 = a[1],
	      a2 = a[2],
	      a3 = a[3];
	  var dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
	  var invDot = dot ? 1.0 / dot : 0;

	  // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

	  out[0] = -a0 * invDot;
	  out[1] = -a1 * invDot;
	  out[2] = -a2 * invDot;
	  out[3] = a3 * invDot;
	  return out;
	}

	/**
	 * Calculates the conjugate of a quat
	 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a quat to calculate conjugate of
	 * @returns {quat} out
	 */
	function conjugate$1(out, a) {
	  out[0] = -a[0];
	  out[1] = -a[1];
	  out[2] = -a[2];
	  out[3] = a[3];
	  return out;
	}

	/**
	 * Creates a quaternion from the given 3x3 rotation matrix.
	 *
	 * NOTE: The resultant quaternion is not normalized, so you should be sure
	 * to renormalize the quaternion yourself where necessary.
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {mat3} m rotation matrix
	 * @returns {quat} out
	 * @function
	 */
	function fromMat3(out, m) {
	  // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
	  // article "Quaternion Calculus and Fast Animation".
	  var fTrace = m[0] + m[4] + m[8];
	  var fRoot = void 0;

	  if (fTrace > 0.0) {
	    // |w| > 1/2, may as well choose w > 1/2
	    fRoot = Math.sqrt(fTrace + 1.0); // 2w
	    out[3] = 0.5 * fRoot;
	    fRoot = 0.5 / fRoot; // 1/(4w)
	    out[0] = (m[5] - m[7]) * fRoot;
	    out[1] = (m[6] - m[2]) * fRoot;
	    out[2] = (m[1] - m[3]) * fRoot;
	  } else {
	    // |w| <= 1/2
	    var i = 0;
	    if (m[4] > m[0]) i = 1;
	    if (m[8] > m[i * 3 + i]) i = 2;
	    var j = (i + 1) % 3;
	    var k = (i + 2) % 3;

	    fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
	    out[i] = 0.5 * fRoot;
	    fRoot = 0.5 / fRoot;
	    out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
	    out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
	    out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
	  }

	  return out;
	}

	/**
	 * Creates a quaternion from the given euler angle x, y, z.
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {x} Angle to rotate around X axis in degrees.
	 * @param {y} Angle to rotate around Y axis in degrees.
	 * @param {z} Angle to rotate around Z axis in degrees.
	 * @returns {quat} out
	 * @function
	 */
	function fromEuler(out, x, y, z) {
	  var halfToRad = 0.5 * Math.PI / 180.0;
	  x *= halfToRad;
	  y *= halfToRad;
	  z *= halfToRad;

	  var sx = Math.sin(x);
	  var cx = Math.cos(x);
	  var sy = Math.sin(y);
	  var cy = Math.cos(y);
	  var sz = Math.sin(z);
	  var cz = Math.cos(z);

	  out[0] = sx * cy * cz - cx * sy * sz;
	  out[1] = cx * sy * cz + sx * cy * sz;
	  out[2] = cx * cy * sz - sx * sy * cz;
	  out[3] = cx * cy * cz + sx * sy * sz;

	  return out;
	}

	/**
	 * Returns a string representation of a quatenion
	 *
	 * @param {quat} a vector to represent as a string
	 * @returns {String} string representation of the vector
	 */
	function str$2(a) {
	  return 'quat(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
	}

	/**
	 * Creates a new quat initialized with values from an existing quaternion
	 *
	 * @param {quat} a quaternion to clone
	 * @returns {quat} a new quaternion
	 * @function
	 */
	var clone$2 = clone$3;

	/**
	 * Creates a new quat initialized with the given values
	 *
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @param {Number} z Z component
	 * @param {Number} w W component
	 * @returns {quat} a new quaternion
	 * @function
	 */
	var fromValues$2 = fromValues$3;

	/**
	 * Copy the values from one quat to another
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a the source quaternion
	 * @returns {quat} out
	 * @function
	 */
	var copy$2 = copy$3;

	/**
	 * Set the components of a quat to the given values
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @param {Number} z Z component
	 * @param {Number} w W component
	 * @returns {quat} out
	 * @function
	 */
	var set$2 = set$3;

	/**
	 * Adds two quat's
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a the first operand
	 * @param {quat} b the second operand
	 * @returns {quat} out
	 * @function
	 */
	var add$2 = add$3;

	/**
	 * Alias for {@link quat.multiply}
	 * @function
	 */
	var mul$2 = multiply$2;

	/**
	 * Scales a quat by a scalar number
	 *
	 * @param {quat} out the receiving vector
	 * @param {quat} a the vector to scale
	 * @param {Number} b amount to scale the vector by
	 * @returns {quat} out
	 * @function
	 */
	var scale$2 = scale$3;

	/**
	 * Calculates the dot product of two quat's
	 *
	 * @param {quat} a the first operand
	 * @param {quat} b the second operand
	 * @returns {Number} dot product of a and b
	 * @function
	 */
	var dot$2 = dot$3;

	/**
	 * Performs a linear interpolation between two quat's
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a the first operand
	 * @param {quat} b the second operand
	 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
	 * @returns {quat} out
	 * @function
	 */
	var lerp$2 = lerp$3;

	/**
	 * Calculates the length of a quat
	 *
	 * @param {quat} a vector to calculate length of
	 * @returns {Number} length of a
	 */
	var length$2 = length$3;

	/**
	 * Alias for {@link quat.length}
	 * @function
	 */
	var len$2 = length$2;

	/**
	 * Calculates the squared length of a quat
	 *
	 * @param {quat} a vector to calculate squared length of
	 * @returns {Number} squared length of a
	 * @function
	 */
	var squaredLength$2 = squaredLength$3;

	/**
	 * Alias for {@link quat.squaredLength}
	 * @function
	 */
	var sqrLen$2 = squaredLength$2;

	/**
	 * Normalize a quat
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a quaternion to normalize
	 * @returns {quat} out
	 * @function
	 */
	var normalize$2 = normalize$3;

	/**
	 * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
	 *
	 * @param {quat} a The first quaternion.
	 * @param {quat} b The second quaternion.
	 * @returns {Boolean} True if the vectors are equal, false otherwise.
	 */
	var exactEquals$2 = exactEquals$3;

	/**
	 * Returns whether or not the quaternions have approximately the same elements in the same position.
	 *
	 * @param {quat} a The first vector.
	 * @param {quat} b The second vector.
	 * @returns {Boolean} True if the vectors are equal, false otherwise.
	 */
	var equals$2 = equals$3;

	/**
	 * Sets a quaternion to represent the shortest rotation from one
	 * vector to another.
	 *
	 * Both vectors are assumed to be unit length.
	 *
	 * @param {quat} out the receiving quaternion.
	 * @param {vec3} a the initial vector
	 * @param {vec3} b the destination vector
	 * @returns {quat} out
	 */
	var rotationTo = function () {
	  var tmpvec3 = create$4();
	  var xUnitVec3 = fromValues$4(1, 0, 0);
	  var yUnitVec3 = fromValues$4(0, 1, 0);

	  return function (out, a, b) {
	    var dot = dot$4(a, b);
	    if (dot < -0.999999) {
	      cross$1(tmpvec3, xUnitVec3, a);
	      if (len$4(tmpvec3) < 0.000001) cross$1(tmpvec3, yUnitVec3, a);
	      normalize$4(tmpvec3, tmpvec3);
	      setAxisAngle(out, tmpvec3, Math.PI);
	      return out;
	    } else if (dot > 0.999999) {
	      out[0] = 0;
	      out[1] = 0;
	      out[2] = 0;
	      out[3] = 1;
	      return out;
	    } else {
	      cross$1(tmpvec3, a, b);
	      out[0] = tmpvec3[0];
	      out[1] = tmpvec3[1];
	      out[2] = tmpvec3[2];
	      out[3] = 1 + dot;
	      return normalize$2(out, out);
	    }
	  };
	}();

	/**
	 * Performs a spherical linear interpolation with two control points
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a the first operand
	 * @param {quat} b the second operand
	 * @param {quat} c the third operand
	 * @param {quat} d the fourth operand
	 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
	 * @returns {quat} out
	 */
	var sqlerp = function () {
	  var temp1 = create$2();
	  var temp2 = create$2();

	  return function (out, a, b, c, d, t) {
	    slerp(temp1, a, d, t);
	    slerp(temp2, b, c, t);
	    slerp(out, temp1, temp2, 2 * t * (1 - t));

	    return out;
	  };
	}();

	/**
	 * Sets the specified quaternion with values corresponding to the given
	 * axes. Each axis is a vec3 and is expected to be unit length and
	 * perpendicular to all other specified axes.
	 *
	 * @param {vec3} view  the vector representing the viewing direction
	 * @param {vec3} right the vector representing the local "right" direction
	 * @param {vec3} up    the vector representing the local "up" direction
	 * @returns {quat} out
	 */
	var setAxes = function () {
	  var matr = create$6();

	  return function (out, view, right, up) {
	    matr[0] = right[0];
	    matr[3] = right[1];
	    matr[6] = right[2];

	    matr[1] = up[0];
	    matr[4] = up[1];
	    matr[7] = up[2];

	    matr[2] = -view[0];
	    matr[5] = -view[1];
	    matr[8] = -view[2];

	    return normalize$2(out, fromMat3(out, matr));
	  };
	}();

	var quat = /*#__PURE__*/Object.freeze({
		__proto__: null,
		create: create$2,
		identity: identity$1,
		setAxisAngle: setAxisAngle,
		getAxisAngle: getAxisAngle,
		multiply: multiply$2,
		rotateX: rotateX$1,
		rotateY: rotateY$1,
		rotateZ: rotateZ$1,
		calculateW: calculateW,
		slerp: slerp,
		random: random$1,
		invert: invert$1,
		conjugate: conjugate$1,
		fromMat3: fromMat3,
		fromEuler: fromEuler,
		str: str$2,
		clone: clone$2,
		fromValues: fromValues$2,
		copy: copy$2,
		set: set$2,
		add: add$2,
		mul: mul$2,
		scale: scale$2,
		dot: dot$2,
		lerp: lerp$2,
		length: length$2,
		len: len$2,
		squaredLength: squaredLength$2,
		sqrLen: sqrLen$2,
		normalize: normalize$2,
		exactEquals: exactEquals$2,
		equals: equals$2,
		rotationTo: rotationTo,
		sqlerp: sqlerp,
		setAxes: setAxes
	});

	/**
	 * Dual Quaternion<br>
	 * Format: [real, dual]<br>
	 * Quaternion format: XYZW<br>
	 * Make sure to have normalized dual quaternions, otherwise the functions may not work as intended.<br>
	 * @module quat2
	 */

	/**
	 * Creates a new identity dual quat
	 *
	 * @returns {quat2} a new dual quaternion [real -> rotation, dual -> translation]
	 */
	function create$1() {
	  var dq = new ARRAY_TYPE(8);
	  if (ARRAY_TYPE != Float32Array) {
	    dq[0] = 0;
	    dq[1] = 0;
	    dq[2] = 0;
	    dq[4] = 0;
	    dq[5] = 0;
	    dq[6] = 0;
	    dq[7] = 0;
	  }
	  dq[3] = 1;
	  return dq;
	}

	/**
	 * Creates a new quat initialized with values from an existing quaternion
	 *
	 * @param {quat2} a dual quaternion to clone
	 * @returns {quat2} new dual quaternion
	 * @function
	 */
	function clone$1(a) {
	  var dq = new ARRAY_TYPE(8);
	  dq[0] = a[0];
	  dq[1] = a[1];
	  dq[2] = a[2];
	  dq[3] = a[3];
	  dq[4] = a[4];
	  dq[5] = a[5];
	  dq[6] = a[6];
	  dq[7] = a[7];
	  return dq;
	}

	/**
	 * Creates a new dual quat initialized with the given values
	 *
	 * @param {Number} x1 X component
	 * @param {Number} y1 Y component
	 * @param {Number} z1 Z component
	 * @param {Number} w1 W component
	 * @param {Number} x2 X component
	 * @param {Number} y2 Y component
	 * @param {Number} z2 Z component
	 * @param {Number} w2 W component
	 * @returns {quat2} new dual quaternion
	 * @function
	 */
	function fromValues$1(x1, y1, z1, w1, x2, y2, z2, w2) {
	  var dq = new ARRAY_TYPE(8);
	  dq[0] = x1;
	  dq[1] = y1;
	  dq[2] = z1;
	  dq[3] = w1;
	  dq[4] = x2;
	  dq[5] = y2;
	  dq[6] = z2;
	  dq[7] = w2;
	  return dq;
	}

	/**
	 * Creates a new dual quat from the given values (quat and translation)
	 *
	 * @param {Number} x1 X component
	 * @param {Number} y1 Y component
	 * @param {Number} z1 Z component
	 * @param {Number} w1 W component
	 * @param {Number} x2 X component (translation)
	 * @param {Number} y2 Y component (translation)
	 * @param {Number} z2 Z component (translation)
	 * @returns {quat2} new dual quaternion
	 * @function
	 */
	function fromRotationTranslationValues(x1, y1, z1, w1, x2, y2, z2) {
	  var dq = new ARRAY_TYPE(8);
	  dq[0] = x1;
	  dq[1] = y1;
	  dq[2] = z1;
	  dq[3] = w1;
	  var ax = x2 * 0.5,
	      ay = y2 * 0.5,
	      az = z2 * 0.5;
	  dq[4] = ax * w1 + ay * z1 - az * y1;
	  dq[5] = ay * w1 + az * x1 - ax * z1;
	  dq[6] = az * w1 + ax * y1 - ay * x1;
	  dq[7] = -ax * x1 - ay * y1 - az * z1;
	  return dq;
	}

	/**
	 * Creates a dual quat from a quaternion and a translation
	 *
	 * @param {quat2} dual quaternion receiving operation result
	 * @param {quat} q quaternion
	 * @param {vec3} t tranlation vector
	 * @returns {quat2} dual quaternion receiving operation result
	 * @function
	 */
	function fromRotationTranslation(out, q, t) {
	  var ax = t[0] * 0.5,
	      ay = t[1] * 0.5,
	      az = t[2] * 0.5,
	      bx = q[0],
	      by = q[1],
	      bz = q[2],
	      bw = q[3];
	  out[0] = bx;
	  out[1] = by;
	  out[2] = bz;
	  out[3] = bw;
	  out[4] = ax * bw + ay * bz - az * by;
	  out[5] = ay * bw + az * bx - ax * bz;
	  out[6] = az * bw + ax * by - ay * bx;
	  out[7] = -ax * bx - ay * by - az * bz;
	  return out;
	}

	/**
	 * Creates a dual quat from a translation
	 *
	 * @param {quat2} dual quaternion receiving operation result
	 * @param {vec3} t translation vector
	 * @returns {quat2} dual quaternion receiving operation result
	 * @function
	 */
	function fromTranslation(out, t) {
	  out[0] = 0;
	  out[1] = 0;
	  out[2] = 0;
	  out[3] = 1;
	  out[4] = t[0] * 0.5;
	  out[5] = t[1] * 0.5;
	  out[6] = t[2] * 0.5;
	  out[7] = 0;
	  return out;
	}

	/**
	 * Creates a dual quat from a quaternion
	 *
	 * @param {quat2} dual quaternion receiving operation result
	 * @param {quat} q the quaternion
	 * @returns {quat2} dual quaternion receiving operation result
	 * @function
	 */
	function fromRotation(out, q) {
	  out[0] = q[0];
	  out[1] = q[1];
	  out[2] = q[2];
	  out[3] = q[3];
	  out[4] = 0;
	  out[5] = 0;
	  out[6] = 0;
	  out[7] = 0;
	  return out;
	}

	/**
	 * Creates a new dual quat from a matrix (4x4)
	 *
	 * @param {quat2} out the dual quaternion
	 * @param {mat4} a the matrix
	 * @returns {quat2} dual quat receiving operation result
	 * @function
	 */
	function fromMat4(out, a) {
	  //TODO Optimize this
	  var outer = create$2();
	  getRotation(outer, a);
	  var t = new ARRAY_TYPE(3);
	  getTranslation$1(t, a);
	  fromRotationTranslation(out, outer, t);
	  return out;
	}

	/**
	 * Copy the values from one dual quat to another
	 *
	 * @param {quat2} out the receiving dual quaternion
	 * @param {quat2} a the source dual quaternion
	 * @returns {quat2} out
	 * @function
	 */
	function copy$1(out, a) {
	  out[0] = a[0];
	  out[1] = a[1];
	  out[2] = a[2];
	  out[3] = a[3];
	  out[4] = a[4];
	  out[5] = a[5];
	  out[6] = a[6];
	  out[7] = a[7];
	  return out;
	}

	/**
	 * Set a dual quat to the identity dual quaternion
	 *
	 * @param {quat2} out the receiving quaternion
	 * @returns {quat2} out
	 */
	function identity(out) {
	  out[0] = 0;
	  out[1] = 0;
	  out[2] = 0;
	  out[3] = 1;
	  out[4] = 0;
	  out[5] = 0;
	  out[6] = 0;
	  out[7] = 0;
	  return out;
	}

	/**
	 * Set the components of a dual quat to the given values
	 *
	 * @param {quat2} out the receiving quaternion
	 * @param {Number} x1 X component
	 * @param {Number} y1 Y component
	 * @param {Number} z1 Z component
	 * @param {Number} w1 W component
	 * @param {Number} x2 X component
	 * @param {Number} y2 Y component
	 * @param {Number} z2 Z component
	 * @param {Number} w2 W component
	 * @returns {quat2} out
	 * @function
	 */
	function set$1(out, x1, y1, z1, w1, x2, y2, z2, w2) {
	  out[0] = x1;
	  out[1] = y1;
	  out[2] = z1;
	  out[3] = w1;

	  out[4] = x2;
	  out[5] = y2;
	  out[6] = z2;
	  out[7] = w2;
	  return out;
	}

	/**
	 * Gets the real part of a dual quat
	 * @param  {quat} out real part
	 * @param  {quat2} a Dual Quaternion
	 * @return {quat} real part
	 */
	var getReal = copy$2;

	/**
	 * Gets the dual part of a dual quat
	 * @param  {quat} out dual part
	 * @param  {quat2} a Dual Quaternion
	 * @return {quat} dual part
	 */
	function getDual(out, a) {
	  out[0] = a[4];
	  out[1] = a[5];
	  out[2] = a[6];
	  out[3] = a[7];
	  return out;
	}

	/**
	 * Set the real component of a dual quat to the given quaternion
	 *
	 * @param {quat2} out the receiving quaternion
	 * @param {quat} q a quaternion representing the real part
	 * @returns {quat2} out
	 * @function
	 */
	var setReal = copy$2;

	/**
	 * Set the dual component of a dual quat to the given quaternion
	 *
	 * @param {quat2} out the receiving quaternion
	 * @param {quat} q a quaternion representing the dual part
	 * @returns {quat2} out
	 * @function
	 */
	function setDual(out, q) {
	  out[4] = q[0];
	  out[5] = q[1];
	  out[6] = q[2];
	  out[7] = q[3];
	  return out;
	}

	/**
	 * Gets the translation of a normalized dual quat
	 * @param  {vec3} out translation
	 * @param  {quat2} a Dual Quaternion to be decomposed
	 * @return {vec3} translation
	 */
	function getTranslation(out, a) {
	  var ax = a[4],
	      ay = a[5],
	      az = a[6],
	      aw = a[7],
	      bx = -a[0],
	      by = -a[1],
	      bz = -a[2],
	      bw = a[3];
	  out[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
	  out[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
	  out[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
	  return out;
	}

	/**
	 * Translates a dual quat by the given vector
	 *
	 * @param {quat2} out the receiving dual quaternion
	 * @param {quat2} a the dual quaternion to translate
	 * @param {vec3} v vector to translate by
	 * @returns {quat2} out
	 */
	function translate(out, a, v) {
	  var ax1 = a[0],
	      ay1 = a[1],
	      az1 = a[2],
	      aw1 = a[3],
	      bx1 = v[0] * 0.5,
	      by1 = v[1] * 0.5,
	      bz1 = v[2] * 0.5,
	      ax2 = a[4],
	      ay2 = a[5],
	      az2 = a[6],
	      aw2 = a[7];
	  out[0] = ax1;
	  out[1] = ay1;
	  out[2] = az1;
	  out[3] = aw1;
	  out[4] = aw1 * bx1 + ay1 * bz1 - az1 * by1 + ax2;
	  out[5] = aw1 * by1 + az1 * bx1 - ax1 * bz1 + ay2;
	  out[6] = aw1 * bz1 + ax1 * by1 - ay1 * bx1 + az2;
	  out[7] = -ax1 * bx1 - ay1 * by1 - az1 * bz1 + aw2;
	  return out;
	}

	/**
	 * Rotates a dual quat around the X axis
	 *
	 * @param {quat2} out the receiving dual quaternion
	 * @param {quat2} a the dual quaternion to rotate
	 * @param {number} rad how far should the rotation be
	 * @returns {quat2} out
	 */
	function rotateX(out, a, rad) {
	  var bx = -a[0],
	      by = -a[1],
	      bz = -a[2],
	      bw = a[3],
	      ax = a[4],
	      ay = a[5],
	      az = a[6],
	      aw = a[7],
	      ax1 = ax * bw + aw * bx + ay * bz - az * by,
	      ay1 = ay * bw + aw * by + az * bx - ax * bz,
	      az1 = az * bw + aw * bz + ax * by - ay * bx,
	      aw1 = aw * bw - ax * bx - ay * by - az * bz;
	  rotateX$1(out, a, rad);
	  bx = out[0];
	  by = out[1];
	  bz = out[2];
	  bw = out[3];
	  out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
	  out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
	  out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
	  out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
	  return out;
	}

	/**
	 * Rotates a dual quat around the Y axis
	 *
	 * @param {quat2} out the receiving dual quaternion
	 * @param {quat2} a the dual quaternion to rotate
	 * @param {number} rad how far should the rotation be
	 * @returns {quat2} out
	 */
	function rotateY(out, a, rad) {
	  var bx = -a[0],
	      by = -a[1],
	      bz = -a[2],
	      bw = a[3],
	      ax = a[4],
	      ay = a[5],
	      az = a[6],
	      aw = a[7],
	      ax1 = ax * bw + aw * bx + ay * bz - az * by,
	      ay1 = ay * bw + aw * by + az * bx - ax * bz,
	      az1 = az * bw + aw * bz + ax * by - ay * bx,
	      aw1 = aw * bw - ax * bx - ay * by - az * bz;
	  rotateY$1(out, a, rad);
	  bx = out[0];
	  by = out[1];
	  bz = out[2];
	  bw = out[3];
	  out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
	  out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
	  out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
	  out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
	  return out;
	}

	/**
	 * Rotates a dual quat around the Z axis
	 *
	 * @param {quat2} out the receiving dual quaternion
	 * @param {quat2} a the dual quaternion to rotate
	 * @param {number} rad how far should the rotation be
	 * @returns {quat2} out
	 */
	function rotateZ(out, a, rad) {
	  var bx = -a[0],
	      by = -a[1],
	      bz = -a[2],
	      bw = a[3],
	      ax = a[4],
	      ay = a[5],
	      az = a[6],
	      aw = a[7],
	      ax1 = ax * bw + aw * bx + ay * bz - az * by,
	      ay1 = ay * bw + aw * by + az * bx - ax * bz,
	      az1 = az * bw + aw * bz + ax * by - ay * bx,
	      aw1 = aw * bw - ax * bx - ay * by - az * bz;
	  rotateZ$1(out, a, rad);
	  bx = out[0];
	  by = out[1];
	  bz = out[2];
	  bw = out[3];
	  out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
	  out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
	  out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
	  out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
	  return out;
	}

	/**
	 * Rotates a dual quat by a given quaternion (a * q)
	 *
	 * @param {quat2} out the receiving dual quaternion
	 * @param {quat2} a the dual quaternion to rotate
	 * @param {quat} q quaternion to rotate by
	 * @returns {quat2} out
	 */
	function rotateByQuatAppend(out, a, q) {
	  var qx = q[0],
	      qy = q[1],
	      qz = q[2],
	      qw = q[3],
	      ax = a[0],
	      ay = a[1],
	      az = a[2],
	      aw = a[3];

	  out[0] = ax * qw + aw * qx + ay * qz - az * qy;
	  out[1] = ay * qw + aw * qy + az * qx - ax * qz;
	  out[2] = az * qw + aw * qz + ax * qy - ay * qx;
	  out[3] = aw * qw - ax * qx - ay * qy - az * qz;
	  ax = a[4];
	  ay = a[5];
	  az = a[6];
	  aw = a[7];
	  out[4] = ax * qw + aw * qx + ay * qz - az * qy;
	  out[5] = ay * qw + aw * qy + az * qx - ax * qz;
	  out[6] = az * qw + aw * qz + ax * qy - ay * qx;
	  out[7] = aw * qw - ax * qx - ay * qy - az * qz;
	  return out;
	}

	/**
	 * Rotates a dual quat by a given quaternion (q * a)
	 *
	 * @param {quat2} out the receiving dual quaternion
	 * @param {quat} q quaternion to rotate by
	 * @param {quat2} a the dual quaternion to rotate
	 * @returns {quat2} out
	 */
	function rotateByQuatPrepend(out, q, a) {
	  var qx = q[0],
	      qy = q[1],
	      qz = q[2],
	      qw = q[3],
	      bx = a[0],
	      by = a[1],
	      bz = a[2],
	      bw = a[3];

	  out[0] = qx * bw + qw * bx + qy * bz - qz * by;
	  out[1] = qy * bw + qw * by + qz * bx - qx * bz;
	  out[2] = qz * bw + qw * bz + qx * by - qy * bx;
	  out[3] = qw * bw - qx * bx - qy * by - qz * bz;
	  bx = a[4];
	  by = a[5];
	  bz = a[6];
	  bw = a[7];
	  out[4] = qx * bw + qw * bx + qy * bz - qz * by;
	  out[5] = qy * bw + qw * by + qz * bx - qx * bz;
	  out[6] = qz * bw + qw * bz + qx * by - qy * bx;
	  out[7] = qw * bw - qx * bx - qy * by - qz * bz;
	  return out;
	}

	/**
	 * Rotates a dual quat around a given axis. Does the normalisation automatically
	 *
	 * @param {quat2} out the receiving dual quaternion
	 * @param {quat2} a the dual quaternion to rotate
	 * @param {vec3} axis the axis to rotate around
	 * @param {Number} rad how far the rotation should be
	 * @returns {quat2} out
	 */
	function rotateAroundAxis(out, a, axis, rad) {
	  //Special case for rad = 0
	  if (Math.abs(rad) < EPSILON) {
	    return copy$1(out, a);
	  }
	  var axisLength = Math.sqrt(axis[0] * axis[0] + axis[1] * axis[1] + axis[2] * axis[2]);

	  rad = rad * 0.5;
	  var s = Math.sin(rad);
	  var bx = s * axis[0] / axisLength;
	  var by = s * axis[1] / axisLength;
	  var bz = s * axis[2] / axisLength;
	  var bw = Math.cos(rad);

	  var ax1 = a[0],
	      ay1 = a[1],
	      az1 = a[2],
	      aw1 = a[3];
	  out[0] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
	  out[1] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
	  out[2] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
	  out[3] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;

	  var ax = a[4],
	      ay = a[5],
	      az = a[6],
	      aw = a[7];
	  out[4] = ax * bw + aw * bx + ay * bz - az * by;
	  out[5] = ay * bw + aw * by + az * bx - ax * bz;
	  out[6] = az * bw + aw * bz + ax * by - ay * bx;
	  out[7] = aw * bw - ax * bx - ay * by - az * bz;

	  return out;
	}

	/**
	 * Adds two dual quat's
	 *
	 * @param {quat2} out the receiving dual quaternion
	 * @param {quat2} a the first operand
	 * @param {quat2} b the second operand
	 * @returns {quat2} out
	 * @function
	 */
	function add$1(out, a, b) {
	  out[0] = a[0] + b[0];
	  out[1] = a[1] + b[1];
	  out[2] = a[2] + b[2];
	  out[3] = a[3] + b[3];
	  out[4] = a[4] + b[4];
	  out[5] = a[5] + b[5];
	  out[6] = a[6] + b[6];
	  out[7] = a[7] + b[7];
	  return out;
	}

	/**
	 * Multiplies two dual quat's
	 *
	 * @param {quat2} out the receiving dual quaternion
	 * @param {quat2} a the first operand
	 * @param {quat2} b the second operand
	 * @returns {quat2} out
	 */
	function multiply$1(out, a, b) {
	  var ax0 = a[0],
	      ay0 = a[1],
	      az0 = a[2],
	      aw0 = a[3],
	      bx1 = b[4],
	      by1 = b[5],
	      bz1 = b[6],
	      bw1 = b[7],
	      ax1 = a[4],
	      ay1 = a[5],
	      az1 = a[6],
	      aw1 = a[7],
	      bx0 = b[0],
	      by0 = b[1],
	      bz0 = b[2],
	      bw0 = b[3];
	  out[0] = ax0 * bw0 + aw0 * bx0 + ay0 * bz0 - az0 * by0;
	  out[1] = ay0 * bw0 + aw0 * by0 + az0 * bx0 - ax0 * bz0;
	  out[2] = az0 * bw0 + aw0 * bz0 + ax0 * by0 - ay0 * bx0;
	  out[3] = aw0 * bw0 - ax0 * bx0 - ay0 * by0 - az0 * bz0;
	  out[4] = ax0 * bw1 + aw0 * bx1 + ay0 * bz1 - az0 * by1 + ax1 * bw0 + aw1 * bx0 + ay1 * bz0 - az1 * by0;
	  out[5] = ay0 * bw1 + aw0 * by1 + az0 * bx1 - ax0 * bz1 + ay1 * bw0 + aw1 * by0 + az1 * bx0 - ax1 * bz0;
	  out[6] = az0 * bw1 + aw0 * bz1 + ax0 * by1 - ay0 * bx1 + az1 * bw0 + aw1 * bz0 + ax1 * by0 - ay1 * bx0;
	  out[7] = aw0 * bw1 - ax0 * bx1 - ay0 * by1 - az0 * bz1 + aw1 * bw0 - ax1 * bx0 - ay1 * by0 - az1 * bz0;
	  return out;
	}

	/**
	 * Alias for {@link quat2.multiply}
	 * @function
	 */
	var mul$1 = multiply$1;

	/**
	 * Scales a dual quat by a scalar number
	 *
	 * @param {quat2} out the receiving dual quat
	 * @param {quat2} a the dual quat to scale
	 * @param {Number} b amount to scale the dual quat by
	 * @returns {quat2} out
	 * @function
	 */
	function scale$1(out, a, b) {
	  out[0] = a[0] * b;
	  out[1] = a[1] * b;
	  out[2] = a[2] * b;
	  out[3] = a[3] * b;
	  out[4] = a[4] * b;
	  out[5] = a[5] * b;
	  out[6] = a[6] * b;
	  out[7] = a[7] * b;
	  return out;
	}

	/**
	 * Calculates the dot product of two dual quat's (The dot product of the real parts)
	 *
	 * @param {quat2} a the first operand
	 * @param {quat2} b the second operand
	 * @returns {Number} dot product of a and b
	 * @function
	 */
	var dot$1 = dot$2;

	/**
	 * Performs a linear interpolation between two dual quats's
	 * NOTE: The resulting dual quaternions won't always be normalized (The error is most noticeable when t = 0.5)
	 *
	 * @param {quat2} out the receiving dual quat
	 * @param {quat2} a the first operand
	 * @param {quat2} b the second operand
	 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
	 * @returns {quat2} out
	 */
	function lerp$1(out, a, b, t) {
	  var mt = 1 - t;
	  if (dot$1(a, b) < 0) t = -t;

	  out[0] = a[0] * mt + b[0] * t;
	  out[1] = a[1] * mt + b[1] * t;
	  out[2] = a[2] * mt + b[2] * t;
	  out[3] = a[3] * mt + b[3] * t;
	  out[4] = a[4] * mt + b[4] * t;
	  out[5] = a[5] * mt + b[5] * t;
	  out[6] = a[6] * mt + b[6] * t;
	  out[7] = a[7] * mt + b[7] * t;

	  return out;
	}

	/**
	 * Calculates the inverse of a dual quat. If they are normalized, conjugate is cheaper
	 *
	 * @param {quat2} out the receiving dual quaternion
	 * @param {quat2} a dual quat to calculate inverse of
	 * @returns {quat2} out
	 */
	function invert(out, a) {
	  var sqlen = squaredLength$1(a);
	  out[0] = -a[0] / sqlen;
	  out[1] = -a[1] / sqlen;
	  out[2] = -a[2] / sqlen;
	  out[3] = a[3] / sqlen;
	  out[4] = -a[4] / sqlen;
	  out[5] = -a[5] / sqlen;
	  out[6] = -a[6] / sqlen;
	  out[7] = a[7] / sqlen;
	  return out;
	}

	/**
	 * Calculates the conjugate of a dual quat
	 * If the dual quaternion is normalized, this function is faster than quat2.inverse and produces the same result.
	 *
	 * @param {quat2} out the receiving quaternion
	 * @param {quat2} a quat to calculate conjugate of
	 * @returns {quat2} out
	 */
	function conjugate(out, a) {
	  out[0] = -a[0];
	  out[1] = -a[1];
	  out[2] = -a[2];
	  out[3] = a[3];
	  out[4] = -a[4];
	  out[5] = -a[5];
	  out[6] = -a[6];
	  out[7] = a[7];
	  return out;
	}

	/**
	 * Calculates the length of a dual quat
	 *
	 * @param {quat2} a dual quat to calculate length of
	 * @returns {Number} length of a
	 * @function
	 */
	var length$1 = length$2;

	/**
	 * Alias for {@link quat2.length}
	 * @function
	 */
	var len$1 = length$1;

	/**
	 * Calculates the squared length of a dual quat
	 *
	 * @param {quat2} a dual quat to calculate squared length of
	 * @returns {Number} squared length of a
	 * @function
	 */
	var squaredLength$1 = squaredLength$2;

	/**
	 * Alias for {@link quat2.squaredLength}
	 * @function
	 */
	var sqrLen$1 = squaredLength$1;

	/**
	 * Normalize a dual quat
	 *
	 * @param {quat2} out the receiving dual quaternion
	 * @param {quat2} a dual quaternion to normalize
	 * @returns {quat2} out
	 * @function
	 */
	function normalize$1(out, a) {
	  var magnitude = squaredLength$1(a);
	  if (magnitude > 0) {
	    magnitude = Math.sqrt(magnitude);

	    var a0 = a[0] / magnitude;
	    var a1 = a[1] / magnitude;
	    var a2 = a[2] / magnitude;
	    var a3 = a[3] / magnitude;

	    var b0 = a[4];
	    var b1 = a[5];
	    var b2 = a[6];
	    var b3 = a[7];

	    var a_dot_b = a0 * b0 + a1 * b1 + a2 * b2 + a3 * b3;

	    out[0] = a0;
	    out[1] = a1;
	    out[2] = a2;
	    out[3] = a3;

	    out[4] = (b0 - a0 * a_dot_b) / magnitude;
	    out[5] = (b1 - a1 * a_dot_b) / magnitude;
	    out[6] = (b2 - a2 * a_dot_b) / magnitude;
	    out[7] = (b3 - a3 * a_dot_b) / magnitude;
	  }
	  return out;
	}

	/**
	 * Returns a string representation of a dual quatenion
	 *
	 * @param {quat2} a dual quaternion to represent as a string
	 * @returns {String} string representation of the dual quat
	 */
	function str$1(a) {
	  return 'quat2(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ')';
	}

	/**
	 * Returns whether or not the dual quaternions have exactly the same elements in the same position (when compared with ===)
	 *
	 * @param {quat2} a the first dual quaternion.
	 * @param {quat2} b the second dual quaternion.
	 * @returns {Boolean} true if the dual quaternions are equal, false otherwise.
	 */
	function exactEquals$1(a, b) {
	  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7];
	}

	/**
	 * Returns whether or not the dual quaternions have approximately the same elements in the same position.
	 *
	 * @param {quat2} a the first dual quat.
	 * @param {quat2} b the second dual quat.
	 * @returns {Boolean} true if the dual quats are equal, false otherwise.
	 */
	function equals$1(a, b) {
	  var a0 = a[0],
	      a1 = a[1],
	      a2 = a[2],
	      a3 = a[3],
	      a4 = a[4],
	      a5 = a[5],
	      a6 = a[6],
	      a7 = a[7];
	  var b0 = b[0],
	      b1 = b[1],
	      b2 = b[2],
	      b3 = b[3],
	      b4 = b[4],
	      b5 = b[5],
	      b6 = b[6],
	      b7 = b[7];
	  return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7));
	}

	var quat2 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		create: create$1,
		clone: clone$1,
		fromValues: fromValues$1,
		fromRotationTranslationValues: fromRotationTranslationValues,
		fromRotationTranslation: fromRotationTranslation,
		fromTranslation: fromTranslation,
		fromRotation: fromRotation,
		fromMat4: fromMat4,
		copy: copy$1,
		identity: identity,
		set: set$1,
		getReal: getReal,
		getDual: getDual,
		setReal: setReal,
		setDual: setDual,
		getTranslation: getTranslation,
		translate: translate,
		rotateX: rotateX,
		rotateY: rotateY,
		rotateZ: rotateZ,
		rotateByQuatAppend: rotateByQuatAppend,
		rotateByQuatPrepend: rotateByQuatPrepend,
		rotateAroundAxis: rotateAroundAxis,
		add: add$1,
		multiply: multiply$1,
		mul: mul$1,
		scale: scale$1,
		dot: dot$1,
		lerp: lerp$1,
		invert: invert,
		conjugate: conjugate,
		length: length$1,
		len: len$1,
		squaredLength: squaredLength$1,
		sqrLen: sqrLen$1,
		normalize: normalize$1,
		str: str$1,
		exactEquals: exactEquals$1,
		equals: equals$1
	});

	/**
	 * 2 Dimensional Vector
	 * @module vec2
	 */

	/**
	 * Creates a new, empty vec2
	 *
	 * @returns {vec2} a new 2D vector
	 */
	function create() {
	  var out = new ARRAY_TYPE(2);
	  if (ARRAY_TYPE != Float32Array) {
	    out[0] = 0;
	    out[1] = 0;
	  }
	  return out;
	}

	/**
	 * Creates a new vec2 initialized with values from an existing vector
	 *
	 * @param {vec2} a vector to clone
	 * @returns {vec2} a new 2D vector
	 */
	function clone(a) {
	  var out = new ARRAY_TYPE(2);
	  out[0] = a[0];
	  out[1] = a[1];
	  return out;
	}

	/**
	 * Creates a new vec2 initialized with the given values
	 *
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @returns {vec2} a new 2D vector
	 */
	function fromValues(x, y) {
	  var out = new ARRAY_TYPE(2);
	  out[0] = x;
	  out[1] = y;
	  return out;
	}

	/**
	 * Copy the values from one vec2 to another
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the source vector
	 * @returns {vec2} out
	 */
	function copy(out, a) {
	  out[0] = a[0];
	  out[1] = a[1];
	  return out;
	}

	/**
	 * Set the components of a vec2 to the given values
	 *
	 * @param {vec2} out the receiving vector
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @returns {vec2} out
	 */
	function set(out, x, y) {
	  out[0] = x;
	  out[1] = y;
	  return out;
	}

	/**
	 * Adds two vec2's
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {vec2} out
	 */
	function add(out, a, b) {
	  out[0] = a[0] + b[0];
	  out[1] = a[1] + b[1];
	  return out;
	}

	/**
	 * Subtracts vector b from vector a
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {vec2} out
	 */
	function subtract(out, a, b) {
	  out[0] = a[0] - b[0];
	  out[1] = a[1] - b[1];
	  return out;
	}

	/**
	 * Multiplies two vec2's
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {vec2} out
	 */
	function multiply(out, a, b) {
	  out[0] = a[0] * b[0];
	  out[1] = a[1] * b[1];
	  return out;
	}

	/**
	 * Divides two vec2's
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {vec2} out
	 */
	function divide(out, a, b) {
	  out[0] = a[0] / b[0];
	  out[1] = a[1] / b[1];
	  return out;
	}

	/**
	 * Math.ceil the components of a vec2
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a vector to ceil
	 * @returns {vec2} out
	 */
	function ceil(out, a) {
	  out[0] = Math.ceil(a[0]);
	  out[1] = Math.ceil(a[1]);
	  return out;
	}

	/**
	 * Math.floor the components of a vec2
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a vector to floor
	 * @returns {vec2} out
	 */
	function floor(out, a) {
	  out[0] = Math.floor(a[0]);
	  out[1] = Math.floor(a[1]);
	  return out;
	}

	/**
	 * Returns the minimum of two vec2's
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {vec2} out
	 */
	function min(out, a, b) {
	  out[0] = Math.min(a[0], b[0]);
	  out[1] = Math.min(a[1], b[1]);
	  return out;
	}

	/**
	 * Returns the maximum of two vec2's
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {vec2} out
	 */
	function max(out, a, b) {
	  out[0] = Math.max(a[0], b[0]);
	  out[1] = Math.max(a[1], b[1]);
	  return out;
	}

	/**
	 * Math.round the components of a vec2
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a vector to round
	 * @returns {vec2} out
	 */
	function round(out, a) {
	  out[0] = Math.round(a[0]);
	  out[1] = Math.round(a[1]);
	  return out;
	}

	/**
	 * Scales a vec2 by a scalar number
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the vector to scale
	 * @param {Number} b amount to scale the vector by
	 * @returns {vec2} out
	 */
	function scale(out, a, b) {
	  out[0] = a[0] * b;
	  out[1] = a[1] * b;
	  return out;
	}

	/**
	 * Adds two vec2's after scaling the second operand by a scalar value
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @param {Number} scale the amount to scale b by before adding
	 * @returns {vec2} out
	 */
	function scaleAndAdd(out, a, b, scale) {
	  out[0] = a[0] + b[0] * scale;
	  out[1] = a[1] + b[1] * scale;
	  return out;
	}

	/**
	 * Calculates the euclidian distance between two vec2's
	 *
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {Number} distance between a and b
	 */
	function distance(a, b) {
	  var x = b[0] - a[0],
	      y = b[1] - a[1];
	  return Math.sqrt(x * x + y * y);
	}

	/**
	 * Calculates the squared euclidian distance between two vec2's
	 *
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {Number} squared distance between a and b
	 */
	function squaredDistance(a, b) {
	  var x = b[0] - a[0],
	      y = b[1] - a[1];
	  return x * x + y * y;
	}

	/**
	 * Calculates the length of a vec2
	 *
	 * @param {vec2} a vector to calculate length of
	 * @returns {Number} length of a
	 */
	function length(a) {
	  var x = a[0],
	      y = a[1];
	  return Math.sqrt(x * x + y * y);
	}

	/**
	 * Calculates the squared length of a vec2
	 *
	 * @param {vec2} a vector to calculate squared length of
	 * @returns {Number} squared length of a
	 */
	function squaredLength(a) {
	  var x = a[0],
	      y = a[1];
	  return x * x + y * y;
	}

	/**
	 * Negates the components of a vec2
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a vector to negate
	 * @returns {vec2} out
	 */
	function negate(out, a) {
	  out[0] = -a[0];
	  out[1] = -a[1];
	  return out;
	}

	/**
	 * Returns the inverse of the components of a vec2
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a vector to invert
	 * @returns {vec2} out
	 */
	function inverse(out, a) {
	  out[0] = 1.0 / a[0];
	  out[1] = 1.0 / a[1];
	  return out;
	}

	/**
	 * Normalize a vec2
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a vector to normalize
	 * @returns {vec2} out
	 */
	function normalize(out, a) {
	  var x = a[0],
	      y = a[1];
	  var len = x * x + y * y;
	  if (len > 0) {
	    //TODO: evaluate use of glm_invsqrt here?
	    len = 1 / Math.sqrt(len);
	    out[0] = a[0] * len;
	    out[1] = a[1] * len;
	  }
	  return out;
	}

	/**
	 * Calculates the dot product of two vec2's
	 *
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {Number} dot product of a and b
	 */
	function dot(a, b) {
	  return a[0] * b[0] + a[1] * b[1];
	}

	/**
	 * Computes the cross product of two vec2's
	 * Note that the cross product must by definition produce a 3D vector
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {vec3} out
	 */
	function cross(out, a, b) {
	  var z = a[0] * b[1] - a[1] * b[0];
	  out[0] = out[1] = 0;
	  out[2] = z;
	  return out;
	}

	/**
	 * Performs a linear interpolation between two vec2's
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
	 * @returns {vec2} out
	 */
	function lerp(out, a, b, t) {
	  var ax = a[0],
	      ay = a[1];
	  out[0] = ax + t * (b[0] - ax);
	  out[1] = ay + t * (b[1] - ay);
	  return out;
	}

	/**
	 * Generates a random vector with the given scale
	 *
	 * @param {vec2} out the receiving vector
	 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
	 * @returns {vec2} out
	 */
	function random(out, scale) {
	  scale = scale || 1.0;
	  var r = RANDOM() * 2.0 * Math.PI;
	  out[0] = Math.cos(r) * scale;
	  out[1] = Math.sin(r) * scale;
	  return out;
	}

	/**
	 * Transforms the vec2 with a mat2
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the vector to transform
	 * @param {mat2} m matrix to transform with
	 * @returns {vec2} out
	 */
	function transformMat2(out, a, m) {
	  var x = a[0],
	      y = a[1];
	  out[0] = m[0] * x + m[2] * y;
	  out[1] = m[1] * x + m[3] * y;
	  return out;
	}

	/**
	 * Transforms the vec2 with a mat2d
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the vector to transform
	 * @param {mat2d} m matrix to transform with
	 * @returns {vec2} out
	 */
	function transformMat2d(out, a, m) {
	  var x = a[0],
	      y = a[1];
	  out[0] = m[0] * x + m[2] * y + m[4];
	  out[1] = m[1] * x + m[3] * y + m[5];
	  return out;
	}

	/**
	 * Transforms the vec2 with a mat3
	 * 3rd vector component is implicitly '1'
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the vector to transform
	 * @param {mat3} m matrix to transform with
	 * @returns {vec2} out
	 */
	function transformMat3(out, a, m) {
	  var x = a[0],
	      y = a[1];
	  out[0] = m[0] * x + m[3] * y + m[6];
	  out[1] = m[1] * x + m[4] * y + m[7];
	  return out;
	}

	/**
	 * Transforms the vec2 with a mat4
	 * 3rd vector component is implicitly '0'
	 * 4th vector component is implicitly '1'
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the vector to transform
	 * @param {mat4} m matrix to transform with
	 * @returns {vec2} out
	 */
	function transformMat4(out, a, m) {
	  var x = a[0];
	  var y = a[1];
	  out[0] = m[0] * x + m[4] * y + m[12];
	  out[1] = m[1] * x + m[5] * y + m[13];
	  return out;
	}

	/**
	 * Rotate a 2D vector
	 * @param {vec2} out The receiving vec2
	 * @param {vec2} a The vec2 point to rotate
	 * @param {vec2} b The origin of the rotation
	 * @param {Number} c The angle of rotation
	 * @returns {vec2} out
	 */
	function rotate(out, a, b, c) {
	  //Translate point to the origin
	  var p0 = a[0] - b[0],
	      p1 = a[1] - b[1],
	      sinC = Math.sin(c),
	      cosC = Math.cos(c);

	  //perform rotation and translate to correct position
	  out[0] = p0 * cosC - p1 * sinC + b[0];
	  out[1] = p0 * sinC + p1 * cosC + b[1];

	  return out;
	}

	/**
	 * Get the angle between two 2D vectors
	 * @param {vec2} a The first operand
	 * @param {vec2} b The second operand
	 * @returns {Number} The angle in radians
	 */
	function angle(a, b) {
	  var x1 = a[0],
	      y1 = a[1],
	      x2 = b[0],
	      y2 = b[1];

	  var len1 = x1 * x1 + y1 * y1;
	  if (len1 > 0) {
	    //TODO: evaluate use of glm_invsqrt here?
	    len1 = 1 / Math.sqrt(len1);
	  }

	  var len2 = x2 * x2 + y2 * y2;
	  if (len2 > 0) {
	    //TODO: evaluate use of glm_invsqrt here?
	    len2 = 1 / Math.sqrt(len2);
	  }

	  var cosine = (x1 * x2 + y1 * y2) * len1 * len2;

	  if (cosine > 1.0) {
	    return 0;
	  } else if (cosine < -1.0) {
	    return Math.PI;
	  } else {
	    return Math.acos(cosine);
	  }
	}

	/**
	 * Returns a string representation of a vector
	 *
	 * @param {vec2} a vector to represent as a string
	 * @returns {String} string representation of the vector
	 */
	function str(a) {
	  return 'vec2(' + a[0] + ', ' + a[1] + ')';
	}

	/**
	 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
	 *
	 * @param {vec2} a The first vector.
	 * @param {vec2} b The second vector.
	 * @returns {Boolean} True if the vectors are equal, false otherwise.
	 */
	function exactEquals(a, b) {
	  return a[0] === b[0] && a[1] === b[1];
	}

	/**
	 * Returns whether or not the vectors have approximately the same elements in the same position.
	 *
	 * @param {vec2} a The first vector.
	 * @param {vec2} b The second vector.
	 * @returns {Boolean} True if the vectors are equal, false otherwise.
	 */
	function equals(a, b) {
	  var a0 = a[0],
	      a1 = a[1];
	  var b0 = b[0],
	      b1 = b[1];
	  return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1));
	}

	/**
	 * Alias for {@link vec2.length}
	 * @function
	 */
	var len = length;

	/**
	 * Alias for {@link vec2.subtract}
	 * @function
	 */
	var sub = subtract;

	/**
	 * Alias for {@link vec2.multiply}
	 * @function
	 */
	var mul = multiply;

	/**
	 * Alias for {@link vec2.divide}
	 * @function
	 */
	var div = divide;

	/**
	 * Alias for {@link vec2.distance}
	 * @function
	 */
	var dist = distance;

	/**
	 * Alias for {@link vec2.squaredDistance}
	 * @function
	 */
	var sqrDist = squaredDistance;

	/**
	 * Alias for {@link vec2.squaredLength}
	 * @function
	 */
	var sqrLen = squaredLength;

	/**
	 * Perform some operation over an array of vec2s.
	 *
	 * @param {Array} a the array of vectors to iterate over
	 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
	 * @param {Number} offset Number of elements to skip at the beginning of the array
	 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
	 * @param {Function} fn Function to call for each vector in the array
	 * @param {Object} [arg] additional argument to pass to fn
	 * @returns {Array} a
	 * @function
	 */
	var forEach = function () {
	  var vec = create();

	  return function (a, stride, offset, count, fn, arg) {
	    var i = void 0,
	        l = void 0;
	    if (!stride) {
	      stride = 2;
	    }

	    if (!offset) {
	      offset = 0;
	    }

	    if (count) {
	      l = Math.min(count * stride + offset, a.length);
	    } else {
	      l = a.length;
	    }

	    for (i = offset; i < l; i += stride) {
	      vec[0] = a[i];vec[1] = a[i + 1];
	      fn(vec, vec, arg);
	      a[i] = vec[0];a[i + 1] = vec[1];
	    }

	    return a;
	  };
	}();

	var vec2 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		create: create,
		clone: clone,
		fromValues: fromValues,
		copy: copy,
		set: set,
		add: add,
		subtract: subtract,
		multiply: multiply,
		divide: divide,
		ceil: ceil,
		floor: floor,
		min: min,
		max: max,
		round: round,
		scale: scale,
		scaleAndAdd: scaleAndAdd,
		distance: distance,
		squaredDistance: squaredDistance,
		length: length,
		squaredLength: squaredLength,
		negate: negate,
		inverse: inverse,
		normalize: normalize,
		dot: dot,
		cross: cross,
		lerp: lerp,
		random: random,
		transformMat2: transformMat2,
		transformMat2d: transformMat2d,
		transformMat3: transformMat3,
		transformMat4: transformMat4,
		rotate: rotate,
		angle: angle,
		str: str,
		exactEquals: exactEquals,
		equals: equals,
		len: len,
		sub: sub,
		mul: mul,
		div: div,
		dist: dist,
		sqrDist: sqrDist,
		sqrLen: sqrLen,
		forEach: forEach
	});

	/*!
	 * @maptalks/gltf-loader v0.91.0
	 * LICENSE : UNLICENSED
	 * (c) 2016-2023 maptalks.org
	 */
	let n$1=0;function i$1(e){return null==e}function a$1(e){return !i$1(e)}function o$1(e){return !i$1(e)&&("string"==typeof e||null!==e.constructor&&e.constructor===String)}function f$1(e){for(let t=1;t<arguments.length;t++){const s=arguments[t];for(const t in s)e[t]=s[t];}return e}function u$2(e){switch(e){case 5120:return Int8Array;case 5121:return Uint8Array;case 5122:return Int16Array;case 5123:return Uint16Array;case 5124:return Int32Array;case 5125:return Uint32Array;case 5126:return Float32Array}throw new Error("unsupported bufferView's component type: "+e)}function h$2(e){return 0===e.indexOf("data:")&&e.indexOf("base64,")>0}function c(e){const t=function(e){return "undefined"!=typeof self?self.atob(e):window.atob(e)}(e.substring(e.indexOf(",")+1)),s=t.length,r=new Uint8Array(s);for(let e=0;e<s;e++)r[e]=t.charCodeAt(e);return r.buffer}const l=[],m$1=[],d$1=[],g$1=[0,0,0],p$1=identity$1([]),b$2=[1,1,1];function y$2(e,t,s,r,n,i,a){const o=u$2(a);if((0===n||n===r*o.BYTES_PER_ELEMENT)&&i%o.BYTES_PER_ELEMENT==0){const n=new o(t,i,s*r);return e.set(n),e}0===n&&(n=r*o.BYTES_PER_ELEMENT);const f=new Uint8Array(r*o.BYTES_PER_ELEMENT);for(let a=0;a<s;a++){let s=null;const u=new Uint8Array(t,n*a+i,r*o.BYTES_PER_ELEMENT);f.set(u),s=new o(f.buffer,0,r);for(let t=0;t<r;t++)e[a*r+t]=s[t];}return e}const _$2="undefined"!=typeof TextDecoder?new TextDecoder("utf-8"):null;function x$2(e,t,s){const r=new Uint8Array(e,t,s);return _$2.decode(r)}const w$2={get:function(e,t={}){t||(t={});const s=new AbortController,r=s.signal,n=f$1({},t);n.signal=r,n.method||(n.method="GET");const i=fetch(e,n).then(e=>{const s=this._parseResponse(e,t.responseType);return s.message?s:s.then(s=>"arraybuffer"===t.responseType?{data:s,cacheControl:e.headers.get("Cache-Control"),expires:e.headers.get("Expires"),contentType:e.headers.get("Content-Type")}:s).catch(e=>{if(!e.code||e.code!==DOMException.ABORT_ERR)throw e})}).catch(e=>{if(!e.code||e.code!==DOMException.ABORT_ERR)throw e});return i.xhr=s,i},_parseResponse:(e,t)=>200!==e.status?{status:e.status,statusText:e.statusText,message:`incorrect http request with status code(${e.status}): ${e.statusText}`}:"arraybuffer"===t?e.arrayBuffer():"json"===t?e.json():e.text(),getArrayBuffer:(e,t={})=>(t||(t={}),t.responseType="arraybuffer",w$2.get(e,t)),getJSON:function(e,t={}){return t&&t.jsonp?w$2.jsonp(e):((t=t||{}).responseType="json",w$2.get(e,t))}};w$2.jsonp=function(e){const t="_maptalks_jsonp_"+n$1++;e.match(/\?/)?e+="&callback="+t:e+="?callback="+t;let s=document.createElement("script");return s.type="text/javascript",s.src=e,new Promise(e=>{window[t]=function(r){document.getElementsByTagName("head")[0].removeChild(s),s=null,delete window[t],e(r);},document.getElementsByTagName("head")[0].appendChild(s);})};class T$2{constructor(e,t,s){this._requestImage=e,this.decoders=t,this._supportedFormats=s,this.images={},this._imgRequests={};}requestImageFromBufferURI(e,t,s){if(this.buffers[e.id]){const r=this.buffers[e.id],n=this._createDataView(t,r);return this.getImageByBuffer(n,s)}if(this._imgRequests[e.id])return this._imgRequests[e.id].then(()=>{const r=this.buffers[e.id],n=this._createDataView(t,r);return this.getImageByBuffer(n,s)});if(h$2(e.uri)){const r=this.buffers[e.id]=c(e.uri),n=this._createDataView(t,r);return this.getImageByBuffer(n,s)}return this._imgRequests[e.id]=w$2.getArrayBuffer(e.uri,null).then(r=>{const n=this.buffers[e.id]=r.data,i=this._createDataView(t,n);return this.getImageByBuffer(i,s)})}getImageByBuffer(e,t){if(this.images[t.id])return Promise.resolve(this.images[t.id]);const s=this.decoders;return s[t.mimeType]?s[t.mimeType](e,{supportedFormats:this._supportedFormats}):"image/crn"===t.mimeType||"image/ktx2"===t.mimeType||"image/cttf"===t.mimeType?(console.warn("missing transcoder for "+t.mimeType,", visit https://maptalks.com/docs/transcoders for details"),Promise.resolve(null)):this._getImageInfo(t.id,e)}requestExternalImage(e){if(this.images[e.id])return Promise.resolve(this.images[e.id]);const t=0===e.uri.indexOf("data:image/")?e.uri:this.rootPath+"/"+e.uri;if(this._imgRequests[e.id])return this._imgRequests[e.id].then(()=>this.images[e.id]);return this._imgRequests[e.id]=this._getImageInfo(e.id,t)}_getImageInfo(e,t){return new Promise((s,r)=>{this._requestImage(t,(n,i)=>{n?r(n):(URL.revokeObjectURL(t),this.images[e]=i,s(this.images[e]));});})}}const E$2=["SCALAR",1,"VEC2",2,"VEC3",3,"VEC4",4,"MAT2",4,"MAT3",9,"MAT4",16],I$2=[];class O$2{constructor(e,t,s){this.rootPath=e,this.gltf=t,this._enableInterleave=!1,this.glbBuffer=s,this.buffers={},this.requests={},this.accessors={},this._compareAccessor();}_requestData(e,t){const s=this.gltf,r=s.accessors[t];if(void 0===r.bufferView)return this.accessors[r.id]=this._toBufferData(e,t,null,0),Promise.resolve(this.accessors[r.id]);if(r&&this.accessors[r.id])return Promise.resolve(this.accessors[r.id]);const n=s.bufferViews[r.bufferView];return this._requestBufferOfBufferView(n).then(s=>{const{buffer:n,byteOffset:i}=s;return this.accessors[r.id]=this._toBufferData(e,t,n,i)})}_requestBufferOfBufferView(e){const t=this.gltf.buffers[e.buffer];if(this.buffers[t.id]){const e=this.buffers[t.id];return Promise.resolve({buffer:e,byteOffset:0})}if(this.requests[t.id])return this.requests[t.id].then(()=>{const e=this.buffers[t.id];return Promise.resolve({buffer:e,byteOffset:0})});if("binary_glTF"!==e.buffer&&"KHR_binary_glTF"!==e.buffer&&t.uri){if(h$2(t.uri)){const e=this.buffers[t.id]=c(t.uri);return Promise.resolve({buffer:e,byteOffset:0})}let e;const s=t.uri.indexOf("blob:")>=0;e=t.uri.indexOf("://")>0||s?t.uri:this.rootPath+"/"+t.uri;return this.requests[t.id]=w$2.getArrayBuffer(e,null).then(r=>{s&&URL.revokeObjectURL(e);return {buffer:this.buffers[t.id]=r.data,byteOffset:0}})}return Promise.resolve({buffer:this.glbBuffer.buffer,byteOffset:this.glbBuffer.byteOffset})}_toBufferData(e,t,r,n=0){const i=this.gltf,a=i.accessors[t],o=void 0!==a.bufferView?i.bufferViews[a.bufferView]:{},f=(o.byteOffset||0)+n,h=this._getTypeItemSize(a.type),c=u$2(a.componentType),l=o.byteStride||0;const m={array:void 0,name:e,accessorName:t,byteLength:a.count*h*c.BYTES_PER_ELEMENT,componentType:a.componentType,count:a.count,type:a.type,itemSize:h,max:a.max,min:a.min,extensions:a.extensions};if(a.min&&(m.min=a.min),a.max&&(m.max=a.max),r)if(this._enableInterleave)m.byteStride=l,m.byteOffset=f+(a.byteOffset||0),!l||l===h*c.BYTES_PER_ELEMENT||"indices"===e||"input"===e||"output"===e||e.indexOf("morph")>=0?(m.array=this._typedArray(r,a.count,h,f+(a.byteOffset||0),c),m.array.buffer.byteLength===m.byteLength&&(m.byteOffset=0)):m.array=new Uint8Array(r,f,o.byteLength);else if(a.interleaved){m.byteStride=0,m.byteOffset=0;const e=new c(a.count*h);if(m.array=y$2(e,r,a.count,h,l,f+(a.byteOffset||0),a.componentType),m.extensions&&m.extensions.WEB3D_quantized_attributes&&h>2){const e=new Float32Array(m.array.length),{decodeMatrix:t}=m.extensions.WEB3D_quantized_attributes;for(let r=0;r<m.array.length;r+=h){I$2[0]=m.array[r],I$2[1]=m.array[r+1],I$2[2]=m.array[r+2],I$2[3]=1;const n=transformMat4$1(I$2,I$2,t);e[r]=n[0],e[r+1]=n[1],e[r+2]=n[2];}m.componentType=5126,m.array=e;}}else m.byteStride=0,m.array=this._typedArray(r,a.count,h,f+(a.byteOffset||0),c),m.byteOffset=m.array.byteOffset;else {m.array=new c(a.count);const e=m.min||m.max;e&&(m.array[0]=e[0],m.array[1]=e[1],m.array[2]=e[2]);}return m}_compareAccessor(){const e=this.gltf.accessors;if(Array.isArray(e))for(let t=0;t<e.length;t++)for(let s=0;s<e.length;s++)t!==s&&e[t].bufferView===e[s].bufferView&&(e[t].interleaved=e[s].interleaved=!0);else for(const t in e)for(const s in e)t!==s&&e[t].bufferView===e[s].bufferView&&(e[t].interleaved=e[s].interleaved=!0);}_typedArray(e,t,s,r,n){return r%n.BYTES_PER_ELEMENT!=0&&(e=e.slice(r,r+t*s*n.BYTES_PER_ELEMENT),r=0),new n(e,r,s*t)}_getTypeItemSize(e){const t=E$2.indexOf(e);return E$2[t+1]}requestKHRTechniquesWebgl(e){const{shaders:t}=e,s=t.map(e=>{if(void 0!==e.bufferView){const t=this.gltf.bufferViews[e.bufferView],{byteLength:s}=t;return this._requestBufferOfBufferView(t).then(r=>{const{buffer:n,byteOffset:i}=r,a=x$2(n,i+(t.byteOffset||0),s);return e.content=a,e})}if(e.uri){if(h$2(e.uri)){const t=c(e.uri),s=x$2(t,0,t.byteLength);return e.content=s,Promise.resolve(e)}{const t=this.rootPath+"/"+e.uri;return w$2.get(t).then(t=>(e.content=t,e))}}return Promise.resolve(e)});return Promise.all(s).then(()=>e)}}class R$2 extends T$2{constructor(e,t,s,r,n,i){super(r,n,i),this.rootPath=e,this.gltf=t,this.requests={},this.buffers={},this.glbBuffer=s,this.accessor=new O$2(e,t,s);}iterate(e,t){const s=this.gltf[t];if(!s)return;let r=0;for(const t in s)e(t,s[t],r++);}createNode(e){const s={};if(a$1(e.name)&&(s.name=e.name),a$1(e.children)&&(s.children=e.children),a$1(e.jointName)&&(s.jointName=e.jointName),a$1(e.matrix)&&(s.matrix=e.matrix),a$1(e.rotation)&&(s.rotation=e.rotation),a$1(e.scale)&&(s.scale=e.scale),a$1(e.translation)&&(s.translation=e.translation),a$1(e.extras)&&(s.extras=e.extras),a$1(e.meshes)&&(s.mesh=e.meshes[0]),s.translation||s.rotation||s.scale){const e=function(e,s){if(s.matrix)return s.matrix;if(s.translation||s.scale||s.rotation){const r=fromTranslation$1(l,s.translation||g$1),n=fromQuat(m$1,s.rotation||p$1),i=fromScaling(d$1,s.scale||b$2);return multiply$5(i,n,i),multiply$5(e,r,i)}return identity$2(e)}([],s);delete s.translation,delete s.rotation,delete s.scale,s.matrix=e;}return s}_loadMaterials(e){const t={};for(const s in e){const r=e[s];let n,i;r.instanceTechnique&&r.instanceTechnique.values?(n=r.instanceTechnique,i=n.values.diffuse):(n=r,i=n.values.tex||n.values.diffuseTex||n.values.diffuse);const a={baseColorTexture:{index:i}};r.name&&(a.name=r.name),r.extensions&&(a.extensions=r.extensions),r.extras&&(a.extras=r.extras),t[s]=a;}return t}_loadImage(e){if(e.bufferView||e.extensions&&(e.extensions.KHR_binary_glTF||e.extensions.binary_glTF)){const t=e.bufferView?e:e.extensions.KHR_binary_glTF||e.extensions.binary_glTF;e.extensions&&(e.mimeType=t.mimeType,e.width=t.width,e.height=t.height);const s=this.gltf.bufferViews[t.bufferView],r=(s.byteOffset||0)+this.glbBuffer.byteOffset,n=s.byteLength,i=this.buffers[t.bufferView]=new Uint8Array(this.glbBuffer.buffer,r,n);return this.getImageByBuffer(i,e)}return this.requestExternalImage(e)}_getTexture(e){const t=this.gltf.textures[e];if(!t)return null;const s=this.gltf.images[t.source];return this._loadImage(s).then(e=>{const r=this.gltf.samplers[t.sampler];return {image:{array:e.data,width:e.width,height:e.height,index:t.source,mimeType:s.mimeType,name:s.name,extras:s.extras},sampler:r}})}getBaseColorTexture(e){const t=this.gltf.materials[e];let s,r;if(t.instanceTechnique&&t.instanceTechnique.values?(s=t.instanceTechnique,r=s.values.diffuse):(s=t,r=s.values.tex||s.values.diffuseTex||s.values.diffuse),void 0===r||void 0===this.gltf.textures)return null;const n=this.gltf.textures[r];if(!n)return null;const i=this.gltf.samplers[n.sampler];return {format:n.format||6408,internalFormat:n.internalFormat||6408,type:n.type||5121,sampler:i,source:this.gltf.images[n.source]}}getMaterial(){return null}getAnimations(){return null}}class B$2 extends T$2{constructor(e,t,s,r,n,i){super(r,n,i),this.rootPath=e,this.gltf=t,this.glbBuffer=s,this.buffers={},this.requests={},this.accessor=new O$2(e,t,s);}iterate(e,t){const s=this.gltf[t];if(s)for(let t=0;t<s.length;t++)e(t,s[t],t);}createNode(e){const t={};return f$1(t,e),!a$1(e.weights)&&this.gltf.meshes&&a$1(t.mesh)?t.weights=this.gltf.meshes[t.mesh].weights:e.weights&&(t.weights=e.weights),t}_getTexture(e){const t=this.gltf.textures[e];if(!t)return null;let s=t.source;if(t.extensions&&t.extensions.EXT_texture_webp&&(s=t.extensions.EXT_texture_webp.source),!a$1(s))return null;const r=this.gltf.images[s];return this._loadImage(r).then(e=>{if(!e)return null;const s={image:{array:e.data,mipmap:e.mipmap,width:e.width,height:e.height,index:t.source,mimeType:r.mimeType,name:r.name,extensions:r.extensions,extras:r.extras}};f$1(s,t);const n=a$1(t.sampler)?this.gltf.samplers[t.sampler]:void 0;return n&&(s.sampler=n,s.sampler.magFilter=n.magFilter||9729,s.sampler.minFilter=n.minFilter||9729,s.sampler.wrapS=n.wrapS||10497,s.sampler.wrapT=n.wrapT||10497),e.format&&(s.format=e.format),s})}_loadImage(e){if(!a$1(e.bufferView))return this.requestExternalImage(e);{const t=this.gltf.bufferViews[e.bufferView],s=this.gltf.buffers[t.buffer];if(s.uri)return this.requestImageFromBufferURI(s,t,e);if(this.glbBuffer)return this._requestFromGlbBuffer(t,e)}return null}_requestFromGlbBuffer(e,t){const s=this._createDataView(e,this.glbBuffer.buffer,this.glbBuffer.byteOffset);return this.getImageByBuffer(s,t)}_createDataView(e,t,s){s=s||0;const r=e.byteOffset+s,n=e.byteLength;return new Uint8Array(t,r,n)}_transformArrayBufferToBase64(e,t){const s=new Array(e.byteLength);for(let t=0;t<e.byteLength;t++)s[t]=String.fromCharCode(e[t]);s.join("");return "data:"+(t=t||"image/png")+";base64,"+function(e){return "undefined"!=typeof self?self.btoa(e):window.btoa(e)}(unescape(encodeURIComponent(s)))}getAnimations(e){const t=[];return e.forEach(e=>{t.push(this.getSamplers(e.samplers));}),Promise.all(t).then(t=>{for(let s=0;s<t.length;s++)e[s].samplers=t[s];return e})}getSamplers(e){const t=[];for(let s=0;s<e.length;s++)(a$1(e[s].input)||a$1(e[s].output))&&(t.push(this.accessor._requestData("input",e[s].input)),t.push(this.accessor._requestData("output",e[s].output)));return Promise.all(t).then(t=>{for(let s=0;s<t.length/2;s++)e[s].input=t[2*s],e[s].output=t[2*s+1],e[s].interpolation||(e[s].interpolation="LINEAR");return e})}}const N$2="undefined"!=typeof TextDecoder?new TextDecoder("utf-8"):null,A$2=1313821514,P$2=5130562;class S$2{static read(e,t=0,s=0){s||(s=e.byteLength);const r=new DataView(e,t,s),n=r.getUint32(4,!0);if(1===n)return S$2.readV1(r,t);if(2===n)return S$2.readV2(e,t);throw new Error("Unsupported glb version : "+n)}static readV1(e,t){const s=e.getUint32(8,!0),r=e.getUint32(12,!0);if(s!==e.byteLength)throw new Error("Length in GLB header is inconsistent with glb's byte length.");const n=q$2(e.buffer,20+t,r);return {json:JSON.parse(n),glbBuffer:{byteOffset:20+t+r,buffer:e.buffer,byteLength:s}}}static readV2(e,t){let s,r,n;const i=new DataView(e,t+12);let a=0;for(;a<i.byteLength;){const o=i.getUint32(a,!0);a+=4;const f=i.getUint32(a,!0);if(a+=4,f===A$2)s=q$2(e,t+12+a,o);else if(f===P$2){n=t+12+a,r=o;break}a+=o;}return {json:JSON.parse(s),glbBuffer:{byteOffset:n,buffer:e,byteLength:r}}}}function q$2(e,t,s){if(N$2){const r=new Uint8Array(e,t,s);return N$2.decode(r)}return function(e){const t=e.length;let s="";for(let r=0;r<t;){let n=e[r++];if(128&n){let s=v$1[n>>3&7];if(!(64&n)||!s||r+s>t)return null;for(n&=63>>s;s>0;s-=1){const t=e[r++];if(128!=(192&t))return null;n=n<<6|63&t;}}s+=String.fromCharCode(n);}return s}(new Uint8Array(e,t,s))}const v$1=[1,1,1,1,2,2,3,0];const V$2=[0,0,0],M$2=[0,0,0,1],L$2=[1,1,1],D$2={TRANSLATION:[0,0,0],ROTATION:[0,0,0,1],SCALE:[1,1,1]},U$2={PREVIOUS:null,NEXT:null,PREINDEX:null,NEXTINDEX:null,INTERPOLATION:null},C$2={_getTRSW(t,s,n,i,o,f,u,h){const c=a$1(t)?s.animations:[s.animations[0]],l={};for(let s=0;s<c.length;s++){const m=c[s],d=m.name||s;if(a$1(t)&&d!==t)continue;const g=m.channelsMap[n];if(g)for(let t=0;t<g.length;t++){const s=g[t];"translation"===s.target.path?(this._getAnimateData(o,m.samplers[s.sampler],i,1),l.translation=copy$4(V$2,o)):"rotation"===s.target.path?(this._getQuaternion(f,m.samplers[s.sampler],i,1),l.rotation=copy$2(M$2,f)):"scale"===s.target.path?(this._getAnimateData(u,m.samplers[s.sampler],i,1),l.scale=copy$4(L$2,u)):"weights"===s.target.path&&h&&(this._getAnimateData(h,m.samplers[s.sampler],i,h.length),l.weights=h);}}return l},_getAnimateData(e,t,s,r){switch(t.interpolation){case"LINEAR":{const n=this._getPreNext(U$2,t,s,1*r);n&&(e=function(e,t,s,r){for(let n=0;n<e.length;n++)e[n]=t[n]+r*(s[n]-t[n]);return e}(e,n.PREVIOUS,n.NEXT,n.INTERPOLATION));break}case"STEP":{const n=this._getPreNext(U$2,t,s,1*r);n&&(e=function(e,t){for(let s=0;s<e.length;s++)e[s]=t[s];return e}(e,...n.PREVIOUS));break}case"CUBICSPLINE":{const n=this._getPreNext(U$2,t,s,3*r);n&&(e=this._getCubicSpline(e,n,t.input.array,3*r));break}}return e},_getQuaternion(t,r,n){switch(r.interpolation){case"LINEAR":{const s=this._getPreNext(U$2,r,n,1);s&&slerp(t,s.PREVIOUS,s.NEXT,s.INTERPOLATION);break}case"STEP":{const e=this._getPreNext(U$2,r,n,1);e&&(t=set$3(t,...e.PREVIOUS));break}case"CUBICSPLINE":{const e=this._getPreNext(U$2,r,n,3);if(e){for(let t=0;t<e.PREVIOUS.length;t++)e.PREVIOUS[t]=Math.acos(e.PREVIOUS[t]),e.NEXT[t]=Math.acos(e.NEXT[t]);t=this._getCubicSpline(t,e,r.input.array,3);for(let e=0;e<t.length;e++)t[e]=Math.cos(t[e]);}break}}return t},_search(e,t){const s=e.length;let r,n,i,a=0,o=s-1,f=Math.floor((a+o)/2);for(;a<=s-1&&o>=0;){if(a===o)return null;if(e[f]<=t&&t<=e[f+1]){const s=e[f];return r=f,n=f+1,i=(t-s)/(e[f+1]-s),{preIndx:r,nextIndex:n,interpolation:i}}t<e[f]?(o=f,f=Math.floor((a+o)/2)):e[f+1]<t&&(a=f,f=Math.floor((a+o)/2));}return null},_getPreNext(e,t,s,r){const n=t.input.array,i=t.output.array,a=t.output.itemSize;(s<n[0]||s>n[n.length-1])&&(s=Math.max(n[0],Math.min(n[n.length-1],s))),s===n[n.length-1]&&(s=n[0]);const o=this._search(n,s);if(!o||!o.nextIndex)return null;const{preIndx:f,nextIndex:u,interpolation:h}=o;e.PREINDEX=f,e.NEXTINDEX=u,e.INTERPOLATION=h;const c=a*r;return e.PREVIOUS=i.subarray(e.PREINDEX*c,(e.PREINDEX+1)*c),e.NEXT=i.subarray(e.NEXTINDEX*c,(e.NEXTINDEX+1)*c),e},_getCubicSpline(e,t,s,r){const n=t.INTERPOLATION,i=s[t.PREINDEX],a=s[t.NEXTINDEX];for(let s=0;s<3;s++){const o=t.PREVIOUS[r+s],f=(a-i)*t.PREVIOUS[2*r+s],u=t.NEXT[3+s],h=(a-i)*t.NEXT[s],c=(2*Math.pow(n,3)-3*Math.pow(n,2)+1)*o+(Math.pow(n,3)-2*Math.pow(n,2)+n)*f+(2*-Math.pow(n,3)+3*Math.pow(n,2))*u+(Math.pow(n,3)-Math.pow(n,2))*h;e[s]=c;}return e},getAnimationClip(e,t,n,i){const a=e.nodes[t]&&e.nodes[t].weights;set$4(V$2,...D$2.TRANSLATION),set$3(M$2,...D$2.ROTATION),set$4(L$2,...D$2.SCALE);return this._getTRSW(i,e,t,n,V$2,M$2,L$2,a)},getTimeSpan(e){if(!e.animations)return null;if(e.timeSpan)return e.timeSpan;const t=e.animations;return e.timeSpan={},t.forEach((t,s)=>{let r=-1/0,n=1/0;const i=t.channels;for(let e=0;e<i.length;e++){const s=i[e],a=t.samplers[s.sampler].input.array;a[a.length-1]>r&&(r=a[a.length-1]),a[0]<n&&(n=a[0]);}const a=t.name||s;e.timeSpan[a]={max:r,min:n};}),e.timeSpan},getTimeSpanByName(e,t){const s=this.getTimeSpan(e);return s?a$1(t)?s[t]:s[Object.keys(s)[0]]:null}};let k$2=!1;if("undefined"!=typeof OffscreenCanvas){let e;try{e=new OffscreenCanvas(2,2).getContext("2d");}catch(e){}e&&"undefined"!=typeof createImageBitmap&&(k$2=!0);}const F$2="undefined"==typeof document?null:document.createElement("canvas");class X$2{constructor(e,t,s){if(this.options=s||{},this.options.decoders||(this.options.decoders={}),t.buffer instanceof ArrayBuffer){const{json:s,glbBuffer:r}=S$2.read(t.buffer,t.byteOffset,t.byteLength);this._init(e,s,r);}else this._init(e,t);this._accessor=new O$2(this.rootPath,this.gltf,this.glbBuffer),this._checkExtensions();}_checkExtensions(){const e=this.gltf.extensionsRequired;if(e){if(e.indexOf("KHR_draco_mesh_compression")>=0&&!this.options.decoders.draco)throw new Error("KHR_draco_mesh_compression is required but @maptalks/transcoders.draco is not loaded");if(e.indexOf("KHR_texture_basisu")>=0&&!this.options.decoders.ktx2)throw new Error("KHR_texture_basisu is required but @maptalks/transcoders.ktx2 is not loaded")}}_loadExtensions(){const e=this.gltf.extensions;return e&&e.KHR_techniques_webgl?this._accessor.requestKHRTechniquesWebgl(e.KHR_techniques_webgl).then(t=>(e.KHR_techniques_webgl=t,e)):Promise.resolve(e)}load(e){e=e||{};const t=this._loadScene(e),s=this._loadAnimations(),r=this._loadTextures(),n=this._loadExtensions();return Promise.all([t,s,r,n]).then(e=>(e[0].animations=e[1],e[0].textures=e[2],e[0].extensions=e[3],e[0].transferables=this.transferables||[],this.createChannelsMap(e[0]),e[0]))}createChannelsMap(e){const t=e.animations;if(t)for(let e=0;e<t.length;e++){const s=t[e];s.channelsMap={};for(let e=0;e<s.channels.length;e++){const t=s.channels[e];s.channelsMap[t.target.node]||(s.channelsMap[t.target.node]=[]),s.channelsMap[t.target.node].push(t);}}}getExternalResources(){const e=[];if(this.gltf){const{buffers:t,images:s}=this.gltf;for(let s=0;s<t.length;s++)t[s].uri&&t[s].uri.indexOf("data:application/octet-stream;base64")<0&&e.push({type:"buffer",uri:t[s].uri});for(let t=0;t<s.length;t++)s[t].uri&&s[t].uri.indexOf("data:image/")<0&&e.push({type:"image",uri:s[t].uri});}return e}static getAnimationClip(e,t,s,r){return C$2.getAnimationClip(e,t,s,r)}static getAnimationTimeSpan(e,t){return C$2.getTimeSpanByName(e,t)}static getTypedArrayCtor(e){return u$2(e)}static readInterleavedArray(e,t,s,r,n,i,a){return y$2(e,t,s,r,n,i,a)}_init(e,t,s){this.gltf=t,this.glbBuffer=s,this.version=t.asset?+t.asset.version:1,this.rootPath=e,this.buffers={},this.requests={},this.options.requestImage=k$2?z$2.bind(this):this.options.requestImage||j$2,this.options.transferable&&(this.transferables=[]),2===this.version?(this.adapter=new B$2(e,t,s,this.options.requestImage,this.options.decoders||{},this.options.supportedFormats||{}),this.adapter.iterate((e,t,s)=>{t.id="buffer_"+s;},"buffers"),this.adapter.iterate((e,t,s)=>{t.id="image_"+s;},"images"),this.adapter.iterate((e,t,s)=>{t.id="accessor_"+s;},"accessors")):(this.adapter=new R$2(e,t,s,this.options.requestImage,this.options.decoders||{},this.options.supportedFormats||{}),this.adapter.iterate((e,t,s)=>{t.id="accessor_"+s;},"accessors"),this.adapter.iterate((e,t,s)=>{t.id="image_"+s;},"images"));}_parseNodes(e,t){if(e.children&&e.children.length>0){if(!(s=e.children[0],"number"==typeof s&&isFinite(s)||o$1(e.children[0])))return e;const r=e.children.map(e=>{const s=t[e];return s.nodeIndex=e,this._parseNodes(s,t)});e.children=r;}var s;return e}_loadScene(e){return this._loadNodes(e).then(e=>{const t=this.scenes=[];let s;for(const t in e)e[t]=this._parseNodes(e[t],e),e[t].nodeIndex=Number(t)?Number(t):t;this.adapter.iterate((r,n,i)=>{const a={};n.name&&(a.name=n.name),n.nodes&&(a.nodes=n.nodes.map(t=>e[t])),this.gltf.scene===r&&(s=i),t.push(a);},"scenes");const r={textures:this.gltf.textures,asset:this.gltf.asset,scene:s,scenes:t,nodes:e,meshes:this.meshes,materials:this.gltf.materials,skins:this.skins,extensionsRequired:this.gltf.extensionsRequired,extensionsUsed:this.gltf.extensionsUsed};if(this.gltf.extensions&&(r.extensions=this.gltf.extensions),1===this.version){const e=this.adapter._loadMaterials(this.gltf.materials);r.materials=e;}return r})}_loadNodes(e){return this._loadMeshes(e).then(()=>{const e=this.nodes={};return this.adapter.iterate((t,s)=>{const r=this.adapter.createNode(s,this.meshes,this.skins);e[t]=r;},"nodes"),e})}_loadSkins(){this.skins=[];const e=[];return this.adapter.iterate((t,s,r)=>{e.push(this._loadSkin(s).then(e=>{e.index=r,this.skins.push(e);}));},"skins"),e}_loadSkin(e){const t=e.inverseBindMatrices;return this.adapter.accessor._requestData("inverseBindMatrices",t).then(t=>(e.inverseBindMatrices=t,t&&t.buffer&&this.transferables&&this.transferables.indexOf(t.buffer)<0&&this.transferables.push(t.buffer),e))}_loadAnimations(){const e=this.gltf.animations;return a$1(e)?this.adapter.getAnimations(e):null}_loadMeshes(e){this.meshes={};let t=[];return this.adapter.iterate((s,r,n)=>{t.push(this._loadMesh(r,e).then(e=>{e.index=n,this.meshes[s]=e;}));},"meshes"),t=t.concat(this._loadSkins()),Promise.all(t)}_loadMesh(e,t){const s=e.primitives.map(e=>this._loadPrimitive(e,t)).filter(e=>!!e);return Promise.all(s).then(t=>{const s={};return f$1(s,e),s.primitives=t,s})}_loadTextures(){const e=this.gltf.textures;if(!e)return null;const t=[];for(const s in e)t.push(this.adapter._getTexture(s));return Promise.all(t).then(t=>{if(this.transferables)for(let e=0;e<t.length;e++){const s=t[e].image.array;if(t[e]&&s){let e;e=s instanceof ImageBitmap?s:s.buffer,e&&this.transferables.indexOf(e)<0&&this.transferables.push(e);}}if(!Array.isArray(e)){const s={},r=Object.keys(e);for(let e=0;e<t.length;e++)t[e]&&(s[r[e]]=t[e]);return s}return t})}_loadPrimitive(e,t){let s;const n=[],i=e.extensions;if(a$1(e.targets))for(let t=0;t<e.targets.length;t++){const s=e.targets[t];for(const e in s){const r=this.adapter.accessor._requestData(`morphTargets_${e}_${t}`,s[e]);r&&n.push(r);}}if(i&&i.KHR_draco_mesh_compression){if(!this.options.decoders.draco&&(!this.gltf.extensionsRequired||!this.gltf.extensionsRequired.indexOf("KHR_draco_mesh_compression")<0))return null;const e=this.options.decoders.draco,{bufferView:r,attributes:a}=i.KHR_draco_mesh_compression,o=this.gltf.bufferViews[r],f=this._accessor._requestBufferOfBufferView(o).then(s=>{const{buffer:r,byteOffset:n}=s;let{byteOffset:i}=o;const f=o.byteLength;i||(i=0);const u=new DataView(r,n+i,f),h={attributes:a,useUniqueIDs:!1,skipAttributeTransform:t.skipAttributeTransform};return e(u,h).then(e=>{const t=Object.values(e.attributes);return e.indices&&t.push(e.indices),t})});n.push(f),s=Promise.all(n);}else {const t=e.attributes;for(const e in t){const s=this.adapter.accessor._requestData(e,t[e]);s&&n.push(s);}if(a$1(e.indices)){const t=this.adapter.accessor._requestData("indices",e.indices);t&&n.push(t);}s=Promise.all(n);}return s.then(t=>{if(i&&i.KHR_draco_mesh_compression){const s=e.targets?e.targets.length:0;t[s]=t[s].concat(t.slice(0,s)),t=t[s];}let s,n;const o={attributes:t.reduce((e,t)=>{if("indices"===t.name)s=t;else if(t.name.indexOf("morphTargets_")>-1)n=n||{},n[t.name.slice(13)]=t;else {if(!("POSITION"!==t.name||t.min&&t.max)){const e=[1/0,1/0,1/0],s=[-1/0,-1/0,-1/0],{itemSize:n,array:i}=t,a=i.length/n;for(let t=0;t<a;t++)for(let r=0;r<n;r++){const a=t*n+r;i[a]<e[r]&&(e[r]=i[a]),i[a]>s[r]&&(s[r]=i[a]);}if(t.quantization){const n=t.quantization,i=n.range/(1<<n.quantizationBits),a=n.minValues;scale$4(e,e,i),add$4(e,e,a),scale$4(s,s,i),add$4(s,s,a);}t.min=e,t.max=s;}e[t.name]=t;}return this.transferables&&t.array.buffer&&this.transferables.indexOf(t.array.buffer)<0&&this.transferables.push(t.array.buffer),e},{}),material:e.material};return s&&(o.indices=s),n&&(o.morphTargets=n),o.mode=a$1(e.mode)?e.mode:4,a$1(e.extras)&&(o.extras=e.extras),o})}}function j$2(e,t){const s=new Image;s.crossOrigin="",s.onload=()=>{if(!F$2)return void t(new Error("There is no canvas to draw image!"));F$2.width=s.width,F$2.height=s.height;const e=F$2.getContext("2d",{willReadFrequently:!0});e.drawImage(s,0,0,s.width,s.height);const r=e.getImageData(0,0,s.width,s.height),n={width:s.width,height:s.height,data:new Uint8Array(r.data)};t(null,n);},s.onerror=function(e){t(e);},s.src=e;}let H$2,K$2;function z$2(e,t){H$2||(H$2=new OffscreenCanvas(2,2),K$2=H$2.getContext("2d",{willReadFrequently:!0}));let s=null;if(o$1(e))s=fetch(e).then(e=>e.arrayBuffer()).then(e=>{const t=new Blob([new Uint8Array(e)]);return createImageBitmap(t)});else {const t=new Blob([e]);s=createImageBitmap(t);}s.then(Y$2.bind(this)).then(e=>{t(null,e);}).catch(e=>{console.warn(e),t(e);});}function Y$2(e){let{width:t,height:s}=e;W$2(t)||(t=G$2(t)),W$2(s)||(s=G$2(s));const r=this.options.maxTextureSize;r&&(t=Math.min(r,t),s=Math.min(r,s)),H$2.width=t,H$2.height=s,K$2.drawImage(e,0,0,t,s),e.close();const n=K$2.getImageData(0,0,t,s);return {width:t,height:s,data:new Uint8Array(n.data)}}function W$2(e){return 0==(e&e-1)&&0!==e}function G$2(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}

	/*!
	 * Contains code from google filament
	 * https://github.com/google/filament/
	 * License Apache-2.0
	 */

	const CHAR_BIT = 8;

	const MAT0 = [];
	const TMP0 = [];
	const TMP1 = [];
	const TMP2 = [];

	function packTangentFrame(q, /* vec3 */n, /* vec4 */t) {
	    const c = cross$1(TMP0, n, t);
	    const mat = toMat3(MAT0, t[0], t[1], t[2], ...c, ...n);
	    q = fromMat3(q, mat);
	    q = normalize$2(q, q);
	    q = positive(q);

	    const storageSize = 2; //sizeof(int16_t)
	    // Ensure w is never 0.0
	    // Bias is 2^(nb_bits - 1) - 1
	    const bias = 1 / ((1 << (storageSize * CHAR_BIT - 1)) - 1);
	    if (q[3] < bias) {
	        q[3] = bias;
	        const factor = Math.sqrt(1.0 - bias * bias);
	        q[0] *= factor;
	        q[1] *= factor;
	        q[2] *= factor;
	    }

	    const b = t[3] > 0 ? cross$1(TMP1, t, n) : cross$1(TMP1, n, t);
	    
	    // If there's a reflection ((n x t) . b <= 0), make sure w is negative
	    const cc = cross$1(TMP2, t, n);
	    if (dot$4(cc, b) < 0) {
	        scale$2(q, q, -1);
	    }
	    return q;
	}

	function toMat3(out, c00, c01, c02, c10, c11, c12, c20, c21, c22) {
	    out[0] = c00;
	    out[1] = c01;
	    out[2] = c02;

	    out[3] = c10;
	    out[4] = c11;
	    out[5] = c12;

	    out[6] = c20;
	    out[7] = c21;
	    out[8] = c22;

	    return out;
	}


	function positive(q) {
	    if (q[3] < 0) {
	        return scale$2(q, q, -1);
	    } else {
	        return q;
	    }
	}

	const COUNTS = [];
	function buildNormals(positions, indices, out) {
	    const normals = out || [];
	    if (normals.setLength) {
	        // array from arraypool
	        normals.setLength(positions.length);    
	    }
	    const counts = COUNTS;
	    if (counts.length < positions.length / 3) {
	        counts.length = positions.length / 3;
	    }
	    counts.fill(0, 0, positions.length / 3);
	    normals.fill(0, 0, positions.length);
	    for (let i = 0; i < indices.length / 3; i++) {
	        computeNormal(positions, indices[i * 3], indices[i * 3 + 1], indices[i * 3 + 2], normals, counts);
	    }
	    
	    //Calculate the sum of the normal vectors of the shared faces of each vertex, then average it.
	    for (let i = 0; i < normals.length; i += 3) {
	        const count = counts[i / 3];
	        if (count === 0) {
	            continue;
	        }
	        normals[i] /= count;
	        normals[i + 1] /= count;
	        normals[i + 2] /= count;
	    }
	    return normals;
	}

	const V0 = [];
	const V1 = [];
	const V2 = [];

	const vA = [];
	const vB = [];
	const vC = [];
	const normal = [];
	function computeNormal(vertices, v1, v2, v3, normals, counts) {
	    set$4(vA, vertices[v1 * 3], vertices[v1 * 3 + 1], vertices[v1 * 3 + 2]);
	    set$4(vB, vertices[v2 * 3], vertices[v2 * 3 + 1], vertices[v2 * 3 + 2]);
	    set$4(vC, vertices[v3 * 3], vertices[v3 * 3 + 1], vertices[v3 * 3 + 2]);
	    const cb = sub$2(V0, vC, vB);
	    const ab = sub$2(V1, vA, vB);
	    const cross = cross$1(V2, cb, ab);
	    normalize$4(normal, cross);

	    normals[v1 * 3] += normal[0];
	    normals[v2 * 3] += normal[0];
	    normals[v3 * 3] += normal[0];

	    normals[v1 * 3 + 1] += normal[1];
	    normals[v2 * 3 + 1] += normal[1];
	    normals[v3 * 3 + 1] += normal[1];

	    normals[v1 * 3 + 2] += normal[2];
	    normals[v2 * 3 + 2] += normal[2];
	    normals[v3 * 3 + 2] += normal[2];

	    counts[v1] += 1;
	    counts[v2] += 1;
	    counts[v3] += 1;
	}

	/*!
	 * Contains code from THREE.JS
	 * https://github.com/mrdoob/three.js/
	 * License MIT
	 * 
	 * Generate tangents per vertex.
	 */
	function buildTangents(positions, normals, uvs, indices, out) {
	    const nVertices = positions.length / 3;

	    const tangents = out || new Array(4 * nVertices);

	    const tan1 = [], tan2 = [];

	    for (let i = 0; i < nVertices; i++) {

	        tan1[ i ] = [0, 0, 0];
	        tan2[ i ] = [0, 0, 0];

	    }

	    const vA = [0, 0, 0],
	        vB = [0, 0, 0],
	        vC = [0, 0, 0],

	        uvA = [0, 0],
	        uvB = [0, 0],
	        uvC = [0, 0],

	        sdir = [0, 0, 0],
	        tdir = [0, 0, 0];

	    function handleTriangle(a, b, c) {

	        fromArray3(vA, positions, a * 3);
	        fromArray3(vB, positions, b * 3);
	        fromArray3(vC, positions, c * 3);

	        fromArray2(uvA, uvs, a * 2);
	        fromArray2(uvB, uvs, b * 2);
	        fromArray2(uvC, uvs, c * 2);

	        const x1 = vB[0] - vA[0];
	        const x2 = vC[0] - vA[0];

	        const y1 = vB[1] - vA[1];
	        const y2 = vC[1] - vA[1];

	        const z1 = vB[2] - vA[2];
	        const z2 = vC[2] - vA[2];

	        const s1 = uvB[0] - uvA[0];
	        const s2 = uvC[0] - uvA[0];

	        const t1 = uvB[1] - uvA[1];
	        const t2 = uvC[1] - uvA[1];

	        const r = 1.0 / (s1 * t2 - s2 * t1);

	        set$4(
	            sdir,
	            (t2 * x1 - t1 * x2) * r,
	            (t2 * y1 - t1 * y2) * r,
	            (t2 * z1 - t1 * z2) * r
	        );

	        set$4(
	            tdir,
	            (s1 * x2 - s2 * x1) * r,
	            (s1 * y2 - s2 * y1) * r,
	            (s1 * z2 - s2 * z1) * r
	        );

	        add$4(tan1[ a ], tan1[ a ], sdir);
	        add$4(tan1[ b ], tan1[ b ], sdir);
	        add$4(tan1[ c ], tan1[ c ], sdir);

	        add$4(tan2[ a ], tan2[ a ], tdir);
	        add$4(tan2[ b ], tan2[ b ], tdir);
	        add$4(tan2[ c ], tan2[ c ], tdir);

	    }

	    for (let j = 0, jl = indices.length; j < jl; j += 3) {

	        handleTriangle(
	            indices[ j + 0 ],
	            indices[ j + 1 ],
	            indices[ j + 2 ]
	        );

	    }

	    const tmp = [], tmp2 = [];
	    const n = [], n2 = [];
	    let w, t, test;

	    function handleVertex(v) {

	        fromArray3(n, normals, v * 3);
	        copy$4(n2, n);
	        // n2.copy(n);

	        t = tan1[ v ];

	        // Gram-Schmidt orthogonalize

	        copy$4(tmp, t);
	        sub$2(tmp, tmp, scale$4(n, n, dot$4(n, t)));
	        normalize$4(tmp, tmp);
	        // tmp.sub(n.multiplyScalar(n.dot(t))).normalize();

	        // Calculate handedness

	        cross$1(tmp2, n2, t);
	        test = dot$4(tmp2, tan2[ v ]);
	        // tmp2.crossVectors(n2, t);
	        // test = tmp2.dot(tan2[ v ]);
	        w = (test < 0.0) ? -1.0 : 1.0;

	        tangents[ v * 4 ] = tmp[0];
	        tangents[ v * 4 + 1 ] = tmp[1];
	        tangents[ v * 4 + 2 ] = tmp[2];
	        tangents[ v * 4 + 3 ] = w;

	    }

	    for (let j = 0, jl = indices.length; j < jl; j += 3) {

	        handleVertex(indices[ j + 0 ]);
	        handleVertex(indices[ j + 1 ]);
	        handleVertex(indices[ j + 2 ]);

	    }

	    return tangents;
	}

	function fromArray3(out, array, offset) {
	    out[0] = array[offset];
	    out[1] = array[offset + 1];
	    out[2] = array[offset + 2];
	    return out;
	}

	function fromArray2(out, array, offset) {
	    out[0] = array[offset];
	    out[1] = array[offset + 1];
	    return out;
	}

	/*!
	 * @maptalks/reshader.gl v0.91.0
	 * LICENSE : UNLICENSED
	 * (c) 2016-2023 maptalks.com
	 */

	function f(e) {
	    return !d(e) && ("string" == typeof e || null !== e.constructor && e.constructor === String);
	}

	function d(e) {
	    return null == e;
	}

	function u$1(e) {
	    return !d(e);
	}

	function h$1(e) {
	    return !d(e) && ("function" == typeof e || null !== e.constructor && e.constructor === Function);
	}

	const m = "function" == typeof Object.assign;

	function v(e) {
	    if (m) Object.assign.apply(Object, arguments); else for (let n = 1; n < arguments.length; n++) {
	        const t = arguments[n];
	        for (const n in t) e[n] = t[n];
	    }
	    return e;
	}

	function _$1(e) {
	    for (let n = 1; n < arguments.length; n++) {
	        const t = arguments[n];
	        for (const n in t) null != t[n] && (e[n] = t[n]);
	    }
	    return e;
	}

	function g(e) {
	    return "number" == typeof e && !isNaN(e);
	}

	function x$1(e, n, t) {
	    return e * (1 - t) + n * t;
	}

	function b$1(e) {
	    return Array.isArray(e) || e instanceof Uint8Array || e instanceof Int8Array || e instanceof Uint16Array || e instanceof Int16Array || e instanceof Uint32Array || e instanceof Int32Array || e instanceof Uint8ClampedArray || e instanceof Float32Array || e instanceof Float64Array;
	}

	function p(e) {
	    return (e = Math.abs(e)) < 128 ? Int8Array : e < 32768 ? Int16Array : Float32Array;
	}

	function y$1(e, n, t) {
	    return Math.min(t, Math.max(n, e));
	}

	function A$1(e) {
	    return e && e.hasExtension("oes_vertex_array_object");
	}

	function S$1(e, n) {
	    return Object.prototype.hasOwnProperty.call(e, n);
	}

	function T$1(e) {
	    if (e.data) {
	        if (e.data.BYTES_PER_ELEMENT) return e.data.length * e.data.BYTES_PER_ELEMENT;
	        if (e.data.length) return 4 * e.data.length;
	    } else {
	        if (e.BYTES_PER_ELEMENT) return e.length * e.BYTES_PER_ELEMENT;
	        if (e.length) return 4 * e.length;
	        if (e.buffer && e.buffer.destroy) return e.buffer._buffer.byteLength;
	    }
	    return 0;
	}

	function M$1(e) {
	    return e.width * e.height * O$1(e.format) * C$1(e.type) * ("textureCube" === e._reglType ? 6 : 1);
	}

	function C$1(e) {
	    return "uint8" === e ? 1 : "uint16" === e || "float16" === e || "half float" === e ? 2 : "uint32" === e || "float" === e || "float32" === e ? 4 : 0;
	}

	function O$1(e) {
	    return "depth" === e || "alpha" === e || "luminance" === e ? 1 : "luminance alpha" === e || "depth stencil" === e ? 2 : "srgba" === e || "rgb5 a1" === e || "rgba" === e.substring(0, 4) ? 4 : "srgb" === e || "rgb" === e.substring(0, 3) ? 3 : 1;
	}

	function E$1(n) {
	    if (!n.componentType) return !1;
	    const t = X$2.getTypedArrayCtor(n.componentType);
	    return n.byteStride > 0 && n.byteStride !== n.itemSize * t.BYTES_PER_ELEMENT;
	}

	function P$1(e) {
	    return e && (e.stride > 0 || E$1(e));
	}

	function I$1(e) {
	    let n = 0;
	    const t = e && e.length || 0;
	    if (!t) return n;
	    let r;
	    for (let i = 0; i < t; i++) r = e.charCodeAt(i), n = (n << 5) - n + r, n &= n;
	    return n;
	}

	function w$1(e) {
	    return 0 == (e & e - 1) && 0 !== e;
	}

	function R$1(e) {
	    return Math.pow(2, Math.floor(Math.log(e) / Math.LN2));
	}

	function D$1(e, n, t) {
	    if (b$1(e)) return w$1(e.width) && w$1(e.height) ? e : function(e, n, t) {
	        let r = n, i = t;
	        w$1(n) || (r = R$1(n)), w$1(t) || (i = R$1(t));
	        const o = new ImageData(new Uint8ClampedArray(e), n, t), a = document.createElement("canvas");
	        a.width = n, a.height = t, a.getContext("2d").putImageData(o, 0, 0);
	        const s = document.createElement("canvas");
	        s.width = r, s.height = i, s.getContext("2d").drawImage(a, 0, 0, n, t, 0, 0, i, i), 
	        console.warn(`Texture's size is not power of two, resize from (${n}, ${t}) to (${r}, ${i})`);
	        let c = document.getElementById("_debug_resize_canvas");
	        return c || (c = document.createElement("canvas"), c.id = "_debug_resize_canvas", 
	        document.body.appendChild(c)), c.width = r, c.height = i, c.getContext("2d").drawImage(s, 0, 0), 
	        s;
	    }(e, n, t);
	    if (w$1(e.width) && w$1(e.height)) return e;
	    t = e.height, w$1(n = e.width) || (n = R$1(n)), w$1(t) || (t = R$1(t));
	    const r = document.createElement("canvas");
	    r.width = n, r.height = t, r.getContext("2d").drawImage(e, 0, 0, n, t);
	    const i = e.src, o = i.lastIndexOf("/") + 1, a = i.substring(o);
	    return console.warn(`Texture(${a})'s size is not power of two, resize from (${e.width}, ${e.height}) to (${n}, ${t})`), 
	    r;
	}

	var N$1 = Object.freeze({
	    __proto__: null,
	    isString: f,
	    isNil: d,
	    defined: u$1,
	    isFunction: h$1,
	    extend: v,
	    extend1: _$1,
	    extend2: function(e) {
	        for (let n = 1; n < arguments.length; n++) {
	            const t = arguments[n];
	            for (const n in t) void 0 === e[n] && (e[n] = t[n]);
	        }
	        return e;
	    },
	    isNumber: g,
	    log2: function(e) {
	        if (Math.log2) return Math.log2(e);
	        const n = Math.log(e) * Math.LOG2E, t = Math.round(n);
	        return Math.abs(t - n) < 1e-14 ? t : n;
	    },
	    normalize: function(e, n) {
	        let t = 0;
	        for (let e = 0, r = n.length; e < r; e++) t += n[e];
	        for (let r = 0, i = n.length; r < i; r++) e[r] = n[r] / t;
	        return e;
	    },
	    interpolate: x$1,
	    isArray: b$1,
	    lerp: function(e, n, t, r) {
	        for (let i = 0; i < e.length; i++) e[i] = n[i] + r * (t[i] - n[i]);
	        return e;
	    },
	    set: function(e, n) {
	        for (let t = 0; t < e.length; t++) e[t] = n[t];
	        return e;
	    },
	    getPosArrayType: p,
	    clamp: y$1,
	    isSupportVAO: A$1,
	    hasOwn: S$1,
	    getBufferSize: T$1,
	    getTexMemorySize: M$1,
	    getTextureByteWidth: C$1,
	    getTextureChannels: O$1,
	    isInStride: E$1,
	    isInterleaved: P$1,
	    getSupportedFormats: function(e) {
	        return {
	            etc: !!e.getExtension("WEBGL_compressed_texture_etc"),
	            etc1: !!e.getExtension("WEBGL_compressed_texture_etc1"),
	            s3tc: !!e.getExtension("WEBGL_compressed_texture_s3tc"),
	            pvrtc: !!e.getExtension("WEBGL_compressed_texture_pvrtc"),
	            astc: !!e.getExtension("WEBGL_compressed_texture_astc"),
	            bc7: !!e.getExtension("EXT_texture_compression_bptc")
	        };
	    },
	    hashCode: I$1,
	    isPowerOfTwo: w$1,
	    resizeToPowerOfTwo: D$1
	});

	const F$1 = e => class extends e {
	    on(e, n) {
	        return this._events || (this._events = {
	            type: [ n ]
	        }), this._events[e] = this._events[e] || [], this._events[e].push(n), this;
	    }
	    once(e, n) {
	        return this.on(e, this._wrapOnce(e, n));
	    }
	    off(e, n) {
	        return this._events && this._events[e] ? (this._events[e].splice(this._events[e].indexOf(n), 1), 
	        this) : this;
	    }
	    fire(e, n = {}) {
	        if (!this._events || !this._events[e]) return this;
	        n.target || (n.target = this);
	        const t = this._events[e].slice(0);
	        for (const e of t) e(n);
	        return this;
	    }
	    _wrapOnce(e, n) {
	        const t = this;
	        let r = !1;
	        return function i(o) {
	            r || (r = !0, n(o), t.off(e, i));
	        };
	    }
	}, H$1 = "__reshader_disposed";

	var L$1 = Object.freeze({
	    __proto__: null,
	    KEY_DISPOSED: H$1,
	    WEBGL_EXTENSIONS: [ "ANGLE_instanced_arrays", "OES_element_index_uint", "OES_standard_derivatives" ],
	    WEBGL_OPTIONAL_EXTENSIONS: [ "OES_vertex_array_object", "OES_texture_half_float", "OES_texture_half_float_linear", "OES_texture_float", "OES_texture_float_linear", "WEBGL_depth_texture", "EXT_shader_texture_lod", "EXT_texture_filter_anisotropic" ]
	});

	var z$1 = F$1(class {
	    constructor(e, n) {
	        if (h$1(e)) {
	            this._texture = e, e = this.config = {};
	            for (const n in this._texture) S$1(this._texture, n) && (h$1(this._texture[n]) || (e[n] = this._texture[n]));
	        } else if (this.config = e || {}, this.resLoader = n, !e.url && !e.promise || e.data) e.data && this._needPowerOf2() && (e.data instanceof Image ? e.data = D$1(e.data) : e.hdr || !b$1(e.data) || w$1(e.width) && w$1(e.height) || (e.data = D$1(e.data, e.width, e.height))); else {
	            this._loading = !0;
	            const t = this;
	            let r;
	            if (e.promise) r = e.promise; else {
	                let t;
	                t = e.arrayBuffer ? n.getArrayBuffer : n.get, r = t.call(n, e.url);
	            }
	            e.data = n.getDefaultTexture(e.url), this.promise = r, r.then(e => (delete this.promise, 
	            t._loading = !1, t.config ? (e.data instanceof Image && this._needPowerOf2() && (e.data = D$1(e.data)), 
	            t.onLoad(e), Array.isArray(e) || (e = [ e ]), t.fire("complete", {
	                target: this,
	                resources: e
	            }), e) : e)).catch(e => {
	                console.error("error when loading texture image.", e), t.fire("error", {
	                    target: this,
	                    error: e
	                });
	            });
	        }
	    }
	    isReady() {
	        return !this._loading;
	    }
	    set(e, n) {
	        return this.config[e] = n, this.dirty = !0, this;
	    }
	    get(e) {
	        return this.config[e];
	    }
	    getREGLTexture(e) {
	        return this._texture || (this._texture = this.createREGLTexture(e), this.config.persistent || (this.config.data && (this.config.data instanceof ImageBitmap && this.config.data.close(), 
	        this.config.data = []), this.config.faces && (this.config.faces = []), this.config.image && (this.config.image.array = []), 
	        this.config.mipmap && delete this.config.mipmap)), this.dirty && this._updateREGL(), 
	        this._texture;
	    }
	    getMemorySize() {
	        if (!this.config) return 0;
	        const {width: e, height: n, type: t, format: r} = this.config, i = C$1(t || "uint8"), o = O$1(r || "rgba");
	        return this.config.faces ? e * n * i * o * 6 : e * n * i * o;
	    }
	    _updateREGL() {
	        this._texture && !this._texture[H$1] && this._texture(this.config), this.dirty = !1;
	    }
	    dispose() {
	        this.config && this.config.url && (URL.revokeObjectURL(this.config.url), this.resLoader.disposeRes(this.config.url)), 
	        this._texture && !this._texture[H$1] && (this._texture._reshader_refCount && this._texture._reshader_refCount--, 
	        this._texture._reshader_refCount || (this._texture.destroy(), this._texture[H$1] = !0, 
	        delete this._texture)), delete this.resLoader;
	        const e = this.config && this.config.url;
	        delete this.config, e && this.fire("disposed", {
	            target: this,
	            url: e
	        });
	    }
	    _needPowerOf2() {
	        const e = this.config;
	        return e.wrap && "clamp" !== e.wrap || e.wrapS && "clamp" !== e.wrapS || e.wrapT && "clamp" !== e.wrapT || e.min && "nearest" !== e.min && "linear" !== e.min;
	    }
	});

	const B$1 = {};

	class k$1 {
	    constructor(e) {
	        this.regl = e;
	    }
	    render(e, n, t, r) {
	        e.setUniforms(n || B$1), e.setFramebuffer(r);
	        let i = 0;
	        if (t) {
	            const {opaques: n, transparents: r} = t.getSortedMeshes();
	            i += e.draw(this.regl, n), i += e.draw(this.regl, r);
	        } else i += e.draw(this.regl);
	        return i;
	    }
	    clear(e) {
	        this.regl.clear(e);
	    }
	}

	class G$1 extends k$1 {}

	const U$1 = [], V$1 = identity$2([]), j$1 = {
	    min: [],
	    max: []
	};

	class X$1 {
	    constructor(e, n) {
	        this.min = e || [ 1 / 0, 1 / 0, 1 / 0 ], this.max = n || [ -1 / 0, -1 / 0, -1 / 0 ], 
	        this.updateVertex();
	    }
	    static copy(e, n) {
	        copy$4(e.min, n.min), copy$4(e.max, n.max);
	        for (let r = 0; r < n.vertex.length; r++) copy$4(e.vertex[r], n.vertex[r]);
	        return e;
	    }
	    combine(e) {
	        return e ? (Array.isArray(e) && (copy$4(j$1.min, e[0]), copy$4(j$1.max, e[1]), e = j$1), 
	        e.min[0] < this.min[0] && (this.min[0] = e.min[0], this._dirty = !0), e.min[1] < this.min[1] && (this.min[1] = e.min[1], 
	        this._dirty = !0), e.min[2] < this.min[2] && (this.min[2] = e.min[2], this._dirty = !0), 
	        e.max[0] > this.max[0] && (this.max[0] = e.max[0], this._dirty = !0), e.max[1] > this.max[1] && (this.max[1] = e.max[1], 
	        this._dirty = !0), e.max[2] > this.max[2] && (this.max[2] = e.max[2], this._dirty = !0), 
	        this) : this;
	    }
	    dirty() {
	        return this._dirty = !0, this;
	    }
	    getCenter() {
	        return this.center || (this.center = [], this._dirty = !0), this._dirty && (add$4(this.center, this.min, this.max), 
	        scale$4(this.center, this.center, .5)), this._dirty = !1, this.center;
	    }
	    containPoint(e) {
	        const n = this.min, t = this.max;
	        return n[0] <= e[0] && n[1] <= e[1] && n[2] <= e[2] && t[0] >= e[0] && t[1] >= e[1] && t[2] >= e[2];
	    }
	    isFinite() {
	        const e = this.min, n = this.max;
	        return isFinite(e[0]) && isFinite(e[1]) && isFinite(e[2]) && isFinite(n[0]) && isFinite(n[1]) && isFinite(n[2]);
	    }
	    updateVertex() {
	        if (!this.vertex) {
	            this.vertex = [];
	            for (let e = 0; e < 8; e++) this.vertex.push([]);
	        }
	        return this.vertex[0][0] = this.min[0], this.vertex[0][1] = this.min[1], this.vertex[0][2] = this.min[2], 
	        this.vertex[1][0] = this.min[0], this.vertex[1][1] = this.min[1], this.vertex[1][2] = this.max[2], 
	        this.vertex[2][0] = this.min[0], this.vertex[2][1] = this.max[1], this.vertex[2][2] = this.max[2], 
	        this.vertex[3][0] = this.min[0], this.vertex[3][1] = this.max[1], this.vertex[3][2] = this.min[2], 
	        this.vertex[4][0] = this.max[0], this.vertex[4][1] = this.min[1], this.vertex[4][2] = this.min[2], 
	        this.vertex[5][0] = this.max[0], this.vertex[5][1] = this.min[1], this.vertex[5][2] = this.max[2], 
	        this.vertex[6][0] = this.max[0], this.vertex[6][1] = this.max[1], this.vertex[6][2] = this.max[2], 
	        this.vertex[7][0] = this.max[0], this.vertex[7][1] = this.max[1], this.vertex[7][2] = this.min[2], 
	        this.vertex;
	    }
	    copy(e) {
	        return e ? X$1.copy(e, this) : new X$1(this.min.slice(), this.max.slice());
	    }
	    equals(e) {
	        if (!equals$4(this.min, e.min) || !equals$4(this.max, e.max)) return !1;
	        const n = e.vertex;
	        for (let e = 0; e < this.vertex.length; e++) if (!equals$4(n[e], this.vertex[e])) return !1;
	        return !0;
	    }
	    transform(e, r) {
	        if (e = e || V$1, (r = r || V$1)[1] || r[2] || r[4] || r[6] || r[8] || r[9]) {
	            const i = this.vertex, o = multiply$5(U$1, r, e);
	            for (let e = 0; e < i.length; e++) transformMat4$2(this.vertex[e], this.vertex[e], o);
	            const a = this.vertex.map(e => e[0]), s = this.vertex.map(e => e[1]), c = this.vertex.map(e => e[2]), l = Math.min(...a), f = Math.max(...a), d = Math.min(...s), u = Math.max(...s), h = Math.min(...c), m = Math.max(...c);
	            set$4(this.min, l, d, h), set$4(this.max, f, u, m);
	        } else {
	            const i = multiply$5(U$1, r, e);
	            transformMat4$2(this.min, this.min, i), transformMat4$2(this.max, this.max, i);
	        }
	        return this;
	    }
	}

	const W$1 = [], K$1 = {
	    5120: "int8",
	    5122: "int16",
	    5124: "int32",
	    5121: "uint8",
	    5123: "uint16",
	    5125: "uint32",
	    5126: "float"
	}, q$1 = {
	    5120: 1,
	    5122: 2,
	    5124: 4,
	    5121: 1,
	    5123: 2,
	    5125: 4,
	    5126: 4
	}, Y$1 = {
	    positionSize: 3,
	    primitive: "triangles",
	    positionAttribute: "aPosition",
	    normalAttribute: "aNormal",
	    uv0Attribute: "aTexCoord",
	    uv1Attribute: "aTexCoord1",
	    color0Attribute: "aColor0",
	    tangentAttribute: "aTangent",
	    pickingIdAttribute: "aPickingId",
	    textureCoordMatrixAttribute: "aTextureCoordMatrix"
	};

	let J$1 = 1;

	const Z$1 = "_reshader_refCount";

	class Q$1 {
	    constructor(e, n, t, r) {
	        this._version = 0, this.data = e, this.elements = n, this.desc = v({}, Y$1, r);
	        const i = this._getPosAttritute();
	        this.data[this.desc.positionAttribute] = i, t || (this.elements ? t = $$1(this.elements) : i && i.length ? t = i.length / this.desc.positionSize : i && i.interleavedArray ? t = i.interleavedArray.length / this.desc.positionSize : i && i.array && (t = i.array.length / this.desc.positionSize)), 
	        this.count = t, this.elements || (this.elements = t), this.properties = {}, this._buffers = {}, 
	        this._vao = {}, this.getVertexCount(), this._prepareData(!0), this.updateBoundingBox();
	    }
	    set version(e) {
	        throw new Error("Geometry.version is read only.");
	    }
	    get version() {
	        return this._version;
	    }
	    _getPosAttritute() {
	        return this.data[this.desc.positionAttribute];
	    }
	    _prepareData(e) {
	        if (!this.data) return;
	        const n = this._buffers || {};
	        for (const t in this.data) {
	            const r = this.data[t];
	            if (r) if (r.buffer && r.buffer.destroy) {
	                const n = r.buffer;
	                n[Z$1] || (n[Z$1] = 0), e && n[Z$1]++;
	            } else if (r && r.array) if (E$1(r)) {
	                let e = r.array.buffer.__id;
	                e || (e = r.array.buffer.__id = J$1++), this.data[t] = {
	                    buffer: e,
	                    offset: r.byteOffset,
	                    stride: r.byteStride,
	                    type: K$1[r.componentType],
	                    size: r.itemSize,
	                    count: r.count,
	                    componentType: r.componentType
	                }, n[e] || (n[e] = {
	                    data: r.array.buffer
	                });
	            } else this.data[t] = r.array;
	        }
	        this._buffers = n;
	        const t = this.elements;
	        t && t.array && (this.elements = this.elements.array);
	    }
	    getAttrData(e) {
	        const n = e.key, t = !this._reglData || !this._reglData[n];
	        if (this._reglData || (this._reglData = {}), t) {
	            const e = this._reglData[n] = {}, t = this.data, {positionAttribute: r, normalAttribute: i, uv0Attribute: o, uv1Attribute: a, tangentAttribute: s, color0Attribute: c, pickingIdAttribute: l, textureCoordMatrixAttribute: f} = this.desc;
	            v(e, this.data), e.aPosition = t[r], t[i] && (e.aNormal = t[i]), t[o] && (e.aTexCoord = t[o]), 
	            t[a] && (e.aTexCoord1 = t[a]), t[s] && (e.aTangent = t[s]), t[c] && (e.aColor0 = t[c]), 
	            t[l] && (e.aPickingId = t[l]), t[f] && (e.aTextureCoordMatrix = t[f]);
	        }
	        return this._reglData[n];
	    }
	    getREGLData(e, n, t) {
	        this.getAttrData(n);
	        const r = !this._reglData || !this._reglData[n.key];
	        if (A$1(e) && !t) {
	            const t = n && n.key || "default";
	            if (!this._vao[t] || r || this._vao[t].dirty) {
	                const r = this._reglData[n.key], i = this._vertexCount, o = [];
	                for (let e = 0; e < n.length; e++) {
	                    const t = n[e].name, a = r[t] && r[t].buffer;
	                    if (a && a.destroy) o.push(void 0 !== r[t].stride ? r[t] : a); else {
	                        const e = r[t];
	                        if (!e) {
	                            o.push(this.desc.fillEmptyDataInMissingAttribute ? new Uint8Array(4 * i) : W$1);
	                            continue;
	                        }
	                        const n = (e.data && b$1(e.data) ? e.data.length : e.length) / i;
	                        e.data ? (e.dimension = n, o.push(e)) : o.push({
	                            data: e,
	                            dimension: n
	                        });
	                    }
	                }
	                const a = {
	                    attributes: o,
	                    primitive: this.getPrimitive()
	                };
	                if (this.elements && !g(this.elements)) if (this.elements.destroy) a.elements = this.elements; else {
	                    a.elements = {
	                        primitive: this.getPrimitive(),
	                        data: this.elements
	                    };
	                    const e = this.getElementsType(this.elements);
	                    e && (a.elements.type = e);
	                }
	                this._vao[t] ? this._vao[t].vao(a) : this._vao[t] = {
	                    vao: e.vao(a)
	                };
	            }
	            return delete this._vao[t].dirty, this._vao[t];
	        }
	        return this._reglData[n.key];
	    }
	    _isAttrChanged(e) {
	        if (e === this._activeAttributes) return !1;
	        if (e.length !== this._activeAttributes.length) return !0;
	        for (let n = 0; n < e.length; n++) if (e[n] !== this._activeAttributes[n]) return !0;
	        return !1;
	    }
	    generateBuffers(e) {
	        const n = this._buffers;
	        for (const t in n) n[t].buffer || (n[t].buffer = e.buffer(n[t].data)), delete n[t].data;
	        const t = this.desc.positionAttribute, r = this.desc.altitudeAttribute, i = this.data, o = this._vertexCount, a = {};
	        for (const s in i) if (i[s]) {
	            if (void 0 === i[s].buffer || i[s].buffer instanceof ArrayBuffer) {
	                const n = i[s].data ? i[s] : {
	                    data: i[s]
	                };
	                n.dimension = (i[s].data ? i[s].data : i[s]).length / o;
	                const c = e.buffer(n);
	                c[Z$1] = 1, a[s] = {
	                    buffer: c
	                }, s !== t && s !== r || (a[s].array = i[s]);
	            } else i[s].buffer.destroy ? a[s] = i[s] : n[i[s].buffer] && (a[s] = v({}, i[s]), 
	            a[s].buffer = n[i[s].buffer].buffer);
	            (this.desc.static || s !== t) && delete i[s].array;
	        }
	        if (this.data = a, delete this._reglData, this.elements && !g(this.elements)) {
	            const n = {
	                primitive: this.getPrimitive(),
	                data: this.elements
	            }, t = this.getElementsType(this.elements);
	            if (t && (n.type = t), !this.desc.static && !this.elements.destroy) {
	                this.indices = new Uint16Array(this.elements.length);
	                for (let e = 0; e < this.elements.length; e++) this.indices[e] = this.elements[e];
	            }
	            this.elements = this.elements.destroy ? this.elements : e.elements(n);
	            const r = this.elements;
	            r[Z$1] || (r[Z$1] = 0), r[Z$1]++;
	        }
	    }
	    getVertexCount() {
	        const {positionAttribute: e, positionSize: n, color0Attribute: t} = this.desc;
	        let r = this.data[e];
	        r.data && (r = r.data), r.array && (r = r.array), b$1(r) ? this._vertexCount = Math.ceil(r.length / n) : r && void 0 !== r.count && (this._vertexCount = r.count);
	        const i = t;
	        if (this.data[i]) {
	            const e = this.data[i].data || this.data[i].array || this.data[i];
	            Array.isArray(e) ? this._color0Size = e.length / this._vertexCount : e && e.count ? this._color0Size = e.count / this._vertexCount : this.data[i].buffer && this.data[i].buffer.destroy && (this._color0Size = this.data[i].buffer._buffer.dimension);
	        }
	        return this._vertexCount;
	    }
	    getColor0Size() {
	        return this._color0Size || 0;
	    }
	    addBuffer(e, n) {
	        return this._buffers[e] = {
	            data: n
	        }, delete this._reglData, this._deleteVAO(), this;
	    }
	    updateBuffer(e, n) {
	        if (!this._buffers[e]) throw new Error(`invalid buffer ${e} in geometry`);
	        return this._buffers[e].buffer ? this._buffers[e].buffer.subdata(n) : this._buffers[e].data = n, 
	        delete this._reglData, this._deleteVAO(), this;
	    }
	    deleteData(e) {
	        const n = this.data[e];
	        return n ? (this._incrVersion(), n.buffer && n.buffer.destroy && n.buffer.destroy(), 
	        delete this.data[e], delete this._reglData, this._markVAODirty(), this) : this;
	    }
	    updateData(e, n) {
	        const t = this.data[e];
	        if (!t) return this;
	        let r;
	        return this._incrVersion(), this.data[e] = n, t.buffer && t.buffer.destroy && (r = t), 
	        e === this.desc.positionAttribute && this.updateBoundingBox(), this.getVertexCount(), 
	        r && (r.buffer(n), this.data[e] = r), this._prepareData(!1), this.desc.positionAttribute === e && (this._posDirty = !0), 
	        delete this._reglData, this;
	    }
	    updateSubData(e, n, t) {
	        const r = this.data[e];
	        if (!r) return this;
	        let i;
	        if (this._incrVersion(), r.buffer && r.buffer.destroy && (i = r), e === this.desc.positionAttribute && this._updateSubBoundingBox(n), 
	        i) {
	            const e = q$1[i.buffer._buffer.dtype];
	            if (n.BYTES_PER_ELEMENT !== e) {
	                n = new (function(e, n) {
	                    if (e instanceof Uint8Array || e instanceof Uint16Array || e instanceof Uint32Array || e instanceof Uint8ClampedArray) return 1 === n ? Uint8Array : 2 === n ? Uint16Array : Uint32Array;
	                    if (e instanceof Int8Array || e instanceof Int16Array || e instanceof Int32Array) return 1 === n ? Int8Array : 2 === n ? Int16Array : Int32Array;
	                    if (e instanceof Float32Array || e instanceof Float64Array) return 4 === n ? Float32Array : Float64Array;
	                    return null;
	                }(n, e))(n);
	            }
	            i.buffer.subdata(n, t * e);
	        } else {
	            const r = this.data[e].data ? this.data[e].data : this.data[e];
	            for (let e = 0; e < n.length; e++) r[t + e] = n[e];
	        }
	        return this._prepareData(!1), this.desc.positionAttribute === e && (this._posDirty = !0), 
	        delete this._reglData, this;
	    }
	    getPrimitive() {
	        return this.desc.primitive;
	    }
	    getElements() {
	        return this.elements;
	    }
	    setElements(e, n) {
	        if (!e) throw new Error("elements data is invalid");
	        this._incrVersion();
	        const t = this.elements;
	        return this.count = void 0 === n ? $$1(e) : n, this.elements = e && e.destroy ? e : t.destroy ? t(e) : e, 
	        this._markVAODirty(!0), this;
	    }
	    deleteElements() {
	        return this.elements && 0 !== this.elements.length ? (this._incrVersion(), this.elements && this.elements.destroy && !this.elements[H$1] && (this.elements.destroy(), 
	        this.elements[H$1] = 1), this.elements = [], this._markVAODirty(!0), this) : this;
	    }
	    _markVAODirty(e) {
	        if (this._vao) {
	            for (const n in this._vao) e ? this._vao[n].vao.destroy() : this._vao[n].dirty = !0;
	            e && (this._vao = {});
	        }
	    }
	    setDrawCount(e) {
	        return this._incrVersion(), this.count1 = e, this;
	    }
	    getDrawCount() {
	        return this.count1 >= 0 ? this.count1 : this.count;
	    }
	    setDrawOffset(e) {
	        return this._incrVersion(), this.offset = e, this;
	    }
	    getDrawOffset() {
	        return this.offset || 0;
	    }
	    dispose() {
	        this._deleteVAO(), this._forEachBuffer(e => {
	            if (!e[H$1]) {
	                let n = e[Z$1];
	                n && n--, n <= 0 ? (e[H$1] = !0, e.destroy()) : e[Z$1] = n;
	            }
	        }), this.data = {}, this._buffers = {}, delete this._reglData, delete this._attributes, 
	        this.count = 0, this.elements = [], delete this._tempPosArray, this._disposed = !0;
	    }
	    isDisposed() {
	        return !!this._disposed;
	    }
	    updateBoundingBox() {
	        let e = this.boundingBox;
	        e || (e = this.boundingBox = new X$1);
	        let n, r, i = this.data[this.desc.positionAttribute];
	        if (b$1(i) || (i.data ? i = i.data : P$1(i) ? i = this._getAttributeData(this.desc.positionAttribute) : i.array && (n = i.min, 
	        r = i.max, i = i.array)), i && i.length) {
	            const o = e.min, a = e.max;
	            if (n && r) set$4(o, ...n), set$4(a, ...r); else {
	                set$4(o, i[0], i[1], i[2]), set$4(a, i[0], i[1], i[2]);
	                for (let e = 3; e < i.length; ) {
	                    const n = i[e++], t = i[e++], r = i[e++];
	                    n < o[0] && (o[0] = n), t < o[1] && (o[1] = t), r < o[2] && (o[2] = r), n > a[0] && (a[0] = n), 
	                    t > a[1] && (a[1] = t), r > a[2] && (a[2] = r);
	                }
	            }
	            e.updateVertex(), e.dirty();
	        }
	    }
	    _updateSubBoundingBox(e) {
	        const n = this.boundingBox, t = n.min, r = n.max, i = this.desc.positionSize;
	        for (let n = 0; n < e.length; ) {
	            const o = e[n++], a = e[n++];
	            let s = 0;
	            3 === i && (s = e[n++]), o < t[0] && (t[0] = o), a < t[1] && (t[1] = a), s < t[2] && (t[2] = s), 
	            o > r[0] && (r[0] = o), a > r[1] && (r[1] = a), s > r[2] && (r[2] = s);
	        }
	        n.updateVertex(), n.dirty();
	    }
	    _getAttributeData(n) {
	        const t = this.data[n] && this.data[n].array ? this.data[n].array : this.data[n], r = t.buffer;
	        if (P$1(t)) {
	            const i = this._buffers[r] ? this._buffers[r].data : t.array, {count: o, size: a, stride: s, offset: c, componentType: l} = t, f = X$2.getTypedArrayCtor(l);
	            if ((0 === s || s === a * f.BYTES_PER_ELEMENT) && c % f.BYTES_PER_ELEMENT == 0) return new f(i, c, o * a);
	            if (n === this.desc.positionAttribute) return !this._tempPosArray || this._tempPosArray && this._tempPosArray.length < a * o ? (this._tempPosArray = new f(a * o), 
	            X$2.readInterleavedArray(this._tempPosArray, i, o, a, s, c, l)) : this._posDirty ? (this._posDirty = !1, 
	            X$2.readInterleavedArray(this._tempPosArray, i, o, a, s, c, l)) : this._tempPosArray;
	            {
	                const n = new f(a * o);
	                return X$2.readInterleavedArray(n, i, o, a, s, c, l);
	            }
	        }
	        return t;
	    }
	    createTangent(e = "aTangent") {
	        this._incrVersion();
	        const {normalAttribute: n, positionAttribute: i, uv0Attribute: o} = this.desc, a = this._getAttributeData(n), l = this._getAttributeData(i), f = buildTangents(l, a, this.data[o], this.elements), d = this.data[e] = new Float32Array(f.length), u = [], h = [], m = [];
	        for (let e = 0; e < f.length; e += 4) {
	            const n = e / 4 * 3;
	            set$4(h, a[n], a[n + 1], a[n + 2]), set$3(u, f[e], f[e + 1], f[e + 2], f[e + 3]), 
	            packTangentFrame(m, h, u), copy$3(d.subarray(e, e + 4), m);
	        }
	        delete this._reglData;
	    }
	    createNormal(e = "aNormal") {
	        this._incrVersion();
	        const n = this._getAttributeData(this.desc.positionAttribute);
	        this.data[e] = buildNormals(n.array || n, this.elements), delete this._reglData;
	    }
	    createBarycentric(e = "aBarycentric") {
	        if ("triangles" !== this.desc.primitive) throw new Error("Primitive must be triangles to create bary centric data");
	        this._incrVersion();
	        const n = new Uint8Array(3 * this._vertexCount);
	        for (let e = 0, t = this.elements.length; e < t; ) for (let t = 0; t < 3; t++) {
	            n[3 * this.elements[e++] + t] = 1;
	        }
	        this.data[e] = n, delete this._reglData;
	    }
	    buildUniqueVertex() {
	        this._incrVersion();
	        const e = this.data, n = this.elements;
	        if (!b$1(n)) throw new Error("elements must be array to build unique vertex.");
	        const t = Object.keys(e), r = {};
	        let i = e[this.desc.positionAttribute];
	        if (i = i.length ? i : i.array, !b$1(i)) throw new Error(this.desc.positionAttribute + " must be array to build unique vertex.");
	        const o = this._vertexCount, a = n.length;
	        for (let n = 0; n < t.length; n++) {
	            const i = t[n], s = b$1(e[i]) ? e[i] : e[i].array, c = s.length / o;
	            if (!b$1(s)) throw new Error(i + " must be array to build unique vertex.");
	            r[i] = s, e[i] = new s.constructor(a * c);
	        }
	        let s = 0;
	        for (let i = 0; i < a; i++) {
	            const a = n[i];
	            for (let n = 0; n < t.length; n++) {
	                const i = t[n], c = e[i], l = r[i].length / o;
	                for (let e = 0; e < l; e++) c[s * l + e] = r[i][a * l + e];
	            }
	            n[i] = s++;
	        }
	        i = this.data[this.desc.positionAttribute], this._vertexCount = Math.ceil(i.length / this.desc.positionSize), 
	        delete this._reglData;
	    }
	    getMemorySize() {
	        let e = 0;
	        for (const n in this.data) S$1(this.data, n) && (e += T$1(this.data[n]));
	        if (this.elements) {
	            const n = this.elements;
	            n.destroy ? e += n._elements.buffer.byteLength : n.BYTES_PER_ELEMENT ? e += n.length * n.BYTES_PER_ELEMENT : n.length && (e += 4 * n.length);
	        }
	        return e;
	    }
	    _deleteVAO() {
	        for (const e in this._vao) this._vao[e].vao.destroy();
	        this._vao = {};
	    }
	    _forEachBuffer(e) {
	        this.elements && this.elements.destroy && e(this.elements);
	        for (const n in this.data) S$1(this.data, n) && this.data[n] && this.data[n].buffer && this.data[n].buffer.destroy && e(this.data[n].buffer);
	        for (const n in this._buffers) S$1(this._buffers, n) && this._buffers[n] && this._buffers[n].buffer && this._buffers[n].buffer.destroy && e(this._buffers[n].buffer);
	    }
	    getElementsType(e) {
	        return e instanceof Uint8Array ? "uint8" : e instanceof Uint16Array ? "uint16" : e instanceof Uint32Array ? "uint32" : void 0;
	    }
	    _incrVersion() {
	        this._version++;
	    }
	}

	function $$1(e) {
	    if (g(e)) return e;
	    if (void 0 !== e.count) return e.count;
	    if (e.destroy) return e._elements.vertCount;
	    if (void 0 !== e.length) return e.length;
	    if (e.data) return e.data.length;
	    throw new Error("invalid elements length");
	}

	const ee$1 = [ "points", "lines", "line strip", "line loop", "triangles", "triangle strip", "triangle fan" ];

	function ne$1(e) {
	    return ee$1[e];
	}

	const te$1 = {
	    5121: "uint8",
	    5123: "uint16",
	    5125: "uint32",
	    5126: "float",
	    36193: "half float"
	};

	function re$1(e) {
	    return te$1[e];
	}

	const ie$1 = {
	    6406: "alpha",
	    6407: "rgb",
	    6408: "rgba",
	    6409: "luminance",
	    6410: "luminance alpha",
	    33776: "rgb s3tc dxt1",
	    33777: "rgba s3tc dxt1",
	    33778: "rgba s3tc dxt3",
	    33779: "rgba s3tc dxt5",
	    35840: "rgb pvrtc 4bppv1",
	    35841: "rgb pvrtc 2bppv1",
	    35842: "rgba pvrtc 4bppv1",
	    35843: "rgba pvrtc 2bppv1",
	    35986: "rgb atc",
	    35987: "rgba atc explicit alpha",
	    34798: "rgba atc interpolated alpha",
	    36196: "rgb etc1"
	};

	function oe$1(e) {
	    return ie$1[e];
	}

	const ae$1 = {
	    9729: "linear",
	    9728: "nearest"
	};

	function se$1(e) {
	    return ae$1[e];
	}

	const ce$1 = {
	    9729: "linear",
	    9728: "nearest",
	    9984: "nearest mipmap nearest",
	    9985: "linear mipmap nearest",
	    9986: "nearest mipmap linear",
	    9987: "linear mipmap linear"
	};

	function le$1(e) {
	    return ce$1[e];
	}

	const fe$1 = {
	    10497: "repeat",
	    33071: "clamp",
	    33648: "mirror"
	};

	function de$1(e) {
	    return fe$1[e];
	}

	const ue$1 = "__reshader_webgl_buffer", he$1 = "__reshader_webgl_tex";

	function me$1(e, n, t) {
	    let r;
	    if (b$1(n) ? n.buffer && void 0 !== n.byteOffset && (r = n) : n.array && n.array.buffer && void 0 !== n.array.byteOffset && (r = n.array), 
	    !r) return null;
	    const i = r.buffer, o = r.byteOffset;
	    i[ue$1] || (i[ue$1] = {});
	    let a = i[ue$1][o];
	    if (!a) {
	        const n = {};
	        t && v(n, t), n.data = r, a = e.buffer(n), i[ue$1][o] = a;
	    }
	    return a;
	}

	function ve$1(e, n) {
	    const t = n.data;
	    if (!t || !t.buffer) return e.texture(n);
	    const r = t.buffer, i = t.byteOffset;
	    r[he$1] || (r[he$1] = {});
	    let o = r[he$1][i];
	    return o || (o = e.texture(n), r[he$1][i] = o), o;
	}

	var _e$1 = Object.freeze({
	    __proto__: null,
	    getPrimitive: ne$1,
	    getMaterialType: re$1,
	    getMaterialFormat: oe$1,
	    getTextureMagFilter: se$1,
	    getTextureMinFilter: le$1,
	    getTextureWrap: de$1,
	    getUniqueREGLBuffer: me$1,
	    getUniqueTexture: ve$1
	});

	const ge$1 = [], xe$1 = [], be$1 = [], pe$1 = [], ye$1 = [], Ae$1 = [], Se$1 = [ "a", "b", "c" ];

	class Te$1 extends Q$1 {
	    constructor(e, n, t, r) {
	        super(e, n, t, {
	            primitive: ne$1(1),
	            positionAttribute: r.positionAttribute
	        });
	    }
	    _getPosAttritute() {
	        const e = this.data[this.desc.positionAttribute];
	        if (!e) return null;
	        const n = Math.pow(10, 4), t = Math.cos(Math.PI / 180 * .8), r = this.elements, i = e.length ? e : e.array, o = r.length ? r ? r.length : i.length / 3 : r, a = [ 0, 0, 0 ], s = new Array(3), c = {}, l = [], f = new Me$1;
	        for (let e = 0; e < o; e += 3) {
	            r.length ? (a[0] = r[e], a[1] = r[e + 1], a[2] = r[e + 2]) : (a[0] = e, a[1] = e + 1, 
	            a[2] = e + 2), f.a = this._getPos(pe$1, i, a[0]), f.b = this._getPos(ye$1, i, a[1]), 
	            f.c = this._getPos(Ae$1, i, a[2]);
	            const o = f.getNormal(), d = f.a, u = f.b, h = f.c;
	            if (s[0] = `${Math.round(d[0] * n)},${Math.round(d[1] * n)},${Math.round(d[2] * n)}`, 
	            s[1] = `${Math.round(u[0] * n)},${Math.round(u[1] * n)},${Math.round(u[2] * n)}`, 
	            s[2] = `${Math.round(h[0] * n)},${Math.round(h[1] * n)},${Math.round(h[2] * n)}`, 
	            s[0] !== s[1] && s[1] !== s[2] && s[2] !== s[0]) for (let e = 0; e < 3; e++) this._calEdgeData(e, a, f, c, s, t, o, l);
	        }
	        for (const e in c) if (c[e]) {
	            const {index0: n, index1: t} = c[e];
	            l.push(i[3 * n], i[3 * n + 1], i[3 * n + 2]), l.push(i[3 * t], i[3 * t + 1], i[3 * t + 2]);
	        }
	        return this.elements = this._createElements(l), l;
	    }
	    _getPos(e, n, r) {
	        return set$4(e, n[3 * r], n[3 * r + 1], n[3 * r + 2]);
	    }
	    _calEdgeData(e, n, r, i, o, a, s, c) {
	        const l = (e + 1) % 3, f = o[e], d = o[l], u = r[Se$1[e]], h = r[Se$1[l]], m = `${f}_${d}`, v = `${d}_${f}`;
	        if (v in i && i[v]) {
	            dot$4(s, i[v].normal) <= a && (c.push(u[0], u[1], u[2]), c.push(h[0], h[1], h[2])), 
	            i[v] = null;
	        } else m in i || (i[m] = {
	            index0: n[e],
	            index1: n[l],
	            normal: copy$4([], s)
	        });
	    }
	    _createElements(e) {
	        const n = [], t = e.length / 3;
	        for (let e = 0; e < t; e++) n.push(e);
	        return n;
	    }
	}

	class Me$1 {
	    constructor(e = [ 0, 0, 0 ], n = [ 0, 0, 0 ], t = [ 0, 0, 0 ]) {
	        this.a = e, this.b = n, this.c = t;
	    }
	    getNormal() {
	        const e = sub$2(ge$1, this.a, this.b), n = sub$2(xe$1, this.a, this.c);
	        cross$1(be$1, e, n);
	        const r = length$4(be$1);
	        return set$4(be$1, be$1[0] / r, be$1[1] / r, be$1[2] / r);
	    }
	}

	var Ce$1 = F$1(class {
	    constructor(e = {}, n) {
	        this._version = 0, this.uniforms = _$1({}, n || {}, e);
	        for (const n in e) {
	            const t = Object.getOwnPropertyDescriptor(e, n).get;
	            t && Object.defineProperty(this.uniforms, n, {
	                get: t
	            });
	        }
	        this._reglUniforms = {}, this.refCount = 0, this._bindedOnTextureComplete = this._onTextureComplete.bind(this), 
	        this._genUniformKeys(), this._checkTextures();
	    }
	    set version(e) {
	        throw new Error("Material.version is read only.");
	    }
	    get version() {
	        return this._version;
	    }
	    set doubleSided(e) {
	        this._doubleSided = e;
	    }
	    get doubleSided() {
	        return this._doubleSided;
	    }
	    isReady() {
	        return this._loadingCount <= 0;
	    }
	    set(e, n) {
	        const t = d(this.uniforms[e]) && !d(n) || !d(this.uniforms[e]) && d(n);
	        return this.uniforms[e] && this.isTexture(e) && this.uniforms[e].dispose(), d(n) ? d(this.uniforms[e]) || delete this.uniforms[e] : this.uniforms[e] = n, 
	        this._dirtyUniforms = !0, this.isTexture(e) && this._checkTextures(), t && (this._genUniformKeys(), 
	        this._incrVersion()), this;
	    }
	    get(e) {
	        return this.uniforms[e];
	    }
	    isDirty() {
	        return this._uniformVer !== this.version;
	    }
	    appendDefines(e) {
	        const n = this.uniforms;
	        return n.jointTexture && (e.HAS_SKIN = 1), n.morphWeights1 && (e.HAS_MORPH = 1), 
	        (n.khr_offset || n.khr_rotation || n.khr_scale) && (e.HAS_KHR_TEXTURE_TRANSFORM = 1), 
	        e;
	    }
	    hasSkinAnimation() {
	        return this.uniforms && this.uniforms.jointTexture && this.uniforms.skinAnimation;
	    }
	    getUniforms(e) {
	        if (this._reglUniforms && !this.isDirty()) return this._reglUniforms;
	        const n = this.uniforms, t = {};
	        for (const r in n) this.isTexture(r) ? Object.defineProperty(t, r, {
	            enumerable: !0,
	            configurable: !0,
	            get: function() {
	                return n[r].getREGLTexture(e);
	            }
	        }) : Object.defineProperty(t, r, {
	            enumerable: !0,
	            configurable: !0,
	            get: function() {
	                return n[r];
	            }
	        });
	        return this._reglUniforms = t, this._uniformVer = this.version, t;
	    }
	    isTexture(e) {
	        return this.uniforms[e] instanceof z$1;
	    }
	    dispose() {
	        for (const e in this.uniforms) {
	            const n = this.uniforms[e];
	            n && (n.dispose ? n.dispose() : n.destroy && !n[H$1] && (n.destroy(), n[H$1] = !0));
	        }
	        delete this.uniforms, delete this._reglUniforms, this._disposed = !0;
	    }
	    isDisposed() {
	        return !!this._disposed;
	    }
	    _checkTextures() {
	        this._loadingCount = 0;
	        for (const e in this.uniforms) if (this.isTexture(e)) {
	            const n = this.uniforms[e];
	            n.isReady() || (this._loadingCount++, n.on("complete", this._bindedOnTextureComplete));
	        }
	    }
	    _onTextureComplete() {
	        this._loadingCount--, this._incrVersion(), this._loadingCount <= 0 && (this._disposed || this.fire("complete"));
	    }
	    getUniformKeys() {
	        return this._uniformKeys;
	    }
	    _genUniformKeys() {
	        const e = [];
	        for (const n in this.uniforms) S$1(this.uniforms, n) && !d(this.uniforms[n]) && e.push(n);
	        this._uniformKeys = e.join();
	    }
	    _incrVersion() {
	        this._version++;
	    }
	    getMemorySize() {
	        const e = this.uniforms;
	        let n = 0;
	        for (const t in e) this.isTexture(t) ? n += e[t].getMemorySize() : this.uniforms[t].destroy && (n += M$1(this.uniforms[t]));
	        return n;
	    }
	});

	const Oe$1 = {
	    time: 0,
	    seeThrough: !0,
	    thickness: .03,
	    fill: [ 1, .5137254902, .98, 1 ],
	    stroke: [ .7019607843, .9333333333, .2274509804, 1 ],
	    dashEnabled: !1,
	    dashAnimate: !1,
	    dashRepeats: 1,
	    dashLength: .8,
	    dashOverlap: !0,
	    insideAltColor: !1,
	    squeeze: !1,
	    squeezeMin: .5,
	    squeezeMax: 1,
	    dualStroke: !1,
	    secondThickness: .05,
	    opacity: 1,
	    noiseEnable: !1
	};

	class Ee$1 extends Ce$1 {
	    constructor(e) {
	        super(e, Oe$1);
	    }
	}

	const Pe$1 = {
	    baseColorFactor: [ 1, 1, 1, 1 ],
	    materialShininess: 32,
	    environmentExposure: 1,
	    specularStrength: 32,
	    opacity: 1,
	    extrusionOpacity: 0,
	    extrusionOpacityRange: [ 0, 1.8 ],
	    baseColorTexture: null,
	    normalTexture: null,
	    emissiveTexture: null,
	    occlusionTexture: null,
	    uvScale: [ 1, 1 ],
	    uvOffset: [ 0, 0 ],
	    alphaTest: 0
	};

	class Ie$1 extends Ce$1 {
	    constructor(e) {
	        super(e, Pe$1);
	    }
	    static convertFrom(e) {
	        const n = {};
	        for (const t in Pe$1) n[t] = e.get(t);
	        return new Ie$1(n);
	    }
	    appendDefines(e, n) {
	        super.appendDefines(e, n);
	        const t = this.uniforms;
	        t.extrusionOpacity && (e.HAS_EXTRUSION_OPACITY = 1), n.data[n.desc.colorAttribute] && (e.HAS_COLOR = 1);
	        return n.data[n.desc.color0Attribute] && (e.HAS_COLOR0 = 1, e.COLOR0_SIZE = n.getColor0Size()), 
	        n.data[n.desc.tangentAttribute] ? e.HAS_TANGENT = 1 : n.data[n.desc.normalAttribute] && (e.HAS_NORMAL = 1), 
	        n.data[n.desc.uv0Attribute] ? (t.baseColorTexture && (e.HAS_BASECOLOR_MAP = 1), 
	        t.occlusionTexture && n.data[n.desc.uv1Attribute] && (e.HAS_AO_MAP = 1), t.emissiveTexture && (e.HAS_EMISSIVE_MAP = 1), 
	        t.normalTexture && (e.HAS_NORMAL_MAP = 1), (e.HAS_BASECOLOR_MAP || e.HAS_AO_MAP || e.HAS_EMISSIVE_MAP || e.HAS_NORMAL_MAP) && (e.HAS_MAP = 1), 
	        e) : e;
	    }
	}

	const we$1 = {
	    toons: 4,
	    specularToons: 2
	};

	class Re$1 extends Ie$1 {
	    constructor(e) {
	        super(e, we$1);
	    }
	}

	const De$1 = {
	    baseColorFactor: [ 1, 1, 1, 1 ],
	    uvScale: [ 1, 1 ],
	    uvOffset: [ 0, 0 ],
	    opacity: 1,
	    envMapExposure: 128,
	    emissiveFactor: [ .1, .1, .1 ],
	    specularFactor: [ 0, 0, 0 ],
	    envRotationSin: 0,
	    envRotationCos: 1,
	    reflectivity: .01,
	    themingColor: [ 0, 0, 0, 0 ],
	    exposureBias: .6
	};

	class Ne$1 extends Ce$1 {
	    constructor(e) {
	        super(e, De$1);
	    }
	    appendDefines(e, n) {
	        super.appendDefines(e, n);
	        const t = this.uniforms;
	        t.extrusionOpacity && (e.HAS_EXTRUSION_OPACITY = 1), n.data[n.desc.colorAttribute] && (e.HAS_COLOR = 1);
	        return n.data[n.desc.color0Attribute] && (e.HAS_COLOR0 = 1, e.COLOR0_SIZE = n.getColor0Size()), 
	        n.data[n.desc.uv0Attribute] ? (t.baseColorTexture && (e.HAS_BASECOLOR_MAP = 1), 
	        t.occlusionTexture && n.data[n.desc.uv1Attribute] && (e.HAS_AO_MAP = 1), t.emissiveTexture && (e.HAS_EMISSIVE_MAP = 1), 
	        t.normalTexture && (e.HAS_NORMAL_MAP = 1), (e.HAS_BASECOLOR_MAP || e.HAS_AO_MAP || e.HAS_EMISSIVE_MAP || e.HAS_NORMAL_MAP) && (e.HAS_MAP = 1), 
	        e.ALPHATEST = .01, e.GAMMA_INPUT = 1, e.GAMMA_FACTOR = 1, e.TONEMAP_OUTPUT = 1, 
	        e.ENVMAP_MODE_REFLECTION = 1, e.ENV_RGBM = 1, e.IRR_RGBM = 1, e) : e;
	    }
	}

	const Fe$1 = {
	    diffuseFactor: [ 1, 1, 1, 1 ],
	    specularFactor: [ 1, 1, 1 ],
	    glossinessFactor: 1,
	    diffuseTexture: null,
	    specularGlossinessTexture: null,
	    normalTexture: null,
	    emissiveTexture: null,
	    occlusionTexture: null
	}, He$1 = e => class extends e {
	    constructor(e) {
	        super(e = v({}, Fe$1, e || {}));
	    }
	    appendDefines(e, n) {
	        if (super.appendDefines(e, n), e.SHADING_MODEL_SPECULAR_GLOSSINESS = 1, !n.data[n.desc.uv0Attribute]) return e;
	        const t = this.uniforms;
	        return t.diffuseTexture && (e.HAS_DIFFUSE_MAP = 1), t.specularGlossinessTexture && (e.HAS_SPECULARGLOSSINESS_MAP = 1), 
	        (e.HAS_SPECULARGLOSSINESS_MAP || e.HAS_DIFFUSE_MAP) && (e.HAS_MAP = 1), e;
	    }
	};

	class Le$1 extends(He$1(Ie$1)){}

	const ze$1 = [];

	let Be$1 = 0;

	class ke$1 {
	    constructor(e, t, r = {}) {
	        this._version = 0, this._geometry = e, this._material = t, this.transparent = !!r.transparent, 
	        this.bloom = !!r.bloom, this.ssr = !!r.ssr, this.castShadow = d(r.castShadow) || r.castShadow, 
	        this.picking = !!r.picking, this.disableVAO = !!r.disableVAO, this.uniforms = {}, 
	        this._localTransform = identity$2(new Array(16)), this._positionMatrix = identity$2(new Array(16)), 
	        this.properties = {}, this._dirtyUniforms = !0, this._dirtyGeometry = !0, Object.defineProperty(this, "uuid", {
	            value: Be$1++
	        }), Be$1 > Number.MAX_VALUE - 10 && (Be$1 = 0);
	    }
	    set material(e) {
	        this._material !== e && this.setMaterial(e);
	    }
	    get material() {
	        return this._material;
	    }
	    set version(e) {
	        throw new Error("Mesh.version is read only.");
	    }
	    get version() {
	        return this._version;
	    }
	    get geometry() {
	        return this._geometry;
	    }
	    set geometry(e) {
	        this._geometry !== e && (this._incrVersion(), this._dirtyGeometry = !0), this._geometry = e;
	    }
	    set localTransform(e) {
	        this._prevTMat || (this._prevTMat = []), Array.isArray(e) && !exactEquals$5(this._prevTMat, e) && (this._incrVersion(), 
	        this._prevTMat = copy$5(this._prevTMat, e)), this._localTransform = e;
	    }
	    get localTransform() {
	        return this._localTransform;
	    }
	    set positionMatrix(e) {
	        this._prevPMat || (this._prevPMat = []), Array.isArray(e) && !exactEquals$5(this._prevPMat, e) && (this._incrVersion(), 
	        this._prevPMat = copy$5(this._prevPMat, e)), this._positionMatrix = e;
	    }
	    get positionMatrix() {
	        return this._positionMatrix;
	    }
	    get config() {
	        return this._cfg || (this._cfg = {}), this._cfg.transparent = this.transparent, 
	        this._cfg.castShadow = this.castShadow, this._cfg.bloom = this.bloom, this._cfg.ssr = this.ssr, 
	        this._cfg.picking = this.picking, this._cfg;
	    }
	    get defines() {
	        return this._getDefines();
	    }
	    set defines(e) {
	        this.setDefines(e);
	    }
	    setMaterial(e) {
	        return this._material = e, this._dirtyUniforms = !0, delete this._materialVer, this.dirtyDefines = !0, 
	        this;
	    }
	    setParent(e) {
	        return this.parent = e, this;
	    }
	    setLocalTransform(e) {
	        return this.localTransform = e, this;
	    }
	    setPositionMatrix(e) {
	        this.positionMatrix = e;
	    }
	    setUniform(e, n) {
	        return void 0 === this.uniforms[e] && (this._dirtyUniforms = !0), this.uniforms[e] = n, 
	        this;
	    }
	    getUniform(e) {
	        return this.uniforms[e];
	    }
	    getDefines() {
	        const e = {};
	        return v(e, this._getDefines()), this._material && this._geometry && this._material.appendDefines(e, this._geometry), 
	        e;
	    }
	    _getDefines() {
	        this._defines || (this._defines = {});
	        const e = this._geometry, n = e.data[e.desc.positionAttribute], t = e.data[e.desc.uv0Attribute], r = e.data[e.desc.normalAttribute];
	        return n && n.quantization && (this._defines.HAS_DRACO_POSITION = 1), t && t.quantization && (this._defines.HAS_DRACO_TEXCOORD = 1), 
	        r && r.quantization && (this._defines.HAS_DRACO_NORMAL = 1), this._defines;
	    }
	    setDefines(e) {
	        const n = this._bakDefines;
	        return this._defines = e, this.dirtyDefines = this.dirtyDefines || !!n != !!e || !function(e, n) {
	            if (!e && !n) return !0;
	            const t = Object.getOwnPropertyNames(e), r = Object.getOwnPropertyNames(n);
	            if (t.length !== r.length) return !1;
	            for (let r = 0; r < t.length; r++) if (e[t[r]] !== n[t[r]]) return !1;
	            return !0;
	        }(n, e), this.dirtyDefines && (this._bakDefines = v({}, e)), this;
	    }
	    hasSkinAnimation() {
	        return this._material && this._material.hasSkinAnimation();
	    }
	    _getDefinesKey() {
	        return this.dirtyDefines = !1, this._createDefinesKey(this.getDefines());
	    }
	    getCommandKey() {
	        if (!this._commandKey || this.dirtyDefines || this._material && this._materialKeys !== this._material.getUniformKeys()) {
	            let e = this._getDefinesKey();
	            e += "_" + (g(this.getElements()) ? "count" : "elements"), e += "_" + +!!this.disableVAO, 
	            this._material && (e += "_" + +!!this._material.doubleSided), this._commandKey = e, 
	            this._material && (this._materialKeys = this._material.getUniformKeys());
	        }
	        return this._commandKey;
	    }
	    getUniforms(e) {
	        if (this._dirtyUniforms || this._dirtyGeometry || this._material && this._materialVer !== this._material.version) {
	            if (this._realUniforms = {}, this._getUniformsForDraco(), this._material) {
	                const n = this._material.getUniforms(e);
	                for (const e in n) S$1(n, e) && Object.defineProperty(this._realUniforms, e, {
	                    enumerable: !0,
	                    configurable: !0,
	                    get: function() {
	                        return n[e];
	                    }
	                });
	            }
	            const n = this.uniforms;
	            for (const e in this.uniforms) S$1(this.uniforms, e) && Object.defineProperty(this._realUniforms, e, {
	                enumerable: !0,
	                configurable: !0,
	                get: function() {
	                    return n[e];
	                }
	            });
	            this._dirtyUniforms = !1, this._dirtyGeometry = !1, this._materialVer = this._material && this._material.version;
	        }
	        return this._realUniforms.modelMatrix = h$1(this._localTransform) ? this._localTransform() : this._localTransform, 
	        this._realUniforms.positionMatrix = h$1(this._positionMatrix) ? this._positionMatrix() : this._positionMatrix, 
	        this._realUniforms;
	    }
	    _getUniformsForDraco() {
	        const e = this._geometry, n = e.data[e.desc.positionAttribute], t = e.data[e.desc.uv0Attribute], r = e.data[e.desc.normalAttribute];
	        if (n && n.quantization) {
	            const e = n.quantization, t = e.range / (1 << e.quantizationBits);
	            this._defineUniformsProperty(this._realUniforms, "minValues_pos", e.minValues), 
	            this._defineUniformsProperty(this._realUniforms, "gltf_u_dec_position_normConstant", t);
	        }
	        if (t && t.quantization) {
	            const e = t.quantization;
	            this._defineUniformsProperty(this._realUniforms, "minValues_tex", e.minValues);
	            this._defineUniformsProperty(this._realUniforms, "gltf_u_dec_texcoord_0_normConstant", e.range / (1 << e.quantizationBits));
	        }
	        if (r && r.quantization) {
	            this._defineUniformsProperty(this._realUniforms, "gltf_u_dec_normal_rangeConstant", (1 << r.quantization.quantizationBits) - 1);
	        }
	    }
	    _defineUniformsProperty(e, n, t) {
	        u$1(e[n]) || Object.defineProperty(e, n, {
	            enumerable: !0,
	            configurable: !0,
	            get: function() {
	                return t;
	            }
	        });
	    }
	    getMaterial() {
	        return this._material;
	    }
	    getElements() {
	        return this._geometry.getElements();
	    }
	    _getREGLAttrData(e, n) {
	        return this._geometry.getREGLData(e, n, this.disableVAO);
	    }
	    getREGLProps(e, n) {
	        const t = this.getUniforms(e);
	        return v(t, this._getREGLAttrData(e, n)), A$1(e) && !this.disableVAO || (t.elements = this._geometry.getElements()), 
	        t.meshProperties = this.properties, t.meshConfig = this.config, t.count = this._geometry.getDrawCount(), 
	        t.offset = this._geometry.getDrawOffset(), t.primitive = this._geometry.getPrimitive(), 
	        t;
	    }
	    dispose() {
	        const e = this.properties.oldElementsBeforeHighlight;
	        return e && !e[H$1] && e !== this._geometry.elements && e.destroy && (e.destroy(), 
	        e[H$1] = !0), delete this.properties.oldElementsBeforeHighlight, delete this.properties.hasInvisible, 
	        delete this._geometry, delete this._material, this.uniforms = {}, this;
	    }
	    isValid() {
	        return this._geometry && !this._geometry.isDisposed() && (!this._material || !this._material.isDisposed());
	    }
	    getBoundingBox() {
	        return this._bbox || this.updateBoundingBox(), multiply$5(ze$1, this._localTransform, this._positionMatrix), 
	        exactEquals$5(ze$1, this._currentTransform) && this._geometry.boundingBox.equals(this._geoBox) || this.updateBoundingBox(), 
	        this._bboxArr;
	    }
	    updateBoundingBox() {
	        const e = this._geometry.boundingBox;
	        this._bbox || (this._bbox = new X$1), this._bboxArr || (this._bboxArr = [ [], [] ]), 
	        this._geoBox || (this._geoBox = new X$1), X$1.copy(this._bbox, e), this._bbox.updateVertex(), 
	        "InstancedMesh" === this.constructor.name ? (this._bbox.transform(this._localTransform, this._positionMatrix), 
	        this._currentTransform = multiply$5(this._currentTransform || [], this._positionMatrix, this._localTransform)) : (this._bbox.transform(this._positionMatrix, this._localTransform), 
	        this._currentTransform = multiply$5(this._currentTransform || [], this._localTransform, this._positionMatrix)), 
	        X$1.copy(this._geoBox, e), copy$4(this._bboxArr[0], this._bbox.min), copy$4(this._bboxArr[1], this._bbox.max);
	    }
	    _createDefinesKey(e) {
	        const n = [];
	        for (const t in e) n.push(t, e[t]);
	        return n.join(",");
	    }
	    _incrVersion() {
	        this._version++;
	    }
	    getMemorySize() {
	        return (this.geometry && this.geometry.getMemorySize() || 0) + (this.material && this.material.getMemorySize() || 0);
	    }
	}

	ke$1.prototype.getWorldTransform = function() {
	    const e = [];
	    return function() {
	        const t = this.parent;
	        return t ? multiply$5(e, t.getWorldTransform(), this._localTransform) : this._localTransform;
	    };
	}();

	class Ge$1 extends ke$1 {
	    constructor(e, n, t, r, i = {}) {
	        super(t, r, i), this._instanceCount = n, this.instancedData = e || {}, this._checkInstancedProp(), 
	        this._vao = {};
	    }
	    get instanceCount() {
	        return this._instanceCount;
	    }
	    set instanceCount(e) {
	        this._incrVersion(), this._instanceCount = e;
	    }
	    getMemorySize() {
	        return super.getMemorySize() + this._getInstanceMemorySize();
	    }
	    _getInstanceMemorySize() {
	        let e = 0;
	        for (const n in this.instancedData) S$1(this.instancedData, n) && (e += T$1(this.instancedData[n]));
	        return e;
	    }
	    _checkInstancedProp() {
	        for (const e in this.instancedData) if (this.geometry.data[e]) throw new Error(`Duplicate attribute ${e} defined in geometry and instanced data`);
	    }
	    _getREGLAttrData(e, n) {
	        const t = this.geometry.getAttrData(n);
	        if (A$1(e)) {
	            const r = n.key;
	            if (!this._vao[r] || this._vao[r].dirty) {
	                const i = n.map(e => e.name), o = [];
	                for (let e = 0; e < i.length; e++) {
	                    const n = t[i[e]];
	                    o.push(n && n.buffer || this.instancedData[i[e]]);
	                }
	                const a = {
	                    attributes: o,
	                    primitive: this.geometry.getPrimitive()
	                };
	                this._vao[r] ? this._vao[r].vao(a) : this._vao[r] = {
	                    vao: e.vao(a)
	                }, delete this._vao[r].dirty;
	            }
	            return this._vao[r];
	        }
	        return t;
	    }
	    getDefines() {
	        const e = super.getDefines();
	        return e.HAS_INSTANCE = 1, e;
	    }
	    getCommandKey(e) {
	        return "i_" + super.getCommandKey(e);
	    }
	    updateInstancedData(e, n) {
	        const t = this.instancedData[e];
	        if (!t) return this;
	        if (this._incrVersion(), this.instancedData[e] = n, t.buffer && t.buffer.destroy && t.buffer.destroy(), 
	        this._vao) for (const e in this._vao) this._vao[e].dirty = !0;
	        return this;
	    }
	    generateInstancedBuffers(e) {
	        const n = this.instancedData, t = {};
	        for (const r in n) n[r] && (void 0 !== n[r].buffer && n[r].buffer.destroy ? (t[r] = n[r], 
	        t[r].divisor && (t[r].divisor = 1)) : t[r] = n[r].destroy ? {
	            buffer: n[r],
	            divisor: 1
	        } : {
	            buffer: e.buffer({
	                data: n[r],
	                dimension: n[r].length / this._instanceCount
	            }),
	            divisor: 1
	        });
	        return this.instancedData = t, this;
	    }
	    getREGLProps(e, n) {
	        const t = super.getREGLProps(e, n);
	        return A$1(e) || v(t, this.instancedData), t.elements = this.geometry.getElements(), 
	        t.instances = this._instanceCount, t;
	    }
	    disposeInstanceData() {
	        const e = this.instancedData;
	        if (e) for (const n in e) e[n] && e[n].destroy && !e[n][H$1] && (e[n][H$1] = 1, e[n].destroy());
	        this.instancedData = {};
	        for (const e in this._vao) this._vao[e].vao.destroy();
	        this._vao = {};
	    }
	    _getBytesPerElement(e) {
	        switch (e) {
	          case 5120:
	          case 5121:
	            return 1;

	          case 5122:
	          case 5123:
	            return 2;

	          case 5124:
	          case 5125:
	          case 5126:
	            return 4;
	        }
	        throw new Error("unsupported data type: " + e);
	    }
	}

	const Ue$1 = {
	    getArrayBuffer: (e, n) => Ue$1.get(e, {
	        responseType: "arraybuffer"
	    }, n),
	    get: function(e, n, t) {
	        const r = Ue$1._getClient(t);
	        if (r.open("GET", e, !0), n) {
	            for (const e in n.headers) r.setRequestHeader(e, n.headers[e]);
	            r.withCredentials = "include" === n.credentials, n.responseType && (r.responseType = n.responseType);
	        }
	        return r.send(null), r;
	    },
	    _wrapCallback: function(e, n) {
	        return function() {
	            if (4 === e.readyState) if (200 === e.status) if ("arraybuffer" === e.responseType) {
	                0 === e.response.byteLength ? n(new Error("http status 200 returned without content.")) : n(null, {
	                    data: e.response,
	                    cacheControl: e.getResponseHeader("Cache-Control"),
	                    expires: e.getResponseHeader("Expires"),
	                    contentType: e.getResponseHeader("Content-Type")
	                });
	            } else n(null, e.responseText); else n(new Error(e.statusText + "," + e.status));
	        };
	    },
	    _getClient: function(e) {
	        let n;
	        try {
	            n = new XMLHttpRequest;
	        } catch (e) {
	            try {
	                n = new ActiveXObject("Msxml2.XMLHTTP");
	            } catch (e) {
	                try {
	                    n = new ActiveXObject("Microsoft.XMLHTTP");
	                } catch (e) {}
	            }
	        }
	        return n.onreadystatechange = Ue$1._wrapCallback(n, e), n;
	    }
	};

	var Ve$1 = F$1(class {
	    constructor(e) {
	        this.defaultTexture = e, this.defaultCubeTexture = new Array(6), this.resources = {};
	    }
	    get(e) {
	        return Array.isArray(e) ? this._loadImages(e) : this._loadImage(e);
	    }
	    getArrayBuffer(e) {
	        if (Array.isArray(e)) {
	            const n = e.map(e => this.getArrayBuffer(e));
	            return Promise.all(n);
	        }
	        return new Promise((n, t) => {
	            Ue$1.getArrayBuffer(e, (r, i) => {
	                r ? t(r) : n({
	                    url: e,
	                    data: i
	                });
	            });
	        });
	    }
	    disposeRes(e) {
	        return Array.isArray(e) ? e.forEach(e => this._disposeOne(e)) : this._disposeOne(e), 
	        this;
	    }
	    isLoading() {
	        return this._count && this._count > 0;
	    }
	    getDefaultTexture(e) {
	        return Array.isArray(e) ? this._getBlankTextures(e.length) : this.defaultTexture;
	    }
	    _disposeOne(e) {
	        const n = this.resources;
	        n[e] && (n[e].count--, n[e].count <= 0 && delete n[e]);
	    }
	    _loadImage(e) {
	        const n = this.resources;
	        if (n[e]) return Promise.resolve({
	            url: e,
	            data: n[e].image
	        });
	        return new Promise((t, r) => {
	            const i = new Image;
	            i.crossOrigin = "anonymous", i.onload = function() {
	                n[e] = {
	                    image: i,
	                    count: 1
	                }, t({
	                    url: e,
	                    data: i
	                });
	            }, i.onerror = function(e) {
	                r(e);
	            }, i.onabort = function() {
	                r(`image(${e}) loading aborted.`);
	            }, i.src = e;
	        });
	    }
	    _loadImages(e) {
	        const n = e.map(e => this._loadImage(e, !0));
	        return Promise.all(n);
	    }
	    _getBlankTextures(e) {
	        const n = new Array(e);
	        for (let e = 0; e < 6; e++) n.push(this.defaultTexture);
	        return n;
	    }
	});

	const je$1 = [], Xe$1 = [];

	let We$1 = 0;

	class Ke$1 {
	    constructor(e) {
	        this._id = We$1++, this.sortedMeshes = {}, this.setMeshes(e), this._compareBinded = this._compare.bind(this), 
	        this.dirty();
	    }
	    setMeshes(e) {
	        if (this.clear(), !e || Array.isArray(e) && !e.length || e === this.meshes) return this;
	        e = Array.isArray(e) ? e : [ e ], this.meshes = [];
	        for (let n = 0; n < e.length; n++) {
	            const t = e[n];
	            t && (t._scenes = t._scenes || {}, t._scenes[this._id] = 1, this.meshes.push(t));
	        }
	        return this.dirty(), this;
	    }
	    addMesh(e) {
	        return !e || Array.isArray(e) && !e.length || (Array.isArray(e) ? e.forEach(e => {
	            e._scenes = e._scenes || {}, e._scenes[this._id] || (e._scenes[this._id] = 1, this.meshes.push(e), 
	            this.dirty());
	        }) : (e._scenes = e._scenes || {}, e._scenes[this._id] || (e._scenes[this._id] = 1, 
	        this.meshes.push(e), this.dirty()))), this;
	    }
	    removeMesh(e) {
	        if (!e || Array.isArray(e) && !e.length) return this;
	        if (Array.isArray(e)) {
	            let n = !1;
	            for (let t = 0; t < e.length; t++) e[t]._scenes && e[t]._scenes[this._id] && (n = !0, 
	            this.dirty(), delete e[t]._scenes[this._id]);
	            n && (this.meshes = this.meshes.filter(n => e.indexOf(n) < 0));
	        } else {
	            if (!e._scenes || !e._scenes[this._id]) return this;
	            const n = this.meshes.indexOf(e);
	            n >= 0 && this.meshes.splice(n, 1), delete e._scenes[this._id], this.dirty();
	        }
	        return this;
	    }
	    getMeshes() {
	        return this.meshes || [];
	    }
	    clear() {
	        if (this.meshes) for (let e = 0; e < this.meshes.length; e++) delete this.meshes[e]._scenes[this._id];
	        return this.meshes = [], this.sortedMeshes.opaques = [], this.sortedMeshes.transparents = [], 
	        this;
	    }
	    dirty() {
	        return this._dirty = !0, this;
	    }
	    sortMeshes(e) {
	        const n = this.meshes;
	        this.sortFunction && n.sort(this.sortFunction);
	        let t = this.sortedMeshes.transparents;
	        if (this._dirty) {
	            const e = this.sortedMeshes.opaques = [];
	            t = this.sortedMeshes.transparents = [];
	            for (let r = 0, i = n.length; r < i; r++) n[r].transparent ? t.push(n[r]) : e.push(n[r]);
	        }
	        e && t.length > 1 && (this._cameraPosition = e, t.sort(this._compareBinded), delete this._cameraPosition), 
	        this._dirty = !1;
	    }
	    getSortedMeshes() {
	        return this._dirty && this.sortMeshes(), this.sortedMeshes || [];
	    }
	    _compare(e, n) {
	        return transformMat4$2(je$1, e.geometry.boundingBox.getCenter(), e.localTransform), 
	        transformMat4$2(Xe$1, n.geometry.boundingBox.getCenter(), n.localTransform), dist$2(Xe$1, this._cameraPosition) - dist$2(je$1, this._cameraPosition);
	    }
	}

	const qe$1 = String.fromCharCode;

	function Ye$1(e, n, t, r) {
	    if (e[3] > 0) {
	        const i = Math.pow(2, e[3] - 128 - 8 + r);
	        n[t + 0] = e[0] * i, n[t + 1] = e[1] * i, n[t + 2] = e[2] * i;
	    } else n[t + 0] = 0, n[t + 1] = 0, n[t + 2] = 0;
	    return n[t + 3] = 1, n;
	}

	function Je$1(e, n, t) {
	    const r = e[n] / t, i = e[n + 1] / t, o = e[n + 2] / t;
	    let a = y$1(Math.max(Math.max(r, i), Math.max(o, 1e-6)), 0, 1);
	    a = Math.ceil(255 * a) / 255, e[n] = Math.min(255, r / a * 255), e[n + 1] = Math.min(255, i / a * 255), 
	    e[n + 2] = Math.min(255, o / a * 255), e[n + 3] = Math.min(255, 255 * a);
	}

	function Ze$1(e, n, t, r) {
	    let i = 0, o = 0, a = r;
	    for (;a > 0; ) if (e[o][0] = n[t++], e[o][1] = n[t++], e[o][2] = n[t++], e[o][3] = n[t++], 
	    1 === e[o][0] && 1 === e[o][1] && 1 === e[o][2]) {
	        for (let n = e[o][3] << i >>> 0; n > 0; n--) (c = e[o])[0] = (s = e[o - 1])[0], 
	        c[1] = s[1], c[2] = s[2], c[3] = s[3], o++, a--;
	        i += 8;
	    } else o++, a--, i = 0;
	    var s, c;
	    return t;
	}

	function Qe$1(e, n, t, r) {
	    if (r < 8 | r > 32767) return Ze$1(e, n, t, r);
	    let i = n[t++];
	    if (2 !== i) return Ze$1(e, n, t - 1, r);
	    if (e[0][1] = n[t++], e[0][2] = n[t++], i = n[t++], (e[0][2] << 8 >>> 0 | i) >>> 0 !== r) return null;
	    for (let i = 0; i < 4; i++) for (let o = 0; o < r; ) {
	        let r = n[t++];
	        if (r > 128) {
	            r = (127 & r) >>> 0;
	            const a = n[t++];
	            for (;r--; ) e[o++][i] = a;
	        } else for (;r--; ) e[o++][i] = n[t++];
	    }
	    return t;
	}

	function $e$1(e, n = 0, t = 9) {
	    const r = new Uint8Array(e), i = r.length;
	    if ("#?" !== function(e, n, t) {
	        let r = "";
	        for (let i = n; i < t; i++) r += qe$1(e[i]);
	        return r;
	    }(r, 0, 2)) return null;
	    for (var o = 2; o < i && ("\n" !== qe$1(r[o]) || "\n" !== qe$1(r[o + 1])); o++) ;
	    if (o >= i) return null;
	    o += 2;
	    let a = "";
	    for (;o < i; o++) {
	        const e = qe$1(r[o]);
	        if ("\n" === e) break;
	        a += e;
	    }
	    const s = a.split(" "), c = parseInt(s[1]), l = parseInt(s[3]);
	    if (!l || !c) return null;
	    let f = o + 1;
	    const d = [];
	    for (let e = 0; e < l; e++) {
	        d[e] = [];
	        for (let n = 0; n < 4; n++) d[e][n] = 0;
	    }
	    let u = 0;
	    const h = new Array(l * c * 4);
	    let m = 0;
	    for (let e = 0; e < c; e++) {
	        if (f = Qe$1(d, r, f, l), !f) return null;
	        for (let e = 0; e < l; e++) Ye$1(d[e], h, m, n), u = Math.max(u, h[m], h[m + 1], h[m + 2], h[m + 3]), 
	        m += 4;
	    }
	    u = Math.min(u, t), m = 0;
	    for (let e = 0; e < c; e++) for (let e = 0; e < l; e++) Je$1(h, m, u), m += 4;
	    return {
	        width: l,
	        height: c,
	        pixels: h,
	        rgbmRange: u
	    };
	}

	class en extends z$1 {
	    onLoad({data: e}) {
	        const n = this.config;
	        if (n) {
	            if (n.hdr) {
	                if (!(e = $e$1(e.data, 0, n.maxRange))) throw new Error("Invalid hdr data" + (n.url ? ":" + n.url : ""));
	                this.rgbmRange = e.rgbmRange, n.data = e.pixels;
	            } else n.data = e;
	            n.width = n.width || e.width, n.height = n.height || e.height, this._updateREGL();
	        }
	    }
	    createREGLTexture(e) {
	        if (b$1(this.config.data) || b$1(this.config.mipmap)) {
	            const n = ve$1(e, this.config);
	            return n._reshader_refCount || (n._reshader_refCount = 0), n._reshader_refCount++, 
	            n;
	        }
	        return e.texture(this.config);
	    }
	}

	class nn extends z$1 {
	    onLoad(e) {
	        const n = this.config;
	        if (!n) return;
	        const t = this._createFaces(e);
	        n.faces = t.map(e => e.data), this._updateREGL();
	    }
	    createREGLTexture(e) {
	        return e.cube(this.config);
	    }
	    _createFaces() {
	        return [];
	    }
	}

	class tn extends Q$1 {
	    constructor(e) {
	        super({
	            aPosition: new (p(e = e || 0))([ -1, -1, e, 1, -1, e, -1, 1, e, 1, 1, e ]),
	            aNormal: new Int8Array([ 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1 ])
	        }, new Uint16Array([ 0, 1, 3, 3, 2, 0 ]));
	    }
	}

	const rn = {
	    vsm_shadow_vert: "\nuniform mat4 shadow_lightProjViewModelMatrix;\nvarying vec4 shadow_vLightSpacePos;\nvoid shadow_computeShadowPars(vec4 position) {\n    shadow_vLightSpacePos = shadow_lightProjViewModelMatrix * position;\n}",
	    vsm_shadow_frag: "\nuniform sampler2D shadow_shadowMap;\nuniform float shadow_opacity;\nuniform vec3 shadow_color;\n#if defined(USE_ESM)\n    uniform float esm_shadow_threshold;\n#endif\nvarying vec4 shadow_vLightSpacePos;\n#ifdef PACK_FLOAT\n    #include <common_pack_float>\n#endif\n#if defined(USE_ESM)\nfloat esm(vec3 projCoords, vec4 shadowTexel) {\n    float compare = projCoords.z;\n    float c = 120.0;\n    #ifdef PACK_FLOAT\n        float depth = common_decodeDepth(shadowTexel);\n        if (depth >= 1.0 - 1E-6 || compare <= depth) {\n            return 1.0;\n        }\n    #else\n        float depth = shadowTexel.r;\n    #endif\n    depth = exp(-c * min(compare - depth, 0.05));\n    return clamp(depth, esm_shadow_threshold, 1.0);\n}\n#endif\n#if defined(USE_VSM)\nfloat vsm_shadow_chebyshevUpperBound(vec3 projCoords, vec4 shadowTexel){\n    vec2 moments = shadowTexel.rg;\n    float distance = projCoords.z;\n    if (distance >= 1.0 || distance <= moments.x)\n        return 1.0 ;\n    float variance = moments.y - (moments.x * moments.x);\n    variance = max(variance, 0.00002);\n    float d = distance - moments.x;\n    float p_max = variance / (variance + d * d);\n    return p_max;\n}\n#endif\nfloat shadow_computeShadow_coeff(sampler2D shadowMap, vec3 projCoords) {\n    vec2 uv = projCoords.xy;\n    vec4 shadowTexel = texture2D(shadowMap, uv);\n    #if defined(USE_ESM)\n        float esm_coeff = esm(projCoords, shadowTexel);\n        float coeff = esm_coeff * esm_coeff;\n    #endif\n    #if defined(USE_VSM)\n        float vsm_coeff = vsm_shadow_chebyshevUpperBound(projCoords, shadowTexel);\n        float coeff = vsm_coeff;\n    #endif\n    return 1.0 - (1.0 - coeff) * shadow_opacity;\n}\nfloat shadow_computeShadow() {\n    vec3 projCoords = shadow_vLightSpacePos.xyz / shadow_vLightSpacePos.w;\n    projCoords = projCoords * 0.5 + 0.5;\n    if(projCoords.z >= 1.0 || projCoords.x < 0.0 || projCoords.x > 1.0 || projCoords.y < 0.0 || projCoords.y > 1.0) return 1.0;\n    return shadow_computeShadow_coeff(shadow_shadowMap, projCoords);\n}\nvec3 shadow_blend(vec3 color, float coeff) {\n    color = color * coeff + shadow_color * shadow_opacity * (1.0 - coeff);\n    return color;\n}",
	    fbo_picking_vert: "\n#ifdef ENABLE_PICKING\n#if HAS_PICKING_ID == 1\nattribute float aPickingId;\n#elif HAS_PICKING_ID == 2\nuniform float uPickingId;\n#endif\nvarying float vPickingId;\nvarying float vFbo_picking_viewZ;\nvarying float vFbo_picking_visible;\n#endif\nvarying float vFbo_picking_fragDepth;\nvoid fbo_picking_setData(float viewPosZ, bool visible) {\n    #ifdef ENABLE_PICKING\n    #if HAS_PICKING_ID == 1\n       vPickingId = aPickingId;\n    #elif HAS_PICKING_ID == 2\n        vPickingId = uPickingId;\n    #endif\n        vFbo_picking_viewZ = viewPosZ;\n    #endif\n    vFbo_picking_visible = visible ? 1.0 : 0.0;\n    vFbo_picking_fragDepth = viewPosZ + 1.0;\n}",
	    common_pack_float: "const float COMMON_FLOAT_MAX =  1.70141184e38;\nconst float COMMON_FLOAT_MIN = 1.17549435e-38;\nfloat common_packFloat(vec4 val){\n    vec4 scl = floor(255.0 * val + 0.5);\n    float sgn = (scl.a < 128.0) ? 1.0 : -1.0;\n    float exn = mod(scl.a * 2.0, 256.0) + floor(scl.b / 128.0) - 127.0;\n    float man = 1.0 +\n        (scl.r / 8388608.0) +\n        (scl.g / 32768.0) +\n        mod(scl.b, 128.0) / 128.0;\n    return sgn * man * pow(2.0, exn);\n}\nvec4 common_unpackFloat(highp float v) {\n    highp float av = abs(v);\n    if(av < COMMON_FLOAT_MIN) {\n        return vec4(0.0, 0.0, 0.0, 0.0);\n    } else if(v > COMMON_FLOAT_MAX) {\n        return vec4(127.0, 128.0, 0.0, 0.0) / 255.0;\n    } else if(v < -COMMON_FLOAT_MAX) {\n        return vec4(255.0, 128.0, 0.0, 0.0) / 255.0;\n    }\n    highp vec4 c = vec4(0,0,0,0);\n    highp float e = floor(log2(av));\n    highp float m = av * pow(2.0, -e) - 1.0;\n    c[1] = floor(128.0 * m);\n    m -= c[1] / 128.0;\n    c[2] = floor(32768.0 * m);\n    m -= c[2] / 32768.0;\n    c[3] = floor(8388608.0 * m);\n    highp float ebias = e + 127.0;\n    c[0] = floor(ebias / 2.0);\n    ebias -= c[0] * 2.0;\n    c[1] += floor(ebias) * 128.0;\n    c[0] += 128.0 * step(0.0, -v);\n    return c / 255.0;\n}\nvec4 common_encodeDepth(const in float depth) {\n    float alpha = 1.0;\n    vec4 pack = vec4(0.0);\n    pack.a = alpha;\n    const vec3 code = vec3(1.0, 255.0, 65025.0);\n    pack.rgb = vec3(code * depth);\n    pack.gb = fract(pack.gb);\n    pack.rg -= pack.gb * (1.0 / 256.0);\n    pack.b -= mod(pack.b, 4.0 / 255.0);\n    return pack;\n}\nfloat common_decodeDepth(const in vec4 pack) {\n    return pack.r + pack.g / 255.0;\n}",
	    invert_matrix: "mat4 invert_matrix(mat4 matrix) {\n    #if __VERSION__ == 300\n        return inverse(matrix);\n    #else\n        vec4 vector1 = matrix[0], vector2 = matrix[1], vector3 = matrix[2], vector4 = matrix[3];\n        float a00 = vector1.x, a01 = vector1.y, a02 = vector1.z, a03 = vector1.w;\n        float a10 = vector2.x, a11 = vector2.y, a12 = vector2.z, a13 = vector2.w;\n        float a20 = vector3.x, a21 = vector3.y, a22 = vector3.z, a23 = vector3.w;\n        float a30 = vector4.x, a31 = vector4.y, a32 = vector4.z, a33 = vector4.w;\n        float b00 = a00 * a11 - a01 * a10;\n        float b01 = a00 * a12 - a02 * a10;\n        float b02 = a00 * a13 - a03 * a10;\n        float b03 = a01 * a12 - a02 * a11;\n        float b04 = a01 * a13 - a03 * a11;\n        float b05 = a02 * a13 - a03 * a12;\n        float b06 = a20 * a31 - a21 * a30;\n        float b07 = a20 * a32 - a22 * a30;\n        float b08 = a20 * a33 - a23 * a30;\n        float b09 = a21 * a32 - a22 * a31;\n        float b10 = a21 * a33 - a23 * a31;\n        float b11 = a22 * a33 - a23 * a32;\n        float det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;\n        det = 1.0 / det;\n        mat4 m = mat4(\n            (a11 * b11 - a12 * b10 + a13 * b09) * det,\n            (a02 * b10 - a01 * b11 - a03 * b09) * det,\n            (a31 * b05 - a32 * b04 + a33 * b03) * det,\n            (a22 * b04 - a21 * b05 - a23 * b03) * det,\n            (a12 * b08 - a10 * b11 - a13 * b07) * det,\n            (a00 * b11 - a02 * b08 + a03 * b07) * det,\n            (a32 * b02 - a30 * b05 - a33 * b01) * det,\n            (a20 * b05 - a22 * b02 + a23 * b01) * det,\n            (a10 * b10 - a11 * b08 + a13 * b06) * det,\n            (a01 * b08 - a00 * b10 - a03 * b06) * det,\n            (a30 * b04 - a31 * b02 + a33 * b00) * det,\n            (a21 * b02 - a20 * b04 - a23 * b00) * det,\n            (a11 * b07 - a10 * b09 - a12 * b06) * det,\n            (a00 * b09 - a01 * b07 + a02 * b06) * det,\n            (a31 * b01 - a30 * b03 - a32 * b00) * det,\n            (a20 * b03 - a21 * b01 + a22 * b00) * det\n        );\n        return m;\n    #endif\n}\nmat4 transpose_matrix(mat4 matrix) {\n    #if __VERSION__ == 300\n        return transpose(matrix);\n    #else\n        vec4 vector1 = matrix[0], vector2 = matrix[1], vector3 = matrix[2], vector4 = matrix[3];\n        float a01 = vector1.y, a02 = vector1.z, a03 = vector1.w;\n        float a12 = vector2.z, a13 = vector2.w;\n        float a23 = vector3.w;\n        mat4 m = mat4(\n            vector1.x,\n            vector2.x,\n            vector3.x,\n            vector4.x,\n            a01,\n            vector2.y,\n            vector3.y,\n            vector4.y,\n            a02,\n            a12,\n            vector3.z,\n            vector4.z,\n            a03,\n            a13,\n            a23,\n            vector4.w\n        );\n        return m;\n    #endif\n}",
	    get_output: "#include <invert_matrix>\n#include <draco_decode_vert>\n#ifdef HAS_INSTANCE\n    #include <instance_vert>\n    #ifdef HAS_INSTANCE_COLOR\n        varying vec4 vInstanceColor;\n    #endif\n#endif\n#ifdef HAS_SKIN\n    uniform int skinAnimation;\n    #include <skin_vert>\n#endif\n#include <mask_vert>\n#ifdef HAS_MORPH\n    attribute vec3 POSITION0;\n    attribute vec3 POSITION1;\n    attribute vec3 POSITION2;\n    attribute vec3 POSITION3;\n    attribute vec3 POSITION4;\n    attribute vec3 POSITION5;\n    attribute vec3 POSITION6;\n    attribute vec3 POSITION7;\n    #ifdef HAS_MORPHNORMALS\n        attribute vec3 NORMAL0;\n        attribute vec3 NORMAL1;\n        attribute vec3 NORMAL2;\n        attribute vec3 NORMAL3;\n    #endif\n    uniform vec4 morphWeights1;\n    uniform vec4 morphWeights2;\n#endif\n#ifdef HAS_TERRAIN_ALTITUDE\nattribute float aTerrainAltitude;\n#endif\nmat4 getPositionMatrix() {\n    mat4 worldMatrix;\n    #ifdef HAS_INSTANCE\n        #ifdef HAS_INSTANCE_COLOR\n            vInstanceColor = instance_getInstanceColor();\n        #endif\n        mat4 attributeMatrix = instance_getAttributeMatrix();\n        #ifdef HAS_SKIN\n            if (skinAnimation == 1) {\n                worldMatrix = attributeMatrix * positionMatrix * skin_getSkinMatrix();\n            } else {\n                worldMatrix = attributeMatrix * positionMatrix;\n            }\n        #else\n            worldMatrix = attributeMatrix * positionMatrix;\n        #endif\n    #else\n        #ifdef HAS_SKIN\n            if (skinAnimation == 1) {\n                worldMatrix = skin_getSkinMatrix() * positionMatrix;\n            } else {\n                worldMatrix = positionMatrix;\n            }\n        #else\n            worldMatrix = positionMatrix;\n        #endif\n    #endif\n    return worldMatrix;\n}\n#ifdef HAS_MIN_ALTITUDE\nuniform float minAltitude;\n#endif\nvec4 getPosition(vec3 aPosition) {\n    vec3 position = decode_getPosition(aPosition);\n    #ifdef HAS_MORPH\n        vec4 POSITION = vec4(position + morphWeights1[0] * POSITION0 + morphWeights1[1] * POSITION1 + morphWeights1[2] * POSITION2 + morphWeights1[3] * POSITION3\n        + morphWeights2[0] * POSITION4 + morphWeights2[1] * POSITION5 + morphWeights2[2] * POSITION6 + morphWeights2[3] * POSITION7\n        , 1.0);\n    #else\n        vec4 POSITION = vec4(position, 1.0);\n    #endif\n    #ifdef HAS_TERRAIN_ALTITUDE\n        POSITION.z += aTerrainAltitude * 100.0;\n    #endif\n    #ifdef HAS_MIN_ALTITUDE\n        POSITION.z += minAltitude * 100.0;\n    #endif\n    return POSITION;\n}\nvec3 appendMorphNormal(vec3 NORMAL) {\n    #ifdef HAS_MORPHNORMALS\n        vec3 normal = NORMAL + morphWeights1[0] * NORMAL0 + morphWeights1[1] * NORMAL1 + morphWeights1[2] * NORMAL2 + morphWeights1[3] * NORMAL3;\n    #else\n        vec3 normal = NORMAL;\n    #endif\n    return normal;\n}",
	    instance_vert: "attribute vec4 instance_vectorA;\nattribute vec4 instance_vectorB;\nattribute vec4 instance_vectorC;\n#ifdef HAS_INSTANCE_TERRAIN_ALTITUDE\nattribute float aTerrainAltitude;\nuniform float terrainAltitudeScale;\n#endif\nmat4 instance_getAttributeMatrix() {\n    mat4 mat =  mat4(\n        instance_vectorA.x, instance_vectorB.x, instance_vectorC.x, 0.0,\n        instance_vectorA.y, instance_vectorB.y, instance_vectorC.y, 0.0,\n        instance_vectorA.z, instance_vectorB.z, instance_vectorC.z, 0.0,\n        instance_vectorA.w, instance_vectorB.w, instance_vectorC.w, 1.0\n    );\n    #ifdef HAS_INSTANCE_TERRAIN_ALTITUDE\n        mat4 terrainMat = mat4(\n            1., 0., 0., 0.,\n            0., 1., 0., 0.,\n            0., 0., 1., 0.,\n            0., 0., aTerrainAltitude * terrainAltitudeScale, 1.\n        );\n        mat = terrainMat * mat;\n    #endif\n    return mat;\n}\n#ifdef HAS_INSTANCE_COLOR\n    attribute vec4 instance_color;\n    vec4 instance_getInstanceColor() {\n        return instance_color;\n    }\n#endif",
	    skin_vert: "attribute vec4 WEIGHTS_0;\nattribute vec4 JOINTS_0;\nuniform sampler2D jointTexture;\nuniform vec2 jointTextureSize;\nuniform float numJoints;\n#define ROW0_U ((0.5 + 0.0) / 4.)\n#define ROW1_U ((0.5 + 1.0) / 4.)\n#define ROW2_U ((0.5 + 2.0) / 4.)\n#define ROW3_U ((0.5 + 3.0) / 4.)\nmat4 skin_getBoneMatrix(float jointNdx) {\n    float v = (jointNdx + 0.5) / numJoints;\n    return mat4(\n        texture2D(jointTexture, vec2(ROW0_U, v)),\n        texture2D(jointTexture, vec2(ROW1_U, v)),\n        texture2D(jointTexture, vec2(ROW2_U, v)),\n        texture2D(jointTexture, vec2(ROW3_U, v)));\n}\nmat4 skin_getSkinMatrix() {\n        mat4 skinMatrix = skin_getBoneMatrix(JOINTS_0[0]) * WEIGHTS_0[0] +\n                        skin_getBoneMatrix(JOINTS_0[1]) * WEIGHTS_0[1] +\n                        skin_getBoneMatrix(JOINTS_0[2]) * WEIGHTS_0[2] +\n                        skin_getBoneMatrix(JOINTS_0[3]) * WEIGHTS_0[3];\n        return skinMatrix;\n}",
	    heatmap_render_vert: "#ifdef HAS_HEATMAP\nvarying vec2 heatmap_vTexCoord;\nvoid heatmap_compute(mat4 matrix, vec3 position) {\n    vec4 pos = matrix * vec4(position.xy, 0., 1.);\n    heatmap_vTexCoord = (1. + pos.xy / pos.w) / 2.;\n}\n#endif",
	    heatmap_render_frag: "#ifdef HAS_HEATMAP\nuniform sampler2D heatmap_inputTexture;\nuniform sampler2D heatmap_colorRamp;\nuniform float heatmap_heatmapOpacity;\nvarying vec2 heatmap_vTexCoord;\nvec4 heatmap_getColor(vec4 color) {\n    float t = texture2D(heatmap_inputTexture, heatmap_vTexCoord).r;\n    vec4 heatmapColor = texture2D(heatmap_colorRamp, vec2(t, 0.5)) * heatmap_heatmapOpacity;\n    return color * (1.0 - heatmapColor.a) + heatmapColor * heatmapColor.a;\n}\n#endif",
	    line_extrusion_vert: "#ifdef IS_LINE_EXTRUSION\n    #define ALTITUDE_SCALE 32767.0;\n    #define EXTRUDE_SCALE 63.0;\n    attribute vec2 aExtrude;\n    #ifdef HAS_LINE_WIDTH\n        attribute float aLineWidth;\n    #else\n        uniform float lineWidth;\n    #endif\n    #ifdef HAS_LINE_HEIGHT\n        attribute float aLineHeight;\n    #else\n        uniform float lineHeight;\n    #endif\n    uniform float linePixelScale;\n    vec3 getLineExtrudePosition(vec3 position) {\n        #ifdef HAS_LINE_WIDTH\n            float lineWidth = aLineWidth / 2.0;\n        #endif\n        #ifdef HAS_LINE_HEIGHT\n            float lineHeight = aLineHeight / 10.0;\n        #endif\n        float halfwidth = lineWidth / 2.0;\n        float outset = halfwidth;\n        vec2 dist = outset * aExtrude / EXTRUDE_SCALE;\n        position.z *= lineHeight / ALTITUDE_SCALE;\n        return position + vec3(dist, 0.0) * linePixelScale;\n    }\n#endif",
	    gl2_vert: "#if __VERSION__ == 300\n    #define texture2D texture\n    #define varying out\n    #define attribute in\n#endif",
	    gl2_frag: "#if __VERSION__ == 300\n    #define varying in\n    #define gl_FragDepthEXT gl_FragDepth\n    #define texture2D texture\n    #define textureCube texture\n    #define texture2DProj textureProj\n    #define texture2DLodEXT textureLod\n    #define texture2DProjLodEXT textureProjLod\n    #define textureCubeLodEXT textureLod\n    #define texture2DGradEXT textureGrad\n    #define texture2DProjGradEXT textureProjGrad\n    #define textureCubeGradEXT textureGrad\n    #define texture2D texture\n    out vec4 glFragColor;\n#else\n    vec4 glFragColor;\n#endif",
	    hsv_frag: "\nconst mediump vec4 HSV_K0 = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\nconst mediump vec4 HSV_K1 = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\nconst mediump float HSV_E = 1.0e-10;\nvec3 hsv_rgb2hsv(vec3 c) {\n    vec4 K = HSV_K0;\n    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));\n    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));\n    float d = q.x - min(q.w, q.y);\n    float e = HSV_E;\n    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);\n}\nvec3 hsv_hsv2rgb(vec3 c) {\n    vec4 K = HSV_K1;\n    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\n    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n}\nvec4 hsv_apply(vec4 c, vec3 hsvOffset) {\n    vec3 hsv = hsv_rgb2hsv(c.rgb);\n    hsv += hsv * hsvOffset;\n    hsv = clamp(hsv, 0.0, 1.0);\n    return vec4(hsv_hsv2rgb(hsv), c.a);\n}\nvec3 hsv_apply(vec3 c, vec3 hsvOffset) {\n    vec3 hsv = hsv_rgb2hsv(c.rgb);\n    hsv += hsv * hsvOffset;\n    hsv = clamp(hsv, 0.0, 1.0);\n    return hsv_hsv2rgb(hsv);\n}\nmat4 contrastMatrix(float contrast)\n{\n    float t = (1.0 - contrast) / 2.0;\n    return mat4(\n        contrast, 0., 0., 0.,\n        0., contrast, 0., 0.,\n        0., 0., contrast, 0.,\n        t, t, t, 1\n    );\n}",
	    snow_frag: "#ifdef HAS_SNOW\n    float lerp(float a, float b, float w) {\n        return a + w * (b - a);\n    }\n    vec3 snow(vec4 sceneColor, vec3 normalColor, float height) {\n        float snowIntense = normalColor.b;\n        vec3 fixedC = vec3(1.0, 1.0, 1.0);\n        if (height < 1.0) {\n            float r = lerp(0.5, fixedC.x, snowIntense);\n            float g = lerp(0.5, fixedC.y, snowIntense);\n            float b = lerp(0.5, fixedC.z, snowIntense);\n            return vec3(r, g, b);\n        } else {\n            float r = lerp(sceneColor.r, fixedC.x, snowIntense);\n            float g = lerp(sceneColor.g, fixedC.y, snowIntense);\n            float b = lerp(sceneColor.b, fixedC.z, snowIntense);\n            return vec3(r, g, b);\n        }\n    }\n#endif",
	    draco_decode_vert: "#if defined(HAS_TANGENT)\n    attribute vec4 aTangent;\n#elif defined(HAS_NORMAL)\n    #ifdef HAS_DRACO_NORMAL\n        attribute vec2 aNormal;\n        uniform float gltf_u_dec_normal_rangeConstant;\n    #else\n        attribute vec3 aNormal;\n    #endif\n#endif\n#ifdef HAS_DRACO_POSITION\n    uniform float gltf_u_dec_position_normConstant;\n    uniform vec3 minValues_pos;\n    vec3 decodeDracoPosition(vec3 aPosition) {\n        return minValues_pos + aPosition * gltf_u_dec_position_normConstant;\n    }\n#endif\n#ifdef HAS_DRACO_TEXCOORD\n    uniform vec2 minValues_tex;\n    uniform float gltf_u_dec_texcoord_0_normConstant;\n    vec2 decodeDracoTexcoord(vec2 aTexCoord) {\n        return minValues_tex + aTexCoord * gltf_u_dec_texcoord_0_normConstant;\n    }\n#endif\n#ifdef HAS_WEB3D_quantized_attributes_TEXCOORD\n    uniform mat3 decodeMatrix;\n#endif\n#ifdef HAS_DRACO_NORMAL\n    float czm_signNotZero(float value) {\n        return value >= 0.0 ? 1.0 : -1.0;\n    }\n    vec2 czm_signNotZero(vec2 value) {\n        return vec2(czm_signNotZero(value.x), czm_signNotZero(value.y));\n    }\n    vec3 decodeDracoNormal(vec2 encoded, float range)\n    {\n        if (encoded.x == 0.0 && encoded.y == 0.0) {\n            return vec3(0.0, 0.0, 0.0);\n        }\n        encoded = encoded / range * 2.0 - 1.0;\n        vec3 v = vec3(encoded.x, encoded.y, 1.0 - abs(encoded.x) - abs(encoded.y));\n        if (v.z < 0.0) {\n            v.xy = (1.0 - abs(v.yx)) * czm_signNotZero(v.xy);\n        }\n        return normalize(v);\n    }\n    vec3 decode_getNormal(vec2 aNormal) {\n        return decodeDracoNormal(aNormal, gltf_u_dec_normal_rangeConstant).zxy;\n    }\n#endif\n#ifdef HAS_COMPRESSED_INT16\n    #ifdef HAS_COMPRESSED_INT16_POSITION\n      uniform vec2 compressedPositionRange;\n    #endif\n    #ifdef HAS_COMPRESSED_INT16_TEXCOORD_0\n      uniform vec2 compressedTexcoordRange_0;\n    #endif\n    #ifdef HAS_COMPRESSED_INT16_TEXCOORD_1\n      uniform vec2 compressedTexcoordRange_1;\n    #endif\n    #ifdef HAS_COMPRESSED_INT16_NORMAL\n      uniform vec2 compressedNormalRange;\n    #endif\n    #ifdef HAS_COMPRESSED_INT16_RATIO\n      uniform float compressed_ratio;\n    #endif\n    float int16ToFloat32(float value, vec2 range) {\n        float v = (value >= 32768.0) ? -(65536.0 - value) / 32768.0 : value / 32767.0;\n        return (v + 1.0) * (range.y - range.x) / 2.0 + range.x;\n    }\n#endif\nvec3 decode_getPosition(vec3 aPosition) {\n    vec3 position = aPosition;\n    #if defined(HAS_COMPRESSED_INT16) && defined(HAS_COMPRESSED_INT16_POSITION)\n        float x = int16ToFloat32(aPosition.x, compressedPositionRange);\n        float y = int16ToFloat32(aPosition.y, compressedPositionRange);\n        float z = int16ToFloat32(aPosition.z, compressedPositionRange);\n        #ifdef HAS_COMPRESSED_INT16_RATIO\n          position = vec3(x / compressed_ratio, y / compressed_ratio, z);\n        #else\n          position = vec3(x, y, z);\n        #endif\n    #endif\n    #ifdef HAS_DRACO_POSITION\n        return decodeDracoPosition(position);\n    #else\n        return position;\n    #endif\n}\nvec2 decode_getTexcoord(vec2 aTexCoord) {\n    vec2 texcoord = aTexCoord;\n    #if defined(HAS_COMPRESSED_INT16) && (defined(HAS_COMPRESSED_INT16_TEXCOORD_0) || defined(HAS_COMPRESSED_INT16_TEXCOORD_1))\n        float x = int16ToFloat32(aTexCoord.x, compressedTexcoordRange_0);\n        float y = int16ToFloat32(aTexCoord.y, compressedTexcoordRange_0);\n        texcoord = vec2(x, y);\n    #endif\n    #ifdef HAS_DRACO_TEXCOORD\n        return decodeDracoTexcoord(texcoord);\n    #elif defined(HAS_WEB3D_quantized_attributes_TEXCOORD)\n        vec3 web3dTexcoord = decodeMatrix * vec3(texcoord, 1.0);\n        return vec2(web3dTexcoord.x, web3dTexcoord.y);\n    #else\n        return texcoord;\n    #endif\n}\nvec3 decode_getNormal(vec3 aNormal) {\n    #ifdef HAS_COMPRESSED_INT16_NORMAL\n        aNormal.x = int16ToFloat32(aNormal.x, compressedNormalRange);\n        aNormal.y = int16ToFloat32(aNormal.y, compressedNormalRange);\n        aNormal.z = int16ToFloat32(aNormal.z, compressedNormalRange);\n    #endif\n    return aNormal;\n}",
	    highlight_vert: "#if defined(HAS_HIGHLIGHT_COLOR)\n    attribute vec4 aHighlightColor;\n    varying vec4 vHighlightColor;\n#endif\n#if defined(HAS_HIGHLIGHT_OPACITY)\n    attribute float aHighlightOpacity;\n    varying float vHighlightOpacity;\n#endif\nvoid highlight_setVarying() {\n    #if defined(HAS_HIGHLIGHT_COLOR)\n        vHighlightColor = aHighlightColor / 255.0;\n    #endif\n    #if defined(HAS_HIGHLIGHT_OPACITY)\n        vHighlightOpacity = aHighlightOpacity / 255.0;\n    #endif\n}",
	    highlight_frag: "#if defined(HAS_HIGHLIGHT_COLOR)\n\tvarying vec4 vHighlightColor;\n#endif\n#if defined(HAS_HIGHLIGHT_OPACITY)\n    varying float vHighlightOpacity;\n#endif\nvec4 highlight_blendColor(vec4 color) {\n\tvec4 outColor;\n\t#if defined(HAS_HIGHLIGHT_COLOR)\n\t\tcolor.rgb = color.rgb * (1.0 - vHighlightColor.a) + vHighlightColor.rgb * vHighlightColor.a;\n\t\t#ifndef HAS_HIGHLIGHT_COLOR_POINT\n        \tcolor.a = color.a * (1.0 - vHighlightColor.a) + vHighlightColor.a;\n        #endif\n        outColor = color;\n\t#else\n\t\toutColor = color;\n\t#endif\n\t#if defined(HAS_HIGHLIGHT_OPACITY)\n\t\toutColor *= vHighlightOpacity;\n\t#endif\n\treturn outColor;\n}",
	    mask_vert: "#ifdef HAS_MASK_EXTENT\n    uniform vec4 mask_extent;\n    uniform sampler2D mask_colorExtent;\n    uniform sampler2D mask_modeExtent;\n    uniform float mask_maskMode;\n    uniform float mask_hasFlatOut;\n    uniform mat4 viewMatrix;\n    uniform float mask_heightRatio;\n    uniform float mask_heightOffset;\n    varying vec4 vWorldPosition;\n    varying vec2 vUVInExtent;\n    varying float vHeightRatio;\n    varying float vHeightOffset;\n    const float CLIPINSIDE_MODE = 0.2;\n    const float FLATINSIDE_MODE = 0.3;\n    const float FLATOUTSIDE_MODE = 0.4;\n    const float ELEVATE_MODE = 0.7;\n    float random (vec2 st) {\n        return fract(sin(dot(st.xy,vec2(12.9898,78.233)))*43758.5453123) * 0.1;\n    }\n    bool isInExtent(vec4 color) {\n        return length(color.rgb) > 0.0;\n    }\n    float getFlatHeight(float maskMode, float flatHeight, float height) {\n      if (maskMode <= ELEVATE_MODE && maskMode > 0.6) {\n          return flatHeight + height;\n      } else {\n        return flatHeight;\n      }\n    }\n    vec4 getNoErrorPosition(vec4 position, vec4 wPosition) {\n      vec4 realPos = modelViewMatrix * position;      vec4 pos = viewMatrix * wPosition;      vec4 tempPos = viewMatrix * modelMatrix * position;      float deltaX = realPos.x - tempPos.x;\n      float deltaY = realPos.y - tempPos.y;\n      float deltaZ = realPos.z - tempPos.z;\n      pos.x = pos.x + deltaX;\n      pos.y = pos.y + deltaY;\n      pos.z = pos.z + deltaZ;\n      return pos;\n    }\n    vec4 getMaskPosition(vec4 position, mat4 modelMatrix) {\n        vWorldPosition = modelMatrix * position;\n        float w = mask_extent.z - mask_extent.x;\n        float h = mask_extent.y - mask_extent.w;\n        vec2 uvInExtent = vec2((vWorldPosition.x - mask_extent.x) / abs(w), 1.0 - (vWorldPosition.y - mask_extent.w) / h);\n        vec4 extentColor = texture2D(mask_colorExtent, uvInExtent);\n        vec3 maskOptionColor = texture2D(mask_modeExtent, uvInExtent).rgb;\n        float maskMode = maskOptionColor.r;\n        float flatHeight = maskOptionColor.g / mask_heightRatio + mask_heightOffset;\n        float height = getFlatHeight(maskMode, flatHeight, vWorldPosition.z);\n        vec4 wPosition = vec4(vWorldPosition.x, vWorldPosition.y, height, vWorldPosition.w);\n        vUVInExtent = uvInExtent;\n        vHeightRatio = mask_heightRatio;\n        vHeightOffset = mask_heightOffset;\n        if (maskMode <= FLATOUTSIDE_MODE && maskMode > FLATINSIDE_MODE) {\n            return modelViewMatrix * position;;\n        } else if (mask_hasFlatOut == 1.0) {\n            return getNoErrorPosition(position, wPosition);\n        }\n        if (isInExtent(extentColor) == true && maskMode <= FLATINSIDE_MODE && maskMode > CLIPINSIDE_MODE) {\n            return getNoErrorPosition(position, wPosition);\n        } if (isInExtent(extentColor) == true && maskMode <= ELEVATE_MODE && maskMode > 0.6) {\n            return getNoErrorPosition(position, wPosition);\n        } else {\n            return modelViewMatrix * position;\n        }\n    }\n#endif",
	    mask_frag: "#ifdef HAS_MASK_EXTENT\n    uniform sampler2D mask_colorExtent;\n    uniform sampler2D mask_modeExtent;\n    uniform float mask_hasClipOut;\n    varying float vHeightRatio;\n    varying float vHeightOffset;\n    varying vec2 vUVInExtent;\n    varying vec4 vWorldPosition;\n    const float CLIPINSIDE_MODE = 0.1;\n    const float CLIPOUTSIDE_MODE = 0.2;\n    const float FLATINSIDE_MODE = 0.3;\n    const float FLATOUTSIDE_MODE = 0.4;\n    const float COLOR_MODE = 0.5;\n    const float VIDEO_MODE = 0.6;\n    bool isInExtent(vec4 color) {\n        return length(color.rgb) > 0.0;\n    }\n    vec4 setMask(vec4 glFragColor) {\n        vec4 extentColor = texture2D(mask_colorExtent, vUVInExtent);\n        vec4 modeColor = texture2D(mask_modeExtent, vUVInExtent);\n        float maskMode = modeColor.r;\n        float minHeight = modeColor.b / vHeightRatio + vHeightOffset;\n        float maxHeight = modeColor.a / vHeightRatio + vHeightOffset;\n        if (maskMode > CLIPINSIDE_MODE && maskMode <= CLIPOUTSIDE_MODE) {\n            if (minHeight == 0.0 && maxHeight == 0.0) {\n                return glFragColor;\n            } else if (vWorldPosition.z >= minHeight && vWorldPosition.z <= maxHeight) {\n                return glFragColor;\n            } else {\n              discard;\n            }\n        } else if (mask_hasClipOut == 1.0) {\n            discard;\n        }\n        if (isInExtent(extentColor) == true && maskMode <= CLIPINSIDE_MODE && maskMode > 0.0) {\n            if (minHeight == 0.0 && maxHeight == 0.0) {\n                discard;\n            } else if (vWorldPosition.z >= minHeight && vWorldPosition.z <= maxHeight) {\n                discard;\n            } else {\n              return glFragColor;\n            }\n        } else if (isInExtent(extentColor) == true && maskMode <= VIDEO_MODE && maskMode > FLATOUTSIDE_MODE) {\n            if (minHeight == 0.0 && maxHeight == 0.0) {\n                glFragColor = vec4(mix(extentColor.rgb, glFragColor.rgb, 1.0 - extentColor.a), glFragColor.a);\n            } else if (vWorldPosition.z >= minHeight && vWorldPosition.z <= maxHeight) {\n                glFragColor = vec4(mix(extentColor.rgb, glFragColor.rgb, 1.0 - extentColor.a), glFragColor.a);\n            }\n        }\n        return glFragColor;\n    }\n#endif",
	    computeTexcoord_frag: "#ifdef HAS_KHR_TEXTURE_TRANSFORM\n    uniform vec2 khr_offset;\n    uniform float khr_rotation;\n    uniform vec2 khr_scale;\n    vec2 khr_tex_transformTexCoord(vec2 texCoords, vec2 offset, float rotation, vec2 scale) {\n        rotation = -rotation;\n        mat3 transform = mat3(\n        cos(rotation) * scale.x, sin(rotation) * scale.x, 0.0, -sin(rotation) * scale.y, cos(rotation) * scale.y, 0.0, offset.x, offset.y, 1.0);\n        vec2 transformedTexCoords = (transform * vec3(fract(texCoords), 1.0)).xy;\n        return transformedTexCoords;\n    }\n#endif\nvarying highp vec2 vTexCoord;\n#ifdef HAS_I3S_UVREGION\n    varying vec4 vUvRegion;\n#endif\nvec2 computeTexCoord(vec2 texCoord) {\n    #ifdef HAS_I3S_UVREGION\n        vec2 atlasScale = vUvRegion.zw - vUvRegion.xy;\n        vec2 uvAtlas = fract(texCoord) * atlasScale + vUvRegion.xy;\n        return uvAtlas;\n    #elif defined(HAS_KHR_TEXTURE_TRANSFORM)\n        return khr_tex_transformTexCoord(texCoord, khr_offset, khr_rotation, khr_scale);\n    #else\n        return texCoord;\n    #endif\n}",
	    terrain_normal_frag: "#ifdef HAS_TERRAIN_NORMAL\n    uniform sampler2D terrainHeightTexture;\n    uniform vec2 terrainHeightMapResolution;\n    uniform vec2 terrainResolution;\n    uniform float terrainHeightScale;\n    uniform float terrainTileResolution;\n    uniform vec4 terrainUnpackFactors;\n    float getHeight(vec2 uv) {\n        vec4 color = texture2D(terrainHeightTexture, uv) * 255.0;\n        color.a = -1.0;\n        return dot(color, terrainUnpackFactors) / 4.0;\n    }\n    vec3 convertTerrainHeightToNormalMap(vec2 uv) {\n        uv.y = 1.0 - uv.y;\n        vec2 epsilon = 1.0 / terrainHeightMapResolution;\n        float a = getHeight(uv + vec2(-epsilon.x, -epsilon.y));\n        float b = getHeight(uv + vec2(0, -epsilon.y));\n        float c = getHeight(uv + vec2(epsilon.x, -epsilon.y));\n        float d = getHeight(uv + vec2(-epsilon.x, 0));\n        float e = getHeight(uv + vec2(epsilon.x, 0));\n        float f = getHeight(uv + vec2(-epsilon.x, epsilon.y));\n        float g = getHeight(uv + vec2(0, epsilon.y));\n        float h = getHeight(uv + vec2(epsilon.x, epsilon.y));\n        vec2 dxy = vec2(\n            (c + e + e + h) - (a + d + d + f),\n            (f + g + g + h) - (a + b + b + c)\n        );\n        return normalize(vec3(dxy / epsilon, terrainResolution ));\n    }\n#endif",
	    vertex_color_vert: "#ifdef HAS_VERTEX_COLOR\nattribute float aVertexColorType;\nuniform vec4 vertexColorsOfType[VERTEX_TYPES_COUNT];\nvarying vec4 vertexColor_color;\nvoid vertexColor_update() {\n    vertexColor_color = vertexColorsOfType[int(aVertexColorType)];\n}\n#endif",
	    vertex_color_frag: "#ifdef HAS_VERTEX_COLOR\nvarying vec4 vertexColor_color;\nvec4 vertexColor_get() {\n\treturn vertexColor_color;\n}\n#endif",
	    excavate_vert: "#ifdef HAS_EXCAVATE_ANALYSIS\n  uniform vec4 excavateExtent;\n  varying vec2 vCoordinateTexcoord;\n  varying float vHeight;\n  float getWorldHeight() {\n    vec4 wPosition = modelMatrix * getPosition(aPosition);\n    return wPosition.z;\n  }\n  vec2 getCoordinateTexcoord() {\n    mat4 localPositionMatrix = getPositionMatrix();\n    vec4 wPosition = modelMatrix * localPositionMatrix * getPosition(aPosition);\n    float x = (wPosition.x - excavateExtent.x) / (excavateExtent.z - excavateExtent.x);\n    float y = (wPosition.y - excavateExtent.y) / (excavateExtent.w - excavateExtent.y);\n    return vec2(x, y);\n  }\n#endif",
	    excavate_frag: "#ifdef HAS_EXCAVATE_ANALYSIS\n  uniform sampler2D heightmap;\n  uniform float excavateHeight;\n  varying vec2 vCoordinateTexcoord;\n  varying float vHeight;\n  const vec2 range = vec2(-100.0, 1000.0);\n  float decodeHeight(const in vec4 pack) {\n      return pack.r + pack.g / 255.0;\n  }\n  vec4 excavateColor(vec4 fragColor) {\n      float samplerHeight = decodeHeight(texture2D(heightmap, vCoordinateTexcoord));\n      float realHeight = samplerHeight * (range.y - range.x) + range.x;\n      if(realHeight < range.x || realHeight > range.y) {\n          realHeight = 0.0;\n      }\n      if(vHeight > realHeight) {\n          discard;\n      }\n      return fragColor;\n  }\n#endif"
	};

	var on = {
	    register(e, n) {
	        if (rn[e]) throw new Error(`Key of ${e} is already registered in ShaderLib.`);
	        rn[e] = n;
	    },
	    compile: e => sn(e)
	};

	const an = /^[ \t]*#include +<([\w\d.]+)>/gm;

	function sn(e) {
	    return e.replace(an, cn);
	}

	function cn(e, n) {
	    const t = rn[n];
	    if (!t) throw new Error("Can not resolve #include <" + n + ">");
	    return sn(t);
	}

	const ln = "function", fn = "array";

	let dn = 0;

	const un = {};

	class hn {
	    constructor({vert: e, frag: n, uniforms: t, defines: r, extraCommandProps: i}) {
	        this.vert = e, this.frag = n;
	        const o = dn++;
	        Object.defineProperty(this, "uid", {
	            enumerable: !0,
	            configurable: !1,
	            get: () => o
	        }), this.shaderDefines = r && v({}, r) || {}, t = this.uniforms = (t || []).slice(), 
	        this.contextDesc = {};
	        for (let e = 0, n = t.length; e < n; e++) {
	            const n = t[e];
	            if (f(n)) if (n.indexOf("[") > 0) {
	                const {name: e, len: t} = mn(n);
	                this.contextDesc[e] = {
	                    name: e,
	                    type: "array",
	                    length: t
	                };
	            } else this.contextDesc[n] = null; else if (n.name.indexOf("[") > 0) {
	                const {name: e, len: t} = mn(n.name);
	                this.contextDesc[e] = {
	                    name: e,
	                    type: "array",
	                    length: t,
	                    fn: n.fn
	                };
	            } else this.contextDesc[n.name] = n;
	        }
	        this.extraCommandProps = i && v({}, i) || {}, this.commands = {}, this._compileSource();
	    }
	    set shaderDefines(e) {
	        this._shaderDefines = e, this.dkey = Object.keys(this._shaderDefines).join();
	    }
	    get shaderDefines() {
	        return this._shaderDefines || {};
	    }
	    setDefines(e) {
	        this.shaderDefines = e;
	    }
	    setFramebuffer(e) {
	        return this.context.framebuffer = e, this;
	    }
	    appendDescUniforms(e, n) {
	        const t = n, r = this.contextDesc;
	        for (const i in r) if (r[i]) if ("array" === r[i].type) {
	            const o = i, a = r[i].length;
	            let s = n[i];
	            if (r[i].fn && (s = r[i].fn(null, n)), !s) continue;
	            if (s.length !== a) throw new Error(`${o} uniform's length is not ${a}`);
	            t[o] = t[o] || {};
	            for (let n = 0; n < a; n++) t[o]["" + n] = s[n].getREGLTexture ? s[n].getREGLTexture(e) : s[n];
	        } else "function" === r[i].type && (Object.getOwnPropertyDescriptor(t, i) || Object.defineProperty(t, i, {
	            configurable: !1,
	            enumerable: !0,
	            get: function() {
	                return r[i].fn(null, n);
	            }
	        }));
	        return t;
	    }
	    setUniforms(e) {
	        if (e.modelMatrix || e.positionMatrix) throw new Error("modelMatrix or positionMatrix is reserved uniform name for Mesh, please change to another name");
	        return this.contextKeys = e ? Object.keys(e).join() : null, this.context = e, this;
	    }
	    getVersion(e, n) {
	        if ("#version" === n.substring(0, 8)) return "";
	        return 0 === e.limits.version.indexOf("WebGL 2.0") && 300 === this.version ? "#version 300 es\n" : "#version 100\n";
	    }
	    getActiveVars(e, n, t, r) {
	        const i = r;
	        if (un[i]) return un[i];
	        const o = e._gl, a = o.createProgram(), s = o.createShader(35633);
	        o.shaderSource(s, n), o.compileShader(s);
	        const c = o.createShader(35632);
	        o.shaderSource(c, t), o.compileShader(c), o.attachShader(a, c), o.attachShader(a, s), 
	        o.linkProgram(a);
	        const l = o.getProgramParameter(a, 35721), f = [];
	        for (let e = 0; e < l; ++e) {
	            const n = o.getActiveAttrib(a, e);
	            n && f.push({
	                name: n.name,
	                type: n.type
	            });
	        }
	        const d = o.getProgramParameter(a, 35718), u = [];
	        for (let e = 0; e < d; ++e) {
	            const n = o.getActiveUniform(a, e);
	            let t = n.name;
	            n.name.indexOf("[") > 0 && (t = t.replace("[0]", "")), u.push(t);
	        }
	        return o.deleteProgram(a), o.deleteShader(s), o.deleteShader(c), un[i] = {
	            activeUniforms: u,
	            activeAttributes: f
	        }, un[i];
	    }
	    createREGLCommand(e, n, t, r, i, o = {}) {
	        const a = A$1(e) && !i, s = v({}, this.shaderDefines || {}, n || {}), c = this._insertDefines(this.vert, s), l = this.getVersion(e, c) + c, f = this._insertDefines(this.frag, s), d = this.getVersion(e, f) + f, u = I$1(l) + "_" + I$1(d), {activeAttributes: h, activeUniforms: m} = this.getActiveVars(e, l, d, u), _ = {};
	        h.forEach((n, t) => {
	            const r = n.name;
	            _[r] = a ? t : e.prop(r);
	        });
	        const x = {};
	        m.forEach(n => {
	            x[n] = e.prop(n);
	        });
	        const b = this.contextDesc;
	        for (const n in b) if (b[n] && b[n].type === ln) x[n] = b[n].fn; else if (b[n] && b[n].type === fn) {
	            const t = b[n].name, r = b[n].length;
	            for (let n = 0; n < r; n++) {
	                const r = `${t}[${n}]`;
	                x[r] = e.prop(r);
	            }
	        } else x[n] = e.prop(n);
	        const p = {
	            vert: l,
	            frag: d,
	            uniforms: x,
	            attributes: _
	        };
	        a && (p.vao = e.prop("vao")), a && !r || !t || g(t) || (p.elements = e.prop("elements")), 
	        p.count = e.prop("count"), p.offset = e.prop("offset"), p.primitive = e.prop("primitive"), 
	        p.framebuffer = e.prop("framebuffer"), r && (p.instances = e.prop("instances")), 
	        v(p, this.extraCommandProps, o);
	        const y = e(p);
	        return h.key = h.map(e => e.name).join(), y.activeAttributes = h, y;
	    }
	    dispose() {
	        for (const e in this.commands) {
	            const n = this.commands[e];
	            n && (n.destroy && !n[H$1] && (n[H$1] = !0, n.destroy()));
	        }
	        this.commands = {}, delete this.vert, delete this.frag;
	    }
	    _insertDefines(e, n) {
	        const t = [];
	        for (const e in n) S$1(n, e) && !h$1(n[e]) && t.push(`#define ${e} ${n[e]}\n`);
	        return t.join("") + e;
	    }
	    _compileSource() {
	        this.vert = on.compile(this.vert), this.frag = on.compile(this.frag);
	    }
	}

	function mn(e) {
	    const n = e.indexOf("["), t = e.indexOf("]");
	    return {
	        name: e.substring(0, n),
	        len: +e.substring(n + 1, t)
	    };
	}

	class vn extends hn {
	    draw(e, n) {
	        if (!n || !n.length) return 0;
	        const t = [];
	        let r, i = 0;
	        for (let o = 0, a = n.length; o < a; o++) {
	            if (!n[o].isValid()) {
	                o === a - 1 && r && t.length && r(t);
	                continue;
	            }
	            if (!n[o].geometry.getDrawCount() || !this._runFilter(n[o])) {
	                o === a - 1 && r && t.length && r(t);
	                continue;
	            }
	            const s = this.getMeshCommand(e, n[o]);
	            t.length && r !== s && (r(t), t.length = 0);
	            const c = n[o].getREGLProps(e, s.activeAttributes);
	            this._ensureContextDefines(c), c.shaderContext = this.context, this.appendDescUniforms(e, c), 
	            t.push(c), i++, o < a - 1 ? r = s : o === a - 1 && s(t);
	        }
	        return i;
	    }
	    _ensureContextDefines(e) {
	        if (this.context && (e.contextKeys || (e.contextKeys = {}), e.contextKeys[this.uid] !== this.contextKeys)) {
	            for (const n in this.context) "framebuffer" === n || Object.getOwnPropertyDescriptor(e, n) || Object.defineProperty(e, n, {
	                configurable: !1,
	                enumerable: !0,
	                get: function() {
	                    return this.shaderContext[n];
	                }
	            });
	            Object.getOwnPropertyDescriptor(e, "framebuffer") || Object.defineProperty(e, "framebuffer", {
	                configurable: !1,
	                enumerable: !0,
	                get: function() {
	                    return this.targetFramebuffer || this.shaderContext && this.shaderContext.framebuffer;
	                }
	            }), e.contextKeys[this.uid] = this.contextKeys;
	        }
	    }
	    _runFilter(e) {
	        const n = this.filter;
	        if (!n) return !0;
	        if (Array.isArray(n)) {
	            for (let t = 0; t < n.length; t++) if (!n[t](e)) return !1;
	            return !0;
	        }
	        return n(e);
	    }
	    getMeshCommand(e, n) {
	        this._cmdKeys || (this._cmdKeys = {});
	        const t = this.dkey || "default";
	        let r = this._cmdKeys[t];
	        r || (r = this._cmdKeys[t] = {});
	        const i = n.getCommandKey(e);
	        r[i] || (r[i] = t + "_" + n.getCommandKey(e));
	        const o = r[i];
	        let a = this.commands[o];
	        if (!a) {
	            const t = n.getDefines(), r = n.getMaterial(), i = {};
	            if (r) {
	                r.doubleSided && this.extraCommandProps && this.extraCommandProps.cull && (i.cull = {
	                    enable: !1
	                });
	            }
	            a = this.commands[o] = this.createREGLCommand(e, t, n.getElements(), n instanceof Ge$1, n.disableVAO, i);
	        }
	        return a;
	    }
	}

	class _n extends vn {
	    constructor(e = {}) {
	        let t = e.extraCommandProps || {};
	        const r = [];
	        t = v({}, t, {
	            blend: {
	                enable: !0,
	                func: {
	                    src: "src alpha",
	                    dst: "one minus src alpha"
	                },
	                equation: "add"
	            },
	            sample: {
	                alpha: !0
	            }
	        }), super({
	            vert: "#include <gl2_vert>\nattribute vec3 aPosition;\nattribute vec3 aBarycentric;\nvarying vec3 vBarycentric;\nuniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projMatrix;\nuniform mat4 positionMatrix;\nvarying vec3 vPosition;\n#include <get_output>\nvoid main() {\n  mat4 c = getPositionMatrix();\n  vec4 d = getPosition(aPosition);\n#ifdef HAS_MASK_EXTENT\ngl_Position = projMatrix * getMaskPosition(c * d, modelMatrix);\n#else\ngl_Position = projMatrix * modelViewMatrix * c * d;\n#endif\nvBarycentric = aBarycentric;\n  vPosition = aPosition;\n}",
	            frag: "#if __VERSION__ == 100\n#ifdef GL_OES_standard_derivatives\n#extension GL_OES_standard_derivatives : enable\n#endif\n#endif\nprecision mediump float;\n#include <gl2_frag>\nvarying vec3 vBarycentric;\nuniform float time;\nuniform float thickness;\nuniform float secondThickness;\nuniform float dashRepeats;\nuniform float dashLength;\nuniform bool dashOverlap;\nuniform bool dashEnabled;\nuniform bool dashAnimate;\nuniform bool seeThrough;\nuniform bool insideAltColor;\nuniform bool dualStroke;\nuniform bool squeeze;\nuniform float squeezeMin;\nuniform float squeezeMax;\nuniform vec4 stroke;\nuniform vec4 fill;\nuniform float opacity;\nuniform bool noiseEnable;\nvarying vec3 vPosition;\n#ifdef HAS_INSTANCE\nvarying vec4 vInstanceColor;\n#endif\n#include <mask_frag>\n#define F4 0.309016994374947451\n#define halfDist 0.5\nvec4 c(vec4 x) {\n  return x - floor(x * (1. / 289.)) * 289.;\n}\nfloat c(float x) {\n  return x - floor(x * (1. / 289.)) * 289.;\n}\nvec4 d(vec4 x) {\n  return c((x * 34. + 1.) * x);\n}\nfloat d(float x) {\n  return c((x * 34. + 1.) * x);\n}\nvec4 e(vec4 r) {\n  return 1.79284291400159 - .85373472095314 * r;\n}\nfloat e(float r) {\n  return 1.79284291400159 - .85373472095314 * r;\n}\nvec4 f(float h, vec4 i) {\n  const vec4 k = vec4(1., 1., 1., -1.);\n  vec4 p, s;\n  p.xyz = floor(fract(vec3(h) * i.xyz) * 7.) * i.z - 1.;\n  p.w = 1.5 - dot(abs(p.xyz), k.xyz);\n  s = vec4(lessThan(p, vec4(.0)));\n  p.xyz = p.xyz + (s.xyz * 2. - 1.) * s.www;\n  return p;\n}\nfloat l(vec4 m) {\n  const vec4 n = vec4(.138196601125011, .276393202250021, .414589803375032, -.447213595499958);\n  vec4 o = floor(m + dot(m, vec4(F4)));\n  vec4 u = m - o + dot(o, n.xxxx);\n  vec4 A;\n  vec3 B = step(u.yzw, u.xxx);\n  vec3 D = step(u.zww, u.yyz);\n  A.x = B.x + B.y + B.z;\n  A.yzw = 1. - B;\n  A.y += D.x + D.y;\n  A.zw += 1. - D.xy;\n  A.z += D.z;\n  A.w += 1. - D.z;\n  vec4 E = clamp(A, .0, 1.);\n  vec4 F = clamp(A - 1., .0, 1.);\n  vec4 G = clamp(A - 2., .0, 1.);\n  vec4 H = u - G + n.xxxx;\n  vec4 I = u - F + n.yyyy;\n  vec4 J = u - E + n.zzzz;\n  vec4 K = u + n.wwww;\n  o = c(o);\n  float L = d(d(d(d(o.w) + o.z) + o.y) + o.x);\n  vec4 M = d(d(d(d(o.w + vec4(G.w, F.w, E.w, 1.)) + o.z + vec4(G.z, F.z, E.z, 1.)) + o.y + vec4(G.y, F.y, E.y, 1.)) + o.x + vec4(G.x, F.x, E.x, 1.));\n  vec4 i = vec4(1. / 294., 1. / 49., 1. / 7., .0);\n  vec4 N = f(L, i);\n  vec4 O = f(M.x, i);\n  vec4 P = f(M.y, i);\n  vec4 Q = f(M.z, i);\n  vec4 R = f(M.w, i);\n  vec4 S = e(vec4(dot(N, N), dot(O, O), dot(P, P), dot(Q, Q)));\n  N *= S.x;\n  O *= S.y;\n  P *= S.z;\n  Q *= S.w;\n  R *= e(dot(R, R));\n  vec3 T = max(.6 - vec3(dot(u, u), dot(H, H), dot(I, I)), .0);\n  vec2 U = max(.6 - vec2(dot(J, J), dot(K, K)), .0);\n  T = T * T;\n  U = U * U;\n  return 49. * (dot(T * T, vec3(dot(N, u), dot(O, H), dot(P, I))) + dot(U * U, vec2(dot(Q, J), dot(R, K))));\n}\nconst float V = 3.14159265359;\nfloat W(float X, float Y) {\n  float Z = fwidth(Y) * halfDist;\n  return smoothstep(X - Z, X + Z, Y);\n}\nvec4 ba(vec3 bb) {\n  float bc = min(min(bb.x, bb.y), bb.z);\n  float bd = .0;\n  if(noiseEnable)\n    bd += l(vec4(vPosition.xyz * 80.0, time * halfDist)) * .12;\n  bc += bd;\n  float be = max(bb.x, bb.y);\n  if(bb.y < bb.x && bb.y < bb.z) {\n    be = 1. - be;\n  }\n  float bf = thickness;\n  if(squeeze) {\n    bf *= mix(squeezeMin, squeezeMax, (1. - sin(be * V)));\n  }\n  if(dashEnabled) {\n    float bg = 1. / dashRepeats * dashLength / 2.;\n    if(!dashOverlap) {\n      bg += 1. / dashRepeats / 2.;\n    }\n    if(dashAnimate) {\n      bg += time * .22;\n    }\n    float bh = fract((be + bg) * dashRepeats);\n    bf *= 1. - W(dashLength, bh);\n  }\n  float bi = 1. - W(bf, bc);\n#ifdef HAS_INSTANCE\nvec4 bj = vInstanceColor;\n#else\nvec4 bj = stroke;\n#endif\nvec4 bk = vec4(.0);\n  if(seeThrough) {\n    bk = vec4(bj.xyz, bi);\n    if(insideAltColor && !gl_FrontFacing) {\n      bk.rgb = fill.xyz;\n    }\n  } else {\n    vec3 bl = mix(fill.xyz, bj.xyz, bi);\n    bk.a = fill.a;\n    if(dualStroke) {\n      float bm = 1. - W(secondThickness, bc);\n      vec3 bn = mix(fill.xyz, stroke.xyz, abs(bm - bi));\n      bk.rgb = bn;\n    } else {\n      bk.rgb = bl;\n    }\n  }\n  return bk;\n}\nvoid main() {\n  glFragColor = ba(vBarycentric);\n  glFragColor *= halfDist + opacity;\n#ifdef HAS_MASK_EXTENT\nglFragColor = setMask(glFragColor);\n#endif\n#if __VERSION__ == 100\ngl_FragColor = glFragColor;\n#endif\n}",
	            uniforms: [ {
	                name: "modelViewMatrix",
	                type: "function",
	                fn: (e, t) => multiply$5(r, t.viewMatrix, t.modelMatrix)
	            } ],
	            extraCommandProps: t
	        }), this.version = 300;
	    }
	}

	var gn = "precision mediump float;\n#include <gl2_frag>\nuniform vec4 baseColorFactor;\nuniform float materialShininess;\nuniform float environmentExposure;\nuniform float specularStrength;\nuniform vec3 light0_viewDirection;\nuniform vec3 ambientColor;\nuniform vec4 light0_diffuse;\nuniform vec3 lightSpecular;\nuniform vec3 cameraPosition;\nuniform float alphaTest;\n#ifdef HAS_TOON\nuniform float toons;\nuniform float specularToons;\n#endif\n#ifdef HAS_TANGENT\nvarying vec4 vTangent;\n#endif\n#ifdef HAS_MAP\n#include <computeTexcoord_frag>\n#endif\nvarying vec3 vNormal;\nvarying vec3 vFragPos;\n#ifdef HAS_INSTANCE_COLOR\nvarying vec4 vInstanceColor;\n#endif\n#ifdef HAS_BASECOLOR_MAP\nuniform sampler2D baseColorTexture;\n#endif\n#ifdef HAS_EXTRUSION_OPACITY\nuniform vec2 extrusionOpacityRange;\nvarying float vExtrusionOpacity;\n#endif\n#if defined(HAS_COLOR) || defined(HAS_COLOR0)\nvarying vec4 vColor;\n#elif defined(IS_LINE_EXTRUSION)\nuniform vec4 lineColor;\n#else\nuniform vec4 polygonFill;\n#endif\n#ifdef HAS_LAYER_OPACITY\nuniform float layerOpacity;\n#endif\n#ifdef IS_LINE_EXTRUSION\nuniform float lineOpacity;\n#else\nuniform float polygonOpacity;\n#endif\n#ifdef HAS_AO_MAP\nuniform sampler2D occlusionTexture;\nvarying vec2 vTexCoord1;\n#endif\n#ifdef HAS_NORMAL_MAP\nuniform sampler2D normalTexture;\n#endif\n#ifdef HAS_EMISSIVE_MAP\nuniform sampler2D emissiveTexture;\n#endif\n#ifdef SHADING_MODEL_SPECULAR_GLOSSINESS\nuniform vec4 diffuseFactor;\nuniform vec3 specularFactor;\n#ifdef HAS_DIFFUSE_MAP\nuniform sampler2D diffuseTexture;\n#endif\n#ifdef HAS_SPECULARGLOSSINESS_MAP\nuniform sampler2D specularGlossinessTexture;\n#endif\n#endif\n#include <heatmap_render_frag>\n#if defined(HAS_SHADOWING) && !defined(HAS_BLOOM)\n#include <vsm_shadow_frag>\n#endif\n#include <highlight_frag>\n#include <mask_frag>\nvec3 c() {\n  \n#if defined(HAS_NORMAL_MAP)\nvec3 d = normalize(vNormal);\n  vec3 e = texture2D(normalTexture, computeTexCoord(vTexCoord)).xyz * 2. - 1.;\n#if defined(HAS_TANGENT)\nvec3 t = normalize(vTangent.xyz);\n  vec3 b = normalize(cross(d, t) * sign(vTangent.w));\n  mat3 f = mat3(t, b, d);\n  return normalize(f * e);\n#else\nreturn normalize(e);\n#endif\n#else\nreturn normalize(vNormal);\n#endif\n}\nvec4 h(const in vec4 i) {\n  return vec4(i.r < .0031308 ? i.r * 12.92 : 1.055 * pow(i.r, 1. / 2.4) - .055, i.g < .0031308 ? i.g * 12.92 : 1.055 * pow(i.g, 1. / 2.4) - .055, i.b < .0031308 ? i.b * 12.92 : 1.055 * pow(i.b, 1. / 2.4) - .055, i.a);\n}\nvec4 j() {\n  \n#if defined(HAS_BASECOLOR_MAP)\nreturn texture2D(baseColorTexture, computeTexCoord(vTexCoord));\n#elif defined(HAS_DIFFUSE_MAP)\nreturn texture2D(diffuseTexture, computeTexCoord(vTexCoord));\n#elif defined(SHADING_MODEL_SPECULAR_GLOSSINESS)\nreturn diffuseFactor;\n#else\nreturn baseColorFactor;\n#endif\n}\nvec3 k() {\n  \n#if defined(HAS_SPECULARGLOSSINESS_MAP)\nreturn texture2D(specularGlossinessTexture, computeTexCoord(vTexCoord)).rgb;\n#elif defined(SHADING_MODEL_SPECULAR_GLOSSINESS)\nreturn specularFactor;\n#else\nreturn vec3(1.);\n#endif\n}\nvoid main() {\n  vec4 l = j();\n  vec3 m = environmentExposure * ambientColor * l.rgb;\n#ifdef HAS_INSTANCE_COLOR\nm *= vInstanceColor.rgb;\n#endif\nvec3 o = c();\n  vec3 u = normalize(-light0_viewDirection);\n  float v = max(dot(o, u), .0);\n#ifdef HAS_TOON\nfloat A = floor(v * toons);\n  v = A / toons;\n#endif\nvec3 B = light0_diffuse.rgb * v * l.rgb;\n#if defined(HAS_COLOR) || defined(HAS_COLOR0)\nvec3 i = vColor.rgb;\n#elif defined(IS_LINE_EXTRUSION)\nvec3 i = lineColor.rgb;\n#else\nvec3 i = polygonFill.rgb;\n#endif\n#ifdef HAS_INSTANCE_COLOR\ni *= vInstanceColor.rgb;\n#endif\nm *= i.rgb;\n  B *= i.rgb;\n  vec3 C = normalize(cameraPosition - vFragPos);\n  vec3 D = normalize(u + C);\n  float E = pow(max(dot(o, D), .0), materialShininess);\n#ifdef HAS_TOON\nfloat F = floor(E * specularToons);\n  E = F / specularToons;\n#endif\nvec3 G = specularStrength * lightSpecular * E * k();\n#ifdef HAS_OCCLUSION_MAP\nfloat H = texture2D(occlusionTexture, computeTexCoord(vTexCoord1)).r;\n  m *= H;\n#endif\n#if defined(HAS_SHADOWING) && !defined(HAS_BLOOM)\nfloat I = shadow_computeShadow();\n  B = shadow_blend(B, I).rgb;\n  G = shadow_blend(G, I).rgb;\n#endif\nvec3 J = m + B + G;\n#ifdef HAS_EMISSIVE_MAP\nvec3 K = texture2D(emissiveTexture, computeTexCoord(vTexCoord)).rgb;\n  J += K;\n#endif\n#ifdef IS_LINE_EXTRUSION\nglFragColor = vec4(J, lineOpacity * l.a);\n#else\nglFragColor = vec4(J, polygonOpacity * l.a);\n#endif\n#if defined(HAS_COLOR) || defined(HAS_COLOR0)\nfloat L = vColor.a;\n#elif defined(IS_LINE_EXTRUSION)\nfloat L = lineColor.a;\n#else\nfloat L = polygonFill.a;\n#endif\nglFragColor *= L;\n#ifdef HAS_EXTRUSION_OPACITY\nfloat M = extrusionOpacityRange.x;\n  float N = extrusionOpacityRange.y;\n  float O = M + vExtrusionOpacity * (N - M);\n  O = clamp(O, .0, 1.);\n  glFragColor *= O;\n#endif\nif(glFragColor.a < alphaTest) {\n    discard;\n  }\n#ifdef HAS_HEATMAP\nglFragColor = heatmap_getColor(glFragColor);\n#endif\nglFragColor = highlight_blendColor(glFragColor);\n#ifdef HAS_LAYER_OPACITY\nglFragColor *= layerOpacity;\n#endif\n#ifdef HAS_MASK_EXTENT\nglFragColor = setMask(glFragColor);\n#endif\n#if __VERSION__ == 100\ngl_FragColor = glFragColor;\n#endif\n}", xn = "#include <gl2_vert>\nattribute vec3 aPosition;\n#include <line_extrusion_vert>\n#ifdef HAS_MAP\nuniform vec2 uvScale;\nuniform vec2 uvOffset;\nattribute vec2 aTexCoord;\nvarying vec2 vTexCoord;\n#ifdef HAS_I3S_UVREGION\nattribute vec4 uvRegion;\nvarying vec4 vUvRegion;\n#endif\n#if defined(HAS_AO_MAP)\nattribute vec2 aTexCoord1;\nvarying vec2 vTexCoord1;\n#endif\n#endif\n#if defined(HAS_COLOR)\nattribute vec4 aColor;\n#elif defined(HAS_COLOR0)\n#if COLOR0_SIZE == 3\nattribute vec3 aColor0;\n#else\nattribute vec4 aColor0;\n#endif\nvarying vec4 vColor;\n#endif\nvarying vec3 vFragPos;\nvarying vec3 vNormal;\nuniform mat4 projMatrix;\nuniform mat3 modelNormalMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 modelMatrix;\nuniform mat4 positionMatrix;\nuniform vec2 halton;\nuniform vec2 outSize;\nuniform mat4 projViewMatrix;\n#include <highlight_vert>\n#include <get_output>\n#include <heatmap_render_vert>\n#if defined(HAS_SHADOWING) && !defined(HAS_BLOOM)\n#include <vsm_shadow_vert>\n#endif\n#ifdef HAS_EXTRUSION_OPACITY\nattribute float aExtrusionOpacity;\nvarying float vExtrusionOpacity;\n#endif\n#if defined(HAS_TANGENT)\nvarying vec4 vTangent;\n#endif\nvoid c(const highp vec4 q, out highp vec3 d) {\n  d = vec3(.0, .0, 1.) + vec3(2., -2., -2.) * q.x * q.zwx + vec3(2., 2., -2.) * q.y * q.wzy;\n}\nvoid c(const highp vec4 q, out highp vec3 d, out highp vec3 t) {\n  c(q, d);\n  t = vec3(1., .0, .0) + vec3(-2., 2., -2.) * q.y * q.yxw + vec3(-2., 2., 2.) * q.z * q.zwx;\n}\nvoid main() {\n  \n#ifdef IS_LINE_EXTRUSION\nvec4 e = getPosition(getLineExtrudePosition(aPosition));\n#else\nvec4 e = getPosition(aPosition);\n#endif\nmat4 f = getPositionMatrix();\n  vFragPos = vec3(modelMatrix * f * e);\n#if defined(HAS_NORMAL) || defined(HAS_TANGENT)\nmat3 h = modelNormalMatrix * mat3(f);\n  vec3 i;\n#if defined(HAS_TANGENT)\nvec3 t;\n  c(aTangent, i, t);\n  vTangent = vec4(h * t, aTangent.w);\n#else\ni = decode_getNormal(aNormal);\n#endif\nvec3 j = appendMorphNormal(i);\n  vNormal = normalize(h * j);\n#else\nvNormal = vec3(.0);\n#endif\nmat4 k = projMatrix;\n  k[2].xy += halton.xy / outSize.xy;\n#ifdef HAS_MASK_EXTENT\ngl_Position = k * getMaskPosition(f * e, modelMatrix);\n#else\ngl_Position = k * modelViewMatrix * f * e;\n#endif\n#ifdef HAS_MAP\nvec2 l = decode_getTexcoord(aTexCoord);\n  vTexCoord = l * uvScale + uvOffset;\n#endif\n#ifdef HAS_AO_MAP\nvec2 m = decode_getTexcoord(aTexCoord1);\n  vTexCoord1 = m * uvScale + uvOffset;\n#endif\n#ifdef HAS_EXTRUSION_OPACITY\nvExtrusionOpacity = aExtrusionOpacity;\n#endif\n#if defined(HAS_COLOR)\nvColor = aColor / 255.;\n#elif defined(HAS_COLOR0)\n#if COLOR0_SIZE == 3\nvColor = vec4(aColor0 / 255., 1.);\n#else\nvColor = aColor0 / 255.;\n#endif\n#endif\n#if defined(HAS_SHADOWING) && !defined(HAS_BLOOM)\nshadow_computeShadowPars(f * e);\n#endif\n#ifdef HAS_HEATMAP\nheatmap_compute(projMatrix * modelViewMatrix * f, e);\n#endif\n#ifdef HAS_I3S_UVREGION\nvUvRegion = uvRegion / 65535.;\n#endif\nhighlight_setVarying();\n}";

	class bn extends vn {
	    constructor(e = {}) {
	        const t = [], r = [], o = e.uniforms, a = [ {
	            name: "modelNormalMatrix",
	            type: "function",
	            fn: function(e, n) {
	                return fromMat4$1(t, n.modelMatrix);
	            }
	        }, {
	            name: "modelViewMatrix",
	            type: "function",
	            fn: function(e, t) {
	                return multiply$5(r, t.viewMatrix, t.modelMatrix);
	            }
	        } ];
	        o && a.push(...o), super({
	            vert: e.vert || xn,
	            frag: e.frag || gn,
	            uniforms: a,
	            defines: e.defines || {},
	            extraCommandProps: e.extraCommandProps || {}
	        }), this.version = 300;
	    }
	    getGeometryDefines(e) {
	        const n = {};
	        return e.data[e.desc.tangentAttribute] ? n.HAS_TANGENT = 1 : e.data[e.desc.normalAttribute] && (n.HAS_NORMAL = 1), 
	        n;
	    }
	}

	class pn extends vn {
	    constructor(e = {}) {
	        const t = [];
	        super({
	            vert: "attribute vec3 aPosition;\n#ifdef HAS_COLOR0\nattribute vec4 aColor0;\nvarying vec4 vColor;\n#endif\nuniform mat4 modelMatrix;\nuniform mat4 projMatrix;\nuniform mat4 positionMatrix;\nuniform mat4 projViewModelMatrix;\nuniform float pointSize;\n#if defined(HAS_MAP)\nattribute vec2 aTexCoord;\nvarying vec2 vTexCoord;\n#endif\n#include <get_output>\n#include <heatmap_render_vert>\n#ifdef HAS_FLOODANALYSE\nvarying float vHeight;\n#endif\nvoid main() {\n  vec4 c = getPosition(aPosition);\n  mat4 d = getPositionMatrix();\n  gl_PointSize = pointSize;\n#ifdef HAS_MASK_EXTENT\ngl_Position = projMatrix * getMaskPosition(d * c, modelMatrix);\n#else\ngl_Position = projViewModelMatrix * d * c;\n#endif\n#ifdef HAS_COLOR0\nvColor = aColor0 / 255.;\n#endif\n#ifdef HAS_MAP\nvTexCoord = aTexCoord;\n#endif\n#ifdef HAS_HEATMAP\nheatmap_compute(projMatrix * modelViewMatrix * d, c);\n#endif\n}",
	            frag: "precision mediump float;\n#include <gl2_frag>\n#if defined(HAS_COLOR0)\nvarying vec4 vColor;\n#endif\n#include <heatmap_render_frag>\nuniform vec4 baseColorFactor;\n#if defined(HAS_MAP)\n#if defined(HAS_ALBEDO_MAP)\nuniform sampler2D baseColorTexture;\n#endif\n#if defined(HAS_DIFFUSE_MAP)\nuniform sampler2D diffuseTexture;\n#endif\nvarying vec2 vTexCoord;\n#endif\n#include <mask_frag>\nvoid main() {\n  \n#ifdef HAS_COLOR0\nglFragColor = vColor * baseColorFactor;\n#else\nglFragColor = vec4(1.) * baseColorFactor;\n#endif\n#ifdef HAS_MAP\n#ifdef HAS_ALBEDO_MAP\nglFragColor *= texture2D(baseColorTexture, vTexCoord);\n#endif\n#ifdef HAS_DIFFUSE_MAP\nglFragColor *= texture2D(diffuseTexture, vTexCoord);\n#endif\n#endif\n#ifdef HAS_HEATMAP\nglFragColor = heatmap_getColor(glFragColor);\n#endif\n#ifdef HAS_MASK_EXTENT\nglFragColor = setMask(glFragColor);\n#endif\n#if __VERSION__ == 100\ngl_FragColor = glFragColor;\n#endif\n}",
	            uniforms: [ {
	                name: "projViewModelMatrix",
	                type: "function",
	                fn: (e, r) => multiply$5(t, r.projViewMatrix, r.modelMatrix)
	            } ],
	            defines: e.defines || {},
	            extraCommandProps: e.extraCommandProps || {}
	        });
	    }
	}

	class yn extends bn {
	    constructor(e = {}) {
	        super({
	            vert: xn,
	            frag: gn,
	            defines: e.defines || {},
	            extraCommandProps: e.extraCommandProps || {}
	        });
	    }
	}

	var An = "#if __VERSION__ == 300\n#define attribute in\n#define varying out\n#endif\nattribute vec2 aPosition;\nattribute vec2 aTexCoord;\nvarying vec2 vTexCoord;\nvoid main() {\n  gl_Position = vec4(aPosition, 0., 1.);\n  vTexCoord = aTexCoord;\n}";

	const Sn = new Int8Array([ -1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, -1 ]), Tn = new Uint8Array([ 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0 ]);

	class Mn extends vn {
	    constructor(e) {
	        e.vert = e.vert || An, e.extraCommandProps = e.extraCommandProps || {}, e.extraCommandProps.depth || (e.extraCommandProps.depth = {
	            enable: !1,
	            mask: !1
	        }), e.extraCommandProps.stencil || (e.extraCommandProps.stencil = {
	            enable: !1
	        }), super(e);
	    }
	    draw(e) {
	        return this._quadMesh || this._createQuadMesh(e), super.draw(e, this._quadMesh);
	    }
	    getMeshCommand(e) {
	        const n = this.dkey || "";
	        return this.commands[n + "_quad"] || (this.commands[n + "_quad"] = this.createREGLCommand(e, null, this._quadMesh[0].getElements())), 
	        this.commands[n + "_quad"];
	    }
	    _createQuadMesh(e) {
	        const n = new Q$1({
	            aPosition: Sn,
	            aTexCoord: Tn
	        }, null, Sn.length / 2, {
	            positionSize: 2,
	            primitive: "triangles"
	        });
	        n.generateBuffers(e), this._quadMesh = [ new ke$1(n) ];
	    }
	    dispose() {
	        if (this._quadMesh) {
	            const e = this._quadMesh[0];
	            e.geometry.dispose(), e.dispose();
	        }
	        return delete this._quadMesh, super.dispose();
	    }
	}

	class Cn extends Mn {
	    constructor() {
	        super({
	            vert: An,
	            frag: "#define SHADER_NAME FXAA\n#define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#define FXAA_SPAN_MAX     8.0\nprecision mediump float;\nvarying vec2 vTexCoord;\nuniform float enableFXAA;\nuniform float enableToneMapping;\nuniform float enableSharpen;\nuniform vec2 resolution;\nuniform sampler2D textureSource;\n#ifdef HAS_NOAA_TEX\nuniform sampler2D noAaTextureSource;\n#endif\n#ifdef HAS_POINT_TEX\nuniform sampler2D pointTextureSource;\n#endif\n#ifdef HAS_TAA_TEX\nuniform sampler2D taaTextureSource;\n#ifdef HAS_FXAA_TEX\nuniform sampler2D fxaaTextureSource;\n#endif\n#endif\nuniform float pixelRatio;\nuniform float sharpFactor;\n#ifdef HAS_OUTLINE_TEX\nuniform sampler2D textureOutline;\nuniform float enableOutline;\nuniform float highlightFactor;\nuniform float outlineFactor;\nuniform float outlineWidth;\nuniform vec3 outlineColor;\n#endif\nvec2 c;\nvec4 d(vec2 e) {\n  \n#ifdef HAS_TAA_TEX\nvec4 f = texture2D(textureSource, e);\n  vec4 taa = texture2D(taaTextureSource, e);\n#ifdef HAS_FXAA_TEX\nvec4 h = texture2D(fxaaTextureSource, e);\n#else\nvec4 h = vec4(.0);\n#endif\nvec4 i = taa + f * (1. - taa.a);\n  return h + i * (1. - h.a);\n#else\nreturn texture2D(textureSource, e);\n#endif\n}\nvec4 j(vec2 k) {\n  vec4 l;\n  mediump vec2 m = vec2(1. / resolution.x, 1. / resolution.y);\n  vec3 n = d((k + vec2(-1., -1.)) * m).xyz;\n  vec3 o = d((k + vec2(1., -1.)) * m).xyz;\n  vec3 u = d((k + vec2(-1., 1.)) * m).xyz;\n  vec3 v = d((k + vec2(1.)) * m).xyz;\n  vec4 A = d(k * m);\n  vec3 B = A.xyz;\n  vec3 C = vec3(.299, .587, .114);\n  float D = dot(n, C);\n  float E = dot(o, C);\n  float F = dot(u, C);\n  float G = dot(v, C);\n  float H = dot(B, C);\n  float I = min(H, min(min(D, E), min(F, G)));\n  float J = max(H, max(max(D, E), max(F, G)));\n  mediump vec2 K;\n  K.x = -((D + E) - (F + G));\n  K.y = (D + F) - (E + G);\n  float L = max((D + E + F + G) * (.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n  float M = 1. / (min(abs(K.x), abs(K.y)) + L);\n  K = min(vec2(FXAA_SPAN_MAX), max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX), K * M)) * m;\n  vec4 N = .5 * (d(k * m + K * (1. / 3. - .5)) + d(k * m + K * (2. / 3. - .5)));\n  vec4 O = N * .5 + .25 * (d(k * m + K * -.5) + d(k * m + K * .5));\n  float P = dot(O.xyz, C);\n  if(P < I || P > J)\n    l = N;\n  else\n    l = O;\n  return l;\n}\nvec3 Q(const in vec3 l, const float R) {\n  vec2 S = pixelRatio / resolution.xy;\n  float T = .0;\n  vec4 n = texture2D(textureSource, c + S * vec2(-1., -1.));\n  n.rgb = mix(vec3(.0), n.rgb, sign(n.a));\n  T += mix(.0, 1., sign(n.a));\n  vec4 v = texture2D(textureSource, c + S * vec2(1.));\n  v.rgb = mix(vec3(.0), v.rgb, sign(v.a));\n  T += mix(.0, 1., sign(v.a));\n  vec4 o = texture2D(textureSource, c + S * vec2(1., -1.));\n  o.rgb = mix(vec3(.0), o.rgb, sign(o.a));\n  T += mix(.0, 1., sign(o.a));\n  vec4 u = texture2D(textureSource, c + S * vec2(-1., 1.));\n  u.rgb = mix(vec3(.0), u.rgb, sign(u.a));\n  T += mix(.0, 1., sign(u.a));\n  return l + R * (T * l - n.rgb - o.rgb - u.rgb - v.rgb);\n}\nvec4 U(const in vec4 l) {\n  return vec4(Q(l.rgb, sharpFactor), l.a);\n}\nvec3 V(const vec3 x) {\n  const float a = 2.51;\n  const float b = .03;\n  const float W = 2.43;\n  const float X = .59;\n  const float Y = .14;\n  return (x * (a * x + b)) / (x * (W * x + X) + Y);\n}\nvec3 Z(vec3 l) {\n  l = l / (l + vec3(1.));\n  return l = pow(l, vec3(1. / 2.2));\n}\n#ifdef HAS_OUTLINE_TEX\nvec4 ba() {\n  float bb = 2.;\n  float bc = 1.;\n  float bd = pixelRatio / resolution[0] * outlineWidth;\n  float be = pixelRatio / resolution[1] * outlineWidth;\n  vec4 bf = (texture2D(textureOutline, c + vec2(bd, be)));\n  vec4 bg = (texture2D(textureOutline, c + vec2(bd, .0)));\n  vec4 bh = (texture2D(textureOutline, c + vec2(bd, -be)));\n  vec4 bi = (texture2D(textureOutline, c + vec2(.0, -be)));\n  vec4 bj = (texture2D(textureOutline, c + vec2(-bd, -be)));\n  vec4 bk = (texture2D(textureOutline, c + vec2(-bd, .0)));\n  vec4 bl = (texture2D(textureOutline, c + vec2(-bd, be)));\n  vec4 bm = (texture2D(textureOutline, c + vec2(.0, be)));\n  vec4 bn = -bb * bk + bb * bg + -bc * bl + bc * bf + -bc * bj + bc * bh;\n  vec4 bo = -bb * bi + bb * bm + -bc * bj + bc * bl + -bc * bh + bc * bf;\n  float bp = sqrt(dot(bo, bo) + dot(bn, bn));\n  bool bq = bp < 1. / 65025.;\n  vec3 br = (texture2D(textureOutline, c)).r * outlineColor;\n  if(br == vec3(.0) || (highlightFactor == .0 && bq)) {\n    return vec4(.0);\n  }\n  float bs = bq ? highlightFactor : min(1., sqrt(bp) * outlineFactor);\n  return bs * vec4(br, 1.);\n}\nvec4 bt(const in vec4 l) {\n  vec4 ba = ba();\n  return ba + vec4(l) * (1. - ba.a);\n}\n#endif\nvoid main() {\n  c = vTexCoord;\n  vec4 l;\n  if(enableFXAA == 1.) {\n    l = j(c * resolution);\n  } else {\n    l = d(vTexCoord);\n  }\n  if(enableSharpen == 1.) {\n    l = U(l);\n  }\n#if defined(HAS_NOAA_TEX) || defined(HAS_POINT_TEX)\nvec4 bu = vec4(.0);\n  vec4 bv = vec4(.0);\n#ifdef HAS_POINT_TEX\nbu = texture2D(pointTextureSource, vTexCoord);\n#endif\n#ifdef HAS_NOAA_TEX\nbv = texture2D(noAaTextureSource, vTexCoord);\n#endif\nvec4 bw = bu + bv * (1. - bu.a);\n  l = bw + l * (1. - bw.a);\n#endif\nif(enableToneMapping == 1.) {\n    l.rgb = Z(l.rgb);\n  }\n#ifdef HAS_OUTLINE_TEX\nl = bt(l);\n#endif\ngl_FragColor = l;\n}",
	            extraCommandProps: {
	                viewport: {
	                    x: 0,
	                    y: 0,
	                    width: (e, n) => n.resolution[0],
	                    height: (e, n) => n.resolution[1]
	                }
	            }
	        });
	    }
	    getMeshCommand(e, n) {
	        const t = this.dkey || "";
	        return this.commands[t + "_fxaa"] || (this.commands[t + "_fxaa"] = this.createREGLCommand(e, null, n.getElements())), 
	        this.commands[t + "_fxaa"];
	    }
	}

	class On extends Mn {
	    constructor({blurOffset: e}) {
	        super({
	            vert: An,
	            frag: "precision highp float;\nvarying vec2 vTexCoord;\nuniform sampler2D textureSource;\nuniform vec2 resolution;\nuniform float ignoreTransparent;\nvoid main() {\n  vec4 c = vec4(.0);\n  float d = .0;\n  for(int x = -BOXBLUR_OFFSET; x <= BOXBLUR_OFFSET; ++x)\n    for(int y = -BOXBLUR_OFFSET; y <= BOXBLUR_OFFSET; ++y) {\n      vec2 e = vTexCoord.st + vec2(float(x) / resolution.x, float(y) / resolution.y);\n      e = clamp(e, .0, 1.);\n      vec4 f = texture2D(textureSource, e);\n      float h;\n      if(ignoreTransparent == 1.) {\n        h = sign(f.a);\n      } else {\n        h = 1.;\n      }\n      d += h;\n      c += h * f;\n    }\n  gl_FragColor = c / max(d, 1.) * clamp(sign(d - 1.), .0, 1.);\n}",
	            defines: {
	                BOXBLUR_OFFSET: e || 2
	            },
	            extraCommandProps: {
	                viewport: {
	                    x: 0,
	                    y: 0,
	                    width: (e, n) => n.resolution[0],
	                    height: (e, n) => n.resolution[1]
	                }
	            }
	        }), this._blurOffset = e || 2;
	    }
	    getMeshCommand(e, n) {
	        const t = "box_blur_" + this._blurOffset;
	        return this.commands[t] || (this.commands[t] = this.createREGLCommand(e, null, n.getElements())), 
	        this.commands[t];
	    }
	}

	class En extends Mn {
	    constructor() {
	        super({
	            vert: An,
	            frag: "precision mediump float;\n#define SHADER_NAME SSAO_BLUR\nstruct MaterialParams {\n  float farPlaneOverEdgeDistance;\n  vec2 axis;\n  vec2 resolution;\n};\nuniform sampler2D materialParams_ssao;\nuniform sampler2D TextureInput;\nuniform MaterialParams materialParams;\nvarying vec2 vTexCoord;\nconst int c = 6;\nfloat d[8];\nvoid e() {\n  d[0] = .099736;\n  d[1] = .096667;\n  d[2] = .088016;\n  d[3] = .075284;\n  d[4] = .060493;\n  d[5] = .045662;\n}\nfloat f(vec2 h) {\n  return (h.x * (256. / 257.) + h.y * (1. / 257.));\n}\nvoid tap(inout float i, inout float j, float k, float h, vec2 l) {\n  vec3 m = texture2D(materialParams_ssao, l).rgb;\n  float n = k;\n  i += m.r * n;\n  j += n;\n}\nvoid main() {\n  e();\n  highp vec2 o = vTexCoord;\n  vec3 m = texture2D(materialParams_ssao, o).rgb;\n  if(m.g * m.b == 1.) {\n    if(materialParams.axis.y > .0) {\n      vec4 u = texture2D(TextureInput, o);\n      gl_FragColor = u;\n    } else {\n      gl_FragColor = vec4(m, 1.);\n    }\n    return;\n  }\n  float h = f(m.gb);\n  float j = d[0];\n  float i = m.r * j;\n  vec2 v = materialParams.axis / materialParams.resolution;\n  vec2 A = v;\n  for(int B = 1; B < c; B++) {\n    float k = d[B];\n    tap(i, j, k, h, o + A);\n    tap(i, j, k, h, o - A);\n    A += v;\n  }\n  float C = i * (1. / j);\n  vec2 gb = m.gb;\n  if(materialParams.axis.y > .0) {\n    vec4 u = texture2D(TextureInput, o);\n    gl_FragColor = vec4(u.rgb * C, u.a);\n  } else {\n    gl_FragColor = vec4(C, gb, 1.);\n  }\n}",
	            extraCommandProps: {
	                viewport: {
	                    x: 0,
	                    y: 0,
	                    width: (e, n) => n.outputSize[0],
	                    height: (e, n) => n.outputSize[1]
	                }
	            }
	        });
	    }
	    getMeshCommand(e, n) {
	        return this.commands.ssao_blur || (this.commands.ssao_blur = this.createREGLCommand(e, null, n.getElements())), 
	        this.commands.ssao_blur;
	    }
	}

	const Pn = [ -2e-6, 0, 2e-6, -.095089, .004589, -.031253, .01518, -.025586, .003765, .073426, .021802, .002778, .094587, .043218, .089148, -.009509, .051369, .019673, .139973, -.101685, .10857, -.103804, .219853, -.043016, .004841, -.033988, .094187, .028011, .058466, -.25711, -.051031, .074993, .259843, .118822, -.186537, -.134192, .063949, -.094894, -.072683, .108176, .327108, -.254058, -.04718, .21918, .263895, -.407709, .240834, -.200352 ];

	class In extends Mn {
	    constructor() {
	        super({
	            vert: An,
	            frag: "#if __VERSION__ == 100\n#if defined(GL_OES_standard_derivatives)\n#extension GL_OES_standard_derivatives : enable\n#endif\n#endif\nprecision highp float;\n#include <gl2_frag>\nvarying vec2 vTexCoord;\n#define saturate(x)        clamp(x, 0.0, 1.0)\n#define SHADER_NAME SSAO_EXTRACT\n#define PI 3.14159265359\nconst float c = .0625;\nstruct MaterialParams {\n  mat4 projMatrix;\n  mat4 invProjMatrix;\n  vec4 resolution;\n  float radius;\n  float bias;\n  float power;\n  vec2 cameraNearFar;\n};\nuniform MaterialParams materialParams;\nuniform sampler2D materialParams_depth;\n#define NOISE_NONE      0\n#define NOISE_PATTERN   1\n#define NOISE_RANDOM    2\n#define NOISE_TYPE      NOISE_PATTERN\nconst int d = 16;\nuniform vec3 kSphereSamples[16];\nvec3 e(const int x) {\n  if(x == 0) {\n    return vec3(-.078247, -.749924, -.656880);\n  } else if(x == 1) {\n    return vec3(-.572319, -.102379, -.813615);\n  } else if(x == 2) {\n    return vec3(.048653, -.380791, .923380);\n  } else if(x == 3) {\n    return vec3(.281202, -.656664, -.699799);\n  } else if(x == 4) {\n    return vec3(.711911, -.235841, -.661485);\n  } else if(x == 5) {\n    return vec3(-.445893, .611063, .654050);\n  } else if(x == 6) {\n    return vec3(-.703598, .674837, .222587);\n  } else if(x == 7) {\n    return vec3(.768236, .507457, .390257);\n  } else if(x == 8) {\n    return vec3(-.670286, -.470387, .573980);\n  } else if(x == 9) {\n    return vec3(.199235, .849336, -.488808);\n  } else if(x == 10) {\n    return vec3(-.768068, -.583633, -.263520);\n  } else if(x == 11) {\n    return vec3(-.897330, .328853, .294372);\n  } else if(x == 12) {\n    return vec3(-.570930, -.531056, -.626114);\n  } else if(x == 13) {\n    return vec3(.699014, .063283, -.712303);\n  } else if(x == 14) {\n    return vec3(.207495, .976129, -.064172);\n  } else if(x == 15) {\n    return vec3(-.060901, -.869738, -.489742);\n  } else {\n    return vec3(.0);\n  }\n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n}\nvec2 f(highp float h) {\n  highp float z = clamp(h * 1. / -materialParams.cameraNearFar.y, .0, 1.);\n  highp float t = floor(256. * z);\n  mediump float i = t * (1. / 256.);\n  mediump float j = 256. * z - t;\n  return vec2(i, j);\n}\nfloat k(highp vec2 l) {\n  l = fract(l * vec2(5.3987, 5.4421));\n  l += dot(l.yx, l.xy + vec2(21.5351, 14.3137));\n  highp float xy = l.x * l.y;\n  return fract(xy * 95.4307) + fract(xy * 75.04961) * .5;\n}\nvec3 m(const vec2 o) {\n  \n#if NOISE_TYPE == NOISE_RANDOM\nreturn normalize(2. * vec3(k(o), k(o * 2.), k(o * 4.)) - vec3(1.));\n#elif NOISE_TYPE == NOISE_PATTERN\nvec2 xy = floor(gl_FragCoord.xy);\n  float u = mod(xy.x, 4.);\n  float v = mod(xy.y, 4.);\n  return e(int(u + v * 4.));\n#else\nreturn vec3(.0);\n#endif\n}\nhighp mat4 A() {\n  return materialParams.projMatrix;\n}\nhighp mat4 B() {\n  return materialParams.invProjMatrix;\n}\nhighp float C(const vec2 o) {\n  return texture2D(materialParams_depth, o).r;\n}\nhighp float D(highp float h) {\n  highp mat4 E = A();\n  highp float z = h * 2. - 1.;\n  return -E[3].z / (z + E[2].z);\n}\nhighp float F(const vec2 o) {\n  return D(texture2D(materialParams_depth, o).r);\n}\nhighp vec3 G(in vec2 p, highp float H) {\n  p = p * 2. - 1.;\n  highp mat4 I = B();\n  p.x *= I[0].x;\n  p.y *= I[1].y;\n  return vec3(p * -H, H);\n}\nhighp vec3 J(const highp vec3 K) {\n  highp vec3 L = dFdx(K);\n  highp vec3 M = dFdy(K);\n  return cross(L, M);\n}\nhighp vec3 J(const highp vec3 K, const vec2 o) {\n  vec2 N = o + vec2(materialParams.resolution.z, .0);\n  vec2 O = o + vec2(.0, materialParams.resolution.w);\n  highp vec3 px = G(N, F(N));\n  highp vec3 py = G(O, F(O));\n  highp vec3 L = px - K;\n  highp vec3 M = py - K;\n  return cross(L, M);\n}\nfloat P(const highp vec3 Q, const highp float R, mat3 S, const vec3 T, const vec3 U) {\n  highp mat4 E = A();\n  float V = materialParams.radius;\n  float W = materialParams.bias;\n  highp vec3 X = S * U;\n  float Y = dot(X, T);\n  X = sign(Y) * X;\n  X = Q + X * V;\n  highp vec4 Z = E * vec4(X, 1.);\n  Z.xy = Z.xy * (.5 / Z.w) + .5;\n  highp float ba = C(Z.xy);\n  ba = D(ba);\n  float t = saturate(V / abs(R - ba));\n  float bb = t * t * (3. - 2. * t);\n  return (ba >= X.z + W ? bb : .0);\n}\nvoid main() {\n  highp vec2 o = vTexCoord;\n  highp float h = C(o);\n  highp float bc = D(h);\n  highp vec3 Q = G(o, bc);\n  highp vec3 T = J(Q, o);\n  T = normalize(T);\n  vec3 bd = m(o);\n  vec3 be = bd.xyz;\n  vec3 bf = normalize(be - T * dot(be, T));\n  vec3 bg = cross(T, bf);\n  mat3 S = mat3(bf, bg, T);\n  float bh = .0;\n  for(int bi = 0; bi < d; bi++) {\n    bh += P(Q, bc, S, T, kSphereSamples[bi]);\n  }\n  float bj = 1. - bh / float(d);\n  bj = mix(bj, bj * bj, materialParams.power);\n  glFragColor = vec4(bj, f(Q.z), 1.);\n#if __VERSION__ == 100\ngl_FragColor = glFragColor;\n#endif\n}",
	            uniforms: [ {
	                name: "kSphereSamples",
	                type: "function",
	                fn: function() {
	                    return Pn;
	                }
	            } ],
	            extraCommandProps: {
	                viewport: {
	                    x: 0,
	                    y: 0,
	                    width: (e, n) => n.outputSize[0],
	                    height: (e, n) => n.outputSize[1]
	                }
	            }
	        }), this.version = 300;
	    }
	    getMeshCommand(e, n) {
	        return this.commands.ssao_extract || (this.commands.ssao_extract = this.createREGLCommand(e, null, n.getElements())), 
	        this.commands.ssao_extract;
	    }
	}

	const wn = [];

	class Rn {
	    constructor(e) {
	        this._renderer = e;
	    }
	    render(e, n, t) {
	        const {width: r, height: i} = t;
	        return this._initShaders(), this._extractFBO || this._createTextures(t), this._extract(e, r, i, t), 
	        this._blurAndCombine(n, e.cameraFar, r, i);
	    }
	    _blurAndCombine(e, n, t, r) {
	        const i = Math.floor(t / 2), o = Math.floor(r / 2);
	        this._blurHTex.width === i && this._blurHTex.height === o || (this._blurHFBO.resize(i, o), 
	        this._blurVFBO.resize(t, r));
	        const a = [ t, r ], s = [ 1, 0 ];
	        return this._renderer.render(this._ssaoBlurShader, {
	            TextureInput: e,
	            materialParams_ssao: this._extractTex,
	            materialParams: {
	                axis: s,
	                farPlaneOverEdgeDistance: -n / .0625,
	                resolution: a
	            },
	            outputSize: [ i, o ]
	        }, null, this._blurHFBO), s[0] = 0, s[1] = 1, this._renderer.render(this._ssaoBlurShader, {
	            TextureInput: e,
	            materialParams_ssao: this._blurHTex,
	            materialParams: {
	                axis: s,
	                farPlaneOverEdgeDistance: -n / .0625,
	                resolution: a
	            },
	            outputSize: [ t, r ]
	        }, null, this._blurVFBO), this._blurVTex;
	    }
	    _extract(e, t, r, i) {
	        const o = Math.floor(t / 2), a = Math.floor(r / 2);
	        this._extractFBO.width === o && this._extractFBO.height === a || this._extractFBO.resize(o, a);
	        const {projMatrix: s} = e, c = invert$2(wn, s);
	        this._renderer.render(this._ssaoExtractShader, {
	            materialParams_depth: i,
	            materialParams: {
	                projMatrix: s,
	                invProjMatrix: c,
	                resolution: [ o, a, 1 / o, 1 / a ],
	                radius: e.radius,
	                bias: e.bias,
	                power: e.power || 1,
	                cameraNearFar: [ e.cameraNear, e.cameraFar ]
	            },
	            outputSize: [ o, a ]
	        }, null, this._extractFBO);
	    }
	    _createTextures(e) {
	        const n = Math.floor(e.width / 2), t = Math.floor(e.height / 2);
	        this._extractTex = this._createTex(n, t, "uint8"), this._extractFBO = this._createFBO(this._extractTex), 
	        this._blurHTex = this._createTex(n, t, "uint8"), this._blurHFBO = this._createFBO(this._blurHTex), 
	        this._blurVTex = this._createTex(e.width, e.height, "uint8"), this._blurVFBO = this._createFBO(this._blurVTex);
	    }
	    _createTex(e, n, t) {
	        return this._renderer.regl.texture({
	            min: "linear",
	            mag: "linear",
	            wrap: "clamp",
	            type: t,
	            width: e,
	            height: n
	        });
	    }
	    _createFBO(e) {
	        return this._renderer.regl.framebuffer({
	            width: e.width,
	            height: e.height,
	            colors: [ e ],
	            depth: !1,
	            stencil: !1
	        });
	    }
	    dispose() {
	        this._extractFBO && (this._extractFBO.destroy(), delete this._extractFBO, this._blurVFBO.destroy(), 
	        this._blurHFBO.destroy(), this._ssaoExtractShader.dispose(), this._ssaoBlurShader.dispose(), 
	        delete this._ssaoExtractShader);
	    }
	    _initShaders() {
	        this._ssaoExtractShader || (this._ssaoExtractShader = new In, this._ssaoBlurShader = new En);
	    }
	}

	class Dn extends Mn {
	    constructor() {
	        super({
	            vert: An,
	            frag: "precision mediump float;\nvarying vec2 vTexCoord;\nuniform vec2 resolution;\nuniform sampler2D textureSource;\nuniform float enableVignette;\nuniform float enableGrain;\nuniform float enableLut;\nuniform float timeGrain;\nuniform float grainFactor;\nuniform vec2 lensRadius;\nuniform float frameMod;\nuniform sampler2D lookupTable;\nfloat c(const in vec2 d) {\n  vec3 e = fract(vec3(d.xyx) * .1031);\n  e += dot(e, e.yzx + 19.19);\n  return fract((e.x + e.y) * e.z);\n}\nfloat f() {\n  float h = c(gl_FragCoord.xy + 1000.0 * fract(timeGrain));\n  float i = h * 2. - 1.;\n  h = i * inversesqrt(abs(i));\n  h = max(-1., h);\n  h = h - sign(i) + .5;\n  return (h + .5) * .5;\n}\nvec4 j(const in vec4 k) {\n  float l = f();\n  return vec4(mix(k.rgb, k.rgb * (k.rgb + (1. - k.rgb) * 2. * l), grainFactor), k.a);\n}\nfloat m(const in float k) {\n  return k < .0031308 ? k * 12.92 : 1.055 * pow(k, 1. / 2.4) - .055;\n}\nvec3 m(const in vec3 k) {\n  return vec3(k.r < .0031308 ? k.r * 12.92 : 1.055 * pow(k.r, 1. / 2.4) - .055, k.g < .0031308 ? k.g * 12.92 : 1.055 * pow(k.g, 1. / 2.4) - .055, k.b < .0031308 ? k.b * 12.92 : 1.055 * pow(k.b, 1. / 2.4) - .055);\n}\nvec4 m(const in vec4 k) {\n  return vec4(k.r < .0031308 ? k.r * 12.92 : 1.055 * pow(k.r, 1. / 2.4) - .055, k.g < .0031308 ? k.g * 12.92 : 1.055 * pow(k.g, 1. / 2.4) - .055, k.b < .0031308 ? k.b * 12.92 : 1.055 * pow(k.b, 1. / 2.4) - .055, k.a);\n}\nfloat n(const in float k) {\n  return k < .04045 ? k * (1. / 12.92) : pow((k + .055) * (1. / 1.055), 2.4);\n}\nvec3 n(const in vec3 k) {\n  return vec3(k.r < .04045 ? k.r * (1. / 12.92) : pow((k.r + .055) * (1. / 1.055), 2.4), k.g < .04045 ? k.g * (1. / 12.92) : pow((k.g + .055) * (1. / 1.055), 2.4), k.b < .04045 ? k.b * (1. / 12.92) : pow((k.b + .055) * (1. / 1.055), 2.4));\n}\nvec4 n(const in vec4 k) {\n  return vec4(k.r < .04045 ? k.r * (1. / 12.92) : pow((k.r + .055) * (1. / 1.055), 2.4), k.g < .04045 ? k.g * (1. / 12.92) : pow((k.g + .055) * (1. / 1.055), 2.4), k.b < .04045 ? k.b * (1. / 12.92) : pow((k.b + .055) * (1. / 1.055), 2.4), k.a);\n}\nfloat o(const in vec2 d, const in float u) {\n  vec3 v = vec3(.06711056, .00583715, 52.9829189);\n  return fract(v.z * fract(dot(d.xy + u * vec2(47., 17.) * .695, v.xy)));\n}\nfloat A() {\n  vec2 B = lensRadius;\n  B.y = min(B.y, B.x - 1e-4);\n  float C = o(gl_FragCoord.xy, frameMod);\n  C = (B.x - B.y) * (B.x + B.y) * .07 * (C - .5);\n  return smoothstep(B.x, B.y, C + distance(vTexCoord, vec2(.5)));\n}\nvec4 D(const in vec4 k) {\n  float l = A();\n  return vec4(m(n(k.rgb) * l), clamp(k.a + (1. - l), .0, 1.));\n}\nvec4 E(in vec4 F, in sampler2D G) {\n  mediump float H = F.b * 63.;\n  mediump vec2 I;\n  I.y = floor(floor(H) / 8.);\n  I.x = floor(H) - I.y * 8.;\n  mediump vec2 J;\n  J.y = floor(ceil(H) / 8.);\n  J.x = ceil(H) - J.y * 8.;\n  highp vec2 K;\n  K.x = I.x * .125 + .5 / 512. + (.125 - 1. / 512.) * F.r;\n  K.y = I.y * .125 + .5 / 512. + (.125 - 1. / 512.) * F.g;\n#ifdef LUT_FLIP_Y\nK.y = 1. - K.y;\n#endif\nhighp vec2 L;\n  L.x = J.x * .125 + .5 / 512. + (.125 - 1. / 512.) * F.r;\n  L.y = J.y * .125 + .5 / 512. + (.125 - 1. / 512.) * F.g;\n#ifdef LUT_FLIP_Y\nL.y = 1. - L.y;\n#endif\nlowp vec4 M = texture2D(G, K);\n  lowp vec4 N = texture2D(G, L);\n  lowp vec4 O = mix(M, N, fract(H));\n  return O;\n}\nvoid main() {\n  vec4 k = texture2D(textureSource, vTexCoord);\n  if(enableLut == 1.) {\n    k = E(k, lookupTable);\n  }\n  if(enableVignette == 1.) {\n    k = D(k);\n  }\n  if(enableGrain == 1.) {\n    k = j(k);\n  }\n  gl_FragColor = k;\n}",
	            extraCommandProps: {
	                viewport: {
	                    x: 0,
	                    y: 0,
	                    width: (e, n) => n.resolution[0],
	                    height: (e, n) => n.resolution[1]
	                }
	            }
	        });
	    }
	    getMeshCommand(e, n) {
	        return this.commands.postprocess || (this.commands.postprocess = this.createREGLCommand(e, null, n.getElements())), 
	        this.commands.postprocess;
	    }
	}

	class Nn extends Mn {
	    constructor() {
	        super({
	            vert: An,
	            frag: "#define SHADER_NAME TAA\nprecision mediump float;\n#define saturate(x)        clamp(x, 0.0, 1.0)\n#if defined(TARGET_METAL_ENVIRONMENT) || defined(TARGET_VULKAN_ENVIRONMENT)\n#define TEXTURE_SPACE_UP    -1\n#define TEXTURE_SPACE_DN     1\n#else\n#define TEXTURE_SPACE_UP     1\n#define TEXTURE_SPACE_DN    -1\n#endif\n#define BOX_TYPE_AABB           0\n#define BOX_TYPE_VARIANCE       1\n#define BOX_TYPE_AABB_VARIANCE  2\n#define VARIANCE_GAMMA          1.0\n#define BOX_CLIPPING_ACCURATE   0\n#define BOX_CLIPPING_CLAMP      1\n#define BOX_CLIPPING_NONE       2\n#if defined(TARGET_MOBILE)\n#define BOX_CLIPPING            BOX_CLIPPING_ACCURATE\n#define BOX_TYPE                BOX_TYPE_VARIANCE\n#define USE_YCoCg               0\n#define FILTER_INPUT            1\n#define FILTER_HISTORY          0\n#else\n#define BOX_CLIPPING            BOX_CLIPPING_ACCURATE\n#define BOX_TYPE                BOX_TYPE_AABB_VARIANCE\n#define USE_YCoCg               0\n#define FILTER_INPUT            0\n#define FILTER_HISTORY          0\n#endif\n#define HISTORY_REPROJECTION    1\n#define PREVENT_FLICKERING      0\nstruct MaterialParams {\n  float alpha;\n  mat4 reprojection;\n};\nuniform sampler2D materialParams_color;\nuniform sampler2D materialParams_history;\nuniform vec2 materialParams_history_size;\nuniform vec2 textureOutputSize;\nuniform sampler2D materialParams_depth;\nuniform MaterialParams materialParams;\nfloat c(const vec3 d) {\n  return dot(d, vec3(.2126, .7152, .0722));\n}\nfloat e(const vec3 f) {\n  \n#if USE_YCoCg\nreturn f.x;\n#else\nreturn c(f);\n#endif\n}\nvec3 h(const vec3 i) {\n  float j = dot(i.rgb, vec3(1, 2, 1) * .25);\n  float k = dot(i.rgb, vec3(2, 0, -2) * .25);\n  float l = dot(i.rgb, vec3(-1, 2, -1) * .25);\n  return vec3(j, k, l);\n}\nvec3 m(const vec3 i) {\n  float j = i.x;\n  float k = i.y;\n  float l = i.z;\n  float r = j + k - l;\n  float g = j + l;\n  float b = j - k - l;\n  return vec3(r, g, b);\n}\nvec4 n(const int o, const vec3 u, const vec3 v, const vec4 i, const vec4 A) {\n  const float B = .0001;\n  if(o == BOX_CLIPPING_ACCURATE) {\n    vec4 r = i - A;\n    vec3 C = 1. / (B + r.rgb);\n    vec3 D = (v - A.rgb) * C;\n    vec3 E = (u - A.rgb) * C;\n    vec3 F = min(D, E);\n    return A + r * saturate(max(max(F.x, F.y), F.z));\n  } else if(o == BOX_CLIPPING_CLAMP) {\n    return vec4(clamp(A.rgb, u, v), A.a);\n  }\n  return A;\n}\nvec4 G(const sampler2D H, const highp vec2 I, const highp vec2 J) {\n  highp vec2 K = I * J;\n  highp vec2 L = floor(K - .5) + .5;\n  highp vec2 M = K - L;\n  highp vec2 N = M * M;\n  highp vec2 O = N * M;\n  vec2 P = N - .5 * (O + M);\n  vec2 Q = 1.5 * O - 2.5 * N + 1.;\n  vec2 R = .5 * (O - N);\n  vec2 S = 1. - P - Q - R;\n  vec2 T = Q + S;\n  highp vec2 U = L - vec2(1.);\n  highp vec2 V = L + vec2(2.);\n  highp vec2 W = L + S / T;\n  highp vec2 X = 1. / J;\n  U *= X;\n  V *= X;\n  W *= X;\n  float Z = T.x * P.y;\n  float ba = P.x * T.y;\n  float bb = T.x * T.y;\n  float bc = R.x * T.y;\n  float bd = T.x * R.y;\n  vec4 be = texture2D(H, vec2(W.x, U.y)) * Z + texture2D(H, vec2(U.x, W.y)) * ba + texture2D(H, vec2(W.x, W.y)) * bb + texture2D(H, vec2(V.x, W.y)) * bc + texture2D(H, vec2(W.x, V.y)) * bd;\n  be *= 1. / (Z + ba + bb + bc + bd);\n  return be;\n}\nvec4 bf(sampler2D H, vec2 I, float bg, ivec2 bh) {\n  return texture2D(H, I + vec2(bh));\n}\nvoid main() {\n  highp vec4 I = (gl_FragCoord.xy / textureOutputSize.xy).xyxy;\n  float bi = texture2D(materialParams_depth, I.xy).r;\n#if HISTORY_REPROJECTION\n#if defined(TARGET_METAL_ENVIRONMENT) || defined(TARGET_VULKAN_ENVIRONMENT)\nI.w = 1. - I.w;\n#endif\nhighp vec4 q = materialParams.reprojection * vec4(I.zw, bi, 1.);\n  I.zw = (q.xy * (1. / q.w)) * .5 + .5;\n#if defined(TARGET_METAL_ENVIRONMENT) || defined(TARGET_VULKAN_ENVIRONMENT)\nI.w = 1. - I.w;\n#endif\n#endif\nvec4 f = bf(materialParams_color, I.xy, .0, ivec2(0));\n#if FILTER_HISTORY\nvec4 bj = G(materialParams_history, I.zw, materialParams_history_size);\n#else\nvec4 bj = texture2D(materialParams_history, I.zw);\n#endif\n#if USE_YCoCg\nbj.rgb = h(bj.rgb);\n#endif\nvec3 s[9];\n  s[0] = bf(materialParams_color, I.xy, .0, ivec2(-1, TEXTURE_SPACE_DN)).rgb;\n  s[1] = bf(materialParams_color, I.xy, .0, ivec2(0, TEXTURE_SPACE_DN)).rgb;\n  s[2] = bf(materialParams_color, I.xy, .0, ivec2(1, TEXTURE_SPACE_DN)).rgb;\n  s[3] = bf(materialParams_color, I.xy, .0, ivec2(-1, 0)).rgb;\n  s[4] = f.rgb;\n  s[5] = bf(materialParams_color, I.xy, .0, ivec2(1, 0)).rgb;\n  s[6] = bf(materialParams_color, I.xy, .0, ivec2(-1, TEXTURE_SPACE_UP)).rgb;\n  s[7] = bf(materialParams_color, I.xy, .0, ivec2(0, TEXTURE_SPACE_UP)).rgb;\n  s[8] = bf(materialParams_color, I.xy, .0, ivec2(1, TEXTURE_SPACE_UP)).rgb;\n#if USE_YCoCg\nfor(int bk = 0; bk < 9; bk++) {\n    s[bk] = h(s[bk]);\n  }\n  f.rgb = s[4].rgb;\n#endif\n#if FILTER_INPUT\n#else\nvec4 bl = f;\n#endif\n#if BOX_TYPE == BOX_TYPE_AABB || BOX_TYPE == BOX_TYPE_AABB_VARIANCE\nvec3 u = min(s[4], min(min(s[1], s[3]), min(s[5], s[7])));\n  vec3 v = max(s[4], max(max(s[1], s[3]), max(s[5], s[7])));\n  vec3 bm = min(u, min(min(s[0], s[2]), min(s[6], s[8])));\n  vec3 bn = max(v, max(max(s[0], s[2]), max(s[6], s[8])));\n  u = (u + bm) * .5;\n  v = (v + bn) * .5;\n#endif\n#if BOX_TYPE == BOX_TYPE_VARIANCE || BOX_TYPE == BOX_TYPE_AABB_VARIANCE\nvec3 bo = s[4];\n  vec3 bp = s[4] * s[4];\n  for(int bk = 1; bk < 9; bk += 2) {\n    bo += s[bk];\n    bp += s[bk] * s[bk];\n  }\n  vec3 bq = bo * (1. / 5.);\n  vec3 br = bp * (1. / 5.);\n  vec3 bs = sqrt(br - bq * bq);\n#if BOX_TYPE == BOX_TYPE_VARIANCE\nvec3 u = bq - VARIANCE_GAMMA * bs;\n  vec3 v = bq + VARIANCE_GAMMA * bs;\n#else\nu = min(u, bq - VARIANCE_GAMMA * bs);\n  v = max(v, bq + VARIANCE_GAMMA * bs);\n#endif\n#endif\nfloat bt = e(bl.rgb);\n  float bu = e(bj.rgb);\n  float bv = materialParams.alpha;\n#if PREVENT_FLICKERING\nfloat bw = 1. - abs(bt - bu) / (.001 + max(bt, bu));\n  bv *= bw * bw;\n#endif\nbl.rgb *= 1. / (1. + bt);\n  bj.rgb *= 1. / (1. + bu);\n  vec4 be = mix(bj, bl, bv);\n  be.rgb *= 1. / (1. - e(be.rgb));\n#if USE_YCoCg\nbe.rgb = m(be.rgb);\n#endif\nbe = max(vec4(0), be);\n  gl_FragColor = be;\n}",
	            extraCommandProps: {
	                viewport: {
	                    x: 0,
	                    y: 0,
	                    width: (e, n) => n.materialParams_color.width,
	                    height: (e, n) => n.materialParams_color.height
	                },
	                blend: {
	                    enable: !1
	                }
	            }
	        });
	    }
	    getMeshCommand(e, n) {
	        return this.commands.taa || (this.commands.taa = this.createREGLCommand(e, null, n.getElements())), 
	        this.commands.taa;
	    }
	}

	const Fn = [ 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, -2, 0, -1, -1, 1, 1 ];

	class Hn {
	    constructor(e, n) {
	        this._jitter = n, this._renderer = e, this._halton = [], this._counter = 0;
	    }
	    needToRedraw() {
	        return this._counter < this._jitter.getSampleCount();
	    }
	    render(e, t, r, i) {
	        const a = this._jitter;
	        this._initShaders(), this._createTextures(e), i && (this._counter = 0), this._counter++;
	        const s = a.getSampleCount();
	        if (this._counter >= s) return this._prevTex;
	        this._fbo.width === e.width && this._fbo.height === e.height || this._fbo.resize(e.width, e.height);
	        const c = this._outputTex, l = this._prevTex, f = this._uniforms || {
	            materialParams_history_size: [ l.width, l.height ],
	            textureOutputSize: [],
	            materialParams: {
	                alpha: 1,
	                reprojection: [],
	                filterWeights: []
	            }
	        };
	        f.materialParams.alpha = 1 / this._counter;
	        const d = f.materialParams.reprojection;
	        multiply$5(d, this._prevProjMatrix || r, invert$2(d, r)), multiply$5(d, d, Fn), 
	        set(f.materialParams_history_size, l.width, l.height), set(f.textureOutputSize, e.width, e.height), 
	        f.materialParams_depth = t, f.materialParams_color = e, f.materialParams_history = l, 
	        this._renderer.render(this._shader, f, null, this._fbo);
	        const u = this._outputTex, h = this._fbo;
	        return this._outputTex = this._prevTex, this._fbo = this._prevFbo, this._prevTex = u, 
	        this._prevFbo = h, this._prevProjMatrix = copy$5(this._prevProjMatrix || [], r), 
	        c;
	    }
	    dispose() {
	        this._shader && (this._shader.dispose(), delete this._shader), this._fbo && this._fbo.destroy(), 
	        this._prevFbo && this._prevFbo.destroy(), delete this._uniforms;
	    }
	    _createTextures(e) {
	        if (this._outputTex) return;
	        const n = this._renderer.regl;
	        this._outputTex = this._createColorTex(e), this._fbo = n.framebuffer({
	            width: e.width,
	            height: e.height,
	            colors: [ this._outputTex ],
	            depth: !1,
	            stencil: !1
	        }), this._prevTex = this._createColorTex(e), this._prevFbo = n.framebuffer({
	            width: e.width,
	            height: e.height,
	            colors: [ this._prevTex ],
	            depth: !1,
	            stencil: !1
	        });
	    }
	    _createColorTex(e) {
	        return this._renderer.regl.texture({
	            min: "linear",
	            mag: "linear",
	            type: "uint8",
	            width: e.width,
	            height: e.height
	        });
	    }
	    _initShaders() {
	        this._shader || (this._shader = new Nn);
	    }
	}

	const Ln = [ [ .263385, -.0252475 ], [ -.38545, .054485 ], [ -.139795, -.5379925 ], [ -.2793775, .6875475 ], [ .7139025, .4710925 ], [ .90044, -.16422 ], [ .4481775, -.82799 ], [ -.9253375, -.2910625 ], [ .3468025, 1.02292 ], [ -1.13742, .33522 ], [ -.7676225, -.9123175 ], [ -.2005775, -1.1774125 ], [ -.926525, .96876 ], [ 1.12909, -.7500325 ], [ .9603, 1.14625 ] ], zn = Ln.length, Bn = [ 0, 0 ];

	for (let e = 0; e < Ln.length; e++) Bn[0] += Ln[e][0], Bn[1] += Ln[e][1];

	Bn[0] /= zn, Bn[1] /= zn;

	class kn {
	    constructor(e) {
	        this._frameNum = 0, this._ratio = e || .05, this._avg = [ Bn[0] * this._ratio, Bn[1] * this._ratio ];
	    }
	    getRatio() {
	        return this._ratio;
	    }
	    setRatio(e) {
	        this._ratio !== e && (this._ratio = e, this.reset()), this._avg = [ Bn[0] * this._ratio, Bn[1] * this._ratio ];
	    }
	    getAverage() {
	        return this._avg;
	    }
	    reset() {
	        this._frameNum = 0;
	    }
	    getJitter(e) {
	        const n = this._frameNum % zn, t = this._ratio;
	        return set(e, Ln[n][0] * t, Ln[n][1] * t), e;
	    }
	    frame() {
	        this._frameNum++, this._frameNum % zn == 0 && (this._frameNum = 0);
	    }
	    getSampleCount() {
	        return zn;
	    }
	}

	class Gn {
	    constructor(e, n, t = 5) {
	        this._regl = e, this._renderer = new k$1(e), this._inputRGBM = n, this._level = t;
	    }
	    render(e, n) {
	        this._initShaders(), this._createTextures(e), this._blur(e, n || 0);
	        const t = {
	            blurTex0: this._blur01Tex,
	            blurTex1: this._blur11Tex,
	            blurTex2: this._blur21Tex,
	            blurTex3: this._blur31Tex,
	            blurTex4: this._blur41Tex
	        };
	        return this._level > 5 && (t.blurTex5 = this._blur51Tex, t.blurTex6 = this._blur61Tex), 
	        t;
	    }
	    _blur(e, n) {
	        let t = this._blurUniforms;
	        t || (t = this._blurUniforms = {
	            rgbmRange: 7,
	            blurDir: [ 0, 0 ],
	            outSize: [ 0, 0 ],
	            pixelRatio: [ 1, 1 ],
	            outputSize: [ 0, 0 ]
	        }), set(t.outSize, e.width, e.height), this._blurOnce(this._blur0Shader, e, this._blur00FBO, this._blur01FBO, .5, n), 
	        this._blurOnce(this._blur1Shader, this._blur01FBO.color[0], this._blur10FBO, this._blur11FBO, .5), 
	        this._blurOnce(this._blur2Shader, this._blur11FBO.color[0], this._blur20FBO, this._blur21FBO, .5), 
	        this._blurOnce(this._blur3Shader, this._blur21FBO.color[0], this._blur30FBO, this._blur31FBO, .5), 
	        this._blurOnce(this._blur4Shader, this._blur31FBO.color[0], this._blur40FBO, this._blur41FBO, .5), 
	        this._level > 5 && (this._blurOnce(this._blur5Shader, this._blur41FBO.color[0], this._blur50FBO, this._blur51FBO, .5), 
	        this._blurOnce(this._blur6Shader, this._blur51FBO.color[0], this._blur60FBO, this._blur51FBO, .5));
	    }
	    _blurOnce(e, n, t, r, i, a) {
	        const s = Math.ceil(i * n.width), c = Math.ceil(i * n.height);
	        t.width === s && t.height === c || t.resize(s, c), r.width === s && r.height === c || r.resize(s, c);
	        const l = this._blurUniforms;
	        l.luminThreshold = a, l.TextureBlurInput = n, l.inputRGBM = +this._inputRGBM, set(l.blurDir, 0, 1), 
	        set(l.outputSize, t.width, t.height), this._renderer.render(e, l, null, t), l.luminThreshold = 0, 
	        l.inputRGBM = 1, set(l.blurDir, 1, 0), l.TextureBlurInput = t.color[0], this._renderer.render(e, l, null, r);
	    }
	    dispose() {
	        this._blur0Shader && (this._blur0Shader.dispose(), delete this._blur0Shader, this._blur1Shader.dispose(), 
	        this._blur2Shader.dispose(), this._blur3Shader.dispose(), this._blur4Shader.dispose(), 
	        this._blur5Shader && (this._blur5Shader.dispose(), this._blur6Shader.dispose(), 
	        delete this._blur5Shader)), this._blur00Tex && (delete this._blur00Tex, this._blur00FBO.destroy(), 
	        this._blur01FBO.destroy(), this._blur10FBO.destroy(), this._blur11FBO.destroy(), 
	        this._blur20FBO.destroy(), this._blur21FBO.destroy(), this._blur30FBO.destroy(), 
	        this._blur31FBO.destroy(), this._blur40FBO.destroy(), this._blur41FBO.destroy(), 
	        this._blur50FBO && (this._blur50FBO.destroy(), this._blur51FBO.destroy(), this._blur60FBO.destroy(), 
	        this._blur61FBO.destroy()));
	    }
	    _createTextures(e) {
	        if (this._blur00Tex) return;
	        let n = e.width, t = e.height;
	        this._blur00Tex = this._createColorTex(e, n, t), this._blur00FBO = this._createBlurFBO(this._blur00Tex), 
	        this._blur01Tex = this._createColorTex(e), this._blur01FBO = this._createBlurFBO(this._blur01Tex), 
	        n = Math.ceil(n / 2), t = Math.ceil(t / 2), this._blur10Tex = this._createColorTex(e, n, t), 
	        this._blur10FBO = this._createBlurFBO(this._blur10Tex), this._blur11Tex = this._createColorTex(e, n, t), 
	        this._blur11FBO = this._createBlurFBO(this._blur11Tex), n = Math.ceil(n / 2), t = Math.ceil(t / 2), 
	        this._blur20Tex = this._createColorTex(e, n, t), this._blur20FBO = this._createBlurFBO(this._blur20Tex), 
	        this._blur21Tex = this._createColorTex(e, n, t), this._blur21FBO = this._createBlurFBO(this._blur21Tex), 
	        n = Math.ceil(n / 2), t = Math.ceil(t / 2), this._blur30Tex = this._createColorTex(e, n, t), 
	        this._blur30FBO = this._createBlurFBO(this._blur30Tex), this._blur31Tex = this._createColorTex(e, n, t), 
	        this._blur31FBO = this._createBlurFBO(this._blur31Tex), n = Math.ceil(n / 2), t = Math.ceil(t / 2), 
	        this._blur40Tex = this._createColorTex(e, n, t), this._blur40FBO = this._createBlurFBO(this._blur40Tex), 
	        this._blur41Tex = this._createColorTex(e, n, t), this._blur41FBO = this._createBlurFBO(this._blur41Tex), 
	        this._level > 5 && (n = Math.ceil(n / 2), t = Math.ceil(t / 2), this._blur50Tex = this._createColorTex(e, n, t), 
	        this._blur50FBO = this._createBlurFBO(this._blur50Tex), this._blur51Tex = this._createColorTex(e, n, t), 
	        this._blur51FBO = this._createBlurFBO(this._blur51Tex), n = Math.ceil(n / 2), t = Math.ceil(t / 2), 
	        this._blur60Tex = this._createColorTex(e, n, t), this._blur60FBO = this._createBlurFBO(this._blur60Tex), 
	        this._blur61Tex = this._createColorTex(e, n, t), this._blur61FBO = this._createBlurFBO(this._blur61Tex));
	    }
	    _createColorTex(e, n, t) {
	        return this._regl.texture({
	            min: "linear",
	            mag: "linear",
	            type: "uint8",
	            width: n || e.width,
	            height: t || e.height
	        });
	    }
	    _createBlurFBO(e) {
	        return this._regl.framebuffer({
	            width: e.width,
	            height: e.height,
	            colors: [ e ],
	            depth: !1,
	            stencil: !1
	        });
	    }
	    _initShaders() {
	        if (!this._blur0Shader) {
	            const e = {
	                vert: An,
	                extraCommandProps: {
	                    viewport: {
	                        x: 0,
	                        y: 0,
	                        width: (e, n) => n.outputSize[0],
	                        height: (e, n) => n.outputSize[1]
	                    }
	                },
	                frag: "#version 100\nprecision highp float;\nuniform float rgbmRange;\nuniform sampler2D TextureBlurInput;\nuniform sampler2D TextureInput;\nuniform vec2 blurDir;\nuniform vec2 pixelRatio;\nuniform vec2 outputSize;\nuniform float inputRGBM;\nuniform float luminThreshold;\n#define SHADER_NAME GAUSSIAN_BLUR0\nconst vec3 c = vec3(.2126, .7152, .0722);\nfloat d(const in vec3 e) {\n  return dot(e, c);\n}\nvec4 f(vec4 e) {\n  float h = max(sign(d(e.rgb) - luminThreshold), .0);\n  return e * h;\n}\nvec2 i;\nvec4 j(const in vec3 e, const in float k) {\n  vec4 l;\n  vec3 m = e / k;\n  l.a = clamp(max(max(m.r, m.g), max(m.b, 1e-6)), .0, 1.);\n  l.a = ceil(l.a * 255.) / 255.;\n  l.rgb = m / l.a;\n  return l;\n}\nvec3 n(const in vec4 e, const in float k) {\n  if(inputRGBM == .0)\n    return e.rgb;\n  return k * e.rgb * e.a;\n}\nvec4 o() {\n  vec3 u = .375 * (f(vec4(n(texture2D(TextureBlurInput, i.xy), rgbmRange), 1.))).rgb;\n  vec2 v;\n  vec2 A = pixelRatio.xy * blurDir.xy / outputSize.xy;\n  v = A * 1.2;\n  u += .3125 * (f(vec4(n(texture2D(TextureBlurInput, i.xy + v.xy), rgbmRange), 1.))).rgb;\n  u += .3125 * (f(vec4(n(texture2D(TextureBlurInput, i.xy - v.xy), rgbmRange), 1.))).rgb;\n  return vec4(u, 1.);\n}\nvoid main(void) {\n  i = gl_FragCoord.xy / outputSize.xy;\n  vec4 e = o();\n  e = j(e.rgb, rgbmRange);\n  gl_FragColor = e;\n}"
	            };
	            this._blur0Shader = new Mn(e), e.frag = "#version 100\nprecision highp float;\nuniform float rgbmRange;\nuniform sampler2D TextureBlurInput;\nuniform sampler2D TextureInput;\nuniform vec2 blurDir;\nuniform vec2 pixelRatio;\nuniform vec2 outputSize;\n#define SHADER_NAME GAUSSIAN_BLUR1\nvec2 c;\nvec4 d(const in vec3 e, const in float f) {\n  if(f <= .0)\n    return vec4(e, 1.);\n  vec4 h;\n  vec3 i = e / f;\n  h.a = clamp(max(max(i.r, i.g), max(i.b, 1e-6)), .0, 1.);\n  h.a = ceil(h.a * 255.) / 255.;\n  h.rgb = i / h.a;\n  return h;\n}\nvec3 j(const in vec4 e, const in float f) {\n  if(f <= .0)\n    return e.rgb;\n  return f * e.rgb * e.a;\n}\nvec4 k() {\n  vec3 l = .3125 * (vec4(j(texture2D(TextureBlurInput, c.xy), rgbmRange), 1.)).rgb;\n  vec2 m;\n  vec2 n = pixelRatio.xy * blurDir.xy / outputSize.xy;\n  m = n * 1.2857142857142858;\n  l += .328125 * (vec4(j(texture2D(TextureBlurInput, c.xy + m.xy), rgbmRange), 1.)).rgb;\n  l += .328125 * (vec4(j(texture2D(TextureBlurInput, c.xy - m.xy), rgbmRange), 1.)).rgb;\n  return vec4(l, 1.);\n}\nvoid main(void) {\n  c = gl_FragCoord.xy / outputSize.xy;\n  vec4 e = k();\n  e = d(e.rgb, rgbmRange);\n  gl_FragColor = e;\n}", 
	            this._blur1Shader = new Mn(e), e.frag = "#version 100\nprecision highp float;\nuniform float rgbmRange;\nuniform sampler2D TextureBlurInput;\nuniform sampler2D TextureInput;\nuniform vec2 blurDir;\nuniform vec2 pixelRatio;\nuniform vec2 outputSize;\n#define SHADER_NAME GAUSSIAN_BLUR2\nvec2 c;\nvec4 d(const in vec3 e, const in float f) {\n  if(f <= .0)\n    return vec4(e, 1.);\n  vec4 h;\n  vec3 i = e / f;\n  h.a = clamp(max(max(i.r, i.g), max(i.b, 1e-6)), .0, 1.);\n  h.a = ceil(h.a * 255.) / 255.;\n  h.rgb = i / h.a;\n  return h;\n}\nvec3 j(const in vec4 e, const in float f) {\n  if(f <= .0)\n    return e.rgb;\n  return f * e.rgb * e.a;\n}\nvec4 k() {\n  vec3 l = .2734375 * (vec4(j(texture2D(TextureBlurInput, c.xy), rgbmRange), 1.)).rgb;\n  vec2 m;\n  vec2 n = pixelRatio.xy * blurDir.xy / outputSize.xy;\n  m = n * 1.3333333333333333;\n  l += .328125 * (vec4(j(texture2D(TextureBlurInput, c.xy + m.xy), rgbmRange), 1.)).rgb;\n  l += .328125 * (vec4(j(texture2D(TextureBlurInput, c.xy - m.xy), rgbmRange), 1.)).rgb;\n  m = n * 3.111111111111111;\n  l += .03515625 * (vec4(j(texture2D(TextureBlurInput, c.xy + m.xy), rgbmRange), 1.)).rgb;\n  l += .03515625 * (vec4(j(texture2D(TextureBlurInput, c.xy - m.xy), rgbmRange), 1.)).rgb;\n  return vec4(l, 1.);\n}\nvoid main(void) {\n  c = gl_FragCoord.xy / outputSize.xy;\n  vec4 e = k();\n  e = d(e.rgb, rgbmRange);\n  gl_FragColor = e;\n}", 
	            this._blur2Shader = new Mn(e), e.frag = "#version 100\nprecision highp float;\nuniform float rgbmRange;\nuniform sampler2D TextureBlurInput;\nuniform sampler2D TextureInput;\nuniform vec2 blurDir;\nuniform vec2 pixelRatio;\nuniform vec2 outputSize;\n#define SHADER_NAME GAUSSIAN_BLUR3\nvec2 c;\nvec4 d(const in vec3 e, const in float f) {\n  if(f <= .0)\n    return vec4(e, 1.);\n  vec4 h;\n  vec3 i = e / f;\n  h.a = clamp(max(max(i.r, i.g), max(i.b, 1e-6)), .0, 1.);\n  h.a = ceil(h.a * 255.) / 255.;\n  h.rgb = i / h.a;\n  return h;\n}\nvec3 j(const in vec4 e, const in float f) {\n  if(f <= .0)\n    return e.rgb;\n  return f * e.rgb * e.a;\n}\nvec4 k() {\n  vec3 l = .24609375 * (vec4(j(texture2D(TextureBlurInput, c.xy), rgbmRange), 1.)).rgb;\n  vec2 m;\n  vec2 n = pixelRatio.xy * blurDir.xy / outputSize.xy;\n  m = n * 1.3636363636363635;\n  l += .322265625 * (vec4(j(texture2D(TextureBlurInput, c.xy + m.xy), rgbmRange), 1.)).rgb;\n  l += .322265625 * (vec4(j(texture2D(TextureBlurInput, c.xy - m.xy), rgbmRange), 1.)).rgb;\n  m = n * 3.1818181818181817;\n  l += .0537109375 * (vec4(j(texture2D(TextureBlurInput, c.xy + m.xy), rgbmRange), 1.)).rgb;\n  l += .0537109375 * (vec4(j(texture2D(TextureBlurInput, c.xy - m.xy), rgbmRange), 1.)).rgb;\n  return vec4(l, 1.);\n}\nvoid main(void) {\n  c = gl_FragCoord.xy / outputSize.xy;\n  vec4 e = k();\n  e = d(e.rgb, rgbmRange);\n  gl_FragColor = e;\n}", 
	            this._blur3Shader = new Mn(e), e.frag = "#version 100\nprecision highp float;\nuniform float rgbmRange;\nuniform sampler2D TextureBlurInput;\nuniform sampler2D TextureInput;\nuniform vec2 blurDir;\nuniform vec2 pixelRatio;\nuniform vec2 outputSize;\n#define SHADER_NAME GAUSSIAN_BLUR4\nvec2 c;\nvec4 d(const in vec3 e, const in float f) {\n  if(f <= .0)\n    return vec4(e, 1.);\n  vec4 h;\n  vec3 i = e / f;\n  h.a = clamp(max(max(i.r, i.g), max(i.b, 1e-6)), .0, 1.);\n  h.a = ceil(h.a * 255.) / 255.;\n  h.rgb = i / h.a;\n  return h;\n}\nvec3 j(const in vec4 e, const in float f) {\n  if(f <= .0)\n    return e.rgb;\n  return f * e.rgb * e.a;\n}\nvec4 k() {\n  vec3 l = .2255859375 * (vec4(j(texture2D(TextureBlurInput, c.xy), rgbmRange), 1.)).rgb;\n  vec2 m;\n  vec2 n = pixelRatio.xy * blurDir.xy / outputSize.xy;\n  m = n * 1.3846153846153846;\n  l += .314208984375 * (vec4(j(texture2D(TextureBlurInput, c.xy + m.xy), rgbmRange), 1.)).rgb;\n  l += .314208984375 * (vec4(j(texture2D(TextureBlurInput, c.xy - m.xy), rgbmRange), 1.)).rgb;\n  m = n * 3.230769230769231;\n  l += .06982421875 * (vec4(j(texture2D(TextureBlurInput, c.xy + m.xy), rgbmRange), 1.)).rgb;\n  l += .06982421875 * (vec4(j(texture2D(TextureBlurInput, c.xy - m.xy), rgbmRange), 1.)).rgb;\n  m = n * 5.076923076923077;\n  l += .003173828125 * (vec4(j(texture2D(TextureBlurInput, c.xy + m.xy), rgbmRange), 1.)).rgb;\n  l += .003173828125 * (vec4(j(texture2D(TextureBlurInput, c.xy - m.xy), rgbmRange), 1.)).rgb;\n  return vec4(l, 1.);\n}\nvoid main(void) {\n  c = gl_FragCoord.xy / outputSize.xy;\n  vec4 e = k();\n  e = d(e.rgb, rgbmRange);\n  gl_FragColor = e;\n}", 
	            this._blur4Shader = new Mn(e), this._level > 5 && (e.frag = "precision highp float;\nuniform float rgbmRange;\nuniform sampler2D TextureBlurInput;\nuniform sampler2D TextureInput;\nuniform vec2 blurDir;\nuniform vec2 outSize;\nuniform vec2 pixelRatio;\nuniform vec2 outputSize;\n#define SHADER_NAME GAUSSIAN_BLUR5\nvec2 c;\nvec4 d(const in vec3 e, const in float f) {\n  if(f <= .0)\n    return vec4(e, 1.);\n  vec4 h;\n  vec3 i = e / f;\n  h.a = clamp(max(max(i.r, i.g), max(i.b, 1e-6)), .0, 1.);\n  h.a = ceil(h.a * 255.) / 255.;\n  h.rgb = i / h.a;\n  return h;\n}\nvec3 j(const in vec4 e, const in float f) {\n  if(f <= .0)\n    return e.rgb;\n  return f * e.rgb * e.a;\n}\nvec4 k() {\n  vec3 l = .20947265625 * (vec4(j(texture2D(TextureBlurInput, c.xy), rgbmRange), 1.)).rgb;\n  vec2 m;\n  vec2 n = pixelRatio.xy * blurDir.xy / outputSize.xy;\n  n *= outSize.y * .00075;\n  m = n * 1.4;\n  l += .30548095703125 * (vec4(j(texture2D(TextureBlurInput, c.xy + m.xy), rgbmRange), 1.)).rgb;\n  l += .30548095703125 * (vec4(j(texture2D(TextureBlurInput, c.xy - m.xy), rgbmRange), 1.)).rgb;\n  m = n * 3.2666666666666666;\n  l += .08331298828125 * (vec4(j(texture2D(TextureBlurInput, c.xy + m.xy), rgbmRange), 1.)).rgb;\n  l += .08331298828125 * (vec4(j(texture2D(TextureBlurInput, c.xy - m.xy), rgbmRange), 1.)).rgb;\n  m = n * 5.133333333333334;\n  l += .00640869140625 * (vec4(j(texture2D(TextureBlurInput, c.xy + m.xy), rgbmRange), 1.)).rgb;\n  l += .00640869140625 * (vec4(j(texture2D(TextureBlurInput, c.xy - m.xy), rgbmRange), 1.)).rgb;\n  return vec4(l, 1.);\n}\nvoid main(void) {\n  c = gl_FragCoord.xy / outputSize.xy;\n  vec4 e = k();\n  e = d(e.rgb, rgbmRange);\n  gl_FragColor = e;\n}", 
	            this._blur5Shader = new Mn(e), e.frag = "#version 100\nprecision highp float;\nuniform float rgbmRange;\nuniform sampler2D TextureBlurInput;\nuniform sampler2D TextureInput;\nuniform vec2 blurDir;\nuniform vec2 outSize;\nuniform vec2 pixelRatio;\nuniform vec2 outputSize;\n#define SHADER_NAME GAUSSIAN_BLUR6\nvec2 c;\nvec4 d(const in vec3 e, const in float f) {\n  if(f <= .0)\n    return vec4(e, 1.);\n  vec4 h;\n  vec3 i = e / f;\n  h.a = clamp(max(max(i.r, i.g), max(i.b, 1e-6)), .0, 1.);\n  h.a = ceil(h.a * 255.) / 255.;\n  h.rgb = i / h.a;\n  return h;\n}\nvec3 j(const in vec4 e, const in float f) {\n  if(f <= .0)\n    return e.rgb;\n  return f * e.rgb * e.a;\n}\nvec4 k() {\n  vec3 l = .196380615234375 * (vec4(j(texture2D(TextureBlurInput, c.xy), rgbmRange), 1.)).rgb;\n  vec2 m;\n  vec2 n = pixelRatio.xy * blurDir.xy / outputSize.xy;\n  n *= outSize.y * .00075;\n  m = n * 1.411764705882353;\n  l += .2967529296875 * (vec4(j(texture2D(TextureBlurInput, c.xy + m.xy), rgbmRange), 1.)).rgb;\n  l += .2967529296875 * (vec4(j(texture2D(TextureBlurInput, c.xy - m.xy), rgbmRange), 1.)).rgb;\n  m = n * 3.2941176470588234;\n  l += .09442138671875 * (vec4(j(texture2D(TextureBlurInput, c.xy + m.xy), rgbmRange), 1.)).rgb;\n  l += .09442138671875 * (vec4(j(texture2D(TextureBlurInput, c.xy - m.xy), rgbmRange), 1.)).rgb;\n  m = n * 5.176470588235294;\n  l += .0103759765625 * (vec4(j(texture2D(TextureBlurInput, c.xy + m.xy), rgbmRange), 1.)).rgb;\n  l += .0103759765625 * (vec4(j(texture2D(TextureBlurInput, c.xy - m.xy), rgbmRange), 1.)).rgb;\n  return vec4(l, 1.);\n}\nvoid main(void) {\n  c = gl_FragCoord.xy / outputSize.xy;\n  vec4 e = k();\n  e = d(e.rgb, rgbmRange);\n  gl_FragColor = e;\n}", 
	            this._blur6Shader = new Mn(e));
	        }
	    }
	}

	class Un {
	    constructor(e) {
	        this._regl = e, this._renderer = new k$1(e);
	    }
	    render(e, n, t, r, i, o, a, s, c) {
	        this._initShaders(), this._createTextures(e);
	        const l = this._blurPass.render(n, t);
	        return this._combine(e, l, n, r, i, o, a, s, c);
	    }
	    _combine(e, n, t, r, i, a, s, c, l) {
	        l || this._combineTex.width === e.width && this._combineTex.height === e.height || this._combineFBO.resize(e.width, e.height);
	        let f = this._combineUniforms;
	        const {blurTex0: d, blurTex1: u, blurTex2: h, blurTex3: m, blurTex4: v} = n;
	        f || (f = this._combineUniforms = {
	            bloomFactor: 0,
	            bloomRadius: 0,
	            rgbmRange: 7,
	            TextureBloomBlur1: d,
	            TextureBloomBlur2: u,
	            TextureBloomBlur3: h,
	            TextureBloomBlur4: m,
	            TextureBloomBlur5: v,
	            TextureInput: null,
	            TextureSource: null,
	            outputSize: [ 0, 0 ]
	        }), f.noAaTextureSource = a, f.pointTextureSource = s, f.enableAA = c, f.bloomFactor = r, 
	        f.bloomRadius = i, f.TextureInput = t, f.TextureSource = e, set(f.outputSize, e.width, e.height);
	        const _ = {};
	        return a ? _.HAS_NOAA_TEX = 1 : delete _.HAS_NOAA_TEX, s ? _.HAS_POINT_TEX = 1 : delete _.HAS_POINT_TEX, 
	        this._combineShader.setDefines(_), this._renderer.render(this._combineShader, f, null, l ? null : this._combineFBO), 
	        l ? null : this._combineTex;
	    }
	    dispose() {
	        this._combineFBO && (this._combineFBO.destroy(), delete this._combineFBO), this._blurPass && (this._blurPass.dispose(), 
	        delete this._blurPass), delete this._uniforms;
	    }
	    _createTextures(e) {
	        if (this._combineTex) return;
	        this._combineTex = this._createColorTex(e, e.width, e.height, "uint8"), this._combineFBO = this._createBlurFBO(this._combineTex);
	    }
	    _createColorTex(e, n, t, r) {
	        return this._renderer.regl.texture({
	            min: "linear",
	            mag: "linear",
	            type: r,
	            width: n || e.width,
	            height: t || e.height
	        });
	    }
	    _createBlurFBO(e) {
	        return this._renderer.regl.framebuffer({
	            width: e.width,
	            height: e.height,
	            colors: [ e ],
	            depth: !1,
	            stencil: !1
	        });
	    }
	    _initShaders() {
	        if (!this._combineShader) {
	            const e = {
	                x: 0,
	                y: 0,
	                width: (e, n) => n.outputSize[0],
	                height: (e, n) => n.outputSize[1]
	            };
	            this._blurPass = new Gn(this._regl, !1), this._combineShader = new Mn({
	                vert: An,
	                frag: "#define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#define FXAA_SPAN_MAX     8.0\nprecision highp float;\nuniform float bloomFactor;\nuniform float bloomRadius;\nuniform float rgbmRange;\nuniform sampler2D TextureBloomBlur1;\nuniform sampler2D TextureBloomBlur2;\nuniform sampler2D TextureBloomBlur3;\nuniform sampler2D TextureBloomBlur4;\nuniform sampler2D TextureBloomBlur5;\nuniform sampler2D TextureInput;\nuniform sampler2D TextureSource;\n#ifdef HAS_NOAA_TEX\nuniform sampler2D noAaTextureSource;\n#endif\n#ifdef HAS_POINT_TEX\nuniform sampler2D pointTextureSource;\n#endif\nuniform float enableAA;\nuniform vec2 outputSize;\n#define SHADER_NAME bloomCombine\nvec2 c;\nvec3 d(const in vec3 e) {\n  return vec3(e.r < .0031308 ? e.r * 12.92 : 1.055 * pow(e.r, 1. / 2.4) - .055, e.g < .0031308 ? e.g * 12.92 : 1.055 * pow(e.g, 1. / 2.4) - .055, e.b < .0031308 ? e.b * 12.92 : 1.055 * pow(e.b, 1. / 2.4) - .055);\n}\nvec3 f(const in vec4 e, const in float h) {\n  if(h <= .0)\n    return e.rgb;\n  return h * e.rgb * e.a;\n}\nfloat i(const float j, const float k) {\n  return mix(j, k * 2. - j, bloomRadius);\n}\nvec4 l(sampler2D m, vec2 n) {\n  vec4 e;\n  mediump vec2 o = vec2(1. / outputSize.x, 1. / outputSize.y);\n  vec3 u = texture2D(m, (n + vec2(-1., -1.)) * o).xyz;\n  vec3 v = texture2D(m, (n + vec2(1., -1.)) * o).xyz;\n  vec3 A = texture2D(m, (n + vec2(-1., 1.)) * o).xyz;\n  vec3 B = texture2D(m, (n + vec2(1.)) * o).xyz;\n  vec4 C = texture2D(m, n * o);\n  vec3 D = C.xyz;\n  vec3 E = vec3(.299, .587, .114);\n  float F = dot(u, E);\n  float G = dot(v, E);\n  float H = dot(A, E);\n  float I = dot(B, E);\n  float J = dot(D, E);\n  float K = min(J, min(min(F, G), min(H, I)));\n  float L = max(J, max(max(F, G), max(H, I)));\n  mediump vec2 M;\n  M.x = -((F + G) - (H + I));\n  M.y = (F + H) - (G + I);\n  float N = max((F + G + H + I) * (.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n  float O = 1. / (min(abs(M.x), abs(M.y)) + N);\n  M = min(vec2(FXAA_SPAN_MAX), max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX), M * O)) * o;\n  vec4 P = .5 * (texture2D(m, n * o + M * (1. / 3. - .5)) + texture2D(m, n * o + M * (2. / 3. - .5)));\n  vec4 Q = P * .5 + .25 * (texture2D(m, n * o + M * -.5) + texture2D(m, n * o + M * .5));\n  float R = dot(Q.xyz, E);\n  if(R < K || R > L)\n    e = P;\n  else\n    e = Q;\n  return e;\n}\nvec4 S() {\n  vec3 T = vec3(.0);\n  const float U = .6;\n  const float V = 1.1;\n  const float W = .9;\n  const float X = .6;\n  const float Y = .3;\n  const float Z = .1;\n  T += (vec4(f(texture2D(TextureBloomBlur1, c), rgbmRange), 1.)).rgb * i(V, U);\n  T += (vec4(f(texture2D(TextureBloomBlur2, c), rgbmRange), 1.)).rgb * i(W, U);\n  T += (vec4(f(texture2D(TextureBloomBlur3, c), rgbmRange), 1.)).rgb * i(X, U);\n  T += (vec4(f(texture2D(TextureBloomBlur4, c), rgbmRange), 1.)).rgb * i(Y, U);\n  T += (vec4(f(texture2D(TextureBloomBlur5, c), rgbmRange), 1.)).rgb * i(Z, U);\n  vec4 ba;\n  if(enableAA == 1.) {\n    ba = l(TextureInput, gl_FragCoord.xy);\n  } else {\n    ba = texture2D(TextureInput, c);\n  }\n  ba.rgb = mix(vec3(.0), ba.rgb, sign(ba.a));\n  vec4 bb = texture2D(TextureSource, c);\n#ifdef HAS_NOAA_TEX\nvec4 bc = texture2D(noAaTextureSource, c);\n  bb = bc + bb * (1. - bc.a);\n#endif\nvec4 bd = vec4(.0);\n#ifdef HAS_POINT_TEX\nbd = texture2D(pointTextureSource, c);\n#endif\nfloat be = sqrt((T.r + T.g + T.b) / 3.);\n  vec4 bf = vec4(d(T * bloomFactor), be);\n  return bd + (ba + bb * (1. - ba.a)) * (1. - bd.a) + bf;\n}\nvoid main(void) {\n  c = gl_FragCoord.xy / outputSize.xy;\n  vec4 e = S();\n  gl_FragColor = e;\n}",
	                extraCommandProps: {
	                    viewport: e
	                }
	            });
	        }
	    }
	}

	class Vn extends Mn {
	    constructor() {
	        const e = [];
	        super({
	            vert: An,
	            frag: "precision highp float;\n#include <gl2_frag>\n#define SHADER_NAME COPY_DEPTH\nuniform sampler2D TextureDepth;\nuniform vec2 textureSize;\n#include <common_pack_float>\nvoid main(void) {\n  vec2 c = gl_FragCoord.xy / textureSize.xy;\n  float d = texture2D(TextureDepth, c).r;\n  glFragColor = common_encodeDepth(d);\n#if __VERSION__ == 100\ngl_FragColor = glFragColor;\n#endif\n}",
	            uniforms: [ {
	                name: "textureSize",
	                type: "function",
	                fn: (n, t) => (e[0] = t.TextureDepth.width, e[1] = t.TextureDepth.height, e)
	            } ],
	            extraCommandProps: {
	                viewport: {
	                    x: 0,
	                    y: 0,
	                    width: (e, n) => n.TextureDepth.width,
	                    height: (e, n) => n.TextureDepth.height
	                }
	            }
	        }), this.version = 300;
	    }
	    getMeshCommand(e, n) {
	        return this.commands.copy_depth || (this.commands.copy_depth = this.createREGLCommand(e, null, n.getElements())), 
	        this.commands.copy_depth;
	    }
	}

	class jn {
	    static getUniformDeclares() {
	        const e = [ [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ], t = new Array(16);
	        return [ {
	            name: "invProjMatrix",
	            type: "function",
	            fn: (e, r) => invert$2(t, r.projMatrix)
	        }, {
	            name: "outputFovInfo",
	            type: "array",
	            length: 2,
	            fn: function(n, t) {
	                const i = Math.tan(.5 * t.fov), o = t.outSize[0] / t.outSize[1] * i;
	                return set$3(e[0], o, i, o, -i), set$3(e[1], -o, i, -o, -i), e;
	            }
	        }, {
	            name: "reprojViewProjMatrix",
	            type: "function",
	            fn: (e, t) => multiply$5([], t.prevProjViewMatrix, t.cameraWorldMatrix)
	        } ];
	    }
	    static getDefines() {
	        return {
	            HAS_SSR: 1
	        };
	    }
	    constructor(e) {
	        this._regl = e, this._renderer = new k$1(e), this._inputRGBM = 0;
	    }
	    setup(e) {
	        this._initShaders(), this._createTextures(e);
	    }
	    getSSRUniforms(e, n, t) {
	        if (!this._depthCopy) return null;
	        const r = this._depthCopy;
	        return {
	            TextureDepth: r,
	            TextureReflected: this.getMipmapTexture(),
	            ssrFactor: n || 1,
	            ssrQuality: t || 2,
	            outSize: [ r.width, r.height ],
	            fov: e.getFov() * Math.PI / 180,
	            prevProjViewMatrix: this._projViewMatrix || e.projViewMatrix,
	            cameraWorldMatrix: e.cameraWorldMatrix
	        };
	    }
	    genMipMap(e, t, r) {
	        return this.setup(e), this._mipmap(e), this.copyDepthTex(t), this._projViewMatrix || (this._projViewMatrix = []), 
	        copy$5(this._projViewMatrix, r), delete this._depthCopied, this._outputTex;
	    }
	    getPrevProjViewMatrix() {
	        return this._projViewMatrix;
	    }
	    copyDepthTex(e) {
	        if (this._depthCopied) return null;
	        if (this.setup(e), this._depthCopy) e.width === this._depthCopy.width && e.height === this._depthCopy.height || this._depthCopyFBO.resize(e.width, e.height); else {
	            this._depthCopy = this._regl.texture({
	                min: "nearest",
	                mag: "nearest",
	                mipmap: !1,
	                type: "uint8",
	                width: e.width,
	                height: e.height
	            });
	            this._depthCopyFBO = this._regl.framebuffer({
	                width: e.width,
	                height: e.height,
	                colors: [ this._depthCopy ],
	                colorFormat: "rgba"
	            });
	        }
	        return this._renderer.render(this._copyDepthShader, {
	            TextureDepth: e
	        }, null, this._depthCopyFBO), this._depthCopied = !0, this._depthCopy;
	    }
	    _mipmap(e) {
	        const n = this._targetFBO, t = Math.ceil(.5 * e.width), r = Math.ceil(.5 * e.height);
	        n.width === t && n.height === r || n.resize(t, r);
	        let i = this._blurUniforms;
	        i || (i = this._blurUniforms = {
	            rgbmRange: 7,
	            outputSize: [ 0, 0 ]
	        }), i.TextureInput = e, i.inputRGBM = +this._inputRGBM, set(i.outputSize, n.width, n.height), 
	        this._renderer.render(this._ssrQuadShader, i, null, n);
	    }
	    getMipmapTexture() {
	        return this._outputTex || (this._outputTex = this._renderer.regl.texture({
	            type: "uint8",
	            width: 2,
	            height: 2
	        })), this._outputTex;
	    }
	    dispose() {
	        this._copyDepthShader && (this._ssrQuadShader.dispose(), this._copyDepthShader.dispose(), 
	        this._targetFBO.destroy(), delete this._copyDepthShader), this._depthCopy && (this._depthCopyFBO.destroy(), 
	        delete this._depthCopy, delete this._depthCopyFBO);
	    }
	    _initShaders() {
	        if (!this._copyDepthShader) {
	            this._copyDepthShader = new Vn;
	            this._ssrQuadShader = new Mn({
	                vert: An,
	                frag: "#version 100\nprecision mediump float;\nuniform sampler2D TextureInput;\nuniform vec2 outputSize;\n#define SHADER_NAME QUAD\nvec2 c;\nvoid main(void) {\n  c = gl_FragCoord.xy / outputSize.xy;\n  vec4 d = texture2D(TextureInput, c.xy);\n  gl_FragColor = d;\n}",
	                extraCommandProps: {
	                    viewport: {
	                        x: 0,
	                        y: 0,
	                        width: (e, n) => n.outputSize[0],
	                        height: (e, n) => n.outputSize[1]
	                    }
	                }
	            });
	        }
	    }
	    _createTextures(e) {
	        if (!this._targetFBO) {
	            const n = this._regl;
	            this._outputTex && this._outputTex.destroy(), this._outputTex = n.texture({
	                min: "linear",
	                mag: "linear",
	                type: "uint8",
	                width: e.width,
	                height: e.height
	            }), this._targetFBO = n.framebuffer({
	                width: e.width,
	                height: e.height,
	                colors: [ this._outputTex ],
	                depth: !1,
	                stencil: !1
	            });
	        }
	    }
	}

	class Xn extends vn {
	    constructor(e) {
	        const t = [];
	        super({
	            vert: "#define SHADER_NAME HEATMAP\nuniform mat4 projViewModelMatrix;\nuniform float extrudeScale;\nuniform float heatmapIntensity;\nattribute vec3 aPosition;\nvarying vec2 vExtrude;\n#ifdef HAS_HEAT_WEIGHT\nattribute highp float aWeight;\nvarying highp float weight;\n#else\nuniform highp float heatmapWeight;\n#endif\nuniform mediump float heatmapRadius;\nconst highp float c = 1. / 255. / 16.;\n#define GAUSS_COEF 0.3989422804014327\nvoid main(void) {\n  \n#ifdef HAS_HEAT_WEIGHT\nhighp float d = aWeight / 255.;\n  weight = d;\n#else\nhighp float d = heatmapWeight;\n#endif\nmediump float e = heatmapRadius;\n  vec2 f = vec2(mod(aPosition.xy, 2.) * 2. - 1.);\n  float h = sqrt(-2. * log(c / d / heatmapIntensity / GAUSS_COEF)) / 3.;\n  vExtrude = h * f;\n  vec2 i = vExtrude * e * extrudeScale;\n  vec4 j = vec4(floor(aPosition.xy * .5) + i, aPosition.z, 1);\n  gl_Position = projViewModelMatrix * j;\n}",
	            frag: "#define SHADER_NAME HEATMAP\nprecision mediump float;\nuniform highp float heatmapIntensity;\nvarying vec2 vExtrude;\n#ifdef HAS_HEAT_WEIGHT\nvarying highp float weight;\n#else\nuniform highp float heatmapWeight;\n#endif\n#define GAUSS_COEF 0.3989422804014327\nvoid main() {\n  \n#ifdef HAS_HEAT_WEIGHT\nhighp float c = weight;\n#else\nhighp float c = heatmapWeight;\n#endif\nfloat d = -.5 * 3. * 3. * dot(vExtrude, vExtrude);\n  float e = c * heatmapIntensity * GAUSS_COEF * exp(d);\n  gl_FragColor = vec4(e, 1., 1., 1.);\n}",
	            uniforms: [ {
	                name: "extrudeScale",
	                type: "function",
	                fn: function(e, n) {
	                    return n.resolution / n.dataResolution * n.tileRatio;
	                }
	            }, {
	                name: "projViewModelMatrix",
	                type: "function",
	                fn: function(e, r) {
	                    return multiply$5(t, r.projViewMatrix, r.modelMatrix);
	                }
	            } ],
	            extraCommandProps: v({}, e && e.extraCommandProps || {}, {
	                blend: {
	                    enable: !0,
	                    func: {
	                        src: "one",
	                        dst: "one"
	                    },
	                    equation: "add"
	                }
	            })
	        });
	    }
	}

	var Wn = [ -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, -1, -1, 1, 1, -1, -1, 1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, 1, 1, -1, 1, 1, -1, 1, -1, -1, -1, -1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, 1, -1, 1 ], Kn = "#define SHADER_NAME SKYBOX\n#if __VERSION__ == 100\n#ifdef GL_EXT_shader_texture_lod\n#extension GL_EXT_shader_texture_lod : enable\n#define textureCubeLod(tex, uv, lod) textureCubeLodEXT(tex, uv, lod)\n#else\n#define textureCubeLod(tex, uv, lod) textureCube(tex, uv, lod)\n#endif\n#else\n#define textureCubeLod(tex, uv, lod) textureLod(tex, uv, lod)\n#endif\nprecision highp float;\n#include <gl2_frag>\n#include <hsv_frag>\nuniform vec3 hsv;\nvarying vec3 vWorldPos;\n#ifdef USE_AMBIENT\nuniform vec3 diffuseSPH[9];\n#else\nuniform samplerCube cubeMap;\nuniform float bias;\nuniform float size;\n#endif\nuniform float environmentExposure;\n#if defined(INPUT_RGBM) || defined(ENC_RGBM)\nuniform float rgbmRange;\n#endif\nvec4 c(const in vec3 d, const in float e) {\n  if(e <= .0)\n    return vec4(d, 1.);\n  vec4 f;\n  vec3 h = d / e;\n  f.a = clamp(max(max(h.r, h.g), max(h.b, 1e-6)), .0, 1.);\n  f.a = ceil(f.a * 255.) / 255.;\n  f.rgb = h / f.a;\n  return f;\n}\nvec3 i(const in vec4 d, const in float e) {\n  if(e <= .0)\n    return d.rgb;\n  return e * d.rgb * d.a;\n}\nvec4 j(const in samplerCube k, const in vec3 l, const in float m, const in float n) {\n  vec3 o = l;\n  return textureCubeLod(k, o, n);\n}\nvec3 u(const in vec3 v, const in vec3 A[9]) {\n  float x = v.x;\n  float y = v.y;\n  float z = v.z;\n  vec3 B = (A[0] + A[1] * x + A[2] * y + A[3] * z + A[4] * z * x + A[5] * y * z + A[6] * y * x + A[7] * (3. * z * z - 1.) + A[8] * (x * x - y * y));\n  return max(B, vec3(.0));\n}\nfloat C(const in vec2 D) {\n  vec3 E = fract(vec3(D.xyx) * .1031);\n  E += dot(E, E.yzx + 19.19);\n  return fract((E.x + E.y) * E.z);\n}\nvoid main() {\n  vec4 F;\n#ifdef USE_AMBIENT\nvec3 v = normalize(vWorldPos + mix(-.5 / 255., .5 / 255., C(gl_FragCoord.xy)) * 2.);\n  F = vec4(u(v, diffuseSPH), 1.);\n  if(length(hsv) > .0) {\n    F.rgb = hsv_apply(F.rgb, hsv);\n  }\n#else\nF = j(cubeMap, vWorldPos, size, bias);\n#endif\nF.rgb *= environmentExposure;\n#ifdef ENC_RGBM\n#if !defined(USE_AMBIENT) && defined(INPUT_RGBM)\nif(length(hsv) > .0) {\n    F.rgb = hsv_apply(i(F, rgbmRange).rgb, hsv);\n    F = c(F.rgb, rgbmRange);\n  }\n#else\nF = c(F.rgb, rgbmRange);\n#endif\nglFragColor = F;\n#elif !defined(USE_AMBIENT) && defined(INPUT_RGBM)\nglFragColor = vec4(i(F, rgbmRange), 1.);\n  if(length(hsv) > .0) {\n    glFragColor.rgb = hsv_apply(clamp(glFragColor.rgb, .0, 1.), hsv);\n  }\n#else\nif(length(hsv) > .0) {\n    F.rgb = hsv_apply(F.rgb, hsv);\n  }\n  glFragColor = F;\n#endif\n#if __VERSION__ == 100\ngl_FragColor = glFragColor;\n#endif\n}";

	class qn extends vn {
	    constructor() {
	        super({
	            vert: "#include <gl2_vert>\nattribute vec3 aPosition;\nuniform mat4 projMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 transformMatrix;\nvarying vec3 vWorldPos;\nvoid main() {\n  vWorldPos = aPosition;\n  mat4 c = mat4(mat3(viewMatrix) * transformMatrix);\n  vec4 d = projMatrix * c * vec4(vWorldPos, 1.);\n  gl_Position = d.xyww;\n}",
	            frag: Kn,
	            extraCommandProps: {
	                depth: {
	                    enable: !0,
	                    range: [ 1, 1 ],
	                    func: "lequal"
	                },
	                viewport: {
	                    x: 0,
	                    y: 0,
	                    width: (e, n) => n.resolution[0],
	                    height: (e, n) => n.resolution[1]
	                }
	            }
	        }), this.version = 300;
	    }
	    setMode(e, n, t) {
	        const r = {};
	        return e && (r.INPUT_RGBM = 1), n && (r.ENC_RGBM = 1), 0 === t && (r.USE_AMBIENT = 1), 
	        this._skyboxMesh ? this._skyboxMesh[0].setDefines(r) : this._meshDefines = r, this;
	    }
	    draw(e) {
	        return this._skyboxMesh || this._createSkyboxMesh(e), super.draw(e, this._skyboxMesh);
	    }
	    _createSkyboxMesh(e) {
	        const n = new Q$1({
	            aPosition: new Int8Array(Wn)
	        }, null, Wn.length / 3);
	        n.generateBuffers(e), this._skyboxMesh = [ new ke$1(n) ], this._meshDefines && (this._skyboxMesh[0].setDefines(this._meshDefines), 
	        delete this._meshDefines);
	    }
	    dispose() {
	        if (this._skyboxMesh) {
	            const e = this._skyboxMesh[0];
	            e.geometry.dispose(), e.dispose();
	        }
	        return delete this._skyboxMesh, super.dispose();
	    }
	}

	class Yn extends vn {
	    constructor(e, t) {
	        const r = {
	            blend: {
	                enable: !0,
	                func: {
	                    src: "one",
	                    dst: "one minus src alpha"
	                },
	                equation: "add"
	            },
	            viewport: e
	        };
	        t && t.extraCommandProps && v(r, t.extraCommandProps);
	        const i = [];
	        super({
	            vert: "#define SHADER_NAME HEATMAP_DISPLAY\nuniform mat4 projViewModelMatrix;\nattribute vec3 aPosition;\nvoid main() {\n  gl_Position = projViewModelMatrix * vec4(aPosition, 1.);\n}",
	            frag: "#define SHADER_NAME HEATMAP_DISPLAY\nprecision mediump float;\nuniform sampler2D inputTexture;\nuniform sampler2D colorRamp;\nuniform vec2 textureOutputSize;\nuniform float heatmapOpacity;\nvoid main() {\n  vec2 c = gl_FragCoord.xy / textureOutputSize.xy;\n  float t = texture2D(inputTexture, c).r;\n  vec4 d = texture2D(colorRamp, vec2(t, .5));\n  gl_FragColor = d * heatmapOpacity;\n}",
	            uniforms: [ {
	                name: "projViewModelMatrix",
	                type: "function",
	                fn: function(e, t) {
	                    return multiply$5(i, t.projViewMatrix, t.modelMatrix);
	                }
	            } ],
	            extraCommandProps: r
	        });
	    }
	}

	class Jn extends vn {
	    constructor(e = {}) {
	        super({
	            vert: "precision highp float;\nprecision highp sampler2D;\nconst float c = 3.141592653589793;\nuniform mat4 projMatrix;\nuniform mat4 viewMatrix;\nuniform mat4 modelMatrix;\nattribute vec3 aPosition;\nattribute vec2 aTexCoord;\nattribute vec3 aNormal;\nvarying vec2 vuv;\nvarying vec3 vpos;\nvarying vec3 vnormal;\nvarying mat3 vtbnMatrix;\nvec4 d(mat4 e, mat4 f, vec3 h) {\n  return e * modelMatrix * f * vec4(h, 1.);\n}\nvec3 i(in vec3 h, in vec3 j) {\n  return normalize(h + j);\n}\nmat3 k(in vec3 l) {\n  vec3 t = normalize(cross(vec3(.0, .0, 1.), l));\n  vec3 b = normalize(cross(l, t));\n  return mat3(t, b, l);\n}\nvoid m() {\n  \n}\nvoid main(void) {\n  vuv = aTexCoord;\n  vpos = (modelMatrix * vec4(aPosition, 1.)).xyz;\n  vnormal = aNormal;\n  vtbnMatrix = k(vnormal);\n  gl_Position = d(projMatrix, viewMatrix, vpos);\n  m();\n}",
	            frag: "precision highp float;\nprecision highp sampler2D;\nuniform sampler2D texWaveNormal;\nuniform sampler2D texWavePerturbation;\nuniform vec3 octaveTextureRepeat;\nuniform vec4 waveParams;\nuniform vec2 waveDirection;\nuniform vec4 waterColor;\nuniform vec3 lightingDirection;\nuniform vec3 lightingIntensity;\nuniform vec3 camPos;\nuniform float timeElapsed;\nvarying vec2 vuv;\nvarying vec3 vpos;\nvarying vec3 vnormal;\nvarying mat3 vtbnMatrix;\nconst vec2 c = vec2(6. / 25., 5. / 24.);\nvec2 d(sampler2D e, vec2 f) {\n  return 2. * texture2D(e, f).rg - 1.;\n}\nfloat h(vec2 f) {\n  return texture2D(texWavePerturbation, f).b;\n}\nvec3 i(sampler2D e, vec2 f) {\n  return 2. * texture2D(e, f).rgb - 1.;\n}\nfloat j(vec2 f, float k) {\n  return fract(k);\n}\nfloat l(vec2 f, float k) {\n  float m = j(f, k);\n  return 1. - abs(1. - 2. * m);\n}\nvec3 n(sampler2D o, vec2 f, float k, float u) {\n  float v = waveParams[2];\n  float A = waveParams[3];\n  vec2 B = d(o, f) * v;\n  float m = j(f, k + u);\n  float C = l(f, k + u);\n  vec2 D = f;\n  D -= B * (m + A);\n  D += u;\n  D += (k - m) * c;\n  return vec3(D, C);\n}\nconst float E = .3737;\nconst float F = 7.77;\nvec3 G(sampler2D H, sampler2D I, vec2 f, vec2 J, float k) {\n  float K = waveParams[0];\n  vec2 L = k * -J;\n  float M = h(f * E) * F;\n  vec3 N = n(I, f + L, k + M, .0);\n  vec3 O = n(I, f + L, k + M, .5);\n  vec3 P = i(H, N.xy) * N.z;\n  vec3 Q = i(H, O.xy) * O.z;\n  vec3 R = normalize(P + Q);\n  R.xy *= K;\n  R.z = sqrt(1. - dot(R.xy, R.xy));\n  return R;\n}\nvec3 S(vec2 f, float k) {\n  float T = waveParams[1];\n  return G(texWaveNormal, texWavePerturbation, f * T, waveDirection, k);\n}\nconst float U = 3.141592653589793;\nconst float V = 1. / U;\nconst float W = .3183098861837907;\nconst float X = 1.570796326794897;\nstruct PBRShadingWater {\n  float NdotL;\n  float NdotV;\n  float NdotH;\n  float VdotH;\n  float LdotH;\n  float VdotN;\n};\nfloat Y = 2.2;\nvec3 Z(float ba, vec3 bb, float bc) {\n  return bb + (bc - bb) * pow(1. - ba, 5.);\n}\nfloat bd(float be, float bf) {\n  float bg = bf * bf;\n  float bh = be * be;\n  float bi = pow((bh * (bg - 1.) + 1.), Y) * U;\n  return bg / bi;\n}\nfloat bj(float bk) {\n  return .25 / (bk * bk);\n}\nvec3 bl(in PBRShadingWater bm, float bf, vec3 bn, float bo) {\n  vec3 bp = Z(bm.VdotH, bn, bo);\n  float bq = bd(bm.NdotH, bf);\n  float br = bj(bm.LdotH);\n  return (bq * br) * bp;\n}\nvec3 bs(const vec3 x) {\n  return (x * (2.51 * x + .03)) / (x * (2.43 * x + .59) + .14);\n}\nconst float bt = 2.2;\nconst float bu = .4545454545;\nvec4 bv(vec4 bw) {\n  return vec4(pow(bw.rgb, vec3(bu)), bw.w);\n}\nvec3 bx(vec3 bw) {\n  return pow(bw, vec3(bt));\n}\nconst vec3 by = vec3(.02, 1., 5.);\nconst vec2 bz = vec2(.02, .1);\nconst float bf = .06;\nconst vec3 bA = vec3(0, .6, .9);\nconst vec3 bB = vec3(.72, .92, 1.);\nPBRShadingWater bC;\nvec3 bD(in float bE, in vec3 bF, in vec3 bG) {\n  float bH = pow((1. - bE), by[2]);\n  return mix(bG, bF, bH);\n}\nvec3 bI(in vec3 bJ, in vec3 bK, in vec3 bL, vec3 bw, in vec3 bM, in vec3 bN, in float bO) {\n  vec3 bP = bx(bw);\n  vec3 bQ = normalize(bL + bK);\n  bC.NdotL = clamp(dot(bJ, bL), .0, 1.);\n  bC.NdotV = clamp(dot(bJ, bK), .001, 1.);\n  bC.VdotN = clamp(dot(bK, bJ), .001, 1.);\n  bC.NdotH = clamp(dot(bJ, bQ), .0, 1.);\n  bC.VdotH = clamp(dot(bK, bQ), .0, 1.);\n  bC.LdotH = clamp(dot(bL, bQ), .0, 1.);\n  float bR = max(dot(bN, bK), .0);\n  vec3 bS = bx(bB);\n  vec3 bT = bx(bA);\n  vec3 bB = bD(bR, bS, bT);\n  float bU = max(dot(bN, bL), .0);\n  bB *= .1 + bU * .9;\n  float bV = clamp(bO, .8, 1.);\n  vec3 bW = Z(bC.VdotN, vec3(by[0]), by[1]) * bB * bV;\n  vec3 bX = bP * mix(bB, bU * bM * V, 2. / 3.) * bV;\n  vec3 bY = vec3(.0);\n  if(bR > .0 && bU > .0) {\n    vec3 bZ = bl(bC, bf, vec3(bz[0]), bz[1]);\n    vec3 ca = bM * V * bO;\n    bY = bC.NdotL * ca * bZ;\n  }\n  return bs(bW + bX + bY);\n}\nvoid main() {\n  vec3 bN = vnormal;\n  vec3 cb = S(vuv, timeElapsed);\n  vec3 bJ = normalize(vtbnMatrix * cb);\n  vec3 bK = -normalize(vpos - camPos);\n  vec3 bL = normalize(-lightingDirection);\n  float bO = 1.;\n  vec4 cc = vec4(bI(bJ, bK, bL, waterColor.rgb, lightingIntensity, bN, bO), waterColor.w);\n  gl_FragColor = bv(cc);\n}",
	            defines: e.defines || {},
	            extraCommandProps: e.extraCommandProps || {}
	        });
	    }
	}

	class Zn extends Mn {
	    constructor() {
	        super({
	            vert: An,
	            frag: "precision highp float;\nuniform sampler2D texture;\nuniform vec2 size;\nuniform float enableSharpen;\nuniform float sharpFactor;\nuniform float pixelRatio;\nvec2 c;\nvec3 d(const in vec3 e, const float f) {\n  vec2 h = pixelRatio / size.xy;\n  float i = .0;\n  vec4 j = texture2D(texture, c + h * vec2(-1., -1.));\n  j.rgb = mix(vec3(.0), j.rgb, sign(j.a));\n  i += mix(.0, 1., sign(j.a));\n  vec4 k = texture2D(texture, c + h * vec2(1.));\n  k.rgb = mix(vec3(.0), k.rgb, sign(k.a));\n  i += mix(.0, 1., sign(k.a));\n  vec4 l = texture2D(texture, c + h * vec2(1., -1.));\n  l.rgb = mix(vec3(.0), l.rgb, sign(l.a));\n  i += mix(.0, 1., sign(l.a));\n  vec4 m = texture2D(texture, c + h * vec2(-1., 1.));\n  m.rgb = mix(vec3(.0), m.rgb, sign(m.a));\n  i += mix(.0, 1., sign(m.a));\n  return e + f * (i * e - j.rgb - l.rgb - m.rgb - k.rgb);\n}\nvoid main() {\n  c = gl_FragCoord.xy / size;\n  vec4 e = texture2D(texture, c);\n  if(enableSharpen == 1.) {\n    e.rgb = d(e.rgb, sharpFactor);\n  }\n  gl_FragColor = e;\n}",
	            extraCommandProps: {
	                viewport: {
	                    x: 0,
	                    y: 0,
	                    width: (e, n) => n.size[0],
	                    height: (e, n) => n.size[1]
	                }
	            }
	        });
	    }
	    getMeshCommand(e, n) {
	        return this.commands.copy || (this.commands.copy = this.createREGLCommand(e, null, n.getElements())), 
	        this.commands.copy;
	    }
	}

	class Qn extends vn {
	    constructor(e = {}) {
	        const t = [], r = e.uniforms, i = [ {
	            name: "modelViewMatrix",
	            type: "function",
	            fn: function(e, r) {
	                return multiply$5(t, r.viewMatrix, r.modelMatrix);
	            }
	        } ];
	        r && i.push(...r), super({
	            vert: "#include <gl2_vert>\nattribute vec3 aPosition;\nuniform mat4 projMatrix;\nuniform mat4 modelMatrix;\nuniform mat4 positionMatrix;\nuniform mat4 modelViewMatrix;\nuniform vec2 halton;\nuniform vec2 outSize;\n#include <get_output>\nvoid main() {\n  vec4 c = getPosition(aPosition);\n  mat4 d = getPositionMatrix();\n  mat4 e = projMatrix;\n  e[2].xy += halton.xy / outSize.xy;\n  gl_Position = e * modelViewMatrix * d * c;\n}",
	            frag: "precision mediump float;\n#include <gl2_frag>\nuniform vec4 lineColor;\nuniform float lineOpacity;\nvoid main() {\n  glFragColor = lineColor;\n  glFragColor.a *= lineColor.a * lineOpacity;\n#if __VERSION__ == 100\ngl_FragColor = glFragColor;\n#endif\n}",
	            uniforms: i,
	            defines: e.defines || {},
	            extraCommandProps: e.extraCommandProps || {}
	        }), this.version = 300;
	    }
	}

	const $n = [], et$1 = [];

	class nt$1 extends vn {
	    constructor(e = {}) {
	        const t = [], r = e.uniforms, o = [ {
	            name: "viewMatrixInverse",
	            type: "function",
	            fn: (e, t) => invert$2($n, t.viewMatrix)
	        }, {
	            name: "modelViewMatrix",
	            type: "function",
	            fn: function(e, r) {
	                return multiply$5(t, r.viewMatrix, r.modelMatrix);
	            }
	        }, {
	            name: "uEnvironmentTransform",
	            type: "function",
	            fn: (e, n) => fromRotation$2(et$1, Math.PI * (n.environmentOrientation || 0) / 180)
	        } ];
	        r && o.push(...r), super({
	            vert: "precision mediump float;\n#include <gl2_vert>\nattribute vec3 aPosition;\n#include <line_extrusion_vert>\n#ifdef HAS_MAP\nuniform vec2 uvScale;\nuniform vec2 uvOffset;\nattribute vec2 aTexCoord;\nvarying vec2 vTexCoord;\n#ifdef HAS_I3S_UVREGION\nattribute vec4 uvRegion;\nvarying vec4 vUvRegion;\n#endif\n#endif\n#if defined(HAS_COLOR)\nattribute vec4 aColor;\n#elif defined(HAS_COLOR0)\n#if COLOR0_SIZE == 3\nattribute vec3 aColor0;\n#else\nattribute vec4 aColor0;\n#endif\nvarying vec4 vColor;\n#endif\nuniform mat4 projMatrix;\nuniform mat3 modelNormalMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 modelMatrix;\nuniform mat4 positionMatrix;\nuniform vec2 halton;\nuniform vec2 outSize;\nuniform mat4 projViewMatrix;\n#include <get_output>\n#include <heatmap_render_vert>\n#if defined(HAS_SHADOWING) && !defined(HAS_BLOOM)\n#include <vsm_shadow_vert>\n#endif\nvarying vec3 vViewPosition;\nvoid main() {\n  \n#ifdef IS_LINE_EXTRUSION\nvec4 c = getPosition(getLineExtrudePosition(aPosition));\n#else\nvec4 c = getPosition(aPosition);\n#endif\nmat4 d = getPositionMatrix();\n  mat4 e = projMatrix;\n  e[2].xy += halton.xy / outSize.xy;\n#ifdef HAS_MASK_EXTENT\ngl_Position = e * getMaskPosition(d * c, modelMatrix);\n#else\ngl_Position = e * modelViewMatrix * d * c;\n#endif\nvec4 f = modelViewMatrix * d * c;\n  vViewPosition = -f.xyz;\n#ifdef HAS_MAP\nvec2 h = decode_getTexcoord(aTexCoord);\n  vTexCoord = h * uvScale + uvOffset;\n#endif\n#if defined(HAS_COLOR)\nvColor = aColor / 255.;\n#elif defined(HAS_COLOR0)\n#if COLOR0_SIZE == 3\nvColor = vec4(aColor0 / 255., 1.);\n#else\nvColor = aColor0 / 255.;\n#endif\n#endif\n}",
	            frag: "#if __VERSION__ == 100\n#if defined(GL_EXT_shader_texture_lod)\n#extension GL_EXT_shader_texture_lod : enable\n#define textureCubeLod(tex, uv, lod) textureCubeLodEXT(tex, uv, lod)\n#else\n#define textureCubeLod(tex, uv, lod) textureCube(tex, uv, lod)\n#endif\n#if defined(GL_OES_standard_derivatives)\n#extension GL_OES_standard_derivatives : enable\n#endif\n#else\n#define textureCubeLod(tex, uv, lod) textureLod(tex, uv, lod)\n#endif\n#define saturate(x)        clamp(x, 0.0, 1.0)\nprecision mediump float;\n#include <gl2_frag>\n#include <hsv_frag>\nuniform vec3 hsv;\n#define GET_BASEMAP(UV) (texture2D(baseColorTexture, (UV)))\nuniform mat4 viewMatrix;\nuniform mat4 projMatrix;\nuniform vec3 cameraPosition;\n#if defined(HAS_IBL_LIGHTING)\nuniform mat4 viewMatrixInverse;\n#endif\nuniform vec4 baseColorFactor;\nuniform vec3 emissiveFactor;\nuniform vec3 specularFactor;\nuniform float opacity;\nuniform float envRotationSin;\nuniform float envRotationCos;\nuniform float rgbmRange;\n#if defined(HAS_MAP)\n#include <computeTexcoord_frag>\n#endif\n#ifdef HAS_BASECOLOR_MAP\nuniform sampler2D baseColorTexture;\n#endif\n#ifdef HAS_NORMAL_MAP\nuniform sampler2D normalTexture;\nvec3 c(vec3 d, vec3 e) {\n  vec3 f = dFdx(d.xyz);\n  vec3 h = dFdy(d.xyz);\n  vec3 i = normalize(f - h);\n  vec3 j = normalize(-f + h);\n  vec3 k = normalize(e);\n  vec3 l = texture2D(normalTexture, computeTexCoord(vTexCoord)).rgb * 2. - 1.;\n  mat3 m = mat3(i, j, k);\n  return normalize(m * l);\n}\n#endif\n#ifdef HAS_EMISSIVE_MAP\nuniform sampler2D emissiveTexture;\n#endif\n#ifdef SHADING_MODEL_SPECULAR_GLOSSINESS\nuniform vec4 diffuseFactor;\n#ifdef HAS_DIFFUSE_MAP\nuniform sampler2D diffuseTexture;\n#endif\n#ifdef HAS_SPECULARGLOSSINESS_MAP\nuniform sampler2D specularGlossinessTexture;\n#endif\n#endif\n#if defined(HAS_SHADOWING) && !defined(HAS_BLOOM)\n#include <vsm_shadow_frag>\n#endif\n#if defined(HAS_COLOR) || defined(HAS_COLOR0)\nvarying vec4 vColor;\n#endif\n#ifdef GAMMA_INPUT\nvec3 n(vec3 o) {\n  return o * o;\n}\nfloat n(float o) {\n  return o * o;\n}\n#else\nvec3 n(vec3 o) {\n  return o;\n}\nfloat n(float o) {\n  return o;\n}\n#endif\nvec3 u() {\n  \n#ifdef SHADING_MODEL_SPECULAR_GLOSSINESS\n#ifdef HAS_SPECULARGLOSSINESS_MAP\nreturn texture2D(specularGlossinessTexture, computeTexCoord(vTexCoord)).rgb;\n#else\nreturn specularFactor;\n#endif\n#else\nreturn specularFactor;\n#endif\n}\nvec3 v() {\n  \n#ifdef HAS_EMISSIVE_MAP\nreturn texture2D(emissiveTexture, computeTexCoord(vTexCoord)).rgb;\n#else\nreturn emissiveFactor;\n#endif\n}\n#if defined(TONEMAP_OUTPUT)\n#if TONEMAP_OUTPUT > 0\nuniform float exposureBias;\nfloat A(vec3 rgb) {\n  return dot(rgb, vec3(.299, .587, .114));\n}\nfloat B(vec3 rgb) {\n  return dot(rgb, vec3(.212671, .715160, .072169));\n}\nvec3 C(vec3 xyz) {\n  vec3 D = vec3(3.240479, -1.53715, -.498535);\n  vec3 E = vec3(-.969256, 1.875992, .041556);\n  vec3 F = vec3(.055648, -.204043, 1.057311);\n  vec3 rgb;\n  rgb.b = dot(xyz, F);\n  rgb.g = dot(xyz, E);\n  rgb.r = dot(xyz, D);\n  return rgb;\n}\nvec3 H(vec3 rgb) {\n  vec3 I = vec3(.412453, .35758, .180423);\n  vec3 J = vec3(.212671, .71516, .0721688);\n  vec3 K = vec3(.0193338, .119194, .950227);\n  vec3 xyz;\n  xyz.x = dot(rgb, I);\n  xyz.y = dot(rgb, J);\n  xyz.z = dot(rgb, K);\n  return xyz;\n}\nvec3 L(vec3 xyz) {\n  float M = xyz.x + xyz.y + xyz.z;\n  M = 1. / M;\n  vec3 O;\n  O.z = xyz.y;\n  O.x = xyz.x * M;\n  O.y = xyz.y * M;\n  return O;\n}\nvec3 P(vec3 O) {\n  float x = O.x;\n  float y = O.y;\n  float J = O.z;\n  vec3 xyz;\n  xyz.y = J;\n  xyz.x = x * (J / y);\n  xyz.z = (1. - x - y) * (J / y);\n  return xyz;\n}\nfloat Q(float x) {\n  float U = pow(x, 1.60525727);\n  float V = ((1.05542877 * 4.68037409) * U) / (4.68037409 * U + 1.);\n  return clamp(V, .0, 1.);\n}\nconst float W = 1. / .18;\nfloat ba(float x) {\n  x *= W;\n  const float bb = .2;\n  const float F = .34;\n  const float bc = .002;\n  const float bd = 1.68;\n  const float be = .0005;\n  const float bf = .252;\n  const float bg = 1. / .833837;\n  return ((x * (bb * x + bc * F) + bd * be) / (x * (bb * x + F) + bd * bf) - be / bf) * bg;\n}\nvec3 bh(vec3 x) {\n  x *= W;\n  const float bb = .27;\n  const float F = .29;\n  const float bc = .052;\n  const float bd = .2;\n  const float bf = .18;\n  const float bg = 1. / .897105;\n  return ((x * (bb * x + bc * F)) / (x * (bb * x + F) + bd * bf)) * bg;\n}\nvec3 bi(vec3 x) {\n  vec3 bj = x.rgb;\n  bj = min(bj, vec3(3.));\n  float bk = B(bj);\n  if(bk > .0) {\n    float bl = Q(bk);\n    bj = bj * (bl / bk);\n    bj = clamp(bj, vec3(.0), vec3(1.));\n  }\n  float bm = 1. / 2.2;\n  bj = pow(bj, vec3(bm));\n  return bj;\n}\n#endif\n#endif\n#if defined(IRR_RGBM) || defined(ENV_RGBM) || defined(ENV_GAMMA) || defined(IRR_GAMMA)\nuniform float envMapExposure;\n#endif\nuniform vec4 themingColor;\nuniform mat3 uEnvironmentTransform;\nvec3 bn(vec3 bo, vec3 bp) {\n  \n#if defined(HAS_SHADOWMAP)\nfloat bq = dot(shadowLightDir, bp);\n  float br = (bq + 1.) / 2.;\n  br = min(1., br * 1.5);\n  float bs = 1.;\n  vec3 bt = bo * min(bs, br);\n  return bt;\n#else\nreturn bo;\n#endif\n}\n#ifdef HAS_IBL_LIGHTING\nuniform float reflectivity;\nuniform vec3 hdrHSV;\nuniform samplerCube prefilterMap;\nuniform vec3 diffuseSPH[9];\nuniform vec2 prefilterMiplevel;\nuniform vec2 prefilterSize;\n#else\nuniform vec3 ambientColor;\n#endif\n#if defined(HAS_IBL_LIGHTING)\nvec3 bu(const in vec3 bv) {\n  vec3 bw = uEnvironmentTransform * bv;\n  float x = bw.x;\n  float y = bw.y;\n  float z = bw.z;\n  vec3 bt = (diffuseSPH[0] + diffuseSPH[1] * x + diffuseSPH[2] * y + diffuseSPH[3] * z + diffuseSPH[4] * z * x + diffuseSPH[5] * y * z + diffuseSPH[6] * y * x + diffuseSPH[7] * (3. * z * z - 1.) + diffuseSPH[8] * (x * x - y * y));\n  if(length(hdrHSV) > .0) {\n    bt = hsv_apply(bt, hdrHSV);\n  }\n  return max(bt, vec3(.0));\n}\nvec3 bx(const in vec4 by, const in float bz) {\n  if(bz <= .0)\n    return by.rgb;\n  return bz * by.rgb * by.a;\n}\nfloat bA(const in float bB) {\n  return bB;\n}\nvec3 bC(const in float bD, const in vec3 D) {\n  vec3 bE = D;\n  float bF = prefilterMiplevel.x;\n  float bG = min(bF, bA(bD) * prefilterMiplevel.y);\n  vec3 bH = bx(textureCubeLod(prefilterMap, bE, bG), rgbmRange);\n  if(length(hdrHSV) > .0) {\n    return hsv_apply(bH, hdrHSV);\n  } else {\n    return bH;\n  }\n}\nvec3 bI(const in vec3 k, const in vec3 D, const in float bJ) {\n  float bK = 1. - bJ;\n  float bL = bK * (sqrt(bK) + bJ);\n  return mix(k, D, bL);\n}\nvec3 bM(const in vec3 bv, const in vec3 bN, const in float bO, const in vec3 bP) {\n  vec3 D = reflect(-bN, bv);\n  D = bI(bv, D, bO);\n  vec3 bQ = bC(bO, uEnvironmentTransform * D);\n  float bR = clamp(1. + dot(D, bP), .0, 1.);\n  bQ *= bR * bR;\n  return bQ;\n}\n#else\nvec3 bM(const in vec3 bv, const in vec3 bN, const in float bO, const in vec3 bP) {\n  return ambientColor;\n}\n#endif\nvarying highp vec3 vViewPosition;\nvec3 bS(vec3 bT, float bU) {\n  float bV = max(1. - bU, .0);\n  return bT + (1. - bT) * pow(bV, 5.);\n}\nfloat bW(float bT, float bU) {\n  float bV = max(1. - bU, .0);\n  return bT + (1. - bT) * pow(bV, 5.);\n}\nvec3 bX(const in vec3 by) {\n  return vec3(by.r < .0031308 ? by.r * 12.92 : 1.055 * pow(by.r, 1. / 2.4) - .055, by.g < .0031308 ? by.g * 12.92 : 1.055 * pow(by.g, 1. / 2.4) - .055, by.b < .0031308 ? by.b * 12.92 : 1.055 * pow(by.b, 1. / 2.4) - .055);\n}\nvoid main() {\n  glFragColor = vec4(vec3(1.), opacity);\n#ifdef HAS_BASECOLOR_MAP\nvec4 bY = GET_BASEMAP(computeTexCoord(vTexCoord));\n#ifdef GAMMA_INPUT\nbY.xyz *= bY.xyz;\n#endif\nglFragColor = glFragColor * bY;\n#endif\n#ifdef ALPHATEST\nif(glFragColor.a < ALPHATEST)\n    discard;\n  \n#endif\nfloat bZ = 1.;\n  vec3 ca = dFdx(vViewPosition);\n  vec3 cb = dFdy(vViewPosition);\n  vec3 bv = normalize(cross(ca, cb));\n  vec3 cc;\n  if(projMatrix[3][3] == .0) {\n    cc = normalize(vViewPosition);\n  } else {\n    cc = vec3(.0, .0, 1.);\n  }\n  bv = faceforward(bv, -cc, bv);\n  vec3 cd = bv;\n#ifdef HAS_NORMAL_MAP\nbv = c(-vViewPosition, bv);\n#endif\nvec3 ce = vec3(.0);\n  vec3 cf = vec3(.0);\n#ifdef HAS_IBL_LIGHTING\nvec3 bp = mat3(viewMatrixInverse) * bv;\n  vec3 cg = glFragColor.rgb * bu(bp) * .5;\n  cg = bn(cg, bp);\n  ce += n(baseColorFactor.rgb) * cg;\n#endif\nvec3 ch = v();\n#ifdef METAL\nglFragColor.xyz = glFragColor.xyz * (n(ch) + ce + n(baseColorFactor.rgb) + cf);\n#else\nglFragColor.xyz = glFragColor.xyz * (n(ch) + ce + n(baseColorFactor.rgb)) + cf;\n#endif\nvec3 ci;\n#if defined(HAS_SHADOWING) && !defined(HAS_BLOOM)\nfloat cj = shadow_computeShadow();\n  ci = shadow_blend(ci, cj).rgb;\n#endif\n#ifdef HAS_COLOR\nglFragColor = glFragColor * vColor;\n#endif\nglFragColor.rgb += ci;\n  glFragColor.rgb = bX(glFragColor.rgb);\n#if defined(HAS_IBL_LIGHTING)\nvec3 ck;\n#if defined(HAS_NORMAL_MAP)\n#ifdef ENVMAP_MODE_REFLECTION\nck = reflect(-cc, bv);\n#else\nck = refract(-cc, bv, 1.);\n#endif\n#else\nck = reflect(-cc, bv);\n#endif\nck = mat3(viewMatrixInverse) * ck;\n  float cl = 1.;\n  vec3 cm;\n#ifdef HAS_IBL_LIGHTING\ncm = vec3(.0);\n#elif\ncm = ambientColor;\n#endif\ncm *= cl;\n  float bV = dot(cc, bv);\n  if(bV < -1e-2 || reflectivity == .0)\n    bV = 1.;\n  else\n    bV = max(1e-6, bV);\n  vec3 cn;\n  vec3 co = u();\n#ifdef METAL\ncn = n(co);\n#else\ncn = bS(n(co), bV) * (1. - envRotationSin);\n  glFragColor.a = mix(glFragColor.a, bW(glFragColor.a, bV), reflectivity) * envRotationCos;\n  float cp = pow(1. - bV * .5, 5.);\n  float cq = (28. / 23.) * (1. - cp) * (1. - cp);\n  glFragColor.rgb *= cq * (1. - n(co));\n#endif\nglFragColor.rgb += cm.rgb * bZ * cn.rgb;\n#endif\n#if defined(TONEMAP_OUTPUT)\n#if TONEMAP_OUTPUT == 1\nglFragColor.rgb = bi(exposureBias * glFragColor.rgb);\n#elif TONEMAP_OUTPUT == 2\nglFragColor.rgb = bh(exposureBias * glFragColor.rgb);\n#endif\n#endif\nglFragColor.rgb = mix(glFragColor.rgb, themingColor.rgb, themingColor.a);\n#if __VERSION__ == 100\ngl_FragColor = glFragColor;\n#endif\n}",
	            uniforms: o,
	            defines: e.defines || {},
	            extraCommandProps: e.extraCommandProps || {}
	        }), this.version = 300;
	    }
	}

	const tt$1 = [];

	class rt$1 {
	    constructor(e, n, t) {
	        this._regl = e, this._layer = t, this._viewport = n, this._init();
	    }
	    _init() {
	        this._shader = new vn({
	            vert: "attribute vec3 aPosition;\nuniform mat4 projMatrix;\nuniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 positionMatrix;\nvarying vec4 vWorldPosition;\n#include <get_output>\nvoid main() {\n  vec4 c = getPosition(aPosition);\n  mat4 d = getPositionMatrix();\n  vec4 e = modelMatrix * d * c;\n  gl_Position = projMatrix * modelViewMatrix * d * c;\n  vWorldPosition = e;\n}",
	            frag: "precision mediump float;\nvarying vec4 vWorldPosition;\nuniform vec2 fogDist;\nuniform vec3 cameraPosition;\nuniform float rainDepth;\nvoid main() {\n  vec3 c = vec3(vWorldPosition[0] - cameraPosition[0], vWorldPosition[1] - cameraPosition[1], vWorldPosition[2] - cameraPosition[2]);\n  float d = length(c);\n  float e = clamp(1. - (d - fogDist.x) / (fogDist.y - fogDist.x), .0, 1.);\n  if(vWorldPosition[2] < rainDepth) {\n    gl_FragColor = vec4(e, .0, .0, 1.);\n  } else {\n    gl_FragColor = vec4(e, 1., .0, 1.);\n  }\n}",
	            uniforms: [ {
	                name: "modelViewMatrix",
	                type: "function",
	                fn: function(e, t) {
	                    return multiply$5(tt$1, t.viewMatrix, t.modelMatrix);
	                }
	            } ],
	            extraCommandProps: {
	                viewport: this._viewport
	            }
	        });
	        const e = this._layer.getRenderer().createFBOInfo();
	        this._fbo = this._regl.framebuffer(e), this._scene = new Ke$1, this.renderer = new k$1(this._regl);
	    }
	    render(e, n) {
	        this._resize(), this.renderer.clear({
	            color: [ 0, 0, 0, 1 ],
	            depth: 1,
	            framebuffer: this._fbo
	        }), this._scene.setMeshes(e);
	        return this.renderer.render(this._shader, {
	            projMatrix: n.projMatrix,
	            viewMatrix: n.viewMatrix,
	            cameraPosition: n.cameraPosition,
	            fogDist: n.fogDist,
	            rainDepth: n.rainDepth
	        }, this._scene, this._fbo), this._fbo;
	    }
	    dispose() {
	        this._fbo && this._fbo.destroy(), this._shader && this._shader.dispose();
	    }
	    _resize() {
	        const e = h$1(this._viewport.width.data) ? this._viewport.width.data() : this._viewport.width, n = h$1(this._viewport.height.data) ? this._viewport.height.data() : this._viewport.height;
	        !this._fbo || this._fbo.width === e && this._fbo.height === n || this._fbo.resize(e, n);
	    }
	}

	class it$1 extends Mn {
	    constructor() {
	        super({
	            vert: An,
	            frag: "#if __VERSION__ == 100\n#ifdef GL_OES_standard_derivatives\n#extension GL_OES_standard_derivatives : enable\n#endif\n#endif\nprecision mediump float;\n#include <gl2_frag>\nvarying vec2 vTexCoord;\n#ifdef HAS_RAIN\nuniform sampler2D ripplesMap;\n#endif\n#ifdef HAS_SNOW\nuniform sampler2D normalMap;\n#endif\n#ifdef HAS_FOG\nuniform vec3 fogColor;\n#endif\nuniform sampler2D sceneMap;\nuniform sampler2D mixFactorMap;\nuniform float time;\nuniform vec2 resolution;\nfloat c(float a, float b, float w) {\n  return a + w * (b - a);\n}\n#define HASHSCALE1 .1031\n#define HASHSCALE3 vec3(.1031, .1030, .0973)\n#define HASHSCALE4 vec3(.1031, .1030, .0973, .1099)\nfloat d = .1;\nfloat e = .2;\nfloat f = .5;\nfloat h = 10.;\nfloat i(float p) {\n  vec3 j = fract(vec3(p) * HASHSCALE1);\n  j += dot(j, j.yzx + 19.19);\n  return fract((j.x + j.y) * j.z);\n}\nvec2 k(vec2 p) {\n  vec3 j = fract(vec3(p.xyx) * HASHSCALE3);\n  j += dot(j, j.yzx + 19.19);\n  return fract((j.xx + j.yz) * j.zy);\n}\nvec2 l(vec2 m) {\n  float x = fract(sin(dot(m.xy, vec2(122.9898, 783.233))) * 43758.5453);\n  float y = fract(sin(dot(m.xy, vec2(457.6537, 537.2793))) * 37573.5913);\n  return vec2(x, y);\n}\nvec3 n(vec2 o, float u) {\n  vec3 v = vec3(.0);\n  o = o * (2. + u);\n  float A = o.y * (((i(u) * 2. - 1.) * .5 + 1.) * e);\n  float B = (f * time);\n  o += vec2(A, B);\n  vec2 C = k(floor(o) + 31.1759 * u);\n  o = fract(o);\n  o -= (C * 2. - 1.) * .35;\n  o -= .5;\n  float r = length(o);\n  float D = .05 * (1. + .3 * sin(time * d));\n  float E = smoothstep(D, -D, r);\n  vec3 F = vec3(E) * C.x;\n  return F;\n}\nvec3 G() {\n  vec3 v = vec3(0);\n  vec2 o = gl_FragCoord.xy / resolution.xy;\n  o *= vec2(resolution.x / resolution.y, 1.);\n  for(float H = 0.; H < h; H++) {\n    v += n(o, H);\n  }\n  return v;\n}\nvec3 I(vec4 J, vec4 K, float L) {\n  float M = K.b;\n  vec3 N = vec3(1.);\n  if(L < 1.) {\n    float r = c(.5, N.x, M);\n    float g = c(.5, N.y, M);\n    float b = c(.5, N.z, M);\n    return vec3(r, g, b);\n  } else {\n    float r = c(J.r, N.x, M);\n    float g = c(J.g, N.y, M);\n    float b = c(J.b, N.z, M);\n    return vec3(r, g, b);\n  }\n}\nvoid main() {\n  vec4 J = texture2D(sceneMap, vTexCoord);\n  glFragColor = J;\n  vec4 O = texture2D(mixFactorMap, vTexCoord);\n#ifdef HAS_RAIN\nvec4 P = texture2D(ripplesMap, vTexCoord);\n  if(O.g < 1.) {\n    J = mix(J, P, .4);\n  }\n  glFragColor = J;\n#endif\n#ifdef HAS_SNOW\nvec3 Q = G();\n  glFragColor = vec4(J.rgb + Q, J.a);\n#endif\n#ifdef HAS_FOG\nfloat R = O.r;\n  vec3 S = mix(fogColor, glFragColor.rgb, R);\n  glFragColor = vec4(S, J.a);\n#endif\n#if __VERSION__ == 100\ngl_FragColor = glFragColor;\n#endif\n}",
	            extraCommandProps: {
	                viewport: {
	                    x: 0,
	                    y: 0,
	                    width: (e, n) => n.resolution[0],
	                    height: (e, n) => n.resolution[1]
	                }
	            }
	        });
	    }
	}

	const ot$1 = [], at$1 = [ .03, .03, .03 ], st$1 = [], ct$1 = [], lt$1 = [], ft$1 = fromRotationTranslation$1([], fromEuler([], 90, 0, 0), [ 0, 0, 0 ]);

	class dt$1 {
	    constructor(e, n) {
	        this._regl = e, this._viewport = n, this._init();
	    }
	    _init() {
	        this._shader = new vn({
	            vert: "#include <gl2_vert>\nattribute vec3 aPosition;\nattribute vec3 aNormal;\nattribute vec2 aTexCoord;\nuniform mat4 projMatrix;\nuniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 positionMatrix;\nvarying vec2 vTexCoord;\n#include <get_output>\nvoid main() {\n  vec4 c = getPosition(aPosition);\n  mat4 d = getPositionMatrix();\n  gl_Position = projMatrix * modelViewMatrix * d * c;\n  vTexCoord = aTexCoord;\n}",
	            frag: "#if __VERSION__ == 100\n#ifdef GL_OES_standard_derivatives\n#extension GL_OES_standard_derivatives : enable\n#endif\n#endif\nprecision mediump float;\n#include <gl2_frag>\nvarying vec2 vTexCoord;\nuniform float rippleRadius;\nuniform float density;\nuniform float time;\nvec3 c(vec2 p) {\n  vec3 q = vec3(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)), dot(p, vec2(419.2, 371.9)));\n  return fract(sin(q) * 43758.5453);\n}\nfloat d(in vec2 x) {\n  vec2 e = x * density / 4000.0;\n  vec2 p = floor(e);\n  vec2 f = fract(e);\n  float h = .0;\n  for(int i = -4; i <= 4; i++)\n    for(int k = -4; k <= 4; k++) {\n      vec2 g = vec2(float(k), float(i));\n      vec3 l = c(p + g);\n      vec2 r = g - f + l.xy;\n      float m = sqrt(dot(r, r));\n      float n = max(mix(smoothstep(.99, .999, max(cos(m - time * 2. + (l.x + l.y) * 5.), 0.)), 0., m), 0.);\n      h += n;\n    }\n  return h;\n}\nvoid main() {\n  vec2 u = vTexCoord;\n  float A = 24. / (rippleRadius * .01);\n  float f = d(A * u) * smoothstep(.0, .4, sin(u.x * 3.151592) * sin(u.y * 3.141592));\n  vec3 B = vec3(-dFdx(f), -dFdy(f), -dFdy(f));\n  glFragColor = vec4(B, 1.);\n#if __VERSION__ == 100\ngl_FragColor = glFragColor;\n#endif\n}",
	            uniforms: [ {
	                name: "modelViewMatrix",
	                type: "function",
	                fn: function(e, t) {
	                    return multiply$5(ot$1, t.viewMatrix, t.modelMatrix);
	                }
	            } ],
	            extraCommandProps: {
	                viewport: this._viewport
	            }
	        }), this._shader.version = 300, this._fbo = this._regl.framebuffer({
	            color: this._regl.texture({
	                width: this._viewport.width(),
	                height: this._viewport.height(),
	                wrap: "clamp",
	                mag: "linear",
	                min: "linear"
	            }),
	            depth: !0
	        }), this._scene = new Ke$1, this.renderer = new k$1(this._regl);
	    }
	    _transformRipples(e) {
	        const r = e.coordinateToPointAtRes(e.getCenter(), e.getGLRes()), i = e.getGLScale() / e.getGLScale(this._fixZoom), o = set$4(ct$1, i, i, i), s = multiply$4(o, at$1, o), c = identity$2(lt$1);
	        fromRotationTranslationScale(c, fromEuler(st$1, 0, 0, 0), [ r.x, r.y, 0 ], s), 
	        multiply$5(c, c, ft$1), this._mesh.setLocalTransform(c);
	    }
	    _createRipplesMask(e) {
	        this._fixZoom = e.getZoom();
	        const n = 800 * Math.pow(2, 16.685648411389433 - this._fixZoom), t = {};
	        t.POSITION = [ -n, 0, -n, n, 0, -n, -n, 0, n, n, 0, n ], t.NORMAL = [ 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0 ], 
	        t.TEXCOORD_0 = [ 0, 0, 1, 0, 0, 1, 1, 1 ];
	        const r = new Q$1(t, [ 3, 1, 0, 0, 2, 3 ], 0, {
	            positionAttribute: "POSITION",
	            normalAttribute: "NORMAL",
	            uv0Attribute: "TEXCOORD_0"
	        });
	        r.generateBuffers(this._regl);
	        const i = new Ce$1;
	        return new ke$1(r, i);
	    }
	    render(e, n) {
	        this._resize(), this.renderer.clear({
	            color: [ 0, 0, 0, 1 ],
	            depth: 1,
	            framebuffer: this._fbo
	        }), this._mesh = this._mesh || this._createRipplesMask(e), this._scene.setMeshes(this._mesh), 
	        this._transformRipples(e);
	        return this.renderer.render(this._shader, {
	            projMatrix: n.projMatrix,
	            viewMatrix: n.viewMatrix,
	            time: n.time,
	            rippleRadius: n.rippleRadius,
	            density: n.density
	        }, this._scene, this._fbo), this._fbo;
	    }
	    dispose() {
	        this._fbo && this._fbo.destroy(), this._shader && this._shader.dispose();
	    }
	    _resize() {
	        const e = h$1(this._viewport.width.data) ? this._viewport.width.data() : this._viewport.width, n = h$1(this._viewport.height.data) ? this._viewport.height.data() : this._viewport.height;
	        !this._fbo || this._fbo.width === e && this._fbo.height === n || this._fbo.resize(e, n);
	    }
	}

	var ut$1 = "attribute vec3 aPosition;\nuniform mat4 positionMatrix;\nuniform mat4 projViewModelMatrix;\n#ifdef HAS_VIDEO\nattribute vec2 aTexCoord;\nvarying vec2 uv;\n#endif\n#include <get_output>\nvoid main() {\n  mat4 c = getPositionMatrix();\n  vec4 d = c * getPosition(aPosition);\n  gl_Position = projViewModelMatrix * d;\n#ifdef HAS_VIDEO\nuv = aTexCoord;\n#endif\n}";

	const ht$1 = [ 0, 0, 0, 1 ];

	class mt$1 {
	    constructor(e, n) {
	        this.regl = e, this._viewport = n, this.renderer = new k$1(e), this._init();
	    }
	    _init() {
	        this._maskColorFbo = this.renderer.regl.framebuffer({
	            color: this.renderer.regl.texture({
	                width: 1,
	                height: 1,
	                wrap: "clamp",
	                mag: "linear",
	                min: "linear"
	            }),
	            depth: !0
	        }), this._maskModeFbo = this.renderer.regl.framebuffer({
	            color: this.renderer.regl.texture({
	                width: 1,
	                height: 1,
	                wrap: "clamp",
	                mag: "nearest",
	                min: "nearest"
	            }),
	            depth: !0
	        });
	        const e = [ {
	            name: "projViewModelMatrix",
	            type: "function",
	            fn: (e, t) => multiply$5([], t.projViewMatrix, t.modelMatrix)
	        } ];
	        this._maskColorShader = new vn({
	            vert: ut$1,
	            frag: "#ifdef GL_ES\nprecision highp float;\n#endif\nuniform vec4 maskColor;\n#ifdef HAS_VIDEO\nuniform sampler2D maskTexture;\nvarying vec2 uv;\n#endif\nvoid main() {\n  \n#ifdef HAS_VIDEO\ngl_FragColor = texture2D(maskTexture, uv);\n  gl_FragColor.a = maskColor.a;\n#else\ngl_FragColor = maskColor;\n#endif\n}",
	            uniforms: e,
	            extraCommandProps: {
	                viewport: this._viewport
	            }
	        }), this._maskModeShader = new vn({
	            vert: ut$1,
	            frag: "#ifdef GL_ES\nprecision highp float;\n#endif\nuniform float maskMode;\n#ifdef HAS_MASK_FLAT\nuniform float flatHeight;\n#endif\n#ifdef HAS_MASK_COLOR\nuniform vec2 heightRange;\n#endif\nvoid main() {\n  \n#if defined(HAS_MASK_FLAT)\ngl_FragColor = vec4(maskMode, flatHeight, .0, 1.);\n#elif defined(HAS_MASK_COLOR)\ngl_FragColor = vec4(maskMode, .0, heightRange.x, heightRange.y);\n#else\ngl_FragColor = vec4(maskMode, .0, .0, .0);\n#endif\n}",
	            uniforms: e,
	            extraCommandProps: {
	                viewport: this._viewport
	            }
	        }), this._scene = new Ke$1;
	    }
	    render(e, n) {
	        this._resize(), this.renderer.clear({
	            color: ht$1,
	            depth: 1,
	            framebuffer: this._maskColorFbo
	        }), this.renderer.clear({
	            color: ht$1,
	            depth: 1,
	            framebuffer: this._maskModeFbo
	        }), this._scene.setMeshes(e);
	        const t = {
	            projViewMatrix: n
	        };
	        return this.renderer.render(this._maskColorShader, t, this._scene, this._maskColorFbo), 
	        this.renderer.render(this._maskModeShader, t, this._scene, this._maskModeFbo), {
	            colorExtent: this._maskColorFbo,
	            modeExtent: this._maskModeFbo
	        };
	    }
	    _resize() {
	        const e = h$1(this._viewport.width) ? this._viewport.width() : this._viewport.width.data(), n = h$1(this._viewport.height) ? this._viewport.height() : this._viewport.height.data();
	        !this._maskColorFbo || this._maskColorFbo.width === e && this._maskColorFbo.height === n || (this._maskColorFbo.resize(e, n), 
	        this._maskModeFbo.resize(e, n));
	    }
	    dispose() {
	        this._maskColorFbo && (this._maskColorFbo.destroy(), delete this._maskColorFbo), 
	        this._maskModeFbo && (this._maskModeFbo.destroy(), delete this._maskModeFbo), this._maskColorShader && (this._maskColorShader.dispose(), 
	        delete this._maskColorShader), this._maskModeShader && (this._maskModeShader.dispose(), 
	        delete this._maskModeShader);
	    }
	}

	const vt$1 = [], _t$1 = {
	    width: 4,
	    type: "float"
	};

	class gt$1 {
	    constructor(e, n, t) {
	        this._regl = e, this.joints = n, this.inverseBindMatrices = [], this.jointMatrices = [], 
	        this.jointData = new Float32Array(16 * n.length);
	        for (let e = 0; e < n.length; ++e) this.inverseBindMatrices.push(new Float32Array(t.buffer, t.byteOffset + 16 * Float32Array.BYTES_PER_ELEMENT * e, 16)), 
	        this.jointMatrices.push(new Float32Array(this.jointData.buffer, 16 * Float32Array.BYTES_PER_ELEMENT * e, 16));
	        this.jointTextureSize = [ 4, 6 ];
	    }
	    update(e, t, r) {
	        invert$2(vt$1, e);
	        for (let e = 0; e < this.joints.length; ++e) {
	            const r = this.jointMatrices[e];
	            multiply$5(r, vt$1, t[this.joints[e].nodeIndex]), multiply$5(r, r, this.inverseBindMatrices[e]);
	        }
	        _t$1.height = this.joints.length, _t$1.data = this.jointData;
	        const i = _t$1;
	        return r ? r(i) : r = this._regl.texture(i), r;
	    }
	}

	const xt$1 = [ 0, 0, 0 ], bt$1 = [ 0, 0, 0, 1 ], pt$1 = [ 1, 1, 1 ], yt$1 = [];

	class At$1 {
	    constructor(e = [ 0, 0, 0 ], n = [ 0, 0, 0, 1 ], t = [ 1, 1, 1 ]) {
	        this.translation = e, this.rotation = n, this.scale = t;
	    }
	    getMatrix() {
	        return fromRotationTranslationScale(yt$1, this.rotation, this.translation, this.scale);
	    }
	    decompose(e) {
	        getTranslation$1(this.translation, e), getRotation(this.rotation, e), getScaling(this.scale, e);
	    }
	    update(e) {
	        e && (e.translation && !equals$4(e.translation, xt$1) && copy$4(this.translation, e.translation), 
	        e.rotation && !equals$2(e.rotation, bt$1) && copy$2(this.rotation, e.rotation), e.scale && !equals$4(e.scale, pt$1) && copy$4(this.scale, e.scale));
	    }
	}

	class St$1 {
	    constructor(e) {
	        this._init(e);
	    }
	    _init(e) {
	        this.geometry = e.geometry, this.nodeMatrix = e.nodeMatrix, this.materialInfo = e.materialInfo, 
	        this.extraInfo = e.extraInfo, this.animationMatrix = e.animationMatrix, this.morphWeights = e.morphWeights, 
	        this.skin = e.skin, this.nodeIndex = e.nodeIndex;
	    }
	    copyEdgeGeometry() {
	        this.copyGeometry || (this.copyGeometry = this._copyEdgeGeometry(this.geometry));
	    }
	    createCopyBarycentric() {
	        this.copyGeometry && !this.copyGeometry.data.aBarycentric && (this.copyGeometry.buildUniqueVertex(), 
	        this.copyGeometry.createBarycentric("aBarycentric"));
	    }
	    _copyEdgeGeometry(e) {
	        const n = e.data, t = e.indices || e.elements, r = {};
	        for (const t in n) if (t === e.desc.positionAttribute) if (b$1(n[t])) r[t] = n[t].slice(); else if (n[t].buffer && n[t].buffer.destroy) r[t] = {
	            buffer: n[t].buffer
	        }, b$1(n[t].array) && (r[t].array = n[t].array.slice()); else {
	            const n = e._getAttributeData(t);
	            r[t] = t !== e.desc.positionAttribute ? n : n.slice();
	        }
	        const i = void 0 !== t.length ? t.slice() : t, o = JSON.parse(JSON.stringify(e.desc)), a = new Te$1(r, i, 0, o);
	        return a.properties = e.properties, a;
	    }
	}

	let Tt$1 = 0;

	class Mt$1 {
	    constructor(e, n) {
	        this.gltf = e, this.regl = n, this.geometries = [], n && (this._emptyTexture = n.texture({
	            width: 2,
	            height: 2
	        }));
	    }
	    getMeshesInfo() {
	        if (!this.gltf) return null;
	        if (this.geometries.length) return this.geometries;
	        this._createTextures(this.gltf.textures), this._createSkins(this.gltf.skins);
	        return this.gltf.scenes[0].nodes.forEach(e => {
	            this._parserNode(e, this.geometries);
	        }), this._checkBaseColorFactor(), this.geometries;
	    }
	    _createSkins(e) {
	        if (e) {
	            this._skinMap = {};
	            for (let n = 0; n < e.length; n++) {
	                const t = e[n];
	                t.joints = t.joints.map(e => this.gltf.nodes[e]), this._skinMap[n] = new gt$1(this.regl, t.joints, t.inverseBindMatrices.array), 
	                delete t.inverseBindMatrices;
	            }
	        }
	    }
	    _createTextures(e) {
	        if (e) {
	            this._textureMap = {};
	            for (let n = 0; n < e.length; n++) {
	                const t = e[n];
	                this._textureMap[n] || (this._textureMap[n] = this._toTexture(t), delete t.image);
	            }
	        }
	    }
	    _checkBaseColorFactor() {
	        if (!this._checkBaseColorFactorAlpha()) for (let e = 0; e < this.geometries.length; e++) {
	            const n = this.geometries[e].materialInfo.baseColorFactor;
	            n && 0 === n[3] && (n[3] = 1);
	        }
	    }
	    _checkBaseColorFactorAlpha() {
	        for (let e = 0; e < this.geometries.length; e++) {
	            const n = this.geometries[e].materialInfo.baseColorFactor;
	            if (n && n[3] > 0) return !0;
	        }
	        return !1;
	    }
	    dispose() {
	        this._emptyTexture && this._emptyTexture.destroy();
	        const e = this.getMeshesInfo();
	        if (e) {
	            e.forEach(e => {
	                e.geometry.dispose();
	                for (const n in e.materialInfo) {
	                    const t = e.materialInfo[n];
	                    t.destroy && !t[H$1] && t.destroy();
	                }
	            });
	            for (const e in this._textureMap) {
	                const n = this._textureMap[e];
	                n.destroy && !n[H$1] && n.destroy();
	            }
	            delete this.gltf;
	        }
	    }
	    updateAnimation(n, t, r, i, o, a, s) {
	        const c = this.gltf;
	        if (!c) return;
	        if (Tt$1 = c.animations ? X$2.getAnimationTimeSpan(c, i) : null, !Tt$1) return;
	        n -= o;
	        let l = 0;
	        l = t || !t && this._isFirstLoop(n, r, i, o) ? n * r * .001 % (Tt$1.max - Tt$1.min) + Tt$1.min : n * r * .001 + Tt$1.min, 
	        c.scenes[0].nodes.forEach(e => {
	            this._updateNodeMatrix(i, l, e, null, a);
	        });
	        for (const e in this.gltf.nodes) {
	            const n = this.gltf.nodes[e], t = a[n.nodeIndex];
	            if (n.skin && t) {
	                const e = n.skin.update(t, a, s[n.nodeIndex] && s[n.nodeIndex].jointTexture);
	                s[n.nodeIndex] || (s[n.nodeIndex] = {
	                    jointTextureSize: n.skin.jointTextureSize,
	                    numJoints: n.skin.joints.length
	                }), s[n.nodeIndex].jointTexture = e;
	            }
	        }
	    }
	    _isFirstLoop(n, t, r, i) {
	        const o = this.gltf;
	        return !i || !o || (Tt$1 = o.animations ? X$2.getAnimationTimeSpan(o, r) : null, 
	        n * t * .001 / (Tt$1.max - Tt$1.min) < 1);
	    }
	    hasSkinAnimation() {
	        return !!this._isAnimation;
	    }
	    _updateNodeMatrix(t, r, i, o, a) {
	        if (i.trs) {
	            const n = X$2.getAnimationClip(this.gltf, Number(i.nodeIndex), r, t);
	            n.weights && this._updateMorph(i, n.weights), i.trs.update(n);
	        }
	        a[i.nodeIndex] = o ? multiply$5(a[i.nodeIndex] || [], o, i.matrix || i.trs.getMatrix()) : copy$5(a[i.nodeIndex] || [], i.matrix || i.trs.getMatrix()), 
	        i.children && i.children.forEach(e => {
	            this._updateNodeMatrix(t, r, e, a[i.nodeIndex], a);
	        });
	    }
	    _updateMorph(e, n) {
	        const t = n.length;
	        if (!e.influencesList) {
	            e.influencesList = [];
	            for (let n = 0; n < t; n++) e.influencesList[n] = [ n, 0 ];
	        }
	        const r = e.influencesList;
	        for (let e = 0; e < r.length; e++) {
	            const t = r[e];
	            t[0] = e, t[1] = n[e];
	        }
	        r.sort(Ot$1);
	        const i = [];
	        for (let e = 0; e < 8; e++) i[e] = [ e, 0 ];
	        for (let e = 0; e < 8; e++) e < t && r[e][1] ? (i[e][0] = r[e][0], i[e][1] = r[e][1]) : (i[e][0] = Number.MAX_SAFE_INTEGER, 
	        i[e][1] = 0);
	        i.sort(Ct$1);
	        e.geometries.forEach(e => {
	            const n = e.properties.morphTargets;
	            for (let t = 0; t < 8; t++) {
	                const r = i[t], o = r[0], a = r[1];
	                o !== Number.MAX_SAFE_INTEGER && a ? (e.updateData("POSITION" + t, n["POSITION_" + o].array), 
	                e.properties.morphWeights[t] = a) : e.properties.morphWeights[t] = 0;
	            }
	        });
	    }
	    _parserNode(e, t, r) {
	        if (e.isParsed) return;
	        e.nodeMatrix = e.nodeMatrix || identity$2([]), e.localMatrix = e.localMatrix || identity$2([]), 
	        e.matrix ? (e.trs = new At$1, e.trs.decompose(e.matrix)) : e.trs = new At$1(e.translation, e.rotation, e.scale), 
	        e.localMatrix = e.trs.getMatrix(), r ? multiply$5(e.nodeMatrix, r, e.matrix || e.localMatrix) : copy$5(e.nodeMatrix, e.matrix || e.localMatrix);
	        const i = e.nodeMatrix;
	        if (e.children) for (let n = 0; n < e.children.length; n++) {
	            this._parserNode(e.children[n], t, i);
	        }
	        if (u$1(e.skin)) {
	            this._isAnimation = !0;
	            const n = e.skin;
	            e.trs = new At$1, e.skin = this._skinMap[n];
	        }
	        if (u$1(e.mesh)) {
	            e.mesh = this.gltf.meshes[e.mesh], e.mesh.node = e, e.geometries = e.geometries || [], 
	            e.mesh.primitives.forEach(n => {
	                const r = this._createMaterialInfo(n.material), o = function(e, n, t) {
	                    const r = e.attributes, i = r.COLOR_0;
	                    if (i && i.array instanceof Float32Array) {
	                        const e = new Uint8Array(i.array.length);
	                        for (let n = 0; n < e.length; n++) e[n] = Math.round(255 * i.array[n]);
	                        i.array = e;
	                    } else if (i && (i.array instanceof Uint16Array || i.array instanceof Int16Array || i.array instanceof Uint32Array || i.array instanceof Int32Array)) {
	                        const e = new Uint8Array(i.array);
	                        i.array = e;
	                    }
	                    t && r.TEXCOORD_0 && !r.TEXCOORD_0 && (r.TEXCOORD_1 = r.TEXCOORD_0);
	                    const o = {};
	                    for (const e in r) o[e] = v({}, r[e]), n && (o[e].buffer = me$1(n, r[e], {
	                        dimension: r[e].itemSize
	                    }));
	                    if (e.morphTargets) {
	                        const e = P$1(o.POSITION) ? o.POSITION.itemSize * o.POSITION.count : o.POSITION.array.length;
	                        for (let n = 0; n < 8; n++) o["POSITION" + n] || (o["POSITION" + n] = new Float32Array(e).fill(0));
	                        for (let e = 0; e < 4; e++) {
	                            const n = o.NORMAL.array ? o.NORMAL.array.length : o.NORMAL.length;
	                            o["NORMAL" + e] || (o["NORMAL" + e] = new Float32Array(n).fill(0));
	                        }
	                    }
	                    let a = e.indices;
	                    a && void 0 === a.bufferView && a.array && (a = a.array);
	                    const s = new Q$1(o, a, 0, {
	                        primitive: g(e.mode) ? ne$1(e.mode) : e.mode,
	                        positionAttribute: "POSITION",
	                        normalAttribute: "NORMAL",
	                        uv0Attribute: "TEXCOORD_0",
	                        uv1Attribute: "TEXCOORD_1",
	                        color0Attribute: "COLOR_0"
	                    });
	                    e.morphTargets && (s.properties.morphWeights = []);
	                    e.mode > 3 && !s.data.NORMAL && s.createNormal("NORMAL");
	                    return s;
	                }(n, this.regl, r.occlusionTexture);
	                o.properties.morphTargets = n.morphTargets, e.geometries.push(o);
	                const a = {
	                    geometry: o,
	                    nodeMatrix: i,
	                    materialInfo: r,
	                    extraInfo: this._createExtralInfo(n.material),
	                    animationMatrix: e.trs.getMatrix(),
	                    morphWeights: e.weights,
	                    nodeIndex: e.nodeIndex
	                };
	                e.skin && (a.skin = {
	                    jointTextureSize: [ 4, 6 ],
	                    numJoints: e.skin.joints.length,
	                    jointTexture: e.skin.jointTexture
	                });
	                const s = new St$1(a);
	                t.push(s);
	            });
	        }
	        e.isParsed = !0;
	    }
	    _createMaterialInfo(e) {
	        const n = {};
	        if (this.gltf.materials && this.gltf.materials[e]) {
	            const t = this.gltf.materials[e], r = t.pbrMetallicRoughness;
	            if (r) {
	                const e = r.metallicRoughnessTexture, t = r.baseColorTexture;
	                t && (n.baseColorTexture = this._getTexture(t), t.KHR_texture_transform && (n.khr_offset = t.KHR_texture_transform.offset || [ 0, 0 ], 
	                n.khr_rotation = t.KHR_texture_transform.rotation || 0, n.khr_scale = t.KHR_texture_transform.scale || [ 1, 1 ])), 
	                r.baseColorFactor && (n.baseColorFactor = r.baseColorFactor), e ? n.metallicRoughnessTexture = this._getTexture(e) : (n.metallicFactor = u$1(r.metallicFactor) ? r.metallicFactor : 1, 
	                n.roughnessFactor = u$1(r.roughnessFactor) ? r.roughnessFactor : 1);
	            }
	            const i = t.extensions;
	            if (i && i.KHR_materials_pbrSpecularGlossiness) {
	                const e = i.KHR_materials_pbrSpecularGlossiness;
	                n.name = "pbrSpecularGlossiness";
	                for (const t in e) n[t] = u$1(e[t].index) ? this._getTexture(e[t]) : e[t];
	            }
	            t.normalTexture && (n.normalTexture = this._getTexture(t.normalTexture)), t.occlusionTexture && (n.occlusionTexture = this._getTexture(t.occlusionTexture)), 
	            t.emissiveTexture && (n.emissiveTexture = this._getTexture(t.emissiveTexture)), 
	            t.emissiveFactor && (n.emissiveFactor = t.emissiveFactor), n.alphaCutoff = t.alphaCutoff || .5;
	        }
	        return n;
	    }
	    _createExtralInfo(e) {
	        const n = {};
	        if (this.gltf.materials && this.gltf.materials[e]) {
	            const t = this.gltf.materials[e];
	            n.doubleSided = t.doubleSided, n.alphaMode = t.alphaMode || "OPAQUE";
	        }
	        return n;
	    }
	    _getTexture(e) {
	        const n = e.extensions, t = e.index;
	        if (!u$1(t)) return null;
	        n && n.KHR_texture_transform && (e.KHR_texture_transform = n.KHR_texture_transform);
	        const r = this._textureMap[t];
	        return r.texInfo = e, r;
	    }
	    _toTexture(e) {
	        if (!e) return this._emptyTexture;
	        const n = e.sampler || {};
	        return new en({
	            width: e.image.width,
	            height: e.image.height,
	            data: e.image.array,
	            mag: se$1(n.magFilter) || "linear",
	            min: le$1(n.minFilter) || "linear",
	            wrapS: de$1(n.wrapS) || "repeat",
	            wrapT: de$1(n.wrapT) || "repeat"
	        });
	    }
	}

	function Ct$1(e, n) {
	    return e[0] - n[0];
	}

	function Ot$1(e, n) {
	    return Math.abs(n[1]) - Math.abs(e[1]);
	}

	function Et$1(n) {
	    const t = n.lastIndexOf("/"), r = n.slice(0, t), i = n.slice(n.lastIndexOf(".")).toLowerCase();
	    return ".gltf" === i ? function(n, t) {
	        return w$2.getJSON(n, t);
	    }(n, {}).then(e => It$1(r, e)) : ".glb" === i ? function(n, t) {
	        return w$2.getArrayBuffer(n, t);
	    }(n, {}).then(e => It$1(r, {
	        buffer: e.data,
	        byteOffset: 0
	    })) : null;
	}

	function Pt$1(e, n) {
	    return new Mt$1(e, n);
	}

	function It$1(n, t) {
	    return new X$2(n, t).load();
	}

	var wt$1 = Object.freeze({
	    __proto__: null,
	    load: Et$1,
	    exportGLTFPack: Pt$1,
	    loadGLTF: It$1
	});

	const Rt$1 = [ -1, 0, -1, 1, 0, -1, -1, 0, 1, 1, 0, 1 ], Dt$1 = [ 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0 ], Nt$1 = [ 3, 1, 0, 0, 2, 3 ], Ft$1 = [ 0, 0, 1, 0, 0, 1, 1, 1 ], Ht$1 = {
	    vertices: [ -.8111000061035156, 2.0102999210357666, -.8111000061035156, 0, .010300000198185444, -0, -.8111000061035156, 2.0102999210357666, .8111000061035156, -.8111000061035156, 2.0102999210357666, .8111000061035156, 0, .010300000198185444, -0, .8111000061035156, 2.0102999210357666, .8111000061035156, .8111000061035156, 2.0102999210357666, .8111000061035156, 0, .010300000198185444, -0, .8111000061035156, 2.0102999210357666, -.8111000061035156, .8111000061035156, 2.0102999210357666, -.8111000061035156, 0, .010300000198185444, -0, -.8111000061035156, 2.0102999210357666, -.8111000061035156, .8111000061035156, 2.0102999210357666, -.8111000061035156, -.8111000061035156, 2.0102999210357666, -.8111000061035156, 0, 2.9419000148773193, -0, .8111000061035156, 2.0102999210357666, .8111000061035156, .8111000061035156, 2.0102999210357666, -.8111000061035156, 0, 2.9419000148773193, -0, -.8111000061035156, 2.0102999210357666, -.8111000061035156, -.8111000061035156, 2.0102999210357666, .8111000061035156, 0, 2.9419000148773193, -0, -.8111000061035156, 2.0102999210357666, .8111000061035156, .8111000061035156, 2.0102999210357666, .8111000061035156, 0, 2.9419000148773193, -0 ],
	    normals: [ -.9267006516456604, -.3758002817630768, -0, -.9267006516456604, -.3758002817630768, -0, -.9267006516456604, -.3758002817630768, -0, 0, -.3758002817630768, .9267006516456604, 0, -.3758002817630768, .9267006516456604, 0, -.3758002817630768, .9267006516456604, .9267006516456604, -.3758002817630768, -0, .9267006516456604, -.3758002817630768, -0, .9267006516456604, -.3758002817630768, -0, 0, -.3758002817630768, -.9267006516456604, 0, -.3758002817630768, -.9267006516456604, 0, -.3758002817630768, -.9267006516456604, 0, .656676173210144, -.7541726231575012, 0, .656676173210144, -.7541726231575012, 0, .656676173210144, -.7541726231575012, .7541726231575012, .656676173210144, -0, .7541726231575012, .656676173210144, -0, .7541726231575012, .656676173210144, -0, -.7541726231575012, .656676173210144, -0, -.7541726231575012, .656676173210144, -0, -.7541726231575012, .656676173210144, -0, 0, .656676173210144, .7541726231575012, 0, .656676173210144, .7541726231575012, 0, .656676173210144, .7541726231575012 ],
	    indices: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23 ]
	}, Lt$1 = {
	    cube: {
	        meshes: [ {
	            primitives: [ {
	                attributes: {
	                    POSITION: {
	                        array: new Int8Array([ 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, 1, 1, -1, 1, 1, -1, 1, -1, -1, -1, -1, -1, -1, 1, -1, -1, -1, 1, -1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, -1, -1, -1, -1, 1, -1, 1, 1, -1 ])
	                    },
	                    NORMAL: {
	                        array: new Int8Array([ 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1 ])
	                    }
	                },
	                indices: new Uint16Array([ 0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23 ]),
	                mode: 4
	            } ]
	        } ],
	        scenes: [ {
	            nodes: [ {
	                mesh: 0,
	                scale: [ 60, 60, 60 ]
	            } ]
	        } ]
	    },
	    plane: {
	        meshes: [ {
	            primitives: [ {
	                attributes: {
	                    POSITION: {
	                        array: new Int8Array(Rt$1)
	                    },
	                    NORMAL: {
	                        array: new Int8Array(Dt$1)
	                    },
	                    TEXCOORD_0: {
	                        array: new Int8Array(Ft$1)
	                    }
	                },
	                indices: new Uint16Array(Nt$1),
	                mode: 4
	            } ]
	        } ],
	        scenes: [ {
	            nodes: [ {
	                mesh: 0,
	                scale: [ 60, 60, 60 ]
	            } ]
	        } ]
	    },
	    pyramid: {
	        meshes: [ {
	            primitives: [ {
	                attributes: {
	                    POSITION: {
	                        array: new Float32Array(Ht$1.vertices)
	                    },
	                    NORMAL: {
	                        array: new Float32Array(Ht$1.normals)
	                    },
	                    TEXCOORD_0: {
	                        array: new Float32Array(Ht$1.uv)
	                    }
	                },
	                indices: new Uint16Array(Ht$1.indices),
	                mode: 4
	            } ]
	        } ],
	        scenes: [ {
	            nodes: [ {
	                mesh: 0,
	                scale: [ 60, 60, 60 ]
	            } ]
	        } ]
	    }
	};

	class zt$1 {
	    constructor(e) {
	        this.regl = e, this.resourceMap = {};
	    }
	    getGLTF(e) {
	        return this.resourceMap[e];
	    }
	    loginGLTF(e, n) {
	        if (this.resourceMap[e]) this.resourceMap[e].refCount += 1; else {
	            if (Lt$1[e]) {
	                const n = function(e) {
	                    let n = null;
	                    return Lt$1[e] && (n = {
	                        meshes: Lt$1[e].meshes
	                    }, n.scenes = JSON.parse(JSON.stringify(Lt$1[e].scenes))), n;
	                }(e);
	                this.resourceMap[e] = this._exportGLTFResource(n, e, !1);
	            } else this.resourceMap[e] = n ? n(e).then(n => {
	                const t = this._exportGLTFResource(n, e);
	                return this.resourceMap[e] = t, t;
	            }) : this._loadGLTFModel(e).catch(e => e);
	            this.resourceMap[e].refCount = 1;
	        }
	    }
	    logoutGLTF(e) {
	        if (this.resourceMap[e] && (this.resourceMap[e].refCount -= 1, this.resourceMap[e].refCount < 1)) {
	            const n = this.resourceMap[e].resources;
	            if (n) for (let e = 0; e < n.length; e++) n[e].geometry.dispose(), n[e].copyGeometry && n[e].copyGeometry.dispose(), 
	            n[e].material && n[e].material.dispose();
	            this.resourceMap[e].gltfPack && this.resourceMap[e].gltfPack.dispose(), delete this.resourceMap[e];
	        }
	    }
	    isSimpleModel(e) {
	        return Lt$1[e];
	    }
	    _exportGLTFResource(e, n, t = !0) {
	        const r = Pt$1(e, t ? this.regl : null), i = r.getMeshesInfo();
	        return {
	            gltfPack: r,
	            resources: i,
	            json: {
	                asset: e.asset,
	                animations: e.animations ? e.animations.map((e, n) => ({
	                    name: u$1(e.name) ? e.name : n
	                })) : null
	            },
	            refCount: this.resourceMap[n] ? this.resourceMap[n].refCount : 0
	        };
	    }
	    _loadData(e) {
	        return Et$1(e).then(e => e);
	    }
	    _loadGLTFModel(e) {
	        return this._loadData(e).then(n => (this.resourceMap[e] = this._exportGLTFResource(n, e), 
	        this.resourceMap[e]));
	    }
	}

	const Bt$1 = function() {
	    const e = [ 0, 0, 0 ], t = 90 * Math.PI / 180, r = [ 0, 0, 0, 0 ], i = new Array(16);
	    return function(o, a, s, c, l, f) {
	        const d = [ lookAt([], e, [ 1, 0, 0 ], f && f[0] || [ 0, -1, 0 ]), lookAt([], e, [ -1, 0, 0 ], f && f[1] || [ 0, -1, 0 ]), lookAt([], e, [ 0, 1, 0 ], f && f[2] || [ 0, 0, 1 ]), lookAt([], e, [ 0, -1, 0 ], f && f[3] || [ 0, 0, -1 ]), lookAt([], e, [ 0, 0, 1 ], f && f[4] || [ 0, -1, 0 ]), lookAt([], e, [ 0, 0, -1 ], f && f[5] || [ 0, -1, 0 ]) ], u = {
	            context: {
	                viewMatrix: function(e, n, t) {
	                    return d[t];
	                },
	                projMatrix: perspective(i, t, 1, .5, 1.1)
	            }
	        };
	        a && (u.framebuffer = a.faces ? function(e, n, t) {
	            return a.faces[t];
	        } : a);
	        return o(u)(6, (e, n, t) => {
	            const i = {
	                color: r,
	                depth: 1
	            };
	            a && (i.framebuffer = a.faces ? a.faces[t] : a), o.clear(i), s(c), l && l();
	        }), a;
	    };
	}();

	var kt$1 = {
	    vertices: [ 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, 1, 1, -1, 1, 1, -1, 1, -1, -1, -1, -1, -1, -1, 1, -1, -1, -1, 1, -1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, -1, -1, -1, -1, 1, -1, 1, 1, -1 ],
	    textures: [ 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0 ],
	    indices: [ 0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23 ]
	}, Gt$1 = "#define SHADER_NAME CUBE_MAP\nattribute vec3 aPosition;\nvarying vec3 vWorldPos;\nuniform mat4 projMatrix;\nuniform mat4 viewMatrix;\nvoid main() {\n  vWorldPos = aPosition;\n  gl_Position = projMatrix * viewMatrix * vec4(vWorldPos, 1.);\n}", Ut$1 = "precision highp float;\n#define PI 3.1415926\nvarying vec3 vWorldPos;\nuniform sampler2D equirectangularMap;\nconst vec2 c = vec2(.1591, .3183);\nvec2 d(vec3 e) {\n  vec2 f = vec2(atan(e.y, e.x), asin(e.z));\n  f *= c;\n  f += .5;\n  return f;\n}\nvec3 h(const in vec4 i, const in float j) {\n  return j * i.rgb * i.a;\n}\nvec4 k(const in vec3 i, const in float j) {\n  vec4 l;\n  vec3 m = i / j;\n  l.a = clamp(max(max(m.r, m.g), max(m.b, 1e-6)), .0, 1.);\n  l.a = ceil(l.a * 255.) / 255.;\n  l.rgb = m / l.a;\n  return l;\n}\nvoid main() {\n  vec2 f = d(normalize(vWorldPos));\n  vec4 i = texture2D(equirectangularMap, f);\n#ifdef INPUT_RGBM\ngl_FragColor = i;\n#else\ngl_FragColor = vec4(h(i, 7.), 1.);\n#endif\n}";

	/*!
	 * from claygl
	 * https://github.com/pissang/claygl/
	 * License: BSD-2-Clause
	 */
	function Vt$1(e, n) {
	    const t = e[0], r = e[1], i = e[2];
	    return 0 === n ? 1 : 1 === n ? t : 2 === n ? r : 3 === n ? i : 4 === n ? t * i : 5 === n ? r * i : 6 === n ? t * r : 7 === n ? 3 * i * i - 1 : t * t - r * r;
	}

	const jt$1 = {
	    px: [ 2, 1, 0, -1, -1, 1 ],
	    nx: [ 2, 1, 0, 1, -1, -1 ],
	    py: [ 0, 2, 1, 1, -1, -1 ],
	    ny: [ 0, 2, 1, 1, 1, 1 ],
	    pz: [ 0, 1, 2, -1, -1, -1 ],
	    nz: [ 0, 1, 2, 1, -1, 1 ]
	}, Xt$1 = [ "px", "nx", "py", "ny", "pz", "nz" ];

	const Wt$1 = on.compile(Kn);

	function Kt$1(e, n, t) {
	    const r = e({
	        frag: Wt$1,
	        vert: Gt$1,
	        attributes: {
	            aPosition: kt$1.vertices
	        },
	        uniforms: {
	            projMatrix: e.context("projMatrix"),
	            viewMatrix: e.context("viewMatrix"),
	            cubeMap: n,
	            environmentExposure: 1,
	            bias: 0,
	            size: t,
	            hsv: [ 0, 0, 0 ]
	        },
	        elements: kt$1.indices
	    }), i = [], o = e.framebuffer(t);
	    return Bt$1(e, o, r, {
	        size: t
	    }, (function() {
	        const n = e.read();
	        i.push(new n.constructor(n));
	    })), r.destroy(), o.destroy(), i;
	}

	const qt$1 = new Int8Array([ -1, 1, 0, -1, -1, 0, 1, 1, 0, 1, -1, 0 ]), Yt$1 = new Int8Array([ 0, 1, 0, 0, 1, 1, 1, 0 ]);

	function Jt$1(e, n, t, r) {
	    n = n || 256;
	    const i = Zt$1(t = t || 1024, r = r || 256), o = e.texture({
	        data: i,
	        width: r,
	        height: t,
	        min: "nearest",
	        mag: "nearest"
	    }), a = e.buffer(qt$1), s = e.buffer(Yt$1), c = e.framebuffer({
	        radius: n,
	        colorType: "uint8",
	        colorFormat: "rgba",
	        min: "linear",
	        mag: "linear"
	    }), l = e({
	        frag: "precision highp float;\nvarying vec2 vTexCoords;\nuniform sampler2D distributionMap;\nconst float c = 3.14159265359;\nvec4 d(float a, float b) {\n  a *= 65535.;\n  b *= 65535.;\n  vec4 rgba;\n  rgba[0] = mod(a, 255.);\n  rgba[1] = (a - rgba[0]) / 65280.0;\n  rgba[2] = mod(b, 255.);\n  rgba[3] = (b - rgba[2]) / 65280.0;\n  return rgba;\n}\nvec3 e(float f, vec3 h, float i) {\n  vec4 j = texture2D(distributionMap, vec2(i, f));\n  vec3 k = j.xyz;\n  float l = sign(j.w - .5);\n  float m = sign(j.w - clamp(l, .0, 1.) * 200.0 / 255. - .15);\n  k.x *= l;\n  k.y *= m;\n  vec3 n = abs(h.z) < .999 ? vec3(.0, .0, 1.) : vec3(1., .0, .0);\n  vec3 o = normalize(cross(n, h));\n  vec3 u = cross(h, o);\n  vec3 v = o * k.x + u * k.y + h * k.z;\n  return normalize(v);\n}\nfloat A(float B, float i) {\n  float a = i;\n  float C = (a * a) / 2.;\n  float D = B;\n  float E = B * (1. - C) + C;\n  return D / E;\n}\nfloat F(float B, float G, float i) {\n  float I = A(B, i);\n  float J = A(G, i);\n  return J * I;\n}\nvec2 K(float B, float i) {\n  vec3 L;\n  L.x = sqrt(1. - B * B);\n  L.y = .0;\n  L.z = B;\n  float M = .0;\n  float O = .0;\n  vec3 h = vec3(.0, .0, 1.);\n  const int P = 1024;\n  for(int Q = 0; Q < P; ++Q) {\n    vec3 k = e(float(Q) / float(P), h, i);\n    vec3 R = normalize(2. * dot(L, k) * k - L);\n    float G = max(R.z, .0);\n    float S = max(k.z, .0);\n    float T = max(dot(L, k), .0);\n    float B = max(dot(h, L), .0);\n    if(G > .0) {\n      float U = F(B, G, i);\n      float W = (U * T) / (S * B);\n      float X = pow(1. - T, 5.);\n      M += (1. - X) * W;\n      O += X * W;\n    }\n  }\n  M /= float(P);\n  O /= float(P);\n  return vec2(M, O);\n}\nvoid main() {\n  vec2 Y = K(vTexCoords.x, vTexCoords.y);\n  gl_FragColor = d(Y.x, Y.y);\n}",
	        vert: "attribute vec3 aPosition;\nattribute vec2 aTexCoord;\nvarying vec2 vTexCoords;\nvoid main() {\n  vTexCoords = aTexCoord;\n  gl_Position = vec4(aPosition, 1.);\n}",
	        attributes: {
	            aPosition: {
	                buffer: a
	            },
	            aTexCoord: {
	                buffer: s
	            }
	        },
	        uniforms: {
	            distributionMap: o
	        },
	        framebuffer: c,
	        viewport: {
	            x: 0,
	            y: 0,
	            width: n,
	            height: n
	        },
	        count: qt$1.length / 3,
	        primitive: "triangle strip"
	    });
	    return l(), l.destroy(), a.destroy(), s.destroy(), o.destroy(), c;
	}

	function Zt$1(e, n) {
	    const t = new Array(e * n * 4);
	    for (let r = 0; r < e; r++) {
	        const {x: i, y: o} = Qt$1(r, e);
	        for (let e = 0; e < n; e++) {
	            const a = e / n, s = a * a, c = 2 * Math.PI * i, l = Math.sqrt((1 - o) / (1 + (s * s - 1) * o)), f = Math.sqrt(1 - l * l), d = 4 * (r * n + e), u = f * Math.cos(c), h = f * Math.sin(c);
	            t[d] = Math.abs(255 * u), t[d + 1] = Math.abs(255 * h), t[d + 2] = 255 * l, t[d + 3] = (u > 0 ? 200 : 0) + (h > 0 ? 55 : 0);
	        }
	    }
	    return t;
	}

	function Qt$1(e, n) {
	    let t = (e << 16 | e >>> 16) >>> 0;
	    return t = ((1431655765 & t) << 1 | (2863311530 & t) >>> 1) >>> 0, t = ((858993459 & t) << 2 | (3435973836 & t) >>> 2) >>> 0, 
	    t = ((252645135 & t) << 4 | (4042322160 & t) >>> 4) >>> 0, t = (((16711935 & t) << 8 | (4278255360 & t) >>> 8) >>> 0) / 4294967296, 
	    {
	        x: e / n,
	        y: t
	    };
	}

	var $t$1 = Object.freeze({
	    __proto__: null,
	    createIBLMaps: function(e, n = {}) {
	        const r = n.envTexture, i = n.envCubeSize || 512, o = n.sampleSize || 1024, a = n.roughnessLevels || 256, s = n.prefilterCubeSize || 256;
	        let c;
	        if (Array.isArray(r)) {
	            const t = e.cube({
	                flipY: !0,
	                faces: r
	            });
	            c = function(e, n, t, r, i) {
	                const o = e({
	                    frag: r ? "#define ENC_RGBM 1\n" + Wt$1 : Wt$1,
	                    vert: Gt$1,
	                    attributes: {
	                        aPosition: kt$1.vertices
	                    },
	                    uniforms: {
	                        hsv: [ 0, 0, 0 ],
	                        projMatrix: e.context("projMatrix"),
	                        viewMatrix: e.context("viewMatrix"),
	                        cubeMap: n,
	                        bias: 0,
	                        size: n.width,
	                        environmentExposure: 1,
	                        rgbmRange: i
	                    },
	                    elements: kt$1.indices
	                }), a = e.cube({
	                    width: t,
	                    height: t,
	                    min: "linear",
	                    mag: "linear",
	                    format: "rgba"
	                }), s = e.framebufferCube({
	                    radius: t,
	                    color: a
	                });
	                return Bt$1(e, s, o, {
	                    size: t
	                }, null, [ [ 0, 0, -1 ], [ 0, 0, -1 ], [ 0, 0, 1 ], [ 0, 0, 1 ], [ 0, -1, 0 ], [ 0, -1, 0 ] ]), 
	                o.destroy(), s;
	            }(e, t, i, !0, n.rgbmRange), t.destroy();
	        } else c = function(e, n, t, r) {
	            t = t || 512;
	            const i = e({
	                frag: r ? "#define INPUT_RGBM 1\n" + Ut$1 : Ut$1,
	                vert: Gt$1,
	                attributes: {
	                    aPosition: kt$1.vertices
	                },
	                uniforms: {
	                    projMatrix: e.context("projMatrix"),
	                    viewMatrix: e.context("viewMatrix"),
	                    equirectangularMap: n
	                },
	                elements: kt$1.indices
	            }), o = e.cube({
	                width: t,
	                height: t,
	                min: "linear",
	                mag: "linear",
	                format: "rgba"
	            }), a = e.framebufferCube({
	                radius: t,
	                color: o
	            });
	            return Bt$1(e, a, i), i.destroy(), a;
	        }(e, r, i, !0);
	        const {prefilterMap: l, prefilterMipmap: f} = function(e, n, t, r, i, o) {
	            const a = function(e, n, t, r, i, o) {
	                const a = Zt$1(i = i || 1024, o = o || 256), s = e.texture({
	                    data: a,
	                    width: o,
	                    height: i,
	                    min: "nearest",
	                    mag: "nearest"
	                }), c = e({
	                    frag: "#define SHADER_NAME PBR_prefilter\nprecision highp float;\nvarying vec3 vWorldPos;\nuniform samplerCube environmentMap;\nuniform sampler2D distributionMap;\nuniform float roughness;\nuniform float resolution;\nuniform float rgbmRange;\nconst float c = 3.14159265359;\nfloat d(vec3 e, vec3 f, float h) {\n  float a = h * h;\n  float i = a * a;\n  float j = max(dot(e, f), .0);\n  float k = j * j;\n  float l = i;\n  float m = (k * (i - 1.) + 1.);\n  m = c * m * m;\n  return l / m;\n}\nvec3 n(float o, vec3 e, float h) {\n  vec4 u = texture2D(distributionMap, vec2(h, o));\n  vec3 f = u.xyz;\n  float v = sign(u.w - .5);\n  float A = sign(u.w - 200.0 / 255. * clamp(v, .0, 1.) - .15);\n  f.x *= v;\n  f.y *= A;\n  vec3 B = abs(e.z) < .999 ? vec3(.0, .0, 1.) : vec3(1., .0, .0);\n  vec3 C = normalize(cross(B, e));\n  vec3 D = cross(e, C);\n  vec3 E = C * f.x + D * f.y + e * f.z;\n  return normalize(E);\n}\nvec4 F(const in vec3 G, const in float I) {\n  if(I <= .0)\n    return vec4(G, 1.);\n  vec4 J;\n  vec3 K = G / I;\n  J.a = clamp(max(max(K.r, K.g), max(K.b, 1e-6)), .0, 1.);\n  J.a = ceil(J.a * 255.) / 255.;\n  J.rgb = K / J.a;\n  return J;\n}\nvec3 L(const in vec4 G, const in float I) {\n  if(I <= .0)\n    return G.rgb;\n  return I * G.rgb * G.a;\n}\nvoid main() {\n  vec3 e = normalize(vWorldPos);\n  vec3 M = e;\n  vec3 O = M;\n  const int P = 1024;\n  vec3 Q = vec3(.0);\n  float S = .0;\n  for(int T = 0; T < P; ++T) {\n    vec3 f = n(float(T) / float(P), e, roughness);\n    vec3 U = normalize(2. * dot(O, f) * f - O);\n    float W = max(dot(e, U), .0);\n    if(W > .0) {\n      Q += L(textureCube(environmentMap, U), rgbmRange).rgb * W;\n      S += W;\n    }\n  }\n  Q = Q / S;\n  gl_FragColor = F(Q, rgbmRange);\n}",
	                    vert: Gt$1,
	                    attributes: {
	                        aPosition: kt$1.vertices
	                    },
	                    uniforms: {
	                        projMatrix: e.context("projMatrix"),
	                        viewMatrix: e.context("viewMatrix"),
	                        environmentMap: n,
	                        distributionMap: s,
	                        roughness: e.prop("roughness"),
	                        resolution: r,
	                        rgbmRange: t || 7
	                    },
	                    elements: kt$1.indices,
	                    viewport: {
	                        x: 0,
	                        y: 0,
	                        width: e.prop("size"),
	                        height: e.prop("size")
	                    }
	                });
	                let l = r;
	                const f = e.texture({
	                    radius: r,
	                    min: "linear",
	                    mag: "linear"
	                }), d = e.framebuffer({
	                    radius: r,
	                    color: f
	                }), u = Math.log(l) / Math.log(2), h = [];
	                for (let n = 0; n <= u; n++) {
	                    let t = 0;
	                    Bt$1(e, d, c, {
	                        roughness: n / (u - 1),
	                        size: l
	                    }, (function() {
	                        const n = e.read({
	                            framebuffer: d
	                        });
	                        h[t] || (h[t] = {
	                            mipmap: []
	                        }), h[t].mipmap.push(n), t++;
	                    })), l /= 2, d.resize(l);
	                }
	                return s.destroy(), d.destroy(), c.destroy(), h;
	            }(e, n, t, r, i, o);
	            return {
	                prefilterMap: e.cube({
	                    radius: r,
	                    min: "linear mipmap linear",
	                    mag: "linear",
	                    faces: a
	                }),
	                prefilterMipmap: a
	            };
	        }(e, c, n.rgbmRange, s, o, a);
	        let d;
	        if (!n.ignoreSH) {
	            const n = s;
	            d = function(e, n, r) {
	                const i = new Array(9), o = [], a = [], s = [];
	                for (let c = 0; c < 9; c++) {
	                    const l = [ 0, 0, 0 ];
	                    for (let i = 0; i < Xt$1.length; i++) {
	                        const f = e[i], d = [ 0, 0, 0 ];
	                        let u = 0, h = 0;
	                        const m = jt$1[Xt$1[i]];
	                        for (let e = 0; e < r; e++) for (let i = 0; i < n; i++) {
	                            o[0] = i / (n - 1) * 2 - 1, o[1] = e / (r - 1) * 2 - 1, o[2] = -1, normalize$4(o, o), 
	                            s[0] = o[m[0]] * m[3], s[1] = o[m[1]] * m[4], s[2] = o[m[2]] * m[5], a[0] = f[h++] / 255, 
	                            a[1] = f[h++] / 255, a[2] = f[h++] / 255;
	                            const l = f[h++] / 255 * 7;
	                            a[0] *= l, a[1] *= l, a[2] *= l, scaleAndAdd$2(d, d, a, Vt$1(s, c) * -o[2]), u += -o[2];
	                        }
	                        scaleAndAdd$2(l, l, d, 1 / u);
	                    }
	                    i[c] = scale$4(l, l, 1 / 6);
	                }
	                return i;
	            }(Kt$1(e, l, n), n, n);
	            const r = [];
	            for (let e = 0; e < d.length; e++) r.push(...d[e]);
	            d = r;
	        }
	        const u = {
	            rgbmRange: n.rgbmRange,
	            envMap: c,
	            prefilterMap: l
	        };
	        return d && (u.sh = d), "array" === n.format && (u.envMap = {
	            width: c.width,
	            height: c.height,
	            faces: Kt$1(e, c, i)
	        }, u.prefilterMap = {
	            width: l.width,
	            height: l.height,
	            faces: f
	        }, c.destroy(), l.destroy()), u;
	    },
	    generateDFGLUT: Jt$1
	});

	const er = {
	    uvScale: [ 1, 1 ],
	    uvOffset: [ 0, 0 ],
	    uvRotation: 0,
	    baseColorFactor: [ 1, 1, 1, 1 ],
	    emissiveFactor: [ 0, 0, 0 ],
	    baseColorIntensity: 1,
	    anisotropyDirection: 0,
	    anisotropyFactor: 0,
	    clearCoatFactor: 0,
	    clearCoatIor: 1.4,
	    clearCoatRoughnessFactor: .04,
	    clearCoatThickness: 5,
	    emitColorFactor: 1,
	    occlusionFactor: 1,
	    roughnessFactor: .4,
	    metallicFactor: 0,
	    normalMapFactor: 1,
	    specularF0: .5,
	    emitMultiplicative: 1,
	    normalMapFlipY: 0,
	    outputSRGB: 1,
	    baseColorTexture: null,
	    normalTexture: null,
	    occlusionTexture: null,
	    metallicRoughnessTexture: null,
	    emissiveTexture: null,
	    uvOrigin: [ 0, 0 ],
	    noiseTexture: null,
	    clearCoatTint: [ .006, .006, .006 ],
	    specularAAVariance: 20,
	    specularAAThreshold: 20,
	    hsv: [ 0, 0, 0 ],
	    contrast: 1,
	    bumpTexture: null,
	    bumpScale: .05,
	    bumpMinLayers: 5,
	    bumpMaxLayers: 20,
	    alphaTest: 0
	};

	class nr extends Ce$1 {
	    constructor(e) {
	        const n = v({}, er);
	        (e.metallicRoughnessTexture || e.metallicRoughnessTexture) && (n.roughnessFactor = 1, 
	        n.metallicFactor = 1), super(e, n);
	    }
	    appendDefines(e, n) {
	        super.appendDefines(e, n);
	        const t = this.uniforms;
	        t.GAMMA_CORRECT_INPUT && (e.GAMMA_CORRECT_INPUT = 1), n.data[n.desc.colorAttribute] && (e.HAS_COLOR = 1);
	        return n.data[n.desc.color0Attribute] && (e.HAS_COLOR0 = 1, e.COLOR0_SIZE = n.getColor0Size()), 
	        n.data[n.desc.tangentAttribute] ? e.HAS_TANGENT = 1 : n.data[n.desc.normalAttribute] && (e.HAS_NORMAL = 1), 
	        n.data.aVertexColorType && (e.HAS_VERTEX_COLOR = 1), n.data[n.desc.uv0Attribute] ? (t.baseColorTexture && (e.HAS_ALBEDO_MAP = 1), 
	        t.metallicRoughnessTexture && (e.HAS_METALLICROUGHNESS_MAP = 1), t.occlusionTexture && n.data[n.desc.uv1Attribute] && (e.HAS_AO_MAP = 1), 
	        t.emissiveTexture && (e.HAS_EMISSIVE_MAP = 1), t.normalTexture && (e.HAS_NORMAL_MAP = 1), 
	        t.bumpTexture && (e.HAS_BUMP_MAP = 1), t.skinTexture && (e.HAS_SKIN_MAP = 1), (e.HAS_ALBEDO_MAP || e.HAS_METALLICROUGHNESS_MAP || e.HAS_AO_MAP || e.HAS_EMISSIVE_MAP || e.HAS_NORMAL_MAP || e.HAS_BUMP_MAP || e.HAS_SKIN_MAP) && (e.HAS_MAP = 1), 
	        t.noiseTexture && (e.HAS_RANDOM_TEX = 1), n.data[n.desc.tangentAttribute] ? e.HAS_TANGENT = 1 : n.data[n.desc.normalAttribute] && (e.HAS_NORMAL = 1), 
	        e) : e;
	    }
	}

	class tr extends(He$1(nr)){}

	function rr(e, n, t) {
	    if (t.ambientUpdate) {
	        const {iblTexes: r} = e;
	        if (r) {
	            const i = t.target;
	            ar(r), e.iblTexes = or(n, i);
	        } else {
	            e.iblTexes = or(n, t.target);
	        }
	    }
	}

	const ir = [ 0, 0 ];

	function or(e, n) {
	    const t = n.getLightManager(), r = t && t.getAmbientResource();
	    return r ? {
	        prefilterMap: e.cube({
	            width: r.prefilterMap.width,
	            height: r.prefilterMap.height,
	            faces: r.prefilterMap.faces,
	            min: "linear mipmap linear",
	            mag: "linear",
	            format: "rgba"
	        }),
	        sh: r.sh,
	        rgbmRange: r.rgbmRange
	    } : null;
	}

	function ar(e) {
	    for (const n in e) e[n].destroy && e[n].destroy(), delete e[n];
	}

	var sr = Object.freeze({
	    __proto__: null,
	    loginIBLResOnCanvas: function(e, n, t) {
	        if (!e.dfgLUT && (e.dfgLUT = Jt$1(n), e.dfgLUT.mtkRefCount = 0, t)) {
	            const r = rr.bind(this, e, n);
	            t.on("updatelights", r), e._iblResListener = r;
	        }
	        e.dfgLUT.mtkRefCount++;
	        const r = t.getLightManager();
	        return r && r.getAmbientResource() ? (e.iblTexes || (e.iblTexes = or(n, t)), {
	            dfgLUT: e.dfgLUT,
	            iblTexes: e.iblTexes
	        }) : {
	            dfgLUT: e.dfgLUT,
	            iblTexes: null
	        };
	    },
	    getIBLResOnCanvas: function(e) {
	        const {dfgLUT: n, iblTexes: t} = e;
	        return {
	            dfgLUT: n,
	            iblTexes: t
	        };
	    },
	    logoutIBLResOnCanvas: function(e, n) {
	        let t = !1;
	        if (e.dfgLUT && (e.dfgLUT.mtkRefCount--, e.dfgLUT.mtkRefCount <= 0)) {
	            if (t = !0, n) {
	                n.off("updatelights", e._iblResListener);
	            }
	            e.dfgLUT.destroy(), delete e.dfgLUT;
	        }
	        e.iblTexes && t && (ar(e.iblTexes), delete e.iblTexes);
	    },
	    getPBRUniforms: function(e, n, t, r, i) {
	        const o = e.viewMatrix, a = e.projMatrix, s = e.cameraPosition, c = e.getRenderer().canvas, l = function(e, n) {
	            const t = e.getLightManager(), r = t && t.getAmbientResource(), i = t && t.getAmbientLight() || {}, o = t && t.getDirectionalLight() || {};
	            let a;
	            if (r) {
	                const e = n.prefilterMap.width, t = Math.log(e) / Math.log(2);
	                a = {
	                    prefilterMap: n.prefilterMap,
	                    diffuseSPH: n.sh,
	                    prefilterMiplevel: [ t, t ],
	                    prefilterSize: [ e, e ],
	                    hdrHSV: i.hsv || [ 0, 0, 0 ]
	                };
	            } else a = {
	                ambientColor: i.color || [ .2, .2, .2 ]
	            };
	            return a.rgbmRange = r ? n.rgbmRange : 7, a.environmentExposure = g(i.exposure) ? i.exposure : 1, 
	            a.environmentOrientation = i.orientation || 0, a.light0_diffuse = [ ...o.color || [ 1, 1, 1 ], 1 ], 
	            a.light0_viewDirection = o.direction || [ 1, 1, -1 ], a;
	        }(e, n), f = v({
	            viewMatrix: o,
	            projMatrix: a,
	            projViewMatrix: e.projViewMatrix,
	            cameraPosition: s,
	            outSize: [ c.width, c.height ],
	            cameraNearFar: [ e.cameraNear, e.cameraFar ]
	        }, l);
	        return f.brdfLUT = t, r && r.renderUniforms && v(f, r.renderUniforms), f.halton = i || ir, 
	        f;
	    },
	    createIBLTextures: or,
	    disposeIBLTextures: ar,
	    isSupported: function(e) {
	        return e.hasExtension("EXT_shader_texture_lod");
	    }
	});

	class cr extends vn {
	    constructor(e) {
	        super({
	            vert: "attribute vec3 aPosition;\nuniform mat4 lightProjViewModelMatrix;\nuniform mat4 positionMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 modelMatrix;\n#include <line_extrusion_vert>\n#include <get_output>\nvarying vec4 vPosition;\nvoid main() {\n  mat4 c = getPositionMatrix();\n#ifdef IS_LINE_EXTRUSION\nvec3 d = getLineExtrudePosition(aPosition);\n  vec4 e = getPosition(d);\n#else\nvec4 e = getPosition(aPosition);\n#endif\ngl_Position = lightProjViewModelMatrix * c * e;\n  vPosition = gl_Position;\n}",
	            frag: "#define SHADER_NAME vsm_mapping\n#ifdef USE_VSM\n#extension GL_OES_standard_derivatives : enable\n#endif\nprecision highp float;\nvarying vec4 vPosition;\n#ifdef PACK_FLOAT\n#include <common_pack_float>\n#endif\nvoid main() {\n  \n#if defined(USE_VSM)\nfloat c = vPosition.z / vPosition.w;\n  c = c * .5 + .5;\n  float d = c;\n  float e = c * c;\n  float f = dFdx(c);\n  float h = dFdy(c);\n  e += .25 * (f * f + h * h);\n  gl_FragColor = vec4(d, e, c, .0);\n#endif\n#if defined(USE_ESM)\n#ifdef PACK_FLOAT\ngl_FragColor = common_encodeDepth(gl_FragCoord.z);\n#else\ngl_FragColor = vec4(gl_FragCoord.z, .0, .0, 1.);\n#endif\n#endif\n}",
	            uniforms: [ {
	                name: "lightProjViewModelMatrix",
	                type: "function",
	                fn: function(e, t) {
	                    return multiply$5([], t.lightProjViewMatrix, t.modelMatrix);
	                }
	            } ],
	            extraCommandProps: {},
	            defines: e
	        });
	    }
	    filter(e) {
	        return e.castShadow;
	    }
	}

	class lr extends Mn {
	    constructor({blurOffset: e}) {
	        super({
	            vert: An,
	            frag: "precision highp float;\nvarying vec2 vTexCoord;\nuniform sampler2D textureSource;\nuniform vec2 resolution;\n#include <common_pack_float>\nvoid main() {\n  float c = .0;\n  float d = .0;\n  for(int x = -BOXBLUR_OFFSET; x <= BOXBLUR_OFFSET; ++x)\n    for(int y = -BOXBLUR_OFFSET; y <= BOXBLUR_OFFSET; ++y) {\n      vec2 e = vTexCoord.st + vec2(float(x) / resolution.x, float(y) / resolution.y);\n      e = clamp(e, .0, 1.);\n      float f = common_decodeDepth(texture2D(textureSource, e));\n      float s = max(.0, sign(1. - f));\n      d += sign(f) * s;\n      c += f;\n    }\n  float h = c / max(1., d);\n  gl_FragColor = common_encodeDepth(h);\n}",
	            defines: {
	                BOXBLUR_OFFSET: e || 2
	            }
	        }), this._blurOffset = e || 2;
	    }
	    getMeshCommand(e, n) {
	        const t = "box_shadow_blur_" + this._blurOffset;
	        return this.commands[t] || (this.commands[t] = this.createREGLCommand(e, null, n.getElements())), 
	        this.commands[t];
	    }
	}

	let fr = null, dr = null;

	class ur {
	    constructor(e, {width: n, height: t, blurOffset: r, defines: i}) {
	        this.renderer = e, this.width = n || 512, this.height = t || 512, this.blurOffset = d(r) ? 2 : r, 
	        this._init(i);
	    }
	    render(e, {cameraProjViewMatrix: n, lightDir: t, farPlane: r, cameraLookAt: i}) {
	        return {
	            lightProjViewMatrix: this._renderShadow(e, n, t, r, i),
	            shadowMap: this.blurTex || this.depthTex,
	            depthFBO: this.depthFBO,
	            blurFBO: this.blurFBO
	        };
	    }
	    resize(e, n) {
	        return this.depthTex && (this.depthTex.resize(e, n), this.depthFBO.resize(e, n)), 
	        this.blurFBO && (this.blurTex.resize(e, n), this.blurFBO.resize(e, n)), this;
	    }
	    _renderShadow(e, n, t, r, i) {
	        const o = this.renderer, a = fr(n);
	        if (r) for (let e = 4; e < 8; e++) a[e] = r[e - 4];
	        const s = dr(i, a, t);
	        return o.clear({
	            color: [ 1, 0, 0, 1 ],
	            depth: 1,
	            framebuffer: this.depthFBO
	        }), o.render(this.shadowMapShader, {
	            lightProjViewMatrix: s
	        }, e, this.depthFBO), this.blurFBO && (this.boxBlurShader || (this.boxBlurShader = new lr({
	            blurOffset: this.blurOffset
	        })), o.clear({
	            color: [ 1, 0, 0, 1 ],
	            depth: 1,
	            framebuffer: this.blurFBO
	        }), o.render(this.boxBlurShader, {
	            resolution: [ this.depthTex.width, this.depthTex.height ],
	            textureSource: this.depthTex
	        }, null, this.blurFBO)), s;
	    }
	    _init(e) {
	        const n = this.renderer.regl, t = this.width, r = this.height;
	        this.depthTex = n.texture({
	            width: t,
	            height: r,
	            format: "rgb",
	            type: "uint8",
	            min: "nearest",
	            mag: "nearest"
	        }), this.shadowMapShader = new cr(e), this.shadowMapShader.filter = e => e.castShadow, 
	        this.depthFBO = n.framebuffer({
	            color: this.depthTex
	        }), this.blurOffset <= 0 || (this.blurTex = n.texture({
	            width: t,
	            height: r,
	            format: "rgb",
	            type: "uint8",
	            min: "linear",
	            mag: "linear"
	        }), this.blurFBO = n.framebuffer({
	            color: this.blurTex
	        }));
	    }
	    dispose() {
	        this.depthTex && (this.depthTex.destroy(), this.depthFBO.destroy(), delete this.depthTex, 
	        delete this.depthFBO), this.blurTex && (this.blurTex.destroy(), this.blurFBO.destroy(), 
	        delete this.blurTex, delete this.blurFBO), this.shadowMapShader && (this.shadowMapShader.dispose(), 
	        delete this.shadowMapShader), this.boxBlurShader && (this.boxBlurShader.dispose(), 
	        delete this.boxBlurShader);
	    }
	}

	fr = function() {
	    const e = [ [ -1, -1, -1, 1 ], [ 1, -1, -1, 1 ], [ 1, 1, -1, 1 ], [ -1, 1, -1, 1 ], [ -1, -1, 1, 1 ], [ 1, -1, 1, 1 ], [ 1, 1, 1, 1 ], [ -1, 1, 1, 1 ] ], t = new Array(16);
	    return function(i) {
	        invert$2(t, i);
	        const o = [];
	        for (let n = 0; n < e.length; n++) {
	            const i = transformMat4$1([], e[n], t);
	            scale$3(i, i, 1 / i[3]), o.push(i);
	        }
	        return o;
	    };
	}(), dr = function() {
	    let e = new Array(4);
	    const i = new Array(3), o = [ 0, 0, 0, 0 ], a = [ 0, 1, 0 ], s = new Array(3);
	    let c = new Array(16), l = new Array(16);
	    const f = new Array(16), d = [ 1, 1, 1 ], u = [ 0, 0, 0 ];
	    return function(h, m, v) {
	        set$3(o, ...h, 1), scale$4(i, v, -1), c = lookAt(c, add$4(s, o, normalize$4(s, i)), o, a), 
	        transformMat4$1(e, m[0], c);
	        let _ = e[2], g = e[2], x = e[0], b = e[0], p = e[1], y = e[1];
	        for (let n = 1; n < 8; n++) e = transformMat4$1(e, m[n], c), e[2] > g && (g = e[2]), 
	        e[2] < _ && (_ = e[2]), e[0] > b && (b = e[0]), e[0] < x && (x = e[0]), e[1] > y && (y = e[1]), 
	        e[1] < p && (p = e[1]);
	        l = ortho(l, -1, 1, -1, 1, -g, -_);
	        const A = d[0] = 2 / (b - x), S = d[1] = -2 / (y - p);
	        u[0] = -.5 * (x + b) * A, u[1] = -.5 * (p + y) * S, identity$2(f), translate$1(f, f, u), 
	        scale$5(f, f, d);
	        const T = multiply$5(l, f, l);
	        return multiply$5(new Array(16), T, c);
	    };
	}();

	class hr extends vn {
	    constructor(e) {
	        super({
	            vert: "#define SHADER_NAME SHADOW_DISPLAY\nattribute vec3 aPosition;\nuniform mat4 projMatrix;\nuniform mat4 modelViewMatrix;\nuniform vec2 halton;\nuniform vec2 globalTexSize;\nvarying vec4 vPosition;\n#include <vsm_shadow_vert>\nvoid main() {\n  vec4 c = vec4(aPosition, 1.);\n  vec4 d = modelViewMatrix * c;\n  mat4 e = projMatrix;\n  e[2].xy += halton.xy / globalTexSize.xy;\n  gl_Position = e * d;\n  vPosition = gl_Position;\n  shadow_computeShadowPars(c);\n}",
	            frag: "#define SHADER_NAME SHADOW_DISPLAY\nprecision mediump float;\nuniform vec3 color;\n#include <vsm_shadow_frag>\nvoid main() {\n  float c = shadow_computeShadow();\n  float d = 1. - c;\n  gl_FragColor = vec4(color * d, d);\n}",
	            uniforms: [ {
	                name: "modelViewMatrix",
	                type: "function",
	                fn: function(e, t) {
	                    const r = [];
	                    return multiply$5(r, t.viewMatrix, t.modelMatrix), r;
	                }
	            } ],
	            defines: e || {
	                USE_ESM: 1
	            },
	            extraCommandProps: {
	                depth: {
	                    enable: !0,
	                    mask: !1
	                },
	                viewport: {
	                    x: 0,
	                    y: 0,
	                    width: (e, n) => n.globalTexSize[0],
	                    height: (e, n) => n.globalTexSize[1]
	                }
	            }
	        });
	    }
	    getMeshCommand(e, n) {
	        return this.commands.shadow_display || (this.commands.shadow_display = this.createREGLCommand(e, null, n.getElements())), 
	        this.commands.shadow_display;
	    }
	}

	function mr(e) {
	    return 256 * e[2] * 256 + 256 * e[1] + e[0];
	}

	const vr = new Uint8Array(4), _r = new Float32Array(vr.buffer);

	let gr, xr;

	const br = "\n    vec3 unpack(highp float f) {\n        highp vec3 color;\n        color.b = floor(f / 65536.0);\n        color.g = floor((f - color.b * 65536.0) / 256.0);\n        color.r = f - floor(color.b * 65536.0) - floor(color.g * 256.0);\n        // now we have a vec3 with the 3 components in range [0..255]. Let's normalize it!\n        return color / 255.0;\n    }\n", pr = `\n    precision highp float;\n\n    varying float vPickingId;\n    varying float vFbo_picking_visible;\n\n    uniform float fbo_picking_meshId;\n\n    ${br}\n\n    void main() {\n        if (vFbo_picking_visible == 0.0) {\n            discard;\n            return;\n        }\n        gl_FragColor = vec4(unpack(vPickingId), fbo_picking_meshId / 255.0);\n    }\n`, yr = `\n    precision highp float;\n\n    uniform int fbo_picking_meshId;\n    varying float vFbo_picking_visible;\n\n    ${br}\n\n    void main() {\n        if (vFbo_picking_visible == 0.0) {\n            discard;\n            return;\n        }\n        gl_FragColor = vec4(unpack(float(fbo_picking_meshId)), 1.0);\n        // gl_FragColor = vec4(unpack(float(35)), 1.0);\n    }\n`, Ar = `\n    precision highp float;\n\n    varying float vPickingId;\n    varying float vFbo_picking_visible;\n\n    ${br}\n\n    void main() {\n        if (vFbo_picking_visible == 0.0) {\n            discard;\n            return;\n        }\n        gl_FragColor = vec4(unpack(vPickingId), 1.0);\n    }\n`;

	class Sr {
	    constructor(e, {vert: n, uniforms: t, defines: r, extraCommandProps: i}, o, a) {
	        this._renderer = e, this._fbo = o, this._map = a, this._clearFbo(o), this._vert = n, 
	        this._uniforms = t, this._defines = r, this._extraCommandProps = v({}, i), delete this._extraCommandProps.blend, 
	        delete this._extraCommandProps.stencil, this._currentMeshes = [], this._init();
	    }
	    _init() {
	        const e = [];
	        this._uniforms && e.push(...this._uniforms);
	        const n = {
	            ENABLE_PICKING: 1,
	            HAS_PICKING_ID: 1
	        };
	        if (this._defines) for (const e in this._defines) n[e] = this._defines[e];
	        const t = this._vert, r = this._extraCommandProps;
	        this._shader0 = new vn({
	            vert: t,
	            frag: pr,
	            uniforms: e,
	            defines: n,
	            extraCommandProps: r
	        }), this._shader2 = new vn({
	            vert: t,
	            frag: Ar,
	            uniforms: e,
	            defines: n,
	            extraCommandProps: r
	        });
	        const i = {
	            ENABLE_PICKING: 1,
	            HAS_PICKING_ID: 1
	        };
	        if (this._defines) for (const e in this._defines) i[e] = this._defines[e];
	        this._shader1 = new vn({
	            vert: t,
	            frag: yr,
	            uniforms: e,
	            defines: i,
	            extraCommandProps: r
	        }), this._depthShader = new vn({
	            vert: t,
	            frag: "\n    #ifdef GL_ES\n        precision highp float;\n    #endif\n    #if __VERSION__ == 100\n        #extension GL_EXT_frag_depth : enable\n    #endif\n    #include <gl2_frag>\n    #include <common_pack_float>\n    varying float vFbo_picking_viewZ;\n    uniform float logDepthBufFC;\n    varying float vFbo_picking_fragDepth;\n\n    const float PackUpscale = 256. / 255.;\n    const float UnpackDownscale = 255. / 256.;\n    const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\n    const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\n    const float ShiftRight8 = 1. / 256.;\n    vec4 packDepthToRGBA(const in float v ) {\n        vec4 r = vec4(fract(v * PackFactors), v);\n        r.yzw -= r.xyz * ShiftRight8;\n        return r * PackUpscale;\n    }\n\n    void main() {\n        float fragDepth = vFbo_picking_fragDepth > 1.0 ? vFbo_picking_fragDepth : vFbo_picking_viewZ + 1.0;\n        #if __VERSION__ == 300\n            gl_FragDepthEXT = log2(fragDepth) * logDepthBufFC * 0.5;\n        #endif\n        vec4 depthColor = packDepthToRGBA(fragDepth - 1.0);\n        glFragColor = common_unpackFloat(dot(depthColor, UnpackFactors));\n        #if __VERSION__ == 100\n            gl_FragColor = glFragColor;\n        #endif\n    }\n",
	            uniforms: e,
	            defines: i,
	            extraCommandProps: r
	        }), this._depthShader.version = 300, this._scene = new Ke$1, this._scene1 = new Ke$1;
	    }
	    filter() {
	        return !0;
	    }
	    render(e, n, t = !1) {
	        if (!e || !e.length) return this;
	        const r = this._fbo;
	        t && this.clear(), e = e.filter(e => e && e.isValid()), this._scene.setMeshes(e);
	        const i = this._getShader(e, t);
	        i.filter = this.filter, this._currentShader && i !== this._currentShader && this.clear(), 
	        this._currentShader = i, e.forEach((e, n) => {
	            e.setUniform("fbo_picking_meshId", n + this._currentMeshes.length);
	        });
	        for (let n = 0; n < e.length; n++) this._currentMeshes.push(e[n]);
	        return this._renderer.render(i, n, this._scene, r), this;
	    }
	    pick(e, n, t, r, i = {}) {
	        const o = this._currentShader, a = this._currentMeshes;
	        if (!o || !a || !a.length) return {
	            pickingId: null,
	            meshId: null,
	            point: null
	        };
	        e = Math.round(e), n = Math.round(n);
	        const s = this._fbo;
	        if (e <= 2 || e >= s.width - 2 || n <= 2 || n >= s.height - 2) return {
	            pickingId: null,
	            meshId: null,
	            point: null
	        };
	        const {px: c, py: l, width: f, height: d} = this._getParams(e, n, t, s), u = new Uint8Array(4 * f * d), h = this._renderer.regl.read({
	            data: u,
	            x: c,
	            y: l,
	            framebuffer: s,
	            width: f,
	            height: d
	        }), m = [];
	        let v = [];
	        for (let e = 0; e < h.length; e += 4) {
	            const {pickingId: n, meshId: t} = this._packData(h.subarray(e, e + 4), o);
	            m.push(t), v.push(n);
	        }
	        const _ = {}, g = m.filter(e => null != e && !_[e] && (_[e] = 1, !0)).map(e => a[e]);
	        let x;
	        for (let e = 0; e < g.length; e++) if (g[e] && g[e].geometry) {
	            x = g[e];
	            break;
	        }
	        if (!x) return {
	            pickingId: null,
	            meshId: null,
	            point: null
	        };
	        const b = x.geometry.desc.pickingIdAttribute;
	        m.length && o === this._shader1 && (void 0 !== x.getUniform("uPickingId") || x.geometry.data[b]) && (v = this._getPickingId(c, l, f, d, u, g, r));
	        const p = [], y = [];
	        if (m.length && i.returnPoint) {
	            const {viewMatrix: t, projMatrix: o} = i, a = this._pickDepth(c, l, f, d, u, g, r);
	            for (let r = 0; r < a.length; r++) if (a[r] && null != m[r] && null != v[r]) {
	                const i = this._getWorldPos(e, n, a[r], t, o), s = this._convertPickPoint(i);
	                p.push(i), y.push(s);
	            } else p.push(null), y.push(null);
	        }
	        const A = [];
	        for (let e = 0; e <= t; e++) A.push(e), e > 0 && A.push(-e);
	        for (let e = 0; e < A.length; e++) for (let n = 0; n < A.length; n++) {
	            const r = (A[n] + t) * f + (A[e] + t);
	            if (null != m[r] && null != v[r]) return {
	                meshId: m[r],
	                pickingId: v[r],
	                point: p[r] || null,
	                coordinate: y[r] || null
	            };
	        }
	        return {
	            pickingId: null,
	            meshId: null,
	            point: null
	        };
	    }
	    _convertPickPoint(e) {
	        const n = this._map;
	        if (!n) return null;
	        const t = n.getGLRes();
	        if (!gr) {
	            const e = n.getCenter();
	            xr = new e.constructor(0, 0, 0);
	            const t = n.coordToPoint(e);
	            gr = new t.constructor(0, 0);
	        }
	        gr.set(e[0], e[1]);
	        const r = n.pointAtResToCoord(gr, t, xr), i = n.pointAtResToAltitude(e[2], t);
	        return [ r.x, r.y, i ];
	    }
	    clear() {
	        return this._fbo && this._clearFbo(this._fbo), this._currentMeshes = [], delete this._currentShader, 
	        this;
	    }
	    getMeshAt(e) {
	        return this._currentMeshes ? this._currentMeshes[e] : null;
	    }
	    getRenderedMeshes() {
	        return this._currentMeshes;
	    }
	    dispose() {
	        this.clear(), this._shader0 && this._shader0.dispose(), this._shader1 && this._shader1.dispose(), 
	        this._shader2 && this._shader2.dispose(), this._scene && this._scene.clear(), this._scene1 && this._scene1.clear();
	    }
	    _getWorldPos(e, t, r, i, o) {
	        const a = this._fbo, s = [], c = a.width / 2 || 1, l = a.height / 2 || 1, f = [ (e - c) / c, (l - t) / l, 0, 1 ], d = [ (e - c) / c, (l - t) / l, 1, 1 ], u = invert$2(s, o), h = [], m = [];
	        Tr(h, f, u), Tr(m, d, u);
	        const v = -h[2], _ = (r - v) / (-m[2] - v), g = multiply$5(s, o, i), b = invert$2(s, g), p = Tr(f, f, b), y = Tr(d, d, b);
	        return [ x$1(p[0], y[0], _), x$1(p[1], y[1], _), x$1(p[2], y[2], _) ];
	    }
	    _getPickingId(e, n, t, r, i, o, a) {
	        const s = this._renderer.regl, c = this._getFBO1();
	        this._clearFbo(c), this._scene1.setMeshes(o), this._renderer.render(this._shader2, a, this._scene1, c);
	        const l = s.read({
	            data: i,
	            x: e,
	            y: n,
	            framebuffer: c,
	            width: t,
	            height: r
	        }), f = [];
	        for (let e = 0; e < l.length; e += 4) f.push(mr(l.subarray(e, e + 4)));
	        return f;
	    }
	    _pickDepth(e, n, t, r, i, o, a) {
	        const s = this._renderer.regl, c = this._getFBO1();
	        this._scene1.setMeshes(o), this._clearFbo(c), a.logDepthBufFC = 2 / (Math.log(this._map.cameraFar + 1) / Math.LN2), 
	        this._renderer.render(this._depthShader, a, this._scene1, c);
	        const l = s.read({
	            data: i,
	            x: e,
	            y: n,
	            framebuffer: c,
	            width: t,
	            height: r
	        }), f = [];
	        for (let e = 0; e < l.length; e += 4) f.push((d = l.subarray(e, e + 4), vr[0] = d[3], 
	        vr[1] = d[2], vr[2] = d[1], vr[3] = d[0], _r[0]));
	        var d;
	        return f;
	    }
	    _packData(e, n) {
	        if (255 === e[0] && 255 === e[1] && 255 === e[2] && 255 === e[3]) return {
	            meshId: null,
	            pickingId: null
	        };
	        let t = null, r = null;
	        return n === this._shader1 ? r = mr(e) : n === this._shader0 ? (r = e[3], t = mr(e)) : (r = null, 
	        t = mr(e)), {
	            meshId: r,
	            pickingId: t
	        };
	    }
	    _clearFbo(e) {
	        this._renderer.regl.clear({
	            color: [ 1, 1, 1, 1 ],
	            depth: 1,
	            stencil: 0,
	            framebuffer: e
	        });
	    }
	    _getShader(e, n) {
	        return n && e.length < 256 ? this._shader0 : this._shader1;
	    }
	    _getFBO1() {
	        const e = this._renderer.regl, n = this._fbo;
	        return this._fbo1 ? this._fbo1.width === n.width && this._fbo1.height === n.height || this._fbo1.resize(n.width, n.height) : this._fbo1 = e.framebuffer(n.width, n.height), 
	        this._fbo1;
	    }
	    _getParams(e, n, t, r) {
	        n = r.height - n;
	        let i = 2 * t + 1, o = 2 * t + 1;
	        const a = (e -= t) + i, s = (n -= t) + o;
	        return a > r.width && (i -= a - r.width), s > r.height && (o -= s - r.height), {
	            px: e = e < 0 ? 0 : e,
	            py: n = n < 0 ? 0 : n,
	            width: i,
	            height: o
	        };
	    }
	    getPickingVert() {
	        return this._vert;
	    }
	    getUniformDeclares() {
	        return this._uniforms;
	    }
	}

	function Tr(e, n, t) {
	    const r = n[0], i = n[1], o = n[2], a = 1 / (t[3] * r + t[7] * i + t[11] * o + t[15]);
	    return e[0] = (t[0] * r + t[4] * i + t[8] * o + t[12]) * a, e[1] = (t[1] * r + t[5] * i + t[9] * o + t[13]) * a, 
	    e[2] = (t[2] * r + t[6] * i + t[10] * o + t[14]) * a, e;
	}

	const Mr = e => e && e.geometry && void 0 === e.geometry.properties.shaderHash, Cr = [], Or = [], Er = [ {
	    name: "modelViewMatrix",
	    type: "function",
	    fn: (e, t) => multiply$5(Cr, t.viewMatrix, t.modelMatrix)
	}, {
	    name: "modelViewProjMatrix",
	    type: "function",
	    fn: (e, t) => {
	        const r = multiply$5(Cr, t.viewMatrix, t.modelMatrix);
	        return multiply$5(Cr, t.projMatrix, r);
	    }
	}, {
	    name: "modelMatrixInverse",
	    type: "function",
	    fn: (e, t) => invert$2(Cr, t.modelMatrix)
	}, {
	    name: "projMatrixInverse",
	    type: "function",
	    fn: (e, t) => invert$2(Cr, t.projMatrix)
	}, {
	    name: "modelViewMatrixInverse",
	    type: "function",
	    fn: (e, t) => (multiply$5(Cr, t.viewMatrix, t.modelMatrix), invert$2(Cr, Cr))
	}, {
	    name: "modelViewProjMatrixInverse",
	    type: "function",
	    fn: (e, t) => {
	        const r = multiply$5(Cr, t.viewMatrix, t.modelMatrix);
	        return multiply$5(Cr, t.projMatrix, r), invert$2(Cr, Cr);
	    }
	}, {
	    name: "modelInverseTransposeMatrix",
	    type: "function",
	    fn: (e, n) => {
	        const t = fromMat4$1(Or, n.modelMatrix), r = transpose$1(t, t);
	        return invert$3(r, r);
	    }
	}, {
	    name: "modelViewInverseTransposeMatrix",
	    type: "function",
	    fn: (e, t) => {
	        const r = multiply$5(Cr, t.viewMatrix, t.modelMatrix), o = fromMat4$1(Or, r), a = transpose$1(o, o);
	        return invert$3(a, a);
	    }
	} ], Pr = {
	    LOCAL: "positionMatrix",
	    MODEL: "modelMatrix",
	    VIEW: "viewMatrix",
	    PROJECTION: "projMatrix",
	    MODELVIEW: "modelViewMatrix",
	    MODELVIEWPROJECTION: "modelViewProjMatrix",
	    MODELINVERSE: "modelMatrixInverse",
	    VIEWINVERSE: "viewMatrixInverse",
	    PROJECTIONINVERSE: "projMatrixInverse",
	    MODELVIEWINVERSE: "modelViewMatrixInverse",
	    MODELVIEWPROJECTIONINVERSE: "modelViewProjMatrixInverse",
	    MODELINVERSETRANSPOSE: "modelInverseTransposeMatrix",
	    MODELVIEWINVERSETRANSPOSE: "modelViewInverseTransposeMatrix",
	    VIEWPORT: "viewport",
	    JOINTMATRIX: "jointMatrix",
	    ALPHACUTOFF: "alphaCutoff"
	};

	class Ir {
	    constructor(e, n, t) {
	        this._regl = e, this._khrShaders = {}, this._commandProps = n, this._resLoader = t;
	    }
	    getExcludeFilter() {
	        return Mr;
	    }
	    forEachShader(e) {
	        for (const n in this._khrShaders) {
	            const t = this._khrShaders[n];
	            e(t.shader, t.filter, t.uniformSemantics);
	        }
	    }
	    createMesh(e, n, t, r) {
	        const i = n.extensions.KHR_techniques_webgl, o = n.materials[e.material].extensions.KHR_techniques_webgl, {technique: a, values: s} = o, c = i.techniques[a], l = i.programs[c.program], f = i.shaders[l.vertexShader], d = i.shaders[l.fragmentShader];
	        d.content = function(e) {
	            if (e && e.indexOf("precision") < 0) return "precision mediump float;\n" + e;
	            return e;
	        }(d.content);
	        const u = I$1(f.content) + "-" + I$1(d.content);
	        this._khrShaders[u] || (this._khrShaders[u] = this._createTechniqueShader(u, i, a, this._commandProps, r));
	        const {attributeSemantics: h} = this._khrShaders[u], m = this._createGeometry(e, h, t, u), _ = v({}, s);
	        for (const e in s) if (c.uniforms[e] && 35678 === c.uniforms[e].type) {
	            _[e] = this._getTexture(n.textures[s[e].index]);
	        }
	        return {
	            geometry: m,
	            material: new Ce$1(_)
	        };
	    }
	    _createGeometry(e, n, t, r) {
	        const i = e.attributes;
	        if (i.COLOR_0) {
	            const e = i.COLOR_0.array || i.COLOR_0;
	            if (e instanceof Float32Array) {
	                const n = new Uint8Array(e.length);
	                for (let t = 0; t < n.length; t++) n[t] = Math.round(255 * e[t]);
	                i.COLOR_0.array ? (i.COLOR_0.array = n, i.COLOR_0.componentType = 5121) : i.COLOR_0 = n;
	            }
	        }
	        const o = {};
	        for (const e in i) {
	            const t = me$1(this._regl, i[e], {
	                dimension: i[e].itemSize
	            }), r = n[e] || e;
	            o[r] = {
	                buffer: t
	            }, i[e].quantization && (o[r].quantization = i[e].quantization), r === n.POSITION && (o[r].array = i[e].array);
	        }
	        const a = new Q$1(o, e.indices.array ? e.indices.array : e.indices, 0, {
	            positionAttribute: n.POSITION,
	            normalAttribute: n.NORMAL,
	            uv0Attribute: n.TEXCOORD_0,
	            uv1Attribute: n.TEXCOORD_1,
	            color0Attribute: n.COLOR_0,
	            tangentAttribute: n.TANGENT,
	            textureCoordMatrixAttribute: n.TextureCoordMatrix,
	            primitive: void 0 === e.mode ? "triangles" : ne$1(e.mode)
	        });
	        a.generateBuffers(this._regl, {
	            excludeElementsInVAO: t
	        }), a.properties.shaderHash = r;
	        const s = a.data[a.desc.positionAttribute];
	        return s && s.array && delete s.array, a;
	    }
	    _getTexture(e) {
	        const n = {
	            type: e.type ? re$1(e.type) : "uint8",
	            format: e.format ? oe$1(e.format) : "rgba",
	            flipY: !!e.flipY
	        }, t = e.image;
	        t.array ? n.data = t.array : t.mipmap && (n.mipmap = t.mipmap), n.width = t.width, 
	        n.height = t.height;
	        const r = e.sampler || e.texture.sampler;
	        return r && (r.magFilter && (n.mag = se$1(r.magFilter)), r.minFilter && (n.min = le$1(r.minFilter)), 
	        r.wrapS && (n.wrapS = de$1(r.wrapS)), r.wrapT && (n.wrapT = de$1(r.wrapT))), new en(n, this._resLoader);
	    }
	    _createTechniqueShader(e, n, t, r, i) {
	        const {techniques: o, programs: a, shaders: s} = n, c = o[t], l = a[c.program], f = s[l.vertexShader].content, d = s[l.fragmentShader].content, u = {};
	        for (const e in c.uniforms) {
	            const n = c.uniforms[e];
	            n.semantic && (u[n.semantic] = e);
	        }
	        const h = Er.slice();
	        for (const e in u) {
	            h.push({
	                name: u[e],
	                type: "function",
	                fn: (n, t) => t[Pr[e]]
	            });
	        }
	        const m = new vn({
	            vert: f,
	            frag: d,
	            uniforms: h,
	            extraCommandProps: r
	        });
	        i && (m.version = 300);
	        const v = {};
	        for (const e in c.attributes) {
	            v[c.attributes[e].semantic] = e;
	        }
	        return {
	            shader: m,
	            filter: n => n && n.geometry && n.geometry.properties.shaderHash === e,
	            uniformSemantics: u,
	            attributeSemantics: v
	        };
	    }
	    dispose() {
	        for (const e in this._khrShaders) {
	            const {shader: n} = this._khrShaders[e];
	            n.dispose();
	        }
	        this._khrShaders = {};
	    }
	}

	var wr = {
	    exports: {}
	};

	function Rr(e, n, t) {
	    t = t || 2;
	    var r, i, o, a, s, c, l, f = n && n.length, d = f ? n[0] * t : e.length, u = Dr(e, 0, d, t, !0), h = [];
	    if (!u || u.next === u.prev) return h;
	    if (f && (u = function(e, n, t, r) {
	        var i, o, a, s = [];
	        for (i = 0, o = n.length; i < o; i++) (a = Dr(e, n[i] * r, i < o - 1 ? n[i + 1] * r : e.length, r, !1)) === a.next && (a.steiner = !0), 
	        s.push(jr(a));
	        for (s.sort(kr), i = 0; i < s.length; i++) t = Gr(s[i], t);
	        return t;
	    }(e, n, u, t)), e.length > 80 * t) {
	        r = o = e[0], i = a = e[1];
	        for (var m = t; m < d; m += t) (s = e[m]) < r && (r = s), (c = e[m + 1]) < i && (i = c), 
	        s > o && (o = s), c > a && (a = c);
	        l = 0 !== (l = Math.max(o - r, a - i)) ? 32767 / l : 0;
	    }
	    return Fr(u, h, t, r, i, l, 0), h;
	}

	function Dr(e, n, t, r, i) {
	    var o, a;
	    if (i === ri$1(e, n, t, r) > 0) for (o = n; o < t; o += r) a = ei$1(o, e[o], e[o + 1], a); else for (o = t - r; o >= n; o -= r) a = ei$1(o, e[o], e[o + 1], a);
	    return a && qr(a, a.next) && (ni$1(a), a = a.next), a;
	}

	function Nr(e, n) {
	    if (!e) return e;
	    n || (n = e);
	    var t, r = e;
	    do {
	        if (t = !1, r.steiner || !qr(r, r.next) && 0 !== Kr(r.prev, r, r.next)) r = r.next; else {
	            if (ni$1(r), (r = n = r.prev) === r.next) break;
	            t = !0;
	        }
	    } while (t || r !== n);
	    return n;
	}

	function Fr(e, n, t, r, i, o, a) {
	    if (e) {
	        !a && o && function(e, n, t, r) {
	            var i = e;
	            do {
	                0 === i.z && (i.z = Vr(i.x, i.y, n, t, r)), i.prevZ = i.prev, i.nextZ = i.next, 
	                i = i.next;
	            } while (i !== e);
	            i.prevZ.nextZ = null, i.prevZ = null, function(e) {
	                var n, t, r, i, o, a, s, c, l = 1;
	                do {
	                    for (t = e, e = null, o = null, a = 0; t; ) {
	                        for (a++, r = t, s = 0, n = 0; n < l && (s++, r = r.nextZ); n++) ;
	                        for (c = l; s > 0 || c > 0 && r; ) 0 !== s && (0 === c || !r || t.z <= r.z) ? (i = t, 
	                        t = t.nextZ, s--) : (i = r, r = r.nextZ, c--), o ? o.nextZ = i : e = i, i.prevZ = o, 
	                        o = i;
	                        t = r;
	                    }
	                    o.nextZ = null, l *= 2;
	                } while (a > 1);
	            }(i);
	        }(e, r, i, o);
	        for (var s, c, l = e; e.prev !== e.next; ) if (s = e.prev, c = e.next, o ? Lr(e, r, i, o) : Hr(e)) n.push(s.i / t | 0), 
	        n.push(e.i / t | 0), n.push(c.i / t | 0), ni$1(e), e = c.next, l = c.next; else if ((e = c) === l) {
	            a ? 1 === a ? Fr(e = zr(Nr(e), n, t), n, t, r, i, o, 2) : 2 === a && Br(e, n, t, r, i, o) : Fr(Nr(e), n, t, r, i, o, 1);
	            break;
	        }
	    }
	}

	function Hr(e) {
	    var n = e.prev, t = e, r = e.next;
	    if (Kr(n, t, r) >= 0) return !1;
	    for (var i = n.x, o = t.x, a = r.x, s = n.y, c = t.y, l = r.y, f = i < o ? i < a ? i : a : o < a ? o : a, d = s < c ? s < l ? s : l : c < l ? c : l, u = i > o ? i > a ? i : a : o > a ? o : a, h = s > c ? s > l ? s : l : c > l ? c : l, m = r.next; m !== n; ) {
	        if (m.x >= f && m.x <= u && m.y >= d && m.y <= h && Xr(i, s, o, c, a, l, m.x, m.y) && Kr(m.prev, m, m.next) >= 0) return !1;
	        m = m.next;
	    }
	    return !0;
	}

	function Lr(e, n, t, r) {
	    var i = e.prev, o = e, a = e.next;
	    if (Kr(i, o, a) >= 0) return !1;
	    for (var s = i.x, c = o.x, l = a.x, f = i.y, d = o.y, u = a.y, h = s < c ? s < l ? s : l : c < l ? c : l, m = f < d ? f < u ? f : u : d < u ? d : u, v = s > c ? s > l ? s : l : c > l ? c : l, _ = f > d ? f > u ? f : u : d > u ? d : u, g = Vr(h, m, n, t, r), x = Vr(v, _, n, t, r), b = e.prevZ, p = e.nextZ; b && b.z >= g && p && p.z <= x; ) {
	        if (b.x >= h && b.x <= v && b.y >= m && b.y <= _ && b !== i && b !== a && Xr(s, f, c, d, l, u, b.x, b.y) && Kr(b.prev, b, b.next) >= 0) return !1;
	        if (b = b.prevZ, p.x >= h && p.x <= v && p.y >= m && p.y <= _ && p !== i && p !== a && Xr(s, f, c, d, l, u, p.x, p.y) && Kr(p.prev, p, p.next) >= 0) return !1;
	        p = p.nextZ;
	    }
	    for (;b && b.z >= g; ) {
	        if (b.x >= h && b.x <= v && b.y >= m && b.y <= _ && b !== i && b !== a && Xr(s, f, c, d, l, u, b.x, b.y) && Kr(b.prev, b, b.next) >= 0) return !1;
	        b = b.prevZ;
	    }
	    for (;p && p.z <= x; ) {
	        if (p.x >= h && p.x <= v && p.y >= m && p.y <= _ && p !== i && p !== a && Xr(s, f, c, d, l, u, p.x, p.y) && Kr(p.prev, p, p.next) >= 0) return !1;
	        p = p.nextZ;
	    }
	    return !0;
	}

	function zr(e, n, t) {
	    var r = e;
	    do {
	        var i = r.prev, o = r.next.next;
	        !qr(i, o) && Yr(i, r, r.next, o) && Qr(i, o) && Qr(o, i) && (n.push(i.i / t | 0), 
	        n.push(r.i / t | 0), n.push(o.i / t | 0), ni$1(r), ni$1(r.next), r = e = o), r = r.next;
	    } while (r !== e);
	    return Nr(r);
	}

	function Br(e, n, t, r, i, o) {
	    var a = e;
	    do {
	        for (var s = a.next.next; s !== a.prev; ) {
	            if (a.i !== s.i && Wr(a, s)) {
	                var c = $r(a, s);
	                return a = Nr(a, a.next), c = Nr(c, c.next), Fr(a, n, t, r, i, o, 0), void Fr(c, n, t, r, i, o, 0);
	            }
	            s = s.next;
	        }
	        a = a.next;
	    } while (a !== e);
	}

	function kr(e, n) {
	    return e.x - n.x;
	}

	function Gr(e, n) {
	    var t = function(e, n) {
	        var t, r = n, i = e.x, o = e.y, a = -1 / 0;
	        do {
	            if (o <= r.y && o >= r.next.y && r.next.y !== r.y) {
	                var s = r.x + (o - r.y) * (r.next.x - r.x) / (r.next.y - r.y);
	                if (s <= i && s > a && (a = s, t = r.x < r.next.x ? r : r.next, s === i)) return t;
	            }
	            r = r.next;
	        } while (r !== n);
	        if (!t) return null;
	        var c, l = t, f = t.x, d = t.y, u = 1 / 0;
	        r = t;
	        do {
	            i >= r.x && r.x >= f && i !== r.x && Xr(o < d ? i : a, o, f, d, o < d ? a : i, o, r.x, r.y) && (c = Math.abs(o - r.y) / (i - r.x), 
	            Qr(r, e) && (c < u || c === u && (r.x > t.x || r.x === t.x && Ur(t, r))) && (t = r, 
	            u = c)), r = r.next;
	        } while (r !== l);
	        return t;
	    }(e, n);
	    if (!t) return n;
	    var r = $r(t, e);
	    return Nr(r, r.next), Nr(t, t.next);
	}

	function Ur(e, n) {
	    return Kr(e.prev, e, n.prev) < 0 && Kr(n.next, e, e.next) < 0;
	}

	function Vr(e, n, t, r, i) {
	    return (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = (e - t) * i | 0) | e << 8)) | e << 4)) | e << 2)) | e << 1)) | (n = 1431655765 & ((n = 858993459 & ((n = 252645135 & ((n = 16711935 & ((n = (n - r) * i | 0) | n << 8)) | n << 4)) | n << 2)) | n << 1)) << 1;
	}

	function jr(e) {
	    var n = e, t = e;
	    do {
	        (n.x < t.x || n.x === t.x && n.y < t.y) && (t = n), n = n.next;
	    } while (n !== e);
	    return t;
	}

	function Xr(e, n, t, r, i, o, a, s) {
	    return (i - a) * (n - s) >= (e - a) * (o - s) && (e - a) * (r - s) >= (t - a) * (n - s) && (t - a) * (o - s) >= (i - a) * (r - s);
	}

	function Wr(e, n) {
	    return e.next.i !== n.i && e.prev.i !== n.i && !function(e, n) {
	        var t = e;
	        do {
	            if (t.i !== e.i && t.next.i !== e.i && t.i !== n.i && t.next.i !== n.i && Yr(t, t.next, e, n)) return !0;
	            t = t.next;
	        } while (t !== e);
	        return !1;
	    }(e, n) && (Qr(e, n) && Qr(n, e) && function(e, n) {
	        var t = e, r = !1, i = (e.x + n.x) / 2, o = (e.y + n.y) / 2;
	        do {
	            t.y > o != t.next.y > o && t.next.y !== t.y && i < (t.next.x - t.x) * (o - t.y) / (t.next.y - t.y) + t.x && (r = !r), 
	            t = t.next;
	        } while (t !== e);
	        return r;
	    }(e, n) && (Kr(e.prev, e, n.prev) || Kr(e, n.prev, n)) || qr(e, n) && Kr(e.prev, e, e.next) > 0 && Kr(n.prev, n, n.next) > 0);
	}

	function Kr(e, n, t) {
	    return (n.y - e.y) * (t.x - n.x) - (n.x - e.x) * (t.y - n.y);
	}

	function qr(e, n) {
	    return e.x === n.x && e.y === n.y;
	}

	function Yr(e, n, t, r) {
	    var i = Zr(Kr(e, n, t)), o = Zr(Kr(e, n, r)), a = Zr(Kr(t, r, e)), s = Zr(Kr(t, r, n));
	    return i !== o && a !== s || (!(0 !== i || !Jr(e, t, n)) || (!(0 !== o || !Jr(e, r, n)) || (!(0 !== a || !Jr(t, e, r)) || !(0 !== s || !Jr(t, n, r)))));
	}

	function Jr(e, n, t) {
	    return n.x <= Math.max(e.x, t.x) && n.x >= Math.min(e.x, t.x) && n.y <= Math.max(e.y, t.y) && n.y >= Math.min(e.y, t.y);
	}

	function Zr(e) {
	    return e > 0 ? 1 : e < 0 ? -1 : 0;
	}

	function Qr(e, n) {
	    return Kr(e.prev, e, e.next) < 0 ? Kr(e, n, e.next) >= 0 && Kr(e, e.prev, n) >= 0 : Kr(e, n, e.prev) < 0 || Kr(e, e.next, n) < 0;
	}

	function $r(e, n) {
	    var t = new ti$1(e.i, e.x, e.y), r = new ti$1(n.i, n.x, n.y), i = e.next, o = n.prev;
	    return e.next = n, n.prev = e, t.next = i, i.prev = t, r.next = t, t.prev = r, o.next = r, 
	    r.prev = o, r;
	}

	function ei$1(e, n, t, r) {
	    var i = new ti$1(e, n, t);
	    return r ? (i.next = r.next, i.prev = r, r.next.prev = i, r.next = i) : (i.prev = i, 
	    i.next = i), i;
	}

	function ni$1(e) {
	    e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), 
	    e.nextZ && (e.nextZ.prevZ = e.prevZ);
	}

	function ti$1(e, n, t) {
	    this.i = e, this.x = n, this.y = t, this.prev = null, this.next = null, this.z = 0, 
	    this.prevZ = null, this.nextZ = null, this.steiner = !1;
	}

	function ri$1(e, n, t, r) {
	    for (var i = 0, o = n, a = t - r; o < t; o += r) i += (e[a] - e[o]) * (e[o + 1] + e[a + 1]), 
	    a = o;
	    return i;
	}

	wr.exports = Rr, wr.exports.default = Rr, Rr.deviation = function(e, n, t, r) {
	    var i = n && n.length, o = Math.abs(ri$1(e, 0, i ? n[0] * t : e.length, t));
	    if (i) for (var a = 0, s = n.length; a < s; a++) {
	        o -= Math.abs(ri$1(e, n[a] * t, a < s - 1 ? n[a + 1] * t : e.length, t));
	    }
	    var c = 0;
	    for (a = 0; a < r.length; a += 3) {
	        var l = r[a] * t, f = r[a + 1] * t, d = r[a + 2] * t;
	        c += Math.abs((e[l] - e[d]) * (e[f + 1] - e[l + 1]) - (e[l] - e[f]) * (e[d + 1] - e[l + 1]));
	    }
	    return 0 === o && 0 === c ? 0 : Math.abs((c - o) / o);
	}, Rr.flatten = function(e) {
	    for (var n = e[0][0].length, t = {
	        vertices: [],
	        holes: [],
	        dimensions: n
	    }, r = 0, i = 0; i < e.length; i++) {
	        for (var o = 0; o < e[i].length; o++) for (var a = 0; a < n; a++) t.vertices.push(e[i][o][a]);
	        i > 0 && t.holes.push(r += e[i - 1].length);
	    }
	    return t;
	};

	var ii$1 = wr.exports;

	const oi$1 = {
	    parseHDR: $e$1
	}, ai$1 = {
	    PBRHelper: $t$1,
	    StandardMaterial: nr,
	    StandardSpecularGlossinessMaterial: tr,
	    StandardShader: class extends vn {
	        constructor(e = {}) {
	            let t = e.extraCommandProps || {};
	            const r = e.uniforms;
	            t = v({}, t);
	            const o = e.defines || {}, a = [], s = [], c = [], l = [], f = [], d = [ {
	                name: "modelNormalMatrix",
	                type: "function",
	                fn: (e, n) => fromMat4$1(a, n.modelMatrix)
	            }, {
	                name: "modelViewNormalMatrix",
	                type: "function",
	                fn: (e, t) => {
	                    const r = multiply$5(s, t.viewMatrix, t.modelMatrix), o = invert$2(r, r), a = transpose(o, o);
	                    return fromMat4$1(c, a);
	                }
	            }, {
	                name: "modelViewMatrix",
	                type: "function",
	                fn: (e, t) => multiply$5(l, t.viewMatrix, t.modelMatrix)
	            }, {
	                name: "uEnvironmentTransform",
	                type: "function",
	                fn: (e, n) => fromRotation$2(f, Math.PI * (n.environmentOrientation || 0) / 180)
	            } ];
	            r && d.push(...r);
	            super({
	                vert: e.vert || "#include <gl2_vert>\n#define SHADER_NAME PBR\nprecision highp float;\nattribute vec3 aPosition;\n#if defined(HAS_MAP)\nattribute vec2 aTexCoord;\nuniform vec2 uvOrigin;\nuniform vec2 uvScale;\nuniform vec2 uvOffset;\nuniform float uvRotation;\n#ifdef HAS_I3S_UVREGION\nattribute vec4 uvRegion;\nvarying vec4 vUvRegion;\n#endif\n#if defined(HAS_AO_MAP)\nattribute vec2 aTexCoord1;\nvarying vec2 vTexCoord1;\n#endif\n#endif\nvec3 c;\nvec3 d;\nvec4 e;\nuniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 positionMatrix;\nuniform mat4 projMatrix;\nuniform vec2 outSize;\nuniform vec2 halton;\nuniform mediump vec3 cameraPosition;\nuniform mat3 modelNormalMatrix;\n#ifdef HAS_SSR\nuniform mat3 modelViewNormalMatrix;\nvarying vec3 vViewNormal;\n#ifdef HAS_TANGENT\nvarying vec4 vViewTangent;\n#endif\n#endif\nvarying vec3 vModelNormal;\nvarying vec4 vViewVertex;\n#if defined(HAS_TANGENT)\nvarying vec4 vModelTangent;\nvarying vec3 vModelBiTangent;\n#endif\nvarying vec3 vModelVertex;\n#if defined(HAS_MAP)\nvarying vec2 vTexCoord;\n#endif\n#if defined(HAS_COLOR)\nattribute vec4 aColor;\nvarying vec4 vColor;\n#endif\n#ifdef HAS_OPACITY\nattribute float aOpacity;\n#endif\nvarying float vOpacity;\n#include <highlight_vert>\n#if defined(HAS_COLOR0)\n#if COLOR0_SIZE == 3\nattribute vec3 aColor0;\nvarying vec3 vColor0;\n#else\nattribute vec4 aColor0;\nvarying vec4 vColor0;\n#endif\n#endif\n#include <line_extrusion_vert>\n#include <get_output>\n#if defined(HAS_SHADOWING) && !defined(HAS_BLOOM)\n#include <vsm_shadow_vert>\n#endif\n#include <heatmap_render_vert>\n#include <vertex_color_vert>\n#if defined(HAS_BUMP_MAP) && defined(HAS_TANGENT)\nvarying vec3 vTangentViewPos;\nvarying vec3 vTangentFragPos;\n#if __VERSION__ == 100\nmat3 f(in mat3 h) {\n  vec3 i = h[0];\n  vec3 j = h[1];\n  vec3 k = h[2];\n  return mat3(vec3(i.x, j.x, k.x), vec3(i.y, j.y, k.y), vec3(i.z, j.z, k.z));\n}\n#else\nmat3 f(in mat3 h) {\n  return transpose(h);\n}\n#endif\n#endif\nvoid l(const highp vec4 q, out highp vec3 m) {\n  m = vec3(.0, .0, 1.) + vec3(2., -2., -2.) * q.x * q.zwx + vec3(2., 2., -2.) * q.y * q.wzy;\n}\nvoid l(const highp vec4 q, out highp vec3 m, out highp vec3 t) {\n  l(q, m);\n  t = vec3(1., .0, .0) + vec3(-2., 2., -2.) * q.y * q.yxw + vec3(-2., 2., 2.) * q.z * q.zwx;\n}\nconst float o = .5;\nvec2 u(vec2 v, float A) {\n  return vec2(cos(A) * (v.x - o) + sin(A) * (v.y - o) + o, cos(A) * (v.y - o) - sin(A) * (v.x - o) + o);\n}\n#if defined(HAS_MAP)\nvec2 B(vec2 v) {\n  vec2 C = decode_getTexcoord(v);\n#ifdef HAS_RANDOM_TEX\nvec2 D = uvOrigin;\n  vec2 E = C * uvScale + uvOffset;\n  if(uvRotation != .0) {\n    D = u(D, uvRotation);\n    E = u(E, uvRotation);\n  }\n  return mod(D, 1.) + E;\n#else\nvec2 D = uvOrigin;\n  vec2 E = C * uvScale;\n  if(uvRotation != .0) {\n    D = u(D, uvRotation);\n    E = u(E, uvRotation);\n  }\n  return mod(D, 1.) + E + uvOffset;\n#endif\n}\n#endif\n#ifdef PICKING_MODE\n#include <fbo_picking_vert>\n#endif\n#include <excavate_vert>\nvoid main() {\n  mat4 F = getPositionMatrix();\n#ifdef IS_LINE_EXTRUSION\nvec3 G = getLineExtrudePosition(aPosition);\n  vec4 H = getPosition(G);\n#else\nvec4 H = getPosition(aPosition);\n#endif\nvModelVertex = (modelMatrix * H).xyz;\n  vec4 I = F * H;\n  vec4 J = modelViewMatrix * I;\n  vViewVertex = J;\n  mat4 K = projMatrix;\n  K[2].xy += halton.xy / outSize.xy;\n#ifdef HAS_MASK_EXTENT\ngl_Position = K * getMaskPosition(I, modelMatrix);\n#else\ngl_Position = K * J;\n#endif\n#ifdef PICKING_MODE\nfloat L = 1.;\n#if defined(HAS_COLOR)\nL *= aColor.a;\n#endif\n#if defined(HAS_COLOR0) && COLOR0_SIZE == 4\nL *= aColor0.a;\n#endif\nfbo_picking_setData(gl_Position.w, L != .0);\n#else\n#if defined(HAS_MAP)\nvTexCoord = B(aTexCoord);\n#ifdef HAS_AO_MAP\nvTexCoord1 = B(aTexCoord1);\n#endif\n#ifdef HAS_I3S_UVREGION\nvUvRegion = uvRegion / 65535.;\n#endif\n#endif\n#if defined(HAS_TANGENT) || defined(HAS_NORMAL)\nmat3 M = mat3(F);\n  mat3 N = modelNormalMatrix * M;\n#if defined(HAS_TANGENT)\nvec3 t;\n  l(aTangent, d, t);\n  vModelTangent = vec4(N * t, aTangent.w);\n#else\nd = decode_getNormal(aNormal);\n#endif\nvec3 O = d;\n  vModelNormal = N * O;\n#else\nd = vec3(.0);\n  vModelNormal = vec3(.0);\n#endif\n#if defined(HAS_TANGENT)\nvModelBiTangent = cross(vModelNormal, vModelTangent.xyz) * sign(aTangent.w);\n#endif\n#ifdef HAS_SSR\nmat3 P = modelViewNormalMatrix * M;\n  vViewNormal = P * d;\n#if defined(HAS_TANGENT)\nvec4 Q = vec4(t, aTangent.w);\n  vViewTangent = vec4(P * Q.xyz, Q.w);\n#endif\n#endif\n#if defined(HAS_COLOR)\nvColor = aColor / 255.;\n#endif\n#ifdef HAS_OPACITY\nvOpacity = aOpacity / 255.;\n#else\nvOpacity = 1.;\n#endif\nhighlight_setVarying();\n#if defined(HAS_COLOR0)\nvColor0 = aColor0 / 255.;\n#endif\n#if defined(HAS_SHADOWING) && !defined(HAS_BLOOM)\nshadow_computeShadowPars(I);\n#endif\n#ifdef HAS_HEATMAP\nheatmap_compute(projMatrix * modelViewMatrix * F, H);\n#endif\n#if defined(HAS_BUMP_MAP) && defined(HAS_TANGENT)\nmat3 R = f(mat3(vModelTangent.xyz, vModelBiTangent, vModelNormal));\n  vTangentViewPos = R * cameraPosition;\n  vTangentFragPos = R * vModelVertex;\n#endif\n#ifdef HAS_VERTEX_COLOR\nvertexColor_update();\n#endif\n#ifdef HAS_EXCAVATE_ANALYSIS\nvCoordinateTexcoord = getCoordinateTexcoord();\n  vHeight = getWorldHeight();\n#endif\n#endif\n}",
	                frag: e.frag || "#if __VERSION__ == 100\n#if defined(GL_EXT_shader_texture_lod)\n#extension GL_EXT_shader_texture_lod : enable\n#define textureCubeLod(tex, uv, lod) textureCubeLodEXT(tex, uv, lod)\n#else\n#define textureCubeLod(tex, uv, lod) textureCube(tex, uv, lod)\n#endif\n#if defined(GL_OES_standard_derivatives)\n#extension GL_OES_standard_derivatives : enable\n#endif\n#else\n#define textureCubeLod(tex, uv, lod) textureLod(tex, uv, lod)\n#endif\n#define saturate(x)        clamp(x, 0.0, 1.0)\nprecision mediump float;\n#include <gl2_frag>\n#include <hsv_frag>\nuniform vec3 hsv;\nuniform float contrast;\nconst float c = .04;\nstruct MaterialUniforms {\n  vec2 roughnessMetalness;\n  vec3 albedo;\n  float alpha;\n  vec3 normal;\n  vec3 emit;\n  float ao;\n  vec3 specularColor;\n  float glossiness;\n  vec4 skinColor;\n} d;\n#if defined(HAS_SHADOWING) && !defined(HAS_BLOOM)\n#include <vsm_shadow_frag>\n#endif\nuniform vec3 cameraPosition;\nuniform float alphaTest;\n#if defined(SHADING_MODEL_SPECULAR_GLOSSINESS)\nuniform vec4 diffuseFactor;\nuniform vec3 specularFactor;\nuniform float glossinessFactor;\n#if defined(HAS_DIFFUSE_MAP)\nuniform sampler2D diffuseTexture;\n#endif\n#if defined(HAS_SPECULARGLOSSINESS_MAP)\nuniform sampler2D specularGlossinessTexture;\n#endif\n#endif\nuniform vec3 emissiveFactor;\nuniform vec4 baseColorFactor;\nuniform float baseColorIntensity;\nuniform float anisotropyDirection;\nuniform float anisotropyFactor;\nuniform float clearCoatFactor;\nuniform float clearCoatIor;\nuniform float clearCoatRoughnessFactor;\nuniform float clearCoatThickness;\nuniform float emitColorFactor;\nuniform float occlusionFactor;\nuniform float environmentExposure;\nuniform float roughnessFactor;\nuniform float metallicFactor;\nuniform float normalMapFactor;\nuniform float rgbmRange;\nuniform float specularF0;\nuniform int emitMultiplicative;\nuniform int normalMapFlipY;\nuniform int outputSRGB;\nuniform mat3 uEnvironmentTransform;\n#if defined(HAS_ALBEDO_MAP)\nuniform sampler2D baseColorTexture;\n#endif\n#if defined(HAS_METALLICROUGHNESS_MAP)\nuniform sampler2D metallicRoughnessTexture;\n#endif\n#if defined(HAS_EMISSIVE_MAP)\nuniform sampler2D emissiveTexture;\n#endif\n#if defined(HAS_AO_MAP)\nuniform sampler2D occlusionTexture;\nvarying vec2 vTexCoord1;\n#endif\n#if defined(HAS_NORMAL_MAP) && defined(HAS_TANGENT)\nuniform sampler2D normalTexture;\n#endif\n#if defined(HAS_SKIN_MAP)\nuniform sampler2D skinTexture;\n#endif\n#if defined(HAS_ALPHAMODE)\nuniform float alphaCutoff;\n#endif\n#ifdef HAS_RANDOM_TEX\nuniform highp vec2 uvOrigin;\nuniform highp float uvRotation;\nuniform sampler2D noiseTexture;\n#endif\nuniform sampler2D brdfLUT;\n#if defined(HAS_IBL_LIGHTING)\nuniform vec3 hdrHSV;\nuniform samplerCube prefilterMap;\nuniform vec3 diffuseSPH[9];\nuniform vec2 prefilterMiplevel;\nuniform vec2 prefilterSize;\n#else\nuniform vec3 ambientColor;\n#endif\nuniform vec2 cameraNearFar;\nuniform vec3 clearCoatTint;\nuniform vec3 light0_viewDirection;\nuniform vec4 light0_diffuse;\n#ifdef HAS_SSR\nvarying vec3 vViewNormal;\n#if defined(HAS_TANGENT)\nvarying vec4 vViewTangent;\n#endif\n#endif\nvarying vec3 vModelVertex;\nvarying vec4 vViewVertex;\n#if defined(HAS_MAP)\n#include <computeTexcoord_frag>\n#endif\nvarying vec3 vModelNormal;\n#if defined(HAS_TANGENT)\nvarying vec4 vModelTangent;\nvarying vec3 vModelBiTangent;\n#endif\n#if defined(HAS_COLOR0)\n#if COLOR0_SIZE == 3\nvarying vec3 vColor0;\n#else\nvarying vec4 vColor0;\n#endif\n#endif\n#if defined(HAS_COLOR)\nvarying vec4 vColor;\n#elif defined(IS_LINE_EXTRUSION)\nuniform vec4 lineColor;\n#else\nuniform vec4 polygonFill;\n#endif\n#ifdef HAS_LAYER_OPACITY\nuniform float layerOpacity;\n#endif\nvarying float vOpacity;\n#ifdef HAS_INSTANCE_COLOR\nvarying vec4 vInstanceColor;\n#endif\n#ifdef IS_LINE_EXTRUSION\nuniform float lineOpacity;\n#else\nuniform float polygonOpacity;\n#endif\n#ifdef HAS_PATTERN\nuniform sampler2D linePatternFile;\nuniform vec2 atlasSize;\nuniform float flipY;\nuniform float currentTime;\nuniform float animSpeedScale;\n#ifdef HAS_PATTERN_ANIM\nvarying float vLinePatternAnimSpeed;\n#else\nuniform float linePatternAnimSpeed;\n#endif\n#ifdef HAS_PATTERN_GAP\nvarying float vLinePatternGap;\n#else\nuniform float linePatternGap;\n#endif\nuniform vec4 linePatternGapColor;\nuniform vec2 uvScale;\nvarying float vPatternHeight;\nvarying float vLinesofar;\nvarying vec4 vTexInfo;\nvarying float vNormalY;\nvec2 e(vec2 f) {\n  vec2 h = mod(f, 1.);\n  vec2 i = vTexInfo.xy;\n  vec2 j = vTexInfo.zw;\n  return (i + h * j) / atlasSize;\n}\n#endif\n#include <heatmap_render_frag>\n#include <snow_frag>\n#include <mask_frag>\n#include <terrain_normal_frag>\n#include <vertex_color_frag>\n#include <excavate_frag>\n#ifdef HAS_RANDOM_TEX\nconst float k = .5;\nvec2 l(vec2 h, float m) {\n  return vec2(cos(m) * (h.x - k) + sin(m) * (h.y - k) + k, cos(m) * (h.y - k) - sin(m) * (h.x - k) + k);\n}\nfloat n(vec3 o) {\n  return o.x + o.y + o.z;\n}\n#endif\nvec4 u(sampler2D A, in vec2 h) {\n  \n#ifdef HAS_RANDOM_TEX\nhighp vec2 B = uvOrigin;\n  if(uvRotation != .0) {\n    B = l(B, uvRotation);\n  }\n  highp vec2 C = h + B - mod(B, 1.);\n  float D = texture2D(noiseTexture, .005 * C).x;\n  vec2 E = dFdx(C);\n  vec2 F = dFdx(C);\n  float G = D * 8.;\n  float H = fract(G);\n#if 1\nfloat I = floor(G);\n  float J = I + 1.;\n#else\nfloat I = floor(G + .5);\n  float J = floor(G);\n  H = min(H, 1. - H) * 2.;\n#endif\nvec2 K = sin(vec2(3., 7.) * I);\n  vec2 L = sin(vec2(3., 7.) * J);\n  float M = .5;\n  vec4 N = texture2DGradEXT(A, h + M * K, E, F);\n  vec4 O = texture2DGradEXT(A, h + M * L, E, F);\n  return mix(N, O, smoothstep(.2, .8, H - .1 * n(N.xyz - O.xyz)));\n#else\nreturn texture2D(A, h);\n#endif\n}\n#if defined(HAS_BUMP_MAP) && defined(HAS_TANGENT)\nuniform sampler2D bumpTexture;\nuniform float bumpScale;\nuniform float bumpMaxLayers;\nuniform float bumpMinLayers;\nvec2 P(vec2 h, vec3 Q) {\n  float R = mix(bumpMaxLayers, bumpMinLayers, abs(dot(vec3(.0, .0, 1.), Q)));\n  float S = 1. / R;\n  float T = .0;\n  vec2 U = Q.xy * bumpScale / (Q.z * R);\n  vec2 V = h;\n  float W = u(bumpTexture, V).r;\n  for(int X = 0; X < 30; X++) {\n    T += S;\n    V -= U;\n    W = u(bumpTexture, V).r;\n    if(W < T) {\n      break;\n    }\n  }\n  vec2 Y = V + U;\n  float Z = W - T;\n  float ba = u(bumpTexture, Y).r - T + S;\n  return mix(V, Y, Z / (Z - ba));\n}\nvarying vec3 vTangentViewPos;\nvarying vec3 vTangentFragPos;\n#endif\n#define SHADER_NAME PBR\nvec3 bb(const in vec3 bc) {\n  return vec3(bc.r < .0031308 ? bc.r * 12.92 : 1.055 * pow(bc.r, 1. / 2.4) - .055, bc.g < .0031308 ? bc.g * 12.92 : 1.055 * pow(bc.g, 1. / 2.4) - .055, bc.b < .0031308 ? bc.b * 12.92 : 1.055 * pow(bc.b, 1. / 2.4) - .055);\n}\nvec3 bd(const in vec3 bc) {\n  return vec3(bc.r < .04045 ? bc.r * (1. / 12.92) : pow((bc.r + .055) * (1. / 1.055), 2.4), bc.g < .04045 ? bc.g * (1. / 12.92) : pow((bc.g + .055) * (1. / 1.055), 2.4), bc.b < .04045 ? bc.b * (1. / 12.92) : pow((bc.b + .055) * (1. / 1.055), 2.4));\n}\nvec3 be(const in vec4 bc, const in float bf) {\n  if(bf <= .0)\n    return bc.rgb;\n  return bf * bc.rgb * bc.a;\n}\nvec3 bg() {\n  return d.albedo;\n}\nfloat bh() {\n  \n#if defined(HAS_ALPHAMODE)\nif(d.alpha >= alphaCutoff) {\n    return 1.;\n  } else {\n    return .0;\n  }\n#else\nreturn d.alpha;\n#endif\n}\nfloat bi() {\n  \n#if defined(SHADING_MODEL_SPECULAR_GLOSSINESS)\nvec3 bc = d.specularColor;\n  return max(max(bc.r, bc.g), bc.b);\n#else\nreturn d.roughnessMetalness.y;\n#endif\n}\nfloat bj() {\n  return specularF0;\n}\nfloat bk() {\n  \n#if defined(SHADING_MODEL_SPECULAR_GLOSSINESS)\nreturn 1. - d.glossiness;\n#else\nreturn d.roughnessMetalness.x;\n#endif\n}\nvec3 bl() {\n  return d.emit;\n}\nvec4 bm() {\n  return d.skinColor;\n}\nvec3 bn() {\n  return d.normal;\n}\nfloat bo() {\n  return clearCoatFactor;\n}\nfloat bp() {\n  return clearCoatRoughnessFactor;\n}\nfloat bq() {\n  return d.ao;\n}\nfloat br(const in vec4 bs) {\n  return bs.r + bs.g / 255.;\n}\nfloat bt(const in vec2 bu, const in float bv) {\n  vec3 bw = vec3(.06711056, .00583715, 52.9829189);\n  return fract(bw.z * fract(dot(bu.xy + bv * vec2(47., 17.) * .695, bw.xy))) * .5;\n}\nvec3 bx(const in float by, in vec3 bz, const in vec3 t, const in vec3 b, in vec3 bA) {\n  bz.xy = by * bz.xy;\n  mat3 bB = mat3(t, b, bA);\n  return normalize(bB * bz);\n}\nvoid bC(const in vec3 bD, const in vec3 bz, const in vec3 bE, out float bF, out vec3 bG, out float bH) {\n  bF = 1.;\n  bG = -bE;\n  bH = dot(bG, bz);\n}\nvec4 bI(const in vec3 bz, const in vec3 bD, const in float bJ) {\n  float bK = clamp(dot(bz, bD), 0., 1.);\n  float bL = bJ * bJ;\n  return vec4(bL, bL * bL, bK, bK * (1. - bL));\n}\nfloat bM(const vec4 bI, const float bN) {\n  float bO = bI.y;\n  float bP = (bN * bO - bN) * bN + 1.;\n  return bO / (3.141593 * bP * bP);\n}\nvec3 bQ(const vec3 bR, const float bS, const in float bT) {\n  float bU = pow(1. - bT, 5.);\n  return bS * bU + (1. - bU) * bR;\n}\nfloat bQ(const float bR, const float bS, const in float bT) {\n  return bR + (bS - bR) * pow(1. - bT, 5.);\n}\nfloat bV(const vec4 bI, const float bW) {\n  float a = bI.x;\n  float bX = bW * (bI.w + a);\n  float bY = bI.z * (bW * (1. - a) + a);\n  return .5 / (bX + bY);\n}\nvec3 bZ(const vec4 bI, const vec3 bz, const vec3 bD, const vec3 bG, const vec3 ca, const float bW, const float bS) {\n  vec3 cb = normalize(bD + bG);\n  float bN = clamp(dot(bz, cb), 0., 1.);\n  float bT = clamp(dot(bG, cb), 0., 1.);\n  float cc = bM(bI, bN);\n  float cd = bV(bI, bW);\n  vec3 ce = bQ(ca, bS, bT);\n  return (cc * cd * 3.141593) * ce;\n}\nvoid cf(const in vec3 bz, const in vec3 bD, const in float bW, const in vec4 bI, const in vec3 cg, const in vec3 ca, const in float bF, const in vec3 ch, const in vec3 bG, const in float bS, out vec3 ci, out vec3 cj, out bool ck) {\n  ck = bW > .0;\n  if(ck == false) {\n    cj = ci = vec3(.0);\n    return;\n  }\n  vec3 cl = bF * bW * ch;\n  cj = cl * bZ(bI, bz, bD, bG, ca, bW, bS);\n  ci = cl * cg;\n}\nfloat cm(float at, float ab, float cn, float co, float cp, float cq, float bK, float bW) {\n  float cr = bW * length(vec3(at * cn, ab * co, bK));\n  float cs = bK * length(vec3(at * cp, ab * cq, bW));\n  return .5 / (cr + cs);\n}\nfloat ct(const float at, const float ab, const float cu, const float cv, const float bN) {\n  float bO = at * ab;\n  vec3 bP = vec3(ab * cu, at * cv, bO * bN);\n  float x = bO / dot(bP, bP);\n  return bO * (x * x) / 3.141593;\n}\nvec3 cw(const vec4 bI, const vec3 bz, const vec3 bD, const vec3 bG, const vec3 ca, const float bW, const float bS, const in vec3 cx, const in vec3 cy, const in float cz) {\n  vec3 cb = normalize(bD + bG);\n  float bN = clamp(dot(bz, cb), 0., 1.);\n  float bK = clamp(dot(bz, bD), 0., 1.);\n  float bT = clamp(dot(bG, cb), 0., 1.);\n  float cn = dot(cx, bD);\n  float co = dot(cy, bD);\n  float cp = dot(cx, bG);\n  float cq = dot(cy, bG);\n  float cu = dot(cx, cb);\n  float cv = dot(cy, cb);\n  float cA = sqrt(1. - abs(cz) * .9);\n  if(cz > .0)\n    cA = 1. / cA;\n  float at = bI.x * cA;\n  float ab = bI.x / cA;\n  float cc = ct(at, ab, cu, cv, bN);\n  float cd = cm(at, ab, cn, co, cp, cq, bK, bW);\n  vec3 ce = bQ(ca, bS, bT);\n  return (cc * cd * 3.141593) * ce;\n}\nvoid cB(const in vec3 bz, const in vec3 bD, const in float bW, const in vec4 bI, const in vec3 cg, const in vec3 ca, const in float bF, const in vec3 ch, const in vec3 bG, const in float bS, const in vec3 cx, const in vec3 cy, const in float cz, out vec3 ci, out vec3 cj, out bool ck) {\n  ck = bW > .0;\n  if(ck == false) {\n    cj = ci = vec3(.0);\n    return;\n  }\n  vec3 cl = bF * bW * ch;\n  cj = cl * cw(bI, bz, bD, bG, ca, bW, bS, cx, cy, cz);\n  ci = cl * cg;\n}\n#if defined(HAS_IBL_LIGHTING)\nvec3 cC(const in vec3 bz) {\n  vec3 bA = uEnvironmentTransform * bz;\n  float x = bA.x;\n  float y = bA.y;\n  float z = bA.z;\n  vec3 cD = (diffuseSPH[0] + diffuseSPH[1] * x + diffuseSPH[2] * y + diffuseSPH[3] * z + diffuseSPH[4] * z * x + diffuseSPH[5] * y * z + diffuseSPH[6] * y * x + diffuseSPH[7] * (3. * z * z - 1.) + diffuseSPH[8] * (x * x - y * y));\n  if(length(hdrHSV) > .0) {\n    cD = hsv_apply(cD, hdrHSV);\n  }\n  return max(cD, vec3(.0));\n}\nfloat cE(const in float cF) {\n  return cF;\n}\nvec3 cG(const in float cH, const in vec3 cI) {\n  vec3 cJ = cI;\n  float cK = prefilterMiplevel.x;\n  float cL = min(cK, cE(cH) * prefilterMiplevel.y);\n  vec3 cM = be(textureCubeLod(prefilterMap, cJ, cL), rgbmRange);\n  if(length(hdrHSV) > .0) {\n    return hsv_apply(cM, hdrHSV);\n  } else {\n    return cM;\n  }\n}\nvec3 cN(const in vec3 cO, const in vec3 cI, const in float cP) {\n  float cQ = 1. - cP;\n  float cR = cQ * (sqrt(cQ) + cP);\n  return mix(cO, cI, cR);\n}\nvec3 cS(const in vec3 bz, const in vec3 bD, const in float bJ, const in vec3 cT) {\n  vec3 cI = reflect(-bD, bz);\n  cI = cN(bz, cI, bJ);\n  vec3 cU = cG(bJ, uEnvironmentTransform * cI);\n  float by = clamp(1. + dot(cI, cT), .0, 1.);\n  cU *= by * by;\n  return cU;\n}\n#else\nvec3 cS(const in vec3 bz, const in vec3 bD, const in float bJ, const in vec3 cT) {\n  return ambientColor;\n}\n#endif\nvec3 cV(const in vec3 ca, const in float bJ, const in float bK, const in float bS) {\n  vec4 rgba = texture2D(brdfLUT, vec2(bK, bJ));\n  float b = (rgba[3] * 65280.0 + rgba[2] * 255.);\n  float a = (rgba[1] * 65280.0 + rgba[0] * 255.);\n  const float cW = 1. / 65535.;\n  return (ca * a + b * bS) * cW;\n}\nvec3 cX(const in vec3 bz, const in vec3 bD, const in float bJ, const in vec3 ca, const in vec3 cT, const in float bS) {\n  float bK = dot(bz, bD);\n  return cS(bz, bD, bJ, cT) * cV(ca, bJ, bK, bS);\n}\nvec3 cY(const float bK, const float bW, const vec3 cZ, const float bP) {\n  return exp(cZ * -bP * ((bW + bK) / max(bW * bK, 1e-3)));\n}\nvec3 da(const in float bK, const in float bW, const in float db) {\n  return mix(vec3(1.), cY(bK, bW, clearCoatTint, clearCoatThickness), db);\n}\nvoid dc(const in float dd, const in vec3 bz, const in vec3 bD, const in float bH, const in vec4 bI, const in float bF, const in vec3 ch, const in vec3 bG, const in float db, out vec3 de, out vec3 df) {\n  if(bH <= .0) {\n    de = vec3(.0);\n    df = vec3(.0);\n    return;\n  }\n  float dg = clamp(dot(bz, -refract(bG, bz, 1. / clearCoatIor)), 0., 1.);\n  vec3 dh = da(dd, dg, db);\n  vec3 cb = normalize(bD + bG);\n  float bN = clamp(dot(bz, cb), 0., 1.);\n  float bT = clamp(dot(bG, cb), 0., 1.);\n  float cc = bM(bI, bN);\n  float cd = bV(bI, dg);\n  float ce = bQ(c, 1., bT);\n  de = (bF * bH * db * cc * cd * 3.141593 * ce) * ch;\n  df = (1. - ce * db) * dh;\n}\nfloat di(const in int dj, const in float dk, const in vec3 bz, const in vec3 bD) {\n  if(dj == 0)\n    return 1.;\n  float bP = dot(bz, bD) + dk;\n  return clamp(bP * bP - 1. + dk, .0, 1.);\n}\nvec3 dl(const in vec3 bz, const in vec3 bD, const in float bJ, const in vec3 cx, const in vec3 cy, const in float cz) {\n  vec3 dm = cz >= .0 ? cy : cx;\n  vec3 dn = cross(dm, bD);\n  vec3 dp = cross(dn, dm);\n  float dq = abs(cz) * clamp(5. * bJ, .0, 1.);\n  return normalize(mix(bz, dp, dq));\n}\nvoid dr() {\n  \n#ifdef HAS_MAP\nvec2 h = computeTexCoord(vTexCoord);\n#endif\n#ifdef HAS_UV_FLIP\nh.y = 1. - h.y;\n#endif\n#if defined(HAS_BUMP_MAP) && defined(HAS_TANGENT)\nh = P(h, normalize(vTangentViewPos - vTangentFragPos));\n#endif\nd.albedo = baseColorIntensity * baseColorFactor.rgb;\n  d.alpha = baseColorFactor.a * vOpacity;\n#if defined(HAS_PATTERN)\nfloat ds = vLinesofar;\n  vec2 j = vTexInfo.zw;\n#ifdef HAS_PATTERN_GAP\nfloat dt = vLinePatternGap;\n#else\nfloat dt = linePatternGap;\n#endif\n#ifdef HAS_PATTERN_ANIM\nfloat du = vLinePatternAnimSpeed;\n#else\nfloat du = linePatternAnimSpeed;\n#endif\nfloat dv = ceil(j.x * vPatternHeight / j.y);\n  float dw = dv * (1. + dt);\n  du /= animSpeedScale;\n  ds += mod(currentTime * -du * .2, dw);\n  float dx = mod(ds / dw, 1.);\n  float dy = mod(flipY * vNormalY, 1.);\n  vec2 h = e(vec2(dx * (1. + dt) * uvScale[0], dy * uvScale[1]));\n  vec4 dz = texture2D(linePatternFile, h);\n  float dA = clamp(sign(1. / (1. + dt) - dx) + .000001, .0, 1.);\n  dz = mix(linePatternGapColor, dz, dA);\n#ifdef IS_SQUARE_TUBE\nfloat o = clamp(sign(abs(vNormalY) - .999999), .0, 1.);\n  dz = mix(dz, vec4(1.), o);\n#endif\nd.albedo *= dz.rgb;\n  d.alpha *= dz.a;\n#endif\n#if defined(HAS_ALBEDO_MAP)\nvec4 dB = u(baseColorTexture, h);\n  d.albedo *= bd(dB.rgb);\n  d.alpha *= dB.a;\n#endif\n#if defined(HAS_SKIN_MAP)\nvec4 dC = u(skinTexture, h);\n  d.skinColor = dC;\n#endif\n#if defined(HAS_COLOR0)\nd.albedo *= vColor0.rgb;\n#if COLOR0_SIZE == 4\nd.alpha *= vColor0.a;\n#endif\n#endif\n#if defined(HAS_COLOR)\nd.albedo *= vColor.rgb;\n  d.alpha *= vColor.a;\n#elif defined(IS_LINE_EXTRUSION)\nd.albedo *= lineColor.rgb;\n  d.alpha *= lineColor.a;\n#else\nd.albedo *= polygonFill.rgb;\n  d.alpha *= polygonFill.a;\n#endif\n#if defined(HAS_INSTANCE_COLOR)\nd.albedo *= vInstanceColor.rgb;\n  d.alpha *= vInstanceColor.a;\n#endif\n#if defined(IS_LINE_EXTRUSION)\nd.alpha *= lineOpacity;\n#else\nd.alpha *= polygonOpacity;\n#endif\n#if defined(HAS_METALLICROUGHNESS_MAP)\nd.roughnessMetalness = u(metallicRoughnessTexture, h).gb * vec2(roughnessFactor, metallicFactor);\n#else\nd.roughnessMetalness = vec2(roughnessFactor, metallicFactor);\n#endif\nd.emit = emissiveFactor;\n#if defined(HAS_EMISSIVE_MAP)\nif(emitMultiplicative == 1) {\n    d.emit *= bd(u(emissiveTexture, h).rgb);\n  } else {\n    d.emit += bd(u(emissiveTexture, h).rgb);\n  }\n#endif\nd.emit *= emitColorFactor;\n#if defined(HAS_AO_MAP)\nvec2 dD = computeTexCoord(vTexCoord1);\n  d.ao = u(occlusionTexture, dD).r;\n#else\nd.ao = 1.;\n#endif\nd.ao *= occlusionFactor;\n#if defined(HAS_NORMAL_MAP) && defined(HAS_TANGENT)\nvec3 dE = u(normalTexture, h).xyz * 2. - 1.;\n  dE.y = normalMapFlipY == 1 ? -dE.y : dE.y;\n  d.normal = dE;\n#else\nd.normal = normalize(vModelNormal);\n#endif\n#if defined(HAS_TERRAIN_NORMAL) && defined(HAS_TANGENT)\nvec3 dE = convertTerrainHeightToNormalMap(h);\n  dE.y = normalMapFlipY == 1 ? -dE.y : dE.y;\n  d.normal = dE;\n#endif\n#if defined(SHADING_MODEL_SPECULAR_GLOSSINESS)\nd.albedo *= diffuseFactor.rgb;\n  d.alpha *= diffuseFactor.a;\n#if defined(HAS_DIFFUSE_MAP)\nvec4 cg = u(diffuseTexture, h);\n  d.albedo *= bd(cg.rgb);\n  d.alpha *= cg.a;\n#endif\nd.specularColor = specularFactor;\n  d.glossiness = glossinessFactor;\n#if defined(HAS_SPECULARGLOSSINESS_MAP)\nvec4 dF = u(specularGlossinessTexture, h);\n  d.specularColor *= bd(dF.rgb);\n  d.glossiness *= dF.a;\n#endif\n#endif\n}\nvec3 dG(const vec3 x) {\n  const float a = 2.51;\n  const float b = .03;\n  const float dH = 2.43;\n  const float bP = .59;\n  const float dI = .14;\n  return (x * (a * x + b)) / (x * (dH * x + bP) + dI);\n}\nvec3 dJ(vec3 bc) {\n  bc = dG(bc);\n  return bc = pow(bc, vec3(1. / 2.2));\n}\nuniform float specularAAVariance;\nuniform float specularAAThreshold;\nfloat dK(float bJ, const vec3 dL) {\n  \n#if defined(GL_OES_standard_derivatives) || __VERSION__ == 300\nvec3 dM = dFdx(dL);\n  vec3 dN = dFdy(dL);\n  float dO = specularAAVariance * (dot(dM, dM) + dot(dN, dN));\n  float dP = min(2. * dO, specularAAThreshold);\n  float dQ = saturate(bJ * bJ + dP);\n  return sqrt(dQ);\n#else\nreturn bJ;\n#endif\n}\n#ifdef HAS_SSR\nuniform sampler2D TextureDepth;\nuniform highp vec2 outSize;\nuniform float ssrFactor;\nuniform float ssrQuality;\nuniform sampler2D TextureReflected;\nuniform highp mat4 projMatrix;\nuniform mat4 invProjMatrix;\nuniform vec4 outputFovInfo[2];\nuniform mat4 reprojViewProjMatrix;\nvec3 dR(const in mat4 dS, const in vec3 dT) {\n  vec4 dU = dS * vec4(dT, 1.);\n  return vec3(.5 + .5 * dU.xy / dU.w, dU.w);\n}\nvec3 dV(const in float dW, const in vec2 h) {\n  return texture2D(TextureReflected, h).rgb;\n}\nfloat dX(float dY) {\n  highp mat4 dS = projMatrix;\n  highp float z = dY * 2. - 1.;\n  return -dS[3].z / (z + dS[2].z);\n}\nfloat dZ(const vec2 h) {\n  float dY = br(texture2D(TextureDepth, h));\n  return dY;\n}\nvec3 ea(const in float bv, const in vec3 eb, const in vec3 ec, const in vec3 ed, const in vec3 bD, const in float ee) {\n  vec2 ef;\n  ef.x = bt(gl_FragCoord.yx, bv);\n  ef.y = fract(ef.x * 52.9829189);\n  ef.y = mix(ef.y, 1., .7);\n  float eg = 2. * 3.14159 * ef.x;\n  float eh = pow(max(ef.y, .000001), ee / (2. - ee));\n  float ei = sqrt(1. - eh * eh);\n  vec3 ej = vec3(ei * cos(eg), ei * sin(eg), eh);\n  ej = ej.x * eb + ej.y * ec + ej.z * ed;\n  return normalize((2. * dot(bD, ej)) * ej - bD);\n}\nfloat ek(const in float bv) {\n  return (bt(gl_FragCoord.xy, bv) - .5);\n}\nvec3 el(const in vec3 em, const in float en, const in vec3 eo) {\n  vec3 ep = dR(projMatrix, vViewVertex.xyz + eo * en);\n  ep.z = 1. / ep.z;\n  ep -= em;\n  float eq = min(1., .99 * (1. - em.x) / max(1e-5, ep.x));\n  float er = min(1., .99 * (1. - em.y) / max(1e-5, ep.y));\n  float es = min(1., .99 * em.x / max(1e-5, -ep.x));\n  float et = min(1., .99 * em.y / max(1e-5, -ep.y));\n  return ep * min(eq, er) * min(es, et);\n}\nfloat eu(const in vec3 em, const in vec3 ep, inout float ev, inout float ew) {\n  float ex = (ew + ev) * .5;\n  vec3 ey = em + ep * ex;\n  float z = dZ(ey.xy);\n  float dY = dX(z);\n  float ez = -1. / ey.z;\n  ev = dY > ez ? ev : ex;\n  ew = dY > ez ? ex : ew;\n  return ex;\n}\nvec4 eA(const in vec3 em, const in float en, in float eB, const in vec3 eo, const in float bJ, const in float bv) {\n  int eC = 20;\n  float eD = 1. / float(eC);\n  eB *= eD;\n  vec3 ep = el(em, en, eo);\n  float eE = eD;\n  vec3 eF = vec3(.0, eE, 1.);\n  vec3 ey;\n  float z, dY, ez, eG, eH, eI;\n  bool eJ;\n  float eK = 1.;\n  float ex;\n  for(int X = 0; X < eC; X++) {\n    ey = em + ep * eF.y;\n    z = dZ(ey.xy);\n    dY = dX(z);\n    ez = -1. / ey.z;\n    float eL = clamp(sign(.999 - z), .0, 1.);\n    eG = eL * (ez - dY);\n    eG *= clamp(sign(abs(eG) - en * eD * eD), .0, 1.);\n    eJ = abs(eG + eB) < eB;\n    eH = clamp(eF.x / (eF.x - eG), .0, 1.);\n    eI = eJ ? eF.y + eH * eD - eD : 1.;\n    eF.z = min(eF.z, eI);\n    eF.x = eG;\n    if(eJ) {\n      float ev = eF.y - eD;\n      float ew = eF.y;\n      ex = eu(em, ep, ev, ew);\n      ex = eu(em, ep, ev, ew);\n      ex = eu(em, ep, ev, ew);\n      eK = ex;\n      break;\n    }\n    eF.y += eD;\n  }\n  return vec4(em + ep * eK, 1. - eK);\n}\nvec4 eM(in vec4 eN, const in float eO, const in vec3 eP, const in vec3 eQ, const in float bJ) {\n  vec4 eR = mix(outputFovInfo[0], outputFovInfo[1], eN.x);\n  eN.xyz = vec3(mix(eR.xy, eR.zw, eN.y), 1.) * -1. / eN.z;\n  eN.xyz = (reprojViewProjMatrix * vec4(eN.xyz, 1.)).xyw;\n  eN.xy /= eN.z;\n  float eS = clamp(6. - 6. * max(abs(eN.x), abs(eN.y)), .0, 1.);\n  eN.xy = .5 + .5 * eN.xy;\n  vec3 eT = eQ * dV(bJ * (1. - eN.w), eN.xy);\n  return vec4(mix(eP, eT, eO * eS), 1.);\n}\nvec3 ssr(const in vec3 eP, const in vec3 eQ, const in float bJ, const in vec3 bz, const in vec3 bD) {\n  float eU = .0;\n  vec4 cD = vec4(.0);\n  float ee = bJ * bJ;\n  ee = ee * ee;\n  vec3 eV = abs(bz.z) < .999 ? vec3(.0, .0, 1.) : vec3(1., .0, .0);\n  vec3 eb = normalize(cross(eV, bz));\n  vec3 ec = cross(bz, eb);\n  float eO = ssrFactor * clamp(-4. * dot(bD, bz) + 3.8, .0, 1.);\n  eO *= clamp(4.7 - bJ * 5., .0, 1.);\n  vec3 em = dR(projMatrix, vViewVertex.xyz);\n  em.z = 1. / em.z;\n  vec3 eo = ea(eU, eb, ec, bz, bD, ee);\n  float en = mix(cameraNearFar.y + vViewVertex.z, -vViewVertex.z - cameraNearFar.x, eo.z * .5 + .5);\n  float eB = .5 * en;\n  vec4 eN;\n  if(dot(eo, bz) > .001 && eO > .0) {\n    eN = eA(em, en, eB, eo, bJ, eU);\n    if(eN.w > .0)\n      cD += eM(eN, eO, eP, eQ, bJ);\n    \n  }\n  return cD.w > .0 ? cD.rgb / cD.w : eP;\n}\n#endif\n#include <highlight_frag>\nvoid main() {\n  dr();\n  vec3 bD = normalize(cameraPosition - vModelVertex.xyz);\n#if defined(HAS_DOUBLE_SIDE)\nvec3 cT = gl_FrontFacing ? normalize(vModelNormal) : -normalize(vModelNormal);\n#else\nvec3 cT = normalize(vModelNormal);\n#endif\n#if defined(HAS_TANGENT)\nvec4 eW;\n  eW = vModelTangent;\n#if defined(HAS_DOUBLE_SIDE)\neW.xyz = gl_FrontFacing ? normalize(eW.xyz) : -normalize(eW.xyz);\n#else\neW.xyz = normalize(eW.xyz);\n#endif\nvec3 eX = normalize(vModelBiTangent);\n#endif\nfloat bR = .08 * bj();\n  float eY = bi();\n  vec3 eZ = bg();\n#if defined(SHADING_MODEL_SPECULAR_GLOSSINESS)\nvec3 fa = d.specularColor;\n#else\nvec3 fa = mix(vec3(bR), eZ, eY);\n#endif\neZ *= 1. - eY;\n  float fb = clamp(50.0 * fa.g, .0, 1.);\n  float fc = bk();\n  if(specularAAVariance > .0) {\n    fc = dK(fc, cT);\n  }\n  vec3 fd = bl();\n  vec3 fe = bn();\n  vec3 ff = vec3(fe);\n#if defined(HAS_TANGENT) && (defined(HAS_NORMAL_MAP) || defined(HAS_TERRAIN_NORMAL))\nff = bx(normalMapFactor, ff, eW.xyz, eX, cT);\n#endif\nfloat fg = bo();\n  float fh = bp();\n  if(specularAAVariance > .0) {\n    fh = dK(fh, cT);\n  }\n  vec3 fi = cT;\n#if defined(HAS_TANGENT)\nfloat cz;\n  vec3 cx;\n  vec3 cy;\n  if(anisotropyFactor > .0) {\n    cz = anisotropyFactor;\n    eW.xyz = normalize(eW.xyz - ff * dot(eW.xyz, ff));\n    eX = normalize(cross(ff, eW.xyz)) * eW.w;\n    cx = normalize(mix(eW.xyz, eX, anisotropyDirection));\n    cy = normalize(mix(eX, -eW.xyz, anisotropyDirection));\n  }\n#endif\nvec3 cg = vec3(.0);\n  vec3 ca = vec3(.0);\n  vec3 fj;\n#if defined(HAS_TANGENT)\nif(anisotropyFactor > .0) {\n    fj = dl(ff, bD, fc, cx, cy, cz);\n  } else {\n    fj = ff;\n  }\n#else\nfj = ff;\n#endif\n#if defined(HAS_IBL_LIGHTING)\ncg = eZ * cC(ff) * .5;\n#else\ncg = eZ * ambientColor;\n#endif\nca = cX(fj, bD, fc, fa, cT, fb);\n  float dd;\n  if(clearCoatFactor > .0) {\n    dd = clamp(dot(fi, -refract(bD, fi, 1. / clearCoatIor)), 0., 1.);\n    float fk = fg * bQ(c, 1., dd);\n    vec3 fl = da(dd, dd, fg);\n    ca = mix(ca * fl, cS(fi, bD, fh, cT), fk);\n    cg *= fl * (1. - fk);\n  }\n  float fm = 1.;\n  float fn = bq();\n  cg *= environmentExposure * fn;\n#ifdef HAS_IBL_LIGHTING\nfm = di(1, fn, ff, bD);\n#endif\n#ifdef HAS_SSR\nvec3 fo = normalize(gl_FrontFacing ? vViewNormal : -vViewNormal);\n  vec3 fp = fo;\n#if defined(HAS_TANGENT) && (defined(HAS_NORMAL_MAP) || defined(HAS_TERRAIN_NORMAL))\nvec4 fq;\n  fq = vViewTangent;\n  fq = gl_FrontFacing ? fq : -fq;\n  fq.xyz = normalize(fq.xyz);\n  vec3 fr = normalize(cross(fo, fq.xyz)) * fq.w;\n  fp = bx(normalMapFactor, fe, fq.xyz, fr, fo);\n#endif\nca = ssr(ca, fa * fm, fc, fp, -normalize(vViewVertex.xyz));\n#endif\nca *= environmentExposure * fm;\n  float bF, bH;\n  vec3 bG;\n  bool ck;\n  vec3 fs;\n  vec3 ft;\n  vec4 fu = bI(ff, bD, max(.045, fc));\n  vec3 fv = vModelNormal;\n  bC(bD, ff, light0_viewDirection, bF, bG, bH);\n#if defined(HAS_TANGENT)\nif(anisotropyFactor > .0) {\n    cB(ff, bD, bH, fu, eZ, fa, bF, light0_diffuse.rgb, bG, fb, cx, cy, cz, ft, fs, ck);\n  } else {\n    cf(ff, bD, bH, fu, eZ, fa, bF, light0_diffuse.rgb, bG, fb, ft, fs, ck);\n  }\n#else\ncf(ff, bD, bH, fu, eZ, fa, bF, light0_diffuse.rgb, bG, fb, ft, fs, ck);\n#endif\nif(clearCoatFactor > .0) {\n    vec3 fw;\n    vec3 fx;\n    vec4 fy = bI(fi, bD, fh);\n    dc(dd, fi, bD, dot(fi, bG), fy, bF, light0_diffuse.rgb, bG, fg, fw, fx);\n    ft *= fx;\n    fs = fw + fs * fx;\n  }\n#if defined(HAS_SHADOWING) && !defined(HAS_BLOOM)\nfloat fz = shadow_computeShadow();\n  ft = shadow_blend(ft, fz).rgb;\n  fs = shadow_blend(fs, fz).rgb;\n#endif\nvec3 fA = vec3(ca);\n  vec3 fB = vec3(cg);\n  cg += ft;\n  ca += fs;\n  cg += fd;\n  vec3 fC = ca + cg;\n  if(outputSRGB == 1)\n    fC = bb(fC);\n  \n#ifdef HAS_SKIN_MAP\nvec4 fD = bm();\n  fC.rgb = fC.rgb * (1. - fD.a) + fD.rgb * fD.a;\n#endif\nfloat fE = bh();\n  glFragColor = vec4(fC * fE, fE);\n  if(glFragColor.a < alphaTest) {\n    discard;\n  }\n#ifdef HAS_VERTEX_COLOR\nglFragColor *= vertexColor_get();\n#endif\n#ifdef HAS_EXCAVATE_ANALYSIS\nglFragColor = excavateColor(glFragColor);\n#endif\n#ifdef HAS_HEATMAP\nglFragColor = heatmap_getColor(glFragColor);\n#endif\n#ifdef HAS_SNOW\nglFragColor.rgb = snow(glFragColor, bn(), 1.);\n#endif\nif(contrast != 1.) {\n    glFragColor = contrastMatrix(contrast) * glFragColor;\n  }\n  if(length(hsv) > .0) {\n    glFragColor = hsv_apply(glFragColor, hsv);\n  }\n#ifdef OUTPUT_NORMAL\nglFragColor = vec4(cT, 1.);\n#endif\nglFragColor = highlight_blendColor(glFragColor);\n#ifdef HAS_LAYER_OPACITY\nglFragColor *= layerOpacity;\n#endif\n#ifdef HAS_MASK_EXTENT\nglFragColor = setMask(glFragColor);\n#endif\n#if __VERSION__ == 100\ngl_FragColor = glFragColor;\n#endif\n}",
	                uniforms: d,
	                extraCommandProps: t,
	                defines: o
	            }), this.version = 300;
	        }
	        getGeometryDefines(e) {
	            const n = {};
	            return e.data[e.desc.tangentAttribute] ? n.HAS_TANGENT = 1 : e.data[e.desc.normalAttribute] && (n.HAS_NORMAL = 1), 
	            e.data[e.desc.colorAttribute] && (n.HAS_COLOR = 1), e.data[e.desc.color0Attribute] && (n.HAS_COLOR0 = 1, 
	            n.COLOR0_SIZE = e.getColor0Size()), n;
	        }
	    },
	    StandardDepthShader: class extends vn {
	        constructor(e = {}) {
	            const t = [];
	            super({
	                vert: "#define SHADER_NAME depth_vert\nprecision highp float;\nattribute vec3 aPosition;\n#include <line_extrusion_vert>\nuniform mat4 modelViewMatrix;\nuniform mat4 positionMatrix;\nuniform mat4 projMatrix;\nuniform vec2 outSize;\nuniform vec2 halton;\n#include <get_output>\nvoid main() {\n  mat4 c = getPositionMatrix();\n#ifdef IS_LINE_EXTRUSION\nvec4 d = getPosition(getLineExtrudePosition(aPosition));\n#else\nvec4 d = getPosition(aPosition);\n#endif\nvec4 e = modelViewMatrix * c * d;\n  mat4 f = projMatrix;\n  f[2].xy += halton.xy / outSize.xy;\n  gl_Position = f * e;\n}",
	                frag: "#define SHADER_NAME depth_frag\nprecision highp float;\nvoid main() {\n  gl_FragColor = vec4(1., .0, .0, 1.);\n}",
	                uniforms: [ {
	                    name: "modelViewMatrix",
	                    type: "function",
	                    fn: (e, r) => multiply$5(t, r.viewMatrix, r.modelMatrix)
	                } ],
	                extraCommandProps: e.extraCommandProps,
	                defines: e.defines
	            });
	        }
	    },
	    PBRUtils: sr
	};

	var reshadergl_es = /*#__PURE__*/Object.freeze({
		__proto__: null,
		AbstractTexture: z$1,
		BloomPass: Un,
		BoundingBox: X$1,
		BoxBlurShader: On,
		Constants: L$1,
		CopyShader: Zn,
		DeferredRenderer: G$1,
		EdgeGeometry: Te$1,
		EdgeShader: Qn,
		ExtentPass: mt$1,
		FBORayPicking: Sr,
		FogPass: rt$1,
		FogShader: it$1,
		FxaaShader: Cn,
		GLTFHelper: wt$1,
		GLTFManager: zt$1,
		Geometry: Q$1,
		HDR: oi$1,
		HeatmapDisplayShader: Yn,
		HeatmapShader: Xn,
		InstancedMesh: Ge$1,
		Jitter: kn,
		KHRTechniquesWebglManager: Ir,
		Material: Ce$1,
		Mesh: ke$1,
		MeshShader: vn,
		PhongMaterial: Ie$1,
		PhongShader: bn,
		PhongSpecularGlossinessMaterial: Le$1,
		Plane: tn,
		PointLineShader: pn,
		PostProcessShader: Dn,
		QuadShader: Mn,
		REGLHelper: _e$1,
		RainRipplesPass: dt$1,
		Renderer: k$1,
		ResourceLoader: Ve$1,
		Scene: Ke$1,
		Shader: hn,
		ShaderLib: on,
		ShadowDisplayShader: hr,
		ShadowMapShader: cr,
		ShadowPass: ur,
		SkyboxShader: qn,
		SsaoPass: Rn,
		SsrPass: jn,
		StandardLiteMaterial: Ne$1,
		StandardLiteShader: nt$1,
		TaaPass: Hn,
		Texture2D: en,
		TextureCube: nn,
		ToonMaterial: Re$1,
		ToonShader: yn,
		Util: N$1,
		WaterShader: Jn,
		WireFrameMaterial: Ee$1,
		WireframeShader: _n,
		earcut: ii$1,
		pbr: ai$1
	});

	var isArray = Array.isArray;
	var keyList = Object.keys;
	var hasProp = Object.prototype.hasOwnProperty;

	var fastDeepEqual = function equal(a, b) {
	  if (a === b) return true;

	  if (a && b && typeof a == 'object' && typeof b == 'object') {
	    var arrA = isArray(a)
	      , arrB = isArray(b)
	      , i
	      , length
	      , key;

	    if (arrA && arrB) {
	      length = a.length;
	      if (length != b.length) return false;
	      for (i = length; i-- !== 0;)
	        if (!equal(a[i], b[i])) return false;
	      return true;
	    }

	    if (arrA != arrB) return false;

	    var dateA = a instanceof Date
	      , dateB = b instanceof Date;
	    if (dateA != dateB) return false;
	    if (dateA && dateB) return a.getTime() == b.getTime();

	    var regexpA = a instanceof RegExp
	      , regexpB = b instanceof RegExp;
	    if (regexpA != regexpB) return false;
	    if (regexpA && regexpB) return a.toString() == b.toString();

	    var keys = keyList(a);
	    length = keys.length;

	    if (length !== keyList(b).length)
	      return false;

	    for (i = length; i-- !== 0;)
	      if (!hasProp.call(b, keys[i])) return false;

	    for (i = length; i-- !== 0;) {
	      key = keys[i];
	      if (!equal(a[key], b[key])) return false;
	    }

	    return true;
	  }

	  return a!==a && b!==b;
	};

	/*!
	 * @maptalks/fusiongl v0.6.3
	 * LICENSE : UNLICENSED
	 * (c) 2016-2023 maptalks.com
	 */
	function i(t){for(let i=1;i<arguments.length;i++){const e=arguments[i];for(const i in e)t[i]=e[i];}return t}function e$1(t,...e){for(let r=0;r<e.length;r++)i(t,e[r]);}class r{constructor(t){this.context=t,this.COLOR_ATTACHMENT0_WEBGL=36064,this.COLOR_ATTACHMENT1_WEBGL=36065,this.COLOR_ATTACHMENT2_WEBGL=36066,this.COLOR_ATTACHMENT3_WEBGL=36067,this.COLOR_ATTACHMENT4_WEBGL=36068,this.COLOR_ATTACHMENT5_WEBGL=36069,this.COLOR_ATTACHMENT6_WEBGL=36070,this.COLOR_ATTACHMENT7_WEBGL=36071,this.COLOR_ATTACHMENT8_WEBGL=36072,this.COLOR_ATTACHMENT9_WEBGL=36073,this.COLOR_ATTACHMENT10_WEBGL=577040,this.COLOR_ATTACHMENT11_WEBGL=577041,this.COLOR_ATTACHMENT12_WEBGL=577042,this.COLOR_ATTACHMENT13_WEBGL=577043,this.COLOR_ATTACHMENT14_WEBGL=577044,this.COLOR_ATTACHMENT15_WEBGL=577045,this.DRAW_BUFFER0_WEBGL=34853,this.DRAW_BUFFER1_WEBGL=34854,this.DRAW_BUFFER2_WEBGL=34855,this.DRAW_BUFFER3_WEBGL=34856,this.DRAW_BUFFER4_WEBGL=34857,this.DRAW_BUFFER5_WEBGL=34858,this.DRAW_BUFFER6_WEBGL=34859,this.DRAW_BUFFER7_WEBGL=34860,this.DRAW_BUFFER8_WEBGL=34861,this.DRAW_BUFFER9_WEBGL=34862,this.DRAW_BUFFER10_WEBGL=34863,this.DRAW_BUFFER11_WEBGL=34864,this.DRAW_BUFFER12_WEBGL=34865,this.DRAW_BUFFER13_WEBGL=34866,this.DRAW_BUFFER14_WEBGL=34867,this.DRAW_BUFFER15_WEBGL=34868,this.MAX_COLOR_ATTACHMENTS_WEBGL=36063,this.MAX_DRAW_BUFFERS_WEBGL=2178;}drawBuffersWEBGL(){return this.context.drawBuffers.apply(this.context,arguments)}}class s{constructor(t){this.context=t,this.VERTEX_ARRAY_BINDING_OES=34229;}createVertexArrayOES(){return this.context.createVertexArray()}deleteVertexArrayOES(){return this.context.deleteVertexArray.apply(this.context,arguments)}isVertexArrayOES(){return this.context.isVertexArray.apply(this.context,arguments)}bindVertexArrayOES(){return this.context.bindVertexArray.apply(this.context,arguments)}}class h{constructor(t){this.context=t,this.VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE=35070;}drawArraysInstancedANGLE(){return this.context.drawArraysInstanced.apply(this.context,arguments)}drawElementsInstancedANGLE(){return this.context.drawElementsInstanced.apply(this.context,arguments)}vertexAttribDivisorANGLE(){return this.context.vertexAttribDivisor.apply(this.context,arguments)}}const n={webgl_depth_texture:{UNSIGNED_INT_24_8_WEBGL:34042},oes_element_index_uint:{},oes_texture_float:{},oes_texture_half_float:{HALF_FLOAT_OES:36193},ext_color_buffer_float:{},oes_standard_derivatives:{},ext_frag_depth:{},ext_blend_minmax:{MIN_EXT:32775,MAX_EXT:32776},ext_shader_texture_lod:{}},u={has(t,i){const e=t.t,r=t.i;return !(!e&&!r.getExtension(i))&&(i=i.toLowerCase(),e&&n[i]||"webgl_draw_buffers"===i||"oes_vertex_array_object"===i||"angle_instanced_arrays"===i)},mock:(t,i)=>(i=i.toLowerCase(),n[i]?t.t?("oes_texture_float"!==i&&"oes_texture_half_float"!==i||t.i.getExtension("EXT_color_buffer_float"),n[i]):t.i.getExtension(i):"webgl_draw_buffers"===i?new r(t):"oes_vertex_array_object"===i?new s(t):"angle_instanced_arrays"===i?new h(t):null),getInternalFormat:(t,i,e)=>6402===i?33190:34041===i?35056:36193===e&&i===t.RGBA?34842:36193===e&&i===t.RGB?34843:e===t.FLOAT&&i===t.RGBA?34836:e===t.FLOAT&&i===t.RGB?34837:i,getTextureType:(t,i)=>36193===i?t.HALF_FLOAT:i};let a=1;class o{constructor(t){this.uid=a++,this.states=function(t){return {scissor:[0,0,t.canvas.width,t.canvas.height],viewport:[0,0,t.canvas.width,t.canvas.height],blendColor:[0,0,0,0],blendEquationSeparate:[t.FUNC_ADD,t.FUNC_ADD],blendFuncSeparate:[t.ONE,t.ZERO,t.ONE,t.ZERO],clearColor:[0,0,0,0],clearDepth:[1],clearStencil:[0],colorMask:[!0,!0,!0,!0],cullFace:[t.BACK],depthFunc:[t.LESS],depthMask:[!0],depthRange:[0,1],capabilities:{3042:!1,2884:!1,2929:!1,3024:!1,32823:!1,32926:!1,32928:!1,3089:!1,2960:!1},frontFace:[t.CCW],hint:{33170:[t.DONT_CARE],35723:[t.DONT_CARE]},lineWidth:[1],pixelStorei:{3333:[4],3317:[4],37440:[!1],37441:[!1],37443:[t.BROWSER_DEFAULT_WEBGL]},polygonOffset:[0,0],sampleCoverage:[1,!1],stencilFuncSeparate:{1028:[t.ALWAYS,0,4294967295],1029:[t.ALWAYS,0,4294967295]},stencilMaskSeparate:{1028:[4294967295],1029:[4294967295]},stencilOpSeparate:{1028:[t.KEEP,t.KEEP,t.KEEP],1029:[t.KEEP,t.KEEP,t.KEEP]},program:null,framebuffer:{36160:null,36008:null,36009:null},renderbuffer:{36161:null},textures:{active:-1,units:function(){const i=[],e=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);for(let t=0;t<e;t++)i.push({3553:null,34067:null});return i[-1]={3553:null,34067:null},i}()},attributes:{},arrayBuffer:null,elementArrayBuffer:null}}(t),this.i=t,this.i._fusiongl_drawCalls=0,this.t="undefined"!=typeof WebGL2RenderingContext&&this.i instanceof WebGL2RenderingContext;const i=Object.getPrototypeOf(this);this.t?Object.setPrototypeOf(i,WebGL2RenderingContext.prototype):Object.setPrototypeOf(i,WebGLRenderingContext.prototype),this.s=t.getParameter(t.MAX_VERTEX_ATTRIBS);}get canvas(){return this.i.canvas}get drawingBufferWidth(){return this.i.drawingBufferWidth}get drawingBufferHeight(){return this.i.drawingBufferHeight}get gl(){return this.i}get buffersOES(){return this.h||(this.h=this.i.getExtension("WEBGL_draw_buffers")),this.h}get vaoOES(){return this.u||(this.u=this.i.getExtension("OES_vertex_array_object")),this.u}get angleOES(){return this.o||(this.o=this.i.getExtension("ANGLE_instanced_arrays")),this.o}get standOES(){return this.l||(this.l=this.i.getExtension("OES_standard_derivatives")),this.l}attachShader(t,i){return this.i.attachShader(t,i)}shaderSource(t,i){return this.i.shaderSource(t,i)}compileShader(t){return this.i.compileShader(t)}createShader(t){return this.i.createShader(t)}createProgram(){return this.i.createProgram()}deleteProgram(t){return this.states.program===t&&(this.states.program=null),this.i.deleteProgram(t)}deleteShader(t){return this.i.deleteShader(t)}detachShader(t,i){return this.i.detachShader(t,i)}getAttachedShaders(t){return this.i.getAttachedShaders(t)}linkProgram(t){return this.i.linkProgram(t)}makeXRCompatible(){return this.i.makeXRCompatible()}getShaderParameter(t,i){return this.i.getShaderParameter(t,i)}getShaderPrecisionFormat(t,i){return this.i.getShaderPrecisionFormat(t,i)}getShaderInfoLog(t){return this.i.getShaderInfoLog(t)}getShaderSource(t){return this.i.getShaderSource(t)}getProgramInfoLog(t){return this.i.getProgramInfoLog(t)}getProgramParameter(t,i){return this.i.getProgramParameter(t,i)}getError(){return this.i.getError()}getContextAttributes(){return this.i.getContextAttributes()}getExtension(t){return u.has(this,t)?u.mock(this,t):this.i.getExtension(t)}getSupportedExtensions(){return this.i.getSupportedExtensions()}getParameter(t){return this.i.getParameter(t)}isEnabled(t){return this.i.isEnabled(t)}isProgram(t){return this.i.isProgram(t)}isShader(t){return this.i.isShader(t)}validateProgram(t){return this.i.validateProgram(t)}clear(t){return this.m(),this.i.clear(t)}drawArrays(t,i,e){return this.m(),this.g(),this.i.drawArrays(t,i,e)}drawElements(t,i,e,r){return this.m(),this.g(),this.i.drawElements(t,i,e,r)}drawBuffers(t){return this.m(),this.g(),this.t?this.i.drawBuffers(t):this.buffersOES.drawBuffersWEBGL(t)}g(){this.i._fusiongl_drawCalls++;}resetDrawCalls(){this.i._fusiongl_drawCalls=0;}getDrawCalls(){return this.i._fusiongl_drawCalls}v(){const t=this.i,i=t.getParameter(t.CURRENT_PROGRAM),e=t.getProgramParameter(i,t.ACTIVE_ATTRIBUTES),r=[];for(let i=0;i<e;i++)r.push(t.getVertexAttrib(i,t.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING));this._={buffers:r,elements:t.getParameter(t.ELEMENT_ARRAY_BUFFER_BINDING),framebuffer:t.getParameter(t.FRAMEBUFFER_BINDING)},window.DEBUGGING&&(console.log(this.uid,this._),console.log(this.uid,this.states.attributes),console.log(this.states.attributes[0].buffer===this._.buffers[0]),console.log(this.states.attributes[1].buffer===this._.buffers[1]),console.log(this.states.attributes[2].buffer===this._.buffers[2]));}finish(){return this.i.finish()}flush(){return this.m(),this.i.flush()}commit(){return this.m(),this.i.commit()}isContextLost(){return this.i.isContextLost()}getFragDataLocation(t,i){return this.i.getFragDataLocation(t,i)}createSampler(){return this.i.createSampler()}deleteSampler(){return this.i.deleteSampler()}bindSampler(){return this.i.bindSampler()}isSampler(){return this.i.isSampler()}getSamplerParameter(){return this.i.getSamplerParameter()}isQuery(t){return this.i.beginQuery(t)}beginQuery(t,i){return this.i.beginQuery(t,i)}deleteQuery(t){return this.i.query(t)}isTransformFeedback(t){return this.i.isTransformFeedback(t)}beginTransformFeedback(t){return this.i.beginTransformFeedback(t)}deleteTransformFeedback(t){return this.i.deleteTransformFeedback(t)}pauseTransformFeedback(){return this.i.pauseTransformFeedback()}resumeTransformFeedback(){return this.i.resumeTransformFeedback()}transformFeedbackVaryings(t,i,e){return this.i.transformFeedbackVaryings(t,i,e)}bindBufferBase(t,i,e){return this.i.bbindBufferBase(t,i,e)}bindBufferRange(t,i,e,r,s){return this.i.bindBufferRange(t,i,e,r,s)}bindTransformFeedback(t,i){return this.i.bindTransformFeedback(t,i)}fenceSync(t,i){return this.i.fenceSync(t,i)}isSync(t){return this.i.isSync(t)}deleteSync(t){return this.i.deleteSync(t)}clientWaitSync(t,i,e){return this.i.clientWaitSync(t,i,e)}waitSync(t,i,e){return this.i.waitSync(t,i,e)}getSyncParameter(t,i){return this.i.getSyncParameter(t,i)}getIndexedParameter(t,i){return this.i.getIndexedParameter(t,i)}}e$1(o.prototype,{bufferData(...t){return this.m(),this.i.bufferData(...t)},bufferSubData(...t){return this.m(),this.i.bufferSubData(...t)},createBuffer(){return this.i.createBuffer()},deleteBuffer(t){const i=this.states;i.arrayBuffer===t?i.arrayBuffer=null:i.elementArrayBuffer===t&&(i.elementArrayBuffer=null);const e=i.attributes;for(const i in e)e[i].buffer===t&&(e[i].buffer=null);return this.i.deleteBuffer(t)},getBufferParameter(t,i){return this.m(),this.i.getBufferParameter(t,i)},isBuffer(t){return this.i.isBuffer(t)},copyBufferSubData(t,i,e,r,s){return this.i.isBuffer(t,i,e,r,s)},readBuffer(t){return this.i.readBuffer(t)}}),e$1(o.prototype,{checkFramebufferStatus(t){return this.i.checkFramebufferStatus(t)},createFramebuffer(){return this.i.createFramebuffer()},deleteFramebuffer(t){const i=this.states.framebuffer;for(const e in i)i[e]===t&&(i[e]=null);return this.i.deleteFramebuffer(t)},framebufferRenderbuffer(t,i,e,r){return this.m(),this.i.framebufferRenderbuffer(t,i,e,r)},framebufferTexture2D(t,i,e,r,s){return this.m(),this.i.framebufferTexture2D(t,i,e,r,s)},getFramebufferAttachmentParameter(t,i,e){return this.m(),this.i.getFramebufferAttachmentParameter(t,i,e)},isFramebuffer(t){return this.i.isFramebuffer(t)},readPixels(t,i,e,r,s,h,n){return this.m(),this.i.readPixels(t,i,e,r,s,h,n)},blitFramebuffer(t,i,e,r,s,h,n,u,a,o){return this.m(),this.i.blitFramebuffer(t,i,e,r,s,h,n,u,a,o)}}),e$1(o.prototype,{createRenderbuffer(){return this.i.createRenderbuffer()},deleteRenderbuffer(t){const i=this.states.renderbuffer;for(const e in i)i[e]===t&&(i[e]=null);return this.i.deleteRenderbuffer(t)},getRenderbufferParameter(t,i){return this.m(),this.i.getRenderbufferParameter(t,i)},isRenderbuffer(t){return this.i.isRenderbuffer(t)},renderbufferStorage(t,i,e,r){return this.m(),this.i.renderbufferStorage(t,i,e,r)},renderbufferStorageMultisample(t,i,e,r,s){return this.m(),this.i.renderbufferStorageMultisample(t,i,e,r,s)}});e$1(o.prototype,{scissor(t,i,e,r){this.m();const s=this.states.scissor;s[0]===t&&s[1]===i&&s[2]===e&&s[3]===r||(s[0]=t,s[1]=i,s[2]=e,s[3]=r,this.i.scissor(t,i,e,r));},viewport(t,i,e,r){this.m();const s=this.states.viewport;s[0]===t&&s[1]===i&&s[2]===e&&s[3]===r||(s[0]=t,s[1]=i,s[2]=e,s[3]=r,this.i.viewport(t,i,e,r));},blendColor(t,i,e,r){this.m();const s=this.states.blendColor;s[0]===t&&s[1]===i&&s[2]===e&&s[3]===r||(s[0]=t,s[1]=i,s[2]=e,s[3]=r,this.i.blendColor(t,i,e,r));},blendEquation(t){this.m();const i=this.states.blendEquationSeparate;i[0]===t&&i[1]===t||(i[0]=t,i[1]=t,this.i.blendEquation(t));},blendEquationSeparate(t,i){this.m();const e=this.states.blendEquationSeparate;e[0]===t&&e[1]===i||(e[0]=t,e[1]=i,this.i.blendEquationSeparate(t,i));},blendFunc(t,i){this.m();const e=this.states.blendFuncSeparate;e[0]===t&&e[2]===t&&e[1]===i&&e[3]===i||(e[0]=t,e[1]=i,e[2]=t,e[3]=i,this.i.blendFunc(t,i));},blendFuncSeparate(t,i,e,r){this.m();const s=this.states.blendFuncSeparate;s[0]===t&&s[1]===i&&s[2]===e&&s[3]===r||(s[0]=t,s[1]=i,s[2]=e,s[3]=r,this.i.blendFuncSeparate(t,i,e,r));},clearColor(t,i,e,r){this.m();const s=this.states.clearColor;s[0]===t&&s[1]===i&&s[2]===e&&s[3]===r||(s[0]=t,s[1]=i,s[2]=e,s[3]=r,this.i.clearColor(t,i,e,r));},clearDepth(t){this.m();const i=this.states.clearDepth;i[0]!==t&&(i[0]=t,this.i.clearDepth(t));},clearStencil(t){this.m();const i=this.states.clearStencil;i[0]!==t&&(i[0]=t,this.i.clearStencil(t));},colorMask(t,i,e,r){this.m();const s=this.states.colorMask;s[0]===t&&s[1]===i&&s[2]===e&&s[3]===r||(s[0]=t,s[1]=i,s[2]=e,s[3]=r,this.i.colorMask(t,i,e,r));},cullFace(t){this.m();const i=this.states.cullFace;i[0]!==t&&(i[0]=t,this.i.cullFace(t));},depthFunc(t){this.m();const i=this.states.depthFunc;i[0]!==t&&(i[0]=t,this.i.depthFunc(t));},depthMask(t){this.m();const i=this.states.depthMask;i[0]!==t&&(i[0]=t,this.i.depthMask(t));},depthRange(t,i){this.m();const e=this.states.depthRange;e[0]===t&&e[1]===i||(e[0]=t,e[1]=i,this.i.depthRange(t,i));},disable(t){this.m();const i=this.states.capabilities;i[t]&&(i[t]=!1,this.i.disable(t));},enable(t){this.m();const i=this.states.capabilities;i[t]||(i[t]=!0,this.i.enable(t));},frontFace(t){this.m();const i=this.states.frontFace;i[0]!==t&&(i[0]=t,this.i.frontFace(t));},hint(t,i){this.m();const e=this.states.hint;e[t][0]!==i&&(e[t][0]=i,this.i.hint(t,i));},lineWidth(t){this.m();const i=this.states.lineWidth;i[0]!==t&&(i[0]=t,this.i.lineWidth(t));},pixelStorei(t,i){this.m();const e=this.states.pixelStorei;e[t]!==i&&(e[t]&&(e[t][0]=i),this.i.pixelStorei(t,i));},polygonOffset(t,i){this.m();const e=this.states.polygonOffset;e[0]===t&&e[1]===i||(e[0]=t,e[1]=i,this.i.polygonOffset(t,i));},sampleCoverage(t,i){this.m();const e=this.states.sampleCoverage;e[0]===t&&e[1]===i||(e[0]=t,e[1]=i,this.i.sampleCoverage(t,i));},stencilFunc(t,i,e){this.m();const r=this.states.stencilFuncSeparate,s=this.i;r[s.FRONT][0]===t&&r[s.FRONT][1]===i&&r[s.FRONT][2]===e&&r[s.BACK][0]===t&&r[s.BACK][1]===i&&r[s.BACK][2]===e||(r[s.FRONT][0]=r[s.BACK][0]=t,r[s.FRONT][1]=r[s.BACK][1]=i,r[s.FRONT][2]=r[s.BACK][2]=e,this.i.stencilFunc(t,i,e));},stencilFuncSeparate(t,i,e,r){if(this.m(),t===this.i.FRONT_AND_BACK)return void this.stencilFunc(i,e,r);const s=this.states.stencilFuncSeparate;s[t][0]===i&&s[t][1]===e&&s[t][2]===r||(s[t][0]=i,s[t][1]=e,s[t][2]=r,this.i.stencilFuncSeparate(t,i,e,r));},stencilMask(t){this.m();const i=this.i,e=this.states.stencilMaskSeparate;e[i.FRONT][0]===t&&e[i.BACK][0]===t||(e[i.FRONT][0]=t,e[i.BACK][0]=t,this.i.stencilMask(t));},stencilMaskSeparate(t,i){if(this.m(),t===this.i.FRONT_AND_BACK)return void this.stencilMask(i);const e=this.states.stencilMaskSeparate;e[t][0]!==i&&(e[t][0]=i,this.i.stencilMaskSeparate(t,i));},stencilOp(t,i,e){this.m();const r=this.states.stencilOpSeparate,s=this.i;r[s.FRONT][0]===t&&r[s.FRONT][1]===i&&r[s.FRONT][2]===e&&r[s.BACK][0]===t&&r[s.BACK][1]===i&&r[s.BACK][2]===e||(r[s.FRONT][0]=r[s.BACK][0]=t,r[s.FRONT][1]=r[s.BACK][1]=i,r[s.FRONT][2]=r[s.BACK][2]=e,this.i.stencilOp(t,i,e));},stencilOpSeparate(t,i,e,r){if(this.m(),t===this.i.FRONT_AND_BACK)return void this.stencilOp(i,e,r);const s=this.states.stencilOpSeparate;s[t][0]===i&&s[t][1]===e&&s[t][2]===r||(s[t][0]=i,s[t][1]=e,s[t][2]=r,this.i.stencilOpSeparate(t,i,e,r));},bindFramebuffer(t,i){this.m();const e=this.states.framebuffer;e[t]!==i&&(e[t]=i,this.i.bindFramebuffer(t,i));},bindRenderbuffer(t,i){this.m();const e=this.states.renderbuffer;e[t]!==i&&(e[t]=i,this.i.bindRenderbuffer(t,i));},bindTexture(t,i){this.m();const e=this.states.textures,r=-1!==e.active?e.active-33984:-1;e.units[r][t]=i,this.i.bindTexture(t,i);},activeTexture(t){this.m();const i=this.i,e=this.states.textures,r=e.active;e.active=t,this.activeUnit!==t&&(i.activeTexture(t),this.activeUnit=t),-1===r&&(e.units[t-33984][i.TEXTURE_2D]=e.units[-1][i.TEXTURE_2D],e.units[t-33984][i.TEXTURE_CUBE_MAP]=e.units[-1][i.TEXTURE_CUBE_MAP],e.units[-1][i.TEXTURE_2D]=null,e.units[-1][i.TEXTURE_CUBE_MAP]=null);},useProgram(t){this.m();const i=this.states;i.program!==t&&(i.program=t,this.i.useProgram(t));},bindBuffer(t,i){this.m();const e=this.i,r=this.states;t===e.ELEMENT_ARRAY_BUFFER?r.elementArrayBuffer=i:r.arrayBuffer=i,e.bindBuffer(t,i);},bindVertexArray(t){this.m();const i=this.i,e=this.states;e.vao!==t&&(e.vao=t,this.t?i.bindVertexArray(t):this.vaoOES.bindVertexArrayOES(t)),this.states.activeAttribType=1;},vertexAttribPointer(t,i,e,r,s,h){this.m(),this.states.activeAttribType=0,this.states.attributes[t]||(this.states.attributes[t]={enable:!0});const n=this.states.attributes[t];return n.buffer=this.states.arrayBuffer,n.args?(n.args[0]=t,n.args[1]=i,n.args[2]=e,n.args[3]=r,n.args[4]=s,n.args[5]=h):n.args=[t,i,e,r,s,h],this.i.vertexAttribPointer(t,i,e,r,s,h)},vertexAttribDivisor(t,i){return this.m(),this.states.attributes[t].divisor=i,this.t?this.i.vertexAttribDivisor(t,i):this.angleOES.vertexAttribDivisorANGLE(t,i)}},{m(){const t=this.i;if(t.S&&t.S!==this){const i=t.S;this.p(i.states),t.S=this;}t.S=this;},p(i){if(!i)return;delete this.activeUnit;const e=this.states,r=this.i;let s=0;for(const h in e)if("capabilities"!==h&&"textures"!==h&&"attributes"!==h&&"arrayBuffer"!==h&&"elementArrayBuffer"!==h&&"vao"!==h)if("program"===h)e.program!==i.program&&(r.useProgram(e.program),e.program&&(s=r.getProgramParameter(e.program,r.ACTIVE_ATTRIBUTES)));else if("framebuffer"===h)for(const t in e[h])e[h][t]!==i[h][t]&&r.bindFramebuffer(+t,e[h][t]);else if("renderbuffer"===h)for(const t in e[h])e[h][t]!==i[h][t]&&r.bindRenderbuffer(+t,e[h][t]);else if(!fastDeepEqual(e[h],i[h]))if(Array.isArray(i[h]))r[h](...e[h]);else if(i[h])for(const s in e[h])fastDeepEqual(e[h][s],i[h][s])||r[h](+s,...e[h][s]);for(const t in e.capabilities)e.capabilities[t]!==i.capabilities[t]&&r[e.capabilities[t]?"enable":"disable"](+t);const h=e.textures,n=i.textures,u=h.units,a=n.units,o=h.active-r.TEXTURE0;for(let t=0;t<u.length;t++)t===o||u[t][r.TEXTURE_2D]===a[t][r.TEXTURE_2D]&&u[t][r.TEXTURE_CUBE_MAP]===a[t][r.TEXTURE_CUBE_MAP]||(r.activeTexture(r.TEXTURE0+t),r.bindTexture(r.TEXTURE_2D,u[t][r.TEXTURE_2D]),r.bindTexture(r.TEXTURE_CUBE_MAP,u[t][r.TEXTURE_CUBE_MAP]));if(h.active>-1){const t=u[o];t[r.TEXTURE_2D]===a[o][r.TEXTURE_2D]&&t[r.TEXTURE_CUBE_MAP]===a[o][r.TEXTURE_CUBE_MAP]||(r.activeTexture(h.active),r.bindTexture(r.TEXTURE_2D,t[r.TEXTURE_2D]),r.bindTexture(r.TEXTURE_CUBE_MAP,t[r.TEXTURE_CUBE_MAP]));}this.t?r.bindVertexArray(null):this.u&&this.u.bindVertexArrayOES(null),1===i.activeAttribType?(this.A(e,r,0),this.F(e,r)):this.A(e,r,s),r.bindBuffer(r.ARRAY_BUFFER,e.arrayBuffer),r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.elementArrayBuffer);},F(t,i){const e=t.vao;e&&(this.t?i.bindVertexArray(e||null):this.u&&this.u.bindVertexArrayOES(e||null));},A(t,i,e){const r=this.s,s=t.attributes;let h=0;for(let t=0;t<r;t++){const r=s[t];h<e&&r?(r.buffer&&(i.bindBuffer(i.ARRAY_BUFFER,r.buffer),i.vertexAttribPointer(...r.args),r.divisor&&(this.t?i.vertexAttribDivisor(t,r.divisor):this.angleOES.vertexAttribDivisorANGLE(t,r.divisor))),r.enable?(i.enableVertexAttribArray(t),h++):i.disableVertexAttribArray(t)):i.disableVertexAttribArray(t);}}}),e$1(o.prototype,{compressedTexImage2D(t,i,e,r,s,h,n){return this.m(),this.i.compressedTexImage2D(t,i,e,r,s,h,n)},copyTexImage2D(t,i,e,r,s,h,n,u){return this.m(),this.i.copyTexImage2D(t,i,e,r,s,h,n,u)},copyTexSubImage2D(t,i,e,r,s,h,n,u){return this.m(),this.i.copyTexSubImage2D(t,i,e,r,s,h,n,u)},createTexture(){return this.i.createTexture()},deleteTexture(t){const i=this.states.textures.units;for(let e=0;e<i.length;e++)for(const r in i[e])i[e][r]===t&&(i[e][r]=null);return this.i.deleteTexture(t)},generateMipmap(t){return this.m(),this.i.generateMipmap(t)},getTexParameter(t,i){return this.m(),this.i.getTexParameter(t,i)},isTexture(t){return this.i.isTexture(t)},texImage2D(...t){if(this.m(),this.t){const i=t[t.length-2],e=u.getInternalFormat(this.i,t[2],i);e!==t[2]&&(t[2]=e);const r=u.getTextureType(this.i,i);r!==i&&(t[t.length-2]=r);}return this.i.texImage2D(...t)},texSubImage2D(...t){if(this.m(),this.t){const i=t[t.length-2],e=u.getTextureType(this.i,i);e!==i&&(t[t.length-2]=e);}return this.i.texSubImage2D(...t)},texParameterf(t,i,e){return this.m(),this.i.texParameterf(t,i,e)},texParameteri(t,i,e){return this.m(),this.i.texParameteri(t,i,e)},texStorage2D(t,i,e,r,s){return this.m(),this.i.texStorage2D(t,i,e,r,s)},texImage3D(t,i,e,r,s,h,n,u,a,o){return this.m(),this.i.texImage3D(t,i,e,r,s,h,n,u,a,o)},texStorage3D(t,i,e,r,s,h){return this.m(),this.i.texStorage3D(t,i,e,r,s,h)},texSubImage3D(t,i,e,r,s,h,n,u,a,o,f){return this.m(),this.i.texSubImage3D(t,i,e,r,s,h,n,u,a,o,f)},copyTexSubImage3D(t,i,e,r,s,h,n,u,a){return this.m(),this.i.copyTexSubImage3D(t,i,e,r,s,h,n,u,a)},compressedTexSubImage3D(t,i,e,r,s,h,n,u,a,o,f){return this.m(),this.i.compressedTexSubImage3D(t,i,e,r,s,h,n,u,a,o,f)}}),e$1(o.prototype,{bindAttribLocation(t,i,e){return this.i.bindAttribLocation(t,i,e)},enableVertexAttribArray(t){return this.m(),this.states.activeAttribType=1,this.states.attributes[t]||(this.states.attributes[t]={}),this.states.attributes[t].enable=!0,this.i.enableVertexAttribArray(t)},disableVertexAttribArray(t){return this.m(),this.states.attributes[t]||(this.states.attributes[t]={}),this.states.attributes[t].enable=!1,this.i.disableVertexAttribArray(t)},getActiveAttrib(t,i){return this.i.getActiveAttrib(t,i)},getActiveUniform(t,i){return this.i.getActiveUniform(t,i)},getAttribLocation(t,i){return this.i.getAttribLocation(t,i)},getUniformLocation(t,i){return this.i.getUniformLocation(t,i)},getVertexAttrib(t,i){return this.m(),this.i.getVertexAttrib(t,i)},getVertexAttribOffset(t,i){return this.m(),this.i.getVertexAttribOffset(t,i)},uniformBlockBinding(t,i,e){return this.m(),this.i.uniformBlockBinding(t,i,e)},uniformMatrix2fv(t,i,e){return this.m(),this.i.uniformMatrix2fv(t,i,e)},uniformMatrix3fv(t,i,e){return this.m(),this.i.uniformMatrix3fv(t,i,e)},uniformMatrix4fv(t,i,e){return this.m(),this.i.uniformMatrix4fv(t,i,e)},uniform1f(t,i){return this.m(),this.i.uniform1f(t,i)},uniform1i(t,i){return this.m(),this.i.uniform1i(t,i)},uniform2f(t,i,e){return this.m(),this.i.uniform2f(t,i,e)},uniform2i(t,i,e){return this.m(),this.i.uniform2i(t,i,e)},uniform3f(t,i,e,r){return this.m(),this.i.uniform3f(t,i,e,r)},uniform3i(t,i,e,r){return this.m(),this.i.uniform3i(t,i,e,r)},uniform4f(t,i,e,r,s){return this.m(),this.i.uniform4f(t,i,e,r,s)},uniform4i(t,i,e,r,s){return this.m(),this.i.uniform4i(t,i,e,r,s)},uniform1ui(t,i){return this.m(),this.i.uniform1ui(t,i)},uniform2ui(t,i,e){return this.m(),this.i.uniform2ui(t,i,e)},uniform3ui(t,i,e,r){return this.m(),this.i.uniform3ui(t,i,e,r)},uniform4ui(t,i,e,r,s){return this.m(),this.i.uniform4ui(t,i,e,r,s)},uniform1fv(t,i,e,r){this.m(),void 0!==r?this.i.uniform1fv(t,i,e,r):void 0!==e?this.i.uniform1fv(t,i,e):this.i.uniform1fv(t,i);},uniform2fv(t,i,e,r){this.m(),void 0!==r?this.i.uniform2fv(t,i,e,r):void 0!==e?this.i.uniform2fv(t,i,e):this.i.uniform2fv(t,i);},uniform3fv(t,i,e,r){this.m(),void 0!==r?this.i.uniform3fv(t,i,e,r):void 0!==e?this.i.uniform3fv(t,i,e):this.i.uniform3fv(t,i);},uniform4fv(t,i,e,r){this.m(),void 0!==r?this.i.uniform4fv(t,i,e,r):void 0!==e?this.i.uniform4fv(t,i,e):this.i.uniform4fv(t,i);},uniform1iv(t,i,e,r){this.m(),void 0!==r?this.i.uniform1iv(t,i,e,r):void 0!==e?this.i.uniform1iv(t,i,e):this.i.uniform1iv(t,i);},uniform2iv(t,i,e,r){this.m(),void 0!==r?this.i.uniform2iv(t,i,e,r):void 0!==e?this.i.uniform2iv(t,i,e):this.i.uniform2iv(t,i);},uniform3iv(t,i,e,r){this.m(),void 0!==r?this.i.uniform3iv(t,i,e,r):void 0!==e?this.i.uniform3iv(t,i,e):this.i.uniform3iv(t,i);},uniform4iv(t,i,e,r){this.m(),void 0!==r?this.i.uniform4iv(t,i,e,r):void 0!==e?this.i.uniform4iv(t,i,e):this.i.uniform4iv(t,i);},uniform1uiv(t,i,e,r){this.m(),void 0!==r?this.i.uniform1uiv(t,i,e,r):void 0!==e?this.i.uniform1uiv(t,i,e):this.i.uniform1uiv(t,i);},uniform2uiv(t,i,e,r){this.m(),void 0!==r?this.i.uniform2uiv(t,i,e,r):void 0!==e?this.i.uniform2uiv(t,i,e):this.i.uniform2uiv(t,i);},uniform3uiv(t,i,e,r){this.m(),void 0!==r?this.i.uniform3uiv(t,i,e,r):void 0!==e?this.i.uniform3uiv(t,i,e):this.i.uniform3uiv(t,i);},uniform4uiv(t,i,e,r){this.m(),void 0!==r?this.i.uniform4uiv(t,i,e,r):void 0!==e?this.i.uniform4uiv(t,i,e):this.i.uniform4uiv(t,i);},vertexAttrib1f(t,i){return this.m(),this.i.vertexAttrib1f(t,i)},vertexAttrib2f(t,i,e){return this.m(),this.i.vertexAttrib2f(t,i,e)},vertexAttrib3f(t,i,e,r){return this.m(),this.i.vertexAttrib3f(t,i,e,r)},vertexAttrib4f(t,i,e,r,s){return this.m(),this.i.vertexAttrib4f(t,i,e,r,s)},vertexAttrib1fv(t,i){return this.m(),this.i.vertexAttrib1fv(t,i)},vertexAttrib2fv(t,i){return this.m(),this.i.vertexAttrib2fv(t,i)},vertexAttrib3fv(t,i){return this.m(),this.i.vertexAttrib3fv(t,i)},vertexAttrib4fv(t,i){return this.m(),this.i.vertexAttrib4fv(t,i)},vertexAttribI4i(t,i,e,r,s){return this.m(),this.i.vertexAttribI4i(t,i,e,r,s)},vertexAttribI4ui(t,i,e,r,s){return this.m(),this.i.vertexAttribI4ui(t,i,e,r,s)},vertexAttribI4iv(t,i){return this.m(),this.i.vertexAttribI4iv(t,i)},vertexAttribI4uiv(t,i){return this.m(),this.i.vertexAttribI4uiv(t,i)}}),e$1(o.prototype,{createVertexArray(){return this.t?this.i.createVertexArray():this.vaoOES.createVertexArrayOES()},deleteVertexArray(t){const i=this.states;return i.vao===t&&(i.vao=null),this.t?this.i.deleteVertexArray(t):this.vaoOES.deleteVertexArrayOES(t)},isVertexArray(t){return this.t?this.i.isVertexArray(t):this.vaoOES.isVertexArrayOES(t)}}),e$1(o.prototype,{drawArraysInstanced(t,i,e,r){return this.m(),this.g(),this.t?this.i.drawArraysInstanced(t,i,e,r):this.angleOES.drawArraysInstancedANGLE(t,i,e,r)},drawElementsInstanced(t,i,e,r,s){return this.m(),this.g(),this.t?this.i.drawElementsInstanced(t,i,e,r,s):this.angleOES.drawElementsInstancedANGLE(t,i,e,r,s)}});

	var w = {
	    exports: {}
	}, _ = {
	    "aliceblue": [ 240, 248, 255 ],
	    "antiquewhite": [ 250, 235, 215 ],
	    "aqua": [ 0, 255, 255 ],
	    "aquamarine": [ 127, 255, 212 ],
	    "azure": [ 240, 255, 255 ],
	    "beige": [ 245, 245, 220 ],
	    "bisque": [ 255, 228, 196 ],
	    "black": [ 0, 0, 0 ],
	    "blanchedalmond": [ 255, 235, 205 ],
	    "blue": [ 0, 0, 255 ],
	    "blueviolet": [ 138, 43, 226 ],
	    "brown": [ 165, 42, 42 ],
	    "burlywood": [ 222, 184, 135 ],
	    "cadetblue": [ 95, 158, 160 ],
	    "chartreuse": [ 127, 255, 0 ],
	    "chocolate": [ 210, 105, 30 ],
	    "coral": [ 255, 127, 80 ],
	    "cornflowerblue": [ 100, 149, 237 ],
	    "cornsilk": [ 255, 248, 220 ],
	    "crimson": [ 220, 20, 60 ],
	    "cyan": [ 0, 255, 255 ],
	    "darkblue": [ 0, 0, 139 ],
	    "darkcyan": [ 0, 139, 139 ],
	    "darkgoldenrod": [ 184, 134, 11 ],
	    "darkgray": [ 169, 169, 169 ],
	    "darkgreen": [ 0, 100, 0 ],
	    "darkgrey": [ 169, 169, 169 ],
	    "darkkhaki": [ 189, 183, 107 ],
	    "darkmagenta": [ 139, 0, 139 ],
	    "darkolivegreen": [ 85, 107, 47 ],
	    "darkorange": [ 255, 140, 0 ],
	    "darkorchid": [ 153, 50, 204 ],
	    "darkred": [ 139, 0, 0 ],
	    "darksalmon": [ 233, 150, 122 ],
	    "darkseagreen": [ 143, 188, 143 ],
	    "darkslateblue": [ 72, 61, 139 ],
	    "darkslategray": [ 47, 79, 79 ],
	    "darkslategrey": [ 47, 79, 79 ],
	    "darkturquoise": [ 0, 206, 209 ],
	    "darkviolet": [ 148, 0, 211 ],
	    "deeppink": [ 255, 20, 147 ],
	    "deepskyblue": [ 0, 191, 255 ],
	    "dimgray": [ 105, 105, 105 ],
	    "dimgrey": [ 105, 105, 105 ],
	    "dodgerblue": [ 30, 144, 255 ],
	    "firebrick": [ 178, 34, 34 ],
	    "floralwhite": [ 255, 250, 240 ],
	    "forestgreen": [ 34, 139, 34 ],
	    "fuchsia": [ 255, 0, 255 ],
	    "gainsboro": [ 220, 220, 220 ],
	    "ghostwhite": [ 248, 248, 255 ],
	    "gold": [ 255, 215, 0 ],
	    "goldenrod": [ 218, 165, 32 ],
	    "gray": [ 128, 128, 128 ],
	    "green": [ 0, 128, 0 ],
	    "greenyellow": [ 173, 255, 47 ],
	    "grey": [ 128, 128, 128 ],
	    "honeydew": [ 240, 255, 240 ],
	    "hotpink": [ 255, 105, 180 ],
	    "indianred": [ 205, 92, 92 ],
	    "indigo": [ 75, 0, 130 ],
	    "ivory": [ 255, 255, 240 ],
	    "khaki": [ 240, 230, 140 ],
	    "lavender": [ 230, 230, 250 ],
	    "lavenderblush": [ 255, 240, 245 ],
	    "lawngreen": [ 124, 252, 0 ],
	    "lemonchiffon": [ 255, 250, 205 ],
	    "lightblue": [ 173, 216, 230 ],
	    "lightcoral": [ 240, 128, 128 ],
	    "lightcyan": [ 224, 255, 255 ],
	    "lightgoldenrodyellow": [ 250, 250, 210 ],
	    "lightgray": [ 211, 211, 211 ],
	    "lightgreen": [ 144, 238, 144 ],
	    "lightgrey": [ 211, 211, 211 ],
	    "lightpink": [ 255, 182, 193 ],
	    "lightsalmon": [ 255, 160, 122 ],
	    "lightseagreen": [ 32, 178, 170 ],
	    "lightskyblue": [ 135, 206, 250 ],
	    "lightslategray": [ 119, 136, 153 ],
	    "lightslategrey": [ 119, 136, 153 ],
	    "lightsteelblue": [ 176, 196, 222 ],
	    "lightyellow": [ 255, 255, 224 ],
	    "lime": [ 0, 255, 0 ],
	    "limegreen": [ 50, 205, 50 ],
	    "linen": [ 250, 240, 230 ],
	    "magenta": [ 255, 0, 255 ],
	    "maroon": [ 128, 0, 0 ],
	    "mediumaquamarine": [ 102, 205, 170 ],
	    "mediumblue": [ 0, 0, 205 ],
	    "mediumorchid": [ 186, 85, 211 ],
	    "mediumpurple": [ 147, 112, 219 ],
	    "mediumseagreen": [ 60, 179, 113 ],
	    "mediumslateblue": [ 123, 104, 238 ],
	    "mediumspringgreen": [ 0, 250, 154 ],
	    "mediumturquoise": [ 72, 209, 204 ],
	    "mediumvioletred": [ 199, 21, 133 ],
	    "midnightblue": [ 25, 25, 112 ],
	    "mintcream": [ 245, 255, 250 ],
	    "mistyrose": [ 255, 228, 225 ],
	    "moccasin": [ 255, 228, 181 ],
	    "navajowhite": [ 255, 222, 173 ],
	    "navy": [ 0, 0, 128 ],
	    "oldlace": [ 253, 245, 230 ],
	    "olive": [ 128, 128, 0 ],
	    "olivedrab": [ 107, 142, 35 ],
	    "orange": [ 255, 165, 0 ],
	    "orangered": [ 255, 69, 0 ],
	    "orchid": [ 218, 112, 214 ],
	    "palegoldenrod": [ 238, 232, 170 ],
	    "palegreen": [ 152, 251, 152 ],
	    "paleturquoise": [ 175, 238, 238 ],
	    "palevioletred": [ 219, 112, 147 ],
	    "papayawhip": [ 255, 239, 213 ],
	    "peachpuff": [ 255, 218, 185 ],
	    "peru": [ 205, 133, 63 ],
	    "pink": [ 255, 192, 203 ],
	    "plum": [ 221, 160, 221 ],
	    "powderblue": [ 176, 224, 230 ],
	    "purple": [ 128, 0, 128 ],
	    "rebeccapurple": [ 102, 51, 153 ],
	    "red": [ 255, 0, 0 ],
	    "rosybrown": [ 188, 143, 143 ],
	    "royalblue": [ 65, 105, 225 ],
	    "saddlebrown": [ 139, 69, 19 ],
	    "salmon": [ 250, 128, 114 ],
	    "sandybrown": [ 244, 164, 96 ],
	    "seagreen": [ 46, 139, 87 ],
	    "seashell": [ 255, 245, 238 ],
	    "sienna": [ 160, 82, 45 ],
	    "silver": [ 192, 192, 192 ],
	    "skyblue": [ 135, 206, 235 ],
	    "slateblue": [ 106, 90, 205 ],
	    "slategray": [ 112, 128, 144 ],
	    "slategrey": [ 112, 128, 144 ],
	    "snow": [ 255, 250, 250 ],
	    "springgreen": [ 0, 255, 127 ],
	    "steelblue": [ 70, 130, 180 ],
	    "tan": [ 210, 180, 140 ],
	    "teal": [ 0, 128, 128 ],
	    "thistle": [ 216, 191, 216 ],
	    "tomato": [ 255, 99, 71 ],
	    "turquoise": [ 64, 224, 208 ],
	    "violet": [ 238, 130, 238 ],
	    "wheat": [ 245, 222, 179 ],
	    "white": [ 255, 255, 255 ],
	    "whitesmoke": [ 245, 245, 245 ],
	    "yellow": [ 255, 255, 0 ],
	    "yellowgreen": [ 154, 205, 50 ]
	}, M = {
	    exports: {}
	}, x = function(t) {
	    return !(!t || "string" == typeof t) && (t instanceof Array || Array.isArray(t) || t.length >= 0 && (t.splice instanceof Function || Object.getOwnPropertyDescriptor(t, t.length - 1) && "String" !== t.constructor.name));
	}, y = Array.prototype.concat, b = Array.prototype.slice, S = M.exports = function(t) {
	    for (var i = [], e = 0, s = t.length; e < s; e++) {
	        var n = t[e];
	        x(n) ? i = y.call(i, b.call(n)) : i.push(n);
	    }
	    return i;
	};

	S.wrap = function(t) {
	    return function() {
	        return t(S(arguments));
	    };
	};

	var C = _, T = M.exports, k = Object.hasOwnProperty, A = Object.create(null);

	for (var O in C) k.call(C, O) && (A[C[O]] = O);

	var I = w.exports = {
	    to: {},
	    get: {}
	};

	function E(t, i, e) {
	    return Math.min(Math.max(i, t), e);
	}

	function L(t) {
	    var i = Math.round(t).toString(16).toUpperCase();
	    return i.length < 2 ? "0" + i : i;
	}

	I.get = function(t) {
	    var i, e;
	    switch (t.substring(0, 3).toLowerCase()) {
	      case "hsl":
	        i = I.get.hsl(t), e = "hsl";
	        break;

	      case "hwb":
	        i = I.get.hwb(t), e = "hwb";
	        break;

	      default:
	        i = I.get.rgb(t), e = "rgb";
	    }
	    return i ? {
	        model: e,
	        value: i
	    } : null;
	}, I.get.rgb = function(t) {
	    if (!t) return null;
	    var i, e, s, n = [ 0, 0, 0, 1 ];
	    if (i = t.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)) {
	        for (s = i[2], i = i[1], e = 0; e < 3; e++) {
	            var r = 2 * e;
	            n[e] = parseInt(i.slice(r, r + 2), 16);
	        }
	        s && (n[3] = parseInt(s, 16) / 255);
	    } else if (i = t.match(/^#([a-f0-9]{3,4})$/i)) {
	        for (s = (i = i[1])[3], e = 0; e < 3; e++) n[e] = parseInt(i[e] + i[e], 16);
	        s && (n[3] = parseInt(s + s, 16) / 255);
	    } else if (i = t.match(/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)) {
	        for (e = 0; e < 3; e++) n[e] = parseInt(i[e + 1], 0);
	        i[4] && (i[5] ? n[3] = .01 * parseFloat(i[4]) : n[3] = parseFloat(i[4]));
	    } else {
	        if (!(i = t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/))) return (i = t.match(/^(\w+)$/)) ? "transparent" === i[1] ? [ 0, 0, 0, 0 ] : k.call(C, i[1]) ? ((n = C[i[1]])[3] = 1, 
	        n) : null : null;
	        for (e = 0; e < 3; e++) n[e] = Math.round(2.55 * parseFloat(i[e + 1]));
	        i[4] && (i[5] ? n[3] = .01 * parseFloat(i[4]) : n[3] = parseFloat(i[4]));
	    }
	    for (e = 0; e < 3; e++) n[e] = E(n[e], 0, 255);
	    return n[3] = E(n[3], 0, 1), n;
	}, I.get.hsl = function(t) {
	    if (!t) return null;
	    var i = t.match(/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);
	    if (i) {
	        var e = parseFloat(i[4]);
	        return [ (parseFloat(i[1]) % 360 + 360) % 360, E(parseFloat(i[2]), 0, 100), E(parseFloat(i[3]), 0, 100), E(isNaN(e) ? 1 : e, 0, 1) ];
	    }
	    return null;
	}, I.get.hwb = function(t) {
	    if (!t) return null;
	    var i = t.match(/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);
	    if (i) {
	        var e = parseFloat(i[4]);
	        return [ (parseFloat(i[1]) % 360 + 360) % 360, E(parseFloat(i[2]), 0, 100), E(parseFloat(i[3]), 0, 100), E(isNaN(e) ? 1 : e, 0, 1) ];
	    }
	    return null;
	}, I.to.hex = function() {
	    var t = T(arguments);
	    return "#" + L(t[0]) + L(t[1]) + L(t[2]) + (t[3] < 1 ? L(Math.round(255 * t[3])) : "");
	}, I.to.rgb = function() {
	    var t = T(arguments);
	    return t.length < 4 || 1 === t[3] ? "rgb(" + Math.round(t[0]) + ", " + Math.round(t[1]) + ", " + Math.round(t[2]) + ")" : "rgba(" + Math.round(t[0]) + ", " + Math.round(t[1]) + ", " + Math.round(t[2]) + ", " + t[3] + ")";
	}, I.to.rgb.percent = function() {
	    var t = T(arguments), i = Math.round(t[0] / 255 * 100), e = Math.round(t[1] / 255 * 100), s = Math.round(t[2] / 255 * 100);
	    return t.length < 4 || 1 === t[3] ? "rgb(" + i + "%, " + e + "%, " + s + "%)" : "rgba(" + i + "%, " + e + "%, " + s + "%, " + t[3] + ")";
	}, I.to.hsl = function() {
	    var t = T(arguments);
	    return t.length < 4 || 1 === t[3] ? "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)" : "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + t[3] + ")";
	}, I.to.hwb = function() {
	    var t = T(arguments), i = "";
	    return t.length >= 4 && 1 !== t[3] && (i = ", " + t[3]), "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + i + ")";
	}, I.to.keyword = function(t) {
	    return A[t.slice(0, 3)];
	};

	var F = {
	    exports: {}
	}, R = _, P = {};

	for (var H in R) R.hasOwnProperty(H) && (P[R[H]] = H);

	var D = F.exports = {
	    rgb: {
	        channels: 3,
	        labels: "rgb"
	    },
	    hsl: {
	        channels: 3,
	        labels: "hsl"
	    },
	    hsv: {
	        channels: 3,
	        labels: "hsv"
	    },
	    hwb: {
	        channels: 3,
	        labels: "hwb"
	    },
	    cmyk: {
	        channels: 4,
	        labels: "cmyk"
	    },
	    xyz: {
	        channels: 3,
	        labels: "xyz"
	    },
	    lab: {
	        channels: 3,
	        labels: "lab"
	    },
	    lch: {
	        channels: 3,
	        labels: "lch"
	    },
	    hex: {
	        channels: 1,
	        labels: [ "hex" ]
	    },
	    keyword: {
	        channels: 1,
	        labels: [ "keyword" ]
	    },
	    ansi16: {
	        channels: 1,
	        labels: [ "ansi16" ]
	    },
	    ansi256: {
	        channels: 1,
	        labels: [ "ansi256" ]
	    },
	    hcg: {
	        channels: 3,
	        labels: [ "h", "c", "g" ]
	    },
	    apple: {
	        channels: 3,
	        labels: [ "r16", "g16", "b16" ]
	    },
	    gray: {
	        channels: 1,
	        labels: [ "gray" ]
	    }
	};

	for (var G in D) if (D.hasOwnProperty(G)) {
	    if (!("channels" in D[G])) throw new Error("missing channels property: " + G);
	    if (!("labels" in D[G])) throw new Error("missing channel labels property: " + G);
	    if (D[G].labels.length !== D[G].channels) throw new Error("channel and label counts mismatch: " + G);
	    var N = D[G].channels, j = D[G].labels;
	    delete D[G].channels, delete D[G].labels, Object.defineProperty(D[G], "channels", {
	        value: N
	    }), Object.defineProperty(D[G], "labels", {
	        value: j
	    });
	}

	D.rgb.hsl = function(t) {
	    var i, e, s = t[0] / 255, n = t[1] / 255, r = t[2] / 255, h = Math.min(s, n, r), o = Math.max(s, n, r), a = o - h;
	    return o === h ? i = 0 : s === o ? i = (n - r) / a : n === o ? i = 2 + (r - s) / a : r === o && (i = 4 + (s - n) / a), 
	    (i = Math.min(60 * i, 360)) < 0 && (i += 360), e = (h + o) / 2, [ i, 100 * (o === h ? 0 : e <= .5 ? a / (o + h) : a / (2 - o - h)), 100 * e ];
	}, D.rgb.hsv = function(t) {
	    var i, e, s, n, r, h = t[0] / 255, o = t[1] / 255, a = t[2] / 255, l = Math.max(h, o, a), c = l - Math.min(h, o, a), u = function(t) {
	        return (l - t) / 6 / c + .5;
	    };
	    return 0 === c ? n = r = 0 : (r = c / l, i = u(h), e = u(o), s = u(a), h === l ? n = s - e : o === l ? n = 1 / 3 + i - s : a === l && (n = 2 / 3 + e - i), 
	    n < 0 ? n += 1 : n > 1 && (n -= 1)), [ 360 * n, 100 * r, 100 * l ];
	}, D.rgb.hwb = function(t) {
	    var i = t[0], e = t[1], s = t[2];
	    return [ D.rgb.hsl(t)[0], 100 * (1 / 255 * Math.min(i, Math.min(e, s))), 100 * (s = 1 - 1 / 255 * Math.max(i, Math.max(e, s))) ];
	}, D.rgb.cmyk = function(t) {
	    var i, e = t[0] / 255, s = t[1] / 255, n = t[2] / 255;
	    return [ 100 * ((1 - e - (i = Math.min(1 - e, 1 - s, 1 - n))) / (1 - i) || 0), 100 * ((1 - s - i) / (1 - i) || 0), 100 * ((1 - n - i) / (1 - i) || 0), 100 * i ];
	}, D.rgb.keyword = function(t) {
	    var i = P[t];
	    if (i) return i;
	    var e, s, n, r = 1 / 0;
	    for (var h in R) if (R.hasOwnProperty(h)) {
	        var o = R[h], a = (s = t, n = o, Math.pow(s[0] - n[0], 2) + Math.pow(s[1] - n[1], 2) + Math.pow(s[2] - n[2], 2));
	        a < r && (r = a, e = h);
	    }
	    return e;
	}, D.keyword.rgb = function(t) {
	    return R[t];
	}, D.rgb.xyz = function(t) {
	    var i = t[0] / 255, e = t[1] / 255, s = t[2] / 255;
	    return [ 100 * (.4124 * (i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92) + .3576 * (e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92) + .1805 * (s = s > .04045 ? Math.pow((s + .055) / 1.055, 2.4) : s / 12.92)), 100 * (.2126 * i + .7152 * e + .0722 * s), 100 * (.0193 * i + .1192 * e + .9505 * s) ];
	}, D.rgb.lab = function(t) {
	    var i = D.rgb.xyz(t), e = i[0], s = i[1], n = i[2];
	    return s /= 100, n /= 108.883, e = (e /= 95.047) > .008856 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116, 
	    [ 116 * (s = s > .008856 ? Math.pow(s, 1 / 3) : 7.787 * s + 16 / 116) - 16, 500 * (e - s), 200 * (s - (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116)) ];
	}, D.hsl.rgb = function(t) {
	    var i, e, s, n, r, h = t[0] / 360, o = t[1] / 100, a = t[2] / 100;
	    if (0 === o) return [ r = 255 * a, r, r ];
	    i = 2 * a - (e = a < .5 ? a * (1 + o) : a + o - a * o), n = [ 0, 0, 0 ];
	    for (var l = 0; l < 3; l++) (s = h + 1 / 3 * -(l - 1)) < 0 && s++, s > 1 && s--, 
	    r = 6 * s < 1 ? i + 6 * (e - i) * s : 2 * s < 1 ? e : 3 * s < 2 ? i + (e - i) * (2 / 3 - s) * 6 : i, 
	    n[l] = 255 * r;
	    return n;
	}, D.hsl.hsv = function(t) {
	    var i = t[0], e = t[1] / 100, s = t[2] / 100, n = e, r = Math.max(s, .01);
	    return e *= (s *= 2) <= 1 ? s : 2 - s, n *= r <= 1 ? r : 2 - r, [ i, 100 * (0 === s ? 2 * n / (r + n) : 2 * e / (s + e)), 100 * ((s + e) / 2) ];
	}, D.hsv.rgb = function(t) {
	    var i = t[0] / 60, e = t[1] / 100, s = t[2] / 100, n = Math.floor(i) % 6, r = i - Math.floor(i), h = 255 * s * (1 - e), o = 255 * s * (1 - e * r), a = 255 * s * (1 - e * (1 - r));
	    switch (s *= 255, n) {
	      case 0:
	        return [ s, a, h ];

	      case 1:
	        return [ o, s, h ];

	      case 2:
	        return [ h, s, a ];

	      case 3:
	        return [ h, o, s ];

	      case 4:
	        return [ a, h, s ];

	      case 5:
	        return [ s, h, o ];
	    }
	}, D.hsv.hsl = function(t) {
	    var i, e, s, n = t[0], r = t[1] / 100, h = t[2] / 100, o = Math.max(h, .01);
	    return s = (2 - r) * h, e = r * o, [ n, 100 * (e = (e /= (i = (2 - r) * o) <= 1 ? i : 2 - i) || 0), 100 * (s /= 2) ];
	}, D.hwb.rgb = function(t) {
	    var i, e, s, n, r, h, o, a = t[0] / 360, l = t[1] / 100, c = t[2] / 100, u = l + c;
	    switch (u > 1 && (l /= u, c /= u), s = 6 * a - (i = Math.floor(6 * a)), 0 != (1 & i) && (s = 1 - s), 
	    n = l + s * ((e = 1 - c) - l), i) {
	      default:
	      case 6:
	      case 0:
	        r = e, h = n, o = l;
	        break;

	      case 1:
	        r = n, h = e, o = l;
	        break;

	      case 2:
	        r = l, h = e, o = n;
	        break;

	      case 3:
	        r = l, h = n, o = e;
	        break;

	      case 4:
	        r = n, h = l, o = e;
	        break;

	      case 5:
	        r = e, h = l, o = n;
	    }
	    return [ 255 * r, 255 * h, 255 * o ];
	}, D.cmyk.rgb = function(t) {
	    var i = t[0] / 100, e = t[1] / 100, s = t[2] / 100, n = t[3] / 100;
	    return [ 255 * (1 - Math.min(1, i * (1 - n) + n)), 255 * (1 - Math.min(1, e * (1 - n) + n)), 255 * (1 - Math.min(1, s * (1 - n) + n)) ];
	}, D.xyz.rgb = function(t) {
	    var i, e, s, n = t[0] / 100, r = t[1] / 100, h = t[2] / 100;
	    return e = -.9689 * n + 1.8758 * r + .0415 * h, s = .0557 * n + -.204 * r + 1.057 * h, 
	    i = (i = 3.2406 * n + -1.5372 * r + -.4986 * h) > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : 12.92 * i, 
	    e = e > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : 12.92 * e, s = s > .0031308 ? 1.055 * Math.pow(s, 1 / 2.4) - .055 : 12.92 * s, 
	    [ 255 * (i = Math.min(Math.max(0, i), 1)), 255 * (e = Math.min(Math.max(0, e), 1)), 255 * (s = Math.min(Math.max(0, s), 1)) ];
	}, D.xyz.lab = function(t) {
	    var i = t[0], e = t[1], s = t[2];
	    return e /= 100, s /= 108.883, i = (i /= 95.047) > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116, 
	    [ 116 * (e = e > .008856 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116) - 16, 500 * (i - e), 200 * (e - (s = s > .008856 ? Math.pow(s, 1 / 3) : 7.787 * s + 16 / 116)) ];
	}, D.lab.xyz = function(t) {
	    var i, e, s, n = t[0];
	    i = t[1] / 500 + (e = (n + 16) / 116), s = e - t[2] / 200;
	    var r = Math.pow(e, 3), h = Math.pow(i, 3), o = Math.pow(s, 3);
	    return e = r > .008856 ? r : (e - 16 / 116) / 7.787, i = h > .008856 ? h : (i - 16 / 116) / 7.787, 
	    s = o > .008856 ? o : (s - 16 / 116) / 7.787, [ i *= 95.047, e *= 100, s *= 108.883 ];
	}, D.lab.lch = function(t) {
	    var i, e = t[0], s = t[1], n = t[2];
	    return (i = 360 * Math.atan2(n, s) / 2 / Math.PI) < 0 && (i += 360), [ e, Math.sqrt(s * s + n * n), i ];
	}, D.lch.lab = function(t) {
	    var i, e = t[0], s = t[1];
	    return i = t[2] / 360 * 2 * Math.PI, [ e, s * Math.cos(i), s * Math.sin(i) ];
	}, D.rgb.ansi16 = function(t) {
	    var i = t[0], e = t[1], s = t[2], n = 1 in arguments ? arguments[1] : D.rgb.hsv(t)[2];
	    if (0 === (n = Math.round(n / 50))) return 30;
	    var r = 30 + (Math.round(s / 255) << 2 | Math.round(e / 255) << 1 | Math.round(i / 255));
	    return 2 === n && (r += 60), r;
	}, D.hsv.ansi16 = function(t) {
	    return D.rgb.ansi16(D.hsv.rgb(t), t[2]);
	}, D.rgb.ansi256 = function(t) {
	    var i = t[0], e = t[1], s = t[2];
	    return i === e && e === s ? i < 8 ? 16 : i > 248 ? 231 : Math.round((i - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(i / 255 * 5) + 6 * Math.round(e / 255 * 5) + Math.round(s / 255 * 5);
	}, D.ansi16.rgb = function(t) {
	    var i = t % 10;
	    if (0 === i || 7 === i) return t > 50 && (i += 3.5), [ i = i / 10.5 * 255, i, i ];
	    var e = .5 * (1 + ~~(t > 50));
	    return [ (1 & i) * e * 255, (i >> 1 & 1) * e * 255, (i >> 2 & 1) * e * 255 ];
	}, D.ansi256.rgb = function(t) {
	    if (t >= 232) {
	        var i = 10 * (t - 232) + 8;
	        return [ i, i, i ];
	    }
	    var e;
	    return t -= 16, [ Math.floor(t / 36) / 5 * 255, Math.floor((e = t % 36) / 6) / 5 * 255, e % 6 / 5 * 255 ];
	}, D.rgb.hex = function(t) {
	    var i = (((255 & Math.round(t[0])) << 16) + ((255 & Math.round(t[1])) << 8) + (255 & Math.round(t[2]))).toString(16).toUpperCase();
	    return "000000".substring(i.length) + i;
	}, D.hex.rgb = function(t) {
	    var i = t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
	    if (!i) return [ 0, 0, 0 ];
	    var e = i[0];
	    3 === i[0].length && (e = e.split("").map((function(t) {
	        return t + t;
	    })).join(""));
	    var s = parseInt(e, 16);
	    return [ s >> 16 & 255, s >> 8 & 255, 255 & s ];
	}, D.rgb.hcg = function(t) {
	    var i, e = t[0] / 255, s = t[1] / 255, n = t[2] / 255, r = Math.max(Math.max(e, s), n), h = Math.min(Math.min(e, s), n), o = r - h;
	    return i = o <= 0 ? 0 : r === e ? (s - n) / o % 6 : r === s ? 2 + (n - e) / o : 4 + (e - s) / o + 4, 
	    i /= 6, [ 360 * (i %= 1), 100 * o, 100 * (o < 1 ? h / (1 - o) : 0) ];
	}, D.hsl.hcg = function(t) {
	    var i = t[1] / 100, e = t[2] / 100, s = 1, n = 0;
	    return (s = e < .5 ? 2 * i * e : 2 * i * (1 - e)) < 1 && (n = (e - .5 * s) / (1 - s)), 
	    [ t[0], 100 * s, 100 * n ];
	}, D.hsv.hcg = function(t) {
	    var i = t[1] / 100, e = t[2] / 100, s = i * e, n = 0;
	    return s < 1 && (n = (e - s) / (1 - s)), [ t[0], 100 * s, 100 * n ];
	}, D.hcg.rgb = function(t) {
	    var i = t[0] / 360, e = t[1] / 100, s = t[2] / 100;
	    if (0 === e) return [ 255 * s, 255 * s, 255 * s ];
	    var n, r = [ 0, 0, 0 ], h = i % 1 * 6, o = h % 1, a = 1 - o;
	    switch (Math.floor(h)) {
	      case 0:
	        r[0] = 1, r[1] = o, r[2] = 0;
	        break;

	      case 1:
	        r[0] = a, r[1] = 1, r[2] = 0;
	        break;

	      case 2:
	        r[0] = 0, r[1] = 1, r[2] = o;
	        break;

	      case 3:
	        r[0] = 0, r[1] = a, r[2] = 1;
	        break;

	      case 4:
	        r[0] = o, r[1] = 0, r[2] = 1;
	        break;

	      default:
	        r[0] = 1, r[1] = 0, r[2] = a;
	    }
	    return n = (1 - e) * s, [ 255 * (e * r[0] + n), 255 * (e * r[1] + n), 255 * (e * r[2] + n) ];
	}, D.hcg.hsv = function(t) {
	    var i = t[1] / 100, e = i + t[2] / 100 * (1 - i), s = 0;
	    return e > 0 && (s = i / e), [ t[0], 100 * s, 100 * e ];
	}, D.hcg.hsl = function(t) {
	    var i = t[1] / 100, e = t[2] / 100 * (1 - i) + .5 * i, s = 0;
	    return e > 0 && e < .5 ? s = i / (2 * e) : e >= .5 && e < 1 && (s = i / (2 * (1 - e))), 
	    [ t[0], 100 * s, 100 * e ];
	}, D.hcg.hwb = function(t) {
	    var i = t[1] / 100, e = i + t[2] / 100 * (1 - i);
	    return [ t[0], 100 * (e - i), 100 * (1 - e) ];
	}, D.hwb.hcg = function(t) {
	    var i = t[1] / 100, e = 1 - t[2] / 100, s = e - i, n = 0;
	    return s < 1 && (n = (e - s) / (1 - s)), [ t[0], 100 * s, 100 * n ];
	}, D.apple.rgb = function(t) {
	    return [ t[0] / 65535 * 255, t[1] / 65535 * 255, t[2] / 65535 * 255 ];
	}, D.rgb.apple = function(t) {
	    return [ t[0] / 255 * 65535, t[1] / 255 * 65535, t[2] / 255 * 65535 ];
	}, D.gray.rgb = function(t) {
	    return [ t[0] / 100 * 255, t[0] / 100 * 255, t[0] / 100 * 255 ];
	}, D.gray.hsl = D.gray.hsv = function(t) {
	    return [ 0, 0, t[0] ];
	}, D.gray.hwb = function(t) {
	    return [ 0, 100, t[0] ];
	}, D.gray.cmyk = function(t) {
	    return [ 0, 0, 0, t[0] ];
	}, D.gray.lab = function(t) {
	    return [ t[0], 0, 0 ];
	}, D.gray.hex = function(t) {
	    var i = 255 & Math.round(t[0] / 100 * 255), e = ((i << 16) + (i << 8) + i).toString(16).toUpperCase();
	    return "000000".substring(e.length) + e;
	}, D.rgb.gray = function(t) {
	    return [ (t[0] + t[1] + t[2]) / 3 / 255 * 100 ];
	};

	var B = F.exports;

	function U(t) {
	    var i = function() {
	        for (var t = {}, i = Object.keys(B), e = i.length, s = 0; s < e; s++) t[i[s]] = {
	            distance: -1,
	            parent: null
	        };
	        return t;
	    }(), e = [ t ];
	    for (i[t].distance = 0; e.length; ) for (var s = e.pop(), n = Object.keys(B[s]), r = n.length, h = 0; h < r; h++) {
	        var o = n[h], a = i[o];
	        -1 === a.distance && (a.distance = i[s].distance + 1, a.parent = s, e.unshift(o));
	    }
	    return i;
	}

	function z(t, i) {
	    return function(e) {
	        return i(t(e));
	    };
	}

	function V(t, i) {
	    for (var e = [ i[t].parent, t ], s = B[i[t].parent][t], n = i[t].parent; i[n].parent; ) e.unshift(i[n].parent), 
	    s = z(B[i[n].parent][n], s), n = i[n].parent;
	    return s.conversion = e, s;
	}

	var W = F.exports, q = function(t) {
	    for (var i = U(t), e = {}, s = Object.keys(i), n = s.length, r = 0; r < n; r++) {
	        var h = s[r];
	        null !== i[h].parent && (e[h] = V(h, i));
	    }
	    return e;
	}, $ = {};

	Object.keys(W).forEach((function(t) {
	    $[t] = {}, Object.defineProperty($[t], "channels", {
	        value: W[t].channels
	    }), Object.defineProperty($[t], "labels", {
	        value: W[t].labels
	    });
	    var i = q(t);
	    Object.keys(i).forEach((function(e) {
	        var s = i[e];
	        $[t][e] = function(t) {
	            var i = function(i) {
	                if (null == i) return i;
	                arguments.length > 1 && (i = Array.prototype.slice.call(arguments));
	                var e = t(i);
	                if ("object" == typeof e) for (var s = e.length, n = 0; n < s; n++) e[n] = Math.round(e[n]);
	                return e;
	            };
	            return "conversion" in t && (i.conversion = t.conversion), i;
	        }(s), $[t][e].raw = function(t) {
	            var i = function(i) {
	                return null == i ? i : (arguments.length > 1 && (i = Array.prototype.slice.call(arguments)), 
	                t(i));
	            };
	            return "conversion" in t && (i.conversion = t.conversion), i;
	        }(s);
	    }));
	}));

	var Y = $, X = w.exports, J = Y, Z = [].slice, K = [ "keyword", "gray", "hex" ], Q = {};

	Object.keys(J).forEach((function(t) {
	    Q[Z.call(J[t].labels).sort().join("")] = t;
	}));

	var tt = {};

	function it(t, i) {
	    if (!(this instanceof it)) return new it(t, i);
	    if (i && i in K && (i = null), i && !(i in J)) throw new Error("Unknown model: " + i);
	    var e, s;
	    if (null == t) this.model = "rgb", this.color = [ 0, 0, 0 ], this.valpha = 1; else if (t instanceof it) this.model = t.model, 
	    this.color = t.color.slice(), this.valpha = t.valpha; else if ("string" == typeof t) {
	        var n = X.get(t);
	        if (null === n) throw new Error("Unable to parse color from string: " + t);
	        this.model = n.model, s = J[this.model].channels, this.color = n.value.slice(0, s), 
	        this.valpha = "number" == typeof n.value[s] ? n.value[s] : 1;
	    } else if (t.length) {
	        this.model = i || "rgb", s = J[this.model].channels;
	        var r = Z.call(t, 0, s);
	        this.color = rt(r, s), this.valpha = "number" == typeof t[s] ? t[s] : 1;
	    } else if ("number" == typeof t) t &= 16777215, this.model = "rgb", this.color = [ t >> 16 & 255, t >> 8 & 255, 255 & t ], 
	    this.valpha = 1; else {
	        this.valpha = 1;
	        var h = Object.keys(t);
	        "alpha" in t && (h.splice(h.indexOf("alpha"), 1), this.valpha = "number" == typeof t.alpha ? t.alpha : 0);
	        var o = h.sort().join("");
	        if (!(o in Q)) throw new Error("Unable to parse color from object: " + JSON.stringify(t));
	        this.model = Q[o];
	        var a = J[this.model].labels, l = [];
	        for (e = 0; e < a.length; e++) l.push(t[a[e]]);
	        this.color = rt(l);
	    }
	    if (tt[this.model]) for (s = J[this.model].channels, e = 0; e < s; e++) {
	        var c = tt[this.model][e];
	        c && (this.color[e] = c(this.color[e]));
	    }
	    this.valpha = Math.max(0, Math.min(1, this.valpha)), Object.freeze && Object.freeze(this);
	}

	function et(t, i, e) {
	    return (t = Array.isArray(t) ? t : [ t ]).forEach((function(t) {
	        (tt[t] || (tt[t] = []))[i] = e;
	    })), t = t[0], function(s) {
	        var n;
	        return arguments.length ? (e && (s = e(s)), (n = this[t]()).color[i] = s, n) : (n = this[t]().color[i], 
	        e && (n = e(n)), n);
	    };
	}

	function st(t) {
	    return function(i) {
	        return Math.max(0, Math.min(t, i));
	    };
	}

	function nt(t) {
	    return Array.isArray(t) ? t : [ t ];
	}

	function rt(t, i) {
	    for (var e = 0; e < i; e++) "number" != typeof t[e] && (t[e] = 0);
	    return t;
	}

	it.prototype = {
	    toString: function() {
	        return this.string();
	    },
	    toJSON: function() {
	        return this[this.model]();
	    },
	    string: function(t) {
	        var i = this.model in X.to ? this : this.rgb(), e = 1 === (i = i.round("number" == typeof t ? t : 1)).valpha ? i.color : i.color.concat(this.valpha);
	        return X.to[i.model](e);
	    },
	    percentString: function(t) {
	        var i = this.rgb().round("number" == typeof t ? t : 1), e = 1 === i.valpha ? i.color : i.color.concat(this.valpha);
	        return X.to.rgb.percent(e);
	    },
	    array: function() {
	        return 1 === this.valpha ? this.color.slice() : this.color.concat(this.valpha);
	    },
	    object: function() {
	        for (var t = {}, i = J[this.model].channels, e = J[this.model].labels, s = 0; s < i; s++) t[e[s]] = this.color[s];
	        return 1 !== this.valpha && (t.alpha = this.valpha), t;
	    },
	    unitArray: function() {
	        var t = this.rgb().color;
	        return t[0] /= 255, t[1] /= 255, t[2] /= 255, 1 !== this.valpha && t.push(this.valpha), 
	        t;
	    },
	    unitObject: function() {
	        var t = this.rgb().object();
	        return t.r /= 255, t.g /= 255, t.b /= 255, 1 !== this.valpha && (t.alpha = this.valpha), 
	        t;
	    },
	    round: function(t) {
	        return t = Math.max(t || 0, 0), new it(this.color.map(function(t) {
	            return function(i) {
	                return function(t, i) {
	                    return Number(t.toFixed(i));
	                }(i, t);
	            };
	        }(t)).concat(this.valpha), this.model);
	    },
	    alpha: function(t) {
	        return arguments.length ? new it(this.color.concat(Math.max(0, Math.min(1, t))), this.model) : this.valpha;
	    },
	    red: et("rgb", 0, st(255)),
	    green: et("rgb", 1, st(255)),
	    blue: et("rgb", 2, st(255)),
	    hue: et([ "hsl", "hsv", "hsl", "hwb", "hcg" ], 0, (function(t) {
	        return (t % 360 + 360) % 360;
	    })),
	    saturationl: et("hsl", 1, st(100)),
	    lightness: et("hsl", 2, st(100)),
	    saturationv: et("hsv", 1, st(100)),
	    value: et("hsv", 2, st(100)),
	    chroma: et("hcg", 1, st(100)),
	    gray: et("hcg", 2, st(100)),
	    white: et("hwb", 1, st(100)),
	    wblack: et("hwb", 2, st(100)),
	    cyan: et("cmyk", 0, st(100)),
	    magenta: et("cmyk", 1, st(100)),
	    yellow: et("cmyk", 2, st(100)),
	    black: et("cmyk", 3, st(100)),
	    x: et("xyz", 0, st(100)),
	    y: et("xyz", 1, st(100)),
	    z: et("xyz", 2, st(100)),
	    l: et("lab", 0, st(100)),
	    a: et("lab", 1),
	    b: et("lab", 2),
	    keyword: function(t) {
	        return arguments.length ? new it(t) : J[this.model].keyword(this.color);
	    },
	    hex: function(t) {
	        return arguments.length ? new it(t) : X.to.hex(this.rgb().round().color);
	    },
	    rgbNumber: function() {
	        var t = this.rgb().color;
	        return (255 & t[0]) << 16 | (255 & t[1]) << 8 | 255 & t[2];
	    },
	    luminosity: function() {
	        for (var t = this.rgb().color, i = [], e = 0; e < t.length; e++) {
	            var s = t[e] / 255;
	            i[e] = s <= .03928 ? s / 12.92 : Math.pow((s + .055) / 1.055, 2.4);
	        }
	        return .2126 * i[0] + .7152 * i[1] + .0722 * i[2];
	    },
	    contrast: function(t) {
	        var i = this.luminosity(), e = t.luminosity();
	        return i > e ? (i + .05) / (e + .05) : (e + .05) / (i + .05);
	    },
	    level: function(t) {
	        var i = this.contrast(t);
	        return i >= 7.1 ? "AAA" : i >= 4.5 ? "AA" : "";
	    },
	    isDark: function() {
	        var t = this.rgb().color;
	        return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128;
	    },
	    isLight: function() {
	        return !this.isDark();
	    },
	    negate: function() {
	        for (var t = this.rgb(), i = 0; i < 3; i++) t.color[i] = 255 - t.color[i];
	        return t;
	    },
	    lighten: function(t) {
	        var i = this.hsl();
	        return i.color[2] += i.color[2] * t, i;
	    },
	    darken: function(t) {
	        var i = this.hsl();
	        return i.color[2] -= i.color[2] * t, i;
	    },
	    saturate: function(t) {
	        var i = this.hsl();
	        return i.color[1] += i.color[1] * t, i;
	    },
	    desaturate: function(t) {
	        var i = this.hsl();
	        return i.color[1] -= i.color[1] * t, i;
	    },
	    whiten: function(t) {
	        var i = this.hwb();
	        return i.color[1] += i.color[1] * t, i;
	    },
	    blacken: function(t) {
	        var i = this.hwb();
	        return i.color[2] += i.color[2] * t, i;
	    },
	    grayscale: function() {
	        var t = this.rgb().color, i = .3 * t[0] + .59 * t[1] + .11 * t[2];
	        return it.rgb(i, i, i);
	    },
	    fade: function(t) {
	        return this.alpha(this.valpha - this.valpha * t);
	    },
	    opaquer: function(t) {
	        return this.alpha(this.valpha + this.valpha * t);
	    },
	    rotate: function(t) {
	        var i = this.hsl(), e = i.color[0];
	        return e = (e = (e + t) % 360) < 0 ? 360 + e : e, i.color[0] = e, i;
	    },
	    mix: function(t, i) {
	        if (!t || !t.rgb) throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof t);
	        var e = t.rgb(), s = this.rgb(), n = void 0 === i ? .5 : i, r = 2 * n - 1, h = e.alpha() - s.alpha(), o = ((r * h == -1 ? r : (r + h) / (1 + r * h)) + 1) / 2, a = 1 - o;
	        return it.rgb(o * e.red() + a * s.red(), o * e.green() + a * s.green(), o * e.blue() + a * s.blue(), e.alpha() * n + s.alpha() * (1 - n));
	    }
	}, Object.keys(J).forEach((function(t) {
	    if (-1 === K.indexOf(t)) {
	        var i = J[t].channels;
	        it.prototype[t] = function() {
	            if (this.model === t) return new it(this);
	            if (arguments.length) return new it(arguments, t);
	            var e = "number" == typeof arguments[i] ? i : this.valpha;
	            return new it(nt(J[this.model][t].raw(this.color)).concat(e), t);
	        }, it[t] = function(e) {
	            return "number" == typeof e && (e = rt(Z.call(arguments), i)), new it(e, t);
	        };
	    }
	}));

	var ht = it;

	const ot = "function" == typeof Object.assign;

	function at(t) {
	    if (ot) Object.assign.apply(Object, arguments); else for (let i = 1; i < arguments.length; i++) {
	        const e = arguments[i];
	        for (const i in e) t[i] = e[i];
	    }
	    return t;
	}

	function lt(t) {
	    return null == t;
	}

	function ct(t) {
	    return "number" == typeof t && !isNaN(t);
	}

	const ut = [];

	function ft(t, i) {
	    const e = i._get2DExtentAtRes(i.getGLRes()), s = e.getWidth(), n = e.getHeight(), r = t;
	    return identity$2(r), translate$1(r, r, i.cameraLookAt), scale$5(r, r, set$4(ut, s, n, 1)), 
	    r;
	}

	function dt(t, i) {
	    return Object.prototype.hasOwnProperty.call(t, i);
	}

	function pt(t) {
	    for (let i = 1; i < arguments.length; i++) {
	        const e = arguments[i];
	        if (e) for (let i = 0, s = e.length; i < s; i++) t.push(e[i]);
	    }
	    return t.length;
	}

	const gt = {};

	function mt(t, i) {
	    if (!Array.isArray(i)) {
	        const t = i;
	        i = gt[t] = gt[t] || ht(i).array();
	    }
	    for (let e = 0; e < i.length; e++) t[e] = i[e];
	    return 3 === i.length && (t[3] = 1), t;
	}

	function vt(t, i) {
	    if (Array.isArray(i)) for (let e = 0; e < i.length; e++) t[e] = 255 * i[e]; else {
	        const e = i;
	        i = gt[e] = gt[e] || ht(i).array();
	        for (let e = 0; e < i.length; e++) t[e] = i[e];
	    }
	    return 3 === t.length && t.push(255), t;
	}

	function wt(t$1, e, s = 0) {
	    if (!(t$1 && e instanceof t.Coordinate)) return null;
	    const n = t$1.coordinateToPointAtRes(e, t$1.getGLRes());
	    return [ n.x, n.y, s ];
	}

	const _t = [ 0, 0 ], Mt = [ 0, 0, 0 ];

	let xt;

	class yt {
	    static getUniformDeclares() {
	        const t = [], i = [];
	        return i.push({
	            name: "shadow_lightProjViewModelMatrix",
	            type: "function",
	            fn: function(i, e) {
	                const s = e.shadow_lightProjViewMatrix, n = e.modelMatrix;
	                return multiply$5(t, s, n);
	            }
	        }), i.push("shadow_shadowMap", "shadow_opacity", "esm_shadow_threshold", "shadow_color", "shadow_nearFar"), 
	        i;
	    }
	    constructor(t, i, e) {
	        this.renderer = new k$1(t), this.sceneConfig = i, this.t = .3, this.s = e, 
	        this.h();
	    }
	    resize() {
	        const t = this.canvas;
	        t.width = this.s.getRenderer().canvas.width, t.height = this.s.getRenderer().canvas.height;
	    }
	    h() {
	        const t = this.sceneConfig.shadow || {};
	        let i = 512;
	        const e = t.quality;
	        "high" === e ? i = 2048 : "medium" === e && (i = 1024);
	        const s = this.getDefines();
	        this.o = new ur(this.renderer, {
	            width: i,
	            height: i,
	            blurOffset: t.blurOffset,
	            defines: s
	        }), this.u = new hr(s), this.p();
	    }
	    getDefines() {
	        return {
	            "HAS_SHADOWING": 1,
	            "PACK_FLOAT": 1,
	            "USE_ESM": 1
	        };
	    }
	    render(t, i, e, s, n, r, h, o, c, u) {
	        this.m();
	        const f = this.s.getMap();
	        let d, p;
	        if (u || this.v(f, h, !!t)) {
	            this._ = this._ || [], this.M = this.M || [];
	            const s = multiply$5(this._, i, e), n = normalize$4(this.M, r);
	            xt || (xt = f.getContainerExtent());
	            let o = f.height;
	            f.getPitch() > 62 && (o = f._getVisualHeight(62));
	            const c = xt.set(0, f.height - o, f.width, f.height).convertTo(t => f._containerPointToPointAtRes(t, f.getGLRes())).toArray();
	            t && h.addMesh(this.S);
	            const u = c.map(t => [ t.x, t.y, 0, 1 ]), {lightProjViewMatrix: g, shadowMap: m, blurFBO: v} = this.o.render(h, {
	                cameraProjViewMatrix: s,
	                lightDir: n,
	                farPlane: u,
	                cameraLookAt: f.cameraLookAt
	            });
	            d = this.C = g, p = this.T = m, this.k = v, this.A = h.getMeshes().reduce((t, i) => (i.castShadow && i.geometry && (t[i.uuid] = {
	                v0: i.version,
	                v1: i.geometry.version
	            }), t), {}), this.O = {
	                count: h.getMeshes().length - +!!t,
	                displayShadow: !!t
	            }, this.I = !0;
	        } else d = this.C, p = this.T, this.I = !1;
	        this.L = i, this.F = e, lt(n) && (n = 1), t && h.getMeshes().length && this.displayShadow(s, n, o, c);
	        return {
	            "shadow_lightProjViewMatrix": d,
	            "shadow_shadowMap": p,
	            "shadow_opacity": n,
	            "shadow_color": s || Mt,
	            "esm_shadow_threshold": this.t
	        };
	    }
	    displayShadow(t, i, e, s) {
	        const n = this.C, r = this.S, h = this.R || [], o = this.s.getRenderer().canvas, l = this.P = this.P || [];
	        l[0] = o.width, l[1] = o.height, this.renderer.render(this.u, {
	            "halton": e || _t,
	            "globalTexSize": l,
	            "projMatrix": this.L,
	            "viewMatrix": this.F,
	            "shadow_lightProjViewModelMatrix": multiply$5(h, n, r.localTransform),
	            "shadow_shadowMap": this.T,
	            "esm_shadow_threshold": this.t,
	            "shadow_opacity": i,
	            "color": t || Mt
	        }, this.H, s);
	    }
	    dispose() {
	        this.o.dispose(), this.u.dispose(), this.S && (this.S.geometry.dispose(), this.S.dispose()), 
	        delete this.renderer;
	    }
	    isUpdated() {
	        return !1 !== this.I;
	    }
	    v(t, i, e) {
	        if (!this.A) return !0;
	        const s = this.O;
	        if (i.getMeshes().length !== s.count || e !== s.displayShadow) return !0;
	        const n = i.getMeshes();
	        for (let t = 0; t < n.length; t++) {
	            const i = this.A[n[t].uuid];
	            if (n[t].castShadow && (n[t].hasSkinAnimation() || !i || i.v0 !== n[t].version || i.v1 !== n[t].geometry.version)) return !0;
	        }
	        return !1;
	    }
	    p() {
	        const t = new tn;
	        t.generateBuffers(this.renderer.regl), this.S = new ke$1(t), this.H = new Ke$1([ this.S ]);
	    }
	    m() {
	        const t = this.s.getMap(), i = ft(this.S.localTransform, t);
	        this.S.setLocalTransform(i);
	    }
	}

	const {createIBLTextures: bt, disposeIBLTextures: St, getPBRUniforms: Ct} = ai$1.PBRUtils, Tt = [ 0, 0 ], kt = [ 1, 1 ];

	class At {
	    static getGroundTransform(t, i) {
	        return ft(t, i);
	    }
	    constructor(t, i) {
	        this.D = t, this.renderer = new k$1(t), this.s = i, this.G = new Ve$1, 
	        this.N = this.j.bind(this), this.h();
	    }
	    needToRedraw() {
	        const t = this.B();
	        return t && (t[0] || t[1]);
	    }
	    getMap() {
	        return this.s && this.s.getMap();
	    }
	    getSymbol() {
	        const t = this.s.getGroundConfig();
	        return t && t.symbol;
	    }
	    isEnable() {
	        const t = this.s.getGroundConfig();
	        return t && t.enable;
	    }
	    paint(t) {
	        if (!this.isEnable()) return !1;
	        const i = this.U();
	        if (this.V(t) && i === this.W) return !1;
	        const e = this.q(t);
	        e && this.S.setDefines(e), this.S.material !== this.material && this.S.setMaterial(this.material);
	        const s = this.s.getGroundConfig();
	        (s && s.symbol).ssr ? this.S.ssr = 1 : this.S.ssr = 0, this.m();
	        const n = this.$(t);
	        n.offsetFactor = t.offsetFactor, n.offsetUnits = t.offsetUnits;
	        const r = t && t.renderTarget && t.renderTarget.fbo;
	        return i === this.W ? (this.renderer.render(i, n, this.H, r), this.s.getRenderer().setCanvasUpdated(), 
	        !0) : (i.filter = t.sceneFilter, this.renderer.render(i, n, this.H, r), this.s.getRenderer().setCanvasUpdated(), 
	        !0);
	    }
	    V(t) {
	        return !(!this.s.getRenderer().isEnableSSR || !this.s.getRenderer().isEnableSSR()) && !(!t || !t.ssr);
	    }
	    update() {
	        const t = this.s.getGroundConfig();
	        if (!t) return;
	        const i = t && t.symbol;
	        if (i) {
	            this.Y = this.X(i.polygonFill || [ 1, 1, 1, 1 ]), this.J = void 0 === i.polygonOpacity ? 1 : i.polygonOpacity;
	            const t = i.polygonPatternFile;
	            if (t) {
	                if (!this.Z || this.Z._pattern_src !== t) {
	                    const i = new Image;
	                    i.onload = () => {
	                        this.Z && this.Z.destroy(), this.Z = this.K(i), this.Z._pattern_src = t;
	                    }, i.src = t;
	                }
	            } else this.Z && (this.Z.destroy(), delete this.Z);
	        } else this.Y = [ 1, 1, 1, 1 ], this.J = 1, this.Z && (this.Z.destroy(), delete this.Z);
	        this.tt();
	    }
	    setToRedraw() {
	        const t = this.s.getRenderer();
	        t && t.setToRedraw();
	    }
	    dispose() {
	        this.material && (this.material.dispose(), delete this.material), this.S && (this.S.geometry.dispose(), 
	        this.S.material && this.S.material.dispose(), this.S.dispose(), delete this.S), 
	        this.Z && (this.Z.destroy(), delete this.Z), this.W && (this.W.dispose(), delete this.W), 
	        this.it && (this.it.dispose(), delete this.it), this.et(), this.st && (this.st.destroy(), 
	        delete this.st);
	        const t = this.getMap();
	        t && t.off("updatelights", this.nt, this);
	    }
	    U() {
	        const t = this.s.getGroundConfig();
	        if (!t || !t.renderPlugin) return this.W;
	        const i = t.renderPlugin.type;
	        if ("lit" === i) return this.it;
	        if ("fill" === i) return this.W;
	        throw new Error("unsupported render plugin of " + i + " for layer ground");
	    }
	    $(t) {
	        const i = this.rt(t);
	        i.polygonFill = this.Y, i.polygonOpacity = this.J;
	        return this.U() === this.W && this.Z && (i.polygonPatternFile = this.Z), i;
	    }
	    rt(t) {
	        let i;
	        if ("lit" === this.s.getGroundConfig().renderPlugin.type) this.ht || (this.ht = bt(this.D, this.getMap())), 
	        this.st || (this.st = ai$1.PBRHelper.generateDFGLUT(this.D)), i = Ct(this.getMap(), this.ht, this.st, t && t.ssr, t && t.jitter); else {
	            i = {
	                projViewMatrix: this.getMap().projViewMatrix
	            };
	        }
	        return this.ot(i, t), i;
	    }
	    ot(t, i) {
	        const e = i && i.includes;
	        if (e) for (const s in e) e[s] && i[s].renderUniforms && at(t, i[s].renderUniforms);
	    }
	    et() {
	        this.ht && (St(this.ht), delete this.ht);
	    }
	    h() {
	        this.getMap().on("updatelights", this.nt, this);
	        const t = this.lt(), i = yt.getUniformDeclares(), e = [];
	        i.push({
	            name: "projViewModelMatrix",
	            type: "function",
	            fn: function(t, i) {
	                return multiply$5(e, i.projViewMatrix, i.modelMatrix);
	            }
	        }), this.W = new vn({
	            vert: "attribute vec3 aPosition;\nuniform mat4 projViewModelMatrix;\nuniform mat4 modelMatrix;\n#ifdef HAS_PATTERN\n    attribute vec2 aTexCoord;\n    uniform vec2 uvScale;\n    uniform vec2 uvOffset;\n    varying vec2 vTexCoord;\n#endif\n#if defined(HAS_SHADOWING) && !defined(HAS_BLOOM)\n    #include <vsm_shadow_vert>\n#endif\nvoid main () {\n    #ifdef HAS_PATTERN\n        vTexCoord = aTexCoord * uvScale + uvOffset;\n    #endif\n    vec3 position = vec3(aPosition);\n    gl_Position = projViewModelMatrix * vec4(position, 1.0);\n    #if defined(HAS_SHADOWING) && !defined(HAS_BLOOM)\n        shadow_computeShadowPars(vec4(position, 1.0));\n    #endif\n}",
	            frag: "precision mediump float;\n#if defined(HAS_SHADOWING) && !defined(HAS_BLOOM)\n    #include <vsm_shadow_frag>\n#endif\n#ifdef HAS_PATTERN\n    uniform sampler2D polygonPatternFile;\n    varying vec2 vTexCoord;\n#endif\nuniform vec4 polygonFill;\nuniform float polygonOpacity;\nvoid main() {\n    #ifdef HAS_PATTERN\n        vec4 color = texture2D(polygonPatternFile, vTexCoord);\n    #else\n        vec4 color = polygonFill;\n    #endif\n    gl_FragColor = color * polygonOpacity;\n    #if defined(HAS_SHADOWING) && !defined(HAS_BLOOM)\n        float shadowCoeff = shadow_computeShadow();\n        gl_FragColor.rgb = shadow_blend(gl_FragColor.rgb, shadowCoeff);\n    #endif\n}",
	            uniforms: i,
	            extraCommandProps: t
	        });
	        const s = yt.getUniformDeclares();
	        s.push(...jn.getUniformDeclares()), this.it = new ai$1.StandardShader({
	            uniforms: s,
	            extraCommandProps: t
	        }), this.p(), this.update();
	    }
	    lt() {
	        const t = [ 0, 1 ], i = this.s.getRenderer().canvas;
	        return {
	            viewport: {
	                x: 0,
	                y: 0,
	                width: () => i.width,
	                height: () => i.height
	            },
	            depth: {
	                enable: !0,
	                mask: () => {
	                    const t = this.s.getGroundConfig();
	                    return t.depth || void 0 === t.depth;
	                },
	                range: () => {
	                    const i = this.s.getGroundConfig(), e = i && i.renderPlugin.sceneConfig;
	                    return e && e.depthRange || t;
	                },
	                func: "<="
	            },
	            blend: {
	                enable: !0,
	                func: {
	                    src: "src alpha",
	                    dst: "one minus src alpha"
	                },
	                equation: "add"
	            },
	            polygonOffset: {
	                enable: !0,
	                offset: {
	                    factor: (t, i) => i.offsetFactor,
	                    units: (t, i) => i.offsetUnits
	                }
	            }
	        };
	    }
	    ct() {
	        const t = this.getMap().getLightManager();
	        return !!(t && t.getAmbientResource());
	    }
	    p() {
	        const t = new tn;
	        t.data.aTexCoord = new Uint8Array([ 0, 1, 1, 1, 0, 0, 1, 0 ]), t.createTangent(), 
	        t.generateBuffers(this.renderer.regl), this.S = new ke$1(t, null, {
	            castShadow: !1
	        });
	        const i = this.it.getGeometryDefines(t);
	        this.S.setDefines(i), this.H = new Ke$1([ this.S ]);
	    }
	    m() {
	        const t = this.getMap(), i = At.getGroundTransform(this.S.localTransform, t);
	        this.S.setLocalTransform(i);
	        const e = t._get2DExtentAtRes(t.getGLRes()), s = e.getWidth(), n = e.getHeight(), r = t.cameraLookAt, h = r[0] - s, o = r[1] + n;
	        let a = this.material && this.material.get("uvOffset") || Tt;
	        a[0] = a[0] || 0, a[1] = a[1] || 0;
	        const l = this.B(), c = this.material && this.material.get("noiseTexture"), u = l && (l[0] || l[1]);
	        if (u) {
	            a = [ a[0], a[1] ];
	            const t = performance.now(), i = c ? 5e4 : 1e3, e = c ? 256 : 1;
	            l[0] && (a[0] = t * l[0] % i / i * e), l[1] && (a[1] = t * l[1] % i / i * e);
	        }
	        const f = this.material && this.material.get("uvScale") || kt, d = .5 / f[0], p = .5 / f[1], g = e.getWidth() / d * 2, m = e.getHeight() / p * 2;
	        if (this.S.setUniform("uvScale", [ g, -m ]), u && c) {
	            const t = [ h - (l[0] ? a[0] : 0), o + (l[1] ? a[1] : 0) ], i = t[0] / d % 1, e = t[1] / p % 1, s = [ t[0] / d - i, t[1] / p - e ];
	            this.S.setUniform("uvOffset", [ i + (l[0] ? 0 : a[0]), e + (l[1] ? 0 : a[1]) ]), 
	            this.S.setUniform("uvOrigin", s);
	        } else {
	            const t = h / d % 1, i = o / p % 1, e = [ h / d - t, o / p - i ];
	            this.S.setUniform("uvOffset", [ t + a[0], i + a[1] ]), this.S.setUniform("uvOrigin", e);
	        }
	    }
	    q(t) {
	        let i = !1;
	        const e = this.S.defines, s = this.s.ut && this.s.ut(), n = this.s.getGroundConfig();
	        function r(t, s) {
	            t ? e[s] || (e[s] = 1, i = !0) : e[s] && (delete e[s], i = !0);
	        }
	        r(this.ct(), "HAS_IBL_LIGHTING");
	        r(t && t.ssr && n && n.symbol && n.symbol.ssr, "HAS_SSR");
	        const h = t && s && s.shadow && s.shadow.enable;
	        r(h, "HAS_SHADOWING"), r(h, "USE_ESM");
	        r(!!this.Z, "HAS_PATTERN");
	        return r(t && t.ssao, "HAS_SSAO"), i ? e : null;
	    }
	    tt() {
	        const t = this.getSymbol() && this.getSymbol().material;
	        if (!t) return;
	        const i = {};
	        let e = !1;
	        for (const s in t) if (dt(t, s)) if (s.indexOf("Texture") > 0) {
	            let n = t[s];
	            if (!n) continue;
	            n = "string" == typeof n ? {
	                url: n,
	                wrap: "repeat"
	            } : n, n.flipY = !0, n.min = "linear mipmap linear", n.mag = "linear", n.flipY = !0, 
	            i[s] = new en(n, this.G), e = !0;
	        } else i[s] = t[s];
	        this.material ? (this.ft = new ai$1.StandardMaterial(i), this.ft.isReady() ? this.j() : this.ft.once("complete", this.N)) : (this.material = new ai$1.StandardMaterial(i), 
	        this.material.once("complete", this.N, this)), e || this.j();
	    }
	    j() {
	        this.ft && (this.material.dispose(), this.material = this.ft, delete this.ft), this.setToRedraw(!0);
	    }
	    K(t) {
	        t = N$1.resizeToPowerOfTwo(t);
	        const i = this.D, e = {
	            width: t.width,
	            height: t.height,
	            data: t,
	            mag: "linear",
	            min: "linear mipmap linear",
	            flipY: !1,
	            wrap: "repeat"
	        };
	        return i.texture(e);
	    }
	    nt(t) {
	        if (t.ambientUpdate) {
	            this.et();
	            const t = this.getMap();
	            t && (this.ht = bt(this.D, t));
	        }
	        this.setToRedraw();
	    }
	    X(t) {
	        return mt([], t);
	    }
	    B() {
	        return this.material && this.material.get("uvOffsetAnim");
	    }
	    getRenderMeshes() {
	        return this.H.getMeshes();
	    }
	}

	const {createIBLTextures: Ot, disposeIBLTextures: It} = ai$1.PBRUtils, Et = [ 0, 0, 0 ], Lt = [], Ft = [];

	class Rt {
	    constructor(t, i) {
	        this.dt = 4, this.D = t, this.renderer = new k$1(t), this.s = i, this.h(), 
	        this.pt();
	    }
	    paint(t) {
	        if (!this.isEnable() || !this.gt) return;
	        const i = this.$(t), e = t && t.renderTarget && t.renderTarget.fbo;
	        this.renderer.render(this.vt, i, null, e);
	    }
	    update() {
	        const t = this.getMap();
	        if (!t || !this.isEnable()) return;
	        const i = t.getLightManager(), e = i && i.getAmbientResource();
	        e !== this.gt && this.ht && (It(this.ht), delete this.ht), this.gt = e, this.pt();
	    }
	    dispose() {
	        this.vt.dispose(), It(this.ht), delete this.vt, delete this.ht, delete this.gt;
	    }
	    getMap() {
	        return this.s.getMap();
	    }
	    pt() {
	        if (!this.gt) return;
	        const t = this.s.ut();
	        this.vt.setMode(1, 0, t.environment && t.environment.mode ? 1 : 0);
	    }
	    isEnable() {
	        const t = this.s.ut();
	        return this.ct() && t && t.environment && t.environment.enable;
	    }
	    ct() {
	        const t = this.getMap().getLightManager();
	        return !!(t && t.getAmbientResource());
	    }
	    $() {
	        const t = this.getMap(), i = this.getMap().getLightManager(), e = i && i.getAmbientLight();
	        let s = this.ht;
	        s || (s = this.ht = Ot(this.D, t));
	        const n = this.s.getRenderer().canvas, r = this.s.ut().environment || {}, h = r.level || 0, o = s.prefilterMap.width, a = this.wt = this.wt || [], u = e && e.hsv || Et, f = r.brightness || 0;
	        return copy$4(Lt, u), f && (Lt[2] += f), Ft[0] = n.width, Ft[1] = n.height, {
	            "rgbmRange": s.rgbmRange,
	            "cubeMap": s.prefilterMap,
	            "bias": h,
	            "size": o / Math.pow(2, Math.max(0, h - 1)),
	            "environmentExposure": ct(e && e.exposure) ? e.exposure : 1,
	            "diffuseSPH": s.sh,
	            "viewMatrix": t.viewMatrix,
	            "projMatrix": t.projMatrix,
	            "resolution": Ft,
	            "hsv": Lt,
	            "transformMatrix": fromRotation$2(a, e && Math.PI / 180 * -e.orientation || 0)
	        };
	    }
	    h() {
	        const t = this.getMap();
	        if (t.on("updatelights", this.update, this), this.vt = new qn, t.options.lights) {
	            const t = this.getMap().getLightManager().getAmbientResource();
	            this.gt = t;
	        }
	    }
	}

	const Pt = [], Ht = [ .03, .03, .03 ], Dt = [], Gt = [], Nt = [], jt = [ 1, 1, 1 ], Bt = [ -1200, -1200, 0 ], Ut = [ 1200, 1200, 1e3 ], zt = {
	    min: [],
	    max: []
	}, Vt = fromRotationTranslation$1([], fromEuler([], 90, 0, 0), [ 0, 0, 0 ]);

	class Wt {
	    constructor(t, i) {
	        this.D = t, this.renderer = new k$1(t), this.s = i, this._t = new qt, this.h();
	    }
	    getMap() {
	        return this.s && this.s.getMap();
	    }
	    h() {
	        const t = this.s.getRenderer().canvas, i = {
	            x: 0,
	            y: 0,
	            width: () => t.width,
	            height: () => t.height
	        };
	        this.vt = new vn({
	            vert: "attribute vec3 aPosition;\nattribute vec3 aNormal;\nattribute vec2 aTexCoord;\nuniform mat4 projMatrix;\nuniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 positionMatrix;\nuniform vec3 cameraPosition;\nuniform float top;\nuniform float bottom;\nuniform float time;\nvarying vec2 vTexCoord;\n#include <get_output>\nfloat angle(float x, float y){\n    return atan(y, x);\n}\nvec2 getFoot(vec2 camera, vec2 normal, vec2 pos) {\n    vec2 position = vec2(0.0, 0.0);\n    float distanceLen = distance(pos, normal);\n    float a = angle(camera.x - normal.x, camera.y - normal.y);\n    pos.x > normal.x ? a -= 0.785 : a += 0.785;\n    position.x = cos(a) * distanceLen;\n    position.y = sin(a) * distanceLen;\n    return position + normal;\n    return position;\n}\nvoid main()\n{\n    vec4 localPosition = getPosition(aPosition);\n    mat4 localPositionMatrix = getPositionMatrix();\n    vec2 foot = getFoot(vec2(cameraPosition.x, cameraPosition.z), vec2(aNormal.x, aNormal.z), vec2(localPosition.x, localPosition.z));\n    float height = top - bottom;\n    float y = aNormal.y - bottom - height * time;\n    y = y + (y < 0.0 ? height : 0.0);\n    float ratio = (1.0 - y / height) * (1.0 - y / height);\n    y = height * (1.0 - ratio);\n    y += bottom;\n    y += aPosition.y - aNormal.y;\n    localPosition = vec4( foot.x, y, foot.y , 1.0);\n    gl_Position = projMatrix * modelViewMatrix * localPositionMatrix * localPosition;\n    vTexCoord = aTexCoord;\n}",
	            frag: "precision mediump float;\nvarying vec2 vTexCoord;\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D rainMap;\nvoid main() {\n    vec4 rainColor = texture2D(rainMap, vTexCoord);\n    vec4 diffuseColor = vec4(diffuse, opacity);\n    diffuseColor *= rainColor;\n    gl_FragColor = diffuseColor;\n}",
	            uniforms: [ {
	                name: "modelViewMatrix",
	                type: "function",
	                fn: function(t, i) {
	                    return multiply$5(Pt, i.viewMatrix, i.modelMatrix);
	                }
	            } ],
	            extraCommandProps: {
	                viewport: i,
	                depth: {
	                    enable: !0,
	                    mask: !1,
	                    func: "less",
	                    range: [ 0, 1 ]
	                },
	                blend: {
	                    enable: !0,
	                    func: {
	                        src: "src alpha",
	                        dst: "one minus src alpha"
	                    },
	                    equation: "add"
	                }
	            }
	        }), this.Mt();
	    }
	    Mt() {
	        const t = this.D.texture({
	            width: 2,
	            height: 2
	        });
	        if (this.xt = this.yt(), !this.xt) return;
	        this.bt = new Ke$1(this.xt);
	        const i = this.St();
	        i.rainTexture ? this.Ct(i.rainTexture).then(t => {
	            this.xt.material.set("rainMap", t);
	        }) : (this.xt.material.set("rainMap", t), console.warn("should set rain texture."));
	    }
	    yt() {
	        const t = this.getMap(), i = this.St();
	        if (!i) return null;
	        this.Tt = t.getZoom();
	        const e = this.kt(), s = this.At = i.density, n = this.Ot = i.rainWidth || 1, r = this.It = i.rainHeight || 1, h = [], o = [], a = [], l = [];
	        for (let t = 0; t < s; t++) {
	            const i = {};
	            i.x = Math.random() * (e.max[0] - e.min[0]) + e.min[0], i.y = Math.random() * (e.max[2] - e.min[2]) + e.min[2], 
	            i.z = Math.random() * (e.max[1] - e.min[1]) + e.min[1];
	            const s = (e.max[2] - e.min[2]) / 37.5 * r, c = s / 3 * n;
	            h.push(i.x + c, i.y + s, i.z, i.x - c, i.y + s, i.z, i.x - c, i.y, i.z, i.x + c, i.y, i.z), 
	            o.push(i.x, i.y - s / 2, i.z, i.x, i.y - s / 2, i.z, i.x, i.y - s / 2, i.z, i.x, i.y - s / 2, i.z), 
	            a.push(1, 1, 0, 1, 0, 0, 1, 0), l.push(4 * t + 0, 4 * t + 1, 4 * t + 2, 4 * t + 0, 4 * t + 2, 4 * t + 3);
	        }
	        const c = {};
	        c.POSITION = h, c.NORMAL = o, c.TEXCOORD_0 = a;
	        const u = new Q$1(c, l, 0, {
	            primitive: "triangles",
	            positionAttribute: "POSITION",
	            normalAttribute: "NORMAL",
	            uv0Attribute: "TEXCOORD_0"
	        });
	        u.generateBuffers(this.renderer.regl);
	        const f = new Ce$1({
	            rainMap: this.D.texture({
	                width: 2,
	                height: 2
	            }),
	            diffuse: i.color || [ 1, 1, 1 ],
	            opacity: i.opacity || 1
	        }), d = new ke$1(u, f);
	        return d.setUniform("top", e.max[2]), d.setUniform("bottom", e.min[2]), this.Et(d), 
	        d.transparent = !0, d;
	    }
	    Ct(t) {
	        const i = new Image;
	        return i.src = this.Lt = t, new Promise((t, e) => {
	            i.onload = () => {
	                const e = this.D.texture({
	                    mag: "linear",
	                    min: "linear mipmap nearest",
	                    wrapS: "clamp",
	                    wrapT: "clamp",
	                    data: i
	                });
	                t(e);
	            }, i.onerror = t => {
	                e(t);
	            };
	        });
	    }
	    paint(t) {
	        if (!this.bt) return;
	        const i = this.St(), e = {}, s = this.getMap();
	        e.projMatrix = s.projMatrix, e.viewMatrix = s.viewMatrix, e.cameraPosition = s.cameraPosition;
	        const n = i.speed || 1, r = this._t.getElapsedTime() / (2 / n) % 1;
	        e.time = r, this.xt.material.set("diffuse", i.color || jt), this.xt.material.set("opacity", i.opacity || 1), 
	        this.Et(this.xt);
	        const h = t && t.renderTarget && t.renderTarget.fbo;
	        this.renderer.render(this.vt, e, this.bt, h), this.s.getRenderer().setCanvasUpdated();
	    }
	    Et(t) {
	        const i = this.getMap(), e = i.coordinateToPointAtRes(i.getCenter(), i.getGLRes()), s = i.getGLScale() / i.getGLScale(this.Tt), n = set$4(Gt, s, s, s), r = multiply$4(n, Ht, n), h = identity$2(Nt), o = this.St(), c = i.getBearing();
	        fromRotationTranslationScale(h, fromEuler(Dt, o.windDirectionX || 0, o.windDirectionY || 0, 90 - c), [ e.x, e.y, 0 ], r), 
	        multiply$5(h, h, Vt), t.setLocalTransform(h);
	    }
	    setToRedraw() {
	        const t = this.s.getRenderer();
	        t && t.setToRedraw();
	    }
	    update() {
	        const t = this.St();
	        if (t) {
	            if (this.xt || this.Mt(), t.density !== this.At || t.rainWidth !== this.Ot || t.rainHeight !== this.It) {
	                const t = this.xt.material.get("rainMap");
	                this.xt.geometry.dispose(), this.xt.dispose(), this.bt.clear(), this.xt = this.yt(), 
	                this.xt.material.set("rainMap", t), this.bt.setMeshes(this.xt);
	            }
	            t.rainTexture !== this.Lt && this.Ct(t.rainTexture).then(t => {
	                this.xt.material.set("rainMap", t);
	            });
	        }
	    }
	    dispose() {
	        this.xt && (this.xt.geometry.dispose(), this.xt.material && this.xt.material.dispose(), 
	        this.xt.dispose(), delete this.xt), this.vt && (this.vt.dispose(), delete this.vt);
	    }
	    isEnable() {
	        const t = this.St();
	        return t && t.enable;
	    }
	    St() {
	        const t = this.s.getWeatherConfig();
	        return t && t.rain;
	    }
	    kt() {
	        const t = 16.685648411389433 - this.getMap().getZoom();
	        return scale$4(zt.min, Bt, Math.pow(2, t)), scale$4(zt.max, Ut, Math.pow(2, t)), 
	        zt;
	    }
	}

	class qt {
	    constructor(t) {
	        this.autoStart = void 0 === t || t, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, 
	        this.running = !1;
	    }
	    start() {
	        this.startTime = ("undefined" == typeof performance ? Date : performance).now(), 
	        this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
	    }
	    stop() {
	        this.getElapsedTime(), this.running = !1, this.autoStart = !1;
	    }
	    getElapsedTime() {
	        return this.getDelta(), this.elapsedTime;
	    }
	    getDelta() {
	        let t = 0;
	        if (this.autoStart && !this.running) return this.start(), 0;
	        if (this.running) {
	            const i = ("undefined" == typeof performance ? Date : performance).now();
	            t = (i - this.oldTime) / 1e3, this.oldTime = i, this.elapsedTime += t;
	        }
	        return 0;
	    }
	}

	const $t = [], Yt = [ .03, .03, .03 ], Xt = [], Jt = [], Zt = [], Kt = fromRotationTranslation$1([], fromEuler([], 90, 0, 0), [ 0, 0, 0 ]);

	class Qt {
	    constructor(t, i) {
	        this.D = t, this.s = i, this.h();
	    }
	    h() {
	        const t = this.s.getRenderer().canvas, i = {
	            x: 0,
	            y: 0,
	            width: () => t.width,
	            height: () => t.height
	        };
	        this.vt = new vn({
	            vert: "#include <gl2_vert>\nattribute vec3 aPosition;\nattribute vec2 aTexCoord;\nvarying vec2 vTexCoord;\nuniform mat4 projMatrix;\nuniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 positionMatrix;\n#include <get_output>\nvoid main()\n{\n    mat4 localPositionMatrix = getPositionMatrix();\n    vec4 localPosition = getPosition(aPosition);\n    gl_Position = projMatrix * modelViewMatrix * localPositionMatrix * localPosition;\n    vTexCoord = aTexCoord;\n}",
	            frag: "#if __VERSION__ == 100\n  #ifdef GL_OES_standard_derivatives\n    #extension GL_OES_standard_derivatives : enable\n  #endif\n#endif\nprecision mediump float;\n#include <gl2_frag>\nprecision mediump float;\nuniform sampler2D perlinTexture;\nvarying vec2 vTexCoord;\nfloat lerp(float a, float b, float w) {\n    return a + w * (b - a);\n}\nvoid main() {\n    float snowIntense = texture2D(perlinTexture, vTexCoord).r;\n    vec3 fixedC = vec3(1.0, 1.0, 1.0);\n    float r = lerp(0.5, fixedC.x, snowIntense);\n    float g = lerp(0.5, fixedC.y, snowIntense);\n    float b = lerp(0.5, fixedC.z, snowIntense);\n    glFragColor = vec4(r, g, b, 1.0);\n    #if __VERSION__ == 100\n        gl_FragColor = glFragColor;\n    #endif\n}",
	            uniforms: [ {
	                name: "modelViewMatrix",
	                type: "function",
	                fn: function(t, i) {
	                    return multiply$5($t, i.viewMatrix, i.modelMatrix);
	                }
	            } ],
	            extraCommandProps: {
	                viewport: i
	            }
	        }), this.vt.version = 300, this.bt = new Ke$1, this.Ft = this.Rt(), this.bt.setMeshes(this.Ft), 
	        this.renderer = new k$1(this.D);
	        const e = this.Pt();
	        e && (e.snowGroundTexture ? this.Ht(e.snowGroundTexture) : (this.Dt = this.D.texture({
	            width: 2,
	            height: 2
	        }), console.warn("should set snow ground texture.")));
	    }
	    render(t) {
	        this.Dt && this.Ft.material.set("perlinTexture", this.Dt);
	        const i = this.s.getMap();
	        this.Gt(i);
	        const e = {
	            projMatrix: i.projMatrix,
	            viewMatrix: i.viewMatrix,
	            cameraPosition: i.cameraPosition
	        }, s = t && t.renderTarget && t.renderTarget.fbo;
	        this.renderer.render(this.vt, e, this.bt, s), this.s.getRenderer().setCanvasUpdated();
	    }
	    Gt(t) {
	        const i = t.coordinateToPointAtRes(t.getCenter(), t.getGLRes()), e = t.getGLScale() / t.getGLScale(this.Tt), s = set$4(Jt, e, e, e), n = multiply$4(s, Yt, s), r = identity$2(Zt);
	        fromRotationTranslationScale(r, fromEuler(Xt, 0, 0, 0), [ i.x, i.y, .005 ], n), 
	        multiply$5(r, r, Kt), this.Ft.setLocalTransform(r);
	    }
	    Ht(t) {
	        const i = new Image;
	        i.onload = () => {
	            this.Dt = this.D.texture({
	                mag: "linear",
	                min: "linear mipmap nearest",
	                wrapS: "repeat",
	                wrapT: "repeat",
	                data: i
	            });
	        }, i.onerror = t => {
	            console.log(t);
	        }, i.src = this.Nt = t;
	    }
	    Rt() {
	        const t = this.s.getMap();
	        this.Tt = t.getZoom();
	        const i = 16e3 * Math.pow(2, 16.685648411389433 - this.Tt), e = [ -i, 0, -i, i, 0, -i, -i, 0, i, i, 0, i ], s = {};
	        s.POSITION = e, s.NORMAL = [ 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0 ], s.TEXCOORD_0 = [ 0, 0, 1, 0, 0, 1, 1, 1 ];
	        const n = new Q$1(s, [ 3, 1, 0, 0, 2, 3 ], 0, {
	            positionAttribute: "POSITION",
	            normalAttribute: "NORMAL",
	            uv0Attribute: "TEXCOORD_0"
	        });
	        n.generateBuffers(this.D);
	        const r = new Ce$1({
	            perlinTexture: this.D.texture({
	                with: 2,
	                height: 2
	            })
	        });
	        return new ke$1(n, r);
	    }
	    getMeshes() {
	        return this.Ft;
	    }
	    dispose() {
	        this.Ft && (this.Ft.geometry.dispose(), this.Ft.material && this.Ft.material.dispose(), 
	        this.Ft.dispose(), delete this.Ft), this.vt && (this.vt.dispose(), delete this.vt);
	    }
	    update() {
	        const t = this.Pt();
	        t && t.snowGroundTexture === !this.Nt && this.Ht(t.snowGroundTexture);
	    }
	    isEnable() {
	        const t = this.St();
	        return t && t.enable;
	    }
	    Pt() {
	        const t = this.s.getWeatherConfig();
	        return t && t.snow;
	    }
	}

	const ti = [];

	class ii {
	    constructor(t, i, e) {
	        this.D = t, this.s = i, this.jt = e, this.h();
	    }
	    h() {
	        this.renderer = new k$1(this.D);
	        const t = this.s.getRenderer(), i = this.Bt = {
	            x: 0,
	            y: 0,
	            width: () => t.canvas ? t.canvas.width : 1,
	            height: () => t.canvas ? t.canvas.height : 1
	        };
	        this.Ut = i.width, this.zt = i.height, this.Vt = this.D.framebuffer({
	            color: this.D.texture({
	                width: t.canvas ? t.canvas.width : 1,
	                height: t.canvas ? t.canvas.height : 1,
	                wrap: "clamp",
	                mag: "linear",
	                min: "linear"
	            }),
	            depth: !0
	        }), this.EMPTY_TEXTURE = this.D.texture({
	            with: 2,
	            height: 2
	        }), this.Wt = new Wt(this.D, this.s), this.qt = new dt$1(this.D, i), 
	        this.$t = new Qt(this.D, this.s), this.Yt = new rt$1(this.D, i, this.s), this.Xt = new it$1, 
	        this.Xt.version = 300;
	    }
	    getMap() {
	        return this.s && this.s.getMap();
	    }
	    renderScene(t) {
	        this.renderSnowMask(t), this.renderRain(t);
	    }
	    renderRain(t) {
	        this.isEnableRain() && this.Wt.paint(t);
	    }
	    renderSnowMask(t) {
	        if (!this.isEnableSnow()) return;
	        const i = this.getMap();
	        this.$t.render(t, i);
	    }
	    paint(t, i) {
	        if (!i || !i.length) return t;
	        this.Jt();
	        const e = this.s.getWeatherConfig(), s = {};
	        if (this.isEnableRain() ? (s.ripplesMap = this.Zt(), this.Xt.shaderDefines.HAS_RAIN = 1) : delete this.Xt.shaderDefines.HAS_RAIN, 
	        this.isEnableSnow() ? (this.Xt.shaderDefines.HAS_SNOW = 1, i.forEach(t => {
	            t.defines.HAS_SNOW = 1;
	        })) : (delete this.Xt.shaderDefines.HAS_SNOW, i.forEach(t => {
	            delete t.defines.HAS_SNOW;
	        })), this.isEnableFog()) {
	            const t = e.fog;
	            s.fogColor = t.color || [ .9, .9, .9 ], this.Xt.shaderDefines.HAS_FOG = 1;
	        } else delete this.Xt.shaderDefines.HAS_FOG;
	        return this.Xt.setDefines(this.Xt.shaderDefines), s.mixFactorMap = this.Kt(i) || this.EMPTY_TEXTURE, 
	        s.sceneMap = t, s.time = this.Qt() / 1e3, s.resolution = set(ti, this.Vt.width, this.Vt.height), 
	        this.renderer.render(this.Xt, s, null, this.Vt), this.ti = i, this.Vt;
	    }
	    Kt(t) {
	        const i = {}, e = this.getMap(), s = e.getZoom(), n = Math.pow(2, 16.685648411389433 - s), r = this.s.getWeatherConfig(), h = r.fog;
	        if (!h || !h.enable) return null;
	        const o = h.start || .1, a = h.end || 100;
	        i.projMatrix = e.projMatrix, i.viewMatrix = e.viewMatrix, i.cameraPosition = e.cameraPosition, 
	        i.fogDist = [ o * n, a * n ], i.rainDepth = e.altitudeToPoint(r.rain && r.rain.rainDepth || .1, e.getGLRes());
	        const l = this.Yt.render(t, i);
	        return this.s.getRenderer().ii(l);
	    }
	    Zt() {
	        const t = this.getMap(), i = this.s.getWeatherConfig(), e = i.rain.rippleRadius || 24, s = {};
	        s.projMatrix = t.projMatrix, s.viewMatrix = t.viewMatrix, s.time = this.Qt() / 1e3, 
	        s.rippleRadius = e, s.density = i.rain.density || 2e3;
	        return this.qt.render(t, s);
	    }
	    Qt() {
	        if (!this.s) return 0;
	        if (void 0 === this.ei && (this.ei = 0), this.isPlaying()) {
	            const t = this.s.getRenderer();
	            this.ei = t.getFrameTime();
	        }
	        return this.ei;
	    }
	    isEnable() {
	        const t = this.s.getWeatherConfig();
	        return t && t.enable;
	    }
	    isEnableRain() {
	        const t = this.s.getWeatherConfig();
	        return t && t.enable && t.rain && t.rain.enable;
	    }
	    isEnableFog() {
	        const t = this.s.getWeatherConfig();
	        return t && t.enable && t.fog && t.fog.enable;
	    }
	    isEnableSnow() {
	        const t = this.s.getWeatherConfig();
	        return t && t.enable && t.snow && t.snow.enable;
	    }
	    isPlaying() {
	        const t = this.s.getWeatherConfig();
	        return !!t && !1 !== t.playing;
	    }
	    si() {
	        return this.isEnableRain() || this.isEnableFog() || this.isEnableSnow();
	    }
	    update() {
	        !this.isEnable() && this.ti && this.ti.forEach(t => {
	            delete t.defines.HAS_SNOW, delete t.defines.HAS_RAIN, delete t.defines.HAS_FOG;
	        }), this.isEnableRain() && (this.Wt = this.Wt || new Wt(this.D, this.s), this.Wt.update()), 
	        this.isEnableSnow() && (this.$t = this.$t || new Qt(this.D, this.s), this.$t.update());
	    }
	    getShadowMeshes() {
	        return this.$t.getMeshes();
	    }
	    Jt() {
	        const t = this.Ut(), i = this.zt();
	        !this.Vt || this.Vt.width === t && this.Vt.height === i || this.Vt.resize(t, i);
	    }
	    dispose() {
	        this.Vt && this.Vt.destroy(), this.Xt && (this.Xt.dispose(), delete this.Xt), this.Wt && (this.Wt.dispose(), 
	        delete this.Wt), this.$t && (this.$t.dispose(), delete this.$t);
	    }
	}

	const ei = [], si = t => !!t.bloom, ni = t => !!t.ssr;

	class ri {
	    constructor(t, i, e) {
	        this.D = t, this.s = i, this.ni = new k$1(t), this.ri = new Cn, 
	        this.hi = new Hn(this.ni, e), this.oi = new Zn, this.ai = new jn(this.D);
	    }
	    setContextIncludes() {}
	    bloom(t, i, e, s, n, r, h) {
	        this.li || (this.li = new Un(this.D));
	        const o = this.s.getRenderer().ii(this.ci);
	        return this.li.render(t, o, s, n, r, i, e, h);
	    }
	    drawBloom(t) {
	        const i = this.s.getRenderer(), e = this.D, s = this.ci;
	        if (s) {
	            const {width: i, height: n} = t;
	            s.width === i && s.height === n || s.resize(i, n), e.clear({
	                color: [ 0, 0, 0, 0 ],
	                framebuffer: s
	            });
	        } else {
	            const i = this.ui(t);
	            this.ci = e.framebuffer(i);
	        }
	        const n = i.getFrameTime(), r = i.getFrameEvent(), h = i.getFrameContext(), o = h.renderMode, a = h.sceneFilter, l = h.renderTarget;
	        h.isPostProcess = !0, h.renderMode = "default", h.sceneFilter = si, h.renderTarget = {
	            fbo: this.ci,
	            getFramebuffer: hi,
	            getDepthTexture: oi
	        };
	        const c = i.glCtx;
	        return c.resetDrawCalls(), r ? i.forEachRenderer(t => {
	            i.clearStencil(t, s), t.drawOnInteracting(r, n, h);
	        }) : i.forEachRenderer(t => {
	            i.clearStencil(t, s), t.draw(n, h);
	        }), delete h.isPostProcess, h.renderMode = o, h.sceneFilter = a, h.renderTarget = l, 
	        c.getDrawCalls();
	    }
	    genSsrMipmap(t, i) {
	        const e = this.s.getMap().projViewMatrix;
	        this.ai.genMipMap(t, i, e);
	    }
	    getPrevSsrProjViewMatrix() {
	        return this.ai && this.ai.getPrevProjViewMatrix();
	    }
	    drawSSR(t, i, e) {
	        e && this.ai.copyDepthTex(t);
	        const s = this.s.getRenderer(), n = s.getFrameTime(), r = s.getFrameEvent(), h = s.getFrameContext();
	        h.isPostProcess = !0, h.ssr = this.getSSRContext();
	        const o = h.renderMode, a = h.sceneFilter;
	        h.renderMode = "default", h.sceneFilter = ni, h.renderTarget.fbo = i;
	        const l = s.glCtx;
	        let c = !1;
	        r ? s.forEachRenderer(t => {
	            s.clearStencil(t, i), c || (l.resetDrawCalls(), c = !0), t.drawOnInteracting(r, n, h);
	        }) : s.forEachRenderer(t => {
	            s.clearStencil(t, i), c || (l.resetDrawCalls(), c = !0), t.draw(n, h);
	        });
	        const u = s.drawGround();
	        return delete h.ssr, delete h.isPostProcess, h.renderMode = o, h.sceneFilter = a, 
	        this.fi = l.getDrawCalls() > 0, u;
	    }
	    getSSRUniforms() {
	        const t = this.s.ut(), i = t && t.postProcess, e = this.s.getMap();
	        return this.ai.getSSRUniforms(e, i.ssr.factor, i.ssr.quality);
	    }
	    getSSRContext() {
	        const t = this.s.ut(), i = t && t.postProcess, e = this.s.getMap(), s = this.ai.getSSRUniforms(e, i.ssr.factor, i.ssr.quality);
	        if (!s) return null;
	        return {
	            renderUniforms: s,
	            defines: {
	                "HAS_SSR": 1
	            }
	        };
	    }
	    taa(t, i, {projMatrix: e, needClear: s}) {
	        const n = this.hi;
	        return {
	            outputTex: n.render(t, i, e, s),
	            redraw: n.needToRedraw()
	        };
	    }
	    isTaaNeedRedraw() {
	        return this.hi.needToRedraw();
	    }
	    ssao(t, i, e) {
	        return this.di || (this.di = new Rn(this.ni), this.s.getRenderer().setToRedraw()), 
	        this.di.render({
	            projMatrix: e.projMatrix,
	            cameraNear: e.cameraNear,
	            cameraFar: e.cameraFar,
	            bias: e.ssaoBias,
	            radius: e.ssaoRadius,
	            intensity: e.ssaoIntensity,
	            quality: .6
	        }, t, i);
	    }
	    fxaa(t, i, e, s, n, r, h, o, a, l, c, u, d, p, g, m) {
	        !t || t.width === i.fbo && t.height === i.height || t.resize(i.width, i.height);
	        const v = {};
	        n ? v.HAS_TAA_TEX = 1 : delete v.HAS_TAA_TEX, r ? v.HAS_FXAA_TEX = 1 : delete v.HAS_FXAA_TEX, 
	        u ? v.HAS_OUTLINE_TEX = 1 : delete v.HAS_OUTLINE_TEX, e ? v.HAS_NOAA_TEX = 1 : delete v.HAS_NOAA_TEX, 
	        s ? v.HAS_POINT_TEX = 1 : delete v.HAS_POINT_TEX, this.ri.setDefines(v), this.ni.render(this.ri, {
	            textureSource: i,
	            noAaTextureSource: e,
	            pointTextureSource: s,
	            taaTextureSource: n,
	            fxaaTextureSource: r,
	            resolution: set(ei, i.width, i.height),
	            enableFXAA: h,
	            enableToneMapping: o,
	            enableSharpen: a,
	            pixelRatio: l,
	            sharpFactor: c,
	            textureOutline: u,
	            highlightFactor: d,
	            outlineFactor: p,
	            outlineWidth: g,
	            outlineColor: m
	        }, null, t);
	    }
	    renderFBOToScreen(t, i, e, s) {
	        this.pi || (this.pi = []), this.pi[0] = t.width, this.pi[1] = t.height;
	        const n = this.s.getRenderer();
	        this.ni.render(this.oi, {
	            texture: t.color && n.ii(t) || t,
	            size: this.pi,
	            enableSharpen: +!!i,
	            sharpFactor: e,
	            pixelRatio: s
	        });
	    }
	    postprocess(t, i, e) {
	        this.gi || (this.gi = new Dn);
	        const s = this.s && this.s.getRenderer(), n = e || s.ii(t);
	        return i.resolution = set(ei, n.width, n.height), i.textureSource = n, i.timeGrain = performance.now(), 
	        this.ni.render(this.gi, i), this.mi;
	    }
	    dispose() {
	        this.ci && (this.ci.destroy(), delete this.ci), this.hi && (this.hi.dispose(), delete this.hi), 
	        this.di && (this.di.dispose(), delete this.di), this.li && (this.li.dispose(), delete this.li), 
	        this.gi && (this.gi.dispose(), delete this.gi), this.ri && (this.ri.dispose(), delete this.ri), 
	        this.oi && (this.oi.dispose(), delete this.oi);
	    }
	    ui(t, i) {
	        const {width: e, height: s} = this.s.getRenderer().canvas, n = this.D;
	        let r;
	        r = this.s.getRenderer().vi() ? n.renderbuffer({
	            width: e,
	            height: s,
	            samples: this.s.options.multiSamples,
	            format: "rgba8"
	        }) : n.texture({
	            min: "nearest",
	            mag: "nearest",
	            format: i || "rgba",
	            width: e,
	            height: s
	        });
	        const h = {
	            width: e,
	            height: s,
	            colors: [ r ]
	        };
	        return t && (h.depthStencil = t), h;
	    }
	}

	function hi(t) {
	    return t._framebuffer.framebuffer;
	}

	function oi(t) {
	    return t.depthStencil._texture.texture;
	}

	class ai extends Mn {
	    constructor(t) {
	        super({
	            vert: "#if __VERSION__ == 300\n\t#define attribute in\n\t#define varying out\n#endif\nattribute vec2 aPosition;\nattribute vec2 aTexCoord;\nvarying vec2 vTexCoord;\nvoid main()\n{\n  gl_Position = vec4(aPosition, 0., 1.);\n  vTexCoord = aTexCoord;\n}",
	            frag: "#if __VERSION__ == 100\n  #ifdef GL_OES_standard_derivatives\n    #extension GL_OES_standard_derivatives : enable\n  #endif\n#endif\nprecision mediump float;\n#include <gl2_frag>\nvarying vec2 vTexCoord;\n#ifdef HAS_FLOODANALYSE\n    uniform vec3 flood_waterColor;\n    uniform float flood_waterOpacity;\n    uniform sampler2D floodMap;\n#endif\n#ifdef HAS_SKYLINE\n    uniform sampler2D skylineMap;\n#endif\n#ifdef HAS_VIEWSHED\n    uniform vec4 viewshed_visibleColor;\n    uniform vec4 viewshed_invisibleColor;\n    uniform sampler2D viewshedMap;\n#endif\n#ifdef HAS_INSIGHT\n    uniform vec4 insight_visibleColor;\n    uniform vec4 insight_invisibleColor;\n    uniform sampler2D insightMap;\n#endif\n#ifdef HAS_CUT\n    uniform sampler2D meshesMap;\n    uniform sampler2D invisibleMap;\n#endif\n#ifdef HAS_EXCAVATE\n    uniform sampler2D excavateMap;\n#endif\n#ifdef HAS_CROSSCUT\n    uniform sampler2D crosscutMap;\n    uniform vec4 cutLineColor;\n#endif\n#ifdef HAS_HEIGHTLIMIT\n    uniform vec3 limitColor;\n    uniform sampler2D heightLimitMap;\n#endif\nuniform sampler2D sceneMap;\nvoid main() {\n    vec4 sceneColor = texture2D(sceneMap, vTexCoord);\n    glFragColor = sceneColor;\n    #ifdef HAS_VIEWSHED\n        vec4 viewshedColor = texture2D(viewshedMap, vTexCoord);\n        if (viewshedColor.r > 0.99) {\n            glFragColor = vec4(mix(viewshed_invisibleColor.rgb, sceneColor.rgb, viewshed_invisibleColor.a), sceneColor.a);\n        } else if (viewshedColor.g > 0.99) {\n            glFragColor = vec4(mix(viewshed_visibleColor.rgb, sceneColor.rgb, viewshed_visibleColor.a), sceneColor.a);\n        } else if (viewshedColor.a < 0.01) {\n            glFragColor = vec4(viewshedColor.rgb, 1.0);\n        }\n    #endif\n    #ifdef HAS_FLOODANALYSE\n        vec4 floodColor = texture2D(floodMap, vTexCoord);\n        if (floodColor.r > 0.0) {\n            glFragColor = vec4(mix(glFragColor.rgb, flood_waterColor, flood_waterOpacity), glFragColor.a);\n        }\n    #endif\n    #ifdef HAS_SKYLINE\n        vec4 skylineColor = texture2D(skylineMap, vTexCoord);\n        if (skylineColor.r > 0.0 || skylineColor.g > 0.0 || skylineColor.b > 0.0) {\n            glFragColor = skylineColor;\n        }\n    #endif\n    #ifdef HAS_INSIGHT\n        vec4 insightColor = texture2D(insightMap, vTexCoord);\n        if (insightColor.g > 0.0) {\n            glFragColor = insight_visibleColor;\n        } else if (insightColor.r > 0.0) {\n            glFragColor = insight_invisibleColor;\n        }\n    #endif\n    #ifdef HAS_CUT\n        vec4 cutColor = texture2D(invisibleMap, vTexCoord);\n        vec4 meshesMapColor = texture2D(meshesMap, vTexCoord);\n        if (cutColor.r == 1.0 && cutColor.g == 0.0 && cutColor.b == 0.0) {\n            glFragColor = meshesMapColor;\n        } else if (cutColor.r == 0.0 && cutColor.g == 1.0 && cutColor.b == 0.0) {\n            glFragColor = meshesMapColor;\n        } else if (cutColor.r == 0.0 && cutColor.g == 0.0 && cutColor.b == 1.0) {\n          glFragColor = sceneColor;\n        }\n    #endif\n    #ifdef HAS_EXCAVATE\n        vec4 excavateColor = texture2D(excavateMap, vTexCoord);\n        if (excavateColor.r == 1.0 && excavateColor.g == 0.0 && excavateColor.b == 0.0) {\n          glFragColor = sceneColor;\n        }  else {\n          glFragColor = excavateColor;\n        }\n    #endif\n    #ifdef HAS_CROSSCUT\n        vec4 crosscutColor = texture2D(crosscutMap, vTexCoord);\n        if (crosscutColor.r > 0.0) {\n            glFragColor = vec4(mix(cutLineColor.rgb, glFragColor.rgb, 0.99), glFragColor.a);\n        }\n    #endif\n    #ifdef HAS_HEIGHTLIMIT\n        vec4 heightLimitColor = texture2D(heightLimitMap, vTexCoord);\n        if (heightLimitColor.r > 0.0) {\n            glFragColor = vec4(mix(limitColor, glFragColor.rgb, 0.6), glFragColor.a);\n        }\n    #endif\n    #if __VERSION__ == 100\n        gl_FragColor = glFragColor;\n    #endif\n}",
	            extraCommandProps: {
	                viewport: t,
	                cull: {
	                    enable: !0
	                },
	                blend: {
	                    enable: !0,
	                    func: {
	                        srcRGB: "src alpha",
	                        srcAlpha: 1,
	                        dstRGB: "one minus src alpha",
	                        dstAlpha: "one minus src alpha"
	                    },
	                    equation: "add"
	                }
	            }
	        });
	    }
	}

	class li {
	    constructor(t, i, e) {
	        this.D = t, this.s = i, this.jt = e, this.h();
	    }
	    h() {
	        this.renderer = new k$1(this.D);
	        const t = this.s.getRenderer(), i = this.Bt = {
	            x: 0,
	            y: 0,
	            width: () => t.canvas ? t.canvas.width : 1,
	            height: () => t.canvas ? t.canvas.height : 1
	        };
	        this.Vt = this.D.framebuffer({
	            color: this.D.texture({
	                width: t.canvas ? t.canvas.width : 1,
	                height: t.canvas ? t.canvas.height : 1,
	                wrap: "clamp",
	                mag: "linear",
	                min: "linear"
	            }),
	            depth: !0
	        }), this.vt = new ai(i);
	    }
	    getMap() {
	        return this.s && this.s.getMap();
	    }
	    paint(t, i) {
	        if (!i && i.length) return t;
	        this.Jt();
	        const e = {}, s = this.s.wi;
	        if (!this._i()) return t;
	        this.D.clear({
	            color: [ 0, 0, 0, 0 ],
	            depth: 1,
	            stencil: 0,
	            framebuffer: this.Vt
	        }), delete this.vt.shaderDefines.HAS_FLOODANALYSE, delete this.vt.shaderDefines.HAS_VIEWSHED, 
	        delete this.vt.shaderDefines.HAS_SKYLINE, delete this.vt.shaderDefines.HAS_INSIGHT, 
	        delete this.vt.shaderDefines.HAS_CUT, delete this.vt.shaderDefines.HAS_CROSSCUT, 
	        delete this.vt.shaderDefines.HAS_HEIGHTLIMIT;
	        for (let t = 0; t < s.length; t++) {
	            const n = s[t];
	            if (!n.isEnable()) continue;
	            const r = n.getDefines();
	            at(this.vt.shaderDefines, r);
	            const h = this.getMap(), o = h.width, a = h.height, l = this.Mi(i, n.getExcludeLayers()), c = n.renderAnalysis(l, o, a);
	            c && at(e, c);
	        }
	        return e.sceneMap = t, this.vt.setDefines(this.vt.shaderDefines), this.renderer.render(this.vt, e, null, this.Vt), 
	        this.Vt;
	    }
	    Mi(t, i) {
	        let e = [];
	        for (let s = 0; s < t.length; s++) {
	            if (i.indexOf(t[s].getId()) > -1) continue;
	            const n = t[s].getRenderer();
	            if (n && n.getAnalysisMeshes) {
	                const t = n.getAnalysisMeshes();
	                t.forEach(t => {
	                    t.setUniform("useAnalysis", 1);
	                }), e = e.concat(t);
	            }
	        }
	        return e;
	    }
	    Jt() {
	        const t$1 = t.Util.isFunction(this.Bt.width.data) ? this.Bt.width.data() : this.Bt.width, i = t.Util.isFunction(this.Bt.height.data) ? this.Bt.height.data() : this.Bt.height;
	        !this.Vt || this.Vt.width === t$1 && this.Vt.height === i || this.Vt.resize(t$1, i);
	    }
	    _i() {
	        const t = this.s && this.s.wi;
	        if (!t) return !1;
	        for (let i = 0; i < t.length; i++) if (t[i].isEnable()) return !0;
	        return !1;
	    }
	}

	const ci = [ 0, 0, 0, 0 ], ui = [ 1, 1, -1 ], fi = [ 0, 0 ], di = t => !t.bloom && !t.ssr, pi = t => !t.bloom, gi = t => !t.ssr;

	class mi extends t__namespace.renderer.CanvasRenderer {
	    setToRedraw() {
	        this.setRetireFrames(), super.setToRedraw();
	    }
	    onAdd() {
	        super.onAdd(), this.prepareCanvas();
	    }
	    updateSceneConfig() {
	        this.xi && this.xi.update(), this.yi && this.yi.update(), this.bi && this.bi.update(), 
	        this.setToRedraw();
	    }
	    render(...t) {
	        this.getMap() && this.layer.isVisible() && (this.forEachRenderer(t => {
	            t._replacedDrawFn || (t.draw = this.Si(t.draw), t.drawOnInteracting = this.Ci(t.drawOnInteracting), 
	            t.setToRedraw = this.Ti(t.setToRedraw), t._replacedDrawFn = !0);
	        }), this.prepareRender(), this.prepareCanvas(), this.layer.ki(), this._toRedraw = !1, 
	        this.Ai("render", t), this.Oi(), this.Ii());
	    }
	    prepareCanvas() {
	        super.prepareCanvas(), this.forEachRenderer(t => {
	            t.prepareCanvas();
	        });
	    }
	    drawOnInteracting(...t) {
	        this.getMap() && this.layer.isVisible() && (this.layer.ki(), this._toRedraw = !1, 
	        this.Ai("drawOnInteracting", t), this.Oi(), this.Ii());
	    }
	    Ai(t, i) {
	        this.Ei = "default";
	        const e = this.hasRenderTarget(), s = this.Li(i);
	        if (e && (this.Fi.renderTarget = this.Ri()), this.yi.paint(s), this.drawGround(!0), 
	        !e) return void this.Pi("default", null, t, i, !0);
	        const n = this.glCtx, r = this.layer.ut(), h = r && r.postProcess, o = this.isSSROn(), a = this.isEnableTAA(), l = s.jitter;
	        s.jitter = fi;
	        const c = this.layer.getGroundConfig();
	        if (s.hasSSRGround = !!(o && c && c.enable && c.symbol && c.symbol.ssr), n.resetDrawCalls(), 
	        this.Pi(a ? "fxaaBeforeTaa" : "fxaa", this.Hi, t, i), this.Di = n.getDrawCalls(), 
	        o && this.Gi.drawSSR(this.Ni(), this.Hi), a) {
	            const e = this.getMap(), r = this.Gi.isTaaNeedRedraw() || this.ji || e.getRenderer().isViewChanged();
	            s.jitter = r ? l : this.Bi.getAverage(), s.onlyUpdateDepthInTaa = !r;
	            let o = this.Ui;
	            if (o) o.width === this.Hi.width && o.height === this.Hi.height || o.resize(this.Hi.width, this.Hi.height); else {
	                const t = this.regl, i = this.createFBOInfo(h, this.zi);
	                o = this.Ui = t.framebuffer(i);
	            }
	            n.resetDrawCalls(), this.Pi("taa", o, t, i), this.Vi = n.getDrawCalls(), delete s.onlyUpdateDepthInTaa, 
	            s.jitter = fi;
	            let a = this.Wi;
	            if (a) a.width === this.Hi.width && a.height === this.Hi.height || a.resize(this.Hi.width, this.Hi.height); else {
	                const t = this.regl, i = this.createFBOInfo(h, this.zi);
	                a = this.Wi = t.framebuffer(i);
	            }
	            n.resetDrawCalls(), this.Pi("fxaaAfterTaa", this.Wi, t, i), this.qi = n.getDrawCalls();
	        } else this.Ui && (this.Ui.destroy(), this.Wi.destroy(), delete this.Ui, delete this.Wi, 
	        delete this.qi);
	        h.bloom && h.bloom.enable && (this.$i = this.Gi.drawBloom(this.zi)), 2 === o && this.Gi.drawSSR(this.Ni(), this.Hi, !0), 
	        n.resetDrawCalls(), this.Pi("noAa", this.Yi, t, i), this.Xi = n.getDrawCalls(), 
	        n.resetDrawCalls(), this.Pi("point", this.Ji, t, i, !0), this.bi.renderScene(s), 
	        this.Zi = n.getDrawCalls();
	    }
	    Pi(t, i, e, s, n) {
	        this.Ei = t;
	        const r = this.Li(s);
	        r.renderMode = this.Ei, r.renderTarget && (r.renderTarget.fbo = i), n && (r.isFinalRender = !0), 
	        this.forEachRenderer((n, r) => {
	            r.isVisible() && ("default" === t || !n.supportRenderMode && ("fxaa" === t || "fxaaAfterTaa" === t) || n.supportRenderMode && n.supportRenderMode(t)) && (this.clearStencil(n, i), 
	            n[e].apply(n, s));
	        });
	    }
	    Li(t) {
	        let i = t[0];
	        return vi(i) || (i = t[1]), i !== this.Ki && (this.forEachRenderer((t, i) => {
	            i.isVisible() && t.needRetireFrames && t.needRetireFrames() && this.setRetireFrames();
	        }), this.Fi = this.Qi(i), this.Ki = i, this.te = vi(t[0]) ? null : t[0]), this.Fi;
	    }
	    Oi() {
	        if (!this.isEnableOutline()) return;
	        const t = this.ie(), i = this.glCtx;
	        i.resetDrawCalls(), this.forEachRenderer((i, e) => {
	            e.isVisible() && i.drawOutline && i.drawOutline(t);
	        }), this.ee = i.getDrawCalls();
	    }
	    ie() {
	        const {width: t, height: i} = this.canvas;
	        let e = this.se;
	        if (e) t === e.width && i === e.height || e.resize(t, i); else {
	            const s = this.regl.texture({
	                width: t,
	                height: i,
	                format: "rgba4"
	            });
	            e = this.se = this.regl.framebuffer({
	                width: t,
	                height: i,
	                colors: [ s ],
	                depth: !1,
	                stencil: !1
	            });
	        }
	        return e;
	    }
	    ii(t) {
	        if (this.vi()) {
	            const i = this.ne(t);
	            return i.width !== t.width || i.height !== t.height ? i.resize(t.width, t.height) : this.regl.clear({
	                color: [ 0, 0, 0, 0 ],
	                fbo: i
	            }), i.blit(t), i.color[0];
	        }
	        return t.color[0];
	    }
	    Ni() {
	        if (this.zi.subimage) return this.zi;
	        const {width: t, height: i} = this.zi;
	        if (!this.re) {
	            const e = this.regl, s = {
	                depthStencil: e.texture({
	                    min: "nearest",
	                    mag: "nearest",
	                    mipmap: !1,
	                    type: "depth stencil",
	                    width: t,
	                    height: i,
	                    format: "depth stencil"
	                }),
	                colors: [ e.renderbuffer({
	                    width: t,
	                    height: i,
	                    format: "rgba4"
	                }) ],
	                colorFormat: "rgba4",
	                width: t,
	                height: i
	            };
	            this.re = e.framebuffer(s);
	        }
	        return this.re.width === t && this.re.height === i || this.re.resize(t, i), this.regl.clear({
	            color: [ 0, 0, 0, 0 ],
	            depth: 1,
	            fbo: this.re
	        }), this.re.blit(this.Hi, 256, "nearest"), this.re.depthStencil;
	    }
	    ne(t) {
	        if (this.he || (this.he = []), !t.oe) {
	            const i = this.ae(!0, t.width, t.height), e = this.regl.framebuffer(i);
	            this.he.push(e), t.oe = e;
	        }
	        return t.oe;
	    }
	    vi() {
	        return 0 === this.regl.limits.version.indexOf("WebGL 2.0") && this.layer.options.antialias;
	    }
	    hasRenderTarget() {
	        const t = this.layer.ut(), i = t && t.postProcess;
	        return !(!i || !i.enable);
	    }
	    testIfNeedRedraw() {
	        if (this.layer.options.forceRedrawPerFrame) return !0;
	        if (this._toRedraw) return this._toRedraw = !1, !0;
	        if (this.getMap().isInteracting() && (this.xi && this.xi.isEnable() || this.yi && this.yi.isEnable())) return !0;
	        if (this.bi && this.bi.isEnable()) return !0;
	        const t = this.layer.le;
	        if (t) {
	            const i = t.getRenderer();
	            if (i && i.testIfNeedRedraw()) return this.ce = !0, !0;
	        }
	        const i = this.ue();
	        for (const t of i) {
	            const i = t.getRenderer();
	            if (i && i.testIfNeedRedraw()) return this.ce = !0, !0;
	        }
	        return !1;
	    }
	    isRenderComplete() {
	        const t = this.ue();
	        for (const i of t) {
	            const t = i.getRenderer();
	            if (t && !t.isRenderComplete()) return !1;
	        }
	        return !0;
	    }
	    mustRenderOnInteracting() {
	        const t = this.ue();
	        for (const i of t) {
	            const t = i.getRenderer();
	            if (t && t.mustRenderOnInteracting()) return !0;
	        }
	        return !1;
	    }
	    isCanvasUpdated() {
	        if (super.isCanvasUpdated()) return !0;
	        const t = this.ue();
	        for (const i of t) {
	            const t = i.getRenderer();
	            if (t && t.isCanvasUpdated()) return !0;
	        }
	        return !1;
	    }
	    isBlank() {
	        if (this.xi && this.xi.isEnable()) return !1;
	        if (this.yi && this.yi.isEnable()) return !1;
	        const t = this.layer.getTerrainLayer();
	        if (t) {
	            const i = t.getRenderer();
	            if (i && !i.isBlank()) return !1;
	        }
	        const i = this.ue();
	        for (const t of i) {
	            const i = t.getRenderer();
	            if (i && !i.isBlank()) return !1;
	        }
	        return !0;
	    }
	    createContext() {
	        const t = this.layer, i = t.options.glOptions || {
	            alpha: !0,
	            depth: !0,
	            stencil: !0
	        };
	        i.preserveDrawingBuffer = !0, i.antialias = !!t.options.antialias, this.glOptions = i;
	        const e = this.gl = function(t, i, e) {
	            const s = e ? [ "webgl", "experimental-webgl" ] : [ "webgl2", "webgl", "experimental-webgl" ];
	            let n = null;
	            for (let e = 0; e < s.length; ++e) {
	                try {
	                    n = t.getContext(s[e], i);
	                } catch (t) {}
	                if (n) break;
	            }
	            return n;
	        }(this.canvas, i, t.options.onlyWebGL1);
	        this.fe(e), e.wrap = () => new o(this.gl), this.glCtx = e.wrap(), this.canvas.gl = this.gl, 
	        this.reglGL = e.wrap(), this.regl = m$2({
	            gl: this.reglGL,
	            attributes: i,
	            extensions: t.options.extensions,
	            optionalExtensions: t.options.optionalExtensions
	        }), this.gl.regl = this.regl, this.de = [ 0, 0 ], this.xi = new At(this.regl, this.layer), 
	        this.yi = new Rt(this.regl, this.layer);
	        const s = this.layer.getWeatherConfig();
	        this.bi = new ii(this.regl, t, s), this.pe = new li(this.regl, t);
	        const n = this.layer.ut() || {}, r = n && n.postProcess, h = r && r.antialias && r.antialias.jitterRatio || .2;
	        this.Bi = new kn(h), this.Gi = new ri(this.regl, this.layer, this.Bi), this.o = new yt(this.regl, n, this.layer);
	    }
	    fe() {
	        const t = this.layer, i = this.gl, e = t.options.extensions;
	        e && e.forEach(t => {
	            i.getExtension(t);
	        });
	        const s = t.options.optionalExtensions;
	        s && s.forEach(t => {
	            i.getExtension(t);
	        }), this.gl.clearColor(0, 0, 0, 0);
	    }
	    clearCanvas() {
	        super.clearCanvas(), this.ge();
	    }
	    ge() {
	        const t = this.regl;
	        this.Hi && (t.clear({
	            color: ci,
	            depth: 1,
	            stencil: 255,
	            framebuffer: this.Hi
	        }), t.clear({
	            color: ci,
	            framebuffer: this.Yi
	        }), t.clear({
	            color: ci,
	            framebuffer: this.Ji
	        }), this.Ui && this.Vi && t.clear({
	            color: ci,
	            framebuffer: this.Ui
	        }), this.Wi && this.qi && t.clear({
	            color: ci,
	            framebuffer: this.Wi
	        })), this.se && t.clear({
	            color: ci,
	            framebuffer: this.se
	        }), t.clear({
	            color: ci,
	            depth: 1,
	            stencil: 255
	        });
	    }
	    resizeCanvas() {
	        const t = this.canvas.width, i = this.canvas.height;
	        !this.Hi || this.Hi.width === t && this.Hi.height === i || (super.resizeCanvas(), 
	        this.Hi.resize(t, i), this.Yi.resize(t, i), this.Ji.resize(t, i), this.Ui && this.Ui.resize(t, i), 
	        this.Wi && this.Wi.resize(t, i), this.ge(), this.forEachRenderer(t => {
	            t.canvas && t.resizeCanvas();
	        }));
	    }
	    getCanvasImage() {
	        return this.forEachRenderer(t => {
	            t.getCanvasImage();
	        }), super.getCanvasImage();
	    }
	    ue() {
	        return this.layer.ue();
	    }
	    forEachRenderer(t) {
	        const i = this.ue();
	        for (const e of i) {
	            if (!e.isVisible() || !e.options.beneathTerrain) continue;
	            const i = e.getRenderer();
	            i && t(i, e);
	        }
	        const e = this.layer.le;
	        if (e) {
	            const i = e.getRenderer();
	            i && t(i, e);
	        }
	        for (const e of i) {
	            if (!e.isVisible() || e.options.beneathTerrain) continue;
	            const i = e.getRenderer();
	            i && t(i, e);
	        }
	    }
	    clearStencil(t, i) {
	        const e = {
	            stencil: t.getStencilValue ? t.getStencilValue() : 255
	        };
	        i && (e.framebuffer = i), this.regl.clear(e);
	    }
	    onRemove() {
	        this.canvas.pickingFBO && this.canvas.pickingFBO.destroy && this.canvas.pickingFBO.destroy(), 
	        this.me(), this.xi && (this.xi.dispose(), delete this.xi), this.yi && (this.yi.dispose(), 
	        delete this.yi), this.o && (this.o.dispose(), delete this.o), this.Gi && (this.Gi.dispose(), 
	        delete this.Gi), this.se && (this.se.destroy(), delete this.se), this.bi && (this.bi.dispose(), 
	        delete this.bi), super.onRemove();
	    }
	    me() {
	        if (this.Hi && (this.Hi.destroy(), this.Yi.destroy(), this.Ji.destroy(), this.Ui && (this.Ui.destroy(), 
	        delete this.Ui), this.Wi && (this.Wi.destroy(), delete this.Wi), delete this.Hi, 
	        delete this.Yi, delete this.Ji, this.ve && (this.ve.destroy(), delete this.ve), 
	        this.re && (this.re.destroy(), delete this.re), this.he)) {
	            for (let t = 0; t < this.he.length; t++) this.he[t] && this.he[t].destroy();
	            delete this.he;
	        }
	    }
	    setRetireFrames() {
	        this.ji = !0;
	    }
	    getFrameTime() {
	        return this.Ki;
	    }
	    getFrameEvent() {
	        return this.te;
	    }
	    getFrameContext() {
	        return this.Fi;
	    }
	    drawGround(t) {
	        const i = this.layer.getGroundConfig();
	        if (!i || !i.enable) return !1;
	        if (!this.xi) return !1;
	        const e = this.getFrameContext(), s = e.jitter;
	        e.jitter = fi;
	        const n = this.layer.getPolygonOffsetCount();
	        let r;
	        e.offsetFactor = n + 1, e.offsetUnits = n + 1, t && (r = e.sceneFilter, delete e.sceneFilter);
	        const h = this.xi.paint(e);
	        return this.xi.needToRedraw() && this.setToRedraw(), r && (e.sceneFilter = r), e.jitter = s, 
	        h;
	    }
	    Si(t) {
	        const i = this;
	        return function(e, s) {
	            return (s = s || i.Fi) && s.renderTarget && (s.renderTarget.getFramebuffer = wi, 
	            s.renderTarget.getDepthTexture = _i), t.call(this, e, s);
	        };
	    }
	    Ci(t) {
	        const i = this;
	        return function(e, s, n) {
	            return (n = n || i.Fi) && n.renderTarget && (n.renderTarget.getFramebuffer = wi, 
	            n.renderTarget.getDepthTexture = _i), t.call(this, e, s, n);
	        };
	    }
	    Ti(t) {
	        return function(...i) {
	            return t.apply(this, i);
	        };
	    }
	    isEnableSSR() {
	        const t = this.layer.ut(), i = t && t.postProcess;
	        return i && i.enable && i.ssr && i.ssr.enable;
	    }
	    isSSROn() {
	        const t = this.isEnableSSR(), i = this.getMap();
	        if (!t || i.getPitch() <= -.001) return 0;
	        const e = i.projViewMatrix, s = this.Gi.getPrevSsrProjViewMatrix();
	        return s && exactEquals$5(s, e) ? 1 : 2;
	    }
	    isEnableTAA() {
	        return !1;
	    }
	    isEnableSSAO() {
	        const t = this.layer.ut(), i = t && t.postProcess;
	        return i && i.enable && i.ssao && i.ssao.enable;
	    }
	    isEnableOutline() {
	        const t = this.layer.ut(), i = t && t.postProcess;
	        return i && i.enable && i.outline && i.outline.enable;
	    }
	    isEnableWeather() {
	        const t = this.layer.ut(), i = t && t.weather;
	        return i && i.enable;
	    }
	    we() {
	        const t = this.layer.getMap();
	        if (!this.O) {
	            this.O = {
	                center: t.getCenter(),
	                bearing: t.getBearing(),
	                pitch: t.getPitch(),
	                res: t.getResolution()
	            };
	            let i = !1;
	            if (t.options.lights) {
	                const e = t.getLightManager().getDirectionalLight().direction || ui;
	                this.O.lightDirection = copy$4([], e), i = !0;
	            }
	            return {
	                viewChanged: !0,
	                lightDirectionChanged: i
	            };
	        }
	        const i = t.getResolution() / this.O.res, e = t.coordToContainerPoint(this.O.center), s = this.layer.options.viewMoveThreshold, n = e._sub(t.width / 2, t.height / 2).mag() > s || i < .95 || i > 1.05;
	        let r = !1;
	        if (t.options.lights) {
	            const i = t.getLightManager().getDirectionalLight().direction || ui;
	            r = !equals$4(this.O.lightDirection, i), r && (this.O.lightDirection = copy$4([], i));
	        }
	        return n && (this.O.center = t.getCenter(), this.O.bearing = t.getBearing(), this.O.pitch = t.getPitch(), 
	        this.O.res = t.getResolution()), {
	            viewChanged: n,
	            lightDirectionChanged: r
	        };
	    }
	    Qi(t) {
	        const i = this.layer.ut(), e = i && i.postProcess, s = i && i.weather, n = {
	            timestamp: t,
	            renderMode: this.Ei || "default",
	            includes: {},
	            states: this.we(),
	            testSceneFilter: t => !n.sceneFilter || n.sceneFilter(t),
	            isFinalRender: !1,
	            weather: {
	                fog: s && s.fog
	            }
	        }, r = e && e.antialias && e.antialias.jitterRatio || .2, h = this.Bi;
	        h && h.setRatio(r);
	        const o = this.isSSROn();
	        let a;
	        if (e && e.enable) {
	            if (this.isEnableTAA()) {
	                (this.getMap().isInteracting() || this.ji) && h.reset(), h.getJitter(this.de), h.frame();
	            } else set(this.de, 0, 0);
	            n.jitter = this.de;
	            const t = e.bloom && e.bloom.enable;
	            t && o ? (n.bloom = 1, n.sceneFilter = di) : t ? (n.bloom = 1, n.sceneFilter = pi) : o && (n.sceneFilter = gi), 
	            a = this.Ri(), a && (n.renderTarget = a);
	        } else this.me();
	        return "noAa" !== this.Ei && (this._e = this.Me(n), this._e && (n.includes.shadow = 1), 
	        this.xe = this.ye(n)), this._e && (n.shadow = this._e, n.includes.shadow = 1), n.states.includesChanged = this.xe, 
	        e && e.enable && this.Gi && this.Gi.setContextIncludes(n), n;
	    }
	    be(t) {
	        const i = this.ue().filter(t => t.isVisible());
	        return this.pe.paint(t, i);
	    }
	    ye(t) {
	        let i = !1;
	        const e = Object.keys(t.includes), s = this.Se;
	        if (s) {
	            const t = e.filter(t => -1 === s.indexOf(t)).concat(s.filter(t => -1 === e.indexOf(t)));
	            t.length && (i = t.reduce((t, i) => (t[i] = 1, t), {}));
	        }
	        return this.Se = e, i;
	    }
	    Me(t) {
	        const i = this.layer.ut();
	        if (!i || !i.shadow || !i.shadow.enable) return this.o && (this.o.dispose(), delete this.o), 
	        null;
	        this.o || (this.o = new yt(this.regl, this.layer.ut() || {}, this.layer));
	        const e = {
	            config: i.shadow,
	            defines: this.o.getDefines(),
	            uniformDeclares: yt.getUniformDeclares()
	        };
	        return e.renderUniforms = this.Ce(t), e;
	    }
	    Ce(t) {
	        const i = t.renderTarget && t.renderTarget.fbo, e = this.layer.ut(), s = [];
	        let n = t.states.lightDirectionChanged || t.states.viewChanged;
	        this.forEachRenderer((t, i) => {
	            if (!t.getShadowMeshes || !i.isVisible()) return;
	            const e = t.getShadowMeshes();
	            if (Array.isArray(e)) for (let t = 0; t < e.length; t++) e[t].needUpdateShadow && (n = !0), 
	            e[t].needUpdateShadow = !1, s.push(e[t]);
	        }), this.Te || (this.Te = new Ke$1), this.Te.setMeshes(s);
	        const r = this.getMap(), h = e.shadow, o = r.getLightManager(), a = o && o.getDirectionalLight().direction || ui, l = !e.ground || !e.ground.enable;
	        return this.o.render(l, r.projMatrix, r.viewMatrix, h.color, h.opacity, a, this.Te, this.de, i, n);
	    }
	    ke(t) {
	        let i = [];
	        if (this.forEachRenderer((t, e) => {
	            if (!t.getAnalysisMeshes || !e.isVisible()) return;
	            const s = t.getAnalysisMeshes();
	            i = i.concat(s);
	        }), this.xi) {
	            const t = this.xi.getRenderMeshes();
	            i = i.concat(t);
	        }
	        const e = this.layer.getWeatherConfig();
	        return this.bi.paint(t, i, e);
	    }
	    getGroundMesh() {
	        if (this.xi) {
	            return this.xi.getRenderMeshes();
	        }
	        return [];
	    }
	    Ri() {
	        const t = this.layer.ut(), i = t && t.postProcess;
	        if (!this.Hi) {
	            const t = this.regl;
	            let e = this.zi;
	            (!e || !e._texture || e._texture.refCount <= 0) && (e = null);
	            const s = this.createFBOInfo(i, e);
	            this.zi = s.depth || s.depthStencil, this.Hi = t.framebuffer(s);
	            const n = this.createFBOInfo(i, this.zi);
	            this.Yi = t.framebuffer(n);
	            const r = this.createFBOInfo(i, this.zi);
	            this.Ji = t.framebuffer(r), this.ge();
	        }
	        return {
	            fbo: this.Hi
	        };
	    }
	    ae(t, i, e) {
	        i = i || this.canvas.width, e = e || this.canvas.height;
	        const s = this.regl, n = this.vi();
	        let r;
	        if (!t && n) r = s.renderbuffer({
	            width: i,
	            height: e,
	            samples: this.layer.options.multiSamples,
	            format: "rgba8"
	        }); else {
	            const t = "uint8";
	            r = s.texture({
	                min: "nearest",
	                mag: "nearest",
	                type: t,
	                width: i,
	                height: e
	            });
	        }
	        return {
	            width: i,
	            height: e,
	            colors: [ r ],
	            colorFormat: n ? "rgba8" : "rgba"
	        };
	    }
	    createFBOInfo(t, i) {
	        const {width: e, height: s} = this.canvas, n = this.regl, r = this.ae(), h = this.vi(), o = n.hasExtension("WEBGL_depth_texture");
	        if (h) {
	            const t = i || n.renderbuffer({
	                width: e,
	                height: s,
	                format: "depth24 stencil8",
	                samples: this.layer.options.multiSamples
	            });
	            r.depthStencil = t;
	        } else if (o) {
	            const t = i || n.texture({
	                min: "nearest",
	                mag: "nearest",
	                mipmap: !1,
	                type: "depth stencil",
	                width: e,
	                height: s,
	                format: "depth stencil"
	            });
	            r.depthStencil = t;
	        } else {
	            const t = i || n.renderbuffer({
	                width: e,
	                height: s,
	                format: "depth stencil"
	            });
	            r.depthStencil = t;
	        }
	        return r;
	    }
	    Ii() {
	        if (!this.Hi) return void (this.ji = !1);
	        const t = this.layer.ut(), i = t && t.postProcess;
	        if (!i || !i.enable) {
	            if (this.isEnableWeather()) throw new Error("you must enable the post process to turn on weather");
	            return;
	        }
	        this.layer.fire("postprocessstart");
	        const e = this.layer.getMap();
	        let s;
	        if (this.isEnableTAA()) {
	            const t = this.ji || e.getRenderer().isViewChanged();
	            t && this.layer.fire("taastart");
	            const {outputTex: i, redraw: n} = this.Gi.taa(this.ii(this.Ui), this.Ni(), {
	                projMatrix: e.projMatrix,
	                needClear: t
	            });
	            s = i, n ? this.setToRedraw() : this.layer.fire("taaend"), this.ji = !1;
	        }
	        let n = i.sharpen && i.sharpen.factor;
	        n || 0 === n || (n = .2);
	        let r = 0, h = .2, o = .3, a = 1, l = [ 1, 1, 0 ];
	        i.outline && (r = +!!i.outline.enable, h = Mi(i.outline, "highlightFactor", h), 
	        o = Mi(i.outline, "outlineFactor", o), a = Mi(i.outline, "outlineWidth", a), l = Mi(i.outline, "outlineColor", l));
	        const c = this.isEnableSSAO(), u = i.ssr && i.ssr.enable, f = i.bloom && i.bloom.enable, d = f && this.$i, p = +!(!i.antialias || !i.antialias.enable), g = this.pe._i(), m = this.bi.si(), v = c || f || u || g || m;
	        let w = this.ve;
	        if (v) {
	            if (!w) {
	                const t = this.ae();
	                this.vi() && (t.depthStencil = this.regl.renderbuffer({
	                    width: this.canvas.width,
	                    height: this.canvas.height,
	                    samples: this.layer.options.multiSamples,
	                    format: "depth24 stencil8"
	                })), w = this.ve = this.regl.framebuffer(t);
	            }
	            const {width: t, height: i} = this.canvas;
	            w.width === t && w.height === i || w.resize(t, i);
	        } else w = null, this.ve && (this.ve.destroy(), delete this.ve);
	        let _ = this.ii(this.Hi);
	        const M = this.Xi && this.ii(this.Yi), x = this.Zi && this.ii(this.Ji);
	        if (this.Gi.fxaa(w, _, !d && M, !d && x, s, this.qi && this.Wi && this.ii(this.Wi), p, +!(!i.toneMapping || !i.toneMapping.enable), +!(v || !i.sharpen || !i.sharpen.enable), e.getDevicePixelRatio(), n, r && this.ee > 0 && this.ie(), h, o, a, l), 
	        w && (_ = this.ii(w)), c && (this.qi || this.Vi || this.Di) && (_ = this.Gi.ssao(_, this.Ni(), {
	            projMatrix: e.projMatrix,
	            cameraNear: e.cameraNear,
	            cameraFar: e.cameraFar,
	            ssaoBias: i.ssao && i.ssao.bias || 10,
	            ssaoRadius: i.ssao && i.ssao.radius || 100,
	            ssaoIntensity: i.ssao && i.ssao.intensity || .5
	        })), f && this.$i) {
	            const t = i.bloom, e = +t.threshold || 0, s = Mi(t, "factor", 1), n = Mi(t, "radius", 1);
	            _ = this.Gi.bloom(_, M, x, e, s, n, p);
	        }
	        if (u && (this.Gi.genSsrMipmap(_, this.Ni()), this.ce)) {
	            const t = this.ji;
	            this.setToRedraw(), this.ji = t, this.ce = !1;
	        }
	        this.pe && (_ = this.be(_)), this.isEnableWeather() && (_ = this.ke(_)), v && this.Gi.renderFBOToScreen(_, +!(!i.sharpen || !i.sharpen.enable), n, e.getDevicePixelRatio()), 
	        this.layer.fire("postprocessend");
	    }
	}

	function vi(t) {
	    return "number" == typeof t && !isNaN(t);
	}

	function wi(t) {
	    return t._framebuffer.framebuffer;
	}

	function _i(t) {
	    return t.depthStencil._texture.texture;
	}

	function Mi(t, i, e) {
	    return null == t[i] ? e : t[i];
	}

	class xi extends t__namespace.worker.Actor {
	    constructor(t) {
	        super("@maptalks/terrain"), this.mapId = t;
	    }
	    checkUrl(i) {
	        return i && t__namespace.Util.isString(i) ? t__namespace.Util.getAbsoluteURL(i) : i;
	    }
	    fetchTerrain(t, i, e) {
	        t = this.checkUrl(t);
	        const s = {
	            actorId: this.actorId,
	            mapId: this.mapId,
	            command: "fetchTerrain",
	            params: {
	                url: t,
	                origin: location.origin,
	                terrainWidth: i.terrainWidth,
	                type: i.type,
	                accessToken: i.accessToken,
	                cesiumIonTokenURL: i.cesiumIonTokenURL,
	                error: i.error
	            }
	        };
	        this.send(s, null, (t, i) => {
	            t ? e(t) : e(t, i);
	        });
	    }
	    abortTerrain(t, i) {
	        const e = {
	            actorId: this.actorId,
	            mapId: this.mapId,
	            command: "abortTerrain",
	            params: {
	                url: t
	            }
	        };
	        this.broadcast(e, null, i);
	    }
	    addLayer(t, i, e) {
	        const s = {
	            actorId: this.actorId,
	            mapId: this.mapId,
	            layerId: t,
	            command: "addLayer",
	            params: {}
	        };
	        this.broadcast(s, null, e);
	    }
	    createTerrainMesh(t, i) {
	        const e = {
	            actorId: this.actorId,
	            command: "createTerrainMesh",
	            params: t
	        };
	        this.send(e, [ t.terrainHeights.data.buffer ], (t, e) => {
	            t ? i(t) : i(t, e);
	        });
	    }
	    removeLayer(t, i, e) {
	        const s = {
	            mapId: this.mapId,
	            layerId: t,
	            command: "removeLayer"
	        };
	        this.broadcast(s, null, e);
	    }
	}

	class yi {
	    constructor(t = 257) {
	        this.gridSize = t;
	        const i = t - 1;
	        if (i & i - 1) throw new Error(`Expected grid size to be 2^n+1, got ${t}.`);
	        this.numTriangles = i * i * 2 - 2, this.numParentTriangles = this.numTriangles - i * i, 
	        this.indices = new Uint32Array(this.gridSize * this.gridSize), this.coords = new Uint16Array(4 * this.numTriangles);
	        for (let t = 0; t < this.numTriangles; t++) {
	            let e = t + 2, s = 0, n = 0, r = 0, h = 0, o = 0, a = 0;
	            for (1 & e ? r = h = o = i : s = n = a = i; (e >>= 1) > 1; ) {
	                const t = s + r >> 1, i = n + h >> 1;
	                1 & e ? (r = s, h = n, s = o, n = a) : (s = r, n = h, r = o, h = a), o = t, a = i;
	            }
	            const l = 4 * t;
	            this.coords[l + 0] = s, this.coords[l + 1] = n, this.coords[l + 2] = r, this.coords[l + 3] = h;
	        }
	    }
	    createTile(t) {
	        return new bi(t, this);
	    }
	}

	class bi {
	    constructor(t, i) {
	        const e = i.gridSize;
	        if (t.length !== e * e) throw new Error(`Expected terrain data of length ${e * e} (${e} x ${e}), got ${t.length}.`);
	        this.terrain = t, this.martini = i, this.errors = new Float32Array(t.length), this.update();
	    }
	    update() {
	        const {numTriangles: t, numParentTriangles: i, coords: e, gridSize: s} = this.martini, {terrain: n, errors: r} = this;
	        for (let h = t - 1; h >= 0; h--) {
	            const t = 4 * h, o = e[t + 0], a = e[t + 1], l = e[t + 2], c = e[t + 3], u = o + l >> 1, f = a + c >> 1, d = u + f - a, p = f + o - u, g = (n[a * s + o] + n[c * s + l]) / 2, m = f * s + u, v = Math.abs(g - n[m]);
	            if (r[m] = Math.max(r[m], v), h < i) {
	                const t = (a + p >> 1) * s + (o + d >> 1), i = (c + p >> 1) * s + (l + d >> 1);
	                r[m] = Math.max(r[m], r[t], r[i]);
	            }
	        }
	    }
	    getMesh(t = 0) {
	        const {gridSize: i, indices: e} = this.martini, {errors: s} = this;
	        let n = 0, r = 0;
	        const h = i - 1;
	        function o(h, a, l, c, u, f) {
	            const d = h + l >> 1, p = a + c >> 1;
	            Math.abs(h - u) + Math.abs(a - f) > 1 && s[p * i + d] > t ? (o(u, f, h, a, d, p), 
	            o(l, c, u, f, d, p)) : (e[a * i + h] = e[a * i + h] || ++n, e[c * i + l] = e[c * i + l] || ++n, 
	            e[f * i + u] = e[f * i + u] || ++n, r++);
	        }
	        e.fill(0), o(0, 0, h, h, h, 0), o(h, h, 0, 0, 0, h);
	        const a = new Uint16Array(2 * n), l = new Uint32Array(3 * r);
	        let c = 0;
	        function u(n, r, h, o, f, d) {
	            const p = n + h >> 1, g = r + o >> 1;
	            if (Math.abs(n - f) + Math.abs(r - d) > 1 && s[g * i + p] > t) u(f, d, n, r, p, g), 
	            u(h, o, f, d, p, g); else {
	                const t = e[r * i + n] - 1, s = e[o * i + h] - 1, u = e[d * i + f] - 1;
	                a[2 * t] = n, a[2 * t + 1] = r, a[2 * s] = h, a[2 * s + 1] = o, a[2 * u] = f, a[2 * u + 1] = d, 
	                l[c++] = t, l[c++] = s, l[c++] = u;
	            }
	        }
	        return u(0, 0, h, h, h, 0), u(h, h, 0, 0, 0, h), {
	            vertices: a,
	            triangles: l
	        };
	    }
	    getMeshWithSkirts(t = 0, i) {
	        const {gridSize: e, indices: s} = this.martini, {errors: n} = this;
	        let r = 0, h = 0;
	        const o = e - 1;
	        let a, l, c = 0;
	        const u = [], f = [], d = [], p = [];
	        function g(i, m, v, w, _, M) {
	            const x = i + v >> 1, y = m + w >> 1;
	            Math.abs(i - _) + Math.abs(m - M) > 1 && n[y * e + x] > t ? (g(_, M, i, m, x, y), 
	            g(v, w, _, M, x, y)) : (a = m * e + i, l = w * e + v, c = M * e + _, 0 === s[a] && (0 === i ? u.push(r) : i === o && f.push(r), 
	            0 === m ? d.push(r) : m === o && p.push(r), s[a] = ++r), 0 === s[l] && (0 === v ? u.push(r) : v === o && f.push(r), 
	            0 === w ? d.push(r) : w === o && p.push(r), s[l] = ++r), 0 === s[c] && (0 === _ ? u.push(r) : _ === o && f.push(r), 
	            0 === M ? d.push(r) : M === o && p.push(r), s[c] = ++r), h++);
	        }
	        let m;
	        s.fill(0), g(0, 0, o, o, o, 0), g(o, o, 0, 0, 0, o), m = i ? 2 * (r + 3 * u.length - 2 + 3 * f.length - 2 + 3 * d.length - 2 + 3 * p.length - 2) : 2 * (r + u.length + f.length + d.length + p.length);
	        const v = 3 * (h + 2 * (u.length - 1) + 2 * (f.length - 1) + 2 * (d.length - 1) + 2 * (p.length - 1)), w = new Uint16Array(m), _ = new Uint32Array(v);
	        let M = 0;
	        function x(i, r, h, o, a, l) {
	            const c = i + h >> 1, u = r + o >> 1;
	            if (Math.abs(i - a) + Math.abs(r - l) > 1 && n[u * e + c] > t) x(a, l, i, r, c, u), 
	            x(h, o, a, l, c, u); else {
	                const t = s[r * e + i] - 1, n = s[o * e + h] - 1, c = s[l * e + a] - 1;
	                w[2 * t] = i, w[2 * t + 1] = r, w[2 * n] = h, w[2 * n + 1] = o, w[2 * c] = a, w[2 * c + 1] = l, 
	                _[M++] = t, _[M++] = n, _[M++] = c;
	            }
	        }
	        x(0, 0, o, o, o, 0), x(o, o, 0, 0, 0, o), u.sort((t, i) => w[2 * t + 1] - w[2 * i + 1]), 
	        f.sort((t, i) => w[2 * i + 1] - w[2 * t + 1]), d.sort((t, i) => w[2 * i] - w[2 * t]), 
	        p.sort((t, i) => w[2 * t] - w[2 * i]);
	        let y, b, S, C, T = 2 * r, k = 0;
	        function A(t) {
	            k = t.length;
	            for (let e = 0; e < k - 1; e++) y = t[e], b = t[e + 1], S = T / 2, C = (T + (i ? 6 : 2)) / 2, 
	            w[T++] = 2 * y, w[T++] = 2 * y + 1, i && (w[T++] = 2 * y, w[T++] = 2 * y + 1, w[T++] = 2 * b, 
	            w[T++] = 2 * b + 1), i ? (_[M++] = S + 1, _[M++] = S, _[M++] = S + 2, _[M++] = S, 
	            _[M++] = C, _[M++] = S + 2) : (_[M++] = y, _[M++] = S, _[M++] = b, _[M++] = S, _[M++] = C, 
	            _[M++] = b);
	            w[T++] = 2 * t[k - 1], w[T++] = 2 * t[k - 1] + 1;
	        }
	        A(u);
	        const O = T;
	        A(f);
	        const I = T;
	        A(d);
	        const E = T;
	        A(p);
	        return {
	            vertices: w,
	            triangles: _,
	            numVerticesWithoutSkirts: r,
	            numTrianglesWithoutSkirts: h,
	            leftSkirtIndex: O,
	            rightSkirtIndex: I,
	            bottomSkirtIndex: E,
	            topSkirtIndex: T
	        };
	    }
	}

	const Si = {};

	function Ci(t, i, e, s) {
	    let n = Si[e];
	    n || (n = Si[e] = new yi(e));
	    const r = n.createTile(i), h = s ? r.getMeshWithSkirts(t, !0) : r.getMesh(t), {triangles: o, vertices: a, leftSkirtIndex: l, rightSkirtIndex: c, bottomSkirtIndex: u, topSkirtIndex: f} = h;
	    let {numVerticesWithoutSkirts: d, numTrianglesWithoutSkirts: p} = h;
	    d || (d = a.legnth / 3, p = o.length / 3);
	    const g = a.length / 2, m = new Float32Array(3 * g), v = new Float32Array(2 * g);
	    let w = 1 / 0, _ = -1 / 0;
	    const M = e - 1;
	    for (let t = 0; t < g; t++) {
	        const s = a[2 * t], n = a[2 * t + 1];
	        if (t >= d) {
	            const i = s / 2 * 3;
	            let e, n = .001;
	            (t - (t < l / 2 ? d : t < c / 2 ? l / 2 : t < u / 2 ? c / 2 : u / 2)) % 3 == 0 ? (e = 0, 
	            n = 0) : e = m[i + 2];
	            m[3 * t] = m[i], m[3 * t + 1] = m[i + 1], m[3 * t + 2] = e, v[2 * t] = m[i] / M + n, 
	            v[2 * t + 1] = -m[i + 1] / M + n;
	        } else m[3 * t] = 1 * s, m[3 * t + 1] = 1 * -n, m[3 * t + 2] = i[n * e + s], v[2 * t] = s / M, 
	        v[2 * t + 1] = n / M;
	        const r = m[m.length - 1];
	        r < w && (w = r), r > _ && (_ = r);
	    }
	    return {
	        positions: m,
	        texcoords: v,
	        triangles: o,
	        leftSkirtIndex: l,
	        rightSkirtIndex: c,
	        bottomSkirtIndex: u,
	        topSkirtIndex: f,
	        numTrianglesWithoutSkirts: p,
	        numVerticesWithoutSkirts: d,
	        minHeight: w,
	        maxHeight: _,
	        terrainWidth: e
	    };
	}

	function Ti(t, i, e, s, n, r, h, o, a) {
	    const l = {};
	    for (let c = 0; c < a; c++) l[c + ""] = Ai(t, i, e, s, n, r, h, o, c);
	    return l;
	}

	const ki = [];

	function Ai(t, i, e, s, n, r, h, o, a) {
	    if ((s -= a) <= 0) return ki;
	    const l = t.getTileSize().width, c = t._getTileOffset(s, n), u = r[0] - c[0], f = c[1] - r[1], d = t._getTileConfig(), p = t.getSpatialReference().getResolution(s), g = d.tileSystem.scale.y;
	    let m = 0, v = 0, w = o /= Math.pow(2, a), _ = o;
	    if (u < 0 ? w += Math.ceil(-u / l - 1e-7) : u > 0 && (m -= Math.ceil(u / l - 1e-7)), 
	    f > 0 ? v -= Math.ceil(f / l - 1e-7) : f < 0 && (_ += Math.ceil(-f / l - 1e-7)), 
	    0 === m && 0 === v && w <= 1 && _ <= 1) {
	        const n = Math.floor(i * o);
	        let r = Math.floor(e * o);
	        const a = r;
	        return g !== h && (r = Ei(d, r, p)), [ {
	            x: n,
	            y: r,
	            skinY: a,
	            z: s,
	            offset: c,
	            tileSize: l,
	            id: t._getTileId(n, r, s)
	        } ];
	    }
	    const M = [];
	    for (let n = m; n < w; n++) for (let r = v; r < _; r++) {
	        const a = i * o + n;
	        let u = e * o + r;
	        const f = u;
	        g !== h && (u = Ei(d, u, p)), M.push({
	            x: a,
	            y: u,
	            skinY: f,
	            z: s,
	            offset: c,
	            tileSize: l,
	            id: t._getTileId(a, u, s)
	        });
	    }
	    return M;
	}

	function Oi(t, i, e, s) {
	    let n = t / e * s / i;
	    return n < 1 ? (n = 1 / n, n = 1 / Math.round(n)) : n = Math.round(n), n;
	}

	function Ii(t, i, e) {
	    const s = t.getResolution(i), n = i - Math.log(e / s) * Math.LOG2E;
	    return {
	        zoom: n,
	        res: t.getResolution(n)
	    };
	}

	function Ei(t, i, e) {
	    const s = t.fullExtent, n = t.tileSize.width, r = Math.max(s.top, s.bottom), h = Math.min(s.top, s.bottom);
	    return Math.ceil(r / n / e) - 1 - Math.floor(h / n / e) - i;
	}

	function Li(t, i) {
	    const e = i * i, s = 0 !== t ? new Float32Array(e) : new Uint8Array(e);
	    return s.fill(t), {
	        data: s,
	        width: i,
	        height: i,
	        max: t,
	        min: t
	    };
	}

	new t__namespace.Point(0, 0);

	const Fi = Li(0, 5), Ri = Ci(1, Fi.data, Fi.width, !0);

	Ri.empty = !0;

	const Pi = [ !1, !1, !1, !1 ], Hi = [ !0, !0, !0, !0 ], Di = [], Gi = [];

	class Ni {
	    constructor(t) {
	        this.layer = t, this.regl = t.getRenderer().regl, this.renderer = new k$1(this.regl), 
	        this.Ae = new Ke$1;
	        const i = new Uint8Array(16);
	        i.fill(255), this.Oe = this.regl.texture({
	            width: 2,
	            height: 2,
	            data: i
	        }), this.Ie = new Ve$1(this.Oe), this.Ee();
	    }
	    setToRedraw() {
	        this.layer.getRenderer().setToRedraw();
	    }
	    getMap() {
	        return this.layer.getMap();
	    }
	    startFrame() {
	        this.shader || this.initShader(), this.Ae.clear();
	    }
	    createTerrainMesh(t, i) {
	        const {mesh: e, image: s} = i;
	        let n = i.terrainMesh;
	        const {positions: r, texcoords: h, triangles: o, empty: a} = e;
	        if (n && n.geometry !== this.Le) n.geometry.updateData("aPosition", r), n.geometry.updateData("aTexCoord", h), 
	        n.geometry.setElements(o); else {
	            const t = a ? this.Le : new Q$1({
	                aPosition: r,
	                aTexCoord: h
	            }, o, 0);
	            n ? n.geometry = t : (n = new ke$1(t, null, {
	                disableVAO: !0
	            }), t.generateBuffers(this.regl));
	        }
	        if (!n.uniforms.skin) {
	            const t = this.getEmptyTexture();
	            n.setUniform("skin", t);
	        }
	        return dt(n.uniforms, "minAltitude") || Object.defineProperty(n.uniforms, "minAltitude", {
	            enumerable: !0,
	            get: () => i.minAltitude || 0
	        }), n.setUniform("heightTexture", s), this.Fe(n), this.prepareMesh(n, t, e), n;
	    }
	    Fe(t) {
	        const i = this.layer.getRenderer();
	        i && i.updateMaskDefines(t);
	    }
	    Re(t) {
	        const i = this.Pe(100) / 100, e = identity$2(t);
	        return scale$5(e, e, [ 1, 1, i ]), e;
	    }
	    He(t, i, e) {
	        const s = this.getMap(), n = this.layer.getTileSize().width, r = i.res / s.getGLRes(), h = n / (e - 1), {extent2d: o, offset: c} = i;
	        set$4(Di, (o.xmin - c[0]) * r, (i.extent2d.ymax - c[1]) * r, 0);
	        const u = identity$2(t);
	        return translate$1(u, u, Di), set$4(Gi, r * h, r * h, 1), scale$5(u, u, Gi), u;
	    }
	    prepareMesh(t, i, e) {
	        const {triangles: s, numTrianglesWithoutSkirts: n, terrainWidth: r} = e;
	        t.localTransform = this.He(t.localTransform || [], i, r), t.positionMatrix = this.Re(t.positionMatrix || []), 
	        t.properties.skirtOffset = 3 * n, t.properties.skirtCount = s.length - 3 * n, t.properties.z = i.z, 
	        t.properties.minHeight = e.minHeight, t.properties.maxHeight = e.maxHeight, t.properties.terrainWidth = r, 
	        t.castShadow = !1;
	    }
	    addTerrainImage(t, i) {
	        const e = i.terrainMesh;
	        e && e.geometry && i.skin && (e.setUniform("skin", i.skin.color[0]), e.setUniform("polygonOpacity", 1), 
	        this.Ae.addMesh(e));
	    }
	    endFrame(t) {
	        this.updateIBLDefines(this.shader);
	        let i = 0;
	        const e = this.getUniformValues(), s = this.De(t);
	        return e.cullFace = "back", e.enableStencil = !1, e.colorMask = !0, e.depthMask = !0, 
	        i += this.renderer.render(this.shader, e, this.Ae, s), i;
	    }
	    delete() {
	        this.shader && (this.shader.dispose(), delete this.shader), this.Oe && (this.Oe.destroy(), 
	        delete this.Oe), this.Le && (this.Le.dispose(), delete this.Le);
	    }
	    deleteMesh(t) {
	        if (!t) return;
	        const i = t.geometry;
	        t.dispose(), i !== this.Le && i.dispose();
	    }
	    initShader() {
	        const t = [], i = [];
	        this.shader = new vn({
	            vert: "#define SHADER_NAME TERRAIN_MESH\nattribute vec3 aPosition;\nattribute vec2 aTexCoord;\nuniform float minAltitude;\nuniform mat4 projViewModelMatrix;\nuniform mat4 projMatrix;\nuniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 positionMatrix;\nuniform float heightScale;\nvarying vec2 vUv;\n#include <mask_vert>\nvoid main() {\n    vec3 position = vec3(aPosition.xy, (aPosition.z + minAltitude) * heightScale);\n    #ifdef HAS_MASK_EXTENT\n        gl_Position = projMatrix * getMaskPosition(positionMatrix * vec4(position, 1.0), modelMatrix);\n    #else\n        gl_Position = projViewModelMatrix * positionMatrix * vec4(position, 1.0);\n    #endif\n    vUv = aTexCoord;\n}",
	            frag: "#define SHADER_NAME TERRAIN_MESH\nprecision mediump float;\nuniform sampler2D skin;\nuniform float polygonOpacity;\nvarying vec2 vUv;\n#include <mask_frag>\nvoid main() {\n    vec2 uv = vec2(vUv);\n    uv.y = 1.0 - uv.y;\n    vec4 color = texture2D(skin, uv);\n    gl_FragColor = color * polygonOpacity;\n    #ifdef HAS_MASK_EXTENT\n      gl_FragColor = setMask(gl_FragColor);\n    #endif\n}",
	            uniforms: [ {
	                name: "modelViewMatrix",
	                type: "function",
	                fn: function(t, e) {
	                    return multiply$5(i, e.viewMatrix, e.modelMatrix);
	                }
	            }, {
	                name: "projViewModelMatrix",
	                type: "function",
	                fn: function(i, e) {
	                    return multiply$5(t, e.projViewMatrix, e.modelMatrix);
	                }
	            } ],
	            extraCommandProps: this.getExtraCommandProps()
	        });
	    }
	    getExtraCommandProps() {
	        const t = this.layer.getRenderer().canvas;
	        return {
	            viewport: {
	                x: 0,
	                y: 0,
	                width: () => t ? t.width : 1,
	                height: () => t ? t.height : 1
	            },
	            colorMask: (t, i) => !1 === i.colorMask ? Pi : Hi,
	            stencil: {
	                enable: (t, i) => i.enableStencil,
	                func: {
	                    cmp: () => "<=",
	                    ref: (t, i) => i.stencilRef
	                },
	                op: {
	                    fail: "keep",
	                    zfail: "keep",
	                    zpass: "replace"
	                }
	            },
	            cull: {
	                enable: !0,
	                face: (t, i) => i.cullFace
	            },
	            depth: {
	                enable: !0,
	                mask: (t, i) => this.layer.options.depthMask && i.depthMask,
	                func: this.layer.options.depthFunc || "<="
	            },
	            blend: {
	                enable: !0,
	                func: {
	                    src: this.layer.options.blendSrc,
	                    dst: this.layer.options.blendDst
	                },
	                equation: "add"
	            }
	        };
	    }
	    De(t) {
	        return t && t.renderTarget && t.renderTarget.fbo;
	    }
	    getUniformValues() {
	        const t = this.getMap(), i = t.projViewMatrix, e = this.layer.getRenderer().getMaskUniforms(), s = {
	            viewMatrix: t.viewMatrix,
	            projMatrix: t.projMatrix,
	            projViewMatrix: i,
	            heightScale: 1
	        };
	        return at(s, e), s;
	    }
	    Pe(t) {
	        const i = this.layer.getMap();
	        if (!i) return null;
	        return i.altitudeToPoint(t, i.getGLRes());
	    }
	    getEmptyTexture() {
	        return this.Oe;
	    }
	    hasIBL() {
	        const t = this.getMap().getLightManager();
	        return !!(t && t.getAmbientResource());
	    }
	    updateIBLDefines(t) {
	        const i = t.shaderDefines;
	        let e = !1;
	        this.hasIBL() ? i[[ "HAS_IBL_LIGHTING" ]] || (i.HAS_IBL_LIGHTING = 1, e = !0) : i[[ "HAS_IBL_LIGHTING" ]] && (delete i.HAS_IBL_LIGHTING, 
	        e = !0), e && (t.shaderDefines = i);
	    }
	    Ee() {
	        const t = Ri, {positions: i, texcoords: e, triangles: s} = t;
	        this.Le = new Q$1({
	            aPosition: i,
	            aTexCoord: e
	        }, s, 0), this.Le.generateBuffers(this.regl);
	    }
	}

	const {getIBLResOnCanvas: ji, getPBRUniforms: Bi, loginIBLResOnCanvas: Ui, logoutIBLResOnCanvas: zi} = ai$1.PBRUtils, Vi = {
	    baseColorFactor: [ 1, 1, 1, 1 ],
	    emissiveFactor: [ 0, 0, 0 ],
	    baseColorIntensity: 1,
	    emitColorFactor: 1,
	    roughnessFactor: 1,
	    metallicFactor: 0,
	    emitMultiplicative: 1,
	    outputSRGB: 1,
	    hsv: [ 0, 0, 0 ],
	    contrast: 1,
	    alphaTest: 0
	};

	class Wi extends Ni {
	    constructor(...t) {
	        super(...t), this.createIBLTextures(), this.Ge = 0;
	    }
	    updateMaterial(t, i) {
	        this.Ge = i, this.Ne = this.Ne || {}, at(this.Ne, t), this.setToRedraw();
	    }
	    setMaterial(t, i) {
	        this.Ge = i, this.Ne = at({}, Vi, t), this.setToRedraw();
	    }
	    createIBLTextures() {
	        const t = this.getMap().getRenderer().canvas;
	        Ui(t, this.regl, this.getMap()), this.layer.fire("iblupdated");
	    }
	    disposeIBLTextures() {
	        const t = this.getMap().getRenderer().canvas;
	        zi(t, this.getMap());
	    }
	    createTerrainMesh(t, i) {
	        const {mesh: e, image: s} = i, {positions: n, texcoords: r, triangles: h, leftSkirtIndex: o, rightSkirtIndex: a, bottomSkirtIndex: l, numVerticesWithoutSkirts: c} = e, u = new Int8Array(n.length);
	        for (let t = 2; t < u.length; t += 3) t < 3 * c ? u[t] = 1 : t < o / 2 * 3 ? u[t - 2] = -1 : t < a / 2 * 3 ? u[t - 2] = 1 : u[t - 1] = t < l / 2 * 3 ? -1 : 1;
	        const f = new Q$1({
	            aPosition: n,
	            aTexCoord: r,
	            aNormal: u
	        }, h, 0);
	        let d;
	        f.createTangent(), delete f.data.aNormal, f.generateBuffers(this.regl), d = s ? this.regl.texture({
	            width: s.width,
	            height: s.height,
	            data: s,
	            min: "linear",
	            mag: "linear"
	        }) : this.getEmptyTexture();
	        const p = this.getEmptyTexture(), m = at({}, Vi, this.layer.options.material || {});
	        m.skinTexture = p, m.terrainHeightTexture = d;
	        const v = new ai$1.StandardMaterial(m), w = new ke$1(f, v);
	        w.properties.matVer = this.Ge;
	        const _ = w.defines;
	        return _.HAS_UV_FLIP = 1, _.HAS_TERRAIN_NORMAL = 1, _.HAS_MAP = 1, w.defines = _, 
	        this.Fe(w), w.setUniform("terrainTileResolution", t.res), this.prepareMesh(w, t, e), 
	        w;
	    }
	    addTerrainImage(t, i) {
	        const e = i.terrainMesh;
	        if (e) {
	            if (this.Ne && e.properties.matVer !== this.Ge) {
	                for (const t in this.Ne) e.material.set(t, this.Ne[t]);
	                e.properties.matVer = this.Ge;
	            }
	            i.skin && e.material.set("skinTexture", i.skin), e.setUniform("polygonOpacity", 1), 
	            this.Ae.addMesh(e);
	        }
	    }
	    getUniformValues() {
	        const t = this.getMap(), i = t.getRenderer().canvas, {iblTexes: e, dfgLUT: s} = ji(i), n = Bi(t, e, s), r = this.layer.getTileSize().width, h = this.layer.getRenderer().getMaskUniforms(), o = this.Pe(100) / 100;
	        return at(n, {
	            viewMatrix: t.viewMatrix,
	            projMatrix: t.projMatrix,
	            projViewMatrix: t.projViewMatrix,
	            outSize: [ i.width, i.height ],
	            polygonFill: [ 1, 1, 1, 1 ],
	            terrainHeightMapResolution: [ r, r ],
	            terrainResolution: [ i.width, i.height ],
	            terrainHeightScale: o,
	            terrainUnpackFactors: [ 6553.6, 25.6, .1, 1e4 ]
	        }), at(n, h), n;
	    }
	    initShader() {
	        this.shader = new ai$1.StandardShader({
	            extraCommandProps: this.getExtraCommandProps()
	        });
	    }
	    delete() {
	        return this.disposeIBLTextures(), super.delete();
	    }
	}

	function qi(t, i, e, s) {
	    const n = $i.call(this, e, s);
	    this._projViewMatrix = i;
	    const {colorExtent: r, modeExtent: h} = this._extentPass.render(n, i);
	    this._maskUniforms = this._maskUniforms || {}, this._maskUniforms.mask_colorExtent = r, 
	    this._maskUniforms.mask_extent = t, this._maskUniforms.mask_modeExtent = h, this._maskUniforms.mask_hasFlatOut = Xi.call(this, "flat-outside"), 
	    this._maskUniforms.mask_hasClipOut = Xi.call(this, "clip-outside"), this._maskUniforms.mask_hasVideo = Xi.call(this, "video"), 
	    this._maskUniforms.mask_heightRatio = e, this._maskUniforms.mask_heightOffset = s, 
	    this.setToRedraw();
	}

	function $i(t, i) {
	    const e = [], s = this.layer.getMasks();
	    for (let n = 0; n < s.length; n++) {
	        const r = s[n].getMesh(this.regl, t, i);
	        r && e.push(r);
	    }
	    return e;
	}

	function Yi() {
	    if (!this._extentPass || !this._maskUniforms) return;
	    const t = this._maskUniforms.mask_heightRatio, i = this._maskUniforms.mask_heightOffset, e = $i.call(this, t, i);
	    this._extentPass.render(e, this._projViewMatrix);
	    const s = this.layer.getMasks();
	    for (let t = 0; t < s.length; t++) "video" === s[t].getMode() && s[t].je();
	}

	function Xi(t) {
	    const i = this.layer.getMasks();
	    for (let e = 0; e < i.length; e++) if (i[e].getMode() === t) return 1;
	    return 0;
	}

	function Ji() {
	    const t = this.layer.getMasks();
	    if (!t) return !1;
	    for (let i = 0; i < t.length; i++) if ("video" === t[i].getMode() && t[i].Be()) return !0;
	    return !1;
	}

	function Zi(t) {
	    return class extends t {
	        setMask(t, i, e, s) {
	            this.viewport || (this.viewport = {
	                x: 0,
	                y: 0,
	                width: () => this.canvas ? this.canvas.width : 1,
	                height: () => this.canvas ? this.canvas.height : 1
	            }), this._extentPass ? qi.call(this, t, i, e, s) : this.regl ? (this._extentPass = new mt$1(this.regl, this.viewport), 
	            qi.call(this, t, i, e, s)) : this.layer.once("contextcreate", () => {
	                this._extentPass = new mt$1(this.regl, this.viewport), qi.call(this, t, i, e, s);
	            }, this);
	        }
	        needToRedraw() {
	            return !!super.needToRedraw() || !!Ji.call(this);
	        }
	        getMaskUniforms() {
	            return Ji.call(this) && Yi.call(this), this._maskUniforms;
	        }
	        getMaskDefines() {
	            return this._maskDefines || (this._maskDefines = {}), this._maskUniforms && this._maskUniforms.mask_colorExtent ? this._maskDefines.HAS_MASK_EXTENT = 1 : delete this._maskDefines.HAS_MASK_EXTENT, 
	            this._maskDefines;
	        }
	        updateMaskDefines(t) {
	            const i = t.getDefines();
	            delete i.HAS_MASK_EXTENT;
	            at(i, this.getMaskDefines()), t.setDefines(i);
	        }
	        _clearMask() {
	            this._deleteMaskUniforms(), this._extentPass && (this._extentPass.dispose(), delete this._extentPass), 
	            this.setToRedraw();
	        }
	        _deleteMaskUniforms() {
	            delete this._maskUniforms;
	        }
	    };
	}

	class Ki {
	    constructor(t, i) {
	        this.max = t, this.onRemove = i, this.reset();
	    }
	    reset() {
	        if (this.data) {
	            const t = this.data.values();
	            for (const i of t) this.onRemove(i);
	        }
	        return this.data = new Map, this;
	    }
	    clear() {
	        this.reset(), delete this.onRemove;
	    }
	    add(t, i) {
	        return i ? (this.has(t) ? (this.data.delete(t), this.data.set(t, i)) : this.data.set(t, i), 
	        this) : this;
	    }
	    keys() {
	        const t = new Array(this.data.size);
	        let i = 0;
	        const e = this.data.keys();
	        for (const s of e) t[i++] = s;
	        return t;
	    }
	    has(t) {
	        return this.data.has(t);
	    }
	    getAndRemove(t) {
	        if (!this.has(t)) return null;
	        const i = this.data.get(t);
	        return this.data.delete(t), i;
	    }
	    get(t) {
	        if (!this.has(t)) return null;
	        return this.data.get(t);
	    }
	    pop() {
	        if (this.data.size < this.max) return null;
	        const t = this.data.keys().next();
	        return this.data.get(t.value).current ? (this.max += Math.ceil(this.max / 2), null) : this.getAndRemove(t.value);
	    }
	    remove(t) {
	        if (!this.has(t)) return this;
	        const i = this.data.get(t);
	        return this.data.delete(t), this.onRemove(i), this;
	    }
	    resetCurrent(t) {
	        this.data && this.data.forEach(i => {
	            i.current = t;
	        });
	    }
	}

	const Qi = new t__namespace.Point(0, 0), te = new t__namespace.Point(0, 0), ie = new t__namespace.PointExtent(0, 0, 0, 0), ee = new t__namespace.Point(0, 0), se = new t__namespace.Point(20, 20), ne = {
	    color: [ 0, 0, 0, 0 ],
	    depth: 1,
	    stencil: 0
	};

	class re extends(Zi(t__namespace.renderer.TileLayerCanvasRenderer)){
	    isDrawable() {
	        return !0;
	    }
	    getTempTileOnLoading(t, i) {
	        if (i.image && !i.image.reset) return i;
	        const e = this.Ue(t);
	        return e.temp = !0, i.image || (i.image = e), delete i.image.reset, i.current = !0, 
	        i.info = t, at(i.image, e), this.ze(i.image, t), i;
	    }
	    Ve(t, i, e) {
	        i.reset = !0, delete i.data, delete i.loadTime, delete i.rendered, delete i.minAltitude;
	        const s = t.id + "-temp", n = i.skinImages;
	        if (n) for (let t = 0; t < n.length; t++) {
	            const i = n[t];
	            if (i) {
	                for (let t = 0; t < i.length; t++) {
	                    const n = i[t];
	                    n && (n.refs.delete(s), n.refs.size || e.push(n));
	                }
	                delete i.currentSkins, delete i.tileIds;
	            }
	        }
	        delete i.sourceZoom, delete i.skinImages, delete i.skinStatus, delete i.skinTileIds, 
	        i.debugTexture && (i.debugTexture.destroy(), delete i.debugTexture);
	    }
	    Ue(t, i) {
	        const e = ((i = i || this.findParentTile(t)) && i.info || t).res, s = this.getMap().pointAtResToDistance(1, 1, e), n = i && i.image.data && this.We(i, t);
	        if (!n || n.width < 5) {
	            const e = this.qe(t, i);
	            return {
	                data: Li(e || 0, 5),
	                minAltitude: e,
	                mesh: Ri,
	                sourceZoom: -1
	            };
	        }
	        const r = n.width;
	        return {
	            data: n,
	            mesh: Ci(s, n.data, r, !0),
	            sourceZoom: i.info.z
	        };
	    }
	    qe(t, i) {
	        if (i && i.minAltitude) return i.minAltitude;
	        const {idx: e, idy: s, z: n} = t;
	        for (let t = -1; t <= 1; t++) for (let i = -1; i <= 1; i++) {
	            if (0 === t && 0 === i) continue;
	            const r = this.layer.getTileId(e + t, s + i, n), h = this.layer.tileInfoCache.get(r);
	            if (h && h.minAltitude) return h.minAltitude;
	        }
	        return 0;
	    }
	    consumeTile(t, i) {
	        if (t.empty && !t.mesh) {
	            const e = this.findParentTile(i);
	            if (!e || e.image && e.image.empty) {
	                t.mesh = Ri;
	                const e = this.qe(i);
	                t.data = Li(e || 0, 5), t.minAltitude = e, t.sourceZoom = -1;
	            } else t = this.Ue(i, e);
	        }
	        this.ze(t, i), super.consumeTile(t, i), this.$e(i);
	    }
	    ze(t, i) {
	        if (t && t.mesh) {
	            t.terrainMesh = this.Ye.createTerrainMesh(i, t), i.minAltitude = t.data.min, i.maxAltitude = t.data.max, 
	            delete t.mesh;
	            const e = this.layer.tileInfoCache;
	            if (e && i.parent && !t.empty && !t.temp) {
	                const t = e.get(i.parent);
	                if (t) {
	                    const {minAltitude: e, maxAltitude: s} = i;
	                    (void 0 === t.minAltitude || t.minAltitude > e) && (t.minAltitude = e), (void 0 === t.maxAltitude || t.maxAltitude < s) && (t.maxAltitude = s);
	                }
	            }
	        }
	    }
	    $e(t) {
	        const i = this.getMap();
	        if (i.updateCenterAltitude && void 0 === i.centerAltitude && t.z === this.getCurrentTileZoom()) {
	            const e = i._getPrjCenter(), s = i._prjToPointAtRes(e, t.res, ee);
	            t.extent2d.contains(s) && i.updateCenterAltitude();
	        }
	    }
	    draw(t, i) {
	        this.Xe(), this.Ye.startFrame(), super.draw(t, i), this.Je(i);
	    }
	    drawTile(t, i) {
	        const e = this.getMap();
	        if (!t || !e || !i) return;
	        if (!this.drawingCurrentTiles && !this.drawingChildTiles) return;
	        let s = this.drawingCurrentTiles ? this.getTileOpacity(i) : 1;
	        s *= this.layer.options.opacity || 1, this.Ye.addTerrainImage(t, i, s);
	    }
	    _drawTiles(t, i, e, s, n, r, h) {
	        const o = [], a = this.Ze(r, o);
	        this.Ke = 0;
	        const l = this.layer.getSkinCount();
	        pt(t, a);
	        const c = new Set;
	        for (let t = 0; t < l; t++) this.Qe(t, h, c, o);
	        for (let i = 0; i < l; i++) this.Qe(i, t, c, o);
	        for (let i = 0; i < t.length; i++) this.ts(t[i].info, t[i].image);
	        for (let t = 0; t < o.length; t++) o[t] && o[t].texture && !o[t].refs.size && (this.es.delete(o[t].tile.id), 
	        this.ss(o[t]));
	        return this.ns(), super._drawTiles(...arguments);
	    }
	    Ze(t, i) {
	        const e = [];
	        let s = this.rs;
	        s || (s = this.rs = new Ki(this.layer.options.tempTileCacheSize, t => {
	            const {info: i, image: e} = t;
	            this.hs(i, e);
	        })), s.resetCurrent(!1);
	        for (let n = 0; n < t.length; n++) {
	            const r = t[n];
	            let h;
	            s.has(r.id) ? h = s.getAndRemove(r.id) : (h = s.pop(), h ? h.image && (this.Ve(h.info, h.image, i), 
	            h.image.temp = !0) : h = {
	                info: r
	            }), h.current = !0, s.add(r.id, h), e.push(h);
	        }
	        for (let i = 0; i < t.length; i++) this.getTempTileOnLoading(t[i], e[i]);
	        return e;
	    }
	    ns() {
	        if (!this.es) return;
	        const t = this.getCurrentTimestamp();
	        if (this.os && t - this.os < 1e3) return;
	        const i = new Set;
	        for (const t of this.tileCache.data.values()) this.as(t, i);
	        for (const t in this.tilesInView) {
	            const e = this.tilesInView[t];
	            this.as(e, i);
	        }
	        if (this.rs) for (const t of this.rs.data.values()) this.as(t, i);
	        i.size && (this.es.forEach((t, e) => {
	            i.has(e) || (console.log("deleted:", e), this.ss(this.es.get(e)), this.es.delete(e));
	        }), this.os = t);
	    }
	    as(t, i) {
	        const e = t.image && t.image.skinImages;
	        if (e && e.length) for (let t = 0; t < e.length; t++) {
	            const s = e[t] && e.currentSkins;
	            if (s) for (const t of s) i.add(t);
	        }
	    }
	    Qe(t, i, e, s) {
	        const n = this.layer.getSkinLayer(t).getRenderer();
	        if (!n) return;
	        const r = [];
	        for (let n = 0; n < i.length; n++) {
	            const {info: h, image: o} = i[n];
	            if (this.ls(t, h, o, s)) {
	                const s = i[n].image.skinImages[t];
	                for (let t = 0; t < s.length; t++) {
	                    const i = s[t].tile.info.id;
	                    e.has(i) || (r.push(s[t]), e.add(i));
	                }
	            }
	        }
	        n.renderTerrainSkin(this.regl, this.layer, r);
	    }
	    ls(t, i, e, s) {
	        const n = this.getMap();
	        if (delete e.path, !i || !n || !e) return !1;
	        if (!e.terrainMesh) return !1;
	        const r = this.layer.getSkinLayer(t), h = r.getRenderer();
	        if (!h) return !1;
	        e.skinImages || (e.skinImages = []), e.skinStatus || (e.skinStatus = []), e.skinTileIds || (e.skinTileIds = []);
	        const o = h.isAnimating && h.isAnimating(), a = e.skinStatus[t], l = h.needToRefreshTerrainTileOnZooming && h.needToRefreshTerrainTileOnZooming(), c = o || l && e.renderedZoom !== n.getZoom();
	        if (a && !c) return !1;
	        const u = r.getSpatialReference(), {x: f, y: d, z: p, res: g, offset: m} = i;
	        let v = i.nw;
	        v || (v = i.nw = this.getMap().pointAtResToCoord(i.extent2d.getMin(Qi), i.res));
	        const w = this.layer.getTileSize().width, {res: _, zoom: M} = Ii(u, p, g), x = Oi(_, r.getTileSize().width, g, w);
	        let y = e.skinTileIds[t];
	        if (!y) {
	            const i = this.layer._getTileConfig().tileSystem.scale.y;
	            y = e.skinTileIds[t] = Ti(r, f, d, M, v, m, i, x, he);
	        }
	        const b = y[0];
	        let S = !0;
	        const C = [];
	        for (let t = 0; t < b.length; t++) {
	            const i = h.getCachedTile(b[t], !1);
	            if (i) C.push(i); else {
	                S = !1;
	                const i = h.findParentTile(b[t]);
	                i && C.push(i);
	            }
	        }
	        const T = e.skinImages[t] || [];
	        T.currentSkins = T.currentSkins || new Set;
	        const k = new Set;
	        let A = !1;
	        for (let t = 0; t < T.length; t++) {
	            if (!T[t].tile) {
	                A = !0;
	                continue;
	            }
	            const i = T[t].tile.info.id;
	            k.add(i);
	        }
	        if (!C.length) return T.currentSkins.clear(), e.skinImages[t] = [], !1;
	        const O = C.length ? C.map(t => t.info.id).join() : C[0].info.id;
	        if (!c && !A && T.tileIds === O) return !1;
	        T.tileIds = O;
	        let I = !1;
	        T.currentSkins.clear(), T.length = 0;
	        const E = T.currentSkins;
	        let L = i.id;
	        e.temp && (L += "-temp");
	        for (let t = 0; t < C.length; t++) {
	            const i = C[t].info.id;
	            E.add(i);
	            let e = this.cs(i);
	            e && ((F = e) && F.texture) || (e = {
	                tile: at({}, C[t]),
	                layer: r,
	                refs: new Set,
	                texture: h.createTerrainTexture(this.regl)
	            }, this.us(i, e)), e.refs.add(L), T.push(e), I = !0;
	        }
	        var F;
	        return this.fs(i, e, k, E, s), I && this.Ke++, e.skinImages[t] = T, r.fire("renderterrainskin", {
	            tile: i,
	            skinTiles: C
	        }), S && (e.skinStatus[t] = 1), !0;
	    }
	    fs(t, i, e, s, n) {
	        if (!e.size) return;
	        let r = t.id;
	        i.temp && (r += "-temp");
	        for (const t of e) if (!s || !s.has(t)) {
	            const i = this.cs(t);
	            this.ds(i, r, n);
	        }
	    }
	    cs(t) {
	        return this.es || (this.es = new Map), this.es.get(t);
	    }
	    us(t, i) {
	        this.es.set(t, i);
	    }
	    ts(t, i) {
	        const e = this.getMap();
	        if (!t || !e || !i) return;
	        const s = i.skinImages, n = this.ps(i.renderedZoom);
	        if (i.rendered && !n) return;
	        i.skin ? (ne.framebuffer = i.skin, this.regl.clear(ne)) : i.skin = this.gs(), this.ms();
	        const r = this.layer.options.debug, h = [], o = r && [], a = this.layer.getTileSize().width;
	        if (s) for (let i = 0; i < s.length; i++) {
	            const e = s[i];
	            for (let i = 0; i < e.length; i++) {
	                const {tile: s, texture: n, layer: r} = e[i];
	                if ((s.info.offset[0] || s.info.offset[1]) && t.skinTileIds) {
	                    const i = t.skinTileIds[r.getId()];
	                    for (let t = 0; t < i.length; t++) if (s.info.x === i[t].x && s.info.y === i[t].y) {
	                        s.info.offset = i[t].offset;
	                        break;
	                    }
	                }
	                const o = ae(t, s, a), l = e[i].skinMesh || new ke$1(this.vs);
	                l.setUniform("skinTexture", n);
	                const c = r.getOpacity();
	                l.setUniform("opacity", lt(c) ? 1 : c), l.setUniform("skinDim", o), l.setUniform("tileSize", a), 
	                l.setUniform("x", t.x), l.setUniform("y", t.y), e[i].skinMesh = l, h.push(l);
	            }
	        }
	        if (r) {
	            const e = i.skinDebugMesh || new ke$1(this.vs);
	            e.setUniform("tileSize", a);
	            const s = i.debugTexture || this.ws(t, a);
	            i.debugTexture = s, i.skinDebugMesh = e, e.setUniform("opacity", 1), e.setUniform("skinTexture", s), 
	            e.setUniform("skinDim", [ 0, 0, 1 ]), e.setUniform("tileSize", a), o.push(e);
	        }
	        if (h.length) {
	            this._s.setMeshes(h);
	            try {
	                this.renderer.render(this.Ms, null, this._s, i.skin);
	            } catch (t) {
	                throw console.error(i), t;
	            }
	        }
	        o && o.length && this.layer.options.debug && (this._s.setMeshes(o), this.renderer.render(this.Ms, null, this._s, i.skin)), 
	        i.rendered = this.xs(i), i.renderedZoom = e.getZoom();
	    }
	    ws(t, i) {
	        i *= 2;
	        const {x: e, y: s, z: n} = t, r = `terrain:${e}/${s}/${n}`, h = document.createElement("canvas");
	        h.width = i, h.height = i;
	        const o = h.getContext("2d");
	        o.font = "40px monospace";
	        const a = this.layer.options.debugOutline;
	        return o.fillStyle = a, o.strokeStyle = a, o.fillText(r, 20, i - 40), o.beginPath(), 
	        o.lineWidth = 4, o.moveTo(0, 0), o.lineTo(i, 0), o.lineTo(i, i), o.lineTo(0, i), 
	        o.lineTo(0, 0), o.stroke(), this.regl.texture({
	            data: h,
	            flipY: !0,
	            mag: "linear",
	            min: "linear"
	        });
	    }
	    gs() {
	        const t = this.layer.getTileSize().width, i = 2 * t, e = 2 * t, s = this.regl, n = s.texture({
	            min: "linear",
	            mag: "linear",
	            type: "uint8",
	            width: i,
	            height: e,
	            flipY: !0
	        }), r = {
	            width: i,
	            height: e,
	            colors: [ n ],
	            colorFormat: "rgba",
	            ignoreStatusCheck: !0,
	            depthStencil: !1,
	            depth: !1,
	            stencil: !1
	        }, h = s.framebuffer(r);
	        return h.colorTex = n, h;
	    }
	    Je(t) {
	        this.Ye.endFrame(t) && !Object.keys(this.tilesLoading).length && this.layer.fire("terrainreadyandrender");
	    }
	    We(t, i) {
	        const {image: e, info: s} = t, n = e.data, r = n.width, {extent2d: h, res: o} = s, {extent2d: a, res: l} = i, c = h.getWidth(), u = h.getHeight();
	        let f = (a.xmin * l / o - h.xmin) / c * (r - 1), d = (h.ymax - a.ymax * l / o) / u * (r - 1);
	        const p = (a.xmax * l / o - h.xmin) / c * (r - 1);
	        let g = Math.round(p - f);
	        const m = Math.log2(g);
	        g = Math.pow(2, Math.round(m)) + 1, f = Math.floor(f), d = Math.floor(d);
	        const v = new Float32Array(g * g);
	        let w = 1 / 0, _ = -1 / 0;
	        for (let t = 0; t < g; t++) for (let i = 0; i < g; i++) {
	            let e = t + f, s = i + d;
	            e > r - 1 ? e = r - 1 : e < 0 && (e = 0), s > r - 1 ? s = r - 1 : s < 0 && (s = 0);
	            const h = n.data[e + s * r];
	            v[t + i * g] = h, h < w && (w = h), h > _ && (_ = h);
	        }
	        return {
	            width: g,
	            height: g,
	            data: v,
	            min: w,
	            max: _
	        };
	    }
	    getTileOpacity(t) {
	        return this.xs(t) ? super.getTileOpacity(t) : (this.resetTileLoadTime(t), 0);
	    }
	    xs(t) {
	        const i = this.layer.getSkinCount();
	        if (!i) return !0;
	        if (!t.skinStatus) return !1;
	        for (let e = 0; e < i; e++) if (!t.skinStatus[e]) return !1;
	        return !0;
	    }
	    ps(t) {
	        const i = this.getMap().getZoom(), e = this.layer.getSkinLayers();
	        for (let s = 0; s < e.length; s++) {
	            const n = e[s] && e[s].getRenderer();
	            if (n) {
	                if (n.isAnimating && n.isAnimating()) return !0;
	                if (n.needToRefreshTerrainTileOnZooming && n.needToRefreshTerrainTileOnZooming() && t !== i) return !0;
	            }
	        }
	        return !1;
	    }
	    isValidCachedTile(t) {
	        const i = !t.image.skinStatus;
	        return t.image && !t.image.temp && (i || this.xs(t.image));
	    }
	    isTileComplete(t) {
	        return t.image && !t.image.temp && this.xs(t.image);
	    }
	    ys() {
	        const t = this.layer.options;
	        return lt(t.terrainWidth) ? t.tileSize + 1 : t.terrainWidth;
	    }
	    loadTile(i) {
	        const e = this.ys(), s = this.layer.getSpatialReference().getResolution(i.z), n = this.getMap().pointAtResToDistance(1, 1, s), r = this.layer.options.maxAvailableZoom;
	        if (r && i.z > r) {
	            const t = this.Ue(i);
	            return this.onTileLoad(t, i), t;
	        }
	        const h = i.url, o = {}, a = this.layer.options, l = {
	            terrainWidth: e,
	            type: a.type,
	            accessToken: a.accessToken,
	            cesiumIonTokenURL: a.cesiumIonTokenURL,
	            error: n
	        };
	        return this.workerConn.fetchTerrain(h, l, (e, s) => {
	            if (delete o.loading, e) {
	                if (e.canceled) return;
	                return console.warn(e), void this.onTileError(o, i);
	            }
	            t__namespace.Util.extend(o, s), this.onTileLoad(o, i);
	        }), o;
	    }
	    deleteTile(t) {
	        if (!t || !t.image) return;
	        super.deleteTile(t);
	        const {info: i, image: e} = t;
	        e.temp || (delete i.skinTileIds, this.hs(t.info, e));
	    }
	    hs(t, i) {
	        const e = i.skin;
	        e && (e.destroy(), e.colorTex.destroy(), delete e.colorTex), i.debugTexture && (i.debugTexture.destroy(), 
	        delete i.debugTexture, i.skinDebugMesh.dispose(), delete i.skinDebugMesh);
	        const s = i.skinImages;
	        if (s && s.length) {
	            let e = t.id;
	            i.temp && (e += "-temp");
	            for (let t = 0; t < s.length; t++) {
	                const i = s[t];
	                if (i) {
	                    for (let t = 0; t < i.length; t++) {
	                        if (!i[t] || !i[t].tile) continue;
	                        const s = i[t].tile.info.id, n = this.es && this.es.get(s);
	                        n && this.ds(n, e);
	                    }
	                    i.length = 0;
	                }
	            }
	        }
	        i.terrainMesh && this.Ye.deleteMesh(i.terrainMesh), i.image && i.image.close && i.image.close(), 
	        delete i.skinImages, delete i.skin, delete i.skinStatus, delete i.skinTileIds, delete i.terrainMesh, 
	        delete i.image, delete i.data, delete i.mesh, delete i.rendered;
	    }
	    ds(t, i, e) {
	        t && (t.refs.delete(i), t.refs.size || (e ? e.push(t) : this.ss(t)));
	    }
	    ss(t) {
	        if (!t || !t.tile) return;
	        const i = t.tile.info.id, e = t.layer.getRenderer();
	        delete t.canvas, delete t.layer, t.refs.clear(), t.texture && (e ? e.deleteTerrainTexture(t.texture) : t.texture.destroy && t.texture.destroy(), 
	        delete t.texture), t.skinMesh && (t.skinMesh.dispose(), delete t.skinMesh), e && (e.removeTileCache && e.removeTileCache(i), 
	        e.deleteTile && e.constructor.prototype.deleteTile.call(e, t.tile)), delete t.tile, 
	        this.es.delete(i);
	    }
	    bs() {
	        if (!this.es) return;
	        const t = this.es.keys();
	        for (const i of t) {
	            const t = this.cs(i);
	            this.ss(t);
	        }
	        this.es.clear();
	    }
	    abortTileLoading(t, i) {
	        i && i.url && this.workerConn && this.workerConn.abortTerrain(i.url), super.abortTileLoading(t, i);
	    }
	    onTileError(t, i) {
	        super.onTileError(t, i);
	    }
	    Ss(t) {
	        const i = this.getCurrentTileZoom(), e = this.layer.getSpatialReference().getResolution(i), s = this.layer._getTileConfig().getTileIndex(t, e, this.layer.options.repeatWorld);
	        return s.z = i, s;
	    }
	    Cs(t, i, e, s, n) {
	        const r = this.layer.getMinZoom(), h = this.Ts(i, e.x, e.y, e.z, r);
	        if (h && h.image && h.image.data) {
	            const i = h.info.extent2d, r = h.info.res / n, o = s.x - i.xmin * r, a = i.ymax * r - s.y, l = this.ks(h.image.data, o / (i.getWidth() * r), a / (i.getHeight() * r));
	            t[0] = l, t[1] = null === l ? 0 : +(h.info.z === e.z);
	        } else t[0] = null, t[1] = 0;
	        return t;
	    }
	    Ts(t, i, e, s, n) {
	        t || (t = this.layer._getTileId(i, e, s));
	        const r = this.tilesInView[t] || this.tileCache.get(t);
	        return !r && s - 1 >= n ? this.Ts(null, Math.floor(i / 2), Math.floor(e / 2), s - 1, n) : r;
	    }
	    ks(t, i, e) {
	        const {width: s, height: n, data: r} = t, h = Math.floor((s - 1) * i), o = Math.floor((n - 1) * e) * s + h;
	        return void 0 === r[o] ? null : r[o];
	    }
	    As(t, i, e) {
	        t || (t = {
	            tiles: {},
	            dirty: !0,
	            complete: !1
	        });
	        const s = this.layer, n = this.getCurrentTileZoom(), r = s.getSpatialReference().getResolution(n), {xmin: h, ymin: o, xmax: a, ymax: l} = i, c = s._getTileConfig();
	        Qi.set(h, o).Os(e);
	        const u = c._getTileNum(Qi, e, !0);
	        te.set(a, l).Os(e);
	        const f = c._getTileNum(te, e, !0), d = Math.min(u.x, f.x), p = Math.max(u.x, f.x), g = Math.min(u.y, f.y), m = Math.max(u.y, f.y), v = e / r;
	        Qi.set(h, o).Os(v), te.set(a, l).Os(v);
	        const w = ie.set(Qi.x, Qi.y, te.x, te.y), _ = s.getTileSize().width + 1;
	        w.Is(w.getWidth() / _), t.array = t.array || new Float32Array(_ * _);
	        const M = t.tiles;
	        t.complete = !0, t.array.fill(0);
	        for (let i = d; i <= p; i++) for (let e = g; e <= m; e++) {
	            const s = this.layer._getTileId(i, e, n);
	            if (M[s]) continue;
	            const r = this.tileCache.get(s);
	            r ? (this.Es(t.array, r, w, _), t.dirty = !0, M[s] = 1) : (t.dirty = t.dirty || void 0 !== t.tiles[s], 
	            t.tiles[s] && delete t.tiles[s], t.complete = !1);
	        }
	        return t;
	    }
	    Es(t, i, e, s) {
	        const n = i.info.extent2d, r = n.intersection(e), {xmin: h, ymin: o, xmax: a, ymax: l} = r, {data: c} = i.image, u = c.width, f = e.getWidth() / s, d = Math.floor((h - e.xmin) / f), p = Math.floor((o - e.ymin) / f), g = Math.floor((a - e.xmin) / f) - d, m = Math.floor((l - e.ymin) / f) - p, v = n.getWidth() / u, w = Math.floor((h - n.xmin) / v), _ = Math.floor((o - n.ymin) / v), M = Math.floor(f / v);
	        for (let i = 0; i <= g; i++) for (let e = 0; e <= m; e++) {
	            const n = i + d + (p + e) * s;
	            let r = 0;
	            for (let t = 0; t < M; t++) for (let s = 0; s < M; s++) {
	                const n = (w + Math.floor(i * M)) * u + t + _ + Math.floor(e * M) + s;
	                r += c.data[n];
	            }
	            t[n] = r / Math.max(M, 1);
	        }
	        return t;
	    }
	    onAdd() {
	        super.onAdd(), this.prepareWorker();
	    }
	    onRemove() {
	        this.workerConn && (this.workerConn.removeLayer(this.layer.getId(), t => {
	            if (t) throw t;
	        }), this.workerConn.remove(), delete this.workerConn), this.rs && (this.rs.reset(), 
	        delete this.rs), this.es && this.bs(), this.Ms && (this.Ms.dispose(), delete this.Ms), 
	        this.vs && (this.vs.dispose(), delete this.vs), super.onRemove(), this.Ye && (this.Ye.delete(), 
	        delete this.Ye);
	    }
	    prepareWorker() {
	        const t = this.layer.getMap();
	        this.workerConn || (this.workerConn = new xi(t.id));
	        const i = this.workerConn;
	        if (!i.isActive()) return;
	        const e = this.layer.options || {}, s = this.layer.getId();
	        i.addLayer(s, e, t => {
	            if (t) throw t;
	            this.layer && (this.ready = !0, this.setToRedraw(), this.layer.fire("workerready"));
	        });
	    }
	    createContext() {
	        this.canvas.gl && this.canvas.gl.wrap ? (this.gl = this.canvas.gl.wrap(), this.regl = this.canvas.gl.regl) : this.Ls(), 
	        this.renderer = new k$1(this.regl), this.layer.fire("contextcreate", {
	            regl: this.regl
	        });
	    }
	    Xe() {
	        const t = this.Ye;
	        "lit" === this.layer.options.shader || "pbr" === this.layer.options.shader ? (t && t.constructor === Ni || !t) && (t && (t.delete(), 
	        this.clear(), this.setToRedraw()), this.Ye = new Wi(this.layer), this.layer.fire("paintercreated")) : (t && t.constructor === Wi || !t) && (t && (t.delete(), 
	        this.clear(), this.setToRedraw()), this.Ye = new Ni(this.layer), this.layer.fire("paintercreated"));
	    }
	    Ls() {
	        const t = this.layer, i = t.options.glOptions || {
	            alpha: !0,
	            depth: !0,
	            antialias: this.layer.options.antialias
	        };
	        i.preserveDrawingBuffer = !0, i.stencil = !0, this.glOptions = i, this.gl = this.gl || this.Fs(this.canvas, i), 
	        this.regl = regl_min.exports.createREGL({
	            gl: this.gl,
	            attributes: i,
	            extensions: [ "OES_element_index_uint" ],
	            optionalExtensions: t.options.glExtensions
	        });
	    }
	    Fs(t, i) {
	        const e = [ "webgl", "experimental-webgl" ];
	        let s = null;
	        for (let n = 0; n < e.length; ++n) {
	            try {
	                s = t.getContext(e[n], i);
	            } catch (t) {}
	            if (s) break;
	        }
	        return s;
	    }
	    resizeCanvas(t) {
	        this.canvas && super.resizeCanvas(t);
	    }
	    clearCanvas() {
	        this.canvas && super.clearCanvas();
	    }
	    ms() {
	        if (this.Ms) return;
	        const t = this.layer.getTileSize().width;
	        this.Ms = new vn({
	            vert: "#define SHADER_NAME TERRAIN_SKIN\nattribute vec2 aPosition;\nvoid main() {\n    gl_Position = vec4(aPosition, 0.0, 1.0);\n}",
	            frag: "#define SHADER_NAME TERRAIN_SKIN\nprecision mediump float;\nuniform float tileSize;\nuniform sampler2D skinTexture;\nuniform vec3 skinDim;\nuniform float opacity;\nvoid main() {\n    vec2 fragCoord = gl_FragCoord.xy / 2.0;\n    vec2 resolution = vec2(tileSize);\n    vec2 uv = (fragCoord - skinDim.xy) /  (resolution * skinDim.z);\n    if (uv.x >= 0.0 && uv.x <= 1.0 && uv.y >= 0.0 && uv.y <= 1.0) {\n        gl_FragColor = texture2D(skinTexture, uv) * opacity;\n    } else {\n        gl_FragColor = vec4(0.0);\n    }\n}",
	            extraCommandProps: {
	                cull: {
	                    enable: !1
	                },
	                viewport: {
	                    x: 0,
	                    y: 0,
	                    width: 2 * t,
	                    height: 2 * t
	                },
	                depth: {
	                    enable: !1
	                },
	                stencil: {
	                    enable: !1
	                },
	                blend: {
	                    enable: !0,
	                    func: {
	                        src: "one",
	                        dst: "one minus src alpha"
	                    },
	                    equation: "add"
	                }
	            }
	        });
	        const i = new Int8Array([ -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1 ]);
	        this.vs = this.vs || new Q$1({
	            aPosition: i
	        }, 0, 6, {
	            positionSize: 2
	        }), this.vs.generateBuffers(this.regl), this._s = this._s || new Ke$1;
	    }
	    updateMaterial(t) {
	        this.Ye && t && this.Ye.updateMaterial && (void 0 === this.Ge && (this.Ge = 1), 
	        this.Ye.updateMaterial(t, this.Ge++));
	    }
	    setMaterial(t) {
	        this.Ye && t && this.Ye.setMaterial && (void 0 === this.Ge && (this.Ge = 1), this.Ye.setMaterial(t, this.Ge++));
	    }
	}

	const he = 1;

	function oe(t, i, e, s, n, r, h, o, a = 0) {
	    t.font = "20px monospace", t.fillStyle = e, se.y = o - 30, t.globalAlpha = 1, t.fillText(i, se.x + n, se.y + r + a), 
	    t.globalAlpha = .6, t.strokeStyle = e, t.lineWidth = s, t.beginPath(), t.moveTo(n, r), 
	    t.lineTo(n + h, r), t.lineTo(n + h, r + o), t.lineTo(n, r + o), t.lineTo(n, r), 
	    t.stroke(), t.globalAlpha = 1;
	}

	function ae(t, i, e) {
	    const {res: s, extent2d: n, offset: r} = t, {info: h} = i, o = h.res / s, a = h.offset, l = h.extent2d.xmin * o, c = h.extent2d.ymin * o, u = r[0] - a[0], f = a[1] - r[1];
	    return [ l - n.xmin + u, -(n.ymin - c + f), o * h.tileSize / e ];
	}

	t__namespace.renderer.TileLayerCanvasRenderer.include({
	    renderTerrainSkin(t, i, e) {
	        const s = this.layer.getTileSize().width, n = i.options.debug;
	        for (let t = 0; t < e.length; t++) {
	            const {tile: i, texture: r} = e[t];
	            if (!i.image) continue;
	            const h = document.createElement("canvas");
	            e[t].canvas = h, h.width = s, h.height = s;
	            const o = h.getContext("2d");
	            if (o.drawImage(i.image, 0, 0), n) {
	                const {x: t, y: e, z: n} = i.info;
	                oe(o, `${t}/${e}/${n}`, "yellow", 1, 0, 0, s, s, -18);
	            }
	            r({
	                data: h,
	                width: s,
	                height: s,
	                flipY: !0,
	                min: "linear mipmap linear",
	                mag: "linear"
	            });
	        }
	    },
	    createTerrainTexture(t) {
	        const i = this.layer.getTileSize().width, e = {
	            width: i,
	            height: i,
	            flipY: !0,
	            min: "linear mipmap linear",
	            mag: "linear",
	            depthStencil: !1,
	            depth: !1,
	            stencil: !1
	        };
	        return t.texture(e);
	    },
	    deleteTerrainTexture(t) {
	        t.destroy();
	    }
	});

	var le = {
	    exports: {}
	};

	function ce(t, i, e) {
	    e = e || 2;
	    var s, n, r, h, o, a, l, c = i && i.length, u = c ? i[0] * e : t.length, f = ue(t, 0, u, e, !0), d = [];
	    if (!f || f.next === f.prev) return d;
	    if (c && (f = function(t, i, e, s) {
	        var n, r, h, o, a, l = [];
	        for (n = 0, r = i.length; n < r; n++) h = i[n] * s, o = n < r - 1 ? i[n + 1] * s : t.length, 
	        (a = ue(t, h, o, s, !1)) === a.next && (a.steiner = !0), l.push(ye(a));
	        for (l.sort(we), n = 0; n < l.length; n++) e = _e(l[n], e);
	        return e;
	    }(t, i, f, e)), t.length > 80 * e) {
	        s = r = t[0], n = h = t[1];
	        for (var p = e; p < u; p += e) (o = t[p]) < s && (s = o), (a = t[p + 1]) < n && (n = a), 
	        o > r && (r = o), a > h && (h = a);
	        l = 0 !== (l = Math.max(r - s, h - n)) ? 32767 / l : 0;
	    }
	    return de(f, d, e, s, n, l, 0), d;
	}

	function ue(t, i, e, s, n) {
	    var r, h;
	    if (n === Pe(t, i, e, s) > 0) for (r = i; r < e; r += s) h = Le(r, t[r], t[r + 1], h); else for (r = e - s; r >= i; r -= s) h = Le(r, t[r], t[r + 1], h);
	    return h && Te(h, h.next) && (Fe(h), h = h.next), h;
	}

	function fe(t, i) {
	    if (!t) return t;
	    i || (i = t);
	    var e, s = t;
	    do {
	        if (e = !1, s.steiner || !Te(s, s.next) && 0 !== Ce(s.prev, s, s.next)) s = s.next; else {
	            if (Fe(s), (s = i = s.prev) === s.next) break;
	            e = !0;
	        }
	    } while (e || s !== i);
	    return i;
	}

	function de(t, i, e, s, n, r, h) {
	    if (t) {
	        !h && r && function(t, i, e, s) {
	            var n = t;
	            do {
	                0 === n.z && (n.z = xe(n.x, n.y, i, e, s)), n.prevZ = n.prev, n.nextZ = n.next, 
	                n = n.next;
	            } while (n !== t);
	            n.prevZ.nextZ = null, n.prevZ = null, function(t) {
	                var i, e, s, n, r, h, o, a, l = 1;
	                do {
	                    for (e = t, t = null, r = null, h = 0; e; ) {
	                        for (h++, s = e, o = 0, i = 0; i < l && (o++, s = s.nextZ); i++) ;
	                        for (a = l; o > 0 || a > 0 && s; ) 0 !== o && (0 === a || !s || e.z <= s.z) ? (n = e, 
	                        e = e.nextZ, o--) : (n = s, s = s.nextZ, a--), r ? r.nextZ = n : t = n, n.prevZ = r, 
	                        r = n;
	                        e = s;
	                    }
	                    r.nextZ = null, l *= 2;
	                } while (h > 1);
	            }(n);
	        }(t, s, n, r);
	        for (var o, a, l = t; t.prev !== t.next; ) if (o = t.prev, a = t.next, r ? ge(t, s, n, r) : pe(t)) i.push(o.i / e | 0), 
	        i.push(t.i / e | 0), i.push(a.i / e | 0), Fe(t), t = a.next, l = a.next; else if ((t = a) === l) {
	            h ? 1 === h ? de(t = me(fe(t), i, e), i, e, s, n, r, 2) : 2 === h && ve(t, i, e, s, n, r) : de(fe(t), i, e, s, n, r, 1);
	            break;
	        }
	    }
	}

	function pe(t) {
	    var i = t.prev, e = t, s = t.next;
	    if (Ce(i, e, s) >= 0) return !1;
	    for (var n = i.x, r = e.x, h = s.x, o = i.y, a = e.y, l = s.y, c = n < r ? n < h ? n : h : r < h ? r : h, u = o < a ? o < l ? o : l : a < l ? a : l, f = n > r ? n > h ? n : h : r > h ? r : h, d = o > a ? o > l ? o : l : a > l ? a : l, p = s.next; p !== i; ) {
	        if (p.x >= c && p.x <= f && p.y >= u && p.y <= d && be(n, o, r, a, h, l, p.x, p.y) && Ce(p.prev, p, p.next) >= 0) return !1;
	        p = p.next;
	    }
	    return !0;
	}

	function ge(t, i, e, s) {
	    var n = t.prev, r = t, h = t.next;
	    if (Ce(n, r, h) >= 0) return !1;
	    for (var o = n.x, a = r.x, l = h.x, c = n.y, u = r.y, f = h.y, d = o < a ? o < l ? o : l : a < l ? a : l, p = c < u ? c < f ? c : f : u < f ? u : f, g = o > a ? o > l ? o : l : a > l ? a : l, m = c > u ? c > f ? c : f : u > f ? u : f, v = xe(d, p, i, e, s), w = xe(g, m, i, e, s), _ = t.prevZ, M = t.nextZ; _ && _.z >= v && M && M.z <= w; ) {
	        if (_.x >= d && _.x <= g && _.y >= p && _.y <= m && _ !== n && _ !== h && be(o, c, a, u, l, f, _.x, _.y) && Ce(_.prev, _, _.next) >= 0) return !1;
	        if (_ = _.prevZ, M.x >= d && M.x <= g && M.y >= p && M.y <= m && M !== n && M !== h && be(o, c, a, u, l, f, M.x, M.y) && Ce(M.prev, M, M.next) >= 0) return !1;
	        M = M.nextZ;
	    }
	    for (;_ && _.z >= v; ) {
	        if (_.x >= d && _.x <= g && _.y >= p && _.y <= m && _ !== n && _ !== h && be(o, c, a, u, l, f, _.x, _.y) && Ce(_.prev, _, _.next) >= 0) return !1;
	        _ = _.prevZ;
	    }
	    for (;M && M.z <= w; ) {
	        if (M.x >= d && M.x <= g && M.y >= p && M.y <= m && M !== n && M !== h && be(o, c, a, u, l, f, M.x, M.y) && Ce(M.prev, M, M.next) >= 0) return !1;
	        M = M.nextZ;
	    }
	    return !0;
	}

	function me(t, i, e) {
	    var s = t;
	    do {
	        var n = s.prev, r = s.next.next;
	        !Te(n, r) && ke(n, s, s.next, r) && Ie(n, r) && Ie(r, n) && (i.push(n.i / e | 0), 
	        i.push(s.i / e | 0), i.push(r.i / e | 0), Fe(s), Fe(s.next), s = t = r), s = s.next;
	    } while (s !== t);
	    return fe(s);
	}

	function ve(t, i, e, s, n, r) {
	    var h = t;
	    do {
	        for (var o = h.next.next; o !== h.prev; ) {
	            if (h.i !== o.i && Se(h, o)) {
	                var a = Ee(h, o);
	                return h = fe(h, h.next), a = fe(a, a.next), de(h, i, e, s, n, r, 0), void de(a, i, e, s, n, r, 0);
	            }
	            o = o.next;
	        }
	        h = h.next;
	    } while (h !== t);
	}

	function we(t, i) {
	    return t.x - i.x;
	}

	function _e(t, i) {
	    var e = function(t, i) {
	        var e, s = i, n = t.x, r = t.y, h = -1 / 0;
	        do {
	            if (r <= s.y && r >= s.next.y && s.next.y !== s.y) {
	                var o = s.x + (r - s.y) * (s.next.x - s.x) / (s.next.y - s.y);
	                if (o <= n && o > h && (h = o, e = s.x < s.next.x ? s : s.next, o === n)) return e;
	            }
	            s = s.next;
	        } while (s !== i);
	        if (!e) return null;
	        var a, l = e, c = e.x, u = e.y, f = 1 / 0;
	        s = e;
	        do {
	            n >= s.x && s.x >= c && n !== s.x && be(r < u ? n : h, r, c, u, r < u ? h : n, r, s.x, s.y) && (a = Math.abs(r - s.y) / (n - s.x), 
	            Ie(s, t) && (a < f || a === f && (s.x > e.x || s.x === e.x && Me(e, s))) && (e = s, 
	            f = a)), s = s.next;
	        } while (s !== l);
	        return e;
	    }(t, i);
	    if (!e) return i;
	    var s = Ee(e, t);
	    return fe(s, s.next), fe(e, e.next);
	}

	function Me(t, i) {
	    return Ce(t.prev, t, i.prev) < 0 && Ce(i.next, t, t.next) < 0;
	}

	function xe(t, i, e, s, n) {
	    return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = (t - e) * n | 0) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (i = 1431655765 & ((i = 858993459 & ((i = 252645135 & ((i = 16711935 & ((i = (i - s) * n | 0) | i << 8)) | i << 4)) | i << 2)) | i << 1)) << 1;
	}

	function ye(t) {
	    var i = t, e = t;
	    do {
	        (i.x < e.x || i.x === e.x && i.y < e.y) && (e = i), i = i.next;
	    } while (i !== t);
	    return e;
	}

	function be(t, i, e, s, n, r, h, o) {
	    return (n - h) * (i - o) >= (t - h) * (r - o) && (t - h) * (s - o) >= (e - h) * (i - o) && (e - h) * (r - o) >= (n - h) * (s - o);
	}

	function Se(t, i) {
	    return t.next.i !== i.i && t.prev.i !== i.i && !function(t, i) {
	        var e = t;
	        do {
	            if (e.i !== t.i && e.next.i !== t.i && e.i !== i.i && e.next.i !== i.i && ke(e, e.next, t, i)) return !0;
	            e = e.next;
	        } while (e !== t);
	        return !1;
	    }(t, i) && (Ie(t, i) && Ie(i, t) && function(t, i) {
	        var e = t, s = !1, n = (t.x + i.x) / 2, r = (t.y + i.y) / 2;
	        do {
	            e.y > r != e.next.y > r && e.next.y !== e.y && n < (e.next.x - e.x) * (r - e.y) / (e.next.y - e.y) + e.x && (s = !s), 
	            e = e.next;
	        } while (e !== t);
	        return s;
	    }(t, i) && (Ce(t.prev, t, i.prev) || Ce(t, i.prev, i)) || Te(t, i) && Ce(t.prev, t, t.next) > 0 && Ce(i.prev, i, i.next) > 0);
	}

	function Ce(t, i, e) {
	    return (i.y - t.y) * (e.x - i.x) - (i.x - t.x) * (e.y - i.y);
	}

	function Te(t, i) {
	    return t.x === i.x && t.y === i.y;
	}

	function ke(t, i, e, s) {
	    var n = Oe(Ce(t, i, e)), r = Oe(Ce(t, i, s)), h = Oe(Ce(e, s, t)), o = Oe(Ce(e, s, i));
	    return n !== r && h !== o || (!(0 !== n || !Ae(t, e, i)) || (!(0 !== r || !Ae(t, s, i)) || (!(0 !== h || !Ae(e, t, s)) || !(0 !== o || !Ae(e, i, s)))));
	}

	function Ae(t, i, e) {
	    return i.x <= Math.max(t.x, e.x) && i.x >= Math.min(t.x, e.x) && i.y <= Math.max(t.y, e.y) && i.y >= Math.min(t.y, e.y);
	}

	function Oe(t) {
	    return t > 0 ? 1 : t < 0 ? -1 : 0;
	}

	function Ie(t, i) {
	    return Ce(t.prev, t, t.next) < 0 ? Ce(t, i, t.next) >= 0 && Ce(t, t.prev, i) >= 0 : Ce(t, i, t.prev) < 0 || Ce(t, t.next, i) < 0;
	}

	function Ee(t, i) {
	    var e = new Re(t.i, t.x, t.y), s = new Re(i.i, i.x, i.y), n = t.next, r = i.prev;
	    return t.next = i, i.prev = t, e.next = n, n.prev = e, s.next = e, e.prev = s, r.next = s, 
	    s.prev = r, s;
	}

	function Le(t, i, e, s) {
	    var n = new Re(t, i, e);
	    return s ? (n.next = s.next, n.prev = s, s.next.prev = n, s.next = n) : (n.prev = n, 
	    n.next = n), n;
	}

	function Fe(t) {
	    t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), 
	    t.nextZ && (t.nextZ.prevZ = t.prevZ);
	}

	function Re(t, i, e) {
	    this.i = t, this.x = i, this.y = e, this.prev = null, this.next = null, this.z = 0, 
	    this.prevZ = null, this.nextZ = null, this.steiner = !1;
	}

	function Pe(t, i, e, s) {
	    for (var n = 0, r = i, h = e - s; r < e; r += s) n += (t[h] - t[r]) * (t[r + 1] + t[h + 1]), 
	    h = r;
	    return n;
	}

	le.exports = ce, le.exports.default = ce, ce.deviation = function(t, i, e, s) {
	    var n = i && i.length, r = n ? i[0] * e : t.length, h = Math.abs(Pe(t, 0, r, e));
	    if (n) for (var o = 0, a = i.length; o < a; o++) {
	        var l = i[o] * e, c = o < a - 1 ? i[o + 1] * e : t.length;
	        h -= Math.abs(Pe(t, l, c, e));
	    }
	    var u = 0;
	    for (o = 0; o < s.length; o += 3) {
	        var f = s[o] * e, d = s[o + 1] * e, p = s[o + 2] * e;
	        u += Math.abs((t[f] - t[p]) * (t[d + 1] - t[f + 1]) - (t[f] - t[d]) * (t[p + 1] - t[f + 1]));
	    }
	    return 0 === h && 0 === u ? 0 : Math.abs((u - h) / h);
	}, ce.flatten = function(t) {
	    for (var i = t[0][0].length, e = {
	        vertices: [],
	        holes: [],
	        dimensions: i
	    }, s = 0, n = 0; n < t.length; n++) {
	        for (var r = 0; r < t[n].length; r++) for (var h = 0; h < i; h++) e.vertices.push(t[n][r][h]);
	        n > 0 && (s += t[n - 1].length, e.holes.push(s));
	    }
	    return e;
	};

	var He = le.exports;

	const De = {
	    "clip-inside": .1,
	    "clip-outside": .2,
	    "flat-inside": .3,
	    "flat-outside": .4,
	    "color": .5,
	    "video": .6,
	    "elevate": .7
	}, Ge = [], Ne = [ 1, 1, 1 ], je = {
	    polygonFill: [ 255, 0, 0 ],
	    polygonOpacity: .8
	}, Be = new t.Coordinate(0, 0), Ue = new t.Coordinate(0, 0), ze = [], Ve = new t.Coordinate(0, 0), We = new t.Point(0, 0), qe = new t.Point(0, 0), $e = new t.Point(0, 0);

	class Ye extends t.Polygon {
	    getMode() {
	        return this.Rs;
	    }
	    remove() {
	        const t = this.getLayer();
	        return t ? (t.removeMask(this), this.Ps(), super.remove(), this) : this;
	    }
	    getMesh(t, i, e) {
	        return this.isVisible() ? (this.xt || (this.xt = this.ze(t, i, e)), this.Hs(this.xt, i, e), 
	        this.xt) : null;
	    }
	    Ds(t) {
	        const i = this.getMap(), e = this.toGeoJSON(), s = He.flatten(e.geometry.coordinates);
	        for (let t = 0; t < s.vertices.length; t += 2) {
	            Ve.x = s.vertices[t], Ve.y = s.vertices[t + 1];
	            const e = wt(i, Ve);
	            s.vertices[t] = e[0], s.vertices[t + 1] = e[1];
	        }
	        const n = wt(i, this.getCenter()), r = [], h = "video" === this.getMode() ? 4 : s.vertices.length / 2;
	        for (let t = 0; t < h; t++) r.push(s.vertices[2 * t] - n[0]), r.push(s.vertices[2 * t + 1] - n[1]), 
	        r.push(0);
	        const o = He(r, s.holes, 3), a = new Q$1({
	            POSITION: r,
	            TEXCOORD: this.Gs(s.vertices)
	        }, o, 0, {
	            positionAttribute: "POSITION",
	            uv0Attribute: "TEXCOORD"
	        });
	        return a.generateBuffers(t), a;
	    }
	    Gs(t) {
	        const i = [ 0, 0, 1, 0, 1, 1, 0, 1 ];
	        if (this.hasHoles()) for (let e = i.length / 2 - 1; e < t.length; e += 2) i[e] = i[e + 1] = 0;
	        return i;
	    }
	    Ns() {
	        this.Ps(), delete this.xt;
	    }
	    js() {
	        return De[this.Rs];
	    }
	    Bs() {
	        const t = this.getSymbol(), {polygonFill: i, polygonOpacity: e} = t || je, s = mt([], i);
	        return s[0] /= 255, s[1] /= 255, s[2] /= 255, s[3] = ct(e) ? e : je.polygonOpacity, 
	        s;
	    }
	    Us(t = 0) {
	        const i = this.getMap(), e = i.getGLRes();
	        return i.altitudeToPoint(t, e);
	    }
	    zs(t) {
	        const i = wt(this.getMap(), this.getCenter()), e = fromRotationTranslationScale(t.localTransform, identity$1(Ge), i, Ne);
	        t.localTransform = e;
	    }
	    Ps() {
	        this.xt && (this.xt.material && this.xt.material.dispose(), this.xt.geometry && this.xt.geometry.dispose(), 
	        this.xt.dispose(), delete this.xt);
	    }
	    containsPoint(t) {
	        const i = this.getExtent();
	        if (Ve.x = t[0], Ve.y = t[1], !i.contains(Ve)) return !1;
	        const e = this.getHoles();
	        for (let i = 0; i < e.length; i++) if (this.Vs(e[i], t)) return !1;
	        const s = this.getShell();
	        return this.Vs(s, t);
	    }
	    Vs(t, i) {
	        const e = this.Ws(t);
	        let s = 0;
	        for (let e = 0; e < t.length; e++) {
	            Be.x = t[e].x, Be.y = t[e].y;
	            const n = e + 1 >= t.length ? 0 : e + 1;
	            Ue.x = t[n].x, Ue.y = t[n].y, Ve.x = i[0], Ve.y = i[1], ze[0] = Ve, ze[1] = Be, 
	            ze[2] = Ue;
	            s += this.Ws(ze);
	        }
	        return !(Math.abs(s - e) > 1e-8);
	    }
	    Ws(t) {
	        const i = this.getMap();
	        let e = 0;
	        const s = i.getGLRes(), n = i.coordToPointAtRes(t[0], s, We);
	        for (let a = 1; a < t.length - 1; a++) {
	            const l = i.coordToPointAtRes(t[a], s, qe), c = i.coordToPointAtRes(t[a + 1], s, $e);
	            e += Math.abs((r = n, o = c, ((h = l).x - r.x) * (o.y - r.y) - (h.y - r.y) * (o.x - r.x))) / 2;
	        }
	        var r, h, o;
	        return e;
	    }
	}

	const Xe = [ "shapechange", "symbolchange", "heightrangechange", "flatheightchange" ], Je = new t.Coordinate(0, 0), Ze = [], Ke = [];

	function Qe(t$1) {
	    if (!this._maskList) return;
	    const i = this.getMap();
	    if (!i) return;
	    const e = this.getRenderer();
	    if (e && !this._maskList.length) return void e._clearMask();
	    if (e && !es.call(this)) return e._deleteMaskUniforms(), void e.setToRedraw();
	    let s = 1 / 0, n = 1 / 0, h = -1 / 0, o = -1 / 0, a = -1 / 0, l = 1 / 0;
	    for (let t = 0; t < this._maskList.length; t++) {
	        const i = this._maskList[t];
	        if (!i.isVisible()) continue;
	        const e = i.getExtent();
	        if (!e) return;
	        if (e.xmin < s && (s = e.xmin), e.ymin < n && (n = e.ymin), e.xmax > h && (h = e.xmax), 
	        e.ymax > o && (o = e.ymax), i.qs) {
	            const t = i.qs();
	            t[0] < l && (l = t[0]), t[1] > a && (a = t[1]);
	        }
	    }
	    const {ratio: c, minHeight: u} = function(t, i) {
	        const e = t === 1 / 0 ? 0 : t, s = i === -1 / 0 ? 0 : i, n = Math.abs(s - e);
	        if (0 === n) return {
	            ratio: 1,
	            minHeight: 0
	        };
	        return {
	            ratio: Math.pow(n, -1),
	            minHeight: e
	        };
	    }(l, a), f = new t.Extent(s, n, h, o);
	    if (!this._projViewMatrix || "shapechange" === t$1) {
	        const {projViewMatrix: t, mapExtent: i} = is.call(this, f);
	        this._projViewMatrix = t, this._mapExtent = i;
	    }
	    const d = this._mapExtent, p = this._projViewMatrix;
	    Je.x = d.xmin, Je.y = d.ymin;
	    const g = ns(Ze, Je, i);
	    Je.x = d.xmax, Je.y = d.ymax;
	    const m = ns(Ke, Je, i), v = [ g[0], g[1], m[0], m[1] ];
	    e ? e.setMask(v, p, c, u) : this.once("renderercreate", t => {
	        t.renderer.setMask(v, p, c, u);
	    });
	}

	function ts() {
	    return this._maskList ? (this._maskList.forEach(t => {
	        t.remove();
	    }), this._maskList = [], Qe.call(this), this) : this;
	}

	function is(t) {
	    const i = this.getMap(), e = i.getView(), s = i.getFitZoom(t), n = t.getCenter();
	    i.setView({
	        center: n,
	        zoom: s,
	        pitch: 0,
	        bearing: 0
	    });
	    const r = i.getExtent(), h = copy$5([], i.projViewMatrix);
	    return i.setView(e), {
	        mapExtent: r,
	        projViewMatrix: h
	    };
	}

	function es() {
	    for (let t = 0; t < this._maskList.length; t++) if (this._maskList[t].isVisible()) return !0;
	    return !1;
	}

	function ss(t) {
	    return class extends t {
	        removeMask(t) {
	            if (!this._maskList) return this;
	            if (!t) return ts.call(this), this;
	            const i = Array.isArray(t) ? t : [ t ];
	            for (let t = 0; t < i.length; t++) {
	                const e = i[t], s = this._maskList.indexOf(e);
	                s > -1 && this._maskList.splice(s, 1);
	            }
	            return Qe.call(this), this;
	        }
	        setMask(t) {
	            return this.removeMask(), this._maskList || (this._maskList = []), Array.isArray(t) ? t.forEach(t => {
	                this._maskList.push(t);
	            }) : this._maskList.push(t), this._maskList.forEach(t => {
	                t._bindLayer(this), t.$s && t.$s();
	            }), Qe.call(this, "shapechange"), this;
	        }
	        onAdd() {
	            super.onAdd(), Qe.call(this, "shapechange");
	        }
	        getMasks() {
	            return this._maskList || [];
	        }
	        _onGeometryEvent(t) {
	            if (!t || !t.target) return;
	            const i = t.type;
	            "shapechange" === i && t.target instanceof Ye && t.target.Ns(), t.target instanceof Ye && Xe.indexOf(i) > -1 && Qe.call(this, i), 
	            super._onGeometryEvent && super._onGeometryEvent(t);
	        }
	        identifyMask(t, i) {
	            if (!this.getMap()) return [];
	            if (!this._maskList || !this._maskList.length) return [];
	            const e = at({}, i);
	            e.excludeMasks = !0;
	            const s = this.identifyAtPoint(t, e), n = s.length && s[0].coordinate;
	            return n ? this._hitMasks(n) : [];
	        }
	        _hitMasks(t) {
	            const i = this._maskList;
	            if (!i) return [];
	            const e = [];
	            for (let s = 0; s < i.length; s++) {
	                const n = i[s].getMode();
	                !i[s].containsPoint(t) || "color" !== n && "video" !== n || e.push(i[s]);
	            }
	            return e;
	        }
	        remove() {
	            this._maskList && this._maskList.length && this._maskList.forEach(t => {
	                t.remove();
	            }), super.remove();
	        }
	    };
	}

	function ns(t$1, e, s, n = 0) {
	    if (!(s && e instanceof t.Coordinate)) return null;
	    const r = s.coordinateToPointAtRes(e, s.getGLRes());
	    return t$1[0] = r.x, t$1[1] = r.y, t$1[2] = n, t$1;
	}

	const rs = new t__namespace.Coordinate(0, 0), hs = new t__namespace.Point(0, 0), os = [], as = [], ls = {
	    tileGrids: [],
	    count: 0
	}, cs = "01", us = "1";

	class fs extends(ss(t__namespace.TileLayer)){
	    constructor(t, i) {
	        i && !i.tileSystem && ("cesium" === i.type || "cesium-ion" === i.type ? i.tileSystem = [ 1, 1, -180, -90 ] : "tianditu" === i.type && (i.tileSystem = [ 1, -1, -180, 90 ])), 
	        super(t, i);
	    }
	    getTileUrl(t, i, e) {
	        let s = super.getTileUrl(t, i, e);
	        return "mapbox" === this.options.type && this.options.requireSkuToken && (this.Ys || (this.Ys = this.Xs()), 
	        s.indexOf("?") > -1 ? s += "&sku=" + this.Ys : s += "?sku=" + this.Ys), s;
	    }
	    getMaxAvailableZoom() {
	        return this.getSpatialReference().getMaxZoom();
	    }
	    Xs() {
	        let t = "";
	        for (let i = 0; i < 10; i++) t += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(62 * Math.random())];
	        return [ us, cs, t ].join("");
	    }
	    setSkinLayers(t) {
	        this.Js = t;
	        const i = this.getRenderer();
	        i && (i.clear(), i.setToRedraw());
	    }
	    getSkinTiles(i) {
	        const e = this.getRenderer();
	        if (!e) return ls;
	        const s = e.getTileGridsInCurrentFrame().tileGrids[0];
	        if (!s) return ls;
	        const n = i.getId(), r = this._getTileConfig().tileSystem.scale, h = i.getTileSize().width, o = s.tiles;
	        if (!o.length) return ls;
	        const a = this.getMap(), l = s.parents || os, c = l.length, u = l.concat(o), f = i.getSpatialReference(), d = o[0].extent2d.getWidth(), p = r.x, g = r.y, m = [], v = [], w = new Set, _ = this._getTileConfig().tileSystem.scale.y;
	        for (let e = 0; e < u.length; e++) {
	            const s = u[e], {res: r} = s;
	            let o = s.nw;
	            o || (o = s.nw = a.pointAtResToCoord(s.extent2d.getMin(hs), s.res));
	            const {res: l, zoom: M} = Ii(f, s.z, r), x = l / r, y = Oi(l, h, r, d), {extent2d: b, offset: S} = s, C = y * s.x, T = y * s.y;
	            if (s.skinTileIds || (s.skinTileIds = {}), !s.skinTileIds[n]) {
	                const e = new Set, r = [], a = Ai(i, s.x, s.y, M, o, S, g, y, 0);
	                for (let s = 0; s < a.length; s++) {
	                    const n = a[s];
	                    if (e.has(n.id)) continue;
	                    n.idx = n.x, n.idy = n.y, n.res = l, n.url = i.getTileUrl(n.x, n.y, n.z + i.options.zoomOffset);
	                    const o = p * (n.x - C) * h, c = g * (n.skinY - T) * h, u = b.xmin * x + o, f = b.ymax * x + c, d = b.ymin * x + c;
	                    n.extent2d = _ > 0 ? new t__namespace.PointExtent(u, d, u + h, d + h) : new t__namespace.PointExtent(u, f - h, u + h, f), 
	                    e.add(n.id), r.push(n);
	                }
	                s.skinTileIds[n] = r;
	            }
	            const k = s.skinTileIds[n];
	            for (let t = 0; t < k.length; t++) w.has(k[t].id) || (e < c ? m.push(k[t]) : v.push(k[t]), 
	            w.add(k[t].id));
	        }
	        return {
	            tileGrids: [ {
	                extent: s.extent,
	                tiles: v,
	                parents: m,
	                count: v.length
	            } ],
	            count: v.length
	        };
	    }
	    getSkinLayer(t) {
	        return this.getSkinLayers()[t];
	    }
	    getSkinLayers() {
	        return this.Js || os;
	    }
	    getSkinCount() {
	        return this.Js && this.Js.length || 0;
	    }
	    queryTerrainByProjCoord(t) {
	        const i = this.getRenderer();
	        if (!i) return as[0] = null, as[1] = 0, as;
	        const e = this.getMap(), s = i.Ss(t);
	        if (!s) return as[0] = null, as[1] = 0, as;
	        const n = e._prjToPointAtRes(t, 1, hs);
	        return i.Cs(as, s.id, s, n, 1);
	    }
	    queryTileTerrainByProjCoord(t, i, e) {
	        const s = this.getRenderer();
	        if (!s) return as[0] = null, as[1] = 0, as;
	        const n = this.getMap()._prjToPointAtRes(t, 1, hs);
	        return s.Cs(as, i, e, n, 1);
	    }
	    queryTileTerrainByPointAtRes(t, i, e, s) {
	        const n = this.getRenderer();
	        return n ? n.Cs(as, e, s, t, i) : (as[0] = null, as[1] = 0, as);
	    }
	    queryTerrain(t) {
	        if (!this.getRenderer()) return 0;
	        const i = this.getMap().getProjection().project(t, rs);
	        return this.queryTerrainByProjCoord(i);
	    }
	    queryTileAltitude(t, i, e) {
	        const s = this.getRenderer();
	        return s ? s.As(t, i, e) : null;
	    }
	    queryTileMesh(t, i) {
	        const e = this.getRenderer();
	        e && e.Zs(t, i);
	    }
	    getTerrainTiles(i) {
	        const {x: e, y: s, z: n, res: r, offset: h} = i, o = i.extent2d.getWidth(), a = this._getTileConfig(), l = this.getSpatialReference(), {res: c, zoom: u} = Ii(l, n, r), f = this.getTileSize().width, d = Oi(c, f, r, o);
	        let p = i.nw;
	        p || (p = i.nw = this.getMap().pointAtResToCoord(i.extent2d.getMin(hs), i.res));
	        const g = Ti(this, e, s, u, p, h, a.tileSystem.scale.y, d, 1)[0];
	        for (let i = 0; i < g.length; i++) {
	            const {x: e, y: s} = g[i], n = a.getTilePointNW(e, s, c, hs);
	            g[i].res = c, g[i].extent2d = new t__namespace.PointExtent(n.x, n.y, n.x + f, n.y - f);
	        }
	        return g;
	    }
	    isTerrainTileLoaded(t) {
	        const i = this.getRenderer();
	        return !!i && i.isTileCached(t);
	    }
	    updateMaterial(t) {
	        if (!t) return;
	        this.options.material || (this.options.material = {}), at(this.options.material, t);
	        const i = this.getRenderer();
	        i && i.updateMaterial(t);
	    }
	    setMaterial(t) {
	        if (!t) return;
	        this.options.material = t;
	        const i = this.getRenderer();
	        i && i.setMaterial(t);
	    }
	}

	fs.mergeOptions({
	    "forceRenderOnMoving": !0,
	    "forceRenderOnZooming": !0,
	    "forceRenderOnRotating": !0,
	    "fadeAnimation": !1,
	    "fadeDuration": 1e3 / 60 * 15,
	    "tileLimitPerFrame": 2,
	    "newTerrainTileRenderLimitPerFrameOnInteracting": 1,
	    "opacity": 1,
	    "renderer": "gl",
	    "pyramidMode": 1,
	    "tileSize": 256,
	    "terrainWidth": 65,
	    "backZoomOffset": 0,
	    "depthMask": !0,
	    "blendSrc": "one",
	    "blendDst": "one minus src alpha",
	    "requireSkuToken": !0,
	    "cesiumIonTokenURL": "https://api.cesium.com/v1/assets/1/endpoint?access_token=",
	    "tileRetryCount": 0,
	    "shader": "default",
	    "terrainTileMode": !0,
	    "tempTileCacheSize": 64,
	    "tileStackStartDepth": 7,
	    "tileStackDepth": 6
	}), fs.registerJSONType("TerrainLayer"), fs.registerRenderer("gl", re);

	const ds = () => {}, ps = [ null, 0 ];

	class gs extends t__namespace.Layer {
	    static fromJSON(i) {
	        if (!i || "GroupGLLayer" !== i.type) return null;
	        const e = i.layers.map(i => t__namespace.Layer.fromJSON(i));
	        return new gs(i.id, e, i.options);
	    }
	    constructor(t, i, e) {
	        super(t, e), this.layers = i && i.slice() || [], this.layers.forEach(t => {
	            if (t.getMap()) throw new Error(`layer(${t.getId()} is already added on map`);
	        }), this.Ks(), this.sortLayersByZIndex(), this.Qs = {};
	    }
	    sortLayersByZIndex() {
	        if (this.layers && this.layers.length) {
	            for (let t = 0, i = this.layers.length; t < i; t++) this.layers[t].__group_gl_order = t;
	            this.layers.sort(vs);
	        }
	    }
	    setSceneConfig(t) {
	        this.options.sceneConfig = t;
	        const i = this.getRenderer();
	        return i && i.updateSceneConfig(), this;
	    }
	    getSceneConfig() {
	        return JSON.parse(JSON.stringify(this.ut()));
	    }
	    ut() {
	        return this.options.sceneConfig || {};
	    }
	    getGroundConfig() {
	        return this.ut().ground;
	    }
	    getWeatherConfig() {
	        return this.ut().weather;
	    }
	    addLayer(t, i) {
	        if (t.getMap()) throw new Error(`layer(${t.getId()}) is already added on map`);
	        if ("gl" !== t.options.renderer) throw new Error(`layer(${t.getId()})'s renderer is canvas, not supported to be added to GroupGLLayer`);
	        void 0 === i ? this.layers.push(t) : this.layers.splice(i, 0, t), this.Ks(), this.sortLayersByZIndex();
	        const e = this.getRenderer();
	        return e ? (this.tn(t), this.in(), e.setToRedraw(), this) : this;
	    }
	    removeLayer(i) {
	        t__namespace.Util.isString(i) && (i = this.getChildLayer(i));
	        const e = this.layers.indexOf(i);
	        if (e < 0) return this;
	        this.in();
	        const s = i.getRenderer();
	        s && s.setTerrainHelper && s.setTerrainHelper(null), i._doRemove(), this.en(i), 
	        delete this.Qs[i.getId()], this.layers.splice(e, 1);
	        const n = this.getRenderer();
	        return n ? (n.setToRedraw(), this) : this;
	    }
	    clearLayers() {
	        const t = this.getLayers();
	        for (let i = 0; i < t.length; i++) t[i] && t[i].remove();
	        return this;
	    }
	    ki() {
	        let t = 0;
	        for (let i = 0; i < this.layers.length; i++) this.layers[i].setPolygonOffset && this.layers[i].getPolygonOffsetCount && (t += this.layers[i].getPolygonOffsetCount());
	        let i = 0;
	        for (let e = this.layers.length - 1; e >= 0; e--) this.layers[e].setPolygonOffset && this.layers[e].getPolygonOffsetCount && (this.layers[e].setPolygonOffset(i, t), 
	        i += this.layers[e].getPolygonOffsetCount());
	        this.sn = i;
	    }
	    getPolygonOffsetCount() {
	        return this.sn;
	    }
	    getLayers() {
	        return this.layers.slice();
	    }
	    ue() {
	        return this.layers;
	    }
	    toJSON() {
	        const t = [];
	        if (this.layers) for (let i = 0; i < this.layers.length; i++) {
	            const e = this.layers[i];
	            e && (e && e.toJSON && t.push(e.toJSON()));
	        }
	        return {
	            "type": this.getJSONType(),
	            "id": this.getId(),
	            "layers": t,
	            "options": this.config()
	        };
	    }
	    onLoadEnd() {
	        this.layers.forEach(t => {
	            this.tn(t);
	        }), this.options.terrain && this.nn(), super.onLoadEnd();
	    }
	    tn(t) {
	        const i = this.getMap();
	        this.Qs[t.getId()] = t, t._canvas = this.getRenderer().canvas, t._bindMap(i), t.once("renderercreate", this.rn, this), 
	        t.remove = () => {
	            this.removeLayer(t), t.constructor.prototype.remove.call(t), delete t.remove;
	        }, t.load(), this.hn(t);
	    }
	    onRemove() {
	        this.an(), this.layers.forEach(t => {
	            this.ln(t), t._doRemove(), this.en(t);
	        }), this.Qs = {}, this.clearAnalysis(), super.onRemove();
	    }
	    getChildLayer(t) {
	        return this.Qs[t] || null;
	    }
	    getLayer(t) {
	        return this.getChildLayer(t);
	    }
	    hn(t) {
	        t.on("show hide", this.cn, this), t.on("idchange", this.un, this);
	    }
	    en(t) {
	        t.off("show hide", this.cn, this), t.off("idchange", this.un, this);
	    }
	    cn() {
	        const t = this.getRenderer();
	        t && t.setToRedraw();
	    }
	    un(t) {
	        const i = t.new, e = t.old, s = this.getLayer(e);
	        delete this.Qs[e], this.Qs[i] = s;
	    }
	    rn(t) {
	        t.renderer.clearCanvas = ms;
	    }
	    Ks() {
	        const t = {};
	        this.layers.forEach(i => {
	            const e = i.getId();
	            if (t[e]) throw new Error(`Duplicate child layer id (${e}) in the GroupGLLayer (${this.getId()})`);
	            t[e] = 1;
	        });
	    }
	    addAnalysis(t) {
	        this.wi = this.wi || [], this.wi.push(t);
	        const i = this.getRenderer();
	        i && i.setToRedraw();
	    }
	    removeAnalysis(t) {
	        if (this.wi) {
	            const i = this.wi.indexOf(t);
	            i > -1 && (this.wi.splice(i, 1), t.remove());
	        }
	        const i = this.getRenderer();
	        i && i.setToRedraw();
	    }
	    clearAnalysis() {
	        this.wi && (this.wi.forEach(t => {
	            t.remove();
	        }), this.wi = []);
	        const t = this.getRenderer();
	        t && t.setToRedraw();
	    }
	    identify(i, e = {}) {
	        const s = this.getMap(), n = this.getRenderer();
	        if (!s || !n) return [];
	        const r = s.coordToContainerPoint(new t__namespace.Coordinate(i));
	        return this.identifyAtPoint(r, e);
	    }
	    identifyAtPoint(t, i = {}) {
	        const e = i.includeInternals, s = this.getLayers(), n = i && i.childLayers || s, r = this.getMap();
	        if (!r) return [];
	        const h = lt(i.count) ? 1 : i.count;
	        let o = [];
	        for (let r = n.length - 1; r >= 0; r--) {
	            const h = n[r];
	            if (s.indexOf(h) < 0 || !h.identifyAtPoint) continue;
	            const a = h.options.geometryEvents;
	            if (e && (void 0 === a || !1 === a || 0 === a)) continue;
	            let l = h.identifyAtPoint(t, i);
	            if (!l || !l.length) continue;
	            if (i.filter && (l = l.filter(t => i.filter(t))), !l.length) continue;
	            const c = h.getId();
	            for (let t = 0; t < l.length; t++) l[t] && (l[t].layer = c);
	            o.push(...l);
	        }
	        if (i.orderByCamera) {
	            const t = r.cameraPosition;
	            o.sort((i, e) => e.point ? i.point ? dist$2(i.point, t) - dist$2(e.point, t) : 1 : -1);
	        }
	        return h && (o = o.slice(0, h)), o;
	    }
	    getTerrain() {
	        return this.options.terrain;
	    }
	    setTerrain(t) {
	        return this.options.terrain = t, this.getRenderer() ? (this.nn(), this.getMap().updateCenterAltitude(), 
	        this) : this;
	    }
	    removeTerrain() {
	        return this.setTerrain(null);
	    }
	    updateTerrainMaterial(t) {
	        this.le && t && (this.options.terrain.material ? at(this.options.terrain.material, t) : this.options.terrain.material = t, 
	        this.le.updateMaterial(t));
	    }
	    nn() {
	        const t = this.getRenderer();
	        t && t.setToRedraw();
	        const i = this.options.terrain;
	        if (this.le) {
	            const t = this.le.options;
	            if (i && t.urlTemplate === i.urlTemplate && t.spatialReference === i.spatialReference) {
	                for (const t in i) "material" === t ? this.le.setMaterial(i[t]) : "urlTemplate" !== t && "spatialReference" !== t && this.le.config(t, i[t]);
	                return this;
	            }
	            this.an();
	        }
	        if (this.dn(), !i) return this;
	        this.le = new fs("__terrain_in_group", i), this.in(), this.le.on("tileload", this.pn, this), 
	        this.tn(this.le);
	        const e = i.masks;
	        return e && e.length ? this.le.setMask(e) : this.le.removeMask(), this.fire("terrainlayercreated"), 
	        this;
	    }
	    queryTerrain(t) {
	        return this.le ? this.le.queryTerrain(t) : ps;
	    }
	    queryTerrainByProjCoord(t) {
	        return this.le ? this.le.queryTerrainByProjCoord(t) : ps;
	    }
	    in() {
	        if (!this.le) return;
	        const t = this.layers, i = [];
	        for (let e = 0; e < t.length; e++) {
	            if (!t[e]) continue;
	            const s = t[e], n = s.getRenderer();
	            if (n.renderTerrainSkin) {
	                if (n.deleteTile === ds) {
	                    i.push(t[e]);
	                    continue;
	                }
	                s.getTiles = () => this.le.getSkinTiles(s), n.drawTileOnTerrain ? n.drawTile = (...t) => n.drawTileOnTerrain(...t) : n.drawTile = ds, 
	                n.deleteTile = ds, i.push(t[e]);
	            }
	            n.setTerrainHelper && n.setTerrainHelper(this.le);
	        }
	        this.le.setSkinLayers(i);
	    }
	    ln(t) {
	        if (!function(t) {
	            if (!t) return !1;
	            const i = t.getRenderer();
	            if (!i) return !1;
	            return !!i.renderTerrainSkin;
	        }(t)) return;
	        const i = t.getRenderer();
	        i && (i.setTerrainHelper && i.setTerrainHelper(null), i.clear && i.clear(), delete i.drawTile, 
	        delete i.deleteTile), delete t.getTiles;
	    }
	    dn() {
	        const t = this.layers;
	        for (let i = 0; i < t.length; i++) t[i] && this.ln(t[i]);
	    }
	    pn() {
	        const t = this.getRenderer();
	        t && t.setToRedraw();
	    }
	    an() {
	        if (this.le) {
	            const t = this.le;
	            t.off("tileload", this.pn, this), this.en(t), this.le._doRemove(), delete this.le, 
	            this.fire("terrainlayerremoved");
	        }
	    }
	    getTerrainLayer() {
	        return this.le;
	    }
	    _bindMap(...t) {
	        if (this.options.single) {
	            const i = t[0].getLayers();
	            for (let t = 0; t < i.length; t++) if (i[t] instanceof gs) throw new Error("Only one GroupGLLayer is allowed in a map instance. Set options.single to false if you want to add two or more GroupGLLayers.");
	        }
	        return super._bindMap(...t);
	    }
	    fire(...t) {
	        if ("layerload" === t[0]) {
	            const t = this.ue();
	            for (const i of t) {
	                const t = i.getRenderer();
	                t && t.isRenderComplete() && i.fire("layerload");
	            }
	        }
	        super.fire(...t);
	    }
	}

	function ms() {}

	function vs(t, i) {
	    const e = t.getZIndex() - i.getZIndex();
	    return 0 === e ? t.__group_gl_order - i.__group_gl_order : e;
	}

	gs.mergeOptions({
	    renderer: "gl",
	    antialias: !0,
	    extensions: [],
	    single: !0,
	    onlyWebGL1: !1,
	    optionalExtensions: [ "ANGLE_instanced_arrays", "OES_element_index_uint", "OES_standard_derivatives", "OES_vertex_array_object", "OES_texture_half_float", "OES_texture_half_float_linear", "OES_texture_float", "OES_texture_float_linear", "WEBGL_depth_texture", "EXT_shader_texture_lod", "EXT_frag_depth", "EXT_texture_filter_anisotropic", "WEBGL_compressed_texture_astc", "WEBGL_compressed_texture_etc", "WEBGL_compressed_texture_etc1", "WEBGL_compressed_texture_pvrtc", "WEBGL_compressed_texture_s3tc", "WEBGL_compressed_texture_s3tc_srgb" ],
	    forceRenderOnZooming: !0,
	    forceRenderOnMoving: !0,
	    forceRenderOnRotating: !0,
	    viewMoveThreshold: 100,
	    geometryEvents: !0,
	    multiSamples: 4
	}), gs.registerJSONType("GroupGLLayer"), gs.registerRenderer("gl", mi), gs.registerRenderer("canvas", null);

	class ws {
	    constructor(t) {
	        this.gn = t, this.G = new Ve$1, this.onHDRLoaded = this.mn.bind(this), 
	        this.onHDRError = this.vn.bind(this);
	    }
	    getDirectionalLight() {
	        return this.jt && this.jt.directional || {};
	    }
	    getAmbientLight() {
	        return this.jt && this.jt.ambient || {};
	    }
	    getAmbientResource() {
	        return this.wn;
	    }
	    setConfig(t) {
	        const i = this.jt;
	        this.jt = JSON.parse(JSON.stringify(t));
	        let e = !1;
	        if (t && t.ambient && t.ambient.resource) {
	            if (!(i && i.ambient && function(t, i) {
	                if (!t.resource) return !1;
	                if (t.resource.url !== i.resource.url) return !1;
	                return !0;
	            }(i.ambient, t.ambient))) return void this._n();
	            this.wn && (t.ambient.prefilterCubeSize !== i.ambient && i.ambient.prefilterCubeSize && this.mn(), 
	            e = !0, t.ambient.resource.sh && (this.wn.sh = t.ambient.resource.sh));
	        } else this.Mn(), e = i && i.ambient && i.ambient.resource;
	        this.gn.fire("updatelights", {
	            ambientUpdate: e
	        });
	    }
	    xn(t) {
	        const i = t.getLayers();
	        for (let t = 0; t < i.length; t++) {
	            const e = i[t] && i[t].getRenderer();
	            if (e && e.regl) return e.regl;
	        }
	        const e = document.createElement("canvas"), s = m$2({
	            canvas: e,
	            attributes: {
	                depth: !1,
	                stencil: !1,
	                alpha: !1
	            }
	        });
	        return s.yn = !0, s;
	    }
	    _n() {
	        const t = this.jt.ambient.resource, i = t && t.url;
	        if (!i) return;
	        const e = [];
	        let s = 0, n = 0;
	        const r = () => {
	            n++, n >= s && this.bn(e);
	        }, h = function() {
	            throw new Error(`skybox image with url(${this.src}) failed to load, please check the image's url.`);
	        };
	        if (i.top || i.nx) {
	            const {front: t, back: n, right: o, left: a, top: l, bottom: c} = i, {nx: u, ny: f, px: d, py: p, nz: g, pz: m} = i;
	            let v;
	            v = t ? [ a, o, n, t, l, c ] : [ u, d, g, m, p, f ], s = v.length;
	            for (let t = 0; t < s; t++) {
	                const i = new Image;
	                i.onload = r, i.onerror = h, i.src = v[t], e[t] = i;
	            }
	        } else {
	            const i = {
	                url: t.url,
	                arrayBuffer: !0,
	                hdr: !0,
	                flipY: !0
	            };
	            this.Sn = new en(i, this.G), this.Sn.once("complete", this.onHDRLoaded), 
	            this.Sn.once("error", this.onHDRError);
	        }
	    }
	    dispose() {
	        this.Mn();
	    }
	    mn() {
	        this.Sn && (this.wn = this.Cn(this.Sn), this.gn.fire("updatelights", {
	            "ambientUpdate": !0
	        }));
	    }
	    vn() {
	        this.gn.fire("hdrerror");
	    }
	    bn(t) {
	        this.wn = this.Cn(t), this.gn.fire("updatelights", {
	            "ambientUpdate": !0
	        });
	    }
	    Cn(t) {
	        const i = this.jt.ambient.resource, e = i.prefilterCubeSize || 256, s = this.xn(this.gn), n = ai$1.PBRHelper.createIBLMaps(s, {
	            envTexture: Array.isArray(t) ? t : t.getREGLTexture(s),
	            rgbmRange: Array.isArray(t) ? 9 : t.rgbmRange,
	            ignoreSH: !!i.sh,
	            envCubeSize: e,
	            prefilterCubeSize: e,
	            format: "array"
	        });
	        if (i.sh && (n.sh = i.sh, Array.isArray(n.sh[0]))) {
	            const t = n.sh, i = [];
	            for (let e = 0; e < t.length; e++) i.push(...t[e]);
	            n.sh = i;
	        }
	        return s.yn && (delete this.Sn, s.destroy()), n;
	    }
	    Mn() {
	        this.Sn && (this.Sn.dispose(), delete this.Sn), delete this.wn;
	    }
	}

	let _s, Ms, xs, ys, bs;

	t.Map.include({
	    setLights(t) {
	        return this.options.lights = t, this.Tn(), this;
	    },
	    getLights() {
	        return this.options.lights;
	    },
	    Tn() {
	        this.kn || (this.kn = new ws(this)), this.kn.setConfig(this.getLights());
	    },
	    getLightManager() {
	        return this.kn ? this.kn : (this.An || (this.An = !0, console.warn("map's light config is not set, use map.setLights(config) to set lights.")), 
	        null);
	    }
	}), t.Map.addOnLoadHook((function() {
	    this.options.lights && this.Tn();
	}));

	const Ss = {
	    color: [ 0, 0, 0, 0 ]
	}, Cs = {
	    enable: !0
	};

	t.Map.include({
	    setPostProcessConfig(t) {
	        return this.options.postProcessConfig = t, this;
	    },
	    getPostProcessConfig() {
	        return this.options.postProcessConfig;
	    }
	});

	const Ts = t.renderer.MapCanvasRenderer.prototype.drawLayerCanvas;

	t.renderer.MapCanvasRenderer.prototype.drawLayerCanvas = function() {
	    const t = Ts.apply(this, arguments);
	    return t && As(this, this.canvas), t;
	};

	const ks = t.renderer.MapCanvasRenderer.prototype.renderFrame;

	function As(t, i) {
	    const e = t.map.getPostProcessConfig();
	    if (!e || !e.enable) return;
	    var s, n;
	    _s || (s = i.width, n = i.height, _s = document.createElement("canvas", s, n), Ms = m$2({
	        canvas: _s,
	        attributes: {
	            depth: !1,
	            stencil: !1,
	            alpha: !0,
	            antialias: !1,
	            premultipliedAlpha: !1
	        }
	    }), xs = Ms.texture({
	        mag: "linear",
	        min: "linear",
	        mipmap: !1,
	        flipY: !0,
	        width: s,
	        height: n
	    }), ys = Ms.texture()), _s.width === i.width && _s.height === i.height || (_s.width = i.width, 
	    _s.height = i.height), Ms.clear(Ss);
	    const r = e.filmicGrain || Cs;
	    void 0 === r.enable && (r.enable = !0);
	    const h = e.vignette || Cs;
	    void 0 === h.enable && (h.enable = !0);
	    const o = e.colorLUT || Cs;
	    void 0 === o.enable && (o.enable = !0), t.On || (t.On = {});
	    const a = t.On;
	    if (o.enable) {
	        const i = o.lut;
	        if (!a.lutTexture || a.lutTexture.url !== i) {
	            const e = new Image;
	            e.onload = function() {
	                const s = {
	                    data: e,
	                    min: "linear",
	                    mag: "linear"
	                }, n = a.lutTexture ? a.lutTexture.texture(s) : Ms.texture(s);
	                a.lutTexture = {
	                    url: i,
	                    texture: n
	                }, t.setLayerCanvasUpdated();
	            }, e.src = i;
	        }
	    }
	    const l = {
	        "enableGrain": +!!r.enable,
	        "grainFactor": void 0 === r.factor ? .15 : r.factor,
	        "timeGrain": performance.now(),
	        "enableVignette": +!!h.enable,
	        "lensRadius": h.lensRadius || [ .8, .25 ],
	        "frameMod": 1,
	        "enableLut": +!!o.enable,
	        "lookupTable": a.lutTexture ? a.lutTexture.texture : ys
	    };
	    bs || (bs = new ri(Ms)), bs.postprocess(null, l, xs({
	        width: _s.width,
	        height: _s.height,
	        data: i,
	        flipY: !0,
	        mag: "linear",
	        min: "linear",
	        mipmap: !1
	    })), r.enable && t.setLayerCanvasUpdated(), t.context.drawImage(_s, 0, 0, _s.width, _s.height);
	}

	t.renderer.MapCanvasRenderer.prototype.renderFrame = function() {
	    const t = ks.apply(this, arguments), i = this.map.getPostProcessConfig(), e = i && i.filmicGrain;
	    return !e || void 0 !== e.enable && !0 !== e.enable || this.setLayerCanvasUpdated(), 
	    t;
	};

	const Os = [];

	function Is(t) {
	    if (!t.properties.showOnlyTimestamp) return;
	    delete t.properties.showOnlyTimestamp;
	    const i = t.properties.oldElementsBeforeHighlight;
	    i && t.geometry.elements !== i && (t.geometry.deleteElements(), t.geometry.setElements(i));
	}

	function Es(t) {
	    if (!t.properties.highlightTimestamp) return;
	    const i = t.defines;
	    delete i.HAS_HIGHLIGHT_COLOR, delete i.HAS_HIGHLIGHT_OPACITY, t.setDefines(i), delete t.properties.highlightTimestamp;
	    const e = t.properties.oldElementsBeforeHighlight;
	    e && t.geometry.elements !== e && (t.geometry.deleteElements(), t.geometry.setElements(t.properties.oldElementsBeforeHighlight), 
	    delete t.properties.hasInvisible), Ls(t);
	}

	function Ls(t) {
	    if (!t) return;
	    const {hlBloomMesh: i} = t.properties;
	    if (i) {
	        const e = i.geometry;
	        e.elements && e.elements.destroy && e.deleteElements(), i.dispose(), delete t.properties.hlBloomMesh;
	    }
	}

	var Fs = Object.freeze({
	    __proto__: null,
	    clearShowOnly: Is,
	    showOnly: function(t, i, e, s, n) {
	        const {showOnlyTimestamp: r} = i.properties;
	        if (!e) return void (r && Is(i));
	        if (s === r) return;
	        i.properties.showOnlyTimestamp = s;
	        const h = e.keys(), o = [];
	        for (const t of h) {
	            if (!n.has(t)) continue;
	            const i = n.get(t);
	            i && pt(o, i);
	        }
	        i.properties.oldElementsBeforeHighlight || (i.properties.oldElementsBeforeHighlight = i.geometry.elements), 
	        i.geometry.elements !== i.properties.oldElementsBeforeHighlight && i.geometry.elements.destroy && i.geometry.deleteElements();
	        const a = {
	            data: o,
	            primitive: i.geometry.getPrimitive()
	        };
	        i.geometry.setElements(t.elements(a)), i.geometry.generateBuffers(t);
	    },
	    clearHighlight: Es,
	    highlightMesh: function(t, i, e, s, n) {
	        const {highlightTimestamp: r} = i.properties;
	        if (!e) return void (r && Es(i));
	        if (s === r) return;
	        const h = i.geometry.getVertexCount();
	        let {aHighlightColor: o, aHighlightOpacity: l} = i.geometry.properties;
	        o && o.fill(0), l && l.fill(255);
	        let c = !1, u = !1;
	        const f = e.keys();
	        let p = null, m = null;
	        for (const t of f) if (n.has(t)) {
	            const i = e.get(t), {color: s, bloom: r, visible: a} = i;
	            let f, {opacity: g} = i;
	            if (s && (c || (o || (o = new Uint8Array(4 * h)), c = !0), f = vt(Os, s)), g = lt(g) ? 1 : g, 
	            g < 1 && (u || (l || (l = new Uint8Array(h), l.fill(255)), u = !0)), !1 === a && (m || (m = new Set), 
	            m.add(t)), f || g < 1 || r) {
	                const i = n.get(t);
	                if (i) for (let t = 0; t < i.length; t++) {
	                    const e = i[t];
	                    f && set$3(o.subarray(4 * e, 4 * e + 4), ...f), g < 1 && (l[e] = 255 * g), r && (p || (p = []), 
	                    p.push(e));
	                }
	            }
	        }
	        const v = i.defines;
	        if (c ? (i.geometry.data.aHighlightColor ? i.geometry.updateData("aHighlightColor", o) : (i.geometry.data.aHighlightColor = o, 
	        i.geometry.generateBuffers(t)), i.geometry.properties.aHighlightColor = o, v.HAS_HIGHLIGHT_COLOR = 1) : v.HAS_HIGHLIGHT_COLOR && (i.geometry.updateData("aHighlightColor", o), 
	        delete v.HAS_HIGHLIGHT_COLOR), u ? (i.geometry.data.aHighlightOpacity ? i.geometry.updateData("aHighlightOpacity", l) : (i.geometry.data.aHighlightOpacity = l, 
	        i.geometry.generateBuffers(t)), i.geometry.properties.aHighlightOpacity = l, v.HAS_HIGHLIGHT_OPACITY = 1) : v.HAS_HIGHLIGHT_OPACITY && (i.geometry.updateData("aHighlightOpacity", l), 
	        delete v.HAS_HIGHLIGHT_OPACITY), m && m.size > 0) {
	            let e = [];
	            n.forEach((t, i) => {
	                m.has(i) || pt(e, t);
	            }), i.properties.hasInvisible = !0, i.properties.oldElementsBeforeHighlight || (i.properties.oldElementsBeforeHighlight = i.geometry.elements);
	            const s = {
	                data: e,
	                primitive: i.geometry.getPrimitive()
	            };
	            i.geometry.elements !== i.properties.oldElementsBeforeHighlight && i.geometry.elements.destroy && i.geometry.deleteElements(), 
	            e = t.elements(s), i.geometry.setElements(e), i.geometry.generateBuffers(t);
	        } else i.properties.hasInvisible && (i.geometry.deleteElements(), i.geometry.setElements(i.properties.oldElementsBeforeHighlight), 
	        delete i.properties.hasInvisible);
	        i.setDefines(v), i.properties.highlightTimestamp = s;
	        let w = i.properties.hlBloomMesh;
	        if (p && p.length) {
	            if (w) {
	                const t = copy$5(w.localTransform, i.localTransform), e = copy$5(w.positionMatrix, i.positionMatrix);
	                w.setLocalTransform(t), w.setPositionMatrix(e), i.properties.hlBloomMesh.geometry.setElements(p);
	            } else {
	                const e = new Q$1(i.geometry.data, p, 0, i.geometry.desc);
	                e.generateBuffers(t);
	                const s = i.material;
	                w = new ke$1(e, s, i.config);
	                const n = i.uniforms;
	                for (const t in n) Object.defineProperty(w.uniforms, t, {
	                    enumerable: !0,
	                    get: function() {
	                        return i.getUniform(t);
	                    }
	                });
	                const r = at({}, i.defines);
	                r.HAS_BLOOM = 1;
	                const h = copy$5([], i.localTransform), o = copy$5([], i.positionMatrix);
	                w.setLocalTransform(h), w.setPositionMatrix(o), at(w.properties, i.properties), 
	                at(e.properties, i.geometry.properties), w.setDefines(r), w.bloom = 1;
	            }
	            i.properties.hlBloomMesh = w;
	        } else w && Ls(i);
	    },
	    deleteHighlightBloomMesh: Ls
	});

	const Rs = [ 0, 0, 0, 0 ];

	class Ps {
	    constructor(t, i, e, s, n, r) {
	        this.renderer = new k$1(t), this.sceneConfig = i, this.s = e, this.In = s, 
	        this.En = n, this.sn = r || {
	            factor: 0,
	            units: 0
	        }, this.h(), this.Ln = [];
	    }
	    render(t, i, e) {
	        this.Fn();
	        const s = this.s.getMap();
	        this.renderer.regl.clear({
	            color: Rs,
	            depth: 1,
	            stencil: 255,
	            framebuffer: this.Rn
	        }), this.renderer.render(this.Pn, i, t, this.Rn);
	        const n = this.s.getRenderer().canvas;
	        this.Ln[0] = n.width, this.Ln[1] = n.height;
	        const r = at({
	            colorRamp: this.Hn,
	            inputTexture: this.Rn,
	            projViewMatrix: s.projViewMatrix,
	            textureOutputSize: this.Ln
	        }, i);
	        this.m(), this.renderer.render(this.Dn, r, this.H, e);
	    }
	    dispose() {
	        this.Pn && (this.Pn.dispose(), delete this.Pn), this.Dn && (this.Dn.dispose(), delete this.Dn), 
	        this.S && (this.S.geometry.dispose(), this.S.dispose(), delete this.S, delete this.H), 
	        this.Rn && (this.Rn.destroy(), delete this.Rn);
	    }
	    Gn() {
	        const t = this.In;
	        let i = this.Nn, e = this.jn;
	        e ? e.clearRect(0, 0, 256, 1) : (i = this.Nn = document.createElement("canvas"), 
	        i.width = 256, i.height = 1, e = this.jn = i.getContext("2d"));
	        const s = e.createLinearGradient(0, 0, 256, 1);
	        for (let i = 0; i < t.length; i++) s.addColorStop(t[i][0], t[i][1]);
	        e.fillStyle = s, e.fillRect(0, 0, 256, 1), this.Hn && this.Hn.destroy();
	        const n = this.renderer.regl;
	        this.Hn = n.texture({
	            width: 256,
	            height: 1,
	            data: i,
	            min: "linear",
	            mag: "linear",
	            premultiplyAlpha: !0
	        });
	    }
	    Fn() {
	        const t = this.s.getRenderer().canvas, i = Math.ceil(t.width / 4), e = Math.ceil(t.height / 4), s = this.Rn;
	        s.width === i && s.height === e || s.resize(i, e);
	    }
	    h() {
	        this.Gn(), this.Bn(), this.Un(), this.p();
	    }
	    p() {
	        const t = new tn;
	        t.generateBuffers(this.renderer.regl), this.S = new ke$1(t), this.H = new Ke$1([ this.S ]);
	    }
	    m() {
	        const t = this.s.getMap(), i = At.getGroundTransform(this.S.localTransform, t);
	        this.S.setLocalTransform(i);
	    }
	    Un() {
	        const t = this.s.getRenderer().canvas, i = this.renderer.regl, e = i.hasExtension("OES_texture_half_float") ? "half float" : "float", s = Math.ceil(t.width / 4), n = Math.ceil(t.height / 4), r = i.texture({
	            width: s,
	            height: n,
	            type: e,
	            min: "linear",
	            mag: "linear",
	            format: "rgba"
	        });
	        this.Rn = i.framebuffer({
	            width: s,
	            height: n,
	            color: [ r ]
	        });
	    }
	    Bn() {
	        const t = this.s.getRenderer().canvas, i = this.sceneConfig.depthRange, e = {
	            viewport: {
	                x: 0,
	                y: 0,
	                width: () => t ? Math.ceil(t.width / 4) : 1,
	                height: () => t ? Math.ceil(t.height / 4) : 1
	            },
	            depth: {
	                enable: !0,
	                func: "always"
	            }
	        };
	        this.En && (e.stencil = this.En), this.Pn = new Xn({
	            extraCommandProps: e
	        }), this.Dn = new Yn({
	            x: 0,
	            y: 0,
	            width: () => t ? t.width : 1,
	            height: () => t ? t.height : 1
	        }, {
	            extraCommandProps: {
	                stencil: {
	                    enable: !1
	                },
	                depth: {
	                    enable: !0,
	                    range: i || [ 0, 1 ],
	                    func: "<="
	                },
	                polygonOffset: {
	                    enable: !0,
	                    offset: this.sn
	                },
	                scissor: {
	                    enable: !1
	                }
	            }
	        });
	    }
	}

	class Hs extends Ye {
	    constructor(t, i) {
	        super(t, i);
	    }
	    ze(t) {
	        const i = this.Ds(t), e = new ke$1(i);
	        return this.zn(e), this.zs(e), e;
	    }
	    Hs(t, i, e) {
	        const s = this.js();
	        t.setUniform("maskMode", s);
	        const n = this.Bs();
	        if (t.setUniform("maskColor", n), ct(i)) {
	            const s = this.qs();
	            s[0] = (s[0] - e) * i, s[1] = (s[1] - e) * i, t.setUniform("heightRange", s);
	        }
	    }
	    setHeightRange(t) {
	        this.options.heightRange = t, this._fireEvent("heightrangechange");
	    }
	    getHeightRange() {
	        return this.options.heightRange;
	    }
	    qs() {
	        const t = [ 0, 0 ];
	        return this.options.heightRange && (t[0] = this.Us(this.options.heightRange[0]), 
	        t[1] = this.Us(this.options.heightRange[1])), t;
	    }
	    zn(t) {
	        const i = t.getDefines();
	        i.HAS_MASK_COLOR = 1, t.setDefines(i);
	    }
	}

	class Ds extends Hs {
	    constructor(t, i) {
	        super(t, i), this.Rs = "clip-inside";
	    }
	}

	class Gs extends Hs {
	    constructor(t, i) {
	        super(t, i), this.Rs = "clip-outside";
	    }
	}

	class Ns extends Ye {
	    constructor(t, i) {
	        super(t, i);
	    }
	    setFlatheight(t) {
	        this.options.flatHeight = t, this._fireEvent("flatheightchange");
	    }
	    ze(t) {
	        const i = this.Ds(t), e = new ke$1(i);
	        return this.zn(e), this.zs(e), e;
	    }
	    Hs(t) {
	        const i = this.js();
	        t.setUniform("maskMode", i);
	        const e = this.Bs();
	        t.setUniform("maskColor", e);
	        const s = this.Us(this.options.flatHeight || 0);
	        t.setUniform("flatHeight", s);
	    }
	    zn(t) {
	        const i = t.getDefines();
	        i.HAS_MASK_FLAT = 1, t.setDefines(i);
	    }
	    qs() {
	        const t = [ 0, this.options.flatHeight ];
	        return t[1] = this.Us(t[1]), t;
	    }
	}

	class js extends Ns {
	    constructor(t, i) {
	        super(t, i), this.Rs = "flat-inside";
	    }
	}

	class Bs extends Ns {
	    constructor(t, i) {
	        super(t, i), this.Rs = "flat-outside";
	    }
	}

	class Us extends Ye {
	    constructor(t, i) {
	        super(t, i), this.Rs = "color";
	    }
	    setHeightRange(t) {
	        this.options.heightRange = t, this._fireEvent("heightrangechange");
	    }
	    ze(t) {
	        const i = this.Ds(t), e = new ke$1(i);
	        return this.zn(e), this.zs(e), e;
	    }
	    Hs(t, i, e) {
	        const s = this.js();
	        t.setUniform("maskMode", s);
	        const n = this.Bs();
	        if (t.setUniform("maskColor", n), ct(i)) {
	            const s = this.qs();
	            s[0] = (s[0] - e) * i, s[1] = (s[1] - e) * i, t.setUniform("heightRange", s);
	        }
	    }
	    zn(t) {
	        const i = t.getDefines();
	        i.HAS_MASK_COLOR = 1, t.setDefines(i);
	    }
	    qs() {
	        const t = [ 0, 0 ];
	        return this.options.heightRange && (t[0] = this.Us(this.options.heightRange[0]), 
	        t[1] = this.Us(this.options.heightRange[1])), t;
	    }
	}

	class zs extends Ye {
	    constructor(t, i) {
	        super(t, i), this.Rs = "video";
	    }
	    play() {
	        this.Vn && this.Vn.play();
	    }
	    pause() {
	        this.Vn && this.Vn.pause();
	    }
	    setAudio(t) {
	        this.Vn && (this.video.muted = t);
	    }
	    setUrl(t) {
	        this.options.url = t, this.Wn(t);
	    }
	    getState() {
	        return this.qn;
	    }
	    ze(t) {
	        const i = this.Ds(t), e = new ke$1(i), s = this.$n(t);
	        return e.material = new Ce$1({
	            maskTexture: s
	        }), this.zn(e), this.zs(e), e;
	    }
	    Hs(t) {
	        const i = this.js();
	        t.setUniform("maskMode", i);
	        const e = this.Bs();
	        t.setUniform("maskColor", e);
	    }
	    zn(t) {
	        const i = t.getDefines();
	        i.HAS_VIDEO = 1, t.setDefines(i);
	    }
	    $n(t) {
	        this.Wn();
	        return t.texture();
	    }
	    Wn() {
	        this.qn = "stop";
	        const t = this.options.url, i = this.options.elementId;
	        let e = document.getElementById(i);
	        if (t && (e = document.createElement("video"), e.src = t), !e) throw new Error("there is no element or url setting for video mask");
	        e.autoplay = this.options.autoplay || !0, e.loop = this.options.loop || !0, e.muted = this.options.muted || !0, 
	        e.play(), e.addEventListener("playing", () => {
	            this.qn = "playing";
	        }), e.addEventListener("pause", () => {
	            this.qn = "pause";
	        }), this.Vn = e;
	    }
	    je() {
	        const t = this.xt;
	        if (t && t.material) {
	            const i = t.material.get("maskTexture");
	            i && this.Vn && this.Be() && i(this.Vn);
	        }
	    }
	    Be() {
	        return "playing" === this.qn;
	    }
	}

	class Vs extends Ns {
	    constructor(t, i) {
	        super(t, i), this.setElevation(i.elevation), this.Rs = "elevate";
	    }
	    setElevation(t) {
	        this.options.elevation = t, this.setFlatheight(this.options.elevation);
	    }
	}

	const Ws = new t.Point(0, 0), qs = new t.Point(0, 0), $s = new t.Point(0, 0), Ys = new t.Point(0, 0);

	class Xs extends Hs {
	    constructor(t, i) {
	        super([], i), this.Yn = t;
	    }
	    setPosition(t) {
	        this.Yn = t, this.$s();
	    }
	    getPosition() {
	        return this.Yn;
	    }
	    setWidth(t) {
	        this.options.width = t, this.$s();
	    }
	    setLength(t) {
	        this.options.length = t, this.$s();
	    }
	    setHeight(t) {
	        this.options.height = t, this.$s();
	    }
	    setRotation(t) {
	        this.options.rotation = t, this.$s();
	    }
	    $s() {
	        const t = this.getLayer();
	        if (!t) return;
	        const i = t.getMap();
	        if (i) {
	            const {length: t, width: e, height: s} = this.options, n = this.Yn, r = this.options.rotation || 0, {coordinates: h, heightRange: o} = this.Xn(i, n, t, e, s, r);
	            this.setCoordinates(h), this.setHeightRange(o);
	        }
	    }
	    Xn(t, i, e, s, n, r) {
	        const h = t.getGLRes(), o = t.distanceToPointAtRes(s / 2, 0, h, Ws), a = t.distanceToPointAtRes(0, e / 2, h, qs), l = t.coordinateToPointAtRes(i, h, $s), c = l.x - o.x, u = l.x + o.x, f = l.y + a.y, d = l.y - a.y, p = this.Jn([ [ c, f ], [ u, f ], [ u, d ], [ c, d ] ], l, r);
	        Ys.set(p[0][0], p[0][1]);
	        const g = t.pointAtResToCoordinate(Ys, h);
	        Ys.set(p[1][0], p[1][1]);
	        const m = t.pointAtResToCoordinate(Ys, h);
	        Ys.set(p[2][0], p[2][1]);
	        const v = t.pointAtResToCoordinate(Ys, h);
	        Ys.set(p[3][0], p[3][1]);
	        const w = t.pointAtResToCoordinate(Ys, h), _ = i.z - n / 2, M = [ _, i.z + n / 2 ];
	        return {
	            coordinates: [ [ g.x, g.y, _ ], [ m.x, m.y, _ ], [ v.x, v.y, _ ], [ w.x, w.y, _ ], [ g.x, g.y, _ ] ],
	            heightRange: M
	        };
	    }
	    Jn(t, i, e) {
	        for (let s = 0; s < t.length; s++) rotate(t[s], t[s], [ i.x, i.y ], e * Math.PI / 180);
	        return t;
	    }
	}

	class Js extends Xs {
	    constructor(t, i) {
	        super(t, i), this.Rs = "clip-inside";
	    }
	}

	class Zs extends Xs {
	    constructor(t, i) {
	        super(t, i), this.Rs = "clip-outside";
	    }
	}

	"undefined" != typeof window && window.maptalks && (window.maptalks.GroupGLLayer = gs, 
	window.maptalks.ClipInsideMask = Ds, window.maptalks.ClipOutsideMask = Gs, window.maptalks.FlatInsideMask = js, 
	window.maptalks.FlatOutsideMask = Bs, window.maptalks.ElevateMask = Vs, window.maptalks.ColorMask = Us, 
	window.maptalks.VideoMask = zs, window.maptalks.BoxInsideClipMask = Js, window.maptalks.BoxOutsideClipMask = Zs);

	const getGlobal = function () {
	    if (typeof self !== 'undefined') { return self; }
	    if (typeof window !== 'undefined') { return window; }
	    if (typeof global !== 'undefined') { return global; }
	    throw new Error('unable to locate global object');
	};

	const globals = getGlobal();

	const transcoders = globals['gl_trans__coders'] = globals['gl_trans__coders'] || {};

	function inject(chunk) {
	    // 奇怪的变量名是为了避免与worker源代码中的变量名冲突
	    const fnString = chunk.toString();
	    const prefixIndex = fnString.indexOf('{') + 1;
	    const prefix = fnString.substring(0, prefixIndex);

	    const transcoders = globals['gl_trans__coders'] = globals['gl_trans__coders'] || {};
	    let injected = `${prefix}
    const _____getGlobal = ${getGlobal.toString()};
    const g___lobals = _____getGlobal()
    const tran_____scoders = g___lobals['gl_trans__coders'] = g___lobals['gl_trans__coders'] || {};`;
	    for (const p in transcoders) {
	        if (p === 'inject' || p === 'getTranscoder' || p === 'registerTranscoder') {
	            continue;
	        }
	        injected += 'tran_____scoders["' + p + '"] =' + transcoders[p].toString() + '\n;';
	    }
	    injected += '\n' + fnString.substring(prefix.length);
	    return injected;
	}
	transcoders['inject'] = inject;

	function getTranscoder(name/*, options*/) {
	    return transcoders[name];
	}

	function registerTranscoder(name, fn) {
	    transcoders[name] = fn;
	}

	transcoders.registerTranscoder = registerTranscoder;
	transcoders.getTranscoder = getTranscoder;

	const e = "${"; const code = `function(t){var r="undefined"!=typeof Float32Array?Float32Array:Array;function e(){var t=new r(3);return r!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t}function i(t,e,i){var n=new r(3);return n[0]=t,n[1]=e,n[2]=i,n}function n(t,r){var e=r[0],i=r[1],n=r[2],s=e*e+i*i+n*n;return s>0&&(s=1/Math.sqrt(s),t[0]=r[0]*s,t[1]=r[1]*s,t[2]=r[2]*s),t}function s(t,r,e){var i=r[0],n=r[1],s=r[2],a=e[0],o=e[1],h=e[2];return t[0]=n*h-s*o,t[1]=s*a-i*h,t[2]=i*o-n*a,t}var a=function(t,r,e){return t[0]=r[0]-e[0],t[1]=r[1]-e[1],t[2]=r[2]-e[2],t};function o(){var t=new r(4);return r!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t[3]=1,t}e(),function(){var t,e=(t=new r(4),r!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0,t[3]=0),t)}();var h;function c(t,r,e){return t[0]=r,t[1]=e,t}e(),i(1,0,0),i(0,1,0),o(),o(),h=new r(9),r!=Float32Array&&(h[1]=0,h[2]=0,h[3]=0,h[5]=0,h[6]=0,h[7]=0),h[0]=1,h[4]=1,h[8]=1,function(){var t=function(){var t=new r(2);return r!=Float32Array&&(t[0]=0,t[1]=0),t}()}();
/*!
   * @maptalks/gltf-loader v0.91.0
   * LICENSE : UNLICENSED
   * (c) 2016-2023 maptalks.org
   */
let f=0;!function(t){t[0]=0,t[1]=0,t[2]=0,t[3]=1}([]),"undefined"!=typeof TextDecoder&&new TextDecoder("utf-8");const u={get:function(t,r={}){r||(r={});const e=new AbortController,i=e.signal,n=function(t){for(let r=1;r<arguments.length;r++){const e=arguments[r];for(const r in e)t[r]=e[r]}return t}({},r);n.signal=i,n.method||(n.method="GET");const s=fetch(t,n).then(t=>{const e=this.U(t,r.responseType);return e.message?e:e.then(e=>"arraybuffer"===r.responseType?{data:e,cacheControl:t.headers.get("Cache-Control"),expires:t.headers.get("Expires"),contentType:t.headers.get("Content-Type")}:e).catch(t=>{if(!t.code||t.code!==DOMException.ABORT_ERR)throw t})}).catch(t=>{if(!t.code||t.code!==DOMException.ABORT_ERR)throw t});return s.xhr=e,s},U:(t,r)=>200!==t.status?{status:t.status,statusText:t.statusText,message:\`incorrect http request with status code(${e}t.status}): ${e}t.statusText}\`}:"arraybuffer"===r?t.arrayBuffer():"json"===r?t.json():t.text(),getArrayBuffer:(t,r={})=>(r||(r={}),r.responseType="arraybuffer",u.get(t,r)),getJSON:function(t,r={}){return r&&r.jsonp?u.jsonp(t):((r=r||{}).responseType="json",u.get(t,r))},jsonp:function(t){const r="_maptalks_jsonp_"+f++;t.match(/\\?/)?t+="&callback="+r:t+="?callback="+r;let e=document.createElement("script");return e.type="text/javascript",e.src=t,new Promise(t=>{window[r]=function(i){document.getElementsByTagName("head")[0].removeChild(e),e=null,delete window[r],t(i)},document.getElementsByTagName("head")[0].appendChild(e)})}};if("undefined"!=typeof TextDecoder&&new TextDecoder("utf-8"),"undefined"!=typeof OffscreenCanvas){let t;try{t=new OffscreenCanvas(2,2).getContext("2d")}catch(t){}}"undefined"!=typeof document&&document.createElement("canvas"),function(){function t(t){throw t}var r=void 0,e=!0,i=this;function n(t,e){var n,s=t.split("."),a=i;!(s[0]in a)&&a.execScript&&a.execScript("var "+s[0]);for(;s.length&&(n=s.shift());)s.length||e===r?a=a[n]?a[n]:a[n]={}:a[n]=e}var s="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Uint32Array&&"undefined"!=typeof DataView;function a(r,e){this.index="number"==typeof e?e:0,this.i=0,this.buffer=r instanceof(s?Uint8Array:Array)?r:new(s?Uint8Array:Array)(32768),2*this.buffer.length<=this.index&&t(Error("invalid index")),this.buffer.length<=this.index&&this.f()}a.prototype.f=function(){var t,r=this.buffer,e=r.length,i=new(s?Uint8Array:Array)(e<<1);if(s)i.set(r);else for(t=0;t<e;++t)i[t]=r[t];return this.buffer=i},a.prototype.d=function(t,r,e){var i,n=this.buffer,s=this.index,a=this.i,o=n[s];if(e&&1<r&&(t=8<r?(l[255&t]<<24|l[t>>>8&255]<<16|l[t>>>16&255]<<8|l[t>>>24&255])>>32-r:l[t]>>8-r),8>r+a)o=o<<r|t,a+=r;else for(i=0;i<r;++i)o=o<<1|t>>r-i-1&1,8==++a&&(a=0,n[s++]=l[o],o=0,s===n.length&&(n=this.f()));n[s]=o,this.buffer=n,this.i=a,this.index=s},a.prototype.finish=function(){var t,r=this.buffer,e=this.index;return 0<this.i&&(r[e]<<=8-this.i,r[e]=l[r[e]],e++),s?t=r.subarray(0,e):(r.length=e,t=r),t};var o,h=new(s?Uint8Array:Array)(256);for(o=0;256>o;++o){for(var c=u=o,f=7,u=u>>>1;u;u>>>=1)c<<=1,c|=1&u,--f;h[o]=(c<<f&255)>>>0}var l=h;function y(t){this.buffer=new(s?Uint16Array:Array)(2*t),this.length=0}function d(t){var r,e,i,n,a,o,h,c,f,u,l=t.length,y=0,d=Number.POSITIVE_INFINITY;for(c=0;c<l;++c)t[c]>y&&(y=t[c]),t[c]<d&&(d=t[c]);for(r=1<<y,e=new(s?Uint32Array:Array)(r),i=1,n=0,a=2;i<=y;){for(c=0;c<l;++c)if(t[c]===i){for(o=0,h=n,f=0;f<i;++f)o=o<<1|1&h,h>>=1;for(u=i<<16|c,f=o;f<r;f+=a)e[f]=u;++n}++i,n<<=1,a<<=1}return[e,y,d]}function A(t,r){this.h=b,this.w=0,this.input=s&&t instanceof Array?new Uint8Array(t):t,this.b=0,r&&(r.lazy&&(this.w=r.lazy),"number"==typeof r.compressionType&&(this.h=r.compressionType),r.outputBuffer&&(this.a=s&&r.outputBuffer instanceof Array?new Uint8Array(r.outputBuffer):r.outputBuffer),"number"==typeof r.outputIndex&&(this.b=r.outputIndex)),this.a||(this.a=new(s?Uint8Array:Array)(32768))}y.prototype.getParent=function(t){return 2*((t-2)/4|0)},y.prototype.push=function(t,r){var e,i,n,s=this.buffer;for(e=this.length,s[this.length++]=r,s[this.length++]=t;0<e&&(i=this.getParent(e),s[e]>s[i]);)n=s[e],s[e]=s[i],s[i]=n,n=s[e+1],s[e+1]=s[i+1],s[i+1]=n,e=i;return this.length},y.prototype.pop=function(){var t,r,e,i,n,s=this.buffer;for(r=s[0],t=s[1],this.length-=2,s[0]=s[this.length],s[1]=s[this.length+1],n=0;!((i=2*n+2)>=this.length)&&(i+2<this.length&&s[i+2]>s[i]&&(i+=2),s[i]>s[n]);)e=s[n],s[n]=s[i],s[i]=e,e=s[n+1],s[n+1]=s[i+1],s[i+1]=e,n=i;return{index:t,value:r,length:this.length}};var w,b=2,p={NONE:0,r:1,k:b,N:3},v=[];for(w=0;288>w;w++)switch(!0){case 143>=w:v.push([w+48,8]);break;case 255>=w:v.push([w-144+400,9]);break;case 279>=w:v.push([w-256+0,7]);break;case 287>=w:v.push([w-280+192,8]);break;default:t("invalid literal: "+w)}function k(t,r){this.length=t,this.G=r}A.prototype.j=function(){var i,n,o,h,c=this.input;switch(this.h){case 0:for(o=0,h=c.length;o<h;){var f,u,l,y=n=s?c.subarray(o,o+65535):c.slice(o,o+65535),d=(o+=n.length)===h,A=r,w=r,p=this.a,k=this.b;if(s){for(p=new Uint8Array(this.a.buffer);p.length<=k+y.length+5;)p=new Uint8Array(p.length<<1);p.set(this.a)}if(f=d?1:0,p[k++]=0|f,l=65536+~(u=y.length)&65535,p[k++]=255&u,p[k++]=u>>>8&255,p[k++]=255&l,p[k++]=l>>>8&255,s)p.set(y,k),k+=y.length,p=p.subarray(0,k);else{for(A=0,w=y.length;A<w;++A)p[k++]=y[A];p.length=k}this.b=k,this.a=p}break;case 1:var m=new a(s?new Uint8Array(this.a.buffer):this.a,this.b);m.d(1,1,e),m.d(1,2,e);var U,x,M,S=g(this,c);for(U=0,x=S.length;U<x;U++)if(M=S[U],a.prototype.d.apply(m,v[M]),256<M)m.d(S[++U],S[++U],e),m.d(S[++U],5),m.d(S[++U],S[++U],e);else if(256===M)break;this.a=m.finish(),this.b=this.a.length;break;case b:var I,F,D,z,C,N,O,j,q,W,Z,V,$,_,B,H=new a(s?new Uint8Array(this.a.buffer):this.a,this.b),L=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],P=Array(19);for(I=b,H.d(1,1,e),H.d(I,2,e),F=g(this,c),O=T(N=E(this.L,15)),q=T(j=E(this.K,7)),D=286;257<D&&0===N[D-1];D--);for(z=30;1<z&&0===j[z-1];z--);var G,R,Y,J,K,X,Q=D,tt=z,rt=new(s?Uint32Array:Array)(Q+tt),et=new(s?Uint32Array:Array)(316),it=new(s?Uint8Array:Array)(19);for(G=R=0;G<Q;G++)rt[R++]=N[G];for(G=0;G<tt;G++)rt[R++]=j[G];if(!s)for(G=0,J=it.length;G<J;++G)it[G]=0;for(G=K=0,J=rt.length;G<J;G+=R){for(R=1;G+R<J&&rt[G+R]===rt[G];++R);if(Y=R,0===rt[G])if(3>Y)for(;0<Y--;)et[K++]=0,it[0]++;else for(;0<Y;)(X=138>Y?Y:138)>Y-3&&X<Y&&(X=Y-3),10>=X?(et[K++]=17,et[K++]=X-3,it[17]++):(et[K++]=18,et[K++]=X-11,it[18]++),Y-=X;else if(et[K++]=rt[G],it[rt[G]]++,3>--Y)for(;0<Y--;)et[K++]=rt[G],it[rt[G]]++;else for(;0<Y;)(X=6>Y?Y:6)>Y-3&&X<Y&&(X=Y-3),et[K++]=16,et[K++]=X-3,it[16]++,Y-=X}for(i=s?et.subarray(0,K):et.slice(0,K),W=E(it,7),_=0;19>_;_++)P[_]=W[L[_]];for(C=19;4<C&&0===P[C-1];C--);for(Z=T(W),H.d(D-257,5,e),H.d(z-1,5,e),H.d(C-4,4,e),_=0;_<C;_++)H.d(P[_],3,e);for(_=0,B=i.length;_<B;_++)if(V=i[_],H.d(Z[V],W[V],e),16<=V){switch(_++,V){case 16:$=2;break;case 17:$=3;break;case 18:$=7;break;default:t("invalid code: "+V)}H.d(i[_],$,e)}var nt,st,at,ot,ht,ct,ft,ut,lt=[O,N],yt=[q,j];for(ht=lt[0],ct=lt[1],ft=yt[0],ut=yt[1],nt=0,st=F.length;nt<st;++nt)if(at=F[nt],H.d(ht[at],ct[at],e),256<at)H.d(F[++nt],F[++nt],e),ot=F[++nt],H.d(ft[ot],ut[ot],e),H.d(F[++nt],F[++nt],e);else if(256===at)break;this.a=H.finish(),this.b=this.a.length;break;default:t("invalid compression type")}return this.a};var m=function(){function r(r){switch(!0){case 3===r:return[257,r-3,0];case 4===r:return[258,r-4,0];case 5===r:return[259,r-5,0];case 6===r:return[260,r-6,0];case 7===r:return[261,r-7,0];case 8===r:return[262,r-8,0];case 9===r:return[263,r-9,0];case 10===r:return[264,r-10,0];case 12>=r:return[265,r-11,1];case 14>=r:return[266,r-13,1];case 16>=r:return[267,r-15,1];case 18>=r:return[268,r-17,1];case 22>=r:return[269,r-19,2];case 26>=r:return[270,r-23,2];case 30>=r:return[271,r-27,2];case 34>=r:return[272,r-31,2];case 42>=r:return[273,r-35,3];case 50>=r:return[274,r-43,3];case 58>=r:return[275,r-51,3];case 66>=r:return[276,r-59,3];case 82>=r:return[277,r-67,4];case 98>=r:return[278,r-83,4];case 114>=r:return[279,r-99,4];case 130>=r:return[280,r-115,4];case 162>=r:return[281,r-131,5];case 194>=r:return[282,r-163,5];case 226>=r:return[283,r-195,5];case 257>=r:return[284,r-227,5];case 258===r:return[285,r-258,0];default:t("invalid length: "+r)}}var e,i,n=[];for(e=3;258>=e;e++)i=r(e),n[e]=i[2]<<24|i[1]<<16|i[0];return n}(),U=s?new Uint32Array(m):m;function g(e,i){function n(r,e){var i,n,s,a,o=r.G,h=[],c=0;switch(i=U[r.length],h[c++]=65535&i,h[c++]=i>>16&255,h[c++]=i>>24,!0){case 1===o:n=[0,o-1,0];break;case 2===o:n=[1,o-2,0];break;case 3===o:n=[2,o-3,0];break;case 4===o:n=[3,o-4,0];break;case 6>=o:n=[4,o-5,1];break;case 8>=o:n=[5,o-7,1];break;case 12>=o:n=[6,o-9,2];break;case 16>=o:n=[7,o-13,2];break;case 24>=o:n=[8,o-17,3];break;case 32>=o:n=[9,o-25,3];break;case 48>=o:n=[10,o-33,4];break;case 64>=o:n=[11,o-49,4];break;case 96>=o:n=[12,o-65,5];break;case 128>=o:n=[13,o-97,5];break;case 192>=o:n=[14,o-129,6];break;case 256>=o:n=[15,o-193,6];break;case 384>=o:n=[16,o-257,7];break;case 512>=o:n=[17,o-385,7];break;case 768>=o:n=[18,o-513,8];break;case 1024>=o:n=[19,o-769,8];break;case 1536>=o:n=[20,o-1025,9];break;case 2048>=o:n=[21,o-1537,9];break;case 3072>=o:n=[22,o-2049,10];break;case 4096>=o:n=[23,o-3073,10];break;case 6144>=o:n=[24,o-4097,11];break;case 8192>=o:n=[25,o-6145,11];break;case 12288>=o:n=[26,o-8193,12];break;case 16384>=o:n=[27,o-12289,12];break;case 24576>=o:n=[28,o-16385,13];break;case 32768>=o:n=[29,o-24577,13];break;default:t("invalid distance")}for(i=n,h[c++]=i[0],h[c++]=i[1],h[c++]=i[2],s=0,a=h.length;s<a;++s)w[b++]=h[s];v[h[0]]++,k[h[3]]++,p=r.length+e-1,y=null}var a,o,h,c,f,u,l,y,d,A={},w=s?new Uint16Array(2*i.length):[],b=0,p=0,v=new(s?Uint32Array:Array)(286),k=new(s?Uint32Array:Array)(30),m=e.w;if(!s){for(h=0;285>=h;)v[h++]=0;for(h=0;29>=h;)k[h++]=0}for(v[256]=1,a=0,o=i.length;a<o;++a){for(h=f=0,c=3;h<c&&a+h!==o;++h)f=f<<8|i[a+h];if(A[f]===r&&(A[f]=[]),u=A[f],!(0<p--)){for(;0<u.length&&32768<a-u[0];)u.shift();if(a+3>=o){for(y&&n(y,-1),h=0,c=o-a;h<c;++h)d=i[a+h],w[b++]=d,++v[d];break}0<u.length?(l=x(i,a,u),y?y.length<l.length?(d=i[a-1],w[b++]=d,++v[d],n(l,0)):n(y,-1):l.length<m?y=l:n(l,0)):y?n(y,-1):(d=i[a],w[b++]=d,++v[d])}u.push(a)}return w[b++]=256,v[256]++,e.L=v,e.K=k,s?w.subarray(0,b):w}function x(t,r,e){var i,n,s,a,o,h,c=0,f=t.length;a=0,h=e.length;t:for(;a<h;a++){if(i=e[h-a-1],s=3,3<c){for(o=c;3<o;o--)if(t[i+o-1]!==t[r+o-1])continue t;s=c}for(;258>s&&r+s<f&&t[i+s]===t[r+s];)++s;if(s>c&&(n=i,c=s),258===s)break}return new k(c,r-n)}function E(t,r){var e,i,n,a,o,h=t.length,c=new y(572),f=new(s?Uint8Array:Array)(h);if(!s)for(a=0;a<h;a++)f[a]=0;for(a=0;a<h;++a)0<t[a]&&c.push(a,t[a]);if(e=Array(c.length/2),i=new(s?Uint32Array:Array)(c.length/2),1===e.length)return f[c.pop().index]=1,f;for(a=0,o=c.length/2;a<o;++a)e[a]=c.pop(),i[a]=e[a].value;for(n=function(t,r,e){function i(t){var e=d[t][A[t]];e===r?(i(t+1),i(t+1)):--l[e],++A[t]}var n,a,o,h,c,f=new(s?Uint16Array:Array)(e),u=new(s?Uint8Array:Array)(e),l=new(s?Uint8Array:Array)(r),y=Array(e),d=Array(e),A=Array(e),w=(1<<e)-r,b=1<<e-1;for(f[e-1]=r,a=0;a<e;++a)w<b?u[a]=0:(u[a]=1,w-=b),w<<=1,f[e-2-a]=(f[e-1-a]/2|0)+r;for(f[0]=u[0],y[0]=Array(f[0]),d[0]=Array(f[0]),a=1;a<e;++a)f[a]>2*f[a-1]+u[a]&&(f[a]=2*f[a-1]+u[a]),y[a]=Array(f[a]),d[a]=Array(f[a]);for(n=0;n<r;++n)l[n]=e;for(o=0;o<f[e-1];++o)y[e-1][o]=t[o],d[e-1][o]=o;for(n=0;n<e;++n)A[n]=0;for(1===u[e-1]&&(--l[0],++A[e-1]),a=e-2;0<=a;--a){for(h=n=0,c=A[a+1],o=0;o<f[a];o++)(h=y[a+1][c]+y[a+1][c+1])>t[n]?(y[a][o]=h,d[a][o]=r,c+=2):(y[a][o]=t[n],d[a][o]=n,++n);A[a]=0,1===u[a]&&i(a)}return l}(i,i.length,r),a=0,o=e.length;a<o;++a)f[e[a].index]=n[a];return f}function T(t){var r,e,i,n,a=new(s?Uint16Array:Array)(t.length),o=[],h=[],c=0;for(r=0,e=t.length;r<e;r++)o[t[r]]=1+(0|o[t[r]]);for(r=1,e=16;r<=e;r++)h[r]=c,c+=0|o[r],c<<=1;for(r=0,e=t.length;r<e;r++)for(c=h[t[r]],h[t[r]]+=1,i=a[r]=0,n=t[r];i<n;i++)a[r]=a[r]<<1|1&c,c>>>=1;return a}function M(r,e){switch(this.l=[],this.m=32768,this.e=this.g=this.c=this.q=0,this.input=s?new Uint8Array(r):r,this.s=!1,this.n=I,this.B=!1,!e&&(e={})||(e.index&&(this.c=e.index),e.bufferSize&&(this.m=e.bufferSize),e.bufferType&&(this.n=e.bufferType),e.resize&&(this.B=e.resize)),this.n){case S:this.b=32768,this.a=new(s?Uint8Array:Array)(32768+this.m+258);break;case I:this.b=0,this.a=new(s?Uint8Array:Array)(this.m),this.f=this.J,this.t=this.H,this.o=this.I;break;default:t(Error("invalid inflate mode"))}}var S=0,I=1,F={D:S,C:I};M.prototype.p=function(){for(;!this.s;){var i=Y(this,3);switch(1&i&&(this.s=e),i>>>=1){case 0:var n=this.input,a=this.c,o=this.a,h=this.b,c=n.length,f=r,u=o.length,l=r;switch(this.e=this.g=0,a+1>=c&&t(Error("invalid uncompressed block header: LEN")),f=n[a++]|n[a++]<<8,a+1>=c&&t(Error("invalid uncompressed block header: NLEN")),f===~(n[a++]|n[a++]<<8)&&t(Error("invalid uncompressed block header: length verify")),a+f>n.length&&t(Error("input buffer is broken")),this.n){case S:for(;h+f>o.length;){if(f-=l=u-h,s)o.set(n.subarray(a,a+l),h),h+=l,a+=l;else for(;l--;)o[h++]=n[a++];this.b=h,o=this.f(),h=this.b}break;case I:for(;h+f>o.length;)o=this.f({v:2});break;default:t(Error("invalid inflate mode"))}if(s)o.set(n.subarray(a,a+f),h),h+=f,a+=f;else for(;f--;)o[h++]=n[a++];this.c=a,this.b=h,this.a=o;break;case 1:this.o(P,R);break;case 2:var y,A,w,b,p=Y(this,5)+257,v=Y(this,5)+1,k=Y(this,4)+4,m=new(s?Uint8Array:Array)(N.length),U=r,g=r,x=r,E=r,T=r;for(T=0;T<k;++T)m[N[T]]=Y(this,3);if(!s)for(T=k,k=m.length;T<k;++T)m[N[T]]=0;for(y=d(m),U=new(s?Uint8Array:Array)(p+v),T=0,b=p+v;T<b;)switch(g=J(this,y),g){case 16:for(E=3+Y(this,2);E--;)U[T++]=x;break;case 17:for(E=3+Y(this,3);E--;)U[T++]=0;x=0;break;case 18:for(E=11+Y(this,7);E--;)U[T++]=0;x=0;break;default:x=U[T++]=g}A=d(s?U.subarray(0,p):U.slice(0,p)),w=d(s?U.subarray(p):U.slice(p)),this.o(A,w);break;default:t(Error("unknown BTYPE: "+i))}}return this.t()};var D,z,C=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],N=s?new Uint16Array(C):C,O=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,258,258],j=s?new Uint16Array(O):O,q=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0],W=s?new Uint8Array(q):q,Z=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],V=s?new Uint16Array(Z):Z,$=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],_=s?new Uint8Array($):$,B=new(s?Uint8Array:Array)(288);for(D=0,z=B.length;D<z;++D)B[D]=143>=D?8:255>=D?9:279>=D?7:8;var H,L,P=d(B),G=new(s?Uint8Array:Array)(30);for(H=0,L=G.length;H<L;++H)G[H]=5;var R=d(G);function Y(r,e){for(var i,n=r.g,s=r.e,a=r.input,o=r.c,h=a.length;s<e;)o>=h&&t(Error("input buffer is broken")),n|=a[o++]<<s,s+=8;return i=n&(1<<e)-1,r.g=n>>>e,r.e=s-e,r.c=o,i}function J(r,e){for(var i,n,s=r.g,a=r.e,o=r.input,h=r.c,c=o.length,f=e[0],u=e[1];a<u&&!(h>=c);)s|=o[h++]<<a,a+=8;return(n=(i=f[s&(1<<u)-1])>>>16)>a&&t(Error("invalid code length: "+n)),r.g=s>>n,r.e=a-n,r.c=h,65535&i}function K(t){if("string"==typeof t){var r,e,i=t.split("");for(r=0,e=i.length;r<e;r++)i[r]=(255&i[r].charCodeAt(0))>>>0;t=i}for(var n,s=1,a=0,o=t.length,h=0;0<o;){o-=n=1024<o?1024:o;do{a+=s+=t[h++]}while(--n);s%=65521,a%=65521}return(a<<16|s)>>>0}function X(r,e){var i,n;switch(this.input=r,this.c=0,!e&&(e={})||(e.index&&(this.c=e.index),e.verify&&(this.M=e.verify)),i=r[this.c++],n=r[this.c++],15&i){case Q:this.method=Q;break;default:t(Error("unsupported compression method"))}0!=((i<<8)+n)%31&&t(Error("invalid fcheck flag:"+((i<<8)+n)%31)),32&n&&t(Error("fdict flag is not supported")),this.A=new M(r,{index:this.c,bufferSize:e.bufferSize,bufferType:e.bufferType,resize:e.resize})}M.prototype.o=function(t,r){var e=this.a,i=this.b;this.u=t;for(var n,s,a,o,h=e.length-258;256!==(n=J(this,t));)if(256>n)i>=h&&(this.b=i,e=this.f(),i=this.b),e[i++]=n;else for(o=j[s=n-257],0<W[s]&&(o+=Y(this,W[s])),n=J(this,r),a=V[n],0<_[n]&&(a+=Y(this,_[n])),i>=h&&(this.b=i,e=this.f(),i=this.b);o--;)e[i]=e[i++-a];for(;8<=this.e;)this.e-=8,this.c--;this.b=i},M.prototype.I=function(t,r){var e=this.a,i=this.b;this.u=t;for(var n,s,a,o,h=e.length;256!==(n=J(this,t));)if(256>n)i>=h&&(h=(e=this.f()).length),e[i++]=n;else for(o=j[s=n-257],0<W[s]&&(o+=Y(this,W[s])),n=J(this,r),a=V[n],0<_[n]&&(a+=Y(this,_[n])),i+o>h&&(h=(e=this.f()).length);o--;)e[i]=e[i++-a];for(;8<=this.e;)this.e-=8,this.c--;this.b=i},M.prototype.f=function(){var t,r,e=new(s?Uint8Array:Array)(this.b-32768),i=this.b-32768,n=this.a;if(s)e.set(n.subarray(32768,e.length));else for(t=0,r=e.length;t<r;++t)e[t]=n[t+32768];if(this.l.push(e),this.q+=e.length,s)n.set(n.subarray(i,i+32768));else for(t=0;32768>t;++t)n[t]=n[i+t];return this.b=32768,n},M.prototype.J=function(t){var r,e,i,n=this.input.length/this.c+1|0,a=this.input,o=this.a;return t&&("number"==typeof t.v&&(n=t.v),"number"==typeof t.F&&(n+=t.F)),2>n?e=(i=(a.length-this.c)/this.u[2]/2*258|0)<o.length?o.length+i:o.length<<1:e=o.length*n,s?(r=new Uint8Array(e)).set(o):r=o,this.a=r},M.prototype.t=function(){var t,r,e,i,n,a=0,o=this.a,h=this.l,c=new(s?Uint8Array:Array)(this.q+(this.b-32768));if(0===h.length)return s?this.a.subarray(32768,this.b):this.a.slice(32768,this.b);for(r=0,e=h.length;r<e;++r)for(i=0,n=(t=h[r]).length;i<n;++i)c[a++]=t[i];for(r=32768,e=this.b;r<e;++r)c[a++]=o[r];return this.l=[],this.buffer=c},M.prototype.H=function(){var t,r=this.b;return s?this.B?(t=new Uint8Array(r)).set(this.a.subarray(0,r)):t=this.a.subarray(0,r):(this.a.length>r&&(this.a.length=r),t=this.a),this.buffer=t},X.prototype.p=function(){var r,e=this.input;return r=this.A.p(),this.c=this.A.c,this.M&&((e[this.c++]<<24|e[this.c++]<<16|e[this.c++]<<8|e[this.c++])>>>0!==K(r)&&t(Error("invalid adler-32 checksum"))),r};var Q=8;function tt(t,r){this.input=t,this.a=new(s?Uint8Array:Array)(32768),this.h=rt.k;var e,i={};for(e in!r&&(r={})||"number"!=typeof r.compressionType||(this.h=r.compressionType),r)i[e]=r[e];i.outputBuffer=this.a,this.z=new A(this.input,i)}var rt=p;function et(t,r){var e,i,s,a;if(Object.keys)e=Object.keys(r);else for(i in e=[],s=0,r)e[s++]=i;for(s=0,a=e.length;s<a;++s)n(t+"."+(i=e[s]),r[i])}tt.prototype.j=function(){var r,e,i,n,a,o,h,c=0;switch(h=this.a,r=Q){case Q:e=Math.LOG2E*Math.log(32768)-8;break;default:t(Error("invalid compression method"))}switch(i=e<<4|r,h[c++]=i,r){case Q:switch(this.h){case rt.NONE:a=0;break;case rt.r:a=1;break;case rt.k:a=2;break;default:t(Error("unsupported compression type"))}break;default:t(Error("invalid compression method"))}return n=a<<6|0,h[c++]=n|31-(256*i+n)%31,o=K(this.input),this.z.b=c,c=(h=this.z.j()).length,s&&((h=new Uint8Array(h.buffer)).length<=c+4&&(this.a=new Uint8Array(h.length+4),this.a.set(h),h=this.a),h=h.subarray(0,c+4)),h[c++]=o>>24&255,h[c++]=o>>16&255,h[c++]=o>>8&255,h[c++]=255&o,h},n("Zlib.Inflate",X),n("Zlib.Inflate.prototype.decompress",X.prototype.p),et("Zlib.Inflate.BufferType",{ADAPTIVE:F.C,BLOCK:F.D}),n("Zlib.Deflate",tt),n("Zlib.Deflate.compress",(function(t,r){return new tt(t,r).j()})),n("Zlib.Deflate.prototype.compress",tt.prototype.j),et("Zlib.Deflate.CompressionType",{NONE:rt.NONE,FIXED:rt.r,DYNAMIC:rt.k})}.call(self);class l{constructor(t=257){this.gridSize=t;const r=t-1;if(r&r-1)throw new Error(\`Expected grid size to be 2^n+1, got ${e}t}.\`);this.numTriangles=r*r*2-2,this.numParentTriangles=this.numTriangles-r*r,this.indices=new Uint32Array(this.gridSize*this.gridSize),this.coords=new Uint16Array(4*this.numTriangles);for(let t=0;t<this.numTriangles;t++){let e=t+2,i=0,n=0,s=0,a=0,o=0,h=0;for(1&e?s=a=o=r:i=n=h=r;(e>>=1)>1;){const t=i+s>>1,r=n+a>>1;1&e?(s=i,a=n,i=o,n=h):(i=s,n=a,s=o,a=h),o=t,h=r}const c=4*t;this.coords[c+0]=i,this.coords[c+1]=n,this.coords[c+2]=s,this.coords[c+3]=a}}createTile(t){return new y(t,this)}}class y{constructor(t,r){const e=r.gridSize;if(t.length!==e*e)throw new Error(\`Expected terrain data of length ${e}e*e} (${e}e} x ${e}e}), got ${e}t.length}.\`);this.terrain=t,this.martini=r,this.errors=new Float32Array(t.length),this.update()}update(){const{numTriangles:t,numParentTriangles:r,coords:e,gridSize:i}=this.martini,{terrain:n,errors:s}=this;for(let a=t-1;a>=0;a--){const t=4*a,o=e[t+0],h=e[t+1],c=e[t+2],f=e[t+3],u=o+c>>1,l=h+f>>1,y=u+l-h,d=l+o-u,A=(n[h*i+o]+n[f*i+c])/2,w=l*i+u,b=Math.abs(A-n[w]);if(s[w]=Math.max(s[w],b),a<r){const t=(h+d>>1)*i+(o+y>>1),r=(f+d>>1)*i+(c+y>>1);s[w]=Math.max(s[w],s[t],s[r])}}}getMesh(t=0){const{gridSize:r,indices:e}=this.martini,{errors:i}=this;let n=0,s=0;const a=r-1;function o(a,h,c,f,u,l){const y=a+c>>1,d=h+f>>1;Math.abs(a-u)+Math.abs(h-l)>1&&i[d*r+y]>t?(o(u,l,a,h,y,d),o(c,f,u,l,y,d)):(e[h*r+a]=e[h*r+a]||++n,e[f*r+c]=e[f*r+c]||++n,e[l*r+u]=e[l*r+u]||++n,s++)}e.fill(0),o(0,0,a,a,a,0),o(a,a,0,0,0,a);const h=new Uint16Array(2*n),c=new Uint32Array(3*s);let f=0;function u(n,s,a,o,l,y){const d=n+a>>1,A=s+o>>1;if(Math.abs(n-l)+Math.abs(s-y)>1&&i[A*r+d]>t)u(l,y,n,s,d,A),u(a,o,l,y,d,A);else{const t=e[s*r+n]-1,i=e[o*r+a]-1,u=e[y*r+l]-1;h[2*t]=n,h[2*t+1]=s,h[2*i]=a,h[2*i+1]=o,h[2*u]=l,h[2*u+1]=y,c[f++]=t,c[f++]=i,c[f++]=u}}return u(0,0,a,a,a,0),u(a,a,0,0,0,a),{vertices:h,triangles:c}}getMeshWithSkirts(t=0,r){const{gridSize:e,indices:i}=this.martini,{errors:n}=this;let s=0,a=0;const o=e-1;let h,c,f=0;const u=[],l=[],y=[],d=[];function A(r,w,b,p,v,k){const m=r+b>>1,U=w+p>>1;Math.abs(r-v)+Math.abs(w-k)>1&&n[U*e+m]>t?(A(v,k,r,w,m,U),A(b,p,v,k,m,U)):(h=w*e+r,c=p*e+b,f=k*e+v,0===i[h]&&(0===r?u.push(s):r===o&&l.push(s),0===w?y.push(s):w===o&&d.push(s),i[h]=++s),0===i[c]&&(0===b?u.push(s):b===o&&l.push(s),0===p?y.push(s):p===o&&d.push(s),i[c]=++s),0===i[f]&&(0===v?u.push(s):v===o&&l.push(s),0===k?y.push(s):k===o&&d.push(s),i[f]=++s),a++)}let w;i.fill(0),A(0,0,o,o,o,0),A(o,o,0,0,0,o),w=r?2*(s+3*u.length-2+3*l.length-2+3*y.length-2+3*d.length-2):2*(s+u.length+l.length+y.length+d.length);const b=3*(a+2*(u.length-1)+2*(l.length-1)+2*(y.length-1)+2*(d.length-1)),p=new Uint16Array(w),v=new Uint32Array(b);let k=0;function m(r,s,a,o,h,c){const f=r+a>>1,u=s+o>>1;if(Math.abs(r-h)+Math.abs(s-c)>1&&n[u*e+f]>t)m(h,c,r,s,f,u),m(a,o,h,c,f,u);else{const t=i[s*e+r]-1,n=i[o*e+a]-1,f=i[c*e+h]-1;p[2*t]=r,p[2*t+1]=s,p[2*n]=a,p[2*n+1]=o,p[2*f]=h,p[2*f+1]=c,v[k++]=t,v[k++]=n,v[k++]=f}}m(0,0,o,o,o,0),m(o,o,0,0,0,o),u.sort((t,r)=>p[2*t+1]-p[2*r+1]),l.sort((t,r)=>p[2*r+1]-p[2*t+1]),y.sort((t,r)=>p[2*r]-p[2*t]),d.sort((t,r)=>p[2*t]-p[2*r]);let U,g,x,E,T=2*s,M=0;function S(t){M=t.length;for(let e=0;e<M-1;e++)U=t[e],g=t[e+1],x=T/2,E=(T+(r?6:2))/2,p[T++]=2*U,p[T++]=2*U+1,r&&(p[T++]=2*U,p[T++]=2*U+1,p[T++]=2*g,p[T++]=2*g+1),r?(v[k++]=x+1,v[k++]=x,v[k++]=x+2,v[k++]=x,v[k++]=E,v[k++]=x+2):(v[k++]=U,v[k++]=x,v[k++]=g,v[k++]=x,v[k++]=E,v[k++]=g);p[T++]=2*t[M-1],p[T++]=2*t[M-1]+1}S(u);const I=T;S(l);const F=T;S(y);const D=T;S(d);return{vertices:p,triangles:v,numVerticesWithoutSkirts:s,numTrianglesWithoutSkirts:a,leftSkirtIndex:I,rightSkirtIndex:F,bottomSkirtIndex:D,topSkirtIndex:T}}}const d={};let A,w=null,b=null;const p={},v=64,k=64,m=3,U=-1e3,g=.001,x=256,E=4,T=.002,M={cesium_request_token:{Accept:"application/json,*/*;q=0.01","Accept-Encoding":"gzip, deflate, br"},tianditu:{"Accept-Encoding":"gzip, deflate, br"},cesium:{"Accept-Encoding":"gzip, deflate, br",Accept:"application/vnd.quantized-mesh,application/octet-stream;q=0.9,*/*;q=0.01"},mapbox:{Accept:"image/webp,*/*"}};M["cesium-ion"]=M.cesium;let S=null,I=null;function F(t,r){const e=function(t){if(t.length<1e3)return null;const r=new Zlib.Inflate(t);return r?r.decompress():null}(new Uint8Array(t));if(!e)throw new Error((i=new Uint8Array(t),D.decode(i)));var i;const n=function(t,r){const e=r,i=r,n=e+1,s=i+1,a=m,o=U,h=g,c=x,f=T,u=new Float32Array(n*s);let l=0,y=1/0,d=-1/0;for(let r=0;r<n;r++){const n=r>=i?i-1:r;for(let r=0;r<s;r++){let i=0;const s=n*(4*e)+4*(r>=e?e-1:r);for(let r=0;r<a;r++)i=i*c+t[s+r];i=1*(i*h+o),i-=f,u[l]=i,i<y&&(y=i),i>d&&(d=i),l++}}return{data:u,min:y,max:d}}(function(t){const r=t,e=v,i=k,n=new Uint8Array(e*i*E);let s,a,o,h,c;for(let t=0;t<i;t++)for(let f=0;f<e;f++){h=parseInt(149*t/(i-1)),c=parseInt(149*f/(e-1)),a=2*(150*h+c),s=r[a]+256*r[a+1],(s>1e4||s<-2e3)&&(s=0),o=4*(t*e+f);const u=(s+1e3)/g,l=x;n[o]=u/(l*l),n[o+1]=(u-n[o]*l*l)/l,n[o+2]=u-n[o]*l*l-n[o+1]*l,n[o+3]=255}return n}(e),r-1);return n.width=n.height=r,n}const D=new TextDecoder("utf-8");function z(t){return t>>1^-(1&t)}const C=[];function N(t){let r=0;const e=3*Float64Array.BYTES_PER_ELEMENT,i=3*Uint16Array.BYTES_PER_ELEMENT;let n=Uint16Array.BYTES_PER_ELEMENT;const s=new DataView(t);r+=e;const a=s.getFloat32(r,!0);r+=Float32Array.BYTES_PER_ELEMENT;const o=s.getFloat32(r,!0);r+=Float32Array.BYTES_PER_ELEMENT,r+=e;const h=s.getFloat64(r,!0);r+=Float64Array.BYTES_PER_ELEMENT,r+=e;const c=s.getUint32(r,!0);r+=Uint32Array.BYTES_PER_ELEMENT;const f=new Uint16Array(t,r,3*c);r+=c*i,c>65536&&(n=Uint32Array.BYTES_PER_ELEMENT);!function(t,r,e){const i=t.length;let n=0,s=0,a=0;for(let o=0;o<i;++o)n+=z(t[o]),s+=z(r[o]),t[o]=n,r[o]=s,e&&(a+=z(e[o]),e[o]=a)}(f.subarray(0,c),f.subarray(c,2*c),f.subarray(2*c,3*c)),r%n!=0&&(r+=n-r%n);const u=s.getUint32(r,!0);r+=Uint32Array.BYTES_PER_ELEMENT;const l=c>65536?new Uint32Array(t,r,3*u):new Uint16Array(t,r,3*u);let y=0;const d=l.length;for(let t=0;t<d;++t){const r=l[t];l[t]=y-r,0===r&&++y}const A={minimumHeight:a,maximumHeight:o,quantizedVertices:f,indices:l}.quantizedVertices,w=A.length/3,b=A.subarray(0,w),p=A.subarray(w,2*w),v=A.subarray(2*w,3*w),k=C;for(let t=0;t<w;++t){const r=b[t]/32767,e=p[t]/32767,i=(m=a,U=o,(1-(g=v[t]/32767))*m+g*U);k[3*t]=r,k[3*t+1]=1-e,k[3*t+2]=i}var m,U,g;return{positions:k,radius:h,min:a,max:o,indices:l}}const O=[],j=[],q=[],W=[],Z=[];class V{constructor(t,r,e,i,n){this.p0=[],this.p1=[],this.p2=[],this.normal=[],this.min=[],this.max=[],this.set(t,r,e,i,n)}set(t,r,e,i,o){this.radius=o;let h=3*r,c=3*r+1,f=3*r+2;this.p0[0]=t[h]*o,this.p0[1]=t[c]*o,this.p0[2]=t[f],h=3*e,c=3*e+1,f=3*e+2,this.p1[0]=t[h]*o,this.p1[1]=t[c]*o,this.p1[2]=t[f],h=3*i,c=3*i+1,f=3*i+2,this.p2[0]=t[h]*o,this.p2[1]=t[c]*o,this.p2[2]=t[f],this.min[0]=Math.min(this.p0[0],this.p1[0],this.p2[0]),this.min[1]=Math.min(this.p0[1],this.p1[1],this.p2[1]),this.max[0]=Math.max(this.p0[0],this.p1[0],this.p2[0]),this.max[1]=Math.max(this.p0[1],this.p1[1],this.p2[1]);const u=a(O,this.p1,this.p0),l=a(j,this.p2,this.p1);this.normal=n(this.normal,s(this.normal,u,l))}contains(t,r){if(t<this.min[0]||t>this.max[0]||r<this.min[1]||r>this.max[1])return!1;c(q,this.p0[0],this.p0[1]),c(W,this.p1[0],this.p1[1]),c(Z,this.p2[0],this.p2[1]);const e=H(q[0],q[1],W[0],W[1],Z[0],Z[1]);return H(t,r,q[0],q[1],Z[0],Z[1])+H(t,r,q[0],q[1],W[0],W[1])+H(t,r,W[0],W[1],Z[0],Z[1])-e<=1e-4}getHeight(t,r){const e=this.normal;return this.p0[2]-((t-this.p0[0])*e[0]+(r-this.p0[1])*e[1])/e[2]}}let $=null;function _(t,r,e){if($&&$.contains(r,e))return $.getHeight(r,e);for(let i=0;i<t.length;i++)if(t[i].contains(r,e))return $=t[i],t[i].getHeight(r,e);return 0}const B=[];function H(t,r,e,i,n,s){return.5*Math.abs(t*i+e*s+n*r-t*s-e*r-n*i)}function L(t,r,e,i,n,s){"cesium-ion"===e&&(r.Authorization="Bearer "+S),function(t,r,e){const i={method:"GET",referrer:e,headers:r},n=u.getArrayBuffer(t,i),s=n.xhr;return p[t]=s,n.then(r=>(delete p[t],r))}(t,r,origin).then(t=>{if(!t||t.message)s(t?{empty:!0,originalError:t}:{error:{canceled:!0}});else{const r=t.data;let a=null;if("tianditu"===e){const t=F(r,i);P(n,t,i,null,!0,s)}else if("cesium-ion"===e||"cesium"===e){a=N(r);const t=function(t,r){const{positions:e,min:i,max:n,indices:s,radius:a}=t,o=[];let h=0;for(let t=0;t<s.length;t+=3){let r=B[h];r?r.set(e,s[t],s[t+1],s[t+2],2*a):r=B[h]=new V(e,s[t],s[t+1],s[t+2],2*a),h++,o.push(r)}const c=new Float32Array(r*r);h=0;for(let t=0;t<r;t++)for(let e=0;e<r;e++)c[h++]=_(o,e/r*a*2,t/r*a*2);return{data:c,min:i,max:n,width:r,height:r}}(a,i);P(n,t,i,null,!0,s)}else"mapbox"===e&&(a=function(t){const r=new self.Blob([new Uint8Array(t)]);return self.createImageBitmap(r)}(r),a.then(t=>{const r=function(t,r){const{data:e,width:i}=t;let n=1/0,s=-1/0;const a=new Float32Array(r*r),o=Math.round(i/r);for(let t=0;t<r;t++)for(let h=0;h<r;h++){const c=t+h*r;let f=0,u=0;const l=t,y=h;for(let t=0;t<o;t++)for(let r=0;r<o;r++){let n=l*o+t,s=y*o+r;s>i-1&&(s=i-1),n>i-1&&(n=i-1);const a=n+s*i,h=e[4*a],c=e[4*a+1],d=e[4*a+2];0===e[4*a+3]?u+=1:f+=.1*(256*h*256+256*c+d)-1e4}f/=o*o-u||1,f>s&&(s=f),f<n&&(n=f),a[c]=f}return{data:a,width:r,height:r,min:n,max:s}}(function(t){const{width:r,height:e}=t;w||(w=new OffscreenCanvas(1,1),b=w.getContext("2d",{willReadFrequently:!0}));return w.width=r,w.height=e,b.drawImage(t,0,0,r,e),b.getImageData(0,0,r,e)}(t),i);P(n,r,i,t,!0,s)}))}}).catch(r=>{delete p[t],s({empty:!0,originalError:r})})}function P(t,r,e,i,n,s){const a=function(t,r,e,i){let n=d[e];n||(n=d[e]=new l(e));const s=n.createTile(r),a=i?s.getMeshWithSkirts(t,!0):s.getMesh(t),{triangles:o,vertices:h,leftSkirtIndex:c,rightSkirtIndex:f,bottomSkirtIndex:u,topSkirtIndex:y}=a;let{numVerticesWithoutSkirts:A,numTrianglesWithoutSkirts:w}=a;A||(A=h.legnth/3,w=o.length/3);const b=h.length/2,p=new Float32Array(3*b),v=new Float32Array(2*b);let k=1/0,m=-1/0;const U=e-1;for(let t=0;t<b;t++){const i=h[2*t],n=h[2*t+1];if(t>=A){const r=i/2*3;let e,n=.001;(t-(t<c/2?A:t<f/2?c/2:t<u/2?f/2:u/2))%3==0?(e=0,n=0):e=p[r+2];p[3*t]=p[r],p[3*t+1]=p[r+1],p[3*t+2]=e,v[2*t]=p[r]/U+n,v[2*t+1]=-p[r+1]/U+n}else p[3*t]=1*i,p[3*t+1]=1*-n,p[3*t+2]=r[n*e+i],v[2*t]=i/U,v[2*t+1]=n/U;const s=p[p.length-1];s<k&&(k=s),s>m&&(m=s)}return{positions:p,texcoords:v,triangles:o,leftSkirtIndex:c,rightSkirtIndex:f,bottomSkirtIndex:u,topSkirtIndex:y,numTrianglesWithoutSkirts:w,numVerticesWithoutSkirts:A,minHeight:k,maxHeight:m,terrainWidth:e}}(t,r.data,e,n),o=[a.positions.buffer,a.texcoords.buffer,a.triangles.buffer];i&&o.push(i);const h={mesh:a};h.image=i,h.data=r,o.push(r.data.buffer),s(h,o)}t.initialize=function(){},t.onmessage=function(t,r){const e=t.data;var i;"addLayer"===e.command||"removeLayer"===e.command?(A=t.workerId,self.postMessage({type:"<response>",actorId:e.actorId,workerId:A,params:"ok",callback:t.callback})):"fetchTerrain"===e.command?function(t,r){const{url:e,origin:i,type:n,accessToken:s,terrainWidth:a,error:o}=t,h=t.headers||M[n];if("tianditu"===n)L(e,h,n,a,o,r);else if("cesium-ion"===n){const c=t.cesiumIonTokenURL+s;S?L(e,h,n,a,o,r):(I||(I=fetch(c,{responseType:"json",method:"GET",referrer:i,headers:{Accept:"application/json,*/*;q=0.01","Accept-Encoding":"gzip, deflate, br"}}).then(t=>t.json()).then(t=>{S=t.accessToken,I=null})),I.then(()=>{L(e,h,n,a,o,r)}))}else("cesium"===n||"mapbox"===n)&&L(e,h,n,a,o,r)}(e.params,(t,e)=>{r(t.error,t,e)}):"abortTerrain"===e.command&&(i=e.params.url,p[i]&&(p[i].abort(),delete p[i]))}}`;

	t__namespace.registerWorkerAdapter('@maptalks/terrain', code);

	exports.BoxInsideClipMask = Js;
	exports.BoxOutsideClipMask = Zs;
	exports.ClipInsideMask = Ds;
	exports.ClipOutsideMask = Gs;
	exports.ColorMask = Us;
	exports.ElevateMask = Vs;
	exports.FlatInsideMask = js;
	exports.FlatOutsideMask = Bs;
	exports.GLContext = o;
	exports.GroundPainter = At;
	exports.GroupGLLayer = gs;
	exports.HeatmapProcess = Ps;
	exports.HighlightUtil = Fs;
	exports.MaskLayerMixin = ss;
	exports.MaskRendererMixin = Zi;
	exports.VideoMask = zs;
	exports.createREGL = m$2;
	exports.glMatrix = common;
	exports.mat2 = mat2;
	exports.mat2d = mat2d;
	exports.mat3 = mat3;
	exports.mat4 = mat4;
	exports.quat = quat;
	exports.quat2 = quat2;
	exports.reshader = reshadergl_es;
	exports.transcoders = transcoders;
	exports.vec2 = vec2;
	exports.vec3 = vec3;
	exports.vec4 = vec4;

	Object.defineProperty(exports, '__esModule', { value: true });

	typeof console !== 'undefined' && console.log('@maptalks/gl v0.91.1');

}));