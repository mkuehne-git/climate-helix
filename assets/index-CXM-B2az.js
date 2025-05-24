var cc=n=>{throw TypeError(n)};var ma=(n,e,t)=>e.has(n)||cc("Cannot "+t);var me=(n,e,t)=>(ma(n,e,"read from private field"),t?t.call(n):e.get(n)),ct=(n,e,t)=>e.has(n)?cc("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t),At=(n,e,t,A)=>(ma(n,e,"write to private field"),A?A.call(n,t):e.set(n,t),t),hc=(n,e,t)=>(ma(n,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))A(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&A(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function A(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ll="170",Bi={ROTATE:0,DOLLY:1,PAN:2},di={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hd=0,uc=1,ud=2,gu=1,fd=2,LA=3,dn=0,Vt=1,DA=2,cn=0,wi=1,fc=2,dc=3,pc=4,dd=5,Sn=100,pd=101,gd=102,md=103,Bd=104,wd=200,vd=201,_d=202,Cd=203,Co=204,Eo=205,Ed=206,xd=207,Ud=208,yd=209,Sd=210,Md=211,Fd=212,bd=213,Td=214,xo=0,Uo=1,yo=2,bi=3,So=4,Mo=5,Fo=6,bo=7,mu=0,Qd=1,Id=2,hn=0,Ld=1,Rd=2,Dd=3,Hd=4,Pd=5,Nd=6,Od=7,Bu=300,Ti=301,Qi=302,To=303,Qo=304,ea=306,Io=1e3,bn=1001,Lo=1002,fA=1003,Gd=1004,Dr=1005,vA=1006,Ba=1007,Tn=1008,GA=1009,wu=1010,vu=1011,gr=1012,Rl=1013,On=1014,HA=1015,Mr=1016,Dl=1017,Hl=1018,Ii=1020,_u=35902,Cu=1021,Eu=1022,hA=1023,xu=1024,Uu=1025,vi=1026,Li=1027,yu=1028,Pl=1029,Su=1030,Nl=1031,Ol=1033,Fs=33776,bs=33777,Ts=33778,Qs=33779,Ro=35840,Do=35841,Ho=35842,Po=35843,No=36196,Oo=37492,Go=37496,Vo=37808,Ko=37809,ko=37810,zo=37811,Wo=37812,Xo=37813,Yo=37814,Jo=37815,Zo=37816,qo=37817,$o=37818,jo=37819,el=37820,tl=37821,Is=36492,Al=36494,nl=36495,Mu=36283,il=36284,rl=36285,sl=36286,Vd=3200,Kd=3201,kd=0,zd=1,nn="",jt="srgb",Hi="srgb-linear",ta="linear",je="srgb",zn=7680,gc=519,Wd=512,Xd=513,Yd=514,Fu=515,Jd=516,Zd=517,qd=518,$d=519,mc=35044,Bc="300 es",PA=2e3,Os=2001;class Kn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const A=this._listeners;A[e]===void 0&&(A[e]=[]),A[e].indexOf(t)===-1&&A[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const A=this._listeners;return A[e]!==void 0&&A[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const A=this._listeners[e.type];if(A!==void 0){e.target=this;const i=A.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,e);e.target=null}}}const Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ls=Math.PI/180,al=180/Math.PI;function Fr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,A=Math.random()*4294967295|0;return(Tt[n&255]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[A&255]+Tt[A>>8&255]+Tt[A>>16&255]+Tt[A>>24&255]).toLowerCase()}function Mt(n,e,t){return Math.max(e,Math.min(t,n))}function jd(n,e){return(n%e+e)%e}function wa(n,e,t){return(1-t)*n+t*e}function Vi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Nt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const ep={DEG2RAD:Ls};class De{constructor(e=0,t=0){De.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,A=this.y,i=e.elements;return this.x=i[0]*t+i[3]*A+i[6],this.y=i[1]*t+i[4]*A+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const A=this.length();return this.divideScalar(A||1).multiplyScalar(Math.max(e,Math.min(t,A)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const A=this.dot(e)/t;return Math.acos(Mt(A,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,A=this.y-e.y;return t*t+A*A}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,A){return this.x=e.x+(t.x-e.x)*A,this.y=e.y+(t.y-e.y)*A,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const A=Math.cos(t),i=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*A-s*i+e.x,this.y=r*i+s*A+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ie{constructor(e,t,A,i,r,s,a,o,l){Ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,A,i,r,s,a,o,l)}set(e,t,A,i,r,s,a,o,l){const c=this.elements;return c[0]=e,c[1]=i,c[2]=a,c[3]=t,c[4]=r,c[5]=o,c[6]=A,c[7]=s,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,A=e.elements;return t[0]=A[0],t[1]=A[1],t[2]=A[2],t[3]=A[3],t[4]=A[4],t[5]=A[5],t[6]=A[6],t[7]=A[7],t[8]=A[8],this}extractBasis(e,t,A){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),A.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const A=e.elements,i=t.elements,r=this.elements,s=A[0],a=A[3],o=A[6],l=A[1],c=A[4],h=A[7],u=A[2],d=A[5],g=A[8],m=i[0],p=i[3],f=i[6],E=i[1],U=i[4],v=i[7],b=i[2],y=i[5],S=i[8];return r[0]=s*m+a*E+o*b,r[3]=s*p+a*U+o*y,r[6]=s*f+a*v+o*S,r[1]=l*m+c*E+h*b,r[4]=l*p+c*U+h*y,r[7]=l*f+c*v+h*S,r[2]=u*m+d*E+g*b,r[5]=u*p+d*U+g*y,r[8]=u*f+d*v+g*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],A=e[1],i=e[2],r=e[3],s=e[4],a=e[5],o=e[6],l=e[7],c=e[8];return t*s*c-t*a*l-A*r*c+A*a*o+i*r*l-i*s*o}invert(){const e=this.elements,t=e[0],A=e[1],i=e[2],r=e[3],s=e[4],a=e[5],o=e[6],l=e[7],c=e[8],h=c*s-a*l,u=a*o-c*r,d=l*r-s*o,g=t*h+A*u+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=h*m,e[1]=(i*l-c*A)*m,e[2]=(a*A-i*s)*m,e[3]=u*m,e[4]=(c*t-i*o)*m,e[5]=(i*r-a*t)*m,e[6]=d*m,e[7]=(A*o-l*t)*m,e[8]=(s*t-A*r)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,A,i,r,s,a){const o=Math.cos(r),l=Math.sin(r);return this.set(A*o,A*l,-A*(o*s+l*a)+s+e,-i*l,i*o,-i*(-l*s+o*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(va.makeScale(e,t)),this}rotate(e){return this.premultiply(va.makeRotation(-e)),this}translate(e,t){return this.premultiply(va.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),A=Math.sin(e);return this.set(t,-A,0,A,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,A=e.elements;for(let i=0;i<9;i++)if(t[i]!==A[i])return!1;return!0}fromArray(e,t=0){for(let A=0;A<9;A++)this.elements[A]=e[A+t];return this}toArray(e=[],t=0){const A=this.elements;return e[t]=A[0],e[t+1]=A[1],e[t+2]=A[2],e[t+3]=A[3],e[t+4]=A[4],e[t+5]=A[5],e[t+6]=A[6],e[t+7]=A[7],e[t+8]=A[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const va=new Ie;function bu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Gs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function tp(){const n=Gs("canvas");return n.style.display="block",n}const wc={};function qi(n){n in wc||(wc[n]=!0,console.warn(n))}function Ap(n,e,t){return new Promise(function(A,i){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:i();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:A()}}setTimeout(r,t)})}function np(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ip(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const We={enabled:!0,workingColorSpace:Hi,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===je&&(n.r=NA(n.r),n.g=NA(n.g),n.b=NA(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===je&&(n.r=_i(n.r),n.g=_i(n.g),n.b=_i(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===nn?ta:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function NA(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function _i(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const vc=[.64,.33,.3,.6,.15,.06],_c=[.2126,.7152,.0722],Cc=[.3127,.329],Ec=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xc=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);We.define({[Hi]:{primaries:vc,whitePoint:Cc,transfer:ta,toXYZ:Ec,fromXYZ:xc,luminanceCoefficients:_c,workingColorSpaceConfig:{unpackColorSpace:jt},outputColorSpaceConfig:{drawingBufferColorSpace:jt}},[jt]:{primaries:vc,whitePoint:Cc,transfer:je,toXYZ:Ec,fromXYZ:xc,luminanceCoefficients:_c,outputColorSpaceConfig:{drawingBufferColorSpace:jt}}});let Wn;class rp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Wn===void 0&&(Wn=Gs("canvas")),Wn.width=e.width,Wn.height=e.height;const A=Wn.getContext("2d");e instanceof ImageData?A.putImageData(e,0,0):A.drawImage(e,0,0,e.width,e.height),t=Wn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Gs("canvas");t.width=e.width,t.height=e.height;const A=t.getContext("2d");A.drawImage(e,0,0,e.width,e.height);const i=A.getImageData(0,0,e.width,e.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=NA(r[s]/255)*255;return A.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let A=0;A<t.length;A++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[A]=Math.floor(NA(t[A]/255)*255):t[A]=NA(t[A]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sp=0;class Tu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=Fr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const A={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,a=i.length;s<a;s++)i[s].isDataTexture?r.push(_a(i[s].image)):r.push(_a(i[s]))}else r=_a(i);A.url=r}return t||(e.images[this.uuid]=A),A}}function _a(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?rp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ap=0;class Kt extends Kn{constructor(e=Kt.DEFAULT_IMAGE,t=Kt.DEFAULT_MAPPING,A=bn,i=bn,r=vA,s=Tn,a=hA,o=GA,l=Kt.DEFAULT_ANISOTROPY,c=nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=Fr(),this.name="",this.source=new Tu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=A,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=o,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const A={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(A.userData=this.userData),t||(e.textures[this.uuid]=A),A}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Io:e.x=e.x-Math.floor(e.x);break;case bn:e.x=e.x<0?0:1;break;case Lo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Io:e.y=e.y-Math.floor(e.y);break;case bn:e.y=e.y<0?0:1;break;case Lo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=Bu;Kt.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,A=0,i=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=A,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,A,i){return this.x=e,this.y=t,this.z=A,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,A=this.y,i=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*A+s[8]*i+s[12]*r,this.y=s[1]*t+s[5]*A+s[9]*i+s[13]*r,this.z=s[2]*t+s[6]*A+s[10]*i+s[14]*r,this.w=s[3]*t+s[7]*A+s[11]*i+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,A,i,r;const o=e.elements,l=o[0],c=o[4],h=o[8],u=o[1],d=o[5],g=o[9],m=o[2],p=o[6],f=o[10];if(Math.abs(c-u)<.01&&Math.abs(h-m)<.01&&Math.abs(g-p)<.01){if(Math.abs(c+u)<.1&&Math.abs(h+m)<.1&&Math.abs(g+p)<.1&&Math.abs(l+d+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const U=(l+1)/2,v=(d+1)/2,b=(f+1)/2,y=(c+u)/4,S=(h+m)/4,F=(g+p)/4;return U>v&&U>b?U<.01?(A=0,i=.707106781,r=.707106781):(A=Math.sqrt(U),i=y/A,r=S/A):v>b?v<.01?(A=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),A=y/i,r=F/i):b<.01?(A=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),A=S/r,i=F/r),this.set(A,i,r,t),this}let E=Math.sqrt((p-g)*(p-g)+(h-m)*(h-m)+(u-c)*(u-c));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(h-m)/E,this.z=(u-c)/E,this.w=Math.acos((l+d+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const A=this.length();return this.divideScalar(A||1).multiplyScalar(Math.max(e,Math.min(t,A)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,A){return this.x=e.x+(t.x-e.x)*A,this.y=e.y+(t.y-e.y)*A,this.z=e.z+(t.z-e.z)*A,this.w=e.w+(t.w-e.w)*A,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class op extends Kn{constructor(e=1,t=1,A={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);const i={width:e,height:t,depth:1};A=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vA,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},A);const r=new Kt(i,A.mapping,A.wrapS,A.wrapT,A.magFilter,A.minFilter,A.format,A.type,A.anisotropy,A.colorSpace);r.flipY=!1,r.generateMipmaps=A.generateMipmaps,r.internalFormat=A.internalFormat,this.textures=[];const s=A.count;for(let a=0;a<s;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,this.resolveDepthBuffer=A.resolveDepthBuffer,this.resolveStencilBuffer=A.resolveStencilBuffer,this.depthTexture=A.depthTexture,this.samples=A.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,A=1){if(this.width!==e||this.height!==t||this.depth!==A){this.width=e,this.height=t,this.depth=A;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=A;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let A=0,i=e.textures.length;A<i;A++)this.textures[A]=e.textures[A].clone(),this.textures[A].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Tu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gn extends op{constructor(e=1,t=1,A={}){super(e,t,A),this.isWebGLRenderTarget=!0}}class Qu extends Kt{constructor(e=null,t=1,A=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:A,depth:i},this.magFilter=fA,this.minFilter=fA,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lp extends Kt{constructor(e=null,t=1,A=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:A,depth:i},this.magFilter=fA,this.minFilter=fA,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vn{constructor(e=0,t=0,A=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=A,this._w=i}static slerpFlat(e,t,A,i,r,s,a){let o=A[i+0],l=A[i+1],c=A[i+2],h=A[i+3];const u=r[s+0],d=r[s+1],g=r[s+2],m=r[s+3];if(a===0){e[t+0]=o,e[t+1]=l,e[t+2]=c,e[t+3]=h;return}if(a===1){e[t+0]=u,e[t+1]=d,e[t+2]=g,e[t+3]=m;return}if(h!==m||o!==u||l!==d||c!==g){let p=1-a;const f=o*u+l*d+c*g+h*m,E=f>=0?1:-1,U=1-f*f;if(U>Number.EPSILON){const b=Math.sqrt(U),y=Math.atan2(b,f*E);p=Math.sin(p*y)/b,a=Math.sin(a*y)/b}const v=a*E;if(o=o*p+u*v,l=l*p+d*v,c=c*p+g*v,h=h*p+m*v,p===1-a){const b=1/Math.sqrt(o*o+l*l+c*c+h*h);o*=b,l*=b,c*=b,h*=b}}e[t]=o,e[t+1]=l,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,A,i,r,s){const a=A[i],o=A[i+1],l=A[i+2],c=A[i+3],h=r[s],u=r[s+1],d=r[s+2],g=r[s+3];return e[t]=a*g+c*h+o*d-l*u,e[t+1]=o*g+c*u+l*h-a*d,e[t+2]=l*g+c*d+a*u-o*h,e[t+3]=c*g-a*h-o*u-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,A,i){return this._x=e,this._y=t,this._z=A,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const A=e._x,i=e._y,r=e._z,s=e._order,a=Math.cos,o=Math.sin,l=a(A/2),c=a(i/2),h=a(r/2),u=o(A/2),d=o(i/2),g=o(r/2);switch(s){case"XYZ":this._x=u*c*h+l*d*g,this._y=l*d*h-u*c*g,this._z=l*c*g+u*d*h,this._w=l*c*h-u*d*g;break;case"YXZ":this._x=u*c*h+l*d*g,this._y=l*d*h-u*c*g,this._z=l*c*g-u*d*h,this._w=l*c*h+u*d*g;break;case"ZXY":this._x=u*c*h-l*d*g,this._y=l*d*h+u*c*g,this._z=l*c*g+u*d*h,this._w=l*c*h-u*d*g;break;case"ZYX":this._x=u*c*h-l*d*g,this._y=l*d*h+u*c*g,this._z=l*c*g-u*d*h,this._w=l*c*h+u*d*g;break;case"YZX":this._x=u*c*h+l*d*g,this._y=l*d*h+u*c*g,this._z=l*c*g-u*d*h,this._w=l*c*h-u*d*g;break;case"XZY":this._x=u*c*h-l*d*g,this._y=l*d*h-u*c*g,this._z=l*c*g+u*d*h,this._w=l*c*h+u*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const A=t/2,i=Math.sin(A);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(A),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,A=t[0],i=t[4],r=t[8],s=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10],u=A+a+h;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(c-o)*d,this._y=(r-l)*d,this._z=(s-i)*d}else if(A>a&&A>h){const d=2*Math.sqrt(1+A-a-h);this._w=(c-o)/d,this._x=.25*d,this._y=(i+s)/d,this._z=(r+l)/d}else if(a>h){const d=2*Math.sqrt(1+a-A-h);this._w=(r-l)/d,this._x=(i+s)/d,this._y=.25*d,this._z=(o+c)/d}else{const d=2*Math.sqrt(1+h-A-a);this._w=(s-i)/d,this._x=(r+l)/d,this._y=(o+c)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let A=e.dot(t)+1;return A<Number.EPSILON?(A=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=A):(this._x=0,this._y=-e.z,this._z=e.y,this._w=A)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=A),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const A=this.angleTo(e);if(A===0)return this;const i=Math.min(1,t/A);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const A=e._x,i=e._y,r=e._z,s=e._w,a=t._x,o=t._y,l=t._z,c=t._w;return this._x=A*c+s*a+i*l-r*o,this._y=i*c+s*o+r*a-A*l,this._z=r*c+s*l+A*o-i*a,this._w=s*c-A*a-i*o-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const A=this._x,i=this._y,r=this._z,s=this._w;let a=s*e._w+A*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=A,this._y=i,this._z=r,this;const o=1-a*a;if(o<=Number.EPSILON){const d=1-t;return this._w=d*s+t*this._w,this._x=d*A+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const l=Math.sqrt(o),c=Math.atan2(l,a),h=Math.sin((1-t)*c)/l,u=Math.sin(t*c)/l;return this._w=s*h+this._w*u,this._x=A*h+this._x*u,this._y=i*h+this._y*u,this._z=r*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,A){return this.copy(e).slerp(t,A)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),A=Math.random(),i=Math.sqrt(1-A),r=Math.sqrt(A);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,A=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=A}set(e,t,A){return A===void 0&&(A=this.z),this.x=e,this.y=t,this.z=A,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Uc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Uc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,A=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*A+r[6]*i,this.y=r[1]*t+r[4]*A+r[7]*i,this.z=r[2]*t+r[5]*A+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,A=this.y,i=this.z,r=e.elements,s=1/(r[3]*t+r[7]*A+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*A+r[8]*i+r[12])*s,this.y=(r[1]*t+r[5]*A+r[9]*i+r[13])*s,this.z=(r[2]*t+r[6]*A+r[10]*i+r[14])*s,this}applyQuaternion(e){const t=this.x,A=this.y,i=this.z,r=e.x,s=e.y,a=e.z,o=e.w,l=2*(s*i-a*A),c=2*(a*t-r*i),h=2*(r*A-s*t);return this.x=t+o*l+s*h-a*c,this.y=A+o*c+a*l-r*h,this.z=i+o*h+r*c-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,A=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*A+r[8]*i,this.y=r[1]*t+r[5]*A+r[9]*i,this.z=r[2]*t+r[6]*A+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const A=this.length();return this.divideScalar(A||1).multiplyScalar(Math.max(e,Math.min(t,A)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,A){return this.x=e.x+(t.x-e.x)*A,this.y=e.y+(t.y-e.y)*A,this.z=e.z+(t.z-e.z)*A,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const A=e.x,i=e.y,r=e.z,s=t.x,a=t.y,o=t.z;return this.x=i*o-r*a,this.y=r*s-A*o,this.z=A*a-i*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const A=e.dot(this)/t;return this.copy(e).multiplyScalar(A)}projectOnPlane(e){return Ca.copy(this).projectOnVector(e),this.sub(Ca)}reflect(e){return this.sub(Ca.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const A=this.dot(e)/t;return Math.acos(Mt(A,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,A=this.y-e.y,i=this.z-e.z;return t*t+A*A+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,A){const i=Math.sin(t)*e;return this.x=i*Math.sin(A),this.y=Math.cos(t)*e,this.z=i*Math.cos(A),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,A){return this.x=e*Math.sin(t),this.y=A,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),A=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=A,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,A=Math.sqrt(1-t*t);return this.x=A*Math.cos(e),this.y=t,this.z=A*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ca=new R,Uc=new Vn;class br{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,A=e.length;t<A;t+=3)this.expandByPoint(sA.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,A=e.count;t<A;t++)this.expandByPoint(sA.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,A=e.length;t<A;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const A=sA.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(A),this.max.copy(e).add(A),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const A=e.geometry;if(A!==void 0){const r=A.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=r.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,sA):sA.fromBufferAttribute(r,s),sA.applyMatrix4(e.matrixWorld),this.expandByPoint(sA);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hr.copy(e.boundingBox)):(A.boundingBox===null&&A.computeBoundingBox(),Hr.copy(A.boundingBox)),Hr.applyMatrix4(e.matrixWorld),this.union(Hr)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,sA),sA.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,A;return e.normal.x>0?(t=e.normal.x*this.min.x,A=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,A=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,A+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,A+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,A+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,A+=e.normal.z*this.min.z),t<=-e.constant&&A>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ki),Pr.subVectors(this.max,Ki),Xn.subVectors(e.a,Ki),Yn.subVectors(e.b,Ki),Jn.subVectors(e.c,Ki),WA.subVectors(Yn,Xn),XA.subVectors(Jn,Yn),wn.subVectors(Xn,Jn);let t=[0,-WA.z,WA.y,0,-XA.z,XA.y,0,-wn.z,wn.y,WA.z,0,-WA.x,XA.z,0,-XA.x,wn.z,0,-wn.x,-WA.y,WA.x,0,-XA.y,XA.x,0,-wn.y,wn.x,0];return!Ea(t,Xn,Yn,Jn,Pr)||(t=[1,0,0,0,1,0,0,0,1],!Ea(t,Xn,Yn,Jn,Pr))?!1:(Nr.crossVectors(WA,XA),t=[Nr.x,Nr.y,Nr.z],Ea(t,Xn,Yn,Jn,Pr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sA).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sA).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(SA[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),SA[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),SA[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),SA[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),SA[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),SA[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),SA[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),SA[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(SA),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const SA=[new R,new R,new R,new R,new R,new R,new R,new R],sA=new R,Hr=new br,Xn=new R,Yn=new R,Jn=new R,WA=new R,XA=new R,wn=new R,Ki=new R,Pr=new R,Nr=new R,vn=new R;function Ea(n,e,t,A,i){for(let r=0,s=n.length-3;r<=s;r+=3){vn.fromArray(n,r);const a=i.x*Math.abs(vn.x)+i.y*Math.abs(vn.y)+i.z*Math.abs(vn.z),o=e.dot(vn),l=t.dot(vn),c=A.dot(vn);if(Math.max(-Math.max(o,l,c),Math.min(o,l,c))>a)return!1}return!0}const cp=new br,ki=new R,xa=new R;class Gl{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const A=this.center;t!==void 0?A.copy(t):cp.setFromPoints(e).getCenter(A);let i=0;for(let r=0,s=e.length;r<s;r++)i=Math.max(i,A.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const A=this.center.distanceToSquared(e);return t.copy(e),A>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ki.subVectors(e,this.center);const t=ki.lengthSq();if(t>this.radius*this.radius){const A=Math.sqrt(t),i=(A-this.radius)*.5;this.center.addScaledVector(ki,i/A),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ki.copy(e.center).add(xa)),this.expandByPoint(ki.copy(e.center).sub(xa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const MA=new R,Ua=new R,Or=new R,YA=new R,ya=new R,Gr=new R,Sa=new R;class Iu{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,MA)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const A=t.dot(this.direction);return A<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,A)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=MA.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(MA.copy(this.origin).addScaledVector(this.direction,t),MA.distanceToSquared(e))}distanceSqToSegment(e,t,A,i){Ua.copy(e).add(t).multiplyScalar(.5),Or.copy(t).sub(e).normalize(),YA.copy(this.origin).sub(Ua);const r=e.distanceTo(t)*.5,s=-this.direction.dot(Or),a=YA.dot(this.direction),o=-YA.dot(Or),l=YA.lengthSq(),c=Math.abs(1-s*s);let h,u,d,g;if(c>0)if(h=s*o-a,u=s*a-o,g=r*c,h>=0)if(u>=-g)if(u<=g){const m=1/c;h*=m,u*=m,d=h*(h+s*u+2*a)+u*(s*h+u+2*o)+l}else u=r,h=Math.max(0,-(s*u+a)),d=-h*h+u*(u+2*o)+l;else u=-r,h=Math.max(0,-(s*u+a)),d=-h*h+u*(u+2*o)+l;else u<=-g?(h=Math.max(0,-(-s*r+a)),u=h>0?-r:Math.min(Math.max(-r,-o),r),d=-h*h+u*(u+2*o)+l):u<=g?(h=0,u=Math.min(Math.max(-r,-o),r),d=u*(u+2*o)+l):(h=Math.max(0,-(s*r+a)),u=h>0?r:Math.min(Math.max(-r,-o),r),d=-h*h+u*(u+2*o)+l);else u=s>0?-r:r,h=Math.max(0,-(s*u+a)),d=-h*h+u*(u+2*o)+l;return A&&A.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Ua).addScaledVector(Or,u),d}intersectSphere(e,t){MA.subVectors(e.center,this.origin);const A=MA.dot(this.direction),i=MA.dot(MA)-A*A,r=e.radius*e.radius;if(i>r)return null;const s=Math.sqrt(r-i),a=A-s,o=A+s;return o<0?null:a<0?this.at(o,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const A=-(this.origin.dot(e.normal)+e.constant)/t;return A>=0?A:null}intersectPlane(e,t){const A=this.distanceToPlane(e);return A===null?null:this.at(A,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let A,i,r,s,a,o;const l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,u=this.origin;return l>=0?(A=(e.min.x-u.x)*l,i=(e.max.x-u.x)*l):(A=(e.max.x-u.x)*l,i=(e.min.x-u.x)*l),c>=0?(r=(e.min.y-u.y)*c,s=(e.max.y-u.y)*c):(r=(e.max.y-u.y)*c,s=(e.min.y-u.y)*c),A>s||r>i||((r>A||isNaN(A))&&(A=r),(s<i||isNaN(i))&&(i=s),h>=0?(a=(e.min.z-u.z)*h,o=(e.max.z-u.z)*h):(a=(e.max.z-u.z)*h,o=(e.min.z-u.z)*h),A>o||a>i)||((a>A||A!==A)&&(A=a),(o<i||i!==i)&&(i=o),i<0)?null:this.at(A>=0?A:i,t)}intersectsBox(e){return this.intersectBox(e,MA)!==null}intersectTriangle(e,t,A,i,r){ya.subVectors(t,e),Gr.subVectors(A,e),Sa.crossVectors(ya,Gr);let s=this.direction.dot(Sa),a;if(s>0){if(i)return null;a=1}else if(s<0)a=-1,s=-s;else return null;YA.subVectors(this.origin,e);const o=a*this.direction.dot(Gr.crossVectors(YA,Gr));if(o<0)return null;const l=a*this.direction.dot(ya.cross(YA));if(l<0||o+l>s)return null;const c=-a*YA.dot(Sa);return c<0?null:this.at(c/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(e,t,A,i,r,s,a,o,l,c,h,u,d,g,m,p){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,A,i,r,s,a,o,l,c,h,u,d,g,m,p)}set(e,t,A,i,r,s,a,o,l,c,h,u,d,g,m,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=A,f[12]=i,f[1]=r,f[5]=s,f[9]=a,f[13]=o,f[2]=l,f[6]=c,f[10]=h,f[14]=u,f[3]=d,f[7]=g,f[11]=m,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const t=this.elements,A=e.elements;return t[0]=A[0],t[1]=A[1],t[2]=A[2],t[3]=A[3],t[4]=A[4],t[5]=A[5],t[6]=A[6],t[7]=A[7],t[8]=A[8],t[9]=A[9],t[10]=A[10],t[11]=A[11],t[12]=A[12],t[13]=A[13],t[14]=A[14],t[15]=A[15],this}copyPosition(e){const t=this.elements,A=e.elements;return t[12]=A[12],t[13]=A[13],t[14]=A[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,A){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),A.setFromMatrixColumn(this,2),this}makeBasis(e,t,A){return this.set(e.x,t.x,A.x,0,e.y,t.y,A.y,0,e.z,t.z,A.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,A=e.elements,i=1/Zn.setFromMatrixColumn(e,0).length(),r=1/Zn.setFromMatrixColumn(e,1).length(),s=1/Zn.setFromMatrixColumn(e,2).length();return t[0]=A[0]*i,t[1]=A[1]*i,t[2]=A[2]*i,t[3]=0,t[4]=A[4]*r,t[5]=A[5]*r,t[6]=A[6]*r,t[7]=0,t[8]=A[8]*s,t[9]=A[9]*s,t[10]=A[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,A=e.x,i=e.y,r=e.z,s=Math.cos(A),a=Math.sin(A),o=Math.cos(i),l=Math.sin(i),c=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const u=s*c,d=s*h,g=a*c,m=a*h;t[0]=o*c,t[4]=-o*h,t[8]=l,t[1]=d+g*l,t[5]=u-m*l,t[9]=-a*o,t[2]=m-u*l,t[6]=g+d*l,t[10]=s*o}else if(e.order==="YXZ"){const u=o*c,d=o*h,g=l*c,m=l*h;t[0]=u+m*a,t[4]=g*a-d,t[8]=s*l,t[1]=s*h,t[5]=s*c,t[9]=-a,t[2]=d*a-g,t[6]=m+u*a,t[10]=s*o}else if(e.order==="ZXY"){const u=o*c,d=o*h,g=l*c,m=l*h;t[0]=u-m*a,t[4]=-s*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=s*c,t[9]=m-u*a,t[2]=-s*l,t[6]=a,t[10]=s*o}else if(e.order==="ZYX"){const u=s*c,d=s*h,g=a*c,m=a*h;t[0]=o*c,t[4]=g*l-d,t[8]=u*l+m,t[1]=o*h,t[5]=m*l+u,t[9]=d*l-g,t[2]=-l,t[6]=a*o,t[10]=s*o}else if(e.order==="YZX"){const u=s*o,d=s*l,g=a*o,m=a*l;t[0]=o*c,t[4]=m-u*h,t[8]=g*h+d,t[1]=h,t[5]=s*c,t[9]=-a*c,t[2]=-l*c,t[6]=d*h+g,t[10]=u-m*h}else if(e.order==="XZY"){const u=s*o,d=s*l,g=a*o,m=a*l;t[0]=o*c,t[4]=-h,t[8]=l*c,t[1]=u*h+m,t[5]=s*c,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*c,t[10]=m*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hp,e,up)}lookAt(e,t,A){const i=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),JA.crossVectors(A,zt),JA.lengthSq()===0&&(Math.abs(A.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),JA.crossVectors(A,zt)),JA.normalize(),Vr.crossVectors(zt,JA),i[0]=JA.x,i[4]=Vr.x,i[8]=zt.x,i[1]=JA.y,i[5]=Vr.y,i[9]=zt.y,i[2]=JA.z,i[6]=Vr.z,i[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const A=e.elements,i=t.elements,r=this.elements,s=A[0],a=A[4],o=A[8],l=A[12],c=A[1],h=A[5],u=A[9],d=A[13],g=A[2],m=A[6],p=A[10],f=A[14],E=A[3],U=A[7],v=A[11],b=A[15],y=i[0],S=i[4],F=i[8],C=i[12],_=i[1],M=i[5],G=i[9],D=i[13],k=i[2],Y=i[6],K=i[10],X=i[14],O=i[3],te=i[7],ie=i[11],ge=i[15];return r[0]=s*y+a*_+o*k+l*O,r[4]=s*S+a*M+o*Y+l*te,r[8]=s*F+a*G+o*K+l*ie,r[12]=s*C+a*D+o*X+l*ge,r[1]=c*y+h*_+u*k+d*O,r[5]=c*S+h*M+u*Y+d*te,r[9]=c*F+h*G+u*K+d*ie,r[13]=c*C+h*D+u*X+d*ge,r[2]=g*y+m*_+p*k+f*O,r[6]=g*S+m*M+p*Y+f*te,r[10]=g*F+m*G+p*K+f*ie,r[14]=g*C+m*D+p*X+f*ge,r[3]=E*y+U*_+v*k+b*O,r[7]=E*S+U*M+v*Y+b*te,r[11]=E*F+U*G+v*K+b*ie,r[15]=E*C+U*D+v*X+b*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],A=e[4],i=e[8],r=e[12],s=e[1],a=e[5],o=e[9],l=e[13],c=e[2],h=e[6],u=e[10],d=e[14],g=e[3],m=e[7],p=e[11],f=e[15];return g*(+r*o*h-i*l*h-r*a*u+A*l*u+i*a*d-A*o*d)+m*(+t*o*d-t*l*u+r*s*u-i*s*d+i*l*c-r*o*c)+p*(+t*l*h-t*a*d-r*s*h+A*s*d+r*a*c-A*l*c)+f*(-i*a*c-t*o*h+t*a*u+i*s*h-A*s*u+A*o*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,A){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=A),this}invert(){const e=this.elements,t=e[0],A=e[1],i=e[2],r=e[3],s=e[4],a=e[5],o=e[6],l=e[7],c=e[8],h=e[9],u=e[10],d=e[11],g=e[12],m=e[13],p=e[14],f=e[15],E=h*p*l-m*u*l+m*o*d-a*p*d-h*o*f+a*u*f,U=g*u*l-c*p*l-g*o*d+s*p*d+c*o*f-s*u*f,v=c*m*l-g*h*l+g*a*d-s*m*d-c*a*f+s*h*f,b=g*h*o-c*m*o-g*a*u+s*m*u+c*a*p-s*h*p,y=t*E+A*U+i*v+r*b;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/y;return e[0]=E*S,e[1]=(m*u*r-h*p*r-m*i*d+A*p*d+h*i*f-A*u*f)*S,e[2]=(a*p*r-m*o*r+m*i*l-A*p*l-a*i*f+A*o*f)*S,e[3]=(h*o*r-a*u*r-h*i*l+A*u*l+a*i*d-A*o*d)*S,e[4]=U*S,e[5]=(c*p*r-g*u*r+g*i*d-t*p*d-c*i*f+t*u*f)*S,e[6]=(g*o*r-s*p*r-g*i*l+t*p*l+s*i*f-t*o*f)*S,e[7]=(s*u*r-c*o*r+c*i*l-t*u*l-s*i*d+t*o*d)*S,e[8]=v*S,e[9]=(g*h*r-c*m*r-g*A*d+t*m*d+c*A*f-t*h*f)*S,e[10]=(s*m*r-g*a*r+g*A*l-t*m*l-s*A*f+t*a*f)*S,e[11]=(c*a*r-s*h*r-c*A*l+t*h*l+s*A*d-t*a*d)*S,e[12]=b*S,e[13]=(c*m*i-g*h*i+g*A*u-t*m*u-c*A*p+t*h*p)*S,e[14]=(g*a*i-s*m*i-g*A*o+t*m*o+s*A*p-t*a*p)*S,e[15]=(s*h*i-c*a*i+c*A*o-t*h*o-s*A*u+t*a*u)*S,this}scale(e){const t=this.elements,A=e.x,i=e.y,r=e.z;return t[0]*=A,t[4]*=i,t[8]*=r,t[1]*=A,t[5]*=i,t[9]*=r,t[2]*=A,t[6]*=i,t[10]*=r,t[3]*=A,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],A=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,A,i))}makeTranslation(e,t,A){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,A,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),A=Math.sin(e);return this.set(1,0,0,0,0,t,-A,0,0,A,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),A=Math.sin(e);return this.set(t,0,A,0,0,1,0,0,-A,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),A=Math.sin(e);return this.set(t,-A,0,0,A,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const A=Math.cos(t),i=Math.sin(t),r=1-A,s=e.x,a=e.y,o=e.z,l=r*s,c=r*a;return this.set(l*s+A,l*a-i*o,l*o+i*a,0,l*a+i*o,c*a+A,c*o-i*s,0,l*o-i*a,c*o+i*s,r*o*o+A,0,0,0,0,1),this}makeScale(e,t,A){return this.set(e,0,0,0,0,t,0,0,0,0,A,0,0,0,0,1),this}makeShear(e,t,A,i,r,s){return this.set(1,A,r,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,A){const i=this.elements,r=t._x,s=t._y,a=t._z,o=t._w,l=r+r,c=s+s,h=a+a,u=r*l,d=r*c,g=r*h,m=s*c,p=s*h,f=a*h,E=o*l,U=o*c,v=o*h,b=A.x,y=A.y,S=A.z;return i[0]=(1-(m+f))*b,i[1]=(d+v)*b,i[2]=(g-U)*b,i[3]=0,i[4]=(d-v)*y,i[5]=(1-(u+f))*y,i[6]=(p+E)*y,i[7]=0,i[8]=(g+U)*S,i[9]=(p-E)*S,i[10]=(1-(u+m))*S,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,A){const i=this.elements;let r=Zn.set(i[0],i[1],i[2]).length();const s=Zn.set(i[4],i[5],i[6]).length(),a=Zn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],aA.copy(this);const l=1/r,c=1/s,h=1/a;return aA.elements[0]*=l,aA.elements[1]*=l,aA.elements[2]*=l,aA.elements[4]*=c,aA.elements[5]*=c,aA.elements[6]*=c,aA.elements[8]*=h,aA.elements[9]*=h,aA.elements[10]*=h,t.setFromRotationMatrix(aA),A.x=r,A.y=s,A.z=a,this}makePerspective(e,t,A,i,r,s,a=PA){const o=this.elements,l=2*r/(t-e),c=2*r/(A-i),h=(t+e)/(t-e),u=(A+i)/(A-i);let d,g;if(a===PA)d=-(s+r)/(s-r),g=-2*s*r/(s-r);else if(a===Os)d=-s/(s-r),g=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return o[0]=l,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=c,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=g,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,A,i,r,s,a=PA){const o=this.elements,l=1/(t-e),c=1/(A-i),h=1/(s-r),u=(t+e)*l,d=(A+i)*c;let g,m;if(a===PA)g=(s+r)*h,m=-2*h;else if(a===Os)g=r*h,m=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=m,o[14]=-g,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,A=e.elements;for(let i=0;i<16;i++)if(t[i]!==A[i])return!1;return!0}fromArray(e,t=0){for(let A=0;A<16;A++)this.elements[A]=e[A+t];return this}toArray(e=[],t=0){const A=this.elements;return e[t]=A[0],e[t+1]=A[1],e[t+2]=A[2],e[t+3]=A[3],e[t+4]=A[4],e[t+5]=A[5],e[t+6]=A[6],e[t+7]=A[7],e[t+8]=A[8],e[t+9]=A[9],e[t+10]=A[10],e[t+11]=A[11],e[t+12]=A[12],e[t+13]=A[13],e[t+14]=A[14],e[t+15]=A[15],e}}const Zn=new R,aA=new Bt,hp=new R(0,0,0),up=new R(1,1,1),JA=new R,Vr=new R,zt=new R,yc=new Bt,Sc=new Vn;class VA{constructor(e=0,t=0,A=0,i=VA.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=A,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,A,i=this._order){return this._x=e,this._y=t,this._z=A,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,A=!0){const i=e.elements,r=i[0],s=i[4],a=i[8],o=i[1],l=i[5],c=i[9],h=i[2],u=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,d),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(o,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(o,r));break;case"ZYX":this._y=Math.asin(-Mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(o,r)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Mt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,A===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,A){return yc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yc,t,A)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sc.setFromEuler(this),this.setFromQuaternion(Sc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}VA.DEFAULT_ORDER="XYZ";class Lu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fp=0;const Mc=new R,qn=new Vn,FA=new Bt,Kr=new R,zi=new R,dp=new R,pp=new Vn,Fc=new R(1,0,0),bc=new R(0,1,0),Tc=new R(0,0,1),Qc={type:"added"},gp={type:"removed"},$n={type:"childadded",child:null},Ma={type:"childremoved",child:null};class Yt extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=Fr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DEFAULT_UP.clone();const e=new R,t=new VA,A=new Vn,i=new R(1,1,1);function r(){A.setFromEuler(t,!1)}function s(){t.setFromQuaternion(A,void 0,!1)}t._onChange(r),A._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:A},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Bt},normalMatrix:{value:new Ie}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=Yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qn.setFromAxisAngle(e,t),this.quaternion.multiply(qn),this}rotateOnWorldAxis(e,t){return qn.setFromAxisAngle(e,t),this.quaternion.premultiply(qn),this}rotateX(e){return this.rotateOnAxis(Fc,e)}rotateY(e){return this.rotateOnAxis(bc,e)}rotateZ(e){return this.rotateOnAxis(Tc,e)}translateOnAxis(e,t){return Mc.copy(e).applyQuaternion(this.quaternion),this.position.add(Mc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fc,e)}translateY(e){return this.translateOnAxis(bc,e)}translateZ(e){return this.translateOnAxis(Tc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(FA.copy(this.matrixWorld).invert())}lookAt(e,t,A){e.isVector3?Kr.copy(e):Kr.set(e,t,A);const i=this.parent;this.updateWorldMatrix(!0,!1),zi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?FA.lookAt(zi,Kr,this.up):FA.lookAt(Kr,zi,this.up),this.quaternion.setFromRotationMatrix(FA),i&&(FA.extractRotation(i.matrixWorld),qn.setFromRotationMatrix(FA),this.quaternion.premultiply(qn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qc),$n.child=e,this.dispatchEvent($n),$n.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let A=0;A<arguments.length;A++)this.remove(arguments[A]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gp),Ma.child=e,this.dispatchEvent(Ma),Ma.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),FA.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),FA.multiply(e.parent.matrixWorld)),e.applyMatrix4(FA),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qc),$n.child=e,this.dispatchEvent($n),$n.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let A=0,i=this.children.length;A<i;A++){const s=this.children[A].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,A=[]){this[e]===t&&A.push(this);const i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].getObjectsByProperty(e,t,A);return A}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zi,e,dp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zi,pp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let A=0,i=t.length;A<i;A++)t[A].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let A=0,i=t.length;A<i;A++)t[A].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let A=0,i=t.length;A<i;A++)t[A].updateMatrixWorld(e)}updateWorldMatrix(e,t){const A=this.parent;if(e===!0&&A!==null&&A.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",A={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},A.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,o){return a[o.uuid]===void 0&&(a[o.uuid]=o.toJSON(e)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const o=a.shapes;if(Array.isArray(o))for(let l=0,c=o.length;l<c;l++){const h=o[l];r(e.shapes,h)}else r(e.shapes,o)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let o=0,l=this.material.length;o<l;o++)a.push(r(e.materials,this.material[o]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const o=this.animations[a];i.animations.push(r(e.animations,o))}}if(t){const a=s(e.geometries),o=s(e.materials),l=s(e.textures),c=s(e.images),h=s(e.shapes),u=s(e.skeletons),d=s(e.animations),g=s(e.nodes);a.length>0&&(A.geometries=a),o.length>0&&(A.materials=o),l.length>0&&(A.textures=l),c.length>0&&(A.images=c),h.length>0&&(A.shapes=h),u.length>0&&(A.skeletons=u),d.length>0&&(A.animations=d),g.length>0&&(A.nodes=g)}return A.object=i,A;function s(a){const o=[];for(const l in a){const c=a[l];delete c.metadata,o.push(c)}return o}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let A=0;A<e.children.length;A++){const i=e.children[A];this.add(i.clone())}return this}}Yt.DEFAULT_UP=new R(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oA=new R,bA=new R,Fa=new R,TA=new R,jn=new R,ei=new R,Ic=new R,ba=new R,Ta=new R,Qa=new R,Ia=new mt,La=new mt,Ra=new mt;class cA{constructor(e=new R,t=new R,A=new R){this.a=e,this.b=t,this.c=A}static getNormal(e,t,A,i){i.subVectors(A,t),oA.subVectors(e,t),i.cross(oA);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,A,i,r){oA.subVectors(i,t),bA.subVectors(A,t),Fa.subVectors(e,t);const s=oA.dot(oA),a=oA.dot(bA),o=oA.dot(Fa),l=bA.dot(bA),c=bA.dot(Fa),h=s*l-a*a;if(h===0)return r.set(0,0,0),null;const u=1/h,d=(l*o-a*c)*u,g=(s*c-a*o)*u;return r.set(1-d-g,g,d)}static containsPoint(e,t,A,i){return this.getBarycoord(e,t,A,i,TA)===null?!1:TA.x>=0&&TA.y>=0&&TA.x+TA.y<=1}static getInterpolation(e,t,A,i,r,s,a,o){return this.getBarycoord(e,t,A,i,TA)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(r,TA.x),o.addScaledVector(s,TA.y),o.addScaledVector(a,TA.z),o)}static getInterpolatedAttribute(e,t,A,i,r,s){return Ia.setScalar(0),La.setScalar(0),Ra.setScalar(0),Ia.fromBufferAttribute(e,t),La.fromBufferAttribute(e,A),Ra.fromBufferAttribute(e,i),s.setScalar(0),s.addScaledVector(Ia,r.x),s.addScaledVector(La,r.y),s.addScaledVector(Ra,r.z),s}static isFrontFacing(e,t,A,i){return oA.subVectors(A,t),bA.subVectors(e,t),oA.cross(bA).dot(i)<0}set(e,t,A){return this.a.copy(e),this.b.copy(t),this.c.copy(A),this}setFromPointsAndIndices(e,t,A,i){return this.a.copy(e[t]),this.b.copy(e[A]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,A,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,A),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oA.subVectors(this.c,this.b),bA.subVectors(this.a,this.b),oA.cross(bA).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return cA.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return cA.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,A,i,r){return cA.getInterpolation(e,this.a,this.b,this.c,t,A,i,r)}containsPoint(e){return cA.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return cA.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const A=this.a,i=this.b,r=this.c;let s,a;jn.subVectors(i,A),ei.subVectors(r,A),ba.subVectors(e,A);const o=jn.dot(ba),l=ei.dot(ba);if(o<=0&&l<=0)return t.copy(A);Ta.subVectors(e,i);const c=jn.dot(Ta),h=ei.dot(Ta);if(c>=0&&h<=c)return t.copy(i);const u=o*h-c*l;if(u<=0&&o>=0&&c<=0)return s=o/(o-c),t.copy(A).addScaledVector(jn,s);Qa.subVectors(e,r);const d=jn.dot(Qa),g=ei.dot(Qa);if(g>=0&&d<=g)return t.copy(r);const m=d*l-o*g;if(m<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(A).addScaledVector(ei,a);const p=c*g-d*h;if(p<=0&&h-c>=0&&d-g>=0)return Ic.subVectors(r,i),a=(h-c)/(h-c+(d-g)),t.copy(i).addScaledVector(Ic,a);const f=1/(p+m+u);return s=m*f,a=u*f,t.copy(A).addScaledVector(jn,s).addScaledVector(ei,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ru={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ZA={h:0,s:0,l:0},kr={h:0,s:0,l:0};function Da(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ye{constructor(e,t,A){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,A)}set(e,t,A){if(t===void 0&&A===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,A);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.toWorkingColorSpace(this,t),this}setRGB(e,t,A,i=We.workingColorSpace){return this.r=e,this.g=t,this.b=A,We.toWorkingColorSpace(this,i),this}setHSL(e,t,A,i=We.workingColorSpace){if(e=jd(e,1),t=Mt(t,0,1),A=Mt(A,0,1),t===0)this.r=this.g=this.b=A;else{const r=A<=.5?A*(1+t):A+t-A*t,s=2*A-r;this.r=Da(s,r,e+1/3),this.g=Da(s,r,e),this.b=Da(s,r,e-1/3)}return We.toWorkingColorSpace(this,i),this}setStyle(e,t=jt){function A(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return A(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return A(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return A(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){const A=Ru[e.toLowerCase()];return A!==void 0?this.setHex(A,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=NA(e.r),this.g=NA(e.g),this.b=NA(e.b),this}copyLinearToSRGB(e){return this.r=_i(e.r),this.g=_i(e.g),this.b=_i(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return We.fromWorkingColorSpace(Qt.copy(this),e),Math.round(Mt(Qt.r*255,0,255))*65536+Math.round(Mt(Qt.g*255,0,255))*256+Math.round(Mt(Qt.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.fromWorkingColorSpace(Qt.copy(this),t);const A=Qt.r,i=Qt.g,r=Qt.b,s=Math.max(A,i,r),a=Math.min(A,i,r);let o,l;const c=(a+s)/2;if(a===s)o=0,l=0;else{const h=s-a;switch(l=c<=.5?h/(s+a):h/(2-s-a),s){case A:o=(i-r)/h+(i<r?6:0);break;case i:o=(r-A)/h+2;break;case r:o=(A-i)/h+4;break}o/=6}return e.h=o,e.s=l,e.l=c,e}getRGB(e,t=We.workingColorSpace){return We.fromWorkingColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=jt){We.fromWorkingColorSpace(Qt.copy(this),e);const t=Qt.r,A=Qt.g,i=Qt.b;return e!==jt?`color(${e} ${t.toFixed(3)} ${A.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(A*255)},${Math.round(i*255)})`}offsetHSL(e,t,A){return this.getHSL(ZA),this.setHSL(ZA.h+e,ZA.s+t,ZA.l+A)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,A){return this.r=e.r+(t.r-e.r)*A,this.g=e.g+(t.g-e.g)*A,this.b=e.b+(t.b-e.b)*A,this}lerpHSL(e,t){this.getHSL(ZA),e.getHSL(kr);const A=wa(ZA.h,kr.h,t),i=wa(ZA.s,kr.s,t),r=wa(ZA.l,kr.l,t);return this.setHSL(A,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,A=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*A+r[6]*i,this.g=r[1]*t+r[4]*A+r[7]*i,this.b=r[2]*t+r[5]*A+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new Ye;Ye.NAMES=Ru;let mp=0;class Aa extends Kn{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=Fr(),this.name="",this.blending=wi,this.side=dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Co,this.blendDst=Eo,this.blendEquation=Sn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zn,this.stencilZFail=zn,this.stencilZPass=zn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const A=e[t];if(A===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(A):i&&i.isVector3&&A&&A.isVector3?i.copy(A):this[t]=A}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const A={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),this.color&&this.color.isColor&&(A.color=this.color.getHex()),this.roughness!==void 0&&(A.roughness=this.roughness),this.metalness!==void 0&&(A.metalness=this.metalness),this.sheen!==void 0&&(A.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(A.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(A.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(A.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(A.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(A.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(A.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(A.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(A.shininess=this.shininess),this.clearcoat!==void 0&&(A.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(A.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(A.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(A.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(A.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,A.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(A.dispersion=this.dispersion),this.iridescence!==void 0&&(A.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(A.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(A.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(A.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(A.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(A.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(A.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(A.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(A.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(A.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(A.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(A.lightMap=this.lightMap.toJSON(e).uuid,A.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(A.aoMap=this.aoMap.toJSON(e).uuid,A.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(A.bumpMap=this.bumpMap.toJSON(e).uuid,A.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(A.normalMap=this.normalMap.toJSON(e).uuid,A.normalMapType=this.normalMapType,A.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(A.displacementMap=this.displacementMap.toJSON(e).uuid,A.displacementScale=this.displacementScale,A.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(A.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(A.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(A.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(A.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(A.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(A.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(A.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(A.combine=this.combine)),this.envMapRotation!==void 0&&(A.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(A.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(A.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(A.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(A.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(A.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(A.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(A.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(A.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(A.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(A.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(A.size=this.size),this.shadowSide!==null&&(A.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(A.sizeAttenuation=this.sizeAttenuation),this.blending!==wi&&(A.blending=this.blending),this.side!==dn&&(A.side=this.side),this.vertexColors===!0&&(A.vertexColors=!0),this.opacity<1&&(A.opacity=this.opacity),this.transparent===!0&&(A.transparent=!0),this.blendSrc!==Co&&(A.blendSrc=this.blendSrc),this.blendDst!==Eo&&(A.blendDst=this.blendDst),this.blendEquation!==Sn&&(A.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(A.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(A.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(A.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(A.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(A.blendAlpha=this.blendAlpha),this.depthFunc!==bi&&(A.depthFunc=this.depthFunc),this.depthTest===!1&&(A.depthTest=this.depthTest),this.depthWrite===!1&&(A.depthWrite=this.depthWrite),this.colorWrite===!1&&(A.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(A.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gc&&(A.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(A.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(A.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zn&&(A.stencilFail=this.stencilFail),this.stencilZFail!==zn&&(A.stencilZFail=this.stencilZFail),this.stencilZPass!==zn&&(A.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(A.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(A.rotation=this.rotation),this.polygonOffset===!0&&(A.polygonOffset=!0),this.polygonOffsetFactor!==0&&(A.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(A.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(A.linewidth=this.linewidth),this.dashSize!==void 0&&(A.dashSize=this.dashSize),this.gapSize!==void 0&&(A.gapSize=this.gapSize),this.scale!==void 0&&(A.scale=this.scale),this.dithering===!0&&(A.dithering=!0),this.alphaTest>0&&(A.alphaTest=this.alphaTest),this.alphaHash===!0&&(A.alphaHash=!0),this.alphaToCoverage===!0&&(A.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(A.premultipliedAlpha=!0),this.forceSinglePass===!0&&(A.forceSinglePass=!0),this.wireframe===!0&&(A.wireframe=!0),this.wireframeLinewidth>1&&(A.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(A.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(A.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(A.flatShading=!0),this.visible===!1&&(A.visible=!1),this.toneMapped===!1&&(A.toneMapped=!1),this.fog===!1&&(A.fog=!1),Object.keys(this.userData).length>0&&(A.userData=this.userData);function i(r){const s=[];for(const a in r){const o=r[a];delete o.metadata,s.push(o)}return s}if(t){const r=i(e.textures),s=i(e.images);r.length>0&&(A.textures=r),s.length>0&&(A.images=s)}return A}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let A=null;if(t!==null){const i=t.length;A=new Array(i);for(let r=0;r!==i;++r)A[r]=t[r].clone()}return this.clippingPlanes=A,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Vl extends Aa{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new VA,this.combine=mu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new R,zr=new De;class dA{constructor(e,t,A=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=A,this.usage=mc,this.updateRanges=[],this.gpuType=HA,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,A){e*=this.itemSize,A*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[A+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,A=this.count;t<A;t++)zr.fromBufferAttribute(this,t),zr.applyMatrix3(e),this.setXY(t,zr.x,zr.y);else if(this.itemSize===3)for(let t=0,A=this.count;t<A;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,A=this.count;t<A;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,A=this.count;t<A;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,A=this.count;t<A;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let A=this.array[e*this.itemSize+t];return this.normalized&&(A=Vi(A,this.array)),A}setComponent(e,t,A){return this.normalized&&(A=Nt(A,this.array)),this.array[e*this.itemSize+t]=A,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,A){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),A=Nt(A,this.array)),this.array[e+0]=t,this.array[e+1]=A,this}setXYZ(e,t,A,i){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),A=Nt(A,this.array),i=Nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=A,this.array[e+2]=i,this}setXYZW(e,t,A,i,r){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),A=Nt(A,this.array),i=Nt(i,this.array),r=Nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=A,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mc&&(e.usage=this.usage),e}}class Du extends dA{constructor(e,t,A){super(new Uint16Array(e),t,A)}}class Hu extends dA{constructor(e,t,A){super(new Uint32Array(e),t,A)}}class uA extends dA{constructor(e,t,A){super(new Float32Array(e),t,A)}}let Bp=0;const qt=new Bt,Ha=new Yt,ti=new R,Wt=new br,Wi=new br,Ut=new R;class mn extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=Fr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bu(e)?Hu:Du)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,A=0){this.groups.push({start:e,count:t,materialIndex:A})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const A=this.attributes.normal;if(A!==void 0){const r=new Ie().getNormalMatrix(e);A.applyNormalMatrix(r),A.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qt.makeRotationFromQuaternion(e),this.applyMatrix4(qt),this}rotateX(e){return qt.makeRotationX(e),this.applyMatrix4(qt),this}rotateY(e){return qt.makeRotationY(e),this.applyMatrix4(qt),this}rotateZ(e){return qt.makeRotationZ(e),this.applyMatrix4(qt),this}translate(e,t,A){return qt.makeTranslation(e,t,A),this.applyMatrix4(qt),this}scale(e,t,A){return qt.makeScale(e,t,A),this.applyMatrix4(qt),this}lookAt(e){return Ha.lookAt(e),Ha.updateMatrix(),this.applyMatrix4(Ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ti).negate(),this.translate(ti.x,ti.y,ti.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const A=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];A.push(s.x,s.y,s.z||0)}this.setAttribute("position",new uA(A,3))}else{for(let A=0,i=t.count;A<i;A++){const r=e[A];t.setXYZ(A,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new br);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let A=0,i=t.length;A<i;A++){const r=t[A];Wt.setFromBufferAttribute(r),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const A=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const a=t[r];Wi.setFromBufferAttribute(a),this.morphTargetsRelative?(Ut.addVectors(Wt.min,Wi.min),Wt.expandByPoint(Ut),Ut.addVectors(Wt.max,Wi.max),Wt.expandByPoint(Ut)):(Wt.expandByPoint(Wi.min),Wt.expandByPoint(Wi.max))}Wt.getCenter(A);let i=0;for(let r=0,s=e.count;r<s;r++)Ut.fromBufferAttribute(e,r),i=Math.max(i,A.distanceToSquared(Ut));if(t)for(let r=0,s=t.length;r<s;r++){const a=t[r],o=this.morphTargetsRelative;for(let l=0,c=a.count;l<c;l++)Ut.fromBufferAttribute(a,l),o&&(ti.fromBufferAttribute(e,l),Ut.add(ti)),i=Math.max(i,A.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const A=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dA(new Float32Array(4*A.count),4));const s=this.getAttribute("tangent"),a=[],o=[];for(let F=0;F<A.count;F++)a[F]=new R,o[F]=new R;const l=new R,c=new R,h=new R,u=new De,d=new De,g=new De,m=new R,p=new R;function f(F,C,_){l.fromBufferAttribute(A,F),c.fromBufferAttribute(A,C),h.fromBufferAttribute(A,_),u.fromBufferAttribute(r,F),d.fromBufferAttribute(r,C),g.fromBufferAttribute(r,_),c.sub(l),h.sub(l),d.sub(u),g.sub(u);const M=1/(d.x*g.y-g.x*d.y);isFinite(M)&&(m.copy(c).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(M),p.copy(h).multiplyScalar(d.x).addScaledVector(c,-g.x).multiplyScalar(M),a[F].add(m),a[C].add(m),a[_].add(m),o[F].add(p),o[C].add(p),o[_].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let F=0,C=E.length;F<C;++F){const _=E[F],M=_.start,G=_.count;for(let D=M,k=M+G;D<k;D+=3)f(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const U=new R,v=new R,b=new R,y=new R;function S(F){b.fromBufferAttribute(i,F),y.copy(b);const C=a[F];U.copy(C),U.sub(b.multiplyScalar(b.dot(C))).normalize(),v.crossVectors(y,C);const M=v.dot(o[F])<0?-1:1;s.setXYZW(F,U.x,U.y,U.z,M)}for(let F=0,C=E.length;F<C;++F){const _=E[F],M=_.start,G=_.count;for(let D=M,k=M+G;D<k;D+=3)S(e.getX(D+0)),S(e.getX(D+1)),S(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let A=this.getAttribute("normal");if(A===void 0)A=new dA(new Float32Array(t.count*3),3),this.setAttribute("normal",A);else for(let u=0,d=A.count;u<d;u++)A.setXYZ(u,0,0,0);const i=new R,r=new R,s=new R,a=new R,o=new R,l=new R,c=new R,h=new R;if(e)for(let u=0,d=e.count;u<d;u+=3){const g=e.getX(u+0),m=e.getX(u+1),p=e.getX(u+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,p),c.subVectors(s,r),h.subVectors(i,r),c.cross(h),a.fromBufferAttribute(A,g),o.fromBufferAttribute(A,m),l.fromBufferAttribute(A,p),a.add(c),o.add(c),l.add(c),A.setXYZ(g,a.x,a.y,a.z),A.setXYZ(m,o.x,o.y,o.z),A.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,d=t.count;u<d;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),s.fromBufferAttribute(t,u+2),c.subVectors(s,r),h.subVectors(i,r),c.cross(h),A.setXYZ(u+0,c.x,c.y,c.z),A.setXYZ(u+1,c.x,c.y,c.z),A.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),A.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,A=e.count;t<A;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(a,o){const l=a.array,c=a.itemSize,h=a.normalized,u=new l.constructor(o.length*c);let d=0,g=0;for(let m=0,p=o.length;m<p;m++){a.isInterleavedBufferAttribute?d=o[m]*a.data.stride+a.offset:d=o[m]*c;for(let f=0;f<c;f++)u[g++]=l[d++]}return new dA(u,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mn,A=this.index.array,i=this.attributes;for(const a in i){const o=i[a],l=e(o,A);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const o=[],l=r[a];for(let c=0,h=l.length;c<h;c++){const u=l[c],d=e(u,A);o.push(d)}t.morphAttributes[a]=o}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,o=s.length;a<o;a++){const l=s[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const l in o)o[l]!==void 0&&(e[l]=o[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const A=this.attributes;for(const o in A){const l=A[o];e.data.attributes[o]=l.toJSON(e.data)}const i={};let r=!1;for(const o in this.morphAttributes){const l=this.morphAttributes[o],c=[];for(let h=0,u=l.length;h<u;h++){const d=l[h];c.push(d.toJSON(e.data))}c.length>0&&(i[o]=c,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const A=e.index;A!==null&&this.setIndex(A.clone(t));const i=e.attributes;for(const l in i){const c=i[l];this.setAttribute(l,c.clone(t))}const r=e.morphAttributes;for(const l in r){const c=[],h=r[l];for(let u=0,d=h.length;u<d;u++)c.push(h[u].clone(t));this.morphAttributes[l]=c}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let l=0,c=s.length;l<c;l++){const h=s[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const o=e.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lc=new Bt,_n=new Iu,Wr=new Gl,Rc=new R,Xr=new R,Yr=new R,Jr=new R,Pa=new R,Zr=new R,Dc=new R,qr=new R;class _A extends Yt{constructor(e=new mn,t=new Vl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,A=Object.keys(t);if(A.length>0){const i=t[A[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const A=this.geometry,i=A.attributes.position,r=A.morphAttributes.position,s=A.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Zr.set(0,0,0);for(let o=0,l=r.length;o<l;o++){const c=a[o],h=r[o];c!==0&&(Pa.fromBufferAttribute(h,e),s?Zr.addScaledVector(Pa,c):Zr.addScaledVector(Pa.sub(t),c))}t.add(Zr)}return t}raycast(e,t){const A=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(A.boundingSphere===null&&A.computeBoundingSphere(),Wr.copy(A.boundingSphere),Wr.applyMatrix4(r),_n.copy(e.ray).recast(e.near),!(Wr.containsPoint(_n.origin)===!1&&(_n.intersectSphere(Wr,Rc)===null||_n.origin.distanceToSquared(Rc)>(e.far-e.near)**2))&&(Lc.copy(r).invert(),_n.copy(e.ray).applyMatrix4(Lc),!(A.boundingBox!==null&&_n.intersectsBox(A.boundingBox)===!1)&&this._computeIntersections(e,t,_n)))}_computeIntersections(e,t,A){let i;const r=this.geometry,s=this.material,a=r.index,o=r.attributes.position,l=r.attributes.uv,c=r.attributes.uv1,h=r.attributes.normal,u=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(s))for(let g=0,m=u.length;g<m;g++){const p=u[g],f=s[p.materialIndex],E=Math.max(p.start,d.start),U=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let v=E,b=U;v<b;v+=3){const y=a.getX(v),S=a.getX(v+1),F=a.getX(v+2);i=$r(this,f,e,A,l,c,h,y,S,F),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),m=Math.min(a.count,d.start+d.count);for(let p=g,f=m;p<f;p+=3){const E=a.getX(p),U=a.getX(p+1),v=a.getX(p+2);i=$r(this,s,e,A,l,c,h,E,U,v),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(o!==void 0)if(Array.isArray(s))for(let g=0,m=u.length;g<m;g++){const p=u[g],f=s[p.materialIndex],E=Math.max(p.start,d.start),U=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let v=E,b=U;v<b;v+=3){const y=v,S=v+1,F=v+2;i=$r(this,f,e,A,l,c,h,y,S,F),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),m=Math.min(o.count,d.start+d.count);for(let p=g,f=m;p<f;p+=3){const E=p,U=p+1,v=p+2;i=$r(this,s,e,A,l,c,h,E,U,v),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function wp(n,e,t,A,i,r,s,a){let o;if(e.side===Vt?o=A.intersectTriangle(s,r,i,!0,a):o=A.intersectTriangle(i,r,s,e.side===dn,a),o===null)return null;qr.copy(a),qr.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(qr);return l<t.near||l>t.far?null:{distance:l,point:qr.clone(),object:n}}function $r(n,e,t,A,i,r,s,a,o,l){n.getVertexPosition(a,Xr),n.getVertexPosition(o,Yr),n.getVertexPosition(l,Jr);const c=wp(n,e,t,A,Xr,Yr,Jr,Dc);if(c){const h=new R;cA.getBarycoord(Dc,Xr,Yr,Jr,h),i&&(c.uv=cA.getInterpolatedAttribute(i,a,o,l,h,new De)),r&&(c.uv1=cA.getInterpolatedAttribute(r,a,o,l,h,new De)),s&&(c.normal=cA.getInterpolatedAttribute(s,a,o,l,h,new R),c.normal.dot(A.direction)>0&&c.normal.multiplyScalar(-1));const u={a,b:o,c:l,normal:new R,materialIndex:0};cA.getNormal(Xr,Yr,Jr,u.normal),c.face=u,c.barycoord=h}return c}class Tr extends mn{constructor(e=1,t=1,A=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:A,widthSegments:i,heightSegments:r,depthSegments:s};const a=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);const o=[],l=[],c=[],h=[];let u=0,d=0;g("z","y","x",-1,-1,A,t,e,s,r,0),g("z","y","x",1,-1,A,t,-e,s,r,1),g("x","z","y",1,1,e,A,t,i,s,2),g("x","z","y",1,-1,e,A,-t,i,s,3),g("x","y","z",1,-1,e,t,A,i,r,4),g("x","y","z",-1,-1,e,t,-A,i,r,5),this.setIndex(o),this.setAttribute("position",new uA(l,3)),this.setAttribute("normal",new uA(c,3)),this.setAttribute("uv",new uA(h,2));function g(m,p,f,E,U,v,b,y,S,F,C){const _=v/S,M=b/F,G=v/2,D=b/2,k=y/2,Y=S+1,K=F+1;let X=0,O=0;const te=new R;for(let ie=0;ie<K;ie++){const ge=ie*M-D;for(let Se=0;Se<Y;Se++){const He=Se*_-G;te[m]=He*E,te[p]=ge*U,te[f]=k,l.push(te.x,te.y,te.z),te[m]=0,te[p]=0,te[f]=y>0?1:-1,c.push(te.x,te.y,te.z),h.push(Se/S),h.push(1-ie/F),X+=1}}for(let ie=0;ie<F;ie++)for(let ge=0;ge<S;ge++){const Se=u+ge+Y*ie,He=u+ge+Y*(ie+1),z=u+(ge+1)+Y*(ie+1),$=u+(ge+1)+Y*ie;o.push(Se,He,$),o.push(He,z,$),O+=6}a.addGroup(d,O,C),d+=O,u+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ri(n){const e={};for(const t in n){e[t]={};for(const A in n[t]){const i=n[t][A];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][A]=null):e[t][A]=i.clone():Array.isArray(i)?e[t][A]=i.slice():e[t][A]=i}}return e}function Rt(n){const e={};for(let t=0;t<n.length;t++){const A=Ri(n[t]);for(const i in A)e[i]=A[i]}return e}function vp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Pu(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}const _p={clone:Ri,merge:Rt};var Cp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ep=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pn extends Aa{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cp,this.fragmentShader=Ep,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ri(e.uniforms),this.uniformsGroups=vp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const A={};for(const i in this.extensions)this.extensions[i]===!0&&(A[i]=!0);return Object.keys(A).length>0&&(t.extensions=A),t}}class Nu extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=PA}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qA=new R,Hc=new De,Pc=new De;class eA extends Nu{constructor(e=50,t=1,A=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=A,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=al*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ls*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return al*2*Math.atan(Math.tan(Ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,A){qA.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qA.x,qA.y).multiplyScalar(-e/qA.z),qA.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),A.set(qA.x,qA.y).multiplyScalar(-e/qA.z)}getViewSize(e,t){return this.getViewBounds(e,Hc,Pc),t.subVectors(Pc,Hc)}setViewOffset(e,t,A,i,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=A,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ls*.5*this.fov)/this.zoom,A=2*t,i=this.aspect*A,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const o=s.fullWidth,l=s.fullHeight;r+=s.offsetX*i/o,t-=s.offsetY*A/l,i*=s.width/o,A*=s.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-A,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ai=-90,ni=1;class xp extends Yt{constructor(e,t,A){super(),this.type="CubeCamera",this.renderTarget=A,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new eA(Ai,ni,e,t);i.layers=this.layers,this.add(i);const r=new eA(Ai,ni,e,t);r.layers=this.layers,this.add(r);const s=new eA(Ai,ni,e,t);s.layers=this.layers,this.add(s);const a=new eA(Ai,ni,e,t);a.layers=this.layers,this.add(a);const o=new eA(Ai,ni,e,t);o.layers=this.layers,this.add(o);const l=new eA(Ai,ni,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[A,i,r,s,a,o]=t;for(const l of t)this.remove(l);if(e===PA)A.up.set(0,1,0),A.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===Os)A.up.set(0,-1,0),A.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:A,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,o,l,c]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const m=A.texture.generateMipmaps;A.texture.generateMipmaps=!1,e.setRenderTarget(A,0,i),e.render(t,r),e.setRenderTarget(A,1,i),e.render(t,s),e.setRenderTarget(A,2,i),e.render(t,a),e.setRenderTarget(A,3,i),e.render(t,o),e.setRenderTarget(A,4,i),e.render(t,l),A.texture.generateMipmaps=m,e.setRenderTarget(A,5,i),e.render(t,c),e.setRenderTarget(h,u,d),e.xr.enabled=g,A.texture.needsPMREMUpdate=!0}}class Ou extends Kt{constructor(e,t,A,i,r,s,a,o,l,c){e=e!==void 0?e:[],t=t!==void 0?t:Ti,super(e,t,A,i,r,s,a,o,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Up extends Gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const A={width:e,height:e,depth:1},i=[A,A,A,A,A,A];this.texture=new Ou(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:vA}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const A={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Tr(5,5,5),r=new pn({name:"CubemapFromEquirect",uniforms:Ri(A.uniforms),vertexShader:A.vertexShader,fragmentShader:A.fragmentShader,side:Vt,blending:cn});r.uniforms.tEquirect.value=t;const s=new _A(i,r),a=t.minFilter;return t.minFilter===Tn&&(t.minFilter=vA),new xp(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,A,i){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,A,i);e.setRenderTarget(r)}}const Na=new R,yp=new R,Sp=new Ie;class en{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,A,i){return this.normal.set(e,t,A),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,A){const i=Na.subVectors(A,t).cross(yp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const A=e.delta(Na),i=this.normal.dot(A);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(A,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),A=this.distanceToPoint(e.end);return t<0&&A>0||A<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const A=t||Sp.getNormalMatrix(e),i=this.coplanarPoint(Na).applyMatrix4(e),r=this.normal.applyMatrix3(A).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cn=new Gl,jr=new R;class Gu{constructor(e=new en,t=new en,A=new en,i=new en,r=new en,s=new en){this.planes=[e,t,A,i,r,s]}set(e,t,A,i,r,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(A),a[3].copy(i),a[4].copy(r),a[5].copy(s),this}copy(e){const t=this.planes;for(let A=0;A<6;A++)t[A].copy(e.planes[A]);return this}setFromProjectionMatrix(e,t=PA){const A=this.planes,i=e.elements,r=i[0],s=i[1],a=i[2],o=i[3],l=i[4],c=i[5],h=i[6],u=i[7],d=i[8],g=i[9],m=i[10],p=i[11],f=i[12],E=i[13],U=i[14],v=i[15];if(A[0].setComponents(o-r,u-l,p-d,v-f).normalize(),A[1].setComponents(o+r,u+l,p+d,v+f).normalize(),A[2].setComponents(o+s,u+c,p+g,v+E).normalize(),A[3].setComponents(o-s,u-c,p-g,v-E).normalize(),A[4].setComponents(o-a,u-h,p-m,v-U).normalize(),t===PA)A[5].setComponents(o+a,u+h,p+m,v+U).normalize();else if(t===Os)A[5].setComponents(a,h,m,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Cn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cn)}intersectsSprite(e){return Cn.center.set(0,0,0),Cn.radius=.7071067811865476,Cn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cn)}intersectsSphere(e){const t=this.planes,A=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(A)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let A=0;A<6;A++){const i=t[A];if(jr.x=i.normal.x>0?e.max.x:e.min.x,jr.y=i.normal.y>0?e.max.y:e.min.y,jr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(jr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let A=0;A<6;A++)if(t[A].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vu(){let n=null,e=!1,t=null,A=null;function i(r,s){t(r,s),A=n.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(A=n.requestAnimationFrame(i),e=!0)},stop:function(){n.cancelAnimationFrame(A),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Mp(n){const e=new WeakMap;function t(a,o){const l=a.array,c=a.usage,h=l.byteLength,u=n.createBuffer();n.bindBuffer(o,u),n.bufferData(o,l,c),a.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function A(a,o,l){const c=o.array,h=o.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,c);else{h.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<h.length;d++){const g=h[u],m=h[d];m.start<=g.start+g.count+1?g.count=Math.max(g.count,m.start+m.count-g.start):(++u,h[u]=m)}h.length=u+1;for(let d=0,g=h.length;d<g;d++){const m=h[d];n.bufferSubData(l,m.start*c.BYTES_PER_ELEMENT,c,m.start,m.count)}o.clearUpdateRanges()}o.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const o=e.get(a);o&&(n.deleteBuffer(o.buffer),e.delete(a))}function s(a,o){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,o));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");A(l.buffer,a,o),l.version=a.version}}return{get:i,remove:r,update:s}}class na extends mn{constructor(e=1,t=1,A=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:A,heightSegments:i};const r=e/2,s=t/2,a=Math.floor(A),o=Math.floor(i),l=a+1,c=o+1,h=e/a,u=t/o,d=[],g=[],m=[],p=[];for(let f=0;f<c;f++){const E=f*u-s;for(let U=0;U<l;U++){const v=U*h-r;g.push(v,-E,0),m.push(0,0,1),p.push(U/a),p.push(1-f/o)}}for(let f=0;f<o;f++)for(let E=0;E<a;E++){const U=E+l*f,v=E+l*(f+1),b=E+1+l*(f+1),y=E+1+l*f;d.push(U,v,y),d.push(v,b,y)}this.setIndex(d),this.setAttribute("position",new uA(g,3)),this.setAttribute("normal",new uA(m,3)),this.setAttribute("uv",new uA(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new na(e.width,e.height,e.widthSegments,e.heightSegments)}}var Fp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Tp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ip=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Dp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Pp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Np=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Op=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vp=`#ifdef USE_IRIDESCENCE
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
#endif`,Kp=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,$p=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
} // validated`,jp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,eg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,tg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ag=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ng=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ig=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rg="gl_FragColor = linearToOutputTexel( gl_FragColor );",sg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ag=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,og=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lg=`#ifdef USE_ENVMAP
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
#endif`,cg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hg=`#ifdef USE_ENVMAP
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
#endif`,ug=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gg=`#ifdef USE_GRADIENTMAP
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
}`,mg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,_g=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Cg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Eg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ug=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Sg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
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
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Mg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Fg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ig=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Pg=`#if defined( USE_POINTS_UV )
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
#endif`,Ng=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Og=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,zg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
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
vec3 nonPerturbedNormal = normal;`,Xg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Yg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
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
#endif`,$g=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,e0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,t0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,A0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,n0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,i0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,r0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,s0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,a0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,o0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,l0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,c0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,h0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,u0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,f0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,d0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,p0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,g0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,m0=`#ifdef USE_SKINNING
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
#endif`,B0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,w0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,v0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,C0=`#ifdef USE_TRANSMISSION
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
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,E0=`#ifdef USE_TRANSMISSION
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
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,x0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
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
#endif`,U0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
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
#endif`,y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
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
#endif`,S0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const M0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,F0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,R0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,D0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,H0=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,P0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,N0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O0=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,G0=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,V0=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,K0=`uniform vec3 diffuse;
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
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,z0=`#define LAMBERT
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,X0=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,J0=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Z0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,q0=`#define PHONG
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,j0=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,em=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,tm=`#define TOON
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Am=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,nm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,im=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,rm=`uniform vec3 color;
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
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,am=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Re={alphahash_fragment:Fp,alphahash_pars_fragment:bp,alphamap_fragment:Tp,alphamap_pars_fragment:Qp,alphatest_fragment:Ip,alphatest_pars_fragment:Lp,aomap_fragment:Rp,aomap_pars_fragment:Dp,batching_pars_vertex:Hp,batching_vertex:Pp,begin_vertex:Np,beginnormal_vertex:Op,bsdfs:Gp,iridescence_fragment:Vp,bumpmap_pars_fragment:Kp,clipping_planes_fragment:kp,clipping_planes_pars_fragment:zp,clipping_planes_pars_vertex:Wp,clipping_planes_vertex:Xp,color_fragment:Yp,color_pars_fragment:Jp,color_pars_vertex:Zp,color_vertex:qp,common:$p,cube_uv_reflection_fragment:jp,defaultnormal_vertex:eg,displacementmap_pars_vertex:tg,displacementmap_vertex:Ag,emissivemap_fragment:ng,emissivemap_pars_fragment:ig,colorspace_fragment:rg,colorspace_pars_fragment:sg,envmap_fragment:ag,envmap_common_pars_fragment:og,envmap_pars_fragment:lg,envmap_pars_vertex:cg,envmap_physical_pars_fragment:_g,envmap_vertex:hg,fog_vertex:ug,fog_pars_vertex:fg,fog_fragment:dg,fog_pars_fragment:pg,gradientmap_pars_fragment:gg,lightmap_pars_fragment:mg,lights_lambert_fragment:Bg,lights_lambert_pars_fragment:wg,lights_pars_begin:vg,lights_toon_fragment:Cg,lights_toon_pars_fragment:Eg,lights_phong_fragment:xg,lights_phong_pars_fragment:Ug,lights_physical_fragment:yg,lights_physical_pars_fragment:Sg,lights_fragment_begin:Mg,lights_fragment_maps:Fg,lights_fragment_end:bg,logdepthbuf_fragment:Tg,logdepthbuf_pars_fragment:Qg,logdepthbuf_pars_vertex:Ig,logdepthbuf_vertex:Lg,map_fragment:Rg,map_pars_fragment:Dg,map_particle_fragment:Hg,map_particle_pars_fragment:Pg,metalnessmap_fragment:Ng,metalnessmap_pars_fragment:Og,morphinstance_vertex:Gg,morphcolor_vertex:Vg,morphnormal_vertex:Kg,morphtarget_pars_vertex:kg,morphtarget_vertex:zg,normal_fragment_begin:Wg,normal_fragment_maps:Xg,normal_pars_fragment:Yg,normal_pars_vertex:Jg,normal_vertex:Zg,normalmap_pars_fragment:qg,clearcoat_normal_fragment_begin:$g,clearcoat_normal_fragment_maps:jg,clearcoat_pars_fragment:e0,iridescence_pars_fragment:t0,opaque_fragment:A0,packing:n0,premultiplied_alpha_fragment:i0,project_vertex:r0,dithering_fragment:s0,dithering_pars_fragment:a0,roughnessmap_fragment:o0,roughnessmap_pars_fragment:l0,shadowmap_pars_fragment:c0,shadowmap_pars_vertex:h0,shadowmap_vertex:u0,shadowmask_pars_fragment:f0,skinbase_vertex:d0,skinning_pars_vertex:p0,skinning_vertex:g0,skinnormal_vertex:m0,specularmap_fragment:B0,specularmap_pars_fragment:w0,tonemapping_fragment:v0,tonemapping_pars_fragment:_0,transmission_fragment:C0,transmission_pars_fragment:E0,uv_pars_fragment:x0,uv_pars_vertex:U0,uv_vertex:y0,worldpos_vertex:S0,background_vert:M0,background_frag:F0,backgroundCube_vert:b0,backgroundCube_frag:T0,cube_vert:Q0,cube_frag:I0,depth_vert:L0,depth_frag:R0,distanceRGBA_vert:D0,distanceRGBA_frag:H0,equirect_vert:P0,equirect_frag:N0,linedashed_vert:O0,linedashed_frag:G0,meshbasic_vert:V0,meshbasic_frag:K0,meshlambert_vert:k0,meshlambert_frag:z0,meshmatcap_vert:W0,meshmatcap_frag:X0,meshnormal_vert:Y0,meshnormal_frag:J0,meshphong_vert:Z0,meshphong_frag:q0,meshphysical_vert:$0,meshphysical_frag:j0,meshtoon_vert:em,meshtoon_frag:tm,points_vert:Am,points_frag:nm,shadow_vert:im,shadow_frag:rm,sprite_vert:sm,sprite_frag:am},ne={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},wA={basic:{uniforms:Rt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Re.meshbasic_vert,fragmentShader:Re.meshbasic_frag},lambert:{uniforms:Rt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Re.meshlambert_vert,fragmentShader:Re.meshlambert_frag},phong:{uniforms:Rt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Re.meshphong_vert,fragmentShader:Re.meshphong_frag},standard:{uniforms:Rt([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag},toon:{uniforms:Rt([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Re.meshtoon_vert,fragmentShader:Re.meshtoon_frag},matcap:{uniforms:Rt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Re.meshmatcap_vert,fragmentShader:Re.meshmatcap_frag},points:{uniforms:Rt([ne.points,ne.fog]),vertexShader:Re.points_vert,fragmentShader:Re.points_frag},dashed:{uniforms:Rt([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Re.linedashed_vert,fragmentShader:Re.linedashed_frag},depth:{uniforms:Rt([ne.common,ne.displacementmap]),vertexShader:Re.depth_vert,fragmentShader:Re.depth_frag},normal:{uniforms:Rt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Re.meshnormal_vert,fragmentShader:Re.meshnormal_frag},sprite:{uniforms:Rt([ne.sprite,ne.fog]),vertexShader:Re.sprite_vert,fragmentShader:Re.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Re.background_vert,fragmentShader:Re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Re.backgroundCube_vert,fragmentShader:Re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Re.cube_vert,fragmentShader:Re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Re.equirect_vert,fragmentShader:Re.equirect_frag},distanceRGBA:{uniforms:Rt([ne.common,ne.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Re.distanceRGBA_vert,fragmentShader:Re.distanceRGBA_frag},shadow:{uniforms:Rt([ne.lights,ne.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Re.shadow_vert,fragmentShader:Re.shadow_frag}};wA.physical={uniforms:Rt([wA.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag};const es={r:0,b:0,g:0},En=new VA,om=new Bt;function lm(n,e,t,A,i,r,s){const a=new Ye(0);let o=r===!0?0:1,l,c,h=null,u=0,d=null;function g(E){let U=E.isScene===!0?E.background:null;return U&&U.isTexture&&(U=(E.backgroundBlurriness>0?t:e).get(U)),U}function m(E){let U=!1;const v=g(E);v===null?f(a,o):v&&v.isColor&&(f(v,1),U=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?A.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&A.buffers.color.setClear(0,0,0,0,s),(n.autoClear||U)&&(A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(E,U){const v=g(U);v&&(v.isCubeTexture||v.mapping===ea)?(c===void 0&&(c=new _A(new Tr(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:Ri(wA.backgroundCube.uniforms),vertexShader:wA.backgroundCube.vertexShader,fragmentShader:wA.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,y,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),En.copy(U.backgroundRotation),En.x*=-1,En.y*=-1,En.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(En.y*=-1,En.z*=-1),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(om.makeRotationFromEuler(En)),c.material.toneMapped=We.getTransfer(v.colorSpace)!==je,(h!==v||u!==v.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,d=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new _A(new na(2,2),new pn({name:"BackgroundMaterial",uniforms:Ri(wA.background.uniforms),vertexShader:wA.background.vertexShader,fragmentShader:wA.background.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,l.material.toneMapped=We.getTransfer(v.colorSpace)!==je,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,d=n.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function f(E,U){E.getRGB(es,Pu(n)),A.buffers.color.setClear(es.r,es.g,es.b,U,s)}return{getClearColor:function(){return a},setClearColor:function(E,U=1){a.set(E),o=U,f(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,f(a,o)},render:m,addToRenderList:p}}function cm(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),A={},i=u(null);let r=i,s=!1;function a(_,M,G,D,k){let Y=!1;const K=h(D,G,M);r!==K&&(r=K,l(r.object)),Y=d(_,D,G,k),Y&&g(_,D,G,k),k!==null&&e.update(k,n.ELEMENT_ARRAY_BUFFER),(Y||s)&&(s=!1,v(_,M,G,D),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function o(){return n.createVertexArray()}function l(_){return n.bindVertexArray(_)}function c(_){return n.deleteVertexArray(_)}function h(_,M,G){const D=G.wireframe===!0;let k=A[_.id];k===void 0&&(k={},A[_.id]=k);let Y=k[M.id];Y===void 0&&(Y={},k[M.id]=Y);let K=Y[D];return K===void 0&&(K=u(o()),Y[D]=K),K}function u(_){const M=[],G=[],D=[];for(let k=0;k<t;k++)M[k]=0,G[k]=0,D[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:G,attributeDivisors:D,object:_,attributes:{},index:null}}function d(_,M,G,D){const k=r.attributes,Y=M.attributes;let K=0;const X=G.getAttributes();for(const O in X)if(X[O].location>=0){const ie=k[O];let ge=Y[O];if(ge===void 0&&(O==="instanceMatrix"&&_.instanceMatrix&&(ge=_.instanceMatrix),O==="instanceColor"&&_.instanceColor&&(ge=_.instanceColor)),ie===void 0||ie.attribute!==ge||ge&&ie.data!==ge.data)return!0;K++}return r.attributesNum!==K||r.index!==D}function g(_,M,G,D){const k={},Y=M.attributes;let K=0;const X=G.getAttributes();for(const O in X)if(X[O].location>=0){let ie=Y[O];ie===void 0&&(O==="instanceMatrix"&&_.instanceMatrix&&(ie=_.instanceMatrix),O==="instanceColor"&&_.instanceColor&&(ie=_.instanceColor));const ge={};ge.attribute=ie,ie&&ie.data&&(ge.data=ie.data),k[O]=ge,K++}r.attributes=k,r.attributesNum=K,r.index=D}function m(){const _=r.newAttributes;for(let M=0,G=_.length;M<G;M++)_[M]=0}function p(_){f(_,0)}function f(_,M){const G=r.newAttributes,D=r.enabledAttributes,k=r.attributeDivisors;G[_]=1,D[_]===0&&(n.enableVertexAttribArray(_),D[_]=1),k[_]!==M&&(n.vertexAttribDivisor(_,M),k[_]=M)}function E(){const _=r.newAttributes,M=r.enabledAttributes;for(let G=0,D=M.length;G<D;G++)M[G]!==_[G]&&(n.disableVertexAttribArray(G),M[G]=0)}function U(_,M,G,D,k,Y,K){K===!0?n.vertexAttribIPointer(_,M,G,k,Y):n.vertexAttribPointer(_,M,G,D,k,Y)}function v(_,M,G,D){m();const k=D.attributes,Y=G.getAttributes(),K=M.defaultAttributeValues;for(const X in Y){const O=Y[X];if(O.location>=0){let te=k[X];if(te===void 0&&(X==="instanceMatrix"&&_.instanceMatrix&&(te=_.instanceMatrix),X==="instanceColor"&&_.instanceColor&&(te=_.instanceColor)),te!==void 0){const ie=te.normalized,ge=te.itemSize,Se=e.get(te);if(Se===void 0)continue;const He=Se.buffer,z=Se.type,$=Se.bytesPerElement,ue=z===n.INT||z===n.UNSIGNED_INT||te.gpuType===Rl;if(te.isInterleavedBufferAttribute){const Ae=te.data,ye=Ae.stride,be=te.offset;if(Ae.isInstancedInterleavedBuffer){for(let Pe=0;Pe<O.locationSize;Pe++)f(O.location+Pe,Ae.meshPerAttribute);_.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let Pe=0;Pe<O.locationSize;Pe++)p(O.location+Pe);n.bindBuffer(n.ARRAY_BUFFER,He);for(let Pe=0;Pe<O.locationSize;Pe++)U(O.location+Pe,ge/O.locationSize,z,ie,ye*$,(be+ge/O.locationSize*Pe)*$,ue)}else{if(te.isInstancedBufferAttribute){for(let Ae=0;Ae<O.locationSize;Ae++)f(O.location+Ae,te.meshPerAttribute);_.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Ae=0;Ae<O.locationSize;Ae++)p(O.location+Ae);n.bindBuffer(n.ARRAY_BUFFER,He);for(let Ae=0;Ae<O.locationSize;Ae++)U(O.location+Ae,ge/O.locationSize,z,ie,ge*$,ge/O.locationSize*Ae*$,ue)}}else if(K!==void 0){const ie=K[X];if(ie!==void 0)switch(ie.length){case 2:n.vertexAttrib2fv(O.location,ie);break;case 3:n.vertexAttrib3fv(O.location,ie);break;case 4:n.vertexAttrib4fv(O.location,ie);break;default:n.vertexAttrib1fv(O.location,ie)}}}}E()}function b(){F();for(const _ in A){const M=A[_];for(const G in M){const D=M[G];for(const k in D)c(D[k].object),delete D[k];delete M[G]}delete A[_]}}function y(_){if(A[_.id]===void 0)return;const M=A[_.id];for(const G in M){const D=M[G];for(const k in D)c(D[k].object),delete D[k];delete M[G]}delete A[_.id]}function S(_){for(const M in A){const G=A[M];if(G[_.id]===void 0)continue;const D=G[_.id];for(const k in D)c(D[k].object),delete D[k];delete G[_.id]}}function F(){C(),s=!0,r!==i&&(r=i,l(r.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:F,resetDefaultState:C,dispose:b,releaseStatesOfGeometry:y,releaseStatesOfProgram:S,initAttributes:m,enableAttribute:p,disableUnusedAttributes:E}}function hm(n,e,t){let A;function i(l){A=l}function r(l,c){n.drawArrays(A,l,c),t.update(c,A,1)}function s(l,c,h){h!==0&&(n.drawArraysInstanced(A,l,c,h),t.update(c,A,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(A,l,0,c,0,h);let d=0;for(let g=0;g<h;g++)d+=c[g];t.update(d,A,1)}function o(l,c,h,u){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)s(l[g],c[g],u[g]);else{d.multiDrawArraysInstancedWEBGL(A,l,0,c,0,u,0,h);let g=0;for(let m=0;m<h;m++)g+=c[m]*u[m];t.update(g,A,1)}}this.setMode=i,this.render=r,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=o}function um(n,e,t,A){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(S){return!(S!==hA&&A.convert(S)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(S){const F=S===Mr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(S!==GA&&A.convert(S)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==HA&&!F)}function o(S){if(S==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const c=o(l);c!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",c,"instead."),l=c);const h=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),U=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,y=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:o,textureFormatReadable:s,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:m,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:E,maxVaryings:U,maxFragmentUniforms:v,vertexTextures:b,maxSamples:y}}function fm(n){const e=this;let t=null,A=0,i=!1,r=!1;const s=new en,a=new Ie,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const d=h.length!==0||u||A!==0||i;return i=u,A=h.length,d},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){t=c(h,u,0)},this.setState=function(h,u,d){const g=h.clippingPlanes,m=h.clipIntersection,p=h.clipShadows,f=n.get(h);if(!i||g===null||g.length===0||r&&!p)r?c(null):l();else{const E=r?0:A,U=E*4;let v=f.clippingState||null;o.value=v,v=c(g,u,U,d);for(let b=0;b!==U;++b)v[b]=t[b];f.clippingState=v,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=E}};function l(){o.value!==t&&(o.value=t,o.needsUpdate=A>0),e.numPlanes=A,e.numIntersection=0}function c(h,u,d,g){const m=h!==null?h.length:0;let p=null;if(m!==0){if(p=o.value,g!==!0||p===null){const f=d+m*4,E=u.matrixWorldInverse;a.getNormalMatrix(E),(p===null||p.length<f)&&(p=new Float32Array(f));for(let U=0,v=d;U!==m;++U,v+=4)s.copy(h[U]).applyMatrix4(E,a),s.normal.toArray(p,v),p[v+3]=s.constant}o.value=p,o.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,p}}function dm(n){let e=new WeakMap;function t(s,a){return a===To?s.mapping=Ti:a===Qo&&(s.mapping=Qi),s}function A(s){if(s&&s.isTexture){const a=s.mapping;if(a===To||a===Qo)if(e.has(s)){const o=e.get(s).texture;return t(o,s.mapping)}else{const o=s.image;if(o&&o.height>0){const l=new Up(o.height);return l.fromEquirectangularTexture(n,s),e.set(s,l),s.addEventListener("dispose",i),t(l.texture,s.mapping)}else return null}}return s}function i(s){const a=s.target;a.removeEventListener("dispose",i);const o=e.get(a);o!==void 0&&(e.delete(a),o.dispose())}function r(){e=new WeakMap}return{get:A,dispose:r}}class pm extends Nu{constructor(e=-1,t=1,A=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=A,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,A,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=A,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),A=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=A-e,s=A+e,a=i+t,o=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,s=r+l*this.view.width,a-=c*this.view.offsetY,o=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const pi=4,Nc=[.125,.215,.35,.446,.526,.582],Mn=20,Oa=new pm,Oc=new Ye;let Ga=null,Va=0,Ka=0,ka=!1;const yn=(1+Math.sqrt(5))/2,ii=1/yn,Gc=[new R(-yn,ii,0),new R(yn,ii,0),new R(-ii,0,yn),new R(ii,0,yn),new R(0,yn,-ii),new R(0,yn,ii),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class Vc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,A=.1,i=100){Ga=this._renderer.getRenderTarget(),Va=this._renderer.getActiveCubeFace(),Ka=this._renderer.getActiveMipmapLevel(),ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,A,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ga,Va,Ka),this._renderer.xr.enabled=ka,e.scissorTest=!1,ts(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ti||e.mapping===Qi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ga=this._renderer.getRenderTarget(),Va=this._renderer.getActiveCubeFace(),Ka=this._renderer.getActiveMipmapLevel(),ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const A=t||this._allocateTargets();return this._textureToCubeUV(e,A),this._applyPMREM(A),this._cleanup(A),A}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,A={magFilter:vA,minFilter:vA,generateMipmaps:!1,type:Mr,format:hA,colorSpace:Hi,depthBuffer:!1},i=Kc(e,t,A);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kc(e,t,A);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gm(r)),this._blurMaterial=mm(r,e,t)}return i}_compileMaterial(e){const t=new _A(this._lodPlanes[0],e);this._renderer.compile(t,Oa)}_sceneToCubeUV(e,t,A,i){const a=new eA(90,1,t,A),o=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,u=c.toneMapping;c.getClearColor(Oc),c.toneMapping=hn,c.autoClear=!1;const d=new Vl({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),g=new _A(new Tr,d);let m=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,m=!0):(d.color.copy(Oc),m=!0);for(let f=0;f<6;f++){const E=f%3;E===0?(a.up.set(0,o[f],0),a.lookAt(l[f],0,0)):E===1?(a.up.set(0,0,o[f]),a.lookAt(0,l[f],0)):(a.up.set(0,o[f],0),a.lookAt(0,0,l[f]));const U=this._cubeSize;ts(i,E*U,f>2?U:0,U,U),c.setRenderTarget(i),m&&c.render(g,a),c.render(e,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=u,c.autoClear=h,e.background=p}_textureToCubeUV(e,t){const A=this._renderer,i=e.mapping===Ti||e.mapping===Qi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=zc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kc());const r=i?this._cubemapMaterial:this._equirectMaterial,s=new _A(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const o=this._cubeSize;ts(t,0,0,3*o,2*o),A.setRenderTarget(t),A.render(s,Oa)}_applyPMREM(e){const t=this._renderer,A=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Gc[(i-r-1)%Gc.length];this._blur(e,r-1,r,s,a)}t.autoClear=A}_blur(e,t,A,i,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,A,i,"latitudinal",r),this._halfBlur(s,e,A,A,i,"longitudinal",r)}_halfBlur(e,t,A,i,r,s,a){const o=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new _A(this._lodPlanes[i],l),u=l.uniforms,d=this._sizeLods[A]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Mn-1),m=r/g,p=isFinite(r)?1+Math.floor(c*m):Mn;p>Mn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Mn}`);const f=[];let E=0;for(let S=0;S<Mn;++S){const F=S/m,C=Math.exp(-F*F/2);f.push(C),S===0?E+=C:S<p&&(E+=2*C)}for(let S=0;S<f.length;S++)f[S]=f[S]/E;u.envMap.value=e.texture,u.samples.value=p,u.weights.value=f,u.latitudinal.value=s==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:U}=this;u.dTheta.value=g,u.mipInt.value=U-A;const v=this._sizeLods[i],b=3*v*(i>U-pi?i-U+pi:0),y=4*(this._cubeSize-v);ts(t,b,y,3*v,2*v),o.setRenderTarget(t),o.render(h,Oa)}}function gm(n){const e=[],t=[],A=[];let i=n;const r=n-pi+1+Nc.length;for(let s=0;s<r;s++){const a=Math.pow(2,i);t.push(a);let o=1/a;s>n-pi?o=Nc[s-n+pi-1]:s===0&&(o=0),A.push(o);const l=1/(a-2),c=-l,h=1+l,u=[c,c,h,c,h,h,c,c,h,h,c,h],d=6,g=6,m=3,p=2,f=1,E=new Float32Array(m*g*d),U=new Float32Array(p*g*d),v=new Float32Array(f*g*d);for(let y=0;y<d;y++){const S=y%3*2/3-1,F=y>2?0:-1,C=[S,F,0,S+2/3,F,0,S+2/3,F+1,0,S,F,0,S+2/3,F+1,0,S,F+1,0];E.set(C,m*g*y),U.set(u,p*g*y);const _=[y,y,y,y,y,y];v.set(_,f*g*y)}const b=new mn;b.setAttribute("position",new dA(E,m)),b.setAttribute("uv",new dA(U,p)),b.setAttribute("faceIndex",new dA(v,f)),e.push(b),i>pi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:A}}function Kc(n,e,t){const A=new Gn(n,e,t);return A.texture.mapping=ea,A.texture.name="PMREM.cubeUv",A.scissorTest=!0,A}function ts(n,e,t,A,i){n.viewport.set(e,t,A,i),n.scissor.set(e,t,A,i)}function mm(n,e,t){const A=new Float32Array(Mn),i=new R(0,1,0);return new pn({name:"SphericalGaussianBlur",defines:{n:Mn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:A},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Kl(),fragmentShader:`

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
		`,blending:cn,depthTest:!1,depthWrite:!1})}function kc(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kl(),fragmentShader:`

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
		`,blending:cn,depthTest:!1,depthWrite:!1})}function zc(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cn,depthTest:!1,depthWrite:!1})}function Kl(){return`

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
	`}function Bm(n){let e=new WeakMap,t=null;function A(a){if(a&&a.isTexture){const o=a.mapping,l=o===To||o===Qo,c=o===Ti||o===Qi;if(l||c){let h=e.get(a);const u=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new Vc(n)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return l&&d&&d.height>0||c&&d&&i(d)?(t===null&&(t=new Vc(n)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let o=0;const l=6;for(let c=0;c<l;c++)a[c]!==void 0&&o++;return o===l}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:A,dispose:s}}function wm(n){const e={};function t(A){if(e[A]!==void 0)return e[A];let i;switch(A){case"WEBGL_depth_texture":i=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=n.getExtension(A)}return e[A]=i,i}return{has:function(A){return t(A)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(A){const i=t(A);return i===null&&qi("THREE.WebGLRenderer: "+A+" extension not supported."),i}}}function vm(n,e,t,A){const i={},r=new WeakMap;function s(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const m=u.morphAttributes[g];for(let p=0,f=m.length;p<f;p++)e.remove(m[p])}u.removeEventListener("dispose",s),delete i[u.id];const d=r.get(u);d&&(e.remove(d),r.delete(u)),A.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(h,u){return i[u.id]===!0||(u.addEventListener("dispose",s),i[u.id]=!0,t.memory.geometries++),u}function o(h){const u=h.attributes;for(const g in u)e.update(u[g],n.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const m=d[g];for(let p=0,f=m.length;p<f;p++)e.update(m[p],n.ARRAY_BUFFER)}}function l(h){const u=[],d=h.index,g=h.attributes.position;let m=0;if(d!==null){const E=d.array;m=d.version;for(let U=0,v=E.length;U<v;U+=3){const b=E[U+0],y=E[U+1],S=E[U+2];u.push(b,y,y,S,S,b)}}else if(g!==void 0){const E=g.array;m=g.version;for(let U=0,v=E.length/3-1;U<v;U+=3){const b=U+0,y=U+1,S=U+2;u.push(b,y,y,S,S,b)}}else return;const p=new(bu(u)?Hu:Du)(u,1);p.version=m;const f=r.get(h);f&&e.remove(f),r.set(h,p)}function c(h){const u=r.get(h);if(u){const d=h.index;d!==null&&u.version<d.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:o,getWireframeAttribute:c}}function _m(n,e,t){let A;function i(u){A=u}let r,s;function a(u){r=u.type,s=u.bytesPerElement}function o(u,d){n.drawElements(A,d,r,u*s),t.update(d,A,1)}function l(u,d,g){g!==0&&(n.drawElementsInstanced(A,d,r,u*s,g),t.update(d,A,g))}function c(u,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(A,d,0,r,u,0,g);let p=0;for(let f=0;f<g;f++)p+=d[f];t.update(p,A,1)}function h(u,d,g,m){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<u.length;f++)l(u[f]/s,d[f],m[f]);else{p.multiDrawElementsInstancedWEBGL(A,d,0,r,u,0,m,0,g);let f=0;for(let E=0;E<g;E++)f+=d[E]*m[E];t.update(f,A,1)}}this.setMode=i,this.setIndex=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function Cm(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function A(r,s,a){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:A}}function Em(n,e,t){const A=new WeakMap,i=new mt;function r(s,a,o){const l=s.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0;let u=A.get(a);if(u===void 0||u.count!==h){let _=function(){F.dispose(),A.delete(a),a.removeEventListener("dispose",_)};var d=_;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],U=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),m===!0&&(v=2),p===!0&&(v=3);let b=a.attributes.position.count*v,y=1;b>e.maxTextureSize&&(y=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const S=new Float32Array(b*y*4*h),F=new Qu(S,b,y,h);F.type=HA,F.needsUpdate=!0;const C=v*4;for(let M=0;M<h;M++){const G=f[M],D=E[M],k=U[M],Y=b*y*4*M;for(let K=0;K<G.count;K++){const X=K*C;g===!0&&(i.fromBufferAttribute(G,K),S[Y+X+0]=i.x,S[Y+X+1]=i.y,S[Y+X+2]=i.z,S[Y+X+3]=0),m===!0&&(i.fromBufferAttribute(D,K),S[Y+X+4]=i.x,S[Y+X+5]=i.y,S[Y+X+6]=i.z,S[Y+X+7]=0),p===!0&&(i.fromBufferAttribute(k,K),S[Y+X+8]=i.x,S[Y+X+9]=i.y,S[Y+X+10]=i.z,S[Y+X+11]=k.itemSize===4?i.w:1)}}u={count:h,texture:F,size:new De(b,y)},A.set(a,u),a.addEventListener("dispose",_)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const m=a.morphTargetsRelative?1:1-g;o.getUniforms().setValue(n,"morphTargetBaseInfluence",m),o.getUniforms().setValue(n,"morphTargetInfluences",l)}o.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function xm(n,e,t,A){let i=new WeakMap;function r(o){const l=A.render.frame,c=o.geometry,h=e.get(o,c);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),o.isInstancedMesh&&(o.hasEventListener("dispose",a)===!1&&o.addEventListener("dispose",a),i.get(o)!==l&&(t.update(o.instanceMatrix,n.ARRAY_BUFFER),o.instanceColor!==null&&t.update(o.instanceColor,n.ARRAY_BUFFER),i.set(o,l))),o.isSkinnedMesh){const u=o.skeleton;i.get(u)!==l&&(u.update(),i.set(u,l))}return h}function s(){i=new WeakMap}function a(o){const l=o.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:s}}class Ku extends Kt{constructor(e,t,A,i,r,s,a,o,l,c=vi){if(c!==vi&&c!==Li)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");A===void 0&&c===vi&&(A=On),A===void 0&&c===Li&&(A=Ii),super(null,i,r,s,a,o,c,A,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:fA,this.minFilter=o!==void 0?o:fA,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ku=new Kt,Wc=new Ku(1,1),zu=new Qu,Wu=new lp,Xu=new Ou,Xc=[],Yc=[],Jc=new Float32Array(16),Zc=new Float32Array(9),qc=new Float32Array(4);function Pi(n,e,t){const A=n[0];if(A<=0||A>0)return n;const i=e*t;let r=Xc[i];if(r===void 0&&(r=new Float32Array(i),Xc[i]=r),e!==0){A.toArray(r,0);for(let s=1,a=0;s!==e;++s)a+=t,n[s].toArray(r,a)}return r}function Et(n,e){if(n.length!==e.length)return!1;for(let t=0,A=n.length;t<A;t++)if(n[t]!==e[t])return!1;return!0}function xt(n,e){for(let t=0,A=e.length;t<A;t++)n[t]=e[t]}function ia(n,e){let t=Yc[e];t===void 0&&(t=new Int32Array(e),Yc[e]=t);for(let A=0;A!==e;++A)t[A]=n.allocateTextureUnit();return t}function Um(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function ym(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2fv(this.addr,e),xt(t,e)}}function Sm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;n.uniform3fv(this.addr,e),xt(t,e)}}function Mm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4fv(this.addr,e),xt(t,e)}}function Fm(n,e){const t=this.cache,A=e.elements;if(A===void 0){if(Et(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(Et(t,A))return;qc.set(A),n.uniformMatrix2fv(this.addr,!1,qc),xt(t,A)}}function bm(n,e){const t=this.cache,A=e.elements;if(A===void 0){if(Et(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(Et(t,A))return;Zc.set(A),n.uniformMatrix3fv(this.addr,!1,Zc),xt(t,A)}}function Tm(n,e){const t=this.cache,A=e.elements;if(A===void 0){if(Et(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(Et(t,A))return;Jc.set(A),n.uniformMatrix4fv(this.addr,!1,Jc),xt(t,A)}}function Qm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Im(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2iv(this.addr,e),xt(t,e)}}function Lm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3iv(this.addr,e),xt(t,e)}}function Rm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4iv(this.addr,e),xt(t,e)}}function Dm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Hm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2uiv(this.addr,e),xt(t,e)}}function Pm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3uiv(this.addr,e),xt(t,e)}}function Nm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4uiv(this.addr,e),xt(t,e)}}function Om(n,e,t){const A=this.cache,i=t.allocateTextureUnit();A[0]!==i&&(n.uniform1i(this.addr,i),A[0]=i);let r;this.type===n.SAMPLER_2D_SHADOW?(Wc.compareFunction=Fu,r=Wc):r=ku,t.setTexture2D(e||r,i)}function Gm(n,e,t){const A=this.cache,i=t.allocateTextureUnit();A[0]!==i&&(n.uniform1i(this.addr,i),A[0]=i),t.setTexture3D(e||Wu,i)}function Vm(n,e,t){const A=this.cache,i=t.allocateTextureUnit();A[0]!==i&&(n.uniform1i(this.addr,i),A[0]=i),t.setTextureCube(e||Xu,i)}function Km(n,e,t){const A=this.cache,i=t.allocateTextureUnit();A[0]!==i&&(n.uniform1i(this.addr,i),A[0]=i),t.setTexture2DArray(e||zu,i)}function km(n){switch(n){case 5126:return Um;case 35664:return ym;case 35665:return Sm;case 35666:return Mm;case 35674:return Fm;case 35675:return bm;case 35676:return Tm;case 5124:case 35670:return Qm;case 35667:case 35671:return Im;case 35668:case 35672:return Lm;case 35669:case 35673:return Rm;case 5125:return Dm;case 36294:return Hm;case 36295:return Pm;case 36296:return Nm;case 35678:case 36198:case 36298:case 36306:case 35682:return Om;case 35679:case 36299:case 36307:return Gm;case 35680:case 36300:case 36308:case 36293:return Vm;case 36289:case 36303:case 36311:case 36292:return Km}}function zm(n,e){n.uniform1fv(this.addr,e)}function Wm(n,e){const t=Pi(e,this.size,2);n.uniform2fv(this.addr,t)}function Xm(n,e){const t=Pi(e,this.size,3);n.uniform3fv(this.addr,t)}function Ym(n,e){const t=Pi(e,this.size,4);n.uniform4fv(this.addr,t)}function Jm(n,e){const t=Pi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Zm(n,e){const t=Pi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function qm(n,e){const t=Pi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function $m(n,e){n.uniform1iv(this.addr,e)}function jm(n,e){n.uniform2iv(this.addr,e)}function eB(n,e){n.uniform3iv(this.addr,e)}function tB(n,e){n.uniform4iv(this.addr,e)}function AB(n,e){n.uniform1uiv(this.addr,e)}function nB(n,e){n.uniform2uiv(this.addr,e)}function iB(n,e){n.uniform3uiv(this.addr,e)}function rB(n,e){n.uniform4uiv(this.addr,e)}function sB(n,e,t){const A=this.cache,i=e.length,r=ia(t,i);Et(A,r)||(n.uniform1iv(this.addr,r),xt(A,r));for(let s=0;s!==i;++s)t.setTexture2D(e[s]||ku,r[s])}function aB(n,e,t){const A=this.cache,i=e.length,r=ia(t,i);Et(A,r)||(n.uniform1iv(this.addr,r),xt(A,r));for(let s=0;s!==i;++s)t.setTexture3D(e[s]||Wu,r[s])}function oB(n,e,t){const A=this.cache,i=e.length,r=ia(t,i);Et(A,r)||(n.uniform1iv(this.addr,r),xt(A,r));for(let s=0;s!==i;++s)t.setTextureCube(e[s]||Xu,r[s])}function lB(n,e,t){const A=this.cache,i=e.length,r=ia(t,i);Et(A,r)||(n.uniform1iv(this.addr,r),xt(A,r));for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||zu,r[s])}function cB(n){switch(n){case 5126:return zm;case 35664:return Wm;case 35665:return Xm;case 35666:return Ym;case 35674:return Jm;case 35675:return Zm;case 35676:return qm;case 5124:case 35670:return $m;case 35667:case 35671:return jm;case 35668:case 35672:return eB;case 35669:case 35673:return tB;case 5125:return AB;case 36294:return nB;case 36295:return iB;case 36296:return rB;case 35678:case 36198:case 36298:case 36306:case 35682:return sB;case 35679:case 36299:case 36307:return aB;case 35680:case 36300:case 36308:case 36293:return oB;case 36289:case 36303:case 36311:case 36292:return lB}}class hB{constructor(e,t,A){this.id=e,this.addr=A,this.cache=[],this.type=t.type,this.setValue=km(t.type)}}class uB{constructor(e,t,A){this.id=e,this.addr=A,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cB(t.type)}}class fB{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,A){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const a=i[r];a.setValue(e,t[a.id],A)}}}const za=/(\w+)(\])?(\[|\.)?/g;function $c(n,e){n.seq.push(e),n.map[e.id]=e}function dB(n,e,t){const A=n.name,i=A.length;for(za.lastIndex=0;;){const r=za.exec(A),s=za.lastIndex;let a=r[1];const o=r[2]==="]",l=r[3];if(o&&(a=a|0),l===void 0||l==="["&&s+2===i){$c(t,l===void 0?new hB(a,n,e):new uB(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new fB(a),$c(t,h)),t=h}}}class Rs{constructor(e,t){this.seq=[],this.map={};const A=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<A;++i){const r=e.getActiveUniform(t,i),s=e.getUniformLocation(t,r.name);dB(r,s,this)}}setValue(e,t,A,i){const r=this.map[t];r!==void 0&&r.setValue(e,A,i)}setOptional(e,t,A){const i=t[A];i!==void 0&&this.setValue(e,A,i)}static upload(e,t,A,i){for(let r=0,s=t.length;r!==s;++r){const a=t[r],o=A[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,i)}}static seqWithValue(e,t){const A=[];for(let i=0,r=e.length;i!==r;++i){const s=e[i];s.id in t&&A.push(s)}return A}}function jc(n,e,t){const A=n.createShader(e);return n.shaderSource(A,t),n.compileShader(A),A}const pB=37297;let gB=0;function mB(n,e){const t=n.split(`
`),A=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=i;s<r;s++){const a=s+1;A.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return A.join(`
`)}const eh=new Ie;function BB(n){We._getMatrix(eh,We.workingColorSpace,n);const e=`mat3( ${eh.elements.map(t=>t.toFixed(4))} )`;switch(We.getTransfer(n)){case ta:return[e,"LinearTransferOETF"];case je:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function th(n,e,t){const A=n.getShaderParameter(e,n.COMPILE_STATUS),i=n.getShaderInfoLog(e).trim();if(A&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const s=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+mB(n.getShaderSource(e),s)}else return i}function wB(n,e){const t=BB(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function vB(n,e){let t;switch(e){case Ld:t="Linear";break;case Rd:t="Reinhard";break;case Dd:t="Cineon";break;case Hd:t="ACESFilmic";break;case Nd:t="AgX";break;case Od:t="Neutral";break;case Pd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const As=new R;function _B(){We.getLuminanceCoefficients(As);const n=As.x.toFixed(4),e=As.y.toFixed(4),t=As.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function CB(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($i).join(`
`)}function EB(n){const e=[];for(const t in n){const A=n[t];A!==!1&&e.push("#define "+t+" "+A)}return e.join(`
`)}function xB(n,e){const t={},A=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let i=0;i<A;i++){const r=n.getActiveAttrib(e,i),s=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[s]={type:r.type,location:n.getAttribLocation(e,s),locationSize:a}}return t}function $i(n){return n!==""}function Ah(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const UB=/^[ \t]*#include +<([\w\d./]+)>/gm;function ol(n){return n.replace(UB,SB)}const yB=new Map;function SB(n,e){let t=Re[e];if(t===void 0){const A=yB.get(e);if(A!==void 0)t=Re[A],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,A);else throw new Error("Can not resolve #include <"+e+">")}return ol(t)}const MB=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ih(n){return n.replace(MB,FB)}function FB(n,e,t,A){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=A.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function rh(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function bB(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===gu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===fd?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===LA&&(e="SHADOWMAP_TYPE_VSM"),e}function TB(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ti:case Qi:e="ENVMAP_TYPE_CUBE";break;case ea:e="ENVMAP_TYPE_CUBE_UV";break}return e}function QB(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Qi:e="ENVMAP_MODE_REFRACTION";break}return e}function IB(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case mu:e="ENVMAP_BLENDING_MULTIPLY";break;case Qd:e="ENVMAP_BLENDING_MIX";break;case Id:e="ENVMAP_BLENDING_ADD";break}return e}function LB(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,A=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:A,maxMip:t}}function RB(n,e,t,A){const i=n.getContext(),r=t.defines;let s=t.vertexShader,a=t.fragmentShader;const o=bB(t),l=TB(t),c=QB(t),h=IB(t),u=LB(t),d=CB(t),g=EB(r),m=i.createProgram();let p,f,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter($i).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter($i).join(`
`),f.length>0&&(f+=`
`)):(p=[rh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($i).join(`
`),f=[rh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hn?"#define TONE_MAPPING":"",t.toneMapping!==hn?Re.tonemapping_pars_fragment:"",t.toneMapping!==hn?vB("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Re.colorspace_pars_fragment,wB("linearToOutputTexel",t.outputColorSpace),_B(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($i).join(`
`)),s=ol(s),s=Ah(s,t),s=nh(s,t),a=ol(a),a=Ah(a,t),a=nh(a,t),s=ih(s),a=ih(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===Bc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const U=E+p+s,v=E+f+a,b=jc(i,i.VERTEX_SHADER,U),y=jc(i,i.FRAGMENT_SHADER,v);i.attachShader(m,b),i.attachShader(m,y),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function S(M){if(n.debug.checkShaderErrors){const G=i.getProgramInfoLog(m).trim(),D=i.getShaderInfoLog(b).trim(),k=i.getShaderInfoLog(y).trim();let Y=!0,K=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(i,m,b,y);else{const X=th(i,b,"vertex"),O=th(i,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+G+`
`+X+`
`+O)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(D===""||k==="")&&(K=!1);K&&(M.diagnostics={runnable:Y,programLog:G,vertexShader:{log:D,prefix:p},fragmentShader:{log:k,prefix:f}})}i.deleteShader(b),i.deleteShader(y),F=new Rs(i,m),C=xB(i,m)}let F;this.getUniforms=function(){return F===void 0&&S(this),F};let C;this.getAttributes=function(){return C===void 0&&S(this),C};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=i.getProgramParameter(m,pB)),_},this.destroy=function(){A.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gB++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=y,this}let DB=0;class HB{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,A=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(A),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const A of t)A.usedTimes--,A.usedTimes===0&&this.shaderCache.delete(A.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let A=t.get(e);return A===void 0&&(A=new Set,t.set(e,A)),A}_getShaderStage(e){const t=this.shaderCache;let A=t.get(e);return A===void 0&&(A=new PB(e),t.set(e,A)),A}}class PB{constructor(e){this.id=DB++,this.code=e,this.usedTimes=0}}function NB(n,e,t,A,i,r,s){const a=new Lu,o=new HB,l=new Set,c=[],h=i.logarithmicDepthBuffer,u=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(C){return l.add(C),C===0?"uv":`uv${C}`}function p(C,_,M,G,D){const k=G.fog,Y=D.geometry,K=C.isMeshStandardMaterial?G.environment:null,X=(C.isMeshStandardMaterial?t:e).get(C.envMap||K),O=X&&X.mapping===ea?X.image.height:null,te=g[C.type];C.precision!==null&&(d=i.getMaxPrecision(C.precision),d!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",d,"instead."));const ie=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ge=ie!==void 0?ie.length:0;let Se=0;Y.morphAttributes.position!==void 0&&(Se=1),Y.morphAttributes.normal!==void 0&&(Se=2),Y.morphAttributes.color!==void 0&&(Se=3);let He,z,$,ue;if(te){const $e=wA[te];He=$e.vertexShader,z=$e.fragmentShader}else He=C.vertexShader,z=C.fragmentShader,o.update(C),$=o.getVertexShaderID(C),ue=o.getFragmentShaderID(C);const Ae=n.getRenderTarget(),ye=n.state.buffers.depth.getReversed(),be=D.isInstancedMesh===!0,Pe=D.isBatchedMesh===!0,ut=!!C.map,Ke=!!C.matcap,dt=!!X,L=!!C.aoMap,Jt=!!C.lightMap,Oe=!!C.bumpMap,Ge=!!C.normalMap,xe=!!C.displacementMap,at=!!C.emissiveMap,Ee=!!C.metalnessMap,x=!!C.roughnessMap,B=C.anisotropy>0,H=C.clearcoat>0,J=C.dispersion>0,q=C.iridescence>0,W=C.sheen>0,_e=C.transmission>0,ae=B&&!!C.anisotropyMap,fe=H&&!!C.clearcoatMap,ke=H&&!!C.clearcoatNormalMap,j=H&&!!C.clearcoatRoughnessMap,de=q&&!!C.iridescenceMap,Ue=q&&!!C.iridescenceThicknessMap,Me=W&&!!C.sheenColorMap,pe=W&&!!C.sheenRoughnessMap,Ve=!!C.specularMap,Le=!!C.specularColorMap,nt=!!C.specularIntensityMap,T=_e&&!!C.transmissionMap,re=_e&&!!C.thicknessMap,V=!!C.gradientMap,Z=!!C.alphaMap,ce=C.alphaTest>0,oe=!!C.alphaHash,Te=!!C.extensions;let ft=hn;C.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(ft=n.toneMapping);const bt={shaderID:te,shaderType:C.type,shaderName:C.name,vertexShader:He,fragmentShader:z,defines:C.defines,customVertexShaderID:$,customFragmentShaderID:ue,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:d,batching:Pe,batchingColor:Pe&&D._colorsTexture!==null,instancing:be,instancingColor:be&&D.instanceColor!==null,instancingMorph:be&&D.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:Ae===null?n.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:Hi,alphaToCoverage:!!C.alphaToCoverage,map:ut,matcap:Ke,envMap:dt,envMapMode:dt&&X.mapping,envMapCubeUVHeight:O,aoMap:L,lightMap:Jt,bumpMap:Oe,normalMap:Ge,displacementMap:u&&xe,emissiveMap:at,normalMapObjectSpace:Ge&&C.normalMapType===zd,normalMapTangentSpace:Ge&&C.normalMapType===kd,metalnessMap:Ee,roughnessMap:x,anisotropy:B,anisotropyMap:ae,clearcoat:H,clearcoatMap:fe,clearcoatNormalMap:ke,clearcoatRoughnessMap:j,dispersion:J,iridescence:q,iridescenceMap:de,iridescenceThicknessMap:Ue,sheen:W,sheenColorMap:Me,sheenRoughnessMap:pe,specularMap:Ve,specularColorMap:Le,specularIntensityMap:nt,transmission:_e,transmissionMap:T,thicknessMap:re,gradientMap:V,opaque:C.transparent===!1&&C.blending===wi&&C.alphaToCoverage===!1,alphaMap:Z,alphaTest:ce,alphaHash:oe,combine:C.combine,mapUv:ut&&m(C.map.channel),aoMapUv:L&&m(C.aoMap.channel),lightMapUv:Jt&&m(C.lightMap.channel),bumpMapUv:Oe&&m(C.bumpMap.channel),normalMapUv:Ge&&m(C.normalMap.channel),displacementMapUv:xe&&m(C.displacementMap.channel),emissiveMapUv:at&&m(C.emissiveMap.channel),metalnessMapUv:Ee&&m(C.metalnessMap.channel),roughnessMapUv:x&&m(C.roughnessMap.channel),anisotropyMapUv:ae&&m(C.anisotropyMap.channel),clearcoatMapUv:fe&&m(C.clearcoatMap.channel),clearcoatNormalMapUv:ke&&m(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&m(C.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&m(C.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&m(C.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&m(C.sheenColorMap.channel),sheenRoughnessMapUv:pe&&m(C.sheenRoughnessMap.channel),specularMapUv:Ve&&m(C.specularMap.channel),specularColorMapUv:Le&&m(C.specularColorMap.channel),specularIntensityMapUv:nt&&m(C.specularIntensityMap.channel),transmissionMapUv:T&&m(C.transmissionMap.channel),thicknessMapUv:re&&m(C.thicknessMap.channel),alphaMapUv:Z&&m(C.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Ge||B),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!Y.attributes.uv&&(ut||Z),fog:!!k,useFog:C.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:ye,skinning:D.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Se,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:C.dithering,shadowMapEnabled:n.shadowMap.enabled&&M.length>0,shadowMapType:n.shadowMap.type,toneMapping:ft,decodeVideoTexture:ut&&C.map.isVideoTexture===!0&&We.getTransfer(C.map.colorSpace)===je,decodeVideoTextureEmissive:at&&C.emissiveMap.isVideoTexture===!0&&We.getTransfer(C.emissiveMap.colorSpace)===je,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===DA,flipSided:C.side===Vt,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Te&&C.extensions.clipCullDistance===!0&&A.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&C.extensions.multiDraw===!0||Pe)&&A.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:A.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return bt.vertexUv1s=l.has(1),bt.vertexUv2s=l.has(2),bt.vertexUv3s=l.has(3),l.clear(),bt}function f(C){const _=[];if(C.shaderID?_.push(C.shaderID):(_.push(C.customVertexShaderID),_.push(C.customFragmentShaderID)),C.defines!==void 0)for(const M in C.defines)_.push(M),_.push(C.defines[M]);return C.isRawShaderMaterial===!1&&(E(_,C),U(_,C),_.push(n.outputColorSpace)),_.push(C.customProgramCacheKey),_.join()}function E(C,_){C.push(_.precision),C.push(_.outputColorSpace),C.push(_.envMapMode),C.push(_.envMapCubeUVHeight),C.push(_.mapUv),C.push(_.alphaMapUv),C.push(_.lightMapUv),C.push(_.aoMapUv),C.push(_.bumpMapUv),C.push(_.normalMapUv),C.push(_.displacementMapUv),C.push(_.emissiveMapUv),C.push(_.metalnessMapUv),C.push(_.roughnessMapUv),C.push(_.anisotropyMapUv),C.push(_.clearcoatMapUv),C.push(_.clearcoatNormalMapUv),C.push(_.clearcoatRoughnessMapUv),C.push(_.iridescenceMapUv),C.push(_.iridescenceThicknessMapUv),C.push(_.sheenColorMapUv),C.push(_.sheenRoughnessMapUv),C.push(_.specularMapUv),C.push(_.specularColorMapUv),C.push(_.specularIntensityMapUv),C.push(_.transmissionMapUv),C.push(_.thicknessMapUv),C.push(_.combine),C.push(_.fogExp2),C.push(_.sizeAttenuation),C.push(_.morphTargetsCount),C.push(_.morphAttributeCount),C.push(_.numDirLights),C.push(_.numPointLights),C.push(_.numSpotLights),C.push(_.numSpotLightMaps),C.push(_.numHemiLights),C.push(_.numRectAreaLights),C.push(_.numDirLightShadows),C.push(_.numPointLightShadows),C.push(_.numSpotLightShadows),C.push(_.numSpotLightShadowsWithMaps),C.push(_.numLightProbes),C.push(_.shadowMapType),C.push(_.toneMapping),C.push(_.numClippingPlanes),C.push(_.numClipIntersection),C.push(_.depthPacking)}function U(C,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),C.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reverseDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),C.push(a.mask)}function v(C){const _=g[C.type];let M;if(_){const G=wA[_];M=_p.clone(G.uniforms)}else M=C.uniforms;return M}function b(C,_){let M;for(let G=0,D=c.length;G<D;G++){const k=c[G];if(k.cacheKey===_){M=k,++M.usedTimes;break}}return M===void 0&&(M=new RB(n,_,C,r),c.push(M)),M}function y(C){if(--C.usedTimes===0){const _=c.indexOf(C);c[_]=c[c.length-1],c.pop(),C.destroy()}}function S(C){o.remove(C)}function F(){o.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:v,acquireProgram:b,releaseProgram:y,releaseShaderCache:S,programs:c,dispose:F}}function OB(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function A(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{has:e,get:t,remove:A,update:i,dispose:r}}function GB(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function sh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ah(){const n=[];let e=0;const t=[],A=[],i=[];function r(){e=0,t.length=0,A.length=0,i.length=0}function s(h,u,d,g,m,p){let f=n[e];return f===void 0?(f={id:h.id,object:h,geometry:u,material:d,groupOrder:g,renderOrder:h.renderOrder,z:m,group:p},n[e]=f):(f.id=h.id,f.object=h,f.geometry=u,f.material=d,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=m,f.group=p),e++,f}function a(h,u,d,g,m,p){const f=s(h,u,d,g,m,p);d.transmission>0?A.push(f):d.transparent===!0?i.push(f):t.push(f)}function o(h,u,d,g,m,p){const f=s(h,u,d,g,m,p);d.transmission>0?A.unshift(f):d.transparent===!0?i.unshift(f):t.unshift(f)}function l(h,u){t.length>1&&t.sort(h||GB),A.length>1&&A.sort(u||sh),i.length>1&&i.sort(u||sh)}function c(){for(let h=e,u=n.length;h<u;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:A,transparent:i,init:r,push:a,unshift:o,finish:c,sort:l}}function VB(){let n=new WeakMap;function e(A,i){const r=n.get(A);let s;return r===void 0?(s=new ah,n.set(A,[s])):i>=r.length?(s=new ah,r.push(s)):s=r[i],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function KB(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Ye};break;case"SpotLight":t={position:new R,direction:new R,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new R,halfWidth:new R,halfHeight:new R};break}return n[e.id]=t,t}}}function kB(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let zB=0;function WB(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function XB(n){const e=new KB,t=kB(),A={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)A.probe.push(new R);const i=new R,r=new Bt,s=new Bt;function a(l){let c=0,h=0,u=0;for(let C=0;C<9;C++)A.probe[C].set(0,0,0);let d=0,g=0,m=0,p=0,f=0,E=0,U=0,v=0,b=0,y=0,S=0;l.sort(WB);for(let C=0,_=l.length;C<_;C++){const M=l[C],G=M.color,D=M.intensity,k=M.distance,Y=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)c+=G.r*D,h+=G.g*D,u+=G.b*D;else if(M.isLightProbe){for(let K=0;K<9;K++)A.probe[K].addScaledVector(M.sh.coefficients[K],D);S++}else if(M.isDirectionalLight){const K=e.get(M);if(K.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const X=M.shadow,O=t.get(M);O.shadowIntensity=X.intensity,O.shadowBias=X.bias,O.shadowNormalBias=X.normalBias,O.shadowRadius=X.radius,O.shadowMapSize=X.mapSize,A.directionalShadow[d]=O,A.directionalShadowMap[d]=Y,A.directionalShadowMatrix[d]=M.shadow.matrix,E++}A.directional[d]=K,d++}else if(M.isSpotLight){const K=e.get(M);K.position.setFromMatrixPosition(M.matrixWorld),K.color.copy(G).multiplyScalar(D),K.distance=k,K.coneCos=Math.cos(M.angle),K.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),K.decay=M.decay,A.spot[m]=K;const X=M.shadow;if(M.map&&(A.spotLightMap[b]=M.map,b++,X.updateMatrices(M),M.castShadow&&y++),A.spotLightMatrix[m]=X.matrix,M.castShadow){const O=t.get(M);O.shadowIntensity=X.intensity,O.shadowBias=X.bias,O.shadowNormalBias=X.normalBias,O.shadowRadius=X.radius,O.shadowMapSize=X.mapSize,A.spotShadow[m]=O,A.spotShadowMap[m]=Y,v++}m++}else if(M.isRectAreaLight){const K=e.get(M);K.color.copy(G).multiplyScalar(D),K.halfWidth.set(M.width*.5,0,0),K.halfHeight.set(0,M.height*.5,0),A.rectArea[p]=K,p++}else if(M.isPointLight){const K=e.get(M);if(K.color.copy(M.color).multiplyScalar(M.intensity),K.distance=M.distance,K.decay=M.decay,M.castShadow){const X=M.shadow,O=t.get(M);O.shadowIntensity=X.intensity,O.shadowBias=X.bias,O.shadowNormalBias=X.normalBias,O.shadowRadius=X.radius,O.shadowMapSize=X.mapSize,O.shadowCameraNear=X.camera.near,O.shadowCameraFar=X.camera.far,A.pointShadow[g]=O,A.pointShadowMap[g]=Y,A.pointShadowMatrix[g]=M.shadow.matrix,U++}A.point[g]=K,g++}else if(M.isHemisphereLight){const K=e.get(M);K.skyColor.copy(M.color).multiplyScalar(D),K.groundColor.copy(M.groundColor).multiplyScalar(D),A.hemi[f]=K,f++}}p>0&&(n.has("OES_texture_float_linear")===!0?(A.rectAreaLTC1=ne.LTC_FLOAT_1,A.rectAreaLTC2=ne.LTC_FLOAT_2):(A.rectAreaLTC1=ne.LTC_HALF_1,A.rectAreaLTC2=ne.LTC_HALF_2)),A.ambient[0]=c,A.ambient[1]=h,A.ambient[2]=u;const F=A.hash;(F.directionalLength!==d||F.pointLength!==g||F.spotLength!==m||F.rectAreaLength!==p||F.hemiLength!==f||F.numDirectionalShadows!==E||F.numPointShadows!==U||F.numSpotShadows!==v||F.numSpotMaps!==b||F.numLightProbes!==S)&&(A.directional.length=d,A.spot.length=m,A.rectArea.length=p,A.point.length=g,A.hemi.length=f,A.directionalShadow.length=E,A.directionalShadowMap.length=E,A.pointShadow.length=U,A.pointShadowMap.length=U,A.spotShadow.length=v,A.spotShadowMap.length=v,A.directionalShadowMatrix.length=E,A.pointShadowMatrix.length=U,A.spotLightMatrix.length=v+b-y,A.spotLightMap.length=b,A.numSpotLightShadowsWithMaps=y,A.numLightProbes=S,F.directionalLength=d,F.pointLength=g,F.spotLength=m,F.rectAreaLength=p,F.hemiLength=f,F.numDirectionalShadows=E,F.numPointShadows=U,F.numSpotShadows=v,F.numSpotMaps=b,F.numLightProbes=S,A.version=zB++)}function o(l,c){let h=0,u=0,d=0,g=0,m=0;const p=c.matrixWorldInverse;for(let f=0,E=l.length;f<E;f++){const U=l[f];if(U.isDirectionalLight){const v=A.directional[h];v.direction.setFromMatrixPosition(U.matrixWorld),i.setFromMatrixPosition(U.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(p),h++}else if(U.isSpotLight){const v=A.spot[d];v.position.setFromMatrixPosition(U.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(U.matrixWorld),i.setFromMatrixPosition(U.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(p),d++}else if(U.isRectAreaLight){const v=A.rectArea[g];v.position.setFromMatrixPosition(U.matrixWorld),v.position.applyMatrix4(p),s.identity(),r.copy(U.matrixWorld),r.premultiply(p),s.extractRotation(r),v.halfWidth.set(U.width*.5,0,0),v.halfHeight.set(0,U.height*.5,0),v.halfWidth.applyMatrix4(s),v.halfHeight.applyMatrix4(s),g++}else if(U.isPointLight){const v=A.point[u];v.position.setFromMatrixPosition(U.matrixWorld),v.position.applyMatrix4(p),u++}else if(U.isHemisphereLight){const v=A.hemi[m];v.direction.setFromMatrixPosition(U.matrixWorld),v.direction.transformDirection(p),m++}}}return{setup:a,setupView:o,state:A}}function oh(n){const e=new XB(n),t=[],A=[];function i(c){l.camera=c,t.length=0,A.length=0}function r(c){t.push(c)}function s(c){A.push(c)}function a(){e.setup(t)}function o(c){e.setupView(t,c)}const l={lightsArray:t,shadowsArray:A,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:o,pushLight:r,pushShadow:s}}function YB(n){let e=new WeakMap;function t(i,r=0){const s=e.get(i);let a;return s===void 0?(a=new oh(n),e.set(i,[a])):r>=s.length?(a=new oh(n),s.push(a)):a=s[r],a}function A(){e=new WeakMap}return{get:t,dispose:A}}class JB extends Aa{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Vd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ZB extends Aa{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const qB=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$B=`uniform sampler2D shadow_pass;
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
}`;function jB(n,e,t){let A=new Gu;const i=new De,r=new De,s=new mt,a=new JB({depthPacking:Kd}),o=new ZB,l={},c=t.maxTextureSize,h={[dn]:Vt,[Vt]:dn,[DA]:DA},u=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:qB,fragmentShader:$B}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const g=new mn;g.setAttribute("position",new dA(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new _A(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gu;let f=this.type;this.render=function(y,S,F){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;const C=n.getRenderTarget(),_=n.getActiveCubeFace(),M=n.getActiveMipmapLevel(),G=n.state;G.setBlending(cn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const D=f!==LA&&this.type===LA,k=f===LA&&this.type!==LA;for(let Y=0,K=y.length;Y<K;Y++){const X=y[Y],O=X.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);const te=O.getFrameExtents();if(i.multiply(te),r.copy(O.mapSize),(i.x>c||i.y>c)&&(i.x>c&&(r.x=Math.floor(c/te.x),i.x=r.x*te.x,O.mapSize.x=r.x),i.y>c&&(r.y=Math.floor(c/te.y),i.y=r.y*te.y,O.mapSize.y=r.y)),O.map===null||D===!0||k===!0){const ge=this.type!==LA?{minFilter:fA,magFilter:fA}:{};O.map!==null&&O.map.dispose(),O.map=new Gn(i.x,i.y,ge),O.map.texture.name=X.name+".shadowMap",O.camera.updateProjectionMatrix()}n.setRenderTarget(O.map),n.clear();const ie=O.getViewportCount();for(let ge=0;ge<ie;ge++){const Se=O.getViewport(ge);s.set(r.x*Se.x,r.y*Se.y,r.x*Se.z,r.y*Se.w),G.viewport(s),O.updateMatrices(X,ge),A=O.getFrustum(),v(S,F,O.camera,X,this.type)}O.isPointLightShadow!==!0&&this.type===LA&&E(O,F),O.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(C,_,M)};function E(y,S){const F=e.update(m);u.defines.VSM_SAMPLES!==y.blurSamples&&(u.defines.VSM_SAMPLES=y.blurSamples,d.defines.VSM_SAMPLES=y.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Gn(i.x,i.y)),u.uniforms.shadow_pass.value=y.map.texture,u.uniforms.resolution.value=y.mapSize,u.uniforms.radius.value=y.radius,n.setRenderTarget(y.mapPass),n.clear(),n.renderBufferDirect(S,null,F,u,m,null),d.uniforms.shadow_pass.value=y.mapPass.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,n.setRenderTarget(y.map),n.clear(),n.renderBufferDirect(S,null,F,d,m,null)}function U(y,S,F,C){let _=null;const M=F.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(M!==void 0)_=M;else if(_=F.isPointLight===!0?o:a,n.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const G=_.uuid,D=S.uuid;let k=l[G];k===void 0&&(k={},l[G]=k);let Y=k[D];Y===void 0&&(Y=_.clone(),k[D]=Y,S.addEventListener("dispose",b)),_=Y}if(_.visible=S.visible,_.wireframe=S.wireframe,C===LA?_.side=S.shadowSide!==null?S.shadowSide:S.side:_.side=S.shadowSide!==null?S.shadowSide:h[S.side],_.alphaMap=S.alphaMap,_.alphaTest=S.alphaTest,_.map=S.map,_.clipShadows=S.clipShadows,_.clippingPlanes=S.clippingPlanes,_.clipIntersection=S.clipIntersection,_.displacementMap=S.displacementMap,_.displacementScale=S.displacementScale,_.displacementBias=S.displacementBias,_.wireframeLinewidth=S.wireframeLinewidth,_.linewidth=S.linewidth,F.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const G=n.properties.get(_);G.light=F}return _}function v(y,S,F,C,_){if(y.visible===!1)return;if(y.layers.test(S.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&_===LA)&&(!y.frustumCulled||A.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,y.matrixWorld);const D=e.update(y),k=y.material;if(Array.isArray(k)){const Y=D.groups;for(let K=0,X=Y.length;K<X;K++){const O=Y[K],te=k[O.materialIndex];if(te&&te.visible){const ie=U(y,te,C,_);y.onBeforeShadow(n,y,S,F,D,ie,O),n.renderBufferDirect(F,null,D,ie,y,O),y.onAfterShadow(n,y,S,F,D,ie,O)}}}else if(k.visible){const Y=U(y,k,C,_);y.onBeforeShadow(n,y,S,F,D,Y,null),n.renderBufferDirect(F,null,D,Y,y,null),y.onAfterShadow(n,y,S,F,D,Y,null)}}const G=y.children;for(let D=0,k=G.length;D<k;D++)v(G[D],S,F,C,_)}function b(y){y.target.removeEventListener("dispose",b);for(const F in l){const C=l[F],_=y.target.uuid;_ in C&&(C[_].dispose(),delete C[_])}}}const e1={[xo]:Uo,[yo]:Fo,[So]:bo,[bi]:Mo,[Uo]:xo,[Fo]:yo,[bo]:So,[Mo]:bi};function t1(n,e){function t(){let T=!1;const re=new mt;let V=null;const Z=new mt(0,0,0,0);return{setMask:function(ce){V!==ce&&!T&&(n.colorMask(ce,ce,ce,ce),V=ce)},setLocked:function(ce){T=ce},setClear:function(ce,oe,Te,ft,bt){bt===!0&&(ce*=ft,oe*=ft,Te*=ft),re.set(ce,oe,Te,ft),Z.equals(re)===!1&&(n.clearColor(ce,oe,Te,ft),Z.copy(re))},reset:function(){T=!1,V=null,Z.set(-1,0,0,0)}}}function A(){let T=!1,re=!1,V=null,Z=null,ce=null;return{setReversed:function(oe){if(re!==oe){const Te=e.get("EXT_clip_control");re?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT);const ft=ce;ce=null,this.setClear(ft)}re=oe},getReversed:function(){return re},setTest:function(oe){oe?Ae(n.DEPTH_TEST):ye(n.DEPTH_TEST)},setMask:function(oe){V!==oe&&!T&&(n.depthMask(oe),V=oe)},setFunc:function(oe){if(re&&(oe=e1[oe]),Z!==oe){switch(oe){case xo:n.depthFunc(n.NEVER);break;case Uo:n.depthFunc(n.ALWAYS);break;case yo:n.depthFunc(n.LESS);break;case bi:n.depthFunc(n.LEQUAL);break;case So:n.depthFunc(n.EQUAL);break;case Mo:n.depthFunc(n.GEQUAL);break;case Fo:n.depthFunc(n.GREATER);break;case bo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Z=oe}},setLocked:function(oe){T=oe},setClear:function(oe){ce!==oe&&(re&&(oe=1-oe),n.clearDepth(oe),ce=oe)},reset:function(){T=!1,V=null,Z=null,ce=null,re=!1}}}function i(){let T=!1,re=null,V=null,Z=null,ce=null,oe=null,Te=null,ft=null,bt=null;return{setTest:function($e){T||($e?Ae(n.STENCIL_TEST):ye(n.STENCIL_TEST))},setMask:function($e){re!==$e&&!T&&(n.stencilMask($e),re=$e)},setFunc:function($e,iA,UA){(V!==$e||Z!==iA||ce!==UA)&&(n.stencilFunc($e,iA,UA),V=$e,Z=iA,ce=UA)},setOp:function($e,iA,UA){(oe!==$e||Te!==iA||ft!==UA)&&(n.stencilOp($e,iA,UA),oe=$e,Te=iA,ft=UA)},setLocked:function($e){T=$e},setClear:function($e){bt!==$e&&(n.clearStencil($e),bt=$e)},reset:function(){T=!1,re=null,V=null,Z=null,ce=null,oe=null,Te=null,ft=null,bt=null}}}const r=new t,s=new A,a=new i,o=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],g=null,m=!1,p=null,f=null,E=null,U=null,v=null,b=null,y=null,S=new Ye(0,0,0),F=0,C=!1,_=null,M=null,G=null,D=null,k=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,X=0;const O=n.getParameter(n.VERSION);O.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(O)[1]),K=X>=1):O.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),K=X>=2);let te=null,ie={};const ge=n.getParameter(n.SCISSOR_BOX),Se=n.getParameter(n.VIEWPORT),He=new mt().fromArray(ge),z=new mt().fromArray(Se);function $(T,re,V,Z){const ce=new Uint8Array(4),oe=n.createTexture();n.bindTexture(T,oe),n.texParameteri(T,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(T,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Te=0;Te<V;Te++)T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY?n.texImage3D(re,0,n.RGBA,1,1,Z,0,n.RGBA,n.UNSIGNED_BYTE,ce):n.texImage2D(re+Te,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ce);return oe}const ue={};ue[n.TEXTURE_2D]=$(n.TEXTURE_2D,n.TEXTURE_2D,1),ue[n.TEXTURE_CUBE_MAP]=$(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[n.TEXTURE_2D_ARRAY]=$(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ue[n.TEXTURE_3D]=$(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),Ae(n.DEPTH_TEST),s.setFunc(bi),Oe(!1),Ge(uc),Ae(n.CULL_FACE),L(cn);function Ae(T){c[T]!==!0&&(n.enable(T),c[T]=!0)}function ye(T){c[T]!==!1&&(n.disable(T),c[T]=!1)}function be(T,re){return h[T]!==re?(n.bindFramebuffer(T,re),h[T]=re,T===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=re),T===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=re),!0):!1}function Pe(T,re){let V=d,Z=!1;if(T){V=u.get(re),V===void 0&&(V=[],u.set(re,V));const ce=T.textures;if(V.length!==ce.length||V[0]!==n.COLOR_ATTACHMENT0){for(let oe=0,Te=ce.length;oe<Te;oe++)V[oe]=n.COLOR_ATTACHMENT0+oe;V.length=ce.length,Z=!0}}else V[0]!==n.BACK&&(V[0]=n.BACK,Z=!0);Z&&n.drawBuffers(V)}function ut(T){return g!==T?(n.useProgram(T),g=T,!0):!1}const Ke={[Sn]:n.FUNC_ADD,[pd]:n.FUNC_SUBTRACT,[gd]:n.FUNC_REVERSE_SUBTRACT};Ke[md]=n.MIN,Ke[Bd]=n.MAX;const dt={[wd]:n.ZERO,[vd]:n.ONE,[_d]:n.SRC_COLOR,[Co]:n.SRC_ALPHA,[Sd]:n.SRC_ALPHA_SATURATE,[Ud]:n.DST_COLOR,[Ed]:n.DST_ALPHA,[Cd]:n.ONE_MINUS_SRC_COLOR,[Eo]:n.ONE_MINUS_SRC_ALPHA,[yd]:n.ONE_MINUS_DST_COLOR,[xd]:n.ONE_MINUS_DST_ALPHA,[Md]:n.CONSTANT_COLOR,[Fd]:n.ONE_MINUS_CONSTANT_COLOR,[bd]:n.CONSTANT_ALPHA,[Td]:n.ONE_MINUS_CONSTANT_ALPHA};function L(T,re,V,Z,ce,oe,Te,ft,bt,$e){if(T===cn){m===!0&&(ye(n.BLEND),m=!1);return}if(m===!1&&(Ae(n.BLEND),m=!0),T!==dd){if(T!==p||$e!==C){if((f!==Sn||v!==Sn)&&(n.blendEquation(n.FUNC_ADD),f=Sn,v=Sn),$e)switch(T){case wi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fc:n.blendFunc(n.ONE,n.ONE);break;case dc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case pc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}else switch(T){case wi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case dc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case pc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}E=null,U=null,b=null,y=null,S.set(0,0,0),F=0,p=T,C=$e}return}ce=ce||re,oe=oe||V,Te=Te||Z,(re!==f||ce!==v)&&(n.blendEquationSeparate(Ke[re],Ke[ce]),f=re,v=ce),(V!==E||Z!==U||oe!==b||Te!==y)&&(n.blendFuncSeparate(dt[V],dt[Z],dt[oe],dt[Te]),E=V,U=Z,b=oe,y=Te),(ft.equals(S)===!1||bt!==F)&&(n.blendColor(ft.r,ft.g,ft.b,bt),S.copy(ft),F=bt),p=T,C=!1}function Jt(T,re){T.side===DA?ye(n.CULL_FACE):Ae(n.CULL_FACE);let V=T.side===Vt;re&&(V=!V),Oe(V),T.blending===wi&&T.transparent===!1?L(cn):L(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),s.setFunc(T.depthFunc),s.setTest(T.depthTest),s.setMask(T.depthWrite),r.setMask(T.colorWrite);const Z=T.stencilWrite;a.setTest(Z),Z&&(a.setMask(T.stencilWriteMask),a.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),a.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),at(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?Ae(n.SAMPLE_ALPHA_TO_COVERAGE):ye(n.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(T){_!==T&&(T?n.frontFace(n.CW):n.frontFace(n.CCW),_=T)}function Ge(T){T!==hd?(Ae(n.CULL_FACE),T!==M&&(T===uc?n.cullFace(n.BACK):T===ud?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ye(n.CULL_FACE),M=T}function xe(T){T!==G&&(K&&n.lineWidth(T),G=T)}function at(T,re,V){T?(Ae(n.POLYGON_OFFSET_FILL),(D!==re||k!==V)&&(n.polygonOffset(re,V),D=re,k=V)):ye(n.POLYGON_OFFSET_FILL)}function Ee(T){T?Ae(n.SCISSOR_TEST):ye(n.SCISSOR_TEST)}function x(T){T===void 0&&(T=n.TEXTURE0+Y-1),te!==T&&(n.activeTexture(T),te=T)}function B(T,re,V){V===void 0&&(te===null?V=n.TEXTURE0+Y-1:V=te);let Z=ie[V];Z===void 0&&(Z={type:void 0,texture:void 0},ie[V]=Z),(Z.type!==T||Z.texture!==re)&&(te!==V&&(n.activeTexture(V),te=V),n.bindTexture(T,re||ue[T]),Z.type=T,Z.texture=re)}function H(){const T=ie[te];T!==void 0&&T.type!==void 0&&(n.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function J(){try{n.compressedTexImage2D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function W(){try{n.texSubImage2D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function _e(){try{n.texSubImage3D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ae(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function fe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ke(){try{n.texStorage2D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function j(){try{n.texStorage3D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function de(){try{n.texImage2D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Ue(){try{n.texImage3D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Me(T){He.equals(T)===!1&&(n.scissor(T.x,T.y,T.z,T.w),He.copy(T))}function pe(T){z.equals(T)===!1&&(n.viewport(T.x,T.y,T.z,T.w),z.copy(T))}function Ve(T,re){let V=l.get(re);V===void 0&&(V=new WeakMap,l.set(re,V));let Z=V.get(T);Z===void 0&&(Z=n.getUniformBlockIndex(re,T.name),V.set(T,Z))}function Le(T,re){const Z=l.get(re).get(T);o.get(re)!==Z&&(n.uniformBlockBinding(re,Z,T.__bindingPointIndex),o.set(re,Z))}function nt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},te=null,ie={},h={},u=new WeakMap,d=[],g=null,m=!1,p=null,f=null,E=null,U=null,v=null,b=null,y=null,S=new Ye(0,0,0),F=0,C=!1,_=null,M=null,G=null,D=null,k=null,He.set(0,0,n.canvas.width,n.canvas.height),z.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:Ae,disable:ye,bindFramebuffer:be,drawBuffers:Pe,useProgram:ut,setBlending:L,setMaterial:Jt,setFlipSided:Oe,setCullFace:Ge,setLineWidth:xe,setPolygonOffset:at,setScissorTest:Ee,activeTexture:x,bindTexture:B,unbindTexture:H,compressedTexImage2D:J,compressedTexImage3D:q,texImage2D:de,texImage3D:Ue,updateUBOMapping:Ve,uniformBlockBinding:Le,texStorage2D:ke,texStorage3D:j,texSubImage2D:W,texSubImage3D:_e,compressedTexSubImage2D:ae,compressedTexSubImage3D:fe,scissor:Me,viewport:pe,reset:nt}}function lh(n,e,t,A){const i=A1(A);switch(t){case Cu:return n*e;case xu:return n*e;case Uu:return n*e*2;case yu:return n*e/i.components*i.byteLength;case Pl:return n*e/i.components*i.byteLength;case Su:return n*e*2/i.components*i.byteLength;case Nl:return n*e*2/i.components*i.byteLength;case Eu:return n*e*3/i.components*i.byteLength;case hA:return n*e*4/i.components*i.byteLength;case Ol:return n*e*4/i.components*i.byteLength;case Fs:case bs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ts:case Qs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Do:case Po:return Math.max(n,16)*Math.max(e,8)/4;case Ro:case Ho:return Math.max(n,8)*Math.max(e,8)/2;case No:case Oo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Go:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Vo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ko:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ko:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case zo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Wo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Xo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Yo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Jo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Zo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case qo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case $o:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case jo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case el:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case tl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Is:case Al:case nl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Mu:case il:return Math.ceil(n/4)*Math.ceil(e/4)*8;case rl:case sl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function A1(n){switch(n){case GA:case wu:return{byteLength:1,components:1};case gr:case vu:case Mr:return{byteLength:2,components:1};case Dl:case Hl:return{byteLength:2,components:4};case On:case Rl:case HA:return{byteLength:4,components:1};case _u:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function n1(n,e,t,A,i,r,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new De,c=new WeakMap;let h;const u=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(x,B){return d?new OffscreenCanvas(x,B):Gs("canvas")}function m(x,B,H){let J=1;const q=Ee(x);if((q.width>H||q.height>H)&&(J=H/Math.max(q.width,q.height)),J<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){const W=Math.floor(J*q.width),_e=Math.floor(J*q.height);h===void 0&&(h=g(W,_e));const ae=B?g(W,_e):h;return ae.width=W,ae.height=_e,ae.getContext("2d").drawImage(x,0,0,W,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+W+"x"+_e+")."),ae}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),x;return x}function p(x){return x.generateMipmaps}function f(x){n.generateMipmap(x)}function E(x){return x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?n.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function U(x,B,H,J,q=!1){if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let W=B;if(B===n.RED&&(H===n.FLOAT&&(W=n.R32F),H===n.HALF_FLOAT&&(W=n.R16F),H===n.UNSIGNED_BYTE&&(W=n.R8)),B===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(W=n.R8UI),H===n.UNSIGNED_SHORT&&(W=n.R16UI),H===n.UNSIGNED_INT&&(W=n.R32UI),H===n.BYTE&&(W=n.R8I),H===n.SHORT&&(W=n.R16I),H===n.INT&&(W=n.R32I)),B===n.RG&&(H===n.FLOAT&&(W=n.RG32F),H===n.HALF_FLOAT&&(W=n.RG16F),H===n.UNSIGNED_BYTE&&(W=n.RG8)),B===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(W=n.RG8UI),H===n.UNSIGNED_SHORT&&(W=n.RG16UI),H===n.UNSIGNED_INT&&(W=n.RG32UI),H===n.BYTE&&(W=n.RG8I),H===n.SHORT&&(W=n.RG16I),H===n.INT&&(W=n.RG32I)),B===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(W=n.RGB8UI),H===n.UNSIGNED_SHORT&&(W=n.RGB16UI),H===n.UNSIGNED_INT&&(W=n.RGB32UI),H===n.BYTE&&(W=n.RGB8I),H===n.SHORT&&(W=n.RGB16I),H===n.INT&&(W=n.RGB32I)),B===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),H===n.UNSIGNED_INT&&(W=n.RGBA32UI),H===n.BYTE&&(W=n.RGBA8I),H===n.SHORT&&(W=n.RGBA16I),H===n.INT&&(W=n.RGBA32I)),B===n.RGB&&H===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),B===n.RGBA){const _e=q?ta:We.getTransfer(J);H===n.FLOAT&&(W=n.RGBA32F),H===n.HALF_FLOAT&&(W=n.RGBA16F),H===n.UNSIGNED_BYTE&&(W=_e===je?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function v(x,B){let H;return x?B===null||B===On||B===Ii?H=n.DEPTH24_STENCIL8:B===HA?H=n.DEPTH32F_STENCIL8:B===gr&&(H=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):B===null||B===On||B===Ii?H=n.DEPTH_COMPONENT24:B===HA?H=n.DEPTH_COMPONENT32F:B===gr&&(H=n.DEPTH_COMPONENT16),H}function b(x,B){return p(x)===!0||x.isFramebufferTexture&&x.minFilter!==fA&&x.minFilter!==vA?Math.log2(Math.max(B.width,B.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?B.mipmaps.length:1}function y(x){const B=x.target;B.removeEventListener("dispose",y),F(B),B.isVideoTexture&&c.delete(B)}function S(x){const B=x.target;B.removeEventListener("dispose",S),_(B)}function F(x){const B=A.get(x);if(B.__webglInit===void 0)return;const H=x.source,J=u.get(H);if(J){const q=J[B.__cacheKey];q.usedTimes--,q.usedTimes===0&&C(x),Object.keys(J).length===0&&u.delete(H)}A.remove(x)}function C(x){const B=A.get(x);n.deleteTexture(B.__webglTexture);const H=x.source,J=u.get(H);delete J[B.__cacheKey],s.memory.textures--}function _(x){const B=A.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),A.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(B.__webglFramebuffer[J]))for(let q=0;q<B.__webglFramebuffer[J].length;q++)n.deleteFramebuffer(B.__webglFramebuffer[J][q]);else n.deleteFramebuffer(B.__webglFramebuffer[J]);B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer[J])}else{if(Array.isArray(B.__webglFramebuffer))for(let J=0;J<B.__webglFramebuffer.length;J++)n.deleteFramebuffer(B.__webglFramebuffer[J]);else n.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&n.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let J=0;J<B.__webglColorRenderbuffer.length;J++)B.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(B.__webglColorRenderbuffer[J]);B.__webglDepthRenderbuffer&&n.deleteRenderbuffer(B.__webglDepthRenderbuffer)}const H=x.textures;for(let J=0,q=H.length;J<q;J++){const W=A.get(H[J]);W.__webglTexture&&(n.deleteTexture(W.__webglTexture),s.memory.textures--),A.remove(H[J])}A.remove(x)}let M=0;function G(){M=0}function D(){const x=M;return x>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+i.maxTextures),M+=1,x}function k(x){const B=[];return B.push(x.wrapS),B.push(x.wrapT),B.push(x.wrapR||0),B.push(x.magFilter),B.push(x.minFilter),B.push(x.anisotropy),B.push(x.internalFormat),B.push(x.format),B.push(x.type),B.push(x.generateMipmaps),B.push(x.premultiplyAlpha),B.push(x.flipY),B.push(x.unpackAlignment),B.push(x.colorSpace),B.join()}function Y(x,B){const H=A.get(x);if(x.isVideoTexture&&xe(x),x.isRenderTargetTexture===!1&&x.version>0&&H.__version!==x.version){const J=x.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{z(H,x,B);return}}t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+B)}function K(x,B){const H=A.get(x);if(x.version>0&&H.__version!==x.version){z(H,x,B);return}t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+B)}function X(x,B){const H=A.get(x);if(x.version>0&&H.__version!==x.version){z(H,x,B);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+B)}function O(x,B){const H=A.get(x);if(x.version>0&&H.__version!==x.version){$(H,x,B);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+B)}const te={[Io]:n.REPEAT,[bn]:n.CLAMP_TO_EDGE,[Lo]:n.MIRRORED_REPEAT},ie={[fA]:n.NEAREST,[Gd]:n.NEAREST_MIPMAP_NEAREST,[Dr]:n.NEAREST_MIPMAP_LINEAR,[vA]:n.LINEAR,[Ba]:n.LINEAR_MIPMAP_NEAREST,[Tn]:n.LINEAR_MIPMAP_LINEAR},ge={[Wd]:n.NEVER,[$d]:n.ALWAYS,[Xd]:n.LESS,[Fu]:n.LEQUAL,[Yd]:n.EQUAL,[qd]:n.GEQUAL,[Jd]:n.GREATER,[Zd]:n.NOTEQUAL};function Se(x,B){if(B.type===HA&&e.has("OES_texture_float_linear")===!1&&(B.magFilter===vA||B.magFilter===Ba||B.magFilter===Dr||B.magFilter===Tn||B.minFilter===vA||B.minFilter===Ba||B.minFilter===Dr||B.minFilter===Tn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(x,n.TEXTURE_WRAP_S,te[B.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,te[B.wrapT]),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,te[B.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,ie[B.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,ie[B.minFilter]),B.compareFunction&&(n.texParameteri(x,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(x,n.TEXTURE_COMPARE_FUNC,ge[B.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(B.magFilter===fA||B.minFilter!==Dr&&B.minFilter!==Tn||B.type===HA&&e.has("OES_texture_float_linear")===!1)return;if(B.anisotropy>1||A.get(B).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");n.texParameterf(x,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(B.anisotropy,i.getMaxAnisotropy())),A.get(B).__currentAnisotropy=B.anisotropy}}}function He(x,B){let H=!1;x.__webglInit===void 0&&(x.__webglInit=!0,B.addEventListener("dispose",y));const J=B.source;let q=u.get(J);q===void 0&&(q={},u.set(J,q));const W=k(B);if(W!==x.__cacheKey){q[W]===void 0&&(q[W]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,H=!0),q[W].usedTimes++;const _e=q[x.__cacheKey];_e!==void 0&&(q[x.__cacheKey].usedTimes--,_e.usedTimes===0&&C(B)),x.__cacheKey=W,x.__webglTexture=q[W].texture}return H}function z(x,B,H){let J=n.TEXTURE_2D;(B.isDataArrayTexture||B.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),B.isData3DTexture&&(J=n.TEXTURE_3D);const q=He(x,B),W=B.source;t.bindTexture(J,x.__webglTexture,n.TEXTURE0+H);const _e=A.get(W);if(W.version!==_e.__version||q===!0){t.activeTexture(n.TEXTURE0+H);const ae=We.getPrimaries(We.workingColorSpace),fe=B.colorSpace===nn?null:We.getPrimaries(B.colorSpace),ke=B.colorSpace===nn||ae===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,B.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,B.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let j=m(B.image,!1,i.maxTextureSize);j=at(B,j);const de=r.convert(B.format,B.colorSpace),Ue=r.convert(B.type);let Me=U(B.internalFormat,de,Ue,B.colorSpace,B.isVideoTexture);Se(J,B);let pe;const Ve=B.mipmaps,Le=B.isVideoTexture!==!0,nt=_e.__version===void 0||q===!0,T=W.dataReady,re=b(B,j);if(B.isDepthTexture)Me=v(B.format===Li,B.type),nt&&(Le?t.texStorage2D(n.TEXTURE_2D,1,Me,j.width,j.height):t.texImage2D(n.TEXTURE_2D,0,Me,j.width,j.height,0,de,Ue,null));else if(B.isDataTexture)if(Ve.length>0){Le&&nt&&t.texStorage2D(n.TEXTURE_2D,re,Me,Ve[0].width,Ve[0].height);for(let V=0,Z=Ve.length;V<Z;V++)pe=Ve[V],Le?T&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,pe.width,pe.height,de,Ue,pe.data):t.texImage2D(n.TEXTURE_2D,V,Me,pe.width,pe.height,0,de,Ue,pe.data);B.generateMipmaps=!1}else Le?(nt&&t.texStorage2D(n.TEXTURE_2D,re,Me,j.width,j.height),T&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,j.width,j.height,de,Ue,j.data)):t.texImage2D(n.TEXTURE_2D,0,Me,j.width,j.height,0,de,Ue,j.data);else if(B.isCompressedTexture)if(B.isCompressedArrayTexture){Le&&nt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,re,Me,Ve[0].width,Ve[0].height,j.depth);for(let V=0,Z=Ve.length;V<Z;V++)if(pe=Ve[V],B.format!==hA)if(de!==null)if(Le){if(T)if(B.layerUpdates.size>0){const ce=lh(pe.width,pe.height,B.format,B.type);for(const oe of B.layerUpdates){const Te=pe.data.subarray(oe*ce/pe.data.BYTES_PER_ELEMENT,(oe+1)*ce/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,oe,pe.width,pe.height,1,de,Te)}B.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,pe.width,pe.height,j.depth,de,pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,V,Me,pe.width,pe.height,j.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?T&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,pe.width,pe.height,j.depth,de,Ue,pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,V,Me,pe.width,pe.height,j.depth,0,de,Ue,pe.data)}else{Le&&nt&&t.texStorage2D(n.TEXTURE_2D,re,Me,Ve[0].width,Ve[0].height);for(let V=0,Z=Ve.length;V<Z;V++)pe=Ve[V],B.format!==hA?de!==null?Le?T&&t.compressedTexSubImage2D(n.TEXTURE_2D,V,0,0,pe.width,pe.height,de,pe.data):t.compressedTexImage2D(n.TEXTURE_2D,V,Me,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?T&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,pe.width,pe.height,de,Ue,pe.data):t.texImage2D(n.TEXTURE_2D,V,Me,pe.width,pe.height,0,de,Ue,pe.data)}else if(B.isDataArrayTexture)if(Le){if(nt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,re,Me,j.width,j.height,j.depth),T)if(B.layerUpdates.size>0){const V=lh(j.width,j.height,B.format,B.type);for(const Z of B.layerUpdates){const ce=j.data.subarray(Z*V/j.data.BYTES_PER_ELEMENT,(Z+1)*V/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Z,j.width,j.height,1,de,Ue,ce)}B.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,de,Ue,j.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Me,j.width,j.height,j.depth,0,de,Ue,j.data);else if(B.isData3DTexture)Le?(nt&&t.texStorage3D(n.TEXTURE_3D,re,Me,j.width,j.height,j.depth),T&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,de,Ue,j.data)):t.texImage3D(n.TEXTURE_3D,0,Me,j.width,j.height,j.depth,0,de,Ue,j.data);else if(B.isFramebufferTexture){if(nt)if(Le)t.texStorage2D(n.TEXTURE_2D,re,Me,j.width,j.height);else{let V=j.width,Z=j.height;for(let ce=0;ce<re;ce++)t.texImage2D(n.TEXTURE_2D,ce,Me,V,Z,0,de,Ue,null),V>>=1,Z>>=1}}else if(Ve.length>0){if(Le&&nt){const V=Ee(Ve[0]);t.texStorage2D(n.TEXTURE_2D,re,Me,V.width,V.height)}for(let V=0,Z=Ve.length;V<Z;V++)pe=Ve[V],Le?T&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,de,Ue,pe):t.texImage2D(n.TEXTURE_2D,V,Me,de,Ue,pe);B.generateMipmaps=!1}else if(Le){if(nt){const V=Ee(j);t.texStorage2D(n.TEXTURE_2D,re,Me,V.width,V.height)}T&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,de,Ue,j)}else t.texImage2D(n.TEXTURE_2D,0,Me,de,Ue,j);p(B)&&f(J),_e.__version=W.version,B.onUpdate&&B.onUpdate(B)}x.__version=B.version}function $(x,B,H){if(B.image.length!==6)return;const J=He(x,B),q=B.source;t.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+H);const W=A.get(q);if(q.version!==W.__version||J===!0){t.activeTexture(n.TEXTURE0+H);const _e=We.getPrimaries(We.workingColorSpace),ae=B.colorSpace===nn?null:We.getPrimaries(B.colorSpace),fe=B.colorSpace===nn||_e===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,B.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,B.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const ke=B.isCompressedTexture||B.image[0].isCompressedTexture,j=B.image[0]&&B.image[0].isDataTexture,de=[];for(let Z=0;Z<6;Z++)!ke&&!j?de[Z]=m(B.image[Z],!0,i.maxCubemapSize):de[Z]=j?B.image[Z].image:B.image[Z],de[Z]=at(B,de[Z]);const Ue=de[0],Me=r.convert(B.format,B.colorSpace),pe=r.convert(B.type),Ve=U(B.internalFormat,Me,pe,B.colorSpace),Le=B.isVideoTexture!==!0,nt=W.__version===void 0||J===!0,T=q.dataReady;let re=b(B,Ue);Se(n.TEXTURE_CUBE_MAP,B);let V;if(ke){Le&&nt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,re,Ve,Ue.width,Ue.height);for(let Z=0;Z<6;Z++){V=de[Z].mipmaps;for(let ce=0;ce<V.length;ce++){const oe=V[ce];B.format!==hA?Me!==null?Le?T&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce,0,0,oe.width,oe.height,Me,oe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce,Ve,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?T&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce,0,0,oe.width,oe.height,Me,pe,oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce,Ve,oe.width,oe.height,0,Me,pe,oe.data)}}}else{if(V=B.mipmaps,Le&&nt){V.length>0&&re++;const Z=Ee(de[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,re,Ve,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(j){Le?T&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,de[Z].width,de[Z].height,Me,pe,de[Z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ve,de[Z].width,de[Z].height,0,Me,pe,de[Z].data);for(let ce=0;ce<V.length;ce++){const Te=V[ce].image[Z].image;Le?T&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce+1,0,0,Te.width,Te.height,Me,pe,Te.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce+1,Ve,Te.width,Te.height,0,Me,pe,Te.data)}}else{Le?T&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Me,pe,de[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ve,Me,pe,de[Z]);for(let ce=0;ce<V.length;ce++){const oe=V[ce];Le?T&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce+1,0,0,Me,pe,oe.image[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce+1,Ve,Me,pe,oe.image[Z])}}}p(B)&&f(n.TEXTURE_CUBE_MAP),W.__version=q.version,B.onUpdate&&B.onUpdate(B)}x.__version=B.version}function ue(x,B,H,J,q,W){const _e=r.convert(H.format,H.colorSpace),ae=r.convert(H.type),fe=U(H.internalFormat,_e,ae,H.colorSpace),ke=A.get(B),j=A.get(H);if(j.__renderTarget=B,!ke.__hasExternalTextures){const de=Math.max(1,B.width>>W),Ue=Math.max(1,B.height>>W);q===n.TEXTURE_3D||q===n.TEXTURE_2D_ARRAY?t.texImage3D(q,W,fe,de,Ue,B.depth,0,_e,ae,null):t.texImage2D(q,W,fe,de,Ue,0,_e,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,x),Ge(B)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,q,j.__webglTexture,0,Oe(B)):(q===n.TEXTURE_2D||q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,q,j.__webglTexture,W),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ae(x,B,H){if(n.bindRenderbuffer(n.RENDERBUFFER,x),B.depthBuffer){const J=B.depthTexture,q=J&&J.isDepthTexture?J.type:null,W=v(B.stencilBuffer,q),_e=B.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=Oe(B);Ge(B)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,W,B.width,B.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,W,B.width,B.height):n.renderbufferStorage(n.RENDERBUFFER,W,B.width,B.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,_e,n.RENDERBUFFER,x)}else{const J=B.textures;for(let q=0;q<J.length;q++){const W=J[q],_e=r.convert(W.format,W.colorSpace),ae=r.convert(W.type),fe=U(W.internalFormat,_e,ae,W.colorSpace),ke=Oe(B);H&&Ge(B)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ke,fe,B.width,B.height):Ge(B)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ke,fe,B.width,B.height):n.renderbufferStorage(n.RENDERBUFFER,fe,B.width,B.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ye(x,B){if(B&&B.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,x),!(B.depthTexture&&B.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=A.get(B.depthTexture);J.__renderTarget=B,(!J.__webglTexture||B.depthTexture.image.width!==B.width||B.depthTexture.image.height!==B.height)&&(B.depthTexture.image.width=B.width,B.depthTexture.image.height=B.height,B.depthTexture.needsUpdate=!0),Y(B.depthTexture,0);const q=J.__webglTexture,W=Oe(B);if(B.depthTexture.format===vi)Ge(B)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,q,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,q,0);else if(B.depthTexture.format===Li)Ge(B)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,q,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function be(x){const B=A.get(x),H=x.isWebGLCubeRenderTarget===!0;if(B.__boundDepthTexture!==x.depthTexture){const J=x.depthTexture;if(B.__depthDisposeCallback&&B.__depthDisposeCallback(),J){const q=()=>{delete B.__boundDepthTexture,delete B.__depthDisposeCallback,J.removeEventListener("dispose",q)};J.addEventListener("dispose",q),B.__depthDisposeCallback=q}B.__boundDepthTexture=J}if(x.depthTexture&&!B.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");ye(B.__webglFramebuffer,x)}else if(H){B.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(n.FRAMEBUFFER,B.__webglFramebuffer[J]),B.__webglDepthbuffer[J]===void 0)B.__webglDepthbuffer[J]=n.createRenderbuffer(),Ae(B.__webglDepthbuffer[J],x,!1);else{const q=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=B.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,W)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,B.__webglFramebuffer),B.__webglDepthbuffer===void 0)B.__webglDepthbuffer=n.createRenderbuffer(),Ae(B.__webglDepthbuffer,x,!1);else{const J=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=B.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,q)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pe(x,B,H){const J=A.get(x);B!==void 0&&ue(J.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&be(x)}function ut(x){const B=x.texture,H=A.get(x),J=A.get(B);x.addEventListener("dispose",S);const q=x.textures,W=x.isWebGLCubeRenderTarget===!0,_e=q.length>1;if(_e||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=B.version,s.memory.textures++),W){H.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(B.mipmaps&&B.mipmaps.length>0){H.__webglFramebuffer[ae]=[];for(let fe=0;fe<B.mipmaps.length;fe++)H.__webglFramebuffer[ae][fe]=n.createFramebuffer()}else H.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(B.mipmaps&&B.mipmaps.length>0){H.__webglFramebuffer=[];for(let ae=0;ae<B.mipmaps.length;ae++)H.__webglFramebuffer[ae]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(_e)for(let ae=0,fe=q.length;ae<fe;ae++){const ke=A.get(q[ae]);ke.__webglTexture===void 0&&(ke.__webglTexture=n.createTexture(),s.memory.textures++)}if(x.samples>0&&Ge(x)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ae=0;ae<q.length;ae++){const fe=q[ae];H.__webglColorRenderbuffer[ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[ae]);const ke=r.convert(fe.format,fe.colorSpace),j=r.convert(fe.type),de=U(fe.internalFormat,ke,j,fe.colorSpace,x.isXRRenderTarget===!0),Ue=Oe(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,de,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,H.__webglColorRenderbuffer[ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),Ae(H.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(W){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),Se(n.TEXTURE_CUBE_MAP,B);for(let ae=0;ae<6;ae++)if(B.mipmaps&&B.mipmaps.length>0)for(let fe=0;fe<B.mipmaps.length;fe++)ue(H.__webglFramebuffer[ae][fe],x,B,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,fe);else ue(H.__webglFramebuffer[ae],x,B,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);p(B)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let ae=0,fe=q.length;ae<fe;ae++){const ke=q[ae],j=A.get(ke);t.bindTexture(n.TEXTURE_2D,j.__webglTexture),Se(n.TEXTURE_2D,ke),ue(H.__webglFramebuffer,x,ke,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,0),p(ke)&&f(n.TEXTURE_2D)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(ae=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,J.__webglTexture),Se(ae,B),B.mipmaps&&B.mipmaps.length>0)for(let fe=0;fe<B.mipmaps.length;fe++)ue(H.__webglFramebuffer[fe],x,B,n.COLOR_ATTACHMENT0,ae,fe);else ue(H.__webglFramebuffer,x,B,n.COLOR_ATTACHMENT0,ae,0);p(B)&&f(ae),t.unbindTexture()}x.depthBuffer&&be(x)}function Ke(x){const B=x.textures;for(let H=0,J=B.length;H<J;H++){const q=B[H];if(p(q)){const W=E(x),_e=A.get(q).__webglTexture;t.bindTexture(W,_e),f(W),t.unbindTexture()}}}const dt=[],L=[];function Jt(x){if(x.samples>0){if(Ge(x)===!1){const B=x.textures,H=x.width,J=x.height;let q=n.COLOR_BUFFER_BIT;const W=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=A.get(x),ae=B.length>1;if(ae)for(let fe=0;fe<B.length;fe++)t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let fe=0;fe<B.length;fe++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(q|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(q|=n.STENCIL_BUFFER_BIT)),ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_e.__webglColorRenderbuffer[fe]);const ke=A.get(B[fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ke,0)}n.blitFramebuffer(0,0,H,J,0,0,H,J,q,n.NEAREST),o===!0&&(dt.length=0,L.length=0,dt.push(n.COLOR_ATTACHMENT0+fe),x.depthBuffer&&x.resolveDepthBuffer===!1&&(dt.push(W),L.push(W),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,L)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,dt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ae)for(let fe=0;fe<B.length;fe++){t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,_e.__webglColorRenderbuffer[fe]);const ke=A.get(B[fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,ke,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&o){const B=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[B])}}}function Oe(x){return Math.min(i.maxSamples,x.samples)}function Ge(x){const B=A.get(x);return x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&B.__useRenderToTexture!==!1}function xe(x){const B=s.render.frame;c.get(x)!==B&&(c.set(x,B),x.update())}function at(x,B){const H=x.colorSpace,J=x.format,q=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||H!==Hi&&H!==nn&&(We.getTransfer(H)===je?(J!==hA||q!==GA)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),B}function Ee(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(l.width=x.naturalWidth||x.width,l.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(l.width=x.displayWidth,l.height=x.displayHeight):(l.width=x.width,l.height=x.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=G,this.setTexture2D=Y,this.setTexture2DArray=K,this.setTexture3D=X,this.setTextureCube=O,this.rebindTextures=Pe,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=Jt,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=Ge}function i1(n,e){function t(A,i=nn){let r;const s=We.getTransfer(i);if(A===GA)return n.UNSIGNED_BYTE;if(A===Dl)return n.UNSIGNED_SHORT_4_4_4_4;if(A===Hl)return n.UNSIGNED_SHORT_5_5_5_1;if(A===_u)return n.UNSIGNED_INT_5_9_9_9_REV;if(A===wu)return n.BYTE;if(A===vu)return n.SHORT;if(A===gr)return n.UNSIGNED_SHORT;if(A===Rl)return n.INT;if(A===On)return n.UNSIGNED_INT;if(A===HA)return n.FLOAT;if(A===Mr)return n.HALF_FLOAT;if(A===Cu)return n.ALPHA;if(A===Eu)return n.RGB;if(A===hA)return n.RGBA;if(A===xu)return n.LUMINANCE;if(A===Uu)return n.LUMINANCE_ALPHA;if(A===vi)return n.DEPTH_COMPONENT;if(A===Li)return n.DEPTH_STENCIL;if(A===yu)return n.RED;if(A===Pl)return n.RED_INTEGER;if(A===Su)return n.RG;if(A===Nl)return n.RG_INTEGER;if(A===Ol)return n.RGBA_INTEGER;if(A===Fs||A===bs||A===Ts||A===Qs)if(s===je)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(A===Fs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(A===bs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(A===Ts)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(A===Qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(A===Fs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(A===bs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(A===Ts)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(A===Qs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(A===Ro||A===Do||A===Ho||A===Po)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(A===Ro)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(A===Do)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(A===Ho)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(A===Po)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(A===No||A===Oo||A===Go)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(A===No||A===Oo)return s===je?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(A===Go)return s===je?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(A===Vo||A===Ko||A===ko||A===zo||A===Wo||A===Xo||A===Yo||A===Jo||A===Zo||A===qo||A===$o||A===jo||A===el||A===tl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(A===Vo)return s===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(A===Ko)return s===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(A===ko)return s===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(A===zo)return s===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(A===Wo)return s===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(A===Xo)return s===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(A===Yo)return s===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(A===Jo)return s===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(A===Zo)return s===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(A===qo)return s===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(A===$o)return s===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(A===jo)return s===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(A===el)return s===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(A===tl)return s===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(A===Is||A===Al||A===nl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(A===Is)return s===je?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(A===Al)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(A===nl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(A===Mu||A===il||A===rl||A===sl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(A===Is)return r.COMPRESSED_RED_RGTC1_EXT;if(A===il)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(A===rl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(A===sl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return A===Ii?n.UNSIGNED_INT_24_8:n[A]!==void 0?n[A]:null}return{convert:t}}class r1 extends eA{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ji extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const s1={type:"move"};class Wa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ji,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ji,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ji,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const A of e.hand.values())this._getHandJoint(t,A)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,A){let i=null,r=null,s=null;const a=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(const m of e.hand.values()){const p=t.getJointPose(m,A),f=this._getHandJoint(l,m);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const c=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],u=c.position.distanceTo(h.position),d=.02,g=.005;l.inputState.pinching&&u>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,A),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,A),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(s1)))}return a!==null&&(a.visible=i!==null),o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const A=new ji;A.matrixAutoUpdate=!1,A.visible=!1,e.joints[t.jointName]=A,e.add(A)}return e.joints[t.jointName]}}const a1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,o1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class l1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,A){if(this.texture===null){const i=new Kt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=A.depthNear||t.depthFar!=A.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,A=new pn({vertexShader:a1,fragmentShader:o1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _A(new na(20,20),A)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class c1 extends Kn{constructor(e,t){super();const A=this;let i=null,r=1,s=null,a="local-floor",o=1,l=null,c=null,h=null,u=null,d=null,g=null;const m=new l1,p=t.getContextAttributes();let f=null,E=null;const U=[],v=[],b=new De;let y=null;const S=new eA;S.viewport=new mt;const F=new eA;F.viewport=new mt;const C=[S,F],_=new r1;let M=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let $=U[z];return $===void 0&&($=new Wa,U[z]=$),$.getTargetRaySpace()},this.getControllerGrip=function(z){let $=U[z];return $===void 0&&($=new Wa,U[z]=$),$.getGripSpace()},this.getHand=function(z){let $=U[z];return $===void 0&&($=new Wa,U[z]=$),$.getHandSpace()};function D(z){const $=v.indexOf(z.inputSource);if($===-1)return;const ue=U[$];ue!==void 0&&(ue.update(z.inputSource,z.frame,l||s),ue.dispatchEvent({type:z.type,data:z.inputSource}))}function k(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",Y);for(let z=0;z<U.length;z++){const $=v[z];$!==null&&(v[z]=null,U[z].disconnect($))}M=null,G=null,m.reset(),e.setRenderTarget(f),d=null,u=null,h=null,i=null,E=null,He.stop(),A.isPresenting=!1,e.setPixelRatio(y),e.setSize(b.width,b.height,!1),A.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,A.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,A.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(z){if(i=z,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",k),i.addEventListener("inputsourceschange",Y),p.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(b),i.renderState.layers===void 0){const $={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,$),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),E=new Gn(d.framebufferWidth,d.framebufferHeight,{format:hA,type:GA,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let $=null,ue=null,Ae=null;p.depth&&(Ae=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=p.stencil?Li:vi,ue=p.stencil?Ii:On);const ye={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:r};h=new XRWebGLBinding(i,t),u=h.createProjectionLayer(ye),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),E=new Gn(u.textureWidth,u.textureHeight,{format:hA,type:GA,depthTexture:new Ku(u.textureWidth,u.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(o),l=null,s=await i.requestReferenceSpace(a),He.setContext(i),He.start(),A.isPresenting=!0,A.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y(z){for(let $=0;$<z.removed.length;$++){const ue=z.removed[$],Ae=v.indexOf(ue);Ae>=0&&(v[Ae]=null,U[Ae].disconnect(ue))}for(let $=0;$<z.added.length;$++){const ue=z.added[$];let Ae=v.indexOf(ue);if(Ae===-1){for(let be=0;be<U.length;be++)if(be>=v.length){v.push(ue),Ae=be;break}else if(v[be]===null){v[be]=ue,Ae=be;break}if(Ae===-1)break}const ye=U[Ae];ye&&ye.connect(ue)}}const K=new R,X=new R;function O(z,$,ue){K.setFromMatrixPosition($.matrixWorld),X.setFromMatrixPosition(ue.matrixWorld);const Ae=K.distanceTo(X),ye=$.projectionMatrix.elements,be=ue.projectionMatrix.elements,Pe=ye[14]/(ye[10]-1),ut=ye[14]/(ye[10]+1),Ke=(ye[9]+1)/ye[5],dt=(ye[9]-1)/ye[5],L=(ye[8]-1)/ye[0],Jt=(be[8]+1)/be[0],Oe=Pe*L,Ge=Pe*Jt,xe=Ae/(-L+Jt),at=xe*-L;if($.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(at),z.translateZ(xe),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),ye[10]===-1)z.projectionMatrix.copy($.projectionMatrix),z.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const Ee=Pe+xe,x=ut+xe,B=Oe-at,H=Ge+(Ae-at),J=Ke*ut/x*Ee,q=dt*ut/x*Ee;z.projectionMatrix.makePerspective(B,H,J,q,Ee,x),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function te(z,$){$===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices($.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(i===null)return;let $=z.near,ue=z.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(ue=m.depthFar)),_.near=F.near=S.near=$,_.far=F.far=S.far=ue,(M!==_.near||G!==_.far)&&(i.updateRenderState({depthNear:_.near,depthFar:_.far}),M=_.near,G=_.far),S.layers.mask=z.layers.mask|2,F.layers.mask=z.layers.mask|4,_.layers.mask=S.layers.mask|F.layers.mask;const Ae=z.parent,ye=_.cameras;te(_,Ae);for(let be=0;be<ye.length;be++)te(ye[be],Ae);ye.length===2?O(_,S,F):_.projectionMatrix.copy(S.projectionMatrix),ie(z,_,Ae)};function ie(z,$,ue){ue===null?z.matrix.copy($.matrixWorld):(z.matrix.copy(ue.matrixWorld),z.matrix.invert(),z.matrix.multiply($.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy($.projectionMatrix),z.projectionMatrixInverse.copy($.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=al*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(u===null&&d===null))return o},this.setFoveation=function(z){o=z,u!==null&&(u.fixedFoveation=z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(_)};let ge=null;function Se(z,$){if(c=$.getViewerPose(l||s),g=$,c!==null){const ue=c.views;d!==null&&(e.setRenderTargetFramebuffer(E,d.framebuffer),e.setRenderTarget(E));let Ae=!1;ue.length!==_.cameras.length&&(_.cameras.length=0,Ae=!0);for(let be=0;be<ue.length;be++){const Pe=ue[be];let ut=null;if(d!==null)ut=d.getViewport(Pe);else{const dt=h.getViewSubImage(u,Pe);ut=dt.viewport,be===0&&(e.setRenderTargetTextures(E,dt.colorTexture,u.ignoreDepthValues?void 0:dt.depthStencilTexture),e.setRenderTarget(E))}let Ke=C[be];Ke===void 0&&(Ke=new eA,Ke.layers.enable(be),Ke.viewport=new mt,C[be]=Ke),Ke.matrix.fromArray(Pe.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(Pe.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(ut.x,ut.y,ut.width,ut.height),be===0&&(_.matrix.copy(Ke.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),Ae===!0&&_.cameras.push(Ke)}const ye=i.enabledFeatures;if(ye&&ye.includes("depth-sensing")){const be=h.getDepthInformation(ue[0]);be&&be.isValid&&be.texture&&m.init(e,be,i.renderState)}}for(let ue=0;ue<U.length;ue++){const Ae=v[ue],ye=U[ue];Ae!==null&&ye!==void 0&&ye.update(Ae,$,l||s)}ge&&ge(z,$),$.detectedPlanes&&A.dispatchEvent({type:"planesdetected",data:$}),g=null}const He=new Vu;He.setAnimationLoop(Se),this.setAnimationLoop=function(z){ge=z},this.dispose=function(){}}}const xn=new VA,h1=new Bt;function u1(n,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function A(p,f){f.color.getRGB(p.fogColor.value,Pu(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function i(p,f,E,U,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),h(p,f)):f.isMeshPhongMaterial?(r(p,f),c(p,f)):f.isMeshStandardMaterial?(r(p,f),u(p,f),f.isMeshPhysicalMaterial&&d(p,f,v)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),m(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(s(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?o(p,f,E,U):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Vt&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Vt&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const E=e.get(f),U=E.envMap,v=E.envMapRotation;U&&(p.envMap.value=U,xn.copy(v),xn.x*=-1,xn.y*=-1,xn.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(xn.y*=-1,xn.z*=-1),p.envMapRotation.value.setFromMatrix4(h1.makeRotationFromEuler(xn)),p.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function s(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function o(p,f,E,U){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*E,p.scale.value=U*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function u(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function d(p,f,E){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Vt&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function m(p,f){const E=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:A,refreshMaterialUniforms:i}}function f1(n,e,t,A){let i={},r={},s=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function o(E,U){const v=U.program;A.uniformBlockBinding(E,v)}function l(E,U){let v=i[E.id];v===void 0&&(g(E),v=c(E),i[E.id]=v,E.addEventListener("dispose",p));const b=U.program;A.updateUBOMapping(E,b);const y=e.render.frame;r[E.id]!==y&&(u(E),r[E.id]=y)}function c(E){const U=h();E.__bindingPointIndex=U;const v=n.createBuffer(),b=E.__size,y=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,b,y),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,U,v),v}function h(){for(let E=0;E<a;E++)if(s.indexOf(E)===-1)return s.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(E){const U=i[E.id],v=E.uniforms,b=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,U);for(let y=0,S=v.length;y<S;y++){const F=Array.isArray(v[y])?v[y]:[v[y]];for(let C=0,_=F.length;C<_;C++){const M=F[C];if(d(M,y,C,b)===!0){const G=M.__offset,D=Array.isArray(M.value)?M.value:[M.value];let k=0;for(let Y=0;Y<D.length;Y++){const K=D[Y],X=m(K);typeof K=="number"||typeof K=="boolean"?(M.__data[0]=K,n.bufferSubData(n.UNIFORM_BUFFER,G+k,M.__data)):K.isMatrix3?(M.__data[0]=K.elements[0],M.__data[1]=K.elements[1],M.__data[2]=K.elements[2],M.__data[3]=0,M.__data[4]=K.elements[3],M.__data[5]=K.elements[4],M.__data[6]=K.elements[5],M.__data[7]=0,M.__data[8]=K.elements[6],M.__data[9]=K.elements[7],M.__data[10]=K.elements[8],M.__data[11]=0):(K.toArray(M.__data,k),k+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,M.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(E,U,v,b){const y=E.value,S=U+"_"+v;if(b[S]===void 0)return typeof y=="number"||typeof y=="boolean"?b[S]=y:b[S]=y.clone(),!0;{const F=b[S];if(typeof y=="number"||typeof y=="boolean"){if(F!==y)return b[S]=y,!0}else if(F.equals(y)===!1)return F.copy(y),!0}return!1}function g(E){const U=E.uniforms;let v=0;const b=16;for(let S=0,F=U.length;S<F;S++){const C=Array.isArray(U[S])?U[S]:[U[S]];for(let _=0,M=C.length;_<M;_++){const G=C[_],D=Array.isArray(G.value)?G.value:[G.value];for(let k=0,Y=D.length;k<Y;k++){const K=D[k],X=m(K),O=v%b,te=O%X.boundary,ie=O+te;v+=te,ie!==0&&b-ie<X.storage&&(v+=b-ie),G.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=v,v+=X.storage}}}const y=v%b;return y>0&&(v+=b-y),E.__size=v,E.__cache={},this}function m(E){const U={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(U.boundary=4,U.storage=4):E.isVector2?(U.boundary=8,U.storage=8):E.isVector3||E.isColor?(U.boundary=16,U.storage=12):E.isVector4?(U.boundary=16,U.storage=16):E.isMatrix3?(U.boundary=48,U.storage=48):E.isMatrix4?(U.boundary=64,U.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),U}function p(E){const U=E.target;U.removeEventListener("dispose",p);const v=s.indexOf(U.__bindingPointIndex);s.splice(v,1),n.deleteBuffer(i[U.id]),delete i[U.id],delete r[U.id]}function f(){for(const E in i)n.deleteBuffer(i[E]);s=[],i={},r={}}return{bind:o,update:l,dispose:f}}class d1{constructor(e={}){const{canvas:t=tp(),context:A=null,depth:i=!0,stencil:r=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let d;if(A!==null){if(typeof WebGLRenderingContext<"u"&&A instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=A.getContextAttributes().alpha}else d=s;const g=new Uint32Array(4),m=new Int32Array(4);let p=null,f=null;const E=[],U=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jt,this.toneMapping=hn,this.toneMappingExposure=1;const v=this;let b=!1,y=0,S=0,F=null,C=-1,_=null;const M=new mt,G=new mt;let D=null;const k=new Ye(0);let Y=0,K=t.width,X=t.height,O=1,te=null,ie=null;const ge=new mt(0,0,K,X),Se=new mt(0,0,K,X);let He=!1;const z=new Gu;let $=!1,ue=!1;const Ae=new Bt,ye=new Bt,be=new R,Pe=new mt,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ke=!1;function dt(){return F===null?O:1}let L=A;function Jt(w,Q){return t.getContext(w,Q)}try{const w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ll}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",oe,!1),L===null){const Q="webgl2";if(L=Jt(Q,w),L===null)throw Jt(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Oe,Ge,xe,at,Ee,x,B,H,J,q,W,_e,ae,fe,ke,j,de,Ue,Me,pe,Ve,Le,nt,T;function re(){Oe=new wm(L),Oe.init(),Le=new i1(L,Oe),Ge=new um(L,Oe,e,Le),xe=new t1(L,Oe),Ge.reverseDepthBuffer&&u&&xe.buffers.depth.setReversed(!0),at=new Cm(L),Ee=new OB,x=new n1(L,Oe,xe,Ee,Ge,Le,at),B=new dm(v),H=new Bm(v),J=new Mp(L),nt=new cm(L,J),q=new vm(L,J,at,nt),W=new xm(L,q,J,at),Me=new Em(L,Ge,x),j=new fm(Ee),_e=new NB(v,B,H,Oe,Ge,nt,j),ae=new u1(v,Ee),fe=new VB,ke=new YB(Oe),Ue=new lm(v,B,H,xe,W,d,o),de=new jB(v,W,Ge),T=new f1(L,at,Ge,xe),pe=new hm(L,Oe,at),Ve=new _m(L,Oe,at),at.programs=_e.programs,v.capabilities=Ge,v.extensions=Oe,v.properties=Ee,v.renderLists=fe,v.shadowMap=de,v.state=xe,v.info=at}re();const V=new c1(v,L);this.xr=V,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=Oe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Oe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(w){w!==void 0&&(O=w,this.setSize(K,X,!1))},this.getSize=function(w){return w.set(K,X)},this.setSize=function(w,Q,P=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=w,X=Q,t.width=Math.floor(w*O),t.height=Math.floor(Q*O),P===!0&&(t.style.width=w+"px",t.style.height=Q+"px"),this.setViewport(0,0,w,Q)},this.getDrawingBufferSize=function(w){return w.set(K*O,X*O).floor()},this.setDrawingBufferSize=function(w,Q,P){K=w,X=Q,O=P,t.width=Math.floor(w*P),t.height=Math.floor(Q*P),this.setViewport(0,0,w,Q)},this.getCurrentViewport=function(w){return w.copy(M)},this.getViewport=function(w){return w.copy(ge)},this.setViewport=function(w,Q,P,N){w.isVector4?ge.set(w.x,w.y,w.z,w.w):ge.set(w,Q,P,N),xe.viewport(M.copy(ge).multiplyScalar(O).round())},this.getScissor=function(w){return w.copy(Se)},this.setScissor=function(w,Q,P,N){w.isVector4?Se.set(w.x,w.y,w.z,w.w):Se.set(w,Q,P,N),xe.scissor(G.copy(Se).multiplyScalar(O).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(w){xe.setScissorTest(He=w)},this.setOpaqueSort=function(w){te=w},this.setTransparentSort=function(w){ie=w},this.getClearColor=function(w){return w.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor.apply(Ue,arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha.apply(Ue,arguments)},this.clear=function(w=!0,Q=!0,P=!0){let N=0;if(w){let I=!1;if(F!==null){const ee=F.texture.format;I=ee===Ol||ee===Nl||ee===Pl}if(I){const ee=F.texture.type,le=ee===GA||ee===On||ee===gr||ee===Ii||ee===Dl||ee===Hl,Be=Ue.getClearColor(),we=Ue.getClearAlpha(),Fe=Be.r,Qe=Be.g,ve=Be.b;le?(g[0]=Fe,g[1]=Qe,g[2]=ve,g[3]=we,L.clearBufferuiv(L.COLOR,0,g)):(m[0]=Fe,m[1]=Qe,m[2]=ve,m[3]=we,L.clearBufferiv(L.COLOR,0,m))}else N|=L.COLOR_BUFFER_BIT}Q&&(N|=L.DEPTH_BUFFER_BIT),P&&(N|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),fe.dispose(),ke.dispose(),Ee.dispose(),B.dispose(),H.dispose(),W.dispose(),nt.dispose(),T.dispose(),_e.dispose(),V.dispose(),V.removeEventListener("sessionstart",Ac),V.removeEventListener("sessionend",nc),Bn.stop()};function Z(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const w=at.autoReset,Q=de.enabled,P=de.autoUpdate,N=de.needsUpdate,I=de.type;re(),at.autoReset=w,de.enabled=Q,de.autoUpdate=P,de.needsUpdate=N,de.type=I}function oe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Te(w){const Q=w.target;Q.removeEventListener("dispose",Te),ft(Q)}function ft(w){bt(w),Ee.remove(w)}function bt(w){const Q=Ee.get(w).programs;Q!==void 0&&(Q.forEach(function(P){_e.releaseProgram(P)}),w.isShaderMaterial&&_e.releaseShaderCache(w))}this.renderBufferDirect=function(w,Q,P,N,I,ee){Q===null&&(Q=ut);const le=I.isMesh&&I.matrixWorld.determinant()<0,Be=od(w,Q,P,N,I);xe.setMaterial(N,le);let we=P.index,Fe=1;if(N.wireframe===!0){if(we=q.getWireframeAttribute(P),we===void 0)return;Fe=2}const Qe=P.drawRange,ve=P.attributes.position;let Xe=Qe.start*Fe,it=(Qe.start+Qe.count)*Fe;ee!==null&&(Xe=Math.max(Xe,ee.start*Fe),it=Math.min(it,(ee.start+ee.count)*Fe)),we!==null?(Xe=Math.max(Xe,0),it=Math.min(it,we.count)):ve!=null&&(Xe=Math.max(Xe,0),it=Math.min(it,ve.count));const ot=it-Xe;if(ot<0||ot===1/0)return;nt.setup(I,N,Be,P,we);let Pt,Je=pe;if(we!==null&&(Pt=J.get(we),Je=Ve,Je.setIndex(Pt)),I.isMesh)N.wireframe===!0?(xe.setLineWidth(N.wireframeLinewidth*dt()),Je.setMode(L.LINES)):Je.setMode(L.TRIANGLES);else if(I.isLine){let Ce=N.linewidth;Ce===void 0&&(Ce=1),xe.setLineWidth(Ce*dt()),I.isLineSegments?Je.setMode(L.LINES):I.isLineLoop?Je.setMode(L.LINE_LOOP):Je.setMode(L.LINE_STRIP)}else I.isPoints?Je.setMode(L.POINTS):I.isSprite&&Je.setMode(L.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Je.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))Je.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const Ce=I._multiDrawStarts,yA=I._multiDrawCounts,Ze=I._multiDrawCount,rA=we?J.get(we).bytesPerElement:1,kn=Ee.get(N).currentProgram.getUniforms();for(let kt=0;kt<Ze;kt++)kn.setValue(L,"_gl_DrawID",kt),Je.render(Ce[kt]/rA,yA[kt])}else if(I.isInstancedMesh)Je.renderInstances(Xe,ot,I.count);else if(P.isInstancedBufferGeometry){const Ce=P._maxInstanceCount!==void 0?P._maxInstanceCount:1/0,yA=Math.min(P.instanceCount,Ce);Je.renderInstances(Xe,ot,yA)}else Je.render(Xe,ot)};function $e(w,Q,P){w.transparent===!0&&w.side===DA&&w.forceSinglePass===!1?(w.side=Vt,w.needsUpdate=!0,Rr(w,Q,P),w.side=dn,w.needsUpdate=!0,Rr(w,Q,P),w.side=DA):Rr(w,Q,P)}this.compile=function(w,Q,P=null){P===null&&(P=w),f=ke.get(P),f.init(Q),U.push(f),P.traverseVisible(function(I){I.isLight&&I.layers.test(Q.layers)&&(f.pushLight(I),I.castShadow&&f.pushShadow(I))}),w!==P&&w.traverseVisible(function(I){I.isLight&&I.layers.test(Q.layers)&&(f.pushLight(I),I.castShadow&&f.pushShadow(I))}),f.setupLights();const N=new Set;return w.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const ee=I.material;if(ee)if(Array.isArray(ee))for(let le=0;le<ee.length;le++){const Be=ee[le];$e(Be,P,I),N.add(Be)}else $e(ee,P,I),N.add(ee)}),U.pop(),f=null,N},this.compileAsync=function(w,Q,P=null){const N=this.compile(w,Q,P);return new Promise(I=>{function ee(){if(N.forEach(function(le){Ee.get(le).currentProgram.isReady()&&N.delete(le)}),N.size===0){I(w);return}setTimeout(ee,10)}Oe.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let iA=null;function UA(w){iA&&iA(w)}function Ac(){Bn.stop()}function nc(){Bn.start()}const Bn=new Vu;Bn.setAnimationLoop(UA),typeof self<"u"&&Bn.setContext(self),this.setAnimationLoop=function(w){iA=w,V.setAnimationLoop(w),w===null?Bn.stop():Bn.start()},V.addEventListener("sessionstart",Ac),V.addEventListener("sessionend",nc),this.render=function(w,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(Q),Q=V.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,Q,F),f=ke.get(w,U.length),f.init(Q),U.push(f),ye.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),z.setFromProjectionMatrix(ye),ue=this.localClippingEnabled,$=j.init(this.clippingPlanes,ue),p=fe.get(w,E.length),p.init(),E.push(p),V.enabled===!0&&V.isPresenting===!0){const ee=v.xr.getDepthSensingMesh();ee!==null&&ga(ee,Q,-1/0,v.sortObjects)}ga(w,Q,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(te,ie),Ke=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,Ke&&Ue.addToRenderList(p,w),this.info.render.frame++,$===!0&&j.beginShadows();const P=f.state.shadowsArray;de.render(P,w,Q),$===!0&&j.endShadows(),this.info.autoReset===!0&&this.info.reset();const N=p.opaque,I=p.transmissive;if(f.setupLights(),Q.isArrayCamera){const ee=Q.cameras;if(I.length>0)for(let le=0,Be=ee.length;le<Be;le++){const we=ee[le];rc(N,I,w,we)}Ke&&Ue.render(w);for(let le=0,Be=ee.length;le<Be;le++){const we=ee[le];ic(p,w,we,we.viewport)}}else I.length>0&&rc(N,I,w,Q),Ke&&Ue.render(w),ic(p,w,Q);F!==null&&(x.updateMultisampleRenderTarget(F),x.updateRenderTargetMipmap(F)),w.isScene===!0&&w.onAfterRender(v,w,Q),nt.resetDefaultState(),C=-1,_=null,U.pop(),U.length>0?(f=U[U.length-1],$===!0&&j.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,E.pop(),E.length>0?p=E[E.length-1]:p=null};function ga(w,Q,P,N){if(w.visible===!1)return;if(w.layers.test(Q.layers)){if(w.isGroup)P=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Q);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||z.intersectsSprite(w)){N&&Pe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ye);const le=W.update(w),Be=w.material;Be.visible&&p.push(w,le,Be,P,Pe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||z.intersectsObject(w))){const le=W.update(w),Be=w.material;if(N&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Pe.copy(w.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),Pe.copy(le.boundingSphere.center)),Pe.applyMatrix4(w.matrixWorld).applyMatrix4(ye)),Array.isArray(Be)){const we=le.groups;for(let Fe=0,Qe=we.length;Fe<Qe;Fe++){const ve=we[Fe],Xe=Be[ve.materialIndex];Xe&&Xe.visible&&p.push(w,le,Xe,P,Pe.z,ve)}}else Be.visible&&p.push(w,le,Be,P,Pe.z,null)}}const ee=w.children;for(let le=0,Be=ee.length;le<Be;le++)ga(ee[le],Q,P,N)}function ic(w,Q,P,N){const I=w.opaque,ee=w.transmissive,le=w.transparent;f.setupLightsView(P),$===!0&&j.setGlobalState(v.clippingPlanes,P),N&&xe.viewport(M.copy(N)),I.length>0&&Lr(I,Q,P),ee.length>0&&Lr(ee,Q,P),le.length>0&&Lr(le,Q,P),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function rc(w,Q,P,N){if((P.isScene===!0?P.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[N.id]===void 0&&(f.state.transmissionRenderTarget[N.id]=new Gn(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?Mr:GA,minFilter:Tn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:We.workingColorSpace}));const ee=f.state.transmissionRenderTarget[N.id],le=N.viewport||M;ee.setSize(le.z,le.w);const Be=v.getRenderTarget();v.setRenderTarget(ee),v.getClearColor(k),Y=v.getClearAlpha(),Y<1&&v.setClearColor(16777215,.5),v.clear(),Ke&&Ue.render(P);const we=v.toneMapping;v.toneMapping=hn;const Fe=N.viewport;if(N.viewport!==void 0&&(N.viewport=void 0),f.setupLightsView(N),$===!0&&j.setGlobalState(v.clippingPlanes,N),Lr(w,P,N),x.updateMultisampleRenderTarget(ee),x.updateRenderTargetMipmap(ee),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let ve=0,Xe=Q.length;ve<Xe;ve++){const it=Q[ve],ot=it.object,Pt=it.geometry,Je=it.material,Ce=it.group;if(Je.side===DA&&ot.layers.test(N.layers)){const yA=Je.side;Je.side=Vt,Je.needsUpdate=!0,sc(ot,P,N,Pt,Je,Ce),Je.side=yA,Je.needsUpdate=!0,Qe=!0}}Qe===!0&&(x.updateMultisampleRenderTarget(ee),x.updateRenderTargetMipmap(ee))}v.setRenderTarget(Be),v.setClearColor(k,Y),Fe!==void 0&&(N.viewport=Fe),v.toneMapping=we}function Lr(w,Q,P){const N=Q.isScene===!0?Q.overrideMaterial:null;for(let I=0,ee=w.length;I<ee;I++){const le=w[I],Be=le.object,we=le.geometry,Fe=N===null?le.material:N,Qe=le.group;Be.layers.test(P.layers)&&sc(Be,Q,P,we,Fe,Qe)}}function sc(w,Q,P,N,I,ee){w.onBeforeRender(v,Q,P,N,I,ee),w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),I.onBeforeRender(v,Q,P,N,w,ee),I.transparent===!0&&I.side===DA&&I.forceSinglePass===!1?(I.side=Vt,I.needsUpdate=!0,v.renderBufferDirect(P,Q,N,I,w,ee),I.side=dn,I.needsUpdate=!0,v.renderBufferDirect(P,Q,N,I,w,ee),I.side=DA):v.renderBufferDirect(P,Q,N,I,w,ee),w.onAfterRender(v,Q,P,N,I,ee)}function Rr(w,Q,P){Q.isScene!==!0&&(Q=ut);const N=Ee.get(w),I=f.state.lights,ee=f.state.shadowsArray,le=I.state.version,Be=_e.getParameters(w,I.state,ee,Q,P),we=_e.getProgramCacheKey(Be);let Fe=N.programs;N.environment=w.isMeshStandardMaterial?Q.environment:null,N.fog=Q.fog,N.envMap=(w.isMeshStandardMaterial?H:B).get(w.envMap||N.environment),N.envMapRotation=N.environment!==null&&w.envMap===null?Q.environmentRotation:w.envMapRotation,Fe===void 0&&(w.addEventListener("dispose",Te),Fe=new Map,N.programs=Fe);let Qe=Fe.get(we);if(Qe!==void 0){if(N.currentProgram===Qe&&N.lightsStateVersion===le)return oc(w,Be),Qe}else Be.uniforms=_e.getUniforms(w),w.onBeforeCompile(Be,v),Qe=_e.acquireProgram(Be,we),Fe.set(we,Qe),N.uniforms=Be.uniforms;const ve=N.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ve.clippingPlanes=j.uniform),oc(w,Be),N.needsLights=cd(w),N.lightsStateVersion=le,N.needsLights&&(ve.ambientLightColor.value=I.state.ambient,ve.lightProbe.value=I.state.probe,ve.directionalLights.value=I.state.directional,ve.directionalLightShadows.value=I.state.directionalShadow,ve.spotLights.value=I.state.spot,ve.spotLightShadows.value=I.state.spotShadow,ve.rectAreaLights.value=I.state.rectArea,ve.ltc_1.value=I.state.rectAreaLTC1,ve.ltc_2.value=I.state.rectAreaLTC2,ve.pointLights.value=I.state.point,ve.pointLightShadows.value=I.state.pointShadow,ve.hemisphereLights.value=I.state.hemi,ve.directionalShadowMap.value=I.state.directionalShadowMap,ve.directionalShadowMatrix.value=I.state.directionalShadowMatrix,ve.spotShadowMap.value=I.state.spotShadowMap,ve.spotLightMatrix.value=I.state.spotLightMatrix,ve.spotLightMap.value=I.state.spotLightMap,ve.pointShadowMap.value=I.state.pointShadowMap,ve.pointShadowMatrix.value=I.state.pointShadowMatrix),N.currentProgram=Qe,N.uniformsList=null,Qe}function ac(w){if(w.uniformsList===null){const Q=w.currentProgram.getUniforms();w.uniformsList=Rs.seqWithValue(Q.seq,w.uniforms)}return w.uniformsList}function oc(w,Q){const P=Ee.get(w);P.outputColorSpace=Q.outputColorSpace,P.batching=Q.batching,P.batchingColor=Q.batchingColor,P.instancing=Q.instancing,P.instancingColor=Q.instancingColor,P.instancingMorph=Q.instancingMorph,P.skinning=Q.skinning,P.morphTargets=Q.morphTargets,P.morphNormals=Q.morphNormals,P.morphColors=Q.morphColors,P.morphTargetsCount=Q.morphTargetsCount,P.numClippingPlanes=Q.numClippingPlanes,P.numIntersection=Q.numClipIntersection,P.vertexAlphas=Q.vertexAlphas,P.vertexTangents=Q.vertexTangents,P.toneMapping=Q.toneMapping}function od(w,Q,P,N,I){Q.isScene!==!0&&(Q=ut),x.resetTextureUnits();const ee=Q.fog,le=N.isMeshStandardMaterial?Q.environment:null,Be=F===null?v.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Hi,we=(N.isMeshStandardMaterial?H:B).get(N.envMap||le),Fe=N.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,Qe=!!P.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),ve=!!P.morphAttributes.position,Xe=!!P.morphAttributes.normal,it=!!P.morphAttributes.color;let ot=hn;N.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(ot=v.toneMapping);const Pt=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,Je=Pt!==void 0?Pt.length:0,Ce=Ee.get(N),yA=f.state.lights;if($===!0&&(ue===!0||w!==_)){const Zt=w===_&&N.id===C;j.setState(N,w,Zt)}let Ze=!1;N.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==yA.state.version||Ce.outputColorSpace!==Be||I.isBatchedMesh&&Ce.batching===!1||!I.isBatchedMesh&&Ce.batching===!0||I.isBatchedMesh&&Ce.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Ce.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Ce.instancing===!1||!I.isInstancedMesh&&Ce.instancing===!0||I.isSkinnedMesh&&Ce.skinning===!1||!I.isSkinnedMesh&&Ce.skinning===!0||I.isInstancedMesh&&Ce.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Ce.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Ce.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Ce.instancingMorph===!1&&I.morphTexture!==null||Ce.envMap!==we||N.fog===!0&&Ce.fog!==ee||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==j.numPlanes||Ce.numIntersection!==j.numIntersection)||Ce.vertexAlphas!==Fe||Ce.vertexTangents!==Qe||Ce.morphTargets!==ve||Ce.morphNormals!==Xe||Ce.morphColors!==it||Ce.toneMapping!==ot||Ce.morphTargetsCount!==Je)&&(Ze=!0):(Ze=!0,Ce.__version=N.version);let rA=Ce.currentProgram;Ze===!0&&(rA=Rr(N,Q,I));let kn=!1,kt=!1,Oi=!1;const lt=rA.getUniforms(),gA=Ce.uniforms;if(xe.useProgram(rA.program)&&(kn=!0,kt=!0,Oi=!0),N.id!==C&&(C=N.id,kt=!0),kn||_!==w){xe.buffers.depth.getReversed()?(Ae.copy(w.projectionMatrix),np(Ae),ip(Ae),lt.setValue(L,"projectionMatrix",Ae)):lt.setValue(L,"projectionMatrix",w.projectionMatrix),lt.setValue(L,"viewMatrix",w.matrixWorldInverse);const kA=lt.map.cameraPosition;kA!==void 0&&kA.setValue(L,be.setFromMatrixPosition(w.matrixWorld)),Ge.logarithmicDepthBuffer&&lt.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&lt.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),_!==w&&(_=w,kt=!0,Oi=!0)}if(I.isSkinnedMesh){lt.setOptional(L,I,"bindMatrix"),lt.setOptional(L,I,"bindMatrixInverse");const Zt=I.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),lt.setValue(L,"boneTexture",Zt.boneTexture,x))}I.isBatchedMesh&&(lt.setOptional(L,I,"batchingTexture"),lt.setValue(L,"batchingTexture",I._matricesTexture,x),lt.setOptional(L,I,"batchingIdTexture"),lt.setValue(L,"batchingIdTexture",I._indirectTexture,x),lt.setOptional(L,I,"batchingColorTexture"),I._colorsTexture!==null&&lt.setValue(L,"batchingColorTexture",I._colorsTexture,x));const Gi=P.morphAttributes;if((Gi.position!==void 0||Gi.normal!==void 0||Gi.color!==void 0)&&Me.update(I,P,rA),(kt||Ce.receiveShadow!==I.receiveShadow)&&(Ce.receiveShadow=I.receiveShadow,lt.setValue(L,"receiveShadow",I.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(gA.envMap.value=we,gA.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),N.isMeshStandardMaterial&&N.envMap===null&&Q.environment!==null&&(gA.envMapIntensity.value=Q.environmentIntensity),kt&&(lt.setValue(L,"toneMappingExposure",v.toneMappingExposure),Ce.needsLights&&ld(gA,Oi),ee&&N.fog===!0&&ae.refreshFogUniforms(gA,ee),ae.refreshMaterialUniforms(gA,N,O,X,f.state.transmissionRenderTarget[w.id]),Rs.upload(L,ac(Ce),gA,x)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(Rs.upload(L,ac(Ce),gA,x),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&lt.setValue(L,"center",I.center),lt.setValue(L,"modelViewMatrix",I.modelViewMatrix),lt.setValue(L,"normalMatrix",I.normalMatrix),lt.setValue(L,"modelMatrix",I.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const Zt=N.uniformsGroups;for(let kA=0,zA=Zt.length;kA<zA;kA++){const lc=Zt[kA];T.update(lc,rA),T.bind(lc,rA)}}return rA}function ld(w,Q){w.ambientLightColor.needsUpdate=Q,w.lightProbe.needsUpdate=Q,w.directionalLights.needsUpdate=Q,w.directionalLightShadows.needsUpdate=Q,w.pointLights.needsUpdate=Q,w.pointLightShadows.needsUpdate=Q,w.spotLights.needsUpdate=Q,w.spotLightShadows.needsUpdate=Q,w.rectAreaLights.needsUpdate=Q,w.hemisphereLights.needsUpdate=Q}function cd(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(w,Q,P){Ee.get(w.texture).__webglTexture=Q,Ee.get(w.depthTexture).__webglTexture=P;const N=Ee.get(w);N.__hasExternalTextures=!0,N.__autoAllocateDepthBuffer=P===void 0,N.__autoAllocateDepthBuffer||Oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,Q){const P=Ee.get(w);P.__webglFramebuffer=Q,P.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(w,Q=0,P=0){F=w,y=Q,S=P;let N=!0,I=null,ee=!1,le=!1;if(w){const we=Ee.get(w);if(we.__useDefaultFramebuffer!==void 0)xe.bindFramebuffer(L.FRAMEBUFFER,null),N=!1;else if(we.__webglFramebuffer===void 0)x.setupRenderTarget(w);else if(we.__hasExternalTextures)x.rebindTextures(w,Ee.get(w.texture).__webglTexture,Ee.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const ve=w.depthTexture;if(we.__boundDepthTexture!==ve){if(ve!==null&&Ee.has(ve)&&(w.width!==ve.image.width||w.height!==ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");x.setupDepthRenderbuffer(w)}}const Fe=w.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(le=!0);const Qe=Ee.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Qe[Q])?I=Qe[Q][P]:I=Qe[Q],ee=!0):w.samples>0&&x.useMultisampledRTT(w)===!1?I=Ee.get(w).__webglMultisampledFramebuffer:Array.isArray(Qe)?I=Qe[P]:I=Qe,M.copy(w.viewport),G.copy(w.scissor),D=w.scissorTest}else M.copy(ge).multiplyScalar(O).floor(),G.copy(Se).multiplyScalar(O).floor(),D=He;if(xe.bindFramebuffer(L.FRAMEBUFFER,I)&&N&&xe.drawBuffers(w,I),xe.viewport(M),xe.scissor(G),xe.setScissorTest(D),ee){const we=Ee.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we.__webglTexture,P)}else if(le){const we=Ee.get(w.texture),Fe=Q||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,we.__webglTexture,P||0,Fe)}C=-1},this.readRenderTargetPixels=function(w,Q,P,N,I,ee,le){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=Ee.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&le!==void 0&&(Be=Be[le]),Be){xe.bindFramebuffer(L.FRAMEBUFFER,Be);try{const we=w.texture,Fe=we.format,Qe=we.type;if(!Ge.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ge.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=w.width-N&&P>=0&&P<=w.height-I&&L.readPixels(Q,P,N,I,Le.convert(Fe),Le.convert(Qe),ee)}finally{const we=F!==null?Ee.get(F).__webglFramebuffer:null;xe.bindFramebuffer(L.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(w,Q,P,N,I,ee,le){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=Ee.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&le!==void 0&&(Be=Be[le]),Be){const we=w.texture,Fe=we.format,Qe=we.type;if(!Ge.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ge.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Q>=0&&Q<=w.width-N&&P>=0&&P<=w.height-I){xe.bindFramebuffer(L.FRAMEBUFFER,Be);const ve=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ve),L.bufferData(L.PIXEL_PACK_BUFFER,ee.byteLength,L.STREAM_READ),L.readPixels(Q,P,N,I,Le.convert(Fe),Le.convert(Qe),0);const Xe=F!==null?Ee.get(F).__webglFramebuffer:null;xe.bindFramebuffer(L.FRAMEBUFFER,Xe);const it=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Ap(L,it,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ve),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ee),L.deleteBuffer(ve),L.deleteSync(it),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,Q=null,P=0){w.isTexture!==!0&&(qi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Q=arguments[0]||null,w=arguments[1]);const N=Math.pow(2,-P),I=Math.floor(w.image.width*N),ee=Math.floor(w.image.height*N),le=Q!==null?Q.x:0,Be=Q!==null?Q.y:0;x.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,P,0,0,le,Be,I,ee),xe.unbindTexture()},this.copyTextureToTexture=function(w,Q,P=null,N=null,I=0){w.isTexture!==!0&&(qi("WebGLRenderer: copyTextureToTexture function signature has changed."),N=arguments[0]||null,w=arguments[1],Q=arguments[2],I=arguments[3]||0,P=null);let ee,le,Be,we,Fe,Qe,ve,Xe,it;const ot=w.isCompressedTexture?w.mipmaps[I]:w.image;P!==null?(ee=P.max.x-P.min.x,le=P.max.y-P.min.y,Be=P.isBox3?P.max.z-P.min.z:1,we=P.min.x,Fe=P.min.y,Qe=P.isBox3?P.min.z:0):(ee=ot.width,le=ot.height,Be=ot.depth||1,we=0,Fe=0,Qe=0),N!==null?(ve=N.x,Xe=N.y,it=N.z):(ve=0,Xe=0,it=0);const Pt=Le.convert(Q.format),Je=Le.convert(Q.type);let Ce;Q.isData3DTexture?(x.setTexture3D(Q,0),Ce=L.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(x.setTexture2DArray(Q,0),Ce=L.TEXTURE_2D_ARRAY):(x.setTexture2D(Q,0),Ce=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,Q.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,Q.unpackAlignment);const yA=L.getParameter(L.UNPACK_ROW_LENGTH),Ze=L.getParameter(L.UNPACK_IMAGE_HEIGHT),rA=L.getParameter(L.UNPACK_SKIP_PIXELS),kn=L.getParameter(L.UNPACK_SKIP_ROWS),kt=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ot.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ot.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,we),L.pixelStorei(L.UNPACK_SKIP_ROWS,Fe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Qe);const Oi=w.isDataArrayTexture||w.isData3DTexture,lt=Q.isDataArrayTexture||Q.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const gA=Ee.get(w),Gi=Ee.get(Q),Zt=Ee.get(gA.__renderTarget),kA=Ee.get(Gi.__renderTarget);xe.bindFramebuffer(L.READ_FRAMEBUFFER,Zt.__webglFramebuffer),xe.bindFramebuffer(L.DRAW_FRAMEBUFFER,kA.__webglFramebuffer);for(let zA=0;zA<Be;zA++)Oi&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ee.get(w).__webglTexture,I,Qe+zA),w.isDepthTexture?(lt&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ee.get(Q).__webglTexture,I,it+zA),L.blitFramebuffer(we,Fe,ee,le,ve,Xe,ee,le,L.DEPTH_BUFFER_BIT,L.NEAREST)):lt?L.copyTexSubImage3D(Ce,I,ve,Xe,it+zA,we,Fe,ee,le):L.copyTexSubImage2D(Ce,I,ve,Xe,it+zA,we,Fe,ee,le);xe.bindFramebuffer(L.READ_FRAMEBUFFER,null),xe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else lt?w.isDataTexture||w.isData3DTexture?L.texSubImage3D(Ce,I,ve,Xe,it,ee,le,Be,Pt,Je,ot.data):Q.isCompressedArrayTexture?L.compressedTexSubImage3D(Ce,I,ve,Xe,it,ee,le,Be,Pt,ot.data):L.texSubImage3D(Ce,I,ve,Xe,it,ee,le,Be,Pt,Je,ot):w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,I,ve,Xe,ee,le,Pt,Je,ot.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,I,ve,Xe,ot.width,ot.height,Pt,ot.data):L.texSubImage2D(L.TEXTURE_2D,I,ve,Xe,ee,le,Pt,Je,ot);L.pixelStorei(L.UNPACK_ROW_LENGTH,yA),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ze),L.pixelStorei(L.UNPACK_SKIP_PIXELS,rA),L.pixelStorei(L.UNPACK_SKIP_ROWS,kn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,kt),I===0&&Q.generateMipmaps&&L.generateMipmap(Ce),xe.unbindTexture()},this.copyTextureToTexture3D=function(w,Q,P=null,N=null,I=0){return w.isTexture!==!0&&(qi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),P=arguments[0]||null,N=arguments[1]||null,w=arguments[2],Q=arguments[3],I=arguments[4]||0),qi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,Q,P,N,I)},this.initRenderTarget=function(w){Ee.get(w).__webglFramebuffer===void 0&&x.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?x.setTextureCube(w,0):w.isData3DTexture?x.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?x.setTexture2DArray(w,0):x.setTexture2D(w,0),xe.unbindTexture()},this.resetState=function(){y=0,S=0,F=null,xe.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return PA}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=We._getDrawingBufferColorSpace(e),t.unpackColorSpace=We._getUnpackColorSpace()}}class p1 extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new VA,this.environmentIntensity=1,this.environmentRotation=new VA,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class g1{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const A=this.getUtoTmapping(e);return this.getPoint(A,t)}getPoints(e=5){const t=[];for(let A=0;A<=e;A++)t.push(this.getPoint(A/e));return t}getSpacedPoints(e=5){const t=[];for(let A=0;A<=e;A++)t.push(this.getPointAt(A/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let A,i=this.getPoint(0),r=0;t.push(0);for(let s=1;s<=e;s++)A=this.getPoint(s/e),r+=A.distanceTo(i),t.push(r),i=A;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const A=this.getLengths();let i=0;const r=A.length;let s;t?s=t:s=e*A[r-1];let a=0,o=r-1,l;for(;a<=o;)if(i=Math.floor(a+(o-a)/2),l=A[i]-s,l<0)a=i+1;else if(l>0)o=i-1;else{o=i;break}if(i=o,A[i]===s)return i/(r-1);const c=A[i],u=A[i+1]-c,d=(s-c)/u;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const s=this.getPoint(i),a=this.getPoint(r),o=t||(s.isVector2?new De:new R);return o.copy(a).sub(s).normalize(),o}getTangentAt(e,t){const A=this.getUtoTmapping(e);return this.getTangent(A,t)}computeFrenetFrames(e,t){const A=new R,i=[],r=[],s=[],a=new R,o=new Bt;for(let d=0;d<=e;d++){const g=d/e;i[d]=this.getTangentAt(g,new R)}r[0]=new R,s[0]=new R;let l=Number.MAX_VALUE;const c=Math.abs(i[0].x),h=Math.abs(i[0].y),u=Math.abs(i[0].z);c<=l&&(l=c,A.set(1,0,0)),h<=l&&(l=h,A.set(0,1,0)),u<=l&&A.set(0,0,1),a.crossVectors(i[0],A).normalize(),r[0].crossVectors(i[0],a),s[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),s[d]=s[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Mt(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(o.makeRotationAxis(a,g))}s[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(Mt(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(o.makeRotationAxis(i[g],d*g)),s[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ch{constructor(e=1,t=0,A=0){return this.radius=e,this.phi=t,this.theta=A,this}set(e,t,A){return this.radius=e,this.phi=t,this.theta=A,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,A){return this.radius=Math.sqrt(e*e+t*t+A*A),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,A),this.phi=Math.acos(Mt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class m1 extends Kn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ll}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ll);/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */class CA{constructor(e,t,A,i,r="div"){this.parent=e,this.object=t,this.property=A,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),CA.nextNameID=CA.nextNameID||0,this.$name.id="lil-gui-name-"+ ++CA.nextNameID,this.$widget=document.createElement(r),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(A)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled||(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e)),this}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}let B1=class extends CA{constructor(e,t,A){super(e,t,A,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}};function ll(n){let e,t;return(e=n.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=n.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=n.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),!!t&&"#"+t}const w1={isPrimitive:!0,match:n=>typeof n=="string",fromHexString:ll,toHexString:ll},mr={isPrimitive:!0,match:n=>typeof n=="number",fromHexString:n=>parseInt(n.substring(1),16),toHexString:n=>"#"+n.toString(16).padStart(6,0)},v1={isPrimitive:!1,match:Array.isArray,fromHexString(n,e,t=1){const A=mr.fromHexString(n);e[0]=(A>>16&255)/255*t,e[1]=(A>>8&255)/255*t,e[2]=(255&A)/255*t},toHexString:([n,e,t],A=1)=>mr.toHexString(n*(A=255/A)<<16^e*A<<8^t*A<<0)},_1={isPrimitive:!1,match:n=>Object(n)===n,fromHexString(n,e,t=1){const A=mr.fromHexString(n);e.r=(A>>16&255)/255*t,e.g=(A>>8&255)/255*t,e.b=(255&A)/255*t},toHexString:({r:n,g:e,b:t},A=1)=>mr.toHexString(n*(A=255/A)<<16^e*A<<8^t*A<<0)},C1=[w1,mr,v1,_1];let E1=class extends CA{constructor(e,t,A,i){var r;super(e,t,A,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(r=this.initialValue,C1.find(s=>s.match(r))),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=ll(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}};class Xa extends CA{constructor(e,t,A){super(e,t,A,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class x1 extends CA{constructor(e,t,A,i,r,s){super(e,t,A,"number"),this._initInput(),this.min(i),this.max(r);const a=s!==void 0;this.step(a?s:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=100*t+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=c=>{const h=parseFloat(this.$input.value);isNaN(h)||(this._snapClampSetValue(h+c),this.$input.value=this.getValue())};let t,A,i,r,s,a=!1;const o=c=>{if(a){const h=c.clientX-t,u=c.clientY-A;Math.abs(u)>5?(c.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(h)>5&&l()}if(!a){const h=c.clientY-i;s-=h*this._step*this._arrowKeyMultiplier(c),r+s>this._max?s=this._max-r:r+s<this._min&&(s=this._min-r),this._snapClampSetValue(r+s)}i=c.clientY},l=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",o),window.removeEventListener("mouseup",l)};this.$input.addEventListener("input",()=>{let c=parseFloat(this.$input.value);isNaN(c)||(this._stepExplicit&&(c=this._snap(c)),this.setValue(this._clamp(c)))}),this.$input.addEventListener("keydown",c=>{c.code==="Enter"&&this.$input.blur(),c.code==="ArrowUp"&&(c.preventDefault(),e(this._step*this._arrowKeyMultiplier(c))),c.code==="ArrowDown"&&(c.preventDefault(),e(this._step*this._arrowKeyMultiplier(c)*-1))}),this.$input.addEventListener("wheel",c=>{this._inputFocused&&(c.preventDefault(),e(this._step*this._normalizeMouseWheel(c)))},{passive:!1}),this.$input.addEventListener("mousedown",c=>{t=c.clientX,A=i=c.clientY,a=!0,r=this.getValue(),s=0,window.addEventListener("mousemove",o),window.addEventListener("mouseup",l)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=u=>{const d=this.$slider.getBoundingClientRect();let g=(m=u,p=d.left,f=d.right,E=this._min,U=this._max,(m-p)/(f-p)*(U-E)+E);var m,p,f,E,U;this._snapClampSetValue(g)},t=u=>{e(u.clientX)},A=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",t),window.removeEventListener("mouseup",A)};let i,r,s=!1;const a=u=>{u.preventDefault(),this._setDraggingStyle(!0),e(u.touches[0].clientX),s=!1},o=u=>{if(s){const d=u.touches[0].clientX-i,g=u.touches[0].clientY-r;Math.abs(d)>Math.abs(g)?a(u):(window.removeEventListener("touchmove",o),window.removeEventListener("touchend",l))}else u.preventDefault(),e(u.touches[0].clientX)},l=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",o),window.removeEventListener("touchend",l)},c=this._callOnFinishChange.bind(this);let h;this.$slider.addEventListener("mousedown",u=>{this._setDraggingStyle(!0),e(u.clientX),window.addEventListener("mousemove",t),window.addEventListener("mouseup",A)}),this.$slider.addEventListener("touchstart",u=>{u.touches.length>1||(this._hasScrollBar?(i=u.touches[0].clientX,r=u.touches[0].clientY,s=!0):a(u),window.addEventListener("touchmove",o,{passive:!1}),window.addEventListener("touchend",l))},{passive:!1}),this.$slider.addEventListener("wheel",u=>{if(Math.abs(u.deltaX)<Math.abs(u.deltaY)&&this._hasScrollBar)return;u.preventDefault();const d=this._normalizeMouseWheel(u)*this._step;this._snapClampSetValue(this.getValue()+d),this.$input.value=this.getValue(),clearTimeout(h),h=setTimeout(c,400)},{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle("lil-gui-"+t,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:A}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,A=-e.wheelDelta/120,A*=this._stepExplicit?1:10),t+-A}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class U1 extends CA{constructor(e,t,A,i){super(e,t,A,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(i)?i:Object.values(i),this._names=Array.isArray(i)?i:Object.keys(i),this._names.forEach(r=>{const s=document.createElement("option");s.innerHTML=r,this.$select.appendChild(s)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}let y1=class extends CA{constructor(e,t,A){super(e,t,A,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}},hh=!1;class kl{constructor({parent:e,autoPlace:t=e===void 0,container:A,width:i,title:r="Controls",injectStyles:s=!0,touchStyles:a=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",o=>{o.code!=="Enter"&&o.code!=="Space"||(o.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),a&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!hh&&s&&(function(o){const l=document.createElement("style");l.innerHTML=o;const c=document.querySelector("head link[rel=stylesheet], head style");c?document.head.insertBefore(l,c):document.head.appendChild(l)}('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"↕";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"▾";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"▸"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"✓";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),hh=!0),A?A.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation())}add(e,t,A,i,r){if(Object(A)===A)return new U1(this,e,t,A);const s=e[t];switch(typeof s){case"number":return new x1(this,e,t,A,i,r);case"boolean":return new B1(this,e,t);case"string":return new y1(this,e,t);case"function":return new Xa(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,s)}addColor(e,t,A=1){return new E1(this,e,t,A)}addFolder(e){return new kl({parent:this,title:e})}load(e,t=!0){return e.controllers&&this.controllers.forEach(A=>{A instanceof Xa||A._name in e.controllers&&A.load(e.controllers[A._name])}),t&&e.folders&&this.folders.forEach(A=>{A._title in e.folders&&A.load(e.folders[A._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(A=>{if(!(A instanceof Xa)){if(A._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${A._name}"`);t.controllers[A._name]=A.save()}}),e&&this.folders.forEach(A=>{if(A._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${A._title}"`);t.folders[A._title]=A.save()}),t}open(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const A=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",A))};this.$children.addEventListener("transitionend",A);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(t=>t.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const S1="modulepreload",M1=function(n){return"/climate-helix/"+n},uh={},F1=function(e,t,A){let i=Promise.resolve();if(t&&t.length>0){let s=function(l){return Promise.all(l.map(c=>Promise.resolve(c).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=s(t.map(l=>{if(l=M1(l),l in uh)return;uh[l]=!0;const c=l.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":S1,c||(u.as="script"),u.crossOrigin="",u.href=l,o&&u.setAttribute("nonce",o),document.head.appendChild(u),c)return new Promise((d,g)=>{u.addEventListener("load",d),u.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(s){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s}return i.then(s=>{for(const a of s||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};/*!
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
***************************************************************************** */var cl=function(n,e){return cl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,A){t.__proto__=A}||function(t,A){for(var i in A)Object.prototype.hasOwnProperty.call(A,i)&&(t[i]=A[i])},cl(n,e)};function pA(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");cl(n,e);function t(){this.constructor=n}n.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var hl=function(){return hl=Object.assign||function(e){for(var t,A=1,i=arguments.length;A<i;A++){t=arguments[A];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},hl.apply(this,arguments)};function Ht(n,e,t,A){function i(r){return r instanceof t?r:new t(function(s){s(r)})}return new(t||(t=Promise))(function(r,s){function a(c){try{l(A.next(c))}catch(h){s(h)}}function o(c){try{l(A.throw(c))}catch(h){s(h)}}function l(c){c.done?r(c.value):i(c.value).then(a,o)}l((A=A.apply(n,[])).next())})}function It(n,e){var t={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},A,i,r,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(l){return function(c){return o([l,c])}}function o(l){if(A)throw new TypeError("Generator is already executing.");for(;t;)try{if(A=1,i&&(r=l[0]&2?i.return:l[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,l[1])).done)return r;switch(i=0,r&&(l=[l[0]&2,r.value]),l[0]){case 0:case 1:r=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,i=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(r=t.trys,!(r=r.length>0&&r[r.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!r||l[1]>r[0]&&l[1]<r[3])){t.label=l[1];break}if(l[0]===6&&t.label<r[1]){t.label=r[1],r=l;break}if(r&&t.label<r[2]){t.label=r[2],t.ops.push(l);break}r[2]&&t.ops.pop(),t.trys.pop();continue}l=e.call(n,t)}catch(c){l=[6,c],i=0}finally{A=r=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function ns(n,e,t){if(arguments.length===2)for(var A=0,i=e.length,r;A<i;A++)(r||!(A in e))&&(r||(r=Array.prototype.slice.call(e,0,A)),r[A]=e[A]);return n.concat(r||e)}var KA=function(){function n(e,t,A,i){this.left=e,this.top=t,this.width=A,this.height=i}return n.prototype.add=function(e,t,A,i){return new n(this.left+e,this.top+t,this.width+A,this.height+i)},n.fromClientRect=function(e,t){return new n(t.left+e.windowBounds.left,t.top+e.windowBounds.top,t.width,t.height)},n.fromDOMRectList=function(e,t){var A=Array.from(t).find(function(i){return i.width!==0});return A?new n(A.left+e.windowBounds.left,A.top+e.windowBounds.top,A.width,A.height):n.EMPTY},n.EMPTY=new n(0,0,0,0),n}(),ra=function(n,e){return KA.fromClientRect(n,e.getBoundingClientRect())},b1=function(n){var e=n.body,t=n.documentElement;if(!e||!t)throw new Error("Unable to get document size");var A=Math.max(Math.max(e.scrollWidth,t.scrollWidth),Math.max(e.offsetWidth,t.offsetWidth),Math.max(e.clientWidth,t.clientWidth)),i=Math.max(Math.max(e.scrollHeight,t.scrollHeight),Math.max(e.offsetHeight,t.offsetHeight),Math.max(e.clientHeight,t.clientHeight));return new KA(0,0,A,i)},sa=function(n){for(var e=[],t=0,A=n.length;t<A;){var i=n.charCodeAt(t++);if(i>=55296&&i<=56319&&t<A){var r=n.charCodeAt(t++);(r&64512)===56320?e.push(((i&1023)<<10)+(r&1023)+65536):(e.push(i),t--)}else e.push(i)}return e},gt=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];if(String.fromCodePoint)return String.fromCodePoint.apply(String,n);var t=n.length;if(!t)return"";for(var A=[],i=-1,r="";++i<t;){var s=n[i];s<=65535?A.push(s):(s-=65536,A.push((s>>10)+55296,s%1024+56320)),(i+1===t||A.length>16384)&&(r+=String.fromCharCode.apply(String,A),A.length=0)}return r},fh="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",T1=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var is=0;is<fh.length;is++)T1[fh.charCodeAt(is)]=is;var dh="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",er=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var rs=0;rs<dh.length;rs++)er[dh.charCodeAt(rs)]=rs;var Q1=function(n){var e=n.length*.75,t=n.length,A,i=0,r,s,a,o;n[n.length-1]==="="&&(e--,n[n.length-2]==="="&&e--);var l=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(e):new Array(e),c=Array.isArray(l)?l:new Uint8Array(l);for(A=0;A<t;A+=4)r=er[n.charCodeAt(A)],s=er[n.charCodeAt(A+1)],a=er[n.charCodeAt(A+2)],o=er[n.charCodeAt(A+3)],c[i++]=r<<2|s>>4,c[i++]=(s&15)<<4|a>>2,c[i++]=(a&3)<<6|o&63;return l},I1=function(n){for(var e=n.length,t=[],A=0;A<e;A+=2)t.push(n[A+1]<<8|n[A]);return t},L1=function(n){for(var e=n.length,t=[],A=0;A<e;A+=4)t.push(n[A+3]<<24|n[A+2]<<16|n[A+1]<<8|n[A]);return t},Pn=5,zl=11,Ya=2,R1=zl-Pn,Yu=65536>>Pn,D1=1<<Pn,Ja=D1-1,H1=1024>>Pn,P1=Yu+H1,N1=P1,O1=32,G1=N1+O1,V1=65536>>zl,K1=1<<R1,k1=K1-1,ph=function(n,e,t){return n.slice?n.slice(e,t):new Uint16Array(Array.prototype.slice.call(n,e,t))},z1=function(n,e,t){return n.slice?n.slice(e,t):new Uint32Array(Array.prototype.slice.call(n,e,t))},W1=function(n,e){var t=Q1(n),A=Array.isArray(t)?L1(t):new Uint32Array(t),i=Array.isArray(t)?I1(t):new Uint16Array(t),r=24,s=ph(i,r/2,A[4]/2),a=A[5]===2?ph(i,(r+A[4])/2):z1(A,Math.ceil((r+A[4])/4));return new X1(A[0],A[1],A[2],A[3],s,a)},X1=function(){function n(e,t,A,i,r,s){this.initialValue=e,this.errorValue=t,this.highStart=A,this.highValueIndex=i,this.index=r,this.data=s}return n.prototype.get=function(e){var t;if(e>=0){if(e<55296||e>56319&&e<=65535)return t=this.index[e>>Pn],t=(t<<Ya)+(e&Ja),this.data[t];if(e<=65535)return t=this.index[Yu+(e-55296>>Pn)],t=(t<<Ya)+(e&Ja),this.data[t];if(e<this.highStart)return t=G1-V1+(e>>zl),t=this.index[t],t+=e>>Pn&k1,t=this.index[t],t=(t<<Ya)+(e&Ja),this.data[t];if(e<=1114111)return this.data[this.highValueIndex]}return this.errorValue},n}(),gh="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Y1=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var ss=0;ss<gh.length;ss++)Y1[gh.charCodeAt(ss)]=ss;var J1="KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==",mh=50,Z1=1,Ju=2,Zu=3,q1=4,$1=5,Bh=7,qu=8,wh=9,an=10,ul=11,vh=12,fl=13,j1=14,tr=15,dl=16,as=17,Xi=18,ew=19,_h=20,pl=21,Yi=22,Za=23,ri=24,Xt=25,Ar=26,nr=27,si=28,tw=29,Fn=30,Aw=31,os=32,ls=33,gl=34,ml=35,Bl=36,Br=37,wl=38,Ds=39,Hs=40,qa=41,$u=42,nw=43,iw=[9001,65288],ju="!",Ne="×",cs="÷",vl=W1(J1),QA=[Fn,Bl],_l=[Z1,Ju,Zu,$1],ef=[an,qu],Ch=[nr,Ar],rw=_l.concat(ef),Eh=[wl,Ds,Hs,gl,ml],sw=[tr,fl],aw=function(n,e){e===void 0&&(e="strict");var t=[],A=[],i=[];return n.forEach(function(r,s){var a=vl.get(r);if(a>mh?(i.push(!0),a-=mh):i.push(!1),["normal","auto","loose"].indexOf(e)!==-1&&[8208,8211,12316,12448].indexOf(r)!==-1)return A.push(s),t.push(dl);if(a===q1||a===ul){if(s===0)return A.push(s),t.push(Fn);var o=t[s-1];return rw.indexOf(o)===-1?(A.push(A[s-1]),t.push(o)):(A.push(s),t.push(Fn))}if(A.push(s),a===Aw)return t.push(e==="strict"?pl:Br);if(a===$u||a===tw)return t.push(Fn);if(a===nw)return r>=131072&&r<=196605||r>=196608&&r<=262141?t.push(Br):t.push(Fn);t.push(a)}),[A,t,i]},$a=function(n,e,t,A){var i=A[t];if(Array.isArray(n)?n.indexOf(i)!==-1:n===i)for(var r=t;r<=A.length;){r++;var s=A[r];if(s===e)return!0;if(s!==an)break}if(i===an)for(var r=t;r>0;){r--;var a=A[r];if(Array.isArray(n)?n.indexOf(a)!==-1:n===a)for(var o=t;o<=A.length;){o++;var s=A[o];if(s===e)return!0;if(s!==an)break}if(a!==an)break}return!1},xh=function(n,e){for(var t=n;t>=0;){var A=e[t];if(A===an)t--;else return A}return 0},ow=function(n,e,t,A,i){if(t[A]===0)return Ne;var r=A-1;if(Array.isArray(i)&&i[r]===!0)return Ne;var s=r-1,a=r+1,o=e[r],l=s>=0?e[s]:0,c=e[a];if(o===Ju&&c===Zu)return Ne;if(_l.indexOf(o)!==-1)return ju;if(_l.indexOf(c)!==-1||ef.indexOf(c)!==-1)return Ne;if(xh(r,e)===qu)return cs;if(vl.get(n[r])===ul||(o===os||o===ls)&&vl.get(n[a])===ul||o===Bh||c===Bh||o===wh||[an,fl,tr].indexOf(o)===-1&&c===wh||[as,Xi,ew,ri,si].indexOf(c)!==-1||xh(r,e)===Yi||$a(Za,Yi,r,e)||$a([as,Xi],pl,r,e)||$a(vh,vh,r,e))return Ne;if(o===an)return cs;if(o===Za||c===Za)return Ne;if(c===dl||o===dl)return cs;if([fl,tr,pl].indexOf(c)!==-1||o===j1||l===Bl&&sw.indexOf(o)!==-1||o===si&&c===Bl||c===_h||QA.indexOf(c)!==-1&&o===Xt||QA.indexOf(o)!==-1&&c===Xt||o===nr&&[Br,os,ls].indexOf(c)!==-1||[Br,os,ls].indexOf(o)!==-1&&c===Ar||QA.indexOf(o)!==-1&&Ch.indexOf(c)!==-1||Ch.indexOf(o)!==-1&&QA.indexOf(c)!==-1||[nr,Ar].indexOf(o)!==-1&&(c===Xt||[Yi,tr].indexOf(c)!==-1&&e[a+1]===Xt)||[Yi,tr].indexOf(o)!==-1&&c===Xt||o===Xt&&[Xt,si,ri].indexOf(c)!==-1)return Ne;if([Xt,si,ri,as,Xi].indexOf(c)!==-1)for(var h=r;h>=0;){var u=e[h];if(u===Xt)return Ne;if([si,ri].indexOf(u)!==-1)h--;else break}if([nr,Ar].indexOf(c)!==-1)for(var h=[as,Xi].indexOf(o)!==-1?s:r;h>=0;){var u=e[h];if(u===Xt)return Ne;if([si,ri].indexOf(u)!==-1)h--;else break}if(wl===o&&[wl,Ds,gl,ml].indexOf(c)!==-1||[Ds,gl].indexOf(o)!==-1&&[Ds,Hs].indexOf(c)!==-1||[Hs,ml].indexOf(o)!==-1&&c===Hs||Eh.indexOf(o)!==-1&&[_h,Ar].indexOf(c)!==-1||Eh.indexOf(c)!==-1&&o===nr||QA.indexOf(o)!==-1&&QA.indexOf(c)!==-1||o===ri&&QA.indexOf(c)!==-1||QA.concat(Xt).indexOf(o)!==-1&&c===Yi&&iw.indexOf(n[a])===-1||QA.concat(Xt).indexOf(c)!==-1&&o===Xi)return Ne;if(o===qa&&c===qa){for(var d=t[r],g=1;d>0&&(d--,e[d]===qa);)g++;if(g%2!==0)return Ne}return o===os&&c===ls?Ne:cs},lw=function(n,e){e||(e={lineBreak:"normal",wordBreak:"normal"});var t=aw(n,e.lineBreak),A=t[0],i=t[1],r=t[2];(e.wordBreak==="break-all"||e.wordBreak==="break-word")&&(i=i.map(function(a){return[Xt,Fn,$u].indexOf(a)!==-1?Br:a}));var s=e.wordBreak==="keep-all"?r.map(function(a,o){return a&&n[o]>=19968&&n[o]<=40959}):void 0;return[A,i,s]},cw=function(){function n(e,t,A,i){this.codePoints=e,this.required=t===ju,this.start=A,this.end=i}return n.prototype.slice=function(){return gt.apply(void 0,this.codePoints.slice(this.start,this.end))},n}(),hw=function(n,e){var t=sa(n),A=lw(t,e),i=A[0],r=A[1],s=A[2],a=t.length,o=0,l=0;return{next:function(){if(l>=a)return{done:!0,value:null};for(var c=Ne;l<a&&(c=ow(t,r,i,++l,s))===Ne;);if(c!==Ne||l===a){var h=new cw(t,c,o,l);return o=l,{value:h,done:!1}}return{done:!0,value:null}}}},uw=1,fw=2,Qr=4,Uh=8,Vs=10,yh=47,or=92,dw=9,pw=32,hs=34,Ji=61,gw=35,mw=36,Bw=37,us=39,fs=40,Zi=41,ww=95,Gt=45,vw=33,_w=60,Cw=62,Ew=64,xw=91,Uw=93,yw=61,Sw=123,ds=63,Mw=125,Sh=124,Fw=126,bw=128,Mh=65533,ja=42,Qn=43,Tw=44,Qw=58,Iw=59,wr=46,Lw=0,Rw=8,Dw=11,Hw=14,Pw=31,Nw=127,mA=-1,tf=48,Af=97,nf=101,Ow=102,Gw=117,Vw=122,rf=65,sf=69,af=70,Kw=85,kw=90,Lt=function(n){return n>=tf&&n<=57},zw=function(n){return n>=55296&&n<=57343},ai=function(n){return Lt(n)||n>=rf&&n<=af||n>=Af&&n<=Ow},Ww=function(n){return n>=Af&&n<=Vw},Xw=function(n){return n>=rf&&n<=kw},Yw=function(n){return Ww(n)||Xw(n)},Jw=function(n){return n>=bw},ps=function(n){return n===Vs||n===dw||n===pw},Ks=function(n){return Yw(n)||Jw(n)||n===ww},Fh=function(n){return Ks(n)||Lt(n)||n===Gt},Zw=function(n){return n>=Lw&&n<=Rw||n===Dw||n>=Hw&&n<=Pw||n===Nw},tn=function(n,e){return n!==or?!1:e!==Vs},gs=function(n,e,t){return n===Gt?Ks(e)||tn(e,t):Ks(n)?!0:!!(n===or&&tn(n,e))},eo=function(n,e,t){return n===Qn||n===Gt?Lt(e)?!0:e===wr&&Lt(t):Lt(n===wr?e:n)},qw=function(n){var e=0,t=1;(n[e]===Qn||n[e]===Gt)&&(n[e]===Gt&&(t=-1),e++);for(var A=[];Lt(n[e]);)A.push(n[e++]);var i=A.length?parseInt(gt.apply(void 0,A),10):0;n[e]===wr&&e++;for(var r=[];Lt(n[e]);)r.push(n[e++]);var s=r.length,a=s?parseInt(gt.apply(void 0,r),10):0;(n[e]===sf||n[e]===nf)&&e++;var o=1;(n[e]===Qn||n[e]===Gt)&&(n[e]===Gt&&(o=-1),e++);for(var l=[];Lt(n[e]);)l.push(n[e++]);var c=l.length?parseInt(gt.apply(void 0,l),10):0;return t*(i+a*Math.pow(10,-s))*Math.pow(10,o*c)},$w={type:2},jw={type:3},ev={type:4},tv={type:13},Av={type:8},nv={type:21},iv={type:9},rv={type:10},sv={type:11},av={type:12},ov={type:14},ms={type:23},lv={type:1},cv={type:25},hv={type:24},uv={type:26},fv={type:27},dv={type:28},pv={type:29},gv={type:31},Cl={type:32},of=function(){function n(){this._value=[]}return n.prototype.write=function(e){this._value=this._value.concat(sa(e))},n.prototype.read=function(){for(var e=[],t=this.consumeToken();t!==Cl;)e.push(t),t=this.consumeToken();return e},n.prototype.consumeToken=function(){var e=this.consumeCodePoint();switch(e){case hs:return this.consumeStringToken(hs);case gw:var t=this.peekCodePoint(0),A=this.peekCodePoint(1),i=this.peekCodePoint(2);if(Fh(t)||tn(A,i)){var r=gs(t,A,i)?fw:uw,s=this.consumeName();return{type:5,value:s,flags:r}}break;case mw:if(this.peekCodePoint(0)===Ji)return this.consumeCodePoint(),tv;break;case us:return this.consumeStringToken(us);case fs:return $w;case Zi:return jw;case ja:if(this.peekCodePoint(0)===Ji)return this.consumeCodePoint(),ov;break;case Qn:if(eo(e,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(e),this.consumeNumericToken();break;case Tw:return ev;case Gt:var a=e,o=this.peekCodePoint(0),l=this.peekCodePoint(1);if(eo(a,o,l))return this.reconsumeCodePoint(e),this.consumeNumericToken();if(gs(a,o,l))return this.reconsumeCodePoint(e),this.consumeIdentLikeToken();if(o===Gt&&l===Cw)return this.consumeCodePoint(),this.consumeCodePoint(),hv;break;case wr:if(eo(e,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(e),this.consumeNumericToken();break;case yh:if(this.peekCodePoint(0)===ja)for(this.consumeCodePoint();;){var c=this.consumeCodePoint();if(c===ja&&(c=this.consumeCodePoint(),c===yh))return this.consumeToken();if(c===mA)return this.consumeToken()}break;case Qw:return uv;case Iw:return fv;case _w:if(this.peekCodePoint(0)===vw&&this.peekCodePoint(1)===Gt&&this.peekCodePoint(2)===Gt)return this.consumeCodePoint(),this.consumeCodePoint(),cv;break;case Ew:var h=this.peekCodePoint(0),u=this.peekCodePoint(1),d=this.peekCodePoint(2);if(gs(h,u,d)){var s=this.consumeName();return{type:7,value:s}}break;case xw:return dv;case or:if(tn(e,this.peekCodePoint(0)))return this.reconsumeCodePoint(e),this.consumeIdentLikeToken();break;case Uw:return pv;case yw:if(this.peekCodePoint(0)===Ji)return this.consumeCodePoint(),Av;break;case Sw:return sv;case Mw:return av;case Gw:case Kw:var g=this.peekCodePoint(0),m=this.peekCodePoint(1);return g===Qn&&(ai(m)||m===ds)&&(this.consumeCodePoint(),this.consumeUnicodeRangeToken()),this.reconsumeCodePoint(e),this.consumeIdentLikeToken();case Sh:if(this.peekCodePoint(0)===Ji)return this.consumeCodePoint(),iv;if(this.peekCodePoint(0)===Sh)return this.consumeCodePoint(),nv;break;case Fw:if(this.peekCodePoint(0)===Ji)return this.consumeCodePoint(),rv;break;case mA:return Cl}return ps(e)?(this.consumeWhiteSpace(),gv):Lt(e)?(this.reconsumeCodePoint(e),this.consumeNumericToken()):Ks(e)?(this.reconsumeCodePoint(e),this.consumeIdentLikeToken()):{type:6,value:gt(e)}},n.prototype.consumeCodePoint=function(){var e=this._value.shift();return typeof e>"u"?-1:e},n.prototype.reconsumeCodePoint=function(e){this._value.unshift(e)},n.prototype.peekCodePoint=function(e){return e>=this._value.length?-1:this._value[e]},n.prototype.consumeUnicodeRangeToken=function(){for(var e=[],t=this.consumeCodePoint();ai(t)&&e.length<6;)e.push(t),t=this.consumeCodePoint();for(var A=!1;t===ds&&e.length<6;)e.push(t),t=this.consumeCodePoint(),A=!0;if(A){var i=parseInt(gt.apply(void 0,e.map(function(o){return o===ds?tf:o})),16),r=parseInt(gt.apply(void 0,e.map(function(o){return o===ds?af:o})),16);return{type:30,start:i,end:r}}var s=parseInt(gt.apply(void 0,e),16);if(this.peekCodePoint(0)===Gt&&ai(this.peekCodePoint(1))){this.consumeCodePoint(),t=this.consumeCodePoint();for(var a=[];ai(t)&&a.length<6;)a.push(t),t=this.consumeCodePoint();var r=parseInt(gt.apply(void 0,a),16);return{type:30,start:s,end:r}}else return{type:30,start:s,end:s}},n.prototype.consumeIdentLikeToken=function(){var e=this.consumeName();return e.toLowerCase()==="url"&&this.peekCodePoint(0)===fs?(this.consumeCodePoint(),this.consumeUrlToken()):this.peekCodePoint(0)===fs?(this.consumeCodePoint(),{type:19,value:e}):{type:20,value:e}},n.prototype.consumeUrlToken=function(){var e=[];if(this.consumeWhiteSpace(),this.peekCodePoint(0)===mA)return{type:22,value:""};var t=this.peekCodePoint(0);if(t===us||t===hs){var A=this.consumeStringToken(this.consumeCodePoint());return A.type===0&&(this.consumeWhiteSpace(),this.peekCodePoint(0)===mA||this.peekCodePoint(0)===Zi)?(this.consumeCodePoint(),{type:22,value:A.value}):(this.consumeBadUrlRemnants(),ms)}for(;;){var i=this.consumeCodePoint();if(i===mA||i===Zi)return{type:22,value:gt.apply(void 0,e)};if(ps(i))return this.consumeWhiteSpace(),this.peekCodePoint(0)===mA||this.peekCodePoint(0)===Zi?(this.consumeCodePoint(),{type:22,value:gt.apply(void 0,e)}):(this.consumeBadUrlRemnants(),ms);if(i===hs||i===us||i===fs||Zw(i))return this.consumeBadUrlRemnants(),ms;if(i===or)if(tn(i,this.peekCodePoint(0)))e.push(this.consumeEscapedCodePoint());else return this.consumeBadUrlRemnants(),ms;else e.push(i)}},n.prototype.consumeWhiteSpace=function(){for(;ps(this.peekCodePoint(0));)this.consumeCodePoint()},n.prototype.consumeBadUrlRemnants=function(){for(;;){var e=this.consumeCodePoint();if(e===Zi||e===mA)return;tn(e,this.peekCodePoint(0))&&this.consumeEscapedCodePoint()}},n.prototype.consumeStringSlice=function(e){for(var t=5e4,A="";e>0;){var i=Math.min(t,e);A+=gt.apply(void 0,this._value.splice(0,i)),e-=i}return this._value.shift(),A},n.prototype.consumeStringToken=function(e){var t="",A=0;do{var i=this._value[A];if(i===mA||i===void 0||i===e)return t+=this.consumeStringSlice(A),{type:0,value:t};if(i===Vs)return this._value.splice(0,A),lv;if(i===or){var r=this._value[A+1];r!==mA&&r!==void 0&&(r===Vs?(t+=this.consumeStringSlice(A),A=-1,this._value.shift()):tn(i,r)&&(t+=this.consumeStringSlice(A),t+=gt(this.consumeEscapedCodePoint()),A=-1))}A++}while(!0)},n.prototype.consumeNumber=function(){var e=[],t=Qr,A=this.peekCodePoint(0);for((A===Qn||A===Gt)&&e.push(this.consumeCodePoint());Lt(this.peekCodePoint(0));)e.push(this.consumeCodePoint());A=this.peekCodePoint(0);var i=this.peekCodePoint(1);if(A===wr&&Lt(i))for(e.push(this.consumeCodePoint(),this.consumeCodePoint()),t=Uh;Lt(this.peekCodePoint(0));)e.push(this.consumeCodePoint());A=this.peekCodePoint(0),i=this.peekCodePoint(1);var r=this.peekCodePoint(2);if((A===sf||A===nf)&&((i===Qn||i===Gt)&&Lt(r)||Lt(i)))for(e.push(this.consumeCodePoint(),this.consumeCodePoint()),t=Uh;Lt(this.peekCodePoint(0));)e.push(this.consumeCodePoint());return[qw(e),t]},n.prototype.consumeNumericToken=function(){var e=this.consumeNumber(),t=e[0],A=e[1],i=this.peekCodePoint(0),r=this.peekCodePoint(1),s=this.peekCodePoint(2);if(gs(i,r,s)){var a=this.consumeName();return{type:15,number:t,flags:A,unit:a}}return i===Bw?(this.consumeCodePoint(),{type:16,number:t,flags:A}):{type:17,number:t,flags:A}},n.prototype.consumeEscapedCodePoint=function(){var e=this.consumeCodePoint();if(ai(e)){for(var t=gt(e);ai(this.peekCodePoint(0))&&t.length<6;)t+=gt(this.consumeCodePoint());ps(this.peekCodePoint(0))&&this.consumeCodePoint();var A=parseInt(t,16);return A===0||zw(A)||A>1114111?Mh:A}return e===mA?Mh:e},n.prototype.consumeName=function(){for(var e="";;){var t=this.consumeCodePoint();if(Fh(t))e+=gt(t);else if(tn(t,this.peekCodePoint(0)))e+=gt(this.consumeEscapedCodePoint());else return this.reconsumeCodePoint(t),e}},n}(),lf=function(){function n(e){this._tokens=e}return n.create=function(e){var t=new of;return t.write(e),new n(t.read())},n.parseValue=function(e){return n.create(e).parseComponentValue()},n.parseValues=function(e){return n.create(e).parseComponentValues()},n.prototype.parseComponentValue=function(){for(var e=this.consumeToken();e.type===31;)e=this.consumeToken();if(e.type===32)throw new SyntaxError("Error parsing CSS component value, unexpected EOF");this.reconsumeToken(e);var t=this.consumeComponentValue();do e=this.consumeToken();while(e.type===31);if(e.type===32)return t;throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one")},n.prototype.parseComponentValues=function(){for(var e=[];;){var t=this.consumeComponentValue();if(t.type===32)return e;e.push(t),e.push()}},n.prototype.consumeComponentValue=function(){var e=this.consumeToken();switch(e.type){case 11:case 28:case 2:return this.consumeSimpleBlock(e.type);case 19:return this.consumeFunction(e)}return e},n.prototype.consumeSimpleBlock=function(e){for(var t={type:e,values:[]},A=this.consumeToken();;){if(A.type===32||Bv(A,e))return t;this.reconsumeToken(A),t.values.push(this.consumeComponentValue()),A=this.consumeToken()}},n.prototype.consumeFunction=function(e){for(var t={name:e.value,values:[],type:18};;){var A=this.consumeToken();if(A.type===32||A.type===3)return t;this.reconsumeToken(A),t.values.push(this.consumeComponentValue())}},n.prototype.consumeToken=function(){var e=this._tokens.shift();return typeof e>"u"?Cl:e},n.prototype.reconsumeToken=function(e){this._tokens.unshift(e)},n}(),Ir=function(n){return n.type===15},Ni=function(n){return n.type===17},tt=function(n){return n.type===20},mv=function(n){return n.type===0},El=function(n,e){return tt(n)&&n.value===e},cf=function(n){return n.type!==31},Di=function(n){return n.type!==31&&n.type!==4},EA=function(n){var e=[],t=[];return n.forEach(function(A){if(A.type===4){if(t.length===0)throw new Error("Error parsing function args, zero tokens for arg");e.push(t),t=[];return}A.type!==31&&t.push(A)}),t.length&&e.push(t),e},Bv=function(n,e){return e===11&&n.type===12||e===28&&n.type===29?!0:e===2&&n.type===3},gn=function(n){return n.type===17||n.type===15},vt=function(n){return n.type===16||gn(n)},hf=function(n){return n.length>1?[n[0],n[1]]:[n[0]]},Ft={type:17,number:0,flags:Qr},Wl={type:16,number:50,flags:Qr},on={type:16,number:100,flags:Qr},ir=function(n,e,t){var A=n[0],i=n[1];return[st(A,e),st(typeof i<"u"?i:A,t)]},st=function(n,e){if(n.type===16)return n.number/100*e;if(Ir(n))switch(n.unit){case"rem":case"em":return 16*n.number;case"px":default:return n.number}return n.number},uf="deg",ff="grad",df="rad",pf="turn",aa={name:"angle",parse:function(n,e){if(e.type===15)switch(e.unit){case uf:return Math.PI*e.number/180;case ff:return Math.PI/200*e.number;case df:return e.number;case pf:return Math.PI*2*e.number}throw new Error("Unsupported angle type")}},gf=function(n){return n.type===15&&(n.unit===uf||n.unit===ff||n.unit===df||n.unit===pf)},mf=function(n){var e=n.filter(tt).map(function(t){return t.value}).join(" ");switch(e){case"to bottom right":case"to right bottom":case"left top":case"top left":return[Ft,Ft];case"to top":case"bottom":return AA(0);case"to bottom left":case"to left bottom":case"right top":case"top right":return[Ft,on];case"to right":case"left":return AA(90);case"to top left":case"to left top":case"right bottom":case"bottom right":return[on,on];case"to bottom":case"top":return AA(180);case"to top right":case"to right top":case"left bottom":case"bottom left":return[on,Ft];case"to left":case"right":return AA(270)}return 0},AA=function(n){return Math.PI*n/180},un={name:"color",parse:function(n,e){if(e.type===18){var t=wv[e.name];if(typeof t>"u")throw new Error('Attempting to parse an unsupported color function "'+e.name+'"');return t(n,e.values)}if(e.type===5){if(e.value.length===3){var A=e.value.substring(0,1),i=e.value.substring(1,2),r=e.value.substring(2,3);return ln(parseInt(A+A,16),parseInt(i+i,16),parseInt(r+r,16),1)}if(e.value.length===4){var A=e.value.substring(0,1),i=e.value.substring(1,2),r=e.value.substring(2,3),s=e.value.substring(3,4);return ln(parseInt(A+A,16),parseInt(i+i,16),parseInt(r+r,16),parseInt(s+s,16)/255)}if(e.value.length===6){var A=e.value.substring(0,2),i=e.value.substring(2,4),r=e.value.substring(4,6);return ln(parseInt(A,16),parseInt(i,16),parseInt(r,16),1)}if(e.value.length===8){var A=e.value.substring(0,2),i=e.value.substring(2,4),r=e.value.substring(4,6),s=e.value.substring(6,8);return ln(parseInt(A,16),parseInt(i,16),parseInt(r,16),parseInt(s,16)/255)}}if(e.type===20){var a=OA[e.value.toUpperCase()];if(typeof a<"u")return a}return OA.TRANSPARENT}},fn=function(n){return(255&n)===0},yt=function(n){var e=255&n,t=255&n>>8,A=255&n>>16,i=255&n>>24;return e<255?"rgba("+i+","+A+","+t+","+e/255+")":"rgb("+i+","+A+","+t+")"},ln=function(n,e,t,A){return(n<<24|e<<16|t<<8|Math.round(A*255)<<0)>>>0},bh=function(n,e){if(n.type===17)return n.number;if(n.type===16){var t=e===3?1:255;return e===3?n.number/100*t:Math.round(n.number/100*t)}return 0},Th=function(n,e){var t=e.filter(Di);if(t.length===3){var A=t.map(bh),i=A[0],r=A[1],s=A[2];return ln(i,r,s,1)}if(t.length===4){var a=t.map(bh),i=a[0],r=a[1],s=a[2],o=a[3];return ln(i,r,s,o)}return 0};function to(n,e,t){return t<0&&(t+=1),t>=1&&(t-=1),t<1/6?(e-n)*t*6+n:t<1/2?e:t<2/3?(e-n)*6*(2/3-t)+n:n}var Qh=function(n,e){var t=e.filter(Di),A=t[0],i=t[1],r=t[2],s=t[3],a=(A.type===17?AA(A.number):aa.parse(n,A))/(Math.PI*2),o=vt(i)?i.number/100:0,l=vt(r)?r.number/100:0,c=typeof s<"u"&&vt(s)?st(s,1):1;if(o===0)return ln(l*255,l*255,l*255,1);var h=l<=.5?l*(o+1):l+o-l*o,u=l*2-h,d=to(u,h,a+1/3),g=to(u,h,a),m=to(u,h,a-1/3);return ln(d*255,g*255,m*255,c)},wv={hsl:Qh,hsla:Qh,rgb:Th,rgba:Th},lr=function(n,e){return un.parse(n,lf.create(e).parseComponentValue())},OA={ALICEBLUE:4042850303,ANTIQUEWHITE:4209760255,AQUA:16777215,AQUAMARINE:2147472639,AZURE:4043309055,BEIGE:4126530815,BISQUE:4293182719,BLACK:255,BLANCHEDALMOND:4293643775,BLUE:65535,BLUEVIOLET:2318131967,BROWN:2771004159,BURLYWOOD:3736635391,CADETBLUE:1604231423,CHARTREUSE:2147418367,CHOCOLATE:3530104575,CORAL:4286533887,CORNFLOWERBLUE:1687547391,CORNSILK:4294499583,CRIMSON:3692313855,CYAN:16777215,DARKBLUE:35839,DARKCYAN:9145343,DARKGOLDENROD:3095837695,DARKGRAY:2846468607,DARKGREEN:6553855,DARKGREY:2846468607,DARKKHAKI:3182914559,DARKMAGENTA:2332068863,DARKOLIVEGREEN:1433087999,DARKORANGE:4287365375,DARKORCHID:2570243327,DARKRED:2332033279,DARKSALMON:3918953215,DARKSEAGREEN:2411499519,DARKSLATEBLUE:1211993087,DARKSLATEGRAY:793726975,DARKSLATEGREY:793726975,DARKTURQUOISE:13554175,DARKVIOLET:2483082239,DEEPPINK:4279538687,DEEPSKYBLUE:12582911,DIMGRAY:1768516095,DIMGREY:1768516095,DODGERBLUE:512819199,FIREBRICK:2988581631,FLORALWHITE:4294635775,FORESTGREEN:579543807,FUCHSIA:4278255615,GAINSBORO:3705462015,GHOSTWHITE:4177068031,GOLD:4292280575,GOLDENROD:3668254975,GRAY:2155905279,GREEN:8388863,GREENYELLOW:2919182335,GREY:2155905279,HONEYDEW:4043305215,HOTPINK:4285117695,INDIANRED:3445382399,INDIGO:1258324735,IVORY:4294963455,KHAKI:4041641215,LAVENDER:3873897215,LAVENDERBLUSH:4293981695,LAWNGREEN:2096890111,LEMONCHIFFON:4294626815,LIGHTBLUE:2916673279,LIGHTCORAL:4034953471,LIGHTCYAN:3774873599,LIGHTGOLDENRODYELLOW:4210742015,LIGHTGRAY:3553874943,LIGHTGREEN:2431553791,LIGHTGREY:3553874943,LIGHTPINK:4290167295,LIGHTSALMON:4288707327,LIGHTSEAGREEN:548580095,LIGHTSKYBLUE:2278488831,LIGHTSLATEGRAY:2005441023,LIGHTSLATEGREY:2005441023,LIGHTSTEELBLUE:2965692159,LIGHTYELLOW:4294959359,LIME:16711935,LIMEGREEN:852308735,LINEN:4210091775,MAGENTA:4278255615,MAROON:2147483903,MEDIUMAQUAMARINE:1724754687,MEDIUMBLUE:52735,MEDIUMORCHID:3126187007,MEDIUMPURPLE:2473647103,MEDIUMSEAGREEN:1018393087,MEDIUMSLATEBLUE:2070474495,MEDIUMSPRINGGREEN:16423679,MEDIUMTURQUOISE:1221709055,MEDIUMVIOLETRED:3340076543,MIDNIGHTBLUE:421097727,MINTCREAM:4127193855,MISTYROSE:4293190143,MOCCASIN:4293178879,NAVAJOWHITE:4292783615,NAVY:33023,OLDLACE:4260751103,OLIVE:2155872511,OLIVEDRAB:1804477439,ORANGE:4289003775,ORANGERED:4282712319,ORCHID:3664828159,PALEGOLDENROD:4008225535,PALEGREEN:2566625535,PALETURQUOISE:2951671551,PALEVIOLETRED:3681588223,PAPAYAWHIP:4293907967,PEACHPUFF:4292524543,PERU:3448061951,PINK:4290825215,PLUM:3718307327,POWDERBLUE:2967529215,PURPLE:2147516671,REBECCAPURPLE:1714657791,RED:4278190335,ROSYBROWN:3163525119,ROYALBLUE:1097458175,SADDLEBROWN:2336560127,SALMON:4202722047,SANDYBROWN:4104413439,SEAGREEN:780883967,SEASHELL:4294307583,SIENNA:2689740287,SILVER:3233857791,SKYBLUE:2278484991,SLATEBLUE:1784335871,SLATEGRAY:1887473919,SLATEGREY:1887473919,SNOW:4294638335,SPRINGGREEN:16744447,STEELBLUE:1182971135,TAN:3535047935,TEAL:8421631,THISTLE:3636451583,TOMATO:4284696575,TRANSPARENT:0,TURQUOISE:1088475391,VIOLET:4001558271,WHEAT:4125012991,WHITE:4294967295,WHITESMOKE:4126537215,YELLOW:4294902015,YELLOWGREEN:2597139199},vv={name:"background-clip",initialValue:"border-box",prefix:!1,type:1,parse:function(n,e){return e.map(function(t){if(tt(t))switch(t.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},_v={name:"background-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},oa=function(n,e){var t=un.parse(n,e[0]),A=e[1];return A&&vt(A)?{color:t,stop:A}:{color:t,stop:null}},Ih=function(n,e){var t=n[0],A=n[n.length-1];t.stop===null&&(t.stop=Ft),A.stop===null&&(A.stop=on);for(var i=[],r=0,s=0;s<n.length;s++){var a=n[s].stop;if(a!==null){var o=st(a,e);o>r?i.push(o):i.push(r),r=o}else i.push(null)}for(var l=null,s=0;s<i.length;s++){var c=i[s];if(c===null)l===null&&(l=s);else if(l!==null){for(var h=s-l,u=i[l-1],d=(c-u)/(h+1),g=1;g<=h;g++)i[l+g-1]=d*g;l=null}}return n.map(function(m,p){var f=m.color;return{color:f,stop:Math.max(Math.min(1,i[p]/e),0)}})},Cv=function(n,e,t){var A=e/2,i=t/2,r=st(n[0],e)-A,s=i-st(n[1],t);return(Math.atan2(s,r)+Math.PI*2)%(Math.PI*2)},Ev=function(n,e,t){var A=typeof n=="number"?n:Cv(n,e,t),i=Math.abs(e*Math.sin(A))+Math.abs(t*Math.cos(A)),r=e/2,s=t/2,a=i/2,o=Math.sin(A-Math.PI/2)*a,l=Math.cos(A-Math.PI/2)*a;return[i,r-l,r+l,s-o,s+o]},lA=function(n,e){return Math.sqrt(n*n+e*e)},Lh=function(n,e,t,A,i){var r=[[0,0],[0,e],[n,0],[n,e]];return r.reduce(function(s,a){var o=a[0],l=a[1],c=lA(t-o,A-l);return(i?c<s.optimumDistance:c>s.optimumDistance)?{optimumCorner:a,optimumDistance:c}:s},{optimumDistance:i?1/0:-1/0,optimumCorner:null}).optimumCorner},xv=function(n,e,t,A,i){var r=0,s=0;switch(n.size){case 0:n.shape===0?r=s=Math.min(Math.abs(e),Math.abs(e-A),Math.abs(t),Math.abs(t-i)):n.shape===1&&(r=Math.min(Math.abs(e),Math.abs(e-A)),s=Math.min(Math.abs(t),Math.abs(t-i)));break;case 2:if(n.shape===0)r=s=Math.min(lA(e,t),lA(e,t-i),lA(e-A,t),lA(e-A,t-i));else if(n.shape===1){var a=Math.min(Math.abs(t),Math.abs(t-i))/Math.min(Math.abs(e),Math.abs(e-A)),o=Lh(A,i,e,t,!0),l=o[0],c=o[1];r=lA(l-e,(c-t)/a),s=a*r}break;case 1:n.shape===0?r=s=Math.max(Math.abs(e),Math.abs(e-A),Math.abs(t),Math.abs(t-i)):n.shape===1&&(r=Math.max(Math.abs(e),Math.abs(e-A)),s=Math.max(Math.abs(t),Math.abs(t-i)));break;case 3:if(n.shape===0)r=s=Math.max(lA(e,t),lA(e,t-i),lA(e-A,t),lA(e-A,t-i));else if(n.shape===1){var a=Math.max(Math.abs(t),Math.abs(t-i))/Math.max(Math.abs(e),Math.abs(e-A)),h=Lh(A,i,e,t,!1),l=h[0],c=h[1];r=lA(l-e,(c-t)/a),s=a*r}break}return Array.isArray(n.size)&&(r=st(n.size[0],A),s=n.size.length===2?st(n.size[1],i):r),[r,s]},Uv=function(n,e){var t=AA(180),A=[];return EA(e).forEach(function(i,r){if(r===0){var s=i[0];if(s.type===20&&s.value==="to"){t=mf(i);return}else if(gf(s)){t=aa.parse(n,s);return}}var a=oa(n,i);A.push(a)}),{angle:t,stops:A,type:1}},Bs=function(n,e){var t=AA(180),A=[];return EA(e).forEach(function(i,r){if(r===0){var s=i[0];if(s.type===20&&["top","left","right","bottom"].indexOf(s.value)!==-1){t=mf(i);return}else if(gf(s)){t=(aa.parse(n,s)+AA(270))%AA(360);return}}var a=oa(n,i);A.push(a)}),{angle:t,stops:A,type:1}},yv=function(n,e){var t=AA(180),A=[],i=1,r=0,s=3,a=[];return EA(e).forEach(function(o,l){var c=o[0];if(l===0){if(tt(c)&&c.value==="linear"){i=1;return}else if(tt(c)&&c.value==="radial"){i=2;return}}if(c.type===18){if(c.name==="from"){var h=un.parse(n,c.values[0]);A.push({stop:Ft,color:h})}else if(c.name==="to"){var h=un.parse(n,c.values[0]);A.push({stop:on,color:h})}else if(c.name==="color-stop"){var u=c.values.filter(Di);if(u.length===2){var h=un.parse(n,u[1]),d=u[0];Ni(d)&&A.push({stop:{type:16,number:d.number*100,flags:d.flags},color:h})}}}}),i===1?{angle:(t+AA(180))%AA(360),stops:A,type:i}:{size:s,shape:r,stops:A,position:a,type:i}},Bf="closest-side",wf="farthest-side",vf="closest-corner",_f="farthest-corner",Cf="circle",Ef="ellipse",xf="cover",Uf="contain",Sv=function(n,e){var t=0,A=3,i=[],r=[];return EA(e).forEach(function(s,a){var o=!0;if(a===0){var l=!1;o=s.reduce(function(h,u){if(l)if(tt(u))switch(u.value){case"center":return r.push(Wl),h;case"top":case"left":return r.push(Ft),h;case"right":case"bottom":return r.push(on),h}else(vt(u)||gn(u))&&r.push(u);else if(tt(u))switch(u.value){case Cf:return t=0,!1;case Ef:return t=1,!1;case"at":return l=!0,!1;case Bf:return A=0,!1;case xf:case wf:return A=1,!1;case Uf:case vf:return A=2,!1;case _f:return A=3,!1}else if(gn(u)||vt(u))return Array.isArray(A)||(A=[]),A.push(u),!1;return h},o)}if(o){var c=oa(n,s);i.push(c)}}),{size:A,shape:t,stops:i,position:r,type:2}},ws=function(n,e){var t=0,A=3,i=[],r=[];return EA(e).forEach(function(s,a){var o=!0;if(a===0?o=s.reduce(function(c,h){if(tt(h))switch(h.value){case"center":return r.push(Wl),!1;case"top":case"left":return r.push(Ft),!1;case"right":case"bottom":return r.push(on),!1}else if(vt(h)||gn(h))return r.push(h),!1;return c},o):a===1&&(o=s.reduce(function(c,h){if(tt(h))switch(h.value){case Cf:return t=0,!1;case Ef:return t=1,!1;case Uf:case Bf:return A=0,!1;case wf:return A=1,!1;case vf:return A=2,!1;case xf:case _f:return A=3,!1}else if(gn(h)||vt(h))return Array.isArray(A)||(A=[]),A.push(h),!1;return c},o)),o){var l=oa(n,s);i.push(l)}}),{size:A,shape:t,stops:i,position:r,type:2}},Mv=function(n){return n.type===1},Fv=function(n){return n.type===2},Xl={name:"image",parse:function(n,e){if(e.type===22){var t={url:e.value,type:0};return n.cache.addImage(e.value),t}if(e.type===18){var A=yf[e.name];if(typeof A>"u")throw new Error('Attempting to parse an unsupported image function "'+e.name+'"');return A(n,e.values)}throw new Error("Unsupported image type "+e.type)}};function bv(n){return!(n.type===20&&n.value==="none")&&(n.type!==18||!!yf[n.name])}var yf={"linear-gradient":Uv,"-moz-linear-gradient":Bs,"-ms-linear-gradient":Bs,"-o-linear-gradient":Bs,"-webkit-linear-gradient":Bs,"radial-gradient":Sv,"-moz-radial-gradient":ws,"-ms-radial-gradient":ws,"-o-radial-gradient":ws,"-webkit-radial-gradient":ws,"-webkit-gradient":yv},Tv={name:"background-image",initialValue:"none",type:1,prefix:!1,parse:function(n,e){if(e.length===0)return[];var t=e[0];return t.type===20&&t.value==="none"?[]:e.filter(function(A){return Di(A)&&bv(A)}).map(function(A){return Xl.parse(n,A)})}},Qv={name:"background-origin",initialValue:"border-box",prefix:!1,type:1,parse:function(n,e){return e.map(function(t){if(tt(t))switch(t.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},Iv={name:"background-position",initialValue:"0% 0%",type:1,prefix:!1,parse:function(n,e){return EA(e).map(function(t){return t.filter(vt)}).map(hf)}},Lv={name:"background-repeat",initialValue:"repeat",prefix:!1,type:1,parse:function(n,e){return EA(e).map(function(t){return t.filter(tt).map(function(A){return A.value}).join(" ")}).map(Rv)}},Rv=function(n){switch(n){case"no-repeat":return 1;case"repeat-x":case"repeat no-repeat":return 2;case"repeat-y":case"no-repeat repeat":return 3;case"repeat":default:return 0}},Ci;(function(n){n.AUTO="auto",n.CONTAIN="contain",n.COVER="cover"})(Ci||(Ci={}));var Dv={name:"background-size",initialValue:"0",prefix:!1,type:1,parse:function(n,e){return EA(e).map(function(t){return t.filter(Hv)})}},Hv=function(n){return tt(n)||vt(n)},la=function(n){return{name:"border-"+n+"-color",initialValue:"transparent",prefix:!1,type:3,format:"color"}},Pv=la("top"),Nv=la("right"),Ov=la("bottom"),Gv=la("left"),ca=function(n){return{name:"border-radius-"+n,initialValue:"0 0",prefix:!1,type:1,parse:function(e,t){return hf(t.filter(vt))}}},Vv=ca("top-left"),Kv=ca("top-right"),kv=ca("bottom-right"),zv=ca("bottom-left"),ha=function(n){return{name:"border-"+n+"-style",initialValue:"solid",prefix:!1,type:2,parse:function(e,t){switch(t){case"none":return 0;case"dashed":return 2;case"dotted":return 3;case"double":return 4}return 1}}},Wv=ha("top"),Xv=ha("right"),Yv=ha("bottom"),Jv=ha("left"),ua=function(n){return{name:"border-"+n+"-width",initialValue:"0",type:0,prefix:!1,parse:function(e,t){return Ir(t)?t.number:0}}},Zv=ua("top"),qv=ua("right"),$v=ua("bottom"),jv=ua("left"),e_={name:"color",initialValue:"transparent",prefix:!1,type:3,format:"color"},t_={name:"direction",initialValue:"ltr",prefix:!1,type:2,parse:function(n,e){switch(e){case"rtl":return 1;case"ltr":default:return 0}}},A_={name:"display",initialValue:"inline-block",prefix:!1,type:1,parse:function(n,e){return e.filter(tt).reduce(function(t,A){return t|n_(A.value)},0)}},n_=function(n){switch(n){case"block":case"-webkit-box":return 2;case"inline":return 4;case"run-in":return 8;case"flow":return 16;case"flow-root":return 32;case"table":return 64;case"flex":case"-webkit-flex":return 128;case"grid":case"-ms-grid":return 256;case"ruby":return 512;case"subgrid":return 1024;case"list-item":return 2048;case"table-row-group":return 4096;case"table-header-group":return 8192;case"table-footer-group":return 16384;case"table-row":return 32768;case"table-cell":return 65536;case"table-column-group":return 131072;case"table-column":return 262144;case"table-caption":return 524288;case"ruby-base":return 1048576;case"ruby-text":return 2097152;case"ruby-base-container":return 4194304;case"ruby-text-container":return 8388608;case"contents":return 16777216;case"inline-block":return 33554432;case"inline-list-item":return 67108864;case"inline-table":return 134217728;case"inline-flex":return 268435456;case"inline-grid":return 536870912}return 0},i_={name:"float",initialValue:"none",prefix:!1,type:2,parse:function(n,e){switch(e){case"left":return 1;case"right":return 2;case"inline-start":return 3;case"inline-end":return 4}return 0}},r_={name:"letter-spacing",initialValue:"0",prefix:!1,type:0,parse:function(n,e){return e.type===20&&e.value==="normal"?0:e.type===17||e.type===15?e.number:0}},ks;(function(n){n.NORMAL="normal",n.STRICT="strict"})(ks||(ks={}));var s_={name:"line-break",initialValue:"normal",prefix:!1,type:2,parse:function(n,e){switch(e){case"strict":return ks.STRICT;case"normal":default:return ks.NORMAL}}},a_={name:"line-height",initialValue:"normal",prefix:!1,type:4},Rh=function(n,e){return tt(n)&&n.value==="normal"?1.2*e:n.type===17?e*n.number:vt(n)?st(n,e):e},o_={name:"list-style-image",initialValue:"none",type:0,prefix:!1,parse:function(n,e){return e.type===20&&e.value==="none"?null:Xl.parse(n,e)}},l_={name:"list-style-position",initialValue:"outside",prefix:!1,type:2,parse:function(n,e){switch(e){case"inside":return 0;case"outside":default:return 1}}},xl={name:"list-style-type",initialValue:"none",prefix:!1,type:2,parse:function(n,e){switch(e){case"disc":return 0;case"circle":return 1;case"square":return 2;case"decimal":return 3;case"cjk-decimal":return 4;case"decimal-leading-zero":return 5;case"lower-roman":return 6;case"upper-roman":return 7;case"lower-greek":return 8;case"lower-alpha":return 9;case"upper-alpha":return 10;case"arabic-indic":return 11;case"armenian":return 12;case"bengali":return 13;case"cambodian":return 14;case"cjk-earthly-branch":return 15;case"cjk-heavenly-stem":return 16;case"cjk-ideographic":return 17;case"devanagari":return 18;case"ethiopic-numeric":return 19;case"georgian":return 20;case"gujarati":return 21;case"gurmukhi":return 22;case"hebrew":return 22;case"hiragana":return 23;case"hiragana-iroha":return 24;case"japanese-formal":return 25;case"japanese-informal":return 26;case"kannada":return 27;case"katakana":return 28;case"katakana-iroha":return 29;case"khmer":return 30;case"korean-hangul-formal":return 31;case"korean-hanja-formal":return 32;case"korean-hanja-informal":return 33;case"lao":return 34;case"lower-armenian":return 35;case"malayalam":return 36;case"mongolian":return 37;case"myanmar":return 38;case"oriya":return 39;case"persian":return 40;case"simp-chinese-formal":return 41;case"simp-chinese-informal":return 42;case"tamil":return 43;case"telugu":return 44;case"thai":return 45;case"tibetan":return 46;case"trad-chinese-formal":return 47;case"trad-chinese-informal":return 48;case"upper-armenian":return 49;case"disclosure-open":return 50;case"disclosure-closed":return 51;case"none":default:return-1}}},fa=function(n){return{name:"margin-"+n,initialValue:"0",prefix:!1,type:4}},c_=fa("top"),h_=fa("right"),u_=fa("bottom"),f_=fa("left"),d_={name:"overflow",initialValue:"visible",prefix:!1,type:1,parse:function(n,e){return e.filter(tt).map(function(t){switch(t.value){case"hidden":return 1;case"scroll":return 2;case"clip":return 3;case"auto":return 4;case"visible":default:return 0}})}},p_={name:"overflow-wrap",initialValue:"normal",prefix:!1,type:2,parse:function(n,e){switch(e){case"break-word":return"break-word";case"normal":default:return"normal"}}},da=function(n){return{name:"padding-"+n,initialValue:"0",prefix:!1,type:3,format:"length-percentage"}},g_=da("top"),m_=da("right"),B_=da("bottom"),w_=da("left"),v_={name:"text-align",initialValue:"left",prefix:!1,type:2,parse:function(n,e){switch(e){case"right":return 2;case"center":case"justify":return 1;case"left":default:return 0}}},__={name:"position",initialValue:"static",prefix:!1,type:2,parse:function(n,e){switch(e){case"relative":return 1;case"absolute":return 2;case"fixed":return 3;case"sticky":return 4}return 0}},C_={name:"text-shadow",initialValue:"none",type:1,prefix:!1,parse:function(n,e){return e.length===1&&El(e[0],"none")?[]:EA(e).map(function(t){for(var A={color:OA.TRANSPARENT,offsetX:Ft,offsetY:Ft,blur:Ft},i=0,r=0;r<t.length;r++){var s=t[r];gn(s)?(i===0?A.offsetX=s:i===1?A.offsetY=s:A.blur=s,i++):A.color=un.parse(n,s)}return A})}},E_={name:"text-transform",initialValue:"none",prefix:!1,type:2,parse:function(n,e){switch(e){case"uppercase":return 2;case"lowercase":return 1;case"capitalize":return 3}return 0}},x_={name:"transform",initialValue:"none",prefix:!0,type:0,parse:function(n,e){if(e.type===20&&e.value==="none")return null;if(e.type===18){var t=S_[e.name];if(typeof t>"u")throw new Error('Attempting to parse an unsupported transform function "'+e.name+'"');return t(e.values)}return null}},U_=function(n){var e=n.filter(function(t){return t.type===17}).map(function(t){return t.number});return e.length===6?e:null},y_=function(n){var e=n.filter(function(o){return o.type===17}).map(function(o){return o.number}),t=e[0],A=e[1];e[2],e[3];var i=e[4],r=e[5];e[6],e[7],e[8],e[9],e[10],e[11];var s=e[12],a=e[13];return e[14],e[15],e.length===16?[t,A,i,r,s,a]:null},S_={matrix:U_,matrix3d:y_},Dh={type:16,number:50,flags:Qr},M_=[Dh,Dh],F_={name:"transform-origin",initialValue:"50% 50%",prefix:!0,type:1,parse:function(n,e){var t=e.filter(vt);return t.length!==2?M_:[t[0],t[1]]}},b_={name:"visible",initialValue:"none",prefix:!1,type:2,parse:function(n,e){switch(e){case"hidden":return 1;case"collapse":return 2;case"visible":default:return 0}}},cr;(function(n){n.NORMAL="normal",n.BREAK_ALL="break-all",n.KEEP_ALL="keep-all"})(cr||(cr={}));var T_={name:"word-break",initialValue:"normal",prefix:!1,type:2,parse:function(n,e){switch(e){case"break-all":return cr.BREAK_ALL;case"keep-all":return cr.KEEP_ALL;case"normal":default:return cr.NORMAL}}},Q_={name:"z-index",initialValue:"auto",prefix:!1,type:0,parse:function(n,e){if(e.type===20)return{auto:!0,order:0};if(Ni(e))return{auto:!1,order:e.number};throw new Error("Invalid z-index number parsed")}},Sf={name:"time",parse:function(n,e){if(e.type===15)switch(e.unit.toLowerCase()){case"s":return 1e3*e.number;case"ms":return e.number}throw new Error("Unsupported time type")}},I_={name:"opacity",initialValue:"1",type:0,prefix:!1,parse:function(n,e){return Ni(e)?e.number:1}},L_={name:"text-decoration-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},R_={name:"text-decoration-line",initialValue:"none",prefix:!1,type:1,parse:function(n,e){return e.filter(tt).map(function(t){switch(t.value){case"underline":return 1;case"overline":return 2;case"line-through":return 3;case"none":return 4}return 0}).filter(function(t){return t!==0})}},D_={name:"font-family",initialValue:"",prefix:!1,type:1,parse:function(n,e){var t=[],A=[];return e.forEach(function(i){switch(i.type){case 20:case 0:t.push(i.value);break;case 17:t.push(i.number.toString());break;case 4:A.push(t.join(" ")),t.length=0;break}}),t.length&&A.push(t.join(" ")),A.map(function(i){return i.indexOf(" ")===-1?i:"'"+i+"'"})}},H_={name:"font-size",initialValue:"0",prefix:!1,type:3,format:"length"},P_={name:"font-weight",initialValue:"normal",type:0,prefix:!1,parse:function(n,e){if(Ni(e))return e.number;if(tt(e))switch(e.value){case"bold":return 700;case"normal":default:return 400}return 400}},N_={name:"font-variant",initialValue:"none",type:1,prefix:!1,parse:function(n,e){return e.filter(tt).map(function(t){return t.value})}},O_={name:"font-style",initialValue:"normal",prefix:!1,type:2,parse:function(n,e){switch(e){case"oblique":return"oblique";case"italic":return"italic";case"normal":default:return"normal"}}},Ct=function(n,e){return(n&e)!==0},G_={name:"content",initialValue:"none",type:1,prefix:!1,parse:function(n,e){if(e.length===0)return[];var t=e[0];return t.type===20&&t.value==="none"?[]:e}},V_={name:"counter-increment",initialValue:"none",prefix:!0,type:1,parse:function(n,e){if(e.length===0)return null;var t=e[0];if(t.type===20&&t.value==="none")return null;for(var A=[],i=e.filter(cf),r=0;r<i.length;r++){var s=i[r],a=i[r+1];if(s.type===20){var o=a&&Ni(a)?a.number:1;A.push({counter:s.value,increment:o})}}return A}},K_={name:"counter-reset",initialValue:"none",prefix:!0,type:1,parse:function(n,e){if(e.length===0)return[];for(var t=[],A=e.filter(cf),i=0;i<A.length;i++){var r=A[i],s=A[i+1];if(tt(r)&&r.value!=="none"){var a=s&&Ni(s)?s.number:0;t.push({counter:r.value,reset:a})}}return t}},k_={name:"duration",initialValue:"0s",prefix:!1,type:1,parse:function(n,e){return e.filter(Ir).map(function(t){return Sf.parse(n,t)})}},z_={name:"quotes",initialValue:"none",prefix:!0,type:1,parse:function(n,e){if(e.length===0)return null;var t=e[0];if(t.type===20&&t.value==="none")return null;var A=[],i=e.filter(mv);if(i.length%2!==0)return null;for(var r=0;r<i.length;r+=2){var s=i[r].value,a=i[r+1].value;A.push({open:s,close:a})}return A}},Hh=function(n,e,t){if(!n)return"";var A=n[Math.min(e,n.length-1)];return A?t?A.open:A.close:""},W_={name:"box-shadow",initialValue:"none",type:1,prefix:!1,parse:function(n,e){return e.length===1&&El(e[0],"none")?[]:EA(e).map(function(t){for(var A={color:255,offsetX:Ft,offsetY:Ft,blur:Ft,spread:Ft,inset:!1},i=0,r=0;r<t.length;r++){var s=t[r];El(s,"inset")?A.inset=!0:gn(s)?(i===0?A.offsetX=s:i===1?A.offsetY=s:i===2?A.blur=s:A.spread=s,i++):A.color=un.parse(n,s)}return A})}},X_={name:"paint-order",initialValue:"normal",prefix:!1,type:1,parse:function(n,e){var t=[0,1,2],A=[];return e.filter(tt).forEach(function(i){switch(i.value){case"stroke":A.push(1);break;case"fill":A.push(0);break;case"markers":A.push(2);break}}),t.forEach(function(i){A.indexOf(i)===-1&&A.push(i)}),A}},Y_={name:"-webkit-text-stroke-color",initialValue:"currentcolor",prefix:!1,type:3,format:"color"},J_={name:"-webkit-text-stroke-width",initialValue:"0",type:0,prefix:!1,parse:function(n,e){return Ir(e)?e.number:0}},Z_=function(){function n(e,t){var A,i;this.animationDuration=he(e,k_,t.animationDuration),this.backgroundClip=he(e,vv,t.backgroundClip),this.backgroundColor=he(e,_v,t.backgroundColor),this.backgroundImage=he(e,Tv,t.backgroundImage),this.backgroundOrigin=he(e,Qv,t.backgroundOrigin),this.backgroundPosition=he(e,Iv,t.backgroundPosition),this.backgroundRepeat=he(e,Lv,t.backgroundRepeat),this.backgroundSize=he(e,Dv,t.backgroundSize),this.borderTopColor=he(e,Pv,t.borderTopColor),this.borderRightColor=he(e,Nv,t.borderRightColor),this.borderBottomColor=he(e,Ov,t.borderBottomColor),this.borderLeftColor=he(e,Gv,t.borderLeftColor),this.borderTopLeftRadius=he(e,Vv,t.borderTopLeftRadius),this.borderTopRightRadius=he(e,Kv,t.borderTopRightRadius),this.borderBottomRightRadius=he(e,kv,t.borderBottomRightRadius),this.borderBottomLeftRadius=he(e,zv,t.borderBottomLeftRadius),this.borderTopStyle=he(e,Wv,t.borderTopStyle),this.borderRightStyle=he(e,Xv,t.borderRightStyle),this.borderBottomStyle=he(e,Yv,t.borderBottomStyle),this.borderLeftStyle=he(e,Jv,t.borderLeftStyle),this.borderTopWidth=he(e,Zv,t.borderTopWidth),this.borderRightWidth=he(e,qv,t.borderRightWidth),this.borderBottomWidth=he(e,$v,t.borderBottomWidth),this.borderLeftWidth=he(e,jv,t.borderLeftWidth),this.boxShadow=he(e,W_,t.boxShadow),this.color=he(e,e_,t.color),this.direction=he(e,t_,t.direction),this.display=he(e,A_,t.display),this.float=he(e,i_,t.cssFloat),this.fontFamily=he(e,D_,t.fontFamily),this.fontSize=he(e,H_,t.fontSize),this.fontStyle=he(e,O_,t.fontStyle),this.fontVariant=he(e,N_,t.fontVariant),this.fontWeight=he(e,P_,t.fontWeight),this.letterSpacing=he(e,r_,t.letterSpacing),this.lineBreak=he(e,s_,t.lineBreak),this.lineHeight=he(e,a_,t.lineHeight),this.listStyleImage=he(e,o_,t.listStyleImage),this.listStylePosition=he(e,l_,t.listStylePosition),this.listStyleType=he(e,xl,t.listStyleType),this.marginTop=he(e,c_,t.marginTop),this.marginRight=he(e,h_,t.marginRight),this.marginBottom=he(e,u_,t.marginBottom),this.marginLeft=he(e,f_,t.marginLeft),this.opacity=he(e,I_,t.opacity);var r=he(e,d_,t.overflow);this.overflowX=r[0],this.overflowY=r[r.length>1?1:0],this.overflowWrap=he(e,p_,t.overflowWrap),this.paddingTop=he(e,g_,t.paddingTop),this.paddingRight=he(e,m_,t.paddingRight),this.paddingBottom=he(e,B_,t.paddingBottom),this.paddingLeft=he(e,w_,t.paddingLeft),this.paintOrder=he(e,X_,t.paintOrder),this.position=he(e,__,t.position),this.textAlign=he(e,v_,t.textAlign),this.textDecorationColor=he(e,L_,(A=t.textDecorationColor)!==null&&A!==void 0?A:t.color),this.textDecorationLine=he(e,R_,(i=t.textDecorationLine)!==null&&i!==void 0?i:t.textDecoration),this.textShadow=he(e,C_,t.textShadow),this.textTransform=he(e,E_,t.textTransform),this.transform=he(e,x_,t.transform),this.transformOrigin=he(e,F_,t.transformOrigin),this.visibility=he(e,b_,t.visibility),this.webkitTextStrokeColor=he(e,Y_,t.webkitTextStrokeColor),this.webkitTextStrokeWidth=he(e,J_,t.webkitTextStrokeWidth),this.wordBreak=he(e,T_,t.wordBreak),this.zIndex=he(e,Q_,t.zIndex)}return n.prototype.isVisible=function(){return this.display>0&&this.opacity>0&&this.visibility===0},n.prototype.isTransparent=function(){return fn(this.backgroundColor)},n.prototype.isTransformed=function(){return this.transform!==null},n.prototype.isPositioned=function(){return this.position!==0},n.prototype.isPositionedWithZIndex=function(){return this.isPositioned()&&!this.zIndex.auto},n.prototype.isFloating=function(){return this.float!==0},n.prototype.isInlineLevel=function(){return Ct(this.display,4)||Ct(this.display,33554432)||Ct(this.display,268435456)||Ct(this.display,536870912)||Ct(this.display,67108864)||Ct(this.display,134217728)},n}(),q_=function(){function n(e,t){this.content=he(e,G_,t.content),this.quotes=he(e,z_,t.quotes)}return n}(),Ph=function(){function n(e,t){this.counterIncrement=he(e,V_,t.counterIncrement),this.counterReset=he(e,K_,t.counterReset)}return n}(),he=function(n,e,t){var A=new of,i=t!==null&&typeof t<"u"?t.toString():e.initialValue;A.write(i);var r=new lf(A.read());switch(e.type){case 2:var s=r.parseComponentValue();return e.parse(n,tt(s)?s.value:e.initialValue);case 0:return e.parse(n,r.parseComponentValue());case 1:return e.parse(n,r.parseComponentValues());case 4:return r.parseComponentValue();case 3:switch(e.format){case"angle":return aa.parse(n,r.parseComponentValue());case"color":return un.parse(n,r.parseComponentValue());case"image":return Xl.parse(n,r.parseComponentValue());case"length":var a=r.parseComponentValue();return gn(a)?a:Ft;case"length-percentage":var o=r.parseComponentValue();return vt(o)?o:Ft;case"time":return Sf.parse(n,r.parseComponentValue())}break}},$_="data-html2canvas-debug",j_=function(n){var e=n.getAttribute($_);switch(e){case"all":return 1;case"clone":return 2;case"parse":return 3;case"render":return 4;default:return 0}},Ul=function(n,e){var t=j_(n);return t===1||e===t},xA=function(){function n(e,t){if(this.context=e,this.textNodes=[],this.elements=[],this.flags=0,Ul(t,3))debugger;this.styles=new Z_(e,window.getComputedStyle(t,null)),Ml(t)&&(this.styles.animationDuration.some(function(A){return A>0})&&(t.style.animationDuration="0s"),this.styles.transform!==null&&(t.style.transform="none")),this.bounds=ra(this.context,t),Ul(t,4)&&(this.flags|=16)}return n}(),eC="AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=",Nh="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",rr=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var vs=0;vs<Nh.length;vs++)rr[Nh.charCodeAt(vs)]=vs;var tC=function(n){var e=n.length*.75,t=n.length,A,i=0,r,s,a,o;n[n.length-1]==="="&&(e--,n[n.length-2]==="="&&e--);var l=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(e):new Array(e),c=Array.isArray(l)?l:new Uint8Array(l);for(A=0;A<t;A+=4)r=rr[n.charCodeAt(A)],s=rr[n.charCodeAt(A+1)],a=rr[n.charCodeAt(A+2)],o=rr[n.charCodeAt(A+3)],c[i++]=r<<2|s>>4,c[i++]=(s&15)<<4|a>>2,c[i++]=(a&3)<<6|o&63;return l},AC=function(n){for(var e=n.length,t=[],A=0;A<e;A+=2)t.push(n[A+1]<<8|n[A]);return t},nC=function(n){for(var e=n.length,t=[],A=0;A<e;A+=4)t.push(n[A+3]<<24|n[A+2]<<16|n[A+1]<<8|n[A]);return t},Nn=5,Yl=11,Ao=2,iC=Yl-Nn,Mf=65536>>Nn,rC=1<<Nn,no=rC-1,sC=1024>>Nn,aC=Mf+sC,oC=aC,lC=32,cC=oC+lC,hC=65536>>Yl,uC=1<<iC,fC=uC-1,Oh=function(n,e,t){return n.slice?n.slice(e,t):new Uint16Array(Array.prototype.slice.call(n,e,t))},dC=function(n,e,t){return n.slice?n.slice(e,t):new Uint32Array(Array.prototype.slice.call(n,e,t))},pC=function(n,e){var t=tC(n),A=Array.isArray(t)?nC(t):new Uint32Array(t),i=Array.isArray(t)?AC(t):new Uint16Array(t),r=24,s=Oh(i,r/2,A[4]/2),a=A[5]===2?Oh(i,(r+A[4])/2):dC(A,Math.ceil((r+A[4])/4));return new gC(A[0],A[1],A[2],A[3],s,a)},gC=function(){function n(e,t,A,i,r,s){this.initialValue=e,this.errorValue=t,this.highStart=A,this.highValueIndex=i,this.index=r,this.data=s}return n.prototype.get=function(e){var t;if(e>=0){if(e<55296||e>56319&&e<=65535)return t=this.index[e>>Nn],t=(t<<Ao)+(e&no),this.data[t];if(e<=65535)return t=this.index[Mf+(e-55296>>Nn)],t=(t<<Ao)+(e&no),this.data[t];if(e<this.highStart)return t=cC-hC+(e>>Yl),t=this.index[t],t+=e>>Nn&fC,t=this.index[t],t=(t<<Ao)+(e&no),this.data[t];if(e<=1114111)return this.data[this.highValueIndex]}return this.errorValue},n}(),Gh="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",mC=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var _s=0;_s<Gh.length;_s++)mC[Gh.charCodeAt(_s)]=_s;var BC=1,io=2,ro=3,Vh=4,Kh=5,wC=7,kh=8,so=9,ao=10,zh=11,Wh=12,Xh=13,Yh=14,oo=15,vC=function(n){for(var e=[],t=0,A=n.length;t<A;){var i=n.charCodeAt(t++);if(i>=55296&&i<=56319&&t<A){var r=n.charCodeAt(t++);(r&64512)===56320?e.push(((i&1023)<<10)+(r&1023)+65536):(e.push(i),t--)}else e.push(i)}return e},_C=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];if(String.fromCodePoint)return String.fromCodePoint.apply(String,n);var t=n.length;if(!t)return"";for(var A=[],i=-1,r="";++i<t;){var s=n[i];s<=65535?A.push(s):(s-=65536,A.push((s>>10)+55296,s%1024+56320)),(i+1===t||A.length>16384)&&(r+=String.fromCharCode.apply(String,A),A.length=0)}return r},CC=pC(eC),$t="×",lo="÷",EC=function(n){return CC.get(n)},xC=function(n,e,t){var A=t-2,i=e[A],r=e[t-1],s=e[t];if(r===io&&s===ro)return $t;if(r===io||r===ro||r===Vh||s===io||s===ro||s===Vh)return lo;if(r===kh&&[kh,so,zh,Wh].indexOf(s)!==-1||(r===zh||r===so)&&(s===so||s===ao)||(r===Wh||r===ao)&&s===ao||s===Xh||s===Kh||s===wC||r===BC)return $t;if(r===Xh&&s===Yh){for(;i===Kh;)i=e[--A];if(i===Yh)return $t}if(r===oo&&s===oo){for(var a=0;i===oo;)a++,i=e[--A];if(a%2===0)return $t}return lo},UC=function(n){var e=vC(n),t=e.length,A=0,i=0,r=e.map(EC);return{next:function(){if(A>=t)return{done:!0,value:null};for(var s=$t;A<t&&(s=xC(e,r,++A))===$t;);if(s!==$t||A===t){var a=_C.apply(null,e.slice(i,A));return i=A,{value:a,done:!1}}return{done:!0,value:null}}}},yC=function(n){for(var e=UC(n),t=[],A;!(A=e.next()).done;)A.value&&t.push(A.value.slice());return t},SC=function(n){var e=123;if(n.createRange){var t=n.createRange();if(t.getBoundingClientRect){var A=n.createElement("boundtest");A.style.height=e+"px",A.style.display="block",n.body.appendChild(A),t.selectNode(A);var i=t.getBoundingClientRect(),r=Math.round(i.height);if(n.body.removeChild(A),r===e)return!0}}return!1},MC=function(n){var e=n.createElement("boundtest");e.style.width="50px",e.style.display="block",e.style.fontSize="12px",e.style.letterSpacing="0px",e.style.wordSpacing="0px",n.body.appendChild(e);var t=n.createRange();e.innerHTML=typeof"".repeat=="function"?"&#128104;".repeat(10):"";var A=e.firstChild,i=sa(A.data).map(function(o){return gt(o)}),r=0,s={},a=i.every(function(o,l){t.setStart(A,r),t.setEnd(A,r+o.length);var c=t.getBoundingClientRect();r+=o.length;var h=c.x>s.x||c.y>s.y;return s=c,l===0?!0:h});return n.body.removeChild(e),a},FC=function(){return typeof new Image().crossOrigin<"u"},bC=function(){return typeof new XMLHttpRequest().responseType=="string"},TC=function(n){var e=new Image,t=n.createElement("canvas"),A=t.getContext("2d");if(!A)return!1;e.src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";try{A.drawImage(e,0,0),t.toDataURL()}catch{return!1}return!0},Jh=function(n){return n[0]===0&&n[1]===255&&n[2]===0&&n[3]===255},QC=function(n){var e=n.createElement("canvas"),t=100;e.width=t,e.height=t;var A=e.getContext("2d");if(!A)return Promise.reject(!1);A.fillStyle="rgb(0, 255, 0)",A.fillRect(0,0,t,t);var i=new Image,r=e.toDataURL();i.src=r;var s=yl(t,t,0,0,i);return A.fillStyle="red",A.fillRect(0,0,t,t),Zh(s).then(function(a){A.drawImage(a,0,0);var o=A.getImageData(0,0,t,t).data;A.fillStyle="red",A.fillRect(0,0,t,t);var l=n.createElement("div");return l.style.backgroundImage="url("+r+")",l.style.height=t+"px",Jh(o)?Zh(yl(t,t,0,0,l)):Promise.reject(!1)}).then(function(a){return A.drawImage(a,0,0),Jh(A.getImageData(0,0,t,t).data)}).catch(function(){return!1})},yl=function(n,e,t,A,i){var r="http://www.w3.org/2000/svg",s=document.createElementNS(r,"svg"),a=document.createElementNS(r,"foreignObject");return s.setAttributeNS(null,"width",n.toString()),s.setAttributeNS(null,"height",e.toString()),a.setAttributeNS(null,"width","100%"),a.setAttributeNS(null,"height","100%"),a.setAttributeNS(null,"x",t.toString()),a.setAttributeNS(null,"y",A.toString()),a.setAttributeNS(null,"externalResourcesRequired","true"),s.appendChild(a),a.appendChild(i),s},Zh=function(n){return new Promise(function(e,t){var A=new Image;A.onload=function(){return e(A)},A.onerror=t,A.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(n))})},St={get SUPPORT_RANGE_BOUNDS(){var n=SC(document);return Object.defineProperty(St,"SUPPORT_RANGE_BOUNDS",{value:n}),n},get SUPPORT_WORD_BREAKING(){var n=St.SUPPORT_RANGE_BOUNDS&&MC(document);return Object.defineProperty(St,"SUPPORT_WORD_BREAKING",{value:n}),n},get SUPPORT_SVG_DRAWING(){var n=TC(document);return Object.defineProperty(St,"SUPPORT_SVG_DRAWING",{value:n}),n},get SUPPORT_FOREIGNOBJECT_DRAWING(){var n=typeof Array.from=="function"&&typeof window.fetch=="function"?QC(document):Promise.resolve(!1);return Object.defineProperty(St,"SUPPORT_FOREIGNOBJECT_DRAWING",{value:n}),n},get SUPPORT_CORS_IMAGES(){var n=FC();return Object.defineProperty(St,"SUPPORT_CORS_IMAGES",{value:n}),n},get SUPPORT_RESPONSE_TYPE(){var n=bC();return Object.defineProperty(St,"SUPPORT_RESPONSE_TYPE",{value:n}),n},get SUPPORT_CORS_XHR(){var n="withCredentials"in new XMLHttpRequest;return Object.defineProperty(St,"SUPPORT_CORS_XHR",{value:n}),n},get SUPPORT_NATIVE_TEXT_SEGMENTATION(){var n=!!(typeof Intl<"u"&&Intl.Segmenter);return Object.defineProperty(St,"SUPPORT_NATIVE_TEXT_SEGMENTATION",{value:n}),n}},hr=function(){function n(e,t){this.text=e,this.bounds=t}return n}(),IC=function(n,e,t,A){var i=DC(e,t),r=[],s=0;return i.forEach(function(a){if(t.textDecorationLine.length||a.trim().length>0)if(St.SUPPORT_RANGE_BOUNDS){var o=qh(A,s,a.length).getClientRects();if(o.length>1){var l=Jl(a),c=0;l.forEach(function(u){r.push(new hr(u,KA.fromDOMRectList(n,qh(A,c+s,u.length).getClientRects()))),c+=u.length})}else r.push(new hr(a,KA.fromDOMRectList(n,o)))}else{var h=A.splitText(a.length);r.push(new hr(a,LC(n,A))),A=h}else St.SUPPORT_RANGE_BOUNDS||(A=A.splitText(a.length));s+=a.length}),r},LC=function(n,e){var t=e.ownerDocument;if(t){var A=t.createElement("html2canvaswrapper");A.appendChild(e.cloneNode(!0));var i=e.parentNode;if(i){i.replaceChild(A,e);var r=ra(n,A);return A.firstChild&&i.replaceChild(A.firstChild,A),r}}return KA.EMPTY},qh=function(n,e,t){var A=n.ownerDocument;if(!A)throw new Error("Node has no owner document");var i=A.createRange();return i.setStart(n,e),i.setEnd(n,e+t),i},Jl=function(n){if(St.SUPPORT_NATIVE_TEXT_SEGMENTATION){var e=new Intl.Segmenter(void 0,{granularity:"grapheme"});return Array.from(e.segment(n)).map(function(t){return t.segment})}return yC(n)},RC=function(n,e){if(St.SUPPORT_NATIVE_TEXT_SEGMENTATION){var t=new Intl.Segmenter(void 0,{granularity:"word"});return Array.from(t.segment(n)).map(function(A){return A.segment})}return PC(n,e)},DC=function(n,e){return e.letterSpacing!==0?Jl(n):RC(n,e)},HC=[32,160,4961,65792,65793,4153,4241],PC=function(n,e){for(var t=hw(n,{lineBreak:e.lineBreak,wordBreak:e.overflowWrap==="break-word"?"break-word":e.wordBreak}),A=[],i,r=function(){if(i.value){var s=i.value.slice(),a=sa(s),o="";a.forEach(function(l){HC.indexOf(l)===-1?o+=gt(l):(o.length&&A.push(o),A.push(gt(l)),o="")}),o.length&&A.push(o)}};!(i=t.next()).done;)r();return A},NC=function(){function n(e,t,A){this.text=OC(t.data,A.textTransform),this.textBounds=IC(e,this.text,A,t)}return n}(),OC=function(n,e){switch(e){case 1:return n.toLowerCase();case 3:return n.replace(GC,VC);case 2:return n.toUpperCase();default:return n}},GC=/(^|\s|:|-|\(|\))([a-z])/g,VC=function(n,e,t){return n.length>0?e+t.toUpperCase():n},Ff=function(n){pA(e,n);function e(t,A){var i=n.call(this,t,A)||this;return i.src=A.currentSrc||A.src,i.intrinsicWidth=A.naturalWidth,i.intrinsicHeight=A.naturalHeight,i.context.cache.addImage(i.src),i}return e}(xA),bf=function(n){pA(e,n);function e(t,A){var i=n.call(this,t,A)||this;return i.canvas=A,i.intrinsicWidth=A.width,i.intrinsicHeight=A.height,i}return e}(xA),Tf=function(n){pA(e,n);function e(t,A){var i=n.call(this,t,A)||this,r=new XMLSerializer,s=ra(t,A);return A.setAttribute("width",s.width+"px"),A.setAttribute("height",s.height+"px"),i.svg="data:image/svg+xml,"+encodeURIComponent(r.serializeToString(A)),i.intrinsicWidth=A.width.baseVal.value,i.intrinsicHeight=A.height.baseVal.value,i.context.cache.addImage(i.svg),i}return e}(xA),Qf=function(n){pA(e,n);function e(t,A){var i=n.call(this,t,A)||this;return i.value=A.value,i}return e}(xA),Sl=function(n){pA(e,n);function e(t,A){var i=n.call(this,t,A)||this;return i.start=A.start,i.reversed=typeof A.reversed=="boolean"&&A.reversed===!0,i}return e}(xA),KC=[{type:15,flags:0,unit:"px",number:3}],kC=[{type:16,flags:0,number:50}],zC=function(n){return n.width>n.height?new KA(n.left+(n.width-n.height)/2,n.top,n.height,n.height):n.width<n.height?new KA(n.left,n.top+(n.height-n.width)/2,n.width,n.width):n},WC=function(n){var e=n.type===XC?new Array(n.value.length+1).join("•"):n.value;return e.length===0?n.placeholder||"":e},zs="checkbox",Ws="radio",XC="password",$h=707406591,Zl=function(n){pA(e,n);function e(t,A){var i=n.call(this,t,A)||this;switch(i.type=A.type.toLowerCase(),i.checked=A.checked,i.value=WC(A),(i.type===zs||i.type===Ws)&&(i.styles.backgroundColor=3739148031,i.styles.borderTopColor=i.styles.borderRightColor=i.styles.borderBottomColor=i.styles.borderLeftColor=2779096575,i.styles.borderTopWidth=i.styles.borderRightWidth=i.styles.borderBottomWidth=i.styles.borderLeftWidth=1,i.styles.borderTopStyle=i.styles.borderRightStyle=i.styles.borderBottomStyle=i.styles.borderLeftStyle=1,i.styles.backgroundClip=[0],i.styles.backgroundOrigin=[0],i.bounds=zC(i.bounds)),i.type){case zs:i.styles.borderTopRightRadius=i.styles.borderTopLeftRadius=i.styles.borderBottomRightRadius=i.styles.borderBottomLeftRadius=KC;break;case Ws:i.styles.borderTopRightRadius=i.styles.borderTopLeftRadius=i.styles.borderBottomRightRadius=i.styles.borderBottomLeftRadius=kC;break}return i}return e}(xA),If=function(n){pA(e,n);function e(t,A){var i=n.call(this,t,A)||this,r=A.options[A.selectedIndex||0];return i.value=r&&r.text||"",i}return e}(xA),Lf=function(n){pA(e,n);function e(t,A){var i=n.call(this,t,A)||this;return i.value=A.value,i}return e}(xA),Rf=function(n){pA(e,n);function e(t,A){var i=n.call(this,t,A)||this;i.src=A.src,i.width=parseInt(A.width,10)||0,i.height=parseInt(A.height,10)||0,i.backgroundColor=i.styles.backgroundColor;try{if(A.contentWindow&&A.contentWindow.document&&A.contentWindow.document.documentElement){i.tree=Hf(t,A.contentWindow.document.documentElement);var r=A.contentWindow.document.documentElement?lr(t,getComputedStyle(A.contentWindow.document.documentElement).backgroundColor):OA.TRANSPARENT,s=A.contentWindow.document.body?lr(t,getComputedStyle(A.contentWindow.document.body).backgroundColor):OA.TRANSPARENT;i.backgroundColor=fn(r)?fn(s)?i.styles.backgroundColor:s:r}}catch{}return i}return e}(xA),YC=["OL","UL","MENU"],Ps=function(n,e,t,A){for(var i=e.firstChild,r=void 0;i;i=r)if(r=i.nextSibling,Pf(i)&&i.data.trim().length>0)t.textNodes.push(new NC(n,i,t.styles));else if(gi(i))if(Vf(i)&&i.assignedNodes)i.assignedNodes().forEach(function(a){return Ps(n,a,t,A)});else{var s=Df(n,i);s.styles.isVisible()&&(JC(i,s,A)?s.flags|=4:ZC(s.styles)&&(s.flags|=2),YC.indexOf(i.tagName)!==-1&&(s.flags|=8),t.elements.push(s),i.slot,i.shadowRoot?Ps(n,i.shadowRoot,s,A):!Xs(i)&&!Nf(i)&&!Ys(i)&&Ps(n,i,s,A))}},Df=function(n,e){return Fl(e)?new Ff(n,e):Of(e)?new bf(n,e):Nf(e)?new Tf(n,e):qC(e)?new Qf(n,e):$C(e)?new Sl(n,e):jC(e)?new Zl(n,e):Ys(e)?new If(n,e):Xs(e)?new Lf(n,e):Gf(e)?new Rf(n,e):new xA(n,e)},Hf=function(n,e){var t=Df(n,e);return t.flags|=4,Ps(n,e,t,t),t},JC=function(n,e,t){return e.styles.isPositionedWithZIndex()||e.styles.opacity<1||e.styles.isTransformed()||ql(n)&&t.styles.isTransparent()},ZC=function(n){return n.isPositioned()||n.isFloating()},Pf=function(n){return n.nodeType===Node.TEXT_NODE},gi=function(n){return n.nodeType===Node.ELEMENT_NODE},Ml=function(n){return gi(n)&&typeof n.style<"u"&&!Ns(n)},Ns=function(n){return typeof n.className=="object"},qC=function(n){return n.tagName==="LI"},$C=function(n){return n.tagName==="OL"},jC=function(n){return n.tagName==="INPUT"},eE=function(n){return n.tagName==="HTML"},Nf=function(n){return n.tagName==="svg"},ql=function(n){return n.tagName==="BODY"},Of=function(n){return n.tagName==="CANVAS"},jh=function(n){return n.tagName==="VIDEO"},Fl=function(n){return n.tagName==="IMG"},Gf=function(n){return n.tagName==="IFRAME"},eu=function(n){return n.tagName==="STYLE"},tE=function(n){return n.tagName==="SCRIPT"},Xs=function(n){return n.tagName==="TEXTAREA"},Ys=function(n){return n.tagName==="SELECT"},Vf=function(n){return n.tagName==="SLOT"},tu=function(n){return n.tagName.indexOf("-")>0},AE=function(){function n(){this.counters={}}return n.prototype.getCounterValue=function(e){var t=this.counters[e];return t&&t.length?t[t.length-1]:1},n.prototype.getCounterValues=function(e){var t=this.counters[e];return t||[]},n.prototype.pop=function(e){var t=this;e.forEach(function(A){return t.counters[A].pop()})},n.prototype.parse=function(e){var t=this,A=e.counterIncrement,i=e.counterReset,r=!0;A!==null&&A.forEach(function(a){var o=t.counters[a.counter];o&&a.increment!==0&&(r=!1,o.length||o.push(1),o[Math.max(0,o.length-1)]+=a.increment)});var s=[];return r&&i.forEach(function(a){var o=t.counters[a.counter];s.push(a.counter),o||(o=t.counters[a.counter]=[]),o.push(a.reset)}),s},n}(),Au={integers:[1e3,900,500,400,100,90,50,40,10,9,5,4,1],values:["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]},nu={integers:[9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["Ք","Փ","Ւ","Ց","Ր","Տ","Վ","Ս","Ռ","Ջ","Պ","Չ","Ո","Շ","Ն","Յ","Մ","Ճ","Ղ","Ձ","Հ","Կ","Ծ","Խ","Լ","Ի","Ժ","Թ","Ը","Է","Զ","Ե","Դ","Գ","Բ","Ա"]},nE={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,400,300,200,100,90,80,70,60,50,40,30,20,19,18,17,16,15,10,9,8,7,6,5,4,3,2,1],values:["י׳","ט׳","ח׳","ז׳","ו׳","ה׳","ד׳","ג׳","ב׳","א׳","ת","ש","ר","ק","צ","פ","ע","ס","נ","מ","ל","כ","יט","יח","יז","טז","טו","י","ט","ח","ז","ו","ה","ד","ג","ב","א"]},iE={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["ჵ","ჰ","ჯ","ჴ","ხ","ჭ","წ","ძ","ც","ჩ","შ","ყ","ღ","ქ","ფ","ჳ","ტ","ს","რ","ჟ","პ","ო","ჲ","ნ","მ","ლ","კ","ი","თ","ჱ","ზ","ვ","ე","დ","გ","ბ","ა"]},oi=function(n,e,t,A,i,r){return n<e||n>t?vr(n,i,r.length>0):A.integers.reduce(function(s,a,o){for(;n>=a;)n-=a,s+=A.values[o];return s},"")+r},Kf=function(n,e,t,A){var i="";do t||n--,i=A(n)+i,n/=e;while(n*e>=e);return i},pt=function(n,e,t,A,i){var r=t-e+1;return(n<0?"-":"")+(Kf(Math.abs(n),r,A,function(s){return gt(Math.floor(s%r)+e)})+i)},Un=function(n,e,t){t===void 0&&(t=". ");var A=e.length;return Kf(Math.abs(n),A,!1,function(i){return e[Math.floor(i%A)]})+t},ui=1,$A=2,jA=4,sr=8,IA=function(n,e,t,A,i,r){if(n<-9999||n>9999)return vr(n,4,i.length>0);var s=Math.abs(n),a=i;if(s===0)return e[0]+a;for(var o=0;s>0&&o<=4;o++){var l=s%10;l===0&&Ct(r,ui)&&a!==""?a=e[l]+a:l>1||l===1&&o===0||l===1&&o===1&&Ct(r,$A)||l===1&&o===1&&Ct(r,jA)&&n>100||l===1&&o>1&&Ct(r,sr)?a=e[l]+(o>0?t[o-1]:"")+a:l===1&&o>0&&(a=t[o-1]+a),s=Math.floor(s/10)}return(n<0?A:"")+a},iu="十百千萬",ru="拾佰仟萬",su="マイナス",co="마이너스",vr=function(n,e,t){var A=t?". ":"",i=t?"、":"",r=t?", ":"",s=t?" ":"";switch(e){case 0:return"•"+s;case 1:return"◦"+s;case 2:return"◾"+s;case 5:var a=pt(n,48,57,!0,A);return a.length<4?"0"+a:a;case 4:return Un(n,"〇一二三四五六七八九",i);case 6:return oi(n,1,3999,Au,3,A).toLowerCase();case 7:return oi(n,1,3999,Au,3,A);case 8:return pt(n,945,969,!1,A);case 9:return pt(n,97,122,!1,A);case 10:return pt(n,65,90,!1,A);case 11:return pt(n,1632,1641,!0,A);case 12:case 49:return oi(n,1,9999,nu,3,A);case 35:return oi(n,1,9999,nu,3,A).toLowerCase();case 13:return pt(n,2534,2543,!0,A);case 14:case 30:return pt(n,6112,6121,!0,A);case 15:return Un(n,"子丑寅卯辰巳午未申酉戌亥",i);case 16:return Un(n,"甲乙丙丁戊己庚辛壬癸",i);case 17:case 48:return IA(n,"零一二三四五六七八九",iu,"負",i,$A|jA|sr);case 47:return IA(n,"零壹貳參肆伍陸柒捌玖",ru,"負",i,ui|$A|jA|sr);case 42:return IA(n,"零一二三四五六七八九",iu,"负",i,$A|jA|sr);case 41:return IA(n,"零壹贰叁肆伍陆柒捌玖",ru,"负",i,ui|$A|jA|sr);case 26:return IA(n,"〇一二三四五六七八九","十百千万",su,i,0);case 25:return IA(n,"零壱弐参四伍六七八九","拾百千万",su,i,ui|$A|jA);case 31:return IA(n,"영일이삼사오육칠팔구","십백천만",co,r,ui|$A|jA);case 33:return IA(n,"零一二三四五六七八九","十百千萬",co,r,0);case 32:return IA(n,"零壹貳參四五六七八九","拾百千",co,r,ui|$A|jA);case 18:return pt(n,2406,2415,!0,A);case 20:return oi(n,1,19999,iE,3,A);case 21:return pt(n,2790,2799,!0,A);case 22:return pt(n,2662,2671,!0,A);case 22:return oi(n,1,10999,nE,3,A);case 23:return Un(n,"あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");case 24:return Un(n,"いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");case 27:return pt(n,3302,3311,!0,A);case 28:return Un(n,"アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン",i);case 29:return Un(n,"イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス",i);case 34:return pt(n,3792,3801,!0,A);case 37:return pt(n,6160,6169,!0,A);case 38:return pt(n,4160,4169,!0,A);case 39:return pt(n,2918,2927,!0,A);case 40:return pt(n,1776,1785,!0,A);case 43:return pt(n,3046,3055,!0,A);case 44:return pt(n,3174,3183,!0,A);case 45:return pt(n,3664,3673,!0,A);case 46:return pt(n,3872,3881,!0,A);case 3:default:return pt(n,48,57,!0,A)}},kf="data-html2canvas-ignore",au=function(){function n(e,t,A){if(this.context=e,this.options=A,this.scrolledElements=[],this.referenceElement=t,this.counters=new AE,this.quoteDepth=0,!t.ownerDocument)throw new Error("Cloned element does not have an owner document");this.documentElement=this.cloneNode(t.ownerDocument.documentElement,!1)}return n.prototype.toIFrame=function(e,t){var A=this,i=rE(e,t);if(!i.contentWindow)return Promise.reject("Unable to find iframe window");var r=e.defaultView.pageXOffset,s=e.defaultView.pageYOffset,a=i.contentWindow,o=a.document,l=oE(i).then(function(){return Ht(A,void 0,void 0,function(){var c,h;return It(this,function(u){switch(u.label){case 0:return this.scrolledElements.forEach(uE),a&&(a.scrollTo(t.left,t.top),/(iPad|iPhone|iPod)/g.test(navigator.userAgent)&&(a.scrollY!==t.top||a.scrollX!==t.left)&&(this.context.logger.warn("Unable to restore scroll position for cloned document"),this.context.windowBounds=this.context.windowBounds.add(a.scrollX-t.left,a.scrollY-t.top,0,0))),c=this.options.onclone,h=this.clonedReferenceElement,typeof h>"u"?[2,Promise.reject("Error finding the "+this.referenceElement.nodeName+" in the cloned document")]:o.fonts&&o.fonts.ready?[4,o.fonts.ready]:[3,2];case 1:u.sent(),u.label=2;case 2:return/(AppleWebKit)/g.test(navigator.userAgent)?[4,aE(o)]:[3,4];case 3:u.sent(),u.label=4;case 4:return typeof c=="function"?[2,Promise.resolve().then(function(){return c(o,h)}).then(function(){return i})]:[2,i]}})})});return o.open(),o.write(cE(document.doctype)+"<html></html>"),hE(this.referenceElement.ownerDocument,r,s),o.replaceChild(o.adoptNode(this.documentElement),o.documentElement),o.close(),l},n.prototype.createElementClone=function(e){if(Ul(e,2))debugger;if(Of(e))return this.createCanvasClone(e);if(jh(e))return this.createVideoClone(e);if(eu(e))return this.createStyleClone(e);var t=e.cloneNode(!1);return Fl(t)&&(Fl(e)&&e.currentSrc&&e.currentSrc!==e.src&&(t.src=e.currentSrc,t.srcset=""),t.loading==="lazy"&&(t.loading="eager")),tu(t)?this.createCustomElementClone(t):t},n.prototype.createCustomElementClone=function(e){var t=document.createElement("html2canvascustomelement");return ho(e.style,t),t},n.prototype.createStyleClone=function(e){try{var t=e.sheet;if(t&&t.cssRules){var A=[].slice.call(t.cssRules,0).reduce(function(r,s){return s&&typeof s.cssText=="string"?r+s.cssText:r},""),i=e.cloneNode(!1);return i.textContent=A,i}}catch(r){if(this.context.logger.error("Unable to access cssRules property",r),r.name!=="SecurityError")throw r}return e.cloneNode(!1)},n.prototype.createCanvasClone=function(e){var t;if(this.options.inlineImages&&e.ownerDocument){var A=e.ownerDocument.createElement("img");try{return A.src=e.toDataURL(),A}catch{this.context.logger.info("Unable to inline canvas contents, canvas is tainted",e)}}var i=e.cloneNode(!1);try{i.width=e.width,i.height=e.height;var r=e.getContext("2d"),s=i.getContext("2d");if(s)if(!this.options.allowTaint&&r)s.putImageData(r.getImageData(0,0,e.width,e.height),0,0);else{var a=(t=e.getContext("webgl2"))!==null&&t!==void 0?t:e.getContext("webgl");if(a){var o=a.getContextAttributes();(o==null?void 0:o.preserveDrawingBuffer)===!1&&this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false",e)}s.drawImage(e,0,0)}return i}catch{this.context.logger.info("Unable to clone canvas as it is tainted",e)}return i},n.prototype.createVideoClone=function(e){var t=e.ownerDocument.createElement("canvas");t.width=e.offsetWidth,t.height=e.offsetHeight;var A=t.getContext("2d");try{return A&&(A.drawImage(e,0,0,t.width,t.height),this.options.allowTaint||A.getImageData(0,0,t.width,t.height)),t}catch{this.context.logger.info("Unable to clone video as it is tainted",e)}var i=e.ownerDocument.createElement("canvas");return i.width=e.offsetWidth,i.height=e.offsetHeight,i},n.prototype.appendChildNode=function(e,t,A){(!gi(t)||!tE(t)&&!t.hasAttribute(kf)&&(typeof this.options.ignoreElements!="function"||!this.options.ignoreElements(t)))&&(!this.options.copyStyles||!gi(t)||!eu(t))&&e.appendChild(this.cloneNode(t,A))},n.prototype.cloneChildNodes=function(e,t,A){for(var i=this,r=e.shadowRoot?e.shadowRoot.firstChild:e.firstChild;r;r=r.nextSibling)if(gi(r)&&Vf(r)&&typeof r.assignedNodes=="function"){var s=r.assignedNodes();s.length&&s.forEach(function(a){return i.appendChildNode(t,a,A)})}else this.appendChildNode(t,r,A)},n.prototype.cloneNode=function(e,t){if(Pf(e))return document.createTextNode(e.data);if(!e.ownerDocument)return e.cloneNode(!1);var A=e.ownerDocument.defaultView;if(A&&gi(e)&&(Ml(e)||Ns(e))){var i=this.createElementClone(e);i.style.transitionProperty="none";var r=A.getComputedStyle(e),s=A.getComputedStyle(e,":before"),a=A.getComputedStyle(e,":after");this.referenceElement===e&&Ml(i)&&(this.clonedReferenceElement=i),ql(i)&&pE(i);var o=this.counters.parse(new Ph(this.context,r)),l=this.resolvePseudoContent(e,i,s,ur.BEFORE);tu(e)&&(t=!0),jh(e)||this.cloneChildNodes(e,i,t),l&&i.insertBefore(l,i.firstChild);var c=this.resolvePseudoContent(e,i,a,ur.AFTER);return c&&i.appendChild(c),this.counters.pop(o),(r&&(this.options.copyStyles||Ns(e))&&!Gf(e)||t)&&ho(r,i),(e.scrollTop!==0||e.scrollLeft!==0)&&this.scrolledElements.push([i,e.scrollLeft,e.scrollTop]),(Xs(e)||Ys(e))&&(Xs(i)||Ys(i))&&(i.value=e.value),i}return e.cloneNode(!1)},n.prototype.resolvePseudoContent=function(e,t,A,i){var r=this;if(A){var s=A.content,a=t.ownerDocument;if(!(!a||!s||s==="none"||s==="-moz-alt-content"||A.display==="none")){this.counters.parse(new Ph(this.context,A));var o=new q_(this.context,A),l=a.createElement("html2canvaspseudoelement");ho(A,l),o.content.forEach(function(h){if(h.type===0)l.appendChild(a.createTextNode(h.value));else if(h.type===22){var u=a.createElement("img");u.src=h.value,u.style.opacity="1",l.appendChild(u)}else if(h.type===18){if(h.name==="attr"){var d=h.values.filter(tt);d.length&&l.appendChild(a.createTextNode(e.getAttribute(d[0].value)||""))}else if(h.name==="counter"){var g=h.values.filter(Di),m=g[0],p=g[1];if(m&&tt(m)){var f=r.counters.getCounterValue(m.value),E=p&&tt(p)?xl.parse(r.context,p.value):3;l.appendChild(a.createTextNode(vr(f,E,!1)))}}else if(h.name==="counters"){var U=h.values.filter(Di),m=U[0],v=U[1],p=U[2];if(m&&tt(m)){var b=r.counters.getCounterValues(m.value),y=p&&tt(p)?xl.parse(r.context,p.value):3,S=v&&v.type===0?v.value:"",F=b.map(function(M){return vr(M,y,!1)}).join(S);l.appendChild(a.createTextNode(F))}}}else if(h.type===20)switch(h.value){case"open-quote":l.appendChild(a.createTextNode(Hh(o.quotes,r.quoteDepth++,!0)));break;case"close-quote":l.appendChild(a.createTextNode(Hh(o.quotes,--r.quoteDepth,!1)));break;default:l.appendChild(a.createTextNode(h.value))}}),l.className=bl+" "+Tl;var c=i===ur.BEFORE?" "+bl:" "+Tl;return Ns(t)?t.className.baseValue+=c:t.className+=c,l}}},n.destroy=function(e){return e.parentNode?(e.parentNode.removeChild(e),!0):!1},n}(),ur;(function(n){n[n.BEFORE=0]="BEFORE",n[n.AFTER=1]="AFTER"})(ur||(ur={}));var rE=function(n,e){var t=n.createElement("iframe");return t.className="html2canvas-container",t.style.visibility="hidden",t.style.position="fixed",t.style.left="-10000px",t.style.top="0px",t.style.border="0",t.width=e.width.toString(),t.height=e.height.toString(),t.scrolling="no",t.setAttribute(kf,"true"),n.body.appendChild(t),t},sE=function(n){return new Promise(function(e){if(n.complete){e();return}if(!n.src){e();return}n.onload=e,n.onerror=e})},aE=function(n){return Promise.all([].slice.call(n.images,0).map(sE))},oE=function(n){return new Promise(function(e,t){var A=n.contentWindow;if(!A)return t("No window assigned for iframe");var i=A.document;A.onload=n.onload=function(){A.onload=n.onload=null;var r=setInterval(function(){i.body.childNodes.length>0&&i.readyState==="complete"&&(clearInterval(r),e(n))},50)}})},lE=["all","d","content"],ho=function(n,e){for(var t=n.length-1;t>=0;t--){var A=n.item(t);lE.indexOf(A)===-1&&e.style.setProperty(A,n.getPropertyValue(A))}return e},cE=function(n){var e="";return n&&(e+="<!DOCTYPE ",n.name&&(e+=n.name),n.internalSubset&&(e+=n.internalSubset),n.publicId&&(e+='"'+n.publicId+'"'),n.systemId&&(e+='"'+n.systemId+'"'),e+=">"),e},hE=function(n,e,t){n&&n.defaultView&&(e!==n.defaultView.pageXOffset||t!==n.defaultView.pageYOffset)&&n.defaultView.scrollTo(e,t)},uE=function(n){var e=n[0],t=n[1],A=n[2];e.scrollLeft=t,e.scrollTop=A},fE=":before",dE=":after",bl="___html2canvas___pseudoelement_before",Tl="___html2canvas___pseudoelement_after",ou=`{
    content: "" !important;
    display: none !important;
}`,pE=function(n){gE(n,"."+bl+fE+ou+`
         .`+Tl+dE+ou)},gE=function(n,e){var t=n.ownerDocument;if(t){var A=t.createElement("style");A.textContent=e,n.appendChild(A)}},zf=function(){function n(){}return n.getOrigin=function(e){var t=n._link;return t?(t.href=e,t.href=t.href,t.protocol+t.hostname+t.port):"about:blank"},n.isSameOrigin=function(e){return n.getOrigin(e)===n._origin},n.setContext=function(e){n._link=e.document.createElement("a"),n._origin=n.getOrigin(e.location.href)},n._origin="about:blank",n}(),mE=function(){function n(e,t){this.context=e,this._options=t,this._cache={}}return n.prototype.addImage=function(e){var t=Promise.resolve();return this.has(e)||(fo(e)||_E(e))&&(this._cache[e]=this.loadImage(e)).catch(function(){}),t},n.prototype.match=function(e){return this._cache[e]},n.prototype.loadImage=function(e){return Ht(this,void 0,void 0,function(){var t,A,i,r,s=this;return It(this,function(a){switch(a.label){case 0:return t=zf.isSameOrigin(e),A=!uo(e)&&this._options.useCORS===!0&&St.SUPPORT_CORS_IMAGES&&!t,i=!uo(e)&&!t&&!fo(e)&&typeof this._options.proxy=="string"&&St.SUPPORT_CORS_XHR&&!A,!t&&this._options.allowTaint===!1&&!uo(e)&&!fo(e)&&!i&&!A?[2]:(r=e,i?[4,this.proxy(r)]:[3,2]);case 1:r=a.sent(),a.label=2;case 2:return this.context.logger.debug("Added image "+e.substring(0,256)),[4,new Promise(function(o,l){var c=new Image;c.onload=function(){return o(c)},c.onerror=l,(CE(r)||A)&&(c.crossOrigin="anonymous"),c.src=r,c.complete===!0&&setTimeout(function(){return o(c)},500),s._options.imageTimeout>0&&setTimeout(function(){return l("Timed out ("+s._options.imageTimeout+"ms) loading image")},s._options.imageTimeout)})];case 3:return[2,a.sent()]}})})},n.prototype.has=function(e){return typeof this._cache[e]<"u"},n.prototype.keys=function(){return Promise.resolve(Object.keys(this._cache))},n.prototype.proxy=function(e){var t=this,A=this._options.proxy;if(!A)throw new Error("No proxy defined");var i=e.substring(0,256);return new Promise(function(r,s){var a=St.SUPPORT_RESPONSE_TYPE?"blob":"text",o=new XMLHttpRequest;o.onload=function(){if(o.status===200)if(a==="text")r(o.response);else{var h=new FileReader;h.addEventListener("load",function(){return r(h.result)},!1),h.addEventListener("error",function(u){return s(u)},!1),h.readAsDataURL(o.response)}else s("Failed to proxy resource "+i+" with status code "+o.status)},o.onerror=s;var l=A.indexOf("?")>-1?"&":"?";if(o.open("GET",""+A+l+"url="+encodeURIComponent(e)+"&responseType="+a),a!=="text"&&o instanceof XMLHttpRequest&&(o.responseType=a),t._options.imageTimeout){var c=t._options.imageTimeout;o.timeout=c,o.ontimeout=function(){return s("Timed out ("+c+"ms) proxying "+i)}}o.send()})},n}(),BE=/^data:image\/svg\+xml/i,wE=/^data:image\/.*;base64,/i,vE=/^data:image\/.*/i,_E=function(n){return St.SUPPORT_SVG_DRAWING||!EE(n)},uo=function(n){return vE.test(n)},CE=function(n){return wE.test(n)},fo=function(n){return n.substr(0,4)==="blob"},EE=function(n){return n.substr(-3).toLowerCase()==="svg"||BE.test(n)},se=function(){function n(e,t){this.type=0,this.x=e,this.y=t}return n.prototype.add=function(e,t){return new n(this.x+e,this.y+t)},n}(),li=function(n,e,t){return new se(n.x+(e.x-n.x)*t,n.y+(e.y-n.y)*t)},Cs=function(){function n(e,t,A,i){this.type=1,this.start=e,this.startControl=t,this.endControl=A,this.end=i}return n.prototype.subdivide=function(e,t){var A=li(this.start,this.startControl,e),i=li(this.startControl,this.endControl,e),r=li(this.endControl,this.end,e),s=li(A,i,e),a=li(i,r,e),o=li(s,a,e);return t?new n(this.start,A,s,o):new n(o,a,r,this.end)},n.prototype.add=function(e,t){return new n(this.start.add(e,t),this.startControl.add(e,t),this.endControl.add(e,t),this.end.add(e,t))},n.prototype.reverse=function(){return new n(this.end,this.endControl,this.startControl,this.start)},n}(),tA=function(n){return n.type===1},xE=function(){function n(e){var t=e.styles,A=e.bounds,i=ir(t.borderTopLeftRadius,A.width,A.height),r=i[0],s=i[1],a=ir(t.borderTopRightRadius,A.width,A.height),o=a[0],l=a[1],c=ir(t.borderBottomRightRadius,A.width,A.height),h=c[0],u=c[1],d=ir(t.borderBottomLeftRadius,A.width,A.height),g=d[0],m=d[1],p=[];p.push((r+o)/A.width),p.push((g+h)/A.width),p.push((s+m)/A.height),p.push((l+u)/A.height);var f=Math.max.apply(Math,p);f>1&&(r/=f,s/=f,o/=f,l/=f,h/=f,u/=f,g/=f,m/=f);var E=A.width-o,U=A.height-u,v=A.width-h,b=A.height-m,y=t.borderTopWidth,S=t.borderRightWidth,F=t.borderBottomWidth,C=t.borderLeftWidth,_=st(t.paddingTop,e.bounds.width),M=st(t.paddingRight,e.bounds.width),G=st(t.paddingBottom,e.bounds.width),D=st(t.paddingLeft,e.bounds.width);this.topLeftBorderDoubleOuterBox=r>0||s>0?ht(A.left+C/3,A.top+y/3,r-C/3,s-y/3,qe.TOP_LEFT):new se(A.left+C/3,A.top+y/3),this.topRightBorderDoubleOuterBox=r>0||s>0?ht(A.left+E,A.top+y/3,o-S/3,l-y/3,qe.TOP_RIGHT):new se(A.left+A.width-S/3,A.top+y/3),this.bottomRightBorderDoubleOuterBox=h>0||u>0?ht(A.left+v,A.top+U,h-S/3,u-F/3,qe.BOTTOM_RIGHT):new se(A.left+A.width-S/3,A.top+A.height-F/3),this.bottomLeftBorderDoubleOuterBox=g>0||m>0?ht(A.left+C/3,A.top+b,g-C/3,m-F/3,qe.BOTTOM_LEFT):new se(A.left+C/3,A.top+A.height-F/3),this.topLeftBorderDoubleInnerBox=r>0||s>0?ht(A.left+C*2/3,A.top+y*2/3,r-C*2/3,s-y*2/3,qe.TOP_LEFT):new se(A.left+C*2/3,A.top+y*2/3),this.topRightBorderDoubleInnerBox=r>0||s>0?ht(A.left+E,A.top+y*2/3,o-S*2/3,l-y*2/3,qe.TOP_RIGHT):new se(A.left+A.width-S*2/3,A.top+y*2/3),this.bottomRightBorderDoubleInnerBox=h>0||u>0?ht(A.left+v,A.top+U,h-S*2/3,u-F*2/3,qe.BOTTOM_RIGHT):new se(A.left+A.width-S*2/3,A.top+A.height-F*2/3),this.bottomLeftBorderDoubleInnerBox=g>0||m>0?ht(A.left+C*2/3,A.top+b,g-C*2/3,m-F*2/3,qe.BOTTOM_LEFT):new se(A.left+C*2/3,A.top+A.height-F*2/3),this.topLeftBorderStroke=r>0||s>0?ht(A.left+C/2,A.top+y/2,r-C/2,s-y/2,qe.TOP_LEFT):new se(A.left+C/2,A.top+y/2),this.topRightBorderStroke=r>0||s>0?ht(A.left+E,A.top+y/2,o-S/2,l-y/2,qe.TOP_RIGHT):new se(A.left+A.width-S/2,A.top+y/2),this.bottomRightBorderStroke=h>0||u>0?ht(A.left+v,A.top+U,h-S/2,u-F/2,qe.BOTTOM_RIGHT):new se(A.left+A.width-S/2,A.top+A.height-F/2),this.bottomLeftBorderStroke=g>0||m>0?ht(A.left+C/2,A.top+b,g-C/2,m-F/2,qe.BOTTOM_LEFT):new se(A.left+C/2,A.top+A.height-F/2),this.topLeftBorderBox=r>0||s>0?ht(A.left,A.top,r,s,qe.TOP_LEFT):new se(A.left,A.top),this.topRightBorderBox=o>0||l>0?ht(A.left+E,A.top,o,l,qe.TOP_RIGHT):new se(A.left+A.width,A.top),this.bottomRightBorderBox=h>0||u>0?ht(A.left+v,A.top+U,h,u,qe.BOTTOM_RIGHT):new se(A.left+A.width,A.top+A.height),this.bottomLeftBorderBox=g>0||m>0?ht(A.left,A.top+b,g,m,qe.BOTTOM_LEFT):new se(A.left,A.top+A.height),this.topLeftPaddingBox=r>0||s>0?ht(A.left+C,A.top+y,Math.max(0,r-C),Math.max(0,s-y),qe.TOP_LEFT):new se(A.left+C,A.top+y),this.topRightPaddingBox=o>0||l>0?ht(A.left+Math.min(E,A.width-S),A.top+y,E>A.width+S?0:Math.max(0,o-S),Math.max(0,l-y),qe.TOP_RIGHT):new se(A.left+A.width-S,A.top+y),this.bottomRightPaddingBox=h>0||u>0?ht(A.left+Math.min(v,A.width-C),A.top+Math.min(U,A.height-F),Math.max(0,h-S),Math.max(0,u-F),qe.BOTTOM_RIGHT):new se(A.left+A.width-S,A.top+A.height-F),this.bottomLeftPaddingBox=g>0||m>0?ht(A.left+C,A.top+Math.min(b,A.height-F),Math.max(0,g-C),Math.max(0,m-F),qe.BOTTOM_LEFT):new se(A.left+C,A.top+A.height-F),this.topLeftContentBox=r>0||s>0?ht(A.left+C+D,A.top+y+_,Math.max(0,r-(C+D)),Math.max(0,s-(y+_)),qe.TOP_LEFT):new se(A.left+C+D,A.top+y+_),this.topRightContentBox=o>0||l>0?ht(A.left+Math.min(E,A.width+C+D),A.top+y+_,E>A.width+C+D?0:o-C+D,l-(y+_),qe.TOP_RIGHT):new se(A.left+A.width-(S+M),A.top+y+_),this.bottomRightContentBox=h>0||u>0?ht(A.left+Math.min(v,A.width-(C+D)),A.top+Math.min(U,A.height+y+_),Math.max(0,h-(S+M)),u-(F+G),qe.BOTTOM_RIGHT):new se(A.left+A.width-(S+M),A.top+A.height-(F+G)),this.bottomLeftContentBox=g>0||m>0?ht(A.left+C+D,A.top+b,Math.max(0,g-(C+D)),m-(F+G),qe.BOTTOM_LEFT):new se(A.left+C+D,A.top+A.height-(F+G))}return n}(),qe;(function(n){n[n.TOP_LEFT=0]="TOP_LEFT",n[n.TOP_RIGHT=1]="TOP_RIGHT",n[n.BOTTOM_RIGHT=2]="BOTTOM_RIGHT",n[n.BOTTOM_LEFT=3]="BOTTOM_LEFT"})(qe||(qe={}));var ht=function(n,e,t,A,i){var r=4*((Math.sqrt(2)-1)/3),s=t*r,a=A*r,o=n+t,l=e+A;switch(i){case qe.TOP_LEFT:return new Cs(new se(n,l),new se(n,l-a),new se(o-s,e),new se(o,e));case qe.TOP_RIGHT:return new Cs(new se(n,e),new se(n+s,e),new se(o,l-a),new se(o,l));case qe.BOTTOM_RIGHT:return new Cs(new se(o,e),new se(o,e+a),new se(n+s,l),new se(n,l));case qe.BOTTOM_LEFT:default:return new Cs(new se(o,l),new se(o-s,l),new se(n,e+a),new se(n,e))}},Js=function(n){return[n.topLeftBorderBox,n.topRightBorderBox,n.bottomRightBorderBox,n.bottomLeftBorderBox]},UE=function(n){return[n.topLeftContentBox,n.topRightContentBox,n.bottomRightContentBox,n.bottomLeftContentBox]},Zs=function(n){return[n.topLeftPaddingBox,n.topRightPaddingBox,n.bottomRightPaddingBox,n.bottomLeftPaddingBox]},yE=function(){function n(e,t,A){this.offsetX=e,this.offsetY=t,this.matrix=A,this.type=0,this.target=6}return n}(),Es=function(){function n(e,t){this.path=e,this.target=t,this.type=1}return n}(),SE=function(){function n(e){this.opacity=e,this.type=2,this.target=6}return n}(),ME=function(n){return n.type===0},Wf=function(n){return n.type===1},FE=function(n){return n.type===2},lu=function(n,e){return n.length===e.length?n.some(function(t,A){return t===e[A]}):!1},bE=function(n,e,t,A,i){return n.map(function(r,s){switch(s){case 0:return r.add(e,t);case 1:return r.add(e+A,t);case 2:return r.add(e+A,t+i);case 3:return r.add(e,t+i)}return r})},Xf=function(){function n(e){this.element=e,this.inlineLevel=[],this.nonInlineLevel=[],this.negativeZIndex=[],this.zeroOrAutoZIndexOrTransformedOrOpacity=[],this.positiveZIndex=[],this.nonPositionedFloats=[],this.nonPositionedInlineLevel=[]}return n}(),Yf=function(){function n(e,t){if(this.container=e,this.parent=t,this.effects=[],this.curves=new xE(this.container),this.container.styles.opacity<1&&this.effects.push(new SE(this.container.styles.opacity)),this.container.styles.transform!==null){var A=this.container.bounds.left+this.container.styles.transformOrigin[0].number,i=this.container.bounds.top+this.container.styles.transformOrigin[1].number,r=this.container.styles.transform;this.effects.push(new yE(A,i,r))}if(this.container.styles.overflowX!==0){var s=Js(this.curves),a=Zs(this.curves);lu(s,a)?this.effects.push(new Es(s,6)):(this.effects.push(new Es(s,2)),this.effects.push(new Es(a,4)))}}return n.prototype.getEffects=function(e){for(var t=[2,3].indexOf(this.container.styles.position)===-1,A=this.parent,i=this.effects.slice(0);A;){var r=A.effects.filter(function(o){return!Wf(o)});if(t||A.container.styles.position!==0||!A.parent){if(i.unshift.apply(i,r),t=[2,3].indexOf(A.container.styles.position)===-1,A.container.styles.overflowX!==0){var s=Js(A.curves),a=Zs(A.curves);lu(s,a)||i.unshift(new Es(a,6))}}else i.unshift.apply(i,r);A=A.parent}return i.filter(function(o){return Ct(o.target,e)})},n}(),Ql=function(n,e,t,A){n.container.elements.forEach(function(i){var r=Ct(i.flags,4),s=Ct(i.flags,2),a=new Yf(i,n);Ct(i.styles.display,2048)&&A.push(a);var o=Ct(i.flags,8)?[]:A;if(r||s){var l=r||i.styles.isPositioned()?t:e,c=new Xf(a);if(i.styles.isPositioned()||i.styles.opacity<1||i.styles.isTransformed()){var h=i.styles.zIndex.order;if(h<0){var u=0;l.negativeZIndex.some(function(g,m){return h>g.element.container.styles.zIndex.order?(u=m,!1):u>0}),l.negativeZIndex.splice(u,0,c)}else if(h>0){var d=0;l.positiveZIndex.some(function(g,m){return h>=g.element.container.styles.zIndex.order?(d=m+1,!1):d>0}),l.positiveZIndex.splice(d,0,c)}else l.zeroOrAutoZIndexOrTransformedOrOpacity.push(c)}else i.styles.isFloating()?l.nonPositionedFloats.push(c):l.nonPositionedInlineLevel.push(c);Ql(a,c,r?c:t,o)}else i.styles.isInlineLevel()?e.inlineLevel.push(a):e.nonInlineLevel.push(a),Ql(a,e,t,o);Ct(i.flags,8)&&Jf(i,o)})},Jf=function(n,e){for(var t=n instanceof Sl?n.start:1,A=n instanceof Sl?n.reversed:!1,i=0;i<e.length;i++){var r=e[i];r.container instanceof Qf&&typeof r.container.value=="number"&&r.container.value!==0&&(t=r.container.value),r.listValue=vr(t,r.container.styles.listStyleType,!0),t+=A?-1:1}},TE=function(n){var e=new Yf(n,null),t=new Xf(e),A=[];return Ql(e,t,t,A),Jf(e.container,A),t},cu=function(n,e){switch(e){case 0:return nA(n.topLeftBorderBox,n.topLeftPaddingBox,n.topRightBorderBox,n.topRightPaddingBox);case 1:return nA(n.topRightBorderBox,n.topRightPaddingBox,n.bottomRightBorderBox,n.bottomRightPaddingBox);case 2:return nA(n.bottomRightBorderBox,n.bottomRightPaddingBox,n.bottomLeftBorderBox,n.bottomLeftPaddingBox);case 3:default:return nA(n.bottomLeftBorderBox,n.bottomLeftPaddingBox,n.topLeftBorderBox,n.topLeftPaddingBox)}},QE=function(n,e){switch(e){case 0:return nA(n.topLeftBorderBox,n.topLeftBorderDoubleOuterBox,n.topRightBorderBox,n.topRightBorderDoubleOuterBox);case 1:return nA(n.topRightBorderBox,n.topRightBorderDoubleOuterBox,n.bottomRightBorderBox,n.bottomRightBorderDoubleOuterBox);case 2:return nA(n.bottomRightBorderBox,n.bottomRightBorderDoubleOuterBox,n.bottomLeftBorderBox,n.bottomLeftBorderDoubleOuterBox);case 3:default:return nA(n.bottomLeftBorderBox,n.bottomLeftBorderDoubleOuterBox,n.topLeftBorderBox,n.topLeftBorderDoubleOuterBox)}},IE=function(n,e){switch(e){case 0:return nA(n.topLeftBorderDoubleInnerBox,n.topLeftPaddingBox,n.topRightBorderDoubleInnerBox,n.topRightPaddingBox);case 1:return nA(n.topRightBorderDoubleInnerBox,n.topRightPaddingBox,n.bottomRightBorderDoubleInnerBox,n.bottomRightPaddingBox);case 2:return nA(n.bottomRightBorderDoubleInnerBox,n.bottomRightPaddingBox,n.bottomLeftBorderDoubleInnerBox,n.bottomLeftPaddingBox);case 3:default:return nA(n.bottomLeftBorderDoubleInnerBox,n.bottomLeftPaddingBox,n.topLeftBorderDoubleInnerBox,n.topLeftPaddingBox)}},LE=function(n,e){switch(e){case 0:return xs(n.topLeftBorderStroke,n.topRightBorderStroke);case 1:return xs(n.topRightBorderStroke,n.bottomRightBorderStroke);case 2:return xs(n.bottomRightBorderStroke,n.bottomLeftBorderStroke);case 3:default:return xs(n.bottomLeftBorderStroke,n.topLeftBorderStroke)}},xs=function(n,e){var t=[];return tA(n)?t.push(n.subdivide(.5,!1)):t.push(n),tA(e)?t.push(e.subdivide(.5,!0)):t.push(e),t},nA=function(n,e,t,A){var i=[];return tA(n)?i.push(n.subdivide(.5,!1)):i.push(n),tA(t)?i.push(t.subdivide(.5,!0)):i.push(t),tA(A)?i.push(A.subdivide(.5,!0).reverse()):i.push(A),tA(e)?i.push(e.subdivide(.5,!1).reverse()):i.push(e),i},Zf=function(n){var e=n.bounds,t=n.styles;return e.add(t.borderLeftWidth,t.borderTopWidth,-(t.borderRightWidth+t.borderLeftWidth),-(t.borderTopWidth+t.borderBottomWidth))},qs=function(n){var e=n.styles,t=n.bounds,A=st(e.paddingLeft,t.width),i=st(e.paddingRight,t.width),r=st(e.paddingTop,t.width),s=st(e.paddingBottom,t.width);return t.add(A+e.borderLeftWidth,r+e.borderTopWidth,-(e.borderRightWidth+e.borderLeftWidth+A+i),-(e.borderTopWidth+e.borderBottomWidth+r+s))},RE=function(n,e){return n===0?e.bounds:n===2?qs(e):Zf(e)},DE=function(n,e){return n===0?e.bounds:n===2?qs(e):Zf(e)},po=function(n,e,t){var A=RE(fi(n.styles.backgroundOrigin,e),n),i=DE(fi(n.styles.backgroundClip,e),n),r=HE(fi(n.styles.backgroundSize,e),t,A),s=r[0],a=r[1],o=ir(fi(n.styles.backgroundPosition,e),A.width-s,A.height-a),l=PE(fi(n.styles.backgroundRepeat,e),o,r,A,i),c=Math.round(A.left+o[0]),h=Math.round(A.top+o[1]);return[l,c,h,s,a]},ci=function(n){return tt(n)&&n.value===Ci.AUTO},Us=function(n){return typeof n=="number"},HE=function(n,e,t){var A=e[0],i=e[1],r=e[2],s=n[0],a=n[1];if(!s)return[0,0];if(vt(s)&&a&&vt(a))return[st(s,t.width),st(a,t.height)];var o=Us(r);if(tt(s)&&(s.value===Ci.CONTAIN||s.value===Ci.COVER)){if(Us(r)){var l=t.width/t.height;return l<r!=(s.value===Ci.COVER)?[t.width,t.width/r]:[t.height*r,t.height]}return[t.width,t.height]}var c=Us(A),h=Us(i),u=c||h;if(ci(s)&&(!a||ci(a))){if(c&&h)return[A,i];if(!o&&!u)return[t.width,t.height];if(u&&o){var d=c?A:i*r,g=h?i:A/r;return[d,g]}var m=c?A:t.width,p=h?i:t.height;return[m,p]}if(o){var f=0,E=0;return vt(s)?f=st(s,t.width):vt(a)&&(E=st(a,t.height)),ci(s)?f=E*r:(!a||ci(a))&&(E=f/r),[f,E]}var U=null,v=null;if(vt(s)?U=st(s,t.width):a&&vt(a)&&(v=st(a,t.height)),U!==null&&(!a||ci(a))&&(v=c&&h?U/A*i:t.height),v!==null&&ci(s)&&(U=c&&h?v/i*A:t.width),U!==null&&v!==null)return[U,v];throw new Error("Unable to calculate background-size for element")},fi=function(n,e){var t=n[e];return typeof t>"u"?n[0]:t},PE=function(n,e,t,A,i){var r=e[0],s=e[1],a=t[0],o=t[1];switch(n){case 2:return[new se(Math.round(A.left),Math.round(A.top+s)),new se(Math.round(A.left+A.width),Math.round(A.top+s)),new se(Math.round(A.left+A.width),Math.round(o+A.top+s)),new se(Math.round(A.left),Math.round(o+A.top+s))];case 3:return[new se(Math.round(A.left+r),Math.round(A.top)),new se(Math.round(A.left+r+a),Math.round(A.top)),new se(Math.round(A.left+r+a),Math.round(A.height+A.top)),new se(Math.round(A.left+r),Math.round(A.height+A.top))];case 1:return[new se(Math.round(A.left+r),Math.round(A.top+s)),new se(Math.round(A.left+r+a),Math.round(A.top+s)),new se(Math.round(A.left+r+a),Math.round(A.top+s+o)),new se(Math.round(A.left+r),Math.round(A.top+s+o))];default:return[new se(Math.round(i.left),Math.round(i.top)),new se(Math.round(i.left+i.width),Math.round(i.top)),new se(Math.round(i.left+i.width),Math.round(i.height+i.top)),new se(Math.round(i.left),Math.round(i.height+i.top))]}},NE="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",hu="Hidden Text",OE=function(){function n(e){this._data={},this._document=e}return n.prototype.parseMetrics=function(e,t){var A=this._document.createElement("div"),i=this._document.createElement("img"),r=this._document.createElement("span"),s=this._document.body;A.style.visibility="hidden",A.style.fontFamily=e,A.style.fontSize=t,A.style.margin="0",A.style.padding="0",A.style.whiteSpace="nowrap",s.appendChild(A),i.src=NE,i.width=1,i.height=1,i.style.margin="0",i.style.padding="0",i.style.verticalAlign="baseline",r.style.fontFamily=e,r.style.fontSize=t,r.style.margin="0",r.style.padding="0",r.appendChild(this._document.createTextNode(hu)),A.appendChild(r),A.appendChild(i);var a=i.offsetTop-r.offsetTop+2;A.removeChild(r),A.appendChild(this._document.createTextNode(hu)),A.style.lineHeight="normal",i.style.verticalAlign="super";var o=i.offsetTop-A.offsetTop+2;return s.removeChild(A),{baseline:a,middle:o}},n.prototype.getMetrics=function(e,t){var A=e+" "+t;return typeof this._data[A]>"u"&&(this._data[A]=this.parseMetrics(e,t)),this._data[A]},n}(),qf=function(){function n(e,t){this.context=e,this.options=t}return n}(),GE=1e4,VE=function(n){pA(e,n);function e(t,A){var i=n.call(this,t,A)||this;return i._activeEffects=[],i.canvas=A.canvas?A.canvas:document.createElement("canvas"),i.ctx=i.canvas.getContext("2d"),A.canvas||(i.canvas.width=Math.floor(A.width*A.scale),i.canvas.height=Math.floor(A.height*A.scale),i.canvas.style.width=A.width+"px",i.canvas.style.height=A.height+"px"),i.fontMetrics=new OE(document),i.ctx.scale(i.options.scale,i.options.scale),i.ctx.translate(-A.x,-A.y),i.ctx.textBaseline="bottom",i._activeEffects=[],i.context.logger.debug("Canvas renderer initialized ("+A.width+"x"+A.height+") with scale "+A.scale),i}return e.prototype.applyEffects=function(t){for(var A=this;this._activeEffects.length;)this.popEffect();t.forEach(function(i){return A.applyEffect(i)})},e.prototype.applyEffect=function(t){this.ctx.save(),FE(t)&&(this.ctx.globalAlpha=t.opacity),ME(t)&&(this.ctx.translate(t.offsetX,t.offsetY),this.ctx.transform(t.matrix[0],t.matrix[1],t.matrix[2],t.matrix[3],t.matrix[4],t.matrix[5]),this.ctx.translate(-t.offsetX,-t.offsetY)),Wf(t)&&(this.path(t.path),this.ctx.clip()),this._activeEffects.push(t)},e.prototype.popEffect=function(){this._activeEffects.pop(),this.ctx.restore()},e.prototype.renderStack=function(t){return Ht(this,void 0,void 0,function(){var A;return It(this,function(i){switch(i.label){case 0:return A=t.element.container.styles,A.isVisible()?[4,this.renderStackContent(t)]:[3,2];case 1:i.sent(),i.label=2;case 2:return[2]}})})},e.prototype.renderNode=function(t){return Ht(this,void 0,void 0,function(){return It(this,function(A){switch(A.label){case 0:if(Ct(t.container.flags,16))debugger;return t.container.styles.isVisible()?[4,this.renderNodeBackgroundAndBorders(t)]:[3,3];case 1:return A.sent(),[4,this.renderNodeContent(t)];case 2:A.sent(),A.label=3;case 3:return[2]}})})},e.prototype.renderTextWithLetterSpacing=function(t,A,i){var r=this;if(A===0)this.ctx.fillText(t.text,t.bounds.left,t.bounds.top+i);else{var s=Jl(t.text);s.reduce(function(a,o){return r.ctx.fillText(o,a,t.bounds.top+i),a+r.ctx.measureText(o).width},t.bounds.left)}},e.prototype.createFontStyle=function(t){var A=t.fontVariant.filter(function(s){return s==="normal"||s==="small-caps"}).join(""),i=XE(t.fontFamily).join(", "),r=Ir(t.fontSize)?""+t.fontSize.number+t.fontSize.unit:t.fontSize.number+"px";return[[t.fontStyle,A,t.fontWeight,r,i].join(" "),i,r]},e.prototype.renderTextNode=function(t,A){return Ht(this,void 0,void 0,function(){var i,r,s,a,o,l,c,h,u=this;return It(this,function(d){return i=this.createFontStyle(A),r=i[0],s=i[1],a=i[2],this.ctx.font=r,this.ctx.direction=A.direction===1?"rtl":"ltr",this.ctx.textAlign="left",this.ctx.textBaseline="alphabetic",o=this.fontMetrics.getMetrics(s,a),l=o.baseline,c=o.middle,h=A.paintOrder,t.textBounds.forEach(function(g){h.forEach(function(m){switch(m){case 0:u.ctx.fillStyle=yt(A.color),u.renderTextWithLetterSpacing(g,A.letterSpacing,l);var p=A.textShadow;p.length&&g.text.trim().length&&(p.slice(0).reverse().forEach(function(f){u.ctx.shadowColor=yt(f.color),u.ctx.shadowOffsetX=f.offsetX.number*u.options.scale,u.ctx.shadowOffsetY=f.offsetY.number*u.options.scale,u.ctx.shadowBlur=f.blur.number,u.renderTextWithLetterSpacing(g,A.letterSpacing,l)}),u.ctx.shadowColor="",u.ctx.shadowOffsetX=0,u.ctx.shadowOffsetY=0,u.ctx.shadowBlur=0),A.textDecorationLine.length&&(u.ctx.fillStyle=yt(A.textDecorationColor||A.color),A.textDecorationLine.forEach(function(f){switch(f){case 1:u.ctx.fillRect(g.bounds.left,Math.round(g.bounds.top+l),g.bounds.width,1);break;case 2:u.ctx.fillRect(g.bounds.left,Math.round(g.bounds.top),g.bounds.width,1);break;case 3:u.ctx.fillRect(g.bounds.left,Math.ceil(g.bounds.top+c),g.bounds.width,1);break}}));break;case 1:A.webkitTextStrokeWidth&&g.text.trim().length&&(u.ctx.strokeStyle=yt(A.webkitTextStrokeColor),u.ctx.lineWidth=A.webkitTextStrokeWidth,u.ctx.lineJoin=window.chrome?"miter":"round",u.ctx.strokeText(g.text,g.bounds.left,g.bounds.top+l)),u.ctx.strokeStyle="",u.ctx.lineWidth=0,u.ctx.lineJoin="miter";break}})}),[2]})})},e.prototype.renderReplacedElement=function(t,A,i){if(i&&t.intrinsicWidth>0&&t.intrinsicHeight>0){var r=qs(t),s=Zs(A);this.path(s),this.ctx.save(),this.ctx.clip(),this.ctx.drawImage(i,0,0,t.intrinsicWidth,t.intrinsicHeight,r.left,r.top,r.width,r.height),this.ctx.restore()}},e.prototype.renderNodeContent=function(t){return Ht(this,void 0,void 0,function(){var A,i,r,s,a,o,E,E,l,c,h,u,v,d,g,b,m,p,f,E,U,v,b;return It(this,function(y){switch(y.label){case 0:this.applyEffects(t.getEffects(4)),A=t.container,i=t.curves,r=A.styles,s=0,a=A.textNodes,y.label=1;case 1:return s<a.length?(o=a[s],[4,this.renderTextNode(o,r)]):[3,4];case 2:y.sent(),y.label=3;case 3:return s++,[3,1];case 4:if(!(A instanceof Ff))return[3,8];y.label=5;case 5:return y.trys.push([5,7,,8]),[4,this.context.cache.match(A.src)];case 6:return E=y.sent(),this.renderReplacedElement(A,i,E),[3,8];case 7:return y.sent(),this.context.logger.error("Error loading image "+A.src),[3,8];case 8:if(A instanceof bf&&this.renderReplacedElement(A,i,A.canvas),!(A instanceof Tf))return[3,12];y.label=9;case 9:return y.trys.push([9,11,,12]),[4,this.context.cache.match(A.svg)];case 10:return E=y.sent(),this.renderReplacedElement(A,i,E),[3,12];case 11:return y.sent(),this.context.logger.error("Error loading svg "+A.svg.substring(0,255)),[3,12];case 12:return A instanceof Rf&&A.tree?(l=new e(this.context,{scale:this.options.scale,backgroundColor:A.backgroundColor,x:0,y:0,width:A.width,height:A.height}),[4,l.render(A.tree)]):[3,14];case 13:c=y.sent(),A.width&&A.height&&this.ctx.drawImage(c,0,0,A.width,A.height,A.bounds.left,A.bounds.top,A.bounds.width,A.bounds.height),y.label=14;case 14:if(A instanceof Zl&&(h=Math.min(A.bounds.width,A.bounds.height),A.type===zs?A.checked&&(this.ctx.save(),this.path([new se(A.bounds.left+h*.39363,A.bounds.top+h*.79),new se(A.bounds.left+h*.16,A.bounds.top+h*.5549),new se(A.bounds.left+h*.27347,A.bounds.top+h*.44071),new se(A.bounds.left+h*.39694,A.bounds.top+h*.5649),new se(A.bounds.left+h*.72983,A.bounds.top+h*.23),new se(A.bounds.left+h*.84,A.bounds.top+h*.34085),new se(A.bounds.left+h*.39363,A.bounds.top+h*.79)]),this.ctx.fillStyle=yt($h),this.ctx.fill(),this.ctx.restore()):A.type===Ws&&A.checked&&(this.ctx.save(),this.ctx.beginPath(),this.ctx.arc(A.bounds.left+h/2,A.bounds.top+h/2,h/4,0,Math.PI*2,!0),this.ctx.fillStyle=yt($h),this.ctx.fill(),this.ctx.restore())),KE(A)&&A.value.length){switch(u=this.createFontStyle(r),v=u[0],d=u[1],g=this.fontMetrics.getMetrics(v,d).baseline,this.ctx.font=v,this.ctx.fillStyle=yt(r.color),this.ctx.textBaseline="alphabetic",this.ctx.textAlign=zE(A.styles.textAlign),b=qs(A),m=0,A.styles.textAlign){case 1:m+=b.width/2;break;case 2:m+=b.width;break}p=b.add(m,0,0,-b.height/2+1),this.ctx.save(),this.path([new se(b.left,b.top),new se(b.left+b.width,b.top),new se(b.left+b.width,b.top+b.height),new se(b.left,b.top+b.height)]),this.ctx.clip(),this.renderTextWithLetterSpacing(new hr(A.value,p),r.letterSpacing,g),this.ctx.restore(),this.ctx.textBaseline="alphabetic",this.ctx.textAlign="left"}if(!Ct(A.styles.display,2048))return[3,20];if(A.styles.listStyleImage===null)return[3,19];if(f=A.styles.listStyleImage,f.type!==0)return[3,18];E=void 0,U=f.url,y.label=15;case 15:return y.trys.push([15,17,,18]),[4,this.context.cache.match(U)];case 16:return E=y.sent(),this.ctx.drawImage(E,A.bounds.left-(E.width+10),A.bounds.top),[3,18];case 17:return y.sent(),this.context.logger.error("Error loading list-style-image "+U),[3,18];case 18:return[3,20];case 19:t.listValue&&A.styles.listStyleType!==-1&&(v=this.createFontStyle(r)[0],this.ctx.font=v,this.ctx.fillStyle=yt(r.color),this.ctx.textBaseline="middle",this.ctx.textAlign="right",b=new KA(A.bounds.left,A.bounds.top+st(A.styles.paddingTop,A.bounds.width),A.bounds.width,Rh(r.lineHeight,r.fontSize.number)/2+1),this.renderTextWithLetterSpacing(new hr(t.listValue,b),r.letterSpacing,Rh(r.lineHeight,r.fontSize.number)/2+2),this.ctx.textBaseline="bottom",this.ctx.textAlign="left"),y.label=20;case 20:return[2]}})})},e.prototype.renderStackContent=function(t){return Ht(this,void 0,void 0,function(){var A,i,f,r,s,f,a,o,f,l,c,f,h,u,f,d,g,f,m,p,f;return It(this,function(E){switch(E.label){case 0:if(Ct(t.element.container.flags,16))debugger;return[4,this.renderNodeBackgroundAndBorders(t.element)];case 1:E.sent(),A=0,i=t.negativeZIndex,E.label=2;case 2:return A<i.length?(f=i[A],[4,this.renderStack(f)]):[3,5];case 3:E.sent(),E.label=4;case 4:return A++,[3,2];case 5:return[4,this.renderNodeContent(t.element)];case 6:E.sent(),r=0,s=t.nonInlineLevel,E.label=7;case 7:return r<s.length?(f=s[r],[4,this.renderNode(f)]):[3,10];case 8:E.sent(),E.label=9;case 9:return r++,[3,7];case 10:a=0,o=t.nonPositionedFloats,E.label=11;case 11:return a<o.length?(f=o[a],[4,this.renderStack(f)]):[3,14];case 12:E.sent(),E.label=13;case 13:return a++,[3,11];case 14:l=0,c=t.nonPositionedInlineLevel,E.label=15;case 15:return l<c.length?(f=c[l],[4,this.renderStack(f)]):[3,18];case 16:E.sent(),E.label=17;case 17:return l++,[3,15];case 18:h=0,u=t.inlineLevel,E.label=19;case 19:return h<u.length?(f=u[h],[4,this.renderNode(f)]):[3,22];case 20:E.sent(),E.label=21;case 21:return h++,[3,19];case 22:d=0,g=t.zeroOrAutoZIndexOrTransformedOrOpacity,E.label=23;case 23:return d<g.length?(f=g[d],[4,this.renderStack(f)]):[3,26];case 24:E.sent(),E.label=25;case 25:return d++,[3,23];case 26:m=0,p=t.positiveZIndex,E.label=27;case 27:return m<p.length?(f=p[m],[4,this.renderStack(f)]):[3,30];case 28:E.sent(),E.label=29;case 29:return m++,[3,27];case 30:return[2]}})})},e.prototype.mask=function(t){this.ctx.beginPath(),this.ctx.moveTo(0,0),this.ctx.lineTo(this.canvas.width,0),this.ctx.lineTo(this.canvas.width,this.canvas.height),this.ctx.lineTo(0,this.canvas.height),this.ctx.lineTo(0,0),this.formatPath(t.slice(0).reverse()),this.ctx.closePath()},e.prototype.path=function(t){this.ctx.beginPath(),this.formatPath(t),this.ctx.closePath()},e.prototype.formatPath=function(t){var A=this;t.forEach(function(i,r){var s=tA(i)?i.start:i;r===0?A.ctx.moveTo(s.x,s.y):A.ctx.lineTo(s.x,s.y),tA(i)&&A.ctx.bezierCurveTo(i.startControl.x,i.startControl.y,i.endControl.x,i.endControl.y,i.end.x,i.end.y)})},e.prototype.renderRepeat=function(t,A,i,r){this.path(t),this.ctx.fillStyle=A,this.ctx.translate(i,r),this.ctx.fill(),this.ctx.translate(-i,-r)},e.prototype.resizeImage=function(t,A,i){var r;if(t.width===A&&t.height===i)return t;var s=(r=this.canvas.ownerDocument)!==null&&r!==void 0?r:document,a=s.createElement("canvas");a.width=Math.max(1,A),a.height=Math.max(1,i);var o=a.getContext("2d");return o.drawImage(t,0,0,t.width,t.height,0,0,A,i),a},e.prototype.renderBackgroundImage=function(t){return Ht(this,void 0,void 0,function(){var A,i,r,s,a,o;return It(this,function(l){switch(l.label){case 0:A=t.styles.backgroundImage.length-1,i=function(c){var h,u,d,_,K,X,D,k,F,g,_,K,X,D,k,m,p,f,E,U,v,b,y,S,F,C,_,M,G,D,k,Y,K,X,O,te,ie,ge,Se,He,z,$;return It(this,function(ue){switch(ue.label){case 0:if(c.type!==0)return[3,5];h=void 0,u=c.url,ue.label=1;case 1:return ue.trys.push([1,3,,4]),[4,r.context.cache.match(u)];case 2:return h=ue.sent(),[3,4];case 3:return ue.sent(),r.context.logger.error("Error loading background-image "+u),[3,4];case 4:return h&&(d=po(t,A,[h.width,h.height,h.width/h.height]),_=d[0],K=d[1],X=d[2],D=d[3],k=d[4],F=r.ctx.createPattern(r.resizeImage(h,D,k),"repeat"),r.renderRepeat(_,F,K,X)),[3,6];case 5:Mv(c)?(g=po(t,A,[null,null,null]),_=g[0],K=g[1],X=g[2],D=g[3],k=g[4],m=Ev(c.angle,D,k),p=m[0],f=m[1],E=m[2],U=m[3],v=m[4],b=document.createElement("canvas"),b.width=D,b.height=k,y=b.getContext("2d"),S=y.createLinearGradient(f,U,E,v),Ih(c.stops,p).forEach(function(Ae){return S.addColorStop(Ae.stop,yt(Ae.color))}),y.fillStyle=S,y.fillRect(0,0,D,k),D>0&&k>0&&(F=r.ctx.createPattern(b,"repeat"),r.renderRepeat(_,F,K,X))):Fv(c)&&(C=po(t,A,[null,null,null]),_=C[0],M=C[1],G=C[2],D=C[3],k=C[4],Y=c.position.length===0?[Wl]:c.position,K=st(Y[0],D),X=st(Y[Y.length-1],k),O=xv(c,K,X,D,k),te=O[0],ie=O[1],te>0&&ie>0&&(ge=r.ctx.createRadialGradient(M+K,G+X,0,M+K,G+X,te),Ih(c.stops,te*2).forEach(function(Ae){return ge.addColorStop(Ae.stop,yt(Ae.color))}),r.path(_),r.ctx.fillStyle=ge,te!==ie?(Se=t.bounds.left+.5*t.bounds.width,He=t.bounds.top+.5*t.bounds.height,z=ie/te,$=1/z,r.ctx.save(),r.ctx.translate(Se,He),r.ctx.transform(1,0,0,z,0,0),r.ctx.translate(-Se,-He),r.ctx.fillRect(M,$*(G-He)+He,D,k*$),r.ctx.restore()):r.ctx.fill())),ue.label=6;case 6:return A--,[2]}})},r=this,s=0,a=t.styles.backgroundImage.slice(0).reverse(),l.label=1;case 1:return s<a.length?(o=a[s],[5,i(o)]):[3,4];case 2:l.sent(),l.label=3;case 3:return s++,[3,1];case 4:return[2]}})})},e.prototype.renderSolidBorder=function(t,A,i){return Ht(this,void 0,void 0,function(){return It(this,function(r){return this.path(cu(i,A)),this.ctx.fillStyle=yt(t),this.ctx.fill(),[2]})})},e.prototype.renderDoubleBorder=function(t,A,i,r){return Ht(this,void 0,void 0,function(){var s,a;return It(this,function(o){switch(o.label){case 0:return A<3?[4,this.renderSolidBorder(t,i,r)]:[3,2];case 1:return o.sent(),[2];case 2:return s=QE(r,i),this.path(s),this.ctx.fillStyle=yt(t),this.ctx.fill(),a=IE(r,i),this.path(a),this.ctx.fill(),[2]}})})},e.prototype.renderNodeBackgroundAndBorders=function(t){return Ht(this,void 0,void 0,function(){var A,i,r,s,a,o,l,c,h=this;return It(this,function(u){switch(u.label){case 0:return this.applyEffects(t.getEffects(2)),A=t.container.styles,i=!fn(A.backgroundColor)||A.backgroundImage.length,r=[{style:A.borderTopStyle,color:A.borderTopColor,width:A.borderTopWidth},{style:A.borderRightStyle,color:A.borderRightColor,width:A.borderRightWidth},{style:A.borderBottomStyle,color:A.borderBottomColor,width:A.borderBottomWidth},{style:A.borderLeftStyle,color:A.borderLeftColor,width:A.borderLeftWidth}],s=kE(fi(A.backgroundClip,0),t.curves),i||A.boxShadow.length?(this.ctx.save(),this.path(s),this.ctx.clip(),fn(A.backgroundColor)||(this.ctx.fillStyle=yt(A.backgroundColor),this.ctx.fill()),[4,this.renderBackgroundImage(t.container)]):[3,2];case 1:u.sent(),this.ctx.restore(),A.boxShadow.slice(0).reverse().forEach(function(d){h.ctx.save();var g=Js(t.curves),m=d.inset?0:GE,p=bE(g,-m+(d.inset?1:-1)*d.spread.number,(d.inset?1:-1)*d.spread.number,d.spread.number*(d.inset?-2:2),d.spread.number*(d.inset?-2:2));d.inset?(h.path(g),h.ctx.clip(),h.mask(p)):(h.mask(g),h.ctx.clip(),h.path(p)),h.ctx.shadowOffsetX=d.offsetX.number+m,h.ctx.shadowOffsetY=d.offsetY.number,h.ctx.shadowColor=yt(d.color),h.ctx.shadowBlur=d.blur.number,h.ctx.fillStyle=d.inset?yt(d.color):"rgba(0,0,0,1)",h.ctx.fill(),h.ctx.restore()}),u.label=2;case 2:a=0,o=0,l=r,u.label=3;case 3:return o<l.length?(c=l[o],c.style!==0&&!fn(c.color)&&c.width>0?c.style!==2?[3,5]:[4,this.renderDashedDottedBorder(c.color,c.width,a,t.curves,2)]:[3,11]):[3,13];case 4:return u.sent(),[3,11];case 5:return c.style!==3?[3,7]:[4,this.renderDashedDottedBorder(c.color,c.width,a,t.curves,3)];case 6:return u.sent(),[3,11];case 7:return c.style!==4?[3,9]:[4,this.renderDoubleBorder(c.color,c.width,a,t.curves)];case 8:return u.sent(),[3,11];case 9:return[4,this.renderSolidBorder(c.color,a,t.curves)];case 10:u.sent(),u.label=11;case 11:a++,u.label=12;case 12:return o++,[3,3];case 13:return[2]}})})},e.prototype.renderDashedDottedBorder=function(t,A,i,r,s){return Ht(this,void 0,void 0,function(){var a,o,l,c,h,u,d,g,m,p,f,E,U,v,b,y,b,y;return It(this,function(S){return this.ctx.save(),a=LE(r,i),o=cu(r,i),s===2&&(this.path(o),this.ctx.clip()),tA(o[0])?(l=o[0].start.x,c=o[0].start.y):(l=o[0].x,c=o[0].y),tA(o[1])?(h=o[1].end.x,u=o[1].end.y):(h=o[1].x,u=o[1].y),i===0||i===2?d=Math.abs(l-h):d=Math.abs(c-u),this.ctx.beginPath(),s===3?this.formatPath(a):this.formatPath(o.slice(0,2)),g=A<3?A*3:A*2,m=A<3?A*2:A,s===3&&(g=A,m=A),p=!0,d<=g*2?p=!1:d<=g*2+m?(f=d/(2*g+m),g*=f,m*=f):(E=Math.floor((d+m)/(g+m)),U=(d-E*g)/(E-1),v=(d-(E+1)*g)/E,m=v<=0||Math.abs(m-U)<Math.abs(m-v)?U:v),p&&(s===3?this.ctx.setLineDash([0,g+m]):this.ctx.setLineDash([g,m])),s===3?(this.ctx.lineCap="round",this.ctx.lineWidth=A):this.ctx.lineWidth=A*2+1.1,this.ctx.strokeStyle=yt(t),this.ctx.stroke(),this.ctx.setLineDash([]),s===2&&(tA(o[0])&&(b=o[3],y=o[0],this.ctx.beginPath(),this.formatPath([new se(b.end.x,b.end.y),new se(y.start.x,y.start.y)]),this.ctx.stroke()),tA(o[1])&&(b=o[1],y=o[2],this.ctx.beginPath(),this.formatPath([new se(b.end.x,b.end.y),new se(y.start.x,y.start.y)]),this.ctx.stroke())),this.ctx.restore(),[2]})})},e.prototype.render=function(t){return Ht(this,void 0,void 0,function(){var A;return It(this,function(i){switch(i.label){case 0:return this.options.backgroundColor&&(this.ctx.fillStyle=yt(this.options.backgroundColor),this.ctx.fillRect(this.options.x,this.options.y,this.options.width,this.options.height)),A=TE(t),[4,this.renderStack(A)];case 1:return i.sent(),this.applyEffects([]),[2,this.canvas]}})})},e}(qf),KE=function(n){return n instanceof Lf||n instanceof If?!0:n instanceof Zl&&n.type!==Ws&&n.type!==zs},kE=function(n,e){switch(n){case 0:return Js(e);case 2:return UE(e);case 1:default:return Zs(e)}},zE=function(n){switch(n){case 1:return"center";case 2:return"right";case 0:default:return"left"}},WE=["-apple-system","system-ui"],XE=function(n){return/iPhone OS 15_(0|1)/.test(window.navigator.userAgent)?n.filter(function(e){return WE.indexOf(e)===-1}):n},YE=function(n){pA(e,n);function e(t,A){var i=n.call(this,t,A)||this;return i.canvas=A.canvas?A.canvas:document.createElement("canvas"),i.ctx=i.canvas.getContext("2d"),i.options=A,i.canvas.width=Math.floor(A.width*A.scale),i.canvas.height=Math.floor(A.height*A.scale),i.canvas.style.width=A.width+"px",i.canvas.style.height=A.height+"px",i.ctx.scale(i.options.scale,i.options.scale),i.ctx.translate(-A.x,-A.y),i.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized ("+A.width+"x"+A.height+" at "+A.x+","+A.y+") with scale "+A.scale),i}return e.prototype.render=function(t){return Ht(this,void 0,void 0,function(){var A,i;return It(this,function(r){switch(r.label){case 0:return A=yl(this.options.width*this.options.scale,this.options.height*this.options.scale,this.options.scale,this.options.scale,t),[4,JE(A)];case 1:return i=r.sent(),this.options.backgroundColor&&(this.ctx.fillStyle=yt(this.options.backgroundColor),this.ctx.fillRect(0,0,this.options.width*this.options.scale,this.options.height*this.options.scale)),this.ctx.drawImage(i,-this.options.x*this.options.scale,-this.options.y*this.options.scale),[2,this.canvas]}})})},e}(qf),JE=function(n){return new Promise(function(e,t){var A=new Image;A.onload=function(){e(A)},A.onerror=t,A.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(n))})},ZE=function(){function n(e){var t=e.id,A=e.enabled;this.id=t,this.enabled=A,this.start=Date.now()}return n.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.enabled&&(typeof window<"u"&&window.console&&typeof console.debug=="function"?console.debug.apply(console,ns([this.id,this.getTime()+"ms"],e)):this.info.apply(this,e))},n.prototype.getTime=function(){return Date.now()-this.start},n.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.enabled&&typeof window<"u"&&window.console&&typeof console.info=="function"&&console.info.apply(console,ns([this.id,this.getTime()+"ms"],e))},n.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.enabled&&(typeof window<"u"&&window.console&&typeof console.warn=="function"?console.warn.apply(console,ns([this.id,this.getTime()+"ms"],e)):this.info.apply(this,e))},n.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.enabled&&(typeof window<"u"&&window.console&&typeof console.error=="function"?console.error.apply(console,ns([this.id,this.getTime()+"ms"],e)):this.info.apply(this,e))},n.instances={},n}(),qE=function(){function n(e,t){var A;this.windowBounds=t,this.instanceName="#"+n.instanceCount++,this.logger=new ZE({id:this.instanceName,enabled:e.logging}),this.cache=(A=e.cache)!==null&&A!==void 0?A:new mE(this,e)}return n.instanceCount=1,n}(),$f=function(n,e){return e===void 0&&(e={}),$E(n,e)};typeof window<"u"&&zf.setContext(window);var $E=function(n,e){return Ht(void 0,void 0,void 0,function(){var t,A,i,r,s,a,o,l,c,h,u,d,g,m,p,f,E,U,v,b,S,y,S,F,C,_,M,G,D,k,Y,K,X,O,te,ie,ge,Se,He,z;return It(this,function($){switch($.label){case 0:if(!n||typeof n!="object")return[2,Promise.reject("Invalid element provided as first argument")];if(t=n.ownerDocument,!t)throw new Error("Element is not attached to a Document");if(A=t.defaultView,!A)throw new Error("Document is not attached to a Window");return i={allowTaint:(F=e.allowTaint)!==null&&F!==void 0?F:!1,imageTimeout:(C=e.imageTimeout)!==null&&C!==void 0?C:15e3,proxy:e.proxy,useCORS:(_=e.useCORS)!==null&&_!==void 0?_:!1},r=hl({logging:(M=e.logging)!==null&&M!==void 0?M:!0,cache:e.cache},i),s={windowWidth:(G=e.windowWidth)!==null&&G!==void 0?G:A.innerWidth,windowHeight:(D=e.windowHeight)!==null&&D!==void 0?D:A.innerHeight,scrollX:(k=e.scrollX)!==null&&k!==void 0?k:A.pageXOffset,scrollY:(Y=e.scrollY)!==null&&Y!==void 0?Y:A.pageYOffset},a=new KA(s.scrollX,s.scrollY,s.windowWidth,s.windowHeight),o=new qE(r,a),l=(K=e.foreignObjectRendering)!==null&&K!==void 0?K:!1,c={allowTaint:(X=e.allowTaint)!==null&&X!==void 0?X:!1,onclone:e.onclone,ignoreElements:e.ignoreElements,inlineImages:l,copyStyles:l},o.logger.debug("Starting document clone with size "+a.width+"x"+a.height+" scrolled to "+-a.left+","+-a.top),h=new au(o,n,c),u=h.clonedReferenceElement,u?[4,h.toIFrame(t,a)]:[2,Promise.reject("Unable to find element in cloned iframe")];case 1:return d=$.sent(),g=ql(u)||eE(u)?b1(u.ownerDocument):ra(o,u),m=g.width,p=g.height,f=g.left,E=g.top,U=jE(o,u,e.backgroundColor),v={canvas:e.canvas,backgroundColor:U,scale:(te=(O=e.scale)!==null&&O!==void 0?O:A.devicePixelRatio)!==null&&te!==void 0?te:1,x:((ie=e.x)!==null&&ie!==void 0?ie:0)+f,y:((ge=e.y)!==null&&ge!==void 0?ge:0)+E,width:(Se=e.width)!==null&&Se!==void 0?Se:Math.ceil(m),height:(He=e.height)!==null&&He!==void 0?He:Math.ceil(p)},l?(o.logger.debug("Document cloned, using foreign object rendering"),S=new YE(o,v),[4,S.render(u)]):[3,3];case 2:return b=$.sent(),[3,5];case 3:return o.logger.debug("Document cloned, element located at "+f+","+E+" with size "+m+"x"+p+" using computed rendering"),o.logger.debug("Starting DOM parsing"),y=Hf(o,u),U===y.styles.backgroundColor&&(y.styles.backgroundColor=OA.TRANSPARENT),o.logger.debug("Starting renderer for element at "+v.x+","+v.y+" with size "+v.width+"x"+v.height),S=new VE(o,v),[4,S.render(y)];case 4:b=$.sent(),$.label=5;case 5:return(!((z=e.removeContainer)!==null&&z!==void 0)||z)&&(au.destroy(d)||o.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")),o.logger.debug("Finished rendering"),[2,b]}})})},jE=function(n,e,t){var A=e.ownerDocument,i=A.documentElement?lr(n,getComputedStyle(A.documentElement).backgroundColor):OA.TRANSPARENT,r=A.body?lr(n,getComputedStyle(A.body).backgroundColor):OA.TRANSPARENT,s=typeof t=="string"?lr(n,t):t===null?OA.TRANSPARENT:4294967295;return e===A.documentElement?fn(i)?fn(r)?s:r:i:s},fr=(n=>(n.GLOBAL="Global",n.NORTHERN_HEMISSPHERE="Northern HS",n.SOUTHERN_HEMISSPHERE="Southern HS",n))(fr||{}),ze=(n=>(n.SETTINGS_CHANGED="settings-changed",n.CHANGE_THEME="change-theme",n.THEME_CHANGED="theme-changed",n.SHOW_IMPRINT="show-imprint",n.HIDE_IMPRINT="hide-imprint",n.CREATE_HELIX="create-helix",n))(ze||{});(n=>{function e(t){const A=new Event(t.toString(),{bubbles:!0});document.body.dispatchEvent(A)}n.dispatchEvent=e})(ze||(ze={}));class $l{constructor(e,t){let A=!1;new MutationObserver(r=>{A&&r.forEach((s,a)=>t(s,a))}).observe(e,{attributes:!0,attributeFilter:["class"]}),A=!0}}const e2=async()=>await F1(()=>import("./imprint-gen-BVWwnDn1.js"),[]),t2='<hr><p style="opacity: 1.0;">Dieses Impressum wurde erstellt durch <a href="https://www.impressum-generator.de" rel="nofollow">impressum-generator.de</a>.</p>',A2=`<hr><div class="center" width=100%>
<button id="hide-imprint" onclick="document.body.dispatchEvent(new Event('${ze.HIDE_IMPRINT.toString()}', { bubbles: true }))">Close</button></div>`;class n2{constructor(){window.addEventListener("resize",()=>this.redraw()),new $l(document.body,()=>this.redraw()),document.body.addEventListener(ze.SHOW_IMPRINT.toString(),e=>this.show()),document.body.addEventListener(ze.HIDE_IMPRINT.toString(),e=>this.hide()),document.body.addEventListener("keydown",e=>{(e.key==="Esc"||e.key==="Escape")&&this.hide()})}redraw(){this.div!==void 0&&(this.hide(),this.show())}async isAvailable(){const e=await e2();return this.decryptedAES=e.decryptedAES,this.decryptedAES()!==void 0}show(){if(this.div===void 0){this.div=document.createElement("div");const e=this.div;e.classList.add("imprint"),e.innerHTML=this.decryptedAES(),document.body.appendChild(e);const t=window.getComputedStyle(document.body),A=e.scrollWidth,i=e.scrollHeight,r=t.getPropertyValue("background-color");$f(e,{backgroundColor:r,windowWidth:A,windowHeight:i}).then(s=>{s.classList.add("padding"),e.innerHTML="",e.appendChild(s);const a=document.createElement("p");a.classList.add("padding"),a.innerHTML=t2+A2,e.appendChild(a)})}}hide(){this.div!==void 0&&(document.body.removeChild(this.div),this.div=void 0)}}const uu="toggle",i2="div",go="clicked",r2="-div",mo="-icon",fu="show";var Ei,xi,Cr;class jl{constructor(e){ct(this,Ei);ct(this,xi,[]);ct(this,Cr);At(this,Cr,e.event),At(this,xi,e.icons);const t=document.createElement(i2);t.classList.add(`${uu}${r2}`,e.classToken);for(const i of e.icons){const r=this.createSVGElement(i,e.classToken);t.innerHTML+=r}(e.container||document.body).appendChild(t),t.addEventListener("click",()=>t.classList.add(go)),t.addEventListener("animationend",()=>{if(t.classList.contains(go)){t.classList.remove(go);const i=new Event(e.event,{bubbles:!0});t.dispatchEvent(i)}}),At(this,Ei,t)}show(e){var t;(t=this.icon(e))==null||t.classList.add(fu)}toggle(){var e;for(let t=0;t<me(this,xi).length;t++)(e=this.icon(t))==null||e.classList.toggle(fu)}icon(e){return me(this,Ei).querySelector(`#${me(this,xi)[e].id}${mo}`)}createSVGElement(e,t){const A=document.createElement("template");A.innerHTML=e.svg;const i=A.content.firstElementChild;return i.id=`${e.id}${mo}`,i.classList.add(`${uu}${mo}`,t),i.outerHTML}addOnClickListener(e){me(this,Ei).addEventListener(me(this,Cr),e)}}Ei=new WeakMap,xi=new WeakMap,Cr=new WeakMap;const s2=`<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512">
    <path d="M12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z"/>
    <path d="M21.294,13.9l-.444-.256a9.1,9.1,0,0,0,0-3.29l.444-.256a3,3,0,1,0-3-5.2l-.445.257A8.977,8.977,0,0,0,15,3.513V3A3,3,0,0,0,9,3v.513A8.977,8.977,0,0,0,6.152,5.159L5.705,4.9a3,3,0,0,0-3,5.2l.444.256a9.1,9.1,0,0,0,0,3.29l-.444.256a3,3,0,1,0,3,5.2l.445-.257A8.977,8.977,0,0,0,9,20.487V21a3,3,0,0,0,6,0v-.513a8.977,8.977,0,0,0,2.848-1.646l.447.258a3,3,0,0,0,3-5.2Zm-2.548-3.776a7.048,7.048,0,0,1,0,3.75,1,1,0,0,0,.464,1.133l1.084.626a1,1,0,0,1-1,1.733l-1.086-.628a1,1,0,0,0-1.215.165,6.984,6.984,0,0,1-3.243,1.875,1,1,0,0,0-.751.969V21a1,1,0,0,1-2,0V19.748a1,1,0,0,0-.751-.969A6.984,6.984,0,0,1,7.006,16.9a1,1,0,0,0-1.215-.165l-1.084.627a1,1,0,1,1-1-1.732l1.084-.626a1,1,0,0,0,.464-1.133,7.048,7.048,0,0,1,0-3.75A1,1,0,0,0,4.79,8.992L3.706,8.366a1,1,0,0,1,1-1.733l1.086.628A1,1,0,0,0,7.006,7.1a6.984,6.984,0,0,1,3.243-1.875A1,1,0,0,0,11,4.252V3a1,1,0,0,1,2,0V4.252a1,1,0,0,0,.751.969A6.984,6.984,0,0,1,16.994,7.1a1,1,0,0,0,1.215.165l1.084-.627a1,1,0,1,1,1,1.732l-1.084.626A1,1,0,0,0,18.746,10.125Z"/>
</svg>
`,a2={id:"open",svg:s2},o2=`<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512">
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
</svg>`,l2={id:"close",svg:o2};var rn,Ln,sn;class c2{constructor(e){ct(this,rn);ct(this,Ln);ct(this,sn);At(this,rn,!0),At(this,Ln,new jl({container:document.querySelector(".container-div"),icons:[a2,l2],classToken:"settings",event:ze.SETTINGS_CHANGED})),At(this,sn,e),me(this,sn).hide(),me(this,Ln).show(me(this,rn)?0:1),me(this,Ln).addOnClickListener(()=>this.guiShowHide())}guiShowHide(){me(this,rn)?(this.toggle(),me(this,sn).show(),me(this,sn).open()):me(this,sn).$title.click()}toggle(){At(this,rn,!me(this,rn)),me(this,Ln).toggle()}}rn=new WeakMap,Ln=new WeakMap,sn=new WeakMap;const h2=`Land-Ocean: Global Means
Year,Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec,J-D,D-N,DJF,MAM,JJA,SON
1880,-.20,-.26,-.09,-.17,-.10,-.22,-.20,-.10,-.15,-.23,-.22,-.19,-.18,***,***,-.12,-.17,-.20
1881,-.20,-.15,.02,.04,.07,-.19,.01,-.04,-.16,-.22,-.19,-.07,-.09,-.10,-.18,.04,-.07,-.19
1882,.16,.14,.04,-.16,-.14,-.22,-.16,-.07,-.14,-.24,-.17,-.36,-.11,-.09,.07,-.08,-.15,-.18
1883,-.29,-.37,-.12,-.18,-.18,-.07,-.07,-.14,-.22,-.12,-.24,-.11,-.18,-.20,-.34,-.16,-.10,-.19
1884,-.13,-.08,-.37,-.40,-.34,-.35,-.31,-.28,-.27,-.25,-.34,-.31,-.29,-.27,-.11,-.37,-.31,-.29
1885,-.58,-.34,-.27,-.42,-.45,-.44,-.34,-.31,-.28,-.24,-.24,-.11,-.33,-.35,-.41,-.38,-.36,-.25
1886,-.44,-.51,-.43,-.28,-.24,-.34,-.18,-.31,-.24,-.28,-.28,-.26,-.32,-.30,-.35,-.32,-.28,-.27
1887,-.72,-.57,-.36,-.35,-.31,-.25,-.26,-.36,-.26,-.36,-.27,-.33,-.37,-.36,-.52,-.34,-.29,-.30
1888,-.34,-.36,-.42,-.21,-.22,-.17,-.10,-.16,-.12,.01,.02,-.04,-.18,-.20,-.35,-.28,-.14,-.03
1889,-.09,.16,.06,.09,-.01,-.10,-.08,-.20,-.24,-.26,-.34,-.29,-.11,-.09,.01,.05,-.13,-.28
1890,-.42,-.45,-.40,-.30,-.40,-.25,-.28,-.39,-.37,-.25,-.44,-.32,-.36,-.35,-.39,-.37,-.31,-.35
1891,-.34,-.47,-.19,-.28,-.17,-.21,-.18,-.18,-.16,-.22,-.32,-.04,-.23,-.25,-.38,-.21,-.19,-.23
1892,-.30,-.12,-.40,-.34,-.23,-.22,-.32,-.27,-.17,-.14,-.43,-.39,-.28,-.25,-.15,-.32,-.27,-.25
1893,-.81,-.57,-.23,-.28,-.34,-.26,-.14,-.26,-.23,-.19,-.19,-.32,-.32,-.32,-.59,-.28,-.22,-.20
1894,-.53,-.29,-.24,-.45,-.31,-.41,-.24,-.24,-.28,-.23,-.26,-.22,-.31,-.32,-.38,-.33,-.30,-.26
1895,-.42,-.43,-.33,-.22,-.28,-.21,-.17,-.18,-.13,-.11,-.18,-.15,-.23,-.24,-.36,-.28,-.19,-.14
1896,-.23,-.13,-.27,-.31,-.16,-.11,-.03,-.06,-.08,.05,-.05,-.05,-.12,-.13,-.17,-.25,-.07,-.02
1897,-.16,-.17,-.14,-.03,-.02,-.12,-.03,-.10,-.09,-.13,-.18,-.21,-.12,-.10,-.13,-.06,-.08,-.14
1898,-.03,-.31,-.52,-.31,-.31,-.20,-.23,-.27,-.22,-.35,-.39,-.24,-.28,-.28,-.18,-.38,-.23,-.32
1899,-.17,-.39,-.37,-.21,-.23,-.32,-.16,-.09,-.05,-.05,.12,-.27,-.18,-.18,-.27,-.27,-.19,.01
1900,-.36,-.06,.00,-.09,-.09,-.10,-.13,-.09,-.06,.09,-.07,-.07,-.09,-.10,-.23,-.06,-.11,-.01
1901,-.22,-.11,.05,-.03,-.15,-.12,-.15,-.21,-.23,-.30,-.17,-.27,-.16,-.14,-.14,-.04,-.16,-.23
1902,-.16,-.09,-.27,-.28,-.33,-.31,-.28,-.30,-.29,-.30,-.37,-.42,-.29,-.27,-.18,-.29,-.30,-.32
1903,-.25,-.06,-.24,-.42,-.40,-.43,-.35,-.46,-.50,-.47,-.42,-.51,-.38,-.37,-.24,-.35,-.41,-.46
1904,-.63,-.59,-.51,-.51,-.52,-.49,-.51,-.49,-.56,-.40,-.18,-.34,-.48,-.49,-.58,-.51,-.50,-.38
1905,-.36,-.60,-.22,-.34,-.30,-.29,-.27,-.21,-.19,-.26,-.08,-.13,-.27,-.29,-.43,-.29,-.25,-.18
1906,-.28,-.29,-.18,-.05,-.26,-.19,-.23,-.20,-.29,-.21,-.38,-.15,-.23,-.22,-.23,-.16,-.21,-.29
1907,-.43,-.50,-.27,-.37,-.47,-.42,-.35,-.34,-.35,-.23,-.47,-.47,-.39,-.36,-.36,-.37,-.37,-.35
1908,-.45,-.33,-.56,-.44,-.37,-.38,-.35,-.46,-.36,-.44,-.52,-.49,-.43,-.43,-.42,-.46,-.40,-.44
1909,-.73,-.46,-.54,-.59,-.55,-.52,-.45,-.34,-.39,-.40,-.32,-.56,-.49,-.48,-.56,-.56,-.44,-.37
1910,-.43,-.41,-.51,-.43,-.34,-.39,-.34,-.37,-.39,-.41,-.58,-.68,-.44,-.43,-.47,-.42,-.36,-.46
1911,-.63,-.58,-.61,-.54,-.52,-.51,-.42,-.44,-.41,-.27,-.22,-.21,-.45,-.49,-.63,-.56,-.46,-.30
1912,-.25,-.14,-.38,-.18,-.21,-.24,-.43,-.54,-.58,-.58,-.39,-.43,-.36,-.34,-.20,-.26,-.40,-.52
1913,-.41,-.45,-.43,-.40,-.44,-.45,-.36,-.34,-.35,-.33,-.20,-.03,-.35,-.38,-.43,-.42,-.39,-.29
1914,.04,-.10,-.24,-.30,-.21,-.26,-.23,-.16,-.17,-.04,-.16,-.04,-.15,-.15,-.03,-.25,-.22,-.12
1915,-.21,-.04,-.10,.06,-.06,-.22,-.13,-.23,-.20,-.25,-.13,-.21,-.14,-.13,-.10,-.03,-.19,-.19
1916,-.13,-.15,-.29,-.31,-.35,-.49,-.37,-.28,-.36,-.34,-.46,-.82,-.36,-.31,-.16,-.32,-.38,-.39
1917,-.57,-.63,-.63,-.55,-.55,-.44,-.25,-.22,-.23,-.44,-.34,-.68,-.46,-.47,-.67,-.58,-.30,-.34
1918,-.48,-.34,-.25,-.44,-.43,-.37,-.32,-.32,-.17,-.06,-.12,-.29,-.30,-.33,-.50,-.37,-.33,-.12
1919,-.20,-.23,-.21,-.13,-.28,-.36,-.29,-.33,-.25,-.20,-.42,-.42,-.28,-.27,-.24,-.21,-.33,-.29
1920,-.25,-.27,-.12,-.24,-.27,-.35,-.30,-.26,-.22,-.26,-.27,-.47,-.27,-.27,-.31,-.21,-.30,-.25
1921,-.05,-.18,-.23,-.30,-.30,-.27,-.15,-.27,-.19,-.04,-.15,-.18,-.19,-.21,-.23,-.28,-.23,-.13
1922,-.34,-.45,-.15,-.23,-.33,-.30,-.27,-.33,-.35,-.32,-.14,-.20,-.28,-.28,-.32,-.24,-.30,-.27
1923,-.27,-.39,-.34,-.41,-.34,-.29,-.31,-.33,-.31,-.14,-.03,-.04,-.27,-.28,-.29,-.36,-.31,-.16
1924,-.22,-.23,-.08,-.30,-.18,-.26,-.29,-.36,-.32,-.35,-.20,-.43,-.27,-.24,-.16,-.19,-.30,-.29
1925,-.37,-.39,-.27,-.25,-.29,-.33,-.27,-.21,-.20,-.18,.05,.06,-.22,-.26,-.40,-.27,-.27,-.11
1926,.21,.03,.12,-.13,-.23,-.26,-.27,-.13,-.14,-.11,-.06,-.29,-.11,-.08,.10,-.08,-.22,-.10
1927,-.26,-.17,-.38,-.30,-.25,-.27,-.18,-.24,-.13,.00,-.05,-.33,-.21,-.21,-.24,-.31,-.23,-.06
1928,-.02,-.09,-.25,-.28,-.30,-.38,-.19,-.22,-.21,-.19,-.10,-.16,-.20,-.21,-.15,-.27,-.26,-.17
1929,-.44,-.58,-.32,-.41,-.37,-.43,-.36,-.32,-.25,-.14,-.11,-.54,-.36,-.32,-.39,-.37,-.37,-.17
1930,-.30,-.26,-.10,-.24,-.23,-.21,-.20,-.14,-.15,-.11,.18,-.05,-.15,-.19,-.37,-.19,-.19,-.03
1931,-.10,-.20,-.10,-.22,-.19,-.07,-.03,-.03,-.06,.06,-.05,-.05,-.09,-.09,-.12,-.17,-.04,-.02
1932,.16,-.16,-.18,-.05,-.17,-.28,-.24,-.21,-.10,-.08,-.26,-.26,-.15,-.13,-.02,-.13,-.24,-.15
1933,-.23,-.29,-.29,-.24,-.28,-.33,-.20,-.23,-.29,-.24,-.30,-.44,-.28,-.26,-.26,-.27,-.25,-.27
1934,-.20,-.02,-.28,-.30,-.09,-.14,-.10,-.11,-.15,-.06,.04,-.02,-.12,-.15,-.22,-.22,-.12,-.05
1935,-.34,.15,-.13,-.36,-.28,-.26,-.21,-.21,-.20,-.05,-.25,-.17,-.19,-.18,-.07,-.26,-.23,-.17
1936,-.27,-.37,-.20,-.19,-.15,-.21,-.09,-.13,-.09,-.02,.02,-.01,-.14,-.16,-.27,-.18,-.14,-.03
1937,-.07,.03,-.20,-.15,-.05,-.04,-.03,.02,.09,.09,.08,-.07,-.03,-.02,-.02,-.14,-.02,.09
1938,.08,.04,.10,.07,-.09,-.17,-.09,-.05,.01,.15,.08,-.12,.00,.00,.02,.02,-.10,.08
1939,-.05,-.06,-.17,-.10,-.04,-.07,-.05,-.06,-.07,-.04,.07,.43,-.02,-.06,-.08,-.10,-.06,-.01
1940,.00,.08,.09,.17,.11,.12,.13,.07,.15,.11,.16,.31,.13,.13,.17,.13,.10,.14
1941,.18,.31,.10,.16,.17,.13,.22,.15,.02,.35,.23,.22,.19,.19,.27,.14,.17,.20
1942,.29,.02,.06,.10,.11,.05,.01,-.04,-.03,.02,.09,.12,.07,.08,.18,.09,.01,.03
1943,-.01,.17,-.03,.11,.07,-.05,.09,.01,.05,.23,.20,.24,.09,.08,.10,.05,.02,.16
1944,.36,.24,.26,.20,.19,.16,.18,.18,.28,.26,.11,.04,.20,.22,.28,.22,.17,.22
1945,.10,.01,.06,.19,.06,.01,.04,.26,.20,.18,.07,-.07,.09,.10,.05,.11,.10,.15
1946,.15,.03,.01,.06,-.07,-.21,-.12,-.20,-.08,-.08,-.05,-.31,-.07,-.05,.04,.00,-.18,-.07
1947,-.06,-.08,.07,.06,-.02,-.02,-.04,-.07,-.12,.07,.02,-.13,-.03,-.04,-.15,.04,-.04,-.01
1948,.06,-.14,-.24,-.12,-.01,-.05,-.11,-.12,-.14,-.05,-.12,-.23,-.11,-.10,-.07,-.12,-.09,-.11
1949,.07,-.14,-.02,-.11,-.10,-.27,-.13,-.13,-.14,-.06,-.10,-.18,-.11,-.11,-.10,-.08,-.17,-.10
1950,-.26,-.27,-.08,-.21,-.11,-.05,-.08,-.16,-.11,-.20,-.34,-.22,-.17,-.17,-.24,-.13,-.10,-.22
1951,-.34,-.41,-.20,-.14,.00,-.06,-.01,.06,.05,.08,-.01,.16,-.07,-.10,-.32,-.12,.00,.04
1952,.11,.11,-.08,.03,-.03,-.03,.04,.05,.07,.00,-.13,-.02,.01,.03,.13,-.02,.02,-.02
1953,.07,.15,.11,.20,.12,.12,.01,.05,.05,.08,-.03,.05,.08,.08,.07,.14,.06,.03
1954,-.24,-.10,-.15,-.14,-.20,-.18,-.19,-.17,-.10,-.02,.08,-.18,-.13,-.11,-.10,-.16,-.18,-.01
1955,.13,-.16,-.32,-.22,-.20,-.13,-.11,.02,-.11,-.05,-.25,-.28,-.14,-.13,-.07,-.25,-.07,-.14
1956,-.12,-.24,-.21,-.27,-.29,-.15,-.09,-.25,-.19,-.23,-.15,-.06,-.19,-.21,-.21,-.26,-.16,-.19
1957,-.09,-.03,-.05,.00,.09,.15,.02,.15,.09,.01,.08,.15,.05,.03,-.06,.01,.11,.06
1958,.39,.22,.09,.01,.06,-.09,.05,-.05,-.03,.04,.02,.01,.06,.07,.25,.05,-.03,.01
1959,.08,.07,.18,.16,.04,.03,.03,-.01,-.06,-.07,-.08,.00,.03,.03,.05,.13,.02,-.07
1960,.00,.13,-.35,-.15,-.08,-.04,-.04,.02,.07,.06,-.11,.19,-.02,-.04,.04,-.19,-.02,.01
1961,.07,.19,.09,.13,.12,.12,.01,.01,.08,.00,.03,-.16,.06,.09,.15,.12,.04,.04
1962,.05,.15,.10,.05,-.06,.03,.02,-.01,.00,.01,.06,-.03,.03,.02,.01,.03,.01,.02
1963,-.03,.18,-.14,-.07,-.06,.05,.06,.22,.17,.14,.15,-.03,.05,.05,.04,-.09,.11,.16
1964,-.09,-.10,-.21,-.32,-.25,-.04,-.04,-.22,-.29,-.31,-.21,-.29,-.20,-.18,-.07,-.26,-.10,-.27
1965,-.08,-.17,-.13,-.19,-.12,-.08,-.13,-.04,-.15,-.05,-.06,-.08,-.11,-.13,-.18,-.14,-.09,-.09
1966,-.19,-.04,.04,-.13,-.12,.01,.08,-.09,-.03,-.17,-.01,-.03,-.06,-.06,-.10,-.07,.00,-.07
1967,-.08,-.21,.05,-.05,.12,-.08,.02,.01,-.06,.09,-.05,-.05,-.02,-.02,-.10,.04,-.01,-.01
1968,-.26,-.14,.20,-.06,-.14,-.09,-.13,-.09,-.19,.09,-.05,-.15,-.08,-.08,-.15,.00,-.10,-.05
1969,-.11,-.18,.00,.17,.18,.03,-.05,.04,.08,.09,.12,.24,.05,.02,-.14,.12,.01,.10
1970,.08,.22,.06,.05,-.04,-.03,.02,-.10,.12,.03,.02,-.12,.03,.06,.18,.02,-.04,.06
1971,-.02,-.15,-.18,-.07,-.05,-.16,-.08,-.01,-.05,-.04,-.07,-.08,-.08,-.08,-.10,-.10,-.08,-.06
1972,-.23,-.18,.02,.00,-.03,.04,.01,.16,.02,.08,.02,.18,.01,-.01,-.16,.00,.07,.04
1973,.29,.32,.29,.27,.23,.19,.12,.05,.09,.10,.04,-.07,.16,.18,.26,.26,.12,.08
1974,-.10,-.27,-.05,-.12,-.04,-.05,-.03,.10,-.08,-.06,-.08,-.08,-.07,-.07,-.14,-.07,.01,-.07
1975,.10,.08,.12,.04,.16,-.01,-.01,-.17,-.02,-.11,-.17,-.17,-.01,-.01,.03,.11,-.06,-.10
1976,-.03,-.06,-.21,-.07,-.21,-.12,-.10,-.12,-.07,-.24,-.06,.11,-.10,-.12,-.09,-.16,-.11,-.12
1977,.18,.22,.24,.26,.33,.27,.20,.18,.02,.03,.16,.03,.18,.18,.17,.28,.22,.07
1978,.06,.10,.19,.17,.09,-.01,.04,-.14,.06,.03,.13,.08,.07,.06,.06,.15,-.04,.07
1979,.08,-.10,.19,.15,.03,.14,.04,.17,.25,.26,.28,.47,.16,.13,.02,.12,.11,.26
1980,.29,.39,.29,.30,.35,.20,.22,.18,.20,.13,.30,.22,.26,.28,.39,.31,.20,.21
1981,.53,.42,.48,.32,.24,.29,.32,.35,.15,.12,.23,.41,.32,.31,.39,.35,.32,.16
1982,.05,.15,.03,.15,.18,.05,.14,.03,.14,.13,.18,.42,.14,.14,.20,.12,.08,.15
1983,.53,.43,.41,.27,.34,.23,.18,.36,.37,.17,.30,.17,.31,.33,.46,.34,.26,.28
1984,.31,.14,.26,.06,.33,.02,.19,.19,.21,.13,.06,-.04,.16,.17,.20,.21,.14,.14
1985,.22,-.04,.17,.12,.14,.15,.04,.17,.13,.12,.05,.14,.12,.10,.05,.15,.12,.10
1986,.26,.37,.30,.22,.21,.12,.11,.16,.03,.15,.10,.13,.18,.18,.26,.24,.13,.09
1987,.32,.43,.18,.24,.25,.35,.40,.25,.35,.33,.29,.46,.32,.29,.29,.23,.33,.32
1988,.56,.44,.51,.42,.44,.40,.33,.39,.37,.38,.12,.29,.39,.40,.49,.46,.37,.29
1989,.12,.30,.36,.29,.18,.15,.34,.33,.34,.29,.20,.37,.27,.27,.24,.27,.28,.28
1990,.41,.44,.80,.56,.45,.37,.46,.34,.23,.45,.46,.40,.45,.45,.41,.60,.39,.38
1991,.43,.50,.35,.51,.34,.53,.47,.39,.44,.29,.30,.32,.41,.41,.44,.40,.46,.34
1992,.47,.40,.48,.27,.31,.25,.09,.08,-.01,.06,.03,.22,.22,.23,.40,.36,.14,.03
1993,.34,.37,.36,.28,.28,.23,.25,.11,.11,.23,.03,.18,.23,.23,.31,.31,.19,.12
1994,.26,.02,.29,.41,.28,.43,.30,.21,.31,.42,.44,.39,.31,.30,.15,.33,.32,.39
1995,.52,.79,.47,.47,.27,.43,.45,.45,.33,.47,.44,.26,.45,.46,.57,.40,.44,.41
1996,.24,.46,.33,.33,.27,.25,.36,.48,.25,.23,.38,.37,.33,.32,.32,.31,.37,.29
1997,.33,.40,.52,.33,.34,.54,.34,.41,.52,.61,.64,.59,.47,.45,.37,.40,.43,.59
1998,.58,.88,.63,.63,.68,.77,.66,.65,.42,.41,.43,.55,.61,.61,.68,.65,.69,.42
1999,.48,.64,.32,.32,.26,.36,.38,.31,.39,.34,.37,.40,.38,.39,.55,.30,.35,.36
2000,.25,.56,.55,.56,.36,.40,.39,.42,.39,.26,.30,.28,.39,.40,.40,.49,.40,.32
2001,.45,.44,.55,.50,.57,.52,.59,.49,.51,.50,.72,.56,.53,.51,.39,.54,.53,.58
2002,.77,.78,.88,.58,.64,.53,.61,.53,.63,.54,.59,.44,.63,.64,.70,.70,.56,.59
2003,.74,.58,.60,.55,.60,.48,.58,.64,.62,.72,.53,.75,.62,.59,.59,.58,.57,.62
2004,.58,.72,.63,.61,.37,.44,.26,.45,.49,.61,.72,.50,.53,.55,.68,.54,.38,.61
2005,.74,.60,.74,.67,.63,.64,.61,.60,.72,.75,.73,.67,.68,.66,.62,.68,.62,.73
2006,.56,.73,.63,.46,.48,.66,.54,.70,.66,.70,.74,.79,.64,.63,.65,.52,.63,.70
2007,1.01,.70,.71,.76,.68,.61,.59,.60,.60,.58,.58,.49,.66,.69,.83,.72,.60,.59
2008,.30,.38,.75,.54,.50,.49,.60,.46,.61,.67,.68,.54,.54,.54,.39,.59,.52,.65
2009,.65,.52,.53,.61,.65,.64,.74,.69,.71,.65,.79,.67,.65,.64,.57,.60,.69,.72
2010,.75,.83,.92,.85,.75,.68,.63,.67,.64,.71,.81,.45,.72,.74,.75,.84,.66,.72
2011,.52,.48,.65,.64,.53,.62,.70,.75,.56,.66,.59,.60,.61,.60,.48,.61,.69,.60
2012,.47,.49,.57,.73,.78,.64,.58,.66,.72,.80,.78,.53,.65,.65,.52,.69,.63,.77
2013,.71,.62,.67,.53,.60,.69,.60,.70,.76,.69,.83,.70,.68,.66,.62,.60,.66,.76
2014,.76,.55,.78,.80,.86,.67,.58,.83,.87,.80,.67,.78,.75,.74,.67,.81,.69,.78
2015,.87,.90,.96,.75,.79,.81,.73,.79,.84,1.08,1.06,1.17,.89,.86,.85,.83,.78,.99
2016,1.18,1.37,1.35,1.09,.95,.81,.84,1.02,.90,.88,.91,.86,1.01,1.04,1.24,1.13,.89,.90
2017,1.02,1.13,1.16,.94,.91,.71,.81,.87,.75,.89,.88,.93,.92,.91,1.01,1.00,.80,.84
2018,.82,.85,.88,.88,.81,.76,.83,.78,.80,1.01,.83,.92,.85,.85,.87,.86,.79,.88
2019,.93,.94,1.16,1.00,.86,.90,.93,.95,.92,.99,.99,1.11,.97,.96,.93,1.01,.93,.97
2020,1.17,1.24,1.18,1.12,.99,.91,.88,.86,.96,.87,1.10,.79,1.01,1.03,1.18,1.10,.88,.98
2021,.81,.64,.89,.76,.79,.84,.91,.81,.92,.99,.93,.87,.85,.84,.75,.81,.85,.94
2022,.91,.89,1.04,.83,.84,.92,.94,.94,.88,.96,.74,.80,.89,.90,.89,.90,.93,.86
2023,.88,.97,1.23,.99,.94,1.08,1.19,1.19,1.48,1.34,1.42,1.35,1.17,1.12,.88,1.05,1.15,1.41
2024,1.24,1.44,1.39,1.31,1.16,1.24,1.20,1.30,1.26,***,***,***,***,***,1.34,1.29,1.25,***
`,u2=`Land-Ocean: Northern Hemispheric Means
Year,Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec,J-D,D-N,DJF,MAM,JJA,SON
1880,-.39,-.54,-.24,-.31,-.06,-.18,-.22,-.26,-.25,-.31,-.44,-.43,-.30,***,***,-.20,-.22,-.33
1881,-.31,-.25,-.06,-.02,.05,-.34,.09,-.06,-.29,-.45,-.37,-.23,-.19,-.20,-.33,-.01,-.10,-.37
1882,.26,.21,.02,-.30,-.23,-.29,-.28,-.15,-.25,-.52,-.34,-.69,-.21,-.18,.08,-.17,-.24,-.37
1883,-.58,-.66,-.15,-.30,-.26,-.12,-.06,-.23,-.34,-.17,-.45,-.15,-.29,-.33,-.64,-.24,-.14,-.32
1884,-.16,-.11,-.64,-.59,-.36,-.42,-.41,-.52,-.45,-.45,-.58,-.47,-.43,-.40,-.14,-.53,-.45,-.50
1885,-1.00,-.46,-.24,-.49,-.58,-.45,-.34,-.42,-.40,-.37,-.39,-.12,-.44,-.47,-.65,-.44,-.40,-.39
1886,-.75,-.84,-.71,-.37,-.34,-.37,-.14,-.43,-.33,-.32,-.41,-.23,-.44,-.43,-.57,-.47,-.32,-.35
1887,-1.09,-.71,-.45,-.39,-.26,-.22,-.25,-.56,-.22,-.50,-.28,-.43,-.44,-.43,-.67,-.37,-.34,-.33
1888,-.49,-.62,-.64,-.22,-.16,-.03,-.01,-.22,-.20,-.04,-.01,-.24,-.24,-.26,-.51,-.34,-.09,-.09
1889,-.28,.28,-.02,.16,-.04,-.07,-.09,-.21,-.31,-.42,-.62,-.55,-.18,-.16,-.08,.03,-.12,-.45
1890,-.64,-.58,-.48,-.26,-.36,-.16,-.24,-.40,-.36,-.11,-.63,-.48,-.39,-.40,-.59,-.36,-.27,-.37
1891,-.47,-.68,-.17,-.36,-.16,-.14,-.13,-.14,-.09,-.29,-.54,-.03,-.27,-.30,-.54,-.23,-.13,-.30
1892,-.51,-.19,-.67,-.46,-.24,-.06,-.38,-.34,-.22,-.28,-.83,-.68,-.40,-.35,-.24,-.45,-.26,-.44
1893,-1.51,-.97,-.33,-.31,-.44,-.19,-.15,-.35,-.30,-.29,-.34,-.62,-.48,-.49,-1.05,-.36,-.23,-.31
1894,-.92,-.43,-.22,-.55,-.27,-.42,-.21,-.28,-.33,-.29,-.49,-.37,-.40,-.42,-.66,-.35,-.30,-.37
1895,-.71,-.82,-.51,-.20,-.31,-.22,-.20,-.29,-.07,-.11,-.14,-.24,-.32,-.33,-.63,-.34,-.24,-.11
1896,-.38,-.19,-.51,-.61,-.18,.06,-.01,-.13,-.14,.03,-.22,-.23,-.21,-.21,-.27,-.43,-.03,-.11
1897,-.41,-.43,-.41,-.06,.12,-.07,.03,-.07,-.07,-.17,-.27,-.30,-.18,-.17,-.36,-.12,-.04,-.17
1898,.04,-.46,-.81,-.29,-.29,-.10,-.13,-.19,-.19,-.38,-.52,-.28,-.30,-.30,-.24,-.46,-.14,-.36
1899,-.14,-.65,-.60,-.23,-.26,-.37,-.18,-.08,-.06,.03,.34,-.47,-.22,-.20,-.36,-.36,-.21,.11
1900,-.63,-.15,.05,-.11,-.05,-.11,-.12,-.09,-.04,.22,-.13,-.03,-.10,-.14,-.42,-.04,-.11,.02
1901,-.35,-.11,.26,.10,-.12,.00,.00,-.17,-.29,-.33,-.20,-.41,-.13,-.10,-.16,.08,-.05,-.27
1902,-.14,-.04,-.38,-.38,-.41,-.40,-.34,-.30,-.34,-.33,-.48,-.61,-.35,-.33,-.20,-.39,-.35,-.39
1903,-.24,.10,-.18,-.47,-.44,-.47,-.44,-.56,-.50,-.47,-.42,-.58,-.39,-.39,-.25,-.36,-.49,-.46
1904,-.76,-.62,-.46,-.51,-.45,-.49,-.60,-.55,-.64,-.40,-.10,-.35,-.49,-.51,-.65,-.47,-.55,-.38
1905,-.42,-.83,-.24,-.46,-.30,-.29,-.22,-.25,-.20,-.28,.08,-.18,-.30,-.31,-.53,-.33,-.25,-.14
1906,-.56,-.52,-.20,.04,-.25,-.12,-.27,-.17,-.25,-.19,-.40,.03,-.24,-.26,-.42,-.14,-.19,-.28
1907,-.58,-.71,-.30,-.45,-.59,-.52,-.42,-.40,-.41,-.21,-.57,-.59,-.48,-.43,-.42,-.45,-.44,-.40
1908,-.54,-.28,-.72,-.48,-.29,-.30,-.36,-.57,-.32,-.46,-.64,-.56,-.46,-.46,-.47,-.50,-.41,-.47
1909,-.94,-.46,-.67,-.66,-.50,-.52,-.46,-.37,-.38,-.35,-.12,-.58,-.50,-.50,-.65,-.61,-.45,-.29
1910,-.36,-.37,-.50,-.42,-.30,-.45,-.38,-.40,-.44,-.32,-.62,-.82,-.45,-.43,-.44,-.41,-.41,-.46
1911,-.70,-.59,-.64,-.46,-.46,-.35,-.39,-.44,-.39,-.20,-.21,-.30,-.43,-.47,-.71,-.52,-.40,-.26
1912,-.35,-.17,-.61,-.17,-.13,-.15,-.53,-.78,-.81,-.85,-.52,-.58,-.47,-.45,-.28,-.30,-.48,-.73
1913,-.57,-.65,-.48,-.51,-.55,-.50,-.52,-.48,-.43,-.40,-.16,.10,-.43,-.48,-.60,-.51,-.50,-.33
1914,.17,-.11,-.36,-.39,-.19,-.23,-.34,-.29,-.30,-.02,-.23,-.06,-.20,-.18,.05,-.32,-.29,-.18
1915,-.27,-.09,-.24,.06,-.02,-.13,-.11,-.17,-.22,-.28,-.04,-.25,-.15,-.13,-.14,-.07,-.14,-.18
1916,-.10,-.18,-.39,-.35,-.38,-.51,-.35,-.38,-.50,-.36,-.47,-1.14,-.43,-.35,-.18,-.38,-.41,-.45
1917,-.53,-.69,-.75,-.65,-.74,-.50,-.33,-.41,-.32,-.64,-.33,-1.07,-.58,-.59,-.79,-.71,-.41,-.43
1918,-.70,-.47,-.26,-.60,-.50,-.46,-.35,-.38,-.26,-.06,-.23,-.57,-.40,-.44,-.75,-.45,-.40,-.18
1919,-.39,-.40,-.39,-.24,-.42,-.40,-.34,-.31,-.20,-.10,-.48,-.56,-.35,-.35,-.45,-.35,-.35,-.26
1920,-.15,-.29,.00,-.21,-.21,-.26,-.25,-.31,-.35,-.40,-.46,-.72,-.30,-.29,-.34,-.14,-.28,-.40
1921,.18,-.09,-.12,-.17,-.25,-.14,-.04,-.30,-.19,-.01,-.12,-.13,-.12,-.16,-.21,-.18,-.16,-.10
1922,-.39,-.63,-.11,-.16,-.18,-.15,-.28,-.37,-.42,-.31,-.13,-.16,-.27,-.27,-.39,-.15,-.27,-.29
1923,-.17,-.47,-.39,-.53,-.39,-.24,-.30,-.29,-.18,.05,.15,.11,-.22,-.24,-.27,-.44,-.28,.01
1924,-.27,-.20,.02,-.26,-.06,-.19,-.22,-.27,-.23,-.24,.12,-.37,-.18,-.14,-.12,-.10,-.23,-.12
1925,-.26,-.36,-.22,-.16,-.21,-.26,-.26,-.20,-.05,-.10,.23,.23,-.14,-.19,-.33,-.20,-.24,.03
1926,.54,.19,.38,-.13,-.22,-.20,-.19,-.06,-.03,.06,.17,-.30,.02,.06,.32,.01,-.15,.07
1927,-.27,-.07,-.46,-.27,-.14,-.14,-.08,-.16,.03,.25,.11,-.37,-.13,-.13,-.21,-.29,-.13,.13
1928,.25,.07,-.23,-.31,-.17,-.32,-.11,-.19,-.15,-.09,.03,-.04,-.10,-.13,-.02,-.23,-.21,-.07
1929,-.55,-.78,-.18,-.34,-.26,-.38,-.35,-.20,-.21,-.02,-.02,-.66,-.33,-.28,-.46,-.26,-.31,-.08
1930,-.11,-.18,.12,-.14,-.19,-.11,-.03,.02,-.02,.03,.44,.09,-.01,-.07,-.32,-.07,-.04,.15
1931,.01,-.22,-.05,-.19,-.13,.16,.09,.10,.18,.38,.27,.11,.06,.06,-.04,-.12,.11,.28
1932,.40,-.17,-.20,.11,-.09,-.13,-.13,-.06,.12,.15,-.31,-.21,-.04,-.02,.11,-.06,-.11,-.01
1933,-.17,-.29,-.30,-.16,-.24,-.30,-.13,-.13,-.27,-.16,-.23,-.53,-.24,-.22,-.22,-.23,-.19,-.22
1934,-.12,.34,-.26,-.28,.09,-.01,-.03,-.09,-.13,.14,.28,.17,.01,-.05,-.11,-.15,-.04,.09
1935,-.40,.58,.05,-.34,-.27,-.14,-.03,-.06,-.04,.13,-.30,-.16,-.08,-.06,.12,-.19,-.08,-.07
1936,-.28,-.48,-.11,-.04,.01,.04,.09,.03,.07,.08,.15,.15,-.03,-.05,-.31,-.05,.05,.10
1937,.09,.24,-.23,-.06,.12,.15,.15,.16,.28,.33,.24,-.01,.12,.13,.16,-.06,.15,.28
1938,.35,.29,.34,.32,.03,-.07,-.02,.08,.15,.31,.31,-.13,.16,.17,.21,.23,.00,.26
1939,.03,-.01,-.24,-.08,.01,.00,.05,.08,.12,.07,.25,.77,.09,.01,-.03,-.10,.05,.15
1940,-.10,.14,.03,.28,.16,.17,.15,.07,.26,.28,.30,.36,.17,.21,.27,.16,.13,.28
1941,.18,.47,.13,.13,.23,.21,.25,.19,.10,.50,.18,.19,.23,.24,.33,.16,.22,.26
1942,.40,-.09,.00,.09,.17,.10,-.01,-.08,.11,.28,.26,.27,.13,.12,.17,.09,.01,.21
1943,-.09,.38,.00,.31,.23,-.07,-.02,.10,.14,.46,.36,.38,.18,.17,.19,.18,.00,.32
1944,.63,.44,.32,.19,.24,.17,.15,.17,.36,.44,.19,.00,.27,.30,.48,.25,.16,.33
1945,.11,-.06,.10,.29,.08,.08,.07,.28,.20,.24,.09,-.21,.11,.12,.02,.16,.14,.18
1946,.35,.09,.12,.32,.03,-.05,-.04,-.10,-.03,.02,.07,-.45,.03,.05,.08,.16,-.06,.02
1947,-.04,-.03,.29,.23,.07,.00,-.03,-.04,-.01,.40,.19,-.05,.08,.05,-.17,.19,-.02,.19
1948,.30,-.15,-.27,-.03,.17,.05,.01,.03,-.03,.08,.03,-.39,-.02,.01,.04,-.04,.03,.03
1949,.23,-.09,.04,-.03,.00,-.20,-.11,-.05,-.10,.07,.05,-.14,-.03,-.05,-.08,.01,-.12,.01
1950,-.29,-.27,.06,-.22,-.05,-.07,-.19,-.20,-.09,-.06,-.34,-.13,-.15,-.15,-.23,-.07,-.15,-.16
1951,-.36,-.51,-.19,.07,.17,-.02,.08,.22,.34,.29,.08,.38,.04,.00,-.33,.02,.09,.23
1952,.17,.17,-.22,.18,.15,.16,.14,.07,.14,-.01,-.21,.01,.06,.09,.24,.04,.12,-.03
1953,.24,.37,.26,.41,.25,.25,.22,.18,.17,.27,.09,.23,.24,.23,.21,.30,.22,.18
1954,-.24,.00,-.17,-.01,-.07,-.04,-.11,-.01,.09,.13,.34,-.11,-.02,.01,-.01,-.08,-.05,.19
1955,.43,-.12,-.43,-.24,-.13,-.10,-.05,.07,-.02,.12,-.34,-.28,-.09,-.08,.06,-.27,-.03,-.08
1956,-.04,-.31,-.23,-.26,-.30,-.20,-.20,-.28,-.32,-.28,-.26,-.11,-.23,-.25,-.21,-.26,-.22,-.29
1957,-.13,-.05,-.10,-.09,-.06,.12,.11,.16,.12,.06,.12,.24,.04,.01,-.10,-.08,.13,.10
1958,.69,.28,.16,.02,.12,.05,.05,.13,.07,.08,.03,.18,.15,.16,.40,.10,.08,.06
1959,.24,.17,.33,.22,.04,.14,.05,.10,.13,-.04,.03,.10,.13,.13,.19,.20,.10,.04
1960,.15,.42,-.40,-.12,.03,.18,.09,.11,.12,.05,-.08,.39,.08,.05,.22,-.16,.13,.03
1961,.17,.29,.22,.14,.07,.18,.06,.05,-.03,-.04,.08,-.17,.09,.13,.29,.14,.10,.00
1962,.28,.36,.30,.22,.02,-.13,.10,.03,-.02,.13,.12,.10,.13,.10,.16,.18,.00,.08
1963,.08,.50,-.11,.04,-.05,-.04,.10,.14,.13,.42,.43,.03,.14,.14,.22,-.04,.07,.33
1964,-.04,-.02,-.32,-.30,-.10,-.09,-.13,-.23,-.28,-.31,-.21,-.27,-.19,-.17,-.01,-.24,-.15,-.27
1965,-.02,-.37,-.10,-.26,-.14,-.20,-.18,-.20,-.20,-.02,.04,-.08,-.14,-.16,-.22,-.16,-.20,-.06
1966,-.25,.03,.00,-.22,-.05,.06,.11,.14,.07,-.10,.02,-.03,-.02,-.02,-.10,-.09,.10,-.01
1967,-.18,-.37,.23,.05,.21,-.06,.04,.06,-.02,.30,.04,.02,.03,.02,-.19,.16,.02,.10
1968,-.29,-.16,.44,.00,-.06,-.04,-.08,-.08,-.05,-.01,-.22,-.33,-.07,-.04,-.14,.13,-.07,-.09
1969,-.43,-.46,-.20,.03,.11,-.04,.06,.05,.04,.03,.15,.31,-.03,-.08,-.41,-.02,.02,.07
1970,-.03,.27,-.07,-.02,.00,.02,-.04,-.05,-.05,-.20,.01,-.31,-.04,.01,.18,-.03,-.02,-.08
1971,-.15,-.21,-.28,-.20,-.12,-.14,-.13,-.16,-.14,-.16,-.02,-.14,-.15,-.17,-.22,-.20,-.14,-.11
1972,-.54,-.52,.01,-.12,-.15,-.10,-.05,-.09,-.26,-.04,-.20,-.04,-.18,-.18,-.40,-.09,-.08,-.17
1973,.15,.44,.32,.19,.09,.16,.04,.03,-.08,-.08,-.10,-.04,.09,.09,.18,.20,.08,-.09
1974,-.26,-.35,.03,-.10,-.19,-.18,-.12,-.11,-.16,-.23,-.21,-.27,-.18,-.16,-.22,-.09,-.14,-.20
1975,.16,.09,.10,.05,-.02,-.08,-.06,-.14,-.08,-.18,-.30,-.22,-.06,-.06,-.01,.04,-.09,-.19
1976,.05,-.12,-.31,.02,-.26,-.20,-.27,-.21,-.12,-.51,-.32,-.26,-.21,-.21,-.10,-.18,-.22,-.32
1977,-.16,.11,.26,.25,.23,.22,.08,.02,.13,-.02,.27,.02,.12,.10,-.10,.25,.11,.13
1978,.16,.04,.21,.07,-.06,-.14,-.07,-.14,-.01,.00,.16,.02,.02,.02,.07,.07,-.12,.05
1979,-.05,-.35,.18,-.17,.01,.07,.05,.04,.19,.23,.24,.54,.08,.04,-.13,.01,.06,.22
1980,.21,.40,.07,.15,.26,.19,.13,.09,.10,.12,.20,.09,.17,.21,.38,.16,.14,.14
1981,.79,.62,.68,.39,.18,.28,.09,.16,.14,.23,.35,.54,.37,.33,.50,.41,.18,.24
1982,-.14,.16,.06,.17,.09,.01,.04,-.07,.06,.00,-.11,.38,.05,.07,.19,.10,-.01,-.02
1983,.55,.35,.42,.06,.05,.11,.20,.25,.26,.12,.49,.11,.25,.27,.43,.18,.19,.29
1984,.33,.02,.18,-.07,.23,.09,.09,.06,-.04,.08,-.10,-.42,.04,.08,.15,.11,.08,-.02
1985,.07,-.29,.00,-.04,.09,.00,-.08,-.02,.03,.02,.02,.16,.00,-.05,-.21,.02,-.03,.02
1986,.36,.31,.26,.15,.19,.14,-.02,.04,-.02,.09,.04,.06,.13,.14,.28,.20,.05,.03
1987,.24,.50,.00,.07,.23,.16,.25,.27,.39,.22,.10,.50,.25,.21,.27,.10,.23,.24
1988,.59,.46,.47,.44,.43,.40,.42,.26,.26,.23,.06,.42,.37,.38,.52,.45,.36,.18
1989,.08,.39,.45,.32,.22,.24,.32,.26,.23,.25,.11,.33,.27,.27,.30,.33,.27,.20
1990,.47,.54,1.16,.71,.50,.48,.33,.41,.42,.48,.46,.38,.53,.52,.45,.79,.40,.45
1991,.59,.57,.46,.56,.33,.47,.43,.35,.35,.29,.32,.20,.41,.43,.51,.45,.42,.32
1992,.61,.50,.54,.16,.19,.04,-.10,-.07,-.18,-.17,-.09,.21,.14,.13,.43,.30,-.04,-.15
1993,.39,.52,.38,.23,.32,.22,.12,.02,-.07,.12,-.21,.22,.19,.19,.37,.31,.12,-.05
1994,.34,-.04,.49,.48,.39,.41,.33,.32,.33,.54,.50,.36,.37,.36,.17,.45,.36,.46
1995,.75,1.19,.59,.71,.41,.50,.37,.53,.43,.60,.57,.26,.58,.58,.77,.57,.47,.53
1996,.27,.54,.32,.17,.35,.25,.29,.18,.03,.04,.35,.35,.26,.25,.36,.28,.24,.14
1997,.36,.60,.74,.49,.42,.49,.41,.48,.51,.63,.59,.51,.52,.51,.43,.55,.46,.58
1998,.62,1.04,.72,.87,.66,.72,.74,.72,.61,.53,.49,.74,.70,.69,.72,.75,.73,.54
1999,.59,1.00,.29,.54,.36,.34,.35,.30,.40,.39,.53,.66,.48,.49,.77,.40,.33,.44
2000,.38,.89,.83,.88,.54,.44,.41,.47,.36,.29,.19,.27,.50,.53,.64,.75,.44,.28
2001,.56,.46,.76,.59,.68,.51,.63,.68,.56,.60,.97,.65,.64,.61,.43,.68,.61,.71
2002,1.01,1.14,1.11,.51,.52,.68,.66,.55,.62,.53,.78,.42,.71,.73,.94,.71,.63,.65
2003,.92,.56,.66,.61,.71,.54,.68,.86,.78,.98,.66,.98,.75,.70,.64,.66,.69,.81
2004,.66,.91,.86,.70,.52,.46,.49,.55,.59,.70,.98,.44,.66,.70,.85,.69,.50,.76
2005,.94,.71,.94,.92,.77,.78,.74,.69,.90,.95,1.05,.83,.85,.82,.70,.88,.74,.97
2006,.64,.95,.78,.59,.76,.80,.69,.68,.82,.95,.94,1.15,.81,.79,.81,.71,.73,.90
2007,1.45,.89,.93,1.06,.71,.65,.64,.73,.67,.83,.81,.77,.84,.88,1.16,.90,.67,.77
2008,.33,.58,1.14,.65,.60,.61,.60,.58,.57,.85,.96,.65,.68,.69,.56,.80,.60,.79
2009,.82,.69,.58,.70,.65,.66,.68,.72,.85,.78,.84,.67,.72,.72,.72,.64,.69,.82
2010,.80,.94,1.10,1.14,.93,.83,.88,.85,.70,.89,1.20,.51,.90,.91,.80,1.06,.86,.93
2011,.61,.56,.88,.83,.65,.76,.71,.71,.73,.90,.65,.86,.74,.71,.56,.79,.72,.76
2012,.64,.58,.69,1.05,.96,.93,.85,.76,.86,.90,.97,.45,.80,.84,.70,.90,.85,.91
2013,.85,.78,.81,.67,.76,.77,.69,.73,.70,.83,1.12,.84,.80,.76,.69,.75,.73,.88
2014,.97,.71,1.19,1.09,.89,.80,.76,.91,.83,.93,.81,1.10,.92,.90,.84,1.06,.82,.86
2015,1.19,1.18,1.31,1.01,1.04,1.06,.92,1.01,1.17,1.28,1.37,1.53,1.17,1.14,1.16,1.12,.99,1.27
2016,1.55,1.93,1.89,1.46,1.11,1.12,1.04,1.12,1.22,1.03,1.11,1.03,1.30,1.34,1.67,1.49,1.10,1.12
2017,1.38,1.50,1.51,1.18,.93,.93,.97,1.02,.99,1.04,1.22,1.37,1.17,1.14,1.31,1.21,.97,1.08
2018,1.13,1.23,1.17,.97,1.00,.86,.92,.89,.98,1.22,.97,1.09,1.03,1.06,1.24,1.05,.89,1.06
2019,1.19,1.11,1.54,1.24,1.01,1.19,1.02,1.10,1.21,1.28,1.18,1.40,1.21,1.18,1.13,1.26,1.10,1.22
2020,1.58,1.69,1.66,1.39,1.26,1.14,1.10,1.12,1.19,1.20,1.58,1.18,1.34,1.36,1.56,1.44,1.12,1.32
2021,1.25,.95,1.20,1.12,1.04,1.20,1.07,1.02,1.04,1.29,1.29,1.16,1.14,1.14,1.13,1.12,1.10,1.21
2022,1.24,1.16,1.41,1.08,1.02,1.12,1.06,1.16,1.14,1.31,1.09,1.06,1.15,1.16,1.19,1.17,1.11,1.18
2023,1.29,1.29,1.63,1.01,1.12,1.19,1.44,1.57,1.67,1.88,1.97,1.85,1.49,1.43,1.21,1.26,1.40,1.84
2024,1.66,1.93,1.77,1.79,1.44,1.54,1.42,1.42,1.57,***,***,***,***,***,1.81,1.67,1.46,***
`,f2=`Land-Ocean: Southern Hemispheric Means
Year,Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec,J-D,D-N,DJF,MAM,JJA,SON
1880,-.01,.02,.05,-.02,-.13,-.25,-.17,.06,-.05,-.15,-.01,.05,-.05,***,***,-.03,-.12,-.07
1881,-.09,-.07,.09,.09,.08,-.06,-.08,-.02,-.04,-.01,-.01,.09,.00,-.01,-.04,.09,-.05,-.02
1882,.06,.07,.07,-.02,-.04,-.15,-.04,.01,-.05,.03,-.02,-.08,-.01,.00,.07,.00,-.06,-.01
1883,-.03,-.09,-.09,-.07,-.10,-.02,-.08,-.05,-.10,-.06,-.05,-.06,-.07,-.07,-.06,-.09,-.05,-.07
1884,-.09,-.06,-.11,-.22,-.32,-.29,-.22,-.07,-.11,-.07,-.11,-.16,-.15,-.14,-.07,-.22,-.19,-.10
1885,-.20,-.23,-.30,-.36,-.33,-.43,-.33,-.22,-.19,-.13,-.12,-.10,-.25,-.25,-.20,-.33,-.33,-.15
1886,-.15,-.20,-.17,-.20,-.15,-.32,-.21,-.19,-.15,-.24,-.16,-.29,-.20,-.19,-.15,-.18,-.24,-.18
1887,-.37,-.44,-.27,-.31,-.35,-.28,-.27,-.17,-.30,-.22,-.25,-.23,-.29,-.29,-.37,-.31,-.24,-.26
1888,-.21,-.13,-.21,-.20,-.29,-.31,-.20,-.09,-.04,.06,.06,.15,-.12,-.15,-.19,-.23,-.20,.03
1889,.08,.03,.13,.03,.02,-.13,-.07,-.20,-.17,-.10,-.06,-.04,-.04,-.02,.08,.06,-.13,-.11
1890,-.21,-.33,-.34,-.35,-.43,-.33,-.32,-.39,-.38,-.40,-.25,-.17,-.32,-.31,-.19,-.37,-.34,-.34
1891,-.22,-.26,-.20,-.20,-.17,-.29,-.23,-.22,-.24,-.16,-.11,-.06,-.20,-.20,-.21,-.19,-.25,-.17
1892,-.09,-.06,-.14,-.22,-.23,-.38,-.25,-.21,-.13,-.01,-.03,-.12,-.16,-.15,-.07,-.20,-.28,-.06
1893,-.13,-.18,-.12,-.24,-.24,-.32,-.14,-.17,-.16,-.09,-.04,-.03,-.16,-.16,-.14,-.20,-.21,-.10
1894,-.14,-.16,-.24,-.36,-.35,-.40,-.26,-.20,-.22,-.18,-.04,-.07,-.22,-.22,-.11,-.31,-.29,-.15
1895,-.13,-.06,-.16,-.25,-.24,-.21,-.14,-.06,-.18,-.12,-.21,-.05,-.15,-.15,-.09,-.22,-.14,-.17
1896,-.09,-.07,-.04,-.01,-.15,-.28,-.04,.01,-.01,.09,.12,.12,-.03,-.04,-.07,-.07,-.11,.06
1897,.09,.07,.12,.00,-.16,-.16,-.07,-.11,-.10,-.10,-.10,-.13,-.05,-.03,.10,-.01,-.11,-.10
1898,-.10,-.16,-.23,-.34,-.33,-.30,-.33,-.36,-.25,-.32,-.26,-.21,-.27,-.26,-.13,-.30,-.33,-.28
1899,-.20,-.13,-.14,-.18,-.21,-.27,-.15,-.10,-.05,-.12,-.09,-.06,-.14,-.15,-.18,-.18,-.17,-.09
1900,-.10,.03,-.05,-.08,-.13,-.08,-.13,-.07,-.06,-.02,.01,-.10,-.07,-.06,-.05,-.08,-.09,-.02
1901,-.11,-.12,-.14,-.15,-.18,-.24,-.29,-.24,-.16,-.26,-.13,-.14,-.18,-.18,-.11,-.16,-.25,-.18
1902,-.19,-.15,-.17,-.18,-.25,-.22,-.21,-.30,-.23,-.27,-.26,-.23,-.22,-.21,-.16,-.20,-.24,-.25
1903,-.25,-.23,-.30,-.36,-.36,-.39,-.27,-.35,-.50,-.48,-.44,-.46,-.37,-.35,-.23,-.34,-.34,-.47
1904,-.52,-.57,-.57,-.51,-.59,-.48,-.42,-.43,-.47,-.39,-.26,-.32,-.46,-.47,-.52,-.56,-.44,-.37
1905,-.28,-.36,-.20,-.21,-.29,-.27,-.29,-.16,-.17,-.21,-.21,-.08,-.23,-.25,-.32,-.23,-.24,-.20
1906,.01,-.04,-.16,-.15,-.26,-.27,-.18,-.23,-.32,-.24,-.36,-.34,-.21,-.19,-.04,-.19,-.23,-.30
1907,-.28,-.30,-.24,-.29,-.34,-.32,-.29,-.29,-.28,-.25,-.36,-.35,-.30,-.30,-.30,-.29,-.30,-.30
1908,-.35,-.38,-.39,-.40,-.46,-.46,-.34,-.34,-.41,-.43,-.41,-.43,-.40,-.39,-.36,-.42,-.38,-.42
1909,-.51,-.46,-.41,-.52,-.59,-.51,-.45,-.32,-.41,-.46,-.53,-.55,-.48,-.47,-.47,-.51,-.43,-.46
1910,-.50,-.45,-.52,-.44,-.38,-.32,-.30,-.33,-.34,-.51,-.53,-.53,-.43,-.43,-.50,-.45,-.32,-.46
1911,-.54,-.57,-.58,-.62,-.58,-.66,-.46,-.44,-.44,-.34,-.23,-.11,-.46,-.50,-.55,-.60,-.52,-.33
1912,-.14,-.11,-.14,-.18,-.28,-.31,-.31,-.29,-.33,-.29,-.25,-.29,-.25,-.23,-.12,-.20,-.31,-.29
1913,-.25,-.25,-.38,-.29,-.32,-.40,-.20,-.20,-.26,-.24,-.24,-.14,-.26,-.28,-.26,-.33,-.26,-.25
1914,-.08,-.09,-.12,-.19,-.22,-.27,-.12,-.04,-.03,-.04,-.07,-.02,-.11,-.12,-.10,-.18,-.15,-.05
1915,-.13,.03,.05,.06,-.09,-.29,-.13,-.27,-.19,-.21,-.23,-.18,-.13,-.12,-.04,.01,-.23,-.21
1916,-.16,-.13,-.17,-.27,-.33,-.47,-.40,-.20,-.24,-.33,-.48,-.52,-.31,-.28,-.15,-.26,-.36,-.35
1917,-.63,-.59,-.53,-.46,-.39,-.38,-.18,-.06,-.16,-.27,-.36,-.29,-.36,-.38,-.58,-.46,-.21,-.26
1918,-.27,-.24,-.25,-.30,-.37,-.28,-.28,-.26,-.09,-.06,.02,.00,-.20,-.22,-.27,-.31,-.28,-.04
1919,.00,-.05,-.03,-.02,-.13,-.31,-.24,-.37,-.31,-.31,-.35,-.28,-.20,-.18,-.02,-.06,-.31,-.32
1920,-.33,-.23,-.24,-.27,-.32,-.44,-.33,-.20,-.08,-.13,-.08,-.21,-.24,-.24,-.28,-.28,-.32,-.10
1921,-.28,-.27,-.36,-.43,-.35,-.38,-.25,-.22,-.19,-.05,-.17,-.22,-.27,-.26,-.25,-.38,-.28,-.14
1922,-.28,-.25,-.19,-.30,-.47,-.45,-.27,-.29,-.29,-.33,-.17,-.24,-.29,-.29,-.25,-.32,-.34,-.26
1923,-.37,-.32,-.29,-.28,-.28,-.33,-.32,-.38,-.43,-.32,-.19,-.17,-.31,-.31,-.31,-.29,-.34,-.31
1924,-.16,-.25,-.18,-.33,-.30,-.32,-.34,-.45,-.41,-.47,-.53,-.51,-.35,-.33,-.19,-.27,-.37,-.47
1925,-.50,-.43,-.33,-.35,-.36,-.38,-.26,-.20,-.33,-.24,-.11,-.08,-.30,-.33,-.48,-.35,-.28,-.23
1926,-.10,-.12,-.14,-.11,-.22,-.29,-.32,-.18,-.23,-.27,-.28,-.28,-.21,-.19,-.10,-.16,-.26,-.26
1927,-.25,-.27,-.30,-.34,-.37,-.40,-.28,-.30,-.26,-.24,-.19,-.26,-.29,-.29,-.27,-.34,-.33,-.23
1928,-.28,-.25,-.26,-.23,-.41,-.43,-.27,-.25,-.26,-.29,-.22,-.29,-.29,-.28,-.26,-.30,-.32,-.26
1929,-.33,-.36,-.46,-.47,-.48,-.46,-.37,-.42,-.29,-.26,-.18,-.41,-.38,-.36,-.33,-.47,-.42,-.24
1930,-.47,-.34,-.33,-.33,-.28,-.30,-.36,-.29,-.27,-.23,-.07,-.17,-.29,-.31,-.41,-.31,-.32,-.19
1931,-.18,-.15,-.12,-.23,-.22,-.28,-.13,-.15,-.28,-.24,-.36,-.19,-.21,-.21,-.17,-.19,-.19,-.29
1932,-.09,-.15,-.15,-.21,-.24,-.41,-.33,-.34,-.29,-.31,-.21,-.30,-.25,-.24,-.15,-.20,-.36,-.27
1933,-.27,-.28,-.27,-.31,-.32,-.36,-.29,-.32,-.31,-.32,-.38,-.35,-.31,-.31,-.28,-.30,-.32,-.34
1934,-.30,-.40,-.32,-.32,-.27,-.27,-.15,-.13,-.16,-.25,-.20,-.22,-.25,-.26,-.35,-.30,-.19,-.20
1935,-.26,-.29,-.31,-.38,-.29,-.38,-.37,-.36,-.34,-.21,-.18,-.16,-.30,-.30,-.26,-.33,-.37,-.25
1936,-.26,-.24,-.28,-.33,-.31,-.47,-.28,-.28,-.24,-.12,-.12,-.17,-.26,-.26,-.22,-.31,-.34,-.16
1937,-.24,-.18,-.17,-.24,-.22,-.23,-.20,-.12,-.09,-.15,-.07,-.14,-.17,-.17,-.19,-.21,-.18,-.11
1938,-.19,-.21,-.15,-.19,-.22,-.28,-.17,-.20,-.15,-.04,-.17,-.13,-.18,-.18,-.18,-.19,-.21,-.12
1939,-.15,-.13,-.12,-.12,-.10,-.13,-.15,-.18,-.26,-.15,-.10,.09,-.12,-.14,-.14,-.11,-.15,-.17
1940,.11,.04,.16,.08,.07,.07,.10,.09,.07,-.04,.06,.29,.09,.08,.08,.10,.09,.03
1941,.20,.16,.10,.22,.13,.08,.21,.13,-.03,.22,.29,.26,.17,.17,.22,.15,.14,.16
1942,.19,.14,.12,.10,.06,.01,.01,.01,-.16,-.25,-.09,-.04,.01,.03,.20,.10,.01,-.17
1943,.07,-.04,-.08,-.10,-.10,-.04,.19,-.08,-.03,.00,.03,.08,-.01,-.02,-.01,-.09,.02,.00
1944,.08,.05,.21,.21,.14,.17,.23,.22,.21,.09,.03,.09,.14,.14,.07,.19,.21,.11
1945,.10,.08,.03,.10,.04,-.05,.02,.24,.21,.13,.07,.08,.09,.09,.09,.06,.07,.14
1946,-.03,-.03,-.09,-.20,-.17,-.37,-.21,-.31,-.12,-.17,-.18,-.15,-.17,-.15,.01,-.15,-.30,-.16
1947,-.08,-.12,-.16,-.11,-.10,-.03,-.05,-.10,-.23,-.26,-.15,-.22,-.13,-.13,-.12,-.12,-.06,-.22
1948,-.18,-.14,-.21,-.21,-.18,-.15,-.23,-.26,-.27,-.18,-.28,-.08,-.20,-.21,-.18,-.20,-.21,-.24
1949,-.10,-.19,-.08,-.19,-.20,-.34,-.15,-.21,-.19,-.20,-.25,-.22,-.19,-.18,-.12,-.16,-.23,-.21
1950,-.24,-.27,-.22,-.20,-.19,-.05,.00,-.12,-.15,-.35,-.35,-.32,-.20,-.20,-.24,-.20,-.06,-.28
1951,-.33,-.32,-.22,-.35,-.18,-.11,-.09,-.10,-.21,-.11,-.08,-.06,-.18,-.20,-.32,-.25,-.10,-.14
1952,.07,.06,.07,-.10,-.19,-.22,-.05,.02,.00,.01,-.05,-.03,-.03,-.04,.02,-.08,-.08,-.01
1953,-.08,-.07,-.02,-.01,-.01,-.01,-.18,-.07,-.08,-.10,-.12,-.11,-.07,-.07,-.06,-.01,-.09,-.10
1954,-.23,-.19,-.13,-.27,-.33,-.34,-.28,-.34,-.28,-.18,-.20,-.26,-.25,-.24,-.18,-.24,-.32,-.22
1955,-.17,-.19,-.21,-.22,-.28,-.18,-.19,-.05,-.22,-.24,-.19,-.29,-.20,-.20,-.21,-.24,-.14,-.21
1956,-.22,-.17,-.19,-.29,-.29,-.12,.00,-.24,-.08,-.19,-.05,-.03,-.16,-.18,-.23,-.26,-.12,-.11
1957,-.04,-.01,.01,.10,.24,.18,-.06,.14,.05,-.04,.04,.06,.06,.05,-.03,.11,.09,.02
1958,.10,.17,.02,.01,.00,-.21,.05,-.21,-.12,.01,.03,-.15,-.02,-.01,.11,.01,-.12,-.03
1959,-.08,-.02,.03,.09,.04,-.07,.01,-.11,-.25,-.10,-.18,-.10,-.06,-.07,-.08,.05,-.06,-.17
1960,-.15,-.15,-.29,-.17,-.19,-.26,-.16,-.07,.02,.06,-.14,-.02,-.13,-.13,-.14,-.21,-.16,-.02
1961,-.03,.08,-.04,.12,.17,.05,-.04,-.04,.19,.03,-.01,-.16,.03,.04,.01,.09,-.01,.07
1962,-.17,-.08,-.10,-.13,-.15,.19,-.06,-.05,.03,-.10,.00,-.15,-.06,-.06,-.14,-.13,.03,-.02
1963,-.14,-.14,-.16,-.18,-.07,.14,.02,.30,.22,-.12,-.12,-.08,-.03,-.03,-.14,-.14,.15,-.01
1964,-.13,-.17,-.10,-.33,-.40,.01,.04,-.21,-.31,-.31,-.21,-.33,-.20,-.18,-.13,-.28,-.05,-.28
1965,-.15,.02,-.16,-.12,-.10,.04,-.08,.12,-.09,-.08,-.15,-.06,-.07,-.09,-.15,-.13,.03,-.11
1966,-.12,-.12,.07,-.04,-.19,-.04,.05,-.30,-.12,-.23,-.03,-.02,-.09,-.09,-.10,-.05,-.10,-.13
1967,.03,-.04,-.14,-.14,.04,-.10,-.01,-.05,-.10,-.12,-.14,-.12,-.08,-.07,-.01,-.08,-.05,-.12
1968,-.24,-.13,-.05,-.11,-.22,-.14,-.17,-.09,-.32,.18,.12,.05,-.09,-.11,-.16,-.13,-.13,-.01
1969,.22,.12,.22,.31,.26,.10,-.13,.03,.13,.16,.10,.18,.14,.13,.13,.26,.00,.13
1970,.20,.17,.19,.13,-.06,-.06,.07,-.15,.28,.25,.02,.06,.09,.10,.18,.09,-.05,.18
1971,.09,-.11,-.08,.06,.01,-.19,-.02,.14,.03,.06,-.13,-.04,-.02,-.01,.01,.00,-.03,-.02
1972,.09,.17,.04,.12,.09,.18,.09,.40,.31,.21,.25,.41,.20,.16,.07,.08,.23,.25
1973,.43,.21,.26,.36,.36,.21,.21,.08,.26,.27,.18,-.10,.23,.27,.35,.33,.17,.23
1974,.05,-.19,-.14,-.14,.11,.08,.06,.30,.00,.10,.05,.09,.03,.02,-.08,-.06,.15,.05
1975,.03,.06,.14,.02,.32,.05,.04,-.20,.02,-.06,-.05,-.13,.02,.04,.06,.16,-.03,-.03
1976,-.12,-.01,-.12,-.17,-.15,-.05,.07,-.03,-.01,.04,.21,.47,.01,-.04,-.09,-.15,.00,.08
1977,.53,.34,.22,.27,.42,.31,.32,.33,-.08,.09,.06,.05,.24,.27,.45,.31,.32,.02
1978,-.03,.16,.17,.26,.24,.11,.15,-.12,.12,.06,.11,.14,.11,.11,.06,.22,.05,.10
1979,.22,.16,.20,.47,.06,.21,.03,.30,.31,.29,.32,.41,.25,.23,.17,.25,.18,.31
1980,.38,.38,.52,.45,.44,.22,.30,.27,.31,.15,.38,.34,.34,.35,.39,.47,.26,.28
1981,.25,.21,.28,.25,.30,.30,.54,.52,.15,.02,.11,.28,.27,.27,.27,.28,.45,.09
1982,.24,.14,.01,.13,.27,.11,.24,.14,.22,.26,.46,.47,.22,.21,.22,.13,.16,.31
1983,.51,.51,.41,.49,.63,.36,.18,.46,.49,.22,.12,.22,.38,.40,.50,.51,.33,.27
1984,.28,.26,.34,.19,.42,-.03,.30,.33,.46,.19,.23,.33,.27,.27,.25,.32,.20,.29
1985,.36,.22,.35,.27,.20,.29,.15,.34,.23,.21,.08,.12,.24,.25,.30,.27,.26,.17
1986,.15,.42,.34,.29,.23,.10,.25,.27,.09,.22,.17,.21,.23,.22,.23,.29,.21,.16
1987,.39,.36,.37,.42,.29,.53,.55,.24,.32,.45,.49,.43,.40,.38,.32,.36,.44,.42
1988,.54,.43,.56,.41,.45,.40,.24,.52,.47,.52,.19,.15,.41,.43,.47,.47,.39,.39
1989,.16,.19,.25,.26,.13,.06,.37,.40,.45,.33,.28,.40,.27,.25,.17,.21,.28,.35
1990,.35,.33,.42,.41,.41,.27,.58,.28,.04,.41,.47,.43,.37,.36,.36,.41,.38,.31
1991,.26,.42,.25,.46,.36,.58,.52,.43,.52,.29,.27,.43,.40,.40,.37,.36,.51,.36
1992,.34,.30,.42,.39,.44,.47,.27,.23,.17,.29,.14,.22,.31,.32,.36,.42,.32,.20
1993,.30,.21,.33,.32,.26,.24,.38,.20,.29,.34,.29,.15,.28,.28,.24,.30,.27,.31
1994,.19,.09,.09,.34,.17,.45,.27,.11,.29,.31,.39,.42,.26,.24,.14,.20,.28,.33
1995,.29,.38,.34,.22,.13,.36,.54,.37,.24,.35,.31,.26,.31,.33,.36,.23,.42,.30
1996,.21,.37,.33,.49,.20,.26,.44,.77,.46,.42,.41,.39,.40,.39,.28,.34,.49,.43
1997,.30,.21,.29,.18,.27,.60,.28,.35,.54,.60,.71,.68,.42,.39,.30,.24,.41,.61
1998,.54,.72,.54,.40,.70,.82,.58,.59,.24,.30,.37,.35,.51,.54,.65,.55,.66,.30
1999,.37,.27,.35,.10,.16,.37,.41,.32,.36,.28,.20,.15,.28,.30,.33,.20,.37,.28
2000,.11,.21,.25,.24,.17,.35,.36,.38,.41,.25,.40,.29,.29,.27,.16,.22,.36,.35
2001,.34,.41,.34,.41,.46,.53,.55,.31,.47,.41,.46,.46,.43,.41,.35,.41,.46,.45
2002,.52,.42,.64,.65,.77,.38,.57,.52,.64,.55,.40,.47,.54,.54,.46,.69,.49,.53
2003,.56,.60,.53,.50,.49,.42,.48,.44,.47,.48,.41,.52,.49,.49,.54,.51,.45,.45
2004,.50,.53,.39,.52,.22,.41,.04,.36,.40,.52,.48,.57,.41,.41,.51,.38,.27,.47
2005,.54,.48,.54,.41,.49,.51,.48,.51,.53,.56,.41,.52,.50,.50,.53,.48,.50,.50
2006,.47,.51,.47,.34,.20,.51,.40,.72,.50,.45,.53,.43,.46,.47,.50,.34,.54,.49
2007,.57,.50,.49,.45,.66,.57,.54,.48,.52,.34,.35,.21,.47,.49,.50,.53,.53,.40
2008,.26,.17,.35,.42,.39,.37,.60,.35,.64,.50,.41,.43,.41,.39,.21,.39,.44,.52
2009,.47,.35,.48,.52,.65,.62,.79,.66,.59,.53,.75,.68,.59,.57,.41,.55,.69,.62
2010,.70,.73,.74,.56,.58,.53,.38,.49,.57,.53,.42,.39,.55,.58,.70,.63,.46,.51
2011,.42,.40,.41,.45,.41,.48,.68,.78,.39,.41,.51,.32,.47,.48,.40,.43,.65,.44
2012,.29,.39,.44,.40,.60,.35,.33,.56,.59,.69,.60,.61,.49,.46,.33,.48,.41,.63
2013,.57,.45,.53,.39,.44,.61,.51,.67,.82,.56,.54,.55,.55,.56,.54,.45,.60,.64
2014,.54,.38,.35,.51,.83,.55,.41,.75,.91,.68,.53,.47,.58,.58,.49,.57,.57,.71
2015,.53,.61,.59,.49,.55,.58,.56,.59,.53,.89,.76,.81,.62,.60,.54,.54,.57,.72
2016,.80,.79,.81,.72,.80,.50,.65,.92,.59,.73,.72,.69,.73,.74,.80,.78,.69,.68
2017,.66,.75,.81,.69,.90,.50,.66,.73,.51,.74,.54,.49,.66,.68,.70,.80,.63,.60
2018,.50,.46,.58,.79,.62,.67,.74,.67,.63,.80,.70,.76,.66,.64,.48,.66,.69,.71
2019,.66,.78,.78,.77,.71,.62,.84,.79,.64,.70,.81,.83,.74,.74,.73,.75,.75,.72
2020,.76,.78,.68,.84,.73,.69,.68,.61,.74,.54,.62,.40,.67,.71,.79,.75,.66,.63
2021,.36,.33,.57,.38,.54,.48,.76,.60,.79,.68,.57,.58,.55,.54,.36,.49,.62,.68
2022,.57,.61,.67,.58,.65,.71,.81,.72,.62,.61,.38,.53,.62,.63,.59,.63,.74,.54
2023,.46,.65,.82,.96,.76,.98,.95,.83,1.29,.82,.87,.87,.85,.83,.54,.84,.92,1.00
2024,.82,.94,1.01,.84,.88,.95,.99,1.17,.96,***,***,***,***,***,.88,.91,1.04,***
`,hi={},rt={showcaseCSV:void 0,radio:fr.GLOBAL,view:{geometry:{meshVisible:!1,facesVisible:!0,radialSegments:8,radius:1,radiusFactor:.9,tubularSegments:30},colors:{cold:Bo("cold"),zero:Bo("zero"),warm:Bo("warm")}},capture:{},imprint:()=>ze.dispatchEvent(ze.SHOW_IMPRINT)};function Bo(n){return{color:ar(n),modified:!1}}function ar(n){return jf(`--${n}-color`)}function jf(n){const t=window.getComputedStyle(document.body).getPropertyValue(n);return new Ye(t)}var Er,Rn,Ui,Dt;const $s=class $s{constructor(){ct(this,Er);ct(this,Rn);ct(this,Ui);ct(this,Dt);At(this,Dt,new kl({container:document.querySelector(".container-div"),autoPlace:!1})),me(this,Dt).domElement.id="gui",this.createShowcaseFolder(),this.createViewFolder(),this.createCaptureFolder(),this.createImprint(),this.createShowHideListener(),this.createSettingsIcon()}static styledColor(e){return jf(e)}static addRadioButtonsFolder(e,t,A,i,r=(s,a,o)=>{}){const s=e.addFolder(t);return $s.addRadioButtons(s,A,i,r),s}static addRadioButtons(e,t,A,i=(r,s,a)=>{}){const r={};Object.entries(A).forEach(s=>{const[a,o]=s,l=`option_${a}`;r[l]=t===a}),Object.keys(A).forEach(s=>{const a=`option_${s}`;e.add(r,a).name(s).listen().onChange(()=>{for(let o in r)r[o]=a===o;i(r,a,s)})})}createSettingsIcon(){const e=new c2(me(this,Dt));new $l(me(this,Dt).domElement,(t,A)=>{const i=t.target;A===0&&!(i!=null&&i.classList.contains("transition"))&&(i!=null&&i.classList.contains("closed"))&&(me(this,Dt).hide(),me(this,Dt).close(),e.toggle())})}createShowHideListener(){window.addEventListener("keydown",e=>{(e.key==="h"||e.key==="H")&&(me(this,Ui)?me(this,Dt).show():me(this,Dt).hide(),At(this,Ui,!me(this,Ui)))})}createShowcaseFolder(){hi[fr.GLOBAL]=h2,hi[fr.NORTHERN_HEMISSPHERE]=u2,hi[fr.SOUTHERN_HEMISSPHERE]=f2,At(this,Rn,$s.addRadioButtonsFolder(me(this,Dt),`Region: ${rt.radio}`,rt.radio,hi,(e,t,A)=>{rt.showcaseCSV=hi[A],ze.dispatchEvent(ze.CREATE_HELIX),me(this,Rn).title(`Region: ${A}`),me(this,Rn).close()})),rt.showcaseCSV=hi[rt.radio],me(this,Rn).close()}createViewFolder(){const e=me(this,Dt).addFolder("View");this.createViewGeometryFolder(e),this.createViewColorsFolder(e),e.close()}createViewGeometryFolder(e){const t=e.addFolder("Geometry"),A=rt.view.geometry;t.add(A,"meshVisible").name("Wireframe").onChange(()=>ze.dispatchEvent(ze.CREATE_HELIX)),t.add(A,"facesVisible").name("Faces").onChange(()=>ze.dispatchEvent(ze.CREATE_HELIX)),t.add(A,"tubularSegments").min(1).max(31).step(1).name("Monthly Segments").onChange(()=>ze.dispatchEvent(ze.CREATE_HELIX)),t.add(A,"radialSegments").min(3).max(32).step(1).name("Radius Segments").onChange(()=>ze.dispatchEvent(ze.CREATE_HELIX)),t.add(A,"radiusFactor").min(.1).max(2).name("Radius Factor").onChange(()=>ze.dispatchEvent(ze.CREATE_HELIX)),t.close()}createViewColorsFolder(e){const t=e.addFolder("Colors"),A=rt.view.colors;t.addColor(A.cold,"color").name("-1.0°C").listen().onChange(()=>this.dispatchColorEvent("cold")),t.addColor(A.zero,"color").name("0°C").listen().onChange(()=>this.dispatchColorEvent("zero")),t.addColor(A.warm,"color").name("+1.5°C").listen().onChange(()=>this.dispatchColorEvent("warm")),t.close()}initializeColors(){rt.view.colors.cold.modified||(rt.view.colors.cold.color=ar("cold")),rt.view.colors.zero.modified||(rt.view.colors.zero.color=ar("zero")),rt.view.colors.warm.modified||(rt.view.colors.warm.color=ar("warm"))}dispatchColorEvent(e){rt.view.colors[e].modified=!rt.view.colors[e].color.equals(ar(e)),ze.dispatchEvent(ze.CREATE_HELIX)}createCaptureFolder(){const e=me(this,Dt).addFolder("Screen capture");e.close(),At(this,Er,e)}createImprint(){new n2().isAvailable().then(A=>{A&&me(this,Dt).add(rt,"imprint").name("Imprint")})}get showcaseCSV(){return rt.showcaseCSV}get radialSegments(){return Math.floor(rt.view.geometry.radialSegments)}get radiusFactor(){return rt.view.geometry.radiusFactor}get tubularSegments(){return Math.floor(rt.view.geometry.tubularSegments)}get showFaces(){return rt.view.geometry.facesVisible}get showWireframe(){return rt.view.geometry.meshVisible}get cold(){return rt.view.colors.cold.color}get zero(){return rt.view.colors.zero.color}get warm(){return rt.view.colors.warm.color}captureSettings(){return{folder:me(this,Er),property:rt.capture}}};Er=new WeakMap,Rn=new WeakMap,Ui=new WeakMap,Dt=new WeakMap;let _r=$s;const d2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512">
    <path d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5 S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1 s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0 c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95 c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41 L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41 s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06 c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"/>
</svg>`,p2={id:"light",svg:d2},g2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512">
    <path d="M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"/>
</svg>`,m2={id:"dark",svg:g2},wo="dark",vo="light";var BA,yi;class B2{constructor(e){ct(this,BA);ct(this,yi);At(this,yi,new jl({container:(e==null?void 0:e.container)||document.body,icons:[p2,m2],classToken:"themes",event:ze.CHANGE_THEME.toString()})),this.initTheme(),this.registerOnThemeChange(document.body)}initTheme(){At(this,BA,this.preferredTheme()),document.body.classList.add(me(this,BA)?wo:vo),me(this,yi).show(me(this,BA)?0:1),ze.dispatchEvent(ze.THEME_CHANGED)}preferredTheme(){return window.matchMedia("(prefers-color-scheme: dark)").matches}registerOnThemeChange(e){e.addEventListener(ze.CHANGE_THEME.toString(),()=>{this.onThemeChange(e)})}onThemeChange(e){const t=me(this,BA)?wo:vo,A=me(this,BA)?vo:wo;e.classList.replace(t,A)||e.classList.add(A),At(this,BA,!me(this,BA)),me(this,yi).toggle(),ze.dispatchEvent(ze.THEME_CHANGED)}}BA=new WeakMap,yi=new WeakMap;const w2=`<?xml version="1.0" ?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="512" height="512">
    <path d="M22 34h4v-12h-4v12zm2-30c-11.05 0-20 8.95-20 20s8.95 20 20 20 20-8.95 20-20-8.95-20-20-20zm0 36c-8.82 0-16-7.18-16-16s7.18-16 16-16 16 7.18 16 16-7.18 16-16 16zm-2-22h4v-4h-4v4z"/>
</svg>`,v2={id:"info",svg:w2},_2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512">
    <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"/>
</svg>`,C2={id:"close",svg:_2};var Dn;class E2{constructor(e){ct(this,Dn);At(this,Dn,new jl({container:e,icons:[v2,C2],classToken:"info-button",event:"info-clicked"})),me(this,Dn).show(0),me(this,Dn).addOnClickListener(()=>this.infoDivShowHide())}infoDivShowHide(){const e=document.querySelector("#info-div");e==null||e.classList.toggle("show");const t=document.querySelector("canvas");t==null||t.classList.toggle("transparent"),me(this,Dn).toggle()}}Dn=new WeakMap;const du={type:"change"},ec={type:"start"},ed={type:"end"},ys=new Iu,pu=new en,x2=Math.cos(70*ep.DEG2RAD),_t=new R,Ot=2*Math.PI,et={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},_o=1e-6;class U2 extends m1{constructor(e,t=null){super(e,t),this.state=et.NONE,this.enabled=!0,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Bi.ROTATE,MIDDLE:Bi.DOLLY,RIGHT:Bi.PAN},this.touches={ONE:di.ROTATE,TWO:di.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new Vn,this._lastTargetPosition=new R,this._quat=new Vn().setFromUnitVectors(e.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ch,this._sphericalDelta=new ch,this._scale=1,this._panOffset=new R,this._rotateStart=new De,this._rotateEnd=new De,this._rotateDelta=new De,this._panStart=new De,this._panEnd=new De,this._panDelta=new De,this._dollyStart=new De,this._dollyEnd=new De,this._dollyDelta=new De,this._dollyDirection=new R,this._mouse=new De,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=S2.bind(this),this._onPointerDown=y2.bind(this),this._onPointerUp=M2.bind(this),this._onContextMenu=R2.bind(this),this._onMouseWheel=T2.bind(this),this._onKeyDown=Q2.bind(this),this._onTouchStart=I2.bind(this),this._onTouchMove=L2.bind(this),this._onMouseDown=F2.bind(this),this._onMouseMove=b2.bind(this),this._interceptControlDown=D2.bind(this),this._interceptControlUp=H2.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(du),this.update(),this.state=et.NONE}update(e=null){const t=this.object.position;_t.copy(t).sub(this.target),_t.applyQuaternion(this._quat),this._spherical.setFromVector3(_t),this.autoRotate&&this.state===et.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let A=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(A)&&isFinite(i)&&(A<-Math.PI?A+=Ot:A>Math.PI&&(A-=Ot),i<-Math.PI?i+=Ot:i>Math.PI&&(i-=Ot),A<=i?this._spherical.theta=Math.max(A,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(A+i)/2?Math.max(A,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=s!=this._spherical.radius}if(_t.setFromSpherical(this._spherical),_t.applyQuaternion(this._quatInverse),t.copy(this.target).add(_t),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){const a=_t.length();s=this._clampDistance(a*this._scale);const o=a-s;this.object.position.addScaledVector(this._dollyDirection,o),this.object.updateMatrixWorld(),r=!!o}else if(this.object.isOrthographicCamera){const a=new R(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=o!==this.object.zoom;const l=new R(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),s=_t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(ys.origin.copy(this.object.position),ys.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ys.direction))<x2?this.object.lookAt(this.target):(pu.setFromNormalAndCoplanarPoint(this.object.up,this.target),ys.intersectPlane(pu,this.target))))}else if(this.object.isOrthographicCamera){const s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>_o||8*(1-this._lastQuaternion.dot(this.object.quaternion))>_o||this._lastTargetPosition.distanceToSquared(this.target)>_o?(this.dispatchEvent(du),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Ot/60*this.autoRotateSpeed*e:Ot/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){_t.setFromMatrixColumn(t,0),_t.multiplyScalar(-e),this._panOffset.add(_t)}_panUp(e,t){this.screenSpacePanning===!0?_t.setFromMatrixColumn(t,1):(_t.setFromMatrixColumn(t,0),_t.crossVectors(this.object.up,_t)),_t.multiplyScalar(e),this._panOffset.add(_t)}_pan(e,t){const A=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;_t.copy(i).sub(this.target);let r=_t.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/A.clientHeight,this.object.matrix),this._panUp(2*t*r/A.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/A.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/A.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const A=this.domElement.getBoundingClientRect(),i=e-A.left,r=t-A.top,s=A.width,a=A.height;this._mouse.x=i/s*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ot*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ot*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Ot*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Ot*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Ot*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Ot*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),A=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(A,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),A=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(A,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),A=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(A*A+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const A=this._getSecondPointerPosition(e),i=.5*(e.pageX+A.x),r=.5*(e.pageY+A.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ot*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ot*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),A=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(A,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),A=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(A*A+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const s=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(s,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new De,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,A={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:A.deltaY*=16;break;case 2:A.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(A.deltaY*=10),A}}function y2(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function S2(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function M2(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ed),this.state=et.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function F2(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Bi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=et.DOLLY;break;case Bi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=et.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=et.ROTATE}break;case Bi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=et.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=et.PAN}break;default:this.state=et.NONE}this.state!==et.NONE&&this.dispatchEvent(ec)}function b2(n){switch(this.state){case et.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case et.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case et.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function T2(n){this.enabled===!1||this.enableZoom===!1||this.state!==et.NONE||(n.preventDefault(),this.dispatchEvent(ec),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(ed))}function Q2(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function I2(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case di.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=et.TOUCH_ROTATE;break;case di.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=et.TOUCH_PAN;break;default:this.state=et.NONE}break;case 2:switch(this.touches.TWO){case di.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=et.TOUCH_DOLLY_PAN;break;case di.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=et.TOUCH_DOLLY_ROTATE;break;default:this.state=et.NONE}break;default:this.state=et.NONE}this.state!==et.NONE&&this.dispatchEvent(ec)}function L2(n){switch(this._trackPointer(n),this.state){case et.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case et.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case et.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case et.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=et.NONE}}function R2(n){this.enabled!==!1&&n.preventDefault()}function D2(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function H2(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class P2{constructor(e,t=0,A=!0){if(e){const{title:i,header:r,rows:s}=this.extract(e);this._title=i,this._header=r,this._rows=s}}extract(e){const t=e.toString().split(/\r?\n/),A=t[0],i=t[1].split(","),r=t[t.length-1]===""?t.length-1:t.length;return{title:A,header:i,rows:t.slice(1,r)}}get columnCount(){return this.header?this.header.length:this.rows[0].length}get rowCount(){return this.rows.length}getNumber(e,t){const A=this.rows[e];return parseFloat(A.split(",")[t])}get title(){return this._title}get header(){return this._header}get rows(){return this._rows}}class tc extends mn{constructor(e,t=30,A=1,i=8,r=!1){super(),this.type="HelixGeometry",this.parameters={path:e,tubularSegments:t,radius:A,radialSegments:i,closed:r};const s=e.computeFrenetFrames(t,r);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;const a=new R,o=new R,l=new De;let c=new R;const h=[],u=[],d=[],g=[],m=[];p(),this.setIndex(g),this.setAttribute("position",new uA(h,3)),this.setAttribute("normal",new uA(u,3)),this.setAttribute("uv",new uA(d,2)),this.setAttribute("vColors",new uA(m,3));function p(){for(let v=0;v<t;v++)f(v);f(r===!1?t:0),U(),E()}function f(v){const b=e.getUtoTmapping(v/t);c=e.getPoint(b,c);const y=e.getColor(b),S=s.normals[v],F=s.binormals[v];for(let C=0;C<=i;C++){const _=C/i*Math.PI*2,M=Math.sin(_),G=-Math.cos(_);o.x=G*S.x+M*F.x,o.y=G*S.y+M*F.y,o.z=G*S.z+M*F.z,o.normalize(),u.push(o.x,o.y,o.z),a.x=c.x+A*o.x,a.y=c.y+A*o.y,a.z=c.z+A*o.z,h.push(a.x,a.y,a.z),m.push(y.r,y.g,y.b)}}function E(){for(let v=1;v<=t;v++)for(let b=1;b<=i;b++){const y=(i+1)*(v-1)+(b-1),S=(i+1)*v+(b-1),F=(i+1)*v+b,C=(i+1)*(v-1)+b;g.push(y,S,C),g.push(S,F,C)}}function U(){for(let v=0;v<=t;v++)for(let b=0;b<=i;b++)l.x=v/t,l.y=b/i,d.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new tc(new Curves[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}const Il=12,td=[],Ad=[];var xr,Ur,yr,Si,Sr,RA;class N2{constructor(e,t=-1,A=1.5,i=.4,r=1,s=2.5){ct(this,xr);ct(this,Ur);ct(this,yr);ct(this,Si);ct(this,Sr);ct(this,RA);this.settings=e,this.csv=new P2(e.showcaseCSV),this.helixConfiguration={minT:t,maxT:A,minR:i,maxR:r,height:s},At(this,yr,e.cold),At(this,Si,e.zero),At(this,Sr,e.warm),this.curve=[]}createMesh(e={wireframe:!1,vertexColors:!0}){this.createCurve();const t=this.createGeometry();e.wireframe&&(e.color=_r.styledColor("--wireframe-color"));const[A,i,r]=me(this,xr).toArray();t.translate(-A,-i,-r);const s=new Vl(e);return At(this,Ur,new _A(t,s)),me(this,Ur)}createCurve(){if(this.curve.length===0){this.years=this.csv.rowCount;for(let e=0;e<this.years;e++)for(let t=0;t<12;t++){const A=this.helixPoint(e,t);A&&this.curve.push(A)}At(this,xr,this.centerOfGravity())}}centerOfGravity(){if(!this.curve||this.curve.length===0)return new R(0,0,0);let e=0,t=0,A=0;const i=this.curve.length;return this.curve.forEach((r,s)=>{e+=r.radius*r.cosX,t+=r.radius*r.sinX,A+=s/i*this.height}),new R(e/i,t/i,A/i)}createGeometry(){const e=this.settings.radiusFactor*this.helixConfiguration.height/this.years,t=new tc(new O2(this),this.settings.tubularSegments*(this.curve.length-1),e,this.settings.radialSegments,!1),A=t.getAttribute("vColors"),i=new dA(new Float32Array(A.array),3);return t.setAttribute("color",i),t}helixPoint(e,t){const A=this.csv.getNumber(e,t+1);if(A){const i=nd(this.helixConfiguration.minT,this.helixConfiguration.maxT,this.helixConfiguration.minR,this.helixConfiguration.maxR,A),r=new Ye;return A<0?r.lerpColors(me(this,Si),me(this,yr),Math.abs(A)):r.lerpColors(me(this,Si),me(this,Sr),A),{sinX:td[t],cosX:Ad[t],radius:i,temperature:A,color:r}}}get height(){return this.helixConfiguration.height}get length(){return this.curve.length/Il}curveIndex(e){return Math.floor((this.curve.length-1)*e)}info(e){return this.curve[this.curveIndex(e)]}createTitleDiv(e){const t="heading-div",A=e.querySelector(`.${t}`);return A&&e.removeChild(A),me(this,RA)||(At(this,RA,document.createElement("DIV")),me(this,RA).setAttribute("class",t),e.appendChild(me(this,RA))),me(this,RA).innerText=this.csv.title,me(this,RA)}}xr=new WeakMap,Ur=new WeakMap,yr=new WeakMap,Si=new WeakMap,Sr=new WeakMap,RA=new WeakMap;class O2 extends g1{constructor(e){super(),this.helix=e}getPoint(e,t=new R){const A=2*Math.PI*this.helix.length*e,i=this.helix.curveIndex(e),r=this.helix.curve[i],s=this.helix.curve[i+1]||r,a=i/(this.helix.curve.length-1),o=(i+1)/(this.helix.curve.length-1),l=nd(a,o,r.radius,s.radius,e),c=l*Math.cos(A),h=l*Math.sin(A),u=this.helix.height*e;return t.set(c,h,u)}getColor(e){const t=this.helix.curveIndex(e),A=this.helix.curve[t],i=this.helix.curve[t+1]||A,r=t/(this.helix.curve.length-1),s=(t+1)/(this.helix.curve.length-1);return new Ye().lerpColors(A.color,i.color,(e-r)/(s-r))}}for(let n=0;n<Il;n++){const e=2*Math.PI*n/Il;td.push(Math.sin(e)),Ad.push(Math.cos(e))}function nd(n,e,t,A,i){return e-n===0?(t+A)/2:(i-n)*(A-t)/(e-n)+t}HTMLCanvasElement.prototype.getContext=function(n){return function(e,t){return t=t||{},t.preserveDrawingBuffer=!0,n.call(this,e,t)}}(HTMLCanvasElement.prototype.getContext);var Mi,Fi,Hn,js,id;class G2{constructor(e,t={All:void 0,Helix:void 0}){ct(this,js);ct(this,Mi);ct(this,Fi);ct(this,Hn);At(this,Mi,()=>document.body),hc(this,js,id).call(this,e,t),document.addEventListener("keydown",A=>{A.altKey&&A.key==="s"&&(A.stopPropagation(),A.preventDefault(),this.capture())})}capture(e=me(this,Mi)){console.log(`screenCapture ${e}`);const t=e();if(!t)throw new Error("No element to capture");setTimeout(()=>{const i=window.getComputedStyle(document.body).getPropertyValue("background-color");$f(t,{backgroundColor:i}).then(r=>{const s=document.createElement("a");s.href=r.toDataURL(),s.download="climate-helix.png",s.click()})},100)}}Mi=new WeakMap,Fi=new WeakMap,Hn=new WeakMap,js=new WeakSet,id=function(e,t){const A={};At(this,Fi,t);for(const[s,a]of Object.entries(t))A[s]=void 0;const i=e.folder,r=e.property;r.selection="All",At(this,Hn,"All"),At(this,Mi,()=>(console.log(me(this,Hn)),console.log(me(this,Fi)),me(this,Fi)[me(this,Hn)])),r.on_capture_clicked=()=>this.capture(),_r.addRadioButtons(i,r.selection,A,(s,a,o)=>{console.log(`${s}, ${a}, ${o}`),At(this,Hn,o)}),i.add(r,"on_capture_clicked").name("Click or press 'alt s'")};const V2=`<p>The 3D helix visualizes differences to a temperature mean for different regions <a target="_blank" rel="noopener noreferrer" href="https://data.giss.nasa.gov/gistemp/">[2]</a>.
    Temperature data are shown from 1880 until October 2024.</p>
<p>Each loop within the helix represents a year, divided into monthly segments.
    The distance from the center is proportional to the difference to the mean temperature for that month.</p>
<hr>
<h3>References</h3>
<ol>
    <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/mkuehne-git/climate-helix">Climate-Helix
            on Github</a></li>
    <li><a target="_blank" rel="noopener noreferrer" href="https://data.giss.nasa.gov/gistemp/">GISS Surface Temperature
        Analysis (GISTEMP v4)</a></li>
</ol>`,pa=document.createElement("DIV"),rd=".container-div";pa.setAttribute("class","container-div");document.body.appendChild(pa);const dr=new _r,K2=new B2({container:pa});let mi,In,pr,An,Ss,Ms;function k2(){pr=new p1,An=new d1({antialias:!0}),An.setPixelRatio(window.devicePixelRatio);const n=window.innerWidth,e=window.innerHeight;An.setSize(n,e),pa.appendChild(An.domElement),z2();const t=n/e;In=new eA(50,t),In.position.set(0,0,5.5),pr.add(In),mi=new ji,pr.add(mi),new U2(In,An.domElement).update(),window.addEventListener("resize",J2),window.addEventListener(ze.CREATE_HELIX,sd),document.body.addEventListener(ze.THEME_CHANGED.toString(),Y2);const i={All:document.body,Helix:An.domElement};new G2(dr.captureSettings(),i),W2(),X2(),ze.dispatchEvent(ze.THEME_CHANGED),ad()}function z2(){return new $l(document.body,n=>{const t=window.getComputedStyle(document.body).getPropertyValue("background-color");pr.background=new Ye(t)})}function sd(){Ss&&mi.remove(Ss),Ms&&mi.remove(Ms);const n=new N2(dr);dr.showFaces&&(Ss=n.createMesh(),mi.add(Ss)),dr.showWireframe&&(Ms=n.createMesh({wireframe:!0,vertexColors:!1}),mi.add(Ms));const e=document.querySelector(rd);n.createTitleDiv(e)}function W2(){const n=document.querySelector(rd)||document.body;new E2(n)}function X2(){const n=document.createElement("DIV");n.setAttribute("id","info-div"),n.innerHTML=V2;const e=document.querySelector(".info-button");e==null||e.insertAdjacentElement("beforebegin",n);const t=document.createElement("SPAN");t.setAttribute("id","version-info"),t.innerHTML="v0.3.3",e==null||e.insertAdjacentElement("beforebegin",t)}function ad(){requestAnimationFrame(ad),An.render(pr,In)}function Y2(){dr.initializeColors(),sd()}function J2(){In.aspect=window.innerWidth/window.innerHeight,In.updateProjectionMatrix(),An.setSize(window.innerWidth,window.innerHeight)}k2();K2.initTheme();
