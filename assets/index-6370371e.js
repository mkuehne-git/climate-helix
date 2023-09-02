var Xs=(n,A,e)=>{if(!A.has(n))throw TypeError("Cannot "+e)};var bA=(n,A,e)=>(Xs(n,A,"read from private field"),e?e.call(n):A.get(n)),Ue=(n,A,e)=>{if(A.has(n))throw TypeError("Cannot add the same private member more than once");A instanceof WeakSet?A.add(n):A.set(n,e)},_e=(n,A,e,t)=>(Xs(n,A,"write to private field"),t?t.call(n,e):A.set(n,e),e);var Zo=(n,A,e)=>(Xs(n,A,"access private method"),e);(function(){const A=document.createElement("link").relList;if(A&&A.supports&&A.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yo="155",Fn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},bn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},df=0,qo=1,pf=2,wu=1,gf=2,St=3,en=0,Pe=1,bt=2,Zt=0,ai=1,jo=2,$o=3,Al=4,mf=5,Ai=100,Bf=101,wf=102,el=103,tl=104,vf=200,_f=201,Cf=202,Ef=203,vu=204,_u=205,xf=206,Uf=207,yf=208,Sf=209,Mf=210,Ff=0,bf=1,Tf=2,Wa=3,Qf=4,If=5,Lf=6,Rf=7,Cu=0,Hf=1,Df=2,qt=0,Pf=1,Of=2,Nf=3,Gf=4,Vf=5,Eu=300,di=301,pi=302,Xa=303,Ya=304,Fs=306,Ja=1e3,st=1001,Za=1002,He=1003,nl=1004,Ys=1005,Je=1006,Kf=1007,Ar=1008,jt=1009,kf=1010,zf=1011,So=1012,xu=1013,zt=1014,Wt=1015,er=1016,Uu=1017,yu=1018,wn=1020,Wf=1021,at=1023,Xf=1024,Yf=1025,vn=1026,gi=1027,Jf=1028,Su=1029,Zf=1030,Mu=1031,Fu=1033,Js=33776,Zs=33777,qs=33778,js=33779,il=35840,rl=35841,sl=35842,al=35843,qf=36196,ol=37492,ll=37496,cl=37808,ul=37809,hl=37810,fl=37811,dl=37812,pl=37813,gl=37814,ml=37815,Bl=37816,wl=37817,vl=37818,_l=37819,Cl=37820,El=37821,$s=36492,jf=36283,xl=36284,Ul=36285,yl=36286,bu=3e3,_n=3001,$f=3200,Ad=3201,ed=0,td=1,Cn="",LA="srgb",pt="srgb-linear",Tu="display-p3",Aa=7680,nd=519,id=512,rd=513,sd=514,ad=515,od=516,ld=517,cd=518,ud=519,Sl=35044,Ml="300 es",qa=1035,Tt=2e3,ps=2001;class Mn{addEventListener(A,e){this._listeners===void 0&&(this._listeners={});const t=this._listeners;t[A]===void 0&&(t[A]=[]),t[A].indexOf(e)===-1&&t[A].push(e)}hasEventListener(A,e){if(this._listeners===void 0)return!1;const t=this._listeners;return t[A]!==void 0&&t[A].indexOf(e)!==-1}removeEventListener(A,e){if(this._listeners===void 0)return;const i=this._listeners[A];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(A){if(this._listeners===void 0)return;const t=this._listeners[A.type];if(t!==void 0){A.target=this;const i=t.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,A);A.target=null}}}const ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fl=1234567;const Ki=Math.PI/180,tr=180/Math.PI;function vi(){const n=Math.random()*4294967295|0,A=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0;return(ye[n&255]+ye[n>>8&255]+ye[n>>16&255]+ye[n>>24&255]+"-"+ye[A&255]+ye[A>>8&255]+"-"+ye[A>>16&15|64]+ye[A>>24&255]+"-"+ye[e&63|128]+ye[e>>8&255]+"-"+ye[e>>16&255]+ye[e>>24&255]+ye[t&255]+ye[t>>8&255]+ye[t>>16&255]+ye[t>>24&255]).toLowerCase()}function Be(n,A,e){return Math.max(A,Math.min(e,n))}function Mo(n,A){return(n%A+A)%A}function hd(n,A,e,t,i){return t+(n-A)*(i-t)/(e-A)}function fd(n,A,e){return n!==A?(e-n)/(A-n):0}function ki(n,A,e){return(1-e)*n+e*A}function dd(n,A,e,t){return ki(n,A,1-Math.exp(-e*t))}function pd(n,A=1){return A-Math.abs(Mo(n,A*2)-A)}function gd(n,A,e){return n<=A?0:n>=e?1:(n=(n-A)/(e-A),n*n*(3-2*n))}function md(n,A,e){return n<=A?0:n>=e?1:(n=(n-A)/(e-A),n*n*n*(n*(n*6-15)+10))}function Bd(n,A){return n+Math.floor(Math.random()*(A-n+1))}function wd(n,A){return n+Math.random()*(A-n)}function vd(n){return n*(.5-Math.random())}function _d(n){n!==void 0&&(Fl=n);let A=Fl+=1831565813;return A=Math.imul(A^A>>>15,A|1),A^=A+Math.imul(A^A>>>7,A|61),((A^A>>>14)>>>0)/4294967296}function Cd(n){return n*Ki}function Ed(n){return n*tr}function ja(n){return(n&n-1)===0&&n!==0}function xd(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function gs(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ud(n,A,e,t,i){const r=Math.cos,s=Math.sin,a=r(e/2),o=s(e/2),l=r((A+t)/2),c=s((A+t)/2),u=r((A-t)/2),h=s((A-t)/2),p=r((t-A)/2),g=s((t-A)/2);switch(i){case"XYX":n.set(a*c,o*u,o*h,a*l);break;case"YZY":n.set(o*h,a*c,o*u,a*l);break;case"ZXZ":n.set(o*u,o*h,a*c,a*l);break;case"XZX":n.set(a*c,o*g,o*p,a*l);break;case"YXY":n.set(o*p,a*c,o*g,a*l);break;case"ZYZ":n.set(o*g,o*p,a*c,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ei(n,A){switch(A.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Qe(n,A){switch(A.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const yd={DEG2RAD:Ki,RAD2DEG:tr,generateUUID:vi,clamp:Be,euclideanModulo:Mo,mapLinear:hd,inverseLerp:fd,lerp:ki,damp:dd,pingpong:pd,smoothstep:gd,smootherstep:md,randInt:Bd,randFloat:wd,randFloatSpread:vd,seededRandom:_d,degToRad:Cd,radToDeg:Ed,isPowerOfTwo:ja,ceilPowerOfTwo:xd,floorPowerOfTwo:gs,setQuaternionFromProperEuler:Ud,normalize:Qe,denormalize:ei};class RA{constructor(A=0,e=0){RA.prototype.isVector2=!0,this.x=A,this.y=e}get width(){return this.x}set width(A){this.x=A}get height(){return this.y}set height(A){this.y=A}set(A,e){return this.x=A,this.y=e,this}setScalar(A){return this.x=A,this.y=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setComponent(A,e){switch(A){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y)}copy(A){return this.x=A.x,this.y=A.y,this}add(A){return this.x+=A.x,this.y+=A.y,this}addScalar(A){return this.x+=A,this.y+=A,this}addVectors(A,e){return this.x=A.x+e.x,this.y=A.y+e.y,this}addScaledVector(A,e){return this.x+=A.x*e,this.y+=A.y*e,this}sub(A){return this.x-=A.x,this.y-=A.y,this}subScalar(A){return this.x-=A,this.y-=A,this}subVectors(A,e){return this.x=A.x-e.x,this.y=A.y-e.y,this}multiply(A){return this.x*=A.x,this.y*=A.y,this}multiplyScalar(A){return this.x*=A,this.y*=A,this}divide(A){return this.x/=A.x,this.y/=A.y,this}divideScalar(A){return this.multiplyScalar(1/A)}applyMatrix3(A){const e=this.x,t=this.y,i=A.elements;return this.x=i[0]*e+i[3]*t+i[6],this.y=i[1]*e+i[4]*t+i[7],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this}clamp(A,e){return this.x=Math.max(A.x,Math.min(e.x,this.x)),this.y=Math.max(A.y,Math.min(e.y,this.y)),this}clampScalar(A,e){return this.x=Math.max(A,Math.min(e,this.x)),this.y=Math.max(A,Math.min(e,this.y)),this}clampLength(A,e){const t=this.length();return this.divideScalar(t||1).multiplyScalar(Math.max(A,Math.min(e,t)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(A){return this.x*A.x+this.y*A.y}cross(A){return this.x*A.y-this.y*A.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(A){const e=Math.sqrt(this.lengthSq()*A.lengthSq());if(e===0)return Math.PI/2;const t=this.dot(A)/e;return Math.acos(Be(t,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const e=this.x-A.x,t=this.y-A.y;return e*e+t*t}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,e){return this.x+=(A.x-this.x)*e,this.y+=(A.y-this.y)*e,this}lerpVectors(A,e,t){return this.x=A.x+(e.x-A.x)*t,this.y=A.y+(e.y-A.y)*t,this}equals(A){return A.x===this.x&&A.y===this.y}fromArray(A,e=0){return this.x=A[e],this.y=A[e+1],this}toArray(A=[],e=0){return A[e]=this.x,A[e+1]=this.y,A}fromBufferAttribute(A,e){return this.x=A.getX(e),this.y=A.getY(e),this}rotateAround(A,e){const t=Math.cos(e),i=Math.sin(e),r=this.x-A.x,s=this.y-A.y;return this.x=r*t-s*i+A.x,this.y=r*i+s*t+A.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class PA{constructor(A,e,t,i,r,s,a,o,l){PA.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],A!==void 0&&this.set(A,e,t,i,r,s,a,o,l)}set(A,e,t,i,r,s,a,o,l){const c=this.elements;return c[0]=A,c[1]=i,c[2]=a,c[3]=e,c[4]=r,c[5]=o,c[6]=t,c[7]=s,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(A){const e=this.elements,t=A.elements;return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],this}extractBasis(A,e,t){return A.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),t.setFromMatrix3Column(this,2),this}setFromMatrix4(A){const e=A.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,e){const t=A.elements,i=e.elements,r=this.elements,s=t[0],a=t[3],o=t[6],l=t[1],c=t[4],u=t[7],h=t[2],p=t[5],g=t[8],m=i[0],d=i[3],f=i[6],C=i[1],v=i[4],_=i[7],E=i[2],y=i[5],U=i[8];return r[0]=s*m+a*C+o*E,r[3]=s*d+a*v+o*y,r[6]=s*f+a*_+o*U,r[1]=l*m+c*C+u*E,r[4]=l*d+c*v+u*y,r[7]=l*f+c*_+u*U,r[2]=h*m+p*C+g*E,r[5]=h*d+p*v+g*y,r[8]=h*f+p*_+g*U,this}multiplyScalar(A){const e=this.elements;return e[0]*=A,e[3]*=A,e[6]*=A,e[1]*=A,e[4]*=A,e[7]*=A,e[2]*=A,e[5]*=A,e[8]*=A,this}determinant(){const A=this.elements,e=A[0],t=A[1],i=A[2],r=A[3],s=A[4],a=A[5],o=A[6],l=A[7],c=A[8];return e*s*c-e*a*l-t*r*c+t*a*o+i*r*l-i*s*o}invert(){const A=this.elements,e=A[0],t=A[1],i=A[2],r=A[3],s=A[4],a=A[5],o=A[6],l=A[7],c=A[8],u=c*s-a*l,h=a*o-c*r,p=l*r-s*o,g=e*u+t*h+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return A[0]=u*m,A[1]=(i*l-c*t)*m,A[2]=(a*t-i*s)*m,A[3]=h*m,A[4]=(c*e-i*o)*m,A[5]=(i*r-a*e)*m,A[6]=p*m,A[7]=(t*o-l*e)*m,A[8]=(s*e-t*r)*m,this}transpose(){let A;const e=this.elements;return A=e[1],e[1]=e[3],e[3]=A,A=e[2],e[2]=e[6],e[6]=A,A=e[5],e[5]=e[7],e[7]=A,this}getNormalMatrix(A){return this.setFromMatrix4(A).invert().transpose()}transposeIntoArray(A){const e=this.elements;return A[0]=e[0],A[1]=e[3],A[2]=e[6],A[3]=e[1],A[4]=e[4],A[5]=e[7],A[6]=e[2],A[7]=e[5],A[8]=e[8],this}setUvTransform(A,e,t,i,r,s,a){const o=Math.cos(r),l=Math.sin(r);return this.set(t*o,t*l,-t*(o*s+l*a)+s+A,-i*l,i*o,-i*(-l*s+o*a)+a+e,0,0,1),this}scale(A,e){return this.premultiply(ea.makeScale(A,e)),this}rotate(A){return this.premultiply(ea.makeRotation(-A)),this}translate(A,e){return this.premultiply(ea.makeTranslation(A,e)),this}makeTranslation(A,e){return A.isVector2?this.set(1,0,A.x,0,1,A.y,0,0,1):this.set(1,0,A,0,1,e,0,0,1),this}makeRotation(A){const e=Math.cos(A),t=Math.sin(A);return this.set(e,-t,0,t,e,0,0,0,1),this}makeScale(A,e){return this.set(A,0,0,0,e,0,0,0,1),this}equals(A){const e=this.elements,t=A.elements;for(let i=0;i<9;i++)if(e[i]!==t[i])return!1;return!0}fromArray(A,e=0){for(let t=0;t<9;t++)this.elements[t]=A[t+e];return this}toArray(A=[],e=0){const t=this.elements;return A[e]=t[0],A[e+1]=t[1],A[e+2]=t[2],A[e+3]=t[3],A[e+4]=t[4],A[e+5]=t[5],A[e+6]=t[6],A[e+7]=t[7],A[e+8]=t[8],A}clone(){return new this.constructor().fromArray(this.elements)}}const ea=new PA;function Qu(n){for(let A=n.length-1;A>=0;--A)if(n[A]>=65535)return!0;return!1}function ms(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}const bl={};function zi(n){n in bl||(bl[n]=!0,console.warn(n))}function oi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ta(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Sd=new PA().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Md=new PA().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Fd(n){return n.convertSRGBToLinear().applyMatrix3(Md)}function bd(n){return n.applyMatrix3(Sd).convertLinearToSRGB()}const Td={[pt]:n=>n,[LA]:n=>n.convertSRGBToLinear(),[Tu]:Fd},Qd={[pt]:n=>n,[LA]:n=>n.convertLinearToSRGB(),[Tu]:bd},At={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return pt},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,A,e){if(this.enabled===!1||A===e||!A||!e)return n;const t=Td[A],i=Qd[e];if(t===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${A}" to "${e}".`);return i(t(n))},fromWorkingColorSpace:function(n,A){return this.convert(n,this.workingColorSpace,A)},toWorkingColorSpace:function(n,A){return this.convert(n,A,this.workingColorSpace)}};let Tn;class Iu{static getDataURL(A){if(/^data:/i.test(A.src)||typeof HTMLCanvasElement>"u")return A.src;let e;if(A instanceof HTMLCanvasElement)e=A;else{Tn===void 0&&(Tn=ms("canvas")),Tn.width=A.width,Tn.height=A.height;const t=Tn.getContext("2d");A instanceof ImageData?t.putImageData(A,0,0):t.drawImage(A,0,0,A.width,A.height),e=Tn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",A),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const e=ms("canvas");e.width=A.width,e.height=A.height;const t=e.getContext("2d");t.drawImage(A,0,0,A.width,A.height);const i=t.getImageData(0,0,A.width,A.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=oi(r[s]/255)*255;return t.putImageData(i,0,0),e}else if(A.data){const e=A.data.slice(0);for(let t=0;t<e.length;t++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[t]=Math.floor(oi(e[t]/255)*255):e[t]=oi(e[t]);return{data:e,width:A.width,height:A.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),A}}let Id=0;class Lu{constructor(A=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=vi(),this.data=A,this.version=0}set needsUpdate(A){A===!0&&this.version++}toJSON(A){const e=A===void 0||typeof A=="string";if(!e&&A.images[this.uuid]!==void 0)return A.images[this.uuid];const t={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,a=i.length;s<a;s++)i[s].isDataTexture?r.push(na(i[s].image)):r.push(na(i[s]))}else r=na(i);t.url=r}return e||(A.images[this.uuid]=t),t}}function na(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Iu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ld=0;class Ke extends Mn{constructor(A=Ke.DEFAULT_IMAGE,e=Ke.DEFAULT_MAPPING,t=st,i=st,r=Je,s=Ar,a=at,o=jt,l=Ke.DEFAULT_ANISOTROPY,c=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=vi(),this.name="",this.source=new Lu(A),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=t,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=o,this.offset=new RA(0,0),this.repeat=new RA(1,1),this.center=new RA(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new PA,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(zi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===_n?LA:Cn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(A=null){this.source.data=A}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(A){return this.name=A.name,this.source=A.source,this.mipmaps=A.mipmaps.slice(0),this.mapping=A.mapping,this.channel=A.channel,this.wrapS=A.wrapS,this.wrapT=A.wrapT,this.magFilter=A.magFilter,this.minFilter=A.minFilter,this.anisotropy=A.anisotropy,this.format=A.format,this.internalFormat=A.internalFormat,this.type=A.type,this.offset.copy(A.offset),this.repeat.copy(A.repeat),this.center.copy(A.center),this.rotation=A.rotation,this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrix.copy(A.matrix),this.generateMipmaps=A.generateMipmaps,this.premultiplyAlpha=A.premultiplyAlpha,this.flipY=A.flipY,this.unpackAlignment=A.unpackAlignment,this.colorSpace=A.colorSpace,this.userData=JSON.parse(JSON.stringify(A.userData)),this.needsUpdate=!0,this}toJSON(A){const e=A===void 0||typeof A=="string";if(!e&&A.textures[this.uuid]!==void 0)return A.textures[this.uuid];const t={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(A).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(t.userData=this.userData),e||(A.textures[this.uuid]=t),t}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(A){if(this.mapping!==Eu)return A;if(A.applyMatrix3(this.matrix),A.x<0||A.x>1)switch(this.wrapS){case Ja:A.x=A.x-Math.floor(A.x);break;case st:A.x=A.x<0?0:1;break;case Za:Math.abs(Math.floor(A.x)%2)===1?A.x=Math.ceil(A.x)-A.x:A.x=A.x-Math.floor(A.x);break}if(A.y<0||A.y>1)switch(this.wrapT){case Ja:A.y=A.y-Math.floor(A.y);break;case st:A.y=A.y<0?0:1;break;case Za:Math.abs(Math.floor(A.y)%2)===1?A.y=Math.ceil(A.y)-A.y:A.y=A.y-Math.floor(A.y);break}return this.flipY&&(A.y=1-A.y),A}set needsUpdate(A){A===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return zi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===LA?_n:bu}set encoding(A){zi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=A===_n?LA:Cn}}Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=Eu;Ke.DEFAULT_ANISOTROPY=1;class Ee{constructor(A=0,e=0,t=0,i=1){Ee.prototype.isVector4=!0,this.x=A,this.y=e,this.z=t,this.w=i}get width(){return this.z}set width(A){this.z=A}get height(){return this.w}set height(A){this.w=A}set(A,e,t,i){return this.x=A,this.y=e,this.z=t,this.w=i,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this.w=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setW(A){return this.w=A,this}setComponent(A,e){switch(A){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w!==void 0?A.w:1,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this.w+=A.w,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this.w+=A,this}addVectors(A,e){return this.x=A.x+e.x,this.y=A.y+e.y,this.z=A.z+e.z,this.w=A.w+e.w,this}addScaledVector(A,e){return this.x+=A.x*e,this.y+=A.y*e,this.z+=A.z*e,this.w+=A.w*e,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this.w-=A.w,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this.w-=A,this}subVectors(A,e){return this.x=A.x-e.x,this.y=A.y-e.y,this.z=A.z-e.z,this.w=A.w-e.w,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this.w*=A.w,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this.w*=A,this}applyMatrix4(A){const e=this.x,t=this.y,i=this.z,r=this.w,s=A.elements;return this.x=s[0]*e+s[4]*t+s[8]*i+s[12]*r,this.y=s[1]*e+s[5]*t+s[9]*i+s[13]*r,this.z=s[2]*e+s[6]*t+s[10]*i+s[14]*r,this.w=s[3]*e+s[7]*t+s[11]*i+s[15]*r,this}divideScalar(A){return this.multiplyScalar(1/A)}setAxisAngleFromQuaternion(A){this.w=2*Math.acos(A.w);const e=Math.sqrt(1-A.w*A.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=A.x/e,this.y=A.y/e,this.z=A.z/e),this}setAxisAngleFromRotationMatrix(A){let e,t,i,r;const o=A.elements,l=o[0],c=o[4],u=o[8],h=o[1],p=o[5],g=o[9],m=o[2],d=o[6],f=o[10];if(Math.abs(c-h)<.01&&Math.abs(u-m)<.01&&Math.abs(g-d)<.01){if(Math.abs(c+h)<.1&&Math.abs(u+m)<.1&&Math.abs(g+d)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,_=(p+1)/2,E=(f+1)/2,y=(c+h)/4,U=(u+m)/4,L=(g+d)/4;return v>_&&v>E?v<.01?(t=0,i=.707106781,r=.707106781):(t=Math.sqrt(v),i=y/t,r=U/t):_>E?_<.01?(t=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),t=y/i,r=L/i):E<.01?(t=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),t=U/r,i=L/r),this.set(t,i,r,e),this}let C=Math.sqrt((d-g)*(d-g)+(u-m)*(u-m)+(h-c)*(h-c));return Math.abs(C)<.001&&(C=1),this.x=(d-g)/C,this.y=(u-m)/C,this.z=(h-c)/C,this.w=Math.acos((l+p+f-1)/2),this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this.w=Math.min(this.w,A.w),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this.w=Math.max(this.w,A.w),this}clamp(A,e){return this.x=Math.max(A.x,Math.min(e.x,this.x)),this.y=Math.max(A.y,Math.min(e.y,this.y)),this.z=Math.max(A.z,Math.min(e.z,this.z)),this.w=Math.max(A.w,Math.min(e.w,this.w)),this}clampScalar(A,e){return this.x=Math.max(A,Math.min(e,this.x)),this.y=Math.max(A,Math.min(e,this.y)),this.z=Math.max(A,Math.min(e,this.z)),this.w=Math.max(A,Math.min(e,this.w)),this}clampLength(A,e){const t=this.length();return this.divideScalar(t||1).multiplyScalar(Math.max(A,Math.min(e,t)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z+this.w*A.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,e){return this.x+=(A.x-this.x)*e,this.y+=(A.y-this.y)*e,this.z+=(A.z-this.z)*e,this.w+=(A.w-this.w)*e,this}lerpVectors(A,e,t){return this.x=A.x+(e.x-A.x)*t,this.y=A.y+(e.y-A.y)*t,this.z=A.z+(e.z-A.z)*t,this.w=A.w+(e.w-A.w)*t,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z&&A.w===this.w}fromArray(A,e=0){return this.x=A[e],this.y=A[e+1],this.z=A[e+2],this.w=A[e+3],this}toArray(A=[],e=0){return A[e]=this.x,A[e+1]=this.y,A[e+2]=this.z,A[e+3]=this.w,A}fromBufferAttribute(A,e){return this.x=A.getX(e),this.y=A.getY(e),this.z=A.getZ(e),this.w=A.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rd extends Mn{constructor(A=1,e=1,t={}){super(),this.isRenderTarget=!0,this.width=A,this.height=e,this.depth=1,this.scissor=new Ee(0,0,A,e),this.scissorTest=!1,this.viewport=new Ee(0,0,A,e);const i={width:A,height:e,depth:1};t.encoding!==void 0&&(zi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===_n?LA:Cn),this.texture=new Ke(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.internalFormat=t.internalFormat!==void 0?t.internalFormat:null,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Je,this.depthBuffer=t.depthBuffer!==void 0?t.depthBuffer:!0,this.stencilBuffer=t.stencilBuffer!==void 0?t.stencilBuffer:!1,this.depthTexture=t.depthTexture!==void 0?t.depthTexture:null,this.samples=t.samples!==void 0?t.samples:0}setSize(A,e,t=1){(this.width!==A||this.height!==e||this.depth!==t)&&(this.width=A,this.height=e,this.depth=t,this.texture.image.width=A,this.texture.image.height=e,this.texture.image.depth=t,this.dispose()),this.viewport.set(0,0,A,e),this.scissor.set(0,0,A,e)}clone(){return new this.constructor().copy(this)}copy(A){this.width=A.width,this.height=A.height,this.depth=A.depth,this.scissor.copy(A.scissor),this.scissorTest=A.scissorTest,this.viewport.copy(A.viewport),this.texture=A.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},A.texture.image);return this.texture.source=new Lu(e),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.samples=A.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Un extends Rd{constructor(A=1,e=1,t={}){super(A,e,t),this.isWebGLRenderTarget=!0}}class Ru extends Ke{constructor(A=null,e=1,t=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:A,width:e,height:t,depth:i},this.magFilter=He,this.minFilter=He,this.wrapR=st,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hd extends Ke{constructor(A=null,e=1,t=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:A,width:e,height:t,depth:i},this.magFilter=He,this.minFilter=He,this.wrapR=st,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yn{constructor(A=0,e=0,t=0,i=1){this.isQuaternion=!0,this._x=A,this._y=e,this._z=t,this._w=i}static slerpFlat(A,e,t,i,r,s,a){let o=t[i+0],l=t[i+1],c=t[i+2],u=t[i+3];const h=r[s+0],p=r[s+1],g=r[s+2],m=r[s+3];if(a===0){A[e+0]=o,A[e+1]=l,A[e+2]=c,A[e+3]=u;return}if(a===1){A[e+0]=h,A[e+1]=p,A[e+2]=g,A[e+3]=m;return}if(u!==m||o!==h||l!==p||c!==g){let d=1-a;const f=o*h+l*p+c*g+u*m,C=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const E=Math.sqrt(v),y=Math.atan2(E,f*C);d=Math.sin(d*y)/E,a=Math.sin(a*y)/E}const _=a*C;if(o=o*d+h*_,l=l*d+p*_,c=c*d+g*_,u=u*d+m*_,d===1-a){const E=1/Math.sqrt(o*o+l*l+c*c+u*u);o*=E,l*=E,c*=E,u*=E}}A[e]=o,A[e+1]=l,A[e+2]=c,A[e+3]=u}static multiplyQuaternionsFlat(A,e,t,i,r,s){const a=t[i],o=t[i+1],l=t[i+2],c=t[i+3],u=r[s],h=r[s+1],p=r[s+2],g=r[s+3];return A[e]=a*g+c*u+o*p-l*h,A[e+1]=o*g+c*h+l*u-a*p,A[e+2]=l*g+c*p+a*h-o*u,A[e+3]=c*g-a*u-o*h-l*p,A}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get w(){return this._w}set w(A){this._w=A,this._onChangeCallback()}set(A,e,t,i){return this._x=A,this._y=e,this._z=t,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(A){return this._x=A.x,this._y=A.y,this._z=A.z,this._w=A.w,this._onChangeCallback(),this}setFromEuler(A,e){const t=A._x,i=A._y,r=A._z,s=A._order,a=Math.cos,o=Math.sin,l=a(t/2),c=a(i/2),u=a(r/2),h=o(t/2),p=o(i/2),g=o(r/2);switch(s){case"XYZ":this._x=h*c*u+l*p*g,this._y=l*p*u-h*c*g,this._z=l*c*g+h*p*u,this._w=l*c*u-h*p*g;break;case"YXZ":this._x=h*c*u+l*p*g,this._y=l*p*u-h*c*g,this._z=l*c*g-h*p*u,this._w=l*c*u+h*p*g;break;case"ZXY":this._x=h*c*u-l*p*g,this._y=l*p*u+h*c*g,this._z=l*c*g+h*p*u,this._w=l*c*u-h*p*g;break;case"ZYX":this._x=h*c*u-l*p*g,this._y=l*p*u+h*c*g,this._z=l*c*g-h*p*u,this._w=l*c*u+h*p*g;break;case"YZX":this._x=h*c*u+l*p*g,this._y=l*p*u+h*c*g,this._z=l*c*g-h*p*u,this._w=l*c*u-h*p*g;break;case"XZY":this._x=h*c*u-l*p*g,this._y=l*p*u-h*c*g,this._z=l*c*g+h*p*u,this._w=l*c*u+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(A,e){const t=e/2,i=Math.sin(t);return this._x=A.x*i,this._y=A.y*i,this._z=A.z*i,this._w=Math.cos(t),this._onChangeCallback(),this}setFromRotationMatrix(A){const e=A.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10],h=t+a+u;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-o)*p,this._y=(r-l)*p,this._z=(s-i)*p}else if(t>a&&t>u){const p=2*Math.sqrt(1+t-a-u);this._w=(c-o)/p,this._x=.25*p,this._y=(i+s)/p,this._z=(r+l)/p}else if(a>u){const p=2*Math.sqrt(1+a-t-u);this._w=(r-l)/p,this._x=(i+s)/p,this._y=.25*p,this._z=(o+c)/p}else{const p=2*Math.sqrt(1+u-t-a);this._w=(s-i)/p,this._x=(r+l)/p,this._y=(o+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(A,e){let t=A.dot(e)+1;return t<Number.EPSILON?(t=0,Math.abs(A.x)>Math.abs(A.z)?(this._x=-A.y,this._y=A.x,this._z=0,this._w=t):(this._x=0,this._y=-A.z,this._z=A.y,this._w=t)):(this._x=A.y*e.z-A.z*e.y,this._y=A.z*e.x-A.x*e.z,this._z=A.x*e.y-A.y*e.x,this._w=t),this.normalize()}angleTo(A){return 2*Math.acos(Math.abs(Be(this.dot(A),-1,1)))}rotateTowards(A,e){const t=this.angleTo(A);if(t===0)return this;const i=Math.min(1,e/t);return this.slerp(A,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(A){return this._x*A._x+this._y*A._y+this._z*A._z+this._w*A._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let A=this.length();return A===0?(this._x=0,this._y=0,this._z=0,this._w=1):(A=1/A,this._x=this._x*A,this._y=this._y*A,this._z=this._z*A,this._w=this._w*A),this._onChangeCallback(),this}multiply(A){return this.multiplyQuaternions(this,A)}premultiply(A){return this.multiplyQuaternions(A,this)}multiplyQuaternions(A,e){const t=A._x,i=A._y,r=A._z,s=A._w,a=e._x,o=e._y,l=e._z,c=e._w;return this._x=t*c+s*a+i*l-r*o,this._y=i*c+s*o+r*a-t*l,this._z=r*c+s*l+t*o-i*a,this._w=s*c-t*a-i*o-r*l,this._onChangeCallback(),this}slerp(A,e){if(e===0)return this;if(e===1)return this.copy(A);const t=this._x,i=this._y,r=this._z,s=this._w;let a=s*A._w+t*A._x+i*A._y+r*A._z;if(a<0?(this._w=-A._w,this._x=-A._x,this._y=-A._y,this._z=-A._z,a=-a):this.copy(A),a>=1)return this._w=s,this._x=t,this._y=i,this._z=r,this;const o=1-a*a;if(o<=Number.EPSILON){const p=1-e;return this._w=p*s+e*this._w,this._x=p*t+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(o),c=Math.atan2(l,a),u=Math.sin((1-e)*c)/l,h=Math.sin(e*c)/l;return this._w=s*u+this._w*h,this._x=t*u+this._x*h,this._y=i*u+this._y*h,this._z=r*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(A,e,t){return this.copy(A).slerp(e,t)}random(){const A=Math.random(),e=Math.sqrt(1-A),t=Math.sqrt(A),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),t*Math.sin(r),t*Math.cos(r),e*Math.sin(i))}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._w===this._w}fromArray(A,e=0){return this._x=A[e],this._y=A[e+1],this._z=A[e+2],this._w=A[e+3],this._onChangeCallback(),this}toArray(A=[],e=0){return A[e]=this._x,A[e+1]=this._y,A[e+2]=this._z,A[e+3]=this._w,A}fromBufferAttribute(A,e){return this._x=A.getX(e),this._y=A.getY(e),this._z=A.getZ(e),this._w=A.getW(e),this}toJSON(){return this.toArray()}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(A=0,e=0,t=0){Q.prototype.isVector3=!0,this.x=A,this.y=e,this.z=t}set(A,e,t){return t===void 0&&(t=this.z),this.x=A,this.y=e,this.z=t,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setComponent(A,e){switch(A){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this}addVectors(A,e){return this.x=A.x+e.x,this.y=A.y+e.y,this.z=A.z+e.z,this}addScaledVector(A,e){return this.x+=A.x*e,this.y+=A.y*e,this.z+=A.z*e,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this}subVectors(A,e){return this.x=A.x-e.x,this.y=A.y-e.y,this.z=A.z-e.z,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this}multiplyVectors(A,e){return this.x=A.x*e.x,this.y=A.y*e.y,this.z=A.z*e.z,this}applyEuler(A){return this.applyQuaternion(Tl.setFromEuler(A))}applyAxisAngle(A,e){return this.applyQuaternion(Tl.setFromAxisAngle(A,e))}applyMatrix3(A){const e=this.x,t=this.y,i=this.z,r=A.elements;return this.x=r[0]*e+r[3]*t+r[6]*i,this.y=r[1]*e+r[4]*t+r[7]*i,this.z=r[2]*e+r[5]*t+r[8]*i,this}applyNormalMatrix(A){return this.applyMatrix3(A).normalize()}applyMatrix4(A){const e=this.x,t=this.y,i=this.z,r=A.elements,s=1/(r[3]*e+r[7]*t+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*t+r[8]*i+r[12])*s,this.y=(r[1]*e+r[5]*t+r[9]*i+r[13])*s,this.z=(r[2]*e+r[6]*t+r[10]*i+r[14])*s,this}applyQuaternion(A){const e=this.x,t=this.y,i=this.z,r=A.x,s=A.y,a=A.z,o=A.w,l=o*e+s*i-a*t,c=o*t+a*e-r*i,u=o*i+r*t-s*e,h=-r*e-s*t-a*i;return this.x=l*o+h*-r+c*-a-u*-s,this.y=c*o+h*-s+u*-r-l*-a,this.z=u*o+h*-a+l*-s-c*-r,this}project(A){return this.applyMatrix4(A.matrixWorldInverse).applyMatrix4(A.projectionMatrix)}unproject(A){return this.applyMatrix4(A.projectionMatrixInverse).applyMatrix4(A.matrixWorld)}transformDirection(A){const e=this.x,t=this.y,i=this.z,r=A.elements;return this.x=r[0]*e+r[4]*t+r[8]*i,this.y=r[1]*e+r[5]*t+r[9]*i,this.z=r[2]*e+r[6]*t+r[10]*i,this.normalize()}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this}divideScalar(A){return this.multiplyScalar(1/A)}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this}clamp(A,e){return this.x=Math.max(A.x,Math.min(e.x,this.x)),this.y=Math.max(A.y,Math.min(e.y,this.y)),this.z=Math.max(A.z,Math.min(e.z,this.z)),this}clampScalar(A,e){return this.x=Math.max(A,Math.min(e,this.x)),this.y=Math.max(A,Math.min(e,this.y)),this.z=Math.max(A,Math.min(e,this.z)),this}clampLength(A,e){const t=this.length();return this.divideScalar(t||1).multiplyScalar(Math.max(A,Math.min(e,t)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,e){return this.x+=(A.x-this.x)*e,this.y+=(A.y-this.y)*e,this.z+=(A.z-this.z)*e,this}lerpVectors(A,e,t){return this.x=A.x+(e.x-A.x)*t,this.y=A.y+(e.y-A.y)*t,this.z=A.z+(e.z-A.z)*t,this}cross(A){return this.crossVectors(this,A)}crossVectors(A,e){const t=A.x,i=A.y,r=A.z,s=e.x,a=e.y,o=e.z;return this.x=i*o-r*a,this.y=r*s-t*o,this.z=t*a-i*s,this}projectOnVector(A){const e=A.lengthSq();if(e===0)return this.set(0,0,0);const t=A.dot(this)/e;return this.copy(A).multiplyScalar(t)}projectOnPlane(A){return ia.copy(this).projectOnVector(A),this.sub(ia)}reflect(A){return this.sub(ia.copy(A).multiplyScalar(2*this.dot(A)))}angleTo(A){const e=Math.sqrt(this.lengthSq()*A.lengthSq());if(e===0)return Math.PI/2;const t=this.dot(A)/e;return Math.acos(Be(t,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const e=this.x-A.x,t=this.y-A.y,i=this.z-A.z;return e*e+t*t+i*i}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)+Math.abs(this.z-A.z)}setFromSpherical(A){return this.setFromSphericalCoords(A.radius,A.phi,A.theta)}setFromSphericalCoords(A,e,t){const i=Math.sin(e)*A;return this.x=i*Math.sin(t),this.y=Math.cos(e)*A,this.z=i*Math.cos(t),this}setFromCylindrical(A){return this.setFromCylindricalCoords(A.radius,A.theta,A.y)}setFromCylindricalCoords(A,e,t){return this.x=A*Math.sin(e),this.y=t,this.z=A*Math.cos(e),this}setFromMatrixPosition(A){const e=A.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(A){const e=this.setFromMatrixColumn(A,0).length(),t=this.setFromMatrixColumn(A,1).length(),i=this.setFromMatrixColumn(A,2).length();return this.x=e,this.y=t,this.z=i,this}setFromMatrixColumn(A,e){return this.fromArray(A.elements,e*4)}setFromMatrix3Column(A,e){return this.fromArray(A.elements,e*3)}setFromEuler(A){return this.x=A._x,this.y=A._y,this.z=A._z,this}setFromColor(A){return this.x=A.r,this.y=A.g,this.z=A.b,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z}fromArray(A,e=0){return this.x=A[e],this.y=A[e+1],this.z=A[e+2],this}toArray(A=[],e=0){return A[e]=this.x,A[e+1]=this.y,A[e+2]=this.z,A}fromBufferAttribute(A,e){return this.x=A.getX(e),this.y=A.getY(e),this.z=A.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const A=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,t=Math.sqrt(1-A**2);return this.x=t*Math.cos(e),this.y=t*Math.sin(e),this.z=A,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ia=new Q,Tl=new yn;class hr{constructor(A=new Q(1/0,1/0,1/0),e=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=A,this.max=e}set(A,e){return this.min.copy(A),this.max.copy(e),this}setFromArray(A){this.makeEmpty();for(let e=0,t=A.length;e<t;e+=3)this.expandByPoint(vt.fromArray(A,e));return this}setFromBufferAttribute(A){this.makeEmpty();for(let e=0,t=A.count;e<t;e++)this.expandByPoint(vt.fromBufferAttribute(A,e));return this}setFromPoints(A){this.makeEmpty();for(let e=0,t=A.length;e<t;e++)this.expandByPoint(A[e]);return this}setFromCenterAndSize(A,e){const t=vt.copy(e).multiplyScalar(.5);return this.min.copy(A).sub(t),this.max.copy(A).add(t),this}setFromObject(A,e=!1){return this.makeEmpty(),this.expandByObject(A,e)}clone(){return new this.constructor().copy(this)}copy(A){return this.min.copy(A.min),this.max.copy(A.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(A){return this.isEmpty()?A.set(0,0,0):A.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(A){return this.isEmpty()?A.set(0,0,0):A.subVectors(this.max,this.min)}expandByPoint(A){return this.min.min(A),this.max.max(A),this}expandByVector(A){return this.min.sub(A),this.max.add(A),this}expandByScalar(A){return this.min.addScalar(-A),this.max.addScalar(A),this}expandByObject(A,e=!1){if(A.updateWorldMatrix(!1,!1),A.boundingBox!==void 0)A.boundingBox===null&&A.computeBoundingBox(),Qn.copy(A.boundingBox),Qn.applyMatrix4(A.matrixWorld),this.union(Qn);else{const i=A.geometry;if(i!==void 0)if(e&&i.attributes!==void 0&&i.attributes.position!==void 0){const r=i.attributes.position;for(let s=0,a=r.count;s<a;s++)vt.fromBufferAttribute(r,s).applyMatrix4(A.matrixWorld),this.expandByPoint(vt)}else i.boundingBox===null&&i.computeBoundingBox(),Qn.copy(i.boundingBox),Qn.applyMatrix4(A.matrixWorld),this.union(Qn)}const t=A.children;for(let i=0,r=t.length;i<r;i++)this.expandByObject(t[i],e);return this}containsPoint(A){return!(A.x<this.min.x||A.x>this.max.x||A.y<this.min.y||A.y>this.max.y||A.z<this.min.z||A.z>this.max.z)}containsBox(A){return this.min.x<=A.min.x&&A.max.x<=this.max.x&&this.min.y<=A.min.y&&A.max.y<=this.max.y&&this.min.z<=A.min.z&&A.max.z<=this.max.z}getParameter(A,e){return e.set((A.x-this.min.x)/(this.max.x-this.min.x),(A.y-this.min.y)/(this.max.y-this.min.y),(A.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(A){return!(A.max.x<this.min.x||A.min.x>this.max.x||A.max.y<this.min.y||A.min.y>this.max.y||A.max.z<this.min.z||A.min.z>this.max.z)}intersectsSphere(A){return this.clampPoint(A.center,vt),vt.distanceToSquared(A.center)<=A.radius*A.radius}intersectsPlane(A){let e,t;return A.normal.x>0?(e=A.normal.x*this.min.x,t=A.normal.x*this.max.x):(e=A.normal.x*this.max.x,t=A.normal.x*this.min.x),A.normal.y>0?(e+=A.normal.y*this.min.y,t+=A.normal.y*this.max.y):(e+=A.normal.y*this.max.y,t+=A.normal.y*this.min.y),A.normal.z>0?(e+=A.normal.z*this.min.z,t+=A.normal.z*this.max.z):(e+=A.normal.z*this.max.z,t+=A.normal.z*this.min.z),e<=-A.constant&&t>=-A.constant}intersectsTriangle(A){if(this.isEmpty())return!1;this.getCenter(xi),Br.subVectors(this.max,xi),In.subVectors(A.a,xi),Ln.subVectors(A.b,xi),Rn.subVectors(A.c,xi),Ht.subVectors(Ln,In),Dt.subVectors(Rn,Ln),an.subVectors(In,Rn);let e=[0,-Ht.z,Ht.y,0,-Dt.z,Dt.y,0,-an.z,an.y,Ht.z,0,-Ht.x,Dt.z,0,-Dt.x,an.z,0,-an.x,-Ht.y,Ht.x,0,-Dt.y,Dt.x,0,-an.y,an.x,0];return!ra(e,In,Ln,Rn,Br)||(e=[1,0,0,0,1,0,0,0,1],!ra(e,In,Ln,Rn,Br))?!1:(wr.crossVectors(Ht,Dt),e=[wr.x,wr.y,wr.z],ra(e,In,Ln,Rn,Br))}clampPoint(A,e){return e.copy(A).clamp(this.min,this.max)}distanceToPoint(A){return this.clampPoint(A,vt).distanceTo(A)}getBoundingSphere(A){return this.isEmpty()?A.makeEmpty():(this.getCenter(A.center),A.radius=this.getSize(vt).length()*.5),A}intersect(A){return this.min.max(A.min),this.max.min(A.max),this.isEmpty()&&this.makeEmpty(),this}union(A){return this.min.min(A.min),this.max.max(A.max),this}applyMatrix4(A){return this.isEmpty()?this:(wt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(A),wt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(A),wt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(A),wt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(A),wt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(A),wt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(A),wt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(A),wt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(A),this.setFromPoints(wt),this)}translate(A){return this.min.add(A),this.max.add(A),this}equals(A){return A.min.equals(this.min)&&A.max.equals(this.max)}}const wt=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],vt=new Q,Qn=new hr,In=new Q,Ln=new Q,Rn=new Q,Ht=new Q,Dt=new Q,an=new Q,xi=new Q,Br=new Q,wr=new Q,on=new Q;function ra(n,A,e,t,i){for(let r=0,s=n.length-3;r<=s;r+=3){on.fromArray(n,r);const a=i.x*Math.abs(on.x)+i.y*Math.abs(on.y)+i.z*Math.abs(on.z),o=A.dot(on),l=e.dot(on),c=t.dot(on);if(Math.max(-Math.max(o,l,c),Math.min(o,l,c))>a)return!1}return!0}const Dd=new hr,Ui=new Q,sa=new Q;class Fo{constructor(A=new Q,e=-1){this.center=A,this.radius=e}set(A,e){return this.center.copy(A),this.radius=e,this}setFromPoints(A,e){const t=this.center;e!==void 0?t.copy(e):Dd.setFromPoints(A).getCenter(t);let i=0;for(let r=0,s=A.length;r<s;r++)i=Math.max(i,t.distanceToSquared(A[r]));return this.radius=Math.sqrt(i),this}copy(A){return this.center.copy(A.center),this.radius=A.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(A){return A.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(A){return A.distanceTo(this.center)-this.radius}intersectsSphere(A){const e=this.radius+A.radius;return A.center.distanceToSquared(this.center)<=e*e}intersectsBox(A){return A.intersectsSphere(this)}intersectsPlane(A){return Math.abs(A.distanceToPoint(this.center))<=this.radius}clampPoint(A,e){const t=this.center.distanceToSquared(A);return e.copy(A),t>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(A){return this.isEmpty()?(A.makeEmpty(),A):(A.set(this.center,this.center),A.expandByScalar(this.radius),A)}applyMatrix4(A){return this.center.applyMatrix4(A),this.radius=this.radius*A.getMaxScaleOnAxis(),this}translate(A){return this.center.add(A),this}expandByPoint(A){if(this.isEmpty())return this.center.copy(A),this.radius=0,this;Ui.subVectors(A,this.center);const e=Ui.lengthSq();if(e>this.radius*this.radius){const t=Math.sqrt(e),i=(t-this.radius)*.5;this.center.addScaledVector(Ui,i/t),this.radius+=i}return this}union(A){return A.isEmpty()?this:this.isEmpty()?(this.copy(A),this):(this.center.equals(A.center)===!0?this.radius=Math.max(this.radius,A.radius):(sa.subVectors(A.center,this.center).setLength(A.radius),this.expandByPoint(Ui.copy(A.center).add(sa)),this.expandByPoint(Ui.copy(A.center).sub(sa))),this)}equals(A){return A.center.equals(this.center)&&A.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _t=new Q,aa=new Q,vr=new Q,Pt=new Q,oa=new Q,_r=new Q,la=new Q;class Hu{constructor(A=new Q,e=new Q(0,0,-1)){this.origin=A,this.direction=e}set(A,e){return this.origin.copy(A),this.direction.copy(e),this}copy(A){return this.origin.copy(A.origin),this.direction.copy(A.direction),this}at(A,e){return e.copy(this.origin).addScaledVector(this.direction,A)}lookAt(A){return this.direction.copy(A).sub(this.origin).normalize(),this}recast(A){return this.origin.copy(this.at(A,_t)),this}closestPointToPoint(A,e){e.subVectors(A,this.origin);const t=e.dot(this.direction);return t<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,t)}distanceToPoint(A){return Math.sqrt(this.distanceSqToPoint(A))}distanceSqToPoint(A){const e=_t.subVectors(A,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(A):(_t.copy(this.origin).addScaledVector(this.direction,e),_t.distanceToSquared(A))}distanceSqToSegment(A,e,t,i){aa.copy(A).add(e).multiplyScalar(.5),vr.copy(e).sub(A).normalize(),Pt.copy(this.origin).sub(aa);const r=A.distanceTo(e)*.5,s=-this.direction.dot(vr),a=Pt.dot(this.direction),o=-Pt.dot(vr),l=Pt.lengthSq(),c=Math.abs(1-s*s);let u,h,p,g;if(c>0)if(u=s*o-a,h=s*a-o,g=r*c,u>=0)if(h>=-g)if(h<=g){const m=1/c;u*=m,h*=m,p=u*(u+s*h+2*a)+h*(s*u+h+2*o)+l}else h=r,u=Math.max(0,-(s*h+a)),p=-u*u+h*(h+2*o)+l;else h=-r,u=Math.max(0,-(s*h+a)),p=-u*u+h*(h+2*o)+l;else h<=-g?(u=Math.max(0,-(-s*r+a)),h=u>0?-r:Math.min(Math.max(-r,-o),r),p=-u*u+h*(h+2*o)+l):h<=g?(u=0,h=Math.min(Math.max(-r,-o),r),p=h*(h+2*o)+l):(u=Math.max(0,-(s*r+a)),h=u>0?r:Math.min(Math.max(-r,-o),r),p=-u*u+h*(h+2*o)+l);else h=s>0?-r:r,u=Math.max(0,-(s*h+a)),p=-u*u+h*(h+2*o)+l;return t&&t.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(aa).addScaledVector(vr,h),p}intersectSphere(A,e){_t.subVectors(A.center,this.origin);const t=_t.dot(this.direction),i=_t.dot(_t)-t*t,r=A.radius*A.radius;if(i>r)return null;const s=Math.sqrt(r-i),a=t-s,o=t+s;return o<0?null:a<0?this.at(o,e):this.at(a,e)}intersectsSphere(A){return this.distanceSqToPoint(A.center)<=A.radius*A.radius}distanceToPlane(A){const e=A.normal.dot(this.direction);if(e===0)return A.distanceToPoint(this.origin)===0?0:null;const t=-(this.origin.dot(A.normal)+A.constant)/e;return t>=0?t:null}intersectPlane(A,e){const t=this.distanceToPlane(A);return t===null?null:this.at(t,e)}intersectsPlane(A){const e=A.distanceToPoint(this.origin);return e===0||A.normal.dot(this.direction)*e<0}intersectBox(A,e){let t,i,r,s,a,o;const l=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,h=this.origin;return l>=0?(t=(A.min.x-h.x)*l,i=(A.max.x-h.x)*l):(t=(A.max.x-h.x)*l,i=(A.min.x-h.x)*l),c>=0?(r=(A.min.y-h.y)*c,s=(A.max.y-h.y)*c):(r=(A.max.y-h.y)*c,s=(A.min.y-h.y)*c),t>s||r>i||((r>t||isNaN(t))&&(t=r),(s<i||isNaN(i))&&(i=s),u>=0?(a=(A.min.z-h.z)*u,o=(A.max.z-h.z)*u):(a=(A.max.z-h.z)*u,o=(A.min.z-h.z)*u),t>o||a>i)||((a>t||t!==t)&&(t=a),(o<i||i!==i)&&(i=o),i<0)?null:this.at(t>=0?t:i,e)}intersectsBox(A){return this.intersectBox(A,_t)!==null}intersectTriangle(A,e,t,i,r){oa.subVectors(e,A),_r.subVectors(t,A),la.crossVectors(oa,_r);let s=this.direction.dot(la),a;if(s>0){if(i)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Pt.subVectors(this.origin,A);const o=a*this.direction.dot(_r.crossVectors(Pt,_r));if(o<0)return null;const l=a*this.direction.dot(oa.cross(Pt));if(l<0||o+l>s)return null;const c=-a*Pt.dot(la);return c<0?null:this.at(c/s,r)}applyMatrix4(A){return this.origin.applyMatrix4(A),this.direction.transformDirection(A),this}equals(A){return A.origin.equals(this.origin)&&A.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class we{constructor(A,e,t,i,r,s,a,o,l,c,u,h,p,g,m,d){we.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],A!==void 0&&this.set(A,e,t,i,r,s,a,o,l,c,u,h,p,g,m,d)}set(A,e,t,i,r,s,a,o,l,c,u,h,p,g,m,d){const f=this.elements;return f[0]=A,f[4]=e,f[8]=t,f[12]=i,f[1]=r,f[5]=s,f[9]=a,f[13]=o,f[2]=l,f[6]=c,f[10]=u,f[14]=h,f[3]=p,f[7]=g,f[11]=m,f[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new we().fromArray(this.elements)}copy(A){const e=this.elements,t=A.elements;return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],this}copyPosition(A){const e=this.elements,t=A.elements;return e[12]=t[12],e[13]=t[13],e[14]=t[14],this}setFromMatrix3(A){const e=A.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(A,e,t){return A.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),t.setFromMatrixColumn(this,2),this}makeBasis(A,e,t){return this.set(A.x,e.x,t.x,0,A.y,e.y,t.y,0,A.z,e.z,t.z,0,0,0,0,1),this}extractRotation(A){const e=this.elements,t=A.elements,i=1/Hn.setFromMatrixColumn(A,0).length(),r=1/Hn.setFromMatrixColumn(A,1).length(),s=1/Hn.setFromMatrixColumn(A,2).length();return e[0]=t[0]*i,e[1]=t[1]*i,e[2]=t[2]*i,e[3]=0,e[4]=t[4]*r,e[5]=t[5]*r,e[6]=t[6]*r,e[7]=0,e[8]=t[8]*s,e[9]=t[9]*s,e[10]=t[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(A){const e=this.elements,t=A.x,i=A.y,r=A.z,s=Math.cos(t),a=Math.sin(t),o=Math.cos(i),l=Math.sin(i),c=Math.cos(r),u=Math.sin(r);if(A.order==="XYZ"){const h=s*c,p=s*u,g=a*c,m=a*u;e[0]=o*c,e[4]=-o*u,e[8]=l,e[1]=p+g*l,e[5]=h-m*l,e[9]=-a*o,e[2]=m-h*l,e[6]=g+p*l,e[10]=s*o}else if(A.order==="YXZ"){const h=o*c,p=o*u,g=l*c,m=l*u;e[0]=h+m*a,e[4]=g*a-p,e[8]=s*l,e[1]=s*u,e[5]=s*c,e[9]=-a,e[2]=p*a-g,e[6]=m+h*a,e[10]=s*o}else if(A.order==="ZXY"){const h=o*c,p=o*u,g=l*c,m=l*u;e[0]=h-m*a,e[4]=-s*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=s*c,e[9]=m-h*a,e[2]=-s*l,e[6]=a,e[10]=s*o}else if(A.order==="ZYX"){const h=s*c,p=s*u,g=a*c,m=a*u;e[0]=o*c,e[4]=g*l-p,e[8]=h*l+m,e[1]=o*u,e[5]=m*l+h,e[9]=p*l-g,e[2]=-l,e[6]=a*o,e[10]=s*o}else if(A.order==="YZX"){const h=s*o,p=s*l,g=a*o,m=a*l;e[0]=o*c,e[4]=m-h*u,e[8]=g*u+p,e[1]=u,e[5]=s*c,e[9]=-a*c,e[2]=-l*c,e[6]=p*u+g,e[10]=h-m*u}else if(A.order==="XZY"){const h=s*o,p=s*l,g=a*o,m=a*l;e[0]=o*c,e[4]=-u,e[8]=l*c,e[1]=h*u+m,e[5]=s*c,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*c,e[10]=m*u+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(A){return this.compose(Pd,A,Od)}lookAt(A,e,t){const i=this.elements;return Ne.subVectors(A,e),Ne.lengthSq()===0&&(Ne.z=1),Ne.normalize(),Ot.crossVectors(t,Ne),Ot.lengthSq()===0&&(Math.abs(t.z)===1?Ne.x+=1e-4:Ne.z+=1e-4,Ne.normalize(),Ot.crossVectors(t,Ne)),Ot.normalize(),Cr.crossVectors(Ne,Ot),i[0]=Ot.x,i[4]=Cr.x,i[8]=Ne.x,i[1]=Ot.y,i[5]=Cr.y,i[9]=Ne.y,i[2]=Ot.z,i[6]=Cr.z,i[10]=Ne.z,this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,e){const t=A.elements,i=e.elements,r=this.elements,s=t[0],a=t[4],o=t[8],l=t[12],c=t[1],u=t[5],h=t[9],p=t[13],g=t[2],m=t[6],d=t[10],f=t[14],C=t[3],v=t[7],_=t[11],E=t[15],y=i[0],U=i[4],L=i[8],B=i[12],S=i[1],Y=i[5],q=i[9],T=i[13],O=i[2],V=i[6],Z=i[10],k=i[14],X=i[3],$=i[7],J=i[11],D=i[15];return r[0]=s*y+a*S+o*O+l*X,r[4]=s*U+a*Y+o*V+l*$,r[8]=s*L+a*q+o*Z+l*J,r[12]=s*B+a*T+o*k+l*D,r[1]=c*y+u*S+h*O+p*X,r[5]=c*U+u*Y+h*V+p*$,r[9]=c*L+u*q+h*Z+p*J,r[13]=c*B+u*T+h*k+p*D,r[2]=g*y+m*S+d*O+f*X,r[6]=g*U+m*Y+d*V+f*$,r[10]=g*L+m*q+d*Z+f*J,r[14]=g*B+m*T+d*k+f*D,r[3]=C*y+v*S+_*O+E*X,r[7]=C*U+v*Y+_*V+E*$,r[11]=C*L+v*q+_*Z+E*J,r[15]=C*B+v*T+_*k+E*D,this}multiplyScalar(A){const e=this.elements;return e[0]*=A,e[4]*=A,e[8]*=A,e[12]*=A,e[1]*=A,e[5]*=A,e[9]*=A,e[13]*=A,e[2]*=A,e[6]*=A,e[10]*=A,e[14]*=A,e[3]*=A,e[7]*=A,e[11]*=A,e[15]*=A,this}determinant(){const A=this.elements,e=A[0],t=A[4],i=A[8],r=A[12],s=A[1],a=A[5],o=A[9],l=A[13],c=A[2],u=A[6],h=A[10],p=A[14],g=A[3],m=A[7],d=A[11],f=A[15];return g*(+r*o*u-i*l*u-r*a*h+t*l*h+i*a*p-t*o*p)+m*(+e*o*p-e*l*h+r*s*h-i*s*p+i*l*c-r*o*c)+d*(+e*l*u-e*a*p-r*s*u+t*s*p+r*a*c-t*l*c)+f*(-i*a*c-e*o*u+e*a*h+i*s*u-t*s*h+t*o*c)}transpose(){const A=this.elements;let e;return e=A[1],A[1]=A[4],A[4]=e,e=A[2],A[2]=A[8],A[8]=e,e=A[6],A[6]=A[9],A[9]=e,e=A[3],A[3]=A[12],A[12]=e,e=A[7],A[7]=A[13],A[13]=e,e=A[11],A[11]=A[14],A[14]=e,this}setPosition(A,e,t){const i=this.elements;return A.isVector3?(i[12]=A.x,i[13]=A.y,i[14]=A.z):(i[12]=A,i[13]=e,i[14]=t),this}invert(){const A=this.elements,e=A[0],t=A[1],i=A[2],r=A[3],s=A[4],a=A[5],o=A[6],l=A[7],c=A[8],u=A[9],h=A[10],p=A[11],g=A[12],m=A[13],d=A[14],f=A[15],C=u*d*l-m*h*l+m*o*p-a*d*p-u*o*f+a*h*f,v=g*h*l-c*d*l-g*o*p+s*d*p+c*o*f-s*h*f,_=c*m*l-g*u*l+g*a*p-s*m*p-c*a*f+s*u*f,E=g*u*o-c*m*o-g*a*h+s*m*h+c*a*d-s*u*d,y=e*C+t*v+i*_+r*E;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/y;return A[0]=C*U,A[1]=(m*h*r-u*d*r-m*i*p+t*d*p+u*i*f-t*h*f)*U,A[2]=(a*d*r-m*o*r+m*i*l-t*d*l-a*i*f+t*o*f)*U,A[3]=(u*o*r-a*h*r-u*i*l+t*h*l+a*i*p-t*o*p)*U,A[4]=v*U,A[5]=(c*d*r-g*h*r+g*i*p-e*d*p-c*i*f+e*h*f)*U,A[6]=(g*o*r-s*d*r-g*i*l+e*d*l+s*i*f-e*o*f)*U,A[7]=(s*h*r-c*o*r+c*i*l-e*h*l-s*i*p+e*o*p)*U,A[8]=_*U,A[9]=(g*u*r-c*m*r-g*t*p+e*m*p+c*t*f-e*u*f)*U,A[10]=(s*m*r-g*a*r+g*t*l-e*m*l-s*t*f+e*a*f)*U,A[11]=(c*a*r-s*u*r-c*t*l+e*u*l+s*t*p-e*a*p)*U,A[12]=E*U,A[13]=(c*m*i-g*u*i+g*t*h-e*m*h-c*t*d+e*u*d)*U,A[14]=(g*a*i-s*m*i-g*t*o+e*m*o+s*t*d-e*a*d)*U,A[15]=(s*u*i-c*a*i+c*t*o-e*u*o-s*t*h+e*a*h)*U,this}scale(A){const e=this.elements,t=A.x,i=A.y,r=A.z;return e[0]*=t,e[4]*=i,e[8]*=r,e[1]*=t,e[5]*=i,e[9]*=r,e[2]*=t,e[6]*=i,e[10]*=r,e[3]*=t,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const A=this.elements,e=A[0]*A[0]+A[1]*A[1]+A[2]*A[2],t=A[4]*A[4]+A[5]*A[5]+A[6]*A[6],i=A[8]*A[8]+A[9]*A[9]+A[10]*A[10];return Math.sqrt(Math.max(e,t,i))}makeTranslation(A,e,t){return A.isVector3?this.set(1,0,0,A.x,0,1,0,A.y,0,0,1,A.z,0,0,0,1):this.set(1,0,0,A,0,1,0,e,0,0,1,t,0,0,0,1),this}makeRotationX(A){const e=Math.cos(A),t=Math.sin(A);return this.set(1,0,0,0,0,e,-t,0,0,t,e,0,0,0,0,1),this}makeRotationY(A){const e=Math.cos(A),t=Math.sin(A);return this.set(e,0,t,0,0,1,0,0,-t,0,e,0,0,0,0,1),this}makeRotationZ(A){const e=Math.cos(A),t=Math.sin(A);return this.set(e,-t,0,0,t,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(A,e){const t=Math.cos(e),i=Math.sin(e),r=1-t,s=A.x,a=A.y,o=A.z,l=r*s,c=r*a;return this.set(l*s+t,l*a-i*o,l*o+i*a,0,l*a+i*o,c*a+t,c*o-i*s,0,l*o-i*a,c*o+i*s,r*o*o+t,0,0,0,0,1),this}makeScale(A,e,t){return this.set(A,0,0,0,0,e,0,0,0,0,t,0,0,0,0,1),this}makeShear(A,e,t,i,r,s){return this.set(1,t,r,0,A,1,s,0,e,i,1,0,0,0,0,1),this}compose(A,e,t){const i=this.elements,r=e._x,s=e._y,a=e._z,o=e._w,l=r+r,c=s+s,u=a+a,h=r*l,p=r*c,g=r*u,m=s*c,d=s*u,f=a*u,C=o*l,v=o*c,_=o*u,E=t.x,y=t.y,U=t.z;return i[0]=(1-(m+f))*E,i[1]=(p+_)*E,i[2]=(g-v)*E,i[3]=0,i[4]=(p-_)*y,i[5]=(1-(h+f))*y,i[6]=(d+C)*y,i[7]=0,i[8]=(g+v)*U,i[9]=(d-C)*U,i[10]=(1-(h+m))*U,i[11]=0,i[12]=A.x,i[13]=A.y,i[14]=A.z,i[15]=1,this}decompose(A,e,t){const i=this.elements;let r=Hn.set(i[0],i[1],i[2]).length();const s=Hn.set(i[4],i[5],i[6]).length(),a=Hn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),A.x=i[12],A.y=i[13],A.z=i[14],et.copy(this);const l=1/r,c=1/s,u=1/a;return et.elements[0]*=l,et.elements[1]*=l,et.elements[2]*=l,et.elements[4]*=c,et.elements[5]*=c,et.elements[6]*=c,et.elements[8]*=u,et.elements[9]*=u,et.elements[10]*=u,e.setFromRotationMatrix(et),t.x=r,t.y=s,t.z=a,this}makePerspective(A,e,t,i,r,s,a=Tt){const o=this.elements,l=2*r/(e-A),c=2*r/(t-i),u=(e+A)/(e-A),h=(t+i)/(t-i);let p,g;if(a===Tt)p=-(s+r)/(s-r),g=-2*s*r/(s-r);else if(a===ps)p=-s/(s-r),g=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=p,o[14]=g,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(A,e,t,i,r,s,a=Tt){const o=this.elements,l=1/(e-A),c=1/(t-i),u=1/(s-r),h=(e+A)*l,p=(t+i)*c;let g,m;if(a===Tt)g=(s+r)*u,m=-2*u;else if(a===ps)g=r*u,m=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-p,o[2]=0,o[6]=0,o[10]=m,o[14]=-g,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(A){const e=this.elements,t=A.elements;for(let i=0;i<16;i++)if(e[i]!==t[i])return!1;return!0}fromArray(A,e=0){for(let t=0;t<16;t++)this.elements[t]=A[t+e];return this}toArray(A=[],e=0){const t=this.elements;return A[e]=t[0],A[e+1]=t[1],A[e+2]=t[2],A[e+3]=t[3],A[e+4]=t[4],A[e+5]=t[5],A[e+6]=t[6],A[e+7]=t[7],A[e+8]=t[8],A[e+9]=t[9],A[e+10]=t[10],A[e+11]=t[11],A[e+12]=t[12],A[e+13]=t[13],A[e+14]=t[14],A[e+15]=t[15],A}}const Hn=new Q,et=new we,Pd=new Q(0,0,0),Od=new Q(1,1,1),Ot=new Q,Cr=new Q,Ne=new Q,Ql=new we,Il=new yn;class bs{constructor(A=0,e=0,t=0,i=bs.DEFAULT_ORDER){this.isEuler=!0,this._x=A,this._y=e,this._z=t,this._order=i}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get order(){return this._order}set order(A){this._order=A,this._onChangeCallback()}set(A,e,t,i=this._order){return this._x=A,this._y=e,this._z=t,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(A){return this._x=A._x,this._y=A._y,this._z=A._z,this._order=A._order,this._onChangeCallback(),this}setFromRotationMatrix(A,e=this._order,t=!0){const i=A.elements,r=i[0],s=i[4],a=i[8],o=i[1],l=i[5],c=i[9],u=i[2],h=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(o,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(o,r));break;case"ZYX":this._y=Math.asin(-Be(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(o,r)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Be(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,t===!0&&this._onChangeCallback(),this}setFromQuaternion(A,e,t){return Ql.makeRotationFromQuaternion(A),this.setFromRotationMatrix(Ql,e,t)}setFromVector3(A,e=this._order){return this.set(A.x,A.y,A.z,e)}reorder(A){return Il.setFromEuler(this),this.setFromQuaternion(Il,A)}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._order===this._order}fromArray(A){return this._x=A[0],this._y=A[1],this._z=A[2],A[3]!==void 0&&(this._order=A[3]),this._onChangeCallback(),this}toArray(A=[],e=0){return A[e]=this._x,A[e+1]=this._y,A[e+2]=this._z,A[e+3]=this._order,A}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bs.DEFAULT_ORDER="XYZ";class Du{constructor(){this.mask=1}set(A){this.mask=(1<<A|0)>>>0}enable(A){this.mask|=1<<A|0}enableAll(){this.mask=-1}toggle(A){this.mask^=1<<A|0}disable(A){this.mask&=~(1<<A|0)}disableAll(){this.mask=0}test(A){return(this.mask&A.mask)!==0}isEnabled(A){return(this.mask&(1<<A|0))!==0}}let Nd=0;const Ll=new Q,Dn=new yn,Ct=new we,Er=new Q,yi=new Q,Gd=new Q,Vd=new yn,Rl=new Q(1,0,0),Hl=new Q(0,1,0),Dl=new Q(0,0,1),Kd={type:"added"},Pl={type:"removed"};class ke extends Mn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ke.DEFAULT_UP.clone();const A=new Q,e=new bs,t=new yn,i=new Q(1,1,1);function r(){t.setFromEuler(e,!1)}function s(){e.setFromQuaternion(t,void 0,!1)}e._onChange(r),t._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:A},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:t},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new we},normalMatrix:{value:new PA}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=ke.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Du,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(A){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(A),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(A){return this.quaternion.premultiply(A),this}setRotationFromAxisAngle(A,e){this.quaternion.setFromAxisAngle(A,e)}setRotationFromEuler(A){this.quaternion.setFromEuler(A,!0)}setRotationFromMatrix(A){this.quaternion.setFromRotationMatrix(A)}setRotationFromQuaternion(A){this.quaternion.copy(A)}rotateOnAxis(A,e){return Dn.setFromAxisAngle(A,e),this.quaternion.multiply(Dn),this}rotateOnWorldAxis(A,e){return Dn.setFromAxisAngle(A,e),this.quaternion.premultiply(Dn),this}rotateX(A){return this.rotateOnAxis(Rl,A)}rotateY(A){return this.rotateOnAxis(Hl,A)}rotateZ(A){return this.rotateOnAxis(Dl,A)}translateOnAxis(A,e){return Ll.copy(A).applyQuaternion(this.quaternion),this.position.add(Ll.multiplyScalar(e)),this}translateX(A){return this.translateOnAxis(Rl,A)}translateY(A){return this.translateOnAxis(Hl,A)}translateZ(A){return this.translateOnAxis(Dl,A)}localToWorld(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(this.matrixWorld)}worldToLocal(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(Ct.copy(this.matrixWorld).invert())}lookAt(A,e,t){A.isVector3?Er.copy(A):Er.set(A,e,t);const i=this.parent;this.updateWorldMatrix(!0,!1),yi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ct.lookAt(yi,Er,this.up):Ct.lookAt(Er,yi,this.up),this.quaternion.setFromRotationMatrix(Ct),i&&(Ct.extractRotation(i.matrixWorld),Dn.setFromRotationMatrix(Ct),this.quaternion.premultiply(Dn.invert()))}add(A){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return A===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",A),this):(A&&A.isObject3D?(A.parent!==null&&A.parent.remove(A),A.parent=this,this.children.push(A),A.dispatchEvent(Kd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",A),this)}remove(A){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.remove(arguments[t]);return this}const e=this.children.indexOf(A);return e!==-1&&(A.parent=null,this.children.splice(e,1),A.dispatchEvent(Pl)),this}removeFromParent(){const A=this.parent;return A!==null&&A.remove(this),this}clear(){for(let A=0;A<this.children.length;A++){const e=this.children[A];e.parent=null,e.dispatchEvent(Pl)}return this.children.length=0,this}attach(A){return this.updateWorldMatrix(!0,!1),Ct.copy(this.matrixWorld).invert(),A.parent!==null&&(A.parent.updateWorldMatrix(!0,!1),Ct.multiply(A.parent.matrixWorld)),A.applyMatrix4(Ct),this.add(A),A.updateWorldMatrix(!1,!0),this}getObjectById(A){return this.getObjectByProperty("id",A)}getObjectByName(A){return this.getObjectByProperty("name",A)}getObjectByProperty(A,e){if(this[A]===e)return this;for(let t=0,i=this.children.length;t<i;t++){const s=this.children[t].getObjectByProperty(A,e);if(s!==void 0)return s}}getObjectsByProperty(A,e){let t=[];this[A]===e&&t.push(this);for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectsByProperty(A,e);s.length>0&&(t=t.concat(s))}return t}getWorldPosition(A){return this.updateWorldMatrix(!0,!1),A.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yi,A,Gd),A}getWorldScale(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yi,Vd,A),A}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return A.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(A){A(this);const e=this.children;for(let t=0,i=e.length;t<i;t++)e[t].traverse(A)}traverseVisible(A){if(this.visible===!1)return;A(this);const e=this.children;for(let t=0,i=e.length;t<i;t++)e[t].traverseVisible(A)}traverseAncestors(A){const e=this.parent;e!==null&&(A(e),e.traverseAncestors(A))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(A){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||A)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,A=!0);const e=this.children;for(let t=0,i=e.length;t<i;t++){const r=e[t];(r.matrixWorldAutoUpdate===!0||A===!0)&&r.updateMatrixWorld(A)}}updateWorldMatrix(A,e){const t=this.parent;if(A===!0&&t!==null&&t.matrixWorldAutoUpdate===!0&&t.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(A){const e=A===void 0||typeof A=="string",t={};e&&(A={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},t.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,o){return a[o.uuid]===void 0&&(a[o.uuid]=o.toJSON(A)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(A).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(A).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(A.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const o=a.shapes;if(Array.isArray(o))for(let l=0,c=o.length;l<c;l++){const u=o[l];r(A.shapes,u)}else r(A.shapes,o)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(A.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let o=0,l=this.material.length;o<l;o++)a.push(r(A.materials,this.material[o]));i.material=a}else i.material=r(A.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(A).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const o=this.animations[a];i.animations.push(r(A.animations,o))}}if(e){const a=s(A.geometries),o=s(A.materials),l=s(A.textures),c=s(A.images),u=s(A.shapes),h=s(A.skeletons),p=s(A.animations),g=s(A.nodes);a.length>0&&(t.geometries=a),o.length>0&&(t.materials=o),l.length>0&&(t.textures=l),c.length>0&&(t.images=c),u.length>0&&(t.shapes=u),h.length>0&&(t.skeletons=h),p.length>0&&(t.animations=p),g.length>0&&(t.nodes=g)}return t.object=i,t;function s(a){const o=[];for(const l in a){const c=a[l];delete c.metadata,o.push(c)}return o}}clone(A){return new this.constructor().copy(this,A)}copy(A,e=!0){if(this.name=A.name,this.up.copy(A.up),this.position.copy(A.position),this.rotation.order=A.rotation.order,this.quaternion.copy(A.quaternion),this.scale.copy(A.scale),this.matrix.copy(A.matrix),this.matrixWorld.copy(A.matrixWorld),this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrixWorldNeedsUpdate=A.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=A.matrixWorldAutoUpdate,this.layers.mask=A.layers.mask,this.visible=A.visible,this.castShadow=A.castShadow,this.receiveShadow=A.receiveShadow,this.frustumCulled=A.frustumCulled,this.renderOrder=A.renderOrder,this.animations=A.animations.slice(),this.userData=JSON.parse(JSON.stringify(A.userData)),e===!0)for(let t=0;t<A.children.length;t++){const i=A.children[t];this.add(i.clone())}return this}}ke.DEFAULT_UP=new Q(0,1,0);ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const tt=new Q,Et=new Q,ca=new Q,xt=new Q,Pn=new Q,On=new Q,Ol=new Q,ua=new Q,ha=new Q,fa=new Q;let xr=!1;class rt{constructor(A=new Q,e=new Q,t=new Q){this.a=A,this.b=e,this.c=t}static getNormal(A,e,t,i){i.subVectors(t,e),tt.subVectors(A,e),i.cross(tt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(A,e,t,i,r){tt.subVectors(i,e),Et.subVectors(t,e),ca.subVectors(A,e);const s=tt.dot(tt),a=tt.dot(Et),o=tt.dot(ca),l=Et.dot(Et),c=Et.dot(ca),u=s*l-a*a;if(u===0)return r.set(-2,-1,-1);const h=1/u,p=(l*o-a*c)*h,g=(s*c-a*o)*h;return r.set(1-p-g,g,p)}static containsPoint(A,e,t,i){return this.getBarycoord(A,e,t,i,xt),xt.x>=0&&xt.y>=0&&xt.x+xt.y<=1}static getUV(A,e,t,i,r,s,a,o){return xr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xr=!0),this.getInterpolation(A,e,t,i,r,s,a,o)}static getInterpolation(A,e,t,i,r,s,a,o){return this.getBarycoord(A,e,t,i,xt),o.setScalar(0),o.addScaledVector(r,xt.x),o.addScaledVector(s,xt.y),o.addScaledVector(a,xt.z),o}static isFrontFacing(A,e,t,i){return tt.subVectors(t,e),Et.subVectors(A,e),tt.cross(Et).dot(i)<0}set(A,e,t){return this.a.copy(A),this.b.copy(e),this.c.copy(t),this}setFromPointsAndIndices(A,e,t,i){return this.a.copy(A[e]),this.b.copy(A[t]),this.c.copy(A[i]),this}setFromAttributeAndIndices(A,e,t,i){return this.a.fromBufferAttribute(A,e),this.b.fromBufferAttribute(A,t),this.c.fromBufferAttribute(A,i),this}clone(){return new this.constructor().copy(this)}copy(A){return this.a.copy(A.a),this.b.copy(A.b),this.c.copy(A.c),this}getArea(){return tt.subVectors(this.c,this.b),Et.subVectors(this.a,this.b),tt.cross(Et).length()*.5}getMidpoint(A){return A.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(A){return rt.getNormal(this.a,this.b,this.c,A)}getPlane(A){return A.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(A,e){return rt.getBarycoord(A,this.a,this.b,this.c,e)}getUV(A,e,t,i,r){return xr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xr=!0),rt.getInterpolation(A,this.a,this.b,this.c,e,t,i,r)}getInterpolation(A,e,t,i,r){return rt.getInterpolation(A,this.a,this.b,this.c,e,t,i,r)}containsPoint(A){return rt.containsPoint(A,this.a,this.b,this.c)}isFrontFacing(A){return rt.isFrontFacing(this.a,this.b,this.c,A)}intersectsBox(A){return A.intersectsTriangle(this)}closestPointToPoint(A,e){const t=this.a,i=this.b,r=this.c;let s,a;Pn.subVectors(i,t),On.subVectors(r,t),ua.subVectors(A,t);const o=Pn.dot(ua),l=On.dot(ua);if(o<=0&&l<=0)return e.copy(t);ha.subVectors(A,i);const c=Pn.dot(ha),u=On.dot(ha);if(c>=0&&u<=c)return e.copy(i);const h=o*u-c*l;if(h<=0&&o>=0&&c<=0)return s=o/(o-c),e.copy(t).addScaledVector(Pn,s);fa.subVectors(A,r);const p=Pn.dot(fa),g=On.dot(fa);if(g>=0&&p<=g)return e.copy(r);const m=p*l-o*g;if(m<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(t).addScaledVector(On,a);const d=c*g-p*u;if(d<=0&&u-c>=0&&p-g>=0)return Ol.subVectors(r,i),a=(u-c)/(u-c+(p-g)),e.copy(i).addScaledVector(Ol,a);const f=1/(d+m+h);return s=m*f,a=h*f,e.copy(t).addScaledVector(Pn,s).addScaledVector(On,a)}equals(A){return A.a.equals(this.a)&&A.b.equals(this.b)&&A.c.equals(this.c)}}let kd=0;class Ts extends Mn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=vi(),this.name="",this.type="Material",this.blending=ai,this.side=en,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vu,this.blendDst=_u,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Wa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Aa,this.stencilZFail=Aa,this.stencilZPass=Aa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(A){this._alphaTest>0!=A>0&&this.version++,this._alphaTest=A}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(A){if(A!==void 0)for(const e in A){const t=A[e];if(t===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(t):i&&i.isVector3&&t&&t.isVector3?i.copy(t):this[e]=t}}toJSON(A){const e=A===void 0||typeof A=="string";e&&(A={textures:{},images:{}});const t={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.color&&this.color.isColor&&(t.color=this.color.getHex()),this.roughness!==void 0&&(t.roughness=this.roughness),this.metalness!==void 0&&(t.metalness=this.metalness),this.sheen!==void 0&&(t.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(t.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(t.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(t.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(t.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(t.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(t.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(t.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(t.shininess=this.shininess),this.clearcoat!==void 0&&(t.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(t.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(t.clearcoatMap=this.clearcoatMap.toJSON(A).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(t.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(A).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(t.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(A).uuid,t.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(t.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(t.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(t.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(t.iridescenceMap=this.iridescenceMap.toJSON(A).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(t.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(A).uuid),this.anisotropy!==void 0&&(t.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(t.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(t.anisotropyMap=this.anisotropyMap.toJSON(A).uuid),this.map&&this.map.isTexture&&(t.map=this.map.toJSON(A).uuid),this.matcap&&this.matcap.isTexture&&(t.matcap=this.matcap.toJSON(A).uuid),this.alphaMap&&this.alphaMap.isTexture&&(t.alphaMap=this.alphaMap.toJSON(A).uuid),this.lightMap&&this.lightMap.isTexture&&(t.lightMap=this.lightMap.toJSON(A).uuid,t.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(t.aoMap=this.aoMap.toJSON(A).uuid,t.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(t.bumpMap=this.bumpMap.toJSON(A).uuid,t.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(t.normalMap=this.normalMap.toJSON(A).uuid,t.normalMapType=this.normalMapType,t.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(t.displacementMap=this.displacementMap.toJSON(A).uuid,t.displacementScale=this.displacementScale,t.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(t.roughnessMap=this.roughnessMap.toJSON(A).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(t.metalnessMap=this.metalnessMap.toJSON(A).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(t.emissiveMap=this.emissiveMap.toJSON(A).uuid),this.specularMap&&this.specularMap.isTexture&&(t.specularMap=this.specularMap.toJSON(A).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(t.specularIntensityMap=this.specularIntensityMap.toJSON(A).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(t.specularColorMap=this.specularColorMap.toJSON(A).uuid),this.envMap&&this.envMap.isTexture&&(t.envMap=this.envMap.toJSON(A).uuid,this.combine!==void 0&&(t.combine=this.combine)),this.envMapIntensity!==void 0&&(t.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(t.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(t.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(t.gradientMap=this.gradientMap.toJSON(A).uuid),this.transmission!==void 0&&(t.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(t.transmissionMap=this.transmissionMap.toJSON(A).uuid),this.thickness!==void 0&&(t.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(t.thicknessMap=this.thicknessMap.toJSON(A).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(t.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(t.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(t.size=this.size),this.shadowSide!==null&&(t.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(t.sizeAttenuation=this.sizeAttenuation),this.blending!==ai&&(t.blending=this.blending),this.side!==en&&(t.side=this.side),this.vertexColors&&(t.vertexColors=!0),this.opacity<1&&(t.opacity=this.opacity),this.transparent===!0&&(t.transparent=this.transparent),t.depthFunc=this.depthFunc,t.depthTest=this.depthTest,t.depthWrite=this.depthWrite,t.colorWrite=this.colorWrite,t.stencilWrite=this.stencilWrite,t.stencilWriteMask=this.stencilWriteMask,t.stencilFunc=this.stencilFunc,t.stencilRef=this.stencilRef,t.stencilFuncMask=this.stencilFuncMask,t.stencilFail=this.stencilFail,t.stencilZFail=this.stencilZFail,t.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(t.rotation=this.rotation),this.polygonOffset===!0&&(t.polygonOffset=!0),this.polygonOffsetFactor!==0&&(t.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(t.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(t.linewidth=this.linewidth),this.dashSize!==void 0&&(t.dashSize=this.dashSize),this.gapSize!==void 0&&(t.gapSize=this.gapSize),this.scale!==void 0&&(t.scale=this.scale),this.dithering===!0&&(t.dithering=!0),this.alphaTest>0&&(t.alphaTest=this.alphaTest),this.alphaHash===!0&&(t.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(t.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(t.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(t.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(t.wireframe=this.wireframe),this.wireframeLinewidth>1&&(t.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(t.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(t.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(t.flatShading=this.flatShading),this.visible===!1&&(t.visible=!1),this.toneMapped===!1&&(t.toneMapped=!1),this.fog===!1&&(t.fog=!1),Object.keys(this.userData).length>0&&(t.userData=this.userData);function i(r){const s=[];for(const a in r){const o=r[a];delete o.metadata,s.push(o)}return s}if(e){const r=i(A.textures),s=i(A.images);r.length>0&&(t.textures=r),s.length>0&&(t.images=s)}return t}clone(){return new this.constructor().copy(this)}copy(A){this.name=A.name,this.blending=A.blending,this.side=A.side,this.vertexColors=A.vertexColors,this.opacity=A.opacity,this.transparent=A.transparent,this.blendSrc=A.blendSrc,this.blendDst=A.blendDst,this.blendEquation=A.blendEquation,this.blendSrcAlpha=A.blendSrcAlpha,this.blendDstAlpha=A.blendDstAlpha,this.blendEquationAlpha=A.blendEquationAlpha,this.depthFunc=A.depthFunc,this.depthTest=A.depthTest,this.depthWrite=A.depthWrite,this.stencilWriteMask=A.stencilWriteMask,this.stencilFunc=A.stencilFunc,this.stencilRef=A.stencilRef,this.stencilFuncMask=A.stencilFuncMask,this.stencilFail=A.stencilFail,this.stencilZFail=A.stencilZFail,this.stencilZPass=A.stencilZPass,this.stencilWrite=A.stencilWrite;const e=A.clippingPlanes;let t=null;if(e!==null){const i=e.length;t=new Array(i);for(let r=0;r!==i;++r)t[r]=e[r].clone()}return this.clippingPlanes=t,this.clipIntersection=A.clipIntersection,this.clipShadows=A.clipShadows,this.shadowSide=A.shadowSide,this.colorWrite=A.colorWrite,this.precision=A.precision,this.polygonOffset=A.polygonOffset,this.polygonOffsetFactor=A.polygonOffsetFactor,this.polygonOffsetUnits=A.polygonOffsetUnits,this.dithering=A.dithering,this.alphaTest=A.alphaTest,this.alphaHash=A.alphaHash,this.alphaToCoverage=A.alphaToCoverage,this.premultipliedAlpha=A.premultipliedAlpha,this.forceSinglePass=A.forceSinglePass,this.visible=A.visible,this.toneMapped=A.toneMapped,this.userData=JSON.parse(JSON.stringify(A.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(A){A===!0&&this.version++}}const Pu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nt={h:0,s:0,l:0},Ur={h:0,s:0,l:0};function da(n,A,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(A-n)*6*e:e<1/2?A:e<2/3?n+(A-n)*6*(2/3-e):n}class YA{constructor(A,e,t){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(A,e,t)}set(A,e,t){if(e===void 0&&t===void 0){const i=A;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(A,e,t);return this}setScalar(A){return this.r=A,this.g=A,this.b=A,this}setHex(A,e=LA){return A=Math.floor(A),this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(A&255)/255,At.toWorkingColorSpace(this,e),this}setRGB(A,e,t,i=At.workingColorSpace){return this.r=A,this.g=e,this.b=t,At.toWorkingColorSpace(this,i),this}setHSL(A,e,t,i=At.workingColorSpace){if(A=Mo(A,1),e=Be(e,0,1),t=Be(t,0,1),e===0)this.r=this.g=this.b=t;else{const r=t<=.5?t*(1+e):t+e-t*e,s=2*t-r;this.r=da(s,r,A+1/3),this.g=da(s,r,A),this.b=da(s,r,A-1/3)}return At.toWorkingColorSpace(this,i),this}setStyle(A,e=LA){function t(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+A+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(A)){let r;const s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return t(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return t(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return t(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+A)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(A)){const r=i[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(s===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+A)}else if(A&&A.length>0)return this.setColorName(A,e);return this}setColorName(A,e=LA){const t=Pu[A.toLowerCase()];return t!==void 0?this.setHex(t,e):console.warn("THREE.Color: Unknown color "+A),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(A){return this.r=A.r,this.g=A.g,this.b=A.b,this}copySRGBToLinear(A){return this.r=oi(A.r),this.g=oi(A.g),this.b=oi(A.b),this}copyLinearToSRGB(A){return this.r=ta(A.r),this.g=ta(A.g),this.b=ta(A.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(A=LA){return At.fromWorkingColorSpace(Se.copy(this),A),Math.round(Be(Se.r*255,0,255))*65536+Math.round(Be(Se.g*255,0,255))*256+Math.round(Be(Se.b*255,0,255))}getHexString(A=LA){return("000000"+this.getHex(A).toString(16)).slice(-6)}getHSL(A,e=At.workingColorSpace){At.fromWorkingColorSpace(Se.copy(this),e);const t=Se.r,i=Se.g,r=Se.b,s=Math.max(t,i,r),a=Math.min(t,i,r);let o,l;const c=(a+s)/2;if(a===s)o=0,l=0;else{const u=s-a;switch(l=c<=.5?u/(s+a):u/(2-s-a),s){case t:o=(i-r)/u+(i<r?6:0);break;case i:o=(r-t)/u+2;break;case r:o=(t-i)/u+4;break}o/=6}return A.h=o,A.s=l,A.l=c,A}getRGB(A,e=At.workingColorSpace){return At.fromWorkingColorSpace(Se.copy(this),e),A.r=Se.r,A.g=Se.g,A.b=Se.b,A}getStyle(A=LA){At.fromWorkingColorSpace(Se.copy(this),A);const e=Se.r,t=Se.g,i=Se.b;return A!==LA?`color(${A} ${e.toFixed(3)} ${t.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(t*255)},${Math.round(i*255)})`}offsetHSL(A,e,t){return this.getHSL(nt),nt.h+=A,nt.s+=e,nt.l+=t,this.setHSL(nt.h,nt.s,nt.l),this}add(A){return this.r+=A.r,this.g+=A.g,this.b+=A.b,this}addColors(A,e){return this.r=A.r+e.r,this.g=A.g+e.g,this.b=A.b+e.b,this}addScalar(A){return this.r+=A,this.g+=A,this.b+=A,this}sub(A){return this.r=Math.max(0,this.r-A.r),this.g=Math.max(0,this.g-A.g),this.b=Math.max(0,this.b-A.b),this}multiply(A){return this.r*=A.r,this.g*=A.g,this.b*=A.b,this}multiplyScalar(A){return this.r*=A,this.g*=A,this.b*=A,this}lerp(A,e){return this.r+=(A.r-this.r)*e,this.g+=(A.g-this.g)*e,this.b+=(A.b-this.b)*e,this}lerpColors(A,e,t){return this.r=A.r+(e.r-A.r)*t,this.g=A.g+(e.g-A.g)*t,this.b=A.b+(e.b-A.b)*t,this}lerpHSL(A,e){this.getHSL(nt),A.getHSL(Ur);const t=ki(nt.h,Ur.h,e),i=ki(nt.s,Ur.s,e),r=ki(nt.l,Ur.l,e);return this.setHSL(t,i,r),this}setFromVector3(A){return this.r=A.x,this.g=A.y,this.b=A.z,this}applyMatrix3(A){const e=this.r,t=this.g,i=this.b,r=A.elements;return this.r=r[0]*e+r[3]*t+r[6]*i,this.g=r[1]*e+r[4]*t+r[7]*i,this.b=r[2]*e+r[5]*t+r[8]*i,this}equals(A){return A.r===this.r&&A.g===this.g&&A.b===this.b}fromArray(A,e=0){return this.r=A[e],this.g=A[e+1],this.b=A[e+2],this}toArray(A=[],e=0){return A[e]=this.r,A[e+1]=this.g,A[e+2]=this.b,A}fromBufferAttribute(A,e){return this.r=A.getX(e),this.g=A.getY(e),this.b=A.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Se=new YA;YA.NAMES=Pu;class bo extends Ts{constructor(A){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new YA(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Cu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.fog=A.fog,this}}const ae=new Q,yr=new RA;class lt{constructor(A,e,t=!1){if(Array.isArray(A))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=A,this.itemSize=e,this.count=A!==void 0?A.length/e:0,this.normalized=t,this.usage=Sl,this.updateRange={offset:0,count:-1},this.gpuType=Wt,this.version=0}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}setUsage(A){return this.usage=A,this}copy(A){return this.name=A.name,this.array=new A.array.constructor(A.array),this.itemSize=A.itemSize,this.count=A.count,this.normalized=A.normalized,this.usage=A.usage,this.gpuType=A.gpuType,this}copyAt(A,e,t){A*=this.itemSize,t*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[A+i]=e.array[t+i];return this}copyArray(A){return this.array.set(A),this}applyMatrix3(A){if(this.itemSize===2)for(let e=0,t=this.count;e<t;e++)yr.fromBufferAttribute(this,e),yr.applyMatrix3(A),this.setXY(e,yr.x,yr.y);else if(this.itemSize===3)for(let e=0,t=this.count;e<t;e++)ae.fromBufferAttribute(this,e),ae.applyMatrix3(A),this.setXYZ(e,ae.x,ae.y,ae.z);return this}applyMatrix4(A){for(let e=0,t=this.count;e<t;e++)ae.fromBufferAttribute(this,e),ae.applyMatrix4(A),this.setXYZ(e,ae.x,ae.y,ae.z);return this}applyNormalMatrix(A){for(let e=0,t=this.count;e<t;e++)ae.fromBufferAttribute(this,e),ae.applyNormalMatrix(A),this.setXYZ(e,ae.x,ae.y,ae.z);return this}transformDirection(A){for(let e=0,t=this.count;e<t;e++)ae.fromBufferAttribute(this,e),ae.transformDirection(A),this.setXYZ(e,ae.x,ae.y,ae.z);return this}set(A,e=0){return this.array.set(A,e),this}getComponent(A,e){let t=this.array[A*this.itemSize+e];return this.normalized&&(t=ei(t,this.array)),t}setComponent(A,e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[A*this.itemSize+e]=t,this}getX(A){let e=this.array[A*this.itemSize];return this.normalized&&(e=ei(e,this.array)),e}setX(A,e){return this.normalized&&(e=Qe(e,this.array)),this.array[A*this.itemSize]=e,this}getY(A){let e=this.array[A*this.itemSize+1];return this.normalized&&(e=ei(e,this.array)),e}setY(A,e){return this.normalized&&(e=Qe(e,this.array)),this.array[A*this.itemSize+1]=e,this}getZ(A){let e=this.array[A*this.itemSize+2];return this.normalized&&(e=ei(e,this.array)),e}setZ(A,e){return this.normalized&&(e=Qe(e,this.array)),this.array[A*this.itemSize+2]=e,this}getW(A){let e=this.array[A*this.itemSize+3];return this.normalized&&(e=ei(e,this.array)),e}setW(A,e){return this.normalized&&(e=Qe(e,this.array)),this.array[A*this.itemSize+3]=e,this}setXY(A,e,t){return A*=this.itemSize,this.normalized&&(e=Qe(e,this.array),t=Qe(t,this.array)),this.array[A+0]=e,this.array[A+1]=t,this}setXYZ(A,e,t,i){return A*=this.itemSize,this.normalized&&(e=Qe(e,this.array),t=Qe(t,this.array),i=Qe(i,this.array)),this.array[A+0]=e,this.array[A+1]=t,this.array[A+2]=i,this}setXYZW(A,e,t,i,r){return A*=this.itemSize,this.normalized&&(e=Qe(e,this.array),t=Qe(t,this.array),i=Qe(i,this.array),r=Qe(r,this.array)),this.array[A+0]=e,this.array[A+1]=t,this.array[A+2]=i,this.array[A+3]=r,this}onUpload(A){return this.onUploadCallback=A,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const A={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(A.name=this.name),this.usage!==Sl&&(A.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(A.updateRange=this.updateRange),A}}class Ou extends lt{constructor(A,e,t){super(new Uint16Array(A),e,t)}}class Nu extends lt{constructor(A,e,t){super(new Uint32Array(A),e,t)}}class ot extends lt{constructor(A,e,t){super(new Float32Array(A),e,t)}}let zd=0;const We=new we,pa=new ke,Nn=new Q,Ge=new hr,Si=new hr,pe=new Q;class nn extends Mn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=vi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(A){return Array.isArray(A)?this.index=new(Qu(A)?Nu:Ou)(A,1):this.index=A,this}getAttribute(A){return this.attributes[A]}setAttribute(A,e){return this.attributes[A]=e,this}deleteAttribute(A){return delete this.attributes[A],this}hasAttribute(A){return this.attributes[A]!==void 0}addGroup(A,e,t=0){this.groups.push({start:A,count:e,materialIndex:t})}clearGroups(){this.groups=[]}setDrawRange(A,e){this.drawRange.start=A,this.drawRange.count=e}applyMatrix4(A){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(A),e.needsUpdate=!0);const t=this.attributes.normal;if(t!==void 0){const r=new PA().getNormalMatrix(A);t.applyNormalMatrix(r),t.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(A),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(A){return We.makeRotationFromQuaternion(A),this.applyMatrix4(We),this}rotateX(A){return We.makeRotationX(A),this.applyMatrix4(We),this}rotateY(A){return We.makeRotationY(A),this.applyMatrix4(We),this}rotateZ(A){return We.makeRotationZ(A),this.applyMatrix4(We),this}translate(A,e,t){return We.makeTranslation(A,e,t),this.applyMatrix4(We),this}scale(A,e,t){return We.makeScale(A,e,t),this.applyMatrix4(We),this}lookAt(A){return pa.lookAt(A),pa.updateMatrix(),this.applyMatrix4(pa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Nn).negate(),this.translate(Nn.x,Nn.y,Nn.z),this}setFromPoints(A){const e=[];for(let t=0,i=A.length;t<i;t++){const r=A[t];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ot(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hr);const A=this.attributes.position,e=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(A!==void 0){if(this.boundingBox.setFromBufferAttribute(A),e)for(let t=0,i=e.length;t<i;t++){const r=e[t];Ge.setFromBufferAttribute(r),this.morphTargetsRelative?(pe.addVectors(this.boundingBox.min,Ge.min),this.boundingBox.expandByPoint(pe),pe.addVectors(this.boundingBox.max,Ge.max),this.boundingBox.expandByPoint(pe)):(this.boundingBox.expandByPoint(Ge.min),this.boundingBox.expandByPoint(Ge.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fo);const A=this.attributes.position,e=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Q,1/0);return}if(A){const t=this.boundingSphere.center;if(Ge.setFromBufferAttribute(A),e)for(let r=0,s=e.length;r<s;r++){const a=e[r];Si.setFromBufferAttribute(a),this.morphTargetsRelative?(pe.addVectors(Ge.min,Si.min),Ge.expandByPoint(pe),pe.addVectors(Ge.max,Si.max),Ge.expandByPoint(pe)):(Ge.expandByPoint(Si.min),Ge.expandByPoint(Si.max))}Ge.getCenter(t);let i=0;for(let r=0,s=A.count;r<s;r++)pe.fromBufferAttribute(A,r),i=Math.max(i,t.distanceToSquared(pe));if(e)for(let r=0,s=e.length;r<s;r++){const a=e[r],o=this.morphTargetsRelative;for(let l=0,c=a.count;l<c;l++)pe.fromBufferAttribute(a,l),o&&(Nn.fromBufferAttribute(A,l),pe.add(Nn)),i=Math.max(i,t.distanceToSquared(pe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const A=this.index,e=this.attributes;if(A===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const t=A.array,i=e.position.array,r=e.normal.array,s=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new lt(new Float32Array(4*a),4));const o=this.getAttribute("tangent").array,l=[],c=[];for(let S=0;S<a;S++)l[S]=new Q,c[S]=new Q;const u=new Q,h=new Q,p=new Q,g=new RA,m=new RA,d=new RA,f=new Q,C=new Q;function v(S,Y,q){u.fromArray(i,S*3),h.fromArray(i,Y*3),p.fromArray(i,q*3),g.fromArray(s,S*2),m.fromArray(s,Y*2),d.fromArray(s,q*2),h.sub(u),p.sub(u),m.sub(g),d.sub(g);const T=1/(m.x*d.y-d.x*m.y);isFinite(T)&&(f.copy(h).multiplyScalar(d.y).addScaledVector(p,-m.y).multiplyScalar(T),C.copy(p).multiplyScalar(m.x).addScaledVector(h,-d.x).multiplyScalar(T),l[S].add(f),l[Y].add(f),l[q].add(f),c[S].add(C),c[Y].add(C),c[q].add(C))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.length}]);for(let S=0,Y=_.length;S<Y;++S){const q=_[S],T=q.start,O=q.count;for(let V=T,Z=T+O;V<Z;V+=3)v(t[V+0],t[V+1],t[V+2])}const E=new Q,y=new Q,U=new Q,L=new Q;function B(S){U.fromArray(r,S*3),L.copy(U);const Y=l[S];E.copy(Y),E.sub(U.multiplyScalar(U.dot(Y))).normalize(),y.crossVectors(L,Y);const T=y.dot(c[S])<0?-1:1;o[S*4]=E.x,o[S*4+1]=E.y,o[S*4+2]=E.z,o[S*4+3]=T}for(let S=0,Y=_.length;S<Y;++S){const q=_[S],T=q.start,O=q.count;for(let V=T,Z=T+O;V<Z;V+=3)B(t[V+0]),B(t[V+1]),B(t[V+2])}}computeVertexNormals(){const A=this.index,e=this.getAttribute("position");if(e!==void 0){let t=this.getAttribute("normal");if(t===void 0)t=new lt(new Float32Array(e.count*3),3),this.setAttribute("normal",t);else for(let h=0,p=t.count;h<p;h++)t.setXYZ(h,0,0,0);const i=new Q,r=new Q,s=new Q,a=new Q,o=new Q,l=new Q,c=new Q,u=new Q;if(A)for(let h=0,p=A.count;h<p;h+=3){const g=A.getX(h+0),m=A.getX(h+1),d=A.getX(h+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,m),s.fromBufferAttribute(e,d),c.subVectors(s,r),u.subVectors(i,r),c.cross(u),a.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),l.fromBufferAttribute(t,d),a.add(c),o.add(c),l.add(c),t.setXYZ(g,a.x,a.y,a.z),t.setXYZ(m,o.x,o.y,o.z),t.setXYZ(d,l.x,l.y,l.z)}else for(let h=0,p=e.count;h<p;h+=3)i.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),s.fromBufferAttribute(e,h+2),c.subVectors(s,r),u.subVectors(i,r),c.cross(u),t.setXYZ(h+0,c.x,c.y,c.z),t.setXYZ(h+1,c.x,c.y,c.z),t.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),t.needsUpdate=!0}}normalizeNormals(){const A=this.attributes.normal;for(let e=0,t=A.count;e<t;e++)pe.fromBufferAttribute(A,e),pe.normalize(),A.setXYZ(e,pe.x,pe.y,pe.z)}toNonIndexed(){function A(a,o){const l=a.array,c=a.itemSize,u=a.normalized,h=new l.constructor(o.length*c);let p=0,g=0;for(let m=0,d=o.length;m<d;m++){a.isInterleavedBufferAttribute?p=o[m]*a.data.stride+a.offset:p=o[m]*c;for(let f=0;f<c;f++)h[g++]=l[p++]}return new lt(h,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new nn,t=this.index.array,i=this.attributes;for(const a in i){const o=i[a],l=A(o,t);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const o=[],l=r[a];for(let c=0,u=l.length;c<u;c++){const h=l[c],p=A(h,t);o.push(p)}e.morphAttributes[a]=o}e.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,o=s.length;a<o;a++){const l=s[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const A={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),Object.keys(this.userData).length>0&&(A.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const l in o)o[l]!==void 0&&(A[l]=o[l]);return A}A.data={attributes:{}};const e=this.index;e!==null&&(A.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const t=this.attributes;for(const o in t){const l=t[o];A.data.attributes[o]=l.toJSON(A.data)}const i={};let r=!1;for(const o in this.morphAttributes){const l=this.morphAttributes[o],c=[];for(let u=0,h=l.length;u<h;u++){const p=l[u];c.push(p.toJSON(A.data))}c.length>0&&(i[o]=c,r=!0)}r&&(A.data.morphAttributes=i,A.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(A.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(A.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),A}clone(){return new this.constructor().copy(this)}copy(A){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=A.name;const t=A.index;t!==null&&this.setIndex(t.clone(e));const i=A.attributes;for(const l in i){const c=i[l];this.setAttribute(l,c.clone(e))}const r=A.morphAttributes;for(const l in r){const c=[],u=r[l];for(let h=0,p=u.length;h<p;h++)c.push(u[h].clone(e));this.morphAttributes[l]=c}this.morphTargetsRelative=A.morphTargetsRelative;const s=A.groups;for(let l=0,c=s.length;l<c;l++){const u=s[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=A.boundingBox;a!==null&&(this.boundingBox=a.clone());const o=A.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=A.drawRange.start,this.drawRange.count=A.drawRange.count,this.userData=A.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nl=new we,ln=new Hu,Sr=new Fo,Gl=new Q,Gn=new Q,Vn=new Q,Kn=new Q,ga=new Q,Mr=new Q,Fr=new RA,br=new RA,Tr=new RA,Vl=new Q,Kl=new Q,kl=new Q,Qr=new Q,Ir=new Q;class Qt extends ke{constructor(A=new nn,e=new bo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=A,this.material=e,this.updateMorphTargets()}copy(A,e){return super.copy(A,e),A.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=A.morphTargetInfluences.slice()),A.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},A.morphTargetDictionary)),this.material=A.material,this.geometry=A.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(A,e){const t=this.geometry,i=t.attributes.position,r=t.morphAttributes.position,s=t.morphTargetsRelative;e.fromBufferAttribute(i,A);const a=this.morphTargetInfluences;if(r&&a){Mr.set(0,0,0);for(let o=0,l=r.length;o<l;o++){const c=a[o],u=r[o];c!==0&&(ga.fromBufferAttribute(u,A),s?Mr.addScaledVector(ga,c):Mr.addScaledVector(ga.sub(e),c))}e.add(Mr)}return e}raycast(A,e){const t=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(t.boundingSphere===null&&t.computeBoundingSphere(),Sr.copy(t.boundingSphere),Sr.applyMatrix4(r),ln.copy(A.ray).recast(A.near),!(Sr.containsPoint(ln.origin)===!1&&(ln.intersectSphere(Sr,Gl)===null||ln.origin.distanceToSquared(Gl)>(A.far-A.near)**2))&&(Nl.copy(r).invert(),ln.copy(A.ray).applyMatrix4(Nl),!(t.boundingBox!==null&&ln.intersectsBox(t.boundingBox)===!1)&&this._computeIntersections(A,e,ln)))}_computeIntersections(A,e,t){let i;const r=this.geometry,s=this.material,a=r.index,o=r.attributes.position,l=r.attributes.uv,c=r.attributes.uv1,u=r.attributes.normal,h=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(s))for(let g=0,m=h.length;g<m;g++){const d=h[g],f=s[d.materialIndex],C=Math.max(d.start,p.start),v=Math.min(a.count,Math.min(d.start+d.count,p.start+p.count));for(let _=C,E=v;_<E;_+=3){const y=a.getX(_),U=a.getX(_+1),L=a.getX(_+2);i=Lr(this,f,A,t,l,c,u,y,U,L),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=d.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),m=Math.min(a.count,p.start+p.count);for(let d=g,f=m;d<f;d+=3){const C=a.getX(d),v=a.getX(d+1),_=a.getX(d+2);i=Lr(this,s,A,t,l,c,u,C,v,_),i&&(i.faceIndex=Math.floor(d/3),e.push(i))}}else if(o!==void 0)if(Array.isArray(s))for(let g=0,m=h.length;g<m;g++){const d=h[g],f=s[d.materialIndex],C=Math.max(d.start,p.start),v=Math.min(o.count,Math.min(d.start+d.count,p.start+p.count));for(let _=C,E=v;_<E;_+=3){const y=_,U=_+1,L=_+2;i=Lr(this,f,A,t,l,c,u,y,U,L),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=d.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),m=Math.min(o.count,p.start+p.count);for(let d=g,f=m;d<f;d+=3){const C=d,v=d+1,_=d+2;i=Lr(this,s,A,t,l,c,u,C,v,_),i&&(i.faceIndex=Math.floor(d/3),e.push(i))}}}}function Wd(n,A,e,t,i,r,s,a){let o;if(A.side===Pe?o=t.intersectTriangle(s,r,i,!0,a):o=t.intersectTriangle(i,r,s,A.side===en,a),o===null)return null;Ir.copy(a),Ir.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Ir);return l<e.near||l>e.far?null:{distance:l,point:Ir.clone(),object:n}}function Lr(n,A,e,t,i,r,s,a,o,l){n.getVertexPosition(a,Gn),n.getVertexPosition(o,Vn),n.getVertexPosition(l,Kn);const c=Wd(n,A,e,t,Gn,Vn,Kn,Qr);if(c){i&&(Fr.fromBufferAttribute(i,a),br.fromBufferAttribute(i,o),Tr.fromBufferAttribute(i,l),c.uv=rt.getInterpolation(Qr,Gn,Vn,Kn,Fr,br,Tr,new RA)),r&&(Fr.fromBufferAttribute(r,a),br.fromBufferAttribute(r,o),Tr.fromBufferAttribute(r,l),c.uv1=rt.getInterpolation(Qr,Gn,Vn,Kn,Fr,br,Tr,new RA),c.uv2=c.uv1),s&&(Vl.fromBufferAttribute(s,a),Kl.fromBufferAttribute(s,o),kl.fromBufferAttribute(s,l),c.normal=rt.getInterpolation(Qr,Gn,Vn,Kn,Vl,Kl,kl,new Q),c.normal.dot(t.direction)>0&&c.normal.multiplyScalar(-1));const u={a,b:o,c:l,normal:new Q,materialIndex:0};rt.getNormal(Gn,Vn,Kn,u.normal),c.face=u}return c}class fr extends nn{constructor(A=1,e=1,t=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:A,height:e,depth:t,widthSegments:i,heightSegments:r,depthSegments:s};const a=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);const o=[],l=[],c=[],u=[];let h=0,p=0;g("z","y","x",-1,-1,t,e,A,s,r,0),g("z","y","x",1,-1,t,e,-A,s,r,1),g("x","z","y",1,1,A,t,e,i,s,2),g("x","z","y",1,-1,A,t,-e,i,s,3),g("x","y","z",1,-1,A,e,t,i,r,4),g("x","y","z",-1,-1,A,e,-t,i,r,5),this.setIndex(o),this.setAttribute("position",new ot(l,3)),this.setAttribute("normal",new ot(c,3)),this.setAttribute("uv",new ot(u,2));function g(m,d,f,C,v,_,E,y,U,L,B){const S=_/U,Y=E/L,q=_/2,T=E/2,O=y/2,V=U+1,Z=L+1;let k=0,X=0;const $=new Q;for(let J=0;J<Z;J++){const D=J*Y-T;for(let K=0;K<V;K++){const rA=K*S-q;$[m]=rA*C,$[d]=D*v,$[f]=O,l.push($.x,$.y,$.z),$[m]=0,$[d]=0,$[f]=y>0?1:-1,c.push($.x,$.y,$.z),u.push(K/U),u.push(1-J/L),k+=1}}for(let J=0;J<L;J++)for(let D=0;D<U;D++){const K=h+D+V*J,rA=h+D+V*(J+1),sA=h+(D+1)+V*(J+1),oA=h+(D+1)+V*J;o.push(K,rA,oA),o.push(rA,sA,oA),X+=6}a.addGroup(p,X,B),p+=X,h+=k}}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new fr(A.width,A.height,A.depth,A.widthSegments,A.heightSegments,A.depthSegments)}}function mi(n){const A={};for(const e in n){A[e]={};for(const t in n[e]){const i=n[e][t];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),A[e][t]=null):A[e][t]=i.clone():Array.isArray(i)?A[e][t]=i.slice():A[e][t]=i}}return A}function Ie(n){const A={};for(let e=0;e<n.length;e++){const t=mi(n[e]);for(const i in t)A[i]=t[i]}return A}function Xd(n){const A=[];for(let e=0;e<n.length;e++)A.push(n[e].clone());return A}function Gu(n){return n.getRenderTarget()===null?n.outputColorSpace:pt}const Yd={clone:mi,merge:Ie};var Jd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sn extends Ts{constructor(A){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jd,this.fragmentShader=Zd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,A!==void 0&&this.setValues(A)}copy(A){return super.copy(A),this.fragmentShader=A.fragmentShader,this.vertexShader=A.vertexShader,this.uniforms=mi(A.uniforms),this.uniformsGroups=Xd(A.uniformsGroups),this.defines=Object.assign({},A.defines),this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.fog=A.fog,this.lights=A.lights,this.clipping=A.clipping,this.extensions=Object.assign({},A.extensions),this.glslVersion=A.glslVersion,this}toJSON(A){const e=super.toJSON(A);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?e.uniforms[i]={type:"t",value:s.toJSON(A).uuid}:s&&s.isColor?e.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[i]={type:"m4",value:s.toArray()}:e.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const t={};for(const i in this.extensions)this.extensions[i]===!0&&(t[i]=!0);return Object.keys(t).length>0&&(e.extensions=t),e}}class Vu extends ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=Tt}copy(A,e){return super.copy(A,e),this.matrixWorldInverse.copy(A.matrixWorldInverse),this.projectionMatrix.copy(A.projectionMatrix),this.projectionMatrixInverse.copy(A.projectionMatrixInverse),this.coordinateSystem=A.coordinateSystem,this}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return A.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(A){super.updateMatrixWorld(A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(A,e){super.updateWorldMatrix(A,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ze extends Vu{constructor(A=50,e=1,t=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=A,this.zoom=1,this.near=t,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(A,e){return super.copy(A,e),this.fov=A.fov,this.zoom=A.zoom,this.near=A.near,this.far=A.far,this.focus=A.focus,this.aspect=A.aspect,this.view=A.view===null?null:Object.assign({},A.view),this.filmGauge=A.filmGauge,this.filmOffset=A.filmOffset,this}setFocalLength(A){const e=.5*this.getFilmHeight()/A;this.fov=tr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const A=Math.tan(Ki*.5*this.fov);return .5*this.getFilmHeight()/A}getEffectiveFOV(){return tr*2*Math.atan(Math.tan(Ki*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(A,e,t,i,r,s){this.aspect=A/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=e,this.view.offsetX=t,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=this.near;let e=A*Math.tan(Ki*.5*this.fov)/this.zoom,t=2*e,i=this.aspect*t,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const o=s.fullWidth,l=s.fullHeight;r+=s.offsetX*i/o,e-=s.offsetY*t/l,i*=s.width/o,t*=s.height/l}const a=this.filmOffset;a!==0&&(r+=A*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-t,A,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const e=super.toJSON(A);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const kn=-90,zn=1;class qd extends ke{constructor(A,e,t){super(),this.type="CubeCamera",this.renderTarget=t,this.coordinateSystem=null;const i=new Ze(kn,zn,A,e);i.layers=this.layers,this.add(i);const r=new Ze(kn,zn,A,e);r.layers=this.layers,this.add(r);const s=new Ze(kn,zn,A,e);s.layers=this.layers,this.add(s);const a=new Ze(kn,zn,A,e);a.layers=this.layers,this.add(a);const o=new Ze(kn,zn,A,e);o.layers=this.layers,this.add(o);const l=new Ze(kn,zn,A,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const A=this.coordinateSystem,e=this.children.concat(),[t,i,r,s,a,o]=e;for(const l of e)this.remove(l);if(A===Tt)t.up.set(0,1,0),t.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(A===ps)t.up.set(0,-1,0),t.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+A);for(const l of e)this.add(l),l.updateMatrixWorld()}update(A,e){this.parent===null&&this.updateMatrixWorld();const t=this.renderTarget;this.coordinateSystem!==A.coordinateSystem&&(this.coordinateSystem=A.coordinateSystem,this.updateCoordinateSystem());const[i,r,s,a,o,l]=this.children,c=A.getRenderTarget(),u=A.xr.enabled;A.xr.enabled=!1;const h=t.texture.generateMipmaps;t.texture.generateMipmaps=!1,A.setRenderTarget(t,0),A.render(e,i),A.setRenderTarget(t,1),A.render(e,r),A.setRenderTarget(t,2),A.render(e,s),A.setRenderTarget(t,3),A.render(e,a),A.setRenderTarget(t,4),A.render(e,o),t.texture.generateMipmaps=h,A.setRenderTarget(t,5),A.render(e,l),A.setRenderTarget(c),A.xr.enabled=u,t.texture.needsPMREMUpdate=!0}}class Ku extends Ke{constructor(A,e,t,i,r,s,a,o,l,c){A=A!==void 0?A:[],e=e!==void 0?e:di,super(A,e,t,i,r,s,a,o,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(A){this.image=A}}class jd extends Un{constructor(A=1,e={}){super(A,A,e),this.isWebGLCubeRenderTarget=!0;const t={width:A,height:A,depth:1},i=[t,t,t,t,t,t];e.encoding!==void 0&&(zi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===_n?LA:Cn),this.texture=new Ku(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Je}fromEquirectangularTexture(A,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const t={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new fr(5,5,5),r=new Sn({name:"CubemapFromEquirect",uniforms:mi(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:Pe,blending:Zt});r.uniforms.tEquirect.value=e;const s=new Qt(i,r),a=e.minFilter;return e.minFilter===Ar&&(e.minFilter=Je),new qd(1,10,this).update(A,s),e.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(A,e,t,i){const r=A.getRenderTarget();for(let s=0;s<6;s++)A.setRenderTarget(this,s),A.clear(e,t,i);A.setRenderTarget(r)}}const ma=new Q,$d=new Q,Ap=new PA;class Vt{constructor(A=new Q(1,0,0),e=0){this.isPlane=!0,this.normal=A,this.constant=e}set(A,e){return this.normal.copy(A),this.constant=e,this}setComponents(A,e,t,i){return this.normal.set(A,e,t),this.constant=i,this}setFromNormalAndCoplanarPoint(A,e){return this.normal.copy(A),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(A,e,t){const i=ma.subVectors(t,e).cross($d.subVectors(A,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,A),this}copy(A){return this.normal.copy(A.normal),this.constant=A.constant,this}normalize(){const A=1/this.normal.length();return this.normal.multiplyScalar(A),this.constant*=A,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(A){return this.normal.dot(A)+this.constant}distanceToSphere(A){return this.distanceToPoint(A.center)-A.radius}projectPoint(A,e){return e.copy(A).addScaledVector(this.normal,-this.distanceToPoint(A))}intersectLine(A,e){const t=A.delta(ma),i=this.normal.dot(t);if(i===0)return this.distanceToPoint(A.start)===0?e.copy(A.start):null;const r=-(A.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(A.start).addScaledVector(t,r)}intersectsLine(A){const e=this.distanceToPoint(A.start),t=this.distanceToPoint(A.end);return e<0&&t>0||t<0&&e>0}intersectsBox(A){return A.intersectsPlane(this)}intersectsSphere(A){return A.intersectsPlane(this)}coplanarPoint(A){return A.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(A,e){const t=e||Ap.getNormalMatrix(A),i=this.coplanarPoint(ma).applyMatrix4(A),r=this.normal.applyMatrix3(t).normalize();return this.constant=-i.dot(r),this}translate(A){return this.constant-=A.dot(this.normal),this}equals(A){return A.normal.equals(this.normal)&&A.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cn=new Fo,Rr=new Q;class ku{constructor(A=new Vt,e=new Vt,t=new Vt,i=new Vt,r=new Vt,s=new Vt){this.planes=[A,e,t,i,r,s]}set(A,e,t,i,r,s){const a=this.planes;return a[0].copy(A),a[1].copy(e),a[2].copy(t),a[3].copy(i),a[4].copy(r),a[5].copy(s),this}copy(A){const e=this.planes;for(let t=0;t<6;t++)e[t].copy(A.planes[t]);return this}setFromProjectionMatrix(A,e=Tt){const t=this.planes,i=A.elements,r=i[0],s=i[1],a=i[2],o=i[3],l=i[4],c=i[5],u=i[6],h=i[7],p=i[8],g=i[9],m=i[10],d=i[11],f=i[12],C=i[13],v=i[14],_=i[15];if(t[0].setComponents(o-r,h-l,d-p,_-f).normalize(),t[1].setComponents(o+r,h+l,d+p,_+f).normalize(),t[2].setComponents(o+s,h+c,d+g,_+C).normalize(),t[3].setComponents(o-s,h-c,d-g,_-C).normalize(),t[4].setComponents(o-a,h-u,d-m,_-v).normalize(),e===Tt)t[5].setComponents(o+a,h+u,d+m,_+v).normalize();else if(e===ps)t[5].setComponents(a,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(A){if(A.boundingSphere!==void 0)A.boundingSphere===null&&A.computeBoundingSphere(),cn.copy(A.boundingSphere).applyMatrix4(A.matrixWorld);else{const e=A.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),cn.copy(e.boundingSphere).applyMatrix4(A.matrixWorld)}return this.intersectsSphere(cn)}intersectsSprite(A){return cn.center.set(0,0,0),cn.radius=.7071067811865476,cn.applyMatrix4(A.matrixWorld),this.intersectsSphere(cn)}intersectsSphere(A){const e=this.planes,t=A.center,i=-A.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(t)<i)return!1;return!0}intersectsBox(A){const e=this.planes;for(let t=0;t<6;t++){const i=e[t];if(Rr.x=i.normal.x>0?A.max.x:A.min.x,Rr.y=i.normal.y>0?A.max.y:A.min.y,Rr.z=i.normal.z>0?A.max.z:A.min.z,i.distanceToPoint(Rr)<0)return!1}return!0}containsPoint(A){const e=this.planes;for(let t=0;t<6;t++)if(e[t].distanceToPoint(A)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zu(){let n=null,A=!1,e=null,t=null;function i(r,s){e(r,s),t=n.requestAnimationFrame(i)}return{start:function(){A!==!0&&e!==null&&(t=n.requestAnimationFrame(i),A=!0)},stop:function(){n.cancelAnimationFrame(t),A=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function ep(n,A){const e=A.isWebGL2,t=new WeakMap;function i(l,c){const u=l.array,h=l.usage,p=n.createBuffer();n.bindBuffer(c,p),n.bufferData(c,u,h),l.onUploadCallback();let g;if(u instanceof Float32Array)g=n.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=n.SHORT;else if(u instanceof Uint32Array)g=n.UNSIGNED_INT;else if(u instanceof Int32Array)g=n.INT;else if(u instanceof Int8Array)g=n.BYTE;else if(u instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version}}function r(l,c,u){const h=c.array,p=c.updateRange;n.bindBuffer(u,l),p.count===-1?n.bufferSubData(u,0,h):(e?n.bufferSubData(u,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):n.bufferSubData(u,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=t.get(l);c&&(n.deleteBuffer(c.buffer),t.delete(l))}function o(l,c){if(l.isGLBufferAttribute){const h=t.get(l);(!h||h.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=t.get(l);u===void 0?t.set(l,i(l,c)):u.version<l.version&&(r(u.buffer,l,c),u.version=l.version)}return{get:s,remove:a,update:o}}class To extends nn{constructor(A=1,e=1,t=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:A,height:e,widthSegments:t,heightSegments:i};const r=A/2,s=e/2,a=Math.floor(t),o=Math.floor(i),l=a+1,c=o+1,u=A/a,h=e/o,p=[],g=[],m=[],d=[];for(let f=0;f<c;f++){const C=f*h-s;for(let v=0;v<l;v++){const _=v*u-r;g.push(_,-C,0),m.push(0,0,1),d.push(v/a),d.push(1-f/o)}}for(let f=0;f<o;f++)for(let C=0;C<a;C++){const v=C+l*f,_=C+l*(f+1),E=C+1+l*(f+1),y=C+1+l*f;p.push(v,_,y),p.push(_,E,y)}this.setIndex(p),this.setAttribute("position",new ot(g,3)),this.setAttribute("normal",new ot(m,3)),this.setAttribute("uv",new ot(d,2))}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new To(A.width,A.height,A.widthSegments,A.heightSegments)}}var tp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,np=`#ifdef USE_ALPHAHASH
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
#endif`,ip=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ap=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,op=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,up=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fp=`#ifdef USE_IRIDESCENCE
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
#endif`,dp=`#ifdef USE_BUMPMAP
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
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_p=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Cp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ep=`#define PI 3.141592653589793
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
} // validated`,xp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Up=`vec3 transformedNormal = objectNormal;
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
#endif`,yp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tp=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qp=`#ifdef USE_ENVMAP
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
#endif`,Ip=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lp=`#ifdef USE_ENVMAP
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
#endif`,Rp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hp=`#ifdef USE_ENVMAP
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
#endif`,Dp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Op=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Np=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gp=`#ifdef USE_GRADIENTMAP
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
}`,Vp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Kp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wp=`uniform bool receiveShadow;
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
#endif`,Xp=`#ifdef USE_ENVMAP
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
#endif`,Yp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jp=`PhysicalMaterial material;
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
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,$p=`struct PhysicalMaterial {
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
}`,Ag=`
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
#endif`,eg=`#if defined( RE_IndirectDiffuse )
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
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,ng=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ig=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,sg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ag=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,og=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cg=`#if defined( USE_POINTS_UV )
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
#endif`,ug=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dg=`#ifdef USE_MORPHNORMALS
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
#endif`,pg=`#ifdef USE_MORPHTARGETS
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
#endif`,gg=`#ifdef USE_MORPHTARGETS
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
#endif`,mg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Bg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_g=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cg=`#ifdef USE_NORMALMAP
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
#endif`,Eg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,xg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ug=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ig=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Pg=`float getShadowMask() {
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
}`,Og=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ng=`#ifdef USE_SKINNING
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
#endif`,Gg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vg=`#ifdef USE_SKINNING
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
#endif`,Kg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xg=`#ifdef USE_TRANSMISSION
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
#endif`,Yg=`#ifdef USE_TRANSMISSION
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
#endif`,Jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $g=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,A0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,n0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r0=`#include <common>
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
}`,s0=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
}`,a0=`#define DISTANCE
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
}`,o0=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,l0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,c0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u0=`uniform float scale;
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
}`,h0=`uniform vec3 diffuse;
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,f0=`#include <common>
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
}`,d0=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,p0=`#define LAMBERT
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
}`,g0=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,m0=`#define MATCAP
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
}`,B0=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,w0=`#define NORMAL
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
}`,v0=`#define NORMAL
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
}`,_0=`#define PHONG
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
}`,C0=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,E0=`#define STANDARD
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
}`,x0=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U0=`#define TOON
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
}`,y0=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,S0=`uniform float size;
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
}`,M0=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,F0=`#include <common>
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
}`,b0=`uniform vec3 color;
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
}`,T0=`uniform float rotation;
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
}`,Q0=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,IA={alphahash_fragment:tp,alphahash_pars_fragment:np,alphamap_fragment:ip,alphamap_pars_fragment:rp,alphatest_fragment:sp,alphatest_pars_fragment:ap,aomap_fragment:op,aomap_pars_fragment:lp,begin_vertex:cp,beginnormal_vertex:up,bsdfs:hp,iridescence_fragment:fp,bumpmap_pars_fragment:dp,clipping_planes_fragment:pp,clipping_planes_pars_fragment:gp,clipping_planes_pars_vertex:mp,clipping_planes_vertex:Bp,color_fragment:wp,color_pars_fragment:vp,color_pars_vertex:_p,color_vertex:Cp,common:Ep,cube_uv_reflection_fragment:xp,defaultnormal_vertex:Up,displacementmap_pars_vertex:yp,displacementmap_vertex:Sp,emissivemap_fragment:Mp,emissivemap_pars_fragment:Fp,colorspace_fragment:bp,colorspace_pars_fragment:Tp,envmap_fragment:Qp,envmap_common_pars_fragment:Ip,envmap_pars_fragment:Lp,envmap_pars_vertex:Rp,envmap_physical_pars_fragment:Xp,envmap_vertex:Hp,fog_vertex:Dp,fog_pars_vertex:Pp,fog_fragment:Op,fog_pars_fragment:Np,gradientmap_pars_fragment:Gp,lightmap_fragment:Vp,lightmap_pars_fragment:Kp,lights_lambert_fragment:kp,lights_lambert_pars_fragment:zp,lights_pars_begin:Wp,lights_toon_fragment:Yp,lights_toon_pars_fragment:Jp,lights_phong_fragment:Zp,lights_phong_pars_fragment:qp,lights_physical_fragment:jp,lights_physical_pars_fragment:$p,lights_fragment_begin:Ag,lights_fragment_maps:eg,lights_fragment_end:tg,logdepthbuf_fragment:ng,logdepthbuf_pars_fragment:ig,logdepthbuf_pars_vertex:rg,logdepthbuf_vertex:sg,map_fragment:ag,map_pars_fragment:og,map_particle_fragment:lg,map_particle_pars_fragment:cg,metalnessmap_fragment:ug,metalnessmap_pars_fragment:hg,morphcolor_vertex:fg,morphnormal_vertex:dg,morphtarget_pars_vertex:pg,morphtarget_vertex:gg,normal_fragment_begin:mg,normal_fragment_maps:Bg,normal_pars_fragment:wg,normal_pars_vertex:vg,normal_vertex:_g,normalmap_pars_fragment:Cg,clearcoat_normal_fragment_begin:Eg,clearcoat_normal_fragment_maps:xg,clearcoat_pars_fragment:Ug,iridescence_pars_fragment:yg,opaque_fragment:Sg,packing:Mg,premultiplied_alpha_fragment:Fg,project_vertex:bg,dithering_fragment:Tg,dithering_pars_fragment:Qg,roughnessmap_fragment:Ig,roughnessmap_pars_fragment:Lg,shadowmap_pars_fragment:Rg,shadowmap_pars_vertex:Hg,shadowmap_vertex:Dg,shadowmask_pars_fragment:Pg,skinbase_vertex:Og,skinning_pars_vertex:Ng,skinning_vertex:Gg,skinnormal_vertex:Vg,specularmap_fragment:Kg,specularmap_pars_fragment:kg,tonemapping_fragment:zg,tonemapping_pars_fragment:Wg,transmission_fragment:Xg,transmission_pars_fragment:Yg,uv_pars_fragment:Jg,uv_pars_vertex:Zg,uv_vertex:qg,worldpos_vertex:jg,background_vert:$g,background_frag:A0,backgroundCube_vert:e0,backgroundCube_frag:t0,cube_vert:n0,cube_frag:i0,depth_vert:r0,depth_frag:s0,distanceRGBA_vert:a0,distanceRGBA_frag:o0,equirect_vert:l0,equirect_frag:c0,linedashed_vert:u0,linedashed_frag:h0,meshbasic_vert:f0,meshbasic_frag:d0,meshlambert_vert:p0,meshlambert_frag:g0,meshmatcap_vert:m0,meshmatcap_frag:B0,meshnormal_vert:w0,meshnormal_frag:v0,meshphong_vert:_0,meshphong_frag:C0,meshphysical_vert:E0,meshphysical_frag:x0,meshtoon_vert:U0,meshtoon_frag:y0,points_vert:S0,points_frag:M0,shadow_vert:F0,shadow_frag:b0,sprite_vert:T0,sprite_frag:Q0},lA={common:{diffuse:{value:new YA(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new PA},alphaMap:{value:null},alphaMapTransform:{value:new PA},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new PA}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new PA}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new PA}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new PA},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new PA},normalScale:{value:new RA(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new PA},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new PA}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new PA}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new PA}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new YA(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new YA(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new PA},alphaTest:{value:0},uvTransform:{value:new PA}},sprite:{diffuse:{value:new YA(16777215)},opacity:{value:1},center:{value:new RA(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new PA},alphaMap:{value:null},alphaMapTransform:{value:new PA},alphaTest:{value:0}}},ft={basic:{uniforms:Ie([lA.common,lA.specularmap,lA.envmap,lA.aomap,lA.lightmap,lA.fog]),vertexShader:IA.meshbasic_vert,fragmentShader:IA.meshbasic_frag},lambert:{uniforms:Ie([lA.common,lA.specularmap,lA.envmap,lA.aomap,lA.lightmap,lA.emissivemap,lA.bumpmap,lA.normalmap,lA.displacementmap,lA.fog,lA.lights,{emissive:{value:new YA(0)}}]),vertexShader:IA.meshlambert_vert,fragmentShader:IA.meshlambert_frag},phong:{uniforms:Ie([lA.common,lA.specularmap,lA.envmap,lA.aomap,lA.lightmap,lA.emissivemap,lA.bumpmap,lA.normalmap,lA.displacementmap,lA.fog,lA.lights,{emissive:{value:new YA(0)},specular:{value:new YA(1118481)},shininess:{value:30}}]),vertexShader:IA.meshphong_vert,fragmentShader:IA.meshphong_frag},standard:{uniforms:Ie([lA.common,lA.envmap,lA.aomap,lA.lightmap,lA.emissivemap,lA.bumpmap,lA.normalmap,lA.displacementmap,lA.roughnessmap,lA.metalnessmap,lA.fog,lA.lights,{emissive:{value:new YA(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:IA.meshphysical_vert,fragmentShader:IA.meshphysical_frag},toon:{uniforms:Ie([lA.common,lA.aomap,lA.lightmap,lA.emissivemap,lA.bumpmap,lA.normalmap,lA.displacementmap,lA.gradientmap,lA.fog,lA.lights,{emissive:{value:new YA(0)}}]),vertexShader:IA.meshtoon_vert,fragmentShader:IA.meshtoon_frag},matcap:{uniforms:Ie([lA.common,lA.bumpmap,lA.normalmap,lA.displacementmap,lA.fog,{matcap:{value:null}}]),vertexShader:IA.meshmatcap_vert,fragmentShader:IA.meshmatcap_frag},points:{uniforms:Ie([lA.points,lA.fog]),vertexShader:IA.points_vert,fragmentShader:IA.points_frag},dashed:{uniforms:Ie([lA.common,lA.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:IA.linedashed_vert,fragmentShader:IA.linedashed_frag},depth:{uniforms:Ie([lA.common,lA.displacementmap]),vertexShader:IA.depth_vert,fragmentShader:IA.depth_frag},normal:{uniforms:Ie([lA.common,lA.bumpmap,lA.normalmap,lA.displacementmap,{opacity:{value:1}}]),vertexShader:IA.meshnormal_vert,fragmentShader:IA.meshnormal_frag},sprite:{uniforms:Ie([lA.sprite,lA.fog]),vertexShader:IA.sprite_vert,fragmentShader:IA.sprite_frag},background:{uniforms:{uvTransform:{value:new PA},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:IA.background_vert,fragmentShader:IA.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:IA.backgroundCube_vert,fragmentShader:IA.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:IA.cube_vert,fragmentShader:IA.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:IA.equirect_vert,fragmentShader:IA.equirect_frag},distanceRGBA:{uniforms:Ie([lA.common,lA.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:IA.distanceRGBA_vert,fragmentShader:IA.distanceRGBA_frag},shadow:{uniforms:Ie([lA.lights,lA.fog,{color:{value:new YA(0)},opacity:{value:1}}]),vertexShader:IA.shadow_vert,fragmentShader:IA.shadow_frag}};ft.physical={uniforms:Ie([ft.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new PA},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new PA},clearcoatNormalScale:{value:new RA(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new PA},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new PA},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new PA},sheen:{value:0},sheenColor:{value:new YA(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new PA},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new PA},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new PA},transmissionSamplerSize:{value:new RA},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new PA},attenuationDistance:{value:0},attenuationColor:{value:new YA(0)},specularColor:{value:new YA(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new PA},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new PA},anisotropyVector:{value:new RA},anisotropyMap:{value:null},anisotropyMapTransform:{value:new PA}}]),vertexShader:IA.meshphysical_vert,fragmentShader:IA.meshphysical_frag};const Hr={r:0,b:0,g:0};function I0(n,A,e,t,i,r,s){const a=new YA(0);let o=r===!0?0:1,l,c,u=null,h=0,p=null;function g(d,f){let C=!1,v=f.isScene===!0?f.background:null;switch(v&&v.isTexture&&(v=(f.backgroundBlurriness>0?e:A).get(v)),v===null?m(a,o):v&&v.isColor&&(m(v,1),C=!0),n.xr.getEnvironmentBlendMode()){case"opaque":C=!0;break;case"additive":t.buffers.color.setClear(0,0,0,1,s),C=!0;break;case"alpha-blend":t.buffers.color.setClear(0,0,0,0,s),C=!0;break}(n.autoClear||C)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Fs)?(c===void 0&&(c=new Qt(new fr(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:mi(ft.backgroundCube.uniforms),vertexShader:ft.backgroundCube.vertexShader,fragmentShader:ft.backgroundCube.fragmentShader,side:Pe,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,U,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=v.colorSpace!==LA,(u!==v||h!==v.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,h=v.version,p=n.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Qt(new To(2,2),new Sn({name:"BackgroundMaterial",uniforms:mi(ft.background.uniforms),vertexShader:ft.background.vertexShader,fragmentShader:ft.background.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=v.colorSpace!==LA,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,u=v,h=v.version,p=n.toneMapping),l.layers.enableAll(),d.unshift(l,l.geometry,l.material,0,0,null))}function m(d,f){d.getRGB(Hr,Gu(n)),t.buffers.color.setClear(Hr.r,Hr.g,Hr.b,f,s)}return{getClearColor:function(){return a},setClearColor:function(d,f=1){a.set(d),o=f,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(d){o=d,m(a,o)},render:g}}function L0(n,A,e,t){const i=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=t.isWebGL2?null:A.get("OES_vertex_array_object"),s=t.isWebGL2||r!==null,a={},o=d(null);let l=o,c=!1;function u(O,V,Z,k,X){let $=!1;if(s){const J=m(k,Z,V);l!==J&&(l=J,p(l.object)),$=f(O,k,Z,X),$&&C(O,k,Z,X)}else{const J=V.wireframe===!0;(l.geometry!==k.id||l.program!==Z.id||l.wireframe!==J)&&(l.geometry=k.id,l.program=Z.id,l.wireframe=J,$=!0)}X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),($||c)&&(c=!1,L(O,V,Z,k),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function h(){return t.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function p(O){return t.isWebGL2?n.bindVertexArray(O):r.bindVertexArrayOES(O)}function g(O){return t.isWebGL2?n.deleteVertexArray(O):r.deleteVertexArrayOES(O)}function m(O,V,Z){const k=Z.wireframe===!0;let X=a[O.id];X===void 0&&(X={},a[O.id]=X);let $=X[V.id];$===void 0&&($={},X[V.id]=$);let J=$[k];return J===void 0&&(J=d(h()),$[k]=J),J}function d(O){const V=[],Z=[],k=[];for(let X=0;X<i;X++)V[X]=0,Z[X]=0,k[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:Z,attributeDivisors:k,object:O,attributes:{},index:null}}function f(O,V,Z,k){const X=l.attributes,$=V.attributes;let J=0;const D=Z.getAttributes();for(const K in D)if(D[K].location>=0){const sA=X[K];let oA=$[K];if(oA===void 0&&(K==="instanceMatrix"&&O.instanceMatrix&&(oA=O.instanceMatrix),K==="instanceColor"&&O.instanceColor&&(oA=O.instanceColor)),sA===void 0||sA.attribute!==oA||oA&&sA.data!==oA.data)return!0;J++}return l.attributesNum!==J||l.index!==k}function C(O,V,Z,k){const X={},$=V.attributes;let J=0;const D=Z.getAttributes();for(const K in D)if(D[K].location>=0){let sA=$[K];sA===void 0&&(K==="instanceMatrix"&&O.instanceMatrix&&(sA=O.instanceMatrix),K==="instanceColor"&&O.instanceColor&&(sA=O.instanceColor));const oA={};oA.attribute=sA,sA&&sA.data&&(oA.data=sA.data),X[K]=oA,J++}l.attributes=X,l.attributesNum=J,l.index=k}function v(){const O=l.newAttributes;for(let V=0,Z=O.length;V<Z;V++)O[V]=0}function _(O){E(O,0)}function E(O,V){const Z=l.newAttributes,k=l.enabledAttributes,X=l.attributeDivisors;Z[O]=1,k[O]===0&&(n.enableVertexAttribArray(O),k[O]=1),X[O]!==V&&((t.isWebGL2?n:A.get("ANGLE_instanced_arrays"))[t.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,V),X[O]=V)}function y(){const O=l.newAttributes,V=l.enabledAttributes;for(let Z=0,k=V.length;Z<k;Z++)V[Z]!==O[Z]&&(n.disableVertexAttribArray(Z),V[Z]=0)}function U(O,V,Z,k,X,$,J){J===!0?n.vertexAttribIPointer(O,V,Z,X,$):n.vertexAttribPointer(O,V,Z,k,X,$)}function L(O,V,Z,k){if(t.isWebGL2===!1&&(O.isInstancedMesh||k.isInstancedBufferGeometry)&&A.get("ANGLE_instanced_arrays")===null)return;v();const X=k.attributes,$=Z.getAttributes(),J=V.defaultAttributeValues;for(const D in $){const K=$[D];if(K.location>=0){let rA=X[D];if(rA===void 0&&(D==="instanceMatrix"&&O.instanceMatrix&&(rA=O.instanceMatrix),D==="instanceColor"&&O.instanceColor&&(rA=O.instanceColor)),rA!==void 0){const sA=rA.normalized,oA=rA.itemSize,mA=e.get(rA);if(mA===void 0)continue;const wA=mA.buffer,vA=mA.type,kA=mA.bytesPerElement,ve=t.isWebGL2===!0&&(vA===n.INT||vA===n.UNSIGNED_INT||rA.gpuType===xu);if(rA.isInterleavedBufferAttribute){const TA=rA.data,H=TA.stride,le=rA.offset;if(TA.isInstancedInterleavedBuffer){for(let _A=0;_A<K.locationSize;_A++)E(K.location+_A,TA.meshPerAttribute);O.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=TA.meshPerAttribute*TA.count)}else for(let _A=0;_A<K.locationSize;_A++)_(K.location+_A);n.bindBuffer(n.ARRAY_BUFFER,wA);for(let _A=0;_A<K.locationSize;_A++)U(K.location+_A,oA/K.locationSize,vA,sA,H*kA,(le+oA/K.locationSize*_A)*kA,ve)}else{if(rA.isInstancedBufferAttribute){for(let TA=0;TA<K.locationSize;TA++)E(K.location+TA,rA.meshPerAttribute);O.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=rA.meshPerAttribute*rA.count)}else for(let TA=0;TA<K.locationSize;TA++)_(K.location+TA);n.bindBuffer(n.ARRAY_BUFFER,wA);for(let TA=0;TA<K.locationSize;TA++)U(K.location+TA,oA/K.locationSize,vA,sA,oA*kA,oA/K.locationSize*TA*kA,ve)}}else if(J!==void 0){const sA=J[D];if(sA!==void 0)switch(sA.length){case 2:n.vertexAttrib2fv(K.location,sA);break;case 3:n.vertexAttrib3fv(K.location,sA);break;case 4:n.vertexAttrib4fv(K.location,sA);break;default:n.vertexAttrib1fv(K.location,sA)}}}}y()}function B(){q();for(const O in a){const V=a[O];for(const Z in V){const k=V[Z];for(const X in k)g(k[X].object),delete k[X];delete V[Z]}delete a[O]}}function S(O){if(a[O.id]===void 0)return;const V=a[O.id];for(const Z in V){const k=V[Z];for(const X in k)g(k[X].object),delete k[X];delete V[Z]}delete a[O.id]}function Y(O){for(const V in a){const Z=a[V];if(Z[O.id]===void 0)continue;const k=Z[O.id];for(const X in k)g(k[X].object),delete k[X];delete Z[O.id]}}function q(){T(),c=!0,l!==o&&(l=o,p(l.object))}function T(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:u,reset:q,resetDefaultState:T,dispose:B,releaseStatesOfGeometry:S,releaseStatesOfProgram:Y,initAttributes:v,enableAttribute:_,disableUnusedAttributes:y}}function R0(n,A,e,t){const i=t.isWebGL2;let r;function s(l){r=l}function a(l,c){n.drawArrays(r,l,c),e.update(c,r,1)}function o(l,c,u){if(u===0)return;let h,p;if(i)h=n,p="drawArraysInstanced";else if(h=A.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](r,l,c,u),e.update(c,r,u)}this.setMode=s,this.render=a,this.renderInstances=o}function H0(n,A,e){let t;function i(){if(t!==void 0)return t;if(A.has("EXT_texture_filter_anisotropic")===!0){const U=A.get("EXT_texture_filter_anisotropic");t=n.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else t=0;return t}function r(U){if(U==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const o=r(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);const l=s||A.has("WEBGL_draw_buffers"),c=e.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),d=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),C=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,_=s||A.has("OES_texture_float"),E=v&&_,y=s?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:c,maxTextures:u,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:d,maxVaryings:f,maxFragmentUniforms:C,vertexTextures:v,floatFragmentTextures:_,floatVertexTextures:E,maxSamples:y}}function D0(n){const A=this;let e=null,t=0,i=!1,r=!1;const s=new Vt,a=new PA,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const p=u.length!==0||h||t!==0||i;return i=h,t=u.length,p},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,h){e=c(u,h,0)},this.setState=function(u,h,p){const g=u.clippingPlanes,m=u.clipIntersection,d=u.clipShadows,f=n.get(u);if(!i||g===null||g.length===0||r&&!d)r?c(null):l();else{const C=r?0:t,v=C*4;let _=f.clippingState||null;o.value=_,_=c(g,h,v,p);for(let E=0;E!==v;++E)_[E]=e[E];f.clippingState=_,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=C}};function l(){o.value!==e&&(o.value=e,o.needsUpdate=t>0),A.numPlanes=t,A.numIntersection=0}function c(u,h,p,g){const m=u!==null?u.length:0;let d=null;if(m!==0){if(d=o.value,g!==!0||d===null){const f=p+m*4,C=h.matrixWorldInverse;a.getNormalMatrix(C),(d===null||d.length<f)&&(d=new Float32Array(f));for(let v=0,_=p;v!==m;++v,_+=4)s.copy(u[v]).applyMatrix4(C,a),s.normal.toArray(d,_),d[_+3]=s.constant}o.value=d,o.needsUpdate=!0}return A.numPlanes=m,A.numIntersection=0,d}}function P0(n){let A=new WeakMap;function e(s,a){return a===Xa?s.mapping=di:a===Ya&&(s.mapping=pi),s}function t(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const a=s.mapping;if(a===Xa||a===Ya)if(A.has(s)){const o=A.get(s).texture;return e(o,s.mapping)}else{const o=s.image;if(o&&o.height>0){const l=new jd(o.height/2);return l.fromEquirectangularTexture(n,s),A.set(s,l),s.addEventListener("dispose",i),e(l.texture,s.mapping)}else return null}}return s}function i(s){const a=s.target;a.removeEventListener("dispose",i);const o=A.get(a);o!==void 0&&(A.delete(a),o.dispose())}function r(){A=new WeakMap}return{get:t,dispose:r}}class O0 extends Vu{constructor(A=-1,e=1,t=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=A,this.right=e,this.top=t,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(A,e){return super.copy(A,e),this.left=A.left,this.right=A.right,this.top=A.top,this.bottom=A.bottom,this.near=A.near,this.far=A.far,this.zoom=A.zoom,this.view=A.view===null?null:Object.assign({},A.view),this}setViewOffset(A,e,t,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=e,this.view.offsetX=t,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),t=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=t-A,s=t+A,a=i+e,o=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,s=r+l*this.view.width,a-=c*this.view.offsetY,o=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const e=super.toJSON(A);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ii=4,zl=[.125,.215,.35,.446,.526,.582],fn=20,Ba=new O0,Wl=new YA;let wa=null;const hn=(1+Math.sqrt(5))/2,Wn=1/hn,Xl=[new Q(1,1,1),new Q(-1,1,1),new Q(1,1,-1),new Q(-1,1,-1),new Q(0,hn,Wn),new Q(0,hn,-Wn),new Q(Wn,0,hn),new Q(-Wn,0,hn),new Q(hn,Wn,0),new Q(-hn,Wn,0)];class Yl{constructor(A){this._renderer=A,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(A,e=0,t=.1,i=100){wa=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(A,t,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(A,e=null){return this._fromTexture(A,e)}fromCubemap(A,e=null){return this._fromTexture(A,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ql(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(A){this._lodMax=Math.floor(Math.log2(A)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let A=0;A<this._lodPlanes.length;A++)this._lodPlanes[A].dispose()}_cleanup(A){this._renderer.setRenderTarget(wa),A.scissorTest=!1,Dr(A,0,0,A.width,A.height)}_fromTexture(A,e){A.mapping===di||A.mapping===pi?this._setSize(A.image.length===0?16:A.image[0].width||A.image[0].image.width):this._setSize(A.image.width/4),wa=this._renderer.getRenderTarget();const t=e||this._allocateTargets();return this._textureToCubeUV(A,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(){const A=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,t={magFilter:Je,minFilter:Je,generateMipmaps:!1,type:er,format:at,colorSpace:pt,depthBuffer:!1},i=Jl(A,e,t);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==A||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jl(A,e,t);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=N0(r)),this._blurMaterial=G0(r,A,e)}return i}_compileMaterial(A){const e=new Qt(this._lodPlanes[0],A);this._renderer.compile(e,Ba)}_sceneToCubeUV(A,e,t,i){const a=new Ze(90,1,e,t),o=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,u=c.autoClear,h=c.toneMapping;c.getClearColor(Wl),c.toneMapping=qt,c.autoClear=!1;const p=new bo({name:"PMREM.Background",side:Pe,depthWrite:!1,depthTest:!1}),g=new Qt(new fr,p);let m=!1;const d=A.background;d?d.isColor&&(p.color.copy(d),A.background=null,m=!0):(p.color.copy(Wl),m=!0);for(let f=0;f<6;f++){const C=f%3;C===0?(a.up.set(0,o[f],0),a.lookAt(l[f],0,0)):C===1?(a.up.set(0,0,o[f]),a.lookAt(0,l[f],0)):(a.up.set(0,o[f],0),a.lookAt(0,0,l[f]));const v=this._cubeSize;Dr(i,C*v,f>2?v:0,v,v),c.setRenderTarget(i),m&&c.render(g,a),c.render(A,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=h,c.autoClear=u,A.background=d}_textureToCubeUV(A,e){const t=this._renderer,i=A.mapping===di||A.mapping===pi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ql()),this._cubemapMaterial.uniforms.flipEnvMap.value=A.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zl());const r=i?this._cubemapMaterial:this._equirectMaterial,s=new Qt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=A;const o=this._cubeSize;Dr(e,0,0,3*o,2*o),t.setRenderTarget(e),t.render(s,Ba)}_applyPMREM(A){const e=this._renderer,t=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),s=Xl[(i-1)%Xl.length];this._blur(A,i-1,i,r,s)}e.autoClear=t}_blur(A,e,t,i,r){const s=this._pingPongRenderTarget;this._halfBlur(A,s,e,t,i,"latitudinal",r),this._halfBlur(s,A,t,t,i,"longitudinal",r)}_halfBlur(A,e,t,i,r,s,a){const o=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,u=new Qt(this._lodPlanes[i],l),h=l.uniforms,p=this._sizeLods[t]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*fn-1),m=r/g,d=isFinite(r)?1+Math.floor(c*m):fn;d>fn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${fn}`);const f=[];let C=0;for(let U=0;U<fn;++U){const L=U/m,B=Math.exp(-L*L/2);f.push(B),U===0?C+=B:U<d&&(C+=2*B)}for(let U=0;U<f.length;U++)f[U]=f[U]/C;h.envMap.value=A.texture,h.samples.value=d,h.weights.value=f,h.latitudinal.value=s==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-t;const _=this._sizeLods[i],E=3*_*(i>v-ii?i-v+ii:0),y=4*(this._cubeSize-_);Dr(e,E,y,3*_,2*_),o.setRenderTarget(e),o.render(u,Ba)}}function N0(n){const A=[],e=[],t=[];let i=n;const r=n-ii+1+zl.length;for(let s=0;s<r;s++){const a=Math.pow(2,i);e.push(a);let o=1/a;s>n-ii?o=zl[s-n+ii-1]:s===0&&(o=0),t.push(o);const l=1/(a-2),c=-l,u=1+l,h=[c,c,u,c,u,u,c,c,u,u,c,u],p=6,g=6,m=3,d=2,f=1,C=new Float32Array(m*g*p),v=new Float32Array(d*g*p),_=new Float32Array(f*g*p);for(let y=0;y<p;y++){const U=y%3*2/3-1,L=y>2?0:-1,B=[U,L,0,U+2/3,L,0,U+2/3,L+1,0,U,L,0,U+2/3,L+1,0,U,L+1,0];C.set(B,m*g*y),v.set(h,d*g*y);const S=[y,y,y,y,y,y];_.set(S,f*g*y)}const E=new nn;E.setAttribute("position",new lt(C,m)),E.setAttribute("uv",new lt(v,d)),E.setAttribute("faceIndex",new lt(_,f)),A.push(E),i>ii&&i--}return{lodPlanes:A,sizeLods:e,sigmas:t}}function Jl(n,A,e){const t=new Un(n,A,e);return t.texture.mapping=Fs,t.texture.name="PMREM.cubeUv",t.scissorTest=!0,t}function Dr(n,A,e,t,i){n.viewport.set(A,e,t,i),n.scissor.set(A,e,t,i)}function G0(n,A,e){const t=new Float32Array(fn),i=new Q(0,1,0);return new Sn({name:"SphericalGaussianBlur",defines:{n:fn,CUBEUV_TEXEL_WIDTH:1/A,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:t},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Qo(),fragmentShader:`

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
		`,blending:Zt,depthTest:!1,depthWrite:!1})}function Zl(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qo(),fragmentShader:`

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
		`,blending:Zt,depthTest:!1,depthWrite:!1})}function ql(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zt,depthTest:!1,depthWrite:!1})}function Qo(){return`

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
	`}function V0(n){let A=new WeakMap,e=null;function t(a){if(a&&a.isTexture){const o=a.mapping,l=o===Xa||o===Ya,c=o===di||o===pi;if(l||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=A.get(a);return e===null&&(e=new Yl(n)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),A.set(a,u),u.texture}else{if(A.has(a))return A.get(a).texture;{const u=a.image;if(l&&u&&u.height>0||c&&u&&i(u)){e===null&&(e=new Yl(n));const h=l?e.fromEquirectangular(a):e.fromCubemap(a);return A.set(a,h),a.addEventListener("dispose",r),h.texture}else return null}}}return a}function i(a){let o=0;const l=6;for(let c=0;c<l;c++)a[c]!==void 0&&o++;return o===l}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=A.get(o);l!==void 0&&(A.delete(o),l.dispose())}function s(){A=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:t,dispose:s}}function K0(n){const A={};function e(t){if(A[t]!==void 0)return A[t];let i;switch(t){case"WEBGL_depth_texture":i=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=n.getExtension(t)}return A[t]=i,i}return{has:function(t){return e(t)!==null},init:function(t){t.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(t){const i=e(t);return i===null&&console.warn("THREE.WebGLRenderer: "+t+" extension not supported."),i}}}function k0(n,A,e,t){const i={},r=new WeakMap;function s(u){const h=u.target;h.index!==null&&A.remove(h.index);for(const g in h.attributes)A.remove(h.attributes[g]);for(const g in h.morphAttributes){const m=h.morphAttributes[g];for(let d=0,f=m.length;d<f;d++)A.remove(m[d])}h.removeEventListener("dispose",s),delete i[h.id];const p=r.get(h);p&&(A.remove(p),r.delete(h)),t.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(u,h){return i[h.id]===!0||(h.addEventListener("dispose",s),i[h.id]=!0,e.memory.geometries++),h}function o(u){const h=u.attributes;for(const g in h)A.update(h[g],n.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const m=p[g];for(let d=0,f=m.length;d<f;d++)A.update(m[d],n.ARRAY_BUFFER)}}function l(u){const h=[],p=u.index,g=u.attributes.position;let m=0;if(p!==null){const C=p.array;m=p.version;for(let v=0,_=C.length;v<_;v+=3){const E=C[v+0],y=C[v+1],U=C[v+2];h.push(E,y,y,U,U,E)}}else if(g!==void 0){const C=g.array;m=g.version;for(let v=0,_=C.length/3-1;v<_;v+=3){const E=v+0,y=v+1,U=v+2;h.push(E,y,y,U,U,E)}}else return;const d=new(Qu(h)?Nu:Ou)(h,1);d.version=m;const f=r.get(u);f&&A.remove(f),r.set(u,d)}function c(u){const h=r.get(u);if(h){const p=u.index;p!==null&&h.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:o,getWireframeAttribute:c}}function z0(n,A,e,t){const i=t.isWebGL2;let r;function s(h){r=h}let a,o;function l(h){a=h.type,o=h.bytesPerElement}function c(h,p){n.drawElements(r,p,a,h*o),e.update(p,r,1)}function u(h,p,g){if(g===0)return;let m,d;if(i)m=n,d="drawElementsInstanced";else if(m=A.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](r,p,a,h*o,g),e.update(p,r,g)}this.setMode=s,this.setIndex=l,this.render=c,this.renderInstances=u}function W0(n){const A={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function t(r,s,a){switch(e.calls++,s){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:A,render:e,programs:null,autoReset:!0,reset:i,update:t}}function X0(n,A){return n[0]-A[0]}function Y0(n,A){return Math.abs(A[1])-Math.abs(n[1])}function J0(n,A,e){const t={},i=new Float32Array(8),r=new WeakMap,s=new Ee,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function o(l,c,u){const h=l.morphTargetInfluences;if(A.isWebGL2===!0){const g=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,m=g!==void 0?g.length:0;let d=r.get(c);if(d===void 0||d.count!==m){let V=function(){T.dispose(),r.delete(c),c.removeEventListener("dispose",V)};var p=V;d!==void 0&&d.texture.dispose();const v=c.morphAttributes.position!==void 0,_=c.morphAttributes.normal!==void 0,E=c.morphAttributes.color!==void 0,y=c.morphAttributes.position||[],U=c.morphAttributes.normal||[],L=c.morphAttributes.color||[];let B=0;v===!0&&(B=1),_===!0&&(B=2),E===!0&&(B=3);let S=c.attributes.position.count*B,Y=1;S>A.maxTextureSize&&(Y=Math.ceil(S/A.maxTextureSize),S=A.maxTextureSize);const q=new Float32Array(S*Y*4*m),T=new Ru(q,S,Y,m);T.type=Wt,T.needsUpdate=!0;const O=B*4;for(let Z=0;Z<m;Z++){const k=y[Z],X=U[Z],$=L[Z],J=S*Y*4*Z;for(let D=0;D<k.count;D++){const K=D*O;v===!0&&(s.fromBufferAttribute(k,D),q[J+K+0]=s.x,q[J+K+1]=s.y,q[J+K+2]=s.z,q[J+K+3]=0),_===!0&&(s.fromBufferAttribute(X,D),q[J+K+4]=s.x,q[J+K+5]=s.y,q[J+K+6]=s.z,q[J+K+7]=0),E===!0&&(s.fromBufferAttribute($,D),q[J+K+8]=s.x,q[J+K+9]=s.y,q[J+K+10]=s.z,q[J+K+11]=$.itemSize===4?s.w:1)}}d={count:m,texture:T,size:new RA(S,Y)},r.set(c,d),c.addEventListener("dispose",V)}let f=0;for(let v=0;v<h.length;v++)f+=h[v];const C=c.morphTargetsRelative?1:1-f;u.getUniforms().setValue(n,"morphTargetBaseInfluence",C),u.getUniforms().setValue(n,"morphTargetInfluences",h),u.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),u.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}else{const g=h===void 0?0:h.length;let m=t[c.id];if(m===void 0||m.length!==g){m=[];for(let _=0;_<g;_++)m[_]=[_,0];t[c.id]=m}for(let _=0;_<g;_++){const E=m[_];E[0]=_,E[1]=h[_]}m.sort(Y0);for(let _=0;_<8;_++)_<g&&m[_][1]?(a[_][0]=m[_][0],a[_][1]=m[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(X0);const d=c.morphAttributes.position,f=c.morphAttributes.normal;let C=0;for(let _=0;_<8;_++){const E=a[_],y=E[0],U=E[1];y!==Number.MAX_SAFE_INTEGER&&U?(d&&c.getAttribute("morphTarget"+_)!==d[y]&&c.setAttribute("morphTarget"+_,d[y]),f&&c.getAttribute("morphNormal"+_)!==f[y]&&c.setAttribute("morphNormal"+_,f[y]),i[_]=U,C+=U):(d&&c.hasAttribute("morphTarget"+_)===!0&&c.deleteAttribute("morphTarget"+_),f&&c.hasAttribute("morphNormal"+_)===!0&&c.deleteAttribute("morphNormal"+_),i[_]=0)}const v=c.morphTargetsRelative?1:1-C;u.getUniforms().setValue(n,"morphTargetBaseInfluence",v),u.getUniforms().setValue(n,"morphTargetInfluences",i)}}return{update:o}}function Z0(n,A,e,t){let i=new WeakMap;function r(o){const l=t.render.frame,c=o.geometry,u=A.get(o,c);if(i.get(u)!==l&&(A.update(u),i.set(u,l)),o.isInstancedMesh&&(o.hasEventListener("dispose",a)===!1&&o.addEventListener("dispose",a),i.get(o)!==l&&(e.update(o.instanceMatrix,n.ARRAY_BUFFER),o.instanceColor!==null&&e.update(o.instanceColor,n.ARRAY_BUFFER),i.set(o,l))),o.isSkinnedMesh){const h=o.skeleton;i.get(h)!==l&&(h.update(),i.set(h,l))}return u}function s(){i=new WeakMap}function a(o){const l=o.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:s}}const Wu=new Ke,Xu=new Ru,Yu=new Hd,Ju=new Ku,jl=[],$l=[],Ac=new Float32Array(16),ec=new Float32Array(9),tc=new Float32Array(4);function _i(n,A,e){const t=n[0];if(t<=0||t>0)return n;const i=A*e;let r=jl[i];if(r===void 0&&(r=new Float32Array(i),jl[i]=r),A!==0){t.toArray(r,0);for(let s=1,a=0;s!==A;++s)a+=e,n[s].toArray(r,a)}return r}function he(n,A){if(n.length!==A.length)return!1;for(let e=0,t=n.length;e<t;e++)if(n[e]!==A[e])return!1;return!0}function fe(n,A){for(let e=0,t=A.length;e<t;e++)n[e]=A[e]}function Qs(n,A){let e=$l[A];e===void 0&&(e=new Int32Array(A),$l[A]=e);for(let t=0;t!==A;++t)e[t]=n.allocateTextureUnit();return e}function q0(n,A){const e=this.cache;e[0]!==A&&(n.uniform1f(this.addr,A),e[0]=A)}function j0(n,A){const e=this.cache;if(A.x!==void 0)(e[0]!==A.x||e[1]!==A.y)&&(n.uniform2f(this.addr,A.x,A.y),e[0]=A.x,e[1]=A.y);else{if(he(e,A))return;n.uniform2fv(this.addr,A),fe(e,A)}}function $0(n,A){const e=this.cache;if(A.x!==void 0)(e[0]!==A.x||e[1]!==A.y||e[2]!==A.z)&&(n.uniform3f(this.addr,A.x,A.y,A.z),e[0]=A.x,e[1]=A.y,e[2]=A.z);else if(A.r!==void 0)(e[0]!==A.r||e[1]!==A.g||e[2]!==A.b)&&(n.uniform3f(this.addr,A.r,A.g,A.b),e[0]=A.r,e[1]=A.g,e[2]=A.b);else{if(he(e,A))return;n.uniform3fv(this.addr,A),fe(e,A)}}function Am(n,A){const e=this.cache;if(A.x!==void 0)(e[0]!==A.x||e[1]!==A.y||e[2]!==A.z||e[3]!==A.w)&&(n.uniform4f(this.addr,A.x,A.y,A.z,A.w),e[0]=A.x,e[1]=A.y,e[2]=A.z,e[3]=A.w);else{if(he(e,A))return;n.uniform4fv(this.addr,A),fe(e,A)}}function em(n,A){const e=this.cache,t=A.elements;if(t===void 0){if(he(e,A))return;n.uniformMatrix2fv(this.addr,!1,A),fe(e,A)}else{if(he(e,t))return;tc.set(t),n.uniformMatrix2fv(this.addr,!1,tc),fe(e,t)}}function tm(n,A){const e=this.cache,t=A.elements;if(t===void 0){if(he(e,A))return;n.uniformMatrix3fv(this.addr,!1,A),fe(e,A)}else{if(he(e,t))return;ec.set(t),n.uniformMatrix3fv(this.addr,!1,ec),fe(e,t)}}function nm(n,A){const e=this.cache,t=A.elements;if(t===void 0){if(he(e,A))return;n.uniformMatrix4fv(this.addr,!1,A),fe(e,A)}else{if(he(e,t))return;Ac.set(t),n.uniformMatrix4fv(this.addr,!1,Ac),fe(e,t)}}function im(n,A){const e=this.cache;e[0]!==A&&(n.uniform1i(this.addr,A),e[0]=A)}function rm(n,A){const e=this.cache;if(A.x!==void 0)(e[0]!==A.x||e[1]!==A.y)&&(n.uniform2i(this.addr,A.x,A.y),e[0]=A.x,e[1]=A.y);else{if(he(e,A))return;n.uniform2iv(this.addr,A),fe(e,A)}}function sm(n,A){const e=this.cache;if(A.x!==void 0)(e[0]!==A.x||e[1]!==A.y||e[2]!==A.z)&&(n.uniform3i(this.addr,A.x,A.y,A.z),e[0]=A.x,e[1]=A.y,e[2]=A.z);else{if(he(e,A))return;n.uniform3iv(this.addr,A),fe(e,A)}}function am(n,A){const e=this.cache;if(A.x!==void 0)(e[0]!==A.x||e[1]!==A.y||e[2]!==A.z||e[3]!==A.w)&&(n.uniform4i(this.addr,A.x,A.y,A.z,A.w),e[0]=A.x,e[1]=A.y,e[2]=A.z,e[3]=A.w);else{if(he(e,A))return;n.uniform4iv(this.addr,A),fe(e,A)}}function om(n,A){const e=this.cache;e[0]!==A&&(n.uniform1ui(this.addr,A),e[0]=A)}function lm(n,A){const e=this.cache;if(A.x!==void 0)(e[0]!==A.x||e[1]!==A.y)&&(n.uniform2ui(this.addr,A.x,A.y),e[0]=A.x,e[1]=A.y);else{if(he(e,A))return;n.uniform2uiv(this.addr,A),fe(e,A)}}function cm(n,A){const e=this.cache;if(A.x!==void 0)(e[0]!==A.x||e[1]!==A.y||e[2]!==A.z)&&(n.uniform3ui(this.addr,A.x,A.y,A.z),e[0]=A.x,e[1]=A.y,e[2]=A.z);else{if(he(e,A))return;n.uniform3uiv(this.addr,A),fe(e,A)}}function um(n,A){const e=this.cache;if(A.x!==void 0)(e[0]!==A.x||e[1]!==A.y||e[2]!==A.z||e[3]!==A.w)&&(n.uniform4ui(this.addr,A.x,A.y,A.z,A.w),e[0]=A.x,e[1]=A.y,e[2]=A.z,e[3]=A.w);else{if(he(e,A))return;n.uniform4uiv(this.addr,A),fe(e,A)}}function hm(n,A,e){const t=this.cache,i=e.allocateTextureUnit();t[0]!==i&&(n.uniform1i(this.addr,i),t[0]=i),e.setTexture2D(A||Wu,i)}function fm(n,A,e){const t=this.cache,i=e.allocateTextureUnit();t[0]!==i&&(n.uniform1i(this.addr,i),t[0]=i),e.setTexture3D(A||Yu,i)}function dm(n,A,e){const t=this.cache,i=e.allocateTextureUnit();t[0]!==i&&(n.uniform1i(this.addr,i),t[0]=i),e.setTextureCube(A||Ju,i)}function pm(n,A,e){const t=this.cache,i=e.allocateTextureUnit();t[0]!==i&&(n.uniform1i(this.addr,i),t[0]=i),e.setTexture2DArray(A||Xu,i)}function gm(n){switch(n){case 5126:return q0;case 35664:return j0;case 35665:return $0;case 35666:return Am;case 35674:return em;case 35675:return tm;case 35676:return nm;case 5124:case 35670:return im;case 35667:case 35671:return rm;case 35668:case 35672:return sm;case 35669:case 35673:return am;case 5125:return om;case 36294:return lm;case 36295:return cm;case 36296:return um;case 35678:case 36198:case 36298:case 36306:case 35682:return hm;case 35679:case 36299:case 36307:return fm;case 35680:case 36300:case 36308:case 36293:return dm;case 36289:case 36303:case 36311:case 36292:return pm}}function mm(n,A){n.uniform1fv(this.addr,A)}function Bm(n,A){const e=_i(A,this.size,2);n.uniform2fv(this.addr,e)}function wm(n,A){const e=_i(A,this.size,3);n.uniform3fv(this.addr,e)}function vm(n,A){const e=_i(A,this.size,4);n.uniform4fv(this.addr,e)}function _m(n,A){const e=_i(A,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Cm(n,A){const e=_i(A,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Em(n,A){const e=_i(A,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function xm(n,A){n.uniform1iv(this.addr,A)}function Um(n,A){n.uniform2iv(this.addr,A)}function ym(n,A){n.uniform3iv(this.addr,A)}function Sm(n,A){n.uniform4iv(this.addr,A)}function Mm(n,A){n.uniform1uiv(this.addr,A)}function Fm(n,A){n.uniform2uiv(this.addr,A)}function bm(n,A){n.uniform3uiv(this.addr,A)}function Tm(n,A){n.uniform4uiv(this.addr,A)}function Qm(n,A,e){const t=this.cache,i=A.length,r=Qs(e,i);he(t,r)||(n.uniform1iv(this.addr,r),fe(t,r));for(let s=0;s!==i;++s)e.setTexture2D(A[s]||Wu,r[s])}function Im(n,A,e){const t=this.cache,i=A.length,r=Qs(e,i);he(t,r)||(n.uniform1iv(this.addr,r),fe(t,r));for(let s=0;s!==i;++s)e.setTexture3D(A[s]||Yu,r[s])}function Lm(n,A,e){const t=this.cache,i=A.length,r=Qs(e,i);he(t,r)||(n.uniform1iv(this.addr,r),fe(t,r));for(let s=0;s!==i;++s)e.setTextureCube(A[s]||Ju,r[s])}function Rm(n,A,e){const t=this.cache,i=A.length,r=Qs(e,i);he(t,r)||(n.uniform1iv(this.addr,r),fe(t,r));for(let s=0;s!==i;++s)e.setTexture2DArray(A[s]||Xu,r[s])}function Hm(n){switch(n){case 5126:return mm;case 35664:return Bm;case 35665:return wm;case 35666:return vm;case 35674:return _m;case 35675:return Cm;case 35676:return Em;case 5124:case 35670:return xm;case 35667:case 35671:return Um;case 35668:case 35672:return ym;case 35669:case 35673:return Sm;case 5125:return Mm;case 36294:return Fm;case 36295:return bm;case 36296:return Tm;case 35678:case 36198:case 36298:case 36306:case 35682:return Qm;case 35679:case 36299:case 36307:return Im;case 35680:case 36300:case 36308:case 36293:return Lm;case 36289:case 36303:case 36311:case 36292:return Rm}}class Dm{constructor(A,e,t){this.id=A,this.addr=t,this.cache=[],this.setValue=gm(e.type)}}class Pm{constructor(A,e,t){this.id=A,this.addr=t,this.cache=[],this.size=e.size,this.setValue=Hm(e.type)}}class Om{constructor(A){this.id=A,this.seq=[],this.map={}}setValue(A,e,t){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const a=i[r];a.setValue(A,e[a.id],t)}}}const va=/(\w+)(\])?(\[|\.)?/g;function nc(n,A){n.seq.push(A),n.map[A.id]=A}function Nm(n,A,e){const t=n.name,i=t.length;for(va.lastIndex=0;;){const r=va.exec(t),s=va.lastIndex;let a=r[1];const o=r[2]==="]",l=r[3];if(o&&(a=a|0),l===void 0||l==="["&&s+2===i){nc(e,l===void 0?new Dm(a,n,A):new Pm(a,n,A));break}else{let u=e.map[a];u===void 0&&(u=new Om(a),nc(e,u)),e=u}}}class cs{constructor(A,e){this.seq=[],this.map={};const t=A.getProgramParameter(e,A.ACTIVE_UNIFORMS);for(let i=0;i<t;++i){const r=A.getActiveUniform(e,i),s=A.getUniformLocation(e,r.name);Nm(r,s,this)}}setValue(A,e,t,i){const r=this.map[e];r!==void 0&&r.setValue(A,t,i)}setOptional(A,e,t){const i=e[t];i!==void 0&&this.setValue(A,t,i)}static upload(A,e,t,i){for(let r=0,s=e.length;r!==s;++r){const a=e[r],o=t[a.id];o.needsUpdate!==!1&&a.setValue(A,o.value,i)}}static seqWithValue(A,e){const t=[];for(let i=0,r=A.length;i!==r;++i){const s=A[i];s.id in e&&t.push(s)}return t}}function ic(n,A,e){const t=n.createShader(A);return n.shaderSource(t,e),n.compileShader(t),t}let Gm=0;function Vm(n,A){const e=n.split(`
`),t=[],i=Math.max(A-6,0),r=Math.min(A+6,e.length);for(let s=i;s<r;s++){const a=s+1;t.push(`${a===A?">":" "} ${a}: ${e[s]}`)}return t.join(`
`)}function Km(n){switch(n){case pt:return["Linear","( value )"];case LA:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function rc(n,A,e){const t=n.getShaderParameter(A,n.COMPILE_STATUS),i=n.getShaderInfoLog(A).trim();if(t&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const s=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Vm(n.getShaderSource(A),s)}else return i}function km(n,A){const e=Km(A);return"vec4 "+n+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function zm(n,A){let e;switch(A){case Pf:e="Linear";break;case Of:e="Reinhard";break;case Nf:e="OptimizedCineon";break;case Gf:e="ACESFilmic";break;case Vf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",A),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Wm(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Qi).join(`
`)}function Xm(n){const A=[];for(const e in n){const t=n[e];t!==!1&&A.push("#define "+e+" "+t)}return A.join(`
`)}function Ym(n,A){const e={},t=n.getProgramParameter(A,n.ACTIVE_ATTRIBUTES);for(let i=0;i<t;i++){const r=n.getActiveAttrib(A,i),s=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[s]={type:r.type,location:n.getAttribLocation(A,s),locationSize:a}}return e}function Qi(n){return n!==""}function sc(n,A){const e=A.numSpotLightShadows+A.numSpotLightMaps-A.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,A.numDirLights).replace(/NUM_SPOT_LIGHTS/g,A.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,A.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,A.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,A.numPointLights).replace(/NUM_HEMI_LIGHTS/g,A.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,A.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,A.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,A.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,A.numPointLightShadows)}function ac(n,A){return n.replace(/NUM_CLIPPING_PLANES/g,A.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,A.numClippingPlanes-A.numClipIntersection)}const Jm=/^[ \t]*#include +<([\w\d./]+)>/gm;function $a(n){return n.replace(Jm,qm)}const Zm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function qm(n,A){let e=IA[A];if(e===void 0){const t=Zm.get(A);if(t!==void 0)e=IA[t],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',A,t);else throw new Error("Can not resolve #include <"+A+">")}return $a(e)}const jm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function oc(n){return n.replace(jm,$m)}function $m(n,A,e,t){let i="";for(let r=parseInt(A);r<parseInt(e);r++)i+=t.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function lc(n){let A="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?A+=`
#define HIGH_PRECISION`:n.precision==="mediump"?A+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(A+=`
#define LOW_PRECISION`),A}function AB(n){let A="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===wu?A="SHADOWMAP_TYPE_PCF":n.shadowMapType===gf?A="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===St&&(A="SHADOWMAP_TYPE_VSM"),A}function eB(n){let A="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case di:case pi:A="ENVMAP_TYPE_CUBE";break;case Fs:A="ENVMAP_TYPE_CUBE_UV";break}return A}function tB(n){let A="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case pi:A="ENVMAP_MODE_REFRACTION";break}return A}function nB(n){let A="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Cu:A="ENVMAP_BLENDING_MULTIPLY";break;case Hf:A="ENVMAP_BLENDING_MIX";break;case Df:A="ENVMAP_BLENDING_ADD";break}return A}function iB(n){const A=n.envMapCubeUVHeight;if(A===null)return null;const e=Math.log2(A)-2,t=1/A;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:t,maxMip:e}}function rB(n,A,e,t){const i=n.getContext(),r=e.defines;let s=e.vertexShader,a=e.fragmentShader;const o=AB(e),l=eB(e),c=tB(e),u=nB(e),h=iB(e),p=e.isWebGL2?"":Wm(e),g=Xm(r),m=i.createProgram();let d,f,C=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qi).join(`
`),d.length>0&&(d+=`
`),f=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qi).join(`
`),f.length>0&&(f+=`
`)):(d=[lc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+o:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qi).join(`
`),f=[p,lc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+o:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qt?"#define TONE_MAPPING":"",e.toneMapping!==qt?IA.tonemapping_pars_fragment:"",e.toneMapping!==qt?zm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",IA.colorspace_pars_fragment,km("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qi).join(`
`)),s=$a(s),s=sc(s,e),s=ac(s,e),a=$a(a),a=sc(a,e),a=ac(a,e),s=oc(s),a=oc(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,f=["#define varying in",e.glslVersion===Ml?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ml?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=C+d+s,_=C+f+a,E=ic(i,i.VERTEX_SHADER,v),y=ic(i,i.FRAGMENT_SHADER,_);if(i.attachShader(m,E),i.attachShader(m,y),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),n.debug.checkShaderErrors){const B=i.getProgramInfoLog(m).trim(),S=i.getShaderInfoLog(E).trim(),Y=i.getShaderInfoLog(y).trim();let q=!0,T=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(i,m,E,y);else{const O=rc(i,E,"vertex"),V=rc(i,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+B+`
`+O+`
`+V)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(S===""||Y==="")&&(T=!1);T&&(this.diagnostics={runnable:q,programLog:B,vertexShader:{log:S,prefix:d},fragmentShader:{log:Y,prefix:f}})}i.deleteShader(E),i.deleteShader(y);let U;this.getUniforms=function(){return U===void 0&&(U=new cs(i,m)),U};let L;return this.getAttributes=function(){return L===void 0&&(L=Ym(i,m)),L},this.destroy=function(){t.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Gm++,this.cacheKey=A,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=y,this}let sB=0;class aB{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(A){const e=A.vertexShader,t=A.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(t),s=this._getShaderCacheForMaterial(A);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(A){const e=this.materialCache.get(A);for(const t of e)t.usedTimes--,t.usedTimes===0&&this.shaderCache.delete(t.code);return this.materialCache.delete(A),this}getVertexShaderID(A){return this._getShaderStage(A.vertexShader).id}getFragmentShaderID(A){return this._getShaderStage(A.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(A){const e=this.materialCache;let t=e.get(A);return t===void 0&&(t=new Set,e.set(A,t)),t}_getShaderStage(A){const e=this.shaderCache;let t=e.get(A);return t===void 0&&(t=new oB(A),e.set(A,t)),t}}class oB{constructor(A){this.id=sB++,this.code=A,this.usedTimes=0}}function lB(n,A,e,t,i,r,s){const a=new Du,o=new aB,l=[],c=i.isWebGL2,u=i.logarithmicDepthBuffer,h=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(B){return B===0?"uv":`uv${B}`}function d(B,S,Y,q,T){const O=q.fog,V=T.geometry,Z=B.isMeshStandardMaterial?q.environment:null,k=(B.isMeshStandardMaterial?e:A).get(B.envMap||Z),X=k&&k.mapping===Fs?k.image.height:null,$=g[B.type];B.precision!==null&&(p=i.getMaxPrecision(B.precision),p!==B.precision&&console.warn("THREE.WebGLProgram.getParameters:",B.precision,"not supported, using",p,"instead."));const J=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,D=J!==void 0?J.length:0;let K=0;V.morphAttributes.position!==void 0&&(K=1),V.morphAttributes.normal!==void 0&&(K=2),V.morphAttributes.color!==void 0&&(K=3);let rA,sA,oA,mA;if($){const $A=ft[$];rA=$A.vertexShader,sA=$A.fragmentShader}else rA=B.vertexShader,sA=B.fragmentShader,o.update(B),oA=o.getVertexShaderID(B),mA=o.getFragmentShaderID(B);const wA=n.getRenderTarget(),vA=T.isInstancedMesh===!0,kA=!!B.map,ve=!!B.matcap,TA=!!k,H=!!B.aoMap,le=!!B.lightMap,_A=!!B.bumpMap,MA=!!B.normalMap,xA=!!B.displacementMap,qA=!!B.emissiveMap,HA=!!B.metalnessMap,FA=!!B.roughnessMap,KA=B.anisotropy>0,ce=B.clearcoat>0,de=B.iridescence>0,M=B.sheen>0,w=B.transmission>0,N=KA&&!!B.anisotropyMap,tA=ce&&!!B.clearcoatMap,AA=ce&&!!B.clearcoatNormalMap,nA=ce&&!!B.clearcoatRoughnessMap,BA=de&&!!B.iridescenceMap,iA=de&&!!B.iridescenceThicknessMap,G=M&&!!B.sheenColorMap,F=M&&!!B.sheenRoughnessMap,j=!!B.specularMap,fA=!!B.specularColorMap,aA=!!B.specularIntensityMap,hA=w&&!!B.transmissionMap,SA=w&&!!B.thicknessMap,VA=!!B.gradientMap,b=!!B.alphaMap,cA=B.alphaTest>0,P=!!B.alphaHash,eA=!!B.extensions,uA=!!V.attributes.uv1,DA=!!V.attributes.uv2,WA=!!V.attributes.uv3;let jA=qt;return B.toneMapped&&(wA===null||wA.isXRRenderTarget===!0)&&(jA=n.toneMapping),{isWebGL2:c,shaderID:$,shaderType:B.type,shaderName:B.name,vertexShader:rA,fragmentShader:sA,defines:B.defines,customVertexShaderID:oA,customFragmentShaderID:mA,isRawShaderMaterial:B.isRawShaderMaterial===!0,glslVersion:B.glslVersion,precision:p,instancing:vA,instancingColor:vA&&T.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:wA===null?n.outputColorSpace:wA.isXRRenderTarget===!0?wA.texture.colorSpace:pt,map:kA,matcap:ve,envMap:TA,envMapMode:TA&&k.mapping,envMapCubeUVHeight:X,aoMap:H,lightMap:le,bumpMap:_A,normalMap:MA,displacementMap:h&&xA,emissiveMap:qA,normalMapObjectSpace:MA&&B.normalMapType===td,normalMapTangentSpace:MA&&B.normalMapType===ed,metalnessMap:HA,roughnessMap:FA,anisotropy:KA,anisotropyMap:N,clearcoat:ce,clearcoatMap:tA,clearcoatNormalMap:AA,clearcoatRoughnessMap:nA,iridescence:de,iridescenceMap:BA,iridescenceThicknessMap:iA,sheen:M,sheenColorMap:G,sheenRoughnessMap:F,specularMap:j,specularColorMap:fA,specularIntensityMap:aA,transmission:w,transmissionMap:hA,thicknessMap:SA,gradientMap:VA,opaque:B.transparent===!1&&B.blending===ai,alphaMap:b,alphaTest:cA,alphaHash:P,combine:B.combine,mapUv:kA&&m(B.map.channel),aoMapUv:H&&m(B.aoMap.channel),lightMapUv:le&&m(B.lightMap.channel),bumpMapUv:_A&&m(B.bumpMap.channel),normalMapUv:MA&&m(B.normalMap.channel),displacementMapUv:xA&&m(B.displacementMap.channel),emissiveMapUv:qA&&m(B.emissiveMap.channel),metalnessMapUv:HA&&m(B.metalnessMap.channel),roughnessMapUv:FA&&m(B.roughnessMap.channel),anisotropyMapUv:N&&m(B.anisotropyMap.channel),clearcoatMapUv:tA&&m(B.clearcoatMap.channel),clearcoatNormalMapUv:AA&&m(B.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nA&&m(B.clearcoatRoughnessMap.channel),iridescenceMapUv:BA&&m(B.iridescenceMap.channel),iridescenceThicknessMapUv:iA&&m(B.iridescenceThicknessMap.channel),sheenColorMapUv:G&&m(B.sheenColorMap.channel),sheenRoughnessMapUv:F&&m(B.sheenRoughnessMap.channel),specularMapUv:j&&m(B.specularMap.channel),specularColorMapUv:fA&&m(B.specularColorMap.channel),specularIntensityMapUv:aA&&m(B.specularIntensityMap.channel),transmissionMapUv:hA&&m(B.transmissionMap.channel),thicknessMapUv:SA&&m(B.thicknessMap.channel),alphaMapUv:b&&m(B.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(MA||KA),vertexColors:B.vertexColors,vertexAlphas:B.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:uA,vertexUv2s:DA,vertexUv3s:WA,pointsUvs:T.isPoints===!0&&!!V.attributes.uv&&(kA||b),fog:!!O,useFog:B.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:B.flatShading===!0,sizeAttenuation:B.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:T.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:K,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:B.dithering,shadowMapEnabled:n.shadowMap.enabled&&Y.length>0,shadowMapType:n.shadowMap.type,toneMapping:jA,useLegacyLights:n._useLegacyLights,premultipliedAlpha:B.premultipliedAlpha,doubleSided:B.side===bt,flipSided:B.side===Pe,useDepthPacking:B.depthPacking>=0,depthPacking:B.depthPacking||0,index0AttributeName:B.index0AttributeName,extensionDerivatives:eA&&B.extensions.derivatives===!0,extensionFragDepth:eA&&B.extensions.fragDepth===!0,extensionDrawBuffers:eA&&B.extensions.drawBuffers===!0,extensionShaderTextureLOD:eA&&B.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:c||t.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||t.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||t.has("EXT_shader_texture_lod"),customProgramCacheKey:B.customProgramCacheKey()}}function f(B){const S=[];if(B.shaderID?S.push(B.shaderID):(S.push(B.customVertexShaderID),S.push(B.customFragmentShaderID)),B.defines!==void 0)for(const Y in B.defines)S.push(Y),S.push(B.defines[Y]);return B.isRawShaderMaterial===!1&&(C(S,B),v(S,B),S.push(n.outputColorSpace)),S.push(B.customProgramCacheKey),S.join()}function C(B,S){B.push(S.precision),B.push(S.outputColorSpace),B.push(S.envMapMode),B.push(S.envMapCubeUVHeight),B.push(S.mapUv),B.push(S.alphaMapUv),B.push(S.lightMapUv),B.push(S.aoMapUv),B.push(S.bumpMapUv),B.push(S.normalMapUv),B.push(S.displacementMapUv),B.push(S.emissiveMapUv),B.push(S.metalnessMapUv),B.push(S.roughnessMapUv),B.push(S.anisotropyMapUv),B.push(S.clearcoatMapUv),B.push(S.clearcoatNormalMapUv),B.push(S.clearcoatRoughnessMapUv),B.push(S.iridescenceMapUv),B.push(S.iridescenceThicknessMapUv),B.push(S.sheenColorMapUv),B.push(S.sheenRoughnessMapUv),B.push(S.specularMapUv),B.push(S.specularColorMapUv),B.push(S.specularIntensityMapUv),B.push(S.transmissionMapUv),B.push(S.thicknessMapUv),B.push(S.combine),B.push(S.fogExp2),B.push(S.sizeAttenuation),B.push(S.morphTargetsCount),B.push(S.morphAttributeCount),B.push(S.numDirLights),B.push(S.numPointLights),B.push(S.numSpotLights),B.push(S.numSpotLightMaps),B.push(S.numHemiLights),B.push(S.numRectAreaLights),B.push(S.numDirLightShadows),B.push(S.numPointLightShadows),B.push(S.numSpotLightShadows),B.push(S.numSpotLightShadowsWithMaps),B.push(S.shadowMapType),B.push(S.toneMapping),B.push(S.numClippingPlanes),B.push(S.numClipIntersection),B.push(S.depthPacking)}function v(B,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),B.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),B.push(a.mask)}function _(B){const S=g[B.type];let Y;if(S){const q=ft[S];Y=Yd.clone(q.uniforms)}else Y=B.uniforms;return Y}function E(B,S){let Y;for(let q=0,T=l.length;q<T;q++){const O=l[q];if(O.cacheKey===S){Y=O,++Y.usedTimes;break}}return Y===void 0&&(Y=new rB(n,S,B,r),l.push(Y)),Y}function y(B){if(--B.usedTimes===0){const S=l.indexOf(B);l[S]=l[l.length-1],l.pop(),B.destroy()}}function U(B){o.remove(B)}function L(){o.dispose()}return{getParameters:d,getProgramCacheKey:f,getUniforms:_,acquireProgram:E,releaseProgram:y,releaseShaderCache:U,programs:l,dispose:L}}function cB(){let n=new WeakMap;function A(r){let s=n.get(r);return s===void 0&&(s={},n.set(r,s)),s}function e(r){n.delete(r)}function t(r,s,a){n.get(r)[s]=a}function i(){n=new WeakMap}return{get:A,remove:e,update:t,dispose:i}}function uB(n,A){return n.groupOrder!==A.groupOrder?n.groupOrder-A.groupOrder:n.renderOrder!==A.renderOrder?n.renderOrder-A.renderOrder:n.material.id!==A.material.id?n.material.id-A.material.id:n.z!==A.z?n.z-A.z:n.id-A.id}function cc(n,A){return n.groupOrder!==A.groupOrder?n.groupOrder-A.groupOrder:n.renderOrder!==A.renderOrder?n.renderOrder-A.renderOrder:n.z!==A.z?A.z-n.z:n.id-A.id}function uc(){const n=[];let A=0;const e=[],t=[],i=[];function r(){A=0,e.length=0,t.length=0,i.length=0}function s(u,h,p,g,m,d){let f=n[A];return f===void 0?(f={id:u.id,object:u,geometry:h,material:p,groupOrder:g,renderOrder:u.renderOrder,z:m,group:d},n[A]=f):(f.id=u.id,f.object=u,f.geometry=h,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=m,f.group=d),A++,f}function a(u,h,p,g,m,d){const f=s(u,h,p,g,m,d);p.transmission>0?t.push(f):p.transparent===!0?i.push(f):e.push(f)}function o(u,h,p,g,m,d){const f=s(u,h,p,g,m,d);p.transmission>0?t.unshift(f):p.transparent===!0?i.unshift(f):e.unshift(f)}function l(u,h){e.length>1&&e.sort(u||uB),t.length>1&&t.sort(h||cc),i.length>1&&i.sort(h||cc)}function c(){for(let u=A,h=n.length;u<h;u++){const p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:t,transparent:i,init:r,push:a,unshift:o,finish:c,sort:l}}function hB(){let n=new WeakMap;function A(t,i){const r=n.get(t);let s;return r===void 0?(s=new uc,n.set(t,[s])):i>=r.length?(s=new uc,r.push(s)):s=r[i],s}function e(){n=new WeakMap}return{get:A,dispose:e}}function fB(){const n={};return{get:function(A){if(n[A.id]!==void 0)return n[A.id];let e;switch(A.type){case"DirectionalLight":e={direction:new Q,color:new YA};break;case"SpotLight":e={position:new Q,direction:new Q,color:new YA,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Q,color:new YA,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Q,skyColor:new YA,groundColor:new YA};break;case"RectAreaLight":e={color:new YA,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return n[A.id]=e,e}}}function dB(){const n={};return{get:function(A){if(n[A.id]!==void 0)return n[A.id];let e;switch(A.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new RA};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new RA};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new RA,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[A.id]=e,e}}}let pB=0;function gB(n,A){return(A.castShadow?2:0)-(n.castShadow?2:0)+(A.map?1:0)-(n.map?1:0)}function mB(n,A){const e=new fB,t=dB(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)i.probe.push(new Q);const r=new Q,s=new we,a=new we;function o(c,u){let h=0,p=0,g=0;for(let Y=0;Y<9;Y++)i.probe[Y].set(0,0,0);let m=0,d=0,f=0,C=0,v=0,_=0,E=0,y=0,U=0,L=0;c.sort(gB);const B=u===!0?Math.PI:1;for(let Y=0,q=c.length;Y<q;Y++){const T=c[Y],O=T.color,V=T.intensity,Z=T.distance,k=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=O.r*V*B,p+=O.g*V*B,g+=O.b*V*B;else if(T.isLightProbe)for(let X=0;X<9;X++)i.probe[X].addScaledVector(T.sh.coefficients[X],V);else if(T.isDirectionalLight){const X=e.get(T);if(X.color.copy(T.color).multiplyScalar(T.intensity*B),T.castShadow){const $=T.shadow,J=t.get(T);J.shadowBias=$.bias,J.shadowNormalBias=$.normalBias,J.shadowRadius=$.radius,J.shadowMapSize=$.mapSize,i.directionalShadow[m]=J,i.directionalShadowMap[m]=k,i.directionalShadowMatrix[m]=T.shadow.matrix,_++}i.directional[m]=X,m++}else if(T.isSpotLight){const X=e.get(T);X.position.setFromMatrixPosition(T.matrixWorld),X.color.copy(O).multiplyScalar(V*B),X.distance=Z,X.coneCos=Math.cos(T.angle),X.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),X.decay=T.decay,i.spot[f]=X;const $=T.shadow;if(T.map&&(i.spotLightMap[U]=T.map,U++,$.updateMatrices(T),T.castShadow&&L++),i.spotLightMatrix[f]=$.matrix,T.castShadow){const J=t.get(T);J.shadowBias=$.bias,J.shadowNormalBias=$.normalBias,J.shadowRadius=$.radius,J.shadowMapSize=$.mapSize,i.spotShadow[f]=J,i.spotShadowMap[f]=k,y++}f++}else if(T.isRectAreaLight){const X=e.get(T);X.color.copy(O).multiplyScalar(V),X.halfWidth.set(T.width*.5,0,0),X.halfHeight.set(0,T.height*.5,0),i.rectArea[C]=X,C++}else if(T.isPointLight){const X=e.get(T);if(X.color.copy(T.color).multiplyScalar(T.intensity*B),X.distance=T.distance,X.decay=T.decay,T.castShadow){const $=T.shadow,J=t.get(T);J.shadowBias=$.bias,J.shadowNormalBias=$.normalBias,J.shadowRadius=$.radius,J.shadowMapSize=$.mapSize,J.shadowCameraNear=$.camera.near,J.shadowCameraFar=$.camera.far,i.pointShadow[d]=J,i.pointShadowMap[d]=k,i.pointShadowMatrix[d]=T.shadow.matrix,E++}i.point[d]=X,d++}else if(T.isHemisphereLight){const X=e.get(T);X.skyColor.copy(T.color).multiplyScalar(V*B),X.groundColor.copy(T.groundColor).multiplyScalar(V*B),i.hemi[v]=X,v++}}C>0&&(A.isWebGL2||n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=lA.LTC_FLOAT_1,i.rectAreaLTC2=lA.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=lA.LTC_HALF_1,i.rectAreaLTC2=lA.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=g;const S=i.hash;(S.directionalLength!==m||S.pointLength!==d||S.spotLength!==f||S.rectAreaLength!==C||S.hemiLength!==v||S.numDirectionalShadows!==_||S.numPointShadows!==E||S.numSpotShadows!==y||S.numSpotMaps!==U)&&(i.directional.length=m,i.spot.length=f,i.rectArea.length=C,i.point.length=d,i.hemi.length=v,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=y+U-L,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=L,S.directionalLength=m,S.pointLength=d,S.spotLength=f,S.rectAreaLength=C,S.hemiLength=v,S.numDirectionalShadows=_,S.numPointShadows=E,S.numSpotShadows=y,S.numSpotMaps=U,i.version=pB++)}function l(c,u){let h=0,p=0,g=0,m=0,d=0;const f=u.matrixWorldInverse;for(let C=0,v=c.length;C<v;C++){const _=c[C];if(_.isDirectionalLight){const E=i.directional[h];E.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(f),h++}else if(_.isSpotLight){const E=i.spot[g];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(f),g++}else if(_.isRectAreaLight){const E=i.rectArea[m];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(f),a.identity(),s.copy(_.matrixWorld),s.premultiply(f),a.extractRotation(s),E.halfWidth.set(_.width*.5,0,0),E.halfHeight.set(0,_.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),m++}else if(_.isPointLight){const E=i.point[p];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(f),p++}else if(_.isHemisphereLight){const E=i.hemi[d];E.direction.setFromMatrixPosition(_.matrixWorld),E.direction.transformDirection(f),d++}}}return{setup:o,setupView:l,state:i}}function hc(n,A){const e=new mB(n,A),t=[],i=[];function r(){t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(u){e.setup(t,u)}function l(u){e.setupView(t,u)}return{init:r,state:{lightsArray:t,shadowsArray:i,lights:e},setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function BB(n,A){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new hc(n,A),e.set(r,[o])):s>=a.length?(o=new hc(n,A),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class wB extends Ts{constructor(A){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$f,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(A)}copy(A){return super.copy(A),this.depthPacking=A.depthPacking,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this}}class vB extends Ts{constructor(A){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(A)}copy(A){return super.copy(A),this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this}}const _B=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CB=`uniform sampler2D shadow_pass;
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
}`;function EB(n,A,e){let t=new ku;const i=new RA,r=new RA,s=new Ee,a=new wB({depthPacking:Ad}),o=new vB,l={},c=e.maxTextureSize,u={[en]:Pe,[Pe]:en,[bt]:bt},h=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new RA},radius:{value:4}},vertexShader:_B,fragmentShader:CB}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new nn;g.setAttribute("position",new lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Qt(g,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wu;let f=this.type;this.render=function(E,y,U){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||E.length===0)return;const L=n.getRenderTarget(),B=n.getActiveCubeFace(),S=n.getActiveMipmapLevel(),Y=n.state;Y.setBlending(Zt),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const q=f!==St&&this.type===St,T=f===St&&this.type!==St;for(let O=0,V=E.length;O<V;O++){const Z=E[O],k=Z.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const X=k.getFrameExtents();if(i.multiply(X),r.copy(k.mapSize),(i.x>c||i.y>c)&&(i.x>c&&(r.x=Math.floor(c/X.x),i.x=r.x*X.x,k.mapSize.x=r.x),i.y>c&&(r.y=Math.floor(c/X.y),i.y=r.y*X.y,k.mapSize.y=r.y)),k.map===null||q===!0||T===!0){const J=this.type!==St?{minFilter:He,magFilter:He}:{};k.map!==null&&k.map.dispose(),k.map=new Un(i.x,i.y,J),k.map.texture.name=Z.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();const $=k.getViewportCount();for(let J=0;J<$;J++){const D=k.getViewport(J);s.set(r.x*D.x,r.y*D.y,r.x*D.z,r.y*D.w),Y.viewport(s),k.updateMatrices(Z,J),t=k.getFrustum(),_(y,U,k.camera,Z,this.type)}k.isPointLightShadow!==!0&&this.type===St&&C(k,U),k.needsUpdate=!1}f=this.type,d.needsUpdate=!1,n.setRenderTarget(L,B,S)};function C(E,y){const U=A.update(m);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Un(i.x,i.y)),h.uniforms.shadow_pass.value=E.map.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(y,null,U,h,m,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(y,null,U,p,m,null)}function v(E,y,U,L){let B=null;const S=U.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(S!==void 0)B=S;else if(B=U.isPointLight===!0?o:a,n.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const Y=B.uuid,q=y.uuid;let T=l[Y];T===void 0&&(T={},l[Y]=T);let O=T[q];O===void 0&&(O=B.clone(),T[q]=O),B=O}if(B.visible=y.visible,B.wireframe=y.wireframe,L===St?B.side=y.shadowSide!==null?y.shadowSide:y.side:B.side=y.shadowSide!==null?y.shadowSide:u[y.side],B.alphaMap=y.alphaMap,B.alphaTest=y.alphaTest,B.map=y.map,B.clipShadows=y.clipShadows,B.clippingPlanes=y.clippingPlanes,B.clipIntersection=y.clipIntersection,B.displacementMap=y.displacementMap,B.displacementScale=y.displacementScale,B.displacementBias=y.displacementBias,B.wireframeLinewidth=y.wireframeLinewidth,B.linewidth=y.linewidth,U.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const Y=n.properties.get(B);Y.light=U}return B}function _(E,y,U,L,B){if(E.visible===!1)return;if(E.layers.test(y.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&B===St)&&(!E.frustumCulled||t.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,E.matrixWorld);const q=A.update(E),T=E.material;if(Array.isArray(T)){const O=q.groups;for(let V=0,Z=O.length;V<Z;V++){const k=O[V],X=T[k.materialIndex];if(X&&X.visible){const $=v(E,X,L,B);n.renderBufferDirect(U,null,q,$,E,k)}}}else if(T.visible){const O=v(E,T,L,B);n.renderBufferDirect(U,null,q,O,E,null)}}const Y=E.children;for(let q=0,T=Y.length;q<T;q++)_(Y[q],y,U,L,B)}}function xB(n,A,e){const t=e.isWebGL2;function i(){let b=!1;const cA=new Ee;let P=null;const eA=new Ee(0,0,0,0);return{setMask:function(uA){P!==uA&&!b&&(n.colorMask(uA,uA,uA,uA),P=uA)},setLocked:function(uA){b=uA},setClear:function(uA,DA,WA,jA,Rt){Rt===!0&&(uA*=jA,DA*=jA,WA*=jA),cA.set(uA,DA,WA,jA),eA.equals(cA)===!1&&(n.clearColor(uA,DA,WA,jA),eA.copy(cA))},reset:function(){b=!1,P=null,eA.set(-1,0,0,0)}}}function r(){let b=!1,cA=null,P=null,eA=null;return{setTest:function(uA){uA?wA(n.DEPTH_TEST):vA(n.DEPTH_TEST)},setMask:function(uA){cA!==uA&&!b&&(n.depthMask(uA),cA=uA)},setFunc:function(uA){if(P!==uA){switch(uA){case Ff:n.depthFunc(n.NEVER);break;case bf:n.depthFunc(n.ALWAYS);break;case Tf:n.depthFunc(n.LESS);break;case Wa:n.depthFunc(n.LEQUAL);break;case Qf:n.depthFunc(n.EQUAL);break;case If:n.depthFunc(n.GEQUAL);break;case Lf:n.depthFunc(n.GREATER);break;case Rf:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}P=uA}},setLocked:function(uA){b=uA},setClear:function(uA){eA!==uA&&(n.clearDepth(uA),eA=uA)},reset:function(){b=!1,cA=null,P=null,eA=null}}}function s(){let b=!1,cA=null,P=null,eA=null,uA=null,DA=null,WA=null,jA=null,Rt=null;return{setTest:function($A){b||($A?wA(n.STENCIL_TEST):vA(n.STENCIL_TEST))},setMask:function($A){cA!==$A&&!b&&(n.stencilMask($A),cA=$A)},setFunc:function($A,ut,be){(P!==$A||eA!==ut||uA!==be)&&(n.stencilFunc($A,ut,be),P=$A,eA=ut,uA=be)},setOp:function($A,ut,be){(DA!==$A||WA!==ut||jA!==be)&&(n.stencilOp($A,ut,be),DA=$A,WA=ut,jA=be)},setLocked:function($A){b=$A},setClear:function($A){Rt!==$A&&(n.clearStencil($A),Rt=$A)},reset:function(){b=!1,cA=null,P=null,eA=null,uA=null,DA=null,WA=null,jA=null,Rt=null}}}const a=new i,o=new r,l=new s,c=new WeakMap,u=new WeakMap;let h={},p={},g=new WeakMap,m=[],d=null,f=!1,C=null,v=null,_=null,E=null,y=null,U=null,L=null,B=!1,S=null,Y=null,q=null,T=null,O=null;const V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,k=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(X)[1]),Z=k>=1):X.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Z=k>=2);let $=null,J={};const D=n.getParameter(n.SCISSOR_BOX),K=n.getParameter(n.VIEWPORT),rA=new Ee().fromArray(D),sA=new Ee().fromArray(K);function oA(b,cA,P,eA){const uA=new Uint8Array(4),DA=n.createTexture();n.bindTexture(b,DA),n.texParameteri(b,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(b,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let WA=0;WA<P;WA++)t&&(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)?n.texImage3D(cA,0,n.RGBA,1,1,eA,0,n.RGBA,n.UNSIGNED_BYTE,uA):n.texImage2D(cA+WA,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,uA);return DA}const mA={};mA[n.TEXTURE_2D]=oA(n.TEXTURE_2D,n.TEXTURE_2D,1),mA[n.TEXTURE_CUBE_MAP]=oA(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),t&&(mA[n.TEXTURE_2D_ARRAY]=oA(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),mA[n.TEXTURE_3D]=oA(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),o.setClear(1),l.setClear(0),wA(n.DEPTH_TEST),o.setFunc(Wa),xA(!1),qA(qo),wA(n.CULL_FACE),_A(Zt);function wA(b){h[b]!==!0&&(n.enable(b),h[b]=!0)}function vA(b){h[b]!==!1&&(n.disable(b),h[b]=!1)}function kA(b,cA){return p[b]!==cA?(n.bindFramebuffer(b,cA),p[b]=cA,t&&(b===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=cA),b===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=cA)),!0):!1}function ve(b,cA){let P=m,eA=!1;if(b)if(P=g.get(cA),P===void 0&&(P=[],g.set(cA,P)),b.isWebGLMultipleRenderTargets){const uA=b.texture;if(P.length!==uA.length||P[0]!==n.COLOR_ATTACHMENT0){for(let DA=0,WA=uA.length;DA<WA;DA++)P[DA]=n.COLOR_ATTACHMENT0+DA;P.length=uA.length,eA=!0}}else P[0]!==n.COLOR_ATTACHMENT0&&(P[0]=n.COLOR_ATTACHMENT0,eA=!0);else P[0]!==n.BACK&&(P[0]=n.BACK,eA=!0);eA&&(e.isWebGL2?n.drawBuffers(P):A.get("WEBGL_draw_buffers").drawBuffersWEBGL(P))}function TA(b){return d!==b?(n.useProgram(b),d=b,!0):!1}const H={[Ai]:n.FUNC_ADD,[Bf]:n.FUNC_SUBTRACT,[wf]:n.FUNC_REVERSE_SUBTRACT};if(t)H[el]=n.MIN,H[tl]=n.MAX;else{const b=A.get("EXT_blend_minmax");b!==null&&(H[el]=b.MIN_EXT,H[tl]=b.MAX_EXT)}const le={[vf]:n.ZERO,[_f]:n.ONE,[Cf]:n.SRC_COLOR,[vu]:n.SRC_ALPHA,[Mf]:n.SRC_ALPHA_SATURATE,[yf]:n.DST_COLOR,[xf]:n.DST_ALPHA,[Ef]:n.ONE_MINUS_SRC_COLOR,[_u]:n.ONE_MINUS_SRC_ALPHA,[Sf]:n.ONE_MINUS_DST_COLOR,[Uf]:n.ONE_MINUS_DST_ALPHA};function _A(b,cA,P,eA,uA,DA,WA,jA){if(b===Zt){f===!0&&(vA(n.BLEND),f=!1);return}if(f===!1&&(wA(n.BLEND),f=!0),b!==mf){if(b!==C||jA!==B){if((v!==Ai||y!==Ai)&&(n.blendEquation(n.FUNC_ADD),v=Ai,y=Ai),jA)switch(b){case ai:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jo:n.blendFunc(n.ONE,n.ONE);break;case $o:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Al:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}else switch(b){case ai:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jo:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case $o:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Al:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}_=null,E=null,U=null,L=null,C=b,B=jA}return}uA=uA||cA,DA=DA||P,WA=WA||eA,(cA!==v||uA!==y)&&(n.blendEquationSeparate(H[cA],H[uA]),v=cA,y=uA),(P!==_||eA!==E||DA!==U||WA!==L)&&(n.blendFuncSeparate(le[P],le[eA],le[DA],le[WA]),_=P,E=eA,U=DA,L=WA),C=b,B=!1}function MA(b,cA){b.side===bt?vA(n.CULL_FACE):wA(n.CULL_FACE);let P=b.side===Pe;cA&&(P=!P),xA(P),b.blending===ai&&b.transparent===!1?_A(Zt):_A(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.premultipliedAlpha),o.setFunc(b.depthFunc),o.setTest(b.depthTest),o.setMask(b.depthWrite),a.setMask(b.colorWrite);const eA=b.stencilWrite;l.setTest(eA),eA&&(l.setMask(b.stencilWriteMask),l.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),l.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),FA(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?wA(n.SAMPLE_ALPHA_TO_COVERAGE):vA(n.SAMPLE_ALPHA_TO_COVERAGE)}function xA(b){S!==b&&(b?n.frontFace(n.CW):n.frontFace(n.CCW),S=b)}function qA(b){b!==df?(wA(n.CULL_FACE),b!==Y&&(b===qo?n.cullFace(n.BACK):b===pf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):vA(n.CULL_FACE),Y=b}function HA(b){b!==q&&(Z&&n.lineWidth(b),q=b)}function FA(b,cA,P){b?(wA(n.POLYGON_OFFSET_FILL),(T!==cA||O!==P)&&(n.polygonOffset(cA,P),T=cA,O=P)):vA(n.POLYGON_OFFSET_FILL)}function KA(b){b?wA(n.SCISSOR_TEST):vA(n.SCISSOR_TEST)}function ce(b){b===void 0&&(b=n.TEXTURE0+V-1),$!==b&&(n.activeTexture(b),$=b)}function de(b,cA,P){P===void 0&&($===null?P=n.TEXTURE0+V-1:P=$);let eA=J[P];eA===void 0&&(eA={type:void 0,texture:void 0},J[P]=eA),(eA.type!==b||eA.texture!==cA)&&($!==P&&(n.activeTexture(P),$=P),n.bindTexture(b,cA||mA[b]),eA.type=b,eA.texture=cA)}function M(){const b=J[$];b!==void 0&&b.type!==void 0&&(n.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)}function w(){try{n.compressedTexImage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function N(){try{n.compressedTexImage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function tA(){try{n.texSubImage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function AA(){try{n.texSubImage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function nA(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function BA(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function iA(){try{n.texStorage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function G(){try{n.texStorage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function F(){try{n.texImage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function j(){try{n.texImage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function fA(b){rA.equals(b)===!1&&(n.scissor(b.x,b.y,b.z,b.w),rA.copy(b))}function aA(b){sA.equals(b)===!1&&(n.viewport(b.x,b.y,b.z,b.w),sA.copy(b))}function hA(b,cA){let P=u.get(cA);P===void 0&&(P=new WeakMap,u.set(cA,P));let eA=P.get(b);eA===void 0&&(eA=n.getUniformBlockIndex(cA,b.name),P.set(b,eA))}function SA(b,cA){const eA=u.get(cA).get(b);c.get(cA)!==eA&&(n.uniformBlockBinding(cA,eA,b.__bindingPointIndex),c.set(cA,eA))}function VA(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),t===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},$=null,J={},p={},g=new WeakMap,m=[],d=null,f=!1,C=null,v=null,_=null,E=null,y=null,U=null,L=null,B=!1,S=null,Y=null,q=null,T=null,O=null,rA.set(0,0,n.canvas.width,n.canvas.height),sA.set(0,0,n.canvas.width,n.canvas.height),a.reset(),o.reset(),l.reset()}return{buffers:{color:a,depth:o,stencil:l},enable:wA,disable:vA,bindFramebuffer:kA,drawBuffers:ve,useProgram:TA,setBlending:_A,setMaterial:MA,setFlipSided:xA,setCullFace:qA,setLineWidth:HA,setPolygonOffset:FA,setScissorTest:KA,activeTexture:ce,bindTexture:de,unbindTexture:M,compressedTexImage2D:w,compressedTexImage3D:N,texImage2D:F,texImage3D:j,updateUBOMapping:hA,uniformBlockBinding:SA,texStorage2D:iA,texStorage3D:G,texSubImage2D:tA,texSubImage3D:AA,compressedTexSubImage2D:nA,compressedTexSubImage3D:BA,scissor:fA,viewport:aA,reset:VA}}function UB(n,A,e,t,i,r,s){const a=i.isWebGL2,o=i.maxTextures,l=i.maxCubemapSize,c=i.maxTextureSize,u=i.maxSamples,h=A.has("WEBGL_multisampled_render_to_texture")?A.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(M,w){return f?new OffscreenCanvas(M,w):ms("canvas")}function v(M,w,N,tA){let AA=1;if((M.width>tA||M.height>tA)&&(AA=tA/Math.max(M.width,M.height)),AA<1||w===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const nA=w?gs:Math.floor,BA=nA(AA*M.width),iA=nA(AA*M.height);m===void 0&&(m=C(BA,iA));const G=N?C(BA,iA):m;return G.width=BA,G.height=iA,G.getContext("2d").drawImage(M,0,0,BA,iA),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+BA+"x"+iA+")."),G}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function _(M){return ja(M.width)&&ja(M.height)}function E(M){return a?!1:M.wrapS!==st||M.wrapT!==st||M.minFilter!==He&&M.minFilter!==Je}function y(M,w){return M.generateMipmaps&&w&&M.minFilter!==He&&M.minFilter!==Je}function U(M){n.generateMipmap(M)}function L(M,w,N,tA,AA=!1){if(a===!1)return w;if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let nA=w;return w===n.RED&&(N===n.FLOAT&&(nA=n.R32F),N===n.HALF_FLOAT&&(nA=n.R16F),N===n.UNSIGNED_BYTE&&(nA=n.R8)),w===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(nA=n.R8UI),N===n.UNSIGNED_SHORT&&(nA=n.R16UI),N===n.UNSIGNED_INT&&(nA=n.R32UI),N===n.BYTE&&(nA=n.R8I),N===n.SHORT&&(nA=n.R16I),N===n.INT&&(nA=n.R32I)),w===n.RG&&(N===n.FLOAT&&(nA=n.RG32F),N===n.HALF_FLOAT&&(nA=n.RG16F),N===n.UNSIGNED_BYTE&&(nA=n.RG8)),w===n.RGBA&&(N===n.FLOAT&&(nA=n.RGBA32F),N===n.HALF_FLOAT&&(nA=n.RGBA16F),N===n.UNSIGNED_BYTE&&(nA=tA===LA&&AA===!1?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(nA=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(nA=n.RGB5_A1)),(nA===n.R16F||nA===n.R32F||nA===n.RG16F||nA===n.RG32F||nA===n.RGBA16F||nA===n.RGBA32F)&&A.get("EXT_color_buffer_float"),nA}function B(M,w,N){return y(M,N)===!0||M.isFramebufferTexture&&M.minFilter!==He&&M.minFilter!==Je?Math.log2(Math.max(w.width,w.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?w.mipmaps.length:1}function S(M){return M===He||M===nl||M===Ys?n.NEAREST:n.LINEAR}function Y(M){const w=M.target;w.removeEventListener("dispose",Y),T(w),w.isVideoTexture&&g.delete(w)}function q(M){const w=M.target;w.removeEventListener("dispose",q),V(w)}function T(M){const w=t.get(M);if(w.__webglInit===void 0)return;const N=M.source,tA=d.get(N);if(tA){const AA=tA[w.__cacheKey];AA.usedTimes--,AA.usedTimes===0&&O(M),Object.keys(tA).length===0&&d.delete(N)}t.remove(M)}function O(M){const w=t.get(M);n.deleteTexture(w.__webglTexture);const N=M.source,tA=d.get(N);delete tA[w.__cacheKey],s.memory.textures--}function V(M){const w=M.texture,N=t.get(M),tA=t.get(w);if(tA.__webglTexture!==void 0&&(n.deleteTexture(tA.__webglTexture),s.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let AA=0;AA<6;AA++){if(Array.isArray(N.__webglFramebuffer[AA]))for(let nA=0;nA<N.__webglFramebuffer[AA].length;nA++)n.deleteFramebuffer(N.__webglFramebuffer[AA][nA]);else n.deleteFramebuffer(N.__webglFramebuffer[AA]);N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer[AA])}else{if(Array.isArray(N.__webglFramebuffer))for(let AA=0;AA<N.__webglFramebuffer.length;AA++)n.deleteFramebuffer(N.__webglFramebuffer[AA]);else n.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&n.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let AA=0;AA<N.__webglColorRenderbuffer.length;AA++)N.__webglColorRenderbuffer[AA]&&n.deleteRenderbuffer(N.__webglColorRenderbuffer[AA]);N.__webglDepthRenderbuffer&&n.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let AA=0,nA=w.length;AA<nA;AA++){const BA=t.get(w[AA]);BA.__webglTexture&&(n.deleteTexture(BA.__webglTexture),s.memory.textures--),t.remove(w[AA])}t.remove(w),t.remove(M)}let Z=0;function k(){Z=0}function X(){const M=Z;return M>=o&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+o),Z+=1,M}function $(M){const w=[];return w.push(M.wrapS),w.push(M.wrapT),w.push(M.wrapR||0),w.push(M.magFilter),w.push(M.minFilter),w.push(M.anisotropy),w.push(M.internalFormat),w.push(M.format),w.push(M.type),w.push(M.generateMipmaps),w.push(M.premultiplyAlpha),w.push(M.flipY),w.push(M.unpackAlignment),w.push(M.colorSpace),w.join()}function J(M,w){const N=t.get(M);if(M.isVideoTexture&&ce(M),M.isRenderTargetTexture===!1&&M.version>0&&N.__version!==M.version){const tA=M.image;if(tA===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tA.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{kA(N,M,w);return}}e.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+w)}function D(M,w){const N=t.get(M);if(M.version>0&&N.__version!==M.version){kA(N,M,w);return}e.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+w)}function K(M,w){const N=t.get(M);if(M.version>0&&N.__version!==M.version){kA(N,M,w);return}e.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+w)}function rA(M,w){const N=t.get(M);if(M.version>0&&N.__version!==M.version){ve(N,M,w);return}e.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+w)}const sA={[Ja]:n.REPEAT,[st]:n.CLAMP_TO_EDGE,[Za]:n.MIRRORED_REPEAT},oA={[He]:n.NEAREST,[nl]:n.NEAREST_MIPMAP_NEAREST,[Ys]:n.NEAREST_MIPMAP_LINEAR,[Je]:n.LINEAR,[Kf]:n.LINEAR_MIPMAP_NEAREST,[Ar]:n.LINEAR_MIPMAP_LINEAR},mA={[id]:n.NEVER,[ud]:n.ALWAYS,[rd]:n.LESS,[ad]:n.LEQUAL,[sd]:n.EQUAL,[cd]:n.GEQUAL,[od]:n.GREATER,[ld]:n.NOTEQUAL};function wA(M,w,N){if(N?(n.texParameteri(M,n.TEXTURE_WRAP_S,sA[w.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,sA[w.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,sA[w.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,oA[w.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,oA[w.minFilter])):(n.texParameteri(M,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(M,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(w.wrapS!==st||w.wrapT!==st)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(M,n.TEXTURE_MAG_FILTER,S(w.magFilter)),n.texParameteri(M,n.TEXTURE_MIN_FILTER,S(w.minFilter)),w.minFilter!==He&&w.minFilter!==Je&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,mA[w.compareFunction])),A.has("EXT_texture_filter_anisotropic")===!0){const tA=A.get("EXT_texture_filter_anisotropic");if(w.magFilter===He||w.minFilter!==Ys&&w.minFilter!==Ar||w.type===Wt&&A.has("OES_texture_float_linear")===!1||a===!1&&w.type===er&&A.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||t.get(w).__currentAnisotropy)&&(n.texParameterf(M,tA.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),t.get(w).__currentAnisotropy=w.anisotropy)}}function vA(M,w){let N=!1;M.__webglInit===void 0&&(M.__webglInit=!0,w.addEventListener("dispose",Y));const tA=w.source;let AA=d.get(tA);AA===void 0&&(AA={},d.set(tA,AA));const nA=$(w);if(nA!==M.__cacheKey){AA[nA]===void 0&&(AA[nA]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,N=!0),AA[nA].usedTimes++;const BA=AA[M.__cacheKey];BA!==void 0&&(AA[M.__cacheKey].usedTimes--,BA.usedTimes===0&&O(w)),M.__cacheKey=nA,M.__webglTexture=AA[nA].texture}return N}function kA(M,w,N){let tA=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(tA=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(tA=n.TEXTURE_3D);const AA=vA(M,w),nA=w.source;e.bindTexture(tA,M.__webglTexture,n.TEXTURE0+N);const BA=t.get(nA);if(nA.version!==BA.__version||AA===!0){e.activeTexture(n.TEXTURE0+N),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const iA=E(w)&&_(w.image)===!1;let G=v(w.image,iA,!1,c);G=de(w,G);const F=_(G)||a,j=r.convert(w.format,w.colorSpace);let fA=r.convert(w.type),aA=L(w.internalFormat,j,fA,w.colorSpace);wA(tA,w,F);let hA;const SA=w.mipmaps,VA=a&&w.isVideoTexture!==!0,b=BA.__version===void 0||AA===!0,cA=B(w,G,F);if(w.isDepthTexture)aA=n.DEPTH_COMPONENT,a?w.type===Wt?aA=n.DEPTH_COMPONENT32F:w.type===zt?aA=n.DEPTH_COMPONENT24:w.type===wn?aA=n.DEPTH24_STENCIL8:aA=n.DEPTH_COMPONENT16:w.type===Wt&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===vn&&aA===n.DEPTH_COMPONENT&&w.type!==So&&w.type!==zt&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=zt,fA=r.convert(w.type)),w.format===gi&&aA===n.DEPTH_COMPONENT&&(aA=n.DEPTH_STENCIL,w.type!==wn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=wn,fA=r.convert(w.type))),b&&(VA?e.texStorage2D(n.TEXTURE_2D,1,aA,G.width,G.height):e.texImage2D(n.TEXTURE_2D,0,aA,G.width,G.height,0,j,fA,null));else if(w.isDataTexture)if(SA.length>0&&F){VA&&b&&e.texStorage2D(n.TEXTURE_2D,cA,aA,SA[0].width,SA[0].height);for(let P=0,eA=SA.length;P<eA;P++)hA=SA[P],VA?e.texSubImage2D(n.TEXTURE_2D,P,0,0,hA.width,hA.height,j,fA,hA.data):e.texImage2D(n.TEXTURE_2D,P,aA,hA.width,hA.height,0,j,fA,hA.data);w.generateMipmaps=!1}else VA?(b&&e.texStorage2D(n.TEXTURE_2D,cA,aA,G.width,G.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,G.width,G.height,j,fA,G.data)):e.texImage2D(n.TEXTURE_2D,0,aA,G.width,G.height,0,j,fA,G.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){VA&&b&&e.texStorage3D(n.TEXTURE_2D_ARRAY,cA,aA,SA[0].width,SA[0].height,G.depth);for(let P=0,eA=SA.length;P<eA;P++)hA=SA[P],w.format!==at?j!==null?VA?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,P,0,0,0,hA.width,hA.height,G.depth,j,hA.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,P,aA,hA.width,hA.height,G.depth,0,hA.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):VA?e.texSubImage3D(n.TEXTURE_2D_ARRAY,P,0,0,0,hA.width,hA.height,G.depth,j,fA,hA.data):e.texImage3D(n.TEXTURE_2D_ARRAY,P,aA,hA.width,hA.height,G.depth,0,j,fA,hA.data)}else{VA&&b&&e.texStorage2D(n.TEXTURE_2D,cA,aA,SA[0].width,SA[0].height);for(let P=0,eA=SA.length;P<eA;P++)hA=SA[P],w.format!==at?j!==null?VA?e.compressedTexSubImage2D(n.TEXTURE_2D,P,0,0,hA.width,hA.height,j,hA.data):e.compressedTexImage2D(n.TEXTURE_2D,P,aA,hA.width,hA.height,0,hA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):VA?e.texSubImage2D(n.TEXTURE_2D,P,0,0,hA.width,hA.height,j,fA,hA.data):e.texImage2D(n.TEXTURE_2D,P,aA,hA.width,hA.height,0,j,fA,hA.data)}else if(w.isDataArrayTexture)VA?(b&&e.texStorage3D(n.TEXTURE_2D_ARRAY,cA,aA,G.width,G.height,G.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,G.width,G.height,G.depth,j,fA,G.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,aA,G.width,G.height,G.depth,0,j,fA,G.data);else if(w.isData3DTexture)VA?(b&&e.texStorage3D(n.TEXTURE_3D,cA,aA,G.width,G.height,G.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,G.width,G.height,G.depth,j,fA,G.data)):e.texImage3D(n.TEXTURE_3D,0,aA,G.width,G.height,G.depth,0,j,fA,G.data);else if(w.isFramebufferTexture){if(b)if(VA)e.texStorage2D(n.TEXTURE_2D,cA,aA,G.width,G.height);else{let P=G.width,eA=G.height;for(let uA=0;uA<cA;uA++)e.texImage2D(n.TEXTURE_2D,uA,aA,P,eA,0,j,fA,null),P>>=1,eA>>=1}}else if(SA.length>0&&F){VA&&b&&e.texStorage2D(n.TEXTURE_2D,cA,aA,SA[0].width,SA[0].height);for(let P=0,eA=SA.length;P<eA;P++)hA=SA[P],VA?e.texSubImage2D(n.TEXTURE_2D,P,0,0,j,fA,hA):e.texImage2D(n.TEXTURE_2D,P,aA,j,fA,hA);w.generateMipmaps=!1}else VA?(b&&e.texStorage2D(n.TEXTURE_2D,cA,aA,G.width,G.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,j,fA,G)):e.texImage2D(n.TEXTURE_2D,0,aA,j,fA,G);y(w,F)&&U(tA),BA.__version=nA.version,w.onUpdate&&w.onUpdate(w)}M.__version=w.version}function ve(M,w,N){if(w.image.length!==6)return;const tA=vA(M,w),AA=w.source;e.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+N);const nA=t.get(AA);if(AA.version!==nA.__version||tA===!0){e.activeTexture(n.TEXTURE0+N),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const BA=w.isCompressedTexture||w.image[0].isCompressedTexture,iA=w.image[0]&&w.image[0].isDataTexture,G=[];for(let P=0;P<6;P++)!BA&&!iA?G[P]=v(w.image[P],!1,!0,l):G[P]=iA?w.image[P].image:w.image[P],G[P]=de(w,G[P]);const F=G[0],j=_(F)||a,fA=r.convert(w.format,w.colorSpace),aA=r.convert(w.type),hA=L(w.internalFormat,fA,aA,w.colorSpace),SA=a&&w.isVideoTexture!==!0,VA=nA.__version===void 0||tA===!0;let b=B(w,F,j);wA(n.TEXTURE_CUBE_MAP,w,j);let cA;if(BA){SA&&VA&&e.texStorage2D(n.TEXTURE_CUBE_MAP,b,hA,F.width,F.height);for(let P=0;P<6;P++){cA=G[P].mipmaps;for(let eA=0;eA<cA.length;eA++){const uA=cA[eA];w.format!==at?fA!==null?SA?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,eA,0,0,uA.width,uA.height,fA,uA.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,eA,hA,uA.width,uA.height,0,uA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):SA?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,eA,0,0,uA.width,uA.height,fA,aA,uA.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,eA,hA,uA.width,uA.height,0,fA,aA,uA.data)}}}else{cA=w.mipmaps,SA&&VA&&(cA.length>0&&b++,e.texStorage2D(n.TEXTURE_CUBE_MAP,b,hA,G[0].width,G[0].height));for(let P=0;P<6;P++)if(iA){SA?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,0,0,G[P].width,G[P].height,fA,aA,G[P].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,hA,G[P].width,G[P].height,0,fA,aA,G[P].data);for(let eA=0;eA<cA.length;eA++){const DA=cA[eA].image[P].image;SA?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,eA+1,0,0,DA.width,DA.height,fA,aA,DA.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,eA+1,hA,DA.width,DA.height,0,fA,aA,DA.data)}}else{SA?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,0,0,fA,aA,G[P]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,hA,fA,aA,G[P]);for(let eA=0;eA<cA.length;eA++){const uA=cA[eA];SA?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,eA+1,0,0,fA,aA,uA.image[P]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,eA+1,hA,fA,aA,uA.image[P])}}}y(w,j)&&U(n.TEXTURE_CUBE_MAP),nA.__version=AA.version,w.onUpdate&&w.onUpdate(w)}M.__version=w.version}function TA(M,w,N,tA,AA,nA){const BA=r.convert(N.format,N.colorSpace),iA=r.convert(N.type),G=L(N.internalFormat,BA,iA,N.colorSpace);if(!t.get(w).__hasExternalTextures){const j=Math.max(1,w.width>>nA),fA=Math.max(1,w.height>>nA);AA===n.TEXTURE_3D||AA===n.TEXTURE_2D_ARRAY?e.texImage3D(AA,nA,G,j,fA,w.depth,0,BA,iA,null):e.texImage2D(AA,nA,G,j,fA,0,BA,iA,null)}e.bindFramebuffer(n.FRAMEBUFFER,M),KA(w)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,tA,AA,t.get(N).__webglTexture,0,FA(w)):(AA===n.TEXTURE_2D||AA>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&AA<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,tA,AA,t.get(N).__webglTexture,nA),e.bindFramebuffer(n.FRAMEBUFFER,null)}function H(M,w,N){if(n.bindRenderbuffer(n.RENDERBUFFER,M),w.depthBuffer&&!w.stencilBuffer){let tA=n.DEPTH_COMPONENT16;if(N||KA(w)){const AA=w.depthTexture;AA&&AA.isDepthTexture&&(AA.type===Wt?tA=n.DEPTH_COMPONENT32F:AA.type===zt&&(tA=n.DEPTH_COMPONENT24));const nA=FA(w);KA(w)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,nA,tA,w.width,w.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,nA,tA,w.width,w.height)}else n.renderbufferStorage(n.RENDERBUFFER,tA,w.width,w.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,M)}else if(w.depthBuffer&&w.stencilBuffer){const tA=FA(w);N&&KA(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,tA,n.DEPTH24_STENCIL8,w.width,w.height):KA(w)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,tA,n.DEPTH24_STENCIL8,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,M)}else{const tA=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let AA=0;AA<tA.length;AA++){const nA=tA[AA],BA=r.convert(nA.format,nA.colorSpace),iA=r.convert(nA.type),G=L(nA.internalFormat,BA,iA,nA.colorSpace),F=FA(w);N&&KA(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,F,G,w.width,w.height):KA(w)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,F,G,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,G,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function le(M,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,M),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!t.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),J(w.depthTexture,0);const tA=t.get(w.depthTexture).__webglTexture,AA=FA(w);if(w.depthTexture.format===vn)KA(w)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,tA,0,AA):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,tA,0);else if(w.depthTexture.format===gi)KA(w)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,tA,0,AA):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,tA,0);else throw new Error("Unknown depthTexture format")}function _A(M){const w=t.get(M),N=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!w.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");le(w.__webglFramebuffer,M)}else if(N){w.__webglDepthbuffer=[];for(let tA=0;tA<6;tA++)e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[tA]),w.__webglDepthbuffer[tA]=n.createRenderbuffer(),H(w.__webglDepthbuffer[tA],M,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=n.createRenderbuffer(),H(w.__webglDepthbuffer,M,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function MA(M,w,N){const tA=t.get(M);w!==void 0&&TA(tA.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&_A(M)}function xA(M){const w=M.texture,N=t.get(M),tA=t.get(w);M.addEventListener("dispose",q),M.isWebGLMultipleRenderTargets!==!0&&(tA.__webglTexture===void 0&&(tA.__webglTexture=n.createTexture()),tA.__version=w.version,s.memory.textures++);const AA=M.isWebGLCubeRenderTarget===!0,nA=M.isWebGLMultipleRenderTargets===!0,BA=_(M)||a;if(AA){N.__webglFramebuffer=[];for(let iA=0;iA<6;iA++)if(a&&w.mipmaps&&w.mipmaps.length>0){N.__webglFramebuffer[iA]=[];for(let G=0;G<w.mipmaps.length;G++)N.__webglFramebuffer[iA][G]=n.createFramebuffer()}else N.__webglFramebuffer[iA]=n.createFramebuffer()}else{if(a&&w.mipmaps&&w.mipmaps.length>0){N.__webglFramebuffer=[];for(let iA=0;iA<w.mipmaps.length;iA++)N.__webglFramebuffer[iA]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(nA)if(i.drawBuffers){const iA=M.texture;for(let G=0,F=iA.length;G<F;G++){const j=t.get(iA[G]);j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&M.samples>0&&KA(M)===!1){const iA=nA?w:[w];N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let G=0;G<iA.length;G++){const F=iA[G];N.__webglColorRenderbuffer[G]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[G]);const j=r.convert(F.format,F.colorSpace),fA=r.convert(F.type),aA=L(F.internalFormat,j,fA,F.colorSpace,M.isXRRenderTarget===!0),hA=FA(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,hA,aA,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+G,n.RENDERBUFFER,N.__webglColorRenderbuffer[G])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),H(N.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(AA){e.bindTexture(n.TEXTURE_CUBE_MAP,tA.__webglTexture),wA(n.TEXTURE_CUBE_MAP,w,BA);for(let iA=0;iA<6;iA++)if(a&&w.mipmaps&&w.mipmaps.length>0)for(let G=0;G<w.mipmaps.length;G++)TA(N.__webglFramebuffer[iA][G],M,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+iA,G);else TA(N.__webglFramebuffer[iA],M,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+iA,0);y(w,BA)&&U(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(nA){const iA=M.texture;for(let G=0,F=iA.length;G<F;G++){const j=iA[G],fA=t.get(j);e.bindTexture(n.TEXTURE_2D,fA.__webglTexture),wA(n.TEXTURE_2D,j,BA),TA(N.__webglFramebuffer,M,j,n.COLOR_ATTACHMENT0+G,n.TEXTURE_2D,0),y(j,BA)&&U(n.TEXTURE_2D)}e.unbindTexture()}else{let iA=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(a?iA=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(iA,tA.__webglTexture),wA(iA,w,BA),a&&w.mipmaps&&w.mipmaps.length>0)for(let G=0;G<w.mipmaps.length;G++)TA(N.__webglFramebuffer[G],M,w,n.COLOR_ATTACHMENT0,iA,G);else TA(N.__webglFramebuffer,M,w,n.COLOR_ATTACHMENT0,iA,0);y(w,BA)&&U(iA),e.unbindTexture()}M.depthBuffer&&_A(M)}function qA(M){const w=_(M)||a,N=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let tA=0,AA=N.length;tA<AA;tA++){const nA=N[tA];if(y(nA,w)){const BA=M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,iA=t.get(nA).__webglTexture;e.bindTexture(BA,iA),U(BA),e.unbindTexture()}}}function HA(M){if(a&&M.samples>0&&KA(M)===!1){const w=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],N=M.width,tA=M.height;let AA=n.COLOR_BUFFER_BIT;const nA=[],BA=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,iA=t.get(M),G=M.isWebGLMultipleRenderTargets===!0;if(G)for(let F=0;F<w.length;F++)e.bindFramebuffer(n.FRAMEBUFFER,iA.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+F,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,iA.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+F,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,iA.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,iA.__webglFramebuffer);for(let F=0;F<w.length;F++){nA.push(n.COLOR_ATTACHMENT0+F),M.depthBuffer&&nA.push(BA);const j=iA.__ignoreDepthValues!==void 0?iA.__ignoreDepthValues:!1;if(j===!1&&(M.depthBuffer&&(AA|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&(AA|=n.STENCIL_BUFFER_BIT)),G&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,iA.__webglColorRenderbuffer[F]),j===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[BA]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[BA])),G){const fA=t.get(w[F]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,fA,0)}n.blitFramebuffer(0,0,N,tA,0,0,N,tA,AA,n.NEAREST),p&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,nA)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),G)for(let F=0;F<w.length;F++){e.bindFramebuffer(n.FRAMEBUFFER,iA.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+F,n.RENDERBUFFER,iA.__webglColorRenderbuffer[F]);const j=t.get(w[F]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,iA.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+F,n.TEXTURE_2D,j,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,iA.__webglMultisampledFramebuffer)}}function FA(M){return Math.min(u,M.samples)}function KA(M){const w=t.get(M);return a&&M.samples>0&&A.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ce(M){const w=s.render.frame;g.get(M)!==w&&(g.set(M,w),M.update())}function de(M,w){const N=M.colorSpace,tA=M.format,AA=M.type;return M.isCompressedTexture===!0||M.format===qa||N!==pt&&N!==Cn&&(N===LA?a===!1?A.has("EXT_sRGB")===!0&&tA===at?(M.format=qa,M.minFilter=Je,M.generateMipmaps=!1):w=Iu.sRGBToLinear(w):(tA!==at||AA!==jt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),w}this.allocateTextureUnit=X,this.resetTextureUnits=k,this.setTexture2D=J,this.setTexture2DArray=D,this.setTexture3D=K,this.setTextureCube=rA,this.rebindTextures=MA,this.setupRenderTarget=xA,this.updateRenderTargetMipmap=qA,this.updateMultisampleRenderTarget=HA,this.setupDepthRenderbuffer=_A,this.setupFrameBufferTexture=TA,this.useMultisampledRTT=KA}function yB(n,A,e){const t=e.isWebGL2;function i(r,s=Cn){let a;if(r===jt)return n.UNSIGNED_BYTE;if(r===Uu)return n.UNSIGNED_SHORT_4_4_4_4;if(r===yu)return n.UNSIGNED_SHORT_5_5_5_1;if(r===kf)return n.BYTE;if(r===zf)return n.SHORT;if(r===So)return n.UNSIGNED_SHORT;if(r===xu)return n.INT;if(r===zt)return n.UNSIGNED_INT;if(r===Wt)return n.FLOAT;if(r===er)return t?n.HALF_FLOAT:(a=A.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Wf)return n.ALPHA;if(r===at)return n.RGBA;if(r===Xf)return n.LUMINANCE;if(r===Yf)return n.LUMINANCE_ALPHA;if(r===vn)return n.DEPTH_COMPONENT;if(r===gi)return n.DEPTH_STENCIL;if(r===qa)return a=A.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Jf)return n.RED;if(r===Su)return n.RED_INTEGER;if(r===Zf)return n.RG;if(r===Mu)return n.RG_INTEGER;if(r===Fu)return n.RGBA_INTEGER;if(r===Js||r===Zs||r===qs||r===js)if(s===LA)if(a=A.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Js)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Zs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===qs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===js)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=A.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Js)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Zs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===qs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===js)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===il||r===rl||r===sl||r===al)if(a=A.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===il)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===rl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===sl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===al)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===qf)return a=A.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ol||r===ll)if(a=A.get("WEBGL_compressed_texture_etc"),a!==null){if(r===ol)return s===LA?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===ll)return s===LA?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===cl||r===ul||r===hl||r===fl||r===dl||r===pl||r===gl||r===ml||r===Bl||r===wl||r===vl||r===_l||r===Cl||r===El)if(a=A.get("WEBGL_compressed_texture_astc"),a!==null){if(r===cl)return s===LA?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ul)return s===LA?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===hl)return s===LA?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===fl)return s===LA?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===dl)return s===LA?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===pl)return s===LA?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===gl)return s===LA?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ml)return s===LA?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Bl)return s===LA?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===wl)return s===LA?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===vl)return s===LA?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===_l)return s===LA?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Cl)return s===LA?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===El)return s===LA?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===$s)if(a=A.get("EXT_texture_compression_bptc"),a!==null){if(r===$s)return s===LA?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===jf||r===xl||r===Ul||r===yl)if(a=A.get("EXT_texture_compression_rgtc"),a!==null){if(r===$s)return a.COMPRESSED_RED_RGTC1_EXT;if(r===xl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ul)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===yl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===wn?t?n.UNSIGNED_INT_24_8:(a=A.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:i}}class SB extends Ze{constructor(A=[]){super(),this.isArrayCamera=!0,this.cameras=A}}class Ii extends ke{constructor(){super(),this.isGroup=!0,this.type="Group"}}const MB={type:"move"};class _a{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ii,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ii,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ii,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(A){return this._targetRay!==null&&this._targetRay.dispatchEvent(A),this._grip!==null&&this._grip.dispatchEvent(A),this._hand!==null&&this._hand.dispatchEvent(A),this}connect(A){if(A&&A.hand){const e=this._hand;if(e)for(const t of A.hand.values())this._getHandJoint(e,t)}return this.dispatchEvent({type:"connected",data:A}),this}disconnect(A){return this.dispatchEvent({type:"disconnected",data:A}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(A,e,t){let i=null,r=null,s=null;const a=this._targetRay,o=this._grip,l=this._hand;if(A&&e.session.visibilityState!=="visible-blurred"){if(l&&A.hand){s=!0;for(const m of A.hand.values()){const d=e.getJointPose(m,t),f=this._getHandJoint(l,m);d!==null&&(f.matrix.fromArray(d.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=d.radius),f.visible=d!==null}const c=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],h=c.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&h>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:A.handedness,target:this})):!l.inputState.pinching&&h<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:A.handedness,target:this}))}else o!==null&&A.gripSpace&&(r=e.getPose(A.gripSpace,t),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1));a!==null&&(i=e.getPose(A.targetRaySpace,t),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(MB)))}return a!==null&&(a.visible=i!==null),o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(A,e){if(A.joints[e.jointName]===void 0){const t=new Ii;t.matrixAutoUpdate=!1,t.visible=!1,A.joints[e.jointName]=t,A.add(t)}return A.joints[e.jointName]}}class FB extends Ke{constructor(A,e,t,i,r,s,a,o,l,c){if(c=c!==void 0?c:vn,c!==vn&&c!==gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");t===void 0&&c===vn&&(t=zt),t===void 0&&c===gi&&(t=wn),super(null,i,r,s,a,o,c,t,l),this.isDepthTexture=!0,this.image={width:A,height:e},this.magFilter=a!==void 0?a:He,this.minFilter=o!==void 0?o:He,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(A){return super.copy(A),this.compareFunction=A.compareFunction,this}toJSON(A){const e=super.toJSON(A);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class bB extends Mn{constructor(A,e){super();const t=this;let i=null,r=1,s=null,a="local-floor",o=1,l=null,c=null,u=null,h=null,p=null,g=null;const m=e.getContextAttributes();let d=null,f=null;const C=[],v=[],_=new Ze;_.layers.enable(1),_.viewport=new Ee;const E=new Ze;E.layers.enable(2),E.viewport=new Ee;const y=[_,E],U=new SB;U.layers.enable(1),U.layers.enable(2);let L=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let K=C[D];return K===void 0&&(K=new _a,C[D]=K),K.getTargetRaySpace()},this.getControllerGrip=function(D){let K=C[D];return K===void 0&&(K=new _a,C[D]=K),K.getGripSpace()},this.getHand=function(D){let K=C[D];return K===void 0&&(K=new _a,C[D]=K),K.getHandSpace()};function S(D){const K=v.indexOf(D.inputSource);if(K===-1)return;const rA=C[K];rA!==void 0&&(rA.update(D.inputSource,D.frame,l||s),rA.dispatchEvent({type:D.type,data:D.inputSource}))}function Y(){i.removeEventListener("select",S),i.removeEventListener("selectstart",S),i.removeEventListener("selectend",S),i.removeEventListener("squeeze",S),i.removeEventListener("squeezestart",S),i.removeEventListener("squeezeend",S),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",q);for(let D=0;D<C.length;D++){const K=v[D];K!==null&&(v[D]=null,C[D].disconnect(K))}L=null,B=null,A.setRenderTarget(d),p=null,h=null,u=null,i=null,f=null,J.stop(),t.isPresenting=!1,t.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){r=D,t.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){a=D,t.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(D){l=D},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(D){if(i=D,i!==null){if(d=A.getRenderTarget(),i.addEventListener("select",S),i.addEventListener("selectstart",S),i.addEventListener("selectend",S),i.addEventListener("squeeze",S),i.addEventListener("squeezestart",S),i.addEventListener("squeezeend",S),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||A.capabilities.isWebGL2===!1){const K={antialias:i.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,K),i.updateRenderState({baseLayer:p}),f=new Un(p.framebufferWidth,p.framebufferHeight,{format:at,type:jt,colorSpace:A.outputColorSpace,stencilBuffer:m.stencil})}else{let K=null,rA=null,sA=null;m.depth&&(sA=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=m.stencil?gi:vn,rA=m.stencil?wn:zt);const oA={colorFormat:e.RGBA8,depthFormat:sA,scaleFactor:r};u=new XRWebGLBinding(i,e),h=u.createProjectionLayer(oA),i.updateRenderState({layers:[h]}),f=new Un(h.textureWidth,h.textureHeight,{format:at,type:jt,depthTexture:new FB(h.textureWidth,h.textureHeight,rA,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:m.stencil,colorSpace:A.outputColorSpace,samples:m.antialias?4:0});const mA=A.properties.get(f);mA.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(o),l=null,s=await i.requestReferenceSpace(a),J.setContext(i),J.start(),t.isPresenting=!0,t.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function q(D){for(let K=0;K<D.removed.length;K++){const rA=D.removed[K],sA=v.indexOf(rA);sA>=0&&(v[sA]=null,C[sA].disconnect(rA))}for(let K=0;K<D.added.length;K++){const rA=D.added[K];let sA=v.indexOf(rA);if(sA===-1){for(let mA=0;mA<C.length;mA++)if(mA>=v.length){v.push(rA),sA=mA;break}else if(v[mA]===null){v[mA]=rA,sA=mA;break}if(sA===-1)break}const oA=C[sA];oA&&oA.connect(rA)}}const T=new Q,O=new Q;function V(D,K,rA){T.setFromMatrixPosition(K.matrixWorld),O.setFromMatrixPosition(rA.matrixWorld);const sA=T.distanceTo(O),oA=K.projectionMatrix.elements,mA=rA.projectionMatrix.elements,wA=oA[14]/(oA[10]-1),vA=oA[14]/(oA[10]+1),kA=(oA[9]+1)/oA[5],ve=(oA[9]-1)/oA[5],TA=(oA[8]-1)/oA[0],H=(mA[8]+1)/mA[0],le=wA*TA,_A=wA*H,MA=sA/(-TA+H),xA=MA*-TA;K.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(xA),D.translateZ(MA),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert();const qA=wA+MA,HA=vA+MA,FA=le-xA,KA=_A+(sA-xA),ce=kA*vA/HA*qA,de=ve*vA/HA*qA;D.projectionMatrix.makePerspective(FA,KA,ce,de,qA,HA),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}function Z(D,K){K===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(K.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(i===null)return;U.near=E.near=_.near=D.near,U.far=E.far=_.far=D.far,(L!==U.near||B!==U.far)&&(i.updateRenderState({depthNear:U.near,depthFar:U.far}),L=U.near,B=U.far);const K=D.parent,rA=U.cameras;Z(U,K);for(let sA=0;sA<rA.length;sA++)Z(rA[sA],K);rA.length===2?V(U,_,E):U.projectionMatrix.copy(_.projectionMatrix),k(D,U,K)};function k(D,K,rA){rA===null?D.matrix.copy(K.matrixWorld):(D.matrix.copy(rA.matrixWorld),D.matrix.invert(),D.matrix.multiply(K.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0);const sA=D.children;for(let oA=0,mA=sA.length;oA<mA;oA++)sA[oA].updateMatrixWorld(!0);D.projectionMatrix.copy(K.projectionMatrix),D.projectionMatrixInverse.copy(K.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=tr*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(h===null&&p===null))return o},this.setFoveation=function(D){o=D,h!==null&&(h.fixedFoveation=D),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=D)};let X=null;function $(D,K){if(c=K.getViewerPose(l||s),g=K,c!==null){const rA=c.views;p!==null&&(A.setRenderTargetFramebuffer(f,p.framebuffer),A.setRenderTarget(f));let sA=!1;rA.length!==U.cameras.length&&(U.cameras.length=0,sA=!0);for(let oA=0;oA<rA.length;oA++){const mA=rA[oA];let wA=null;if(p!==null)wA=p.getViewport(mA);else{const kA=u.getViewSubImage(h,mA);wA=kA.viewport,oA===0&&(A.setRenderTargetTextures(f,kA.colorTexture,h.ignoreDepthValues?void 0:kA.depthStencilTexture),A.setRenderTarget(f))}let vA=y[oA];vA===void 0&&(vA=new Ze,vA.layers.enable(oA),vA.viewport=new Ee,y[oA]=vA),vA.matrix.fromArray(mA.transform.matrix),vA.matrix.decompose(vA.position,vA.quaternion,vA.scale),vA.projectionMatrix.fromArray(mA.projectionMatrix),vA.projectionMatrixInverse.copy(vA.projectionMatrix).invert(),vA.viewport.set(wA.x,wA.y,wA.width,wA.height),oA===0&&(U.matrix.copy(vA.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),sA===!0&&U.cameras.push(vA)}}for(let rA=0;rA<C.length;rA++){const sA=v[rA],oA=C[rA];sA!==null&&oA!==void 0&&oA.update(sA,K,l||s)}X&&X(D,K),K.detectedPlanes&&t.dispatchEvent({type:"planesdetected",data:K}),g=null}const J=new zu;J.setAnimationLoop($),this.setAnimationLoop=function(D){X=D},this.dispose=function(){}}}function TB(n,A){function e(d,f){d.matrixAutoUpdate===!0&&d.updateMatrix(),f.value.copy(d.matrix)}function t(d,f){f.color.getRGB(d.fogColor.value,Gu(n)),f.isFog?(d.fogNear.value=f.near,d.fogFar.value=f.far):f.isFogExp2&&(d.fogDensity.value=f.density)}function i(d,f,C,v,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(d,f):f.isMeshToonMaterial?(r(d,f),u(d,f)):f.isMeshPhongMaterial?(r(d,f),c(d,f)):f.isMeshStandardMaterial?(r(d,f),h(d,f),f.isMeshPhysicalMaterial&&p(d,f,_)):f.isMeshMatcapMaterial?(r(d,f),g(d,f)):f.isMeshDepthMaterial?r(d,f):f.isMeshDistanceMaterial?(r(d,f),m(d,f)):f.isMeshNormalMaterial?r(d,f):f.isLineBasicMaterial?(s(d,f),f.isLineDashedMaterial&&a(d,f)):f.isPointsMaterial?o(d,f,C,v):f.isSpriteMaterial?l(d,f):f.isShadowMaterial?(d.color.value.copy(f.color),d.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(d,f){d.opacity.value=f.opacity,f.color&&d.diffuse.value.copy(f.color),f.emissive&&d.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(d.map.value=f.map,e(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,e(f.alphaMap,d.alphaMapTransform)),f.bumpMap&&(d.bumpMap.value=f.bumpMap,e(f.bumpMap,d.bumpMapTransform),d.bumpScale.value=f.bumpScale,f.side===Pe&&(d.bumpScale.value*=-1)),f.normalMap&&(d.normalMap.value=f.normalMap,e(f.normalMap,d.normalMapTransform),d.normalScale.value.copy(f.normalScale),f.side===Pe&&d.normalScale.value.negate()),f.displacementMap&&(d.displacementMap.value=f.displacementMap,e(f.displacementMap,d.displacementMapTransform),d.displacementScale.value=f.displacementScale,d.displacementBias.value=f.displacementBias),f.emissiveMap&&(d.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,d.emissiveMapTransform)),f.specularMap&&(d.specularMap.value=f.specularMap,e(f.specularMap,d.specularMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest);const C=A.get(f).envMap;if(C&&(d.envMap.value=C,d.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=f.reflectivity,d.ior.value=f.ior,d.refractionRatio.value=f.refractionRatio),f.lightMap){d.lightMap.value=f.lightMap;const v=n._useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=f.lightMapIntensity*v,e(f.lightMap,d.lightMapTransform)}f.aoMap&&(d.aoMap.value=f.aoMap,d.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,d.aoMapTransform))}function s(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,f.map&&(d.map.value=f.map,e(f.map,d.mapTransform))}function a(d,f){d.dashSize.value=f.dashSize,d.totalSize.value=f.dashSize+f.gapSize,d.scale.value=f.scale}function o(d,f,C,v){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.size.value=f.size*C,d.scale.value=v*.5,f.map&&(d.map.value=f.map,e(f.map,d.uvTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,e(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function l(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.rotation.value=f.rotation,f.map&&(d.map.value=f.map,e(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,e(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function c(d,f){d.specular.value.copy(f.specular),d.shininess.value=Math.max(f.shininess,1e-4)}function u(d,f){f.gradientMap&&(d.gradientMap.value=f.gradientMap)}function h(d,f){d.metalness.value=f.metalness,f.metalnessMap&&(d.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,d.metalnessMapTransform)),d.roughness.value=f.roughness,f.roughnessMap&&(d.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,d.roughnessMapTransform)),A.get(f).envMap&&(d.envMapIntensity.value=f.envMapIntensity)}function p(d,f,C){d.ior.value=f.ior,f.sheen>0&&(d.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),d.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(d.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,d.sheenColorMapTransform)),f.sheenRoughnessMap&&(d.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,d.sheenRoughnessMapTransform))),f.clearcoat>0&&(d.clearcoat.value=f.clearcoat,d.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(d.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,d.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(d.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Pe&&d.clearcoatNormalScale.value.negate())),f.iridescence>0&&(d.iridescence.value=f.iridescence,d.iridescenceIOR.value=f.iridescenceIOR,d.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(d.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,d.iridescenceMapTransform)),f.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),f.transmission>0&&(d.transmission.value=f.transmission,d.transmissionSamplerMap.value=C.texture,d.transmissionSamplerSize.value.set(C.width,C.height),f.transmissionMap&&(d.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,d.transmissionMapTransform)),d.thickness.value=f.thickness,f.thicknessMap&&(d.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=f.attenuationDistance,d.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(d.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(d.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=f.specularIntensity,d.specularColor.value.copy(f.specularColor),f.specularColorMap&&(d.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,d.specularColorMapTransform)),f.specularIntensityMap&&(d.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,f){f.matcap&&(d.matcap.value=f.matcap)}function m(d,f){const C=A.get(f).light;d.referencePosition.value.setFromMatrixPosition(C.matrixWorld),d.nearDistance.value=C.shadow.camera.near,d.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function QB(n,A,e,t){let i={},r={},s=[];const a=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function o(C,v){const _=v.program;t.uniformBlockBinding(C,_)}function l(C,v){let _=i[C.id];_===void 0&&(g(C),_=c(C),i[C.id]=_,C.addEventListener("dispose",d));const E=v.program;t.updateUBOMapping(C,E);const y=A.render.frame;r[C.id]!==y&&(h(C),r[C.id]=y)}function c(C){const v=u();C.__bindingPointIndex=v;const _=n.createBuffer(),E=C.__size,y=C.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,E,y),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,_),_}function u(){for(let C=0;C<a;C++)if(s.indexOf(C)===-1)return s.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(C){const v=i[C.id],_=C.uniforms,E=C.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let y=0,U=_.length;y<U;y++){const L=_[y];if(p(L,y,E)===!0){const B=L.__offset,S=Array.isArray(L.value)?L.value:[L.value];let Y=0;for(let q=0;q<S.length;q++){const T=S[q],O=m(T);typeof T=="number"?(L.__data[0]=T,n.bufferSubData(n.UNIFORM_BUFFER,B+Y,L.__data)):T.isMatrix3?(L.__data[0]=T.elements[0],L.__data[1]=T.elements[1],L.__data[2]=T.elements[2],L.__data[3]=T.elements[0],L.__data[4]=T.elements[3],L.__data[5]=T.elements[4],L.__data[6]=T.elements[5],L.__data[7]=T.elements[0],L.__data[8]=T.elements[6],L.__data[9]=T.elements[7],L.__data[10]=T.elements[8],L.__data[11]=T.elements[0]):(T.toArray(L.__data,Y),Y+=O.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,L.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(C,v,_){const E=C.value;if(_[v]===void 0){if(typeof E=="number")_[v]=E;else{const y=Array.isArray(E)?E:[E],U=[];for(let L=0;L<y.length;L++)U.push(y[L].clone());_[v]=U}return!0}else if(typeof E=="number"){if(_[v]!==E)return _[v]=E,!0}else{const y=Array.isArray(_[v])?_[v]:[_[v]],U=Array.isArray(E)?E:[E];for(let L=0;L<y.length;L++){const B=y[L];if(B.equals(U[L])===!1)return B.copy(U[L]),!0}}return!1}function g(C){const v=C.uniforms;let _=0;const E=16;let y=0;for(let U=0,L=v.length;U<L;U++){const B=v[U],S={boundary:0,storage:0},Y=Array.isArray(B.value)?B.value:[B.value];for(let q=0,T=Y.length;q<T;q++){const O=Y[q],V=m(O);S.boundary+=V.boundary,S.storage+=V.storage}if(B.__data=new Float32Array(S.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=_,U>0){y=_%E;const q=E-y;y!==0&&q-S.boundary<0&&(_+=E-y,B.__offset=_)}_+=S.storage}return y=_%E,y>0&&(_+=E-y),C.__size=_,C.__cache={},this}function m(C){const v={boundary:0,storage:0};return typeof C=="number"?(v.boundary=4,v.storage=4):C.isVector2?(v.boundary=8,v.storage=8):C.isVector3||C.isColor?(v.boundary=16,v.storage=12):C.isVector4?(v.boundary=16,v.storage=16):C.isMatrix3?(v.boundary=48,v.storage=48):C.isMatrix4?(v.boundary=64,v.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),v}function d(C){const v=C.target;v.removeEventListener("dispose",d);const _=s.indexOf(v.__bindingPointIndex);s.splice(_,1),n.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function f(){for(const C in i)n.deleteBuffer(i[C]);s=[],i={},r={}}return{bind:o,update:l,dispose:f}}function IB(){const n=ms("canvas");return n.style.display="block",n}class Zu{constructor(A={}){const{canvas:e=IB(),context:t=null,depth:i=!0,stencil:r=!0,alpha:s=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1}=A;this.isWebGLRenderer=!0;let h;t!==null?h=t.getContextAttributes().alpha:h=s;const p=new Uint32Array(4),g=new Int32Array(4);let m=null,d=null;const f=[],C=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=LA,this._useLegacyLights=!1,this.toneMapping=qt,this.toneMappingExposure=1;const v=this;let _=!1,E=0,y=0,U=null,L=-1,B=null;const S=new Ee,Y=new Ee;let q=null;const T=new YA(0);let O=0,V=e.width,Z=e.height,k=1,X=null,$=null;const J=new Ee(0,0,V,Z),D=new Ee(0,0,V,Z);let K=!1;const rA=new ku;let sA=!1,oA=!1,mA=null;const wA=new we,vA=new RA,kA=new Q,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function TA(){return U===null?k:1}let H=t;function le(x,R){for(let W=0;W<x.length;W++){const I=x[W],z=e.getContext(I,R);if(z!==null)return z}return null}try{const x={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${yo}`),e.addEventListener("webglcontextlost",cA,!1),e.addEventListener("webglcontextrestored",P,!1),e.addEventListener("webglcontextcreationerror",eA,!1),H===null){const R=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&R.shift(),H=le(R,x),H===null)throw le(R)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let _A,MA,xA,qA,HA,FA,KA,ce,de,M,w,N,tA,AA,nA,BA,iA,G,F,j,fA,aA,hA,SA;function VA(){_A=new K0(H),MA=new H0(H,_A,A),_A.init(MA),aA=new yB(H,_A,MA),xA=new xB(H,_A,MA),qA=new W0(H),HA=new cB,FA=new UB(H,_A,xA,HA,MA,aA,qA),KA=new P0(v),ce=new V0(v),de=new ep(H,MA),hA=new L0(H,_A,de,MA),M=new k0(H,de,qA,hA),w=new Z0(H,M,de,qA),F=new J0(H,MA,FA),BA=new D0(HA),N=new lB(v,KA,ce,_A,MA,hA,BA),tA=new TB(v,HA),AA=new hB,nA=new BB(_A,MA),G=new I0(v,KA,ce,xA,w,h,o),iA=new EB(v,w,MA),SA=new QB(H,qA,MA,xA),j=new R0(H,_A,qA,MA),fA=new z0(H,_A,qA,MA),qA.programs=N.programs,v.capabilities=MA,v.extensions=_A,v.properties=HA,v.renderLists=AA,v.shadowMap=iA,v.state=xA,v.info=qA}VA();const b=new bB(v,H);this.xr=b,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const x=_A.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=_A.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(x){x!==void 0&&(k=x,this.setSize(V,Z,!1))},this.getSize=function(x){return x.set(V,Z)},this.setSize=function(x,R,W=!0){if(b.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=x,Z=R,e.width=Math.floor(x*k),e.height=Math.floor(R*k),W===!0&&(e.style.width=x+"px",e.style.height=R+"px"),this.setViewport(0,0,x,R)},this.getDrawingBufferSize=function(x){return x.set(V*k,Z*k).floor()},this.setDrawingBufferSize=function(x,R,W){V=x,Z=R,k=W,e.width=Math.floor(x*W),e.height=Math.floor(R*W),this.setViewport(0,0,x,R)},this.getCurrentViewport=function(x){return x.copy(S)},this.getViewport=function(x){return x.copy(J)},this.setViewport=function(x,R,W,I){x.isVector4?J.set(x.x,x.y,x.z,x.w):J.set(x,R,W,I),xA.viewport(S.copy(J).multiplyScalar(k).floor())},this.getScissor=function(x){return x.copy(D)},this.setScissor=function(x,R,W,I){x.isVector4?D.set(x.x,x.y,x.z,x.w):D.set(x,R,W,I),xA.scissor(Y.copy(D).multiplyScalar(k).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(x){xA.setScissorTest(K=x)},this.setOpaqueSort=function(x){X=x},this.setTransparentSort=function(x){$=x},this.getClearColor=function(x){return x.copy(G.getClearColor())},this.setClearColor=function(){G.setClearColor.apply(G,arguments)},this.getClearAlpha=function(){return G.getClearAlpha()},this.setClearAlpha=function(){G.setClearAlpha.apply(G,arguments)},this.clear=function(x=!0,R=!0,W=!0){let I=0;if(x){let z=!1;if(U!==null){const gA=U.texture.format;z=gA===Fu||gA===Mu||gA===Su}if(z){const gA=U.texture.type,CA=gA===jt||gA===zt||gA===So||gA===wn||gA===Uu||gA===yu,UA=G.getClearColor(),yA=G.getClearAlpha(),OA=UA.r,EA=UA.g,QA=UA.b;CA?(p[0]=OA,p[1]=EA,p[2]=QA,p[3]=yA,H.clearBufferuiv(H.COLOR,0,p)):(g[0]=OA,g[1]=EA,g[2]=QA,g[3]=yA,H.clearBufferiv(H.COLOR,0,g))}else I|=H.COLOR_BUFFER_BIT}R&&(I|=H.DEPTH_BUFFER_BIT),W&&(I|=H.STENCIL_BUFFER_BIT),H.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",cA,!1),e.removeEventListener("webglcontextrestored",P,!1),e.removeEventListener("webglcontextcreationerror",eA,!1),AA.dispose(),nA.dispose(),HA.dispose(),KA.dispose(),ce.dispose(),w.dispose(),hA.dispose(),SA.dispose(),N.dispose(),b.dispose(),b.removeEventListener("sessionstart",$A),b.removeEventListener("sessionend",ut),mA&&(mA.dispose(),mA=null),be.stop()};function cA(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const x=qA.autoReset,R=iA.enabled,W=iA.autoUpdate,I=iA.needsUpdate,z=iA.type;VA(),qA.autoReset=x,iA.enabled=R,iA.autoUpdate=W,iA.needsUpdate=I,iA.type=z}function eA(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function uA(x){const R=x.target;R.removeEventListener("dispose",uA),DA(R)}function DA(x){WA(x),HA.remove(x)}function WA(x){const R=HA.get(x).programs;R!==void 0&&(R.forEach(function(W){N.releaseProgram(W)}),x.isShaderMaterial&&N.releaseShaderCache(x))}this.renderBufferDirect=function(x,R,W,I,z,gA){R===null&&(R=ve);const CA=z.isMesh&&z.matrixWorld.determinant()<0,UA=cf(x,R,W,I,z);xA.setMaterial(I,CA);let yA=W.index,OA=1;if(I.wireframe===!0){if(yA=M.getWireframeAttribute(W),yA===void 0)return;OA=2}const EA=W.drawRange,QA=W.attributes.position;let ee=EA.start*OA,te=(EA.start+EA.count)*OA;gA!==null&&(ee=Math.max(ee,gA.start*OA),te=Math.min(te,(gA.start+gA.count)*OA)),yA!==null?(ee=Math.max(ee,0),te=Math.min(te,yA.count)):QA!=null&&(ee=Math.max(ee,0),te=Math.min(te,QA.count));const ze=te-ee;if(ze<0||ze===1/0)return;hA.setup(z,I,UA,W,yA);let Bt,re=j;if(yA!==null&&(Bt=de.get(yA),re=fA,re.setIndex(Bt)),z.isMesh)I.wireframe===!0?(xA.setLineWidth(I.wireframeLinewidth*TA()),re.setMode(H.LINES)):re.setMode(H.TRIANGLES);else if(z.isLine){let NA=I.linewidth;NA===void 0&&(NA=1),xA.setLineWidth(NA*TA()),z.isLineSegments?re.setMode(H.LINES):z.isLineLoop?re.setMode(H.LINE_LOOP):re.setMode(H.LINE_STRIP)}else z.isPoints?re.setMode(H.POINTS):z.isSprite&&re.setMode(H.TRIANGLES);if(z.isInstancedMesh)re.renderInstances(ee,ze,z.count);else if(W.isInstancedBufferGeometry){const NA=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ks=Math.min(W.instanceCount,NA);re.renderInstances(ee,ze,Ks)}else re.render(ee,ze)},this.compile=function(x,R){function W(I,z,gA){I.transparent===!0&&I.side===bt&&I.forceSinglePass===!1?(I.side=Pe,I.needsUpdate=!0,mr(I,z,gA),I.side=en,I.needsUpdate=!0,mr(I,z,gA),I.side=bt):mr(I,z,gA)}d=nA.get(x),d.init(),C.push(d),x.traverseVisible(function(I){I.isLight&&I.layers.test(R.layers)&&(d.pushLight(I),I.castShadow&&d.pushShadow(I))}),d.setupLights(v._useLegacyLights),x.traverse(function(I){const z=I.material;if(z)if(Array.isArray(z))for(let gA=0;gA<z.length;gA++){const CA=z[gA];W(CA,x,I)}else W(z,x,I)}),C.pop(),d=null};let jA=null;function Rt(x){jA&&jA(x)}function $A(){be.stop()}function ut(){be.start()}const be=new zu;be.setAnimationLoop(Rt),typeof self<"u"&&be.setContext(self),this.setAnimationLoop=function(x){jA=x,b.setAnimationLoop(x),x===null?be.stop():be.start()},b.addEventListener("sessionstart",$A),b.addEventListener("sessionend",ut),this.render=function(x,R){if(R!==void 0&&R.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),b.enabled===!0&&b.isPresenting===!0&&(b.cameraAutoUpdate===!0&&b.updateCamera(R),R=b.getCamera()),x.isScene===!0&&x.onBeforeRender(v,x,R,U),d=nA.get(x,C.length),d.init(),C.push(d),wA.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),rA.setFromProjectionMatrix(wA),oA=this.localClippingEnabled,sA=BA.init(this.clippingPlanes,oA),m=AA.get(x,f.length),m.init(),f.push(m),ko(x,R,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(X,$),this.info.render.frame++,sA===!0&&BA.beginShadows();const W=d.state.shadowsArray;if(iA.render(W,x,R),sA===!0&&BA.endShadows(),this.info.autoReset===!0&&this.info.reset(),G.render(m,x),d.setupLights(v._useLegacyLights),R.isArrayCamera){const I=R.cameras;for(let z=0,gA=I.length;z<gA;z++){const CA=I[z];zo(m,x,CA,CA.viewport)}}else zo(m,x,R);U!==null&&(FA.updateMultisampleRenderTarget(U),FA.updateRenderTargetMipmap(U)),x.isScene===!0&&x.onAfterRender(v,x,R),hA.resetDefaultState(),L=-1,B=null,C.pop(),C.length>0?d=C[C.length-1]:d=null,f.pop(),f.length>0?m=f[f.length-1]:m=null};function ko(x,R,W,I){if(x.visible===!1)return;if(x.layers.test(R.layers)){if(x.isGroup)W=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(R);else if(x.isLight)d.pushLight(x),x.castShadow&&d.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||rA.intersectsSprite(x)){I&&kA.setFromMatrixPosition(x.matrixWorld).applyMatrix4(wA);const CA=w.update(x),UA=x.material;UA.visible&&m.push(x,CA,UA,W,kA.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||rA.intersectsObject(x))){const CA=w.update(x),UA=x.material;if(I&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),kA.copy(x.boundingSphere.center)):(CA.boundingSphere===null&&CA.computeBoundingSphere(),kA.copy(CA.boundingSphere.center)),kA.applyMatrix4(x.matrixWorld).applyMatrix4(wA)),Array.isArray(UA)){const yA=CA.groups;for(let OA=0,EA=yA.length;OA<EA;OA++){const QA=yA[OA],ee=UA[QA.materialIndex];ee&&ee.visible&&m.push(x,CA,ee,W,kA.z,QA)}}else UA.visible&&m.push(x,CA,UA,W,kA.z,null)}}const gA=x.children;for(let CA=0,UA=gA.length;CA<UA;CA++)ko(gA[CA],R,W,I)}function zo(x,R,W,I){const z=x.opaque,gA=x.transmissive,CA=x.transparent;d.setupLightsView(W),sA===!0&&BA.setGlobalState(v.clippingPlanes,W),gA.length>0&&lf(z,gA,R,W),I&&xA.viewport(S.copy(I)),z.length>0&&gr(z,R,W),gA.length>0&&gr(gA,R,W),CA.length>0&&gr(CA,R,W),xA.buffers.depth.setTest(!0),xA.buffers.depth.setMask(!0),xA.buffers.color.setMask(!0),xA.setPolygonOffset(!1)}function lf(x,R,W,I){const z=MA.isWebGL2;mA===null&&(mA=new Un(1,1,{generateMipmaps:!0,type:_A.has("EXT_color_buffer_half_float")?er:jt,minFilter:Ar,samples:z?4:0})),v.getDrawingBufferSize(vA),z?mA.setSize(vA.x,vA.y):mA.setSize(gs(vA.x),gs(vA.y));const gA=v.getRenderTarget();v.setRenderTarget(mA),v.getClearColor(T),O=v.getClearAlpha(),O<1&&v.setClearColor(16777215,.5),v.clear();const CA=v.toneMapping;v.toneMapping=qt,gr(x,W,I),FA.updateMultisampleRenderTarget(mA),FA.updateRenderTargetMipmap(mA);let UA=!1;for(let yA=0,OA=R.length;yA<OA;yA++){const EA=R[yA],QA=EA.object,ee=EA.geometry,te=EA.material,ze=EA.group;if(te.side===bt&&QA.layers.test(I.layers)){const Bt=te.side;te.side=Pe,te.needsUpdate=!0,Wo(QA,W,I,ee,te,ze),te.side=Bt,te.needsUpdate=!0,UA=!0}}UA===!0&&(FA.updateMultisampleRenderTarget(mA),FA.updateRenderTargetMipmap(mA)),v.setRenderTarget(gA),v.setClearColor(T,O),v.toneMapping=CA}function gr(x,R,W){const I=R.isScene===!0?R.overrideMaterial:null;for(let z=0,gA=x.length;z<gA;z++){const CA=x[z],UA=CA.object,yA=CA.geometry,OA=I===null?CA.material:I,EA=CA.group;UA.layers.test(W.layers)&&Wo(UA,R,W,yA,OA,EA)}}function Wo(x,R,W,I,z,gA){x.onBeforeRender(v,R,W,I,z,gA),x.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),z.onBeforeRender(v,R,W,I,x,gA),z.transparent===!0&&z.side===bt&&z.forceSinglePass===!1?(z.side=Pe,z.needsUpdate=!0,v.renderBufferDirect(W,R,I,z,x,gA),z.side=en,z.needsUpdate=!0,v.renderBufferDirect(W,R,I,z,x,gA),z.side=bt):v.renderBufferDirect(W,R,I,z,x,gA),x.onAfterRender(v,R,W,I,z,gA)}function mr(x,R,W){R.isScene!==!0&&(R=ve);const I=HA.get(x),z=d.state.lights,gA=d.state.shadowsArray,CA=z.state.version,UA=N.getParameters(x,z.state,gA,R,W),yA=N.getProgramCacheKey(UA);let OA=I.programs;I.environment=x.isMeshStandardMaterial?R.environment:null,I.fog=R.fog,I.envMap=(x.isMeshStandardMaterial?ce:KA).get(x.envMap||I.environment),OA===void 0&&(x.addEventListener("dispose",uA),OA=new Map,I.programs=OA);let EA=OA.get(yA);if(EA!==void 0){if(I.currentProgram===EA&&I.lightsStateVersion===CA)return Xo(x,UA),EA}else UA.uniforms=N.getUniforms(x),x.onBuild(W,UA,v),x.onBeforeCompile(UA,v),EA=N.acquireProgram(UA,yA),OA.set(yA,EA),I.uniforms=UA.uniforms;const QA=I.uniforms;(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(QA.clippingPlanes=BA.uniform),Xo(x,UA),I.needsLights=hf(x),I.lightsStateVersion=CA,I.needsLights&&(QA.ambientLightColor.value=z.state.ambient,QA.lightProbe.value=z.state.probe,QA.directionalLights.value=z.state.directional,QA.directionalLightShadows.value=z.state.directionalShadow,QA.spotLights.value=z.state.spot,QA.spotLightShadows.value=z.state.spotShadow,QA.rectAreaLights.value=z.state.rectArea,QA.ltc_1.value=z.state.rectAreaLTC1,QA.ltc_2.value=z.state.rectAreaLTC2,QA.pointLights.value=z.state.point,QA.pointLightShadows.value=z.state.pointShadow,QA.hemisphereLights.value=z.state.hemi,QA.directionalShadowMap.value=z.state.directionalShadowMap,QA.directionalShadowMatrix.value=z.state.directionalShadowMatrix,QA.spotShadowMap.value=z.state.spotShadowMap,QA.spotLightMatrix.value=z.state.spotLightMatrix,QA.spotLightMap.value=z.state.spotLightMap,QA.pointShadowMap.value=z.state.pointShadowMap,QA.pointShadowMatrix.value=z.state.pointShadowMatrix);const ee=EA.getUniforms(),te=cs.seqWithValue(ee.seq,QA);return I.currentProgram=EA,I.uniformsList=te,EA}function Xo(x,R){const W=HA.get(x);W.outputColorSpace=R.outputColorSpace,W.instancing=R.instancing,W.instancingColor=R.instancingColor,W.skinning=R.skinning,W.morphTargets=R.morphTargets,W.morphNormals=R.morphNormals,W.morphColors=R.morphColors,W.morphTargetsCount=R.morphTargetsCount,W.numClippingPlanes=R.numClippingPlanes,W.numIntersection=R.numClipIntersection,W.vertexAlphas=R.vertexAlphas,W.vertexTangents=R.vertexTangents,W.toneMapping=R.toneMapping}function cf(x,R,W,I,z){R.isScene!==!0&&(R=ve),FA.resetTextureUnits();const gA=R.fog,CA=I.isMeshStandardMaterial?R.environment:null,UA=U===null?v.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:pt,yA=(I.isMeshStandardMaterial?ce:KA).get(I.envMap||CA),OA=I.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,EA=!!W.attributes.tangent&&(!!I.normalMap||I.anisotropy>0),QA=!!W.morphAttributes.position,ee=!!W.morphAttributes.normal,te=!!W.morphAttributes.color;let ze=qt;I.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(ze=v.toneMapping);const Bt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,re=Bt!==void 0?Bt.length:0,NA=HA.get(I),Ks=d.state.lights;if(sA===!0&&(oA===!0||x!==B)){const Oe=x===B&&I.id===L;BA.setState(I,x,Oe)}let se=!1;I.version===NA.__version?(NA.needsLights&&NA.lightsStateVersion!==Ks.state.version||NA.outputColorSpace!==UA||z.isInstancedMesh&&NA.instancing===!1||!z.isInstancedMesh&&NA.instancing===!0||z.isSkinnedMesh&&NA.skinning===!1||!z.isSkinnedMesh&&NA.skinning===!0||z.isInstancedMesh&&NA.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&NA.instancingColor===!1&&z.instanceColor!==null||NA.envMap!==yA||I.fog===!0&&NA.fog!==gA||NA.numClippingPlanes!==void 0&&(NA.numClippingPlanes!==BA.numPlanes||NA.numIntersection!==BA.numIntersection)||NA.vertexAlphas!==OA||NA.vertexTangents!==EA||NA.morphTargets!==QA||NA.morphNormals!==ee||NA.morphColors!==te||NA.toneMapping!==ze||MA.isWebGL2===!0&&NA.morphTargetsCount!==re)&&(se=!0):(se=!0,NA.__version=I.version);let rn=NA.currentProgram;se===!0&&(rn=mr(I,R,z));let Yo=!1,Ei=!1,ks=!1;const Te=rn.getUniforms(),sn=NA.uniforms;if(xA.useProgram(rn.program)&&(Yo=!0,Ei=!0,ks=!0),I.id!==L&&(L=I.id,Ei=!0),Yo||B!==x){if(Te.setValue(H,"projectionMatrix",x.projectionMatrix),MA.logarithmicDepthBuffer&&Te.setValue(H,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),B!==x&&(B=x,Ei=!0,ks=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){const Oe=Te.map.cameraPosition;Oe!==void 0&&Oe.setValue(H,kA.setFromMatrixPosition(x.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&Te.setValue(H,"isOrthographic",x.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||z.isSkinnedMesh)&&Te.setValue(H,"viewMatrix",x.matrixWorldInverse)}if(z.isSkinnedMesh){Te.setOptional(H,z,"bindMatrix"),Te.setOptional(H,z,"bindMatrixInverse");const Oe=z.skeleton;Oe&&(MA.floatVertexTextures?(Oe.boneTexture===null&&Oe.computeBoneTexture(),Te.setValue(H,"boneTexture",Oe.boneTexture,FA),Te.setValue(H,"boneTextureSize",Oe.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const zs=W.morphAttributes;if((zs.position!==void 0||zs.normal!==void 0||zs.color!==void 0&&MA.isWebGL2===!0)&&F.update(z,W,rn),(Ei||NA.receiveShadow!==z.receiveShadow)&&(NA.receiveShadow=z.receiveShadow,Te.setValue(H,"receiveShadow",z.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(sn.envMap.value=yA,sn.flipEnvMap.value=yA.isCubeTexture&&yA.isRenderTargetTexture===!1?-1:1),Ei&&(Te.setValue(H,"toneMappingExposure",v.toneMappingExposure),NA.needsLights&&uf(sn,ks),gA&&I.fog===!0&&tA.refreshFogUniforms(sn,gA),tA.refreshMaterialUniforms(sn,I,k,Z,mA),cs.upload(H,NA.uniformsList,sn,FA)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(cs.upload(H,NA.uniformsList,sn,FA),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&Te.setValue(H,"center",z.center),Te.setValue(H,"modelViewMatrix",z.modelViewMatrix),Te.setValue(H,"normalMatrix",z.normalMatrix),Te.setValue(H,"modelMatrix",z.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const Oe=I.uniformsGroups;for(let Ws=0,ff=Oe.length;Ws<ff;Ws++)if(MA.isWebGL2){const Jo=Oe[Ws];SA.update(Jo,rn),SA.bind(Jo,rn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return rn}function uf(x,R){x.ambientLightColor.needsUpdate=R,x.lightProbe.needsUpdate=R,x.directionalLights.needsUpdate=R,x.directionalLightShadows.needsUpdate=R,x.pointLights.needsUpdate=R,x.pointLightShadows.needsUpdate=R,x.spotLights.needsUpdate=R,x.spotLightShadows.needsUpdate=R,x.rectAreaLights.needsUpdate=R,x.hemisphereLights.needsUpdate=R}function hf(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(x,R,W){HA.get(x.texture).__webglTexture=R,HA.get(x.depthTexture).__webglTexture=W;const I=HA.get(x);I.__hasExternalTextures=!0,I.__hasExternalTextures&&(I.__autoAllocateDepthBuffer=W===void 0,I.__autoAllocateDepthBuffer||_A.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(x,R){const W=HA.get(x);W.__webglFramebuffer=R,W.__useDefaultFramebuffer=R===void 0},this.setRenderTarget=function(x,R=0,W=0){U=x,E=R,y=W;let I=!0,z=null,gA=!1,CA=!1;if(x){const yA=HA.get(x);yA.__useDefaultFramebuffer!==void 0?(xA.bindFramebuffer(H.FRAMEBUFFER,null),I=!1):yA.__webglFramebuffer===void 0?FA.setupRenderTarget(x):yA.__hasExternalTextures&&FA.rebindTextures(x,HA.get(x.texture).__webglTexture,HA.get(x.depthTexture).__webglTexture);const OA=x.texture;(OA.isData3DTexture||OA.isDataArrayTexture||OA.isCompressedArrayTexture)&&(CA=!0);const EA=HA.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(EA[R])?z=EA[R][W]:z=EA[R],gA=!0):MA.isWebGL2&&x.samples>0&&FA.useMultisampledRTT(x)===!1?z=HA.get(x).__webglMultisampledFramebuffer:Array.isArray(EA)?z=EA[W]:z=EA,S.copy(x.viewport),Y.copy(x.scissor),q=x.scissorTest}else S.copy(J).multiplyScalar(k).floor(),Y.copy(D).multiplyScalar(k).floor(),q=K;if(xA.bindFramebuffer(H.FRAMEBUFFER,z)&&MA.drawBuffers&&I&&xA.drawBuffers(x,z),xA.viewport(S),xA.scissor(Y),xA.setScissorTest(q),gA){const yA=HA.get(x.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+R,yA.__webglTexture,W)}else if(CA){const yA=HA.get(x.texture),OA=R||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,yA.__webglTexture,W||0,OA)}L=-1},this.readRenderTargetPixels=function(x,R,W,I,z,gA,CA){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let UA=HA.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&CA!==void 0&&(UA=UA[CA]),UA){xA.bindFramebuffer(H.FRAMEBUFFER,UA);try{const yA=x.texture,OA=yA.format,EA=yA.type;if(OA!==at&&aA.convert(OA)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const QA=EA===er&&(_A.has("EXT_color_buffer_half_float")||MA.isWebGL2&&_A.has("EXT_color_buffer_float"));if(EA!==jt&&aA.convert(EA)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(EA===Wt&&(MA.isWebGL2||_A.has("OES_texture_float")||_A.has("WEBGL_color_buffer_float")))&&!QA){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=x.width-I&&W>=0&&W<=x.height-z&&H.readPixels(R,W,I,z,aA.convert(OA),aA.convert(EA),gA)}finally{const yA=U!==null?HA.get(U).__webglFramebuffer:null;xA.bindFramebuffer(H.FRAMEBUFFER,yA)}}},this.copyFramebufferToTexture=function(x,R,W=0){const I=Math.pow(2,-W),z=Math.floor(R.image.width*I),gA=Math.floor(R.image.height*I);FA.setTexture2D(R,0),H.copyTexSubImage2D(H.TEXTURE_2D,W,0,0,x.x,x.y,z,gA),xA.unbindTexture()},this.copyTextureToTexture=function(x,R,W,I=0){const z=R.image.width,gA=R.image.height,CA=aA.convert(W.format),UA=aA.convert(W.type);FA.setTexture2D(W,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,W.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,W.unpackAlignment),R.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,I,x.x,x.y,z,gA,CA,UA,R.image.data):R.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,I,x.x,x.y,R.mipmaps[0].width,R.mipmaps[0].height,CA,R.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,I,x.x,x.y,CA,UA,R.image),I===0&&W.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),xA.unbindTexture()},this.copyTextureToTexture3D=function(x,R,W,I,z=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const gA=x.max.x-x.min.x+1,CA=x.max.y-x.min.y+1,UA=x.max.z-x.min.z+1,yA=aA.convert(I.format),OA=aA.convert(I.type);let EA;if(I.isData3DTexture)FA.setTexture3D(I,0),EA=H.TEXTURE_3D;else if(I.isDataArrayTexture)FA.setTexture2DArray(I,0),EA=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,I.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,I.unpackAlignment);const QA=H.getParameter(H.UNPACK_ROW_LENGTH),ee=H.getParameter(H.UNPACK_IMAGE_HEIGHT),te=H.getParameter(H.UNPACK_SKIP_PIXELS),ze=H.getParameter(H.UNPACK_SKIP_ROWS),Bt=H.getParameter(H.UNPACK_SKIP_IMAGES),re=W.isCompressedTexture?W.mipmaps[0]:W.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,re.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,re.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,x.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,x.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,x.min.z),W.isDataTexture||W.isData3DTexture?H.texSubImage3D(EA,z,R.x,R.y,R.z,gA,CA,UA,yA,OA,re.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(EA,z,R.x,R.y,R.z,gA,CA,UA,yA,re.data)):H.texSubImage3D(EA,z,R.x,R.y,R.z,gA,CA,UA,yA,OA,re),H.pixelStorei(H.UNPACK_ROW_LENGTH,QA),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ee),H.pixelStorei(H.UNPACK_SKIP_PIXELS,te),H.pixelStorei(H.UNPACK_SKIP_ROWS,ze),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Bt),z===0&&I.generateMipmaps&&H.generateMipmap(EA),xA.unbindTexture()},this.initTexture=function(x){x.isCubeTexture?FA.setTextureCube(x,0):x.isData3DTexture?FA.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?FA.setTexture2DArray(x,0):FA.setTexture2D(x,0),xA.unbindTexture()},this.resetState=function(){E=0,y=0,U=null,xA.reset(),hA.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tt}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(A){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!A}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===LA?_n:bu}set outputEncoding(A){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=A===_n?LA:pt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(A){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=A}}class LB extends Zu{}LB.prototype.isWebGL1Renderer=!0;class RB extends ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(A,e){return super.copy(A,e),A.background!==null&&(this.background=A.background.clone()),A.environment!==null&&(this.environment=A.environment.clone()),A.fog!==null&&(this.fog=A.fog.clone()),this.backgroundBlurriness=A.backgroundBlurriness,this.backgroundIntensity=A.backgroundIntensity,A.overrideMaterial!==null&&(this.overrideMaterial=A.overrideMaterial.clone()),this.matrixAutoUpdate=A.matrixAutoUpdate,this}toJSON(A){const e=super.toJSON(A);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class HB{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(A,e){const t=this.getUtoTmapping(A);return this.getPoint(t,e)}getPoints(A=5){const e=[];for(let t=0;t<=A;t++)e.push(this.getPoint(t/A));return e}getSpacedPoints(A=5){const e=[];for(let t=0;t<=A;t++)e.push(this.getPointAt(t/A));return e}getLength(){const A=this.getLengths();return A[A.length-1]}getLengths(A=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===A+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let t,i=this.getPoint(0),r=0;e.push(0);for(let s=1;s<=A;s++)t=this.getPoint(s/A),r+=t.distanceTo(i),e.push(r),i=t;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(A,e){const t=this.getLengths();let i=0;const r=t.length;let s;e?s=e:s=A*t[r-1];let a=0,o=r-1,l;for(;a<=o;)if(i=Math.floor(a+(o-a)/2),l=t[i]-s,l<0)a=i+1;else if(l>0)o=i-1;else{o=i;break}if(i=o,t[i]===s)return i/(r-1);const c=t[i],h=t[i+1]-c,p=(s-c)/h;return(i+p)/(r-1)}getTangent(A,e){let i=A-1e-4,r=A+1e-4;i<0&&(i=0),r>1&&(r=1);const s=this.getPoint(i),a=this.getPoint(r),o=e||(s.isVector2?new RA:new Q);return o.copy(a).sub(s).normalize(),o}getTangentAt(A,e){const t=this.getUtoTmapping(A);return this.getTangent(t,e)}computeFrenetFrames(A,e){const t=new Q,i=[],r=[],s=[],a=new Q,o=new we;for(let p=0;p<=A;p++){const g=p/A;i[p]=this.getTangentAt(g,new Q)}r[0]=new Q,s[0]=new Q;let l=Number.MAX_VALUE;const c=Math.abs(i[0].x),u=Math.abs(i[0].y),h=Math.abs(i[0].z);c<=l&&(l=c,t.set(1,0,0)),u<=l&&(l=u,t.set(0,1,0)),h<=l&&t.set(0,0,1),a.crossVectors(i[0],t).normalize(),r[0].crossVectors(i[0],a),s[0].crossVectors(i[0],r[0]);for(let p=1;p<=A;p++){if(r[p]=r[p-1].clone(),s[p]=s[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Be(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(o.makeRotationAxis(a,g))}s[p].crossVectors(i[p],r[p])}if(e===!0){let p=Math.acos(Be(r[0].dot(r[A]),-1,1));p/=A,i[0].dot(a.crossVectors(r[0],r[A]))>0&&(p=-p);for(let g=1;g<=A;g++)r[g].applyMatrix4(o.makeRotationAxis(i[g],p*g)),s[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(A){return this.arcLengthDivisions=A.arcLengthDivisions,this}toJSON(){const A={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return A.arcLengthDivisions=this.arcLengthDivisions,A.type=this.type,A}fromJSON(A){return this.arcLengthDivisions=A.arcLengthDivisions,this}}class fc{constructor(A=1,e=0,t=0){return this.radius=A,this.phi=e,this.theta=t,this}set(A,e,t){return this.radius=A,this.phi=e,this.theta=t,this}copy(A){return this.radius=A.radius,this.phi=A.phi,this.theta=A.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(A){return this.setFromCartesianCoords(A.x,A.y,A.z)}setFromCartesianCoords(A,e,t){return this.radius=Math.sqrt(A*A+e*e+t*t),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(A,t),this.phi=Math.acos(Be(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yo);/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */class dt{constructor(A,e,t,i,r="div"){this.parent=A,this.object=e,this.property=t,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),dt.nextNameID=dt.nextNameID||0,this.$name.id="lil-gui-name-"+ ++dt.nextNameID,this.$widget=document.createElement(r),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(t)}name(A){return this._name=A,this.$name.innerHTML=A,this}onChange(A){return this._onChange=A,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(A){return this._onFinishChange=A,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(A=!0){return this.disable(!A)}disable(A=!0){return A===this._disabled||(this._disabled=A,this.domElement.classList.toggle("disabled",A),this.$disable.toggleAttribute("disabled",A)),this}show(A=!0){return this._hidden=!A,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(A){const e=this.parent.add(this.object,this.property,A);return e.name(this._name),this.destroy(),e}min(A){return this}max(A){return this}step(A){return this}decimals(A){return this}listen(A=!0){return this._listening=A,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const A=this.save();A!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=A}getValue(){return this.object[this.property]}setValue(A){return this.object[this.property]=A,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(A){return this.setValue(A),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}let DB=class extends dt{constructor(A,e,t){super(A,e,t,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}};function Ao(n){let A,e;return(A=n.match(/(#|0x)?([a-f0-9]{6})/i))?e=A[2]:(A=n.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(A[1]).toString(16).padStart(2,0)+parseInt(A[2]).toString(16).padStart(2,0)+parseInt(A[3]).toString(16).padStart(2,0):(A=n.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=A[1]+A[1]+A[2]+A[2]+A[3]+A[3]),!!e&&"#"+e}const PB={isPrimitive:!0,match:n=>typeof n=="string",fromHexString:Ao,toHexString:Ao},nr={isPrimitive:!0,match:n=>typeof n=="number",fromHexString:n=>parseInt(n.substring(1),16),toHexString:n=>"#"+n.toString(16).padStart(6,0)},OB={isPrimitive:!1,match:Array.isArray,fromHexString(n,A,e=1){const t=nr.fromHexString(n);A[0]=(t>>16&255)/255*e,A[1]=(t>>8&255)/255*e,A[2]=(255&t)/255*e},toHexString:([n,A,e],t=1)=>nr.toHexString(n*(t=255/t)<<16^A*t<<8^e*t<<0)},NB={isPrimitive:!1,match:n=>Object(n)===n,fromHexString(n,A,e=1){const t=nr.fromHexString(n);A.r=(t>>16&255)/255*e,A.g=(t>>8&255)/255*e,A.b=(255&t)/255*e},toHexString:({r:n,g:A,b:e},t=1)=>nr.toHexString(n*(t=255/t)<<16^A*t<<8^e*t<<0)},GB=[PB,nr,OB,NB];let VB=class extends dt{constructor(A,e,t,i){var r;super(A,e,t,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(r=this.initialValue,GB.find(s=>s.match(r))),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=Ao(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(A){if(this._format.isPrimitive){const e=this._format.fromHexString(A);this.setValue(e)}else this._format.fromHexString(A,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(A){return this._setValueFromHexString(A),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}};class Ca extends dt{constructor(A,e,t){super(A,e,t,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class KB extends dt{constructor(A,e,t,i,r,s){super(A,e,t,"number"),this._initInput(),this.min(i),this.max(r);const a=s!==void 0;this.step(a?s:this._getImplicitStep(),a),this.updateDisplay()}decimals(A){return this._decimals=A,this.updateDisplay(),this}min(A){return this._min=A,this._onUpdateMinMax(),this}max(A){return this._max=A,this._onUpdateMinMax(),this}step(A,e=!0){return this._step=A,this._stepExplicit=e,this}updateDisplay(){const A=this.getValue();if(this._hasSlider){let e=(A-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=100*e+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?A:A.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const A=c=>{const u=parseFloat(this.$input.value);isNaN(u)||(this._snapClampSetValue(u+c),this.$input.value=this.getValue())};let e,t,i,r,s,a=!1;const o=c=>{if(a){const u=c.clientX-e,h=c.clientY-t;Math.abs(h)>5?(c.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(u)>5&&l()}if(!a){const u=c.clientY-i;s-=u*this._step*this._arrowKeyMultiplier(c),r+s>this._max?s=this._max-r:r+s<this._min&&(s=this._min-r),this._snapClampSetValue(r+s)}i=c.clientY},l=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",o),window.removeEventListener("mouseup",l)};this.$input.addEventListener("input",()=>{let c=parseFloat(this.$input.value);isNaN(c)||(this._stepExplicit&&(c=this._snap(c)),this.setValue(this._clamp(c)))}),this.$input.addEventListener("keydown",c=>{c.code==="Enter"&&this.$input.blur(),c.code==="ArrowUp"&&(c.preventDefault(),A(this._step*this._arrowKeyMultiplier(c))),c.code==="ArrowDown"&&(c.preventDefault(),A(this._step*this._arrowKeyMultiplier(c)*-1))}),this.$input.addEventListener("wheel",c=>{this._inputFocused&&(c.preventDefault(),A(this._step*this._normalizeMouseWheel(c)))},{passive:!1}),this.$input.addEventListener("mousedown",c=>{e=c.clientX,t=i=c.clientY,a=!0,r=this.getValue(),s=0,window.addEventListener("mousemove",o),window.addEventListener("mouseup",l)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const A=h=>{const p=this.$slider.getBoundingClientRect();let g=(m=h,d=p.left,f=p.right,C=this._min,v=this._max,(m-d)/(f-d)*(v-C)+C);var m,d,f,C,v;this._snapClampSetValue(g)},e=h=>{A(h.clientX)},t=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",e),window.removeEventListener("mouseup",t)};let i,r,s=!1;const a=h=>{h.preventDefault(),this._setDraggingStyle(!0),A(h.touches[0].clientX),s=!1},o=h=>{if(s){const p=h.touches[0].clientX-i,g=h.touches[0].clientY-r;Math.abs(p)>Math.abs(g)?a(h):(window.removeEventListener("touchmove",o),window.removeEventListener("touchend",l))}else h.preventDefault(),A(h.touches[0].clientX)},l=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",o),window.removeEventListener("touchend",l)},c=this._callOnFinishChange.bind(this);let u;this.$slider.addEventListener("mousedown",h=>{this._setDraggingStyle(!0),A(h.clientX),window.addEventListener("mousemove",e),window.addEventListener("mouseup",t)}),this.$slider.addEventListener("touchstart",h=>{h.touches.length>1||(this._hasScrollBar?(i=h.touches[0].clientX,r=h.touches[0].clientY,s=!0):a(h),window.addEventListener("touchmove",o,{passive:!1}),window.addEventListener("touchend",l))},{passive:!1}),this.$slider.addEventListener("wheel",h=>{if(Math.abs(h.deltaX)<Math.abs(h.deltaY)&&this._hasScrollBar)return;h.preventDefault();const p=this._normalizeMouseWheel(h)*this._step;this._snapClampSetValue(this.getValue()+p),this.$input.value=this.getValue(),clearTimeout(u),u=setTimeout(c,400)},{passive:!1})}_setDraggingStyle(A,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",A),document.body.classList.toggle("lil-gui-dragging",A),document.body.classList.toggle("lil-gui-"+e,A)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(A){let{deltaX:e,deltaY:t}=A;return Math.floor(A.deltaY)!==A.deltaY&&A.wheelDelta&&(e=0,t=-A.wheelDelta/120,t*=this._stepExplicit?1:10),e+-t}_arrowKeyMultiplier(A){let e=this._stepExplicit?1:10;return A.shiftKey?e*=10:A.altKey&&(e/=10),e}_snap(A){const e=Math.round(A/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(A){return A<this._min&&(A=this._min),A>this._max&&(A=this._max),A}_snapClampSetValue(A){this.setValue(this._clamp(this._snap(A)))}get _hasScrollBar(){const A=this.parent.root.$children;return A.scrollHeight>A.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class kB extends dt{constructor(A,e,t,i){super(A,e,t,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(i)?i:Object.values(i),this._names=Array.isArray(i)?i:Object.keys(i),this._names.forEach(r=>{const s=document.createElement("option");s.innerHTML=r,this.$select.appendChild(s)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const A=this.getValue(),e=this._values.indexOf(A);return this.$select.selectedIndex=e,this.$display.innerHTML=e===-1?A:this._names[e],this}}let zB=class extends dt{constructor(A,e,t){super(A,e,t,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}},dc=!1;class Io{constructor({parent:A,autoPlace:e=A===void 0,container:t,width:i,title:r="Controls",injectStyles:s=!0,touchStyles:a=!0}={}){if(this.parent=A,this.root=A?A.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",o=>{o.code!=="Enter"&&o.code!=="Space"||(o.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),a&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!dc&&s&&(function(o){const l=document.createElement("style");l.innerHTML=o;const c=document.querySelector("head link[rel=stylesheet], head style");c?document.head.insertBefore(l,c):document.head.appendChild(l)}('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"↕";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"▾";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"▸"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"✓";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),dc=!0),t?t.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation())}add(A,e,t,i,r){if(Object(t)===t)return new kB(this,A,e,t);const s=A[e];switch(typeof s){case"number":return new KB(this,A,e,t,i,r);case"boolean":return new DB(this,A,e);case"string":return new zB(this,A,e);case"function":return new Ca(this,A,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,A,`
	value:`,s)}addColor(A,e,t=1){return new VB(this,A,e,t)}addFolder(A){return new Io({parent:this,title:A})}load(A,e=!0){return A.controllers&&this.controllers.forEach(t=>{t instanceof Ca||t._name in A.controllers&&t.load(A.controllers[t._name])}),e&&A.folders&&this.folders.forEach(t=>{t._title in A.folders&&t.load(A.folders[t._title])}),this}save(A=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(t=>{if(!(t instanceof Ca)){if(t._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${t._name}"`);e.controllers[t._name]=t.save()}}),A&&this.folders.forEach(t=>{if(t._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${t._title}"`);e.folders[t._title]=t.save()}),e}open(A=!0){return this._closed=!A,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(A=!0){return this._hidden=!A,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(A=!0){return this._closed=!A,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const t=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",t))};this.$children.addEventListener("transitionend",t);const i=A?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!A),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(A){return this._title=A,this.$title.innerHTML=A,this}reset(A=!0){return(A?this.controllersRecursive():this.controllers).forEach(e=>e.reset()),this}onChange(A){return this._onChange=A,this}_callOnChange(A){this.parent&&this.parent._callOnChange(A),this._onChange!==void 0&&this._onChange.call(this,{object:A.object,property:A.property,value:A.getValue(),controller:A})}onFinishChange(A){return this._onFinishChange=A,this}_callOnFinishChange(A){this.parent&&this.parent._callOnFinishChange(A),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:A.object,property:A.property,value:A.getValue(),controller:A})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(A=>A.destroy())}controllersRecursive(){let A=Array.from(this.controllers);return this.folders.forEach(e=>{A=A.concat(e.controllersRecursive())}),A}foldersRecursive(){let A=Array.from(this.folders);return this.folders.forEach(e=>{A=A.concat(e.foldersRecursive())}),A}}const WB="modulepreload",XB=function(n){return"/climate-helix/"+n},pc={},YB=function(A,e,t){if(!e||e.length===0)return A();const i=document.getElementsByTagName("link");return Promise.all(e.map(r=>{if(r=XB(r),r in pc)return;pc[r]=!0;const s=r.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(!!t)for(let c=i.length-1;c>=0;c--){const u=i[c];if(u.href===r&&(!s||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const l=document.createElement("link");if(l.rel=s?"stylesheet":WB,s||(l.as="script",l.crossOrigin=""),l.href=r,document.head.appendChild(l),s)return new Promise((c,u)=>{l.addEventListener("load",c),l.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>A()).catch(r=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=r,window.dispatchEvent(s),!s.defaultPrevented)throw r})};/*!
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
***************************************************************************** */var eo=function(n,A){return eo=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])},eo(n,A)};function ct(n,A){if(typeof A!="function"&&A!==null)throw new TypeError("Class extends value "+String(A)+" is not a constructor or null");eo(n,A);function e(){this.constructor=n}n.prototype=A===null?Object.create(A):(e.prototype=A.prototype,new e)}var to=function(){return to=Object.assign||function(A){for(var e,t=1,i=arguments.length;t<i;t++){e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(A[r]=e[r])}return A},to.apply(this,arguments)};function Le(n,A,e,t){function i(r){return r instanceof e?r:new e(function(s){s(r)})}return new(e||(e=Promise))(function(r,s){function a(c){try{l(t.next(c))}catch(u){s(u)}}function o(c){try{l(t.throw(c))}catch(u){s(u)}}function l(c){c.done?r(c.value):i(c.value).then(a,o)}l((t=t.apply(n,A||[])).next())})}function Me(n,A){var e={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},t,i,r,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(l){return function(c){return o([l,c])}}function o(l){if(t)throw new TypeError("Generator is already executing.");for(;e;)try{if(t=1,i&&(r=l[0]&2?i.return:l[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,l[1])).done)return r;switch(i=0,r&&(l=[l[0]&2,r.value]),l[0]){case 0:case 1:r=l;break;case 4:return e.label++,{value:l[1],done:!1};case 5:e.label++,i=l[1],l=[0];continue;case 7:l=e.ops.pop(),e.trys.pop();continue;default:if(r=e.trys,!(r=r.length>0&&r[r.length-1])&&(l[0]===6||l[0]===2)){e=0;continue}if(l[0]===3&&(!r||l[1]>r[0]&&l[1]<r[3])){e.label=l[1];break}if(l[0]===6&&e.label<r[1]){e.label=r[1],r=l;break}if(r&&e.label<r[2]){e.label=r[2],e.ops.push(l);break}r[2]&&e.ops.pop(),e.trys.pop();continue}l=A.call(n,e)}catch(c){l=[6,c],i=0}finally{t=r=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function Pr(n,A,e){if(e||arguments.length===2)for(var t=0,i=A.length,r;t<i;t++)(r||!(t in A))&&(r||(r=Array.prototype.slice.call(A,0,t)),r[t]=A[t]);return n.concat(r||A)}var Lt=function(){function n(A,e,t,i){this.left=A,this.top=e,this.width=t,this.height=i}return n.prototype.add=function(A,e,t,i){return new n(this.left+A,this.top+e,this.width+t,this.height+i)},n.fromClientRect=function(A,e){return new n(e.left+A.windowBounds.left,e.top+A.windowBounds.top,e.width,e.height)},n.fromDOMRectList=function(A,e){var t=Array.from(e).find(function(i){return i.width!==0});return t?new n(t.left+A.windowBounds.left,t.top+A.windowBounds.top,t.width,t.height):n.EMPTY},n.EMPTY=new n(0,0,0,0),n}(),Is=function(n,A){return Lt.fromClientRect(n,A.getBoundingClientRect())},JB=function(n){var A=n.body,e=n.documentElement;if(!A||!e)throw new Error("Unable to get document size");var t=Math.max(Math.max(A.scrollWidth,e.scrollWidth),Math.max(A.offsetWidth,e.offsetWidth),Math.max(A.clientWidth,e.clientWidth)),i=Math.max(Math.max(A.scrollHeight,e.scrollHeight),Math.max(A.offsetHeight,e.offsetHeight),Math.max(A.clientHeight,e.clientHeight));return new Lt(0,0,t,i)},Ls=function(n){for(var A=[],e=0,t=n.length;e<t;){var i=n.charCodeAt(e++);if(i>=55296&&i<=56319&&e<t){var r=n.charCodeAt(e++);(r&64512)===56320?A.push(((i&1023)<<10)+(r&1023)+65536):(A.push(i),e--)}else A.push(i)}return A},ie=function(){for(var n=[],A=0;A<arguments.length;A++)n[A]=arguments[A];if(String.fromCodePoint)return String.fromCodePoint.apply(String,n);var e=n.length;if(!e)return"";for(var t=[],i=-1,r="";++i<e;){var s=n[i];s<=65535?t.push(s):(s-=65536,t.push((s>>10)+55296,s%1024+56320)),(i+1===e||t.length>16384)&&(r+=String.fromCharCode.apply(String,t),t.length=0)}return r},gc="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ZB=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Or=0;Or<gc.length;Or++)ZB[gc.charCodeAt(Or)]=Or;var mc="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Li=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Nr=0;Nr<mc.length;Nr++)Li[mc.charCodeAt(Nr)]=Nr;var qB=function(n){var A=n.length*.75,e=n.length,t,i=0,r,s,a,o;n[n.length-1]==="="&&(A--,n[n.length-2]==="="&&A--);var l=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(A):new Array(A),c=Array.isArray(l)?l:new Uint8Array(l);for(t=0;t<e;t+=4)r=Li[n.charCodeAt(t)],s=Li[n.charCodeAt(t+1)],a=Li[n.charCodeAt(t+2)],o=Li[n.charCodeAt(t+3)],c[i++]=r<<2|s>>4,c[i++]=(s&15)<<4|a>>2,c[i++]=(a&3)<<6|o&63;return l},jB=function(n){for(var A=n.length,e=[],t=0;t<A;t+=2)e.push(n[t+1]<<8|n[t]);return e},$B=function(n){for(var A=n.length,e=[],t=0;t<A;t+=4)e.push(n[t+3]<<24|n[t+2]<<16|n[t+1]<<8|n[t]);return e},En=5,Lo=6+5,Ea=2,A1=Lo-En,qu=65536>>En,e1=1<<En,xa=e1-1,t1=1024>>En,n1=qu+t1,i1=n1,r1=32,s1=i1+r1,a1=65536>>Lo,o1=1<<A1,l1=o1-1,Bc=function(n,A,e){return n.slice?n.slice(A,e):new Uint16Array(Array.prototype.slice.call(n,A,e))},c1=function(n,A,e){return n.slice?n.slice(A,e):new Uint32Array(Array.prototype.slice.call(n,A,e))},u1=function(n,A){var e=qB(n),t=Array.isArray(e)?$B(e):new Uint32Array(e),i=Array.isArray(e)?jB(e):new Uint16Array(e),r=24,s=Bc(i,r/2,t[4]/2),a=t[5]===2?Bc(i,(r+t[4])/2):c1(t,Math.ceil((r+t[4])/4));return new h1(t[0],t[1],t[2],t[3],s,a)},h1=function(){function n(A,e,t,i,r,s){this.initialValue=A,this.errorValue=e,this.highStart=t,this.highValueIndex=i,this.index=r,this.data=s}return n.prototype.get=function(A){var e;if(A>=0){if(A<55296||A>56319&&A<=65535)return e=this.index[A>>En],e=(e<<Ea)+(A&xa),this.data[e];if(A<=65535)return e=this.index[qu+(A-55296>>En)],e=(e<<Ea)+(A&xa),this.data[e];if(A<this.highStart)return e=s1-a1+(A>>Lo),e=this.index[e],e+=A>>En&l1,e=this.index[e],e=(e<<Ea)+(A&xa),this.data[e];if(A<=1114111)return this.data[this.highValueIndex]}return this.errorValue},n}(),wc="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f1=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Gr=0;Gr<wc.length;Gr++)f1[wc.charCodeAt(Gr)]=Gr;var d1="KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==",vc=50,p1=1,ju=2,$u=3,g1=4,m1=5,_c=7,Ah=8,Cc=9,Xt=10,no=11,Ec=12,io=13,B1=14,Ri=15,ro=16,Vr=17,Mi=18,w1=19,xc=20,so=21,Fi=22,Ua=23,Xn=24,Ve=25,Hi=26,Di=27,Yn=28,v1=29,dn=30,_1=31,Kr=32,kr=33,ao=34,oo=35,lo=36,ir=37,co=38,us=39,hs=40,ya=41,eh=42,C1=43,E1=[9001,65288],th="!",GA="×",zr="÷",uo=u1(d1),Ut=[dn,lo],ho=[p1,ju,$u,m1],nh=[Xt,Ah],Uc=[Di,Hi],x1=ho.concat(nh),yc=[co,us,hs,ao,oo],U1=[Ri,io],y1=function(n,A){A===void 0&&(A="strict");var e=[],t=[],i=[];return n.forEach(function(r,s){var a=uo.get(r);if(a>vc?(i.push(!0),a-=vc):i.push(!1),["normal","auto","loose"].indexOf(A)!==-1&&[8208,8211,12316,12448].indexOf(r)!==-1)return t.push(s),e.push(ro);if(a===g1||a===no){if(s===0)return t.push(s),e.push(dn);var o=e[s-1];return x1.indexOf(o)===-1?(t.push(t[s-1]),e.push(o)):(t.push(s),e.push(dn))}if(t.push(s),a===_1)return e.push(A==="strict"?so:ir);if(a===eh||a===v1)return e.push(dn);if(a===C1)return r>=131072&&r<=196605||r>=196608&&r<=262141?e.push(ir):e.push(dn);e.push(a)}),[t,e,i]},Sa=function(n,A,e,t){var i=t[e];if(Array.isArray(n)?n.indexOf(i)!==-1:n===i)for(var r=e;r<=t.length;){r++;var s=t[r];if(s===A)return!0;if(s!==Xt)break}if(i===Xt)for(var r=e;r>0;){r--;var a=t[r];if(Array.isArray(n)?n.indexOf(a)!==-1:n===a)for(var o=e;o<=t.length;){o++;var s=t[o];if(s===A)return!0;if(s!==Xt)break}if(a!==Xt)break}return!1},Sc=function(n,A){for(var e=n;e>=0;){var t=A[e];if(t===Xt)e--;else return t}return 0},S1=function(n,A,e,t,i){if(e[t]===0)return GA;var r=t-1;if(Array.isArray(i)&&i[r]===!0)return GA;var s=r-1,a=r+1,o=A[r],l=s>=0?A[s]:0,c=A[a];if(o===ju&&c===$u)return GA;if(ho.indexOf(o)!==-1)return th;if(ho.indexOf(c)!==-1||nh.indexOf(c)!==-1)return GA;if(Sc(r,A)===Ah)return zr;if(uo.get(n[r])===no||(o===Kr||o===kr)&&uo.get(n[a])===no||o===_c||c===_c||o===Cc||[Xt,io,Ri].indexOf(o)===-1&&c===Cc||[Vr,Mi,w1,Xn,Yn].indexOf(c)!==-1||Sc(r,A)===Fi||Sa(Ua,Fi,r,A)||Sa([Vr,Mi],so,r,A)||Sa(Ec,Ec,r,A))return GA;if(o===Xt)return zr;if(o===Ua||c===Ua)return GA;if(c===ro||o===ro)return zr;if([io,Ri,so].indexOf(c)!==-1||o===B1||l===lo&&U1.indexOf(o)!==-1||o===Yn&&c===lo||c===xc||Ut.indexOf(c)!==-1&&o===Ve||Ut.indexOf(o)!==-1&&c===Ve||o===Di&&[ir,Kr,kr].indexOf(c)!==-1||[ir,Kr,kr].indexOf(o)!==-1&&c===Hi||Ut.indexOf(o)!==-1&&Uc.indexOf(c)!==-1||Uc.indexOf(o)!==-1&&Ut.indexOf(c)!==-1||[Di,Hi].indexOf(o)!==-1&&(c===Ve||[Fi,Ri].indexOf(c)!==-1&&A[a+1]===Ve)||[Fi,Ri].indexOf(o)!==-1&&c===Ve||o===Ve&&[Ve,Yn,Xn].indexOf(c)!==-1)return GA;if([Ve,Yn,Xn,Vr,Mi].indexOf(c)!==-1)for(var u=r;u>=0;){var h=A[u];if(h===Ve)return GA;if([Yn,Xn].indexOf(h)!==-1)u--;else break}if([Di,Hi].indexOf(c)!==-1)for(var u=[Vr,Mi].indexOf(o)!==-1?s:r;u>=0;){var h=A[u];if(h===Ve)return GA;if([Yn,Xn].indexOf(h)!==-1)u--;else break}if(co===o&&[co,us,ao,oo].indexOf(c)!==-1||[us,ao].indexOf(o)!==-1&&[us,hs].indexOf(c)!==-1||[hs,oo].indexOf(o)!==-1&&c===hs||yc.indexOf(o)!==-1&&[xc,Hi].indexOf(c)!==-1||yc.indexOf(c)!==-1&&o===Di||Ut.indexOf(o)!==-1&&Ut.indexOf(c)!==-1||o===Xn&&Ut.indexOf(c)!==-1||Ut.concat(Ve).indexOf(o)!==-1&&c===Fi&&E1.indexOf(n[a])===-1||Ut.concat(Ve).indexOf(c)!==-1&&o===Mi)return GA;if(o===ya&&c===ya){for(var p=e[r],g=1;p>0&&(p--,A[p]===ya);)g++;if(g%2!==0)return GA}return o===Kr&&c===kr?GA:zr},M1=function(n,A){A||(A={lineBreak:"normal",wordBreak:"normal"});var e=y1(n,A.lineBreak),t=e[0],i=e[1],r=e[2];(A.wordBreak==="break-all"||A.wordBreak==="break-word")&&(i=i.map(function(a){return[Ve,dn,eh].indexOf(a)!==-1?ir:a}));var s=A.wordBreak==="keep-all"?r.map(function(a,o){return a&&n[o]>=19968&&n[o]<=40959}):void 0;return[t,i,s]},F1=function(){function n(A,e,t,i){this.codePoints=A,this.required=e===th,this.start=t,this.end=i}return n.prototype.slice=function(){return ie.apply(void 0,this.codePoints.slice(this.start,this.end))},n}(),b1=function(n,A){var e=Ls(n),t=M1(e,A),i=t[0],r=t[1],s=t[2],a=e.length,o=0,l=0;return{next:function(){if(l>=a)return{done:!0,value:null};for(var c=GA;l<a&&(c=S1(e,r,i,++l,s))===GA;);if(c!==GA||l===a){var u=new F1(e,c,o,l);return o=l,{value:u,done:!1}}return{done:!0,value:null}}}},T1=1,Q1=2,dr=4,Mc=8,Bs=10,Fc=47,Wi=92,I1=9,L1=32,Wr=34,bi=61,R1=35,H1=36,D1=37,Xr=39,Yr=40,Ti=41,P1=95,De=45,O1=33,N1=60,G1=62,V1=64,K1=91,k1=93,z1=61,W1=123,Jr=63,X1=125,bc=124,Y1=126,J1=128,Tc=65533,Ma=42,pn=43,Z1=44,q1=58,j1=59,rr=46,$1=0,Aw=8,ew=11,tw=14,nw=31,iw=127,ht=-1,ih=48,rh=97,sh=101,rw=102,sw=117,aw=122,ah=65,oh=69,lh=70,ow=85,lw=90,Fe=function(n){return n>=ih&&n<=57},cw=function(n){return n>=55296&&n<=57343},Jn=function(n){return Fe(n)||n>=ah&&n<=lh||n>=rh&&n<=rw},uw=function(n){return n>=rh&&n<=aw},hw=function(n){return n>=ah&&n<=lw},fw=function(n){return uw(n)||hw(n)},dw=function(n){return n>=J1},Zr=function(n){return n===Bs||n===I1||n===L1},ws=function(n){return fw(n)||dw(n)||n===P1},Qc=function(n){return ws(n)||Fe(n)||n===De},pw=function(n){return n>=$1&&n<=Aw||n===ew||n>=tw&&n<=nw||n===iw},Kt=function(n,A){return n!==Wi?!1:A!==Bs},qr=function(n,A,e){return n===De?ws(A)||Kt(A,e):ws(n)?!0:!!(n===Wi&&Kt(n,A))},Fa=function(n,A,e){return n===pn||n===De?Fe(A)?!0:A===rr&&Fe(e):Fe(n===rr?A:n)},gw=function(n){var A=0,e=1;(n[A]===pn||n[A]===De)&&(n[A]===De&&(e=-1),A++);for(var t=[];Fe(n[A]);)t.push(n[A++]);var i=t.length?parseInt(ie.apply(void 0,t),10):0;n[A]===rr&&A++;for(var r=[];Fe(n[A]);)r.push(n[A++]);var s=r.length,a=s?parseInt(ie.apply(void 0,r),10):0;(n[A]===oh||n[A]===sh)&&A++;var o=1;(n[A]===pn||n[A]===De)&&(n[A]===De&&(o=-1),A++);for(var l=[];Fe(n[A]);)l.push(n[A++]);var c=l.length?parseInt(ie.apply(void 0,l),10):0;return e*(i+a*Math.pow(10,-s))*Math.pow(10,o*c)},mw={type:2},Bw={type:3},ww={type:4},vw={type:13},_w={type:8},Cw={type:21},Ew={type:9},xw={type:10},Uw={type:11},yw={type:12},Sw={type:14},jr={type:23},Mw={type:1},Fw={type:25},bw={type:24},Tw={type:26},Qw={type:27},Iw={type:28},Lw={type:29},Rw={type:31},fo={type:32},ch=function(){function n(){this._value=[]}return n.prototype.write=function(A){this._value=this._value.concat(Ls(A))},n.prototype.read=function(){for(var A=[],e=this.consumeToken();e!==fo;)A.push(e),e=this.consumeToken();return A},n.prototype.consumeToken=function(){var A=this.consumeCodePoint();switch(A){case Wr:return this.consumeStringToken(Wr);case R1:var e=this.peekCodePoint(0),t=this.peekCodePoint(1),i=this.peekCodePoint(2);if(Qc(e)||Kt(t,i)){var r=qr(e,t,i)?Q1:T1,s=this.consumeName();return{type:5,value:s,flags:r}}break;case H1:if(this.peekCodePoint(0)===bi)return this.consumeCodePoint(),vw;break;case Xr:return this.consumeStringToken(Xr);case Yr:return mw;case Ti:return Bw;case Ma:if(this.peekCodePoint(0)===bi)return this.consumeCodePoint(),Sw;break;case pn:if(Fa(A,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(A),this.consumeNumericToken();break;case Z1:return ww;case De:var a=A,o=this.peekCodePoint(0),l=this.peekCodePoint(1);if(Fa(a,o,l))return this.reconsumeCodePoint(A),this.consumeNumericToken();if(qr(a,o,l))return this.reconsumeCodePoint(A),this.consumeIdentLikeToken();if(o===De&&l===G1)return this.consumeCodePoint(),this.consumeCodePoint(),bw;break;case rr:if(Fa(A,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(A),this.consumeNumericToken();break;case Fc:if(this.peekCodePoint(0)===Ma)for(this.consumeCodePoint();;){var c=this.consumeCodePoint();if(c===Ma&&(c=this.consumeCodePoint(),c===Fc))return this.consumeToken();if(c===ht)return this.consumeToken()}break;case q1:return Tw;case j1:return Qw;case N1:if(this.peekCodePoint(0)===O1&&this.peekCodePoint(1)===De&&this.peekCodePoint(2)===De)return this.consumeCodePoint(),this.consumeCodePoint(),Fw;break;case V1:var u=this.peekCodePoint(0),h=this.peekCodePoint(1),p=this.peekCodePoint(2);if(qr(u,h,p)){var s=this.consumeName();return{type:7,value:s}}break;case K1:return Iw;case Wi:if(Kt(A,this.peekCodePoint(0)))return this.reconsumeCodePoint(A),this.consumeIdentLikeToken();break;case k1:return Lw;case z1:if(this.peekCodePoint(0)===bi)return this.consumeCodePoint(),_w;break;case W1:return Uw;case X1:return yw;case sw:case ow:var g=this.peekCodePoint(0),m=this.peekCodePoint(1);return g===pn&&(Jn(m)||m===Jr)&&(this.consumeCodePoint(),this.consumeUnicodeRangeToken()),this.reconsumeCodePoint(A),this.consumeIdentLikeToken();case bc:if(this.peekCodePoint(0)===bi)return this.consumeCodePoint(),Ew;if(this.peekCodePoint(0)===bc)return this.consumeCodePoint(),Cw;break;case Y1:if(this.peekCodePoint(0)===bi)return this.consumeCodePoint(),xw;break;case ht:return fo}return Zr(A)?(this.consumeWhiteSpace(),Rw):Fe(A)?(this.reconsumeCodePoint(A),this.consumeNumericToken()):ws(A)?(this.reconsumeCodePoint(A),this.consumeIdentLikeToken()):{type:6,value:ie(A)}},n.prototype.consumeCodePoint=function(){var A=this._value.shift();return typeof A>"u"?-1:A},n.prototype.reconsumeCodePoint=function(A){this._value.unshift(A)},n.prototype.peekCodePoint=function(A){return A>=this._value.length?-1:this._value[A]},n.prototype.consumeUnicodeRangeToken=function(){for(var A=[],e=this.consumeCodePoint();Jn(e)&&A.length<6;)A.push(e),e=this.consumeCodePoint();for(var t=!1;e===Jr&&A.length<6;)A.push(e),e=this.consumeCodePoint(),t=!0;if(t){var i=parseInt(ie.apply(void 0,A.map(function(o){return o===Jr?ih:o})),16),r=parseInt(ie.apply(void 0,A.map(function(o){return o===Jr?lh:o})),16);return{type:30,start:i,end:r}}var s=parseInt(ie.apply(void 0,A),16);if(this.peekCodePoint(0)===De&&Jn(this.peekCodePoint(1))){this.consumeCodePoint(),e=this.consumeCodePoint();for(var a=[];Jn(e)&&a.length<6;)a.push(e),e=this.consumeCodePoint();var r=parseInt(ie.apply(void 0,a),16);return{type:30,start:s,end:r}}else return{type:30,start:s,end:s}},n.prototype.consumeIdentLikeToken=function(){var A=this.consumeName();return A.toLowerCase()==="url"&&this.peekCodePoint(0)===Yr?(this.consumeCodePoint(),this.consumeUrlToken()):this.peekCodePoint(0)===Yr?(this.consumeCodePoint(),{type:19,value:A}):{type:20,value:A}},n.prototype.consumeUrlToken=function(){var A=[];if(this.consumeWhiteSpace(),this.peekCodePoint(0)===ht)return{type:22,value:""};var e=this.peekCodePoint(0);if(e===Xr||e===Wr){var t=this.consumeStringToken(this.consumeCodePoint());return t.type===0&&(this.consumeWhiteSpace(),this.peekCodePoint(0)===ht||this.peekCodePoint(0)===Ti)?(this.consumeCodePoint(),{type:22,value:t.value}):(this.consumeBadUrlRemnants(),jr)}for(;;){var i=this.consumeCodePoint();if(i===ht||i===Ti)return{type:22,value:ie.apply(void 0,A)};if(Zr(i))return this.consumeWhiteSpace(),this.peekCodePoint(0)===ht||this.peekCodePoint(0)===Ti?(this.consumeCodePoint(),{type:22,value:ie.apply(void 0,A)}):(this.consumeBadUrlRemnants(),jr);if(i===Wr||i===Xr||i===Yr||pw(i))return this.consumeBadUrlRemnants(),jr;if(i===Wi)if(Kt(i,this.peekCodePoint(0)))A.push(this.consumeEscapedCodePoint());else return this.consumeBadUrlRemnants(),jr;else A.push(i)}},n.prototype.consumeWhiteSpace=function(){for(;Zr(this.peekCodePoint(0));)this.consumeCodePoint()},n.prototype.consumeBadUrlRemnants=function(){for(;;){var A=this.consumeCodePoint();if(A===Ti||A===ht)return;Kt(A,this.peekCodePoint(0))&&this.consumeEscapedCodePoint()}},n.prototype.consumeStringSlice=function(A){for(var e=5e4,t="";A>0;){var i=Math.min(e,A);t+=ie.apply(void 0,this._value.splice(0,i)),A-=i}return this._value.shift(),t},n.prototype.consumeStringToken=function(A){var e="",t=0;do{var i=this._value[t];if(i===ht||i===void 0||i===A)return e+=this.consumeStringSlice(t),{type:0,value:e};if(i===Bs)return this._value.splice(0,t),Mw;if(i===Wi){var r=this._value[t+1];r!==ht&&r!==void 0&&(r===Bs?(e+=this.consumeStringSlice(t),t=-1,this._value.shift()):Kt(i,r)&&(e+=this.consumeStringSlice(t),e+=ie(this.consumeEscapedCodePoint()),t=-1))}t++}while(!0)},n.prototype.consumeNumber=function(){var A=[],e=dr,t=this.peekCodePoint(0);for((t===pn||t===De)&&A.push(this.consumeCodePoint());Fe(this.peekCodePoint(0));)A.push(this.consumeCodePoint());t=this.peekCodePoint(0);var i=this.peekCodePoint(1);if(t===rr&&Fe(i))for(A.push(this.consumeCodePoint(),this.consumeCodePoint()),e=Mc;Fe(this.peekCodePoint(0));)A.push(this.consumeCodePoint());t=this.peekCodePoint(0),i=this.peekCodePoint(1);var r=this.peekCodePoint(2);if((t===oh||t===sh)&&((i===pn||i===De)&&Fe(r)||Fe(i)))for(A.push(this.consumeCodePoint(),this.consumeCodePoint()),e=Mc;Fe(this.peekCodePoint(0));)A.push(this.consumeCodePoint());return[gw(A),e]},n.prototype.consumeNumericToken=function(){var A=this.consumeNumber(),e=A[0],t=A[1],i=this.peekCodePoint(0),r=this.peekCodePoint(1),s=this.peekCodePoint(2);if(qr(i,r,s)){var a=this.consumeName();return{type:15,number:e,flags:t,unit:a}}return i===D1?(this.consumeCodePoint(),{type:16,number:e,flags:t}):{type:17,number:e,flags:t}},n.prototype.consumeEscapedCodePoint=function(){var A=this.consumeCodePoint();if(Jn(A)){for(var e=ie(A);Jn(this.peekCodePoint(0))&&e.length<6;)e+=ie(this.consumeCodePoint());Zr(this.peekCodePoint(0))&&this.consumeCodePoint();var t=parseInt(e,16);return t===0||cw(t)||t>1114111?Tc:t}return A===ht?Tc:A},n.prototype.consumeName=function(){for(var A="";;){var e=this.consumeCodePoint();if(Qc(e))A+=ie(e);else if(Kt(e,this.peekCodePoint(0)))A+=ie(this.consumeEscapedCodePoint());else return this.reconsumeCodePoint(e),A}},n}(),uh=function(){function n(A){this._tokens=A}return n.create=function(A){var e=new ch;return e.write(A),new n(e.read())},n.parseValue=function(A){return n.create(A).parseComponentValue()},n.parseValues=function(A){return n.create(A).parseComponentValues()},n.prototype.parseComponentValue=function(){for(var A=this.consumeToken();A.type===31;)A=this.consumeToken();if(A.type===32)throw new SyntaxError("Error parsing CSS component value, unexpected EOF");this.reconsumeToken(A);var e=this.consumeComponentValue();do A=this.consumeToken();while(A.type===31);if(A.type===32)return e;throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one")},n.prototype.parseComponentValues=function(){for(var A=[];;){var e=this.consumeComponentValue();if(e.type===32)return A;A.push(e),A.push()}},n.prototype.consumeComponentValue=function(){var A=this.consumeToken();switch(A.type){case 11:case 28:case 2:return this.consumeSimpleBlock(A.type);case 19:return this.consumeFunction(A)}return A},n.prototype.consumeSimpleBlock=function(A){for(var e={type:A,values:[]},t=this.consumeToken();;){if(t.type===32||Dw(t,A))return e;this.reconsumeToken(t),e.values.push(this.consumeComponentValue()),t=this.consumeToken()}},n.prototype.consumeFunction=function(A){for(var e={name:A.value,values:[],type:18};;){var t=this.consumeToken();if(t.type===32||t.type===3)return e;this.reconsumeToken(t),e.values.push(this.consumeComponentValue())}},n.prototype.consumeToken=function(){var A=this._tokens.shift();return typeof A>"u"?fo:A},n.prototype.reconsumeToken=function(A){this._tokens.unshift(A)},n}(),pr=function(n){return n.type===15},Ci=function(n){return n.type===17},JA=function(n){return n.type===20},Hw=function(n){return n.type===0},po=function(n,A){return JA(n)&&n.value===A},hh=function(n){return n.type!==31},Bi=function(n){return n.type!==31&&n.type!==4},gt=function(n){var A=[],e=[];return n.forEach(function(t){if(t.type===4){if(e.length===0)throw new Error("Error parsing function args, zero tokens for arg");A.push(e),e=[];return}t.type!==31&&e.push(t)}),e.length&&A.push(e),A},Dw=function(n,A){return A===11&&n.type===12||A===28&&n.type===29?!0:A===2&&n.type===3},tn=function(n){return n.type===17||n.type===15},oe=function(n){return n.type===16||tn(n)},fh=function(n){return n.length>1?[n[0],n[1]]:[n[0]]},xe={type:17,number:0,flags:dr},Ro={type:16,number:50,flags:dr},Yt={type:16,number:100,flags:dr},Pi=function(n,A,e){var t=n[0],i=n[1];return[ZA(t,A),ZA(typeof i<"u"?i:t,e)]},ZA=function(n,A){if(n.type===16)return n.number/100*A;if(pr(n))switch(n.unit){case"rem":case"em":return 16*n.number;case"px":default:return n.number}return n.number},dh="deg",ph="grad",gh="rad",mh="turn",Rs={name:"angle",parse:function(n,A){if(A.type===15)switch(A.unit){case dh:return Math.PI*A.number/180;case ph:return Math.PI/200*A.number;case gh:return A.number;case mh:return Math.PI*2*A.number}throw new Error("Unsupported angle type")}},Bh=function(n){return n.type===15&&(n.unit===dh||n.unit===ph||n.unit===gh||n.unit===mh)},wh=function(n){var A=n.filter(JA).map(function(e){return e.value}).join(" ");switch(A){case"to bottom right":case"to right bottom":case"left top":case"top left":return[xe,xe];case"to top":case"bottom":return je(0);case"to bottom left":case"to left bottom":case"right top":case"top right":return[xe,Yt];case"to right":case"left":return je(90);case"to top left":case"to left top":case"right bottom":case"bottom right":return[Yt,Yt];case"to bottom":case"top":return je(180);case"to top right":case"to right top":case"left bottom":case"bottom left":return[Yt,xe];case"to left":case"right":return je(270)}return 0},je=function(n){return Math.PI*n/180},$t={name:"color",parse:function(n,A){if(A.type===18){var e=Pw[A.name];if(typeof e>"u")throw new Error('Attempting to parse an unsupported color function "'+A.name+'"');return e(n,A.values)}if(A.type===5){if(A.value.length===3){var t=A.value.substring(0,1),i=A.value.substring(1,2),r=A.value.substring(2,3);return Jt(parseInt(t+t,16),parseInt(i+i,16),parseInt(r+r,16),1)}if(A.value.length===4){var t=A.value.substring(0,1),i=A.value.substring(1,2),r=A.value.substring(2,3),s=A.value.substring(3,4);return Jt(parseInt(t+t,16),parseInt(i+i,16),parseInt(r+r,16),parseInt(s+s,16)/255)}if(A.value.length===6){var t=A.value.substring(0,2),i=A.value.substring(2,4),r=A.value.substring(4,6);return Jt(parseInt(t,16),parseInt(i,16),parseInt(r,16),1)}if(A.value.length===8){var t=A.value.substring(0,2),i=A.value.substring(2,4),r=A.value.substring(4,6),s=A.value.substring(6,8);return Jt(parseInt(t,16),parseInt(i,16),parseInt(r,16),parseInt(s,16)/255)}}if(A.type===20){var a=It[A.value.toUpperCase()];if(typeof a<"u")return a}return It.TRANSPARENT}},An=function(n){return(255&n)===0},ge=function(n){var A=255&n,e=255&n>>8,t=255&n>>16,i=255&n>>24;return A<255?"rgba("+i+","+t+","+e+","+A/255+")":"rgb("+i+","+t+","+e+")"},Jt=function(n,A,e,t){return(n<<24|A<<16|e<<8|Math.round(t*255)<<0)>>>0},Ic=function(n,A){if(n.type===17)return n.number;if(n.type===16){var e=A===3?1:255;return A===3?n.number/100*e:Math.round(n.number/100*e)}return 0},Lc=function(n,A){var e=A.filter(Bi);if(e.length===3){var t=e.map(Ic),i=t[0],r=t[1],s=t[2];return Jt(i,r,s,1)}if(e.length===4){var a=e.map(Ic),i=a[0],r=a[1],s=a[2],o=a[3];return Jt(i,r,s,o)}return 0};function ba(n,A,e){return e<0&&(e+=1),e>=1&&(e-=1),e<1/6?(A-n)*e*6+n:e<1/2?A:e<2/3?(A-n)*6*(2/3-e)+n:n}var Rc=function(n,A){var e=A.filter(Bi),t=e[0],i=e[1],r=e[2],s=e[3],a=(t.type===17?je(t.number):Rs.parse(n,t))/(Math.PI*2),o=oe(i)?i.number/100:0,l=oe(r)?r.number/100:0,c=typeof s<"u"&&oe(s)?ZA(s,1):1;if(o===0)return Jt(l*255,l*255,l*255,1);var u=l<=.5?l*(o+1):l+o-l*o,h=l*2-u,p=ba(h,u,a+1/3),g=ba(h,u,a),m=ba(h,u,a-1/3);return Jt(p*255,g*255,m*255,c)},Pw={hsl:Rc,hsla:Rc,rgb:Lc,rgba:Lc},Xi=function(n,A){return $t.parse(n,uh.create(A).parseComponentValue())},It={ALICEBLUE:4042850303,ANTIQUEWHITE:4209760255,AQUA:16777215,AQUAMARINE:2147472639,AZURE:4043309055,BEIGE:4126530815,BISQUE:4293182719,BLACK:255,BLANCHEDALMOND:4293643775,BLUE:65535,BLUEVIOLET:2318131967,BROWN:2771004159,BURLYWOOD:3736635391,CADETBLUE:1604231423,CHARTREUSE:2147418367,CHOCOLATE:3530104575,CORAL:4286533887,CORNFLOWERBLUE:1687547391,CORNSILK:4294499583,CRIMSON:3692313855,CYAN:16777215,DARKBLUE:35839,DARKCYAN:9145343,DARKGOLDENROD:3095837695,DARKGRAY:2846468607,DARKGREEN:6553855,DARKGREY:2846468607,DARKKHAKI:3182914559,DARKMAGENTA:2332068863,DARKOLIVEGREEN:1433087999,DARKORANGE:4287365375,DARKORCHID:2570243327,DARKRED:2332033279,DARKSALMON:3918953215,DARKSEAGREEN:2411499519,DARKSLATEBLUE:1211993087,DARKSLATEGRAY:793726975,DARKSLATEGREY:793726975,DARKTURQUOISE:13554175,DARKVIOLET:2483082239,DEEPPINK:4279538687,DEEPSKYBLUE:12582911,DIMGRAY:1768516095,DIMGREY:1768516095,DODGERBLUE:512819199,FIREBRICK:2988581631,FLORALWHITE:4294635775,FORESTGREEN:579543807,FUCHSIA:4278255615,GAINSBORO:3705462015,GHOSTWHITE:4177068031,GOLD:4292280575,GOLDENROD:3668254975,GRAY:2155905279,GREEN:8388863,GREENYELLOW:2919182335,GREY:2155905279,HONEYDEW:4043305215,HOTPINK:4285117695,INDIANRED:3445382399,INDIGO:1258324735,IVORY:4294963455,KHAKI:4041641215,LAVENDER:3873897215,LAVENDERBLUSH:4293981695,LAWNGREEN:2096890111,LEMONCHIFFON:4294626815,LIGHTBLUE:2916673279,LIGHTCORAL:4034953471,LIGHTCYAN:3774873599,LIGHTGOLDENRODYELLOW:4210742015,LIGHTGRAY:3553874943,LIGHTGREEN:2431553791,LIGHTGREY:3553874943,LIGHTPINK:4290167295,LIGHTSALMON:4288707327,LIGHTSEAGREEN:548580095,LIGHTSKYBLUE:2278488831,LIGHTSLATEGRAY:2005441023,LIGHTSLATEGREY:2005441023,LIGHTSTEELBLUE:2965692159,LIGHTYELLOW:4294959359,LIME:16711935,LIMEGREEN:852308735,LINEN:4210091775,MAGENTA:4278255615,MAROON:2147483903,MEDIUMAQUAMARINE:1724754687,MEDIUMBLUE:52735,MEDIUMORCHID:3126187007,MEDIUMPURPLE:2473647103,MEDIUMSEAGREEN:1018393087,MEDIUMSLATEBLUE:2070474495,MEDIUMSPRINGGREEN:16423679,MEDIUMTURQUOISE:1221709055,MEDIUMVIOLETRED:3340076543,MIDNIGHTBLUE:421097727,MINTCREAM:4127193855,MISTYROSE:4293190143,MOCCASIN:4293178879,NAVAJOWHITE:4292783615,NAVY:33023,OLDLACE:4260751103,OLIVE:2155872511,OLIVEDRAB:1804477439,ORANGE:4289003775,ORANGERED:4282712319,ORCHID:3664828159,PALEGOLDENROD:4008225535,PALEGREEN:2566625535,PALETURQUOISE:2951671551,PALEVIOLETRED:3681588223,PAPAYAWHIP:4293907967,PEACHPUFF:4292524543,PERU:3448061951,PINK:4290825215,PLUM:3718307327,POWDERBLUE:2967529215,PURPLE:2147516671,REBECCAPURPLE:1714657791,RED:4278190335,ROSYBROWN:3163525119,ROYALBLUE:1097458175,SADDLEBROWN:2336560127,SALMON:4202722047,SANDYBROWN:4104413439,SEAGREEN:780883967,SEASHELL:4294307583,SIENNA:2689740287,SILVER:3233857791,SKYBLUE:2278484991,SLATEBLUE:1784335871,SLATEGRAY:1887473919,SLATEGREY:1887473919,SNOW:4294638335,SPRINGGREEN:16744447,STEELBLUE:1182971135,TAN:3535047935,TEAL:8421631,THISTLE:3636451583,TOMATO:4284696575,TRANSPARENT:0,TURQUOISE:1088475391,VIOLET:4001558271,WHEAT:4125012991,WHITE:4294967295,WHITESMOKE:4126537215,YELLOW:4294902015,YELLOWGREEN:2597139199},Ow={name:"background-clip",initialValue:"border-box",prefix:!1,type:1,parse:function(n,A){return A.map(function(e){if(JA(e))switch(e.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},Nw={name:"background-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},Hs=function(n,A){var e=$t.parse(n,A[0]),t=A[1];return t&&oe(t)?{color:e,stop:t}:{color:e,stop:null}},Hc=function(n,A){var e=n[0],t=n[n.length-1];e.stop===null&&(e.stop=xe),t.stop===null&&(t.stop=Yt);for(var i=[],r=0,s=0;s<n.length;s++){var a=n[s].stop;if(a!==null){var o=ZA(a,A);o>r?i.push(o):i.push(r),r=o}else i.push(null)}for(var l=null,s=0;s<i.length;s++){var c=i[s];if(c===null)l===null&&(l=s);else if(l!==null){for(var u=s-l,h=i[l-1],p=(c-h)/(u+1),g=1;g<=u;g++)i[l+g-1]=p*g;l=null}}return n.map(function(m,d){var f=m.color;return{color:f,stop:Math.max(Math.min(1,i[d]/A),0)}})},Gw=function(n,A,e){var t=A/2,i=e/2,r=ZA(n[0],A)-t,s=i-ZA(n[1],e);return(Math.atan2(s,r)+Math.PI*2)%(Math.PI*2)},Vw=function(n,A,e){var t=typeof n=="number"?n:Gw(n,A,e),i=Math.abs(A*Math.sin(t))+Math.abs(e*Math.cos(t)),r=A/2,s=e/2,a=i/2,o=Math.sin(t-Math.PI/2)*a,l=Math.cos(t-Math.PI/2)*a;return[i,r-l,r+l,s-o,s+o]},it=function(n,A){return Math.sqrt(n*n+A*A)},Dc=function(n,A,e,t,i){var r=[[0,0],[0,A],[n,0],[n,A]];return r.reduce(function(s,a){var o=a[0],l=a[1],c=it(e-o,t-l);return(i?c<s.optimumDistance:c>s.optimumDistance)?{optimumCorner:a,optimumDistance:c}:s},{optimumDistance:i?1/0:-1/0,optimumCorner:null}).optimumCorner},Kw=function(n,A,e,t,i){var r=0,s=0;switch(n.size){case 0:n.shape===0?r=s=Math.min(Math.abs(A),Math.abs(A-t),Math.abs(e),Math.abs(e-i)):n.shape===1&&(r=Math.min(Math.abs(A),Math.abs(A-t)),s=Math.min(Math.abs(e),Math.abs(e-i)));break;case 2:if(n.shape===0)r=s=Math.min(it(A,e),it(A,e-i),it(A-t,e),it(A-t,e-i));else if(n.shape===1){var a=Math.min(Math.abs(e),Math.abs(e-i))/Math.min(Math.abs(A),Math.abs(A-t)),o=Dc(t,i,A,e,!0),l=o[0],c=o[1];r=it(l-A,(c-e)/a),s=a*r}break;case 1:n.shape===0?r=s=Math.max(Math.abs(A),Math.abs(A-t),Math.abs(e),Math.abs(e-i)):n.shape===1&&(r=Math.max(Math.abs(A),Math.abs(A-t)),s=Math.max(Math.abs(e),Math.abs(e-i)));break;case 3:if(n.shape===0)r=s=Math.max(it(A,e),it(A,e-i),it(A-t,e),it(A-t,e-i));else if(n.shape===1){var a=Math.max(Math.abs(e),Math.abs(e-i))/Math.max(Math.abs(A),Math.abs(A-t)),u=Dc(t,i,A,e,!1),l=u[0],c=u[1];r=it(l-A,(c-e)/a),s=a*r}break}return Array.isArray(n.size)&&(r=ZA(n.size[0],t),s=n.size.length===2?ZA(n.size[1],i):r),[r,s]},kw=function(n,A){var e=je(180),t=[];return gt(A).forEach(function(i,r){if(r===0){var s=i[0];if(s.type===20&&s.value==="to"){e=wh(i);return}else if(Bh(s)){e=Rs.parse(n,s);return}}var a=Hs(n,i);t.push(a)}),{angle:e,stops:t,type:1}},$r=function(n,A){var e=je(180),t=[];return gt(A).forEach(function(i,r){if(r===0){var s=i[0];if(s.type===20&&["top","left","right","bottom"].indexOf(s.value)!==-1){e=wh(i);return}else if(Bh(s)){e=(Rs.parse(n,s)+je(270))%je(360);return}}var a=Hs(n,i);t.push(a)}),{angle:e,stops:t,type:1}},zw=function(n,A){var e=je(180),t=[],i=1,r=0,s=3,a=[];return gt(A).forEach(function(o,l){var c=o[0];if(l===0){if(JA(c)&&c.value==="linear"){i=1;return}else if(JA(c)&&c.value==="radial"){i=2;return}}if(c.type===18){if(c.name==="from"){var u=$t.parse(n,c.values[0]);t.push({stop:xe,color:u})}else if(c.name==="to"){var u=$t.parse(n,c.values[0]);t.push({stop:Yt,color:u})}else if(c.name==="color-stop"){var h=c.values.filter(Bi);if(h.length===2){var u=$t.parse(n,h[1]),p=h[0];Ci(p)&&t.push({stop:{type:16,number:p.number*100,flags:p.flags},color:u})}}}}),i===1?{angle:(e+je(180))%je(360),stops:t,type:i}:{size:s,shape:r,stops:t,position:a,type:i}},vh="closest-side",_h="farthest-side",Ch="closest-corner",Eh="farthest-corner",xh="circle",Uh="ellipse",yh="cover",Sh="contain",Ww=function(n,A){var e=0,t=3,i=[],r=[];return gt(A).forEach(function(s,a){var o=!0;if(a===0){var l=!1;o=s.reduce(function(u,h){if(l)if(JA(h))switch(h.value){case"center":return r.push(Ro),u;case"top":case"left":return r.push(xe),u;case"right":case"bottom":return r.push(Yt),u}else(oe(h)||tn(h))&&r.push(h);else if(JA(h))switch(h.value){case xh:return e=0,!1;case Uh:return e=1,!1;case"at":return l=!0,!1;case vh:return t=0,!1;case yh:case _h:return t=1,!1;case Sh:case Ch:return t=2,!1;case Eh:return t=3,!1}else if(tn(h)||oe(h))return Array.isArray(t)||(t=[]),t.push(h),!1;return u},o)}if(o){var c=Hs(n,s);i.push(c)}}),{size:t,shape:e,stops:i,position:r,type:2}},As=function(n,A){var e=0,t=3,i=[],r=[];return gt(A).forEach(function(s,a){var o=!0;if(a===0?o=s.reduce(function(c,u){if(JA(u))switch(u.value){case"center":return r.push(Ro),!1;case"top":case"left":return r.push(xe),!1;case"right":case"bottom":return r.push(Yt),!1}else if(oe(u)||tn(u))return r.push(u),!1;return c},o):a===1&&(o=s.reduce(function(c,u){if(JA(u))switch(u.value){case xh:return e=0,!1;case Uh:return e=1,!1;case Sh:case vh:return t=0,!1;case _h:return t=1,!1;case Ch:return t=2,!1;case yh:case Eh:return t=3,!1}else if(tn(u)||oe(u))return Array.isArray(t)||(t=[]),t.push(u),!1;return c},o)),o){var l=Hs(n,s);i.push(l)}}),{size:t,shape:e,stops:i,position:r,type:2}},Xw=function(n){return n.type===1},Yw=function(n){return n.type===2},Ho={name:"image",parse:function(n,A){if(A.type===22){var e={url:A.value,type:0};return n.cache.addImage(A.value),e}if(A.type===18){var t=Mh[A.name];if(typeof t>"u")throw new Error('Attempting to parse an unsupported image function "'+A.name+'"');return t(n,A.values)}throw new Error("Unsupported image type "+A.type)}};function Jw(n){return!(n.type===20&&n.value==="none")&&(n.type!==18||!!Mh[n.name])}var Mh={"linear-gradient":kw,"-moz-linear-gradient":$r,"-ms-linear-gradient":$r,"-o-linear-gradient":$r,"-webkit-linear-gradient":$r,"radial-gradient":Ww,"-moz-radial-gradient":As,"-ms-radial-gradient":As,"-o-radial-gradient":As,"-webkit-radial-gradient":As,"-webkit-gradient":zw},Zw={name:"background-image",initialValue:"none",type:1,prefix:!1,parse:function(n,A){if(A.length===0)return[];var e=A[0];return e.type===20&&e.value==="none"?[]:A.filter(function(t){return Bi(t)&&Jw(t)}).map(function(t){return Ho.parse(n,t)})}},qw={name:"background-origin",initialValue:"border-box",prefix:!1,type:1,parse:function(n,A){return A.map(function(e){if(JA(e))switch(e.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},jw={name:"background-position",initialValue:"0% 0%",type:1,prefix:!1,parse:function(n,A){return gt(A).map(function(e){return e.filter(oe)}).map(fh)}},$w={name:"background-repeat",initialValue:"repeat",prefix:!1,type:1,parse:function(n,A){return gt(A).map(function(e){return e.filter(JA).map(function(t){return t.value}).join(" ")}).map(Av)}},Av=function(n){switch(n){case"no-repeat":return 1;case"repeat-x":case"repeat no-repeat":return 2;case"repeat-y":case"no-repeat repeat":return 3;case"repeat":default:return 0}},li;(function(n){n.AUTO="auto",n.CONTAIN="contain",n.COVER="cover"})(li||(li={}));var ev={name:"background-size",initialValue:"0",prefix:!1,type:1,parse:function(n,A){return gt(A).map(function(e){return e.filter(tv)})}},tv=function(n){return JA(n)||oe(n)},Ds=function(n){return{name:"border-"+n+"-color",initialValue:"transparent",prefix:!1,type:3,format:"color"}},nv=Ds("top"),iv=Ds("right"),rv=Ds("bottom"),sv=Ds("left"),Ps=function(n){return{name:"border-radius-"+n,initialValue:"0 0",prefix:!1,type:1,parse:function(A,e){return fh(e.filter(oe))}}},av=Ps("top-left"),ov=Ps("top-right"),lv=Ps("bottom-right"),cv=Ps("bottom-left"),Os=function(n){return{name:"border-"+n+"-style",initialValue:"solid",prefix:!1,type:2,parse:function(A,e){switch(e){case"none":return 0;case"dashed":return 2;case"dotted":return 3;case"double":return 4}return 1}}},uv=Os("top"),hv=Os("right"),fv=Os("bottom"),dv=Os("left"),Ns=function(n){return{name:"border-"+n+"-width",initialValue:"0",type:0,prefix:!1,parse:function(A,e){return pr(e)?e.number:0}}},pv=Ns("top"),gv=Ns("right"),mv=Ns("bottom"),Bv=Ns("left"),wv={name:"color",initialValue:"transparent",prefix:!1,type:3,format:"color"},vv={name:"direction",initialValue:"ltr",prefix:!1,type:2,parse:function(n,A){switch(A){case"rtl":return 1;case"ltr":default:return 0}}},_v={name:"display",initialValue:"inline-block",prefix:!1,type:1,parse:function(n,A){return A.filter(JA).reduce(function(e,t){return e|Cv(t.value)},0)}},Cv=function(n){switch(n){case"block":case"-webkit-box":return 2;case"inline":return 4;case"run-in":return 8;case"flow":return 16;case"flow-root":return 32;case"table":return 64;case"flex":case"-webkit-flex":return 128;case"grid":case"-ms-grid":return 256;case"ruby":return 512;case"subgrid":return 1024;case"list-item":return 2048;case"table-row-group":return 4096;case"table-header-group":return 8192;case"table-footer-group":return 16384;case"table-row":return 32768;case"table-cell":return 65536;case"table-column-group":return 131072;case"table-column":return 262144;case"table-caption":return 524288;case"ruby-base":return 1048576;case"ruby-text":return 2097152;case"ruby-base-container":return 4194304;case"ruby-text-container":return 8388608;case"contents":return 16777216;case"inline-block":return 33554432;case"inline-list-item":return 67108864;case"inline-table":return 134217728;case"inline-flex":return 268435456;case"inline-grid":return 536870912}return 0},Ev={name:"float",initialValue:"none",prefix:!1,type:2,parse:function(n,A){switch(A){case"left":return 1;case"right":return 2;case"inline-start":return 3;case"inline-end":return 4}return 0}},xv={name:"letter-spacing",initialValue:"0",prefix:!1,type:0,parse:function(n,A){return A.type===20&&A.value==="normal"?0:A.type===17||A.type===15?A.number:0}},vs;(function(n){n.NORMAL="normal",n.STRICT="strict"})(vs||(vs={}));var Uv={name:"line-break",initialValue:"normal",prefix:!1,type:2,parse:function(n,A){switch(A){case"strict":return vs.STRICT;case"normal":default:return vs.NORMAL}}},yv={name:"line-height",initialValue:"normal",prefix:!1,type:4},Pc=function(n,A){return JA(n)&&n.value==="normal"?1.2*A:n.type===17?A*n.number:oe(n)?ZA(n,A):A},Sv={name:"list-style-image",initialValue:"none",type:0,prefix:!1,parse:function(n,A){return A.type===20&&A.value==="none"?null:Ho.parse(n,A)}},Mv={name:"list-style-position",initialValue:"outside",prefix:!1,type:2,parse:function(n,A){switch(A){case"inside":return 0;case"outside":default:return 1}}},go={name:"list-style-type",initialValue:"none",prefix:!1,type:2,parse:function(n,A){switch(A){case"disc":return 0;case"circle":return 1;case"square":return 2;case"decimal":return 3;case"cjk-decimal":return 4;case"decimal-leading-zero":return 5;case"lower-roman":return 6;case"upper-roman":return 7;case"lower-greek":return 8;case"lower-alpha":return 9;case"upper-alpha":return 10;case"arabic-indic":return 11;case"armenian":return 12;case"bengali":return 13;case"cambodian":return 14;case"cjk-earthly-branch":return 15;case"cjk-heavenly-stem":return 16;case"cjk-ideographic":return 17;case"devanagari":return 18;case"ethiopic-numeric":return 19;case"georgian":return 20;case"gujarati":return 21;case"gurmukhi":return 22;case"hebrew":return 22;case"hiragana":return 23;case"hiragana-iroha":return 24;case"japanese-formal":return 25;case"japanese-informal":return 26;case"kannada":return 27;case"katakana":return 28;case"katakana-iroha":return 29;case"khmer":return 30;case"korean-hangul-formal":return 31;case"korean-hanja-formal":return 32;case"korean-hanja-informal":return 33;case"lao":return 34;case"lower-armenian":return 35;case"malayalam":return 36;case"mongolian":return 37;case"myanmar":return 38;case"oriya":return 39;case"persian":return 40;case"simp-chinese-formal":return 41;case"simp-chinese-informal":return 42;case"tamil":return 43;case"telugu":return 44;case"thai":return 45;case"tibetan":return 46;case"trad-chinese-formal":return 47;case"trad-chinese-informal":return 48;case"upper-armenian":return 49;case"disclosure-open":return 50;case"disclosure-closed":return 51;case"none":default:return-1}}},Gs=function(n){return{name:"margin-"+n,initialValue:"0",prefix:!1,type:4}},Fv=Gs("top"),bv=Gs("right"),Tv=Gs("bottom"),Qv=Gs("left"),Iv={name:"overflow",initialValue:"visible",prefix:!1,type:1,parse:function(n,A){return A.filter(JA).map(function(e){switch(e.value){case"hidden":return 1;case"scroll":return 2;case"clip":return 3;case"auto":return 4;case"visible":default:return 0}})}},Lv={name:"overflow-wrap",initialValue:"normal",prefix:!1,type:2,parse:function(n,A){switch(A){case"break-word":return"break-word";case"normal":default:return"normal"}}},Vs=function(n){return{name:"padding-"+n,initialValue:"0",prefix:!1,type:3,format:"length-percentage"}},Rv=Vs("top"),Hv=Vs("right"),Dv=Vs("bottom"),Pv=Vs("left"),Ov={name:"text-align",initialValue:"left",prefix:!1,type:2,parse:function(n,A){switch(A){case"right":return 2;case"center":case"justify":return 1;case"left":default:return 0}}},Nv={name:"position",initialValue:"static",prefix:!1,type:2,parse:function(n,A){switch(A){case"relative":return 1;case"absolute":return 2;case"fixed":return 3;case"sticky":return 4}return 0}},Gv={name:"text-shadow",initialValue:"none",type:1,prefix:!1,parse:function(n,A){return A.length===1&&po(A[0],"none")?[]:gt(A).map(function(e){for(var t={color:It.TRANSPARENT,offsetX:xe,offsetY:xe,blur:xe},i=0,r=0;r<e.length;r++){var s=e[r];tn(s)?(i===0?t.offsetX=s:i===1?t.offsetY=s:t.blur=s,i++):t.color=$t.parse(n,s)}return t})}},Vv={name:"text-transform",initialValue:"none",prefix:!1,type:2,parse:function(n,A){switch(A){case"uppercase":return 2;case"lowercase":return 1;case"capitalize":return 3}return 0}},Kv={name:"transform",initialValue:"none",prefix:!0,type:0,parse:function(n,A){if(A.type===20&&A.value==="none")return null;if(A.type===18){var e=Wv[A.name];if(typeof e>"u")throw new Error('Attempting to parse an unsupported transform function "'+A.name+'"');return e(A.values)}return null}},kv=function(n){var A=n.filter(function(e){return e.type===17}).map(function(e){return e.number});return A.length===6?A:null},zv=function(n){var A=n.filter(function(o){return o.type===17}).map(function(o){return o.number}),e=A[0],t=A[1];A[2],A[3];var i=A[4],r=A[5];A[6],A[7],A[8],A[9],A[10],A[11];var s=A[12],a=A[13];return A[14],A[15],A.length===16?[e,t,i,r,s,a]:null},Wv={matrix:kv,matrix3d:zv},Oc={type:16,number:50,flags:dr},Xv=[Oc,Oc],Yv={name:"transform-origin",initialValue:"50% 50%",prefix:!0,type:1,parse:function(n,A){var e=A.filter(oe);return e.length!==2?Xv:[e[0],e[1]]}},Jv={name:"visible",initialValue:"none",prefix:!1,type:2,parse:function(n,A){switch(A){case"hidden":return 1;case"collapse":return 2;case"visible":default:return 0}}},Yi;(function(n){n.NORMAL="normal",n.BREAK_ALL="break-all",n.KEEP_ALL="keep-all"})(Yi||(Yi={}));var Zv={name:"word-break",initialValue:"normal",prefix:!1,type:2,parse:function(n,A){switch(A){case"break-all":return Yi.BREAK_ALL;case"keep-all":return Yi.KEEP_ALL;case"normal":default:return Yi.NORMAL}}},qv={name:"z-index",initialValue:"auto",prefix:!1,type:0,parse:function(n,A){if(A.type===20)return{auto:!0,order:0};if(Ci(A))return{auto:!1,order:A.number};throw new Error("Invalid z-index number parsed")}},Fh={name:"time",parse:function(n,A){if(A.type===15)switch(A.unit.toLowerCase()){case"s":return 1e3*A.number;case"ms":return A.number}throw new Error("Unsupported time type")}},jv={name:"opacity",initialValue:"1",type:0,prefix:!1,parse:function(n,A){return Ci(A)?A.number:1}},$v={name:"text-decoration-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},A_={name:"text-decoration-line",initialValue:"none",prefix:!1,type:1,parse:function(n,A){return A.filter(JA).map(function(e){switch(e.value){case"underline":return 1;case"overline":return 2;case"line-through":return 3;case"none":return 4}return 0}).filter(function(e){return e!==0})}},e_={name:"font-family",initialValue:"",prefix:!1,type:1,parse:function(n,A){var e=[],t=[];return A.forEach(function(i){switch(i.type){case 20:case 0:e.push(i.value);break;case 17:e.push(i.number.toString());break;case 4:t.push(e.join(" ")),e.length=0;break}}),e.length&&t.push(e.join(" ")),t.map(function(i){return i.indexOf(" ")===-1?i:"'"+i+"'"})}},t_={name:"font-size",initialValue:"0",prefix:!1,type:3,format:"length"},n_={name:"font-weight",initialValue:"normal",type:0,prefix:!1,parse:function(n,A){if(Ci(A))return A.number;if(JA(A))switch(A.value){case"bold":return 700;case"normal":default:return 400}return 400}},i_={name:"font-variant",initialValue:"none",type:1,prefix:!1,parse:function(n,A){return A.filter(JA).map(function(e){return e.value})}},r_={name:"font-style",initialValue:"normal",prefix:!1,type:2,parse:function(n,A){switch(A){case"oblique":return"oblique";case"italic":return"italic";case"normal":default:return"normal"}}},ue=function(n,A){return(n&A)!==0},s_={name:"content",initialValue:"none",type:1,prefix:!1,parse:function(n,A){if(A.length===0)return[];var e=A[0];return e.type===20&&e.value==="none"?[]:A}},a_={name:"counter-increment",initialValue:"none",prefix:!0,type:1,parse:function(n,A){if(A.length===0)return null;var e=A[0];if(e.type===20&&e.value==="none")return null;for(var t=[],i=A.filter(hh),r=0;r<i.length;r++){var s=i[r],a=i[r+1];if(s.type===20){var o=a&&Ci(a)?a.number:1;t.push({counter:s.value,increment:o})}}return t}},o_={name:"counter-reset",initialValue:"none",prefix:!0,type:1,parse:function(n,A){if(A.length===0)return[];for(var e=[],t=A.filter(hh),i=0;i<t.length;i++){var r=t[i],s=t[i+1];if(JA(r)&&r.value!=="none"){var a=s&&Ci(s)?s.number:0;e.push({counter:r.value,reset:a})}}return e}},l_={name:"duration",initialValue:"0s",prefix:!1,type:1,parse:function(n,A){return A.filter(pr).map(function(e){return Fh.parse(n,e)})}},c_={name:"quotes",initialValue:"none",prefix:!0,type:1,parse:function(n,A){if(A.length===0)return null;var e=A[0];if(e.type===20&&e.value==="none")return null;var t=[],i=A.filter(Hw);if(i.length%2!==0)return null;for(var r=0;r<i.length;r+=2){var s=i[r].value,a=i[r+1].value;t.push({open:s,close:a})}return t}},Nc=function(n,A,e){if(!n)return"";var t=n[Math.min(A,n.length-1)];return t?e?t.open:t.close:""},u_={name:"box-shadow",initialValue:"none",type:1,prefix:!1,parse:function(n,A){return A.length===1&&po(A[0],"none")?[]:gt(A).map(function(e){for(var t={color:255,offsetX:xe,offsetY:xe,blur:xe,spread:xe,inset:!1},i=0,r=0;r<e.length;r++){var s=e[r];po(s,"inset")?t.inset=!0:tn(s)?(i===0?t.offsetX=s:i===1?t.offsetY=s:i===2?t.blur=s:t.spread=s,i++):t.color=$t.parse(n,s)}return t})}},h_={name:"paint-order",initialValue:"normal",prefix:!1,type:1,parse:function(n,A){var e=[0,1,2],t=[];return A.filter(JA).forEach(function(i){switch(i.value){case"stroke":t.push(1);break;case"fill":t.push(0);break;case"markers":t.push(2);break}}),e.forEach(function(i){t.indexOf(i)===-1&&t.push(i)}),t}},f_={name:"-webkit-text-stroke-color",initialValue:"currentcolor",prefix:!1,type:3,format:"color"},d_={name:"-webkit-text-stroke-width",initialValue:"0",type:0,prefix:!1,parse:function(n,A){return pr(A)?A.number:0}},p_=function(){function n(A,e){var t,i;this.animationDuration=pA(A,l_,e.animationDuration),this.backgroundClip=pA(A,Ow,e.backgroundClip),this.backgroundColor=pA(A,Nw,e.backgroundColor),this.backgroundImage=pA(A,Zw,e.backgroundImage),this.backgroundOrigin=pA(A,qw,e.backgroundOrigin),this.backgroundPosition=pA(A,jw,e.backgroundPosition),this.backgroundRepeat=pA(A,$w,e.backgroundRepeat),this.backgroundSize=pA(A,ev,e.backgroundSize),this.borderTopColor=pA(A,nv,e.borderTopColor),this.borderRightColor=pA(A,iv,e.borderRightColor),this.borderBottomColor=pA(A,rv,e.borderBottomColor),this.borderLeftColor=pA(A,sv,e.borderLeftColor),this.borderTopLeftRadius=pA(A,av,e.borderTopLeftRadius),this.borderTopRightRadius=pA(A,ov,e.borderTopRightRadius),this.borderBottomRightRadius=pA(A,lv,e.borderBottomRightRadius),this.borderBottomLeftRadius=pA(A,cv,e.borderBottomLeftRadius),this.borderTopStyle=pA(A,uv,e.borderTopStyle),this.borderRightStyle=pA(A,hv,e.borderRightStyle),this.borderBottomStyle=pA(A,fv,e.borderBottomStyle),this.borderLeftStyle=pA(A,dv,e.borderLeftStyle),this.borderTopWidth=pA(A,pv,e.borderTopWidth),this.borderRightWidth=pA(A,gv,e.borderRightWidth),this.borderBottomWidth=pA(A,mv,e.borderBottomWidth),this.borderLeftWidth=pA(A,Bv,e.borderLeftWidth),this.boxShadow=pA(A,u_,e.boxShadow),this.color=pA(A,wv,e.color),this.direction=pA(A,vv,e.direction),this.display=pA(A,_v,e.display),this.float=pA(A,Ev,e.cssFloat),this.fontFamily=pA(A,e_,e.fontFamily),this.fontSize=pA(A,t_,e.fontSize),this.fontStyle=pA(A,r_,e.fontStyle),this.fontVariant=pA(A,i_,e.fontVariant),this.fontWeight=pA(A,n_,e.fontWeight),this.letterSpacing=pA(A,xv,e.letterSpacing),this.lineBreak=pA(A,Uv,e.lineBreak),this.lineHeight=pA(A,yv,e.lineHeight),this.listStyleImage=pA(A,Sv,e.listStyleImage),this.listStylePosition=pA(A,Mv,e.listStylePosition),this.listStyleType=pA(A,go,e.listStyleType),this.marginTop=pA(A,Fv,e.marginTop),this.marginRight=pA(A,bv,e.marginRight),this.marginBottom=pA(A,Tv,e.marginBottom),this.marginLeft=pA(A,Qv,e.marginLeft),this.opacity=pA(A,jv,e.opacity);var r=pA(A,Iv,e.overflow);this.overflowX=r[0],this.overflowY=r[r.length>1?1:0],this.overflowWrap=pA(A,Lv,e.overflowWrap),this.paddingTop=pA(A,Rv,e.paddingTop),this.paddingRight=pA(A,Hv,e.paddingRight),this.paddingBottom=pA(A,Dv,e.paddingBottom),this.paddingLeft=pA(A,Pv,e.paddingLeft),this.paintOrder=pA(A,h_,e.paintOrder),this.position=pA(A,Nv,e.position),this.textAlign=pA(A,Ov,e.textAlign),this.textDecorationColor=pA(A,$v,(t=e.textDecorationColor)!==null&&t!==void 0?t:e.color),this.textDecorationLine=pA(A,A_,(i=e.textDecorationLine)!==null&&i!==void 0?i:e.textDecoration),this.textShadow=pA(A,Gv,e.textShadow),this.textTransform=pA(A,Vv,e.textTransform),this.transform=pA(A,Kv,e.transform),this.transformOrigin=pA(A,Yv,e.transformOrigin),this.visibility=pA(A,Jv,e.visibility),this.webkitTextStrokeColor=pA(A,f_,e.webkitTextStrokeColor),this.webkitTextStrokeWidth=pA(A,d_,e.webkitTextStrokeWidth),this.wordBreak=pA(A,Zv,e.wordBreak),this.zIndex=pA(A,qv,e.zIndex)}return n.prototype.isVisible=function(){return this.display>0&&this.opacity>0&&this.visibility===0},n.prototype.isTransparent=function(){return An(this.backgroundColor)},n.prototype.isTransformed=function(){return this.transform!==null},n.prototype.isPositioned=function(){return this.position!==0},n.prototype.isPositionedWithZIndex=function(){return this.isPositioned()&&!this.zIndex.auto},n.prototype.isFloating=function(){return this.float!==0},n.prototype.isInlineLevel=function(){return ue(this.display,4)||ue(this.display,33554432)||ue(this.display,268435456)||ue(this.display,536870912)||ue(this.display,67108864)||ue(this.display,134217728)},n}(),g_=function(){function n(A,e){this.content=pA(A,s_,e.content),this.quotes=pA(A,c_,e.quotes)}return n}(),Gc=function(){function n(A,e){this.counterIncrement=pA(A,a_,e.counterIncrement),this.counterReset=pA(A,o_,e.counterReset)}return n}(),pA=function(n,A,e){var t=new ch,i=e!==null&&typeof e<"u"?e.toString():A.initialValue;t.write(i);var r=new uh(t.read());switch(A.type){case 2:var s=r.parseComponentValue();return A.parse(n,JA(s)?s.value:A.initialValue);case 0:return A.parse(n,r.parseComponentValue());case 1:return A.parse(n,r.parseComponentValues());case 4:return r.parseComponentValue();case 3:switch(A.format){case"angle":return Rs.parse(n,r.parseComponentValue());case"color":return $t.parse(n,r.parseComponentValue());case"image":return Ho.parse(n,r.parseComponentValue());case"length":var a=r.parseComponentValue();return tn(a)?a:xe;case"length-percentage":var o=r.parseComponentValue();return oe(o)?o:xe;case"time":return Fh.parse(n,r.parseComponentValue())}break}},m_="data-html2canvas-debug",B_=function(n){var A=n.getAttribute(m_);switch(A){case"all":return 1;case"clone":return 2;case"parse":return 3;case"render":return 4;default:return 0}},mo=function(n,A){var e=B_(n);return e===1||A===e},mt=function(){function n(A,e){if(this.context=A,this.textNodes=[],this.elements=[],this.flags=0,mo(e,3))debugger;this.styles=new p_(A,window.getComputedStyle(e,null)),vo(e)&&(this.styles.animationDuration.some(function(t){return t>0})&&(e.style.animationDuration="0s"),this.styles.transform!==null&&(e.style.transform="none")),this.bounds=Is(this.context,e),mo(e,4)&&(this.flags|=16)}return n}(),w_="AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=",Vc="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Oi=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var es=0;es<Vc.length;es++)Oi[Vc.charCodeAt(es)]=es;var v_=function(n){var A=n.length*.75,e=n.length,t,i=0,r,s,a,o;n[n.length-1]==="="&&(A--,n[n.length-2]==="="&&A--);var l=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(A):new Array(A),c=Array.isArray(l)?l:new Uint8Array(l);for(t=0;t<e;t+=4)r=Oi[n.charCodeAt(t)],s=Oi[n.charCodeAt(t+1)],a=Oi[n.charCodeAt(t+2)],o=Oi[n.charCodeAt(t+3)],c[i++]=r<<2|s>>4,c[i++]=(s&15)<<4|a>>2,c[i++]=(a&3)<<6|o&63;return l},__=function(n){for(var A=n.length,e=[],t=0;t<A;t+=2)e.push(n[t+1]<<8|n[t]);return e},C_=function(n){for(var A=n.length,e=[],t=0;t<A;t+=4)e.push(n[t+3]<<24|n[t+2]<<16|n[t+1]<<8|n[t]);return e},xn=5,Do=6+5,Ta=2,E_=Do-xn,bh=65536>>xn,x_=1<<xn,Qa=x_-1,U_=1024>>xn,y_=bh+U_,S_=y_,M_=32,F_=S_+M_,b_=65536>>Do,T_=1<<E_,Q_=T_-1,Kc=function(n,A,e){return n.slice?n.slice(A,e):new Uint16Array(Array.prototype.slice.call(n,A,e))},I_=function(n,A,e){return n.slice?n.slice(A,e):new Uint32Array(Array.prototype.slice.call(n,A,e))},L_=function(n,A){var e=v_(n),t=Array.isArray(e)?C_(e):new Uint32Array(e),i=Array.isArray(e)?__(e):new Uint16Array(e),r=24,s=Kc(i,r/2,t[4]/2),a=t[5]===2?Kc(i,(r+t[4])/2):I_(t,Math.ceil((r+t[4])/4));return new R_(t[0],t[1],t[2],t[3],s,a)},R_=function(){function n(A,e,t,i,r,s){this.initialValue=A,this.errorValue=e,this.highStart=t,this.highValueIndex=i,this.index=r,this.data=s}return n.prototype.get=function(A){var e;if(A>=0){if(A<55296||A>56319&&A<=65535)return e=this.index[A>>xn],e=(e<<Ta)+(A&Qa),this.data[e];if(A<=65535)return e=this.index[bh+(A-55296>>xn)],e=(e<<Ta)+(A&Qa),this.data[e];if(A<this.highStart)return e=F_-b_+(A>>Do),e=this.index[e],e+=A>>xn&Q_,e=this.index[e],e=(e<<Ta)+(A&Qa),this.data[e];if(A<=1114111)return this.data[this.highValueIndex]}return this.errorValue},n}(),kc="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",H_=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var ts=0;ts<kc.length;ts++)H_[kc.charCodeAt(ts)]=ts;var D_=1,Ia=2,La=3,zc=4,Wc=5,P_=7,Xc=8,Ra=9,Ha=10,Yc=11,Jc=12,Zc=13,qc=14,Da=15,O_=function(n){for(var A=[],e=0,t=n.length;e<t;){var i=n.charCodeAt(e++);if(i>=55296&&i<=56319&&e<t){var r=n.charCodeAt(e++);(r&64512)===56320?A.push(((i&1023)<<10)+(r&1023)+65536):(A.push(i),e--)}else A.push(i)}return A},N_=function(){for(var n=[],A=0;A<arguments.length;A++)n[A]=arguments[A];if(String.fromCodePoint)return String.fromCodePoint.apply(String,n);var e=n.length;if(!e)return"";for(var t=[],i=-1,r="";++i<e;){var s=n[i];s<=65535?t.push(s):(s-=65536,t.push((s>>10)+55296,s%1024+56320)),(i+1===e||t.length>16384)&&(r+=String.fromCharCode.apply(String,t),t.length=0)}return r},G_=L_(w_),Ye="×",Pa="÷",V_=function(n){return G_.get(n)},K_=function(n,A,e){var t=e-2,i=A[t],r=A[e-1],s=A[e];if(r===Ia&&s===La)return Ye;if(r===Ia||r===La||r===zc||s===Ia||s===La||s===zc)return Pa;if(r===Xc&&[Xc,Ra,Yc,Jc].indexOf(s)!==-1||(r===Yc||r===Ra)&&(s===Ra||s===Ha)||(r===Jc||r===Ha)&&s===Ha||s===Zc||s===Wc||s===P_||r===D_)return Ye;if(r===Zc&&s===qc){for(;i===Wc;)i=A[--t];if(i===qc)return Ye}if(r===Da&&s===Da){for(var a=0;i===Da;)a++,i=A[--t];if(a%2===0)return Ye}return Pa},k_=function(n){var A=O_(n),e=A.length,t=0,i=0,r=A.map(V_);return{next:function(){if(t>=e)return{done:!0,value:null};for(var s=Ye;t<e&&(s=K_(A,r,++t))===Ye;);if(s!==Ye||t===e){var a=N_.apply(null,A.slice(i,t));return i=t,{value:a,done:!1}}return{done:!0,value:null}}}},z_=function(n){for(var A=k_(n),e=[],t;!(t=A.next()).done;)t.value&&e.push(t.value.slice());return e},W_=function(n){var A=123;if(n.createRange){var e=n.createRange();if(e.getBoundingClientRect){var t=n.createElement("boundtest");t.style.height=A+"px",t.style.display="block",n.body.appendChild(t),e.selectNode(t);var i=e.getBoundingClientRect(),r=Math.round(i.height);if(n.body.removeChild(t),r===A)return!0}}return!1},X_=function(n){var A=n.createElement("boundtest");A.style.width="50px",A.style.display="block",A.style.fontSize="12px",A.style.letterSpacing="0px",A.style.wordSpacing="0px",n.body.appendChild(A);var e=n.createRange();A.innerHTML=typeof"".repeat=="function"?"&#128104;".repeat(10):"";var t=A.firstChild,i=Ls(t.data).map(function(o){return ie(o)}),r=0,s={},a=i.every(function(o,l){e.setStart(t,r),e.setEnd(t,r+o.length);var c=e.getBoundingClientRect();r+=o.length;var u=c.x>s.x||c.y>s.y;return s=c,l===0?!0:u});return n.body.removeChild(A),a},Y_=function(){return typeof new Image().crossOrigin<"u"},J_=function(){return typeof new XMLHttpRequest().responseType=="string"},Z_=function(n){var A=new Image,e=n.createElement("canvas"),t=e.getContext("2d");if(!t)return!1;A.src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";try{t.drawImage(A,0,0),e.toDataURL()}catch{return!1}return!0},jc=function(n){return n[0]===0&&n[1]===255&&n[2]===0&&n[3]===255},q_=function(n){var A=n.createElement("canvas"),e=100;A.width=e,A.height=e;var t=A.getContext("2d");if(!t)return Promise.reject(!1);t.fillStyle="rgb(0, 255, 0)",t.fillRect(0,0,e,e);var i=new Image,r=A.toDataURL();i.src=r;var s=Bo(e,e,0,0,i);return t.fillStyle="red",t.fillRect(0,0,e,e),$c(s).then(function(a){t.drawImage(a,0,0);var o=t.getImageData(0,0,e,e).data;t.fillStyle="red",t.fillRect(0,0,e,e);var l=n.createElement("div");return l.style.backgroundImage="url("+r+")",l.style.height=e+"px",jc(o)?$c(Bo(e,e,0,0,l)):Promise.reject(!1)}).then(function(a){return t.drawImage(a,0,0),jc(t.getImageData(0,0,e,e).data)}).catch(function(){return!1})},Bo=function(n,A,e,t,i){var r="http://www.w3.org/2000/svg",s=document.createElementNS(r,"svg"),a=document.createElementNS(r,"foreignObject");return s.setAttributeNS(null,"width",n.toString()),s.setAttributeNS(null,"height",A.toString()),a.setAttributeNS(null,"width","100%"),a.setAttributeNS(null,"height","100%"),a.setAttributeNS(null,"x",e.toString()),a.setAttributeNS(null,"y",t.toString()),a.setAttributeNS(null,"externalResourcesRequired","true"),s.appendChild(a),a.appendChild(i),s},$c=function(n){return new Promise(function(A,e){var t=new Image;t.onload=function(){return A(t)},t.onerror=e,t.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(n))})},Ce={get SUPPORT_RANGE_BOUNDS(){var n=W_(document);return Object.defineProperty(Ce,"SUPPORT_RANGE_BOUNDS",{value:n}),n},get SUPPORT_WORD_BREAKING(){var n=Ce.SUPPORT_RANGE_BOUNDS&&X_(document);return Object.defineProperty(Ce,"SUPPORT_WORD_BREAKING",{value:n}),n},get SUPPORT_SVG_DRAWING(){var n=Z_(document);return Object.defineProperty(Ce,"SUPPORT_SVG_DRAWING",{value:n}),n},get SUPPORT_FOREIGNOBJECT_DRAWING(){var n=typeof Array.from=="function"&&typeof window.fetch=="function"?q_(document):Promise.resolve(!1);return Object.defineProperty(Ce,"SUPPORT_FOREIGNOBJECT_DRAWING",{value:n}),n},get SUPPORT_CORS_IMAGES(){var n=Y_();return Object.defineProperty(Ce,"SUPPORT_CORS_IMAGES",{value:n}),n},get SUPPORT_RESPONSE_TYPE(){var n=J_();return Object.defineProperty(Ce,"SUPPORT_RESPONSE_TYPE",{value:n}),n},get SUPPORT_CORS_XHR(){var n="withCredentials"in new XMLHttpRequest;return Object.defineProperty(Ce,"SUPPORT_CORS_XHR",{value:n}),n},get SUPPORT_NATIVE_TEXT_SEGMENTATION(){var n=!!(typeof Intl<"u"&&Intl.Segmenter);return Object.defineProperty(Ce,"SUPPORT_NATIVE_TEXT_SEGMENTATION",{value:n}),n}},Ji=function(){function n(A,e){this.text=A,this.bounds=e}return n}(),j_=function(n,A,e,t){var i=eC(A,e),r=[],s=0;return i.forEach(function(a){if(e.textDecorationLine.length||a.trim().length>0)if(Ce.SUPPORT_RANGE_BOUNDS){var o=Au(t,s,a.length).getClientRects();if(o.length>1){var l=Po(a),c=0;l.forEach(function(h){r.push(new Ji(h,Lt.fromDOMRectList(n,Au(t,c+s,h.length).getClientRects()))),c+=h.length})}else r.push(new Ji(a,Lt.fromDOMRectList(n,o)))}else{var u=t.splitText(a.length);r.push(new Ji(a,$_(n,t))),t=u}else Ce.SUPPORT_RANGE_BOUNDS||(t=t.splitText(a.length));s+=a.length}),r},$_=function(n,A){var e=A.ownerDocument;if(e){var t=e.createElement("html2canvaswrapper");t.appendChild(A.cloneNode(!0));var i=A.parentNode;if(i){i.replaceChild(t,A);var r=Is(n,t);return t.firstChild&&i.replaceChild(t.firstChild,t),r}}return Lt.EMPTY},Au=function(n,A,e){var t=n.ownerDocument;if(!t)throw new Error("Node has no owner document");var i=t.createRange();return i.setStart(n,A),i.setEnd(n,A+e),i},Po=function(n){if(Ce.SUPPORT_NATIVE_TEXT_SEGMENTATION){var A=new Intl.Segmenter(void 0,{granularity:"grapheme"});return Array.from(A.segment(n)).map(function(e){return e.segment})}return z_(n)},AC=function(n,A){if(Ce.SUPPORT_NATIVE_TEXT_SEGMENTATION){var e=new Intl.Segmenter(void 0,{granularity:"word"});return Array.from(e.segment(n)).map(function(t){return t.segment})}return nC(n,A)},eC=function(n,A){return A.letterSpacing!==0?Po(n):AC(n,A)},tC=[32,160,4961,65792,65793,4153,4241],nC=function(n,A){for(var e=b1(n,{lineBreak:A.lineBreak,wordBreak:A.overflowWrap==="break-word"?"break-word":A.wordBreak}),t=[],i,r=function(){if(i.value){var s=i.value.slice(),a=Ls(s),o="";a.forEach(function(l){tC.indexOf(l)===-1?o+=ie(l):(o.length&&t.push(o),t.push(ie(l)),o="")}),o.length&&t.push(o)}};!(i=e.next()).done;)r();return t},iC=function(){function n(A,e,t){this.text=rC(e.data,t.textTransform),this.textBounds=j_(A,this.text,t,e)}return n}(),rC=function(n,A){switch(A){case 1:return n.toLowerCase();case 3:return n.replace(sC,aC);case 2:return n.toUpperCase();default:return n}},sC=/(^|\s|:|-|\(|\))([a-z])/g,aC=function(n,A,e){return n.length>0?A+e.toUpperCase():n},Th=function(n){ct(A,n);function A(e,t){var i=n.call(this,e,t)||this;return i.src=t.currentSrc||t.src,i.intrinsicWidth=t.naturalWidth,i.intrinsicHeight=t.naturalHeight,i.context.cache.addImage(i.src),i}return A}(mt),Qh=function(n){ct(A,n);function A(e,t){var i=n.call(this,e,t)||this;return i.canvas=t,i.intrinsicWidth=t.width,i.intrinsicHeight=t.height,i}return A}(mt),Ih=function(n){ct(A,n);function A(e,t){var i=n.call(this,e,t)||this,r=new XMLSerializer,s=Is(e,t);return t.setAttribute("width",s.width+"px"),t.setAttribute("height",s.height+"px"),i.svg="data:image/svg+xml,"+encodeURIComponent(r.serializeToString(t)),i.intrinsicWidth=t.width.baseVal.value,i.intrinsicHeight=t.height.baseVal.value,i.context.cache.addImage(i.svg),i}return A}(mt),Lh=function(n){ct(A,n);function A(e,t){var i=n.call(this,e,t)||this;return i.value=t.value,i}return A}(mt),wo=function(n){ct(A,n);function A(e,t){var i=n.call(this,e,t)||this;return i.start=t.start,i.reversed=typeof t.reversed=="boolean"&&t.reversed===!0,i}return A}(mt),oC=[{type:15,flags:0,unit:"px",number:3}],lC=[{type:16,flags:0,number:50}],cC=function(n){return n.width>n.height?new Lt(n.left+(n.width-n.height)/2,n.top,n.height,n.height):n.width<n.height?new Lt(n.left,n.top+(n.height-n.width)/2,n.width,n.width):n},uC=function(n){var A=n.type===hC?new Array(n.value.length+1).join("•"):n.value;return A.length===0?n.placeholder||"":A},_s="checkbox",Cs="radio",hC="password",eu=707406591,Oo=function(n){ct(A,n);function A(e,t){var i=n.call(this,e,t)||this;switch(i.type=t.type.toLowerCase(),i.checked=t.checked,i.value=uC(t),(i.type===_s||i.type===Cs)&&(i.styles.backgroundColor=3739148031,i.styles.borderTopColor=i.styles.borderRightColor=i.styles.borderBottomColor=i.styles.borderLeftColor=2779096575,i.styles.borderTopWidth=i.styles.borderRightWidth=i.styles.borderBottomWidth=i.styles.borderLeftWidth=1,i.styles.borderTopStyle=i.styles.borderRightStyle=i.styles.borderBottomStyle=i.styles.borderLeftStyle=1,i.styles.backgroundClip=[0],i.styles.backgroundOrigin=[0],i.bounds=cC(i.bounds)),i.type){case _s:i.styles.borderTopRightRadius=i.styles.borderTopLeftRadius=i.styles.borderBottomRightRadius=i.styles.borderBottomLeftRadius=oC;break;case Cs:i.styles.borderTopRightRadius=i.styles.borderTopLeftRadius=i.styles.borderBottomRightRadius=i.styles.borderBottomLeftRadius=lC;break}return i}return A}(mt),Rh=function(n){ct(A,n);function A(e,t){var i=n.call(this,e,t)||this,r=t.options[t.selectedIndex||0];return i.value=r&&r.text||"",i}return A}(mt),Hh=function(n){ct(A,n);function A(e,t){var i=n.call(this,e,t)||this;return i.value=t.value,i}return A}(mt),Dh=function(n){ct(A,n);function A(e,t){var i=n.call(this,e,t)||this;i.src=t.src,i.width=parseInt(t.width,10)||0,i.height=parseInt(t.height,10)||0,i.backgroundColor=i.styles.backgroundColor;try{if(t.contentWindow&&t.contentWindow.document&&t.contentWindow.document.documentElement){i.tree=Oh(e,t.contentWindow.document.documentElement);var r=t.contentWindow.document.documentElement?Xi(e,getComputedStyle(t.contentWindow.document.documentElement).backgroundColor):It.TRANSPARENT,s=t.contentWindow.document.body?Xi(e,getComputedStyle(t.contentWindow.document.body).backgroundColor):It.TRANSPARENT;i.backgroundColor=An(r)?An(s)?i.styles.backgroundColor:s:r}}catch{}return i}return A}(mt),fC=["OL","UL","MENU"],fs=function(n,A,e,t){for(var i=A.firstChild,r=void 0;i;i=r)if(r=i.nextSibling,Nh(i)&&i.data.trim().length>0)e.textNodes.push(new iC(n,i,e.styles));else if(ri(i))if(kh(i)&&i.assignedNodes)i.assignedNodes().forEach(function(a){return fs(n,a,e,t)});else{var s=Ph(n,i);s.styles.isVisible()&&(dC(i,s,t)?s.flags|=4:pC(s.styles)&&(s.flags|=2),fC.indexOf(i.tagName)!==-1&&(s.flags|=8),e.elements.push(s),i.slot,i.shadowRoot?fs(n,i.shadowRoot,s,t):!Es(i)&&!Gh(i)&&!xs(i)&&fs(n,i,s,t))}},Ph=function(n,A){return _o(A)?new Th(n,A):Vh(A)?new Qh(n,A):Gh(A)?new Ih(n,A):gC(A)?new Lh(n,A):mC(A)?new wo(n,A):BC(A)?new Oo(n,A):xs(A)?new Rh(n,A):Es(A)?new Hh(n,A):Kh(A)?new Dh(n,A):new mt(n,A)},Oh=function(n,A){var e=Ph(n,A);return e.flags|=4,fs(n,A,e,e),e},dC=function(n,A,e){return A.styles.isPositionedWithZIndex()||A.styles.opacity<1||A.styles.isTransformed()||No(n)&&e.styles.isTransparent()},pC=function(n){return n.isPositioned()||n.isFloating()},Nh=function(n){return n.nodeType===Node.TEXT_NODE},ri=function(n){return n.nodeType===Node.ELEMENT_NODE},vo=function(n){return ri(n)&&typeof n.style<"u"&&!ds(n)},ds=function(n){return typeof n.className=="object"},gC=function(n){return n.tagName==="LI"},mC=function(n){return n.tagName==="OL"},BC=function(n){return n.tagName==="INPUT"},wC=function(n){return n.tagName==="HTML"},Gh=function(n){return n.tagName==="svg"},No=function(n){return n.tagName==="BODY"},Vh=function(n){return n.tagName==="CANVAS"},tu=function(n){return n.tagName==="VIDEO"},_o=function(n){return n.tagName==="IMG"},Kh=function(n){return n.tagName==="IFRAME"},nu=function(n){return n.tagName==="STYLE"},vC=function(n){return n.tagName==="SCRIPT"},Es=function(n){return n.tagName==="TEXTAREA"},xs=function(n){return n.tagName==="SELECT"},kh=function(n){return n.tagName==="SLOT"},iu=function(n){return n.tagName.indexOf("-")>0},_C=function(){function n(){this.counters={}}return n.prototype.getCounterValue=function(A){var e=this.counters[A];return e&&e.length?e[e.length-1]:1},n.prototype.getCounterValues=function(A){var e=this.counters[A];return e||[]},n.prototype.pop=function(A){var e=this;A.forEach(function(t){return e.counters[t].pop()})},n.prototype.parse=function(A){var e=this,t=A.counterIncrement,i=A.counterReset,r=!0;t!==null&&t.forEach(function(a){var o=e.counters[a.counter];o&&a.increment!==0&&(r=!1,o.length||o.push(1),o[Math.max(0,o.length-1)]+=a.increment)});var s=[];return r&&i.forEach(function(a){var o=e.counters[a.counter];s.push(a.counter),o||(o=e.counters[a.counter]=[]),o.push(a.reset)}),s},n}(),ru={integers:[1e3,900,500,400,100,90,50,40,10,9,5,4,1],values:["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]},su={integers:[9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["Ք","Փ","Ւ","Ց","Ր","Տ","Վ","Ս","Ռ","Ջ","Պ","Չ","Ո","Շ","Ն","Յ","Մ","Ճ","Ղ","Ձ","Հ","Կ","Ծ","Խ","Լ","Ի","Ժ","Թ","Ը","Է","Զ","Ե","Դ","Գ","Բ","Ա"]},CC={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,400,300,200,100,90,80,70,60,50,40,30,20,19,18,17,16,15,10,9,8,7,6,5,4,3,2,1],values:["י׳","ט׳","ח׳","ז׳","ו׳","ה׳","ד׳","ג׳","ב׳","א׳","ת","ש","ר","ק","צ","פ","ע","ס","נ","מ","ל","כ","יט","יח","יז","טז","טו","י","ט","ח","ז","ו","ה","ד","ג","ב","א"]},EC={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["ჵ","ჰ","ჯ","ჴ","ხ","ჭ","წ","ძ","ც","ჩ","შ","ყ","ღ","ქ","ფ","ჳ","ტ","ს","რ","ჟ","პ","ო","ჲ","ნ","მ","ლ","კ","ი","თ","ჱ","ზ","ვ","ე","დ","გ","ბ","ა"]},Zn=function(n,A,e,t,i,r){return n<A||n>e?sr(n,i,r.length>0):t.integers.reduce(function(s,a,o){for(;n>=a;)n-=a,s+=t.values[o];return s},"")+r},zh=function(n,A,e,t){var i="";do e||n--,i=t(n)+i,n/=A;while(n*A>=A);return i},ne=function(n,A,e,t,i){var r=e-A+1;return(n<0?"-":"")+(zh(Math.abs(n),r,t,function(s){return ie(Math.floor(s%r)+A)})+i)},un=function(n,A,e){e===void 0&&(e=". ");var t=A.length;return zh(Math.abs(n),t,!1,function(i){return A[Math.floor(i%t)]})+e},ti=1,Nt=2,Gt=4,Ni=8,yt=function(n,A,e,t,i,r){if(n<-9999||n>9999)return sr(n,4,i.length>0);var s=Math.abs(n),a=i;if(s===0)return A[0]+a;for(var o=0;s>0&&o<=4;o++){var l=s%10;l===0&&ue(r,ti)&&a!==""?a=A[l]+a:l>1||l===1&&o===0||l===1&&o===1&&ue(r,Nt)||l===1&&o===1&&ue(r,Gt)&&n>100||l===1&&o>1&&ue(r,Ni)?a=A[l]+(o>0?e[o-1]:"")+a:l===1&&o>0&&(a=e[o-1]+a),s=Math.floor(s/10)}return(n<0?t:"")+a},au="十百千萬",ou="拾佰仟萬",lu="マイナス",Oa="마이너스",sr=function(n,A,e){var t=e?". ":"",i=e?"、":"",r=e?", ":"",s=e?" ":"";switch(A){case 0:return"•"+s;case 1:return"◦"+s;case 2:return"◾"+s;case 5:var a=ne(n,48,57,!0,t);return a.length<4?"0"+a:a;case 4:return un(n,"〇一二三四五六七八九",i);case 6:return Zn(n,1,3999,ru,3,t).toLowerCase();case 7:return Zn(n,1,3999,ru,3,t);case 8:return ne(n,945,969,!1,t);case 9:return ne(n,97,122,!1,t);case 10:return ne(n,65,90,!1,t);case 11:return ne(n,1632,1641,!0,t);case 12:case 49:return Zn(n,1,9999,su,3,t);case 35:return Zn(n,1,9999,su,3,t).toLowerCase();case 13:return ne(n,2534,2543,!0,t);case 14:case 30:return ne(n,6112,6121,!0,t);case 15:return un(n,"子丑寅卯辰巳午未申酉戌亥",i);case 16:return un(n,"甲乙丙丁戊己庚辛壬癸",i);case 17:case 48:return yt(n,"零一二三四五六七八九",au,"負",i,Nt|Gt|Ni);case 47:return yt(n,"零壹貳參肆伍陸柒捌玖",ou,"負",i,ti|Nt|Gt|Ni);case 42:return yt(n,"零一二三四五六七八九",au,"负",i,Nt|Gt|Ni);case 41:return yt(n,"零壹贰叁肆伍陆柒捌玖",ou,"负",i,ti|Nt|Gt|Ni);case 26:return yt(n,"〇一二三四五六七八九","十百千万",lu,i,0);case 25:return yt(n,"零壱弐参四伍六七八九","拾百千万",lu,i,ti|Nt|Gt);case 31:return yt(n,"영일이삼사오육칠팔구","십백천만",Oa,r,ti|Nt|Gt);case 33:return yt(n,"零一二三四五六七八九","十百千萬",Oa,r,0);case 32:return yt(n,"零壹貳參四五六七八九","拾百千",Oa,r,ti|Nt|Gt);case 18:return ne(n,2406,2415,!0,t);case 20:return Zn(n,1,19999,EC,3,t);case 21:return ne(n,2790,2799,!0,t);case 22:return ne(n,2662,2671,!0,t);case 22:return Zn(n,1,10999,CC,3,t);case 23:return un(n,"あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");case 24:return un(n,"いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");case 27:return ne(n,3302,3311,!0,t);case 28:return un(n,"アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン",i);case 29:return un(n,"イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス",i);case 34:return ne(n,3792,3801,!0,t);case 37:return ne(n,6160,6169,!0,t);case 38:return ne(n,4160,4169,!0,t);case 39:return ne(n,2918,2927,!0,t);case 40:return ne(n,1776,1785,!0,t);case 43:return ne(n,3046,3055,!0,t);case 44:return ne(n,3174,3183,!0,t);case 45:return ne(n,3664,3673,!0,t);case 46:return ne(n,3872,3881,!0,t);case 3:default:return ne(n,48,57,!0,t)}},Wh="data-html2canvas-ignore",cu=function(){function n(A,e,t){if(this.context=A,this.options=t,this.scrolledElements=[],this.referenceElement=e,this.counters=new _C,this.quoteDepth=0,!e.ownerDocument)throw new Error("Cloned element does not have an owner document");this.documentElement=this.cloneNode(e.ownerDocument.documentElement,!1)}return n.prototype.toIFrame=function(A,e){var t=this,i=xC(A,e);if(!i.contentWindow)return Promise.reject("Unable to find iframe window");var r=A.defaultView.pageXOffset,s=A.defaultView.pageYOffset,a=i.contentWindow,o=a.document,l=SC(i).then(function(){return Le(t,void 0,void 0,function(){var c,u;return Me(this,function(h){switch(h.label){case 0:return this.scrolledElements.forEach(TC),a&&(a.scrollTo(e.left,e.top),/(iPad|iPhone|iPod)/g.test(navigator.userAgent)&&(a.scrollY!==e.top||a.scrollX!==e.left)&&(this.context.logger.warn("Unable to restore scroll position for cloned document"),this.context.windowBounds=this.context.windowBounds.add(a.scrollX-e.left,a.scrollY-e.top,0,0))),c=this.options.onclone,u=this.clonedReferenceElement,typeof u>"u"?[2,Promise.reject("Error finding the "+this.referenceElement.nodeName+" in the cloned document")]:o.fonts&&o.fonts.ready?[4,o.fonts.ready]:[3,2];case 1:h.sent(),h.label=2;case 2:return/(AppleWebKit)/g.test(navigator.userAgent)?[4,yC(o)]:[3,4];case 3:h.sent(),h.label=4;case 4:return typeof c=="function"?[2,Promise.resolve().then(function(){return c(o,u)}).then(function(){return i})]:[2,i]}})})});return o.open(),o.write(FC(document.doctype)+"<html></html>"),bC(this.referenceElement.ownerDocument,r,s),o.replaceChild(o.adoptNode(this.documentElement),o.documentElement),o.close(),l},n.prototype.createElementClone=function(A){if(mo(A,2))debugger;if(Vh(A))return this.createCanvasClone(A);if(tu(A))return this.createVideoClone(A);if(nu(A))return this.createStyleClone(A);var e=A.cloneNode(!1);return _o(e)&&(_o(A)&&A.currentSrc&&A.currentSrc!==A.src&&(e.src=A.currentSrc,e.srcset=""),e.loading==="lazy"&&(e.loading="eager")),iu(e)?this.createCustomElementClone(e):e},n.prototype.createCustomElementClone=function(A){var e=document.createElement("html2canvascustomelement");return Na(A.style,e),e},n.prototype.createStyleClone=function(A){try{var e=A.sheet;if(e&&e.cssRules){var t=[].slice.call(e.cssRules,0).reduce(function(r,s){return s&&typeof s.cssText=="string"?r+s.cssText:r},""),i=A.cloneNode(!1);return i.textContent=t,i}}catch(r){if(this.context.logger.error("Unable to access cssRules property",r),r.name!=="SecurityError")throw r}return A.cloneNode(!1)},n.prototype.createCanvasClone=function(A){var e;if(this.options.inlineImages&&A.ownerDocument){var t=A.ownerDocument.createElement("img");try{return t.src=A.toDataURL(),t}catch{this.context.logger.info("Unable to inline canvas contents, canvas is tainted",A)}}var i=A.cloneNode(!1);try{i.width=A.width,i.height=A.height;var r=A.getContext("2d"),s=i.getContext("2d");if(s)if(!this.options.allowTaint&&r)s.putImageData(r.getImageData(0,0,A.width,A.height),0,0);else{var a=(e=A.getContext("webgl2"))!==null&&e!==void 0?e:A.getContext("webgl");if(a){var o=a.getContextAttributes();(o==null?void 0:o.preserveDrawingBuffer)===!1&&this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false",A)}s.drawImage(A,0,0)}return i}catch{this.context.logger.info("Unable to clone canvas as it is tainted",A)}return i},n.prototype.createVideoClone=function(A){var e=A.ownerDocument.createElement("canvas");e.width=A.offsetWidth,e.height=A.offsetHeight;var t=e.getContext("2d");try{return t&&(t.drawImage(A,0,0,e.width,e.height),this.options.allowTaint||t.getImageData(0,0,e.width,e.height)),e}catch{this.context.logger.info("Unable to clone video as it is tainted",A)}var i=A.ownerDocument.createElement("canvas");return i.width=A.offsetWidth,i.height=A.offsetHeight,i},n.prototype.appendChildNode=function(A,e,t){(!ri(e)||!vC(e)&&!e.hasAttribute(Wh)&&(typeof this.options.ignoreElements!="function"||!this.options.ignoreElements(e)))&&(!this.options.copyStyles||!ri(e)||!nu(e))&&A.appendChild(this.cloneNode(e,t))},n.prototype.cloneChildNodes=function(A,e,t){for(var i=this,r=A.shadowRoot?A.shadowRoot.firstChild:A.firstChild;r;r=r.nextSibling)if(ri(r)&&kh(r)&&typeof r.assignedNodes=="function"){var s=r.assignedNodes();s.length&&s.forEach(function(a){return i.appendChildNode(e,a,t)})}else this.appendChildNode(e,r,t)},n.prototype.cloneNode=function(A,e){if(Nh(A))return document.createTextNode(A.data);if(!A.ownerDocument)return A.cloneNode(!1);var t=A.ownerDocument.defaultView;if(t&&ri(A)&&(vo(A)||ds(A))){var i=this.createElementClone(A);i.style.transitionProperty="none";var r=t.getComputedStyle(A),s=t.getComputedStyle(A,":before"),a=t.getComputedStyle(A,":after");this.referenceElement===A&&vo(i)&&(this.clonedReferenceElement=i),No(i)&&LC(i);var o=this.counters.parse(new Gc(this.context,r)),l=this.resolvePseudoContent(A,i,s,Zi.BEFORE);iu(A)&&(e=!0),tu(A)||this.cloneChildNodes(A,i,e),l&&i.insertBefore(l,i.firstChild);var c=this.resolvePseudoContent(A,i,a,Zi.AFTER);return c&&i.appendChild(c),this.counters.pop(o),(r&&(this.options.copyStyles||ds(A))&&!Kh(A)||e)&&Na(r,i),(A.scrollTop!==0||A.scrollLeft!==0)&&this.scrolledElements.push([i,A.scrollLeft,A.scrollTop]),(Es(A)||xs(A))&&(Es(i)||xs(i))&&(i.value=A.value),i}return A.cloneNode(!1)},n.prototype.resolvePseudoContent=function(A,e,t,i){var r=this;if(t){var s=t.content,a=e.ownerDocument;if(!(!a||!s||s==="none"||s==="-moz-alt-content"||t.display==="none")){this.counters.parse(new Gc(this.context,t));var o=new g_(this.context,t),l=a.createElement("html2canvaspseudoelement");Na(t,l),o.content.forEach(function(u){if(u.type===0)l.appendChild(a.createTextNode(u.value));else if(u.type===22){var h=a.createElement("img");h.src=u.value,h.style.opacity="1",l.appendChild(h)}else if(u.type===18){if(u.name==="attr"){var p=u.values.filter(JA);p.length&&l.appendChild(a.createTextNode(A.getAttribute(p[0].value)||""))}else if(u.name==="counter"){var g=u.values.filter(Bi),m=g[0],d=g[1];if(m&&JA(m)){var f=r.counters.getCounterValue(m.value),C=d&&JA(d)?go.parse(r.context,d.value):3;l.appendChild(a.createTextNode(sr(f,C,!1)))}}else if(u.name==="counters"){var v=u.values.filter(Bi),m=v[0],_=v[1],d=v[2];if(m&&JA(m)){var E=r.counters.getCounterValues(m.value),y=d&&JA(d)?go.parse(r.context,d.value):3,U=_&&_.type===0?_.value:"",L=E.map(function(Y){return sr(Y,y,!1)}).join(U);l.appendChild(a.createTextNode(L))}}}else if(u.type===20)switch(u.value){case"open-quote":l.appendChild(a.createTextNode(Nc(o.quotes,r.quoteDepth++,!0)));break;case"close-quote":l.appendChild(a.createTextNode(Nc(o.quotes,--r.quoteDepth,!1)));break;default:l.appendChild(a.createTextNode(u.value))}}),l.className=Co+" "+Eo;var c=i===Zi.BEFORE?" "+Co:" "+Eo;return ds(e)?e.className.baseValue+=c:e.className+=c,l}}},n.destroy=function(A){return A.parentNode?(A.parentNode.removeChild(A),!0):!1},n}(),Zi;(function(n){n[n.BEFORE=0]="BEFORE",n[n.AFTER=1]="AFTER"})(Zi||(Zi={}));var xC=function(n,A){var e=n.createElement("iframe");return e.className="html2canvas-container",e.style.visibility="hidden",e.style.position="fixed",e.style.left="-10000px",e.style.top="0px",e.style.border="0",e.width=A.width.toString(),e.height=A.height.toString(),e.scrolling="no",e.setAttribute(Wh,"true"),n.body.appendChild(e),e},UC=function(n){return new Promise(function(A){if(n.complete){A();return}if(!n.src){A();return}n.onload=A,n.onerror=A})},yC=function(n){return Promise.all([].slice.call(n.images,0).map(UC))},SC=function(n){return new Promise(function(A,e){var t=n.contentWindow;if(!t)return e("No window assigned for iframe");var i=t.document;t.onload=n.onload=function(){t.onload=n.onload=null;var r=setInterval(function(){i.body.childNodes.length>0&&i.readyState==="complete"&&(clearInterval(r),A(n))},50)}})},MC=["all","d","content"],Na=function(n,A){for(var e=n.length-1;e>=0;e--){var t=n.item(e);MC.indexOf(t)===-1&&A.style.setProperty(t,n.getPropertyValue(t))}return A},FC=function(n){var A="";return n&&(A+="<!DOCTYPE ",n.name&&(A+=n.name),n.internalSubset&&(A+=n.internalSubset),n.publicId&&(A+='"'+n.publicId+'"'),n.systemId&&(A+='"'+n.systemId+'"'),A+=">"),A},bC=function(n,A,e){n&&n.defaultView&&(A!==n.defaultView.pageXOffset||e!==n.defaultView.pageYOffset)&&n.defaultView.scrollTo(A,e)},TC=function(n){var A=n[0],e=n[1],t=n[2];A.scrollLeft=e,A.scrollTop=t},QC=":before",IC=":after",Co="___html2canvas___pseudoelement_before",Eo="___html2canvas___pseudoelement_after",uu=`{
    content: "" !important;
    display: none !important;
}`,LC=function(n){RC(n,"."+Co+QC+uu+`
         .`+Eo+IC+uu)},RC=function(n,A){var e=n.ownerDocument;if(e){var t=e.createElement("style");t.textContent=A,n.appendChild(t)}},Xh=function(){function n(){}return n.getOrigin=function(A){var e=n._link;return e?(e.href=A,e.href=e.href,e.protocol+e.hostname+e.port):"about:blank"},n.isSameOrigin=function(A){return n.getOrigin(A)===n._origin},n.setContext=function(A){n._link=A.document.createElement("a"),n._origin=n.getOrigin(A.location.href)},n._origin="about:blank",n}(),HC=function(){function n(A,e){this.context=A,this._options=e,this._cache={}}return n.prototype.addImage=function(A){var e=Promise.resolve();return this.has(A)||(Va(A)||NC(A))&&(this._cache[A]=this.loadImage(A)).catch(function(){}),e},n.prototype.match=function(A){return this._cache[A]},n.prototype.loadImage=function(A){return Le(this,void 0,void 0,function(){var e,t,i,r,s=this;return Me(this,function(a){switch(a.label){case 0:return e=Xh.isSameOrigin(A),t=!Ga(A)&&this._options.useCORS===!0&&Ce.SUPPORT_CORS_IMAGES&&!e,i=!Ga(A)&&!e&&!Va(A)&&typeof this._options.proxy=="string"&&Ce.SUPPORT_CORS_XHR&&!t,!e&&this._options.allowTaint===!1&&!Ga(A)&&!Va(A)&&!i&&!t?[2]:(r=A,i?[4,this.proxy(r)]:[3,2]);case 1:r=a.sent(),a.label=2;case 2:return this.context.logger.debug("Added image "+A.substring(0,256)),[4,new Promise(function(o,l){var c=new Image;c.onload=function(){return o(c)},c.onerror=l,(GC(r)||t)&&(c.crossOrigin="anonymous"),c.src=r,c.complete===!0&&setTimeout(function(){return o(c)},500),s._options.imageTimeout>0&&setTimeout(function(){return l("Timed out ("+s._options.imageTimeout+"ms) loading image")},s._options.imageTimeout)})];case 3:return[2,a.sent()]}})})},n.prototype.has=function(A){return typeof this._cache[A]<"u"},n.prototype.keys=function(){return Promise.resolve(Object.keys(this._cache))},n.prototype.proxy=function(A){var e=this,t=this._options.proxy;if(!t)throw new Error("No proxy defined");var i=A.substring(0,256);return new Promise(function(r,s){var a=Ce.SUPPORT_RESPONSE_TYPE?"blob":"text",o=new XMLHttpRequest;o.onload=function(){if(o.status===200)if(a==="text")r(o.response);else{var u=new FileReader;u.addEventListener("load",function(){return r(u.result)},!1),u.addEventListener("error",function(h){return s(h)},!1),u.readAsDataURL(o.response)}else s("Failed to proxy resource "+i+" with status code "+o.status)},o.onerror=s;var l=t.indexOf("?")>-1?"&":"?";if(o.open("GET",""+t+l+"url="+encodeURIComponent(A)+"&responseType="+a),a!=="text"&&o instanceof XMLHttpRequest&&(o.responseType=a),e._options.imageTimeout){var c=e._options.imageTimeout;o.timeout=c,o.ontimeout=function(){return s("Timed out ("+c+"ms) proxying "+i)}}o.send()})},n}(),DC=/^data:image\/svg\+xml/i,PC=/^data:image\/.*;base64,/i,OC=/^data:image\/.*/i,NC=function(n){return Ce.SUPPORT_SVG_DRAWING||!VC(n)},Ga=function(n){return OC.test(n)},GC=function(n){return PC.test(n)},Va=function(n){return n.substr(0,4)==="blob"},VC=function(n){return n.substr(-3).toLowerCase()==="svg"||DC.test(n)},dA=function(){function n(A,e){this.type=0,this.x=A,this.y=e}return n.prototype.add=function(A,e){return new n(this.x+A,this.y+e)},n}(),qn=function(n,A,e){return new dA(n.x+(A.x-n.x)*e,n.y+(A.y-n.y)*e)},ns=function(){function n(A,e,t,i){this.type=1,this.start=A,this.startControl=e,this.endControl=t,this.end=i}return n.prototype.subdivide=function(A,e){var t=qn(this.start,this.startControl,A),i=qn(this.startControl,this.endControl,A),r=qn(this.endControl,this.end,A),s=qn(t,i,A),a=qn(i,r,A),o=qn(s,a,A);return e?new n(this.start,t,s,o):new n(o,a,r,this.end)},n.prototype.add=function(A,e){return new n(this.start.add(A,e),this.startControl.add(A,e),this.endControl.add(A,e),this.end.add(A,e))},n.prototype.reverse=function(){return new n(this.end,this.endControl,this.startControl,this.start)},n}(),qe=function(n){return n.type===1},KC=function(){function n(A){var e=A.styles,t=A.bounds,i=Pi(e.borderTopLeftRadius,t.width,t.height),r=i[0],s=i[1],a=Pi(e.borderTopRightRadius,t.width,t.height),o=a[0],l=a[1],c=Pi(e.borderBottomRightRadius,t.width,t.height),u=c[0],h=c[1],p=Pi(e.borderBottomLeftRadius,t.width,t.height),g=p[0],m=p[1],d=[];d.push((r+o)/t.width),d.push((g+u)/t.width),d.push((s+m)/t.height),d.push((l+h)/t.height);var f=Math.max.apply(Math,d);f>1&&(r/=f,s/=f,o/=f,l/=f,u/=f,h/=f,g/=f,m/=f);var C=t.width-o,v=t.height-h,_=t.width-u,E=t.height-m,y=e.borderTopWidth,U=e.borderRightWidth,L=e.borderBottomWidth,B=e.borderLeftWidth,S=ZA(e.paddingTop,A.bounds.width),Y=ZA(e.paddingRight,A.bounds.width),q=ZA(e.paddingBottom,A.bounds.width),T=ZA(e.paddingLeft,A.bounds.width);this.topLeftBorderDoubleOuterBox=r>0||s>0?Ae(t.left+B/3,t.top+y/3,r-B/3,s-y/3,zA.TOP_LEFT):new dA(t.left+B/3,t.top+y/3),this.topRightBorderDoubleOuterBox=r>0||s>0?Ae(t.left+C,t.top+y/3,o-U/3,l-y/3,zA.TOP_RIGHT):new dA(t.left+t.width-U/3,t.top+y/3),this.bottomRightBorderDoubleOuterBox=u>0||h>0?Ae(t.left+_,t.top+v,u-U/3,h-L/3,zA.BOTTOM_RIGHT):new dA(t.left+t.width-U/3,t.top+t.height-L/3),this.bottomLeftBorderDoubleOuterBox=g>0||m>0?Ae(t.left+B/3,t.top+E,g-B/3,m-L/3,zA.BOTTOM_LEFT):new dA(t.left+B/3,t.top+t.height-L/3),this.topLeftBorderDoubleInnerBox=r>0||s>0?Ae(t.left+B*2/3,t.top+y*2/3,r-B*2/3,s-y*2/3,zA.TOP_LEFT):new dA(t.left+B*2/3,t.top+y*2/3),this.topRightBorderDoubleInnerBox=r>0||s>0?Ae(t.left+C,t.top+y*2/3,o-U*2/3,l-y*2/3,zA.TOP_RIGHT):new dA(t.left+t.width-U*2/3,t.top+y*2/3),this.bottomRightBorderDoubleInnerBox=u>0||h>0?Ae(t.left+_,t.top+v,u-U*2/3,h-L*2/3,zA.BOTTOM_RIGHT):new dA(t.left+t.width-U*2/3,t.top+t.height-L*2/3),this.bottomLeftBorderDoubleInnerBox=g>0||m>0?Ae(t.left+B*2/3,t.top+E,g-B*2/3,m-L*2/3,zA.BOTTOM_LEFT):new dA(t.left+B*2/3,t.top+t.height-L*2/3),this.topLeftBorderStroke=r>0||s>0?Ae(t.left+B/2,t.top+y/2,r-B/2,s-y/2,zA.TOP_LEFT):new dA(t.left+B/2,t.top+y/2),this.topRightBorderStroke=r>0||s>0?Ae(t.left+C,t.top+y/2,o-U/2,l-y/2,zA.TOP_RIGHT):new dA(t.left+t.width-U/2,t.top+y/2),this.bottomRightBorderStroke=u>0||h>0?Ae(t.left+_,t.top+v,u-U/2,h-L/2,zA.BOTTOM_RIGHT):new dA(t.left+t.width-U/2,t.top+t.height-L/2),this.bottomLeftBorderStroke=g>0||m>0?Ae(t.left+B/2,t.top+E,g-B/2,m-L/2,zA.BOTTOM_LEFT):new dA(t.left+B/2,t.top+t.height-L/2),this.topLeftBorderBox=r>0||s>0?Ae(t.left,t.top,r,s,zA.TOP_LEFT):new dA(t.left,t.top),this.topRightBorderBox=o>0||l>0?Ae(t.left+C,t.top,o,l,zA.TOP_RIGHT):new dA(t.left+t.width,t.top),this.bottomRightBorderBox=u>0||h>0?Ae(t.left+_,t.top+v,u,h,zA.BOTTOM_RIGHT):new dA(t.left+t.width,t.top+t.height),this.bottomLeftBorderBox=g>0||m>0?Ae(t.left,t.top+E,g,m,zA.BOTTOM_LEFT):new dA(t.left,t.top+t.height),this.topLeftPaddingBox=r>0||s>0?Ae(t.left+B,t.top+y,Math.max(0,r-B),Math.max(0,s-y),zA.TOP_LEFT):new dA(t.left+B,t.top+y),this.topRightPaddingBox=o>0||l>0?Ae(t.left+Math.min(C,t.width-U),t.top+y,C>t.width+U?0:Math.max(0,o-U),Math.max(0,l-y),zA.TOP_RIGHT):new dA(t.left+t.width-U,t.top+y),this.bottomRightPaddingBox=u>0||h>0?Ae(t.left+Math.min(_,t.width-B),t.top+Math.min(v,t.height-L),Math.max(0,u-U),Math.max(0,h-L),zA.BOTTOM_RIGHT):new dA(t.left+t.width-U,t.top+t.height-L),this.bottomLeftPaddingBox=g>0||m>0?Ae(t.left+B,t.top+Math.min(E,t.height-L),Math.max(0,g-B),Math.max(0,m-L),zA.BOTTOM_LEFT):new dA(t.left+B,t.top+t.height-L),this.topLeftContentBox=r>0||s>0?Ae(t.left+B+T,t.top+y+S,Math.max(0,r-(B+T)),Math.max(0,s-(y+S)),zA.TOP_LEFT):new dA(t.left+B+T,t.top+y+S),this.topRightContentBox=o>0||l>0?Ae(t.left+Math.min(C,t.width+B+T),t.top+y+S,C>t.width+B+T?0:o-B+T,l-(y+S),zA.TOP_RIGHT):new dA(t.left+t.width-(U+Y),t.top+y+S),this.bottomRightContentBox=u>0||h>0?Ae(t.left+Math.min(_,t.width-(B+T)),t.top+Math.min(v,t.height+y+S),Math.max(0,u-(U+Y)),h-(L+q),zA.BOTTOM_RIGHT):new dA(t.left+t.width-(U+Y),t.top+t.height-(L+q)),this.bottomLeftContentBox=g>0||m>0?Ae(t.left+B+T,t.top+E,Math.max(0,g-(B+T)),m-(L+q),zA.BOTTOM_LEFT):new dA(t.left+B+T,t.top+t.height-(L+q))}return n}(),zA;(function(n){n[n.TOP_LEFT=0]="TOP_LEFT",n[n.TOP_RIGHT=1]="TOP_RIGHT",n[n.BOTTOM_RIGHT=2]="BOTTOM_RIGHT",n[n.BOTTOM_LEFT=3]="BOTTOM_LEFT"})(zA||(zA={}));var Ae=function(n,A,e,t,i){var r=4*((Math.sqrt(2)-1)/3),s=e*r,a=t*r,o=n+e,l=A+t;switch(i){case zA.TOP_LEFT:return new ns(new dA(n,l),new dA(n,l-a),new dA(o-s,A),new dA(o,A));case zA.TOP_RIGHT:return new ns(new dA(n,A),new dA(n+s,A),new dA(o,l-a),new dA(o,l));case zA.BOTTOM_RIGHT:return new ns(new dA(o,A),new dA(o,A+a),new dA(n+s,l),new dA(n,l));case zA.BOTTOM_LEFT:default:return new ns(new dA(o,l),new dA(o-s,l),new dA(n,A+a),new dA(n,A))}},Us=function(n){return[n.topLeftBorderBox,n.topRightBorderBox,n.bottomRightBorderBox,n.bottomLeftBorderBox]},kC=function(n){return[n.topLeftContentBox,n.topRightContentBox,n.bottomRightContentBox,n.bottomLeftContentBox]},ys=function(n){return[n.topLeftPaddingBox,n.topRightPaddingBox,n.bottomRightPaddingBox,n.bottomLeftPaddingBox]},zC=function(){function n(A,e,t){this.offsetX=A,this.offsetY=e,this.matrix=t,this.type=0,this.target=6}return n}(),is=function(){function n(A,e){this.path=A,this.target=e,this.type=1}return n}(),WC=function(){function n(A){this.opacity=A,this.type=2,this.target=6}return n}(),XC=function(n){return n.type===0},Yh=function(n){return n.type===1},YC=function(n){return n.type===2},hu=function(n,A){return n.length===A.length?n.some(function(e,t){return e===A[t]}):!1},JC=function(n,A,e,t,i){return n.map(function(r,s){switch(s){case 0:return r.add(A,e);case 1:return r.add(A+t,e);case 2:return r.add(A+t,e+i);case 3:return r.add(A,e+i)}return r})},Jh=function(){function n(A){this.element=A,this.inlineLevel=[],this.nonInlineLevel=[],this.negativeZIndex=[],this.zeroOrAutoZIndexOrTransformedOrOpacity=[],this.positiveZIndex=[],this.nonPositionedFloats=[],this.nonPositionedInlineLevel=[]}return n}(),Zh=function(){function n(A,e){if(this.container=A,this.parent=e,this.effects=[],this.curves=new KC(this.container),this.container.styles.opacity<1&&this.effects.push(new WC(this.container.styles.opacity)),this.container.styles.transform!==null){var t=this.container.bounds.left+this.container.styles.transformOrigin[0].number,i=this.container.bounds.top+this.container.styles.transformOrigin[1].number,r=this.container.styles.transform;this.effects.push(new zC(t,i,r))}if(this.container.styles.overflowX!==0){var s=Us(this.curves),a=ys(this.curves);hu(s,a)?this.effects.push(new is(s,6)):(this.effects.push(new is(s,2)),this.effects.push(new is(a,4)))}}return n.prototype.getEffects=function(A){for(var e=[2,3].indexOf(this.container.styles.position)===-1,t=this.parent,i=this.effects.slice(0);t;){var r=t.effects.filter(function(o){return!Yh(o)});if(e||t.container.styles.position!==0||!t.parent){if(i.unshift.apply(i,r),e=[2,3].indexOf(t.container.styles.position)===-1,t.container.styles.overflowX!==0){var s=Us(t.curves),a=ys(t.curves);hu(s,a)||i.unshift(new is(a,6))}}else i.unshift.apply(i,r);t=t.parent}return i.filter(function(o){return ue(o.target,A)})},n}(),xo=function(n,A,e,t){n.container.elements.forEach(function(i){var r=ue(i.flags,4),s=ue(i.flags,2),a=new Zh(i,n);ue(i.styles.display,2048)&&t.push(a);var o=ue(i.flags,8)?[]:t;if(r||s){var l=r||i.styles.isPositioned()?e:A,c=new Jh(a);if(i.styles.isPositioned()||i.styles.opacity<1||i.styles.isTransformed()){var u=i.styles.zIndex.order;if(u<0){var h=0;l.negativeZIndex.some(function(g,m){return u>g.element.container.styles.zIndex.order?(h=m,!1):h>0}),l.negativeZIndex.splice(h,0,c)}else if(u>0){var p=0;l.positiveZIndex.some(function(g,m){return u>=g.element.container.styles.zIndex.order?(p=m+1,!1):p>0}),l.positiveZIndex.splice(p,0,c)}else l.zeroOrAutoZIndexOrTransformedOrOpacity.push(c)}else i.styles.isFloating()?l.nonPositionedFloats.push(c):l.nonPositionedInlineLevel.push(c);xo(a,c,r?c:e,o)}else i.styles.isInlineLevel()?A.inlineLevel.push(a):A.nonInlineLevel.push(a),xo(a,A,e,o);ue(i.flags,8)&&qh(i,o)})},qh=function(n,A){for(var e=n instanceof wo?n.start:1,t=n instanceof wo?n.reversed:!1,i=0;i<A.length;i++){var r=A[i];r.container instanceof Lh&&typeof r.container.value=="number"&&r.container.value!==0&&(e=r.container.value),r.listValue=sr(e,r.container.styles.listStyleType,!0),e+=t?-1:1}},ZC=function(n){var A=new Zh(n,null),e=new Jh(A),t=[];return xo(A,e,e,t),qh(A.container,t),e},fu=function(n,A){switch(A){case 0:return $e(n.topLeftBorderBox,n.topLeftPaddingBox,n.topRightBorderBox,n.topRightPaddingBox);case 1:return $e(n.topRightBorderBox,n.topRightPaddingBox,n.bottomRightBorderBox,n.bottomRightPaddingBox);case 2:return $e(n.bottomRightBorderBox,n.bottomRightPaddingBox,n.bottomLeftBorderBox,n.bottomLeftPaddingBox);case 3:default:return $e(n.bottomLeftBorderBox,n.bottomLeftPaddingBox,n.topLeftBorderBox,n.topLeftPaddingBox)}},qC=function(n,A){switch(A){case 0:return $e(n.topLeftBorderBox,n.topLeftBorderDoubleOuterBox,n.topRightBorderBox,n.topRightBorderDoubleOuterBox);case 1:return $e(n.topRightBorderBox,n.topRightBorderDoubleOuterBox,n.bottomRightBorderBox,n.bottomRightBorderDoubleOuterBox);case 2:return $e(n.bottomRightBorderBox,n.bottomRightBorderDoubleOuterBox,n.bottomLeftBorderBox,n.bottomLeftBorderDoubleOuterBox);case 3:default:return $e(n.bottomLeftBorderBox,n.bottomLeftBorderDoubleOuterBox,n.topLeftBorderBox,n.topLeftBorderDoubleOuterBox)}},jC=function(n,A){switch(A){case 0:return $e(n.topLeftBorderDoubleInnerBox,n.topLeftPaddingBox,n.topRightBorderDoubleInnerBox,n.topRightPaddingBox);case 1:return $e(n.topRightBorderDoubleInnerBox,n.topRightPaddingBox,n.bottomRightBorderDoubleInnerBox,n.bottomRightPaddingBox);case 2:return $e(n.bottomRightBorderDoubleInnerBox,n.bottomRightPaddingBox,n.bottomLeftBorderDoubleInnerBox,n.bottomLeftPaddingBox);case 3:default:return $e(n.bottomLeftBorderDoubleInnerBox,n.bottomLeftPaddingBox,n.topLeftBorderDoubleInnerBox,n.topLeftPaddingBox)}},$C=function(n,A){switch(A){case 0:return rs(n.topLeftBorderStroke,n.topRightBorderStroke);case 1:return rs(n.topRightBorderStroke,n.bottomRightBorderStroke);case 2:return rs(n.bottomRightBorderStroke,n.bottomLeftBorderStroke);case 3:default:return rs(n.bottomLeftBorderStroke,n.topLeftBorderStroke)}},rs=function(n,A){var e=[];return qe(n)?e.push(n.subdivide(.5,!1)):e.push(n),qe(A)?e.push(A.subdivide(.5,!0)):e.push(A),e},$e=function(n,A,e,t){var i=[];return qe(n)?i.push(n.subdivide(.5,!1)):i.push(n),qe(e)?i.push(e.subdivide(.5,!0)):i.push(e),qe(t)?i.push(t.subdivide(.5,!0).reverse()):i.push(t),qe(A)?i.push(A.subdivide(.5,!1).reverse()):i.push(A),i},jh=function(n){var A=n.bounds,e=n.styles;return A.add(e.borderLeftWidth,e.borderTopWidth,-(e.borderRightWidth+e.borderLeftWidth),-(e.borderTopWidth+e.borderBottomWidth))},Ss=function(n){var A=n.styles,e=n.bounds,t=ZA(A.paddingLeft,e.width),i=ZA(A.paddingRight,e.width),r=ZA(A.paddingTop,e.width),s=ZA(A.paddingBottom,e.width);return e.add(t+A.borderLeftWidth,r+A.borderTopWidth,-(A.borderRightWidth+A.borderLeftWidth+t+i),-(A.borderTopWidth+A.borderBottomWidth+r+s))},AE=function(n,A){return n===0?A.bounds:n===2?Ss(A):jh(A)},eE=function(n,A){return n===0?A.bounds:n===2?Ss(A):jh(A)},Ka=function(n,A,e){var t=AE(ni(n.styles.backgroundOrigin,A),n),i=eE(ni(n.styles.backgroundClip,A),n),r=tE(ni(n.styles.backgroundSize,A),e,t),s=r[0],a=r[1],o=Pi(ni(n.styles.backgroundPosition,A),t.width-s,t.height-a),l=nE(ni(n.styles.backgroundRepeat,A),o,r,t,i),c=Math.round(t.left+o[0]),u=Math.round(t.top+o[1]);return[l,c,u,s,a]},jn=function(n){return JA(n)&&n.value===li.AUTO},ss=function(n){return typeof n=="number"},tE=function(n,A,e){var t=A[0],i=A[1],r=A[2],s=n[0],a=n[1];if(!s)return[0,0];if(oe(s)&&a&&oe(a))return[ZA(s,e.width),ZA(a,e.height)];var o=ss(r);if(JA(s)&&(s.value===li.CONTAIN||s.value===li.COVER)){if(ss(r)){var l=e.width/e.height;return l<r!=(s.value===li.COVER)?[e.width,e.width/r]:[e.height*r,e.height]}return[e.width,e.height]}var c=ss(t),u=ss(i),h=c||u;if(jn(s)&&(!a||jn(a))){if(c&&u)return[t,i];if(!o&&!h)return[e.width,e.height];if(h&&o){var p=c?t:i*r,g=u?i:t/r;return[p,g]}var m=c?t:e.width,d=u?i:e.height;return[m,d]}if(o){var f=0,C=0;return oe(s)?f=ZA(s,e.width):oe(a)&&(C=ZA(a,e.height)),jn(s)?f=C*r:(!a||jn(a))&&(C=f/r),[f,C]}var v=null,_=null;if(oe(s)?v=ZA(s,e.width):a&&oe(a)&&(_=ZA(a,e.height)),v!==null&&(!a||jn(a))&&(_=c&&u?v/t*i:e.height),_!==null&&jn(s)&&(v=c&&u?_/i*t:e.width),v!==null&&_!==null)return[v,_];throw new Error("Unable to calculate background-size for element")},ni=function(n,A){var e=n[A];return typeof e>"u"?n[0]:e},nE=function(n,A,e,t,i){var r=A[0],s=A[1],a=e[0],o=e[1];switch(n){case 2:return[new dA(Math.round(t.left),Math.round(t.top+s)),new dA(Math.round(t.left+t.width),Math.round(t.top+s)),new dA(Math.round(t.left+t.width),Math.round(o+t.top+s)),new dA(Math.round(t.left),Math.round(o+t.top+s))];case 3:return[new dA(Math.round(t.left+r),Math.round(t.top)),new dA(Math.round(t.left+r+a),Math.round(t.top)),new dA(Math.round(t.left+r+a),Math.round(t.height+t.top)),new dA(Math.round(t.left+r),Math.round(t.height+t.top))];case 1:return[new dA(Math.round(t.left+r),Math.round(t.top+s)),new dA(Math.round(t.left+r+a),Math.round(t.top+s)),new dA(Math.round(t.left+r+a),Math.round(t.top+s+o)),new dA(Math.round(t.left+r),Math.round(t.top+s+o))];default:return[new dA(Math.round(i.left),Math.round(i.top)),new dA(Math.round(i.left+i.width),Math.round(i.top)),new dA(Math.round(i.left+i.width),Math.round(i.height+i.top)),new dA(Math.round(i.left),Math.round(i.height+i.top))]}},iE="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",du="Hidden Text",rE=function(){function n(A){this._data={},this._document=A}return n.prototype.parseMetrics=function(A,e){var t=this._document.createElement("div"),i=this._document.createElement("img"),r=this._document.createElement("span"),s=this._document.body;t.style.visibility="hidden",t.style.fontFamily=A,t.style.fontSize=e,t.style.margin="0",t.style.padding="0",t.style.whiteSpace="nowrap",s.appendChild(t),i.src=iE,i.width=1,i.height=1,i.style.margin="0",i.style.padding="0",i.style.verticalAlign="baseline",r.style.fontFamily=A,r.style.fontSize=e,r.style.margin="0",r.style.padding="0",r.appendChild(this._document.createTextNode(du)),t.appendChild(r),t.appendChild(i);var a=i.offsetTop-r.offsetTop+2;t.removeChild(r),t.appendChild(this._document.createTextNode(du)),t.style.lineHeight="normal",i.style.verticalAlign="super";var o=i.offsetTop-t.offsetTop+2;return s.removeChild(t),{baseline:a,middle:o}},n.prototype.getMetrics=function(A,e){var t=A+" "+e;return typeof this._data[t]>"u"&&(this._data[t]=this.parseMetrics(A,e)),this._data[t]},n}(),$h=function(){function n(A,e){this.context=A,this.options=e}return n}(),sE=1e4,aE=function(n){ct(A,n);function A(e,t){var i=n.call(this,e,t)||this;return i._activeEffects=[],i.canvas=t.canvas?t.canvas:document.createElement("canvas"),i.ctx=i.canvas.getContext("2d"),t.canvas||(i.canvas.width=Math.floor(t.width*t.scale),i.canvas.height=Math.floor(t.height*t.scale),i.canvas.style.width=t.width+"px",i.canvas.style.height=t.height+"px"),i.fontMetrics=new rE(document),i.ctx.scale(i.options.scale,i.options.scale),i.ctx.translate(-t.x,-t.y),i.ctx.textBaseline="bottom",i._activeEffects=[],i.context.logger.debug("Canvas renderer initialized ("+t.width+"x"+t.height+") with scale "+t.scale),i}return A.prototype.applyEffects=function(e){for(var t=this;this._activeEffects.length;)this.popEffect();e.forEach(function(i){return t.applyEffect(i)})},A.prototype.applyEffect=function(e){this.ctx.save(),YC(e)&&(this.ctx.globalAlpha=e.opacity),XC(e)&&(this.ctx.translate(e.offsetX,e.offsetY),this.ctx.transform(e.matrix[0],e.matrix[1],e.matrix[2],e.matrix[3],e.matrix[4],e.matrix[5]),this.ctx.translate(-e.offsetX,-e.offsetY)),Yh(e)&&(this.path(e.path),this.ctx.clip()),this._activeEffects.push(e)},A.prototype.popEffect=function(){this._activeEffects.pop(),this.ctx.restore()},A.prototype.renderStack=function(e){return Le(this,void 0,void 0,function(){var t;return Me(this,function(i){switch(i.label){case 0:return t=e.element.container.styles,t.isVisible()?[4,this.renderStackContent(e)]:[3,2];case 1:i.sent(),i.label=2;case 2:return[2]}})})},A.prototype.renderNode=function(e){return Le(this,void 0,void 0,function(){return Me(this,function(t){switch(t.label){case 0:if(ue(e.container.flags,16))debugger;return e.container.styles.isVisible()?[4,this.renderNodeBackgroundAndBorders(e)]:[3,3];case 1:return t.sent(),[4,this.renderNodeContent(e)];case 2:t.sent(),t.label=3;case 3:return[2]}})})},A.prototype.renderTextWithLetterSpacing=function(e,t,i){var r=this;if(t===0)this.ctx.fillText(e.text,e.bounds.left,e.bounds.top+i);else{var s=Po(e.text);s.reduce(function(a,o){return r.ctx.fillText(o,a,e.bounds.top+i),a+r.ctx.measureText(o).width},e.bounds.left)}},A.prototype.createFontStyle=function(e){var t=e.fontVariant.filter(function(s){return s==="normal"||s==="small-caps"}).join(""),i=hE(e.fontFamily).join(", "),r=pr(e.fontSize)?""+e.fontSize.number+e.fontSize.unit:e.fontSize.number+"px";return[[e.fontStyle,t,e.fontWeight,r,i].join(" "),i,r]},A.prototype.renderTextNode=function(e,t){return Le(this,void 0,void 0,function(){var i,r,s,a,o,l,c,u,h=this;return Me(this,function(p){return i=this.createFontStyle(t),r=i[0],s=i[1],a=i[2],this.ctx.font=r,this.ctx.direction=t.direction===1?"rtl":"ltr",this.ctx.textAlign="left",this.ctx.textBaseline="alphabetic",o=this.fontMetrics.getMetrics(s,a),l=o.baseline,c=o.middle,u=t.paintOrder,e.textBounds.forEach(function(g){u.forEach(function(m){switch(m){case 0:h.ctx.fillStyle=ge(t.color),h.renderTextWithLetterSpacing(g,t.letterSpacing,l);var d=t.textShadow;d.length&&g.text.trim().length&&(d.slice(0).reverse().forEach(function(f){h.ctx.shadowColor=ge(f.color),h.ctx.shadowOffsetX=f.offsetX.number*h.options.scale,h.ctx.shadowOffsetY=f.offsetY.number*h.options.scale,h.ctx.shadowBlur=f.blur.number,h.renderTextWithLetterSpacing(g,t.letterSpacing,l)}),h.ctx.shadowColor="",h.ctx.shadowOffsetX=0,h.ctx.shadowOffsetY=0,h.ctx.shadowBlur=0),t.textDecorationLine.length&&(h.ctx.fillStyle=ge(t.textDecorationColor||t.color),t.textDecorationLine.forEach(function(f){switch(f){case 1:h.ctx.fillRect(g.bounds.left,Math.round(g.bounds.top+l),g.bounds.width,1);break;case 2:h.ctx.fillRect(g.bounds.left,Math.round(g.bounds.top),g.bounds.width,1);break;case 3:h.ctx.fillRect(g.bounds.left,Math.ceil(g.bounds.top+c),g.bounds.width,1);break}}));break;case 1:t.webkitTextStrokeWidth&&g.text.trim().length&&(h.ctx.strokeStyle=ge(t.webkitTextStrokeColor),h.ctx.lineWidth=t.webkitTextStrokeWidth,h.ctx.lineJoin=window.chrome?"miter":"round",h.ctx.strokeText(g.text,g.bounds.left,g.bounds.top+l)),h.ctx.strokeStyle="",h.ctx.lineWidth=0,h.ctx.lineJoin="miter";break}})}),[2]})})},A.prototype.renderReplacedElement=function(e,t,i){if(i&&e.intrinsicWidth>0&&e.intrinsicHeight>0){var r=Ss(e),s=ys(t);this.path(s),this.ctx.save(),this.ctx.clip(),this.ctx.drawImage(i,0,0,e.intrinsicWidth,e.intrinsicHeight,r.left,r.top,r.width,r.height),this.ctx.restore()}},A.prototype.renderNodeContent=function(e){return Le(this,void 0,void 0,function(){var t,i,r,s,a,o,C,C,l,c,u,h,_,p,g,E,m,d,f,C,v,_,E;return Me(this,function(y){switch(y.label){case 0:this.applyEffects(e.getEffects(4)),t=e.container,i=e.curves,r=t.styles,s=0,a=t.textNodes,y.label=1;case 1:return s<a.length?(o=a[s],[4,this.renderTextNode(o,r)]):[3,4];case 2:y.sent(),y.label=3;case 3:return s++,[3,1];case 4:if(!(t instanceof Th))return[3,8];y.label=5;case 5:return y.trys.push([5,7,,8]),[4,this.context.cache.match(t.src)];case 6:return C=y.sent(),this.renderReplacedElement(t,i,C),[3,8];case 7:return y.sent(),this.context.logger.error("Error loading image "+t.src),[3,8];case 8:if(t instanceof Qh&&this.renderReplacedElement(t,i,t.canvas),!(t instanceof Ih))return[3,12];y.label=9;case 9:return y.trys.push([9,11,,12]),[4,this.context.cache.match(t.svg)];case 10:return C=y.sent(),this.renderReplacedElement(t,i,C),[3,12];case 11:return y.sent(),this.context.logger.error("Error loading svg "+t.svg.substring(0,255)),[3,12];case 12:return t instanceof Dh&&t.tree?(l=new A(this.context,{scale:this.options.scale,backgroundColor:t.backgroundColor,x:0,y:0,width:t.width,height:t.height}),[4,l.render(t.tree)]):[3,14];case 13:c=y.sent(),t.width&&t.height&&this.ctx.drawImage(c,0,0,t.width,t.height,t.bounds.left,t.bounds.top,t.bounds.width,t.bounds.height),y.label=14;case 14:if(t instanceof Oo&&(u=Math.min(t.bounds.width,t.bounds.height),t.type===_s?t.checked&&(this.ctx.save(),this.path([new dA(t.bounds.left+u*.39363,t.bounds.top+u*.79),new dA(t.bounds.left+u*.16,t.bounds.top+u*.5549),new dA(t.bounds.left+u*.27347,t.bounds.top+u*.44071),new dA(t.bounds.left+u*.39694,t.bounds.top+u*.5649),new dA(t.bounds.left+u*.72983,t.bounds.top+u*.23),new dA(t.bounds.left+u*.84,t.bounds.top+u*.34085),new dA(t.bounds.left+u*.39363,t.bounds.top+u*.79)]),this.ctx.fillStyle=ge(eu),this.ctx.fill(),this.ctx.restore()):t.type===Cs&&t.checked&&(this.ctx.save(),this.ctx.beginPath(),this.ctx.arc(t.bounds.left+u/2,t.bounds.top+u/2,u/4,0,Math.PI*2,!0),this.ctx.fillStyle=ge(eu),this.ctx.fill(),this.ctx.restore())),oE(t)&&t.value.length){switch(h=this.createFontStyle(r),_=h[0],p=h[1],g=this.fontMetrics.getMetrics(_,p).baseline,this.ctx.font=_,this.ctx.fillStyle=ge(r.color),this.ctx.textBaseline="alphabetic",this.ctx.textAlign=cE(t.styles.textAlign),E=Ss(t),m=0,t.styles.textAlign){case 1:m+=E.width/2;break;case 2:m+=E.width;break}d=E.add(m,0,0,-E.height/2+1),this.ctx.save(),this.path([new dA(E.left,E.top),new dA(E.left+E.width,E.top),new dA(E.left+E.width,E.top+E.height),new dA(E.left,E.top+E.height)]),this.ctx.clip(),this.renderTextWithLetterSpacing(new Ji(t.value,d),r.letterSpacing,g),this.ctx.restore(),this.ctx.textBaseline="alphabetic",this.ctx.textAlign="left"}if(!ue(t.styles.display,2048))return[3,20];if(t.styles.listStyleImage===null)return[3,19];if(f=t.styles.listStyleImage,f.type!==0)return[3,18];C=void 0,v=f.url,y.label=15;case 15:return y.trys.push([15,17,,18]),[4,this.context.cache.match(v)];case 16:return C=y.sent(),this.ctx.drawImage(C,t.bounds.left-(C.width+10),t.bounds.top),[3,18];case 17:return y.sent(),this.context.logger.error("Error loading list-style-image "+v),[3,18];case 18:return[3,20];case 19:e.listValue&&t.styles.listStyleType!==-1&&(_=this.createFontStyle(r)[0],this.ctx.font=_,this.ctx.fillStyle=ge(r.color),this.ctx.textBaseline="middle",this.ctx.textAlign="right",E=new Lt(t.bounds.left,t.bounds.top+ZA(t.styles.paddingTop,t.bounds.width),t.bounds.width,Pc(r.lineHeight,r.fontSize.number)/2+1),this.renderTextWithLetterSpacing(new Ji(e.listValue,E),r.letterSpacing,Pc(r.lineHeight,r.fontSize.number)/2+2),this.ctx.textBaseline="bottom",this.ctx.textAlign="left"),y.label=20;case 20:return[2]}})})},A.prototype.renderStackContent=function(e){return Le(this,void 0,void 0,function(){var t,i,f,r,s,f,a,o,f,l,c,f,u,h,f,p,g,f,m,d,f;return Me(this,function(C){switch(C.label){case 0:if(ue(e.element.container.flags,16))debugger;return[4,this.renderNodeBackgroundAndBorders(e.element)];case 1:C.sent(),t=0,i=e.negativeZIndex,C.label=2;case 2:return t<i.length?(f=i[t],[4,this.renderStack(f)]):[3,5];case 3:C.sent(),C.label=4;case 4:return t++,[3,2];case 5:return[4,this.renderNodeContent(e.element)];case 6:C.sent(),r=0,s=e.nonInlineLevel,C.label=7;case 7:return r<s.length?(f=s[r],[4,this.renderNode(f)]):[3,10];case 8:C.sent(),C.label=9;case 9:return r++,[3,7];case 10:a=0,o=e.nonPositionedFloats,C.label=11;case 11:return a<o.length?(f=o[a],[4,this.renderStack(f)]):[3,14];case 12:C.sent(),C.label=13;case 13:return a++,[3,11];case 14:l=0,c=e.nonPositionedInlineLevel,C.label=15;case 15:return l<c.length?(f=c[l],[4,this.renderStack(f)]):[3,18];case 16:C.sent(),C.label=17;case 17:return l++,[3,15];case 18:u=0,h=e.inlineLevel,C.label=19;case 19:return u<h.length?(f=h[u],[4,this.renderNode(f)]):[3,22];case 20:C.sent(),C.label=21;case 21:return u++,[3,19];case 22:p=0,g=e.zeroOrAutoZIndexOrTransformedOrOpacity,C.label=23;case 23:return p<g.length?(f=g[p],[4,this.renderStack(f)]):[3,26];case 24:C.sent(),C.label=25;case 25:return p++,[3,23];case 26:m=0,d=e.positiveZIndex,C.label=27;case 27:return m<d.length?(f=d[m],[4,this.renderStack(f)]):[3,30];case 28:C.sent(),C.label=29;case 29:return m++,[3,27];case 30:return[2]}})})},A.prototype.mask=function(e){this.ctx.beginPath(),this.ctx.moveTo(0,0),this.ctx.lineTo(this.canvas.width,0),this.ctx.lineTo(this.canvas.width,this.canvas.height),this.ctx.lineTo(0,this.canvas.height),this.ctx.lineTo(0,0),this.formatPath(e.slice(0).reverse()),this.ctx.closePath()},A.prototype.path=function(e){this.ctx.beginPath(),this.formatPath(e),this.ctx.closePath()},A.prototype.formatPath=function(e){var t=this;e.forEach(function(i,r){var s=qe(i)?i.start:i;r===0?t.ctx.moveTo(s.x,s.y):t.ctx.lineTo(s.x,s.y),qe(i)&&t.ctx.bezierCurveTo(i.startControl.x,i.startControl.y,i.endControl.x,i.endControl.y,i.end.x,i.end.y)})},A.prototype.renderRepeat=function(e,t,i,r){this.path(e),this.ctx.fillStyle=t,this.ctx.translate(i,r),this.ctx.fill(),this.ctx.translate(-i,-r)},A.prototype.resizeImage=function(e,t,i){var r;if(e.width===t&&e.height===i)return e;var s=(r=this.canvas.ownerDocument)!==null&&r!==void 0?r:document,a=s.createElement("canvas");a.width=Math.max(1,t),a.height=Math.max(1,i);var o=a.getContext("2d");return o.drawImage(e,0,0,e.width,e.height,0,0,t,i),a},A.prototype.renderBackgroundImage=function(e){return Le(this,void 0,void 0,function(){var t,i,r,s,a,o;return Me(this,function(l){switch(l.label){case 0:t=e.styles.backgroundImage.length-1,i=function(c){var u,h,p,S,Z,k,T,O,L,g,S,Z,k,T,O,m,d,f,C,v,_,E,y,U,L,B,S,Y,q,T,O,V,Z,k,X,$,J,D,K,rA,sA,oA;return Me(this,function(mA){switch(mA.label){case 0:if(c.type!==0)return[3,5];u=void 0,h=c.url,mA.label=1;case 1:return mA.trys.push([1,3,,4]),[4,r.context.cache.match(h)];case 2:return u=mA.sent(),[3,4];case 3:return mA.sent(),r.context.logger.error("Error loading background-image "+h),[3,4];case 4:return u&&(p=Ka(e,t,[u.width,u.height,u.width/u.height]),S=p[0],Z=p[1],k=p[2],T=p[3],O=p[4],L=r.ctx.createPattern(r.resizeImage(u,T,O),"repeat"),r.renderRepeat(S,L,Z,k)),[3,6];case 5:Xw(c)?(g=Ka(e,t,[null,null,null]),S=g[0],Z=g[1],k=g[2],T=g[3],O=g[4],m=Vw(c.angle,T,O),d=m[0],f=m[1],C=m[2],v=m[3],_=m[4],E=document.createElement("canvas"),E.width=T,E.height=O,y=E.getContext("2d"),U=y.createLinearGradient(f,v,C,_),Hc(c.stops,d).forEach(function(wA){return U.addColorStop(wA.stop,ge(wA.color))}),y.fillStyle=U,y.fillRect(0,0,T,O),T>0&&O>0&&(L=r.ctx.createPattern(E,"repeat"),r.renderRepeat(S,L,Z,k))):Yw(c)&&(B=Ka(e,t,[null,null,null]),S=B[0],Y=B[1],q=B[2],T=B[3],O=B[4],V=c.position.length===0?[Ro]:c.position,Z=ZA(V[0],T),k=ZA(V[V.length-1],O),X=Kw(c,Z,k,T,O),$=X[0],J=X[1],$>0&&J>0&&(D=r.ctx.createRadialGradient(Y+Z,q+k,0,Y+Z,q+k,$),Hc(c.stops,$*2).forEach(function(wA){return D.addColorStop(wA.stop,ge(wA.color))}),r.path(S),r.ctx.fillStyle=D,$!==J?(K=e.bounds.left+.5*e.bounds.width,rA=e.bounds.top+.5*e.bounds.height,sA=J/$,oA=1/sA,r.ctx.save(),r.ctx.translate(K,rA),r.ctx.transform(1,0,0,sA,0,0),r.ctx.translate(-K,-rA),r.ctx.fillRect(Y,oA*(q-rA)+rA,T,O*oA),r.ctx.restore()):r.ctx.fill())),mA.label=6;case 6:return t--,[2]}})},r=this,s=0,a=e.styles.backgroundImage.slice(0).reverse(),l.label=1;case 1:return s<a.length?(o=a[s],[5,i(o)]):[3,4];case 2:l.sent(),l.label=3;case 3:return s++,[3,1];case 4:return[2]}})})},A.prototype.renderSolidBorder=function(e,t,i){return Le(this,void 0,void 0,function(){return Me(this,function(r){return this.path(fu(i,t)),this.ctx.fillStyle=ge(e),this.ctx.fill(),[2]})})},A.prototype.renderDoubleBorder=function(e,t,i,r){return Le(this,void 0,void 0,function(){var s,a;return Me(this,function(o){switch(o.label){case 0:return t<3?[4,this.renderSolidBorder(e,i,r)]:[3,2];case 1:return o.sent(),[2];case 2:return s=qC(r,i),this.path(s),this.ctx.fillStyle=ge(e),this.ctx.fill(),a=jC(r,i),this.path(a),this.ctx.fill(),[2]}})})},A.prototype.renderNodeBackgroundAndBorders=function(e){return Le(this,void 0,void 0,function(){var t,i,r,s,a,o,l,c,u=this;return Me(this,function(h){switch(h.label){case 0:return this.applyEffects(e.getEffects(2)),t=e.container.styles,i=!An(t.backgroundColor)||t.backgroundImage.length,r=[{style:t.borderTopStyle,color:t.borderTopColor,width:t.borderTopWidth},{style:t.borderRightStyle,color:t.borderRightColor,width:t.borderRightWidth},{style:t.borderBottomStyle,color:t.borderBottomColor,width:t.borderBottomWidth},{style:t.borderLeftStyle,color:t.borderLeftColor,width:t.borderLeftWidth}],s=lE(ni(t.backgroundClip,0),e.curves),i||t.boxShadow.length?(this.ctx.save(),this.path(s),this.ctx.clip(),An(t.backgroundColor)||(this.ctx.fillStyle=ge(t.backgroundColor),this.ctx.fill()),[4,this.renderBackgroundImage(e.container)]):[3,2];case 1:h.sent(),this.ctx.restore(),t.boxShadow.slice(0).reverse().forEach(function(p){u.ctx.save();var g=Us(e.curves),m=p.inset?0:sE,d=JC(g,-m+(p.inset?1:-1)*p.spread.number,(p.inset?1:-1)*p.spread.number,p.spread.number*(p.inset?-2:2),p.spread.number*(p.inset?-2:2));p.inset?(u.path(g),u.ctx.clip(),u.mask(d)):(u.mask(g),u.ctx.clip(),u.path(d)),u.ctx.shadowOffsetX=p.offsetX.number+m,u.ctx.shadowOffsetY=p.offsetY.number,u.ctx.shadowColor=ge(p.color),u.ctx.shadowBlur=p.blur.number,u.ctx.fillStyle=p.inset?ge(p.color):"rgba(0,0,0,1)",u.ctx.fill(),u.ctx.restore()}),h.label=2;case 2:a=0,o=0,l=r,h.label=3;case 3:return o<l.length?(c=l[o],c.style!==0&&!An(c.color)&&c.width>0?c.style!==2?[3,5]:[4,this.renderDashedDottedBorder(c.color,c.width,a,e.curves,2)]:[3,11]):[3,13];case 4:return h.sent(),[3,11];case 5:return c.style!==3?[3,7]:[4,this.renderDashedDottedBorder(c.color,c.width,a,e.curves,3)];case 6:return h.sent(),[3,11];case 7:return c.style!==4?[3,9]:[4,this.renderDoubleBorder(c.color,c.width,a,e.curves)];case 8:return h.sent(),[3,11];case 9:return[4,this.renderSolidBorder(c.color,a,e.curves)];case 10:h.sent(),h.label=11;case 11:a++,h.label=12;case 12:return o++,[3,3];case 13:return[2]}})})},A.prototype.renderDashedDottedBorder=function(e,t,i,r,s){return Le(this,void 0,void 0,function(){var a,o,l,c,u,h,p,g,m,d,f,C,v,_,E,y,E,y;return Me(this,function(U){return this.ctx.save(),a=$C(r,i),o=fu(r,i),s===2&&(this.path(o),this.ctx.clip()),qe(o[0])?(l=o[0].start.x,c=o[0].start.y):(l=o[0].x,c=o[0].y),qe(o[1])?(u=o[1].end.x,h=o[1].end.y):(u=o[1].x,h=o[1].y),i===0||i===2?p=Math.abs(l-u):p=Math.abs(c-h),this.ctx.beginPath(),s===3?this.formatPath(a):this.formatPath(o.slice(0,2)),g=t<3?t*3:t*2,m=t<3?t*2:t,s===3&&(g=t,m=t),d=!0,p<=g*2?d=!1:p<=g*2+m?(f=p/(2*g+m),g*=f,m*=f):(C=Math.floor((p+m)/(g+m)),v=(p-C*g)/(C-1),_=(p-(C+1)*g)/C,m=_<=0||Math.abs(m-v)<Math.abs(m-_)?v:_),d&&(s===3?this.ctx.setLineDash([0,g+m]):this.ctx.setLineDash([g,m])),s===3?(this.ctx.lineCap="round",this.ctx.lineWidth=t):this.ctx.lineWidth=t*2+1.1,this.ctx.strokeStyle=ge(e),this.ctx.stroke(),this.ctx.setLineDash([]),s===2&&(qe(o[0])&&(E=o[3],y=o[0],this.ctx.beginPath(),this.formatPath([new dA(E.end.x,E.end.y),new dA(y.start.x,y.start.y)]),this.ctx.stroke()),qe(o[1])&&(E=o[1],y=o[2],this.ctx.beginPath(),this.formatPath([new dA(E.end.x,E.end.y),new dA(y.start.x,y.start.y)]),this.ctx.stroke())),this.ctx.restore(),[2]})})},A.prototype.render=function(e){return Le(this,void 0,void 0,function(){var t;return Me(this,function(i){switch(i.label){case 0:return this.options.backgroundColor&&(this.ctx.fillStyle=ge(this.options.backgroundColor),this.ctx.fillRect(this.options.x,this.options.y,this.options.width,this.options.height)),t=ZC(e),[4,this.renderStack(t)];case 1:return i.sent(),this.applyEffects([]),[2,this.canvas]}})})},A}($h),oE=function(n){return n instanceof Hh||n instanceof Rh?!0:n instanceof Oo&&n.type!==Cs&&n.type!==_s},lE=function(n,A){switch(n){case 0:return Us(A);case 2:return kC(A);case 1:default:return ys(A)}},cE=function(n){switch(n){case 1:return"center";case 2:return"right";case 0:default:return"left"}},uE=["-apple-system","system-ui"],hE=function(n){return/iPhone OS 15_(0|1)/.test(window.navigator.userAgent)?n.filter(function(A){return uE.indexOf(A)===-1}):n},fE=function(n){ct(A,n);function A(e,t){var i=n.call(this,e,t)||this;return i.canvas=t.canvas?t.canvas:document.createElement("canvas"),i.ctx=i.canvas.getContext("2d"),i.options=t,i.canvas.width=Math.floor(t.width*t.scale),i.canvas.height=Math.floor(t.height*t.scale),i.canvas.style.width=t.width+"px",i.canvas.style.height=t.height+"px",i.ctx.scale(i.options.scale,i.options.scale),i.ctx.translate(-t.x,-t.y),i.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized ("+t.width+"x"+t.height+" at "+t.x+","+t.y+") with scale "+t.scale),i}return A.prototype.render=function(e){return Le(this,void 0,void 0,function(){var t,i;return Me(this,function(r){switch(r.label){case 0:return t=Bo(this.options.width*this.options.scale,this.options.height*this.options.scale,this.options.scale,this.options.scale,e),[4,dE(t)];case 1:return i=r.sent(),this.options.backgroundColor&&(this.ctx.fillStyle=ge(this.options.backgroundColor),this.ctx.fillRect(0,0,this.options.width*this.options.scale,this.options.height*this.options.scale)),this.ctx.drawImage(i,-this.options.x*this.options.scale,-this.options.y*this.options.scale),[2,this.canvas]}})})},A}($h),dE=function(n){return new Promise(function(A,e){var t=new Image;t.onload=function(){A(t)},t.onerror=e,t.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(n))})},pE=function(){function n(A){var e=A.id,t=A.enabled;this.id=e,this.enabled=t,this.start=Date.now()}return n.prototype.debug=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];this.enabled&&(typeof window<"u"&&window.console&&typeof console.debug=="function"?console.debug.apply(console,Pr([this.id,this.getTime()+"ms"],A)):this.info.apply(this,A))},n.prototype.getTime=function(){return Date.now()-this.start},n.prototype.info=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];this.enabled&&typeof window<"u"&&window.console&&typeof console.info=="function"&&console.info.apply(console,Pr([this.id,this.getTime()+"ms"],A))},n.prototype.warn=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];this.enabled&&(typeof window<"u"&&window.console&&typeof console.warn=="function"?console.warn.apply(console,Pr([this.id,this.getTime()+"ms"],A)):this.info.apply(this,A))},n.prototype.error=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];this.enabled&&(typeof window<"u"&&window.console&&typeof console.error=="function"?console.error.apply(console,Pr([this.id,this.getTime()+"ms"],A)):this.info.apply(this,A))},n.instances={},n}(),gE=function(){function n(A,e){var t;this.windowBounds=e,this.instanceName="#"+n.instanceCount++,this.logger=new pE({id:this.instanceName,enabled:A.logging}),this.cache=(t=A.cache)!==null&&t!==void 0?t:new HC(this,A)}return n.instanceCount=1,n}(),Af=function(n,A){return A===void 0&&(A={}),mE(n,A)};typeof window<"u"&&Xh.setContext(window);var mE=function(n,A){return Le(void 0,void 0,void 0,function(){var e,t,i,r,s,a,o,l,c,u,h,p,g,m,d,f,C,v,_,E,U,y,U,L,B,S,Y,q,T,O,V,Z,k,X,$,J,D,K,rA,sA;return Me(this,function(oA){switch(oA.label){case 0:if(!n||typeof n!="object")return[2,Promise.reject("Invalid element provided as first argument")];if(e=n.ownerDocument,!e)throw new Error("Element is not attached to a Document");if(t=e.defaultView,!t)throw new Error("Document is not attached to a Window");return i={allowTaint:(L=A.allowTaint)!==null&&L!==void 0?L:!1,imageTimeout:(B=A.imageTimeout)!==null&&B!==void 0?B:15e3,proxy:A.proxy,useCORS:(S=A.useCORS)!==null&&S!==void 0?S:!1},r=to({logging:(Y=A.logging)!==null&&Y!==void 0?Y:!0,cache:A.cache},i),s={windowWidth:(q=A.windowWidth)!==null&&q!==void 0?q:t.innerWidth,windowHeight:(T=A.windowHeight)!==null&&T!==void 0?T:t.innerHeight,scrollX:(O=A.scrollX)!==null&&O!==void 0?O:t.pageXOffset,scrollY:(V=A.scrollY)!==null&&V!==void 0?V:t.pageYOffset},a=new Lt(s.scrollX,s.scrollY,s.windowWidth,s.windowHeight),o=new gE(r,a),l=(Z=A.foreignObjectRendering)!==null&&Z!==void 0?Z:!1,c={allowTaint:(k=A.allowTaint)!==null&&k!==void 0?k:!1,onclone:A.onclone,ignoreElements:A.ignoreElements,inlineImages:l,copyStyles:l},o.logger.debug("Starting document clone with size "+a.width+"x"+a.height+" scrolled to "+-a.left+","+-a.top),u=new cu(o,n,c),h=u.clonedReferenceElement,h?[4,u.toIFrame(e,a)]:[2,Promise.reject("Unable to find element in cloned iframe")];case 1:return p=oA.sent(),g=No(h)||wC(h)?JB(h.ownerDocument):Is(o,h),m=g.width,d=g.height,f=g.left,C=g.top,v=BE(o,h,A.backgroundColor),_={canvas:A.canvas,backgroundColor:v,scale:($=(X=A.scale)!==null&&X!==void 0?X:t.devicePixelRatio)!==null&&$!==void 0?$:1,x:((J=A.x)!==null&&J!==void 0?J:0)+f,y:((D=A.y)!==null&&D!==void 0?D:0)+C,width:(K=A.width)!==null&&K!==void 0?K:Math.ceil(m),height:(rA=A.height)!==null&&rA!==void 0?rA:Math.ceil(d)},l?(o.logger.debug("Document cloned, using foreign object rendering"),U=new fE(o,_),[4,U.render(h)]):[3,3];case 2:return E=oA.sent(),[3,5];case 3:return o.logger.debug("Document cloned, element located at "+f+","+C+" with size "+m+"x"+d+" using computed rendering"),o.logger.debug("Starting DOM parsing"),y=Oh(o,h),v===y.styles.backgroundColor&&(y.styles.backgroundColor=It.TRANSPARENT),o.logger.debug("Starting renderer for element at "+_.x+","+_.y+" with size "+_.width+"x"+_.height),U=new aE(o,_),[4,U.render(y)];case 4:E=oA.sent(),oA.label=5;case 5:return(!((sA=A.removeContainer)!==null&&sA!==void 0)||sA)&&(cu.destroy(p)||o.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")),o.logger.debug("Finished rendering"),[2,E]}})})},BE=function(n,A,e){var t=A.ownerDocument,i=t.documentElement?Xi(n,getComputedStyle(t.documentElement).backgroundColor):It.TRANSPARENT,r=t.body?Xi(n,getComputedStyle(t.body).backgroundColor):It.TRANSPARENT,s=typeof e=="string"?Xi(n,e):e===null?It.TRANSPARENT:4294967295;return A===t.documentElement?An(i)?An(r)?s:r:i:s},qi=(n=>(n.GLOBAL="Global",n.NORTHERN_HEMISSPHERE="Northern HS",n.SOUTHERN_HEMISSPHERE="Southern HS",n))(qi||{}),Re=(n=>(n.CREATE_HELIX="create-helix",n.CHANGE_THEME="change-theme",n.HIDE_IMPRINT="hide-imprint",n.SHOW_IMPRINT="show-imprint",n))(Re||{});class Go{constructor(A,e){let t=!1;new MutationObserver(r=>{t&&r.forEach((s,a)=>e(s,a))}).observe(A,{attributes:!0,attributeFilter:["class"]}),t=!0}}const wE=async()=>await YB(()=>import("./imprint-gen-97f4f62e.js"),[]),vE='<hr><p style="opacity: 1.0;">Dieses Impressum wurde erstellt durch <a href="https://www.impressum-generator.de" rel="nofollow">impressum-generator.de</a>.</p>',_E=`<hr><div class="center" width=100%>
<button id="hide-imprint" onclick="document.body.dispatchEvent(new Event('${Re.HIDE_IMPRINT.toString()}', { bubbles: true }))">Close</button></div>`;class CE{constructor(){window.addEventListener("resize",()=>this.redraw()),new Go(document.body,()=>this.redraw()),document.body.addEventListener(Re.SHOW_IMPRINT.toString(),A=>this.show()),document.body.addEventListener(Re.HIDE_IMPRINT.toString(),A=>this.hide()),document.body.addEventListener("keydown",A=>{(A.key==="Esc"||A.key==="Escape")&&this.hide()})}redraw(){this.div!==void 0&&(this.hide(),this.show())}async isAvailable(){const A=await wE();return this.decryptedAES=A.decryptedAES,this.decryptedAES()!==void 0}show(){if(this.div===void 0){this.div=document.createElement("div");const A=this.div;A.classList.add("imprint"),A.innerHTML=this.decryptedAES(),document.body.appendChild(A);const e=window.getComputedStyle(document.body),t=A.scrollWidth,i=A.scrollHeight,r=e.getPropertyValue("background-color");Af(A,{backgroundColor:r,windowWidth:t,windowHeight:i}).then(s=>{s.classList.add("padding"),A.innerHTML="",A.appendChild(s);const a=document.createElement("p");a.classList.add("padding"),a.innerHTML=vE+_E,A.appendChild(a)})}}hide(){this.div!==void 0&&(document.body.removeChild(this.div),this.div=void 0)}}const EE=`<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" id="gui-icon" viewBox="0 0 24 24" width="512" height="512">
    <path d="M12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z"/>
    <path d="M21.294,13.9l-.444-.256a9.1,9.1,0,0,0,0-3.29l.444-.256a3,3,0,1,0-3-5.2l-.445.257A8.977,8.977,0,0,0,15,3.513V3A3,3,0,0,0,9,3v.513A8.977,8.977,0,0,0,6.152,5.159L5.705,4.9a3,3,0,0,0-3,5.2l.444.256a9.1,9.1,0,0,0,0,3.29l-.444.256a3,3,0,1,0,3,5.2l.445-.257A8.977,8.977,0,0,0,9,20.487V21a3,3,0,0,0,6,0v-.513a8.977,8.977,0,0,0,2.848-1.646l.447.258a3,3,0,0,0,3-5.2Zm-2.548-3.776a7.048,7.048,0,0,1,0,3.75,1,1,0,0,0,.464,1.133l1.084.626a1,1,0,0,1-1,1.733l-1.086-.628a1,1,0,0,0-1.215.165,6.984,6.984,0,0,1-3.243,1.875,1,1,0,0,0-.751.969V21a1,1,0,0,1-2,0V19.748a1,1,0,0,0-.751-.969A6.984,6.984,0,0,1,7.006,16.9a1,1,0,0,0-1.215-.165l-1.084.627a1,1,0,1,1-1-1.732l1.084-.626a1,1,0,0,0,.464-1.133,7.048,7.048,0,0,1,0-3.75A1,1,0,0,0,4.79,8.992L3.706,8.366a1,1,0,0,1,1-1.733l1.086.628A1,1,0,0,0,7.006,7.1a6.984,6.984,0,0,1,3.243-1.875A1,1,0,0,0,11,4.252V3a1,1,0,0,1,2,0V4.252a1,1,0,0,0,.751.969A6.984,6.984,0,0,1,16.994,7.1a1,1,0,0,0,1.215.165l1.084-.627a1,1,0,1,1,1,1.732l-1.084.626A1,1,0,0,0,18.746,10.125Z"/>
</svg>
`,xE=`Land-Ocean: Global Means
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
`,UE=`Land-Ocean: Northern Hemispheric Means
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
`,yE=`Land-Ocean: Southern Hemispheric Means
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
`,$n={},XA={showcaseCSV:void 0,radio:qi.GLOBAL,view:{dark_theme:SE(),geometry:{meshVisible:!1,facesVisible:!0,radialSegments:8,radius:1,radiusFactor:.9,tubularSegments:30},colors:{cold:ka("cold"),zero:ka("zero"),warm:ka("warm")}},capture:{},imprint:()=>wi.dispatchEvent(Re.SHOW_IMPRINT)};function ka(n){return{color:Gi(n),modified:!1}}function SE(){return window.matchMedia("(prefers-color-scheme: dark)").matches}function Gi(n){return ef(`--${n}-color`)}function ef(n){const e=window.getComputedStyle(document.body).getPropertyValue(n);return new YA(e)}var ar,mn,ci,me,Mt;const Xe=class Xe{constructor(){Ue(this,ar,void 0);Ue(this,mn,void 0);Ue(this,ci,void 0);Ue(this,me,void 0);Ue(this,Mt,void 0);_e(this,me,new Io({container:document.querySelector(".container-div"),autoPlace:!1})),bA(this,me).domElement.id="gui",this.createShowcaseFolder(),this.createViewFolder(),this.createCaptureFolder(),this.createImprint(),this.createShowHideListener(),this.createSettingsIcon()}static styledColor(A){return ef(A)}static addRadioButtonsFolder(A,e,t,i,r=(s,a,o)=>{}){const s=A.addFolder(e);return Xe.addRadioButtons(s,t,i,r),s}static addRadioButtons(A,e,t,i=(r,s,a)=>{}){const r={};Object.entries(t).forEach(s=>{const[a,o]=s,l=`option_${a}`;r[l]=e===a}),Object.keys(t).forEach(s=>{const a=`option_${s}`;A.add(r,a).name(s).listen().onChange(()=>{for(let o in r)r[o]=a===o;i(r,a,s)})})}createSettingsIcon(){var e;const A=document.createElement("DIV");A.innerHTML=EE,_e(this,Mt,A.querySelector("#gui-icon")),bA(this,Mt).classList.add("show"),bA(this,me).hide(),bA(this,me).domElement.insertAdjacentElement("beforebegin",bA(this,Mt)),new Go(bA(this,me).domElement,(t,i)=>{const r=t.target;i===0&&!(r!=null&&r.classList.contains("transition"))&&(r!=null&&r.classList.contains("closed"))&&(bA(this,me).hide(),bA(this,me).close(),bA(this,Mt).classList.toggle("show"))}),(e=bA(this,Mt))==null||e.addEventListener("click",()=>{bA(this,Mt).classList.toggle("show"),bA(this,me).show(),bA(this,me).open()})}createShowHideListener(){window.addEventListener("keydown",A=>{(A.key==="h"||A.key==="H")&&(bA(this,ci)?bA(this,me).show():bA(this,me).hide(),_e(this,ci,!bA(this,ci)))})}createShowcaseFolder(){$n[qi.GLOBAL]=xE,$n[qi.NORTHERN_HEMISSPHERE]=UE,$n[qi.SOUTHERN_HEMISSPHERE]=yE,_e(this,mn,Xe.addRadioButtonsFolder(bA(this,me),`Region: ${XA.radio}`,XA.radio,$n,(A,e,t)=>{XA.showcaseCSV=$n[t],Xe.dispatchEvent(Re.CREATE_HELIX),bA(this,mn).title(`Region: ${t}`),bA(this,mn).close()})),XA.showcaseCSV=$n[XA.radio],bA(this,mn).close()}createViewFolder(){const A=bA(this,me).addFolder("View");A.add(XA.view,"dark_theme").name("Dark theme").onChange(()=>{Xe.dispatchEvent(Re.CHANGE_THEME)}),this.createViewGeometryFolder(A),this.createViewColorsFolder(A),A.close()}createViewGeometryFolder(A){const e=A.addFolder("Geometry"),t=XA.view.geometry;e.add(t,"meshVisible").name("Wireframe").onChange(()=>Xe.dispatchEvent(Re.CREATE_HELIX)),e.add(t,"facesVisible").name("Faces").onChange(()=>Xe.dispatchEvent(Re.CREATE_HELIX)),e.add(t,"tubularSegments").min(1).max(31).step(1).name("Monthly Segments").onChange(()=>Xe.dispatchEvent(Re.CREATE_HELIX)),e.add(t,"radialSegments").min(3).max(32).step(1).name("Radius Segments").onChange(()=>Xe.dispatchEvent(Re.CREATE_HELIX)),e.add(t,"radiusFactor").min(.1).max(2).name("Radius Factor").onChange(()=>Xe.dispatchEvent(Re.CREATE_HELIX)),e.close()}createViewColorsFolder(A){const e=A.addFolder("Colors"),t=XA.view.colors;e.addColor(t.cold,"color").name("-1.0°C").listen().onChange(()=>this.dispatchColorEvent("cold")),e.addColor(t.zero,"color").name("0°C").listen().onChange(()=>this.dispatchColorEvent("zero")),e.addColor(t.warm,"color").name("+1.5°C").listen().onChange(()=>this.dispatchColorEvent("warm")),e.close()}initializeColors(){XA.view.colors.cold.modified||(XA.view.colors.cold.color=Gi("cold")),XA.view.colors.zero.modified||(XA.view.colors.zero.color=Gi("zero")),XA.view.colors.warm.modified||(XA.view.colors.warm.color=Gi("warm"))}dispatchColorEvent(A){XA.view.colors[A].modified=!XA.view.colors[A].color.equals(Gi(A)),Xe.dispatchEvent(Re.CREATE_HELIX)}createCaptureFolder(){const A=bA(this,me).addFolder("Screen capture");A.close(),_e(this,ar,A)}createImprint(){new CE().isAvailable().then(t=>{t&&bA(this,me).add(XA,"imprint").name("Imprint")})}static dispatchEvent(A){const e=new Event(A.toString(),{bubbles:!0});document.body.dispatchEvent(e)}onThemeChange(A){const e=this.inverseTheme,t=this.theme;A.classList.contains(e)&&A.classList.remove(e),A.classList.add(t),this.initializeColors()}get showcaseCSV(){return XA.showcaseCSV}get radialSegments(){return Math.floor(XA.view.geometry.radialSegments)}get radiusFactor(){return XA.view.geometry.radiusFactor}get tubularSegments(){return Math.floor(XA.view.geometry.tubularSegments)}get showFaces(){return XA.view.geometry.facesVisible}get showWireframe(){return XA.view.geometry.meshVisible}get cold(){return XA.view.colors.cold.color}get zero(){return XA.view.colors.zero.color}get warm(){return XA.view.colors.warm.color}get theme(){return XA.view.dark_theme?"dark":"light"}get inverseTheme(){return XA.view.dark_theme?"light":"dark"}captureSettings(){return{folder:bA(this,ar),property:XA.capture}}};ar=new WeakMap,mn=new WeakMap,ci=new WeakMap,me=new WeakMap,Mt=new WeakMap;let wi=Xe;const pu={type:"change"},za={type:"start"},gu={type:"end"},as=new Hu,mu=new Vt,ME=Math.cos(70*yd.DEG2RAD);class FE extends Mn{constructor(A,e){super(),this.object=A,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new Q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Fn.ROTATE,MIDDLE:Fn.DOLLY,RIGHT:Fn.PAN},this.touches={ONE:bn.ROTATE,TWO:bn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(F){F.addEventListener("keydown",w),this._domElementKeyEvents=F},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",w),this._domElementKeyEvents=null},this.saveState=function(){t.target0.copy(t.target),t.position0.copy(t.object.position),t.zoom0=t.object.zoom},this.reset=function(){t.target.copy(t.target0),t.object.position.copy(t.position0),t.object.zoom=t.zoom0,t.object.updateProjectionMatrix(),t.dispatchEvent(pu),t.update(),r=i.NONE},this.update=function(){const F=new Q,j=new yn().setFromUnitVectors(A.up,new Q(0,1,0)),fA=j.clone().invert(),aA=new Q,hA=new yn,SA=new Q,VA=2*Math.PI;return function(){const cA=t.object.position;F.copy(cA).sub(t.target),F.applyQuaternion(j),a.setFromVector3(F),t.autoRotate&&r===i.NONE&&Y(B()),t.enableDamping?(a.theta+=o.theta*t.dampingFactor,a.phi+=o.phi*t.dampingFactor):(a.theta+=o.theta,a.phi+=o.phi);let P=t.minAzimuthAngle,eA=t.maxAzimuthAngle;isFinite(P)&&isFinite(eA)&&(P<-Math.PI?P+=VA:P>Math.PI&&(P-=VA),eA<-Math.PI?eA+=VA:eA>Math.PI&&(eA-=VA),P<=eA?a.theta=Math.max(P,Math.min(eA,a.theta)):a.theta=a.theta>(P+eA)/2?Math.max(P,a.theta):Math.min(eA,a.theta)),a.phi=Math.max(t.minPolarAngle,Math.min(t.maxPolarAngle,a.phi)),a.makeSafe(),t.enableDamping===!0?t.target.addScaledVector(c,t.dampingFactor):t.target.add(c),t.zoomToCursor&&y||t.object.isOrthographicCamera?a.radius=$(a.radius):a.radius=$(a.radius*l),F.setFromSpherical(a),F.applyQuaternion(fA),cA.copy(t.target).add(F),t.object.lookAt(t.target),t.enableDamping===!0?(o.theta*=1-t.dampingFactor,o.phi*=1-t.dampingFactor,c.multiplyScalar(1-t.dampingFactor)):(o.set(0,0,0),c.set(0,0,0));let uA=!1;if(t.zoomToCursor&&y){let DA=null;if(t.object.isPerspectiveCamera){const WA=F.length();DA=$(WA*l);const jA=WA-DA;t.object.position.addScaledVector(_,jA),t.object.updateMatrixWorld()}else if(t.object.isOrthographicCamera){const WA=new Q(E.x,E.y,0);WA.unproject(t.object),t.object.zoom=Math.max(t.minZoom,Math.min(t.maxZoom,t.object.zoom/l)),t.object.updateProjectionMatrix(),uA=!0;const jA=new Q(E.x,E.y,0);jA.unproject(t.object),t.object.position.sub(jA).add(WA),t.object.updateMatrixWorld(),DA=F.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),t.zoomToCursor=!1;DA!==null&&(this.screenSpacePanning?t.target.set(0,0,-1).transformDirection(t.object.matrix).multiplyScalar(DA).add(t.object.position):(as.origin.copy(t.object.position),as.direction.set(0,0,-1).transformDirection(t.object.matrix),Math.abs(t.object.up.dot(as.direction))<ME?A.lookAt(t.target):(mu.setFromNormalAndCoplanarPoint(t.object.up,t.target),as.intersectPlane(mu,t.target))))}else t.object.isOrthographicCamera&&(t.object.zoom=Math.max(t.minZoom,Math.min(t.maxZoom,t.object.zoom/l)),t.object.updateProjectionMatrix(),uA=!0);return l=1,y=!1,uA||aA.distanceToSquared(t.object.position)>s||8*(1-hA.dot(t.object.quaternion))>s||SA.distanceToSquared(t.target)>0?(t.dispatchEvent(pu),aA.copy(t.object.position),hA.copy(t.object.quaternion),SA.copy(t.target),uA=!1,!0):!1}}(),this.dispose=function(){t.domElement.removeEventListener("contextmenu",AA),t.domElement.removeEventListener("pointerdown",HA),t.domElement.removeEventListener("pointercancel",KA),t.domElement.removeEventListener("wheel",M),t.domElement.removeEventListener("pointermove",FA),t.domElement.removeEventListener("pointerup",KA),t._domElementKeyEvents!==null&&(t._domElementKeyEvents.removeEventListener("keydown",w),t._domElementKeyEvents=null)};const t=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const s=1e-6,a=new fc,o=new fc;let l=1;const c=new Q,u=new RA,h=new RA,p=new RA,g=new RA,m=new RA,d=new RA,f=new RA,C=new RA,v=new RA,_=new Q,E=new RA;let y=!1;const U=[],L={};function B(){return 2*Math.PI/60/60*t.autoRotateSpeed}function S(){return Math.pow(.95,t.zoomSpeed)}function Y(F){o.theta-=F}function q(F){o.phi-=F}const T=function(){const F=new Q;return function(fA,aA){F.setFromMatrixColumn(aA,0),F.multiplyScalar(-fA),c.add(F)}}(),O=function(){const F=new Q;return function(fA,aA){t.screenSpacePanning===!0?F.setFromMatrixColumn(aA,1):(F.setFromMatrixColumn(aA,0),F.crossVectors(t.object.up,F)),F.multiplyScalar(fA),c.add(F)}}(),V=function(){const F=new Q;return function(fA,aA){const hA=t.domElement;if(t.object.isPerspectiveCamera){const SA=t.object.position;F.copy(SA).sub(t.target);let VA=F.length();VA*=Math.tan(t.object.fov/2*Math.PI/180),T(2*fA*VA/hA.clientHeight,t.object.matrix),O(2*aA*VA/hA.clientHeight,t.object.matrix)}else t.object.isOrthographicCamera?(T(fA*(t.object.right-t.object.left)/t.object.zoom/hA.clientWidth,t.object.matrix),O(aA*(t.object.top-t.object.bottom)/t.object.zoom/hA.clientHeight,t.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),t.enablePan=!1)}}();function Z(F){t.object.isPerspectiveCamera||t.object.isOrthographicCamera?l/=F:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),t.enableZoom=!1)}function k(F){t.object.isPerspectiveCamera||t.object.isOrthographicCamera?l*=F:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),t.enableZoom=!1)}function X(F){if(!t.zoomToCursor)return;y=!0;const j=t.domElement.getBoundingClientRect(),fA=F.clientX-j.left,aA=F.clientY-j.top,hA=j.width,SA=j.height;E.x=fA/hA*2-1,E.y=-(aA/SA)*2+1,_.set(E.x,E.y,1).unproject(A).sub(A.position).normalize()}function $(F){return Math.max(t.minDistance,Math.min(t.maxDistance,F))}function J(F){u.set(F.clientX,F.clientY)}function D(F){X(F),f.set(F.clientX,F.clientY)}function K(F){g.set(F.clientX,F.clientY)}function rA(F){h.set(F.clientX,F.clientY),p.subVectors(h,u).multiplyScalar(t.rotateSpeed);const j=t.domElement;Y(2*Math.PI*p.x/j.clientHeight),q(2*Math.PI*p.y/j.clientHeight),u.copy(h),t.update()}function sA(F){C.set(F.clientX,F.clientY),v.subVectors(C,f),v.y>0?Z(S()):v.y<0&&k(S()),f.copy(C),t.update()}function oA(F){m.set(F.clientX,F.clientY),d.subVectors(m,g).multiplyScalar(t.panSpeed),V(d.x,d.y),g.copy(m),t.update()}function mA(F){X(F),F.deltaY<0?k(S()):F.deltaY>0&&Z(S()),t.update()}function wA(F){let j=!1;switch(F.code){case t.keys.UP:F.ctrlKey||F.metaKey||F.shiftKey?q(2*Math.PI*t.rotateSpeed/t.domElement.clientHeight):V(0,t.keyPanSpeed),j=!0;break;case t.keys.BOTTOM:F.ctrlKey||F.metaKey||F.shiftKey?q(-2*Math.PI*t.rotateSpeed/t.domElement.clientHeight):V(0,-t.keyPanSpeed),j=!0;break;case t.keys.LEFT:F.ctrlKey||F.metaKey||F.shiftKey?Y(2*Math.PI*t.rotateSpeed/t.domElement.clientHeight):V(t.keyPanSpeed,0),j=!0;break;case t.keys.RIGHT:F.ctrlKey||F.metaKey||F.shiftKey?Y(-2*Math.PI*t.rotateSpeed/t.domElement.clientHeight):V(-t.keyPanSpeed,0),j=!0;break}j&&(F.preventDefault(),t.update())}function vA(){if(U.length===1)u.set(U[0].pageX,U[0].pageY);else{const F=.5*(U[0].pageX+U[1].pageX),j=.5*(U[0].pageY+U[1].pageY);u.set(F,j)}}function kA(){if(U.length===1)g.set(U[0].pageX,U[0].pageY);else{const F=.5*(U[0].pageX+U[1].pageX),j=.5*(U[0].pageY+U[1].pageY);g.set(F,j)}}function ve(){const F=U[0].pageX-U[1].pageX,j=U[0].pageY-U[1].pageY,fA=Math.sqrt(F*F+j*j);f.set(0,fA)}function TA(){t.enableZoom&&ve(),t.enablePan&&kA()}function H(){t.enableZoom&&ve(),t.enableRotate&&vA()}function le(F){if(U.length==1)h.set(F.pageX,F.pageY);else{const fA=G(F),aA=.5*(F.pageX+fA.x),hA=.5*(F.pageY+fA.y);h.set(aA,hA)}p.subVectors(h,u).multiplyScalar(t.rotateSpeed);const j=t.domElement;Y(2*Math.PI*p.x/j.clientHeight),q(2*Math.PI*p.y/j.clientHeight),u.copy(h)}function _A(F){if(U.length===1)m.set(F.pageX,F.pageY);else{const j=G(F),fA=.5*(F.pageX+j.x),aA=.5*(F.pageY+j.y);m.set(fA,aA)}d.subVectors(m,g).multiplyScalar(t.panSpeed),V(d.x,d.y),g.copy(m)}function MA(F){const j=G(F),fA=F.pageX-j.x,aA=F.pageY-j.y,hA=Math.sqrt(fA*fA+aA*aA);C.set(0,hA),v.set(0,Math.pow(C.y/f.y,t.zoomSpeed)),Z(v.y),f.copy(C)}function xA(F){t.enableZoom&&MA(F),t.enablePan&&_A(F)}function qA(F){t.enableZoom&&MA(F),t.enableRotate&&le(F)}function HA(F){t.enabled!==!1&&(U.length===0&&(t.domElement.setPointerCapture(F.pointerId),t.domElement.addEventListener("pointermove",FA),t.domElement.addEventListener("pointerup",KA)),nA(F),F.pointerType==="touch"?N(F):ce(F))}function FA(F){t.enabled!==!1&&(F.pointerType==="touch"?tA(F):de(F))}function KA(F){BA(F),U.length===0&&(t.domElement.releasePointerCapture(F.pointerId),t.domElement.removeEventListener("pointermove",FA),t.domElement.removeEventListener("pointerup",KA)),t.dispatchEvent(gu),r=i.NONE}function ce(F){let j;switch(F.button){case 0:j=t.mouseButtons.LEFT;break;case 1:j=t.mouseButtons.MIDDLE;break;case 2:j=t.mouseButtons.RIGHT;break;default:j=-1}switch(j){case Fn.DOLLY:if(t.enableZoom===!1)return;D(F),r=i.DOLLY;break;case Fn.ROTATE:if(F.ctrlKey||F.metaKey||F.shiftKey){if(t.enablePan===!1)return;K(F),r=i.PAN}else{if(t.enableRotate===!1)return;J(F),r=i.ROTATE}break;case Fn.PAN:if(F.ctrlKey||F.metaKey||F.shiftKey){if(t.enableRotate===!1)return;J(F),r=i.ROTATE}else{if(t.enablePan===!1)return;K(F),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&t.dispatchEvent(za)}function de(F){switch(r){case i.ROTATE:if(t.enableRotate===!1)return;rA(F);break;case i.DOLLY:if(t.enableZoom===!1)return;sA(F);break;case i.PAN:if(t.enablePan===!1)return;oA(F);break}}function M(F){t.enabled===!1||t.enableZoom===!1||r!==i.NONE||(F.preventDefault(),t.dispatchEvent(za),mA(F),t.dispatchEvent(gu))}function w(F){t.enabled===!1||t.enablePan===!1||wA(F)}function N(F){switch(iA(F),U.length){case 1:switch(t.touches.ONE){case bn.ROTATE:if(t.enableRotate===!1)return;vA(),r=i.TOUCH_ROTATE;break;case bn.PAN:if(t.enablePan===!1)return;kA(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(t.touches.TWO){case bn.DOLLY_PAN:if(t.enableZoom===!1&&t.enablePan===!1)return;TA(),r=i.TOUCH_DOLLY_PAN;break;case bn.DOLLY_ROTATE:if(t.enableZoom===!1&&t.enableRotate===!1)return;H(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&t.dispatchEvent(za)}function tA(F){switch(iA(F),r){case i.TOUCH_ROTATE:if(t.enableRotate===!1)return;le(F),t.update();break;case i.TOUCH_PAN:if(t.enablePan===!1)return;_A(F),t.update();break;case i.TOUCH_DOLLY_PAN:if(t.enableZoom===!1&&t.enablePan===!1)return;xA(F),t.update();break;case i.TOUCH_DOLLY_ROTATE:if(t.enableZoom===!1&&t.enableRotate===!1)return;qA(F),t.update();break;default:r=i.NONE}}function AA(F){t.enabled!==!1&&F.preventDefault()}function nA(F){U.push(F)}function BA(F){delete L[F.pointerId];for(let j=0;j<U.length;j++)if(U[j].pointerId==F.pointerId){U.splice(j,1);return}}function iA(F){let j=L[F.pointerId];j===void 0&&(j=new RA,L[F.pointerId]=j),j.set(F.pageX,F.pageY)}function G(F){const j=F.pointerId===U[0].pointerId?U[1]:U[0];return L[j.pointerId]}t.domElement.addEventListener("contextmenu",AA),t.domElement.addEventListener("pointerdown",HA),t.domElement.addEventListener("pointercancel",KA),t.domElement.addEventListener("wheel",M,{passive:!1}),this.update()}}class bE{constructor(A,e=0,t=!0){if(A){const{title:i,header:r,rows:s}=this.extract(A);this._title=i,this._header=r,this._rows=s}}extract(A){const e=A.toString().split(/\r?\n/),t=e[0],i=e[1].split(","),r=e[e.length-1]===""?e.length-1:e.length;return{title:t,header:i,rows:e.slice(1,r)}}get columnCount(){return this.header?this.header.length:this.rows[0].length}get rowCount(){return this.rows.length}getNumber(A,e){const t=this.rows[A];return parseFloat(t.split(",")[e])}get title(){return this._title}get header(){return this._header}get rows(){return this._rows}}class Vo extends nn{constructor(A,e=30,t=1,i=8,r=!1){super(),this.type="HelixGeometry",this.parameters={path:A,tubularSegments:e,radius:t,radialSegments:i,closed:r};const s=A.computeFrenetFrames(e,r);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;const a=new Q,o=new Q,l=new RA;let c=new Q;const u=[],h=[],p=[],g=[],m=[];d(),this.setIndex(g),this.setAttribute("position",new ot(u,3)),this.setAttribute("normal",new ot(h,3)),this.setAttribute("uv",new ot(p,2)),this.setAttribute("vColors",new ot(m,3));function d(){for(let _=0;_<e;_++)f(_);f(r===!1?e:0),v(),C()}function f(_){const E=A.getUtoTmapping(_/e);c=A.getPoint(E,c);const y=A.getColor(E),U=s.normals[_],L=s.binormals[_];for(let B=0;B<=i;B++){const S=B/i*Math.PI*2,Y=Math.sin(S),q=-Math.cos(S);o.x=q*U.x+Y*L.x,o.y=q*U.y+Y*L.y,o.z=q*U.z+Y*L.z,o.normalize(),h.push(o.x,o.y,o.z),a.x=c.x+t*o.x,a.y=c.y+t*o.y,a.z=c.z+t*o.z,u.push(a.x,a.y,a.z),m.push(y.r,y.g,y.b)}}function C(){for(let _=1;_<=e;_++)for(let E=1;E<=i;E++){const y=(i+1)*(_-1)+(E-1),U=(i+1)*_+(E-1),L=(i+1)*_+E,B=(i+1)*(_-1)+E;g.push(y,U,B),g.push(U,L,B)}}function v(){for(let _=0;_<=e;_++)for(let E=0;E<=i;E++)l.x=_/e,l.y=E/i,p.push(l.x,l.y)}}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}toJSON(){const A=super.toJSON();return A.path=this.parameters.path.toJSON(),A}static fromJSON(A){return new Vo(new Curves[A.path.type]().fromJSON(A.path),A.tubularSegments,A.radius,A.radialSegments,A.closed)}}const Uo=12,tf=[],nf=[];var or,lr,cr,ui,ur,Ft;class TE{constructor(A,e=-1,t=1.5,i=.4,r=1,s=2.5){Ue(this,or,void 0);Ue(this,lr,void 0);Ue(this,cr,void 0);Ue(this,ui,void 0);Ue(this,ur,void 0);Ue(this,Ft,void 0);this.settings=A,this.csv=new bE(A.showcaseCSV),this.helixConfiguration={minT:e,maxT:t,minR:i,maxR:r,height:s},_e(this,cr,A.cold),_e(this,ui,A.zero),_e(this,ur,A.warm),this.curve=[]}createMesh(A={wireframe:!1,vertexColors:!0}){this.createCurve();const e=this.createGeometry();A.wireframe&&(A.color=wi.styledColor("--wireframe-color"));const[t,i,r]=bA(this,or).toArray();e.translate(-t,-i,-r);const s=new bo(A);return _e(this,lr,new Qt(e,s)),bA(this,lr)}createCurve(){if(this.curve.length===0){this.years=this.csv.rowCount;for(let A=0;A<this.years;A++)for(let e=0;e<12;e++){const t=this.helixPoint(A,e);t&&this.curve.push(t)}_e(this,or,this.centerOfGravity())}}centerOfGravity(){if(!this.curve||this.curve.length===0)return new Q(0,0,0);let A=0,e=0,t=0;const i=this.curve.length;return this.curve.forEach((r,s)=>{A+=r.radius*r.cosX,e+=r.radius*r.sinX,t+=s/i*this.height}),new Q(A/i,e/i,t/i)}createGeometry(){const A=this.settings.radiusFactor*this.helixConfiguration.height/this.years,e=new Vo(new QE(this),this.settings.tubularSegments*(this.curve.length-1),A,this.settings.radialSegments,!1),t=e.getAttribute("vColors"),i=new lt(new Float32Array(t.array),3);return e.setAttribute("color",i),e}helixPoint(A,e){const t=this.csv.getNumber(A,e+1);if(t){const i=rf(this.helixConfiguration.minT,this.helixConfiguration.maxT,this.helixConfiguration.minR,this.helixConfiguration.maxR,t),r=new YA;return t<0?r.lerpColors(bA(this,ui),bA(this,cr),Math.abs(t)):r.lerpColors(bA(this,ui),bA(this,ur),t),{sinX:tf[e],cosX:nf[e],radius:i,temperature:t,color:r}}}get height(){return this.helixConfiguration.height}get length(){return this.curve.length/Uo}curveIndex(A){return Math.floor((this.curve.length-1)*A)}info(A){return this.curve[this.curveIndex(A)]}createTitleDiv(A){const e="heading-div",t=A.querySelector(`.${e}`);return t&&A.removeChild(t),bA(this,Ft)||(_e(this,Ft,document.createElement("DIV")),bA(this,Ft).setAttribute("class",e),A.appendChild(bA(this,Ft))),bA(this,Ft).innerText=this.csv.title,bA(this,Ft)}}or=new WeakMap,lr=new WeakMap,cr=new WeakMap,ui=new WeakMap,ur=new WeakMap,Ft=new WeakMap;class QE extends HB{constructor(A){super(),this.helix=A}getPoint(A,e=new Q){const t=2*Math.PI*this.helix.length*A,i=this.helix.curveIndex(A),r=this.helix.curve[i],s=this.helix.curve[i+1]||r,a=i/(this.helix.curve.length-1),o=(i+1)/(this.helix.curve.length-1),l=rf(a,o,r.radius,s.radius,A),c=l*Math.cos(t),u=l*Math.sin(t),h=this.helix.height*A;return e.set(c,u,h)}getColor(A){const e=this.helix.curveIndex(A),t=this.helix.curve[e],i=this.helix.curve[e+1]||t,r=e/(this.helix.curve.length-1),s=(e+1)/(this.helix.curve.length-1);return new YA().lerpColors(t.color,i.color,(A-r)/(s-r))}}for(let n=0;n<Uo;n++){const A=2*Math.PI*n/Uo;tf.push(Math.sin(A)),nf.push(Math.cos(A))}function rf(n,A,e,t,i){return A-n===0?(e+t)/2:(i-n)*(t-e)/(A-n)+e}HTMLCanvasElement.prototype.getContext=function(n){return function(A,e){return e=e||{},e.preserveDrawingBuffer=!0,n.call(this,A,e)}}(HTMLCanvasElement.prototype.getContext);var hi,fi,Bn,Ms,sf;class IE{constructor(A,e={All:void 0,Helix:void 0}){Ue(this,Ms);Ue(this,hi,void 0);Ue(this,fi,void 0);Ue(this,Bn,void 0);_e(this,hi,()=>document.body),Zo(this,Ms,sf).call(this,A,e),document.addEventListener("keydown",t=>{t.altKey&&t.key==="s"&&(t.stopPropagation(),t.preventDefault(),this.capture())})}capture(A=bA(this,hi)){console.log(`screenCapture ${A}`);const e=A();if(!e)throw new Error("No element to capture");setTimeout(()=>{const i=window.getComputedStyle(document.body).getPropertyValue("background-color");Af(e,{backgroundColor:i}).then(r=>{const s=document.createElement("a");s.href=r.toDataURL(),s.download="climate-helix.png",s.click()})},100)}}hi=new WeakMap,fi=new WeakMap,Bn=new WeakMap,Ms=new WeakSet,sf=function(A,e){const t={};_e(this,fi,e);for(const[s,a]of Object.entries(e))t[s]=void 0;const i=A.folder,r=A.property;r.selection="All",_e(this,Bn,"All"),_e(this,hi,()=>(console.log(bA(this,Bn)),console.log(bA(this,fi)),bA(this,fi)[bA(this,Bn)])),r.on_capture_clicked=()=>this.capture(),wi.addRadioButtons(i,r.selection,t,(s,a,o)=>{console.log(`${s}, ${a}, ${o}`),_e(this,Bn,o)}),i.add(r,"on_capture_clicked").name("Click or press 'alt s'")};const LE=`<?xml version="1.0" ?>
<svg xmlns="http://www.w3.org/2000/svg" id="info-icon" height="48" viewBox="0 0 48 48" width="48" >
    <path d="M0 0h48v48h-48z" fill="none"/>
    <path d="M22 34h4v-12h-4v12zm2-30c-11.05 0-20 8.95-20 20s8.95 20 20 20 20-8.95 20-20-8.95-20-20-20zm0 36c-8.82 0-16-7.18-16-16s7.18-16 16-16 16 7.18 16 16-7.18 16-16 16zm-2-22h4v-4h-4v4z"/>
</svg>`,RE=`<p>The 3D helix visualizes <u>differences to a temperature mean</u> calculated for a specific month within the region of
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
</ol>`,Ko=document.createElement("DIV");Ko.setAttribute("class","container-div");document.body.appendChild(Ko);const ji=new wi;let si,gn,$i,kt,os,ls,Vi;function HE(){$i=new RB,kt=new Zu({antialias:!0}),kt.setPixelRatio(window.devicePixelRatio);const n=window.innerWidth,A=window.innerHeight;kt.setSize(n,A),Ko.appendChild(kt.domElement),DE();const e=n/A;gn=new Ze(50,e),gn.position.set(0,0,5.5),$i.add(gn),si=new Ii,$i.add(si),new FE(gn,kt.domElement).update(),window.addEventListener("resize",NE),window.addEventListener(Re.CREATE_HELIX,af),document.body.addEventListener(Re.CHANGE_THEME.toString(),Bu);const i={All:document.body,Helix:kt.domElement};new IE(ji.captureSettings(),i),Vi=PE(),OE(),Bu(),of()}function DE(){return new Go(document.body,n=>{const e=window.getComputedStyle(document.body).getPropertyValue("background-color");$i.background=new YA(e)})}function af(){os&&si.remove(os),ls&&si.remove(ls);const n=new TE(ji);ji.showFaces&&(os=n.createMesh(),si.add(os)),ji.showWireframe&&(ls=n.createMesh({wireframe:!0,vertexColors:!1}),si.add(ls));const A=document.querySelector(".container-div");n.createTitleDiv(A)}function PE(){const n=document.createElement("DIV");n.innerHTML=LE,Vi=n.querySelector("#info-icon"),Vi.classList.add("show"),Vi.addEventListener("click",()=>{const e=document.querySelector("#info-div");e==null||e.classList.toggle("show");const t=document.querySelector("canvas");t==null||t.classList.toggle("transparent")});const A=document.querySelector(".container-div");A==null||A.appendChild(Vi)}function OE(){const n=document.createElement("DIV");n.setAttribute("id","info-div"),n.innerHTML=RE;const A=document.querySelector("#info-icon");A==null||A.insertAdjacentElement("beforebegin",n);const e=document.createElement("SPAN");e.setAttribute("id","version-info"),e.innerHTML="v0.2.4",A==null||A.insertAdjacentElement("beforebegin",e)}function of(){requestAnimationFrame(of),kt.render($i,gn)}function Bu(){ji.onThemeChange(document.body),af()}function NE(){gn.aspect=window.innerWidth/window.innerHeight,gn.updateProjectionMatrix(),kt.setSize(window.innerWidth,window.innerHeight)}HE();
