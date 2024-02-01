var fa=(n,e,A)=>{if(!e.has(n))throw TypeError("Cannot "+A)};var Be=(n,e,A)=>(fa(n,e,"read from private field"),A?A.call(n):e.get(n)),oA=(n,e,A)=>{if(e.has(n))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(n):e.set(n,A)},nA=(n,e,A,t)=>(fa(n,e,"write to private field"),t?t.call(n,A):e.set(n,A),A);var Cl=(n,e,A)=>(fa(n,e,"access private method"),A);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function A(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(i){if(i.ep)return;i.ep=!0;const r=A(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $o="161",Pn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Nn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Jf=0,El=1,Zf=2,$u=1,qf=2,Tt=3,on=0,zA=1,Lt=2,tn=0,gi=1,xl=2,Ul=3,yl=4,$f=5,vn=100,jf=101,ed=102,Sl=103,Ml=104,Ad=200,td=201,nd=202,id=203,Bo=204,wo=205,rd=206,sd=207,ad=208,od=209,ld=210,cd=211,ud=212,hd=213,fd=214,dd=0,pd=1,gd=2,Ss=3,md=4,Bd=5,wd=6,vd=7,ju=0,_d=1,Cd=2,nn=0,Ed=1,xd=2,Ud=3,yd=4,Sd=5,Md=6,eh=300,Si=301,Mi=302,vo=303,_o=304,Ws=306,Co=1e3,ct=1001,Eo=1002,VA=1003,Fl=1004,Di=1005,KA=1006,da=1007,En=1008,rn=1009,Fd=1010,bd=1011,jo=1012,Ah=1013,$t=1014,It=1015,cr=1016,th=1017,nh=1018,bn=1020,Td=1021,ut=1023,Qd=1024,Ld=1025,Tn=1026,Fi=1027,Id=1028,ih=1029,Rd=1030,rh=1031,sh=1033,pa=33776,ga=33777,ma=33778,Ba=33779,bl=35840,Tl=35841,Ql=35842,Ll=35843,ah=36196,Il=37492,Rl=37496,Dl=37808,Hl=37809,Pl=37810,Nl=37811,Ol=37812,Gl=37813,Vl=37814,Kl=37815,kl=37816,zl=37817,Wl=37818,Xl=37819,Yl=37820,Jl=37821,wa=36492,Zl=36494,ql=36495,Dd=36283,$l=36284,jl=36285,ec=36286,oh=3e3,Qn=3001,Hd=3200,Pd=3201,Nd=0,Od=1,nt="",FA="srgb",Ht="srgb-linear",el="display-p3",Xs="display-p3-linear",Ms="linear",aA="srgb",Fs="rec709",bs="p3",On=7680,Ac=519,Gd=512,Vd=513,Kd=514,lh=515,kd=516,zd=517,Wd=518,Xd=519,tc=35044,nc="300 es",xo=1035,Rt=2e3,Ts=2001;class Hn{addEventListener(e,A){this._listeners===void 0&&(this._listeners={});const t=this._listeners;t[e]===void 0&&(t[e]=[]),t[e].indexOf(A)===-1&&t[e].push(A)}hasEventListener(e,A){if(this._listeners===void 0)return!1;const t=this._listeners;return t[e]!==void 0&&t[e].indexOf(A)!==-1}removeEventListener(e,A){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(A);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const i=t.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,e);e.target=null}}}const LA=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ic=1234567;const er=Math.PI/180,ur=180/Math.PI;function Qi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,A=Math.random()*4294967295|0,t=Math.random()*4294967295|0;return(LA[n&255]+LA[n>>8&255]+LA[n>>16&255]+LA[n>>24&255]+"-"+LA[e&255]+LA[e>>8&255]+"-"+LA[e>>16&15|64]+LA[e>>24&255]+"-"+LA[A&63|128]+LA[A>>8&255]+"-"+LA[A>>16&255]+LA[A>>24&255]+LA[t&255]+LA[t>>8&255]+LA[t>>16&255]+LA[t>>24&255]).toLowerCase()}function UA(n,e,A){return Math.max(e,Math.min(A,n))}function Al(n,e){return(n%e+e)%e}function Yd(n,e,A,t,i){return t+(n-e)*(i-t)/(A-e)}function Jd(n,e,A){return n!==e?(A-n)/(e-n):0}function Ar(n,e,A){return(1-A)*n+A*e}function Zd(n,e,A,t){return Ar(n,e,1-Math.exp(-A*t))}function qd(n,e=1){return e-Math.abs(Al(n,e*2)-e)}function $d(n,e,A){return n<=e?0:n>=A?1:(n=(n-e)/(A-e),n*n*(3-2*n))}function jd(n,e,A){return n<=e?0:n>=A?1:(n=(n-e)/(A-e),n*n*n*(n*(n*6-15)+10))}function ep(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Ap(n,e){return n+Math.random()*(e-n)}function tp(n){return n*(.5-Math.random())}function np(n){n!==void 0&&(ic=n);let e=ic+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ip(n){return n*er}function rp(n){return n*ur}function Uo(n){return(n&n-1)===0&&n!==0}function sp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Qs(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ap(n,e,A,t,i){const r=Math.cos,s=Math.sin,a=r(A/2),o=s(A/2),l=r((e+t)/2),c=s((e+t)/2),u=r((e-t)/2),h=s((e-t)/2),p=r((t-e)/2),g=s((t-e)/2);switch(i){case"XYX":n.set(a*c,o*u,o*h,a*l);break;case"YZY":n.set(o*h,a*c,o*u,a*l);break;case"ZXZ":n.set(o*u,o*h,a*c,a*l);break;case"XZX":n.set(a*c,o*g,o*p,a*l);break;case"YXY":n.set(o*p,a*c,o*g,a*l);break;case"ZYZ":n.set(o*g,o*p,a*c,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function li(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function PA(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const op={DEG2RAD:er,RAD2DEG:ur,generateUUID:Qi,clamp:UA,euclideanModulo:Al,mapLinear:Yd,inverseLerp:Jd,lerp:Ar,damp:Zd,pingpong:qd,smoothstep:$d,smootherstep:jd,randInt:ep,randFloat:Ap,randFloatSpread:tp,seededRandom:np,degToRad:ip,radToDeg:rp,isPowerOfTwo:Uo,ceilPowerOfTwo:sp,floorPowerOfTwo:Qs,setQuaternionFromProperEuler:ap,normalize:PA,denormalize:li};class Ie{constructor(e=0,A=0){Ie.prototype.isVector2=!0,this.x=e,this.y=A}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,A){return this.x=e,this.y=A,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,A){switch(e){case 0:this.x=A;break;case 1:this.y=A;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,A){return this.x=e.x+A.x,this.y=e.y+A.y,this}addScaledVector(e,A){return this.x+=e.x*A,this.y+=e.y*A,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,A){return this.x=e.x-A.x,this.y=e.y-A.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const A=this.x,t=this.y,i=e.elements;return this.x=i[0]*A+i[3]*t+i[6],this.y=i[1]*A+i[4]*t+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,A){return this.x=Math.max(e.x,Math.min(A.x,this.x)),this.y=Math.max(e.y,Math.min(A.y,this.y)),this}clampScalar(e,A){return this.x=Math.max(e,Math.min(A,this.x)),this.y=Math.max(e,Math.min(A,this.y)),this}clampLength(e,A){const t=this.length();return this.divideScalar(t||1).multiplyScalar(Math.max(e,Math.min(A,t)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const A=Math.sqrt(this.lengthSq()*e.lengthSq());if(A===0)return Math.PI/2;const t=this.dot(e)/A;return Math.acos(UA(t,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const A=this.x-e.x,t=this.y-e.y;return A*A+t*t}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,A){return this.x+=(e.x-this.x)*A,this.y+=(e.y-this.y)*A,this}lerpVectors(e,A,t){return this.x=e.x+(A.x-e.x)*t,this.y=e.y+(A.y-e.y)*t,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,A=0){return this.x=e[A],this.y=e[A+1],this}toArray(e=[],A=0){return e[A]=this.x,e[A+1]=this.y,e}fromBufferAttribute(e,A){return this.x=e.getX(A),this.y=e.getY(A),this}rotateAround(e,A){const t=Math.cos(A),i=Math.sin(A),r=this.x-e.x,s=this.y-e.y;return this.x=r*t-s*i+e.x,this.y=r*i+s*t+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,A,t,i,r,s,a,o,l){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,A,t,i,r,s,a,o,l)}set(e,A,t,i,r,s,a,o,l){const c=this.elements;return c[0]=e,c[1]=i,c[2]=a,c[3]=A,c[4]=r,c[5]=o,c[6]=t,c[7]=s,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const A=this.elements,t=e.elements;return A[0]=t[0],A[1]=t[1],A[2]=t[2],A[3]=t[3],A[4]=t[4],A[5]=t[5],A[6]=t[6],A[7]=t[7],A[8]=t[8],this}extractBasis(e,A,t){return e.setFromMatrix3Column(this,0),A.setFromMatrix3Column(this,1),t.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const A=e.elements;return this.set(A[0],A[4],A[8],A[1],A[5],A[9],A[2],A[6],A[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,A){const t=e.elements,i=A.elements,r=this.elements,s=t[0],a=t[3],o=t[6],l=t[1],c=t[4],u=t[7],h=t[2],p=t[5],g=t[8],m=i[0],d=i[3],f=i[6],C=i[1],v=i[4],E=i[7],b=i[2],U=i[5],y=i[8];return r[0]=s*m+a*C+o*b,r[3]=s*d+a*v+o*U,r[6]=s*f+a*E+o*y,r[1]=l*m+c*C+u*b,r[4]=l*d+c*v+u*U,r[7]=l*f+c*E+u*y,r[2]=h*m+p*C+g*b,r[5]=h*d+p*v+g*U,r[8]=h*f+p*E+g*y,this}multiplyScalar(e){const A=this.elements;return A[0]*=e,A[3]*=e,A[6]*=e,A[1]*=e,A[4]*=e,A[7]*=e,A[2]*=e,A[5]*=e,A[8]*=e,this}determinant(){const e=this.elements,A=e[0],t=e[1],i=e[2],r=e[3],s=e[4],a=e[5],o=e[6],l=e[7],c=e[8];return A*s*c-A*a*l-t*r*c+t*a*o+i*r*l-i*s*o}invert(){const e=this.elements,A=e[0],t=e[1],i=e[2],r=e[3],s=e[4],a=e[5],o=e[6],l=e[7],c=e[8],u=c*s-a*l,h=a*o-c*r,p=l*r-s*o,g=A*u+t*h+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=u*m,e[1]=(i*l-c*t)*m,e[2]=(a*t-i*s)*m,e[3]=h*m,e[4]=(c*A-i*o)*m,e[5]=(i*r-a*A)*m,e[6]=p*m,e[7]=(t*o-l*A)*m,e[8]=(s*A-t*r)*m,this}transpose(){let e;const A=this.elements;return e=A[1],A[1]=A[3],A[3]=e,e=A[2],A[2]=A[6],A[6]=e,e=A[5],A[5]=A[7],A[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const A=this.elements;return e[0]=A[0],e[1]=A[3],e[2]=A[6],e[3]=A[1],e[4]=A[4],e[5]=A[7],e[6]=A[2],e[7]=A[5],e[8]=A[8],this}setUvTransform(e,A,t,i,r,s,a){const o=Math.cos(r),l=Math.sin(r);return this.set(t*o,t*l,-t*(o*s+l*a)+s+e,-i*l,i*o,-i*(-l*s+o*a)+a+A,0,0,1),this}scale(e,A){return this.premultiply(va.makeScale(e,A)),this}rotate(e){return this.premultiply(va.makeRotation(-e)),this}translate(e,A){return this.premultiply(va.makeTranslation(e,A)),this}makeTranslation(e,A){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,A,0,0,1),this}makeRotation(e){const A=Math.cos(e),t=Math.sin(e);return this.set(A,-t,0,t,A,0,0,0,1),this}makeScale(e,A){return this.set(e,0,0,0,A,0,0,0,1),this}equals(e){const A=this.elements,t=e.elements;for(let i=0;i<9;i++)if(A[i]!==t[i])return!1;return!0}fromArray(e,A=0){for(let t=0;t<9;t++)this.elements[t]=e[t+A];return this}toArray(e=[],A=0){const t=this.elements;return e[A]=t[0],e[A+1]=t[1],e[A+2]=t[2],e[A+3]=t[3],e[A+4]=t[4],e[A+5]=t[5],e[A+6]=t[6],e[A+7]=t[7],e[A+8]=t[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const va=new ke;function ch(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ls(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function lp(){const n=Ls("canvas");return n.style.display="block",n}const rc={};function mi(n){n in rc||(rc[n]=!0,console.warn(n))}const sc=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ac=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Fr={[Ht]:{transfer:Ms,primaries:Fs,toReference:n=>n,fromReference:n=>n},[FA]:{transfer:aA,primaries:Fs,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Xs]:{transfer:Ms,primaries:bs,toReference:n=>n.applyMatrix3(ac),fromReference:n=>n.applyMatrix3(sc)},[el]:{transfer:aA,primaries:bs,toReference:n=>n.convertSRGBToLinear().applyMatrix3(ac),fromReference:n=>n.applyMatrix3(sc).convertLinearToSRGB()}},cp=new Set([Ht,Xs]),eA={enabled:!0,_workingColorSpace:Ht,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!cp.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,A){if(this.enabled===!1||e===A||!e||!A)return n;const t=Fr[e].toReference,i=Fr[A].fromReference;return i(t(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Fr[n].primaries},getTransfer:function(n){return n===nt?Ms:Fr[n].transfer}};function Bi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function _a(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Gn;class uh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let A;if(e instanceof HTMLCanvasElement)A=e;else{Gn===void 0&&(Gn=Ls("canvas")),Gn.width=e.width,Gn.height=e.height;const t=Gn.getContext("2d");e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),A=Gn}return A.width>2048||A.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),A.toDataURL("image/jpeg",.6)):A.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const A=Ls("canvas");A.width=e.width,A.height=e.height;const t=A.getContext("2d");t.drawImage(e,0,0,e.width,e.height);const i=t.getImageData(0,0,e.width,e.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=Bi(r[s]/255)*255;return t.putImageData(i,0,0),A}else if(e.data){const A=e.data.slice(0);for(let t=0;t<A.length;t++)A instanceof Uint8Array||A instanceof Uint8ClampedArray?A[t]=Math.floor(Bi(A[t]/255)*255):A[t]=Bi(A[t]);return{data:A,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let up=0;class hh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=Qi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const A=e===void 0||typeof e=="string";if(!A&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const t={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,a=i.length;s<a;s++)i[s].isDataTexture?r.push(Ca(i[s].image)):r.push(Ca(i[s]))}else r=Ca(i);t.url=r}return A||(e.images[this.uuid]=t),t}}function Ca(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?uh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hp=0;class WA extends Hn{constructor(e=WA.DEFAULT_IMAGE,A=WA.DEFAULT_MAPPING,t=ct,i=ct,r=KA,s=En,a=ut,o=rn,l=WA.DEFAULT_ANISOTROPY,c=nt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=Qi(),this.name="",this.source=new hh(e),this.mipmaps=[],this.mapping=A,this.channel=0,this.wrapS=t,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=o,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(mi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===Qn?FA:nt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const A=e===void 0||typeof e=="string";if(!A&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const t={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(t.userData=this.userData),A||(e.textures[this.uuid]=t),t}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==eh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Co:e.x=e.x-Math.floor(e.x);break;case ct:e.x=e.x<0?0:1;break;case Eo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Co:e.y=e.y-Math.floor(e.y);break;case ct:e.y=e.y<0?0:1;break;case Eo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return mi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===FA?Qn:oh}set encoding(e){mi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Qn?FA:nt}}WA.DEFAULT_IMAGE=null;WA.DEFAULT_MAPPING=eh;WA.DEFAULT_ANISOTROPY=1;class bA{constructor(e=0,A=0,t=0,i=1){bA.prototype.isVector4=!0,this.x=e,this.y=A,this.z=t,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,A,t,i){return this.x=e,this.y=A,this.z=t,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,A){switch(e){case 0:this.x=A;break;case 1:this.y=A;break;case 2:this.z=A;break;case 3:this.w=A;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,A){return this.x=e.x+A.x,this.y=e.y+A.y,this.z=e.z+A.z,this.w=e.w+A.w,this}addScaledVector(e,A){return this.x+=e.x*A,this.y+=e.y*A,this.z+=e.z*A,this.w+=e.w*A,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,A){return this.x=e.x-A.x,this.y=e.y-A.y,this.z=e.z-A.z,this.w=e.w-A.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const A=this.x,t=this.y,i=this.z,r=this.w,s=e.elements;return this.x=s[0]*A+s[4]*t+s[8]*i+s[12]*r,this.y=s[1]*A+s[5]*t+s[9]*i+s[13]*r,this.z=s[2]*A+s[6]*t+s[10]*i+s[14]*r,this.w=s[3]*A+s[7]*t+s[11]*i+s[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const A=Math.sqrt(1-e.w*e.w);return A<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/A,this.y=e.y/A,this.z=e.z/A),this}setAxisAngleFromRotationMatrix(e){let A,t,i,r;const o=e.elements,l=o[0],c=o[4],u=o[8],h=o[1],p=o[5],g=o[9],m=o[2],d=o[6],f=o[10];if(Math.abs(c-h)<.01&&Math.abs(u-m)<.01&&Math.abs(g-d)<.01){if(Math.abs(c+h)<.1&&Math.abs(u+m)<.1&&Math.abs(g+d)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;A=Math.PI;const v=(l+1)/2,E=(p+1)/2,b=(f+1)/2,U=(c+h)/4,y=(u+m)/4,H=(g+d)/4;return v>E&&v>b?v<.01?(t=0,i=.707106781,r=.707106781):(t=Math.sqrt(v),i=U/t,r=y/t):E>b?E<.01?(t=.707106781,i=0,r=.707106781):(i=Math.sqrt(E),t=U/i,r=H/i):b<.01?(t=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),t=y/r,i=H/r),this.set(t,i,r,A),this}let C=Math.sqrt((d-g)*(d-g)+(u-m)*(u-m)+(h-c)*(h-c));return Math.abs(C)<.001&&(C=1),this.x=(d-g)/C,this.y=(u-m)/C,this.z=(h-c)/C,this.w=Math.acos((l+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,A){return this.x=Math.max(e.x,Math.min(A.x,this.x)),this.y=Math.max(e.y,Math.min(A.y,this.y)),this.z=Math.max(e.z,Math.min(A.z,this.z)),this.w=Math.max(e.w,Math.min(A.w,this.w)),this}clampScalar(e,A){return this.x=Math.max(e,Math.min(A,this.x)),this.y=Math.max(e,Math.min(A,this.y)),this.z=Math.max(e,Math.min(A,this.z)),this.w=Math.max(e,Math.min(A,this.w)),this}clampLength(e,A){const t=this.length();return this.divideScalar(t||1).multiplyScalar(Math.max(e,Math.min(A,t)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,A){return this.x+=(e.x-this.x)*A,this.y+=(e.y-this.y)*A,this.z+=(e.z-this.z)*A,this.w+=(e.w-this.w)*A,this}lerpVectors(e,A,t){return this.x=e.x+(A.x-e.x)*t,this.y=e.y+(A.y-e.y)*t,this.z=e.z+(A.z-e.z)*t,this.w=e.w+(A.w-e.w)*t,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,A=0){return this.x=e[A],this.y=e[A+1],this.z=e[A+2],this.w=e[A+3],this}toArray(e=[],A=0){return e[A]=this.x,e[A+1]=this.y,e[A+2]=this.z,e[A+3]=this.w,e}fromBufferAttribute(e,A){return this.x=e.getX(A),this.y=e.getY(A),this.z=e.getZ(A),this.w=e.getW(A),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fp extends Hn{constructor(e=1,A=1,t={}){super(),this.isRenderTarget=!0,this.width=e,this.height=A,this.depth=1,this.scissor=new bA(0,0,e,A),this.scissorTest=!1,this.viewport=new bA(0,0,e,A);const i={width:e,height:A,depth:1};t.encoding!==void 0&&(mi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Qn?FA:nt),t=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:KA,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},t),this.texture=new WA(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=t.generateMipmaps,this.texture.internalFormat=t.internalFormat,this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.depthTexture=t.depthTexture,this.samples=t.samples}setSize(e,A,t=1){(this.width!==e||this.height!==A||this.depth!==t)&&(this.width=e,this.height=A,this.depth=t,this.texture.image.width=e,this.texture.image.height=A,this.texture.image.depth=t,this.dispose()),this.viewport.set(0,0,e,A),this.scissor.set(0,0,e,A)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const A=Object.assign({},e.texture.image);return this.texture.source=new hh(A),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rn extends fp{constructor(e=1,A=1,t={}){super(e,A,t),this.isWebGLRenderTarget=!0}}class fh extends WA{constructor(e=null,A=1,t=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:A,height:t,depth:i},this.magFilter=VA,this.minFilter=VA,this.wrapR=ct,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dp extends WA{constructor(e=null,A=1,t=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:A,height:t,depth:i},this.magFilter=VA,this.minFilter=VA,this.wrapR=ct,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dn{constructor(e=0,A=0,t=0,i=1){this.isQuaternion=!0,this._x=e,this._y=A,this._z=t,this._w=i}static slerpFlat(e,A,t,i,r,s,a){let o=t[i+0],l=t[i+1],c=t[i+2],u=t[i+3];const h=r[s+0],p=r[s+1],g=r[s+2],m=r[s+3];if(a===0){e[A+0]=o,e[A+1]=l,e[A+2]=c,e[A+3]=u;return}if(a===1){e[A+0]=h,e[A+1]=p,e[A+2]=g,e[A+3]=m;return}if(u!==m||o!==h||l!==p||c!==g){let d=1-a;const f=o*h+l*p+c*g+u*m,C=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const b=Math.sqrt(v),U=Math.atan2(b,f*C);d=Math.sin(d*U)/b,a=Math.sin(a*U)/b}const E=a*C;if(o=o*d+h*E,l=l*d+p*E,c=c*d+g*E,u=u*d+m*E,d===1-a){const b=1/Math.sqrt(o*o+l*l+c*c+u*u);o*=b,l*=b,c*=b,u*=b}}e[A]=o,e[A+1]=l,e[A+2]=c,e[A+3]=u}static multiplyQuaternionsFlat(e,A,t,i,r,s){const a=t[i],o=t[i+1],l=t[i+2],c=t[i+3],u=r[s],h=r[s+1],p=r[s+2],g=r[s+3];return e[A]=a*g+c*u+o*p-l*h,e[A+1]=o*g+c*h+l*u-a*p,e[A+2]=l*g+c*p+a*h-o*u,e[A+3]=c*g-a*u-o*h-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,A,t,i){return this._x=e,this._y=A,this._z=t,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,A=!0){const t=e._x,i=e._y,r=e._z,s=e._order,a=Math.cos,o=Math.sin,l=a(t/2),c=a(i/2),u=a(r/2),h=o(t/2),p=o(i/2),g=o(r/2);switch(s){case"XYZ":this._x=h*c*u+l*p*g,this._y=l*p*u-h*c*g,this._z=l*c*g+h*p*u,this._w=l*c*u-h*p*g;break;case"YXZ":this._x=h*c*u+l*p*g,this._y=l*p*u-h*c*g,this._z=l*c*g-h*p*u,this._w=l*c*u+h*p*g;break;case"ZXY":this._x=h*c*u-l*p*g,this._y=l*p*u+h*c*g,this._z=l*c*g+h*p*u,this._w=l*c*u-h*p*g;break;case"ZYX":this._x=h*c*u-l*p*g,this._y=l*p*u+h*c*g,this._z=l*c*g-h*p*u,this._w=l*c*u+h*p*g;break;case"YZX":this._x=h*c*u+l*p*g,this._y=l*p*u+h*c*g,this._z=l*c*g-h*p*u,this._w=l*c*u-h*p*g;break;case"XZY":this._x=h*c*u-l*p*g,this._y=l*p*u-h*c*g,this._z=l*c*g+h*p*u,this._w=l*c*u+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return A===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,A){const t=A/2,i=Math.sin(t);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(t),this._onChangeCallback(),this}setFromRotationMatrix(e){const A=e.elements,t=A[0],i=A[4],r=A[8],s=A[1],a=A[5],o=A[9],l=A[2],c=A[6],u=A[10],h=t+a+u;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-o)*p,this._y=(r-l)*p,this._z=(s-i)*p}else if(t>a&&t>u){const p=2*Math.sqrt(1+t-a-u);this._w=(c-o)/p,this._x=.25*p,this._y=(i+s)/p,this._z=(r+l)/p}else if(a>u){const p=2*Math.sqrt(1+a-t-u);this._w=(r-l)/p,this._x=(i+s)/p,this._y=.25*p,this._z=(o+c)/p}else{const p=2*Math.sqrt(1+u-t-a);this._w=(s-i)/p,this._x=(r+l)/p,this._y=(o+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,A){let t=e.dot(A)+1;return t<Number.EPSILON?(t=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=t):(this._x=0,this._y=-e.z,this._z=e.y,this._w=t)):(this._x=e.y*A.z-e.z*A.y,this._y=e.z*A.x-e.x*A.z,this._z=e.x*A.y-e.y*A.x,this._w=t),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(UA(this.dot(e),-1,1)))}rotateTowards(e,A){const t=this.angleTo(e);if(t===0)return this;const i=Math.min(1,A/t);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,A){const t=e._x,i=e._y,r=e._z,s=e._w,a=A._x,o=A._y,l=A._z,c=A._w;return this._x=t*c+s*a+i*l-r*o,this._y=i*c+s*o+r*a-t*l,this._z=r*c+s*l+t*o-i*a,this._w=s*c-t*a-i*o-r*l,this._onChangeCallback(),this}slerp(e,A){if(A===0)return this;if(A===1)return this.copy(e);const t=this._x,i=this._y,r=this._z,s=this._w;let a=s*e._w+t*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=t,this._y=i,this._z=r,this;const o=1-a*a;if(o<=Number.EPSILON){const p=1-A;return this._w=p*s+A*this._w,this._x=p*t+A*this._x,this._y=p*i+A*this._y,this._z=p*r+A*this._z,this.normalize(),this}const l=Math.sqrt(o),c=Math.atan2(l,a),u=Math.sin((1-A)*c)/l,h=Math.sin(A*c)/l;return this._w=s*u+this._w*h,this._x=t*u+this._x*h,this._y=i*u+this._y*h,this._z=r*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,A,t){return this.copy(e).slerp(A,t)}random(){const e=Math.random(),A=Math.sqrt(1-e),t=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(A*Math.cos(i),t*Math.sin(r),t*Math.cos(r),A*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,A=0){return this._x=e[A],this._y=e[A+1],this._z=e[A+2],this._w=e[A+3],this._onChangeCallback(),this}toArray(e=[],A=0){return e[A]=this._x,e[A+1]=this._y,e[A+2]=this._z,e[A+3]=this._w,e}fromBufferAttribute(e,A){return this._x=e.getX(A),this._y=e.getY(A),this._z=e.getZ(A),this._w=e.getW(A),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,A=0,t=0){Q.prototype.isVector3=!0,this.x=e,this.y=A,this.z=t}set(e,A,t){return t===void 0&&(t=this.z),this.x=e,this.y=A,this.z=t,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,A){switch(e){case 0:this.x=A;break;case 1:this.y=A;break;case 2:this.z=A;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,A){return this.x=e.x+A.x,this.y=e.y+A.y,this.z=e.z+A.z,this}addScaledVector(e,A){return this.x+=e.x*A,this.y+=e.y*A,this.z+=e.z*A,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,A){return this.x=e.x-A.x,this.y=e.y-A.y,this.z=e.z-A.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,A){return this.x=e.x*A.x,this.y=e.y*A.y,this.z=e.z*A.z,this}applyEuler(e){return this.applyQuaternion(oc.setFromEuler(e))}applyAxisAngle(e,A){return this.applyQuaternion(oc.setFromAxisAngle(e,A))}applyMatrix3(e){const A=this.x,t=this.y,i=this.z,r=e.elements;return this.x=r[0]*A+r[3]*t+r[6]*i,this.y=r[1]*A+r[4]*t+r[7]*i,this.z=r[2]*A+r[5]*t+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const A=this.x,t=this.y,i=this.z,r=e.elements,s=1/(r[3]*A+r[7]*t+r[11]*i+r[15]);return this.x=(r[0]*A+r[4]*t+r[8]*i+r[12])*s,this.y=(r[1]*A+r[5]*t+r[9]*i+r[13])*s,this.z=(r[2]*A+r[6]*t+r[10]*i+r[14])*s,this}applyQuaternion(e){const A=this.x,t=this.y,i=this.z,r=e.x,s=e.y,a=e.z,o=e.w,l=2*(s*i-a*t),c=2*(a*A-r*i),u=2*(r*t-s*A);return this.x=A+o*l+s*u-a*c,this.y=t+o*c+a*l-r*u,this.z=i+o*u+r*c-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const A=this.x,t=this.y,i=this.z,r=e.elements;return this.x=r[0]*A+r[4]*t+r[8]*i,this.y=r[1]*A+r[5]*t+r[9]*i,this.z=r[2]*A+r[6]*t+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,A){return this.x=Math.max(e.x,Math.min(A.x,this.x)),this.y=Math.max(e.y,Math.min(A.y,this.y)),this.z=Math.max(e.z,Math.min(A.z,this.z)),this}clampScalar(e,A){return this.x=Math.max(e,Math.min(A,this.x)),this.y=Math.max(e,Math.min(A,this.y)),this.z=Math.max(e,Math.min(A,this.z)),this}clampLength(e,A){const t=this.length();return this.divideScalar(t||1).multiplyScalar(Math.max(e,Math.min(A,t)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,A){return this.x+=(e.x-this.x)*A,this.y+=(e.y-this.y)*A,this.z+=(e.z-this.z)*A,this}lerpVectors(e,A,t){return this.x=e.x+(A.x-e.x)*t,this.y=e.y+(A.y-e.y)*t,this.z=e.z+(A.z-e.z)*t,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,A){const t=e.x,i=e.y,r=e.z,s=A.x,a=A.y,o=A.z;return this.x=i*o-r*a,this.y=r*s-t*o,this.z=t*a-i*s,this}projectOnVector(e){const A=e.lengthSq();if(A===0)return this.set(0,0,0);const t=e.dot(this)/A;return this.copy(e).multiplyScalar(t)}projectOnPlane(e){return Ea.copy(this).projectOnVector(e),this.sub(Ea)}reflect(e){return this.sub(Ea.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const A=Math.sqrt(this.lengthSq()*e.lengthSq());if(A===0)return Math.PI/2;const t=this.dot(e)/A;return Math.acos(UA(t,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const A=this.x-e.x,t=this.y-e.y,i=this.z-e.z;return A*A+t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,A,t){const i=Math.sin(A)*e;return this.x=i*Math.sin(t),this.y=Math.cos(A)*e,this.z=i*Math.cos(t),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,A,t){return this.x=e*Math.sin(A),this.y=t,this.z=e*Math.cos(A),this}setFromMatrixPosition(e){const A=e.elements;return this.x=A[12],this.y=A[13],this.z=A[14],this}setFromMatrixScale(e){const A=this.setFromMatrixColumn(e,0).length(),t=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=A,this.y=t,this.z=i,this}setFromMatrixColumn(e,A){return this.fromArray(e.elements,A*4)}setFromMatrix3Column(e,A){return this.fromArray(e.elements,A*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,A=0){return this.x=e[A],this.y=e[A+1],this.z=e[A+2],this}toArray(e=[],A=0){return e[A]=this.x,e[A+1]=this.y,e[A+2]=this.z,e}fromBufferAttribute(e,A){return this.x=e.getX(A),this.y=e.getY(A),this.z=e.getZ(A),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,A=Math.random()*Math.PI*2,t=Math.sqrt(1-e**2);return this.x=t*Math.cos(A),this.y=t*Math.sin(A),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ea=new Q,oc=new Dn;class Er{constructor(e=new Q(1/0,1/0,1/0),A=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=A}set(e,A){return this.min.copy(e),this.max.copy(A),this}setFromArray(e){this.makeEmpty();for(let A=0,t=e.length;A<t;A+=3)this.expandByPoint(st.fromArray(e,A));return this}setFromBufferAttribute(e){this.makeEmpty();for(let A=0,t=e.count;A<t;A++)this.expandByPoint(st.fromBufferAttribute(e,A));return this}setFromPoints(e){this.makeEmpty();for(let A=0,t=e.length;A<t;A++)this.expandByPoint(e[A]);return this}setFromCenterAndSize(e,A){const t=st.copy(A).multiplyScalar(.5);return this.min.copy(e).sub(t),this.max.copy(e).add(t),this}setFromObject(e,A=!1){return this.makeEmpty(),this.expandByObject(e,A)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,A=!1){e.updateWorldMatrix(!1,!1);const t=e.geometry;if(t!==void 0){const r=t.getAttribute("position");if(A===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=r.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,st):st.fromBufferAttribute(r,s),st.applyMatrix4(e.matrixWorld),this.expandByPoint(st);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),br.copy(e.boundingBox)):(t.boundingBox===null&&t.computeBoundingBox(),br.copy(t.boundingBox)),br.applyMatrix4(e.matrixWorld),this.union(br)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],A);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,A){return A.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,st),st.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let A,t;return e.normal.x>0?(A=e.normal.x*this.min.x,t=e.normal.x*this.max.x):(A=e.normal.x*this.max.x,t=e.normal.x*this.min.x),e.normal.y>0?(A+=e.normal.y*this.min.y,t+=e.normal.y*this.max.y):(A+=e.normal.y*this.max.y,t+=e.normal.y*this.min.y),e.normal.z>0?(A+=e.normal.z*this.min.z,t+=e.normal.z*this.max.z):(A+=e.normal.z*this.max.z,t+=e.normal.z*this.min.z),A<=-e.constant&&t>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hi),Tr.subVectors(this.max,Hi),Vn.subVectors(e.a,Hi),Kn.subVectors(e.b,Hi),kn.subVectors(e.c,Hi),Nt.subVectors(Kn,Vn),Ot.subVectors(kn,Kn),dn.subVectors(Vn,kn);let A=[0,-Nt.z,Nt.y,0,-Ot.z,Ot.y,0,-dn.z,dn.y,Nt.z,0,-Nt.x,Ot.z,0,-Ot.x,dn.z,0,-dn.x,-Nt.y,Nt.x,0,-Ot.y,Ot.x,0,-dn.y,dn.x,0];return!xa(A,Vn,Kn,kn,Tr)||(A=[1,0,0,0,1,0,0,0,1],!xa(A,Vn,Kn,kn,Tr))?!1:(Qr.crossVectors(Nt,Ot),A=[Qr.x,Qr.y,Qr.z],xa(A,Vn,Kn,kn,Tr))}clampPoint(e,A){return A.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,st).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(st).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xt=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],st=new Q,br=new Er,Vn=new Q,Kn=new Q,kn=new Q,Nt=new Q,Ot=new Q,dn=new Q,Hi=new Q,Tr=new Q,Qr=new Q,pn=new Q;function xa(n,e,A,t,i){for(let r=0,s=n.length-3;r<=s;r+=3){pn.fromArray(n,r);const a=i.x*Math.abs(pn.x)+i.y*Math.abs(pn.y)+i.z*Math.abs(pn.z),o=e.dot(pn),l=A.dot(pn),c=t.dot(pn);if(Math.max(-Math.max(o,l,c),Math.min(o,l,c))>a)return!1}return!0}const pp=new Er,Pi=new Q,Ua=new Q;class tl{constructor(e=new Q,A=-1){this.isSphere=!0,this.center=e,this.radius=A}set(e,A){return this.center.copy(e),this.radius=A,this}setFromPoints(e,A){const t=this.center;A!==void 0?t.copy(A):pp.setFromPoints(e).getCenter(t);let i=0;for(let r=0,s=e.length;r<s;r++)i=Math.max(i,t.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const A=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=A*A}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,A){const t=this.center.distanceToSquared(e);return A.copy(e),t>this.radius*this.radius&&(A.sub(this.center).normalize(),A.multiplyScalar(this.radius).add(this.center)),A}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pi.subVectors(e,this.center);const A=Pi.lengthSq();if(A>this.radius*this.radius){const t=Math.sqrt(A),i=(t-this.radius)*.5;this.center.addScaledVector(Pi,i/t),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ua.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pi.copy(e.center).add(Ua)),this.expandByPoint(Pi.copy(e.center).sub(Ua))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ut=new Q,ya=new Q,Lr=new Q,Gt=new Q,Sa=new Q,Ir=new Q,Ma=new Q;class dh{constructor(e=new Q,A=new Q(0,0,-1)){this.origin=e,this.direction=A}set(e,A){return this.origin.copy(e),this.direction.copy(A),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,A){return A.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ut)),this}closestPointToPoint(e,A){A.subVectors(e,this.origin);const t=A.dot(this.direction);return t<0?A.copy(this.origin):A.copy(this.origin).addScaledVector(this.direction,t)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const A=Ut.subVectors(e,this.origin).dot(this.direction);return A<0?this.origin.distanceToSquared(e):(Ut.copy(this.origin).addScaledVector(this.direction,A),Ut.distanceToSquared(e))}distanceSqToSegment(e,A,t,i){ya.copy(e).add(A).multiplyScalar(.5),Lr.copy(A).sub(e).normalize(),Gt.copy(this.origin).sub(ya);const r=e.distanceTo(A)*.5,s=-this.direction.dot(Lr),a=Gt.dot(this.direction),o=-Gt.dot(Lr),l=Gt.lengthSq(),c=Math.abs(1-s*s);let u,h,p,g;if(c>0)if(u=s*o-a,h=s*a-o,g=r*c,u>=0)if(h>=-g)if(h<=g){const m=1/c;u*=m,h*=m,p=u*(u+s*h+2*a)+h*(s*u+h+2*o)+l}else h=r,u=Math.max(0,-(s*h+a)),p=-u*u+h*(h+2*o)+l;else h=-r,u=Math.max(0,-(s*h+a)),p=-u*u+h*(h+2*o)+l;else h<=-g?(u=Math.max(0,-(-s*r+a)),h=u>0?-r:Math.min(Math.max(-r,-o),r),p=-u*u+h*(h+2*o)+l):h<=g?(u=0,h=Math.min(Math.max(-r,-o),r),p=h*(h+2*o)+l):(u=Math.max(0,-(s*r+a)),h=u>0?r:Math.min(Math.max(-r,-o),r),p=-u*u+h*(h+2*o)+l);else h=s>0?-r:r,u=Math.max(0,-(s*h+a)),p=-u*u+h*(h+2*o)+l;return t&&t.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ya).addScaledVector(Lr,h),p}intersectSphere(e,A){Ut.subVectors(e.center,this.origin);const t=Ut.dot(this.direction),i=Ut.dot(Ut)-t*t,r=e.radius*e.radius;if(i>r)return null;const s=Math.sqrt(r-i),a=t-s,o=t+s;return o<0?null:a<0?this.at(o,A):this.at(a,A)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const A=e.normal.dot(this.direction);if(A===0)return e.distanceToPoint(this.origin)===0?0:null;const t=-(this.origin.dot(e.normal)+e.constant)/A;return t>=0?t:null}intersectPlane(e,A){const t=this.distanceToPlane(e);return t===null?null:this.at(t,A)}intersectsPlane(e){const A=e.distanceToPoint(this.origin);return A===0||e.normal.dot(this.direction)*A<0}intersectBox(e,A){let t,i,r,s,a,o;const l=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,h=this.origin;return l>=0?(t=(e.min.x-h.x)*l,i=(e.max.x-h.x)*l):(t=(e.max.x-h.x)*l,i=(e.min.x-h.x)*l),c>=0?(r=(e.min.y-h.y)*c,s=(e.max.y-h.y)*c):(r=(e.max.y-h.y)*c,s=(e.min.y-h.y)*c),t>s||r>i||((r>t||isNaN(t))&&(t=r),(s<i||isNaN(i))&&(i=s),u>=0?(a=(e.min.z-h.z)*u,o=(e.max.z-h.z)*u):(a=(e.max.z-h.z)*u,o=(e.min.z-h.z)*u),t>o||a>i)||((a>t||t!==t)&&(t=a),(o<i||i!==i)&&(i=o),i<0)?null:this.at(t>=0?t:i,A)}intersectsBox(e){return this.intersectBox(e,Ut)!==null}intersectTriangle(e,A,t,i,r){Sa.subVectors(A,e),Ir.subVectors(t,e),Ma.crossVectors(Sa,Ir);let s=this.direction.dot(Ma),a;if(s>0){if(i)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Gt.subVectors(this.origin,e);const o=a*this.direction.dot(Ir.crossVectors(Gt,Ir));if(o<0)return null;const l=a*this.direction.dot(Sa.cross(Gt));if(l<0||o+l>s)return null;const c=-a*Gt.dot(Ma);return c<0?null:this.at(c/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yA{constructor(e,A,t,i,r,s,a,o,l,c,u,h,p,g,m,d){yA.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,A,t,i,r,s,a,o,l,c,u,h,p,g,m,d)}set(e,A,t,i,r,s,a,o,l,c,u,h,p,g,m,d){const f=this.elements;return f[0]=e,f[4]=A,f[8]=t,f[12]=i,f[1]=r,f[5]=s,f[9]=a,f[13]=o,f[2]=l,f[6]=c,f[10]=u,f[14]=h,f[3]=p,f[7]=g,f[11]=m,f[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yA().fromArray(this.elements)}copy(e){const A=this.elements,t=e.elements;return A[0]=t[0],A[1]=t[1],A[2]=t[2],A[3]=t[3],A[4]=t[4],A[5]=t[5],A[6]=t[6],A[7]=t[7],A[8]=t[8],A[9]=t[9],A[10]=t[10],A[11]=t[11],A[12]=t[12],A[13]=t[13],A[14]=t[14],A[15]=t[15],this}copyPosition(e){const A=this.elements,t=e.elements;return A[12]=t[12],A[13]=t[13],A[14]=t[14],this}setFromMatrix3(e){const A=e.elements;return this.set(A[0],A[3],A[6],0,A[1],A[4],A[7],0,A[2],A[5],A[8],0,0,0,0,1),this}extractBasis(e,A,t){return e.setFromMatrixColumn(this,0),A.setFromMatrixColumn(this,1),t.setFromMatrixColumn(this,2),this}makeBasis(e,A,t){return this.set(e.x,A.x,t.x,0,e.y,A.y,t.y,0,e.z,A.z,t.z,0,0,0,0,1),this}extractRotation(e){const A=this.elements,t=e.elements,i=1/zn.setFromMatrixColumn(e,0).length(),r=1/zn.setFromMatrixColumn(e,1).length(),s=1/zn.setFromMatrixColumn(e,2).length();return A[0]=t[0]*i,A[1]=t[1]*i,A[2]=t[2]*i,A[3]=0,A[4]=t[4]*r,A[5]=t[5]*r,A[6]=t[6]*r,A[7]=0,A[8]=t[8]*s,A[9]=t[9]*s,A[10]=t[10]*s,A[11]=0,A[12]=0,A[13]=0,A[14]=0,A[15]=1,this}makeRotationFromEuler(e){const A=this.elements,t=e.x,i=e.y,r=e.z,s=Math.cos(t),a=Math.sin(t),o=Math.cos(i),l=Math.sin(i),c=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const h=s*c,p=s*u,g=a*c,m=a*u;A[0]=o*c,A[4]=-o*u,A[8]=l,A[1]=p+g*l,A[5]=h-m*l,A[9]=-a*o,A[2]=m-h*l,A[6]=g+p*l,A[10]=s*o}else if(e.order==="YXZ"){const h=o*c,p=o*u,g=l*c,m=l*u;A[0]=h+m*a,A[4]=g*a-p,A[8]=s*l,A[1]=s*u,A[5]=s*c,A[9]=-a,A[2]=p*a-g,A[6]=m+h*a,A[10]=s*o}else if(e.order==="ZXY"){const h=o*c,p=o*u,g=l*c,m=l*u;A[0]=h-m*a,A[4]=-s*u,A[8]=g+p*a,A[1]=p+g*a,A[5]=s*c,A[9]=m-h*a,A[2]=-s*l,A[6]=a,A[10]=s*o}else if(e.order==="ZYX"){const h=s*c,p=s*u,g=a*c,m=a*u;A[0]=o*c,A[4]=g*l-p,A[8]=h*l+m,A[1]=o*u,A[5]=m*l+h,A[9]=p*l-g,A[2]=-l,A[6]=a*o,A[10]=s*o}else if(e.order==="YZX"){const h=s*o,p=s*l,g=a*o,m=a*l;A[0]=o*c,A[4]=m-h*u,A[8]=g*u+p,A[1]=u,A[5]=s*c,A[9]=-a*c,A[2]=-l*c,A[6]=p*u+g,A[10]=h-m*u}else if(e.order==="XZY"){const h=s*o,p=s*l,g=a*o,m=a*l;A[0]=o*c,A[4]=-u,A[8]=l*c,A[1]=h*u+m,A[5]=s*c,A[9]=p*u-g,A[2]=g*u-p,A[6]=a*c,A[10]=m*u+h}return A[3]=0,A[7]=0,A[11]=0,A[12]=0,A[13]=0,A[14]=0,A[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gp,e,mp)}lookAt(e,A,t){const i=this.elements;return YA.subVectors(e,A),YA.lengthSq()===0&&(YA.z=1),YA.normalize(),Vt.crossVectors(t,YA),Vt.lengthSq()===0&&(Math.abs(t.z)===1?YA.x+=1e-4:YA.z+=1e-4,YA.normalize(),Vt.crossVectors(t,YA)),Vt.normalize(),Rr.crossVectors(YA,Vt),i[0]=Vt.x,i[4]=Rr.x,i[8]=YA.x,i[1]=Vt.y,i[5]=Rr.y,i[9]=YA.y,i[2]=Vt.z,i[6]=Rr.z,i[10]=YA.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,A){const t=e.elements,i=A.elements,r=this.elements,s=t[0],a=t[4],o=t[8],l=t[12],c=t[1],u=t[5],h=t[9],p=t[13],g=t[2],m=t[6],d=t[10],f=t[14],C=t[3],v=t[7],E=t[11],b=t[15],U=i[0],y=i[4],H=i[8],K=i[12],B=i[1],M=i[5],k=i[9],z=i[13],T=i[2],G=i[6],R=i[10],X=i[14],W=i[3],Y=i[7],J=i[11],ee=i[15];return r[0]=s*U+a*B+o*T+l*W,r[4]=s*y+a*M+o*G+l*Y,r[8]=s*H+a*k+o*R+l*J,r[12]=s*K+a*z+o*X+l*ee,r[1]=c*U+u*B+h*T+p*W,r[5]=c*y+u*M+h*G+p*Y,r[9]=c*H+u*k+h*R+p*J,r[13]=c*K+u*z+h*X+p*ee,r[2]=g*U+m*B+d*T+f*W,r[6]=g*y+m*M+d*G+f*Y,r[10]=g*H+m*k+d*R+f*J,r[14]=g*K+m*z+d*X+f*ee,r[3]=C*U+v*B+E*T+b*W,r[7]=C*y+v*M+E*G+b*Y,r[11]=C*H+v*k+E*R+b*J,r[15]=C*K+v*z+E*X+b*ee,this}multiplyScalar(e){const A=this.elements;return A[0]*=e,A[4]*=e,A[8]*=e,A[12]*=e,A[1]*=e,A[5]*=e,A[9]*=e,A[13]*=e,A[2]*=e,A[6]*=e,A[10]*=e,A[14]*=e,A[3]*=e,A[7]*=e,A[11]*=e,A[15]*=e,this}determinant(){const e=this.elements,A=e[0],t=e[4],i=e[8],r=e[12],s=e[1],a=e[5],o=e[9],l=e[13],c=e[2],u=e[6],h=e[10],p=e[14],g=e[3],m=e[7],d=e[11],f=e[15];return g*(+r*o*u-i*l*u-r*a*h+t*l*h+i*a*p-t*o*p)+m*(+A*o*p-A*l*h+r*s*h-i*s*p+i*l*c-r*o*c)+d*(+A*l*u-A*a*p-r*s*u+t*s*p+r*a*c-t*l*c)+f*(-i*a*c-A*o*u+A*a*h+i*s*u-t*s*h+t*o*c)}transpose(){const e=this.elements;let A;return A=e[1],e[1]=e[4],e[4]=A,A=e[2],e[2]=e[8],e[8]=A,A=e[6],e[6]=e[9],e[9]=A,A=e[3],e[3]=e[12],e[12]=A,A=e[7],e[7]=e[13],e[13]=A,A=e[11],e[11]=e[14],e[14]=A,this}setPosition(e,A,t){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=A,i[14]=t),this}invert(){const e=this.elements,A=e[0],t=e[1],i=e[2],r=e[3],s=e[4],a=e[5],o=e[6],l=e[7],c=e[8],u=e[9],h=e[10],p=e[11],g=e[12],m=e[13],d=e[14],f=e[15],C=u*d*l-m*h*l+m*o*p-a*d*p-u*o*f+a*h*f,v=g*h*l-c*d*l-g*o*p+s*d*p+c*o*f-s*h*f,E=c*m*l-g*u*l+g*a*p-s*m*p-c*a*f+s*u*f,b=g*u*o-c*m*o-g*a*h+s*m*h+c*a*d-s*u*d,U=A*C+t*v+i*E+r*b;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const y=1/U;return e[0]=C*y,e[1]=(m*h*r-u*d*r-m*i*p+t*d*p+u*i*f-t*h*f)*y,e[2]=(a*d*r-m*o*r+m*i*l-t*d*l-a*i*f+t*o*f)*y,e[3]=(u*o*r-a*h*r-u*i*l+t*h*l+a*i*p-t*o*p)*y,e[4]=v*y,e[5]=(c*d*r-g*h*r+g*i*p-A*d*p-c*i*f+A*h*f)*y,e[6]=(g*o*r-s*d*r-g*i*l+A*d*l+s*i*f-A*o*f)*y,e[7]=(s*h*r-c*o*r+c*i*l-A*h*l-s*i*p+A*o*p)*y,e[8]=E*y,e[9]=(g*u*r-c*m*r-g*t*p+A*m*p+c*t*f-A*u*f)*y,e[10]=(s*m*r-g*a*r+g*t*l-A*m*l-s*t*f+A*a*f)*y,e[11]=(c*a*r-s*u*r-c*t*l+A*u*l+s*t*p-A*a*p)*y,e[12]=b*y,e[13]=(c*m*i-g*u*i+g*t*h-A*m*h-c*t*d+A*u*d)*y,e[14]=(g*a*i-s*m*i-g*t*o+A*m*o+s*t*d-A*a*d)*y,e[15]=(s*u*i-c*a*i+c*t*o-A*u*o-s*t*h+A*a*h)*y,this}scale(e){const A=this.elements,t=e.x,i=e.y,r=e.z;return A[0]*=t,A[4]*=i,A[8]*=r,A[1]*=t,A[5]*=i,A[9]*=r,A[2]*=t,A[6]*=i,A[10]*=r,A[3]*=t,A[7]*=i,A[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,A=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],t=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(A,t,i))}makeTranslation(e,A,t){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,A,0,0,1,t,0,0,0,1),this}makeRotationX(e){const A=Math.cos(e),t=Math.sin(e);return this.set(1,0,0,0,0,A,-t,0,0,t,A,0,0,0,0,1),this}makeRotationY(e){const A=Math.cos(e),t=Math.sin(e);return this.set(A,0,t,0,0,1,0,0,-t,0,A,0,0,0,0,1),this}makeRotationZ(e){const A=Math.cos(e),t=Math.sin(e);return this.set(A,-t,0,0,t,A,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,A){const t=Math.cos(A),i=Math.sin(A),r=1-t,s=e.x,a=e.y,o=e.z,l=r*s,c=r*a;return this.set(l*s+t,l*a-i*o,l*o+i*a,0,l*a+i*o,c*a+t,c*o-i*s,0,l*o-i*a,c*o+i*s,r*o*o+t,0,0,0,0,1),this}makeScale(e,A,t){return this.set(e,0,0,0,0,A,0,0,0,0,t,0,0,0,0,1),this}makeShear(e,A,t,i,r,s){return this.set(1,t,r,0,e,1,s,0,A,i,1,0,0,0,0,1),this}compose(e,A,t){const i=this.elements,r=A._x,s=A._y,a=A._z,o=A._w,l=r+r,c=s+s,u=a+a,h=r*l,p=r*c,g=r*u,m=s*c,d=s*u,f=a*u,C=o*l,v=o*c,E=o*u,b=t.x,U=t.y,y=t.z;return i[0]=(1-(m+f))*b,i[1]=(p+E)*b,i[2]=(g-v)*b,i[3]=0,i[4]=(p-E)*U,i[5]=(1-(h+f))*U,i[6]=(d+C)*U,i[7]=0,i[8]=(g+v)*y,i[9]=(d-C)*y,i[10]=(1-(h+m))*y,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,A,t){const i=this.elements;let r=zn.set(i[0],i[1],i[2]).length();const s=zn.set(i[4],i[5],i[6]).length(),a=zn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],at.copy(this);const l=1/r,c=1/s,u=1/a;return at.elements[0]*=l,at.elements[1]*=l,at.elements[2]*=l,at.elements[4]*=c,at.elements[5]*=c,at.elements[6]*=c,at.elements[8]*=u,at.elements[9]*=u,at.elements[10]*=u,A.setFromRotationMatrix(at),t.x=r,t.y=s,t.z=a,this}makePerspective(e,A,t,i,r,s,a=Rt){const o=this.elements,l=2*r/(A-e),c=2*r/(t-i),u=(A+e)/(A-e),h=(t+i)/(t-i);let p,g;if(a===Rt)p=-(s+r)/(s-r),g=-2*s*r/(s-r);else if(a===Ts)p=-s/(s-r),g=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=p,o[14]=g,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,A,t,i,r,s,a=Rt){const o=this.elements,l=1/(A-e),c=1/(t-i),u=1/(s-r),h=(A+e)*l,p=(t+i)*c;let g,m;if(a===Rt)g=(s+r)*u,m=-2*u;else if(a===Ts)g=r*u,m=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-p,o[2]=0,o[6]=0,o[10]=m,o[14]=-g,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const A=this.elements,t=e.elements;for(let i=0;i<16;i++)if(A[i]!==t[i])return!1;return!0}fromArray(e,A=0){for(let t=0;t<16;t++)this.elements[t]=e[t+A];return this}toArray(e=[],A=0){const t=this.elements;return e[A]=t[0],e[A+1]=t[1],e[A+2]=t[2],e[A+3]=t[3],e[A+4]=t[4],e[A+5]=t[5],e[A+6]=t[6],e[A+7]=t[7],e[A+8]=t[8],e[A+9]=t[9],e[A+10]=t[10],e[A+11]=t[11],e[A+12]=t[12],e[A+13]=t[13],e[A+14]=t[14],e[A+15]=t[15],e}}const zn=new Q,at=new yA,gp=new Q(0,0,0),mp=new Q(1,1,1),Vt=new Q,Rr=new Q,YA=new Q,lc=new yA,cc=new Dn;class Ys{constructor(e=0,A=0,t=0,i=Ys.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=A,this._z=t,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,A,t,i=this._order){return this._x=e,this._y=A,this._z=t,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,A=this._order,t=!0){const i=e.elements,r=i[0],s=i[4],a=i[8],o=i[1],l=i[5],c=i[9],u=i[2],h=i[6],p=i[10];switch(A){case"XYZ":this._y=Math.asin(UA(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-UA(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(o,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(UA(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(o,r));break;case"ZYX":this._y=Math.asin(-UA(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(o,r)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(UA(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-UA(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+A)}return this._order=A,t===!0&&this._onChangeCallback(),this}setFromQuaternion(e,A,t){return lc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lc,A,t)}setFromVector3(e,A=this._order){return this.set(e.x,e.y,e.z,A)}reorder(e){return cc.setFromEuler(this),this.setFromQuaternion(cc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],A=0){return e[A]=this._x,e[A+1]=this._y,e[A+2]=this._z,e[A+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ys.DEFAULT_ORDER="XYZ";class ph{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Bp=0;const uc=new Q,Wn=new Dn,yt=new yA,Dr=new Q,Ni=new Q,wp=new Q,vp=new Dn,hc=new Q(1,0,0),fc=new Q(0,1,0),dc=new Q(0,0,1),_p={type:"added"},Cp={type:"removed"};class qA extends Hn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=Qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qA.DEFAULT_UP.clone();const e=new Q,A=new Ys,t=new Dn,i=new Q(1,1,1);function r(){t.setFromEuler(A,!1)}function s(){A.setFromQuaternion(t,void 0,!1)}A._onChange(r),t._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:A},quaternion:{configurable:!0,enumerable:!0,value:t},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new yA},normalMatrix:{value:new ke}}),this.matrix=new yA,this.matrixWorld=new yA,this.matrixAutoUpdate=qA.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qA.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ph,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,A){this.quaternion.setFromAxisAngle(e,A)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,A){return Wn.setFromAxisAngle(e,A),this.quaternion.multiply(Wn),this}rotateOnWorldAxis(e,A){return Wn.setFromAxisAngle(e,A),this.quaternion.premultiply(Wn),this}rotateX(e){return this.rotateOnAxis(hc,e)}rotateY(e){return this.rotateOnAxis(fc,e)}rotateZ(e){return this.rotateOnAxis(dc,e)}translateOnAxis(e,A){return uc.copy(e).applyQuaternion(this.quaternion),this.position.add(uc.multiplyScalar(A)),this}translateX(e){return this.translateOnAxis(hc,e)}translateY(e){return this.translateOnAxis(fc,e)}translateZ(e){return this.translateOnAxis(dc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yt.copy(this.matrixWorld).invert())}lookAt(e,A,t){e.isVector3?Dr.copy(e):Dr.set(e,A,t);const i=this.parent;this.updateWorldMatrix(!0,!1),Ni.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yt.lookAt(Ni,Dr,this.up):yt.lookAt(Dr,Ni,this.up),this.quaternion.setFromRotationMatrix(yt),i&&(yt.extractRotation(i.matrixWorld),Wn.setFromRotationMatrix(yt),this.quaternion.premultiply(Wn.invert()))}add(e){if(arguments.length>1){for(let A=0;A<arguments.length;A++)this.add(arguments[A]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(_p)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.remove(arguments[t]);return this}const A=this.children.indexOf(e);return A!==-1&&(e.parent=null,this.children.splice(A,1),e.dispatchEvent(Cp)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yt.multiply(e.parent.matrixWorld)),e.applyMatrix4(yt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,A){if(this[e]===A)return this;for(let t=0,i=this.children.length;t<i;t++){const s=this.children[t].getObjectByProperty(e,A);if(s!==void 0)return s}}getObjectsByProperty(e,A,t=[]){this[e]===A&&t.push(this);const i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].getObjectsByProperty(e,A,t);return t}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,e,wp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,vp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const A=this.matrixWorld.elements;return e.set(A[8],A[9],A[10]).normalize()}raycast(){}traverse(e){e(this);const A=this.children;for(let t=0,i=A.length;t<i;t++)A[t].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const A=this.children;for(let t=0,i=A.length;t<i;t++)A[t].traverseVisible(e)}traverseAncestors(e){const A=this.parent;A!==null&&(e(A),A.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const A=this.children;for(let t=0,i=A.length;t<i;t++){const r=A[t];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,A){const t=this.parent;if(e===!0&&t!==null&&t.matrixWorldAutoUpdate===!0&&t.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),A===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const A=e===void 0||typeof e=="string",t={};A&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},t.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,o){return a[o.uuid]===void 0&&(a[o.uuid]=o.toJSON(e)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const o=a.shapes;if(Array.isArray(o))for(let l=0,c=o.length;l<c;l++){const u=o[l];r(e.shapes,u)}else r(e.shapes,o)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let o=0,l=this.material.length;o<l;o++)a.push(r(e.materials,this.material[o]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const o=this.animations[a];i.animations.push(r(e.animations,o))}}if(A){const a=s(e.geometries),o=s(e.materials),l=s(e.textures),c=s(e.images),u=s(e.shapes),h=s(e.skeletons),p=s(e.animations),g=s(e.nodes);a.length>0&&(t.geometries=a),o.length>0&&(t.materials=o),l.length>0&&(t.textures=l),c.length>0&&(t.images=c),u.length>0&&(t.shapes=u),h.length>0&&(t.skeletons=h),p.length>0&&(t.animations=p),g.length>0&&(t.nodes=g)}return t.object=i,t;function s(a){const o=[];for(const l in a){const c=a[l];delete c.metadata,o.push(c)}return o}}clone(e){return new this.constructor().copy(this,e)}copy(e,A=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),A===!0)for(let t=0;t<e.children.length;t++){const i=e.children[t];this.add(i.clone())}return this}}qA.DEFAULT_UP=new Q(0,1,0);qA.DEFAULT_MATRIX_AUTO_UPDATE=!0;qA.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ot=new Q,St=new Q,Fa=new Q,Mt=new Q,Xn=new Q,Yn=new Q,pc=new Q,ba=new Q,Ta=new Q,Qa=new Q;class Bt{constructor(e=new Q,A=new Q,t=new Q){this.a=e,this.b=A,this.c=t}static getNormal(e,A,t,i){i.subVectors(t,A),ot.subVectors(e,A),i.cross(ot);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,A,t,i,r){ot.subVectors(i,A),St.subVectors(t,A),Fa.subVectors(e,A);const s=ot.dot(ot),a=ot.dot(St),o=ot.dot(Fa),l=St.dot(St),c=St.dot(Fa),u=s*l-a*a;if(u===0)return r.set(0,0,0),null;const h=1/u,p=(l*o-a*c)*h,g=(s*c-a*o)*h;return r.set(1-p-g,g,p)}static containsPoint(e,A,t,i){return this.getBarycoord(e,A,t,i,Mt)===null?!1:Mt.x>=0&&Mt.y>=0&&Mt.x+Mt.y<=1}static getInterpolation(e,A,t,i,r,s,a,o){return this.getBarycoord(e,A,t,i,Mt)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(r,Mt.x),o.addScaledVector(s,Mt.y),o.addScaledVector(a,Mt.z),o)}static isFrontFacing(e,A,t,i){return ot.subVectors(t,A),St.subVectors(e,A),ot.cross(St).dot(i)<0}set(e,A,t){return this.a.copy(e),this.b.copy(A),this.c.copy(t),this}setFromPointsAndIndices(e,A,t,i){return this.a.copy(e[A]),this.b.copy(e[t]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,A,t,i){return this.a.fromBufferAttribute(e,A),this.b.fromBufferAttribute(e,t),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ot.subVectors(this.c,this.b),St.subVectors(this.a,this.b),ot.cross(St).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,A){return Bt.getBarycoord(e,this.a,this.b,this.c,A)}getInterpolation(e,A,t,i,r){return Bt.getInterpolation(e,this.a,this.b,this.c,A,t,i,r)}containsPoint(e){return Bt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,A){const t=this.a,i=this.b,r=this.c;let s,a;Xn.subVectors(i,t),Yn.subVectors(r,t),ba.subVectors(e,t);const o=Xn.dot(ba),l=Yn.dot(ba);if(o<=0&&l<=0)return A.copy(t);Ta.subVectors(e,i);const c=Xn.dot(Ta),u=Yn.dot(Ta);if(c>=0&&u<=c)return A.copy(i);const h=o*u-c*l;if(h<=0&&o>=0&&c<=0)return s=o/(o-c),A.copy(t).addScaledVector(Xn,s);Qa.subVectors(e,r);const p=Xn.dot(Qa),g=Yn.dot(Qa);if(g>=0&&p<=g)return A.copy(r);const m=p*l-o*g;if(m<=0&&l>=0&&g<=0)return a=l/(l-g),A.copy(t).addScaledVector(Yn,a);const d=c*g-p*u;if(d<=0&&u-c>=0&&p-g>=0)return pc.subVectors(r,i),a=(u-c)/(u-c+(p-g)),A.copy(i).addScaledVector(pc,a);const f=1/(d+m+h);return s=m*f,a=h*f,A.copy(t).addScaledVector(Xn,s).addScaledVector(Yn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const gh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kt={h:0,s:0,l:0},Hr={h:0,s:0,l:0};function La(n,e,A){return A<0&&(A+=1),A>1&&(A-=1),A<1/6?n+(e-n)*6*A:A<1/2?e:A<2/3?n+(e-n)*6*(2/3-A):n}class qe{constructor(e,A,t){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,A,t)}set(e,A,t){if(A===void 0&&t===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,A,t);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,A=FA){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,eA.toWorkingColorSpace(this,A),this}setRGB(e,A,t,i=eA.workingColorSpace){return this.r=e,this.g=A,this.b=t,eA.toWorkingColorSpace(this,i),this}setHSL(e,A,t,i=eA.workingColorSpace){if(e=Al(e,1),A=UA(A,0,1),t=UA(t,0,1),A===0)this.r=this.g=this.b=t;else{const r=t<=.5?t*(1+A):t+A-t*A,s=2*t-r;this.r=La(s,r,e+1/3),this.g=La(s,r,e),this.b=La(s,r,e-1/3)}return eA.toWorkingColorSpace(this,i),this}setStyle(e,A=FA){function t(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return t(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,A);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return t(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,A);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return t(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,A);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,A);if(s===6)return this.setHex(parseInt(r,16),A);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,A);return this}setColorName(e,A=FA){const t=gh[e.toLowerCase()];return t!==void 0?this.setHex(t,A):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}copyLinearToSRGB(e){return this.r=_a(e.r),this.g=_a(e.g),this.b=_a(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=FA){return eA.fromWorkingColorSpace(IA.copy(this),e),Math.round(UA(IA.r*255,0,255))*65536+Math.round(UA(IA.g*255,0,255))*256+Math.round(UA(IA.b*255,0,255))}getHexString(e=FA){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,A=eA.workingColorSpace){eA.fromWorkingColorSpace(IA.copy(this),A);const t=IA.r,i=IA.g,r=IA.b,s=Math.max(t,i,r),a=Math.min(t,i,r);let o,l;const c=(a+s)/2;if(a===s)o=0,l=0;else{const u=s-a;switch(l=c<=.5?u/(s+a):u/(2-s-a),s){case t:o=(i-r)/u+(i<r?6:0);break;case i:o=(r-t)/u+2;break;case r:o=(t-i)/u+4;break}o/=6}return e.h=o,e.s=l,e.l=c,e}getRGB(e,A=eA.workingColorSpace){return eA.fromWorkingColorSpace(IA.copy(this),A),e.r=IA.r,e.g=IA.g,e.b=IA.b,e}getStyle(e=FA){eA.fromWorkingColorSpace(IA.copy(this),e);const A=IA.r,t=IA.g,i=IA.b;return e!==FA?`color(${e} ${A.toFixed(3)} ${t.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(A*255)},${Math.round(t*255)},${Math.round(i*255)})`}offsetHSL(e,A,t){return this.getHSL(Kt),this.setHSL(Kt.h+e,Kt.s+A,Kt.l+t)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,A){return this.r=e.r+A.r,this.g=e.g+A.g,this.b=e.b+A.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,A){return this.r+=(e.r-this.r)*A,this.g+=(e.g-this.g)*A,this.b+=(e.b-this.b)*A,this}lerpColors(e,A,t){return this.r=e.r+(A.r-e.r)*t,this.g=e.g+(A.g-e.g)*t,this.b=e.b+(A.b-e.b)*t,this}lerpHSL(e,A){this.getHSL(Kt),e.getHSL(Hr);const t=Ar(Kt.h,Hr.h,A),i=Ar(Kt.s,Hr.s,A),r=Ar(Kt.l,Hr.l,A);return this.setHSL(t,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const A=this.r,t=this.g,i=this.b,r=e.elements;return this.r=r[0]*A+r[3]*t+r[6]*i,this.g=r[1]*A+r[4]*t+r[7]*i,this.b=r[2]*A+r[5]*t+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,A=0){return this.r=e[A],this.g=e[A+1],this.b=e[A+2],this}toArray(e=[],A=0){return e[A]=this.r,e[A+1]=this.g,e[A+2]=this.b,e}fromBufferAttribute(e,A){return this.r=e.getX(A),this.g=e.getY(A),this.b=e.getZ(A),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const IA=new qe;qe.NAMES=gh;let Ep=0;class Js extends Hn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=Qi(),this.name="",this.type="Material",this.blending=gi,this.side=on,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bo,this.blendDst=wo,this.blendEquation=vn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ac,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=On,this.stencilZFail=On,this.stencilZPass=On,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const A in e){const t=e[A];if(t===void 0){console.warn(`THREE.Material: parameter '${A}' has value of undefined.`);continue}const i=this[A];if(i===void 0){console.warn(`THREE.Material: '${A}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(t):i&&i.isVector3&&t&&t.isVector3?i.copy(t):this[A]=t}}toJSON(e){const A=e===void 0||typeof e=="string";A&&(e={textures:{},images:{}});const t={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.color&&this.color.isColor&&(t.color=this.color.getHex()),this.roughness!==void 0&&(t.roughness=this.roughness),this.metalness!==void 0&&(t.metalness=this.metalness),this.sheen!==void 0&&(t.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(t.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(t.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(t.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(t.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(t.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(t.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(t.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(t.shininess=this.shininess),this.clearcoat!==void 0&&(t.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(t.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(t.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(t.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(t.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,t.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(t.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(t.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(t.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(t.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(t.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(t.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(t.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(t.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(t.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(t.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(t.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(t.lightMap=this.lightMap.toJSON(e).uuid,t.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(t.aoMap=this.aoMap.toJSON(e).uuid,t.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(t.bumpMap=this.bumpMap.toJSON(e).uuid,t.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(t.normalMap=this.normalMap.toJSON(e).uuid,t.normalMapType=this.normalMapType,t.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(t.displacementMap=this.displacementMap.toJSON(e).uuid,t.displacementScale=this.displacementScale,t.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(t.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(t.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(t.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(t.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(t.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(t.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(t.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(t.combine=this.combine)),this.envMapIntensity!==void 0&&(t.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(t.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(t.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(t.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(t.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(t.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(t.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(t.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(t.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(t.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(t.size=this.size),this.shadowSide!==null&&(t.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(t.sizeAttenuation=this.sizeAttenuation),this.blending!==gi&&(t.blending=this.blending),this.side!==on&&(t.side=this.side),this.vertexColors===!0&&(t.vertexColors=!0),this.opacity<1&&(t.opacity=this.opacity),this.transparent===!0&&(t.transparent=!0),this.blendSrc!==Bo&&(t.blendSrc=this.blendSrc),this.blendDst!==wo&&(t.blendDst=this.blendDst),this.blendEquation!==vn&&(t.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(t.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(t.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(t.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(t.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(t.blendAlpha=this.blendAlpha),this.depthFunc!==Ss&&(t.depthFunc=this.depthFunc),this.depthTest===!1&&(t.depthTest=this.depthTest),this.depthWrite===!1&&(t.depthWrite=this.depthWrite),this.colorWrite===!1&&(t.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(t.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ac&&(t.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(t.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(t.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==On&&(t.stencilFail=this.stencilFail),this.stencilZFail!==On&&(t.stencilZFail=this.stencilZFail),this.stencilZPass!==On&&(t.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(t.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(t.rotation=this.rotation),this.polygonOffset===!0&&(t.polygonOffset=!0),this.polygonOffsetFactor!==0&&(t.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(t.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(t.linewidth=this.linewidth),this.dashSize!==void 0&&(t.dashSize=this.dashSize),this.gapSize!==void 0&&(t.gapSize=this.gapSize),this.scale!==void 0&&(t.scale=this.scale),this.dithering===!0&&(t.dithering=!0),this.alphaTest>0&&(t.alphaTest=this.alphaTest),this.alphaHash===!0&&(t.alphaHash=!0),this.alphaToCoverage===!0&&(t.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(t.premultipliedAlpha=!0),this.forceSinglePass===!0&&(t.forceSinglePass=!0),this.wireframe===!0&&(t.wireframe=!0),this.wireframeLinewidth>1&&(t.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(t.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(t.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(t.flatShading=!0),this.visible===!1&&(t.visible=!1),this.toneMapped===!1&&(t.toneMapped=!1),this.fog===!1&&(t.fog=!1),Object.keys(this.userData).length>0&&(t.userData=this.userData);function i(r){const s=[];for(const a in r){const o=r[a];delete o.metadata,s.push(o)}return s}if(A){const r=i(e.textures),s=i(e.images);r.length>0&&(t.textures=r),s.length>0&&(t.images=s)}return t}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const A=e.clippingPlanes;let t=null;if(A!==null){const i=A.length;t=new Array(i);for(let r=0;r!==i;++r)t[r]=A[r].clone()}return this.clippingPlanes=t,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class nl extends Js{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ju,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gA=new Q,Pr=new Ie;class ft{constructor(e,A,t=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=A,this.count=e!==void 0?e.length/A:0,this.normalized=t,this.usage=tc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=It,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return mi("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,A){this.updateRanges.push({start:e,count:A})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,A,t){e*=this.itemSize,t*=A.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=A.array[t+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let A=0,t=this.count;A<t;A++)Pr.fromBufferAttribute(this,A),Pr.applyMatrix3(e),this.setXY(A,Pr.x,Pr.y);else if(this.itemSize===3)for(let A=0,t=this.count;A<t;A++)gA.fromBufferAttribute(this,A),gA.applyMatrix3(e),this.setXYZ(A,gA.x,gA.y,gA.z);return this}applyMatrix4(e){for(let A=0,t=this.count;A<t;A++)gA.fromBufferAttribute(this,A),gA.applyMatrix4(e),this.setXYZ(A,gA.x,gA.y,gA.z);return this}applyNormalMatrix(e){for(let A=0,t=this.count;A<t;A++)gA.fromBufferAttribute(this,A),gA.applyNormalMatrix(e),this.setXYZ(A,gA.x,gA.y,gA.z);return this}transformDirection(e){for(let A=0,t=this.count;A<t;A++)gA.fromBufferAttribute(this,A),gA.transformDirection(e),this.setXYZ(A,gA.x,gA.y,gA.z);return this}set(e,A=0){return this.array.set(e,A),this}getComponent(e,A){let t=this.array[e*this.itemSize+A];return this.normalized&&(t=li(t,this.array)),t}setComponent(e,A,t){return this.normalized&&(t=PA(t,this.array)),this.array[e*this.itemSize+A]=t,this}getX(e){let A=this.array[e*this.itemSize];return this.normalized&&(A=li(A,this.array)),A}setX(e,A){return this.normalized&&(A=PA(A,this.array)),this.array[e*this.itemSize]=A,this}getY(e){let A=this.array[e*this.itemSize+1];return this.normalized&&(A=li(A,this.array)),A}setY(e,A){return this.normalized&&(A=PA(A,this.array)),this.array[e*this.itemSize+1]=A,this}getZ(e){let A=this.array[e*this.itemSize+2];return this.normalized&&(A=li(A,this.array)),A}setZ(e,A){return this.normalized&&(A=PA(A,this.array)),this.array[e*this.itemSize+2]=A,this}getW(e){let A=this.array[e*this.itemSize+3];return this.normalized&&(A=li(A,this.array)),A}setW(e,A){return this.normalized&&(A=PA(A,this.array)),this.array[e*this.itemSize+3]=A,this}setXY(e,A,t){return e*=this.itemSize,this.normalized&&(A=PA(A,this.array),t=PA(t,this.array)),this.array[e+0]=A,this.array[e+1]=t,this}setXYZ(e,A,t,i){return e*=this.itemSize,this.normalized&&(A=PA(A,this.array),t=PA(t,this.array),i=PA(i,this.array)),this.array[e+0]=A,this.array[e+1]=t,this.array[e+2]=i,this}setXYZW(e,A,t,i,r){return e*=this.itemSize,this.normalized&&(A=PA(A,this.array),t=PA(t,this.array),i=PA(i,this.array),r=PA(r,this.array)),this.array[e+0]=A,this.array[e+1]=t,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tc&&(e.usage=this.usage),e}}class mh extends ft{constructor(e,A,t){super(new Uint16Array(e),A,t)}}class Bh extends ft{constructor(e,A,t){super(new Uint32Array(e),A,t)}}class ht extends ft{constructor(e,A,t){super(new Float32Array(e),A,t)}}let xp=0;const jA=new yA,Ia=new qA,Jn=new Q,JA=new Er,Oi=new Er,EA=new Q;class un extends Hn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=Qi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ch(e)?Bh:mh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,A){return this.attributes[e]=A,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,A,t=0){this.groups.push({start:e,count:A,materialIndex:t})}clearGroups(){this.groups=[]}setDrawRange(e,A){this.drawRange.start=e,this.drawRange.count=A}applyMatrix4(e){const A=this.attributes.position;A!==void 0&&(A.applyMatrix4(e),A.needsUpdate=!0);const t=this.attributes.normal;if(t!==void 0){const r=new ke().getNormalMatrix(e);t.applyNormalMatrix(r),t.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jA.makeRotationFromQuaternion(e),this.applyMatrix4(jA),this}rotateX(e){return jA.makeRotationX(e),this.applyMatrix4(jA),this}rotateY(e){return jA.makeRotationY(e),this.applyMatrix4(jA),this}rotateZ(e){return jA.makeRotationZ(e),this.applyMatrix4(jA),this}translate(e,A,t){return jA.makeTranslation(e,A,t),this.applyMatrix4(jA),this}scale(e,A,t){return jA.makeScale(e,A,t),this.applyMatrix4(jA),this}lookAt(e){return Ia.lookAt(e),Ia.updateMatrix(),this.applyMatrix4(Ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jn).negate(),this.translate(Jn.x,Jn.y,Jn.z),this}setFromPoints(e){const A=[];for(let t=0,i=e.length;t<i;t++){const r=e[t];A.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ht(A,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Er);const e=this.attributes.position,A=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),A)for(let t=0,i=A.length;t<i;t++){const r=A[t];JA.setFromBufferAttribute(r),this.morphTargetsRelative?(EA.addVectors(this.boundingBox.min,JA.min),this.boundingBox.expandByPoint(EA),EA.addVectors(this.boundingBox.max,JA.max),this.boundingBox.expandByPoint(EA)):(this.boundingBox.expandByPoint(JA.min),this.boundingBox.expandByPoint(JA.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tl);const e=this.attributes.position,A=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Q,1/0);return}if(e){const t=this.boundingSphere.center;if(JA.setFromBufferAttribute(e),A)for(let r=0,s=A.length;r<s;r++){const a=A[r];Oi.setFromBufferAttribute(a),this.morphTargetsRelative?(EA.addVectors(JA.min,Oi.min),JA.expandByPoint(EA),EA.addVectors(JA.max,Oi.max),JA.expandByPoint(EA)):(JA.expandByPoint(Oi.min),JA.expandByPoint(Oi.max))}JA.getCenter(t);let i=0;for(let r=0,s=e.count;r<s;r++)EA.fromBufferAttribute(e,r),i=Math.max(i,t.distanceToSquared(EA));if(A)for(let r=0,s=A.length;r<s;r++){const a=A[r],o=this.morphTargetsRelative;for(let l=0,c=a.count;l<c;l++)EA.fromBufferAttribute(a,l),o&&(Jn.fromBufferAttribute(e,l),EA.add(Jn)),i=Math.max(i,t.distanceToSquared(EA))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,A=this.attributes;if(e===null||A.position===void 0||A.normal===void 0||A.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const t=e.array,i=A.position.array,r=A.normal.array,s=A.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ft(new Float32Array(4*a),4));const o=this.getAttribute("tangent").array,l=[],c=[];for(let B=0;B<a;B++)l[B]=new Q,c[B]=new Q;const u=new Q,h=new Q,p=new Q,g=new Ie,m=new Ie,d=new Ie,f=new Q,C=new Q;function v(B,M,k){u.fromArray(i,B*3),h.fromArray(i,M*3),p.fromArray(i,k*3),g.fromArray(s,B*2),m.fromArray(s,M*2),d.fromArray(s,k*2),h.sub(u),p.sub(u),m.sub(g),d.sub(g);const z=1/(m.x*d.y-d.x*m.y);isFinite(z)&&(f.copy(h).multiplyScalar(d.y).addScaledVector(p,-m.y).multiplyScalar(z),C.copy(p).multiplyScalar(m.x).addScaledVector(h,-d.x).multiplyScalar(z),l[B].add(f),l[M].add(f),l[k].add(f),c[B].add(C),c[M].add(C),c[k].add(C))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.length}]);for(let B=0,M=E.length;B<M;++B){const k=E[B],z=k.start,T=k.count;for(let G=z,R=z+T;G<R;G+=3)v(t[G+0],t[G+1],t[G+2])}const b=new Q,U=new Q,y=new Q,H=new Q;function K(B){y.fromArray(r,B*3),H.copy(y);const M=l[B];b.copy(M),b.sub(y.multiplyScalar(y.dot(M))).normalize(),U.crossVectors(H,M);const z=U.dot(c[B])<0?-1:1;o[B*4]=b.x,o[B*4+1]=b.y,o[B*4+2]=b.z,o[B*4+3]=z}for(let B=0,M=E.length;B<M;++B){const k=E[B],z=k.start,T=k.count;for(let G=z,R=z+T;G<R;G+=3)K(t[G+0]),K(t[G+1]),K(t[G+2])}}computeVertexNormals(){const e=this.index,A=this.getAttribute("position");if(A!==void 0){let t=this.getAttribute("normal");if(t===void 0)t=new ft(new Float32Array(A.count*3),3),this.setAttribute("normal",t);else for(let h=0,p=t.count;h<p;h++)t.setXYZ(h,0,0,0);const i=new Q,r=new Q,s=new Q,a=new Q,o=new Q,l=new Q,c=new Q,u=new Q;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),m=e.getX(h+1),d=e.getX(h+2);i.fromBufferAttribute(A,g),r.fromBufferAttribute(A,m),s.fromBufferAttribute(A,d),c.subVectors(s,r),u.subVectors(i,r),c.cross(u),a.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),l.fromBufferAttribute(t,d),a.add(c),o.add(c),l.add(c),t.setXYZ(g,a.x,a.y,a.z),t.setXYZ(m,o.x,o.y,o.z),t.setXYZ(d,l.x,l.y,l.z)}else for(let h=0,p=A.count;h<p;h+=3)i.fromBufferAttribute(A,h+0),r.fromBufferAttribute(A,h+1),s.fromBufferAttribute(A,h+2),c.subVectors(s,r),u.subVectors(i,r),c.cross(u),t.setXYZ(h+0,c.x,c.y,c.z),t.setXYZ(h+1,c.x,c.y,c.z),t.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),t.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let A=0,t=e.count;A<t;A++)EA.fromBufferAttribute(e,A),EA.normalize(),e.setXYZ(A,EA.x,EA.y,EA.z)}toNonIndexed(){function e(a,o){const l=a.array,c=a.itemSize,u=a.normalized,h=new l.constructor(o.length*c);let p=0,g=0;for(let m=0,d=o.length;m<d;m++){a.isInterleavedBufferAttribute?p=o[m]*a.data.stride+a.offset:p=o[m]*c;for(let f=0;f<c;f++)h[g++]=l[p++]}return new ft(h,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const A=new un,t=this.index.array,i=this.attributes;for(const a in i){const o=i[a],l=e(o,t);A.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const o=[],l=r[a];for(let c=0,u=l.length;c<u;c++){const h=l[c],p=e(h,t);o.push(p)}A.morphAttributes[a]=o}A.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,o=s.length;a<o;a++){const l=s[a];A.addGroup(l.start,l.count,l.materialIndex)}return A}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const l in o)o[l]!==void 0&&(e[l]=o[l]);return e}e.data={attributes:{}};const A=this.index;A!==null&&(e.data.index={type:A.array.constructor.name,array:Array.prototype.slice.call(A.array)});const t=this.attributes;for(const o in t){const l=t[o];e.data.attributes[o]=l.toJSON(e.data)}const i={};let r=!1;for(const o in this.morphAttributes){const l=this.morphAttributes[o],c=[];for(let u=0,h=l.length;u<h;u++){const p=l[u];c.push(p.toJSON(e.data))}c.length>0&&(i[o]=c,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const A={};this.name=e.name;const t=e.index;t!==null&&this.setIndex(t.clone(A));const i=e.attributes;for(const l in i){const c=i[l];this.setAttribute(l,c.clone(A))}const r=e.morphAttributes;for(const l in r){const c=[],u=r[l];for(let h=0,p=u.length;h<p;h++)c.push(u[h].clone(A));this.morphAttributes[l]=c}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let l=0,c=s.length;l<c;l++){const u=s[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const o=e.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gc=new yA,gn=new dh,Nr=new tl,mc=new Q,Zn=new Q,qn=new Q,$n=new Q,Ra=new Q,Or=new Q,Gr=new Ie,Vr=new Ie,Kr=new Ie,Bc=new Q,wc=new Q,vc=new Q,kr=new Q,zr=new Q;class wt extends qA{constructor(e=new un,A=new nl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=A,this.updateMorphTargets()}copy(e,A){return super.copy(e,A),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const A=this.geometry.morphAttributes,t=Object.keys(A);if(t.length>0){const i=A[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,A){const t=this.geometry,i=t.attributes.position,r=t.morphAttributes.position,s=t.morphTargetsRelative;A.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Or.set(0,0,0);for(let o=0,l=r.length;o<l;o++){const c=a[o],u=r[o];c!==0&&(Ra.fromBufferAttribute(u,e),s?Or.addScaledVector(Ra,c):Or.addScaledVector(Ra.sub(A),c))}A.add(Or)}return A}raycast(e,A){const t=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(t.boundingSphere===null&&t.computeBoundingSphere(),Nr.copy(t.boundingSphere),Nr.applyMatrix4(r),gn.copy(e.ray).recast(e.near),!(Nr.containsPoint(gn.origin)===!1&&(gn.intersectSphere(Nr,mc)===null||gn.origin.distanceToSquared(mc)>(e.far-e.near)**2))&&(gc.copy(r).invert(),gn.copy(e.ray).applyMatrix4(gc),!(t.boundingBox!==null&&gn.intersectsBox(t.boundingBox)===!1)&&this._computeIntersections(e,A,gn)))}_computeIntersections(e,A,t){let i;const r=this.geometry,s=this.material,a=r.index,o=r.attributes.position,l=r.attributes.uv,c=r.attributes.uv1,u=r.attributes.normal,h=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(s))for(let g=0,m=h.length;g<m;g++){const d=h[g],f=s[d.materialIndex],C=Math.max(d.start,p.start),v=Math.min(a.count,Math.min(d.start+d.count,p.start+p.count));for(let E=C,b=v;E<b;E+=3){const U=a.getX(E),y=a.getX(E+1),H=a.getX(E+2);i=Wr(this,f,e,t,l,c,u,U,y,H),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=d.materialIndex,A.push(i))}}else{const g=Math.max(0,p.start),m=Math.min(a.count,p.start+p.count);for(let d=g,f=m;d<f;d+=3){const C=a.getX(d),v=a.getX(d+1),E=a.getX(d+2);i=Wr(this,s,e,t,l,c,u,C,v,E),i&&(i.faceIndex=Math.floor(d/3),A.push(i))}}else if(o!==void 0)if(Array.isArray(s))for(let g=0,m=h.length;g<m;g++){const d=h[g],f=s[d.materialIndex],C=Math.max(d.start,p.start),v=Math.min(o.count,Math.min(d.start+d.count,p.start+p.count));for(let E=C,b=v;E<b;E+=3){const U=E,y=E+1,H=E+2;i=Wr(this,f,e,t,l,c,u,U,y,H),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=d.materialIndex,A.push(i))}}else{const g=Math.max(0,p.start),m=Math.min(o.count,p.start+p.count);for(let d=g,f=m;d<f;d+=3){const C=d,v=d+1,E=d+2;i=Wr(this,s,e,t,l,c,u,C,v,E),i&&(i.faceIndex=Math.floor(d/3),A.push(i))}}}}function Up(n,e,A,t,i,r,s,a){let o;if(e.side===zA?o=t.intersectTriangle(s,r,i,!0,a):o=t.intersectTriangle(i,r,s,e.side===on,a),o===null)return null;zr.copy(a),zr.applyMatrix4(n.matrixWorld);const l=A.ray.origin.distanceTo(zr);return l<A.near||l>A.far?null:{distance:l,point:zr.clone(),object:n}}function Wr(n,e,A,t,i,r,s,a,o,l){n.getVertexPosition(a,Zn),n.getVertexPosition(o,qn),n.getVertexPosition(l,$n);const c=Up(n,e,A,t,Zn,qn,$n,kr);if(c){i&&(Gr.fromBufferAttribute(i,a),Vr.fromBufferAttribute(i,o),Kr.fromBufferAttribute(i,l),c.uv=Bt.getInterpolation(kr,Zn,qn,$n,Gr,Vr,Kr,new Ie)),r&&(Gr.fromBufferAttribute(r,a),Vr.fromBufferAttribute(r,o),Kr.fromBufferAttribute(r,l),c.uv1=Bt.getInterpolation(kr,Zn,qn,$n,Gr,Vr,Kr,new Ie),c.uv2=c.uv1),s&&(Bc.fromBufferAttribute(s,a),wc.fromBufferAttribute(s,o),vc.fromBufferAttribute(s,l),c.normal=Bt.getInterpolation(kr,Zn,qn,$n,Bc,wc,vc,new Q),c.normal.dot(t.direction)>0&&c.normal.multiplyScalar(-1));const u={a,b:o,c:l,normal:new Q,materialIndex:0};Bt.getNormal(Zn,qn,$n,u.normal),c.face=u}return c}class xr extends un{constructor(e=1,A=1,t=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:A,depth:t,widthSegments:i,heightSegments:r,depthSegments:s};const a=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);const o=[],l=[],c=[],u=[];let h=0,p=0;g("z","y","x",-1,-1,t,A,e,s,r,0),g("z","y","x",1,-1,t,A,-e,s,r,1),g("x","z","y",1,1,e,t,A,i,s,2),g("x","z","y",1,-1,e,t,-A,i,s,3),g("x","y","z",1,-1,e,A,t,i,r,4),g("x","y","z",-1,-1,e,A,-t,i,r,5),this.setIndex(o),this.setAttribute("position",new ht(l,3)),this.setAttribute("normal",new ht(c,3)),this.setAttribute("uv",new ht(u,2));function g(m,d,f,C,v,E,b,U,y,H,K){const B=E/y,M=b/H,k=E/2,z=b/2,T=U/2,G=y+1,R=H+1;let X=0,W=0;const Y=new Q;for(let J=0;J<R;J++){const ee=J*M-z;for(let re=0;re<G;re++){const we=re*B-k;Y[m]=we*C,Y[d]=ee*v,Y[f]=T,l.push(Y.x,Y.y,Y.z),Y[m]=0,Y[d]=0,Y[f]=U>0?1:-1,c.push(Y.x,Y.y,Y.z),u.push(re/y),u.push(1-J/H),X+=1}}for(let J=0;J<H;J++)for(let ee=0;ee<y;ee++){const re=h+ee+G*J,we=h+ee+G*(J+1),O=h+(ee+1)+G*(J+1),Z=h+(ee+1)+G*J;o.push(re,we,Z),o.push(we,O,Z),W+=6}a.addGroup(p,W,K),p+=W,h+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function bi(n){const e={};for(const A in n){e[A]={};for(const t in n[A]){const i=n[A][t];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[A][t]=null):e[A][t]=i.clone():Array.isArray(i)?e[A][t]=i.slice():e[A][t]=i}}return e}function NA(n){const e={};for(let A=0;A<n.length;A++){const t=bi(n[A]);for(const i in t)e[i]=t[i]}return e}function yp(n){const e=[];for(let A=0;A<n.length;A++)e.push(n[A].clone());return e}function wh(n){return n.getRenderTarget()===null?n.outputColorSpace:eA.workingColorSpace}const Sp={clone:bi,merge:NA};var Mp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ln extends Js{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mp,this.fragmentShader=Fp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bi(e.uniforms),this.uniformsGroups=yp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const A=super.toJSON(e);A.glslVersion=this.glslVersion,A.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?A.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?A.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?A.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?A.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?A.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?A.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?A.uniforms[i]={type:"m4",value:s.toArray()}:A.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(A.defines=this.defines),A.vertexShader=this.vertexShader,A.fragmentShader=this.fragmentShader,A.lights=this.lights,A.clipping=this.clipping;const t={};for(const i in this.extensions)this.extensions[i]===!0&&(t[i]=!0);return Object.keys(t).length>0&&(A.extensions=t),A}}class vh extends qA{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yA,this.projectionMatrix=new yA,this.projectionMatrixInverse=new yA,this.coordinateSystem=Rt}copy(e,A){return super.copy(e,A),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,A){super.updateWorldMatrix(e,A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const kt=new Q,_c=new Ie,Cc=new Ie;class At extends vh{constructor(e=50,A=1,t=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=t,this.far=i,this.focus=10,this.aspect=A,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,A){return super.copy(e,A),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const A=.5*this.getFilmHeight()/e;this.fov=ur*2*Math.atan(A),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(er*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ur*2*Math.atan(Math.tan(er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,A,t){kt.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),A.set(kt.x,kt.y).multiplyScalar(-e/kt.z),kt.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(kt.x,kt.y).multiplyScalar(-e/kt.z)}getViewSize(e,A){return this.getViewBounds(e,_c,Cc),A.subVectors(Cc,_c)}setViewOffset(e,A,t,i,r,s){this.aspect=e/A,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=A,this.view.offsetX=t,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let A=e*Math.tan(er*.5*this.fov)/this.zoom,t=2*A,i=this.aspect*t,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const o=s.fullWidth,l=s.fullHeight;r+=s.offsetX*i/o,A-=s.offsetY*t/l,i*=s.width/o,t*=s.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,A,A-t,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const A=super.toJSON(e);return A.object.fov=this.fov,A.object.zoom=this.zoom,A.object.near=this.near,A.object.far=this.far,A.object.focus=this.focus,A.object.aspect=this.aspect,this.view!==null&&(A.object.view=Object.assign({},this.view)),A.object.filmGauge=this.filmGauge,A.object.filmOffset=this.filmOffset,A}}const jn=-90,ei=1;class bp extends qA{constructor(e,A,t){super(),this.type="CubeCamera",this.renderTarget=t,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new At(jn,ei,e,A);i.layers=this.layers,this.add(i);const r=new At(jn,ei,e,A);r.layers=this.layers,this.add(r);const s=new At(jn,ei,e,A);s.layers=this.layers,this.add(s);const a=new At(jn,ei,e,A);a.layers=this.layers,this.add(a);const o=new At(jn,ei,e,A);o.layers=this.layers,this.add(o);const l=new At(jn,ei,e,A);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,A=this.children.concat(),[t,i,r,s,a,o]=A;for(const l of A)this.remove(l);if(e===Rt)t.up.set(0,1,0),t.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===Ts)t.up.set(0,-1,0),t.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of A)this.add(l),l.updateMatrixWorld()}update(e,A){this.parent===null&&this.updateMatrixWorld();const{renderTarget:t,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,o,l,c]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const m=t.texture.generateMipmaps;t.texture.generateMipmaps=!1,e.setRenderTarget(t,0,i),e.render(A,r),e.setRenderTarget(t,1,i),e.render(A,s),e.setRenderTarget(t,2,i),e.render(A,a),e.setRenderTarget(t,3,i),e.render(A,o),e.setRenderTarget(t,4,i),e.render(A,l),t.texture.generateMipmaps=m,e.setRenderTarget(t,5,i),e.render(A,c),e.setRenderTarget(u,h,p),e.xr.enabled=g,t.texture.needsPMREMUpdate=!0}}class _h extends WA{constructor(e,A,t,i,r,s,a,o,l,c){e=e!==void 0?e:[],A=A!==void 0?A:Si,super(e,A,t,i,r,s,a,o,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Tp extends Rn{constructor(e=1,A={}){super(e,e,A),this.isWebGLCubeRenderTarget=!0;const t={width:e,height:e,depth:1},i=[t,t,t,t,t,t];A.encoding!==void 0&&(mi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),A.colorSpace=A.encoding===Qn?FA:nt),this.texture=new _h(i,A.mapping,A.wrapS,A.wrapT,A.magFilter,A.minFilter,A.format,A.type,A.anisotropy,A.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=A.generateMipmaps!==void 0?A.generateMipmaps:!1,this.texture.minFilter=A.minFilter!==void 0?A.minFilter:KA}fromEquirectangularTexture(e,A){this.texture.type=A.type,this.texture.colorSpace=A.colorSpace,this.texture.generateMipmaps=A.generateMipmaps,this.texture.minFilter=A.minFilter,this.texture.magFilter=A.magFilter;const t={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new xr(5,5,5),r=new ln({name:"CubemapFromEquirect",uniforms:bi(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:zA,blending:tn});r.uniforms.tEquirect.value=A;const s=new wt(i,r),a=A.minFilter;return A.minFilter===En&&(A.minFilter=KA),new bp(1,10,this).update(e,s),A.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,A,t,i){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(A,t,i);e.setRenderTarget(r)}}const Da=new Q,Qp=new Q,Lp=new ke;class Xt{constructor(e=new Q(1,0,0),A=0){this.isPlane=!0,this.normal=e,this.constant=A}set(e,A){return this.normal.copy(e),this.constant=A,this}setComponents(e,A,t,i){return this.normal.set(e,A,t),this.constant=i,this}setFromNormalAndCoplanarPoint(e,A){return this.normal.copy(e),this.constant=-A.dot(this.normal),this}setFromCoplanarPoints(e,A,t){const i=Da.subVectors(t,A).cross(Qp.subVectors(e,A)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,A){return A.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,A){const t=e.delta(Da),i=this.normal.dot(t);if(i===0)return this.distanceToPoint(e.start)===0?A.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:A.copy(e.start).addScaledVector(t,r)}intersectsLine(e){const A=this.distanceToPoint(e.start),t=this.distanceToPoint(e.end);return A<0&&t>0||t<0&&A>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,A){const t=A||Lp.getNormalMatrix(e),i=this.coplanarPoint(Da).applyMatrix4(e),r=this.normal.applyMatrix3(t).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mn=new tl,Xr=new Q;class Ch{constructor(e=new Xt,A=new Xt,t=new Xt,i=new Xt,r=new Xt,s=new Xt){this.planes=[e,A,t,i,r,s]}set(e,A,t,i,r,s){const a=this.planes;return a[0].copy(e),a[1].copy(A),a[2].copy(t),a[3].copy(i),a[4].copy(r),a[5].copy(s),this}copy(e){const A=this.planes;for(let t=0;t<6;t++)A[t].copy(e.planes[t]);return this}setFromProjectionMatrix(e,A=Rt){const t=this.planes,i=e.elements,r=i[0],s=i[1],a=i[2],o=i[3],l=i[4],c=i[5],u=i[6],h=i[7],p=i[8],g=i[9],m=i[10],d=i[11],f=i[12],C=i[13],v=i[14],E=i[15];if(t[0].setComponents(o-r,h-l,d-p,E-f).normalize(),t[1].setComponents(o+r,h+l,d+p,E+f).normalize(),t[2].setComponents(o+s,h+c,d+g,E+C).normalize(),t[3].setComponents(o-s,h-c,d-g,E-C).normalize(),t[4].setComponents(o-a,h-u,d-m,E-v).normalize(),A===Rt)t[5].setComponents(o+a,h+u,d+m,E+v).normalize();else if(A===Ts)t[5].setComponents(a,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+A);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const A=e.geometry;A.boundingSphere===null&&A.computeBoundingSphere(),mn.copy(A.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mn)}intersectsSprite(e){return mn.center.set(0,0,0),mn.radius=.7071067811865476,mn.applyMatrix4(e.matrixWorld),this.intersectsSphere(mn)}intersectsSphere(e){const A=this.planes,t=e.center,i=-e.radius;for(let r=0;r<6;r++)if(A[r].distanceToPoint(t)<i)return!1;return!0}intersectsBox(e){const A=this.planes;for(let t=0;t<6;t++){const i=A[t];if(Xr.x=i.normal.x>0?e.max.x:e.min.x,Xr.y=i.normal.y>0?e.max.y:e.min.y,Xr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Xr)<0)return!1}return!0}containsPoint(e){const A=this.planes;for(let t=0;t<6;t++)if(A[t].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Eh(){let n=null,e=!1,A=null,t=null;function i(r,s){A(r,s),t=n.requestAnimationFrame(i)}return{start:function(){e!==!0&&A!==null&&(t=n.requestAnimationFrame(i),e=!0)},stop:function(){n.cancelAnimationFrame(t),e=!1},setAnimationLoop:function(r){A=r},setContext:function(r){n=r}}}function Ip(n,e){const A=e.isWebGL2,t=new WeakMap;function i(l,c){const u=l.array,h=l.usage,p=u.byteLength,g=n.createBuffer();n.bindBuffer(c,g),n.bufferData(c,u,h),l.onUploadCallback();let m;if(u instanceof Float32Array)m=n.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(A)m=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else m=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=n.SHORT;else if(u instanceof Uint32Array)m=n.UNSIGNED_INT;else if(u instanceof Int32Array)m=n.INT;else if(u instanceof Int8Array)m=n.BYTE;else if(u instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:p}}function r(l,c,u){const h=c.array,p=c._updateRange,g=c.updateRanges;if(n.bindBuffer(u,l),p.count===-1&&g.length===0&&n.bufferSubData(u,0,h),g.length!==0){for(let m=0,d=g.length;m<d;m++){const f=g[m];A?n.bufferSubData(u,f.start*h.BYTES_PER_ELEMENT,h,f.start,f.count):n.bufferSubData(u,f.start*h.BYTES_PER_ELEMENT,h.subarray(f.start,f.start+f.count))}c.clearUpdateRanges()}p.count!==-1&&(A?n.bufferSubData(u,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):n.bufferSubData(u,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=t.get(l);c&&(n.deleteBuffer(c.buffer),t.delete(l))}function o(l,c){if(l.isGLBufferAttribute){const h=t.get(l);(!h||h.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=t.get(l);if(u===void 0)t.set(l,i(l,c));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,c),u.version=l.version}}return{get:s,remove:a,update:o}}class Zs extends un{constructor(e=1,A=1,t=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:A,widthSegments:t,heightSegments:i};const r=e/2,s=A/2,a=Math.floor(t),o=Math.floor(i),l=a+1,c=o+1,u=e/a,h=A/o,p=[],g=[],m=[],d=[];for(let f=0;f<c;f++){const C=f*h-s;for(let v=0;v<l;v++){const E=v*u-r;g.push(E,-C,0),m.push(0,0,1),d.push(v/a),d.push(1-f/o)}}for(let f=0;f<o;f++)for(let C=0;C<a;C++){const v=C+l*f,E=C+l*(f+1),b=C+1+l*(f+1),U=C+1+l*f;p.push(v,E,U),p.push(E,b,U)}this.setIndex(p),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(m,3)),this.setAttribute("uv",new ht(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zs(e.width,e.height,e.widthSegments,e.heightSegments)}}var Rp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dp=`#ifdef USE_ALPHAHASH
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
#endif`,Hp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Np=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Op=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gp=`#ifdef USE_AOMAP
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
#endif`,Vp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kp=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,kp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,zp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yp=`#ifdef USE_IRIDESCENCE
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
#endif`,Jp=`#ifdef USE_BUMPMAP
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
#endif`,Zp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ag=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ng=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ig=`#define PI 3.141592653589793
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
} // validated`,rg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sg=`vec3 transformedNormal = objectNormal;
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
#endif`,ag=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,og=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ug="gl_FragColor = linearToOutputTexel( gl_FragColor );",hg=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,fg=`#ifdef USE_ENVMAP
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
#endif`,dg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pg=`#ifdef USE_ENVMAP
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
#endif`,gg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mg=`#ifdef USE_ENVMAP
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
#endif`,Bg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_g=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cg=`#ifdef USE_GRADIENTMAP
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
}`,Eg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,xg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ug=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sg=`uniform bool receiveShadow;
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
#endif`,Mg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,Fg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lg=`PhysicalMaterial material;
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
#endif`,Ig=`struct PhysicalMaterial {
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
}`,Rg=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Dg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Hg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ng=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Og=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Gg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Vg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zg=`#if defined( USE_POINTS_UV )
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
#endif`,Wg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jg=`#ifdef USE_MORPHNORMALS
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
#endif`,Zg=`#ifdef USE_MORPHTARGETS
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
#endif`,qg=`#ifdef USE_MORPHTARGETS
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
#endif`,$g=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,e0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,n0=`#ifdef USE_NORMALMAP
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
#endif`,i0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,r0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,s0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,a0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,o0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,l0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,c0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,u0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,h0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,f0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,d0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,p0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,g0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,m0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,B0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,w0=`float getShadowMask() {
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
}`,v0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_0=`#ifdef USE_SKINNING
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
#endif`,C0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,E0=`#ifdef USE_SKINNING
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
#endif`,x0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,U0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,y0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,S0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,M0=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,F0=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,b0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const I0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,R0=`uniform sampler2D t2D;
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
}`,D0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H0=`#ifdef ENVMAP_TYPE_CUBE
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
	#include <colorspace_fragment>
}`,P0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O0=`#include <common>
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
}`,G0=`#if DEPTH_PACKING == 3200
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
	#endif
}`,V0=`#define DISTANCE
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
}`,K0=`#define DISTANCE
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
}`,k0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,z0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W0=`uniform float scale;
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
}`,X0=`uniform vec3 diffuse;
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
}`,Y0=`#include <common>
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
}`,J0=`uniform vec3 diffuse;
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
}`,Z0=`#define LAMBERT
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
}`,q0=`#define LAMBERT
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
}`,$0=`#define MATCAP
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
}`,j0=`#define MATCAP
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
}`,em=`#define NORMAL
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
}`,Am=`#define NORMAL
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
}`,tm=`#define PHONG
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
}`,nm=`#define PHONG
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
}`,im=`#define STANDARD
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
}`,rm=`#define STANDARD
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
}`,sm=`#define TOON
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
}`,am=`#define TOON
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
}`,om=`uniform float size;
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
}`,lm=`uniform vec3 diffuse;
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
}`,cm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
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
}`,um=`uniform vec3 color;
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
}`,hm=`uniform float rotation;
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
}`,fm=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:Rp,alphahash_pars_fragment:Dp,alphamap_fragment:Hp,alphamap_pars_fragment:Pp,alphatest_fragment:Np,alphatest_pars_fragment:Op,aomap_fragment:Gp,aomap_pars_fragment:Vp,batching_pars_vertex:Kp,batching_vertex:kp,begin_vertex:zp,beginnormal_vertex:Wp,bsdfs:Xp,iridescence_fragment:Yp,bumpmap_pars_fragment:Jp,clipping_planes_fragment:Zp,clipping_planes_pars_fragment:qp,clipping_planes_pars_vertex:$p,clipping_planes_vertex:jp,color_fragment:eg,color_pars_fragment:Ag,color_pars_vertex:tg,color_vertex:ng,common:ig,cube_uv_reflection_fragment:rg,defaultnormal_vertex:sg,displacementmap_pars_vertex:ag,displacementmap_vertex:og,emissivemap_fragment:lg,emissivemap_pars_fragment:cg,colorspace_fragment:ug,colorspace_pars_fragment:hg,envmap_fragment:fg,envmap_common_pars_fragment:dg,envmap_pars_fragment:pg,envmap_pars_vertex:gg,envmap_physical_pars_fragment:Mg,envmap_vertex:mg,fog_vertex:Bg,fog_pars_vertex:wg,fog_fragment:vg,fog_pars_fragment:_g,gradientmap_pars_fragment:Cg,lightmap_fragment:Eg,lightmap_pars_fragment:xg,lights_lambert_fragment:Ug,lights_lambert_pars_fragment:yg,lights_pars_begin:Sg,lights_toon_fragment:Fg,lights_toon_pars_fragment:bg,lights_phong_fragment:Tg,lights_phong_pars_fragment:Qg,lights_physical_fragment:Lg,lights_physical_pars_fragment:Ig,lights_fragment_begin:Rg,lights_fragment_maps:Dg,lights_fragment_end:Hg,logdepthbuf_fragment:Pg,logdepthbuf_pars_fragment:Ng,logdepthbuf_pars_vertex:Og,logdepthbuf_vertex:Gg,map_fragment:Vg,map_pars_fragment:Kg,map_particle_fragment:kg,map_particle_pars_fragment:zg,metalnessmap_fragment:Wg,metalnessmap_pars_fragment:Xg,morphcolor_vertex:Yg,morphnormal_vertex:Jg,morphtarget_pars_vertex:Zg,morphtarget_vertex:qg,normal_fragment_begin:$g,normal_fragment_maps:jg,normal_pars_fragment:e0,normal_pars_vertex:A0,normal_vertex:t0,normalmap_pars_fragment:n0,clearcoat_normal_fragment_begin:i0,clearcoat_normal_fragment_maps:r0,clearcoat_pars_fragment:s0,iridescence_pars_fragment:a0,opaque_fragment:o0,packing:l0,premultiplied_alpha_fragment:c0,project_vertex:u0,dithering_fragment:h0,dithering_pars_fragment:f0,roughnessmap_fragment:d0,roughnessmap_pars_fragment:p0,shadowmap_pars_fragment:g0,shadowmap_pars_vertex:m0,shadowmap_vertex:B0,shadowmask_pars_fragment:w0,skinbase_vertex:v0,skinning_pars_vertex:_0,skinning_vertex:C0,skinnormal_vertex:E0,specularmap_fragment:x0,specularmap_pars_fragment:U0,tonemapping_fragment:y0,tonemapping_pars_fragment:S0,transmission_fragment:M0,transmission_pars_fragment:F0,uv_pars_fragment:b0,uv_pars_vertex:T0,uv_vertex:Q0,worldpos_vertex:L0,background_vert:I0,background_frag:R0,backgroundCube_vert:D0,backgroundCube_frag:H0,cube_vert:P0,cube_frag:N0,depth_vert:O0,depth_frag:G0,distanceRGBA_vert:V0,distanceRGBA_frag:K0,equirect_vert:k0,equirect_frag:z0,linedashed_vert:W0,linedashed_frag:X0,meshbasic_vert:Y0,meshbasic_frag:J0,meshlambert_vert:Z0,meshlambert_frag:q0,meshmatcap_vert:$0,meshmatcap_frag:j0,meshnormal_vert:em,meshnormal_frag:Am,meshphong_vert:tm,meshphong_frag:nm,meshphysical_vert:im,meshphysical_frag:rm,meshtoon_vert:sm,meshtoon_frag:am,points_vert:om,points_frag:lm,shadow_vert:cm,shadow_frag:um,sprite_vert:hm,sprite_frag:fm},se={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},mt={basic:{uniforms:NA([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:NA([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new qe(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:NA([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:NA([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:NA([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new qe(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:NA([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:NA([se.points,se.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:NA([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:NA([se.common,se.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:NA([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:NA([se.sprite,se.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:NA([se.common,se.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:NA([se.lights,se.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};mt.physical={uniforms:NA([mt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Yr={r:0,b:0,g:0};function dm(n,e,A,t,i,r,s){const a=new qe(0);let o=r===!0?0:1,l,c,u=null,h=0,p=null;function g(d,f){let C=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?A:e).get(v)),v===null?m(a,o):v&&v.isColor&&(m(v,1),C=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||C)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ws)?(c===void 0&&(c=new wt(new xr(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:bi(mt.backgroundCube.uniforms),vertexShader:mt.backgroundCube.vertexShader,fragmentShader:mt.backgroundCube.fragmentShader,side:zA,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,U,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=eA.getTransfer(v.colorSpace)!==aA,(u!==v||h!==v.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,h=v.version,p=n.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new wt(new Zs(2,2),new ln({name:"BackgroundMaterial",uniforms:bi(mt.background.uniforms),vertexShader:mt.background.vertexShader,fragmentShader:mt.background.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=eA.getTransfer(v.colorSpace)!==aA,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,u=v,h=v.version,p=n.toneMapping),l.layers.enableAll(),d.unshift(l,l.geometry,l.material,0,0,null))}function m(d,f){d.getRGB(Yr,wh(n)),t.buffers.color.setClear(Yr.r,Yr.g,Yr.b,f,s)}return{getClearColor:function(){return a},setClearColor:function(d,f=1){a.set(d),o=f,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(d){o=d,m(a,o)},render:g}}function pm(n,e,A,t){const i=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=t.isWebGL2?null:e.get("OES_vertex_array_object"),s=t.isWebGL2||r!==null,a={},o=d(null);let l=o,c=!1;function u(T,G,R,X,W){let Y=!1;if(s){const J=m(X,R,G);l!==J&&(l=J,p(l.object)),Y=f(T,X,R,W),Y&&C(T,X,R,W)}else{const J=G.wireframe===!0;(l.geometry!==X.id||l.program!==R.id||l.wireframe!==J)&&(l.geometry=X.id,l.program=R.id,l.wireframe=J,Y=!0)}W!==null&&A.update(W,n.ELEMENT_ARRAY_BUFFER),(Y||c)&&(c=!1,H(T,G,R,X),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,A.get(W).buffer))}function h(){return t.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function p(T){return t.isWebGL2?n.bindVertexArray(T):r.bindVertexArrayOES(T)}function g(T){return t.isWebGL2?n.deleteVertexArray(T):r.deleteVertexArrayOES(T)}function m(T,G,R){const X=R.wireframe===!0;let W=a[T.id];W===void 0&&(W={},a[T.id]=W);let Y=W[G.id];Y===void 0&&(Y={},W[G.id]=Y);let J=Y[X];return J===void 0&&(J=d(h()),Y[X]=J),J}function d(T){const G=[],R=[],X=[];for(let W=0;W<i;W++)G[W]=0,R[W]=0,X[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:R,attributeDivisors:X,object:T,attributes:{},index:null}}function f(T,G,R,X){const W=l.attributes,Y=G.attributes;let J=0;const ee=R.getAttributes();for(const re in ee)if(ee[re].location>=0){const O=W[re];let Z=Y[re];if(Z===void 0&&(re==="instanceMatrix"&&T.instanceMatrix&&(Z=T.instanceMatrix),re==="instanceColor"&&T.instanceColor&&(Z=T.instanceColor)),O===void 0||O.attribute!==Z||Z&&O.data!==Z.data)return!0;J++}return l.attributesNum!==J||l.index!==X}function C(T,G,R,X){const W={},Y=G.attributes;let J=0;const ee=R.getAttributes();for(const re in ee)if(ee[re].location>=0){let O=Y[re];O===void 0&&(re==="instanceMatrix"&&T.instanceMatrix&&(O=T.instanceMatrix),re==="instanceColor"&&T.instanceColor&&(O=T.instanceColor));const Z={};Z.attribute=O,O&&O.data&&(Z.data=O.data),W[re]=Z,J++}l.attributes=W,l.attributesNum=J,l.index=X}function v(){const T=l.newAttributes;for(let G=0,R=T.length;G<R;G++)T[G]=0}function E(T){b(T,0)}function b(T,G){const R=l.newAttributes,X=l.enabledAttributes,W=l.attributeDivisors;R[T]=1,X[T]===0&&(n.enableVertexAttribArray(T),X[T]=1),W[T]!==G&&((t.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[t.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](T,G),W[T]=G)}function U(){const T=l.newAttributes,G=l.enabledAttributes;for(let R=0,X=G.length;R<X;R++)G[R]!==T[R]&&(n.disableVertexAttribArray(R),G[R]=0)}function y(T,G,R,X,W,Y,J){J===!0?n.vertexAttribIPointer(T,G,R,W,Y):n.vertexAttribPointer(T,G,R,X,W,Y)}function H(T,G,R,X){if(t.isWebGL2===!1&&(T.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const W=X.attributes,Y=R.getAttributes(),J=G.defaultAttributeValues;for(const ee in Y){const re=Y[ee];if(re.location>=0){let we=W[ee];if(we===void 0&&(ee==="instanceMatrix"&&T.instanceMatrix&&(we=T.instanceMatrix),ee==="instanceColor"&&T.instanceColor&&(we=T.instanceColor)),we!==void 0){const O=we.normalized,Z=we.itemSize,ce=A.get(we);if(ce===void 0)continue;const ve=ce.buffer,Me=ce.type,pe=ce.bytesPerElement,Xe=t.isWebGL2===!0&&(Me===n.INT||Me===n.UNSIGNED_INT||we.gpuType===Ah);if(we.isInterleavedBufferAttribute){const Le=we.data,I=Le.stride,BA=we.offset;if(Le.isInstancedInterleavedBuffer){for(let Ue=0;Ue<re.locationSize;Ue++)b(re.location+Ue,Le.meshPerAttribute);T.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Le.meshPerAttribute*Le.count)}else for(let Ue=0;Ue<re.locationSize;Ue++)E(re.location+Ue);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let Ue=0;Ue<re.locationSize;Ue++)y(re.location+Ue,Z/re.locationSize,Me,O,I*pe,(BA+Z/re.locationSize*Ue)*pe,Xe)}else{if(we.isInstancedBufferAttribute){for(let Le=0;Le<re.locationSize;Le++)b(re.location+Le,we.meshPerAttribute);T.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let Le=0;Le<re.locationSize;Le++)E(re.location+Le);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let Le=0;Le<re.locationSize;Le++)y(re.location+Le,Z/re.locationSize,Me,O,Z*pe,Z/re.locationSize*Le*pe,Xe)}}else if(J!==void 0){const O=J[ee];if(O!==void 0)switch(O.length){case 2:n.vertexAttrib2fv(re.location,O);break;case 3:n.vertexAttrib3fv(re.location,O);break;case 4:n.vertexAttrib4fv(re.location,O);break;default:n.vertexAttrib1fv(re.location,O)}}}}U()}function K(){k();for(const T in a){const G=a[T];for(const R in G){const X=G[R];for(const W in X)g(X[W].object),delete X[W];delete G[R]}delete a[T]}}function B(T){if(a[T.id]===void 0)return;const G=a[T.id];for(const R in G){const X=G[R];for(const W in X)g(X[W].object),delete X[W];delete G[R]}delete a[T.id]}function M(T){for(const G in a){const R=a[G];if(R[T.id]===void 0)continue;const X=R[T.id];for(const W in X)g(X[W].object),delete X[W];delete R[T.id]}}function k(){z(),c=!0,l!==o&&(l=o,p(l.object))}function z(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:u,reset:k,resetDefaultState:z,dispose:K,releaseStatesOfGeometry:B,releaseStatesOfProgram:M,initAttributes:v,enableAttribute:E,disableUnusedAttributes:U}}function gm(n,e,A,t){const i=t.isWebGL2;let r;function s(c){r=c}function a(c,u){n.drawArrays(r,c,u),A.update(u,r,1)}function o(c,u,h){if(h===0)return;let p,g;if(i)p=n,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,c,u,h),A.update(u,r,h)}function l(c,u,h){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<h;g++)this.render(c[g],u[g]);else{p.multiDrawArraysWEBGL(r,c,0,u,0,h);let g=0;for(let m=0;m<h;m++)g+=u[m];A.update(g,r,1)}}this.setMode=s,this.render=a,this.renderInstances=o,this.renderMultiDraw=l}function mm(n,e,A){let t;function i(){if(t!==void 0)return t;if(e.has("EXT_texture_filter_anisotropic")===!0){const y=e.get("EXT_texture_filter_anisotropic");t=n.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else t=0;return t}function r(y){if(y==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=A.precision!==void 0?A.precision:"highp";const o=r(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);const l=s||e.has("WEBGL_draw_buffers"),c=A.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),d=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),C=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,E=s||e.has("OES_texture_float"),b=v&&E,U=s?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:c,maxTextures:u,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:d,maxVaryings:f,maxFragmentUniforms:C,vertexTextures:v,floatFragmentTextures:E,floatVertexTextures:b,maxSamples:U}}function Bm(n){const e=this;let A=null,t=0,i=!1,r=!1;const s=new Xt,a=new ke,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const p=u.length!==0||h||t!==0||i;return i=h,t=u.length,p},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,h){A=c(u,h,0)},this.setState=function(u,h,p){const g=u.clippingPlanes,m=u.clipIntersection,d=u.clipShadows,f=n.get(u);if(!i||g===null||g.length===0||r&&!d)r?c(null):l();else{const C=r?0:t,v=C*4;let E=f.clippingState||null;o.value=E,E=c(g,h,v,p);for(let b=0;b!==v;++b)E[b]=A[b];f.clippingState=E,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=C}};function l(){o.value!==A&&(o.value=A,o.needsUpdate=t>0),e.numPlanes=t,e.numIntersection=0}function c(u,h,p,g){const m=u!==null?u.length:0;let d=null;if(m!==0){if(d=o.value,g!==!0||d===null){const f=p+m*4,C=h.matrixWorldInverse;a.getNormalMatrix(C),(d===null||d.length<f)&&(d=new Float32Array(f));for(let v=0,E=p;v!==m;++v,E+=4)s.copy(u[v]).applyMatrix4(C,a),s.normal.toArray(d,E),d[E+3]=s.constant}o.value=d,o.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,d}}function wm(n){let e=new WeakMap;function A(s,a){return a===vo?s.mapping=Si:a===_o&&(s.mapping=Mi),s}function t(s){if(s&&s.isTexture){const a=s.mapping;if(a===vo||a===_o)if(e.has(s)){const o=e.get(s).texture;return A(o,s.mapping)}else{const o=s.image;if(o&&o.height>0){const l=new Tp(o.height);return l.fromEquirectangularTexture(n,s),e.set(s,l),s.addEventListener("dispose",i),A(l.texture,s.mapping)}else return null}}return s}function i(s){const a=s.target;a.removeEventListener("dispose",i);const o=e.get(a);o!==void 0&&(e.delete(a),o.dispose())}function r(){e=new WeakMap}return{get:t,dispose:r}}class vm extends vh{constructor(e=-1,A=1,t=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=A,this.top=t,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,A){return super.copy(e,A),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,A,t,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=A,this.view.offsetX=t,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),A=(this.top-this.bottom)/(2*this.zoom),t=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=t-e,s=t+e,a=i+A,o=i-A;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,s=r+l*this.view.width,a-=c*this.view.offsetY,o=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const A=super.toJSON(e);return A.object.zoom=this.zoom,A.object.left=this.left,A.object.right=this.right,A.object.top=this.top,A.object.bottom=this.bottom,A.object.near=this.near,A.object.far=this.far,this.view!==null&&(A.object.view=Object.assign({},this.view)),A}}const hi=4,Ec=[.125,.215,.35,.446,.526,.582],_n=20,Ha=new vm,xc=new qe;let Pa=null,Na=0,Oa=0;const wn=(1+Math.sqrt(5))/2,Ai=1/wn,Uc=[new Q(1,1,1),new Q(-1,1,1),new Q(1,1,-1),new Q(-1,1,-1),new Q(0,wn,Ai),new Q(0,wn,-Ai),new Q(Ai,0,wn),new Q(-Ai,0,wn),new Q(wn,Ai,0),new Q(-wn,Ai,0)];class yc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,A=0,t=.1,i=100){Pa=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Oa=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,t,i,r),A>0&&this._blur(r,0,0,A),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,A=null){return this._fromTexture(e,A)}fromCubemap(e,A=null){return this._fromTexture(e,A)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pa,Na,Oa),e.scissorTest=!1,Jr(e,0,0,e.width,e.height)}_fromTexture(e,A){e.mapping===Si||e.mapping===Mi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pa=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Oa=this._renderer.getActiveMipmapLevel();const t=A||this._allocateTargets();return this._textureToCubeUV(e,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),A=4*this._cubeSize,t={magFilter:KA,minFilter:KA,generateMipmaps:!1,type:cr,format:ut,colorSpace:Ht,depthBuffer:!1},i=Sc(e,A,t);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==A){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sc(e,A,t);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_m(r)),this._blurMaterial=Cm(r,e,A)}return i}_compileMaterial(e){const A=new wt(this._lodPlanes[0],e);this._renderer.compile(A,Ha)}_sceneToCubeUV(e,A,t,i){const a=new At(90,1,A,t),o=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,u=c.autoClear,h=c.toneMapping;c.getClearColor(xc),c.toneMapping=nn,c.autoClear=!1;const p=new nl({name:"PMREM.Background",side:zA,depthWrite:!1,depthTest:!1}),g=new wt(new xr,p);let m=!1;const d=e.background;d?d.isColor&&(p.color.copy(d),e.background=null,m=!0):(p.color.copy(xc),m=!0);for(let f=0;f<6;f++){const C=f%3;C===0?(a.up.set(0,o[f],0),a.lookAt(l[f],0,0)):C===1?(a.up.set(0,0,o[f]),a.lookAt(0,l[f],0)):(a.up.set(0,o[f],0),a.lookAt(0,0,l[f]));const v=this._cubeSize;Jr(i,C*v,f>2?v:0,v,v),c.setRenderTarget(i),m&&c.render(g,a),c.render(e,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=h,c.autoClear=u,e.background=d}_textureToCubeUV(e,A){const t=this._renderer,i=e.mapping===Si||e.mapping===Mi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mc());const r=i?this._cubemapMaterial:this._equirectMaterial,s=new wt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const o=this._cubeSize;Jr(A,0,0,3*o,2*o),t.setRenderTarget(A),t.render(s,Ha)}_applyPMREM(e){const A=this._renderer,t=A.autoClear;A.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),s=Uc[(i-1)%Uc.length];this._blur(e,i-1,i,r,s)}A.autoClear=t}_blur(e,A,t,i,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,A,t,i,"latitudinal",r),this._halfBlur(s,e,t,t,i,"longitudinal",r)}_halfBlur(e,A,t,i,r,s,a){const o=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,u=new wt(this._lodPlanes[i],l),h=l.uniforms,p=this._sizeLods[t]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*_n-1),m=r/g,d=isFinite(r)?1+Math.floor(c*m):_n;d>_n&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${_n}`);const f=[];let C=0;for(let y=0;y<_n;++y){const H=y/m,K=Math.exp(-H*H/2);f.push(K),y===0?C+=K:y<d&&(C+=2*K)}for(let y=0;y<f.length;y++)f[y]=f[y]/C;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=f,h.latitudinal.value=s==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-t;const E=this._sizeLods[i],b=3*E*(i>v-hi?i-v+hi:0),U=4*(this._cubeSize-E);Jr(A,b,U,3*E,2*E),o.setRenderTarget(A),o.render(u,Ha)}}function _m(n){const e=[],A=[],t=[];let i=n;const r=n-hi+1+Ec.length;for(let s=0;s<r;s++){const a=Math.pow(2,i);A.push(a);let o=1/a;s>n-hi?o=Ec[s-n+hi-1]:s===0&&(o=0),t.push(o);const l=1/(a-2),c=-l,u=1+l,h=[c,c,u,c,u,u,c,c,u,u,c,u],p=6,g=6,m=3,d=2,f=1,C=new Float32Array(m*g*p),v=new Float32Array(d*g*p),E=new Float32Array(f*g*p);for(let U=0;U<p;U++){const y=U%3*2/3-1,H=U>2?0:-1,K=[y,H,0,y+2/3,H,0,y+2/3,H+1,0,y,H,0,y+2/3,H+1,0,y,H+1,0];C.set(K,m*g*U),v.set(h,d*g*U);const B=[U,U,U,U,U,U];E.set(B,f*g*U)}const b=new un;b.setAttribute("position",new ft(C,m)),b.setAttribute("uv",new ft(v,d)),b.setAttribute("faceIndex",new ft(E,f)),e.push(b),i>hi&&i--}return{lodPlanes:e,sizeLods:A,sigmas:t}}function Sc(n,e,A){const t=new Rn(n,e,A);return t.texture.mapping=Ws,t.texture.name="PMREM.cubeUv",t.scissorTest=!0,t}function Jr(n,e,A,t,i){n.viewport.set(e,A,t,i),n.scissor.set(e,A,t,i)}function Cm(n,e,A){const t=new Float32Array(_n),i=new Q(0,1,0);return new ln({name:"SphericalGaussianBlur",defines:{n:_n,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/A,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:t},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:il(),fragmentShader:`

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
		`,blending:tn,depthTest:!1,depthWrite:!1})}function Mc(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:il(),fragmentShader:`

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
		`,blending:tn,depthTest:!1,depthWrite:!1})}function Fc(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tn,depthTest:!1,depthWrite:!1})}function il(){return`

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
	`}function Em(n){let e=new WeakMap,A=null;function t(a){if(a&&a.isTexture){const o=a.mapping,l=o===vo||o===_o,c=o===Si||o===Mi;if(l||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return A===null&&(A=new yc(n)),u=l?A.fromEquirectangular(a,u):A.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(l&&u&&u.height>0||c&&u&&i(u)){A===null&&(A=new yc(n));const h=l?A.fromEquirectangular(a):A.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",r),h.texture}else return null}}}return a}function i(a){let o=0;const l=6;for(let c=0;c<l;c++)a[c]!==void 0&&o++;return o===l}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap,A!==null&&(A.dispose(),A=null)}return{get:t,dispose:s}}function xm(n){const e={};function A(t){if(e[t]!==void 0)return e[t];let i;switch(t){case"WEBGL_depth_texture":i=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=n.getExtension(t)}return e[t]=i,i}return{has:function(t){return A(t)!==null},init:function(t){t.isWebGL2?(A("EXT_color_buffer_float"),A("WEBGL_clip_cull_distance")):(A("WEBGL_depth_texture"),A("OES_texture_float"),A("OES_texture_half_float"),A("OES_texture_half_float_linear"),A("OES_standard_derivatives"),A("OES_element_index_uint"),A("OES_vertex_array_object"),A("ANGLE_instanced_arrays")),A("OES_texture_float_linear"),A("EXT_color_buffer_half_float"),A("WEBGL_multisampled_render_to_texture")},get:function(t){const i=A(t);return i===null&&console.warn("THREE.WebGLRenderer: "+t+" extension not supported."),i}}}function Um(n,e,A,t){const i={},r=new WeakMap;function s(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const m=h.morphAttributes[g];for(let d=0,f=m.length;d<f;d++)e.remove(m[d])}h.removeEventListener("dispose",s),delete i[h.id];const p=r.get(h);p&&(e.remove(p),r.delete(h)),t.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,A.memory.geometries--}function a(u,h){return i[h.id]===!0||(h.addEventListener("dispose",s),i[h.id]=!0,A.memory.geometries++),h}function o(u){const h=u.attributes;for(const g in h)e.update(h[g],n.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const m=p[g];for(let d=0,f=m.length;d<f;d++)e.update(m[d],n.ARRAY_BUFFER)}}function l(u){const h=[],p=u.index,g=u.attributes.position;let m=0;if(p!==null){const C=p.array;m=p.version;for(let v=0,E=C.length;v<E;v+=3){const b=C[v+0],U=C[v+1],y=C[v+2];h.push(b,U,U,y,y,b)}}else if(g!==void 0){const C=g.array;m=g.version;for(let v=0,E=C.length/3-1;v<E;v+=3){const b=v+0,U=v+1,y=v+2;h.push(b,U,U,y,y,b)}}else return;const d=new(ch(h)?Bh:mh)(h,1);d.version=m;const f=r.get(u);f&&e.remove(f),r.set(u,d)}function c(u){const h=r.get(u);if(h){const p=u.index;p!==null&&h.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:o,getWireframeAttribute:c}}function ym(n,e,A,t){const i=t.isWebGL2;let r;function s(p){r=p}let a,o;function l(p){a=p.type,o=p.bytesPerElement}function c(p,g){n.drawElements(r,g,a,p*o),A.update(g,r,1)}function u(p,g,m){if(m===0)return;let d,f;if(i)d=n,f="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](r,g,a,p*o,m),A.update(g,r,m)}function h(p,g,m){if(m===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<m;f++)this.render(p[f]/o,g[f]);else{d.multiDrawElementsWEBGL(r,g,0,a,p,0,m);let f=0;for(let C=0;C<m;C++)f+=g[C];A.update(f,r,1)}}this.setMode=s,this.setIndex=l,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}function Sm(n){const e={geometries:0,textures:0},A={frame:0,calls:0,triangles:0,points:0,lines:0};function t(r,s,a){switch(A.calls++,s){case n.TRIANGLES:A.triangles+=a*(r/3);break;case n.LINES:A.lines+=a*(r/2);break;case n.LINE_STRIP:A.lines+=a*(r-1);break;case n.LINE_LOOP:A.lines+=a*r;break;case n.POINTS:A.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){A.calls=0,A.triangles=0,A.points=0,A.lines=0}return{memory:e,render:A,programs:null,autoReset:!0,reset:i,update:t}}function Mm(n,e){return n[0]-e[0]}function Fm(n,e){return Math.abs(e[1])-Math.abs(n[1])}function bm(n,e,A){const t={},i=new Float32Array(8),r=new WeakMap,s=new bA,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function o(l,c,u){const h=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,m=g!==void 0?g.length:0;let d=r.get(c);if(d===void 0||d.count!==m){let G=function(){z.dispose(),r.delete(c),c.removeEventListener("dispose",G)};var p=G;d!==void 0&&d.texture.dispose();const v=c.morphAttributes.position!==void 0,E=c.morphAttributes.normal!==void 0,b=c.morphAttributes.color!==void 0,U=c.morphAttributes.position||[],y=c.morphAttributes.normal||[],H=c.morphAttributes.color||[];let K=0;v===!0&&(K=1),E===!0&&(K=2),b===!0&&(K=3);let B=c.attributes.position.count*K,M=1;B>e.maxTextureSize&&(M=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const k=new Float32Array(B*M*4*m),z=new fh(k,B,M,m);z.type=It,z.needsUpdate=!0;const T=K*4;for(let R=0;R<m;R++){const X=U[R],W=y[R],Y=H[R],J=B*M*4*R;for(let ee=0;ee<X.count;ee++){const re=ee*T;v===!0&&(s.fromBufferAttribute(X,ee),k[J+re+0]=s.x,k[J+re+1]=s.y,k[J+re+2]=s.z,k[J+re+3]=0),E===!0&&(s.fromBufferAttribute(W,ee),k[J+re+4]=s.x,k[J+re+5]=s.y,k[J+re+6]=s.z,k[J+re+7]=0),b===!0&&(s.fromBufferAttribute(Y,ee),k[J+re+8]=s.x,k[J+re+9]=s.y,k[J+re+10]=s.z,k[J+re+11]=Y.itemSize===4?s.w:1)}}d={count:m,texture:z,size:new Ie(B,M)},r.set(c,d),c.addEventListener("dispose",G)}let f=0;for(let v=0;v<h.length;v++)f+=h[v];const C=c.morphTargetsRelative?1:1-f;u.getUniforms().setValue(n,"morphTargetBaseInfluence",C),u.getUniforms().setValue(n,"morphTargetInfluences",h),u.getUniforms().setValue(n,"morphTargetsTexture",d.texture,A),u.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}else{const g=h===void 0?0:h.length;let m=t[c.id];if(m===void 0||m.length!==g){m=[];for(let E=0;E<g;E++)m[E]=[E,0];t[c.id]=m}for(let E=0;E<g;E++){const b=m[E];b[0]=E,b[1]=h[E]}m.sort(Fm);for(let E=0;E<8;E++)E<g&&m[E][1]?(a[E][0]=m[E][0],a[E][1]=m[E][1]):(a[E][0]=Number.MAX_SAFE_INTEGER,a[E][1]=0);a.sort(Mm);const d=c.morphAttributes.position,f=c.morphAttributes.normal;let C=0;for(let E=0;E<8;E++){const b=a[E],U=b[0],y=b[1];U!==Number.MAX_SAFE_INTEGER&&y?(d&&c.getAttribute("morphTarget"+E)!==d[U]&&c.setAttribute("morphTarget"+E,d[U]),f&&c.getAttribute("morphNormal"+E)!==f[U]&&c.setAttribute("morphNormal"+E,f[U]),i[E]=y,C+=y):(d&&c.hasAttribute("morphTarget"+E)===!0&&c.deleteAttribute("morphTarget"+E),f&&c.hasAttribute("morphNormal"+E)===!0&&c.deleteAttribute("morphNormal"+E),i[E]=0)}const v=c.morphTargetsRelative?1:1-C;u.getUniforms().setValue(n,"morphTargetBaseInfluence",v),u.getUniforms().setValue(n,"morphTargetInfluences",i)}}return{update:o}}function Tm(n,e,A,t){let i=new WeakMap;function r(o){const l=t.render.frame,c=o.geometry,u=e.get(o,c);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),o.isInstancedMesh&&(o.hasEventListener("dispose",a)===!1&&o.addEventListener("dispose",a),i.get(o)!==l&&(A.update(o.instanceMatrix,n.ARRAY_BUFFER),o.instanceColor!==null&&A.update(o.instanceColor,n.ARRAY_BUFFER),i.set(o,l))),o.isSkinnedMesh){const h=o.skeleton;i.get(h)!==l&&(h.update(),i.set(h,l))}return u}function s(){i=new WeakMap}function a(o){const l=o.target;l.removeEventListener("dispose",a),A.remove(l.instanceMatrix),l.instanceColor!==null&&A.remove(l.instanceColor)}return{update:r,dispose:s}}class xh extends WA{constructor(e,A,t,i,r,s,a,o,l,c){if(c=c!==void 0?c:Tn,c!==Tn&&c!==Fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");t===void 0&&c===Tn&&(t=$t),t===void 0&&c===Fi&&(t=bn),super(null,i,r,s,a,o,c,t,l),this.isDepthTexture=!0,this.image={width:e,height:A},this.magFilter=a!==void 0?a:VA,this.minFilter=o!==void 0?o:VA,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const A=super.toJSON(e);return this.compareFunction!==null&&(A.compareFunction=this.compareFunction),A}}const Uh=new WA,yh=new xh(1,1);yh.compareFunction=lh;const Sh=new fh,Mh=new dp,Fh=new _h,bc=[],Tc=[],Qc=new Float32Array(16),Lc=new Float32Array(9),Ic=new Float32Array(4);function Li(n,e,A){const t=n[0];if(t<=0||t>0)return n;const i=e*A;let r=bc[i];if(r===void 0&&(r=new Float32Array(i),bc[i]=r),e!==0){t.toArray(r,0);for(let s=1,a=0;s!==e;++s)a+=A,n[s].toArray(r,a)}return r}function vA(n,e){if(n.length!==e.length)return!1;for(let A=0,t=n.length;A<t;A++)if(n[A]!==e[A])return!1;return!0}function _A(n,e){for(let A=0,t=e.length;A<t;A++)n[A]=e[A]}function qs(n,e){let A=Tc[e];A===void 0&&(A=new Int32Array(e),Tc[e]=A);for(let t=0;t!==e;++t)A[t]=n.allocateTextureUnit();return A}function Qm(n,e){const A=this.cache;A[0]!==e&&(n.uniform1f(this.addr,e),A[0]=e)}function Lm(n,e){const A=this.cache;if(e.x!==void 0)(A[0]!==e.x||A[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),A[0]=e.x,A[1]=e.y);else{if(vA(A,e))return;n.uniform2fv(this.addr,e),_A(A,e)}}function Im(n,e){const A=this.cache;if(e.x!==void 0)(A[0]!==e.x||A[1]!==e.y||A[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),A[0]=e.x,A[1]=e.y,A[2]=e.z);else if(e.r!==void 0)(A[0]!==e.r||A[1]!==e.g||A[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),A[0]=e.r,A[1]=e.g,A[2]=e.b);else{if(vA(A,e))return;n.uniform3fv(this.addr,e),_A(A,e)}}function Rm(n,e){const A=this.cache;if(e.x!==void 0)(A[0]!==e.x||A[1]!==e.y||A[2]!==e.z||A[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),A[0]=e.x,A[1]=e.y,A[2]=e.z,A[3]=e.w);else{if(vA(A,e))return;n.uniform4fv(this.addr,e),_A(A,e)}}function Dm(n,e){const A=this.cache,t=e.elements;if(t===void 0){if(vA(A,e))return;n.uniformMatrix2fv(this.addr,!1,e),_A(A,e)}else{if(vA(A,t))return;Ic.set(t),n.uniformMatrix2fv(this.addr,!1,Ic),_A(A,t)}}function Hm(n,e){const A=this.cache,t=e.elements;if(t===void 0){if(vA(A,e))return;n.uniformMatrix3fv(this.addr,!1,e),_A(A,e)}else{if(vA(A,t))return;Lc.set(t),n.uniformMatrix3fv(this.addr,!1,Lc),_A(A,t)}}function Pm(n,e){const A=this.cache,t=e.elements;if(t===void 0){if(vA(A,e))return;n.uniformMatrix4fv(this.addr,!1,e),_A(A,e)}else{if(vA(A,t))return;Qc.set(t),n.uniformMatrix4fv(this.addr,!1,Qc),_A(A,t)}}function Nm(n,e){const A=this.cache;A[0]!==e&&(n.uniform1i(this.addr,e),A[0]=e)}function Om(n,e){const A=this.cache;if(e.x!==void 0)(A[0]!==e.x||A[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),A[0]=e.x,A[1]=e.y);else{if(vA(A,e))return;n.uniform2iv(this.addr,e),_A(A,e)}}function Gm(n,e){const A=this.cache;if(e.x!==void 0)(A[0]!==e.x||A[1]!==e.y||A[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),A[0]=e.x,A[1]=e.y,A[2]=e.z);else{if(vA(A,e))return;n.uniform3iv(this.addr,e),_A(A,e)}}function Vm(n,e){const A=this.cache;if(e.x!==void 0)(A[0]!==e.x||A[1]!==e.y||A[2]!==e.z||A[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),A[0]=e.x,A[1]=e.y,A[2]=e.z,A[3]=e.w);else{if(vA(A,e))return;n.uniform4iv(this.addr,e),_A(A,e)}}function Km(n,e){const A=this.cache;A[0]!==e&&(n.uniform1ui(this.addr,e),A[0]=e)}function km(n,e){const A=this.cache;if(e.x!==void 0)(A[0]!==e.x||A[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),A[0]=e.x,A[1]=e.y);else{if(vA(A,e))return;n.uniform2uiv(this.addr,e),_A(A,e)}}function zm(n,e){const A=this.cache;if(e.x!==void 0)(A[0]!==e.x||A[1]!==e.y||A[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),A[0]=e.x,A[1]=e.y,A[2]=e.z);else{if(vA(A,e))return;n.uniform3uiv(this.addr,e),_A(A,e)}}function Wm(n,e){const A=this.cache;if(e.x!==void 0)(A[0]!==e.x||A[1]!==e.y||A[2]!==e.z||A[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),A[0]=e.x,A[1]=e.y,A[2]=e.z,A[3]=e.w);else{if(vA(A,e))return;n.uniform4uiv(this.addr,e),_A(A,e)}}function Xm(n,e,A){const t=this.cache,i=A.allocateTextureUnit();t[0]!==i&&(n.uniform1i(this.addr,i),t[0]=i);const r=this.type===n.SAMPLER_2D_SHADOW?yh:Uh;A.setTexture2D(e||r,i)}function Ym(n,e,A){const t=this.cache,i=A.allocateTextureUnit();t[0]!==i&&(n.uniform1i(this.addr,i),t[0]=i),A.setTexture3D(e||Mh,i)}function Jm(n,e,A){const t=this.cache,i=A.allocateTextureUnit();t[0]!==i&&(n.uniform1i(this.addr,i),t[0]=i),A.setTextureCube(e||Fh,i)}function Zm(n,e,A){const t=this.cache,i=A.allocateTextureUnit();t[0]!==i&&(n.uniform1i(this.addr,i),t[0]=i),A.setTexture2DArray(e||Sh,i)}function qm(n){switch(n){case 5126:return Qm;case 35664:return Lm;case 35665:return Im;case 35666:return Rm;case 35674:return Dm;case 35675:return Hm;case 35676:return Pm;case 5124:case 35670:return Nm;case 35667:case 35671:return Om;case 35668:case 35672:return Gm;case 35669:case 35673:return Vm;case 5125:return Km;case 36294:return km;case 36295:return zm;case 36296:return Wm;case 35678:case 36198:case 36298:case 36306:case 35682:return Xm;case 35679:case 36299:case 36307:return Ym;case 35680:case 36300:case 36308:case 36293:return Jm;case 36289:case 36303:case 36311:case 36292:return Zm}}function $m(n,e){n.uniform1fv(this.addr,e)}function jm(n,e){const A=Li(e,this.size,2);n.uniform2fv(this.addr,A)}function eB(n,e){const A=Li(e,this.size,3);n.uniform3fv(this.addr,A)}function AB(n,e){const A=Li(e,this.size,4);n.uniform4fv(this.addr,A)}function tB(n,e){const A=Li(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,A)}function nB(n,e){const A=Li(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,A)}function iB(n,e){const A=Li(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,A)}function rB(n,e){n.uniform1iv(this.addr,e)}function sB(n,e){n.uniform2iv(this.addr,e)}function aB(n,e){n.uniform3iv(this.addr,e)}function oB(n,e){n.uniform4iv(this.addr,e)}function lB(n,e){n.uniform1uiv(this.addr,e)}function cB(n,e){n.uniform2uiv(this.addr,e)}function uB(n,e){n.uniform3uiv(this.addr,e)}function hB(n,e){n.uniform4uiv(this.addr,e)}function fB(n,e,A){const t=this.cache,i=e.length,r=qs(A,i);vA(t,r)||(n.uniform1iv(this.addr,r),_A(t,r));for(let s=0;s!==i;++s)A.setTexture2D(e[s]||Uh,r[s])}function dB(n,e,A){const t=this.cache,i=e.length,r=qs(A,i);vA(t,r)||(n.uniform1iv(this.addr,r),_A(t,r));for(let s=0;s!==i;++s)A.setTexture3D(e[s]||Mh,r[s])}function pB(n,e,A){const t=this.cache,i=e.length,r=qs(A,i);vA(t,r)||(n.uniform1iv(this.addr,r),_A(t,r));for(let s=0;s!==i;++s)A.setTextureCube(e[s]||Fh,r[s])}function gB(n,e,A){const t=this.cache,i=e.length,r=qs(A,i);vA(t,r)||(n.uniform1iv(this.addr,r),_A(t,r));for(let s=0;s!==i;++s)A.setTexture2DArray(e[s]||Sh,r[s])}function mB(n){switch(n){case 5126:return $m;case 35664:return jm;case 35665:return eB;case 35666:return AB;case 35674:return tB;case 35675:return nB;case 35676:return iB;case 5124:case 35670:return rB;case 35667:case 35671:return sB;case 35668:case 35672:return aB;case 35669:case 35673:return oB;case 5125:return lB;case 36294:return cB;case 36295:return uB;case 36296:return hB;case 35678:case 36198:case 36298:case 36306:case 35682:return fB;case 35679:case 36299:case 36307:return dB;case 35680:case 36300:case 36308:case 36293:return pB;case 36289:case 36303:case 36311:case 36292:return gB}}class BB{constructor(e,A,t){this.id=e,this.addr=t,this.cache=[],this.type=A.type,this.setValue=qm(A.type)}}class wB{constructor(e,A,t){this.id=e,this.addr=t,this.cache=[],this.type=A.type,this.size=A.size,this.setValue=mB(A.type)}}class vB{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,A,t){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const a=i[r];a.setValue(e,A[a.id],t)}}}const Ga=/(\w+)(\])?(\[|\.)?/g;function Rc(n,e){n.seq.push(e),n.map[e.id]=e}function _B(n,e,A){const t=n.name,i=t.length;for(Ga.lastIndex=0;;){const r=Ga.exec(t),s=Ga.lastIndex;let a=r[1];const o=r[2]==="]",l=r[3];if(o&&(a=a|0),l===void 0||l==="["&&s+2===i){Rc(A,l===void 0?new BB(a,n,e):new wB(a,n,e));break}else{let u=A.map[a];u===void 0&&(u=new vB(a),Rc(A,u)),A=u}}}class Cs{constructor(e,A){this.seq=[],this.map={};const t=e.getProgramParameter(A,e.ACTIVE_UNIFORMS);for(let i=0;i<t;++i){const r=e.getActiveUniform(A,i),s=e.getUniformLocation(A,r.name);_B(r,s,this)}}setValue(e,A,t,i){const r=this.map[A];r!==void 0&&r.setValue(e,t,i)}setOptional(e,A,t){const i=A[t];i!==void 0&&this.setValue(e,t,i)}static upload(e,A,t,i){for(let r=0,s=A.length;r!==s;++r){const a=A[r],o=t[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,i)}}static seqWithValue(e,A){const t=[];for(let i=0,r=e.length;i!==r;++i){const s=e[i];s.id in A&&t.push(s)}return t}}function Dc(n,e,A){const t=n.createShader(e);return n.shaderSource(t,A),n.compileShader(t),t}const CB=37297;let EB=0;function xB(n,e){const A=n.split(`
`),t=[],i=Math.max(e-6,0),r=Math.min(e+6,A.length);for(let s=i;s<r;s++){const a=s+1;t.push(`${a===e?">":" "} ${a}: ${A[s]}`)}return t.join(`
`)}function UB(n){const e=eA.getPrimaries(eA.workingColorSpace),A=eA.getPrimaries(n);let t;switch(e===A?t="":e===bs&&A===Fs?t="LinearDisplayP3ToLinearSRGB":e===Fs&&A===bs&&(t="LinearSRGBToLinearDisplayP3"),n){case Ht:case Xs:return[t,"LinearTransferOETF"];case FA:case el:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[t,"LinearTransferOETF"]}}function Hc(n,e,A){const t=n.getShaderParameter(e,n.COMPILE_STATUS),i=n.getShaderInfoLog(e).trim();if(t&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const s=parseInt(r[1]);return A.toUpperCase()+`

`+i+`

`+xB(n.getShaderSource(e),s)}else return i}function yB(n,e){const A=UB(e);return`vec4 ${n}( vec4 value ) { return ${A[0]}( ${A[1]}( value ) ); }`}function SB(n,e){let A;switch(e){case Ed:A="Linear";break;case xd:A="Reinhard";break;case Ud:A="OptimizedCineon";break;case yd:A="ACESFilmic";break;case Md:A="AgX";break;case Sd:A="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),A="Linear"}return"vec3 "+n+"( vec3 color ) { return "+A+"ToneMapping( color ); }"}function MB(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.alphaToCoverage||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(fi).join(`
`)}function FB(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fi).join(`
`)}function bB(n){const e=[];for(const A in n){const t=n[A];t!==!1&&e.push("#define "+A+" "+t)}return e.join(`
`)}function TB(n,e){const A={},t=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let i=0;i<t;i++){const r=n.getActiveAttrib(e,i),s=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),A[s]={type:r.type,location:n.getAttribLocation(e,s),locationSize:a}}return A}function fi(n){return n!==""}function Pc(n,e){const A=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,A).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const QB=/^[ \t]*#include +<([\w\d./]+)>/gm;function yo(n){return n.replace(QB,IB)}const LB=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function IB(n,e){let A=Oe[e];if(A===void 0){const t=LB.get(e);if(t!==void 0)A=Oe[t],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,t);else throw new Error("Can not resolve #include <"+e+">")}return yo(A)}const RB=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Oc(n){return n.replace(RB,DB)}function DB(n,e,A,t){let i="";for(let r=parseInt(e);r<parseInt(A);r++)i+=t.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Gc(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	`;return n.isWebGL2&&(e+=`precision ${n.precision} sampler3D;
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
		`),n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function HB(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===$u?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===qf?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Tt&&(e="SHADOWMAP_TYPE_VSM"),e}function PB(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Si:case Mi:e="ENVMAP_TYPE_CUBE";break;case Ws:e="ENVMAP_TYPE_CUBE_UV";break}return e}function NB(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Mi:e="ENVMAP_MODE_REFRACTION";break}return e}function OB(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ju:e="ENVMAP_BLENDING_MULTIPLY";break;case _d:e="ENVMAP_BLENDING_MIX";break;case Cd:e="ENVMAP_BLENDING_ADD";break}return e}function GB(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const A=Math.log2(e)-2,t=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,A),7*16)),texelHeight:t,maxMip:A}}function VB(n,e,A,t){const i=n.getContext(),r=A.defines;let s=A.vertexShader,a=A.fragmentShader;const o=HB(A),l=PB(A),c=NB(A),u=OB(A),h=GB(A),p=A.isWebGL2?"":MB(A),g=FB(A),m=bB(r),d=i.createProgram();let f,C,v=A.glslVersion?"#version "+A.glslVersion+`
`:"";A.isRawShaderMaterial?(f=["#define SHADER_TYPE "+A.shaderType,"#define SHADER_NAME "+A.shaderName,m].filter(fi).join(`
`),f.length>0&&(f+=`
`),C=[p,"#define SHADER_TYPE "+A.shaderType,"#define SHADER_NAME "+A.shaderName,m].filter(fi).join(`
`),C.length>0&&(C+=`
`)):(f=[Gc(A),"#define SHADER_TYPE "+A.shaderType,"#define SHADER_NAME "+A.shaderName,m,A.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",A.batching?"#define USE_BATCHING":"",A.instancing?"#define USE_INSTANCING":"",A.instancingColor?"#define USE_INSTANCING_COLOR":"",A.useFog&&A.fog?"#define USE_FOG":"",A.useFog&&A.fogExp2?"#define FOG_EXP2":"",A.map?"#define USE_MAP":"",A.envMap?"#define USE_ENVMAP":"",A.envMap?"#define "+c:"",A.lightMap?"#define USE_LIGHTMAP":"",A.aoMap?"#define USE_AOMAP":"",A.bumpMap?"#define USE_BUMPMAP":"",A.normalMap?"#define USE_NORMALMAP":"",A.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",A.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",A.displacementMap?"#define USE_DISPLACEMENTMAP":"",A.emissiveMap?"#define USE_EMISSIVEMAP":"",A.anisotropy?"#define USE_ANISOTROPY":"",A.anisotropyMap?"#define USE_ANISOTROPYMAP":"",A.clearcoatMap?"#define USE_CLEARCOATMAP":"",A.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",A.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",A.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",A.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",A.specularMap?"#define USE_SPECULARMAP":"",A.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",A.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",A.roughnessMap?"#define USE_ROUGHNESSMAP":"",A.metalnessMap?"#define USE_METALNESSMAP":"",A.alphaMap?"#define USE_ALPHAMAP":"",A.alphaHash?"#define USE_ALPHAHASH":"",A.transmission?"#define USE_TRANSMISSION":"",A.transmissionMap?"#define USE_TRANSMISSIONMAP":"",A.thicknessMap?"#define USE_THICKNESSMAP":"",A.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",A.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",A.mapUv?"#define MAP_UV "+A.mapUv:"",A.alphaMapUv?"#define ALPHAMAP_UV "+A.alphaMapUv:"",A.lightMapUv?"#define LIGHTMAP_UV "+A.lightMapUv:"",A.aoMapUv?"#define AOMAP_UV "+A.aoMapUv:"",A.emissiveMapUv?"#define EMISSIVEMAP_UV "+A.emissiveMapUv:"",A.bumpMapUv?"#define BUMPMAP_UV "+A.bumpMapUv:"",A.normalMapUv?"#define NORMALMAP_UV "+A.normalMapUv:"",A.displacementMapUv?"#define DISPLACEMENTMAP_UV "+A.displacementMapUv:"",A.metalnessMapUv?"#define METALNESSMAP_UV "+A.metalnessMapUv:"",A.roughnessMapUv?"#define ROUGHNESSMAP_UV "+A.roughnessMapUv:"",A.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+A.anisotropyMapUv:"",A.clearcoatMapUv?"#define CLEARCOATMAP_UV "+A.clearcoatMapUv:"",A.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+A.clearcoatNormalMapUv:"",A.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+A.clearcoatRoughnessMapUv:"",A.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+A.iridescenceMapUv:"",A.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+A.iridescenceThicknessMapUv:"",A.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+A.sheenColorMapUv:"",A.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+A.sheenRoughnessMapUv:"",A.specularMapUv?"#define SPECULARMAP_UV "+A.specularMapUv:"",A.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+A.specularColorMapUv:"",A.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+A.specularIntensityMapUv:"",A.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+A.transmissionMapUv:"",A.thicknessMapUv?"#define THICKNESSMAP_UV "+A.thicknessMapUv:"",A.vertexTangents&&A.flatShading===!1?"#define USE_TANGENT":"",A.vertexColors?"#define USE_COLOR":"",A.vertexAlphas?"#define USE_COLOR_ALPHA":"",A.vertexUv1s?"#define USE_UV1":"",A.vertexUv2s?"#define USE_UV2":"",A.vertexUv3s?"#define USE_UV3":"",A.pointsUvs?"#define USE_POINTS_UV":"",A.flatShading?"#define FLAT_SHADED":"",A.skinning?"#define USE_SKINNING":"",A.morphTargets?"#define USE_MORPHTARGETS":"",A.morphNormals&&A.flatShading===!1?"#define USE_MORPHNORMALS":"",A.morphColors&&A.isWebGL2?"#define USE_MORPHCOLORS":"",A.morphTargetsCount>0&&A.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",A.morphTargetsCount>0&&A.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+A.morphTextureStride:"",A.morphTargetsCount>0&&A.isWebGL2?"#define MORPHTARGETS_COUNT "+A.morphTargetsCount:"",A.doubleSided?"#define DOUBLE_SIDED":"",A.flipSided?"#define FLIP_SIDED":"",A.shadowMapEnabled?"#define USE_SHADOWMAP":"",A.shadowMapEnabled?"#define "+o:"",A.sizeAttenuation?"#define USE_SIZEATTENUATION":"",A.numLightProbes>0?"#define USE_LIGHT_PROBES":"",A.useLegacyLights?"#define LEGACY_LIGHTS":"",A.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",A.logarithmicDepthBuffer&&A.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fi).join(`
`),C=[p,Gc(A),"#define SHADER_TYPE "+A.shaderType,"#define SHADER_NAME "+A.shaderName,m,A.useFog&&A.fog?"#define USE_FOG":"",A.useFog&&A.fogExp2?"#define FOG_EXP2":"",A.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",A.map?"#define USE_MAP":"",A.matcap?"#define USE_MATCAP":"",A.envMap?"#define USE_ENVMAP":"",A.envMap?"#define "+l:"",A.envMap?"#define "+c:"",A.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",A.lightMap?"#define USE_LIGHTMAP":"",A.aoMap?"#define USE_AOMAP":"",A.bumpMap?"#define USE_BUMPMAP":"",A.normalMap?"#define USE_NORMALMAP":"",A.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",A.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",A.emissiveMap?"#define USE_EMISSIVEMAP":"",A.anisotropy?"#define USE_ANISOTROPY":"",A.anisotropyMap?"#define USE_ANISOTROPYMAP":"",A.clearcoat?"#define USE_CLEARCOAT":"",A.clearcoatMap?"#define USE_CLEARCOATMAP":"",A.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",A.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",A.iridescence?"#define USE_IRIDESCENCE":"",A.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",A.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",A.specularMap?"#define USE_SPECULARMAP":"",A.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",A.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",A.roughnessMap?"#define USE_ROUGHNESSMAP":"",A.metalnessMap?"#define USE_METALNESSMAP":"",A.alphaMap?"#define USE_ALPHAMAP":"",A.alphaTest?"#define USE_ALPHATEST":"",A.alphaHash?"#define USE_ALPHAHASH":"",A.sheen?"#define USE_SHEEN":"",A.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",A.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",A.transmission?"#define USE_TRANSMISSION":"",A.transmissionMap?"#define USE_TRANSMISSIONMAP":"",A.thicknessMap?"#define USE_THICKNESSMAP":"",A.vertexTangents&&A.flatShading===!1?"#define USE_TANGENT":"",A.vertexColors||A.instancingColor?"#define USE_COLOR":"",A.vertexAlphas?"#define USE_COLOR_ALPHA":"",A.vertexUv1s?"#define USE_UV1":"",A.vertexUv2s?"#define USE_UV2":"",A.vertexUv3s?"#define USE_UV3":"",A.pointsUvs?"#define USE_POINTS_UV":"",A.gradientMap?"#define USE_GRADIENTMAP":"",A.flatShading?"#define FLAT_SHADED":"",A.doubleSided?"#define DOUBLE_SIDED":"",A.flipSided?"#define FLIP_SIDED":"",A.shadowMapEnabled?"#define USE_SHADOWMAP":"",A.shadowMapEnabled?"#define "+o:"",A.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",A.numLightProbes>0?"#define USE_LIGHT_PROBES":"",A.useLegacyLights?"#define LEGACY_LIGHTS":"",A.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",A.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",A.logarithmicDepthBuffer&&A.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",A.toneMapping!==nn?"#define TONE_MAPPING":"",A.toneMapping!==nn?Oe.tonemapping_pars_fragment:"",A.toneMapping!==nn?SB("toneMapping",A.toneMapping):"",A.dithering?"#define DITHERING":"",A.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,yB("linearToOutputTexel",A.outputColorSpace),A.useDepthPacking?"#define DEPTH_PACKING "+A.depthPacking:"",`
`].filter(fi).join(`
`)),s=yo(s),s=Pc(s,A),s=Nc(s,A),a=yo(a),a=Pc(a,A),a=Nc(a,A),s=Oc(s),a=Oc(a),A.isWebGL2&&A.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,C=["precision mediump sampler2DArray;","#define varying in",A.glslVersion===nc?"":"layout(location = 0) out highp vec4 pc_fragColor;",A.glslVersion===nc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+C);const E=v+f+s,b=v+C+a,U=Dc(i,i.VERTEX_SHADER,E),y=Dc(i,i.FRAGMENT_SHADER,b);i.attachShader(d,U),i.attachShader(d,y),A.index0AttributeName!==void 0?i.bindAttribLocation(d,0,A.index0AttributeName):A.morphTargets===!0&&i.bindAttribLocation(d,0,"position"),i.linkProgram(d);function H(k){if(n.debug.checkShaderErrors){const z=i.getProgramInfoLog(d).trim(),T=i.getShaderInfoLog(U).trim(),G=i.getShaderInfoLog(y).trim();let R=!0,X=!0;if(i.getProgramParameter(d,i.LINK_STATUS)===!1)if(R=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(i,d,U,y);else{const W=Hc(i,U,"vertex"),Y=Hc(i,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(d,i.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+z+`
`+W+`
`+Y)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(T===""||G==="")&&(X=!1);X&&(k.diagnostics={runnable:R,programLog:z,vertexShader:{log:T,prefix:f},fragmentShader:{log:G,prefix:C}})}i.deleteShader(U),i.deleteShader(y),K=new Cs(i,d),B=TB(i,d)}let K;this.getUniforms=function(){return K===void 0&&H(this),K};let B;this.getAttributes=function(){return B===void 0&&H(this),B};let M=A.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(d,CB)),M},this.destroy=function(){t.releaseStatesOfProgram(this),i.deleteProgram(d),this.program=void 0},this.type=A.shaderType,this.name=A.shaderName,this.id=EB++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=U,this.fragmentShader=y,this}let KB=0;class kB{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const A=e.vertexShader,t=e.fragmentShader,i=this._getShaderStage(A),r=this._getShaderStage(t),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const A=this.materialCache.get(e);for(const t of A)t.usedTimes--,t.usedTimes===0&&this.shaderCache.delete(t.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const A=this.materialCache;let t=A.get(e);return t===void 0&&(t=new Set,A.set(e,t)),t}_getShaderStage(e){const A=this.shaderCache;let t=A.get(e);return t===void 0&&(t=new zB(e),A.set(e,t)),t}}class zB{constructor(e){this.id=KB++,this.code=e,this.usedTimes=0}}function WB(n,e,A,t,i,r,s){const a=new ph,o=new kB,l=new Set,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,p=i.vertexTextures;let g=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(B){return l.add(B),B===0?"uv":`uv${B}`}function f(B,M,k,z,T){const G=z.fog,R=T.geometry,X=B.isMeshStandardMaterial?z.environment:null,W=(B.isMeshStandardMaterial?A:e).get(B.envMap||X),Y=W&&W.mapping===Ws?W.image.height:null,J=m[B.type];B.precision!==null&&(g=i.getMaxPrecision(B.precision),g!==B.precision&&console.warn("THREE.WebGLProgram.getParameters:",B.precision,"not supported, using",g,"instead."));const ee=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,re=ee!==void 0?ee.length:0;let we=0;R.morphAttributes.position!==void 0&&(we=1),R.morphAttributes.normal!==void 0&&(we=2),R.morphAttributes.color!==void 0&&(we=3);let O,Z,ce,ve;if(J){const ze=mt[J];O=ze.vertexShader,Z=ze.fragmentShader}else O=B.vertexShader,Z=B.fragmentShader,o.update(B),ce=o.getVertexShaderID(B),ve=o.getFragmentShaderID(B);const Me=n.getRenderTarget(),pe=T.isInstancedMesh===!0,Xe=T.isBatchedMesh===!0,Le=!!B.map,I=!!B.matcap,BA=!!W,Ue=!!B.aoMap,be=!!B.lightMap,_e=!!B.bumpMap,sA=!!B.normalMap,Re=!!B.displacementMap,x=!!B.emissiveMap,w=!!B.metalnessMap,D=!!B.roughnessMap,ne=B.anisotropy>0,q=B.clearcoat>0,Ae=B.iridescence>0,ge=B.sheen>0,ae=B.transmission>0,de=ne&&!!B.anisotropyMap,Se=q&&!!B.clearcoatMap,De=q&&!!B.clearcoatNormalMap,$=q&&!!B.clearcoatRoughnessMap,$e=Ae&&!!B.iridescenceMap,Ge=Ae&&!!B.iridescenceThicknessMap,Te=ge&&!!B.sheenColorMap,Ee=ge&&!!B.sheenRoughnessMap,he=!!B.specularMap,Pe=!!B.specularColorMap,F=!!B.specularIntensityMap,ie=ae&&!!B.transmissionMap,oe=ae&&!!B.thicknessMap,xe=!!B.gradientMap,S=!!B.alphaMap,te=B.alphaTest>0,j=!!B.alphaHash,me=!!B.extensions;let ye=nn;B.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(ye=n.toneMapping);const Je={isWebGL2:u,shaderID:J,shaderType:B.type,shaderName:B.name,vertexShader:O,fragmentShader:Z,defines:B.defines,customVertexShaderID:ce,customFragmentShaderID:ve,isRawShaderMaterial:B.isRawShaderMaterial===!0,glslVersion:B.glslVersion,precision:g,batching:Xe,instancing:pe,instancingColor:pe&&T.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:Me===null?n.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:Ht,alphaToCoverage:!!B.alphaToCoverage,map:Le,matcap:I,envMap:BA,envMapMode:BA&&W.mapping,envMapCubeUVHeight:Y,aoMap:Ue,lightMap:be,bumpMap:_e,normalMap:sA,displacementMap:p&&Re,emissiveMap:x,normalMapObjectSpace:sA&&B.normalMapType===Od,normalMapTangentSpace:sA&&B.normalMapType===Nd,metalnessMap:w,roughnessMap:D,anisotropy:ne,anisotropyMap:de,clearcoat:q,clearcoatMap:Se,clearcoatNormalMap:De,clearcoatRoughnessMap:$,iridescence:Ae,iridescenceMap:$e,iridescenceThicknessMap:Ge,sheen:ge,sheenColorMap:Te,sheenRoughnessMap:Ee,specularMap:he,specularColorMap:Pe,specularIntensityMap:F,transmission:ae,transmissionMap:ie,thicknessMap:oe,gradientMap:xe,opaque:B.transparent===!1&&B.blending===gi&&B.alphaToCoverage===!1,alphaMap:S,alphaTest:te,alphaHash:j,combine:B.combine,mapUv:Le&&d(B.map.channel),aoMapUv:Ue&&d(B.aoMap.channel),lightMapUv:be&&d(B.lightMap.channel),bumpMapUv:_e&&d(B.bumpMap.channel),normalMapUv:sA&&d(B.normalMap.channel),displacementMapUv:Re&&d(B.displacementMap.channel),emissiveMapUv:x&&d(B.emissiveMap.channel),metalnessMapUv:w&&d(B.metalnessMap.channel),roughnessMapUv:D&&d(B.roughnessMap.channel),anisotropyMapUv:de&&d(B.anisotropyMap.channel),clearcoatMapUv:Se&&d(B.clearcoatMap.channel),clearcoatNormalMapUv:De&&d(B.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&d(B.clearcoatRoughnessMap.channel),iridescenceMapUv:$e&&d(B.iridescenceMap.channel),iridescenceThicknessMapUv:Ge&&d(B.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&d(B.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&d(B.sheenRoughnessMap.channel),specularMapUv:he&&d(B.specularMap.channel),specularColorMapUv:Pe&&d(B.specularColorMap.channel),specularIntensityMapUv:F&&d(B.specularIntensityMap.channel),transmissionMapUv:ie&&d(B.transmissionMap.channel),thicknessMapUv:oe&&d(B.thicknessMap.channel),alphaMapUv:S&&d(B.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(sA||ne),vertexColors:B.vertexColors,vertexAlphas:B.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:T.isPoints===!0&&!!R.attributes.uv&&(Le||S),fog:!!G,useFog:B.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:B.flatShading===!0,sizeAttenuation:B.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:T.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:we,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:B.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:ye,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Le&&B.map.isVideoTexture===!0&&eA.getTransfer(B.map.colorSpace)===aA,premultipliedAlpha:B.premultipliedAlpha,doubleSided:B.side===Lt,flipSided:B.side===zA,useDepthPacking:B.depthPacking>=0,depthPacking:B.depthPacking||0,index0AttributeName:B.index0AttributeName,extensionDerivatives:me&&B.extensions.derivatives===!0,extensionFragDepth:me&&B.extensions.fragDepth===!0,extensionDrawBuffers:me&&B.extensions.drawBuffers===!0,extensionShaderTextureLOD:me&&B.extensions.shaderTextureLOD===!0,extensionClipCullDistance:me&&B.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:me&&B.extensions.multiDraw===!0&&t.has("WEBGL_multi_draw"),rendererExtensionFragDepth:u||t.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||t.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||t.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:B.customProgramCacheKey()};return Je.vertexUv1s=l.has(1),Je.vertexUv2s=l.has(2),Je.vertexUv3s=l.has(3),l.clear(),Je}function C(B){const M=[];if(B.shaderID?M.push(B.shaderID):(M.push(B.customVertexShaderID),M.push(B.customFragmentShaderID)),B.defines!==void 0)for(const k in B.defines)M.push(k),M.push(B.defines[k]);return B.isRawShaderMaterial===!1&&(v(M,B),E(M,B),M.push(n.outputColorSpace)),M.push(B.customProgramCacheKey),M.join()}function v(B,M){B.push(M.precision),B.push(M.outputColorSpace),B.push(M.envMapMode),B.push(M.envMapCubeUVHeight),B.push(M.mapUv),B.push(M.alphaMapUv),B.push(M.lightMapUv),B.push(M.aoMapUv),B.push(M.bumpMapUv),B.push(M.normalMapUv),B.push(M.displacementMapUv),B.push(M.emissiveMapUv),B.push(M.metalnessMapUv),B.push(M.roughnessMapUv),B.push(M.anisotropyMapUv),B.push(M.clearcoatMapUv),B.push(M.clearcoatNormalMapUv),B.push(M.clearcoatRoughnessMapUv),B.push(M.iridescenceMapUv),B.push(M.iridescenceThicknessMapUv),B.push(M.sheenColorMapUv),B.push(M.sheenRoughnessMapUv),B.push(M.specularMapUv),B.push(M.specularColorMapUv),B.push(M.specularIntensityMapUv),B.push(M.transmissionMapUv),B.push(M.thicknessMapUv),B.push(M.combine),B.push(M.fogExp2),B.push(M.sizeAttenuation),B.push(M.morphTargetsCount),B.push(M.morphAttributeCount),B.push(M.numDirLights),B.push(M.numPointLights),B.push(M.numSpotLights),B.push(M.numSpotLightMaps),B.push(M.numHemiLights),B.push(M.numRectAreaLights),B.push(M.numDirLightShadows),B.push(M.numPointLightShadows),B.push(M.numSpotLightShadows),B.push(M.numSpotLightShadowsWithMaps),B.push(M.numLightProbes),B.push(M.shadowMapType),B.push(M.toneMapping),B.push(M.numClippingPlanes),B.push(M.numClipIntersection),B.push(M.depthPacking)}function E(B,M){a.disableAll(),M.isWebGL2&&a.enable(0),M.supportsVertexTextures&&a.enable(1),M.instancing&&a.enable(2),M.instancingColor&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),B.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.useLegacyLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.alphaToCoverage&&a.enable(20),B.push(a.mask)}function b(B){const M=m[B.type];let k;if(M){const z=mt[M];k=Sp.clone(z.uniforms)}else k=B.uniforms;return k}function U(B,M){let k;for(let z=0,T=c.length;z<T;z++){const G=c[z];if(G.cacheKey===M){k=G,++k.usedTimes;break}}return k===void 0&&(k=new VB(n,M,B,r),c.push(k)),k}function y(B){if(--B.usedTimes===0){const M=c.indexOf(B);c[M]=c[c.length-1],c.pop(),B.destroy()}}function H(B){o.remove(B)}function K(){o.dispose()}return{getParameters:f,getProgramCacheKey:C,getUniforms:b,acquireProgram:U,releaseProgram:y,releaseShaderCache:H,programs:c,dispose:K}}function XB(){let n=new WeakMap;function e(r){let s=n.get(r);return s===void 0&&(s={},n.set(r,s)),s}function A(r){n.delete(r)}function t(r,s,a){n.get(r)[s]=a}function i(){n=new WeakMap}return{get:e,remove:A,update:t,dispose:i}}function YB(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Vc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Kc(){const n=[];let e=0;const A=[],t=[],i=[];function r(){e=0,A.length=0,t.length=0,i.length=0}function s(u,h,p,g,m,d){let f=n[e];return f===void 0?(f={id:u.id,object:u,geometry:h,material:p,groupOrder:g,renderOrder:u.renderOrder,z:m,group:d},n[e]=f):(f.id=u.id,f.object=u,f.geometry=h,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=m,f.group=d),e++,f}function a(u,h,p,g,m,d){const f=s(u,h,p,g,m,d);p.transmission>0?t.push(f):p.transparent===!0?i.push(f):A.push(f)}function o(u,h,p,g,m,d){const f=s(u,h,p,g,m,d);p.transmission>0?t.unshift(f):p.transparent===!0?i.unshift(f):A.unshift(f)}function l(u,h){A.length>1&&A.sort(u||YB),t.length>1&&t.sort(h||Vc),i.length>1&&i.sort(h||Vc)}function c(){for(let u=e,h=n.length;u<h;u++){const p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:A,transmissive:t,transparent:i,init:r,push:a,unshift:o,finish:c,sort:l}}function JB(){let n=new WeakMap;function e(t,i){const r=n.get(t);let s;return r===void 0?(s=new Kc,n.set(t,[s])):i>=r.length?(s=new Kc,r.push(s)):s=r[i],s}function A(){n=new WeakMap}return{get:e,dispose:A}}function ZB(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let A;switch(e.type){case"DirectionalLight":A={direction:new Q,color:new qe};break;case"SpotLight":A={position:new Q,direction:new Q,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":A={position:new Q,color:new qe,distance:0,decay:0};break;case"HemisphereLight":A={direction:new Q,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":A={color:new qe,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return n[e.id]=A,A}}}function qB(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let A;switch(e.type){case"DirectionalLight":A={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":A={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":A={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=A,A}}}let $B=0;function jB(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function e1(n,e){const A=new ZB,t=qB(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Q);const r=new Q,s=new yA,a=new yA;function o(c,u){let h=0,p=0,g=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let m=0,d=0,f=0,C=0,v=0,E=0,b=0,U=0,y=0,H=0,K=0;c.sort(jB);const B=u===!0?Math.PI:1;for(let k=0,z=c.length;k<z;k++){const T=c[k],G=T.color,R=T.intensity,X=T.distance,W=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=G.r*R*B,p+=G.g*R*B,g+=G.b*R*B;else if(T.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(T.sh.coefficients[Y],R);K++}else if(T.isDirectionalLight){const Y=A.get(T);if(Y.color.copy(T.color).multiplyScalar(T.intensity*B),T.castShadow){const J=T.shadow,ee=t.get(T);ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,i.directionalShadow[m]=ee,i.directionalShadowMap[m]=W,i.directionalShadowMatrix[m]=T.shadow.matrix,E++}i.directional[m]=Y,m++}else if(T.isSpotLight){const Y=A.get(T);Y.position.setFromMatrixPosition(T.matrixWorld),Y.color.copy(G).multiplyScalar(R*B),Y.distance=X,Y.coneCos=Math.cos(T.angle),Y.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),Y.decay=T.decay,i.spot[f]=Y;const J=T.shadow;if(T.map&&(i.spotLightMap[y]=T.map,y++,J.updateMatrices(T),T.castShadow&&H++),i.spotLightMatrix[f]=J.matrix,T.castShadow){const ee=t.get(T);ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,i.spotShadow[f]=ee,i.spotShadowMap[f]=W,U++}f++}else if(T.isRectAreaLight){const Y=A.get(T);Y.color.copy(G).multiplyScalar(R),Y.halfWidth.set(T.width*.5,0,0),Y.halfHeight.set(0,T.height*.5,0),i.rectArea[C]=Y,C++}else if(T.isPointLight){const Y=A.get(T);if(Y.color.copy(T.color).multiplyScalar(T.intensity*B),Y.distance=T.distance,Y.decay=T.decay,T.castShadow){const J=T.shadow,ee=t.get(T);ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,ee.shadowCameraNear=J.camera.near,ee.shadowCameraFar=J.camera.far,i.pointShadow[d]=ee,i.pointShadowMap[d]=W,i.pointShadowMatrix[d]=T.shadow.matrix,b++}i.point[d]=Y,d++}else if(T.isHemisphereLight){const Y=A.get(T);Y.skyColor.copy(T.color).multiplyScalar(R*B),Y.groundColor.copy(T.groundColor).multiplyScalar(R*B),i.hemi[v]=Y,v++}}C>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=g;const M=i.hash;(M.directionalLength!==m||M.pointLength!==d||M.spotLength!==f||M.rectAreaLength!==C||M.hemiLength!==v||M.numDirectionalShadows!==E||M.numPointShadows!==b||M.numSpotShadows!==U||M.numSpotMaps!==y||M.numLightProbes!==K)&&(i.directional.length=m,i.spot.length=f,i.rectArea.length=C,i.point.length=d,i.hemi.length=v,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=U,i.spotShadowMap.length=U,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=U+y-H,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=H,i.numLightProbes=K,M.directionalLength=m,M.pointLength=d,M.spotLength=f,M.rectAreaLength=C,M.hemiLength=v,M.numDirectionalShadows=E,M.numPointShadows=b,M.numSpotShadows=U,M.numSpotMaps=y,M.numLightProbes=K,i.version=$B++)}function l(c,u){let h=0,p=0,g=0,m=0,d=0;const f=u.matrixWorldInverse;for(let C=0,v=c.length;C<v;C++){const E=c[C];if(E.isDirectionalLight){const b=i.directional[h];b.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(f),h++}else if(E.isSpotLight){const b=i.spot[g];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(f),g++}else if(E.isRectAreaLight){const b=i.rectArea[m];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(f),a.identity(),s.copy(E.matrixWorld),s.premultiply(f),a.extractRotation(s),b.halfWidth.set(E.width*.5,0,0),b.halfHeight.set(0,E.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),m++}else if(E.isPointLight){const b=i.point[p];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(f),p++}else if(E.isHemisphereLight){const b=i.hemi[d];b.direction.setFromMatrixPosition(E.matrixWorld),b.direction.transformDirection(f),d++}}}return{setup:o,setupView:l,state:i}}function kc(n,e){const A=new e1(n,e),t=[],i=[];function r(){t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(u){A.setup(t,u)}function l(u){A.setupView(t,u)}return{init:r,state:{lightsArray:t,shadowsArray:i,lights:A},setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function A1(n,e){let A=new WeakMap;function t(r,s=0){const a=A.get(r);let o;return a===void 0?(o=new kc(n,e),A.set(r,[o])):s>=a.length?(o=new kc(n,e),a.push(o)):o=a[s],o}function i(){A=new WeakMap}return{get:t,dispose:i}}class t1 extends Js{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class n1 extends Js{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const i1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,r1=`uniform sampler2D shadow_pass;
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
}`;function s1(n,e,A){let t=new Ch;const i=new Ie,r=new Ie,s=new bA,a=new t1({depthPacking:Pd}),o=new n1,l={},c=A.maxTextureSize,u={[on]:zA,[zA]:on,[Lt]:Lt},h=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:i1,fragmentShader:r1}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new un;g.setAttribute("position",new ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new wt(g,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$u;let f=this.type;this.render=function(U,y,H){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||U.length===0)return;const K=n.getRenderTarget(),B=n.getActiveCubeFace(),M=n.getActiveMipmapLevel(),k=n.state;k.setBlending(tn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const z=f!==Tt&&this.type===Tt,T=f===Tt&&this.type!==Tt;for(let G=0,R=U.length;G<R;G++){const X=U[G],W=X.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const Y=W.getFrameExtents();if(i.multiply(Y),r.copy(W.mapSize),(i.x>c||i.y>c)&&(i.x>c&&(r.x=Math.floor(c/Y.x),i.x=r.x*Y.x,W.mapSize.x=r.x),i.y>c&&(r.y=Math.floor(c/Y.y),i.y=r.y*Y.y,W.mapSize.y=r.y)),W.map===null||z===!0||T===!0){const ee=this.type!==Tt?{minFilter:VA,magFilter:VA}:{};W.map!==null&&W.map.dispose(),W.map=new Rn(i.x,i.y,ee),W.map.texture.name=X.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const J=W.getViewportCount();for(let ee=0;ee<J;ee++){const re=W.getViewport(ee);s.set(r.x*re.x,r.y*re.y,r.x*re.z,r.y*re.w),k.viewport(s),W.updateMatrices(X,ee),t=W.getFrustum(),E(y,H,W.camera,X,this.type)}W.isPointLightShadow!==!0&&this.type===Tt&&C(W,H),W.needsUpdate=!1}f=this.type,d.needsUpdate=!1,n.setRenderTarget(K,B,M)};function C(U,y){const H=e.update(m);h.defines.VSM_SAMPLES!==U.blurSamples&&(h.defines.VSM_SAMPLES=U.blurSamples,p.defines.VSM_SAMPLES=U.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Rn(i.x,i.y)),h.uniforms.shadow_pass.value=U.map.texture,h.uniforms.resolution.value=U.mapSize,h.uniforms.radius.value=U.radius,n.setRenderTarget(U.mapPass),n.clear(),n.renderBufferDirect(y,null,H,h,m,null),p.uniforms.shadow_pass.value=U.mapPass.texture,p.uniforms.resolution.value=U.mapSize,p.uniforms.radius.value=U.radius,n.setRenderTarget(U.map),n.clear(),n.renderBufferDirect(y,null,H,p,m,null)}function v(U,y,H,K){let B=null;const M=H.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(M!==void 0)B=M;else if(B=H.isPointLight===!0?o:a,n.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const k=B.uuid,z=y.uuid;let T=l[k];T===void 0&&(T={},l[k]=T);let G=T[z];G===void 0&&(G=B.clone(),T[z]=G,y.addEventListener("dispose",b)),B=G}if(B.visible=y.visible,B.wireframe=y.wireframe,K===Tt?B.side=y.shadowSide!==null?y.shadowSide:y.side:B.side=y.shadowSide!==null?y.shadowSide:u[y.side],B.alphaMap=y.alphaMap,B.alphaTest=y.alphaTest,B.map=y.map,B.clipShadows=y.clipShadows,B.clippingPlanes=y.clippingPlanes,B.clipIntersection=y.clipIntersection,B.displacementMap=y.displacementMap,B.displacementScale=y.displacementScale,B.displacementBias=y.displacementBias,B.wireframeLinewidth=y.wireframeLinewidth,B.linewidth=y.linewidth,H.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const k=n.properties.get(B);k.light=H}return B}function E(U,y,H,K,B){if(U.visible===!1)return;if(U.layers.test(y.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&B===Tt)&&(!U.frustumCulled||t.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,U.matrixWorld);const z=e.update(U),T=U.material;if(Array.isArray(T)){const G=z.groups;for(let R=0,X=G.length;R<X;R++){const W=G[R],Y=T[W.materialIndex];if(Y&&Y.visible){const J=v(U,Y,K,B);U.onBeforeShadow(n,U,y,H,z,J,W),n.renderBufferDirect(H,null,z,J,U,W),U.onAfterShadow(n,U,y,H,z,J,W)}}}else if(T.visible){const G=v(U,T,K,B);U.onBeforeShadow(n,U,y,H,z,G,null),n.renderBufferDirect(H,null,z,G,U,null),U.onAfterShadow(n,U,y,H,z,G,null)}}const k=U.children;for(let z=0,T=k.length;z<T;z++)E(k[z],y,H,K,B)}function b(U){U.target.removeEventListener("dispose",b);for(const H in l){const K=l[H],B=U.target.uuid;B in K&&(K[B].dispose(),delete K[B])}}}function a1(n,e,A){const t=A.isWebGL2;function i(){let S=!1;const te=new bA;let j=null;const me=new bA(0,0,0,0);return{setMask:function(ye){j!==ye&&!S&&(n.colorMask(ye,ye,ye,ye),j=ye)},setLocked:function(ye){S=ye},setClear:function(ye,Je,ze,tA,SA){SA===!0&&(ye*=tA,Je*=tA,ze*=tA),te.set(ye,Je,ze,tA),me.equals(te)===!1&&(n.clearColor(ye,Je,ze,tA),me.copy(te))},reset:function(){S=!1,j=null,me.set(-1,0,0,0)}}}function r(){let S=!1,te=null,j=null,me=null;return{setTest:function(ye){ye?pe(n.DEPTH_TEST):Xe(n.DEPTH_TEST)},setMask:function(ye){te!==ye&&!S&&(n.depthMask(ye),te=ye)},setFunc:function(ye){if(j!==ye){switch(ye){case dd:n.depthFunc(n.NEVER);break;case pd:n.depthFunc(n.ALWAYS);break;case gd:n.depthFunc(n.LESS);break;case Ss:n.depthFunc(n.LEQUAL);break;case md:n.depthFunc(n.EQUAL);break;case Bd:n.depthFunc(n.GEQUAL);break;case wd:n.depthFunc(n.GREATER);break;case vd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}j=ye}},setLocked:function(ye){S=ye},setClear:function(ye){me!==ye&&(n.clearDepth(ye),me=ye)},reset:function(){S=!1,te=null,j=null,me=null}}}function s(){let S=!1,te=null,j=null,me=null,ye=null,Je=null,ze=null,tA=null,SA=null;return{setTest:function(Ze){S||(Ze?pe(n.STENCIL_TEST):Xe(n.STENCIL_TEST))},setMask:function(Ze){te!==Ze&&!S&&(n.stencilMask(Ze),te=Ze)},setFunc:function(Ze,hA,HA){(j!==Ze||me!==hA||ye!==HA)&&(n.stencilFunc(Ze,hA,HA),j=Ze,me=hA,ye=HA)},setOp:function(Ze,hA,HA){(Je!==Ze||ze!==hA||tA!==HA)&&(n.stencilOp(Ze,hA,HA),Je=Ze,ze=hA,tA=HA)},setLocked:function(Ze){S=Ze},setClear:function(Ze){SA!==Ze&&(n.clearStencil(Ze),SA=Ze)},reset:function(){S=!1,te=null,j=null,me=null,ye=null,Je=null,ze=null,tA=null,SA=null}}}const a=new i,o=new r,l=new s,c=new WeakMap,u=new WeakMap;let h={},p={},g=new WeakMap,m=[],d=null,f=!1,C=null,v=null,E=null,b=null,U=null,y=null,H=null,K=new qe(0,0,0),B=0,M=!1,k=null,z=null,T=null,G=null,R=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Y=0;const J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(J)[1]),W=Y>=1):J.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),W=Y>=2);let ee=null,re={};const we=n.getParameter(n.SCISSOR_BOX),O=n.getParameter(n.VIEWPORT),Z=new bA().fromArray(we),ce=new bA().fromArray(O);function ve(S,te,j,me){const ye=new Uint8Array(4),Je=n.createTexture();n.bindTexture(S,Je),n.texParameteri(S,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(S,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ze=0;ze<j;ze++)t&&(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)?n.texImage3D(te,0,n.RGBA,1,1,me,0,n.RGBA,n.UNSIGNED_BYTE,ye):n.texImage2D(te+ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ye);return Je}const Me={};Me[n.TEXTURE_2D]=ve(n.TEXTURE_2D,n.TEXTURE_2D,1),Me[n.TEXTURE_CUBE_MAP]=ve(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),t&&(Me[n.TEXTURE_2D_ARRAY]=ve(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Me[n.TEXTURE_3D]=ve(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),o.setClear(1),l.setClear(0),pe(n.DEPTH_TEST),o.setFunc(Ss),Re(!1),x(El),pe(n.CULL_FACE),_e(tn);function pe(S){h[S]!==!0&&(n.enable(S),h[S]=!0)}function Xe(S){h[S]!==!1&&(n.disable(S),h[S]=!1)}function Le(S,te){return p[S]!==te?(n.bindFramebuffer(S,te),p[S]=te,t&&(S===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=te),S===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=te)),!0):!1}function I(S,te){let j=m,me=!1;if(S)if(j=g.get(te),j===void 0&&(j=[],g.set(te,j)),S.isWebGLMultipleRenderTargets){const ye=S.texture;if(j.length!==ye.length||j[0]!==n.COLOR_ATTACHMENT0){for(let Je=0,ze=ye.length;Je<ze;Je++)j[Je]=n.COLOR_ATTACHMENT0+Je;j.length=ye.length,me=!0}}else j[0]!==n.COLOR_ATTACHMENT0&&(j[0]=n.COLOR_ATTACHMENT0,me=!0);else j[0]!==n.BACK&&(j[0]=n.BACK,me=!0);me&&(A.isWebGL2?n.drawBuffers(j):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(j))}function BA(S){return d!==S?(n.useProgram(S),d=S,!0):!1}const Ue={[vn]:n.FUNC_ADD,[jf]:n.FUNC_SUBTRACT,[ed]:n.FUNC_REVERSE_SUBTRACT};if(t)Ue[Sl]=n.MIN,Ue[Ml]=n.MAX;else{const S=e.get("EXT_blend_minmax");S!==null&&(Ue[Sl]=S.MIN_EXT,Ue[Ml]=S.MAX_EXT)}const be={[Ad]:n.ZERO,[td]:n.ONE,[nd]:n.SRC_COLOR,[Bo]:n.SRC_ALPHA,[ld]:n.SRC_ALPHA_SATURATE,[ad]:n.DST_COLOR,[rd]:n.DST_ALPHA,[id]:n.ONE_MINUS_SRC_COLOR,[wo]:n.ONE_MINUS_SRC_ALPHA,[od]:n.ONE_MINUS_DST_COLOR,[sd]:n.ONE_MINUS_DST_ALPHA,[cd]:n.CONSTANT_COLOR,[ud]:n.ONE_MINUS_CONSTANT_COLOR,[hd]:n.CONSTANT_ALPHA,[fd]:n.ONE_MINUS_CONSTANT_ALPHA};function _e(S,te,j,me,ye,Je,ze,tA,SA,Ze){if(S===tn){f===!0&&(Xe(n.BLEND),f=!1);return}if(f===!1&&(pe(n.BLEND),f=!0),S!==$f){if(S!==C||Ze!==M){if((v!==vn||U!==vn)&&(n.blendEquation(n.FUNC_ADD),v=vn,U=vn),Ze)switch(S){case gi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xl:n.blendFunc(n.ONE,n.ONE);break;case Ul:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}else switch(S){case gi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ul:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}E=null,b=null,y=null,H=null,K.set(0,0,0),B=0,C=S,M=Ze}return}ye=ye||te,Je=Je||j,ze=ze||me,(te!==v||ye!==U)&&(n.blendEquationSeparate(Ue[te],Ue[ye]),v=te,U=ye),(j!==E||me!==b||Je!==y||ze!==H)&&(n.blendFuncSeparate(be[j],be[me],be[Je],be[ze]),E=j,b=me,y=Je,H=ze),(tA.equals(K)===!1||SA!==B)&&(n.blendColor(tA.r,tA.g,tA.b,SA),K.copy(tA),B=SA),C=S,M=!1}function sA(S,te){S.side===Lt?Xe(n.CULL_FACE):pe(n.CULL_FACE);let j=S.side===zA;te&&(j=!j),Re(j),S.blending===gi&&S.transparent===!1?_e(tn):_e(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),o.setFunc(S.depthFunc),o.setTest(S.depthTest),o.setMask(S.depthWrite),a.setMask(S.colorWrite);const me=S.stencilWrite;l.setTest(me),me&&(l.setMask(S.stencilWriteMask),l.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),l.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),D(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?pe(n.SAMPLE_ALPHA_TO_COVERAGE):Xe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Re(S){k!==S&&(S?n.frontFace(n.CW):n.frontFace(n.CCW),k=S)}function x(S){S!==Jf?(pe(n.CULL_FACE),S!==z&&(S===El?n.cullFace(n.BACK):S===Zf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Xe(n.CULL_FACE),z=S}function w(S){S!==T&&(W&&n.lineWidth(S),T=S)}function D(S,te,j){S?(pe(n.POLYGON_OFFSET_FILL),(G!==te||R!==j)&&(n.polygonOffset(te,j),G=te,R=j)):Xe(n.POLYGON_OFFSET_FILL)}function ne(S){S?pe(n.SCISSOR_TEST):Xe(n.SCISSOR_TEST)}function q(S){S===void 0&&(S=n.TEXTURE0+X-1),ee!==S&&(n.activeTexture(S),ee=S)}function Ae(S,te,j){j===void 0&&(ee===null?j=n.TEXTURE0+X-1:j=ee);let me=re[j];me===void 0&&(me={type:void 0,texture:void 0},re[j]=me),(me.type!==S||me.texture!==te)&&(ee!==j&&(n.activeTexture(j),ee=j),n.bindTexture(S,te||Me[S]),me.type=S,me.texture=te)}function ge(){const S=re[ee];S!==void 0&&S.type!==void 0&&(n.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)}function ae(){try{n.compressedTexImage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function de(){try{n.compressedTexImage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Se(){try{n.texSubImage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function De(){try{n.texSubImage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function $(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function $e(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Ge(){try{n.texStorage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Te(){try{n.texStorage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Ee(){try{n.texImage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function he(){try{n.texImage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Pe(S){Z.equals(S)===!1&&(n.scissor(S.x,S.y,S.z,S.w),Z.copy(S))}function F(S){ce.equals(S)===!1&&(n.viewport(S.x,S.y,S.z,S.w),ce.copy(S))}function ie(S,te){let j=u.get(te);j===void 0&&(j=new WeakMap,u.set(te,j));let me=j.get(S);me===void 0&&(me=n.getUniformBlockIndex(te,S.name),j.set(S,me))}function oe(S,te){const me=u.get(te).get(S);c.get(te)!==me&&(n.uniformBlockBinding(te,me,S.__bindingPointIndex),c.set(te,me))}function xe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),t===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ee=null,re={},p={},g=new WeakMap,m=[],d=null,f=!1,C=null,v=null,E=null,b=null,U=null,y=null,H=null,K=new qe(0,0,0),B=0,M=!1,k=null,z=null,T=null,G=null,R=null,Z.set(0,0,n.canvas.width,n.canvas.height),ce.set(0,0,n.canvas.width,n.canvas.height),a.reset(),o.reset(),l.reset()}return{buffers:{color:a,depth:o,stencil:l},enable:pe,disable:Xe,bindFramebuffer:Le,drawBuffers:I,useProgram:BA,setBlending:_e,setMaterial:sA,setFlipSided:Re,setCullFace:x,setLineWidth:w,setPolygonOffset:D,setScissorTest:ne,activeTexture:q,bindTexture:Ae,unbindTexture:ge,compressedTexImage2D:ae,compressedTexImage3D:de,texImage2D:Ee,texImage3D:he,updateUBOMapping:ie,uniformBlockBinding:oe,texStorage2D:Ge,texStorage3D:Te,texSubImage2D:Se,texSubImage3D:De,compressedTexSubImage2D:$,compressedTexSubImage3D:$e,scissor:Pe,viewport:F,reset:xe}}function o1(n,e,A,t,i,r,s){const a=i.isWebGL2,o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap;let u;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(x,w){return p?new OffscreenCanvas(x,w):Ls("canvas")}function m(x,w,D,ne){let q=1;if((x.width>ne||x.height>ne)&&(q=ne/Math.max(x.width,x.height)),q<1||w===!0)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap){const Ae=w?Qs:Math.floor,ge=Ae(q*x.width),ae=Ae(q*x.height);u===void 0&&(u=g(ge,ae));const de=D?g(ge,ae):u;return de.width=ge,de.height=ae,de.getContext("2d").drawImage(x,0,0,ge,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+x.width+"x"+x.height+") to ("+ge+"x"+ae+")."),de}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+x.width+"x"+x.height+")."),x;return x}function d(x){return Uo(x.width)&&Uo(x.height)}function f(x){return a?!1:x.wrapS!==ct||x.wrapT!==ct||x.minFilter!==VA&&x.minFilter!==KA}function C(x,w){return x.generateMipmaps&&w&&x.minFilter!==VA&&x.minFilter!==KA}function v(x){n.generateMipmap(x)}function E(x,w,D,ne,q=!1){if(a===!1)return w;if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let Ae=w;if(w===n.RED&&(D===n.FLOAT&&(Ae=n.R32F),D===n.HALF_FLOAT&&(Ae=n.R16F),D===n.UNSIGNED_BYTE&&(Ae=n.R8)),w===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(Ae=n.R8UI),D===n.UNSIGNED_SHORT&&(Ae=n.R16UI),D===n.UNSIGNED_INT&&(Ae=n.R32UI),D===n.BYTE&&(Ae=n.R8I),D===n.SHORT&&(Ae=n.R16I),D===n.INT&&(Ae=n.R32I)),w===n.RG&&(D===n.FLOAT&&(Ae=n.RG32F),D===n.HALF_FLOAT&&(Ae=n.RG16F),D===n.UNSIGNED_BYTE&&(Ae=n.RG8)),w===n.RGBA){const ge=q?Ms:eA.getTransfer(ne);D===n.FLOAT&&(Ae=n.RGBA32F),D===n.HALF_FLOAT&&(Ae=n.RGBA16F),D===n.UNSIGNED_BYTE&&(Ae=ge===aA?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&(Ae=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(Ae=n.RGB5_A1)}return(Ae===n.R16F||Ae===n.R32F||Ae===n.RG16F||Ae===n.RG32F||Ae===n.RGBA16F||Ae===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Ae}function b(x,w,D){return C(x,D)===!0||x.isFramebufferTexture&&x.minFilter!==VA&&x.minFilter!==KA?Math.log2(Math.max(w.width,w.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?w.mipmaps.length:1}function U(x){return x===VA||x===Fl||x===Di?n.NEAREST:n.LINEAR}function y(x){const w=x.target;w.removeEventListener("dispose",y),K(w),w.isVideoTexture&&c.delete(w)}function H(x){const w=x.target;w.removeEventListener("dispose",H),M(w)}function K(x){const w=t.get(x);if(w.__webglInit===void 0)return;const D=x.source,ne=h.get(D);if(ne){const q=ne[w.__cacheKey];q.usedTimes--,q.usedTimes===0&&B(x),Object.keys(ne).length===0&&h.delete(D)}t.remove(x)}function B(x){const w=t.get(x);n.deleteTexture(w.__webglTexture);const D=x.source,ne=h.get(D);delete ne[w.__cacheKey],s.memory.textures--}function M(x){const w=x.texture,D=t.get(x),ne=t.get(w);if(ne.__webglTexture!==void 0&&(n.deleteTexture(ne.__webglTexture),s.memory.textures--),x.depthTexture&&x.depthTexture.dispose(),x.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(D.__webglFramebuffer[q]))for(let Ae=0;Ae<D.__webglFramebuffer[q].length;Ae++)n.deleteFramebuffer(D.__webglFramebuffer[q][Ae]);else n.deleteFramebuffer(D.__webglFramebuffer[q]);D.__webglDepthbuffer&&n.deleteRenderbuffer(D.__webglDepthbuffer[q])}else{if(Array.isArray(D.__webglFramebuffer))for(let q=0;q<D.__webglFramebuffer.length;q++)n.deleteFramebuffer(D.__webglFramebuffer[q]);else n.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&n.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&n.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let q=0;q<D.__webglColorRenderbuffer.length;q++)D.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(D.__webglColorRenderbuffer[q]);D.__webglDepthRenderbuffer&&n.deleteRenderbuffer(D.__webglDepthRenderbuffer)}if(x.isWebGLMultipleRenderTargets)for(let q=0,Ae=w.length;q<Ae;q++){const ge=t.get(w[q]);ge.__webglTexture&&(n.deleteTexture(ge.__webglTexture),s.memory.textures--),t.remove(w[q])}t.remove(w),t.remove(x)}let k=0;function z(){k=0}function T(){const x=k;return x>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+i.maxTextures),k+=1,x}function G(x){const w=[];return w.push(x.wrapS),w.push(x.wrapT),w.push(x.wrapR||0),w.push(x.magFilter),w.push(x.minFilter),w.push(x.anisotropy),w.push(x.internalFormat),w.push(x.format),w.push(x.type),w.push(x.generateMipmaps),w.push(x.premultiplyAlpha),w.push(x.flipY),w.push(x.unpackAlignment),w.push(x.colorSpace),w.join()}function R(x,w){const D=t.get(x);if(x.isVideoTexture&&sA(x),x.isRenderTargetTexture===!1&&x.version>0&&D.__version!==x.version){const ne=x.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(D,x,w);return}}A.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+w)}function X(x,w){const D=t.get(x);if(x.version>0&&D.__version!==x.version){Z(D,x,w);return}A.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+w)}function W(x,w){const D=t.get(x);if(x.version>0&&D.__version!==x.version){Z(D,x,w);return}A.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+w)}function Y(x,w){const D=t.get(x);if(x.version>0&&D.__version!==x.version){ce(D,x,w);return}A.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+w)}const J={[Co]:n.REPEAT,[ct]:n.CLAMP_TO_EDGE,[Eo]:n.MIRRORED_REPEAT},ee={[VA]:n.NEAREST,[Fl]:n.NEAREST_MIPMAP_NEAREST,[Di]:n.NEAREST_MIPMAP_LINEAR,[KA]:n.LINEAR,[da]:n.LINEAR_MIPMAP_NEAREST,[En]:n.LINEAR_MIPMAP_LINEAR},re={[Gd]:n.NEVER,[Xd]:n.ALWAYS,[Vd]:n.LESS,[lh]:n.LEQUAL,[Kd]:n.EQUAL,[Wd]:n.GEQUAL,[kd]:n.GREATER,[zd]:n.NOTEQUAL};function we(x,w,D){if(w.type===It&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===KA||w.magFilter===da||w.magFilter===Di||w.magFilter===En||w.minFilter===KA||w.minFilter===da||w.minFilter===Di||w.minFilter===En)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),D?(n.texParameteri(x,n.TEXTURE_WRAP_S,J[w.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,J[w.wrapT]),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,J[w.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,ee[w.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,ee[w.minFilter])):(n.texParameteri(x,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(x,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(w.wrapS!==ct||w.wrapT!==ct)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(x,n.TEXTURE_MAG_FILTER,U(w.magFilter)),n.texParameteri(x,n.TEXTURE_MIN_FILTER,U(w.minFilter)),w.minFilter!==VA&&w.minFilter!==KA&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(n.texParameteri(x,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(x,n.TEXTURE_COMPARE_FUNC,re[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===VA||w.minFilter!==Di&&w.minFilter!==En||w.type===It&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===cr&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||t.get(w).__currentAnisotropy)&&(n.texParameterf(x,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),t.get(w).__currentAnisotropy=w.anisotropy)}}function O(x,w){let D=!1;x.__webglInit===void 0&&(x.__webglInit=!0,w.addEventListener("dispose",y));const ne=w.source;let q=h.get(ne);q===void 0&&(q={},h.set(ne,q));const Ae=G(w);if(Ae!==x.__cacheKey){q[Ae]===void 0&&(q[Ae]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,D=!0),q[Ae].usedTimes++;const ge=q[x.__cacheKey];ge!==void 0&&(q[x.__cacheKey].usedTimes--,ge.usedTimes===0&&B(w)),x.__cacheKey=Ae,x.__webglTexture=q[Ae].texture}return D}function Z(x,w,D){let ne=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ne=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ne=n.TEXTURE_3D);const q=O(x,w),Ae=w.source;A.bindTexture(ne,x.__webglTexture,n.TEXTURE0+D);const ge=t.get(Ae);if(Ae.version!==ge.__version||q===!0){A.activeTexture(n.TEXTURE0+D);const ae=eA.getPrimaries(eA.workingColorSpace),de=w.colorSpace===nt?null:eA.getPrimaries(w.colorSpace),Se=w.colorSpace===nt||ae===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const De=f(w)&&d(w.image)===!1;let $=m(w.image,De,!1,i.maxTextureSize);$=Re(w,$);const $e=d($)||a,Ge=r.convert(w.format,w.colorSpace);let Te=r.convert(w.type),Ee=E(w.internalFormat,Ge,Te,w.colorSpace,w.isVideoTexture);we(ne,w,$e);let he;const Pe=w.mipmaps,F=a&&w.isVideoTexture!==!0&&Ee!==ah,ie=ge.__version===void 0||q===!0,oe=Ae.dataReady,xe=b(w,$,$e);if(w.isDepthTexture)Ee=n.DEPTH_COMPONENT,a?w.type===It?Ee=n.DEPTH_COMPONENT32F:w.type===$t?Ee=n.DEPTH_COMPONENT24:w.type===bn?Ee=n.DEPTH24_STENCIL8:Ee=n.DEPTH_COMPONENT16:w.type===It&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Tn&&Ee===n.DEPTH_COMPONENT&&w.type!==jo&&w.type!==$t&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=$t,Te=r.convert(w.type)),w.format===Fi&&Ee===n.DEPTH_COMPONENT&&(Ee=n.DEPTH_STENCIL,w.type!==bn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=bn,Te=r.convert(w.type))),ie&&(F?A.texStorage2D(n.TEXTURE_2D,1,Ee,$.width,$.height):A.texImage2D(n.TEXTURE_2D,0,Ee,$.width,$.height,0,Ge,Te,null));else if(w.isDataTexture)if(Pe.length>0&&$e){F&&ie&&A.texStorage2D(n.TEXTURE_2D,xe,Ee,Pe[0].width,Pe[0].height);for(let S=0,te=Pe.length;S<te;S++)he=Pe[S],F?oe&&A.texSubImage2D(n.TEXTURE_2D,S,0,0,he.width,he.height,Ge,Te,he.data):A.texImage2D(n.TEXTURE_2D,S,Ee,he.width,he.height,0,Ge,Te,he.data);w.generateMipmaps=!1}else F?(ie&&A.texStorage2D(n.TEXTURE_2D,xe,Ee,$.width,$.height),oe&&A.texSubImage2D(n.TEXTURE_2D,0,0,0,$.width,$.height,Ge,Te,$.data)):A.texImage2D(n.TEXTURE_2D,0,Ee,$.width,$.height,0,Ge,Te,$.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){F&&ie&&A.texStorage3D(n.TEXTURE_2D_ARRAY,xe,Ee,Pe[0].width,Pe[0].height,$.depth);for(let S=0,te=Pe.length;S<te;S++)he=Pe[S],w.format!==ut?Ge!==null?F?oe&&A.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,S,0,0,0,he.width,he.height,$.depth,Ge,he.data,0,0):A.compressedTexImage3D(n.TEXTURE_2D_ARRAY,S,Ee,he.width,he.height,$.depth,0,he.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?oe&&A.texSubImage3D(n.TEXTURE_2D_ARRAY,S,0,0,0,he.width,he.height,$.depth,Ge,Te,he.data):A.texImage3D(n.TEXTURE_2D_ARRAY,S,Ee,he.width,he.height,$.depth,0,Ge,Te,he.data)}else{F&&ie&&A.texStorage2D(n.TEXTURE_2D,xe,Ee,Pe[0].width,Pe[0].height);for(let S=0,te=Pe.length;S<te;S++)he=Pe[S],w.format!==ut?Ge!==null?F?oe&&A.compressedTexSubImage2D(n.TEXTURE_2D,S,0,0,he.width,he.height,Ge,he.data):A.compressedTexImage2D(n.TEXTURE_2D,S,Ee,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?oe&&A.texSubImage2D(n.TEXTURE_2D,S,0,0,he.width,he.height,Ge,Te,he.data):A.texImage2D(n.TEXTURE_2D,S,Ee,he.width,he.height,0,Ge,Te,he.data)}else if(w.isDataArrayTexture)F?(ie&&A.texStorage3D(n.TEXTURE_2D_ARRAY,xe,Ee,$.width,$.height,$.depth),oe&&A.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,Ge,Te,$.data)):A.texImage3D(n.TEXTURE_2D_ARRAY,0,Ee,$.width,$.height,$.depth,0,Ge,Te,$.data);else if(w.isData3DTexture)F?(ie&&A.texStorage3D(n.TEXTURE_3D,xe,Ee,$.width,$.height,$.depth),oe&&A.texSubImage3D(n.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,Ge,Te,$.data)):A.texImage3D(n.TEXTURE_3D,0,Ee,$.width,$.height,$.depth,0,Ge,Te,$.data);else if(w.isFramebufferTexture){if(ie)if(F)A.texStorage2D(n.TEXTURE_2D,xe,Ee,$.width,$.height);else{let S=$.width,te=$.height;for(let j=0;j<xe;j++)A.texImage2D(n.TEXTURE_2D,j,Ee,S,te,0,Ge,Te,null),S>>=1,te>>=1}}else if(Pe.length>0&&$e){F&&ie&&A.texStorage2D(n.TEXTURE_2D,xe,Ee,Pe[0].width,Pe[0].height);for(let S=0,te=Pe.length;S<te;S++)he=Pe[S],F?oe&&A.texSubImage2D(n.TEXTURE_2D,S,0,0,Ge,Te,he):A.texImage2D(n.TEXTURE_2D,S,Ee,Ge,Te,he);w.generateMipmaps=!1}else F?(ie&&A.texStorage2D(n.TEXTURE_2D,xe,Ee,$.width,$.height),oe&&A.texSubImage2D(n.TEXTURE_2D,0,0,0,Ge,Te,$)):A.texImage2D(n.TEXTURE_2D,0,Ee,Ge,Te,$);C(w,$e)&&v(ne),ge.__version=Ae.version,w.onUpdate&&w.onUpdate(w)}x.__version=w.version}function ce(x,w,D){if(w.image.length!==6)return;const ne=O(x,w),q=w.source;A.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+D);const Ae=t.get(q);if(q.version!==Ae.__version||ne===!0){A.activeTexture(n.TEXTURE0+D);const ge=eA.getPrimaries(eA.workingColorSpace),ae=w.colorSpace===nt?null:eA.getPrimaries(w.colorSpace),de=w.colorSpace===nt||ge===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Se=w.isCompressedTexture||w.image[0].isCompressedTexture,De=w.image[0]&&w.image[0].isDataTexture,$=[];for(let S=0;S<6;S++)!Se&&!De?$[S]=m(w.image[S],!1,!0,i.maxCubemapSize):$[S]=De?w.image[S].image:w.image[S],$[S]=Re(w,$[S]);const $e=$[0],Ge=d($e)||a,Te=r.convert(w.format,w.colorSpace),Ee=r.convert(w.type),he=E(w.internalFormat,Te,Ee,w.colorSpace),Pe=a&&w.isVideoTexture!==!0,F=Ae.__version===void 0||ne===!0,ie=q.dataReady;let oe=b(w,$e,Ge);we(n.TEXTURE_CUBE_MAP,w,Ge);let xe;if(Se){Pe&&F&&A.texStorage2D(n.TEXTURE_CUBE_MAP,oe,he,$e.width,$e.height);for(let S=0;S<6;S++){xe=$[S].mipmaps;for(let te=0;te<xe.length;te++){const j=xe[te];w.format!==ut?Te!==null?Pe?ie&&A.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+S,te,0,0,j.width,j.height,Te,j.data):A.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+S,te,he,j.width,j.height,0,j.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?ie&&A.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+S,te,0,0,j.width,j.height,Te,Ee,j.data):A.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+S,te,he,j.width,j.height,0,Te,Ee,j.data)}}}else{xe=w.mipmaps,Pe&&F&&(xe.length>0&&oe++,A.texStorage2D(n.TEXTURE_CUBE_MAP,oe,he,$[0].width,$[0].height));for(let S=0;S<6;S++)if(De){Pe?ie&&A.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+S,0,0,0,$[S].width,$[S].height,Te,Ee,$[S].data):A.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+S,0,he,$[S].width,$[S].height,0,Te,Ee,$[S].data);for(let te=0;te<xe.length;te++){const me=xe[te].image[S].image;Pe?ie&&A.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+S,te+1,0,0,me.width,me.height,Te,Ee,me.data):A.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+S,te+1,he,me.width,me.height,0,Te,Ee,me.data)}}else{Pe?ie&&A.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+S,0,0,0,Te,Ee,$[S]):A.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+S,0,he,Te,Ee,$[S]);for(let te=0;te<xe.length;te++){const j=xe[te];Pe?ie&&A.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+S,te+1,0,0,Te,Ee,j.image[S]):A.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+S,te+1,he,Te,Ee,j.image[S])}}}C(w,Ge)&&v(n.TEXTURE_CUBE_MAP),Ae.__version=q.version,w.onUpdate&&w.onUpdate(w)}x.__version=w.version}function ve(x,w,D,ne,q,Ae){const ge=r.convert(D.format,D.colorSpace),ae=r.convert(D.type),de=E(D.internalFormat,ge,ae,D.colorSpace);if(!t.get(w).__hasExternalTextures){const De=Math.max(1,w.width>>Ae),$=Math.max(1,w.height>>Ae);q===n.TEXTURE_3D||q===n.TEXTURE_2D_ARRAY?A.texImage3D(q,Ae,de,De,$,w.depth,0,ge,ae,null):A.texImage2D(q,Ae,de,De,$,0,ge,ae,null)}A.bindFramebuffer(n.FRAMEBUFFER,x),_e(w)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,q,t.get(D).__webglTexture,0,be(w)):(q===n.TEXTURE_2D||q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ne,q,t.get(D).__webglTexture,Ae),A.bindFramebuffer(n.FRAMEBUFFER,null)}function Me(x,w,D){if(n.bindRenderbuffer(n.RENDERBUFFER,x),w.depthBuffer&&!w.stencilBuffer){let ne=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(D||_e(w)){const q=w.depthTexture;q&&q.isDepthTexture&&(q.type===It?ne=n.DEPTH_COMPONENT32F:q.type===$t&&(ne=n.DEPTH_COMPONENT24));const Ae=be(w);_e(w)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ae,ne,w.width,w.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,ne,w.width,w.height)}else n.renderbufferStorage(n.RENDERBUFFER,ne,w.width,w.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,x)}else if(w.depthBuffer&&w.stencilBuffer){const ne=be(w);D&&_e(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,n.DEPTH24_STENCIL8,w.width,w.height):_e(w)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,n.DEPTH24_STENCIL8,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,x)}else{const ne=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let q=0;q<ne.length;q++){const Ae=ne[q],ge=r.convert(Ae.format,Ae.colorSpace),ae=r.convert(Ae.type),de=E(Ae.internalFormat,ge,ae,Ae.colorSpace),Se=be(w);D&&_e(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Se,de,w.width,w.height):_e(w)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Se,de,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,de,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function pe(x,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(A.bindFramebuffer(n.FRAMEBUFFER,x),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!t.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),R(w.depthTexture,0);const ne=t.get(w.depthTexture).__webglTexture,q=be(w);if(w.depthTexture.format===Tn)_e(w)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0);else if(w.depthTexture.format===Fi)_e(w)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Xe(x){const w=t.get(x),D=x.isWebGLCubeRenderTarget===!0;if(x.depthTexture&&!w.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");pe(w.__webglFramebuffer,x)}else if(D){w.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)A.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[ne]),w.__webglDepthbuffer[ne]=n.createRenderbuffer(),Me(w.__webglDepthbuffer[ne],x,!1)}else A.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=n.createRenderbuffer(),Me(w.__webglDepthbuffer,x,!1);A.bindFramebuffer(n.FRAMEBUFFER,null)}function Le(x,w,D){const ne=t.get(x);w!==void 0&&ve(ne.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&Xe(x)}function I(x){const w=x.texture,D=t.get(x),ne=t.get(w);x.addEventListener("dispose",H),x.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=w.version,s.memory.textures++);const q=x.isWebGLCubeRenderTarget===!0,Ae=x.isWebGLMultipleRenderTargets===!0,ge=d(x)||a;if(q){D.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(a&&w.mipmaps&&w.mipmaps.length>0){D.__webglFramebuffer[ae]=[];for(let de=0;de<w.mipmaps.length;de++)D.__webglFramebuffer[ae][de]=n.createFramebuffer()}else D.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(a&&w.mipmaps&&w.mipmaps.length>0){D.__webglFramebuffer=[];for(let ae=0;ae<w.mipmaps.length;ae++)D.__webglFramebuffer[ae]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(Ae)if(i.drawBuffers){const ae=x.texture;for(let de=0,Se=ae.length;de<Se;de++){const De=t.get(ae[de]);De.__webglTexture===void 0&&(De.__webglTexture=n.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&x.samples>0&&_e(x)===!1){const ae=Ae?w:[w];D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],A.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let de=0;de<ae.length;de++){const Se=ae[de];D.__webglColorRenderbuffer[de]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[de]);const De=r.convert(Se.format,Se.colorSpace),$=r.convert(Se.type),$e=E(Se.internalFormat,De,$,Se.colorSpace,x.isXRRenderTarget===!0),Ge=be(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ge,$e,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,D.__webglColorRenderbuffer[de])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),Me(D.__webglDepthRenderbuffer,x,!0)),A.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){A.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),we(n.TEXTURE_CUBE_MAP,w,ge);for(let ae=0;ae<6;ae++)if(a&&w.mipmaps&&w.mipmaps.length>0)for(let de=0;de<w.mipmaps.length;de++)ve(D.__webglFramebuffer[ae][de],x,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,de);else ve(D.__webglFramebuffer[ae],x,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);C(w,ge)&&v(n.TEXTURE_CUBE_MAP),A.unbindTexture()}else if(Ae){const ae=x.texture;for(let de=0,Se=ae.length;de<Se;de++){const De=ae[de],$=t.get(De);A.bindTexture(n.TEXTURE_2D,$.__webglTexture),we(n.TEXTURE_2D,De,ge),ve(D.__webglFramebuffer,x,De,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,0),C(De,ge)&&v(n.TEXTURE_2D)}A.unbindTexture()}else{let ae=n.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(a?ae=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),A.bindTexture(ae,ne.__webglTexture),we(ae,w,ge),a&&w.mipmaps&&w.mipmaps.length>0)for(let de=0;de<w.mipmaps.length;de++)ve(D.__webglFramebuffer[de],x,w,n.COLOR_ATTACHMENT0,ae,de);else ve(D.__webglFramebuffer,x,w,n.COLOR_ATTACHMENT0,ae,0);C(w,ge)&&v(ae),A.unbindTexture()}x.depthBuffer&&Xe(x)}function BA(x){const w=d(x)||a,D=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let ne=0,q=D.length;ne<q;ne++){const Ae=D[ne];if(C(Ae,w)){const ge=x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ae=t.get(Ae).__webglTexture;A.bindTexture(ge,ae),v(ge),A.unbindTexture()}}}function Ue(x){if(a&&x.samples>0&&_e(x)===!1){const w=x.isWebGLMultipleRenderTargets?x.texture:[x.texture],D=x.width,ne=x.height;let q=n.COLOR_BUFFER_BIT;const Ae=[],ge=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=t.get(x),de=x.isWebGLMultipleRenderTargets===!0;if(de)for(let Se=0;Se<w.length;Se++)A.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,null),A.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,null,0);A.bindFramebuffer(n.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),A.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let Se=0;Se<w.length;Se++){Ae.push(n.COLOR_ATTACHMENT0+Se),x.depthBuffer&&Ae.push(ge);const De=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(De===!1&&(x.depthBuffer&&(q|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&(q|=n.STENCIL_BUFFER_BIT)),de&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ae.__webglColorRenderbuffer[Se]),De===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ge]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ge])),de){const $=t.get(w[Se]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,$,0)}n.blitFramebuffer(0,0,D,ne,0,0,D,ne,q,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ae)}if(A.bindFramebuffer(n.READ_FRAMEBUFFER,null),A.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),de)for(let Se=0;Se<w.length;Se++){A.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,ae.__webglColorRenderbuffer[Se]);const De=t.get(w[Se]).__webglTexture;A.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,De,0)}A.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}}function be(x){return Math.min(i.maxSamples,x.samples)}function _e(x){const w=t.get(x);return a&&x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function sA(x){const w=s.render.frame;c.get(x)!==w&&(c.set(x,w),x.update())}function Re(x,w){const D=x.colorSpace,ne=x.format,q=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||x.format===xo||D!==Ht&&D!==nt&&(eA.getTransfer(D)===aA?a===!1?e.has("EXT_sRGB")===!0&&ne===ut?(x.format=xo,x.minFilter=KA,x.generateMipmaps=!1):w=uh.sRGBToLinear(w):(ne!==ut||q!==rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),w}this.allocateTextureUnit=T,this.resetTextureUnits=z,this.setTexture2D=R,this.setTexture2DArray=X,this.setTexture3D=W,this.setTextureCube=Y,this.rebindTextures=Le,this.setupRenderTarget=I,this.updateRenderTargetMipmap=BA,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=_e}function l1(n,e,A){const t=A.isWebGL2;function i(r,s=nt){let a;const o=eA.getTransfer(s);if(r===rn)return n.UNSIGNED_BYTE;if(r===th)return n.UNSIGNED_SHORT_4_4_4_4;if(r===nh)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Fd)return n.BYTE;if(r===bd)return n.SHORT;if(r===jo)return n.UNSIGNED_SHORT;if(r===Ah)return n.INT;if(r===$t)return n.UNSIGNED_INT;if(r===It)return n.FLOAT;if(r===cr)return t?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Td)return n.ALPHA;if(r===ut)return n.RGBA;if(r===Qd)return n.LUMINANCE;if(r===Ld)return n.LUMINANCE_ALPHA;if(r===Tn)return n.DEPTH_COMPONENT;if(r===Fi)return n.DEPTH_STENCIL;if(r===xo)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Id)return n.RED;if(r===ih)return n.RED_INTEGER;if(r===Rd)return n.RG;if(r===rh)return n.RG_INTEGER;if(r===sh)return n.RGBA_INTEGER;if(r===pa||r===ga||r===ma||r===Ba)if(o===aA)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===pa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ga)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ma)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ba)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===pa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ga)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ma)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ba)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===bl||r===Tl||r===Ql||r===Ll)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===bl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Tl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ql)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ll)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ah)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Il||r===Rl)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Il)return o===aA?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Rl)return o===aA?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Dl||r===Hl||r===Pl||r===Nl||r===Ol||r===Gl||r===Vl||r===Kl||r===kl||r===zl||r===Wl||r===Xl||r===Yl||r===Jl)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Dl)return o===aA?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Hl)return o===aA?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Pl)return o===aA?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Nl)return o===aA?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ol)return o===aA?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Gl)return o===aA?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Vl)return o===aA?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Kl)return o===aA?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===kl)return o===aA?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===zl)return o===aA?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Wl)return o===aA?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Xl)return o===aA?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Yl)return o===aA?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Jl)return o===aA?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===wa||r===Zl||r===ql)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===wa)return o===aA?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Zl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ql)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Dd||r===$l||r===jl||r===ec)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===wa)return a.COMPRESSED_RED_RGTC1_EXT;if(r===$l)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===jl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ec)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===bn?t?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:i}}class c1 extends At{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class zi extends qA{constructor(){super(),this.isGroup=!0,this.type="Group"}}const u1={type:"move"};class Va{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const A=this._hand;if(A)for(const t of e.hand.values())this._getHandJoint(A,t)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,A,t){let i=null,r=null,s=null;const a=this._targetRay,o=this._grip,l=this._hand;if(e&&A.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(const m of e.hand.values()){const d=A.getJointPose(m,t),f=this._getHandJoint(l,m);d!==null&&(f.matrix.fromArray(d.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=d.radius),f.visible=d!==null}const c=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],h=c.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&h>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(r=A.getPose(e.gripSpace,t),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1));a!==null&&(i=A.getPose(e.targetRaySpace,t),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(u1)))}return a!==null&&(a.visible=i!==null),o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,A){if(e.joints[A.jointName]===void 0){const t=new zi;t.matrixAutoUpdate=!1,t.visible=!1,e.joints[A.jointName]=t,e.add(t)}return e.joints[A.jointName]}}const h1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,f1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class d1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,A,t){if(this.texture===null){const i=new WA,r=e.properties.get(i);r.__webglTexture=A.texture,(A.depthNear!=t.depthNear||A.depthFar!=t.depthFar)&&(this.depthNear=A.depthNear,this.depthFar=A.depthFar),this.texture=i}}render(e,A){if(this.texture!==null){if(this.mesh===null){const t=A.cameras[0].viewport,i=new ln({extensions:{fragDepth:!0},vertexShader:h1,fragmentShader:f1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wt(new Zs(20,20),i)}e.render(this.mesh,A)}}reset(){this.texture=null,this.mesh=null}}class p1 extends Hn{constructor(e,A){super();const t=this;let i=null,r=1,s=null,a="local-floor",o=1,l=null,c=null,u=null,h=null,p=null,g=null;const m=new d1,d=A.getContextAttributes();let f=null,C=null;const v=[],E=[],b=new Ie;let U=null;const y=new At;y.layers.enable(1),y.viewport=new bA;const H=new At;H.layers.enable(2),H.viewport=new bA;const K=[y,H],B=new c1;B.layers.enable(1),B.layers.enable(2);let M=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let Z=v[O];return Z===void 0&&(Z=new Va,v[O]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(O){let Z=v[O];return Z===void 0&&(Z=new Va,v[O]=Z),Z.getGripSpace()},this.getHand=function(O){let Z=v[O];return Z===void 0&&(Z=new Va,v[O]=Z),Z.getHandSpace()};function z(O){const Z=E.indexOf(O.inputSource);if(Z===-1)return;const ce=v[Z];ce!==void 0&&(ce.update(O.inputSource,O.frame,l||s),ce.dispatchEvent({type:O.type,data:O.inputSource}))}function T(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",T),i.removeEventListener("inputsourceschange",G);for(let O=0;O<v.length;O++){const Z=E[O];Z!==null&&(E[O]=null,v[O].disconnect(Z))}M=null,k=null,m.reset(),e.setRenderTarget(f),p=null,h=null,u=null,i=null,C=null,we.stop(),t.isPresenting=!1,e.setPixelRatio(U),e.setSize(b.width,b.height,!1),t.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){r=O,t.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,t.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(O){l=O},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(O){if(i=O,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",T),i.addEventListener("inputsourceschange",G),d.xrCompatible!==!0&&await A.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(b),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:i.renderState.layers===void 0?d.antialias:!0,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,A,Z),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),C=new Rn(p.framebufferWidth,p.framebufferHeight,{format:ut,type:rn,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil})}else{let Z=null,ce=null,ve=null;d.depth&&(ve=d.stencil?A.DEPTH24_STENCIL8:A.DEPTH_COMPONENT24,Z=d.stencil?Fi:Tn,ce=d.stencil?bn:$t);const Me={colorFormat:A.RGBA8,depthFormat:ve,scaleFactor:r};u=new XRWebGLBinding(i,A),h=u.createProjectionLayer(Me),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),C=new Rn(h.textureWidth,h.textureHeight,{format:ut,type:rn,depthTexture:new xh(h.textureWidth,h.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0});const pe=e.properties.get(C);pe.__ignoreDepthValues=h.ignoreDepthValues}C.isXRRenderTarget=!0,this.setFoveation(o),l=null,s=await i.requestReferenceSpace(a),we.setContext(i),we.start(),t.isPresenting=!0,t.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function G(O){for(let Z=0;Z<O.removed.length;Z++){const ce=O.removed[Z],ve=E.indexOf(ce);ve>=0&&(E[ve]=null,v[ve].disconnect(ce))}for(let Z=0;Z<O.added.length;Z++){const ce=O.added[Z];let ve=E.indexOf(ce);if(ve===-1){for(let pe=0;pe<v.length;pe++)if(pe>=E.length){E.push(ce),ve=pe;break}else if(E[pe]===null){E[pe]=ce,ve=pe;break}if(ve===-1)break}const Me=v[ve];Me&&Me.connect(ce)}}const R=new Q,X=new Q;function W(O,Z,ce){R.setFromMatrixPosition(Z.matrixWorld),X.setFromMatrixPosition(ce.matrixWorld);const ve=R.distanceTo(X),Me=Z.projectionMatrix.elements,pe=ce.projectionMatrix.elements,Xe=Me[14]/(Me[10]-1),Le=Me[14]/(Me[10]+1),I=(Me[9]+1)/Me[5],BA=(Me[9]-1)/Me[5],Ue=(Me[8]-1)/Me[0],be=(pe[8]+1)/pe[0],_e=Xe*Ue,sA=Xe*be,Re=ve/(-Ue+be),x=Re*-Ue;Z.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(x),O.translateZ(Re),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const w=Xe+Re,D=Le+Re,ne=_e-x,q=sA+(ve-x),Ae=I*Le/D*w,ge=BA*Le/D*w;O.projectionMatrix.makePerspective(ne,q,Ae,ge,w,D),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}function Y(O,Z){Z===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(Z.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(i===null)return;m.texture!==null&&(O.near=m.depthNear,O.far=m.depthFar),B.near=H.near=y.near=O.near,B.far=H.far=y.far=O.far,(M!==B.near||k!==B.far)&&(i.updateRenderState({depthNear:B.near,depthFar:B.far}),M=B.near,k=B.far,y.near=M,y.far=k,H.near=M,H.far=k,y.updateProjectionMatrix(),H.updateProjectionMatrix(),O.updateProjectionMatrix());const Z=O.parent,ce=B.cameras;Y(B,Z);for(let ve=0;ve<ce.length;ve++)Y(ce[ve],Z);ce.length===2?W(B,y,H):B.projectionMatrix.copy(y.projectionMatrix),J(O,B,Z)};function J(O,Z,ce){ce===null?O.matrix.copy(Z.matrixWorld):(O.matrix.copy(ce.matrixWorld),O.matrix.invert(),O.matrix.multiply(Z.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(Z.projectionMatrix),O.projectionMatrixInverse.copy(Z.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=ur*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(h===null&&p===null))return o},this.setFoveation=function(O){o=O,h!==null&&(h.fixedFoveation=O),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=O)},this.hasDepthSensing=function(){return m.texture!==null};let ee=null;function re(O,Z){if(c=Z.getViewerPose(l||s),g=Z,c!==null){const ce=c.views;p!==null&&(e.setRenderTargetFramebuffer(C,p.framebuffer),e.setRenderTarget(C));let ve=!1;ce.length!==B.cameras.length&&(B.cameras.length=0,ve=!0);for(let pe=0;pe<ce.length;pe++){const Xe=ce[pe];let Le=null;if(p!==null)Le=p.getViewport(Xe);else{const BA=u.getViewSubImage(h,Xe);Le=BA.viewport,pe===0&&(e.setRenderTargetTextures(C,BA.colorTexture,h.ignoreDepthValues?void 0:BA.depthStencilTexture),e.setRenderTarget(C))}let I=K[pe];I===void 0&&(I=new At,I.layers.enable(pe),I.viewport=new bA,K[pe]=I),I.matrix.fromArray(Xe.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(Xe.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(Le.x,Le.y,Le.width,Le.height),pe===0&&(B.matrix.copy(I.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),ve===!0&&B.cameras.push(I)}const Me=i.enabledFeatures;if(Me&&Me.includes("depth-sensing")){const pe=u.getDepthInformation(ce[0]);pe&&pe.isValid&&pe.texture&&m.init(e,pe,i.renderState)}}for(let ce=0;ce<v.length;ce++){const ve=E[ce],Me=v[ce];ve!==null&&Me!==void 0&&Me.update(ve,Z,l||s)}m.render(e,B),ee&&ee(O,Z),Z.detectedPlanes&&t.dispatchEvent({type:"planesdetected",data:Z}),g=null}const we=new Eh;we.setAnimationLoop(re),this.setAnimationLoop=function(O){ee=O},this.dispose=function(){}}}function g1(n,e){function A(d,f){d.matrixAutoUpdate===!0&&d.updateMatrix(),f.value.copy(d.matrix)}function t(d,f){f.color.getRGB(d.fogColor.value,wh(n)),f.isFog?(d.fogNear.value=f.near,d.fogFar.value=f.far):f.isFogExp2&&(d.fogDensity.value=f.density)}function i(d,f,C,v,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(d,f):f.isMeshToonMaterial?(r(d,f),u(d,f)):f.isMeshPhongMaterial?(r(d,f),c(d,f)):f.isMeshStandardMaterial?(r(d,f),h(d,f),f.isMeshPhysicalMaterial&&p(d,f,E)):f.isMeshMatcapMaterial?(r(d,f),g(d,f)):f.isMeshDepthMaterial?r(d,f):f.isMeshDistanceMaterial?(r(d,f),m(d,f)):f.isMeshNormalMaterial?r(d,f):f.isLineBasicMaterial?(s(d,f),f.isLineDashedMaterial&&a(d,f)):f.isPointsMaterial?o(d,f,C,v):f.isSpriteMaterial?l(d,f):f.isShadowMaterial?(d.color.value.copy(f.color),d.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(d,f){d.opacity.value=f.opacity,f.color&&d.diffuse.value.copy(f.color),f.emissive&&d.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(d.map.value=f.map,A(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,A(f.alphaMap,d.alphaMapTransform)),f.bumpMap&&(d.bumpMap.value=f.bumpMap,A(f.bumpMap,d.bumpMapTransform),d.bumpScale.value=f.bumpScale,f.side===zA&&(d.bumpScale.value*=-1)),f.normalMap&&(d.normalMap.value=f.normalMap,A(f.normalMap,d.normalMapTransform),d.normalScale.value.copy(f.normalScale),f.side===zA&&d.normalScale.value.negate()),f.displacementMap&&(d.displacementMap.value=f.displacementMap,A(f.displacementMap,d.displacementMapTransform),d.displacementScale.value=f.displacementScale,d.displacementBias.value=f.displacementBias),f.emissiveMap&&(d.emissiveMap.value=f.emissiveMap,A(f.emissiveMap,d.emissiveMapTransform)),f.specularMap&&(d.specularMap.value=f.specularMap,A(f.specularMap,d.specularMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest);const C=e.get(f).envMap;if(C&&(d.envMap.value=C,d.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=f.reflectivity,d.ior.value=f.ior,d.refractionRatio.value=f.refractionRatio),f.lightMap){d.lightMap.value=f.lightMap;const v=n._useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=f.lightMapIntensity*v,A(f.lightMap,d.lightMapTransform)}f.aoMap&&(d.aoMap.value=f.aoMap,d.aoMapIntensity.value=f.aoMapIntensity,A(f.aoMap,d.aoMapTransform))}function s(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,f.map&&(d.map.value=f.map,A(f.map,d.mapTransform))}function a(d,f){d.dashSize.value=f.dashSize,d.totalSize.value=f.dashSize+f.gapSize,d.scale.value=f.scale}function o(d,f,C,v){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.size.value=f.size*C,d.scale.value=v*.5,f.map&&(d.map.value=f.map,A(f.map,d.uvTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,A(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function l(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.rotation.value=f.rotation,f.map&&(d.map.value=f.map,A(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,A(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function c(d,f){d.specular.value.copy(f.specular),d.shininess.value=Math.max(f.shininess,1e-4)}function u(d,f){f.gradientMap&&(d.gradientMap.value=f.gradientMap)}function h(d,f){d.metalness.value=f.metalness,f.metalnessMap&&(d.metalnessMap.value=f.metalnessMap,A(f.metalnessMap,d.metalnessMapTransform)),d.roughness.value=f.roughness,f.roughnessMap&&(d.roughnessMap.value=f.roughnessMap,A(f.roughnessMap,d.roughnessMapTransform)),e.get(f).envMap&&(d.envMapIntensity.value=f.envMapIntensity)}function p(d,f,C){d.ior.value=f.ior,f.sheen>0&&(d.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),d.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(d.sheenColorMap.value=f.sheenColorMap,A(f.sheenColorMap,d.sheenColorMapTransform)),f.sheenRoughnessMap&&(d.sheenRoughnessMap.value=f.sheenRoughnessMap,A(f.sheenRoughnessMap,d.sheenRoughnessMapTransform))),f.clearcoat>0&&(d.clearcoat.value=f.clearcoat,d.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(d.clearcoatMap.value=f.clearcoatMap,A(f.clearcoatMap,d.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,A(f.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(d.clearcoatNormalMap.value=f.clearcoatNormalMap,A(f.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===zA&&d.clearcoatNormalScale.value.negate())),f.iridescence>0&&(d.iridescence.value=f.iridescence,d.iridescenceIOR.value=f.iridescenceIOR,d.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(d.iridescenceMap.value=f.iridescenceMap,A(f.iridescenceMap,d.iridescenceMapTransform)),f.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=f.iridescenceThicknessMap,A(f.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),f.transmission>0&&(d.transmission.value=f.transmission,d.transmissionSamplerMap.value=C.texture,d.transmissionSamplerSize.value.set(C.width,C.height),f.transmissionMap&&(d.transmissionMap.value=f.transmissionMap,A(f.transmissionMap,d.transmissionMapTransform)),d.thickness.value=f.thickness,f.thicknessMap&&(d.thicknessMap.value=f.thicknessMap,A(f.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=f.attenuationDistance,d.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(d.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(d.anisotropyMap.value=f.anisotropyMap,A(f.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=f.specularIntensity,d.specularColor.value.copy(f.specularColor),f.specularColorMap&&(d.specularColorMap.value=f.specularColorMap,A(f.specularColorMap,d.specularColorMapTransform)),f.specularIntensityMap&&(d.specularIntensityMap.value=f.specularIntensityMap,A(f.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,f){f.matcap&&(d.matcap.value=f.matcap)}function m(d,f){const C=e.get(f).light;d.referencePosition.value.setFromMatrixPosition(C.matrixWorld),d.nearDistance.value=C.shadow.camera.near,d.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function m1(n,e,A,t){let i={},r={},s=[];const a=A.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function o(C,v){const E=v.program;t.uniformBlockBinding(C,E)}function l(C,v){let E=i[C.id];E===void 0&&(g(C),E=c(C),i[C.id]=E,C.addEventListener("dispose",d));const b=v.program;t.updateUBOMapping(C,b);const U=e.render.frame;r[C.id]!==U&&(h(C),r[C.id]=U)}function c(C){const v=u();C.__bindingPointIndex=v;const E=n.createBuffer(),b=C.__size,U=C.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,b,U),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,E),E}function u(){for(let C=0;C<a;C++)if(s.indexOf(C)===-1)return s.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(C){const v=i[C.id],E=C.uniforms,b=C.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let U=0,y=E.length;U<y;U++){const H=Array.isArray(E[U])?E[U]:[E[U]];for(let K=0,B=H.length;K<B;K++){const M=H[K];if(p(M,U,K,b)===!0){const k=M.__offset,z=Array.isArray(M.value)?M.value:[M.value];let T=0;for(let G=0;G<z.length;G++){const R=z[G],X=m(R);typeof R=="number"||typeof R=="boolean"?(M.__data[0]=R,n.bufferSubData(n.UNIFORM_BUFFER,k+T,M.__data)):R.isMatrix3?(M.__data[0]=R.elements[0],M.__data[1]=R.elements[1],M.__data[2]=R.elements[2],M.__data[3]=0,M.__data[4]=R.elements[3],M.__data[5]=R.elements[4],M.__data[6]=R.elements[5],M.__data[7]=0,M.__data[8]=R.elements[6],M.__data[9]=R.elements[7],M.__data[10]=R.elements[8],M.__data[11]=0):(R.toArray(M.__data,T),T+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,M.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(C,v,E,b){const U=C.value,y=v+"_"+E;if(b[y]===void 0)return typeof U=="number"||typeof U=="boolean"?b[y]=U:b[y]=U.clone(),!0;{const H=b[y];if(typeof U=="number"||typeof U=="boolean"){if(H!==U)return b[y]=U,!0}else if(H.equals(U)===!1)return H.copy(U),!0}return!1}function g(C){const v=C.uniforms;let E=0;const b=16;for(let y=0,H=v.length;y<H;y++){const K=Array.isArray(v[y])?v[y]:[v[y]];for(let B=0,M=K.length;B<M;B++){const k=K[B],z=Array.isArray(k.value)?k.value:[k.value];for(let T=0,G=z.length;T<G;T++){const R=z[T],X=m(R),W=E%b;W!==0&&b-W<X.boundary&&(E+=b-W),k.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=E,E+=X.storage}}}const U=E%b;return U>0&&(E+=b-U),C.__size=E,C.__cache={},this}function m(C){const v={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(v.boundary=4,v.storage=4):C.isVector2?(v.boundary=8,v.storage=8):C.isVector3||C.isColor?(v.boundary=16,v.storage=12):C.isVector4?(v.boundary=16,v.storage=16):C.isMatrix3?(v.boundary=48,v.storage=48):C.isMatrix4?(v.boundary=64,v.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),v}function d(C){const v=C.target;v.removeEventListener("dispose",d);const E=s.indexOf(v.__bindingPointIndex);s.splice(E,1),n.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function f(){for(const C in i)n.deleteBuffer(i[C]);s=[],i={},r={}}return{bind:o,update:l,dispose:f}}class bh{constructor(e={}){const{canvas:A=lp(),context:t=null,depth:i=!0,stencil:r=!0,alpha:s=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let h;t!==null?h=t.getContextAttributes().alpha:h=s;const p=new Uint32Array(4),g=new Int32Array(4);let m=null,d=null;const f=[],C=[];this.domElement=A,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=FA,this._useLegacyLights=!1,this.toneMapping=nn,this.toneMappingExposure=1;const v=this;let E=!1,b=0,U=0,y=null,H=-1,K=null;const B=new bA,M=new bA;let k=null;const z=new qe(0);let T=0,G=A.width,R=A.height,X=1,W=null,Y=null;const J=new bA(0,0,G,R),ee=new bA(0,0,G,R);let re=!1;const we=new Ch;let O=!1,Z=!1,ce=null;const ve=new yA,Me=new Ie,pe=new Q,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Le(){return y===null?X:1}let I=t;function BA(_,L){for(let N=0;N<_.length;N++){const V=_[N],P=A.getContext(V,L);if(P!==null)return P}return null}try{const _={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in A&&A.setAttribute("data-engine",`three.js r${$o}`),A.addEventListener("webglcontextlost",xe,!1),A.addEventListener("webglcontextrestored",S,!1),A.addEventListener("webglcontextcreationerror",te,!1),I===null){const L=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&L.shift(),I=BA(L,_),I===null)throw BA(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let Ue,be,_e,sA,Re,x,w,D,ne,q,Ae,ge,ae,de,Se,De,$,$e,Ge,Te,Ee,he,Pe,F;function ie(){Ue=new xm(I),be=new mm(I,Ue,e),Ue.init(be),he=new l1(I,Ue,be),_e=new a1(I,Ue,be),sA=new Sm(I),Re=new XB,x=new o1(I,Ue,_e,Re,be,he,sA),w=new wm(v),D=new Em(v),ne=new Ip(I,be),Pe=new pm(I,Ue,ne,be),q=new Um(I,ne,sA,Pe),Ae=new Tm(I,q,ne,sA),Ge=new bm(I,be,x),De=new Bm(Re),ge=new WB(v,w,D,Ue,be,Pe,De),ae=new g1(v,Re),de=new JB,Se=new A1(Ue,be),$e=new dm(v,w,D,_e,Ae,h,o),$=new s1(v,Ae,be),F=new m1(I,sA,be,_e),Te=new gm(I,Ue,sA,be),Ee=new ym(I,Ue,sA,be),sA.programs=ge.programs,v.capabilities=be,v.extensions=Ue,v.properties=Re,v.renderLists=de,v.shadowMap=$,v.state=_e,v.info=sA}ie();const oe=new p1(v,I);this.xr=oe,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const _=Ue.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){const _=Ue.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(_){_!==void 0&&(X=_,this.setSize(G,R,!1))},this.getSize=function(_){return _.set(G,R)},this.setSize=function(_,L,N=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=_,R=L,A.width=Math.floor(_*X),A.height=Math.floor(L*X),N===!0&&(A.style.width=_+"px",A.style.height=L+"px"),this.setViewport(0,0,_,L)},this.getDrawingBufferSize=function(_){return _.set(G*X,R*X).floor()},this.setDrawingBufferSize=function(_,L,N){G=_,R=L,X=N,A.width=Math.floor(_*N),A.height=Math.floor(L*N),this.setViewport(0,0,_,L)},this.getCurrentViewport=function(_){return _.copy(B)},this.getViewport=function(_){return _.copy(J)},this.setViewport=function(_,L,N,V){_.isVector4?J.set(_.x,_.y,_.z,_.w):J.set(_,L,N,V),_e.viewport(B.copy(J).multiplyScalar(X).floor())},this.getScissor=function(_){return _.copy(ee)},this.setScissor=function(_,L,N,V){_.isVector4?ee.set(_.x,_.y,_.z,_.w):ee.set(_,L,N,V),_e.scissor(M.copy(ee).multiplyScalar(X).floor())},this.getScissorTest=function(){return re},this.setScissorTest=function(_){_e.setScissorTest(re=_)},this.setOpaqueSort=function(_){W=_},this.setTransparentSort=function(_){Y=_},this.getClearColor=function(_){return _.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor.apply($e,arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha.apply($e,arguments)},this.clear=function(_=!0,L=!0,N=!0){let V=0;if(_){let P=!1;if(y!==null){const fe=y.texture.format;P=fe===sh||fe===rh||fe===ih}if(P){const fe=y.texture.type,Ce=fe===rn||fe===$t||fe===jo||fe===bn||fe===th||fe===nh,Fe=$e.getClearColor(),Qe=$e.getClearAlpha(),Ve=Fe.r,He=Fe.g,Ne=Fe.b;Ce?(p[0]=Ve,p[1]=He,p[2]=Ne,p[3]=Qe,I.clearBufferuiv(I.COLOR,0,p)):(g[0]=Ve,g[1]=He,g[2]=Ne,g[3]=Qe,I.clearBufferiv(I.COLOR,0,g))}else V|=I.COLOR_BUFFER_BIT}L&&(V|=I.DEPTH_BUFFER_BIT),N&&(V|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){A.removeEventListener("webglcontextlost",xe,!1),A.removeEventListener("webglcontextrestored",S,!1),A.removeEventListener("webglcontextcreationerror",te,!1),de.dispose(),Se.dispose(),Re.dispose(),w.dispose(),D.dispose(),Ae.dispose(),Pe.dispose(),F.dispose(),ge.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",SA),oe.removeEventListener("sessionend",Ze),ce&&(ce.dispose(),ce=null),hA.stop()};function xe(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function S(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const _=sA.autoReset,L=$.enabled,N=$.autoUpdate,V=$.needsUpdate,P=$.type;ie(),sA.autoReset=_,$.enabled=L,$.autoUpdate=N,$.needsUpdate=V,$.type=P}function te(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function j(_){const L=_.target;L.removeEventListener("dispose",j),me(L)}function me(_){ye(_),Re.remove(_)}function ye(_){const L=Re.get(_).programs;L!==void 0&&(L.forEach(function(N){ge.releaseProgram(N)}),_.isShaderMaterial&&ge.releaseShaderCache(_))}this.renderBufferDirect=function(_,L,N,V,P,fe){L===null&&(L=Xe);const Ce=P.isMesh&&P.matrixWorld.determinant()<0,Fe=zf(_,L,N,V,P);_e.setMaterial(V,Ce);let Qe=N.index,Ve=1;if(V.wireframe===!0){if(Qe=q.getWireframeAttribute(N),Qe===void 0)return;Ve=2}const He=N.drawRange,Ne=N.attributes.position;let fA=He.start*Ve,XA=(He.start+He.count)*Ve;fe!==null&&(fA=Math.max(fA,fe.start*Ve),XA=Math.min(XA,(fe.start+fe.count)*Ve)),Qe!==null?(fA=Math.max(fA,0),XA=Math.min(XA,Qe.count)):Ne!=null&&(fA=Math.max(fA,0),XA=Math.min(XA,Ne.count));const CA=XA-fA;if(CA<0||CA===1/0)return;Pe.setup(P,V,Fe,N,Qe);let Et,cA=Te;if(Qe!==null&&(Et=ne.get(Qe),cA=Ee,cA.setIndex(Et)),P.isMesh)V.wireframe===!0?(_e.setLineWidth(V.wireframeLinewidth*Le()),cA.setMode(I.LINES)):cA.setMode(I.TRIANGLES);else if(P.isLine){let Ke=V.linewidth;Ke===void 0&&(Ke=1),_e.setLineWidth(Ke*Le()),P.isLineSegments?cA.setMode(I.LINES):P.isLineLoop?cA.setMode(I.LINE_LOOP):cA.setMode(I.LINE_STRIP)}else P.isPoints?cA.setMode(I.POINTS):P.isSprite&&cA.setMode(I.TRIANGLES);if(P.isBatchedMesh)cA.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else if(P.isInstancedMesh)cA.renderInstances(fA,CA,P.count);else if(N.isInstancedBufferGeometry){const Ke=N._maxInstanceCount!==void 0?N._maxInstanceCount:1/0,la=Math.min(N.instanceCount,Ke);cA.renderInstances(fA,CA,la)}else cA.render(fA,CA)};function Je(_,L,N){_.transparent===!0&&_.side===Lt&&_.forceSinglePass===!1?(_.side=zA,_.needsUpdate=!0,Mr(_,L,N),_.side=on,_.needsUpdate=!0,Mr(_,L,N),_.side=Lt):Mr(_,L,N)}this.compile=function(_,L,N=null){N===null&&(N=_),d=Se.get(N),d.init(),C.push(d),N.traverseVisible(function(P){P.isLight&&P.layers.test(L.layers)&&(d.pushLight(P),P.castShadow&&d.pushShadow(P))}),_!==N&&_.traverseVisible(function(P){P.isLight&&P.layers.test(L.layers)&&(d.pushLight(P),P.castShadow&&d.pushShadow(P))}),d.setupLights(v._useLegacyLights);const V=new Set;return _.traverse(function(P){const fe=P.material;if(fe)if(Array.isArray(fe))for(let Ce=0;Ce<fe.length;Ce++){const Fe=fe[Ce];Je(Fe,N,P),V.add(Fe)}else Je(fe,N,P),V.add(fe)}),C.pop(),d=null,V},this.compileAsync=function(_,L,N=null){const V=this.compile(_,L,N);return new Promise(P=>{function fe(){if(V.forEach(function(Ce){Re.get(Ce).currentProgram.isReady()&&V.delete(Ce)}),V.size===0){P(_);return}setTimeout(fe,10)}Ue.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let ze=null;function tA(_){ze&&ze(_)}function SA(){hA.stop()}function Ze(){hA.start()}const hA=new Eh;hA.setAnimationLoop(tA),typeof self<"u"&&hA.setContext(self),this.setAnimationLoop=function(_){ze=_,oe.setAnimationLoop(_),_===null?hA.stop():hA.start()},oe.addEventListener("sessionstart",SA),oe.addEventListener("sessionend",Ze),this.render=function(_,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(L),L=oe.getCamera()),_.isScene===!0&&_.onBeforeRender(v,_,L,y),d=Se.get(_,C.length),d.init(),C.push(d),ve.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),we.setFromProjectionMatrix(ve),Z=this.localClippingEnabled,O=De.init(this.clippingPlanes,Z),m=de.get(_,f.length),m.init(),f.push(m),HA(_,L,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(W,Y),this.info.render.frame++,O===!0&&De.beginShadows();const N=d.state.shadowsArray;if($.render(N,_,L),O===!0&&De.endShadows(),this.info.autoReset===!0&&this.info.reset(),(oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1)&&$e.render(m,_),d.setupLights(v._useLegacyLights),L.isArrayCamera){const V=L.cameras;for(let P=0,fe=V.length;P<fe;P++){const Ce=V[P];gl(m,_,Ce,Ce.viewport)}}else gl(m,_,L);y!==null&&(x.updateMultisampleRenderTarget(y),x.updateRenderTargetMipmap(y)),_.isScene===!0&&_.onAfterRender(v,_,L),Pe.resetDefaultState(),H=-1,K=null,C.pop(),C.length>0?d=C[C.length-1]:d=null,f.pop(),f.length>0?m=f[f.length-1]:m=null};function HA(_,L,N,V){if(_.visible===!1)return;if(_.layers.test(L.layers)){if(_.isGroup)N=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(L);else if(_.isLight)d.pushLight(_),_.castShadow&&d.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||we.intersectsSprite(_)){V&&pe.setFromMatrixPosition(_.matrixWorld).applyMatrix4(ve);const Ce=Ae.update(_),Fe=_.material;Fe.visible&&m.push(_,Ce,Fe,N,pe.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||we.intersectsObject(_))){const Ce=Ae.update(_),Fe=_.material;if(V&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),pe.copy(_.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),pe.copy(Ce.boundingSphere.center)),pe.applyMatrix4(_.matrixWorld).applyMatrix4(ve)),Array.isArray(Fe)){const Qe=Ce.groups;for(let Ve=0,He=Qe.length;Ve<He;Ve++){const Ne=Qe[Ve],fA=Fe[Ne.materialIndex];fA&&fA.visible&&m.push(_,Ce,fA,N,pe.z,Ne)}}else Fe.visible&&m.push(_,Ce,Fe,N,pe.z,null)}}const fe=_.children;for(let Ce=0,Fe=fe.length;Ce<Fe;Ce++)HA(fe[Ce],L,N,V)}function gl(_,L,N,V){const P=_.opaque,fe=_.transmissive,Ce=_.transparent;d.setupLightsView(N),O===!0&&De.setGlobalState(v.clippingPlanes,N),fe.length>0&&kf(P,fe,L,N),V&&_e.viewport(B.copy(V)),P.length>0&&Sr(P,L,N),fe.length>0&&Sr(fe,L,N),Ce.length>0&&Sr(Ce,L,N),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function kf(_,L,N,V){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;const fe=be.isWebGL2;ce===null&&(ce=new Rn(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")?cr:rn,minFilter:En,samples:fe?4:0})),v.getDrawingBufferSize(Me),fe?ce.setSize(Me.x,Me.y):ce.setSize(Qs(Me.x),Qs(Me.y));const Ce=v.getRenderTarget();v.setRenderTarget(ce),v.getClearColor(z),T=v.getClearAlpha(),T<1&&v.setClearColor(16777215,.5),v.clear();const Fe=v.toneMapping;v.toneMapping=nn,Sr(_,N,V),x.updateMultisampleRenderTarget(ce),x.updateRenderTargetMipmap(ce);let Qe=!1;for(let Ve=0,He=L.length;Ve<He;Ve++){const Ne=L[Ve],fA=Ne.object,XA=Ne.geometry,CA=Ne.material,Et=Ne.group;if(CA.side===Lt&&fA.layers.test(V.layers)){const cA=CA.side;CA.side=zA,CA.needsUpdate=!0,ml(fA,N,V,XA,CA,Et),CA.side=cA,CA.needsUpdate=!0,Qe=!0}}Qe===!0&&(x.updateMultisampleRenderTarget(ce),x.updateRenderTargetMipmap(ce)),v.setRenderTarget(Ce),v.setClearColor(z,T),v.toneMapping=Fe}function Sr(_,L,N){const V=L.isScene===!0?L.overrideMaterial:null;for(let P=0,fe=_.length;P<fe;P++){const Ce=_[P],Fe=Ce.object,Qe=Ce.geometry,Ve=V===null?Ce.material:V,He=Ce.group;Fe.layers.test(N.layers)&&ml(Fe,L,N,Qe,Ve,He)}}function ml(_,L,N,V,P,fe){_.onBeforeRender(v,L,N,V,P,fe),_.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),P.onBeforeRender(v,L,N,V,_,fe),P.transparent===!0&&P.side===Lt&&P.forceSinglePass===!1?(P.side=zA,P.needsUpdate=!0,v.renderBufferDirect(N,L,V,P,_,fe),P.side=on,P.needsUpdate=!0,v.renderBufferDirect(N,L,V,P,_,fe),P.side=Lt):v.renderBufferDirect(N,L,V,P,_,fe),_.onAfterRender(v,L,N,V,P,fe)}function Mr(_,L,N){L.isScene!==!0&&(L=Xe);const V=Re.get(_),P=d.state.lights,fe=d.state.shadowsArray,Ce=P.state.version,Fe=ge.getParameters(_,P.state,fe,L,N),Qe=ge.getProgramCacheKey(Fe);let Ve=V.programs;V.environment=_.isMeshStandardMaterial?L.environment:null,V.fog=L.fog,V.envMap=(_.isMeshStandardMaterial?D:w).get(_.envMap||V.environment),Ve===void 0&&(_.addEventListener("dispose",j),Ve=new Map,V.programs=Ve);let He=Ve.get(Qe);if(He!==void 0){if(V.currentProgram===He&&V.lightsStateVersion===Ce)return wl(_,Fe),He}else Fe.uniforms=ge.getUniforms(_),_.onBuild(N,Fe,v),_.onBeforeCompile(Fe,v),He=ge.acquireProgram(Fe,Qe),Ve.set(Qe,He),V.uniforms=Fe.uniforms;const Ne=V.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Ne.clippingPlanes=De.uniform),wl(_,Fe),V.needsLights=Xf(_),V.lightsStateVersion=Ce,V.needsLights&&(Ne.ambientLightColor.value=P.state.ambient,Ne.lightProbe.value=P.state.probe,Ne.directionalLights.value=P.state.directional,Ne.directionalLightShadows.value=P.state.directionalShadow,Ne.spotLights.value=P.state.spot,Ne.spotLightShadows.value=P.state.spotShadow,Ne.rectAreaLights.value=P.state.rectArea,Ne.ltc_1.value=P.state.rectAreaLTC1,Ne.ltc_2.value=P.state.rectAreaLTC2,Ne.pointLights.value=P.state.point,Ne.pointLightShadows.value=P.state.pointShadow,Ne.hemisphereLights.value=P.state.hemi,Ne.directionalShadowMap.value=P.state.directionalShadowMap,Ne.directionalShadowMatrix.value=P.state.directionalShadowMatrix,Ne.spotShadowMap.value=P.state.spotShadowMap,Ne.spotLightMatrix.value=P.state.spotLightMatrix,Ne.spotLightMap.value=P.state.spotLightMap,Ne.pointShadowMap.value=P.state.pointShadowMap,Ne.pointShadowMatrix.value=P.state.pointShadowMatrix),V.currentProgram=He,V.uniformsList=null,He}function Bl(_){if(_.uniformsList===null){const L=_.currentProgram.getUniforms();_.uniformsList=Cs.seqWithValue(L.seq,_.uniforms)}return _.uniformsList}function wl(_,L){const N=Re.get(_);N.outputColorSpace=L.outputColorSpace,N.batching=L.batching,N.instancing=L.instancing,N.instancingColor=L.instancingColor,N.skinning=L.skinning,N.morphTargets=L.morphTargets,N.morphNormals=L.morphNormals,N.morphColors=L.morphColors,N.morphTargetsCount=L.morphTargetsCount,N.numClippingPlanes=L.numClippingPlanes,N.numIntersection=L.numClipIntersection,N.vertexAlphas=L.vertexAlphas,N.vertexTangents=L.vertexTangents,N.toneMapping=L.toneMapping}function zf(_,L,N,V,P){L.isScene!==!0&&(L=Xe),x.resetTextureUnits();const fe=L.fog,Ce=V.isMeshStandardMaterial?L.environment:null,Fe=y===null?v.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:Ht,Qe=(V.isMeshStandardMaterial?D:w).get(V.envMap||Ce),Ve=V.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,He=!!N.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ne=!!N.morphAttributes.position,fA=!!N.morphAttributes.normal,XA=!!N.morphAttributes.color;let CA=nn;V.toneMapped&&(y===null||y.isXRRenderTarget===!0)&&(CA=v.toneMapping);const Et=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,cA=Et!==void 0?Et.length:0,Ke=Re.get(V),la=d.state.lights;if(O===!0&&(Z===!0||_!==K)){const $A=_===K&&V.id===H;De.setState(V,_,$A)}let uA=!1;V.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==la.state.version||Ke.outputColorSpace!==Fe||P.isBatchedMesh&&Ke.batching===!1||!P.isBatchedMesh&&Ke.batching===!0||P.isInstancedMesh&&Ke.instancing===!1||!P.isInstancedMesh&&Ke.instancing===!0||P.isSkinnedMesh&&Ke.skinning===!1||!P.isSkinnedMesh&&Ke.skinning===!0||P.isInstancedMesh&&Ke.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&Ke.instancingColor===!1&&P.instanceColor!==null||Ke.envMap!==Qe||V.fog===!0&&Ke.fog!==fe||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==De.numPlanes||Ke.numIntersection!==De.numIntersection)||Ke.vertexAlphas!==Ve||Ke.vertexTangents!==He||Ke.morphTargets!==Ne||Ke.morphNormals!==fA||Ke.morphColors!==XA||Ke.toneMapping!==CA||be.isWebGL2===!0&&Ke.morphTargetsCount!==cA)&&(uA=!0):(uA=!0,Ke.__version=V.version);let hn=Ke.currentProgram;uA===!0&&(hn=Mr(V,L,P));let vl=!1,Ri=!1,ca=!1;const QA=hn.getUniforms(),fn=Ke.uniforms;if(_e.useProgram(hn.program)&&(vl=!0,Ri=!0,ca=!0),V.id!==H&&(H=V.id,Ri=!0),vl||K!==_){QA.setValue(I,"projectionMatrix",_.projectionMatrix),QA.setValue(I,"viewMatrix",_.matrixWorldInverse);const $A=QA.map.cameraPosition;$A!==void 0&&$A.setValue(I,pe.setFromMatrixPosition(_.matrixWorld)),be.logarithmicDepthBuffer&&QA.setValue(I,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&QA.setValue(I,"isOrthographic",_.isOrthographicCamera===!0),K!==_&&(K=_,Ri=!0,ca=!0)}if(P.isSkinnedMesh){QA.setOptional(I,P,"bindMatrix"),QA.setOptional(I,P,"bindMatrixInverse");const $A=P.skeleton;$A&&(be.floatVertexTextures?($A.boneTexture===null&&$A.computeBoneTexture(),QA.setValue(I,"boneTexture",$A.boneTexture,x)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}P.isBatchedMesh&&(QA.setOptional(I,P,"batchingTexture"),QA.setValue(I,"batchingTexture",P._matricesTexture,x));const ua=N.morphAttributes;if((ua.position!==void 0||ua.normal!==void 0||ua.color!==void 0&&be.isWebGL2===!0)&&Ge.update(P,N,hn),(Ri||Ke.receiveShadow!==P.receiveShadow)&&(Ke.receiveShadow=P.receiveShadow,QA.setValue(I,"receiveShadow",P.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(fn.envMap.value=Qe,fn.flipEnvMap.value=Qe.isCubeTexture&&Qe.isRenderTargetTexture===!1?-1:1),Ri&&(QA.setValue(I,"toneMappingExposure",v.toneMappingExposure),Ke.needsLights&&Wf(fn,ca),fe&&V.fog===!0&&ae.refreshFogUniforms(fn,fe),ae.refreshMaterialUniforms(fn,V,X,R,ce),Cs.upload(I,Bl(Ke),fn,x)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Cs.upload(I,Bl(Ke),fn,x),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&QA.setValue(I,"center",P.center),QA.setValue(I,"modelViewMatrix",P.modelViewMatrix),QA.setValue(I,"normalMatrix",P.normalMatrix),QA.setValue(I,"modelMatrix",P.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const $A=V.uniformsGroups;for(let ha=0,Yf=$A.length;ha<Yf;ha++)if(be.isWebGL2){const _l=$A[ha];F.update(_l,hn),F.bind(_l,hn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return hn}function Wf(_,L){_.ambientLightColor.needsUpdate=L,_.lightProbe.needsUpdate=L,_.directionalLights.needsUpdate=L,_.directionalLightShadows.needsUpdate=L,_.pointLights.needsUpdate=L,_.pointLightShadows.needsUpdate=L,_.spotLights.needsUpdate=L,_.spotLightShadows.needsUpdate=L,_.rectAreaLights.needsUpdate=L,_.hemisphereLights.needsUpdate=L}function Xf(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(_,L,N){Re.get(_.texture).__webglTexture=L,Re.get(_.depthTexture).__webglTexture=N;const V=Re.get(_);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=N===void 0,V.__autoAllocateDepthBuffer||Ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(_,L){const N=Re.get(_);N.__webglFramebuffer=L,N.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(_,L=0,N=0){y=_,b=L,U=N;let V=!0,P=null,fe=!1,Ce=!1;if(_){const Qe=Re.get(_);Qe.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(I.FRAMEBUFFER,null),V=!1):Qe.__webglFramebuffer===void 0?x.setupRenderTarget(_):Qe.__hasExternalTextures&&x.rebindTextures(_,Re.get(_.texture).__webglTexture,Re.get(_.depthTexture).__webglTexture);const Ve=_.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ce=!0);const He=Re.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(He[L])?P=He[L][N]:P=He[L],fe=!0):be.isWebGL2&&_.samples>0&&x.useMultisampledRTT(_)===!1?P=Re.get(_).__webglMultisampledFramebuffer:Array.isArray(He)?P=He[N]:P=He,B.copy(_.viewport),M.copy(_.scissor),k=_.scissorTest}else B.copy(J).multiplyScalar(X).floor(),M.copy(ee).multiplyScalar(X).floor(),k=re;if(_e.bindFramebuffer(I.FRAMEBUFFER,P)&&be.drawBuffers&&V&&_e.drawBuffers(_,P),_e.viewport(B),_e.scissor(M),_e.setScissorTest(k),fe){const Qe=Re.get(_.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+L,Qe.__webglTexture,N)}else if(Ce){const Qe=Re.get(_.texture),Ve=L||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Qe.__webglTexture,N||0,Ve)}H=-1},this.readRenderTargetPixels=function(_,L,N,V,P,fe,Ce){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Re.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&Ce!==void 0&&(Fe=Fe[Ce]),Fe){_e.bindFramebuffer(I.FRAMEBUFFER,Fe);try{const Qe=_.texture,Ve=Qe.format,He=Qe.type;if(Ve!==ut&&he.convert(Ve)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ne=He===cr&&(Ue.has("EXT_color_buffer_half_float")||be.isWebGL2&&Ue.has("EXT_color_buffer_float"));if(He!==rn&&he.convert(He)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(He===It&&(be.isWebGL2||Ue.has("OES_texture_float")||Ue.has("WEBGL_color_buffer_float")))&&!Ne){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=_.width-V&&N>=0&&N<=_.height-P&&I.readPixels(L,N,V,P,he.convert(Ve),he.convert(He),fe)}finally{const Qe=y!==null?Re.get(y).__webglFramebuffer:null;_e.bindFramebuffer(I.FRAMEBUFFER,Qe)}}},this.copyFramebufferToTexture=function(_,L,N=0){const V=Math.pow(2,-N),P=Math.floor(L.image.width*V),fe=Math.floor(L.image.height*V);x.setTexture2D(L,0),I.copyTexSubImage2D(I.TEXTURE_2D,N,0,0,_.x,_.y,P,fe),_e.unbindTexture()},this.copyTextureToTexture=function(_,L,N,V=0){const P=L.image.width,fe=L.image.height,Ce=he.convert(N.format),Fe=he.convert(N.type);x.setTexture2D(N,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment),L.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,V,_.x,_.y,P,fe,Ce,Fe,L.image.data):L.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,V,_.x,_.y,L.mipmaps[0].width,L.mipmaps[0].height,Ce,L.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,V,_.x,_.y,Ce,Fe,L.image),V===0&&N.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),_e.unbindTexture()},this.copyTextureToTexture3D=function(_,L,N,V,P=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const fe=_.max.x-_.min.x+1,Ce=_.max.y-_.min.y+1,Fe=_.max.z-_.min.z+1,Qe=he.convert(V.format),Ve=he.convert(V.type);let He;if(V.isData3DTexture)x.setTexture3D(V,0),He=I.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)x.setTexture2DArray(V,0),He=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,V.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,V.unpackAlignment);const Ne=I.getParameter(I.UNPACK_ROW_LENGTH),fA=I.getParameter(I.UNPACK_IMAGE_HEIGHT),XA=I.getParameter(I.UNPACK_SKIP_PIXELS),CA=I.getParameter(I.UNPACK_SKIP_ROWS),Et=I.getParameter(I.UNPACK_SKIP_IMAGES),cA=N.isCompressedTexture?N.mipmaps[P]:N.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,cA.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,cA.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,_.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,_.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,_.min.z),N.isDataTexture||N.isData3DTexture?I.texSubImage3D(He,P,L.x,L.y,L.z,fe,Ce,Fe,Qe,Ve,cA.data):N.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(He,P,L.x,L.y,L.z,fe,Ce,Fe,Qe,cA.data)):I.texSubImage3D(He,P,L.x,L.y,L.z,fe,Ce,Fe,Qe,Ve,cA),I.pixelStorei(I.UNPACK_ROW_LENGTH,Ne),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,fA),I.pixelStorei(I.UNPACK_SKIP_PIXELS,XA),I.pixelStorei(I.UNPACK_SKIP_ROWS,CA),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Et),P===0&&V.generateMipmaps&&I.generateMipmap(He),_e.unbindTexture()},this.initTexture=function(_){_.isCubeTexture?x.setTextureCube(_,0):_.isData3DTexture?x.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?x.setTexture2DArray(_,0):x.setTexture2D(_,0),_e.unbindTexture()},this.resetState=function(){b=0,U=0,y=null,_e.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const A=this.getContext();A.drawingBufferColorSpace=e===el?"display-p3":"srgb",A.unpackColorSpace=eA.workingColorSpace===Xs?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===FA?Qn:oh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Qn?FA:Ht}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class B1 extends bh{}B1.prototype.isWebGL1Renderer=!0;class w1 extends qA{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,A){return super.copy(e,A),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const A=super.toJSON(e);return this.fog!==null&&(A.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(A.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(A.object.backgroundIntensity=this.backgroundIntensity),A}}class v1{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,A){const t=this.getUtoTmapping(e);return this.getPoint(t,A)}getPoints(e=5){const A=[];for(let t=0;t<=e;t++)A.push(this.getPoint(t/e));return A}getSpacedPoints(e=5){const A=[];for(let t=0;t<=e;t++)A.push(this.getPointAt(t/e));return A}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const A=[];let t,i=this.getPoint(0),r=0;A.push(0);for(let s=1;s<=e;s++)t=this.getPoint(s/e),r+=t.distanceTo(i),A.push(r),i=t;return this.cacheArcLengths=A,A}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,A){const t=this.getLengths();let i=0;const r=t.length;let s;A?s=A:s=e*t[r-1];let a=0,o=r-1,l;for(;a<=o;)if(i=Math.floor(a+(o-a)/2),l=t[i]-s,l<0)a=i+1;else if(l>0)o=i-1;else{o=i;break}if(i=o,t[i]===s)return i/(r-1);const c=t[i],h=t[i+1]-c,p=(s-c)/h;return(i+p)/(r-1)}getTangent(e,A){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const s=this.getPoint(i),a=this.getPoint(r),o=A||(s.isVector2?new Ie:new Q);return o.copy(a).sub(s).normalize(),o}getTangentAt(e,A){const t=this.getUtoTmapping(e);return this.getTangent(t,A)}computeFrenetFrames(e,A){const t=new Q,i=[],r=[],s=[],a=new Q,o=new yA;for(let p=0;p<=e;p++){const g=p/e;i[p]=this.getTangentAt(g,new Q)}r[0]=new Q,s[0]=new Q;let l=Number.MAX_VALUE;const c=Math.abs(i[0].x),u=Math.abs(i[0].y),h=Math.abs(i[0].z);c<=l&&(l=c,t.set(1,0,0)),u<=l&&(l=u,t.set(0,1,0)),h<=l&&t.set(0,0,1),a.crossVectors(i[0],t).normalize(),r[0].crossVectors(i[0],a),s[0].crossVectors(i[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),s[p]=s[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(UA(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(o.makeRotationAxis(a,g))}s[p].crossVectors(i[p],r[p])}if(A===!0){let p=Math.acos(UA(r[0].dot(r[e]),-1,1));p/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(o.makeRotationAxis(i[g],p*g)),s[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class zc{constructor(e=1,A=0,t=0){return this.radius=e,this.phi=A,this.theta=t,this}set(e,A,t){return this.radius=e,this.phi=A,this.theta=t,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,A,t){return this.radius=Math.sqrt(e*e+A*A+t*t),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,t),this.phi=Math.acos(UA(A/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$o}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$o);/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */class vt{constructor(e,A,t,i,r="div"){this.parent=e,this.object=A,this.property=t,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),vt.nextNameID=vt.nextNameID||0,this.$name.id="lil-gui-name-"+ ++vt.nextNameID,this.$widget=document.createElement(r),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(t)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled||(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e)),this}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const A=this.parent.add(this.object,this.property,e);return A.name(this._name),this.destroy(),A}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}let _1=class extends vt{constructor(e,A,t){super(e,A,t,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}};function So(n){let e,A;return(e=n.match(/(#|0x)?([a-f0-9]{6})/i))?A=e[2]:(e=n.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?A=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=n.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(A=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),!!A&&"#"+A}const C1={isPrimitive:!0,match:n=>typeof n=="string",fromHexString:So,toHexString:So},hr={isPrimitive:!0,match:n=>typeof n=="number",fromHexString:n=>parseInt(n.substring(1),16),toHexString:n=>"#"+n.toString(16).padStart(6,0)},E1={isPrimitive:!1,match:Array.isArray,fromHexString(n,e,A=1){const t=hr.fromHexString(n);e[0]=(t>>16&255)/255*A,e[1]=(t>>8&255)/255*A,e[2]=(255&t)/255*A},toHexString:([n,e,A],t=1)=>hr.toHexString(n*(t=255/t)<<16^e*t<<8^A*t<<0)},x1={isPrimitive:!1,match:n=>Object(n)===n,fromHexString(n,e,A=1){const t=hr.fromHexString(n);e.r=(t>>16&255)/255*A,e.g=(t>>8&255)/255*A,e.b=(255&t)/255*A},toHexString:({r:n,g:e,b:A},t=1)=>hr.toHexString(n*(t=255/t)<<16^e*t<<8^A*t<<0)},U1=[C1,hr,E1,x1];let y1=class extends vt{constructor(e,A,t,i){var r;super(e,A,t,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(r=this.initialValue,U1.find(s=>s.match(r))),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=So(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const A=this._format.fromHexString(e);this.setValue(A)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}};class Ka extends vt{constructor(e,A,t){super(e,A,t,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class S1 extends vt{constructor(e,A,t,i,r,s){super(e,A,t,"number"),this._initInput(),this.min(i),this.max(r);const a=s!==void 0;this.step(a?s:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,A=!0){return this._step=e,this._stepExplicit=A,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let A=(e-this._min)/(this._max-this._min);A=Math.max(0,Math.min(A,1)),this.$fill.style.width=100*A+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=c=>{const u=parseFloat(this.$input.value);isNaN(u)||(this._snapClampSetValue(u+c),this.$input.value=this.getValue())};let A,t,i,r,s,a=!1;const o=c=>{if(a){const u=c.clientX-A,h=c.clientY-t;Math.abs(h)>5?(c.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(u)>5&&l()}if(!a){const u=c.clientY-i;s-=u*this._step*this._arrowKeyMultiplier(c),r+s>this._max?s=this._max-r:r+s<this._min&&(s=this._min-r),this._snapClampSetValue(r+s)}i=c.clientY},l=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",o),window.removeEventListener("mouseup",l)};this.$input.addEventListener("input",()=>{let c=parseFloat(this.$input.value);isNaN(c)||(this._stepExplicit&&(c=this._snap(c)),this.setValue(this._clamp(c)))}),this.$input.addEventListener("keydown",c=>{c.code==="Enter"&&this.$input.blur(),c.code==="ArrowUp"&&(c.preventDefault(),e(this._step*this._arrowKeyMultiplier(c))),c.code==="ArrowDown"&&(c.preventDefault(),e(this._step*this._arrowKeyMultiplier(c)*-1))}),this.$input.addEventListener("wheel",c=>{this._inputFocused&&(c.preventDefault(),e(this._step*this._normalizeMouseWheel(c)))},{passive:!1}),this.$input.addEventListener("mousedown",c=>{A=c.clientX,t=i=c.clientY,a=!0,r=this.getValue(),s=0,window.addEventListener("mousemove",o),window.addEventListener("mouseup",l)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=h=>{const p=this.$slider.getBoundingClientRect();let g=(m=h,d=p.left,f=p.right,C=this._min,v=this._max,(m-d)/(f-d)*(v-C)+C);var m,d,f,C,v;this._snapClampSetValue(g)},A=h=>{e(h.clientX)},t=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",A),window.removeEventListener("mouseup",t)};let i,r,s=!1;const a=h=>{h.preventDefault(),this._setDraggingStyle(!0),e(h.touches[0].clientX),s=!1},o=h=>{if(s){const p=h.touches[0].clientX-i,g=h.touches[0].clientY-r;Math.abs(p)>Math.abs(g)?a(h):(window.removeEventListener("touchmove",o),window.removeEventListener("touchend",l))}else h.preventDefault(),e(h.touches[0].clientX)},l=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",o),window.removeEventListener("touchend",l)},c=this._callOnFinishChange.bind(this);let u;this.$slider.addEventListener("mousedown",h=>{this._setDraggingStyle(!0),e(h.clientX),window.addEventListener("mousemove",A),window.addEventListener("mouseup",t)}),this.$slider.addEventListener("touchstart",h=>{h.touches.length>1||(this._hasScrollBar?(i=h.touches[0].clientX,r=h.touches[0].clientY,s=!0):a(h),window.addEventListener("touchmove",o,{passive:!1}),window.addEventListener("touchend",l))},{passive:!1}),this.$slider.addEventListener("wheel",h=>{if(Math.abs(h.deltaX)<Math.abs(h.deltaY)&&this._hasScrollBar)return;h.preventDefault();const p=this._normalizeMouseWheel(h)*this._step;this._snapClampSetValue(this.getValue()+p),this.$input.value=this.getValue(),clearTimeout(u),u=setTimeout(c,400)},{passive:!1})}_setDraggingStyle(e,A="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle("lil-gui-"+A,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:A,deltaY:t}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(A=0,t=-e.wheelDelta/120,t*=this._stepExplicit?1:10),A+-t}_arrowKeyMultiplier(e){let A=this._stepExplicit?1:10;return e.shiftKey?A*=10:e.altKey&&(A/=10),A}_snap(e){const A=Math.round(e/this._step)*this._step;return parseFloat(A.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class M1 extends vt{constructor(e,A,t,i){super(e,A,t,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(i)?i:Object.values(i),this._names=Array.isArray(i)?i:Object.keys(i),this._names.forEach(r=>{const s=document.createElement("option");s.innerHTML=r,this.$select.appendChild(s)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),A=this._values.indexOf(e);return this.$select.selectedIndex=A,this.$display.innerHTML=A===-1?e:this._names[A],this}}let F1=class extends vt{constructor(e,A,t){super(e,A,t,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}},Wc=!1;class rl{constructor({parent:e,autoPlace:A=e===void 0,container:t,width:i,title:r="Controls",injectStyles:s=!0,touchStyles:a=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",o=>{o.code!=="Enter"&&o.code!=="Space"||(o.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),a&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!Wc&&s&&(function(o){const l=document.createElement("style");l.innerHTML=o;const c=document.querySelector("head link[rel=stylesheet], head style");c?document.head.insertBefore(l,c):document.head.appendChild(l)}('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"↕";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"▾";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"▸"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"✓";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),Wc=!0),t?t.appendChild(this.domElement):A&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation())}add(e,A,t,i,r){if(Object(t)===t)return new M1(this,e,A,t);const s=e[A];switch(typeof s){case"number":return new S1(this,e,A,t,i,r);case"boolean":return new _1(this,e,A);case"string":return new F1(this,e,A);case"function":return new Ka(this,e,A)}console.error(`gui.add failed
	property:`,A,`
	object:`,e,`
	value:`,s)}addColor(e,A,t=1){return new y1(this,e,A,t)}addFolder(e){return new rl({parent:this,title:e})}load(e,A=!0){return e.controllers&&this.controllers.forEach(t=>{t instanceof Ka||t._name in e.controllers&&t.load(e.controllers[t._name])}),A&&e.folders&&this.folders.forEach(t=>{t._title in e.folders&&t.load(e.folders[t._title])}),this}save(e=!0){const A={controllers:{},folders:{}};return this.controllers.forEach(t=>{if(!(t instanceof Ka)){if(t._name in A.controllers)throw new Error(`Cannot save GUI with duplicate property "${t._name}"`);A.controllers[t._name]=t.save()}}),e&&this.folders.forEach(t=>{if(t._title in A.folders)throw new Error(`Cannot save GUI with duplicate folder "${t._title}"`);A.folders[t._title]=t.save()}),A}open(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const A=this.$children.clientHeight;this.$children.style.height=A+"px",this.domElement.classList.add("transition");const t=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",t))};this.$children.addEventListener("transitionend",t);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(A=>A.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(A=>{e=e.concat(A.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(A=>{e=e.concat(A.foldersRecursive())}),e}}const b1="modulepreload",T1=function(n){return"/climate-helix/"+n},Xc={},Q1=function(e,A,t){let i=Promise.resolve();if(A&&A.length>0){const r=document.getElementsByTagName("link");i=Promise.all(A.map(s=>{if(s=T1(s),s in Xc)return;Xc[s]=!0;const a=s.endsWith(".css"),o=a?'[rel="stylesheet"]':"";if(!!t)for(let u=r.length-1;u>=0;u--){const h=r[u];if(h.href===s&&(!a||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${o}`))return;const c=document.createElement("link");if(c.rel=a?"stylesheet":b1,a||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),a)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})}))}return i.then(()=>e()).catch(r=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=r,window.dispatchEvent(s),!s.defaultPrevented)throw r})};/*!
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
***************************************************************************** */var Mo=function(n,e){return Mo=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(A,t){A.__proto__=t}||function(A,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(A[i]=t[i])},Mo(n,e)};function dt(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Mo(n,e);function A(){this.constructor=n}n.prototype=e===null?Object.create(e):(A.prototype=e.prototype,new A)}var Fo=function(){return Fo=Object.assign||function(e){for(var A,t=1,i=arguments.length;t<i;t++){A=arguments[t];for(var r in A)Object.prototype.hasOwnProperty.call(A,r)&&(e[r]=A[r])}return e},Fo.apply(this,arguments)};function GA(n,e,A,t){function i(r){return r instanceof A?r:new A(function(s){s(r)})}return new(A||(A=Promise))(function(r,s){function a(c){try{l(t.next(c))}catch(u){s(u)}}function o(c){try{l(t.throw(c))}catch(u){s(u)}}function l(c){c.done?r(c.value):i(c.value).then(a,o)}l((t=t.apply(n,e||[])).next())})}function RA(n,e){var A={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},t,i,r,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(l){return function(c){return o([l,c])}}function o(l){if(t)throw new TypeError("Generator is already executing.");for(;A;)try{if(t=1,i&&(r=l[0]&2?i.return:l[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,l[1])).done)return r;switch(i=0,r&&(l=[l[0]&2,r.value]),l[0]){case 0:case 1:r=l;break;case 4:return A.label++,{value:l[1],done:!1};case 5:A.label++,i=l[1],l=[0];continue;case 7:l=A.ops.pop(),A.trys.pop();continue;default:if(r=A.trys,!(r=r.length>0&&r[r.length-1])&&(l[0]===6||l[0]===2)){A=0;continue}if(l[0]===3&&(!r||l[1]>r[0]&&l[1]<r[3])){A.label=l[1];break}if(l[0]===6&&A.label<r[1]){A.label=r[1],r=l;break}if(r&&A.label<r[2]){A.label=r[2],A.ops.push(l);break}r[2]&&A.ops.pop(),A.trys.pop();continue}l=e.call(n,A)}catch(c){l=[6,c],i=0}finally{t=r=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function Zr(n,e,A){if(A||arguments.length===2)for(var t=0,i=e.length,r;t<i;t++)(r||!(t in e))&&(r||(r=Array.prototype.slice.call(e,0,t)),r[t]=e[t]);return n.concat(r||e)}var Pt=function(){function n(e,A,t,i){this.left=e,this.top=A,this.width=t,this.height=i}return n.prototype.add=function(e,A,t,i){return new n(this.left+e,this.top+A,this.width+t,this.height+i)},n.fromClientRect=function(e,A){return new n(A.left+e.windowBounds.left,A.top+e.windowBounds.top,A.width,A.height)},n.fromDOMRectList=function(e,A){var t=Array.from(A).find(function(i){return i.width!==0});return t?new n(t.left+e.windowBounds.left,t.top+e.windowBounds.top,t.width,t.height):n.EMPTY},n.EMPTY=new n(0,0,0,0),n}(),$s=function(n,e){return Pt.fromClientRect(n,e.getBoundingClientRect())},L1=function(n){var e=n.body,A=n.documentElement;if(!e||!A)throw new Error("Unable to get document size");var t=Math.max(Math.max(e.scrollWidth,A.scrollWidth),Math.max(e.offsetWidth,A.offsetWidth),Math.max(e.clientWidth,A.clientWidth)),i=Math.max(Math.max(e.scrollHeight,A.scrollHeight),Math.max(e.offsetHeight,A.offsetHeight),Math.max(e.clientHeight,A.clientHeight));return new Pt(0,0,t,i)},js=function(n){for(var e=[],A=0,t=n.length;A<t;){var i=n.charCodeAt(A++);if(i>=55296&&i<=56319&&A<t){var r=n.charCodeAt(A++);(r&64512)===56320?e.push(((i&1023)<<10)+(r&1023)+65536):(e.push(i),A--)}else e.push(i)}return e},pA=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];if(String.fromCodePoint)return String.fromCodePoint.apply(String,n);var A=n.length;if(!A)return"";for(var t=[],i=-1,r="";++i<A;){var s=n[i];s<=65535?t.push(s):(s-=65536,t.push((s>>10)+55296,s%1024+56320)),(i+1===A||t.length>16384)&&(r+=String.fromCharCode.apply(String,t),t.length=0)}return r},Yc="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",I1=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var qr=0;qr<Yc.length;qr++)I1[Yc.charCodeAt(qr)]=qr;var Jc="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Wi=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var $r=0;$r<Jc.length;$r++)Wi[Jc.charCodeAt($r)]=$r;var R1=function(n){var e=n.length*.75,A=n.length,t,i=0,r,s,a,o;n[n.length-1]==="="&&(e--,n[n.length-2]==="="&&e--);var l=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(e):new Array(e),c=Array.isArray(l)?l:new Uint8Array(l);for(t=0;t<A;t+=4)r=Wi[n.charCodeAt(t)],s=Wi[n.charCodeAt(t+1)],a=Wi[n.charCodeAt(t+2)],o=Wi[n.charCodeAt(t+3)],c[i++]=r<<2|s>>4,c[i++]=(s&15)<<4|a>>2,c[i++]=(a&3)<<6|o&63;return l},D1=function(n){for(var e=n.length,A=[],t=0;t<e;t+=2)A.push(n[t+1]<<8|n[t]);return A},H1=function(n){for(var e=n.length,A=[],t=0;t<e;t+=4)A.push(n[t+3]<<24|n[t+2]<<16|n[t+1]<<8|n[t]);return A},Ln=5,sl=11,ka=2,P1=sl-Ln,Th=65536>>Ln,N1=1<<Ln,za=N1-1,O1=1024>>Ln,G1=Th+O1,V1=G1,K1=32,k1=V1+K1,z1=65536>>sl,W1=1<<P1,X1=W1-1,Zc=function(n,e,A){return n.slice?n.slice(e,A):new Uint16Array(Array.prototype.slice.call(n,e,A))},Y1=function(n,e,A){return n.slice?n.slice(e,A):new Uint32Array(Array.prototype.slice.call(n,e,A))},J1=function(n,e){var A=R1(n),t=Array.isArray(A)?H1(A):new Uint32Array(A),i=Array.isArray(A)?D1(A):new Uint16Array(A),r=24,s=Zc(i,r/2,t[4]/2),a=t[5]===2?Zc(i,(r+t[4])/2):Y1(t,Math.ceil((r+t[4])/4));return new Z1(t[0],t[1],t[2],t[3],s,a)},Z1=function(){function n(e,A,t,i,r,s){this.initialValue=e,this.errorValue=A,this.highStart=t,this.highValueIndex=i,this.index=r,this.data=s}return n.prototype.get=function(e){var A;if(e>=0){if(e<55296||e>56319&&e<=65535)return A=this.index[e>>Ln],A=(A<<ka)+(e&za),this.data[A];if(e<=65535)return A=this.index[Th+(e-55296>>Ln)],A=(A<<ka)+(e&za),this.data[A];if(e<this.highStart)return A=k1-z1+(e>>sl),A=this.index[A],A+=e>>Ln&X1,A=this.index[A],A=(A<<ka)+(e&za),this.data[A];if(e<=1114111)return this.data[this.highValueIndex]}return this.errorValue},n}(),qc="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",q1=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var jr=0;jr<qc.length;jr++)q1[qc.charCodeAt(jr)]=jr;var $1="KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==",$c=50,j1=1,Qh=2,Lh=3,ew=4,Aw=5,jc=7,Ih=8,eu=9,jt=10,bo=11,Au=12,To=13,tw=14,Xi=15,Qo=16,es=17,Gi=18,nw=19,tu=20,Lo=21,Vi=22,Wa=23,ti=24,ZA=25,Yi=26,Ji=27,ni=28,iw=29,Cn=30,rw=31,As=32,ts=33,Io=34,Ro=35,Do=36,fr=37,Ho=38,Es=39,xs=40,Xa=41,Rh=42,sw=43,aw=[9001,65288],Dh="!",We="×",ns="÷",Po=J1($1),Ft=[Cn,Do],No=[j1,Qh,Lh,Aw],Hh=[jt,Ih],nu=[Ji,Yi],ow=No.concat(Hh),iu=[Ho,Es,xs,Io,Ro],lw=[Xi,To],cw=function(n,e){e===void 0&&(e="strict");var A=[],t=[],i=[];return n.forEach(function(r,s){var a=Po.get(r);if(a>$c?(i.push(!0),a-=$c):i.push(!1),["normal","auto","loose"].indexOf(e)!==-1&&[8208,8211,12316,12448].indexOf(r)!==-1)return t.push(s),A.push(Qo);if(a===ew||a===bo){if(s===0)return t.push(s),A.push(Cn);var o=A[s-1];return ow.indexOf(o)===-1?(t.push(t[s-1]),A.push(o)):(t.push(s),A.push(Cn))}if(t.push(s),a===rw)return A.push(e==="strict"?Lo:fr);if(a===Rh||a===iw)return A.push(Cn);if(a===sw)return r>=131072&&r<=196605||r>=196608&&r<=262141?A.push(fr):A.push(Cn);A.push(a)}),[t,A,i]},Ya=function(n,e,A,t){var i=t[A];if(Array.isArray(n)?n.indexOf(i)!==-1:n===i)for(var r=A;r<=t.length;){r++;var s=t[r];if(s===e)return!0;if(s!==jt)break}if(i===jt)for(var r=A;r>0;){r--;var a=t[r];if(Array.isArray(n)?n.indexOf(a)!==-1:n===a)for(var o=A;o<=t.length;){o++;var s=t[o];if(s===e)return!0;if(s!==jt)break}if(a!==jt)break}return!1},ru=function(n,e){for(var A=n;A>=0;){var t=e[A];if(t===jt)A--;else return t}return 0},uw=function(n,e,A,t,i){if(A[t]===0)return We;var r=t-1;if(Array.isArray(i)&&i[r]===!0)return We;var s=r-1,a=r+1,o=e[r],l=s>=0?e[s]:0,c=e[a];if(o===Qh&&c===Lh)return We;if(No.indexOf(o)!==-1)return Dh;if(No.indexOf(c)!==-1||Hh.indexOf(c)!==-1)return We;if(ru(r,e)===Ih)return ns;if(Po.get(n[r])===bo||(o===As||o===ts)&&Po.get(n[a])===bo||o===jc||c===jc||o===eu||[jt,To,Xi].indexOf(o)===-1&&c===eu||[es,Gi,nw,ti,ni].indexOf(c)!==-1||ru(r,e)===Vi||Ya(Wa,Vi,r,e)||Ya([es,Gi],Lo,r,e)||Ya(Au,Au,r,e))return We;if(o===jt)return ns;if(o===Wa||c===Wa)return We;if(c===Qo||o===Qo)return ns;if([To,Xi,Lo].indexOf(c)!==-1||o===tw||l===Do&&lw.indexOf(o)!==-1||o===ni&&c===Do||c===tu||Ft.indexOf(c)!==-1&&o===ZA||Ft.indexOf(o)!==-1&&c===ZA||o===Ji&&[fr,As,ts].indexOf(c)!==-1||[fr,As,ts].indexOf(o)!==-1&&c===Yi||Ft.indexOf(o)!==-1&&nu.indexOf(c)!==-1||nu.indexOf(o)!==-1&&Ft.indexOf(c)!==-1||[Ji,Yi].indexOf(o)!==-1&&(c===ZA||[Vi,Xi].indexOf(c)!==-1&&e[a+1]===ZA)||[Vi,Xi].indexOf(o)!==-1&&c===ZA||o===ZA&&[ZA,ni,ti].indexOf(c)!==-1)return We;if([ZA,ni,ti,es,Gi].indexOf(c)!==-1)for(var u=r;u>=0;){var h=e[u];if(h===ZA)return We;if([ni,ti].indexOf(h)!==-1)u--;else break}if([Ji,Yi].indexOf(c)!==-1)for(var u=[es,Gi].indexOf(o)!==-1?s:r;u>=0;){var h=e[u];if(h===ZA)return We;if([ni,ti].indexOf(h)!==-1)u--;else break}if(Ho===o&&[Ho,Es,Io,Ro].indexOf(c)!==-1||[Es,Io].indexOf(o)!==-1&&[Es,xs].indexOf(c)!==-1||[xs,Ro].indexOf(o)!==-1&&c===xs||iu.indexOf(o)!==-1&&[tu,Yi].indexOf(c)!==-1||iu.indexOf(c)!==-1&&o===Ji||Ft.indexOf(o)!==-1&&Ft.indexOf(c)!==-1||o===ti&&Ft.indexOf(c)!==-1||Ft.concat(ZA).indexOf(o)!==-1&&c===Vi&&aw.indexOf(n[a])===-1||Ft.concat(ZA).indexOf(c)!==-1&&o===Gi)return We;if(o===Xa&&c===Xa){for(var p=A[r],g=1;p>0&&(p--,e[p]===Xa);)g++;if(g%2!==0)return We}return o===As&&c===ts?We:ns},hw=function(n,e){e||(e={lineBreak:"normal",wordBreak:"normal"});var A=cw(n,e.lineBreak),t=A[0],i=A[1],r=A[2];(e.wordBreak==="break-all"||e.wordBreak==="break-word")&&(i=i.map(function(a){return[ZA,Cn,Rh].indexOf(a)!==-1?fr:a}));var s=e.wordBreak==="keep-all"?r.map(function(a,o){return a&&n[o]>=19968&&n[o]<=40959}):void 0;return[t,i,s]},fw=function(){function n(e,A,t,i){this.codePoints=e,this.required=A===Dh,this.start=t,this.end=i}return n.prototype.slice=function(){return pA.apply(void 0,this.codePoints.slice(this.start,this.end))},n}(),dw=function(n,e){var A=js(n),t=hw(A,e),i=t[0],r=t[1],s=t[2],a=A.length,o=0,l=0;return{next:function(){if(l>=a)return{done:!0,value:null};for(var c=We;l<a&&(c=uw(A,r,i,++l,s))===We;);if(c!==We||l===a){var u=new fw(A,c,o,l);return o=l,{value:u,done:!1}}return{done:!0,value:null}}}},pw=1,gw=2,Ur=4,su=8,Is=10,au=47,tr=92,mw=9,Bw=32,is=34,Ki=61,ww=35,vw=36,_w=37,rs=39,ss=40,ki=41,Cw=95,kA=45,Ew=33,xw=60,Uw=62,yw=64,Sw=91,Mw=93,Fw=61,bw=123,as=63,Tw=125,ou=124,Qw=126,Lw=128,lu=65533,Ja=42,xn=43,Iw=44,Rw=58,Dw=59,dr=46,Hw=0,Pw=8,Nw=11,Ow=14,Gw=31,Vw=127,pt=-1,Ph=48,Nh=97,Oh=101,Kw=102,kw=117,zw=122,Gh=65,Vh=69,Kh=70,Ww=85,Xw=90,DA=function(n){return n>=Ph&&n<=57},Yw=function(n){return n>=55296&&n<=57343},ii=function(n){return DA(n)||n>=Gh&&n<=Kh||n>=Nh&&n<=Kw},Jw=function(n){return n>=Nh&&n<=zw},Zw=function(n){return n>=Gh&&n<=Xw},qw=function(n){return Jw(n)||Zw(n)},$w=function(n){return n>=Lw},os=function(n){return n===Is||n===mw||n===Bw},Rs=function(n){return qw(n)||$w(n)||n===Cw},cu=function(n){return Rs(n)||DA(n)||n===kA},jw=function(n){return n>=Hw&&n<=Pw||n===Nw||n>=Ow&&n<=Gw||n===Vw},Yt=function(n,e){return n!==tr?!1:e!==Is},ls=function(n,e,A){return n===kA?Rs(e)||Yt(e,A):Rs(n)?!0:!!(n===tr&&Yt(n,e))},Za=function(n,e,A){return n===xn||n===kA?DA(e)?!0:e===dr&&DA(A):DA(n===dr?e:n)},ev=function(n){var e=0,A=1;(n[e]===xn||n[e]===kA)&&(n[e]===kA&&(A=-1),e++);for(var t=[];DA(n[e]);)t.push(n[e++]);var i=t.length?parseInt(pA.apply(void 0,t),10):0;n[e]===dr&&e++;for(var r=[];DA(n[e]);)r.push(n[e++]);var s=r.length,a=s?parseInt(pA.apply(void 0,r),10):0;(n[e]===Vh||n[e]===Oh)&&e++;var o=1;(n[e]===xn||n[e]===kA)&&(n[e]===kA&&(o=-1),e++);for(var l=[];DA(n[e]);)l.push(n[e++]);var c=l.length?parseInt(pA.apply(void 0,l),10):0;return A*(i+a*Math.pow(10,-s))*Math.pow(10,o*c)},Av={type:2},tv={type:3},nv={type:4},iv={type:13},rv={type:8},sv={type:21},av={type:9},ov={type:10},lv={type:11},cv={type:12},uv={type:14},cs={type:23},hv={type:1},fv={type:25},dv={type:24},pv={type:26},gv={type:27},mv={type:28},Bv={type:29},wv={type:31},Oo={type:32},kh=function(){function n(){this._value=[]}return n.prototype.write=function(e){this._value=this._value.concat(js(e))},n.prototype.read=function(){for(var e=[],A=this.consumeToken();A!==Oo;)e.push(A),A=this.consumeToken();return e},n.prototype.consumeToken=function(){var e=this.consumeCodePoint();switch(e){case is:return this.consumeStringToken(is);case ww:var A=this.peekCodePoint(0),t=this.peekCodePoint(1),i=this.peekCodePoint(2);if(cu(A)||Yt(t,i)){var r=ls(A,t,i)?gw:pw,s=this.consumeName();return{type:5,value:s,flags:r}}break;case vw:if(this.peekCodePoint(0)===Ki)return this.consumeCodePoint(),iv;break;case rs:return this.consumeStringToken(rs);case ss:return Av;case ki:return tv;case Ja:if(this.peekCodePoint(0)===Ki)return this.consumeCodePoint(),uv;break;case xn:if(Za(e,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(e),this.consumeNumericToken();break;case Iw:return nv;case kA:var a=e,o=this.peekCodePoint(0),l=this.peekCodePoint(1);if(Za(a,o,l))return this.reconsumeCodePoint(e),this.consumeNumericToken();if(ls(a,o,l))return this.reconsumeCodePoint(e),this.consumeIdentLikeToken();if(o===kA&&l===Uw)return this.consumeCodePoint(),this.consumeCodePoint(),dv;break;case dr:if(Za(e,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(e),this.consumeNumericToken();break;case au:if(this.peekCodePoint(0)===Ja)for(this.consumeCodePoint();;){var c=this.consumeCodePoint();if(c===Ja&&(c=this.consumeCodePoint(),c===au))return this.consumeToken();if(c===pt)return this.consumeToken()}break;case Rw:return pv;case Dw:return gv;case xw:if(this.peekCodePoint(0)===Ew&&this.peekCodePoint(1)===kA&&this.peekCodePoint(2)===kA)return this.consumeCodePoint(),this.consumeCodePoint(),fv;break;case yw:var u=this.peekCodePoint(0),h=this.peekCodePoint(1),p=this.peekCodePoint(2);if(ls(u,h,p)){var s=this.consumeName();return{type:7,value:s}}break;case Sw:return mv;case tr:if(Yt(e,this.peekCodePoint(0)))return this.reconsumeCodePoint(e),this.consumeIdentLikeToken();break;case Mw:return Bv;case Fw:if(this.peekCodePoint(0)===Ki)return this.consumeCodePoint(),rv;break;case bw:return lv;case Tw:return cv;case kw:case Ww:var g=this.peekCodePoint(0),m=this.peekCodePoint(1);return g===xn&&(ii(m)||m===as)&&(this.consumeCodePoint(),this.consumeUnicodeRangeToken()),this.reconsumeCodePoint(e),this.consumeIdentLikeToken();case ou:if(this.peekCodePoint(0)===Ki)return this.consumeCodePoint(),av;if(this.peekCodePoint(0)===ou)return this.consumeCodePoint(),sv;break;case Qw:if(this.peekCodePoint(0)===Ki)return this.consumeCodePoint(),ov;break;case pt:return Oo}return os(e)?(this.consumeWhiteSpace(),wv):DA(e)?(this.reconsumeCodePoint(e),this.consumeNumericToken()):Rs(e)?(this.reconsumeCodePoint(e),this.consumeIdentLikeToken()):{type:6,value:pA(e)}},n.prototype.consumeCodePoint=function(){var e=this._value.shift();return typeof e>"u"?-1:e},n.prototype.reconsumeCodePoint=function(e){this._value.unshift(e)},n.prototype.peekCodePoint=function(e){return e>=this._value.length?-1:this._value[e]},n.prototype.consumeUnicodeRangeToken=function(){for(var e=[],A=this.consumeCodePoint();ii(A)&&e.length<6;)e.push(A),A=this.consumeCodePoint();for(var t=!1;A===as&&e.length<6;)e.push(A),A=this.consumeCodePoint(),t=!0;if(t){var i=parseInt(pA.apply(void 0,e.map(function(o){return o===as?Ph:o})),16),r=parseInt(pA.apply(void 0,e.map(function(o){return o===as?Kh:o})),16);return{type:30,start:i,end:r}}var s=parseInt(pA.apply(void 0,e),16);if(this.peekCodePoint(0)===kA&&ii(this.peekCodePoint(1))){this.consumeCodePoint(),A=this.consumeCodePoint();for(var a=[];ii(A)&&a.length<6;)a.push(A),A=this.consumeCodePoint();var r=parseInt(pA.apply(void 0,a),16);return{type:30,start:s,end:r}}else return{type:30,start:s,end:s}},n.prototype.consumeIdentLikeToken=function(){var e=this.consumeName();return e.toLowerCase()==="url"&&this.peekCodePoint(0)===ss?(this.consumeCodePoint(),this.consumeUrlToken()):this.peekCodePoint(0)===ss?(this.consumeCodePoint(),{type:19,value:e}):{type:20,value:e}},n.prototype.consumeUrlToken=function(){var e=[];if(this.consumeWhiteSpace(),this.peekCodePoint(0)===pt)return{type:22,value:""};var A=this.peekCodePoint(0);if(A===rs||A===is){var t=this.consumeStringToken(this.consumeCodePoint());return t.type===0&&(this.consumeWhiteSpace(),this.peekCodePoint(0)===pt||this.peekCodePoint(0)===ki)?(this.consumeCodePoint(),{type:22,value:t.value}):(this.consumeBadUrlRemnants(),cs)}for(;;){var i=this.consumeCodePoint();if(i===pt||i===ki)return{type:22,value:pA.apply(void 0,e)};if(os(i))return this.consumeWhiteSpace(),this.peekCodePoint(0)===pt||this.peekCodePoint(0)===ki?(this.consumeCodePoint(),{type:22,value:pA.apply(void 0,e)}):(this.consumeBadUrlRemnants(),cs);if(i===is||i===rs||i===ss||jw(i))return this.consumeBadUrlRemnants(),cs;if(i===tr)if(Yt(i,this.peekCodePoint(0)))e.push(this.consumeEscapedCodePoint());else return this.consumeBadUrlRemnants(),cs;else e.push(i)}},n.prototype.consumeWhiteSpace=function(){for(;os(this.peekCodePoint(0));)this.consumeCodePoint()},n.prototype.consumeBadUrlRemnants=function(){for(;;){var e=this.consumeCodePoint();if(e===ki||e===pt)return;Yt(e,this.peekCodePoint(0))&&this.consumeEscapedCodePoint()}},n.prototype.consumeStringSlice=function(e){for(var A=5e4,t="";e>0;){var i=Math.min(A,e);t+=pA.apply(void 0,this._value.splice(0,i)),e-=i}return this._value.shift(),t},n.prototype.consumeStringToken=function(e){var A="",t=0;do{var i=this._value[t];if(i===pt||i===void 0||i===e)return A+=this.consumeStringSlice(t),{type:0,value:A};if(i===Is)return this._value.splice(0,t),hv;if(i===tr){var r=this._value[t+1];r!==pt&&r!==void 0&&(r===Is?(A+=this.consumeStringSlice(t),t=-1,this._value.shift()):Yt(i,r)&&(A+=this.consumeStringSlice(t),A+=pA(this.consumeEscapedCodePoint()),t=-1))}t++}while(!0)},n.prototype.consumeNumber=function(){var e=[],A=Ur,t=this.peekCodePoint(0);for((t===xn||t===kA)&&e.push(this.consumeCodePoint());DA(this.peekCodePoint(0));)e.push(this.consumeCodePoint());t=this.peekCodePoint(0);var i=this.peekCodePoint(1);if(t===dr&&DA(i))for(e.push(this.consumeCodePoint(),this.consumeCodePoint()),A=su;DA(this.peekCodePoint(0));)e.push(this.consumeCodePoint());t=this.peekCodePoint(0),i=this.peekCodePoint(1);var r=this.peekCodePoint(2);if((t===Vh||t===Oh)&&((i===xn||i===kA)&&DA(r)||DA(i)))for(e.push(this.consumeCodePoint(),this.consumeCodePoint()),A=su;DA(this.peekCodePoint(0));)e.push(this.consumeCodePoint());return[ev(e),A]},n.prototype.consumeNumericToken=function(){var e=this.consumeNumber(),A=e[0],t=e[1],i=this.peekCodePoint(0),r=this.peekCodePoint(1),s=this.peekCodePoint(2);if(ls(i,r,s)){var a=this.consumeName();return{type:15,number:A,flags:t,unit:a}}return i===_w?(this.consumeCodePoint(),{type:16,number:A,flags:t}):{type:17,number:A,flags:t}},n.prototype.consumeEscapedCodePoint=function(){var e=this.consumeCodePoint();if(ii(e)){for(var A=pA(e);ii(this.peekCodePoint(0))&&A.length<6;)A+=pA(this.consumeCodePoint());os(this.peekCodePoint(0))&&this.consumeCodePoint();var t=parseInt(A,16);return t===0||Yw(t)||t>1114111?lu:t}return e===pt?lu:e},n.prototype.consumeName=function(){for(var e="";;){var A=this.consumeCodePoint();if(cu(A))e+=pA(A);else if(Yt(A,this.peekCodePoint(0)))e+=pA(this.consumeEscapedCodePoint());else return this.reconsumeCodePoint(A),e}},n}(),zh=function(){function n(e){this._tokens=e}return n.create=function(e){var A=new kh;return A.write(e),new n(A.read())},n.parseValue=function(e){return n.create(e).parseComponentValue()},n.parseValues=function(e){return n.create(e).parseComponentValues()},n.prototype.parseComponentValue=function(){for(var e=this.consumeToken();e.type===31;)e=this.consumeToken();if(e.type===32)throw new SyntaxError("Error parsing CSS component value, unexpected EOF");this.reconsumeToken(e);var A=this.consumeComponentValue();do e=this.consumeToken();while(e.type===31);if(e.type===32)return A;throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one")},n.prototype.parseComponentValues=function(){for(var e=[];;){var A=this.consumeComponentValue();if(A.type===32)return e;e.push(A),e.push()}},n.prototype.consumeComponentValue=function(){var e=this.consumeToken();switch(e.type){case 11:case 28:case 2:return this.consumeSimpleBlock(e.type);case 19:return this.consumeFunction(e)}return e},n.prototype.consumeSimpleBlock=function(e){for(var A={type:e,values:[]},t=this.consumeToken();;){if(t.type===32||_v(t,e))return A;this.reconsumeToken(t),A.values.push(this.consumeComponentValue()),t=this.consumeToken()}},n.prototype.consumeFunction=function(e){for(var A={name:e.value,values:[],type:18};;){var t=this.consumeToken();if(t.type===32||t.type===3)return A;this.reconsumeToken(t),A.values.push(this.consumeComponentValue())}},n.prototype.consumeToken=function(){var e=this._tokens.shift();return typeof e>"u"?Oo:e},n.prototype.reconsumeToken=function(e){this._tokens.unshift(e)},n}(),yr=function(n){return n.type===15},Ii=function(n){return n.type===17},AA=function(n){return n.type===20},vv=function(n){return n.type===0},Go=function(n,e){return AA(n)&&n.value===e},Wh=function(n){return n.type!==31},Ti=function(n){return n.type!==31&&n.type!==4},_t=function(n){var e=[],A=[];return n.forEach(function(t){if(t.type===4){if(A.length===0)throw new Error("Error parsing function args, zero tokens for arg");e.push(A),A=[];return}t.type!==31&&A.push(t)}),A.length&&e.push(A),e},_v=function(n,e){return e===11&&n.type===12||e===28&&n.type===29?!0:e===2&&n.type===3},cn=function(n){return n.type===17||n.type===15},mA=function(n){return n.type===16||cn(n)},Xh=function(n){return n.length>1?[n[0],n[1]]:[n[0]]},TA={type:17,number:0,flags:Ur},al={type:16,number:50,flags:Ur},en={type:16,number:100,flags:Ur},Zi=function(n,e,A){var t=n[0],i=n[1];return[rA(t,e),rA(typeof i<"u"?i:t,A)]},rA=function(n,e){if(n.type===16)return n.number/100*e;if(yr(n))switch(n.unit){case"rem":case"em":return 16*n.number;case"px":default:return n.number}return n.number},Yh="deg",Jh="grad",Zh="rad",qh="turn",ea={name:"angle",parse:function(n,e){if(e.type===15)switch(e.unit){case Yh:return Math.PI*e.number/180;case Jh:return Math.PI/200*e.number;case Zh:return e.number;case qh:return Math.PI*2*e.number}throw new Error("Unsupported angle type")}},$h=function(n){return n.type===15&&(n.unit===Yh||n.unit===Jh||n.unit===Zh||n.unit===qh)},jh=function(n){var e=n.filter(AA).map(function(A){return A.value}).join(" ");switch(e){case"to bottom right":case"to right bottom":case"left top":case"top left":return[TA,TA];case"to top":case"bottom":return it(0);case"to bottom left":case"to left bottom":case"right top":case"top right":return[TA,en];case"to right":case"left":return it(90);case"to top left":case"to left top":case"right bottom":case"bottom right":return[en,en];case"to bottom":case"top":return it(180);case"to top right":case"to right top":case"left bottom":case"bottom left":return[en,TA];case"to left":case"right":return it(270)}return 0},it=function(n){return Math.PI*n/180},sn={name:"color",parse:function(n,e){if(e.type===18){var A=Cv[e.name];if(typeof A>"u")throw new Error('Attempting to parse an unsupported color function "'+e.name+'"');return A(n,e.values)}if(e.type===5){if(e.value.length===3){var t=e.value.substring(0,1),i=e.value.substring(1,2),r=e.value.substring(2,3);return An(parseInt(t+t,16),parseInt(i+i,16),parseInt(r+r,16),1)}if(e.value.length===4){var t=e.value.substring(0,1),i=e.value.substring(1,2),r=e.value.substring(2,3),s=e.value.substring(3,4);return An(parseInt(t+t,16),parseInt(i+i,16),parseInt(r+r,16),parseInt(s+s,16)/255)}if(e.value.length===6){var t=e.value.substring(0,2),i=e.value.substring(2,4),r=e.value.substring(4,6);return An(parseInt(t,16),parseInt(i,16),parseInt(r,16),1)}if(e.value.length===8){var t=e.value.substring(0,2),i=e.value.substring(2,4),r=e.value.substring(4,6),s=e.value.substring(6,8);return An(parseInt(t,16),parseInt(i,16),parseInt(r,16),parseInt(s,16)/255)}}if(e.type===20){var a=Dt[e.value.toUpperCase()];if(typeof a<"u")return a}return Dt.TRANSPARENT}},an=function(n){return(255&n)===0},xA=function(n){var e=255&n,A=255&n>>8,t=255&n>>16,i=255&n>>24;return e<255?"rgba("+i+","+t+","+A+","+e/255+")":"rgb("+i+","+t+","+A+")"},An=function(n,e,A,t){return(n<<24|e<<16|A<<8|Math.round(t*255)<<0)>>>0},uu=function(n,e){if(n.type===17)return n.number;if(n.type===16){var A=e===3?1:255;return e===3?n.number/100*A:Math.round(n.number/100*A)}return 0},hu=function(n,e){var A=e.filter(Ti);if(A.length===3){var t=A.map(uu),i=t[0],r=t[1],s=t[2];return An(i,r,s,1)}if(A.length===4){var a=A.map(uu),i=a[0],r=a[1],s=a[2],o=a[3];return An(i,r,s,o)}return 0};function qa(n,e,A){return A<0&&(A+=1),A>=1&&(A-=1),A<1/6?(e-n)*A*6+n:A<1/2?e:A<2/3?(e-n)*6*(2/3-A)+n:n}var fu=function(n,e){var A=e.filter(Ti),t=A[0],i=A[1],r=A[2],s=A[3],a=(t.type===17?it(t.number):ea.parse(n,t))/(Math.PI*2),o=mA(i)?i.number/100:0,l=mA(r)?r.number/100:0,c=typeof s<"u"&&mA(s)?rA(s,1):1;if(o===0)return An(l*255,l*255,l*255,1);var u=l<=.5?l*(o+1):l+o-l*o,h=l*2-u,p=qa(h,u,a+1/3),g=qa(h,u,a),m=qa(h,u,a-1/3);return An(p*255,g*255,m*255,c)},Cv={hsl:fu,hsla:fu,rgb:hu,rgba:hu},nr=function(n,e){return sn.parse(n,zh.create(e).parseComponentValue())},Dt={ALICEBLUE:4042850303,ANTIQUEWHITE:4209760255,AQUA:16777215,AQUAMARINE:2147472639,AZURE:4043309055,BEIGE:4126530815,BISQUE:4293182719,BLACK:255,BLANCHEDALMOND:4293643775,BLUE:65535,BLUEVIOLET:2318131967,BROWN:2771004159,BURLYWOOD:3736635391,CADETBLUE:1604231423,CHARTREUSE:2147418367,CHOCOLATE:3530104575,CORAL:4286533887,CORNFLOWERBLUE:1687547391,CORNSILK:4294499583,CRIMSON:3692313855,CYAN:16777215,DARKBLUE:35839,DARKCYAN:9145343,DARKGOLDENROD:3095837695,DARKGRAY:2846468607,DARKGREEN:6553855,DARKGREY:2846468607,DARKKHAKI:3182914559,DARKMAGENTA:2332068863,DARKOLIVEGREEN:1433087999,DARKORANGE:4287365375,DARKORCHID:2570243327,DARKRED:2332033279,DARKSALMON:3918953215,DARKSEAGREEN:2411499519,DARKSLATEBLUE:1211993087,DARKSLATEGRAY:793726975,DARKSLATEGREY:793726975,DARKTURQUOISE:13554175,DARKVIOLET:2483082239,DEEPPINK:4279538687,DEEPSKYBLUE:12582911,DIMGRAY:1768516095,DIMGREY:1768516095,DODGERBLUE:512819199,FIREBRICK:2988581631,FLORALWHITE:4294635775,FORESTGREEN:579543807,FUCHSIA:4278255615,GAINSBORO:3705462015,GHOSTWHITE:4177068031,GOLD:4292280575,GOLDENROD:3668254975,GRAY:2155905279,GREEN:8388863,GREENYELLOW:2919182335,GREY:2155905279,HONEYDEW:4043305215,HOTPINK:4285117695,INDIANRED:3445382399,INDIGO:1258324735,IVORY:4294963455,KHAKI:4041641215,LAVENDER:3873897215,LAVENDERBLUSH:4293981695,LAWNGREEN:2096890111,LEMONCHIFFON:4294626815,LIGHTBLUE:2916673279,LIGHTCORAL:4034953471,LIGHTCYAN:3774873599,LIGHTGOLDENRODYELLOW:4210742015,LIGHTGRAY:3553874943,LIGHTGREEN:2431553791,LIGHTGREY:3553874943,LIGHTPINK:4290167295,LIGHTSALMON:4288707327,LIGHTSEAGREEN:548580095,LIGHTSKYBLUE:2278488831,LIGHTSLATEGRAY:2005441023,LIGHTSLATEGREY:2005441023,LIGHTSTEELBLUE:2965692159,LIGHTYELLOW:4294959359,LIME:16711935,LIMEGREEN:852308735,LINEN:4210091775,MAGENTA:4278255615,MAROON:2147483903,MEDIUMAQUAMARINE:1724754687,MEDIUMBLUE:52735,MEDIUMORCHID:3126187007,MEDIUMPURPLE:2473647103,MEDIUMSEAGREEN:1018393087,MEDIUMSLATEBLUE:2070474495,MEDIUMSPRINGGREEN:16423679,MEDIUMTURQUOISE:1221709055,MEDIUMVIOLETRED:3340076543,MIDNIGHTBLUE:421097727,MINTCREAM:4127193855,MISTYROSE:4293190143,MOCCASIN:4293178879,NAVAJOWHITE:4292783615,NAVY:33023,OLDLACE:4260751103,OLIVE:2155872511,OLIVEDRAB:1804477439,ORANGE:4289003775,ORANGERED:4282712319,ORCHID:3664828159,PALEGOLDENROD:4008225535,PALEGREEN:2566625535,PALETURQUOISE:2951671551,PALEVIOLETRED:3681588223,PAPAYAWHIP:4293907967,PEACHPUFF:4292524543,PERU:3448061951,PINK:4290825215,PLUM:3718307327,POWDERBLUE:2967529215,PURPLE:2147516671,REBECCAPURPLE:1714657791,RED:4278190335,ROSYBROWN:3163525119,ROYALBLUE:1097458175,SADDLEBROWN:2336560127,SALMON:4202722047,SANDYBROWN:4104413439,SEAGREEN:780883967,SEASHELL:4294307583,SIENNA:2689740287,SILVER:3233857791,SKYBLUE:2278484991,SLATEBLUE:1784335871,SLATEGRAY:1887473919,SLATEGREY:1887473919,SNOW:4294638335,SPRINGGREEN:16744447,STEELBLUE:1182971135,TAN:3535047935,TEAL:8421631,THISTLE:3636451583,TOMATO:4284696575,TRANSPARENT:0,TURQUOISE:1088475391,VIOLET:4001558271,WHEAT:4125012991,WHITE:4294967295,WHITESMOKE:4126537215,YELLOW:4294902015,YELLOWGREEN:2597139199},Ev={name:"background-clip",initialValue:"border-box",prefix:!1,type:1,parse:function(n,e){return e.map(function(A){if(AA(A))switch(A.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},xv={name:"background-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},Aa=function(n,e){var A=sn.parse(n,e[0]),t=e[1];return t&&mA(t)?{color:A,stop:t}:{color:A,stop:null}},du=function(n,e){var A=n[0],t=n[n.length-1];A.stop===null&&(A.stop=TA),t.stop===null&&(t.stop=en);for(var i=[],r=0,s=0;s<n.length;s++){var a=n[s].stop;if(a!==null){var o=rA(a,e);o>r?i.push(o):i.push(r),r=o}else i.push(null)}for(var l=null,s=0;s<i.length;s++){var c=i[s];if(c===null)l===null&&(l=s);else if(l!==null){for(var u=s-l,h=i[l-1],p=(c-h)/(u+1),g=1;g<=u;g++)i[l+g-1]=p*g;l=null}}return n.map(function(m,d){var f=m.color;return{color:f,stop:Math.max(Math.min(1,i[d]/e),0)}})},Uv=function(n,e,A){var t=e/2,i=A/2,r=rA(n[0],e)-t,s=i-rA(n[1],A);return(Math.atan2(s,r)+Math.PI*2)%(Math.PI*2)},yv=function(n,e,A){var t=typeof n=="number"?n:Uv(n,e,A),i=Math.abs(e*Math.sin(t))+Math.abs(A*Math.cos(t)),r=e/2,s=A/2,a=i/2,o=Math.sin(t-Math.PI/2)*a,l=Math.cos(t-Math.PI/2)*a;return[i,r-l,r+l,s-o,s+o]},lt=function(n,e){return Math.sqrt(n*n+e*e)},pu=function(n,e,A,t,i){var r=[[0,0],[0,e],[n,0],[n,e]];return r.reduce(function(s,a){var o=a[0],l=a[1],c=lt(A-o,t-l);return(i?c<s.optimumDistance:c>s.optimumDistance)?{optimumCorner:a,optimumDistance:c}:s},{optimumDistance:i?1/0:-1/0,optimumCorner:null}).optimumCorner},Sv=function(n,e,A,t,i){var r=0,s=0;switch(n.size){case 0:n.shape===0?r=s=Math.min(Math.abs(e),Math.abs(e-t),Math.abs(A),Math.abs(A-i)):n.shape===1&&(r=Math.min(Math.abs(e),Math.abs(e-t)),s=Math.min(Math.abs(A),Math.abs(A-i)));break;case 2:if(n.shape===0)r=s=Math.min(lt(e,A),lt(e,A-i),lt(e-t,A),lt(e-t,A-i));else if(n.shape===1){var a=Math.min(Math.abs(A),Math.abs(A-i))/Math.min(Math.abs(e),Math.abs(e-t)),o=pu(t,i,e,A,!0),l=o[0],c=o[1];r=lt(l-e,(c-A)/a),s=a*r}break;case 1:n.shape===0?r=s=Math.max(Math.abs(e),Math.abs(e-t),Math.abs(A),Math.abs(A-i)):n.shape===1&&(r=Math.max(Math.abs(e),Math.abs(e-t)),s=Math.max(Math.abs(A),Math.abs(A-i)));break;case 3:if(n.shape===0)r=s=Math.max(lt(e,A),lt(e,A-i),lt(e-t,A),lt(e-t,A-i));else if(n.shape===1){var a=Math.max(Math.abs(A),Math.abs(A-i))/Math.max(Math.abs(e),Math.abs(e-t)),u=pu(t,i,e,A,!1),l=u[0],c=u[1];r=lt(l-e,(c-A)/a),s=a*r}break}return Array.isArray(n.size)&&(r=rA(n.size[0],t),s=n.size.length===2?rA(n.size[1],i):r),[r,s]},Mv=function(n,e){var A=it(180),t=[];return _t(e).forEach(function(i,r){if(r===0){var s=i[0];if(s.type===20&&s.value==="to"){A=jh(i);return}else if($h(s)){A=ea.parse(n,s);return}}var a=Aa(n,i);t.push(a)}),{angle:A,stops:t,type:1}},us=function(n,e){var A=it(180),t=[];return _t(e).forEach(function(i,r){if(r===0){var s=i[0];if(s.type===20&&["top","left","right","bottom"].indexOf(s.value)!==-1){A=jh(i);return}else if($h(s)){A=(ea.parse(n,s)+it(270))%it(360);return}}var a=Aa(n,i);t.push(a)}),{angle:A,stops:t,type:1}},Fv=function(n,e){var A=it(180),t=[],i=1,r=0,s=3,a=[];return _t(e).forEach(function(o,l){var c=o[0];if(l===0){if(AA(c)&&c.value==="linear"){i=1;return}else if(AA(c)&&c.value==="radial"){i=2;return}}if(c.type===18){if(c.name==="from"){var u=sn.parse(n,c.values[0]);t.push({stop:TA,color:u})}else if(c.name==="to"){var u=sn.parse(n,c.values[0]);t.push({stop:en,color:u})}else if(c.name==="color-stop"){var h=c.values.filter(Ti);if(h.length===2){var u=sn.parse(n,h[1]),p=h[0];Ii(p)&&t.push({stop:{type:16,number:p.number*100,flags:p.flags},color:u})}}}}),i===1?{angle:(A+it(180))%it(360),stops:t,type:i}:{size:s,shape:r,stops:t,position:a,type:i}},ef="closest-side",Af="farthest-side",tf="closest-corner",nf="farthest-corner",rf="circle",sf="ellipse",af="cover",of="contain",bv=function(n,e){var A=0,t=3,i=[],r=[];return _t(e).forEach(function(s,a){var o=!0;if(a===0){var l=!1;o=s.reduce(function(u,h){if(l)if(AA(h))switch(h.value){case"center":return r.push(al),u;case"top":case"left":return r.push(TA),u;case"right":case"bottom":return r.push(en),u}else(mA(h)||cn(h))&&r.push(h);else if(AA(h))switch(h.value){case rf:return A=0,!1;case sf:return A=1,!1;case"at":return l=!0,!1;case ef:return t=0,!1;case af:case Af:return t=1,!1;case of:case tf:return t=2,!1;case nf:return t=3,!1}else if(cn(h)||mA(h))return Array.isArray(t)||(t=[]),t.push(h),!1;return u},o)}if(o){var c=Aa(n,s);i.push(c)}}),{size:t,shape:A,stops:i,position:r,type:2}},hs=function(n,e){var A=0,t=3,i=[],r=[];return _t(e).forEach(function(s,a){var o=!0;if(a===0?o=s.reduce(function(c,u){if(AA(u))switch(u.value){case"center":return r.push(al),!1;case"top":case"left":return r.push(TA),!1;case"right":case"bottom":return r.push(en),!1}else if(mA(u)||cn(u))return r.push(u),!1;return c},o):a===1&&(o=s.reduce(function(c,u){if(AA(u))switch(u.value){case rf:return A=0,!1;case sf:return A=1,!1;case of:case ef:return t=0,!1;case Af:return t=1,!1;case tf:return t=2,!1;case af:case nf:return t=3,!1}else if(cn(u)||mA(u))return Array.isArray(t)||(t=[]),t.push(u),!1;return c},o)),o){var l=Aa(n,s);i.push(l)}}),{size:t,shape:A,stops:i,position:r,type:2}},Tv=function(n){return n.type===1},Qv=function(n){return n.type===2},ol={name:"image",parse:function(n,e){if(e.type===22){var A={url:e.value,type:0};return n.cache.addImage(e.value),A}if(e.type===18){var t=lf[e.name];if(typeof t>"u")throw new Error('Attempting to parse an unsupported image function "'+e.name+'"');return t(n,e.values)}throw new Error("Unsupported image type "+e.type)}};function Lv(n){return!(n.type===20&&n.value==="none")&&(n.type!==18||!!lf[n.name])}var lf={"linear-gradient":Mv,"-moz-linear-gradient":us,"-ms-linear-gradient":us,"-o-linear-gradient":us,"-webkit-linear-gradient":us,"radial-gradient":bv,"-moz-radial-gradient":hs,"-ms-radial-gradient":hs,"-o-radial-gradient":hs,"-webkit-radial-gradient":hs,"-webkit-gradient":Fv},Iv={name:"background-image",initialValue:"none",type:1,prefix:!1,parse:function(n,e){if(e.length===0)return[];var A=e[0];return A.type===20&&A.value==="none"?[]:e.filter(function(t){return Ti(t)&&Lv(t)}).map(function(t){return ol.parse(n,t)})}},Rv={name:"background-origin",initialValue:"border-box",prefix:!1,type:1,parse:function(n,e){return e.map(function(A){if(AA(A))switch(A.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},Dv={name:"background-position",initialValue:"0% 0%",type:1,prefix:!1,parse:function(n,e){return _t(e).map(function(A){return A.filter(mA)}).map(Xh)}},Hv={name:"background-repeat",initialValue:"repeat",prefix:!1,type:1,parse:function(n,e){return _t(e).map(function(A){return A.filter(AA).map(function(t){return t.value}).join(" ")}).map(Pv)}},Pv=function(n){switch(n){case"no-repeat":return 1;case"repeat-x":case"repeat no-repeat":return 2;case"repeat-y":case"no-repeat repeat":return 3;case"repeat":default:return 0}},wi;(function(n){n.AUTO="auto",n.CONTAIN="contain",n.COVER="cover"})(wi||(wi={}));var Nv={name:"background-size",initialValue:"0",prefix:!1,type:1,parse:function(n,e){return _t(e).map(function(A){return A.filter(Ov)})}},Ov=function(n){return AA(n)||mA(n)},ta=function(n){return{name:"border-"+n+"-color",initialValue:"transparent",prefix:!1,type:3,format:"color"}},Gv=ta("top"),Vv=ta("right"),Kv=ta("bottom"),kv=ta("left"),na=function(n){return{name:"border-radius-"+n,initialValue:"0 0",prefix:!1,type:1,parse:function(e,A){return Xh(A.filter(mA))}}},zv=na("top-left"),Wv=na("top-right"),Xv=na("bottom-right"),Yv=na("bottom-left"),ia=function(n){return{name:"border-"+n+"-style",initialValue:"solid",prefix:!1,type:2,parse:function(e,A){switch(A){case"none":return 0;case"dashed":return 2;case"dotted":return 3;case"double":return 4}return 1}}},Jv=ia("top"),Zv=ia("right"),qv=ia("bottom"),$v=ia("left"),ra=function(n){return{name:"border-"+n+"-width",initialValue:"0",type:0,prefix:!1,parse:function(e,A){return yr(A)?A.number:0}}},jv=ra("top"),e_=ra("right"),A_=ra("bottom"),t_=ra("left"),n_={name:"color",initialValue:"transparent",prefix:!1,type:3,format:"color"},i_={name:"direction",initialValue:"ltr",prefix:!1,type:2,parse:function(n,e){switch(e){case"rtl":return 1;case"ltr":default:return 0}}},r_={name:"display",initialValue:"inline-block",prefix:!1,type:1,parse:function(n,e){return e.filter(AA).reduce(function(A,t){return A|s_(t.value)},0)}},s_=function(n){switch(n){case"block":case"-webkit-box":return 2;case"inline":return 4;case"run-in":return 8;case"flow":return 16;case"flow-root":return 32;case"table":return 64;case"flex":case"-webkit-flex":return 128;case"grid":case"-ms-grid":return 256;case"ruby":return 512;case"subgrid":return 1024;case"list-item":return 2048;case"table-row-group":return 4096;case"table-header-group":return 8192;case"table-footer-group":return 16384;case"table-row":return 32768;case"table-cell":return 65536;case"table-column-group":return 131072;case"table-column":return 262144;case"table-caption":return 524288;case"ruby-base":return 1048576;case"ruby-text":return 2097152;case"ruby-base-container":return 4194304;case"ruby-text-container":return 8388608;case"contents":return 16777216;case"inline-block":return 33554432;case"inline-list-item":return 67108864;case"inline-table":return 134217728;case"inline-flex":return 268435456;case"inline-grid":return 536870912}return 0},a_={name:"float",initialValue:"none",prefix:!1,type:2,parse:function(n,e){switch(e){case"left":return 1;case"right":return 2;case"inline-start":return 3;case"inline-end":return 4}return 0}},o_={name:"letter-spacing",initialValue:"0",prefix:!1,type:0,parse:function(n,e){return e.type===20&&e.value==="normal"?0:e.type===17||e.type===15?e.number:0}},Ds;(function(n){n.NORMAL="normal",n.STRICT="strict"})(Ds||(Ds={}));var l_={name:"line-break",initialValue:"normal",prefix:!1,type:2,parse:function(n,e){switch(e){case"strict":return Ds.STRICT;case"normal":default:return Ds.NORMAL}}},c_={name:"line-height",initialValue:"normal",prefix:!1,type:4},gu=function(n,e){return AA(n)&&n.value==="normal"?1.2*e:n.type===17?e*n.number:mA(n)?rA(n,e):e},u_={name:"list-style-image",initialValue:"none",type:0,prefix:!1,parse:function(n,e){return e.type===20&&e.value==="none"?null:ol.parse(n,e)}},h_={name:"list-style-position",initialValue:"outside",prefix:!1,type:2,parse:function(n,e){switch(e){case"inside":return 0;case"outside":default:return 1}}},Vo={name:"list-style-type",initialValue:"none",prefix:!1,type:2,parse:function(n,e){switch(e){case"disc":return 0;case"circle":return 1;case"square":return 2;case"decimal":return 3;case"cjk-decimal":return 4;case"decimal-leading-zero":return 5;case"lower-roman":return 6;case"upper-roman":return 7;case"lower-greek":return 8;case"lower-alpha":return 9;case"upper-alpha":return 10;case"arabic-indic":return 11;case"armenian":return 12;case"bengali":return 13;case"cambodian":return 14;case"cjk-earthly-branch":return 15;case"cjk-heavenly-stem":return 16;case"cjk-ideographic":return 17;case"devanagari":return 18;case"ethiopic-numeric":return 19;case"georgian":return 20;case"gujarati":return 21;case"gurmukhi":return 22;case"hebrew":return 22;case"hiragana":return 23;case"hiragana-iroha":return 24;case"japanese-formal":return 25;case"japanese-informal":return 26;case"kannada":return 27;case"katakana":return 28;case"katakana-iroha":return 29;case"khmer":return 30;case"korean-hangul-formal":return 31;case"korean-hanja-formal":return 32;case"korean-hanja-informal":return 33;case"lao":return 34;case"lower-armenian":return 35;case"malayalam":return 36;case"mongolian":return 37;case"myanmar":return 38;case"oriya":return 39;case"persian":return 40;case"simp-chinese-formal":return 41;case"simp-chinese-informal":return 42;case"tamil":return 43;case"telugu":return 44;case"thai":return 45;case"tibetan":return 46;case"trad-chinese-formal":return 47;case"trad-chinese-informal":return 48;case"upper-armenian":return 49;case"disclosure-open":return 50;case"disclosure-closed":return 51;case"none":default:return-1}}},sa=function(n){return{name:"margin-"+n,initialValue:"0",prefix:!1,type:4}},f_=sa("top"),d_=sa("right"),p_=sa("bottom"),g_=sa("left"),m_={name:"overflow",initialValue:"visible",prefix:!1,type:1,parse:function(n,e){return e.filter(AA).map(function(A){switch(A.value){case"hidden":return 1;case"scroll":return 2;case"clip":return 3;case"auto":return 4;case"visible":default:return 0}})}},B_={name:"overflow-wrap",initialValue:"normal",prefix:!1,type:2,parse:function(n,e){switch(e){case"break-word":return"break-word";case"normal":default:return"normal"}}},aa=function(n){return{name:"padding-"+n,initialValue:"0",prefix:!1,type:3,format:"length-percentage"}},w_=aa("top"),v_=aa("right"),__=aa("bottom"),C_=aa("left"),E_={name:"text-align",initialValue:"left",prefix:!1,type:2,parse:function(n,e){switch(e){case"right":return 2;case"center":case"justify":return 1;case"left":default:return 0}}},x_={name:"position",initialValue:"static",prefix:!1,type:2,parse:function(n,e){switch(e){case"relative":return 1;case"absolute":return 2;case"fixed":return 3;case"sticky":return 4}return 0}},U_={name:"text-shadow",initialValue:"none",type:1,prefix:!1,parse:function(n,e){return e.length===1&&Go(e[0],"none")?[]:_t(e).map(function(A){for(var t={color:Dt.TRANSPARENT,offsetX:TA,offsetY:TA,blur:TA},i=0,r=0;r<A.length;r++){var s=A[r];cn(s)?(i===0?t.offsetX=s:i===1?t.offsetY=s:t.blur=s,i++):t.color=sn.parse(n,s)}return t})}},y_={name:"text-transform",initialValue:"none",prefix:!1,type:2,parse:function(n,e){switch(e){case"uppercase":return 2;case"lowercase":return 1;case"capitalize":return 3}return 0}},S_={name:"transform",initialValue:"none",prefix:!0,type:0,parse:function(n,e){if(e.type===20&&e.value==="none")return null;if(e.type===18){var A=b_[e.name];if(typeof A>"u")throw new Error('Attempting to parse an unsupported transform function "'+e.name+'"');return A(e.values)}return null}},M_=function(n){var e=n.filter(function(A){return A.type===17}).map(function(A){return A.number});return e.length===6?e:null},F_=function(n){var e=n.filter(function(o){return o.type===17}).map(function(o){return o.number}),A=e[0],t=e[1];e[2],e[3];var i=e[4],r=e[5];e[6],e[7],e[8],e[9],e[10],e[11];var s=e[12],a=e[13];return e[14],e[15],e.length===16?[A,t,i,r,s,a]:null},b_={matrix:M_,matrix3d:F_},mu={type:16,number:50,flags:Ur},T_=[mu,mu],Q_={name:"transform-origin",initialValue:"50% 50%",prefix:!0,type:1,parse:function(n,e){var A=e.filter(mA);return A.length!==2?T_:[A[0],A[1]]}},L_={name:"visible",initialValue:"none",prefix:!1,type:2,parse:function(n,e){switch(e){case"hidden":return 1;case"collapse":return 2;case"visible":default:return 0}}},ir;(function(n){n.NORMAL="normal",n.BREAK_ALL="break-all",n.KEEP_ALL="keep-all"})(ir||(ir={}));var I_={name:"word-break",initialValue:"normal",prefix:!1,type:2,parse:function(n,e){switch(e){case"break-all":return ir.BREAK_ALL;case"keep-all":return ir.KEEP_ALL;case"normal":default:return ir.NORMAL}}},R_={name:"z-index",initialValue:"auto",prefix:!1,type:0,parse:function(n,e){if(e.type===20)return{auto:!0,order:0};if(Ii(e))return{auto:!1,order:e.number};throw new Error("Invalid z-index number parsed")}},cf={name:"time",parse:function(n,e){if(e.type===15)switch(e.unit.toLowerCase()){case"s":return 1e3*e.number;case"ms":return e.number}throw new Error("Unsupported time type")}},D_={name:"opacity",initialValue:"1",type:0,prefix:!1,parse:function(n,e){return Ii(e)?e.number:1}},H_={name:"text-decoration-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},P_={name:"text-decoration-line",initialValue:"none",prefix:!1,type:1,parse:function(n,e){return e.filter(AA).map(function(A){switch(A.value){case"underline":return 1;case"overline":return 2;case"line-through":return 3;case"none":return 4}return 0}).filter(function(A){return A!==0})}},N_={name:"font-family",initialValue:"",prefix:!1,type:1,parse:function(n,e){var A=[],t=[];return e.forEach(function(i){switch(i.type){case 20:case 0:A.push(i.value);break;case 17:A.push(i.number.toString());break;case 4:t.push(A.join(" ")),A.length=0;break}}),A.length&&t.push(A.join(" ")),t.map(function(i){return i.indexOf(" ")===-1?i:"'"+i+"'"})}},O_={name:"font-size",initialValue:"0",prefix:!1,type:3,format:"length"},G_={name:"font-weight",initialValue:"normal",type:0,prefix:!1,parse:function(n,e){if(Ii(e))return e.number;if(AA(e))switch(e.value){case"bold":return 700;case"normal":default:return 400}return 400}},V_={name:"font-variant",initialValue:"none",type:1,prefix:!1,parse:function(n,e){return e.filter(AA).map(function(A){return A.value})}},K_={name:"font-style",initialValue:"normal",prefix:!1,type:2,parse:function(n,e){switch(e){case"oblique":return"oblique";case"italic":return"italic";case"normal":default:return"normal"}}},wA=function(n,e){return(n&e)!==0},k_={name:"content",initialValue:"none",type:1,prefix:!1,parse:function(n,e){if(e.length===0)return[];var A=e[0];return A.type===20&&A.value==="none"?[]:e}},z_={name:"counter-increment",initialValue:"none",prefix:!0,type:1,parse:function(n,e){if(e.length===0)return null;var A=e[0];if(A.type===20&&A.value==="none")return null;for(var t=[],i=e.filter(Wh),r=0;r<i.length;r++){var s=i[r],a=i[r+1];if(s.type===20){var o=a&&Ii(a)?a.number:1;t.push({counter:s.value,increment:o})}}return t}},W_={name:"counter-reset",initialValue:"none",prefix:!0,type:1,parse:function(n,e){if(e.length===0)return[];for(var A=[],t=e.filter(Wh),i=0;i<t.length;i++){var r=t[i],s=t[i+1];if(AA(r)&&r.value!=="none"){var a=s&&Ii(s)?s.number:0;A.push({counter:r.value,reset:a})}}return A}},X_={name:"duration",initialValue:"0s",prefix:!1,type:1,parse:function(n,e){return e.filter(yr).map(function(A){return cf.parse(n,A)})}},Y_={name:"quotes",initialValue:"none",prefix:!0,type:1,parse:function(n,e){if(e.length===0)return null;var A=e[0];if(A.type===20&&A.value==="none")return null;var t=[],i=e.filter(vv);if(i.length%2!==0)return null;for(var r=0;r<i.length;r+=2){var s=i[r].value,a=i[r+1].value;t.push({open:s,close:a})}return t}},Bu=function(n,e,A){if(!n)return"";var t=n[Math.min(e,n.length-1)];return t?A?t.open:t.close:""},J_={name:"box-shadow",initialValue:"none",type:1,prefix:!1,parse:function(n,e){return e.length===1&&Go(e[0],"none")?[]:_t(e).map(function(A){for(var t={color:255,offsetX:TA,offsetY:TA,blur:TA,spread:TA,inset:!1},i=0,r=0;r<A.length;r++){var s=A[r];Go(s,"inset")?t.inset=!0:cn(s)?(i===0?t.offsetX=s:i===1?t.offsetY=s:i===2?t.blur=s:t.spread=s,i++):t.color=sn.parse(n,s)}return t})}},Z_={name:"paint-order",initialValue:"normal",prefix:!1,type:1,parse:function(n,e){var A=[0,1,2],t=[];return e.filter(AA).forEach(function(i){switch(i.value){case"stroke":t.push(1);break;case"fill":t.push(0);break;case"markers":t.push(2);break}}),A.forEach(function(i){t.indexOf(i)===-1&&t.push(i)}),t}},q_={name:"-webkit-text-stroke-color",initialValue:"currentcolor",prefix:!1,type:3,format:"color"},$_={name:"-webkit-text-stroke-width",initialValue:"0",type:0,prefix:!1,parse:function(n,e){return yr(e)?e.number:0}},j_=function(){function n(e,A){var t,i;this.animationDuration=ue(e,X_,A.animationDuration),this.backgroundClip=ue(e,Ev,A.backgroundClip),this.backgroundColor=ue(e,xv,A.backgroundColor),this.backgroundImage=ue(e,Iv,A.backgroundImage),this.backgroundOrigin=ue(e,Rv,A.backgroundOrigin),this.backgroundPosition=ue(e,Dv,A.backgroundPosition),this.backgroundRepeat=ue(e,Hv,A.backgroundRepeat),this.backgroundSize=ue(e,Nv,A.backgroundSize),this.borderTopColor=ue(e,Gv,A.borderTopColor),this.borderRightColor=ue(e,Vv,A.borderRightColor),this.borderBottomColor=ue(e,Kv,A.borderBottomColor),this.borderLeftColor=ue(e,kv,A.borderLeftColor),this.borderTopLeftRadius=ue(e,zv,A.borderTopLeftRadius),this.borderTopRightRadius=ue(e,Wv,A.borderTopRightRadius),this.borderBottomRightRadius=ue(e,Xv,A.borderBottomRightRadius),this.borderBottomLeftRadius=ue(e,Yv,A.borderBottomLeftRadius),this.borderTopStyle=ue(e,Jv,A.borderTopStyle),this.borderRightStyle=ue(e,Zv,A.borderRightStyle),this.borderBottomStyle=ue(e,qv,A.borderBottomStyle),this.borderLeftStyle=ue(e,$v,A.borderLeftStyle),this.borderTopWidth=ue(e,jv,A.borderTopWidth),this.borderRightWidth=ue(e,e_,A.borderRightWidth),this.borderBottomWidth=ue(e,A_,A.borderBottomWidth),this.borderLeftWidth=ue(e,t_,A.borderLeftWidth),this.boxShadow=ue(e,J_,A.boxShadow),this.color=ue(e,n_,A.color),this.direction=ue(e,i_,A.direction),this.display=ue(e,r_,A.display),this.float=ue(e,a_,A.cssFloat),this.fontFamily=ue(e,N_,A.fontFamily),this.fontSize=ue(e,O_,A.fontSize),this.fontStyle=ue(e,K_,A.fontStyle),this.fontVariant=ue(e,V_,A.fontVariant),this.fontWeight=ue(e,G_,A.fontWeight),this.letterSpacing=ue(e,o_,A.letterSpacing),this.lineBreak=ue(e,l_,A.lineBreak),this.lineHeight=ue(e,c_,A.lineHeight),this.listStyleImage=ue(e,u_,A.listStyleImage),this.listStylePosition=ue(e,h_,A.listStylePosition),this.listStyleType=ue(e,Vo,A.listStyleType),this.marginTop=ue(e,f_,A.marginTop),this.marginRight=ue(e,d_,A.marginRight),this.marginBottom=ue(e,p_,A.marginBottom),this.marginLeft=ue(e,g_,A.marginLeft),this.opacity=ue(e,D_,A.opacity);var r=ue(e,m_,A.overflow);this.overflowX=r[0],this.overflowY=r[r.length>1?1:0],this.overflowWrap=ue(e,B_,A.overflowWrap),this.paddingTop=ue(e,w_,A.paddingTop),this.paddingRight=ue(e,v_,A.paddingRight),this.paddingBottom=ue(e,__,A.paddingBottom),this.paddingLeft=ue(e,C_,A.paddingLeft),this.paintOrder=ue(e,Z_,A.paintOrder),this.position=ue(e,x_,A.position),this.textAlign=ue(e,E_,A.textAlign),this.textDecorationColor=ue(e,H_,(t=A.textDecorationColor)!==null&&t!==void 0?t:A.color),this.textDecorationLine=ue(e,P_,(i=A.textDecorationLine)!==null&&i!==void 0?i:A.textDecoration),this.textShadow=ue(e,U_,A.textShadow),this.textTransform=ue(e,y_,A.textTransform),this.transform=ue(e,S_,A.transform),this.transformOrigin=ue(e,Q_,A.transformOrigin),this.visibility=ue(e,L_,A.visibility),this.webkitTextStrokeColor=ue(e,q_,A.webkitTextStrokeColor),this.webkitTextStrokeWidth=ue(e,$_,A.webkitTextStrokeWidth),this.wordBreak=ue(e,I_,A.wordBreak),this.zIndex=ue(e,R_,A.zIndex)}return n.prototype.isVisible=function(){return this.display>0&&this.opacity>0&&this.visibility===0},n.prototype.isTransparent=function(){return an(this.backgroundColor)},n.prototype.isTransformed=function(){return this.transform!==null},n.prototype.isPositioned=function(){return this.position!==0},n.prototype.isPositionedWithZIndex=function(){return this.isPositioned()&&!this.zIndex.auto},n.prototype.isFloating=function(){return this.float!==0},n.prototype.isInlineLevel=function(){return wA(this.display,4)||wA(this.display,33554432)||wA(this.display,268435456)||wA(this.display,536870912)||wA(this.display,67108864)||wA(this.display,134217728)},n}(),eC=function(){function n(e,A){this.content=ue(e,k_,A.content),this.quotes=ue(e,Y_,A.quotes)}return n}(),wu=function(){function n(e,A){this.counterIncrement=ue(e,z_,A.counterIncrement),this.counterReset=ue(e,W_,A.counterReset)}return n}(),ue=function(n,e,A){var t=new kh,i=A!==null&&typeof A<"u"?A.toString():e.initialValue;t.write(i);var r=new zh(t.read());switch(e.type){case 2:var s=r.parseComponentValue();return e.parse(n,AA(s)?s.value:e.initialValue);case 0:return e.parse(n,r.parseComponentValue());case 1:return e.parse(n,r.parseComponentValues());case 4:return r.parseComponentValue();case 3:switch(e.format){case"angle":return ea.parse(n,r.parseComponentValue());case"color":return sn.parse(n,r.parseComponentValue());case"image":return ol.parse(n,r.parseComponentValue());case"length":var a=r.parseComponentValue();return cn(a)?a:TA;case"length-percentage":var o=r.parseComponentValue();return mA(o)?o:TA;case"time":return cf.parse(n,r.parseComponentValue())}break}},AC="data-html2canvas-debug",tC=function(n){var e=n.getAttribute(AC);switch(e){case"all":return 1;case"clone":return 2;case"parse":return 3;case"render":return 4;default:return 0}},Ko=function(n,e){var A=tC(n);return A===1||e===A},Ct=function(){function n(e,A){if(this.context=e,this.textNodes=[],this.elements=[],this.flags=0,Ko(A,3))debugger;this.styles=new j_(e,window.getComputedStyle(A,null)),Wo(A)&&(this.styles.animationDuration.some(function(t){return t>0})&&(A.style.animationDuration="0s"),this.styles.transform!==null&&(A.style.transform="none")),this.bounds=$s(this.context,A),Ko(A,4)&&(this.flags|=16)}return n}(),nC="AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=",vu="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",qi=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var fs=0;fs<vu.length;fs++)qi[vu.charCodeAt(fs)]=fs;var iC=function(n){var e=n.length*.75,A=n.length,t,i=0,r,s,a,o;n[n.length-1]==="="&&(e--,n[n.length-2]==="="&&e--);var l=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(e):new Array(e),c=Array.isArray(l)?l:new Uint8Array(l);for(t=0;t<A;t+=4)r=qi[n.charCodeAt(t)],s=qi[n.charCodeAt(t+1)],a=qi[n.charCodeAt(t+2)],o=qi[n.charCodeAt(t+3)],c[i++]=r<<2|s>>4,c[i++]=(s&15)<<4|a>>2,c[i++]=(a&3)<<6|o&63;return l},rC=function(n){for(var e=n.length,A=[],t=0;t<e;t+=2)A.push(n[t+1]<<8|n[t]);return A},sC=function(n){for(var e=n.length,A=[],t=0;t<e;t+=4)A.push(n[t+3]<<24|n[t+2]<<16|n[t+1]<<8|n[t]);return A},In=5,ll=11,$a=2,aC=ll-In,uf=65536>>In,oC=1<<In,ja=oC-1,lC=1024>>In,cC=uf+lC,uC=cC,hC=32,fC=uC+hC,dC=65536>>ll,pC=1<<aC,gC=pC-1,_u=function(n,e,A){return n.slice?n.slice(e,A):new Uint16Array(Array.prototype.slice.call(n,e,A))},mC=function(n,e,A){return n.slice?n.slice(e,A):new Uint32Array(Array.prototype.slice.call(n,e,A))},BC=function(n,e){var A=iC(n),t=Array.isArray(A)?sC(A):new Uint32Array(A),i=Array.isArray(A)?rC(A):new Uint16Array(A),r=24,s=_u(i,r/2,t[4]/2),a=t[5]===2?_u(i,(r+t[4])/2):mC(t,Math.ceil((r+t[4])/4));return new wC(t[0],t[1],t[2],t[3],s,a)},wC=function(){function n(e,A,t,i,r,s){this.initialValue=e,this.errorValue=A,this.highStart=t,this.highValueIndex=i,this.index=r,this.data=s}return n.prototype.get=function(e){var A;if(e>=0){if(e<55296||e>56319&&e<=65535)return A=this.index[e>>In],A=(A<<$a)+(e&ja),this.data[A];if(e<=65535)return A=this.index[uf+(e-55296>>In)],A=(A<<$a)+(e&ja),this.data[A];if(e<this.highStart)return A=fC-dC+(e>>ll),A=this.index[A],A+=e>>In&gC,A=this.index[A],A=(A<<$a)+(e&ja),this.data[A];if(e<=1114111)return this.data[this.highValueIndex]}return this.errorValue},n}(),Cu="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",vC=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var ds=0;ds<Cu.length;ds++)vC[Cu.charCodeAt(ds)]=ds;var _C=1,eo=2,Ao=3,Eu=4,xu=5,CC=7,Uu=8,to=9,no=10,yu=11,Su=12,Mu=13,Fu=14,io=15,EC=function(n){for(var e=[],A=0,t=n.length;A<t;){var i=n.charCodeAt(A++);if(i>=55296&&i<=56319&&A<t){var r=n.charCodeAt(A++);(r&64512)===56320?e.push(((i&1023)<<10)+(r&1023)+65536):(e.push(i),A--)}else e.push(i)}return e},xC=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];if(String.fromCodePoint)return String.fromCodePoint.apply(String,n);var A=n.length;if(!A)return"";for(var t=[],i=-1,r="";++i<A;){var s=n[i];s<=65535?t.push(s):(s-=65536,t.push((s>>10)+55296,s%1024+56320)),(i+1===A||t.length>16384)&&(r+=String.fromCharCode.apply(String,t),t.length=0)}return r},UC=BC(nC),et="×",ro="÷",yC=function(n){return UC.get(n)},SC=function(n,e,A){var t=A-2,i=e[t],r=e[A-1],s=e[A];if(r===eo&&s===Ao)return et;if(r===eo||r===Ao||r===Eu||s===eo||s===Ao||s===Eu)return ro;if(r===Uu&&[Uu,to,yu,Su].indexOf(s)!==-1||(r===yu||r===to)&&(s===to||s===no)||(r===Su||r===no)&&s===no||s===Mu||s===xu||s===CC||r===_C)return et;if(r===Mu&&s===Fu){for(;i===xu;)i=e[--t];if(i===Fu)return et}if(r===io&&s===io){for(var a=0;i===io;)a++,i=e[--t];if(a%2===0)return et}return ro},MC=function(n){var e=EC(n),A=e.length,t=0,i=0,r=e.map(yC);return{next:function(){if(t>=A)return{done:!0,value:null};for(var s=et;t<A&&(s=SC(e,r,++t))===et;);if(s!==et||t===A){var a=xC.apply(null,e.slice(i,t));return i=t,{value:a,done:!1}}return{done:!0,value:null}}}},FC=function(n){for(var e=MC(n),A=[],t;!(t=e.next()).done;)t.value&&A.push(t.value.slice());return A},bC=function(n){var e=123;if(n.createRange){var A=n.createRange();if(A.getBoundingClientRect){var t=n.createElement("boundtest");t.style.height=e+"px",t.style.display="block",n.body.appendChild(t),A.selectNode(t);var i=A.getBoundingClientRect(),r=Math.round(i.height);if(n.body.removeChild(t),r===e)return!0}}return!1},TC=function(n){var e=n.createElement("boundtest");e.style.width="50px",e.style.display="block",e.style.fontSize="12px",e.style.letterSpacing="0px",e.style.wordSpacing="0px",n.body.appendChild(e);var A=n.createRange();e.innerHTML=typeof"".repeat=="function"?"&#128104;".repeat(10):"";var t=e.firstChild,i=js(t.data).map(function(o){return pA(o)}),r=0,s={},a=i.every(function(o,l){A.setStart(t,r),A.setEnd(t,r+o.length);var c=A.getBoundingClientRect();r+=o.length;var u=c.x>s.x||c.y>s.y;return s=c,l===0?!0:u});return n.body.removeChild(e),a},QC=function(){return typeof new Image().crossOrigin<"u"},LC=function(){return typeof new XMLHttpRequest().responseType=="string"},IC=function(n){var e=new Image,A=n.createElement("canvas"),t=A.getContext("2d");if(!t)return!1;e.src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";try{t.drawImage(e,0,0),A.toDataURL()}catch{return!1}return!0},bu=function(n){return n[0]===0&&n[1]===255&&n[2]===0&&n[3]===255},RC=function(n){var e=n.createElement("canvas"),A=100;e.width=A,e.height=A;var t=e.getContext("2d");if(!t)return Promise.reject(!1);t.fillStyle="rgb(0, 255, 0)",t.fillRect(0,0,A,A);var i=new Image,r=e.toDataURL();i.src=r;var s=ko(A,A,0,0,i);return t.fillStyle="red",t.fillRect(0,0,A,A),Tu(s).then(function(a){t.drawImage(a,0,0);var o=t.getImageData(0,0,A,A).data;t.fillStyle="red",t.fillRect(0,0,A,A);var l=n.createElement("div");return l.style.backgroundImage="url("+r+")",l.style.height=A+"px",bu(o)?Tu(ko(A,A,0,0,l)):Promise.reject(!1)}).then(function(a){return t.drawImage(a,0,0),bu(t.getImageData(0,0,A,A).data)}).catch(function(){return!1})},ko=function(n,e,A,t,i){var r="http://www.w3.org/2000/svg",s=document.createElementNS(r,"svg"),a=document.createElementNS(r,"foreignObject");return s.setAttributeNS(null,"width",n.toString()),s.setAttributeNS(null,"height",e.toString()),a.setAttributeNS(null,"width","100%"),a.setAttributeNS(null,"height","100%"),a.setAttributeNS(null,"x",A.toString()),a.setAttributeNS(null,"y",t.toString()),a.setAttributeNS(null,"externalResourcesRequired","true"),s.appendChild(a),a.appendChild(i),s},Tu=function(n){return new Promise(function(e,A){var t=new Image;t.onload=function(){return e(t)},t.onerror=A,t.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(n))})},MA={get SUPPORT_RANGE_BOUNDS(){var n=bC(document);return Object.defineProperty(MA,"SUPPORT_RANGE_BOUNDS",{value:n}),n},get SUPPORT_WORD_BREAKING(){var n=MA.SUPPORT_RANGE_BOUNDS&&TC(document);return Object.defineProperty(MA,"SUPPORT_WORD_BREAKING",{value:n}),n},get SUPPORT_SVG_DRAWING(){var n=IC(document);return Object.defineProperty(MA,"SUPPORT_SVG_DRAWING",{value:n}),n},get SUPPORT_FOREIGNOBJECT_DRAWING(){var n=typeof Array.from=="function"&&typeof window.fetch=="function"?RC(document):Promise.resolve(!1);return Object.defineProperty(MA,"SUPPORT_FOREIGNOBJECT_DRAWING",{value:n}),n},get SUPPORT_CORS_IMAGES(){var n=QC();return Object.defineProperty(MA,"SUPPORT_CORS_IMAGES",{value:n}),n},get SUPPORT_RESPONSE_TYPE(){var n=LC();return Object.defineProperty(MA,"SUPPORT_RESPONSE_TYPE",{value:n}),n},get SUPPORT_CORS_XHR(){var n="withCredentials"in new XMLHttpRequest;return Object.defineProperty(MA,"SUPPORT_CORS_XHR",{value:n}),n},get SUPPORT_NATIVE_TEXT_SEGMENTATION(){var n=!!(typeof Intl<"u"&&Intl.Segmenter);return Object.defineProperty(MA,"SUPPORT_NATIVE_TEXT_SEGMENTATION",{value:n}),n}},rr=function(){function n(e,A){this.text=e,this.bounds=A}return n}(),DC=function(n,e,A,t){var i=NC(e,A),r=[],s=0;return i.forEach(function(a){if(A.textDecorationLine.length||a.trim().length>0)if(MA.SUPPORT_RANGE_BOUNDS){var o=Qu(t,s,a.length).getClientRects();if(o.length>1){var l=cl(a),c=0;l.forEach(function(h){r.push(new rr(h,Pt.fromDOMRectList(n,Qu(t,c+s,h.length).getClientRects()))),c+=h.length})}else r.push(new rr(a,Pt.fromDOMRectList(n,o)))}else{var u=t.splitText(a.length);r.push(new rr(a,HC(n,t))),t=u}else MA.SUPPORT_RANGE_BOUNDS||(t=t.splitText(a.length));s+=a.length}),r},HC=function(n,e){var A=e.ownerDocument;if(A){var t=A.createElement("html2canvaswrapper");t.appendChild(e.cloneNode(!0));var i=e.parentNode;if(i){i.replaceChild(t,e);var r=$s(n,t);return t.firstChild&&i.replaceChild(t.firstChild,t),r}}return Pt.EMPTY},Qu=function(n,e,A){var t=n.ownerDocument;if(!t)throw new Error("Node has no owner document");var i=t.createRange();return i.setStart(n,e),i.setEnd(n,e+A),i},cl=function(n){if(MA.SUPPORT_NATIVE_TEXT_SEGMENTATION){var e=new Intl.Segmenter(void 0,{granularity:"grapheme"});return Array.from(e.segment(n)).map(function(A){return A.segment})}return FC(n)},PC=function(n,e){if(MA.SUPPORT_NATIVE_TEXT_SEGMENTATION){var A=new Intl.Segmenter(void 0,{granularity:"word"});return Array.from(A.segment(n)).map(function(t){return t.segment})}return GC(n,e)},NC=function(n,e){return e.letterSpacing!==0?cl(n):PC(n,e)},OC=[32,160,4961,65792,65793,4153,4241],GC=function(n,e){for(var A=dw(n,{lineBreak:e.lineBreak,wordBreak:e.overflowWrap==="break-word"?"break-word":e.wordBreak}),t=[],i,r=function(){if(i.value){var s=i.value.slice(),a=js(s),o="";a.forEach(function(l){OC.indexOf(l)===-1?o+=pA(l):(o.length&&t.push(o),t.push(pA(l)),o="")}),o.length&&t.push(o)}};!(i=A.next()).done;)r();return t},VC=function(){function n(e,A,t){this.text=KC(A.data,t.textTransform),this.textBounds=DC(e,this.text,t,A)}return n}(),KC=function(n,e){switch(e){case 1:return n.toLowerCase();case 3:return n.replace(kC,zC);case 2:return n.toUpperCase();default:return n}},kC=/(^|\s|:|-|\(|\))([a-z])/g,zC=function(n,e,A){return n.length>0?e+A.toUpperCase():n},hf=function(n){dt(e,n);function e(A,t){var i=n.call(this,A,t)||this;return i.src=t.currentSrc||t.src,i.intrinsicWidth=t.naturalWidth,i.intrinsicHeight=t.naturalHeight,i.context.cache.addImage(i.src),i}return e}(Ct),ff=function(n){dt(e,n);function e(A,t){var i=n.call(this,A,t)||this;return i.canvas=t,i.intrinsicWidth=t.width,i.intrinsicHeight=t.height,i}return e}(Ct),df=function(n){dt(e,n);function e(A,t){var i=n.call(this,A,t)||this,r=new XMLSerializer,s=$s(A,t);return t.setAttribute("width",s.width+"px"),t.setAttribute("height",s.height+"px"),i.svg="data:image/svg+xml,"+encodeURIComponent(r.serializeToString(t)),i.intrinsicWidth=t.width.baseVal.value,i.intrinsicHeight=t.height.baseVal.value,i.context.cache.addImage(i.svg),i}return e}(Ct),pf=function(n){dt(e,n);function e(A,t){var i=n.call(this,A,t)||this;return i.value=t.value,i}return e}(Ct),zo=function(n){dt(e,n);function e(A,t){var i=n.call(this,A,t)||this;return i.start=t.start,i.reversed=typeof t.reversed=="boolean"&&t.reversed===!0,i}return e}(Ct),WC=[{type:15,flags:0,unit:"px",number:3}],XC=[{type:16,flags:0,number:50}],YC=function(n){return n.width>n.height?new Pt(n.left+(n.width-n.height)/2,n.top,n.height,n.height):n.width<n.height?new Pt(n.left,n.top+(n.height-n.width)/2,n.width,n.width):n},JC=function(n){var e=n.type===ZC?new Array(n.value.length+1).join("•"):n.value;return e.length===0?n.placeholder||"":e},Hs="checkbox",Ps="radio",ZC="password",Lu=707406591,ul=function(n){dt(e,n);function e(A,t){var i=n.call(this,A,t)||this;switch(i.type=t.type.toLowerCase(),i.checked=t.checked,i.value=JC(t),(i.type===Hs||i.type===Ps)&&(i.styles.backgroundColor=3739148031,i.styles.borderTopColor=i.styles.borderRightColor=i.styles.borderBottomColor=i.styles.borderLeftColor=2779096575,i.styles.borderTopWidth=i.styles.borderRightWidth=i.styles.borderBottomWidth=i.styles.borderLeftWidth=1,i.styles.borderTopStyle=i.styles.borderRightStyle=i.styles.borderBottomStyle=i.styles.borderLeftStyle=1,i.styles.backgroundClip=[0],i.styles.backgroundOrigin=[0],i.bounds=YC(i.bounds)),i.type){case Hs:i.styles.borderTopRightRadius=i.styles.borderTopLeftRadius=i.styles.borderBottomRightRadius=i.styles.borderBottomLeftRadius=WC;break;case Ps:i.styles.borderTopRightRadius=i.styles.borderTopLeftRadius=i.styles.borderBottomRightRadius=i.styles.borderBottomLeftRadius=XC;break}return i}return e}(Ct),gf=function(n){dt(e,n);function e(A,t){var i=n.call(this,A,t)||this,r=t.options[t.selectedIndex||0];return i.value=r&&r.text||"",i}return e}(Ct),mf=function(n){dt(e,n);function e(A,t){var i=n.call(this,A,t)||this;return i.value=t.value,i}return e}(Ct),Bf=function(n){dt(e,n);function e(A,t){var i=n.call(this,A,t)||this;i.src=t.src,i.width=parseInt(t.width,10)||0,i.height=parseInt(t.height,10)||0,i.backgroundColor=i.styles.backgroundColor;try{if(t.contentWindow&&t.contentWindow.document&&t.contentWindow.document.documentElement){i.tree=vf(A,t.contentWindow.document.documentElement);var r=t.contentWindow.document.documentElement?nr(A,getComputedStyle(t.contentWindow.document.documentElement).backgroundColor):Dt.TRANSPARENT,s=t.contentWindow.document.body?nr(A,getComputedStyle(t.contentWindow.document.body).backgroundColor):Dt.TRANSPARENT;i.backgroundColor=an(r)?an(s)?i.styles.backgroundColor:s:r}}catch{}return i}return e}(Ct),qC=["OL","UL","MENU"],Us=function(n,e,A,t){for(var i=e.firstChild,r=void 0;i;i=r)if(r=i.nextSibling,_f(i)&&i.data.trim().length>0)A.textNodes.push(new VC(n,i,A.styles));else if(di(i))if(Uf(i)&&i.assignedNodes)i.assignedNodes().forEach(function(a){return Us(n,a,A,t)});else{var s=wf(n,i);s.styles.isVisible()&&($C(i,s,t)?s.flags|=4:jC(s.styles)&&(s.flags|=2),qC.indexOf(i.tagName)!==-1&&(s.flags|=8),A.elements.push(s),i.slot,i.shadowRoot?Us(n,i.shadowRoot,s,t):!Ns(i)&&!Cf(i)&&!Os(i)&&Us(n,i,s,t))}},wf=function(n,e){return Xo(e)?new hf(n,e):Ef(e)?new ff(n,e):Cf(e)?new df(n,e):eE(e)?new pf(n,e):AE(e)?new zo(n,e):tE(e)?new ul(n,e):Os(e)?new gf(n,e):Ns(e)?new mf(n,e):xf(e)?new Bf(n,e):new Ct(n,e)},vf=function(n,e){var A=wf(n,e);return A.flags|=4,Us(n,e,A,A),A},$C=function(n,e,A){return e.styles.isPositionedWithZIndex()||e.styles.opacity<1||e.styles.isTransformed()||hl(n)&&A.styles.isTransparent()},jC=function(n){return n.isPositioned()||n.isFloating()},_f=function(n){return n.nodeType===Node.TEXT_NODE},di=function(n){return n.nodeType===Node.ELEMENT_NODE},Wo=function(n){return di(n)&&typeof n.style<"u"&&!ys(n)},ys=function(n){return typeof n.className=="object"},eE=function(n){return n.tagName==="LI"},AE=function(n){return n.tagName==="OL"},tE=function(n){return n.tagName==="INPUT"},nE=function(n){return n.tagName==="HTML"},Cf=function(n){return n.tagName==="svg"},hl=function(n){return n.tagName==="BODY"},Ef=function(n){return n.tagName==="CANVAS"},Iu=function(n){return n.tagName==="VIDEO"},Xo=function(n){return n.tagName==="IMG"},xf=function(n){return n.tagName==="IFRAME"},Ru=function(n){return n.tagName==="STYLE"},iE=function(n){return n.tagName==="SCRIPT"},Ns=function(n){return n.tagName==="TEXTAREA"},Os=function(n){return n.tagName==="SELECT"},Uf=function(n){return n.tagName==="SLOT"},Du=function(n){return n.tagName.indexOf("-")>0},rE=function(){function n(){this.counters={}}return n.prototype.getCounterValue=function(e){var A=this.counters[e];return A&&A.length?A[A.length-1]:1},n.prototype.getCounterValues=function(e){var A=this.counters[e];return A||[]},n.prototype.pop=function(e){var A=this;e.forEach(function(t){return A.counters[t].pop()})},n.prototype.parse=function(e){var A=this,t=e.counterIncrement,i=e.counterReset,r=!0;t!==null&&t.forEach(function(a){var o=A.counters[a.counter];o&&a.increment!==0&&(r=!1,o.length||o.push(1),o[Math.max(0,o.length-1)]+=a.increment)});var s=[];return r&&i.forEach(function(a){var o=A.counters[a.counter];s.push(a.counter),o||(o=A.counters[a.counter]=[]),o.push(a.reset)}),s},n}(),Hu={integers:[1e3,900,500,400,100,90,50,40,10,9,5,4,1],values:["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]},Pu={integers:[9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["Ք","Փ","Ւ","Ց","Ր","Տ","Վ","Ս","Ռ","Ջ","Պ","Չ","Ո","Շ","Ն","Յ","Մ","Ճ","Ղ","Ձ","Հ","Կ","Ծ","Խ","Լ","Ի","Ժ","Թ","Ը","Է","Զ","Ե","Դ","Գ","Բ","Ա"]},sE={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,400,300,200,100,90,80,70,60,50,40,30,20,19,18,17,16,15,10,9,8,7,6,5,4,3,2,1],values:["י׳","ט׳","ח׳","ז׳","ו׳","ה׳","ד׳","ג׳","ב׳","א׳","ת","ש","ר","ק","צ","פ","ע","ס","נ","מ","ל","כ","יט","יח","יז","טז","טו","י","ט","ח","ז","ו","ה","ד","ג","ב","א"]},aE={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["ჵ","ჰ","ჯ","ჴ","ხ","ჭ","წ","ძ","ც","ჩ","შ","ყ","ღ","ქ","ფ","ჳ","ტ","ს","რ","ჟ","პ","ო","ჲ","ნ","მ","ლ","კ","ი","თ","ჱ","ზ","ვ","ე","დ","გ","ბ","ა"]},ri=function(n,e,A,t,i,r){return n<e||n>A?pr(n,i,r.length>0):t.integers.reduce(function(s,a,o){for(;n>=a;)n-=a,s+=t.values[o];return s},"")+r},yf=function(n,e,A,t){var i="";do A||n--,i=t(n)+i,n/=e;while(n*e>=e);return i},dA=function(n,e,A,t,i){var r=A-e+1;return(n<0?"-":"")+(yf(Math.abs(n),r,t,function(s){return pA(Math.floor(s%r)+e)})+i)},Bn=function(n,e,A){A===void 0&&(A=". ");var t=e.length;return yf(Math.abs(n),t,!1,function(i){return e[Math.floor(i%t)]})+A},ci=1,zt=2,Wt=4,$i=8,bt=function(n,e,A,t,i,r){if(n<-9999||n>9999)return pr(n,4,i.length>0);var s=Math.abs(n),a=i;if(s===0)return e[0]+a;for(var o=0;s>0&&o<=4;o++){var l=s%10;l===0&&wA(r,ci)&&a!==""?a=e[l]+a:l>1||l===1&&o===0||l===1&&o===1&&wA(r,zt)||l===1&&o===1&&wA(r,Wt)&&n>100||l===1&&o>1&&wA(r,$i)?a=e[l]+(o>0?A[o-1]:"")+a:l===1&&o>0&&(a=A[o-1]+a),s=Math.floor(s/10)}return(n<0?t:"")+a},Nu="十百千萬",Ou="拾佰仟萬",Gu="マイナス",so="마이너스",pr=function(n,e,A){var t=A?". ":"",i=A?"、":"",r=A?", ":"",s=A?" ":"";switch(e){case 0:return"•"+s;case 1:return"◦"+s;case 2:return"◾"+s;case 5:var a=dA(n,48,57,!0,t);return a.length<4?"0"+a:a;case 4:return Bn(n,"〇一二三四五六七八九",i);case 6:return ri(n,1,3999,Hu,3,t).toLowerCase();case 7:return ri(n,1,3999,Hu,3,t);case 8:return dA(n,945,969,!1,t);case 9:return dA(n,97,122,!1,t);case 10:return dA(n,65,90,!1,t);case 11:return dA(n,1632,1641,!0,t);case 12:case 49:return ri(n,1,9999,Pu,3,t);case 35:return ri(n,1,9999,Pu,3,t).toLowerCase();case 13:return dA(n,2534,2543,!0,t);case 14:case 30:return dA(n,6112,6121,!0,t);case 15:return Bn(n,"子丑寅卯辰巳午未申酉戌亥",i);case 16:return Bn(n,"甲乙丙丁戊己庚辛壬癸",i);case 17:case 48:return bt(n,"零一二三四五六七八九",Nu,"負",i,zt|Wt|$i);case 47:return bt(n,"零壹貳參肆伍陸柒捌玖",Ou,"負",i,ci|zt|Wt|$i);case 42:return bt(n,"零一二三四五六七八九",Nu,"负",i,zt|Wt|$i);case 41:return bt(n,"零壹贰叁肆伍陆柒捌玖",Ou,"负",i,ci|zt|Wt|$i);case 26:return bt(n,"〇一二三四五六七八九","十百千万",Gu,i,0);case 25:return bt(n,"零壱弐参四伍六七八九","拾百千万",Gu,i,ci|zt|Wt);case 31:return bt(n,"영일이삼사오육칠팔구","십백천만",so,r,ci|zt|Wt);case 33:return bt(n,"零一二三四五六七八九","十百千萬",so,r,0);case 32:return bt(n,"零壹貳參四五六七八九","拾百千",so,r,ci|zt|Wt);case 18:return dA(n,2406,2415,!0,t);case 20:return ri(n,1,19999,aE,3,t);case 21:return dA(n,2790,2799,!0,t);case 22:return dA(n,2662,2671,!0,t);case 22:return ri(n,1,10999,sE,3,t);case 23:return Bn(n,"あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");case 24:return Bn(n,"いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");case 27:return dA(n,3302,3311,!0,t);case 28:return Bn(n,"アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン",i);case 29:return Bn(n,"イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス",i);case 34:return dA(n,3792,3801,!0,t);case 37:return dA(n,6160,6169,!0,t);case 38:return dA(n,4160,4169,!0,t);case 39:return dA(n,2918,2927,!0,t);case 40:return dA(n,1776,1785,!0,t);case 43:return dA(n,3046,3055,!0,t);case 44:return dA(n,3174,3183,!0,t);case 45:return dA(n,3664,3673,!0,t);case 46:return dA(n,3872,3881,!0,t);case 3:default:return dA(n,48,57,!0,t)}},Sf="data-html2canvas-ignore",Vu=function(){function n(e,A,t){if(this.context=e,this.options=t,this.scrolledElements=[],this.referenceElement=A,this.counters=new rE,this.quoteDepth=0,!A.ownerDocument)throw new Error("Cloned element does not have an owner document");this.documentElement=this.cloneNode(A.ownerDocument.documentElement,!1)}return n.prototype.toIFrame=function(e,A){var t=this,i=oE(e,A);if(!i.contentWindow)return Promise.reject("Unable to find iframe window");var r=e.defaultView.pageXOffset,s=e.defaultView.pageYOffset,a=i.contentWindow,o=a.document,l=uE(i).then(function(){return GA(t,void 0,void 0,function(){var c,u;return RA(this,function(h){switch(h.label){case 0:return this.scrolledElements.forEach(pE),a&&(a.scrollTo(A.left,A.top),/(iPad|iPhone|iPod)/g.test(navigator.userAgent)&&(a.scrollY!==A.top||a.scrollX!==A.left)&&(this.context.logger.warn("Unable to restore scroll position for cloned document"),this.context.windowBounds=this.context.windowBounds.add(a.scrollX-A.left,a.scrollY-A.top,0,0))),c=this.options.onclone,u=this.clonedReferenceElement,typeof u>"u"?[2,Promise.reject("Error finding the "+this.referenceElement.nodeName+" in the cloned document")]:o.fonts&&o.fonts.ready?[4,o.fonts.ready]:[3,2];case 1:h.sent(),h.label=2;case 2:return/(AppleWebKit)/g.test(navigator.userAgent)?[4,cE(o)]:[3,4];case 3:h.sent(),h.label=4;case 4:return typeof c=="function"?[2,Promise.resolve().then(function(){return c(o,u)}).then(function(){return i})]:[2,i]}})})});return o.open(),o.write(fE(document.doctype)+"<html></html>"),dE(this.referenceElement.ownerDocument,r,s),o.replaceChild(o.adoptNode(this.documentElement),o.documentElement),o.close(),l},n.prototype.createElementClone=function(e){if(Ko(e,2))debugger;if(Ef(e))return this.createCanvasClone(e);if(Iu(e))return this.createVideoClone(e);if(Ru(e))return this.createStyleClone(e);var A=e.cloneNode(!1);return Xo(A)&&(Xo(e)&&e.currentSrc&&e.currentSrc!==e.src&&(A.src=e.currentSrc,A.srcset=""),A.loading==="lazy"&&(A.loading="eager")),Du(A)?this.createCustomElementClone(A):A},n.prototype.createCustomElementClone=function(e){var A=document.createElement("html2canvascustomelement");return ao(e.style,A),A},n.prototype.createStyleClone=function(e){try{var A=e.sheet;if(A&&A.cssRules){var t=[].slice.call(A.cssRules,0).reduce(function(r,s){return s&&typeof s.cssText=="string"?r+s.cssText:r},""),i=e.cloneNode(!1);return i.textContent=t,i}}catch(r){if(this.context.logger.error("Unable to access cssRules property",r),r.name!=="SecurityError")throw r}return e.cloneNode(!1)},n.prototype.createCanvasClone=function(e){var A;if(this.options.inlineImages&&e.ownerDocument){var t=e.ownerDocument.createElement("img");try{return t.src=e.toDataURL(),t}catch{this.context.logger.info("Unable to inline canvas contents, canvas is tainted",e)}}var i=e.cloneNode(!1);try{i.width=e.width,i.height=e.height;var r=e.getContext("2d"),s=i.getContext("2d");if(s)if(!this.options.allowTaint&&r)s.putImageData(r.getImageData(0,0,e.width,e.height),0,0);else{var a=(A=e.getContext("webgl2"))!==null&&A!==void 0?A:e.getContext("webgl");if(a){var o=a.getContextAttributes();(o==null?void 0:o.preserveDrawingBuffer)===!1&&this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false",e)}s.drawImage(e,0,0)}return i}catch{this.context.logger.info("Unable to clone canvas as it is tainted",e)}return i},n.prototype.createVideoClone=function(e){var A=e.ownerDocument.createElement("canvas");A.width=e.offsetWidth,A.height=e.offsetHeight;var t=A.getContext("2d");try{return t&&(t.drawImage(e,0,0,A.width,A.height),this.options.allowTaint||t.getImageData(0,0,A.width,A.height)),A}catch{this.context.logger.info("Unable to clone video as it is tainted",e)}var i=e.ownerDocument.createElement("canvas");return i.width=e.offsetWidth,i.height=e.offsetHeight,i},n.prototype.appendChildNode=function(e,A,t){(!di(A)||!iE(A)&&!A.hasAttribute(Sf)&&(typeof this.options.ignoreElements!="function"||!this.options.ignoreElements(A)))&&(!this.options.copyStyles||!di(A)||!Ru(A))&&e.appendChild(this.cloneNode(A,t))},n.prototype.cloneChildNodes=function(e,A,t){for(var i=this,r=e.shadowRoot?e.shadowRoot.firstChild:e.firstChild;r;r=r.nextSibling)if(di(r)&&Uf(r)&&typeof r.assignedNodes=="function"){var s=r.assignedNodes();s.length&&s.forEach(function(a){return i.appendChildNode(A,a,t)})}else this.appendChildNode(A,r,t)},n.prototype.cloneNode=function(e,A){if(_f(e))return document.createTextNode(e.data);if(!e.ownerDocument)return e.cloneNode(!1);var t=e.ownerDocument.defaultView;if(t&&di(e)&&(Wo(e)||ys(e))){var i=this.createElementClone(e);i.style.transitionProperty="none";var r=t.getComputedStyle(e),s=t.getComputedStyle(e,":before"),a=t.getComputedStyle(e,":after");this.referenceElement===e&&Wo(i)&&(this.clonedReferenceElement=i),hl(i)&&BE(i);var o=this.counters.parse(new wu(this.context,r)),l=this.resolvePseudoContent(e,i,s,sr.BEFORE);Du(e)&&(A=!0),Iu(e)||this.cloneChildNodes(e,i,A),l&&i.insertBefore(l,i.firstChild);var c=this.resolvePseudoContent(e,i,a,sr.AFTER);return c&&i.appendChild(c),this.counters.pop(o),(r&&(this.options.copyStyles||ys(e))&&!xf(e)||A)&&ao(r,i),(e.scrollTop!==0||e.scrollLeft!==0)&&this.scrolledElements.push([i,e.scrollLeft,e.scrollTop]),(Ns(e)||Os(e))&&(Ns(i)||Os(i))&&(i.value=e.value),i}return e.cloneNode(!1)},n.prototype.resolvePseudoContent=function(e,A,t,i){var r=this;if(t){var s=t.content,a=A.ownerDocument;if(!(!a||!s||s==="none"||s==="-moz-alt-content"||t.display==="none")){this.counters.parse(new wu(this.context,t));var o=new eC(this.context,t),l=a.createElement("html2canvaspseudoelement");ao(t,l),o.content.forEach(function(u){if(u.type===0)l.appendChild(a.createTextNode(u.value));else if(u.type===22){var h=a.createElement("img");h.src=u.value,h.style.opacity="1",l.appendChild(h)}else if(u.type===18){if(u.name==="attr"){var p=u.values.filter(AA);p.length&&l.appendChild(a.createTextNode(e.getAttribute(p[0].value)||""))}else if(u.name==="counter"){var g=u.values.filter(Ti),m=g[0],d=g[1];if(m&&AA(m)){var f=r.counters.getCounterValue(m.value),C=d&&AA(d)?Vo.parse(r.context,d.value):3;l.appendChild(a.createTextNode(pr(f,C,!1)))}}else if(u.name==="counters"){var v=u.values.filter(Ti),m=v[0],E=v[1],d=v[2];if(m&&AA(m)){var b=r.counters.getCounterValues(m.value),U=d&&AA(d)?Vo.parse(r.context,d.value):3,y=E&&E.type===0?E.value:"",H=b.map(function(M){return pr(M,U,!1)}).join(y);l.appendChild(a.createTextNode(H))}}}else if(u.type===20)switch(u.value){case"open-quote":l.appendChild(a.createTextNode(Bu(o.quotes,r.quoteDepth++,!0)));break;case"close-quote":l.appendChild(a.createTextNode(Bu(o.quotes,--r.quoteDepth,!1)));break;default:l.appendChild(a.createTextNode(u.value))}}),l.className=Yo+" "+Jo;var c=i===sr.BEFORE?" "+Yo:" "+Jo;return ys(A)?A.className.baseValue+=c:A.className+=c,l}}},n.destroy=function(e){return e.parentNode?(e.parentNode.removeChild(e),!0):!1},n}(),sr;(function(n){n[n.BEFORE=0]="BEFORE",n[n.AFTER=1]="AFTER"})(sr||(sr={}));var oE=function(n,e){var A=n.createElement("iframe");return A.className="html2canvas-container",A.style.visibility="hidden",A.style.position="fixed",A.style.left="-10000px",A.style.top="0px",A.style.border="0",A.width=e.width.toString(),A.height=e.height.toString(),A.scrolling="no",A.setAttribute(Sf,"true"),n.body.appendChild(A),A},lE=function(n){return new Promise(function(e){if(n.complete){e();return}if(!n.src){e();return}n.onload=e,n.onerror=e})},cE=function(n){return Promise.all([].slice.call(n.images,0).map(lE))},uE=function(n){return new Promise(function(e,A){var t=n.contentWindow;if(!t)return A("No window assigned for iframe");var i=t.document;t.onload=n.onload=function(){t.onload=n.onload=null;var r=setInterval(function(){i.body.childNodes.length>0&&i.readyState==="complete"&&(clearInterval(r),e(n))},50)}})},hE=["all","d","content"],ao=function(n,e){for(var A=n.length-1;A>=0;A--){var t=n.item(A);hE.indexOf(t)===-1&&e.style.setProperty(t,n.getPropertyValue(t))}return e},fE=function(n){var e="";return n&&(e+="<!DOCTYPE ",n.name&&(e+=n.name),n.internalSubset&&(e+=n.internalSubset),n.publicId&&(e+='"'+n.publicId+'"'),n.systemId&&(e+='"'+n.systemId+'"'),e+=">"),e},dE=function(n,e,A){n&&n.defaultView&&(e!==n.defaultView.pageXOffset||A!==n.defaultView.pageYOffset)&&n.defaultView.scrollTo(e,A)},pE=function(n){var e=n[0],A=n[1],t=n[2];e.scrollLeft=A,e.scrollTop=t},gE=":before",mE=":after",Yo="___html2canvas___pseudoelement_before",Jo="___html2canvas___pseudoelement_after",Ku=`{
    content: "" !important;
    display: none !important;
}`,BE=function(n){wE(n,"."+Yo+gE+Ku+`
         .`+Jo+mE+Ku)},wE=function(n,e){var A=n.ownerDocument;if(A){var t=A.createElement("style");t.textContent=e,n.appendChild(t)}},Mf=function(){function n(){}return n.getOrigin=function(e){var A=n._link;return A?(A.href=e,A.href=A.href,A.protocol+A.hostname+A.port):"about:blank"},n.isSameOrigin=function(e){return n.getOrigin(e)===n._origin},n.setContext=function(e){n._link=e.document.createElement("a"),n._origin=n.getOrigin(e.location.href)},n._origin="about:blank",n}(),vE=function(){function n(e,A){this.context=e,this._options=A,this._cache={}}return n.prototype.addImage=function(e){var A=Promise.resolve();return this.has(e)||(lo(e)||xE(e))&&(this._cache[e]=this.loadImage(e)).catch(function(){}),A},n.prototype.match=function(e){return this._cache[e]},n.prototype.loadImage=function(e){return GA(this,void 0,void 0,function(){var A,t,i,r,s=this;return RA(this,function(a){switch(a.label){case 0:return A=Mf.isSameOrigin(e),t=!oo(e)&&this._options.useCORS===!0&&MA.SUPPORT_CORS_IMAGES&&!A,i=!oo(e)&&!A&&!lo(e)&&typeof this._options.proxy=="string"&&MA.SUPPORT_CORS_XHR&&!t,!A&&this._options.allowTaint===!1&&!oo(e)&&!lo(e)&&!i&&!t?[2]:(r=e,i?[4,this.proxy(r)]:[3,2]);case 1:r=a.sent(),a.label=2;case 2:return this.context.logger.debug("Added image "+e.substring(0,256)),[4,new Promise(function(o,l){var c=new Image;c.onload=function(){return o(c)},c.onerror=l,(UE(r)||t)&&(c.crossOrigin="anonymous"),c.src=r,c.complete===!0&&setTimeout(function(){return o(c)},500),s._options.imageTimeout>0&&setTimeout(function(){return l("Timed out ("+s._options.imageTimeout+"ms) loading image")},s._options.imageTimeout)})];case 3:return[2,a.sent()]}})})},n.prototype.has=function(e){return typeof this._cache[e]<"u"},n.prototype.keys=function(){return Promise.resolve(Object.keys(this._cache))},n.prototype.proxy=function(e){var A=this,t=this._options.proxy;if(!t)throw new Error("No proxy defined");var i=e.substring(0,256);return new Promise(function(r,s){var a=MA.SUPPORT_RESPONSE_TYPE?"blob":"text",o=new XMLHttpRequest;o.onload=function(){if(o.status===200)if(a==="text")r(o.response);else{var u=new FileReader;u.addEventListener("load",function(){return r(u.result)},!1),u.addEventListener("error",function(h){return s(h)},!1),u.readAsDataURL(o.response)}else s("Failed to proxy resource "+i+" with status code "+o.status)},o.onerror=s;var l=t.indexOf("?")>-1?"&":"?";if(o.open("GET",""+t+l+"url="+encodeURIComponent(e)+"&responseType="+a),a!=="text"&&o instanceof XMLHttpRequest&&(o.responseType=a),A._options.imageTimeout){var c=A._options.imageTimeout;o.timeout=c,o.ontimeout=function(){return s("Timed out ("+c+"ms) proxying "+i)}}o.send()})},n}(),_E=/^data:image\/svg\+xml/i,CE=/^data:image\/.*;base64,/i,EE=/^data:image\/.*/i,xE=function(n){return MA.SUPPORT_SVG_DRAWING||!yE(n)},oo=function(n){return EE.test(n)},UE=function(n){return CE.test(n)},lo=function(n){return n.substr(0,4)==="blob"},yE=function(n){return n.substr(-3).toLowerCase()==="svg"||_E.test(n)},le=function(){function n(e,A){this.type=0,this.x=e,this.y=A}return n.prototype.add=function(e,A){return new n(this.x+e,this.y+A)},n}(),si=function(n,e,A){return new le(n.x+(e.x-n.x)*A,n.y+(e.y-n.y)*A)},ps=function(){function n(e,A,t,i){this.type=1,this.start=e,this.startControl=A,this.endControl=t,this.end=i}return n.prototype.subdivide=function(e,A){var t=si(this.start,this.startControl,e),i=si(this.startControl,this.endControl,e),r=si(this.endControl,this.end,e),s=si(t,i,e),a=si(i,r,e),o=si(s,a,e);return A?new n(this.start,t,s,o):new n(o,a,r,this.end)},n.prototype.add=function(e,A){return new n(this.start.add(e,A),this.startControl.add(e,A),this.endControl.add(e,A),this.end.add(e,A))},n.prototype.reverse=function(){return new n(this.end,this.endControl,this.startControl,this.start)},n}(),tt=function(n){return n.type===1},SE=function(){function n(e){var A=e.styles,t=e.bounds,i=Zi(A.borderTopLeftRadius,t.width,t.height),r=i[0],s=i[1],a=Zi(A.borderTopRightRadius,t.width,t.height),o=a[0],l=a[1],c=Zi(A.borderBottomRightRadius,t.width,t.height),u=c[0],h=c[1],p=Zi(A.borderBottomLeftRadius,t.width,t.height),g=p[0],m=p[1],d=[];d.push((r+o)/t.width),d.push((g+u)/t.width),d.push((s+m)/t.height),d.push((l+h)/t.height);var f=Math.max.apply(Math,d);f>1&&(r/=f,s/=f,o/=f,l/=f,u/=f,h/=f,g/=f,m/=f);var C=t.width-o,v=t.height-h,E=t.width-u,b=t.height-m,U=A.borderTopWidth,y=A.borderRightWidth,H=A.borderBottomWidth,K=A.borderLeftWidth,B=rA(A.paddingTop,e.bounds.width),M=rA(A.paddingRight,e.bounds.width),k=rA(A.paddingBottom,e.bounds.width),z=rA(A.paddingLeft,e.bounds.width);this.topLeftBorderDoubleOuterBox=r>0||s>0?lA(t.left+K/3,t.top+U/3,r-K/3,s-U/3,je.TOP_LEFT):new le(t.left+K/3,t.top+U/3),this.topRightBorderDoubleOuterBox=r>0||s>0?lA(t.left+C,t.top+U/3,o-y/3,l-U/3,je.TOP_RIGHT):new le(t.left+t.width-y/3,t.top+U/3),this.bottomRightBorderDoubleOuterBox=u>0||h>0?lA(t.left+E,t.top+v,u-y/3,h-H/3,je.BOTTOM_RIGHT):new le(t.left+t.width-y/3,t.top+t.height-H/3),this.bottomLeftBorderDoubleOuterBox=g>0||m>0?lA(t.left+K/3,t.top+b,g-K/3,m-H/3,je.BOTTOM_LEFT):new le(t.left+K/3,t.top+t.height-H/3),this.topLeftBorderDoubleInnerBox=r>0||s>0?lA(t.left+K*2/3,t.top+U*2/3,r-K*2/3,s-U*2/3,je.TOP_LEFT):new le(t.left+K*2/3,t.top+U*2/3),this.topRightBorderDoubleInnerBox=r>0||s>0?lA(t.left+C,t.top+U*2/3,o-y*2/3,l-U*2/3,je.TOP_RIGHT):new le(t.left+t.width-y*2/3,t.top+U*2/3),this.bottomRightBorderDoubleInnerBox=u>0||h>0?lA(t.left+E,t.top+v,u-y*2/3,h-H*2/3,je.BOTTOM_RIGHT):new le(t.left+t.width-y*2/3,t.top+t.height-H*2/3),this.bottomLeftBorderDoubleInnerBox=g>0||m>0?lA(t.left+K*2/3,t.top+b,g-K*2/3,m-H*2/3,je.BOTTOM_LEFT):new le(t.left+K*2/3,t.top+t.height-H*2/3),this.topLeftBorderStroke=r>0||s>0?lA(t.left+K/2,t.top+U/2,r-K/2,s-U/2,je.TOP_LEFT):new le(t.left+K/2,t.top+U/2),this.topRightBorderStroke=r>0||s>0?lA(t.left+C,t.top+U/2,o-y/2,l-U/2,je.TOP_RIGHT):new le(t.left+t.width-y/2,t.top+U/2),this.bottomRightBorderStroke=u>0||h>0?lA(t.left+E,t.top+v,u-y/2,h-H/2,je.BOTTOM_RIGHT):new le(t.left+t.width-y/2,t.top+t.height-H/2),this.bottomLeftBorderStroke=g>0||m>0?lA(t.left+K/2,t.top+b,g-K/2,m-H/2,je.BOTTOM_LEFT):new le(t.left+K/2,t.top+t.height-H/2),this.topLeftBorderBox=r>0||s>0?lA(t.left,t.top,r,s,je.TOP_LEFT):new le(t.left,t.top),this.topRightBorderBox=o>0||l>0?lA(t.left+C,t.top,o,l,je.TOP_RIGHT):new le(t.left+t.width,t.top),this.bottomRightBorderBox=u>0||h>0?lA(t.left+E,t.top+v,u,h,je.BOTTOM_RIGHT):new le(t.left+t.width,t.top+t.height),this.bottomLeftBorderBox=g>0||m>0?lA(t.left,t.top+b,g,m,je.BOTTOM_LEFT):new le(t.left,t.top+t.height),this.topLeftPaddingBox=r>0||s>0?lA(t.left+K,t.top+U,Math.max(0,r-K),Math.max(0,s-U),je.TOP_LEFT):new le(t.left+K,t.top+U),this.topRightPaddingBox=o>0||l>0?lA(t.left+Math.min(C,t.width-y),t.top+U,C>t.width+y?0:Math.max(0,o-y),Math.max(0,l-U),je.TOP_RIGHT):new le(t.left+t.width-y,t.top+U),this.bottomRightPaddingBox=u>0||h>0?lA(t.left+Math.min(E,t.width-K),t.top+Math.min(v,t.height-H),Math.max(0,u-y),Math.max(0,h-H),je.BOTTOM_RIGHT):new le(t.left+t.width-y,t.top+t.height-H),this.bottomLeftPaddingBox=g>0||m>0?lA(t.left+K,t.top+Math.min(b,t.height-H),Math.max(0,g-K),Math.max(0,m-H),je.BOTTOM_LEFT):new le(t.left+K,t.top+t.height-H),this.topLeftContentBox=r>0||s>0?lA(t.left+K+z,t.top+U+B,Math.max(0,r-(K+z)),Math.max(0,s-(U+B)),je.TOP_LEFT):new le(t.left+K+z,t.top+U+B),this.topRightContentBox=o>0||l>0?lA(t.left+Math.min(C,t.width+K+z),t.top+U+B,C>t.width+K+z?0:o-K+z,l-(U+B),je.TOP_RIGHT):new le(t.left+t.width-(y+M),t.top+U+B),this.bottomRightContentBox=u>0||h>0?lA(t.left+Math.min(E,t.width-(K+z)),t.top+Math.min(v,t.height+U+B),Math.max(0,u-(y+M)),h-(H+k),je.BOTTOM_RIGHT):new le(t.left+t.width-(y+M),t.top+t.height-(H+k)),this.bottomLeftContentBox=g>0||m>0?lA(t.left+K+z,t.top+b,Math.max(0,g-(K+z)),m-(H+k),je.BOTTOM_LEFT):new le(t.left+K+z,t.top+t.height-(H+k))}return n}(),je;(function(n){n[n.TOP_LEFT=0]="TOP_LEFT",n[n.TOP_RIGHT=1]="TOP_RIGHT",n[n.BOTTOM_RIGHT=2]="BOTTOM_RIGHT",n[n.BOTTOM_LEFT=3]="BOTTOM_LEFT"})(je||(je={}));var lA=function(n,e,A,t,i){var r=4*((Math.sqrt(2)-1)/3),s=A*r,a=t*r,o=n+A,l=e+t;switch(i){case je.TOP_LEFT:return new ps(new le(n,l),new le(n,l-a),new le(o-s,e),new le(o,e));case je.TOP_RIGHT:return new ps(new le(n,e),new le(n+s,e),new le(o,l-a),new le(o,l));case je.BOTTOM_RIGHT:return new ps(new le(o,e),new le(o,e+a),new le(n+s,l),new le(n,l));case je.BOTTOM_LEFT:default:return new ps(new le(o,l),new le(o-s,l),new le(n,e+a),new le(n,e))}},Gs=function(n){return[n.topLeftBorderBox,n.topRightBorderBox,n.bottomRightBorderBox,n.bottomLeftBorderBox]},ME=function(n){return[n.topLeftContentBox,n.topRightContentBox,n.bottomRightContentBox,n.bottomLeftContentBox]},Vs=function(n){return[n.topLeftPaddingBox,n.topRightPaddingBox,n.bottomRightPaddingBox,n.bottomLeftPaddingBox]},FE=function(){function n(e,A,t){this.offsetX=e,this.offsetY=A,this.matrix=t,this.type=0,this.target=6}return n}(),gs=function(){function n(e,A){this.path=e,this.target=A,this.type=1}return n}(),bE=function(){function n(e){this.opacity=e,this.type=2,this.target=6}return n}(),TE=function(n){return n.type===0},Ff=function(n){return n.type===1},QE=function(n){return n.type===2},ku=function(n,e){return n.length===e.length?n.some(function(A,t){return A===e[t]}):!1},LE=function(n,e,A,t,i){return n.map(function(r,s){switch(s){case 0:return r.add(e,A);case 1:return r.add(e+t,A);case 2:return r.add(e+t,A+i);case 3:return r.add(e,A+i)}return r})},bf=function(){function n(e){this.element=e,this.inlineLevel=[],this.nonInlineLevel=[],this.negativeZIndex=[],this.zeroOrAutoZIndexOrTransformedOrOpacity=[],this.positiveZIndex=[],this.nonPositionedFloats=[],this.nonPositionedInlineLevel=[]}return n}(),Tf=function(){function n(e,A){if(this.container=e,this.parent=A,this.effects=[],this.curves=new SE(this.container),this.container.styles.opacity<1&&this.effects.push(new bE(this.container.styles.opacity)),this.container.styles.transform!==null){var t=this.container.bounds.left+this.container.styles.transformOrigin[0].number,i=this.container.bounds.top+this.container.styles.transformOrigin[1].number,r=this.container.styles.transform;this.effects.push(new FE(t,i,r))}if(this.container.styles.overflowX!==0){var s=Gs(this.curves),a=Vs(this.curves);ku(s,a)?this.effects.push(new gs(s,6)):(this.effects.push(new gs(s,2)),this.effects.push(new gs(a,4)))}}return n.prototype.getEffects=function(e){for(var A=[2,3].indexOf(this.container.styles.position)===-1,t=this.parent,i=this.effects.slice(0);t;){var r=t.effects.filter(function(o){return!Ff(o)});if(A||t.container.styles.position!==0||!t.parent){if(i.unshift.apply(i,r),A=[2,3].indexOf(t.container.styles.position)===-1,t.container.styles.overflowX!==0){var s=Gs(t.curves),a=Vs(t.curves);ku(s,a)||i.unshift(new gs(a,6))}}else i.unshift.apply(i,r);t=t.parent}return i.filter(function(o){return wA(o.target,e)})},n}(),Zo=function(n,e,A,t){n.container.elements.forEach(function(i){var r=wA(i.flags,4),s=wA(i.flags,2),a=new Tf(i,n);wA(i.styles.display,2048)&&t.push(a);var o=wA(i.flags,8)?[]:t;if(r||s){var l=r||i.styles.isPositioned()?A:e,c=new bf(a);if(i.styles.isPositioned()||i.styles.opacity<1||i.styles.isTransformed()){var u=i.styles.zIndex.order;if(u<0){var h=0;l.negativeZIndex.some(function(g,m){return u>g.element.container.styles.zIndex.order?(h=m,!1):h>0}),l.negativeZIndex.splice(h,0,c)}else if(u>0){var p=0;l.positiveZIndex.some(function(g,m){return u>=g.element.container.styles.zIndex.order?(p=m+1,!1):p>0}),l.positiveZIndex.splice(p,0,c)}else l.zeroOrAutoZIndexOrTransformedOrOpacity.push(c)}else i.styles.isFloating()?l.nonPositionedFloats.push(c):l.nonPositionedInlineLevel.push(c);Zo(a,c,r?c:A,o)}else i.styles.isInlineLevel()?e.inlineLevel.push(a):e.nonInlineLevel.push(a),Zo(a,e,A,o);wA(i.flags,8)&&Qf(i,o)})},Qf=function(n,e){for(var A=n instanceof zo?n.start:1,t=n instanceof zo?n.reversed:!1,i=0;i<e.length;i++){var r=e[i];r.container instanceof pf&&typeof r.container.value=="number"&&r.container.value!==0&&(A=r.container.value),r.listValue=pr(A,r.container.styles.listStyleType,!0),A+=t?-1:1}},IE=function(n){var e=new Tf(n,null),A=new bf(e),t=[];return Zo(e,A,A,t),Qf(e.container,t),A},zu=function(n,e){switch(e){case 0:return rt(n.topLeftBorderBox,n.topLeftPaddingBox,n.topRightBorderBox,n.topRightPaddingBox);case 1:return rt(n.topRightBorderBox,n.topRightPaddingBox,n.bottomRightBorderBox,n.bottomRightPaddingBox);case 2:return rt(n.bottomRightBorderBox,n.bottomRightPaddingBox,n.bottomLeftBorderBox,n.bottomLeftPaddingBox);case 3:default:return rt(n.bottomLeftBorderBox,n.bottomLeftPaddingBox,n.topLeftBorderBox,n.topLeftPaddingBox)}},RE=function(n,e){switch(e){case 0:return rt(n.topLeftBorderBox,n.topLeftBorderDoubleOuterBox,n.topRightBorderBox,n.topRightBorderDoubleOuterBox);case 1:return rt(n.topRightBorderBox,n.topRightBorderDoubleOuterBox,n.bottomRightBorderBox,n.bottomRightBorderDoubleOuterBox);case 2:return rt(n.bottomRightBorderBox,n.bottomRightBorderDoubleOuterBox,n.bottomLeftBorderBox,n.bottomLeftBorderDoubleOuterBox);case 3:default:return rt(n.bottomLeftBorderBox,n.bottomLeftBorderDoubleOuterBox,n.topLeftBorderBox,n.topLeftBorderDoubleOuterBox)}},DE=function(n,e){switch(e){case 0:return rt(n.topLeftBorderDoubleInnerBox,n.topLeftPaddingBox,n.topRightBorderDoubleInnerBox,n.topRightPaddingBox);case 1:return rt(n.topRightBorderDoubleInnerBox,n.topRightPaddingBox,n.bottomRightBorderDoubleInnerBox,n.bottomRightPaddingBox);case 2:return rt(n.bottomRightBorderDoubleInnerBox,n.bottomRightPaddingBox,n.bottomLeftBorderDoubleInnerBox,n.bottomLeftPaddingBox);case 3:default:return rt(n.bottomLeftBorderDoubleInnerBox,n.bottomLeftPaddingBox,n.topLeftBorderDoubleInnerBox,n.topLeftPaddingBox)}},HE=function(n,e){switch(e){case 0:return ms(n.topLeftBorderStroke,n.topRightBorderStroke);case 1:return ms(n.topRightBorderStroke,n.bottomRightBorderStroke);case 2:return ms(n.bottomRightBorderStroke,n.bottomLeftBorderStroke);case 3:default:return ms(n.bottomLeftBorderStroke,n.topLeftBorderStroke)}},ms=function(n,e){var A=[];return tt(n)?A.push(n.subdivide(.5,!1)):A.push(n),tt(e)?A.push(e.subdivide(.5,!0)):A.push(e),A},rt=function(n,e,A,t){var i=[];return tt(n)?i.push(n.subdivide(.5,!1)):i.push(n),tt(A)?i.push(A.subdivide(.5,!0)):i.push(A),tt(t)?i.push(t.subdivide(.5,!0).reverse()):i.push(t),tt(e)?i.push(e.subdivide(.5,!1).reverse()):i.push(e),i},Lf=function(n){var e=n.bounds,A=n.styles;return e.add(A.borderLeftWidth,A.borderTopWidth,-(A.borderRightWidth+A.borderLeftWidth),-(A.borderTopWidth+A.borderBottomWidth))},Ks=function(n){var e=n.styles,A=n.bounds,t=rA(e.paddingLeft,A.width),i=rA(e.paddingRight,A.width),r=rA(e.paddingTop,A.width),s=rA(e.paddingBottom,A.width);return A.add(t+e.borderLeftWidth,r+e.borderTopWidth,-(e.borderRightWidth+e.borderLeftWidth+t+i),-(e.borderTopWidth+e.borderBottomWidth+r+s))},PE=function(n,e){return n===0?e.bounds:n===2?Ks(e):Lf(e)},NE=function(n,e){return n===0?e.bounds:n===2?Ks(e):Lf(e)},co=function(n,e,A){var t=PE(ui(n.styles.backgroundOrigin,e),n),i=NE(ui(n.styles.backgroundClip,e),n),r=OE(ui(n.styles.backgroundSize,e),A,t),s=r[0],a=r[1],o=Zi(ui(n.styles.backgroundPosition,e),t.width-s,t.height-a),l=GE(ui(n.styles.backgroundRepeat,e),o,r,t,i),c=Math.round(t.left+o[0]),u=Math.round(t.top+o[1]);return[l,c,u,s,a]},ai=function(n){return AA(n)&&n.value===wi.AUTO},Bs=function(n){return typeof n=="number"},OE=function(n,e,A){var t=e[0],i=e[1],r=e[2],s=n[0],a=n[1];if(!s)return[0,0];if(mA(s)&&a&&mA(a))return[rA(s,A.width),rA(a,A.height)];var o=Bs(r);if(AA(s)&&(s.value===wi.CONTAIN||s.value===wi.COVER)){if(Bs(r)){var l=A.width/A.height;return l<r!=(s.value===wi.COVER)?[A.width,A.width/r]:[A.height*r,A.height]}return[A.width,A.height]}var c=Bs(t),u=Bs(i),h=c||u;if(ai(s)&&(!a||ai(a))){if(c&&u)return[t,i];if(!o&&!h)return[A.width,A.height];if(h&&o){var p=c?t:i*r,g=u?i:t/r;return[p,g]}var m=c?t:A.width,d=u?i:A.height;return[m,d]}if(o){var f=0,C=0;return mA(s)?f=rA(s,A.width):mA(a)&&(C=rA(a,A.height)),ai(s)?f=C*r:(!a||ai(a))&&(C=f/r),[f,C]}var v=null,E=null;if(mA(s)?v=rA(s,A.width):a&&mA(a)&&(E=rA(a,A.height)),v!==null&&(!a||ai(a))&&(E=c&&u?v/t*i:A.height),E!==null&&ai(s)&&(v=c&&u?E/i*t:A.width),v!==null&&E!==null)return[v,E];throw new Error("Unable to calculate background-size for element")},ui=function(n,e){var A=n[e];return typeof A>"u"?n[0]:A},GE=function(n,e,A,t,i){var r=e[0],s=e[1],a=A[0],o=A[1];switch(n){case 2:return[new le(Math.round(t.left),Math.round(t.top+s)),new le(Math.round(t.left+t.width),Math.round(t.top+s)),new le(Math.round(t.left+t.width),Math.round(o+t.top+s)),new le(Math.round(t.left),Math.round(o+t.top+s))];case 3:return[new le(Math.round(t.left+r),Math.round(t.top)),new le(Math.round(t.left+r+a),Math.round(t.top)),new le(Math.round(t.left+r+a),Math.round(t.height+t.top)),new le(Math.round(t.left+r),Math.round(t.height+t.top))];case 1:return[new le(Math.round(t.left+r),Math.round(t.top+s)),new le(Math.round(t.left+r+a),Math.round(t.top+s)),new le(Math.round(t.left+r+a),Math.round(t.top+s+o)),new le(Math.round(t.left+r),Math.round(t.top+s+o))];default:return[new le(Math.round(i.left),Math.round(i.top)),new le(Math.round(i.left+i.width),Math.round(i.top)),new le(Math.round(i.left+i.width),Math.round(i.height+i.top)),new le(Math.round(i.left),Math.round(i.height+i.top))]}},VE="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",Wu="Hidden Text",KE=function(){function n(e){this._data={},this._document=e}return n.prototype.parseMetrics=function(e,A){var t=this._document.createElement("div"),i=this._document.createElement("img"),r=this._document.createElement("span"),s=this._document.body;t.style.visibility="hidden",t.style.fontFamily=e,t.style.fontSize=A,t.style.margin="0",t.style.padding="0",t.style.whiteSpace="nowrap",s.appendChild(t),i.src=VE,i.width=1,i.height=1,i.style.margin="0",i.style.padding="0",i.style.verticalAlign="baseline",r.style.fontFamily=e,r.style.fontSize=A,r.style.margin="0",r.style.padding="0",r.appendChild(this._document.createTextNode(Wu)),t.appendChild(r),t.appendChild(i);var a=i.offsetTop-r.offsetTop+2;t.removeChild(r),t.appendChild(this._document.createTextNode(Wu)),t.style.lineHeight="normal",i.style.verticalAlign="super";var o=i.offsetTop-t.offsetTop+2;return s.removeChild(t),{baseline:a,middle:o}},n.prototype.getMetrics=function(e,A){var t=e+" "+A;return typeof this._data[t]>"u"&&(this._data[t]=this.parseMetrics(e,A)),this._data[t]},n}(),If=function(){function n(e,A){this.context=e,this.options=A}return n}(),kE=1e4,zE=function(n){dt(e,n);function e(A,t){var i=n.call(this,A,t)||this;return i._activeEffects=[],i.canvas=t.canvas?t.canvas:document.createElement("canvas"),i.ctx=i.canvas.getContext("2d"),t.canvas||(i.canvas.width=Math.floor(t.width*t.scale),i.canvas.height=Math.floor(t.height*t.scale),i.canvas.style.width=t.width+"px",i.canvas.style.height=t.height+"px"),i.fontMetrics=new KE(document),i.ctx.scale(i.options.scale,i.options.scale),i.ctx.translate(-t.x,-t.y),i.ctx.textBaseline="bottom",i._activeEffects=[],i.context.logger.debug("Canvas renderer initialized ("+t.width+"x"+t.height+") with scale "+t.scale),i}return e.prototype.applyEffects=function(A){for(var t=this;this._activeEffects.length;)this.popEffect();A.forEach(function(i){return t.applyEffect(i)})},e.prototype.applyEffect=function(A){this.ctx.save(),QE(A)&&(this.ctx.globalAlpha=A.opacity),TE(A)&&(this.ctx.translate(A.offsetX,A.offsetY),this.ctx.transform(A.matrix[0],A.matrix[1],A.matrix[2],A.matrix[3],A.matrix[4],A.matrix[5]),this.ctx.translate(-A.offsetX,-A.offsetY)),Ff(A)&&(this.path(A.path),this.ctx.clip()),this._activeEffects.push(A)},e.prototype.popEffect=function(){this._activeEffects.pop(),this.ctx.restore()},e.prototype.renderStack=function(A){return GA(this,void 0,void 0,function(){var t;return RA(this,function(i){switch(i.label){case 0:return t=A.element.container.styles,t.isVisible()?[4,this.renderStackContent(A)]:[3,2];case 1:i.sent(),i.label=2;case 2:return[2]}})})},e.prototype.renderNode=function(A){return GA(this,void 0,void 0,function(){return RA(this,function(t){switch(t.label){case 0:if(wA(A.container.flags,16))debugger;return A.container.styles.isVisible()?[4,this.renderNodeBackgroundAndBorders(A)]:[3,3];case 1:return t.sent(),[4,this.renderNodeContent(A)];case 2:t.sent(),t.label=3;case 3:return[2]}})})},e.prototype.renderTextWithLetterSpacing=function(A,t,i){var r=this;if(t===0)this.ctx.fillText(A.text,A.bounds.left,A.bounds.top+i);else{var s=cl(A.text);s.reduce(function(a,o){return r.ctx.fillText(o,a,A.bounds.top+i),a+r.ctx.measureText(o).width},A.bounds.left)}},e.prototype.createFontStyle=function(A){var t=A.fontVariant.filter(function(s){return s==="normal"||s==="small-caps"}).join(""),i=ZE(A.fontFamily).join(", "),r=yr(A.fontSize)?""+A.fontSize.number+A.fontSize.unit:A.fontSize.number+"px";return[[A.fontStyle,t,A.fontWeight,r,i].join(" "),i,r]},e.prototype.renderTextNode=function(A,t){return GA(this,void 0,void 0,function(){var i,r,s,a,o,l,c,u,h=this;return RA(this,function(p){return i=this.createFontStyle(t),r=i[0],s=i[1],a=i[2],this.ctx.font=r,this.ctx.direction=t.direction===1?"rtl":"ltr",this.ctx.textAlign="left",this.ctx.textBaseline="alphabetic",o=this.fontMetrics.getMetrics(s,a),l=o.baseline,c=o.middle,u=t.paintOrder,A.textBounds.forEach(function(g){u.forEach(function(m){switch(m){case 0:h.ctx.fillStyle=xA(t.color),h.renderTextWithLetterSpacing(g,t.letterSpacing,l);var d=t.textShadow;d.length&&g.text.trim().length&&(d.slice(0).reverse().forEach(function(f){h.ctx.shadowColor=xA(f.color),h.ctx.shadowOffsetX=f.offsetX.number*h.options.scale,h.ctx.shadowOffsetY=f.offsetY.number*h.options.scale,h.ctx.shadowBlur=f.blur.number,h.renderTextWithLetterSpacing(g,t.letterSpacing,l)}),h.ctx.shadowColor="",h.ctx.shadowOffsetX=0,h.ctx.shadowOffsetY=0,h.ctx.shadowBlur=0),t.textDecorationLine.length&&(h.ctx.fillStyle=xA(t.textDecorationColor||t.color),t.textDecorationLine.forEach(function(f){switch(f){case 1:h.ctx.fillRect(g.bounds.left,Math.round(g.bounds.top+l),g.bounds.width,1);break;case 2:h.ctx.fillRect(g.bounds.left,Math.round(g.bounds.top),g.bounds.width,1);break;case 3:h.ctx.fillRect(g.bounds.left,Math.ceil(g.bounds.top+c),g.bounds.width,1);break}}));break;case 1:t.webkitTextStrokeWidth&&g.text.trim().length&&(h.ctx.strokeStyle=xA(t.webkitTextStrokeColor),h.ctx.lineWidth=t.webkitTextStrokeWidth,h.ctx.lineJoin=window.chrome?"miter":"round",h.ctx.strokeText(g.text,g.bounds.left,g.bounds.top+l)),h.ctx.strokeStyle="",h.ctx.lineWidth=0,h.ctx.lineJoin="miter";break}})}),[2]})})},e.prototype.renderReplacedElement=function(A,t,i){if(i&&A.intrinsicWidth>0&&A.intrinsicHeight>0){var r=Ks(A),s=Vs(t);this.path(s),this.ctx.save(),this.ctx.clip(),this.ctx.drawImage(i,0,0,A.intrinsicWidth,A.intrinsicHeight,r.left,r.top,r.width,r.height),this.ctx.restore()}},e.prototype.renderNodeContent=function(A){return GA(this,void 0,void 0,function(){var t,i,r,s,a,o,C,C,l,c,u,h,E,p,g,b,m,d,f,C,v,E,b;return RA(this,function(U){switch(U.label){case 0:this.applyEffects(A.getEffects(4)),t=A.container,i=A.curves,r=t.styles,s=0,a=t.textNodes,U.label=1;case 1:return s<a.length?(o=a[s],[4,this.renderTextNode(o,r)]):[3,4];case 2:U.sent(),U.label=3;case 3:return s++,[3,1];case 4:if(!(t instanceof hf))return[3,8];U.label=5;case 5:return U.trys.push([5,7,,8]),[4,this.context.cache.match(t.src)];case 6:return C=U.sent(),this.renderReplacedElement(t,i,C),[3,8];case 7:return U.sent(),this.context.logger.error("Error loading image "+t.src),[3,8];case 8:if(t instanceof ff&&this.renderReplacedElement(t,i,t.canvas),!(t instanceof df))return[3,12];U.label=9;case 9:return U.trys.push([9,11,,12]),[4,this.context.cache.match(t.svg)];case 10:return C=U.sent(),this.renderReplacedElement(t,i,C),[3,12];case 11:return U.sent(),this.context.logger.error("Error loading svg "+t.svg.substring(0,255)),[3,12];case 12:return t instanceof Bf&&t.tree?(l=new e(this.context,{scale:this.options.scale,backgroundColor:t.backgroundColor,x:0,y:0,width:t.width,height:t.height}),[4,l.render(t.tree)]):[3,14];case 13:c=U.sent(),t.width&&t.height&&this.ctx.drawImage(c,0,0,t.width,t.height,t.bounds.left,t.bounds.top,t.bounds.width,t.bounds.height),U.label=14;case 14:if(t instanceof ul&&(u=Math.min(t.bounds.width,t.bounds.height),t.type===Hs?t.checked&&(this.ctx.save(),this.path([new le(t.bounds.left+u*.39363,t.bounds.top+u*.79),new le(t.bounds.left+u*.16,t.bounds.top+u*.5549),new le(t.bounds.left+u*.27347,t.bounds.top+u*.44071),new le(t.bounds.left+u*.39694,t.bounds.top+u*.5649),new le(t.bounds.left+u*.72983,t.bounds.top+u*.23),new le(t.bounds.left+u*.84,t.bounds.top+u*.34085),new le(t.bounds.left+u*.39363,t.bounds.top+u*.79)]),this.ctx.fillStyle=xA(Lu),this.ctx.fill(),this.ctx.restore()):t.type===Ps&&t.checked&&(this.ctx.save(),this.ctx.beginPath(),this.ctx.arc(t.bounds.left+u/2,t.bounds.top+u/2,u/4,0,Math.PI*2,!0),this.ctx.fillStyle=xA(Lu),this.ctx.fill(),this.ctx.restore())),WE(t)&&t.value.length){switch(h=this.createFontStyle(r),E=h[0],p=h[1],g=this.fontMetrics.getMetrics(E,p).baseline,this.ctx.font=E,this.ctx.fillStyle=xA(r.color),this.ctx.textBaseline="alphabetic",this.ctx.textAlign=YE(t.styles.textAlign),b=Ks(t),m=0,t.styles.textAlign){case 1:m+=b.width/2;break;case 2:m+=b.width;break}d=b.add(m,0,0,-b.height/2+1),this.ctx.save(),this.path([new le(b.left,b.top),new le(b.left+b.width,b.top),new le(b.left+b.width,b.top+b.height),new le(b.left,b.top+b.height)]),this.ctx.clip(),this.renderTextWithLetterSpacing(new rr(t.value,d),r.letterSpacing,g),this.ctx.restore(),this.ctx.textBaseline="alphabetic",this.ctx.textAlign="left"}if(!wA(t.styles.display,2048))return[3,20];if(t.styles.listStyleImage===null)return[3,19];if(f=t.styles.listStyleImage,f.type!==0)return[3,18];C=void 0,v=f.url,U.label=15;case 15:return U.trys.push([15,17,,18]),[4,this.context.cache.match(v)];case 16:return C=U.sent(),this.ctx.drawImage(C,t.bounds.left-(C.width+10),t.bounds.top),[3,18];case 17:return U.sent(),this.context.logger.error("Error loading list-style-image "+v),[3,18];case 18:return[3,20];case 19:A.listValue&&t.styles.listStyleType!==-1&&(E=this.createFontStyle(r)[0],this.ctx.font=E,this.ctx.fillStyle=xA(r.color),this.ctx.textBaseline="middle",this.ctx.textAlign="right",b=new Pt(t.bounds.left,t.bounds.top+rA(t.styles.paddingTop,t.bounds.width),t.bounds.width,gu(r.lineHeight,r.fontSize.number)/2+1),this.renderTextWithLetterSpacing(new rr(A.listValue,b),r.letterSpacing,gu(r.lineHeight,r.fontSize.number)/2+2),this.ctx.textBaseline="bottom",this.ctx.textAlign="left"),U.label=20;case 20:return[2]}})})},e.prototype.renderStackContent=function(A){return GA(this,void 0,void 0,function(){var t,i,f,r,s,f,a,o,f,l,c,f,u,h,f,p,g,f,m,d,f;return RA(this,function(C){switch(C.label){case 0:if(wA(A.element.container.flags,16))debugger;return[4,this.renderNodeBackgroundAndBorders(A.element)];case 1:C.sent(),t=0,i=A.negativeZIndex,C.label=2;case 2:return t<i.length?(f=i[t],[4,this.renderStack(f)]):[3,5];case 3:C.sent(),C.label=4;case 4:return t++,[3,2];case 5:return[4,this.renderNodeContent(A.element)];case 6:C.sent(),r=0,s=A.nonInlineLevel,C.label=7;case 7:return r<s.length?(f=s[r],[4,this.renderNode(f)]):[3,10];case 8:C.sent(),C.label=9;case 9:return r++,[3,7];case 10:a=0,o=A.nonPositionedFloats,C.label=11;case 11:return a<o.length?(f=o[a],[4,this.renderStack(f)]):[3,14];case 12:C.sent(),C.label=13;case 13:return a++,[3,11];case 14:l=0,c=A.nonPositionedInlineLevel,C.label=15;case 15:return l<c.length?(f=c[l],[4,this.renderStack(f)]):[3,18];case 16:C.sent(),C.label=17;case 17:return l++,[3,15];case 18:u=0,h=A.inlineLevel,C.label=19;case 19:return u<h.length?(f=h[u],[4,this.renderNode(f)]):[3,22];case 20:C.sent(),C.label=21;case 21:return u++,[3,19];case 22:p=0,g=A.zeroOrAutoZIndexOrTransformedOrOpacity,C.label=23;case 23:return p<g.length?(f=g[p],[4,this.renderStack(f)]):[3,26];case 24:C.sent(),C.label=25;case 25:return p++,[3,23];case 26:m=0,d=A.positiveZIndex,C.label=27;case 27:return m<d.length?(f=d[m],[4,this.renderStack(f)]):[3,30];case 28:C.sent(),C.label=29;case 29:return m++,[3,27];case 30:return[2]}})})},e.prototype.mask=function(A){this.ctx.beginPath(),this.ctx.moveTo(0,0),this.ctx.lineTo(this.canvas.width,0),this.ctx.lineTo(this.canvas.width,this.canvas.height),this.ctx.lineTo(0,this.canvas.height),this.ctx.lineTo(0,0),this.formatPath(A.slice(0).reverse()),this.ctx.closePath()},e.prototype.path=function(A){this.ctx.beginPath(),this.formatPath(A),this.ctx.closePath()},e.prototype.formatPath=function(A){var t=this;A.forEach(function(i,r){var s=tt(i)?i.start:i;r===0?t.ctx.moveTo(s.x,s.y):t.ctx.lineTo(s.x,s.y),tt(i)&&t.ctx.bezierCurveTo(i.startControl.x,i.startControl.y,i.endControl.x,i.endControl.y,i.end.x,i.end.y)})},e.prototype.renderRepeat=function(A,t,i,r){this.path(A),this.ctx.fillStyle=t,this.ctx.translate(i,r),this.ctx.fill(),this.ctx.translate(-i,-r)},e.prototype.resizeImage=function(A,t,i){var r;if(A.width===t&&A.height===i)return A;var s=(r=this.canvas.ownerDocument)!==null&&r!==void 0?r:document,a=s.createElement("canvas");a.width=Math.max(1,t),a.height=Math.max(1,i);var o=a.getContext("2d");return o.drawImage(A,0,0,A.width,A.height,0,0,t,i),a},e.prototype.renderBackgroundImage=function(A){return GA(this,void 0,void 0,function(){var t,i,r,s,a,o;return RA(this,function(l){switch(l.label){case 0:t=A.styles.backgroundImage.length-1,i=function(c){var u,h,p,B,R,X,z,T,H,g,B,R,X,z,T,m,d,f,C,v,E,b,U,y,H,K,B,M,k,z,T,G,R,X,W,Y,J,ee,re,we,O,Z;return RA(this,function(ce){switch(ce.label){case 0:if(c.type!==0)return[3,5];u=void 0,h=c.url,ce.label=1;case 1:return ce.trys.push([1,3,,4]),[4,r.context.cache.match(h)];case 2:return u=ce.sent(),[3,4];case 3:return ce.sent(),r.context.logger.error("Error loading background-image "+h),[3,4];case 4:return u&&(p=co(A,t,[u.width,u.height,u.width/u.height]),B=p[0],R=p[1],X=p[2],z=p[3],T=p[4],H=r.ctx.createPattern(r.resizeImage(u,z,T),"repeat"),r.renderRepeat(B,H,R,X)),[3,6];case 5:Tv(c)?(g=co(A,t,[null,null,null]),B=g[0],R=g[1],X=g[2],z=g[3],T=g[4],m=yv(c.angle,z,T),d=m[0],f=m[1],C=m[2],v=m[3],E=m[4],b=document.createElement("canvas"),b.width=z,b.height=T,U=b.getContext("2d"),y=U.createLinearGradient(f,v,C,E),du(c.stops,d).forEach(function(ve){return y.addColorStop(ve.stop,xA(ve.color))}),U.fillStyle=y,U.fillRect(0,0,z,T),z>0&&T>0&&(H=r.ctx.createPattern(b,"repeat"),r.renderRepeat(B,H,R,X))):Qv(c)&&(K=co(A,t,[null,null,null]),B=K[0],M=K[1],k=K[2],z=K[3],T=K[4],G=c.position.length===0?[al]:c.position,R=rA(G[0],z),X=rA(G[G.length-1],T),W=Sv(c,R,X,z,T),Y=W[0],J=W[1],Y>0&&J>0&&(ee=r.ctx.createRadialGradient(M+R,k+X,0,M+R,k+X,Y),du(c.stops,Y*2).forEach(function(ve){return ee.addColorStop(ve.stop,xA(ve.color))}),r.path(B),r.ctx.fillStyle=ee,Y!==J?(re=A.bounds.left+.5*A.bounds.width,we=A.bounds.top+.5*A.bounds.height,O=J/Y,Z=1/O,r.ctx.save(),r.ctx.translate(re,we),r.ctx.transform(1,0,0,O,0,0),r.ctx.translate(-re,-we),r.ctx.fillRect(M,Z*(k-we)+we,z,T*Z),r.ctx.restore()):r.ctx.fill())),ce.label=6;case 6:return t--,[2]}})},r=this,s=0,a=A.styles.backgroundImage.slice(0).reverse(),l.label=1;case 1:return s<a.length?(o=a[s],[5,i(o)]):[3,4];case 2:l.sent(),l.label=3;case 3:return s++,[3,1];case 4:return[2]}})})},e.prototype.renderSolidBorder=function(A,t,i){return GA(this,void 0,void 0,function(){return RA(this,function(r){return this.path(zu(i,t)),this.ctx.fillStyle=xA(A),this.ctx.fill(),[2]})})},e.prototype.renderDoubleBorder=function(A,t,i,r){return GA(this,void 0,void 0,function(){var s,a;return RA(this,function(o){switch(o.label){case 0:return t<3?[4,this.renderSolidBorder(A,i,r)]:[3,2];case 1:return o.sent(),[2];case 2:return s=RE(r,i),this.path(s),this.ctx.fillStyle=xA(A),this.ctx.fill(),a=DE(r,i),this.path(a),this.ctx.fill(),[2]}})})},e.prototype.renderNodeBackgroundAndBorders=function(A){return GA(this,void 0,void 0,function(){var t,i,r,s,a,o,l,c,u=this;return RA(this,function(h){switch(h.label){case 0:return this.applyEffects(A.getEffects(2)),t=A.container.styles,i=!an(t.backgroundColor)||t.backgroundImage.length,r=[{style:t.borderTopStyle,color:t.borderTopColor,width:t.borderTopWidth},{style:t.borderRightStyle,color:t.borderRightColor,width:t.borderRightWidth},{style:t.borderBottomStyle,color:t.borderBottomColor,width:t.borderBottomWidth},{style:t.borderLeftStyle,color:t.borderLeftColor,width:t.borderLeftWidth}],s=XE(ui(t.backgroundClip,0),A.curves),i||t.boxShadow.length?(this.ctx.save(),this.path(s),this.ctx.clip(),an(t.backgroundColor)||(this.ctx.fillStyle=xA(t.backgroundColor),this.ctx.fill()),[4,this.renderBackgroundImage(A.container)]):[3,2];case 1:h.sent(),this.ctx.restore(),t.boxShadow.slice(0).reverse().forEach(function(p){u.ctx.save();var g=Gs(A.curves),m=p.inset?0:kE,d=LE(g,-m+(p.inset?1:-1)*p.spread.number,(p.inset?1:-1)*p.spread.number,p.spread.number*(p.inset?-2:2),p.spread.number*(p.inset?-2:2));p.inset?(u.path(g),u.ctx.clip(),u.mask(d)):(u.mask(g),u.ctx.clip(),u.path(d)),u.ctx.shadowOffsetX=p.offsetX.number+m,u.ctx.shadowOffsetY=p.offsetY.number,u.ctx.shadowColor=xA(p.color),u.ctx.shadowBlur=p.blur.number,u.ctx.fillStyle=p.inset?xA(p.color):"rgba(0,0,0,1)",u.ctx.fill(),u.ctx.restore()}),h.label=2;case 2:a=0,o=0,l=r,h.label=3;case 3:return o<l.length?(c=l[o],c.style!==0&&!an(c.color)&&c.width>0?c.style!==2?[3,5]:[4,this.renderDashedDottedBorder(c.color,c.width,a,A.curves,2)]:[3,11]):[3,13];case 4:return h.sent(),[3,11];case 5:return c.style!==3?[3,7]:[4,this.renderDashedDottedBorder(c.color,c.width,a,A.curves,3)];case 6:return h.sent(),[3,11];case 7:return c.style!==4?[3,9]:[4,this.renderDoubleBorder(c.color,c.width,a,A.curves)];case 8:return h.sent(),[3,11];case 9:return[4,this.renderSolidBorder(c.color,a,A.curves)];case 10:h.sent(),h.label=11;case 11:a++,h.label=12;case 12:return o++,[3,3];case 13:return[2]}})})},e.prototype.renderDashedDottedBorder=function(A,t,i,r,s){return GA(this,void 0,void 0,function(){var a,o,l,c,u,h,p,g,m,d,f,C,v,E,b,U,b,U;return RA(this,function(y){return this.ctx.save(),a=HE(r,i),o=zu(r,i),s===2&&(this.path(o),this.ctx.clip()),tt(o[0])?(l=o[0].start.x,c=o[0].start.y):(l=o[0].x,c=o[0].y),tt(o[1])?(u=o[1].end.x,h=o[1].end.y):(u=o[1].x,h=o[1].y),i===0||i===2?p=Math.abs(l-u):p=Math.abs(c-h),this.ctx.beginPath(),s===3?this.formatPath(a):this.formatPath(o.slice(0,2)),g=t<3?t*3:t*2,m=t<3?t*2:t,s===3&&(g=t,m=t),d=!0,p<=g*2?d=!1:p<=g*2+m?(f=p/(2*g+m),g*=f,m*=f):(C=Math.floor((p+m)/(g+m)),v=(p-C*g)/(C-1),E=(p-(C+1)*g)/C,m=E<=0||Math.abs(m-v)<Math.abs(m-E)?v:E),d&&(s===3?this.ctx.setLineDash([0,g+m]):this.ctx.setLineDash([g,m])),s===3?(this.ctx.lineCap="round",this.ctx.lineWidth=t):this.ctx.lineWidth=t*2+1.1,this.ctx.strokeStyle=xA(A),this.ctx.stroke(),this.ctx.setLineDash([]),s===2&&(tt(o[0])&&(b=o[3],U=o[0],this.ctx.beginPath(),this.formatPath([new le(b.end.x,b.end.y),new le(U.start.x,U.start.y)]),this.ctx.stroke()),tt(o[1])&&(b=o[1],U=o[2],this.ctx.beginPath(),this.formatPath([new le(b.end.x,b.end.y),new le(U.start.x,U.start.y)]),this.ctx.stroke())),this.ctx.restore(),[2]})})},e.prototype.render=function(A){return GA(this,void 0,void 0,function(){var t;return RA(this,function(i){switch(i.label){case 0:return this.options.backgroundColor&&(this.ctx.fillStyle=xA(this.options.backgroundColor),this.ctx.fillRect(this.options.x,this.options.y,this.options.width,this.options.height)),t=IE(A),[4,this.renderStack(t)];case 1:return i.sent(),this.applyEffects([]),[2,this.canvas]}})})},e}(If),WE=function(n){return n instanceof mf||n instanceof gf?!0:n instanceof ul&&n.type!==Ps&&n.type!==Hs},XE=function(n,e){switch(n){case 0:return Gs(e);case 2:return ME(e);case 1:default:return Vs(e)}},YE=function(n){switch(n){case 1:return"center";case 2:return"right";case 0:default:return"left"}},JE=["-apple-system","system-ui"],ZE=function(n){return/iPhone OS 15_(0|1)/.test(window.navigator.userAgent)?n.filter(function(e){return JE.indexOf(e)===-1}):n},qE=function(n){dt(e,n);function e(A,t){var i=n.call(this,A,t)||this;return i.canvas=t.canvas?t.canvas:document.createElement("canvas"),i.ctx=i.canvas.getContext("2d"),i.options=t,i.canvas.width=Math.floor(t.width*t.scale),i.canvas.height=Math.floor(t.height*t.scale),i.canvas.style.width=t.width+"px",i.canvas.style.height=t.height+"px",i.ctx.scale(i.options.scale,i.options.scale),i.ctx.translate(-t.x,-t.y),i.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized ("+t.width+"x"+t.height+" at "+t.x+","+t.y+") with scale "+t.scale),i}return e.prototype.render=function(A){return GA(this,void 0,void 0,function(){var t,i;return RA(this,function(r){switch(r.label){case 0:return t=ko(this.options.width*this.options.scale,this.options.height*this.options.scale,this.options.scale,this.options.scale,A),[4,$E(t)];case 1:return i=r.sent(),this.options.backgroundColor&&(this.ctx.fillStyle=xA(this.options.backgroundColor),this.ctx.fillRect(0,0,this.options.width*this.options.scale,this.options.height*this.options.scale)),this.ctx.drawImage(i,-this.options.x*this.options.scale,-this.options.y*this.options.scale),[2,this.canvas]}})})},e}(If),$E=function(n){return new Promise(function(e,A){var t=new Image;t.onload=function(){e(t)},t.onerror=A,t.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(n))})},jE=function(){function n(e){var A=e.id,t=e.enabled;this.id=A,this.enabled=t,this.start=Date.now()}return n.prototype.debug=function(){for(var e=[],A=0;A<arguments.length;A++)e[A]=arguments[A];this.enabled&&(typeof window<"u"&&window.console&&typeof console.debug=="function"?console.debug.apply(console,Zr([this.id,this.getTime()+"ms"],e)):this.info.apply(this,e))},n.prototype.getTime=function(){return Date.now()-this.start},n.prototype.info=function(){for(var e=[],A=0;A<arguments.length;A++)e[A]=arguments[A];this.enabled&&typeof window<"u"&&window.console&&typeof console.info=="function"&&console.info.apply(console,Zr([this.id,this.getTime()+"ms"],e))},n.prototype.warn=function(){for(var e=[],A=0;A<arguments.length;A++)e[A]=arguments[A];this.enabled&&(typeof window<"u"&&window.console&&typeof console.warn=="function"?console.warn.apply(console,Zr([this.id,this.getTime()+"ms"],e)):this.info.apply(this,e))},n.prototype.error=function(){for(var e=[],A=0;A<arguments.length;A++)e[A]=arguments[A];this.enabled&&(typeof window<"u"&&window.console&&typeof console.error=="function"?console.error.apply(console,Zr([this.id,this.getTime()+"ms"],e)):this.info.apply(this,e))},n.instances={},n}(),e2=function(){function n(e,A){var t;this.windowBounds=A,this.instanceName="#"+n.instanceCount++,this.logger=new jE({id:this.instanceName,enabled:e.logging}),this.cache=(t=e.cache)!==null&&t!==void 0?t:new vE(this,e)}return n.instanceCount=1,n}(),Rf=function(n,e){return e===void 0&&(e={}),A2(n,e)};typeof window<"u"&&Mf.setContext(window);var A2=function(n,e){return GA(void 0,void 0,void 0,function(){var A,t,i,r,s,a,o,l,c,u,h,p,g,m,d,f,C,v,E,b,y,U,y,H,K,B,M,k,z,T,G,R,X,W,Y,J,ee,re,we,O;return RA(this,function(Z){switch(Z.label){case 0:if(!n||typeof n!="object")return[2,Promise.reject("Invalid element provided as first argument")];if(A=n.ownerDocument,!A)throw new Error("Element is not attached to a Document");if(t=A.defaultView,!t)throw new Error("Document is not attached to a Window");return i={allowTaint:(H=e.allowTaint)!==null&&H!==void 0?H:!1,imageTimeout:(K=e.imageTimeout)!==null&&K!==void 0?K:15e3,proxy:e.proxy,useCORS:(B=e.useCORS)!==null&&B!==void 0?B:!1},r=Fo({logging:(M=e.logging)!==null&&M!==void 0?M:!0,cache:e.cache},i),s={windowWidth:(k=e.windowWidth)!==null&&k!==void 0?k:t.innerWidth,windowHeight:(z=e.windowHeight)!==null&&z!==void 0?z:t.innerHeight,scrollX:(T=e.scrollX)!==null&&T!==void 0?T:t.pageXOffset,scrollY:(G=e.scrollY)!==null&&G!==void 0?G:t.pageYOffset},a=new Pt(s.scrollX,s.scrollY,s.windowWidth,s.windowHeight),o=new e2(r,a),l=(R=e.foreignObjectRendering)!==null&&R!==void 0?R:!1,c={allowTaint:(X=e.allowTaint)!==null&&X!==void 0?X:!1,onclone:e.onclone,ignoreElements:e.ignoreElements,inlineImages:l,copyStyles:l},o.logger.debug("Starting document clone with size "+a.width+"x"+a.height+" scrolled to "+-a.left+","+-a.top),u=new Vu(o,n,c),h=u.clonedReferenceElement,h?[4,u.toIFrame(A,a)]:[2,Promise.reject("Unable to find element in cloned iframe")];case 1:return p=Z.sent(),g=hl(h)||nE(h)?L1(h.ownerDocument):$s(o,h),m=g.width,d=g.height,f=g.left,C=g.top,v=t2(o,h,e.backgroundColor),E={canvas:e.canvas,backgroundColor:v,scale:(Y=(W=e.scale)!==null&&W!==void 0?W:t.devicePixelRatio)!==null&&Y!==void 0?Y:1,x:((J=e.x)!==null&&J!==void 0?J:0)+f,y:((ee=e.y)!==null&&ee!==void 0?ee:0)+C,width:(re=e.width)!==null&&re!==void 0?re:Math.ceil(m),height:(we=e.height)!==null&&we!==void 0?we:Math.ceil(d)},l?(o.logger.debug("Document cloned, using foreign object rendering"),y=new qE(o,E),[4,y.render(h)]):[3,3];case 2:return b=Z.sent(),[3,5];case 3:return o.logger.debug("Document cloned, element located at "+f+","+C+" with size "+m+"x"+d+" using computed rendering"),o.logger.debug("Starting DOM parsing"),U=vf(o,h),v===U.styles.backgroundColor&&(U.styles.backgroundColor=Dt.TRANSPARENT),o.logger.debug("Starting renderer for element at "+E.x+","+E.y+" with size "+E.width+"x"+E.height),y=new zE(o,E),[4,y.render(U)];case 4:b=Z.sent(),Z.label=5;case 5:return(!((O=e.removeContainer)!==null&&O!==void 0)||O)&&(Vu.destroy(p)||o.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")),o.logger.debug("Finished rendering"),[2,b]}})})},t2=function(n,e,A){var t=e.ownerDocument,i=t.documentElement?nr(n,getComputedStyle(t.documentElement).backgroundColor):Dt.TRANSPARENT,r=t.body?nr(n,getComputedStyle(t.body).backgroundColor):Dt.TRANSPARENT,s=typeof A=="string"?nr(n,A):A===null?Dt.TRANSPARENT:4294967295;return e===t.documentElement?an(i)?an(r)?s:r:i:s},ar=(n=>(n.GLOBAL="Global",n.NORTHERN_HEMISSPHERE="Northern HS",n.SOUTHERN_HEMISSPHERE="Southern HS",n))(ar||{}),Ye=(n=>(n.SETTINGS_CHANGED="settings-changed",n.CHANGE_THEME="change-theme",n.THEME_CHANGED="theme-changed",n.SHOW_IMPRINT="show-imprint",n.HIDE_IMPRINT="hide-imprint",n.CREATE_HELIX="create-helix",n))(Ye||{});(n=>{function e(A){const t=new Event(A.toString(),{bubbles:!0});document.body.dispatchEvent(t)}n.dispatchEvent=e})(Ye||(Ye={}));class fl{constructor(e,A){let t=!1;new MutationObserver(r=>{t&&r.forEach((s,a)=>A(s,a))}).observe(e,{attributes:!0,attributeFilter:["class"]}),t=!0}}const n2=async()=>await Q1(()=>import("./imprint-gen-JdiV-yqB.js"),__vite__mapDeps([])),i2='<hr><p style="opacity: 1.0;">Dieses Impressum wurde erstellt durch <a href="https://www.impressum-generator.de" rel="nofollow">impressum-generator.de</a>.</p>',r2=`<hr><div class="center" width=100%>
<button id="hide-imprint" onclick="document.body.dispatchEvent(new Event('${Ye.HIDE_IMPRINT.toString()}', { bubbles: true }))">Close</button></div>`;class s2{constructor(){window.addEventListener("resize",()=>this.redraw()),new fl(document.body,()=>this.redraw()),document.body.addEventListener(Ye.SHOW_IMPRINT.toString(),e=>this.show()),document.body.addEventListener(Ye.HIDE_IMPRINT.toString(),e=>this.hide()),document.body.addEventListener("keydown",e=>{(e.key==="Esc"||e.key==="Escape")&&this.hide()})}redraw(){this.div!==void 0&&(this.hide(),this.show())}async isAvailable(){const e=await n2();return this.decryptedAES=e.decryptedAES,this.decryptedAES()!==void 0}show(){if(this.div===void 0){this.div=document.createElement("div");const e=this.div;e.classList.add("imprint"),e.innerHTML=this.decryptedAES(),document.body.appendChild(e);const A=window.getComputedStyle(document.body),t=e.scrollWidth,i=e.scrollHeight,r=A.getPropertyValue("background-color");Rf(e,{backgroundColor:r,windowWidth:t,windowHeight:i}).then(s=>{s.classList.add("padding"),e.innerHTML="",e.appendChild(s);const a=document.createElement("p");a.classList.add("padding"),a.innerHTML=i2+r2,e.appendChild(a)})}}hide(){this.div!==void 0&&(document.body.removeChild(this.div),this.div=void 0)}}const Xu="toggle",a2="div",uo="clicked",o2="-div",ho="-icon",Yu="show";var vi,_i,mr;class dl{constructor(e){oA(this,vi,void 0);oA(this,_i,[]);oA(this,mr,void 0);nA(this,mr,e.event),nA(this,_i,e.icons);const A=document.createElement(a2);A.classList.add(`${Xu}${o2}`,e.classToken);for(const i of e.icons){const r=this.createSVGElement(i,e.classToken);A.innerHTML+=r}(e.container||document.body).appendChild(A),A.addEventListener("click",()=>A.classList.add(uo)),A.addEventListener("animationend",()=>{if(A.classList.contains(uo)){A.classList.remove(uo);const i=new Event(e.event,{bubbles:!0});A.dispatchEvent(i)}}),nA(this,vi,A)}show(e){var A;(A=this.icon(e))==null||A.classList.add(Yu)}toggle(){var e;for(let A=0;A<Be(this,_i).length;A++)(e=this.icon(A))==null||e.classList.toggle(Yu)}icon(e){return Be(this,vi).querySelector(`#${Be(this,_i)[e].id}${ho}`)}createSVGElement(e,A){const t=document.createElement("template");t.innerHTML=e.svg;const i=t.content.firstElementChild;return i.id=`${e.id}${ho}`,i.classList.add(`${Xu}${ho}`,A),i.outerHTML}addOnClickListener(e){Be(this,vi).addEventListener(Be(this,mr),e)}}vi=new WeakMap,_i=new WeakMap,mr=new WeakMap;const l2=`<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512">
    <path d="M12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z"/>
    <path d="M21.294,13.9l-.444-.256a9.1,9.1,0,0,0,0-3.29l.444-.256a3,3,0,1,0-3-5.2l-.445.257A8.977,8.977,0,0,0,15,3.513V3A3,3,0,0,0,9,3v.513A8.977,8.977,0,0,0,6.152,5.159L5.705,4.9a3,3,0,0,0-3,5.2l.444.256a9.1,9.1,0,0,0,0,3.29l-.444.256a3,3,0,1,0,3,5.2l.445-.257A8.977,8.977,0,0,0,9,20.487V21a3,3,0,0,0,6,0v-.513a8.977,8.977,0,0,0,2.848-1.646l.447.258a3,3,0,0,0,3-5.2Zm-2.548-3.776a7.048,7.048,0,0,1,0,3.75,1,1,0,0,0,.464,1.133l1.084.626a1,1,0,0,1-1,1.733l-1.086-.628a1,1,0,0,0-1.215.165,6.984,6.984,0,0,1-3.243,1.875,1,1,0,0,0-.751.969V21a1,1,0,0,1-2,0V19.748a1,1,0,0,0-.751-.969A6.984,6.984,0,0,1,7.006,16.9a1,1,0,0,0-1.215-.165l-1.084.627a1,1,0,1,1-1-1.732l1.084-.626a1,1,0,0,0,.464-1.133,7.048,7.048,0,0,1,0-3.75A1,1,0,0,0,4.79,8.992L3.706,8.366a1,1,0,0,1,1-1.733l1.086.628A1,1,0,0,0,7.006,7.1a6.984,6.984,0,0,1,3.243-1.875A1,1,0,0,0,11,4.252V3a1,1,0,0,1,2,0V4.252a1,1,0,0,0,.751.969A6.984,6.984,0,0,1,16.994,7.1a1,1,0,0,0,1.215.165l1.084-.627a1,1,0,1,1,1,1.732l-1.084.626A1,1,0,0,0,18.746,10.125Z"/>
</svg>
`,c2={id:"open",svg:l2},u2=`<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512">
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
</svg>`,h2={id:"close",svg:u2};var Zt,yn,qt;class f2{constructor(e){oA(this,Zt,void 0);oA(this,yn,void 0);oA(this,qt,void 0);nA(this,Zt,!0),nA(this,yn,new dl({container:document.querySelector(".container-div"),icons:[c2,h2],classToken:"settings",event:Ye.SETTINGS_CHANGED})),nA(this,qt,e),Be(this,qt).hide(),Be(this,yn).show(Be(this,Zt)?0:1),Be(this,yn).addOnClickListener(()=>this.guiShowHide())}guiShowHide(){Be(this,Zt)?(this.toggle(),Be(this,qt).show(),Be(this,qt).open()):Be(this,qt).$title.click()}toggle(){nA(this,Zt,!Be(this,Zt)),Be(this,yn).toggle()}}Zt=new WeakMap,yn=new WeakMap,qt=new WeakMap;const d2=`Land-Ocean: Global Means
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
`,p2=`Land-Ocean: Northern Hemispheric Means
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
`,g2=`Land-Ocean: Southern Hemispheric Means
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
`,oi={},iA={showcaseCSV:void 0,radio:ar.GLOBAL,view:{geometry:{meshVisible:!1,facesVisible:!0,radialSegments:8,radius:1,radiusFactor:.9,tubularSegments:30},colors:{cold:fo("cold"),zero:fo("zero"),warm:fo("warm")}},capture:{},imprint:()=>Ye.dispatchEvent(Ye.SHOW_IMPRINT)};function fo(n){return{color:ji(n),modified:!1}}function ji(n){return Df(`--${n}-color`)}function Df(n){const A=window.getComputedStyle(document.body).getPropertyValue(n);return new qe(A)}var Br,Sn,Ci,OA;const ks=class ks{constructor(){oA(this,Br,void 0);oA(this,Sn,void 0);oA(this,Ci,void 0);oA(this,OA,void 0);nA(this,OA,new rl({container:document.querySelector(".container-div"),autoPlace:!1})),Be(this,OA).domElement.id="gui",this.createShowcaseFolder(),this.createViewFolder(),this.createCaptureFolder(),this.createImprint(),this.createShowHideListener(),this.createSettingsIcon()}static styledColor(e){return Df(e)}static addRadioButtonsFolder(e,A,t,i,r=(s,a,o)=>{}){const s=e.addFolder(A);return ks.addRadioButtons(s,t,i,r),s}static addRadioButtons(e,A,t,i=(r,s,a)=>{}){const r={};Object.entries(t).forEach(s=>{const[a,o]=s,l=`option_${a}`;r[l]=A===a}),Object.keys(t).forEach(s=>{const a=`option_${s}`;e.add(r,a).name(s).listen().onChange(()=>{for(let o in r)r[o]=a===o;i(r,a,s)})})}createSettingsIcon(){const e=new f2(Be(this,OA));new fl(Be(this,OA).domElement,(A,t)=>{const i=A.target;t===0&&!(i!=null&&i.classList.contains("transition"))&&(i!=null&&i.classList.contains("closed"))&&(Be(this,OA).hide(),Be(this,OA).close(),e.toggle())})}createShowHideListener(){window.addEventListener("keydown",e=>{(e.key==="h"||e.key==="H")&&(Be(this,Ci)?Be(this,OA).show():Be(this,OA).hide(),nA(this,Ci,!Be(this,Ci)))})}createShowcaseFolder(){oi[ar.GLOBAL]=d2,oi[ar.NORTHERN_HEMISSPHERE]=p2,oi[ar.SOUTHERN_HEMISSPHERE]=g2,nA(this,Sn,ks.addRadioButtonsFolder(Be(this,OA),`Region: ${iA.radio}`,iA.radio,oi,(e,A,t)=>{iA.showcaseCSV=oi[t],Ye.dispatchEvent(Ye.CREATE_HELIX),Be(this,Sn).title(`Region: ${t}`),Be(this,Sn).close()})),iA.showcaseCSV=oi[iA.radio],Be(this,Sn).close()}createViewFolder(){const e=Be(this,OA).addFolder("View");this.createViewGeometryFolder(e),this.createViewColorsFolder(e),e.close()}createViewGeometryFolder(e){const A=e.addFolder("Geometry"),t=iA.view.geometry;A.add(t,"meshVisible").name("Wireframe").onChange(()=>Ye.dispatchEvent(Ye.CREATE_HELIX)),A.add(t,"facesVisible").name("Faces").onChange(()=>Ye.dispatchEvent(Ye.CREATE_HELIX)),A.add(t,"tubularSegments").min(1).max(31).step(1).name("Monthly Segments").onChange(()=>Ye.dispatchEvent(Ye.CREATE_HELIX)),A.add(t,"radialSegments").min(3).max(32).step(1).name("Radius Segments").onChange(()=>Ye.dispatchEvent(Ye.CREATE_HELIX)),A.add(t,"radiusFactor").min(.1).max(2).name("Radius Factor").onChange(()=>Ye.dispatchEvent(Ye.CREATE_HELIX)),A.close()}createViewColorsFolder(e){const A=e.addFolder("Colors"),t=iA.view.colors;A.addColor(t.cold,"color").name("-1.0°C").listen().onChange(()=>this.dispatchColorEvent("cold")),A.addColor(t.zero,"color").name("0°C").listen().onChange(()=>this.dispatchColorEvent("zero")),A.addColor(t.warm,"color").name("+1.5°C").listen().onChange(()=>this.dispatchColorEvent("warm")),A.close()}initializeColors(){iA.view.colors.cold.modified||(iA.view.colors.cold.color=ji("cold")),iA.view.colors.zero.modified||(iA.view.colors.zero.color=ji("zero")),iA.view.colors.warm.modified||(iA.view.colors.warm.color=ji("warm"))}dispatchColorEvent(e){iA.view.colors[e].modified=!iA.view.colors[e].color.equals(ji(e)),Ye.dispatchEvent(Ye.CREATE_HELIX)}createCaptureFolder(){const e=Be(this,OA).addFolder("Screen capture");e.close(),nA(this,Br,e)}createImprint(){new s2().isAvailable().then(t=>{t&&Be(this,OA).add(iA,"imprint").name("Imprint")})}get showcaseCSV(){return iA.showcaseCSV}get radialSegments(){return Math.floor(iA.view.geometry.radialSegments)}get radiusFactor(){return iA.view.geometry.radiusFactor}get tubularSegments(){return Math.floor(iA.view.geometry.tubularSegments)}get showFaces(){return iA.view.geometry.facesVisible}get showWireframe(){return iA.view.geometry.meshVisible}get cold(){return iA.view.colors.cold.color}get zero(){return iA.view.colors.zero.color}get warm(){return iA.view.colors.warm.color}captureSettings(){return{folder:Be(this,Br),property:iA.capture}}};Br=new WeakMap,Sn=new WeakMap,Ci=new WeakMap,OA=new WeakMap;let gr=ks;const m2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512">
    <path d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5 S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1 s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0 c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95 c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41 L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41 s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06 c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"/>
</svg>`,B2={id:"light",svg:m2},w2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512">
    <path d="M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"/>
</svg>`,v2={id:"dark",svg:w2},po="dark",go="light";var gt,Ei;class _2{constructor(e){oA(this,gt,void 0);oA(this,Ei,void 0);nA(this,Ei,new dl({container:(e==null?void 0:e.container)||document.body,icons:[B2,v2],classToken:"themes",event:Ye.CHANGE_THEME.toString()})),this.initTheme(),this.registerOnThemeChange(document.body)}initTheme(){nA(this,gt,this.preferredTheme()),document.body.classList.add(Be(this,gt)?po:go),Be(this,Ei).show(Be(this,gt)?0:1),Ye.dispatchEvent(Ye.THEME_CHANGED)}preferredTheme(){return window.matchMedia("(prefers-color-scheme: dark)").matches}registerOnThemeChange(e){e.addEventListener(Ye.CHANGE_THEME.toString(),()=>{this.onThemeChange(e)})}onThemeChange(e){const A=Be(this,gt)?po:go,t=Be(this,gt)?go:po;e.classList.replace(A,t)||e.classList.add(t),nA(this,gt,!Be(this,gt)),Be(this,Ei).toggle(),Ye.dispatchEvent(Ye.THEME_CHANGED)}}gt=new WeakMap,Ei=new WeakMap;const C2=`<?xml version="1.0" ?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="512" height="512">
    <path d="M22 34h4v-12h-4v12zm2-30c-11.05 0-20 8.95-20 20s8.95 20 20 20 20-8.95 20-20-8.95-20-20-20zm0 36c-8.82 0-16-7.18-16-16s7.18-16 16-16 16 7.18 16 16-7.18 16-16 16zm-2-22h4v-4h-4v4z"/>
</svg>`,E2={id:"info",svg:C2},x2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512">
    <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"/>
</svg>`,U2={id:"close",svg:x2};var Mn;class y2{constructor(e){oA(this,Mn,void 0);nA(this,Mn,new dl({container:e,icons:[E2,U2],classToken:"info-button",event:"info-clicked"})),Be(this,Mn).show(0),Be(this,Mn).addOnClickListener(()=>this.infoDivShowHide())}infoDivShowHide(){const e=document.querySelector("#info-div");e==null||e.classList.toggle("show");const A=document.querySelector("canvas");A==null||A.classList.toggle("transparent"),Be(this,Mn).toggle()}}Mn=new WeakMap;const Ju={type:"change"},mo={type:"start"},Zu={type:"end"},ws=new dh,qu=new Xt,S2=Math.cos(70*op.DEG2RAD);class M2 extends Hn{constructor(e,A){super(),this.object=e,this.domElement=A,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new Q,this.cursor=new Q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Pn.ROTATE,MIDDLE:Pn.DOLLY,RIGHT:Pn.PAN},this.touches={ONE:Nn.ROTATE,TWO:Nn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(F){F.addEventListener("keydown",Se),this._domElementKeyEvents=F},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Se),this._domElementKeyEvents=null},this.saveState=function(){t.target0.copy(t.target),t.position0.copy(t.object.position),t.zoom0=t.object.zoom},this.reset=function(){t.target.copy(t.target0),t.object.position.copy(t.position0),t.object.zoom=t.zoom0,t.object.updateProjectionMatrix(),t.dispatchEvent(Ju),t.update(),r=i.NONE},this.update=function(){const F=new Q,ie=new Dn().setFromUnitVectors(e.up,new Q(0,1,0)),oe=ie.clone().invert(),xe=new Q,S=new Dn,te=new Q,j=2*Math.PI;return function(ye=null){const Je=t.object.position;F.copy(Je).sub(t.target),F.applyQuaternion(ie),a.setFromVector3(F),t.autoRotate&&r===i.NONE&&k(B(ye)),t.enableDamping?(a.theta+=o.theta*t.dampingFactor,a.phi+=o.phi*t.dampingFactor):(a.theta+=o.theta,a.phi+=o.phi);let ze=t.minAzimuthAngle,tA=t.maxAzimuthAngle;isFinite(ze)&&isFinite(tA)&&(ze<-Math.PI?ze+=j:ze>Math.PI&&(ze-=j),tA<-Math.PI?tA+=j:tA>Math.PI&&(tA-=j),ze<=tA?a.theta=Math.max(ze,Math.min(tA,a.theta)):a.theta=a.theta>(ze+tA)/2?Math.max(ze,a.theta):Math.min(tA,a.theta)),a.phi=Math.max(t.minPolarAngle,Math.min(t.maxPolarAngle,a.phi)),a.makeSafe(),t.enableDamping===!0?t.target.addScaledVector(c,t.dampingFactor):t.target.add(c),t.target.sub(t.cursor),t.target.clampLength(t.minTargetRadius,t.maxTargetRadius),t.target.add(t.cursor),t.zoomToCursor&&U||t.object.isOrthographicCamera?a.radius=J(a.radius):a.radius=J(a.radius*l),F.setFromSpherical(a),F.applyQuaternion(oe),Je.copy(t.target).add(F),t.object.lookAt(t.target),t.enableDamping===!0?(o.theta*=1-t.dampingFactor,o.phi*=1-t.dampingFactor,c.multiplyScalar(1-t.dampingFactor)):(o.set(0,0,0),c.set(0,0,0));let SA=!1;if(t.zoomToCursor&&U){let Ze=null;if(t.object.isPerspectiveCamera){const hA=F.length();Ze=J(hA*l);const HA=hA-Ze;t.object.position.addScaledVector(E,HA),t.object.updateMatrixWorld()}else if(t.object.isOrthographicCamera){const hA=new Q(b.x,b.y,0);hA.unproject(t.object),t.object.zoom=Math.max(t.minZoom,Math.min(t.maxZoom,t.object.zoom/l)),t.object.updateProjectionMatrix(),SA=!0;const HA=new Q(b.x,b.y,0);HA.unproject(t.object),t.object.position.sub(HA).add(hA),t.object.updateMatrixWorld(),Ze=F.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),t.zoomToCursor=!1;Ze!==null&&(this.screenSpacePanning?t.target.set(0,0,-1).transformDirection(t.object.matrix).multiplyScalar(Ze).add(t.object.position):(ws.origin.copy(t.object.position),ws.direction.set(0,0,-1).transformDirection(t.object.matrix),Math.abs(t.object.up.dot(ws.direction))<S2?e.lookAt(t.target):(qu.setFromNormalAndCoplanarPoint(t.object.up,t.target),ws.intersectPlane(qu,t.target))))}else t.object.isOrthographicCamera&&(SA=l!==1,SA&&(t.object.zoom=Math.max(t.minZoom,Math.min(t.maxZoom,t.object.zoom/l)),t.object.updateProjectionMatrix()));return l=1,U=!1,SA||xe.distanceToSquared(t.object.position)>s||8*(1-S.dot(t.object.quaternion))>s||te.distanceToSquared(t.target)>0?(t.dispatchEvent(Ju),xe.copy(t.object.position),S.copy(t.object.quaternion),te.copy(t.target),!0):!1}}(),this.dispose=function(){t.domElement.removeEventListener("contextmenu",$e),t.domElement.removeEventListener("pointerdown",x),t.domElement.removeEventListener("pointercancel",D),t.domElement.removeEventListener("wheel",Ae),t.domElement.removeEventListener("pointermove",w),t.domElement.removeEventListener("pointerup",D),t._domElementKeyEvents!==null&&(t._domElementKeyEvents.removeEventListener("keydown",Se),t._domElementKeyEvents=null)};const t=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const s=1e-6,a=new zc,o=new zc;let l=1;const c=new Q,u=new Ie,h=new Ie,p=new Ie,g=new Ie,m=new Ie,d=new Ie,f=new Ie,C=new Ie,v=new Ie,E=new Q,b=new Ie;let U=!1;const y=[],H={};let K=!1;function B(F){return F!==null?2*Math.PI/60*t.autoRotateSpeed*F:2*Math.PI/60/60*t.autoRotateSpeed}function M(F){const ie=Math.abs(F*.01);return Math.pow(.95,t.zoomSpeed*ie)}function k(F){o.theta-=F}function z(F){o.phi-=F}const T=function(){const F=new Q;return function(oe,xe){F.setFromMatrixColumn(xe,0),F.multiplyScalar(-oe),c.add(F)}}(),G=function(){const F=new Q;return function(oe,xe){t.screenSpacePanning===!0?F.setFromMatrixColumn(xe,1):(F.setFromMatrixColumn(xe,0),F.crossVectors(t.object.up,F)),F.multiplyScalar(oe),c.add(F)}}(),R=function(){const F=new Q;return function(oe,xe){const S=t.domElement;if(t.object.isPerspectiveCamera){const te=t.object.position;F.copy(te).sub(t.target);let j=F.length();j*=Math.tan(t.object.fov/2*Math.PI/180),T(2*oe*j/S.clientHeight,t.object.matrix),G(2*xe*j/S.clientHeight,t.object.matrix)}else t.object.isOrthographicCamera?(T(oe*(t.object.right-t.object.left)/t.object.zoom/S.clientWidth,t.object.matrix),G(xe*(t.object.top-t.object.bottom)/t.object.zoom/S.clientHeight,t.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),t.enablePan=!1)}}();function X(F){t.object.isPerspectiveCamera||t.object.isOrthographicCamera?l/=F:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),t.enableZoom=!1)}function W(F){t.object.isPerspectiveCamera||t.object.isOrthographicCamera?l*=F:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),t.enableZoom=!1)}function Y(F,ie){if(!t.zoomToCursor)return;U=!0;const oe=t.domElement.getBoundingClientRect(),xe=F-oe.left,S=ie-oe.top,te=oe.width,j=oe.height;b.x=xe/te*2-1,b.y=-(S/j)*2+1,E.set(b.x,b.y,1).unproject(t.object).sub(t.object.position).normalize()}function J(F){return Math.max(t.minDistance,Math.min(t.maxDistance,F))}function ee(F){u.set(F.clientX,F.clientY)}function re(F){Y(F.clientX,F.clientX),f.set(F.clientX,F.clientY)}function we(F){g.set(F.clientX,F.clientY)}function O(F){h.set(F.clientX,F.clientY),p.subVectors(h,u).multiplyScalar(t.rotateSpeed);const ie=t.domElement;k(2*Math.PI*p.x/ie.clientHeight),z(2*Math.PI*p.y/ie.clientHeight),u.copy(h),t.update()}function Z(F){C.set(F.clientX,F.clientY),v.subVectors(C,f),v.y>0?X(M(v.y)):v.y<0&&W(M(v.y)),f.copy(C),t.update()}function ce(F){m.set(F.clientX,F.clientY),d.subVectors(m,g).multiplyScalar(t.panSpeed),R(d.x,d.y),g.copy(m),t.update()}function ve(F){Y(F.clientX,F.clientY),F.deltaY<0?W(M(F.deltaY)):F.deltaY>0&&X(M(F.deltaY)),t.update()}function Me(F){let ie=!1;switch(F.code){case t.keys.UP:F.ctrlKey||F.metaKey||F.shiftKey?z(2*Math.PI*t.rotateSpeed/t.domElement.clientHeight):R(0,t.keyPanSpeed),ie=!0;break;case t.keys.BOTTOM:F.ctrlKey||F.metaKey||F.shiftKey?z(-2*Math.PI*t.rotateSpeed/t.domElement.clientHeight):R(0,-t.keyPanSpeed),ie=!0;break;case t.keys.LEFT:F.ctrlKey||F.metaKey||F.shiftKey?k(2*Math.PI*t.rotateSpeed/t.domElement.clientHeight):R(t.keyPanSpeed,0),ie=!0;break;case t.keys.RIGHT:F.ctrlKey||F.metaKey||F.shiftKey?k(-2*Math.PI*t.rotateSpeed/t.domElement.clientHeight):R(-t.keyPanSpeed,0),ie=!0;break}ie&&(F.preventDefault(),t.update())}function pe(F){if(y.length===1)u.set(F.pageX,F.pageY);else{const ie=he(F),oe=.5*(F.pageX+ie.x),xe=.5*(F.pageY+ie.y);u.set(oe,xe)}}function Xe(F){if(y.length===1)g.set(F.pageX,F.pageY);else{const ie=he(F),oe=.5*(F.pageX+ie.x),xe=.5*(F.pageY+ie.y);g.set(oe,xe)}}function Le(F){const ie=he(F),oe=F.pageX-ie.x,xe=F.pageY-ie.y,S=Math.sqrt(oe*oe+xe*xe);f.set(0,S)}function I(F){t.enableZoom&&Le(F),t.enablePan&&Xe(F)}function BA(F){t.enableZoom&&Le(F),t.enableRotate&&pe(F)}function Ue(F){if(y.length==1)h.set(F.pageX,F.pageY);else{const oe=he(F),xe=.5*(F.pageX+oe.x),S=.5*(F.pageY+oe.y);h.set(xe,S)}p.subVectors(h,u).multiplyScalar(t.rotateSpeed);const ie=t.domElement;k(2*Math.PI*p.x/ie.clientHeight),z(2*Math.PI*p.y/ie.clientHeight),u.copy(h)}function be(F){if(y.length===1)m.set(F.pageX,F.pageY);else{const ie=he(F),oe=.5*(F.pageX+ie.x),xe=.5*(F.pageY+ie.y);m.set(oe,xe)}d.subVectors(m,g).multiplyScalar(t.panSpeed),R(d.x,d.y),g.copy(m)}function _e(F){const ie=he(F),oe=F.pageX-ie.x,xe=F.pageY-ie.y,S=Math.sqrt(oe*oe+xe*xe);C.set(0,S),v.set(0,Math.pow(C.y/f.y,t.zoomSpeed)),X(v.y),f.copy(C);const te=(F.pageX+ie.x)*.5,j=(F.pageY+ie.y)*.5;Y(te,j)}function sA(F){t.enableZoom&&_e(F),t.enablePan&&be(F)}function Re(F){t.enableZoom&&_e(F),t.enableRotate&&Ue(F)}function x(F){t.enabled!==!1&&(y.length===0&&(t.domElement.setPointerCapture(F.pointerId),t.domElement.addEventListener("pointermove",w),t.domElement.addEventListener("pointerup",D)),Ge(F),F.pointerType==="touch"?De(F):ne(F))}function w(F){t.enabled!==!1&&(F.pointerType==="touch"?$(F):q(F))}function D(F){switch(Te(F),y.length){case 0:t.domElement.releasePointerCapture(F.pointerId),t.domElement.removeEventListener("pointermove",w),t.domElement.removeEventListener("pointerup",D),t.dispatchEvent(Zu),r=i.NONE;break;case 1:const ie=y[0],oe=H[ie];De({pointerId:ie,pageX:oe.x,pageY:oe.y});break}}function ne(F){let ie;switch(F.button){case 0:ie=t.mouseButtons.LEFT;break;case 1:ie=t.mouseButtons.MIDDLE;break;case 2:ie=t.mouseButtons.RIGHT;break;default:ie=-1}switch(ie){case Pn.DOLLY:if(t.enableZoom===!1)return;re(F),r=i.DOLLY;break;case Pn.ROTATE:if(F.ctrlKey||F.metaKey||F.shiftKey){if(t.enablePan===!1)return;we(F),r=i.PAN}else{if(t.enableRotate===!1)return;ee(F),r=i.ROTATE}break;case Pn.PAN:if(F.ctrlKey||F.metaKey||F.shiftKey){if(t.enableRotate===!1)return;ee(F),r=i.ROTATE}else{if(t.enablePan===!1)return;we(F),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&t.dispatchEvent(mo)}function q(F){switch(r){case i.ROTATE:if(t.enableRotate===!1)return;O(F);break;case i.DOLLY:if(t.enableZoom===!1)return;Z(F);break;case i.PAN:if(t.enablePan===!1)return;ce(F);break}}function Ae(F){t.enabled===!1||t.enableZoom===!1||r!==i.NONE||(F.preventDefault(),t.dispatchEvent(mo),ve(ge(F)),t.dispatchEvent(Zu))}function ge(F){const ie=F.deltaMode,oe={clientX:F.clientX,clientY:F.clientY,deltaY:F.deltaY};switch(ie){case 1:oe.deltaY*=16;break;case 2:oe.deltaY*=100;break}return F.ctrlKey&&!K&&(oe.deltaY*=10),oe}function ae(F){F.key==="Control"&&(K=!0,t.domElement.getRootNode().addEventListener("keyup",de,{passive:!0,capture:!0}))}function de(F){F.key==="Control"&&(K=!1,t.domElement.getRootNode().removeEventListener("keyup",de,{passive:!0,capture:!0}))}function Se(F){t.enabled===!1||t.enablePan===!1||Me(F)}function De(F){switch(Ee(F),y.length){case 1:switch(t.touches.ONE){case Nn.ROTATE:if(t.enableRotate===!1)return;pe(F),r=i.TOUCH_ROTATE;break;case Nn.PAN:if(t.enablePan===!1)return;Xe(F),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(t.touches.TWO){case Nn.DOLLY_PAN:if(t.enableZoom===!1&&t.enablePan===!1)return;I(F),r=i.TOUCH_DOLLY_PAN;break;case Nn.DOLLY_ROTATE:if(t.enableZoom===!1&&t.enableRotate===!1)return;BA(F),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&t.dispatchEvent(mo)}function $(F){switch(Ee(F),r){case i.TOUCH_ROTATE:if(t.enableRotate===!1)return;Ue(F),t.update();break;case i.TOUCH_PAN:if(t.enablePan===!1)return;be(F),t.update();break;case i.TOUCH_DOLLY_PAN:if(t.enableZoom===!1&&t.enablePan===!1)return;sA(F),t.update();break;case i.TOUCH_DOLLY_ROTATE:if(t.enableZoom===!1&&t.enableRotate===!1)return;Re(F),t.update();break;default:r=i.NONE}}function $e(F){t.enabled!==!1&&F.preventDefault()}function Ge(F){y.push(F.pointerId)}function Te(F){delete H[F.pointerId];for(let ie=0;ie<y.length;ie++)if(y[ie]==F.pointerId){y.splice(ie,1);return}}function Ee(F){let ie=H[F.pointerId];ie===void 0&&(ie=new Ie,H[F.pointerId]=ie),ie.set(F.pageX,F.pageY)}function he(F){const ie=F.pointerId===y[0]?y[1]:y[0];return H[ie]}t.domElement.addEventListener("contextmenu",$e),t.domElement.addEventListener("pointerdown",x),t.domElement.addEventListener("pointercancel",D),t.domElement.addEventListener("wheel",Ae,{passive:!1}),t.domElement.getRootNode().addEventListener("keydown",ae,{passive:!0,capture:!0}),this.update()}}class F2{constructor(e,A=0,t=!0){if(e){const{title:i,header:r,rows:s}=this.extract(e);this._title=i,this._header=r,this._rows=s}}extract(e){const A=e.toString().split(/\r?\n/),t=A[0],i=A[1].split(","),r=A[A.length-1]===""?A.length-1:A.length;return{title:t,header:i,rows:A.slice(1,r)}}get columnCount(){return this.header?this.header.length:this.rows[0].length}get rowCount(){return this.rows.length}getNumber(e,A){const t=this.rows[e];return parseFloat(t.split(",")[A])}get title(){return this._title}get header(){return this._header}get rows(){return this._rows}}class pl extends un{constructor(e,A=30,t=1,i=8,r=!1){super(),this.type="HelixGeometry",this.parameters={path:e,tubularSegments:A,radius:t,radialSegments:i,closed:r};const s=e.computeFrenetFrames(A,r);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;const a=new Q,o=new Q,l=new Ie;let c=new Q;const u=[],h=[],p=[],g=[],m=[];d(),this.setIndex(g),this.setAttribute("position",new ht(u,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(p,2)),this.setAttribute("vColors",new ht(m,3));function d(){for(let E=0;E<A;E++)f(E);f(r===!1?A:0),v(),C()}function f(E){const b=e.getUtoTmapping(E/A);c=e.getPoint(b,c);const U=e.getColor(b),y=s.normals[E],H=s.binormals[E];for(let K=0;K<=i;K++){const B=K/i*Math.PI*2,M=Math.sin(B),k=-Math.cos(B);o.x=k*y.x+M*H.x,o.y=k*y.y+M*H.y,o.z=k*y.z+M*H.z,o.normalize(),h.push(o.x,o.y,o.z),a.x=c.x+t*o.x,a.y=c.y+t*o.y,a.z=c.z+t*o.z,u.push(a.x,a.y,a.z),m.push(U.r,U.g,U.b)}}function C(){for(let E=1;E<=A;E++)for(let b=1;b<=i;b++){const U=(i+1)*(E-1)+(b-1),y=(i+1)*E+(b-1),H=(i+1)*E+b,K=(i+1)*(E-1)+b;g.push(U,y,K),g.push(y,H,K)}}function v(){for(let E=0;E<=A;E++)for(let b=0;b<=i;b++)l.x=E/A,l.y=b/i,p.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new pl(new Curves[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}const qo=12,Hf=[],Pf=[];var wr,vr,_r,xi,Cr,Qt;class b2{constructor(e,A=-1,t=1.5,i=.4,r=1,s=2.5){oA(this,wr,void 0);oA(this,vr,void 0);oA(this,_r,void 0);oA(this,xi,void 0);oA(this,Cr,void 0);oA(this,Qt,void 0);this.settings=e,this.csv=new F2(e.showcaseCSV),this.helixConfiguration={minT:A,maxT:t,minR:i,maxR:r,height:s},nA(this,_r,e.cold),nA(this,xi,e.zero),nA(this,Cr,e.warm),this.curve=[]}createMesh(e={wireframe:!1,vertexColors:!0}){this.createCurve();const A=this.createGeometry();e.wireframe&&(e.color=gr.styledColor("--wireframe-color"));const[t,i,r]=Be(this,wr).toArray();A.translate(-t,-i,-r);const s=new nl(e);return nA(this,vr,new wt(A,s)),Be(this,vr)}createCurve(){if(this.curve.length===0){this.years=this.csv.rowCount;for(let e=0;e<this.years;e++)for(let A=0;A<12;A++){const t=this.helixPoint(e,A);t&&this.curve.push(t)}nA(this,wr,this.centerOfGravity())}}centerOfGravity(){if(!this.curve||this.curve.length===0)return new Q(0,0,0);let e=0,A=0,t=0;const i=this.curve.length;return this.curve.forEach((r,s)=>{e+=r.radius*r.cosX,A+=r.radius*r.sinX,t+=s/i*this.height}),new Q(e/i,A/i,t/i)}createGeometry(){const e=this.settings.radiusFactor*this.helixConfiguration.height/this.years,A=new pl(new T2(this),this.settings.tubularSegments*(this.curve.length-1),e,this.settings.radialSegments,!1),t=A.getAttribute("vColors"),i=new ft(new Float32Array(t.array),3);return A.setAttribute("color",i),A}helixPoint(e,A){const t=this.csv.getNumber(e,A+1);if(t){const i=Nf(this.helixConfiguration.minT,this.helixConfiguration.maxT,this.helixConfiguration.minR,this.helixConfiguration.maxR,t),r=new qe;return t<0?r.lerpColors(Be(this,xi),Be(this,_r),Math.abs(t)):r.lerpColors(Be(this,xi),Be(this,Cr),t),{sinX:Hf[A],cosX:Pf[A],radius:i,temperature:t,color:r}}}get height(){return this.helixConfiguration.height}get length(){return this.curve.length/qo}curveIndex(e){return Math.floor((this.curve.length-1)*e)}info(e){return this.curve[this.curveIndex(e)]}createTitleDiv(e){const A="heading-div",t=e.querySelector(`.${A}`);return t&&e.removeChild(t),Be(this,Qt)||(nA(this,Qt,document.createElement("DIV")),Be(this,Qt).setAttribute("class",A),e.appendChild(Be(this,Qt))),Be(this,Qt).innerText=this.csv.title,Be(this,Qt)}}wr=new WeakMap,vr=new WeakMap,_r=new WeakMap,xi=new WeakMap,Cr=new WeakMap,Qt=new WeakMap;class T2 extends v1{constructor(e){super(),this.helix=e}getPoint(e,A=new Q){const t=2*Math.PI*this.helix.length*e,i=this.helix.curveIndex(e),r=this.helix.curve[i],s=this.helix.curve[i+1]||r,a=i/(this.helix.curve.length-1),o=(i+1)/(this.helix.curve.length-1),l=Nf(a,o,r.radius,s.radius,e),c=l*Math.cos(t),u=l*Math.sin(t),h=this.helix.height*e;return A.set(c,u,h)}getColor(e){const A=this.helix.curveIndex(e),t=this.helix.curve[A],i=this.helix.curve[A+1]||t,r=A/(this.helix.curve.length-1),s=(A+1)/(this.helix.curve.length-1);return new qe().lerpColors(t.color,i.color,(e-r)/(s-r))}}for(let n=0;n<qo;n++){const e=2*Math.PI*n/qo;Hf.push(Math.sin(e)),Pf.push(Math.cos(e))}function Nf(n,e,A,t,i){return e-n===0?(A+t)/2:(i-n)*(t-A)/(e-n)+A}HTMLCanvasElement.prototype.getContext=function(n){return function(e,A){return A=A||{},A.preserveDrawingBuffer=!0,n.call(this,e,A)}}(HTMLCanvasElement.prototype.getContext);var Ui,yi,Fn,zs,Of;class Q2{constructor(e,A={All:void 0,Helix:void 0}){oA(this,zs);oA(this,Ui,void 0);oA(this,yi,void 0);oA(this,Fn,void 0);nA(this,Ui,()=>document.body),Cl(this,zs,Of).call(this,e,A),document.addEventListener("keydown",t=>{t.altKey&&t.key==="s"&&(t.stopPropagation(),t.preventDefault(),this.capture())})}capture(e=Be(this,Ui)){console.log(`screenCapture ${e}`);const A=e();if(!A)throw new Error("No element to capture");setTimeout(()=>{const i=window.getComputedStyle(document.body).getPropertyValue("background-color");Rf(A,{backgroundColor:i}).then(r=>{const s=document.createElement("a");s.href=r.toDataURL(),s.download="climate-helix.png",s.click()})},100)}}Ui=new WeakMap,yi=new WeakMap,Fn=new WeakMap,zs=new WeakSet,Of=function(e,A){const t={};nA(this,yi,A);for(const[s,a]of Object.entries(A))t[s]=void 0;const i=e.folder,r=e.property;r.selection="All",nA(this,Fn,"All"),nA(this,Ui,()=>(console.log(Be(this,Fn)),console.log(Be(this,yi)),Be(this,yi)[Be(this,Fn)])),r.on_capture_clicked=()=>this.capture(),gr.addRadioButtons(i,r.selection,t,(s,a,o)=>{console.log(`${s}, ${a}, ${o}`),nA(this,Fn,o)}),i.add(r,"on_capture_clicked").name("Click or press 'alt s'")};const L2=`<p>The 3D helix visualizes <u>differences to a temperature mean</u> calculated for a specific month within the region of
    interest <a target="_blank" rel="noopener noreferrer" href="https://data.giss.nasa.gov/gistemp/">[2]</a>.
    Temperature data are shown from 1880 until the beginning of 2023.</p>
<p>Each loop within the helix is divided into 12 segments, one for each month of the year.
    The distance from the center is proportional to the difference to the mean temperature for that month.</p>
<hr>
<h3>References</h3>
<ol>
    <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/mkuehne-git/climate-helix">Climate-Helix
            on Github</a></li>
    <li><a target="_blank" rel="noopener noreferrer" href="https://data.giss.nasa.gov/gistemp/">GISS Surface Temperature
        Analysis (GISTEMP v4)</a></li>
</ol>`,oa=document.createElement("DIV"),Gf=".container-div";oa.setAttribute("class","container-div");document.body.appendChild(oa);const or=new gr,I2=new _2({container:oa});let pi,Un,lr,Jt,vs,_s;function R2(){lr=new w1,Jt=new bh({antialias:!0}),Jt.setPixelRatio(window.devicePixelRatio);const n=window.innerWidth,e=window.innerHeight;Jt.setSize(n,e),oa.appendChild(Jt.domElement),D2();const A=n/e;Un=new At(50,A),Un.position.set(0,0,5.5),lr.add(Un),pi=new zi,lr.add(pi),new M2(Un,Jt.domElement).update(),window.addEventListener("resize",O2),window.addEventListener(Ye.CREATE_HELIX,Vf),document.body.addEventListener(Ye.THEME_CHANGED.toString(),N2);const i={All:document.body,Helix:Jt.domElement};new Q2(or.captureSettings(),i),H2(),P2(),Ye.dispatchEvent(Ye.THEME_CHANGED),Kf()}function D2(){return new fl(document.body,n=>{const A=window.getComputedStyle(document.body).getPropertyValue("background-color");lr.background=new qe(A)})}function Vf(){vs&&pi.remove(vs),_s&&pi.remove(_s);const n=new b2(or);or.showFaces&&(vs=n.createMesh(),pi.add(vs)),or.showWireframe&&(_s=n.createMesh({wireframe:!0,vertexColors:!1}),pi.add(_s));const e=document.querySelector(Gf);n.createTitleDiv(e)}function H2(){const n=document.querySelector(Gf)||document.body;new y2(n)}function P2(){const n=document.createElement("DIV");n.setAttribute("id","info-div"),n.innerHTML=L2;const e=document.querySelector(".info-button");e==null||e.insertAdjacentElement("beforebegin",n);const A=document.createElement("SPAN");A.setAttribute("id","version-info"),A.innerHTML="v0.2.9",e==null||e.insertAdjacentElement("beforebegin",A)}function Kf(){requestAnimationFrame(Kf),Jt.render(lr,Un)}function N2(){or.initializeColors(),Vf()}function O2(){Un.aspect=window.innerWidth/window.innerHeight,Un.updateProjectionMatrix(),Jt.setSize(window.innerWidth,window.innerHeight)}R2();I2.initTheme();
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
