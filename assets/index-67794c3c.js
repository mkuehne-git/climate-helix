var ua=(n,A,e)=>{if(!A.has(n))throw TypeError("Cannot "+e)};var mA=(n,A,e)=>(ua(n,A,"read from private field"),e?e.call(n):A.get(n)),re=(n,A,e)=>{if(A.has(n))throw TypeError("Cannot add the same private member more than once");A instanceof WeakSet?A.add(n):A.set(n,e)},$A=(n,A,e,t)=>(ua(n,A,"write to private field"),t?t.call(n,e):A.set(n,e),e);var _l=(n,A,e)=>(ua(n,A,"access private method"),e);(function(){const A=document.createElement("link").relList;if(A&&A.supports&&A.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zo="158",Rn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Hn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Vf=0,Cl=1,Kf=2,Ju=1,kf=2,bt=3,an=0,Ve=1,Qt=2,en=0,hi=1,El=2,xl=3,Ul=4,zf=5,Bn=100,Wf=101,Xf=102,yl=103,Sl=104,Yf=200,Jf=201,Zf=202,qf=203,go=204,mo=205,$f=206,jf=207,Ad=208,ed=209,td=210,nd=211,id=212,rd=213,sd=214,ad=0,od=1,ld=2,ys=3,cd=4,ud=5,hd=6,fd=7,Zu=0,dd=1,pd=2,tn=0,gd=1,md=2,Bd=3,wd=4,vd=5,qu=300,Ei=301,xi=302,Bo=303,wo=304,zs=306,vo=1e3,ct=1001,_o=1002,Oe=1003,Fl=1004,ha=1005,je=1006,_d=1007,ar=1008,nn=1009,Cd=1010,Ed=1011,qo=1012,$u=1013,Zt=1014,qt=1015,or=1016,ju=1017,Ah=1018,yn=1020,xd=1021,ut=1023,Ud=1024,yd=1025,Sn=1026,Ui=1027,Sd=1028,eh=1029,Fd=1030,th=1031,nh=1033,fa=33776,da=33777,pa=33778,ga=33779,Ml=35840,bl=35841,Tl=35842,Ql=35843,Md=36196,Il=37492,Ll=37496,Rl=37808,Hl=37809,Dl=37810,Pl=37811,Nl=37812,Ol=37813,Gl=37814,Vl=37815,Kl=37816,kl=37817,zl=37818,Wl=37819,Xl=37820,Yl=37821,ma=36492,Jl=36494,Zl=36495,bd=36283,ql=36284,$l=36285,jl=36286,ih=3e3,Fn=3001,Td=3200,Qd=3201,Id=0,Ld=1,tt="",ye="srgb",Ht="srgb-linear",$o="display-p3",Ws="display-p3-linear",Ss="linear",ne="srgb",Fs="rec709",Ms="p3",Dn=7680,Ac=519,Rd=512,Hd=513,Dd=514,Pd=515,Nd=516,Od=517,Gd=518,Vd=519,ec=35044,tc="300 es",Co=1035,It=2e3,bs=2001;class Ln{addEventListener(A,e){this._listeners===void 0&&(this._listeners={});const t=this._listeners;t[A]===void 0&&(t[A]=[]),t[A].indexOf(e)===-1&&t[A].push(e)}hasEventListener(A,e){if(this._listeners===void 0)return!1;const t=this._listeners;return t[A]!==void 0&&t[A].indexOf(e)!==-1}removeEventListener(A,e){if(this._listeners===void 0)return;const i=this._listeners[A];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(A){if(this._listeners===void 0)return;const t=this._listeners[A.type];if(t!==void 0){A.target=this;const i=t.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,A);A.target=null}}}const be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let nc=1234567;const Zi=Math.PI/180,lr=180/Math.PI;function Fi(){const n=Math.random()*4294967295|0,A=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0;return(be[n&255]+be[n>>8&255]+be[n>>16&255]+be[n>>24&255]+"-"+be[A&255]+be[A>>8&255]+"-"+be[A>>16&15|64]+be[A>>24&255]+"-"+be[e&63|128]+be[e>>8&255]+"-"+be[e>>16&255]+be[e>>24&255]+be[t&255]+be[t>>8&255]+be[t>>16&255]+be[t>>24&255]).toLowerCase()}function Ee(n,A,e){return Math.max(A,Math.min(e,n))}function jo(n,A){return(n%A+A)%A}function Kd(n,A,e,t,i){return t+(n-A)*(i-t)/(e-A)}function kd(n,A,e){return n!==A?(e-n)/(A-n):0}function qi(n,A,e){return(1-e)*n+e*A}function zd(n,A,e,t){return qi(n,A,1-Math.exp(-e*t))}function Wd(n,A=1){return A-Math.abs(jo(n,A*2)-A)}function Xd(n,A,e){return n<=A?0:n>=e?1:(n=(n-A)/(e-A),n*n*(3-2*n))}function Yd(n,A,e){return n<=A?0:n>=e?1:(n=(n-A)/(e-A),n*n*n*(n*(n*6-15)+10))}function Jd(n,A){return n+Math.floor(Math.random()*(A-n+1))}function Zd(n,A){return n+Math.random()*(A-n)}function qd(n){return n*(.5-Math.random())}function $d(n){n!==void 0&&(nc=n);let A=nc+=1831565813;return A=Math.imul(A^A>>>15,A|1),A^=A+Math.imul(A^A>>>7,A|61),((A^A>>>14)>>>0)/4294967296}function jd(n){return n*Zi}function Ap(n){return n*lr}function Eo(n){return(n&n-1)===0&&n!==0}function ep(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ts(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function tp(n,A,e,t,i){const r=Math.cos,s=Math.sin,a=r(e/2),o=s(e/2),l=r((A+t)/2),c=s((A+t)/2),u=r((A-t)/2),h=s((A-t)/2),p=r((t-A)/2),g=s((t-A)/2);switch(i){case"XYX":n.set(a*c,o*u,o*h,a*l);break;case"YZY":n.set(o*h,a*c,o*u,a*l);break;case"ZXZ":n.set(o*u,o*h,a*c,a*l);break;case"XZX":n.set(a*c,o*g,o*p,a*l);break;case"YXY":n.set(o*p,a*c,o*g,a*l);break;case"ZYZ":n.set(o*g,o*p,a*c,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function si(n,A){switch(A.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function He(n,A){switch(A.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const np={DEG2RAD:Zi,RAD2DEG:lr,generateUUID:Fi,clamp:Ee,euclideanModulo:jo,mapLinear:Kd,inverseLerp:kd,lerp:qi,damp:zd,pingpong:Wd,smoothstep:Xd,smootherstep:Yd,randInt:Jd,randFloat:Zd,randFloatSpread:qd,seededRandom:$d,degToRad:jd,radToDeg:Ap,isPowerOfTwo:Eo,ceilPowerOfTwo:ep,floorPowerOfTwo:Ts,setQuaternionFromProperEuler:tp,normalize:He,denormalize:si};class NA{constructor(A=0,e=0){NA.prototype.isVector2=!0,this.x=A,this.y=e}get width(){return this.x}set width(A){this.x=A}get height(){return this.y}set height(A){this.y=A}set(A,e){return this.x=A,this.y=e,this}setScalar(A){return this.x=A,this.y=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setComponent(A,e){switch(A){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y)}copy(A){return this.x=A.x,this.y=A.y,this}add(A){return this.x+=A.x,this.y+=A.y,this}addScalar(A){return this.x+=A,this.y+=A,this}addVectors(A,e){return this.x=A.x+e.x,this.y=A.y+e.y,this}addScaledVector(A,e){return this.x+=A.x*e,this.y+=A.y*e,this}sub(A){return this.x-=A.x,this.y-=A.y,this}subScalar(A){return this.x-=A,this.y-=A,this}subVectors(A,e){return this.x=A.x-e.x,this.y=A.y-e.y,this}multiply(A){return this.x*=A.x,this.y*=A.y,this}multiplyScalar(A){return this.x*=A,this.y*=A,this}divide(A){return this.x/=A.x,this.y/=A.y,this}divideScalar(A){return this.multiplyScalar(1/A)}applyMatrix3(A){const e=this.x,t=this.y,i=A.elements;return this.x=i[0]*e+i[3]*t+i[6],this.y=i[1]*e+i[4]*t+i[7],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this}clamp(A,e){return this.x=Math.max(A.x,Math.min(e.x,this.x)),this.y=Math.max(A.y,Math.min(e.y,this.y)),this}clampScalar(A,e){return this.x=Math.max(A,Math.min(e,this.x)),this.y=Math.max(A,Math.min(e,this.y)),this}clampLength(A,e){const t=this.length();return this.divideScalar(t||1).multiplyScalar(Math.max(A,Math.min(e,t)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(A){return this.x*A.x+this.y*A.y}cross(A){return this.x*A.y-this.y*A.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(A){const e=Math.sqrt(this.lengthSq()*A.lengthSq());if(e===0)return Math.PI/2;const t=this.dot(A)/e;return Math.acos(Ee(t,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const e=this.x-A.x,t=this.y-A.y;return e*e+t*t}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,e){return this.x+=(A.x-this.x)*e,this.y+=(A.y-this.y)*e,this}lerpVectors(A,e,t){return this.x=A.x+(e.x-A.x)*t,this.y=A.y+(e.y-A.y)*t,this}equals(A){return A.x===this.x&&A.y===this.y}fromArray(A,e=0){return this.x=A[e],this.y=A[e+1],this}toArray(A=[],e=0){return A[e]=this.x,A[e+1]=this.y,A}fromBufferAttribute(A,e){return this.x=A.getX(e),this.y=A.getY(e),this}rotateAround(A,e){const t=Math.cos(e),i=Math.sin(e),r=this.x-A.x,s=this.y-A.y;return this.x=r*t-s*i+A.x,this.y=r*i+s*t+A.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class GA{constructor(A,e,t,i,r,s,a,o,l){GA.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],A!==void 0&&this.set(A,e,t,i,r,s,a,o,l)}set(A,e,t,i,r,s,a,o,l){const c=this.elements;return c[0]=A,c[1]=i,c[2]=a,c[3]=e,c[4]=r,c[5]=o,c[6]=t,c[7]=s,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(A){const e=this.elements,t=A.elements;return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],this}extractBasis(A,e,t){return A.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),t.setFromMatrix3Column(this,2),this}setFromMatrix4(A){const e=A.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,e){const t=A.elements,i=e.elements,r=this.elements,s=t[0],a=t[3],o=t[6],l=t[1],c=t[4],u=t[7],h=t[2],p=t[5],g=t[8],m=i[0],d=i[3],f=i[6],E=i[1],v=i[4],C=i[7],x=i[2],y=i[5],U=i[8];return r[0]=s*m+a*E+o*x,r[3]=s*d+a*v+o*y,r[6]=s*f+a*C+o*U,r[1]=l*m+c*E+u*x,r[4]=l*d+c*v+u*y,r[7]=l*f+c*C+u*U,r[2]=h*m+p*E+g*x,r[5]=h*d+p*v+g*y,r[8]=h*f+p*C+g*U,this}multiplyScalar(A){const e=this.elements;return e[0]*=A,e[3]*=A,e[6]*=A,e[1]*=A,e[4]*=A,e[7]*=A,e[2]*=A,e[5]*=A,e[8]*=A,this}determinant(){const A=this.elements,e=A[0],t=A[1],i=A[2],r=A[3],s=A[4],a=A[5],o=A[6],l=A[7],c=A[8];return e*s*c-e*a*l-t*r*c+t*a*o+i*r*l-i*s*o}invert(){const A=this.elements,e=A[0],t=A[1],i=A[2],r=A[3],s=A[4],a=A[5],o=A[6],l=A[7],c=A[8],u=c*s-a*l,h=a*o-c*r,p=l*r-s*o,g=e*u+t*h+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return A[0]=u*m,A[1]=(i*l-c*t)*m,A[2]=(a*t-i*s)*m,A[3]=h*m,A[4]=(c*e-i*o)*m,A[5]=(i*r-a*e)*m,A[6]=p*m,A[7]=(t*o-l*e)*m,A[8]=(s*e-t*r)*m,this}transpose(){let A;const e=this.elements;return A=e[1],e[1]=e[3],e[3]=A,A=e[2],e[2]=e[6],e[6]=A,A=e[5],e[5]=e[7],e[7]=A,this}getNormalMatrix(A){return this.setFromMatrix4(A).invert().transpose()}transposeIntoArray(A){const e=this.elements;return A[0]=e[0],A[1]=e[3],A[2]=e[6],A[3]=e[1],A[4]=e[4],A[5]=e[7],A[6]=e[2],A[7]=e[5],A[8]=e[8],this}setUvTransform(A,e,t,i,r,s,a){const o=Math.cos(r),l=Math.sin(r);return this.set(t*o,t*l,-t*(o*s+l*a)+s+A,-i*l,i*o,-i*(-l*s+o*a)+a+e,0,0,1),this}scale(A,e){return this.premultiply(Ba.makeScale(A,e)),this}rotate(A){return this.premultiply(Ba.makeRotation(-A)),this}translate(A,e){return this.premultiply(Ba.makeTranslation(A,e)),this}makeTranslation(A,e){return A.isVector2?this.set(1,0,A.x,0,1,A.y,0,0,1):this.set(1,0,A,0,1,e,0,0,1),this}makeRotation(A){const e=Math.cos(A),t=Math.sin(A);return this.set(e,-t,0,t,e,0,0,0,1),this}makeScale(A,e){return this.set(A,0,0,0,e,0,0,0,1),this}equals(A){const e=this.elements,t=A.elements;for(let i=0;i<9;i++)if(e[i]!==t[i])return!1;return!0}fromArray(A,e=0){for(let t=0;t<9;t++)this.elements[t]=A[t+e];return this}toArray(A=[],e=0){const t=this.elements;return A[e]=t[0],A[e+1]=t[1],A[e+2]=t[2],A[e+3]=t[3],A[e+4]=t[4],A[e+5]=t[5],A[e+6]=t[6],A[e+7]=t[7],A[e+8]=t[8],A}clone(){return new this.constructor().fromArray(this.elements)}}const Ba=new GA;function rh(n){for(let A=n.length-1;A>=0;--A)if(n[A]>=65535)return!0;return!1}function Qs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ip(){const n=Qs("canvas");return n.style.display="block",n}const ic={};function $i(n){n in ic||(ic[n]=!0,console.warn(n))}const rc=new GA().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),sc=new GA().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Sr={[Ht]:{transfer:Ss,primaries:Fs,toReference:n=>n,fromReference:n=>n},[ye]:{transfer:ne,primaries:Fs,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ws]:{transfer:Ss,primaries:Ms,toReference:n=>n.applyMatrix3(sc),fromReference:n=>n.applyMatrix3(rc)},[$o]:{transfer:ne,primaries:Ms,toReference:n=>n.convertSRGBToLinear().applyMatrix3(sc),fromReference:n=>n.applyMatrix3(rc).convertLinearToSRGB()}},rp=new Set([Ht,Ws]),ZA={enabled:!0,_workingColorSpace:Ht,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!rp.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,A,e){if(this.enabled===!1||A===e||!A||!e)return n;const t=Sr[A].toReference,i=Sr[e].fromReference;return i(t(n))},fromWorkingColorSpace:function(n,A){return this.convert(n,this._workingColorSpace,A)},toWorkingColorSpace:function(n,A){return this.convert(n,A,this._workingColorSpace)},getPrimaries:function(n){return Sr[n].primaries},getTransfer:function(n){return n===tt?Ss:Sr[n].transfer}};function fi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function wa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Pn;class sh{static getDataURL(A){if(/^data:/i.test(A.src)||typeof HTMLCanvasElement>"u")return A.src;let e;if(A instanceof HTMLCanvasElement)e=A;else{Pn===void 0&&(Pn=Qs("canvas")),Pn.width=A.width,Pn.height=A.height;const t=Pn.getContext("2d");A instanceof ImageData?t.putImageData(A,0,0):t.drawImage(A,0,0,A.width,A.height),e=Pn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",A),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const e=Qs("canvas");e.width=A.width,e.height=A.height;const t=e.getContext("2d");t.drawImage(A,0,0,A.width,A.height);const i=t.getImageData(0,0,A.width,A.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=fi(r[s]/255)*255;return t.putImageData(i,0,0),e}else if(A.data){const e=A.data.slice(0);for(let t=0;t<e.length;t++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[t]=Math.floor(fi(e[t]/255)*255):e[t]=fi(e[t]);return{data:e,width:A.width,height:A.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),A}}let sp=0;class ah{constructor(A=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=Fi(),this.data=A,this.version=0}set needsUpdate(A){A===!0&&this.version++}toJSON(A){const e=A===void 0||typeof A=="string";if(!e&&A.images[this.uuid]!==void 0)return A.images[this.uuid];const t={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,a=i.length;s<a;s++)i[s].isDataTexture?r.push(va(i[s].image)):r.push(va(i[s]))}else r=va(i);t.url=r}return e||(A.images[this.uuid]=t),t}}function va(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?sh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ap=0;class Ye extends Ln{constructor(A=Ye.DEFAULT_IMAGE,e=Ye.DEFAULT_MAPPING,t=ct,i=ct,r=je,s=ar,a=ut,o=nn,l=Ye.DEFAULT_ANISOTROPY,c=tt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=Fi(),this.name="",this.source=new ah(A),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=t,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=o,this.offset=new NA(0,0),this.repeat=new NA(1,1),this.center=new NA(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new GA,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:($i("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===Fn?ye:tt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(A=null){this.source.data=A}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(A){return this.name=A.name,this.source=A.source,this.mipmaps=A.mipmaps.slice(0),this.mapping=A.mapping,this.channel=A.channel,this.wrapS=A.wrapS,this.wrapT=A.wrapT,this.magFilter=A.magFilter,this.minFilter=A.minFilter,this.anisotropy=A.anisotropy,this.format=A.format,this.internalFormat=A.internalFormat,this.type=A.type,this.offset.copy(A.offset),this.repeat.copy(A.repeat),this.center.copy(A.center),this.rotation=A.rotation,this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrix.copy(A.matrix),this.generateMipmaps=A.generateMipmaps,this.premultiplyAlpha=A.premultiplyAlpha,this.flipY=A.flipY,this.unpackAlignment=A.unpackAlignment,this.colorSpace=A.colorSpace,this.userData=JSON.parse(JSON.stringify(A.userData)),this.needsUpdate=!0,this}toJSON(A){const e=A===void 0||typeof A=="string";if(!e&&A.textures[this.uuid]!==void 0)return A.textures[this.uuid];const t={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(A).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(t.userData=this.userData),e||(A.textures[this.uuid]=t),t}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(A){if(this.mapping!==qu)return A;if(A.applyMatrix3(this.matrix),A.x<0||A.x>1)switch(this.wrapS){case vo:A.x=A.x-Math.floor(A.x);break;case ct:A.x=A.x<0?0:1;break;case _o:Math.abs(Math.floor(A.x)%2)===1?A.x=Math.ceil(A.x)-A.x:A.x=A.x-Math.floor(A.x);break}if(A.y<0||A.y>1)switch(this.wrapT){case vo:A.y=A.y-Math.floor(A.y);break;case ct:A.y=A.y<0?0:1;break;case _o:Math.abs(Math.floor(A.y)%2)===1?A.y=Math.ceil(A.y)-A.y:A.y=A.y-Math.floor(A.y);break}return this.flipY&&(A.y=1-A.y),A}set needsUpdate(A){A===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return $i("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ye?Fn:ih}set encoding(A){$i("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=A===Fn?ye:tt}}Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=qu;Ye.DEFAULT_ANISOTROPY=1;class Se{constructor(A=0,e=0,t=0,i=1){Se.prototype.isVector4=!0,this.x=A,this.y=e,this.z=t,this.w=i}get width(){return this.z}set width(A){this.z=A}get height(){return this.w}set height(A){this.w=A}set(A,e,t,i){return this.x=A,this.y=e,this.z=t,this.w=i,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this.w=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setW(A){return this.w=A,this}setComponent(A,e){switch(A){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w!==void 0?A.w:1,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this.w+=A.w,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this.w+=A,this}addVectors(A,e){return this.x=A.x+e.x,this.y=A.y+e.y,this.z=A.z+e.z,this.w=A.w+e.w,this}addScaledVector(A,e){return this.x+=A.x*e,this.y+=A.y*e,this.z+=A.z*e,this.w+=A.w*e,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this.w-=A.w,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this.w-=A,this}subVectors(A,e){return this.x=A.x-e.x,this.y=A.y-e.y,this.z=A.z-e.z,this.w=A.w-e.w,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this.w*=A.w,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this.w*=A,this}applyMatrix4(A){const e=this.x,t=this.y,i=this.z,r=this.w,s=A.elements;return this.x=s[0]*e+s[4]*t+s[8]*i+s[12]*r,this.y=s[1]*e+s[5]*t+s[9]*i+s[13]*r,this.z=s[2]*e+s[6]*t+s[10]*i+s[14]*r,this.w=s[3]*e+s[7]*t+s[11]*i+s[15]*r,this}divideScalar(A){return this.multiplyScalar(1/A)}setAxisAngleFromQuaternion(A){this.w=2*Math.acos(A.w);const e=Math.sqrt(1-A.w*A.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=A.x/e,this.y=A.y/e,this.z=A.z/e),this}setAxisAngleFromRotationMatrix(A){let e,t,i,r;const o=A.elements,l=o[0],c=o[4],u=o[8],h=o[1],p=o[5],g=o[9],m=o[2],d=o[6],f=o[10];if(Math.abs(c-h)<.01&&Math.abs(u-m)<.01&&Math.abs(g-d)<.01){if(Math.abs(c+h)<.1&&Math.abs(u+m)<.1&&Math.abs(g+d)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,C=(p+1)/2,x=(f+1)/2,y=(c+h)/4,U=(u+m)/4,R=(g+d)/4;return v>C&&v>x?v<.01?(t=0,i=.707106781,r=.707106781):(t=Math.sqrt(v),i=y/t,r=U/t):C>x?C<.01?(t=.707106781,i=0,r=.707106781):(i=Math.sqrt(C),t=y/i,r=R/i):x<.01?(t=.707106781,i=.707106781,r=0):(r=Math.sqrt(x),t=U/r,i=R/r),this.set(t,i,r,e),this}let E=Math.sqrt((d-g)*(d-g)+(u-m)*(u-m)+(h-c)*(h-c));return Math.abs(E)<.001&&(E=1),this.x=(d-g)/E,this.y=(u-m)/E,this.z=(h-c)/E,this.w=Math.acos((l+p+f-1)/2),this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this.w=Math.min(this.w,A.w),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this.w=Math.max(this.w,A.w),this}clamp(A,e){return this.x=Math.max(A.x,Math.min(e.x,this.x)),this.y=Math.max(A.y,Math.min(e.y,this.y)),this.z=Math.max(A.z,Math.min(e.z,this.z)),this.w=Math.max(A.w,Math.min(e.w,this.w)),this}clampScalar(A,e){return this.x=Math.max(A,Math.min(e,this.x)),this.y=Math.max(A,Math.min(e,this.y)),this.z=Math.max(A,Math.min(e,this.z)),this.w=Math.max(A,Math.min(e,this.w)),this}clampLength(A,e){const t=this.length();return this.divideScalar(t||1).multiplyScalar(Math.max(A,Math.min(e,t)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z+this.w*A.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,e){return this.x+=(A.x-this.x)*e,this.y+=(A.y-this.y)*e,this.z+=(A.z-this.z)*e,this.w+=(A.w-this.w)*e,this}lerpVectors(A,e,t){return this.x=A.x+(e.x-A.x)*t,this.y=A.y+(e.y-A.y)*t,this.z=A.z+(e.z-A.z)*t,this.w=A.w+(e.w-A.w)*t,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z&&A.w===this.w}fromArray(A,e=0){return this.x=A[e],this.y=A[e+1],this.z=A[e+2],this.w=A[e+3],this}toArray(A=[],e=0){return A[e]=this.x,A[e+1]=this.y,A[e+2]=this.z,A[e+3]=this.w,A}fromBufferAttribute(A,e){return this.x=A.getX(e),this.y=A.getY(e),this.z=A.getZ(e),this.w=A.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class op extends Ln{constructor(A=1,e=1,t={}){super(),this.isRenderTarget=!0,this.width=A,this.height=e,this.depth=1,this.scissor=new Se(0,0,A,e),this.scissorTest=!1,this.viewport=new Se(0,0,A,e);const i={width:A,height:e,depth:1};t.encoding!==void 0&&($i("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Fn?ye:tt),t=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:je,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},t),this.texture=new Ye(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=t.generateMipmaps,this.texture.internalFormat=t.internalFormat,this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.depthTexture=t.depthTexture,this.samples=t.samples}setSize(A,e,t=1){(this.width!==A||this.height!==e||this.depth!==t)&&(this.width=A,this.height=e,this.depth=t,this.texture.image.width=A,this.texture.image.height=e,this.texture.image.depth=t,this.dispose()),this.viewport.set(0,0,A,e),this.scissor.set(0,0,A,e)}clone(){return new this.constructor().copy(this)}copy(A){this.width=A.width,this.height=A.height,this.depth=A.depth,this.scissor.copy(A.scissor),this.scissorTest=A.scissorTest,this.viewport.copy(A.viewport),this.texture=A.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},A.texture.image);return this.texture.source=new ah(e),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.samples=A.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Tn extends op{constructor(A=1,e=1,t={}){super(A,e,t),this.isWebGLRenderTarget=!0}}class oh extends Ye{constructor(A=null,e=1,t=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:A,width:e,height:t,depth:i},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=ct,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lp extends Ye{constructor(A=null,e=1,t=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:A,width:e,height:t,depth:i},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=ct,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qn{constructor(A=0,e=0,t=0,i=1){this.isQuaternion=!0,this._x=A,this._y=e,this._z=t,this._w=i}static slerpFlat(A,e,t,i,r,s,a){let o=t[i+0],l=t[i+1],c=t[i+2],u=t[i+3];const h=r[s+0],p=r[s+1],g=r[s+2],m=r[s+3];if(a===0){A[e+0]=o,A[e+1]=l,A[e+2]=c,A[e+3]=u;return}if(a===1){A[e+0]=h,A[e+1]=p,A[e+2]=g,A[e+3]=m;return}if(u!==m||o!==h||l!==p||c!==g){let d=1-a;const f=o*h+l*p+c*g+u*m,E=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const x=Math.sqrt(v),y=Math.atan2(x,f*E);d=Math.sin(d*y)/x,a=Math.sin(a*y)/x}const C=a*E;if(o=o*d+h*C,l=l*d+p*C,c=c*d+g*C,u=u*d+m*C,d===1-a){const x=1/Math.sqrt(o*o+l*l+c*c+u*u);o*=x,l*=x,c*=x,u*=x}}A[e]=o,A[e+1]=l,A[e+2]=c,A[e+3]=u}static multiplyQuaternionsFlat(A,e,t,i,r,s){const a=t[i],o=t[i+1],l=t[i+2],c=t[i+3],u=r[s],h=r[s+1],p=r[s+2],g=r[s+3];return A[e]=a*g+c*u+o*p-l*h,A[e+1]=o*g+c*h+l*u-a*p,A[e+2]=l*g+c*p+a*h-o*u,A[e+3]=c*g-a*u-o*h-l*p,A}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get w(){return this._w}set w(A){this._w=A,this._onChangeCallback()}set(A,e,t,i){return this._x=A,this._y=e,this._z=t,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(A){return this._x=A.x,this._y=A.y,this._z=A.z,this._w=A.w,this._onChangeCallback(),this}setFromEuler(A,e){const t=A._x,i=A._y,r=A._z,s=A._order,a=Math.cos,o=Math.sin,l=a(t/2),c=a(i/2),u=a(r/2),h=o(t/2),p=o(i/2),g=o(r/2);switch(s){case"XYZ":this._x=h*c*u+l*p*g,this._y=l*p*u-h*c*g,this._z=l*c*g+h*p*u,this._w=l*c*u-h*p*g;break;case"YXZ":this._x=h*c*u+l*p*g,this._y=l*p*u-h*c*g,this._z=l*c*g-h*p*u,this._w=l*c*u+h*p*g;break;case"ZXY":this._x=h*c*u-l*p*g,this._y=l*p*u+h*c*g,this._z=l*c*g+h*p*u,this._w=l*c*u-h*p*g;break;case"ZYX":this._x=h*c*u-l*p*g,this._y=l*p*u+h*c*g,this._z=l*c*g-h*p*u,this._w=l*c*u+h*p*g;break;case"YZX":this._x=h*c*u+l*p*g,this._y=l*p*u+h*c*g,this._z=l*c*g-h*p*u,this._w=l*c*u-h*p*g;break;case"XZY":this._x=h*c*u-l*p*g,this._y=l*p*u-h*c*g,this._z=l*c*g+h*p*u,this._w=l*c*u+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(A,e){const t=e/2,i=Math.sin(t);return this._x=A.x*i,this._y=A.y*i,this._z=A.z*i,this._w=Math.cos(t),this._onChangeCallback(),this}setFromRotationMatrix(A){const e=A.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10],h=t+a+u;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-o)*p,this._y=(r-l)*p,this._z=(s-i)*p}else if(t>a&&t>u){const p=2*Math.sqrt(1+t-a-u);this._w=(c-o)/p,this._x=.25*p,this._y=(i+s)/p,this._z=(r+l)/p}else if(a>u){const p=2*Math.sqrt(1+a-t-u);this._w=(r-l)/p,this._x=(i+s)/p,this._y=.25*p,this._z=(o+c)/p}else{const p=2*Math.sqrt(1+u-t-a);this._w=(s-i)/p,this._x=(r+l)/p,this._y=(o+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(A,e){let t=A.dot(e)+1;return t<Number.EPSILON?(t=0,Math.abs(A.x)>Math.abs(A.z)?(this._x=-A.y,this._y=A.x,this._z=0,this._w=t):(this._x=0,this._y=-A.z,this._z=A.y,this._w=t)):(this._x=A.y*e.z-A.z*e.y,this._y=A.z*e.x-A.x*e.z,this._z=A.x*e.y-A.y*e.x,this._w=t),this.normalize()}angleTo(A){return 2*Math.acos(Math.abs(Ee(this.dot(A),-1,1)))}rotateTowards(A,e){const t=this.angleTo(A);if(t===0)return this;const i=Math.min(1,e/t);return this.slerp(A,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(A){return this._x*A._x+this._y*A._y+this._z*A._z+this._w*A._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let A=this.length();return A===0?(this._x=0,this._y=0,this._z=0,this._w=1):(A=1/A,this._x=this._x*A,this._y=this._y*A,this._z=this._z*A,this._w=this._w*A),this._onChangeCallback(),this}multiply(A){return this.multiplyQuaternions(this,A)}premultiply(A){return this.multiplyQuaternions(A,this)}multiplyQuaternions(A,e){const t=A._x,i=A._y,r=A._z,s=A._w,a=e._x,o=e._y,l=e._z,c=e._w;return this._x=t*c+s*a+i*l-r*o,this._y=i*c+s*o+r*a-t*l,this._z=r*c+s*l+t*o-i*a,this._w=s*c-t*a-i*o-r*l,this._onChangeCallback(),this}slerp(A,e){if(e===0)return this;if(e===1)return this.copy(A);const t=this._x,i=this._y,r=this._z,s=this._w;let a=s*A._w+t*A._x+i*A._y+r*A._z;if(a<0?(this._w=-A._w,this._x=-A._x,this._y=-A._y,this._z=-A._z,a=-a):this.copy(A),a>=1)return this._w=s,this._x=t,this._y=i,this._z=r,this;const o=1-a*a;if(o<=Number.EPSILON){const p=1-e;return this._w=p*s+e*this._w,this._x=p*t+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(o),c=Math.atan2(l,a),u=Math.sin((1-e)*c)/l,h=Math.sin(e*c)/l;return this._w=s*u+this._w*h,this._x=t*u+this._x*h,this._y=i*u+this._y*h,this._z=r*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(A,e,t){return this.copy(A).slerp(e,t)}random(){const A=Math.random(),e=Math.sqrt(1-A),t=Math.sqrt(A),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),t*Math.sin(r),t*Math.cos(r),e*Math.sin(i))}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._w===this._w}fromArray(A,e=0){return this._x=A[e],this._y=A[e+1],this._z=A[e+2],this._w=A[e+3],this._onChangeCallback(),this}toArray(A=[],e=0){return A[e]=this._x,A[e+1]=this._y,A[e+2]=this._z,A[e+3]=this._w,A}fromBufferAttribute(A,e){return this._x=A.getX(e),this._y=A.getY(e),this._z=A.getZ(e),this._w=A.getW(e),this}toJSON(){return this.toArray()}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(A=0,e=0,t=0){I.prototype.isVector3=!0,this.x=A,this.y=e,this.z=t}set(A,e,t){return t===void 0&&(t=this.z),this.x=A,this.y=e,this.z=t,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setComponent(A,e){switch(A){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this}addVectors(A,e){return this.x=A.x+e.x,this.y=A.y+e.y,this.z=A.z+e.z,this}addScaledVector(A,e){return this.x+=A.x*e,this.y+=A.y*e,this.z+=A.z*e,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this}subVectors(A,e){return this.x=A.x-e.x,this.y=A.y-e.y,this.z=A.z-e.z,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this}multiplyVectors(A,e){return this.x=A.x*e.x,this.y=A.y*e.y,this.z=A.z*e.z,this}applyEuler(A){return this.applyQuaternion(ac.setFromEuler(A))}applyAxisAngle(A,e){return this.applyQuaternion(ac.setFromAxisAngle(A,e))}applyMatrix3(A){const e=this.x,t=this.y,i=this.z,r=A.elements;return this.x=r[0]*e+r[3]*t+r[6]*i,this.y=r[1]*e+r[4]*t+r[7]*i,this.z=r[2]*e+r[5]*t+r[8]*i,this}applyNormalMatrix(A){return this.applyMatrix3(A).normalize()}applyMatrix4(A){const e=this.x,t=this.y,i=this.z,r=A.elements,s=1/(r[3]*e+r[7]*t+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*t+r[8]*i+r[12])*s,this.y=(r[1]*e+r[5]*t+r[9]*i+r[13])*s,this.z=(r[2]*e+r[6]*t+r[10]*i+r[14])*s,this}applyQuaternion(A){const e=this.x,t=this.y,i=this.z,r=A.x,s=A.y,a=A.z,o=A.w,l=2*(s*i-a*t),c=2*(a*e-r*i),u=2*(r*t-s*e);return this.x=e+o*l+s*u-a*c,this.y=t+o*c+a*l-r*u,this.z=i+o*u+r*c-s*l,this}project(A){return this.applyMatrix4(A.matrixWorldInverse).applyMatrix4(A.projectionMatrix)}unproject(A){return this.applyMatrix4(A.projectionMatrixInverse).applyMatrix4(A.matrixWorld)}transformDirection(A){const e=this.x,t=this.y,i=this.z,r=A.elements;return this.x=r[0]*e+r[4]*t+r[8]*i,this.y=r[1]*e+r[5]*t+r[9]*i,this.z=r[2]*e+r[6]*t+r[10]*i,this.normalize()}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this}divideScalar(A){return this.multiplyScalar(1/A)}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this}clamp(A,e){return this.x=Math.max(A.x,Math.min(e.x,this.x)),this.y=Math.max(A.y,Math.min(e.y,this.y)),this.z=Math.max(A.z,Math.min(e.z,this.z)),this}clampScalar(A,e){return this.x=Math.max(A,Math.min(e,this.x)),this.y=Math.max(A,Math.min(e,this.y)),this.z=Math.max(A,Math.min(e,this.z)),this}clampLength(A,e){const t=this.length();return this.divideScalar(t||1).multiplyScalar(Math.max(A,Math.min(e,t)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,e){return this.x+=(A.x-this.x)*e,this.y+=(A.y-this.y)*e,this.z+=(A.z-this.z)*e,this}lerpVectors(A,e,t){return this.x=A.x+(e.x-A.x)*t,this.y=A.y+(e.y-A.y)*t,this.z=A.z+(e.z-A.z)*t,this}cross(A){return this.crossVectors(this,A)}crossVectors(A,e){const t=A.x,i=A.y,r=A.z,s=e.x,a=e.y,o=e.z;return this.x=i*o-r*a,this.y=r*s-t*o,this.z=t*a-i*s,this}projectOnVector(A){const e=A.lengthSq();if(e===0)return this.set(0,0,0);const t=A.dot(this)/e;return this.copy(A).multiplyScalar(t)}projectOnPlane(A){return _a.copy(this).projectOnVector(A),this.sub(_a)}reflect(A){return this.sub(_a.copy(A).multiplyScalar(2*this.dot(A)))}angleTo(A){const e=Math.sqrt(this.lengthSq()*A.lengthSq());if(e===0)return Math.PI/2;const t=this.dot(A)/e;return Math.acos(Ee(t,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const e=this.x-A.x,t=this.y-A.y,i=this.z-A.z;return e*e+t*t+i*i}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)+Math.abs(this.z-A.z)}setFromSpherical(A){return this.setFromSphericalCoords(A.radius,A.phi,A.theta)}setFromSphericalCoords(A,e,t){const i=Math.sin(e)*A;return this.x=i*Math.sin(t),this.y=Math.cos(e)*A,this.z=i*Math.cos(t),this}setFromCylindrical(A){return this.setFromCylindricalCoords(A.radius,A.theta,A.y)}setFromCylindricalCoords(A,e,t){return this.x=A*Math.sin(e),this.y=t,this.z=A*Math.cos(e),this}setFromMatrixPosition(A){const e=A.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(A){const e=this.setFromMatrixColumn(A,0).length(),t=this.setFromMatrixColumn(A,1).length(),i=this.setFromMatrixColumn(A,2).length();return this.x=e,this.y=t,this.z=i,this}setFromMatrixColumn(A,e){return this.fromArray(A.elements,e*4)}setFromMatrix3Column(A,e){return this.fromArray(A.elements,e*3)}setFromEuler(A){return this.x=A._x,this.y=A._y,this.z=A._z,this}setFromColor(A){return this.x=A.r,this.y=A.g,this.z=A.b,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z}fromArray(A,e=0){return this.x=A[e],this.y=A[e+1],this.z=A[e+2],this}toArray(A=[],e=0){return A[e]=this.x,A[e+1]=this.y,A[e+2]=this.z,A}fromBufferAttribute(A,e){return this.x=A.getX(e),this.y=A.getY(e),this.z=A.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const A=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,t=Math.sqrt(1-A**2);return this.x=t*Math.cos(e),this.y=t*Math.sin(e),this.z=A,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _a=new I,ac=new Qn;class _r{constructor(A=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=A,this.max=e}set(A,e){return this.min.copy(A),this.max.copy(e),this}setFromArray(A){this.makeEmpty();for(let e=0,t=A.length;e<t;e+=3)this.expandByPoint(rt.fromArray(A,e));return this}setFromBufferAttribute(A){this.makeEmpty();for(let e=0,t=A.count;e<t;e++)this.expandByPoint(rt.fromBufferAttribute(A,e));return this}setFromPoints(A){this.makeEmpty();for(let e=0,t=A.length;e<t;e++)this.expandByPoint(A[e]);return this}setFromCenterAndSize(A,e){const t=rt.copy(e).multiplyScalar(.5);return this.min.copy(A).sub(t),this.max.copy(A).add(t),this}setFromObject(A,e=!1){return this.makeEmpty(),this.expandByObject(A,e)}clone(){return new this.constructor().copy(this)}copy(A){return this.min.copy(A.min),this.max.copy(A.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(A){return this.isEmpty()?A.set(0,0,0):A.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(A){return this.isEmpty()?A.set(0,0,0):A.subVectors(this.max,this.min)}expandByPoint(A){return this.min.min(A),this.max.max(A),this}expandByVector(A){return this.min.sub(A),this.max.add(A),this}expandByScalar(A){return this.min.addScalar(-A),this.max.addScalar(A),this}expandByObject(A,e=!1){A.updateWorldMatrix(!1,!1);const t=A.geometry;if(t!==void 0){const r=t.getAttribute("position");if(e===!0&&r!==void 0&&A.isInstancedMesh!==!0)for(let s=0,a=r.count;s<a;s++)A.isMesh===!0?A.getVertexPosition(s,rt):rt.fromBufferAttribute(r,s),rt.applyMatrix4(A.matrixWorld),this.expandByPoint(rt);else A.boundingBox!==void 0?(A.boundingBox===null&&A.computeBoundingBox(),Fr.copy(A.boundingBox)):(t.boundingBox===null&&t.computeBoundingBox(),Fr.copy(t.boundingBox)),Fr.applyMatrix4(A.matrixWorld),this.union(Fr)}const i=A.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],e);return this}containsPoint(A){return!(A.x<this.min.x||A.x>this.max.x||A.y<this.min.y||A.y>this.max.y||A.z<this.min.z||A.z>this.max.z)}containsBox(A){return this.min.x<=A.min.x&&A.max.x<=this.max.x&&this.min.y<=A.min.y&&A.max.y<=this.max.y&&this.min.z<=A.min.z&&A.max.z<=this.max.z}getParameter(A,e){return e.set((A.x-this.min.x)/(this.max.x-this.min.x),(A.y-this.min.y)/(this.max.y-this.min.y),(A.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(A){return!(A.max.x<this.min.x||A.min.x>this.max.x||A.max.y<this.min.y||A.min.y>this.max.y||A.max.z<this.min.z||A.min.z>this.max.z)}intersectsSphere(A){return this.clampPoint(A.center,rt),rt.distanceToSquared(A.center)<=A.radius*A.radius}intersectsPlane(A){let e,t;return A.normal.x>0?(e=A.normal.x*this.min.x,t=A.normal.x*this.max.x):(e=A.normal.x*this.max.x,t=A.normal.x*this.min.x),A.normal.y>0?(e+=A.normal.y*this.min.y,t+=A.normal.y*this.max.y):(e+=A.normal.y*this.max.y,t+=A.normal.y*this.min.y),A.normal.z>0?(e+=A.normal.z*this.min.z,t+=A.normal.z*this.max.z):(e+=A.normal.z*this.max.z,t+=A.normal.z*this.min.z),e<=-A.constant&&t>=-A.constant}intersectsTriangle(A){if(this.isEmpty())return!1;this.getCenter(Qi),Mr.subVectors(this.max,Qi),Nn.subVectors(A.a,Qi),On.subVectors(A.b,Qi),Gn.subVectors(A.c,Qi),Pt.subVectors(On,Nn),Nt.subVectors(Gn,On),hn.subVectors(Nn,Gn);let e=[0,-Pt.z,Pt.y,0,-Nt.z,Nt.y,0,-hn.z,hn.y,Pt.z,0,-Pt.x,Nt.z,0,-Nt.x,hn.z,0,-hn.x,-Pt.y,Pt.x,0,-Nt.y,Nt.x,0,-hn.y,hn.x,0];return!Ca(e,Nn,On,Gn,Mr)||(e=[1,0,0,0,1,0,0,0,1],!Ca(e,Nn,On,Gn,Mr))?!1:(br.crossVectors(Pt,Nt),e=[br.x,br.y,br.z],Ca(e,Nn,On,Gn,Mr))}clampPoint(A,e){return e.copy(A).clamp(this.min,this.max)}distanceToPoint(A){return this.clampPoint(A,rt).distanceTo(A)}getBoundingSphere(A){return this.isEmpty()?A.makeEmpty():(this.getCenter(A.center),A.radius=this.getSize(rt).length()*.5),A}intersect(A){return this.min.max(A.min),this.max.min(A.max),this.isEmpty()&&this.makeEmpty(),this}union(A){return this.min.min(A.min),this.max.max(A.max),this}applyMatrix4(A){return this.isEmpty()?this:(Et[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(A),Et[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(A),Et[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(A),Et[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(A),Et[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(A),Et[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(A),Et[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(A),Et[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(A),this.setFromPoints(Et),this)}translate(A){return this.min.add(A),this.max.add(A),this}equals(A){return A.min.equals(this.min)&&A.max.equals(this.max)}}const Et=[new I,new I,new I,new I,new I,new I,new I,new I],rt=new I,Fr=new _r,Nn=new I,On=new I,Gn=new I,Pt=new I,Nt=new I,hn=new I,Qi=new I,Mr=new I,br=new I,fn=new I;function Ca(n,A,e,t,i){for(let r=0,s=n.length-3;r<=s;r+=3){fn.fromArray(n,r);const a=i.x*Math.abs(fn.x)+i.y*Math.abs(fn.y)+i.z*Math.abs(fn.z),o=A.dot(fn),l=e.dot(fn),c=t.dot(fn);if(Math.max(-Math.max(o,l,c),Math.min(o,l,c))>a)return!1}return!0}const cp=new _r,Ii=new I,Ea=new I;class Al{constructor(A=new I,e=-1){this.center=A,this.radius=e}set(A,e){return this.center.copy(A),this.radius=e,this}setFromPoints(A,e){const t=this.center;e!==void 0?t.copy(e):cp.setFromPoints(A).getCenter(t);let i=0;for(let r=0,s=A.length;r<s;r++)i=Math.max(i,t.distanceToSquared(A[r]));return this.radius=Math.sqrt(i),this}copy(A){return this.center.copy(A.center),this.radius=A.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(A){return A.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(A){return A.distanceTo(this.center)-this.radius}intersectsSphere(A){const e=this.radius+A.radius;return A.center.distanceToSquared(this.center)<=e*e}intersectsBox(A){return A.intersectsSphere(this)}intersectsPlane(A){return Math.abs(A.distanceToPoint(this.center))<=this.radius}clampPoint(A,e){const t=this.center.distanceToSquared(A);return e.copy(A),t>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(A){return this.isEmpty()?(A.makeEmpty(),A):(A.set(this.center,this.center),A.expandByScalar(this.radius),A)}applyMatrix4(A){return this.center.applyMatrix4(A),this.radius=this.radius*A.getMaxScaleOnAxis(),this}translate(A){return this.center.add(A),this}expandByPoint(A){if(this.isEmpty())return this.center.copy(A),this.radius=0,this;Ii.subVectors(A,this.center);const e=Ii.lengthSq();if(e>this.radius*this.radius){const t=Math.sqrt(e),i=(t-this.radius)*.5;this.center.addScaledVector(Ii,i/t),this.radius+=i}return this}union(A){return A.isEmpty()?this:this.isEmpty()?(this.copy(A),this):(this.center.equals(A.center)===!0?this.radius=Math.max(this.radius,A.radius):(Ea.subVectors(A.center,this.center).setLength(A.radius),this.expandByPoint(Ii.copy(A.center).add(Ea)),this.expandByPoint(Ii.copy(A.center).sub(Ea))),this)}equals(A){return A.center.equals(this.center)&&A.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xt=new I,xa=new I,Tr=new I,Ot=new I,Ua=new I,Qr=new I,ya=new I;class lh{constructor(A=new I,e=new I(0,0,-1)){this.origin=A,this.direction=e}set(A,e){return this.origin.copy(A),this.direction.copy(e),this}copy(A){return this.origin.copy(A.origin),this.direction.copy(A.direction),this}at(A,e){return e.copy(this.origin).addScaledVector(this.direction,A)}lookAt(A){return this.direction.copy(A).sub(this.origin).normalize(),this}recast(A){return this.origin.copy(this.at(A,xt)),this}closestPointToPoint(A,e){e.subVectors(A,this.origin);const t=e.dot(this.direction);return t<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,t)}distanceToPoint(A){return Math.sqrt(this.distanceSqToPoint(A))}distanceSqToPoint(A){const e=xt.subVectors(A,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(A):(xt.copy(this.origin).addScaledVector(this.direction,e),xt.distanceToSquared(A))}distanceSqToSegment(A,e,t,i){xa.copy(A).add(e).multiplyScalar(.5),Tr.copy(e).sub(A).normalize(),Ot.copy(this.origin).sub(xa);const r=A.distanceTo(e)*.5,s=-this.direction.dot(Tr),a=Ot.dot(this.direction),o=-Ot.dot(Tr),l=Ot.lengthSq(),c=Math.abs(1-s*s);let u,h,p,g;if(c>0)if(u=s*o-a,h=s*a-o,g=r*c,u>=0)if(h>=-g)if(h<=g){const m=1/c;u*=m,h*=m,p=u*(u+s*h+2*a)+h*(s*u+h+2*o)+l}else h=r,u=Math.max(0,-(s*h+a)),p=-u*u+h*(h+2*o)+l;else h=-r,u=Math.max(0,-(s*h+a)),p=-u*u+h*(h+2*o)+l;else h<=-g?(u=Math.max(0,-(-s*r+a)),h=u>0?-r:Math.min(Math.max(-r,-o),r),p=-u*u+h*(h+2*o)+l):h<=g?(u=0,h=Math.min(Math.max(-r,-o),r),p=h*(h+2*o)+l):(u=Math.max(0,-(s*r+a)),h=u>0?r:Math.min(Math.max(-r,-o),r),p=-u*u+h*(h+2*o)+l);else h=s>0?-r:r,u=Math.max(0,-(s*h+a)),p=-u*u+h*(h+2*o)+l;return t&&t.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(xa).addScaledVector(Tr,h),p}intersectSphere(A,e){xt.subVectors(A.center,this.origin);const t=xt.dot(this.direction),i=xt.dot(xt)-t*t,r=A.radius*A.radius;if(i>r)return null;const s=Math.sqrt(r-i),a=t-s,o=t+s;return o<0?null:a<0?this.at(o,e):this.at(a,e)}intersectsSphere(A){return this.distanceSqToPoint(A.center)<=A.radius*A.radius}distanceToPlane(A){const e=A.normal.dot(this.direction);if(e===0)return A.distanceToPoint(this.origin)===0?0:null;const t=-(this.origin.dot(A.normal)+A.constant)/e;return t>=0?t:null}intersectPlane(A,e){const t=this.distanceToPlane(A);return t===null?null:this.at(t,e)}intersectsPlane(A){const e=A.distanceToPoint(this.origin);return e===0||A.normal.dot(this.direction)*e<0}intersectBox(A,e){let t,i,r,s,a,o;const l=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,h=this.origin;return l>=0?(t=(A.min.x-h.x)*l,i=(A.max.x-h.x)*l):(t=(A.max.x-h.x)*l,i=(A.min.x-h.x)*l),c>=0?(r=(A.min.y-h.y)*c,s=(A.max.y-h.y)*c):(r=(A.max.y-h.y)*c,s=(A.min.y-h.y)*c),t>s||r>i||((r>t||isNaN(t))&&(t=r),(s<i||isNaN(i))&&(i=s),u>=0?(a=(A.min.z-h.z)*u,o=(A.max.z-h.z)*u):(a=(A.max.z-h.z)*u,o=(A.min.z-h.z)*u),t>o||a>i)||((a>t||t!==t)&&(t=a),(o<i||i!==i)&&(i=o),i<0)?null:this.at(t>=0?t:i,e)}intersectsBox(A){return this.intersectBox(A,xt)!==null}intersectTriangle(A,e,t,i,r){Ua.subVectors(e,A),Qr.subVectors(t,A),ya.crossVectors(Ua,Qr);let s=this.direction.dot(ya),a;if(s>0){if(i)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Ot.subVectors(this.origin,A);const o=a*this.direction.dot(Qr.crossVectors(Ot,Qr));if(o<0)return null;const l=a*this.direction.dot(Ua.cross(Ot));if(l<0||o+l>s)return null;const c=-a*Ot.dot(ya);return c<0?null:this.at(c/s,r)}applyMatrix4(A){return this.origin.applyMatrix4(A),this.direction.transformDirection(A),this}equals(A){return A.origin.equals(this.origin)&&A.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xe{constructor(A,e,t,i,r,s,a,o,l,c,u,h,p,g,m,d){xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],A!==void 0&&this.set(A,e,t,i,r,s,a,o,l,c,u,h,p,g,m,d)}set(A,e,t,i,r,s,a,o,l,c,u,h,p,g,m,d){const f=this.elements;return f[0]=A,f[4]=e,f[8]=t,f[12]=i,f[1]=r,f[5]=s,f[9]=a,f[13]=o,f[2]=l,f[6]=c,f[10]=u,f[14]=h,f[3]=p,f[7]=g,f[11]=m,f[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xe().fromArray(this.elements)}copy(A){const e=this.elements,t=A.elements;return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],this}copyPosition(A){const e=this.elements,t=A.elements;return e[12]=t[12],e[13]=t[13],e[14]=t[14],this}setFromMatrix3(A){const e=A.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(A,e,t){return A.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),t.setFromMatrixColumn(this,2),this}makeBasis(A,e,t){return this.set(A.x,e.x,t.x,0,A.y,e.y,t.y,0,A.z,e.z,t.z,0,0,0,0,1),this}extractRotation(A){const e=this.elements,t=A.elements,i=1/Vn.setFromMatrixColumn(A,0).length(),r=1/Vn.setFromMatrixColumn(A,1).length(),s=1/Vn.setFromMatrixColumn(A,2).length();return e[0]=t[0]*i,e[1]=t[1]*i,e[2]=t[2]*i,e[3]=0,e[4]=t[4]*r,e[5]=t[5]*r,e[6]=t[6]*r,e[7]=0,e[8]=t[8]*s,e[9]=t[9]*s,e[10]=t[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(A){const e=this.elements,t=A.x,i=A.y,r=A.z,s=Math.cos(t),a=Math.sin(t),o=Math.cos(i),l=Math.sin(i),c=Math.cos(r),u=Math.sin(r);if(A.order==="XYZ"){const h=s*c,p=s*u,g=a*c,m=a*u;e[0]=o*c,e[4]=-o*u,e[8]=l,e[1]=p+g*l,e[5]=h-m*l,e[9]=-a*o,e[2]=m-h*l,e[6]=g+p*l,e[10]=s*o}else if(A.order==="YXZ"){const h=o*c,p=o*u,g=l*c,m=l*u;e[0]=h+m*a,e[4]=g*a-p,e[8]=s*l,e[1]=s*u,e[5]=s*c,e[9]=-a,e[2]=p*a-g,e[6]=m+h*a,e[10]=s*o}else if(A.order==="ZXY"){const h=o*c,p=o*u,g=l*c,m=l*u;e[0]=h-m*a,e[4]=-s*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=s*c,e[9]=m-h*a,e[2]=-s*l,e[6]=a,e[10]=s*o}else if(A.order==="ZYX"){const h=s*c,p=s*u,g=a*c,m=a*u;e[0]=o*c,e[4]=g*l-p,e[8]=h*l+m,e[1]=o*u,e[5]=m*l+h,e[9]=p*l-g,e[2]=-l,e[6]=a*o,e[10]=s*o}else if(A.order==="YZX"){const h=s*o,p=s*l,g=a*o,m=a*l;e[0]=o*c,e[4]=m-h*u,e[8]=g*u+p,e[1]=u,e[5]=s*c,e[9]=-a*c,e[2]=-l*c,e[6]=p*u+g,e[10]=h-m*u}else if(A.order==="XZY"){const h=s*o,p=s*l,g=a*o,m=a*l;e[0]=o*c,e[4]=-u,e[8]=l*c,e[1]=h*u+m,e[5]=s*c,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*c,e[10]=m*u+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(A){return this.compose(up,A,hp)}lookAt(A,e,t){const i=this.elements;return ze.subVectors(A,e),ze.lengthSq()===0&&(ze.z=1),ze.normalize(),Gt.crossVectors(t,ze),Gt.lengthSq()===0&&(Math.abs(t.z)===1?ze.x+=1e-4:ze.z+=1e-4,ze.normalize(),Gt.crossVectors(t,ze)),Gt.normalize(),Ir.crossVectors(ze,Gt),i[0]=Gt.x,i[4]=Ir.x,i[8]=ze.x,i[1]=Gt.y,i[5]=Ir.y,i[9]=ze.y,i[2]=Gt.z,i[6]=Ir.z,i[10]=ze.z,this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,e){const t=A.elements,i=e.elements,r=this.elements,s=t[0],a=t[4],o=t[8],l=t[12],c=t[1],u=t[5],h=t[9],p=t[13],g=t[2],m=t[6],d=t[10],f=t[14],E=t[3],v=t[7],C=t[11],x=t[15],y=i[0],U=i[4],R=i[8],B=i[12],F=i[1],k=i[5],Y=i[9],X=i[13],T=i[2],O=i[6],W=i[10],K=i[14],j=i[3],Z=i[7],J=i[11],Q=i[15];return r[0]=s*y+a*F+o*T+l*j,r[4]=s*U+a*k+o*O+l*Z,r[8]=s*R+a*Y+o*W+l*J,r[12]=s*B+a*X+o*K+l*Q,r[1]=c*y+u*F+h*T+p*j,r[5]=c*U+u*k+h*O+p*Z,r[9]=c*R+u*Y+h*W+p*J,r[13]=c*B+u*X+h*K+p*Q,r[2]=g*y+m*F+d*T+f*j,r[6]=g*U+m*k+d*O+f*Z,r[10]=g*R+m*Y+d*W+f*J,r[14]=g*B+m*X+d*K+f*Q,r[3]=E*y+v*F+C*T+x*j,r[7]=E*U+v*k+C*O+x*Z,r[11]=E*R+v*Y+C*W+x*J,r[15]=E*B+v*X+C*K+x*Q,this}multiplyScalar(A){const e=this.elements;return e[0]*=A,e[4]*=A,e[8]*=A,e[12]*=A,e[1]*=A,e[5]*=A,e[9]*=A,e[13]*=A,e[2]*=A,e[6]*=A,e[10]*=A,e[14]*=A,e[3]*=A,e[7]*=A,e[11]*=A,e[15]*=A,this}determinant(){const A=this.elements,e=A[0],t=A[4],i=A[8],r=A[12],s=A[1],a=A[5],o=A[9],l=A[13],c=A[2],u=A[6],h=A[10],p=A[14],g=A[3],m=A[7],d=A[11],f=A[15];return g*(+r*o*u-i*l*u-r*a*h+t*l*h+i*a*p-t*o*p)+m*(+e*o*p-e*l*h+r*s*h-i*s*p+i*l*c-r*o*c)+d*(+e*l*u-e*a*p-r*s*u+t*s*p+r*a*c-t*l*c)+f*(-i*a*c-e*o*u+e*a*h+i*s*u-t*s*h+t*o*c)}transpose(){const A=this.elements;let e;return e=A[1],A[1]=A[4],A[4]=e,e=A[2],A[2]=A[8],A[8]=e,e=A[6],A[6]=A[9],A[9]=e,e=A[3],A[3]=A[12],A[12]=e,e=A[7],A[7]=A[13],A[13]=e,e=A[11],A[11]=A[14],A[14]=e,this}setPosition(A,e,t){const i=this.elements;return A.isVector3?(i[12]=A.x,i[13]=A.y,i[14]=A.z):(i[12]=A,i[13]=e,i[14]=t),this}invert(){const A=this.elements,e=A[0],t=A[1],i=A[2],r=A[3],s=A[4],a=A[5],o=A[6],l=A[7],c=A[8],u=A[9],h=A[10],p=A[11],g=A[12],m=A[13],d=A[14],f=A[15],E=u*d*l-m*h*l+m*o*p-a*d*p-u*o*f+a*h*f,v=g*h*l-c*d*l-g*o*p+s*d*p+c*o*f-s*h*f,C=c*m*l-g*u*l+g*a*p-s*m*p-c*a*f+s*u*f,x=g*u*o-c*m*o-g*a*h+s*m*h+c*a*d-s*u*d,y=e*E+t*v+i*C+r*x;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/y;return A[0]=E*U,A[1]=(m*h*r-u*d*r-m*i*p+t*d*p+u*i*f-t*h*f)*U,A[2]=(a*d*r-m*o*r+m*i*l-t*d*l-a*i*f+t*o*f)*U,A[3]=(u*o*r-a*h*r-u*i*l+t*h*l+a*i*p-t*o*p)*U,A[4]=v*U,A[5]=(c*d*r-g*h*r+g*i*p-e*d*p-c*i*f+e*h*f)*U,A[6]=(g*o*r-s*d*r-g*i*l+e*d*l+s*i*f-e*o*f)*U,A[7]=(s*h*r-c*o*r+c*i*l-e*h*l-s*i*p+e*o*p)*U,A[8]=C*U,A[9]=(g*u*r-c*m*r-g*t*p+e*m*p+c*t*f-e*u*f)*U,A[10]=(s*m*r-g*a*r+g*t*l-e*m*l-s*t*f+e*a*f)*U,A[11]=(c*a*r-s*u*r-c*t*l+e*u*l+s*t*p-e*a*p)*U,A[12]=x*U,A[13]=(c*m*i-g*u*i+g*t*h-e*m*h-c*t*d+e*u*d)*U,A[14]=(g*a*i-s*m*i-g*t*o+e*m*o+s*t*d-e*a*d)*U,A[15]=(s*u*i-c*a*i+c*t*o-e*u*o-s*t*h+e*a*h)*U,this}scale(A){const e=this.elements,t=A.x,i=A.y,r=A.z;return e[0]*=t,e[4]*=i,e[8]*=r,e[1]*=t,e[5]*=i,e[9]*=r,e[2]*=t,e[6]*=i,e[10]*=r,e[3]*=t,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const A=this.elements,e=A[0]*A[0]+A[1]*A[1]+A[2]*A[2],t=A[4]*A[4]+A[5]*A[5]+A[6]*A[6],i=A[8]*A[8]+A[9]*A[9]+A[10]*A[10];return Math.sqrt(Math.max(e,t,i))}makeTranslation(A,e,t){return A.isVector3?this.set(1,0,0,A.x,0,1,0,A.y,0,0,1,A.z,0,0,0,1):this.set(1,0,0,A,0,1,0,e,0,0,1,t,0,0,0,1),this}makeRotationX(A){const e=Math.cos(A),t=Math.sin(A);return this.set(1,0,0,0,0,e,-t,0,0,t,e,0,0,0,0,1),this}makeRotationY(A){const e=Math.cos(A),t=Math.sin(A);return this.set(e,0,t,0,0,1,0,0,-t,0,e,0,0,0,0,1),this}makeRotationZ(A){const e=Math.cos(A),t=Math.sin(A);return this.set(e,-t,0,0,t,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(A,e){const t=Math.cos(e),i=Math.sin(e),r=1-t,s=A.x,a=A.y,o=A.z,l=r*s,c=r*a;return this.set(l*s+t,l*a-i*o,l*o+i*a,0,l*a+i*o,c*a+t,c*o-i*s,0,l*o-i*a,c*o+i*s,r*o*o+t,0,0,0,0,1),this}makeScale(A,e,t){return this.set(A,0,0,0,0,e,0,0,0,0,t,0,0,0,0,1),this}makeShear(A,e,t,i,r,s){return this.set(1,t,r,0,A,1,s,0,e,i,1,0,0,0,0,1),this}compose(A,e,t){const i=this.elements,r=e._x,s=e._y,a=e._z,o=e._w,l=r+r,c=s+s,u=a+a,h=r*l,p=r*c,g=r*u,m=s*c,d=s*u,f=a*u,E=o*l,v=o*c,C=o*u,x=t.x,y=t.y,U=t.z;return i[0]=(1-(m+f))*x,i[1]=(p+C)*x,i[2]=(g-v)*x,i[3]=0,i[4]=(p-C)*y,i[5]=(1-(h+f))*y,i[6]=(d+E)*y,i[7]=0,i[8]=(g+v)*U,i[9]=(d-E)*U,i[10]=(1-(h+m))*U,i[11]=0,i[12]=A.x,i[13]=A.y,i[14]=A.z,i[15]=1,this}decompose(A,e,t){const i=this.elements;let r=Vn.set(i[0],i[1],i[2]).length();const s=Vn.set(i[4],i[5],i[6]).length(),a=Vn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),A.x=i[12],A.y=i[13],A.z=i[14],st.copy(this);const l=1/r,c=1/s,u=1/a;return st.elements[0]*=l,st.elements[1]*=l,st.elements[2]*=l,st.elements[4]*=c,st.elements[5]*=c,st.elements[6]*=c,st.elements[8]*=u,st.elements[9]*=u,st.elements[10]*=u,e.setFromRotationMatrix(st),t.x=r,t.y=s,t.z=a,this}makePerspective(A,e,t,i,r,s,a=It){const o=this.elements,l=2*r/(e-A),c=2*r/(t-i),u=(e+A)/(e-A),h=(t+i)/(t-i);let p,g;if(a===It)p=-(s+r)/(s-r),g=-2*s*r/(s-r);else if(a===bs)p=-s/(s-r),g=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=p,o[14]=g,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(A,e,t,i,r,s,a=It){const o=this.elements,l=1/(e-A),c=1/(t-i),u=1/(s-r),h=(e+A)*l,p=(t+i)*c;let g,m;if(a===It)g=(s+r)*u,m=-2*u;else if(a===bs)g=r*u,m=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-p,o[2]=0,o[6]=0,o[10]=m,o[14]=-g,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(A){const e=this.elements,t=A.elements;for(let i=0;i<16;i++)if(e[i]!==t[i])return!1;return!0}fromArray(A,e=0){for(let t=0;t<16;t++)this.elements[t]=A[t+e];return this}toArray(A=[],e=0){const t=this.elements;return A[e]=t[0],A[e+1]=t[1],A[e+2]=t[2],A[e+3]=t[3],A[e+4]=t[4],A[e+5]=t[5],A[e+6]=t[6],A[e+7]=t[7],A[e+8]=t[8],A[e+9]=t[9],A[e+10]=t[10],A[e+11]=t[11],A[e+12]=t[12],A[e+13]=t[13],A[e+14]=t[14],A[e+15]=t[15],A}}const Vn=new I,st=new xe,up=new I(0,0,0),hp=new I(1,1,1),Gt=new I,Ir=new I,ze=new I,oc=new xe,lc=new Qn;class Xs{constructor(A=0,e=0,t=0,i=Xs.DEFAULT_ORDER){this.isEuler=!0,this._x=A,this._y=e,this._z=t,this._order=i}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get order(){return this._order}set order(A){this._order=A,this._onChangeCallback()}set(A,e,t,i=this._order){return this._x=A,this._y=e,this._z=t,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(A){return this._x=A._x,this._y=A._y,this._z=A._z,this._order=A._order,this._onChangeCallback(),this}setFromRotationMatrix(A,e=this._order,t=!0){const i=A.elements,r=i[0],s=i[4],a=i[8],o=i[1],l=i[5],c=i[9],u=i[2],h=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(o,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(o,r));break;case"ZYX":this._y=Math.asin(-Ee(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(o,r)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(Ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ee(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,t===!0&&this._onChangeCallback(),this}setFromQuaternion(A,e,t){return oc.makeRotationFromQuaternion(A),this.setFromRotationMatrix(oc,e,t)}setFromVector3(A,e=this._order){return this.set(A.x,A.y,A.z,e)}reorder(A){return lc.setFromEuler(this),this.setFromQuaternion(lc,A)}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._order===this._order}fromArray(A){return this._x=A[0],this._y=A[1],this._z=A[2],A[3]!==void 0&&(this._order=A[3]),this._onChangeCallback(),this}toArray(A=[],e=0){return A[e]=this._x,A[e+1]=this._y,A[e+2]=this._z,A[e+3]=this._order,A}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xs.DEFAULT_ORDER="XYZ";class ch{constructor(){this.mask=1}set(A){this.mask=(1<<A|0)>>>0}enable(A){this.mask|=1<<A|0}enableAll(){this.mask=-1}toggle(A){this.mask^=1<<A|0}disable(A){this.mask&=~(1<<A|0)}disableAll(){this.mask=0}test(A){return(this.mask&A.mask)!==0}isEnabled(A){return(this.mask&(1<<A|0))!==0}}let fp=0;const cc=new I,Kn=new Qn,Ut=new xe,Lr=new I,Li=new I,dp=new I,pp=new Qn,uc=new I(1,0,0),hc=new I(0,1,0),fc=new I(0,0,1),gp={type:"added"},mp={type:"removed"};class Je extends Ln{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Je.DEFAULT_UP.clone();const A=new I,e=new Xs,t=new Qn,i=new I(1,1,1);function r(){t.setFromEuler(e,!1)}function s(){e.setFromQuaternion(t,void 0,!1)}e._onChange(r),t._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:A},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:t},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new xe},normalMatrix:{value:new GA}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=Je.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ch,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(A){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(A),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(A){return this.quaternion.premultiply(A),this}setRotationFromAxisAngle(A,e){this.quaternion.setFromAxisAngle(A,e)}setRotationFromEuler(A){this.quaternion.setFromEuler(A,!0)}setRotationFromMatrix(A){this.quaternion.setFromRotationMatrix(A)}setRotationFromQuaternion(A){this.quaternion.copy(A)}rotateOnAxis(A,e){return Kn.setFromAxisAngle(A,e),this.quaternion.multiply(Kn),this}rotateOnWorldAxis(A,e){return Kn.setFromAxisAngle(A,e),this.quaternion.premultiply(Kn),this}rotateX(A){return this.rotateOnAxis(uc,A)}rotateY(A){return this.rotateOnAxis(hc,A)}rotateZ(A){return this.rotateOnAxis(fc,A)}translateOnAxis(A,e){return cc.copy(A).applyQuaternion(this.quaternion),this.position.add(cc.multiplyScalar(e)),this}translateX(A){return this.translateOnAxis(uc,A)}translateY(A){return this.translateOnAxis(hc,A)}translateZ(A){return this.translateOnAxis(fc,A)}localToWorld(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(this.matrixWorld)}worldToLocal(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(Ut.copy(this.matrixWorld).invert())}lookAt(A,e,t){A.isVector3?Lr.copy(A):Lr.set(A,e,t);const i=this.parent;this.updateWorldMatrix(!0,!1),Li.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ut.lookAt(Li,Lr,this.up):Ut.lookAt(Lr,Li,this.up),this.quaternion.setFromRotationMatrix(Ut),i&&(Ut.extractRotation(i.matrixWorld),Kn.setFromRotationMatrix(Ut),this.quaternion.premultiply(Kn.invert()))}add(A){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return A===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",A),this):(A&&A.isObject3D?(A.parent!==null&&A.parent.remove(A),A.parent=this,this.children.push(A),A.dispatchEvent(gp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",A),this)}remove(A){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.remove(arguments[t]);return this}const e=this.children.indexOf(A);return e!==-1&&(A.parent=null,this.children.splice(e,1),A.dispatchEvent(mp)),this}removeFromParent(){const A=this.parent;return A!==null&&A.remove(this),this}clear(){return this.remove(...this.children)}attach(A){return this.updateWorldMatrix(!0,!1),Ut.copy(this.matrixWorld).invert(),A.parent!==null&&(A.parent.updateWorldMatrix(!0,!1),Ut.multiply(A.parent.matrixWorld)),A.applyMatrix4(Ut),this.add(A),A.updateWorldMatrix(!1,!0),this}getObjectById(A){return this.getObjectByProperty("id",A)}getObjectByName(A){return this.getObjectByProperty("name",A)}getObjectByProperty(A,e){if(this[A]===e)return this;for(let t=0,i=this.children.length;t<i;t++){const s=this.children[t].getObjectByProperty(A,e);if(s!==void 0)return s}}getObjectsByProperty(A,e){let t=[];this[A]===e&&t.push(this);for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectsByProperty(A,e);s.length>0&&(t=t.concat(s))}return t}getWorldPosition(A){return this.updateWorldMatrix(!0,!1),A.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Li,A,dp),A}getWorldScale(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Li,pp,A),A}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return A.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(A){A(this);const e=this.children;for(let t=0,i=e.length;t<i;t++)e[t].traverse(A)}traverseVisible(A){if(this.visible===!1)return;A(this);const e=this.children;for(let t=0,i=e.length;t<i;t++)e[t].traverseVisible(A)}traverseAncestors(A){const e=this.parent;e!==null&&(A(e),e.traverseAncestors(A))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(A){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||A)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,A=!0);const e=this.children;for(let t=0,i=e.length;t<i;t++){const r=e[t];(r.matrixWorldAutoUpdate===!0||A===!0)&&r.updateMatrixWorld(A)}}updateWorldMatrix(A,e){const t=this.parent;if(A===!0&&t!==null&&t.matrixWorldAutoUpdate===!0&&t.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(A){const e=A===void 0||typeof A=="string",t={};e&&(A={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},t.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,o){return a[o.uuid]===void 0&&(a[o.uuid]=o.toJSON(A)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(A).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(A).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(A.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const o=a.shapes;if(Array.isArray(o))for(let l=0,c=o.length;l<c;l++){const u=o[l];r(A.shapes,u)}else r(A.shapes,o)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(A.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let o=0,l=this.material.length;o<l;o++)a.push(r(A.materials,this.material[o]));i.material=a}else i.material=r(A.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(A).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const o=this.animations[a];i.animations.push(r(A.animations,o))}}if(e){const a=s(A.geometries),o=s(A.materials),l=s(A.textures),c=s(A.images),u=s(A.shapes),h=s(A.skeletons),p=s(A.animations),g=s(A.nodes);a.length>0&&(t.geometries=a),o.length>0&&(t.materials=o),l.length>0&&(t.textures=l),c.length>0&&(t.images=c),u.length>0&&(t.shapes=u),h.length>0&&(t.skeletons=h),p.length>0&&(t.animations=p),g.length>0&&(t.nodes=g)}return t.object=i,t;function s(a){const o=[];for(const l in a){const c=a[l];delete c.metadata,o.push(c)}return o}}clone(A){return new this.constructor().copy(this,A)}copy(A,e=!0){if(this.name=A.name,this.up.copy(A.up),this.position.copy(A.position),this.rotation.order=A.rotation.order,this.quaternion.copy(A.quaternion),this.scale.copy(A.scale),this.matrix.copy(A.matrix),this.matrixWorld.copy(A.matrixWorld),this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrixWorldNeedsUpdate=A.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=A.matrixWorldAutoUpdate,this.layers.mask=A.layers.mask,this.visible=A.visible,this.castShadow=A.castShadow,this.receiveShadow=A.receiveShadow,this.frustumCulled=A.frustumCulled,this.renderOrder=A.renderOrder,this.animations=A.animations.slice(),this.userData=JSON.parse(JSON.stringify(A.userData)),e===!0)for(let t=0;t<A.children.length;t++){const i=A.children[t];this.add(i.clone())}return this}}Je.DEFAULT_UP=new I(0,1,0);Je.DEFAULT_MATRIX_AUTO_UPDATE=!0;Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const at=new I,yt=new I,Sa=new I,St=new I,kn=new I,zn=new I,dc=new I,Fa=new I,Ma=new I,ba=new I;let Rr=!1;class lt{constructor(A=new I,e=new I,t=new I){this.a=A,this.b=e,this.c=t}static getNormal(A,e,t,i){i.subVectors(t,e),at.subVectors(A,e),i.cross(at);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(A,e,t,i,r){at.subVectors(i,e),yt.subVectors(t,e),Sa.subVectors(A,e);const s=at.dot(at),a=at.dot(yt),o=at.dot(Sa),l=yt.dot(yt),c=yt.dot(Sa),u=s*l-a*a;if(u===0)return r.set(-2,-1,-1);const h=1/u,p=(l*o-a*c)*h,g=(s*c-a*o)*h;return r.set(1-p-g,g,p)}static containsPoint(A,e,t,i){return this.getBarycoord(A,e,t,i,St),St.x>=0&&St.y>=0&&St.x+St.y<=1}static getUV(A,e,t,i,r,s,a,o){return Rr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Rr=!0),this.getInterpolation(A,e,t,i,r,s,a,o)}static getInterpolation(A,e,t,i,r,s,a,o){return this.getBarycoord(A,e,t,i,St),o.setScalar(0),o.addScaledVector(r,St.x),o.addScaledVector(s,St.y),o.addScaledVector(a,St.z),o}static isFrontFacing(A,e,t,i){return at.subVectors(t,e),yt.subVectors(A,e),at.cross(yt).dot(i)<0}set(A,e,t){return this.a.copy(A),this.b.copy(e),this.c.copy(t),this}setFromPointsAndIndices(A,e,t,i){return this.a.copy(A[e]),this.b.copy(A[t]),this.c.copy(A[i]),this}setFromAttributeAndIndices(A,e,t,i){return this.a.fromBufferAttribute(A,e),this.b.fromBufferAttribute(A,t),this.c.fromBufferAttribute(A,i),this}clone(){return new this.constructor().copy(this)}copy(A){return this.a.copy(A.a),this.b.copy(A.b),this.c.copy(A.c),this}getArea(){return at.subVectors(this.c,this.b),yt.subVectors(this.a,this.b),at.cross(yt).length()*.5}getMidpoint(A){return A.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(A){return lt.getNormal(this.a,this.b,this.c,A)}getPlane(A){return A.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(A,e){return lt.getBarycoord(A,this.a,this.b,this.c,e)}getUV(A,e,t,i,r){return Rr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Rr=!0),lt.getInterpolation(A,this.a,this.b,this.c,e,t,i,r)}getInterpolation(A,e,t,i,r){return lt.getInterpolation(A,this.a,this.b,this.c,e,t,i,r)}containsPoint(A){return lt.containsPoint(A,this.a,this.b,this.c)}isFrontFacing(A){return lt.isFrontFacing(this.a,this.b,this.c,A)}intersectsBox(A){return A.intersectsTriangle(this)}closestPointToPoint(A,e){const t=this.a,i=this.b,r=this.c;let s,a;kn.subVectors(i,t),zn.subVectors(r,t),Fa.subVectors(A,t);const o=kn.dot(Fa),l=zn.dot(Fa);if(o<=0&&l<=0)return e.copy(t);Ma.subVectors(A,i);const c=kn.dot(Ma),u=zn.dot(Ma);if(c>=0&&u<=c)return e.copy(i);const h=o*u-c*l;if(h<=0&&o>=0&&c<=0)return s=o/(o-c),e.copy(t).addScaledVector(kn,s);ba.subVectors(A,r);const p=kn.dot(ba),g=zn.dot(ba);if(g>=0&&p<=g)return e.copy(r);const m=p*l-o*g;if(m<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(t).addScaledVector(zn,a);const d=c*g-p*u;if(d<=0&&u-c>=0&&p-g>=0)return dc.subVectors(r,i),a=(u-c)/(u-c+(p-g)),e.copy(i).addScaledVector(dc,a);const f=1/(d+m+h);return s=m*f,a=h*f,e.copy(t).addScaledVector(kn,s).addScaledVector(zn,a)}equals(A){return A.a.equals(this.a)&&A.b.equals(this.b)&&A.c.equals(this.c)}}const uh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vt={h:0,s:0,l:0},Hr={h:0,s:0,l:0};function Ta(n,A,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(A-n)*6*e:e<1/2?A:e<2/3?n+(A-n)*6*(2/3-e):n}class YA{constructor(A,e,t){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(A,e,t)}set(A,e,t){if(e===void 0&&t===void 0){const i=A;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(A,e,t);return this}setScalar(A){return this.r=A,this.g=A,this.b=A,this}setHex(A,e=ye){return A=Math.floor(A),this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(A&255)/255,ZA.toWorkingColorSpace(this,e),this}setRGB(A,e,t,i=ZA.workingColorSpace){return this.r=A,this.g=e,this.b=t,ZA.toWorkingColorSpace(this,i),this}setHSL(A,e,t,i=ZA.workingColorSpace){if(A=jo(A,1),e=Ee(e,0,1),t=Ee(t,0,1),e===0)this.r=this.g=this.b=t;else{const r=t<=.5?t*(1+e):t+e-t*e,s=2*t-r;this.r=Ta(s,r,A+1/3),this.g=Ta(s,r,A),this.b=Ta(s,r,A-1/3)}return ZA.toWorkingColorSpace(this,i),this}setStyle(A,e=ye){function t(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+A+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(A)){let r;const s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return t(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return t(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return t(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+A)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(A)){const r=i[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(s===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+A)}else if(A&&A.length>0)return this.setColorName(A,e);return this}setColorName(A,e=ye){const t=uh[A.toLowerCase()];return t!==void 0?this.setHex(t,e):console.warn("THREE.Color: Unknown color "+A),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(A){return this.r=A.r,this.g=A.g,this.b=A.b,this}copySRGBToLinear(A){return this.r=fi(A.r),this.g=fi(A.g),this.b=fi(A.b),this}copyLinearToSRGB(A){return this.r=wa(A.r),this.g=wa(A.g),this.b=wa(A.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(A=ye){return ZA.fromWorkingColorSpace(Te.copy(this),A),Math.round(Ee(Te.r*255,0,255))*65536+Math.round(Ee(Te.g*255,0,255))*256+Math.round(Ee(Te.b*255,0,255))}getHexString(A=ye){return("000000"+this.getHex(A).toString(16)).slice(-6)}getHSL(A,e=ZA.workingColorSpace){ZA.fromWorkingColorSpace(Te.copy(this),e);const t=Te.r,i=Te.g,r=Te.b,s=Math.max(t,i,r),a=Math.min(t,i,r);let o,l;const c=(a+s)/2;if(a===s)o=0,l=0;else{const u=s-a;switch(l=c<=.5?u/(s+a):u/(2-s-a),s){case t:o=(i-r)/u+(i<r?6:0);break;case i:o=(r-t)/u+2;break;case r:o=(t-i)/u+4;break}o/=6}return A.h=o,A.s=l,A.l=c,A}getRGB(A,e=ZA.workingColorSpace){return ZA.fromWorkingColorSpace(Te.copy(this),e),A.r=Te.r,A.g=Te.g,A.b=Te.b,A}getStyle(A=ye){ZA.fromWorkingColorSpace(Te.copy(this),A);const e=Te.r,t=Te.g,i=Te.b;return A!==ye?`color(${A} ${e.toFixed(3)} ${t.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(t*255)},${Math.round(i*255)})`}offsetHSL(A,e,t){return this.getHSL(Vt),this.setHSL(Vt.h+A,Vt.s+e,Vt.l+t)}add(A){return this.r+=A.r,this.g+=A.g,this.b+=A.b,this}addColors(A,e){return this.r=A.r+e.r,this.g=A.g+e.g,this.b=A.b+e.b,this}addScalar(A){return this.r+=A,this.g+=A,this.b+=A,this}sub(A){return this.r=Math.max(0,this.r-A.r),this.g=Math.max(0,this.g-A.g),this.b=Math.max(0,this.b-A.b),this}multiply(A){return this.r*=A.r,this.g*=A.g,this.b*=A.b,this}multiplyScalar(A){return this.r*=A,this.g*=A,this.b*=A,this}lerp(A,e){return this.r+=(A.r-this.r)*e,this.g+=(A.g-this.g)*e,this.b+=(A.b-this.b)*e,this}lerpColors(A,e,t){return this.r=A.r+(e.r-A.r)*t,this.g=A.g+(e.g-A.g)*t,this.b=A.b+(e.b-A.b)*t,this}lerpHSL(A,e){this.getHSL(Vt),A.getHSL(Hr);const t=qi(Vt.h,Hr.h,e),i=qi(Vt.s,Hr.s,e),r=qi(Vt.l,Hr.l,e);return this.setHSL(t,i,r),this}setFromVector3(A){return this.r=A.x,this.g=A.y,this.b=A.z,this}applyMatrix3(A){const e=this.r,t=this.g,i=this.b,r=A.elements;return this.r=r[0]*e+r[3]*t+r[6]*i,this.g=r[1]*e+r[4]*t+r[7]*i,this.b=r[2]*e+r[5]*t+r[8]*i,this}equals(A){return A.r===this.r&&A.g===this.g&&A.b===this.b}fromArray(A,e=0){return this.r=A[e],this.g=A[e+1],this.b=A[e+2],this}toArray(A=[],e=0){return A[e]=this.r,A[e+1]=this.g,A[e+2]=this.b,A}fromBufferAttribute(A,e){return this.r=A.getX(e),this.g=A.getY(e),this.b=A.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Te=new YA;YA.NAMES=uh;let Bp=0;class Ys extends Ln{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=Fi(),this.name="",this.type="Material",this.blending=hi,this.side=an,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=go,this.blendDst=mo,this.blendEquation=Bn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new YA(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ac,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dn,this.stencilZFail=Dn,this.stencilZPass=Dn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(A){this._alphaTest>0!=A>0&&this.version++,this._alphaTest=A}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(A){if(A!==void 0)for(const e in A){const t=A[e];if(t===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(t):i&&i.isVector3&&t&&t.isVector3?i.copy(t):this[e]=t}}toJSON(A){const e=A===void 0||typeof A=="string";e&&(A={textures:{},images:{}});const t={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.color&&this.color.isColor&&(t.color=this.color.getHex()),this.roughness!==void 0&&(t.roughness=this.roughness),this.metalness!==void 0&&(t.metalness=this.metalness),this.sheen!==void 0&&(t.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(t.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(t.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(t.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(t.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(t.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(t.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(t.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(t.shininess=this.shininess),this.clearcoat!==void 0&&(t.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(t.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(t.clearcoatMap=this.clearcoatMap.toJSON(A).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(t.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(A).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(t.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(A).uuid,t.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(t.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(t.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(t.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(t.iridescenceMap=this.iridescenceMap.toJSON(A).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(t.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(A).uuid),this.anisotropy!==void 0&&(t.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(t.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(t.anisotropyMap=this.anisotropyMap.toJSON(A).uuid),this.map&&this.map.isTexture&&(t.map=this.map.toJSON(A).uuid),this.matcap&&this.matcap.isTexture&&(t.matcap=this.matcap.toJSON(A).uuid),this.alphaMap&&this.alphaMap.isTexture&&(t.alphaMap=this.alphaMap.toJSON(A).uuid),this.lightMap&&this.lightMap.isTexture&&(t.lightMap=this.lightMap.toJSON(A).uuid,t.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(t.aoMap=this.aoMap.toJSON(A).uuid,t.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(t.bumpMap=this.bumpMap.toJSON(A).uuid,t.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(t.normalMap=this.normalMap.toJSON(A).uuid,t.normalMapType=this.normalMapType,t.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(t.displacementMap=this.displacementMap.toJSON(A).uuid,t.displacementScale=this.displacementScale,t.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(t.roughnessMap=this.roughnessMap.toJSON(A).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(t.metalnessMap=this.metalnessMap.toJSON(A).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(t.emissiveMap=this.emissiveMap.toJSON(A).uuid),this.specularMap&&this.specularMap.isTexture&&(t.specularMap=this.specularMap.toJSON(A).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(t.specularIntensityMap=this.specularIntensityMap.toJSON(A).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(t.specularColorMap=this.specularColorMap.toJSON(A).uuid),this.envMap&&this.envMap.isTexture&&(t.envMap=this.envMap.toJSON(A).uuid,this.combine!==void 0&&(t.combine=this.combine)),this.envMapIntensity!==void 0&&(t.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(t.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(t.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(t.gradientMap=this.gradientMap.toJSON(A).uuid),this.transmission!==void 0&&(t.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(t.transmissionMap=this.transmissionMap.toJSON(A).uuid),this.thickness!==void 0&&(t.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(t.thicknessMap=this.thicknessMap.toJSON(A).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(t.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(t.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(t.size=this.size),this.shadowSide!==null&&(t.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(t.sizeAttenuation=this.sizeAttenuation),this.blending!==hi&&(t.blending=this.blending),this.side!==an&&(t.side=this.side),this.vertexColors===!0&&(t.vertexColors=!0),this.opacity<1&&(t.opacity=this.opacity),this.transparent===!0&&(t.transparent=!0),this.blendSrc!==go&&(t.blendSrc=this.blendSrc),this.blendDst!==mo&&(t.blendDst=this.blendDst),this.blendEquation!==Bn&&(t.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(t.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(t.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(t.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(t.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(t.blendAlpha=this.blendAlpha),this.depthFunc!==ys&&(t.depthFunc=this.depthFunc),this.depthTest===!1&&(t.depthTest=this.depthTest),this.depthWrite===!1&&(t.depthWrite=this.depthWrite),this.colorWrite===!1&&(t.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(t.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ac&&(t.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(t.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(t.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Dn&&(t.stencilFail=this.stencilFail),this.stencilZFail!==Dn&&(t.stencilZFail=this.stencilZFail),this.stencilZPass!==Dn&&(t.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(t.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(t.rotation=this.rotation),this.polygonOffset===!0&&(t.polygonOffset=!0),this.polygonOffsetFactor!==0&&(t.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(t.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(t.linewidth=this.linewidth),this.dashSize!==void 0&&(t.dashSize=this.dashSize),this.gapSize!==void 0&&(t.gapSize=this.gapSize),this.scale!==void 0&&(t.scale=this.scale),this.dithering===!0&&(t.dithering=!0),this.alphaTest>0&&(t.alphaTest=this.alphaTest),this.alphaHash===!0&&(t.alphaHash=!0),this.alphaToCoverage===!0&&(t.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(t.premultipliedAlpha=!0),this.forceSinglePass===!0&&(t.forceSinglePass=!0),this.wireframe===!0&&(t.wireframe=!0),this.wireframeLinewidth>1&&(t.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(t.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(t.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(t.flatShading=!0),this.visible===!1&&(t.visible=!1),this.toneMapped===!1&&(t.toneMapped=!1),this.fog===!1&&(t.fog=!1),Object.keys(this.userData).length>0&&(t.userData=this.userData);function i(r){const s=[];for(const a in r){const o=r[a];delete o.metadata,s.push(o)}return s}if(e){const r=i(A.textures),s=i(A.images);r.length>0&&(t.textures=r),s.length>0&&(t.images=s)}return t}clone(){return new this.constructor().copy(this)}copy(A){this.name=A.name,this.blending=A.blending,this.side=A.side,this.vertexColors=A.vertexColors,this.opacity=A.opacity,this.transparent=A.transparent,this.blendSrc=A.blendSrc,this.blendDst=A.blendDst,this.blendEquation=A.blendEquation,this.blendSrcAlpha=A.blendSrcAlpha,this.blendDstAlpha=A.blendDstAlpha,this.blendEquationAlpha=A.blendEquationAlpha,this.blendColor.copy(A.blendColor),this.blendAlpha=A.blendAlpha,this.depthFunc=A.depthFunc,this.depthTest=A.depthTest,this.depthWrite=A.depthWrite,this.stencilWriteMask=A.stencilWriteMask,this.stencilFunc=A.stencilFunc,this.stencilRef=A.stencilRef,this.stencilFuncMask=A.stencilFuncMask,this.stencilFail=A.stencilFail,this.stencilZFail=A.stencilZFail,this.stencilZPass=A.stencilZPass,this.stencilWrite=A.stencilWrite;const e=A.clippingPlanes;let t=null;if(e!==null){const i=e.length;t=new Array(i);for(let r=0;r!==i;++r)t[r]=e[r].clone()}return this.clippingPlanes=t,this.clipIntersection=A.clipIntersection,this.clipShadows=A.clipShadows,this.shadowSide=A.shadowSide,this.colorWrite=A.colorWrite,this.precision=A.precision,this.polygonOffset=A.polygonOffset,this.polygonOffsetFactor=A.polygonOffsetFactor,this.polygonOffsetUnits=A.polygonOffsetUnits,this.dithering=A.dithering,this.alphaTest=A.alphaTest,this.alphaHash=A.alphaHash,this.alphaToCoverage=A.alphaToCoverage,this.premultipliedAlpha=A.premultipliedAlpha,this.forceSinglePass=A.forceSinglePass,this.visible=A.visible,this.toneMapped=A.toneMapped,this.userData=JSON.parse(JSON.stringify(A.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(A){A===!0&&this.version++}}class el extends Ys{constructor(A){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new YA(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.fog=A.fog,this}}const de=new I,Dr=new NA;class ft{constructor(A,e,t=!1){if(Array.isArray(A))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=A,this.itemSize=e,this.count=A!==void 0?A.length/e:0,this.normalized=t,this.usage=ec,this.updateRange={offset:0,count:-1},this.gpuType=qt,this.version=0}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}setUsage(A){return this.usage=A,this}copy(A){return this.name=A.name,this.array=new A.array.constructor(A.array),this.itemSize=A.itemSize,this.count=A.count,this.normalized=A.normalized,this.usage=A.usage,this.gpuType=A.gpuType,this}copyAt(A,e,t){A*=this.itemSize,t*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[A+i]=e.array[t+i];return this}copyArray(A){return this.array.set(A),this}applyMatrix3(A){if(this.itemSize===2)for(let e=0,t=this.count;e<t;e++)Dr.fromBufferAttribute(this,e),Dr.applyMatrix3(A),this.setXY(e,Dr.x,Dr.y);else if(this.itemSize===3)for(let e=0,t=this.count;e<t;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(A),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(A){for(let e=0,t=this.count;e<t;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(A),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(A){for(let e=0,t=this.count;e<t;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(A),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(A){for(let e=0,t=this.count;e<t;e++)de.fromBufferAttribute(this,e),de.transformDirection(A),this.setXYZ(e,de.x,de.y,de.z);return this}set(A,e=0){return this.array.set(A,e),this}getComponent(A,e){let t=this.array[A*this.itemSize+e];return this.normalized&&(t=si(t,this.array)),t}setComponent(A,e,t){return this.normalized&&(t=He(t,this.array)),this.array[A*this.itemSize+e]=t,this}getX(A){let e=this.array[A*this.itemSize];return this.normalized&&(e=si(e,this.array)),e}setX(A,e){return this.normalized&&(e=He(e,this.array)),this.array[A*this.itemSize]=e,this}getY(A){let e=this.array[A*this.itemSize+1];return this.normalized&&(e=si(e,this.array)),e}setY(A,e){return this.normalized&&(e=He(e,this.array)),this.array[A*this.itemSize+1]=e,this}getZ(A){let e=this.array[A*this.itemSize+2];return this.normalized&&(e=si(e,this.array)),e}setZ(A,e){return this.normalized&&(e=He(e,this.array)),this.array[A*this.itemSize+2]=e,this}getW(A){let e=this.array[A*this.itemSize+3];return this.normalized&&(e=si(e,this.array)),e}setW(A,e){return this.normalized&&(e=He(e,this.array)),this.array[A*this.itemSize+3]=e,this}setXY(A,e,t){return A*=this.itemSize,this.normalized&&(e=He(e,this.array),t=He(t,this.array)),this.array[A+0]=e,this.array[A+1]=t,this}setXYZ(A,e,t,i){return A*=this.itemSize,this.normalized&&(e=He(e,this.array),t=He(t,this.array),i=He(i,this.array)),this.array[A+0]=e,this.array[A+1]=t,this.array[A+2]=i,this}setXYZW(A,e,t,i,r){return A*=this.itemSize,this.normalized&&(e=He(e,this.array),t=He(t,this.array),i=He(i,this.array),r=He(r,this.array)),this.array[A+0]=e,this.array[A+1]=t,this.array[A+2]=i,this.array[A+3]=r,this}onUpload(A){return this.onUploadCallback=A,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const A={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(A.name=this.name),this.usage!==ec&&(A.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(A.updateRange=this.updateRange),A}}class hh extends ft{constructor(A,e,t){super(new Uint16Array(A),e,t)}}class fh extends ft{constructor(A,e,t){super(new Uint32Array(A),e,t)}}class ht extends ft{constructor(A,e,t){super(new Float32Array(A),e,t)}}let wp=0;const qe=new xe,Qa=new Je,Wn=new I,We=new _r,Ri=new _r,_e=new I;class ln extends Ln{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(A){return Array.isArray(A)?this.index=new(rh(A)?fh:hh)(A,1):this.index=A,this}getAttribute(A){return this.attributes[A]}setAttribute(A,e){return this.attributes[A]=e,this}deleteAttribute(A){return delete this.attributes[A],this}hasAttribute(A){return this.attributes[A]!==void 0}addGroup(A,e,t=0){this.groups.push({start:A,count:e,materialIndex:t})}clearGroups(){this.groups=[]}setDrawRange(A,e){this.drawRange.start=A,this.drawRange.count=e}applyMatrix4(A){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(A),e.needsUpdate=!0);const t=this.attributes.normal;if(t!==void 0){const r=new GA().getNormalMatrix(A);t.applyNormalMatrix(r),t.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(A),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(A){return qe.makeRotationFromQuaternion(A),this.applyMatrix4(qe),this}rotateX(A){return qe.makeRotationX(A),this.applyMatrix4(qe),this}rotateY(A){return qe.makeRotationY(A),this.applyMatrix4(qe),this}rotateZ(A){return qe.makeRotationZ(A),this.applyMatrix4(qe),this}translate(A,e,t){return qe.makeTranslation(A,e,t),this.applyMatrix4(qe),this}scale(A,e,t){return qe.makeScale(A,e,t),this.applyMatrix4(qe),this}lookAt(A){return Qa.lookAt(A),Qa.updateMatrix(),this.applyMatrix4(Qa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wn).negate(),this.translate(Wn.x,Wn.y,Wn.z),this}setFromPoints(A){const e=[];for(let t=0,i=A.length;t<i;t++){const r=A[t];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ht(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _r);const A=this.attributes.position,e=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(A!==void 0){if(this.boundingBox.setFromBufferAttribute(A),e)for(let t=0,i=e.length;t<i;t++){const r=e[t];We.setFromBufferAttribute(r),this.morphTargetsRelative?(_e.addVectors(this.boundingBox.min,We.min),this.boundingBox.expandByPoint(_e),_e.addVectors(this.boundingBox.max,We.max),this.boundingBox.expandByPoint(_e)):(this.boundingBox.expandByPoint(We.min),this.boundingBox.expandByPoint(We.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Al);const A=this.attributes.position,e=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(A){const t=this.boundingSphere.center;if(We.setFromBufferAttribute(A),e)for(let r=0,s=e.length;r<s;r++){const a=e[r];Ri.setFromBufferAttribute(a),this.morphTargetsRelative?(_e.addVectors(We.min,Ri.min),We.expandByPoint(_e),_e.addVectors(We.max,Ri.max),We.expandByPoint(_e)):(We.expandByPoint(Ri.min),We.expandByPoint(Ri.max))}We.getCenter(t);let i=0;for(let r=0,s=A.count;r<s;r++)_e.fromBufferAttribute(A,r),i=Math.max(i,t.distanceToSquared(_e));if(e)for(let r=0,s=e.length;r<s;r++){const a=e[r],o=this.morphTargetsRelative;for(let l=0,c=a.count;l<c;l++)_e.fromBufferAttribute(a,l),o&&(Wn.fromBufferAttribute(A,l),_e.add(Wn)),i=Math.max(i,t.distanceToSquared(_e))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const A=this.index,e=this.attributes;if(A===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const t=A.array,i=e.position.array,r=e.normal.array,s=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ft(new Float32Array(4*a),4));const o=this.getAttribute("tangent").array,l=[],c=[];for(let F=0;F<a;F++)l[F]=new I,c[F]=new I;const u=new I,h=new I,p=new I,g=new NA,m=new NA,d=new NA,f=new I,E=new I;function v(F,k,Y){u.fromArray(i,F*3),h.fromArray(i,k*3),p.fromArray(i,Y*3),g.fromArray(s,F*2),m.fromArray(s,k*2),d.fromArray(s,Y*2),h.sub(u),p.sub(u),m.sub(g),d.sub(g);const X=1/(m.x*d.y-d.x*m.y);isFinite(X)&&(f.copy(h).multiplyScalar(d.y).addScaledVector(p,-m.y).multiplyScalar(X),E.copy(p).multiplyScalar(m.x).addScaledVector(h,-d.x).multiplyScalar(X),l[F].add(f),l[k].add(f),l[Y].add(f),c[F].add(E),c[k].add(E),c[Y].add(E))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.length}]);for(let F=0,k=C.length;F<k;++F){const Y=C[F],X=Y.start,T=Y.count;for(let O=X,W=X+T;O<W;O+=3)v(t[O+0],t[O+1],t[O+2])}const x=new I,y=new I,U=new I,R=new I;function B(F){U.fromArray(r,F*3),R.copy(U);const k=l[F];x.copy(k),x.sub(U.multiplyScalar(U.dot(k))).normalize(),y.crossVectors(R,k);const X=y.dot(c[F])<0?-1:1;o[F*4]=x.x,o[F*4+1]=x.y,o[F*4+2]=x.z,o[F*4+3]=X}for(let F=0,k=C.length;F<k;++F){const Y=C[F],X=Y.start,T=Y.count;for(let O=X,W=X+T;O<W;O+=3)B(t[O+0]),B(t[O+1]),B(t[O+2])}}computeVertexNormals(){const A=this.index,e=this.getAttribute("position");if(e!==void 0){let t=this.getAttribute("normal");if(t===void 0)t=new ft(new Float32Array(e.count*3),3),this.setAttribute("normal",t);else for(let h=0,p=t.count;h<p;h++)t.setXYZ(h,0,0,0);const i=new I,r=new I,s=new I,a=new I,o=new I,l=new I,c=new I,u=new I;if(A)for(let h=0,p=A.count;h<p;h+=3){const g=A.getX(h+0),m=A.getX(h+1),d=A.getX(h+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,m),s.fromBufferAttribute(e,d),c.subVectors(s,r),u.subVectors(i,r),c.cross(u),a.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),l.fromBufferAttribute(t,d),a.add(c),o.add(c),l.add(c),t.setXYZ(g,a.x,a.y,a.z),t.setXYZ(m,o.x,o.y,o.z),t.setXYZ(d,l.x,l.y,l.z)}else for(let h=0,p=e.count;h<p;h+=3)i.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),s.fromBufferAttribute(e,h+2),c.subVectors(s,r),u.subVectors(i,r),c.cross(u),t.setXYZ(h+0,c.x,c.y,c.z),t.setXYZ(h+1,c.x,c.y,c.z),t.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),t.needsUpdate=!0}}normalizeNormals(){const A=this.attributes.normal;for(let e=0,t=A.count;e<t;e++)_e.fromBufferAttribute(A,e),_e.normalize(),A.setXYZ(e,_e.x,_e.y,_e.z)}toNonIndexed(){function A(a,o){const l=a.array,c=a.itemSize,u=a.normalized,h=new l.constructor(o.length*c);let p=0,g=0;for(let m=0,d=o.length;m<d;m++){a.isInterleavedBufferAttribute?p=o[m]*a.data.stride+a.offset:p=o[m]*c;for(let f=0;f<c;f++)h[g++]=l[p++]}return new ft(h,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ln,t=this.index.array,i=this.attributes;for(const a in i){const o=i[a],l=A(o,t);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const o=[],l=r[a];for(let c=0,u=l.length;c<u;c++){const h=l[c],p=A(h,t);o.push(p)}e.morphAttributes[a]=o}e.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,o=s.length;a<o;a++){const l=s[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const A={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),Object.keys(this.userData).length>0&&(A.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const l in o)o[l]!==void 0&&(A[l]=o[l]);return A}A.data={attributes:{}};const e=this.index;e!==null&&(A.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const t=this.attributes;for(const o in t){const l=t[o];A.data.attributes[o]=l.toJSON(A.data)}const i={};let r=!1;for(const o in this.morphAttributes){const l=this.morphAttributes[o],c=[];for(let u=0,h=l.length;u<h;u++){const p=l[u];c.push(p.toJSON(A.data))}c.length>0&&(i[o]=c,r=!0)}r&&(A.data.morphAttributes=i,A.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(A.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(A.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),A}clone(){return new this.constructor().copy(this)}copy(A){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=A.name;const t=A.index;t!==null&&this.setIndex(t.clone(e));const i=A.attributes;for(const l in i){const c=i[l];this.setAttribute(l,c.clone(e))}const r=A.morphAttributes;for(const l in r){const c=[],u=r[l];for(let h=0,p=u.length;h<p;h++)c.push(u[h].clone(e));this.morphAttributes[l]=c}this.morphTargetsRelative=A.morphTargetsRelative;const s=A.groups;for(let l=0,c=s.length;l<c;l++){const u=s[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=A.boundingBox;a!==null&&(this.boundingBox=a.clone());const o=A.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=A.drawRange.start,this.drawRange.count=A.drawRange.count,this.userData=A.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pc=new xe,dn=new lh,Pr=new Al,gc=new I,Xn=new I,Yn=new I,Jn=new I,Ia=new I,Nr=new I,Or=new NA,Gr=new NA,Vr=new NA,mc=new I,Bc=new I,wc=new I,Kr=new I,kr=new I;class Lt extends Je{constructor(A=new ln,e=new el){super(),this.isMesh=!0,this.type="Mesh",this.geometry=A,this.material=e,this.updateMorphTargets()}copy(A,e){return super.copy(A,e),A.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=A.morphTargetInfluences.slice()),A.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},A.morphTargetDictionary)),this.material=Array.isArray(A.material)?A.material.slice():A.material,this.geometry=A.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(A,e){const t=this.geometry,i=t.attributes.position,r=t.morphAttributes.position,s=t.morphTargetsRelative;e.fromBufferAttribute(i,A);const a=this.morphTargetInfluences;if(r&&a){Nr.set(0,0,0);for(let o=0,l=r.length;o<l;o++){const c=a[o],u=r[o];c!==0&&(Ia.fromBufferAttribute(u,A),s?Nr.addScaledVector(Ia,c):Nr.addScaledVector(Ia.sub(e),c))}e.add(Nr)}return e}raycast(A,e){const t=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(t.boundingSphere===null&&t.computeBoundingSphere(),Pr.copy(t.boundingSphere),Pr.applyMatrix4(r),dn.copy(A.ray).recast(A.near),!(Pr.containsPoint(dn.origin)===!1&&(dn.intersectSphere(Pr,gc)===null||dn.origin.distanceToSquared(gc)>(A.far-A.near)**2))&&(pc.copy(r).invert(),dn.copy(A.ray).applyMatrix4(pc),!(t.boundingBox!==null&&dn.intersectsBox(t.boundingBox)===!1)&&this._computeIntersections(A,e,dn)))}_computeIntersections(A,e,t){let i;const r=this.geometry,s=this.material,a=r.index,o=r.attributes.position,l=r.attributes.uv,c=r.attributes.uv1,u=r.attributes.normal,h=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(s))for(let g=0,m=h.length;g<m;g++){const d=h[g],f=s[d.materialIndex],E=Math.max(d.start,p.start),v=Math.min(a.count,Math.min(d.start+d.count,p.start+p.count));for(let C=E,x=v;C<x;C+=3){const y=a.getX(C),U=a.getX(C+1),R=a.getX(C+2);i=zr(this,f,A,t,l,c,u,y,U,R),i&&(i.faceIndex=Math.floor(C/3),i.face.materialIndex=d.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),m=Math.min(a.count,p.start+p.count);for(let d=g,f=m;d<f;d+=3){const E=a.getX(d),v=a.getX(d+1),C=a.getX(d+2);i=zr(this,s,A,t,l,c,u,E,v,C),i&&(i.faceIndex=Math.floor(d/3),e.push(i))}}else if(o!==void 0)if(Array.isArray(s))for(let g=0,m=h.length;g<m;g++){const d=h[g],f=s[d.materialIndex],E=Math.max(d.start,p.start),v=Math.min(o.count,Math.min(d.start+d.count,p.start+p.count));for(let C=E,x=v;C<x;C+=3){const y=C,U=C+1,R=C+2;i=zr(this,f,A,t,l,c,u,y,U,R),i&&(i.faceIndex=Math.floor(C/3),i.face.materialIndex=d.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),m=Math.min(o.count,p.start+p.count);for(let d=g,f=m;d<f;d+=3){const E=d,v=d+1,C=d+2;i=zr(this,s,A,t,l,c,u,E,v,C),i&&(i.faceIndex=Math.floor(d/3),e.push(i))}}}}function vp(n,A,e,t,i,r,s,a){let o;if(A.side===Ve?o=t.intersectTriangle(s,r,i,!0,a):o=t.intersectTriangle(i,r,s,A.side===an,a),o===null)return null;kr.copy(a),kr.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(kr);return l<e.near||l>e.far?null:{distance:l,point:kr.clone(),object:n}}function zr(n,A,e,t,i,r,s,a,o,l){n.getVertexPosition(a,Xn),n.getVertexPosition(o,Yn),n.getVertexPosition(l,Jn);const c=vp(n,A,e,t,Xn,Yn,Jn,Kr);if(c){i&&(Or.fromBufferAttribute(i,a),Gr.fromBufferAttribute(i,o),Vr.fromBufferAttribute(i,l),c.uv=lt.getInterpolation(Kr,Xn,Yn,Jn,Or,Gr,Vr,new NA)),r&&(Or.fromBufferAttribute(r,a),Gr.fromBufferAttribute(r,o),Vr.fromBufferAttribute(r,l),c.uv1=lt.getInterpolation(Kr,Xn,Yn,Jn,Or,Gr,Vr,new NA),c.uv2=c.uv1),s&&(mc.fromBufferAttribute(s,a),Bc.fromBufferAttribute(s,o),wc.fromBufferAttribute(s,l),c.normal=lt.getInterpolation(Kr,Xn,Yn,Jn,mc,Bc,wc,new I),c.normal.dot(t.direction)>0&&c.normal.multiplyScalar(-1));const u={a,b:o,c:l,normal:new I,materialIndex:0};lt.getNormal(Xn,Yn,Jn,u.normal),c.face=u}return c}class Cr extends ln{constructor(A=1,e=1,t=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:A,height:e,depth:t,widthSegments:i,heightSegments:r,depthSegments:s};const a=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);const o=[],l=[],c=[],u=[];let h=0,p=0;g("z","y","x",-1,-1,t,e,A,s,r,0),g("z","y","x",1,-1,t,e,-A,s,r,1),g("x","z","y",1,1,A,t,e,i,s,2),g("x","z","y",1,-1,A,t,-e,i,s,3),g("x","y","z",1,-1,A,e,t,i,r,4),g("x","y","z",-1,-1,A,e,-t,i,r,5),this.setIndex(o),this.setAttribute("position",new ht(l,3)),this.setAttribute("normal",new ht(c,3)),this.setAttribute("uv",new ht(u,2));function g(m,d,f,E,v,C,x,y,U,R,B){const F=C/U,k=x/R,Y=C/2,X=x/2,T=y/2,O=U+1,W=R+1;let K=0,j=0;const Z=new I;for(let J=0;J<W;J++){const Q=J*k-X;for(let N=0;N<O;N++){const sA=N*F-Y;Z[m]=sA*E,Z[d]=Q*v,Z[f]=T,l.push(Z.x,Z.y,Z.z),Z[m]=0,Z[d]=0,Z[f]=y>0?1:-1,c.push(Z.x,Z.y,Z.z),u.push(N/U),u.push(1-J/R),K+=1}}for(let J=0;J<R;J++)for(let Q=0;Q<U;Q++){const N=h+Q+O*J,sA=h+Q+O*(J+1),lA=h+(Q+1)+O*(J+1),cA=h+(Q+1)+O*J;o.push(N,sA,cA),o.push(sA,lA,cA),j+=6}a.addGroup(p,j,B),p+=j,h+=K}}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new Cr(A.width,A.height,A.depth,A.widthSegments,A.heightSegments,A.depthSegments)}}function yi(n){const A={};for(const e in n){A[e]={};for(const t in n[e]){const i=n[e][t];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),A[e][t]=null):A[e][t]=i.clone():Array.isArray(i)?A[e][t]=i.slice():A[e][t]=i}}return A}function De(n){const A={};for(let e=0;e<n.length;e++){const t=yi(n[e]);for(const i in t)A[i]=t[i]}return A}function _p(n){const A=[];for(let e=0;e<n.length;e++)A.push(n[e].clone());return A}function dh(n){return n.getRenderTarget()===null?n.outputColorSpace:ZA.workingColorSpace}const Cp={clone:yi,merge:De};var Ep=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class In extends Ys{constructor(A){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ep,this.fragmentShader=xp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,A!==void 0&&this.setValues(A)}copy(A){return super.copy(A),this.fragmentShader=A.fragmentShader,this.vertexShader=A.vertexShader,this.uniforms=yi(A.uniforms),this.uniformsGroups=_p(A.uniformsGroups),this.defines=Object.assign({},A.defines),this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.fog=A.fog,this.lights=A.lights,this.clipping=A.clipping,this.extensions=Object.assign({},A.extensions),this.glslVersion=A.glslVersion,this}toJSON(A){const e=super.toJSON(A);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?e.uniforms[i]={type:"t",value:s.toJSON(A).uuid}:s&&s.isColor?e.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[i]={type:"m4",value:s.toArray()}:e.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const t={};for(const i in this.extensions)this.extensions[i]===!0&&(t[i]=!0);return Object.keys(t).length>0&&(e.extensions=t),e}}class ph extends Je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=It}copy(A,e){return super.copy(A,e),this.matrixWorldInverse.copy(A.matrixWorldInverse),this.projectionMatrix.copy(A.projectionMatrix),this.projectionMatrixInverse.copy(A.projectionMatrixInverse),this.coordinateSystem=A.coordinateSystem,this}getWorldDirection(A){return super.getWorldDirection(A).negate()}updateMatrixWorld(A){super.updateMatrixWorld(A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(A,e){super.updateWorldMatrix(A,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class At extends ph{constructor(A=50,e=1,t=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=A,this.zoom=1,this.near=t,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(A,e){return super.copy(A,e),this.fov=A.fov,this.zoom=A.zoom,this.near=A.near,this.far=A.far,this.focus=A.focus,this.aspect=A.aspect,this.view=A.view===null?null:Object.assign({},A.view),this.filmGauge=A.filmGauge,this.filmOffset=A.filmOffset,this}setFocalLength(A){const e=.5*this.getFilmHeight()/A;this.fov=lr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const A=Math.tan(Zi*.5*this.fov);return .5*this.getFilmHeight()/A}getEffectiveFOV(){return lr*2*Math.atan(Math.tan(Zi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(A,e,t,i,r,s){this.aspect=A/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=e,this.view.offsetX=t,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=this.near;let e=A*Math.tan(Zi*.5*this.fov)/this.zoom,t=2*e,i=this.aspect*t,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const o=s.fullWidth,l=s.fullHeight;r+=s.offsetX*i/o,e-=s.offsetY*t/l,i*=s.width/o,t*=s.height/l}const a=this.filmOffset;a!==0&&(r+=A*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-t,A,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const e=super.toJSON(A);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Zn=-90,qn=1;class Up extends Je{constructor(A,e,t){super(),this.type="CubeCamera",this.renderTarget=t,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new At(Zn,qn,A,e);i.layers=this.layers,this.add(i);const r=new At(Zn,qn,A,e);r.layers=this.layers,this.add(r);const s=new At(Zn,qn,A,e);s.layers=this.layers,this.add(s);const a=new At(Zn,qn,A,e);a.layers=this.layers,this.add(a);const o=new At(Zn,qn,A,e);o.layers=this.layers,this.add(o);const l=new At(Zn,qn,A,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const A=this.coordinateSystem,e=this.children.concat(),[t,i,r,s,a,o]=e;for(const l of e)this.remove(l);if(A===It)t.up.set(0,1,0),t.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(A===bs)t.up.set(0,-1,0),t.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+A);for(const l of e)this.add(l),l.updateMatrixWorld()}update(A,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:t,activeMipmapLevel:i}=this;this.coordinateSystem!==A.coordinateSystem&&(this.coordinateSystem=A.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,o,l,c]=this.children,u=A.getRenderTarget(),h=A.getActiveCubeFace(),p=A.getActiveMipmapLevel(),g=A.xr.enabled;A.xr.enabled=!1;const m=t.texture.generateMipmaps;t.texture.generateMipmaps=!1,A.setRenderTarget(t,0,i),A.render(e,r),A.setRenderTarget(t,1,i),A.render(e,s),A.setRenderTarget(t,2,i),A.render(e,a),A.setRenderTarget(t,3,i),A.render(e,o),A.setRenderTarget(t,4,i),A.render(e,l),t.texture.generateMipmaps=m,A.setRenderTarget(t,5,i),A.render(e,c),A.setRenderTarget(u,h,p),A.xr.enabled=g,t.texture.needsPMREMUpdate=!0}}class gh extends Ye{constructor(A,e,t,i,r,s,a,o,l,c){A=A!==void 0?A:[],e=e!==void 0?e:Ei,super(A,e,t,i,r,s,a,o,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(A){this.image=A}}class yp extends Tn{constructor(A=1,e={}){super(A,A,e),this.isWebGLCubeRenderTarget=!0;const t={width:A,height:A,depth:1},i=[t,t,t,t,t,t];e.encoding!==void 0&&($i("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Fn?ye:tt),this.texture=new gh(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:je}fromEquirectangularTexture(A,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const t={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Cr(5,5,5),r=new In({name:"CubemapFromEquirect",uniforms:yi(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:Ve,blending:en});r.uniforms.tEquirect.value=e;const s=new Lt(i,r),a=e.minFilter;return e.minFilter===ar&&(e.minFilter=je),new Up(1,10,this).update(A,s),e.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(A,e,t,i){const r=A.getRenderTarget();for(let s=0;s<6;s++)A.setRenderTarget(this,s),A.clear(e,t,i);A.setRenderTarget(r)}}const La=new I,Sp=new I,Fp=new GA;class zt{constructor(A=new I(1,0,0),e=0){this.isPlane=!0,this.normal=A,this.constant=e}set(A,e){return this.normal.copy(A),this.constant=e,this}setComponents(A,e,t,i){return this.normal.set(A,e,t),this.constant=i,this}setFromNormalAndCoplanarPoint(A,e){return this.normal.copy(A),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(A,e,t){const i=La.subVectors(t,e).cross(Sp.subVectors(A,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,A),this}copy(A){return this.normal.copy(A.normal),this.constant=A.constant,this}normalize(){const A=1/this.normal.length();return this.normal.multiplyScalar(A),this.constant*=A,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(A){return this.normal.dot(A)+this.constant}distanceToSphere(A){return this.distanceToPoint(A.center)-A.radius}projectPoint(A,e){return e.copy(A).addScaledVector(this.normal,-this.distanceToPoint(A))}intersectLine(A,e){const t=A.delta(La),i=this.normal.dot(t);if(i===0)return this.distanceToPoint(A.start)===0?e.copy(A.start):null;const r=-(A.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(A.start).addScaledVector(t,r)}intersectsLine(A){const e=this.distanceToPoint(A.start),t=this.distanceToPoint(A.end);return e<0&&t>0||t<0&&e>0}intersectsBox(A){return A.intersectsPlane(this)}intersectsSphere(A){return A.intersectsPlane(this)}coplanarPoint(A){return A.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(A,e){const t=e||Fp.getNormalMatrix(A),i=this.coplanarPoint(La).applyMatrix4(A),r=this.normal.applyMatrix3(t).normalize();return this.constant=-i.dot(r),this}translate(A){return this.constant-=A.dot(this.normal),this}equals(A){return A.normal.equals(this.normal)&&A.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pn=new Al,Wr=new I;class mh{constructor(A=new zt,e=new zt,t=new zt,i=new zt,r=new zt,s=new zt){this.planes=[A,e,t,i,r,s]}set(A,e,t,i,r,s){const a=this.planes;return a[0].copy(A),a[1].copy(e),a[2].copy(t),a[3].copy(i),a[4].copy(r),a[5].copy(s),this}copy(A){const e=this.planes;for(let t=0;t<6;t++)e[t].copy(A.planes[t]);return this}setFromProjectionMatrix(A,e=It){const t=this.planes,i=A.elements,r=i[0],s=i[1],a=i[2],o=i[3],l=i[4],c=i[5],u=i[6],h=i[7],p=i[8],g=i[9],m=i[10],d=i[11],f=i[12],E=i[13],v=i[14],C=i[15];if(t[0].setComponents(o-r,h-l,d-p,C-f).normalize(),t[1].setComponents(o+r,h+l,d+p,C+f).normalize(),t[2].setComponents(o+s,h+c,d+g,C+E).normalize(),t[3].setComponents(o-s,h-c,d-g,C-E).normalize(),t[4].setComponents(o-a,h-u,d-m,C-v).normalize(),e===It)t[5].setComponents(o+a,h+u,d+m,C+v).normalize();else if(e===bs)t[5].setComponents(a,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(A){if(A.boundingSphere!==void 0)A.boundingSphere===null&&A.computeBoundingSphere(),pn.copy(A.boundingSphere).applyMatrix4(A.matrixWorld);else{const e=A.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),pn.copy(e.boundingSphere).applyMatrix4(A.matrixWorld)}return this.intersectsSphere(pn)}intersectsSprite(A){return pn.center.set(0,0,0),pn.radius=.7071067811865476,pn.applyMatrix4(A.matrixWorld),this.intersectsSphere(pn)}intersectsSphere(A){const e=this.planes,t=A.center,i=-A.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(t)<i)return!1;return!0}intersectsBox(A){const e=this.planes;for(let t=0;t<6;t++){const i=e[t];if(Wr.x=i.normal.x>0?A.max.x:A.min.x,Wr.y=i.normal.y>0?A.max.y:A.min.y,Wr.z=i.normal.z>0?A.max.z:A.min.z,i.distanceToPoint(Wr)<0)return!1}return!0}containsPoint(A){const e=this.planes;for(let t=0;t<6;t++)if(e[t].distanceToPoint(A)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Bh(){let n=null,A=!1,e=null,t=null;function i(r,s){e(r,s),t=n.requestAnimationFrame(i)}return{start:function(){A!==!0&&e!==null&&(t=n.requestAnimationFrame(i),A=!0)},stop:function(){n.cancelAnimationFrame(t),A=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Mp(n,A){const e=A.isWebGL2,t=new WeakMap;function i(l,c){const u=l.array,h=l.usage,p=n.createBuffer();n.bindBuffer(c,p),n.bufferData(c,u,h),l.onUploadCallback();let g;if(u instanceof Float32Array)g=n.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=n.SHORT;else if(u instanceof Uint32Array)g=n.UNSIGNED_INT;else if(u instanceof Int32Array)g=n.INT;else if(u instanceof Int8Array)g=n.BYTE;else if(u instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version}}function r(l,c,u){const h=c.array,p=c.updateRange;n.bindBuffer(u,l),p.count===-1?n.bufferSubData(u,0,h):(e?n.bufferSubData(u,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):n.bufferSubData(u,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=t.get(l);c&&(n.deleteBuffer(c.buffer),t.delete(l))}function o(l,c){if(l.isGLBufferAttribute){const h=t.get(l);(!h||h.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=t.get(l);u===void 0?t.set(l,i(l,c)):u.version<l.version&&(r(u.buffer,l,c),u.version=l.version)}return{get:s,remove:a,update:o}}class tl extends ln{constructor(A=1,e=1,t=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:A,height:e,widthSegments:t,heightSegments:i};const r=A/2,s=e/2,a=Math.floor(t),o=Math.floor(i),l=a+1,c=o+1,u=A/a,h=e/o,p=[],g=[],m=[],d=[];for(let f=0;f<c;f++){const E=f*h-s;for(let v=0;v<l;v++){const C=v*u-r;g.push(C,-E,0),m.push(0,0,1),d.push(v/a),d.push(1-f/o)}}for(let f=0;f<o;f++)for(let E=0;E<a;E++){const v=E+l*f,C=E+l*(f+1),x=E+1+l*(f+1),y=E+1+l*f;p.push(v,C,y),p.push(C,x,y)}this.setIndex(p),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(m,3)),this.setAttribute("uv",new ht(d,2))}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new tl(A.width,A.height,A.widthSegments,A.heightSegments)}}var bp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tp=`#ifdef USE_ALPHAHASH
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
#endif`,Qp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ip=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Rp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hp=`#ifdef USE_AOMAP
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
#endif`,Pp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Np=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Op=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gp=`#ifdef USE_IRIDESCENCE
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
#endif`,Vp=`#ifdef USE_BUMPMAP
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
#endif`,Kp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Zp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,qp=`#define PI 3.141592653589793
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
} // validated`,$p=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jp=`vec3 transformedNormal = objectNormal;
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
#endif`,Ag=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ng=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ig="gl_FragColor = linearToOutputTexel( gl_FragColor );",rg=`
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
}`,sg=`#ifdef USE_ENVMAP
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
#endif`,ag=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,og=`#ifdef USE_ENVMAP
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
#endif`,lg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cg=`#ifdef USE_ENVMAP
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
#endif`,hg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pg=`#ifdef USE_GRADIENTMAP
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
}`,gg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,mg=`#ifdef USE_LIGHTMAP
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
#endif`,_g=`#ifdef USE_ENVMAP
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
#endif`,Sg=`struct PhysicalMaterial {
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
}`,Fg=`
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
#endif`,Mg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Tg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ig=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Lg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Rg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vg=`#ifdef USE_MORPHNORMALS
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
#endif`,Kg=`#ifdef USE_MORPHTARGETS
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
#endif`,kg=`#ifdef USE_MORPHTARGETS
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
#endif`,zg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zg=`#ifdef USE_NORMALMAP
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
#endif`,qg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$g=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,A0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,e0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,t0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,n0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,i0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,r0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,s0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,a0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,o0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,l0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,c0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,h0=`float getShadowMask() {
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
}`,f0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,d0=`#ifdef USE_SKINNING
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
#endif`,p0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,g0=`#ifdef USE_SKINNING
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
#endif`,m0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,B0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,w0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,v0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_0=`#ifdef USE_TRANSMISSION
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
#endif`,C0=`#ifdef USE_TRANSMISSION
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
#endif`,E0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,x0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const S0=`varying vec2 vUv;
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
}`,M0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,T0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I0=`#include <common>
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
}`,L0=`#if DEPTH_PACKING == 3200
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
}`,R0=`#define DISTANCE
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
}`,D0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,P0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N0=`uniform float scale;
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
}`,O0=`uniform vec3 diffuse;
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
}`,G0=`#include <common>
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
}`,V0=`uniform vec3 diffuse;
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
}`,K0=`#define LAMBERT
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
}`,k0=`#define LAMBERT
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
}`,z0=`#define MATCAP
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
}`,W0=`#define MATCAP
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
}`,X0=`#define NORMAL
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
}`,Y0=`#define NORMAL
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
}`,J0=`#define PHONG
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
}`,Z0=`#define PHONG
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
}`,q0=`#define STANDARD
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
}`,$0=`#define STANDARD
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
}`,j0=`#define TOON
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
}`,Am=`#define TOON
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
}`,em=`uniform float size;
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
}`,tm=`uniform vec3 diffuse;
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
}`,nm=`#include <common>
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
}`,im=`uniform vec3 color;
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
}`,rm=`uniform float rotation;
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
}`,sm=`uniform vec3 diffuse;
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
}`,PA={alphahash_fragment:bp,alphahash_pars_fragment:Tp,alphamap_fragment:Qp,alphamap_pars_fragment:Ip,alphatest_fragment:Lp,alphatest_pars_fragment:Rp,aomap_fragment:Hp,aomap_pars_fragment:Dp,begin_vertex:Pp,beginnormal_vertex:Np,bsdfs:Op,iridescence_fragment:Gp,bumpmap_pars_fragment:Vp,clipping_planes_fragment:Kp,clipping_planes_pars_fragment:kp,clipping_planes_pars_vertex:zp,clipping_planes_vertex:Wp,color_fragment:Xp,color_pars_fragment:Yp,color_pars_vertex:Jp,color_vertex:Zp,common:qp,cube_uv_reflection_fragment:$p,defaultnormal_vertex:jp,displacementmap_pars_vertex:Ag,displacementmap_vertex:eg,emissivemap_fragment:tg,emissivemap_pars_fragment:ng,colorspace_fragment:ig,colorspace_pars_fragment:rg,envmap_fragment:sg,envmap_common_pars_fragment:ag,envmap_pars_fragment:og,envmap_pars_vertex:lg,envmap_physical_pars_fragment:_g,envmap_vertex:cg,fog_vertex:ug,fog_pars_vertex:hg,fog_fragment:fg,fog_pars_fragment:dg,gradientmap_pars_fragment:pg,lightmap_fragment:gg,lightmap_pars_fragment:mg,lights_lambert_fragment:Bg,lights_lambert_pars_fragment:wg,lights_pars_begin:vg,lights_toon_fragment:Cg,lights_toon_pars_fragment:Eg,lights_phong_fragment:xg,lights_phong_pars_fragment:Ug,lights_physical_fragment:yg,lights_physical_pars_fragment:Sg,lights_fragment_begin:Fg,lights_fragment_maps:Mg,lights_fragment_end:bg,logdepthbuf_fragment:Tg,logdepthbuf_pars_fragment:Qg,logdepthbuf_pars_vertex:Ig,logdepthbuf_vertex:Lg,map_fragment:Rg,map_pars_fragment:Hg,map_particle_fragment:Dg,map_particle_pars_fragment:Pg,metalnessmap_fragment:Ng,metalnessmap_pars_fragment:Og,morphcolor_vertex:Gg,morphnormal_vertex:Vg,morphtarget_pars_vertex:Kg,morphtarget_vertex:kg,normal_fragment_begin:zg,normal_fragment_maps:Wg,normal_pars_fragment:Xg,normal_pars_vertex:Yg,normal_vertex:Jg,normalmap_pars_fragment:Zg,clearcoat_normal_fragment_begin:qg,clearcoat_normal_fragment_maps:$g,clearcoat_pars_fragment:jg,iridescence_pars_fragment:A0,opaque_fragment:e0,packing:t0,premultiplied_alpha_fragment:n0,project_vertex:i0,dithering_fragment:r0,dithering_pars_fragment:s0,roughnessmap_fragment:a0,roughnessmap_pars_fragment:o0,shadowmap_pars_fragment:l0,shadowmap_pars_vertex:c0,shadowmap_vertex:u0,shadowmask_pars_fragment:h0,skinbase_vertex:f0,skinning_pars_vertex:d0,skinning_vertex:p0,skinnormal_vertex:g0,specularmap_fragment:m0,specularmap_pars_fragment:B0,tonemapping_fragment:w0,tonemapping_pars_fragment:v0,transmission_fragment:_0,transmission_pars_fragment:C0,uv_pars_fragment:E0,uv_pars_vertex:x0,uv_vertex:U0,worldpos_vertex:y0,background_vert:S0,background_frag:F0,backgroundCube_vert:M0,backgroundCube_frag:b0,cube_vert:T0,cube_frag:Q0,depth_vert:I0,depth_frag:L0,distanceRGBA_vert:R0,distanceRGBA_frag:H0,equirect_vert:D0,equirect_frag:P0,linedashed_vert:N0,linedashed_frag:O0,meshbasic_vert:G0,meshbasic_frag:V0,meshlambert_vert:K0,meshlambert_frag:k0,meshmatcap_vert:z0,meshmatcap_frag:W0,meshnormal_vert:X0,meshnormal_frag:Y0,meshphong_vert:J0,meshphong_frag:Z0,meshphysical_vert:q0,meshphysical_frag:$0,meshtoon_vert:j0,meshtoon_frag:Am,points_vert:em,points_frag:tm,shadow_vert:nm,shadow_frag:im,sprite_vert:rm,sprite_frag:sm},oA={common:{diffuse:{value:new YA(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new GA},alphaMap:{value:null},alphaMapTransform:{value:new GA},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new GA}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new GA}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new GA}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new GA},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new GA},normalScale:{value:new NA(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new GA},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new GA}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new GA}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new GA}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new YA(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new YA(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new GA},alphaTest:{value:0},uvTransform:{value:new GA}},sprite:{diffuse:{value:new YA(16777215)},opacity:{value:1},center:{value:new NA(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new GA},alphaMap:{value:null},alphaMapTransform:{value:new GA},alphaTest:{value:0}}},Bt={basic:{uniforms:De([oA.common,oA.specularmap,oA.envmap,oA.aomap,oA.lightmap,oA.fog]),vertexShader:PA.meshbasic_vert,fragmentShader:PA.meshbasic_frag},lambert:{uniforms:De([oA.common,oA.specularmap,oA.envmap,oA.aomap,oA.lightmap,oA.emissivemap,oA.bumpmap,oA.normalmap,oA.displacementmap,oA.fog,oA.lights,{emissive:{value:new YA(0)}}]),vertexShader:PA.meshlambert_vert,fragmentShader:PA.meshlambert_frag},phong:{uniforms:De([oA.common,oA.specularmap,oA.envmap,oA.aomap,oA.lightmap,oA.emissivemap,oA.bumpmap,oA.normalmap,oA.displacementmap,oA.fog,oA.lights,{emissive:{value:new YA(0)},specular:{value:new YA(1118481)},shininess:{value:30}}]),vertexShader:PA.meshphong_vert,fragmentShader:PA.meshphong_frag},standard:{uniforms:De([oA.common,oA.envmap,oA.aomap,oA.lightmap,oA.emissivemap,oA.bumpmap,oA.normalmap,oA.displacementmap,oA.roughnessmap,oA.metalnessmap,oA.fog,oA.lights,{emissive:{value:new YA(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:PA.meshphysical_vert,fragmentShader:PA.meshphysical_frag},toon:{uniforms:De([oA.common,oA.aomap,oA.lightmap,oA.emissivemap,oA.bumpmap,oA.normalmap,oA.displacementmap,oA.gradientmap,oA.fog,oA.lights,{emissive:{value:new YA(0)}}]),vertexShader:PA.meshtoon_vert,fragmentShader:PA.meshtoon_frag},matcap:{uniforms:De([oA.common,oA.bumpmap,oA.normalmap,oA.displacementmap,oA.fog,{matcap:{value:null}}]),vertexShader:PA.meshmatcap_vert,fragmentShader:PA.meshmatcap_frag},points:{uniforms:De([oA.points,oA.fog]),vertexShader:PA.points_vert,fragmentShader:PA.points_frag},dashed:{uniforms:De([oA.common,oA.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:PA.linedashed_vert,fragmentShader:PA.linedashed_frag},depth:{uniforms:De([oA.common,oA.displacementmap]),vertexShader:PA.depth_vert,fragmentShader:PA.depth_frag},normal:{uniforms:De([oA.common,oA.bumpmap,oA.normalmap,oA.displacementmap,{opacity:{value:1}}]),vertexShader:PA.meshnormal_vert,fragmentShader:PA.meshnormal_frag},sprite:{uniforms:De([oA.sprite,oA.fog]),vertexShader:PA.sprite_vert,fragmentShader:PA.sprite_frag},background:{uniforms:{uvTransform:{value:new GA},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:PA.background_vert,fragmentShader:PA.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:PA.backgroundCube_vert,fragmentShader:PA.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:PA.cube_vert,fragmentShader:PA.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:PA.equirect_vert,fragmentShader:PA.equirect_frag},distanceRGBA:{uniforms:De([oA.common,oA.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:PA.distanceRGBA_vert,fragmentShader:PA.distanceRGBA_frag},shadow:{uniforms:De([oA.lights,oA.fog,{color:{value:new YA(0)},opacity:{value:1}}]),vertexShader:PA.shadow_vert,fragmentShader:PA.shadow_frag}};Bt.physical={uniforms:De([Bt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new GA},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new GA},clearcoatNormalScale:{value:new NA(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new GA},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new GA},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new GA},sheen:{value:0},sheenColor:{value:new YA(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new GA},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new GA},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new GA},transmissionSamplerSize:{value:new NA},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new GA},attenuationDistance:{value:0},attenuationColor:{value:new YA(0)},specularColor:{value:new YA(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new GA},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new GA},anisotropyVector:{value:new NA},anisotropyMap:{value:null},anisotropyMapTransform:{value:new GA}}]),vertexShader:PA.meshphysical_vert,fragmentShader:PA.meshphysical_frag};const Xr={r:0,b:0,g:0};function am(n,A,e,t,i,r,s){const a=new YA(0);let o=r===!0?0:1,l,c,u=null,h=0,p=null;function g(d,f){let E=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?e:A).get(v)),v===null?m(a,o):v&&v.isColor&&(m(v,1),E=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||E)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===zs)?(c===void 0&&(c=new Lt(new Cr(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:yi(Bt.backgroundCube.uniforms),vertexShader:Bt.backgroundCube.vertexShader,fragmentShader:Bt.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(x,y,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=ZA.getTransfer(v.colorSpace)!==ne,(u!==v||h!==v.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,h=v.version,p=n.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Lt(new tl(2,2),new In({name:"BackgroundMaterial",uniforms:yi(Bt.background.uniforms),vertexShader:Bt.background.vertexShader,fragmentShader:Bt.background.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=ZA.getTransfer(v.colorSpace)!==ne,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,u=v,h=v.version,p=n.toneMapping),l.layers.enableAll(),d.unshift(l,l.geometry,l.material,0,0,null))}function m(d,f){d.getRGB(Xr,dh(n)),t.buffers.color.setClear(Xr.r,Xr.g,Xr.b,f,s)}return{getClearColor:function(){return a},setClearColor:function(d,f=1){a.set(d),o=f,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(d){o=d,m(a,o)},render:g}}function om(n,A,e,t){const i=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=t.isWebGL2?null:A.get("OES_vertex_array_object"),s=t.isWebGL2||r!==null,a={},o=d(null);let l=o,c=!1;function u(T,O,W,K,j){let Z=!1;if(s){const J=m(K,W,O);l!==J&&(l=J,p(l.object)),Z=f(T,K,W,j),Z&&E(T,K,W,j)}else{const J=O.wireframe===!0;(l.geometry!==K.id||l.program!==W.id||l.wireframe!==J)&&(l.geometry=K.id,l.program=W.id,l.wireframe=J,Z=!0)}j!==null&&e.update(j,n.ELEMENT_ARRAY_BUFFER),(Z||c)&&(c=!1,R(T,O,W,K),j!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function h(){return t.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function p(T){return t.isWebGL2?n.bindVertexArray(T):r.bindVertexArrayOES(T)}function g(T){return t.isWebGL2?n.deleteVertexArray(T):r.deleteVertexArrayOES(T)}function m(T,O,W){const K=W.wireframe===!0;let j=a[T.id];j===void 0&&(j={},a[T.id]=j);let Z=j[O.id];Z===void 0&&(Z={},j[O.id]=Z);let J=Z[K];return J===void 0&&(J=d(h()),Z[K]=J),J}function d(T){const O=[],W=[],K=[];for(let j=0;j<i;j++)O[j]=0,W[j]=0,K[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:W,attributeDivisors:K,object:T,attributes:{},index:null}}function f(T,O,W,K){const j=l.attributes,Z=O.attributes;let J=0;const Q=W.getAttributes();for(const N in Q)if(Q[N].location>=0){const lA=j[N];let cA=Z[N];if(cA===void 0&&(N==="instanceMatrix"&&T.instanceMatrix&&(cA=T.instanceMatrix),N==="instanceColor"&&T.instanceColor&&(cA=T.instanceColor)),lA===void 0||lA.attribute!==cA||cA&&lA.data!==cA.data)return!0;J++}return l.attributesNum!==J||l.index!==K}function E(T,O,W,K){const j={},Z=O.attributes;let J=0;const Q=W.getAttributes();for(const N in Q)if(Q[N].location>=0){let lA=Z[N];lA===void 0&&(N==="instanceMatrix"&&T.instanceMatrix&&(lA=T.instanceMatrix),N==="instanceColor"&&T.instanceColor&&(lA=T.instanceColor));const cA={};cA.attribute=lA,lA&&lA.data&&(cA.data=lA.data),j[N]=cA,J++}l.attributes=j,l.attributesNum=J,l.index=K}function v(){const T=l.newAttributes;for(let O=0,W=T.length;O<W;O++)T[O]=0}function C(T){x(T,0)}function x(T,O){const W=l.newAttributes,K=l.enabledAttributes,j=l.attributeDivisors;W[T]=1,K[T]===0&&(n.enableVertexAttribArray(T),K[T]=1),j[T]!==O&&((t.isWebGL2?n:A.get("ANGLE_instanced_arrays"))[t.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](T,O),j[T]=O)}function y(){const T=l.newAttributes,O=l.enabledAttributes;for(let W=0,K=O.length;W<K;W++)O[W]!==T[W]&&(n.disableVertexAttribArray(W),O[W]=0)}function U(T,O,W,K,j,Z,J){J===!0?n.vertexAttribIPointer(T,O,W,j,Z):n.vertexAttribPointer(T,O,W,K,j,Z)}function R(T,O,W,K){if(t.isWebGL2===!1&&(T.isInstancedMesh||K.isInstancedBufferGeometry)&&A.get("ANGLE_instanced_arrays")===null)return;v();const j=K.attributes,Z=W.getAttributes(),J=O.defaultAttributeValues;for(const Q in Z){const N=Z[Q];if(N.location>=0){let sA=j[Q];if(sA===void 0&&(Q==="instanceMatrix"&&T.instanceMatrix&&(sA=T.instanceMatrix),Q==="instanceColor"&&T.instanceColor&&(sA=T.instanceColor)),sA!==void 0){const lA=sA.normalized,cA=sA.itemSize,_A=e.get(sA);if(_A===void 0)continue;const TA=_A.buffer,SA=_A.type,QA=_A.bytesPerElement,te=t.isWebGL2===!0&&(SA===n.INT||SA===n.UNSIGNED_INT||sA.gpuType===$u);if(sA.isInterleavedBufferAttribute){const DA=sA.data,H=DA.stride,Me=sA.offset;if(DA.isInstancedInterleavedBuffer){for(let EA=0;EA<N.locationSize;EA++)x(N.location+EA,DA.meshPerAttribute);T.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=DA.meshPerAttribute*DA.count)}else for(let EA=0;EA<N.locationSize;EA++)C(N.location+EA);n.bindBuffer(n.ARRAY_BUFFER,TA);for(let EA=0;EA<N.locationSize;EA++)U(N.location+EA,cA/N.locationSize,SA,lA,H*QA,(Me+cA/N.locationSize*EA)*QA,te)}else{if(sA.isInstancedBufferAttribute){for(let DA=0;DA<N.locationSize;DA++)x(N.location+DA,sA.meshPerAttribute);T.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=sA.meshPerAttribute*sA.count)}else for(let DA=0;DA<N.locationSize;DA++)C(N.location+DA);n.bindBuffer(n.ARRAY_BUFFER,TA);for(let DA=0;DA<N.locationSize;DA++)U(N.location+DA,cA/N.locationSize,SA,lA,cA*QA,cA/N.locationSize*DA*QA,te)}}else if(J!==void 0){const lA=J[Q];if(lA!==void 0)switch(lA.length){case 2:n.vertexAttrib2fv(N.location,lA);break;case 3:n.vertexAttrib3fv(N.location,lA);break;case 4:n.vertexAttrib4fv(N.location,lA);break;default:n.vertexAttrib1fv(N.location,lA)}}}}y()}function B(){Y();for(const T in a){const O=a[T];for(const W in O){const K=O[W];for(const j in K)g(K[j].object),delete K[j];delete O[W]}delete a[T]}}function F(T){if(a[T.id]===void 0)return;const O=a[T.id];for(const W in O){const K=O[W];for(const j in K)g(K[j].object),delete K[j];delete O[W]}delete a[T.id]}function k(T){for(const O in a){const W=a[O];if(W[T.id]===void 0)continue;const K=W[T.id];for(const j in K)g(K[j].object),delete K[j];delete W[T.id]}}function Y(){X(),c=!0,l!==o&&(l=o,p(l.object))}function X(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:u,reset:Y,resetDefaultState:X,dispose:B,releaseStatesOfGeometry:F,releaseStatesOfProgram:k,initAttributes:v,enableAttribute:C,disableUnusedAttributes:y}}function lm(n,A,e,t){const i=t.isWebGL2;let r;function s(l){r=l}function a(l,c){n.drawArrays(r,l,c),e.update(c,r,1)}function o(l,c,u){if(u===0)return;let h,p;if(i)h=n,p="drawArraysInstanced";else if(h=A.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](r,l,c,u),e.update(c,r,u)}this.setMode=s,this.render=a,this.renderInstances=o}function cm(n,A,e){let t;function i(){if(t!==void 0)return t;if(A.has("EXT_texture_filter_anisotropic")===!0){const U=A.get("EXT_texture_filter_anisotropic");t=n.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else t=0;return t}function r(U){if(U==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const o=r(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);const l=s||A.has("WEBGL_draw_buffers"),c=e.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),d=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,C=s||A.has("OES_texture_float"),x=v&&C,y=s?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:c,maxTextures:u,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:d,maxVaryings:f,maxFragmentUniforms:E,vertexTextures:v,floatFragmentTextures:C,floatVertexTextures:x,maxSamples:y}}function um(n){const A=this;let e=null,t=0,i=!1,r=!1;const s=new zt,a=new GA,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const p=u.length!==0||h||t!==0||i;return i=h,t=u.length,p},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,h){e=c(u,h,0)},this.setState=function(u,h,p){const g=u.clippingPlanes,m=u.clipIntersection,d=u.clipShadows,f=n.get(u);if(!i||g===null||g.length===0||r&&!d)r?c(null):l();else{const E=r?0:t,v=E*4;let C=f.clippingState||null;o.value=C,C=c(g,h,v,p);for(let x=0;x!==v;++x)C[x]=e[x];f.clippingState=C,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=E}};function l(){o.value!==e&&(o.value=e,o.needsUpdate=t>0),A.numPlanes=t,A.numIntersection=0}function c(u,h,p,g){const m=u!==null?u.length:0;let d=null;if(m!==0){if(d=o.value,g!==!0||d===null){const f=p+m*4,E=h.matrixWorldInverse;a.getNormalMatrix(E),(d===null||d.length<f)&&(d=new Float32Array(f));for(let v=0,C=p;v!==m;++v,C+=4)s.copy(u[v]).applyMatrix4(E,a),s.normal.toArray(d,C),d[C+3]=s.constant}o.value=d,o.needsUpdate=!0}return A.numPlanes=m,A.numIntersection=0,d}}function hm(n){let A=new WeakMap;function e(s,a){return a===Bo?s.mapping=Ei:a===wo&&(s.mapping=xi),s}function t(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const a=s.mapping;if(a===Bo||a===wo)if(A.has(s)){const o=A.get(s).texture;return e(o,s.mapping)}else{const o=s.image;if(o&&o.height>0){const l=new yp(o.height/2);return l.fromEquirectangularTexture(n,s),A.set(s,l),s.addEventListener("dispose",i),e(l.texture,s.mapping)}else return null}}return s}function i(s){const a=s.target;a.removeEventListener("dispose",i);const o=A.get(a);o!==void 0&&(A.delete(a),o.dispose())}function r(){A=new WeakMap}return{get:t,dispose:r}}class fm extends ph{constructor(A=-1,e=1,t=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=A,this.right=e,this.top=t,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(A,e){return super.copy(A,e),this.left=A.left,this.right=A.right,this.top=A.top,this.bottom=A.bottom,this.near=A.near,this.far=A.far,this.zoom=A.zoom,this.view=A.view===null?null:Object.assign({},A.view),this}setViewOffset(A,e,t,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=e,this.view.offsetX=t,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),t=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=t-A,s=t+A,a=i+e,o=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,s=r+l*this.view.width,a-=c*this.view.offsetY,o=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const e=super.toJSON(A);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const li=4,vc=[.125,.215,.35,.446,.526,.582],wn=20,Ra=new fm,_c=new YA;let Ha=null,Da=0,Pa=0;const mn=(1+Math.sqrt(5))/2,$n=1/mn,Cc=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,mn,$n),new I(0,mn,-$n),new I($n,0,mn),new I(-$n,0,mn),new I(mn,$n,0),new I(-mn,$n,0)];class Ec{constructor(A){this._renderer=A,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(A,e=0,t=.1,i=100){Ha=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),Pa=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(A,t,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(A,e=null){return this._fromTexture(A,e)}fromCubemap(A,e=null){return this._fromTexture(A,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(A){this._lodMax=Math.floor(Math.log2(A)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let A=0;A<this._lodPlanes.length;A++)this._lodPlanes[A].dispose()}_cleanup(A){this._renderer.setRenderTarget(Ha,Da,Pa),A.scissorTest=!1,Yr(A,0,0,A.width,A.height)}_fromTexture(A,e){A.mapping===Ei||A.mapping===xi?this._setSize(A.image.length===0?16:A.image[0].width||A.image[0].image.width):this._setSize(A.image.width/4),Ha=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),Pa=this._renderer.getActiveMipmapLevel();const t=e||this._allocateTargets();return this._textureToCubeUV(A,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(){const A=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,t={magFilter:je,minFilter:je,generateMipmaps:!1,type:or,format:ut,colorSpace:Ht,depthBuffer:!1},i=xc(A,e,t);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==A||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xc(A,e,t);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dm(r)),this._blurMaterial=pm(r,A,e)}return i}_compileMaterial(A){const e=new Lt(this._lodPlanes[0],A);this._renderer.compile(e,Ra)}_sceneToCubeUV(A,e,t,i){const a=new At(90,1,e,t),o=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,u=c.autoClear,h=c.toneMapping;c.getClearColor(_c),c.toneMapping=tn,c.autoClear=!1;const p=new el({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1}),g=new Lt(new Cr,p);let m=!1;const d=A.background;d?d.isColor&&(p.color.copy(d),A.background=null,m=!0):(p.color.copy(_c),m=!0);for(let f=0;f<6;f++){const E=f%3;E===0?(a.up.set(0,o[f],0),a.lookAt(l[f],0,0)):E===1?(a.up.set(0,0,o[f]),a.lookAt(0,l[f],0)):(a.up.set(0,o[f],0),a.lookAt(0,0,l[f]));const v=this._cubeSize;Yr(i,E*v,f>2?v:0,v,v),c.setRenderTarget(i),m&&c.render(g,a),c.render(A,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=h,c.autoClear=u,A.background=d}_textureToCubeUV(A,e){const t=this._renderer,i=A.mapping===Ei||A.mapping===xi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=yc()),this._cubemapMaterial.uniforms.flipEnvMap.value=A.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uc());const r=i?this._cubemapMaterial:this._equirectMaterial,s=new Lt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=A;const o=this._cubeSize;Yr(e,0,0,3*o,2*o),t.setRenderTarget(e),t.render(s,Ra)}_applyPMREM(A){const e=this._renderer,t=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),s=Cc[(i-1)%Cc.length];this._blur(A,i-1,i,r,s)}e.autoClear=t}_blur(A,e,t,i,r){const s=this._pingPongRenderTarget;this._halfBlur(A,s,e,t,i,"latitudinal",r),this._halfBlur(s,A,t,t,i,"longitudinal",r)}_halfBlur(A,e,t,i,r,s,a){const o=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,u=new Lt(this._lodPlanes[i],l),h=l.uniforms,p=this._sizeLods[t]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*wn-1),m=r/g,d=isFinite(r)?1+Math.floor(c*m):wn;d>wn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${wn}`);const f=[];let E=0;for(let U=0;U<wn;++U){const R=U/m,B=Math.exp(-R*R/2);f.push(B),U===0?E+=B:U<d&&(E+=2*B)}for(let U=0;U<f.length;U++)f[U]=f[U]/E;h.envMap.value=A.texture,h.samples.value=d,h.weights.value=f,h.latitudinal.value=s==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-t;const C=this._sizeLods[i],x=3*C*(i>v-li?i-v+li:0),y=4*(this._cubeSize-C);Yr(e,x,y,3*C,2*C),o.setRenderTarget(e),o.render(u,Ra)}}function dm(n){const A=[],e=[],t=[];let i=n;const r=n-li+1+vc.length;for(let s=0;s<r;s++){const a=Math.pow(2,i);e.push(a);let o=1/a;s>n-li?o=vc[s-n+li-1]:s===0&&(o=0),t.push(o);const l=1/(a-2),c=-l,u=1+l,h=[c,c,u,c,u,u,c,c,u,u,c,u],p=6,g=6,m=3,d=2,f=1,E=new Float32Array(m*g*p),v=new Float32Array(d*g*p),C=new Float32Array(f*g*p);for(let y=0;y<p;y++){const U=y%3*2/3-1,R=y>2?0:-1,B=[U,R,0,U+2/3,R,0,U+2/3,R+1,0,U,R,0,U+2/3,R+1,0,U,R+1,0];E.set(B,m*g*y),v.set(h,d*g*y);const F=[y,y,y,y,y,y];C.set(F,f*g*y)}const x=new ln;x.setAttribute("position",new ft(E,m)),x.setAttribute("uv",new ft(v,d)),x.setAttribute("faceIndex",new ft(C,f)),A.push(x),i>li&&i--}return{lodPlanes:A,sizeLods:e,sigmas:t}}function xc(n,A,e){const t=new Tn(n,A,e);return t.texture.mapping=zs,t.texture.name="PMREM.cubeUv",t.scissorTest=!0,t}function Yr(n,A,e,t,i){n.viewport.set(A,e,t,i),n.scissor.set(A,e,t,i)}function pm(n,A,e){const t=new Float32Array(wn),i=new I(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:wn,CUBEUV_TEXEL_WIDTH:1/A,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:t},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:nl(),fragmentShader:`

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
		`,blending:en,depthTest:!1,depthWrite:!1})}function Uc(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nl(),fragmentShader:`

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
		`,blending:en,depthTest:!1,depthWrite:!1})}function yc(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:en,depthTest:!1,depthWrite:!1})}function nl(){return`

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
	`}function gm(n){let A=new WeakMap,e=null;function t(a){if(a&&a.isTexture){const o=a.mapping,l=o===Bo||o===wo,c=o===Ei||o===xi;if(l||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=A.get(a);return e===null&&(e=new Ec(n)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),A.set(a,u),u.texture}else{if(A.has(a))return A.get(a).texture;{const u=a.image;if(l&&u&&u.height>0||c&&u&&i(u)){e===null&&(e=new Ec(n));const h=l?e.fromEquirectangular(a):e.fromCubemap(a);return A.set(a,h),a.addEventListener("dispose",r),h.texture}else return null}}}return a}function i(a){let o=0;const l=6;for(let c=0;c<l;c++)a[c]!==void 0&&o++;return o===l}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=A.get(o);l!==void 0&&(A.delete(o),l.dispose())}function s(){A=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:t,dispose:s}}function mm(n){const A={};function e(t){if(A[t]!==void 0)return A[t];let i;switch(t){case"WEBGL_depth_texture":i=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=n.getExtension(t)}return A[t]=i,i}return{has:function(t){return e(t)!==null},init:function(t){t.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(t){const i=e(t);return i===null&&console.warn("THREE.WebGLRenderer: "+t+" extension not supported."),i}}}function Bm(n,A,e,t){const i={},r=new WeakMap;function s(u){const h=u.target;h.index!==null&&A.remove(h.index);for(const g in h.attributes)A.remove(h.attributes[g]);for(const g in h.morphAttributes){const m=h.morphAttributes[g];for(let d=0,f=m.length;d<f;d++)A.remove(m[d])}h.removeEventListener("dispose",s),delete i[h.id];const p=r.get(h);p&&(A.remove(p),r.delete(h)),t.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(u,h){return i[h.id]===!0||(h.addEventListener("dispose",s),i[h.id]=!0,e.memory.geometries++),h}function o(u){const h=u.attributes;for(const g in h)A.update(h[g],n.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const m=p[g];for(let d=0,f=m.length;d<f;d++)A.update(m[d],n.ARRAY_BUFFER)}}function l(u){const h=[],p=u.index,g=u.attributes.position;let m=0;if(p!==null){const E=p.array;m=p.version;for(let v=0,C=E.length;v<C;v+=3){const x=E[v+0],y=E[v+1],U=E[v+2];h.push(x,y,y,U,U,x)}}else if(g!==void 0){const E=g.array;m=g.version;for(let v=0,C=E.length/3-1;v<C;v+=3){const x=v+0,y=v+1,U=v+2;h.push(x,y,y,U,U,x)}}else return;const d=new(rh(h)?fh:hh)(h,1);d.version=m;const f=r.get(u);f&&A.remove(f),r.set(u,d)}function c(u){const h=r.get(u);if(h){const p=u.index;p!==null&&h.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:o,getWireframeAttribute:c}}function wm(n,A,e,t){const i=t.isWebGL2;let r;function s(h){r=h}let a,o;function l(h){a=h.type,o=h.bytesPerElement}function c(h,p){n.drawElements(r,p,a,h*o),e.update(p,r,1)}function u(h,p,g){if(g===0)return;let m,d;if(i)m=n,d="drawElementsInstanced";else if(m=A.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](r,p,a,h*o,g),e.update(p,r,g)}this.setMode=s,this.setIndex=l,this.render=c,this.renderInstances=u}function vm(n){const A={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function t(r,s,a){switch(e.calls++,s){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:A,render:e,programs:null,autoReset:!0,reset:i,update:t}}function _m(n,A){return n[0]-A[0]}function Cm(n,A){return Math.abs(A[1])-Math.abs(n[1])}function Em(n,A,e){const t={},i=new Float32Array(8),r=new WeakMap,s=new Se,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function o(l,c,u){const h=l.morphTargetInfluences;if(A.isWebGL2===!0){const g=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,m=g!==void 0?g.length:0;let d=r.get(c);if(d===void 0||d.count!==m){let O=function(){X.dispose(),r.delete(c),c.removeEventListener("dispose",O)};var p=O;d!==void 0&&d.texture.dispose();const v=c.morphAttributes.position!==void 0,C=c.morphAttributes.normal!==void 0,x=c.morphAttributes.color!==void 0,y=c.morphAttributes.position||[],U=c.morphAttributes.normal||[],R=c.morphAttributes.color||[];let B=0;v===!0&&(B=1),C===!0&&(B=2),x===!0&&(B=3);let F=c.attributes.position.count*B,k=1;F>A.maxTextureSize&&(k=Math.ceil(F/A.maxTextureSize),F=A.maxTextureSize);const Y=new Float32Array(F*k*4*m),X=new oh(Y,F,k,m);X.type=qt,X.needsUpdate=!0;const T=B*4;for(let W=0;W<m;W++){const K=y[W],j=U[W],Z=R[W],J=F*k*4*W;for(let Q=0;Q<K.count;Q++){const N=Q*T;v===!0&&(s.fromBufferAttribute(K,Q),Y[J+N+0]=s.x,Y[J+N+1]=s.y,Y[J+N+2]=s.z,Y[J+N+3]=0),C===!0&&(s.fromBufferAttribute(j,Q),Y[J+N+4]=s.x,Y[J+N+5]=s.y,Y[J+N+6]=s.z,Y[J+N+7]=0),x===!0&&(s.fromBufferAttribute(Z,Q),Y[J+N+8]=s.x,Y[J+N+9]=s.y,Y[J+N+10]=s.z,Y[J+N+11]=Z.itemSize===4?s.w:1)}}d={count:m,texture:X,size:new NA(F,k)},r.set(c,d),c.addEventListener("dispose",O)}let f=0;for(let v=0;v<h.length;v++)f+=h[v];const E=c.morphTargetsRelative?1:1-f;u.getUniforms().setValue(n,"morphTargetBaseInfluence",E),u.getUniforms().setValue(n,"morphTargetInfluences",h),u.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),u.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}else{const g=h===void 0?0:h.length;let m=t[c.id];if(m===void 0||m.length!==g){m=[];for(let C=0;C<g;C++)m[C]=[C,0];t[c.id]=m}for(let C=0;C<g;C++){const x=m[C];x[0]=C,x[1]=h[C]}m.sort(Cm);for(let C=0;C<8;C++)C<g&&m[C][1]?(a[C][0]=m[C][0],a[C][1]=m[C][1]):(a[C][0]=Number.MAX_SAFE_INTEGER,a[C][1]=0);a.sort(_m);const d=c.morphAttributes.position,f=c.morphAttributes.normal;let E=0;for(let C=0;C<8;C++){const x=a[C],y=x[0],U=x[1];y!==Number.MAX_SAFE_INTEGER&&U?(d&&c.getAttribute("morphTarget"+C)!==d[y]&&c.setAttribute("morphTarget"+C,d[y]),f&&c.getAttribute("morphNormal"+C)!==f[y]&&c.setAttribute("morphNormal"+C,f[y]),i[C]=U,E+=U):(d&&c.hasAttribute("morphTarget"+C)===!0&&c.deleteAttribute("morphTarget"+C),f&&c.hasAttribute("morphNormal"+C)===!0&&c.deleteAttribute("morphNormal"+C),i[C]=0)}const v=c.morphTargetsRelative?1:1-E;u.getUniforms().setValue(n,"morphTargetBaseInfluence",v),u.getUniforms().setValue(n,"morphTargetInfluences",i)}}return{update:o}}function xm(n,A,e,t){let i=new WeakMap;function r(o){const l=t.render.frame,c=o.geometry,u=A.get(o,c);if(i.get(u)!==l&&(A.update(u),i.set(u,l)),o.isInstancedMesh&&(o.hasEventListener("dispose",a)===!1&&o.addEventListener("dispose",a),i.get(o)!==l&&(e.update(o.instanceMatrix,n.ARRAY_BUFFER),o.instanceColor!==null&&e.update(o.instanceColor,n.ARRAY_BUFFER),i.set(o,l))),o.isSkinnedMesh){const h=o.skeleton;i.get(h)!==l&&(h.update(),i.set(h,l))}return u}function s(){i=new WeakMap}function a(o){const l=o.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:s}}const wh=new Ye,vh=new oh,_h=new lp,Ch=new gh,Sc=[],Fc=[],Mc=new Float32Array(16),bc=new Float32Array(9),Tc=new Float32Array(4);function Mi(n,A,e){const t=n[0];if(t<=0||t>0)return n;const i=A*e;let r=Sc[i];if(r===void 0&&(r=new Float32Array(i),Sc[i]=r),A!==0){t.toArray(r,0);for(let s=1,a=0;s!==A;++s)a+=e,n[s].toArray(r,a)}return r}function me(n,A){if(n.length!==A.length)return!1;for(let e=0,t=n.length;e<t;e++)if(n[e]!==A[e])return!1;return!0}function Be(n,A){for(let e=0,t=A.length;e<t;e++)n[e]=A[e]}function Js(n,A){let e=Fc[A];e===void 0&&(e=new Int32Array(A),Fc[A]=e);for(let t=0;t!==A;++t)e[t]=n.allocateTextureUnit();return e}function Um(n,A){const e=this.cache;e[0]!==A&&(n.uniform1f(this.addr,A),e[0]=A)}function ym(n,A){const e=this.cache;if(A.x!==void 0)(e[0]!==A.x||e[1]!==A.y)&&(n.uniform2f(this.addr,A.x,A.y),e[0]=A.x,e[1]=A.y);else{if(me(e,A))return;n.uniform2fv(this.addr,A),Be(e,A)}}function Sm(n,A){const e=this.cache;if(A.x!==void 0)(e[0]!==A.x||e[1]!==A.y||e[2]!==A.z)&&(n.uniform3f(this.addr,A.x,A.y,A.z),e[0]=A.x,e[1]=A.y,e[2]=A.z);else if(A.r!==void 0)(e[0]!==A.r||e[1]!==A.g||e[2]!==A.b)&&(n.uniform3f(this.addr,A.r,A.g,A.b),e[0]=A.r,e[1]=A.g,e[2]=A.b);else{if(me(e,A))return;n.uniform3fv(this.addr,A),Be(e,A)}}function Fm(n,A){const e=this.cache;if(A.x!==void 0)(e[0]!==A.x||e[1]!==A.y||e[2]!==A.z||e[3]!==A.w)&&(n.uniform4f(this.addr,A.x,A.y,A.z,A.w),e[0]=A.x,e[1]=A.y,e[2]=A.z,e[3]=A.w);else{if(me(e,A))return;n.uniform4fv(this.addr,A),Be(e,A)}}function Mm(n,A){const e=this.cache,t=A.elements;if(t===void 0){if(me(e,A))return;n.uniformMatrix2fv(this.addr,!1,A),Be(e,A)}else{if(me(e,t))return;Tc.set(t),n.uniformMatrix2fv(this.addr,!1,Tc),Be(e,t)}}function bm(n,A){const e=this.cache,t=A.elements;if(t===void 0){if(me(e,A))return;n.uniformMatrix3fv(this.addr,!1,A),Be(e,A)}else{if(me(e,t))return;bc.set(t),n.uniformMatrix3fv(this.addr,!1,bc),Be(e,t)}}function Tm(n,A){const e=this.cache,t=A.elements;if(t===void 0){if(me(e,A))return;n.uniformMatrix4fv(this.addr,!1,A),Be(e,A)}else{if(me(e,t))return;Mc.set(t),n.uniformMatrix4fv(this.addr,!1,Mc),Be(e,t)}}function Qm(n,A){const e=this.cache;e[0]!==A&&(n.uniform1i(this.addr,A),e[0]=A)}function Im(n,A){const e=this.cache;if(A.x!==void 0)(e[0]!==A.x||e[1]!==A.y)&&(n.uniform2i(this.addr,A.x,A.y),e[0]=A.x,e[1]=A.y);else{if(me(e,A))return;n.uniform2iv(this.addr,A),Be(e,A)}}function Lm(n,A){const e=this.cache;if(A.x!==void 0)(e[0]!==A.x||e[1]!==A.y||e[2]!==A.z)&&(n.uniform3i(this.addr,A.x,A.y,A.z),e[0]=A.x,e[1]=A.y,e[2]=A.z);else{if(me(e,A))return;n.uniform3iv(this.addr,A),Be(e,A)}}function Rm(n,A){const e=this.cache;if(A.x!==void 0)(e[0]!==A.x||e[1]!==A.y||e[2]!==A.z||e[3]!==A.w)&&(n.uniform4i(this.addr,A.x,A.y,A.z,A.w),e[0]=A.x,e[1]=A.y,e[2]=A.z,e[3]=A.w);else{if(me(e,A))return;n.uniform4iv(this.addr,A),Be(e,A)}}function Hm(n,A){const e=this.cache;e[0]!==A&&(n.uniform1ui(this.addr,A),e[0]=A)}function Dm(n,A){const e=this.cache;if(A.x!==void 0)(e[0]!==A.x||e[1]!==A.y)&&(n.uniform2ui(this.addr,A.x,A.y),e[0]=A.x,e[1]=A.y);else{if(me(e,A))return;n.uniform2uiv(this.addr,A),Be(e,A)}}function Pm(n,A){const e=this.cache;if(A.x!==void 0)(e[0]!==A.x||e[1]!==A.y||e[2]!==A.z)&&(n.uniform3ui(this.addr,A.x,A.y,A.z),e[0]=A.x,e[1]=A.y,e[2]=A.z);else{if(me(e,A))return;n.uniform3uiv(this.addr,A),Be(e,A)}}function Nm(n,A){const e=this.cache;if(A.x!==void 0)(e[0]!==A.x||e[1]!==A.y||e[2]!==A.z||e[3]!==A.w)&&(n.uniform4ui(this.addr,A.x,A.y,A.z,A.w),e[0]=A.x,e[1]=A.y,e[2]=A.z,e[3]=A.w);else{if(me(e,A))return;n.uniform4uiv(this.addr,A),Be(e,A)}}function Om(n,A,e){const t=this.cache,i=e.allocateTextureUnit();t[0]!==i&&(n.uniform1i(this.addr,i),t[0]=i),e.setTexture2D(A||wh,i)}function Gm(n,A,e){const t=this.cache,i=e.allocateTextureUnit();t[0]!==i&&(n.uniform1i(this.addr,i),t[0]=i),e.setTexture3D(A||_h,i)}function Vm(n,A,e){const t=this.cache,i=e.allocateTextureUnit();t[0]!==i&&(n.uniform1i(this.addr,i),t[0]=i),e.setTextureCube(A||Ch,i)}function Km(n,A,e){const t=this.cache,i=e.allocateTextureUnit();t[0]!==i&&(n.uniform1i(this.addr,i),t[0]=i),e.setTexture2DArray(A||vh,i)}function km(n){switch(n){case 5126:return Um;case 35664:return ym;case 35665:return Sm;case 35666:return Fm;case 35674:return Mm;case 35675:return bm;case 35676:return Tm;case 5124:case 35670:return Qm;case 35667:case 35671:return Im;case 35668:case 35672:return Lm;case 35669:case 35673:return Rm;case 5125:return Hm;case 36294:return Dm;case 36295:return Pm;case 36296:return Nm;case 35678:case 36198:case 36298:case 36306:case 35682:return Om;case 35679:case 36299:case 36307:return Gm;case 35680:case 36300:case 36308:case 36293:return Vm;case 36289:case 36303:case 36311:case 36292:return Km}}function zm(n,A){n.uniform1fv(this.addr,A)}function Wm(n,A){const e=Mi(A,this.size,2);n.uniform2fv(this.addr,e)}function Xm(n,A){const e=Mi(A,this.size,3);n.uniform3fv(this.addr,e)}function Ym(n,A){const e=Mi(A,this.size,4);n.uniform4fv(this.addr,e)}function Jm(n,A){const e=Mi(A,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Zm(n,A){const e=Mi(A,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function qm(n,A){const e=Mi(A,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function $m(n,A){n.uniform1iv(this.addr,A)}function jm(n,A){n.uniform2iv(this.addr,A)}function AB(n,A){n.uniform3iv(this.addr,A)}function eB(n,A){n.uniform4iv(this.addr,A)}function tB(n,A){n.uniform1uiv(this.addr,A)}function nB(n,A){n.uniform2uiv(this.addr,A)}function iB(n,A){n.uniform3uiv(this.addr,A)}function rB(n,A){n.uniform4uiv(this.addr,A)}function sB(n,A,e){const t=this.cache,i=A.length,r=Js(e,i);me(t,r)||(n.uniform1iv(this.addr,r),Be(t,r));for(let s=0;s!==i;++s)e.setTexture2D(A[s]||wh,r[s])}function aB(n,A,e){const t=this.cache,i=A.length,r=Js(e,i);me(t,r)||(n.uniform1iv(this.addr,r),Be(t,r));for(let s=0;s!==i;++s)e.setTexture3D(A[s]||_h,r[s])}function oB(n,A,e){const t=this.cache,i=A.length,r=Js(e,i);me(t,r)||(n.uniform1iv(this.addr,r),Be(t,r));for(let s=0;s!==i;++s)e.setTextureCube(A[s]||Ch,r[s])}function lB(n,A,e){const t=this.cache,i=A.length,r=Js(e,i);me(t,r)||(n.uniform1iv(this.addr,r),Be(t,r));for(let s=0;s!==i;++s)e.setTexture2DArray(A[s]||vh,r[s])}function cB(n){switch(n){case 5126:return zm;case 35664:return Wm;case 35665:return Xm;case 35666:return Ym;case 35674:return Jm;case 35675:return Zm;case 35676:return qm;case 5124:case 35670:return $m;case 35667:case 35671:return jm;case 35668:case 35672:return AB;case 35669:case 35673:return eB;case 5125:return tB;case 36294:return nB;case 36295:return iB;case 36296:return rB;case 35678:case 36198:case 36298:case 36306:case 35682:return sB;case 35679:case 36299:case 36307:return aB;case 35680:case 36300:case 36308:case 36293:return oB;case 36289:case 36303:case 36311:case 36292:return lB}}class uB{constructor(A,e,t){this.id=A,this.addr=t,this.cache=[],this.setValue=km(e.type)}}class hB{constructor(A,e,t){this.id=A,this.addr=t,this.cache=[],this.size=e.size,this.setValue=cB(e.type)}}class fB{constructor(A){this.id=A,this.seq=[],this.map={}}setValue(A,e,t){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const a=i[r];a.setValue(A,e[a.id],t)}}}const Na=/(\w+)(\])?(\[|\.)?/g;function Qc(n,A){n.seq.push(A),n.map[A.id]=A}function dB(n,A,e){const t=n.name,i=t.length;for(Na.lastIndex=0;;){const r=Na.exec(t),s=Na.lastIndex;let a=r[1];const o=r[2]==="]",l=r[3];if(o&&(a=a|0),l===void 0||l==="["&&s+2===i){Qc(e,l===void 0?new uB(a,n,A):new hB(a,n,A));break}else{let u=e.map[a];u===void 0&&(u=new fB(a),Qc(e,u)),e=u}}}class _s{constructor(A,e){this.seq=[],this.map={};const t=A.getProgramParameter(e,A.ACTIVE_UNIFORMS);for(let i=0;i<t;++i){const r=A.getActiveUniform(e,i),s=A.getUniformLocation(e,r.name);dB(r,s,this)}}setValue(A,e,t,i){const r=this.map[e];r!==void 0&&r.setValue(A,t,i)}setOptional(A,e,t){const i=e[t];i!==void 0&&this.setValue(A,t,i)}static upload(A,e,t,i){for(let r=0,s=e.length;r!==s;++r){const a=e[r],o=t[a.id];o.needsUpdate!==!1&&a.setValue(A,o.value,i)}}static seqWithValue(A,e){const t=[];for(let i=0,r=A.length;i!==r;++i){const s=A[i];s.id in e&&t.push(s)}return t}}function Ic(n,A,e){const t=n.createShader(A);return n.shaderSource(t,e),n.compileShader(t),t}const pB=37297;let gB=0;function mB(n,A){const e=n.split(`
`),t=[],i=Math.max(A-6,0),r=Math.min(A+6,e.length);for(let s=i;s<r;s++){const a=s+1;t.push(`${a===A?">":" "} ${a}: ${e[s]}`)}return t.join(`
`)}function BB(n){const A=ZA.getPrimaries(ZA.workingColorSpace),e=ZA.getPrimaries(n);let t;switch(A===e?t="":A===Ms&&e===Fs?t="LinearDisplayP3ToLinearSRGB":A===Fs&&e===Ms&&(t="LinearSRGBToLinearDisplayP3"),n){case Ht:case Ws:return[t,"LinearTransferOETF"];case ye:case $o:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[t,"LinearTransferOETF"]}}function Lc(n,A,e){const t=n.getShaderParameter(A,n.COMPILE_STATUS),i=n.getShaderInfoLog(A).trim();if(t&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const s=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+mB(n.getShaderSource(A),s)}else return i}function wB(n,A){const e=BB(A);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function vB(n,A){let e;switch(A){case gd:e="Linear";break;case md:e="Reinhard";break;case Bd:e="OptimizedCineon";break;case wd:e="ACESFilmic";break;case vd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",A),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function _B(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Oi).join(`
`)}function CB(n){const A=[];for(const e in n){const t=n[e];t!==!1&&A.push("#define "+e+" "+t)}return A.join(`
`)}function EB(n,A){const e={},t=n.getProgramParameter(A,n.ACTIVE_ATTRIBUTES);for(let i=0;i<t;i++){const r=n.getActiveAttrib(A,i),s=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[s]={type:r.type,location:n.getAttribLocation(A,s),locationSize:a}}return e}function Oi(n){return n!==""}function Rc(n,A){const e=A.numSpotLightShadows+A.numSpotLightMaps-A.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,A.numDirLights).replace(/NUM_SPOT_LIGHTS/g,A.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,A.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,A.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,A.numPointLights).replace(/NUM_HEMI_LIGHTS/g,A.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,A.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,A.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,A.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,A.numPointLightShadows)}function Hc(n,A){return n.replace(/NUM_CLIPPING_PLANES/g,A.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,A.numClippingPlanes-A.numClipIntersection)}const xB=/^[ \t]*#include +<([\w\d./]+)>/gm;function xo(n){return n.replace(xB,yB)}const UB=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function yB(n,A){let e=PA[A];if(e===void 0){const t=UB.get(A);if(t!==void 0)e=PA[t],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',A,t);else throw new Error("Can not resolve #include <"+A+">")}return xo(e)}const SB=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dc(n){return n.replace(SB,FB)}function FB(n,A,e,t){let i="";for(let r=parseInt(A);r<parseInt(e);r++)i+=t.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Pc(n){let A="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?A+=`
#define HIGH_PRECISION`:n.precision==="mediump"?A+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(A+=`
#define LOW_PRECISION`),A}function MB(n){let A="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ju?A="SHADOWMAP_TYPE_PCF":n.shadowMapType===kf?A="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===bt&&(A="SHADOWMAP_TYPE_VSM"),A}function bB(n){let A="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ei:case xi:A="ENVMAP_TYPE_CUBE";break;case zs:A="ENVMAP_TYPE_CUBE_UV";break}return A}function TB(n){let A="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case xi:A="ENVMAP_MODE_REFRACTION";break}return A}function QB(n){let A="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Zu:A="ENVMAP_BLENDING_MULTIPLY";break;case dd:A="ENVMAP_BLENDING_MIX";break;case pd:A="ENVMAP_BLENDING_ADD";break}return A}function IB(n){const A=n.envMapCubeUVHeight;if(A===null)return null;const e=Math.log2(A)-2,t=1/A;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:t,maxMip:e}}function LB(n,A,e,t){const i=n.getContext(),r=e.defines;let s=e.vertexShader,a=e.fragmentShader;const o=MB(e),l=bB(e),c=TB(e),u=QB(e),h=IB(e),p=e.isWebGL2?"":_B(e),g=CB(r),m=i.createProgram();let d,f,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Oi).join(`
`),d.length>0&&(d+=`
`),f=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Oi).join(`
`),f.length>0&&(f+=`
`)):(d=[Pc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+o:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oi).join(`
`),f=[p,Pc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+o:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==tn?"#define TONE_MAPPING":"",e.toneMapping!==tn?PA.tonemapping_pars_fragment:"",e.toneMapping!==tn?vB("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",PA.colorspace_pars_fragment,wB("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Oi).join(`
`)),s=xo(s),s=Rc(s,e),s=Hc(s,e),a=xo(a),a=Rc(a,e),a=Hc(a,e),s=Dc(s),a=Dc(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,f=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===tc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===tc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=E+d+s,C=E+f+a,x=Ic(i,i.VERTEX_SHADER,v),y=Ic(i,i.FRAGMENT_SHADER,C);i.attachShader(m,x),i.attachShader(m,y),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function U(k){if(n.debug.checkShaderErrors){const Y=i.getProgramInfoLog(m).trim(),X=i.getShaderInfoLog(x).trim(),T=i.getShaderInfoLog(y).trim();let O=!0,W=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(O=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(i,m,x,y);else{const K=Lc(i,x,"vertex"),j=Lc(i,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+Y+`
`+K+`
`+j)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(X===""||T==="")&&(W=!1);W&&(k.diagnostics={runnable:O,programLog:Y,vertexShader:{log:X,prefix:d},fragmentShader:{log:T,prefix:f}})}i.deleteShader(x),i.deleteShader(y),R=new _s(i,m),B=EB(i,m)}let R;this.getUniforms=function(){return R===void 0&&U(this),R};let B;this.getAttributes=function(){return B===void 0&&U(this),B};let F=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=i.getProgramParameter(m,pB)),F},this.destroy=function(){t.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=gB++,this.cacheKey=A,this.usedTimes=1,this.program=m,this.vertexShader=x,this.fragmentShader=y,this}let RB=0;class HB{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(A){const e=A.vertexShader,t=A.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(t),s=this._getShaderCacheForMaterial(A);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(A){const e=this.materialCache.get(A);for(const t of e)t.usedTimes--,t.usedTimes===0&&this.shaderCache.delete(t.code);return this.materialCache.delete(A),this}getVertexShaderID(A){return this._getShaderStage(A.vertexShader).id}getFragmentShaderID(A){return this._getShaderStage(A.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(A){const e=this.materialCache;let t=e.get(A);return t===void 0&&(t=new Set,e.set(A,t)),t}_getShaderStage(A){const e=this.shaderCache;let t=e.get(A);return t===void 0&&(t=new DB(A),e.set(A,t)),t}}class DB{constructor(A){this.id=RB++,this.code=A,this.usedTimes=0}}function PB(n,A,e,t,i,r,s){const a=new ch,o=new HB,l=[],c=i.isWebGL2,u=i.logarithmicDepthBuffer,h=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(B){return B===0?"uv":`uv${B}`}function d(B,F,k,Y,X){const T=Y.fog,O=X.geometry,W=B.isMeshStandardMaterial?Y.environment:null,K=(B.isMeshStandardMaterial?e:A).get(B.envMap||W),j=K&&K.mapping===zs?K.image.height:null,Z=g[B.type];B.precision!==null&&(p=i.getMaxPrecision(B.precision),p!==B.precision&&console.warn("THREE.WebGLProgram.getParameters:",B.precision,"not supported, using",p,"instead."));const J=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Q=J!==void 0?J.length:0;let N=0;O.morphAttributes.position!==void 0&&(N=1),O.morphAttributes.normal!==void 0&&(N=2),O.morphAttributes.color!==void 0&&(N=3);let sA,lA,cA,_A;if(Z){const he=Bt[Z];sA=he.vertexShader,lA=he.fragmentShader}else sA=B.vertexShader,lA=B.fragmentShader,o.update(B),cA=o.getVertexShaderID(B),_A=o.getFragmentShaderID(B);const TA=n.getRenderTarget(),SA=X.isInstancedMesh===!0,QA=!!B.map,te=!!B.matcap,DA=!!K,H=!!B.aoMap,Me=!!B.lightMap,EA=!!B.bumpMap,FA=!!B.normalMap,MA=!!B.displacementMap,ie=!!B.emissiveMap,RA=!!B.metalnessMap,IA=!!B.roughnessMap,WA=B.anisotropy>0,ue=B.clearcoat>0,we=B.iridescence>0,S=B.sheen>0,w=B.transmission>0,D=WA&&!!B.anisotropyMap,eA=ue&&!!B.clearcoatMap,$=ue&&!!B.clearcoatNormalMap,tA=ue&&!!B.clearcoatRoughnessMap,BA=we&&!!B.iridescenceMap,rA=we&&!!B.iridescenceThicknessMap,hA=S&&!!B.sheenColorMap,M=S&&!!B.sheenRoughnessMap,iA=!!B.specularMap,q=!!B.specularColorMap,UA=!!B.specularIntensityMap,wA=w&&!!B.transmissionMap,xA=w&&!!B.thicknessMap,gA=!!B.gradientMap,pA=!!B.alphaMap,VA=B.alphaTest>0,b=!!B.alphaHash,aA=!!B.extensions,AA=!!O.attributes.uv1,z=!!O.attributes.uv2,nA=!!O.attributes.uv3;let CA=tn;return B.toneMapped&&(TA===null||TA.isXRRenderTarget===!0)&&(CA=n.toneMapping),{isWebGL2:c,shaderID:Z,shaderType:B.type,shaderName:B.name,vertexShader:sA,fragmentShader:lA,defines:B.defines,customVertexShaderID:cA,customFragmentShaderID:_A,isRawShaderMaterial:B.isRawShaderMaterial===!0,glslVersion:B.glslVersion,precision:p,instancing:SA,instancingColor:SA&&X.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:TA===null?n.outputColorSpace:TA.isXRRenderTarget===!0?TA.texture.colorSpace:Ht,map:QA,matcap:te,envMap:DA,envMapMode:DA&&K.mapping,envMapCubeUVHeight:j,aoMap:H,lightMap:Me,bumpMap:EA,normalMap:FA,displacementMap:h&&MA,emissiveMap:ie,normalMapObjectSpace:FA&&B.normalMapType===Ld,normalMapTangentSpace:FA&&B.normalMapType===Id,metalnessMap:RA,roughnessMap:IA,anisotropy:WA,anisotropyMap:D,clearcoat:ue,clearcoatMap:eA,clearcoatNormalMap:$,clearcoatRoughnessMap:tA,iridescence:we,iridescenceMap:BA,iridescenceThicknessMap:rA,sheen:S,sheenColorMap:hA,sheenRoughnessMap:M,specularMap:iA,specularColorMap:q,specularIntensityMap:UA,transmission:w,transmissionMap:wA,thicknessMap:xA,gradientMap:gA,opaque:B.transparent===!1&&B.blending===hi,alphaMap:pA,alphaTest:VA,alphaHash:b,combine:B.combine,mapUv:QA&&m(B.map.channel),aoMapUv:H&&m(B.aoMap.channel),lightMapUv:Me&&m(B.lightMap.channel),bumpMapUv:EA&&m(B.bumpMap.channel),normalMapUv:FA&&m(B.normalMap.channel),displacementMapUv:MA&&m(B.displacementMap.channel),emissiveMapUv:ie&&m(B.emissiveMap.channel),metalnessMapUv:RA&&m(B.metalnessMap.channel),roughnessMapUv:IA&&m(B.roughnessMap.channel),anisotropyMapUv:D&&m(B.anisotropyMap.channel),clearcoatMapUv:eA&&m(B.clearcoatMap.channel),clearcoatNormalMapUv:$&&m(B.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tA&&m(B.clearcoatRoughnessMap.channel),iridescenceMapUv:BA&&m(B.iridescenceMap.channel),iridescenceThicknessMapUv:rA&&m(B.iridescenceThicknessMap.channel),sheenColorMapUv:hA&&m(B.sheenColorMap.channel),sheenRoughnessMapUv:M&&m(B.sheenRoughnessMap.channel),specularMapUv:iA&&m(B.specularMap.channel),specularColorMapUv:q&&m(B.specularColorMap.channel),specularIntensityMapUv:UA&&m(B.specularIntensityMap.channel),transmissionMapUv:wA&&m(B.transmissionMap.channel),thicknessMapUv:xA&&m(B.thicknessMap.channel),alphaMapUv:pA&&m(B.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(FA||WA),vertexColors:B.vertexColors,vertexAlphas:B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:AA,vertexUv2s:z,vertexUv3s:nA,pointsUvs:X.isPoints===!0&&!!O.attributes.uv&&(QA||pA),fog:!!T,useFog:B.fog===!0,fogExp2:T&&T.isFogExp2,flatShading:B.flatShading===!0,sizeAttenuation:B.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:X.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:N,numDirLights:F.directional.length,numPointLights:F.point.length,numSpotLights:F.spot.length,numSpotLightMaps:F.spotLightMap.length,numRectAreaLights:F.rectArea.length,numHemiLights:F.hemi.length,numDirLightShadows:F.directionalShadowMap.length,numPointLightShadows:F.pointShadowMap.length,numSpotLightShadows:F.spotShadowMap.length,numSpotLightShadowsWithMaps:F.numSpotLightShadowsWithMaps,numLightProbes:F.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:B.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:CA,useLegacyLights:n._useLegacyLights,decodeVideoTexture:QA&&B.map.isVideoTexture===!0&&ZA.getTransfer(B.map.colorSpace)===ne,premultipliedAlpha:B.premultipliedAlpha,doubleSided:B.side===Qt,flipSided:B.side===Ve,useDepthPacking:B.depthPacking>=0,depthPacking:B.depthPacking||0,index0AttributeName:B.index0AttributeName,extensionDerivatives:aA&&B.extensions.derivatives===!0,extensionFragDepth:aA&&B.extensions.fragDepth===!0,extensionDrawBuffers:aA&&B.extensions.drawBuffers===!0,extensionShaderTextureLOD:aA&&B.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:c||t.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||t.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||t.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:B.customProgramCacheKey()}}function f(B){const F=[];if(B.shaderID?F.push(B.shaderID):(F.push(B.customVertexShaderID),F.push(B.customFragmentShaderID)),B.defines!==void 0)for(const k in B.defines)F.push(k),F.push(B.defines[k]);return B.isRawShaderMaterial===!1&&(E(F,B),v(F,B),F.push(n.outputColorSpace)),F.push(B.customProgramCacheKey),F.join()}function E(B,F){B.push(F.precision),B.push(F.outputColorSpace),B.push(F.envMapMode),B.push(F.envMapCubeUVHeight),B.push(F.mapUv),B.push(F.alphaMapUv),B.push(F.lightMapUv),B.push(F.aoMapUv),B.push(F.bumpMapUv),B.push(F.normalMapUv),B.push(F.displacementMapUv),B.push(F.emissiveMapUv),B.push(F.metalnessMapUv),B.push(F.roughnessMapUv),B.push(F.anisotropyMapUv),B.push(F.clearcoatMapUv),B.push(F.clearcoatNormalMapUv),B.push(F.clearcoatRoughnessMapUv),B.push(F.iridescenceMapUv),B.push(F.iridescenceThicknessMapUv),B.push(F.sheenColorMapUv),B.push(F.sheenRoughnessMapUv),B.push(F.specularMapUv),B.push(F.specularColorMapUv),B.push(F.specularIntensityMapUv),B.push(F.transmissionMapUv),B.push(F.thicknessMapUv),B.push(F.combine),B.push(F.fogExp2),B.push(F.sizeAttenuation),B.push(F.morphTargetsCount),B.push(F.morphAttributeCount),B.push(F.numDirLights),B.push(F.numPointLights),B.push(F.numSpotLights),B.push(F.numSpotLightMaps),B.push(F.numHemiLights),B.push(F.numRectAreaLights),B.push(F.numDirLightShadows),B.push(F.numPointLightShadows),B.push(F.numSpotLightShadows),B.push(F.numSpotLightShadowsWithMaps),B.push(F.numLightProbes),B.push(F.shadowMapType),B.push(F.toneMapping),B.push(F.numClippingPlanes),B.push(F.numClipIntersection),B.push(F.depthPacking)}function v(B,F){a.disableAll(),F.isWebGL2&&a.enable(0),F.supportsVertexTextures&&a.enable(1),F.instancing&&a.enable(2),F.instancingColor&&a.enable(3),F.matcap&&a.enable(4),F.envMap&&a.enable(5),F.normalMapObjectSpace&&a.enable(6),F.normalMapTangentSpace&&a.enable(7),F.clearcoat&&a.enable(8),F.iridescence&&a.enable(9),F.alphaTest&&a.enable(10),F.vertexColors&&a.enable(11),F.vertexAlphas&&a.enable(12),F.vertexUv1s&&a.enable(13),F.vertexUv2s&&a.enable(14),F.vertexUv3s&&a.enable(15),F.vertexTangents&&a.enable(16),F.anisotropy&&a.enable(17),F.alphaHash&&a.enable(18),B.push(a.mask),a.disableAll(),F.fog&&a.enable(0),F.useFog&&a.enable(1),F.flatShading&&a.enable(2),F.logarithmicDepthBuffer&&a.enable(3),F.skinning&&a.enable(4),F.morphTargets&&a.enable(5),F.morphNormals&&a.enable(6),F.morphColors&&a.enable(7),F.premultipliedAlpha&&a.enable(8),F.shadowMapEnabled&&a.enable(9),F.useLegacyLights&&a.enable(10),F.doubleSided&&a.enable(11),F.flipSided&&a.enable(12),F.useDepthPacking&&a.enable(13),F.dithering&&a.enable(14),F.transmission&&a.enable(15),F.sheen&&a.enable(16),F.opaque&&a.enable(17),F.pointsUvs&&a.enable(18),F.decodeVideoTexture&&a.enable(19),B.push(a.mask)}function C(B){const F=g[B.type];let k;if(F){const Y=Bt[F];k=Cp.clone(Y.uniforms)}else k=B.uniforms;return k}function x(B,F){let k;for(let Y=0,X=l.length;Y<X;Y++){const T=l[Y];if(T.cacheKey===F){k=T,++k.usedTimes;break}}return k===void 0&&(k=new LB(n,F,B,r),l.push(k)),k}function y(B){if(--B.usedTimes===0){const F=l.indexOf(B);l[F]=l[l.length-1],l.pop(),B.destroy()}}function U(B){o.remove(B)}function R(){o.dispose()}return{getParameters:d,getProgramCacheKey:f,getUniforms:C,acquireProgram:x,releaseProgram:y,releaseShaderCache:U,programs:l,dispose:R}}function NB(){let n=new WeakMap;function A(r){let s=n.get(r);return s===void 0&&(s={},n.set(r,s)),s}function e(r){n.delete(r)}function t(r,s,a){n.get(r)[s]=a}function i(){n=new WeakMap}return{get:A,remove:e,update:t,dispose:i}}function OB(n,A){return n.groupOrder!==A.groupOrder?n.groupOrder-A.groupOrder:n.renderOrder!==A.renderOrder?n.renderOrder-A.renderOrder:n.material.id!==A.material.id?n.material.id-A.material.id:n.z!==A.z?n.z-A.z:n.id-A.id}function Nc(n,A){return n.groupOrder!==A.groupOrder?n.groupOrder-A.groupOrder:n.renderOrder!==A.renderOrder?n.renderOrder-A.renderOrder:n.z!==A.z?A.z-n.z:n.id-A.id}function Oc(){const n=[];let A=0;const e=[],t=[],i=[];function r(){A=0,e.length=0,t.length=0,i.length=0}function s(u,h,p,g,m,d){let f=n[A];return f===void 0?(f={id:u.id,object:u,geometry:h,material:p,groupOrder:g,renderOrder:u.renderOrder,z:m,group:d},n[A]=f):(f.id=u.id,f.object=u,f.geometry=h,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=m,f.group=d),A++,f}function a(u,h,p,g,m,d){const f=s(u,h,p,g,m,d);p.transmission>0?t.push(f):p.transparent===!0?i.push(f):e.push(f)}function o(u,h,p,g,m,d){const f=s(u,h,p,g,m,d);p.transmission>0?t.unshift(f):p.transparent===!0?i.unshift(f):e.unshift(f)}function l(u,h){e.length>1&&e.sort(u||OB),t.length>1&&t.sort(h||Nc),i.length>1&&i.sort(h||Nc)}function c(){for(let u=A,h=n.length;u<h;u++){const p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:t,transparent:i,init:r,push:a,unshift:o,finish:c,sort:l}}function GB(){let n=new WeakMap;function A(t,i){const r=n.get(t);let s;return r===void 0?(s=new Oc,n.set(t,[s])):i>=r.length?(s=new Oc,r.push(s)):s=r[i],s}function e(){n=new WeakMap}return{get:A,dispose:e}}function VB(){const n={};return{get:function(A){if(n[A.id]!==void 0)return n[A.id];let e;switch(A.type){case"DirectionalLight":e={direction:new I,color:new YA};break;case"SpotLight":e={position:new I,direction:new I,color:new YA,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new YA,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new YA,groundColor:new YA};break;case"RectAreaLight":e={color:new YA,position:new I,halfWidth:new I,halfHeight:new I};break}return n[A.id]=e,e}}}function KB(){const n={};return{get:function(A){if(n[A.id]!==void 0)return n[A.id];let e;switch(A.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new NA};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new NA};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new NA,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[A.id]=e,e}}}let kB=0;function zB(n,A){return(A.castShadow?2:0)-(n.castShadow?2:0)+(A.map?1:0)-(n.map?1:0)}function WB(n,A){const e=new VB,t=KB(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);const r=new I,s=new xe,a=new xe;function o(c,u){let h=0,p=0,g=0;for(let Y=0;Y<9;Y++)i.probe[Y].set(0,0,0);let m=0,d=0,f=0,E=0,v=0,C=0,x=0,y=0,U=0,R=0,B=0;c.sort(zB);const F=u===!0?Math.PI:1;for(let Y=0,X=c.length;Y<X;Y++){const T=c[Y],O=T.color,W=T.intensity,K=T.distance,j=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=O.r*W*F,p+=O.g*W*F,g+=O.b*W*F;else if(T.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(T.sh.coefficients[Z],W);B++}else if(T.isDirectionalLight){const Z=e.get(T);if(Z.color.copy(T.color).multiplyScalar(T.intensity*F),T.castShadow){const J=T.shadow,Q=t.get(T);Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,i.directionalShadow[m]=Q,i.directionalShadowMap[m]=j,i.directionalShadowMatrix[m]=T.shadow.matrix,C++}i.directional[m]=Z,m++}else if(T.isSpotLight){const Z=e.get(T);Z.position.setFromMatrixPosition(T.matrixWorld),Z.color.copy(O).multiplyScalar(W*F),Z.distance=K,Z.coneCos=Math.cos(T.angle),Z.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),Z.decay=T.decay,i.spot[f]=Z;const J=T.shadow;if(T.map&&(i.spotLightMap[U]=T.map,U++,J.updateMatrices(T),T.castShadow&&R++),i.spotLightMatrix[f]=J.matrix,T.castShadow){const Q=t.get(T);Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,i.spotShadow[f]=Q,i.spotShadowMap[f]=j,y++}f++}else if(T.isRectAreaLight){const Z=e.get(T);Z.color.copy(O).multiplyScalar(W),Z.halfWidth.set(T.width*.5,0,0),Z.halfHeight.set(0,T.height*.5,0),i.rectArea[E]=Z,E++}else if(T.isPointLight){const Z=e.get(T);if(Z.color.copy(T.color).multiplyScalar(T.intensity*F),Z.distance=T.distance,Z.decay=T.decay,T.castShadow){const J=T.shadow,Q=t.get(T);Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,Q.shadowCameraNear=J.camera.near,Q.shadowCameraFar=J.camera.far,i.pointShadow[d]=Q,i.pointShadowMap[d]=j,i.pointShadowMatrix[d]=T.shadow.matrix,x++}i.point[d]=Z,d++}else if(T.isHemisphereLight){const Z=e.get(T);Z.skyColor.copy(T.color).multiplyScalar(W*F),Z.groundColor.copy(T.groundColor).multiplyScalar(W*F),i.hemi[v]=Z,v++}}E>0&&(A.isWebGL2||n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oA.LTC_FLOAT_1,i.rectAreaLTC2=oA.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=oA.LTC_HALF_1,i.rectAreaLTC2=oA.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=g;const k=i.hash;(k.directionalLength!==m||k.pointLength!==d||k.spotLength!==f||k.rectAreaLength!==E||k.hemiLength!==v||k.numDirectionalShadows!==C||k.numPointShadows!==x||k.numSpotShadows!==y||k.numSpotMaps!==U||k.numLightProbes!==B)&&(i.directional.length=m,i.spot.length=f,i.rectArea.length=E,i.point.length=d,i.hemi.length=v,i.directionalShadow.length=C,i.directionalShadowMap.length=C,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=C,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=y+U-R,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=B,k.directionalLength=m,k.pointLength=d,k.spotLength=f,k.rectAreaLength=E,k.hemiLength=v,k.numDirectionalShadows=C,k.numPointShadows=x,k.numSpotShadows=y,k.numSpotMaps=U,k.numLightProbes=B,i.version=kB++)}function l(c,u){let h=0,p=0,g=0,m=0,d=0;const f=u.matrixWorldInverse;for(let E=0,v=c.length;E<v;E++){const C=c[E];if(C.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(f),h++}else if(C.isSpotLight){const x=i.spot[g];x.position.setFromMatrixPosition(C.matrixWorld),x.position.applyMatrix4(f),x.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(f),g++}else if(C.isRectAreaLight){const x=i.rectArea[m];x.position.setFromMatrixPosition(C.matrixWorld),x.position.applyMatrix4(f),a.identity(),s.copy(C.matrixWorld),s.premultiply(f),a.extractRotation(s),x.halfWidth.set(C.width*.5,0,0),x.halfHeight.set(0,C.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),m++}else if(C.isPointLight){const x=i.point[p];x.position.setFromMatrixPosition(C.matrixWorld),x.position.applyMatrix4(f),p++}else if(C.isHemisphereLight){const x=i.hemi[d];x.direction.setFromMatrixPosition(C.matrixWorld),x.direction.transformDirection(f),d++}}}return{setup:o,setupView:l,state:i}}function Gc(n,A){const e=new WB(n,A),t=[],i=[];function r(){t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(u){e.setup(t,u)}function l(u){e.setupView(t,u)}return{init:r,state:{lightsArray:t,shadowsArray:i,lights:e},setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function XB(n,A){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Gc(n,A),e.set(r,[o])):s>=a.length?(o=new Gc(n,A),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class YB extends Ys{constructor(A){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Td,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(A)}copy(A){return super.copy(A),this.depthPacking=A.depthPacking,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this}}class JB extends Ys{constructor(A){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(A)}copy(A){return super.copy(A),this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this}}const ZB=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qB=`uniform sampler2D shadow_pass;
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
}`;function $B(n,A,e){let t=new mh;const i=new NA,r=new NA,s=new Se,a=new YB({depthPacking:Qd}),o=new JB,l={},c=e.maxTextureSize,u={[an]:Ve,[Ve]:an,[Qt]:Qt},h=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new NA},radius:{value:4}},vertexShader:ZB,fragmentShader:qB}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new ln;g.setAttribute("position",new ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Lt(g,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ju;let f=this.type;this.render=function(x,y,U){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||x.length===0)return;const R=n.getRenderTarget(),B=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),k=n.state;k.setBlending(en),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const Y=f!==bt&&this.type===bt,X=f===bt&&this.type!==bt;for(let T=0,O=x.length;T<O;T++){const W=x[T],K=W.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;i.copy(K.mapSize);const j=K.getFrameExtents();if(i.multiply(j),r.copy(K.mapSize),(i.x>c||i.y>c)&&(i.x>c&&(r.x=Math.floor(c/j.x),i.x=r.x*j.x,K.mapSize.x=r.x),i.y>c&&(r.y=Math.floor(c/j.y),i.y=r.y*j.y,K.mapSize.y=r.y)),K.map===null||Y===!0||X===!0){const J=this.type!==bt?{minFilter:Oe,magFilter:Oe}:{};K.map!==null&&K.map.dispose(),K.map=new Tn(i.x,i.y,J),K.map.texture.name=W.name+".shadowMap",K.camera.updateProjectionMatrix()}n.setRenderTarget(K.map),n.clear();const Z=K.getViewportCount();for(let J=0;J<Z;J++){const Q=K.getViewport(J);s.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),k.viewport(s),K.updateMatrices(W,J),t=K.getFrustum(),C(y,U,K.camera,W,this.type)}K.isPointLightShadow!==!0&&this.type===bt&&E(K,U),K.needsUpdate=!1}f=this.type,d.needsUpdate=!1,n.setRenderTarget(R,B,F)};function E(x,y){const U=A.update(m);h.defines.VSM_SAMPLES!==x.blurSamples&&(h.defines.VSM_SAMPLES=x.blurSamples,p.defines.VSM_SAMPLES=x.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new Tn(i.x,i.y)),h.uniforms.shadow_pass.value=x.map.texture,h.uniforms.resolution.value=x.mapSize,h.uniforms.radius.value=x.radius,n.setRenderTarget(x.mapPass),n.clear(),n.renderBufferDirect(y,null,U,h,m,null),p.uniforms.shadow_pass.value=x.mapPass.texture,p.uniforms.resolution.value=x.mapSize,p.uniforms.radius.value=x.radius,n.setRenderTarget(x.map),n.clear(),n.renderBufferDirect(y,null,U,p,m,null)}function v(x,y,U,R){let B=null;const F=U.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(F!==void 0)B=F;else if(B=U.isPointLight===!0?o:a,n.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const k=B.uuid,Y=y.uuid;let X=l[k];X===void 0&&(X={},l[k]=X);let T=X[Y];T===void 0&&(T=B.clone(),X[Y]=T),B=T}if(B.visible=y.visible,B.wireframe=y.wireframe,R===bt?B.side=y.shadowSide!==null?y.shadowSide:y.side:B.side=y.shadowSide!==null?y.shadowSide:u[y.side],B.alphaMap=y.alphaMap,B.alphaTest=y.alphaTest,B.map=y.map,B.clipShadows=y.clipShadows,B.clippingPlanes=y.clippingPlanes,B.clipIntersection=y.clipIntersection,B.displacementMap=y.displacementMap,B.displacementScale=y.displacementScale,B.displacementBias=y.displacementBias,B.wireframeLinewidth=y.wireframeLinewidth,B.linewidth=y.linewidth,U.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const k=n.properties.get(B);k.light=U}return B}function C(x,y,U,R,B){if(x.visible===!1)return;if(x.layers.test(y.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&B===bt)&&(!x.frustumCulled||t.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,x.matrixWorld);const Y=A.update(x),X=x.material;if(Array.isArray(X)){const T=Y.groups;for(let O=0,W=T.length;O<W;O++){const K=T[O],j=X[K.materialIndex];if(j&&j.visible){const Z=v(x,j,R,B);n.renderBufferDirect(U,null,Y,Z,x,K)}}}else if(X.visible){const T=v(x,X,R,B);n.renderBufferDirect(U,null,Y,T,x,null)}}const k=x.children;for(let Y=0,X=k.length;Y<X;Y++)C(k[Y],y,U,R,B)}}function jB(n,A,e){const t=e.isWebGL2;function i(){let b=!1;const aA=new Se;let AA=null;const z=new Se(0,0,0,0);return{setMask:function(nA){AA!==nA&&!b&&(n.colorMask(nA,nA,nA,nA),AA=nA)},setLocked:function(nA){b=nA},setClear:function(nA,CA,KA,he,Ze){Ze===!0&&(nA*=he,CA*=he,KA*=he),aA.set(nA,CA,KA,he),z.equals(aA)===!1&&(n.clearColor(nA,CA,KA,he),z.copy(aA))},reset:function(){b=!1,AA=null,z.set(-1,0,0,0)}}}function r(){let b=!1,aA=null,AA=null,z=null;return{setTest:function(nA){nA?QA(n.DEPTH_TEST):te(n.DEPTH_TEST)},setMask:function(nA){aA!==nA&&!b&&(n.depthMask(nA),aA=nA)},setFunc:function(nA){if(AA!==nA){switch(nA){case ad:n.depthFunc(n.NEVER);break;case od:n.depthFunc(n.ALWAYS);break;case ld:n.depthFunc(n.LESS);break;case ys:n.depthFunc(n.LEQUAL);break;case cd:n.depthFunc(n.EQUAL);break;case ud:n.depthFunc(n.GEQUAL);break;case hd:n.depthFunc(n.GREATER);break;case fd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}AA=nA}},setLocked:function(nA){b=nA},setClear:function(nA){z!==nA&&(n.clearDepth(nA),z=nA)},reset:function(){b=!1,aA=null,AA=null,z=null}}}function s(){let b=!1,aA=null,AA=null,z=null,nA=null,CA=null,KA=null,he=null,Ze=null;return{setTest:function(jA){b||(jA?QA(n.STENCIL_TEST):te(n.STENCIL_TEST))},setMask:function(jA){aA!==jA&&!b&&(n.stencilMask(jA),aA=jA)},setFunc:function(jA,Le,pt){(AA!==jA||z!==Le||nA!==pt)&&(n.stencilFunc(jA,Le,pt),AA=jA,z=Le,nA=pt)},setOp:function(jA,Le,pt){(CA!==jA||KA!==Le||he!==pt)&&(n.stencilOp(jA,Le,pt),CA=jA,KA=Le,he=pt)},setLocked:function(jA){b=jA},setClear:function(jA){Ze!==jA&&(n.clearStencil(jA),Ze=jA)},reset:function(){b=!1,aA=null,AA=null,z=null,nA=null,CA=null,KA=null,he=null,Ze=null}}}const a=new i,o=new r,l=new s,c=new WeakMap,u=new WeakMap;let h={},p={},g=new WeakMap,m=[],d=null,f=!1,E=null,v=null,C=null,x=null,y=null,U=null,R=null,B=new YA(0,0,0),F=0,k=!1,Y=null,X=null,T=null,O=null,W=null;const K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,Z=0;const J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(J)[1]),j=Z>=1):J.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),j=Z>=2);let Q=null,N={};const sA=n.getParameter(n.SCISSOR_BOX),lA=n.getParameter(n.VIEWPORT),cA=new Se().fromArray(sA),_A=new Se().fromArray(lA);function TA(b,aA,AA,z){const nA=new Uint8Array(4),CA=n.createTexture();n.bindTexture(b,CA),n.texParameteri(b,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(b,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let KA=0;KA<AA;KA++)t&&(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)?n.texImage3D(aA,0,n.RGBA,1,1,z,0,n.RGBA,n.UNSIGNED_BYTE,nA):n.texImage2D(aA+KA,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,nA);return CA}const SA={};SA[n.TEXTURE_2D]=TA(n.TEXTURE_2D,n.TEXTURE_2D,1),SA[n.TEXTURE_CUBE_MAP]=TA(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),t&&(SA[n.TEXTURE_2D_ARRAY]=TA(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),SA[n.TEXTURE_3D]=TA(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),o.setClear(1),l.setClear(0),QA(n.DEPTH_TEST),o.setFunc(ys),RA(!1),IA(Cl),QA(n.CULL_FACE),MA(en);function QA(b){h[b]!==!0&&(n.enable(b),h[b]=!0)}function te(b){h[b]!==!1&&(n.disable(b),h[b]=!1)}function DA(b,aA){return p[b]!==aA?(n.bindFramebuffer(b,aA),p[b]=aA,t&&(b===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=aA),b===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=aA)),!0):!1}function H(b,aA){let AA=m,z=!1;if(b)if(AA=g.get(aA),AA===void 0&&(AA=[],g.set(aA,AA)),b.isWebGLMultipleRenderTargets){const nA=b.texture;if(AA.length!==nA.length||AA[0]!==n.COLOR_ATTACHMENT0){for(let CA=0,KA=nA.length;CA<KA;CA++)AA[CA]=n.COLOR_ATTACHMENT0+CA;AA.length=nA.length,z=!0}}else AA[0]!==n.COLOR_ATTACHMENT0&&(AA[0]=n.COLOR_ATTACHMENT0,z=!0);else AA[0]!==n.BACK&&(AA[0]=n.BACK,z=!0);z&&(e.isWebGL2?n.drawBuffers(AA):A.get("WEBGL_draw_buffers").drawBuffersWEBGL(AA))}function Me(b){return d!==b?(n.useProgram(b),d=b,!0):!1}const EA={[Bn]:n.FUNC_ADD,[Wf]:n.FUNC_SUBTRACT,[Xf]:n.FUNC_REVERSE_SUBTRACT};if(t)EA[yl]=n.MIN,EA[Sl]=n.MAX;else{const b=A.get("EXT_blend_minmax");b!==null&&(EA[yl]=b.MIN_EXT,EA[Sl]=b.MAX_EXT)}const FA={[Yf]:n.ZERO,[Jf]:n.ONE,[Zf]:n.SRC_COLOR,[go]:n.SRC_ALPHA,[td]:n.SRC_ALPHA_SATURATE,[Ad]:n.DST_COLOR,[$f]:n.DST_ALPHA,[qf]:n.ONE_MINUS_SRC_COLOR,[mo]:n.ONE_MINUS_SRC_ALPHA,[ed]:n.ONE_MINUS_DST_COLOR,[jf]:n.ONE_MINUS_DST_ALPHA,[nd]:n.CONSTANT_COLOR,[id]:n.ONE_MINUS_CONSTANT_COLOR,[rd]:n.CONSTANT_ALPHA,[sd]:n.ONE_MINUS_CONSTANT_ALPHA};function MA(b,aA,AA,z,nA,CA,KA,he,Ze,jA){if(b===en){f===!0&&(te(n.BLEND),f=!1);return}if(f===!1&&(QA(n.BLEND),f=!0),b!==zf){if(b!==E||jA!==k){if((v!==Bn||y!==Bn)&&(n.blendEquation(n.FUNC_ADD),v=Bn,y=Bn),jA)switch(b){case hi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case El:n.blendFunc(n.ONE,n.ONE);break;case xl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ul:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}else switch(b){case hi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case El:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case xl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ul:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}C=null,x=null,U=null,R=null,B.set(0,0,0),F=0,E=b,k=jA}return}nA=nA||aA,CA=CA||AA,KA=KA||z,(aA!==v||nA!==y)&&(n.blendEquationSeparate(EA[aA],EA[nA]),v=aA,y=nA),(AA!==C||z!==x||CA!==U||KA!==R)&&(n.blendFuncSeparate(FA[AA],FA[z],FA[CA],FA[KA]),C=AA,x=z,U=CA,R=KA),(he.equals(B)===!1||Ze!==F)&&(n.blendColor(he.r,he.g,he.b,Ze),B.copy(he),F=Ze),E=b,k=!1}function ie(b,aA){b.side===Qt?te(n.CULL_FACE):QA(n.CULL_FACE);let AA=b.side===Ve;aA&&(AA=!AA),RA(AA),b.blending===hi&&b.transparent===!1?MA(en):MA(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),o.setFunc(b.depthFunc),o.setTest(b.depthTest),o.setMask(b.depthWrite),a.setMask(b.colorWrite);const z=b.stencilWrite;l.setTest(z),z&&(l.setMask(b.stencilWriteMask),l.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),l.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),ue(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?QA(n.SAMPLE_ALPHA_TO_COVERAGE):te(n.SAMPLE_ALPHA_TO_COVERAGE)}function RA(b){Y!==b&&(b?n.frontFace(n.CW):n.frontFace(n.CCW),Y=b)}function IA(b){b!==Vf?(QA(n.CULL_FACE),b!==X&&(b===Cl?n.cullFace(n.BACK):b===Kf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):te(n.CULL_FACE),X=b}function WA(b){b!==T&&(j&&n.lineWidth(b),T=b)}function ue(b,aA,AA){b?(QA(n.POLYGON_OFFSET_FILL),(O!==aA||W!==AA)&&(n.polygonOffset(aA,AA),O=aA,W=AA)):te(n.POLYGON_OFFSET_FILL)}function we(b){b?QA(n.SCISSOR_TEST):te(n.SCISSOR_TEST)}function S(b){b===void 0&&(b=n.TEXTURE0+K-1),Q!==b&&(n.activeTexture(b),Q=b)}function w(b,aA,AA){AA===void 0&&(Q===null?AA=n.TEXTURE0+K-1:AA=Q);let z=N[AA];z===void 0&&(z={type:void 0,texture:void 0},N[AA]=z),(z.type!==b||z.texture!==aA)&&(Q!==AA&&(n.activeTexture(AA),Q=AA),n.bindTexture(b,aA||SA[b]),z.type=b,z.texture=aA)}function D(){const b=N[Q];b!==void 0&&b.type!==void 0&&(n.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)}function eA(){try{n.compressedTexImage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function $(){try{n.compressedTexImage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function tA(){try{n.texSubImage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function BA(){try{n.texSubImage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function rA(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function hA(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function M(){try{n.texStorage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function iA(){try{n.texStorage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function q(){try{n.texImage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function UA(){try{n.texImage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function wA(b){cA.equals(b)===!1&&(n.scissor(b.x,b.y,b.z,b.w),cA.copy(b))}function xA(b){_A.equals(b)===!1&&(n.viewport(b.x,b.y,b.z,b.w),_A.copy(b))}function gA(b,aA){let AA=u.get(aA);AA===void 0&&(AA=new WeakMap,u.set(aA,AA));let z=AA.get(b);z===void 0&&(z=n.getUniformBlockIndex(aA,b.name),AA.set(b,z))}function pA(b,aA){const z=u.get(aA).get(b);c.get(aA)!==z&&(n.uniformBlockBinding(aA,z,b.__bindingPointIndex),c.set(aA,z))}function VA(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),t===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},Q=null,N={},p={},g=new WeakMap,m=[],d=null,f=!1,E=null,v=null,C=null,x=null,y=null,U=null,R=null,B=new YA(0,0,0),F=0,k=!1,Y=null,X=null,T=null,O=null,W=null,cA.set(0,0,n.canvas.width,n.canvas.height),_A.set(0,0,n.canvas.width,n.canvas.height),a.reset(),o.reset(),l.reset()}return{buffers:{color:a,depth:o,stencil:l},enable:QA,disable:te,bindFramebuffer:DA,drawBuffers:H,useProgram:Me,setBlending:MA,setMaterial:ie,setFlipSided:RA,setCullFace:IA,setLineWidth:WA,setPolygonOffset:ue,setScissorTest:we,activeTexture:S,bindTexture:w,unbindTexture:D,compressedTexImage2D:eA,compressedTexImage3D:$,texImage2D:q,texImage3D:UA,updateUBOMapping:gA,uniformBlockBinding:pA,texStorage2D:M,texStorage3D:iA,texSubImage2D:tA,texSubImage3D:BA,compressedTexSubImage2D:rA,compressedTexSubImage3D:hA,scissor:wA,viewport:xA,reset:VA}}function A1(n,A,e,t,i,r,s){const a=i.isWebGL2,o=i.maxTextures,l=i.maxCubemapSize,c=i.maxTextureSize,u=i.maxSamples,h=A.has("WEBGL_multisampled_render_to_texture")?A.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(S,w){return f?new OffscreenCanvas(S,w):Qs("canvas")}function v(S,w,D,eA){let $=1;if((S.width>eA||S.height>eA)&&($=eA/Math.max(S.width,S.height)),$<1||w===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const tA=w?Ts:Math.floor,BA=tA($*S.width),rA=tA($*S.height);m===void 0&&(m=E(BA,rA));const hA=D?E(BA,rA):m;return hA.width=BA,hA.height=rA,hA.getContext("2d").drawImage(S,0,0,BA,rA),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+BA+"x"+rA+")."),hA}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function C(S){return Eo(S.width)&&Eo(S.height)}function x(S){return a?!1:S.wrapS!==ct||S.wrapT!==ct||S.minFilter!==Oe&&S.minFilter!==je}function y(S,w){return S.generateMipmaps&&w&&S.minFilter!==Oe&&S.minFilter!==je}function U(S){n.generateMipmap(S)}function R(S,w,D,eA,$=!1){if(a===!1)return w;if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let tA=w;if(w===n.RED&&(D===n.FLOAT&&(tA=n.R32F),D===n.HALF_FLOAT&&(tA=n.R16F),D===n.UNSIGNED_BYTE&&(tA=n.R8)),w===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(tA=n.R8UI),D===n.UNSIGNED_SHORT&&(tA=n.R16UI),D===n.UNSIGNED_INT&&(tA=n.R32UI),D===n.BYTE&&(tA=n.R8I),D===n.SHORT&&(tA=n.R16I),D===n.INT&&(tA=n.R32I)),w===n.RG&&(D===n.FLOAT&&(tA=n.RG32F),D===n.HALF_FLOAT&&(tA=n.RG16F),D===n.UNSIGNED_BYTE&&(tA=n.RG8)),w===n.RGBA){const BA=$?Ss:ZA.getTransfer(eA);D===n.FLOAT&&(tA=n.RGBA32F),D===n.HALF_FLOAT&&(tA=n.RGBA16F),D===n.UNSIGNED_BYTE&&(tA=BA===ne?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&(tA=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(tA=n.RGB5_A1)}return(tA===n.R16F||tA===n.R32F||tA===n.RG16F||tA===n.RG32F||tA===n.RGBA16F||tA===n.RGBA32F)&&A.get("EXT_color_buffer_float"),tA}function B(S,w,D){return y(S,D)===!0||S.isFramebufferTexture&&S.minFilter!==Oe&&S.minFilter!==je?Math.log2(Math.max(w.width,w.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?w.mipmaps.length:1}function F(S){return S===Oe||S===Fl||S===ha?n.NEAREST:n.LINEAR}function k(S){const w=S.target;w.removeEventListener("dispose",k),X(w),w.isVideoTexture&&g.delete(w)}function Y(S){const w=S.target;w.removeEventListener("dispose",Y),O(w)}function X(S){const w=t.get(S);if(w.__webglInit===void 0)return;const D=S.source,eA=d.get(D);if(eA){const $=eA[w.__cacheKey];$.usedTimes--,$.usedTimes===0&&T(S),Object.keys(eA).length===0&&d.delete(D)}t.remove(S)}function T(S){const w=t.get(S);n.deleteTexture(w.__webglTexture);const D=S.source,eA=d.get(D);delete eA[w.__cacheKey],s.memory.textures--}function O(S){const w=S.texture,D=t.get(S),eA=t.get(w);if(eA.__webglTexture!==void 0&&(n.deleteTexture(eA.__webglTexture),s.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(D.__webglFramebuffer[$]))for(let tA=0;tA<D.__webglFramebuffer[$].length;tA++)n.deleteFramebuffer(D.__webglFramebuffer[$][tA]);else n.deleteFramebuffer(D.__webglFramebuffer[$]);D.__webglDepthbuffer&&n.deleteRenderbuffer(D.__webglDepthbuffer[$])}else{if(Array.isArray(D.__webglFramebuffer))for(let $=0;$<D.__webglFramebuffer.length;$++)n.deleteFramebuffer(D.__webglFramebuffer[$]);else n.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&n.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&n.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let $=0;$<D.__webglColorRenderbuffer.length;$++)D.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(D.__webglColorRenderbuffer[$]);D.__webglDepthRenderbuffer&&n.deleteRenderbuffer(D.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let $=0,tA=w.length;$<tA;$++){const BA=t.get(w[$]);BA.__webglTexture&&(n.deleteTexture(BA.__webglTexture),s.memory.textures--),t.remove(w[$])}t.remove(w),t.remove(S)}let W=0;function K(){W=0}function j(){const S=W;return S>=o&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+o),W+=1,S}function Z(S){const w=[];return w.push(S.wrapS),w.push(S.wrapT),w.push(S.wrapR||0),w.push(S.magFilter),w.push(S.minFilter),w.push(S.anisotropy),w.push(S.internalFormat),w.push(S.format),w.push(S.type),w.push(S.generateMipmaps),w.push(S.premultiplyAlpha),w.push(S.flipY),w.push(S.unpackAlignment),w.push(S.colorSpace),w.join()}function J(S,w){const D=t.get(S);if(S.isVideoTexture&&ue(S),S.isRenderTargetTexture===!1&&S.version>0&&D.__version!==S.version){const eA=S.image;if(eA===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(eA.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{QA(D,S,w);return}}e.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+w)}function Q(S,w){const D=t.get(S);if(S.version>0&&D.__version!==S.version){QA(D,S,w);return}e.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+w)}function N(S,w){const D=t.get(S);if(S.version>0&&D.__version!==S.version){QA(D,S,w);return}e.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+w)}function sA(S,w){const D=t.get(S);if(S.version>0&&D.__version!==S.version){te(D,S,w);return}e.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+w)}const lA={[vo]:n.REPEAT,[ct]:n.CLAMP_TO_EDGE,[_o]:n.MIRRORED_REPEAT},cA={[Oe]:n.NEAREST,[Fl]:n.NEAREST_MIPMAP_NEAREST,[ha]:n.NEAREST_MIPMAP_LINEAR,[je]:n.LINEAR,[_d]:n.LINEAR_MIPMAP_NEAREST,[ar]:n.LINEAR_MIPMAP_LINEAR},_A={[Rd]:n.NEVER,[Vd]:n.ALWAYS,[Hd]:n.LESS,[Pd]:n.LEQUAL,[Dd]:n.EQUAL,[Gd]:n.GEQUAL,[Nd]:n.GREATER,[Od]:n.NOTEQUAL};function TA(S,w,D){if(D?(n.texParameteri(S,n.TEXTURE_WRAP_S,lA[w.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,lA[w.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,lA[w.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,cA[w.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,cA[w.minFilter])):(n.texParameteri(S,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(S,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(w.wrapS!==ct||w.wrapT!==ct)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(S,n.TEXTURE_MAG_FILTER,F(w.magFilter)),n.texParameteri(S,n.TEXTURE_MIN_FILTER,F(w.minFilter)),w.minFilter!==Oe&&w.minFilter!==je&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,_A[w.compareFunction])),A.has("EXT_texture_filter_anisotropic")===!0){const eA=A.get("EXT_texture_filter_anisotropic");if(w.magFilter===Oe||w.minFilter!==ha&&w.minFilter!==ar||w.type===qt&&A.has("OES_texture_float_linear")===!1||a===!1&&w.type===or&&A.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||t.get(w).__currentAnisotropy)&&(n.texParameterf(S,eA.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),t.get(w).__currentAnisotropy=w.anisotropy)}}function SA(S,w){let D=!1;S.__webglInit===void 0&&(S.__webglInit=!0,w.addEventListener("dispose",k));const eA=w.source;let $=d.get(eA);$===void 0&&($={},d.set(eA,$));const tA=Z(w);if(tA!==S.__cacheKey){$[tA]===void 0&&($[tA]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,D=!0),$[tA].usedTimes++;const BA=$[S.__cacheKey];BA!==void 0&&($[S.__cacheKey].usedTimes--,BA.usedTimes===0&&T(w)),S.__cacheKey=tA,S.__webglTexture=$[tA].texture}return D}function QA(S,w,D){let eA=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(eA=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(eA=n.TEXTURE_3D);const $=SA(S,w),tA=w.source;e.bindTexture(eA,S.__webglTexture,n.TEXTURE0+D);const BA=t.get(tA);if(tA.version!==BA.__version||$===!0){e.activeTexture(n.TEXTURE0+D);const rA=ZA.getPrimaries(ZA.workingColorSpace),hA=w.colorSpace===tt?null:ZA.getPrimaries(w.colorSpace),M=w.colorSpace===tt||rA===hA?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,M);const iA=x(w)&&C(w.image)===!1;let q=v(w.image,iA,!1,c);q=we(w,q);const UA=C(q)||a,wA=r.convert(w.format,w.colorSpace);let xA=r.convert(w.type),gA=R(w.internalFormat,wA,xA,w.colorSpace,w.isVideoTexture);TA(eA,w,UA);let pA;const VA=w.mipmaps,b=a&&w.isVideoTexture!==!0,aA=BA.__version===void 0||$===!0,AA=B(w,q,UA);if(w.isDepthTexture)gA=n.DEPTH_COMPONENT,a?w.type===qt?gA=n.DEPTH_COMPONENT32F:w.type===Zt?gA=n.DEPTH_COMPONENT24:w.type===yn?gA=n.DEPTH24_STENCIL8:gA=n.DEPTH_COMPONENT16:w.type===qt&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Sn&&gA===n.DEPTH_COMPONENT&&w.type!==qo&&w.type!==Zt&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Zt,xA=r.convert(w.type)),w.format===Ui&&gA===n.DEPTH_COMPONENT&&(gA=n.DEPTH_STENCIL,w.type!==yn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=yn,xA=r.convert(w.type))),aA&&(b?e.texStorage2D(n.TEXTURE_2D,1,gA,q.width,q.height):e.texImage2D(n.TEXTURE_2D,0,gA,q.width,q.height,0,wA,xA,null));else if(w.isDataTexture)if(VA.length>0&&UA){b&&aA&&e.texStorage2D(n.TEXTURE_2D,AA,gA,VA[0].width,VA[0].height);for(let z=0,nA=VA.length;z<nA;z++)pA=VA[z],b?e.texSubImage2D(n.TEXTURE_2D,z,0,0,pA.width,pA.height,wA,xA,pA.data):e.texImage2D(n.TEXTURE_2D,z,gA,pA.width,pA.height,0,wA,xA,pA.data);w.generateMipmaps=!1}else b?(aA&&e.texStorage2D(n.TEXTURE_2D,AA,gA,q.width,q.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,q.width,q.height,wA,xA,q.data)):e.texImage2D(n.TEXTURE_2D,0,gA,q.width,q.height,0,wA,xA,q.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){b&&aA&&e.texStorage3D(n.TEXTURE_2D_ARRAY,AA,gA,VA[0].width,VA[0].height,q.depth);for(let z=0,nA=VA.length;z<nA;z++)pA=VA[z],w.format!==ut?wA!==null?b?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,z,0,0,0,pA.width,pA.height,q.depth,wA,pA.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,z,gA,pA.width,pA.height,q.depth,0,pA.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):b?e.texSubImage3D(n.TEXTURE_2D_ARRAY,z,0,0,0,pA.width,pA.height,q.depth,wA,xA,pA.data):e.texImage3D(n.TEXTURE_2D_ARRAY,z,gA,pA.width,pA.height,q.depth,0,wA,xA,pA.data)}else{b&&aA&&e.texStorage2D(n.TEXTURE_2D,AA,gA,VA[0].width,VA[0].height);for(let z=0,nA=VA.length;z<nA;z++)pA=VA[z],w.format!==ut?wA!==null?b?e.compressedTexSubImage2D(n.TEXTURE_2D,z,0,0,pA.width,pA.height,wA,pA.data):e.compressedTexImage2D(n.TEXTURE_2D,z,gA,pA.width,pA.height,0,pA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):b?e.texSubImage2D(n.TEXTURE_2D,z,0,0,pA.width,pA.height,wA,xA,pA.data):e.texImage2D(n.TEXTURE_2D,z,gA,pA.width,pA.height,0,wA,xA,pA.data)}else if(w.isDataArrayTexture)b?(aA&&e.texStorage3D(n.TEXTURE_2D_ARRAY,AA,gA,q.width,q.height,q.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,wA,xA,q.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,gA,q.width,q.height,q.depth,0,wA,xA,q.data);else if(w.isData3DTexture)b?(aA&&e.texStorage3D(n.TEXTURE_3D,AA,gA,q.width,q.height,q.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,wA,xA,q.data)):e.texImage3D(n.TEXTURE_3D,0,gA,q.width,q.height,q.depth,0,wA,xA,q.data);else if(w.isFramebufferTexture){if(aA)if(b)e.texStorage2D(n.TEXTURE_2D,AA,gA,q.width,q.height);else{let z=q.width,nA=q.height;for(let CA=0;CA<AA;CA++)e.texImage2D(n.TEXTURE_2D,CA,gA,z,nA,0,wA,xA,null),z>>=1,nA>>=1}}else if(VA.length>0&&UA){b&&aA&&e.texStorage2D(n.TEXTURE_2D,AA,gA,VA[0].width,VA[0].height);for(let z=0,nA=VA.length;z<nA;z++)pA=VA[z],b?e.texSubImage2D(n.TEXTURE_2D,z,0,0,wA,xA,pA):e.texImage2D(n.TEXTURE_2D,z,gA,wA,xA,pA);w.generateMipmaps=!1}else b?(aA&&e.texStorage2D(n.TEXTURE_2D,AA,gA,q.width,q.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,wA,xA,q)):e.texImage2D(n.TEXTURE_2D,0,gA,wA,xA,q);y(w,UA)&&U(eA),BA.__version=tA.version,w.onUpdate&&w.onUpdate(w)}S.__version=w.version}function te(S,w,D){if(w.image.length!==6)return;const eA=SA(S,w),$=w.source;e.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+D);const tA=t.get($);if($.version!==tA.__version||eA===!0){e.activeTexture(n.TEXTURE0+D);const BA=ZA.getPrimaries(ZA.workingColorSpace),rA=w.colorSpace===tt?null:ZA.getPrimaries(w.colorSpace),hA=w.colorSpace===tt||BA===rA?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,hA);const M=w.isCompressedTexture||w.image[0].isCompressedTexture,iA=w.image[0]&&w.image[0].isDataTexture,q=[];for(let z=0;z<6;z++)!M&&!iA?q[z]=v(w.image[z],!1,!0,l):q[z]=iA?w.image[z].image:w.image[z],q[z]=we(w,q[z]);const UA=q[0],wA=C(UA)||a,xA=r.convert(w.format,w.colorSpace),gA=r.convert(w.type),pA=R(w.internalFormat,xA,gA,w.colorSpace),VA=a&&w.isVideoTexture!==!0,b=tA.__version===void 0||eA===!0;let aA=B(w,UA,wA);TA(n.TEXTURE_CUBE_MAP,w,wA);let AA;if(M){VA&&b&&e.texStorage2D(n.TEXTURE_CUBE_MAP,aA,pA,UA.width,UA.height);for(let z=0;z<6;z++){AA=q[z].mipmaps;for(let nA=0;nA<AA.length;nA++){const CA=AA[nA];w.format!==ut?xA!==null?VA?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,nA,0,0,CA.width,CA.height,xA,CA.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,nA,pA,CA.width,CA.height,0,CA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):VA?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,nA,0,0,CA.width,CA.height,xA,gA,CA.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,nA,pA,CA.width,CA.height,0,xA,gA,CA.data)}}}else{AA=w.mipmaps,VA&&b&&(AA.length>0&&aA++,e.texStorage2D(n.TEXTURE_CUBE_MAP,aA,pA,q[0].width,q[0].height));for(let z=0;z<6;z++)if(iA){VA?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,q[z].width,q[z].height,xA,gA,q[z].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,pA,q[z].width,q[z].height,0,xA,gA,q[z].data);for(let nA=0;nA<AA.length;nA++){const KA=AA[nA].image[z].image;VA?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,nA+1,0,0,KA.width,KA.height,xA,gA,KA.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,nA+1,pA,KA.width,KA.height,0,xA,gA,KA.data)}}else{VA?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,xA,gA,q[z]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,pA,xA,gA,q[z]);for(let nA=0;nA<AA.length;nA++){const CA=AA[nA];VA?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,nA+1,0,0,xA,gA,CA.image[z]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,nA+1,pA,xA,gA,CA.image[z])}}}y(w,wA)&&U(n.TEXTURE_CUBE_MAP),tA.__version=$.version,w.onUpdate&&w.onUpdate(w)}S.__version=w.version}function DA(S,w,D,eA,$,tA){const BA=r.convert(D.format,D.colorSpace),rA=r.convert(D.type),hA=R(D.internalFormat,BA,rA,D.colorSpace);if(!t.get(w).__hasExternalTextures){const iA=Math.max(1,w.width>>tA),q=Math.max(1,w.height>>tA);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?e.texImage3D($,tA,hA,iA,q,w.depth,0,BA,rA,null):e.texImage2D($,tA,hA,iA,q,0,BA,rA,null)}e.bindFramebuffer(n.FRAMEBUFFER,S),WA(w)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,eA,$,t.get(D).__webglTexture,0,IA(w)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,eA,$,t.get(D).__webglTexture,tA),e.bindFramebuffer(n.FRAMEBUFFER,null)}function H(S,w,D){if(n.bindRenderbuffer(n.RENDERBUFFER,S),w.depthBuffer&&!w.stencilBuffer){let eA=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(D||WA(w)){const $=w.depthTexture;$&&$.isDepthTexture&&($.type===qt?eA=n.DEPTH_COMPONENT32F:$.type===Zt&&(eA=n.DEPTH_COMPONENT24));const tA=IA(w);WA(w)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,tA,eA,w.width,w.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,tA,eA,w.width,w.height)}else n.renderbufferStorage(n.RENDERBUFFER,eA,w.width,w.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,S)}else if(w.depthBuffer&&w.stencilBuffer){const eA=IA(w);D&&WA(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,eA,n.DEPTH24_STENCIL8,w.width,w.height):WA(w)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,eA,n.DEPTH24_STENCIL8,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,S)}else{const eA=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let $=0;$<eA.length;$++){const tA=eA[$],BA=r.convert(tA.format,tA.colorSpace),rA=r.convert(tA.type),hA=R(tA.internalFormat,BA,rA,tA.colorSpace),M=IA(w);D&&WA(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,M,hA,w.width,w.height):WA(w)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,M,hA,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,hA,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Me(S,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,S),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!t.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),J(w.depthTexture,0);const eA=t.get(w.depthTexture).__webglTexture,$=IA(w);if(w.depthTexture.format===Sn)WA(w)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,eA,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,eA,0);else if(w.depthTexture.format===Ui)WA(w)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,eA,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,eA,0);else throw new Error("Unknown depthTexture format")}function EA(S){const w=t.get(S),D=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!w.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");Me(w.__webglFramebuffer,S)}else if(D){w.__webglDepthbuffer=[];for(let eA=0;eA<6;eA++)e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[eA]),w.__webglDepthbuffer[eA]=n.createRenderbuffer(),H(w.__webglDepthbuffer[eA],S,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=n.createRenderbuffer(),H(w.__webglDepthbuffer,S,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function FA(S,w,D){const eA=t.get(S);w!==void 0&&DA(eA.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&EA(S)}function MA(S){const w=S.texture,D=t.get(S),eA=t.get(w);S.addEventListener("dispose",Y),S.isWebGLMultipleRenderTargets!==!0&&(eA.__webglTexture===void 0&&(eA.__webglTexture=n.createTexture()),eA.__version=w.version,s.memory.textures++);const $=S.isWebGLCubeRenderTarget===!0,tA=S.isWebGLMultipleRenderTargets===!0,BA=C(S)||a;if($){D.__webglFramebuffer=[];for(let rA=0;rA<6;rA++)if(a&&w.mipmaps&&w.mipmaps.length>0){D.__webglFramebuffer[rA]=[];for(let hA=0;hA<w.mipmaps.length;hA++)D.__webglFramebuffer[rA][hA]=n.createFramebuffer()}else D.__webglFramebuffer[rA]=n.createFramebuffer()}else{if(a&&w.mipmaps&&w.mipmaps.length>0){D.__webglFramebuffer=[];for(let rA=0;rA<w.mipmaps.length;rA++)D.__webglFramebuffer[rA]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(tA)if(i.drawBuffers){const rA=S.texture;for(let hA=0,M=rA.length;hA<M;hA++){const iA=t.get(rA[hA]);iA.__webglTexture===void 0&&(iA.__webglTexture=n.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&S.samples>0&&WA(S)===!1){const rA=tA?w:[w];D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let hA=0;hA<rA.length;hA++){const M=rA[hA];D.__webglColorRenderbuffer[hA]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[hA]);const iA=r.convert(M.format,M.colorSpace),q=r.convert(M.type),UA=R(M.internalFormat,iA,q,M.colorSpace,S.isXRRenderTarget===!0),wA=IA(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,wA,UA,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+hA,n.RENDERBUFFER,D.__webglColorRenderbuffer[hA])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),H(D.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){e.bindTexture(n.TEXTURE_CUBE_MAP,eA.__webglTexture),TA(n.TEXTURE_CUBE_MAP,w,BA);for(let rA=0;rA<6;rA++)if(a&&w.mipmaps&&w.mipmaps.length>0)for(let hA=0;hA<w.mipmaps.length;hA++)DA(D.__webglFramebuffer[rA][hA],S,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+rA,hA);else DA(D.__webglFramebuffer[rA],S,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+rA,0);y(w,BA)&&U(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(tA){const rA=S.texture;for(let hA=0,M=rA.length;hA<M;hA++){const iA=rA[hA],q=t.get(iA);e.bindTexture(n.TEXTURE_2D,q.__webglTexture),TA(n.TEXTURE_2D,iA,BA),DA(D.__webglFramebuffer,S,iA,n.COLOR_ATTACHMENT0+hA,n.TEXTURE_2D,0),y(iA,BA)&&U(n.TEXTURE_2D)}e.unbindTexture()}else{let rA=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?rA=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(rA,eA.__webglTexture),TA(rA,w,BA),a&&w.mipmaps&&w.mipmaps.length>0)for(let hA=0;hA<w.mipmaps.length;hA++)DA(D.__webglFramebuffer[hA],S,w,n.COLOR_ATTACHMENT0,rA,hA);else DA(D.__webglFramebuffer,S,w,n.COLOR_ATTACHMENT0,rA,0);y(w,BA)&&U(rA),e.unbindTexture()}S.depthBuffer&&EA(S)}function ie(S){const w=C(S)||a,D=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let eA=0,$=D.length;eA<$;eA++){const tA=D[eA];if(y(tA,w)){const BA=S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,rA=t.get(tA).__webglTexture;e.bindTexture(BA,rA),U(BA),e.unbindTexture()}}}function RA(S){if(a&&S.samples>0&&WA(S)===!1){const w=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],D=S.width,eA=S.height;let $=n.COLOR_BUFFER_BIT;const tA=[],BA=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rA=t.get(S),hA=S.isWebGLMultipleRenderTargets===!0;if(hA)for(let M=0;M<w.length;M++)e.bindFramebuffer(n.FRAMEBUFFER,rA.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+M,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,rA.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+M,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,rA.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,rA.__webglFramebuffer);for(let M=0;M<w.length;M++){tA.push(n.COLOR_ATTACHMENT0+M),S.depthBuffer&&tA.push(BA);const iA=rA.__ignoreDepthValues!==void 0?rA.__ignoreDepthValues:!1;if(iA===!1&&(S.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),hA&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,rA.__webglColorRenderbuffer[M]),iA===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[BA]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[BA])),hA){const q=t.get(w[M]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,q,0)}n.blitFramebuffer(0,0,D,eA,0,0,D,eA,$,n.NEAREST),p&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,tA)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),hA)for(let M=0;M<w.length;M++){e.bindFramebuffer(n.FRAMEBUFFER,rA.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+M,n.RENDERBUFFER,rA.__webglColorRenderbuffer[M]);const iA=t.get(w[M]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,rA.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+M,n.TEXTURE_2D,iA,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,rA.__webglMultisampledFramebuffer)}}function IA(S){return Math.min(u,S.samples)}function WA(S){const w=t.get(S);return a&&S.samples>0&&A.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ue(S){const w=s.render.frame;g.get(S)!==w&&(g.set(S,w),S.update())}function we(S,w){const D=S.colorSpace,eA=S.format,$=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===Co||D!==Ht&&D!==tt&&(ZA.getTransfer(D)===ne?a===!1?A.has("EXT_sRGB")===!0&&eA===ut?(S.format=Co,S.minFilter=je,S.generateMipmaps=!1):w=sh.sRGBToLinear(w):(eA!==ut||$!==nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),w}this.allocateTextureUnit=j,this.resetTextureUnits=K,this.setTexture2D=J,this.setTexture2DArray=Q,this.setTexture3D=N,this.setTextureCube=sA,this.rebindTextures=FA,this.setupRenderTarget=MA,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=RA,this.setupDepthRenderbuffer=EA,this.setupFrameBufferTexture=DA,this.useMultisampledRTT=WA}function e1(n,A,e){const t=e.isWebGL2;function i(r,s=tt){let a;const o=ZA.getTransfer(s);if(r===nn)return n.UNSIGNED_BYTE;if(r===ju)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Ah)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Cd)return n.BYTE;if(r===Ed)return n.SHORT;if(r===qo)return n.UNSIGNED_SHORT;if(r===$u)return n.INT;if(r===Zt)return n.UNSIGNED_INT;if(r===qt)return n.FLOAT;if(r===or)return t?n.HALF_FLOAT:(a=A.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===xd)return n.ALPHA;if(r===ut)return n.RGBA;if(r===Ud)return n.LUMINANCE;if(r===yd)return n.LUMINANCE_ALPHA;if(r===Sn)return n.DEPTH_COMPONENT;if(r===Ui)return n.DEPTH_STENCIL;if(r===Co)return a=A.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Sd)return n.RED;if(r===eh)return n.RED_INTEGER;if(r===Fd)return n.RG;if(r===th)return n.RG_INTEGER;if(r===nh)return n.RGBA_INTEGER;if(r===fa||r===da||r===pa||r===ga)if(o===ne)if(a=A.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===fa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===da)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===pa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ga)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=A.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===fa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===da)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===pa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ga)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ml||r===bl||r===Tl||r===Ql)if(a=A.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Ml)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===bl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Tl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ql)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Md)return a=A.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Il||r===Ll)if(a=A.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Il)return o===ne?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Ll)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Rl||r===Hl||r===Dl||r===Pl||r===Nl||r===Ol||r===Gl||r===Vl||r===Kl||r===kl||r===zl||r===Wl||r===Xl||r===Yl)if(a=A.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Rl)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Hl)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Dl)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Pl)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Nl)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ol)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Gl)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Vl)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Kl)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===kl)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===zl)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Wl)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Xl)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Yl)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ma||r===Jl||r===Zl)if(a=A.get("EXT_texture_compression_bptc"),a!==null){if(r===ma)return o===ne?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Jl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Zl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===bd||r===ql||r===$l||r===jl)if(a=A.get("EXT_texture_compression_rgtc"),a!==null){if(r===ma)return a.COMPRESSED_RED_RGTC1_EXT;if(r===ql)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===$l)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===jl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===yn?t?n.UNSIGNED_INT_24_8:(a=A.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:i}}class t1 extends At{constructor(A=[]){super(),this.isArrayCamera=!0,this.cameras=A}}class Gi extends Je{constructor(){super(),this.isGroup=!0,this.type="Group"}}const n1={type:"move"};class Oa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(A){return this._targetRay!==null&&this._targetRay.dispatchEvent(A),this._grip!==null&&this._grip.dispatchEvent(A),this._hand!==null&&this._hand.dispatchEvent(A),this}connect(A){if(A&&A.hand){const e=this._hand;if(e)for(const t of A.hand.values())this._getHandJoint(e,t)}return this.dispatchEvent({type:"connected",data:A}),this}disconnect(A){return this.dispatchEvent({type:"disconnected",data:A}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(A,e,t){let i=null,r=null,s=null;const a=this._targetRay,o=this._grip,l=this._hand;if(A&&e.session.visibilityState!=="visible-blurred"){if(l&&A.hand){s=!0;for(const m of A.hand.values()){const d=e.getJointPose(m,t),f=this._getHandJoint(l,m);d!==null&&(f.matrix.fromArray(d.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=d.radius),f.visible=d!==null}const c=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],h=c.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&h>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:A.handedness,target:this})):!l.inputState.pinching&&h<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:A.handedness,target:this}))}else o!==null&&A.gripSpace&&(r=e.getPose(A.gripSpace,t),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1));a!==null&&(i=e.getPose(A.targetRaySpace,t),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(n1)))}return a!==null&&(a.visible=i!==null),o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(A,e){if(A.joints[e.jointName]===void 0){const t=new Gi;t.matrixAutoUpdate=!1,t.visible=!1,A.joints[e.jointName]=t,A.add(t)}return A.joints[e.jointName]}}class i1 extends Ye{constructor(A,e,t,i,r,s,a,o,l,c){if(c=c!==void 0?c:Sn,c!==Sn&&c!==Ui)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");t===void 0&&c===Sn&&(t=Zt),t===void 0&&c===Ui&&(t=yn),super(null,i,r,s,a,o,c,t,l),this.isDepthTexture=!0,this.image={width:A,height:e},this.magFilter=a!==void 0?a:Oe,this.minFilter=o!==void 0?o:Oe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(A){return super.copy(A),this.compareFunction=A.compareFunction,this}toJSON(A){const e=super.toJSON(A);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class r1 extends Ln{constructor(A,e){super();const t=this;let i=null,r=1,s=null,a="local-floor",o=1,l=null,c=null,u=null,h=null,p=null,g=null;const m=e.getContextAttributes();let d=null,f=null;const E=[],v=[],C=new At;C.layers.enable(1),C.viewport=new Se;const x=new At;x.layers.enable(2),x.viewport=new Se;const y=[C,x],U=new t1;U.layers.enable(1),U.layers.enable(2);let R=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let N=E[Q];return N===void 0&&(N=new Oa,E[Q]=N),N.getTargetRaySpace()},this.getControllerGrip=function(Q){let N=E[Q];return N===void 0&&(N=new Oa,E[Q]=N),N.getGripSpace()},this.getHand=function(Q){let N=E[Q];return N===void 0&&(N=new Oa,E[Q]=N),N.getHandSpace()};function F(Q){const N=v.indexOf(Q.inputSource);if(N===-1)return;const sA=E[N];sA!==void 0&&(sA.update(Q.inputSource,Q.frame,l||s),sA.dispatchEvent({type:Q.type,data:Q.inputSource}))}function k(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",Y);for(let Q=0;Q<E.length;Q++){const N=v[Q];N!==null&&(v[Q]=null,E[Q].disconnect(N))}R=null,B=null,A.setRenderTarget(d),p=null,h=null,u=null,i=null,f=null,J.stop(),t.isPresenting=!1,t.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,t.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,t.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Q){if(i=Q,i!==null){if(d=A.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",k),i.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||A.capabilities.isWebGL2===!1){const N={antialias:i.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,N),i.updateRenderState({baseLayer:p}),f=new Tn(p.framebufferWidth,p.framebufferHeight,{format:ut,type:nn,colorSpace:A.outputColorSpace,stencilBuffer:m.stencil})}else{let N=null,sA=null,lA=null;m.depth&&(lA=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,N=m.stencil?Ui:Sn,sA=m.stencil?yn:Zt);const cA={colorFormat:e.RGBA8,depthFormat:lA,scaleFactor:r};u=new XRWebGLBinding(i,e),h=u.createProjectionLayer(cA),i.updateRenderState({layers:[h]}),f=new Tn(h.textureWidth,h.textureHeight,{format:ut,type:nn,depthTexture:new i1(h.textureWidth,h.textureHeight,sA,void 0,void 0,void 0,void 0,void 0,void 0,N),stencilBuffer:m.stencil,colorSpace:A.outputColorSpace,samples:m.antialias?4:0});const _A=A.properties.get(f);_A.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(o),l=null,s=await i.requestReferenceSpace(a),J.setContext(i),J.start(),t.isPresenting=!0,t.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function Y(Q){for(let N=0;N<Q.removed.length;N++){const sA=Q.removed[N],lA=v.indexOf(sA);lA>=0&&(v[lA]=null,E[lA].disconnect(sA))}for(let N=0;N<Q.added.length;N++){const sA=Q.added[N];let lA=v.indexOf(sA);if(lA===-1){for(let _A=0;_A<E.length;_A++)if(_A>=v.length){v.push(sA),lA=_A;break}else if(v[_A]===null){v[_A]=sA,lA=_A;break}if(lA===-1)break}const cA=E[lA];cA&&cA.connect(sA)}}const X=new I,T=new I;function O(Q,N,sA){X.setFromMatrixPosition(N.matrixWorld),T.setFromMatrixPosition(sA.matrixWorld);const lA=X.distanceTo(T),cA=N.projectionMatrix.elements,_A=sA.projectionMatrix.elements,TA=cA[14]/(cA[10]-1),SA=cA[14]/(cA[10]+1),QA=(cA[9]+1)/cA[5],te=(cA[9]-1)/cA[5],DA=(cA[8]-1)/cA[0],H=(_A[8]+1)/_A[0],Me=TA*DA,EA=TA*H,FA=lA/(-DA+H),MA=FA*-DA;N.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(MA),Q.translateZ(FA),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert();const ie=TA+FA,RA=SA+FA,IA=Me-MA,WA=EA+(lA-MA),ue=QA*SA/RA*ie,we=te*SA/RA*ie;Q.projectionMatrix.makePerspective(IA,WA,ue,we,ie,RA),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}function W(Q,N){N===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(N.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(i===null)return;U.near=x.near=C.near=Q.near,U.far=x.far=C.far=Q.far,(R!==U.near||B!==U.far)&&(i.updateRenderState({depthNear:U.near,depthFar:U.far}),R=U.near,B=U.far);const N=Q.parent,sA=U.cameras;W(U,N);for(let lA=0;lA<sA.length;lA++)W(sA[lA],N);sA.length===2?O(U,C,x):U.projectionMatrix.copy(C.projectionMatrix),K(Q,U,N)};function K(Q,N,sA){sA===null?Q.matrix.copy(N.matrixWorld):(Q.matrix.copy(sA.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(N.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(N.projectionMatrix),Q.projectionMatrixInverse.copy(N.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=lr*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(h===null&&p===null))return o},this.setFoveation=function(Q){o=Q,h!==null&&(h.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)};let j=null;function Z(Q,N){if(c=N.getViewerPose(l||s),g=N,c!==null){const sA=c.views;p!==null&&(A.setRenderTargetFramebuffer(f,p.framebuffer),A.setRenderTarget(f));let lA=!1;sA.length!==U.cameras.length&&(U.cameras.length=0,lA=!0);for(let cA=0;cA<sA.length;cA++){const _A=sA[cA];let TA=null;if(p!==null)TA=p.getViewport(_A);else{const QA=u.getViewSubImage(h,_A);TA=QA.viewport,cA===0&&(A.setRenderTargetTextures(f,QA.colorTexture,h.ignoreDepthValues?void 0:QA.depthStencilTexture),A.setRenderTarget(f))}let SA=y[cA];SA===void 0&&(SA=new At,SA.layers.enable(cA),SA.viewport=new Se,y[cA]=SA),SA.matrix.fromArray(_A.transform.matrix),SA.matrix.decompose(SA.position,SA.quaternion,SA.scale),SA.projectionMatrix.fromArray(_A.projectionMatrix),SA.projectionMatrixInverse.copy(SA.projectionMatrix).invert(),SA.viewport.set(TA.x,TA.y,TA.width,TA.height),cA===0&&(U.matrix.copy(SA.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),lA===!0&&U.cameras.push(SA)}}for(let sA=0;sA<E.length;sA++){const lA=v[sA],cA=E[sA];lA!==null&&cA!==void 0&&cA.update(lA,N,l||s)}j&&j(Q,N),N.detectedPlanes&&t.dispatchEvent({type:"planesdetected",data:N}),g=null}const J=new Bh;J.setAnimationLoop(Z),this.setAnimationLoop=function(Q){j=Q},this.dispose=function(){}}}function s1(n,A){function e(d,f){d.matrixAutoUpdate===!0&&d.updateMatrix(),f.value.copy(d.matrix)}function t(d,f){f.color.getRGB(d.fogColor.value,dh(n)),f.isFog?(d.fogNear.value=f.near,d.fogFar.value=f.far):f.isFogExp2&&(d.fogDensity.value=f.density)}function i(d,f,E,v,C){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(d,f):f.isMeshToonMaterial?(r(d,f),u(d,f)):f.isMeshPhongMaterial?(r(d,f),c(d,f)):f.isMeshStandardMaterial?(r(d,f),h(d,f),f.isMeshPhysicalMaterial&&p(d,f,C)):f.isMeshMatcapMaterial?(r(d,f),g(d,f)):f.isMeshDepthMaterial?r(d,f):f.isMeshDistanceMaterial?(r(d,f),m(d,f)):f.isMeshNormalMaterial?r(d,f):f.isLineBasicMaterial?(s(d,f),f.isLineDashedMaterial&&a(d,f)):f.isPointsMaterial?o(d,f,E,v):f.isSpriteMaterial?l(d,f):f.isShadowMaterial?(d.color.value.copy(f.color),d.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(d,f){d.opacity.value=f.opacity,f.color&&d.diffuse.value.copy(f.color),f.emissive&&d.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(d.map.value=f.map,e(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,e(f.alphaMap,d.alphaMapTransform)),f.bumpMap&&(d.bumpMap.value=f.bumpMap,e(f.bumpMap,d.bumpMapTransform),d.bumpScale.value=f.bumpScale,f.side===Ve&&(d.bumpScale.value*=-1)),f.normalMap&&(d.normalMap.value=f.normalMap,e(f.normalMap,d.normalMapTransform),d.normalScale.value.copy(f.normalScale),f.side===Ve&&d.normalScale.value.negate()),f.displacementMap&&(d.displacementMap.value=f.displacementMap,e(f.displacementMap,d.displacementMapTransform),d.displacementScale.value=f.displacementScale,d.displacementBias.value=f.displacementBias),f.emissiveMap&&(d.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,d.emissiveMapTransform)),f.specularMap&&(d.specularMap.value=f.specularMap,e(f.specularMap,d.specularMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest);const E=A.get(f).envMap;if(E&&(d.envMap.value=E,d.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=f.reflectivity,d.ior.value=f.ior,d.refractionRatio.value=f.refractionRatio),f.lightMap){d.lightMap.value=f.lightMap;const v=n._useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=f.lightMapIntensity*v,e(f.lightMap,d.lightMapTransform)}f.aoMap&&(d.aoMap.value=f.aoMap,d.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,d.aoMapTransform))}function s(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,f.map&&(d.map.value=f.map,e(f.map,d.mapTransform))}function a(d,f){d.dashSize.value=f.dashSize,d.totalSize.value=f.dashSize+f.gapSize,d.scale.value=f.scale}function o(d,f,E,v){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.size.value=f.size*E,d.scale.value=v*.5,f.map&&(d.map.value=f.map,e(f.map,d.uvTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,e(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function l(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.rotation.value=f.rotation,f.map&&(d.map.value=f.map,e(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,e(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function c(d,f){d.specular.value.copy(f.specular),d.shininess.value=Math.max(f.shininess,1e-4)}function u(d,f){f.gradientMap&&(d.gradientMap.value=f.gradientMap)}function h(d,f){d.metalness.value=f.metalness,f.metalnessMap&&(d.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,d.metalnessMapTransform)),d.roughness.value=f.roughness,f.roughnessMap&&(d.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,d.roughnessMapTransform)),A.get(f).envMap&&(d.envMapIntensity.value=f.envMapIntensity)}function p(d,f,E){d.ior.value=f.ior,f.sheen>0&&(d.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),d.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(d.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,d.sheenColorMapTransform)),f.sheenRoughnessMap&&(d.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,d.sheenRoughnessMapTransform))),f.clearcoat>0&&(d.clearcoat.value=f.clearcoat,d.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(d.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,d.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(d.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ve&&d.clearcoatNormalScale.value.negate())),f.iridescence>0&&(d.iridescence.value=f.iridescence,d.iridescenceIOR.value=f.iridescenceIOR,d.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(d.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,d.iridescenceMapTransform)),f.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),f.transmission>0&&(d.transmission.value=f.transmission,d.transmissionSamplerMap.value=E.texture,d.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(d.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,d.transmissionMapTransform)),d.thickness.value=f.thickness,f.thicknessMap&&(d.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=f.attenuationDistance,d.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(d.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(d.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=f.specularIntensity,d.specularColor.value.copy(f.specularColor),f.specularColorMap&&(d.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,d.specularColorMapTransform)),f.specularIntensityMap&&(d.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,f){f.matcap&&(d.matcap.value=f.matcap)}function m(d,f){const E=A.get(f).light;d.referencePosition.value.setFromMatrixPosition(E.matrixWorld),d.nearDistance.value=E.shadow.camera.near,d.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function a1(n,A,e,t){let i={},r={},s=[];const a=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function o(E,v){const C=v.program;t.uniformBlockBinding(E,C)}function l(E,v){let C=i[E.id];C===void 0&&(g(E),C=c(E),i[E.id]=C,E.addEventListener("dispose",d));const x=v.program;t.updateUBOMapping(E,x);const y=A.render.frame;r[E.id]!==y&&(h(E),r[E.id]=y)}function c(E){const v=u();E.__bindingPointIndex=v;const C=n.createBuffer(),x=E.__size,y=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,C),n.bufferData(n.UNIFORM_BUFFER,x,y),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,C),C}function u(){for(let E=0;E<a;E++)if(s.indexOf(E)===-1)return s.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(E){const v=i[E.id],C=E.uniforms,x=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let y=0,U=C.length;y<U;y++){const R=C[y];if(p(R,y,x)===!0){const B=R.__offset,F=Array.isArray(R.value)?R.value:[R.value];let k=0;for(let Y=0;Y<F.length;Y++){const X=F[Y],T=m(X);typeof X=="number"?(R.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,B+k,R.__data)):X.isMatrix3?(R.__data[0]=X.elements[0],R.__data[1]=X.elements[1],R.__data[2]=X.elements[2],R.__data[3]=X.elements[0],R.__data[4]=X.elements[3],R.__data[5]=X.elements[4],R.__data[6]=X.elements[5],R.__data[7]=X.elements[0],R.__data[8]=X.elements[6],R.__data[9]=X.elements[7],R.__data[10]=X.elements[8],R.__data[11]=X.elements[0]):(X.toArray(R.__data,k),k+=T.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,R.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(E,v,C){const x=E.value;if(C[v]===void 0){if(typeof x=="number")C[v]=x;else{const y=Array.isArray(x)?x:[x],U=[];for(let R=0;R<y.length;R++)U.push(y[R].clone());C[v]=U}return!0}else if(typeof x=="number"){if(C[v]!==x)return C[v]=x,!0}else{const y=Array.isArray(C[v])?C[v]:[C[v]],U=Array.isArray(x)?x:[x];for(let R=0;R<y.length;R++){const B=y[R];if(B.equals(U[R])===!1)return B.copy(U[R]),!0}}return!1}function g(E){const v=E.uniforms;let C=0;const x=16;let y=0;for(let U=0,R=v.length;U<R;U++){const B=v[U],F={boundary:0,storage:0},k=Array.isArray(B.value)?B.value:[B.value];for(let Y=0,X=k.length;Y<X;Y++){const T=k[Y],O=m(T);F.boundary+=O.boundary,F.storage+=O.storage}if(B.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=C,U>0){y=C%x;const Y=x-y;y!==0&&Y-F.boundary<0&&(C+=x-y,B.__offset=C)}C+=F.storage}return y=C%x,y>0&&(C+=x-y),E.__size=C,E.__cache={},this}function m(E){const v={boundary:0,storage:0};return typeof E=="number"?(v.boundary=4,v.storage=4):E.isVector2?(v.boundary=8,v.storage=8):E.isVector3||E.isColor?(v.boundary=16,v.storage=12):E.isVector4?(v.boundary=16,v.storage=16):E.isMatrix3?(v.boundary=48,v.storage=48):E.isMatrix4?(v.boundary=64,v.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),v}function d(E){const v=E.target;v.removeEventListener("dispose",d);const C=s.indexOf(v.__bindingPointIndex);s.splice(C,1),n.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function f(){for(const E in i)n.deleteBuffer(i[E]);s=[],i={},r={}}return{bind:o,update:l,dispose:f}}class Eh{constructor(A={}){const{canvas:e=ip(),context:t=null,depth:i=!0,stencil:r=!0,alpha:s=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1}=A;this.isWebGLRenderer=!0;let h;t!==null?h=t.getContextAttributes().alpha:h=s;const p=new Uint32Array(4),g=new Int32Array(4);let m=null,d=null;const f=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ye,this._useLegacyLights=!1,this.toneMapping=tn,this.toneMappingExposure=1;const v=this;let C=!1,x=0,y=0,U=null,R=-1,B=null;const F=new Se,k=new Se;let Y=null;const X=new YA(0);let T=0,O=e.width,W=e.height,K=1,j=null,Z=null;const J=new Se(0,0,O,W),Q=new Se(0,0,O,W);let N=!1;const sA=new mh;let lA=!1,cA=!1,_A=null;const TA=new xe,SA=new NA,QA=new I,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function DA(){return U===null?K:1}let H=t;function Me(_,L){for(let P=0;P<_.length;P++){const G=_[P],V=e.getContext(G,L);if(V!==null)return V}return null}try{const _={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Zo}`),e.addEventListener("webglcontextlost",VA,!1),e.addEventListener("webglcontextrestored",b,!1),e.addEventListener("webglcontextcreationerror",aA,!1),H===null){const L=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&L.shift(),H=Me(L,_),H===null)throw Me(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let EA,FA,MA,ie,RA,IA,WA,ue,we,S,w,D,eA,$,tA,BA,rA,hA,M,iA,q,UA,wA,xA;function gA(){EA=new mm(H),FA=new cm(H,EA,A),EA.init(FA),UA=new e1(H,EA,FA),MA=new jB(H,EA,FA),ie=new vm(H),RA=new NB,IA=new A1(H,EA,MA,RA,FA,UA,ie),WA=new hm(v),ue=new gm(v),we=new Mp(H,FA),wA=new om(H,EA,we,FA),S=new Bm(H,we,ie,wA),w=new xm(H,S,we,ie),M=new Em(H,FA,IA),BA=new um(RA),D=new PB(v,WA,ue,EA,FA,wA,BA),eA=new s1(v,RA),$=new GB,tA=new XB(EA,FA),hA=new am(v,WA,ue,MA,w,h,o),rA=new $B(v,w,FA),xA=new a1(H,ie,FA,MA),iA=new lm(H,EA,ie,FA),q=new wm(H,EA,ie,FA),ie.programs=D.programs,v.capabilities=FA,v.extensions=EA,v.properties=RA,v.renderLists=$,v.shadowMap=rA,v.state=MA,v.info=ie}gA();const pA=new r1(v,H);this.xr=pA,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const _=EA.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){const _=EA.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(_){_!==void 0&&(K=_,this.setSize(O,W,!1))},this.getSize=function(_){return _.set(O,W)},this.setSize=function(_,L,P=!0){if(pA.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=_,W=L,e.width=Math.floor(_*K),e.height=Math.floor(L*K),P===!0&&(e.style.width=_+"px",e.style.height=L+"px"),this.setViewport(0,0,_,L)},this.getDrawingBufferSize=function(_){return _.set(O*K,W*K).floor()},this.setDrawingBufferSize=function(_,L,P){O=_,W=L,K=P,e.width=Math.floor(_*P),e.height=Math.floor(L*P),this.setViewport(0,0,_,L)},this.getCurrentViewport=function(_){return _.copy(F)},this.getViewport=function(_){return _.copy(J)},this.setViewport=function(_,L,P,G){_.isVector4?J.set(_.x,_.y,_.z,_.w):J.set(_,L,P,G),MA.viewport(F.copy(J).multiplyScalar(K).floor())},this.getScissor=function(_){return _.copy(Q)},this.setScissor=function(_,L,P,G){_.isVector4?Q.set(_.x,_.y,_.z,_.w):Q.set(_,L,P,G),MA.scissor(k.copy(Q).multiplyScalar(K).floor())},this.getScissorTest=function(){return N},this.setScissorTest=function(_){MA.setScissorTest(N=_)},this.setOpaqueSort=function(_){j=_},this.setTransparentSort=function(_){Z=_},this.getClearColor=function(_){return _.copy(hA.getClearColor())},this.setClearColor=function(){hA.setClearColor.apply(hA,arguments)},this.getClearAlpha=function(){return hA.getClearAlpha()},this.setClearAlpha=function(){hA.setClearAlpha.apply(hA,arguments)},this.clear=function(_=!0,L=!0,P=!0){let G=0;if(_){let V=!1;if(U!==null){const dA=U.texture.format;V=dA===nh||dA===th||dA===eh}if(V){const dA=U.texture.type,vA=dA===nn||dA===Zt||dA===qo||dA===yn||dA===ju||dA===Ah,yA=hA.getClearColor(),bA=hA.getClearAlpha(),OA=yA.r,LA=yA.g,HA=yA.b;vA?(p[0]=OA,p[1]=LA,p[2]=HA,p[3]=bA,H.clearBufferuiv(H.COLOR,0,p)):(g[0]=OA,g[1]=LA,g[2]=HA,g[3]=bA,H.clearBufferiv(H.COLOR,0,g))}else G|=H.COLOR_BUFFER_BIT}L&&(G|=H.DEPTH_BUFFER_BIT),P&&(G|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",VA,!1),e.removeEventListener("webglcontextrestored",b,!1),e.removeEventListener("webglcontextcreationerror",aA,!1),$.dispose(),tA.dispose(),RA.dispose(),WA.dispose(),ue.dispose(),w.dispose(),wA.dispose(),xA.dispose(),D.dispose(),pA.dispose(),pA.removeEventListener("sessionstart",Ze),pA.removeEventListener("sessionend",jA),_A&&(_A.dispose(),_A=null),Le.stop()};function VA(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function b(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const _=ie.autoReset,L=rA.enabled,P=rA.autoUpdate,G=rA.needsUpdate,V=rA.type;gA(),ie.autoReset=_,rA.enabled=L,rA.autoUpdate=P,rA.needsUpdate=G,rA.type=V}function aA(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function AA(_){const L=_.target;L.removeEventListener("dispose",AA),z(L)}function z(_){nA(_),RA.remove(_)}function nA(_){const L=RA.get(_).programs;L!==void 0&&(L.forEach(function(P){D.releaseProgram(P)}),_.isShaderMaterial&&D.releaseShaderCache(_))}this.renderBufferDirect=function(_,L,P,G,V,dA){L===null&&(L=te);const vA=V.isMesh&&V.matrixWorld.determinant()<0,yA=Pf(_,L,P,G,V);MA.setMaterial(G,vA);let bA=P.index,OA=1;if(G.wireframe===!0){if(bA=S.getWireframeAttribute(P),bA===void 0)return;OA=2}const LA=P.drawRange,HA=P.attributes.position;let oe=LA.start*OA,Ke=(LA.start+LA.count)*OA;dA!==null&&(oe=Math.max(oe,dA.start*OA),Ke=Math.min(Ke,(dA.start+dA.count)*OA)),bA!==null?(oe=Math.max(oe,0),Ke=Math.min(Ke,bA.count)):HA!=null&&(oe=Math.max(oe,0),Ke=Math.min(Ke,HA.count));const ve=Ke-oe;if(ve<0||ve===1/0)return;wA.setup(V,G,yA,P,bA);let Ct,ae=iA;if(bA!==null&&(Ct=we.get(bA),ae=q,ae.setIndex(Ct)),V.isMesh)G.wireframe===!0?(MA.setLineWidth(G.wireframeLinewidth*DA()),ae.setMode(H.LINES)):ae.setMode(H.TRIANGLES);else if(V.isLine){let kA=G.linewidth;kA===void 0&&(kA=1),MA.setLineWidth(kA*DA()),V.isLineSegments?ae.setMode(H.LINES):V.isLineLoop?ae.setMode(H.LINE_LOOP):ae.setMode(H.LINE_STRIP)}else V.isPoints?ae.setMode(H.POINTS):V.isSprite&&ae.setMode(H.TRIANGLES);if(V.isInstancedMesh)ae.renderInstances(oe,ve,V.count);else if(P.isInstancedBufferGeometry){const kA=P._maxInstanceCount!==void 0?P._maxInstanceCount:1/0,aa=Math.min(P.instanceCount,kA);ae.renderInstances(oe,ve,aa)}else ae.render(oe,ve)};function CA(_,L,P){_.transparent===!0&&_.side===Qt&&_.forceSinglePass===!1?(_.side=Ve,_.needsUpdate=!0,yr(_,L,P),_.side=an,_.needsUpdate=!0,yr(_,L,P),_.side=Qt):yr(_,L,P)}this.compile=function(_,L,P=null){P===null&&(P=_),d=tA.get(P),d.init(),E.push(d),P.traverseVisible(function(V){V.isLight&&V.layers.test(L.layers)&&(d.pushLight(V),V.castShadow&&d.pushShadow(V))}),_!==P&&_.traverseVisible(function(V){V.isLight&&V.layers.test(L.layers)&&(d.pushLight(V),V.castShadow&&d.pushShadow(V))}),d.setupLights(v._useLegacyLights);const G=new Set;return _.traverse(function(V){const dA=V.material;if(dA)if(Array.isArray(dA))for(let vA=0;vA<dA.length;vA++){const yA=dA[vA];CA(yA,P,V),G.add(yA)}else CA(dA,P,V),G.add(dA)}),E.pop(),d=null,G},this.compileAsync=function(_,L,P=null){const G=this.compile(_,L,P);return new Promise(V=>{function dA(){if(G.forEach(function(vA){RA.get(vA).currentProgram.isReady()&&G.delete(vA)}),G.size===0){V(_);return}setTimeout(dA,10)}EA.get("KHR_parallel_shader_compile")!==null?dA():setTimeout(dA,10)})};let KA=null;function he(_){KA&&KA(_)}function Ze(){Le.stop()}function jA(){Le.start()}const Le=new Bh;Le.setAnimationLoop(he),typeof self<"u"&&Le.setContext(self),this.setAnimationLoop=function(_){KA=_,pA.setAnimationLoop(_),_===null?Le.stop():Le.start()},pA.addEventListener("sessionstart",Ze),pA.addEventListener("sessionend",jA),this.render=function(_,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),pA.enabled===!0&&pA.isPresenting===!0&&(pA.cameraAutoUpdate===!0&&pA.updateCamera(L),L=pA.getCamera()),_.isScene===!0&&_.onBeforeRender(v,_,L,U),d=tA.get(_,E.length),d.init(),E.push(d),TA.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),sA.setFromProjectionMatrix(TA),cA=this.localClippingEnabled,lA=BA.init(this.clippingPlanes,cA),m=$.get(_,f.length),m.init(),f.push(m),pt(_,L,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(j,Z),this.info.render.frame++,lA===!0&&BA.beginShadows();const P=d.state.shadowsArray;if(rA.render(P,_,L),lA===!0&&BA.endShadows(),this.info.autoReset===!0&&this.info.reset(),hA.render(m,_),d.setupLights(v._useLegacyLights),L.isArrayCamera){const G=L.cameras;for(let V=0,dA=G.length;V<dA;V++){const vA=G[V];pl(m,_,vA,vA.viewport)}}else pl(m,_,L);U!==null&&(IA.updateMultisampleRenderTarget(U),IA.updateRenderTargetMipmap(U)),_.isScene===!0&&_.onAfterRender(v,_,L),wA.resetDefaultState(),R=-1,B=null,E.pop(),E.length>0?d=E[E.length-1]:d=null,f.pop(),f.length>0?m=f[f.length-1]:m=null};function pt(_,L,P,G){if(_.visible===!1)return;if(_.layers.test(L.layers)){if(_.isGroup)P=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(L);else if(_.isLight)d.pushLight(_),_.castShadow&&d.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||sA.intersectsSprite(_)){G&&QA.setFromMatrixPosition(_.matrixWorld).applyMatrix4(TA);const vA=w.update(_),yA=_.material;yA.visible&&m.push(_,vA,yA,P,QA.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||sA.intersectsObject(_))){const vA=w.update(_),yA=_.material;if(G&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),QA.copy(_.boundingSphere.center)):(vA.boundingSphere===null&&vA.computeBoundingSphere(),QA.copy(vA.boundingSphere.center)),QA.applyMatrix4(_.matrixWorld).applyMatrix4(TA)),Array.isArray(yA)){const bA=vA.groups;for(let OA=0,LA=bA.length;OA<LA;OA++){const HA=bA[OA],oe=yA[HA.materialIndex];oe&&oe.visible&&m.push(_,vA,oe,P,QA.z,HA)}}else yA.visible&&m.push(_,vA,yA,P,QA.z,null)}}const dA=_.children;for(let vA=0,yA=dA.length;vA<yA;vA++)pt(dA[vA],L,P,G)}function pl(_,L,P,G){const V=_.opaque,dA=_.transmissive,vA=_.transparent;d.setupLightsView(P),lA===!0&&BA.setGlobalState(v.clippingPlanes,P),dA.length>0&&Df(V,dA,L,P),G&&MA.viewport(F.copy(G)),V.length>0&&Ur(V,L,P),dA.length>0&&Ur(dA,L,P),vA.length>0&&Ur(vA,L,P),MA.buffers.depth.setTest(!0),MA.buffers.depth.setMask(!0),MA.buffers.color.setMask(!0),MA.setPolygonOffset(!1)}function Df(_,L,P,G){if((P.isScene===!0?P.overrideMaterial:null)!==null)return;const dA=FA.isWebGL2;_A===null&&(_A=new Tn(1,1,{generateMipmaps:!0,type:EA.has("EXT_color_buffer_half_float")?or:nn,minFilter:ar,samples:dA?4:0})),v.getDrawingBufferSize(SA),dA?_A.setSize(SA.x,SA.y):_A.setSize(Ts(SA.x),Ts(SA.y));const vA=v.getRenderTarget();v.setRenderTarget(_A),v.getClearColor(X),T=v.getClearAlpha(),T<1&&v.setClearColor(16777215,.5),v.clear();const yA=v.toneMapping;v.toneMapping=tn,Ur(_,P,G),IA.updateMultisampleRenderTarget(_A),IA.updateRenderTargetMipmap(_A);let bA=!1;for(let OA=0,LA=L.length;OA<LA;OA++){const HA=L[OA],oe=HA.object,Ke=HA.geometry,ve=HA.material,Ct=HA.group;if(ve.side===Qt&&oe.layers.test(G.layers)){const ae=ve.side;ve.side=Ve,ve.needsUpdate=!0,gl(oe,P,G,Ke,ve,Ct),ve.side=ae,ve.needsUpdate=!0,bA=!0}}bA===!0&&(IA.updateMultisampleRenderTarget(_A),IA.updateRenderTargetMipmap(_A)),v.setRenderTarget(vA),v.setClearColor(X,T),v.toneMapping=yA}function Ur(_,L,P){const G=L.isScene===!0?L.overrideMaterial:null;for(let V=0,dA=_.length;V<dA;V++){const vA=_[V],yA=vA.object,bA=vA.geometry,OA=G===null?vA.material:G,LA=vA.group;yA.layers.test(P.layers)&&gl(yA,L,P,bA,OA,LA)}}function gl(_,L,P,G,V,dA){_.onBeforeRender(v,L,P,G,V,dA),_.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),V.onBeforeRender(v,L,P,G,_,dA),V.transparent===!0&&V.side===Qt&&V.forceSinglePass===!1?(V.side=Ve,V.needsUpdate=!0,v.renderBufferDirect(P,L,G,V,_,dA),V.side=an,V.needsUpdate=!0,v.renderBufferDirect(P,L,G,V,_,dA),V.side=Qt):v.renderBufferDirect(P,L,G,V,_,dA),_.onAfterRender(v,L,P,G,V,dA)}function yr(_,L,P){L.isScene!==!0&&(L=te);const G=RA.get(_),V=d.state.lights,dA=d.state.shadowsArray,vA=V.state.version,yA=D.getParameters(_,V.state,dA,L,P),bA=D.getProgramCacheKey(yA);let OA=G.programs;G.environment=_.isMeshStandardMaterial?L.environment:null,G.fog=L.fog,G.envMap=(_.isMeshStandardMaterial?ue:WA).get(_.envMap||G.environment),OA===void 0&&(_.addEventListener("dispose",AA),OA=new Map,G.programs=OA);let LA=OA.get(bA);if(LA!==void 0){if(G.currentProgram===LA&&G.lightsStateVersion===vA)return Bl(_,yA),LA}else yA.uniforms=D.getUniforms(_),_.onBuild(P,yA,v),_.onBeforeCompile(yA,v),LA=D.acquireProgram(yA,bA),OA.set(bA,LA),G.uniforms=yA.uniforms;const HA=G.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(HA.clippingPlanes=BA.uniform),Bl(_,yA),G.needsLights=Of(_),G.lightsStateVersion=vA,G.needsLights&&(HA.ambientLightColor.value=V.state.ambient,HA.lightProbe.value=V.state.probe,HA.directionalLights.value=V.state.directional,HA.directionalLightShadows.value=V.state.directionalShadow,HA.spotLights.value=V.state.spot,HA.spotLightShadows.value=V.state.spotShadow,HA.rectAreaLights.value=V.state.rectArea,HA.ltc_1.value=V.state.rectAreaLTC1,HA.ltc_2.value=V.state.rectAreaLTC2,HA.pointLights.value=V.state.point,HA.pointLightShadows.value=V.state.pointShadow,HA.hemisphereLights.value=V.state.hemi,HA.directionalShadowMap.value=V.state.directionalShadowMap,HA.directionalShadowMatrix.value=V.state.directionalShadowMatrix,HA.spotShadowMap.value=V.state.spotShadowMap,HA.spotLightMatrix.value=V.state.spotLightMatrix,HA.spotLightMap.value=V.state.spotLightMap,HA.pointShadowMap.value=V.state.pointShadowMap,HA.pointShadowMatrix.value=V.state.pointShadowMatrix),G.currentProgram=LA,G.uniformsList=null,LA}function ml(_){if(_.uniformsList===null){const L=_.currentProgram.getUniforms();_.uniformsList=_s.seqWithValue(L.seq,_.uniforms)}return _.uniformsList}function Bl(_,L){const P=RA.get(_);P.outputColorSpace=L.outputColorSpace,P.instancing=L.instancing,P.instancingColor=L.instancingColor,P.skinning=L.skinning,P.morphTargets=L.morphTargets,P.morphNormals=L.morphNormals,P.morphColors=L.morphColors,P.morphTargetsCount=L.morphTargetsCount,P.numClippingPlanes=L.numClippingPlanes,P.numIntersection=L.numClipIntersection,P.vertexAlphas=L.vertexAlphas,P.vertexTangents=L.vertexTangents,P.toneMapping=L.toneMapping}function Pf(_,L,P,G,V){L.isScene!==!0&&(L=te),IA.resetTextureUnits();const dA=L.fog,vA=G.isMeshStandardMaterial?L.environment:null,yA=U===null?v.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Ht,bA=(G.isMeshStandardMaterial?ue:WA).get(G.envMap||vA),OA=G.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,LA=!!P.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),HA=!!P.morphAttributes.position,oe=!!P.morphAttributes.normal,Ke=!!P.morphAttributes.color;let ve=tn;G.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(ve=v.toneMapping);const Ct=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,ae=Ct!==void 0?Ct.length:0,kA=RA.get(G),aa=d.state.lights;if(lA===!0&&(cA===!0||_!==B)){const ke=_===B&&G.id===R;BA.setState(G,_,ke)}let fe=!1;G.version===kA.__version?(kA.needsLights&&kA.lightsStateVersion!==aa.state.version||kA.outputColorSpace!==yA||V.isInstancedMesh&&kA.instancing===!1||!V.isInstancedMesh&&kA.instancing===!0||V.isSkinnedMesh&&kA.skinning===!1||!V.isSkinnedMesh&&kA.skinning===!0||V.isInstancedMesh&&kA.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&kA.instancingColor===!1&&V.instanceColor!==null||kA.envMap!==bA||G.fog===!0&&kA.fog!==dA||kA.numClippingPlanes!==void 0&&(kA.numClippingPlanes!==BA.numPlanes||kA.numIntersection!==BA.numIntersection)||kA.vertexAlphas!==OA||kA.vertexTangents!==LA||kA.morphTargets!==HA||kA.morphNormals!==oe||kA.morphColors!==Ke||kA.toneMapping!==ve||FA.isWebGL2===!0&&kA.morphTargetsCount!==ae)&&(fe=!0):(fe=!0,kA.__version=G.version);let cn=kA.currentProgram;fe===!0&&(cn=yr(G,L,V));let wl=!1,Ti=!1,oa=!1;const Re=cn.getUniforms(),un=kA.uniforms;if(MA.useProgram(cn.program)&&(wl=!0,Ti=!0,oa=!0),G.id!==R&&(R=G.id,Ti=!0),wl||B!==_){Re.setValue(H,"projectionMatrix",_.projectionMatrix),Re.setValue(H,"viewMatrix",_.matrixWorldInverse);const ke=Re.map.cameraPosition;ke!==void 0&&ke.setValue(H,QA.setFromMatrixPosition(_.matrixWorld)),FA.logarithmicDepthBuffer&&Re.setValue(H,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Re.setValue(H,"isOrthographic",_.isOrthographicCamera===!0),B!==_&&(B=_,Ti=!0,oa=!0)}if(V.isSkinnedMesh){Re.setOptional(H,V,"bindMatrix"),Re.setOptional(H,V,"bindMatrixInverse");const ke=V.skeleton;ke&&(FA.floatVertexTextures?(ke.boneTexture===null&&ke.computeBoneTexture(),Re.setValue(H,"boneTexture",ke.boneTexture,IA),Re.setValue(H,"boneTextureSize",ke.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const la=P.morphAttributes;if((la.position!==void 0||la.normal!==void 0||la.color!==void 0&&FA.isWebGL2===!0)&&M.update(V,P,cn),(Ti||kA.receiveShadow!==V.receiveShadow)&&(kA.receiveShadow=V.receiveShadow,Re.setValue(H,"receiveShadow",V.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(un.envMap.value=bA,un.flipEnvMap.value=bA.isCubeTexture&&bA.isRenderTargetTexture===!1?-1:1),Ti&&(Re.setValue(H,"toneMappingExposure",v.toneMappingExposure),kA.needsLights&&Nf(un,oa),dA&&G.fog===!0&&eA.refreshFogUniforms(un,dA),eA.refreshMaterialUniforms(un,G,K,W,_A),_s.upload(H,ml(kA),un,IA)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(_s.upload(H,ml(kA),un,IA),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Re.setValue(H,"center",V.center),Re.setValue(H,"modelViewMatrix",V.modelViewMatrix),Re.setValue(H,"normalMatrix",V.normalMatrix),Re.setValue(H,"modelMatrix",V.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const ke=G.uniformsGroups;for(let ca=0,Gf=ke.length;ca<Gf;ca++)if(FA.isWebGL2){const vl=ke[ca];xA.update(vl,cn),xA.bind(vl,cn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return cn}function Nf(_,L){_.ambientLightColor.needsUpdate=L,_.lightProbe.needsUpdate=L,_.directionalLights.needsUpdate=L,_.directionalLightShadows.needsUpdate=L,_.pointLights.needsUpdate=L,_.pointLightShadows.needsUpdate=L,_.spotLights.needsUpdate=L,_.spotLightShadows.needsUpdate=L,_.rectAreaLights.needsUpdate=L,_.hemisphereLights.needsUpdate=L}function Of(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(_,L,P){RA.get(_.texture).__webglTexture=L,RA.get(_.depthTexture).__webglTexture=P;const G=RA.get(_);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=P===void 0,G.__autoAllocateDepthBuffer||EA.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(_,L){const P=RA.get(_);P.__webglFramebuffer=L,P.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(_,L=0,P=0){U=_,x=L,y=P;let G=!0,V=null,dA=!1,vA=!1;if(_){const bA=RA.get(_);bA.__useDefaultFramebuffer!==void 0?(MA.bindFramebuffer(H.FRAMEBUFFER,null),G=!1):bA.__webglFramebuffer===void 0?IA.setupRenderTarget(_):bA.__hasExternalTextures&&IA.rebindTextures(_,RA.get(_.texture).__webglTexture,RA.get(_.depthTexture).__webglTexture);const OA=_.texture;(OA.isData3DTexture||OA.isDataArrayTexture||OA.isCompressedArrayTexture)&&(vA=!0);const LA=RA.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(LA[L])?V=LA[L][P]:V=LA[L],dA=!0):FA.isWebGL2&&_.samples>0&&IA.useMultisampledRTT(_)===!1?V=RA.get(_).__webglMultisampledFramebuffer:Array.isArray(LA)?V=LA[P]:V=LA,F.copy(_.viewport),k.copy(_.scissor),Y=_.scissorTest}else F.copy(J).multiplyScalar(K).floor(),k.copy(Q).multiplyScalar(K).floor(),Y=N;if(MA.bindFramebuffer(H.FRAMEBUFFER,V)&&FA.drawBuffers&&G&&MA.drawBuffers(_,V),MA.viewport(F),MA.scissor(k),MA.setScissorTest(Y),dA){const bA=RA.get(_.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+L,bA.__webglTexture,P)}else if(vA){const bA=RA.get(_.texture),OA=L||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,bA.__webglTexture,P||0,OA)}R=-1},this.readRenderTargetPixels=function(_,L,P,G,V,dA,vA){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yA=RA.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&vA!==void 0&&(yA=yA[vA]),yA){MA.bindFramebuffer(H.FRAMEBUFFER,yA);try{const bA=_.texture,OA=bA.format,LA=bA.type;if(OA!==ut&&UA.convert(OA)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const HA=LA===or&&(EA.has("EXT_color_buffer_half_float")||FA.isWebGL2&&EA.has("EXT_color_buffer_float"));if(LA!==nn&&UA.convert(LA)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(LA===qt&&(FA.isWebGL2||EA.has("OES_texture_float")||EA.has("WEBGL_color_buffer_float")))&&!HA){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=_.width-G&&P>=0&&P<=_.height-V&&H.readPixels(L,P,G,V,UA.convert(OA),UA.convert(LA),dA)}finally{const bA=U!==null?RA.get(U).__webglFramebuffer:null;MA.bindFramebuffer(H.FRAMEBUFFER,bA)}}},this.copyFramebufferToTexture=function(_,L,P=0){const G=Math.pow(2,-P),V=Math.floor(L.image.width*G),dA=Math.floor(L.image.height*G);IA.setTexture2D(L,0),H.copyTexSubImage2D(H.TEXTURE_2D,P,0,0,_.x,_.y,V,dA),MA.unbindTexture()},this.copyTextureToTexture=function(_,L,P,G=0){const V=L.image.width,dA=L.image.height,vA=UA.convert(P.format),yA=UA.convert(P.type);IA.setTexture2D(P,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,P.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,P.unpackAlignment),L.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,G,_.x,_.y,V,dA,vA,yA,L.image.data):L.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,G,_.x,_.y,L.mipmaps[0].width,L.mipmaps[0].height,vA,L.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,G,_.x,_.y,vA,yA,L.image),G===0&&P.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),MA.unbindTexture()},this.copyTextureToTexture3D=function(_,L,P,G,V=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const dA=_.max.x-_.min.x+1,vA=_.max.y-_.min.y+1,yA=_.max.z-_.min.z+1,bA=UA.convert(G.format),OA=UA.convert(G.type);let LA;if(G.isData3DTexture)IA.setTexture3D(G,0),LA=H.TEXTURE_3D;else if(G.isDataArrayTexture)IA.setTexture2DArray(G,0),LA=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,G.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,G.unpackAlignment);const HA=H.getParameter(H.UNPACK_ROW_LENGTH),oe=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Ke=H.getParameter(H.UNPACK_SKIP_PIXELS),ve=H.getParameter(H.UNPACK_SKIP_ROWS),Ct=H.getParameter(H.UNPACK_SKIP_IMAGES),ae=P.isCompressedTexture?P.mipmaps[0]:P.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,ae.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ae.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,_.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,_.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,_.min.z),P.isDataTexture||P.isData3DTexture?H.texSubImage3D(LA,V,L.x,L.y,L.z,dA,vA,yA,bA,OA,ae.data):P.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(LA,V,L.x,L.y,L.z,dA,vA,yA,bA,ae.data)):H.texSubImage3D(LA,V,L.x,L.y,L.z,dA,vA,yA,bA,OA,ae),H.pixelStorei(H.UNPACK_ROW_LENGTH,HA),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,oe),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Ke),H.pixelStorei(H.UNPACK_SKIP_ROWS,ve),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ct),V===0&&G.generateMipmaps&&H.generateMipmap(LA),MA.unbindTexture()},this.initTexture=function(_){_.isCubeTexture?IA.setTextureCube(_,0):_.isData3DTexture?IA.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?IA.setTexture2DArray(_,0):IA.setTexture2D(_,0),MA.unbindTexture()},this.resetState=function(){x=0,y=0,U=null,MA.reset(),wA.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return It}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(A){this._outputColorSpace=A;const e=this.getContext();e.drawingBufferColorSpace=A===$o?"display-p3":"srgb",e.unpackColorSpace=ZA.workingColorSpace===Ws?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(A){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!A}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ye?Fn:ih}set outputEncoding(A){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=A===Fn?ye:Ht}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(A){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=A}}class o1 extends Eh{}o1.prototype.isWebGL1Renderer=!0;class l1 extends Je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(A,e){return super.copy(A,e),A.background!==null&&(this.background=A.background.clone()),A.environment!==null&&(this.environment=A.environment.clone()),A.fog!==null&&(this.fog=A.fog.clone()),this.backgroundBlurriness=A.backgroundBlurriness,this.backgroundIntensity=A.backgroundIntensity,A.overrideMaterial!==null&&(this.overrideMaterial=A.overrideMaterial.clone()),this.matrixAutoUpdate=A.matrixAutoUpdate,this}toJSON(A){const e=super.toJSON(A);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class c1{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(A,e){const t=this.getUtoTmapping(A);return this.getPoint(t,e)}getPoints(A=5){const e=[];for(let t=0;t<=A;t++)e.push(this.getPoint(t/A));return e}getSpacedPoints(A=5){const e=[];for(let t=0;t<=A;t++)e.push(this.getPointAt(t/A));return e}getLength(){const A=this.getLengths();return A[A.length-1]}getLengths(A=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===A+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let t,i=this.getPoint(0),r=0;e.push(0);for(let s=1;s<=A;s++)t=this.getPoint(s/A),r+=t.distanceTo(i),e.push(r),i=t;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(A,e){const t=this.getLengths();let i=0;const r=t.length;let s;e?s=e:s=A*t[r-1];let a=0,o=r-1,l;for(;a<=o;)if(i=Math.floor(a+(o-a)/2),l=t[i]-s,l<0)a=i+1;else if(l>0)o=i-1;else{o=i;break}if(i=o,t[i]===s)return i/(r-1);const c=t[i],h=t[i+1]-c,p=(s-c)/h;return(i+p)/(r-1)}getTangent(A,e){let i=A-1e-4,r=A+1e-4;i<0&&(i=0),r>1&&(r=1);const s=this.getPoint(i),a=this.getPoint(r),o=e||(s.isVector2?new NA:new I);return o.copy(a).sub(s).normalize(),o}getTangentAt(A,e){const t=this.getUtoTmapping(A);return this.getTangent(t,e)}computeFrenetFrames(A,e){const t=new I,i=[],r=[],s=[],a=new I,o=new xe;for(let p=0;p<=A;p++){const g=p/A;i[p]=this.getTangentAt(g,new I)}r[0]=new I,s[0]=new I;let l=Number.MAX_VALUE;const c=Math.abs(i[0].x),u=Math.abs(i[0].y),h=Math.abs(i[0].z);c<=l&&(l=c,t.set(1,0,0)),u<=l&&(l=u,t.set(0,1,0)),h<=l&&t.set(0,0,1),a.crossVectors(i[0],t).normalize(),r[0].crossVectors(i[0],a),s[0].crossVectors(i[0],r[0]);for(let p=1;p<=A;p++){if(r[p]=r[p-1].clone(),s[p]=s[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ee(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(o.makeRotationAxis(a,g))}s[p].crossVectors(i[p],r[p])}if(e===!0){let p=Math.acos(Ee(r[0].dot(r[A]),-1,1));p/=A,i[0].dot(a.crossVectors(r[0],r[A]))>0&&(p=-p);for(let g=1;g<=A;g++)r[g].applyMatrix4(o.makeRotationAxis(i[g],p*g)),s[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(A){return this.arcLengthDivisions=A.arcLengthDivisions,this}toJSON(){const A={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return A.arcLengthDivisions=this.arcLengthDivisions,A.type=this.type,A}fromJSON(A){return this.arcLengthDivisions=A.arcLengthDivisions,this}}class Vc{constructor(A=1,e=0,t=0){return this.radius=A,this.phi=e,this.theta=t,this}set(A,e,t){return this.radius=A,this.phi=e,this.theta=t,this}copy(A){return this.radius=A.radius,this.phi=A.phi,this.theta=A.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(A){return this.setFromCartesianCoords(A.x,A.y,A.z)}setFromCartesianCoords(A,e,t){return this.radius=Math.sqrt(A*A+e*e+t*t),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(A,t),this.phi=Math.acos(Ee(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zo);/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */class wt{constructor(A,e,t,i,r="div"){this.parent=A,this.object=e,this.property=t,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),wt.nextNameID=wt.nextNameID||0,this.$name.id="lil-gui-name-"+ ++wt.nextNameID,this.$widget=document.createElement(r),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(t)}name(A){return this._name=A,this.$name.innerHTML=A,this}onChange(A){return this._onChange=A,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(A){return this._onFinishChange=A,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(A=!0){return this.disable(!A)}disable(A=!0){return A===this._disabled||(this._disabled=A,this.domElement.classList.toggle("disabled",A),this.$disable.toggleAttribute("disabled",A)),this}show(A=!0){return this._hidden=!A,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(A){const e=this.parent.add(this.object,this.property,A);return e.name(this._name),this.destroy(),e}min(A){return this}max(A){return this}step(A){return this}decimals(A){return this}listen(A=!0){return this._listening=A,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const A=this.save();A!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=A}getValue(){return this.object[this.property]}setValue(A){return this.object[this.property]=A,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(A){return this.setValue(A),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}let u1=class extends wt{constructor(A,e,t){super(A,e,t,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}};function Uo(n){let A,e;return(A=n.match(/(#|0x)?([a-f0-9]{6})/i))?e=A[2]:(A=n.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(A[1]).toString(16).padStart(2,0)+parseInt(A[2]).toString(16).padStart(2,0)+parseInt(A[3]).toString(16).padStart(2,0):(A=n.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=A[1]+A[1]+A[2]+A[2]+A[3]+A[3]),!!e&&"#"+e}const h1={isPrimitive:!0,match:n=>typeof n=="string",fromHexString:Uo,toHexString:Uo},cr={isPrimitive:!0,match:n=>typeof n=="number",fromHexString:n=>parseInt(n.substring(1),16),toHexString:n=>"#"+n.toString(16).padStart(6,0)},f1={isPrimitive:!1,match:Array.isArray,fromHexString(n,A,e=1){const t=cr.fromHexString(n);A[0]=(t>>16&255)/255*e,A[1]=(t>>8&255)/255*e,A[2]=(255&t)/255*e},toHexString:([n,A,e],t=1)=>cr.toHexString(n*(t=255/t)<<16^A*t<<8^e*t<<0)},d1={isPrimitive:!1,match:n=>Object(n)===n,fromHexString(n,A,e=1){const t=cr.fromHexString(n);A.r=(t>>16&255)/255*e,A.g=(t>>8&255)/255*e,A.b=(255&t)/255*e},toHexString:({r:n,g:A,b:e},t=1)=>cr.toHexString(n*(t=255/t)<<16^A*t<<8^e*t<<0)},p1=[h1,cr,f1,d1];let g1=class extends wt{constructor(A,e,t,i){var r;super(A,e,t,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(r=this.initialValue,p1.find(s=>s.match(r))),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=Uo(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(A){if(this._format.isPrimitive){const e=this._format.fromHexString(A);this.setValue(e)}else this._format.fromHexString(A,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(A){return this._setValueFromHexString(A),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}};class Ga extends wt{constructor(A,e,t){super(A,e,t,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class m1 extends wt{constructor(A,e,t,i,r,s){super(A,e,t,"number"),this._initInput(),this.min(i),this.max(r);const a=s!==void 0;this.step(a?s:this._getImplicitStep(),a),this.updateDisplay()}decimals(A){return this._decimals=A,this.updateDisplay(),this}min(A){return this._min=A,this._onUpdateMinMax(),this}max(A){return this._max=A,this._onUpdateMinMax(),this}step(A,e=!0){return this._step=A,this._stepExplicit=e,this}updateDisplay(){const A=this.getValue();if(this._hasSlider){let e=(A-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=100*e+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?A:A.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const A=c=>{const u=parseFloat(this.$input.value);isNaN(u)||(this._snapClampSetValue(u+c),this.$input.value=this.getValue())};let e,t,i,r,s,a=!1;const o=c=>{if(a){const u=c.clientX-e,h=c.clientY-t;Math.abs(h)>5?(c.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(u)>5&&l()}if(!a){const u=c.clientY-i;s-=u*this._step*this._arrowKeyMultiplier(c),r+s>this._max?s=this._max-r:r+s<this._min&&(s=this._min-r),this._snapClampSetValue(r+s)}i=c.clientY},l=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",o),window.removeEventListener("mouseup",l)};this.$input.addEventListener("input",()=>{let c=parseFloat(this.$input.value);isNaN(c)||(this._stepExplicit&&(c=this._snap(c)),this.setValue(this._clamp(c)))}),this.$input.addEventListener("keydown",c=>{c.code==="Enter"&&this.$input.blur(),c.code==="ArrowUp"&&(c.preventDefault(),A(this._step*this._arrowKeyMultiplier(c))),c.code==="ArrowDown"&&(c.preventDefault(),A(this._step*this._arrowKeyMultiplier(c)*-1))}),this.$input.addEventListener("wheel",c=>{this._inputFocused&&(c.preventDefault(),A(this._step*this._normalizeMouseWheel(c)))},{passive:!1}),this.$input.addEventListener("mousedown",c=>{e=c.clientX,t=i=c.clientY,a=!0,r=this.getValue(),s=0,window.addEventListener("mousemove",o),window.addEventListener("mouseup",l)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const A=h=>{const p=this.$slider.getBoundingClientRect();let g=(m=h,d=p.left,f=p.right,E=this._min,v=this._max,(m-d)/(f-d)*(v-E)+E);var m,d,f,E,v;this._snapClampSetValue(g)},e=h=>{A(h.clientX)},t=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",e),window.removeEventListener("mouseup",t)};let i,r,s=!1;const a=h=>{h.preventDefault(),this._setDraggingStyle(!0),A(h.touches[0].clientX),s=!1},o=h=>{if(s){const p=h.touches[0].clientX-i,g=h.touches[0].clientY-r;Math.abs(p)>Math.abs(g)?a(h):(window.removeEventListener("touchmove",o),window.removeEventListener("touchend",l))}else h.preventDefault(),A(h.touches[0].clientX)},l=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",o),window.removeEventListener("touchend",l)},c=this._callOnFinishChange.bind(this);let u;this.$slider.addEventListener("mousedown",h=>{this._setDraggingStyle(!0),A(h.clientX),window.addEventListener("mousemove",e),window.addEventListener("mouseup",t)}),this.$slider.addEventListener("touchstart",h=>{h.touches.length>1||(this._hasScrollBar?(i=h.touches[0].clientX,r=h.touches[0].clientY,s=!0):a(h),window.addEventListener("touchmove",o,{passive:!1}),window.addEventListener("touchend",l))},{passive:!1}),this.$slider.addEventListener("wheel",h=>{if(Math.abs(h.deltaX)<Math.abs(h.deltaY)&&this._hasScrollBar)return;h.preventDefault();const p=this._normalizeMouseWheel(h)*this._step;this._snapClampSetValue(this.getValue()+p),this.$input.value=this.getValue(),clearTimeout(u),u=setTimeout(c,400)},{passive:!1})}_setDraggingStyle(A,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",A),document.body.classList.toggle("lil-gui-dragging",A),document.body.classList.toggle("lil-gui-"+e,A)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(A){let{deltaX:e,deltaY:t}=A;return Math.floor(A.deltaY)!==A.deltaY&&A.wheelDelta&&(e=0,t=-A.wheelDelta/120,t*=this._stepExplicit?1:10),e+-t}_arrowKeyMultiplier(A){let e=this._stepExplicit?1:10;return A.shiftKey?e*=10:A.altKey&&(e/=10),e}_snap(A){const e=Math.round(A/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(A){return A<this._min&&(A=this._min),A>this._max&&(A=this._max),A}_snapClampSetValue(A){this.setValue(this._clamp(this._snap(A)))}get _hasScrollBar(){const A=this.parent.root.$children;return A.scrollHeight>A.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class B1 extends wt{constructor(A,e,t,i){super(A,e,t,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(i)?i:Object.values(i),this._names=Array.isArray(i)?i:Object.keys(i),this._names.forEach(r=>{const s=document.createElement("option");s.innerHTML=r,this.$select.appendChild(s)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const A=this.getValue(),e=this._values.indexOf(A);return this.$select.selectedIndex=e,this.$display.innerHTML=e===-1?A:this._names[e],this}}let w1=class extends wt{constructor(A,e,t){super(A,e,t,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}},Kc=!1;class il{constructor({parent:A,autoPlace:e=A===void 0,container:t,width:i,title:r="Controls",injectStyles:s=!0,touchStyles:a=!0}={}){if(this.parent=A,this.root=A?A.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",o=>{o.code!=="Enter"&&o.code!=="Space"||(o.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),a&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!Kc&&s&&(function(o){const l=document.createElement("style");l.innerHTML=o;const c=document.querySelector("head link[rel=stylesheet], head style");c?document.head.insertBefore(l,c):document.head.appendChild(l)}('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"↕";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"▾";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"▸"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"✓";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),Kc=!0),t?t.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation())}add(A,e,t,i,r){if(Object(t)===t)return new B1(this,A,e,t);const s=A[e];switch(typeof s){case"number":return new m1(this,A,e,t,i,r);case"boolean":return new u1(this,A,e);case"string":return new w1(this,A,e);case"function":return new Ga(this,A,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,A,`
	value:`,s)}addColor(A,e,t=1){return new g1(this,A,e,t)}addFolder(A){return new il({parent:this,title:A})}load(A,e=!0){return A.controllers&&this.controllers.forEach(t=>{t instanceof Ga||t._name in A.controllers&&t.load(A.controllers[t._name])}),e&&A.folders&&this.folders.forEach(t=>{t._title in A.folders&&t.load(A.folders[t._title])}),this}save(A=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(t=>{if(!(t instanceof Ga)){if(t._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${t._name}"`);e.controllers[t._name]=t.save()}}),A&&this.folders.forEach(t=>{if(t._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${t._title}"`);e.folders[t._title]=t.save()}),e}open(A=!0){return this._closed=!A,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(A=!0){return this._hidden=!A,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(A=!0){return this._closed=!A,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const t=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",t))};this.$children.addEventListener("transitionend",t);const i=A?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!A),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(A){return this._title=A,this.$title.innerHTML=A,this}reset(A=!0){return(A?this.controllersRecursive():this.controllers).forEach(e=>e.reset()),this}onChange(A){return this._onChange=A,this}_callOnChange(A){this.parent&&this.parent._callOnChange(A),this._onChange!==void 0&&this._onChange.call(this,{object:A.object,property:A.property,value:A.getValue(),controller:A})}onFinishChange(A){return this._onFinishChange=A,this}_callOnFinishChange(A){this.parent&&this.parent._callOnFinishChange(A),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:A.object,property:A.property,value:A.getValue(),controller:A})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(A=>A.destroy())}controllersRecursive(){let A=Array.from(this.controllers);return this.folders.forEach(e=>{A=A.concat(e.controllersRecursive())}),A}foldersRecursive(){let A=Array.from(this.folders);return this.folders.forEach(e=>{A=A.concat(e.foldersRecursive())}),A}}const v1="modulepreload",_1=function(n){return"/climate-helix/"+n},kc={},C1=function(A,e,t){if(!e||e.length===0)return A();const i=document.getElementsByTagName("link");return Promise.all(e.map(r=>{if(r=_1(r),r in kc)return;kc[r]=!0;const s=r.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(!!t)for(let c=i.length-1;c>=0;c--){const u=i[c];if(u.href===r&&(!s||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const l=document.createElement("link");if(l.rel=s?"stylesheet":v1,s||(l.as="script",l.crossOrigin=""),l.href=r,document.head.appendChild(l),s)return new Promise((c,u)=>{l.addEventListener("load",c),l.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>A()).catch(r=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=r,window.dispatchEvent(s),!s.defaultPrevented)throw r})};/*!
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
***************************************************************************** */var yo=function(n,A){return yo=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])},yo(n,A)};function dt(n,A){if(typeof A!="function"&&A!==null)throw new TypeError("Class extends value "+String(A)+" is not a constructor or null");yo(n,A);function e(){this.constructor=n}n.prototype=A===null?Object.create(A):(e.prototype=A.prototype,new e)}var So=function(){return So=Object.assign||function(A){for(var e,t=1,i=arguments.length;t<i;t++){e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(A[r]=e[r])}return A},So.apply(this,arguments)};function Ne(n,A,e,t){function i(r){return r instanceof e?r:new e(function(s){s(r)})}return new(e||(e=Promise))(function(r,s){function a(c){try{l(t.next(c))}catch(u){s(u)}}function o(c){try{l(t.throw(c))}catch(u){s(u)}}function l(c){c.done?r(c.value):i(c.value).then(a,o)}l((t=t.apply(n,A||[])).next())})}function Qe(n,A){var e={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},t,i,r,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(l){return function(c){return o([l,c])}}function o(l){if(t)throw new TypeError("Generator is already executing.");for(;e;)try{if(t=1,i&&(r=l[0]&2?i.return:l[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,l[1])).done)return r;switch(i=0,r&&(l=[l[0]&2,r.value]),l[0]){case 0:case 1:r=l;break;case 4:return e.label++,{value:l[1],done:!1};case 5:e.label++,i=l[1],l=[0];continue;case 7:l=e.ops.pop(),e.trys.pop();continue;default:if(r=e.trys,!(r=r.length>0&&r[r.length-1])&&(l[0]===6||l[0]===2)){e=0;continue}if(l[0]===3&&(!r||l[1]>r[0]&&l[1]<r[3])){e.label=l[1];break}if(l[0]===6&&e.label<r[1]){e.label=r[1],r=l;break}if(r&&e.label<r[2]){e.label=r[2],e.ops.push(l);break}r[2]&&e.ops.pop(),e.trys.pop();continue}l=A.call(n,e)}catch(c){l=[6,c],i=0}finally{t=r=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function Jr(n,A,e){if(e||arguments.length===2)for(var t=0,i=A.length,r;t<i;t++)(r||!(t in A))&&(r||(r=Array.prototype.slice.call(A,0,t)),r[t]=A[t]);return n.concat(r||A)}var Dt=function(){function n(A,e,t,i){this.left=A,this.top=e,this.width=t,this.height=i}return n.prototype.add=function(A,e,t,i){return new n(this.left+A,this.top+e,this.width+t,this.height+i)},n.fromClientRect=function(A,e){return new n(e.left+A.windowBounds.left,e.top+A.windowBounds.top,e.width,e.height)},n.fromDOMRectList=function(A,e){var t=Array.from(e).find(function(i){return i.width!==0});return t?new n(t.left+A.windowBounds.left,t.top+A.windowBounds.top,t.width,t.height):n.EMPTY},n.EMPTY=new n(0,0,0,0),n}(),Zs=function(n,A){return Dt.fromClientRect(n,A.getBoundingClientRect())},E1=function(n){var A=n.body,e=n.documentElement;if(!A||!e)throw new Error("Unable to get document size");var t=Math.max(Math.max(A.scrollWidth,e.scrollWidth),Math.max(A.offsetWidth,e.offsetWidth),Math.max(A.clientWidth,e.clientWidth)),i=Math.max(Math.max(A.scrollHeight,e.scrollHeight),Math.max(A.offsetHeight,e.offsetHeight),Math.max(A.clientHeight,e.clientHeight));return new Dt(0,0,t,i)},qs=function(n){for(var A=[],e=0,t=n.length;e<t;){var i=n.charCodeAt(e++);if(i>=55296&&i<=56319&&e<t){var r=n.charCodeAt(e++);(r&64512)===56320?A.push(((i&1023)<<10)+(r&1023)+65536):(A.push(i),e--)}else A.push(i)}return A},ce=function(){for(var n=[],A=0;A<arguments.length;A++)n[A]=arguments[A];if(String.fromCodePoint)return String.fromCodePoint.apply(String,n);var e=n.length;if(!e)return"";for(var t=[],i=-1,r="";++i<e;){var s=n[i];s<=65535?t.push(s):(s-=65536,t.push((s>>10)+55296,s%1024+56320)),(i+1===e||t.length>16384)&&(r+=String.fromCharCode.apply(String,t),t.length=0)}return r},zc="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",x1=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Zr=0;Zr<zc.length;Zr++)x1[zc.charCodeAt(Zr)]=Zr;var Wc="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Vi=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var qr=0;qr<Wc.length;qr++)Vi[Wc.charCodeAt(qr)]=qr;var U1=function(n){var A=n.length*.75,e=n.length,t,i=0,r,s,a,o;n[n.length-1]==="="&&(A--,n[n.length-2]==="="&&A--);var l=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(A):new Array(A),c=Array.isArray(l)?l:new Uint8Array(l);for(t=0;t<e;t+=4)r=Vi[n.charCodeAt(t)],s=Vi[n.charCodeAt(t+1)],a=Vi[n.charCodeAt(t+2)],o=Vi[n.charCodeAt(t+3)],c[i++]=r<<2|s>>4,c[i++]=(s&15)<<4|a>>2,c[i++]=(a&3)<<6|o&63;return l},y1=function(n){for(var A=n.length,e=[],t=0;t<A;t+=2)e.push(n[t+1]<<8|n[t]);return e},S1=function(n){for(var A=n.length,e=[],t=0;t<A;t+=4)e.push(n[t+3]<<24|n[t+2]<<16|n[t+1]<<8|n[t]);return e},Mn=5,rl=6+5,Va=2,F1=rl-Mn,xh=65536>>Mn,M1=1<<Mn,Ka=M1-1,b1=1024>>Mn,T1=xh+b1,Q1=T1,I1=32,L1=Q1+I1,R1=65536>>rl,H1=1<<F1,D1=H1-1,Xc=function(n,A,e){return n.slice?n.slice(A,e):new Uint16Array(Array.prototype.slice.call(n,A,e))},P1=function(n,A,e){return n.slice?n.slice(A,e):new Uint32Array(Array.prototype.slice.call(n,A,e))},N1=function(n,A){var e=U1(n),t=Array.isArray(e)?S1(e):new Uint32Array(e),i=Array.isArray(e)?y1(e):new Uint16Array(e),r=24,s=Xc(i,r/2,t[4]/2),a=t[5]===2?Xc(i,(r+t[4])/2):P1(t,Math.ceil((r+t[4])/4));return new O1(t[0],t[1],t[2],t[3],s,a)},O1=function(){function n(A,e,t,i,r,s){this.initialValue=A,this.errorValue=e,this.highStart=t,this.highValueIndex=i,this.index=r,this.data=s}return n.prototype.get=function(A){var e;if(A>=0){if(A<55296||A>56319&&A<=65535)return e=this.index[A>>Mn],e=(e<<Va)+(A&Ka),this.data[e];if(A<=65535)return e=this.index[xh+(A-55296>>Mn)],e=(e<<Va)+(A&Ka),this.data[e];if(A<this.highStart)return e=L1-R1+(A>>rl),e=this.index[e],e+=A>>Mn&D1,e=this.index[e],e=(e<<Va)+(A&Ka),this.data[e];if(A<=1114111)return this.data[this.highValueIndex]}return this.errorValue},n}(),Yc="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",G1=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var $r=0;$r<Yc.length;$r++)G1[Yc.charCodeAt($r)]=$r;var V1="KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==",Jc=50,K1=1,Uh=2,yh=3,k1=4,z1=5,Zc=7,Sh=8,qc=9,$t=10,Fo=11,$c=12,Mo=13,W1=14,Ki=15,bo=16,jr=17,Hi=18,X1=19,jc=20,To=21,Di=22,ka=23,jn=24,Xe=25,ki=26,zi=27,Ai=28,Y1=29,vn=30,J1=31,As=32,es=33,Qo=34,Io=35,Lo=36,ur=37,Ro=38,Cs=39,Es=40,za=41,Fh=42,Z1=43,q1=[9001,65288],Mh="!",zA="×",ts="÷",Ho=N1(V1),Ft=[vn,Lo],Do=[K1,Uh,yh,z1],bh=[$t,Sh],Au=[zi,ki],$1=Do.concat(bh),eu=[Ro,Cs,Es,Qo,Io],j1=[Ki,Mo],Aw=function(n,A){A===void 0&&(A="strict");var e=[],t=[],i=[];return n.forEach(function(r,s){var a=Ho.get(r);if(a>Jc?(i.push(!0),a-=Jc):i.push(!1),["normal","auto","loose"].indexOf(A)!==-1&&[8208,8211,12316,12448].indexOf(r)!==-1)return t.push(s),e.push(bo);if(a===k1||a===Fo){if(s===0)return t.push(s),e.push(vn);var o=e[s-1];return $1.indexOf(o)===-1?(t.push(t[s-1]),e.push(o)):(t.push(s),e.push(vn))}if(t.push(s),a===J1)return e.push(A==="strict"?To:ur);if(a===Fh||a===Y1)return e.push(vn);if(a===Z1)return r>=131072&&r<=196605||r>=196608&&r<=262141?e.push(ur):e.push(vn);e.push(a)}),[t,e,i]},Wa=function(n,A,e,t){var i=t[e];if(Array.isArray(n)?n.indexOf(i)!==-1:n===i)for(var r=e;r<=t.length;){r++;var s=t[r];if(s===A)return!0;if(s!==$t)break}if(i===$t)for(var r=e;r>0;){r--;var a=t[r];if(Array.isArray(n)?n.indexOf(a)!==-1:n===a)for(var o=e;o<=t.length;){o++;var s=t[o];if(s===A)return!0;if(s!==$t)break}if(a!==$t)break}return!1},tu=function(n,A){for(var e=n;e>=0;){var t=A[e];if(t===$t)e--;else return t}return 0},ew=function(n,A,e,t,i){if(e[t]===0)return zA;var r=t-1;if(Array.isArray(i)&&i[r]===!0)return zA;var s=r-1,a=r+1,o=A[r],l=s>=0?A[s]:0,c=A[a];if(o===Uh&&c===yh)return zA;if(Do.indexOf(o)!==-1)return Mh;if(Do.indexOf(c)!==-1||bh.indexOf(c)!==-1)return zA;if(tu(r,A)===Sh)return ts;if(Ho.get(n[r])===Fo||(o===As||o===es)&&Ho.get(n[a])===Fo||o===Zc||c===Zc||o===qc||[$t,Mo,Ki].indexOf(o)===-1&&c===qc||[jr,Hi,X1,jn,Ai].indexOf(c)!==-1||tu(r,A)===Di||Wa(ka,Di,r,A)||Wa([jr,Hi],To,r,A)||Wa($c,$c,r,A))return zA;if(o===$t)return ts;if(o===ka||c===ka)return zA;if(c===bo||o===bo)return ts;if([Mo,Ki,To].indexOf(c)!==-1||o===W1||l===Lo&&j1.indexOf(o)!==-1||o===Ai&&c===Lo||c===jc||Ft.indexOf(c)!==-1&&o===Xe||Ft.indexOf(o)!==-1&&c===Xe||o===zi&&[ur,As,es].indexOf(c)!==-1||[ur,As,es].indexOf(o)!==-1&&c===ki||Ft.indexOf(o)!==-1&&Au.indexOf(c)!==-1||Au.indexOf(o)!==-1&&Ft.indexOf(c)!==-1||[zi,ki].indexOf(o)!==-1&&(c===Xe||[Di,Ki].indexOf(c)!==-1&&A[a+1]===Xe)||[Di,Ki].indexOf(o)!==-1&&c===Xe||o===Xe&&[Xe,Ai,jn].indexOf(c)!==-1)return zA;if([Xe,Ai,jn,jr,Hi].indexOf(c)!==-1)for(var u=r;u>=0;){var h=A[u];if(h===Xe)return zA;if([Ai,jn].indexOf(h)!==-1)u--;else break}if([zi,ki].indexOf(c)!==-1)for(var u=[jr,Hi].indexOf(o)!==-1?s:r;u>=0;){var h=A[u];if(h===Xe)return zA;if([Ai,jn].indexOf(h)!==-1)u--;else break}if(Ro===o&&[Ro,Cs,Qo,Io].indexOf(c)!==-1||[Cs,Qo].indexOf(o)!==-1&&[Cs,Es].indexOf(c)!==-1||[Es,Io].indexOf(o)!==-1&&c===Es||eu.indexOf(o)!==-1&&[jc,ki].indexOf(c)!==-1||eu.indexOf(c)!==-1&&o===zi||Ft.indexOf(o)!==-1&&Ft.indexOf(c)!==-1||o===jn&&Ft.indexOf(c)!==-1||Ft.concat(Xe).indexOf(o)!==-1&&c===Di&&q1.indexOf(n[a])===-1||Ft.concat(Xe).indexOf(c)!==-1&&o===Hi)return zA;if(o===za&&c===za){for(var p=e[r],g=1;p>0&&(p--,A[p]===za);)g++;if(g%2!==0)return zA}return o===As&&c===es?zA:ts},tw=function(n,A){A||(A={lineBreak:"normal",wordBreak:"normal"});var e=Aw(n,A.lineBreak),t=e[0],i=e[1],r=e[2];(A.wordBreak==="break-all"||A.wordBreak==="break-word")&&(i=i.map(function(a){return[Xe,vn,Fh].indexOf(a)!==-1?ur:a}));var s=A.wordBreak==="keep-all"?r.map(function(a,o){return a&&n[o]>=19968&&n[o]<=40959}):void 0;return[t,i,s]},nw=function(){function n(A,e,t,i){this.codePoints=A,this.required=e===Mh,this.start=t,this.end=i}return n.prototype.slice=function(){return ce.apply(void 0,this.codePoints.slice(this.start,this.end))},n}(),iw=function(n,A){var e=qs(n),t=tw(e,A),i=t[0],r=t[1],s=t[2],a=e.length,o=0,l=0;return{next:function(){if(l>=a)return{done:!0,value:null};for(var c=zA;l<a&&(c=ew(e,r,i,++l,s))===zA;);if(c!==zA||l===a){var u=new nw(e,c,o,l);return o=l,{value:u,done:!1}}return{done:!0,value:null}}}},rw=1,sw=2,Er=4,nu=8,Is=10,iu=47,ji=92,aw=9,ow=32,ns=34,Pi=61,lw=35,cw=36,uw=37,is=39,rs=40,Ni=41,hw=95,Ge=45,fw=33,dw=60,pw=62,gw=64,mw=91,Bw=93,ww=61,vw=123,ss=63,_w=125,ru=124,Cw=126,Ew=128,su=65533,Xa=42,_n=43,xw=44,Uw=58,yw=59,hr=46,Sw=0,Fw=8,Mw=11,bw=14,Tw=31,Qw=127,gt=-1,Th=48,Qh=97,Ih=101,Iw=102,Lw=117,Rw=122,Lh=65,Rh=69,Hh=70,Hw=85,Dw=90,Ie=function(n){return n>=Th&&n<=57},Pw=function(n){return n>=55296&&n<=57343},ei=function(n){return Ie(n)||n>=Lh&&n<=Hh||n>=Qh&&n<=Iw},Nw=function(n){return n>=Qh&&n<=Rw},Ow=function(n){return n>=Lh&&n<=Dw},Gw=function(n){return Nw(n)||Ow(n)},Vw=function(n){return n>=Ew},as=function(n){return n===Is||n===aw||n===ow},Ls=function(n){return Gw(n)||Vw(n)||n===hw},au=function(n){return Ls(n)||Ie(n)||n===Ge},Kw=function(n){return n>=Sw&&n<=Fw||n===Mw||n>=bw&&n<=Tw||n===Qw},Wt=function(n,A){return n!==ji?!1:A!==Is},os=function(n,A,e){return n===Ge?Ls(A)||Wt(A,e):Ls(n)?!0:!!(n===ji&&Wt(n,A))},Ya=function(n,A,e){return n===_n||n===Ge?Ie(A)?!0:A===hr&&Ie(e):Ie(n===hr?A:n)},kw=function(n){var A=0,e=1;(n[A]===_n||n[A]===Ge)&&(n[A]===Ge&&(e=-1),A++);for(var t=[];Ie(n[A]);)t.push(n[A++]);var i=t.length?parseInt(ce.apply(void 0,t),10):0;n[A]===hr&&A++;for(var r=[];Ie(n[A]);)r.push(n[A++]);var s=r.length,a=s?parseInt(ce.apply(void 0,r),10):0;(n[A]===Rh||n[A]===Ih)&&A++;var o=1;(n[A]===_n||n[A]===Ge)&&(n[A]===Ge&&(o=-1),A++);for(var l=[];Ie(n[A]);)l.push(n[A++]);var c=l.length?parseInt(ce.apply(void 0,l),10):0;return e*(i+a*Math.pow(10,-s))*Math.pow(10,o*c)},zw={type:2},Ww={type:3},Xw={type:4},Yw={type:13},Jw={type:8},Zw={type:21},qw={type:9},$w={type:10},jw={type:11},Av={type:12},ev={type:14},ls={type:23},tv={type:1},nv={type:25},iv={type:24},rv={type:26},sv={type:27},av={type:28},ov={type:29},lv={type:31},Po={type:32},Dh=function(){function n(){this._value=[]}return n.prototype.write=function(A){this._value=this._value.concat(qs(A))},n.prototype.read=function(){for(var A=[],e=this.consumeToken();e!==Po;)A.push(e),e=this.consumeToken();return A},n.prototype.consumeToken=function(){var A=this.consumeCodePoint();switch(A){case ns:return this.consumeStringToken(ns);case lw:var e=this.peekCodePoint(0),t=this.peekCodePoint(1),i=this.peekCodePoint(2);if(au(e)||Wt(t,i)){var r=os(e,t,i)?sw:rw,s=this.consumeName();return{type:5,value:s,flags:r}}break;case cw:if(this.peekCodePoint(0)===Pi)return this.consumeCodePoint(),Yw;break;case is:return this.consumeStringToken(is);case rs:return zw;case Ni:return Ww;case Xa:if(this.peekCodePoint(0)===Pi)return this.consumeCodePoint(),ev;break;case _n:if(Ya(A,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(A),this.consumeNumericToken();break;case xw:return Xw;case Ge:var a=A,o=this.peekCodePoint(0),l=this.peekCodePoint(1);if(Ya(a,o,l))return this.reconsumeCodePoint(A),this.consumeNumericToken();if(os(a,o,l))return this.reconsumeCodePoint(A),this.consumeIdentLikeToken();if(o===Ge&&l===pw)return this.consumeCodePoint(),this.consumeCodePoint(),iv;break;case hr:if(Ya(A,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(A),this.consumeNumericToken();break;case iu:if(this.peekCodePoint(0)===Xa)for(this.consumeCodePoint();;){var c=this.consumeCodePoint();if(c===Xa&&(c=this.consumeCodePoint(),c===iu))return this.consumeToken();if(c===gt)return this.consumeToken()}break;case Uw:return rv;case yw:return sv;case dw:if(this.peekCodePoint(0)===fw&&this.peekCodePoint(1)===Ge&&this.peekCodePoint(2)===Ge)return this.consumeCodePoint(),this.consumeCodePoint(),nv;break;case gw:var u=this.peekCodePoint(0),h=this.peekCodePoint(1),p=this.peekCodePoint(2);if(os(u,h,p)){var s=this.consumeName();return{type:7,value:s}}break;case mw:return av;case ji:if(Wt(A,this.peekCodePoint(0)))return this.reconsumeCodePoint(A),this.consumeIdentLikeToken();break;case Bw:return ov;case ww:if(this.peekCodePoint(0)===Pi)return this.consumeCodePoint(),Jw;break;case vw:return jw;case _w:return Av;case Lw:case Hw:var g=this.peekCodePoint(0),m=this.peekCodePoint(1);return g===_n&&(ei(m)||m===ss)&&(this.consumeCodePoint(),this.consumeUnicodeRangeToken()),this.reconsumeCodePoint(A),this.consumeIdentLikeToken();case ru:if(this.peekCodePoint(0)===Pi)return this.consumeCodePoint(),qw;if(this.peekCodePoint(0)===ru)return this.consumeCodePoint(),Zw;break;case Cw:if(this.peekCodePoint(0)===Pi)return this.consumeCodePoint(),$w;break;case gt:return Po}return as(A)?(this.consumeWhiteSpace(),lv):Ie(A)?(this.reconsumeCodePoint(A),this.consumeNumericToken()):Ls(A)?(this.reconsumeCodePoint(A),this.consumeIdentLikeToken()):{type:6,value:ce(A)}},n.prototype.consumeCodePoint=function(){var A=this._value.shift();return typeof A>"u"?-1:A},n.prototype.reconsumeCodePoint=function(A){this._value.unshift(A)},n.prototype.peekCodePoint=function(A){return A>=this._value.length?-1:this._value[A]},n.prototype.consumeUnicodeRangeToken=function(){for(var A=[],e=this.consumeCodePoint();ei(e)&&A.length<6;)A.push(e),e=this.consumeCodePoint();for(var t=!1;e===ss&&A.length<6;)A.push(e),e=this.consumeCodePoint(),t=!0;if(t){var i=parseInt(ce.apply(void 0,A.map(function(o){return o===ss?Th:o})),16),r=parseInt(ce.apply(void 0,A.map(function(o){return o===ss?Hh:o})),16);return{type:30,start:i,end:r}}var s=parseInt(ce.apply(void 0,A),16);if(this.peekCodePoint(0)===Ge&&ei(this.peekCodePoint(1))){this.consumeCodePoint(),e=this.consumeCodePoint();for(var a=[];ei(e)&&a.length<6;)a.push(e),e=this.consumeCodePoint();var r=parseInt(ce.apply(void 0,a),16);return{type:30,start:s,end:r}}else return{type:30,start:s,end:s}},n.prototype.consumeIdentLikeToken=function(){var A=this.consumeName();return A.toLowerCase()==="url"&&this.peekCodePoint(0)===rs?(this.consumeCodePoint(),this.consumeUrlToken()):this.peekCodePoint(0)===rs?(this.consumeCodePoint(),{type:19,value:A}):{type:20,value:A}},n.prototype.consumeUrlToken=function(){var A=[];if(this.consumeWhiteSpace(),this.peekCodePoint(0)===gt)return{type:22,value:""};var e=this.peekCodePoint(0);if(e===is||e===ns){var t=this.consumeStringToken(this.consumeCodePoint());return t.type===0&&(this.consumeWhiteSpace(),this.peekCodePoint(0)===gt||this.peekCodePoint(0)===Ni)?(this.consumeCodePoint(),{type:22,value:t.value}):(this.consumeBadUrlRemnants(),ls)}for(;;){var i=this.consumeCodePoint();if(i===gt||i===Ni)return{type:22,value:ce.apply(void 0,A)};if(as(i))return this.consumeWhiteSpace(),this.peekCodePoint(0)===gt||this.peekCodePoint(0)===Ni?(this.consumeCodePoint(),{type:22,value:ce.apply(void 0,A)}):(this.consumeBadUrlRemnants(),ls);if(i===ns||i===is||i===rs||Kw(i))return this.consumeBadUrlRemnants(),ls;if(i===ji)if(Wt(i,this.peekCodePoint(0)))A.push(this.consumeEscapedCodePoint());else return this.consumeBadUrlRemnants(),ls;else A.push(i)}},n.prototype.consumeWhiteSpace=function(){for(;as(this.peekCodePoint(0));)this.consumeCodePoint()},n.prototype.consumeBadUrlRemnants=function(){for(;;){var A=this.consumeCodePoint();if(A===Ni||A===gt)return;Wt(A,this.peekCodePoint(0))&&this.consumeEscapedCodePoint()}},n.prototype.consumeStringSlice=function(A){for(var e=5e4,t="";A>0;){var i=Math.min(e,A);t+=ce.apply(void 0,this._value.splice(0,i)),A-=i}return this._value.shift(),t},n.prototype.consumeStringToken=function(A){var e="",t=0;do{var i=this._value[t];if(i===gt||i===void 0||i===A)return e+=this.consumeStringSlice(t),{type:0,value:e};if(i===Is)return this._value.splice(0,t),tv;if(i===ji){var r=this._value[t+1];r!==gt&&r!==void 0&&(r===Is?(e+=this.consumeStringSlice(t),t=-1,this._value.shift()):Wt(i,r)&&(e+=this.consumeStringSlice(t),e+=ce(this.consumeEscapedCodePoint()),t=-1))}t++}while(!0)},n.prototype.consumeNumber=function(){var A=[],e=Er,t=this.peekCodePoint(0);for((t===_n||t===Ge)&&A.push(this.consumeCodePoint());Ie(this.peekCodePoint(0));)A.push(this.consumeCodePoint());t=this.peekCodePoint(0);var i=this.peekCodePoint(1);if(t===hr&&Ie(i))for(A.push(this.consumeCodePoint(),this.consumeCodePoint()),e=nu;Ie(this.peekCodePoint(0));)A.push(this.consumeCodePoint());t=this.peekCodePoint(0),i=this.peekCodePoint(1);var r=this.peekCodePoint(2);if((t===Rh||t===Ih)&&((i===_n||i===Ge)&&Ie(r)||Ie(i)))for(A.push(this.consumeCodePoint(),this.consumeCodePoint()),e=nu;Ie(this.peekCodePoint(0));)A.push(this.consumeCodePoint());return[kw(A),e]},n.prototype.consumeNumericToken=function(){var A=this.consumeNumber(),e=A[0],t=A[1],i=this.peekCodePoint(0),r=this.peekCodePoint(1),s=this.peekCodePoint(2);if(os(i,r,s)){var a=this.consumeName();return{type:15,number:e,flags:t,unit:a}}return i===uw?(this.consumeCodePoint(),{type:16,number:e,flags:t}):{type:17,number:e,flags:t}},n.prototype.consumeEscapedCodePoint=function(){var A=this.consumeCodePoint();if(ei(A)){for(var e=ce(A);ei(this.peekCodePoint(0))&&e.length<6;)e+=ce(this.consumeCodePoint());as(this.peekCodePoint(0))&&this.consumeCodePoint();var t=parseInt(e,16);return t===0||Pw(t)||t>1114111?su:t}return A===gt?su:A},n.prototype.consumeName=function(){for(var A="";;){var e=this.consumeCodePoint();if(au(e))A+=ce(e);else if(Wt(e,this.peekCodePoint(0)))A+=ce(this.consumeEscapedCodePoint());else return this.reconsumeCodePoint(e),A}},n}(),Ph=function(){function n(A){this._tokens=A}return n.create=function(A){var e=new Dh;return e.write(A),new n(e.read())},n.parseValue=function(A){return n.create(A).parseComponentValue()},n.parseValues=function(A){return n.create(A).parseComponentValues()},n.prototype.parseComponentValue=function(){for(var A=this.consumeToken();A.type===31;)A=this.consumeToken();if(A.type===32)throw new SyntaxError("Error parsing CSS component value, unexpected EOF");this.reconsumeToken(A);var e=this.consumeComponentValue();do A=this.consumeToken();while(A.type===31);if(A.type===32)return e;throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one")},n.prototype.parseComponentValues=function(){for(var A=[];;){var e=this.consumeComponentValue();if(e.type===32)return A;A.push(e),A.push()}},n.prototype.consumeComponentValue=function(){var A=this.consumeToken();switch(A.type){case 11:case 28:case 2:return this.consumeSimpleBlock(A.type);case 19:return this.consumeFunction(A)}return A},n.prototype.consumeSimpleBlock=function(A){for(var e={type:A,values:[]},t=this.consumeToken();;){if(t.type===32||uv(t,A))return e;this.reconsumeToken(t),e.values.push(this.consumeComponentValue()),t=this.consumeToken()}},n.prototype.consumeFunction=function(A){for(var e={name:A.value,values:[],type:18};;){var t=this.consumeToken();if(t.type===32||t.type===3)return e;this.reconsumeToken(t),e.values.push(this.consumeComponentValue())}},n.prototype.consumeToken=function(){var A=this._tokens.shift();return typeof A>"u"?Po:A},n.prototype.reconsumeToken=function(A){this._tokens.unshift(A)},n}(),xr=function(n){return n.type===15},bi=function(n){return n.type===17},qA=function(n){return n.type===20},cv=function(n){return n.type===0},No=function(n,A){return qA(n)&&n.value===A},Nh=function(n){return n.type!==31},Si=function(n){return n.type!==31&&n.type!==4},vt=function(n){var A=[],e=[];return n.forEach(function(t){if(t.type===4){if(e.length===0)throw new Error("Error parsing function args, zero tokens for arg");A.push(e),e=[];return}t.type!==31&&e.push(t)}),e.length&&A.push(e),A},uv=function(n,A){return A===11&&n.type===12||A===28&&n.type===29?!0:A===2&&n.type===3},on=function(n){return n.type===17||n.type===15},pe=function(n){return n.type===16||on(n)},Oh=function(n){return n.length>1?[n[0],n[1]]:[n[0]]},Fe={type:17,number:0,flags:Er},sl={type:16,number:50,flags:Er},jt={type:16,number:100,flags:Er},Wi=function(n,A,e){var t=n[0],i=n[1];return[ee(t,A),ee(typeof i<"u"?i:t,e)]},ee=function(n,A){if(n.type===16)return n.number/100*A;if(xr(n))switch(n.unit){case"rem":case"em":return 16*n.number;case"px":default:return n.number}return n.number},Gh="deg",Vh="grad",Kh="rad",kh="turn",$s={name:"angle",parse:function(n,A){if(A.type===15)switch(A.unit){case Gh:return Math.PI*A.number/180;case Vh:return Math.PI/200*A.number;case Kh:return A.number;case kh:return Math.PI*2*A.number}throw new Error("Unsupported angle type")}},zh=function(n){return n.type===15&&(n.unit===Gh||n.unit===Vh||n.unit===Kh||n.unit===kh)},Wh=function(n){var A=n.filter(qA).map(function(e){return e.value}).join(" ");switch(A){case"to bottom right":case"to right bottom":case"left top":case"top left":return[Fe,Fe];case"to top":case"bottom":return nt(0);case"to bottom left":case"to left bottom":case"right top":case"top right":return[Fe,jt];case"to right":case"left":return nt(90);case"to top left":case"to left top":case"right bottom":case"bottom right":return[jt,jt];case"to bottom":case"top":return nt(180);case"to top right":case"to right top":case"left bottom":case"bottom left":return[jt,Fe];case"to left":case"right":return nt(270)}return 0},nt=function(n){return Math.PI*n/180},rn={name:"color",parse:function(n,A){if(A.type===18){var e=hv[A.name];if(typeof e>"u")throw new Error('Attempting to parse an unsupported color function "'+A.name+'"');return e(n,A.values)}if(A.type===5){if(A.value.length===3){var t=A.value.substring(0,1),i=A.value.substring(1,2),r=A.value.substring(2,3);return An(parseInt(t+t,16),parseInt(i+i,16),parseInt(r+r,16),1)}if(A.value.length===4){var t=A.value.substring(0,1),i=A.value.substring(1,2),r=A.value.substring(2,3),s=A.value.substring(3,4);return An(parseInt(t+t,16),parseInt(i+i,16),parseInt(r+r,16),parseInt(s+s,16)/255)}if(A.value.length===6){var t=A.value.substring(0,2),i=A.value.substring(2,4),r=A.value.substring(4,6);return An(parseInt(t,16),parseInt(i,16),parseInt(r,16),1)}if(A.value.length===8){var t=A.value.substring(0,2),i=A.value.substring(2,4),r=A.value.substring(4,6),s=A.value.substring(6,8);return An(parseInt(t,16),parseInt(i,16),parseInt(r,16),parseInt(s,16)/255)}}if(A.type===20){var a=Rt[A.value.toUpperCase()];if(typeof a<"u")return a}return Rt.TRANSPARENT}},sn=function(n){return(255&n)===0},Ce=function(n){var A=255&n,e=255&n>>8,t=255&n>>16,i=255&n>>24;return A<255?"rgba("+i+","+t+","+e+","+A/255+")":"rgb("+i+","+t+","+e+")"},An=function(n,A,e,t){return(n<<24|A<<16|e<<8|Math.round(t*255)<<0)>>>0},ou=function(n,A){if(n.type===17)return n.number;if(n.type===16){var e=A===3?1:255;return A===3?n.number/100*e:Math.round(n.number/100*e)}return 0},lu=function(n,A){var e=A.filter(Si);if(e.length===3){var t=e.map(ou),i=t[0],r=t[1],s=t[2];return An(i,r,s,1)}if(e.length===4){var a=e.map(ou),i=a[0],r=a[1],s=a[2],o=a[3];return An(i,r,s,o)}return 0};function Ja(n,A,e){return e<0&&(e+=1),e>=1&&(e-=1),e<1/6?(A-n)*e*6+n:e<1/2?A:e<2/3?(A-n)*6*(2/3-e)+n:n}var cu=function(n,A){var e=A.filter(Si),t=e[0],i=e[1],r=e[2],s=e[3],a=(t.type===17?nt(t.number):$s.parse(n,t))/(Math.PI*2),o=pe(i)?i.number/100:0,l=pe(r)?r.number/100:0,c=typeof s<"u"&&pe(s)?ee(s,1):1;if(o===0)return An(l*255,l*255,l*255,1);var u=l<=.5?l*(o+1):l+o-l*o,h=l*2-u,p=Ja(h,u,a+1/3),g=Ja(h,u,a),m=Ja(h,u,a-1/3);return An(p*255,g*255,m*255,c)},hv={hsl:cu,hsla:cu,rgb:lu,rgba:lu},Ar=function(n,A){return rn.parse(n,Ph.create(A).parseComponentValue())},Rt={ALICEBLUE:4042850303,ANTIQUEWHITE:4209760255,AQUA:16777215,AQUAMARINE:2147472639,AZURE:4043309055,BEIGE:4126530815,BISQUE:4293182719,BLACK:255,BLANCHEDALMOND:4293643775,BLUE:65535,BLUEVIOLET:2318131967,BROWN:2771004159,BURLYWOOD:3736635391,CADETBLUE:1604231423,CHARTREUSE:2147418367,CHOCOLATE:3530104575,CORAL:4286533887,CORNFLOWERBLUE:1687547391,CORNSILK:4294499583,CRIMSON:3692313855,CYAN:16777215,DARKBLUE:35839,DARKCYAN:9145343,DARKGOLDENROD:3095837695,DARKGRAY:2846468607,DARKGREEN:6553855,DARKGREY:2846468607,DARKKHAKI:3182914559,DARKMAGENTA:2332068863,DARKOLIVEGREEN:1433087999,DARKORANGE:4287365375,DARKORCHID:2570243327,DARKRED:2332033279,DARKSALMON:3918953215,DARKSEAGREEN:2411499519,DARKSLATEBLUE:1211993087,DARKSLATEGRAY:793726975,DARKSLATEGREY:793726975,DARKTURQUOISE:13554175,DARKVIOLET:2483082239,DEEPPINK:4279538687,DEEPSKYBLUE:12582911,DIMGRAY:1768516095,DIMGREY:1768516095,DODGERBLUE:512819199,FIREBRICK:2988581631,FLORALWHITE:4294635775,FORESTGREEN:579543807,FUCHSIA:4278255615,GAINSBORO:3705462015,GHOSTWHITE:4177068031,GOLD:4292280575,GOLDENROD:3668254975,GRAY:2155905279,GREEN:8388863,GREENYELLOW:2919182335,GREY:2155905279,HONEYDEW:4043305215,HOTPINK:4285117695,INDIANRED:3445382399,INDIGO:1258324735,IVORY:4294963455,KHAKI:4041641215,LAVENDER:3873897215,LAVENDERBLUSH:4293981695,LAWNGREEN:2096890111,LEMONCHIFFON:4294626815,LIGHTBLUE:2916673279,LIGHTCORAL:4034953471,LIGHTCYAN:3774873599,LIGHTGOLDENRODYELLOW:4210742015,LIGHTGRAY:3553874943,LIGHTGREEN:2431553791,LIGHTGREY:3553874943,LIGHTPINK:4290167295,LIGHTSALMON:4288707327,LIGHTSEAGREEN:548580095,LIGHTSKYBLUE:2278488831,LIGHTSLATEGRAY:2005441023,LIGHTSLATEGREY:2005441023,LIGHTSTEELBLUE:2965692159,LIGHTYELLOW:4294959359,LIME:16711935,LIMEGREEN:852308735,LINEN:4210091775,MAGENTA:4278255615,MAROON:2147483903,MEDIUMAQUAMARINE:1724754687,MEDIUMBLUE:52735,MEDIUMORCHID:3126187007,MEDIUMPURPLE:2473647103,MEDIUMSEAGREEN:1018393087,MEDIUMSLATEBLUE:2070474495,MEDIUMSPRINGGREEN:16423679,MEDIUMTURQUOISE:1221709055,MEDIUMVIOLETRED:3340076543,MIDNIGHTBLUE:421097727,MINTCREAM:4127193855,MISTYROSE:4293190143,MOCCASIN:4293178879,NAVAJOWHITE:4292783615,NAVY:33023,OLDLACE:4260751103,OLIVE:2155872511,OLIVEDRAB:1804477439,ORANGE:4289003775,ORANGERED:4282712319,ORCHID:3664828159,PALEGOLDENROD:4008225535,PALEGREEN:2566625535,PALETURQUOISE:2951671551,PALEVIOLETRED:3681588223,PAPAYAWHIP:4293907967,PEACHPUFF:4292524543,PERU:3448061951,PINK:4290825215,PLUM:3718307327,POWDERBLUE:2967529215,PURPLE:2147516671,REBECCAPURPLE:1714657791,RED:4278190335,ROSYBROWN:3163525119,ROYALBLUE:1097458175,SADDLEBROWN:2336560127,SALMON:4202722047,SANDYBROWN:4104413439,SEAGREEN:780883967,SEASHELL:4294307583,SIENNA:2689740287,SILVER:3233857791,SKYBLUE:2278484991,SLATEBLUE:1784335871,SLATEGRAY:1887473919,SLATEGREY:1887473919,SNOW:4294638335,SPRINGGREEN:16744447,STEELBLUE:1182971135,TAN:3535047935,TEAL:8421631,THISTLE:3636451583,TOMATO:4284696575,TRANSPARENT:0,TURQUOISE:1088475391,VIOLET:4001558271,WHEAT:4125012991,WHITE:4294967295,WHITESMOKE:4126537215,YELLOW:4294902015,YELLOWGREEN:2597139199},fv={name:"background-clip",initialValue:"border-box",prefix:!1,type:1,parse:function(n,A){return A.map(function(e){if(qA(e))switch(e.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},dv={name:"background-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},js=function(n,A){var e=rn.parse(n,A[0]),t=A[1];return t&&pe(t)?{color:e,stop:t}:{color:e,stop:null}},uu=function(n,A){var e=n[0],t=n[n.length-1];e.stop===null&&(e.stop=Fe),t.stop===null&&(t.stop=jt);for(var i=[],r=0,s=0;s<n.length;s++){var a=n[s].stop;if(a!==null){var o=ee(a,A);o>r?i.push(o):i.push(r),r=o}else i.push(null)}for(var l=null,s=0;s<i.length;s++){var c=i[s];if(c===null)l===null&&(l=s);else if(l!==null){for(var u=s-l,h=i[l-1],p=(c-h)/(u+1),g=1;g<=u;g++)i[l+g-1]=p*g;l=null}}return n.map(function(m,d){var f=m.color;return{color:f,stop:Math.max(Math.min(1,i[d]/A),0)}})},pv=function(n,A,e){var t=A/2,i=e/2,r=ee(n[0],A)-t,s=i-ee(n[1],e);return(Math.atan2(s,r)+Math.PI*2)%(Math.PI*2)},gv=function(n,A,e){var t=typeof n=="number"?n:pv(n,A,e),i=Math.abs(A*Math.sin(t))+Math.abs(e*Math.cos(t)),r=A/2,s=e/2,a=i/2,o=Math.sin(t-Math.PI/2)*a,l=Math.cos(t-Math.PI/2)*a;return[i,r-l,r+l,s-o,s+o]},ot=function(n,A){return Math.sqrt(n*n+A*A)},hu=function(n,A,e,t,i){var r=[[0,0],[0,A],[n,0],[n,A]];return r.reduce(function(s,a){var o=a[0],l=a[1],c=ot(e-o,t-l);return(i?c<s.optimumDistance:c>s.optimumDistance)?{optimumCorner:a,optimumDistance:c}:s},{optimumDistance:i?1/0:-1/0,optimumCorner:null}).optimumCorner},mv=function(n,A,e,t,i){var r=0,s=0;switch(n.size){case 0:n.shape===0?r=s=Math.min(Math.abs(A),Math.abs(A-t),Math.abs(e),Math.abs(e-i)):n.shape===1&&(r=Math.min(Math.abs(A),Math.abs(A-t)),s=Math.min(Math.abs(e),Math.abs(e-i)));break;case 2:if(n.shape===0)r=s=Math.min(ot(A,e),ot(A,e-i),ot(A-t,e),ot(A-t,e-i));else if(n.shape===1){var a=Math.min(Math.abs(e),Math.abs(e-i))/Math.min(Math.abs(A),Math.abs(A-t)),o=hu(t,i,A,e,!0),l=o[0],c=o[1];r=ot(l-A,(c-e)/a),s=a*r}break;case 1:n.shape===0?r=s=Math.max(Math.abs(A),Math.abs(A-t),Math.abs(e),Math.abs(e-i)):n.shape===1&&(r=Math.max(Math.abs(A),Math.abs(A-t)),s=Math.max(Math.abs(e),Math.abs(e-i)));break;case 3:if(n.shape===0)r=s=Math.max(ot(A,e),ot(A,e-i),ot(A-t,e),ot(A-t,e-i));else if(n.shape===1){var a=Math.max(Math.abs(e),Math.abs(e-i))/Math.max(Math.abs(A),Math.abs(A-t)),u=hu(t,i,A,e,!1),l=u[0],c=u[1];r=ot(l-A,(c-e)/a),s=a*r}break}return Array.isArray(n.size)&&(r=ee(n.size[0],t),s=n.size.length===2?ee(n.size[1],i):r),[r,s]},Bv=function(n,A){var e=nt(180),t=[];return vt(A).forEach(function(i,r){if(r===0){var s=i[0];if(s.type===20&&s.value==="to"){e=Wh(i);return}else if(zh(s)){e=$s.parse(n,s);return}}var a=js(n,i);t.push(a)}),{angle:e,stops:t,type:1}},cs=function(n,A){var e=nt(180),t=[];return vt(A).forEach(function(i,r){if(r===0){var s=i[0];if(s.type===20&&["top","left","right","bottom"].indexOf(s.value)!==-1){e=Wh(i);return}else if(zh(s)){e=($s.parse(n,s)+nt(270))%nt(360);return}}var a=js(n,i);t.push(a)}),{angle:e,stops:t,type:1}},wv=function(n,A){var e=nt(180),t=[],i=1,r=0,s=3,a=[];return vt(A).forEach(function(o,l){var c=o[0];if(l===0){if(qA(c)&&c.value==="linear"){i=1;return}else if(qA(c)&&c.value==="radial"){i=2;return}}if(c.type===18){if(c.name==="from"){var u=rn.parse(n,c.values[0]);t.push({stop:Fe,color:u})}else if(c.name==="to"){var u=rn.parse(n,c.values[0]);t.push({stop:jt,color:u})}else if(c.name==="color-stop"){var h=c.values.filter(Si);if(h.length===2){var u=rn.parse(n,h[1]),p=h[0];bi(p)&&t.push({stop:{type:16,number:p.number*100,flags:p.flags},color:u})}}}}),i===1?{angle:(e+nt(180))%nt(360),stops:t,type:i}:{size:s,shape:r,stops:t,position:a,type:i}},Xh="closest-side",Yh="farthest-side",Jh="closest-corner",Zh="farthest-corner",qh="circle",$h="ellipse",jh="cover",Af="contain",vv=function(n,A){var e=0,t=3,i=[],r=[];return vt(A).forEach(function(s,a){var o=!0;if(a===0){var l=!1;o=s.reduce(function(u,h){if(l)if(qA(h))switch(h.value){case"center":return r.push(sl),u;case"top":case"left":return r.push(Fe),u;case"right":case"bottom":return r.push(jt),u}else(pe(h)||on(h))&&r.push(h);else if(qA(h))switch(h.value){case qh:return e=0,!1;case $h:return e=1,!1;case"at":return l=!0,!1;case Xh:return t=0,!1;case jh:case Yh:return t=1,!1;case Af:case Jh:return t=2,!1;case Zh:return t=3,!1}else if(on(h)||pe(h))return Array.isArray(t)||(t=[]),t.push(h),!1;return u},o)}if(o){var c=js(n,s);i.push(c)}}),{size:t,shape:e,stops:i,position:r,type:2}},us=function(n,A){var e=0,t=3,i=[],r=[];return vt(A).forEach(function(s,a){var o=!0;if(a===0?o=s.reduce(function(c,u){if(qA(u))switch(u.value){case"center":return r.push(sl),!1;case"top":case"left":return r.push(Fe),!1;case"right":case"bottom":return r.push(jt),!1}else if(pe(u)||on(u))return r.push(u),!1;return c},o):a===1&&(o=s.reduce(function(c,u){if(qA(u))switch(u.value){case qh:return e=0,!1;case $h:return e=1,!1;case Af:case Xh:return t=0,!1;case Yh:return t=1,!1;case Jh:return t=2,!1;case jh:case Zh:return t=3,!1}else if(on(u)||pe(u))return Array.isArray(t)||(t=[]),t.push(u),!1;return c},o)),o){var l=js(n,s);i.push(l)}}),{size:t,shape:e,stops:i,position:r,type:2}},_v=function(n){return n.type===1},Cv=function(n){return n.type===2},al={name:"image",parse:function(n,A){if(A.type===22){var e={url:A.value,type:0};return n.cache.addImage(A.value),e}if(A.type===18){var t=ef[A.name];if(typeof t>"u")throw new Error('Attempting to parse an unsupported image function "'+A.name+'"');return t(n,A.values)}throw new Error("Unsupported image type "+A.type)}};function Ev(n){return!(n.type===20&&n.value==="none")&&(n.type!==18||!!ef[n.name])}var ef={"linear-gradient":Bv,"-moz-linear-gradient":cs,"-ms-linear-gradient":cs,"-o-linear-gradient":cs,"-webkit-linear-gradient":cs,"radial-gradient":vv,"-moz-radial-gradient":us,"-ms-radial-gradient":us,"-o-radial-gradient":us,"-webkit-radial-gradient":us,"-webkit-gradient":wv},xv={name:"background-image",initialValue:"none",type:1,prefix:!1,parse:function(n,A){if(A.length===0)return[];var e=A[0];return e.type===20&&e.value==="none"?[]:A.filter(function(t){return Si(t)&&Ev(t)}).map(function(t){return al.parse(n,t)})}},Uv={name:"background-origin",initialValue:"border-box",prefix:!1,type:1,parse:function(n,A){return A.map(function(e){if(qA(e))switch(e.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},yv={name:"background-position",initialValue:"0% 0%",type:1,prefix:!1,parse:function(n,A){return vt(A).map(function(e){return e.filter(pe)}).map(Oh)}},Sv={name:"background-repeat",initialValue:"repeat",prefix:!1,type:1,parse:function(n,A){return vt(A).map(function(e){return e.filter(qA).map(function(t){return t.value}).join(" ")}).map(Fv)}},Fv=function(n){switch(n){case"no-repeat":return 1;case"repeat-x":case"repeat no-repeat":return 2;case"repeat-y":case"no-repeat repeat":return 3;case"repeat":default:return 0}},di;(function(n){n.AUTO="auto",n.CONTAIN="contain",n.COVER="cover"})(di||(di={}));var Mv={name:"background-size",initialValue:"0",prefix:!1,type:1,parse:function(n,A){return vt(A).map(function(e){return e.filter(bv)})}},bv=function(n){return qA(n)||pe(n)},Aa=function(n){return{name:"border-"+n+"-color",initialValue:"transparent",prefix:!1,type:3,format:"color"}},Tv=Aa("top"),Qv=Aa("right"),Iv=Aa("bottom"),Lv=Aa("left"),ea=function(n){return{name:"border-radius-"+n,initialValue:"0 0",prefix:!1,type:1,parse:function(A,e){return Oh(e.filter(pe))}}},Rv=ea("top-left"),Hv=ea("top-right"),Dv=ea("bottom-right"),Pv=ea("bottom-left"),ta=function(n){return{name:"border-"+n+"-style",initialValue:"solid",prefix:!1,type:2,parse:function(A,e){switch(e){case"none":return 0;case"dashed":return 2;case"dotted":return 3;case"double":return 4}return 1}}},Nv=ta("top"),Ov=ta("right"),Gv=ta("bottom"),Vv=ta("left"),na=function(n){return{name:"border-"+n+"-width",initialValue:"0",type:0,prefix:!1,parse:function(A,e){return xr(e)?e.number:0}}},Kv=na("top"),kv=na("right"),zv=na("bottom"),Wv=na("left"),Xv={name:"color",initialValue:"transparent",prefix:!1,type:3,format:"color"},Yv={name:"direction",initialValue:"ltr",prefix:!1,type:2,parse:function(n,A){switch(A){case"rtl":return 1;case"ltr":default:return 0}}},Jv={name:"display",initialValue:"inline-block",prefix:!1,type:1,parse:function(n,A){return A.filter(qA).reduce(function(e,t){return e|Zv(t.value)},0)}},Zv=function(n){switch(n){case"block":case"-webkit-box":return 2;case"inline":return 4;case"run-in":return 8;case"flow":return 16;case"flow-root":return 32;case"table":return 64;case"flex":case"-webkit-flex":return 128;case"grid":case"-ms-grid":return 256;case"ruby":return 512;case"subgrid":return 1024;case"list-item":return 2048;case"table-row-group":return 4096;case"table-header-group":return 8192;case"table-footer-group":return 16384;case"table-row":return 32768;case"table-cell":return 65536;case"table-column-group":return 131072;case"table-column":return 262144;case"table-caption":return 524288;case"ruby-base":return 1048576;case"ruby-text":return 2097152;case"ruby-base-container":return 4194304;case"ruby-text-container":return 8388608;case"contents":return 16777216;case"inline-block":return 33554432;case"inline-list-item":return 67108864;case"inline-table":return 134217728;case"inline-flex":return 268435456;case"inline-grid":return 536870912}return 0},qv={name:"float",initialValue:"none",prefix:!1,type:2,parse:function(n,A){switch(A){case"left":return 1;case"right":return 2;case"inline-start":return 3;case"inline-end":return 4}return 0}},$v={name:"letter-spacing",initialValue:"0",prefix:!1,type:0,parse:function(n,A){return A.type===20&&A.value==="normal"?0:A.type===17||A.type===15?A.number:0}},Rs;(function(n){n.NORMAL="normal",n.STRICT="strict"})(Rs||(Rs={}));var jv={name:"line-break",initialValue:"normal",prefix:!1,type:2,parse:function(n,A){switch(A){case"strict":return Rs.STRICT;case"normal":default:return Rs.NORMAL}}},A_={name:"line-height",initialValue:"normal",prefix:!1,type:4},fu=function(n,A){return qA(n)&&n.value==="normal"?1.2*A:n.type===17?A*n.number:pe(n)?ee(n,A):A},e_={name:"list-style-image",initialValue:"none",type:0,prefix:!1,parse:function(n,A){return A.type===20&&A.value==="none"?null:al.parse(n,A)}},t_={name:"list-style-position",initialValue:"outside",prefix:!1,type:2,parse:function(n,A){switch(A){case"inside":return 0;case"outside":default:return 1}}},Oo={name:"list-style-type",initialValue:"none",prefix:!1,type:2,parse:function(n,A){switch(A){case"disc":return 0;case"circle":return 1;case"square":return 2;case"decimal":return 3;case"cjk-decimal":return 4;case"decimal-leading-zero":return 5;case"lower-roman":return 6;case"upper-roman":return 7;case"lower-greek":return 8;case"lower-alpha":return 9;case"upper-alpha":return 10;case"arabic-indic":return 11;case"armenian":return 12;case"bengali":return 13;case"cambodian":return 14;case"cjk-earthly-branch":return 15;case"cjk-heavenly-stem":return 16;case"cjk-ideographic":return 17;case"devanagari":return 18;case"ethiopic-numeric":return 19;case"georgian":return 20;case"gujarati":return 21;case"gurmukhi":return 22;case"hebrew":return 22;case"hiragana":return 23;case"hiragana-iroha":return 24;case"japanese-formal":return 25;case"japanese-informal":return 26;case"kannada":return 27;case"katakana":return 28;case"katakana-iroha":return 29;case"khmer":return 30;case"korean-hangul-formal":return 31;case"korean-hanja-formal":return 32;case"korean-hanja-informal":return 33;case"lao":return 34;case"lower-armenian":return 35;case"malayalam":return 36;case"mongolian":return 37;case"myanmar":return 38;case"oriya":return 39;case"persian":return 40;case"simp-chinese-formal":return 41;case"simp-chinese-informal":return 42;case"tamil":return 43;case"telugu":return 44;case"thai":return 45;case"tibetan":return 46;case"trad-chinese-formal":return 47;case"trad-chinese-informal":return 48;case"upper-armenian":return 49;case"disclosure-open":return 50;case"disclosure-closed":return 51;case"none":default:return-1}}},ia=function(n){return{name:"margin-"+n,initialValue:"0",prefix:!1,type:4}},n_=ia("top"),i_=ia("right"),r_=ia("bottom"),s_=ia("left"),a_={name:"overflow",initialValue:"visible",prefix:!1,type:1,parse:function(n,A){return A.filter(qA).map(function(e){switch(e.value){case"hidden":return 1;case"scroll":return 2;case"clip":return 3;case"auto":return 4;case"visible":default:return 0}})}},o_={name:"overflow-wrap",initialValue:"normal",prefix:!1,type:2,parse:function(n,A){switch(A){case"break-word":return"break-word";case"normal":default:return"normal"}}},ra=function(n){return{name:"padding-"+n,initialValue:"0",prefix:!1,type:3,format:"length-percentage"}},l_=ra("top"),c_=ra("right"),u_=ra("bottom"),h_=ra("left"),f_={name:"text-align",initialValue:"left",prefix:!1,type:2,parse:function(n,A){switch(A){case"right":return 2;case"center":case"justify":return 1;case"left":default:return 0}}},d_={name:"position",initialValue:"static",prefix:!1,type:2,parse:function(n,A){switch(A){case"relative":return 1;case"absolute":return 2;case"fixed":return 3;case"sticky":return 4}return 0}},p_={name:"text-shadow",initialValue:"none",type:1,prefix:!1,parse:function(n,A){return A.length===1&&No(A[0],"none")?[]:vt(A).map(function(e){for(var t={color:Rt.TRANSPARENT,offsetX:Fe,offsetY:Fe,blur:Fe},i=0,r=0;r<e.length;r++){var s=e[r];on(s)?(i===0?t.offsetX=s:i===1?t.offsetY=s:t.blur=s,i++):t.color=rn.parse(n,s)}return t})}},g_={name:"text-transform",initialValue:"none",prefix:!1,type:2,parse:function(n,A){switch(A){case"uppercase":return 2;case"lowercase":return 1;case"capitalize":return 3}return 0}},m_={name:"transform",initialValue:"none",prefix:!0,type:0,parse:function(n,A){if(A.type===20&&A.value==="none")return null;if(A.type===18){var e=v_[A.name];if(typeof e>"u")throw new Error('Attempting to parse an unsupported transform function "'+A.name+'"');return e(A.values)}return null}},B_=function(n){var A=n.filter(function(e){return e.type===17}).map(function(e){return e.number});return A.length===6?A:null},w_=function(n){var A=n.filter(function(o){return o.type===17}).map(function(o){return o.number}),e=A[0],t=A[1];A[2],A[3];var i=A[4],r=A[5];A[6],A[7],A[8],A[9],A[10],A[11];var s=A[12],a=A[13];return A[14],A[15],A.length===16?[e,t,i,r,s,a]:null},v_={matrix:B_,matrix3d:w_},du={type:16,number:50,flags:Er},__=[du,du],C_={name:"transform-origin",initialValue:"50% 50%",prefix:!0,type:1,parse:function(n,A){var e=A.filter(pe);return e.length!==2?__:[e[0],e[1]]}},E_={name:"visible",initialValue:"none",prefix:!1,type:2,parse:function(n,A){switch(A){case"hidden":return 1;case"collapse":return 2;case"visible":default:return 0}}},er;(function(n){n.NORMAL="normal",n.BREAK_ALL="break-all",n.KEEP_ALL="keep-all"})(er||(er={}));var x_={name:"word-break",initialValue:"normal",prefix:!1,type:2,parse:function(n,A){switch(A){case"break-all":return er.BREAK_ALL;case"keep-all":return er.KEEP_ALL;case"normal":default:return er.NORMAL}}},U_={name:"z-index",initialValue:"auto",prefix:!1,type:0,parse:function(n,A){if(A.type===20)return{auto:!0,order:0};if(bi(A))return{auto:!1,order:A.number};throw new Error("Invalid z-index number parsed")}},tf={name:"time",parse:function(n,A){if(A.type===15)switch(A.unit.toLowerCase()){case"s":return 1e3*A.number;case"ms":return A.number}throw new Error("Unsupported time type")}},y_={name:"opacity",initialValue:"1",type:0,prefix:!1,parse:function(n,A){return bi(A)?A.number:1}},S_={name:"text-decoration-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},F_={name:"text-decoration-line",initialValue:"none",prefix:!1,type:1,parse:function(n,A){return A.filter(qA).map(function(e){switch(e.value){case"underline":return 1;case"overline":return 2;case"line-through":return 3;case"none":return 4}return 0}).filter(function(e){return e!==0})}},M_={name:"font-family",initialValue:"",prefix:!1,type:1,parse:function(n,A){var e=[],t=[];return A.forEach(function(i){switch(i.type){case 20:case 0:e.push(i.value);break;case 17:e.push(i.number.toString());break;case 4:t.push(e.join(" ")),e.length=0;break}}),e.length&&t.push(e.join(" ")),t.map(function(i){return i.indexOf(" ")===-1?i:"'"+i+"'"})}},b_={name:"font-size",initialValue:"0",prefix:!1,type:3,format:"length"},T_={name:"font-weight",initialValue:"normal",type:0,prefix:!1,parse:function(n,A){if(bi(A))return A.number;if(qA(A))switch(A.value){case"bold":return 700;case"normal":default:return 400}return 400}},Q_={name:"font-variant",initialValue:"none",type:1,prefix:!1,parse:function(n,A){return A.filter(qA).map(function(e){return e.value})}},I_={name:"font-style",initialValue:"normal",prefix:!1,type:2,parse:function(n,A){switch(A){case"oblique":return"oblique";case"italic":return"italic";case"normal":default:return"normal"}}},ge=function(n,A){return(n&A)!==0},L_={name:"content",initialValue:"none",type:1,prefix:!1,parse:function(n,A){if(A.length===0)return[];var e=A[0];return e.type===20&&e.value==="none"?[]:A}},R_={name:"counter-increment",initialValue:"none",prefix:!0,type:1,parse:function(n,A){if(A.length===0)return null;var e=A[0];if(e.type===20&&e.value==="none")return null;for(var t=[],i=A.filter(Nh),r=0;r<i.length;r++){var s=i[r],a=i[r+1];if(s.type===20){var o=a&&bi(a)?a.number:1;t.push({counter:s.value,increment:o})}}return t}},H_={name:"counter-reset",initialValue:"none",prefix:!0,type:1,parse:function(n,A){if(A.length===0)return[];for(var e=[],t=A.filter(Nh),i=0;i<t.length;i++){var r=t[i],s=t[i+1];if(qA(r)&&r.value!=="none"){var a=s&&bi(s)?s.number:0;e.push({counter:r.value,reset:a})}}return e}},D_={name:"duration",initialValue:"0s",prefix:!1,type:1,parse:function(n,A){return A.filter(xr).map(function(e){return tf.parse(n,e)})}},P_={name:"quotes",initialValue:"none",prefix:!0,type:1,parse:function(n,A){if(A.length===0)return null;var e=A[0];if(e.type===20&&e.value==="none")return null;var t=[],i=A.filter(cv);if(i.length%2!==0)return null;for(var r=0;r<i.length;r+=2){var s=i[r].value,a=i[r+1].value;t.push({open:s,close:a})}return t}},pu=function(n,A,e){if(!n)return"";var t=n[Math.min(A,n.length-1)];return t?e?t.open:t.close:""},N_={name:"box-shadow",initialValue:"none",type:1,prefix:!1,parse:function(n,A){return A.length===1&&No(A[0],"none")?[]:vt(A).map(function(e){for(var t={color:255,offsetX:Fe,offsetY:Fe,blur:Fe,spread:Fe,inset:!1},i=0,r=0;r<e.length;r++){var s=e[r];No(s,"inset")?t.inset=!0:on(s)?(i===0?t.offsetX=s:i===1?t.offsetY=s:i===2?t.blur=s:t.spread=s,i++):t.color=rn.parse(n,s)}return t})}},O_={name:"paint-order",initialValue:"normal",prefix:!1,type:1,parse:function(n,A){var e=[0,1,2],t=[];return A.filter(qA).forEach(function(i){switch(i.value){case"stroke":t.push(1);break;case"fill":t.push(0);break;case"markers":t.push(2);break}}),e.forEach(function(i){t.indexOf(i)===-1&&t.push(i)}),t}},G_={name:"-webkit-text-stroke-color",initialValue:"currentcolor",prefix:!1,type:3,format:"color"},V_={name:"-webkit-text-stroke-width",initialValue:"0",type:0,prefix:!1,parse:function(n,A){return xr(A)?A.number:0}},K_=function(){function n(A,e){var t,i;this.animationDuration=fA(A,D_,e.animationDuration),this.backgroundClip=fA(A,fv,e.backgroundClip),this.backgroundColor=fA(A,dv,e.backgroundColor),this.backgroundImage=fA(A,xv,e.backgroundImage),this.backgroundOrigin=fA(A,Uv,e.backgroundOrigin),this.backgroundPosition=fA(A,yv,e.backgroundPosition),this.backgroundRepeat=fA(A,Sv,e.backgroundRepeat),this.backgroundSize=fA(A,Mv,e.backgroundSize),this.borderTopColor=fA(A,Tv,e.borderTopColor),this.borderRightColor=fA(A,Qv,e.borderRightColor),this.borderBottomColor=fA(A,Iv,e.borderBottomColor),this.borderLeftColor=fA(A,Lv,e.borderLeftColor),this.borderTopLeftRadius=fA(A,Rv,e.borderTopLeftRadius),this.borderTopRightRadius=fA(A,Hv,e.borderTopRightRadius),this.borderBottomRightRadius=fA(A,Dv,e.borderBottomRightRadius),this.borderBottomLeftRadius=fA(A,Pv,e.borderBottomLeftRadius),this.borderTopStyle=fA(A,Nv,e.borderTopStyle),this.borderRightStyle=fA(A,Ov,e.borderRightStyle),this.borderBottomStyle=fA(A,Gv,e.borderBottomStyle),this.borderLeftStyle=fA(A,Vv,e.borderLeftStyle),this.borderTopWidth=fA(A,Kv,e.borderTopWidth),this.borderRightWidth=fA(A,kv,e.borderRightWidth),this.borderBottomWidth=fA(A,zv,e.borderBottomWidth),this.borderLeftWidth=fA(A,Wv,e.borderLeftWidth),this.boxShadow=fA(A,N_,e.boxShadow),this.color=fA(A,Xv,e.color),this.direction=fA(A,Yv,e.direction),this.display=fA(A,Jv,e.display),this.float=fA(A,qv,e.cssFloat),this.fontFamily=fA(A,M_,e.fontFamily),this.fontSize=fA(A,b_,e.fontSize),this.fontStyle=fA(A,I_,e.fontStyle),this.fontVariant=fA(A,Q_,e.fontVariant),this.fontWeight=fA(A,T_,e.fontWeight),this.letterSpacing=fA(A,$v,e.letterSpacing),this.lineBreak=fA(A,jv,e.lineBreak),this.lineHeight=fA(A,A_,e.lineHeight),this.listStyleImage=fA(A,e_,e.listStyleImage),this.listStylePosition=fA(A,t_,e.listStylePosition),this.listStyleType=fA(A,Oo,e.listStyleType),this.marginTop=fA(A,n_,e.marginTop),this.marginRight=fA(A,i_,e.marginRight),this.marginBottom=fA(A,r_,e.marginBottom),this.marginLeft=fA(A,s_,e.marginLeft),this.opacity=fA(A,y_,e.opacity);var r=fA(A,a_,e.overflow);this.overflowX=r[0],this.overflowY=r[r.length>1?1:0],this.overflowWrap=fA(A,o_,e.overflowWrap),this.paddingTop=fA(A,l_,e.paddingTop),this.paddingRight=fA(A,c_,e.paddingRight),this.paddingBottom=fA(A,u_,e.paddingBottom),this.paddingLeft=fA(A,h_,e.paddingLeft),this.paintOrder=fA(A,O_,e.paintOrder),this.position=fA(A,d_,e.position),this.textAlign=fA(A,f_,e.textAlign),this.textDecorationColor=fA(A,S_,(t=e.textDecorationColor)!==null&&t!==void 0?t:e.color),this.textDecorationLine=fA(A,F_,(i=e.textDecorationLine)!==null&&i!==void 0?i:e.textDecoration),this.textShadow=fA(A,p_,e.textShadow),this.textTransform=fA(A,g_,e.textTransform),this.transform=fA(A,m_,e.transform),this.transformOrigin=fA(A,C_,e.transformOrigin),this.visibility=fA(A,E_,e.visibility),this.webkitTextStrokeColor=fA(A,G_,e.webkitTextStrokeColor),this.webkitTextStrokeWidth=fA(A,V_,e.webkitTextStrokeWidth),this.wordBreak=fA(A,x_,e.wordBreak),this.zIndex=fA(A,U_,e.zIndex)}return n.prototype.isVisible=function(){return this.display>0&&this.opacity>0&&this.visibility===0},n.prototype.isTransparent=function(){return sn(this.backgroundColor)},n.prototype.isTransformed=function(){return this.transform!==null},n.prototype.isPositioned=function(){return this.position!==0},n.prototype.isPositionedWithZIndex=function(){return this.isPositioned()&&!this.zIndex.auto},n.prototype.isFloating=function(){return this.float!==0},n.prototype.isInlineLevel=function(){return ge(this.display,4)||ge(this.display,33554432)||ge(this.display,268435456)||ge(this.display,536870912)||ge(this.display,67108864)||ge(this.display,134217728)},n}(),k_=function(){function n(A,e){this.content=fA(A,L_,e.content),this.quotes=fA(A,P_,e.quotes)}return n}(),gu=function(){function n(A,e){this.counterIncrement=fA(A,R_,e.counterIncrement),this.counterReset=fA(A,H_,e.counterReset)}return n}(),fA=function(n,A,e){var t=new Dh,i=e!==null&&typeof e<"u"?e.toString():A.initialValue;t.write(i);var r=new Ph(t.read());switch(A.type){case 2:var s=r.parseComponentValue();return A.parse(n,qA(s)?s.value:A.initialValue);case 0:return A.parse(n,r.parseComponentValue());case 1:return A.parse(n,r.parseComponentValues());case 4:return r.parseComponentValue();case 3:switch(A.format){case"angle":return $s.parse(n,r.parseComponentValue());case"color":return rn.parse(n,r.parseComponentValue());case"image":return al.parse(n,r.parseComponentValue());case"length":var a=r.parseComponentValue();return on(a)?a:Fe;case"length-percentage":var o=r.parseComponentValue();return pe(o)?o:Fe;case"time":return tf.parse(n,r.parseComponentValue())}break}},z_="data-html2canvas-debug",W_=function(n){var A=n.getAttribute(z_);switch(A){case"all":return 1;case"clone":return 2;case"parse":return 3;case"render":return 4;default:return 0}},Go=function(n,A){var e=W_(n);return e===1||A===e},_t=function(){function n(A,e){if(this.context=A,this.textNodes=[],this.elements=[],this.flags=0,Go(e,3))debugger;this.styles=new K_(A,window.getComputedStyle(e,null)),ko(e)&&(this.styles.animationDuration.some(function(t){return t>0})&&(e.style.animationDuration="0s"),this.styles.transform!==null&&(e.style.transform="none")),this.bounds=Zs(this.context,e),Go(e,4)&&(this.flags|=16)}return n}(),X_="AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=",mu="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Xi=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var hs=0;hs<mu.length;hs++)Xi[mu.charCodeAt(hs)]=hs;var Y_=function(n){var A=n.length*.75,e=n.length,t,i=0,r,s,a,o;n[n.length-1]==="="&&(A--,n[n.length-2]==="="&&A--);var l=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(A):new Array(A),c=Array.isArray(l)?l:new Uint8Array(l);for(t=0;t<e;t+=4)r=Xi[n.charCodeAt(t)],s=Xi[n.charCodeAt(t+1)],a=Xi[n.charCodeAt(t+2)],o=Xi[n.charCodeAt(t+3)],c[i++]=r<<2|s>>4,c[i++]=(s&15)<<4|a>>2,c[i++]=(a&3)<<6|o&63;return l},J_=function(n){for(var A=n.length,e=[],t=0;t<A;t+=2)e.push(n[t+1]<<8|n[t]);return e},Z_=function(n){for(var A=n.length,e=[],t=0;t<A;t+=4)e.push(n[t+3]<<24|n[t+2]<<16|n[t+1]<<8|n[t]);return e},bn=5,ol=6+5,Za=2,q_=ol-bn,nf=65536>>bn,$_=1<<bn,qa=$_-1,j_=1024>>bn,AC=nf+j_,eC=AC,tC=32,nC=eC+tC,iC=65536>>ol,rC=1<<q_,sC=rC-1,Bu=function(n,A,e){return n.slice?n.slice(A,e):new Uint16Array(Array.prototype.slice.call(n,A,e))},aC=function(n,A,e){return n.slice?n.slice(A,e):new Uint32Array(Array.prototype.slice.call(n,A,e))},oC=function(n,A){var e=Y_(n),t=Array.isArray(e)?Z_(e):new Uint32Array(e),i=Array.isArray(e)?J_(e):new Uint16Array(e),r=24,s=Bu(i,r/2,t[4]/2),a=t[5]===2?Bu(i,(r+t[4])/2):aC(t,Math.ceil((r+t[4])/4));return new lC(t[0],t[1],t[2],t[3],s,a)},lC=function(){function n(A,e,t,i,r,s){this.initialValue=A,this.errorValue=e,this.highStart=t,this.highValueIndex=i,this.index=r,this.data=s}return n.prototype.get=function(A){var e;if(A>=0){if(A<55296||A>56319&&A<=65535)return e=this.index[A>>bn],e=(e<<Za)+(A&qa),this.data[e];if(A<=65535)return e=this.index[nf+(A-55296>>bn)],e=(e<<Za)+(A&qa),this.data[e];if(A<this.highStart)return e=nC-iC+(A>>ol),e=this.index[e],e+=A>>bn&sC,e=this.index[e],e=(e<<Za)+(A&qa),this.data[e];if(A<=1114111)return this.data[this.highValueIndex]}return this.errorValue},n}(),wu="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",cC=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var fs=0;fs<wu.length;fs++)cC[wu.charCodeAt(fs)]=fs;var uC=1,$a=2,ja=3,vu=4,_u=5,hC=7,Cu=8,Ao=9,eo=10,Eu=11,xu=12,Uu=13,yu=14,to=15,fC=function(n){for(var A=[],e=0,t=n.length;e<t;){var i=n.charCodeAt(e++);if(i>=55296&&i<=56319&&e<t){var r=n.charCodeAt(e++);(r&64512)===56320?A.push(((i&1023)<<10)+(r&1023)+65536):(A.push(i),e--)}else A.push(i)}return A},dC=function(){for(var n=[],A=0;A<arguments.length;A++)n[A]=arguments[A];if(String.fromCodePoint)return String.fromCodePoint.apply(String,n);var e=n.length;if(!e)return"";for(var t=[],i=-1,r="";++i<e;){var s=n[i];s<=65535?t.push(s):(s-=65536,t.push((s>>10)+55296,s%1024+56320)),(i+1===e||t.length>16384)&&(r+=String.fromCharCode.apply(String,t),t.length=0)}return r},pC=oC(X_),$e="×",no="÷",gC=function(n){return pC.get(n)},mC=function(n,A,e){var t=e-2,i=A[t],r=A[e-1],s=A[e];if(r===$a&&s===ja)return $e;if(r===$a||r===ja||r===vu||s===$a||s===ja||s===vu)return no;if(r===Cu&&[Cu,Ao,Eu,xu].indexOf(s)!==-1||(r===Eu||r===Ao)&&(s===Ao||s===eo)||(r===xu||r===eo)&&s===eo||s===Uu||s===_u||s===hC||r===uC)return $e;if(r===Uu&&s===yu){for(;i===_u;)i=A[--t];if(i===yu)return $e}if(r===to&&s===to){for(var a=0;i===to;)a++,i=A[--t];if(a%2===0)return $e}return no},BC=function(n){var A=fC(n),e=A.length,t=0,i=0,r=A.map(gC);return{next:function(){if(t>=e)return{done:!0,value:null};for(var s=$e;t<e&&(s=mC(A,r,++t))===$e;);if(s!==$e||t===e){var a=dC.apply(null,A.slice(i,t));return i=t,{value:a,done:!1}}return{done:!0,value:null}}}},wC=function(n){for(var A=BC(n),e=[],t;!(t=A.next()).done;)t.value&&e.push(t.value.slice());return e},vC=function(n){var A=123;if(n.createRange){var e=n.createRange();if(e.getBoundingClientRect){var t=n.createElement("boundtest");t.style.height=A+"px",t.style.display="block",n.body.appendChild(t),e.selectNode(t);var i=e.getBoundingClientRect(),r=Math.round(i.height);if(n.body.removeChild(t),r===A)return!0}}return!1},_C=function(n){var A=n.createElement("boundtest");A.style.width="50px",A.style.display="block",A.style.fontSize="12px",A.style.letterSpacing="0px",A.style.wordSpacing="0px",n.body.appendChild(A);var e=n.createRange();A.innerHTML=typeof"".repeat=="function"?"&#128104;".repeat(10):"";var t=A.firstChild,i=qs(t.data).map(function(o){return ce(o)}),r=0,s={},a=i.every(function(o,l){e.setStart(t,r),e.setEnd(t,r+o.length);var c=e.getBoundingClientRect();r+=o.length;var u=c.x>s.x||c.y>s.y;return s=c,l===0?!0:u});return n.body.removeChild(A),a},CC=function(){return typeof new Image().crossOrigin<"u"},EC=function(){return typeof new XMLHttpRequest().responseType=="string"},xC=function(n){var A=new Image,e=n.createElement("canvas"),t=e.getContext("2d");if(!t)return!1;A.src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";try{t.drawImage(A,0,0),e.toDataURL()}catch{return!1}return!0},Su=function(n){return n[0]===0&&n[1]===255&&n[2]===0&&n[3]===255},UC=function(n){var A=n.createElement("canvas"),e=100;A.width=e,A.height=e;var t=A.getContext("2d");if(!t)return Promise.reject(!1);t.fillStyle="rgb(0, 255, 0)",t.fillRect(0,0,e,e);var i=new Image,r=A.toDataURL();i.src=r;var s=Vo(e,e,0,0,i);return t.fillStyle="red",t.fillRect(0,0,e,e),Fu(s).then(function(a){t.drawImage(a,0,0);var o=t.getImageData(0,0,e,e).data;t.fillStyle="red",t.fillRect(0,0,e,e);var l=n.createElement("div");return l.style.backgroundImage="url("+r+")",l.style.height=e+"px",Su(o)?Fu(Vo(e,e,0,0,l)):Promise.reject(!1)}).then(function(a){return t.drawImage(a,0,0),Su(t.getImageData(0,0,e,e).data)}).catch(function(){return!1})},Vo=function(n,A,e,t,i){var r="http://www.w3.org/2000/svg",s=document.createElementNS(r,"svg"),a=document.createElementNS(r,"foreignObject");return s.setAttributeNS(null,"width",n.toString()),s.setAttributeNS(null,"height",A.toString()),a.setAttributeNS(null,"width","100%"),a.setAttributeNS(null,"height","100%"),a.setAttributeNS(null,"x",e.toString()),a.setAttributeNS(null,"y",t.toString()),a.setAttributeNS(null,"externalResourcesRequired","true"),s.appendChild(a),a.appendChild(i),s},Fu=function(n){return new Promise(function(A,e){var t=new Image;t.onload=function(){return A(t)},t.onerror=e,t.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(n))})},Ue={get SUPPORT_RANGE_BOUNDS(){var n=vC(document);return Object.defineProperty(Ue,"SUPPORT_RANGE_BOUNDS",{value:n}),n},get SUPPORT_WORD_BREAKING(){var n=Ue.SUPPORT_RANGE_BOUNDS&&_C(document);return Object.defineProperty(Ue,"SUPPORT_WORD_BREAKING",{value:n}),n},get SUPPORT_SVG_DRAWING(){var n=xC(document);return Object.defineProperty(Ue,"SUPPORT_SVG_DRAWING",{value:n}),n},get SUPPORT_FOREIGNOBJECT_DRAWING(){var n=typeof Array.from=="function"&&typeof window.fetch=="function"?UC(document):Promise.resolve(!1);return Object.defineProperty(Ue,"SUPPORT_FOREIGNOBJECT_DRAWING",{value:n}),n},get SUPPORT_CORS_IMAGES(){var n=CC();return Object.defineProperty(Ue,"SUPPORT_CORS_IMAGES",{value:n}),n},get SUPPORT_RESPONSE_TYPE(){var n=EC();return Object.defineProperty(Ue,"SUPPORT_RESPONSE_TYPE",{value:n}),n},get SUPPORT_CORS_XHR(){var n="withCredentials"in new XMLHttpRequest;return Object.defineProperty(Ue,"SUPPORT_CORS_XHR",{value:n}),n},get SUPPORT_NATIVE_TEXT_SEGMENTATION(){var n=!!(typeof Intl<"u"&&Intl.Segmenter);return Object.defineProperty(Ue,"SUPPORT_NATIVE_TEXT_SEGMENTATION",{value:n}),n}},tr=function(){function n(A,e){this.text=A,this.bounds=e}return n}(),yC=function(n,A,e,t){var i=MC(A,e),r=[],s=0;return i.forEach(function(a){if(e.textDecorationLine.length||a.trim().length>0)if(Ue.SUPPORT_RANGE_BOUNDS){var o=Mu(t,s,a.length).getClientRects();if(o.length>1){var l=ll(a),c=0;l.forEach(function(h){r.push(new tr(h,Dt.fromDOMRectList(n,Mu(t,c+s,h.length).getClientRects()))),c+=h.length})}else r.push(new tr(a,Dt.fromDOMRectList(n,o)))}else{var u=t.splitText(a.length);r.push(new tr(a,SC(n,t))),t=u}else Ue.SUPPORT_RANGE_BOUNDS||(t=t.splitText(a.length));s+=a.length}),r},SC=function(n,A){var e=A.ownerDocument;if(e){var t=e.createElement("html2canvaswrapper");t.appendChild(A.cloneNode(!0));var i=A.parentNode;if(i){i.replaceChild(t,A);var r=Zs(n,t);return t.firstChild&&i.replaceChild(t.firstChild,t),r}}return Dt.EMPTY},Mu=function(n,A,e){var t=n.ownerDocument;if(!t)throw new Error("Node has no owner document");var i=t.createRange();return i.setStart(n,A),i.setEnd(n,A+e),i},ll=function(n){if(Ue.SUPPORT_NATIVE_TEXT_SEGMENTATION){var A=new Intl.Segmenter(void 0,{granularity:"grapheme"});return Array.from(A.segment(n)).map(function(e){return e.segment})}return wC(n)},FC=function(n,A){if(Ue.SUPPORT_NATIVE_TEXT_SEGMENTATION){var e=new Intl.Segmenter(void 0,{granularity:"word"});return Array.from(e.segment(n)).map(function(t){return t.segment})}return TC(n,A)},MC=function(n,A){return A.letterSpacing!==0?ll(n):FC(n,A)},bC=[32,160,4961,65792,65793,4153,4241],TC=function(n,A){for(var e=iw(n,{lineBreak:A.lineBreak,wordBreak:A.overflowWrap==="break-word"?"break-word":A.wordBreak}),t=[],i,r=function(){if(i.value){var s=i.value.slice(),a=qs(s),o="";a.forEach(function(l){bC.indexOf(l)===-1?o+=ce(l):(o.length&&t.push(o),t.push(ce(l)),o="")}),o.length&&t.push(o)}};!(i=e.next()).done;)r();return t},QC=function(){function n(A,e,t){this.text=IC(e.data,t.textTransform),this.textBounds=yC(A,this.text,t,e)}return n}(),IC=function(n,A){switch(A){case 1:return n.toLowerCase();case 3:return n.replace(LC,RC);case 2:return n.toUpperCase();default:return n}},LC=/(^|\s|:|-|\(|\))([a-z])/g,RC=function(n,A,e){return n.length>0?A+e.toUpperCase():n},rf=function(n){dt(A,n);function A(e,t){var i=n.call(this,e,t)||this;return i.src=t.currentSrc||t.src,i.intrinsicWidth=t.naturalWidth,i.intrinsicHeight=t.naturalHeight,i.context.cache.addImage(i.src),i}return A}(_t),sf=function(n){dt(A,n);function A(e,t){var i=n.call(this,e,t)||this;return i.canvas=t,i.intrinsicWidth=t.width,i.intrinsicHeight=t.height,i}return A}(_t),af=function(n){dt(A,n);function A(e,t){var i=n.call(this,e,t)||this,r=new XMLSerializer,s=Zs(e,t);return t.setAttribute("width",s.width+"px"),t.setAttribute("height",s.height+"px"),i.svg="data:image/svg+xml,"+encodeURIComponent(r.serializeToString(t)),i.intrinsicWidth=t.width.baseVal.value,i.intrinsicHeight=t.height.baseVal.value,i.context.cache.addImage(i.svg),i}return A}(_t),of=function(n){dt(A,n);function A(e,t){var i=n.call(this,e,t)||this;return i.value=t.value,i}return A}(_t),Ko=function(n){dt(A,n);function A(e,t){var i=n.call(this,e,t)||this;return i.start=t.start,i.reversed=typeof t.reversed=="boolean"&&t.reversed===!0,i}return A}(_t),HC=[{type:15,flags:0,unit:"px",number:3}],DC=[{type:16,flags:0,number:50}],PC=function(n){return n.width>n.height?new Dt(n.left+(n.width-n.height)/2,n.top,n.height,n.height):n.width<n.height?new Dt(n.left,n.top+(n.height-n.width)/2,n.width,n.width):n},NC=function(n){var A=n.type===OC?new Array(n.value.length+1).join("•"):n.value;return A.length===0?n.placeholder||"":A},Hs="checkbox",Ds="radio",OC="password",bu=707406591,cl=function(n){dt(A,n);function A(e,t){var i=n.call(this,e,t)||this;switch(i.type=t.type.toLowerCase(),i.checked=t.checked,i.value=NC(t),(i.type===Hs||i.type===Ds)&&(i.styles.backgroundColor=3739148031,i.styles.borderTopColor=i.styles.borderRightColor=i.styles.borderBottomColor=i.styles.borderLeftColor=2779096575,i.styles.borderTopWidth=i.styles.borderRightWidth=i.styles.borderBottomWidth=i.styles.borderLeftWidth=1,i.styles.borderTopStyle=i.styles.borderRightStyle=i.styles.borderBottomStyle=i.styles.borderLeftStyle=1,i.styles.backgroundClip=[0],i.styles.backgroundOrigin=[0],i.bounds=PC(i.bounds)),i.type){case Hs:i.styles.borderTopRightRadius=i.styles.borderTopLeftRadius=i.styles.borderBottomRightRadius=i.styles.borderBottomLeftRadius=HC;break;case Ds:i.styles.borderTopRightRadius=i.styles.borderTopLeftRadius=i.styles.borderBottomRightRadius=i.styles.borderBottomLeftRadius=DC;break}return i}return A}(_t),lf=function(n){dt(A,n);function A(e,t){var i=n.call(this,e,t)||this,r=t.options[t.selectedIndex||0];return i.value=r&&r.text||"",i}return A}(_t),cf=function(n){dt(A,n);function A(e,t){var i=n.call(this,e,t)||this;return i.value=t.value,i}return A}(_t),uf=function(n){dt(A,n);function A(e,t){var i=n.call(this,e,t)||this;i.src=t.src,i.width=parseInt(t.width,10)||0,i.height=parseInt(t.height,10)||0,i.backgroundColor=i.styles.backgroundColor;try{if(t.contentWindow&&t.contentWindow.document&&t.contentWindow.document.documentElement){i.tree=ff(e,t.contentWindow.document.documentElement);var r=t.contentWindow.document.documentElement?Ar(e,getComputedStyle(t.contentWindow.document.documentElement).backgroundColor):Rt.TRANSPARENT,s=t.contentWindow.document.body?Ar(e,getComputedStyle(t.contentWindow.document.body).backgroundColor):Rt.TRANSPARENT;i.backgroundColor=sn(r)?sn(s)?i.styles.backgroundColor:s:r}}catch{}return i}return A}(_t),GC=["OL","UL","MENU"],xs=function(n,A,e,t){for(var i=A.firstChild,r=void 0;i;i=r)if(r=i.nextSibling,df(i)&&i.data.trim().length>0)e.textNodes.push(new QC(n,i,e.styles));else if(ci(i))if(Bf(i)&&i.assignedNodes)i.assignedNodes().forEach(function(a){return xs(n,a,e,t)});else{var s=hf(n,i);s.styles.isVisible()&&(VC(i,s,t)?s.flags|=4:KC(s.styles)&&(s.flags|=2),GC.indexOf(i.tagName)!==-1&&(s.flags|=8),e.elements.push(s),i.slot,i.shadowRoot?xs(n,i.shadowRoot,s,t):!Ps(i)&&!pf(i)&&!Ns(i)&&xs(n,i,s,t))}},hf=function(n,A){return zo(A)?new rf(n,A):gf(A)?new sf(n,A):pf(A)?new af(n,A):kC(A)?new of(n,A):zC(A)?new Ko(n,A):WC(A)?new cl(n,A):Ns(A)?new lf(n,A):Ps(A)?new cf(n,A):mf(A)?new uf(n,A):new _t(n,A)},ff=function(n,A){var e=hf(n,A);return e.flags|=4,xs(n,A,e,e),e},VC=function(n,A,e){return A.styles.isPositionedWithZIndex()||A.styles.opacity<1||A.styles.isTransformed()||ul(n)&&e.styles.isTransparent()},KC=function(n){return n.isPositioned()||n.isFloating()},df=function(n){return n.nodeType===Node.TEXT_NODE},ci=function(n){return n.nodeType===Node.ELEMENT_NODE},ko=function(n){return ci(n)&&typeof n.style<"u"&&!Us(n)},Us=function(n){return typeof n.className=="object"},kC=function(n){return n.tagName==="LI"},zC=function(n){return n.tagName==="OL"},WC=function(n){return n.tagName==="INPUT"},XC=function(n){return n.tagName==="HTML"},pf=function(n){return n.tagName==="svg"},ul=function(n){return n.tagName==="BODY"},gf=function(n){return n.tagName==="CANVAS"},Tu=function(n){return n.tagName==="VIDEO"},zo=function(n){return n.tagName==="IMG"},mf=function(n){return n.tagName==="IFRAME"},Qu=function(n){return n.tagName==="STYLE"},YC=function(n){return n.tagName==="SCRIPT"},Ps=function(n){return n.tagName==="TEXTAREA"},Ns=function(n){return n.tagName==="SELECT"},Bf=function(n){return n.tagName==="SLOT"},Iu=function(n){return n.tagName.indexOf("-")>0},JC=function(){function n(){this.counters={}}return n.prototype.getCounterValue=function(A){var e=this.counters[A];return e&&e.length?e[e.length-1]:1},n.prototype.getCounterValues=function(A){var e=this.counters[A];return e||[]},n.prototype.pop=function(A){var e=this;A.forEach(function(t){return e.counters[t].pop()})},n.prototype.parse=function(A){var e=this,t=A.counterIncrement,i=A.counterReset,r=!0;t!==null&&t.forEach(function(a){var o=e.counters[a.counter];o&&a.increment!==0&&(r=!1,o.length||o.push(1),o[Math.max(0,o.length-1)]+=a.increment)});var s=[];return r&&i.forEach(function(a){var o=e.counters[a.counter];s.push(a.counter),o||(o=e.counters[a.counter]=[]),o.push(a.reset)}),s},n}(),Lu={integers:[1e3,900,500,400,100,90,50,40,10,9,5,4,1],values:["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]},Ru={integers:[9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["Ք","Փ","Ւ","Ց","Ր","Տ","Վ","Ս","Ռ","Ջ","Պ","Չ","Ո","Շ","Ն","Յ","Մ","Ճ","Ղ","Ձ","Հ","Կ","Ծ","Խ","Լ","Ի","Ժ","Թ","Ը","Է","Զ","Ե","Դ","Գ","Բ","Ա"]},ZC={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,400,300,200,100,90,80,70,60,50,40,30,20,19,18,17,16,15,10,9,8,7,6,5,4,3,2,1],values:["י׳","ט׳","ח׳","ז׳","ו׳","ה׳","ד׳","ג׳","ב׳","א׳","ת","ש","ר","ק","צ","פ","ע","ס","נ","מ","ל","כ","יט","יח","יז","טז","טו","י","ט","ח","ז","ו","ה","ד","ג","ב","א"]},qC={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["ჵ","ჰ","ჯ","ჴ","ხ","ჭ","წ","ძ","ც","ჩ","შ","ყ","ღ","ქ","ფ","ჳ","ტ","ს","რ","ჟ","პ","ო","ჲ","ნ","მ","ლ","კ","ი","თ","ჱ","ზ","ვ","ე","დ","გ","ბ","ა"]},ti=function(n,A,e,t,i,r){return n<A||n>e?fr(n,i,r.length>0):t.integers.reduce(function(s,a,o){for(;n>=a;)n-=a,s+=t.values[o];return s},"")+r},wf=function(n,A,e,t){var i="";do e||n--,i=t(n)+i,n/=A;while(n*A>=A);return i},le=function(n,A,e,t,i){var r=e-A+1;return(n<0?"-":"")+(wf(Math.abs(n),r,t,function(s){return ce(Math.floor(s%r)+A)})+i)},gn=function(n,A,e){e===void 0&&(e=". ");var t=A.length;return wf(Math.abs(n),t,!1,function(i){return A[Math.floor(i%t)]})+e},ai=1,Kt=2,kt=4,Yi=8,Mt=function(n,A,e,t,i,r){if(n<-9999||n>9999)return fr(n,4,i.length>0);var s=Math.abs(n),a=i;if(s===0)return A[0]+a;for(var o=0;s>0&&o<=4;o++){var l=s%10;l===0&&ge(r,ai)&&a!==""?a=A[l]+a:l>1||l===1&&o===0||l===1&&o===1&&ge(r,Kt)||l===1&&o===1&&ge(r,kt)&&n>100||l===1&&o>1&&ge(r,Yi)?a=A[l]+(o>0?e[o-1]:"")+a:l===1&&o>0&&(a=e[o-1]+a),s=Math.floor(s/10)}return(n<0?t:"")+a},Hu="十百千萬",Du="拾佰仟萬",Pu="マイナス",io="마이너스",fr=function(n,A,e){var t=e?". ":"",i=e?"、":"",r=e?", ":"",s=e?" ":"";switch(A){case 0:return"•"+s;case 1:return"◦"+s;case 2:return"◾"+s;case 5:var a=le(n,48,57,!0,t);return a.length<4?"0"+a:a;case 4:return gn(n,"〇一二三四五六七八九",i);case 6:return ti(n,1,3999,Lu,3,t).toLowerCase();case 7:return ti(n,1,3999,Lu,3,t);case 8:return le(n,945,969,!1,t);case 9:return le(n,97,122,!1,t);case 10:return le(n,65,90,!1,t);case 11:return le(n,1632,1641,!0,t);case 12:case 49:return ti(n,1,9999,Ru,3,t);case 35:return ti(n,1,9999,Ru,3,t).toLowerCase();case 13:return le(n,2534,2543,!0,t);case 14:case 30:return le(n,6112,6121,!0,t);case 15:return gn(n,"子丑寅卯辰巳午未申酉戌亥",i);case 16:return gn(n,"甲乙丙丁戊己庚辛壬癸",i);case 17:case 48:return Mt(n,"零一二三四五六七八九",Hu,"負",i,Kt|kt|Yi);case 47:return Mt(n,"零壹貳參肆伍陸柒捌玖",Du,"負",i,ai|Kt|kt|Yi);case 42:return Mt(n,"零一二三四五六七八九",Hu,"负",i,Kt|kt|Yi);case 41:return Mt(n,"零壹贰叁肆伍陆柒捌玖",Du,"负",i,ai|Kt|kt|Yi);case 26:return Mt(n,"〇一二三四五六七八九","十百千万",Pu,i,0);case 25:return Mt(n,"零壱弐参四伍六七八九","拾百千万",Pu,i,ai|Kt|kt);case 31:return Mt(n,"영일이삼사오육칠팔구","십백천만",io,r,ai|Kt|kt);case 33:return Mt(n,"零一二三四五六七八九","十百千萬",io,r,0);case 32:return Mt(n,"零壹貳參四五六七八九","拾百千",io,r,ai|Kt|kt);case 18:return le(n,2406,2415,!0,t);case 20:return ti(n,1,19999,qC,3,t);case 21:return le(n,2790,2799,!0,t);case 22:return le(n,2662,2671,!0,t);case 22:return ti(n,1,10999,ZC,3,t);case 23:return gn(n,"あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");case 24:return gn(n,"いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");case 27:return le(n,3302,3311,!0,t);case 28:return gn(n,"アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン",i);case 29:return gn(n,"イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス",i);case 34:return le(n,3792,3801,!0,t);case 37:return le(n,6160,6169,!0,t);case 38:return le(n,4160,4169,!0,t);case 39:return le(n,2918,2927,!0,t);case 40:return le(n,1776,1785,!0,t);case 43:return le(n,3046,3055,!0,t);case 44:return le(n,3174,3183,!0,t);case 45:return le(n,3664,3673,!0,t);case 46:return le(n,3872,3881,!0,t);case 3:default:return le(n,48,57,!0,t)}},vf="data-html2canvas-ignore",Nu=function(){function n(A,e,t){if(this.context=A,this.options=t,this.scrolledElements=[],this.referenceElement=e,this.counters=new JC,this.quoteDepth=0,!e.ownerDocument)throw new Error("Cloned element does not have an owner document");this.documentElement=this.cloneNode(e.ownerDocument.documentElement,!1)}return n.prototype.toIFrame=function(A,e){var t=this,i=$C(A,e);if(!i.contentWindow)return Promise.reject("Unable to find iframe window");var r=A.defaultView.pageXOffset,s=A.defaultView.pageYOffset,a=i.contentWindow,o=a.document,l=eE(i).then(function(){return Ne(t,void 0,void 0,function(){var c,u;return Qe(this,function(h){switch(h.label){case 0:return this.scrolledElements.forEach(rE),a&&(a.scrollTo(e.left,e.top),/(iPad|iPhone|iPod)/g.test(navigator.userAgent)&&(a.scrollY!==e.top||a.scrollX!==e.left)&&(this.context.logger.warn("Unable to restore scroll position for cloned document"),this.context.windowBounds=this.context.windowBounds.add(a.scrollX-e.left,a.scrollY-e.top,0,0))),c=this.options.onclone,u=this.clonedReferenceElement,typeof u>"u"?[2,Promise.reject("Error finding the "+this.referenceElement.nodeName+" in the cloned document")]:o.fonts&&o.fonts.ready?[4,o.fonts.ready]:[3,2];case 1:h.sent(),h.label=2;case 2:return/(AppleWebKit)/g.test(navigator.userAgent)?[4,AE(o)]:[3,4];case 3:h.sent(),h.label=4;case 4:return typeof c=="function"?[2,Promise.resolve().then(function(){return c(o,u)}).then(function(){return i})]:[2,i]}})})});return o.open(),o.write(nE(document.doctype)+"<html></html>"),iE(this.referenceElement.ownerDocument,r,s),o.replaceChild(o.adoptNode(this.documentElement),o.documentElement),o.close(),l},n.prototype.createElementClone=function(A){if(Go(A,2))debugger;if(gf(A))return this.createCanvasClone(A);if(Tu(A))return this.createVideoClone(A);if(Qu(A))return this.createStyleClone(A);var e=A.cloneNode(!1);return zo(e)&&(zo(A)&&A.currentSrc&&A.currentSrc!==A.src&&(e.src=A.currentSrc,e.srcset=""),e.loading==="lazy"&&(e.loading="eager")),Iu(e)?this.createCustomElementClone(e):e},n.prototype.createCustomElementClone=function(A){var e=document.createElement("html2canvascustomelement");return ro(A.style,e),e},n.prototype.createStyleClone=function(A){try{var e=A.sheet;if(e&&e.cssRules){var t=[].slice.call(e.cssRules,0).reduce(function(r,s){return s&&typeof s.cssText=="string"?r+s.cssText:r},""),i=A.cloneNode(!1);return i.textContent=t,i}}catch(r){if(this.context.logger.error("Unable to access cssRules property",r),r.name!=="SecurityError")throw r}return A.cloneNode(!1)},n.prototype.createCanvasClone=function(A){var e;if(this.options.inlineImages&&A.ownerDocument){var t=A.ownerDocument.createElement("img");try{return t.src=A.toDataURL(),t}catch{this.context.logger.info("Unable to inline canvas contents, canvas is tainted",A)}}var i=A.cloneNode(!1);try{i.width=A.width,i.height=A.height;var r=A.getContext("2d"),s=i.getContext("2d");if(s)if(!this.options.allowTaint&&r)s.putImageData(r.getImageData(0,0,A.width,A.height),0,0);else{var a=(e=A.getContext("webgl2"))!==null&&e!==void 0?e:A.getContext("webgl");if(a){var o=a.getContextAttributes();(o==null?void 0:o.preserveDrawingBuffer)===!1&&this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false",A)}s.drawImage(A,0,0)}return i}catch{this.context.logger.info("Unable to clone canvas as it is tainted",A)}return i},n.prototype.createVideoClone=function(A){var e=A.ownerDocument.createElement("canvas");e.width=A.offsetWidth,e.height=A.offsetHeight;var t=e.getContext("2d");try{return t&&(t.drawImage(A,0,0,e.width,e.height),this.options.allowTaint||t.getImageData(0,0,e.width,e.height)),e}catch{this.context.logger.info("Unable to clone video as it is tainted",A)}var i=A.ownerDocument.createElement("canvas");return i.width=A.offsetWidth,i.height=A.offsetHeight,i},n.prototype.appendChildNode=function(A,e,t){(!ci(e)||!YC(e)&&!e.hasAttribute(vf)&&(typeof this.options.ignoreElements!="function"||!this.options.ignoreElements(e)))&&(!this.options.copyStyles||!ci(e)||!Qu(e))&&A.appendChild(this.cloneNode(e,t))},n.prototype.cloneChildNodes=function(A,e,t){for(var i=this,r=A.shadowRoot?A.shadowRoot.firstChild:A.firstChild;r;r=r.nextSibling)if(ci(r)&&Bf(r)&&typeof r.assignedNodes=="function"){var s=r.assignedNodes();s.length&&s.forEach(function(a){return i.appendChildNode(e,a,t)})}else this.appendChildNode(e,r,t)},n.prototype.cloneNode=function(A,e){if(df(A))return document.createTextNode(A.data);if(!A.ownerDocument)return A.cloneNode(!1);var t=A.ownerDocument.defaultView;if(t&&ci(A)&&(ko(A)||Us(A))){var i=this.createElementClone(A);i.style.transitionProperty="none";var r=t.getComputedStyle(A),s=t.getComputedStyle(A,":before"),a=t.getComputedStyle(A,":after");this.referenceElement===A&&ko(i)&&(this.clonedReferenceElement=i),ul(i)&&oE(i);var o=this.counters.parse(new gu(this.context,r)),l=this.resolvePseudoContent(A,i,s,nr.BEFORE);Iu(A)&&(e=!0),Tu(A)||this.cloneChildNodes(A,i,e),l&&i.insertBefore(l,i.firstChild);var c=this.resolvePseudoContent(A,i,a,nr.AFTER);return c&&i.appendChild(c),this.counters.pop(o),(r&&(this.options.copyStyles||Us(A))&&!mf(A)||e)&&ro(r,i),(A.scrollTop!==0||A.scrollLeft!==0)&&this.scrolledElements.push([i,A.scrollLeft,A.scrollTop]),(Ps(A)||Ns(A))&&(Ps(i)||Ns(i))&&(i.value=A.value),i}return A.cloneNode(!1)},n.prototype.resolvePseudoContent=function(A,e,t,i){var r=this;if(t){var s=t.content,a=e.ownerDocument;if(!(!a||!s||s==="none"||s==="-moz-alt-content"||t.display==="none")){this.counters.parse(new gu(this.context,t));var o=new k_(this.context,t),l=a.createElement("html2canvaspseudoelement");ro(t,l),o.content.forEach(function(u){if(u.type===0)l.appendChild(a.createTextNode(u.value));else if(u.type===22){var h=a.createElement("img");h.src=u.value,h.style.opacity="1",l.appendChild(h)}else if(u.type===18){if(u.name==="attr"){var p=u.values.filter(qA);p.length&&l.appendChild(a.createTextNode(A.getAttribute(p[0].value)||""))}else if(u.name==="counter"){var g=u.values.filter(Si),m=g[0],d=g[1];if(m&&qA(m)){var f=r.counters.getCounterValue(m.value),E=d&&qA(d)?Oo.parse(r.context,d.value):3;l.appendChild(a.createTextNode(fr(f,E,!1)))}}else if(u.name==="counters"){var v=u.values.filter(Si),m=v[0],C=v[1],d=v[2];if(m&&qA(m)){var x=r.counters.getCounterValues(m.value),y=d&&qA(d)?Oo.parse(r.context,d.value):3,U=C&&C.type===0?C.value:"",R=x.map(function(k){return fr(k,y,!1)}).join(U);l.appendChild(a.createTextNode(R))}}}else if(u.type===20)switch(u.value){case"open-quote":l.appendChild(a.createTextNode(pu(o.quotes,r.quoteDepth++,!0)));break;case"close-quote":l.appendChild(a.createTextNode(pu(o.quotes,--r.quoteDepth,!1)));break;default:l.appendChild(a.createTextNode(u.value))}}),l.className=Wo+" "+Xo;var c=i===nr.BEFORE?" "+Wo:" "+Xo;return Us(e)?e.className.baseValue+=c:e.className+=c,l}}},n.destroy=function(A){return A.parentNode?(A.parentNode.removeChild(A),!0):!1},n}(),nr;(function(n){n[n.BEFORE=0]="BEFORE",n[n.AFTER=1]="AFTER"})(nr||(nr={}));var $C=function(n,A){var e=n.createElement("iframe");return e.className="html2canvas-container",e.style.visibility="hidden",e.style.position="fixed",e.style.left="-10000px",e.style.top="0px",e.style.border="0",e.width=A.width.toString(),e.height=A.height.toString(),e.scrolling="no",e.setAttribute(vf,"true"),n.body.appendChild(e),e},jC=function(n){return new Promise(function(A){if(n.complete){A();return}if(!n.src){A();return}n.onload=A,n.onerror=A})},AE=function(n){return Promise.all([].slice.call(n.images,0).map(jC))},eE=function(n){return new Promise(function(A,e){var t=n.contentWindow;if(!t)return e("No window assigned for iframe");var i=t.document;t.onload=n.onload=function(){t.onload=n.onload=null;var r=setInterval(function(){i.body.childNodes.length>0&&i.readyState==="complete"&&(clearInterval(r),A(n))},50)}})},tE=["all","d","content"],ro=function(n,A){for(var e=n.length-1;e>=0;e--){var t=n.item(e);tE.indexOf(t)===-1&&A.style.setProperty(t,n.getPropertyValue(t))}return A},nE=function(n){var A="";return n&&(A+="<!DOCTYPE ",n.name&&(A+=n.name),n.internalSubset&&(A+=n.internalSubset),n.publicId&&(A+='"'+n.publicId+'"'),n.systemId&&(A+='"'+n.systemId+'"'),A+=">"),A},iE=function(n,A,e){n&&n.defaultView&&(A!==n.defaultView.pageXOffset||e!==n.defaultView.pageYOffset)&&n.defaultView.scrollTo(A,e)},rE=function(n){var A=n[0],e=n[1],t=n[2];A.scrollLeft=e,A.scrollTop=t},sE=":before",aE=":after",Wo="___html2canvas___pseudoelement_before",Xo="___html2canvas___pseudoelement_after",Ou=`{
    content: "" !important;
    display: none !important;
}`,oE=function(n){lE(n,"."+Wo+sE+Ou+`
         .`+Xo+aE+Ou)},lE=function(n,A){var e=n.ownerDocument;if(e){var t=e.createElement("style");t.textContent=A,n.appendChild(t)}},_f=function(){function n(){}return n.getOrigin=function(A){var e=n._link;return e?(e.href=A,e.href=e.href,e.protocol+e.hostname+e.port):"about:blank"},n.isSameOrigin=function(A){return n.getOrigin(A)===n._origin},n.setContext=function(A){n._link=A.document.createElement("a"),n._origin=n.getOrigin(A.location.href)},n._origin="about:blank",n}(),cE=function(){function n(A,e){this.context=A,this._options=e,this._cache={}}return n.prototype.addImage=function(A){var e=Promise.resolve();return this.has(A)||(ao(A)||dE(A))&&(this._cache[A]=this.loadImage(A)).catch(function(){}),e},n.prototype.match=function(A){return this._cache[A]},n.prototype.loadImage=function(A){return Ne(this,void 0,void 0,function(){var e,t,i,r,s=this;return Qe(this,function(a){switch(a.label){case 0:return e=_f.isSameOrigin(A),t=!so(A)&&this._options.useCORS===!0&&Ue.SUPPORT_CORS_IMAGES&&!e,i=!so(A)&&!e&&!ao(A)&&typeof this._options.proxy=="string"&&Ue.SUPPORT_CORS_XHR&&!t,!e&&this._options.allowTaint===!1&&!so(A)&&!ao(A)&&!i&&!t?[2]:(r=A,i?[4,this.proxy(r)]:[3,2]);case 1:r=a.sent(),a.label=2;case 2:return this.context.logger.debug("Added image "+A.substring(0,256)),[4,new Promise(function(o,l){var c=new Image;c.onload=function(){return o(c)},c.onerror=l,(pE(r)||t)&&(c.crossOrigin="anonymous"),c.src=r,c.complete===!0&&setTimeout(function(){return o(c)},500),s._options.imageTimeout>0&&setTimeout(function(){return l("Timed out ("+s._options.imageTimeout+"ms) loading image")},s._options.imageTimeout)})];case 3:return[2,a.sent()]}})})},n.prototype.has=function(A){return typeof this._cache[A]<"u"},n.prototype.keys=function(){return Promise.resolve(Object.keys(this._cache))},n.prototype.proxy=function(A){var e=this,t=this._options.proxy;if(!t)throw new Error("No proxy defined");var i=A.substring(0,256);return new Promise(function(r,s){var a=Ue.SUPPORT_RESPONSE_TYPE?"blob":"text",o=new XMLHttpRequest;o.onload=function(){if(o.status===200)if(a==="text")r(o.response);else{var u=new FileReader;u.addEventListener("load",function(){return r(u.result)},!1),u.addEventListener("error",function(h){return s(h)},!1),u.readAsDataURL(o.response)}else s("Failed to proxy resource "+i+" with status code "+o.status)},o.onerror=s;var l=t.indexOf("?")>-1?"&":"?";if(o.open("GET",""+t+l+"url="+encodeURIComponent(A)+"&responseType="+a),a!=="text"&&o instanceof XMLHttpRequest&&(o.responseType=a),e._options.imageTimeout){var c=e._options.imageTimeout;o.timeout=c,o.ontimeout=function(){return s("Timed out ("+c+"ms) proxying "+i)}}o.send()})},n}(),uE=/^data:image\/svg\+xml/i,hE=/^data:image\/.*;base64,/i,fE=/^data:image\/.*/i,dE=function(n){return Ue.SUPPORT_SVG_DRAWING||!gE(n)},so=function(n){return fE.test(n)},pE=function(n){return hE.test(n)},ao=function(n){return n.substr(0,4)==="blob"},gE=function(n){return n.substr(-3).toLowerCase()==="svg"||uE.test(n)},uA=function(){function n(A,e){this.type=0,this.x=A,this.y=e}return n.prototype.add=function(A,e){return new n(this.x+A,this.y+e)},n}(),ni=function(n,A,e){return new uA(n.x+(A.x-n.x)*e,n.y+(A.y-n.y)*e)},ds=function(){function n(A,e,t,i){this.type=1,this.start=A,this.startControl=e,this.endControl=t,this.end=i}return n.prototype.subdivide=function(A,e){var t=ni(this.start,this.startControl,A),i=ni(this.startControl,this.endControl,A),r=ni(this.endControl,this.end,A),s=ni(t,i,A),a=ni(i,r,A),o=ni(s,a,A);return e?new n(this.start,t,s,o):new n(o,a,r,this.end)},n.prototype.add=function(A,e){return new n(this.start.add(A,e),this.startControl.add(A,e),this.endControl.add(A,e),this.end.add(A,e))},n.prototype.reverse=function(){return new n(this.end,this.endControl,this.startControl,this.start)},n}(),et=function(n){return n.type===1},mE=function(){function n(A){var e=A.styles,t=A.bounds,i=Wi(e.borderTopLeftRadius,t.width,t.height),r=i[0],s=i[1],a=Wi(e.borderTopRightRadius,t.width,t.height),o=a[0],l=a[1],c=Wi(e.borderBottomRightRadius,t.width,t.height),u=c[0],h=c[1],p=Wi(e.borderBottomLeftRadius,t.width,t.height),g=p[0],m=p[1],d=[];d.push((r+o)/t.width),d.push((g+u)/t.width),d.push((s+m)/t.height),d.push((l+h)/t.height);var f=Math.max.apply(Math,d);f>1&&(r/=f,s/=f,o/=f,l/=f,u/=f,h/=f,g/=f,m/=f);var E=t.width-o,v=t.height-h,C=t.width-u,x=t.height-m,y=e.borderTopWidth,U=e.borderRightWidth,R=e.borderBottomWidth,B=e.borderLeftWidth,F=ee(e.paddingTop,A.bounds.width),k=ee(e.paddingRight,A.bounds.width),Y=ee(e.paddingBottom,A.bounds.width),X=ee(e.paddingLeft,A.bounds.width);this.topLeftBorderDoubleOuterBox=r>0||s>0?se(t.left+B/3,t.top+y/3,r-B/3,s-y/3,JA.TOP_LEFT):new uA(t.left+B/3,t.top+y/3),this.topRightBorderDoubleOuterBox=r>0||s>0?se(t.left+E,t.top+y/3,o-U/3,l-y/3,JA.TOP_RIGHT):new uA(t.left+t.width-U/3,t.top+y/3),this.bottomRightBorderDoubleOuterBox=u>0||h>0?se(t.left+C,t.top+v,u-U/3,h-R/3,JA.BOTTOM_RIGHT):new uA(t.left+t.width-U/3,t.top+t.height-R/3),this.bottomLeftBorderDoubleOuterBox=g>0||m>0?se(t.left+B/3,t.top+x,g-B/3,m-R/3,JA.BOTTOM_LEFT):new uA(t.left+B/3,t.top+t.height-R/3),this.topLeftBorderDoubleInnerBox=r>0||s>0?se(t.left+B*2/3,t.top+y*2/3,r-B*2/3,s-y*2/3,JA.TOP_LEFT):new uA(t.left+B*2/3,t.top+y*2/3),this.topRightBorderDoubleInnerBox=r>0||s>0?se(t.left+E,t.top+y*2/3,o-U*2/3,l-y*2/3,JA.TOP_RIGHT):new uA(t.left+t.width-U*2/3,t.top+y*2/3),this.bottomRightBorderDoubleInnerBox=u>0||h>0?se(t.left+C,t.top+v,u-U*2/3,h-R*2/3,JA.BOTTOM_RIGHT):new uA(t.left+t.width-U*2/3,t.top+t.height-R*2/3),this.bottomLeftBorderDoubleInnerBox=g>0||m>0?se(t.left+B*2/3,t.top+x,g-B*2/3,m-R*2/3,JA.BOTTOM_LEFT):new uA(t.left+B*2/3,t.top+t.height-R*2/3),this.topLeftBorderStroke=r>0||s>0?se(t.left+B/2,t.top+y/2,r-B/2,s-y/2,JA.TOP_LEFT):new uA(t.left+B/2,t.top+y/2),this.topRightBorderStroke=r>0||s>0?se(t.left+E,t.top+y/2,o-U/2,l-y/2,JA.TOP_RIGHT):new uA(t.left+t.width-U/2,t.top+y/2),this.bottomRightBorderStroke=u>0||h>0?se(t.left+C,t.top+v,u-U/2,h-R/2,JA.BOTTOM_RIGHT):new uA(t.left+t.width-U/2,t.top+t.height-R/2),this.bottomLeftBorderStroke=g>0||m>0?se(t.left+B/2,t.top+x,g-B/2,m-R/2,JA.BOTTOM_LEFT):new uA(t.left+B/2,t.top+t.height-R/2),this.topLeftBorderBox=r>0||s>0?se(t.left,t.top,r,s,JA.TOP_LEFT):new uA(t.left,t.top),this.topRightBorderBox=o>0||l>0?se(t.left+E,t.top,o,l,JA.TOP_RIGHT):new uA(t.left+t.width,t.top),this.bottomRightBorderBox=u>0||h>0?se(t.left+C,t.top+v,u,h,JA.BOTTOM_RIGHT):new uA(t.left+t.width,t.top+t.height),this.bottomLeftBorderBox=g>0||m>0?se(t.left,t.top+x,g,m,JA.BOTTOM_LEFT):new uA(t.left,t.top+t.height),this.topLeftPaddingBox=r>0||s>0?se(t.left+B,t.top+y,Math.max(0,r-B),Math.max(0,s-y),JA.TOP_LEFT):new uA(t.left+B,t.top+y),this.topRightPaddingBox=o>0||l>0?se(t.left+Math.min(E,t.width-U),t.top+y,E>t.width+U?0:Math.max(0,o-U),Math.max(0,l-y),JA.TOP_RIGHT):new uA(t.left+t.width-U,t.top+y),this.bottomRightPaddingBox=u>0||h>0?se(t.left+Math.min(C,t.width-B),t.top+Math.min(v,t.height-R),Math.max(0,u-U),Math.max(0,h-R),JA.BOTTOM_RIGHT):new uA(t.left+t.width-U,t.top+t.height-R),this.bottomLeftPaddingBox=g>0||m>0?se(t.left+B,t.top+Math.min(x,t.height-R),Math.max(0,g-B),Math.max(0,m-R),JA.BOTTOM_LEFT):new uA(t.left+B,t.top+t.height-R),this.topLeftContentBox=r>0||s>0?se(t.left+B+X,t.top+y+F,Math.max(0,r-(B+X)),Math.max(0,s-(y+F)),JA.TOP_LEFT):new uA(t.left+B+X,t.top+y+F),this.topRightContentBox=o>0||l>0?se(t.left+Math.min(E,t.width+B+X),t.top+y+F,E>t.width+B+X?0:o-B+X,l-(y+F),JA.TOP_RIGHT):new uA(t.left+t.width-(U+k),t.top+y+F),this.bottomRightContentBox=u>0||h>0?se(t.left+Math.min(C,t.width-(B+X)),t.top+Math.min(v,t.height+y+F),Math.max(0,u-(U+k)),h-(R+Y),JA.BOTTOM_RIGHT):new uA(t.left+t.width-(U+k),t.top+t.height-(R+Y)),this.bottomLeftContentBox=g>0||m>0?se(t.left+B+X,t.top+x,Math.max(0,g-(B+X)),m-(R+Y),JA.BOTTOM_LEFT):new uA(t.left+B+X,t.top+t.height-(R+Y))}return n}(),JA;(function(n){n[n.TOP_LEFT=0]="TOP_LEFT",n[n.TOP_RIGHT=1]="TOP_RIGHT",n[n.BOTTOM_RIGHT=2]="BOTTOM_RIGHT",n[n.BOTTOM_LEFT=3]="BOTTOM_LEFT"})(JA||(JA={}));var se=function(n,A,e,t,i){var r=4*((Math.sqrt(2)-1)/3),s=e*r,a=t*r,o=n+e,l=A+t;switch(i){case JA.TOP_LEFT:return new ds(new uA(n,l),new uA(n,l-a),new uA(o-s,A),new uA(o,A));case JA.TOP_RIGHT:return new ds(new uA(n,A),new uA(n+s,A),new uA(o,l-a),new uA(o,l));case JA.BOTTOM_RIGHT:return new ds(new uA(o,A),new uA(o,A+a),new uA(n+s,l),new uA(n,l));case JA.BOTTOM_LEFT:default:return new ds(new uA(o,l),new uA(o-s,l),new uA(n,A+a),new uA(n,A))}},Os=function(n){return[n.topLeftBorderBox,n.topRightBorderBox,n.bottomRightBorderBox,n.bottomLeftBorderBox]},BE=function(n){return[n.topLeftContentBox,n.topRightContentBox,n.bottomRightContentBox,n.bottomLeftContentBox]},Gs=function(n){return[n.topLeftPaddingBox,n.topRightPaddingBox,n.bottomRightPaddingBox,n.bottomLeftPaddingBox]},wE=function(){function n(A,e,t){this.offsetX=A,this.offsetY=e,this.matrix=t,this.type=0,this.target=6}return n}(),ps=function(){function n(A,e){this.path=A,this.target=e,this.type=1}return n}(),vE=function(){function n(A){this.opacity=A,this.type=2,this.target=6}return n}(),_E=function(n){return n.type===0},Cf=function(n){return n.type===1},CE=function(n){return n.type===2},Gu=function(n,A){return n.length===A.length?n.some(function(e,t){return e===A[t]}):!1},EE=function(n,A,e,t,i){return n.map(function(r,s){switch(s){case 0:return r.add(A,e);case 1:return r.add(A+t,e);case 2:return r.add(A+t,e+i);case 3:return r.add(A,e+i)}return r})},Ef=function(){function n(A){this.element=A,this.inlineLevel=[],this.nonInlineLevel=[],this.negativeZIndex=[],this.zeroOrAutoZIndexOrTransformedOrOpacity=[],this.positiveZIndex=[],this.nonPositionedFloats=[],this.nonPositionedInlineLevel=[]}return n}(),xf=function(){function n(A,e){if(this.container=A,this.parent=e,this.effects=[],this.curves=new mE(this.container),this.container.styles.opacity<1&&this.effects.push(new vE(this.container.styles.opacity)),this.container.styles.transform!==null){var t=this.container.bounds.left+this.container.styles.transformOrigin[0].number,i=this.container.bounds.top+this.container.styles.transformOrigin[1].number,r=this.container.styles.transform;this.effects.push(new wE(t,i,r))}if(this.container.styles.overflowX!==0){var s=Os(this.curves),a=Gs(this.curves);Gu(s,a)?this.effects.push(new ps(s,6)):(this.effects.push(new ps(s,2)),this.effects.push(new ps(a,4)))}}return n.prototype.getEffects=function(A){for(var e=[2,3].indexOf(this.container.styles.position)===-1,t=this.parent,i=this.effects.slice(0);t;){var r=t.effects.filter(function(o){return!Cf(o)});if(e||t.container.styles.position!==0||!t.parent){if(i.unshift.apply(i,r),e=[2,3].indexOf(t.container.styles.position)===-1,t.container.styles.overflowX!==0){var s=Os(t.curves),a=Gs(t.curves);Gu(s,a)||i.unshift(new ps(a,6))}}else i.unshift.apply(i,r);t=t.parent}return i.filter(function(o){return ge(o.target,A)})},n}(),Yo=function(n,A,e,t){n.container.elements.forEach(function(i){var r=ge(i.flags,4),s=ge(i.flags,2),a=new xf(i,n);ge(i.styles.display,2048)&&t.push(a);var o=ge(i.flags,8)?[]:t;if(r||s){var l=r||i.styles.isPositioned()?e:A,c=new Ef(a);if(i.styles.isPositioned()||i.styles.opacity<1||i.styles.isTransformed()){var u=i.styles.zIndex.order;if(u<0){var h=0;l.negativeZIndex.some(function(g,m){return u>g.element.container.styles.zIndex.order?(h=m,!1):h>0}),l.negativeZIndex.splice(h,0,c)}else if(u>0){var p=0;l.positiveZIndex.some(function(g,m){return u>=g.element.container.styles.zIndex.order?(p=m+1,!1):p>0}),l.positiveZIndex.splice(p,0,c)}else l.zeroOrAutoZIndexOrTransformedOrOpacity.push(c)}else i.styles.isFloating()?l.nonPositionedFloats.push(c):l.nonPositionedInlineLevel.push(c);Yo(a,c,r?c:e,o)}else i.styles.isInlineLevel()?A.inlineLevel.push(a):A.nonInlineLevel.push(a),Yo(a,A,e,o);ge(i.flags,8)&&Uf(i,o)})},Uf=function(n,A){for(var e=n instanceof Ko?n.start:1,t=n instanceof Ko?n.reversed:!1,i=0;i<A.length;i++){var r=A[i];r.container instanceof of&&typeof r.container.value=="number"&&r.container.value!==0&&(e=r.container.value),r.listValue=fr(e,r.container.styles.listStyleType,!0),e+=t?-1:1}},xE=function(n){var A=new xf(n,null),e=new Ef(A),t=[];return Yo(A,e,e,t),Uf(A.container,t),e},Vu=function(n,A){switch(A){case 0:return it(n.topLeftBorderBox,n.topLeftPaddingBox,n.topRightBorderBox,n.topRightPaddingBox);case 1:return it(n.topRightBorderBox,n.topRightPaddingBox,n.bottomRightBorderBox,n.bottomRightPaddingBox);case 2:return it(n.bottomRightBorderBox,n.bottomRightPaddingBox,n.bottomLeftBorderBox,n.bottomLeftPaddingBox);case 3:default:return it(n.bottomLeftBorderBox,n.bottomLeftPaddingBox,n.topLeftBorderBox,n.topLeftPaddingBox)}},UE=function(n,A){switch(A){case 0:return it(n.topLeftBorderBox,n.topLeftBorderDoubleOuterBox,n.topRightBorderBox,n.topRightBorderDoubleOuterBox);case 1:return it(n.topRightBorderBox,n.topRightBorderDoubleOuterBox,n.bottomRightBorderBox,n.bottomRightBorderDoubleOuterBox);case 2:return it(n.bottomRightBorderBox,n.bottomRightBorderDoubleOuterBox,n.bottomLeftBorderBox,n.bottomLeftBorderDoubleOuterBox);case 3:default:return it(n.bottomLeftBorderBox,n.bottomLeftBorderDoubleOuterBox,n.topLeftBorderBox,n.topLeftBorderDoubleOuterBox)}},yE=function(n,A){switch(A){case 0:return it(n.topLeftBorderDoubleInnerBox,n.topLeftPaddingBox,n.topRightBorderDoubleInnerBox,n.topRightPaddingBox);case 1:return it(n.topRightBorderDoubleInnerBox,n.topRightPaddingBox,n.bottomRightBorderDoubleInnerBox,n.bottomRightPaddingBox);case 2:return it(n.bottomRightBorderDoubleInnerBox,n.bottomRightPaddingBox,n.bottomLeftBorderDoubleInnerBox,n.bottomLeftPaddingBox);case 3:default:return it(n.bottomLeftBorderDoubleInnerBox,n.bottomLeftPaddingBox,n.topLeftBorderDoubleInnerBox,n.topLeftPaddingBox)}},SE=function(n,A){switch(A){case 0:return gs(n.topLeftBorderStroke,n.topRightBorderStroke);case 1:return gs(n.topRightBorderStroke,n.bottomRightBorderStroke);case 2:return gs(n.bottomRightBorderStroke,n.bottomLeftBorderStroke);case 3:default:return gs(n.bottomLeftBorderStroke,n.topLeftBorderStroke)}},gs=function(n,A){var e=[];return et(n)?e.push(n.subdivide(.5,!1)):e.push(n),et(A)?e.push(A.subdivide(.5,!0)):e.push(A),e},it=function(n,A,e,t){var i=[];return et(n)?i.push(n.subdivide(.5,!1)):i.push(n),et(e)?i.push(e.subdivide(.5,!0)):i.push(e),et(t)?i.push(t.subdivide(.5,!0).reverse()):i.push(t),et(A)?i.push(A.subdivide(.5,!1).reverse()):i.push(A),i},yf=function(n){var A=n.bounds,e=n.styles;return A.add(e.borderLeftWidth,e.borderTopWidth,-(e.borderRightWidth+e.borderLeftWidth),-(e.borderTopWidth+e.borderBottomWidth))},Vs=function(n){var A=n.styles,e=n.bounds,t=ee(A.paddingLeft,e.width),i=ee(A.paddingRight,e.width),r=ee(A.paddingTop,e.width),s=ee(A.paddingBottom,e.width);return e.add(t+A.borderLeftWidth,r+A.borderTopWidth,-(A.borderRightWidth+A.borderLeftWidth+t+i),-(A.borderTopWidth+A.borderBottomWidth+r+s))},FE=function(n,A){return n===0?A.bounds:n===2?Vs(A):yf(A)},ME=function(n,A){return n===0?A.bounds:n===2?Vs(A):yf(A)},oo=function(n,A,e){var t=FE(oi(n.styles.backgroundOrigin,A),n),i=ME(oi(n.styles.backgroundClip,A),n),r=bE(oi(n.styles.backgroundSize,A),e,t),s=r[0],a=r[1],o=Wi(oi(n.styles.backgroundPosition,A),t.width-s,t.height-a),l=TE(oi(n.styles.backgroundRepeat,A),o,r,t,i),c=Math.round(t.left+o[0]),u=Math.round(t.top+o[1]);return[l,c,u,s,a]},ii=function(n){return qA(n)&&n.value===di.AUTO},ms=function(n){return typeof n=="number"},bE=function(n,A,e){var t=A[0],i=A[1],r=A[2],s=n[0],a=n[1];if(!s)return[0,0];if(pe(s)&&a&&pe(a))return[ee(s,e.width),ee(a,e.height)];var o=ms(r);if(qA(s)&&(s.value===di.CONTAIN||s.value===di.COVER)){if(ms(r)){var l=e.width/e.height;return l<r!=(s.value===di.COVER)?[e.width,e.width/r]:[e.height*r,e.height]}return[e.width,e.height]}var c=ms(t),u=ms(i),h=c||u;if(ii(s)&&(!a||ii(a))){if(c&&u)return[t,i];if(!o&&!h)return[e.width,e.height];if(h&&o){var p=c?t:i*r,g=u?i:t/r;return[p,g]}var m=c?t:e.width,d=u?i:e.height;return[m,d]}if(o){var f=0,E=0;return pe(s)?f=ee(s,e.width):pe(a)&&(E=ee(a,e.height)),ii(s)?f=E*r:(!a||ii(a))&&(E=f/r),[f,E]}var v=null,C=null;if(pe(s)?v=ee(s,e.width):a&&pe(a)&&(C=ee(a,e.height)),v!==null&&(!a||ii(a))&&(C=c&&u?v/t*i:e.height),C!==null&&ii(s)&&(v=c&&u?C/i*t:e.width),v!==null&&C!==null)return[v,C];throw new Error("Unable to calculate background-size for element")},oi=function(n,A){var e=n[A];return typeof e>"u"?n[0]:e},TE=function(n,A,e,t,i){var r=A[0],s=A[1],a=e[0],o=e[1];switch(n){case 2:return[new uA(Math.round(t.left),Math.round(t.top+s)),new uA(Math.round(t.left+t.width),Math.round(t.top+s)),new uA(Math.round(t.left+t.width),Math.round(o+t.top+s)),new uA(Math.round(t.left),Math.round(o+t.top+s))];case 3:return[new uA(Math.round(t.left+r),Math.round(t.top)),new uA(Math.round(t.left+r+a),Math.round(t.top)),new uA(Math.round(t.left+r+a),Math.round(t.height+t.top)),new uA(Math.round(t.left+r),Math.round(t.height+t.top))];case 1:return[new uA(Math.round(t.left+r),Math.round(t.top+s)),new uA(Math.round(t.left+r+a),Math.round(t.top+s)),new uA(Math.round(t.left+r+a),Math.round(t.top+s+o)),new uA(Math.round(t.left+r),Math.round(t.top+s+o))];default:return[new uA(Math.round(i.left),Math.round(i.top)),new uA(Math.round(i.left+i.width),Math.round(i.top)),new uA(Math.round(i.left+i.width),Math.round(i.height+i.top)),new uA(Math.round(i.left),Math.round(i.height+i.top))]}},QE="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",Ku="Hidden Text",IE=function(){function n(A){this._data={},this._document=A}return n.prototype.parseMetrics=function(A,e){var t=this._document.createElement("div"),i=this._document.createElement("img"),r=this._document.createElement("span"),s=this._document.body;t.style.visibility="hidden",t.style.fontFamily=A,t.style.fontSize=e,t.style.margin="0",t.style.padding="0",t.style.whiteSpace="nowrap",s.appendChild(t),i.src=QE,i.width=1,i.height=1,i.style.margin="0",i.style.padding="0",i.style.verticalAlign="baseline",r.style.fontFamily=A,r.style.fontSize=e,r.style.margin="0",r.style.padding="0",r.appendChild(this._document.createTextNode(Ku)),t.appendChild(r),t.appendChild(i);var a=i.offsetTop-r.offsetTop+2;t.removeChild(r),t.appendChild(this._document.createTextNode(Ku)),t.style.lineHeight="normal",i.style.verticalAlign="super";var o=i.offsetTop-t.offsetTop+2;return s.removeChild(t),{baseline:a,middle:o}},n.prototype.getMetrics=function(A,e){var t=A+" "+e;return typeof this._data[t]>"u"&&(this._data[t]=this.parseMetrics(A,e)),this._data[t]},n}(),Sf=function(){function n(A,e){this.context=A,this.options=e}return n}(),LE=1e4,RE=function(n){dt(A,n);function A(e,t){var i=n.call(this,e,t)||this;return i._activeEffects=[],i.canvas=t.canvas?t.canvas:document.createElement("canvas"),i.ctx=i.canvas.getContext("2d"),t.canvas||(i.canvas.width=Math.floor(t.width*t.scale),i.canvas.height=Math.floor(t.height*t.scale),i.canvas.style.width=t.width+"px",i.canvas.style.height=t.height+"px"),i.fontMetrics=new IE(document),i.ctx.scale(i.options.scale,i.options.scale),i.ctx.translate(-t.x,-t.y),i.ctx.textBaseline="bottom",i._activeEffects=[],i.context.logger.debug("Canvas renderer initialized ("+t.width+"x"+t.height+") with scale "+t.scale),i}return A.prototype.applyEffects=function(e){for(var t=this;this._activeEffects.length;)this.popEffect();e.forEach(function(i){return t.applyEffect(i)})},A.prototype.applyEffect=function(e){this.ctx.save(),CE(e)&&(this.ctx.globalAlpha=e.opacity),_E(e)&&(this.ctx.translate(e.offsetX,e.offsetY),this.ctx.transform(e.matrix[0],e.matrix[1],e.matrix[2],e.matrix[3],e.matrix[4],e.matrix[5]),this.ctx.translate(-e.offsetX,-e.offsetY)),Cf(e)&&(this.path(e.path),this.ctx.clip()),this._activeEffects.push(e)},A.prototype.popEffect=function(){this._activeEffects.pop(),this.ctx.restore()},A.prototype.renderStack=function(e){return Ne(this,void 0,void 0,function(){var t;return Qe(this,function(i){switch(i.label){case 0:return t=e.element.container.styles,t.isVisible()?[4,this.renderStackContent(e)]:[3,2];case 1:i.sent(),i.label=2;case 2:return[2]}})})},A.prototype.renderNode=function(e){return Ne(this,void 0,void 0,function(){return Qe(this,function(t){switch(t.label){case 0:if(ge(e.container.flags,16))debugger;return e.container.styles.isVisible()?[4,this.renderNodeBackgroundAndBorders(e)]:[3,3];case 1:return t.sent(),[4,this.renderNodeContent(e)];case 2:t.sent(),t.label=3;case 3:return[2]}})})},A.prototype.renderTextWithLetterSpacing=function(e,t,i){var r=this;if(t===0)this.ctx.fillText(e.text,e.bounds.left,e.bounds.top+i);else{var s=ll(e.text);s.reduce(function(a,o){return r.ctx.fillText(o,a,e.bounds.top+i),a+r.ctx.measureText(o).width},e.bounds.left)}},A.prototype.createFontStyle=function(e){var t=e.fontVariant.filter(function(s){return s==="normal"||s==="small-caps"}).join(""),i=OE(e.fontFamily).join(", "),r=xr(e.fontSize)?""+e.fontSize.number+e.fontSize.unit:e.fontSize.number+"px";return[[e.fontStyle,t,e.fontWeight,r,i].join(" "),i,r]},A.prototype.renderTextNode=function(e,t){return Ne(this,void 0,void 0,function(){var i,r,s,a,o,l,c,u,h=this;return Qe(this,function(p){return i=this.createFontStyle(t),r=i[0],s=i[1],a=i[2],this.ctx.font=r,this.ctx.direction=t.direction===1?"rtl":"ltr",this.ctx.textAlign="left",this.ctx.textBaseline="alphabetic",o=this.fontMetrics.getMetrics(s,a),l=o.baseline,c=o.middle,u=t.paintOrder,e.textBounds.forEach(function(g){u.forEach(function(m){switch(m){case 0:h.ctx.fillStyle=Ce(t.color),h.renderTextWithLetterSpacing(g,t.letterSpacing,l);var d=t.textShadow;d.length&&g.text.trim().length&&(d.slice(0).reverse().forEach(function(f){h.ctx.shadowColor=Ce(f.color),h.ctx.shadowOffsetX=f.offsetX.number*h.options.scale,h.ctx.shadowOffsetY=f.offsetY.number*h.options.scale,h.ctx.shadowBlur=f.blur.number,h.renderTextWithLetterSpacing(g,t.letterSpacing,l)}),h.ctx.shadowColor="",h.ctx.shadowOffsetX=0,h.ctx.shadowOffsetY=0,h.ctx.shadowBlur=0),t.textDecorationLine.length&&(h.ctx.fillStyle=Ce(t.textDecorationColor||t.color),t.textDecorationLine.forEach(function(f){switch(f){case 1:h.ctx.fillRect(g.bounds.left,Math.round(g.bounds.top+l),g.bounds.width,1);break;case 2:h.ctx.fillRect(g.bounds.left,Math.round(g.bounds.top),g.bounds.width,1);break;case 3:h.ctx.fillRect(g.bounds.left,Math.ceil(g.bounds.top+c),g.bounds.width,1);break}}));break;case 1:t.webkitTextStrokeWidth&&g.text.trim().length&&(h.ctx.strokeStyle=Ce(t.webkitTextStrokeColor),h.ctx.lineWidth=t.webkitTextStrokeWidth,h.ctx.lineJoin=window.chrome?"miter":"round",h.ctx.strokeText(g.text,g.bounds.left,g.bounds.top+l)),h.ctx.strokeStyle="",h.ctx.lineWidth=0,h.ctx.lineJoin="miter";break}})}),[2]})})},A.prototype.renderReplacedElement=function(e,t,i){if(i&&e.intrinsicWidth>0&&e.intrinsicHeight>0){var r=Vs(e),s=Gs(t);this.path(s),this.ctx.save(),this.ctx.clip(),this.ctx.drawImage(i,0,0,e.intrinsicWidth,e.intrinsicHeight,r.left,r.top,r.width,r.height),this.ctx.restore()}},A.prototype.renderNodeContent=function(e){return Ne(this,void 0,void 0,function(){var t,i,r,s,a,o,E,E,l,c,u,h,C,p,g,x,m,d,f,E,v,C,x;return Qe(this,function(y){switch(y.label){case 0:this.applyEffects(e.getEffects(4)),t=e.container,i=e.curves,r=t.styles,s=0,a=t.textNodes,y.label=1;case 1:return s<a.length?(o=a[s],[4,this.renderTextNode(o,r)]):[3,4];case 2:y.sent(),y.label=3;case 3:return s++,[3,1];case 4:if(!(t instanceof rf))return[3,8];y.label=5;case 5:return y.trys.push([5,7,,8]),[4,this.context.cache.match(t.src)];case 6:return E=y.sent(),this.renderReplacedElement(t,i,E),[3,8];case 7:return y.sent(),this.context.logger.error("Error loading image "+t.src),[3,8];case 8:if(t instanceof sf&&this.renderReplacedElement(t,i,t.canvas),!(t instanceof af))return[3,12];y.label=9;case 9:return y.trys.push([9,11,,12]),[4,this.context.cache.match(t.svg)];case 10:return E=y.sent(),this.renderReplacedElement(t,i,E),[3,12];case 11:return y.sent(),this.context.logger.error("Error loading svg "+t.svg.substring(0,255)),[3,12];case 12:return t instanceof uf&&t.tree?(l=new A(this.context,{scale:this.options.scale,backgroundColor:t.backgroundColor,x:0,y:0,width:t.width,height:t.height}),[4,l.render(t.tree)]):[3,14];case 13:c=y.sent(),t.width&&t.height&&this.ctx.drawImage(c,0,0,t.width,t.height,t.bounds.left,t.bounds.top,t.bounds.width,t.bounds.height),y.label=14;case 14:if(t instanceof cl&&(u=Math.min(t.bounds.width,t.bounds.height),t.type===Hs?t.checked&&(this.ctx.save(),this.path([new uA(t.bounds.left+u*.39363,t.bounds.top+u*.79),new uA(t.bounds.left+u*.16,t.bounds.top+u*.5549),new uA(t.bounds.left+u*.27347,t.bounds.top+u*.44071),new uA(t.bounds.left+u*.39694,t.bounds.top+u*.5649),new uA(t.bounds.left+u*.72983,t.bounds.top+u*.23),new uA(t.bounds.left+u*.84,t.bounds.top+u*.34085),new uA(t.bounds.left+u*.39363,t.bounds.top+u*.79)]),this.ctx.fillStyle=Ce(bu),this.ctx.fill(),this.ctx.restore()):t.type===Ds&&t.checked&&(this.ctx.save(),this.ctx.beginPath(),this.ctx.arc(t.bounds.left+u/2,t.bounds.top+u/2,u/4,0,Math.PI*2,!0),this.ctx.fillStyle=Ce(bu),this.ctx.fill(),this.ctx.restore())),HE(t)&&t.value.length){switch(h=this.createFontStyle(r),C=h[0],p=h[1],g=this.fontMetrics.getMetrics(C,p).baseline,this.ctx.font=C,this.ctx.fillStyle=Ce(r.color),this.ctx.textBaseline="alphabetic",this.ctx.textAlign=PE(t.styles.textAlign),x=Vs(t),m=0,t.styles.textAlign){case 1:m+=x.width/2;break;case 2:m+=x.width;break}d=x.add(m,0,0,-x.height/2+1),this.ctx.save(),this.path([new uA(x.left,x.top),new uA(x.left+x.width,x.top),new uA(x.left+x.width,x.top+x.height),new uA(x.left,x.top+x.height)]),this.ctx.clip(),this.renderTextWithLetterSpacing(new tr(t.value,d),r.letterSpacing,g),this.ctx.restore(),this.ctx.textBaseline="alphabetic",this.ctx.textAlign="left"}if(!ge(t.styles.display,2048))return[3,20];if(t.styles.listStyleImage===null)return[3,19];if(f=t.styles.listStyleImage,f.type!==0)return[3,18];E=void 0,v=f.url,y.label=15;case 15:return y.trys.push([15,17,,18]),[4,this.context.cache.match(v)];case 16:return E=y.sent(),this.ctx.drawImage(E,t.bounds.left-(E.width+10),t.bounds.top),[3,18];case 17:return y.sent(),this.context.logger.error("Error loading list-style-image "+v),[3,18];case 18:return[3,20];case 19:e.listValue&&t.styles.listStyleType!==-1&&(C=this.createFontStyle(r)[0],this.ctx.font=C,this.ctx.fillStyle=Ce(r.color),this.ctx.textBaseline="middle",this.ctx.textAlign="right",x=new Dt(t.bounds.left,t.bounds.top+ee(t.styles.paddingTop,t.bounds.width),t.bounds.width,fu(r.lineHeight,r.fontSize.number)/2+1),this.renderTextWithLetterSpacing(new tr(e.listValue,x),r.letterSpacing,fu(r.lineHeight,r.fontSize.number)/2+2),this.ctx.textBaseline="bottom",this.ctx.textAlign="left"),y.label=20;case 20:return[2]}})})},A.prototype.renderStackContent=function(e){return Ne(this,void 0,void 0,function(){var t,i,f,r,s,f,a,o,f,l,c,f,u,h,f,p,g,f,m,d,f;return Qe(this,function(E){switch(E.label){case 0:if(ge(e.element.container.flags,16))debugger;return[4,this.renderNodeBackgroundAndBorders(e.element)];case 1:E.sent(),t=0,i=e.negativeZIndex,E.label=2;case 2:return t<i.length?(f=i[t],[4,this.renderStack(f)]):[3,5];case 3:E.sent(),E.label=4;case 4:return t++,[3,2];case 5:return[4,this.renderNodeContent(e.element)];case 6:E.sent(),r=0,s=e.nonInlineLevel,E.label=7;case 7:return r<s.length?(f=s[r],[4,this.renderNode(f)]):[3,10];case 8:E.sent(),E.label=9;case 9:return r++,[3,7];case 10:a=0,o=e.nonPositionedFloats,E.label=11;case 11:return a<o.length?(f=o[a],[4,this.renderStack(f)]):[3,14];case 12:E.sent(),E.label=13;case 13:return a++,[3,11];case 14:l=0,c=e.nonPositionedInlineLevel,E.label=15;case 15:return l<c.length?(f=c[l],[4,this.renderStack(f)]):[3,18];case 16:E.sent(),E.label=17;case 17:return l++,[3,15];case 18:u=0,h=e.inlineLevel,E.label=19;case 19:return u<h.length?(f=h[u],[4,this.renderNode(f)]):[3,22];case 20:E.sent(),E.label=21;case 21:return u++,[3,19];case 22:p=0,g=e.zeroOrAutoZIndexOrTransformedOrOpacity,E.label=23;case 23:return p<g.length?(f=g[p],[4,this.renderStack(f)]):[3,26];case 24:E.sent(),E.label=25;case 25:return p++,[3,23];case 26:m=0,d=e.positiveZIndex,E.label=27;case 27:return m<d.length?(f=d[m],[4,this.renderStack(f)]):[3,30];case 28:E.sent(),E.label=29;case 29:return m++,[3,27];case 30:return[2]}})})},A.prototype.mask=function(e){this.ctx.beginPath(),this.ctx.moveTo(0,0),this.ctx.lineTo(this.canvas.width,0),this.ctx.lineTo(this.canvas.width,this.canvas.height),this.ctx.lineTo(0,this.canvas.height),this.ctx.lineTo(0,0),this.formatPath(e.slice(0).reverse()),this.ctx.closePath()},A.prototype.path=function(e){this.ctx.beginPath(),this.formatPath(e),this.ctx.closePath()},A.prototype.formatPath=function(e){var t=this;e.forEach(function(i,r){var s=et(i)?i.start:i;r===0?t.ctx.moveTo(s.x,s.y):t.ctx.lineTo(s.x,s.y),et(i)&&t.ctx.bezierCurveTo(i.startControl.x,i.startControl.y,i.endControl.x,i.endControl.y,i.end.x,i.end.y)})},A.prototype.renderRepeat=function(e,t,i,r){this.path(e),this.ctx.fillStyle=t,this.ctx.translate(i,r),this.ctx.fill(),this.ctx.translate(-i,-r)},A.prototype.resizeImage=function(e,t,i){var r;if(e.width===t&&e.height===i)return e;var s=(r=this.canvas.ownerDocument)!==null&&r!==void 0?r:document,a=s.createElement("canvas");a.width=Math.max(1,t),a.height=Math.max(1,i);var o=a.getContext("2d");return o.drawImage(e,0,0,e.width,e.height,0,0,t,i),a},A.prototype.renderBackgroundImage=function(e){return Ne(this,void 0,void 0,function(){var t,i,r,s,a,o;return Qe(this,function(l){switch(l.label){case 0:t=e.styles.backgroundImage.length-1,i=function(c){var u,h,p,F,W,K,X,T,R,g,F,W,K,X,T,m,d,f,E,v,C,x,y,U,R,B,F,k,Y,X,T,O,W,K,j,Z,J,Q,N,sA,lA,cA;return Qe(this,function(_A){switch(_A.label){case 0:if(c.type!==0)return[3,5];u=void 0,h=c.url,_A.label=1;case 1:return _A.trys.push([1,3,,4]),[4,r.context.cache.match(h)];case 2:return u=_A.sent(),[3,4];case 3:return _A.sent(),r.context.logger.error("Error loading background-image "+h),[3,4];case 4:return u&&(p=oo(e,t,[u.width,u.height,u.width/u.height]),F=p[0],W=p[1],K=p[2],X=p[3],T=p[4],R=r.ctx.createPattern(r.resizeImage(u,X,T),"repeat"),r.renderRepeat(F,R,W,K)),[3,6];case 5:_v(c)?(g=oo(e,t,[null,null,null]),F=g[0],W=g[1],K=g[2],X=g[3],T=g[4],m=gv(c.angle,X,T),d=m[0],f=m[1],E=m[2],v=m[3],C=m[4],x=document.createElement("canvas"),x.width=X,x.height=T,y=x.getContext("2d"),U=y.createLinearGradient(f,v,E,C),uu(c.stops,d).forEach(function(TA){return U.addColorStop(TA.stop,Ce(TA.color))}),y.fillStyle=U,y.fillRect(0,0,X,T),X>0&&T>0&&(R=r.ctx.createPattern(x,"repeat"),r.renderRepeat(F,R,W,K))):Cv(c)&&(B=oo(e,t,[null,null,null]),F=B[0],k=B[1],Y=B[2],X=B[3],T=B[4],O=c.position.length===0?[sl]:c.position,W=ee(O[0],X),K=ee(O[O.length-1],T),j=mv(c,W,K,X,T),Z=j[0],J=j[1],Z>0&&J>0&&(Q=r.ctx.createRadialGradient(k+W,Y+K,0,k+W,Y+K,Z),uu(c.stops,Z*2).forEach(function(TA){return Q.addColorStop(TA.stop,Ce(TA.color))}),r.path(F),r.ctx.fillStyle=Q,Z!==J?(N=e.bounds.left+.5*e.bounds.width,sA=e.bounds.top+.5*e.bounds.height,lA=J/Z,cA=1/lA,r.ctx.save(),r.ctx.translate(N,sA),r.ctx.transform(1,0,0,lA,0,0),r.ctx.translate(-N,-sA),r.ctx.fillRect(k,cA*(Y-sA)+sA,X,T*cA),r.ctx.restore()):r.ctx.fill())),_A.label=6;case 6:return t--,[2]}})},r=this,s=0,a=e.styles.backgroundImage.slice(0).reverse(),l.label=1;case 1:return s<a.length?(o=a[s],[5,i(o)]):[3,4];case 2:l.sent(),l.label=3;case 3:return s++,[3,1];case 4:return[2]}})})},A.prototype.renderSolidBorder=function(e,t,i){return Ne(this,void 0,void 0,function(){return Qe(this,function(r){return this.path(Vu(i,t)),this.ctx.fillStyle=Ce(e),this.ctx.fill(),[2]})})},A.prototype.renderDoubleBorder=function(e,t,i,r){return Ne(this,void 0,void 0,function(){var s,a;return Qe(this,function(o){switch(o.label){case 0:return t<3?[4,this.renderSolidBorder(e,i,r)]:[3,2];case 1:return o.sent(),[2];case 2:return s=UE(r,i),this.path(s),this.ctx.fillStyle=Ce(e),this.ctx.fill(),a=yE(r,i),this.path(a),this.ctx.fill(),[2]}})})},A.prototype.renderNodeBackgroundAndBorders=function(e){return Ne(this,void 0,void 0,function(){var t,i,r,s,a,o,l,c,u=this;return Qe(this,function(h){switch(h.label){case 0:return this.applyEffects(e.getEffects(2)),t=e.container.styles,i=!sn(t.backgroundColor)||t.backgroundImage.length,r=[{style:t.borderTopStyle,color:t.borderTopColor,width:t.borderTopWidth},{style:t.borderRightStyle,color:t.borderRightColor,width:t.borderRightWidth},{style:t.borderBottomStyle,color:t.borderBottomColor,width:t.borderBottomWidth},{style:t.borderLeftStyle,color:t.borderLeftColor,width:t.borderLeftWidth}],s=DE(oi(t.backgroundClip,0),e.curves),i||t.boxShadow.length?(this.ctx.save(),this.path(s),this.ctx.clip(),sn(t.backgroundColor)||(this.ctx.fillStyle=Ce(t.backgroundColor),this.ctx.fill()),[4,this.renderBackgroundImage(e.container)]):[3,2];case 1:h.sent(),this.ctx.restore(),t.boxShadow.slice(0).reverse().forEach(function(p){u.ctx.save();var g=Os(e.curves),m=p.inset?0:LE,d=EE(g,-m+(p.inset?1:-1)*p.spread.number,(p.inset?1:-1)*p.spread.number,p.spread.number*(p.inset?-2:2),p.spread.number*(p.inset?-2:2));p.inset?(u.path(g),u.ctx.clip(),u.mask(d)):(u.mask(g),u.ctx.clip(),u.path(d)),u.ctx.shadowOffsetX=p.offsetX.number+m,u.ctx.shadowOffsetY=p.offsetY.number,u.ctx.shadowColor=Ce(p.color),u.ctx.shadowBlur=p.blur.number,u.ctx.fillStyle=p.inset?Ce(p.color):"rgba(0,0,0,1)",u.ctx.fill(),u.ctx.restore()}),h.label=2;case 2:a=0,o=0,l=r,h.label=3;case 3:return o<l.length?(c=l[o],c.style!==0&&!sn(c.color)&&c.width>0?c.style!==2?[3,5]:[4,this.renderDashedDottedBorder(c.color,c.width,a,e.curves,2)]:[3,11]):[3,13];case 4:return h.sent(),[3,11];case 5:return c.style!==3?[3,7]:[4,this.renderDashedDottedBorder(c.color,c.width,a,e.curves,3)];case 6:return h.sent(),[3,11];case 7:return c.style!==4?[3,9]:[4,this.renderDoubleBorder(c.color,c.width,a,e.curves)];case 8:return h.sent(),[3,11];case 9:return[4,this.renderSolidBorder(c.color,a,e.curves)];case 10:h.sent(),h.label=11;case 11:a++,h.label=12;case 12:return o++,[3,3];case 13:return[2]}})})},A.prototype.renderDashedDottedBorder=function(e,t,i,r,s){return Ne(this,void 0,void 0,function(){var a,o,l,c,u,h,p,g,m,d,f,E,v,C,x,y,x,y;return Qe(this,function(U){return this.ctx.save(),a=SE(r,i),o=Vu(r,i),s===2&&(this.path(o),this.ctx.clip()),et(o[0])?(l=o[0].start.x,c=o[0].start.y):(l=o[0].x,c=o[0].y),et(o[1])?(u=o[1].end.x,h=o[1].end.y):(u=o[1].x,h=o[1].y),i===0||i===2?p=Math.abs(l-u):p=Math.abs(c-h),this.ctx.beginPath(),s===3?this.formatPath(a):this.formatPath(o.slice(0,2)),g=t<3?t*3:t*2,m=t<3?t*2:t,s===3&&(g=t,m=t),d=!0,p<=g*2?d=!1:p<=g*2+m?(f=p/(2*g+m),g*=f,m*=f):(E=Math.floor((p+m)/(g+m)),v=(p-E*g)/(E-1),C=(p-(E+1)*g)/E,m=C<=0||Math.abs(m-v)<Math.abs(m-C)?v:C),d&&(s===3?this.ctx.setLineDash([0,g+m]):this.ctx.setLineDash([g,m])),s===3?(this.ctx.lineCap="round",this.ctx.lineWidth=t):this.ctx.lineWidth=t*2+1.1,this.ctx.strokeStyle=Ce(e),this.ctx.stroke(),this.ctx.setLineDash([]),s===2&&(et(o[0])&&(x=o[3],y=o[0],this.ctx.beginPath(),this.formatPath([new uA(x.end.x,x.end.y),new uA(y.start.x,y.start.y)]),this.ctx.stroke()),et(o[1])&&(x=o[1],y=o[2],this.ctx.beginPath(),this.formatPath([new uA(x.end.x,x.end.y),new uA(y.start.x,y.start.y)]),this.ctx.stroke())),this.ctx.restore(),[2]})})},A.prototype.render=function(e){return Ne(this,void 0,void 0,function(){var t;return Qe(this,function(i){switch(i.label){case 0:return this.options.backgroundColor&&(this.ctx.fillStyle=Ce(this.options.backgroundColor),this.ctx.fillRect(this.options.x,this.options.y,this.options.width,this.options.height)),t=xE(e),[4,this.renderStack(t)];case 1:return i.sent(),this.applyEffects([]),[2,this.canvas]}})})},A}(Sf),HE=function(n){return n instanceof cf||n instanceof lf?!0:n instanceof cl&&n.type!==Ds&&n.type!==Hs},DE=function(n,A){switch(n){case 0:return Os(A);case 2:return BE(A);case 1:default:return Gs(A)}},PE=function(n){switch(n){case 1:return"center";case 2:return"right";case 0:default:return"left"}},NE=["-apple-system","system-ui"],OE=function(n){return/iPhone OS 15_(0|1)/.test(window.navigator.userAgent)?n.filter(function(A){return NE.indexOf(A)===-1}):n},GE=function(n){dt(A,n);function A(e,t){var i=n.call(this,e,t)||this;return i.canvas=t.canvas?t.canvas:document.createElement("canvas"),i.ctx=i.canvas.getContext("2d"),i.options=t,i.canvas.width=Math.floor(t.width*t.scale),i.canvas.height=Math.floor(t.height*t.scale),i.canvas.style.width=t.width+"px",i.canvas.style.height=t.height+"px",i.ctx.scale(i.options.scale,i.options.scale),i.ctx.translate(-t.x,-t.y),i.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized ("+t.width+"x"+t.height+" at "+t.x+","+t.y+") with scale "+t.scale),i}return A.prototype.render=function(e){return Ne(this,void 0,void 0,function(){var t,i;return Qe(this,function(r){switch(r.label){case 0:return t=Vo(this.options.width*this.options.scale,this.options.height*this.options.scale,this.options.scale,this.options.scale,e),[4,VE(t)];case 1:return i=r.sent(),this.options.backgroundColor&&(this.ctx.fillStyle=Ce(this.options.backgroundColor),this.ctx.fillRect(0,0,this.options.width*this.options.scale,this.options.height*this.options.scale)),this.ctx.drawImage(i,-this.options.x*this.options.scale,-this.options.y*this.options.scale),[2,this.canvas]}})})},A}(Sf),VE=function(n){return new Promise(function(A,e){var t=new Image;t.onload=function(){A(t)},t.onerror=e,t.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(n))})},KE=function(){function n(A){var e=A.id,t=A.enabled;this.id=e,this.enabled=t,this.start=Date.now()}return n.prototype.debug=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];this.enabled&&(typeof window<"u"&&window.console&&typeof console.debug=="function"?console.debug.apply(console,Jr([this.id,this.getTime()+"ms"],A)):this.info.apply(this,A))},n.prototype.getTime=function(){return Date.now()-this.start},n.prototype.info=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];this.enabled&&typeof window<"u"&&window.console&&typeof console.info=="function"&&console.info.apply(console,Jr([this.id,this.getTime()+"ms"],A))},n.prototype.warn=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];this.enabled&&(typeof window<"u"&&window.console&&typeof console.warn=="function"?console.warn.apply(console,Jr([this.id,this.getTime()+"ms"],A)):this.info.apply(this,A))},n.prototype.error=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];this.enabled&&(typeof window<"u"&&window.console&&typeof console.error=="function"?console.error.apply(console,Jr([this.id,this.getTime()+"ms"],A)):this.info.apply(this,A))},n.instances={},n}(),kE=function(){function n(A,e){var t;this.windowBounds=e,this.instanceName="#"+n.instanceCount++,this.logger=new KE({id:this.instanceName,enabled:A.logging}),this.cache=(t=A.cache)!==null&&t!==void 0?t:new cE(this,A)}return n.instanceCount=1,n}(),Ff=function(n,A){return A===void 0&&(A={}),zE(n,A)};typeof window<"u"&&_f.setContext(window);var zE=function(n,A){return Ne(void 0,void 0,void 0,function(){var e,t,i,r,s,a,o,l,c,u,h,p,g,m,d,f,E,v,C,x,U,y,U,R,B,F,k,Y,X,T,O,W,K,j,Z,J,Q,N,sA,lA;return Qe(this,function(cA){switch(cA.label){case 0:if(!n||typeof n!="object")return[2,Promise.reject("Invalid element provided as first argument")];if(e=n.ownerDocument,!e)throw new Error("Element is not attached to a Document");if(t=e.defaultView,!t)throw new Error("Document is not attached to a Window");return i={allowTaint:(R=A.allowTaint)!==null&&R!==void 0?R:!1,imageTimeout:(B=A.imageTimeout)!==null&&B!==void 0?B:15e3,proxy:A.proxy,useCORS:(F=A.useCORS)!==null&&F!==void 0?F:!1},r=So({logging:(k=A.logging)!==null&&k!==void 0?k:!0,cache:A.cache},i),s={windowWidth:(Y=A.windowWidth)!==null&&Y!==void 0?Y:t.innerWidth,windowHeight:(X=A.windowHeight)!==null&&X!==void 0?X:t.innerHeight,scrollX:(T=A.scrollX)!==null&&T!==void 0?T:t.pageXOffset,scrollY:(O=A.scrollY)!==null&&O!==void 0?O:t.pageYOffset},a=new Dt(s.scrollX,s.scrollY,s.windowWidth,s.windowHeight),o=new kE(r,a),l=(W=A.foreignObjectRendering)!==null&&W!==void 0?W:!1,c={allowTaint:(K=A.allowTaint)!==null&&K!==void 0?K:!1,onclone:A.onclone,ignoreElements:A.ignoreElements,inlineImages:l,copyStyles:l},o.logger.debug("Starting document clone with size "+a.width+"x"+a.height+" scrolled to "+-a.left+","+-a.top),u=new Nu(o,n,c),h=u.clonedReferenceElement,h?[4,u.toIFrame(e,a)]:[2,Promise.reject("Unable to find element in cloned iframe")];case 1:return p=cA.sent(),g=ul(h)||XC(h)?E1(h.ownerDocument):Zs(o,h),m=g.width,d=g.height,f=g.left,E=g.top,v=WE(o,h,A.backgroundColor),C={canvas:A.canvas,backgroundColor:v,scale:(Z=(j=A.scale)!==null&&j!==void 0?j:t.devicePixelRatio)!==null&&Z!==void 0?Z:1,x:((J=A.x)!==null&&J!==void 0?J:0)+f,y:((Q=A.y)!==null&&Q!==void 0?Q:0)+E,width:(N=A.width)!==null&&N!==void 0?N:Math.ceil(m),height:(sA=A.height)!==null&&sA!==void 0?sA:Math.ceil(d)},l?(o.logger.debug("Document cloned, using foreign object rendering"),U=new GE(o,C),[4,U.render(h)]):[3,3];case 2:return x=cA.sent(),[3,5];case 3:return o.logger.debug("Document cloned, element located at "+f+","+E+" with size "+m+"x"+d+" using computed rendering"),o.logger.debug("Starting DOM parsing"),y=ff(o,h),v===y.styles.backgroundColor&&(y.styles.backgroundColor=Rt.TRANSPARENT),o.logger.debug("Starting renderer for element at "+C.x+","+C.y+" with size "+C.width+"x"+C.height),U=new RE(o,C),[4,U.render(y)];case 4:x=cA.sent(),cA.label=5;case 5:return(!((lA=A.removeContainer)!==null&&lA!==void 0)||lA)&&(Nu.destroy(p)||o.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")),o.logger.debug("Finished rendering"),[2,x]}})})},WE=function(n,A,e){var t=A.ownerDocument,i=t.documentElement?Ar(n,getComputedStyle(t.documentElement).backgroundColor):Rt.TRANSPARENT,r=t.body?Ar(n,getComputedStyle(t.body).backgroundColor):Rt.TRANSPARENT,s=typeof e=="string"?Ar(n,e):e===null?Rt.TRANSPARENT:4294967295;return A===t.documentElement?sn(i)?sn(r)?s:r:i:s},ir=(n=>(n.GLOBAL="Global",n.NORTHERN_HEMISSPHERE="Northern HS",n.SOUTHERN_HEMISSPHERE="Southern HS",n))(ir||{}),XA=(n=>(n.SETTINGS_CHANGED="settings-changed",n.CHANGE_THEME="change-theme",n.THEME_CHANGED="theme-changed",n.SHOW_IMPRINT="show-imprint",n.HIDE_IMPRINT="hide-imprint",n.CREATE_HELIX="create-helix",n))(XA||{});(n=>{function A(e){const t=new Event(e.toString(),{bubbles:!0});document.body.dispatchEvent(t)}n.dispatchEvent=A})(XA||(XA={}));class hl{constructor(A,e){let t=!1;new MutationObserver(r=>{t&&r.forEach((s,a)=>e(s,a))}).observe(A,{attributes:!0,attributeFilter:["class"]}),t=!0}}const XE=async()=>await C1(()=>import("./imprint-gen-3e61d80c.js"),[]),YE='<hr><p style="opacity: 1.0;">Dieses Impressum wurde erstellt durch <a href="https://www.impressum-generator.de" rel="nofollow">impressum-generator.de</a>.</p>',JE=`<hr><div class="center" width=100%>
<button id="hide-imprint" onclick="document.body.dispatchEvent(new Event('${XA.HIDE_IMPRINT.toString()}', { bubbles: true }))">Close</button></div>`;class ZE{constructor(){window.addEventListener("resize",()=>this.redraw()),new hl(document.body,()=>this.redraw()),document.body.addEventListener(XA.SHOW_IMPRINT.toString(),A=>this.show()),document.body.addEventListener(XA.HIDE_IMPRINT.toString(),A=>this.hide()),document.body.addEventListener("keydown",A=>{(A.key==="Esc"||A.key==="Escape")&&this.hide()})}redraw(){this.div!==void 0&&(this.hide(),this.show())}async isAvailable(){const A=await XE();return this.decryptedAES=A.decryptedAES,this.decryptedAES()!==void 0}show(){if(this.div===void 0){this.div=document.createElement("div");const A=this.div;A.classList.add("imprint"),A.innerHTML=this.decryptedAES(),document.body.appendChild(A);const e=window.getComputedStyle(document.body),t=A.scrollWidth,i=A.scrollHeight,r=e.getPropertyValue("background-color");Ff(A,{backgroundColor:r,windowWidth:t,windowHeight:i}).then(s=>{s.classList.add("padding"),A.innerHTML="",A.appendChild(s);const a=document.createElement("p");a.classList.add("padding"),a.innerHTML=YE+JE,A.appendChild(a)})}}hide(){this.div!==void 0&&(document.body.removeChild(this.div),this.div=void 0)}}const ku="toggle",qE="div",lo="clicked",$E="-div",co="-icon",zu="show";var pi,gi,pr;class fl{constructor(A){re(this,pi,void 0);re(this,gi,[]);re(this,pr,void 0);$A(this,pr,A.event),$A(this,gi,A.icons);const e=document.createElement(qE);e.classList.add(`${ku}${$E}`,A.classToken);for(const i of A.icons){const r=this.createSVGElement(i,A.classToken);e.innerHTML+=r}(A.container||document.body).appendChild(e),e.addEventListener("click",()=>e.classList.add(lo)),e.addEventListener("animationend",()=>{if(e.classList.contains(lo)){e.classList.remove(lo);const i=new Event(A.event,{bubbles:!0});e.dispatchEvent(i)}}),$A(this,pi,e)}show(A){var e;(e=this.icon(A))==null||e.classList.add(zu)}toggle(){var A;for(let e=0;e<mA(this,gi).length;e++)(A=this.icon(e))==null||A.classList.toggle(zu)}icon(A){return mA(this,pi).querySelector(`#${mA(this,gi)[A].id}${co}`)}createSVGElement(A,e){const t=document.createElement("template");t.innerHTML=A.svg;const i=t.content.firstElementChild;return i.id=`${A.id}${co}`,i.classList.add(`${ku}${co}`,e),i.outerHTML}addOnClickListener(A){mA(this,pi).addEventListener(mA(this,pr),A)}}pi=new WeakMap,gi=new WeakMap,pr=new WeakMap;const jE=`<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512">
    <path d="M12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z"/>
    <path d="M21.294,13.9l-.444-.256a9.1,9.1,0,0,0,0-3.29l.444-.256a3,3,0,1,0-3-5.2l-.445.257A8.977,8.977,0,0,0,15,3.513V3A3,3,0,0,0,9,3v.513A8.977,8.977,0,0,0,6.152,5.159L5.705,4.9a3,3,0,0,0-3,5.2l.444.256a9.1,9.1,0,0,0,0,3.29l-.444.256a3,3,0,1,0,3,5.2l.445-.257A8.977,8.977,0,0,0,9,20.487V21a3,3,0,0,0,6,0v-.513a8.977,8.977,0,0,0,2.848-1.646l.447.258a3,3,0,0,0,3-5.2Zm-2.548-3.776a7.048,7.048,0,0,1,0,3.75,1,1,0,0,0,.464,1.133l1.084.626a1,1,0,0,1-1,1.733l-1.086-.628a1,1,0,0,0-1.215.165,6.984,6.984,0,0,1-3.243,1.875,1,1,0,0,0-.751.969V21a1,1,0,0,1-2,0V19.748a1,1,0,0,0-.751-.969A6.984,6.984,0,0,1,7.006,16.9a1,1,0,0,0-1.215-.165l-1.084.627a1,1,0,1,1-1-1.732l1.084-.626a1,1,0,0,0,.464-1.133,7.048,7.048,0,0,1,0-3.75A1,1,0,0,0,4.79,8.992L3.706,8.366a1,1,0,0,1,1-1.733l1.086.628A1,1,0,0,0,7.006,7.1a6.984,6.984,0,0,1,3.243-1.875A1,1,0,0,0,11,4.252V3a1,1,0,0,1,2,0V4.252a1,1,0,0,0,.751.969A6.984,6.984,0,0,1,16.994,7.1a1,1,0,0,0,1.215.165l1.084-.627a1,1,0,1,1,1,1.732l-1.084.626A1,1,0,0,0,18.746,10.125Z"/>
</svg>
`,A2={id:"open",svg:jE},e2=`<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512">
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
</svg>`,t2={id:"close",svg:e2};var Yt,En,Jt;class n2{constructor(A){re(this,Yt,void 0);re(this,En,void 0);re(this,Jt,void 0);$A(this,Yt,!0),$A(this,En,new fl({container:document.querySelector(".container-div"),icons:[A2,t2],classToken:"settings",event:XA.SETTINGS_CHANGED})),$A(this,Jt,A),mA(this,Jt).hide(),mA(this,En).show(mA(this,Yt)?0:1),mA(this,En).addOnClickListener(()=>this.guiShowHide())}guiShowHide(){mA(this,Yt)?(this.toggle(),mA(this,Jt).show(),mA(this,Jt).open()):mA(this,Jt).$title.click()}toggle(){$A(this,Yt,!mA(this,Yt)),mA(this,En).toggle()}}Yt=new WeakMap,En=new WeakMap,Jt=new WeakMap;const i2=`Land-Ocean: Global Means
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
`,r2=`Land-Ocean: Northern Hemispheric Means
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
`,s2=`Land-Ocean: Southern Hemispheric Means
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
`,ri={},Ae={showcaseCSV:void 0,radio:ir.GLOBAL,view:{geometry:{meshVisible:!1,facesVisible:!0,radialSegments:8,radius:1,radiusFactor:.9,tubularSegments:30},colors:{cold:uo("cold"),zero:uo("zero"),warm:uo("warm")}},capture:{},imprint:()=>XA.dispatchEvent(XA.SHOW_IMPRINT)};function uo(n){return{color:Ji(n),modified:!1}}function Ji(n){return Mf(`--${n}-color`)}function Mf(n){const e=window.getComputedStyle(document.body).getPropertyValue(n);return new YA(e)}var gr,xn,mi,Pe;const Ks=class Ks{constructor(){re(this,gr,void 0);re(this,xn,void 0);re(this,mi,void 0);re(this,Pe,void 0);$A(this,Pe,new il({container:document.querySelector(".container-div"),autoPlace:!1})),mA(this,Pe).domElement.id="gui",this.createShowcaseFolder(),this.createViewFolder(),this.createCaptureFolder(),this.createImprint(),this.createShowHideListener(),this.createSettingsIcon()}static styledColor(A){return Mf(A)}static addRadioButtonsFolder(A,e,t,i,r=(s,a,o)=>{}){const s=A.addFolder(e);return Ks.addRadioButtons(s,t,i,r),s}static addRadioButtons(A,e,t,i=(r,s,a)=>{}){const r={};Object.entries(t).forEach(s=>{const[a,o]=s,l=`option_${a}`;r[l]=e===a}),Object.keys(t).forEach(s=>{const a=`option_${s}`;A.add(r,a).name(s).listen().onChange(()=>{for(let o in r)r[o]=a===o;i(r,a,s)})})}createSettingsIcon(){const A=new n2(mA(this,Pe));new hl(mA(this,Pe).domElement,(e,t)=>{const i=e.target;t===0&&!(i!=null&&i.classList.contains("transition"))&&(i!=null&&i.classList.contains("closed"))&&(mA(this,Pe).hide(),mA(this,Pe).close(),A.toggle())})}createShowHideListener(){window.addEventListener("keydown",A=>{(A.key==="h"||A.key==="H")&&(mA(this,mi)?mA(this,Pe).show():mA(this,Pe).hide(),$A(this,mi,!mA(this,mi)))})}createShowcaseFolder(){ri[ir.GLOBAL]=i2,ri[ir.NORTHERN_HEMISSPHERE]=r2,ri[ir.SOUTHERN_HEMISSPHERE]=s2,$A(this,xn,Ks.addRadioButtonsFolder(mA(this,Pe),`Region: ${Ae.radio}`,Ae.radio,ri,(A,e,t)=>{Ae.showcaseCSV=ri[t],XA.dispatchEvent(XA.CREATE_HELIX),mA(this,xn).title(`Region: ${t}`),mA(this,xn).close()})),Ae.showcaseCSV=ri[Ae.radio],mA(this,xn).close()}createViewFolder(){const A=mA(this,Pe).addFolder("View");this.createViewGeometryFolder(A),this.createViewColorsFolder(A),A.close()}createViewGeometryFolder(A){const e=A.addFolder("Geometry"),t=Ae.view.geometry;e.add(t,"meshVisible").name("Wireframe").onChange(()=>XA.dispatchEvent(XA.CREATE_HELIX)),e.add(t,"facesVisible").name("Faces").onChange(()=>XA.dispatchEvent(XA.CREATE_HELIX)),e.add(t,"tubularSegments").min(1).max(31).step(1).name("Monthly Segments").onChange(()=>XA.dispatchEvent(XA.CREATE_HELIX)),e.add(t,"radialSegments").min(3).max(32).step(1).name("Radius Segments").onChange(()=>XA.dispatchEvent(XA.CREATE_HELIX)),e.add(t,"radiusFactor").min(.1).max(2).name("Radius Factor").onChange(()=>XA.dispatchEvent(XA.CREATE_HELIX)),e.close()}createViewColorsFolder(A){const e=A.addFolder("Colors"),t=Ae.view.colors;e.addColor(t.cold,"color").name("-1.0°C").listen().onChange(()=>this.dispatchColorEvent("cold")),e.addColor(t.zero,"color").name("0°C").listen().onChange(()=>this.dispatchColorEvent("zero")),e.addColor(t.warm,"color").name("+1.5°C").listen().onChange(()=>this.dispatchColorEvent("warm")),e.close()}initializeColors(){Ae.view.colors.cold.modified||(Ae.view.colors.cold.color=Ji("cold")),Ae.view.colors.zero.modified||(Ae.view.colors.zero.color=Ji("zero")),Ae.view.colors.warm.modified||(Ae.view.colors.warm.color=Ji("warm"))}dispatchColorEvent(A){Ae.view.colors[A].modified=!Ae.view.colors[A].color.equals(Ji(A)),XA.dispatchEvent(XA.CREATE_HELIX)}createCaptureFolder(){const A=mA(this,Pe).addFolder("Screen capture");A.close(),$A(this,gr,A)}createImprint(){new ZE().isAvailable().then(t=>{t&&mA(this,Pe).add(Ae,"imprint").name("Imprint")})}get showcaseCSV(){return Ae.showcaseCSV}get radialSegments(){return Math.floor(Ae.view.geometry.radialSegments)}get radiusFactor(){return Ae.view.geometry.radiusFactor}get tubularSegments(){return Math.floor(Ae.view.geometry.tubularSegments)}get showFaces(){return Ae.view.geometry.facesVisible}get showWireframe(){return Ae.view.geometry.meshVisible}get cold(){return Ae.view.colors.cold.color}get zero(){return Ae.view.colors.zero.color}get warm(){return Ae.view.colors.warm.color}captureSettings(){return{folder:mA(this,gr),property:Ae.capture}}};gr=new WeakMap,xn=new WeakMap,mi=new WeakMap,Pe=new WeakMap;let dr=Ks;const a2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512">
    <path d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5 S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1 s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0 c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95 c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41 L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41 s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06 c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"/>
</svg>`,o2={id:"light",svg:a2},l2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512">
    <path d="M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"/>
</svg>`,c2={id:"dark",svg:l2},ho="dark",fo="light";var mt,Bi;class u2{constructor(A){re(this,mt,void 0);re(this,Bi,void 0);$A(this,Bi,new fl({container:(A==null?void 0:A.container)||document.body,icons:[o2,c2],classToken:"themes",event:XA.CHANGE_THEME.toString()})),this.initTheme(),this.registerOnThemeChange(document.body)}initTheme(){$A(this,mt,this.preferredTheme()),document.body.classList.add(mA(this,mt)?ho:fo),mA(this,Bi).show(mA(this,mt)?0:1),XA.dispatchEvent(XA.THEME_CHANGED)}preferredTheme(){return window.matchMedia("(prefers-color-scheme: dark)").matches}registerOnThemeChange(A){A.addEventListener(XA.CHANGE_THEME.toString(),()=>{this.onThemeChange(A)})}onThemeChange(A){const e=mA(this,mt)?ho:fo,t=mA(this,mt)?fo:ho;A.classList.replace(e,t)||A.classList.add(t),$A(this,mt,!mA(this,mt)),mA(this,Bi).toggle(),XA.dispatchEvent(XA.THEME_CHANGED)}}mt=new WeakMap,Bi=new WeakMap;const h2=`<?xml version="1.0" ?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="512" height="512">
    <path d="M22 34h4v-12h-4v12zm2-30c-11.05 0-20 8.95-20 20s8.95 20 20 20 20-8.95 20-20-8.95-20-20-20zm0 36c-8.82 0-16-7.18-16-16s7.18-16 16-16 16 7.18 16 16-7.18 16-16 16zm-2-22h4v-4h-4v4z"/>
</svg>`,f2={id:"info",svg:h2},d2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512">
    <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"/>
</svg>`,p2={id:"close",svg:d2};var wi;class g2{constructor(A){re(this,wi,void 0);$A(this,wi,new fl({container:A,icons:[f2,p2],classToken:"info-button",event:"info-clicked"})),A.addEventListener("click",()=>{const e=document.querySelector("#info-div");e==null||e.classList.toggle("show");const t=document.querySelector("canvas");t==null||t.classList.toggle("transparent"),mA(this,wi).toggle()}),mA(this,wi).show(0)}}wi=new WeakMap;const Wu={type:"change"},po={type:"start"},Xu={type:"end"},Bs=new lh,Yu=new zt,m2=Math.cos(70*np.DEG2RAD);class B2 extends Ln{constructor(A,e){super(),this.object=A,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Rn.ROTATE,MIDDLE:Rn.DOLLY,RIGHT:Rn.PAN},this.touches={ONE:Hn.ROTATE,TWO:Hn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(M){M.addEventListener("keydown",w),this._domElementKeyEvents=M},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",w),this._domElementKeyEvents=null},this.saveState=function(){t.target0.copy(t.target),t.position0.copy(t.object.position),t.zoom0=t.object.zoom},this.reset=function(){t.target.copy(t.target0),t.object.position.copy(t.position0),t.object.zoom=t.zoom0,t.object.updateProjectionMatrix(),t.dispatchEvent(Wu),t.update(),r=i.NONE},this.update=function(){const M=new I,iA=new Qn().setFromUnitVectors(A.up,new I(0,1,0)),q=iA.clone().invert(),UA=new I,wA=new Qn,xA=new I,gA=2*Math.PI;return function(VA=null){const b=t.object.position;M.copy(b).sub(t.target),M.applyQuaternion(iA),a.setFromVector3(M),t.autoRotate&&r===i.NONE&&k(B(VA)),t.enableDamping?(a.theta+=o.theta*t.dampingFactor,a.phi+=o.phi*t.dampingFactor):(a.theta+=o.theta,a.phi+=o.phi);let aA=t.minAzimuthAngle,AA=t.maxAzimuthAngle;isFinite(aA)&&isFinite(AA)&&(aA<-Math.PI?aA+=gA:aA>Math.PI&&(aA-=gA),AA<-Math.PI?AA+=gA:AA>Math.PI&&(AA-=gA),aA<=AA?a.theta=Math.max(aA,Math.min(AA,a.theta)):a.theta=a.theta>(aA+AA)/2?Math.max(aA,a.theta):Math.min(AA,a.theta)),a.phi=Math.max(t.minPolarAngle,Math.min(t.maxPolarAngle,a.phi)),a.makeSafe(),t.enableDamping===!0?t.target.addScaledVector(c,t.dampingFactor):t.target.add(c),t.target.sub(t.cursor),t.target.clampLength(t.minTargetRadius,t.maxTargetRadius),t.target.add(t.cursor),t.zoomToCursor&&y||t.object.isOrthographicCamera?a.radius=Z(a.radius):a.radius=Z(a.radius*l),M.setFromSpherical(a),M.applyQuaternion(q),b.copy(t.target).add(M),t.object.lookAt(t.target),t.enableDamping===!0?(o.theta*=1-t.dampingFactor,o.phi*=1-t.dampingFactor,c.multiplyScalar(1-t.dampingFactor)):(o.set(0,0,0),c.set(0,0,0));let z=!1;if(t.zoomToCursor&&y){let nA=null;if(t.object.isPerspectiveCamera){const CA=M.length();nA=Z(CA*l);const KA=CA-nA;t.object.position.addScaledVector(C,KA),t.object.updateMatrixWorld()}else if(t.object.isOrthographicCamera){const CA=new I(x.x,x.y,0);CA.unproject(t.object),t.object.zoom=Math.max(t.minZoom,Math.min(t.maxZoom,t.object.zoom/l)),t.object.updateProjectionMatrix(),z=!0;const KA=new I(x.x,x.y,0);KA.unproject(t.object),t.object.position.sub(KA).add(CA),t.object.updateMatrixWorld(),nA=M.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),t.zoomToCursor=!1;nA!==null&&(this.screenSpacePanning?t.target.set(0,0,-1).transformDirection(t.object.matrix).multiplyScalar(nA).add(t.object.position):(Bs.origin.copy(t.object.position),Bs.direction.set(0,0,-1).transformDirection(t.object.matrix),Math.abs(t.object.up.dot(Bs.direction))<m2?A.lookAt(t.target):(Yu.setFromNormalAndCoplanarPoint(t.object.up,t.target),Bs.intersectPlane(Yu,t.target))))}else t.object.isOrthographicCamera&&(t.object.zoom=Math.max(t.minZoom,Math.min(t.maxZoom,t.object.zoom/l)),t.object.updateProjectionMatrix(),z=!0);return l=1,y=!1,z||UA.distanceToSquared(t.object.position)>s||8*(1-wA.dot(t.object.quaternion))>s||xA.distanceToSquared(t.target)>0?(t.dispatchEvent(Wu),UA.copy(t.object.position),wA.copy(t.object.quaternion),xA.copy(t.target),z=!1,!0):!1}}(),this.dispose=function(){t.domElement.removeEventListener("contextmenu",$),t.domElement.removeEventListener("pointerdown",RA),t.domElement.removeEventListener("pointercancel",WA),t.domElement.removeEventListener("wheel",S),t.domElement.removeEventListener("pointermove",IA),t.domElement.removeEventListener("pointerup",WA),t._domElementKeyEvents!==null&&(t._domElementKeyEvents.removeEventListener("keydown",w),t._domElementKeyEvents=null)};const t=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const s=1e-6,a=new Vc,o=new Vc;let l=1;const c=new I,u=new NA,h=new NA,p=new NA,g=new NA,m=new NA,d=new NA,f=new NA,E=new NA,v=new NA,C=new I,x=new NA;let y=!1;const U=[],R={};function B(M){return M!==null?2*Math.PI/60*t.autoRotateSpeed*M:2*Math.PI/60/60*t.autoRotateSpeed}function F(){return Math.pow(.95,t.zoomSpeed)}function k(M){o.theta-=M}function Y(M){o.phi-=M}const X=function(){const M=new I;return function(q,UA){M.setFromMatrixColumn(UA,0),M.multiplyScalar(-q),c.add(M)}}(),T=function(){const M=new I;return function(q,UA){t.screenSpacePanning===!0?M.setFromMatrixColumn(UA,1):(M.setFromMatrixColumn(UA,0),M.crossVectors(t.object.up,M)),M.multiplyScalar(q),c.add(M)}}(),O=function(){const M=new I;return function(q,UA){const wA=t.domElement;if(t.object.isPerspectiveCamera){const xA=t.object.position;M.copy(xA).sub(t.target);let gA=M.length();gA*=Math.tan(t.object.fov/2*Math.PI/180),X(2*q*gA/wA.clientHeight,t.object.matrix),T(2*UA*gA/wA.clientHeight,t.object.matrix)}else t.object.isOrthographicCamera?(X(q*(t.object.right-t.object.left)/t.object.zoom/wA.clientWidth,t.object.matrix),T(UA*(t.object.top-t.object.bottom)/t.object.zoom/wA.clientHeight,t.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),t.enablePan=!1)}}();function W(M){t.object.isPerspectiveCamera||t.object.isOrthographicCamera?l/=M:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),t.enableZoom=!1)}function K(M){t.object.isPerspectiveCamera||t.object.isOrthographicCamera?l*=M:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),t.enableZoom=!1)}function j(M){if(!t.zoomToCursor)return;y=!0;const iA=t.domElement.getBoundingClientRect(),q=M.clientX-iA.left,UA=M.clientY-iA.top,wA=iA.width,xA=iA.height;x.x=q/wA*2-1,x.y=-(UA/xA)*2+1,C.set(x.x,x.y,1).unproject(t.object).sub(t.object.position).normalize()}function Z(M){return Math.max(t.minDistance,Math.min(t.maxDistance,M))}function J(M){u.set(M.clientX,M.clientY)}function Q(M){j(M),f.set(M.clientX,M.clientY)}function N(M){g.set(M.clientX,M.clientY)}function sA(M){h.set(M.clientX,M.clientY),p.subVectors(h,u).multiplyScalar(t.rotateSpeed);const iA=t.domElement;k(2*Math.PI*p.x/iA.clientHeight),Y(2*Math.PI*p.y/iA.clientHeight),u.copy(h),t.update()}function lA(M){E.set(M.clientX,M.clientY),v.subVectors(E,f),v.y>0?W(F()):v.y<0&&K(F()),f.copy(E),t.update()}function cA(M){m.set(M.clientX,M.clientY),d.subVectors(m,g).multiplyScalar(t.panSpeed),O(d.x,d.y),g.copy(m),t.update()}function _A(M){j(M),M.deltaY<0?K(F()):M.deltaY>0&&W(F()),t.update()}function TA(M){let iA=!1;switch(M.code){case t.keys.UP:M.ctrlKey||M.metaKey||M.shiftKey?Y(2*Math.PI*t.rotateSpeed/t.domElement.clientHeight):O(0,t.keyPanSpeed),iA=!0;break;case t.keys.BOTTOM:M.ctrlKey||M.metaKey||M.shiftKey?Y(-2*Math.PI*t.rotateSpeed/t.domElement.clientHeight):O(0,-t.keyPanSpeed),iA=!0;break;case t.keys.LEFT:M.ctrlKey||M.metaKey||M.shiftKey?k(2*Math.PI*t.rotateSpeed/t.domElement.clientHeight):O(t.keyPanSpeed,0),iA=!0;break;case t.keys.RIGHT:M.ctrlKey||M.metaKey||M.shiftKey?k(-2*Math.PI*t.rotateSpeed/t.domElement.clientHeight):O(-t.keyPanSpeed,0),iA=!0;break}iA&&(M.preventDefault(),t.update())}function SA(){if(U.length===1)u.set(U[0].pageX,U[0].pageY);else{const M=.5*(U[0].pageX+U[1].pageX),iA=.5*(U[0].pageY+U[1].pageY);u.set(M,iA)}}function QA(){if(U.length===1)g.set(U[0].pageX,U[0].pageY);else{const M=.5*(U[0].pageX+U[1].pageX),iA=.5*(U[0].pageY+U[1].pageY);g.set(M,iA)}}function te(){const M=U[0].pageX-U[1].pageX,iA=U[0].pageY-U[1].pageY,q=Math.sqrt(M*M+iA*iA);f.set(0,q)}function DA(){t.enableZoom&&te(),t.enablePan&&QA()}function H(){t.enableZoom&&te(),t.enableRotate&&SA()}function Me(M){if(U.length==1)h.set(M.pageX,M.pageY);else{const q=hA(M),UA=.5*(M.pageX+q.x),wA=.5*(M.pageY+q.y);h.set(UA,wA)}p.subVectors(h,u).multiplyScalar(t.rotateSpeed);const iA=t.domElement;k(2*Math.PI*p.x/iA.clientHeight),Y(2*Math.PI*p.y/iA.clientHeight),u.copy(h)}function EA(M){if(U.length===1)m.set(M.pageX,M.pageY);else{const iA=hA(M),q=.5*(M.pageX+iA.x),UA=.5*(M.pageY+iA.y);m.set(q,UA)}d.subVectors(m,g).multiplyScalar(t.panSpeed),O(d.x,d.y),g.copy(m)}function FA(M){const iA=hA(M),q=M.pageX-iA.x,UA=M.pageY-iA.y,wA=Math.sqrt(q*q+UA*UA);E.set(0,wA),v.set(0,Math.pow(E.y/f.y,t.zoomSpeed)),W(v.y),f.copy(E)}function MA(M){t.enableZoom&&FA(M),t.enablePan&&EA(M)}function ie(M){t.enableZoom&&FA(M),t.enableRotate&&Me(M)}function RA(M){t.enabled!==!1&&(U.length===0&&(t.domElement.setPointerCapture(M.pointerId),t.domElement.addEventListener("pointermove",IA),t.domElement.addEventListener("pointerup",WA)),tA(M),M.pointerType==="touch"?D(M):ue(M))}function IA(M){t.enabled!==!1&&(M.pointerType==="touch"?eA(M):we(M))}function WA(M){BA(M),U.length===0&&(t.domElement.releasePointerCapture(M.pointerId),t.domElement.removeEventListener("pointermove",IA),t.domElement.removeEventListener("pointerup",WA)),t.dispatchEvent(Xu),r=i.NONE}function ue(M){let iA;switch(M.button){case 0:iA=t.mouseButtons.LEFT;break;case 1:iA=t.mouseButtons.MIDDLE;break;case 2:iA=t.mouseButtons.RIGHT;break;default:iA=-1}switch(iA){case Rn.DOLLY:if(t.enableZoom===!1)return;Q(M),r=i.DOLLY;break;case Rn.ROTATE:if(M.ctrlKey||M.metaKey||M.shiftKey){if(t.enablePan===!1)return;N(M),r=i.PAN}else{if(t.enableRotate===!1)return;J(M),r=i.ROTATE}break;case Rn.PAN:if(M.ctrlKey||M.metaKey||M.shiftKey){if(t.enableRotate===!1)return;J(M),r=i.ROTATE}else{if(t.enablePan===!1)return;N(M),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&t.dispatchEvent(po)}function we(M){switch(r){case i.ROTATE:if(t.enableRotate===!1)return;sA(M);break;case i.DOLLY:if(t.enableZoom===!1)return;lA(M);break;case i.PAN:if(t.enablePan===!1)return;cA(M);break}}function S(M){t.enabled===!1||t.enableZoom===!1||r!==i.NONE||(M.preventDefault(),t.dispatchEvent(po),_A(M),t.dispatchEvent(Xu))}function w(M){t.enabled===!1||t.enablePan===!1||TA(M)}function D(M){switch(rA(M),U.length){case 1:switch(t.touches.ONE){case Hn.ROTATE:if(t.enableRotate===!1)return;SA(),r=i.TOUCH_ROTATE;break;case Hn.PAN:if(t.enablePan===!1)return;QA(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(t.touches.TWO){case Hn.DOLLY_PAN:if(t.enableZoom===!1&&t.enablePan===!1)return;DA(),r=i.TOUCH_DOLLY_PAN;break;case Hn.DOLLY_ROTATE:if(t.enableZoom===!1&&t.enableRotate===!1)return;H(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&t.dispatchEvent(po)}function eA(M){switch(rA(M),r){case i.TOUCH_ROTATE:if(t.enableRotate===!1)return;Me(M),t.update();break;case i.TOUCH_PAN:if(t.enablePan===!1)return;EA(M),t.update();break;case i.TOUCH_DOLLY_PAN:if(t.enableZoom===!1&&t.enablePan===!1)return;MA(M),t.update();break;case i.TOUCH_DOLLY_ROTATE:if(t.enableZoom===!1&&t.enableRotate===!1)return;ie(M),t.update();break;default:r=i.NONE}}function $(M){t.enabled!==!1&&M.preventDefault()}function tA(M){U.push(M)}function BA(M){delete R[M.pointerId];for(let iA=0;iA<U.length;iA++)if(U[iA].pointerId==M.pointerId){U.splice(iA,1);return}}function rA(M){let iA=R[M.pointerId];iA===void 0&&(iA=new NA,R[M.pointerId]=iA),iA.set(M.pageX,M.pageY)}function hA(M){const iA=M.pointerId===U[0].pointerId?U[1]:U[0];return R[iA.pointerId]}t.domElement.addEventListener("contextmenu",$),t.domElement.addEventListener("pointerdown",RA),t.domElement.addEventListener("pointercancel",WA),t.domElement.addEventListener("wheel",S,{passive:!1}),this.update()}}class w2{constructor(A,e=0,t=!0){if(A){const{title:i,header:r,rows:s}=this.extract(A);this._title=i,this._header=r,this._rows=s}}extract(A){const e=A.toString().split(/\r?\n/),t=e[0],i=e[1].split(","),r=e[e.length-1]===""?e.length-1:e.length;return{title:t,header:i,rows:e.slice(1,r)}}get columnCount(){return this.header?this.header.length:this.rows[0].length}get rowCount(){return this.rows.length}getNumber(A,e){const t=this.rows[A];return parseFloat(t.split(",")[e])}get title(){return this._title}get header(){return this._header}get rows(){return this._rows}}class dl extends ln{constructor(A,e=30,t=1,i=8,r=!1){super(),this.type="HelixGeometry",this.parameters={path:A,tubularSegments:e,radius:t,radialSegments:i,closed:r};const s=A.computeFrenetFrames(e,r);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;const a=new I,o=new I,l=new NA;let c=new I;const u=[],h=[],p=[],g=[],m=[];d(),this.setIndex(g),this.setAttribute("position",new ht(u,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(p,2)),this.setAttribute("vColors",new ht(m,3));function d(){for(let C=0;C<e;C++)f(C);f(r===!1?e:0),v(),E()}function f(C){const x=A.getUtoTmapping(C/e);c=A.getPoint(x,c);const y=A.getColor(x),U=s.normals[C],R=s.binormals[C];for(let B=0;B<=i;B++){const F=B/i*Math.PI*2,k=Math.sin(F),Y=-Math.cos(F);o.x=Y*U.x+k*R.x,o.y=Y*U.y+k*R.y,o.z=Y*U.z+k*R.z,o.normalize(),h.push(o.x,o.y,o.z),a.x=c.x+t*o.x,a.y=c.y+t*o.y,a.z=c.z+t*o.z,u.push(a.x,a.y,a.z),m.push(y.r,y.g,y.b)}}function E(){for(let C=1;C<=e;C++)for(let x=1;x<=i;x++){const y=(i+1)*(C-1)+(x-1),U=(i+1)*C+(x-1),R=(i+1)*C+x,B=(i+1)*(C-1)+x;g.push(y,U,B),g.push(U,R,B)}}function v(){for(let C=0;C<=e;C++)for(let x=0;x<=i;x++)l.x=C/e,l.y=x/i,p.push(l.x,l.y)}}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}toJSON(){const A=super.toJSON();return A.path=this.parameters.path.toJSON(),A}static fromJSON(A){return new dl(new Curves[A.path.type]().fromJSON(A.path),A.tubularSegments,A.radius,A.radialSegments,A.closed)}}const Jo=12,bf=[],Tf=[];var mr,Br,wr,vi,vr,Tt;class v2{constructor(A,e=-1,t=1.5,i=.4,r=1,s=2.5){re(this,mr,void 0);re(this,Br,void 0);re(this,wr,void 0);re(this,vi,void 0);re(this,vr,void 0);re(this,Tt,void 0);this.settings=A,this.csv=new w2(A.showcaseCSV),this.helixConfiguration={minT:e,maxT:t,minR:i,maxR:r,height:s},$A(this,wr,A.cold),$A(this,vi,A.zero),$A(this,vr,A.warm),this.curve=[]}createMesh(A={wireframe:!1,vertexColors:!0}){this.createCurve();const e=this.createGeometry();A.wireframe&&(A.color=dr.styledColor("--wireframe-color"));const[t,i,r]=mA(this,mr).toArray();e.translate(-t,-i,-r);const s=new el(A);return $A(this,Br,new Lt(e,s)),mA(this,Br)}createCurve(){if(this.curve.length===0){this.years=this.csv.rowCount;for(let A=0;A<this.years;A++)for(let e=0;e<12;e++){const t=this.helixPoint(A,e);t&&this.curve.push(t)}$A(this,mr,this.centerOfGravity())}}centerOfGravity(){if(!this.curve||this.curve.length===0)return new I(0,0,0);let A=0,e=0,t=0;const i=this.curve.length;return this.curve.forEach((r,s)=>{A+=r.radius*r.cosX,e+=r.radius*r.sinX,t+=s/i*this.height}),new I(A/i,e/i,t/i)}createGeometry(){const A=this.settings.radiusFactor*this.helixConfiguration.height/this.years,e=new dl(new _2(this),this.settings.tubularSegments*(this.curve.length-1),A,this.settings.radialSegments,!1),t=e.getAttribute("vColors"),i=new ft(new Float32Array(t.array),3);return e.setAttribute("color",i),e}helixPoint(A,e){const t=this.csv.getNumber(A,e+1);if(t){const i=Qf(this.helixConfiguration.minT,this.helixConfiguration.maxT,this.helixConfiguration.minR,this.helixConfiguration.maxR,t),r=new YA;return t<0?r.lerpColors(mA(this,vi),mA(this,wr),Math.abs(t)):r.lerpColors(mA(this,vi),mA(this,vr),t),{sinX:bf[e],cosX:Tf[e],radius:i,temperature:t,color:r}}}get height(){return this.helixConfiguration.height}get length(){return this.curve.length/Jo}curveIndex(A){return Math.floor((this.curve.length-1)*A)}info(A){return this.curve[this.curveIndex(A)]}createTitleDiv(A){const e="heading-div",t=A.querySelector(`.${e}`);return t&&A.removeChild(t),mA(this,Tt)||($A(this,Tt,document.createElement("DIV")),mA(this,Tt).setAttribute("class",e),A.appendChild(mA(this,Tt))),mA(this,Tt).innerText=this.csv.title,mA(this,Tt)}}mr=new WeakMap,Br=new WeakMap,wr=new WeakMap,vi=new WeakMap,vr=new WeakMap,Tt=new WeakMap;class _2 extends c1{constructor(A){super(),this.helix=A}getPoint(A,e=new I){const t=2*Math.PI*this.helix.length*A,i=this.helix.curveIndex(A),r=this.helix.curve[i],s=this.helix.curve[i+1]||r,a=i/(this.helix.curve.length-1),o=(i+1)/(this.helix.curve.length-1),l=Qf(a,o,r.radius,s.radius,A),c=l*Math.cos(t),u=l*Math.sin(t),h=this.helix.height*A;return e.set(c,u,h)}getColor(A){const e=this.helix.curveIndex(A),t=this.helix.curve[e],i=this.helix.curve[e+1]||t,r=e/(this.helix.curve.length-1),s=(e+1)/(this.helix.curve.length-1);return new YA().lerpColors(t.color,i.color,(A-r)/(s-r))}}for(let n=0;n<Jo;n++){const A=2*Math.PI*n/Jo;bf.push(Math.sin(A)),Tf.push(Math.cos(A))}function Qf(n,A,e,t,i){return A-n===0?(e+t)/2:(i-n)*(t-e)/(A-n)+e}HTMLCanvasElement.prototype.getContext=function(n){return function(A,e){return e=e||{},e.preserveDrawingBuffer=!0,n.call(this,A,e)}}(HTMLCanvasElement.prototype.getContext);var _i,Ci,Un,ks,If;class C2{constructor(A,e={All:void 0,Helix:void 0}){re(this,ks);re(this,_i,void 0);re(this,Ci,void 0);re(this,Un,void 0);$A(this,_i,()=>document.body),_l(this,ks,If).call(this,A,e),document.addEventListener("keydown",t=>{t.altKey&&t.key==="s"&&(t.stopPropagation(),t.preventDefault(),this.capture())})}capture(A=mA(this,_i)){console.log(`screenCapture ${A}`);const e=A();if(!e)throw new Error("No element to capture");setTimeout(()=>{const i=window.getComputedStyle(document.body).getPropertyValue("background-color");Ff(e,{backgroundColor:i}).then(r=>{const s=document.createElement("a");s.href=r.toDataURL(),s.download="climate-helix.png",s.click()})},100)}}_i=new WeakMap,Ci=new WeakMap,Un=new WeakMap,ks=new WeakSet,If=function(A,e){const t={};$A(this,Ci,e);for(const[s,a]of Object.entries(e))t[s]=void 0;const i=A.folder,r=A.property;r.selection="All",$A(this,Un,"All"),$A(this,_i,()=>(console.log(mA(this,Un)),console.log(mA(this,Ci)),mA(this,Ci)[mA(this,Un)])),r.on_capture_clicked=()=>this.capture(),dr.addRadioButtons(i,r.selection,t,(s,a,o)=>{console.log(`${s}, ${a}, ${o}`),$A(this,Un,o)}),i.add(r,"on_capture_clicked").name("Click or press 'alt s'")};const E2=`<p>The 3D helix visualizes <u>differences to a temperature mean</u> calculated for a specific month within the region of
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
</ol>`,sa=document.createElement("DIV"),Lf=".container-div";sa.setAttribute("class","container-div");document.body.appendChild(sa);const rr=new dr,x2=new u2({container:sa});let ui,Cn,sr,Xt,ws,vs;function U2(){sr=new l1,Xt=new Eh({antialias:!0}),Xt.setPixelRatio(window.devicePixelRatio);const n=window.innerWidth,A=window.innerHeight;Xt.setSize(n,A),sa.appendChild(Xt.domElement),y2();const e=n/A;Cn=new At(50,e),Cn.position.set(0,0,5.5),sr.add(Cn),ui=new Gi,sr.add(ui),new B2(Cn,Xt.domElement).update(),window.addEventListener("resize",b2),window.addEventListener(XA.CREATE_HELIX,Rf),document.body.addEventListener(XA.THEME_CHANGED.toString(),M2);const i={All:document.body,Helix:Xt.domElement};new C2(rr.captureSettings(),i),S2(),F2(),XA.dispatchEvent(XA.THEME_CHANGED),Hf()}function y2(){return new hl(document.body,n=>{const e=window.getComputedStyle(document.body).getPropertyValue("background-color");sr.background=new YA(e)})}function Rf(){ws&&ui.remove(ws),vs&&ui.remove(vs);const n=new v2(rr);rr.showFaces&&(ws=n.createMesh(),ui.add(ws)),rr.showWireframe&&(vs=n.createMesh({wireframe:!0,vertexColors:!1}),ui.add(vs));const A=document.querySelector(Lf);n.createTitleDiv(A)}function S2(){const n=document.querySelector(Lf)||document.body;new g2(n)}function F2(){const n=document.createElement("DIV");n.setAttribute("id","info-div"),n.innerHTML=E2;const A=document.querySelector(".info-button");A==null||A.insertAdjacentElement("beforebegin",n);const e=document.createElement("SPAN");e.setAttribute("id","version-info"),e.innerHTML="v0.2.6",A==null||A.insertAdjacentElement("beforebegin",e)}function Hf(){requestAnimationFrame(Hf),Xt.render(sr,Cn)}function M2(){rr.initializeColors(),Rf()}function b2(){Cn.aspect=window.innerWidth/window.innerHeight,Cn.updateProjectionMatrix(),Xt.setSize(window.innerWidth,window.innerHeight)}U2();x2.initTheme();
