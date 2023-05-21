var Rs=(n,A,e)=>{if(!A.has(n))throw TypeError("Cannot "+e)};var JA=(n,A,e)=>(Rs(n,A,"read from private field"),e?e.call(n):A.get(n)),Qe=(n,A,e)=>{if(A.has(n))throw TypeError("Cannot add the same private member more than once");A instanceof WeakSet?A.add(n):A.set(n,e)},Ce=(n,A,e,t)=>(Rs(n,A,"write to private field"),t?t.call(n,e):A.set(n,e),e);var Qo=(n,A,e)=>(Rs(n,A,"access private method"),e);(function(){const A=document.createElement("link").relList;if(A&&A.supports&&A.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const po="152",Fn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Mn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Nh=0,Io=1,Gh=2,Au=1,Vh=2,Mt=3,Yt=0,Re=1,yt=2,zt=0,ni=1,Lo=2,Ro=3,Ho=4,Kh=5,qn=100,kh=101,zh=102,Do=103,Po=104,Wh=200,Xh=201,Yh=202,Jh=203,eu=204,tu=205,Zh=206,qh=207,jh=208,$h=209,Af=210,ef=0,tf=1,nf=2,Ra=3,rf=4,sf=5,af=6,of=7,nu=0,lf=1,cf=2,bt=0,uf=1,hf=2,ff=3,df=4,pf=5,iu=300,ui=301,hi=302,Ha=303,Da=304,ms=306,Pa=1e3,rt=1001,Oa=1002,Te=1003,Oo=1004,Hs=1005,We=1006,gf=1007,zi=1008,_n=1009,mf=1010,Bf=1011,ru=1012,wf=1013,ln=1014,cn=1015,Wi=1016,vf=1017,_f=1018,ii=1020,Cf=1021,st=1023,Ef=1024,xf=1025,gn=1026,fi=1027,Uf=1028,Ff=1029,Mf=1030,yf=1031,Sf=1033,Ds=33776,Ps=33777,Os=33778,Ns=33779,No=35840,Go=35841,Vo=35842,Ko=35843,bf=36196,ko=37492,zo=37496,Wo=37808,Xo=37809,Yo=37810,Jo=37811,Zo=37812,qo=37813,jo=37814,$o=37815,Al=37816,el=37817,tl=37818,nl=37819,il=37820,rl=37821,Gs=36492,Tf=36283,sl=36284,al=36285,ol=36286,su=3e3,mn=3001,Qf=3200,If=3201,Lf=0,Rf=1,Bn="",MA="srgb",gt="srgb-linear",au="display-p3",Vs=7680,Hf=519,ll=35044,cl="300 es",Na=1035;class Un{addEventListener(A,e){this._listeners===void 0&&(this._listeners={});const t=this._listeners;t[A]===void 0&&(t[A]=[]),t[A].indexOf(e)===-1&&t[A].push(e)}hasEventListener(A,e){if(this._listeners===void 0)return!1;const t=this._listeners;return t[A]!==void 0&&t[A].indexOf(e)!==-1}removeEventListener(A,e){if(this._listeners===void 0)return;const i=this._listeners[A];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(A){if(this._listeners===void 0)return;const t=this._listeners[A.type];if(t!==void 0){A.target=this;const i=t.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,A);A.target=null}}}const Ee=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ks=Math.PI/180,Ga=180/Math.PI;function tr(){const n=Math.random()*4294967295|0,A=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0;return(Ee[n&255]+Ee[n>>8&255]+Ee[n>>16&255]+Ee[n>>24&255]+"-"+Ee[A&255]+Ee[A>>8&255]+"-"+Ee[A>>16&15|64]+Ee[A>>24&255]+"-"+Ee[e&63|128]+Ee[e>>8&255]+"-"+Ee[e>>16&255]+Ee[e>>24&255]+Ee[t&255]+Ee[t>>8&255]+Ee[t>>16&255]+Ee[t>>24&255]).toLowerCase()}function me(n,A,e){return Math.max(A,Math.min(e,n))}function Df(n,A){return(n%A+A)%A}function ks(n,A,e){return(1-e)*n+e*A}function ul(n){return(n&n-1)===0&&n!==0}function Pf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function or(n,A){switch(A.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function De(n,A){switch(A.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class LA{constructor(A=0,e=0){LA.prototype.isVector2=!0,this.x=A,this.y=e}get width(){return this.x}set width(A){this.x=A}get height(){return this.y}set height(A){this.y=A}set(A,e){return this.x=A,this.y=e,this}setScalar(A){return this.x=A,this.y=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setComponent(A,e){switch(A){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y)}copy(A){return this.x=A.x,this.y=A.y,this}add(A){return this.x+=A.x,this.y+=A.y,this}addScalar(A){return this.x+=A,this.y+=A,this}addVectors(A,e){return this.x=A.x+e.x,this.y=A.y+e.y,this}addScaledVector(A,e){return this.x+=A.x*e,this.y+=A.y*e,this}sub(A){return this.x-=A.x,this.y-=A.y,this}subScalar(A){return this.x-=A,this.y-=A,this}subVectors(A,e){return this.x=A.x-e.x,this.y=A.y-e.y,this}multiply(A){return this.x*=A.x,this.y*=A.y,this}multiplyScalar(A){return this.x*=A,this.y*=A,this}divide(A){return this.x/=A.x,this.y/=A.y,this}divideScalar(A){return this.multiplyScalar(1/A)}applyMatrix3(A){const e=this.x,t=this.y,i=A.elements;return this.x=i[0]*e+i[3]*t+i[6],this.y=i[1]*e+i[4]*t+i[7],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this}clamp(A,e){return this.x=Math.max(A.x,Math.min(e.x,this.x)),this.y=Math.max(A.y,Math.min(e.y,this.y)),this}clampScalar(A,e){return this.x=Math.max(A,Math.min(e,this.x)),this.y=Math.max(A,Math.min(e,this.y)),this}clampLength(A,e){const t=this.length();return this.divideScalar(t||1).multiplyScalar(Math.max(A,Math.min(e,t)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(A){return this.x*A.x+this.y*A.y}cross(A){return this.x*A.y-this.y*A.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(A){const e=Math.sqrt(this.lengthSq()*A.lengthSq());if(e===0)return Math.PI/2;const t=this.dot(A)/e;return Math.acos(me(t,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const e=this.x-A.x,t=this.y-A.y;return e*e+t*t}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,e){return this.x+=(A.x-this.x)*e,this.y+=(A.y-this.y)*e,this}lerpVectors(A,e,t){return this.x=A.x+(e.x-A.x)*t,this.y=A.y+(e.y-A.y)*t,this}equals(A){return A.x===this.x&&A.y===this.y}fromArray(A,e=0){return this.x=A[e],this.y=A[e+1],this}toArray(A=[],e=0){return A[e]=this.x,A[e+1]=this.y,A}fromBufferAttribute(A,e){return this.x=A.getX(e),this.y=A.getY(e),this}rotateAround(A,e){const t=Math.cos(e),i=Math.sin(e),r=this.x-A.x,s=this.y-A.y;return this.x=r*t-s*i+A.x,this.y=r*i+s*t+A.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class DA{constructor(){DA.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(A,e,t,i,r,s,a,o,l){const c=this.elements;return c[0]=A,c[1]=i,c[2]=a,c[3]=e,c[4]=r,c[5]=o,c[6]=t,c[7]=s,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(A){const e=this.elements,t=A.elements;return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],this}extractBasis(A,e,t){return A.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),t.setFromMatrix3Column(this,2),this}setFromMatrix4(A){const e=A.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,e){const t=A.elements,i=e.elements,r=this.elements,s=t[0],a=t[3],o=t[6],l=t[1],c=t[4],u=t[7],h=t[2],d=t[5],g=t[8],m=i[0],p=i[3],f=i[6],_=i[1],E=i[4],x=i[7],w=i[2],U=i[5],S=i[8];return r[0]=s*m+a*_+o*w,r[3]=s*p+a*E+o*U,r[6]=s*f+a*x+o*S,r[1]=l*m+c*_+u*w,r[4]=l*p+c*E+u*U,r[7]=l*f+c*x+u*S,r[2]=h*m+d*_+g*w,r[5]=h*p+d*E+g*U,r[8]=h*f+d*x+g*S,this}multiplyScalar(A){const e=this.elements;return e[0]*=A,e[3]*=A,e[6]*=A,e[1]*=A,e[4]*=A,e[7]*=A,e[2]*=A,e[5]*=A,e[8]*=A,this}determinant(){const A=this.elements,e=A[0],t=A[1],i=A[2],r=A[3],s=A[4],a=A[5],o=A[6],l=A[7],c=A[8];return e*s*c-e*a*l-t*r*c+t*a*o+i*r*l-i*s*o}invert(){const A=this.elements,e=A[0],t=A[1],i=A[2],r=A[3],s=A[4],a=A[5],o=A[6],l=A[7],c=A[8],u=c*s-a*l,h=a*o-c*r,d=l*r-s*o,g=e*u+t*h+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return A[0]=u*m,A[1]=(i*l-c*t)*m,A[2]=(a*t-i*s)*m,A[3]=h*m,A[4]=(c*e-i*o)*m,A[5]=(i*r-a*e)*m,A[6]=d*m,A[7]=(t*o-l*e)*m,A[8]=(s*e-t*r)*m,this}transpose(){let A;const e=this.elements;return A=e[1],e[1]=e[3],e[3]=A,A=e[2],e[2]=e[6],e[6]=A,A=e[5],e[5]=e[7],e[7]=A,this}getNormalMatrix(A){return this.setFromMatrix4(A).invert().transpose()}transposeIntoArray(A){const e=this.elements;return A[0]=e[0],A[1]=e[3],A[2]=e[6],A[3]=e[1],A[4]=e[4],A[5]=e[7],A[6]=e[2],A[7]=e[5],A[8]=e[8],this}setUvTransform(A,e,t,i,r,s,a){const o=Math.cos(r),l=Math.sin(r);return this.set(t*o,t*l,-t*(o*s+l*a)+s+A,-i*l,i*o,-i*(-l*s+o*a)+a+e,0,0,1),this}scale(A,e){return this.premultiply(zs.makeScale(A,e)),this}rotate(A){return this.premultiply(zs.makeRotation(-A)),this}translate(A,e){return this.premultiply(zs.makeTranslation(A,e)),this}makeTranslation(A,e){return this.set(1,0,A,0,1,e,0,0,1),this}makeRotation(A){const e=Math.cos(A),t=Math.sin(A);return this.set(e,-t,0,t,e,0,0,0,1),this}makeScale(A,e){return this.set(A,0,0,0,e,0,0,0,1),this}equals(A){const e=this.elements,t=A.elements;for(let i=0;i<9;i++)if(e[i]!==t[i])return!1;return!0}fromArray(A,e=0){for(let t=0;t<9;t++)this.elements[t]=A[t+e];return this}toArray(A=[],e=0){const t=this.elements;return A[e]=t[0],A[e+1]=t[1],A[e+2]=t[2],A[e+3]=t[3],A[e+4]=t[4],A[e+5]=t[5],A[e+6]=t[6],A[e+7]=t[7],A[e+8]=t[8],A}clone(){return new this.constructor().fromArray(this.elements)}}const zs=new DA;function ou(n){for(let A=n.length-1;A>=0;--A)if(n[A]>=65535)return!0;return!1}function rs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}const hl={};function Hi(n){n in hl||(hl[n]=!0,console.warn(n))}function ri(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ws(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Of=new DA().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Nf=new DA().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Gf(n){return n.convertSRGBToLinear().applyMatrix3(Nf)}function Vf(n){return n.applyMatrix3(Of).convertLinearToSRGB()}const Kf={[gt]:n=>n,[MA]:n=>n.convertSRGBToLinear(),[au]:Gf},kf={[gt]:n=>n,[MA]:n=>n.convertLinearToSRGB(),[au]:Vf},je={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return gt},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,A,e){if(this.enabled===!1||A===e||!A||!e)return n;const t=Kf[A],i=kf[e];if(t===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${A}" to "${e}".`);return i(t(n))},fromWorkingColorSpace:function(n,A){return this.convert(n,this.workingColorSpace,A)},toWorkingColorSpace:function(n,A){return this.convert(n,A,this.workingColorSpace)}};let yn;class lu{static getDataURL(A){if(/^data:/i.test(A.src)||typeof HTMLCanvasElement>"u")return A.src;let e;if(A instanceof HTMLCanvasElement)e=A;else{yn===void 0&&(yn=rs("canvas")),yn.width=A.width,yn.height=A.height;const t=yn.getContext("2d");A instanceof ImageData?t.putImageData(A,0,0):t.drawImage(A,0,0,A.width,A.height),e=yn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",A),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const e=rs("canvas");e.width=A.width,e.height=A.height;const t=e.getContext("2d");t.drawImage(A,0,0,A.width,A.height);const i=t.getImageData(0,0,A.width,A.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=ri(r[s]/255)*255;return t.putImageData(i,0,0),e}else if(A.data){const e=A.data.slice(0);for(let t=0;t<e.length;t++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[t]=Math.floor(ri(e[t]/255)*255):e[t]=ri(e[t]);return{data:e,width:A.width,height:A.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),A}}class cu{constructor(A=null){this.isSource=!0,this.uuid=tr(),this.data=A,this.version=0}set needsUpdate(A){A===!0&&this.version++}toJSON(A){const e=A===void 0||typeof A=="string";if(!e&&A.images[this.uuid]!==void 0)return A.images[this.uuid];const t={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,a=i.length;s<a;s++)i[s].isDataTexture?r.push(Xs(i[s].image)):r.push(Xs(i[s]))}else r=Xs(i);t.url=r}return e||(A.images[this.uuid]=t),t}}function Xs(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?lu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zf=0;class Ge extends Un{constructor(A=Ge.DEFAULT_IMAGE,e=Ge.DEFAULT_MAPPING,t=rt,i=rt,r=We,s=zi,a=st,o=_n,l=Ge.DEFAULT_ANISOTROPY,c=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=tr(),this.name="",this.source=new cu(A),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=t,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=o,this.offset=new LA(0,0),this.repeat=new LA(1,1),this.center=new LA(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new DA,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(Hi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===mn?MA:Bn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(A=null){this.source.data=A}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(A){return this.name=A.name,this.source=A.source,this.mipmaps=A.mipmaps.slice(0),this.mapping=A.mapping,this.channel=A.channel,this.wrapS=A.wrapS,this.wrapT=A.wrapT,this.magFilter=A.magFilter,this.minFilter=A.minFilter,this.anisotropy=A.anisotropy,this.format=A.format,this.internalFormat=A.internalFormat,this.type=A.type,this.offset.copy(A.offset),this.repeat.copy(A.repeat),this.center.copy(A.center),this.rotation=A.rotation,this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrix.copy(A.matrix),this.generateMipmaps=A.generateMipmaps,this.premultiplyAlpha=A.premultiplyAlpha,this.flipY=A.flipY,this.unpackAlignment=A.unpackAlignment,this.colorSpace=A.colorSpace,this.userData=JSON.parse(JSON.stringify(A.userData)),this.needsUpdate=!0,this}toJSON(A){const e=A===void 0||typeof A=="string";if(!e&&A.textures[this.uuid]!==void 0)return A.textures[this.uuid];const t={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(A).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(t.userData=this.userData),e||(A.textures[this.uuid]=t),t}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(A){if(this.mapping!==iu)return A;if(A.applyMatrix3(this.matrix),A.x<0||A.x>1)switch(this.wrapS){case Pa:A.x=A.x-Math.floor(A.x);break;case rt:A.x=A.x<0?0:1;break;case Oa:Math.abs(Math.floor(A.x)%2)===1?A.x=Math.ceil(A.x)-A.x:A.x=A.x-Math.floor(A.x);break}if(A.y<0||A.y>1)switch(this.wrapT){case Pa:A.y=A.y-Math.floor(A.y);break;case rt:A.y=A.y<0?0:1;break;case Oa:Math.abs(Math.floor(A.y)%2)===1?A.y=Math.ceil(A.y)-A.y:A.y=A.y-Math.floor(A.y);break}return this.flipY&&(A.y=1-A.y),A}set needsUpdate(A){A===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Hi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===MA?mn:su}set encoding(A){Hi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=A===mn?MA:Bn}}Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=iu;Ge.DEFAULT_ANISOTROPY=1;class Be{constructor(A=0,e=0,t=0,i=1){Be.prototype.isVector4=!0,this.x=A,this.y=e,this.z=t,this.w=i}get width(){return this.z}set width(A){this.z=A}get height(){return this.w}set height(A){this.w=A}set(A,e,t,i){return this.x=A,this.y=e,this.z=t,this.w=i,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this.w=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setW(A){return this.w=A,this}setComponent(A,e){switch(A){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w!==void 0?A.w:1,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this.w+=A.w,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this.w+=A,this}addVectors(A,e){return this.x=A.x+e.x,this.y=A.y+e.y,this.z=A.z+e.z,this.w=A.w+e.w,this}addScaledVector(A,e){return this.x+=A.x*e,this.y+=A.y*e,this.z+=A.z*e,this.w+=A.w*e,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this.w-=A.w,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this.w-=A,this}subVectors(A,e){return this.x=A.x-e.x,this.y=A.y-e.y,this.z=A.z-e.z,this.w=A.w-e.w,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this.w*=A.w,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this.w*=A,this}applyMatrix4(A){const e=this.x,t=this.y,i=this.z,r=this.w,s=A.elements;return this.x=s[0]*e+s[4]*t+s[8]*i+s[12]*r,this.y=s[1]*e+s[5]*t+s[9]*i+s[13]*r,this.z=s[2]*e+s[6]*t+s[10]*i+s[14]*r,this.w=s[3]*e+s[7]*t+s[11]*i+s[15]*r,this}divideScalar(A){return this.multiplyScalar(1/A)}setAxisAngleFromQuaternion(A){this.w=2*Math.acos(A.w);const e=Math.sqrt(1-A.w*A.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=A.x/e,this.y=A.y/e,this.z=A.z/e),this}setAxisAngleFromRotationMatrix(A){let e,t,i,r;const o=A.elements,l=o[0],c=o[4],u=o[8],h=o[1],d=o[5],g=o[9],m=o[2],p=o[6],f=o[10];if(Math.abs(c-h)<.01&&Math.abs(u-m)<.01&&Math.abs(g-p)<.01){if(Math.abs(c+h)<.1&&Math.abs(u+m)<.1&&Math.abs(g+p)<.1&&Math.abs(l+d+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(l+1)/2,x=(d+1)/2,w=(f+1)/2,U=(c+h)/4,S=(u+m)/4,R=(g+p)/4;return E>x&&E>w?E<.01?(t=0,i=.707106781,r=.707106781):(t=Math.sqrt(E),i=U/t,r=S/t):x>w?x<.01?(t=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),t=U/i,r=R/i):w<.01?(t=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),t=S/r,i=R/r),this.set(t,i,r,e),this}let _=Math.sqrt((p-g)*(p-g)+(u-m)*(u-m)+(h-c)*(h-c));return Math.abs(_)<.001&&(_=1),this.x=(p-g)/_,this.y=(u-m)/_,this.z=(h-c)/_,this.w=Math.acos((l+d+f-1)/2),this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this.w=Math.min(this.w,A.w),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this.w=Math.max(this.w,A.w),this}clamp(A,e){return this.x=Math.max(A.x,Math.min(e.x,this.x)),this.y=Math.max(A.y,Math.min(e.y,this.y)),this.z=Math.max(A.z,Math.min(e.z,this.z)),this.w=Math.max(A.w,Math.min(e.w,this.w)),this}clampScalar(A,e){return this.x=Math.max(A,Math.min(e,this.x)),this.y=Math.max(A,Math.min(e,this.y)),this.z=Math.max(A,Math.min(e,this.z)),this.w=Math.max(A,Math.min(e,this.w)),this}clampLength(A,e){const t=this.length();return this.divideScalar(t||1).multiplyScalar(Math.max(A,Math.min(e,t)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z+this.w*A.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,e){return this.x+=(A.x-this.x)*e,this.y+=(A.y-this.y)*e,this.z+=(A.z-this.z)*e,this.w+=(A.w-this.w)*e,this}lerpVectors(A,e,t){return this.x=A.x+(e.x-A.x)*t,this.y=A.y+(e.y-A.y)*t,this.z=A.z+(e.z-A.z)*t,this.w=A.w+(e.w-A.w)*t,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z&&A.w===this.w}fromArray(A,e=0){return this.x=A[e],this.y=A[e+1],this.z=A[e+2],this.w=A[e+3],this}toArray(A=[],e=0){return A[e]=this.x,A[e+1]=this.y,A[e+2]=this.z,A[e+3]=this.w,A}fromBufferAttribute(A,e){return this.x=A.getX(e),this.y=A.getY(e),this.z=A.getZ(e),this.w=A.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cn extends Un{constructor(A=1,e=1,t={}){super(),this.isWebGLRenderTarget=!0,this.width=A,this.height=e,this.depth=1,this.scissor=new Be(0,0,A,e),this.scissorTest=!1,this.viewport=new Be(0,0,A,e);const i={width:A,height:e,depth:1};t.encoding!==void 0&&(Hi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===mn?MA:Bn),this.texture=new Ge(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.internalFormat=t.internalFormat!==void 0?t.internalFormat:null,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:We,this.depthBuffer=t.depthBuffer!==void 0?t.depthBuffer:!0,this.stencilBuffer=t.stencilBuffer!==void 0?t.stencilBuffer:!1,this.depthTexture=t.depthTexture!==void 0?t.depthTexture:null,this.samples=t.samples!==void 0?t.samples:0}setSize(A,e,t=1){(this.width!==A||this.height!==e||this.depth!==t)&&(this.width=A,this.height=e,this.depth=t,this.texture.image.width=A,this.texture.image.height=e,this.texture.image.depth=t,this.dispose()),this.viewport.set(0,0,A,e),this.scissor.set(0,0,A,e)}clone(){return new this.constructor().copy(this)}copy(A){this.width=A.width,this.height=A.height,this.depth=A.depth,this.scissor.copy(A.scissor),this.scissorTest=A.scissorTest,this.viewport.copy(A.viewport),this.texture=A.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},A.texture.image);return this.texture.source=new cu(e),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.samples=A.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class uu extends Ge{constructor(A=null,e=1,t=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:A,width:e,height:t,depth:i},this.magFilter=Te,this.minFilter=Te,this.wrapR=rt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wf extends Ge{constructor(A=null,e=1,t=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:A,width:e,height:t,depth:i},this.magFilter=Te,this.minFilter=Te,this.wrapR=rt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class En{constructor(A=0,e=0,t=0,i=1){this.isQuaternion=!0,this._x=A,this._y=e,this._z=t,this._w=i}static slerpFlat(A,e,t,i,r,s,a){let o=t[i+0],l=t[i+1],c=t[i+2],u=t[i+3];const h=r[s+0],d=r[s+1],g=r[s+2],m=r[s+3];if(a===0){A[e+0]=o,A[e+1]=l,A[e+2]=c,A[e+3]=u;return}if(a===1){A[e+0]=h,A[e+1]=d,A[e+2]=g,A[e+3]=m;return}if(u!==m||o!==h||l!==d||c!==g){let p=1-a;const f=o*h+l*d+c*g+u*m,_=f>=0?1:-1,E=1-f*f;if(E>Number.EPSILON){const w=Math.sqrt(E),U=Math.atan2(w,f*_);p=Math.sin(p*U)/w,a=Math.sin(a*U)/w}const x=a*_;if(o=o*p+h*x,l=l*p+d*x,c=c*p+g*x,u=u*p+m*x,p===1-a){const w=1/Math.sqrt(o*o+l*l+c*c+u*u);o*=w,l*=w,c*=w,u*=w}}A[e]=o,A[e+1]=l,A[e+2]=c,A[e+3]=u}static multiplyQuaternionsFlat(A,e,t,i,r,s){const a=t[i],o=t[i+1],l=t[i+2],c=t[i+3],u=r[s],h=r[s+1],d=r[s+2],g=r[s+3];return A[e]=a*g+c*u+o*d-l*h,A[e+1]=o*g+c*h+l*u-a*d,A[e+2]=l*g+c*d+a*h-o*u,A[e+3]=c*g-a*u-o*h-l*d,A}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get w(){return this._w}set w(A){this._w=A,this._onChangeCallback()}set(A,e,t,i){return this._x=A,this._y=e,this._z=t,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(A){return this._x=A.x,this._y=A.y,this._z=A.z,this._w=A.w,this._onChangeCallback(),this}setFromEuler(A,e){const t=A._x,i=A._y,r=A._z,s=A._order,a=Math.cos,o=Math.sin,l=a(t/2),c=a(i/2),u=a(r/2),h=o(t/2),d=o(i/2),g=o(r/2);switch(s){case"XYZ":this._x=h*c*u+l*d*g,this._y=l*d*u-h*c*g,this._z=l*c*g+h*d*u,this._w=l*c*u-h*d*g;break;case"YXZ":this._x=h*c*u+l*d*g,this._y=l*d*u-h*c*g,this._z=l*c*g-h*d*u,this._w=l*c*u+h*d*g;break;case"ZXY":this._x=h*c*u-l*d*g,this._y=l*d*u+h*c*g,this._z=l*c*g+h*d*u,this._w=l*c*u-h*d*g;break;case"ZYX":this._x=h*c*u-l*d*g,this._y=l*d*u+h*c*g,this._z=l*c*g-h*d*u,this._w=l*c*u+h*d*g;break;case"YZX":this._x=h*c*u+l*d*g,this._y=l*d*u+h*c*g,this._z=l*c*g-h*d*u,this._w=l*c*u-h*d*g;break;case"XZY":this._x=h*c*u-l*d*g,this._y=l*d*u-h*c*g,this._z=l*c*g+h*d*u,this._w=l*c*u+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(A,e){const t=e/2,i=Math.sin(t);return this._x=A.x*i,this._y=A.y*i,this._z=A.z*i,this._w=Math.cos(t),this._onChangeCallback(),this}setFromRotationMatrix(A){const e=A.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10],h=t+a+u;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(c-o)*d,this._y=(r-l)*d,this._z=(s-i)*d}else if(t>a&&t>u){const d=2*Math.sqrt(1+t-a-u);this._w=(c-o)/d,this._x=.25*d,this._y=(i+s)/d,this._z=(r+l)/d}else if(a>u){const d=2*Math.sqrt(1+a-t-u);this._w=(r-l)/d,this._x=(i+s)/d,this._y=.25*d,this._z=(o+c)/d}else{const d=2*Math.sqrt(1+u-t-a);this._w=(s-i)/d,this._x=(r+l)/d,this._y=(o+c)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(A,e){let t=A.dot(e)+1;return t<Number.EPSILON?(t=0,Math.abs(A.x)>Math.abs(A.z)?(this._x=-A.y,this._y=A.x,this._z=0,this._w=t):(this._x=0,this._y=-A.z,this._z=A.y,this._w=t)):(this._x=A.y*e.z-A.z*e.y,this._y=A.z*e.x-A.x*e.z,this._z=A.x*e.y-A.y*e.x,this._w=t),this.normalize()}angleTo(A){return 2*Math.acos(Math.abs(me(this.dot(A),-1,1)))}rotateTowards(A,e){const t=this.angleTo(A);if(t===0)return this;const i=Math.min(1,e/t);return this.slerp(A,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(A){return this._x*A._x+this._y*A._y+this._z*A._z+this._w*A._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let A=this.length();return A===0?(this._x=0,this._y=0,this._z=0,this._w=1):(A=1/A,this._x=this._x*A,this._y=this._y*A,this._z=this._z*A,this._w=this._w*A),this._onChangeCallback(),this}multiply(A){return this.multiplyQuaternions(this,A)}premultiply(A){return this.multiplyQuaternions(A,this)}multiplyQuaternions(A,e){const t=A._x,i=A._y,r=A._z,s=A._w,a=e._x,o=e._y,l=e._z,c=e._w;return this._x=t*c+s*a+i*l-r*o,this._y=i*c+s*o+r*a-t*l,this._z=r*c+s*l+t*o-i*a,this._w=s*c-t*a-i*o-r*l,this._onChangeCallback(),this}slerp(A,e){if(e===0)return this;if(e===1)return this.copy(A);const t=this._x,i=this._y,r=this._z,s=this._w;let a=s*A._w+t*A._x+i*A._y+r*A._z;if(a<0?(this._w=-A._w,this._x=-A._x,this._y=-A._y,this._z=-A._z,a=-a):this.copy(A),a>=1)return this._w=s,this._x=t,this._y=i,this._z=r,this;const o=1-a*a;if(o<=Number.EPSILON){const d=1-e;return this._w=d*s+e*this._w,this._x=d*t+e*this._x,this._y=d*i+e*this._y,this._z=d*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(o),c=Math.atan2(l,a),u=Math.sin((1-e)*c)/l,h=Math.sin(e*c)/l;return this._w=s*u+this._w*h,this._x=t*u+this._x*h,this._y=i*u+this._y*h,this._z=r*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(A,e,t){return this.copy(A).slerp(e,t)}random(){const A=Math.random(),e=Math.sqrt(1-A),t=Math.sqrt(A),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),t*Math.sin(r),t*Math.cos(r),e*Math.sin(i))}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._w===this._w}fromArray(A,e=0){return this._x=A[e],this._y=A[e+1],this._z=A[e+2],this._w=A[e+3],this._onChangeCallback(),this}toArray(A=[],e=0){return A[e]=this._x,A[e+1]=this._y,A[e+2]=this._z,A[e+3]=this._w,A}fromBufferAttribute(A,e){return this._x=A.getX(e),this._y=A.getY(e),this._z=A.getZ(e),this._w=A.getW(e),this}toJSON(){return this.toArray()}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(A=0,e=0,t=0){L.prototype.isVector3=!0,this.x=A,this.y=e,this.z=t}set(A,e,t){return t===void 0&&(t=this.z),this.x=A,this.y=e,this.z=t,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setComponent(A,e){switch(A){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this}addVectors(A,e){return this.x=A.x+e.x,this.y=A.y+e.y,this.z=A.z+e.z,this}addScaledVector(A,e){return this.x+=A.x*e,this.y+=A.y*e,this.z+=A.z*e,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this}subVectors(A,e){return this.x=A.x-e.x,this.y=A.y-e.y,this.z=A.z-e.z,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this}multiplyVectors(A,e){return this.x=A.x*e.x,this.y=A.y*e.y,this.z=A.z*e.z,this}applyEuler(A){return this.applyQuaternion(fl.setFromEuler(A))}applyAxisAngle(A,e){return this.applyQuaternion(fl.setFromAxisAngle(A,e))}applyMatrix3(A){const e=this.x,t=this.y,i=this.z,r=A.elements;return this.x=r[0]*e+r[3]*t+r[6]*i,this.y=r[1]*e+r[4]*t+r[7]*i,this.z=r[2]*e+r[5]*t+r[8]*i,this}applyNormalMatrix(A){return this.applyMatrix3(A).normalize()}applyMatrix4(A){const e=this.x,t=this.y,i=this.z,r=A.elements,s=1/(r[3]*e+r[7]*t+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*t+r[8]*i+r[12])*s,this.y=(r[1]*e+r[5]*t+r[9]*i+r[13])*s,this.z=(r[2]*e+r[6]*t+r[10]*i+r[14])*s,this}applyQuaternion(A){const e=this.x,t=this.y,i=this.z,r=A.x,s=A.y,a=A.z,o=A.w,l=o*e+s*i-a*t,c=o*t+a*e-r*i,u=o*i+r*t-s*e,h=-r*e-s*t-a*i;return this.x=l*o+h*-r+c*-a-u*-s,this.y=c*o+h*-s+u*-r-l*-a,this.z=u*o+h*-a+l*-s-c*-r,this}project(A){return this.applyMatrix4(A.matrixWorldInverse).applyMatrix4(A.projectionMatrix)}unproject(A){return this.applyMatrix4(A.projectionMatrixInverse).applyMatrix4(A.matrixWorld)}transformDirection(A){const e=this.x,t=this.y,i=this.z,r=A.elements;return this.x=r[0]*e+r[4]*t+r[8]*i,this.y=r[1]*e+r[5]*t+r[9]*i,this.z=r[2]*e+r[6]*t+r[10]*i,this.normalize()}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this}divideScalar(A){return this.multiplyScalar(1/A)}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this}clamp(A,e){return this.x=Math.max(A.x,Math.min(e.x,this.x)),this.y=Math.max(A.y,Math.min(e.y,this.y)),this.z=Math.max(A.z,Math.min(e.z,this.z)),this}clampScalar(A,e){return this.x=Math.max(A,Math.min(e,this.x)),this.y=Math.max(A,Math.min(e,this.y)),this.z=Math.max(A,Math.min(e,this.z)),this}clampLength(A,e){const t=this.length();return this.divideScalar(t||1).multiplyScalar(Math.max(A,Math.min(e,t)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,e){return this.x+=(A.x-this.x)*e,this.y+=(A.y-this.y)*e,this.z+=(A.z-this.z)*e,this}lerpVectors(A,e,t){return this.x=A.x+(e.x-A.x)*t,this.y=A.y+(e.y-A.y)*t,this.z=A.z+(e.z-A.z)*t,this}cross(A){return this.crossVectors(this,A)}crossVectors(A,e){const t=A.x,i=A.y,r=A.z,s=e.x,a=e.y,o=e.z;return this.x=i*o-r*a,this.y=r*s-t*o,this.z=t*a-i*s,this}projectOnVector(A){const e=A.lengthSq();if(e===0)return this.set(0,0,0);const t=A.dot(this)/e;return this.copy(A).multiplyScalar(t)}projectOnPlane(A){return Ys.copy(this).projectOnVector(A),this.sub(Ys)}reflect(A){return this.sub(Ys.copy(A).multiplyScalar(2*this.dot(A)))}angleTo(A){const e=Math.sqrt(this.lengthSq()*A.lengthSq());if(e===0)return Math.PI/2;const t=this.dot(A)/e;return Math.acos(me(t,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const e=this.x-A.x,t=this.y-A.y,i=this.z-A.z;return e*e+t*t+i*i}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)+Math.abs(this.z-A.z)}setFromSpherical(A){return this.setFromSphericalCoords(A.radius,A.phi,A.theta)}setFromSphericalCoords(A,e,t){const i=Math.sin(e)*A;return this.x=i*Math.sin(t),this.y=Math.cos(e)*A,this.z=i*Math.cos(t),this}setFromCylindrical(A){return this.setFromCylindricalCoords(A.radius,A.theta,A.y)}setFromCylindricalCoords(A,e,t){return this.x=A*Math.sin(e),this.y=t,this.z=A*Math.cos(e),this}setFromMatrixPosition(A){const e=A.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(A){const e=this.setFromMatrixColumn(A,0).length(),t=this.setFromMatrixColumn(A,1).length(),i=this.setFromMatrixColumn(A,2).length();return this.x=e,this.y=t,this.z=i,this}setFromMatrixColumn(A,e){return this.fromArray(A.elements,e*4)}setFromMatrix3Column(A,e){return this.fromArray(A.elements,e*3)}setFromEuler(A){return this.x=A._x,this.y=A._y,this.z=A._z,this}setFromColor(A){return this.x=A.r,this.y=A.g,this.z=A.b,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z}fromArray(A,e=0){return this.x=A[e],this.y=A[e+1],this.z=A[e+2],this}toArray(A=[],e=0){return A[e]=this.x,A[e+1]=this.y,A[e+2]=this.z,A}fromBufferAttribute(A,e){return this.x=A.getX(e),this.y=A.getY(e),this.z=A.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const A=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,t=Math.sqrt(1-A**2);return this.x=t*Math.cos(e),this.y=t*Math.sin(e),this.z=A,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ys=new L,fl=new En;class nr{constructor(A=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=A,this.max=e}set(A,e){return this.min.copy(A),this.max.copy(e),this}setFromArray(A){this.makeEmpty();for(let e=0,t=A.length;e<t;e+=3)this.expandByPoint(vt.fromArray(A,e));return this}setFromBufferAttribute(A){this.makeEmpty();for(let e=0,t=A.count;e<t;e++)this.expandByPoint(vt.fromBufferAttribute(A,e));return this}setFromPoints(A){this.makeEmpty();for(let e=0,t=A.length;e<t;e++)this.expandByPoint(A[e]);return this}setFromCenterAndSize(A,e){const t=vt.copy(e).multiplyScalar(.5);return this.min.copy(A).sub(t),this.max.copy(A).add(t),this}setFromObject(A,e=!1){return this.makeEmpty(),this.expandByObject(A,e)}clone(){return new this.constructor().copy(this)}copy(A){return this.min.copy(A.min),this.max.copy(A.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(A){return this.isEmpty()?A.set(0,0,0):A.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(A){return this.isEmpty()?A.set(0,0,0):A.subVectors(this.max,this.min)}expandByPoint(A){return this.min.min(A),this.max.max(A),this}expandByVector(A){return this.min.sub(A),this.max.add(A),this}expandByScalar(A){return this.min.addScalar(-A),this.max.addScalar(A),this}expandByObject(A,e=!1){if(A.updateWorldMatrix(!1,!1),A.boundingBox!==void 0)A.boundingBox===null&&A.computeBoundingBox(),Sn.copy(A.boundingBox),Sn.applyMatrix4(A.matrixWorld),this.union(Sn);else{const i=A.geometry;if(i!==void 0)if(e&&i.attributes!==void 0&&i.attributes.position!==void 0){const r=i.attributes.position;for(let s=0,a=r.count;s<a;s++)vt.fromBufferAttribute(r,s).applyMatrix4(A.matrixWorld),this.expandByPoint(vt)}else i.boundingBox===null&&i.computeBoundingBox(),Sn.copy(i.boundingBox),Sn.applyMatrix4(A.matrixWorld),this.union(Sn)}const t=A.children;for(let i=0,r=t.length;i<r;i++)this.expandByObject(t[i],e);return this}containsPoint(A){return!(A.x<this.min.x||A.x>this.max.x||A.y<this.min.y||A.y>this.max.y||A.z<this.min.z||A.z>this.max.z)}containsBox(A){return this.min.x<=A.min.x&&A.max.x<=this.max.x&&this.min.y<=A.min.y&&A.max.y<=this.max.y&&this.min.z<=A.min.z&&A.max.z<=this.max.z}getParameter(A,e){return e.set((A.x-this.min.x)/(this.max.x-this.min.x),(A.y-this.min.y)/(this.max.y-this.min.y),(A.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(A){return!(A.max.x<this.min.x||A.min.x>this.max.x||A.max.y<this.min.y||A.min.y>this.max.y||A.max.z<this.min.z||A.min.z>this.max.z)}intersectsSphere(A){return this.clampPoint(A.center,vt),vt.distanceToSquared(A.center)<=A.radius*A.radius}intersectsPlane(A){let e,t;return A.normal.x>0?(e=A.normal.x*this.min.x,t=A.normal.x*this.max.x):(e=A.normal.x*this.max.x,t=A.normal.x*this.min.x),A.normal.y>0?(e+=A.normal.y*this.min.y,t+=A.normal.y*this.max.y):(e+=A.normal.y*this.max.y,t+=A.normal.y*this.min.y),A.normal.z>0?(e+=A.normal.z*this.min.z,t+=A.normal.z*this.max.z):(e+=A.normal.z*this.max.z,t+=A.normal.z*this.min.z),e<=-A.constant&&t>=-A.constant}intersectsTriangle(A){if(this.isEmpty())return!1;this.getCenter(wi),lr.subVectors(this.max,wi),bn.subVectors(A.a,wi),Tn.subVectors(A.b,wi),Qn.subVectors(A.c,wi),Lt.subVectors(Tn,bn),Rt.subVectors(Qn,Tn),An.subVectors(bn,Qn);let e=[0,-Lt.z,Lt.y,0,-Rt.z,Rt.y,0,-An.z,An.y,Lt.z,0,-Lt.x,Rt.z,0,-Rt.x,An.z,0,-An.x,-Lt.y,Lt.x,0,-Rt.y,Rt.x,0,-An.y,An.x,0];return!Js(e,bn,Tn,Qn,lr)||(e=[1,0,0,0,1,0,0,0,1],!Js(e,bn,Tn,Qn,lr))?!1:(cr.crossVectors(Lt,Rt),e=[cr.x,cr.y,cr.z],Js(e,bn,Tn,Qn,lr))}clampPoint(A,e){return e.copy(A).clamp(this.min,this.max)}distanceToPoint(A){return this.clampPoint(A,vt).distanceTo(A)}getBoundingSphere(A){return this.isEmpty()?A.makeEmpty():(this.getCenter(A.center),A.radius=this.getSize(vt).length()*.5),A}intersect(A){return this.min.max(A.min),this.max.min(A.max),this.isEmpty()&&this.makeEmpty(),this}union(A){return this.min.min(A.min),this.max.max(A.max),this}applyMatrix4(A){return this.isEmpty()?this:(wt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(A),wt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(A),wt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(A),wt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(A),wt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(A),wt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(A),wt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(A),wt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(A),this.setFromPoints(wt),this)}translate(A){return this.min.add(A),this.max.add(A),this}equals(A){return A.min.equals(this.min)&&A.max.equals(this.max)}}const wt=[new L,new L,new L,new L,new L,new L,new L,new L],vt=new L,Sn=new nr,bn=new L,Tn=new L,Qn=new L,Lt=new L,Rt=new L,An=new L,wi=new L,lr=new L,cr=new L,en=new L;function Js(n,A,e,t,i){for(let r=0,s=n.length-3;r<=s;r+=3){en.fromArray(n,r);const a=i.x*Math.abs(en.x)+i.y*Math.abs(en.y)+i.z*Math.abs(en.z),o=A.dot(en),l=e.dot(en),c=t.dot(en);if(Math.max(-Math.max(o,l,c),Math.min(o,l,c))>a)return!1}return!0}const Xf=new nr,vi=new L,Zs=new L;class go{constructor(A=new L,e=-1){this.center=A,this.radius=e}set(A,e){return this.center.copy(A),this.radius=e,this}setFromPoints(A,e){const t=this.center;e!==void 0?t.copy(e):Xf.setFromPoints(A).getCenter(t);let i=0;for(let r=0,s=A.length;r<s;r++)i=Math.max(i,t.distanceToSquared(A[r]));return this.radius=Math.sqrt(i),this}copy(A){return this.center.copy(A.center),this.radius=A.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(A){return A.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(A){return A.distanceTo(this.center)-this.radius}intersectsSphere(A){const e=this.radius+A.radius;return A.center.distanceToSquared(this.center)<=e*e}intersectsBox(A){return A.intersectsSphere(this)}intersectsPlane(A){return Math.abs(A.distanceToPoint(this.center))<=this.radius}clampPoint(A,e){const t=this.center.distanceToSquared(A);return e.copy(A),t>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(A){return this.isEmpty()?(A.makeEmpty(),A):(A.set(this.center,this.center),A.expandByScalar(this.radius),A)}applyMatrix4(A){return this.center.applyMatrix4(A),this.radius=this.radius*A.getMaxScaleOnAxis(),this}translate(A){return this.center.add(A),this}expandByPoint(A){if(this.isEmpty())return this.center.copy(A),this.radius=0,this;vi.subVectors(A,this.center);const e=vi.lengthSq();if(e>this.radius*this.radius){const t=Math.sqrt(e),i=(t-this.radius)*.5;this.center.addScaledVector(vi,i/t),this.radius+=i}return this}union(A){return A.isEmpty()?this:this.isEmpty()?(this.copy(A),this):(this.center.equals(A.center)===!0?this.radius=Math.max(this.radius,A.radius):(Zs.subVectors(A.center,this.center).setLength(A.radius),this.expandByPoint(vi.copy(A.center).add(Zs)),this.expandByPoint(vi.copy(A.center).sub(Zs))),this)}equals(A){return A.center.equals(this.center)&&A.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _t=new L,qs=new L,ur=new L,Ht=new L,js=new L,hr=new L,$s=new L;class Yf{constructor(A=new L,e=new L(0,0,-1)){this.origin=A,this.direction=e}set(A,e){return this.origin.copy(A),this.direction.copy(e),this}copy(A){return this.origin.copy(A.origin),this.direction.copy(A.direction),this}at(A,e){return e.copy(this.origin).addScaledVector(this.direction,A)}lookAt(A){return this.direction.copy(A).sub(this.origin).normalize(),this}recast(A){return this.origin.copy(this.at(A,_t)),this}closestPointToPoint(A,e){e.subVectors(A,this.origin);const t=e.dot(this.direction);return t<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,t)}distanceToPoint(A){return Math.sqrt(this.distanceSqToPoint(A))}distanceSqToPoint(A){const e=_t.subVectors(A,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(A):(_t.copy(this.origin).addScaledVector(this.direction,e),_t.distanceToSquared(A))}distanceSqToSegment(A,e,t,i){qs.copy(A).add(e).multiplyScalar(.5),ur.copy(e).sub(A).normalize(),Ht.copy(this.origin).sub(qs);const r=A.distanceTo(e)*.5,s=-this.direction.dot(ur),a=Ht.dot(this.direction),o=-Ht.dot(ur),l=Ht.lengthSq(),c=Math.abs(1-s*s);let u,h,d,g;if(c>0)if(u=s*o-a,h=s*a-o,g=r*c,u>=0)if(h>=-g)if(h<=g){const m=1/c;u*=m,h*=m,d=u*(u+s*h+2*a)+h*(s*u+h+2*o)+l}else h=r,u=Math.max(0,-(s*h+a)),d=-u*u+h*(h+2*o)+l;else h=-r,u=Math.max(0,-(s*h+a)),d=-u*u+h*(h+2*o)+l;else h<=-g?(u=Math.max(0,-(-s*r+a)),h=u>0?-r:Math.min(Math.max(-r,-o),r),d=-u*u+h*(h+2*o)+l):h<=g?(u=0,h=Math.min(Math.max(-r,-o),r),d=h*(h+2*o)+l):(u=Math.max(0,-(s*r+a)),h=u>0?r:Math.min(Math.max(-r,-o),r),d=-u*u+h*(h+2*o)+l);else h=s>0?-r:r,u=Math.max(0,-(s*h+a)),d=-u*u+h*(h+2*o)+l;return t&&t.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(qs).addScaledVector(ur,h),d}intersectSphere(A,e){_t.subVectors(A.center,this.origin);const t=_t.dot(this.direction),i=_t.dot(_t)-t*t,r=A.radius*A.radius;if(i>r)return null;const s=Math.sqrt(r-i),a=t-s,o=t+s;return o<0?null:a<0?this.at(o,e):this.at(a,e)}intersectsSphere(A){return this.distanceSqToPoint(A.center)<=A.radius*A.radius}distanceToPlane(A){const e=A.normal.dot(this.direction);if(e===0)return A.distanceToPoint(this.origin)===0?0:null;const t=-(this.origin.dot(A.normal)+A.constant)/e;return t>=0?t:null}intersectPlane(A,e){const t=this.distanceToPlane(A);return t===null?null:this.at(t,e)}intersectsPlane(A){const e=A.distanceToPoint(this.origin);return e===0||A.normal.dot(this.direction)*e<0}intersectBox(A,e){let t,i,r,s,a,o;const l=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,h=this.origin;return l>=0?(t=(A.min.x-h.x)*l,i=(A.max.x-h.x)*l):(t=(A.max.x-h.x)*l,i=(A.min.x-h.x)*l),c>=0?(r=(A.min.y-h.y)*c,s=(A.max.y-h.y)*c):(r=(A.max.y-h.y)*c,s=(A.min.y-h.y)*c),t>s||r>i||((r>t||isNaN(t))&&(t=r),(s<i||isNaN(i))&&(i=s),u>=0?(a=(A.min.z-h.z)*u,o=(A.max.z-h.z)*u):(a=(A.max.z-h.z)*u,o=(A.min.z-h.z)*u),t>o||a>i)||((a>t||t!==t)&&(t=a),(o<i||i!==i)&&(i=o),i<0)?null:this.at(t>=0?t:i,e)}intersectsBox(A){return this.intersectBox(A,_t)!==null}intersectTriangle(A,e,t,i,r){js.subVectors(e,A),hr.subVectors(t,A),$s.crossVectors(js,hr);let s=this.direction.dot($s),a;if(s>0){if(i)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Ht.subVectors(this.origin,A);const o=a*this.direction.dot(hr.crossVectors(Ht,hr));if(o<0)return null;const l=a*this.direction.dot(js.cross(Ht));if(l<0||o+l>s)return null;const c=-a*Ht.dot($s);return c<0?null:this.at(c/s,r)}applyMatrix4(A){return this.origin.applyMatrix4(A),this.direction.transformDirection(A),this}equals(A){return A.origin.equals(this.origin)&&A.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pe{constructor(){pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(A,e,t,i,r,s,a,o,l,c,u,h,d,g,m,p){const f=this.elements;return f[0]=A,f[4]=e,f[8]=t,f[12]=i,f[1]=r,f[5]=s,f[9]=a,f[13]=o,f[2]=l,f[6]=c,f[10]=u,f[14]=h,f[3]=d,f[7]=g,f[11]=m,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pe().fromArray(this.elements)}copy(A){const e=this.elements,t=A.elements;return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],this}copyPosition(A){const e=this.elements,t=A.elements;return e[12]=t[12],e[13]=t[13],e[14]=t[14],this}setFromMatrix3(A){const e=A.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(A,e,t){return A.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),t.setFromMatrixColumn(this,2),this}makeBasis(A,e,t){return this.set(A.x,e.x,t.x,0,A.y,e.y,t.y,0,A.z,e.z,t.z,0,0,0,0,1),this}extractRotation(A){const e=this.elements,t=A.elements,i=1/In.setFromMatrixColumn(A,0).length(),r=1/In.setFromMatrixColumn(A,1).length(),s=1/In.setFromMatrixColumn(A,2).length();return e[0]=t[0]*i,e[1]=t[1]*i,e[2]=t[2]*i,e[3]=0,e[4]=t[4]*r,e[5]=t[5]*r,e[6]=t[6]*r,e[7]=0,e[8]=t[8]*s,e[9]=t[9]*s,e[10]=t[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(A){const e=this.elements,t=A.x,i=A.y,r=A.z,s=Math.cos(t),a=Math.sin(t),o=Math.cos(i),l=Math.sin(i),c=Math.cos(r),u=Math.sin(r);if(A.order==="XYZ"){const h=s*c,d=s*u,g=a*c,m=a*u;e[0]=o*c,e[4]=-o*u,e[8]=l,e[1]=d+g*l,e[5]=h-m*l,e[9]=-a*o,e[2]=m-h*l,e[6]=g+d*l,e[10]=s*o}else if(A.order==="YXZ"){const h=o*c,d=o*u,g=l*c,m=l*u;e[0]=h+m*a,e[4]=g*a-d,e[8]=s*l,e[1]=s*u,e[5]=s*c,e[9]=-a,e[2]=d*a-g,e[6]=m+h*a,e[10]=s*o}else if(A.order==="ZXY"){const h=o*c,d=o*u,g=l*c,m=l*u;e[0]=h-m*a,e[4]=-s*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=s*c,e[9]=m-h*a,e[2]=-s*l,e[6]=a,e[10]=s*o}else if(A.order==="ZYX"){const h=s*c,d=s*u,g=a*c,m=a*u;e[0]=o*c,e[4]=g*l-d,e[8]=h*l+m,e[1]=o*u,e[5]=m*l+h,e[9]=d*l-g,e[2]=-l,e[6]=a*o,e[10]=s*o}else if(A.order==="YZX"){const h=s*o,d=s*l,g=a*o,m=a*l;e[0]=o*c,e[4]=m-h*u,e[8]=g*u+d,e[1]=u,e[5]=s*c,e[9]=-a*c,e[2]=-l*c,e[6]=d*u+g,e[10]=h-m*u}else if(A.order==="XZY"){const h=s*o,d=s*l,g=a*o,m=a*l;e[0]=o*c,e[4]=-u,e[8]=l*c,e[1]=h*u+m,e[5]=s*c,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*c,e[10]=m*u+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(A){return this.compose(Jf,A,Zf)}lookAt(A,e,t){const i=this.elements;return Pe.subVectors(A,e),Pe.lengthSq()===0&&(Pe.z=1),Pe.normalize(),Dt.crossVectors(t,Pe),Dt.lengthSq()===0&&(Math.abs(t.z)===1?Pe.x+=1e-4:Pe.z+=1e-4,Pe.normalize(),Dt.crossVectors(t,Pe)),Dt.normalize(),fr.crossVectors(Pe,Dt),i[0]=Dt.x,i[4]=fr.x,i[8]=Pe.x,i[1]=Dt.y,i[5]=fr.y,i[9]=Pe.y,i[2]=Dt.z,i[6]=fr.z,i[10]=Pe.z,this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,e){const t=A.elements,i=e.elements,r=this.elements,s=t[0],a=t[4],o=t[8],l=t[12],c=t[1],u=t[5],h=t[9],d=t[13],g=t[2],m=t[6],p=t[10],f=t[14],_=t[3],E=t[7],x=t[11],w=t[15],U=i[0],S=i[4],R=i[8],B=i[12],M=i[1],X=i[5],V=i[9],Q=i[13],D=i[2],N=i[6],q=i[10],K=i[14],W=i[3],$=i[7],j=i[11],pA=i[15];return r[0]=s*U+a*M+o*D+l*W,r[4]=s*S+a*X+o*N+l*$,r[8]=s*R+a*V+o*q+l*j,r[12]=s*B+a*Q+o*K+l*pA,r[1]=c*U+u*M+h*D+d*W,r[5]=c*S+u*X+h*N+d*$,r[9]=c*R+u*V+h*q+d*j,r[13]=c*B+u*Q+h*K+d*pA,r[2]=g*U+m*M+p*D+f*W,r[6]=g*S+m*X+p*N+f*$,r[10]=g*R+m*V+p*q+f*j,r[14]=g*B+m*Q+p*K+f*pA,r[3]=_*U+E*M+x*D+w*W,r[7]=_*S+E*X+x*N+w*$,r[11]=_*R+E*V+x*q+w*j,r[15]=_*B+E*Q+x*K+w*pA,this}multiplyScalar(A){const e=this.elements;return e[0]*=A,e[4]*=A,e[8]*=A,e[12]*=A,e[1]*=A,e[5]*=A,e[9]*=A,e[13]*=A,e[2]*=A,e[6]*=A,e[10]*=A,e[14]*=A,e[3]*=A,e[7]*=A,e[11]*=A,e[15]*=A,this}determinant(){const A=this.elements,e=A[0],t=A[4],i=A[8],r=A[12],s=A[1],a=A[5],o=A[9],l=A[13],c=A[2],u=A[6],h=A[10],d=A[14],g=A[3],m=A[7],p=A[11],f=A[15];return g*(+r*o*u-i*l*u-r*a*h+t*l*h+i*a*d-t*o*d)+m*(+e*o*d-e*l*h+r*s*h-i*s*d+i*l*c-r*o*c)+p*(+e*l*u-e*a*d-r*s*u+t*s*d+r*a*c-t*l*c)+f*(-i*a*c-e*o*u+e*a*h+i*s*u-t*s*h+t*o*c)}transpose(){const A=this.elements;let e;return e=A[1],A[1]=A[4],A[4]=e,e=A[2],A[2]=A[8],A[8]=e,e=A[6],A[6]=A[9],A[9]=e,e=A[3],A[3]=A[12],A[12]=e,e=A[7],A[7]=A[13],A[13]=e,e=A[11],A[11]=A[14],A[14]=e,this}setPosition(A,e,t){const i=this.elements;return A.isVector3?(i[12]=A.x,i[13]=A.y,i[14]=A.z):(i[12]=A,i[13]=e,i[14]=t),this}invert(){const A=this.elements,e=A[0],t=A[1],i=A[2],r=A[3],s=A[4],a=A[5],o=A[6],l=A[7],c=A[8],u=A[9],h=A[10],d=A[11],g=A[12],m=A[13],p=A[14],f=A[15],_=u*p*l-m*h*l+m*o*d-a*p*d-u*o*f+a*h*f,E=g*h*l-c*p*l-g*o*d+s*p*d+c*o*f-s*h*f,x=c*m*l-g*u*l+g*a*d-s*m*d-c*a*f+s*u*f,w=g*u*o-c*m*o-g*a*h+s*m*h+c*a*p-s*u*p,U=e*_+t*E+i*x+r*w;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/U;return A[0]=_*S,A[1]=(m*h*r-u*p*r-m*i*d+t*p*d+u*i*f-t*h*f)*S,A[2]=(a*p*r-m*o*r+m*i*l-t*p*l-a*i*f+t*o*f)*S,A[3]=(u*o*r-a*h*r-u*i*l+t*h*l+a*i*d-t*o*d)*S,A[4]=E*S,A[5]=(c*p*r-g*h*r+g*i*d-e*p*d-c*i*f+e*h*f)*S,A[6]=(g*o*r-s*p*r-g*i*l+e*p*l+s*i*f-e*o*f)*S,A[7]=(s*h*r-c*o*r+c*i*l-e*h*l-s*i*d+e*o*d)*S,A[8]=x*S,A[9]=(g*u*r-c*m*r-g*t*d+e*m*d+c*t*f-e*u*f)*S,A[10]=(s*m*r-g*a*r+g*t*l-e*m*l-s*t*f+e*a*f)*S,A[11]=(c*a*r-s*u*r-c*t*l+e*u*l+s*t*d-e*a*d)*S,A[12]=w*S,A[13]=(c*m*i-g*u*i+g*t*h-e*m*h-c*t*p+e*u*p)*S,A[14]=(g*a*i-s*m*i-g*t*o+e*m*o+s*t*p-e*a*p)*S,A[15]=(s*u*i-c*a*i+c*t*o-e*u*o-s*t*h+e*a*h)*S,this}scale(A){const e=this.elements,t=A.x,i=A.y,r=A.z;return e[0]*=t,e[4]*=i,e[8]*=r,e[1]*=t,e[5]*=i,e[9]*=r,e[2]*=t,e[6]*=i,e[10]*=r,e[3]*=t,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const A=this.elements,e=A[0]*A[0]+A[1]*A[1]+A[2]*A[2],t=A[4]*A[4]+A[5]*A[5]+A[6]*A[6],i=A[8]*A[8]+A[9]*A[9]+A[10]*A[10];return Math.sqrt(Math.max(e,t,i))}makeTranslation(A,e,t){return this.set(1,0,0,A,0,1,0,e,0,0,1,t,0,0,0,1),this}makeRotationX(A){const e=Math.cos(A),t=Math.sin(A);return this.set(1,0,0,0,0,e,-t,0,0,t,e,0,0,0,0,1),this}makeRotationY(A){const e=Math.cos(A),t=Math.sin(A);return this.set(e,0,t,0,0,1,0,0,-t,0,e,0,0,0,0,1),this}makeRotationZ(A){const e=Math.cos(A),t=Math.sin(A);return this.set(e,-t,0,0,t,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(A,e){const t=Math.cos(e),i=Math.sin(e),r=1-t,s=A.x,a=A.y,o=A.z,l=r*s,c=r*a;return this.set(l*s+t,l*a-i*o,l*o+i*a,0,l*a+i*o,c*a+t,c*o-i*s,0,l*o-i*a,c*o+i*s,r*o*o+t,0,0,0,0,1),this}makeScale(A,e,t){return this.set(A,0,0,0,0,e,0,0,0,0,t,0,0,0,0,1),this}makeShear(A,e,t,i,r,s){return this.set(1,t,r,0,A,1,s,0,e,i,1,0,0,0,0,1),this}compose(A,e,t){const i=this.elements,r=e._x,s=e._y,a=e._z,o=e._w,l=r+r,c=s+s,u=a+a,h=r*l,d=r*c,g=r*u,m=s*c,p=s*u,f=a*u,_=o*l,E=o*c,x=o*u,w=t.x,U=t.y,S=t.z;return i[0]=(1-(m+f))*w,i[1]=(d+x)*w,i[2]=(g-E)*w,i[3]=0,i[4]=(d-x)*U,i[5]=(1-(h+f))*U,i[6]=(p+_)*U,i[7]=0,i[8]=(g+E)*S,i[9]=(p-_)*S,i[10]=(1-(h+m))*S,i[11]=0,i[12]=A.x,i[13]=A.y,i[14]=A.z,i[15]=1,this}decompose(A,e,t){const i=this.elements;let r=In.set(i[0],i[1],i[2]).length();const s=In.set(i[4],i[5],i[6]).length(),a=In.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),A.x=i[12],A.y=i[13],A.z=i[14],$e.copy(this);const l=1/r,c=1/s,u=1/a;return $e.elements[0]*=l,$e.elements[1]*=l,$e.elements[2]*=l,$e.elements[4]*=c,$e.elements[5]*=c,$e.elements[6]*=c,$e.elements[8]*=u,$e.elements[9]*=u,$e.elements[10]*=u,e.setFromRotationMatrix($e),t.x=r,t.y=s,t.z=a,this}makePerspective(A,e,t,i,r,s){const a=this.elements,o=2*r/(e-A),l=2*r/(t-i),c=(e+A)/(e-A),u=(t+i)/(t-i),h=-(s+r)/(s-r),d=-2*s*r/(s-r);return a[0]=o,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=l,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(A,e,t,i,r,s){const a=this.elements,o=1/(e-A),l=1/(t-i),c=1/(s-r),u=(e+A)*o,h=(t+i)*l,d=(s+r)*c;return a[0]=2*o,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*c,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(A){const e=this.elements,t=A.elements;for(let i=0;i<16;i++)if(e[i]!==t[i])return!1;return!0}fromArray(A,e=0){for(let t=0;t<16;t++)this.elements[t]=A[t+e];return this}toArray(A=[],e=0){const t=this.elements;return A[e]=t[0],A[e+1]=t[1],A[e+2]=t[2],A[e+3]=t[3],A[e+4]=t[4],A[e+5]=t[5],A[e+6]=t[6],A[e+7]=t[7],A[e+8]=t[8],A[e+9]=t[9],A[e+10]=t[10],A[e+11]=t[11],A[e+12]=t[12],A[e+13]=t[13],A[e+14]=t[14],A[e+15]=t[15],A}}const In=new L,$e=new pe,Jf=new L(0,0,0),Zf=new L(1,1,1),Dt=new L,fr=new L,Pe=new L,dl=new pe,pl=new En;class Bs{constructor(A=0,e=0,t=0,i=Bs.DEFAULT_ORDER){this.isEuler=!0,this._x=A,this._y=e,this._z=t,this._order=i}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get order(){return this._order}set order(A){this._order=A,this._onChangeCallback()}set(A,e,t,i=this._order){return this._x=A,this._y=e,this._z=t,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(A){return this._x=A._x,this._y=A._y,this._z=A._z,this._order=A._order,this._onChangeCallback(),this}setFromRotationMatrix(A,e=this._order,t=!0){const i=A.elements,r=i[0],s=i[4],a=i[8],o=i[1],l=i[5],c=i[9],u=i[2],h=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,d),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-me(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(o,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(o,r));break;case"ZYX":this._y=Math.asin(-me(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(o,r)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-me(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,t===!0&&this._onChangeCallback(),this}setFromQuaternion(A,e,t){return dl.makeRotationFromQuaternion(A),this.setFromRotationMatrix(dl,e,t)}setFromVector3(A,e=this._order){return this.set(A.x,A.y,A.z,e)}reorder(A){return pl.setFromEuler(this),this.setFromQuaternion(pl,A)}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._order===this._order}fromArray(A){return this._x=A[0],this._y=A[1],this._z=A[2],A[3]!==void 0&&(this._order=A[3]),this._onChangeCallback(),this}toArray(A=[],e=0){return A[e]=this._x,A[e+1]=this._y,A[e+2]=this._z,A[e+3]=this._order,A}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bs.DEFAULT_ORDER="XYZ";class hu{constructor(){this.mask=1}set(A){this.mask=(1<<A|0)>>>0}enable(A){this.mask|=1<<A|0}enableAll(){this.mask=-1}toggle(A){this.mask^=1<<A|0}disable(A){this.mask&=~(1<<A|0)}disableAll(){this.mask=0}test(A){return(this.mask&A.mask)!==0}isEnabled(A){return(this.mask&(1<<A|0))!==0}}let qf=0;const gl=new L,Ln=new En,Ct=new pe,dr=new L,_i=new L,jf=new L,$f=new En,ml=new L(1,0,0),Bl=new L(0,1,0),wl=new L(0,0,1),Ad={type:"added"},vl={type:"removed"};class Ve extends Un{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=tr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ve.DEFAULT_UP.clone();const A=new L,e=new Bs,t=new En,i=new L(1,1,1);function r(){t.setFromEuler(e,!1)}function s(){e.setFromQuaternion(t,void 0,!1)}e._onChange(r),t._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:A},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:t},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new pe},normalMatrix:{value:new DA}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=Ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new hu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(A){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(A),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(A){return this.quaternion.premultiply(A),this}setRotationFromAxisAngle(A,e){this.quaternion.setFromAxisAngle(A,e)}setRotationFromEuler(A){this.quaternion.setFromEuler(A,!0)}setRotationFromMatrix(A){this.quaternion.setFromRotationMatrix(A)}setRotationFromQuaternion(A){this.quaternion.copy(A)}rotateOnAxis(A,e){return Ln.setFromAxisAngle(A,e),this.quaternion.multiply(Ln),this}rotateOnWorldAxis(A,e){return Ln.setFromAxisAngle(A,e),this.quaternion.premultiply(Ln),this}rotateX(A){return this.rotateOnAxis(ml,A)}rotateY(A){return this.rotateOnAxis(Bl,A)}rotateZ(A){return this.rotateOnAxis(wl,A)}translateOnAxis(A,e){return gl.copy(A).applyQuaternion(this.quaternion),this.position.add(gl.multiplyScalar(e)),this}translateX(A){return this.translateOnAxis(ml,A)}translateY(A){return this.translateOnAxis(Bl,A)}translateZ(A){return this.translateOnAxis(wl,A)}localToWorld(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(this.matrixWorld)}worldToLocal(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(Ct.copy(this.matrixWorld).invert())}lookAt(A,e,t){A.isVector3?dr.copy(A):dr.set(A,e,t);const i=this.parent;this.updateWorldMatrix(!0,!1),_i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ct.lookAt(_i,dr,this.up):Ct.lookAt(dr,_i,this.up),this.quaternion.setFromRotationMatrix(Ct),i&&(Ct.extractRotation(i.matrixWorld),Ln.setFromRotationMatrix(Ct),this.quaternion.premultiply(Ln.invert()))}add(A){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return A===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",A),this):(A&&A.isObject3D?(A.parent!==null&&A.parent.remove(A),A.parent=this,this.children.push(A),A.dispatchEvent(Ad)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",A),this)}remove(A){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.remove(arguments[t]);return this}const e=this.children.indexOf(A);return e!==-1&&(A.parent=null,this.children.splice(e,1),A.dispatchEvent(vl)),this}removeFromParent(){const A=this.parent;return A!==null&&A.remove(this),this}clear(){for(let A=0;A<this.children.length;A++){const e=this.children[A];e.parent=null,e.dispatchEvent(vl)}return this.children.length=0,this}attach(A){return this.updateWorldMatrix(!0,!1),Ct.copy(this.matrixWorld).invert(),A.parent!==null&&(A.parent.updateWorldMatrix(!0,!1),Ct.multiply(A.parent.matrixWorld)),A.applyMatrix4(Ct),this.add(A),A.updateWorldMatrix(!1,!0),this}getObjectById(A){return this.getObjectByProperty("id",A)}getObjectByName(A){return this.getObjectByProperty("name",A)}getObjectByProperty(A,e){if(this[A]===e)return this;for(let t=0,i=this.children.length;t<i;t++){const s=this.children[t].getObjectByProperty(A,e);if(s!==void 0)return s}}getObjectsByProperty(A,e){let t=[];this[A]===e&&t.push(this);for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectsByProperty(A,e);s.length>0&&(t=t.concat(s))}return t}getWorldPosition(A){return this.updateWorldMatrix(!0,!1),A.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_i,A,jf),A}getWorldScale(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_i,$f,A),A}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return A.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(A){A(this);const e=this.children;for(let t=0,i=e.length;t<i;t++)e[t].traverse(A)}traverseVisible(A){if(this.visible===!1)return;A(this);const e=this.children;for(let t=0,i=e.length;t<i;t++)e[t].traverseVisible(A)}traverseAncestors(A){const e=this.parent;e!==null&&(A(e),e.traverseAncestors(A))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(A){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||A)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,A=!0);const e=this.children;for(let t=0,i=e.length;t<i;t++){const r=e[t];(r.matrixWorldAutoUpdate===!0||A===!0)&&r.updateMatrixWorld(A)}}updateWorldMatrix(A,e){const t=this.parent;if(A===!0&&t!==null&&t.matrixWorldAutoUpdate===!0&&t.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(A){const e=A===void 0||typeof A=="string",t={};e&&(A={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},t.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,o){return a[o.uuid]===void 0&&(a[o.uuid]=o.toJSON(A)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(A).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(A).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(A.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const o=a.shapes;if(Array.isArray(o))for(let l=0,c=o.length;l<c;l++){const u=o[l];r(A.shapes,u)}else r(A.shapes,o)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(A.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let o=0,l=this.material.length;o<l;o++)a.push(r(A.materials,this.material[o]));i.material=a}else i.material=r(A.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(A).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const o=this.animations[a];i.animations.push(r(A.animations,o))}}if(e){const a=s(A.geometries),o=s(A.materials),l=s(A.textures),c=s(A.images),u=s(A.shapes),h=s(A.skeletons),d=s(A.animations),g=s(A.nodes);a.length>0&&(t.geometries=a),o.length>0&&(t.materials=o),l.length>0&&(t.textures=l),c.length>0&&(t.images=c),u.length>0&&(t.shapes=u),h.length>0&&(t.skeletons=h),d.length>0&&(t.animations=d),g.length>0&&(t.nodes=g)}return t.object=i,t;function s(a){const o=[];for(const l in a){const c=a[l];delete c.metadata,o.push(c)}return o}}clone(A){return new this.constructor().copy(this,A)}copy(A,e=!0){if(this.name=A.name,this.up.copy(A.up),this.position.copy(A.position),this.rotation.order=A.rotation.order,this.quaternion.copy(A.quaternion),this.scale.copy(A.scale),this.matrix.copy(A.matrix),this.matrixWorld.copy(A.matrixWorld),this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrixWorldNeedsUpdate=A.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=A.matrixWorldAutoUpdate,this.layers.mask=A.layers.mask,this.visible=A.visible,this.castShadow=A.castShadow,this.receiveShadow=A.receiveShadow,this.frustumCulled=A.frustumCulled,this.renderOrder=A.renderOrder,this.animations=A.animations,this.userData=JSON.parse(JSON.stringify(A.userData)),e===!0)for(let t=0;t<A.children.length;t++){const i=A.children[t];this.add(i.clone())}return this}}Ve.DEFAULT_UP=new L(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const At=new L,Et=new L,Aa=new L,xt=new L,Rn=new L,Hn=new L,_l=new L,ea=new L,ta=new L,na=new L;let pr=!1;class it{constructor(A=new L,e=new L,t=new L){this.a=A,this.b=e,this.c=t}static getNormal(A,e,t,i){i.subVectors(t,e),At.subVectors(A,e),i.cross(At);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(A,e,t,i,r){At.subVectors(i,e),Et.subVectors(t,e),Aa.subVectors(A,e);const s=At.dot(At),a=At.dot(Et),o=At.dot(Aa),l=Et.dot(Et),c=Et.dot(Aa),u=s*l-a*a;if(u===0)return r.set(-2,-1,-1);const h=1/u,d=(l*o-a*c)*h,g=(s*c-a*o)*h;return r.set(1-d-g,g,d)}static containsPoint(A,e,t,i){return this.getBarycoord(A,e,t,i,xt),xt.x>=0&&xt.y>=0&&xt.x+xt.y<=1}static getUV(A,e,t,i,r,s,a,o){return pr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),pr=!0),this.getInterpolation(A,e,t,i,r,s,a,o)}static getInterpolation(A,e,t,i,r,s,a,o){return this.getBarycoord(A,e,t,i,xt),o.setScalar(0),o.addScaledVector(r,xt.x),o.addScaledVector(s,xt.y),o.addScaledVector(a,xt.z),o}static isFrontFacing(A,e,t,i){return At.subVectors(t,e),Et.subVectors(A,e),At.cross(Et).dot(i)<0}set(A,e,t){return this.a.copy(A),this.b.copy(e),this.c.copy(t),this}setFromPointsAndIndices(A,e,t,i){return this.a.copy(A[e]),this.b.copy(A[t]),this.c.copy(A[i]),this}setFromAttributeAndIndices(A,e,t,i){return this.a.fromBufferAttribute(A,e),this.b.fromBufferAttribute(A,t),this.c.fromBufferAttribute(A,i),this}clone(){return new this.constructor().copy(this)}copy(A){return this.a.copy(A.a),this.b.copy(A.b),this.c.copy(A.c),this}getArea(){return At.subVectors(this.c,this.b),Et.subVectors(this.a,this.b),At.cross(Et).length()*.5}getMidpoint(A){return A.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(A){return it.getNormal(this.a,this.b,this.c,A)}getPlane(A){return A.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(A,e){return it.getBarycoord(A,this.a,this.b,this.c,e)}getUV(A,e,t,i,r){return pr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),pr=!0),it.getInterpolation(A,this.a,this.b,this.c,e,t,i,r)}getInterpolation(A,e,t,i,r){return it.getInterpolation(A,this.a,this.b,this.c,e,t,i,r)}containsPoint(A){return it.containsPoint(A,this.a,this.b,this.c)}isFrontFacing(A){return it.isFrontFacing(this.a,this.b,this.c,A)}intersectsBox(A){return A.intersectsTriangle(this)}closestPointToPoint(A,e){const t=this.a,i=this.b,r=this.c;let s,a;Rn.subVectors(i,t),Hn.subVectors(r,t),ea.subVectors(A,t);const o=Rn.dot(ea),l=Hn.dot(ea);if(o<=0&&l<=0)return e.copy(t);ta.subVectors(A,i);const c=Rn.dot(ta),u=Hn.dot(ta);if(c>=0&&u<=c)return e.copy(i);const h=o*u-c*l;if(h<=0&&o>=0&&c<=0)return s=o/(o-c),e.copy(t).addScaledVector(Rn,s);na.subVectors(A,r);const d=Rn.dot(na),g=Hn.dot(na);if(g>=0&&d<=g)return e.copy(r);const m=d*l-o*g;if(m<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(t).addScaledVector(Hn,a);const p=c*g-d*u;if(p<=0&&u-c>=0&&d-g>=0)return _l.subVectors(r,i),a=(u-c)/(u-c+(d-g)),e.copy(i).addScaledVector(_l,a);const f=1/(p+m+h);return s=m*f,a=h*f,e.copy(t).addScaledVector(Rn,s).addScaledVector(Hn,a)}equals(A){return A.a.equals(this.a)&&A.b.equals(this.b)&&A.c.equals(this.c)}}let ed=0;class ws extends Un{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=tr(),this.name="",this.type="Material",this.blending=ni,this.side=Yt,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=eu,this.blendDst=tu,this.blendEquation=qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ra,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vs,this.stencilZFail=Vs,this.stencilZPass=Vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(A){this._alphaTest>0!=A>0&&this.version++,this._alphaTest=A}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(A){if(A!==void 0)for(const e in A){const t=A[e];if(t===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(t):i&&i.isVector3&&t&&t.isVector3?i.copy(t):this[e]=t}}toJSON(A){const e=A===void 0||typeof A=="string";e&&(A={textures:{},images:{}});const t={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.color&&this.color.isColor&&(t.color=this.color.getHex()),this.roughness!==void 0&&(t.roughness=this.roughness),this.metalness!==void 0&&(t.metalness=this.metalness),this.sheen!==void 0&&(t.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(t.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(t.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(t.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(t.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(t.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(t.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(t.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(t.shininess=this.shininess),this.clearcoat!==void 0&&(t.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(t.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(t.clearcoatMap=this.clearcoatMap.toJSON(A).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(t.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(A).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(t.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(A).uuid,t.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(t.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(t.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(t.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(t.iridescenceMap=this.iridescenceMap.toJSON(A).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(t.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(A).uuid),this.map&&this.map.isTexture&&(t.map=this.map.toJSON(A).uuid),this.matcap&&this.matcap.isTexture&&(t.matcap=this.matcap.toJSON(A).uuid),this.alphaMap&&this.alphaMap.isTexture&&(t.alphaMap=this.alphaMap.toJSON(A).uuid),this.lightMap&&this.lightMap.isTexture&&(t.lightMap=this.lightMap.toJSON(A).uuid,t.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(t.aoMap=this.aoMap.toJSON(A).uuid,t.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(t.bumpMap=this.bumpMap.toJSON(A).uuid,t.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(t.normalMap=this.normalMap.toJSON(A).uuid,t.normalMapType=this.normalMapType,t.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(t.displacementMap=this.displacementMap.toJSON(A).uuid,t.displacementScale=this.displacementScale,t.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(t.roughnessMap=this.roughnessMap.toJSON(A).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(t.metalnessMap=this.metalnessMap.toJSON(A).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(t.emissiveMap=this.emissiveMap.toJSON(A).uuid),this.specularMap&&this.specularMap.isTexture&&(t.specularMap=this.specularMap.toJSON(A).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(t.specularIntensityMap=this.specularIntensityMap.toJSON(A).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(t.specularColorMap=this.specularColorMap.toJSON(A).uuid),this.envMap&&this.envMap.isTexture&&(t.envMap=this.envMap.toJSON(A).uuid,this.combine!==void 0&&(t.combine=this.combine)),this.envMapIntensity!==void 0&&(t.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(t.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(t.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(t.gradientMap=this.gradientMap.toJSON(A).uuid),this.transmission!==void 0&&(t.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(t.transmissionMap=this.transmissionMap.toJSON(A).uuid),this.thickness!==void 0&&(t.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(t.thicknessMap=this.thicknessMap.toJSON(A).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(t.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(t.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(t.size=this.size),this.shadowSide!==null&&(t.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(t.sizeAttenuation=this.sizeAttenuation),this.blending!==ni&&(t.blending=this.blending),this.side!==Yt&&(t.side=this.side),this.vertexColors&&(t.vertexColors=!0),this.opacity<1&&(t.opacity=this.opacity),this.transparent===!0&&(t.transparent=this.transparent),t.depthFunc=this.depthFunc,t.depthTest=this.depthTest,t.depthWrite=this.depthWrite,t.colorWrite=this.colorWrite,t.stencilWrite=this.stencilWrite,t.stencilWriteMask=this.stencilWriteMask,t.stencilFunc=this.stencilFunc,t.stencilRef=this.stencilRef,t.stencilFuncMask=this.stencilFuncMask,t.stencilFail=this.stencilFail,t.stencilZFail=this.stencilZFail,t.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(t.rotation=this.rotation),this.polygonOffset===!0&&(t.polygonOffset=!0),this.polygonOffsetFactor!==0&&(t.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(t.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(t.linewidth=this.linewidth),this.dashSize!==void 0&&(t.dashSize=this.dashSize),this.gapSize!==void 0&&(t.gapSize=this.gapSize),this.scale!==void 0&&(t.scale=this.scale),this.dithering===!0&&(t.dithering=!0),this.alphaTest>0&&(t.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(t.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(t.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(t.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(t.wireframe=this.wireframe),this.wireframeLinewidth>1&&(t.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(t.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(t.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(t.flatShading=this.flatShading),this.visible===!1&&(t.visible=!1),this.toneMapped===!1&&(t.toneMapped=!1),this.fog===!1&&(t.fog=!1),Object.keys(this.userData).length>0&&(t.userData=this.userData);function i(r){const s=[];for(const a in r){const o=r[a];delete o.metadata,s.push(o)}return s}if(e){const r=i(A.textures),s=i(A.images);r.length>0&&(t.textures=r),s.length>0&&(t.images=s)}return t}clone(){return new this.constructor().copy(this)}copy(A){this.name=A.name,this.blending=A.blending,this.side=A.side,this.vertexColors=A.vertexColors,this.opacity=A.opacity,this.transparent=A.transparent,this.blendSrc=A.blendSrc,this.blendDst=A.blendDst,this.blendEquation=A.blendEquation,this.blendSrcAlpha=A.blendSrcAlpha,this.blendDstAlpha=A.blendDstAlpha,this.blendEquationAlpha=A.blendEquationAlpha,this.depthFunc=A.depthFunc,this.depthTest=A.depthTest,this.depthWrite=A.depthWrite,this.stencilWriteMask=A.stencilWriteMask,this.stencilFunc=A.stencilFunc,this.stencilRef=A.stencilRef,this.stencilFuncMask=A.stencilFuncMask,this.stencilFail=A.stencilFail,this.stencilZFail=A.stencilZFail,this.stencilZPass=A.stencilZPass,this.stencilWrite=A.stencilWrite;const e=A.clippingPlanes;let t=null;if(e!==null){const i=e.length;t=new Array(i);for(let r=0;r!==i;++r)t[r]=e[r].clone()}return this.clippingPlanes=t,this.clipIntersection=A.clipIntersection,this.clipShadows=A.clipShadows,this.shadowSide=A.shadowSide,this.colorWrite=A.colorWrite,this.precision=A.precision,this.polygonOffset=A.polygonOffset,this.polygonOffsetFactor=A.polygonOffsetFactor,this.polygonOffsetUnits=A.polygonOffsetUnits,this.dithering=A.dithering,this.alphaTest=A.alphaTest,this.alphaToCoverage=A.alphaToCoverage,this.premultipliedAlpha=A.premultipliedAlpha,this.forceSinglePass=A.forceSinglePass,this.visible=A.visible,this.toneMapped=A.toneMapped,this.userData=JSON.parse(JSON.stringify(A.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(A){A===!0&&this.version++}}const fu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},et={h:0,s:0,l:0},gr={h:0,s:0,l:0};function ia(n,A,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(A-n)*6*e:e<1/2?A:e<2/3?n+(A-n)*6*(2/3-e):n}class KA{constructor(A,e,t){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&t===void 0?this.set(A):this.setRGB(A,e,t)}set(A){return A&&A.isColor?this.copy(A):typeof A=="number"?this.setHex(A):typeof A=="string"&&this.setStyle(A),this}setScalar(A){return this.r=A,this.g=A,this.b=A,this}setHex(A,e=MA){return A=Math.floor(A),this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(A&255)/255,je.toWorkingColorSpace(this,e),this}setRGB(A,e,t,i=je.workingColorSpace){return this.r=A,this.g=e,this.b=t,je.toWorkingColorSpace(this,i),this}setHSL(A,e,t,i=je.workingColorSpace){if(A=Df(A,1),e=me(e,0,1),t=me(t,0,1),e===0)this.r=this.g=this.b=t;else{const r=t<=.5?t*(1+e):t+e-t*e,s=2*t-r;this.r=ia(s,r,A+1/3),this.g=ia(s,r,A),this.b=ia(s,r,A-1/3)}return je.toWorkingColorSpace(this,i),this}setStyle(A,e=MA){function t(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+A+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(A)){let r;const s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return t(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return t(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return t(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+A)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(A)){const r=i[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(s===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+A)}else if(A&&A.length>0)return this.setColorName(A,e);return this}setColorName(A,e=MA){const t=fu[A.toLowerCase()];return t!==void 0?this.setHex(t,e):console.warn("THREE.Color: Unknown color "+A),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(A){return this.r=A.r,this.g=A.g,this.b=A.b,this}copySRGBToLinear(A){return this.r=ri(A.r),this.g=ri(A.g),this.b=ri(A.b),this}copyLinearToSRGB(A){return this.r=Ws(A.r),this.g=Ws(A.g),this.b=Ws(A.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(A=MA){return je.fromWorkingColorSpace(xe.copy(this),A),Math.round(me(xe.r*255,0,255))*65536+Math.round(me(xe.g*255,0,255))*256+Math.round(me(xe.b*255,0,255))}getHexString(A=MA){return("000000"+this.getHex(A).toString(16)).slice(-6)}getHSL(A,e=je.workingColorSpace){je.fromWorkingColorSpace(xe.copy(this),e);const t=xe.r,i=xe.g,r=xe.b,s=Math.max(t,i,r),a=Math.min(t,i,r);let o,l;const c=(a+s)/2;if(a===s)o=0,l=0;else{const u=s-a;switch(l=c<=.5?u/(s+a):u/(2-s-a),s){case t:o=(i-r)/u+(i<r?6:0);break;case i:o=(r-t)/u+2;break;case r:o=(t-i)/u+4;break}o/=6}return A.h=o,A.s=l,A.l=c,A}getRGB(A,e=je.workingColorSpace){return je.fromWorkingColorSpace(xe.copy(this),e),A.r=xe.r,A.g=xe.g,A.b=xe.b,A}getStyle(A=MA){je.fromWorkingColorSpace(xe.copy(this),A);const e=xe.r,t=xe.g,i=xe.b;return A!==MA?`color(${A} ${e.toFixed(3)} ${t.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(t*255)},${Math.round(i*255)})`}offsetHSL(A,e,t){return this.getHSL(et),et.h+=A,et.s+=e,et.l+=t,this.setHSL(et.h,et.s,et.l),this}add(A){return this.r+=A.r,this.g+=A.g,this.b+=A.b,this}addColors(A,e){return this.r=A.r+e.r,this.g=A.g+e.g,this.b=A.b+e.b,this}addScalar(A){return this.r+=A,this.g+=A,this.b+=A,this}sub(A){return this.r=Math.max(0,this.r-A.r),this.g=Math.max(0,this.g-A.g),this.b=Math.max(0,this.b-A.b),this}multiply(A){return this.r*=A.r,this.g*=A.g,this.b*=A.b,this}multiplyScalar(A){return this.r*=A,this.g*=A,this.b*=A,this}lerp(A,e){return this.r+=(A.r-this.r)*e,this.g+=(A.g-this.g)*e,this.b+=(A.b-this.b)*e,this}lerpColors(A,e,t){return this.r=A.r+(e.r-A.r)*t,this.g=A.g+(e.g-A.g)*t,this.b=A.b+(e.b-A.b)*t,this}lerpHSL(A,e){this.getHSL(et),A.getHSL(gr);const t=ks(et.h,gr.h,e),i=ks(et.s,gr.s,e),r=ks(et.l,gr.l,e);return this.setHSL(t,i,r),this}setFromVector3(A){return this.r=A.x,this.g=A.y,this.b=A.z,this}applyMatrix3(A){const e=this.r,t=this.g,i=this.b,r=A.elements;return this.r=r[0]*e+r[3]*t+r[6]*i,this.g=r[1]*e+r[4]*t+r[7]*i,this.b=r[2]*e+r[5]*t+r[8]*i,this}equals(A){return A.r===this.r&&A.g===this.g&&A.b===this.b}fromArray(A,e=0){return this.r=A[e],this.g=A[e+1],this.b=A[e+2],this}toArray(A=[],e=0){return A[e]=this.r,A[e+1]=this.g,A[e+2]=this.b,A}fromBufferAttribute(A,e){return this.r=A.getX(e),this.g=A.getY(e),this.b=A.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xe=new KA;KA.NAMES=fu;class mo extends ws{constructor(A){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new KA(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=nu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.fog=A.fog,this}}const ae=new L,mr=new LA;class ot{constructor(A,e,t=!1){if(Array.isArray(A))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=A,this.itemSize=e,this.count=A!==void 0?A.length/e:0,this.normalized=t,this.usage=ll,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}setUsage(A){return this.usage=A,this}copy(A){return this.name=A.name,this.array=new A.array.constructor(A.array),this.itemSize=A.itemSize,this.count=A.count,this.normalized=A.normalized,this.usage=A.usage,this}copyAt(A,e,t){A*=this.itemSize,t*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[A+i]=e.array[t+i];return this}copyArray(A){return this.array.set(A),this}applyMatrix3(A){if(this.itemSize===2)for(let e=0,t=this.count;e<t;e++)mr.fromBufferAttribute(this,e),mr.applyMatrix3(A),this.setXY(e,mr.x,mr.y);else if(this.itemSize===3)for(let e=0,t=this.count;e<t;e++)ae.fromBufferAttribute(this,e),ae.applyMatrix3(A),this.setXYZ(e,ae.x,ae.y,ae.z);return this}applyMatrix4(A){for(let e=0,t=this.count;e<t;e++)ae.fromBufferAttribute(this,e),ae.applyMatrix4(A),this.setXYZ(e,ae.x,ae.y,ae.z);return this}applyNormalMatrix(A){for(let e=0,t=this.count;e<t;e++)ae.fromBufferAttribute(this,e),ae.applyNormalMatrix(A),this.setXYZ(e,ae.x,ae.y,ae.z);return this}transformDirection(A){for(let e=0,t=this.count;e<t;e++)ae.fromBufferAttribute(this,e),ae.transformDirection(A),this.setXYZ(e,ae.x,ae.y,ae.z);return this}set(A,e=0){return this.array.set(A,e),this}getX(A){let e=this.array[A*this.itemSize];return this.normalized&&(e=or(e,this.array)),e}setX(A,e){return this.normalized&&(e=De(e,this.array)),this.array[A*this.itemSize]=e,this}getY(A){let e=this.array[A*this.itemSize+1];return this.normalized&&(e=or(e,this.array)),e}setY(A,e){return this.normalized&&(e=De(e,this.array)),this.array[A*this.itemSize+1]=e,this}getZ(A){let e=this.array[A*this.itemSize+2];return this.normalized&&(e=or(e,this.array)),e}setZ(A,e){return this.normalized&&(e=De(e,this.array)),this.array[A*this.itemSize+2]=e,this}getW(A){let e=this.array[A*this.itemSize+3];return this.normalized&&(e=or(e,this.array)),e}setW(A,e){return this.normalized&&(e=De(e,this.array)),this.array[A*this.itemSize+3]=e,this}setXY(A,e,t){return A*=this.itemSize,this.normalized&&(e=De(e,this.array),t=De(t,this.array)),this.array[A+0]=e,this.array[A+1]=t,this}setXYZ(A,e,t,i){return A*=this.itemSize,this.normalized&&(e=De(e,this.array),t=De(t,this.array),i=De(i,this.array)),this.array[A+0]=e,this.array[A+1]=t,this.array[A+2]=i,this}setXYZW(A,e,t,i,r){return A*=this.itemSize,this.normalized&&(e=De(e,this.array),t=De(t,this.array),i=De(i,this.array),r=De(r,this.array)),this.array[A+0]=e,this.array[A+1]=t,this.array[A+2]=i,this.array[A+3]=r,this}onUpload(A){return this.onUploadCallback=A,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const A={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(A.name=this.name),this.usage!==ll&&(A.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(A.updateRange=this.updateRange),A}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class du extends ot{constructor(A,e,t){super(new Uint16Array(A),e,t)}}class pu extends ot{constructor(A,e,t){super(new Uint32Array(A),e,t)}}class at extends ot{constructor(A,e,t){super(new Float32Array(A),e,t)}}let td=0;const ke=new pe,ra=new Ve,Dn=new L,Oe=new nr,Ci=new nr,fe=new L;class Zt extends Un{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=tr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(A){return Array.isArray(A)?this.index=new(ou(A)?pu:du)(A,1):this.index=A,this}getAttribute(A){return this.attributes[A]}setAttribute(A,e){return this.attributes[A]=e,this}deleteAttribute(A){return delete this.attributes[A],this}hasAttribute(A){return this.attributes[A]!==void 0}addGroup(A,e,t=0){this.groups.push({start:A,count:e,materialIndex:t})}clearGroups(){this.groups=[]}setDrawRange(A,e){this.drawRange.start=A,this.drawRange.count=e}applyMatrix4(A){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(A),e.needsUpdate=!0);const t=this.attributes.normal;if(t!==void 0){const r=new DA().getNormalMatrix(A);t.applyNormalMatrix(r),t.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(A),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(A){return ke.makeRotationFromQuaternion(A),this.applyMatrix4(ke),this}rotateX(A){return ke.makeRotationX(A),this.applyMatrix4(ke),this}rotateY(A){return ke.makeRotationY(A),this.applyMatrix4(ke),this}rotateZ(A){return ke.makeRotationZ(A),this.applyMatrix4(ke),this}translate(A,e,t){return ke.makeTranslation(A,e,t),this.applyMatrix4(ke),this}scale(A,e,t){return ke.makeScale(A,e,t),this.applyMatrix4(ke),this}lookAt(A){return ra.lookAt(A),ra.updateMatrix(),this.applyMatrix4(ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dn).negate(),this.translate(Dn.x,Dn.y,Dn.z),this}setFromPoints(A){const e=[];for(let t=0,i=A.length;t<i;t++){const r=A[t];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new at(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nr);const A=this.attributes.position,e=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(A!==void 0){if(this.boundingBox.setFromBufferAttribute(A),e)for(let t=0,i=e.length;t<i;t++){const r=e[t];Oe.setFromBufferAttribute(r),this.morphTargetsRelative?(fe.addVectors(this.boundingBox.min,Oe.min),this.boundingBox.expandByPoint(fe),fe.addVectors(this.boundingBox.max,Oe.max),this.boundingBox.expandByPoint(fe)):(this.boundingBox.expandByPoint(Oe.min),this.boundingBox.expandByPoint(Oe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new go);const A=this.attributes.position,e=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(A){const t=this.boundingSphere.center;if(Oe.setFromBufferAttribute(A),e)for(let r=0,s=e.length;r<s;r++){const a=e[r];Ci.setFromBufferAttribute(a),this.morphTargetsRelative?(fe.addVectors(Oe.min,Ci.min),Oe.expandByPoint(fe),fe.addVectors(Oe.max,Ci.max),Oe.expandByPoint(fe)):(Oe.expandByPoint(Ci.min),Oe.expandByPoint(Ci.max))}Oe.getCenter(t);let i=0;for(let r=0,s=A.count;r<s;r++)fe.fromBufferAttribute(A,r),i=Math.max(i,t.distanceToSquared(fe));if(e)for(let r=0,s=e.length;r<s;r++){const a=e[r],o=this.morphTargetsRelative;for(let l=0,c=a.count;l<c;l++)fe.fromBufferAttribute(a,l),o&&(Dn.fromBufferAttribute(A,l),fe.add(Dn)),i=Math.max(i,t.distanceToSquared(fe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const A=this.index,e=this.attributes;if(A===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const t=A.array,i=e.position.array,r=e.normal.array,s=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ot(new Float32Array(4*a),4));const o=this.getAttribute("tangent").array,l=[],c=[];for(let M=0;M<a;M++)l[M]=new L,c[M]=new L;const u=new L,h=new L,d=new L,g=new LA,m=new LA,p=new LA,f=new L,_=new L;function E(M,X,V){u.fromArray(i,M*3),h.fromArray(i,X*3),d.fromArray(i,V*3),g.fromArray(s,M*2),m.fromArray(s,X*2),p.fromArray(s,V*2),h.sub(u),d.sub(u),m.sub(g),p.sub(g);const Q=1/(m.x*p.y-p.x*m.y);isFinite(Q)&&(f.copy(h).multiplyScalar(p.y).addScaledVector(d,-m.y).multiplyScalar(Q),_.copy(d).multiplyScalar(m.x).addScaledVector(h,-p.x).multiplyScalar(Q),l[M].add(f),l[X].add(f),l[V].add(f),c[M].add(_),c[X].add(_),c[V].add(_))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.length}]);for(let M=0,X=x.length;M<X;++M){const V=x[M],Q=V.start,D=V.count;for(let N=Q,q=Q+D;N<q;N+=3)E(t[N+0],t[N+1],t[N+2])}const w=new L,U=new L,S=new L,R=new L;function B(M){S.fromArray(r,M*3),R.copy(S);const X=l[M];w.copy(X),w.sub(S.multiplyScalar(S.dot(X))).normalize(),U.crossVectors(R,X);const Q=U.dot(c[M])<0?-1:1;o[M*4]=w.x,o[M*4+1]=w.y,o[M*4+2]=w.z,o[M*4+3]=Q}for(let M=0,X=x.length;M<X;++M){const V=x[M],Q=V.start,D=V.count;for(let N=Q,q=Q+D;N<q;N+=3)B(t[N+0]),B(t[N+1]),B(t[N+2])}}computeVertexNormals(){const A=this.index,e=this.getAttribute("position");if(e!==void 0){let t=this.getAttribute("normal");if(t===void 0)t=new ot(new Float32Array(e.count*3),3),this.setAttribute("normal",t);else for(let h=0,d=t.count;h<d;h++)t.setXYZ(h,0,0,0);const i=new L,r=new L,s=new L,a=new L,o=new L,l=new L,c=new L,u=new L;if(A)for(let h=0,d=A.count;h<d;h+=3){const g=A.getX(h+0),m=A.getX(h+1),p=A.getX(h+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,m),s.fromBufferAttribute(e,p),c.subVectors(s,r),u.subVectors(i,r),c.cross(u),a.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),l.fromBufferAttribute(t,p),a.add(c),o.add(c),l.add(c),t.setXYZ(g,a.x,a.y,a.z),t.setXYZ(m,o.x,o.y,o.z),t.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,d=e.count;h<d;h+=3)i.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),s.fromBufferAttribute(e,h+2),c.subVectors(s,r),u.subVectors(i,r),c.cross(u),t.setXYZ(h+0,c.x,c.y,c.z),t.setXYZ(h+1,c.x,c.y,c.z),t.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),t.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const A=this.attributes.normal;for(let e=0,t=A.count;e<t;e++)fe.fromBufferAttribute(A,e),fe.normalize(),A.setXYZ(e,fe.x,fe.y,fe.z)}toNonIndexed(){function A(a,o){const l=a.array,c=a.itemSize,u=a.normalized,h=new l.constructor(o.length*c);let d=0,g=0;for(let m=0,p=o.length;m<p;m++){a.isInterleavedBufferAttribute?d=o[m]*a.data.stride+a.offset:d=o[m]*c;for(let f=0;f<c;f++)h[g++]=l[d++]}return new ot(h,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Zt,t=this.index.array,i=this.attributes;for(const a in i){const o=i[a],l=A(o,t);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const o=[],l=r[a];for(let c=0,u=l.length;c<u;c++){const h=l[c],d=A(h,t);o.push(d)}e.morphAttributes[a]=o}e.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,o=s.length;a<o;a++){const l=s[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const A={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),Object.keys(this.userData).length>0&&(A.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const l in o)o[l]!==void 0&&(A[l]=o[l]);return A}A.data={attributes:{}};const e=this.index;e!==null&&(A.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const t=this.attributes;for(const o in t){const l=t[o];A.data.attributes[o]=l.toJSON(A.data)}const i={};let r=!1;for(const o in this.morphAttributes){const l=this.morphAttributes[o],c=[];for(let u=0,h=l.length;u<h;u++){const d=l[u];c.push(d.toJSON(A.data))}c.length>0&&(i[o]=c,r=!0)}r&&(A.data.morphAttributes=i,A.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(A.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(A.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),A}clone(){return new this.constructor().copy(this)}copy(A){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=A.name;const t=A.index;t!==null&&this.setIndex(t.clone(e));const i=A.attributes;for(const l in i){const c=i[l];this.setAttribute(l,c.clone(e))}const r=A.morphAttributes;for(const l in r){const c=[],u=r[l];for(let h=0,d=u.length;h<d;h++)c.push(u[h].clone(e));this.morphAttributes[l]=c}this.morphTargetsRelative=A.morphTargetsRelative;const s=A.groups;for(let l=0,c=s.length;l<c;l++){const u=s[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=A.boundingBox;a!==null&&(this.boundingBox=a.clone());const o=A.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=A.drawRange.start,this.drawRange.count=A.drawRange.count,this.userData=A.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cl=new pe,ut=new Yf,Br=new go,El=new L,Pn=new L,On=new L,Nn=new L,sa=new L,wr=new L,vr=new LA,_r=new LA,Cr=new LA,xl=new L,Ul=new L,Fl=new L,Er=new L,xr=new L;class St extends Ve{constructor(A=new Zt,e=new mo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=A,this.material=e,this.updateMorphTargets()}copy(A,e){return super.copy(A,e),A.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=A.morphTargetInfluences.slice()),A.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},A.morphTargetDictionary)),this.material=A.material,this.geometry=A.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(A,e){const t=this.geometry,i=t.attributes.position,r=t.morphAttributes.position,s=t.morphTargetsRelative;e.fromBufferAttribute(i,A);const a=this.morphTargetInfluences;if(r&&a){wr.set(0,0,0);for(let o=0,l=r.length;o<l;o++){const c=a[o],u=r[o];c!==0&&(sa.fromBufferAttribute(u,A),s?wr.addScaledVector(sa,c):wr.addScaledVector(sa.sub(e),c))}e.add(wr)}return e}raycast(A,e){const t=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(t.boundingSphere===null&&t.computeBoundingSphere(),Br.copy(t.boundingSphere),Br.applyMatrix4(r),ut.copy(A.ray).recast(A.near),!(Br.containsPoint(ut.origin)===!1&&(ut.intersectSphere(Br,El)===null||ut.origin.distanceToSquared(El)>(A.far-A.near)**2))&&(Cl.copy(r).invert(),ut.copy(A.ray).applyMatrix4(Cl),!(t.boundingBox!==null&&ut.intersectsBox(t.boundingBox)===!1)&&this._computeIntersections(A,e)))}_computeIntersections(A,e){let t;const i=this.geometry,r=this.material,s=i.index,a=i.attributes.position,o=i.attributes.uv,l=i.attributes.uv1,c=i.attributes.normal,u=i.groups,h=i.drawRange;if(s!==null)if(Array.isArray(r))for(let d=0,g=u.length;d<g;d++){const m=u[d],p=r[m.materialIndex],f=Math.max(m.start,h.start),_=Math.min(s.count,Math.min(m.start+m.count,h.start+h.count));for(let E=f,x=_;E<x;E+=3){const w=s.getX(E),U=s.getX(E+1),S=s.getX(E+2);t=Ur(this,p,A,ut,o,l,c,w,U,S),t&&(t.faceIndex=Math.floor(E/3),t.face.materialIndex=m.materialIndex,e.push(t))}}else{const d=Math.max(0,h.start),g=Math.min(s.count,h.start+h.count);for(let m=d,p=g;m<p;m+=3){const f=s.getX(m),_=s.getX(m+1),E=s.getX(m+2);t=Ur(this,r,A,ut,o,l,c,f,_,E),t&&(t.faceIndex=Math.floor(m/3),e.push(t))}}else if(a!==void 0)if(Array.isArray(r))for(let d=0,g=u.length;d<g;d++){const m=u[d],p=r[m.materialIndex],f=Math.max(m.start,h.start),_=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let E=f,x=_;E<x;E+=3){const w=E,U=E+1,S=E+2;t=Ur(this,p,A,ut,o,l,c,w,U,S),t&&(t.faceIndex=Math.floor(E/3),t.face.materialIndex=m.materialIndex,e.push(t))}}else{const d=Math.max(0,h.start),g=Math.min(a.count,h.start+h.count);for(let m=d,p=g;m<p;m+=3){const f=m,_=m+1,E=m+2;t=Ur(this,r,A,ut,o,l,c,f,_,E),t&&(t.faceIndex=Math.floor(m/3),e.push(t))}}}}function nd(n,A,e,t,i,r,s,a){let o;if(A.side===Re?o=t.intersectTriangle(s,r,i,!0,a):o=t.intersectTriangle(i,r,s,A.side===Yt,a),o===null)return null;xr.copy(a),xr.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(xr);return l<e.near||l>e.far?null:{distance:l,point:xr.clone(),object:n}}function Ur(n,A,e,t,i,r,s,a,o,l){n.getVertexPosition(a,Pn),n.getVertexPosition(o,On),n.getVertexPosition(l,Nn);const c=nd(n,A,e,t,Pn,On,Nn,Er);if(c){i&&(vr.fromBufferAttribute(i,a),_r.fromBufferAttribute(i,o),Cr.fromBufferAttribute(i,l),c.uv=it.getInterpolation(Er,Pn,On,Nn,vr,_r,Cr,new LA)),r&&(vr.fromBufferAttribute(r,a),_r.fromBufferAttribute(r,o),Cr.fromBufferAttribute(r,l),c.uv1=it.getInterpolation(Er,Pn,On,Nn,vr,_r,Cr,new LA),c.uv2=c.uv1),s&&(xl.fromBufferAttribute(s,a),Ul.fromBufferAttribute(s,o),Fl.fromBufferAttribute(s,l),c.normal=it.getInterpolation(Er,Pn,On,Nn,xl,Ul,Fl,new L),c.normal.dot(t.direction)>0&&c.normal.multiplyScalar(-1));const u={a,b:o,c:l,normal:new L,materialIndex:0};it.getNormal(Pn,On,Nn,u.normal),c.face=u}return c}class ir extends Zt{constructor(A=1,e=1,t=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:A,height:e,depth:t,widthSegments:i,heightSegments:r,depthSegments:s};const a=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);const o=[],l=[],c=[],u=[];let h=0,d=0;g("z","y","x",-1,-1,t,e,A,s,r,0),g("z","y","x",1,-1,t,e,-A,s,r,1),g("x","z","y",1,1,A,t,e,i,s,2),g("x","z","y",1,-1,A,t,-e,i,s,3),g("x","y","z",1,-1,A,e,t,i,r,4),g("x","y","z",-1,-1,A,e,-t,i,r,5),this.setIndex(o),this.setAttribute("position",new at(l,3)),this.setAttribute("normal",new at(c,3)),this.setAttribute("uv",new at(u,2));function g(m,p,f,_,E,x,w,U,S,R,B){const M=x/S,X=w/R,V=x/2,Q=w/2,D=U/2,N=S+1,q=R+1;let K=0,W=0;const $=new L;for(let j=0;j<q;j++){const pA=j*X-Q;for(let nA=0;nA<N;nA++){const O=nA*M-V;$[m]=O*_,$[p]=pA*E,$[f]=D,l.push($.x,$.y,$.z),$[m]=0,$[p]=0,$[f]=U>0?1:-1,c.push($.x,$.y,$.z),u.push(nA/S),u.push(1-j/R),K+=1}}for(let j=0;j<R;j++)for(let pA=0;pA<S;pA++){const nA=h+pA+N*j,O=h+pA+N*(j+1),J=h+(pA+1)+N*(j+1),iA=h+(pA+1)+N*j;o.push(nA,O,iA),o.push(O,J,iA),W+=6}a.addGroup(d,W,B),d+=W,h+=K}}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new ir(A.width,A.height,A.depth,A.widthSegments,A.heightSegments,A.depthSegments)}}function di(n){const A={};for(const e in n){A[e]={};for(const t in n[e]){const i=n[e][t];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),A[e][t]=null):A[e][t]=i.clone():Array.isArray(i)?A[e][t]=i.slice():A[e][t]=i}}return A}function Se(n){const A={};for(let e=0;e<n.length;e++){const t=di(n[e]);for(const i in t)A[i]=t[i]}return A}function id(n){const A=[];for(let e=0;e<n.length;e++)A.push(n[e].clone());return A}function gu(n){return n.getRenderTarget()===null?n.outputColorSpace:gt}const rd={clone:di,merge:Se};var sd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ad=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xn extends ws{constructor(A){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sd,this.fragmentShader=ad,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,A!==void 0&&this.setValues(A)}copy(A){return super.copy(A),this.fragmentShader=A.fragmentShader,this.vertexShader=A.vertexShader,this.uniforms=di(A.uniforms),this.uniformsGroups=id(A.uniformsGroups),this.defines=Object.assign({},A.defines),this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.fog=A.fog,this.lights=A.lights,this.clipping=A.clipping,this.extensions=Object.assign({},A.extensions),this.glslVersion=A.glslVersion,this}toJSON(A){const e=super.toJSON(A);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?e.uniforms[i]={type:"t",value:s.toJSON(A).uuid}:s&&s.isColor?e.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[i]={type:"m4",value:s.toArray()}:e.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const t={};for(const i in this.extensions)this.extensions[i]===!0&&(t[i]=!0);return Object.keys(t).length>0&&(e.extensions=t),e}}class mu extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe}copy(A,e){return super.copy(A,e),this.matrixWorldInverse.copy(A.matrixWorldInverse),this.projectionMatrix.copy(A.projectionMatrix),this.projectionMatrixInverse.copy(A.projectionMatrixInverse),this}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return A.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(A){super.updateMatrixWorld(A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(A,e){super.updateWorldMatrix(A,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Xe extends mu{constructor(A=50,e=1,t=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=A,this.zoom=1,this.near=t,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(A,e){return super.copy(A,e),this.fov=A.fov,this.zoom=A.zoom,this.near=A.near,this.far=A.far,this.focus=A.focus,this.aspect=A.aspect,this.view=A.view===null?null:Object.assign({},A.view),this.filmGauge=A.filmGauge,this.filmOffset=A.filmOffset,this}setFocalLength(A){const e=.5*this.getFilmHeight()/A;this.fov=Ga*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const A=Math.tan(Ks*.5*this.fov);return .5*this.getFilmHeight()/A}getEffectiveFOV(){return Ga*2*Math.atan(Math.tan(Ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(A,e,t,i,r,s){this.aspect=A/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=e,this.view.offsetX=t,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=this.near;let e=A*Math.tan(Ks*.5*this.fov)/this.zoom,t=2*e,i=this.aspect*t,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const o=s.fullWidth,l=s.fullHeight;r+=s.offsetX*i/o,e-=s.offsetY*t/l,i*=s.width/o,t*=s.height/l}const a=this.filmOffset;a!==0&&(r+=A*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-t,A,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const e=super.toJSON(A);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Gn=-90,Vn=1;class od extends Ve{constructor(A,e,t){super(),this.type="CubeCamera",this.renderTarget=t;const i=new Xe(Gn,Vn,A,e);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new Xe(Gn,Vn,A,e);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const s=new Xe(Gn,Vn,A,e);s.layers=this.layers,s.up.set(0,0,-1),s.lookAt(0,1,0),this.add(s);const a=new Xe(Gn,Vn,A,e);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const o=new Xe(Gn,Vn,A,e);o.layers=this.layers,o.up.set(0,1,0),o.lookAt(0,0,1),this.add(o);const l=new Xe(Gn,Vn,A,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(A,e){this.parent===null&&this.updateMatrixWorld();const t=this.renderTarget,[i,r,s,a,o,l]=this.children,c=A.getRenderTarget(),u=A.toneMapping,h=A.xr.enabled;A.toneMapping=bt,A.xr.enabled=!1;const d=t.texture.generateMipmaps;t.texture.generateMipmaps=!1,A.setRenderTarget(t,0),A.render(e,i),A.setRenderTarget(t,1),A.render(e,r),A.setRenderTarget(t,2),A.render(e,s),A.setRenderTarget(t,3),A.render(e,a),A.setRenderTarget(t,4),A.render(e,o),t.texture.generateMipmaps=d,A.setRenderTarget(t,5),A.render(e,l),A.setRenderTarget(c),A.toneMapping=u,A.xr.enabled=h,t.texture.needsPMREMUpdate=!0}}class Bu extends Ge{constructor(A,e,t,i,r,s,a,o,l,c){A=A!==void 0?A:[],e=e!==void 0?e:ui,super(A,e,t,i,r,s,a,o,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(A){this.image=A}}class ld extends Cn{constructor(A=1,e={}){super(A,A,e),this.isWebGLCubeRenderTarget=!0;const t={width:A,height:A,depth:1},i=[t,t,t,t,t,t];e.encoding!==void 0&&(Hi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===mn?MA:Bn),this.texture=new Bu(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:We}fromEquirectangularTexture(A,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const t={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ir(5,5,5),r=new xn({name:"CubemapFromEquirect",uniforms:di(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:Re,blending:zt});r.uniforms.tEquirect.value=e;const s=new St(i,r),a=e.minFilter;return e.minFilter===zi&&(e.minFilter=We),new od(1,10,this).update(A,s),e.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(A,e,t,i){const r=A.getRenderTarget();for(let s=0;s<6;s++)A.setRenderTarget(this,s),A.clear(e,t,i);A.setRenderTarget(r)}}const aa=new L,cd=new L,ud=new DA;class rn{constructor(A=new L(1,0,0),e=0){this.isPlane=!0,this.normal=A,this.constant=e}set(A,e){return this.normal.copy(A),this.constant=e,this}setComponents(A,e,t,i){return this.normal.set(A,e,t),this.constant=i,this}setFromNormalAndCoplanarPoint(A,e){return this.normal.copy(A),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(A,e,t){const i=aa.subVectors(t,e).cross(cd.subVectors(A,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,A),this}copy(A){return this.normal.copy(A.normal),this.constant=A.constant,this}normalize(){const A=1/this.normal.length();return this.normal.multiplyScalar(A),this.constant*=A,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(A){return this.normal.dot(A)+this.constant}distanceToSphere(A){return this.distanceToPoint(A.center)-A.radius}projectPoint(A,e){return e.copy(A).addScaledVector(this.normal,-this.distanceToPoint(A))}intersectLine(A,e){const t=A.delta(aa),i=this.normal.dot(t);if(i===0)return this.distanceToPoint(A.start)===0?e.copy(A.start):null;const r=-(A.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(A.start).addScaledVector(t,r)}intersectsLine(A){const e=this.distanceToPoint(A.start),t=this.distanceToPoint(A.end);return e<0&&t>0||t<0&&e>0}intersectsBox(A){return A.intersectsPlane(this)}intersectsSphere(A){return A.intersectsPlane(this)}coplanarPoint(A){return A.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(A,e){const t=e||ud.getNormalMatrix(A),i=this.coplanarPoint(aa).applyMatrix4(A),r=this.normal.applyMatrix3(t).normalize();return this.constant=-i.dot(r),this}translate(A){return this.constant-=A.dot(this.normal),this}equals(A){return A.normal.equals(this.normal)&&A.constant===this.constant}clone(){return new this.constructor().copy(this)}}const tn=new go,Fr=new L;class wu{constructor(A=new rn,e=new rn,t=new rn,i=new rn,r=new rn,s=new rn){this.planes=[A,e,t,i,r,s]}set(A,e,t,i,r,s){const a=this.planes;return a[0].copy(A),a[1].copy(e),a[2].copy(t),a[3].copy(i),a[4].copy(r),a[5].copy(s),this}copy(A){const e=this.planes;for(let t=0;t<6;t++)e[t].copy(A.planes[t]);return this}setFromProjectionMatrix(A){const e=this.planes,t=A.elements,i=t[0],r=t[1],s=t[2],a=t[3],o=t[4],l=t[5],c=t[6],u=t[7],h=t[8],d=t[9],g=t[10],m=t[11],p=t[12],f=t[13],_=t[14],E=t[15];return e[0].setComponents(a-i,u-o,m-h,E-p).normalize(),e[1].setComponents(a+i,u+o,m+h,E+p).normalize(),e[2].setComponents(a+r,u+l,m+d,E+f).normalize(),e[3].setComponents(a-r,u-l,m-d,E-f).normalize(),e[4].setComponents(a-s,u-c,m-g,E-_).normalize(),e[5].setComponents(a+s,u+c,m+g,E+_).normalize(),this}intersectsObject(A){if(A.boundingSphere!==void 0)A.boundingSphere===null&&A.computeBoundingSphere(),tn.copy(A.boundingSphere).applyMatrix4(A.matrixWorld);else{const e=A.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),tn.copy(e.boundingSphere).applyMatrix4(A.matrixWorld)}return this.intersectsSphere(tn)}intersectsSprite(A){return tn.center.set(0,0,0),tn.radius=.7071067811865476,tn.applyMatrix4(A.matrixWorld),this.intersectsSphere(tn)}intersectsSphere(A){const e=this.planes,t=A.center,i=-A.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(t)<i)return!1;return!0}intersectsBox(A){const e=this.planes;for(let t=0;t<6;t++){const i=e[t];if(Fr.x=i.normal.x>0?A.max.x:A.min.x,Fr.y=i.normal.y>0?A.max.y:A.min.y,Fr.z=i.normal.z>0?A.max.z:A.min.z,i.distanceToPoint(Fr)<0)return!1}return!0}containsPoint(A){const e=this.planes;for(let t=0;t<6;t++)if(e[t].distanceToPoint(A)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vu(){let n=null,A=!1,e=null,t=null;function i(r,s){e(r,s),t=n.requestAnimationFrame(i)}return{start:function(){A!==!0&&e!==null&&(t=n.requestAnimationFrame(i),A=!0)},stop:function(){n.cancelAnimationFrame(t),A=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function hd(n,A){const e=A.isWebGL2,t=new WeakMap;function i(l,c){const u=l.array,h=l.usage,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,u,h),l.onUploadCallback();let g;if(u instanceof Float32Array)g=n.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=n.SHORT;else if(u instanceof Uint32Array)g=n.UNSIGNED_INT;else if(u instanceof Int32Array)g=n.INT;else if(u instanceof Int8Array)g=n.BYTE;else if(u instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version}}function r(l,c,u){const h=c.array,d=c.updateRange;n.bindBuffer(u,l),d.count===-1?n.bufferSubData(u,0,h):(e?n.bufferSubData(u,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):n.bufferSubData(u,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),c.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=t.get(l);c&&(n.deleteBuffer(c.buffer),t.delete(l))}function o(l,c){if(l.isGLBufferAttribute){const h=t.get(l);(!h||h.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=t.get(l);u===void 0?t.set(l,i(l,c)):u.version<l.version&&(r(u.buffer,l,c),u.version=l.version)}return{get:s,remove:a,update:o}}class Bo extends Zt{constructor(A=1,e=1,t=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:A,height:e,widthSegments:t,heightSegments:i};const r=A/2,s=e/2,a=Math.floor(t),o=Math.floor(i),l=a+1,c=o+1,u=A/a,h=e/o,d=[],g=[],m=[],p=[];for(let f=0;f<c;f++){const _=f*h-s;for(let E=0;E<l;E++){const x=E*u-r;g.push(x,-_,0),m.push(0,0,1),p.push(E/a),p.push(1-f/o)}}for(let f=0;f<o;f++)for(let _=0;_<a;_++){const E=_+l*f,x=_+l*(f+1),w=_+1+l*(f+1),U=_+1+l*f;d.push(E,x,U),d.push(x,w,U)}this.setIndex(d),this.setAttribute("position",new at(g,3)),this.setAttribute("normal",new at(m,3)),this.setAttribute("uv",new at(p,2))}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new Bo(A.width,A.height,A.widthSegments,A.heightSegments)}}var fd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,gd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,md=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Bd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wd="vec3 transformed = vec3( position );",vd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_d=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Cd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ed=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Ud=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Md=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Td=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Qd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Id=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ld=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Rd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Od="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nd=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Vd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Kd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Wd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,jd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$d=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ap=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ep=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,tp=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,np=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ip=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ap=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,op=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lp=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,up=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,hp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,pp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,gp=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,mp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_p=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ep=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,xp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Up=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Fp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Mp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Qp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Ip=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Pp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Op=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Np=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,zp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Wp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Xp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Yp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Zp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$p=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ag=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,tg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,ng=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,ig=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rg=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sg=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ag=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const og=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ug=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,dg=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,gg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,vg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_g=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cg=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Eg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ug=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Mg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Sg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ig=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Dg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pg=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Og=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ng=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,bA={alphamap_fragment:fd,alphamap_pars_fragment:dd,alphatest_fragment:pd,alphatest_pars_fragment:gd,aomap_fragment:md,aomap_pars_fragment:Bd,begin_vertex:wd,beginnormal_vertex:vd,bsdfs:_d,iridescence_fragment:Cd,bumpmap_pars_fragment:Ed,clipping_planes_fragment:xd,clipping_planes_pars_fragment:Ud,clipping_planes_pars_vertex:Fd,clipping_planes_vertex:Md,color_fragment:yd,color_pars_fragment:Sd,color_pars_vertex:bd,color_vertex:Td,common:Qd,cube_uv_reflection_fragment:Id,defaultnormal_vertex:Ld,displacementmap_pars_vertex:Rd,displacementmap_vertex:Hd,emissivemap_fragment:Dd,emissivemap_pars_fragment:Pd,encodings_fragment:Od,encodings_pars_fragment:Nd,envmap_fragment:Gd,envmap_common_pars_fragment:Vd,envmap_pars_fragment:Kd,envmap_pars_vertex:kd,envmap_physical_pars_fragment:tp,envmap_vertex:zd,fog_vertex:Wd,fog_pars_vertex:Xd,fog_fragment:Yd,fog_pars_fragment:Jd,gradientmap_pars_fragment:Zd,lightmap_fragment:qd,lightmap_pars_fragment:jd,lights_lambert_fragment:$d,lights_lambert_pars_fragment:Ap,lights_pars_begin:ep,lights_toon_fragment:np,lights_toon_pars_fragment:ip,lights_phong_fragment:rp,lights_phong_pars_fragment:sp,lights_physical_fragment:ap,lights_physical_pars_fragment:op,lights_fragment_begin:lp,lights_fragment_maps:cp,lights_fragment_end:up,logdepthbuf_fragment:hp,logdepthbuf_pars_fragment:fp,logdepthbuf_pars_vertex:dp,logdepthbuf_vertex:pp,map_fragment:gp,map_pars_fragment:mp,map_particle_fragment:Bp,map_particle_pars_fragment:wp,metalnessmap_fragment:vp,metalnessmap_pars_fragment:_p,morphcolor_vertex:Cp,morphnormal_vertex:Ep,morphtarget_pars_vertex:xp,morphtarget_vertex:Up,normal_fragment_begin:Fp,normal_fragment_maps:Mp,normal_pars_fragment:yp,normal_pars_vertex:Sp,normal_vertex:bp,normalmap_pars_fragment:Tp,clearcoat_normal_fragment_begin:Qp,clearcoat_normal_fragment_maps:Ip,clearcoat_pars_fragment:Lp,iridescence_pars_fragment:Rp,output_fragment:Hp,packing:Dp,premultiplied_alpha_fragment:Pp,project_vertex:Op,dithering_fragment:Np,dithering_pars_fragment:Gp,roughnessmap_fragment:Vp,roughnessmap_pars_fragment:Kp,shadowmap_pars_fragment:kp,shadowmap_pars_vertex:zp,shadowmap_vertex:Wp,shadowmask_pars_fragment:Xp,skinbase_vertex:Yp,skinning_pars_vertex:Jp,skinning_vertex:Zp,skinnormal_vertex:qp,specularmap_fragment:jp,specularmap_pars_fragment:$p,tonemapping_fragment:Ag,tonemapping_pars_fragment:eg,transmission_fragment:tg,transmission_pars_fragment:ng,uv_pars_fragment:ig,uv_pars_vertex:rg,uv_vertex:sg,worldpos_vertex:ag,background_vert:og,background_frag:lg,backgroundCube_vert:cg,backgroundCube_frag:ug,cube_vert:hg,cube_frag:fg,depth_vert:dg,depth_frag:pg,distanceRGBA_vert:gg,distanceRGBA_frag:mg,equirect_vert:Bg,equirect_frag:wg,linedashed_vert:vg,linedashed_frag:_g,meshbasic_vert:Cg,meshbasic_frag:Eg,meshlambert_vert:xg,meshlambert_frag:Ug,meshmatcap_vert:Fg,meshmatcap_frag:Mg,meshnormal_vert:yg,meshnormal_frag:Sg,meshphong_vert:bg,meshphong_frag:Tg,meshphysical_vert:Qg,meshphysical_frag:Ig,meshtoon_vert:Lg,meshtoon_frag:Rg,points_vert:Hg,points_frag:Dg,shadow_vert:Pg,shadow_frag:Og,sprite_vert:Ng,sprite_frag:Gg},aA={common:{diffuse:{value:new KA(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new DA},alphaMap:{value:null},alphaMapTransform:{value:new DA},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new DA}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new DA}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new DA}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new DA},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new DA},normalScale:{value:new LA(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new DA},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new DA}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new DA}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new DA}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new KA(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new KA(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new DA}},sprite:{diffuse:{value:new KA(16777215)},opacity:{value:1},center:{value:new LA(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new DA},alphaMap:{value:null},alphaTest:{value:0}}},dt={basic:{uniforms:Se([aA.common,aA.specularmap,aA.envmap,aA.aomap,aA.lightmap,aA.fog]),vertexShader:bA.meshbasic_vert,fragmentShader:bA.meshbasic_frag},lambert:{uniforms:Se([aA.common,aA.specularmap,aA.envmap,aA.aomap,aA.lightmap,aA.emissivemap,aA.bumpmap,aA.normalmap,aA.displacementmap,aA.fog,aA.lights,{emissive:{value:new KA(0)}}]),vertexShader:bA.meshlambert_vert,fragmentShader:bA.meshlambert_frag},phong:{uniforms:Se([aA.common,aA.specularmap,aA.envmap,aA.aomap,aA.lightmap,aA.emissivemap,aA.bumpmap,aA.normalmap,aA.displacementmap,aA.fog,aA.lights,{emissive:{value:new KA(0)},specular:{value:new KA(1118481)},shininess:{value:30}}]),vertexShader:bA.meshphong_vert,fragmentShader:bA.meshphong_frag},standard:{uniforms:Se([aA.common,aA.envmap,aA.aomap,aA.lightmap,aA.emissivemap,aA.bumpmap,aA.normalmap,aA.displacementmap,aA.roughnessmap,aA.metalnessmap,aA.fog,aA.lights,{emissive:{value:new KA(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:bA.meshphysical_vert,fragmentShader:bA.meshphysical_frag},toon:{uniforms:Se([aA.common,aA.aomap,aA.lightmap,aA.emissivemap,aA.bumpmap,aA.normalmap,aA.displacementmap,aA.gradientmap,aA.fog,aA.lights,{emissive:{value:new KA(0)}}]),vertexShader:bA.meshtoon_vert,fragmentShader:bA.meshtoon_frag},matcap:{uniforms:Se([aA.common,aA.bumpmap,aA.normalmap,aA.displacementmap,aA.fog,{matcap:{value:null}}]),vertexShader:bA.meshmatcap_vert,fragmentShader:bA.meshmatcap_frag},points:{uniforms:Se([aA.points,aA.fog]),vertexShader:bA.points_vert,fragmentShader:bA.points_frag},dashed:{uniforms:Se([aA.common,aA.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:bA.linedashed_vert,fragmentShader:bA.linedashed_frag},depth:{uniforms:Se([aA.common,aA.displacementmap]),vertexShader:bA.depth_vert,fragmentShader:bA.depth_frag},normal:{uniforms:Se([aA.common,aA.bumpmap,aA.normalmap,aA.displacementmap,{opacity:{value:1}}]),vertexShader:bA.meshnormal_vert,fragmentShader:bA.meshnormal_frag},sprite:{uniforms:Se([aA.sprite,aA.fog]),vertexShader:bA.sprite_vert,fragmentShader:bA.sprite_frag},background:{uniforms:{uvTransform:{value:new DA},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:bA.background_vert,fragmentShader:bA.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:bA.backgroundCube_vert,fragmentShader:bA.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:bA.cube_vert,fragmentShader:bA.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:bA.equirect_vert,fragmentShader:bA.equirect_frag},distanceRGBA:{uniforms:Se([aA.common,aA.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:bA.distanceRGBA_vert,fragmentShader:bA.distanceRGBA_frag},shadow:{uniforms:Se([aA.lights,aA.fog,{color:{value:new KA(0)},opacity:{value:1}}]),vertexShader:bA.shadow_vert,fragmentShader:bA.shadow_frag}};dt.physical={uniforms:Se([dt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new DA},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new DA},clearcoatNormalScale:{value:new LA(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new DA},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new DA},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new DA},sheen:{value:0},sheenColor:{value:new KA(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new DA},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new DA},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new DA},transmissionSamplerSize:{value:new LA},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new DA},attenuationDistance:{value:0},attenuationColor:{value:new KA(0)},specularColor:{value:new KA(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new DA},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new DA}}]),vertexShader:bA.meshphysical_vert,fragmentShader:bA.meshphysical_frag};const Mr={r:0,b:0,g:0};function Vg(n,A,e,t,i,r,s){const a=new KA(0);let o=r===!0?0:1,l,c,u=null,h=0,d=null;function g(p,f){let _=!1,E=f.isScene===!0?f.background:null;switch(E&&E.isTexture&&(E=(f.backgroundBlurriness>0?e:A).get(E)),E===null?m(a,o):E&&E.isColor&&(m(E,1),_=!0),n.xr.getEnvironmentBlendMode()){case"opaque":_=!0;break;case"additive":t.buffers.color.setClear(0,0,0,1,s),_=!0;break;case"alpha-blend":t.buffers.color.setClear(0,0,0,0,s),_=!0;break}(n.autoClear||_)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),E&&(E.isCubeTexture||E.mapping===ms)?(c===void 0&&(c=new St(new ir(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:di(dt.backgroundCube.uniforms),vertexShader:dt.backgroundCube.vertexShader,fragmentShader:dt.backgroundCube.fragmentShader,side:Re,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(U,S,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=E,c.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=E.colorSpace!==MA,(u!==E||h!==E.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=E,h=E.version,d=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new St(new Bo(2,2),new xn({name:"BackgroundMaterial",uniforms:di(dt.background.uniforms),vertexShader:dt.background.vertexShader,fragmentShader:dt.background.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=E.colorSpace!==MA,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||h!==E.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=E,h=E.version,d=n.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function m(p,f){p.getRGB(Mr,gu(n)),t.buffers.color.setClear(Mr.r,Mr.g,Mr.b,f,s)}return{getClearColor:function(){return a},setClearColor:function(p,f=1){a.set(p),o=f,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(p){o=p,m(a,o)},render:g}}function Kg(n,A,e,t){const i=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=t.isWebGL2?null:A.get("OES_vertex_array_object"),s=t.isWebGL2||r!==null,a={},o=p(null);let l=o,c=!1;function u(D,N,q,K,W){let $=!1;if(s){const j=m(K,q,N);l!==j&&(l=j,d(l.object)),$=f(D,K,q,W),$&&_(D,K,q,W)}else{const j=N.wireframe===!0;(l.geometry!==K.id||l.program!==q.id||l.wireframe!==j)&&(l.geometry=K.id,l.program=q.id,l.wireframe=j,$=!0)}W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),($||c)&&(c=!1,R(D,N,q,K),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function h(){return t.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function d(D){return t.isWebGL2?n.bindVertexArray(D):r.bindVertexArrayOES(D)}function g(D){return t.isWebGL2?n.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function m(D,N,q){const K=q.wireframe===!0;let W=a[D.id];W===void 0&&(W={},a[D.id]=W);let $=W[N.id];$===void 0&&($={},W[N.id]=$);let j=$[K];return j===void 0&&(j=p(h()),$[K]=j),j}function p(D){const N=[],q=[],K=[];for(let W=0;W<i;W++)N[W]=0,q[W]=0,K[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:q,attributeDivisors:K,object:D,attributes:{},index:null}}function f(D,N,q,K){const W=l.attributes,$=N.attributes;let j=0;const pA=q.getAttributes();for(const nA in pA)if(pA[nA].location>=0){const J=W[nA];let iA=$[nA];if(iA===void 0&&(nA==="instanceMatrix"&&D.instanceMatrix&&(iA=D.instanceMatrix),nA==="instanceColor"&&D.instanceColor&&(iA=D.instanceColor)),J===void 0||J.attribute!==iA||iA&&J.data!==iA.data)return!0;j++}return l.attributesNum!==j||l.index!==K}function _(D,N,q,K){const W={},$=N.attributes;let j=0;const pA=q.getAttributes();for(const nA in pA)if(pA[nA].location>=0){let J=$[nA];J===void 0&&(nA==="instanceMatrix"&&D.instanceMatrix&&(J=D.instanceMatrix),nA==="instanceColor"&&D.instanceColor&&(J=D.instanceColor));const iA={};iA.attribute=J,J&&J.data&&(iA.data=J.data),W[nA]=iA,j++}l.attributes=W,l.attributesNum=j,l.index=K}function E(){const D=l.newAttributes;for(let N=0,q=D.length;N<q;N++)D[N]=0}function x(D){w(D,0)}function w(D,N){const q=l.newAttributes,K=l.enabledAttributes,W=l.attributeDivisors;q[D]=1,K[D]===0&&(n.enableVertexAttribArray(D),K[D]=1),W[D]!==N&&((t.isWebGL2?n:A.get("ANGLE_instanced_arrays"))[t.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,N),W[D]=N)}function U(){const D=l.newAttributes,N=l.enabledAttributes;for(let q=0,K=N.length;q<K;q++)N[q]!==D[q]&&(n.disableVertexAttribArray(q),N[q]=0)}function S(D,N,q,K,W,$){t.isWebGL2===!0&&(q===n.INT||q===n.UNSIGNED_INT)?n.vertexAttribIPointer(D,N,q,W,$):n.vertexAttribPointer(D,N,q,K,W,$)}function R(D,N,q,K){if(t.isWebGL2===!1&&(D.isInstancedMesh||K.isInstancedBufferGeometry)&&A.get("ANGLE_instanced_arrays")===null)return;E();const W=K.attributes,$=q.getAttributes(),j=N.defaultAttributeValues;for(const pA in $){const nA=$[pA];if(nA.location>=0){let O=W[pA];if(O===void 0&&(pA==="instanceMatrix"&&D.instanceMatrix&&(O=D.instanceMatrix),pA==="instanceColor"&&D.instanceColor&&(O=D.instanceColor)),O!==void 0){const J=O.normalized,iA=O.itemSize,rA=e.get(O);if(rA===void 0)continue;const b=rA.buffer,xA=rA.type,EA=rA.bytesPerElement;if(O.isInterleavedBufferAttribute){const sA=O.data,_A=sA.stride,NA=O.offset;if(sA.isInstancedInterleavedBuffer){for(let wA=0;wA<nA.locationSize;wA++)w(nA.location+wA,sA.meshPerAttribute);D.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=sA.meshPerAttribute*sA.count)}else for(let wA=0;wA<nA.locationSize;wA++)x(nA.location+wA);n.bindBuffer(n.ARRAY_BUFFER,b);for(let wA=0;wA<nA.locationSize;wA++)S(nA.location+wA,iA/nA.locationSize,xA,J,_A*EA,(NA+iA/nA.locationSize*wA)*EA)}else{if(O.isInstancedBufferAttribute){for(let sA=0;sA<nA.locationSize;sA++)w(nA.location+sA,O.meshPerAttribute);D.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let sA=0;sA<nA.locationSize;sA++)x(nA.location+sA);n.bindBuffer(n.ARRAY_BUFFER,b);for(let sA=0;sA<nA.locationSize;sA++)S(nA.location+sA,iA/nA.locationSize,xA,J,iA*EA,iA/nA.locationSize*sA*EA)}}else if(j!==void 0){const J=j[pA];if(J!==void 0)switch(J.length){case 2:n.vertexAttrib2fv(nA.location,J);break;case 3:n.vertexAttrib3fv(nA.location,J);break;case 4:n.vertexAttrib4fv(nA.location,J);break;default:n.vertexAttrib1fv(nA.location,J)}}}}U()}function B(){V();for(const D in a){const N=a[D];for(const q in N){const K=N[q];for(const W in K)g(K[W].object),delete K[W];delete N[q]}delete a[D]}}function M(D){if(a[D.id]===void 0)return;const N=a[D.id];for(const q in N){const K=N[q];for(const W in K)g(K[W].object),delete K[W];delete N[q]}delete a[D.id]}function X(D){for(const N in a){const q=a[N];if(q[D.id]===void 0)continue;const K=q[D.id];for(const W in K)g(K[W].object),delete K[W];delete q[D.id]}}function V(){Q(),c=!0,l!==o&&(l=o,d(l.object))}function Q(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:u,reset:V,resetDefaultState:Q,dispose:B,releaseStatesOfGeometry:M,releaseStatesOfProgram:X,initAttributes:E,enableAttribute:x,disableUnusedAttributes:U}}function kg(n,A,e,t){const i=t.isWebGL2;let r;function s(l){r=l}function a(l,c){n.drawArrays(r,l,c),e.update(c,r,1)}function o(l,c,u){if(u===0)return;let h,d;if(i)h=n,d="drawArraysInstanced";else if(h=A.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[d](r,l,c,u),e.update(c,r,u)}this.setMode=s,this.render=a,this.renderInstances=o}function zg(n,A,e){let t;function i(){if(t!==void 0)return t;if(A.has("EXT_texture_filter_anisotropic")===!0){const S=A.get("EXT_texture_filter_anisotropic");t=n.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else t=0;return t}function r(S){if(S==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const o=r(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);const l=s||A.has("WEBGL_draw_buffers"),c=e.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=h>0,x=s||A.has("OES_texture_float"),w=E&&x,U=s?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:c,maxTextures:u,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:_,vertexTextures:E,floatFragmentTextures:x,floatVertexTextures:w,maxSamples:U}}function Wg(n){const A=this;let e=null,t=0,i=!1,r=!1;const s=new rn,a=new DA,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const d=u.length!==0||h||t!==0||i;return i=h,t=u.length,d},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,h){e=c(u,h,0)},this.setState=function(u,h,d){const g=u.clippingPlanes,m=u.clipIntersection,p=u.clipShadows,f=n.get(u);if(!i||g===null||g.length===0||r&&!p)r?c(null):l();else{const _=r?0:t,E=_*4;let x=f.clippingState||null;o.value=x,x=c(g,h,E,d);for(let w=0;w!==E;++w)x[w]=e[w];f.clippingState=x,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=_}};function l(){o.value!==e&&(o.value=e,o.needsUpdate=t>0),A.numPlanes=t,A.numIntersection=0}function c(u,h,d,g){const m=u!==null?u.length:0;let p=null;if(m!==0){if(p=o.value,g!==!0||p===null){const f=d+m*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<f)&&(p=new Float32Array(f));for(let E=0,x=d;E!==m;++E,x+=4)s.copy(u[E]).applyMatrix4(_,a),s.normal.toArray(p,x),p[x+3]=s.constant}o.value=p,o.needsUpdate=!0}return A.numPlanes=m,A.numIntersection=0,p}}function Xg(n){let A=new WeakMap;function e(s,a){return a===Ha?s.mapping=ui:a===Da&&(s.mapping=hi),s}function t(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const a=s.mapping;if(a===Ha||a===Da)if(A.has(s)){const o=A.get(s).texture;return e(o,s.mapping)}else{const o=s.image;if(o&&o.height>0){const l=new ld(o.height/2);return l.fromEquirectangularTexture(n,s),A.set(s,l),s.addEventListener("dispose",i),e(l.texture,s.mapping)}else return null}}return s}function i(s){const a=s.target;a.removeEventListener("dispose",i);const o=A.get(a);o!==void 0&&(A.delete(a),o.dispose())}function r(){A=new WeakMap}return{get:t,dispose:r}}class Yg extends mu{constructor(A=-1,e=1,t=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=A,this.right=e,this.top=t,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(A,e){return super.copy(A,e),this.left=A.left,this.right=A.right,this.top=A.top,this.bottom=A.bottom,this.near=A.near,this.far=A.far,this.zoom=A.zoom,this.view=A.view===null?null:Object.assign({},A.view),this}setViewOffset(A,e,t,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=e,this.view.offsetX=t,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),t=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=t-A,s=t+A,a=i+e,o=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,s=r+l*this.view.width,a-=c*this.view.offsetY,o=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,o,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const e=super.toJSON(A);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ai=4,Ml=[.125,.215,.35,.446,.526,.582],an=20,oa=new Yg,yl=new KA;let la=null;const sn=(1+Math.sqrt(5))/2,Kn=1/sn,Sl=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,sn,Kn),new L(0,sn,-Kn),new L(Kn,0,sn),new L(-Kn,0,sn),new L(sn,Kn,0),new L(-sn,Kn,0)];class bl{constructor(A){this._renderer=A,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(A,e=0,t=.1,i=100){la=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(A,t,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(A,e=null){return this._fromTexture(A,e)}fromCubemap(A,e=null){return this._fromTexture(A,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Il(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ql(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(A){this._lodMax=Math.floor(Math.log2(A)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let A=0;A<this._lodPlanes.length;A++)this._lodPlanes[A].dispose()}_cleanup(A){this._renderer.setRenderTarget(la),A.scissorTest=!1,yr(A,0,0,A.width,A.height)}_fromTexture(A,e){A.mapping===ui||A.mapping===hi?this._setSize(A.image.length===0?16:A.image[0].width||A.image[0].image.width):this._setSize(A.image.width/4),la=this._renderer.getRenderTarget();const t=e||this._allocateTargets();return this._textureToCubeUV(A,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(){const A=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,t={magFilter:We,minFilter:We,generateMipmaps:!1,type:Wi,format:st,colorSpace:gt,depthBuffer:!1},i=Tl(A,e,t);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==A||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tl(A,e,t);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jg(r)),this._blurMaterial=Zg(r,A,e)}return i}_compileMaterial(A){const e=new St(this._lodPlanes[0],A);this._renderer.compile(e,oa)}_sceneToCubeUV(A,e,t,i){const a=new Xe(90,1,e,t),o=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,u=c.autoClear,h=c.toneMapping;c.getClearColor(yl),c.toneMapping=bt,c.autoClear=!1;const d=new mo({name:"PMREM.Background",side:Re,depthWrite:!1,depthTest:!1}),g=new St(new ir,d);let m=!1;const p=A.background;p?p.isColor&&(d.color.copy(p),A.background=null,m=!0):(d.color.copy(yl),m=!0);for(let f=0;f<6;f++){const _=f%3;_===0?(a.up.set(0,o[f],0),a.lookAt(l[f],0,0)):_===1?(a.up.set(0,0,o[f]),a.lookAt(0,l[f],0)):(a.up.set(0,o[f],0),a.lookAt(0,0,l[f]));const E=this._cubeSize;yr(i,_*E,f>2?E:0,E,E),c.setRenderTarget(i),m&&c.render(g,a),c.render(A,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=h,c.autoClear=u,A.background=p}_textureToCubeUV(A,e){const t=this._renderer,i=A.mapping===ui||A.mapping===hi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Il()),this._cubemapMaterial.uniforms.flipEnvMap.value=A.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ql());const r=i?this._cubemapMaterial:this._equirectMaterial,s=new St(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=A;const o=this._cubeSize;yr(e,0,0,3*o,2*o),t.setRenderTarget(e),t.render(s,oa)}_applyPMREM(A){const e=this._renderer,t=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),s=Sl[(i-1)%Sl.length];this._blur(A,i-1,i,r,s)}e.autoClear=t}_blur(A,e,t,i,r){const s=this._pingPongRenderTarget;this._halfBlur(A,s,e,t,i,"latitudinal",r),this._halfBlur(s,A,t,t,i,"longitudinal",r)}_halfBlur(A,e,t,i,r,s,a){const o=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,u=new St(this._lodPlanes[i],l),h=l.uniforms,d=this._sizeLods[t]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*an-1),m=r/g,p=isFinite(r)?1+Math.floor(c*m):an;p>an&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${an}`);const f=[];let _=0;for(let S=0;S<an;++S){const R=S/m,B=Math.exp(-R*R/2);f.push(B),S===0?_+=B:S<p&&(_+=2*B)}for(let S=0;S<f.length;S++)f[S]=f[S]/_;h.envMap.value=A.texture,h.samples.value=p,h.weights.value=f,h.latitudinal.value=s==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:E}=this;h.dTheta.value=g,h.mipInt.value=E-t;const x=this._sizeLods[i],w=3*x*(i>E-Ai?i-E+Ai:0),U=4*(this._cubeSize-x);yr(e,w,U,3*x,2*x),o.setRenderTarget(e),o.render(u,oa)}}function Jg(n){const A=[],e=[],t=[];let i=n;const r=n-Ai+1+Ml.length;for(let s=0;s<r;s++){const a=Math.pow(2,i);e.push(a);let o=1/a;s>n-Ai?o=Ml[s-n+Ai-1]:s===0&&(o=0),t.push(o);const l=1/(a-2),c=-l,u=1+l,h=[c,c,u,c,u,u,c,c,u,u,c,u],d=6,g=6,m=3,p=2,f=1,_=new Float32Array(m*g*d),E=new Float32Array(p*g*d),x=new Float32Array(f*g*d);for(let U=0;U<d;U++){const S=U%3*2/3-1,R=U>2?0:-1,B=[S,R,0,S+2/3,R,0,S+2/3,R+1,0,S,R,0,S+2/3,R+1,0,S,R+1,0];_.set(B,m*g*U),E.set(h,p*g*U);const M=[U,U,U,U,U,U];x.set(M,f*g*U)}const w=new Zt;w.setAttribute("position",new ot(_,m)),w.setAttribute("uv",new ot(E,p)),w.setAttribute("faceIndex",new ot(x,f)),A.push(w),i>Ai&&i--}return{lodPlanes:A,sizeLods:e,sigmas:t}}function Tl(n,A,e){const t=new Cn(n,A,e);return t.texture.mapping=ms,t.texture.name="PMREM.cubeUv",t.scissorTest=!0,t}function yr(n,A,e,t,i){n.viewport.set(A,e,t,i),n.scissor.set(A,e,t,i)}function Zg(n,A,e){const t=new Float32Array(an),i=new L(0,1,0);return new xn({name:"SphericalGaussianBlur",defines:{n:an,CUBEUV_TEXEL_WIDTH:1/A,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:t},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zt,depthTest:!1,depthWrite:!1})}function Ql(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zt,depthTest:!1,depthWrite:!1})}function Il(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zt,depthTest:!1,depthWrite:!1})}function wo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function qg(n){let A=new WeakMap,e=null;function t(a){if(a&&a.isTexture){const o=a.mapping,l=o===Ha||o===Da,c=o===ui||o===hi;if(l||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=A.get(a);return e===null&&(e=new bl(n)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),A.set(a,u),u.texture}else{if(A.has(a))return A.get(a).texture;{const u=a.image;if(l&&u&&u.height>0||c&&u&&i(u)){e===null&&(e=new bl(n));const h=l?e.fromEquirectangular(a):e.fromCubemap(a);return A.set(a,h),a.addEventListener("dispose",r),h.texture}else return null}}}return a}function i(a){let o=0;const l=6;for(let c=0;c<l;c++)a[c]!==void 0&&o++;return o===l}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=A.get(o);l!==void 0&&(A.delete(o),l.dispose())}function s(){A=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:t,dispose:s}}function jg(n){const A={};function e(t){if(A[t]!==void 0)return A[t];let i;switch(t){case"WEBGL_depth_texture":i=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=n.getExtension(t)}return A[t]=i,i}return{has:function(t){return e(t)!==null},init:function(t){t.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(t){const i=e(t);return i===null&&console.warn("THREE.WebGLRenderer: "+t+" extension not supported."),i}}}function $g(n,A,e,t){const i={},r=new WeakMap;function s(u){const h=u.target;h.index!==null&&A.remove(h.index);for(const g in h.attributes)A.remove(h.attributes[g]);h.removeEventListener("dispose",s),delete i[h.id];const d=r.get(h);d&&(A.remove(d),r.delete(h)),t.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(u,h){return i[h.id]===!0||(h.addEventListener("dispose",s),i[h.id]=!0,e.memory.geometries++),h}function o(u){const h=u.attributes;for(const g in h)A.update(h[g],n.ARRAY_BUFFER);const d=u.morphAttributes;for(const g in d){const m=d[g];for(let p=0,f=m.length;p<f;p++)A.update(m[p],n.ARRAY_BUFFER)}}function l(u){const h=[],d=u.index,g=u.attributes.position;let m=0;if(d!==null){const _=d.array;m=d.version;for(let E=0,x=_.length;E<x;E+=3){const w=_[E+0],U=_[E+1],S=_[E+2];h.push(w,U,U,S,S,w)}}else{const _=g.array;m=g.version;for(let E=0,x=_.length/3-1;E<x;E+=3){const w=E+0,U=E+1,S=E+2;h.push(w,U,U,S,S,w)}}const p=new(ou(h)?pu:du)(h,1);p.version=m;const f=r.get(u);f&&A.remove(f),r.set(u,p)}function c(u){const h=r.get(u);if(h){const d=u.index;d!==null&&h.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:o,getWireframeAttribute:c}}function A0(n,A,e,t){const i=t.isWebGL2;let r;function s(h){r=h}let a,o;function l(h){a=h.type,o=h.bytesPerElement}function c(h,d){n.drawElements(r,d,a,h*o),e.update(d,r,1)}function u(h,d,g){if(g===0)return;let m,p;if(i)m=n,p="drawElementsInstanced";else if(m=A.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,d,a,h*o,g),e.update(d,r,g)}this.setMode=s,this.setIndex=l,this.render=c,this.renderInstances=u}function e0(n){const A={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function t(r,s,a){switch(e.calls++,s){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:A,render:e,programs:null,autoReset:!0,reset:i,update:t}}function t0(n,A){return n[0]-A[0]}function n0(n,A){return Math.abs(A[1])-Math.abs(n[1])}function i0(n,A,e){const t={},i=new Float32Array(8),r=new WeakMap,s=new Be,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function o(l,c,u){const h=l.morphTargetInfluences;if(A.isWebGL2===!0){const g=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,m=g!==void 0?g.length:0;let p=r.get(c);if(p===void 0||p.count!==m){let N=function(){Q.dispose(),r.delete(c),c.removeEventListener("dispose",N)};var d=N;p!==void 0&&p.texture.dispose();const E=c.morphAttributes.position!==void 0,x=c.morphAttributes.normal!==void 0,w=c.morphAttributes.color!==void 0,U=c.morphAttributes.position||[],S=c.morphAttributes.normal||[],R=c.morphAttributes.color||[];let B=0;E===!0&&(B=1),x===!0&&(B=2),w===!0&&(B=3);let M=c.attributes.position.count*B,X=1;M>A.maxTextureSize&&(X=Math.ceil(M/A.maxTextureSize),M=A.maxTextureSize);const V=new Float32Array(M*X*4*m),Q=new uu(V,M,X,m);Q.type=cn,Q.needsUpdate=!0;const D=B*4;for(let q=0;q<m;q++){const K=U[q],W=S[q],$=R[q],j=M*X*4*q;for(let pA=0;pA<K.count;pA++){const nA=pA*D;E===!0&&(s.fromBufferAttribute(K,pA),V[j+nA+0]=s.x,V[j+nA+1]=s.y,V[j+nA+2]=s.z,V[j+nA+3]=0),x===!0&&(s.fromBufferAttribute(W,pA),V[j+nA+4]=s.x,V[j+nA+5]=s.y,V[j+nA+6]=s.z,V[j+nA+7]=0),w===!0&&(s.fromBufferAttribute($,pA),V[j+nA+8]=s.x,V[j+nA+9]=s.y,V[j+nA+10]=s.z,V[j+nA+11]=$.itemSize===4?s.w:1)}}p={count:m,texture:Q,size:new LA(M,X)},r.set(c,p),c.addEventListener("dispose",N)}let f=0;for(let E=0;E<h.length;E++)f+=h[E];const _=c.morphTargetsRelative?1:1-f;u.getUniforms().setValue(n,"morphTargetBaseInfluence",_),u.getUniforms().setValue(n,"morphTargetInfluences",h),u.getUniforms().setValue(n,"morphTargetsTexture",p.texture,e),u.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const g=h===void 0?0:h.length;let m=t[c.id];if(m===void 0||m.length!==g){m=[];for(let x=0;x<g;x++)m[x]=[x,0];t[c.id]=m}for(let x=0;x<g;x++){const w=m[x];w[0]=x,w[1]=h[x]}m.sort(n0);for(let x=0;x<8;x++)x<g&&m[x][1]?(a[x][0]=m[x][0],a[x][1]=m[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(t0);const p=c.morphAttributes.position,f=c.morphAttributes.normal;let _=0;for(let x=0;x<8;x++){const w=a[x],U=w[0],S=w[1];U!==Number.MAX_SAFE_INTEGER&&S?(p&&c.getAttribute("morphTarget"+x)!==p[U]&&c.setAttribute("morphTarget"+x,p[U]),f&&c.getAttribute("morphNormal"+x)!==f[U]&&c.setAttribute("morphNormal"+x,f[U]),i[x]=S,_+=S):(p&&c.hasAttribute("morphTarget"+x)===!0&&c.deleteAttribute("morphTarget"+x),f&&c.hasAttribute("morphNormal"+x)===!0&&c.deleteAttribute("morphNormal"+x),i[x]=0)}const E=c.morphTargetsRelative?1:1-_;u.getUniforms().setValue(n,"morphTargetBaseInfluence",E),u.getUniforms().setValue(n,"morphTargetInfluences",i)}}return{update:o}}function r0(n,A,e,t){let i=new WeakMap;function r(o){const l=t.render.frame,c=o.geometry,u=A.get(o,c);return i.get(u)!==l&&(A.update(u),i.set(u,l)),o.isInstancedMesh&&(o.hasEventListener("dispose",a)===!1&&o.addEventListener("dispose",a),e.update(o.instanceMatrix,n.ARRAY_BUFFER),o.instanceColor!==null&&e.update(o.instanceColor,n.ARRAY_BUFFER)),u}function s(){i=new WeakMap}function a(o){const l=o.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:s}}const _u=new Ge,Cu=new uu,Eu=new Wf,xu=new Bu,Ll=[],Rl=[],Hl=new Float32Array(16),Dl=new Float32Array(9),Pl=new Float32Array(4);function gi(n,A,e){const t=n[0];if(t<=0||t>0)return n;const i=A*e;let r=Ll[i];if(r===void 0&&(r=new Float32Array(i),Ll[i]=r),A!==0){t.toArray(r,0);for(let s=1,a=0;s!==A;++s)a+=e,n[s].toArray(r,a)}return r}function ce(n,A){if(n.length!==A.length)return!1;for(let e=0,t=n.length;e<t;e++)if(n[e]!==A[e])return!1;return!0}function ue(n,A){for(let e=0,t=A.length;e<t;e++)n[e]=A[e]}function vs(n,A){let e=Rl[A];e===void 0&&(e=new Int32Array(A),Rl[A]=e);for(let t=0;t!==A;++t)e[t]=n.allocateTextureUnit();return e}function s0(n,A){const e=this.cache;e[0]!==A&&(n.uniform1f(this.addr,A),e[0]=A)}function a0(n,A){const e=this.cache;if(A.x!==void 0)(e[0]!==A.x||e[1]!==A.y)&&(n.uniform2f(this.addr,A.x,A.y),e[0]=A.x,e[1]=A.y);else{if(ce(e,A))return;n.uniform2fv(this.addr,A),ue(e,A)}}function o0(n,A){const e=this.cache;if(A.x!==void 0)(e[0]!==A.x||e[1]!==A.y||e[2]!==A.z)&&(n.uniform3f(this.addr,A.x,A.y,A.z),e[0]=A.x,e[1]=A.y,e[2]=A.z);else if(A.r!==void 0)(e[0]!==A.r||e[1]!==A.g||e[2]!==A.b)&&(n.uniform3f(this.addr,A.r,A.g,A.b),e[0]=A.r,e[1]=A.g,e[2]=A.b);else{if(ce(e,A))return;n.uniform3fv(this.addr,A),ue(e,A)}}function l0(n,A){const e=this.cache;if(A.x!==void 0)(e[0]!==A.x||e[1]!==A.y||e[2]!==A.z||e[3]!==A.w)&&(n.uniform4f(this.addr,A.x,A.y,A.z,A.w),e[0]=A.x,e[1]=A.y,e[2]=A.z,e[3]=A.w);else{if(ce(e,A))return;n.uniform4fv(this.addr,A),ue(e,A)}}function c0(n,A){const e=this.cache,t=A.elements;if(t===void 0){if(ce(e,A))return;n.uniformMatrix2fv(this.addr,!1,A),ue(e,A)}else{if(ce(e,t))return;Pl.set(t),n.uniformMatrix2fv(this.addr,!1,Pl),ue(e,t)}}function u0(n,A){const e=this.cache,t=A.elements;if(t===void 0){if(ce(e,A))return;n.uniformMatrix3fv(this.addr,!1,A),ue(e,A)}else{if(ce(e,t))return;Dl.set(t),n.uniformMatrix3fv(this.addr,!1,Dl),ue(e,t)}}function h0(n,A){const e=this.cache,t=A.elements;if(t===void 0){if(ce(e,A))return;n.uniformMatrix4fv(this.addr,!1,A),ue(e,A)}else{if(ce(e,t))return;Hl.set(t),n.uniformMatrix4fv(this.addr,!1,Hl),ue(e,t)}}function f0(n,A){const e=this.cache;e[0]!==A&&(n.uniform1i(this.addr,A),e[0]=A)}function d0(n,A){const e=this.cache;if(A.x!==void 0)(e[0]!==A.x||e[1]!==A.y)&&(n.uniform2i(this.addr,A.x,A.y),e[0]=A.x,e[1]=A.y);else{if(ce(e,A))return;n.uniform2iv(this.addr,A),ue(e,A)}}function p0(n,A){const e=this.cache;if(A.x!==void 0)(e[0]!==A.x||e[1]!==A.y||e[2]!==A.z)&&(n.uniform3i(this.addr,A.x,A.y,A.z),e[0]=A.x,e[1]=A.y,e[2]=A.z);else{if(ce(e,A))return;n.uniform3iv(this.addr,A),ue(e,A)}}function g0(n,A){const e=this.cache;if(A.x!==void 0)(e[0]!==A.x||e[1]!==A.y||e[2]!==A.z||e[3]!==A.w)&&(n.uniform4i(this.addr,A.x,A.y,A.z,A.w),e[0]=A.x,e[1]=A.y,e[2]=A.z,e[3]=A.w);else{if(ce(e,A))return;n.uniform4iv(this.addr,A),ue(e,A)}}function m0(n,A){const e=this.cache;e[0]!==A&&(n.uniform1ui(this.addr,A),e[0]=A)}function B0(n,A){const e=this.cache;if(A.x!==void 0)(e[0]!==A.x||e[1]!==A.y)&&(n.uniform2ui(this.addr,A.x,A.y),e[0]=A.x,e[1]=A.y);else{if(ce(e,A))return;n.uniform2uiv(this.addr,A),ue(e,A)}}function w0(n,A){const e=this.cache;if(A.x!==void 0)(e[0]!==A.x||e[1]!==A.y||e[2]!==A.z)&&(n.uniform3ui(this.addr,A.x,A.y,A.z),e[0]=A.x,e[1]=A.y,e[2]=A.z);else{if(ce(e,A))return;n.uniform3uiv(this.addr,A),ue(e,A)}}function v0(n,A){const e=this.cache;if(A.x!==void 0)(e[0]!==A.x||e[1]!==A.y||e[2]!==A.z||e[3]!==A.w)&&(n.uniform4ui(this.addr,A.x,A.y,A.z,A.w),e[0]=A.x,e[1]=A.y,e[2]=A.z,e[3]=A.w);else{if(ce(e,A))return;n.uniform4uiv(this.addr,A),ue(e,A)}}function _0(n,A,e){const t=this.cache,i=e.allocateTextureUnit();t[0]!==i&&(n.uniform1i(this.addr,i),t[0]=i),e.setTexture2D(A||_u,i)}function C0(n,A,e){const t=this.cache,i=e.allocateTextureUnit();t[0]!==i&&(n.uniform1i(this.addr,i),t[0]=i),e.setTexture3D(A||Eu,i)}function E0(n,A,e){const t=this.cache,i=e.allocateTextureUnit();t[0]!==i&&(n.uniform1i(this.addr,i),t[0]=i),e.setTextureCube(A||xu,i)}function x0(n,A,e){const t=this.cache,i=e.allocateTextureUnit();t[0]!==i&&(n.uniform1i(this.addr,i),t[0]=i),e.setTexture2DArray(A||Cu,i)}function U0(n){switch(n){case 5126:return s0;case 35664:return a0;case 35665:return o0;case 35666:return l0;case 35674:return c0;case 35675:return u0;case 35676:return h0;case 5124:case 35670:return f0;case 35667:case 35671:return d0;case 35668:case 35672:return p0;case 35669:case 35673:return g0;case 5125:return m0;case 36294:return B0;case 36295:return w0;case 36296:return v0;case 35678:case 36198:case 36298:case 36306:case 35682:return _0;case 35679:case 36299:case 36307:return C0;case 35680:case 36300:case 36308:case 36293:return E0;case 36289:case 36303:case 36311:case 36292:return x0}}function F0(n,A){n.uniform1fv(this.addr,A)}function M0(n,A){const e=gi(A,this.size,2);n.uniform2fv(this.addr,e)}function y0(n,A){const e=gi(A,this.size,3);n.uniform3fv(this.addr,e)}function S0(n,A){const e=gi(A,this.size,4);n.uniform4fv(this.addr,e)}function b0(n,A){const e=gi(A,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function T0(n,A){const e=gi(A,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Q0(n,A){const e=gi(A,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function I0(n,A){n.uniform1iv(this.addr,A)}function L0(n,A){n.uniform2iv(this.addr,A)}function R0(n,A){n.uniform3iv(this.addr,A)}function H0(n,A){n.uniform4iv(this.addr,A)}function D0(n,A){n.uniform1uiv(this.addr,A)}function P0(n,A){n.uniform2uiv(this.addr,A)}function O0(n,A){n.uniform3uiv(this.addr,A)}function N0(n,A){n.uniform4uiv(this.addr,A)}function G0(n,A,e){const t=this.cache,i=A.length,r=vs(e,i);ce(t,r)||(n.uniform1iv(this.addr,r),ue(t,r));for(let s=0;s!==i;++s)e.setTexture2D(A[s]||_u,r[s])}function V0(n,A,e){const t=this.cache,i=A.length,r=vs(e,i);ce(t,r)||(n.uniform1iv(this.addr,r),ue(t,r));for(let s=0;s!==i;++s)e.setTexture3D(A[s]||Eu,r[s])}function K0(n,A,e){const t=this.cache,i=A.length,r=vs(e,i);ce(t,r)||(n.uniform1iv(this.addr,r),ue(t,r));for(let s=0;s!==i;++s)e.setTextureCube(A[s]||xu,r[s])}function k0(n,A,e){const t=this.cache,i=A.length,r=vs(e,i);ce(t,r)||(n.uniform1iv(this.addr,r),ue(t,r));for(let s=0;s!==i;++s)e.setTexture2DArray(A[s]||Cu,r[s])}function z0(n){switch(n){case 5126:return F0;case 35664:return M0;case 35665:return y0;case 35666:return S0;case 35674:return b0;case 35675:return T0;case 35676:return Q0;case 5124:case 35670:return I0;case 35667:case 35671:return L0;case 35668:case 35672:return R0;case 35669:case 35673:return H0;case 5125:return D0;case 36294:return P0;case 36295:return O0;case 36296:return N0;case 35678:case 36198:case 36298:case 36306:case 35682:return G0;case 35679:case 36299:case 36307:return V0;case 35680:case 36300:case 36308:case 36293:return K0;case 36289:case 36303:case 36311:case 36292:return k0}}class W0{constructor(A,e,t){this.id=A,this.addr=t,this.cache=[],this.setValue=U0(e.type)}}class X0{constructor(A,e,t){this.id=A,this.addr=t,this.cache=[],this.size=e.size,this.setValue=z0(e.type)}}class Y0{constructor(A){this.id=A,this.seq=[],this.map={}}setValue(A,e,t){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const a=i[r];a.setValue(A,e[a.id],t)}}}const ca=/(\w+)(\])?(\[|\.)?/g;function Ol(n,A){n.seq.push(A),n.map[A.id]=A}function J0(n,A,e){const t=n.name,i=t.length;for(ca.lastIndex=0;;){const r=ca.exec(t),s=ca.lastIndex;let a=r[1];const o=r[2]==="]",l=r[3];if(o&&(a=a|0),l===void 0||l==="["&&s+2===i){Ol(e,l===void 0?new W0(a,n,A):new X0(a,n,A));break}else{let u=e.map[a];u===void 0&&(u=new Y0(a),Ol(e,u)),e=u}}}class As{constructor(A,e){this.seq=[],this.map={};const t=A.getProgramParameter(e,A.ACTIVE_UNIFORMS);for(let i=0;i<t;++i){const r=A.getActiveUniform(e,i),s=A.getUniformLocation(e,r.name);J0(r,s,this)}}setValue(A,e,t,i){const r=this.map[e];r!==void 0&&r.setValue(A,t,i)}setOptional(A,e,t){const i=e[t];i!==void 0&&this.setValue(A,t,i)}static upload(A,e,t,i){for(let r=0,s=e.length;r!==s;++r){const a=e[r],o=t[a.id];o.needsUpdate!==!1&&a.setValue(A,o.value,i)}}static seqWithValue(A,e){const t=[];for(let i=0,r=A.length;i!==r;++i){const s=A[i];s.id in e&&t.push(s)}return t}}function Nl(n,A,e){const t=n.createShader(A);return n.shaderSource(t,e),n.compileShader(t),t}let Z0=0;function q0(n,A){const e=n.split(`
`),t=[],i=Math.max(A-6,0),r=Math.min(A+6,e.length);for(let s=i;s<r;s++){const a=s+1;t.push(`${a===A?">":" "} ${a}: ${e[s]}`)}return t.join(`
`)}function j0(n){switch(n){case gt:return["Linear","( value )"];case MA:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function Gl(n,A,e){const t=n.getShaderParameter(A,n.COMPILE_STATUS),i=n.getShaderInfoLog(A).trim();if(t&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const s=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+q0(n.getShaderSource(A),s)}else return i}function $0(n,A){const e=j0(A);return"vec4 "+n+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Am(n,A){let e;switch(A){case uf:e="Linear";break;case hf:e="Reinhard";break;case ff:e="OptimizedCineon";break;case df:e="ACESFilmic";break;case pf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",A),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function em(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Mi).join(`
`)}function tm(n){const A=[];for(const e in n){const t=n[e];t!==!1&&A.push("#define "+e+" "+t)}return A.join(`
`)}function nm(n,A){const e={},t=n.getProgramParameter(A,n.ACTIVE_ATTRIBUTES);for(let i=0;i<t;i++){const r=n.getActiveAttrib(A,i),s=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[s]={type:r.type,location:n.getAttribLocation(A,s),locationSize:a}}return e}function Mi(n){return n!==""}function Vl(n,A){const e=A.numSpotLightShadows+A.numSpotLightMaps-A.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,A.numDirLights).replace(/NUM_SPOT_LIGHTS/g,A.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,A.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,A.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,A.numPointLights).replace(/NUM_HEMI_LIGHTS/g,A.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,A.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,A.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,A.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,A.numPointLightShadows)}function Kl(n,A){return n.replace(/NUM_CLIPPING_PLANES/g,A.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,A.numClippingPlanes-A.numClipIntersection)}const im=/^[ \t]*#include +<([\w\d./]+)>/gm;function Va(n){return n.replace(im,rm)}function rm(n,A){const e=bA[A];if(e===void 0)throw new Error("Can not resolve #include <"+A+">");return Va(e)}const sm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kl(n){return n.replace(sm,am)}function am(n,A,e,t){let i="";for(let r=parseInt(A);r<parseInt(e);r++)i+=t.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function zl(n){let A="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?A+=`
#define HIGH_PRECISION`:n.precision==="mediump"?A+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(A+=`
#define LOW_PRECISION`),A}function om(n){let A="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Au?A="SHADOWMAP_TYPE_PCF":n.shadowMapType===Vh?A="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Mt&&(A="SHADOWMAP_TYPE_VSM"),A}function lm(n){let A="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ui:case hi:A="ENVMAP_TYPE_CUBE";break;case ms:A="ENVMAP_TYPE_CUBE_UV";break}return A}function cm(n){let A="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case hi:A="ENVMAP_MODE_REFRACTION";break}return A}function um(n){let A="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case nu:A="ENVMAP_BLENDING_MULTIPLY";break;case lf:A="ENVMAP_BLENDING_MIX";break;case cf:A="ENVMAP_BLENDING_ADD";break}return A}function hm(n){const A=n.envMapCubeUVHeight;if(A===null)return null;const e=Math.log2(A)-2,t=1/A;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:t,maxMip:e}}function fm(n,A,e,t){const i=n.getContext(),r=e.defines;let s=e.vertexShader,a=e.fragmentShader;const o=om(e),l=lm(e),c=cm(e),u=um(e),h=hm(e),d=e.isWebGL2?"":em(e),g=tm(r),m=i.createProgram();let p,f,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=[g].filter(Mi).join(`
`),p.length>0&&(p+=`
`),f=[d,g].filter(Mi).join(`
`),f.length>0&&(f+=`
`)):(p=[zl(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+o:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mi).join(`
`),f=[d,zl(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+o:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==bt?"#define TONE_MAPPING":"",e.toneMapping!==bt?bA.tonemapping_pars_fragment:"",e.toneMapping!==bt?Am("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",bA.encodings_pars_fragment,$0("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Mi).join(`
`)),s=Va(s),s=Vl(s,e),s=Kl(s,e),a=Va(a),a=Vl(a,e),a=Kl(a,e),s=kl(s),a=kl(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===cl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===cl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const E=_+p+s,x=_+f+a,w=Nl(i,i.VERTEX_SHADER,E),U=Nl(i,i.FRAGMENT_SHADER,x);if(i.attachShader(m,w),i.attachShader(m,U),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),n.debug.checkShaderErrors){const B=i.getProgramInfoLog(m).trim(),M=i.getShaderInfoLog(w).trim(),X=i.getShaderInfoLog(U).trim();let V=!0,Q=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(i,m,w,U);else{const D=Gl(i,w,"vertex"),N=Gl(i,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+B+`
`+D+`
`+N)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(M===""||X==="")&&(Q=!1);Q&&(this.diagnostics={runnable:V,programLog:B,vertexShader:{log:M,prefix:p},fragmentShader:{log:X,prefix:f}})}i.deleteShader(w),i.deleteShader(U);let S;this.getUniforms=function(){return S===void 0&&(S=new As(i,m)),S};let R;return this.getAttributes=function(){return R===void 0&&(R=nm(i,m)),R},this.destroy=function(){t.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.name=e.shaderName,this.id=Z0++,this.cacheKey=A,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=U,this}let dm=0;class pm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(A){const e=A.vertexShader,t=A.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(t),s=this._getShaderCacheForMaterial(A);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(A){const e=this.materialCache.get(A);for(const t of e)t.usedTimes--,t.usedTimes===0&&this.shaderCache.delete(t.code);return this.materialCache.delete(A),this}getVertexShaderID(A){return this._getShaderStage(A.vertexShader).id}getFragmentShaderID(A){return this._getShaderStage(A.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(A){const e=this.materialCache;let t=e.get(A);return t===void 0&&(t=new Set,e.set(A,t)),t}_getShaderStage(A){const e=this.shaderCache;let t=e.get(A);return t===void 0&&(t=new gm(A),e.set(A,t)),t}}class gm{constructor(A){this.id=dm++,this.code=A,this.usedTimes=0}}function mm(n,A,e,t,i,r,s){const a=new hu,o=new pm,l=[],c=i.isWebGL2,u=i.logarithmicDepthBuffer,h=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(B){return B===1?"uv1":B===2?"uv2":B===3?"uv3":"uv"}function p(B,M,X,V,Q){const D=V.fog,N=Q.geometry,q=B.isMeshStandardMaterial?V.environment:null,K=(B.isMeshStandardMaterial?e:A).get(B.envMap||q),W=K&&K.mapping===ms?K.image.height:null,$=g[B.type];B.precision!==null&&(d=i.getMaxPrecision(B.precision),d!==B.precision&&console.warn("THREE.WebGLProgram.getParameters:",B.precision,"not supported, using",d,"instead."));const j=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,pA=j!==void 0?j.length:0;let nA=0;N.morphAttributes.position!==void 0&&(nA=1),N.morphAttributes.normal!==void 0&&(nA=2),N.morphAttributes.color!==void 0&&(nA=3);let O,J,iA,rA;if($){const zA=dt[$];O=zA.vertexShader,J=zA.fragmentShader}else O=B.vertexShader,J=B.fragmentShader,o.update(B),iA=o.getVertexShaderID(B),rA=o.getFragmentShaderID(B);const b=n.getRenderTarget(),xA=Q.isInstancedMesh===!0,EA=!!B.map,sA=!!B.matcap,_A=!!K,NA=!!B.aoMap,wA=!!B.lightMap,yA=!!B.bumpMap,jA=!!B.normalMap,qA=!!B.displacementMap,re=!!B.emissiveMap,$A=!!B.metalnessMap,OA=!!B.roughnessMap,XA=B.clearcoat>0,ve=B.iridescence>0,F=B.sheen>0,v=B.transmission>0,G=XA&&!!B.clearcoatMap,AA=XA&&!!B.clearcoatNormalMap,tA=XA&&!!B.clearcoatRoughnessMap,oA=ve&&!!B.iridescenceMap,y=ve&&!!B.iridescenceThicknessMap,Z=F&&!!B.sheenColorMap,P=F&&!!B.sheenRoughnessMap,lA=!!B.specularMap,dA=!!B.specularColorMap,mA=!!B.specularIntensityMap,hA=v&&!!B.transmissionMap,gA=v&&!!B.thicknessMap,UA=!!B.gradientMap,TA=!!B.alphaMap,Ae=B.alphaTest>0,T=!!B.extensions,k=!!N.attributes.uv1,eA=!!N.attributes.uv2,fA=!!N.attributes.uv3;return{isWebGL2:c,shaderID:$,shaderName:B.type,vertexShader:O,fragmentShader:J,defines:B.defines,customVertexShaderID:iA,customFragmentShaderID:rA,isRawShaderMaterial:B.isRawShaderMaterial===!0,glslVersion:B.glslVersion,precision:d,instancing:xA,instancingColor:xA&&Q.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:b===null?n.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:gt,map:EA,matcap:sA,envMap:_A,envMapMode:_A&&K.mapping,envMapCubeUVHeight:W,aoMap:NA,lightMap:wA,bumpMap:yA,normalMap:jA,displacementMap:h&&qA,emissiveMap:re,normalMapObjectSpace:jA&&B.normalMapType===Rf,normalMapTangentSpace:jA&&B.normalMapType===Lf,metalnessMap:$A,roughnessMap:OA,clearcoat:XA,clearcoatMap:G,clearcoatNormalMap:AA,clearcoatRoughnessMap:tA,iridescence:ve,iridescenceMap:oA,iridescenceThicknessMap:y,sheen:F,sheenColorMap:Z,sheenRoughnessMap:P,specularMap:lA,specularColorMap:dA,specularIntensityMap:mA,transmission:v,transmissionMap:hA,thicknessMap:gA,gradientMap:UA,opaque:B.transparent===!1&&B.blending===ni,alphaMap:TA,alphaTest:Ae,combine:B.combine,mapUv:EA&&m(B.map.channel),aoMapUv:NA&&m(B.aoMap.channel),lightMapUv:wA&&m(B.lightMap.channel),bumpMapUv:yA&&m(B.bumpMap.channel),normalMapUv:jA&&m(B.normalMap.channel),displacementMapUv:qA&&m(B.displacementMap.channel),emissiveMapUv:re&&m(B.emissiveMap.channel),metalnessMapUv:$A&&m(B.metalnessMap.channel),roughnessMapUv:OA&&m(B.roughnessMap.channel),clearcoatMapUv:G&&m(B.clearcoatMap.channel),clearcoatNormalMapUv:AA&&m(B.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tA&&m(B.clearcoatRoughnessMap.channel),iridescenceMapUv:oA&&m(B.iridescenceMap.channel),iridescenceThicknessMapUv:y&&m(B.iridescenceThicknessMap.channel),sheenColorMapUv:Z&&m(B.sheenColorMap.channel),sheenRoughnessMapUv:P&&m(B.sheenRoughnessMap.channel),specularMapUv:lA&&m(B.specularMap.channel),specularColorMapUv:dA&&m(B.specularColorMap.channel),specularIntensityMapUv:mA&&m(B.specularIntensityMap.channel),transmissionMapUv:hA&&m(B.transmissionMap.channel),thicknessMapUv:gA&&m(B.thicknessMap.channel),alphaMapUv:TA&&m(B.alphaMap.channel),vertexTangents:jA&&!!N.attributes.tangent,vertexColors:B.vertexColors,vertexAlphas:B.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:k,vertexUv2s:eA,vertexUv3s:fA,pointsUvs:Q.isPoints===!0&&!!N.attributes.uv&&(EA||TA),fog:!!D,useFog:B.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:B.flatShading===!0,sizeAttenuation:B.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:Q.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:pA,morphTextureStride:nA,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:B.dithering,shadowMapEnabled:n.shadowMap.enabled&&X.length>0,shadowMapType:n.shadowMap.type,toneMapping:B.toneMapped?n.toneMapping:bt,useLegacyLights:n.useLegacyLights,premultipliedAlpha:B.premultipliedAlpha,doubleSided:B.side===yt,flipSided:B.side===Re,useDepthPacking:B.depthPacking>=0,depthPacking:B.depthPacking||0,index0AttributeName:B.index0AttributeName,extensionDerivatives:T&&B.extensions.derivatives===!0,extensionFragDepth:T&&B.extensions.fragDepth===!0,extensionDrawBuffers:T&&B.extensions.drawBuffers===!0,extensionShaderTextureLOD:T&&B.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:c||t.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||t.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||t.has("EXT_shader_texture_lod"),customProgramCacheKey:B.customProgramCacheKey()}}function f(B){const M=[];if(B.shaderID?M.push(B.shaderID):(M.push(B.customVertexShaderID),M.push(B.customFragmentShaderID)),B.defines!==void 0)for(const X in B.defines)M.push(X),M.push(B.defines[X]);return B.isRawShaderMaterial===!1&&(_(M,B),E(M,B),M.push(n.outputColorSpace)),M.push(B.customProgramCacheKey),M.join()}function _(B,M){B.push(M.precision),B.push(M.outputColorSpace),B.push(M.envMapMode),B.push(M.envMapCubeUVHeight),B.push(M.mapUv),B.push(M.alphaMapUv),B.push(M.lightMapUv),B.push(M.aoMapUv),B.push(M.bumpMapUv),B.push(M.normalMapUv),B.push(M.displacementMapUv),B.push(M.emissiveMapUv),B.push(M.metalnessMapUv),B.push(M.roughnessMapUv),B.push(M.clearcoatMapUv),B.push(M.clearcoatNormalMapUv),B.push(M.clearcoatRoughnessMapUv),B.push(M.iridescenceMapUv),B.push(M.iridescenceThicknessMapUv),B.push(M.sheenColorMapUv),B.push(M.sheenRoughnessMapUv),B.push(M.specularMapUv),B.push(M.specularColorMapUv),B.push(M.specularIntensityMapUv),B.push(M.transmissionMapUv),B.push(M.thicknessMapUv),B.push(M.combine),B.push(M.fogExp2),B.push(M.sizeAttenuation),B.push(M.morphTargetsCount),B.push(M.morphAttributeCount),B.push(M.numDirLights),B.push(M.numPointLights),B.push(M.numSpotLights),B.push(M.numSpotLightMaps),B.push(M.numHemiLights),B.push(M.numRectAreaLights),B.push(M.numDirLightShadows),B.push(M.numPointLightShadows),B.push(M.numSpotLightShadows),B.push(M.numSpotLightShadowsWithMaps),B.push(M.shadowMapType),B.push(M.toneMapping),B.push(M.numClippingPlanes),B.push(M.numClipIntersection),B.push(M.depthPacking)}function E(B,M){a.disableAll(),M.isWebGL2&&a.enable(0),M.supportsVertexTextures&&a.enable(1),M.instancing&&a.enable(2),M.instancingColor&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),B.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.useLegacyLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),B.push(a.mask)}function x(B){const M=g[B.type];let X;if(M){const V=dt[M];X=rd.clone(V.uniforms)}else X=B.uniforms;return X}function w(B,M){let X;for(let V=0,Q=l.length;V<Q;V++){const D=l[V];if(D.cacheKey===M){X=D,++X.usedTimes;break}}return X===void 0&&(X=new fm(n,M,B,r),l.push(X)),X}function U(B){if(--B.usedTimes===0){const M=l.indexOf(B);l[M]=l[l.length-1],l.pop(),B.destroy()}}function S(B){o.remove(B)}function R(){o.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:x,acquireProgram:w,releaseProgram:U,releaseShaderCache:S,programs:l,dispose:R}}function Bm(){let n=new WeakMap;function A(r){let s=n.get(r);return s===void 0&&(s={},n.set(r,s)),s}function e(r){n.delete(r)}function t(r,s,a){n.get(r)[s]=a}function i(){n=new WeakMap}return{get:A,remove:e,update:t,dispose:i}}function wm(n,A){return n.groupOrder!==A.groupOrder?n.groupOrder-A.groupOrder:n.renderOrder!==A.renderOrder?n.renderOrder-A.renderOrder:n.material.id!==A.material.id?n.material.id-A.material.id:n.z!==A.z?n.z-A.z:n.id-A.id}function Wl(n,A){return n.groupOrder!==A.groupOrder?n.groupOrder-A.groupOrder:n.renderOrder!==A.renderOrder?n.renderOrder-A.renderOrder:n.z!==A.z?A.z-n.z:n.id-A.id}function Xl(){const n=[];let A=0;const e=[],t=[],i=[];function r(){A=0,e.length=0,t.length=0,i.length=0}function s(u,h,d,g,m,p){let f=n[A];return f===void 0?(f={id:u.id,object:u,geometry:h,material:d,groupOrder:g,renderOrder:u.renderOrder,z:m,group:p},n[A]=f):(f.id=u.id,f.object=u,f.geometry=h,f.material=d,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=m,f.group=p),A++,f}function a(u,h,d,g,m,p){const f=s(u,h,d,g,m,p);d.transmission>0?t.push(f):d.transparent===!0?i.push(f):e.push(f)}function o(u,h,d,g,m,p){const f=s(u,h,d,g,m,p);d.transmission>0?t.unshift(f):d.transparent===!0?i.unshift(f):e.unshift(f)}function l(u,h){e.length>1&&e.sort(u||wm),t.length>1&&t.sort(h||Wl),i.length>1&&i.sort(h||Wl)}function c(){for(let u=A,h=n.length;u<h;u++){const d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:t,transparent:i,init:r,push:a,unshift:o,finish:c,sort:l}}function vm(){let n=new WeakMap;function A(t,i){const r=n.get(t);let s;return r===void 0?(s=new Xl,n.set(t,[s])):i>=r.length?(s=new Xl,r.push(s)):s=r[i],s}function e(){n=new WeakMap}return{get:A,dispose:e}}function _m(){const n={};return{get:function(A){if(n[A.id]!==void 0)return n[A.id];let e;switch(A.type){case"DirectionalLight":e={direction:new L,color:new KA};break;case"SpotLight":e={position:new L,direction:new L,color:new KA,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new KA,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new KA,groundColor:new KA};break;case"RectAreaLight":e={color:new KA,position:new L,halfWidth:new L,halfHeight:new L};break}return n[A.id]=e,e}}}function Cm(){const n={};return{get:function(A){if(n[A.id]!==void 0)return n[A.id];let e;switch(A.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new LA};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new LA};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new LA,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[A.id]=e,e}}}let Em=0;function xm(n,A){return(A.castShadow?2:0)-(n.castShadow?2:0)+(A.map?1:0)-(n.map?1:0)}function Um(n,A){const e=new _m,t=Cm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)i.probe.push(new L);const r=new L,s=new pe,a=new pe;function o(c,u){let h=0,d=0,g=0;for(let X=0;X<9;X++)i.probe[X].set(0,0,0);let m=0,p=0,f=0,_=0,E=0,x=0,w=0,U=0,S=0,R=0;c.sort(xm);const B=u===!0?Math.PI:1;for(let X=0,V=c.length;X<V;X++){const Q=c[X],D=Q.color,N=Q.intensity,q=Q.distance,K=Q.shadow&&Q.shadow.map?Q.shadow.map.texture:null;if(Q.isAmbientLight)h+=D.r*N*B,d+=D.g*N*B,g+=D.b*N*B;else if(Q.isLightProbe)for(let W=0;W<9;W++)i.probe[W].addScaledVector(Q.sh.coefficients[W],N);else if(Q.isDirectionalLight){const W=e.get(Q);if(W.color.copy(Q.color).multiplyScalar(Q.intensity*B),Q.castShadow){const $=Q.shadow,j=t.get(Q);j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,i.directionalShadow[m]=j,i.directionalShadowMap[m]=K,i.directionalShadowMatrix[m]=Q.shadow.matrix,x++}i.directional[m]=W,m++}else if(Q.isSpotLight){const W=e.get(Q);W.position.setFromMatrixPosition(Q.matrixWorld),W.color.copy(D).multiplyScalar(N*B),W.distance=q,W.coneCos=Math.cos(Q.angle),W.penumbraCos=Math.cos(Q.angle*(1-Q.penumbra)),W.decay=Q.decay,i.spot[f]=W;const $=Q.shadow;if(Q.map&&(i.spotLightMap[S]=Q.map,S++,$.updateMatrices(Q),Q.castShadow&&R++),i.spotLightMatrix[f]=$.matrix,Q.castShadow){const j=t.get(Q);j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,i.spotShadow[f]=j,i.spotShadowMap[f]=K,U++}f++}else if(Q.isRectAreaLight){const W=e.get(Q);W.color.copy(D).multiplyScalar(N),W.halfWidth.set(Q.width*.5,0,0),W.halfHeight.set(0,Q.height*.5,0),i.rectArea[_]=W,_++}else if(Q.isPointLight){const W=e.get(Q);if(W.color.copy(Q.color).multiplyScalar(Q.intensity*B),W.distance=Q.distance,W.decay=Q.decay,Q.castShadow){const $=Q.shadow,j=t.get(Q);j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,j.shadowCameraNear=$.camera.near,j.shadowCameraFar=$.camera.far,i.pointShadow[p]=j,i.pointShadowMap[p]=K,i.pointShadowMatrix[p]=Q.shadow.matrix,w++}i.point[p]=W,p++}else if(Q.isHemisphereLight){const W=e.get(Q);W.skyColor.copy(Q.color).multiplyScalar(N*B),W.groundColor.copy(Q.groundColor).multiplyScalar(N*B),i.hemi[E]=W,E++}}_>0&&(A.isWebGL2||n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=aA.LTC_FLOAT_1,i.rectAreaLTC2=aA.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=aA.LTC_HALF_1,i.rectAreaLTC2=aA.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=g;const M=i.hash;(M.directionalLength!==m||M.pointLength!==p||M.spotLength!==f||M.rectAreaLength!==_||M.hemiLength!==E||M.numDirectionalShadows!==x||M.numPointShadows!==w||M.numSpotShadows!==U||M.numSpotMaps!==S)&&(i.directional.length=m,i.spot.length=f,i.rectArea.length=_,i.point.length=p,i.hemi.length=E,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=U,i.spotShadowMap.length=U,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=U+S-R,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=R,M.directionalLength=m,M.pointLength=p,M.spotLength=f,M.rectAreaLength=_,M.hemiLength=E,M.numDirectionalShadows=x,M.numPointShadows=w,M.numSpotShadows=U,M.numSpotMaps=S,i.version=Em++)}function l(c,u){let h=0,d=0,g=0,m=0,p=0;const f=u.matrixWorldInverse;for(let _=0,E=c.length;_<E;_++){const x=c[_];if(x.isDirectionalLight){const w=i.directional[h];w.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(f),h++}else if(x.isSpotLight){const w=i.spot[g];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(f),w.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(f),g++}else if(x.isRectAreaLight){const w=i.rectArea[m];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(f),a.identity(),s.copy(x.matrixWorld),s.premultiply(f),a.extractRotation(s),w.halfWidth.set(x.width*.5,0,0),w.halfHeight.set(0,x.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),m++}else if(x.isPointLight){const w=i.point[d];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(f),d++}else if(x.isHemisphereLight){const w=i.hemi[p];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(f),p++}}}return{setup:o,setupView:l,state:i}}function Yl(n,A){const e=new Um(n,A),t=[],i=[];function r(){t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(u){e.setup(t,u)}function l(u){e.setupView(t,u)}return{init:r,state:{lightsArray:t,shadowsArray:i,lights:e},setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Fm(n,A){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Yl(n,A),e.set(r,[o])):s>=a.length?(o=new Yl(n,A),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class Mm extends ws{constructor(A){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(A)}copy(A){return super.copy(A),this.depthPacking=A.depthPacking,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this}}class ym extends ws{constructor(A){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(A)}copy(A){return super.copy(A),this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this}}const Sm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Tm(n,A,e){let t=new wu;const i=new LA,r=new LA,s=new Be,a=new Mm({depthPacking:If}),o=new ym,l={},c=e.maxTextureSize,u={[Yt]:Re,[Re]:Yt,[yt]:yt},h=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new LA},radius:{value:4}},vertexShader:Sm,fragmentShader:bm}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new Zt;g.setAttribute("position",new ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new St(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Au;let f=this.type;this.render=function(w,U,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const R=n.getRenderTarget(),B=n.getActiveCubeFace(),M=n.getActiveMipmapLevel(),X=n.state;X.setBlending(zt),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const V=f!==Mt&&this.type===Mt,Q=f===Mt&&this.type!==Mt;for(let D=0,N=w.length;D<N;D++){const q=w[D],K=q.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;i.copy(K.mapSize);const W=K.getFrameExtents();if(i.multiply(W),r.copy(K.mapSize),(i.x>c||i.y>c)&&(i.x>c&&(r.x=Math.floor(c/W.x),i.x=r.x*W.x,K.mapSize.x=r.x),i.y>c&&(r.y=Math.floor(c/W.y),i.y=r.y*W.y,K.mapSize.y=r.y)),K.map===null||V===!0||Q===!0){const j=this.type!==Mt?{minFilter:Te,magFilter:Te}:{};K.map!==null&&K.map.dispose(),K.map=new Cn(i.x,i.y,j),K.map.texture.name=q.name+".shadowMap",K.camera.updateProjectionMatrix()}n.setRenderTarget(K.map),n.clear();const $=K.getViewportCount();for(let j=0;j<$;j++){const pA=K.getViewport(j);s.set(r.x*pA.x,r.y*pA.y,r.x*pA.z,r.y*pA.w),X.viewport(s),K.updateMatrices(q,j),t=K.getFrustum(),x(U,S,K.camera,q,this.type)}K.isPointLightShadow!==!0&&this.type===Mt&&_(K,S),K.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(R,B,M)};function _(w,U){const S=A.update(m);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Cn(i.x,i.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(U,null,S,h,m,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(U,null,S,d,m,null)}function E(w,U,S,R){let B=null;const M=S.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(M!==void 0)B=M;else if(B=S.isPointLight===!0?o:a,n.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const X=B.uuid,V=U.uuid;let Q=l[X];Q===void 0&&(Q={},l[X]=Q);let D=Q[V];D===void 0&&(D=B.clone(),Q[V]=D),B=D}if(B.visible=U.visible,B.wireframe=U.wireframe,R===Mt?B.side=U.shadowSide!==null?U.shadowSide:U.side:B.side=U.shadowSide!==null?U.shadowSide:u[U.side],B.alphaMap=U.alphaMap,B.alphaTest=U.alphaTest,B.map=U.map,B.clipShadows=U.clipShadows,B.clippingPlanes=U.clippingPlanes,B.clipIntersection=U.clipIntersection,B.displacementMap=U.displacementMap,B.displacementScale=U.displacementScale,B.displacementBias=U.displacementBias,B.wireframeLinewidth=U.wireframeLinewidth,B.linewidth=U.linewidth,S.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const X=n.properties.get(B);X.light=S}return B}function x(w,U,S,R,B){if(w.visible===!1)return;if(w.layers.test(U.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&B===Mt)&&(!w.frustumCulled||t.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,w.matrixWorld);const V=A.update(w),Q=w.material;if(Array.isArray(Q)){const D=V.groups;for(let N=0,q=D.length;N<q;N++){const K=D[N],W=Q[K.materialIndex];if(W&&W.visible){const $=E(w,W,R,B);n.renderBufferDirect(S,null,V,$,w,K)}}}else if(Q.visible){const D=E(w,Q,R,B);n.renderBufferDirect(S,null,V,D,w,null)}}const X=w.children;for(let V=0,Q=X.length;V<Q;V++)x(X[V],U,S,R,B)}}function Qm(n,A,e){const t=e.isWebGL2;function i(){let T=!1;const k=new Be;let eA=null;const fA=new Be(0,0,0,0);return{setMask:function(BA){eA!==BA&&!T&&(n.colorMask(BA,BA,BA,BA),eA=BA)},setLocked:function(BA){T=BA},setClear:function(BA,zA,WA,_e,It){It===!0&&(BA*=_e,zA*=_e,WA*=_e),k.set(BA,zA,WA,_e),fA.equals(k)===!1&&(n.clearColor(BA,zA,WA,_e),fA.copy(k))},reset:function(){T=!1,eA=null,fA.set(-1,0,0,0)}}}function r(){let T=!1,k=null,eA=null,fA=null;return{setTest:function(BA){BA?b(n.DEPTH_TEST):xA(n.DEPTH_TEST)},setMask:function(BA){k!==BA&&!T&&(n.depthMask(BA),k=BA)},setFunc:function(BA){if(eA!==BA){switch(BA){case ef:n.depthFunc(n.NEVER);break;case tf:n.depthFunc(n.ALWAYS);break;case nf:n.depthFunc(n.LESS);break;case Ra:n.depthFunc(n.LEQUAL);break;case rf:n.depthFunc(n.EQUAL);break;case sf:n.depthFunc(n.GEQUAL);break;case af:n.depthFunc(n.GREATER);break;case of:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}eA=BA}},setLocked:function(BA){T=BA},setClear:function(BA){fA!==BA&&(n.clearDepth(BA),fA=BA)},reset:function(){T=!1,k=null,eA=null,fA=null}}}function s(){let T=!1,k=null,eA=null,fA=null,BA=null,zA=null,WA=null,_e=null,It=null;return{setTest:function(ee){T||(ee?b(n.STENCIL_TEST):xA(n.STENCIL_TEST))},setMask:function(ee){k!==ee&&!T&&(n.stencilMask(ee),k=ee)},setFunc:function(ee,Ke,ct){(eA!==ee||fA!==Ke||BA!==ct)&&(n.stencilFunc(ee,Ke,ct),eA=ee,fA=Ke,BA=ct)},setOp:function(ee,Ke,ct){(zA!==ee||WA!==Ke||_e!==ct)&&(n.stencilOp(ee,Ke,ct),zA=ee,WA=Ke,_e=ct)},setLocked:function(ee){T=ee},setClear:function(ee){It!==ee&&(n.clearStencil(ee),It=ee)},reset:function(){T=!1,k=null,eA=null,fA=null,BA=null,zA=null,WA=null,_e=null,It=null}}}const a=new i,o=new r,l=new s,c=new WeakMap,u=new WeakMap;let h={},d={},g=new WeakMap,m=[],p=null,f=!1,_=null,E=null,x=null,w=null,U=null,S=null,R=null,B=!1,M=null,X=null,V=null,Q=null,D=null;const N=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,K=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(W)[1]),q=K>=1):W.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),q=K>=2);let $=null,j={};const pA=n.getParameter(n.SCISSOR_BOX),nA=n.getParameter(n.VIEWPORT),O=new Be().fromArray(pA),J=new Be().fromArray(nA);function iA(T,k,eA,fA){const BA=new Uint8Array(4),zA=n.createTexture();n.bindTexture(T,zA),n.texParameteri(T,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(T,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let WA=0;WA<eA;WA++)t&&(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)?n.texImage3D(k,0,n.RGBA,1,1,fA,0,n.RGBA,n.UNSIGNED_BYTE,BA):n.texImage2D(k+WA,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,BA);return zA}const rA={};rA[n.TEXTURE_2D]=iA(n.TEXTURE_2D,n.TEXTURE_2D,1),rA[n.TEXTURE_CUBE_MAP]=iA(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),t&&(rA[n.TEXTURE_2D_ARRAY]=iA(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),rA[n.TEXTURE_3D]=iA(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),o.setClear(1),l.setClear(0),b(n.DEPTH_TEST),o.setFunc(Ra),qA(!1),re(Io),b(n.CULL_FACE),yA(zt);function b(T){h[T]!==!0&&(n.enable(T),h[T]=!0)}function xA(T){h[T]!==!1&&(n.disable(T),h[T]=!1)}function EA(T,k){return d[T]!==k?(n.bindFramebuffer(T,k),d[T]=k,t&&(T===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=k),T===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=k)),!0):!1}function sA(T,k){let eA=m,fA=!1;if(T)if(eA=g.get(k),eA===void 0&&(eA=[],g.set(k,eA)),T.isWebGLMultipleRenderTargets){const BA=T.texture;if(eA.length!==BA.length||eA[0]!==n.COLOR_ATTACHMENT0){for(let zA=0,WA=BA.length;zA<WA;zA++)eA[zA]=n.COLOR_ATTACHMENT0+zA;eA.length=BA.length,fA=!0}}else eA[0]!==n.COLOR_ATTACHMENT0&&(eA[0]=n.COLOR_ATTACHMENT0,fA=!0);else eA[0]!==n.BACK&&(eA[0]=n.BACK,fA=!0);fA&&(e.isWebGL2?n.drawBuffers(eA):A.get("WEBGL_draw_buffers").drawBuffersWEBGL(eA))}function _A(T){return p!==T?(n.useProgram(T),p=T,!0):!1}const NA={[qn]:n.FUNC_ADD,[kh]:n.FUNC_SUBTRACT,[zh]:n.FUNC_REVERSE_SUBTRACT};if(t)NA[Do]=n.MIN,NA[Po]=n.MAX;else{const T=A.get("EXT_blend_minmax");T!==null&&(NA[Do]=T.MIN_EXT,NA[Po]=T.MAX_EXT)}const wA={[Wh]:n.ZERO,[Xh]:n.ONE,[Yh]:n.SRC_COLOR,[eu]:n.SRC_ALPHA,[Af]:n.SRC_ALPHA_SATURATE,[jh]:n.DST_COLOR,[Zh]:n.DST_ALPHA,[Jh]:n.ONE_MINUS_SRC_COLOR,[tu]:n.ONE_MINUS_SRC_ALPHA,[$h]:n.ONE_MINUS_DST_COLOR,[qh]:n.ONE_MINUS_DST_ALPHA};function yA(T,k,eA,fA,BA,zA,WA,_e){if(T===zt){f===!0&&(xA(n.BLEND),f=!1);return}if(f===!1&&(b(n.BLEND),f=!0),T!==Kh){if(T!==_||_e!==B){if((E!==qn||U!==qn)&&(n.blendEquation(n.FUNC_ADD),E=qn,U=qn),_e)switch(T){case ni:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Lo:n.blendFunc(n.ONE,n.ONE);break;case Ro:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ho:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}else switch(T){case ni:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Lo:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ro:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ho:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}x=null,w=null,S=null,R=null,_=T,B=_e}return}BA=BA||k,zA=zA||eA,WA=WA||fA,(k!==E||BA!==U)&&(n.blendEquationSeparate(NA[k],NA[BA]),E=k,U=BA),(eA!==x||fA!==w||zA!==S||WA!==R)&&(n.blendFuncSeparate(wA[eA],wA[fA],wA[zA],wA[WA]),x=eA,w=fA,S=zA,R=WA),_=T,B=!1}function jA(T,k){T.side===yt?xA(n.CULL_FACE):b(n.CULL_FACE);let eA=T.side===Re;k&&(eA=!eA),qA(eA),T.blending===ni&&T.transparent===!1?yA(zt):yA(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.premultipliedAlpha),o.setFunc(T.depthFunc),o.setTest(T.depthTest),o.setMask(T.depthWrite),a.setMask(T.colorWrite);const fA=T.stencilWrite;l.setTest(fA),fA&&(l.setMask(T.stencilWriteMask),l.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),l.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),OA(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?b(n.SAMPLE_ALPHA_TO_COVERAGE):xA(n.SAMPLE_ALPHA_TO_COVERAGE)}function qA(T){M!==T&&(T?n.frontFace(n.CW):n.frontFace(n.CCW),M=T)}function re(T){T!==Nh?(b(n.CULL_FACE),T!==X&&(T===Io?n.cullFace(n.BACK):T===Gh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xA(n.CULL_FACE),X=T}function $A(T){T!==V&&(q&&n.lineWidth(T),V=T)}function OA(T,k,eA){T?(b(n.POLYGON_OFFSET_FILL),(Q!==k||D!==eA)&&(n.polygonOffset(k,eA),Q=k,D=eA)):xA(n.POLYGON_OFFSET_FILL)}function XA(T){T?b(n.SCISSOR_TEST):xA(n.SCISSOR_TEST)}function ve(T){T===void 0&&(T=n.TEXTURE0+N-1),$!==T&&(n.activeTexture(T),$=T)}function F(T,k,eA){eA===void 0&&($===null?eA=n.TEXTURE0+N-1:eA=$);let fA=j[eA];fA===void 0&&(fA={type:void 0,texture:void 0},j[eA]=fA),(fA.type!==T||fA.texture!==k)&&($!==eA&&(n.activeTexture(eA),$=eA),n.bindTexture(T,k||rA[T]),fA.type=T,fA.texture=k)}function v(){const T=j[$];T!==void 0&&T.type!==void 0&&(n.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function G(){try{n.compressedTexImage2D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function AA(){try{n.compressedTexImage3D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function tA(){try{n.texSubImage2D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function oA(){try{n.texSubImage3D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function y(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Z(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function P(){try{n.texStorage2D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function lA(){try{n.texStorage3D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function dA(){try{n.texImage2D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function mA(){try{n.texImage3D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function hA(T){O.equals(T)===!1&&(n.scissor(T.x,T.y,T.z,T.w),O.copy(T))}function gA(T){J.equals(T)===!1&&(n.viewport(T.x,T.y,T.z,T.w),J.copy(T))}function UA(T,k){let eA=u.get(k);eA===void 0&&(eA=new WeakMap,u.set(k,eA));let fA=eA.get(T);fA===void 0&&(fA=n.getUniformBlockIndex(k,T.name),eA.set(T,fA))}function TA(T,k){const fA=u.get(k).get(T);c.get(k)!==fA&&(n.uniformBlockBinding(k,fA,T.__bindingPointIndex),c.set(k,fA))}function Ae(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),t===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},$=null,j={},d={},g=new WeakMap,m=[],p=null,f=!1,_=null,E=null,x=null,w=null,U=null,S=null,R=null,B=!1,M=null,X=null,V=null,Q=null,D=null,O.set(0,0,n.canvas.width,n.canvas.height),J.set(0,0,n.canvas.width,n.canvas.height),a.reset(),o.reset(),l.reset()}return{buffers:{color:a,depth:o,stencil:l},enable:b,disable:xA,bindFramebuffer:EA,drawBuffers:sA,useProgram:_A,setBlending:yA,setMaterial:jA,setFlipSided:qA,setCullFace:re,setLineWidth:$A,setPolygonOffset:OA,setScissorTest:XA,activeTexture:ve,bindTexture:F,unbindTexture:v,compressedTexImage2D:G,compressedTexImage3D:AA,texImage2D:dA,texImage3D:mA,updateUBOMapping:UA,uniformBlockBinding:TA,texStorage2D:P,texStorage3D:lA,texSubImage2D:tA,texSubImage3D:oA,compressedTexSubImage2D:y,compressedTexSubImage3D:Z,scissor:hA,viewport:gA,reset:Ae}}function Im(n,A,e,t,i,r,s){const a=i.isWebGL2,o=i.maxTextures,l=i.maxCubemapSize,c=i.maxTextureSize,u=i.maxSamples,h=A.has("WEBGL_multisampled_render_to_texture")?A.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(F,v){return f?new OffscreenCanvas(F,v):rs("canvas")}function E(F,v,G,AA){let tA=1;if((F.width>AA||F.height>AA)&&(tA=AA/Math.max(F.width,F.height)),tA<1||v===!0)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap){const oA=v?Pf:Math.floor,y=oA(tA*F.width),Z=oA(tA*F.height);m===void 0&&(m=_(y,Z));const P=G?_(y,Z):m;return P.width=y,P.height=Z,P.getContext("2d").drawImage(F,0,0,y,Z),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+F.width+"x"+F.height+") to ("+y+"x"+Z+")."),P}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+F.width+"x"+F.height+")."),F;return F}function x(F){return ul(F.width)&&ul(F.height)}function w(F){return a?!1:F.wrapS!==rt||F.wrapT!==rt||F.minFilter!==Te&&F.minFilter!==We}function U(F,v){return F.generateMipmaps&&v&&F.minFilter!==Te&&F.minFilter!==We}function S(F){n.generateMipmap(F)}function R(F,v,G,AA,tA=!1){if(a===!1)return v;if(F!==null){if(n[F]!==void 0)return n[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let oA=v;return v===n.RED&&(G===n.FLOAT&&(oA=n.R32F),G===n.HALF_FLOAT&&(oA=n.R16F),G===n.UNSIGNED_BYTE&&(oA=n.R8)),v===n.RG&&(G===n.FLOAT&&(oA=n.RG32F),G===n.HALF_FLOAT&&(oA=n.RG16F),G===n.UNSIGNED_BYTE&&(oA=n.RG8)),v===n.RGBA&&(G===n.FLOAT&&(oA=n.RGBA32F),G===n.HALF_FLOAT&&(oA=n.RGBA16F),G===n.UNSIGNED_BYTE&&(oA=AA===MA&&tA===!1?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(oA=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(oA=n.RGB5_A1)),(oA===n.R16F||oA===n.R32F||oA===n.RG16F||oA===n.RG32F||oA===n.RGBA16F||oA===n.RGBA32F)&&A.get("EXT_color_buffer_float"),oA}function B(F,v,G){return U(F,G)===!0||F.isFramebufferTexture&&F.minFilter!==Te&&F.minFilter!==We?Math.log2(Math.max(v.width,v.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?v.mipmaps.length:1}function M(F){return F===Te||F===Oo||F===Hs?n.NEAREST:n.LINEAR}function X(F){const v=F.target;v.removeEventListener("dispose",X),Q(v),v.isVideoTexture&&g.delete(v)}function V(F){const v=F.target;v.removeEventListener("dispose",V),N(v)}function Q(F){const v=t.get(F);if(v.__webglInit===void 0)return;const G=F.source,AA=p.get(G);if(AA){const tA=AA[v.__cacheKey];tA.usedTimes--,tA.usedTimes===0&&D(F),Object.keys(AA).length===0&&p.delete(G)}t.remove(F)}function D(F){const v=t.get(F);n.deleteTexture(v.__webglTexture);const G=F.source,AA=p.get(G);delete AA[v.__cacheKey],s.memory.textures--}function N(F){const v=F.texture,G=t.get(F),AA=t.get(v);if(AA.__webglTexture!==void 0&&(n.deleteTexture(AA.__webglTexture),s.memory.textures--),F.depthTexture&&F.depthTexture.dispose(),F.isWebGLCubeRenderTarget)for(let tA=0;tA<6;tA++)n.deleteFramebuffer(G.__webglFramebuffer[tA]),G.__webglDepthbuffer&&n.deleteRenderbuffer(G.__webglDepthbuffer[tA]);else{if(n.deleteFramebuffer(G.__webglFramebuffer),G.__webglDepthbuffer&&n.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&n.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let tA=0;tA<G.__webglColorRenderbuffer.length;tA++)G.__webglColorRenderbuffer[tA]&&n.deleteRenderbuffer(G.__webglColorRenderbuffer[tA]);G.__webglDepthRenderbuffer&&n.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(F.isWebGLMultipleRenderTargets)for(let tA=0,oA=v.length;tA<oA;tA++){const y=t.get(v[tA]);y.__webglTexture&&(n.deleteTexture(y.__webglTexture),s.memory.textures--),t.remove(v[tA])}t.remove(v),t.remove(F)}let q=0;function K(){q=0}function W(){const F=q;return F>=o&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+o),q+=1,F}function $(F){const v=[];return v.push(F.wrapS),v.push(F.wrapT),v.push(F.wrapR||0),v.push(F.magFilter),v.push(F.minFilter),v.push(F.anisotropy),v.push(F.internalFormat),v.push(F.format),v.push(F.type),v.push(F.generateMipmaps),v.push(F.premultiplyAlpha),v.push(F.flipY),v.push(F.unpackAlignment),v.push(F.colorSpace),v.join()}function j(F,v){const G=t.get(F);if(F.isVideoTexture&&XA(F),F.isRenderTargetTexture===!1&&F.version>0&&G.__version!==F.version){const AA=F.image;if(AA===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(AA.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xA(G,F,v);return}}e.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+v)}function pA(F,v){const G=t.get(F);if(F.version>0&&G.__version!==F.version){xA(G,F,v);return}e.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+v)}function nA(F,v){const G=t.get(F);if(F.version>0&&G.__version!==F.version){xA(G,F,v);return}e.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+v)}function O(F,v){const G=t.get(F);if(F.version>0&&G.__version!==F.version){EA(G,F,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+v)}const J={[Pa]:n.REPEAT,[rt]:n.CLAMP_TO_EDGE,[Oa]:n.MIRRORED_REPEAT},iA={[Te]:n.NEAREST,[Oo]:n.NEAREST_MIPMAP_NEAREST,[Hs]:n.NEAREST_MIPMAP_LINEAR,[We]:n.LINEAR,[gf]:n.LINEAR_MIPMAP_NEAREST,[zi]:n.LINEAR_MIPMAP_LINEAR};function rA(F,v,G){if(G?(n.texParameteri(F,n.TEXTURE_WRAP_S,J[v.wrapS]),n.texParameteri(F,n.TEXTURE_WRAP_T,J[v.wrapT]),(F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY)&&n.texParameteri(F,n.TEXTURE_WRAP_R,J[v.wrapR]),n.texParameteri(F,n.TEXTURE_MAG_FILTER,iA[v.magFilter]),n.texParameteri(F,n.TEXTURE_MIN_FILTER,iA[v.minFilter])):(n.texParameteri(F,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(F,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY)&&n.texParameteri(F,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(v.wrapS!==rt||v.wrapT!==rt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(F,n.TEXTURE_MAG_FILTER,M(v.magFilter)),n.texParameteri(F,n.TEXTURE_MIN_FILTER,M(v.minFilter)),v.minFilter!==Te&&v.minFilter!==We&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.has("EXT_texture_filter_anisotropic")===!0){const AA=A.get("EXT_texture_filter_anisotropic");if(v.magFilter===Te||v.minFilter!==Hs&&v.minFilter!==zi||v.type===cn&&A.has("OES_texture_float_linear")===!1||a===!1&&v.type===Wi&&A.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||t.get(v).__currentAnisotropy)&&(n.texParameterf(F,AA.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),t.get(v).__currentAnisotropy=v.anisotropy)}}function b(F,v){let G=!1;F.__webglInit===void 0&&(F.__webglInit=!0,v.addEventListener("dispose",X));const AA=v.source;let tA=p.get(AA);tA===void 0&&(tA={},p.set(AA,tA));const oA=$(v);if(oA!==F.__cacheKey){tA[oA]===void 0&&(tA[oA]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,G=!0),tA[oA].usedTimes++;const y=tA[F.__cacheKey];y!==void 0&&(tA[F.__cacheKey].usedTimes--,y.usedTimes===0&&D(v)),F.__cacheKey=oA,F.__webglTexture=tA[oA].texture}return G}function xA(F,v,G){let AA=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(AA=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(AA=n.TEXTURE_3D);const tA=b(F,v),oA=v.source;e.bindTexture(AA,F.__webglTexture,n.TEXTURE0+G);const y=t.get(oA);if(oA.version!==y.__version||tA===!0){e.activeTexture(n.TEXTURE0+G),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const Z=w(v)&&x(v.image)===!1;let P=E(v.image,Z,!1,c);P=ve(v,P);const lA=x(P)||a,dA=r.convert(v.format,v.colorSpace);let mA=r.convert(v.type),hA=R(v.internalFormat,dA,mA,v.colorSpace);rA(AA,v,lA);let gA;const UA=v.mipmaps,TA=a&&v.isVideoTexture!==!0,Ae=y.__version===void 0||tA===!0,T=B(v,P,lA);if(v.isDepthTexture)hA=n.DEPTH_COMPONENT,a?v.type===cn?hA=n.DEPTH_COMPONENT32F:v.type===ln?hA=n.DEPTH_COMPONENT24:v.type===ii?hA=n.DEPTH24_STENCIL8:hA=n.DEPTH_COMPONENT16:v.type===cn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===gn&&hA===n.DEPTH_COMPONENT&&v.type!==ru&&v.type!==ln&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=ln,mA=r.convert(v.type)),v.format===fi&&hA===n.DEPTH_COMPONENT&&(hA=n.DEPTH_STENCIL,v.type!==ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=ii,mA=r.convert(v.type))),Ae&&(TA?e.texStorage2D(n.TEXTURE_2D,1,hA,P.width,P.height):e.texImage2D(n.TEXTURE_2D,0,hA,P.width,P.height,0,dA,mA,null));else if(v.isDataTexture)if(UA.length>0&&lA){TA&&Ae&&e.texStorage2D(n.TEXTURE_2D,T,hA,UA[0].width,UA[0].height);for(let k=0,eA=UA.length;k<eA;k++)gA=UA[k],TA?e.texSubImage2D(n.TEXTURE_2D,k,0,0,gA.width,gA.height,dA,mA,gA.data):e.texImage2D(n.TEXTURE_2D,k,hA,gA.width,gA.height,0,dA,mA,gA.data);v.generateMipmaps=!1}else TA?(Ae&&e.texStorage2D(n.TEXTURE_2D,T,hA,P.width,P.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,P.width,P.height,dA,mA,P.data)):e.texImage2D(n.TEXTURE_2D,0,hA,P.width,P.height,0,dA,mA,P.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){TA&&Ae&&e.texStorage3D(n.TEXTURE_2D_ARRAY,T,hA,UA[0].width,UA[0].height,P.depth);for(let k=0,eA=UA.length;k<eA;k++)gA=UA[k],v.format!==st?dA!==null?TA?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,k,0,0,0,gA.width,gA.height,P.depth,dA,gA.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,k,hA,gA.width,gA.height,P.depth,0,gA.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):TA?e.texSubImage3D(n.TEXTURE_2D_ARRAY,k,0,0,0,gA.width,gA.height,P.depth,dA,mA,gA.data):e.texImage3D(n.TEXTURE_2D_ARRAY,k,hA,gA.width,gA.height,P.depth,0,dA,mA,gA.data)}else{TA&&Ae&&e.texStorage2D(n.TEXTURE_2D,T,hA,UA[0].width,UA[0].height);for(let k=0,eA=UA.length;k<eA;k++)gA=UA[k],v.format!==st?dA!==null?TA?e.compressedTexSubImage2D(n.TEXTURE_2D,k,0,0,gA.width,gA.height,dA,gA.data):e.compressedTexImage2D(n.TEXTURE_2D,k,hA,gA.width,gA.height,0,gA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):TA?e.texSubImage2D(n.TEXTURE_2D,k,0,0,gA.width,gA.height,dA,mA,gA.data):e.texImage2D(n.TEXTURE_2D,k,hA,gA.width,gA.height,0,dA,mA,gA.data)}else if(v.isDataArrayTexture)TA?(Ae&&e.texStorage3D(n.TEXTURE_2D_ARRAY,T,hA,P.width,P.height,P.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,P.width,P.height,P.depth,dA,mA,P.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,hA,P.width,P.height,P.depth,0,dA,mA,P.data);else if(v.isData3DTexture)TA?(Ae&&e.texStorage3D(n.TEXTURE_3D,T,hA,P.width,P.height,P.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,P.width,P.height,P.depth,dA,mA,P.data)):e.texImage3D(n.TEXTURE_3D,0,hA,P.width,P.height,P.depth,0,dA,mA,P.data);else if(v.isFramebufferTexture){if(Ae)if(TA)e.texStorage2D(n.TEXTURE_2D,T,hA,P.width,P.height);else{let k=P.width,eA=P.height;for(let fA=0;fA<T;fA++)e.texImage2D(n.TEXTURE_2D,fA,hA,k,eA,0,dA,mA,null),k>>=1,eA>>=1}}else if(UA.length>0&&lA){TA&&Ae&&e.texStorage2D(n.TEXTURE_2D,T,hA,UA[0].width,UA[0].height);for(let k=0,eA=UA.length;k<eA;k++)gA=UA[k],TA?e.texSubImage2D(n.TEXTURE_2D,k,0,0,dA,mA,gA):e.texImage2D(n.TEXTURE_2D,k,hA,dA,mA,gA);v.generateMipmaps=!1}else TA?(Ae&&e.texStorage2D(n.TEXTURE_2D,T,hA,P.width,P.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,dA,mA,P)):e.texImage2D(n.TEXTURE_2D,0,hA,dA,mA,P);U(v,lA)&&S(AA),y.__version=oA.version,v.onUpdate&&v.onUpdate(v)}F.__version=v.version}function EA(F,v,G){if(v.image.length!==6)return;const AA=b(F,v),tA=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+G);const oA=t.get(tA);if(tA.version!==oA.__version||AA===!0){e.activeTexture(n.TEXTURE0+G),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const y=v.isCompressedTexture||v.image[0].isCompressedTexture,Z=v.image[0]&&v.image[0].isDataTexture,P=[];for(let k=0;k<6;k++)!y&&!Z?P[k]=E(v.image[k],!1,!0,l):P[k]=Z?v.image[k].image:v.image[k],P[k]=ve(v,P[k]);const lA=P[0],dA=x(lA)||a,mA=r.convert(v.format,v.colorSpace),hA=r.convert(v.type),gA=R(v.internalFormat,mA,hA,v.colorSpace),UA=a&&v.isVideoTexture!==!0,TA=oA.__version===void 0||AA===!0;let Ae=B(v,lA,dA);rA(n.TEXTURE_CUBE_MAP,v,dA);let T;if(y){UA&&TA&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,gA,lA.width,lA.height);for(let k=0;k<6;k++){T=P[k].mipmaps;for(let eA=0;eA<T.length;eA++){const fA=T[eA];v.format!==st?mA!==null?UA?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,eA,0,0,fA.width,fA.height,mA,fA.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,eA,gA,fA.width,fA.height,0,fA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):UA?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,eA,0,0,fA.width,fA.height,mA,hA,fA.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,eA,gA,fA.width,fA.height,0,mA,hA,fA.data)}}}else{T=v.mipmaps,UA&&TA&&(T.length>0&&Ae++,e.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,gA,P[0].width,P[0].height));for(let k=0;k<6;k++)if(Z){UA?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,P[k].width,P[k].height,mA,hA,P[k].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,gA,P[k].width,P[k].height,0,mA,hA,P[k].data);for(let eA=0;eA<T.length;eA++){const BA=T[eA].image[k].image;UA?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,eA+1,0,0,BA.width,BA.height,mA,hA,BA.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,eA+1,gA,BA.width,BA.height,0,mA,hA,BA.data)}}else{UA?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,mA,hA,P[k]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,gA,mA,hA,P[k]);for(let eA=0;eA<T.length;eA++){const fA=T[eA];UA?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,eA+1,0,0,mA,hA,fA.image[k]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,eA+1,gA,mA,hA,fA.image[k])}}}U(v,dA)&&S(n.TEXTURE_CUBE_MAP),oA.__version=tA.version,v.onUpdate&&v.onUpdate(v)}F.__version=v.version}function sA(F,v,G,AA,tA){const oA=r.convert(G.format,G.colorSpace),y=r.convert(G.type),Z=R(G.internalFormat,oA,y,G.colorSpace);t.get(v).__hasExternalTextures||(tA===n.TEXTURE_3D||tA===n.TEXTURE_2D_ARRAY?e.texImage3D(tA,0,Z,v.width,v.height,v.depth,0,oA,y,null):e.texImage2D(tA,0,Z,v.width,v.height,0,oA,y,null)),e.bindFramebuffer(n.FRAMEBUFFER,F),OA(v)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,AA,tA,t.get(G).__webglTexture,0,$A(v)):(tA===n.TEXTURE_2D||tA>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&tA<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,AA,tA,t.get(G).__webglTexture,0),e.bindFramebuffer(n.FRAMEBUFFER,null)}function _A(F,v,G){if(n.bindRenderbuffer(n.RENDERBUFFER,F),v.depthBuffer&&!v.stencilBuffer){let AA=n.DEPTH_COMPONENT16;if(G||OA(v)){const tA=v.depthTexture;tA&&tA.isDepthTexture&&(tA.type===cn?AA=n.DEPTH_COMPONENT32F:tA.type===ln&&(AA=n.DEPTH_COMPONENT24));const oA=$A(v);OA(v)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oA,AA,v.width,v.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,oA,AA,v.width,v.height)}else n.renderbufferStorage(n.RENDERBUFFER,AA,v.width,v.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,F)}else if(v.depthBuffer&&v.stencilBuffer){const AA=$A(v);G&&OA(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,AA,n.DEPTH24_STENCIL8,v.width,v.height):OA(v)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,AA,n.DEPTH24_STENCIL8,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,F)}else{const AA=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let tA=0;tA<AA.length;tA++){const oA=AA[tA],y=r.convert(oA.format,oA.colorSpace),Z=r.convert(oA.type),P=R(oA.internalFormat,y,Z,oA.colorSpace),lA=$A(v);G&&OA(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,lA,P,v.width,v.height):OA(v)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,lA,P,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,P,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function NA(F,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,F),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!t.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),j(v.depthTexture,0);const AA=t.get(v.depthTexture).__webglTexture,tA=$A(v);if(v.depthTexture.format===gn)OA(v)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,AA,0,tA):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,AA,0);else if(v.depthTexture.format===fi)OA(v)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,AA,0,tA):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,AA,0);else throw new Error("Unknown depthTexture format")}function wA(F){const v=t.get(F),G=F.isWebGLCubeRenderTarget===!0;if(F.depthTexture&&!v.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");NA(v.__webglFramebuffer,F)}else if(G){v.__webglDepthbuffer=[];for(let AA=0;AA<6;AA++)e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[AA]),v.__webglDepthbuffer[AA]=n.createRenderbuffer(),_A(v.__webglDepthbuffer[AA],F,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),_A(v.__webglDepthbuffer,F,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function yA(F,v,G){const AA=t.get(F);v!==void 0&&sA(AA.__webglFramebuffer,F,F.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D),G!==void 0&&wA(F)}function jA(F){const v=F.texture,G=t.get(F),AA=t.get(v);F.addEventListener("dispose",V),F.isWebGLMultipleRenderTargets!==!0&&(AA.__webglTexture===void 0&&(AA.__webglTexture=n.createTexture()),AA.__version=v.version,s.memory.textures++);const tA=F.isWebGLCubeRenderTarget===!0,oA=F.isWebGLMultipleRenderTargets===!0,y=x(F)||a;if(tA){G.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)G.__webglFramebuffer[Z]=n.createFramebuffer()}else{if(G.__webglFramebuffer=n.createFramebuffer(),oA)if(i.drawBuffers){const Z=F.texture;for(let P=0,lA=Z.length;P<lA;P++){const dA=t.get(Z[P]);dA.__webglTexture===void 0&&(dA.__webglTexture=n.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&F.samples>0&&OA(F)===!1){const Z=oA?v:[v];G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let P=0;P<Z.length;P++){const lA=Z[P];G.__webglColorRenderbuffer[P]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[P]);const dA=r.convert(lA.format,lA.colorSpace),mA=r.convert(lA.type),hA=R(lA.internalFormat,dA,mA,lA.colorSpace,F.isXRRenderTarget===!0),gA=$A(F);n.renderbufferStorageMultisample(n.RENDERBUFFER,gA,hA,F.width,F.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+P,n.RENDERBUFFER,G.__webglColorRenderbuffer[P])}n.bindRenderbuffer(n.RENDERBUFFER,null),F.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),_A(G.__webglDepthRenderbuffer,F,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(tA){e.bindTexture(n.TEXTURE_CUBE_MAP,AA.__webglTexture),rA(n.TEXTURE_CUBE_MAP,v,y);for(let Z=0;Z<6;Z++)sA(G.__webglFramebuffer[Z],F,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z);U(v,y)&&S(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(oA){const Z=F.texture;for(let P=0,lA=Z.length;P<lA;P++){const dA=Z[P],mA=t.get(dA);e.bindTexture(n.TEXTURE_2D,mA.__webglTexture),rA(n.TEXTURE_2D,dA,y),sA(G.__webglFramebuffer,F,dA,n.COLOR_ATTACHMENT0+P,n.TEXTURE_2D),U(dA,y)&&S(n.TEXTURE_2D)}e.unbindTexture()}else{let Z=n.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(a?Z=F.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(Z,AA.__webglTexture),rA(Z,v,y),sA(G.__webglFramebuffer,F,v,n.COLOR_ATTACHMENT0,Z),U(v,y)&&S(Z),e.unbindTexture()}F.depthBuffer&&wA(F)}function qA(F){const v=x(F)||a,G=F.isWebGLMultipleRenderTargets===!0?F.texture:[F.texture];for(let AA=0,tA=G.length;AA<tA;AA++){const oA=G[AA];if(U(oA,v)){const y=F.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Z=t.get(oA).__webglTexture;e.bindTexture(y,Z),S(y),e.unbindTexture()}}}function re(F){if(a&&F.samples>0&&OA(F)===!1){const v=F.isWebGLMultipleRenderTargets?F.texture:[F.texture],G=F.width,AA=F.height;let tA=n.COLOR_BUFFER_BIT;const oA=[],y=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=t.get(F),P=F.isWebGLMultipleRenderTargets===!0;if(P)for(let lA=0;lA<v.length;lA++)e.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+lA,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Z.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+lA,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Z.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Z.__webglFramebuffer);for(let lA=0;lA<v.length;lA++){oA.push(n.COLOR_ATTACHMENT0+lA),F.depthBuffer&&oA.push(y);const dA=Z.__ignoreDepthValues!==void 0?Z.__ignoreDepthValues:!1;if(dA===!1&&(F.depthBuffer&&(tA|=n.DEPTH_BUFFER_BIT),F.stencilBuffer&&(tA|=n.STENCIL_BUFFER_BIT)),P&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Z.__webglColorRenderbuffer[lA]),dA===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[y]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])),P){const mA=t.get(v[lA]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,mA,0)}n.blitFramebuffer(0,0,G,AA,0,0,G,AA,tA,n.NEAREST),d&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,oA)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),P)for(let lA=0;lA<v.length;lA++){e.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+lA,n.RENDERBUFFER,Z.__webglColorRenderbuffer[lA]);const dA=t.get(v[lA]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Z.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+lA,n.TEXTURE_2D,dA,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Z.__webglMultisampledFramebuffer)}}function $A(F){return Math.min(u,F.samples)}function OA(F){const v=t.get(F);return a&&F.samples>0&&A.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function XA(F){const v=s.render.frame;g.get(F)!==v&&(g.set(F,v),F.update())}function ve(F,v){const G=F.colorSpace,AA=F.format,tA=F.type;return F.isCompressedTexture===!0||F.format===Na||G!==gt&&G!==Bn&&(G===MA?a===!1?A.has("EXT_sRGB")===!0&&AA===st?(F.format=Na,F.minFilter=We,F.generateMipmaps=!1):v=lu.sRGBToLinear(v):(AA!==st||tA!==_n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),v}this.allocateTextureUnit=W,this.resetTextureUnits=K,this.setTexture2D=j,this.setTexture2DArray=pA,this.setTexture3D=nA,this.setTextureCube=O,this.rebindTextures=yA,this.setupRenderTarget=jA,this.updateRenderTargetMipmap=qA,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=wA,this.setupFrameBufferTexture=sA,this.useMultisampledRTT=OA}function Lm(n,A,e){const t=e.isWebGL2;function i(r,s=Bn){let a;if(r===_n)return n.UNSIGNED_BYTE;if(r===vf)return n.UNSIGNED_SHORT_4_4_4_4;if(r===_f)return n.UNSIGNED_SHORT_5_5_5_1;if(r===mf)return n.BYTE;if(r===Bf)return n.SHORT;if(r===ru)return n.UNSIGNED_SHORT;if(r===wf)return n.INT;if(r===ln)return n.UNSIGNED_INT;if(r===cn)return n.FLOAT;if(r===Wi)return t?n.HALF_FLOAT:(a=A.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Cf)return n.ALPHA;if(r===st)return n.RGBA;if(r===Ef)return n.LUMINANCE;if(r===xf)return n.LUMINANCE_ALPHA;if(r===gn)return n.DEPTH_COMPONENT;if(r===fi)return n.DEPTH_STENCIL;if(r===Na)return a=A.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Uf)return n.RED;if(r===Ff)return n.RED_INTEGER;if(r===Mf)return n.RG;if(r===yf)return n.RG_INTEGER;if(r===Sf)return n.RGBA_INTEGER;if(r===Ds||r===Ps||r===Os||r===Ns)if(s===MA)if(a=A.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Ds)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ps)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Os)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ns)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=A.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Ds)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ps)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Os)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ns)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===No||r===Go||r===Vo||r===Ko)if(a=A.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===No)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Go)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Vo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ko)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===bf)return a=A.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ko||r===zo)if(a=A.get("WEBGL_compressed_texture_etc"),a!==null){if(r===ko)return s===MA?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===zo)return s===MA?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Wo||r===Xo||r===Yo||r===Jo||r===Zo||r===qo||r===jo||r===$o||r===Al||r===el||r===tl||r===nl||r===il||r===rl)if(a=A.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Wo)return s===MA?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Xo)return s===MA?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Yo)return s===MA?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Jo)return s===MA?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Zo)return s===MA?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===qo)return s===MA?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===jo)return s===MA?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===$o)return s===MA?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Al)return s===MA?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===el)return s===MA?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===tl)return s===MA?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===nl)return s===MA?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===il)return s===MA?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===rl)return s===MA?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Gs)if(a=A.get("EXT_texture_compression_bptc"),a!==null){if(r===Gs)return s===MA?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===Tf||r===sl||r===al||r===ol)if(a=A.get("EXT_texture_compression_rgtc"),a!==null){if(r===Gs)return a.COMPRESSED_RED_RGTC1_EXT;if(r===sl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===al)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ol)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ii?t?n.UNSIGNED_INT_24_8:(a=A.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:i}}class Rm extends Xe{constructor(A=[]){super(),this.isArrayCamera=!0,this.cameras=A}}class yi extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hm={type:"move"};class ua{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(A){return this._targetRay!==null&&this._targetRay.dispatchEvent(A),this._grip!==null&&this._grip.dispatchEvent(A),this._hand!==null&&this._hand.dispatchEvent(A),this}connect(A){if(A&&A.hand){const e=this._hand;if(e)for(const t of A.hand.values())this._getHandJoint(e,t)}return this.dispatchEvent({type:"connected",data:A}),this}disconnect(A){return this.dispatchEvent({type:"disconnected",data:A}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(A,e,t){let i=null,r=null,s=null;const a=this._targetRay,o=this._grip,l=this._hand;if(A&&e.session.visibilityState!=="visible-blurred"){if(l&&A.hand){s=!0;for(const m of A.hand.values()){const p=e.getJointPose(m,t),f=this._getHandJoint(l,m);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const c=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],h=c.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&h>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:A.handedness,target:this})):!l.inputState.pinching&&h<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:A.handedness,target:this}))}else o!==null&&A.gripSpace&&(r=e.getPose(A.gripSpace,t),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1));a!==null&&(i=e.getPose(A.targetRaySpace,t),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Hm)))}return a!==null&&(a.visible=i!==null),o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(A,e){if(A.joints[e.jointName]===void 0){const t=new yi;t.matrixAutoUpdate=!1,t.visible=!1,A.joints[e.jointName]=t,A.add(t)}return A.joints[e.jointName]}}class Dm extends Ge{constructor(A,e,t,i,r,s,a,o,l,c){if(c=c!==void 0?c:gn,c!==gn&&c!==fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");t===void 0&&c===gn&&(t=ln),t===void 0&&c===fi&&(t=ii),super(null,i,r,s,a,o,c,t,l),this.isDepthTexture=!0,this.image={width:A,height:e},this.magFilter=a!==void 0?a:Te,this.minFilter=o!==void 0?o:Te,this.flipY=!1,this.generateMipmaps=!1}}class Pm extends Un{constructor(A,e){super();const t=this;let i=null,r=1,s=null,a="local-floor",o=1,l=null,c=null,u=null,h=null,d=null,g=null;const m=e.getContextAttributes();let p=null,f=null;const _=[],E=[],x=new Set,w=new Map,U=new Xe;U.layers.enable(1),U.viewport=new Be;const S=new Xe;S.layers.enable(2),S.viewport=new Be;const R=[U,S],B=new Rm;B.layers.enable(1),B.layers.enable(2);let M=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let J=_[O];return J===void 0&&(J=new ua,_[O]=J),J.getTargetRaySpace()},this.getControllerGrip=function(O){let J=_[O];return J===void 0&&(J=new ua,_[O]=J),J.getGripSpace()},this.getHand=function(O){let J=_[O];return J===void 0&&(J=new ua,_[O]=J),J.getHandSpace()};function V(O){const J=E.indexOf(O.inputSource);if(J===-1)return;const iA=_[J];iA!==void 0&&(iA.update(O.inputSource,O.frame,l||s),iA.dispatchEvent({type:O.type,data:O.inputSource}))}function Q(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",Q),i.removeEventListener("inputsourceschange",D);for(let O=0;O<_.length;O++){const J=E[O];J!==null&&(E[O]=null,_[O].disconnect(J))}M=null,X=null,A.setRenderTarget(p),d=null,h=null,u=null,i=null,f=null,nA.stop(),t.isPresenting=!1,t.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){r=O,t.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,t.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(O){l=O},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(O){if(i=O,i!==null){if(p=A.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",Q),i.addEventListener("inputsourceschange",D),m.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||A.capabilities.isWebGL2===!1){const J={antialias:i.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,J),i.updateRenderState({baseLayer:d}),f=new Cn(d.framebufferWidth,d.framebufferHeight,{format:st,type:_n,colorSpace:A.outputColorSpace,stencilBuffer:m.stencil})}else{let J=null,iA=null,rA=null;m.depth&&(rA=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=m.stencil?fi:gn,iA=m.stencil?ii:ln);const b={colorFormat:e.RGBA8,depthFormat:rA,scaleFactor:r};u=new XRWebGLBinding(i,e),h=u.createProjectionLayer(b),i.updateRenderState({layers:[h]}),f=new Cn(h.textureWidth,h.textureHeight,{format:st,type:_n,depthTexture:new Dm(h.textureWidth,h.textureHeight,iA,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:A.outputColorSpace,samples:m.antialias?4:0});const xA=A.properties.get(f);xA.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(o),l=null,s=await i.requestReferenceSpace(a),nA.setContext(i),nA.start(),t.isPresenting=!0,t.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function D(O){for(let J=0;J<O.removed.length;J++){const iA=O.removed[J],rA=E.indexOf(iA);rA>=0&&(E[rA]=null,_[rA].disconnect(iA))}for(let J=0;J<O.added.length;J++){const iA=O.added[J];let rA=E.indexOf(iA);if(rA===-1){for(let xA=0;xA<_.length;xA++)if(xA>=E.length){E.push(iA),rA=xA;break}else if(E[xA]===null){E[xA]=iA,rA=xA;break}if(rA===-1)break}const b=_[rA];b&&b.connect(iA)}}const N=new L,q=new L;function K(O,J,iA){N.setFromMatrixPosition(J.matrixWorld),q.setFromMatrixPosition(iA.matrixWorld);const rA=N.distanceTo(q),b=J.projectionMatrix.elements,xA=iA.projectionMatrix.elements,EA=b[14]/(b[10]-1),sA=b[14]/(b[10]+1),_A=(b[9]+1)/b[5],NA=(b[9]-1)/b[5],wA=(b[8]-1)/b[0],yA=(xA[8]+1)/xA[0],jA=EA*wA,qA=EA*yA,re=rA/(-wA+yA),$A=re*-wA;J.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX($A),O.translateZ(re),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const OA=EA+re,XA=sA+re,ve=jA-$A,F=qA+(rA-$A),v=_A*sA/XA*OA,G=NA*sA/XA*OA;O.projectionMatrix.makePerspective(ve,F,v,G,OA,XA),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}function W(O,J){J===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(J.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(i===null)return;B.near=S.near=U.near=O.near,B.far=S.far=U.far=O.far,(M!==B.near||X!==B.far)&&(i.updateRenderState({depthNear:B.near,depthFar:B.far}),M=B.near,X=B.far);const J=O.parent,iA=B.cameras;W(B,J);for(let rA=0;rA<iA.length;rA++)W(iA[rA],J);iA.length===2?K(B,U,S):B.projectionMatrix.copy(U.projectionMatrix),$(O,B,J)};function $(O,J,iA){iA===null?O.matrix.copy(J.matrixWorld):(O.matrix.copy(iA.matrixWorld),O.matrix.invert(),O.matrix.multiply(J.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0);const rA=O.children;for(let b=0,xA=rA.length;b<xA;b++)rA[b].updateMatrixWorld(!0);O.projectionMatrix.copy(J.projectionMatrix),O.projectionMatrixInverse.copy(J.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=Ga*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(h===null&&d===null))return o},this.setFoveation=function(O){o=O,h!==null&&(h.fixedFoveation=O),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=O)},this.getPlanes=function(){return x};let j=null;function pA(O,J){if(c=J.getViewerPose(l||s),g=J,c!==null){const iA=c.views;d!==null&&(A.setRenderTargetFramebuffer(f,d.framebuffer),A.setRenderTarget(f));let rA=!1;iA.length!==B.cameras.length&&(B.cameras.length=0,rA=!0);for(let b=0;b<iA.length;b++){const xA=iA[b];let EA=null;if(d!==null)EA=d.getViewport(xA);else{const _A=u.getViewSubImage(h,xA);EA=_A.viewport,b===0&&(A.setRenderTargetTextures(f,_A.colorTexture,h.ignoreDepthValues?void 0:_A.depthStencilTexture),A.setRenderTarget(f))}let sA=R[b];sA===void 0&&(sA=new Xe,sA.layers.enable(b),sA.viewport=new Be,R[b]=sA),sA.matrix.fromArray(xA.transform.matrix),sA.matrix.decompose(sA.position,sA.quaternion,sA.scale),sA.projectionMatrix.fromArray(xA.projectionMatrix),sA.projectionMatrixInverse.copy(sA.projectionMatrix).invert(),sA.viewport.set(EA.x,EA.y,EA.width,EA.height),b===0&&(B.matrix.copy(sA.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),rA===!0&&B.cameras.push(sA)}}for(let iA=0;iA<_.length;iA++){const rA=E[iA],b=_[iA];rA!==null&&b!==void 0&&b.update(rA,J,l||s)}if(j&&j(O,J),J.detectedPlanes){t.dispatchEvent({type:"planesdetected",data:J.detectedPlanes});let iA=null;for(const rA of x)J.detectedPlanes.has(rA)||(iA===null&&(iA=[]),iA.push(rA));if(iA!==null)for(const rA of iA)x.delete(rA),w.delete(rA),t.dispatchEvent({type:"planeremoved",data:rA});for(const rA of J.detectedPlanes)if(!x.has(rA))x.add(rA),w.set(rA,J.lastChangedTime),t.dispatchEvent({type:"planeadded",data:rA});else{const b=w.get(rA);rA.lastChangedTime>b&&(w.set(rA,rA.lastChangedTime),t.dispatchEvent({type:"planechanged",data:rA}))}}g=null}const nA=new vu;nA.setAnimationLoop(pA),this.setAnimationLoop=function(O){j=O},this.dispose=function(){}}}function Om(n,A){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function t(p,f){f.color.getRGB(p.fogColor.value,gu(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function i(p,f,_,E,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),u(p,f)):f.isMeshPhongMaterial?(r(p,f),c(p,f)):f.isMeshStandardMaterial?(r(p,f),h(p,f),f.isMeshPhysicalMaterial&&d(p,f,x)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),m(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(s(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?o(p,f,_,E):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Re&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Re&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const _=A.get(f).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const E=n.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*E,e(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function s(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function o(p,f,_,E){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*_,p.scale.value=E*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),A.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function d(p,f,_){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Re&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function m(p,f){const _=A.get(f).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function Nm(n,A,e,t){let i={},r={},s=[];const a=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function o(_,E){const x=E.program;t.uniformBlockBinding(_,x)}function l(_,E){let x=i[_.id];x===void 0&&(g(_),x=c(_),i[_.id]=x,_.addEventListener("dispose",p));const w=E.program;t.updateUBOMapping(_,w);const U=A.render.frame;r[_.id]!==U&&(h(_),r[_.id]=U)}function c(_){const E=u();_.__bindingPointIndex=E;const x=n.createBuffer(),w=_.__size,U=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,w,U),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,x),x}function u(){for(let _=0;_<a;_++)if(s.indexOf(_)===-1)return s.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const E=i[_.id],x=_.uniforms,w=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let U=0,S=x.length;U<S;U++){const R=x[U];if(d(R,U,w)===!0){const B=R.__offset,M=Array.isArray(R.value)?R.value:[R.value];let X=0;for(let V=0;V<M.length;V++){const Q=M[V],D=m(Q);typeof Q=="number"?(R.__data[0]=Q,n.bufferSubData(n.UNIFORM_BUFFER,B+X,R.__data)):Q.isMatrix3?(R.__data[0]=Q.elements[0],R.__data[1]=Q.elements[1],R.__data[2]=Q.elements[2],R.__data[3]=Q.elements[0],R.__data[4]=Q.elements[3],R.__data[5]=Q.elements[4],R.__data[6]=Q.elements[5],R.__data[7]=Q.elements[0],R.__data[8]=Q.elements[6],R.__data[9]=Q.elements[7],R.__data[10]=Q.elements[8],R.__data[11]=Q.elements[0]):(Q.toArray(R.__data,X),X+=D.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,R.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(_,E,x){const w=_.value;if(x[E]===void 0){if(typeof w=="number")x[E]=w;else{const U=Array.isArray(w)?w:[w],S=[];for(let R=0;R<U.length;R++)S.push(U[R].clone());x[E]=S}return!0}else if(typeof w=="number"){if(x[E]!==w)return x[E]=w,!0}else{const U=Array.isArray(x[E])?x[E]:[x[E]],S=Array.isArray(w)?w:[w];for(let R=0;R<U.length;R++){const B=U[R];if(B.equals(S[R])===!1)return B.copy(S[R]),!0}}return!1}function g(_){const E=_.uniforms;let x=0;const w=16;let U=0;for(let S=0,R=E.length;S<R;S++){const B=E[S],M={boundary:0,storage:0},X=Array.isArray(B.value)?B.value:[B.value];for(let V=0,Q=X.length;V<Q;V++){const D=X[V],N=m(D);M.boundary+=N.boundary,M.storage+=N.storage}if(B.__data=new Float32Array(M.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=x,S>0){U=x%w;const V=w-U;U!==0&&V-M.boundary<0&&(x+=w-U,B.__offset=x)}x+=M.storage}return U=x%w,U>0&&(x+=w-U),_.__size=x,_.__cache={},this}function m(_){const E={boundary:0,storage:0};return typeof _=="number"?(E.boundary=4,E.storage=4):_.isVector2?(E.boundary=8,E.storage=8):_.isVector3||_.isColor?(E.boundary=16,E.storage=12):_.isVector4?(E.boundary=16,E.storage=16):_.isMatrix3?(E.boundary=48,E.storage=48):_.isMatrix4?(E.boundary=64,E.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),E}function p(_){const E=_.target;E.removeEventListener("dispose",p);const x=s.indexOf(E.__bindingPointIndex);s.splice(x,1),n.deleteBuffer(i[E.id]),delete i[E.id],delete r[E.id]}function f(){for(const _ in i)n.deleteBuffer(i[_]);s=[],i={},r={}}return{bind:o,update:l,dispose:f}}function Gm(){const n=rs("canvas");return n.style.display="block",n}class Uu{constructor(A={}){const{canvas:e=Gm(),context:t=null,depth:i=!0,stencil:r=!0,alpha:s=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1}=A;this.isWebGLRenderer=!0;let h;t!==null?h=t.getContextAttributes().alpha:h=s;let d=null,g=null;const m=[],p=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=MA,this.useLegacyLights=!0,this.toneMapping=bt,this.toneMappingExposure=1;const f=this;let _=!1,E=0,x=0,w=null,U=-1,S=null;const R=new Be,B=new Be;let M=null,X=e.width,V=e.height,Q=1,D=null,N=null;const q=new Be(0,0,X,V),K=new Be(0,0,X,V);let W=!1;const $=new wu;let j=!1,pA=!1,nA=null;const O=new pe,J=new L,iA={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function rA(){return w===null?Q:1}let b=t;function xA(C,H){for(let z=0;z<C.length;z++){const I=C[z],Y=e.getContext(I,H);if(Y!==null)return Y}return null}try{const C={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${po}`),e.addEventListener("webglcontextlost",gA,!1),e.addEventListener("webglcontextrestored",UA,!1),e.addEventListener("webglcontextcreationerror",TA,!1),b===null){const H=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&H.shift(),b=xA(H,C),b===null)throw xA(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}b.getShaderPrecisionFormat===void 0&&(b.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let EA,sA,_A,NA,wA,yA,jA,qA,re,$A,OA,XA,ve,F,v,G,AA,tA,oA,y,Z,P,lA,dA;function mA(){EA=new jg(b),sA=new zg(b,EA,A),EA.init(sA),P=new Lm(b,EA,sA),_A=new Qm(b,EA,sA),NA=new e0(b),wA=new Bm,yA=new Im(b,EA,_A,wA,sA,P,NA),jA=new Xg(f),qA=new qg(f),re=new hd(b,sA),lA=new Kg(b,EA,re,sA),$A=new $g(b,re,NA,lA),OA=new r0(b,$A,re,NA),oA=new i0(b,sA,yA),G=new Wg(wA),XA=new mm(f,jA,qA,EA,sA,lA,G),ve=new Om(f,wA),F=new vm,v=new Fm(EA,sA),tA=new Vg(f,jA,qA,_A,OA,h,o),AA=new Tm(f,OA,sA),dA=new Nm(b,NA,sA,_A),y=new kg(b,EA,NA,sA),Z=new A0(b,EA,NA,sA),NA.programs=XA.programs,f.capabilities=sA,f.extensions=EA,f.properties=wA,f.renderLists=F,f.shadowMap=AA,f.state=_A,f.info=NA}mA();const hA=new Pm(f,b);this.xr=hA,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const C=EA.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=EA.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(C){C!==void 0&&(Q=C,this.setSize(X,V,!1))},this.getSize=function(C){return C.set(X,V)},this.setSize=function(C,H,z=!0){if(hA.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=C,V=H,e.width=Math.floor(C*Q),e.height=Math.floor(H*Q),z===!0&&(e.style.width=C+"px",e.style.height=H+"px"),this.setViewport(0,0,C,H)},this.getDrawingBufferSize=function(C){return C.set(X*Q,V*Q).floor()},this.setDrawingBufferSize=function(C,H,z){X=C,V=H,Q=z,e.width=Math.floor(C*z),e.height=Math.floor(H*z),this.setViewport(0,0,C,H)},this.getCurrentViewport=function(C){return C.copy(R)},this.getViewport=function(C){return C.copy(q)},this.setViewport=function(C,H,z,I){C.isVector4?q.set(C.x,C.y,C.z,C.w):q.set(C,H,z,I),_A.viewport(R.copy(q).multiplyScalar(Q).floor())},this.getScissor=function(C){return C.copy(K)},this.setScissor=function(C,H,z,I){C.isVector4?K.set(C.x,C.y,C.z,C.w):K.set(C,H,z,I),_A.scissor(B.copy(K).multiplyScalar(Q).floor())},this.getScissorTest=function(){return W},this.setScissorTest=function(C){_A.setScissorTest(W=C)},this.setOpaqueSort=function(C){D=C},this.setTransparentSort=function(C){N=C},this.getClearColor=function(C){return C.copy(tA.getClearColor())},this.setClearColor=function(){tA.setClearColor.apply(tA,arguments)},this.getClearAlpha=function(){return tA.getClearAlpha()},this.setClearAlpha=function(){tA.setClearAlpha.apply(tA,arguments)},this.clear=function(C=!0,H=!0,z=!0){let I=0;C&&(I|=b.COLOR_BUFFER_BIT),H&&(I|=b.DEPTH_BUFFER_BIT),z&&(I|=b.STENCIL_BUFFER_BIT),b.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",gA,!1),e.removeEventListener("webglcontextrestored",UA,!1),e.removeEventListener("webglcontextcreationerror",TA,!1),F.dispose(),v.dispose(),wA.dispose(),jA.dispose(),qA.dispose(),OA.dispose(),lA.dispose(),dA.dispose(),XA.dispose(),hA.dispose(),hA.removeEventListener("sessionstart",BA),hA.removeEventListener("sessionend",zA),nA&&(nA.dispose(),nA=null),WA.stop()};function gA(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function UA(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const C=NA.autoReset,H=AA.enabled,z=AA.autoUpdate,I=AA.needsUpdate,Y=AA.type;mA(),NA.autoReset=C,AA.enabled=H,AA.autoUpdate=z,AA.needsUpdate=I,AA.type=Y}function TA(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ae(C){const H=C.target;H.removeEventListener("dispose",Ae),T(H)}function T(C){k(C),wA.remove(C)}function k(C){const H=wA.get(C).programs;H!==void 0&&(H.forEach(function(z){XA.releaseProgram(z)}),C.isShaderMaterial&&XA.releaseShaderCache(C))}this.renderBufferDirect=function(C,H,z,I,Y,vA){H===null&&(H=iA);const CA=Y.isMesh&&Y.matrixWorld.determinant()<0,FA=Hh(C,H,z,I,Y);_A.setMaterial(I,CA);let SA=z.index,QA=1;I.wireframe===!0&&(SA=$A.getWireframeAttribute(z),QA=2);const IA=z.drawRange,RA=z.attributes.position;let VA=IA.start*QA,Me=(IA.start+IA.count)*QA;vA!==null&&(VA=Math.max(VA,vA.start*QA),Me=Math.min(Me,(vA.start+vA.count)*QA)),SA!==null?(VA=Math.max(VA,0),Me=Math.min(Me,SA.count)):RA!=null&&(VA=Math.max(VA,0),Me=Math.min(Me,RA.count));const qe=Me-VA;if(qe<0||qe===1/0)return;lA.setup(Y,I,FA,z,SA);let qt,se=y;if(SA!==null&&(qt=re.get(SA),se=Z,se.setIndex(qt)),Y.isMesh)I.wireframe===!0?(_A.setLineWidth(I.wireframeLinewidth*rA()),se.setMode(b.LINES)):se.setMode(b.TRIANGLES);else if(Y.isLine){let PA=I.linewidth;PA===void 0&&(PA=1),_A.setLineWidth(PA*rA()),Y.isLineSegments?se.setMode(b.LINES):Y.isLineLoop?se.setMode(b.LINE_LOOP):se.setMode(b.LINE_STRIP)}else Y.isPoints?se.setMode(b.POINTS):Y.isSprite&&se.setMode(b.TRIANGLES);if(Y.isInstancedMesh)se.renderInstances(VA,qe,Y.count);else if(z.isInstancedBufferGeometry){const PA=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Ts=Math.min(z.instanceCount,PA);se.renderInstances(VA,qe,Ts)}else se.render(VA,qe)},this.compile=function(C,H){function z(I,Y,vA){I.transparent===!0&&I.side===yt&&I.forceSinglePass===!1?(I.side=Re,I.needsUpdate=!0,ar(I,Y,vA),I.side=Yt,I.needsUpdate=!0,ar(I,Y,vA),I.side=yt):ar(I,Y,vA)}g=v.get(C),g.init(),p.push(g),C.traverseVisible(function(I){I.isLight&&I.layers.test(H.layers)&&(g.pushLight(I),I.castShadow&&g.pushShadow(I))}),g.setupLights(f.useLegacyLights),C.traverse(function(I){const Y=I.material;if(Y)if(Array.isArray(Y))for(let vA=0;vA<Y.length;vA++){const CA=Y[vA];z(CA,C,I)}else z(Y,C,I)}),p.pop(),g=null};let eA=null;function fA(C){eA&&eA(C)}function BA(){WA.stop()}function zA(){WA.start()}const WA=new vu;WA.setAnimationLoop(fA),typeof self<"u"&&WA.setContext(self),this.setAnimationLoop=function(C){eA=C,hA.setAnimationLoop(C),C===null?WA.stop():WA.start()},hA.addEventListener("sessionstart",BA),hA.addEventListener("sessionend",zA),this.render=function(C,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),hA.enabled===!0&&hA.isPresenting===!0&&(hA.cameraAutoUpdate===!0&&hA.updateCamera(H),H=hA.getCamera()),C.isScene===!0&&C.onBeforeRender(f,C,H,w),g=v.get(C,p.length),g.init(),p.push(g),O.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),$.setFromProjectionMatrix(O),pA=this.localClippingEnabled,j=G.init(this.clippingPlanes,pA),d=F.get(C,m.length),d.init(),m.push(d),_e(C,H,0,f.sortObjects),d.finish(),f.sortObjects===!0&&d.sort(D,N),j===!0&&G.beginShadows();const z=g.state.shadowsArray;if(AA.render(z,C,H),j===!0&&G.endShadows(),this.info.autoReset===!0&&this.info.reset(),tA.render(d,C),g.setupLights(f.useLegacyLights),H.isArrayCamera){const I=H.cameras;for(let Y=0,vA=I.length;Y<vA;Y++){const CA=I[Y];It(d,C,CA,CA.viewport)}}else It(d,C,H);w!==null&&(yA.updateMultisampleRenderTarget(w),yA.updateRenderTargetMipmap(w)),C.isScene===!0&&C.onAfterRender(f,C,H),lA.resetDefaultState(),U=-1,S=null,p.pop(),p.length>0?g=p[p.length-1]:g=null,m.pop(),m.length>0?d=m[m.length-1]:d=null};function _e(C,H,z,I){if(C.visible===!1)return;if(C.layers.test(H.layers)){if(C.isGroup)z=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(H);else if(C.isLight)g.pushLight(C),C.castShadow&&g.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||$.intersectsSprite(C)){I&&J.setFromMatrixPosition(C.matrixWorld).applyMatrix4(O);const CA=OA.update(C),FA=C.material;FA.visible&&d.push(C,CA,FA,z,J.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||$.intersectsObject(C))){C.isSkinnedMesh&&C.skeleton.frame!==NA.render.frame&&(C.skeleton.update(),C.skeleton.frame=NA.render.frame);const CA=OA.update(C),FA=C.material;if(I&&(CA.boundingSphere===null&&CA.computeBoundingSphere(),J.copy(CA.boundingSphere.center).applyMatrix4(C.matrixWorld).applyMatrix4(O)),Array.isArray(FA)){const SA=CA.groups;for(let QA=0,IA=SA.length;QA<IA;QA++){const RA=SA[QA],VA=FA[RA.materialIndex];VA&&VA.visible&&d.push(C,CA,VA,z,J.z,RA)}}else FA.visible&&d.push(C,CA,FA,z,J.z,null)}}const vA=C.children;for(let CA=0,FA=vA.length;CA<FA;CA++)_e(vA[CA],H,z,I)}function It(C,H,z,I){const Y=C.opaque,vA=C.transmissive,CA=C.transparent;g.setupLightsView(z),j===!0&&G.setGlobalState(f.clippingPlanes,z),vA.length>0&&ee(Y,vA,H,z),I&&_A.viewport(R.copy(I)),Y.length>0&&Ke(Y,H,z),vA.length>0&&Ke(vA,H,z),CA.length>0&&Ke(CA,H,z),_A.buffers.depth.setTest(!0),_A.buffers.depth.setMask(!0),_A.buffers.color.setMask(!0),_A.setPolygonOffset(!1)}function ee(C,H,z,I){if(nA===null){const FA=sA.isWebGL2;nA=new Cn(1024,1024,{generateMipmaps:!0,type:EA.has("EXT_color_buffer_half_float")?Wi:_n,minFilter:zi,samples:FA&&a===!0?4:0})}const Y=f.getRenderTarget();f.setRenderTarget(nA),f.clear();const vA=f.toneMapping;f.toneMapping=bt,Ke(C,z,I),yA.updateMultisampleRenderTarget(nA),yA.updateRenderTargetMipmap(nA);let CA=!1;for(let FA=0,SA=H.length;FA<SA;FA++){const QA=H[FA],IA=QA.object,RA=QA.geometry,VA=QA.material,Me=QA.group;if(VA.side===yt&&IA.layers.test(I.layers)){const qe=VA.side;VA.side=Re,VA.needsUpdate=!0,ct(IA,z,I,RA,VA,Me),VA.side=qe,VA.needsUpdate=!0,CA=!0}}CA===!0&&(yA.updateMultisampleRenderTarget(nA),yA.updateRenderTargetMipmap(nA)),f.setRenderTarget(Y),f.toneMapping=vA}function Ke(C,H,z){const I=H.isScene===!0?H.overrideMaterial:null;for(let Y=0,vA=C.length;Y<vA;Y++){const CA=C[Y],FA=CA.object,SA=CA.geometry,QA=I===null?CA.material:I,IA=CA.group;FA.layers.test(z.layers)&&ct(FA,H,z,SA,QA,IA)}}function ct(C,H,z,I,Y,vA){C.onBeforeRender(f,H,z,I,Y,vA),C.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Y.onBeforeRender(f,H,z,I,C,vA),Y.transparent===!0&&Y.side===yt&&Y.forceSinglePass===!1?(Y.side=Re,Y.needsUpdate=!0,f.renderBufferDirect(z,H,I,Y,C,vA),Y.side=Yt,Y.needsUpdate=!0,f.renderBufferDirect(z,H,I,Y,C,vA),Y.side=yt):f.renderBufferDirect(z,H,I,Y,C,vA),C.onAfterRender(f,H,z,I,Y,vA)}function ar(C,H,z){H.isScene!==!0&&(H=iA);const I=wA.get(C),Y=g.state.lights,vA=g.state.shadowsArray,CA=Y.state.version,FA=XA.getParameters(C,Y.state,vA,H,z),SA=XA.getProgramCacheKey(FA);let QA=I.programs;I.environment=C.isMeshStandardMaterial?H.environment:null,I.fog=H.fog,I.envMap=(C.isMeshStandardMaterial?qA:jA).get(C.envMap||I.environment),QA===void 0&&(C.addEventListener("dispose",Ae),QA=new Map,I.programs=QA);let IA=QA.get(SA);if(IA!==void 0){if(I.currentProgram===IA&&I.lightsStateVersion===CA)return So(C,FA),IA}else FA.uniforms=XA.getUniforms(C),C.onBuild(z,FA,f),C.onBeforeCompile(FA,f),IA=XA.acquireProgram(FA,SA),QA.set(SA,IA),I.uniforms=FA.uniforms;const RA=I.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(RA.clippingPlanes=G.uniform),So(C,FA),I.needsLights=Ph(C),I.lightsStateVersion=CA,I.needsLights&&(RA.ambientLightColor.value=Y.state.ambient,RA.lightProbe.value=Y.state.probe,RA.directionalLights.value=Y.state.directional,RA.directionalLightShadows.value=Y.state.directionalShadow,RA.spotLights.value=Y.state.spot,RA.spotLightShadows.value=Y.state.spotShadow,RA.rectAreaLights.value=Y.state.rectArea,RA.ltc_1.value=Y.state.rectAreaLTC1,RA.ltc_2.value=Y.state.rectAreaLTC2,RA.pointLights.value=Y.state.point,RA.pointLightShadows.value=Y.state.pointShadow,RA.hemisphereLights.value=Y.state.hemi,RA.directionalShadowMap.value=Y.state.directionalShadowMap,RA.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,RA.spotShadowMap.value=Y.state.spotShadowMap,RA.spotLightMatrix.value=Y.state.spotLightMatrix,RA.spotLightMap.value=Y.state.spotLightMap,RA.pointShadowMap.value=Y.state.pointShadowMap,RA.pointShadowMatrix.value=Y.state.pointShadowMatrix);const VA=IA.getUniforms(),Me=As.seqWithValue(VA.seq,RA);return I.currentProgram=IA,I.uniformsList=Me,IA}function So(C,H){const z=wA.get(C);z.outputColorSpace=H.outputColorSpace,z.instancing=H.instancing,z.skinning=H.skinning,z.morphTargets=H.morphTargets,z.morphNormals=H.morphNormals,z.morphColors=H.morphColors,z.morphTargetsCount=H.morphTargetsCount,z.numClippingPlanes=H.numClippingPlanes,z.numIntersection=H.numClipIntersection,z.vertexAlphas=H.vertexAlphas,z.vertexTangents=H.vertexTangents,z.toneMapping=H.toneMapping}function Hh(C,H,z,I,Y){H.isScene!==!0&&(H=iA),yA.resetTextureUnits();const vA=H.fog,CA=I.isMeshStandardMaterial?H.environment:null,FA=w===null?f.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:gt,SA=(I.isMeshStandardMaterial?qA:jA).get(I.envMap||CA),QA=I.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,IA=!!I.normalMap&&!!z.attributes.tangent,RA=!!z.morphAttributes.position,VA=!!z.morphAttributes.normal,Me=!!z.morphAttributes.color,qe=I.toneMapped?f.toneMapping:bt,qt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,se=qt!==void 0?qt.length:0,PA=wA.get(I),Ts=g.state.lights;if(j===!0&&(pA===!0||C!==S)){const He=C===S&&I.id===U;G.setState(I,C,He)}let he=!1;I.version===PA.__version?(PA.needsLights&&PA.lightsStateVersion!==Ts.state.version||PA.outputColorSpace!==FA||Y.isInstancedMesh&&PA.instancing===!1||!Y.isInstancedMesh&&PA.instancing===!0||Y.isSkinnedMesh&&PA.skinning===!1||!Y.isSkinnedMesh&&PA.skinning===!0||PA.envMap!==SA||I.fog===!0&&PA.fog!==vA||PA.numClippingPlanes!==void 0&&(PA.numClippingPlanes!==G.numPlanes||PA.numIntersection!==G.numIntersection)||PA.vertexAlphas!==QA||PA.vertexTangents!==IA||PA.morphTargets!==RA||PA.morphNormals!==VA||PA.morphColors!==Me||PA.toneMapping!==qe||sA.isWebGL2===!0&&PA.morphTargetsCount!==se)&&(he=!0):(he=!0,PA.__version=I.version);let jt=PA.currentProgram;he===!0&&(jt=ar(I,H,Y));let bo=!1,Bi=!1,Qs=!1;const ye=jt.getUniforms(),$t=PA.uniforms;if(_A.useProgram(jt.program)&&(bo=!0,Bi=!0,Qs=!0),I.id!==U&&(U=I.id,Bi=!0),bo||S!==C){if(ye.setValue(b,"projectionMatrix",C.projectionMatrix),sA.logarithmicDepthBuffer&&ye.setValue(b,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),S!==C&&(S=C,Bi=!0,Qs=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){const He=ye.map.cameraPosition;He!==void 0&&He.setValue(b,J.setFromMatrixPosition(C.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&ye.setValue(b,"isOrthographic",C.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||Y.isSkinnedMesh)&&ye.setValue(b,"viewMatrix",C.matrixWorldInverse)}if(Y.isSkinnedMesh){ye.setOptional(b,Y,"bindMatrix"),ye.setOptional(b,Y,"bindMatrixInverse");const He=Y.skeleton;He&&(sA.floatVertexTextures?(He.boneTexture===null&&He.computeBoneTexture(),ye.setValue(b,"boneTexture",He.boneTexture,yA),ye.setValue(b,"boneTextureSize",He.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Is=z.morphAttributes;if((Is.position!==void 0||Is.normal!==void 0||Is.color!==void 0&&sA.isWebGL2===!0)&&oA.update(Y,z,jt),(Bi||PA.receiveShadow!==Y.receiveShadow)&&(PA.receiveShadow=Y.receiveShadow,ye.setValue(b,"receiveShadow",Y.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&($t.envMap.value=SA,$t.flipEnvMap.value=SA.isCubeTexture&&SA.isRenderTargetTexture===!1?-1:1),Bi&&(ye.setValue(b,"toneMappingExposure",f.toneMappingExposure),PA.needsLights&&Dh($t,Qs),vA&&I.fog===!0&&ve.refreshFogUniforms($t,vA),ve.refreshMaterialUniforms($t,I,Q,V,nA),As.upload(b,PA.uniformsList,$t,yA)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(As.upload(b,PA.uniformsList,$t,yA),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&ye.setValue(b,"center",Y.center),ye.setValue(b,"modelViewMatrix",Y.modelViewMatrix),ye.setValue(b,"normalMatrix",Y.normalMatrix),ye.setValue(b,"modelMatrix",Y.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const He=I.uniformsGroups;for(let Ls=0,Oh=He.length;Ls<Oh;Ls++)if(sA.isWebGL2){const To=He[Ls];dA.update(To,jt),dA.bind(To,jt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return jt}function Dh(C,H){C.ambientLightColor.needsUpdate=H,C.lightProbe.needsUpdate=H,C.directionalLights.needsUpdate=H,C.directionalLightShadows.needsUpdate=H,C.pointLights.needsUpdate=H,C.pointLightShadows.needsUpdate=H,C.spotLights.needsUpdate=H,C.spotLightShadows.needsUpdate=H,C.rectAreaLights.needsUpdate=H,C.hemisphereLights.needsUpdate=H}function Ph(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(C,H,z){wA.get(C.texture).__webglTexture=H,wA.get(C.depthTexture).__webglTexture=z;const I=wA.get(C);I.__hasExternalTextures=!0,I.__hasExternalTextures&&(I.__autoAllocateDepthBuffer=z===void 0,I.__autoAllocateDepthBuffer||EA.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,H){const z=wA.get(C);z.__webglFramebuffer=H,z.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(C,H=0,z=0){w=C,E=H,x=z;let I=!0,Y=null,vA=!1,CA=!1;if(C){const SA=wA.get(C);SA.__useDefaultFramebuffer!==void 0?(_A.bindFramebuffer(b.FRAMEBUFFER,null),I=!1):SA.__webglFramebuffer===void 0?yA.setupRenderTarget(C):SA.__hasExternalTextures&&yA.rebindTextures(C,wA.get(C.texture).__webglTexture,wA.get(C.depthTexture).__webglTexture);const QA=C.texture;(QA.isData3DTexture||QA.isDataArrayTexture||QA.isCompressedArrayTexture)&&(CA=!0);const IA=wA.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Y=IA[H],vA=!0):sA.isWebGL2&&C.samples>0&&yA.useMultisampledRTT(C)===!1?Y=wA.get(C).__webglMultisampledFramebuffer:Y=IA,R.copy(C.viewport),B.copy(C.scissor),M=C.scissorTest}else R.copy(q).multiplyScalar(Q).floor(),B.copy(K).multiplyScalar(Q).floor(),M=W;if(_A.bindFramebuffer(b.FRAMEBUFFER,Y)&&sA.drawBuffers&&I&&_A.drawBuffers(C,Y),_A.viewport(R),_A.scissor(B),_A.setScissorTest(M),vA){const SA=wA.get(C.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+H,SA.__webglTexture,z)}else if(CA){const SA=wA.get(C.texture),QA=H||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,SA.__webglTexture,z||0,QA)}U=-1},this.readRenderTargetPixels=function(C,H,z,I,Y,vA,CA){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let FA=wA.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&CA!==void 0&&(FA=FA[CA]),FA){_A.bindFramebuffer(b.FRAMEBUFFER,FA);try{const SA=C.texture,QA=SA.format,IA=SA.type;if(QA!==st&&P.convert(QA)!==b.getParameter(b.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const RA=IA===Wi&&(EA.has("EXT_color_buffer_half_float")||sA.isWebGL2&&EA.has("EXT_color_buffer_float"));if(IA!==_n&&P.convert(IA)!==b.getParameter(b.IMPLEMENTATION_COLOR_READ_TYPE)&&!(IA===cn&&(sA.isWebGL2||EA.has("OES_texture_float")||EA.has("WEBGL_color_buffer_float")))&&!RA){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=C.width-I&&z>=0&&z<=C.height-Y&&b.readPixels(H,z,I,Y,P.convert(QA),P.convert(IA),vA)}finally{const SA=w!==null?wA.get(w).__webglFramebuffer:null;_A.bindFramebuffer(b.FRAMEBUFFER,SA)}}},this.copyFramebufferToTexture=function(C,H,z=0){const I=Math.pow(2,-z),Y=Math.floor(H.image.width*I),vA=Math.floor(H.image.height*I);yA.setTexture2D(H,0),b.copyTexSubImage2D(b.TEXTURE_2D,z,0,0,C.x,C.y,Y,vA),_A.unbindTexture()},this.copyTextureToTexture=function(C,H,z,I=0){const Y=H.image.width,vA=H.image.height,CA=P.convert(z.format),FA=P.convert(z.type);yA.setTexture2D(z,0),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,z.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,z.unpackAlignment),H.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,I,C.x,C.y,Y,vA,CA,FA,H.image.data):H.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,I,C.x,C.y,H.mipmaps[0].width,H.mipmaps[0].height,CA,H.mipmaps[0].data):b.texSubImage2D(b.TEXTURE_2D,I,C.x,C.y,CA,FA,H.image),I===0&&z.generateMipmaps&&b.generateMipmap(b.TEXTURE_2D),_A.unbindTexture()},this.copyTextureToTexture3D=function(C,H,z,I,Y=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const vA=C.max.x-C.min.x+1,CA=C.max.y-C.min.y+1,FA=C.max.z-C.min.z+1,SA=P.convert(I.format),QA=P.convert(I.type);let IA;if(I.isData3DTexture)yA.setTexture3D(I,0),IA=b.TEXTURE_3D;else if(I.isDataArrayTexture)yA.setTexture2DArray(I,0),IA=b.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,I.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,I.unpackAlignment);const RA=b.getParameter(b.UNPACK_ROW_LENGTH),VA=b.getParameter(b.UNPACK_IMAGE_HEIGHT),Me=b.getParameter(b.UNPACK_SKIP_PIXELS),qe=b.getParameter(b.UNPACK_SKIP_ROWS),qt=b.getParameter(b.UNPACK_SKIP_IMAGES),se=z.isCompressedTexture?z.mipmaps[0]:z.image;b.pixelStorei(b.UNPACK_ROW_LENGTH,se.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,se.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,C.min.x),b.pixelStorei(b.UNPACK_SKIP_ROWS,C.min.y),b.pixelStorei(b.UNPACK_SKIP_IMAGES,C.min.z),z.isDataTexture||z.isData3DTexture?b.texSubImage3D(IA,Y,H.x,H.y,H.z,vA,CA,FA,SA,QA,se.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),b.compressedTexSubImage3D(IA,Y,H.x,H.y,H.z,vA,CA,FA,SA,se.data)):b.texSubImage3D(IA,Y,H.x,H.y,H.z,vA,CA,FA,SA,QA,se),b.pixelStorei(b.UNPACK_ROW_LENGTH,RA),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,VA),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Me),b.pixelStorei(b.UNPACK_SKIP_ROWS,qe),b.pixelStorei(b.UNPACK_SKIP_IMAGES,qt),Y===0&&I.generateMipmaps&&b.generateMipmap(IA),_A.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?yA.setTextureCube(C,0):C.isData3DTexture?yA.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?yA.setTexture2DArray(C,0):yA.setTexture2D(C,0),_A.unbindTexture()},this.resetState=function(){E=0,x=0,w=null,_A.reset(),lA.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(A){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!A}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===MA?mn:su}set outputEncoding(A){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=A===mn?MA:gt}}class Vm extends Uu{}Vm.prototype.isWebGL1Renderer=!0;class Km extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(A,e){return super.copy(A,e),A.background!==null&&(this.background=A.background.clone()),A.environment!==null&&(this.environment=A.environment.clone()),A.fog!==null&&(this.fog=A.fog.clone()),this.backgroundBlurriness=A.backgroundBlurriness,this.backgroundIntensity=A.backgroundIntensity,A.overrideMaterial!==null&&(this.overrideMaterial=A.overrideMaterial.clone()),this.matrixAutoUpdate=A.matrixAutoUpdate,this}toJSON(A){const e=super.toJSON(A);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(A){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=A}}class km{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(A,e){const t=this.getUtoTmapping(A);return this.getPoint(t,e)}getPoints(A=5){const e=[];for(let t=0;t<=A;t++)e.push(this.getPoint(t/A));return e}getSpacedPoints(A=5){const e=[];for(let t=0;t<=A;t++)e.push(this.getPointAt(t/A));return e}getLength(){const A=this.getLengths();return A[A.length-1]}getLengths(A=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===A+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let t,i=this.getPoint(0),r=0;e.push(0);for(let s=1;s<=A;s++)t=this.getPoint(s/A),r+=t.distanceTo(i),e.push(r),i=t;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(A,e){const t=this.getLengths();let i=0;const r=t.length;let s;e?s=e:s=A*t[r-1];let a=0,o=r-1,l;for(;a<=o;)if(i=Math.floor(a+(o-a)/2),l=t[i]-s,l<0)a=i+1;else if(l>0)o=i-1;else{o=i;break}if(i=o,t[i]===s)return i/(r-1);const c=t[i],h=t[i+1]-c,d=(s-c)/h;return(i+d)/(r-1)}getTangent(A,e){let i=A-1e-4,r=A+1e-4;i<0&&(i=0),r>1&&(r=1);const s=this.getPoint(i),a=this.getPoint(r),o=e||(s.isVector2?new LA:new L);return o.copy(a).sub(s).normalize(),o}getTangentAt(A,e){const t=this.getUtoTmapping(A);return this.getTangent(t,e)}computeFrenetFrames(A,e){const t=new L,i=[],r=[],s=[],a=new L,o=new pe;for(let d=0;d<=A;d++){const g=d/A;i[d]=this.getTangentAt(g,new L)}r[0]=new L,s[0]=new L;let l=Number.MAX_VALUE;const c=Math.abs(i[0].x),u=Math.abs(i[0].y),h=Math.abs(i[0].z);c<=l&&(l=c,t.set(1,0,0)),u<=l&&(l=u,t.set(0,1,0)),h<=l&&t.set(0,0,1),a.crossVectors(i[0],t).normalize(),r[0].crossVectors(i[0],a),s[0].crossVectors(i[0],r[0]);for(let d=1;d<=A;d++){if(r[d]=r[d-1].clone(),s[d]=s[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(me(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(o.makeRotationAxis(a,g))}s[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(me(r[0].dot(r[A]),-1,1));d/=A,i[0].dot(a.crossVectors(r[0],r[A]))>0&&(d=-d);for(let g=1;g<=A;g++)r[g].applyMatrix4(o.makeRotationAxis(i[g],d*g)),s[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(A){return this.arcLengthDivisions=A.arcLengthDivisions,this}toJSON(){const A={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return A.arcLengthDivisions=this.arcLengthDivisions,A.type=this.type,A}fromJSON(A){return this.arcLengthDivisions=A.arcLengthDivisions,this}}class Jl{constructor(A=1,e=0,t=0){return this.radius=A,this.phi=e,this.theta=t,this}set(A,e,t){return this.radius=A,this.phi=e,this.theta=t,this}copy(A){return this.radius=A.radius,this.phi=A.phi,this.theta=A.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(A){return this.setFromCartesianCoords(A.x,A.y,A.z)}setFromCartesianCoords(A,e,t){return this.radius=Math.sqrt(A*A+e*e+t*t),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(A,t),this.phi=Math.acos(me(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:po}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=po);/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */class pt{constructor(A,e,t,i,r="div"){this.parent=A,this.object=e,this.property=t,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),pt.nextNameID=pt.nextNameID||0,this.$name.id="lil-gui-name-"+ ++pt.nextNameID,this.$widget=document.createElement(r),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(t)}name(A){return this._name=A,this.$name.innerHTML=A,this}onChange(A){return this._onChange=A,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(A){return this._onFinishChange=A,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(A=!0){return this.disable(!A)}disable(A=!0){return A===this._disabled||(this._disabled=A,this.domElement.classList.toggle("disabled",A),this.$disable.toggleAttribute("disabled",A)),this}show(A=!0){return this._hidden=!A,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(A){const e=this.parent.add(this.object,this.property,A);return e.name(this._name),this.destroy(),e}min(A){return this}max(A){return this}step(A){return this}decimals(A){return this}listen(A=!0){return this._listening=A,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const A=this.save();A!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=A}getValue(){return this.object[this.property]}setValue(A){return this.object[this.property]=A,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(A){return this.setValue(A),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}let zm=class extends pt{constructor(A,e,t){super(A,e,t,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}};function Ka(n){let A,e;return(A=n.match(/(#|0x)?([a-f0-9]{6})/i))?e=A[2]:(A=n.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(A[1]).toString(16).padStart(2,0)+parseInt(A[2]).toString(16).padStart(2,0)+parseInt(A[3]).toString(16).padStart(2,0):(A=n.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=A[1]+A[1]+A[2]+A[2]+A[3]+A[3]),!!e&&"#"+e}const Wm={isPrimitive:!0,match:n=>typeof n=="string",fromHexString:Ka,toHexString:Ka},Xi={isPrimitive:!0,match:n=>typeof n=="number",fromHexString:n=>parseInt(n.substring(1),16),toHexString:n=>"#"+n.toString(16).padStart(6,0)},Xm={isPrimitive:!1,match:Array.isArray,fromHexString(n,A,e=1){const t=Xi.fromHexString(n);A[0]=(t>>16&255)/255*e,A[1]=(t>>8&255)/255*e,A[2]=(255&t)/255*e},toHexString:([n,A,e],t=1)=>Xi.toHexString(n*(t=255/t)<<16^A*t<<8^e*t<<0)},Ym={isPrimitive:!1,match:n=>Object(n)===n,fromHexString(n,A,e=1){const t=Xi.fromHexString(n);A.r=(t>>16&255)/255*e,A.g=(t>>8&255)/255*e,A.b=(255&t)/255*e},toHexString:({r:n,g:A,b:e},t=1)=>Xi.toHexString(n*(t=255/t)<<16^A*t<<8^e*t<<0)},Jm=[Wm,Xi,Xm,Ym];let Zm=class extends pt{constructor(A,e,t,i){var r;super(A,e,t,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(r=this.initialValue,Jm.find(s=>s.match(r))),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=Ka(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(A){if(this._format.isPrimitive){const e=this._format.fromHexString(A);this.setValue(e)}else this._format.fromHexString(A,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(A){return this._setValueFromHexString(A),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}};class ha extends pt{constructor(A,e,t){super(A,e,t,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class qm extends pt{constructor(A,e,t,i,r,s){super(A,e,t,"number"),this._initInput(),this.min(i),this.max(r);const a=s!==void 0;this.step(a?s:this._getImplicitStep(),a),this.updateDisplay()}decimals(A){return this._decimals=A,this.updateDisplay(),this}min(A){return this._min=A,this._onUpdateMinMax(),this}max(A){return this._max=A,this._onUpdateMinMax(),this}step(A,e=!0){return this._step=A,this._stepExplicit=e,this}updateDisplay(){const A=this.getValue();if(this._hasSlider){let e=(A-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=100*e+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?A:A.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const A=c=>{const u=parseFloat(this.$input.value);isNaN(u)||(this._snapClampSetValue(u+c),this.$input.value=this.getValue())};let e,t,i,r,s,a=!1;const o=c=>{if(a){const u=c.clientX-e,h=c.clientY-t;Math.abs(h)>5?(c.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(u)>5&&l()}if(!a){const u=c.clientY-i;s-=u*this._step*this._arrowKeyMultiplier(c),r+s>this._max?s=this._max-r:r+s<this._min&&(s=this._min-r),this._snapClampSetValue(r+s)}i=c.clientY},l=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",o),window.removeEventListener("mouseup",l)};this.$input.addEventListener("input",()=>{let c=parseFloat(this.$input.value);isNaN(c)||(this._stepExplicit&&(c=this._snap(c)),this.setValue(this._clamp(c)))}),this.$input.addEventListener("keydown",c=>{c.code==="Enter"&&this.$input.blur(),c.code==="ArrowUp"&&(c.preventDefault(),A(this._step*this._arrowKeyMultiplier(c))),c.code==="ArrowDown"&&(c.preventDefault(),A(this._step*this._arrowKeyMultiplier(c)*-1))}),this.$input.addEventListener("wheel",c=>{this._inputFocused&&(c.preventDefault(),A(this._step*this._normalizeMouseWheel(c)))},{passive:!1}),this.$input.addEventListener("mousedown",c=>{e=c.clientX,t=i=c.clientY,a=!0,r=this.getValue(),s=0,window.addEventListener("mousemove",o),window.addEventListener("mouseup",l)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const A=h=>{const d=this.$slider.getBoundingClientRect();let g=(m=h,p=d.left,f=d.right,_=this._min,E=this._max,(m-p)/(f-p)*(E-_)+_);var m,p,f,_,E;this._snapClampSetValue(g)},e=h=>{A(h.clientX)},t=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",e),window.removeEventListener("mouseup",t)};let i,r,s=!1;const a=h=>{h.preventDefault(),this._setDraggingStyle(!0),A(h.touches[0].clientX),s=!1},o=h=>{if(s){const d=h.touches[0].clientX-i,g=h.touches[0].clientY-r;Math.abs(d)>Math.abs(g)?a(h):(window.removeEventListener("touchmove",o),window.removeEventListener("touchend",l))}else h.preventDefault(),A(h.touches[0].clientX)},l=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",o),window.removeEventListener("touchend",l)},c=this._callOnFinishChange.bind(this);let u;this.$slider.addEventListener("mousedown",h=>{this._setDraggingStyle(!0),A(h.clientX),window.addEventListener("mousemove",e),window.addEventListener("mouseup",t)}),this.$slider.addEventListener("touchstart",h=>{h.touches.length>1||(this._hasScrollBar?(i=h.touches[0].clientX,r=h.touches[0].clientY,s=!0):a(h),window.addEventListener("touchmove",o,{passive:!1}),window.addEventListener("touchend",l))},{passive:!1}),this.$slider.addEventListener("wheel",h=>{if(Math.abs(h.deltaX)<Math.abs(h.deltaY)&&this._hasScrollBar)return;h.preventDefault();const d=this._normalizeMouseWheel(h)*this._step;this._snapClampSetValue(this.getValue()+d),this.$input.value=this.getValue(),clearTimeout(u),u=setTimeout(c,400)},{passive:!1})}_setDraggingStyle(A,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",A),document.body.classList.toggle("lil-gui-dragging",A),document.body.classList.toggle("lil-gui-"+e,A)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(A){let{deltaX:e,deltaY:t}=A;return Math.floor(A.deltaY)!==A.deltaY&&A.wheelDelta&&(e=0,t=-A.wheelDelta/120,t*=this._stepExplicit?1:10),e+-t}_arrowKeyMultiplier(A){let e=this._stepExplicit?1:10;return A.shiftKey?e*=10:A.altKey&&(e/=10),e}_snap(A){const e=Math.round(A/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(A){return A<this._min&&(A=this._min),A>this._max&&(A=this._max),A}_snapClampSetValue(A){this.setValue(this._clamp(this._snap(A)))}get _hasScrollBar(){const A=this.parent.root.$children;return A.scrollHeight>A.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class jm extends pt{constructor(A,e,t,i){super(A,e,t,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(i)?i:Object.values(i),this._names=Array.isArray(i)?i:Object.keys(i),this._names.forEach(r=>{const s=document.createElement("option");s.innerHTML=r,this.$select.appendChild(s)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const A=this.getValue(),e=this._values.indexOf(A);return this.$select.selectedIndex=e,this.$display.innerHTML=e===-1?A:this._names[e],this}}let $m=class extends pt{constructor(A,e,t){super(A,e,t,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}},Zl=!1;class vo{constructor({parent:A,autoPlace:e=A===void 0,container:t,width:i,title:r="Controls",injectStyles:s=!0,touchStyles:a=!0}={}){if(this.parent=A,this.root=A?A.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",o=>{o.code!=="Enter"&&o.code!=="Space"||(o.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),a&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!Zl&&s&&(function(o){const l=document.createElement("style");l.innerHTML=o;const c=document.querySelector("head link[rel=stylesheet], head style");c?document.head.insertBefore(l,c):document.head.appendChild(l)}('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"↕";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"▾";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"▸"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"✓";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),Zl=!0),t?t.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation())}add(A,e,t,i,r){if(Object(t)===t)return new jm(this,A,e,t);const s=A[e];switch(typeof s){case"number":return new qm(this,A,e,t,i,r);case"boolean":return new zm(this,A,e);case"string":return new $m(this,A,e);case"function":return new ha(this,A,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,A,`
	value:`,s)}addColor(A,e,t=1){return new Zm(this,A,e,t)}addFolder(A){return new vo({parent:this,title:A})}load(A,e=!0){return A.controllers&&this.controllers.forEach(t=>{t instanceof ha||t._name in A.controllers&&t.load(A.controllers[t._name])}),e&&A.folders&&this.folders.forEach(t=>{t._title in A.folders&&t.load(A.folders[t._title])}),this}save(A=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(t=>{if(!(t instanceof ha)){if(t._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${t._name}"`);e.controllers[t._name]=t.save()}}),A&&this.folders.forEach(t=>{if(t._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${t._title}"`);e.folders[t._title]=t.save()}),e}open(A=!0){return this._closed=!A,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(A=!0){return this._hidden=!A,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(A=!0){return this._closed=!A,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const t=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",t))};this.$children.addEventListener("transitionend",t);const i=A?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!A),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(A){return this._title=A,this.$title.innerHTML=A,this}reset(A=!0){return(A?this.controllersRecursive():this.controllers).forEach(e=>e.reset()),this}onChange(A){return this._onChange=A,this}_callOnChange(A){this.parent&&this.parent._callOnChange(A),this._onChange!==void 0&&this._onChange.call(this,{object:A.object,property:A.property,value:A.getValue(),controller:A})}onFinishChange(A){return this._onFinishChange=A,this}_callOnFinishChange(A){this.parent&&this.parent._callOnFinishChange(A),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:A.object,property:A.property,value:A.getValue(),controller:A})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(A=>A.destroy())}controllersRecursive(){let A=Array.from(this.controllers);return this.folders.forEach(e=>{A=A.concat(e.controllersRecursive())}),A}foldersRecursive(){let A=Array.from(this.folders);return this.folders.forEach(e=>{A=A.concat(e.foldersRecursive())}),A}}const AB="modulepreload",eB=function(n){return"/climate-helix/"+n},ql={},tB=function(A,e,t){if(!e||e.length===0)return A();const i=document.getElementsByTagName("link");return Promise.all(e.map(r=>{if(r=eB(r),r in ql)return;ql[r]=!0;const s=r.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(!!t)for(let c=i.length-1;c>=0;c--){const u=i[c];if(u.href===r&&(!s||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const l=document.createElement("link");if(l.rel=s?"stylesheet":AB,s||(l.as="script",l.crossOrigin=""),l.href=r,document.head.appendChild(l),s)return new Promise((c,u)=>{l.addEventListener("load",c),l.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>A())};/*!
 * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ka=function(n,A){return ka=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])},ka(n,A)};function lt(n,A){if(typeof A!="function"&&A!==null)throw new TypeError("Class extends value "+String(A)+" is not a constructor or null");ka(n,A);function e(){this.constructor=n}n.prototype=A===null?Object.create(A):(e.prototype=A.prototype,new e)}var za=function(){return za=Object.assign||function(A){for(var e,t=1,i=arguments.length;t<i;t++){e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(A[r]=e[r])}return A},za.apply(this,arguments)};function be(n,A,e,t){function i(r){return r instanceof e?r:new e(function(s){s(r)})}return new(e||(e=Promise))(function(r,s){function a(c){try{l(t.next(c))}catch(u){s(u)}}function o(c){try{l(t.throw(c))}catch(u){s(u)}}function l(c){c.done?r(c.value):i(c.value).then(a,o)}l((t=t.apply(n,A||[])).next())})}function Ue(n,A){var e={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},t,i,r,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(l){return function(c){return o([l,c])}}function o(l){if(t)throw new TypeError("Generator is already executing.");for(;e;)try{if(t=1,i&&(r=l[0]&2?i.return:l[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,l[1])).done)return r;switch(i=0,r&&(l=[l[0]&2,r.value]),l[0]){case 0:case 1:r=l;break;case 4:return e.label++,{value:l[1],done:!1};case 5:e.label++,i=l[1],l=[0];continue;case 7:l=e.ops.pop(),e.trys.pop();continue;default:if(r=e.trys,!(r=r.length>0&&r[r.length-1])&&(l[0]===6||l[0]===2)){e=0;continue}if(l[0]===3&&(!r||l[1]>r[0]&&l[1]<r[3])){e.label=l[1];break}if(l[0]===6&&e.label<r[1]){e.label=r[1],r=l;break}if(r&&e.label<r[2]){e.label=r[2],e.ops.push(l);break}r[2]&&e.ops.pop(),e.trys.pop();continue}l=A.call(n,e)}catch(c){l=[6,c],i=0}finally{t=r=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function Sr(n,A,e){if(e||arguments.length===2)for(var t=0,i=A.length,r;t<i;t++)(r||!(t in A))&&(r||(r=Array.prototype.slice.call(A,0,t)),r[t]=A[t]);return n.concat(r||A)}var Qt=function(){function n(A,e,t,i){this.left=A,this.top=e,this.width=t,this.height=i}return n.prototype.add=function(A,e,t,i){return new n(this.left+A,this.top+e,this.width+t,this.height+i)},n.fromClientRect=function(A,e){return new n(e.left+A.windowBounds.left,e.top+A.windowBounds.top,e.width,e.height)},n.fromDOMRectList=function(A,e){var t=Array.from(e).find(function(i){return i.width!==0});return t?new n(t.left+A.windowBounds.left,t.top+A.windowBounds.top,t.width,t.height):n.EMPTY},n.EMPTY=new n(0,0,0,0),n}(),_s=function(n,A){return Qt.fromClientRect(n,A.getBoundingClientRect())},nB=function(n){var A=n.body,e=n.documentElement;if(!A||!e)throw new Error("Unable to get document size");var t=Math.max(Math.max(A.scrollWidth,e.scrollWidth),Math.max(A.offsetWidth,e.offsetWidth),Math.max(A.clientWidth,e.clientWidth)),i=Math.max(Math.max(A.scrollHeight,e.scrollHeight),Math.max(A.offsetHeight,e.offsetHeight),Math.max(A.clientHeight,e.clientHeight));return new Qt(0,0,t,i)},Cs=function(n){for(var A=[],e=0,t=n.length;e<t;){var i=n.charCodeAt(e++);if(i>=55296&&i<=56319&&e<t){var r=n.charCodeAt(e++);(r&64512)===56320?A.push(((i&1023)<<10)+(r&1023)+65536):(A.push(i),e--)}else A.push(i)}return A},ie=function(){for(var n=[],A=0;A<arguments.length;A++)n[A]=arguments[A];if(String.fromCodePoint)return String.fromCodePoint.apply(String,n);var e=n.length;if(!e)return"";for(var t=[],i=-1,r="";++i<e;){var s=n[i];s<=65535?t.push(s):(s-=65536,t.push((s>>10)+55296,s%1024+56320)),(i+1===e||t.length>16384)&&(r+=String.fromCharCode.apply(String,t),t.length=0)}return r},jl="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",iB=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var br=0;br<jl.length;br++)iB[jl.charCodeAt(br)]=br;var $l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Si=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Tr=0;Tr<$l.length;Tr++)Si[$l.charCodeAt(Tr)]=Tr;var rB=function(n){var A=n.length*.75,e=n.length,t,i=0,r,s,a,o;n[n.length-1]==="="&&(A--,n[n.length-2]==="="&&A--);var l=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(A):new Array(A),c=Array.isArray(l)?l:new Uint8Array(l);for(t=0;t<e;t+=4)r=Si[n.charCodeAt(t)],s=Si[n.charCodeAt(t+1)],a=Si[n.charCodeAt(t+2)],o=Si[n.charCodeAt(t+3)],c[i++]=r<<2|s>>4,c[i++]=(s&15)<<4|a>>2,c[i++]=(a&3)<<6|o&63;return l},sB=function(n){for(var A=n.length,e=[],t=0;t<A;t+=2)e.push(n[t+1]<<8|n[t]);return e},aB=function(n){for(var A=n.length,e=[],t=0;t<A;t+=4)e.push(n[t+3]<<24|n[t+2]<<16|n[t+1]<<8|n[t]);return e},wn=5,_o=6+5,fa=2,oB=_o-wn,Fu=65536>>wn,lB=1<<wn,da=lB-1,cB=1024>>wn,uB=Fu+cB,hB=uB,fB=32,dB=hB+fB,pB=65536>>_o,gB=1<<oB,mB=gB-1,Ac=function(n,A,e){return n.slice?n.slice(A,e):new Uint16Array(Array.prototype.slice.call(n,A,e))},BB=function(n,A,e){return n.slice?n.slice(A,e):new Uint32Array(Array.prototype.slice.call(n,A,e))},wB=function(n,A){var e=rB(n),t=Array.isArray(e)?aB(e):new Uint32Array(e),i=Array.isArray(e)?sB(e):new Uint16Array(e),r=24,s=Ac(i,r/2,t[4]/2),a=t[5]===2?Ac(i,(r+t[4])/2):BB(t,Math.ceil((r+t[4])/4));return new vB(t[0],t[1],t[2],t[3],s,a)},vB=function(){function n(A,e,t,i,r,s){this.initialValue=A,this.errorValue=e,this.highStart=t,this.highValueIndex=i,this.index=r,this.data=s}return n.prototype.get=function(A){var e;if(A>=0){if(A<55296||A>56319&&A<=65535)return e=this.index[A>>wn],e=(e<<fa)+(A&da),this.data[e];if(A<=65535)return e=this.index[Fu+(A-55296>>wn)],e=(e<<fa)+(A&da),this.data[e];if(A<this.highStart)return e=dB-pB+(A>>_o),e=this.index[e],e+=A>>wn&mB,e=this.index[e],e=(e<<fa)+(A&da),this.data[e];if(A<=1114111)return this.data[this.highValueIndex]}return this.errorValue},n}(),ec="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",_B=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Qr=0;Qr<ec.length;Qr++)_B[ec.charCodeAt(Qr)]=Qr;var CB="KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==",tc=50,EB=1,Mu=2,yu=3,xB=4,UB=5,nc=7,Su=8,ic=9,Vt=10,Wa=11,rc=12,Xa=13,FB=14,bi=15,Ya=16,Ir=17,Ei=18,MB=19,sc=20,Ja=21,xi=22,pa=23,kn=24,Ne=25,Ti=26,Qi=27,zn=28,yB=29,on=30,SB=31,Lr=32,Rr=33,Za=34,qa=35,ja=36,Yi=37,$a=38,es=39,ts=40,ga=41,bu=42,bB=43,TB=[9001,65288],Tu="!",HA="×",Hr="÷",Ao=wB(CB),Ut=[on,ja],eo=[EB,Mu,yu,UB],Qu=[Vt,Su],ac=[Qi,Ti],QB=eo.concat(Qu),oc=[$a,es,ts,Za,qa],IB=[bi,Xa],LB=function(n,A){A===void 0&&(A="strict");var e=[],t=[],i=[];return n.forEach(function(r,s){var a=Ao.get(r);if(a>tc?(i.push(!0),a-=tc):i.push(!1),["normal","auto","loose"].indexOf(A)!==-1&&[8208,8211,12316,12448].indexOf(r)!==-1)return t.push(s),e.push(Ya);if(a===xB||a===Wa){if(s===0)return t.push(s),e.push(on);var o=e[s-1];return QB.indexOf(o)===-1?(t.push(t[s-1]),e.push(o)):(t.push(s),e.push(on))}if(t.push(s),a===SB)return e.push(A==="strict"?Ja:Yi);if(a===bu||a===yB)return e.push(on);if(a===bB)return r>=131072&&r<=196605||r>=196608&&r<=262141?e.push(Yi):e.push(on);e.push(a)}),[t,e,i]},ma=function(n,A,e,t){var i=t[e];if(Array.isArray(n)?n.indexOf(i)!==-1:n===i)for(var r=e;r<=t.length;){r++;var s=t[r];if(s===A)return!0;if(s!==Vt)break}if(i===Vt)for(var r=e;r>0;){r--;var a=t[r];if(Array.isArray(n)?n.indexOf(a)!==-1:n===a)for(var o=e;o<=t.length;){o++;var s=t[o];if(s===A)return!0;if(s!==Vt)break}if(a!==Vt)break}return!1},lc=function(n,A){for(var e=n;e>=0;){var t=A[e];if(t===Vt)e--;else return t}return 0},RB=function(n,A,e,t,i){if(e[t]===0)return HA;var r=t-1;if(Array.isArray(i)&&i[r]===!0)return HA;var s=r-1,a=r+1,o=A[r],l=s>=0?A[s]:0,c=A[a];if(o===Mu&&c===yu)return HA;if(eo.indexOf(o)!==-1)return Tu;if(eo.indexOf(c)!==-1||Qu.indexOf(c)!==-1)return HA;if(lc(r,A)===Su)return Hr;if(Ao.get(n[r])===Wa||(o===Lr||o===Rr)&&Ao.get(n[a])===Wa||o===nc||c===nc||o===ic||[Vt,Xa,bi].indexOf(o)===-1&&c===ic||[Ir,Ei,MB,kn,zn].indexOf(c)!==-1||lc(r,A)===xi||ma(pa,xi,r,A)||ma([Ir,Ei],Ja,r,A)||ma(rc,rc,r,A))return HA;if(o===Vt)return Hr;if(o===pa||c===pa)return HA;if(c===Ya||o===Ya)return Hr;if([Xa,bi,Ja].indexOf(c)!==-1||o===FB||l===ja&&IB.indexOf(o)!==-1||o===zn&&c===ja||c===sc||Ut.indexOf(c)!==-1&&o===Ne||Ut.indexOf(o)!==-1&&c===Ne||o===Qi&&[Yi,Lr,Rr].indexOf(c)!==-1||[Yi,Lr,Rr].indexOf(o)!==-1&&c===Ti||Ut.indexOf(o)!==-1&&ac.indexOf(c)!==-1||ac.indexOf(o)!==-1&&Ut.indexOf(c)!==-1||[Qi,Ti].indexOf(o)!==-1&&(c===Ne||[xi,bi].indexOf(c)!==-1&&A[a+1]===Ne)||[xi,bi].indexOf(o)!==-1&&c===Ne||o===Ne&&[Ne,zn,kn].indexOf(c)!==-1)return HA;if([Ne,zn,kn,Ir,Ei].indexOf(c)!==-1)for(var u=r;u>=0;){var h=A[u];if(h===Ne)return HA;if([zn,kn].indexOf(h)!==-1)u--;else break}if([Qi,Ti].indexOf(c)!==-1)for(var u=[Ir,Ei].indexOf(o)!==-1?s:r;u>=0;){var h=A[u];if(h===Ne)return HA;if([zn,kn].indexOf(h)!==-1)u--;else break}if($a===o&&[$a,es,Za,qa].indexOf(c)!==-1||[es,Za].indexOf(o)!==-1&&[es,ts].indexOf(c)!==-1||[ts,qa].indexOf(o)!==-1&&c===ts||oc.indexOf(o)!==-1&&[sc,Ti].indexOf(c)!==-1||oc.indexOf(c)!==-1&&o===Qi||Ut.indexOf(o)!==-1&&Ut.indexOf(c)!==-1||o===kn&&Ut.indexOf(c)!==-1||Ut.concat(Ne).indexOf(o)!==-1&&c===xi&&TB.indexOf(n[a])===-1||Ut.concat(Ne).indexOf(c)!==-1&&o===Ei)return HA;if(o===ga&&c===ga){for(var d=e[r],g=1;d>0&&(d--,A[d]===ga);)g++;if(g%2!==0)return HA}return o===Lr&&c===Rr?HA:Hr},HB=function(n,A){A||(A={lineBreak:"normal",wordBreak:"normal"});var e=LB(n,A.lineBreak),t=e[0],i=e[1],r=e[2];(A.wordBreak==="break-all"||A.wordBreak==="break-word")&&(i=i.map(function(a){return[Ne,on,bu].indexOf(a)!==-1?Yi:a}));var s=A.wordBreak==="keep-all"?r.map(function(a,o){return a&&n[o]>=19968&&n[o]<=40959}):void 0;return[t,i,s]},DB=function(){function n(A,e,t,i){this.codePoints=A,this.required=e===Tu,this.start=t,this.end=i}return n.prototype.slice=function(){return ie.apply(void 0,this.codePoints.slice(this.start,this.end))},n}(),PB=function(n,A){var e=Cs(n),t=HB(e,A),i=t[0],r=t[1],s=t[2],a=e.length,o=0,l=0;return{next:function(){if(l>=a)return{done:!0,value:null};for(var c=HA;l<a&&(c=RB(e,r,i,++l,s))===HA;);if(c!==HA||l===a){var u=new DB(e,c,o,l);return o=l,{value:u,done:!1}}return{done:!0,value:null}}}},OB=1<<0,NB=1<<1,rr=1<<2,cc=1<<3,ss=10,uc=47,Di=92,GB=9,VB=32,Dr=34,Ui=61,KB=35,kB=36,zB=37,Pr=39,Or=40,Fi=41,WB=95,Ie=45,XB=33,YB=60,JB=62,ZB=64,qB=91,jB=93,$B=61,A1=123,Nr=63,e1=125,hc=124,t1=126,n1=128,fc=65533,Ba=42,un=43,i1=44,r1=58,s1=59,Ji=46,a1=0,o1=8,l1=11,c1=14,u1=31,h1=127,ht=-1,Iu=48,Lu=97,Ru=101,f1=102,d1=117,p1=122,Hu=65,Du=69,Pu=70,g1=85,m1=90,Fe=function(n){return n>=Iu&&n<=57},B1=function(n){return n>=55296&&n<=57343},Wn=function(n){return Fe(n)||n>=Hu&&n<=Pu||n>=Lu&&n<=f1},w1=function(n){return n>=Lu&&n<=p1},v1=function(n){return n>=Hu&&n<=m1},_1=function(n){return w1(n)||v1(n)},C1=function(n){return n>=n1},Gr=function(n){return n===ss||n===GB||n===VB},as=function(n){return _1(n)||C1(n)||n===WB},dc=function(n){return as(n)||Fe(n)||n===Ie},E1=function(n){return n>=a1&&n<=o1||n===l1||n>=c1&&n<=u1||n===h1},Nt=function(n,A){return n!==Di?!1:A!==ss},Vr=function(n,A,e){return n===Ie?as(A)||Nt(A,e):as(n)?!0:!!(n===Di&&Nt(n,A))},wa=function(n,A,e){return n===un||n===Ie?Fe(A)?!0:A===Ji&&Fe(e):Fe(n===Ji?A:n)},x1=function(n){var A=0,e=1;(n[A]===un||n[A]===Ie)&&(n[A]===Ie&&(e=-1),A++);for(var t=[];Fe(n[A]);)t.push(n[A++]);var i=t.length?parseInt(ie.apply(void 0,t),10):0;n[A]===Ji&&A++;for(var r=[];Fe(n[A]);)r.push(n[A++]);var s=r.length,a=s?parseInt(ie.apply(void 0,r),10):0;(n[A]===Du||n[A]===Ru)&&A++;var o=1;(n[A]===un||n[A]===Ie)&&(n[A]===Ie&&(o=-1),A++);for(var l=[];Fe(n[A]);)l.push(n[A++]);var c=l.length?parseInt(ie.apply(void 0,l),10):0;return e*(i+a*Math.pow(10,-s))*Math.pow(10,o*c)},U1={type:2},F1={type:3},M1={type:4},y1={type:13},S1={type:8},b1={type:21},T1={type:9},Q1={type:10},I1={type:11},L1={type:12},R1={type:14},Kr={type:23},H1={type:1},D1={type:25},P1={type:24},O1={type:26},N1={type:27},G1={type:28},V1={type:29},K1={type:31},to={type:32},Ou=function(){function n(){this._value=[]}return n.prototype.write=function(A){this._value=this._value.concat(Cs(A))},n.prototype.read=function(){for(var A=[],e=this.consumeToken();e!==to;)A.push(e),e=this.consumeToken();return A},n.prototype.consumeToken=function(){var A=this.consumeCodePoint();switch(A){case Dr:return this.consumeStringToken(Dr);case KB:var e=this.peekCodePoint(0),t=this.peekCodePoint(1),i=this.peekCodePoint(2);if(dc(e)||Nt(t,i)){var r=Vr(e,t,i)?NB:OB,s=this.consumeName();return{type:5,value:s,flags:r}}break;case kB:if(this.peekCodePoint(0)===Ui)return this.consumeCodePoint(),y1;break;case Pr:return this.consumeStringToken(Pr);case Or:return U1;case Fi:return F1;case Ba:if(this.peekCodePoint(0)===Ui)return this.consumeCodePoint(),R1;break;case un:if(wa(A,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(A),this.consumeNumericToken();break;case i1:return M1;case Ie:var a=A,o=this.peekCodePoint(0),l=this.peekCodePoint(1);if(wa(a,o,l))return this.reconsumeCodePoint(A),this.consumeNumericToken();if(Vr(a,o,l))return this.reconsumeCodePoint(A),this.consumeIdentLikeToken();if(o===Ie&&l===JB)return this.consumeCodePoint(),this.consumeCodePoint(),P1;break;case Ji:if(wa(A,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(A),this.consumeNumericToken();break;case uc:if(this.peekCodePoint(0)===Ba)for(this.consumeCodePoint();;){var c=this.consumeCodePoint();if(c===Ba&&(c=this.consumeCodePoint(),c===uc))return this.consumeToken();if(c===ht)return this.consumeToken()}break;case r1:return O1;case s1:return N1;case YB:if(this.peekCodePoint(0)===XB&&this.peekCodePoint(1)===Ie&&this.peekCodePoint(2)===Ie)return this.consumeCodePoint(),this.consumeCodePoint(),D1;break;case ZB:var u=this.peekCodePoint(0),h=this.peekCodePoint(1),d=this.peekCodePoint(2);if(Vr(u,h,d)){var s=this.consumeName();return{type:7,value:s}}break;case qB:return G1;case Di:if(Nt(A,this.peekCodePoint(0)))return this.reconsumeCodePoint(A),this.consumeIdentLikeToken();break;case jB:return V1;case $B:if(this.peekCodePoint(0)===Ui)return this.consumeCodePoint(),S1;break;case A1:return I1;case e1:return L1;case d1:case g1:var g=this.peekCodePoint(0),m=this.peekCodePoint(1);return g===un&&(Wn(m)||m===Nr)&&(this.consumeCodePoint(),this.consumeUnicodeRangeToken()),this.reconsumeCodePoint(A),this.consumeIdentLikeToken();case hc:if(this.peekCodePoint(0)===Ui)return this.consumeCodePoint(),T1;if(this.peekCodePoint(0)===hc)return this.consumeCodePoint(),b1;break;case t1:if(this.peekCodePoint(0)===Ui)return this.consumeCodePoint(),Q1;break;case ht:return to}return Gr(A)?(this.consumeWhiteSpace(),K1):Fe(A)?(this.reconsumeCodePoint(A),this.consumeNumericToken()):as(A)?(this.reconsumeCodePoint(A),this.consumeIdentLikeToken()):{type:6,value:ie(A)}},n.prototype.consumeCodePoint=function(){var A=this._value.shift();return typeof A>"u"?-1:A},n.prototype.reconsumeCodePoint=function(A){this._value.unshift(A)},n.prototype.peekCodePoint=function(A){return A>=this._value.length?-1:this._value[A]},n.prototype.consumeUnicodeRangeToken=function(){for(var A=[],e=this.consumeCodePoint();Wn(e)&&A.length<6;)A.push(e),e=this.consumeCodePoint();for(var t=!1;e===Nr&&A.length<6;)A.push(e),e=this.consumeCodePoint(),t=!0;if(t){var i=parseInt(ie.apply(void 0,A.map(function(o){return o===Nr?Iu:o})),16),r=parseInt(ie.apply(void 0,A.map(function(o){return o===Nr?Pu:o})),16);return{type:30,start:i,end:r}}var s=parseInt(ie.apply(void 0,A),16);if(this.peekCodePoint(0)===Ie&&Wn(this.peekCodePoint(1))){this.consumeCodePoint(),e=this.consumeCodePoint();for(var a=[];Wn(e)&&a.length<6;)a.push(e),e=this.consumeCodePoint();var r=parseInt(ie.apply(void 0,a),16);return{type:30,start:s,end:r}}else return{type:30,start:s,end:s}},n.prototype.consumeIdentLikeToken=function(){var A=this.consumeName();return A.toLowerCase()==="url"&&this.peekCodePoint(0)===Or?(this.consumeCodePoint(),this.consumeUrlToken()):this.peekCodePoint(0)===Or?(this.consumeCodePoint(),{type:19,value:A}):{type:20,value:A}},n.prototype.consumeUrlToken=function(){var A=[];if(this.consumeWhiteSpace(),this.peekCodePoint(0)===ht)return{type:22,value:""};var e=this.peekCodePoint(0);if(e===Pr||e===Dr){var t=this.consumeStringToken(this.consumeCodePoint());return t.type===0&&(this.consumeWhiteSpace(),this.peekCodePoint(0)===ht||this.peekCodePoint(0)===Fi)?(this.consumeCodePoint(),{type:22,value:t.value}):(this.consumeBadUrlRemnants(),Kr)}for(;;){var i=this.consumeCodePoint();if(i===ht||i===Fi)return{type:22,value:ie.apply(void 0,A)};if(Gr(i))return this.consumeWhiteSpace(),this.peekCodePoint(0)===ht||this.peekCodePoint(0)===Fi?(this.consumeCodePoint(),{type:22,value:ie.apply(void 0,A)}):(this.consumeBadUrlRemnants(),Kr);if(i===Dr||i===Pr||i===Or||E1(i))return this.consumeBadUrlRemnants(),Kr;if(i===Di)if(Nt(i,this.peekCodePoint(0)))A.push(this.consumeEscapedCodePoint());else return this.consumeBadUrlRemnants(),Kr;else A.push(i)}},n.prototype.consumeWhiteSpace=function(){for(;Gr(this.peekCodePoint(0));)this.consumeCodePoint()},n.prototype.consumeBadUrlRemnants=function(){for(;;){var A=this.consumeCodePoint();if(A===Fi||A===ht)return;Nt(A,this.peekCodePoint(0))&&this.consumeEscapedCodePoint()}},n.prototype.consumeStringSlice=function(A){for(var e=5e4,t="";A>0;){var i=Math.min(e,A);t+=ie.apply(void 0,this._value.splice(0,i)),A-=i}return this._value.shift(),t},n.prototype.consumeStringToken=function(A){var e="",t=0;do{var i=this._value[t];if(i===ht||i===void 0||i===A)return e+=this.consumeStringSlice(t),{type:0,value:e};if(i===ss)return this._value.splice(0,t),H1;if(i===Di){var r=this._value[t+1];r!==ht&&r!==void 0&&(r===ss?(e+=this.consumeStringSlice(t),t=-1,this._value.shift()):Nt(i,r)&&(e+=this.consumeStringSlice(t),e+=ie(this.consumeEscapedCodePoint()),t=-1))}t++}while(!0)},n.prototype.consumeNumber=function(){var A=[],e=rr,t=this.peekCodePoint(0);for((t===un||t===Ie)&&A.push(this.consumeCodePoint());Fe(this.peekCodePoint(0));)A.push(this.consumeCodePoint());t=this.peekCodePoint(0);var i=this.peekCodePoint(1);if(t===Ji&&Fe(i))for(A.push(this.consumeCodePoint(),this.consumeCodePoint()),e=cc;Fe(this.peekCodePoint(0));)A.push(this.consumeCodePoint());t=this.peekCodePoint(0),i=this.peekCodePoint(1);var r=this.peekCodePoint(2);if((t===Du||t===Ru)&&((i===un||i===Ie)&&Fe(r)||Fe(i)))for(A.push(this.consumeCodePoint(),this.consumeCodePoint()),e=cc;Fe(this.peekCodePoint(0));)A.push(this.consumeCodePoint());return[x1(A),e]},n.prototype.consumeNumericToken=function(){var A=this.consumeNumber(),e=A[0],t=A[1],i=this.peekCodePoint(0),r=this.peekCodePoint(1),s=this.peekCodePoint(2);if(Vr(i,r,s)){var a=this.consumeName();return{type:15,number:e,flags:t,unit:a}}return i===zB?(this.consumeCodePoint(),{type:16,number:e,flags:t}):{type:17,number:e,flags:t}},n.prototype.consumeEscapedCodePoint=function(){var A=this.consumeCodePoint();if(Wn(A)){for(var e=ie(A);Wn(this.peekCodePoint(0))&&e.length<6;)e+=ie(this.consumeCodePoint());Gr(this.peekCodePoint(0))&&this.consumeCodePoint();var t=parseInt(e,16);return t===0||B1(t)||t>1114111?fc:t}return A===ht?fc:A},n.prototype.consumeName=function(){for(var A="";;){var e=this.consumeCodePoint();if(dc(e))A+=ie(e);else if(Nt(e,this.peekCodePoint(0)))A+=ie(this.consumeEscapedCodePoint());else return this.reconsumeCodePoint(e),A}},n}(),Nu=function(){function n(A){this._tokens=A}return n.create=function(A){var e=new Ou;return e.write(A),new n(e.read())},n.parseValue=function(A){return n.create(A).parseComponentValue()},n.parseValues=function(A){return n.create(A).parseComponentValues()},n.prototype.parseComponentValue=function(){for(var A=this.consumeToken();A.type===31;)A=this.consumeToken();if(A.type===32)throw new SyntaxError("Error parsing CSS component value, unexpected EOF");this.reconsumeToken(A);var e=this.consumeComponentValue();do A=this.consumeToken();while(A.type===31);if(A.type===32)return e;throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one")},n.prototype.parseComponentValues=function(){for(var A=[];;){var e=this.consumeComponentValue();if(e.type===32)return A;A.push(e),A.push()}},n.prototype.consumeComponentValue=function(){var A=this.consumeToken();switch(A.type){case 11:case 28:case 2:return this.consumeSimpleBlock(A.type);case 19:return this.consumeFunction(A)}return A},n.prototype.consumeSimpleBlock=function(A){for(var e={type:A,values:[]},t=this.consumeToken();;){if(t.type===32||z1(t,A))return e;this.reconsumeToken(t),e.values.push(this.consumeComponentValue()),t=this.consumeToken()}},n.prototype.consumeFunction=function(A){for(var e={name:A.value,values:[],type:18};;){var t=this.consumeToken();if(t.type===32||t.type===3)return e;this.reconsumeToken(t),e.values.push(this.consumeComponentValue())}},n.prototype.consumeToken=function(){var A=this._tokens.shift();return typeof A>"u"?to:A},n.prototype.reconsumeToken=function(A){this._tokens.unshift(A)},n}(),sr=function(n){return n.type===15},mi=function(n){return n.type===17},kA=function(n){return n.type===20},k1=function(n){return n.type===0},no=function(n,A){return kA(n)&&n.value===A},Gu=function(n){return n.type!==31},pi=function(n){return n.type!==31&&n.type!==4},mt=function(n){var A=[],e=[];return n.forEach(function(t){if(t.type===4){if(e.length===0)throw new Error("Error parsing function args, zero tokens for arg");A.push(e),e=[];return}t.type!==31&&e.push(t)}),e.length&&A.push(e),A},z1=function(n,A){return A===11&&n.type===12||A===28&&n.type===29?!0:A===2&&n.type===3},Jt=function(n){return n.type===17||n.type===15},oe=function(n){return n.type===16||Jt(n)},Vu=function(n){return n.length>1?[n[0],n[1]]:[n[0]]},we={type:17,number:0,flags:rr},Co={type:16,number:50,flags:rr},Kt={type:16,number:100,flags:rr},Ii=function(n,A,e){var t=n[0],i=n[1];return[YA(t,A),YA(typeof i<"u"?i:t,e)]},YA=function(n,A){if(n.type===16)return n.number/100*A;if(sr(n))switch(n.unit){case"rem":case"em":return 16*n.number;case"px":default:return n.number}return n.number},Ku="deg",ku="grad",zu="rad",Wu="turn",Es={name:"angle",parse:function(n,A){if(A.type===15)switch(A.unit){case Ku:return Math.PI*A.number/180;case ku:return Math.PI/200*A.number;case zu:return A.number;case Wu:return Math.PI*2*A.number}throw new Error("Unsupported angle type")}},Xu=function(n){return n.type===15&&(n.unit===Ku||n.unit===ku||n.unit===zu||n.unit===Wu)},Yu=function(n){var A=n.filter(kA).map(function(e){return e.value}).join(" ");switch(A){case"to bottom right":case"to right bottom":case"left top":case"top left":return[we,we];case"to top":case"bottom":return Je(0);case"to bottom left":case"to left bottom":case"right top":case"top right":return[we,Kt];case"to right":case"left":return Je(90);case"to top left":case"to left top":case"right bottom":case"bottom right":return[Kt,Kt];case"to bottom":case"top":return Je(180);case"to top right":case"to right top":case"left bottom":case"bottom left":return[Kt,we];case"to left":case"right":return Je(270)}return 0},Je=function(n){return Math.PI*n/180},Wt={name:"color",parse:function(n,A){if(A.type===18){var e=W1[A.name];if(typeof e>"u")throw new Error('Attempting to parse an unsupported color function "'+A.name+'"');return e(n,A.values)}if(A.type===5){if(A.value.length===3){var t=A.value.substring(0,1),i=A.value.substring(1,2),r=A.value.substring(2,3);return kt(parseInt(t+t,16),parseInt(i+i,16),parseInt(r+r,16),1)}if(A.value.length===4){var t=A.value.substring(0,1),i=A.value.substring(1,2),r=A.value.substring(2,3),s=A.value.substring(3,4);return kt(parseInt(t+t,16),parseInt(i+i,16),parseInt(r+r,16),parseInt(s+s,16)/255)}if(A.value.length===6){var t=A.value.substring(0,2),i=A.value.substring(2,4),r=A.value.substring(4,6);return kt(parseInt(t,16),parseInt(i,16),parseInt(r,16),1)}if(A.value.length===8){var t=A.value.substring(0,2),i=A.value.substring(2,4),r=A.value.substring(4,6),s=A.value.substring(6,8);return kt(parseInt(t,16),parseInt(i,16),parseInt(r,16),parseInt(s,16)/255)}}if(A.type===20){var a=Tt[A.value.toUpperCase()];if(typeof a<"u")return a}return Tt.TRANSPARENT}},Xt=function(n){return(255&n)===0},de=function(n){var A=255&n,e=255&n>>8,t=255&n>>16,i=255&n>>24;return A<255?"rgba("+i+","+t+","+e+","+A/255+")":"rgb("+i+","+t+","+e+")"},kt=function(n,A,e,t){return(n<<24|A<<16|e<<8|Math.round(t*255)<<0)>>>0},pc=function(n,A){if(n.type===17)return n.number;if(n.type===16){var e=A===3?1:255;return A===3?n.number/100*e:Math.round(n.number/100*e)}return 0},gc=function(n,A){var e=A.filter(pi);if(e.length===3){var t=e.map(pc),i=t[0],r=t[1],s=t[2];return kt(i,r,s,1)}if(e.length===4){var a=e.map(pc),i=a[0],r=a[1],s=a[2],o=a[3];return kt(i,r,s,o)}return 0};function va(n,A,e){return e<0&&(e+=1),e>=1&&(e-=1),e<1/6?(A-n)*e*6+n:e<1/2?A:e<2/3?(A-n)*6*(2/3-e)+n:n}var mc=function(n,A){var e=A.filter(pi),t=e[0],i=e[1],r=e[2],s=e[3],a=(t.type===17?Je(t.number):Es.parse(n,t))/(Math.PI*2),o=oe(i)?i.number/100:0,l=oe(r)?r.number/100:0,c=typeof s<"u"&&oe(s)?YA(s,1):1;if(o===0)return kt(l*255,l*255,l*255,1);var u=l<=.5?l*(o+1):l+o-l*o,h=l*2-u,d=va(h,u,a+1/3),g=va(h,u,a),m=va(h,u,a-1/3);return kt(d*255,g*255,m*255,c)},W1={hsl:mc,hsla:mc,rgb:gc,rgba:gc},Pi=function(n,A){return Wt.parse(n,Nu.create(A).parseComponentValue())},Tt={ALICEBLUE:4042850303,ANTIQUEWHITE:4209760255,AQUA:16777215,AQUAMARINE:2147472639,AZURE:4043309055,BEIGE:4126530815,BISQUE:4293182719,BLACK:255,BLANCHEDALMOND:4293643775,BLUE:65535,BLUEVIOLET:2318131967,BROWN:2771004159,BURLYWOOD:3736635391,CADETBLUE:1604231423,CHARTREUSE:2147418367,CHOCOLATE:3530104575,CORAL:4286533887,CORNFLOWERBLUE:1687547391,CORNSILK:4294499583,CRIMSON:3692313855,CYAN:16777215,DARKBLUE:35839,DARKCYAN:9145343,DARKGOLDENROD:3095837695,DARKGRAY:2846468607,DARKGREEN:6553855,DARKGREY:2846468607,DARKKHAKI:3182914559,DARKMAGENTA:2332068863,DARKOLIVEGREEN:1433087999,DARKORANGE:4287365375,DARKORCHID:2570243327,DARKRED:2332033279,DARKSALMON:3918953215,DARKSEAGREEN:2411499519,DARKSLATEBLUE:1211993087,DARKSLATEGRAY:793726975,DARKSLATEGREY:793726975,DARKTURQUOISE:13554175,DARKVIOLET:2483082239,DEEPPINK:4279538687,DEEPSKYBLUE:12582911,DIMGRAY:1768516095,DIMGREY:1768516095,DODGERBLUE:512819199,FIREBRICK:2988581631,FLORALWHITE:4294635775,FORESTGREEN:579543807,FUCHSIA:4278255615,GAINSBORO:3705462015,GHOSTWHITE:4177068031,GOLD:4292280575,GOLDENROD:3668254975,GRAY:2155905279,GREEN:8388863,GREENYELLOW:2919182335,GREY:2155905279,HONEYDEW:4043305215,HOTPINK:4285117695,INDIANRED:3445382399,INDIGO:1258324735,IVORY:4294963455,KHAKI:4041641215,LAVENDER:3873897215,LAVENDERBLUSH:4293981695,LAWNGREEN:2096890111,LEMONCHIFFON:4294626815,LIGHTBLUE:2916673279,LIGHTCORAL:4034953471,LIGHTCYAN:3774873599,LIGHTGOLDENRODYELLOW:4210742015,LIGHTGRAY:3553874943,LIGHTGREEN:2431553791,LIGHTGREY:3553874943,LIGHTPINK:4290167295,LIGHTSALMON:4288707327,LIGHTSEAGREEN:548580095,LIGHTSKYBLUE:2278488831,LIGHTSLATEGRAY:2005441023,LIGHTSLATEGREY:2005441023,LIGHTSTEELBLUE:2965692159,LIGHTYELLOW:4294959359,LIME:16711935,LIMEGREEN:852308735,LINEN:4210091775,MAGENTA:4278255615,MAROON:2147483903,MEDIUMAQUAMARINE:1724754687,MEDIUMBLUE:52735,MEDIUMORCHID:3126187007,MEDIUMPURPLE:2473647103,MEDIUMSEAGREEN:1018393087,MEDIUMSLATEBLUE:2070474495,MEDIUMSPRINGGREEN:16423679,MEDIUMTURQUOISE:1221709055,MEDIUMVIOLETRED:3340076543,MIDNIGHTBLUE:421097727,MINTCREAM:4127193855,MISTYROSE:4293190143,MOCCASIN:4293178879,NAVAJOWHITE:4292783615,NAVY:33023,OLDLACE:4260751103,OLIVE:2155872511,OLIVEDRAB:1804477439,ORANGE:4289003775,ORANGERED:4282712319,ORCHID:3664828159,PALEGOLDENROD:4008225535,PALEGREEN:2566625535,PALETURQUOISE:2951671551,PALEVIOLETRED:3681588223,PAPAYAWHIP:4293907967,PEACHPUFF:4292524543,PERU:3448061951,PINK:4290825215,PLUM:3718307327,POWDERBLUE:2967529215,PURPLE:2147516671,REBECCAPURPLE:1714657791,RED:4278190335,ROSYBROWN:3163525119,ROYALBLUE:1097458175,SADDLEBROWN:2336560127,SALMON:4202722047,SANDYBROWN:4104413439,SEAGREEN:780883967,SEASHELL:4294307583,SIENNA:2689740287,SILVER:3233857791,SKYBLUE:2278484991,SLATEBLUE:1784335871,SLATEGRAY:1887473919,SLATEGREY:1887473919,SNOW:4294638335,SPRINGGREEN:16744447,STEELBLUE:1182971135,TAN:3535047935,TEAL:8421631,THISTLE:3636451583,TOMATO:4284696575,TRANSPARENT:0,TURQUOISE:1088475391,VIOLET:4001558271,WHEAT:4125012991,WHITE:4294967295,WHITESMOKE:4126537215,YELLOW:4294902015,YELLOWGREEN:2597139199},X1={name:"background-clip",initialValue:"border-box",prefix:!1,type:1,parse:function(n,A){return A.map(function(e){if(kA(e))switch(e.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},Y1={name:"background-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},xs=function(n,A){var e=Wt.parse(n,A[0]),t=A[1];return t&&oe(t)?{color:e,stop:t}:{color:e,stop:null}},Bc=function(n,A){var e=n[0],t=n[n.length-1];e.stop===null&&(e.stop=we),t.stop===null&&(t.stop=Kt);for(var i=[],r=0,s=0;s<n.length;s++){var a=n[s].stop;if(a!==null){var o=YA(a,A);o>r?i.push(o):i.push(r),r=o}else i.push(null)}for(var l=null,s=0;s<i.length;s++){var c=i[s];if(c===null)l===null&&(l=s);else if(l!==null){for(var u=s-l,h=i[l-1],d=(c-h)/(u+1),g=1;g<=u;g++)i[l+g-1]=d*g;l=null}}return n.map(function(m,p){var f=m.color;return{color:f,stop:Math.max(Math.min(1,i[p]/A),0)}})},J1=function(n,A,e){var t=A/2,i=e/2,r=YA(n[0],A)-t,s=i-YA(n[1],e);return(Math.atan2(s,r)+Math.PI*2)%(Math.PI*2)},Z1=function(n,A,e){var t=typeof n=="number"?n:J1(n,A,e),i=Math.abs(A*Math.sin(t))+Math.abs(e*Math.cos(t)),r=A/2,s=e/2,a=i/2,o=Math.sin(t-Math.PI/2)*a,l=Math.cos(t-Math.PI/2)*a;return[i,r-l,r+l,s-o,s+o]},tt=function(n,A){return Math.sqrt(n*n+A*A)},wc=function(n,A,e,t,i){var r=[[0,0],[0,A],[n,0],[n,A]];return r.reduce(function(s,a){var o=a[0],l=a[1],c=tt(e-o,t-l);return(i?c<s.optimumDistance:c>s.optimumDistance)?{optimumCorner:a,optimumDistance:c}:s},{optimumDistance:i?1/0:-1/0,optimumCorner:null}).optimumCorner},q1=function(n,A,e,t,i){var r=0,s=0;switch(n.size){case 0:n.shape===0?r=s=Math.min(Math.abs(A),Math.abs(A-t),Math.abs(e),Math.abs(e-i)):n.shape===1&&(r=Math.min(Math.abs(A),Math.abs(A-t)),s=Math.min(Math.abs(e),Math.abs(e-i)));break;case 2:if(n.shape===0)r=s=Math.min(tt(A,e),tt(A,e-i),tt(A-t,e),tt(A-t,e-i));else if(n.shape===1){var a=Math.min(Math.abs(e),Math.abs(e-i))/Math.min(Math.abs(A),Math.abs(A-t)),o=wc(t,i,A,e,!0),l=o[0],c=o[1];r=tt(l-A,(c-e)/a),s=a*r}break;case 1:n.shape===0?r=s=Math.max(Math.abs(A),Math.abs(A-t),Math.abs(e),Math.abs(e-i)):n.shape===1&&(r=Math.max(Math.abs(A),Math.abs(A-t)),s=Math.max(Math.abs(e),Math.abs(e-i)));break;case 3:if(n.shape===0)r=s=Math.max(tt(A,e),tt(A,e-i),tt(A-t,e),tt(A-t,e-i));else if(n.shape===1){var a=Math.max(Math.abs(e),Math.abs(e-i))/Math.max(Math.abs(A),Math.abs(A-t)),u=wc(t,i,A,e,!1),l=u[0],c=u[1];r=tt(l-A,(c-e)/a),s=a*r}break}return Array.isArray(n.size)&&(r=YA(n.size[0],t),s=n.size.length===2?YA(n.size[1],i):r),[r,s]},j1=function(n,A){var e=Je(180),t=[];return mt(A).forEach(function(i,r){if(r===0){var s=i[0];if(s.type===20&&s.value==="to"){e=Yu(i);return}else if(Xu(s)){e=Es.parse(n,s);return}}var a=xs(n,i);t.push(a)}),{angle:e,stops:t,type:1}},kr=function(n,A){var e=Je(180),t=[];return mt(A).forEach(function(i,r){if(r===0){var s=i[0];if(s.type===20&&["top","left","right","bottom"].indexOf(s.value)!==-1){e=Yu(i);return}else if(Xu(s)){e=(Es.parse(n,s)+Je(270))%Je(360);return}}var a=xs(n,i);t.push(a)}),{angle:e,stops:t,type:1}},$1=function(n,A){var e=Je(180),t=[],i=1,r=0,s=3,a=[];return mt(A).forEach(function(o,l){var c=o[0];if(l===0){if(kA(c)&&c.value==="linear"){i=1;return}else if(kA(c)&&c.value==="radial"){i=2;return}}if(c.type===18){if(c.name==="from"){var u=Wt.parse(n,c.values[0]);t.push({stop:we,color:u})}else if(c.name==="to"){var u=Wt.parse(n,c.values[0]);t.push({stop:Kt,color:u})}else if(c.name==="color-stop"){var h=c.values.filter(pi);if(h.length===2){var u=Wt.parse(n,h[1]),d=h[0];mi(d)&&t.push({stop:{type:16,number:d.number*100,flags:d.flags},color:u})}}}}),i===1?{angle:(e+Je(180))%Je(360),stops:t,type:i}:{size:s,shape:r,stops:t,position:a,type:i}},Ju="closest-side",Zu="farthest-side",qu="closest-corner",ju="farthest-corner",$u="circle",Ah="ellipse",eh="cover",th="contain",Aw=function(n,A){var e=0,t=3,i=[],r=[];return mt(A).forEach(function(s,a){var o=!0;if(a===0){var l=!1;o=s.reduce(function(u,h){if(l)if(kA(h))switch(h.value){case"center":return r.push(Co),u;case"top":case"left":return r.push(we),u;case"right":case"bottom":return r.push(Kt),u}else(oe(h)||Jt(h))&&r.push(h);else if(kA(h))switch(h.value){case $u:return e=0,!1;case Ah:return e=1,!1;case"at":return l=!0,!1;case Ju:return t=0,!1;case eh:case Zu:return t=1,!1;case th:case qu:return t=2,!1;case ju:return t=3,!1}else if(Jt(h)||oe(h))return Array.isArray(t)||(t=[]),t.push(h),!1;return u},o)}if(o){var c=xs(n,s);i.push(c)}}),{size:t,shape:e,stops:i,position:r,type:2}},zr=function(n,A){var e=0,t=3,i=[],r=[];return mt(A).forEach(function(s,a){var o=!0;if(a===0?o=s.reduce(function(c,u){if(kA(u))switch(u.value){case"center":return r.push(Co),!1;case"top":case"left":return r.push(we),!1;case"right":case"bottom":return r.push(Kt),!1}else if(oe(u)||Jt(u))return r.push(u),!1;return c},o):a===1&&(o=s.reduce(function(c,u){if(kA(u))switch(u.value){case $u:return e=0,!1;case Ah:return e=1,!1;case th:case Ju:return t=0,!1;case Zu:return t=1,!1;case qu:return t=2,!1;case eh:case ju:return t=3,!1}else if(Jt(u)||oe(u))return Array.isArray(t)||(t=[]),t.push(u),!1;return c},o)),o){var l=xs(n,s);i.push(l)}}),{size:t,shape:e,stops:i,position:r,type:2}},ew=function(n){return n.type===1},tw=function(n){return n.type===2},Eo={name:"image",parse:function(n,A){if(A.type===22){var e={url:A.value,type:0};return n.cache.addImage(A.value),e}if(A.type===18){var t=nh[A.name];if(typeof t>"u")throw new Error('Attempting to parse an unsupported image function "'+A.name+'"');return t(n,A.values)}throw new Error("Unsupported image type "+A.type)}};function nw(n){return!(n.type===20&&n.value==="none")&&(n.type!==18||!!nh[n.name])}var nh={"linear-gradient":j1,"-moz-linear-gradient":kr,"-ms-linear-gradient":kr,"-o-linear-gradient":kr,"-webkit-linear-gradient":kr,"radial-gradient":Aw,"-moz-radial-gradient":zr,"-ms-radial-gradient":zr,"-o-radial-gradient":zr,"-webkit-radial-gradient":zr,"-webkit-gradient":$1},iw={name:"background-image",initialValue:"none",type:1,prefix:!1,parse:function(n,A){if(A.length===0)return[];var e=A[0];return e.type===20&&e.value==="none"?[]:A.filter(function(t){return pi(t)&&nw(t)}).map(function(t){return Eo.parse(n,t)})}},rw={name:"background-origin",initialValue:"border-box",prefix:!1,type:1,parse:function(n,A){return A.map(function(e){if(kA(e))switch(e.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},sw={name:"background-position",initialValue:"0% 0%",type:1,prefix:!1,parse:function(n,A){return mt(A).map(function(e){return e.filter(oe)}).map(Vu)}},aw={name:"background-repeat",initialValue:"repeat",prefix:!1,type:1,parse:function(n,A){return mt(A).map(function(e){return e.filter(kA).map(function(t){return t.value}).join(" ")}).map(ow)}},ow=function(n){switch(n){case"no-repeat":return 1;case"repeat-x":case"repeat no-repeat":return 2;case"repeat-y":case"no-repeat repeat":return 3;case"repeat":default:return 0}},si;(function(n){n.AUTO="auto",n.CONTAIN="contain",n.COVER="cover"})(si||(si={}));var lw={name:"background-size",initialValue:"0",prefix:!1,type:1,parse:function(n,A){return mt(A).map(function(e){return e.filter(cw)})}},cw=function(n){return kA(n)||oe(n)},Us=function(n){return{name:"border-"+n+"-color",initialValue:"transparent",prefix:!1,type:3,format:"color"}},uw=Us("top"),hw=Us("right"),fw=Us("bottom"),dw=Us("left"),Fs=function(n){return{name:"border-radius-"+n,initialValue:"0 0",prefix:!1,type:1,parse:function(A,e){return Vu(e.filter(oe))}}},pw=Fs("top-left"),gw=Fs("top-right"),mw=Fs("bottom-right"),Bw=Fs("bottom-left"),Ms=function(n){return{name:"border-"+n+"-style",initialValue:"solid",prefix:!1,type:2,parse:function(A,e){switch(e){case"none":return 0;case"dashed":return 2;case"dotted":return 3;case"double":return 4}return 1}}},ww=Ms("top"),vw=Ms("right"),_w=Ms("bottom"),Cw=Ms("left"),ys=function(n){return{name:"border-"+n+"-width",initialValue:"0",type:0,prefix:!1,parse:function(A,e){return sr(e)?e.number:0}}},Ew=ys("top"),xw=ys("right"),Uw=ys("bottom"),Fw=ys("left"),Mw={name:"color",initialValue:"transparent",prefix:!1,type:3,format:"color"},yw={name:"direction",initialValue:"ltr",prefix:!1,type:2,parse:function(n,A){switch(A){case"rtl":return 1;case"ltr":default:return 0}}},Sw={name:"display",initialValue:"inline-block",prefix:!1,type:1,parse:function(n,A){return A.filter(kA).reduce(function(e,t){return e|bw(t.value)},0)}},bw=function(n){switch(n){case"block":case"-webkit-box":return 2;case"inline":return 4;case"run-in":return 8;case"flow":return 16;case"flow-root":return 32;case"table":return 64;case"flex":case"-webkit-flex":return 128;case"grid":case"-ms-grid":return 256;case"ruby":return 512;case"subgrid":return 1024;case"list-item":return 2048;case"table-row-group":return 4096;case"table-header-group":return 8192;case"table-footer-group":return 16384;case"table-row":return 32768;case"table-cell":return 65536;case"table-column-group":return 131072;case"table-column":return 262144;case"table-caption":return 524288;case"ruby-base":return 1048576;case"ruby-text":return 2097152;case"ruby-base-container":return 4194304;case"ruby-text-container":return 8388608;case"contents":return 16777216;case"inline-block":return 33554432;case"inline-list-item":return 67108864;case"inline-table":return 134217728;case"inline-flex":return 268435456;case"inline-grid":return 536870912}return 0},Tw={name:"float",initialValue:"none",prefix:!1,type:2,parse:function(n,A){switch(A){case"left":return 1;case"right":return 2;case"inline-start":return 3;case"inline-end":return 4}return 0}},Qw={name:"letter-spacing",initialValue:"0",prefix:!1,type:0,parse:function(n,A){return A.type===20&&A.value==="normal"?0:A.type===17||A.type===15?A.number:0}},os;(function(n){n.NORMAL="normal",n.STRICT="strict"})(os||(os={}));var Iw={name:"line-break",initialValue:"normal",prefix:!1,type:2,parse:function(n,A){switch(A){case"strict":return os.STRICT;case"normal":default:return os.NORMAL}}},Lw={name:"line-height",initialValue:"normal",prefix:!1,type:4},vc=function(n,A){return kA(n)&&n.value==="normal"?1.2*A:n.type===17?A*n.number:oe(n)?YA(n,A):A},Rw={name:"list-style-image",initialValue:"none",type:0,prefix:!1,parse:function(n,A){return A.type===20&&A.value==="none"?null:Eo.parse(n,A)}},Hw={name:"list-style-position",initialValue:"outside",prefix:!1,type:2,parse:function(n,A){switch(A){case"inside":return 0;case"outside":default:return 1}}},io={name:"list-style-type",initialValue:"none",prefix:!1,type:2,parse:function(n,A){switch(A){case"disc":return 0;case"circle":return 1;case"square":return 2;case"decimal":return 3;case"cjk-decimal":return 4;case"decimal-leading-zero":return 5;case"lower-roman":return 6;case"upper-roman":return 7;case"lower-greek":return 8;case"lower-alpha":return 9;case"upper-alpha":return 10;case"arabic-indic":return 11;case"armenian":return 12;case"bengali":return 13;case"cambodian":return 14;case"cjk-earthly-branch":return 15;case"cjk-heavenly-stem":return 16;case"cjk-ideographic":return 17;case"devanagari":return 18;case"ethiopic-numeric":return 19;case"georgian":return 20;case"gujarati":return 21;case"gurmukhi":return 22;case"hebrew":return 22;case"hiragana":return 23;case"hiragana-iroha":return 24;case"japanese-formal":return 25;case"japanese-informal":return 26;case"kannada":return 27;case"katakana":return 28;case"katakana-iroha":return 29;case"khmer":return 30;case"korean-hangul-formal":return 31;case"korean-hanja-formal":return 32;case"korean-hanja-informal":return 33;case"lao":return 34;case"lower-armenian":return 35;case"malayalam":return 36;case"mongolian":return 37;case"myanmar":return 38;case"oriya":return 39;case"persian":return 40;case"simp-chinese-formal":return 41;case"simp-chinese-informal":return 42;case"tamil":return 43;case"telugu":return 44;case"thai":return 45;case"tibetan":return 46;case"trad-chinese-formal":return 47;case"trad-chinese-informal":return 48;case"upper-armenian":return 49;case"disclosure-open":return 50;case"disclosure-closed":return 51;case"none":default:return-1}}},Ss=function(n){return{name:"margin-"+n,initialValue:"0",prefix:!1,type:4}},Dw=Ss("top"),Pw=Ss("right"),Ow=Ss("bottom"),Nw=Ss("left"),Gw={name:"overflow",initialValue:"visible",prefix:!1,type:1,parse:function(n,A){return A.filter(kA).map(function(e){switch(e.value){case"hidden":return 1;case"scroll":return 2;case"clip":return 3;case"auto":return 4;case"visible":default:return 0}})}},Vw={name:"overflow-wrap",initialValue:"normal",prefix:!1,type:2,parse:function(n,A){switch(A){case"break-word":return"break-word";case"normal":default:return"normal"}}},bs=function(n){return{name:"padding-"+n,initialValue:"0",prefix:!1,type:3,format:"length-percentage"}},Kw=bs("top"),kw=bs("right"),zw=bs("bottom"),Ww=bs("left"),Xw={name:"text-align",initialValue:"left",prefix:!1,type:2,parse:function(n,A){switch(A){case"right":return 2;case"center":case"justify":return 1;case"left":default:return 0}}},Yw={name:"position",initialValue:"static",prefix:!1,type:2,parse:function(n,A){switch(A){case"relative":return 1;case"absolute":return 2;case"fixed":return 3;case"sticky":return 4}return 0}},Jw={name:"text-shadow",initialValue:"none",type:1,prefix:!1,parse:function(n,A){return A.length===1&&no(A[0],"none")?[]:mt(A).map(function(e){for(var t={color:Tt.TRANSPARENT,offsetX:we,offsetY:we,blur:we},i=0,r=0;r<e.length;r++){var s=e[r];Jt(s)?(i===0?t.offsetX=s:i===1?t.offsetY=s:t.blur=s,i++):t.color=Wt.parse(n,s)}return t})}},Zw={name:"text-transform",initialValue:"none",prefix:!1,type:2,parse:function(n,A){switch(A){case"uppercase":return 2;case"lowercase":return 1;case"capitalize":return 3}return 0}},qw={name:"transform",initialValue:"none",prefix:!0,type:0,parse:function(n,A){if(A.type===20&&A.value==="none")return null;if(A.type===18){var e=Av[A.name];if(typeof e>"u")throw new Error('Attempting to parse an unsupported transform function "'+A.name+'"');return e(A.values)}return null}},jw=function(n){var A=n.filter(function(e){return e.type===17}).map(function(e){return e.number});return A.length===6?A:null},$w=function(n){var A=n.filter(function(o){return o.type===17}).map(function(o){return o.number}),e=A[0],t=A[1];A[2],A[3];var i=A[4],r=A[5];A[6],A[7],A[8],A[9],A[10],A[11];var s=A[12],a=A[13];return A[14],A[15],A.length===16?[e,t,i,r,s,a]:null},Av={matrix:jw,matrix3d:$w},_c={type:16,number:50,flags:rr},ev=[_c,_c],tv={name:"transform-origin",initialValue:"50% 50%",prefix:!0,type:1,parse:function(n,A){var e=A.filter(oe);return e.length!==2?ev:[e[0],e[1]]}},nv={name:"visible",initialValue:"none",prefix:!1,type:2,parse:function(n,A){switch(A){case"hidden":return 1;case"collapse":return 2;case"visible":default:return 0}}},Oi;(function(n){n.NORMAL="normal",n.BREAK_ALL="break-all",n.KEEP_ALL="keep-all"})(Oi||(Oi={}));var iv={name:"word-break",initialValue:"normal",prefix:!1,type:2,parse:function(n,A){switch(A){case"break-all":return Oi.BREAK_ALL;case"keep-all":return Oi.KEEP_ALL;case"normal":default:return Oi.NORMAL}}},rv={name:"z-index",initialValue:"auto",prefix:!1,type:0,parse:function(n,A){if(A.type===20)return{auto:!0,order:0};if(mi(A))return{auto:!1,order:A.number};throw new Error("Invalid z-index number parsed")}},ih={name:"time",parse:function(n,A){if(A.type===15)switch(A.unit.toLowerCase()){case"s":return 1e3*A.number;case"ms":return A.number}throw new Error("Unsupported time type")}},sv={name:"opacity",initialValue:"1",type:0,prefix:!1,parse:function(n,A){return mi(A)?A.number:1}},av={name:"text-decoration-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},ov={name:"text-decoration-line",initialValue:"none",prefix:!1,type:1,parse:function(n,A){return A.filter(kA).map(function(e){switch(e.value){case"underline":return 1;case"overline":return 2;case"line-through":return 3;case"none":return 4}return 0}).filter(function(e){return e!==0})}},lv={name:"font-family",initialValue:"",prefix:!1,type:1,parse:function(n,A){var e=[],t=[];return A.forEach(function(i){switch(i.type){case 20:case 0:e.push(i.value);break;case 17:e.push(i.number.toString());break;case 4:t.push(e.join(" ")),e.length=0;break}}),e.length&&t.push(e.join(" ")),t.map(function(i){return i.indexOf(" ")===-1?i:"'"+i+"'"})}},cv={name:"font-size",initialValue:"0",prefix:!1,type:3,format:"length"},uv={name:"font-weight",initialValue:"normal",type:0,prefix:!1,parse:function(n,A){if(mi(A))return A.number;if(kA(A))switch(A.value){case"bold":return 700;case"normal":default:return 400}return 400}},hv={name:"font-variant",initialValue:"none",type:1,prefix:!1,parse:function(n,A){return A.filter(kA).map(function(e){return e.value})}},fv={name:"font-style",initialValue:"normal",prefix:!1,type:2,parse:function(n,A){switch(A){case"oblique":return"oblique";case"italic":return"italic";case"normal":default:return"normal"}}},le=function(n,A){return(n&A)!==0},dv={name:"content",initialValue:"none",type:1,prefix:!1,parse:function(n,A){if(A.length===0)return[];var e=A[0];return e.type===20&&e.value==="none"?[]:A}},pv={name:"counter-increment",initialValue:"none",prefix:!0,type:1,parse:function(n,A){if(A.length===0)return null;var e=A[0];if(e.type===20&&e.value==="none")return null;for(var t=[],i=A.filter(Gu),r=0;r<i.length;r++){var s=i[r],a=i[r+1];if(s.type===20){var o=a&&mi(a)?a.number:1;t.push({counter:s.value,increment:o})}}return t}},gv={name:"counter-reset",initialValue:"none",prefix:!0,type:1,parse:function(n,A){if(A.length===0)return[];for(var e=[],t=A.filter(Gu),i=0;i<t.length;i++){var r=t[i],s=t[i+1];if(kA(r)&&r.value!=="none"){var a=s&&mi(s)?s.number:0;e.push({counter:r.value,reset:a})}}return e}},mv={name:"duration",initialValue:"0s",prefix:!1,type:1,parse:function(n,A){return A.filter(sr).map(function(e){return ih.parse(n,e)})}},Bv={name:"quotes",initialValue:"none",prefix:!0,type:1,parse:function(n,A){if(A.length===0)return null;var e=A[0];if(e.type===20&&e.value==="none")return null;var t=[],i=A.filter(k1);if(i.length%2!==0)return null;for(var r=0;r<i.length;r+=2){var s=i[r].value,a=i[r+1].value;t.push({open:s,close:a})}return t}},Cc=function(n,A,e){if(!n)return"";var t=n[Math.min(A,n.length-1)];return t?e?t.open:t.close:""},wv={name:"box-shadow",initialValue:"none",type:1,prefix:!1,parse:function(n,A){return A.length===1&&no(A[0],"none")?[]:mt(A).map(function(e){for(var t={color:255,offsetX:we,offsetY:we,blur:we,spread:we,inset:!1},i=0,r=0;r<e.length;r++){var s=e[r];no(s,"inset")?t.inset=!0:Jt(s)?(i===0?t.offsetX=s:i===1?t.offsetY=s:i===2?t.blur=s:t.spread=s,i++):t.color=Wt.parse(n,s)}return t})}},vv={name:"paint-order",initialValue:"normal",prefix:!1,type:1,parse:function(n,A){var e=[0,1,2],t=[];return A.filter(kA).forEach(function(i){switch(i.value){case"stroke":t.push(1);break;case"fill":t.push(0);break;case"markers":t.push(2);break}}),e.forEach(function(i){t.indexOf(i)===-1&&t.push(i)}),t}},_v={name:"-webkit-text-stroke-color",initialValue:"currentcolor",prefix:!1,type:3,format:"color"},Cv={name:"-webkit-text-stroke-width",initialValue:"0",type:0,prefix:!1,parse:function(n,A){return sr(A)?A.number:0}},Ev=function(){function n(A,e){var t,i;this.animationDuration=uA(A,mv,e.animationDuration),this.backgroundClip=uA(A,X1,e.backgroundClip),this.backgroundColor=uA(A,Y1,e.backgroundColor),this.backgroundImage=uA(A,iw,e.backgroundImage),this.backgroundOrigin=uA(A,rw,e.backgroundOrigin),this.backgroundPosition=uA(A,sw,e.backgroundPosition),this.backgroundRepeat=uA(A,aw,e.backgroundRepeat),this.backgroundSize=uA(A,lw,e.backgroundSize),this.borderTopColor=uA(A,uw,e.borderTopColor),this.borderRightColor=uA(A,hw,e.borderRightColor),this.borderBottomColor=uA(A,fw,e.borderBottomColor),this.borderLeftColor=uA(A,dw,e.borderLeftColor),this.borderTopLeftRadius=uA(A,pw,e.borderTopLeftRadius),this.borderTopRightRadius=uA(A,gw,e.borderTopRightRadius),this.borderBottomRightRadius=uA(A,mw,e.borderBottomRightRadius),this.borderBottomLeftRadius=uA(A,Bw,e.borderBottomLeftRadius),this.borderTopStyle=uA(A,ww,e.borderTopStyle),this.borderRightStyle=uA(A,vw,e.borderRightStyle),this.borderBottomStyle=uA(A,_w,e.borderBottomStyle),this.borderLeftStyle=uA(A,Cw,e.borderLeftStyle),this.borderTopWidth=uA(A,Ew,e.borderTopWidth),this.borderRightWidth=uA(A,xw,e.borderRightWidth),this.borderBottomWidth=uA(A,Uw,e.borderBottomWidth),this.borderLeftWidth=uA(A,Fw,e.borderLeftWidth),this.boxShadow=uA(A,wv,e.boxShadow),this.color=uA(A,Mw,e.color),this.direction=uA(A,yw,e.direction),this.display=uA(A,Sw,e.display),this.float=uA(A,Tw,e.cssFloat),this.fontFamily=uA(A,lv,e.fontFamily),this.fontSize=uA(A,cv,e.fontSize),this.fontStyle=uA(A,fv,e.fontStyle),this.fontVariant=uA(A,hv,e.fontVariant),this.fontWeight=uA(A,uv,e.fontWeight),this.letterSpacing=uA(A,Qw,e.letterSpacing),this.lineBreak=uA(A,Iw,e.lineBreak),this.lineHeight=uA(A,Lw,e.lineHeight),this.listStyleImage=uA(A,Rw,e.listStyleImage),this.listStylePosition=uA(A,Hw,e.listStylePosition),this.listStyleType=uA(A,io,e.listStyleType),this.marginTop=uA(A,Dw,e.marginTop),this.marginRight=uA(A,Pw,e.marginRight),this.marginBottom=uA(A,Ow,e.marginBottom),this.marginLeft=uA(A,Nw,e.marginLeft),this.opacity=uA(A,sv,e.opacity);var r=uA(A,Gw,e.overflow);this.overflowX=r[0],this.overflowY=r[r.length>1?1:0],this.overflowWrap=uA(A,Vw,e.overflowWrap),this.paddingTop=uA(A,Kw,e.paddingTop),this.paddingRight=uA(A,kw,e.paddingRight),this.paddingBottom=uA(A,zw,e.paddingBottom),this.paddingLeft=uA(A,Ww,e.paddingLeft),this.paintOrder=uA(A,vv,e.paintOrder),this.position=uA(A,Yw,e.position),this.textAlign=uA(A,Xw,e.textAlign),this.textDecorationColor=uA(A,av,(t=e.textDecorationColor)!==null&&t!==void 0?t:e.color),this.textDecorationLine=uA(A,ov,(i=e.textDecorationLine)!==null&&i!==void 0?i:e.textDecoration),this.textShadow=uA(A,Jw,e.textShadow),this.textTransform=uA(A,Zw,e.textTransform),this.transform=uA(A,qw,e.transform),this.transformOrigin=uA(A,tv,e.transformOrigin),this.visibility=uA(A,nv,e.visibility),this.webkitTextStrokeColor=uA(A,_v,e.webkitTextStrokeColor),this.webkitTextStrokeWidth=uA(A,Cv,e.webkitTextStrokeWidth),this.wordBreak=uA(A,iv,e.wordBreak),this.zIndex=uA(A,rv,e.zIndex)}return n.prototype.isVisible=function(){return this.display>0&&this.opacity>0&&this.visibility===0},n.prototype.isTransparent=function(){return Xt(this.backgroundColor)},n.prototype.isTransformed=function(){return this.transform!==null},n.prototype.isPositioned=function(){return this.position!==0},n.prototype.isPositionedWithZIndex=function(){return this.isPositioned()&&!this.zIndex.auto},n.prototype.isFloating=function(){return this.float!==0},n.prototype.isInlineLevel=function(){return le(this.display,4)||le(this.display,33554432)||le(this.display,268435456)||le(this.display,536870912)||le(this.display,67108864)||le(this.display,134217728)},n}(),xv=function(){function n(A,e){this.content=uA(A,dv,e.content),this.quotes=uA(A,Bv,e.quotes)}return n}(),Ec=function(){function n(A,e){this.counterIncrement=uA(A,pv,e.counterIncrement),this.counterReset=uA(A,gv,e.counterReset)}return n}(),uA=function(n,A,e){var t=new Ou,i=e!==null&&typeof e<"u"?e.toString():A.initialValue;t.write(i);var r=new Nu(t.read());switch(A.type){case 2:var s=r.parseComponentValue();return A.parse(n,kA(s)?s.value:A.initialValue);case 0:return A.parse(n,r.parseComponentValue());case 1:return A.parse(n,r.parseComponentValues());case 4:return r.parseComponentValue();case 3:switch(A.format){case"angle":return Es.parse(n,r.parseComponentValue());case"color":return Wt.parse(n,r.parseComponentValue());case"image":return Eo.parse(n,r.parseComponentValue());case"length":var a=r.parseComponentValue();return Jt(a)?a:we;case"length-percentage":var o=r.parseComponentValue();return oe(o)?o:we;case"time":return ih.parse(n,r.parseComponentValue())}break}},Uv="data-html2canvas-debug",Fv=function(n){var A=n.getAttribute(Uv);switch(A){case"all":return 1;case"clone":return 2;case"parse":return 3;case"render":return 4;default:return 0}},ro=function(n,A){var e=Fv(n);return e===1||A===e},Bt=function(){function n(A,e){if(this.context=A,this.textNodes=[],this.elements=[],this.flags=0,ro(e,3))debugger;this.styles=new Ev(A,window.getComputedStyle(e,null)),oo(e)&&(this.styles.animationDuration.some(function(t){return t>0})&&(e.style.animationDuration="0s"),this.styles.transform!==null&&(e.style.transform="none")),this.bounds=_s(this.context,e),ro(e,4)&&(this.flags|=16)}return n}(),Mv="AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=",xc="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Li=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Wr=0;Wr<xc.length;Wr++)Li[xc.charCodeAt(Wr)]=Wr;var yv=function(n){var A=n.length*.75,e=n.length,t,i=0,r,s,a,o;n[n.length-1]==="="&&(A--,n[n.length-2]==="="&&A--);var l=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(A):new Array(A),c=Array.isArray(l)?l:new Uint8Array(l);for(t=0;t<e;t+=4)r=Li[n.charCodeAt(t)],s=Li[n.charCodeAt(t+1)],a=Li[n.charCodeAt(t+2)],o=Li[n.charCodeAt(t+3)],c[i++]=r<<2|s>>4,c[i++]=(s&15)<<4|a>>2,c[i++]=(a&3)<<6|o&63;return l},Sv=function(n){for(var A=n.length,e=[],t=0;t<A;t+=2)e.push(n[t+1]<<8|n[t]);return e},bv=function(n){for(var A=n.length,e=[],t=0;t<A;t+=4)e.push(n[t+3]<<24|n[t+2]<<16|n[t+1]<<8|n[t]);return e},vn=5,xo=6+5,_a=2,Tv=xo-vn,rh=65536>>vn,Qv=1<<vn,Ca=Qv-1,Iv=1024>>vn,Lv=rh+Iv,Rv=Lv,Hv=32,Dv=Rv+Hv,Pv=65536>>xo,Ov=1<<Tv,Nv=Ov-1,Uc=function(n,A,e){return n.slice?n.slice(A,e):new Uint16Array(Array.prototype.slice.call(n,A,e))},Gv=function(n,A,e){return n.slice?n.slice(A,e):new Uint32Array(Array.prototype.slice.call(n,A,e))},Vv=function(n,A){var e=yv(n),t=Array.isArray(e)?bv(e):new Uint32Array(e),i=Array.isArray(e)?Sv(e):new Uint16Array(e),r=24,s=Uc(i,r/2,t[4]/2),a=t[5]===2?Uc(i,(r+t[4])/2):Gv(t,Math.ceil((r+t[4])/4));return new Kv(t[0],t[1],t[2],t[3],s,a)},Kv=function(){function n(A,e,t,i,r,s){this.initialValue=A,this.errorValue=e,this.highStart=t,this.highValueIndex=i,this.index=r,this.data=s}return n.prototype.get=function(A){var e;if(A>=0){if(A<55296||A>56319&&A<=65535)return e=this.index[A>>vn],e=(e<<_a)+(A&Ca),this.data[e];if(A<=65535)return e=this.index[rh+(A-55296>>vn)],e=(e<<_a)+(A&Ca),this.data[e];if(A<this.highStart)return e=Dv-Pv+(A>>xo),e=this.index[e],e+=A>>vn&Nv,e=this.index[e],e=(e<<_a)+(A&Ca),this.data[e];if(A<=1114111)return this.data[this.highValueIndex]}return this.errorValue},n}(),Fc="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",kv=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Xr=0;Xr<Fc.length;Xr++)kv[Fc.charCodeAt(Xr)]=Xr;var zv=1,Ea=2,xa=3,Mc=4,yc=5,Wv=7,Sc=8,Ua=9,Fa=10,bc=11,Tc=12,Qc=13,Ic=14,Ma=15,Xv=function(n){for(var A=[],e=0,t=n.length;e<t;){var i=n.charCodeAt(e++);if(i>=55296&&i<=56319&&e<t){var r=n.charCodeAt(e++);(r&64512)===56320?A.push(((i&1023)<<10)+(r&1023)+65536):(A.push(i),e--)}else A.push(i)}return A},Yv=function(){for(var n=[],A=0;A<arguments.length;A++)n[A]=arguments[A];if(String.fromCodePoint)return String.fromCodePoint.apply(String,n);var e=n.length;if(!e)return"";for(var t=[],i=-1,r="";++i<e;){var s=n[i];s<=65535?t.push(s):(s-=65536,t.push((s>>10)+55296,s%1024+56320)),(i+1===e||t.length>16384)&&(r+=String.fromCharCode.apply(String,t),t.length=0)}return r},Jv=Vv(Mv),ze="×",ya="÷",Zv=function(n){return Jv.get(n)},qv=function(n,A,e){var t=e-2,i=A[t],r=A[e-1],s=A[e];if(r===Ea&&s===xa)return ze;if(r===Ea||r===xa||r===Mc||s===Ea||s===xa||s===Mc)return ya;if(r===Sc&&[Sc,Ua,bc,Tc].indexOf(s)!==-1||(r===bc||r===Ua)&&(s===Ua||s===Fa)||(r===Tc||r===Fa)&&s===Fa||s===Qc||s===yc||s===Wv||r===zv)return ze;if(r===Qc&&s===Ic){for(;i===yc;)i=A[--t];if(i===Ic)return ze}if(r===Ma&&s===Ma){for(var a=0;i===Ma;)a++,i=A[--t];if(a%2===0)return ze}return ya},jv=function(n){var A=Xv(n),e=A.length,t=0,i=0,r=A.map(Zv);return{next:function(){if(t>=e)return{done:!0,value:null};for(var s=ze;t<e&&(s=qv(A,r,++t))===ze;);if(s!==ze||t===e){var a=Yv.apply(null,A.slice(i,t));return i=t,{value:a,done:!1}}return{done:!0,value:null}}}},$v=function(n){for(var A=jv(n),e=[],t;!(t=A.next()).done;)t.value&&e.push(t.value.slice());return e},A_=function(n){var A=123;if(n.createRange){var e=n.createRange();if(e.getBoundingClientRect){var t=n.createElement("boundtest");t.style.height=A+"px",t.style.display="block",n.body.appendChild(t),e.selectNode(t);var i=e.getBoundingClientRect(),r=Math.round(i.height);if(n.body.removeChild(t),r===A)return!0}}return!1},e_=function(n){var A=n.createElement("boundtest");A.style.width="50px",A.style.display="block",A.style.fontSize="12px",A.style.letterSpacing="0px",A.style.wordSpacing="0px",n.body.appendChild(A);var e=n.createRange();A.innerHTML=typeof"".repeat=="function"?"&#128104;".repeat(10):"";var t=A.firstChild,i=Cs(t.data).map(function(o){return ie(o)}),r=0,s={},a=i.every(function(o,l){e.setStart(t,r),e.setEnd(t,r+o.length);var c=e.getBoundingClientRect();r+=o.length;var u=c.x>s.x||c.y>s.y;return s=c,l===0?!0:u});return n.body.removeChild(A),a},t_=function(){return typeof new Image().crossOrigin<"u"},n_=function(){return typeof new XMLHttpRequest().responseType=="string"},i_=function(n){var A=new Image,e=n.createElement("canvas"),t=e.getContext("2d");if(!t)return!1;A.src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";try{t.drawImage(A,0,0),e.toDataURL()}catch{return!1}return!0},Lc=function(n){return n[0]===0&&n[1]===255&&n[2]===0&&n[3]===255},r_=function(n){var A=n.createElement("canvas"),e=100;A.width=e,A.height=e;var t=A.getContext("2d");if(!t)return Promise.reject(!1);t.fillStyle="rgb(0, 255, 0)",t.fillRect(0,0,e,e);var i=new Image,r=A.toDataURL();i.src=r;var s=so(e,e,0,0,i);return t.fillStyle="red",t.fillRect(0,0,e,e),Rc(s).then(function(a){t.drawImage(a,0,0);var o=t.getImageData(0,0,e,e).data;t.fillStyle="red",t.fillRect(0,0,e,e);var l=n.createElement("div");return l.style.backgroundImage="url("+r+")",l.style.height=e+"px",Lc(o)?Rc(so(e,e,0,0,l)):Promise.reject(!1)}).then(function(a){return t.drawImage(a,0,0),Lc(t.getImageData(0,0,e,e).data)}).catch(function(){return!1})},so=function(n,A,e,t,i){var r="http://www.w3.org/2000/svg",s=document.createElementNS(r,"svg"),a=document.createElementNS(r,"foreignObject");return s.setAttributeNS(null,"width",n.toString()),s.setAttributeNS(null,"height",A.toString()),a.setAttributeNS(null,"width","100%"),a.setAttributeNS(null,"height","100%"),a.setAttributeNS(null,"x",e.toString()),a.setAttributeNS(null,"y",t.toString()),a.setAttributeNS(null,"externalResourcesRequired","true"),s.appendChild(a),a.appendChild(i),s},Rc=function(n){return new Promise(function(A,e){var t=new Image;t.onload=function(){return A(t)},t.onerror=e,t.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(n))})},ge={get SUPPORT_RANGE_BOUNDS(){var n=A_(document);return Object.defineProperty(ge,"SUPPORT_RANGE_BOUNDS",{value:n}),n},get SUPPORT_WORD_BREAKING(){var n=ge.SUPPORT_RANGE_BOUNDS&&e_(document);return Object.defineProperty(ge,"SUPPORT_WORD_BREAKING",{value:n}),n},get SUPPORT_SVG_DRAWING(){var n=i_(document);return Object.defineProperty(ge,"SUPPORT_SVG_DRAWING",{value:n}),n},get SUPPORT_FOREIGNOBJECT_DRAWING(){var n=typeof Array.from=="function"&&typeof window.fetch=="function"?r_(document):Promise.resolve(!1);return Object.defineProperty(ge,"SUPPORT_FOREIGNOBJECT_DRAWING",{value:n}),n},get SUPPORT_CORS_IMAGES(){var n=t_();return Object.defineProperty(ge,"SUPPORT_CORS_IMAGES",{value:n}),n},get SUPPORT_RESPONSE_TYPE(){var n=n_();return Object.defineProperty(ge,"SUPPORT_RESPONSE_TYPE",{value:n}),n},get SUPPORT_CORS_XHR(){var n="withCredentials"in new XMLHttpRequest;return Object.defineProperty(ge,"SUPPORT_CORS_XHR",{value:n}),n},get SUPPORT_NATIVE_TEXT_SEGMENTATION(){var n=!!(typeof Intl<"u"&&Intl.Segmenter);return Object.defineProperty(ge,"SUPPORT_NATIVE_TEXT_SEGMENTATION",{value:n}),n}},Ni=function(){function n(A,e){this.text=A,this.bounds=e}return n}(),s_=function(n,A,e,t){var i=l_(A,e),r=[],s=0;return i.forEach(function(a){if(e.textDecorationLine.length||a.trim().length>0)if(ge.SUPPORT_RANGE_BOUNDS){var o=Hc(t,s,a.length).getClientRects();if(o.length>1){var l=Uo(a),c=0;l.forEach(function(h){r.push(new Ni(h,Qt.fromDOMRectList(n,Hc(t,c+s,h.length).getClientRects()))),c+=h.length})}else r.push(new Ni(a,Qt.fromDOMRectList(n,o)))}else{var u=t.splitText(a.length);r.push(new Ni(a,a_(n,t))),t=u}else ge.SUPPORT_RANGE_BOUNDS||(t=t.splitText(a.length));s+=a.length}),r},a_=function(n,A){var e=A.ownerDocument;if(e){var t=e.createElement("html2canvaswrapper");t.appendChild(A.cloneNode(!0));var i=A.parentNode;if(i){i.replaceChild(t,A);var r=_s(n,t);return t.firstChild&&i.replaceChild(t.firstChild,t),r}}return Qt.EMPTY},Hc=function(n,A,e){var t=n.ownerDocument;if(!t)throw new Error("Node has no owner document");var i=t.createRange();return i.setStart(n,A),i.setEnd(n,A+e),i},Uo=function(n){if(ge.SUPPORT_NATIVE_TEXT_SEGMENTATION){var A=new Intl.Segmenter(void 0,{granularity:"grapheme"});return Array.from(A.segment(n)).map(function(e){return e.segment})}return $v(n)},o_=function(n,A){if(ge.SUPPORT_NATIVE_TEXT_SEGMENTATION){var e=new Intl.Segmenter(void 0,{granularity:"word"});return Array.from(e.segment(n)).map(function(t){return t.segment})}return u_(n,A)},l_=function(n,A){return A.letterSpacing!==0?Uo(n):o_(n,A)},c_=[32,160,4961,65792,65793,4153,4241],u_=function(n,A){for(var e=PB(n,{lineBreak:A.lineBreak,wordBreak:A.overflowWrap==="break-word"?"break-word":A.wordBreak}),t=[],i,r=function(){if(i.value){var s=i.value.slice(),a=Cs(s),o="";a.forEach(function(l){c_.indexOf(l)===-1?o+=ie(l):(o.length&&t.push(o),t.push(ie(l)),o="")}),o.length&&t.push(o)}};!(i=e.next()).done;)r();return t},h_=function(){function n(A,e,t){this.text=f_(e.data,t.textTransform),this.textBounds=s_(A,this.text,t,e)}return n}(),f_=function(n,A){switch(A){case 1:return n.toLowerCase();case 3:return n.replace(d_,p_);case 2:return n.toUpperCase();default:return n}},d_=/(^|\s|:|-|\(|\))([a-z])/g,p_=function(n,A,e){return n.length>0?A+e.toUpperCase():n},sh=function(n){lt(A,n);function A(e,t){var i=n.call(this,e,t)||this;return i.src=t.currentSrc||t.src,i.intrinsicWidth=t.naturalWidth,i.intrinsicHeight=t.naturalHeight,i.context.cache.addImage(i.src),i}return A}(Bt),ah=function(n){lt(A,n);function A(e,t){var i=n.call(this,e,t)||this;return i.canvas=t,i.intrinsicWidth=t.width,i.intrinsicHeight=t.height,i}return A}(Bt),oh=function(n){lt(A,n);function A(e,t){var i=n.call(this,e,t)||this,r=new XMLSerializer,s=_s(e,t);return t.setAttribute("width",s.width+"px"),t.setAttribute("height",s.height+"px"),i.svg="data:image/svg+xml,"+encodeURIComponent(r.serializeToString(t)),i.intrinsicWidth=t.width.baseVal.value,i.intrinsicHeight=t.height.baseVal.value,i.context.cache.addImage(i.svg),i}return A}(Bt),lh=function(n){lt(A,n);function A(e,t){var i=n.call(this,e,t)||this;return i.value=t.value,i}return A}(Bt),ao=function(n){lt(A,n);function A(e,t){var i=n.call(this,e,t)||this;return i.start=t.start,i.reversed=typeof t.reversed=="boolean"&&t.reversed===!0,i}return A}(Bt),g_=[{type:15,flags:0,unit:"px",number:3}],m_=[{type:16,flags:0,number:50}],B_=function(n){return n.width>n.height?new Qt(n.left+(n.width-n.height)/2,n.top,n.height,n.height):n.width<n.height?new Qt(n.left,n.top+(n.height-n.width)/2,n.width,n.width):n},w_=function(n){var A=n.type===v_?new Array(n.value.length+1).join("•"):n.value;return A.length===0?n.placeholder||"":A},ls="checkbox",cs="radio",v_="password",Dc=707406591,Fo=function(n){lt(A,n);function A(e,t){var i=n.call(this,e,t)||this;switch(i.type=t.type.toLowerCase(),i.checked=t.checked,i.value=w_(t),(i.type===ls||i.type===cs)&&(i.styles.backgroundColor=3739148031,i.styles.borderTopColor=i.styles.borderRightColor=i.styles.borderBottomColor=i.styles.borderLeftColor=2779096575,i.styles.borderTopWidth=i.styles.borderRightWidth=i.styles.borderBottomWidth=i.styles.borderLeftWidth=1,i.styles.borderTopStyle=i.styles.borderRightStyle=i.styles.borderBottomStyle=i.styles.borderLeftStyle=1,i.styles.backgroundClip=[0],i.styles.backgroundOrigin=[0],i.bounds=B_(i.bounds)),i.type){case ls:i.styles.borderTopRightRadius=i.styles.borderTopLeftRadius=i.styles.borderBottomRightRadius=i.styles.borderBottomLeftRadius=g_;break;case cs:i.styles.borderTopRightRadius=i.styles.borderTopLeftRadius=i.styles.borderBottomRightRadius=i.styles.borderBottomLeftRadius=m_;break}return i}return A}(Bt),ch=function(n){lt(A,n);function A(e,t){var i=n.call(this,e,t)||this,r=t.options[t.selectedIndex||0];return i.value=r&&r.text||"",i}return A}(Bt),uh=function(n){lt(A,n);function A(e,t){var i=n.call(this,e,t)||this;return i.value=t.value,i}return A}(Bt),hh=function(n){lt(A,n);function A(e,t){var i=n.call(this,e,t)||this;i.src=t.src,i.width=parseInt(t.width,10)||0,i.height=parseInt(t.height,10)||0,i.backgroundColor=i.styles.backgroundColor;try{if(t.contentWindow&&t.contentWindow.document&&t.contentWindow.document.documentElement){i.tree=dh(e,t.contentWindow.document.documentElement);var r=t.contentWindow.document.documentElement?Pi(e,getComputedStyle(t.contentWindow.document.documentElement).backgroundColor):Tt.TRANSPARENT,s=t.contentWindow.document.body?Pi(e,getComputedStyle(t.contentWindow.document.body).backgroundColor):Tt.TRANSPARENT;i.backgroundColor=Xt(r)?Xt(s)?i.styles.backgroundColor:s:r}}catch{}return i}return A}(Bt),__=["OL","UL","MENU"],ns=function(n,A,e,t){for(var i=A.firstChild,r=void 0;i;i=r)if(r=i.nextSibling,ph(i)&&i.data.trim().length>0)e.textNodes.push(new h_(n,i,e.styles));else if(ei(i))if(wh(i)&&i.assignedNodes)i.assignedNodes().forEach(function(a){return ns(n,a,e,t)});else{var s=fh(n,i);s.styles.isVisible()&&(C_(i,s,t)?s.flags|=4:E_(s.styles)&&(s.flags|=2),__.indexOf(i.tagName)!==-1&&(s.flags|=8),e.elements.push(s),i.slot,i.shadowRoot?ns(n,i.shadowRoot,s,t):!us(i)&&!gh(i)&&!hs(i)&&ns(n,i,s,t))}},fh=function(n,A){return lo(A)?new sh(n,A):mh(A)?new ah(n,A):gh(A)?new oh(n,A):x_(A)?new lh(n,A):U_(A)?new ao(n,A):F_(A)?new Fo(n,A):hs(A)?new ch(n,A):us(A)?new uh(n,A):Bh(A)?new hh(n,A):new Bt(n,A)},dh=function(n,A){var e=fh(n,A);return e.flags|=4,ns(n,A,e,e),e},C_=function(n,A,e){return A.styles.isPositionedWithZIndex()||A.styles.opacity<1||A.styles.isTransformed()||Mo(n)&&e.styles.isTransparent()},E_=function(n){return n.isPositioned()||n.isFloating()},ph=function(n){return n.nodeType===Node.TEXT_NODE},ei=function(n){return n.nodeType===Node.ELEMENT_NODE},oo=function(n){return ei(n)&&typeof n.style<"u"&&!is(n)},is=function(n){return typeof n.className=="object"},x_=function(n){return n.tagName==="LI"},U_=function(n){return n.tagName==="OL"},F_=function(n){return n.tagName==="INPUT"},M_=function(n){return n.tagName==="HTML"},gh=function(n){return n.tagName==="svg"},Mo=function(n){return n.tagName==="BODY"},mh=function(n){return n.tagName==="CANVAS"},Pc=function(n){return n.tagName==="VIDEO"},lo=function(n){return n.tagName==="IMG"},Bh=function(n){return n.tagName==="IFRAME"},Oc=function(n){return n.tagName==="STYLE"},y_=function(n){return n.tagName==="SCRIPT"},us=function(n){return n.tagName==="TEXTAREA"},hs=function(n){return n.tagName==="SELECT"},wh=function(n){return n.tagName==="SLOT"},Nc=function(n){return n.tagName.indexOf("-")>0},S_=function(){function n(){this.counters={}}return n.prototype.getCounterValue=function(A){var e=this.counters[A];return e&&e.length?e[e.length-1]:1},n.prototype.getCounterValues=function(A){var e=this.counters[A];return e||[]},n.prototype.pop=function(A){var e=this;A.forEach(function(t){return e.counters[t].pop()})},n.prototype.parse=function(A){var e=this,t=A.counterIncrement,i=A.counterReset,r=!0;t!==null&&t.forEach(function(a){var o=e.counters[a.counter];o&&a.increment!==0&&(r=!1,o.length||o.push(1),o[Math.max(0,o.length-1)]+=a.increment)});var s=[];return r&&i.forEach(function(a){var o=e.counters[a.counter];s.push(a.counter),o||(o=e.counters[a.counter]=[]),o.push(a.reset)}),s},n}(),Gc={integers:[1e3,900,500,400,100,90,50,40,10,9,5,4,1],values:["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]},Vc={integers:[9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["Ք","Փ","Ւ","Ց","Ր","Տ","Վ","Ս","Ռ","Ջ","Պ","Չ","Ո","Շ","Ն","Յ","Մ","Ճ","Ղ","Ձ","Հ","Կ","Ծ","Խ","Լ","Ի","Ժ","Թ","Ը","Է","Զ","Ե","Դ","Գ","Բ","Ա"]},b_={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,400,300,200,100,90,80,70,60,50,40,30,20,19,18,17,16,15,10,9,8,7,6,5,4,3,2,1],values:["י׳","ט׳","ח׳","ז׳","ו׳","ה׳","ד׳","ג׳","ב׳","א׳","ת","ש","ר","ק","צ","פ","ע","ס","נ","מ","ל","כ","יט","יח","יז","טז","טו","י","ט","ח","ז","ו","ה","ד","ג","ב","א"]},T_={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["ჵ","ჰ","ჯ","ჴ","ხ","ჭ","წ","ძ","ც","ჩ","შ","ყ","ღ","ქ","ფ","ჳ","ტ","ს","რ","ჟ","პ","ო","ჲ","ნ","მ","ლ","კ","ი","თ","ჱ","ზ","ვ","ე","დ","გ","ბ","ა"]},Xn=function(n,A,e,t,i,r){return n<A||n>e?Zi(n,i,r.length>0):t.integers.reduce(function(s,a,o){for(;n>=a;)n-=a,s+=t.values[o];return s},"")+r},vh=function(n,A,e,t){var i="";do e||n--,i=t(n)+i,n/=A;while(n*A>=A);return i},te=function(n,A,e,t,i){var r=e-A+1;return(n<0?"-":"")+(vh(Math.abs(n),r,t,function(s){return ie(Math.floor(s%r)+A)})+i)},nn=function(n,A,e){e===void 0&&(e=". ");var t=A.length;return vh(Math.abs(n),t,!1,function(i){return A[Math.floor(i%t)]})+e},jn=1<<0,Pt=1<<1,Ot=1<<2,Ri=1<<3,Ft=function(n,A,e,t,i,r){if(n<-9999||n>9999)return Zi(n,4,i.length>0);var s=Math.abs(n),a=i;if(s===0)return A[0]+a;for(var o=0;s>0&&o<=4;o++){var l=s%10;l===0&&le(r,jn)&&a!==""?a=A[l]+a:l>1||l===1&&o===0||l===1&&o===1&&le(r,Pt)||l===1&&o===1&&le(r,Ot)&&n>100||l===1&&o>1&&le(r,Ri)?a=A[l]+(o>0?e[o-1]:"")+a:l===1&&o>0&&(a=e[o-1]+a),s=Math.floor(s/10)}return(n<0?t:"")+a},Kc="十百千萬",kc="拾佰仟萬",zc="マイナス",Sa="마이너스",Zi=function(n,A,e){var t=e?". ":"",i=e?"、":"",r=e?", ":"",s=e?" ":"";switch(A){case 0:return"•"+s;case 1:return"◦"+s;case 2:return"◾"+s;case 5:var a=te(n,48,57,!0,t);return a.length<4?"0"+a:a;case 4:return nn(n,"〇一二三四五六七八九",i);case 6:return Xn(n,1,3999,Gc,3,t).toLowerCase();case 7:return Xn(n,1,3999,Gc,3,t);case 8:return te(n,945,969,!1,t);case 9:return te(n,97,122,!1,t);case 10:return te(n,65,90,!1,t);case 11:return te(n,1632,1641,!0,t);case 12:case 49:return Xn(n,1,9999,Vc,3,t);case 35:return Xn(n,1,9999,Vc,3,t).toLowerCase();case 13:return te(n,2534,2543,!0,t);case 14:case 30:return te(n,6112,6121,!0,t);case 15:return nn(n,"子丑寅卯辰巳午未申酉戌亥",i);case 16:return nn(n,"甲乙丙丁戊己庚辛壬癸",i);case 17:case 48:return Ft(n,"零一二三四五六七八九",Kc,"負",i,Pt|Ot|Ri);case 47:return Ft(n,"零壹貳參肆伍陸柒捌玖",kc,"負",i,jn|Pt|Ot|Ri);case 42:return Ft(n,"零一二三四五六七八九",Kc,"负",i,Pt|Ot|Ri);case 41:return Ft(n,"零壹贰叁肆伍陆柒捌玖",kc,"负",i,jn|Pt|Ot|Ri);case 26:return Ft(n,"〇一二三四五六七八九","十百千万",zc,i,0);case 25:return Ft(n,"零壱弐参四伍六七八九","拾百千万",zc,i,jn|Pt|Ot);case 31:return Ft(n,"영일이삼사오육칠팔구","십백천만",Sa,r,jn|Pt|Ot);case 33:return Ft(n,"零一二三四五六七八九","十百千萬",Sa,r,0);case 32:return Ft(n,"零壹貳參四五六七八九","拾百千",Sa,r,jn|Pt|Ot);case 18:return te(n,2406,2415,!0,t);case 20:return Xn(n,1,19999,T_,3,t);case 21:return te(n,2790,2799,!0,t);case 22:return te(n,2662,2671,!0,t);case 22:return Xn(n,1,10999,b_,3,t);case 23:return nn(n,"あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");case 24:return nn(n,"いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");case 27:return te(n,3302,3311,!0,t);case 28:return nn(n,"アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン",i);case 29:return nn(n,"イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス",i);case 34:return te(n,3792,3801,!0,t);case 37:return te(n,6160,6169,!0,t);case 38:return te(n,4160,4169,!0,t);case 39:return te(n,2918,2927,!0,t);case 40:return te(n,1776,1785,!0,t);case 43:return te(n,3046,3055,!0,t);case 44:return te(n,3174,3183,!0,t);case 45:return te(n,3664,3673,!0,t);case 46:return te(n,3872,3881,!0,t);case 3:default:return te(n,48,57,!0,t)}},_h="data-html2canvas-ignore",Wc=function(){function n(A,e,t){if(this.context=A,this.options=t,this.scrolledElements=[],this.referenceElement=e,this.counters=new S_,this.quoteDepth=0,!e.ownerDocument)throw new Error("Cloned element does not have an owner document");this.documentElement=this.cloneNode(e.ownerDocument.documentElement,!1)}return n.prototype.toIFrame=function(A,e){var t=this,i=Q_(A,e);if(!i.contentWindow)return Promise.reject("Unable to find iframe window");var r=A.defaultView.pageXOffset,s=A.defaultView.pageYOffset,a=i.contentWindow,o=a.document,l=R_(i).then(function(){return be(t,void 0,void 0,function(){var c,u;return Ue(this,function(h){switch(h.label){case 0:return this.scrolledElements.forEach(O_),a&&(a.scrollTo(e.left,e.top),/(iPad|iPhone|iPod)/g.test(navigator.userAgent)&&(a.scrollY!==e.top||a.scrollX!==e.left)&&(this.context.logger.warn("Unable to restore scroll position for cloned document"),this.context.windowBounds=this.context.windowBounds.add(a.scrollX-e.left,a.scrollY-e.top,0,0))),c=this.options.onclone,u=this.clonedReferenceElement,typeof u>"u"?[2,Promise.reject("Error finding the "+this.referenceElement.nodeName+" in the cloned document")]:o.fonts&&o.fonts.ready?[4,o.fonts.ready]:[3,2];case 1:h.sent(),h.label=2;case 2:return/(AppleWebKit)/g.test(navigator.userAgent)?[4,L_(o)]:[3,4];case 3:h.sent(),h.label=4;case 4:return typeof c=="function"?[2,Promise.resolve().then(function(){return c(o,u)}).then(function(){return i})]:[2,i]}})})});return o.open(),o.write(D_(document.doctype)+"<html></html>"),P_(this.referenceElement.ownerDocument,r,s),o.replaceChild(o.adoptNode(this.documentElement),o.documentElement),o.close(),l},n.prototype.createElementClone=function(A){if(ro(A,2))debugger;if(mh(A))return this.createCanvasClone(A);if(Pc(A))return this.createVideoClone(A);if(Oc(A))return this.createStyleClone(A);var e=A.cloneNode(!1);return lo(e)&&(lo(A)&&A.currentSrc&&A.currentSrc!==A.src&&(e.src=A.currentSrc,e.srcset=""),e.loading==="lazy"&&(e.loading="eager")),Nc(e)?this.createCustomElementClone(e):e},n.prototype.createCustomElementClone=function(A){var e=document.createElement("html2canvascustomelement");return ba(A.style,e),e},n.prototype.createStyleClone=function(A){try{var e=A.sheet;if(e&&e.cssRules){var t=[].slice.call(e.cssRules,0).reduce(function(r,s){return s&&typeof s.cssText=="string"?r+s.cssText:r},""),i=A.cloneNode(!1);return i.textContent=t,i}}catch(r){if(this.context.logger.error("Unable to access cssRules property",r),r.name!=="SecurityError")throw r}return A.cloneNode(!1)},n.prototype.createCanvasClone=function(A){var e;if(this.options.inlineImages&&A.ownerDocument){var t=A.ownerDocument.createElement("img");try{return t.src=A.toDataURL(),t}catch{this.context.logger.info("Unable to inline canvas contents, canvas is tainted",A)}}var i=A.cloneNode(!1);try{i.width=A.width,i.height=A.height;var r=A.getContext("2d"),s=i.getContext("2d");if(s)if(!this.options.allowTaint&&r)s.putImageData(r.getImageData(0,0,A.width,A.height),0,0);else{var a=(e=A.getContext("webgl2"))!==null&&e!==void 0?e:A.getContext("webgl");if(a){var o=a.getContextAttributes();(o==null?void 0:o.preserveDrawingBuffer)===!1&&this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false",A)}s.drawImage(A,0,0)}return i}catch{this.context.logger.info("Unable to clone canvas as it is tainted",A)}return i},n.prototype.createVideoClone=function(A){var e=A.ownerDocument.createElement("canvas");e.width=A.offsetWidth,e.height=A.offsetHeight;var t=e.getContext("2d");try{return t&&(t.drawImage(A,0,0,e.width,e.height),this.options.allowTaint||t.getImageData(0,0,e.width,e.height)),e}catch{this.context.logger.info("Unable to clone video as it is tainted",A)}var i=A.ownerDocument.createElement("canvas");return i.width=A.offsetWidth,i.height=A.offsetHeight,i},n.prototype.appendChildNode=function(A,e,t){(!ei(e)||!y_(e)&&!e.hasAttribute(_h)&&(typeof this.options.ignoreElements!="function"||!this.options.ignoreElements(e)))&&(!this.options.copyStyles||!ei(e)||!Oc(e))&&A.appendChild(this.cloneNode(e,t))},n.prototype.cloneChildNodes=function(A,e,t){for(var i=this,r=A.shadowRoot?A.shadowRoot.firstChild:A.firstChild;r;r=r.nextSibling)if(ei(r)&&wh(r)&&typeof r.assignedNodes=="function"){var s=r.assignedNodes();s.length&&s.forEach(function(a){return i.appendChildNode(e,a,t)})}else this.appendChildNode(e,r,t)},n.prototype.cloneNode=function(A,e){if(ph(A))return document.createTextNode(A.data);if(!A.ownerDocument)return A.cloneNode(!1);var t=A.ownerDocument.defaultView;if(t&&ei(A)&&(oo(A)||is(A))){var i=this.createElementClone(A);i.style.transitionProperty="none";var r=t.getComputedStyle(A),s=t.getComputedStyle(A,":before"),a=t.getComputedStyle(A,":after");this.referenceElement===A&&oo(i)&&(this.clonedReferenceElement=i),Mo(i)&&V_(i);var o=this.counters.parse(new Ec(this.context,r)),l=this.resolvePseudoContent(A,i,s,Gi.BEFORE);Nc(A)&&(e=!0),Pc(A)||this.cloneChildNodes(A,i,e),l&&i.insertBefore(l,i.firstChild);var c=this.resolvePseudoContent(A,i,a,Gi.AFTER);return c&&i.appendChild(c),this.counters.pop(o),(r&&(this.options.copyStyles||is(A))&&!Bh(A)||e)&&ba(r,i),(A.scrollTop!==0||A.scrollLeft!==0)&&this.scrolledElements.push([i,A.scrollLeft,A.scrollTop]),(us(A)||hs(A))&&(us(i)||hs(i))&&(i.value=A.value),i}return A.cloneNode(!1)},n.prototype.resolvePseudoContent=function(A,e,t,i){var r=this;if(t){var s=t.content,a=e.ownerDocument;if(!(!a||!s||s==="none"||s==="-moz-alt-content"||t.display==="none")){this.counters.parse(new Ec(this.context,t));var o=new xv(this.context,t),l=a.createElement("html2canvaspseudoelement");ba(t,l),o.content.forEach(function(u){if(u.type===0)l.appendChild(a.createTextNode(u.value));else if(u.type===22){var h=a.createElement("img");h.src=u.value,h.style.opacity="1",l.appendChild(h)}else if(u.type===18){if(u.name==="attr"){var d=u.values.filter(kA);d.length&&l.appendChild(a.createTextNode(A.getAttribute(d[0].value)||""))}else if(u.name==="counter"){var g=u.values.filter(pi),m=g[0],p=g[1];if(m&&kA(m)){var f=r.counters.getCounterValue(m.value),_=p&&kA(p)?io.parse(r.context,p.value):3;l.appendChild(a.createTextNode(Zi(f,_,!1)))}}else if(u.name==="counters"){var E=u.values.filter(pi),m=E[0],x=E[1],p=E[2];if(m&&kA(m)){var w=r.counters.getCounterValues(m.value),U=p&&kA(p)?io.parse(r.context,p.value):3,S=x&&x.type===0?x.value:"",R=w.map(function(X){return Zi(X,U,!1)}).join(S);l.appendChild(a.createTextNode(R))}}}else if(u.type===20)switch(u.value){case"open-quote":l.appendChild(a.createTextNode(Cc(o.quotes,r.quoteDepth++,!0)));break;case"close-quote":l.appendChild(a.createTextNode(Cc(o.quotes,--r.quoteDepth,!1)));break;default:l.appendChild(a.createTextNode(u.value))}}),l.className=co+" "+uo;var c=i===Gi.BEFORE?" "+co:" "+uo;return is(e)?e.className.baseValue+=c:e.className+=c,l}}},n.destroy=function(A){return A.parentNode?(A.parentNode.removeChild(A),!0):!1},n}(),Gi;(function(n){n[n.BEFORE=0]="BEFORE",n[n.AFTER=1]="AFTER"})(Gi||(Gi={}));var Q_=function(n,A){var e=n.createElement("iframe");return e.className="html2canvas-container",e.style.visibility="hidden",e.style.position="fixed",e.style.left="-10000px",e.style.top="0px",e.style.border="0",e.width=A.width.toString(),e.height=A.height.toString(),e.scrolling="no",e.setAttribute(_h,"true"),n.body.appendChild(e),e},I_=function(n){return new Promise(function(A){if(n.complete){A();return}if(!n.src){A();return}n.onload=A,n.onerror=A})},L_=function(n){return Promise.all([].slice.call(n.images,0).map(I_))},R_=function(n){return new Promise(function(A,e){var t=n.contentWindow;if(!t)return e("No window assigned for iframe");var i=t.document;t.onload=n.onload=function(){t.onload=n.onload=null;var r=setInterval(function(){i.body.childNodes.length>0&&i.readyState==="complete"&&(clearInterval(r),A(n))},50)}})},H_=["all","d","content"],ba=function(n,A){for(var e=n.length-1;e>=0;e--){var t=n.item(e);H_.indexOf(t)===-1&&A.style.setProperty(t,n.getPropertyValue(t))}return A},D_=function(n){var A="";return n&&(A+="<!DOCTYPE ",n.name&&(A+=n.name),n.internalSubset&&(A+=n.internalSubset),n.publicId&&(A+='"'+n.publicId+'"'),n.systemId&&(A+='"'+n.systemId+'"'),A+=">"),A},P_=function(n,A,e){n&&n.defaultView&&(A!==n.defaultView.pageXOffset||e!==n.defaultView.pageYOffset)&&n.defaultView.scrollTo(A,e)},O_=function(n){var A=n[0],e=n[1],t=n[2];A.scrollLeft=e,A.scrollTop=t},N_=":before",G_=":after",co="___html2canvas___pseudoelement_before",uo="___html2canvas___pseudoelement_after",Xc=`{
    content: "" !important;
    display: none !important;
}`,V_=function(n){K_(n,"."+co+N_+Xc+`
         .`+uo+G_+Xc)},K_=function(n,A){var e=n.ownerDocument;if(e){var t=e.createElement("style");t.textContent=A,n.appendChild(t)}},Ch=function(){function n(){}return n.getOrigin=function(A){var e=n._link;return e?(e.href=A,e.href=e.href,e.protocol+e.hostname+e.port):"about:blank"},n.isSameOrigin=function(A){return n.getOrigin(A)===n._origin},n.setContext=function(A){n._link=A.document.createElement("a"),n._origin=n.getOrigin(A.location.href)},n._origin="about:blank",n}(),k_=function(){function n(A,e){this.context=A,this._options=e,this._cache={}}return n.prototype.addImage=function(A){var e=Promise.resolve();return this.has(A)||(Qa(A)||Y_(A))&&(this._cache[A]=this.loadImage(A)).catch(function(){}),e},n.prototype.match=function(A){return this._cache[A]},n.prototype.loadImage=function(A){return be(this,void 0,void 0,function(){var e,t,i,r,s=this;return Ue(this,function(a){switch(a.label){case 0:return e=Ch.isSameOrigin(A),t=!Ta(A)&&this._options.useCORS===!0&&ge.SUPPORT_CORS_IMAGES&&!e,i=!Ta(A)&&!e&&!Qa(A)&&typeof this._options.proxy=="string"&&ge.SUPPORT_CORS_XHR&&!t,!e&&this._options.allowTaint===!1&&!Ta(A)&&!Qa(A)&&!i&&!t?[2]:(r=A,i?[4,this.proxy(r)]:[3,2]);case 1:r=a.sent(),a.label=2;case 2:return this.context.logger.debug("Added image "+A.substring(0,256)),[4,new Promise(function(o,l){var c=new Image;c.onload=function(){return o(c)},c.onerror=l,(J_(r)||t)&&(c.crossOrigin="anonymous"),c.src=r,c.complete===!0&&setTimeout(function(){return o(c)},500),s._options.imageTimeout>0&&setTimeout(function(){return l("Timed out ("+s._options.imageTimeout+"ms) loading image")},s._options.imageTimeout)})];case 3:return[2,a.sent()]}})})},n.prototype.has=function(A){return typeof this._cache[A]<"u"},n.prototype.keys=function(){return Promise.resolve(Object.keys(this._cache))},n.prototype.proxy=function(A){var e=this,t=this._options.proxy;if(!t)throw new Error("No proxy defined");var i=A.substring(0,256);return new Promise(function(r,s){var a=ge.SUPPORT_RESPONSE_TYPE?"blob":"text",o=new XMLHttpRequest;o.onload=function(){if(o.status===200)if(a==="text")r(o.response);else{var u=new FileReader;u.addEventListener("load",function(){return r(u.result)},!1),u.addEventListener("error",function(h){return s(h)},!1),u.readAsDataURL(o.response)}else s("Failed to proxy resource "+i+" with status code "+o.status)},o.onerror=s;var l=t.indexOf("?")>-1?"&":"?";if(o.open("GET",""+t+l+"url="+encodeURIComponent(A)+"&responseType="+a),a!=="text"&&o instanceof XMLHttpRequest&&(o.responseType=a),e._options.imageTimeout){var c=e._options.imageTimeout;o.timeout=c,o.ontimeout=function(){return s("Timed out ("+c+"ms) proxying "+i)}}o.send()})},n}(),z_=/^data:image\/svg\+xml/i,W_=/^data:image\/.*;base64,/i,X_=/^data:image\/.*/i,Y_=function(n){return ge.SUPPORT_SVG_DRAWING||!Z_(n)},Ta=function(n){return X_.test(n)},J_=function(n){return W_.test(n)},Qa=function(n){return n.substr(0,4)==="blob"},Z_=function(n){return n.substr(-3).toLowerCase()==="svg"||z_.test(n)},cA=function(){function n(A,e){this.type=0,this.x=A,this.y=e}return n.prototype.add=function(A,e){return new n(this.x+A,this.y+e)},n}(),Yn=function(n,A,e){return new cA(n.x+(A.x-n.x)*e,n.y+(A.y-n.y)*e)},Yr=function(){function n(A,e,t,i){this.type=1,this.start=A,this.startControl=e,this.endControl=t,this.end=i}return n.prototype.subdivide=function(A,e){var t=Yn(this.start,this.startControl,A),i=Yn(this.startControl,this.endControl,A),r=Yn(this.endControl,this.end,A),s=Yn(t,i,A),a=Yn(i,r,A),o=Yn(s,a,A);return e?new n(this.start,t,s,o):new n(o,a,r,this.end)},n.prototype.add=function(A,e){return new n(this.start.add(A,e),this.startControl.add(A,e),this.endControl.add(A,e),this.end.add(A,e))},n.prototype.reverse=function(){return new n(this.end,this.endControl,this.startControl,this.start)},n}(),Ye=function(n){return n.type===1},q_=function(){function n(A){var e=A.styles,t=A.bounds,i=Ii(e.borderTopLeftRadius,t.width,t.height),r=i[0],s=i[1],a=Ii(e.borderTopRightRadius,t.width,t.height),o=a[0],l=a[1],c=Ii(e.borderBottomRightRadius,t.width,t.height),u=c[0],h=c[1],d=Ii(e.borderBottomLeftRadius,t.width,t.height),g=d[0],m=d[1],p=[];p.push((r+o)/t.width),p.push((g+u)/t.width),p.push((s+m)/t.height),p.push((l+h)/t.height);var f=Math.max.apply(Math,p);f>1&&(r/=f,s/=f,o/=f,l/=f,u/=f,h/=f,g/=f,m/=f);var _=t.width-o,E=t.height-h,x=t.width-u,w=t.height-m,U=e.borderTopWidth,S=e.borderRightWidth,R=e.borderBottomWidth,B=e.borderLeftWidth,M=YA(e.paddingTop,A.bounds.width),X=YA(e.paddingRight,A.bounds.width),V=YA(e.paddingBottom,A.bounds.width),Q=YA(e.paddingLeft,A.bounds.width);this.topLeftBorderDoubleOuterBox=r>0||s>0?ZA(t.left+B/3,t.top+U/3,r-B/3,s-U/3,GA.TOP_LEFT):new cA(t.left+B/3,t.top+U/3),this.topRightBorderDoubleOuterBox=r>0||s>0?ZA(t.left+_,t.top+U/3,o-S/3,l-U/3,GA.TOP_RIGHT):new cA(t.left+t.width-S/3,t.top+U/3),this.bottomRightBorderDoubleOuterBox=u>0||h>0?ZA(t.left+x,t.top+E,u-S/3,h-R/3,GA.BOTTOM_RIGHT):new cA(t.left+t.width-S/3,t.top+t.height-R/3),this.bottomLeftBorderDoubleOuterBox=g>0||m>0?ZA(t.left+B/3,t.top+w,g-B/3,m-R/3,GA.BOTTOM_LEFT):new cA(t.left+B/3,t.top+t.height-R/3),this.topLeftBorderDoubleInnerBox=r>0||s>0?ZA(t.left+B*2/3,t.top+U*2/3,r-B*2/3,s-U*2/3,GA.TOP_LEFT):new cA(t.left+B*2/3,t.top+U*2/3),this.topRightBorderDoubleInnerBox=r>0||s>0?ZA(t.left+_,t.top+U*2/3,o-S*2/3,l-U*2/3,GA.TOP_RIGHT):new cA(t.left+t.width-S*2/3,t.top+U*2/3),this.bottomRightBorderDoubleInnerBox=u>0||h>0?ZA(t.left+x,t.top+E,u-S*2/3,h-R*2/3,GA.BOTTOM_RIGHT):new cA(t.left+t.width-S*2/3,t.top+t.height-R*2/3),this.bottomLeftBorderDoubleInnerBox=g>0||m>0?ZA(t.left+B*2/3,t.top+w,g-B*2/3,m-R*2/3,GA.BOTTOM_LEFT):new cA(t.left+B*2/3,t.top+t.height-R*2/3),this.topLeftBorderStroke=r>0||s>0?ZA(t.left+B/2,t.top+U/2,r-B/2,s-U/2,GA.TOP_LEFT):new cA(t.left+B/2,t.top+U/2),this.topRightBorderStroke=r>0||s>0?ZA(t.left+_,t.top+U/2,o-S/2,l-U/2,GA.TOP_RIGHT):new cA(t.left+t.width-S/2,t.top+U/2),this.bottomRightBorderStroke=u>0||h>0?ZA(t.left+x,t.top+E,u-S/2,h-R/2,GA.BOTTOM_RIGHT):new cA(t.left+t.width-S/2,t.top+t.height-R/2),this.bottomLeftBorderStroke=g>0||m>0?ZA(t.left+B/2,t.top+w,g-B/2,m-R/2,GA.BOTTOM_LEFT):new cA(t.left+B/2,t.top+t.height-R/2),this.topLeftBorderBox=r>0||s>0?ZA(t.left,t.top,r,s,GA.TOP_LEFT):new cA(t.left,t.top),this.topRightBorderBox=o>0||l>0?ZA(t.left+_,t.top,o,l,GA.TOP_RIGHT):new cA(t.left+t.width,t.top),this.bottomRightBorderBox=u>0||h>0?ZA(t.left+x,t.top+E,u,h,GA.BOTTOM_RIGHT):new cA(t.left+t.width,t.top+t.height),this.bottomLeftBorderBox=g>0||m>0?ZA(t.left,t.top+w,g,m,GA.BOTTOM_LEFT):new cA(t.left,t.top+t.height),this.topLeftPaddingBox=r>0||s>0?ZA(t.left+B,t.top+U,Math.max(0,r-B),Math.max(0,s-U),GA.TOP_LEFT):new cA(t.left+B,t.top+U),this.topRightPaddingBox=o>0||l>0?ZA(t.left+Math.min(_,t.width-S),t.top+U,_>t.width+S?0:Math.max(0,o-S),Math.max(0,l-U),GA.TOP_RIGHT):new cA(t.left+t.width-S,t.top+U),this.bottomRightPaddingBox=u>0||h>0?ZA(t.left+Math.min(x,t.width-B),t.top+Math.min(E,t.height-R),Math.max(0,u-S),Math.max(0,h-R),GA.BOTTOM_RIGHT):new cA(t.left+t.width-S,t.top+t.height-R),this.bottomLeftPaddingBox=g>0||m>0?ZA(t.left+B,t.top+Math.min(w,t.height-R),Math.max(0,g-B),Math.max(0,m-R),GA.BOTTOM_LEFT):new cA(t.left+B,t.top+t.height-R),this.topLeftContentBox=r>0||s>0?ZA(t.left+B+Q,t.top+U+M,Math.max(0,r-(B+Q)),Math.max(0,s-(U+M)),GA.TOP_LEFT):new cA(t.left+B+Q,t.top+U+M),this.topRightContentBox=o>0||l>0?ZA(t.left+Math.min(_,t.width+B+Q),t.top+U+M,_>t.width+B+Q?0:o-B+Q,l-(U+M),GA.TOP_RIGHT):new cA(t.left+t.width-(S+X),t.top+U+M),this.bottomRightContentBox=u>0||h>0?ZA(t.left+Math.min(x,t.width-(B+Q)),t.top+Math.min(E,t.height+U+M),Math.max(0,u-(S+X)),h-(R+V),GA.BOTTOM_RIGHT):new cA(t.left+t.width-(S+X),t.top+t.height-(R+V)),this.bottomLeftContentBox=g>0||m>0?ZA(t.left+B+Q,t.top+w,Math.max(0,g-(B+Q)),m-(R+V),GA.BOTTOM_LEFT):new cA(t.left+B+Q,t.top+t.height-(R+V))}return n}(),GA;(function(n){n[n.TOP_LEFT=0]="TOP_LEFT",n[n.TOP_RIGHT=1]="TOP_RIGHT",n[n.BOTTOM_RIGHT=2]="BOTTOM_RIGHT",n[n.BOTTOM_LEFT=3]="BOTTOM_LEFT"})(GA||(GA={}));var ZA=function(n,A,e,t,i){var r=4*((Math.sqrt(2)-1)/3),s=e*r,a=t*r,o=n+e,l=A+t;switch(i){case GA.TOP_LEFT:return new Yr(new cA(n,l),new cA(n,l-a),new cA(o-s,A),new cA(o,A));case GA.TOP_RIGHT:return new Yr(new cA(n,A),new cA(n+s,A),new cA(o,l-a),new cA(o,l));case GA.BOTTOM_RIGHT:return new Yr(new cA(o,A),new cA(o,A+a),new cA(n+s,l),new cA(n,l));case GA.BOTTOM_LEFT:default:return new Yr(new cA(o,l),new cA(o-s,l),new cA(n,A+a),new cA(n,A))}},fs=function(n){return[n.topLeftBorderBox,n.topRightBorderBox,n.bottomRightBorderBox,n.bottomLeftBorderBox]},j_=function(n){return[n.topLeftContentBox,n.topRightContentBox,n.bottomRightContentBox,n.bottomLeftContentBox]},ds=function(n){return[n.topLeftPaddingBox,n.topRightPaddingBox,n.bottomRightPaddingBox,n.bottomLeftPaddingBox]},$_=function(){function n(A,e,t){this.offsetX=A,this.offsetY=e,this.matrix=t,this.type=0,this.target=6}return n}(),Jr=function(){function n(A,e){this.path=A,this.target=e,this.type=1}return n}(),AC=function(){function n(A){this.opacity=A,this.type=2,this.target=6}return n}(),eC=function(n){return n.type===0},Eh=function(n){return n.type===1},tC=function(n){return n.type===2},Yc=function(n,A){return n.length===A.length?n.some(function(e,t){return e===A[t]}):!1},nC=function(n,A,e,t,i){return n.map(function(r,s){switch(s){case 0:return r.add(A,e);case 1:return r.add(A+t,e);case 2:return r.add(A+t,e+i);case 3:return r.add(A,e+i)}return r})},xh=function(){function n(A){this.element=A,this.inlineLevel=[],this.nonInlineLevel=[],this.negativeZIndex=[],this.zeroOrAutoZIndexOrTransformedOrOpacity=[],this.positiveZIndex=[],this.nonPositionedFloats=[],this.nonPositionedInlineLevel=[]}return n}(),Uh=function(){function n(A,e){if(this.container=A,this.parent=e,this.effects=[],this.curves=new q_(this.container),this.container.styles.opacity<1&&this.effects.push(new AC(this.container.styles.opacity)),this.container.styles.transform!==null){var t=this.container.bounds.left+this.container.styles.transformOrigin[0].number,i=this.container.bounds.top+this.container.styles.transformOrigin[1].number,r=this.container.styles.transform;this.effects.push(new $_(t,i,r))}if(this.container.styles.overflowX!==0){var s=fs(this.curves),a=ds(this.curves);Yc(s,a)?this.effects.push(new Jr(s,6)):(this.effects.push(new Jr(s,2)),this.effects.push(new Jr(a,4)))}}return n.prototype.getEffects=function(A){for(var e=[2,3].indexOf(this.container.styles.position)===-1,t=this.parent,i=this.effects.slice(0);t;){var r=t.effects.filter(function(o){return!Eh(o)});if(e||t.container.styles.position!==0||!t.parent){if(i.unshift.apply(i,r),e=[2,3].indexOf(t.container.styles.position)===-1,t.container.styles.overflowX!==0){var s=fs(t.curves),a=ds(t.curves);Yc(s,a)||i.unshift(new Jr(a,6))}}else i.unshift.apply(i,r);t=t.parent}return i.filter(function(o){return le(o.target,A)})},n}(),ho=function(n,A,e,t){n.container.elements.forEach(function(i){var r=le(i.flags,4),s=le(i.flags,2),a=new Uh(i,n);le(i.styles.display,2048)&&t.push(a);var o=le(i.flags,8)?[]:t;if(r||s){var l=r||i.styles.isPositioned()?e:A,c=new xh(a);if(i.styles.isPositioned()||i.styles.opacity<1||i.styles.isTransformed()){var u=i.styles.zIndex.order;if(u<0){var h=0;l.negativeZIndex.some(function(g,m){return u>g.element.container.styles.zIndex.order?(h=m,!1):h>0}),l.negativeZIndex.splice(h,0,c)}else if(u>0){var d=0;l.positiveZIndex.some(function(g,m){return u>=g.element.container.styles.zIndex.order?(d=m+1,!1):d>0}),l.positiveZIndex.splice(d,0,c)}else l.zeroOrAutoZIndexOrTransformedOrOpacity.push(c)}else i.styles.isFloating()?l.nonPositionedFloats.push(c):l.nonPositionedInlineLevel.push(c);ho(a,c,r?c:e,o)}else i.styles.isInlineLevel()?A.inlineLevel.push(a):A.nonInlineLevel.push(a),ho(a,A,e,o);le(i.flags,8)&&Fh(i,o)})},Fh=function(n,A){for(var e=n instanceof ao?n.start:1,t=n instanceof ao?n.reversed:!1,i=0;i<A.length;i++){var r=A[i];r.container instanceof lh&&typeof r.container.value=="number"&&r.container.value!==0&&(e=r.container.value),r.listValue=Zi(e,r.container.styles.listStyleType,!0),e+=t?-1:1}},iC=function(n){var A=new Uh(n,null),e=new xh(A),t=[];return ho(A,e,e,t),Fh(A.container,t),e},Jc=function(n,A){switch(A){case 0:return Ze(n.topLeftBorderBox,n.topLeftPaddingBox,n.topRightBorderBox,n.topRightPaddingBox);case 1:return Ze(n.topRightBorderBox,n.topRightPaddingBox,n.bottomRightBorderBox,n.bottomRightPaddingBox);case 2:return Ze(n.bottomRightBorderBox,n.bottomRightPaddingBox,n.bottomLeftBorderBox,n.bottomLeftPaddingBox);case 3:default:return Ze(n.bottomLeftBorderBox,n.bottomLeftPaddingBox,n.topLeftBorderBox,n.topLeftPaddingBox)}},rC=function(n,A){switch(A){case 0:return Ze(n.topLeftBorderBox,n.topLeftBorderDoubleOuterBox,n.topRightBorderBox,n.topRightBorderDoubleOuterBox);case 1:return Ze(n.topRightBorderBox,n.topRightBorderDoubleOuterBox,n.bottomRightBorderBox,n.bottomRightBorderDoubleOuterBox);case 2:return Ze(n.bottomRightBorderBox,n.bottomRightBorderDoubleOuterBox,n.bottomLeftBorderBox,n.bottomLeftBorderDoubleOuterBox);case 3:default:return Ze(n.bottomLeftBorderBox,n.bottomLeftBorderDoubleOuterBox,n.topLeftBorderBox,n.topLeftBorderDoubleOuterBox)}},sC=function(n,A){switch(A){case 0:return Ze(n.topLeftBorderDoubleInnerBox,n.topLeftPaddingBox,n.topRightBorderDoubleInnerBox,n.topRightPaddingBox);case 1:return Ze(n.topRightBorderDoubleInnerBox,n.topRightPaddingBox,n.bottomRightBorderDoubleInnerBox,n.bottomRightPaddingBox);case 2:return Ze(n.bottomRightBorderDoubleInnerBox,n.bottomRightPaddingBox,n.bottomLeftBorderDoubleInnerBox,n.bottomLeftPaddingBox);case 3:default:return Ze(n.bottomLeftBorderDoubleInnerBox,n.bottomLeftPaddingBox,n.topLeftBorderDoubleInnerBox,n.topLeftPaddingBox)}},aC=function(n,A){switch(A){case 0:return Zr(n.topLeftBorderStroke,n.topRightBorderStroke);case 1:return Zr(n.topRightBorderStroke,n.bottomRightBorderStroke);case 2:return Zr(n.bottomRightBorderStroke,n.bottomLeftBorderStroke);case 3:default:return Zr(n.bottomLeftBorderStroke,n.topLeftBorderStroke)}},Zr=function(n,A){var e=[];return Ye(n)?e.push(n.subdivide(.5,!1)):e.push(n),Ye(A)?e.push(A.subdivide(.5,!0)):e.push(A),e},Ze=function(n,A,e,t){var i=[];return Ye(n)?i.push(n.subdivide(.5,!1)):i.push(n),Ye(e)?i.push(e.subdivide(.5,!0)):i.push(e),Ye(t)?i.push(t.subdivide(.5,!0).reverse()):i.push(t),Ye(A)?i.push(A.subdivide(.5,!1).reverse()):i.push(A),i},Mh=function(n){var A=n.bounds,e=n.styles;return A.add(e.borderLeftWidth,e.borderTopWidth,-(e.borderRightWidth+e.borderLeftWidth),-(e.borderTopWidth+e.borderBottomWidth))},ps=function(n){var A=n.styles,e=n.bounds,t=YA(A.paddingLeft,e.width),i=YA(A.paddingRight,e.width),r=YA(A.paddingTop,e.width),s=YA(A.paddingBottom,e.width);return e.add(t+A.borderLeftWidth,r+A.borderTopWidth,-(A.borderRightWidth+A.borderLeftWidth+t+i),-(A.borderTopWidth+A.borderBottomWidth+r+s))},oC=function(n,A){return n===0?A.bounds:n===2?ps(A):Mh(A)},lC=function(n,A){return n===0?A.bounds:n===2?ps(A):Mh(A)},Ia=function(n,A,e){var t=oC($n(n.styles.backgroundOrigin,A),n),i=lC($n(n.styles.backgroundClip,A),n),r=cC($n(n.styles.backgroundSize,A),e,t),s=r[0],a=r[1],o=Ii($n(n.styles.backgroundPosition,A),t.width-s,t.height-a),l=uC($n(n.styles.backgroundRepeat,A),o,r,t,i),c=Math.round(t.left+o[0]),u=Math.round(t.top+o[1]);return[l,c,u,s,a]},Jn=function(n){return kA(n)&&n.value===si.AUTO},qr=function(n){return typeof n=="number"},cC=function(n,A,e){var t=A[0],i=A[1],r=A[2],s=n[0],a=n[1];if(!s)return[0,0];if(oe(s)&&a&&oe(a))return[YA(s,e.width),YA(a,e.height)];var o=qr(r);if(kA(s)&&(s.value===si.CONTAIN||s.value===si.COVER)){if(qr(r)){var l=e.width/e.height;return l<r!=(s.value===si.COVER)?[e.width,e.width/r]:[e.height*r,e.height]}return[e.width,e.height]}var c=qr(t),u=qr(i),h=c||u;if(Jn(s)&&(!a||Jn(a))){if(c&&u)return[t,i];if(!o&&!h)return[e.width,e.height];if(h&&o){var d=c?t:i*r,g=u?i:t/r;return[d,g]}var m=c?t:e.width,p=u?i:e.height;return[m,p]}if(o){var f=0,_=0;return oe(s)?f=YA(s,e.width):oe(a)&&(_=YA(a,e.height)),Jn(s)?f=_*r:(!a||Jn(a))&&(_=f/r),[f,_]}var E=null,x=null;if(oe(s)?E=YA(s,e.width):a&&oe(a)&&(x=YA(a,e.height)),E!==null&&(!a||Jn(a))&&(x=c&&u?E/t*i:e.height),x!==null&&Jn(s)&&(E=c&&u?x/i*t:e.width),E!==null&&x!==null)return[E,x];throw new Error("Unable to calculate background-size for element")},$n=function(n,A){var e=n[A];return typeof e>"u"?n[0]:e},uC=function(n,A,e,t,i){var r=A[0],s=A[1],a=e[0],o=e[1];switch(n){case 2:return[new cA(Math.round(t.left),Math.round(t.top+s)),new cA(Math.round(t.left+t.width),Math.round(t.top+s)),new cA(Math.round(t.left+t.width),Math.round(o+t.top+s)),new cA(Math.round(t.left),Math.round(o+t.top+s))];case 3:return[new cA(Math.round(t.left+r),Math.round(t.top)),new cA(Math.round(t.left+r+a),Math.round(t.top)),new cA(Math.round(t.left+r+a),Math.round(t.height+t.top)),new cA(Math.round(t.left+r),Math.round(t.height+t.top))];case 1:return[new cA(Math.round(t.left+r),Math.round(t.top+s)),new cA(Math.round(t.left+r+a),Math.round(t.top+s)),new cA(Math.round(t.left+r+a),Math.round(t.top+s+o)),new cA(Math.round(t.left+r),Math.round(t.top+s+o))];default:return[new cA(Math.round(i.left),Math.round(i.top)),new cA(Math.round(i.left+i.width),Math.round(i.top)),new cA(Math.round(i.left+i.width),Math.round(i.height+i.top)),new cA(Math.round(i.left),Math.round(i.height+i.top))]}},hC="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",Zc="Hidden Text",fC=function(){function n(A){this._data={},this._document=A}return n.prototype.parseMetrics=function(A,e){var t=this._document.createElement("div"),i=this._document.createElement("img"),r=this._document.createElement("span"),s=this._document.body;t.style.visibility="hidden",t.style.fontFamily=A,t.style.fontSize=e,t.style.margin="0",t.style.padding="0",t.style.whiteSpace="nowrap",s.appendChild(t),i.src=hC,i.width=1,i.height=1,i.style.margin="0",i.style.padding="0",i.style.verticalAlign="baseline",r.style.fontFamily=A,r.style.fontSize=e,r.style.margin="0",r.style.padding="0",r.appendChild(this._document.createTextNode(Zc)),t.appendChild(r),t.appendChild(i);var a=i.offsetTop-r.offsetTop+2;t.removeChild(r),t.appendChild(this._document.createTextNode(Zc)),t.style.lineHeight="normal",i.style.verticalAlign="super";var o=i.offsetTop-t.offsetTop+2;return s.removeChild(t),{baseline:a,middle:o}},n.prototype.getMetrics=function(A,e){var t=A+" "+e;return typeof this._data[t]>"u"&&(this._data[t]=this.parseMetrics(A,e)),this._data[t]},n}(),yh=function(){function n(A,e){this.context=A,this.options=e}return n}(),dC=1e4,pC=function(n){lt(A,n);function A(e,t){var i=n.call(this,e,t)||this;return i._activeEffects=[],i.canvas=t.canvas?t.canvas:document.createElement("canvas"),i.ctx=i.canvas.getContext("2d"),t.canvas||(i.canvas.width=Math.floor(t.width*t.scale),i.canvas.height=Math.floor(t.height*t.scale),i.canvas.style.width=t.width+"px",i.canvas.style.height=t.height+"px"),i.fontMetrics=new fC(document),i.ctx.scale(i.options.scale,i.options.scale),i.ctx.translate(-t.x,-t.y),i.ctx.textBaseline="bottom",i._activeEffects=[],i.context.logger.debug("Canvas renderer initialized ("+t.width+"x"+t.height+") with scale "+t.scale),i}return A.prototype.applyEffects=function(e){for(var t=this;this._activeEffects.length;)this.popEffect();e.forEach(function(i){return t.applyEffect(i)})},A.prototype.applyEffect=function(e){this.ctx.save(),tC(e)&&(this.ctx.globalAlpha=e.opacity),eC(e)&&(this.ctx.translate(e.offsetX,e.offsetY),this.ctx.transform(e.matrix[0],e.matrix[1],e.matrix[2],e.matrix[3],e.matrix[4],e.matrix[5]),this.ctx.translate(-e.offsetX,-e.offsetY)),Eh(e)&&(this.path(e.path),this.ctx.clip()),this._activeEffects.push(e)},A.prototype.popEffect=function(){this._activeEffects.pop(),this.ctx.restore()},A.prototype.renderStack=function(e){return be(this,void 0,void 0,function(){var t;return Ue(this,function(i){switch(i.label){case 0:return t=e.element.container.styles,t.isVisible()?[4,this.renderStackContent(e)]:[3,2];case 1:i.sent(),i.label=2;case 2:return[2]}})})},A.prototype.renderNode=function(e){return be(this,void 0,void 0,function(){return Ue(this,function(t){switch(t.label){case 0:if(le(e.container.flags,16))debugger;return e.container.styles.isVisible()?[4,this.renderNodeBackgroundAndBorders(e)]:[3,3];case 1:return t.sent(),[4,this.renderNodeContent(e)];case 2:t.sent(),t.label=3;case 3:return[2]}})})},A.prototype.renderTextWithLetterSpacing=function(e,t,i){var r=this;if(t===0)this.ctx.fillText(e.text,e.bounds.left,e.bounds.top+i);else{var s=Uo(e.text);s.reduce(function(a,o){return r.ctx.fillText(o,a,e.bounds.top+i),a+r.ctx.measureText(o).width},e.bounds.left)}},A.prototype.createFontStyle=function(e){var t=e.fontVariant.filter(function(s){return s==="normal"||s==="small-caps"}).join(""),i=vC(e.fontFamily).join(", "),r=sr(e.fontSize)?""+e.fontSize.number+e.fontSize.unit:e.fontSize.number+"px";return[[e.fontStyle,t,e.fontWeight,r,i].join(" "),i,r]},A.prototype.renderTextNode=function(e,t){return be(this,void 0,void 0,function(){var i,r,s,a,o,l,c,u,h=this;return Ue(this,function(d){return i=this.createFontStyle(t),r=i[0],s=i[1],a=i[2],this.ctx.font=r,this.ctx.direction=t.direction===1?"rtl":"ltr",this.ctx.textAlign="left",this.ctx.textBaseline="alphabetic",o=this.fontMetrics.getMetrics(s,a),l=o.baseline,c=o.middle,u=t.paintOrder,e.textBounds.forEach(function(g){u.forEach(function(m){switch(m){case 0:h.ctx.fillStyle=de(t.color),h.renderTextWithLetterSpacing(g,t.letterSpacing,l);var p=t.textShadow;p.length&&g.text.trim().length&&(p.slice(0).reverse().forEach(function(f){h.ctx.shadowColor=de(f.color),h.ctx.shadowOffsetX=f.offsetX.number*h.options.scale,h.ctx.shadowOffsetY=f.offsetY.number*h.options.scale,h.ctx.shadowBlur=f.blur.number,h.renderTextWithLetterSpacing(g,t.letterSpacing,l)}),h.ctx.shadowColor="",h.ctx.shadowOffsetX=0,h.ctx.shadowOffsetY=0,h.ctx.shadowBlur=0),t.textDecorationLine.length&&(h.ctx.fillStyle=de(t.textDecorationColor||t.color),t.textDecorationLine.forEach(function(f){switch(f){case 1:h.ctx.fillRect(g.bounds.left,Math.round(g.bounds.top+l),g.bounds.width,1);break;case 2:h.ctx.fillRect(g.bounds.left,Math.round(g.bounds.top),g.bounds.width,1);break;case 3:h.ctx.fillRect(g.bounds.left,Math.ceil(g.bounds.top+c),g.bounds.width,1);break}}));break;case 1:t.webkitTextStrokeWidth&&g.text.trim().length&&(h.ctx.strokeStyle=de(t.webkitTextStrokeColor),h.ctx.lineWidth=t.webkitTextStrokeWidth,h.ctx.lineJoin=window.chrome?"miter":"round",h.ctx.strokeText(g.text,g.bounds.left,g.bounds.top+l)),h.ctx.strokeStyle="",h.ctx.lineWidth=0,h.ctx.lineJoin="miter";break}})}),[2]})})},A.prototype.renderReplacedElement=function(e,t,i){if(i&&e.intrinsicWidth>0&&e.intrinsicHeight>0){var r=ps(e),s=ds(t);this.path(s),this.ctx.save(),this.ctx.clip(),this.ctx.drawImage(i,0,0,e.intrinsicWidth,e.intrinsicHeight,r.left,r.top,r.width,r.height),this.ctx.restore()}},A.prototype.renderNodeContent=function(e){return be(this,void 0,void 0,function(){var t,i,r,s,a,o,_,_,l,c,u,h,x,d,g,w,m,p,f,_,E,x,w;return Ue(this,function(U){switch(U.label){case 0:this.applyEffects(e.getEffects(4)),t=e.container,i=e.curves,r=t.styles,s=0,a=t.textNodes,U.label=1;case 1:return s<a.length?(o=a[s],[4,this.renderTextNode(o,r)]):[3,4];case 2:U.sent(),U.label=3;case 3:return s++,[3,1];case 4:if(!(t instanceof sh))return[3,8];U.label=5;case 5:return U.trys.push([5,7,,8]),[4,this.context.cache.match(t.src)];case 6:return _=U.sent(),this.renderReplacedElement(t,i,_),[3,8];case 7:return U.sent(),this.context.logger.error("Error loading image "+t.src),[3,8];case 8:if(t instanceof ah&&this.renderReplacedElement(t,i,t.canvas),!(t instanceof oh))return[3,12];U.label=9;case 9:return U.trys.push([9,11,,12]),[4,this.context.cache.match(t.svg)];case 10:return _=U.sent(),this.renderReplacedElement(t,i,_),[3,12];case 11:return U.sent(),this.context.logger.error("Error loading svg "+t.svg.substring(0,255)),[3,12];case 12:return t instanceof hh&&t.tree?(l=new A(this.context,{scale:this.options.scale,backgroundColor:t.backgroundColor,x:0,y:0,width:t.width,height:t.height}),[4,l.render(t.tree)]):[3,14];case 13:c=U.sent(),t.width&&t.height&&this.ctx.drawImage(c,0,0,t.width,t.height,t.bounds.left,t.bounds.top,t.bounds.width,t.bounds.height),U.label=14;case 14:if(t instanceof Fo&&(u=Math.min(t.bounds.width,t.bounds.height),t.type===ls?t.checked&&(this.ctx.save(),this.path([new cA(t.bounds.left+u*.39363,t.bounds.top+u*.79),new cA(t.bounds.left+u*.16,t.bounds.top+u*.5549),new cA(t.bounds.left+u*.27347,t.bounds.top+u*.44071),new cA(t.bounds.left+u*.39694,t.bounds.top+u*.5649),new cA(t.bounds.left+u*.72983,t.bounds.top+u*.23),new cA(t.bounds.left+u*.84,t.bounds.top+u*.34085),new cA(t.bounds.left+u*.39363,t.bounds.top+u*.79)]),this.ctx.fillStyle=de(Dc),this.ctx.fill(),this.ctx.restore()):t.type===cs&&t.checked&&(this.ctx.save(),this.ctx.beginPath(),this.ctx.arc(t.bounds.left+u/2,t.bounds.top+u/2,u/4,0,Math.PI*2,!0),this.ctx.fillStyle=de(Dc),this.ctx.fill(),this.ctx.restore())),gC(t)&&t.value.length){switch(h=this.createFontStyle(r),x=h[0],d=h[1],g=this.fontMetrics.getMetrics(x,d).baseline,this.ctx.font=x,this.ctx.fillStyle=de(r.color),this.ctx.textBaseline="alphabetic",this.ctx.textAlign=BC(t.styles.textAlign),w=ps(t),m=0,t.styles.textAlign){case 1:m+=w.width/2;break;case 2:m+=w.width;break}p=w.add(m,0,0,-w.height/2+1),this.ctx.save(),this.path([new cA(w.left,w.top),new cA(w.left+w.width,w.top),new cA(w.left+w.width,w.top+w.height),new cA(w.left,w.top+w.height)]),this.ctx.clip(),this.renderTextWithLetterSpacing(new Ni(t.value,p),r.letterSpacing,g),this.ctx.restore(),this.ctx.textBaseline="alphabetic",this.ctx.textAlign="left"}if(!le(t.styles.display,2048))return[3,20];if(t.styles.listStyleImage===null)return[3,19];if(f=t.styles.listStyleImage,f.type!==0)return[3,18];_=void 0,E=f.url,U.label=15;case 15:return U.trys.push([15,17,,18]),[4,this.context.cache.match(E)];case 16:return _=U.sent(),this.ctx.drawImage(_,t.bounds.left-(_.width+10),t.bounds.top),[3,18];case 17:return U.sent(),this.context.logger.error("Error loading list-style-image "+E),[3,18];case 18:return[3,20];case 19:e.listValue&&t.styles.listStyleType!==-1&&(x=this.createFontStyle(r)[0],this.ctx.font=x,this.ctx.fillStyle=de(r.color),this.ctx.textBaseline="middle",this.ctx.textAlign="right",w=new Qt(t.bounds.left,t.bounds.top+YA(t.styles.paddingTop,t.bounds.width),t.bounds.width,vc(r.lineHeight,r.fontSize.number)/2+1),this.renderTextWithLetterSpacing(new Ni(e.listValue,w),r.letterSpacing,vc(r.lineHeight,r.fontSize.number)/2+2),this.ctx.textBaseline="bottom",this.ctx.textAlign="left"),U.label=20;case 20:return[2]}})})},A.prototype.renderStackContent=function(e){return be(this,void 0,void 0,function(){var t,i,f,r,s,f,a,o,f,l,c,f,u,h,f,d,g,f,m,p,f;return Ue(this,function(_){switch(_.label){case 0:if(le(e.element.container.flags,16))debugger;return[4,this.renderNodeBackgroundAndBorders(e.element)];case 1:_.sent(),t=0,i=e.negativeZIndex,_.label=2;case 2:return t<i.length?(f=i[t],[4,this.renderStack(f)]):[3,5];case 3:_.sent(),_.label=4;case 4:return t++,[3,2];case 5:return[4,this.renderNodeContent(e.element)];case 6:_.sent(),r=0,s=e.nonInlineLevel,_.label=7;case 7:return r<s.length?(f=s[r],[4,this.renderNode(f)]):[3,10];case 8:_.sent(),_.label=9;case 9:return r++,[3,7];case 10:a=0,o=e.nonPositionedFloats,_.label=11;case 11:return a<o.length?(f=o[a],[4,this.renderStack(f)]):[3,14];case 12:_.sent(),_.label=13;case 13:return a++,[3,11];case 14:l=0,c=e.nonPositionedInlineLevel,_.label=15;case 15:return l<c.length?(f=c[l],[4,this.renderStack(f)]):[3,18];case 16:_.sent(),_.label=17;case 17:return l++,[3,15];case 18:u=0,h=e.inlineLevel,_.label=19;case 19:return u<h.length?(f=h[u],[4,this.renderNode(f)]):[3,22];case 20:_.sent(),_.label=21;case 21:return u++,[3,19];case 22:d=0,g=e.zeroOrAutoZIndexOrTransformedOrOpacity,_.label=23;case 23:return d<g.length?(f=g[d],[4,this.renderStack(f)]):[3,26];case 24:_.sent(),_.label=25;case 25:return d++,[3,23];case 26:m=0,p=e.positiveZIndex,_.label=27;case 27:return m<p.length?(f=p[m],[4,this.renderStack(f)]):[3,30];case 28:_.sent(),_.label=29;case 29:return m++,[3,27];case 30:return[2]}})})},A.prototype.mask=function(e){this.ctx.beginPath(),this.ctx.moveTo(0,0),this.ctx.lineTo(this.canvas.width,0),this.ctx.lineTo(this.canvas.width,this.canvas.height),this.ctx.lineTo(0,this.canvas.height),this.ctx.lineTo(0,0),this.formatPath(e.slice(0).reverse()),this.ctx.closePath()},A.prototype.path=function(e){this.ctx.beginPath(),this.formatPath(e),this.ctx.closePath()},A.prototype.formatPath=function(e){var t=this;e.forEach(function(i,r){var s=Ye(i)?i.start:i;r===0?t.ctx.moveTo(s.x,s.y):t.ctx.lineTo(s.x,s.y),Ye(i)&&t.ctx.bezierCurveTo(i.startControl.x,i.startControl.y,i.endControl.x,i.endControl.y,i.end.x,i.end.y)})},A.prototype.renderRepeat=function(e,t,i,r){this.path(e),this.ctx.fillStyle=t,this.ctx.translate(i,r),this.ctx.fill(),this.ctx.translate(-i,-r)},A.prototype.resizeImage=function(e,t,i){var r;if(e.width===t&&e.height===i)return e;var s=(r=this.canvas.ownerDocument)!==null&&r!==void 0?r:document,a=s.createElement("canvas");a.width=Math.max(1,t),a.height=Math.max(1,i);var o=a.getContext("2d");return o.drawImage(e,0,0,e.width,e.height,0,0,t,i),a},A.prototype.renderBackgroundImage=function(e){return be(this,void 0,void 0,function(){var t,i,r,s,a,o;return Ue(this,function(l){switch(l.label){case 0:t=e.styles.backgroundImage.length-1,i=function(c){var u,h,d,M,q,K,Q,D,R,g,M,q,K,Q,D,m,p,f,_,E,x,w,U,S,R,B,M,X,V,Q,D,N,q,K,W,$,j,pA,nA,O,J,iA;return Ue(this,function(rA){switch(rA.label){case 0:if(c.type!==0)return[3,5];u=void 0,h=c.url,rA.label=1;case 1:return rA.trys.push([1,3,,4]),[4,r.context.cache.match(h)];case 2:return u=rA.sent(),[3,4];case 3:return rA.sent(),r.context.logger.error("Error loading background-image "+h),[3,4];case 4:return u&&(d=Ia(e,t,[u.width,u.height,u.width/u.height]),M=d[0],q=d[1],K=d[2],Q=d[3],D=d[4],R=r.ctx.createPattern(r.resizeImage(u,Q,D),"repeat"),r.renderRepeat(M,R,q,K)),[3,6];case 5:ew(c)?(g=Ia(e,t,[null,null,null]),M=g[0],q=g[1],K=g[2],Q=g[3],D=g[4],m=Z1(c.angle,Q,D),p=m[0],f=m[1],_=m[2],E=m[3],x=m[4],w=document.createElement("canvas"),w.width=Q,w.height=D,U=w.getContext("2d"),S=U.createLinearGradient(f,E,_,x),Bc(c.stops,p).forEach(function(b){return S.addColorStop(b.stop,de(b.color))}),U.fillStyle=S,U.fillRect(0,0,Q,D),Q>0&&D>0&&(R=r.ctx.createPattern(w,"repeat"),r.renderRepeat(M,R,q,K))):tw(c)&&(B=Ia(e,t,[null,null,null]),M=B[0],X=B[1],V=B[2],Q=B[3],D=B[4],N=c.position.length===0?[Co]:c.position,q=YA(N[0],Q),K=YA(N[N.length-1],D),W=q1(c,q,K,Q,D),$=W[0],j=W[1],$>0&&j>0&&(pA=r.ctx.createRadialGradient(X+q,V+K,0,X+q,V+K,$),Bc(c.stops,$*2).forEach(function(b){return pA.addColorStop(b.stop,de(b.color))}),r.path(M),r.ctx.fillStyle=pA,$!==j?(nA=e.bounds.left+.5*e.bounds.width,O=e.bounds.top+.5*e.bounds.height,J=j/$,iA=1/J,r.ctx.save(),r.ctx.translate(nA,O),r.ctx.transform(1,0,0,J,0,0),r.ctx.translate(-nA,-O),r.ctx.fillRect(X,iA*(V-O)+O,Q,D*iA),r.ctx.restore()):r.ctx.fill())),rA.label=6;case 6:return t--,[2]}})},r=this,s=0,a=e.styles.backgroundImage.slice(0).reverse(),l.label=1;case 1:return s<a.length?(o=a[s],[5,i(o)]):[3,4];case 2:l.sent(),l.label=3;case 3:return s++,[3,1];case 4:return[2]}})})},A.prototype.renderSolidBorder=function(e,t,i){return be(this,void 0,void 0,function(){return Ue(this,function(r){return this.path(Jc(i,t)),this.ctx.fillStyle=de(e),this.ctx.fill(),[2]})})},A.prototype.renderDoubleBorder=function(e,t,i,r){return be(this,void 0,void 0,function(){var s,a;return Ue(this,function(o){switch(o.label){case 0:return t<3?[4,this.renderSolidBorder(e,i,r)]:[3,2];case 1:return o.sent(),[2];case 2:return s=rC(r,i),this.path(s),this.ctx.fillStyle=de(e),this.ctx.fill(),a=sC(r,i),this.path(a),this.ctx.fill(),[2]}})})},A.prototype.renderNodeBackgroundAndBorders=function(e){return be(this,void 0,void 0,function(){var t,i,r,s,a,o,l,c,u=this;return Ue(this,function(h){switch(h.label){case 0:return this.applyEffects(e.getEffects(2)),t=e.container.styles,i=!Xt(t.backgroundColor)||t.backgroundImage.length,r=[{style:t.borderTopStyle,color:t.borderTopColor,width:t.borderTopWidth},{style:t.borderRightStyle,color:t.borderRightColor,width:t.borderRightWidth},{style:t.borderBottomStyle,color:t.borderBottomColor,width:t.borderBottomWidth},{style:t.borderLeftStyle,color:t.borderLeftColor,width:t.borderLeftWidth}],s=mC($n(t.backgroundClip,0),e.curves),i||t.boxShadow.length?(this.ctx.save(),this.path(s),this.ctx.clip(),Xt(t.backgroundColor)||(this.ctx.fillStyle=de(t.backgroundColor),this.ctx.fill()),[4,this.renderBackgroundImage(e.container)]):[3,2];case 1:h.sent(),this.ctx.restore(),t.boxShadow.slice(0).reverse().forEach(function(d){u.ctx.save();var g=fs(e.curves),m=d.inset?0:dC,p=nC(g,-m+(d.inset?1:-1)*d.spread.number,(d.inset?1:-1)*d.spread.number,d.spread.number*(d.inset?-2:2),d.spread.number*(d.inset?-2:2));d.inset?(u.path(g),u.ctx.clip(),u.mask(p)):(u.mask(g),u.ctx.clip(),u.path(p)),u.ctx.shadowOffsetX=d.offsetX.number+m,u.ctx.shadowOffsetY=d.offsetY.number,u.ctx.shadowColor=de(d.color),u.ctx.shadowBlur=d.blur.number,u.ctx.fillStyle=d.inset?de(d.color):"rgba(0,0,0,1)",u.ctx.fill(),u.ctx.restore()}),h.label=2;case 2:a=0,o=0,l=r,h.label=3;case 3:return o<l.length?(c=l[o],c.style!==0&&!Xt(c.color)&&c.width>0?c.style!==2?[3,5]:[4,this.renderDashedDottedBorder(c.color,c.width,a,e.curves,2)]:[3,11]):[3,13];case 4:return h.sent(),[3,11];case 5:return c.style!==3?[3,7]:[4,this.renderDashedDottedBorder(c.color,c.width,a,e.curves,3)];case 6:return h.sent(),[3,11];case 7:return c.style!==4?[3,9]:[4,this.renderDoubleBorder(c.color,c.width,a,e.curves)];case 8:return h.sent(),[3,11];case 9:return[4,this.renderSolidBorder(c.color,a,e.curves)];case 10:h.sent(),h.label=11;case 11:a++,h.label=12;case 12:return o++,[3,3];case 13:return[2]}})})},A.prototype.renderDashedDottedBorder=function(e,t,i,r,s){return be(this,void 0,void 0,function(){var a,o,l,c,u,h,d,g,m,p,f,_,E,x,w,U,w,U;return Ue(this,function(S){return this.ctx.save(),a=aC(r,i),o=Jc(r,i),s===2&&(this.path(o),this.ctx.clip()),Ye(o[0])?(l=o[0].start.x,c=o[0].start.y):(l=o[0].x,c=o[0].y),Ye(o[1])?(u=o[1].end.x,h=o[1].end.y):(u=o[1].x,h=o[1].y),i===0||i===2?d=Math.abs(l-u):d=Math.abs(c-h),this.ctx.beginPath(),s===3?this.formatPath(a):this.formatPath(o.slice(0,2)),g=t<3?t*3:t*2,m=t<3?t*2:t,s===3&&(g=t,m=t),p=!0,d<=g*2?p=!1:d<=g*2+m?(f=d/(2*g+m),g*=f,m*=f):(_=Math.floor((d+m)/(g+m)),E=(d-_*g)/(_-1),x=(d-(_+1)*g)/_,m=x<=0||Math.abs(m-E)<Math.abs(m-x)?E:x),p&&(s===3?this.ctx.setLineDash([0,g+m]):this.ctx.setLineDash([g,m])),s===3?(this.ctx.lineCap="round",this.ctx.lineWidth=t):this.ctx.lineWidth=t*2+1.1,this.ctx.strokeStyle=de(e),this.ctx.stroke(),this.ctx.setLineDash([]),s===2&&(Ye(o[0])&&(w=o[3],U=o[0],this.ctx.beginPath(),this.formatPath([new cA(w.end.x,w.end.y),new cA(U.start.x,U.start.y)]),this.ctx.stroke()),Ye(o[1])&&(w=o[1],U=o[2],this.ctx.beginPath(),this.formatPath([new cA(w.end.x,w.end.y),new cA(U.start.x,U.start.y)]),this.ctx.stroke())),this.ctx.restore(),[2]})})},A.prototype.render=function(e){return be(this,void 0,void 0,function(){var t;return Ue(this,function(i){switch(i.label){case 0:return this.options.backgroundColor&&(this.ctx.fillStyle=de(this.options.backgroundColor),this.ctx.fillRect(this.options.x,this.options.y,this.options.width,this.options.height)),t=iC(e),[4,this.renderStack(t)];case 1:return i.sent(),this.applyEffects([]),[2,this.canvas]}})})},A}(yh),gC=function(n){return n instanceof uh||n instanceof ch?!0:n instanceof Fo&&n.type!==cs&&n.type!==ls},mC=function(n,A){switch(n){case 0:return fs(A);case 2:return j_(A);case 1:default:return ds(A)}},BC=function(n){switch(n){case 1:return"center";case 2:return"right";case 0:default:return"left"}},wC=["-apple-system","system-ui"],vC=function(n){return/iPhone OS 15_(0|1)/.test(window.navigator.userAgent)?n.filter(function(A){return wC.indexOf(A)===-1}):n},_C=function(n){lt(A,n);function A(e,t){var i=n.call(this,e,t)||this;return i.canvas=t.canvas?t.canvas:document.createElement("canvas"),i.ctx=i.canvas.getContext("2d"),i.options=t,i.canvas.width=Math.floor(t.width*t.scale),i.canvas.height=Math.floor(t.height*t.scale),i.canvas.style.width=t.width+"px",i.canvas.style.height=t.height+"px",i.ctx.scale(i.options.scale,i.options.scale),i.ctx.translate(-t.x,-t.y),i.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized ("+t.width+"x"+t.height+" at "+t.x+","+t.y+") with scale "+t.scale),i}return A.prototype.render=function(e){return be(this,void 0,void 0,function(){var t,i;return Ue(this,function(r){switch(r.label){case 0:return t=so(this.options.width*this.options.scale,this.options.height*this.options.scale,this.options.scale,this.options.scale,e),[4,CC(t)];case 1:return i=r.sent(),this.options.backgroundColor&&(this.ctx.fillStyle=de(this.options.backgroundColor),this.ctx.fillRect(0,0,this.options.width*this.options.scale,this.options.height*this.options.scale)),this.ctx.drawImage(i,-this.options.x*this.options.scale,-this.options.y*this.options.scale),[2,this.canvas]}})})},A}(yh),CC=function(n){return new Promise(function(A,e){var t=new Image;t.onload=function(){A(t)},t.onerror=e,t.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(n))})},EC=function(){function n(A){var e=A.id,t=A.enabled;this.id=e,this.enabled=t,this.start=Date.now()}return n.prototype.debug=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];this.enabled&&(typeof window<"u"&&window.console&&typeof console.debug=="function"?console.debug.apply(console,Sr([this.id,this.getTime()+"ms"],A)):this.info.apply(this,A))},n.prototype.getTime=function(){return Date.now()-this.start},n.prototype.info=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];this.enabled&&typeof window<"u"&&window.console&&typeof console.info=="function"&&console.info.apply(console,Sr([this.id,this.getTime()+"ms"],A))},n.prototype.warn=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];this.enabled&&(typeof window<"u"&&window.console&&typeof console.warn=="function"?console.warn.apply(console,Sr([this.id,this.getTime()+"ms"],A)):this.info.apply(this,A))},n.prototype.error=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];this.enabled&&(typeof window<"u"&&window.console&&typeof console.error=="function"?console.error.apply(console,Sr([this.id,this.getTime()+"ms"],A)):this.info.apply(this,A))},n.instances={},n}(),xC=function(){function n(A,e){var t;this.windowBounds=e,this.instanceName="#"+n.instanceCount++,this.logger=new EC({id:this.instanceName,enabled:A.logging}),this.cache=(t=A.cache)!==null&&t!==void 0?t:new k_(this,A)}return n.instanceCount=1,n}(),Sh=function(n,A){return A===void 0&&(A={}),UC(n,A)};typeof window<"u"&&Ch.setContext(window);var UC=function(n,A){return be(void 0,void 0,void 0,function(){var e,t,i,r,s,a,o,l,c,u,h,d,g,m,p,f,_,E,x,w,S,U,S,R,B,M,X,V,Q,D,N,q,K,W,$,j,pA,nA,O,J;return Ue(this,function(iA){switch(iA.label){case 0:if(!n||typeof n!="object")return[2,Promise.reject("Invalid element provided as first argument")];if(e=n.ownerDocument,!e)throw new Error("Element is not attached to a Document");if(t=e.defaultView,!t)throw new Error("Document is not attached to a Window");return i={allowTaint:(R=A.allowTaint)!==null&&R!==void 0?R:!1,imageTimeout:(B=A.imageTimeout)!==null&&B!==void 0?B:15e3,proxy:A.proxy,useCORS:(M=A.useCORS)!==null&&M!==void 0?M:!1},r=za({logging:(X=A.logging)!==null&&X!==void 0?X:!0,cache:A.cache},i),s={windowWidth:(V=A.windowWidth)!==null&&V!==void 0?V:t.innerWidth,windowHeight:(Q=A.windowHeight)!==null&&Q!==void 0?Q:t.innerHeight,scrollX:(D=A.scrollX)!==null&&D!==void 0?D:t.pageXOffset,scrollY:(N=A.scrollY)!==null&&N!==void 0?N:t.pageYOffset},a=new Qt(s.scrollX,s.scrollY,s.windowWidth,s.windowHeight),o=new xC(r,a),l=(q=A.foreignObjectRendering)!==null&&q!==void 0?q:!1,c={allowTaint:(K=A.allowTaint)!==null&&K!==void 0?K:!1,onclone:A.onclone,ignoreElements:A.ignoreElements,inlineImages:l,copyStyles:l},o.logger.debug("Starting document clone with size "+a.width+"x"+a.height+" scrolled to "+-a.left+","+-a.top),u=new Wc(o,n,c),h=u.clonedReferenceElement,h?[4,u.toIFrame(e,a)]:[2,Promise.reject("Unable to find element in cloned iframe")];case 1:return d=iA.sent(),g=Mo(h)||M_(h)?nB(h.ownerDocument):_s(o,h),m=g.width,p=g.height,f=g.left,_=g.top,E=FC(o,h,A.backgroundColor),x={canvas:A.canvas,backgroundColor:E,scale:($=(W=A.scale)!==null&&W!==void 0?W:t.devicePixelRatio)!==null&&$!==void 0?$:1,x:((j=A.x)!==null&&j!==void 0?j:0)+f,y:((pA=A.y)!==null&&pA!==void 0?pA:0)+_,width:(nA=A.width)!==null&&nA!==void 0?nA:Math.ceil(m),height:(O=A.height)!==null&&O!==void 0?O:Math.ceil(p)},l?(o.logger.debug("Document cloned, using foreign object rendering"),S=new _C(o,x),[4,S.render(h)]):[3,3];case 2:return w=iA.sent(),[3,5];case 3:return o.logger.debug("Document cloned, element located at "+f+","+_+" with size "+m+"x"+p+" using computed rendering"),o.logger.debug("Starting DOM parsing"),U=dh(o,h),E===U.styles.backgroundColor&&(U.styles.backgroundColor=Tt.TRANSPARENT),o.logger.debug("Starting renderer for element at "+x.x+","+x.y+" with size "+x.width+"x"+x.height),S=new pC(o,x),[4,S.render(U)];case 4:w=iA.sent(),iA.label=5;case 5:return(!((J=A.removeContainer)!==null&&J!==void 0)||J)&&(Wc.destroy(d)||o.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")),o.logger.debug("Finished rendering"),[2,w]}})})},FC=function(n,A,e){var t=A.ownerDocument,i=t.documentElement?Pi(n,getComputedStyle(t.documentElement).backgroundColor):Tt.TRANSPARENT,r=t.body?Pi(n,getComputedStyle(t.body).backgroundColor):Tt.TRANSPARENT,s=typeof e=="string"?Pi(n,e):e===null?Tt.TRANSPARENT:4294967295;return A===t.documentElement?Xt(i)?Xt(r)?s:r:i:s},Vi=(n=>(n.GLOBAL="Global",n.NORTHERN_HEMISSPHERE="Northern HS",n.SOUTHERN_HEMISSPHERE="Southern HS",n))(Vi||{}),Le=(n=>(n.CREATE_HELIX="create-helix",n.CHANGE_THEME="change-theme",n.HIDE_IMPRINT="hide-imprint",n.SHOW_IMPRINT="show-imprint",n))(Le||{});const MC=async()=>await tB(()=>import("./imprint-gen-e4b56295.js"),[]),yC='<hr><p style="opacity: 1.0;">Dieses Impressum wurde erstellt durch <a href="https://www.impressum-generator.de" rel="nofollow">impressum-generator.de</a>.</p>',SC=`<hr><div class="center" width=100%>
<button id="hide-imprint" onclick="document.body.dispatchEvent(new Event('${Le.HIDE_IMPRINT.toString()}', { bubbles: true }))">Close</button></div>`;var ai,ft;class bC{constructor(){Qe(this,ai,void 0);Qe(this,ft,void 0);window.addEventListener("resize",()=>{JA(this,ft)!==void 0&&(this.hide(),this.show())}),document.body.addEventListener(Le.SHOW_IMPRINT.toString(),A=>{this.show()}),document.body.addEventListener(Le.HIDE_IMPRINT.toString(),A=>{this.hide()}),document.body.addEventListener("keydown",A=>{(A.key==="Esc"||A.key==="Escape")&&this.hide()})}async isAvailable(){const A=await MC();return Ce(this,ai,A.decryptedAES),JA(this,ai).call(this)!==void 0}show(){if(JA(this,ft)===void 0){Ce(this,ft,document.createElement("div"));const A=JA(this,ft);A.classList.add("imprint"),A.innerHTML=JA(this,ai).call(this),document.body.appendChild(A);const e=window.getComputedStyle(document.body),t=A.scrollWidth-20,i=A.scrollHeight,r=e.getPropertyValue("background-color");Sh(A,{backgroundColor:r,windowWidth:t,windowHeight:i}).then(s=>{s.classList.add("padding"),A.innerHTML="",A.appendChild(s);const a=document.createElement("p");a.classList.add("padding"),a.innerHTML=yC+SC,A.appendChild(a)})}}hide(){JA(this,ft)!==void 0&&(document.body.removeChild(JA(this,ft)),Ce(this,ft,void 0))}}ai=new WeakMap,ft=new WeakMap;const TC=`Land-Ocean: Global Means
Year,Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec,J-D,D-N,DJF,MAM,JJA,SON
1880,-.18,-.24,-.09,-.16,-.10,-.21,-.18,-.10,-.15,-.23,-.22,-.17,-.17,***,***,-.12,-.17,-.20
1881,-.20,-.14,.03,.05,.06,-.19,.00,-.04,-.15,-.22,-.19,-.07,-.09,-.10,-.17,.05,-.07,-.19
1882,.16,.14,.04,-.16,-.14,-.22,-.16,-.08,-.15,-.23,-.17,-.36,-.11,-.09,.07,-.09,-.16,-.18
1883,-.29,-.37,-.12,-.19,-.18,-.07,-.07,-.14,-.22,-.11,-.24,-.11,-.18,-.20,-.34,-.16,-.09,-.19
1884,-.13,-.09,-.36,-.40,-.34,-.35,-.31,-.28,-.27,-.25,-.33,-.31,-.28,-.27,-.11,-.37,-.31,-.29
1885,-.59,-.34,-.26,-.42,-.45,-.44,-.34,-.31,-.29,-.23,-.24,-.10,-.33,-.35,-.41,-.38,-.36,-.25
1886,-.44,-.51,-.43,-.28,-.25,-.35,-.18,-.31,-.24,-.28,-.27,-.26,-.32,-.30,-.35,-.32,-.28,-.26
1887,-.72,-.57,-.36,-.35,-.31,-.25,-.26,-.36,-.26,-.36,-.27,-.33,-.37,-.36,-.52,-.34,-.29,-.29
1888,-.34,-.36,-.41,-.21,-.22,-.17,-.11,-.16,-.12,.01,.02,-.04,-.18,-.20,-.34,-.28,-.15,-.03
1889,-.09,.16,.06,.09,-.01,-.10,-.08,-.20,-.24,-.26,-.34,-.29,-.11,-.09,.01,.05,-.13,-.28
1890,-.42,-.45,-.40,-.30,-.40,-.25,-.28,-.39,-.37,-.25,-.43,-.31,-.35,-.35,-.39,-.37,-.31,-.35
1891,-.34,-.47,-.18,-.27,-.16,-.21,-.18,-.17,-.16,-.22,-.31,-.04,-.23,-.25,-.37,-.21,-.19,-.23
1892,-.29,-.11,-.40,-.33,-.23,-.22,-.31,-.27,-.17,-.14,-.42,-.38,-.27,-.25,-.15,-.32,-.27,-.24
1893,-.81,-.57,-.22,-.27,-.34,-.26,-.13,-.25,-.22,-.18,-.18,-.31,-.31,-.32,-.59,-.28,-.21,-.19
1894,-.52,-.29,-.23,-.44,-.30,-.40,-.24,-.23,-.27,-.22,-.25,-.20,-.30,-.31,-.37,-.32,-.29,-.25
1895,-.40,-.42,-.32,-.22,-.27,-.21,-.17,-.17,-.12,-.11,-.17,-.14,-.23,-.23,-.34,-.27,-.18,-.13
1896,-.22,-.13,-.26,-.30,-.16,-.11,-.02,-.05,-.07,.06,-.04,-.04,-.11,-.12,-.16,-.24,-.06,-.02
1897,-.15,-.17,-.13,-.03,-.02,-.12,-.03,-.09,-.09,-.13,-.18,-.21,-.11,-.10,-.12,-.06,-.08,-.13
1898,-.03,-.30,-.51,-.31,-.30,-.20,-.23,-.27,-.22,-.34,-.39,-.23,-.28,-.27,-.18,-.37,-.23,-.32
1899,-.16,-.39,-.36,-.21,-.23,-.31,-.16,-.09,-.05,-.04,.12,-.26,-.18,-.18,-.26,-.26,-.19,.01
1900,-.36,-.05,.00,-.09,-.09,-.09,-.13,-.09,-.05,.10,-.06,-.07,-.08,-.10,-.22,-.06,-.10,-.01
1901,-.21,-.11,.06,-.02,-.15,-.12,-.14,-.20,-.22,-.29,-.18,-.27,-.15,-.14,-.13,-.04,-.15,-.23
1902,-.18,-.06,-.28,-.28,-.32,-.30,-.28,-.30,-.29,-.29,-.35,-.42,-.28,-.27,-.17,-.29,-.29,-.31
1903,-.24,-.06,-.22,-.41,-.40,-.42,-.35,-.45,-.50,-.48,-.43,-.51,-.37,-.36,-.24,-.34,-.41,-.47
1904,-.64,-.58,-.48,-.50,-.52,-.48,-.51,-.49,-.56,-.39,-.17,-.33,-.47,-.49,-.57,-.50,-.49,-.37
1905,-.35,-.59,-.21,-.33,-.29,-.28,-.26,-.20,-.19,-.25,-.07,-.13,-.26,-.28,-.42,-.28,-.25,-.17
1906,-.28,-.29,-.18,-.05,-.25,-.19,-.23,-.20,-.28,-.20,-.38,-.15,-.22,-.22,-.24,-.16,-.21,-.29
1907,-.43,-.51,-.27,-.37,-.46,-.42,-.35,-.34,-.34,-.23,-.46,-.46,-.39,-.36,-.36,-.37,-.37,-.34
1908,-.45,-.32,-.55,-.44,-.38,-.38,-.35,-.46,-.36,-.44,-.52,-.49,-.43,-.43,-.41,-.46,-.40,-.44
1909,-.73,-.46,-.54,-.59,-.54,-.52,-.45,-.33,-.39,-.39,-.32,-.56,-.49,-.48,-.56,-.56,-.43,-.37
1910,-.42,-.40,-.50,-.43,-.33,-.38,-.34,-.37,-.39,-.41,-.55,-.67,-.43,-.42,-.46,-.42,-.36,-.45
1911,-.62,-.57,-.61,-.53,-.51,-.50,-.41,-.44,-.41,-.26,-.21,-.21,-.44,-.48,-.62,-.55,-.45,-.29
1912,-.25,-.14,-.37,-.17,-.21,-.24,-.42,-.54,-.58,-.57,-.38,-.43,-.36,-.34,-.20,-.25,-.40,-.51
1913,-.40,-.45,-.42,-.39,-.43,-.45,-.36,-.33,-.35,-.32,-.19,-.02,-.34,-.38,-.42,-.42,-.38,-.29
1914,.05,-.09,-.23,-.29,-.21,-.25,-.23,-.16,-.17,-.03,-.15,-.03,-.15,-.15,-.02,-.24,-.21,-.12
1915,-.20,-.04,-.09,.06,-.06,-.22,-.12,-.22,-.21,-.24,-.13,-.22,-.14,-.12,-.09,-.03,-.19,-.19
1916,-.12,-.14,-.28,-.30,-.34,-.49,-.37,-.28,-.36,-.33,-.46,-.82,-.36,-.31,-.16,-.31,-.38,-.38
1917,-.57,-.63,-.63,-.55,-.55,-.43,-.25,-.22,-.23,-.44,-.33,-.67,-.46,-.47,-.67,-.58,-.30,-.33
1918,-.47,-.34,-.24,-.44,-.42,-.36,-.31,-.31,-.17,-.06,-.11,-.29,-.29,-.33,-.49,-.37,-.33,-.11
1919,-.20,-.24,-.21,-.12,-.28,-.36,-.29,-.33,-.25,-.20,-.41,-.42,-.27,-.26,-.24,-.20,-.32,-.29
1920,-.24,-.26,-.12,-.24,-.26,-.35,-.30,-.26,-.21,-.26,-.26,-.46,-.27,-.26,-.30,-.21,-.30,-.25
1921,-.04,-.17,-.22,-.30,-.29,-.27,-.14,-.26,-.19,-.03,-.13,-.17,-.18,-.21,-.22,-.27,-.22,-.12
1922,-.32,-.43,-.14,-.22,-.33,-.30,-.27,-.32,-.35,-.32,-.14,-.18,-.28,-.28,-.31,-.23,-.30,-.27
1923,-.27,-.38,-.33,-.40,-.33,-.29,-.30,-.32,-.31,-.13,-.02,-.04,-.26,-.27,-.28,-.35,-.30,-.15
1924,-.23,-.23,-.08,-.31,-.18,-.25,-.28,-.35,-.32,-.35,-.21,-.42,-.27,-.24,-.17,-.19,-.30,-.29
1925,-.38,-.40,-.27,-.25,-.29,-.32,-.26,-.19,-.19,-.16,.05,.06,-.22,-.26,-.40,-.27,-.26,-.10
1926,.21,.03,.12,-.12,-.23,-.26,-.27,-.13,-.13,-.11,-.06,-.29,-.10,-.07,.10,-.08,-.22,-.10
1927,-.27,-.17,-.38,-.30,-.25,-.27,-.18,-.24,-.13,-.01,-.05,-.33,-.21,-.21,-.24,-.31,-.23,-.06
1928,-.01,-.08,-.24,-.27,-.29,-.38,-.19,-.22,-.21,-.18,-.08,-.16,-.19,-.21,-.14,-.27,-.26,-.16
1929,-.45,-.58,-.32,-.41,-.38,-.43,-.36,-.32,-.25,-.14,-.11,-.54,-.36,-.33,-.39,-.37,-.37,-.16
1930,-.29,-.26,-.10,-.24,-.23,-.22,-.21,-.15,-.15,-.12,.18,-.05,-.15,-.19,-.36,-.19,-.19,-.03
1931,-.10,-.20,-.09,-.22,-.19,-.08,-.03,-.03,-.07,.06,-.05,-.05,-.09,-.09,-.12,-.17,-.05,-.02
1932,.16,-.16,-.17,-.05,-.16,-.28,-.24,-.22,-.10,-.08,-.26,-.25,-.15,-.13,-.02,-.13,-.25,-.15
1933,-.23,-.29,-.29,-.23,-.28,-.34,-.21,-.23,-.29,-.24,-.30,-.44,-.28,-.26,-.25,-.27,-.26,-.28
1934,-.21,-.02,-.29,-.31,-.09,-.15,-.10,-.12,-.15,-.06,.04,-.02,-.12,-.16,-.22,-.23,-.12,-.06
1935,-.33,.14,-.14,-.36,-.28,-.26,-.21,-.22,-.21,-.05,-.25,-.16,-.19,-.18,-.07,-.26,-.23,-.17
1936,-.27,-.37,-.20,-.20,-.16,-.21,-.09,-.13,-.09,-.02,.02,.00,-.14,-.16,-.27,-.19,-.14,-.03
1937,-.06,.03,-.20,-.15,-.05,-.05,-.03,.02,.09,.09,.09,-.07,-.02,-.02,-.01,-.13,-.02,.09
1938,.08,.04,.10,.06,-.09,-.17,-.09,-.05,.01,.15,.08,-.12,.00,.01,.02,.02,-.10,.08
1939,-.05,-.06,-.17,-.09,-.04,-.07,-.06,-.06,-.07,-.03,.07,.44,-.02,-.06,-.08,-.10,-.06,-.01
1940,.00,.08,.09,.17,.11,.12,.13,.07,.15,.12,.17,.32,.13,.14,.17,.13,.10,.14
1941,.18,.31,.10,.16,.17,.13,.22,.15,.02,.35,.23,.22,.19,.20,.27,.15,.17,.20
1942,.29,.03,.05,.10,.11,.05,.00,-.04,-.03,.02,.10,.12,.07,.08,.18,.09,.01,.03
1943,-.01,.18,-.03,.11,.07,-.05,.09,.01,.05,.23,.20,.24,.09,.08,.10,.05,.01,.16
1944,.36,.25,.26,.19,.19,.16,.18,.18,.28,.27,.11,.04,.20,.22,.28,.21,.17,.22
1945,.10,.01,.06,.19,.06,.01,.04,.26,.20,.19,.07,-.06,.09,.10,.05,.11,.10,.15
1946,.15,.03,.02,.06,-.07,-.21,-.12,-.20,-.07,-.07,-.05,-.30,-.07,-.05,.04,.00,-.17,-.06
1947,-.06,-.07,.07,.06,-.01,-.01,-.04,-.07,-.12,.08,.03,-.13,-.02,-.04,-.15,.04,-.04,-.01
1948,.07,-.14,-.24,-.12,.00,-.05,-.11,-.11,-.14,-.05,-.12,-.23,-.10,-.09,-.07,-.12,-.09,-.10
1949,.07,-.14,-.02,-.11,-.10,-.27,-.13,-.12,-.14,-.06,-.10,-.18,-.11,-.11,-.10,-.07,-.17,-.10
1950,-.26,-.27,-.07,-.21,-.11,-.05,-.08,-.16,-.11,-.20,-.34,-.21,-.17,-.17,-.23,-.13,-.10,-.22
1951,-.34,-.41,-.20,-.14,.00,-.06,-.01,.06,.05,.08,-.01,.16,-.07,-.10,-.32,-.11,.00,.04
1952,.12,.11,-.08,.03,-.03,-.03,.04,.05,.07,.00,-.13,-.02,.01,.03,.13,-.02,.02,-.02
1953,.07,.15,.11,.19,.12,.12,.01,.05,.04,.08,-.03,.05,.08,.08,.07,.14,.06,.03
1954,-.24,-.10,-.14,-.14,-.20,-.18,-.19,-.17,-.10,-.02,.08,-.18,-.13,-.11,-.10,-.16,-.18,-.01
1955,.13,-.16,-.32,-.22,-.20,-.14,-.11,.02,-.11,-.05,-.25,-.28,-.14,-.13,-.07,-.25,-.08,-.14
1956,-.13,-.24,-.21,-.28,-.29,-.16,-.09,-.26,-.19,-.23,-.15,-.06,-.19,-.21,-.22,-.26,-.17,-.19
1957,-.09,-.03,-.05,.00,.09,.16,.02,.15,.09,.01,.08,.15,.05,.03,-.06,.01,.11,.06
1958,.39,.22,.08,.01,.06,-.09,.05,-.05,-.02,.04,.02,.01,.06,.07,.25,.05,-.03,.01
1959,.07,.07,.18,.16,.04,.03,.03,-.01,-.06,-.07,-.08,-.01,.03,.03,.05,.12,.02,-.07
1960,.00,.13,-.35,-.15,-.08,-.04,-.04,.02,.07,.06,-.12,.19,-.03,-.04,.04,-.19,-.02,.00
1961,.07,.19,.09,.13,.12,.11,.01,.00,.09,.00,.03,-.16,.06,.09,.15,.11,.04,.04
1962,.05,.15,.10,.05,-.06,.03,.02,-.01,.00,.01,.06,-.03,.03,.02,.01,.03,.01,.02
1963,-.03,.18,-.14,-.07,-.06,.05,.06,.22,.18,.14,.15,-.03,.05,.05,.04,-.09,.11,.16
1964,-.09,-.10,-.21,-.32,-.25,-.04,-.04,-.22,-.29,-.32,-.21,-.30,-.20,-.18,-.07,-.26,-.10,-.27
1965,-.08,-.17,-.13,-.19,-.12,-.08,-.13,-.04,-.15,-.05,-.06,-.08,-.11,-.13,-.18,-.15,-.09,-.09
1966,-.19,-.04,.03,-.13,-.12,.01,.08,-.09,-.03,-.17,-.01,-.03,-.06,-.06,-.11,-.07,.00,-.07
1967,-.07,-.21,.05,-.05,.12,-.08,.02,.01,-.06,.08,-.05,-.05,-.02,-.02,-.10,.04,-.02,-.01
1968,-.26,-.14,.20,-.06,-.14,-.09,-.13,-.09,-.19,.09,-.05,-.15,-.08,-.08,-.15,.00,-.10,-.05
1969,-.11,-.18,.01,.17,.18,.03,-.04,.03,.08,.09,.12,.24,.05,.02,-.14,.12,.01,.10
1970,.08,.22,.06,.05,-.03,-.03,.01,-.10,.12,.03,.02,-.12,.03,.06,.18,.03,-.04,.05
1971,-.02,-.15,-.18,-.07,-.05,-.17,-.08,-.01,-.06,-.04,-.07,-.08,-.08,-.09,-.10,-.10,-.08,-.06
1972,-.22,-.18,.02,.00,-.03,.04,.01,.16,.02,.08,.02,.18,.01,-.01,-.16,.00,.07,.04
1973,.29,.32,.29,.27,.23,.19,.13,.05,.09,.10,.05,-.07,.16,.18,.26,.26,.12,.08
1974,-.10,-.27,-.05,-.11,-.04,-.05,-.03,.11,-.08,-.06,-.08,-.08,-.07,-.07,-.14,-.07,.01,-.07
1975,.10,.08,.13,.04,.16,-.01,.00,-.17,-.02,-.11,-.17,-.17,-.01,-.01,.03,.11,-.06,-.10
1976,-.03,-.06,-.21,-.07,-.20,-.12,-.10,-.12,-.06,-.24,-.06,.11,-.10,-.12,-.09,-.16,-.11,-.12
1977,.19,.23,.24,.26,.33,.27,.20,.18,.02,.03,.16,.03,.18,.19,.17,.28,.22,.07
1978,.06,.10,.19,.17,.09,-.01,.04,-.13,.06,.03,.14,.08,.07,.06,.07,.15,-.04,.08
1979,.09,-.10,.19,.15,.04,.14,.04,.17,.25,.26,.28,.48,.16,.13,.02,.13,.11,.27
1980,.30,.40,.30,.30,.35,.20,.22,.18,.20,.13,.30,.22,.26,.28,.39,.32,.20,.21
1981,.53,.43,.48,.32,.25,.29,.32,.35,.15,.12,.23,.41,.32,.31,.39,.35,.32,.17
1982,.05,.16,.03,.15,.18,.06,.15,.04,.14,.13,.18,.43,.14,.14,.20,.12,.08,.15
1983,.53,.43,.42,.28,.34,.22,.18,.36,.37,.17,.30,.17,.31,.34,.46,.34,.25,.28
1984,.31,.14,.27,.06,.33,.02,.19,.19,.21,.14,.07,-.04,.16,.17,.21,.22,.14,.14
1985,.22,-.04,.18,.12,.14,.15,.04,.17,.13,.12,.05,.14,.12,.10,.05,.15,.12,.10
1986,.26,.37,.30,.22,.21,.12,.11,.16,.03,.15,.10,.13,.18,.18,.26,.25,.13,.10
1987,.32,.43,.18,.24,.26,.35,.40,.25,.35,.33,.29,.46,.32,.29,.29,.23,.33,.32
1988,.57,.44,.52,.43,.44,.40,.33,.39,.37,.38,.12,.29,.39,.40,.49,.46,.37,.29
1989,.13,.30,.36,.29,.17,.17,.34,.33,.34,.29,.20,.37,.27,.27,.24,.28,.28,.28
1990,.42,.44,.80,.57,.45,.37,.45,.34,.23,.45,.46,.41,.45,.45,.41,.61,.39,.38
1991,.43,.50,.35,.51,.34,.53,.47,.39,.44,.29,.29,.32,.40,.41,.44,.40,.46,.34
1992,.47,.40,.48,.27,.31,.26,.08,.08,-.01,.06,.03,.22,.22,.23,.40,.35,.14,.03
1993,.35,.37,.36,.28,.28,.23,.25,.11,.12,.23,.03,.18,.23,.24,.31,.31,.20,.13
1994,.26,.03,.29,.41,.28,.44,.30,.21,.32,.42,.44,.38,.32,.30,.16,.33,.32,.39
1995,.52,.79,.47,.47,.27,.43,.45,.45,.34,.47,.44,.26,.45,.46,.56,.40,.44,.42
1996,.24,.46,.33,.33,.27,.25,.36,.48,.25,.19,.38,.37,.33,.32,.32,.31,.37,.28
1997,.31,.41,.52,.34,.34,.54,.34,.41,.52,.61,.64,.59,.46,.44,.36,.40,.43,.59
1998,.58,.88,.63,.64,.68,.77,.66,.66,.42,.41,.43,.55,.61,.61,.68,.65,.69,.42
1999,.49,.64,.32,.32,.26,.36,.38,.32,.39,.34,.37,.41,.38,.39,.56,.30,.35,.36
2000,.25,.56,.55,.57,.36,.40,.39,.43,.39,.26,.30,.28,.39,.41,.41,.49,.40,.32
2001,.46,.44,.56,.51,.58,.52,.59,.49,.52,.50,.72,.56,.54,.51,.39,.55,.53,.58
2002,.78,.79,.88,.58,.64,.53,.61,.53,.63,.54,.59,.44,.63,.64,.71,.70,.56,.59
2003,.75,.59,.60,.55,.61,.48,.58,.64,.62,.72,.53,.75,.62,.59,.59,.58,.57,.62
2004,.58,.73,.63,.61,.37,.44,.26,.45,.50,.60,.72,.51,.53,.55,.69,.54,.38,.61
2005,.74,.60,.74,.67,.63,.64,.61,.60,.71,.75,.74,.68,.68,.66,.62,.68,.62,.73
2006,.56,.73,.63,.47,.48,.66,.54,.71,.65,.70,.74,.79,.64,.63,.66,.53,.63,.69
2007,1.02,.70,.73,.76,.69,.61,.60,.60,.60,.58,.59,.50,.66,.69,.84,.73,.60,.59
2008,.30,.38,.74,.53,.49,.49,.60,.46,.61,.67,.69,.54,.54,.54,.39,.59,.51,.65
2009,.64,.53,.54,.61,.65,.64,.74,.68,.72,.65,.79,.68,.66,.64,.57,.60,.69,.72
2010,.75,.84,.92,.84,.76,.68,.63,.67,.63,.71,.81,.45,.72,.74,.75,.84,.66,.72
2011,.52,.48,.66,.65,.53,.62,.71,.74,.57,.66,.59,.61,.61,.60,.48,.61,.69,.60
2012,.49,.49,.58,.72,.78,.65,.58,.65,.72,.79,.78,.53,.65,.65,.53,.69,.63,.77
2013,.71,.62,.67,.54,.61,.69,.60,.69,.77,.69,.83,.70,.68,.66,.62,.61,.66,.76
2014,.76,.55,.78,.80,.86,.67,.58,.83,.87,.81,.67,.78,.75,.74,.67,.81,.69,.78
2015,.86,.90,.96,.76,.80,.81,.73,.81,.85,1.09,1.06,1.16,.90,.87,.85,.84,.78,1.00
2016,1.17,1.37,1.36,1.11,.95,.80,.84,1.02,.91,.89,.92,.87,1.02,1.04,1.24,1.14,.89,.90
2017,1.03,1.14,1.17,.94,.91,.72,.82,.87,.77,.90,.88,.93,.92,.92,1.01,1.01,.80,.85
2018,.82,.85,.89,.89,.82,.77,.82,.77,.80,1.02,.82,.91,.85,.85,.87,.87,.79,.88
2019,.93,.95,1.17,1.01,.85,.91,.94,.95,.93,1.01,.99,1.09,.98,.96,.93,1.01,.93,.98
2020,1.17,1.24,1.17,1.13,1.02,.92,.90,.88,.99,.89,1.11,.81,1.02,1.04,1.17,1.11,.90,.99
2021,.82,.64,.89,.76,.78,.84,.92,.82,.92,1.00,.94,.86,.85,.85,.76,.81,.86,.95
2022,.91,.89,1.05,.84,.84,.92,.93,.95,.90,.97,.73,.80,.89,.90,.89,.91,.94,.86
2023,.87,.98,1.21,***,***,***,***,***,***,***,***,***,***,***,.88,***,***,***
`,QC=`Land-Ocean: Northern Hemispheric Means
Year,Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec,J-D,D-N,DJF,MAM,JJA,SON
1880,-.36,-.51,-.23,-.30,-.06,-.16,-.19,-.27,-.24,-.32,-.43,-.40,-.29,***,***,-.20,-.21,-.33
1881,-.31,-.23,-.04,-.01,.02,-.34,.08,-.05,-.27,-.44,-.37,-.24,-.18,-.20,-.31,-.01,-.10,-.36
1882,.25,.20,.02,-.31,-.24,-.29,-.28,-.16,-.26,-.52,-.34,-.69,-.22,-.18,.07,-.18,-.24,-.37
1883,-.58,-.66,-.16,-.30,-.26,-.12,-.05,-.22,-.34,-.16,-.45,-.15,-.29,-.33,-.65,-.24,-.13,-.32
1884,-.17,-.12,-.64,-.60,-.36,-.41,-.41,-.51,-.45,-.45,-.58,-.47,-.43,-.40,-.15,-.53,-.45,-.49
1885,-1.01,-.46,-.24,-.49,-.59,-.45,-.34,-.41,-.40,-.37,-.39,-.12,-.44,-.47,-.65,-.44,-.40,-.39
1886,-.76,-.85,-.72,-.38,-.34,-.37,-.14,-.43,-.33,-.32,-.40,-.22,-.44,-.43,-.57,-.48,-.31,-.35
1887,-1.09,-.71,-.45,-.39,-.26,-.21,-.25,-.55,-.21,-.49,-.28,-.43,-.44,-.43,-.67,-.37,-.34,-.33
1888,-.49,-.61,-.64,-.22,-.16,-.03,-.01,-.22,-.20,-.04,-.02,-.24,-.24,-.26,-.51,-.34,-.09,-.09
1889,-.28,.28,-.02,.16,-.04,-.07,-.09,-.21,-.31,-.42,-.62,-.55,-.18,-.15,-.08,.03,-.12,-.45
1890,-.64,-.59,-.48,-.25,-.36,-.16,-.23,-.39,-.36,-.10,-.63,-.47,-.39,-.40,-.59,-.37,-.26,-.36
1891,-.47,-.69,-.16,-.36,-.16,-.13,-.13,-.13,-.08,-.28,-.53,-.03,-.26,-.30,-.54,-.23,-.13,-.30
1892,-.50,-.17,-.67,-.45,-.23,-.05,-.37,-.33,-.20,-.28,-.83,-.65,-.40,-.34,-.23,-.45,-.25,-.44
1893,-1.52,-.97,-.32,-.30,-.43,-.19,-.13,-.33,-.29,-.28,-.33,-.60,-.47,-.48,-1.05,-.35,-.22,-.30
1894,-.91,-.42,-.21,-.53,-.26,-.40,-.20,-.26,-.32,-.27,-.47,-.35,-.38,-.40,-.64,-.33,-.29,-.36
1895,-.70,-.80,-.49,-.18,-.30,-.20,-.18,-.27,-.06,-.09,-.13,-.22,-.30,-.31,-.62,-.32,-.22,-.09
1896,-.36,-.19,-.49,-.60,-.16,.08,.00,-.11,-.13,.04,-.21,-.21,-.20,-.20,-.26,-.42,-.01,-.10
1897,-.40,-.42,-.40,-.05,.13,-.06,.04,-.07,-.07,-.16,-.26,-.29,-.17,-.16,-.35,-.11,-.03,-.16
1898,.04,-.45,-.80,-.28,-.28,-.09,-.13,-.18,-.18,-.37,-.52,-.27,-.29,-.29,-.23,-.46,-.14,-.36
1899,-.13,-.65,-.59,-.23,-.25,-.35,-.17,-.07,-.05,.04,.35,-.47,-.21,-.20,-.35,-.36,-.20,.12
1900,-.62,-.14,.05,-.10,-.04,-.09,-.11,-.08,-.03,.23,-.12,-.03,-.09,-.13,-.41,-.03,-.10,.03
1901,-.33,-.09,.27,.11,-.11,.02,.02,-.15,-.27,-.32,-.23,-.41,-.13,-.09,-.15,.09,-.04,-.27
1902,-.18,.02,-.38,-.38,-.39,-.36,-.34,-.29,-.33,-.31,-.46,-.61,-.33,-.32,-.19,-.38,-.33,-.37
1903,-.22,.11,-.15,-.46,-.43,-.45,-.44,-.55,-.49,-.49,-.43,-.57,-.38,-.38,-.24,-.35,-.48,-.47
1904,-.77,-.60,-.41,-.50,-.44,-.48,-.59,-.54,-.64,-.39,-.09,-.34,-.48,-.50,-.65,-.45,-.54,-.37
1905,-.41,-.81,-.23,-.45,-.29,-.28,-.21,-.24,-.19,-.27,.09,-.17,-.29,-.30,-.52,-.32,-.24,-.13
1906,-.56,-.53,-.20,.04,-.25,-.11,-.26,-.17,-.24,-.17,-.40,.03,-.24,-.25,-.42,-.14,-.18,-.27
1907,-.58,-.73,-.31,-.45,-.58,-.51,-.40,-.38,-.40,-.19,-.55,-.57,-.47,-.42,-.43,-.45,-.43,-.38
1908,-.54,-.27,-.70,-.48,-.30,-.30,-.36,-.57,-.31,-.45,-.63,-.55,-.46,-.46,-.46,-.49,-.41,-.46
1909,-.93,-.46,-.67,-.66,-.49,-.52,-.45,-.35,-.37,-.34,-.12,-.57,-.49,-.49,-.65,-.61,-.44,-.28
1910,-.35,-.37,-.49,-.41,-.29,-.44,-.38,-.40,-.43,-.32,-.58,-.81,-.44,-.42,-.43,-.40,-.40,-.44
1911,-.71,-.59,-.64,-.45,-.45,-.34,-.37,-.44,-.38,-.19,-.20,-.30,-.42,-.47,-.70,-.52,-.38,-.26
1912,-.34,-.16,-.60,-.16,-.12,-.14,-.52,-.77,-.80,-.84,-.51,-.56,-.46,-.44,-.27,-.29,-.47,-.72
1913,-.55,-.64,-.47,-.50,-.54,-.49,-.51,-.46,-.42,-.40,-.14,.11,-.42,-.47,-.59,-.50,-.49,-.32
1914,.17,-.10,-.35,-.39,-.18,-.22,-.34,-.27,-.30,-.01,-.22,-.05,-.19,-.17,.06,-.31,-.28,-.18
1915,-.26,-.10,-.24,.07,-.02,-.12,-.10,-.16,-.22,-.27,-.03,-.26,-.14,-.12,-.13,-.06,-.13,-.17
1916,-.09,-.16,-.39,-.34,-.36,-.50,-.34,-.38,-.49,-.35,-.47,-1.14,-.42,-.35,-.17,-.36,-.41,-.44
1917,-.54,-.69,-.75,-.65,-.73,-.49,-.33,-.40,-.31,-.63,-.32,-1.06,-.57,-.58,-.79,-.71,-.41,-.42
1918,-.69,-.46,-.25,-.59,-.49,-.45,-.34,-.36,-.26,-.04,-.22,-.56,-.39,-.43,-.74,-.44,-.39,-.17
1919,-.38,-.41,-.38,-.23,-.42,-.39,-.33,-.30,-.19,-.09,-.47,-.55,-.35,-.35,-.45,-.34,-.34,-.25
1920,-.14,-.28,.01,-.21,-.21,-.26,-.25,-.31,-.35,-.40,-.45,-.71,-.30,-.28,-.33,-.14,-.27,-.40
1921,.19,-.09,-.11,-.17,-.24,-.15,-.03,-.29,-.18,.00,-.09,-.12,-.11,-.15,-.20,-.17,-.15,-.09
1922,-.37,-.62,-.10,-.15,-.19,-.15,-.28,-.36,-.43,-.32,-.13,-.14,-.27,-.27,-.37,-.15,-.26,-.29
1923,-.18,-.46,-.39,-.52,-.38,-.24,-.29,-.27,-.17,.07,.16,.09,-.21,-.23,-.26,-.43,-.26,.02
1924,-.28,-.21,.03,-.28,-.05,-.18,-.21,-.26,-.22,-.23,.11,-.35,-.18,-.14,-.13,-.10,-.22,-.11
1925,-.28,-.38,-.23,-.16,-.21,-.25,-.25,-.18,-.04,-.08,.22,.22,-.13,-.18,-.34,-.20,-.23,.03
1926,.53,.19,.38,-.11,-.23,-.19,-.19,-.05,-.01,.07,.17,-.29,.02,.06,.31,.01,-.15,.08
1927,-.28,-.08,-.46,-.26,-.12,-.14,-.07,-.16,.03,.24,.11,-.37,-.13,-.12,-.22,-.28,-.12,.13
1928,.28,.10,-.23,-.31,-.17,-.31,-.10,-.18,-.15,-.08,.06,-.03,-.09,-.12,.00,-.23,-.20,-.06
1929,-.55,-.79,-.18,-.35,-.27,-.39,-.36,-.19,-.19,-.01,-.02,-.65,-.33,-.28,-.46,-.27,-.31,-.07
1930,-.10,-.19,.11,-.15,-.19,-.11,-.03,.02,-.02,.02,.44,.09,-.01,-.07,-.32,-.08,-.04,.15
1931,.01,-.23,-.05,-.19,-.13,.16,.08,.10,.17,.37,.26,.11,.06,.05,-.04,-.12,.11,.27
1932,.39,-.18,-.19,.11,-.09,-.13,-.14,-.08,.11,.15,-.32,-.20,-.05,-.02,.11,-.06,-.12,-.02
1933,-.18,-.30,-.31,-.16,-.25,-.31,-.13,-.14,-.27,-.17,-.24,-.54,-.25,-.22,-.23,-.24,-.19,-.23
1934,-.15,.33,-.27,-.29,.08,-.01,-.03,-.09,-.13,.13,.27,.18,.00,-.06,-.12,-.16,-.05,.09
1935,-.39,.57,.04,-.34,-.28,-.14,-.04,-.06,-.06,.12,-.32,-.16,-.09,-.06,.12,-.20,-.08,-.08
1936,-.28,-.50,-.12,-.05,.00,.04,.09,.03,.07,.07,.15,.15,-.03,-.05,-.31,-.06,.06,.10
1937,.10,.25,-.22,-.06,.13,.15,.15,.16,.29,.34,.25,.00,.13,.14,.16,-.05,.15,.29
1938,.35,.28,.34,.31,.03,-.06,-.02,.08,.15,.32,.31,-.13,.16,.17,.21,.23,.00,.26
1939,.03,-.01,-.24,-.07,.01,.00,.05,.08,.13,.08,.24,.79,.09,.01,-.04,-.10,.04,.15
1940,-.10,.14,.03,.28,.16,.16,.15,.07,.26,.29,.30,.36,.18,.21,.27,.16,.13,.28
1941,.18,.47,.12,.12,.23,.21,.24,.19,.10,.50,.18,.19,.23,.24,.34,.16,.21,.26
1942,.41,-.08,-.01,.09,.16,.10,-.01,-.08,.11,.28,.26,.27,.13,.12,.17,.08,.01,.21
1943,-.10,.38,.00,.31,.23,-.07,-.02,.10,.14,.46,.36,.37,.18,.17,.18,.18,.00,.32
1944,.62,.44,.31,.18,.23,.17,.14,.17,.36,.45,.19,.00,.27,.30,.48,.24,.16,.33
1945,.12,-.06,.10,.30,.08,.08,.07,.29,.21,.24,.09,-.21,.11,.13,.02,.16,.15,.18
1946,.35,.10,.13,.32,.04,-.05,-.03,-.09,-.03,.03,.08,-.45,.03,.05,.08,.16,-.06,.02
1947,-.04,-.03,.29,.23,.07,.01,-.03,-.04,-.01,.41,.20,-.04,.08,.05,-.17,.20,-.02,.20
1948,.31,-.14,-.27,-.02,.17,.05,.02,.03,-.03,.08,.04,-.39,-.01,.02,.04,-.04,.03,.03
1949,.23,-.09,.05,-.02,.01,-.19,-.11,-.04,-.09,.07,.06,-.14,-.02,-.04,-.08,.01,-.11,.01
1950,-.29,-.27,.06,-.21,-.04,-.06,-.18,-.19,-.09,-.06,-.33,-.12,-.15,-.15,-.23,-.06,-.15,-.16
1951,-.36,-.51,-.18,.07,.17,-.02,.09,.22,.34,.29,.09,.38,.05,.01,-.33,.02,.10,.24
1952,.17,.17,-.21,.18,.15,.16,.14,.07,.14,-.01,-.21,.01,.06,.09,.24,.04,.12,-.03
1953,.24,.37,.26,.41,.25,.25,.22,.18,.17,.27,.09,.23,.24,.23,.21,.30,.22,.18
1954,-.24,.00,-.16,-.01,-.07,-.04,-.11,-.01,.09,.13,.34,-.11,-.02,.01,-.01,-.08,-.05,.19
1955,.43,-.12,-.43,-.24,-.13,-.10,-.05,.06,-.02,.12,-.34,-.28,-.09,-.08,.06,-.27,-.03,-.08
1956,-.04,-.32,-.23,-.26,-.30,-.20,-.20,-.28,-.32,-.28,-.26,-.11,-.23,-.25,-.22,-.26,-.22,-.29
1957,-.13,-.06,-.10,-.09,-.06,.12,.11,.16,.12,.06,.12,.24,.04,.01,-.10,-.08,.13,.10
1958,.68,.28,.16,.02,.12,.05,.04,.13,.07,.08,.03,.18,.15,.16,.40,.10,.07,.06
1959,.23,.16,.32,.22,.04,.14,.05,.09,.13,-.04,.03,.09,.12,.13,.19,.19,.09,.04
1960,.15,.42,-.40,-.13,.03,.18,.08,.11,.12,.05,-.08,.39,.08,.05,.22,-.16,.12,.03
1961,.17,.29,.22,.14,.07,.18,.06,.04,-.03,-.04,.07,-.17,.08,.13,.28,.14,.09,.00
1962,.28,.36,.30,.22,.02,-.13,.10,.04,-.02,.13,.12,.10,.13,.10,.16,.18,.00,.08
1963,.08,.50,-.12,.04,-.04,-.04,.10,.14,.13,.42,.43,.03,.14,.14,.23,-.04,.07,.33
1964,-.04,-.03,-.32,-.30,-.10,-.09,-.13,-.23,-.28,-.31,-.22,-.27,-.19,-.17,-.01,-.24,-.15,-.27
1965,-.02,-.37,-.09,-.26,-.14,-.20,-.18,-.20,-.20,-.02,.04,-.08,-.14,-.16,-.22,-.16,-.20,-.06
1966,-.25,.03,-.01,-.22,-.05,.06,.11,.14,.06,-.10,.02,-.03,-.02,-.02,-.10,-.09,.10,-.01
1967,-.18,-.37,.23,.05,.21,-.06,.04,.06,-.03,.29,.04,.02,.03,.02,-.19,.16,.02,.10
1968,-.29,-.16,.44,-.01,-.06,-.05,-.08,-.08,-.05,-.01,-.22,-.33,-.07,-.04,-.14,.12,-.07,-.09
1969,-.43,-.46,-.20,.03,.11,-.04,.06,.04,.04,.03,.14,.31,-.03,-.08,-.41,-.02,.02,.07
1970,-.03,.27,-.07,-.02,.00,.02,-.04,-.05,-.05,-.20,.01,-.31,-.04,.01,.18,-.03,-.03,-.08
1971,-.15,-.21,-.28,-.20,-.12,-.14,-.13,-.16,-.14,-.16,-.02,-.13,-.15,-.17,-.22,-.20,-.14,-.10
1972,-.54,-.52,.00,-.12,-.15,-.10,-.05,-.09,-.26,-.04,-.19,-.04,-.18,-.18,-.40,-.09,-.08,-.17
1973,.15,.44,.32,.19,.09,.16,.04,.03,-.08,-.07,-.09,-.04,.09,.09,.18,.20,.08,-.08
1974,-.25,-.35,.02,-.10,-.19,-.18,-.12,-.11,-.16,-.23,-.21,-.27,-.18,-.16,-.21,-.09,-.14,-.20
1975,.16,.09,.11,.05,-.02,-.08,-.06,-.13,-.08,-.18,-.30,-.22,-.05,-.06,-.01,.05,-.09,-.19
1976,.05,-.12,-.31,.02,-.26,-.20,-.26,-.21,-.12,-.51,-.31,-.25,-.21,-.20,-.10,-.18,-.22,-.31
1977,-.15,.11,.26,.25,.23,.22,.08,.02,.13,-.02,.27,.02,.12,.10,-.10,.25,.11,.13
1978,.16,.04,.21,.08,-.06,-.14,-.07,-.14,-.01,-.01,.16,.02,.02,.02,.08,.08,-.12,.05
1979,-.05,-.36,.18,-.17,.01,.08,.05,.04,.19,.23,.25,.54,.08,.04,-.13,.01,.06,.22
1980,.21,.41,.07,.15,.25,.19,.13,.09,.10,.11,.20,.09,.17,.21,.39,.16,.14,.14
1981,.80,.63,.68,.39,.18,.28,.09,.16,.14,.23,.35,.54,.37,.33,.50,.41,.17,.24
1982,-.13,.17,.06,.17,.09,.01,.04,-.07,.06,.00,-.11,.38,.06,.07,.19,.11,.00,-.02
1983,.55,.35,.43,.07,.05,.11,.20,.25,.26,.12,.49,.11,.25,.27,.43,.18,.19,.29
1984,.33,.02,.19,-.07,.23,.09,.09,.06,-.04,.09,-.10,-.42,.04,.08,.16,.12,.08,-.02
1985,.08,-.29,.00,-.04,.09,.00,-.08,-.02,.03,.02,.02,.16,.00,-.05,-.21,.02,-.03,.02
1986,.37,.31,.26,.15,.19,.14,-.02,.04,-.02,.09,.04,.06,.13,.14,.28,.20,.05,.04
1987,.25,.51,.00,.07,.23,.17,.26,.27,.39,.22,.10,.51,.25,.21,.27,.10,.23,.24
1988,.59,.46,.48,.44,.43,.40,.42,.26,.26,.23,.06,.43,.37,.38,.52,.45,.36,.18
1989,.08,.39,.46,.32,.22,.24,.32,.26,.23,.25,.11,.34,.27,.28,.30,.33,.27,.20
1990,.47,.54,1.16,.71,.50,.47,.33,.40,.42,.48,.46,.38,.53,.52,.45,.79,.40,.45
1991,.59,.56,.45,.56,.33,.47,.42,.35,.35,.29,.32,.20,.41,.42,.51,.45,.42,.32
1992,.61,.50,.54,.16,.19,.04,-.10,-.07,-.18,-.17,-.09,.21,.14,.13,.43,.30,-.04,-.15
1993,.39,.52,.39,.23,.32,.22,.12,.02,-.06,.12,-.21,.22,.19,.19,.37,.31,.12,-.05
1994,.34,-.04,.49,.48,.39,.41,.33,.32,.33,.54,.50,.36,.37,.36,.17,.45,.36,.46
1995,.75,1.19,.59,.71,.42,.50,.37,.54,.43,.60,.56,.27,.58,.58,.77,.57,.47,.53
1996,.27,.54,.32,.17,.35,.25,.29,.18,.04,.05,.35,.35,.26,.26,.36,.28,.24,.14
1997,.36,.60,.74,.49,.42,.49,.41,.48,.51,.63,.59,.51,.52,.51,.44,.55,.46,.58
1998,.62,1.03,.72,.87,.66,.73,.75,.72,.61,.54,.49,.74,.71,.69,.72,.75,.73,.55
1999,.59,1.00,.29,.54,.36,.35,.35,.30,.40,.39,.53,.66,.48,.49,.78,.40,.34,.44
2000,.38,.89,.84,.89,.54,.44,.42,.47,.36,.29,.20,.27,.50,.53,.65,.76,.44,.28
2001,.57,.46,.76,.60,.69,.51,.63,.68,.56,.60,.98,.66,.64,.61,.43,.68,.61,.71
2002,1.02,1.14,1.11,.51,.52,.68,.66,.55,.62,.54,.79,.42,.71,.73,.94,.71,.63,.65
2003,.93,.57,.66,.61,.71,.54,.68,.86,.78,.98,.66,.98,.75,.70,.64,.66,.70,.81
2004,.67,.92,.87,.70,.52,.47,.50,.55,.59,.70,.98,.45,.66,.70,.86,.69,.50,.76
2005,.94,.72,.94,.93,.78,.79,.75,.69,.90,.95,1.05,.84,.86,.82,.70,.88,.74,.97
2006,.64,.95,.78,.59,.75,.81,.69,.69,.82,.96,.95,1.16,.82,.79,.81,.71,.73,.91
2007,1.45,.89,.95,1.07,.72,.65,.66,.73,.67,.83,.82,.77,.85,.88,1.17,.91,.68,.77
2008,.34,.59,1.14,.64,.60,.61,.60,.59,.57,.85,.96,.65,.68,.69,.56,.79,.60,.80
2009,.82,.70,.59,.70,.66,.68,.68,.72,.85,.79,.84,.67,.72,.72,.72,.65,.69,.83
2010,.81,.94,1.10,1.13,.94,.84,.88,.86,.70,.89,1.20,.50,.90,.91,.81,1.06,.86,.93
2011,.61,.56,.88,.84,.66,.76,.72,.71,.73,.90,.66,.89,.74,.71,.56,.79,.73,.77
2012,.68,.59,.71,1.06,.97,.94,.85,.76,.86,.91,.97,.46,.81,.85,.72,.91,.85,.91
2013,.85,.78,.81,.68,.78,.77,.70,.74,.70,.83,1.12,.83,.80,.77,.70,.76,.73,.88
2014,.97,.72,1.20,1.08,.89,.81,.77,.90,.83,.93,.80,1.09,.92,.90,.84,1.06,.83,.86
2015,1.18,1.19,1.33,1.02,1.04,1.05,.91,1.02,1.17,1.29,1.38,1.53,1.18,1.14,1.15,1.13,.99,1.28
2016,1.54,1.94,1.91,1.47,1.11,1.11,1.04,1.12,1.22,1.03,1.12,1.04,1.31,1.35,1.67,1.50,1.09,1.13
2017,1.38,1.51,1.52,1.19,.92,.92,.96,1.01,1.00,1.05,1.22,1.38,1.17,1.15,1.31,1.21,.97,1.09
2018,1.14,1.25,1.17,.97,1.00,.86,.90,.87,.96,1.24,.97,1.09,1.03,1.06,1.25,1.05,.87,1.06
2019,1.20,1.12,1.55,1.24,.98,1.19,1.03,1.09,1.21,1.30,1.20,1.39,1.21,1.18,1.13,1.26,1.10,1.24
2020,1.59,1.70,1.66,1.40,1.28,1.13,1.10,1.13,1.20,1.22,1.61,1.23,1.35,1.37,1.56,1.45,1.12,1.34
2021,1.26,.96,1.20,1.12,1.04,1.20,1.07,1.02,1.06,1.31,1.31,1.14,1.14,1.15,1.15,1.12,1.10,1.23
2022,1.24,1.17,1.43,1.09,1.01,1.12,1.05,1.17,1.15,1.32,1.10,1.07,1.16,1.17,1.19,1.18,1.11,1.19
2023,1.28,1.32,1.61,***,***,***,***,***,***,***,***,***,***,***,1.23,***,***,***
`,IC=`Land-Ocean: Southern Hemispheric Means
Year,Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec,J-D,D-N,DJF,MAM,JJA,SON
1880,.00,.03,.06,-.02,-.13,-.25,-.17,.06,-.05,-.15,.00,.05,-.05,***,***,-.03,-.12,-.07
1881,-.09,-.06,.09,.09,.09,-.06,-.08,-.03,-.04,-.01,-.01,.09,.00,.00,-.03,.09,-.05,-.02
1882,.07,.07,.07,-.02,-.04,-.16,-.05,.01,-.05,.03,-.01,-.07,-.01,.00,.08,.00,-.07,-.01
1883,-.02,-.08,-.09,-.07,-.10,-.03,-.09,-.05,-.11,-.06,-.05,-.06,-.07,-.07,-.06,-.09,-.06,-.07
1884,-.09,-.06,-.10,-.22,-.32,-.30,-.22,-.07,-.12,-.07,-.11,-.15,-.15,-.14,-.07,-.21,-.20,-.10
1885,-.20,-.23,-.30,-.36,-.33,-.43,-.34,-.23,-.19,-.13,-.11,-.09,-.24,-.25,-.19,-.33,-.33,-.15
1886,-.14,-.20,-.17,-.20,-.15,-.32,-.22,-.19,-.15,-.24,-.15,-.29,-.20,-.19,-.15,-.17,-.24,-.18
1887,-.37,-.44,-.27,-.31,-.35,-.28,-.27,-.17,-.30,-.22,-.25,-.23,-.29,-.29,-.36,-.31,-.24,-.26
1888,-.20,-.13,-.21,-.20,-.29,-.32,-.20,-.10,-.05,.06,.07,.15,-.12,-.15,-.19,-.23,-.21,.03
1889,.08,.03,.13,.03,.02,-.13,-.07,-.20,-.17,-.10,-.06,-.04,-.04,-.02,.09,.06,-.13,-.11
1890,-.21,-.32,-.33,-.35,-.43,-.33,-.32,-.39,-.38,-.39,-.25,-.16,-.32,-.31,-.19,-.37,-.35,-.34
1891,-.21,-.25,-.20,-.19,-.17,-.29,-.23,-.22,-.24,-.16,-.10,-.05,-.19,-.20,-.21,-.19,-.25,-.17
1892,-.09,-.06,-.14,-.22,-.23,-.38,-.26,-.21,-.13,.00,-.03,-.11,-.15,-.15,-.06,-.19,-.28,-.06
1893,-.13,-.17,-.12,-.24,-.24,-.32,-.14,-.17,-.16,-.08,-.03,-.02,-.15,-.16,-.14,-.20,-.21,-.09
1894,-.14,-.15,-.23,-.35,-.34,-.40,-.26,-.20,-.22,-.17,-.03,-.06,-.21,-.21,-.10,-.31,-.29,-.14
1895,-.12,-.05,-.16,-.24,-.24,-.21,-.14,-.06,-.18,-.12,-.20,-.05,-.15,-.15,-.08,-.21,-.14,-.17
1896,-.08,-.07,-.03,-.01,-.15,-.29,-.05,.01,-.02,.09,.12,.13,-.03,-.04,-.07,-.06,-.11,.06
1897,.09,.08,.12,.00,-.16,-.16,-.08,-.12,-.10,-.09,-.10,-.12,-.05,-.03,.10,-.01,-.12,-.10
1898,-.09,-.16,-.23,-.34,-.33,-.30,-.33,-.36,-.25,-.32,-.26,-.20,-.26,-.26,-.12,-.30,-.33,-.28
1899,-.20,-.13,-.14,-.18,-.21,-.27,-.15,-.10,-.05,-.11,-.09,-.06,-.14,-.15,-.18,-.17,-.17,-.08
1900,-.10,.03,-.04,-.08,-.13,-.09,-.13,-.08,-.06,-.01,.01,-.10,-.06,-.06,-.04,-.08,-.10,-.02
1901,-.10,-.12,-.14,-.15,-.18,-.24,-.29,-.24,-.17,-.26,-.13,-.14,-.18,-.18,-.11,-.16,-.26,-.18
1902,-.18,-.14,-.17,-.18,-.24,-.22,-.22,-.30,-.24,-.27,-.25,-.23,-.22,-.21,-.15,-.20,-.25,-.25
1903,-.24,-.22,-.30,-.36,-.36,-.39,-.27,-.35,-.50,-.48,-.44,-.46,-.36,-.34,-.23,-.34,-.34,-.47
1904,-.51,-.56,-.56,-.51,-.59,-.48,-.42,-.43,-.48,-.38,-.26,-.31,-.46,-.47,-.51,-.56,-.45,-.37
1905,-.27,-.35,-.20,-.21,-.28,-.27,-.30,-.16,-.17,-.21,-.21,-.07,-.23,-.25,-.31,-.23,-.24,-.20
1906,.02,-.04,-.16,-.15,-.26,-.27,-.19,-.23,-.32,-.23,-.35,-.33,-.21,-.19,-.03,-.19,-.23,-.30
1907,-.27,-.29,-.24,-.29,-.34,-.33,-.30,-.29,-.28,-.25,-.36,-.35,-.30,-.30,-.30,-.29,-.31,-.30
1908,-.34,-.38,-.39,-.41,-.46,-.47,-.35,-.35,-.41,-.43,-.41,-.43,-.40,-.40,-.36,-.42,-.39,-.42
1909,-.51,-.46,-.41,-.52,-.59,-.52,-.45,-.32,-.41,-.46,-.53,-.55,-.48,-.47,-.47,-.51,-.43,-.46
1910,-.49,-.45,-.52,-.45,-.38,-.32,-.30,-.34,-.34,-.51,-.52,-.52,-.43,-.43,-.49,-.45,-.32,-.46
1911,-.53,-.55,-.57,-.61,-.57,-.66,-.46,-.44,-.43,-.32,-.21,-.10,-.46,-.49,-.53,-.58,-.52,-.32
1912,-.14,-.11,-.14,-.18,-.28,-.32,-.31,-.30,-.34,-.29,-.25,-.29,-.25,-.23,-.12,-.20,-.31,-.29
1913,-.24,-.24,-.38,-.28,-.32,-.40,-.20,-.20,-.26,-.24,-.23,-.14,-.26,-.27,-.26,-.33,-.26,-.24
1914,-.07,-.08,-.11,-.19,-.22,-.28,-.13,-.05,-.03,-.04,-.07,-.01,-.11,-.12,-.10,-.17,-.15,-.05
1915,-.13,.03,.05,.06,-.09,-.29,-.13,-.27,-.19,-.21,-.22,-.18,-.13,-.12,-.04,.01,-.23,-.21
1916,-.15,-.12,-.17,-.26,-.33,-.48,-.40,-.20,-.24,-.33,-.48,-.51,-.31,-.28,-.15,-.25,-.36,-.35
1917,-.63,-.58,-.53,-.47,-.38,-.39,-.18,-.06,-.16,-.27,-.36,-.29,-.36,-.38,-.58,-.46,-.21,-.26
1918,-.27,-.23,-.25,-.30,-.37,-.28,-.28,-.27,-.09,-.06,.02,.00,-.20,-.22,-.26,-.31,-.28,-.04
1919,.00,-.05,-.02,-.01,-.13,-.32,-.25,-.37,-.31,-.30,-.34,-.28,-.20,-.18,-.02,-.06,-.31,-.32
1920,-.33,-.23,-.24,-.27,-.32,-.44,-.34,-.20,-.08,-.12,-.08,-.20,-.24,-.24,-.28,-.28,-.33,-.09
1921,-.28,-.27,-.36,-.43,-.35,-.38,-.25,-.22,-.19,-.04,-.16,-.21,-.26,-.26,-.25,-.38,-.28,-.13
1922,-.27,-.24,-.18,-.30,-.47,-.45,-.27,-.29,-.28,-.33,-.16,-.23,-.29,-.29,-.24,-.31,-.34,-.26
1923,-.37,-.31,-.28,-.28,-.27,-.34,-.32,-.38,-.43,-.31,-.19,-.16,-.30,-.31,-.30,-.28,-.34,-.31
1924,-.15,-.24,-.17,-.33,-.29,-.32,-.34,-.45,-.41,-.46,-.52,-.50,-.35,-.32,-.19,-.26,-.37,-.46
1925,-.50,-.42,-.32,-.35,-.36,-.38,-.26,-.20,-.33,-.23,-.10,-.08,-.29,-.33,-.47,-.34,-.28,-.22
1926,-.10,-.11,-.13,-.11,-.21,-.29,-.33,-.19,-.23,-.27,-.28,-.28,-.21,-.20,-.10,-.15,-.27,-.26
1927,-.25,-.27,-.29,-.34,-.37,-.40,-.29,-.31,-.27,-.24,-.19,-.26,-.29,-.29,-.26,-.33,-.33,-.23
1928,-.28,-.26,-.25,-.23,-.41,-.44,-.28,-.25,-.26,-.28,-.22,-.28,-.29,-.28,-.27,-.30,-.32,-.25
1929,-.33,-.36,-.46,-.47,-.48,-.47,-.37,-.44,-.30,-.26,-.18,-.41,-.38,-.37,-.32,-.47,-.43,-.25
1930,-.46,-.33,-.32,-.33,-.28,-.31,-.36,-.29,-.27,-.23,-.07,-.16,-.29,-.31,-.40,-.31,-.32,-.19
1931,-.18,-.15,-.12,-.22,-.22,-.29,-.13,-.15,-.28,-.24,-.36,-.19,-.21,-.21,-.16,-.18,-.19,-.29
1932,-.08,-.14,-.15,-.20,-.23,-.41,-.33,-.34,-.30,-.30,-.21,-.29,-.25,-.24,-.14,-.19,-.36,-.27
1933,-.26,-.27,-.26,-.31,-.31,-.36,-.29,-.32,-.31,-.32,-.37,-.35,-.31,-.31,-.27,-.29,-.32,-.33
1934,-.29,-.39,-.31,-.33,-.27,-.27,-.17,-.15,-.16,-.25,-.19,-.22,-.25,-.26,-.34,-.30,-.19,-.20
1935,-.26,-.29,-.31,-.38,-.28,-.38,-.37,-.36,-.34,-.21,-.18,-.16,-.29,-.30,-.26,-.32,-.37,-.24
1936,-.25,-.23,-.28,-.33,-.30,-.47,-.27,-.28,-.24,-.12,-.11,-.16,-.25,-.25,-.21,-.31,-.34,-.16
1937,-.23,-.17,-.17,-.24,-.22,-.23,-.20,-.11,-.10,-.15,-.07,-.13,-.17,-.17,-.19,-.21,-.18,-.10
1938,-.19,-.21,-.15,-.19,-.22,-.28,-.18,-.21,-.15,-.04,-.17,-.13,-.18,-.18,-.18,-.19,-.22,-.12
1939,-.14,-.13,-.11,-.12,-.10,-.13,-.15,-.18,-.26,-.14,-.10,.10,-.12,-.14,-.13,-.11,-.15,-.17
1940,.12,.04,.17,.08,.07,.07,.10,.09,.07,-.03,.06,.30,.10,.08,.09,.11,.09,.04
1941,.20,.17,.10,.23,.14,.08,.21,.14,-.03,.23,.29,.26,.17,.17,.22,.16,.14,.17
1942,.19,.14,.12,.10,.06,.00,.01,.00,-.16,-.25,-.08,-.04,.01,.03,.20,.10,.01,-.16
1943,.07,-.04,-.07,-.10,-.10,-.04,.18,-.08,-.04,.00,.03,.08,-.01,-.02,.00,-.09,.02,.00
1944,.08,.05,.21,.21,.14,.17,.23,.22,.20,.09,.03,.09,.14,.14,.07,.19,.21,.11
1945,.10,.08,.03,.09,.04,-.06,.02,.24,.22,.14,.08,.09,.09,.09,.09,.06,.07,.14
1946,-.03,-.02,-.08,-.20,-.16,-.37,-.21,-.31,-.12,-.17,-.17,-.15,-.17,-.15,.01,-.15,-.29,-.15
1947,-.07,-.11,-.15,-.10,-.09,-.03,-.05,-.10,-.24,-.26,-.15,-.21,-.13,-.12,-.11,-.12,-.06,-.21
1948,-.17,-.14,-.20,-.20,-.17,-.15,-.23,-.26,-.27,-.18,-.28,-.08,-.19,-.21,-.17,-.19,-.21,-.24
1949,-.10,-.19,-.08,-.19,-.20,-.34,-.15,-.21,-.19,-.20,-.25,-.22,-.19,-.18,-.12,-.15,-.23,-.21
1950,-.23,-.26,-.21,-.20,-.19,-.06,.00,-.13,-.15,-.35,-.35,-.32,-.20,-.20,-.24,-.20,-.06,-.28
1951,-.33,-.32,-.22,-.35,-.18,-.11,-.09,-.10,-.21,-.11,-.08,-.05,-.18,-.20,-.32,-.25,-.10,-.13
1952,.07,.06,.07,-.10,-.19,-.22,-.05,.02,.00,.01,-.05,-.03,-.03,-.04,.03,-.07,-.08,-.01
1953,-.08,-.07,-.02,-.02,-.01,-.01,-.19,-.07,-.08,-.10,-.12,-.12,-.07,-.07,-.06,-.02,-.09,-.10
1954,-.23,-.19,-.12,-.27,-.33,-.34,-.28,-.34,-.29,-.18,-.20,-.27,-.25,-.24,-.18,-.24,-.32,-.22
1955,-.17,-.19,-.22,-.22,-.28,-.19,-.19,-.05,-.22,-.24,-.19,-.29,-.20,-.20,-.21,-.24,-.14,-.22
1956,-.22,-.17,-.19,-.30,-.29,-.13,.00,-.24,-.08,-.19,-.05,-.03,-.16,-.18,-.23,-.26,-.12,-.11
1957,-.05,-.02,.00,.09,.23,.19,-.06,.14,.05,-.03,.04,.06,.05,.05,-.03,.11,.09,.02
1958,.09,.16,.02,.01,.00,-.20,.06,-.22,-.11,.00,.02,-.15,-.03,-.01,.11,.01,-.12,-.03
1959,-.08,-.02,.02,.09,.05,-.08,.02,-.11,-.25,-.10,-.18,-.10,-.06,-.06,-.09,.06,-.06,-.17
1960,-.16,-.16,-.29,-.17,-.19,-.26,-.16,-.07,.02,.06,-.14,-.02,-.13,-.13,-.14,-.22,-.16,-.02
1961,-.03,.08,-.04,.12,.17,.05,-.04,-.04,.19,.03,-.01,-.15,.03,.04,.01,.09,-.01,.07
1962,-.17,-.07,-.09,-.13,-.15,.19,-.06,-.06,.03,-.10,.00,-.15,-.06,-.06,-.13,-.12,.02,-.02
1963,-.14,-.14,-.16,-.18,-.07,.13,.02,.30,.22,-.12,-.12,-.08,-.03,-.03,-.14,-.14,.15,.00
1964,-.13,-.17,-.10,-.32,-.39,.01,.04,-.20,-.31,-.32,-.21,-.33,-.20,-.18,-.13,-.27,-.05,-.28
1965,-.14,.02,-.16,-.12,-.10,.04,-.08,.12,-.09,-.08,-.15,-.07,-.07,-.09,-.15,-.13,.03,-.11
1966,-.13,-.12,.07,-.04,-.19,-.04,.06,-.30,-.12,-.23,-.03,-.02,-.09,-.09,-.10,-.05,-.09,-.13
1967,.03,-.04,-.14,-.15,.04,-.10,-.01,-.06,-.10,-.13,-.14,-.13,-.08,-.07,-.01,-.08,-.05,-.12
1968,-.24,-.13,-.05,-.11,-.23,-.14,-.17,-.09,-.32,.18,.12,.05,-.09,-.11,-.16,-.13,-.13,.00
1969,.22,.11,.22,.31,.26,.11,-.13,.03,.13,.17,.10,.19,.14,.13,.13,.26,.01,.13
1970,.20,.17,.19,.13,-.06,-.06,.07,-.15,.27,.25,.02,.06,.09,.10,.18,.09,-.05,.18
1971,.09,-.10,-.08,.06,.01,-.20,-.03,.13,.02,.06,-.13,-.04,-.02,-.01,.02,.00,-.03,-.02
1972,.10,.17,.04,.12,.09,.18,.08,.40,.30,.20,.25,.41,.20,.16,.07,.08,.22,.25
1973,.43,.21,.26,.36,.36,.21,.22,.08,.26,.27,.18,-.10,.23,.27,.35,.33,.17,.23
1974,.05,-.18,-.14,-.13,.11,.08,.07,.31,.01,.11,.05,.10,.03,.02,-.08,-.05,.15,.05
1975,.03,.06,.14,.02,.32,.05,.05,-.20,.02,-.06,-.05,-.13,.02,.04,.06,.16,-.03,-.03
1976,-.12,-.01,-.12,-.17,-.15,-.05,.07,-.03,-.01,.04,.21,.47,.01,-.04,-.09,-.15,.00,.08
1977,.52,.34,.22,.27,.42,.31,.32,.33,-.08,.09,.06,.04,.24,.27,.44,.31,.32,.02
1978,-.03,.16,.17,.26,.24,.11,.16,-.12,.12,.06,.11,.14,.11,.11,.06,.22,.05,.10
1979,.22,.16,.20,.47,.07,.20,.03,.30,.31,.29,.33,.41,.25,.23,.17,.25,.18,.31
1980,.39,.38,.52,.46,.45,.23,.31,.28,.31,.15,.38,.34,.35,.35,.39,.48,.27,.28
1981,.25,.22,.28,.26,.31,.30,.54,.53,.16,.02,.11,.28,.27,.28,.27,.28,.46,.10
1982,.24,.15,.01,.13,.27,.11,.25,.15,.23,.27,.47,.48,.23,.21,.22,.13,.17,.32
1983,.51,.51,.41,.50,.63,.35,.18,.46,.49,.22,.12,.23,.38,.40,.50,.51,.33,.28
1984,.29,.26,.35,.19,.42,-.03,.29,.33,.46,.19,.23,.34,.28,.27,.26,.32,.20,.29
1985,.37,.22,.35,.27,.20,.29,.15,.34,.23,.21,.08,.12,.24,.25,.31,.27,.26,.17
1986,.16,.42,.34,.30,.23,.10,.24,.27,.09,.22,.17,.21,.23,.22,.23,.29,.21,.16
1987,.39,.36,.37,.42,.29,.53,.56,.24,.33,.44,.49,.43,.41,.39,.32,.36,.45,.42
1988,.54,.43,.56,.42,.45,.40,.24,.52,.46,.51,.18,.15,.41,.43,.47,.48,.39,.39
1989,.16,.19,.25,.26,.12,.10,.36,.40,.45,.33,.28,.40,.28,.25,.17,.21,.28,.35
1990,.35,.33,.42,.42,.41,.28,.58,.28,.05,.41,.47,.43,.37,.37,.36,.42,.38,.31
1991,.26,.43,.25,.46,.36,.59,.52,.43,.52,.29,.27,.44,.40,.40,.37,.36,.51,.36
1992,.34,.30,.41,.39,.44,.47,.27,.23,.17,.29,.14,.22,.31,.33,.36,.42,.33,.20
1993,.30,.21,.34,.32,.25,.24,.38,.20,.30,.34,.29,.15,.28,.28,.24,.30,.27,.31
1994,.19,.10,.09,.34,.17,.45,.27,.11,.31,.30,.39,.41,.26,.24,.15,.20,.28,.33
1995,.29,.38,.34,.22,.13,.36,.54,.37,.25,.35,.32,.24,.32,.33,.36,.23,.42,.30
1996,.22,.37,.33,.48,.20,.26,.44,.77,.45,.34,.41,.39,.39,.38,.28,.34,.49,.40
1997,.25,.21,.28,.18,.27,.60,.27,.36,.54,.59,.70,.68,.41,.39,.28,.24,.41,.61
1998,.55,.72,.54,.40,.70,.82,.58,.59,.24,.30,.38,.35,.51,.54,.65,.55,.66,.30
1999,.37,.27,.36,.10,.16,.37,.41,.33,.36,.28,.21,.16,.28,.30,.33,.21,.37,.28
2000,.11,.22,.26,.24,.17,.36,.36,.38,.41,.25,.41,.29,.29,.28,.16,.22,.36,.36
2001,.34,.42,.35,.41,.46,.52,.55,.31,.47,.41,.47,.46,.43,.42,.35,.41,.46,.45
2002,.52,.42,.64,.66,.77,.39,.56,.51,.63,.55,.40,.47,.54,.54,.47,.69,.49,.53
2003,.57,.60,.53,.49,.50,.42,.48,.43,.47,.48,.41,.52,.49,.49,.55,.51,.45,.45
2004,.50,.53,.40,.52,.22,.40,.04,.37,.41,.51,.47,.57,.41,.41,.52,.38,.27,.46
2005,.54,.48,.54,.42,.49,.50,.48,.52,.52,.55,.42,.52,.50,.50,.53,.48,.50,.50
2006,.47,.51,.48,.34,.20,.50,.39,.73,.48,.44,.53,.43,.46,.47,.50,.34,.54,.48
2007,.58,.50,.49,.44,.66,.57,.54,.47,.52,.34,.36,.22,.47,.49,.50,.53,.53,.41
2008,.27,.16,.34,.42,.38,.36,.59,.34,.65,.49,.41,.43,.40,.39,.22,.38,.43,.52
2009,.46,.36,.48,.52,.65,.62,.79,.66,.59,.52,.75,.69,.59,.57,.42,.55,.69,.62
2010,.70,.73,.74,.56,.58,.52,.38,.48,.56,.52,.42,.39,.55,.57,.70,.63,.46,.50
2011,.42,.40,.42,.45,.41,.49,.68,.77,.40,.41,.51,.32,.47,.48,.41,.43,.65,.44
2012,.30,.40,.44,.38,.60,.36,.32,.55,.59,.68,.60,.61,.48,.46,.34,.47,.41,.62
2013,.57,.46,.53,.40,.44,.61,.51,.64,.83,.55,.54,.56,.55,.56,.55,.46,.59,.64
2014,.54,.38,.35,.51,.82,.54,.40,.75,.91,.69,.54,.47,.58,.58,.49,.56,.56,.71
2015,.53,.61,.59,.50,.56,.58,.56,.61,.55,.91,.76,.80,.63,.60,.54,.55,.58,.74
2016,.80,.79,.81,.74,.80,.50,.66,.92,.60,.75,.72,.69,.73,.74,.80,.78,.70,.69
2017,.66,.75,.80,.69,.91,.52,.68,.73,.54,.75,.54,.48,.67,.69,.70,.80,.64,.61
2018,.49,.45,.59,.81,.63,.69,.75,.67,.65,.80,.68,.74,.66,.64,.47,.68,.70,.71
2019,.66,.78,.78,.78,.72,.63,.86,.81,.65,.73,.79,.79,.75,.74,.73,.76,.77,.72
2020,.76,.77,.67,.86,.76,.72,.70,.64,.78,.57,.60,.40,.69,.72,.77,.76,.69,.65
2021,.36,.32,.57,.38,.53,.48,.77,.62,.79,.69,.56,.57,.55,.54,.36,.49,.62,.68
2022,.57,.61,.67,.58,.67,.72,.81,.73,.63,.62,.36,.52,.62,.63,.58,.64,.75,.54
2023,.44,.62,.80,***,***,***,***,***,***,***,***,***,***,***,.53,***,***,***
`,Zn={},ne={showcaseCSV:void 0,radio:Vi.GLOBAL,view:{dark_theme:LC(),meshVisible:!1,facesVisible:!0,radialSegments:8,radius:1,radiusFactor:.9,tubularSegments:30},capture:{},imprint:()=>qi.dispatchEvent(Le.SHOW_IMPRINT)};function LC(){return window.matchMedia("(prefers-color-scheme: dark)").matches}var ji,fn,oi;const nt=class{constructor(){Qe(this,ji,void 0);Qe(this,fn,void 0);Qe(this,oi,void 0);this.gui=new vo,this.gui.domElement.id="gui",this.createShowcaseFolder(),this.createViewFolder(),this.createCaptureFolder(),this.createImprint(),this.createShowHideListener()}static addRadioButtonsFolder(A,e,t,i,r=(s,a,o)=>{}){const s=A.addFolder(e);return nt.addRadioButtons(s,t,i,r),s}static addRadioButtons(A,e,t,i=(r,s,a)=>{}){const r={};Object.entries(t).forEach(s=>{const[a,o]=s,l=`option_${a}`;r[l]=e===a}),Object.keys(t).forEach(s=>{const a=`option_${s}`;A.add(r,a).name(s).listen().onChange(()=>{for(let o in r)r[o]=a===o;i(r,a,s)})})}createShowHideListener(){window.addEventListener("keydown",A=>{(A.key==="h"||A.key==="H")&&(JA(this,oi)?this.gui.show():this.gui.hide(),Ce(this,oi,!JA(this,oi)))})}createShowcaseFolder(){Zn[Vi.GLOBAL]=TC,Zn[Vi.NORTHERN_HEMISSPHERE]=QC,Zn[Vi.SOUTHERN_HEMISSPHERE]=IC,Ce(this,fn,nt.addRadioButtonsFolder(this.gui,`Showcase: ${ne.radio}`,ne.radio,Zn,(A,e,t)=>{ne.showcaseCSV=Zn[t],nt.dispatchEvent(Le.CREATE_HELIX),JA(this,fn).title(`Showcase: ${t}`),JA(this,fn).close()})),ne.showcaseCSV=Zn[ne.radio],JA(this,fn).close()}createViewFolder(){const A=this.gui.addFolder("View");A.add(ne.view,"dark_theme").name("Dark theme").onChange(()=>nt.dispatchEvent(Le.CHANGE_THEME)),A.add(ne.view,"meshVisible").name("Wireframe").onChange(()=>nt.dispatchEvent(Le.CREATE_HELIX)),A.add(ne.view,"facesVisible").name("Faces").onChange(()=>nt.dispatchEvent(Le.CREATE_HELIX)),A.add(ne.view,"tubularSegments").min(1).max(31).step(1).name("Monthly Segments").onChange(()=>nt.dispatchEvent(Le.CREATE_HELIX)),A.add(ne.view,"radialSegments").min(3).max(32).step(1).name("Radius Segments").onChange(()=>nt.dispatchEvent(Le.CREATE_HELIX)),A.add(ne.view,"radiusFactor").min(.1).max(3).name("Radius Factor").onChange(()=>nt.dispatchEvent(Le.CREATE_HELIX)),A.close()}createCaptureFolder(){const A=this.gui.addFolder("Screen capture");A.close(),Ce(this,ji,A)}createImprint(){new bC().isAvailable().then(t=>{t&&this.gui.add(ne,"imprint").name("Imprint")})}static dispatchEvent(A){const e=new Event(A.toString(),{bubbles:!0});document.body.dispatchEvent(e)}onThemeChange(A){const e=this.inverseTheme,t=this.theme;A.classList.contains(e)&&A.classList.remove(e),A.classList.add(t)}get showcaseCSV(){return ne.showcaseCSV}get radialSegments(){return Math.floor(ne.view.radialSegments)}get radiusFactor(){return ne.view.radiusFactor}get tubularSegments(){return Math.floor(ne.view.tubularSegments)}get showFaces(){return ne.view.facesVisible}get showWireframe(){return ne.view.meshVisible}get theme(){return ne.view.dark_theme?"dark":"light"}get inverseTheme(){return ne.view.dark_theme?"light":"dark"}captureSettings(){return{folder:JA(this,ji),property:ne.capture}}};let qi=nt;ji=new WeakMap,fn=new WeakMap,oi=new WeakMap;const qc={type:"change"},La={type:"start"},jc={type:"end"};class RC extends Un{constructor(A,e){super(),this.object=A,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Fn.ROTATE,MIDDLE:Fn.DOLLY,RIGHT:Fn.PAN},this.touches={ONE:Mn.ROTATE,TWO:Mn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(y){y.addEventListener("keydown",XA),this._domElementKeyEvents=y},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",XA),this._domElementKeyEvents=null},this.saveState=function(){t.target0.copy(t.target),t.position0.copy(t.object.position),t.zoom0=t.object.zoom},this.reset=function(){t.target.copy(t.target0),t.object.position.copy(t.position0),t.object.zoom=t.zoom0,t.object.updateProjectionMatrix(),t.dispatchEvent(qc),t.update(),r=i.NONE},this.update=function(){const y=new L,Z=new En().setFromUnitVectors(A.up,new L(0,1,0)),P=Z.clone().invert(),lA=new L,dA=new En,mA=2*Math.PI;return function(){const gA=t.object.position;y.copy(gA).sub(t.target),y.applyQuaternion(Z),a.setFromVector3(y),t.autoRotate&&r===i.NONE&&B(S()),t.enableDamping?(a.theta+=o.theta*t.dampingFactor,a.phi+=o.phi*t.dampingFactor):(a.theta+=o.theta,a.phi+=o.phi);let UA=t.minAzimuthAngle,TA=t.maxAzimuthAngle;return isFinite(UA)&&isFinite(TA)&&(UA<-Math.PI?UA+=mA:UA>Math.PI&&(UA-=mA),TA<-Math.PI?TA+=mA:TA>Math.PI&&(TA-=mA),UA<=TA?a.theta=Math.max(UA,Math.min(TA,a.theta)):a.theta=a.theta>(UA+TA)/2?Math.max(UA,a.theta):Math.min(TA,a.theta)),a.phi=Math.max(t.minPolarAngle,Math.min(t.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=l,a.radius=Math.max(t.minDistance,Math.min(t.maxDistance,a.radius)),t.enableDamping===!0?t.target.addScaledVector(c,t.dampingFactor):t.target.add(c),y.setFromSpherical(a),y.applyQuaternion(P),gA.copy(t.target).add(y),t.object.lookAt(t.target),t.enableDamping===!0?(o.theta*=1-t.dampingFactor,o.phi*=1-t.dampingFactor,c.multiplyScalar(1-t.dampingFactor)):(o.set(0,0,0),c.set(0,0,0)),l=1,u||lA.distanceToSquared(t.object.position)>s||8*(1-dA.dot(t.object.quaternion))>s?(t.dispatchEvent(qc),lA.copy(t.object.position),dA.copy(t.object.quaternion),u=!1,!0):!1}}(),this.dispose=function(){t.domElement.removeEventListener("contextmenu",v),t.domElement.removeEventListener("pointerdown",yA),t.domElement.removeEventListener("pointercancel",qA),t.domElement.removeEventListener("wheel",OA),t.domElement.removeEventListener("pointermove",jA),t.domElement.removeEventListener("pointerup",qA),t._domElementKeyEvents!==null&&(t._domElementKeyEvents.removeEventListener("keydown",XA),t._domElementKeyEvents=null)};const t=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const s=1e-6,a=new Jl,o=new Jl;let l=1;const c=new L;let u=!1;const h=new LA,d=new LA,g=new LA,m=new LA,p=new LA,f=new LA,_=new LA,E=new LA,x=new LA,w=[],U={};function S(){return 2*Math.PI/60/60*t.autoRotateSpeed}function R(){return Math.pow(.95,t.zoomSpeed)}function B(y){o.theta-=y}function M(y){o.phi-=y}const X=function(){const y=new L;return function(P,lA){y.setFromMatrixColumn(lA,0),y.multiplyScalar(-P),c.add(y)}}(),V=function(){const y=new L;return function(P,lA){t.screenSpacePanning===!0?y.setFromMatrixColumn(lA,1):(y.setFromMatrixColumn(lA,0),y.crossVectors(t.object.up,y)),y.multiplyScalar(P),c.add(y)}}(),Q=function(){const y=new L;return function(P,lA){const dA=t.domElement;if(t.object.isPerspectiveCamera){const mA=t.object.position;y.copy(mA).sub(t.target);let hA=y.length();hA*=Math.tan(t.object.fov/2*Math.PI/180),X(2*P*hA/dA.clientHeight,t.object.matrix),V(2*lA*hA/dA.clientHeight,t.object.matrix)}else t.object.isOrthographicCamera?(X(P*(t.object.right-t.object.left)/t.object.zoom/dA.clientWidth,t.object.matrix),V(lA*(t.object.top-t.object.bottom)/t.object.zoom/dA.clientHeight,t.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),t.enablePan=!1)}}();function D(y){t.object.isPerspectiveCamera?l/=y:t.object.isOrthographicCamera?(t.object.zoom=Math.max(t.minZoom,Math.min(t.maxZoom,t.object.zoom*y)),t.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),t.enableZoom=!1)}function N(y){t.object.isPerspectiveCamera?l*=y:t.object.isOrthographicCamera?(t.object.zoom=Math.max(t.minZoom,Math.min(t.maxZoom,t.object.zoom/y)),t.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),t.enableZoom=!1)}function q(y){h.set(y.clientX,y.clientY)}function K(y){_.set(y.clientX,y.clientY)}function W(y){m.set(y.clientX,y.clientY)}function $(y){d.set(y.clientX,y.clientY),g.subVectors(d,h).multiplyScalar(t.rotateSpeed);const Z=t.domElement;B(2*Math.PI*g.x/Z.clientHeight),M(2*Math.PI*g.y/Z.clientHeight),h.copy(d),t.update()}function j(y){E.set(y.clientX,y.clientY),x.subVectors(E,_),x.y>0?D(R()):x.y<0&&N(R()),_.copy(E),t.update()}function pA(y){p.set(y.clientX,y.clientY),f.subVectors(p,m).multiplyScalar(t.panSpeed),Q(f.x,f.y),m.copy(p),t.update()}function nA(y){y.deltaY<0?N(R()):y.deltaY>0&&D(R()),t.update()}function O(y){let Z=!1;switch(y.code){case t.keys.UP:y.ctrlKey||y.metaKey||y.shiftKey?M(2*Math.PI*t.rotateSpeed/t.domElement.clientHeight):Q(0,t.keyPanSpeed),Z=!0;break;case t.keys.BOTTOM:y.ctrlKey||y.metaKey||y.shiftKey?M(-2*Math.PI*t.rotateSpeed/t.domElement.clientHeight):Q(0,-t.keyPanSpeed),Z=!0;break;case t.keys.LEFT:y.ctrlKey||y.metaKey||y.shiftKey?B(2*Math.PI*t.rotateSpeed/t.domElement.clientHeight):Q(t.keyPanSpeed,0),Z=!0;break;case t.keys.RIGHT:y.ctrlKey||y.metaKey||y.shiftKey?B(-2*Math.PI*t.rotateSpeed/t.domElement.clientHeight):Q(-t.keyPanSpeed,0),Z=!0;break}Z&&(y.preventDefault(),t.update())}function J(){if(w.length===1)h.set(w[0].pageX,w[0].pageY);else{const y=.5*(w[0].pageX+w[1].pageX),Z=.5*(w[0].pageY+w[1].pageY);h.set(y,Z)}}function iA(){if(w.length===1)m.set(w[0].pageX,w[0].pageY);else{const y=.5*(w[0].pageX+w[1].pageX),Z=.5*(w[0].pageY+w[1].pageY);m.set(y,Z)}}function rA(){const y=w[0].pageX-w[1].pageX,Z=w[0].pageY-w[1].pageY,P=Math.sqrt(y*y+Z*Z);_.set(0,P)}function b(){t.enableZoom&&rA(),t.enablePan&&iA()}function xA(){t.enableZoom&&rA(),t.enableRotate&&J()}function EA(y){if(w.length==1)d.set(y.pageX,y.pageY);else{const P=oA(y),lA=.5*(y.pageX+P.x),dA=.5*(y.pageY+P.y);d.set(lA,dA)}g.subVectors(d,h).multiplyScalar(t.rotateSpeed);const Z=t.domElement;B(2*Math.PI*g.x/Z.clientHeight),M(2*Math.PI*g.y/Z.clientHeight),h.copy(d)}function sA(y){if(w.length===1)p.set(y.pageX,y.pageY);else{const Z=oA(y),P=.5*(y.pageX+Z.x),lA=.5*(y.pageY+Z.y);p.set(P,lA)}f.subVectors(p,m).multiplyScalar(t.panSpeed),Q(f.x,f.y),m.copy(p)}function _A(y){const Z=oA(y),P=y.pageX-Z.x,lA=y.pageY-Z.y,dA=Math.sqrt(P*P+lA*lA);E.set(0,dA),x.set(0,Math.pow(E.y/_.y,t.zoomSpeed)),D(x.y),_.copy(E)}function NA(y){t.enableZoom&&_A(y),t.enablePan&&sA(y)}function wA(y){t.enableZoom&&_A(y),t.enableRotate&&EA(y)}function yA(y){t.enabled!==!1&&(w.length===0&&(t.domElement.setPointerCapture(y.pointerId),t.domElement.addEventListener("pointermove",jA),t.domElement.addEventListener("pointerup",qA)),G(y),y.pointerType==="touch"?ve(y):re(y))}function jA(y){t.enabled!==!1&&(y.pointerType==="touch"?F(y):$A(y))}function qA(y){AA(y),w.length===0&&(t.domElement.releasePointerCapture(y.pointerId),t.domElement.removeEventListener("pointermove",jA),t.domElement.removeEventListener("pointerup",qA)),t.dispatchEvent(jc),r=i.NONE}function re(y){let Z;switch(y.button){case 0:Z=t.mouseButtons.LEFT;break;case 1:Z=t.mouseButtons.MIDDLE;break;case 2:Z=t.mouseButtons.RIGHT;break;default:Z=-1}switch(Z){case Fn.DOLLY:if(t.enableZoom===!1)return;K(y),r=i.DOLLY;break;case Fn.ROTATE:if(y.ctrlKey||y.metaKey||y.shiftKey){if(t.enablePan===!1)return;W(y),r=i.PAN}else{if(t.enableRotate===!1)return;q(y),r=i.ROTATE}break;case Fn.PAN:if(y.ctrlKey||y.metaKey||y.shiftKey){if(t.enableRotate===!1)return;q(y),r=i.ROTATE}else{if(t.enablePan===!1)return;W(y),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&t.dispatchEvent(La)}function $A(y){switch(r){case i.ROTATE:if(t.enableRotate===!1)return;$(y);break;case i.DOLLY:if(t.enableZoom===!1)return;j(y);break;case i.PAN:if(t.enablePan===!1)return;pA(y);break}}function OA(y){t.enabled===!1||t.enableZoom===!1||r!==i.NONE||(y.preventDefault(),t.dispatchEvent(La),nA(y),t.dispatchEvent(jc))}function XA(y){t.enabled===!1||t.enablePan===!1||O(y)}function ve(y){switch(tA(y),w.length){case 1:switch(t.touches.ONE){case Mn.ROTATE:if(t.enableRotate===!1)return;J(),r=i.TOUCH_ROTATE;break;case Mn.PAN:if(t.enablePan===!1)return;iA(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(t.touches.TWO){case Mn.DOLLY_PAN:if(t.enableZoom===!1&&t.enablePan===!1)return;b(),r=i.TOUCH_DOLLY_PAN;break;case Mn.DOLLY_ROTATE:if(t.enableZoom===!1&&t.enableRotate===!1)return;xA(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&t.dispatchEvent(La)}function F(y){switch(tA(y),r){case i.TOUCH_ROTATE:if(t.enableRotate===!1)return;EA(y),t.update();break;case i.TOUCH_PAN:if(t.enablePan===!1)return;sA(y),t.update();break;case i.TOUCH_DOLLY_PAN:if(t.enableZoom===!1&&t.enablePan===!1)return;NA(y),t.update();break;case i.TOUCH_DOLLY_ROTATE:if(t.enableZoom===!1&&t.enableRotate===!1)return;wA(y),t.update();break;default:r=i.NONE}}function v(y){t.enabled!==!1&&y.preventDefault()}function G(y){w.push(y)}function AA(y){delete U[y.pointerId];for(let Z=0;Z<w.length;Z++)if(w[Z].pointerId==y.pointerId){w.splice(Z,1);return}}function tA(y){let Z=U[y.pointerId];Z===void 0&&(Z=new LA,U[y.pointerId]=Z),Z.set(y.pageX,y.pageY)}function oA(y){const Z=y.pointerId===w[0].pointerId?w[1]:w[0];return U[Z.pointerId]}t.domElement.addEventListener("contextmenu",v),t.domElement.addEventListener("pointerdown",yA),t.domElement.addEventListener("pointercancel",qA),t.domElement.addEventListener("wheel",OA,{passive:!1}),this.update()}}class HC{constructor(A,e=0,t=!0){if(A){const{header:i,rows:r}=this.extract(A,e,t);this.header=i,this.rows=r}}extract(A,e,t){let i=A.toString().split(/\r?\n/).slice(e),r;t&&(r=i[0].split(","));const s=i[i.length-1]===""?i.length-1:i.length;return{header:r,rows:i.slice(1,s)}}get columnCount(){return this.header?this.header.length:this.rows[0].length}get rowCount(){return this.rows.length}getNumber(A,e){const t=this.rows[A];return parseFloat(t.split(",")[e])}}class yo extends Zt{constructor(A,e=30,t=1,i=8,r=!1){super(),this.type="HelixGeometry",this.parameters={path:A,tubularSegments:e,radius:t,radialSegments:i,closed:r};const s=A.computeFrenetFrames(e,r);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;const a=new L,o=new L,l=new LA;let c=new L;const u=[],h=[],d=[],g=[],m=[];p(),this.setIndex(g),this.setAttribute("position",new at(u,3)),this.setAttribute("normal",new at(h,3)),this.setAttribute("uv",new at(d,2)),this.setAttribute("vColors",new at(m,3));function p(){for(let x=0;x<e;x++)f(x);f(r===!1?e:0),E(),_()}function f(x){const w=A.getUtoTmapping(x/e);c=A.getPoint(w,c);const U=A.getColor(w),S=s.normals[x],R=s.binormals[x];for(let B=0;B<=i;B++){const M=B/i*Math.PI*2,X=Math.sin(M),V=-Math.cos(M);o.x=V*S.x+X*R.x,o.y=V*S.y+X*R.y,o.z=V*S.z+X*R.z,o.normalize(),h.push(o.x,o.y,o.z),a.x=c.x+t*o.x,a.y=c.y+t*o.y,a.z=c.z+t*o.z,u.push(a.x,a.y,a.z),m.push(U.r,U.g,U.b)}}function _(){for(let x=1;x<=e;x++)for(let w=1;w<=i;w++){const U=(i+1)*(x-1)+(w-1),S=(i+1)*x+(w-1),R=(i+1)*x+w,B=(i+1)*(x-1)+w;g.push(U,S,B),g.push(S,R,B)}}function E(){for(let x=0;x<=e;x++)for(let w=0;w<=i;w++)l.x=x/e,l.y=w/i,d.push(l.x,l.y)}}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}toJSON(){const A=super.toJSON();return A.path=this.parameters.path.toJSON(),A}static fromJSON(A){return new yo(new Curves[A.path.type]().fromJSON(A.path),A.tubularSegments,A.radius,A.radialSegments,A.closed)}}const fo=12,bh=[],Th=[];var $i,Ar,dn,er;class DC{constructor(A,e=-1,t=1.5,i=.4,r=1,s=2.5){Qe(this,$i,void 0);Qe(this,Ar,void 0);Qe(this,dn,void 0);Qe(this,er,void 0);this.settings=A,this.csv=new HC(A.showcaseCSV),this.helix={minT:e,maxT:t,minR:i,maxR:r,height:s},Ce(this,Ar,this.styledColorByTemp("cold")),Ce(this,dn,this.styledColorByTemp("zero")),Ce(this,er,this.styledColorByTemp("warm"))}createMesh(A={wireframe:!1,vertexColors:!0}){this.curve=[],this.years=this.csv.rowCount;for(let t=0;t<this.years;t++)for(let i=0;i<12;i++){const r=this.helixPoint(t,i);r&&this.curve.push(r)}this.settings.radiusFactor*this.helix.height/this.years;const e=this.createGeometry();return Ce(this,$i,new St(e,OC(A))),JA(this,$i)}createGeometry(){const A=this.settings.radiusFactor*this.helix.height/this.years,e=new yo(new PC(this),this.settings.tubularSegments*(this.curve.length-1),A,this.settings.radialSegments,!1),t=e.getAttribute("vColors"),i=new ot(new Float32Array(t.array),3);return e.setAttribute("color",i),e}helixPoint(A,e){const t=this.csv.getNumber(A,e+1);if(t){const i=Qh(this.helix.minT,this.helix.maxT,this.helix.minR,this.helix.maxR,t),r=new KA;return console.log(JA(this,dn)),t<0?r.lerpColors(JA(this,dn),JA(this,Ar),Math.abs(t)):r.lerpColors(JA(this,dn),JA(this,er),t),{sinX:bh[e],cosX:Th[e],radius:i,temperature:t,color:r}}}styledColorByTemp(A){const t=window.getComputedStyle(document.body).getPropertyValue(`--${A}-color`);return console.log(t),new KA(t)}get height(){return this.helix.height}get length(){return this.curve.length/fo}curveIndex(A){return Math.floor((this.curve.length-1)*A)}info(A){return this.curve[this.curveIndex(A)]}}$i=new WeakMap,Ar=new WeakMap,dn=new WeakMap,er=new WeakMap;class PC extends km{constructor(A){super(),this.helix=A,this.type="HelixCurve"}getPoint(A,e=new L){const t=2*Math.PI*this.helix.length*A,i=this.helix.curveIndex(A),r=this.helix.curve[i],s=this.helix.curve[i+1]||r,a=i/(this.helix.curve.length-1),o=(i+1)/(this.helix.curve.length-1),l=Qh(a,o,r.radius,s.radius,A),c=l*Math.cos(t),u=l*Math.sin(t),h=this.helix.height*A;return e.set(c,u,h)}getColor(A){const e=this.helix.curveIndex(A),t=this.helix.curve[e],i=this.helix.curve[e+1]||t,r=e/(this.helix.curve.length-1),s=(e+1)/(this.helix.curve.length-1);return new KA().lerpColors(t.color,i.color,(A-r)/(s-r))}}for(let n=0;n<fo;n++){const A=2*Math.PI*n/fo;bh.push(Math.sin(A)),Th.push(Math.cos(A))}function Qh(n,A,e,t,i){return A-n===0?(e+t)/2:(i-n)*(t-e)/(A-n)+e}function OC(n={wireframe:!1,vertexColors:!0}){return new mo(n)}HTMLCanvasElement.prototype.getContext=function(n){return function(A,e){return e=e||{},e.preserveDrawingBuffer=!0,n.call(this,A,e)}}(HTMLCanvasElement.prototype.getContext);var li,ci,pn,gs,Ih;class NC{constructor(A,e={All:void 0,Helix:void 0}){Qe(this,gs);Qe(this,li,void 0);Qe(this,ci,void 0);Qe(this,pn,void 0);Ce(this,li,()=>document.body),Qo(this,gs,Ih).call(this,A,e),document.addEventListener("keydown",t=>{t.ctrlKey&&t.key==="#"&&this.capture()})}capture(A=JA(this,li)){console.log(`screenCapture ${A}`);const e=A();if(!e)throw new Error("No element to capture");setTimeout(()=>{const i=window.getComputedStyle(document.body).getPropertyValue("background-color");Sh(e,{backgroundColor:i}).then(r=>{const s=document.createElement("a");s.href=r.toDataURL(),s.download="climate-helix.png",s.click()})},100)}}li=new WeakMap,ci=new WeakMap,pn=new WeakMap,gs=new WeakSet,Ih=function(A,e){const t={};Ce(this,ci,e);for(const[s,a]of Object.entries(e))t[s]=void 0;const i=A.folder,r=A.property;r.selection="All",Ce(this,pn,"All"),Ce(this,li,()=>(console.log(JA(this,pn)),console.log(JA(this,ci)),JA(this,ci)[JA(this,pn)])),r.on_capture_clicked=()=>this.capture(),qi.addRadioButtons(i,r.selection,t,(s,a,o)=>{console.log(`${s}, ${a}, ${o}`),Ce(this,pn,o)}),i.add(r,"on_capture_clicked").name("Click or press 's'")};const Ki=new qi;let ti,hn,ki,Gt,jr,$r;function GC(){ki=new Km,Gt=new Uu({antialias:!0}),Gt.setPixelRatio(window.devicePixelRatio),Gt.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(Gt.domElement),VC(),hn=new Xe(50,window.innerWidth/window.innerHeight),hn.position.set(0,0,5),ki.add(hn),ti=new yi,ki.add(ti),new RC(hn,Gt.domElement).update(),window.addEventListener("resize",KC),window.addEventListener(Le.CREATE_HELIX,Lh),document.body.addEventListener(Le.CHANGE_THEME.toString(),$c);const A={All:document.body,Helix:Gt.domElement};new NC(Ki.captureSettings(),A),$c(),Rh()}function VC(){let n=!1;const A=new MutationObserver(e=>{n&&e.forEach(t=>{const r=window.getComputedStyle(document.body).getPropertyValue("background-color");ki.background=new KA(r)})});return A.observe(document.body,{attributes:!0,attributeFilter:["class"]}),n=!0,A}function Lh(){jr&&ti.remove(jr),$r&&ti.remove($r);const n=new DC(Ki);Ki.showFaces&&(jr=n.createMesh(),ti.add(jr)),Ki.showWireframe&&($r=n.createMesh({wireframe:!0,vertexColors:!1}),ti.add($r))}function Rh(){requestAnimationFrame(Rh),Gt.render(ki,hn)}function $c(){Ki.onThemeChange(document.body),Lh()}function KC(){hn.aspect=window.innerWidth/window.innerHeight,hn.updateProjectionMatrix(),Gt.setSize(window.innerWidth,window.innerHeight)}GC();
